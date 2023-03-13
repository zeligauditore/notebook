(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{319:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"spotify-adblock-fedora"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spotify-adblock-fedora"}},[a._v("#")]),a._v(" Spotify AdBlock Fedora")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Fuente")]),a._v(" "),s("p",[a._v("Revisar la "),s("a",{attrs:{href:"https://note.rojenz.de/post/spotify-adblock-fedora-34/",target:"_blank",rel:"noopener noreferrer"}},[a._v("fuente"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"_1-instalar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-instalar"}},[a._v("#")]),a._v(" 1-. Instalar")]),a._v(" "),s("h3",{attrs:{id:"habilitar-repo-de-negativo17"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#habilitar-repo-de-negativo17"}},[a._v("#")]),a._v(" Habilitar repo de "),s("a",{attrs:{href:"https://negativo17.org/spotify-client/",target:"_blank",rel:"noopener noreferrer"}},[a._v("negativo17"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("dnf config-manager --add-repo"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://negativo17.org/repos/fedora-spotify.repo\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"instalar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar"}},[a._v("#")]),a._v(" Instalar:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" spotify-client\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-build-adblock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-adblock"}},[a._v("#")]),a._v(" 2-. Build Adblock")]),a._v(" "),s("h3",{attrs:{id:"instalar-las-dependencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-las-dependencias"}},[a._v("#")]),a._v(" Instalar las dependencias:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" rust "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cargo")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"clonar-y-contruir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clonar-y-contruir"}},[a._v("#")]),a._v(" Clonar y contruir:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/abba23/spotify-adblock.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" spotify-adblock\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"instalar-al-system-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-al-system-path"}},[a._v("#")]),a._v(" Instalar al system path:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_3-agregar-ld-preload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-agregar-ld-preload"}},[a._v("#")]),a._v(" 3-. Agregar LD_PRELOAD")]),a._v(" "),s("p",[a._v("Agregar "),s("code",[a._v("LD_PRELOAD")]),a._v(" al ejecutable de Spotify "),s("code",[a._v("/usr/bin/spotify")]),a._v(" ejecutará el "),s("code",[a._v("adBlock")]),a._v(" antes de iniciar Spotify:")]),a._v(" "),s("h3",{attrs:{id:"agregar-el-valor-ld-preload-editando-usr-bin-spotify-con-nano"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agregar-el-valor-ld-preload-editando-usr-bin-spotify-con-nano"}},[a._v("#")]),a._v(" Agregar el valor "),s("code",[a._v("LD_PRELOAD")]),a._v(" editando "),s("code",[a._v("/usr/bin/spotify")]),a._v(" con nano:")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Importante")]),a._v(" "),s("p",[a._v("Ejecutar con "),s("code",[a._v("sudo")])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /usr/bin/spotify\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Agregar la siguiente línea al archivo ejecutable de Spotify:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_PRELOAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/spotify-adblock.so\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"debe-quedar-como"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debe-quedar-como"}},[a._v("#")]),a._v(" Debe quedar cómo:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/sh")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Wrapper script for Spotify.")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# The spotify binary has a RUNPATH of its origin folder. It requires a few")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# librares compiled with minimum options (no external dependencies).")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# The FFMpeg library is loaded ONLY on the system path libraries, ignoring the")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# RUNPATH.")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# So remove the RUNPATH from the binary, put all the libraries in its private")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# folder and make sure that only the spotify binary can access them.")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_LIBRARY_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/usr/lib64/spotify-client'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${LD_LIBRARY_PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("$LD_LIBRARY_PATH}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SCALE_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("/usr/lib64/spotify-client/get-scale-factor.py"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_PRELOAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/spotify-adblock.so\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" /usr/lib64/spotify-client/spotify --force-device-scale-factor"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SCALE_FACTOR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" /usr/lib64/spotify-client/set-dark-theme-variant.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);