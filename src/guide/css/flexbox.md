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

### Wrap
Los elementos flex son colocados en varias líneas. El valor cross-start equivale a start o before dependiendo del valor `flex-direction` y cross-end implicaría lo opuesto a lo especificado por cross-start.  
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```
<img :src="$withBase('/img/flexbox/flex-wrap.png')">  

### Wrap-reverse
Actúa como `wrap` pero cross-start y cross-end están intercambiados.
```css
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```
<img :src="$withBase('/img/flexbox/flex-wrap-reverse.png')">

### Nowrap
Los elementos flex son distribuidos en una sola línea, lo cual puede llevar a que se desborde el contenedor flex. (default)  
```css
.container {
  display: flex;
  flex-wrap: nowrap;
}
```
<img :src="$withBase('/img/flexbox/flex-wrap-nowgrap.png')">

## Justify-content
Define cómo el navegador distribuye el espacio entre y alrededor de los items flex, a lo largo del eje **horizontal** de su contenedor.

### Flex-start
Los items flex se colocan comenzando desde el comienzo principal. El margen del primer item es alineado al ras con el borde del comienzo principal de la línea y cada item siguiente es alineado al ras con el precedente. (default)
```css
.container {
  display: flex;
  justify-content: flex-start;
}
```
<img :src="$withBase('/img/flexbox/flex-start.png')">

### Flex-end
Los items flex se colocan comenzando desde el final principal. El margen del último item es alineado al ras con el borde del final principal de la línea y cada item precedente es alineado al ras con el siguiente.
```css
.container {
  display: flex;
  justify-content: flex-end;
}
```
<img :src="$withBase('/img/flexbox/flex-end.png')">

### Center
Los items flex son colocados hacia el centro de la línea. Los items flex se alinean al ras entre sí y en torno al centro de la línea. El espacio entre el borde del comienzo principal de la línea y el primer item es el mismo que el espacio entre el borde del final principal y el último item de la línea.
```css
.container {
  display: flex;
  justify-content: center;
}
```
<img :src="$withBase('/img/flexbox/jc-center.png')">

### Space-between
Los items flex se distribuyen uniformemente sobre la línea. El espaciamiento se hace de tal manera que el espacio adyacente entre dos items es el mismo. El borde del comienzo principal y el borde del final principal se alinean al ras con el borde del primer y último item respectivamente.
```css
.container {
  display: flex;
  justify-content: space-between;
}
```
<img :src="$withBase('/img/flexbox/jc-space-between.png')">

### Space-around
Los items flex se alinean uniformemente de tal manera que el espacio entre dos items adyacentes es el mismo. El espacio vacío anterior al primer item y posterior al último item equivale a la mitad del espacio entre dos items adyacentes.
```css
.container {
  display: flex;
  justify-content: space-around;
}
```
<img :src="$withBase('/img/flexbox/jc-space-around.png')">

### Space-evenly
```css
.container {
  display: flex;
  justify-content: space-evenly;
}
```
<img :src="$withBase('/img/flexbox/jc-space-evenly.png')">


## Align-items
La propiedad `align-items` establece el valor `align-self` sobre todos los descendientes directos de un grupo. La propiedad `align-self` indica la alineación de un elemento dentro del contenedor que lo contiene. En Flexbox controla la alineación de los elementos de manera **vertical**  

### Flex-start (default)
Alinea todos los elementos dentro al `top` del contenedor
```css
.container {
  display: flex;
  align-items:flex-start;
}
```
<img :src="$withBase('/img/flexbox/ai-flex-start.png')">

### Flex-end
Alinea todos los elementos dentro al `bottom` del contenedor
```css
.container {
  display: flex;
  align-items:flex-end;
}
```
<img :src="$withBase('/img/flexbox/ai-flex-end.png')">

### Strech
Las elementos son estirados de modo que el tamaño vertical de sus límites sea el mismo de la altura del contenedor, manteniendo sus restricciones de anchura y altura.
```css
.container {
  display: flex;
  align-items:flex-strech;
}
```
<img :src="$withBase('/img/flexbox/ai-strech.png')">

### Center
Alinea todos los elementos al centro del contenedor de manera vertical manteniendo el mismo margen arriba y abajo
```css
.container {
  display: flex;
  align-items:center;
}
```
<img :src="$withBase('/img/flexbox/ai-center.png')">

### Baseline
Todos los elementos son ajustados de modo que sus bases queden alineadas
```css
.container {
  display: flex;
  align-items:baseline;
}
```
<img :src="$withBase('/img/flexbox/ai-baseline.png')">


## Flex-grow
La propiedad `flex-grow` especifica el factor de crecimiento de un elemento flexible (que tiene asignado `display:flex`), en su dirección principal. El factor de crecimiento especifica qué cantidad del espacio restante dentro del contenedor flexible, debería ocupar el item en cuestión.  

La dirección principal puede ser la altura o el ancho del elemento, dependiendo del valor de `flex-direction`.  

El espacio restante es el tamaño del contenedor flexible menos el tamaño de todos los elementos flexibles juntos. Si todos los ítems dentro del contenedor tienen el mismo factor de crecimiento, todos los elementos reciben la misma cantidad del espacio restante. De lo contrario, el espacio restante se distribuye en función de los diferentes factores de crecimientos de cada item.  

```css
.container {
  display: flex;
  flex-grow:1; /* 2 o 3 */
}
```
<img :src="$withBase('/img/flexbox/flex-grow-1.png')">
<img :src="$withBase('/img/flexbox/flex-grow-2.png')">
<img :src="$withBase('/img/flexbox/flex-grow-3.png')">  


## Flex-shrink
La propiedad `flex-shrink` especifica el factor de contracción de un flex item. Los flex items se encogerán para llenar el contenedor de acuerdo a su número `flex-shrink`, cuando el tamaño por defecto de los flex items sea mayor al de su contenedor flex container.
```css
.container {
  display: flex;
  flex-shrink:1; /* 2 o 3 */
}
```
<img :src="$withBase('/img/flexbox/flex-shrink-1.png')">
<img :src="$withBase('/img/flexbox/flex-shrink-2.png')">
<img :src="$withBase('/img/flexbox/flex-shrink-3.png')">  

## Flex-basis
La propiedad `flex-basis` especifíca la base flexible, la cual es el tamaño inicial de un elemento flexible. Ésta propiedad determina el tamaño de una caja de contenidos a no ser que se haya especificado de otra forma usando `box-sizing`.

Esto define el tamaño por default de un elemento despues de distribuir el espacio entre los items.

Se le puede otorgar medidas fijas como: `100px` o `20rem` o se puede utilizar el valor `auto`.

```css
.container {
  display: flex;
  flex-basis:200px;
}
```
<img :src="$withBase('/img/flexbox/flex-basis.png')">  

## Flex-flow
La propiedad `flex-flow` es una propiedad **atajo** para las propiedades individuales `flex-direction` y `flex-wrap`.

```css
.container {
  flex-flow:row nowrap; /* El primer valor es para flex-direction, el segundo es para flex-wrap */
}
```

## Align-self
Esta propiedad permite alinear items individualmente, se puede asignar diferentes posiciones de alineacion a cada uno.

```css
.container {
  align-self:flex-start; /* flex-end etc... */
}
```
<img :src="$withBase('/img/flexbox/align-self.png')">  

## Flex
La propiedad `flex` es una propiedad **atajo** para las propiedades individuales `flex-grow`, `flex-shrink` y `flex-basis`.

```css
.container {
  flex:flex-grow flex-shrink flex-basis;
}
```