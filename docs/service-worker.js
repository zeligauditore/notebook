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
    "revision": "9ff466652a13355c16392d6156a78aec"
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
    "url": "assets/js/11.8bfa4572.js",
    "revision": "9dc82f2eab20d3659d1673b40a7acecb"
  },
  {
    "url": "assets/js/12.e95e9f96.js",
    "revision": "0ec39d8505f587154c3de8d347212b3a"
  },
  {
    "url": "assets/js/13.2f414177.js",
    "revision": "50ba58b78f93e41d28e208ab8048d842"
  },
  {
    "url": "assets/js/14.a61e4f36.js",
    "revision": "eda8b3286d0e7b60ec5055e7a67e76a7"
  },
  {
    "url": "assets/js/15.e4959b0a.js",
    "revision": "a42299c9b639c4b0df9a54f70acd7cea"
  },
  {
    "url": "assets/js/16.b0f6dc21.js",
    "revision": "3f644a8ab37896c21125586de3048857"
  },
  {
    "url": "assets/js/17.db88fbc6.js",
    "revision": "6db3636a17123e46728d4df4bae33848"
  },
  {
    "url": "assets/js/18.ae84e764.js",
    "revision": "4aa98e218b571e6849b07d3aa8b002b7"
  },
  {
    "url": "assets/js/19.25178a02.js",
    "revision": "ce517ee3dd2e829083c4130a4207e07f"
  },
  {
    "url": "assets/js/20.b097fcdd.js",
    "revision": "3e24245e19a603f50d9b01152aba1f8f"
  },
  {
    "url": "assets/js/21.3c2b09a6.js",
    "revision": "37299bac4a9c33c4cdf914a9e6f1957a"
  },
  {
    "url": "assets/js/22.c151262e.js",
    "revision": "3db503f83fadbb772a918ecb60c4b588"
  },
  {
    "url": "assets/js/23.c45e22f8.js",
    "revision": "4552d87984315408d4b1b4e68e6154a2"
  },
  {
    "url": "assets/js/24.fce5934a.js",
    "revision": "3843d7d19e32938d16abccd032ee5a20"
  },
  {
    "url": "assets/js/25.206c0831.js",
    "revision": "f7063c46b818f266c8648bb50ee4052a"
  },
  {
    "url": "assets/js/26.5ce3dd0f.js",
    "revision": "aaa01d46c61abf7d1aba0587173add0e"
  },
  {
    "url": "assets/js/27.7cade54c.js",
    "revision": "8de338c5740d1403461d8b0fb464f156"
  },
  {
    "url": "assets/js/28.d6b7cf0b.js",
    "revision": "cbaea4f935ef03885b196c2bb230f4a0"
  },
  {
    "url": "assets/js/29.9f8277fd.js",
    "revision": "9d98ee25fde251277db4503d124210e7"
  },
  {
    "url": "assets/js/3.f644f102.js",
    "revision": "1256bce6f28d1eeb80809169e527516c"
  },
  {
    "url": "assets/js/30.73aac120.js",
    "revision": "c4a0454020ab1b192cd4af18e1f128e7"
  },
  {
    "url": "assets/js/31.99ae4bfd.js",
    "revision": "ebe472fd6ce97364e7b3474beadf6423"
  },
  {
    "url": "assets/js/32.cf6408d4.js",
    "revision": "ee212c5f538718a30ae64a077907ea90"
  },
  {
    "url": "assets/js/33.81048a81.js",
    "revision": "cc8ea2264a701f89dd7597ff42953fc4"
  },
  {
    "url": "assets/js/34.795e900f.js",
    "revision": "afc21196d8e246df417ef455a52f2a2b"
  },
  {
    "url": "assets/js/35.bae55592.js",
    "revision": "e97c6a926734bdd1f9f93e2db261d5da"
  },
  {
    "url": "assets/js/36.f759615c.js",
    "revision": "c4104248db220f988e37f561c09c132d"
  },
  {
    "url": "assets/js/37.66d08bad.js",
    "revision": "8334e27d36bdf746a13ac9c6b57696ee"
  },
  {
    "url": "assets/js/38.e55e0d2c.js",
    "revision": "9e58870c0b2630f8c94f22d5e9e16297"
  },
  {
    "url": "assets/js/39.17a53110.js",
    "revision": "2470e1d5e85bfcac61ec888dc60d9b4c"
  },
  {
    "url": "assets/js/4.51e94e20.js",
    "revision": "3810f3bf6d76f6e8b6e81a27ed3a5a4b"
  },
  {
    "url": "assets/js/40.7d05d5b0.js",
    "revision": "cd5999720619883081c22e92a5d991f3"
  },
  {
    "url": "assets/js/41.873ba8bb.js",
    "revision": "ee8d838f3f2d6a6938f2d0f786b2aeed"
  },
  {
    "url": "assets/js/42.dbe3b903.js",
    "revision": "7cbec084f9a7609b8719e7b0763354c4"
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
    "url": "assets/js/9.b69d98ee.js",
    "revision": "d47a78b262bf4445745120bfe7ec5703"
  },
  {
    "url": "assets/js/app.70fbd83b.js",
    "revision": "3094a6fa21b1382c9245d3886d9d1373"
  },
  {
    "url": "config/index.html",
    "revision": "51251f9bd233c57fdb6adc5ffb50ab19"
  },
  {
    "url": "guide/css/flexbox.html",
    "revision": "f3ac659a95a98571ae8254c27c210f48"
  },
  {
    "url": "guide/docker.html",
    "revision": "94fe16612781d6d5452c4153a5884ab7"
  },
  {
    "url": "guide/git.html",
    "revision": "3e9041edfe21e7a543faa9986d619895"
  },
  {
    "url": "guide/index.html",
    "revision": "ae786f979ec2370170fe638c8124a3d8"
  },
  {
    "url": "guide/ssh.html",
    "revision": "6154c571a031064757f4c77fe6ec6401"
  },
  {
    "url": "herramientas/index.html",
    "revision": "eacf12568ca79e0cae2a37745d4854b2"
  },
  {
    "url": "herramientas/resources-dw/cdns.html",
    "revision": "b2d76e5565d3465be6e7cc0a97419380"
  },
  {
    "url": "herramientas/resources-dw/generadores.html",
    "revision": "961a2db4d87beb31455d056d7eba361f"
  },
  {
    "url": "herramientas/resources-dw/images-icons.html",
    "revision": "7c1ef44779ed3582df96f1338f4f4dd0"
  },
  {
    "url": "herramientas/web-tools.html",
    "revision": "b1686934715b3224392dabb401a728f9"
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
    "revision": "6343f97760db3fca9563297ea6afb41e"
  },
  {
    "url": "librerias/animaciones.html",
    "revision": "957180341bca6ca86901e25fd131be51"
  },
  {
    "url": "librerias/index.html",
    "revision": "49dbb1e8c9e217c5f6e504bc145a1318"
  },
  {
    "url": "plugins/index.html",
    "revision": "f3c1bb4e5ac283e060cd4305fc0ab925"
  },
  {
    "url": "templates/components/buttons.html",
    "revision": "67707af2e81774c6bce4e0555d875142"
  },
  {
    "url": "templates/functions/waByDate.html",
    "revision": "7afcf8fa14a8de528895de0b8e59b08b"
  },
  {
    "url": "templates/index.html",
    "revision": "aa77adb7cd79c834965a5700da4885d4"
  },
  {
    "url": "templates/navbars/navbar.html",
    "revision": "914f70a85ca1fc112455517a97a41359"
  },
  {
    "url": "templates/navbars/navType1.html",
    "revision": "e61f48c0ab87312317126553fc07c593"
  },
  {
    "url": "templates/sliders/fullScreen.html",
    "revision": "1ee3682ec0b01873ad1c2d93b8303f1c"
  },
  {
    "url": "tutorials/android/android.html",
    "revision": "e0263e20542e2136c213622dc81fc409"
  },
  {
    "url": "tutorials/index.html",
    "revision": "a7c4aac786eccacfb53dfd9a5499421b"
  },
  {
    "url": "tutorials/linux/arch-linux.html",
    "revision": "ba1ff86c588032e2cd4a617bbf1f0df3"
  },
  {
    "url": "tutorials/linux/general.html",
    "revision": "e6fef554dfb7f42cda42f63647b62ad9"
  },
  {
    "url": "tutorials/linux/spotify-adblock.html",
    "revision": "9e669a7d2f82ceec69819c7c38dd4870"
  },
  {
    "url": "wordpress/basic-theme/basic-theme.html",
    "revision": "53ad0d2f0949594d0100fd8513534854"
  },
  {
    "url": "wordpress/basic-theme/estilos.html",
    "revision": "cc0486e1a8af285127c45958b87959f1"
  },
  {
    "url": "wordpress/basic-theme/functions.html",
    "revision": "3aaeab7aa665c05346934e31fc2296b8"
  },
  {
    "url": "wordpress/basicos.html",
    "revision": "eccdc85f7f4d9f925f4413f15003b79e"
  },
  {
    "url": "wordpress/index.html",
    "revision": "773e2d16a291b126d8410a55a64c5b22"
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
