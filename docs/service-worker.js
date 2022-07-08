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
    "revision": "5fa1b2cafbb0858d58456fcd0c8c0ee8"
  },
  {
    "url": "assets/css/0.styles.b74bc4c0.css",
    "revision": "03bcaeb3f3571fa0abb1ede0a694d223"
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
    "url": "assets/js/12.7d68801b.js",
    "revision": "3339698a2a2ada9b1ec3475a948737fc"
  },
  {
    "url": "assets/js/13.a4a7ece6.js",
    "revision": "8efaf6678ca32a22b9f0ea7f01fa6fb8"
  },
  {
    "url": "assets/js/14.aac079d6.js",
    "revision": "74c0c51b19b31d787b70f70923dd883c"
  },
  {
    "url": "assets/js/15.1f812e41.js",
    "revision": "522a272e6aa533b53e526bb0db8cf39b"
  },
  {
    "url": "assets/js/16.38133820.js",
    "revision": "e1f5b64714abe40e86891bc6cff1e4b2"
  },
  {
    "url": "assets/js/17.effeaddd.js",
    "revision": "7050511b30f6352e167a5414ca286d80"
  },
  {
    "url": "assets/js/18.8fe84125.js",
    "revision": "764343d40cea6408423b7c2bca9a265c"
  },
  {
    "url": "assets/js/19.ac2096d1.js",
    "revision": "8aff5982bb328df2fb103342453d3947"
  },
  {
    "url": "assets/js/20.3faadc0f.js",
    "revision": "0173827a864640603f178a7decf17829"
  },
  {
    "url": "assets/js/21.d9b14c3d.js",
    "revision": "c0c90effc6eb6e38673d38be64abd457"
  },
  {
    "url": "assets/js/22.3392c875.js",
    "revision": "958ea1402ce9989c7a0d0f6ec17ddbe2"
  },
  {
    "url": "assets/js/23.3d52cd3c.js",
    "revision": "f76b017575de931dcd9044531da3ac8a"
  },
  {
    "url": "assets/js/24.b9d001fd.js",
    "revision": "1ed0441854f5364995ddefeee96259af"
  },
  {
    "url": "assets/js/25.7409b898.js",
    "revision": "b661b90d9d859f0ec84092a5d9b08726"
  },
  {
    "url": "assets/js/26.0e2f6cfa.js",
    "revision": "d91c46ce3fe0ea7579cf5410bc7c97cd"
  },
  {
    "url": "assets/js/27.2af126ae.js",
    "revision": "fb282950504eddaa8f07e56071e70069"
  },
  {
    "url": "assets/js/28.7abc7de6.js",
    "revision": "495043185a0f08290e3be65dcdd878ba"
  },
  {
    "url": "assets/js/29.a2cc8313.js",
    "revision": "b6bf9053416b1befc18badc9c4aa14ef"
  },
  {
    "url": "assets/js/3.17c003af.js",
    "revision": "8837e3943046d6563819cdee0a6ec3b3"
  },
  {
    "url": "assets/js/30.e47e71b5.js",
    "revision": "5326505e8eea9fe025e8bf79369dba37"
  },
  {
    "url": "assets/js/31.443c27f0.js",
    "revision": "dcffc4762e27f1c39db326379645e0d6"
  },
  {
    "url": "assets/js/32.c2622814.js",
    "revision": "a86ffb78ce404a151de68c6a8071e934"
  },
  {
    "url": "assets/js/33.b8a5308f.js",
    "revision": "ceb51f6831e944a44b6a30c26efc3081"
  },
  {
    "url": "assets/js/34.82f45162.js",
    "revision": "3e3eb6571c7dd90153f0349b8092fba5"
  },
  {
    "url": "assets/js/35.0f59f826.js",
    "revision": "96a4a87021befbb8e7defecf4652d0bb"
  },
  {
    "url": "assets/js/36.6f52d1b5.js",
    "revision": "653c8f1dc351cf76639904fc4e172bea"
  },
  {
    "url": "assets/js/37.b30a7da7.js",
    "revision": "6ac5e0d4c8a7c5261c820d6094974fff"
  },
  {
    "url": "assets/js/38.6cad3372.js",
    "revision": "9e0380057385828e34b0aca5f72bb479"
  },
  {
    "url": "assets/js/39.1efffd12.js",
    "revision": "161d45145fc09143630cc5e36c90c927"
  },
  {
    "url": "assets/js/4.23dc3986.js",
    "revision": "0b79a1a66509d98823504eb41e78a31f"
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
    "url": "assets/js/9.736c729f.js",
    "revision": "af3622cf905f7fb27ca2d3fa9b98ca14"
  },
  {
    "url": "assets/js/app.8f5e2f13.js",
    "revision": "6df141a820c33971133fef6baf06e2ab"
  },
  {
    "url": "config/index.html",
    "revision": "0448f8952cac2df2c19bbe0796a1e0b3"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "7228da1e78f3cf5ddee24ebfc6d19a8b"
  },
  {
    "url": "guide/docker.html",
    "revision": "005029ac70992a2042f490c195e2e59c"
  },
  {
    "url": "guide/git.html",
    "revision": "26ac19bfb301df2f638f1751934c9786"
  },
  {
    "url": "guide/index.html",
    "revision": "3e607f8d3776762dc641193bf8c1c7c8"
  },
  {
    "url": "guide/ssh.html",
    "revision": "1b9464be0a76e197a0576fe029c84111"
  },
  {
    "url": "herramientas/index.html",
    "revision": "39594156e71adf03f3f0ef53692bd0c7"
  },
  {
    "url": "herramientas/resources-dw/cdns.html",
    "revision": "efe853de82da39c94b32ff211ec53bd0"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "aabfd2716fe75d330508e5833c66bd7d"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "4aaf696ff2355d7ccdf5760b2f4b15ec"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "d7dd4965a50fcc5dfbe7cf167eaece4a"
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
    "url": "img/wp/wp.png",
    "revision": "43626470e201f72c20d06a324c9b53a5"
  },
  {
    "url": "index.html",
    "revision": "7338132f6b79529ea24b7b2fae5448f6"
  },
  {
    "url": "librerias/animaciones.html",
    "revision": "8ddc8a8ea1fa2cedfa2d14646a1b4e70"
  },
  {
    "url": "librerias/index.html",
    "revision": "99e9714cfda739c2a9ac88ee4f928aff"
  },
  {
    "url": "plugins/index.html",
    "revision": "7ebd1f58f62f4383302ca360871bfaa2"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "8dd162efe6e6da6594dbd453f34d662e"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "cadfabd83f045abedcc6e20342c724f5"
  },
  {
    "url": "templates/index.html",
    "revision": "13ae99fe7cd083b84d5e21e531b13a88"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "6b50a44d062507003f5decdadffd1ee4"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "bb7c65c3875c7a450166e764940a8d26"
  },
  {
    "url": "tutorials/index.html",
    "revision": "cae1b569f2903e5a7994c13d3a7a4a19"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "d7a9ce0954b3174123add8179e8e8043"
  },
  {
    "url": "tutorials/linux/linux.html",
    "revision": "6ff691e5c2497246982390b4ce9e8dc6"
  },
  {
    "url": "wordpress/basic-theme/basic-theme.html",
    "revision": "b74b87e13065025680ebda1d5f440e91"
  },
  {
    "url": "wordpress/basic-theme/estilos.html",
    "revision": "bfb824ed74b40a95859943eb6f03bb40"
  },
  {
    "url": "wordpress/basic-theme/functions.html",
    "revision": "08cab407388127199684f401e223577a"
  },
  {
    "url": "wordpress/basicos.html",
    "revision": "f0f629adff9401bbc16898c3366e4d39"
  },
  {
    "url": "wordpress/index.html",
    "revision": "93bfa4909cdf1d78a2f9a6fbae4ff6f3"
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
