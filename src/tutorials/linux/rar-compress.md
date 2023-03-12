# Compresión en rar

## Comprimir y dividir en multiples partes

### Parámetros
- `-a` : Añadir archivos (comprimir).
- `-r` : Añadir directorios recursivamente.
- `-s` : Archivo sólido. Copia todos los archivos a uno único antes de comprimir, aumentando así el ratio de compresión.
- `-v` : Divide el archivo comprimido resultante en partes de 50 MB cada uno (expresado en KB).

```bash
rar a -r -s -v51200 minuevoarchivo.rar "directorio/a/comprimir/"
```

[Fuente](https://www.alvarolara.com/2015/09/28/como-comprimir-un-archivo-rar-en-multiples-partes-en-gnulinux/)