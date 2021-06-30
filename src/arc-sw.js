!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 100));
})({
  100: function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(2);
    if ('undefined' != typeof ServiceWorkerGlobalScope) {
      var o = 'https://arc.io' + n.k;
      importScripts(o);
    } else if ('undefined' != typeof SharedWorkerGlobalScope) {
      var c = 'https://arc.io' + n.i;
      importScripts(c);
    } else if ('undefined' != typeof DedicatedWorkerGlobalScope) {
      var i = 'https://arc.io' + n.b;
      importScripts(i);
    }
  },
  2: function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return n;
    }),
      r.d(e, 'f', function () {
        return c;
      }),
      r.d(e, 'j', function () {
        return i;
      }),
      r.d(e, 'i', function () {
        return a;
      }),
      r.d(e, 'b', function () {
        return d;
      }),
      r.d(e, 'k', function () {
        return f;
      }),
      r.d(e, 'c', function () {
        return u;
      }),
      r.d(e, 'd', function () {
        return s;
      }),
      r.d(e, 'e', function () {
        return l;
      }),
      r.d(e, 'h', function () {
        return m;
      }),
      r.d(e, 'g', function () {
        return v;
      });
    var n = {
        images: [
          'bmp',
          'jpeg',
          'jpg',
          'ttf',
          'pict',
          'svg',
          'webp',
          'eps',
          'svgz',
          'gif',
          'png',
          'ico',
          'tif',
          'tiff',
          'bpg',
          'avif',
          'jxl'
        ],
        video: [
          'mp4',
          '3gp',
          'webm',
          'mkv',
          'flv',
          'f4v',
          'f4p',
          'f4bogv',
          'drc',
          'avi',
          'mov',
          'qt',
          'wmv',
          'amv',
          'mpg',
          'mp2',
          'mpeg',
          'mpe',
          'm2v',
          'm4v',
          '3g2',
          'gifv',
          'mpv',
          'av1'
        ],
        audio: [
          'mid',
          'midi',
          'aac',
          'aiff',
          'flac',
          'm4a',
          'm4p',
          'mp3',
          'ogg',
          'oga',
          'mogg',
          'opus',
          'ra',
          'rm',
          'wav',
          'webm',
          'f4a',
          'pat'
        ],
        interchange: [
          'json',
          'yaml',
          'xml',
          'csv',
          'toml',
          'ini',
          'bson',
          'asn1',
          'ubj'
        ],
        archives: [
          'jar',
          'iso',
          'tar',
          'tgz',
          'tbz2',
          'tlz',
          'gz',
          'bz2',
          'xz',
          'lz',
          'z',
          '7z',
          'apk',
          'dmg',
          'rar',
          'lzma',
          'txz',
          'zip',
          'zipx'
        ],
        documents: [
          'pdf',
          'ps',
          'doc',
          'docx',
          'ppt',
          'pptx',
          'xls',
          'otf',
          'xlsx'
        ],
        other: ['srt', 'swf']
      },
      o = 'arc:',
      c = {
        COMLINK_INIT: ''.concat(o, 'comlink:init'),
        NODE_ID: ''.concat(o, ':nodeId'),
        CDN_CONFIG: ''.concat(o, 'cdn:config'),
        P2P_CLIENT_READY: ''.concat(o, 'cdn:ready'),
        STORED_FIDS: ''.concat(o, 'cdn:storedFids'),
        SW_HEALTH_CHECK: ''.concat(o, 'cdn:healthCheck'),
        WIDGET_CONFIG: ''.concat(o, 'widget:config'),
        WIDGET_INIT: ''.concat(o, 'widget:init'),
        WIDGET_UI_LOAD: ''.concat(o, 'widget:load'),
        BROKER_LOAD: ''.concat(o, 'broker:load'),
        RENDER_FILE: ''.concat(o, 'inlay:renderFile'),
        FILE_RENDERED: ''.concat(o, 'inlay:fileRendered')
      },
      i = 'serviceWorker',
      a = '/'.concat('shared-worker', '.js'),
      d = '/'.concat('dedicated-worker', '.js'),
      f = '/'.concat('arc-sw-core', '.js'),
      p = ''.concat('arc-sw', '.js'),
      u = ('/'.concat(p), '/'.concat('arc-sw'), 'arc-db'),
      s = 'key-val-store',
      l = 2 ** 17,
      m = ''.concat('https://overmind.arc.io', '/api/propertySession'),
      v = ''.concat('https://warden.arc.io', '/mailbox/propertySession');
  }
});
