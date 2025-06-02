<?php
// Permite acesso cruzado
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Carrega o WordPress e WooCommerce
require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-load.php');

if (!class_exists('WooCommerce')) {
    echo json_encode(['error' => 'WooCommerce não está ativo.']);
    exit;
}

// Configurações da consulta
$args = [
    'status' => 'publish',
    'limit' => 20,
    'orderby' => 'date',
    'order' => 'DESC',
    'return' => 'objects',
];

// Filtros GET
if (isset($_GET['category'])) {
    $args['category'] = [sanitize_text_field($_GET['category'])];
}
if (isset($_GET['tag'])) {
    $args['tag'] = [sanitize_text_field($_GET['tag'])];
}
if (isset($_GET['page'])) {
    $args['page'] = max(1, intval($_GET['page']));
}

// Busca os produtos
$products = wc_get_products($args);

$result = array_map(function($product) {
    // Imagem principal
    $main_image = wp_get_attachment_url($product->get_image_id());

    // Galeria de imagens (exclui imagem principal)
    $gallery_ids = $product->get_gallery_image_ids();
    $gallery_images = array_map(function($id) {
        return wp_get_attachment_url($id);
    }, $gallery_ids);

    // Tags
    $tags = array_map(function($term) {
        return $term->name;
    }, get_the_terms($product->get_id(), 'product_tag') ?: []);

    // Categorias
    $categories = array_map(function($term) {
        return $term->name;
    }, get_the_terms($product->get_id(), 'product_cat') ?: []);

    // Atributos e variações
    $variations = [];
    if ($product->is_type('variable')) {
        foreach ($product->get_children() as $child_id) {
            $variation = wc_get_product($child_id);
            if (!$variation) continue;

            $variation_attributes = [];
            foreach ($variation->get_attributes() as $key => $value) {
                $clean_key = str_replace('attribute_', '', $key);
                $variation_attributes[$clean_key] = $value;
            }

            $variations[] = [
                'id' => $variation->get_id(),
                'price' => $variation->get_price(),
                'regular_price' => $variation->get_regular_price(),
                'sale_price' => $variation->get_sale_price(),
                'stock_status' => $variation->get_stock_status(),
                'stock_quantity' => $variation->get_stock_quantity(),
                'attributes' => $variation_attributes
            ];
        }
    }

    return [
        'id' => $product->get_id(),
        'name' => $product->get_name(),
        'price' => $product->get_price(),
        'regular_price' => $product->get_regular_price(),
        'sale_price' => $product->get_sale_price(),
        'stock_status' => $product->get_stock_status(),
        'stock_quantity' => $product->get_stock_quantity(),
        'short_description' => wp_strip_all_tags($product->get_short_description()),
        'main_image' => $main_image,
        'gallery_images' => $gallery_images,
        'tags' => $tags,
        'categories' => $categories,
        'is_variable' => $product->is_type('variable'),
        'variations' => $variations
    ];
}, $products);

// Resposta JSON limpa
echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
