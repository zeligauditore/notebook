# Docker & Docker-compose

## Docker uso básico

Usar Docker sin sudo
1. Crear el grupo Docker y añadir usuario al grupo
```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

2. Activar los cambios del grupo
```bash
newgrp docker
```
3. Reiniciar

4. Verificar ejecutando un contenedor sin `sudo`
```bash
docker run hello-world
```

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
docker-compose up
```
Iniciar el contenedor pero en segundo plano
```bash
docker-compose up -d
```

## Entorno de desarrollo básico php
Crear un archivo `docker-compose.yaml` con el siguiente contenido
```yaml
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

## Entorno de desarrollo WordPress

Clonar repo directamente 
```bash
git clone https://github.com/zeligauditore/wp-docker.git
```

### Crear la estructura de carpetas
* **mysql** (Carpeta de la base de datos)
* **src** (Carpeta para el contenido a desarrollar)
  * **plugins**
  * **themes**
  * **uploads**  
* `docker-compose.yaml` (Archivo de configuración del contenedor)

### Contenido del archivo `.yaml`

```yaml
version: '3.8' # Cambiar version

services:
  db:
    image: mysql:5.7 # Editar version de MySQL
    container_name: wp_template_db # Nombre del contenedor de la base de datos
    volumes:
      - ./mysql:/var/lib/mysql # Ruta de la base de datos
    ports:
      - "4306:3306" # Puerto para acceder a la base de datos, 4306
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: admin # Contraseña root
      MYSQL_DATABASE: wordpress # Nombre de la base de datos
      MYSQL_USER: user # Nombre de Usuario
      MYSQL_PASSWORD: user # Contraseña de Usuario

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    container_name: wp_template # Nombre del contenedor de WordPress
    volumes:
      - ./src/themes:/var/www/html/wp-content/themes # Ruta de la carpeta themes
      - ./src/plugins:/var/www/html/wp-content/plugins # Ruta de la carpeta plugins
      - ./src/uploads:/var/www/html/wp-content/uploads # Ruta de la carpeta uploads
    ports:
      - "8000:80" # Puerto para acceder al server con la ip: localhost:8000, 0.0.0.0:8000
    restart: always
    environment:
      WORDPRESS_DB_HOST: db # Host de la base de datos
      WORDPRESS_DB_USER: user # Usuario para acceder a la base de datos
      WORDPRESS_DB_PASSWORD: user # Contraseña para acceder a la base de datos
      WORDPRESS_DB_NAME: wordpress # Nombre de la base de datos a la que se conectara WordPress
```

### Código completo del archivo `.yaml`
```yaml
version: '3.8'

services:
  db:
    image: mysql:5.7
    container_name: wp_template_db
    volumes:
      - ./mysql:/var/lib/mysql
    ports:
      - "4306:3306"
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: admin
      MYSQL_DATABASE: wordpress
      MYSQL_USER: user
      MYSQL_PASSWORD: user

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    container_name: wp_template
    volumes:
      - ./src/themes:/var/www/html/wp-content/themes
      - ./src/plugins:/var/www/html/wp-content/plugins
      - ./src/uploads:/var/www/html/wp-content/uploads
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: user
      WORDPRESS_DB_PASSWORD: user
      WORDPRESS_DB_NAME: wordpress
```

### Cambiar los permisos de lectura y escritura de las carpetas para desarrollar
Cambiar permisos a la carpeta `mysql`
```bash
sudo chmod -R 777 mysql
```
Cambiar permisos a la carpeta `src`
```bash
sudo chmod -R 777 src
```