/* eslint-disable */
!(function (a, b) {
  function c () {
    let b = f.getBoundingClientRect().width
    b / i > 540 && (b = 540 * i)
    const c = b / 10;
    (f.style.fontSize = `${c}px`), (k.rem = a.rem = c)
  }
  let d
  const e = a.document
  var f = e.documentElement
  let g = e.querySelector('meta[name="viewport"]')
  const h = e.querySelector('meta[name="flexible"]')
  var i = 0
  let j = 0
  var k = b.flexible || (b.flexible = {})
  if (g) {
    console.warn('将根据已有的meta标签来设置缩放比例')
    const l = g.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
    l && ((j = parseFloat(l[1])), (i = parseInt(1 / j)))
  } else if (h) {
    const m = h.getAttribute('content')
    if (m) {
      const n = m.match(/initial\-dpr=([\d\.]+)/)
      const o = m.match(/maximum\-dpr=([\d\.]+)/)
      n && ((i = parseFloat(n[1])), (j = parseFloat((1 / i).toFixed(2)))),
      o && ((i = parseFloat(o[1])), (j = parseFloat((1 / i).toFixed(2))))
    }
  }
  if (!i && !j) {
    const p = (a.navigator.appVersion.match(/android/gi),
    a.navigator.appVersion.match(/iphone/gi))
    const q = a.devicePixelRatio;
    (i = p
      ? q >= 3 && (!i || i >= 3)
        ? 3
        : q >= 2 && (!i || i >= 2)
          ? 2
          : 1
      : 1),
    (j = 1 / i)
  }
  if ((f.setAttribute('data-dpr', i), !g)) {
    if (
      ((g = e.createElement('meta')),
      g.setAttribute('name', 'viewport'),
      g.setAttribute(
        'content',
        `initial-scale=${
          j
        }, maximum-scale=${
          j
        }, minimum-scale=${
          j
        }, user-scalable=no`,
      ),
      f.firstElementChild)
    ) f.firstElementChild.appendChild(g)
    else {
      const r = e.createElement('div')
      r.appendChild(g), e.write(r.innerHTML)
    }
  }
  a.addEventListener(
    'resize',
    () => {
      clearTimeout(d), (d = setTimeout(c, 300))
    },
    !1,
  ),
  a.addEventListener(
    'pageshow',
    (a) => {
      a.persisted && (clearTimeout(d), (d = setTimeout(c, 300)))
    },
    !1,
  ),
  e.readyState === 'complete'
    ? (e.body.style.fontSize = `${12 * i}px`)
    : e.addEventListener(
      'DOMContentLoaded',
      () => {
        e.body.style.fontSize = `${12 * i}px`
      },
      !1,
    ),
  c(),
  (k.dpr = a.dpr = i),
  (k.refreshRem = c),
  (k.rem2px = function (a) {
    let b = parseFloat(a) * this.rem
    return typeof a === 'string' && a.match(/rem$/) && (b += 'px'), b
  }),
  (k.px2rem = function (a) {
    let b = parseFloat(a) / this.rem
    return typeof a === 'string' && a.match(/px$/) && (b += 'rem'), b
  })
}(window, window.lib || (window.lib = {})))
