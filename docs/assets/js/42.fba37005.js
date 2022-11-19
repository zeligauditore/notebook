(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{450:function(e,a,i){"use strict";i.r(a);var p=i(24),s=Object(p.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"jerarquia-de-archivos"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#jerarquia-de-archivos"}},[e._v("#")]),e._v(" Jerarquía de archivos")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Importante")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://developer.wordpress.org/themes/basics/template-hierarchy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Revisar la documentación para más detalles"),i("OutboundLink")],1)])]),e._v(" "),i("img",{attrs:{src:e.$withBase("/img/wp/wp.png")}}),e._v(" "),i("h2",{attrs:{id:"home-page"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#home-page"}},[e._v("#")]),e._v(" Home Page")]),e._v(" "),i("p",[e._v("Página de inicio")]),e._v(" "),i("p",[e._v("De forma predeterminada, WordPress configura la página de inicio de su sitio para mostrar sus últimas publicaciones de blog. Esta página se llama el índice de publicaciones del blog. También puede configurar las publicaciones de su blog para que se muestren en una página estática separada. El archivo de plantilla "),i("code",[e._v("home.php")]),e._v(" se usa para representar el índice de publicaciones del blog, ya sea que se use como página principal o en una página estática separada. Si "),i("code",[e._v("home.php")]),e._v(" no existe, WordPress usará "),i("code",[e._v("index.php")]),e._v(".")]),e._v(" "),i("ul",[i("li",[e._v("home.php")]),e._v(" "),i("li",[e._v("index.php")])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Nota")]),e._v(" "),i("p",[e._v("Si "),i("code",[e._v("front-page.php")]),e._v(" existe, sobreescribira el "),i("code",[e._v("home.php")]),e._v(" template.")])]),e._v(" "),i("h2",{attrs:{id:"front-page-display"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#front-page-display"}},[e._v("#")]),e._v(" Front Page display")]),e._v(" "),i("p",[e._v("El archivo de plantilla front-page.php se usa para representar la página principal de su sitio, ya sea que la página principal muestre el índice de publicaciones del blog (mencionado anteriormente) o una página estática. La plantilla de la página principal tiene prioridad sobre la plantilla del índice de publicaciones del blog (home.php). Si el archivo front-page.php no existe, WordPress usará los archivos home.php o page.php dependiendo de la configuración en Configuración → Lectura. Si ninguno de esos archivos existe, utilizará el archivo index.php.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("front-page.php – "),i("code",[e._v('front-page.php: se usa tanto para "sus últimas publicaciones" como para "una página estática" como se establece en la sección de pantallas de la página principal de Configuración → Lectura.')])])]),e._v(" "),i("li",[i("p",[e._v("home.php - "),i("code",[e._v('Si WordPress no puede encontrar front-page.php y "tus últimas publicaciones" está configurada en la sección de visualización de la página principal, buscará home.php. Además, WordPress buscará este archivo cuando la página de publicaciones esté configurada en la sección de visualización de la página principal.')])])]),e._v(" "),i("li",[i("p",[e._v("page.php - "),i("code",[e._v("Cuando se configura “portada” en la sección de visualizaciones de la portada.")])])]),e._v(" "),i("li",[i("p",[e._v("index.php - "),i("code",[e._v('Cuando "tus últimas publicaciones" está configurado en la sección de visualización de la página principal pero home.php no existe o cuando la página principal está configurada pero page.php no existe.')])])])]),e._v(" "),i("h2",{attrs:{id:"privacy-policy-page-display"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#privacy-policy-page-display"}},[e._v("#")]),e._v(" Privacy Policy Page display")]),e._v(" "),i("p",[e._v("El archivo de plantilla "),i("code",[e._v("privacy-policy.php")]),e._v(" se utiliza para representar la página de Política de privacidad de su sitio. La plantilla de la página de Política de privacidad tiene prioridad sobre la plantilla de la página estática ("),i("code",[e._v("page.php")]),e._v("). Si el archivo privacy-policy.php no existe, WordPress utilizará los archivos "),i("code",[e._v("page.php")]),e._v(" o "),i("code",[e._v("singular.php")]),e._v(" según las plantillas disponibles. Si ninguno de esos archivos existe, utilizará el archivo "),i("code",[e._v("index.php")]),e._v(".")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("privacy-policy.php - "),i("code",[e._v("Se utiliza para la página de Política de privacidad configurada en la sección Cambiar su página de Política de privacidad de Configuración → Privacidad.")])])]),e._v(" "),i("li",[i("p",[e._v("custom template file - "),i("a",{attrs:{href:"https://developer.wordpress.org/themes/template-files-section/page-template-files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("La plantilla de página asignada a la página"),i("OutboundLink")],1),e._v(". "),i("code",[e._v("get_page_templates().")])])])]),e._v(" "),i("h2",{attrs:{id:"single-post"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#single-post"}},[e._v("#")]),e._v(" Single Post")]),e._v(" "),i("p",[e._v("El archivo de "),i("code",[e._v("single post")]),e._v(" se utiliza para representar una publicación única. WordPress utiliza la siguiente ruta:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("single-{post-type}-{slug}.php - "),i("code",[e._v("Si el tipo de publicación es product y el slug de publicación es dmc-12, WordPress buscará single-product-dmc-12.php.")])])]),e._v(" "),i("li",[i("p",[e._v("single-{post-type}.php - "),i("code",[e._v("Si el tipo de post es product, WordPress buscará single-product.php")])])]),e._v(" "),i("li",[i("p",[e._v("single.php - "),i("code",[e._v("WordPress entonces recurre a single.php.")])])]),e._v(" "),i("li",[i("p",[e._v("singular.php - "),i("code",[e._v("WordPress entonces recurre a singular.php.")])])])]),e._v(" "),i("h2",{attrs:{id:"single-page"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#single-page"}},[e._v("#")]),e._v(" Single Page")]),e._v(" "),i("p",[e._v("El archivo de plantilla utilizado para representar una página estática (page post-type). Tenga en cuenta que, a diferencia de otros tipos de publicaciones, la página es especial para WordPress y utiliza la siguiente ruta:")]),e._v(" "),i("ol",[i("li",[e._v("custom template file - "),i("code",[e._v("La page template asignada a esta página, ver:")]),e._v(" "),i("a",{attrs:{href:"https://developer.wordpress.org/reference/functions/get_page_templates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("get_page_templates"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);