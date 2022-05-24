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
    "revision": "275b1db42fc0784f74a0d3e1b1333969"
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
    "url": "assets/js/12.7d68801b.js",
    "revision": "3339698a2a2ada9b1ec3475a948737fc"
  },
  {
    "url": "assets/js/13.ee5d96d9.js",
    "revision": "099d40f0c0970a8cc95c26872c2230f6"
  },
  {
    "url": "assets/js/14.60ae9a4c.js",
    "revision": "111df7ad72072b621d6c9f6afc40efe1"
  },
  {
    "url": "assets/js/15.1f812e41.js",
    "revision": "522a272e6aa533b53e526bb0db8cf39b"
  },
  {
    "url": "assets/js/16.0f5e6acb.js",
    "revision": "fe357b2cf7b4fbc3f427240d99878deb"
  },
  {
    "url": "assets/js/17.effeaddd.js",
    "revision": "7050511b30f6352e167a5414ca286d80"
  },
  {
    "url": "assets/js/18.5cf4f73a.js",
    "revision": "f1319a491f738f44aba0bb9c8ffc570a"
  },
  {
    "url": "assets/js/19.f5112484.js",
    "revision": "dd3b321e98a8eb9a9bcc16f7574ae61f"
  },
  {
    "url": "assets/js/20.499fd3e7.js",
    "revision": "b6036127b5dcf8cc51bac221824e3159"
  },
  {
    "url": "assets/js/21.99c1f6b7.js",
    "revision": "8d7bee9868d88c1c6c742b7bce9ebf86"
  },
  {
    "url": "assets/js/22.add76ea0.js",
    "revision": "f75edac6d1a884a192159387440f6bc8"
  },
  {
    "url": "assets/js/23.2de6f902.js",
    "revision": "994575f2dbf30cba0f2264396ddb91df"
  },
  {
    "url": "assets/js/24.65bbe54f.js",
    "revision": "1789417d6c6d037299c50f2bd4f78286"
  },
  {
    "url": "assets/js/25.6bb2ec61.js",
    "revision": "281ee2206ad3674ca2c01271fe2ae194"
  },
  {
    "url": "assets/js/26.259ab04f.js",
    "revision": "1c2fd7e9fbd34aa8176821d584d57c73"
  },
  {
    "url": "assets/js/27.19c84a15.js",
    "revision": "5eccd948901834ccc1e62ec8f9e01cbf"
  },
  {
    "url": "assets/js/28.b398aff1.js",
    "revision": "243facbe6d715ac6428f5b1286bc4c06"
  },
  {
    "url": "assets/js/29.8a18a7d5.js",
    "revision": "79a0ca24b1c2ae1ec7461e8bec56c13c"
  },
  {
    "url": "assets/js/3.17c003af.js",
    "revision": "8837e3943046d6563819cdee0a6ec3b3"
  },
  {
    "url": "assets/js/30.7bc194b0.js",
    "revision": "d00f25371ddb54c76cf7f38c7d81a31a"
  },
  {
    "url": "assets/js/4.1797f198.js",
    "revision": "ec17c61d7f7d66eaf4431912d0b1859a"
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
    "url": "assets/js/9.342fa41c.js",
    "revision": "b10c20a8c6a549539ad9e523a83d90cc"
  },
  {
    "url": "assets/js/app.d86f161e.js",
    "revision": "797ba0ab529ef4ca41428ef2a54339bd"
  },
  {
    "url": "config/index.html",
    "revision": "ba47ff87579fbc5ae0d1dd3f794a7cfd"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "825f98ba9fef37df9c9b0b8719f0bab1"
  },
  {
    "url": "guide/docker.html",
    "revision": "e512ce377ca1589748e4e7c8e0247c93"
  },
  {
    "url": "guide/git.html",
    "revision": "20d44712e841e1763b74b9eed3cc4997"
  },
  {
    "url": "guide/index.html",
    "revision": "ce670aa5c3da840c1fdb56fb3985e1a4"
  },
  {
    "url": "guide/ssh.html",
    "revision": "4b8006783ae46611d6152789f54af51a"
  },
  {
    "url": "herramientas/index.html",
    "revision": "f733fb40160d4879ce799dcbfcbe5adc"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "a0906d3e47e7feb3af2d4132a2e770d1"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "fd325d34191c99aae34107f18706e9b5"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "5f8eb64e980b841c19a4d0b3af0382f4"
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
    "revision": "91f44f78b0ead489fcafb059233d2bd5"
  },
  {
    "url": "plugins/index.html",
    "revision": "b507d03e07efde758519a2a33d9d4fba"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "118d568e0066399380ce0aa28927f0ff"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "1edb5c044ab1b93cab0c5e37ed1a555f"
  },
  {
    "url": "templates/index.html",
    "revision": "dae3d0771d82d8f29c8ea33143265123"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "0a3c16887e5d6dad093be370c1c5bf0a"
  },
  {
    "url": "tutorials/index.html",
    "revision": "843745aff762dce91110ef0dac879143"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "b388deabf40b013baeb7423ddd571afa"
  },
  {
    "url": "tutorials/linux/linux.html",
    "revision": "9cb91ade3fc9e13efa9ad5f9793e8608"
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
