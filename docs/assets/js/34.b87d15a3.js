(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{316:function(a,s,e){"use strict";e.r(s);var n=e(7),t=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"archlinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#archlinux"}},[a._v("#")]),a._v(" ArchLinux")]),a._v(" "),s("h2",{attrs:{id:"cambiar-permisos-por-consola"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cambiar-permisos-por-consola"}},[a._v("#")]),a._v(" Cambiar permisos por consola")]),a._v(" "),s("p",[a._v("Si queremos que se haga de manera recursiva, es decir, que los ficheros y carpetas contenidos dentro de la carpeta, también reciban estos cambios, hacemos esto:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" carpeta/archivo\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" rwx carpeta/archivo\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"ejecutar-archivos-bin-sh-y-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejecutar-archivos-bin-sh-y-run"}},[a._v("#")]),a._v(" Ejecutar archivos .bin, .sh y .run")]),a._v(" "),s("p",[a._v("Dar permisos al archivo")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x archivo.run\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x archivo.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x archivo.bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("Para ejecutar estos archivos, una vez que ya tiene los permisos de ejecución, tenemos que tener en cuenta los siguientes casos:")]),a._v(" "),s("p",[a._v("Aplicaciones que necesitan ejecutarse como root o con sudo. Ejemplo pueden ser los controladores de vídeo.\nComo root (anteponiendo sh al archivo).")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" archivo.run\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" archivo.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" archivo.bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("Como root (anteponiendo ./ al archivo).")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./archivo.run\n./archivo.sh\n./archivo.bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"comandos-pacman"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comandos-pacman"}},[a._v("#")]),a._v(" Comandos PACMAN")]),a._v(" "),s("p",[a._v("Actualizar el sistema")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Syu")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Sincroniza los paquetes de la base de datos")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Sy")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Fuerza la sincronización de los paquetes de la base de datos")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Syy")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Instalar y/o actualizar un paquete")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" paquete\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Solución terminal en manjaro luego de actualizar:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gedit /etc/locale.gen y quitar comentario en: esMX\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" locale-gen\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"instalar-base-devel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-base-devel"}},[a._v("#")]),a._v(" Instalar Base-devel")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" base-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"instalar-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-java"}},[a._v("#")]),a._v(" Instalar Java")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" jre-openjdk-headless jre-openjdk jdk-openjdk openjdk-doc openjdk-src\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"instalar-yay-en-arch-linux-y-derivados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-yay-en-arch-linux-y-derivados"}},[a._v("#")]),a._v(" instalar Yay en Arch Linux y derivados:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/yay.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" yay\nmakepkg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-si")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"instalando-y-configurando-jellyfin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-y-configurando-jellyfin"}},[a._v("#")]),a._v(" Instalando y configurando JellyFin")]),a._v(" "),s("p",[a._v("Clonar el repositorio desde AUR")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/jellyfin.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Instalar:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" jellyfin\nmakepkg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-si")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Iniciar el servidor:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start jellyfin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Habilitar el servidor para que se inicie automaticamente:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" jellyfin.service\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Acceder al servidor en la "),s("a",{attrs:{href:"http://192.168.100.7:8096/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ip "),s("code",[a._v("http://192.168.100.7:8096/")]),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);