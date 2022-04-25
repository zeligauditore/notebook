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
    "revision": "dcec44ce4766ba59ab2585b6a615e149"
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
    "url": "assets/js/11.f6396bfa.js",
    "revision": "fb2c97bf9756d94cc830e96d9c551c39"
  },
  {
    "url": "assets/js/12.310caa3b.js",
    "revision": "e9b78e92a342c1b7f92fbb40d6e67679"
  },
  {
    "url": "assets/js/13.4104f93b.js",
    "revision": "004bfa48b29c4698d3563178eaa2789a"
  },
  {
    "url": "assets/js/14.0aac5aa7.js",
    "revision": "b6efdb6cd85e460c2820edeb49d26bfe"
  },
  {
    "url": "assets/js/15.ef18ee80.js",
    "revision": "0b91ee48faa94fc1413156e97892fbd4"
  },
  {
    "url": "assets/js/16.3e3de552.js",
    "revision": "4b73456e71a650e7813ceb7eb51e55ad"
  },
  {
    "url": "assets/js/17.f7143b5e.js",
    "revision": "2eca1d09825c10c8cb7db1ae394c1601"
  },
  {
    "url": "assets/js/18.13d76594.js",
    "revision": "d1c86dbfb5548a585f4ed302adfabf8d"
  },
  {
    "url": "assets/js/19.edecb244.js",
    "revision": "3954b8bd8faf22a9512c338ed0a763ac"
  },
  {
    "url": "assets/js/20.484403f3.js",
    "revision": "92de64d8536a838c84916e3fa4c331a5"
  },
  {
    "url": "assets/js/21.99c1f6b7.js",
    "revision": "8d7bee9868d88c1c6c742b7bce9ebf86"
  },
  {
    "url": "assets/js/22.596448a7.js",
    "revision": "3331f3e9aaab300f32169a49b20763f3"
  },
  {
    "url": "assets/js/23.c1dc598b.js",
    "revision": "b2dd5c0c1ffd94f6e7ff80569153ffb4"
  },
  {
    "url": "assets/js/24.91efe15d.js",
    "revision": "c2892fd549cfc5b55af80b116c6bc7d3"
  },
  {
    "url": "assets/js/25.dde6637d.js",
    "revision": "896dce109ae7270f26970f124f1ab622"
  },
  {
    "url": "assets/js/26.e13427df.js",
    "revision": "219b6d91d0988e548ba20716e5e73a78"
  },
  {
    "url": "assets/js/27.6169a4ce.js",
    "revision": "70600f001c1063fe778844f707b5df4d"
  },
  {
    "url": "assets/js/28.c839f38a.js",
    "revision": "2d688177e10b082dd1e3d0adb7e8f1b9"
  },
  {
    "url": "assets/js/29.453515cf.js",
    "revision": "bb901270de817b2f6b4bdaa1e9dd2f8f"
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
    "url": "assets/js/app.09670e94.js",
    "revision": "7fa936976cea7baaa8e283b34915f8a2"
  },
  {
    "url": "config/index.html",
    "revision": "f4eaa1d9300903b2cb0d467ea93a200d"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "ea4d4dc4569c80aae3d2932933dfbb4d"
  },
  {
    "url": "guide/docker.html",
    "revision": "edc52d4a992d88df1ab7093702138523"
  },
  {
    "url": "guide/git.html",
    "revision": "efd142c1aabc74e57396f498c0012948"
  },
  {
    "url": "guide/index.html",
    "revision": "0d87723b6a937de7bdbcaae1fb38e913"
  },
  {
    "url": "guide/ssh.html",
    "revision": "9b2852b7633b49112b5204c71f73a8fa"
  },
  {
    "url": "herramientas/index.html",
    "revision": "9ab68fad8057f84fd6f84dd0966647b0"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "7df6e26af5b3ddac377bde567c6f3406"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "509c225fd43649c689c1366475294146"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "04f31786ad0d79c50bcd8ce0c56198e7"
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
    "revision": "2122ed2d8033e4fefbf60a66458c60c2"
  },
  {
    "url": "plugins/index.html",
    "revision": "6c437cc687313fb137d9336f2c64e130"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "b2494506445742b83d29ff3c22ff5f63"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "0e056b112d6b107392a032ddf9ba49d4"
  },
  {
    "url": "templates/index.html",
    "revision": "c33e582da68551398c11e0631fedbd6b"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "856d4db6f8c84f8dbd4afde795a1b714"
  },
  {
    "url": "tutorials/index.html",
    "revision": "06a10ff6aefaf5e2f1eac2d7c8c3c909"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "5d6cc76b85ca7240d1270117f84a2271"
  },
  {
    "url": "tutorials/linux/linux.html",
    "revision": "5408d5ac76feb456dfa154fefef39002"
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
