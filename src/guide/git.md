# Guia de Git y GitHub

## Configuración básica

Establecer el nombre y apellido
```bash
git config --global user.name "nombre"
```

Establecer el correo electronico
```bash
git config --global user.email correo
```

Establecer el editor predeterminado
```bash
git config --global core.editor subl
```

Listar las configuraciones
```bash
git config --list
```

## Usando Git

Inicializar un repositorio git en una carpeta
```bash
git init
```
Mostrar ek estado del repositorio y las modificaciones
```bash
git status
```

Mover todos los archivos nuevos y modificados al area de preparación
```bash
git add .
```

Guardar un commit con una descripción
```bash
git commit -m "descripción"
```

Editar la descripción del último commit
```bash
git commit --amend
```

Ver el historial de commits
```bash
git log --graph
```
## Avanzados

Sacar un archivo el area de preparación al area de trabajo
```bash
git reset HEAD nombre-archivo
```

Moverse entre commits
```bash
git checkout hash-commit
```

Clonar un repositorio remoto
```bash
git clone url
```

Subir a un repositorio remoto
```bash
git git push -u origin master
```

## Etiquetas
Asignar un nombre de etiqueta oara el último commit realizado,
se puede utilizar para establecer versiones por ejemplo "v 1.1-dev"
```bash
git tag nombre-etiqueta
```

**Etiqueta detallada** se guarda en la base de datos de git como objeto entero, tiene un checksum, contiene el nombre del etiquetador, correo electronico, fecha y un mensaje asociado
```bash
git tag -a nombre-etiqueta -m "mensaje"
```

Mostrar las etiquetas
```bash
git tag
```

Para etiquetar un commit anterior
```bash
git tag nombre-etiqueta checksum
```
Se puede agregar `-a` y `-m` para una etiqueta detallada

## Ramas

Crear una nueva rama
```bash
git branch nombre-rama
```

Para saltar entre ramas
```bash
git checkout nombre-rama
```

## Fusiones

Fusionar una rama con la rama actual, por ejemplo, fusionar la rama `dev` con la rama `master`
```bash
git merge dev
```

Eliminar una rama que ya ha sido fusionada, el parametro `-D` fuerza la eliminacion y se pierden los datos
```bash
git branch -D nombre-rama-eliminar
```

## GitHub CLI
Instalar GitHub CLI en ArchLinux
```bash
sudo pacman -S github-cli
```
Iniciar sesion con el comando
```bash
gh auth login
```
Y usar el Token de autenticación