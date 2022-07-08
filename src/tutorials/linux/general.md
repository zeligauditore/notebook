# Generales

## Arreglar desfase de reloj

```bash
sudo timedatectl set-local-rtc 1
```

<img :src="$withBase('/img/separador.png')">

## Cambiar versiones de NodeJS

Si lo que deseas es actualizar o retroceder a una versión en específico de Node.js debes ejecutar comandos similares a los anteriores. Por ejemplo para instalar la versión `12.16.2` ejecutaríamos los siguientes comandos:

```bash
sudo npm cache clean -f
```

```bash
sudo npm install -g n
```

```bash
 sudo n 12.16.2
```
