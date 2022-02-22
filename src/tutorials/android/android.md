# Eliminar aplicaciones de Android desde la terminal linux

## Requisitos

* Instalar las Android SDK Platform Tools para utilizar ADB
Instalación en ARCH desde AUR
```bash
yay -S android-sdk-platform-tools
```  
* Tener activadas las opciones de desarrollador en el dispositivo android

* Instalar una App para ver la información completa de las aplicaciones instaladas  
<img :src="$withBase('/img/android/screen1.jpg')">  

::: tip
Para evitar y/o solucionar el error "adb no permissions"
* Primero detenemos el servidor ADB:
```bash
adb kill-server
```    

* Despues iniciamos el servidor ADB utilizando `sudo` para que los permisos elevados:
```bash
sudo adb start-server
```  
:::  

## Paso 1
Conectar el Android al pc por USB con la pantalla encendida y acepta el uso desde el ordenador con la clave RSA que te aparece.  

En la terminal escribir el comando para verificar que el dispositivo esta conectado y aparece listado:
```bash
adb devices
```  

Para ver la lista de las aplicaciones instaladas se puede utilizar el comando:
```bash
adb shell pm list packages
```  

## Paso 2
Para eliminar una aplicación se debe utilizar el nombre de paquete, por ejemplo `com.google.android.youtube`  

Utilizar el comando (sin las comillas):
```bash
adb shell pm uninstall -k --user 0 'nombre-del-paquete'
```  
::: warning
No es un borrado permanente ya que la app saldrá de nuevo cuando se aplique una actualización o se realice un borrado del sistema; aunque tendrás la opción de volverla a eliminar con solo repetir el proceso de ADB Shell.
:::  