# Optimización de imágenes

::: tip ImageMagick
[Herramienta necesaria](https://imagemagick.org/script/download.php)
:::

## JPG

Busca todos los archivos `jpg` en la carpeta y los comprime

```bash
## Check if JPG images exist and compress them
for imgjpg in *.jpg; do
    if test -f "$imgjpg"
     then
        echo "Compressing $imgjpg "
        convert -quality 50 "$imgjpg" "opt-$imgjpg"
    else
    echo "NO JPG Images Found"
     fi
done
```

## JPEG

Busca todos los archivos `jpeg` en la carpeta y los comprime

```bash
## Check if JPEG images exist and compress them
for imgjpeg in *.jpeg; do
    if test -f "$imgjpeg"
     then
        echo "Compressing $imgjpeg "
        convert -quality 50 "$imgjpeg" "opt-$imgjpeg"
    else
    echo "NO JPEG Images Found"
     fi
done
```


## PNG

Busca todos los archivos `png` en la carpeta y los comprime

::: warning Profundidad de Color
Reducir la `Profundidad de Color` disminuye considerablemente el peso
pero reduce el color de las imágenes
:::

```bash
## Check if PNG images exist and compress them
for imgpng in *.png; do
    if test -f "$imgpng"
     then
        echo "Compressing $imgpng "
        convert -quality 60% -colors 255 "$imgpng" "opt-$imgpng"
    else
    echo "NO PNG Images Found"
     fi
done
```

::: warning Resolución de imágen
Reducir la `Resolución` disminuye considerablemente el peso
pero reduce el tamaño de la imágen
:::

```bash
## Check if PNG images exist and compress them
for imgpng in *.png; do
    if test -f "$imgpng"
     then
        echo "Compressing $imgpng "
        convert -quality 60% -adaptive-resize 60% "$imgpng" "opt-$imgpng"
    else
    echo "NO PNG Images Found"
     fi
done
```

## GIF

```bash
## Check if GIF images exist and compress them
for imggif in *.gif; do
    if test -f "$imggif"
     then
        echo "Compressing $imggif "
        mogrify -layers 'optimize' -fuzz 7% "$imggif"
    else
    echo "NO GIF Images Found"
     fi
done
```