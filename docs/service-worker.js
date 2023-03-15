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
    "revision": "9fb53e62d6e6d80c57ebc63a8242fe56"
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
    "url": "assets/js/12.5f722e0b.js",
    "revision": "bb2b899265e7148098c4bb6c60f52db9"
  },
  {
    "url": "assets/js/13.1281ee91.js",
    "revision": "37d1fcf261469c70eeb0a2cec1a8103b"
  },
  {
    "url": "assets/js/14.f997828d.js",
    "revision": "ad0a76c51afe51e757e5ac00d27940de"
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
    "url": "assets/js/17.6613f3f4.js",
    "revision": "d8d5233898a81377623631c98c20289a"
  },
  {
    "url": "assets/js/18.befda3df.js",
    "revision": "253526e01d3c21ba0f189aa3b96dff59"
  },
  {
    "url": "assets/js/19.6457c02b.js",
    "revision": "da121fd13dcdeafeb9b9620e49e5ed3c"
  },
  {
    "url": "assets/js/2.672d894f.js",
    "revision": "e98fad3061efbdde6c296b69d7056613"
  },
  {
    "url": "assets/js/20.0eec74fe.js",
    "revision": "09087f1475a0c102a4c7c64dc2ecc562"
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
    "url": "assets/js/24.4ce7cbe7.js",
    "revision": "29e007713205d6ab81f109cdefa1166c"
  },
  {
    "url": "assets/js/25.6db3f6c5.js",
    "revision": "ead45cdf6f8aad42bd629ad769399a9b"
  },
  {
    "url": "assets/js/26.55ea9643.js",
    "revision": "7cbcaccd4ab8a800584d95693b32a18c"
  },
  {
    "url": "assets/js/27.bd65ff9d.js",
    "revision": "a9288c3642443a096b381d7e780c183e"
  },
  {
    "url": "assets/js/28.1b79a5d4.js",
    "revision": "0b6468ac91e6edd345d2709ddef5be72"
  },
  {
    "url": "assets/js/29.0734d37e.js",
    "revision": "9dfea956ef9a2018a6373eb927585480"
  },
  {
    "url": "assets/js/3.bff98c43.js",
    "revision": "a573989dd90d5a163c1a25a59f49b408"
  },
  {
    "url": "assets/js/30.5d59f2c4.js",
    "revision": "7f157ff14bd6f31ad482bd943c59f49c"
  },
  {
    "url": "assets/js/31.f621b89e.js",
    "revision": "f5edcbb85b68de6bc05db0e81f4c038d"
  },
  {
    "url": "assets/js/32.f43ed9e7.js",
    "revision": "27a1b8eb483e2533ad7b7c6c18869d02"
  },
  {
    "url": "assets/js/33.88872d4f.js",
    "revision": "65809833b491b1e916ce9adaeb58ffd2"
  },
  {
    "url": "assets/js/34.7a36dfa7.js",
    "revision": "eedf41c74f4ef589b9a0838b9ed9c012"
  },
  {
    "url": "assets/js/35.e5e2e2cd.js",
    "revision": "83f56f5cad4e2e8cb4c0a56fa2668288"
  },
  {
    "url": "assets/js/36.e005067e.js",
    "revision": "e4c01bca755a417ced03252227743d54"
  },
  {
    "url": "assets/js/37.19bb013a.js",
    "revision": "e5e9c208099d5c061efa101eb9617e94"
  },
  {
    "url": "assets/js/38.3697faab.js",
    "revision": "7ac0aefac4f4728701876ddb6ebb3668"
  },
  {
    "url": "assets/js/39.83f9a51b.js",
    "revision": "6d4ee0439fae599daae98187d25b4acb"
  },
  {
    "url": "assets/js/4.21ec8d72.js",
    "revision": "147ba1298c4993d77f5c043a531259ae"
  },
  {
    "url": "assets/js/40.aa39d601.js",
    "revision": "1cac99bf516d6f2c3cfed78545ac5c63"
  },
  {
    "url": "assets/js/41.06d1fdd8.js",
    "revision": "8b5c191757add9a212c4d1a728da238e"
  },
  {
    "url": "assets/js/42.d8fda754.js",
    "revision": "8c8b0c93e090d26046155362dd0e60d8"
  },
  {
    "url": "assets/js/43.fa5ae091.js",
    "revision": "58033d0dc6ceab9115fda45413da67a7"
  },
  {
    "url": "assets/js/44.d34f923c.js",
    "revision": "281e2507dd990ed25fd6c8a6278a4e26"
  },
  {
    "url": "assets/js/45.471f0f75.js",
    "revision": "67335b5559f8195c25b4f9138ae0568a"
  },
  {
    "url": "assets/js/46.2da30ff8.js",
    "revision": "5a26e9b44f8d47b7a86d60fe20d50f50"
  },
  {
    "url": "assets/js/47.2fbaa276.js",
    "revision": "f55dbf62b8e27e5fa115f4247d3381d0"
  },
  {
    "url": "assets/js/48.d2525a0c.js",
    "revision": "d950e56ecaf82cab0fa2f6cb46b2a400"
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
    "url": "assets/js/9.283bba04.js",
    "revision": "de8b5e8b5553a9e7090cd22339730a11"
  },
  {
    "url": "assets/js/app.3076e2e2.js",
    "revision": "ece3cb6f4b9cfe39c41766279614f11d"
  },
  {
    "url": "config/index.html",
    "revision": "6183b8fa46d791991b9c31aa3cde1159"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "8d9ae52bf53e94014f211a769f810cb6"
  },
  {
    "url": "guide/docker.html",
    "revision": "a70ff5cdf85c3d96062db2c637dbc165"
  },
  {
    "url": "guide/git.html",
    "revision": "8147864aeb3e8b7d2e77da6cfeb70f7e"
  },
  {
    "url": "guide/index.html",
    "revision": "ec3f7df2a06d4a470d1bf568b37f666e"
  },
  {
    "url": "guide/ssh.html",
    "revision": "f4b1417720a46ac1a1c745de3afc3a42"
  },
  {
    "url": "herramientas/index.html",
    "revision": "86b30487f06df337427c34828b352d82"
  },
  {
    "url": "herramientas/resources-dw/cdns.html",
    "revision": "6201f7f92d01a88515c390188236bb4e"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "1f9d2b33329d5c4d7c947b3c4c000d6b"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "0261856c9c89534a69bfd0e129ebf7fc"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "25a374edde636f2f55d011cac7401da9"
  },
  {
    "url": "img/android/screen1.jpg",
    "revision": "7683c5a90ecddf41645e18ef9d1255ef"
  },
  {
    "url": "img/bttns/lks.png",
    "revision": "c5705970cad1e1d16b221945e3a7fa8e"
  },
  {
    "url": "img/bttns/wa-float.png",
    "revision": "3fcea751528d74a8ad9663020bdde945"
  },
  {
    "url": "img/cards/icon-card-title-desc.gif",
    "revision": "2ea4476a4a7343485d649f7a978378ee"
  },
  {
    "url": "img/cards/quotes.png",
    "revision": "1de202447320753f5e4a363325d71617"
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
    "revision": "9ec348f9adc3034df2482789da7335fd"
  },
  {
    "url": "librerias/animaciones.html",
    "revision": "dec030a8687e39d39c29ae7a3a371864"
  },
  {
    "url": "librerias/index.html",
    "revision": "3afb85fbbdc6b6f1b284a095890a2d62"
  },
  {
    "url": "plugins/index.html",
    "revision": "7817e9b5dc6ce6ebde714151bb505ff7"
  },
  {
    "url": "templates/cards/icon-card-t-description.html",
    "revision": "d977d771a0ddafa6699e60e3e1c81d1a"
  },
  {
    "url": "templates/cards/quote-picture-description.html",
    "revision": "55f420f68621d26aa7d9f7f80b6836f4"
  },
  {
    "url": "templates/components/buttons-links.html",
    "revision": "73d492f03527ffc0e46b840b7e5ff9a9"
  },
  {
    "url": "templates/decoratives/decoratives-lines.html",
    "revision": "086771686cfe3891b9abc6f5910b5c7a"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "944f090c50e1cf04614da798113be1e4"
  },
  {
    "url": "templates/index.html",
    "revision": "3d5bd27ab985993ca2c125725862f944"
  },
  {
    "url": "templates/navbars/navbar.html",
    "revision": "5fba57eb1dc3d2d3eb32e873c670c96f"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "6be1d74a4e45592223f7f4bf8325eefb"
  },
  {
    "url": "templates/sliders/fullScreen.html",
    "revision": "3f89763695a8d9814c86631442976d45"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "e4293ef6595ef39605120bbcbc122567"
  },
  {
    "url": "tutorials/index.html",
    "revision": "fb2d3a0da40c10d1b7914d69fd12fe80"
  },
  {
    "url": "tutorials/linux/arch-linux.html",
    "revision": "cd5d08b8380f4dc72a45702d43854aa0"
  },
  {
    "url": "tutorials/linux/fedora/fedora-basics.html",
    "revision": "90c3e870d7b2d2685726c91b390c733f"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "53f60d0e92f2d552a5dd1575abda6173"
  },
  {
    "url": "tutorials/linux/image-convert.html",
    "revision": "c3e342a781afa418d7413c51453c661e"
  },
  {
    "url": "tutorials/linux/img-compress.html",
    "revision": "2e2cba113091b50def98f5d121793279"
  },
  {
    "url": "tutorials/linux/rar-compress.html",
    "revision": "42df04959400c808e9b23b7321300013"
  },
  {
    "url": "tutorials/linux/spotify-adblock.html",
    "revision": "fcaefad35157e8e8bb4087c5a9eb00c1"
  },
  {
    "url": "wordpress/basic-theme/basic-theme.html",
    "revision": "a1766b6268f7691c9deb4a4e3849bad0"
  },
  {
    "url": "wordpress/basic-theme/estilos.html",
    "revision": "0a86c762f4a94bacf272f3febef437d2"
  },
  {
    "url": "wordpress/basic-theme/functions.html",
    "revision": "b7f4eaabbd188fc1a4d78aa53572a95f"
  },
  {
    "url": "wordpress/basicos.html",
    "revision": "c72babeff30aac2b0a0d7b15449392c8"
  },
  {
    "url": "wordpress/index.html",
    "revision": "1730f015b80488242020feb35ab10168"
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
