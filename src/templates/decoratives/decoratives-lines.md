# Líneas decorativas para Títulos

<img :src="$withBase('/img/decorations/decorative-lines.png')">

## Úso:
El elemento de Título o Texto debe tener la clase **title-decoration** o **title-decoration-bottom** que a su vez deben estar dentro de un contenedor con las clases **text-start**, **text-center**, **text-end** y las variantes responsive de Bootstrp como **text-md-start**, **text-md-center**, **text-md-end** etc.

- `title-decoration` : Creará una línea decorativa **sobre** el elemento.
- `title-decoration-bottom` : Creará una línea decorativa **debajo** del elemento.



## Código HTML

```html
<div class="text-start">
    <h3 class="lg-subtitle title-decoration">
        Tu lo sueñas
    </h3>
</div>
```


## Código SASS

- Para cambiar el alto editar la línea `10`
- Para cambiar el ancho editar la línea `14` y `15`

```css{10,14,15}
/* 
* Decorative Title Lines Styles 
*/
.title-decoration::before,
.title-decoration-bottom::after{
    margin-right: auto;
    display: block;
    clear: both;
    content: "";
    height: 10px;
    position: relative;
    left: 0;
    bottom: 0;
    max-width: 100px;
    width: 30%;
    border-bottom: 6px solid #c30;
    margin-top: 10px !important;
}

// Text Align Center Decorative Line
@mixin textCenter {
    .title-decoration::before,
    .title-decoration-bottom::after{
        margin: auto !important;

        margin-left: 0;
        margin-right: 0;
    }
  }
.text-center{
    .title-decoration::before,
    .title-decoration-bottom::after{
        margin: auto;
    }
}
.text-md-center{
    @media screen and (min-width: 768px){
        @include textCenter;
    }
}
.text-lg-center{
    @media screen and (min-width: 992px){
        @include textCenter;
    }
}
.text-xl-center{
    @media screen and (min-width: 1200px){
        @include textCenter;
    }
}
.text-xxl-center{
    @media screen and (min-width: 1200px){
        @include textCenter;
    }
}
// Text Align Center Decorative Line

// Text Align End Decorative Line
@mixin textEnd {
    .title-decoration::before,
    .title-decoration-bottom::after{
        margin-left: auto !important;
        margin: 0;
    }
  }
.text-end{
    .title-decoration::before,
    .title-decoration-bottom::after{
        margin-left: auto !important;
        margin-right: 0;
    }
}
.text-md-end{
    @media screen and (min-width: 768px){
        @include textEnd;
    }
}
.text-lg-end{
    @media screen and (min-width: 992px){
        @include textEnd;
    }
}
.text-xl-end{
    @media screen and (min-width: 1200px){
        @include textEnd;
    }
}
.text-xxl-end{
    @media screen and (min-width: 1200px){
        @include textEnd;
    }
}
// Text Align End Decorative Line

/* 
* Decorative Title Lines Styles 
*/
```

## Compilado CSS
```css
/* 
* Decorative Title Lines Styles 
*/
.title-decoration::before,
.title-decoration-bottom::after {
  margin-right: auto;
  display: block;
  clear: both;
  content: "";
  position: relative;
  left: 0;
  bottom: 0;
  max-width: 100px;
  height: 10px;
  width: 30%;
  border-bottom: 6px solid #c30;
  margin-top: 10px !important;
}

.text-center .title-decoration::before,
.text-center .title-decoration-bottom::after {
  margin: auto;
}

@media screen and (min-width: 768px) {
  .text-md-center .title-decoration::before,
  .text-md-center .title-decoration-bottom::after {
    margin: auto !important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (min-width: 992px) {
  .text-lg-center .title-decoration::before,
  .text-lg-center .title-decoration-bottom::after {
    margin: auto !important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (min-width: 1200px) {
  .text-xl-center .title-decoration::before,
  .text-xl-center .title-decoration-bottom::after {
    margin: auto !important;
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (min-width: 1200px) {
  .text-xxl-center .title-decoration::before,
  .text-xxl-center .title-decoration-bottom::after {
    margin: auto !important;
    margin-left: 0;
    margin-right: 0;
  }
}

.text-end .title-decoration::before,
.text-end .title-decoration-bottom::after {
  margin-left: auto !important;
  margin-right: 0;
}

@media screen and (min-width: 768px) {
  .text-md-end .title-decoration::before,
  .text-md-end .title-decoration-bottom::after {
    margin-left: auto !important;
    margin: 0;
  }
}

@media screen and (min-width: 992px) {
  .text-lg-end .title-decoration::before,
  .text-lg-end .title-decoration-bottom::after {
    margin-left: auto !important;
    margin: 0;
  }
}

@media screen and (min-width: 1200px) {
  .text-xl-end .title-decoration::before,
  .text-xl-end .title-decoration-bottom::after {
    margin-left: auto !important;
    margin: 0;
  }
}

@media screen and (min-width: 1200px) {
  .text-xxl-end .title-decoration::before,
  .text-xxl-end .title-decoration-bottom::after {
    margin-left: auto !important;
    margin: 0;
  }
}

/* 
* Decorative Title Lines Styles 
/*
```