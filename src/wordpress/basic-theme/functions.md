# Archivo de Funciones

En este archivo se agregan o activan funcionalidades al tema de WordPress

## NavBar

### Registrando un Menú de navegación

```php
    // Menu de navegacion
    function mainNavBar() {
        register_nav_menus( array(
            'menu-principal' => __('Menu Principal', 'primertema')
        ));
    }

    add_action( 'init', 'mainNavBar');
```

### Agregar clases adicionales al elemento li en el navbar

```php
    // Agregar clases al elemento li del navbar
    function add_additional_class_on_li($classes, $item, $args) {
        if(isset($args->add_li_class)) {
            $classes[] = $args->add_li_class;
        }
        return $classes;
    }
    add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);
```

## Estilos y Scripts

Para que los estilos y los scripts tengan efecto en el tema, deben ser registrados y cargados en el archivo `functions.php`

```php
    // Scripts y Estilos
    function pruebaTheme_scripts_styles() {

        // Hoja de estilos principal
        wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0.0');

        // JS
        wp_enqueue_script( 'my-scripts', get_template_directory_uri() . '/js/scripts.min.js', array( 'jquery' ), '', true );
    }
    add_action('wp_enqueue_scripts', 'pruebaTheme_scripts_styles');
```

### CDN's

Para cargar una cdn basta con poner entre comillas simples la `URL` en el lugar de la ruta

```php
wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', array(), '1.0.0');
```
