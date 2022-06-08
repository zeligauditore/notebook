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
    "revision": "87f5234c48c84bc12cb2bb71b11b477c"
  },
  {
    "url": "assets/css/0.styles.bbf71404.css",
    "revision": "207e26ae6e22e5128470ed4e51edcc0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5ead4bd8.js",
    "revision": "85de9d65fff2e0655ebb2b2144e8c1b8"
  },
  {
    "url": "assets/js/10.c4963849.js",
    "revision": "934478c956df072e6384f399d3da8de8"
  },
  {
    "url": "assets/js/11.d8c56c1f.js",
    "revision": "fa8e6b7e26e32da22f3854caa8c79775"
  },
  {
    "url": "assets/js/12.2e9b9403.js",
    "revision": "ab44fa757f6a203e2376d818a3abf3aa"
  },
  {
    "url": "assets/js/13.ddb080d7.js",
    "revision": "ba40f87593d0bb8db0584f041b090eff"
  },
  {
    "url": "assets/js/14.daf78bbb.js",
    "revision": "ad68215929c6061731d8546e5152e940"
  },
  {
    "url": "assets/js/15.91a596aa.js",
    "revision": "a6d9bd3d9c5af6ff6f1e1bf6352d8c8e"
  },
  {
    "url": "assets/js/16.0f5e6acb.js",
    "revision": "fe357b2cf7b4fbc3f427240d99878deb"
  },
  {
    "url": "assets/js/17.f8ab2a2e.js",
    "revision": "bd10b75f4c17ea40bbe6f4ef9e910d77"
  },
  {
    "url": "assets/js/18.3289ee1f.js",
    "revision": "4a2688cf8cc86675947e284f7706810e"
  },
  {
    "url": "assets/js/19.4b80bbb2.js",
    "revision": "b3ce2fba7f7d71fa591af0366e3b82df"
  },
  {
    "url": "assets/js/20.184d1ef3.js",
    "revision": "95f3da5b483699fe4798710114c0ac17"
  },
  {
    "url": "assets/js/21.449a0bc3.js",
    "revision": "490c2ea20b9d3c56a8ef6daf0caccf31"
  },
  {
    "url": "assets/js/22.3392c875.js",
    "revision": "958ea1402ce9989c7a0d0f6ec17ddbe2"
  },
  {
    "url": "assets/js/23.de6ad7f1.js",
    "revision": "2fd886e34efc82ac3278273d53ce662d"
  },
  {
    "url": "assets/js/24.6d8693d9.js",
    "revision": "7086fe581538517b695c449c4c033f4c"
  },
  {
    "url": "assets/js/25.c962918d.js",
    "revision": "6bbc52e1b11092fdf300ad328f200660"
  },
  {
    "url": "assets/js/26.2871fd20.js",
    "revision": "a8b0cdeeea05fba64c4067fc768caa28"
  },
  {
    "url": "assets/js/27.803ad6c5.js",
    "revision": "11f3e68613f7eed61f4277567d12be66"
  },
  {
    "url": "assets/js/28.11764b33.js",
    "revision": "6a57ff2a08fb54375462e17347e3b211"
  },
  {
    "url": "assets/js/29.63abb406.js",
    "revision": "06ebc84bc4b477e3c46766d87ad7f705"
  },
  {
    "url": "assets/js/3.17c003af.js",
    "revision": "8837e3943046d6563819cdee0a6ec3b3"
  },
  {
    "url": "assets/js/30.0411c817.js",
    "revision": "f206bc78ee4c9c250b95cf3495fde7d2"
  },
  {
    "url": "assets/js/31.443c27f0.js",
    "revision": "dcffc4762e27f1c39db326379645e0d6"
  },
  {
    "url": "assets/js/32.da25bebb.js",
    "revision": "2afa1c05c920d3ec69f711992417ddd7"
  },
  {
    "url": "assets/js/33.dec94490.js",
    "revision": "abaef87e44c3a8d1a956c2a87832fb12"
  },
  {
    "url": "assets/js/34.e4886318.js",
    "revision": "acb3786866cf51162c8ea7b21e3711ca"
  },
  {
    "url": "assets/js/4.e9b73195.js",
    "revision": "19e3812a559bb0d95b33f695a49e6dfd"
  },
  {
    "url": "assets/js/5.d34ad84b.js",
    "revision": "86f09e18a6fa69c818292cc51c1c38c0"
  },
  {
    "url": "assets/js/6.471d23da.js",
    "revision": "d43dc4187779144a4135a96ded9a63a3"
  },
  {
    "url": "assets/js/7.46a7ec90.js",
    "revision": "c89edb4c773c5b1a0d3c5f16aa3b7a82"
  },
  {
    "url": "assets/js/8.599da44f.js",
    "revision": "4b51a6be19d25c3828fa637e5f461ba3"
  },
  {
    "url": "assets/js/9.2af20983.js",
    "revision": "6d5aa60a5c970c591b48b4cada320019"
  },
  {
    "url": "assets/js/app.883bdd7d.js",
    "revision": "6037b5ca3c73ed1791cbd3805c04747c"
  },
  {
    "url": "config/index.html",
    "revision": "129c8b51cec4099ec1abc2c83115d0c4"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "87b5dc8f70bcc4b9a62f7a81e083d6da"
  },
  {
    "url": "guide/docker.html",
    "revision": "60659a46d5f8c516808fb931ab2609e2"
  },
  {
    "url": "guide/git.html",
    "revision": "8f04a1729aee52435439627be28de32d"
  },
  {
    "url": "guide/index.html",
    "revision": "47aa807dd4fbaa5448d864a2a9deb774"
  },
  {
    "url": "guide/ssh.html",
    "revision": "35e36a590c4b028d3abafb3909cb41bf"
  },
  {
    "url": "herramientas/index.html",
    "revision": "86294752dc26a7cac1a3494d5aca3f02"
  },
  {
    "url": "herramientas/resources-dw/cdns.html",
    "revision": "f74a3b14a33b62c88731c2ed306e0e73"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "b0406a4eb4bb72f644a48b9bec4447bc"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "a4c956a090c7e4d5b5dfa2cd4c0ee8d7"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "4b589ccd5a0a43f6dfb0001ce5c3f4fa"
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
    "url": "img/separador.png",
    "revision": "232774ac78c88e1759fb2e8783323855"
  },
  {
    "url": "img/star.png",
    "revision": "eb84555fd6c8b6886495fcd5f5b8a178"
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
    "url": "index.html",
    "revision": "10b621ad6cb5b141902624d98adcb9b4"
  },
  {
    "url": "librerias/animaciones.html",
    "revision": "74b16984f7336df88533382fc865a01d"
  },
  {
    "url": "librerias/index.html",
    "revision": "7a04c01a0d2b433e3961cdfae570e21c"
  },
  {
    "url": "plugins/index.html",
    "revision": "6306e06b88d4a2bb7e97a148db10cfc9"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "3b36a6970f58b3e5ac8cf1ccc6f3b3e9"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "d0d05938335eccacf86e02345d993a7a"
  },
  {
    "url": "templates/index.html",
    "revision": "b06676866614ffa4b59fb5e1fb28b03a"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "3cf066e13865fd0df0263121ebfcab4d"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "10040006185653db83b7e8916a45e09d"
  },
  {
    "url": "tutorials/index.html",
    "revision": "b9b6abde7ff236f7de71bdf772ca24b3"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "e06aacc082334a158711a6fe98b106a8"
  },
  {
    "url": "tutorials/linux/linux.html",
    "revision": "a903ff4dcd6c21f8f7580d815b33c3ed"
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
