# Docker & Docker-compose

## Docker uso básico

Verificar el estado del servicio de Docker
```bash
sudo systemctl status docker
```  
Iniciar el Servicio de Docker
```bash
sudo systemctl start docker
```  
Detener el Servicio de Docker
```bash
sudo systemctl stop docker
```  
Reiniciar el Servicio de Docker
```bash
sudo systemctl restart docker
```

Ver los contenedores en ejecución y detenidos
```bash
sudo docker ps -a
```  

## Otros comandos Docker
* `docker create` crea un contenedor pero no lo comienza.
* `docker rename` permite renombrar al contenedor.
* `docker run` crea y comienza un contenedor en una operación.
* `docker rm` borra un contenedor.
* `docker pause` pausa un contenedor corriendo, "lo congela". 
* `docker unpause` quita la pausa de un contenedor corriendo.
* `docker wait` bloquea hasta que un contenedor corriendo se detiene.
* `docker kill` envía una SIGKILL a un contenedor corriendo.
* `docker attach` se conecta a un contenedor corriendo.
* `docker logs` obtiene logs de un container.
* `docker inspect` observa toda la info en un contenedor.
* `docker events` obtiene eventos de un contenedor.
* `docker port` muestra el puerto publico de un contenedor.
* `docker top` muestra los procesos corriendo en un contenedor.
* `docker stats` muestra las estadisticas de recursos usados por contenedor.
* `docker stats --all` muestra una lista de los contenedores corriendo.


## Docker-compose

Iniciar un contenedor a partir de un archivo `docker-compose.yml`
```bash
sudo docker-compose up
```
Iniciar el contenedor pero en segundo plano
```bash
sudo docker-compose up -d
```

## Entorno de desarrollo básico php
Crear un archivo `docker-compose.yml` con el siguiente contenido
```yml
version: '2'

services:
  web:
    image: php:7.4.2-apache
    container_name: NOMBRE_CONTENEDOR
    volumes:
      - ./CARPETA_PROYECTO/:/var/www/html/
    ports:
      - "8100:80"
    stdin_open: true
    tty: true
```
::: tip HABILITAR rewrite_mod
Acceder al contenedor
```bash
docker exec -i -t (id o nombre del contenedor) /bin/bash
```
Habilitar rewrite mod
```bash
a2enmod rewrite
```
Reiniciar el servicio
```bash
service apache2 restart
```
Levantar el contenedor de nuevo
```bash
sudo docker-compose up
```
:::