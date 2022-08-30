# ArchLinux

## Cambiar permisos por consola

Si queremos que se haga de manera recursiva, es decir, que los ficheros y carpetas contenidos dentro de la carpeta, también reciban estos cambios, hacemos esto:

```bash
chmod -R 777 carpeta/archivo
```

```bash
chmod -R rwx carpeta/archivo
```

## Ejecutar archivos .bin, .sh y .run

Dar permisos al archivo

```bash
sudo chmod +x archivo.run
sudo chmod +x archivo.sh
sudo chmod +x archivo.bin
```

Para ejecutar estos archivos, una vez que ya tiene los permisos de ejecución, tenemos que tener en cuenta los siguientes casos:

Aplicaciones que necesitan ejecutarse como root o con sudo. Ejemplo pueden ser los controladores de vídeo.
Como root (anteponiendo sh al archivo).

```bash
sudo sh archivo.run
sudo sh archivo.sh
sudo sh archivo.bin
```

Como root (anteponiendo ./ al archivo).

```bash
./archivo.run
./archivo.sh
./archivo.bin
```

## Comandos PACMAN

Actualizar el sistema

```bash
sudo pacman -Syu
```

Sincroniza los paquetes de la base de datos

```bash
sudo pacman -Sy
```

Fuerza la sincronización de los paquetes de la base de datos

```bash
sudo pacman -Syy
```

Instalar y/o actualizar un paquete

```bash
sudo pacman -S paquete
```

Solución terminal en manjaro luego de actualizar:

```bash
gedit /etc/locale.gen y quitar comentario en: esMX
sudo locale-gen
```

## Instalar Base-devel

```bash
sudo pacman -S base-devel
```

## Instalar Java

```bash
sudo pacman -S jre-openjdk-headless jre-openjdk jdk-openjdk openjdk-doc openjdk-src
```

## instalar Yay en Arch Linux y derivados:

```bash
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Instalando y configurando JellyFin

Clonar el repositorio desde AUR

```bash
git clone https://aur.archlinux.org/jellyfin.git
```

Instalar:

```bash
cd jellyfin
makepkg -si
```

Iniciar el servidor:

```bash
sudo systemctl start jellyfin
```

Habilitar el servidor para que se inicie automaticamente:

```bash
sudo systemctl enable jellyfin.service
```

Acceder al servidor en la [ip `http://192.168.100.7:8096/`](http://192.168.100.7:8096/)
