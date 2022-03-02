# Número de WhatsApp por Fecha y Hora

Primero se crea un objeto de clase DateTime
```php
$today = new \DateTime();
```

::: tip Simular fecha para hacer pruebas
```php
$today = new \DateTime('9-12-2021 9:00:00');
```
:::  

Creamos otro objeto exactamente igual que el otro usando `clone`, tendrá la misma fecha y hora que `$today`, para poder comparar la hora:
```php
$compare = clone $today;
```  

Aqui, establecemos la hora de `$compare` a las 9:00:00
```php
$compare->setTime(9, 0, 0);
```  

Obtenemos el número de día de la sema (1 - 7) con el formato N de la fecha de hoy, y lo convertimos a entero con (int) para poder hacer comparaciones entre enteros
```php
$day = (int) $today->format('N');
```  

Si el dia es de Lunes a Miércoles ( $day < 4 ) o si es Jueves pero la hora es menor a las 9 ($day == 4 && $today < $compare) se mostrará el primer teléfono, hacemos esto pues no tiene caso comparar la hora en los demás días, pues solo se compara el Jueves, y además ignoramos los dias viernes, sabado y domingo por que ya sabemos que esos dias se muestran

```php
if ($day < 4 || $day == 4 && $today < $compare) {
    $phone = '521NUMERO1';
} 
else {
    $phone = '521NUMERO2';
}
```

Se imprime el número en un `echo`
```php
<a href="https://wa.me/<?php echo $phone; ?>?text=Hola,%20me%20interesa%20obtener%20más%20información" class="float" target="_blank">
    <i class="fab fa-whatsapp"></i> WhatsApp
</a>
```

Codigo
```php
<?php

$today = new \DateTime();
$compare = clone $today;
$compare->setTime(9, 0, 0);
$day = (int) $today->format('N');

if ($day < 4 || $day == 4 && $today < $compare) {
    $phone = '521NUMERO1';
} else {
    $phone = '521NUMERO2';
}

?>

<a href="https://wa.me/<?php echo $phone; ?>?text=Hola,%20me%20interesa%20obtener%20más%20información" class="float" target="_blank">
    <i class="fab fa-whatsapp"></i> WhatsApp
</a>
```