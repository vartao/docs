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
    "revision": "d7b1c940234fd63726e01d825fc19000"
  },
  {
    "url": "assets/css/0.styles.b6e39671.css",
    "revision": "4b7362a00d1eeef2cee3de3d699ab5d9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.55cafae7.js",
    "revision": "73966a34ee5b8e99c1f5c21e90c68434"
  },
  {
    "url": "assets/js/11.6fe066ad.js",
    "revision": "c2afb2a64f4e5749021ef8c9a3b4b0b0"
  },
  {
    "url": "assets/js/12.fa9c93f8.js",
    "revision": "5c470b97dc50f79217d5e03a2e0cca63"
  },
  {
    "url": "assets/js/13.70729762.js",
    "revision": "acdf424e1fa4d6e2529ca653fb91b3ef"
  },
  {
    "url": "assets/js/14.e3a2d5d8.js",
    "revision": "5fb2c15cfcef67f447e8bbdfd0b9c855"
  },
  {
    "url": "assets/js/15.4e863f4f.js",
    "revision": "3c4134f67c3fbd7c72ed2051d46498ad"
  },
  {
    "url": "assets/js/16.c3b0fd5c.js",
    "revision": "86bf5319605680328a38c9bd3be86f37"
  },
  {
    "url": "assets/js/17.85f4368d.js",
    "revision": "dd1cfc7ffffa9cf095828b21bb4526b9"
  },
  {
    "url": "assets/js/2.04e12782.js",
    "revision": "164369a9f6ce165387ea86daf1f5b32a"
  },
  {
    "url": "assets/js/3.1131c6a5.js",
    "revision": "d64d0c7546a55cf541a7ba11c099c7d0"
  },
  {
    "url": "assets/js/4.346c9619.js",
    "revision": "ede53bd1ede41a91ed356004c14141c6"
  },
  {
    "url": "assets/js/5.59f41238.js",
    "revision": "9daa78e3459a4816d999b24eda00fb50"
  },
  {
    "url": "assets/js/6.0396de88.js",
    "revision": "7254170b6f0a6996822b349c61b0115c"
  },
  {
    "url": "assets/js/7.dd8a9fb0.js",
    "revision": "e1e9f8d4b6cfd1962c4858b944629f48"
  },
  {
    "url": "assets/js/8.35464063.js",
    "revision": "f369ff75218ca8e726c7852d8d29b8ba"
  },
  {
    "url": "assets/js/9.51ad4d58.js",
    "revision": "925c93ec0d60e05e0f8a4ca1876c3b33"
  },
  {
    "url": "assets/js/app.67562146.js",
    "revision": "1a360f4c86167e60ae6663d2da15e113"
  },
  {
    "url": "blog/backend/index.html",
    "revision": "c52c3eede0aab07492a7d32f7d4a01fb"
  },
  {
    "url": "blog/backend/java.html",
    "revision": "e8e31812d2d6015f958383ad1ad1d94a"
  },
  {
    "url": "blog/basic/index.html",
    "revision": "ab05b9c1132af344efbc89b7c6fdfb5e"
  },
  {
    "url": "blog/basic/network/index.html",
    "revision": "966db297dc4eb9d5b12faa8071998e01"
  },
  {
    "url": "blog/fontend/html.html",
    "revision": "a6dc5c6322eeeb3edd8752585070f5c5"
  },
  {
    "url": "blog/fontend/index.html",
    "revision": "3ee0e9c4572a3986c9daae5c67d50f04"
  },
  {
    "url": "blog/fontend/javascript.html",
    "revision": "cd732f22de5307e61e0da7bf784a2618"
  },
  {
    "url": "icon.png",
    "revision": "7572c364aff350812beb96c7791f83b5"
  },
  {
    "url": "index.html",
    "revision": "78f3ab0c04bf8ee7276b3a431ea6c8bd"
  },
  {
    "url": "logo.jpg",
    "revision": "74ad8dd974187decbb84b12b97b25115"
  },
  {
    "url": "my/my.html",
    "revision": "28b70b0b2fff2231de087641664476a5"
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
