# Hoja de estilos

En la hoja de estilos `style.css` se le indica a WordPress que se trata de un tema, debe estar a la altura del `index.php` o el `home.php` para que WordPress lo lea.

## Configuración

::: tip
El comentario con la información debe de ir al principio de la hoja de estilos, y es esta información lo que le indica a WordPress que se trata de un tema
:::

```css
/*
    Theme Name: nombreTheme
    Theme URI:
    Author: Athor Name
    Author URI: sitiopersonaloempresarial.com
    Description: Theme
    Version: 1.0
    License: GNU General Public License v2 or later
    License URI: http://www.gnu.org/licenses/gpl-2.0.html
    Tags: Css, ensayo, felxbox
    Text Domain: nombretheme
*/
```

## Activar la hoja de estilos

Por defecto WordPress no mostarará los estilos definidos en el `style.css`.

Por lo que es necesario "activarla" con una función en el archivo `functions.php`
