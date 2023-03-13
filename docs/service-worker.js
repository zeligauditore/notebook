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
    "revision": "ba2ac3af5cd14364d6b95de691cde7c0"
  },
  {
    "url": "assets/css/0.styles.70aaea59.css",
    "revision": "462ba417ecaf7147cb0309514c09dded"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.49ea0c2d.js",
    "revision": "181696674b4b9d39c15c65a4882a9ed6"
  },
  {
    "url": "assets/js/11.81183aa5.js",
    "revision": "fb7c65e4c0f4fe3bbfdef78a08e26610"
  },
  {
    "url": "assets/js/12.dc8b6446.js",
    "revision": "c01a578757484b8d03fd5cd12b221355"
  },
  {
    "url": "assets/js/13.8a95e685.js",
    "revision": "c087892b1dbbb6db0a876f1c9efd3b14"
  },
  {
    "url": "assets/js/14.724aa720.js",
    "revision": "6685b2b8d90201f9f8af631c2283c79f"
  },
  {
    "url": "assets/js/15.d2e19bf0.js",
    "revision": "98e09d3e24bbf0ca6463d0eba977fe85"
  },
  {
    "url": "assets/js/16.06011d49.js",
    "revision": "fe98e06a44615e1f05b7b7767b9ed2d3"
  },
  {
    "url": "assets/js/17.d05367d8.js",
    "revision": "d21b52992b05964aad327ed8444635a9"
  },
  {
    "url": "assets/js/18.50f60bc6.js",
    "revision": "53c8117ef66614c9db83713a7c5f871c"
  },
  {
    "url": "assets/js/19.43722f71.js",
    "revision": "0e35d0b7cbda2a914ad32c6354dfc592"
  },
  {
    "url": "assets/js/2.672d894f.js",
    "revision": "e98fad3061efbdde6c296b69d7056613"
  },
  {
    "url": "assets/js/20.d5bf9020.js",
    "revision": "9bb50d1134313317c7b118452c36e7e8"
  },
  {
    "url": "assets/js/21.6badc84a.js",
    "revision": "b344a92a795410b991383a612e86a23b"
  },
  {
    "url": "assets/js/22.ff270f26.js",
    "revision": "88e08466ad7c38970260fc4575764bad"
  },
  {
    "url": "assets/js/23.3f02c9d4.js",
    "revision": "5b545e6646025af1855a4585ad0c61aa"
  },
  {
    "url": "assets/js/24.9728ec90.js",
    "revision": "8294b0548b01b5342bb016c8dd1a13e8"
  },
  {
    "url": "assets/js/25.2ef1ae77.js",
    "revision": "a62817d5514d88e1649c058885f5523d"
  },
  {
    "url": "assets/js/26.e5c112d0.js",
    "revision": "a82962096d4e08528163a86403990fdd"
  },
  {
    "url": "assets/js/27.af6c3ca8.js",
    "revision": "4e86722a6f539c7d5fa85517ba6aaf5a"
  },
  {
    "url": "assets/js/28.99f3b861.js",
    "revision": "42e184c2e8309346496438194ddd28f9"
  },
  {
    "url": "assets/js/29.80ee048f.js",
    "revision": "a94cafeffc3969de73569f213c969ebc"
  },
  {
    "url": "assets/js/3.bff98c43.js",
    "revision": "a573989dd90d5a163c1a25a59f49b408"
  },
  {
    "url": "assets/js/30.f770ad9c.js",
    "revision": "6b934ac7962303073fe9205196e1ab1d"
  },
  {
    "url": "assets/js/31.69396efd.js",
    "revision": "ddf2b33cc491a42ae752336f06abb0ef"
  },
  {
    "url": "assets/js/32.eab39901.js",
    "revision": "ffe0fd2ca9e249eb09c0bfa500ab607b"
  },
  {
    "url": "assets/js/33.0ca94581.js",
    "revision": "21f648525c7f2a0b5d8c43e90045300f"
  },
  {
    "url": "assets/js/34.b87d15a3.js",
    "revision": "cffd51f91592752b29127818b8c6cdcf"
  },
  {
    "url": "assets/js/35.2abc56dd.js",
    "revision": "4e090524685cb3f33ecbb8d7da8dafe5"
  },
  {
    "url": "assets/js/36.c487b146.js",
    "revision": "b23f8c6448277aa3214cb71750d772c4"
  },
  {
    "url": "assets/js/37.814ae82c.js",
    "revision": "2077847edda0e2d9c55e0086646ec90b"
  },
  {
    "url": "assets/js/38.d391ce1b.js",
    "revision": "077afaf9f44e248fb0be131ceab9a729"
  },
  {
    "url": "assets/js/39.b4350080.js",
    "revision": "b6cf7b00c844a75c71a1e162435ac889"
  },
  {
    "url": "assets/js/4.e638f7cf.js",
    "revision": "3289d1e2bec5ed223dd868d30d7ddb09"
  },
  {
    "url": "assets/js/40.5968ce86.js",
    "revision": "e91223473b192a5e9b66e3c0b0a166b4"
  },
  {
    "url": "assets/js/41.62e21065.js",
    "revision": "31538bc39b4981fa44abefb66104fc3f"
  },
  {
    "url": "assets/js/42.ce56a4b8.js",
    "revision": "55f51609cb09683025b5cca116c8c0ca"
  },
  {
    "url": "assets/js/43.2294218a.js",
    "revision": "42e497a5b0b3cc5624c67049b8a69619"
  },
  {
    "url": "assets/js/44.e6ef7123.js",
    "revision": "d0a530bb6b6bcf326a5ebaabab100b90"
  },
  {
    "url": "assets/js/45.a88d887c.js",
    "revision": "495714752c69d9075da41f3ec1848460"
  },
  {
    "url": "assets/js/46.1a05e7bf.js",
    "revision": "c7eb64ada43c53fba825e285204b397a"
  },
  {
    "url": "assets/js/5.681a26ea.js",
    "revision": "7bf1cebd939686ecd2dc2abd7e695713"
  },
  {
    "url": "assets/js/6.010cd992.js",
    "revision": "bae40fa9769a5c0b229b3d7a44b064a9"
  },
  {
    "url": "assets/js/7.7ec9748e.js",
    "revision": "7d3d956f3aad41509b42bdb66af960d7"
  },
  {
    "url": "assets/js/8.1b5b14af.js",
    "revision": "f6fd626607dffd74a868a840ade14e61"
  },
  {
    "url": "assets/js/9.93858b25.js",
    "revision": "b30b7ef9d99ab511181d557d587ac2af"
  },
  {
    "url": "assets/js/app.84ff47ae.js",
    "revision": "cbaf8249860bfd3ca5e20eadb0521ffa"
  },
  {
    "url": "config/index.html",
    "revision": "d4efe38c14d6317d44bf486d0364601a"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "de011ea3ba5f5a391fa2eab45f4f36eb"
  },
  {
    "url": "guide/docker.html",
    "revision": "28630e92cfa034bc31fa98375edbe9e2"
  },
  {
    "url": "guide/git.html",
    "revision": "ccb557734254595d9e0d2daea84c30f8"
  },
  {
    "url": "guide/index.html",
    "revision": "1b4bdd91c95d7897f6b32aa646049e80"
  },
  {
    "url": "guide/ssh.html",
    "revision": "8931f01edf76535646d405154d5f41bb"
  },
  {
    "url": "herramientas/index.html",
    "revision": "c8d5390ae2aa6a4ea7ded2e2bbef7567"
  },
  {
    "url": "herramientas/resources-dw/cdns.html",
    "revision": "c904c424d996fa194ce4c05ac94ce306"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "e4c19a3a8326718cf9a39502f1fee3ff"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "5d812ad1b1f862a396e57c9e92d48be2"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "127e56c7515fdf0083a947d517146872"
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
    "url": "img/decorations/decorative-lines.png",
    "revision": "839739d163639f06f95b1a49c39e8ebe"
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
    "revision": "a68c2482806968155423afe3f3b01dca"
  },
  {
    "url": "librerias/animaciones.html",
    "revision": "18145c527339669e6478fd2ccc44a61d"
  },
  {
    "url": "librerias/index.html",
    "revision": "3e65f0f499f8925fed528b11523f087e"
  },
  {
    "url": "plugins/index.html",
    "revision": "bbed8a580c85fcff9a4105b1b57d7f60"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "3a43d45092f3235463b20d8d7ba757ae"
  },
  {
    "url": "templates/decoratives/decoratives-lines.html",
    "revision": "bd9f7e79ca2cdfb9e56c485a35a085b6"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "ec53c4818771e849dff0b6f064e9dcfe"
  },
  {
    "url": "templates/index.html",
    "revision": "b7b864cdc992ba03d167e64b82eda7f3"
  },
  {
    "url": "templates/navbars/navbar.html",
    "revision": "9d72ef757de119cf1e66a66e6bd36332"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "c11b7255eb0234a85baff693c66e9188"
  },
  {
    "url": "templates/sliders/fullScreen.html",
    "revision": "08e4054c84c8b763ef40fe521237c69a"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "75196e46b12e3ca57e16ca14c2d3205c"
  },
  {
    "url": "tutorials/index.html",
    "revision": "a72c64c5c848efa4184bbcc203b8e255"
  },
  {
    "url": "tutorials/linux/arch-linux.html",
    "revision": "69555b4db3d601545b46c25abf1950a5"
  },
  {
    "url": "tutorials/linux/fedora/fedora-basics.html",
    "revision": "62cf6c29b8de692ed637b5bb88c92556"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "baf346b6f3824d0a59224c6f0ddb7006"
  },
  {
    "url": "tutorials/linux/image-convert.html",
    "revision": "d887956338312f0e85f2cd0e7b2dea44"
  },
  {
    "url": "tutorials/linux/img-compress.html",
    "revision": "93286be573b8016bed9b88f4a002e600"
  },
  {
    "url": "tutorials/linux/rar-compress.html",
    "revision": "e3819c21c50afe655e3b9b044bf0863f"
  },
  {
    "url": "tutorials/linux/spotify-adblock.html",
    "revision": "0524abf7b69d35f80de785d437d763e4"
  },
  {
    "url": "wordpress/basic-theme/basic-theme.html",
    "revision": "85c64bb9ff541edced632e276d71d35d"
  },
  {
    "url": "wordpress/basic-theme/estilos.html",
    "revision": "4c9a55698b6e0a4b1903c4e88db78eab"
  },
  {
    "url": "wordpress/basic-theme/functions.html",
    "revision": "11377bb434689c4ec7e58d0343669b68"
  },
  {
    "url": "wordpress/basicos.html",
    "revision": "349a8f0f5d5b97d49a744c4caea1e5ac"
  },
  {
    "url": "wordpress/index.html",
    "revision": "878549282c5e8ff19a17f96188637c5a"
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
