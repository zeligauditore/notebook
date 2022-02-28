# Básicos de Markdown y VuePress

## Enlaces

El texto del enlace debe estar escrito entre `[]` y el enlace endtre `()`

```md
Esto es un enlace a [Youtube](https://www.youtube.com/)
```
Esto es un enlace a [Youtube](https://www.youtube.com/)


## Text Code

Para escribir codigos en los parrafos se usan: ` `` `
```md
`cd Descargas`
```
`cd Descargas`


## Imágenes

Para insertar una imagen local

```md
<img :src="$withBase('/img/eliza.jpg')">
```
<img :src="$withBase('/img/eliza.jpg')">

Para insertar una imagen externa

```md
<img :src="('https://icons-for-free.com/iconfiles/png/512/Coding-1320568096072194118.png')">
```
<img :src="('https://icons-for-free.com/iconfiles/png/512/Coding-1320568096072194118.png')">


## Bloques de Código

Los bloques de código deben ser insertados dentro de un bloque de tres comillas invertidas (` ``` `) al inicio y al final, para agregar la sintaxis del lenguaje se escribe la extensión despues de las primeras tres comillas invertidas ` ```js ` (php, html, md, etc.)

```js
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});
```
### Resaltando líneas en bloques de código

Para resaltar una línea de código dentro de un bloque de código se escribe entre ` {} ` el número de línea despúes de la extensión para la sintaxis ` ```js{2} `.

Para múltiples líneas únicas se separan por una ` , ` ` ```js{2,4} `.

Para un rango de líneas (de la 6 a la 7) se separan por un ` ```js{6-7} `.

```js{2,4,6-7}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Tipos de contenedores

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```


::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

### Títulos personalizados

```md
::: danger Titulo en Rojo
Danger zone, do not proceed
:::

::: details Click para ver el código
```js
console.log('Hello, VuePress!')
:::
```

::: danger Titulo en Rojo
Danger zone, do not proceed
:::

::: details Click para ver el código
```js
console.log('Hello, VuePress!')
:::