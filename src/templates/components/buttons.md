# Botones

## Botón flotante de WhatsApp

Por defecto el botón estara en la parte inferior izquierda, con el icono y el tecto "WshatsApp"
<img :src="$withBase('/img/bttns/wa-float.png')">  

Para agregar el número de celular y un mensaje se deben escribir reemplazando lo que esta entre parentesis (eliminando tambien los parentesis)
```html
<!-- HTML -->
<a class="btn-whats" href="https://api.whatsapp.com/send?phone=+521(NUMERO)8&text= (Buen Día, Solicito una Cotización)">
    <i class="fab fa-whatsapp"></i> WhatsApp
</a>
```

Para cambiar la posición del botón a la derecha se debe cambiar la propiedad `left` a `right`
```css
/**
CSS
**/
.btn-whats {
    background-color: #036810;
    color: #fff;
    font-weight: bold;
    padding: 6px;
    border-radius: 5px;
    position: fixed;
    bottom: 20px;
    left: 10px;
}
a.btn-whats,
a.btn-whats:not([href]):not([tabindex]) {
    color: #fff;
}
```