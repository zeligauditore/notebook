/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3040f8fa86eebae7884f5be9981127f4"
  },
  {
    "url": "assets/css/0.styles.2c363df6.css",
    "revision": "289290759aaa129f14b1b07ab666d1c7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.43fa39fe.js",
    "revision": "4b8d17bf6ff8012599ce9ee2f1cdd1a3"
  },
  {
    "url": "assets/js/10.c859d12c.js",
    "revision": "5ce4ecb269d6036041aaf75d4648f103"
  },
  {
    "url": "assets/js/11.6426f4e1.js",
    "revision": "a7ce3d49ba1e1c2544e32bace591fe45"
  },
  {
    "url": "assets/js/12.e95e9f96.js",
    "revision": "0ec39d8505f587154c3de8d347212b3a"
  },
  {
    "url": "assets/js/13.07082b07.js",
    "revision": "cb4ad7ffabfb00f0dfb57ee28aec291f"
  },
  {
    "url": "assets/js/14.84f44a1b.js",
    "revision": "355898ff18745a445a47c9b8cfac8dcb"
  },
  {
    "url": "assets/js/15.8b29d5c3.js",
    "revision": "0ca8a750e80304dc80855c32d3663ebe"
  },
  {
    "url": "assets/js/16.24090531.js",
    "revision": "c7f82f411b0d6c405aa0c6370e23c672"
  },
  {
    "url": "assets/js/17.4e216577.js",
    "revision": "61e11707a84e786dd7d3ce9a96b6ef8e"
  },
  {
    "url": "assets/js/18.f212430d.js",
    "revision": "e6aacf7d13cf9913705394f4110f61ed"
  },
  {
    "url": "assets/js/19.cc7dbc99.js",
    "revision": "26a688a95c9d70947e6285e1916e757c"
  },
  {
    "url": "assets/js/20.29bcaac7.js",
    "revision": "fd461f8defd54cbe98eb2c64cbedf49e"
  },
  {
    "url": "assets/js/21.2684174c.js",
    "revision": "4b2dc5153c4b456ff2a2dc50c7860a16"
  },
  {
    "url": "assets/js/22.c151262e.js",
    "revision": "3db503f83fadbb772a918ecb60c4b588"
  },
  {
    "url": "assets/js/23.49bd5f25.js",
    "revision": "a1897cf5869236c3fcd99c0cb845a3c1"
  },
  {
    "url": "assets/js/24.fce5934a.js",
    "revision": "3843d7d19e32938d16abccd032ee5a20"
  },
  {
    "url": "assets/js/25.35ca245e.js",
    "revision": "82793501a3b50a74081d26a2ccd133a7"
  },
  {
    "url": "assets/js/26.9ac81060.js",
    "revision": "9c742ae169c289bb8c2d0686b8f6c355"
  },
  {
    "url": "assets/js/27.9335e0c9.js",
    "revision": "cb23a6a155dde8a5b52a10a372a70536"
  },
  {
    "url": "assets/js/28.28c3f78a.js",
    "revision": "ddc26653e3731d98202e32778c8deb91"
  },
  {
    "url": "assets/js/29.bd56c53a.js",
    "revision": "6a1cb158418d6c5e97cdbe3ce9369dfc"
  },
  {
    "url": "assets/js/3.f644f102.js",
    "revision": "1256bce6f28d1eeb80809169e527516c"
  },
  {
    "url": "assets/js/30.16d60c01.js",
    "revision": "333a2b080f20502bc02650710332d8b9"
  },
  {
    "url": "assets/js/31.f65942ef.js",
    "revision": "29a7fd087f96b3945a565a2d1c169418"
  },
  {
    "url": "assets/js/32.7554c8d6.js",
    "revision": "25612bd0a7eda2921bb67856addb2485"
  },
  {
    "url": "assets/js/33.9f2ccd4b.js",
    "revision": "5d36054d5a85808ca41dfd0741a490db"
  },
  {
    "url": "assets/js/34.795e900f.js",
    "revision": "afc21196d8e246df417ef455a52f2a2b"
  },
  {
    "url": "assets/js/35.d230e95a.js",
    "revision": "5224be41a68eee61e92a289e68dad4bc"
  },
  {
    "url": "assets/js/36.9e2a9520.js",
    "revision": "9bf0d160ef2587870e74f57b6e89a77e"
  },
  {
    "url": "assets/js/37.49a483ec.js",
    "revision": "56970e48aa280bf73b567d1938c7b1f8"
  },
  {
    "url": "assets/js/38.ba65e602.js",
    "revision": "f49a3bd6caa419a61e7657201f9765c5"
  },
  {
    "url": "assets/js/39.7118d718.js",
    "revision": "750c96b3764ce553e4e2b525fda836a7"
  },
  {
    "url": "assets/js/4.1041820e.js",
    "revision": "e64bc783985f1cc116cd263146b6db99"
  },
  {
    "url": "assets/js/40.522b7544.js",
    "revision": "159801119fe161c65606e53e05490f16"
  },
  {
    "url": "assets/js/41.ca47ad2d.js",
    "revision": "6b7acaa7dc227590df22f4aaf00d4d91"
  },
  {
    "url": "assets/js/42.fba37005.js",
    "revision": "c9dadfd982914c43df5c17b307b33002"
  },
  {
    "url": "assets/js/43.7526bd0d.js",
    "revision": "0bc5a6526f540fce6cc68e5b8679b7a4"
  },
  {
    "url": "assets/js/5.815c4b75.js",
    "revision": "8c453ecabdd72378edba574d1ae2153a"
  },
  {
    "url": "assets/js/6.2cbe769c.js",
    "revision": "f4ff5183aa37b4944d2c3eff98269a1b"
  },
  {
    "url": "assets/js/7.ac84ade2.js",
    "revision": "ed995c95edc7ac9ccc690cee564b39e3"
  },
  {
    "url": "assets/js/8.a4fb021e.js",
    "revision": "8739c543069a524ce1be3f343f4691f4"
  },
  {
    "url": "assets/js/9.db8faf84.js",
    "revision": "ae4fc70c31fe4e314ac2bfa57b7dd514"
  },
  {
    "url": "assets/js/app.894a8034.js",
    "revision": "b87b481e825b6f931cf9cd012d2164c8"
  },
  {
    "url": "config/index.html",
    "revision": "3ba9f032a50b54d078fc651846ae87c6"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "e72d2e6797769d1cc8445405f18d4236"
  },
  {
    "url": "guide/docker.html",
    "revision": "33c349340f8dca20a4688c9ba82e6a86"
  },
  {
    "url": "guide/git.html",
    "revision": "241e0905b96598f50d66b721782d1028"
  },
  {
    "url": "guide/index.html",
    "revision": "fdd72b55e69db4b9428648df7eb6521a"
  },
  {
    "url": "guide/ssh.html",
    "revision": "463ac3d728583b241ebb53c025c720f7"
  },
  {
    "url": "herramientas/index.html",
    "revision": "f1bb0eafc95223938c8e5c4b34be9fbe"
  },
  {
    "url": "herramientas/resources-dw/cdns.html",
    "revision": "ed56f7127580570eb78fbd64f92a1963"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "3cb55919d5e4c744ec6fee3ece7800bf"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "3adb7ca3b1cdc980292a912688a81b58"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "1568be9bf3f68c1dfbe1bdbed83c95ba"
  },
  {
    "url": "img/android/screen1.jpg",
    "revision": "7683c5a90ecddf41645e18ef9d1255ef"
  },
  {
    "url": "img/bttns/wa-float.png",
    "revision": "3fcea751528d74a8ad9663020bdde945"
  },
  {
    "url": "img/coding.png",
    "revision": "c14b8c097d3f4c8b970f8b4f8a944342"
  },
  {
    "url": "img/command.png",
    "revision": "ce2677e02e563dd8ca7e7b2da5e4a1b4"
  },
  {
    "url": "img/eliza.jpg",
    "revision": "16bd07e80505d1bdd3214f3c6cae2540"
  },
  {
    "url": "img/flexbox/ai-baseline.png",
    "revision": "d94aac7244e3f940dc5a8e1a96427776"
  },
  {
    "url": "img/flexbox/ai-center.png",
    "revision": "f52240fe66626697b1effeb35cd8f824"
  },
  {
    "url": "img/flexbox/ai-flex-end.png",
    "revision": "ef27682282806d7994fac34a9c7f5e11"
  },
  {
    "url": "img/flexbox/ai-flex-start.png",
    "revision": "5a7fc708998aa6de9ea42b8043daae1d"
  },
  {
    "url": "img/flexbox/ai-strech.png",
    "revision": "a4357e2f73c454ec6d92045cda3cb163"
  },
  {
    "url": "img/flexbox/align-self.png",
    "revision": "dc55efc0696a3b27d947b1c92553ffe9"
  },
  {
    "url": "img/flexbox/basics1.png",
    "revision": "a48a147377a9f22868556046abe72b68"
  },
  {
    "url": "img/flexbox/basics2.png",
    "revision": "4d97ab0b1136ef727ea6028eb927397b"
  },
  {
    "url": "img/flexbox/basics3.png",
    "revision": "03994812f5c62717a4846599d3178608"
  },
  {
    "url": "img/flexbox/flex-basis.png",
    "revision": "3b58c3cfc25547f9d4d951023a479251"
  },
  {
    "url": "img/flexbox/flex-end.png",
    "revision": "ba97160addf092cd5396456e6e1ab7e5"
  },
  {
    "url": "img/flexbox/flex-grow-1.png",
    "revision": "c97533ca287d5fd0a8bea11560997c18"
  },
  {
    "url": "img/flexbox/flex-grow-2.png",
    "revision": "38a320583e995a5b08e10f0fc37de413"
  },
  {
    "url": "img/flexbox/flex-grow-3.png",
    "revision": "421e83e2b47ce00e8b7520cc93b3abe1"
  },
  {
    "url": "img/flexbox/flex-shrink-1.png",
    "revision": "fb1ea2db4d5401075f99c98be884729c"
  },
  {
    "url": "img/flexbox/flex-shrink-2.png",
    "revision": "a36153cfc787460a9a765d79ff365a52"
  },
  {
    "url": "img/flexbox/flex-shrink-3.png",
    "revision": "748249331c164a0c35885f98a8ea235a"
  },
  {
    "url": "img/flexbox/flex-start.png",
    "revision": "e4810b8b5f953adc4a913fe1afca822f"
  },
  {
    "url": "img/flexbox/flex-wrap-nowgrap.png",
    "revision": "d9caf955d3856e3bce54021d8476fa99"
  },
  {
    "url": "img/flexbox/flex-wrap-reverse.png",
    "revision": "b924d5552e03552708d42a9ce67efe2c"
  },
  {
    "url": "img/flexbox/flex-wrap.png",
    "revision": "249e45751eaa034ed92403c191624f00"
  },
  {
    "url": "img/flexbox/flexd-row.png",
    "revision": "8a225aa7339711e03b84203793407721"
  },
  {
    "url": "img/flexbox/flexdr-col.png",
    "revision": "c3f36bedd184a4ae62f86f8f3503162f"
  },
  {
    "url": "img/flexbox/flexdr-colrev.png",
    "revision": "4ee9070d10bcd6ea90a200ad4c8734d5"
  },
  {
    "url": "img/flexbox/flexdr-reverse.png",
    "revision": "9c11399b583a9371600f28f387f9dfce"
  },
  {
    "url": "img/flexbox/jc-center.png",
    "revision": "722ed86d04e7d7608b38f2a2d98d693b"
  },
  {
    "url": "img/flexbox/jc-space-around.png",
    "revision": "a241b8d542a9eb5b8dae054983866814"
  },
  {
    "url": "img/flexbox/jc-space-between.png",
    "revision": "5d2c44a5c04fb1605f7fad897a711518"
  },
  {
    "url": "img/flexbox/jc-space-evenly.png",
    "revision": "26fc56cea07f123d6f48a96a932f3b6f"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "9517754bb85ac7dafdd476fce3783975"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "11037b15554631b3eb47388ce7121204"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "b1c4b61053fb9369bf91c8a917c33805"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "c2ca0597f110a8e84e7ee6d475c9a839"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "88e896ad3bf1acff26e4f5ce823d1e4c"
  },
  {
    "url": "img/k.png",
    "revision": "22e3b70e7df102ab6d7d23ea51217549"
  },
  {
    "url": "img/libs/animatecss.gif",
    "revision": "1b854ba9638fc3155b5286ef3f58ab9c"
  },
  {
    "url": "img/navbars/nav-bg-img.gif",
    "revision": "5de37b71ac57d4acf236d061876c4197"
  },
  {
    "url": "img/separador.png",
    "revision": "232774ac78c88e1759fb2e8783323855"
  },
  {
    "url": "img/slickSlider/fullScreen-Slider.png",
    "revision": "2364fd2a69bfc1fbb6c8380dfeef529c"
  },
  {
    "url": "img/star.png",
    "revision": "eb84555fd6c8b6886495fcd5f5b8a178"
  },
  {
    "url": "img/tools/resources-dw/badges.png",
    "revision": "f177089f6c5a0d7d6690abdfca452de9"
  },
  {
    "url": "img/tools/resources-dw/Box-Shadow.png",
    "revision": "bcb40183b27eff4e57a916366d00ce09"
  },
  {
    "url": "img/tools/resources-dw/brumm.png",
    "revision": "f93f96258ba9224e50bc4f37ea62eef7"
  },
  {
    "url": "img/tools/resources-dw/clip-path.png",
    "revision": "3315b3dd9c570f58e04aefb98d862f26"
  },
  {
    "url": "img/tools/resources-dw/CSS-Bud.png",
    "revision": "3deb8c071feb9150ed9a718fb176e8f4"
  },
  {
    "url": "img/tools/resources-dw/gens.png",
    "revision": "f40396fb7073eaf0cef9935c78e1c2ce"
  },
  {
    "url": "img/tools/resources-dw/Get-Waves.png",
    "revision": "4882fcfcff01935196cc2acd41e4de8e"
  },
  {
    "url": "img/tools/resources-dw/gradientes.png",
    "revision": "6f3e4919dafe3922b5c4ff652356b415"
  },
  {
    "url": "img/tools/resources-dw/josh.png",
    "revision": "b4f5427951d331d1a3d080d6a7522cf7"
  },
  {
    "url": "img/tools/resources-dw/palettes.png",
    "revision": "1b513fab9281cbd8cda39c98ae5ed3d1"
  },
  {
    "url": "img/tools/resources-dw/pexels.png",
    "revision": "8e9bcbb9d63f855f50855ed12dc961d6"
  },
  {
    "url": "img/tools/resources-dw/pixabay.png",
    "revision": "5b1fdf7fbc1d182837f081fe0125640b"
  },
  {
    "url": "img/tools/resources-dw/rgba.png",
    "revision": "dcf26eb7713e508c36b757732c2e95bd"
  },
  {
    "url": "img/tools/resources-dw/shad.png",
    "revision": "460e7a6afd6814c35ada7681369822fc"
  },
  {
    "url": "img/tools/resources-dw/shapes.png",
    "revision": "95d0474120a7ab407dfd664d769fbc62"
  },
  {
    "url": "img/tools/resources-dw/wave.png",
    "revision": "73250e1d4bbc7170a89c846e2a5602a6"
  },
  {
    "url": "img/tools/resources-dw/webcode.png",
    "revision": "2f51cd9921f83ca591864346606f7b6d"
  },
  {
    "url": "img/tools/transformtools.png",
    "revision": "cb843dc226bdf2ea74d9580d2dcb76ed"
  },
  {
    "url": "img/wp/wp.png",
    "revision": "43626470e201f72c20d06a324c9b53a5"
  },
  {
    "url": "index.html",
    "revision": "c655d643136bdb7745f42f305aaf89ec"
  },
  {
    "url": "librerias/animaciones.html",
    "revision": "76c80b1cba4434745fe44bcb7abdc194"
  },
  {
    "url": "librerias/index.html",
    "revision": "750f3d304b4703abb23e03b18b8389a9"
  },
  {
    "url": "plugins/index.html",
    "revision": "8aa92c4e2def7cd17449501776116f97"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "6636faf9ecc3e64f179abc75062ce7f5"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "4d977398cca0f4a1da49644a8eb3b49c"
  },
  {
    "url": "templates/index.html",
    "revision": "7067a33bc892a803d2d53aa9469ab515"
  },
  {
    "url": "templates/navbars/navbar.html",
    "revision": "9fa270c28e5be5414893903036a3bc0a"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "6c1c8ccfdb4018d8c5e66c5ea32db1e6"
  },
  {
    "url": "templates/sliders/fullScreen.html",
    "revision": "2c5b672b410b0a9cef355cc6eb9f30c2"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "01e2f354f82599b0189771a5e7d3fb2d"
  },
  {
    "url": "tutorials/index.html",
    "revision": "a7dc65b2f15efce94bac0d5659966247"
  },
  {
    "url": "tutorials/linux/arch-linux.html",
    "revision": "1acce2f35a7316ba0222b8e65a8656d9"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "b20ef7755c13036f4778102881f683a7"
  },
  {
    "url": "tutorials/linux/img-compress.html",
    "revision": "636b078dac99e501fdff96e4cade96c3"
  },
  {
    "url": "tutorials/linux/spotify-adblock.html",
    "revision": "40db866e3749d9849f224a910bfafc37"
  },
  {
    "url": "wordpress/basic-theme/basic-theme.html",
    "revision": "d0b7f9d71b130ce36f65ae9123ca284c"
  },
  {
    "url": "wordpress/basic-theme/estilos.html",
    "revision": "c55bd2132bf37e0dda4c8fa28449a017"
  },
  {
    "url": "wordpress/basic-theme/functions.html",
    "revision": "25768fb91ba566b0ab22184ebee90c07"
  },
  {
    "url": "wordpress/basicos.html",
    "revision": "8cf207d11bd2ab6e342a44341cce2325"
  },
  {
    "url": "wordpress/index.html",
    "revision": "887e6d5ff2baf17021a4f025f39127f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
