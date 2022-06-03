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
    "revision": "ecc27a1f0a4de1f7dbfbb4e22bcb3a9c"
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
    "url": "assets/js/11.59b66142.js",
    "revision": "d708abd1ef93a9406da04879b7dc5204"
  },
  {
    "url": "assets/js/12.310caa3b.js",
    "revision": "e9b78e92a342c1b7f92fbb40d6e67679"
  },
  {
    "url": "assets/js/13.c87ff29e.js",
    "revision": "863364a10c84b15ec3b01f6b7580aab8"
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
    "url": "assets/js/17.cb6237bd.js",
    "revision": "4ba78fd73b289802c64172b791915657"
  },
  {
    "url": "assets/js/18.e9bbf831.js",
    "revision": "0e5badeeaa1fa6ede913702413418516"
  },
  {
    "url": "assets/js/19.bf785674.js",
    "revision": "b0cf5f6ba10bef23fe86f706420893d2"
  },
  {
    "url": "assets/js/20.7d01e2f8.js",
    "revision": "3b3ddccc5ff089f758759154aca5aed9"
  },
  {
    "url": "assets/js/21.99c1f6b7.js",
    "revision": "8d7bee9868d88c1c6c742b7bce9ebf86"
  },
  {
    "url": "assets/js/22.ffb19d32.js",
    "revision": "470f2f22bb0821752e3348a67f8ef347"
  },
  {
    "url": "assets/js/23.664da7a6.js",
    "revision": "6ebfcbcab7b63f7a0363516f3313fa4a"
  },
  {
    "url": "assets/js/24.7d768a67.js",
    "revision": "0877b1f871104a594742baed183a4885"
  },
  {
    "url": "assets/js/25.17fca5fa.js",
    "revision": "6f2f8f2df7187ded0ff37d3dec0a9ecf"
  },
  {
    "url": "assets/js/26.c491dc88.js",
    "revision": "93e46e2cf1ce98cf1611fcf09503322a"
  },
  {
    "url": "assets/js/27.b2714da4.js",
    "revision": "991518c5a372bc7b524e96d5c8c89055"
  },
  {
    "url": "assets/js/28.0f6f31b7.js",
    "revision": "bfbaef4a51cbc6b17dc3606790d311a8"
  },
  {
    "url": "assets/js/29.a58a1444.js",
    "revision": "d4bad3742ca06c550fb3d7437e5f9477"
  },
  {
    "url": "assets/js/3.17c003af.js",
    "revision": "8837e3943046d6563819cdee0a6ec3b3"
  },
  {
    "url": "assets/js/30.bbf845b5.js",
    "revision": "90504c566ae59eaa6f18cedb7ba6fc43"
  },
  {
    "url": "assets/js/31.268209ce.js",
    "revision": "4e98f400b62d30da2fc4dc40bd74e4e3"
  },
  {
    "url": "assets/js/32.e5a502de.js",
    "revision": "76b7aa822a1234b13b92922a0f53bd23"
  },
  {
    "url": "assets/js/4.84454259.js",
    "revision": "286708a909fcc87852e6710f83009a61"
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
    "url": "assets/js/9.3e984bd3.js",
    "revision": "f87dd5db2394bee030b514ff428453a0"
  },
  {
    "url": "assets/js/app.f10436ce.js",
    "revision": "3d2a864a83c6d15353207d310f472cf2"
  },
  {
    "url": "config/index.html",
    "revision": "47855cc21da76b9b776a318d453c3d8a"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "1c6e819d80879a42c18207288dbb7dc4"
  },
  {
    "url": "guide/docker.html",
    "revision": "15c336b319f000bb398b3e1bf81aabe4"
  },
  {
    "url": "guide/git.html",
    "revision": "7a10851617132638a9936a61dcb8d9b6"
  },
  {
    "url": "guide/index.html",
    "revision": "466599c25520ccfa95d1858187cd26f0"
  },
  {
    "url": "guide/ssh.html",
    "revision": "81ecbe3a47c96e92b8f0740925344a03"
  },
  {
    "url": "herramientas/index.html",
    "revision": "ff4bd26dc99b55369c1b33efc4786c77"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "75883f76e93023463d3398d5efaa9c25"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "ab3a87fadc7bfa34d71212a5ff1b3a8d"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "b2e288fe7f12b9e4880e564c7c3f48d4"
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
    "url": "index.html",
    "revision": "66123334e42e23b9553c1ce74c813a1f"
  },
  {
    "url": "librerias/index.html",
    "revision": "ce73dc513a7fe11629d75caf942dc470"
  },
  {
    "url": "plugins/index.html",
    "revision": "1fe51ae0aea1a334055af94947fac5b2"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "af99176d8179106a2a6457a7367ed2f7"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "f3e19f713dea41d3a1f06ab41553350f"
  },
  {
    "url": "templates/index.html",
    "revision": "f53ba407e2ff3a26aad37bb3ef51ffaa"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "054d07e0af28b289e04843f4accd202e"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "b72c297bf351cafe0f869637a97418da"
  },
  {
    "url": "tutorials/index.html",
    "revision": "5d48702f3dd3983864838d02c99e86b6"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "300c70f22d3cd0f177046971030dbb32"
  },
  {
    "url": "tutorials/linux/linux.html",
    "revision": "4941be85a521411aeba8381ba533dd18"
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
