# Jerarquía de archivos

::: tip Importante
[Revisar la documentación para más detalles](https://developer.wordpress.org/themes/basics/template-hierarchy/)
:::

<img :src="$withBase('/img/wp/wp.png')">

## Home Page

Página de inicio

De forma predeterminada, WordPress configura la página de inicio de su sitio para mostrar sus últimas publicaciones de blog. Esta página se llama el índice de publicaciones del blog. También puede configurar las publicaciones de su blog para que se muestren en una página estática separada. El archivo de plantilla `home.php` se usa para representar el índice de publicaciones del blog, ya sea que se use como página principal o en una página estática separada. Si `home.php` no existe, WordPress usará `index.php`.

- home.php
- index.php

::: tip Nota
Si `front-page.php` existe, sobreescribira el `home.php` template.
:::

## Front Page display

El archivo de plantilla front-page.php se usa para representar la página principal de su sitio, ya sea que la página principal muestre el índice de publicaciones del blog (mencionado anteriormente) o una página estática. La plantilla de la página principal tiene prioridad sobre la plantilla del índice de publicaciones del blog (home.php). Si el archivo front-page.php no existe, WordPress usará los archivos home.php o page.php dependiendo de la configuración en Configuración → Lectura. Si ninguno de esos archivos existe, utilizará el archivo index.php.

1. front-page.php – `front-page.php: se usa tanto para "sus últimas publicaciones" como para "una página estática" como se establece en la sección de pantallas de la página principal de Configuración → Lectura.`

2. home.php - `Si WordPress no puede encontrar front-page.php y "tus últimas publicaciones" está configurada en la sección de visualización de la página principal, buscará home.php. Además, WordPress buscará este archivo cuando la página de publicaciones esté configurada en la sección de visualización de la página principal.`

3. page.php - `Cuando se configura “portada” en la sección de visualizaciones de la portada.`

4. index.php - `Cuando "tus últimas publicaciones" está configurado en la sección de visualización de la página principal pero home.php no existe o cuando la página principal está configurada pero page.php no existe.`

## Privacy Policy Page display

El archivo de plantilla `privacy-policy.php` se utiliza para representar la página de Política de privacidad de su sitio. La plantilla de la página de Política de privacidad tiene prioridad sobre la plantilla de la página estática (`page.php`). Si el archivo privacy-policy.php no existe, WordPress utilizará los archivos `page.php` o `singular.php` según las plantillas disponibles. Si ninguno de esos archivos existe, utilizará el archivo `index.php`.

1. privacy-policy.php - `Se utiliza para la página de Política de privacidad configurada en la sección Cambiar su página de Política de privacidad de Configuración → Privacidad.`

2. custom template file - [La plantilla de página asignada a la página](https://developer.wordpress.org/themes/template-files-section/page-template-files/). `get_page_templates().`

## Single Post

El archivo de `single post` se utiliza para representar una publicación única. WordPress utiliza la siguiente ruta:

1. single-{post-type}-{slug}.php - `Si el tipo de publicación es product y el slug de publicación es dmc-12, WordPress buscará single-product-dmc-12.php.`

2. single-{post-type}.php - `Si el tipo de post es product, WordPress buscará single-product.php`

3. single.php - `WordPress entonces recurre a single.php.`

4. singular.php - `WordPress entonces recurre a singular.php.`

## Single Page

El archivo de plantilla utilizado para representar una página estática (page post-type). Tenga en cuenta que, a diferencia de otros tipos de publicaciones, la página es especial para WordPress y utiliza la siguiente ruta:

1. custom template file - `La page template asignada a esta página, ver:` [get_page_templates](https://developer.wordpress.org/reference/functions/get_page_templates/)
