# Botones y Enlaces

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



## Custom Links & Buttons
Links y botones personalizados, Hover & Outline

<img :src="$withBase('/img/bttns/lks.png')">  


### HTML
```html
<!-- link or btn normal -->
<a href="/nosotros" class="orange-btn">Saber Más</a>

<!-- link or btn outline -->
<a href="/contacto" class="orange-btn-outline">Contacto</a>
```

### SCSS
```scss
/* Custom Buttons & Links */
.orange-btn,
.orange-btn-outline{
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #d01000;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 0 !important;
  border-radius: 10px 0px 10px 0px;
}
.orange-btn:hover,
.orange-btn-outline:hover{
  color: white !important;
}

.orange-btn-outline{
  background-color: transparent !important;
  border: 2px solid #d01000 !important;
  transition: all 0.5s ease-out;
}
.orange-btn-outline:hover{
  background-color: #d01000 !important;
  transition: all 0.5s ease-out;
}
/* Custom Buttons & Links */
```