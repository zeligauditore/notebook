# FlexBox

El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.  
Cuando describimos a flexbox como unidimensional destacamos el hecho que flexbox maneja el layout en una sola dimensión a la vez, ya sea como fila o como columna.

## Los dos ejes de flexbox
Cuando trabajamos con flexbox necesitamos pensar en términos de dos ejes — el eje principal y el eje cruzado. El eje principal está definido por la propiedad `flex-direction`, y el eje cruzado es perpendicular a este.

### El eje proncipal
El eje principal está definido por `flex-direction`, que posee cuatro posibles valores:
* `row`
* `row-reverse`
* `column`
* `column-reverse`  

Si elegimos row o row-reverse, el eje principal correrá a lo largo de la fila según la dirección de la línea .

<img :src="$withBase('/img/flexbox/basics1.png')">

Al elegir `column` o `column-reverse` el eje principal correrá desde el borde superior de la página hasta el final — según la dirección del bloque.

<img :src="$withBase('/img/flexbox/basics2.png')">

### El eje cruzado
El eje cruzado va perpendicular al eje principal, y por lo tanto si `flex-direction` (del eje principal) es `row` o `row-reverse` el eje cruzado irá por las columnas.

<img :src="$withBase('/img/flexbox/basics3.png')">

Entender cuál eje es cuál es importante cuando empezamos a mirar la alineación y justificación flexible de los ítems; flexbox posee propiedades que permiten alinear y justificar el contenido sobre un eje o el otro.

## El contenedor flex
Un área del documento que contiene un flexbox es llamada contendedor flex. Para crear un contenedor flex, establecemos la propiedad del área del contenedor `display` como `flex` o `inline-flex`. Tan pronto como hacemos esto, **los hijos directos de este contenedor se vuelven ítems flex**. Como con todas las propiedades de CSS, se definen algunos valores iniciales, así que cuando creemos un contenedor flex todos los ítems flex contenidos se comportarán de la siguiente manera.

* Los ítems se despliegan sobre una fila (la propiedad `flex-direction` por defecto es `row`).
* Los ítems empiezan desde el margen inicial sobre el eje principal.
* Los ítems no se ajustan en la dimensión principal, pero se pueden contraer.
* Los ítems se ajustarán para llenar el tamaño del eje cruzado.
* La propiedad `flex-basis` es definida como `auto`.
* La propiedad `flex-wrap` es definida como `nowrap`.  

El resultado es que todos los ítems se alinearán en una solo fila, usando el tamaño del contenedor como su tamaño en el eje principal. Si hay más ítems de los que caben en el contenedor, estos no pasarán más abajo si no que sobrepasarán el margen. Si hay ítems más altos que otros, todos los ítems serán ajustados en el eje cruzado para alcanzar al mayor.

## Propiedades
Al contenedor padre se le debe aplica la propiedad `display` con el atributo `flex` o `inline-flex` para que se convierta en un **contenedor flex.**

```css
.container {
  display: flex; /* o inline-flex */
}
```

Despues se agregan las reglas **que afectaran a los elementos hijos** del contenedor.
```css
.container {
  display: flex;
  flex-direction:row; /* o row-reverse etc */
}
```

## Flex-direction
Esta propiedad es para elemento padre. Nos permite establecer o cambiar la dirección de los items.  

### Row
Igual a la dirección del texto  
```css
.container {
  display: flex;
  flex-direction:row;
}
```
<img :src="$withBase('/img/flexbox/flexd-row.png')">

### Row-reverse
Igual a la dirección contraria del texto (Orden inverso)  
```css
.container {
  display: flex;
  flex-direction:row-reverse;
}
```
<img :src="$withBase('/img/flexbox/flexdr-reverse.png')">

### Column
Igual a `row` pero ordenado de arriba hacia abajo (En columna)  
```css
.container {
  display: flex;
  flex-direction:column;
}
```
<img :src="$withBase('/img/flexbox/flexdr-col.png')">

### Column-reverse
Igual a `column` pero los items se acomodan en orden inverso (En columna)  
```css
.container {
  display: flex;
  flex-direction:column-reverse;
}
```
<img :src="$withBase('/img/flexbox/flexdr-colrev.png')">

## Ejemplo de syntaxis (Flex-direction)
```css
.container {
  display: flex; /* Convierte al contenedor en contenedor flex */
  flex-direction: row | row-reverse | column | column-reverse; /* Afecta a los items hijos */
}
```

## Flex-wrap

Si bien flexbox es un modelo unidimensional, es posible lograr que nuestros ítems flex sean repartidos en varías líneas. Haciendo esto, se deberá considerar cada línea como un nuevo contenedor flex. Cualquier distribución del espacio solo sucederá dentro de esa línea, sin referenciar las líneas colaterales.  

**La propiedad flex-wrap de CSS  especifica si los elementos "hijos" son obligados a permanecer en una misma línea o pueden fluir en varias líneas.**  

Para lograr repartirse en varias líneas añada la propiedad `flex-wrap` con el valor `wrap`. Cuando los ítems sean demasiados para desplegarlos en una línea, serán repartidos en la línea siguiente.  

Esto permite "envolver" los items y prevenir que se salgan del margen (Overflow).  

### Nowrap
Los elementos flex son distribuidos en una sola línea, lo cual puede llevar a que se desborde el contenedor flex. (default)  
```css
.container {
  display: flex;
  flex-wrap: nowrap;
}
```
<img :src="$withBase('/img/flexbox/flex-wrap-nowgrap.png')">