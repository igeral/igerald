!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("uikit", e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).UIkit =
        e());
})(this, function () {
  "use strict";
  var t = (dr = Object.prototype).hasOwnProperty;
  function e(e, i) {
    return t.call(e, i);
  }
  var i = /\B([A-Z])/g,
    n = it(function (t) {
      return t.replace(i, "-$1").toLowerCase();
    }),
    r = /-(\w)/g,
    o = it(function (t) {
      return t.replace(r, a);
    }),
    s = it(function (t) {
      return t.length ? a(0, t.charAt(0)) + t.slice(1) : "";
    });
  function a(t, e) {
    return e ? e.toUpperCase() : "";
  }
  var l =
    (ur = String.prototype).startsWith ||
    function (t) {
      return 0 === this.lastIndexOf(t, 0);
    };
  function c(t, e) {
    return l.call(t, e);
  }
  var h =
    ur.endsWith ||
    function (t) {
      return this.substr(-t.length) === t;
    };
  function u(t, e) {
    return h.call(t, e);
  }
  var d = Array.prototype,
    f = function (t, e) {
      return !!~this.indexOf(t, e);
    },
    p = ur.includes || f,
    g = d.includes || f;
  function v(t, e) {
    return t && (E(t) ? p : g).call(t, e);
  }
  var m =
    d.findIndex ||
    function (t) {
      for (var e = arguments, i = 0; i < this.length; i++)
        if (t.call(e[1], this[i], i, this)) return i;
      return -1;
    };
  function w(t, e) {
    return m.call(t, e);
  }
  var y = Array.isArray;
  function x(t) {
    return "function" == typeof t;
  }
  function b(t) {
    return null !== t && "object" == typeof t;
  }
  var k = dr.toString;
  function C(t) {
    return "[object Object]" === k.call(t);
  }
  function _(t) {
    return b(t) && t === t.window;
  }
  function D(t) {
    return 9 === S(t);
  }
  function T(t) {
    return 1 <= S(t);
  }
  function L(t) {
    return 1 === S(t);
  }
  function S(t) {
    return !_(t) && b(t) && t.nodeType;
  }
  function M(t) {
    return "boolean" == typeof t;
  }
  function E(t) {
    return "string" == typeof t;
  }
  function A(t) {
    return "number" == typeof t;
  }
  function I(t) {
    return A(t) || (E(t) && !isNaN(t - parseFloat(t)));
  }
  function $(t) {
    return !(y(t) ? t.length : b(t) && Object.keys(t).length);
  }
  function B(t) {
    return void 0 === t;
  }
  function N(t) {
    return M(t)
      ? t
      : "true" === t ||
          "1" === t ||
          "" === t ||
          ("false" !== t && "0" !== t && t);
  }
  function O(t) {
    return (t = Number(t)), !isNaN(t) && t;
  }
  function j(t) {
    return parseFloat(t) || 0;
  }
  var H =
    Array.from ||
    function (t) {
      return d.slice.call(t);
    };
  function P(t) {
    return z(t)[0];
  }
  function z(t) {
    return (t && (T(t) ? [t] : H(t).filter(T))) || [];
  }
  function W(t) {
    return _(t)
      ? t
      : (t = P(t))
      ? (D(t) ? t : t.ownerDocument).defaultView
      : window;
  }
  function F(t) {
    return t ? (u(t, "ms") ? j(t) : 1e3 * j(t)) : 0;
  }
  function R(t, e) {
    return (
      t === e ||
      (b(t) &&
        b(e) &&
        Object.keys(t).length === Object.keys(e).length &&
        K(t, function (t, i) {
          return t === e[i];
        }))
    );
  }
  function q(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "g"), function (t) {
      return t === e ? i : e;
    });
  }
  var Y =
    Object.assign ||
    function (t) {
      for (var i = [], n = arguments.length - 1; 0 < n--; )
        i[n] = arguments[n + 1];
      t = Object(t);
      for (var r = 0; r < i.length; r++) {
        var o = i[r];
        if (null !== o) for (var s in o) e(o, s) && (t[s] = o[s]);
      }
      return t;
    };
  function V(t) {
    return t[t.length - 1];
  }
  function K(t, e) {
    for (var i in t) if (!1 === e(t[i], i)) return !1;
    return !0;
  }
  function U(t, e) {
    return t.slice().sort(function (t, i) {
      return (
        void 0 === (t = t[e]) && (t = 0),
        void 0 === (i = i[e]) && (i = 0),
        i < t ? 1 : t < i ? -1 : 0
      );
    });
  }
  function X(t, e) {
    var i = new Set();
    return t.filter(function (t) {
      return (t = t[e]), !i.has(t) && (i.add(t) || !0);
    });
  }
  function Z(t, e, i) {
    return (
      void 0 === e && (e = 0),
      void 0 === i && (i = 1),
      Math.min(Math.max(O(t) || 0, e), i)
    );
  }
  function G() {}
  function J() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    return [
      ["bottom", "top"],
      ["right", "left"],
    ].every(function (e) {
      var i = e[0],
        n = e[1];
      return (
        0 <
        Math.min.apply(
          Math,
          t.map(function (t) {
            return t[i];
          })
        ) -
          Math.max.apply(
            Math,
            t.map(function (t) {
              return t[n];
            })
          )
      );
    });
  }
  function Q(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  var tt = {
    ratio: function (t, e, i) {
      var n = "width" === e ? "height" : "width",
        r = {};
      return (
        (r[n] = t[e] ? Math.round((i * t[n]) / t[e]) : t[n]), (r[e] = i), r
      );
    },
    contain: function (t, e) {
      var i = this;
      return (
        K((t = Y({}, t)), function (n, r) {
          return (t = t[r] > e[r] ? i.ratio(t, r, e[r]) : t);
        }),
        t
      );
    },
    cover: function (t, e) {
      var i = this;
      return (
        K((t = this.contain(t, e)), function (n, r) {
          return (t = t[r] < e[r] ? i.ratio(t, r, e[r]) : t);
        }),
        t
      );
    },
  };
  function et(t, e, i, n) {
    void 0 === i && (i = 0), void 0 === n && (n = !1);
    var r = (e = z(e)).length;
    return (
      (t = I(t)
        ? O(t)
        : "next" === t
        ? i + 1
        : "previous" === t
        ? i - 1
        : e.indexOf(P(t))),
      n ? Z(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    );
  }
  function it(t) {
    var e = Object.create(null);
    return function (i) {
      return e[i] || (e[i] = t(i));
    };
  }
  function nt(t, e, i) {
    if (b(e)) for (var n in e) nt(t, n, e[n]);
    else {
      if (B(i)) return (t = P(t)) && t.getAttribute(e);
      z(t).forEach(function (t) {
        x(i) && (i = i.call(t, nt(t, e))),
          null === i ? ot(t, e) : t.setAttribute(e, i);
      });
    }
  }
  function rt(t, e) {
    return z(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }
  function ot(t, e) {
    (t = z(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.hasAttribute(e) && t.removeAttribute(e);
        });
      });
  }
  function st(t, e) {
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
      if (rt(t, n[i])) return nt(t, n[i]);
  }
  var at = "undefined" != typeof window,
    lt = at && /msie|trident/i.test(window.navigator.userAgent),
    ct = at && "rtl" === nt(document.documentElement, "dir"),
    ht = at && "ontouchstart" in window,
    ut = at && window.PointerEvent,
    dt =
      at &&
      (ht ||
        (window.DocumentTouch && document instanceof DocumentTouch) ||
        navigator.maxTouchPoints),
    ft = ut ? "pointerdown" : ht ? "touchstart" : "mousedown",
    pt = ut ? "pointermove" : ht ? "touchmove" : "mousemove",
    gt = ut ? "pointerup" : ht ? "touchend" : "mouseup",
    vt = ut ? "pointerenter" : ht ? "" : "mouseenter",
    mt = ut ? "pointerleave" : ht ? "" : "mouseleave",
    wt = ut ? "pointercancel" : "touchcancel",
    yt = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      menuitem: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };
  function xt(t) {
    return z(t).some(function (t) {
      return yt[t.tagName.toLowerCase()];
    });
  }
  function bt(t) {
    return z(t).some(function (t) {
      return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
    });
  }
  var kt = "input,select,textarea,button";
  function Ct(t) {
    return z(t).some(function (t) {
      return Lt(t, kt);
    });
  }
  function _t(t) {
    return (t = P(t)) && L(t.parentNode) && t.parentNode;
  }
  function Dt(t, e) {
    return z(t).filter(function (t) {
      return Lt(t, e);
    });
  }
  var Tt =
    (pr = at ? Element.prototype : {}).matches ||
    pr.webkitMatchesSelector ||
    pr.msMatchesSelector ||
    G;
  function Lt(t, e) {
    return z(t).some(function (t) {
      return Tt.call(t, e);
    });
  }
  var St =
    pr.closest ||
    function (t) {
      var e = this;
      do {
        if (Lt(e, t)) return e;
      } while ((e = _t(e)));
    };
  function Mt(t, e) {
    return (
      c(e, ">") && (e = e.slice(1)),
      L(t)
        ? St.call(t, e)
        : z(t)
            .map(function (t) {
              return Mt(t, e);
            })
            .filter(Boolean)
    );
  }
  function Et(t, e) {
    return E(e)
      ? Lt(t, e) || !!Mt(t, e)
      : t === e || (D(e) ? e.documentElement : P(e)).contains(P(t));
  }
  function At(t, e) {
    for (var i = []; (t = _t(t)); ) (e && !Lt(t, e)) || i.push(t);
    return i;
  }
  function It(t, e) {
    return (t = (t = P(t)) ? z(t.children) : []), e ? Dt(t, e) : t;
  }
  function $t(t, e) {
    return e ? z(t).indexOf(P(e)) : It(_t(t)).indexOf(t);
  }
  function Bt(t, e) {
    return P(t) || jt(t, Ot(t, e));
  }
  function Nt(t, e) {
    var i = z(t);
    return (i.length && i) || Ht(t, Ot(t, e));
  }
  function Ot(t, e) {
    return (
      void 0 === e && (e = document),
      (E(t) && Ft(t)) || D(e) ? e : e.ownerDocument
    );
  }
  function jt(t, e) {
    return P(Pt(t, e, "querySelector"));
  }
  function Ht(t, e) {
    return z(Pt(t, e, "querySelectorAll"));
  }
  function Pt(t, e, i) {
    if ((void 0 === e && (e = document), !t || !E(t))) return null;
    (t = t.replace(Wt, "$1 *")),
      Ft(t) &&
        ((t = qt(t)
          .map(function (t, i) {
            var n,
              r,
              o = e;
            return (
              "!" === t[0] &&
                ((r = t.substr(1).trim().split(" ")),
                (o = Mt(_t(e), r[0])),
                (t = r.slice(1).join(" ").trim())),
              "-" === t[0] &&
                ((n = t.substr(1).trim().split(" ")),
                (o = Lt((r = (o || e).previousElementSibling), t.substr(1))
                  ? r
                  : null),
                (t = n.slice(1).join(" "))),
              o
                ? (function (t) {
                    for (var e = []; t.parentNode; ) {
                      if (t.id) {
                        e.unshift("#" + Vt(t.id));
                        break;
                      }
                      var i = t.tagName;
                      "HTML" !== i && (i += ":nth-child(" + ($t(t) + 1) + ")"),
                        e.unshift(i),
                        (t = t.parentNode);
                    }
                    return e.join(" > ");
                  })(o) +
                  " " +
                  t
                : null
            );
          })
          .filter(Boolean)
          .join(",")),
        (e = document));
    try {
      return e[i](t);
    } catch (t) {
      return null;
    }
  }
  var zt = /(^|[^\\],)\s*[!>+~-]/,
    Wt = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
    Ft = it(function (t) {
      return t.match(zt);
    }),
    Rt = /.*?[^\\](?:,|$)/g,
    qt = it(function (t) {
      return t.match(Rt).map(function (t) {
        return t.replace(/,$/, "").trim();
      });
    }),
    Yt =
      (at && window.CSS && CSS.escape) ||
      function (t) {
        return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
          return "\\" + t;
        });
      };
  function Vt(t) {
    return E(t) ? Yt.call(null, t) : "";
  }
  function Kt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i,
      n,
      r = Jt(t),
      o = r[0],
      s = r[1],
      a = r[2],
      l = r[3],
      c = r[4];
    o = ie(o);
    return (
      1 < l.length &&
        ((i = l),
        (l = function (t) {
          return y(t.detail) ? i.apply(void 0, [t].concat(t.detail)) : i(t);
        })),
      c &&
        c.self &&
        ((n = l),
        (l = function (t) {
          if (t.target === t.currentTarget || t.target === t.current)
            return n.call(null, t);
        })),
      a &&
        (l = (function (t, e) {
          var i = this;
          return function (n) {
            var r =
              ">" === t[0]
                ? Ht(t, n.currentTarget)
                    .reverse()
                    .filter(function (t) {
                      return Et(n.target, t);
                    })[0]
                : Mt(n.target, t);
            r && ((n.current = r), e.call(i, n));
          };
        })(a, l)),
      (c = Qt(c)),
      s.split(" ").forEach(function (t) {
        return o.forEach(function (e) {
          return e.addEventListener(t, l, c);
        });
      }),
      function () {
        return Ut(o, s, l, c);
      }
    );
  }
  function Ut(t, e, i, n) {
    void 0 === n && (n = !1),
      (n = Qt(n)),
      (t = ie(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.removeEventListener(e, i, n);
        });
      });
  }
  function Xt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i = Jt(t),
      n = i[0],
      r = i[1],
      o = i[2],
      s = i[3],
      a = i[4],
      l = i[5],
      c = Kt(
        n,
        r,
        o,
        function (t) {
          var e = !l || l(t);
          e && (c(), s(t, e));
        },
        a
      );
    return c;
  }
  function Zt(t, e, i) {
    return ie(t).reduce(function (t, n) {
      return t && n.dispatchEvent(Gt(e, !0, !0, i));
    }, !0);
  }
  function Gt(t, e, i, n) {
    var r;
    return (
      void 0 === e && (e = !0),
      void 0 === i && (i = !1),
      E(t) &&
        ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n),
        (t = r)),
      t
    );
  }
  function Jt(t) {
    return x(t[2]) && t.splice(2, 0, !1), t;
  }
  function Qt(t) {
    return t && lt && !M(t) ? !!t.capture : t;
  }
  function te(t) {
    return t && "addEventListener" in t;
  }
  function ee(t) {
    return te(t) ? t : P(t);
  }
  function ie(t) {
    return y(t) ? t.map(ee).filter(Boolean) : E(t) ? Ht(t) : te(t) ? [t] : z(t);
  }
  function ne(t) {
    return "touch" === t.pointerType || !!t.touches;
  }
  function re(t) {
    var e = t.touches,
      i = t.changedTouches;
    return { x: (t = (e && e[0]) || (i && i[0]) || t).clientX, y: t.clientY };
  }
  function oe() {
    var t = this;
    this.promise = new se(function (e, i) {
      (t.reject = i), (t.resolve = e);
    });
  }
  var se = (at && window.Promise) || le,
    ae = (at && window.setImmediate) || setTimeout;
  function le(t) {
    (this.state = 2), (this.value = void 0), (this.deferred = []);
    var e = this;
    try {
      t(
        function (t) {
          e.resolve(t);
        },
        function (t) {
          e.reject(t);
        }
      );
    } catch (t) {
      e.reject(t);
    }
  }
  function ce(t, e) {
    return new se(function (i, n) {
      var r = Y(
        {
          data: null,
          method: "GET",
          headers: {},
          xhr: new XMLHttpRequest(),
          beforeSend: G,
          responseType: "",
        },
        e
      );
      r.beforeSend(r);
      var o,
        s,
        a = r.xhr;
      for (o in r)
        if (o in a)
          try {
            a[o] = r[o];
          } catch (i) {}
      for (s in (a.open(r.method.toUpperCase(), t), r.headers))
        a.setRequestHeader(s, r.headers[s]);
      Kt(a, "load", function () {
        0 === a.status ||
        (200 <= a.status && a.status < 300) ||
        304 === a.status
          ? ("json" === r.responseType &&
              E(a.response) &&
              (a = Y(
                (function (t) {
                  var e,
                    i = {};
                  for (e in t) i[e] = t[e];
                  return i;
                })(a),
                { response: JSON.parse(a.response) }
              )),
            i(a))
          : n(Y(Error(a.statusText), { xhr: a, status: a.status }));
      }),
        Kt(a, "error", function () {
          return n(Y(Error("Network Error"), { xhr: a }));
        }),
        Kt(a, "timeout", function () {
          return n(Y(Error("Network Timeout"), { xhr: a }));
        }),
        a.send(r.data);
    });
  }
  function he(t, e, i) {
    return new se(function (n, r) {
      var o = new Image();
      (o.onerror = function (t) {
        return r(t);
      }),
        (o.onload = function () {
          return n(o);
        }),
        i && (o.sizes = i),
        e && (o.srcset = e),
        (o.src = t);
    });
  }
  function ue(t) {
    return ((t = De(t)).innerHTML = ""), t;
  }
  function de(t, e) {
    return (
      (t = De(t)), B(e) ? t.innerHTML : fe(t.hasChildNodes() ? ue(t) : t, e)
    );
  }
  function fe(t, e) {
    return (
      (t = De(t)),
      ve(e, function (e) {
        return t.appendChild(e);
      })
    );
  }
  function pe(t, e) {
    return (
      (t = De(t)),
      ve(e, function (e) {
        return t.parentNode.insertBefore(e, t);
      })
    );
  }
  function ge(t, e) {
    return (
      (t = De(t)),
      ve(e, function (e) {
        return t.nextSibling ? pe(t.nextSibling, e) : fe(t.parentNode, e);
      })
    );
  }
  function ve(t, e) {
    return (t = E(t) ? Ce(t) : t) ? ("length" in t ? z(t).map(e) : e(t)) : null;
  }
  function me(t) {
    z(t).forEach(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function we(t, e) {
    for (e = P(pe(t, e)); e.firstChild; ) e = e.firstChild;
    return fe(e, t), e;
  }
  function ye(t, e) {
    return z(
      z(t).map(function (t) {
        return t.hasChildNodes ? we(z(t.childNodes), e) : fe(t, e);
      })
    );
  }
  function xe(t) {
    z(t)
      .map(_t)
      .filter(function (t, e, i) {
        return i.indexOf(t) === e;
      })
      .forEach(function (t) {
        pe(t, t.childNodes), me(t);
      });
  }
  (le.reject = function (t) {
    return new le(function (e, i) {
      i(t);
    });
  }),
    (le.resolve = function (t) {
      return new le(function (e, i) {
        e(t);
      });
    }),
    (le.all = function (t) {
      return new le(function (e, i) {
        var n = [],
          r = 0;
        0 === t.length && e(n);
        for (var o = 0; o < t.length; o += 1)
          le.resolve(t[o]).then(
            (function (i) {
              return function (o) {
                (n[i] = o), (r += 1) === t.length && e(n);
              };
            })(o),
            i
          );
      });
    }),
    (le.race = function (t) {
      return new le(function (e, i) {
        for (var n = 0; n < t.length; n += 1) le.resolve(t[n]).then(e, i);
      });
    }),
    ((yr = le.prototype).resolve = function (t) {
      var e = this;
      if (2 === e.state) {
        if (t === e) throw new TypeError("Promise settled with itself.");
        var i = !1;
        try {
          var n = t && t.then;
          if (null !== t && b(t) && x(n))
            return void n.call(
              t,
              function (t) {
                i || e.resolve(t), (i = !0);
              },
              function (t) {
                i || e.reject(t), (i = !0);
              }
            );
        } catch (t) {
          return void (i || e.reject(t));
        }
        (e.state = 0), (e.value = t), e.notify();
      }
    }),
    (yr.reject = function (t) {
      var e = this;
      if (2 === e.state) {
        if (t === e) throw new TypeError("Promise settled with itself.");
        (e.state = 1), (e.value = t), e.notify();
      }
    }),
    (yr.notify = function () {
      var t = this;
      ae(function () {
        if (2 !== t.state)
          for (; t.deferred.length; ) {
            var e = t.deferred.shift(),
              i = e[0],
              n = e[1],
              r = e[2],
              o = e[3];
            try {
              0 === t.state
                ? x(i)
                  ? r(i.call(void 0, t.value))
                  : r(t.value)
                : 1 === t.state &&
                  (x(n) ? r(n.call(void 0, t.value)) : o(t.value));
            } catch (e) {
              o(e);
            }
          }
      });
    }),
    (yr.then = function (t, e) {
      var i = this;
      return new le(function (n, r) {
        i.deferred.push([t, e, n, r]), i.notify();
      });
    }),
    (yr.catch = function (t) {
      return this.then(void 0, t);
    });
  var be = /^\s*<(\w+|!)[^>]*>/,
    ke = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Ce(t) {
    var e = ke.exec(t);
    return e
      ? document.createElement(e[1])
      : ((e = document.createElement("div")),
        be.test(t)
          ? e.insertAdjacentHTML("beforeend", t.trim())
          : (e.textContent = t),
        1 < e.childNodes.length ? z(e.childNodes) : e.firstChild);
  }
  function _e(t, e) {
    if (L(t))
      for (e(t), t = t.firstElementChild; t; ) {
        var i = t.nextElementSibling;
        _e(t, e), (t = i);
      }
  }
  function De(t, e) {
    return E(t) ? (Le(t) ? P(Ce(t)) : jt(t, e)) : P(t);
  }
  function Te(t, e) {
    return E(t) ? (Le(t) ? z(Ce(t)) : Ht(t, e)) : z(t);
  }
  function Le(t) {
    return "<" === t[0] || t.match(/^\s*</);
  }
  function Se(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    Be(t, e, "add");
  }
  function Me(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    Be(t, e, "remove");
  }
  function Ee(t, e) {
    nt(t, "class", function (t) {
      return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }
  function Ae(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    e[0] && Me(t, e[0]), e[1] && Se(t, e[1]);
  }
  function Ie(t, e) {
    e = Ne(e)[0];
    for (var i = z(t), n = 0; n < i.length; n++)
      if (e && i[n].classList.contains(e)) return !0;
    return !1;
  }
  function $e(t, e, i) {
    e = Ne(e);
    for (var n = z(t), r = 0; r < n.length; r++)
      for (var o = n[r].classList, s = 0; s < e.length; s++)
        B(i)
          ? o.toggle(e[s])
          : Oe.Force
          ? o.toggle(e[s], !!i)
          : o[i ? "add" : "remove"](e[s]);
  }
  function Be(t, e, i) {
    var n;
    e = e.reduce(function (t, e) {
      return t.concat(Ne(e));
    }, []);
    for (var r = z(t), o = 0; o < r.length; o++)
      !(function (t) {
        Oe.Multiple
          ? (n = r[t].classList)[i].apply(n, e)
          : e.forEach(function (e) {
              return r[t].classList[i](e);
            });
      })(o);
  }
  function Ne(t) {
    return (~(t = String(t)).indexOf(" ") ? t.split(" ") : [t]).filter(Boolean);
  }
  var Oe = {
      get Multiple() {
        return this.get("Multiple");
      },
      get Force() {
        return this.get("Force");
      },
      get: function (t) {
        var e = document.createElement("_").classList;
        return (
          e.add("a", "b"),
          e.toggle("c", !1),
          (Oe = { Multiple: e.contains("b"), Force: !e.contains("c") })[t]
        );
      },
    },
    je = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0,
    };
  function He(t, e, i, n) {
    return (
      void 0 === n && (n = ""),
      z(t).map(function (t) {
        if (E(e)) {
          if (((e = Re(e)), B(i))) return ze(t, e);
          i || A(i)
            ? t.style.setProperty(e, I(i) && !je[e] ? i + "px" : i, n)
            : t.style.removeProperty(e);
        } else {
          if (y(e)) {
            var r = Pe(t);
            return e.reduce(function (t, e) {
              return (t[e] = r[Re(e)]), t;
            }, {});
          }
          b(e) &&
            ((n = i),
            K(e, function (e, i) {
              return He(t, i, e, n);
            }));
        }
        return t;
      })[0]
    );
  }
  function Pe(t, e) {
    return W(t).getComputedStyle(t, e);
  }
  function ze(t, e, i) {
    return Pe(t, i)[e];
  }
  var We = it(function (t) {
    var e = fe(document.documentElement, document.createElement("div"));
    return (
      Se(e, "uk-" + t),
      (t = ze(e, "content", ":before").replace(/^["'](.*)["']$/, "$1")),
      me(e),
      t
    );
  });
  function Fe(t) {
    return lt
      ? We(t)
      : Pe(document.documentElement).getPropertyValue("--uk-" + t);
  }
  var Re = it(function (t) {
      t = n(t);
      var e = document.documentElement.style;
      if (t in e) return t;
      for (var i, r = qe.length; r--; )
        if ((i = "-" + qe[r] + "-" + t) in e) return i;
    }),
    qe = ["webkit", "moz", "ms"];
  function Ye(t, e, i, n) {
    return (
      void 0 === i && (i = 400),
      void 0 === n && (n = "linear"),
      se.all(
        z(t).map(function (t) {
          return new se(function (r, o) {
            for (var s in e) {
              var a = He(t, s);
              "" === a && He(t, s, a);
            }
            var l = setTimeout(function () {
              return Zt(t, "transitionend");
            }, i);
            Xt(
              t,
              "transitionend transitioncanceled",
              function (e) {
                (e = e.type),
                  clearTimeout(l),
                  Me(t, "uk-transition"),
                  He(t, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: "",
                  }),
                  "transitioncanceled" === e ? o() : r(t);
              },
              { self: !0 }
            ),
              Se(t, "uk-transition"),
              He(
                t,
                Y(
                  {
                    transitionProperty: Object.keys(e).map(Re).join(","),
                    transitionDuration: i + "ms",
                    transitionTimingFunction: n,
                  },
                  e
                )
              );
          });
        })
      )
    );
  }
  var Ve = {
      start: Ye,
      stop: function (t) {
        return Zt(t, "transitionend"), se.resolve();
      },
      cancel: function (t) {
        Zt(t, "transitioncanceled");
      },
      inProgress: function (t) {
        return Ie(t, "uk-transition");
      },
    },
    Ke = "uk-animation-";
  function Ue(t, e, i, n, r) {
    return (
      void 0 === i && (i = 200),
      se.all(
        z(t).map(function (t) {
          return new se(function (o, s) {
            Zt(t, "animationcanceled");
            var a = setTimeout(function () {
              return Zt(t, "animationend");
            }, i);
            Xt(
              t,
              "animationend animationcanceled",
              function (e) {
                (e = e.type),
                  clearTimeout(a),
                  "animationcanceled" === e ? s() : o(t),
                  He(t, "animationDuration", ""),
                  Ee(t, Ke + "\\S*");
              },
              { self: !0 }
            ),
              He(t, "animationDuration", i + "ms"),
              Se(t, e, Ke + (r ? "leave" : "enter")),
              c(e, Ke) &&
                (n && Se(t, "uk-transform-origin-" + n),
                r && Se(t, Ke + "reverse"));
          });
        })
      )
    );
  }
  var Xe = new RegExp(Ke + "(enter|leave)"),
    Ze = {
      in: Ue,
      out: function (t, e, i, n) {
        return Ue(t, e, i, n, !0);
      },
      inProgress: function (t) {
        return Xe.test(nt(t, "class"));
      },
      cancel: function (t) {
        Zt(t, "animationcanceled");
      },
    },
    Ge = { width: ["left", "right"], height: ["top", "bottom"] };
  function Je(t) {
    return {
      height: (t = L(t)
        ? P(t).getBoundingClientRect()
        : { height: ii(t), width: ni(t), top: 0, left: 0 }).height,
      width: t.width,
      top: t.top,
      left: t.left,
      bottom: t.top + t.height,
      right: t.left + t.width,
    };
  }
  function Qe(t, e) {
    var i,
      n = Je(t),
      r = W(t),
      o = { height: r.pageYOffset, width: r.pageXOffset };
    for (i in Ge) for (var s in Ge[i]) n[Ge[i][s]] += o[i];
    if (!e) return n;
    var a = He(t, "position");
    K(He(t, ["left", "top"]), function (i, r) {
      return He(
        t,
        r,
        e[r] - n[r] + j("absolute" === a && "auto" === i ? ti(t)[r] : i)
      );
    });
  }
  function ti(t) {
    for (
      var e,
        i = (e = Qe(t)).top,
        n = e.left,
        r = P(t),
        o = (e = r.ownerDocument).body,
        s = e.documentElement,
        a = r.offsetParent || s;
      a && (a === o || a === s) && "static" === He(a, "position");

    )
      a = a.parentNode;
    return (
      L(a) &&
        ((i -= (r = Qe(a)).top + j(He(a, "borderTopWidth"))),
        (n -= r.left + j(He(a, "borderLeftWidth")))),
      { top: i - j(He(t, "marginTop")), left: n - j(He(t, "marginLeft")) }
    );
  }
  function ei(t) {
    var e = [0, 0];
    t = P(t);
    do {
      if (
        ((e[0] += t.offsetTop),
        (e[1] += t.offsetLeft),
        "fixed" === He(t, "position"))
      ) {
        var i = W(t);
        return (e[0] += i.pageYOffset), (e[1] += i.pageXOffset), e;
      }
    } while ((t = t.offsetParent));
    return e;
  }
  var ii = ri("height"),
    ni = ri("width");
  function ri(t) {
    var e = s(t);
    return function (i, n) {
      if (B(n)) {
        if (_(i)) return i["inner" + e];
        if (D(i)) {
          var r = i.documentElement;
          return Math.max(r["offset" + e], r["scroll" + e]);
        }
        return (
          (n =
            "auto" === (n = He((i = P(i)), t)) ? i["offset" + e] : j(n) || 0) -
          oi(i, t)
        );
      }
      return He(i, t, n || 0 === n ? +n + oi(i, t) + "px" : "");
    };
  }
  function oi(t, e, i) {
    return (
      void 0 === i && (i = "border-box"),
      He(t, "boxSizing") === i
        ? Ge[e].map(s).reduce(function (e, i) {
            return (
              e + j(He(t, "padding" + i)) + j(He(t, "border" + i + "Width"))
            );
          }, 0)
        : 0
    );
  }
  function si(t) {
    for (var e in Ge)
      for (var i in Ge[e]) if (Ge[e][i] === t) return Ge[e][1 - i];
    return t;
  }
  function ai(t, e, i) {
    return (
      void 0 === e && (e = "width"),
      void 0 === i && (i = window),
      I(t)
        ? +t
        : u(t, "vh")
        ? li(ii(W(i)), t)
        : u(t, "vw")
        ? li(ni(W(i)), t)
        : u(t, "%")
        ? li(Je(i)[e], t)
        : j(t)
    );
  }
  function li(t, e) {
    return (t * j(e)) / 100;
  }
  var ci = {
    reads: [],
    writes: [],
    read: function (t) {
      return this.reads.push(t), ui(), t;
    },
    write: function (t) {
      return this.writes.push(t), ui(), t;
    },
    clear: function (t) {
      fi(this.reads, t), fi(this.writes, t);
    },
    flush: hi,
  };
  function hi(t) {
    void 0 === t && (t = 1),
      di(ci.reads),
      di(ci.writes.splice(0)),
      (ci.scheduled = !1),
      (ci.reads.length || ci.writes.length) && ui(t + 1);
  }
  function ui(t) {
    ci.scheduled ||
      ((ci.scheduled = !0),
      t && t < 4
        ? se.resolve().then(function () {
            return hi(t);
          })
        : requestAnimationFrame(function () {
            return hi();
          }));
  }
  function di(t) {
    for (var e; (e = t.shift()); )
      try {
        e();
      } catch (t) {
        console.error(t);
      }
  }
  function fi(t, e) {
    return ~(e = t.indexOf(e)) && t.splice(e, 1);
  }
  function pi() {}
  pi.prototype = {
    positions: [],
    init: function () {
      var t,
        e = this;
      (this.positions = []),
        (this.unbind = Kt(document, "mousemove", function (e) {
          return (t = re(e));
        })),
        (this.interval = setInterval(function () {
          t &&
            (e.positions.push(t),
            5 < e.positions.length && e.positions.shift());
        }, 50));
    },
    cancel: function () {
      this.unbind && this.unbind(),
        this.interval && clearInterval(this.interval);
    },
    movesTo: function (t) {
      if (this.positions.length < 2) return !1;
      var e = t.getBoundingClientRect(),
        i = e.left,
        n = e.right,
        r = e.top,
        o = e.bottom,
        s = [this.positions[0], (t = V(this.positions))];
      return (
        !Q(t, e) &&
        [
          [
            { x: i, y: r },
            { x: n, y: o },
          ],
          [
            { x: i, y: o },
            { x: n, y: r },
          ],
        ].some(function (t) {
          return (
            (t = (function (t, e) {
              var i,
                n = (a = t[0]).x,
                r = a.y,
                o = (i = t[1]).x,
                s = i.y,
                a = (l = e[0]).x,
                l = ((t = l.y), (i = e[1]).x);
              return (
                0 != (i = ((e = i.y) - t) * (o - n) - (l - a) * (s - r)) &&
                !((i = ((l - a) * (r - t) - (e - t) * (n - a)) / i) < 0) && {
                  x: n + i * (o - n),
                  y: r + i * (s - r),
                }
              );
            })(s, t)) && Q(t, e)
          );
        })
      );
    },
  };
  var gi = {};
  function vi(t, e, i) {
    return gi.computed(x(t) ? t.call(i, i) : t, x(e) ? e.call(i, i) : e);
  }
  function mi(t, e) {
    return (
      (t = t && !y(t) ? [t] : t), e ? (t ? t.concat(e) : y(e) ? e : [e]) : t
    );
  }
  function wi(t, i, n) {
    var r,
      o,
      s = {};
    if (
      (x(i) && (i = i.options),
      i.extends && (t = wi(t, i.extends, n)),
      i.mixins)
    )
      for (var a = 0, l = i.mixins.length; a < l; a++)
        t = wi(t, i.mixins[a], n);
    for (r in t) c(r);
    for (o in i) e(t, o) || c(o);
    function c(e) {
      s[e] = (
        gi[e] ||
        function (t, e) {
          return B(e) ? t : e;
        }
      )(t[e], i[e], n);
    }
    return s;
  }
  function yi(t, e) {
    var i;
    void 0 === e && (e = []);
    try {
      return t
        ? c(t, "{")
          ? JSON.parse(t)
          : e.length && !v(t, ":")
          ? (((i = {})[e[0]] = t), i)
          : t.split(";").reduce(function (t, e) {
              e = (i = e.split(/:(.*)/))[0];
              var i = i[1];
              return e && !B(i) && (t[e.trim()] = i.trim()), t;
            }, {})
        : {};
    } catch (t) {
      return {};
    }
  }
  function xi(t) {
    if ((_i(t) && Li(t, { func: "playVideo", method: "play" }), Ci(t)))
      try {
        t.play().catch(G);
      } catch (t) {}
  }
  function bi(t) {
    _i(t) && Li(t, { func: "pauseVideo", method: "pause" }), Ci(t) && t.pause();
  }
  function ki(t) {
    _i(t) && Li(t, { func: "mute", method: "setVolume", value: 0 }),
      Ci(t) && (t.muted = !0);
  }
  function Ci(t) {
    return t && "VIDEO" === t.tagName;
  }
  function _i(t) {
    return t && "IFRAME" === t.tagName && (Di(t) || Ti(t));
  }
  function Di(t) {
    return !!t.src.match(
      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
    );
  }
  function Ti(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }
  function Li(t, e) {
    (function (t) {
      if (t[Mi]) return t[Mi];
      var e,
        i = Di(t),
        n = Ti(t),
        r = ++Ei;
      return (t[Mi] = new se(function (o) {
        i &&
          Xt(t, "load", function () {
            function i() {
              return Si(t, { event: "listening", id: r });
            }
            (e = setInterval(i, 100)), i();
          }),
          Xt(window, "message", o, !1, function (t) {
            var e = t.data;
            try {
              return (
                (e = JSON.parse(e)) &&
                ((i && e.id === r && "onReady" === e.event) ||
                  (n && Number(e.player_id) === r))
              );
            } catch (t) {}
          }),
          (t.src =
            t.src +
            (v(t.src, "?") ? "&" : "?") +
            (i ? "enablejsapi=1" : "api=1&player_id=" + r));
      }).then(function () {
        return clearInterval(e);
      }));
    })(t).then(function () {
      return Si(t, e);
    });
  }
  function Si(t, e) {
    try {
      t.contentWindow.postMessage(
        JSON.stringify(Y({ event: "command" }, e)),
        "*"
      );
    } catch (t) {}
  }
  (gi.events =
    gi.created =
    gi.beforeConnect =
    gi.connected =
    gi.beforeDisconnect =
    gi.disconnected =
    gi.destroy =
      mi),
    (gi.args = function (t, e) {
      return !1 !== e && mi(e || t);
    }),
    (gi.update = function (t, e) {
      return U(mi(t, x(e) ? { read: e } : e), "order");
    }),
    (gi.props = function (t, e) {
      return (
        y(e) &&
          (e = e.reduce(function (t, e) {
            return (t[e] = String), t;
          }, {})),
        gi.methods(t, e)
      );
    }),
    (gi.computed = gi.methods =
      function (t, e) {
        return e ? (t ? Y({}, t, e) : e) : t;
      }),
    (gi.data = function (t, e, i) {
      return i
        ? vi(t, e, i)
        : e
        ? t
          ? function (i) {
              return vi(t, e, i);
            }
          : e
        : t;
    });
  var Mi = "_ukPlayer",
    Ei = 0;
  function Ai(t, e, i) {
    return (
      void 0 === e && (e = 0),
      void 0 === i && (i = 0),
      !!bt(t) &&
        J.apply(
          void 0,
          Ni(t)
            .map(function (t) {
              var n = (o = Qe(Oi(t))).top,
                r = o.left,
                o = ((t = o.bottom), o.right);
              return { top: n - e, left: r - i, bottom: t + e, right: o + i };
            })
            .concat(Qe(t))
        )
    );
  }
  function Ii(t, e) {
    (t = (_(t) || D(t) ? ji : P)(t)).scrollTop = e;
  }
  function $i(t, e) {
    void 0 === e && (e = {});
    var i = e.offset;
    if ((void 0 === i && (i = 0), bt(t))) {
      var n = Ni(t),
        r = 0;
      return n.reduce(
        function (e, o, s) {
          var a = o.scrollTop,
            l = o.scrollHeight - o.clientHeight,
            c = Math.ceil(Qe(n[s - 1] || t).top - Qe(Oi(o)).top - i + r + a);
          return (
            l < c ? ((r = c - l), (c = l)) : (r = 0),
            function () {
              return (
                (t = o),
                (i = c - a),
                new se(function (e) {
                  var n,
                    r = t.scrollTop,
                    o = ((n = Math.abs(i)), 40 * Math.pow(n, 0.375)),
                    s = Date.now();
                  !(function n() {
                    var a =
                      ((a = Z((Date.now() - s) / o)),
                      0.5 * (1 - Math.cos(Math.PI * a)));
                    Ii(t, r + i * a), 1 != a ? requestAnimationFrame(n) : e();
                  })();
                }).then(e)
              );
              var t, i;
            }
          );
        },
        function () {
          return se.resolve();
        }
      )();
    }
  }
  function Bi(t, e) {
    if ((void 0 === e && (e = 0), !bt(t))) return 0;
    var i,
      n = (i = Ni(t, /auto|scroll/, !0)[0]).clientHeight,
      r = i.scrollHeight,
      o = i.scrollTop,
      s = ei(t)[0] - o - ei(i)[0];
    return Z(
      (-1 * (s - (i = Math.min(n, s + o)))) /
        Math.min(t.offsetHeight + e + i, r - (s + o), r - n)
    );
  }
  function Ni(t, e, i) {
    void 0 === e && (e = /auto|scroll|hidden/), void 0 === i && (i = !1);
    var n = ji(t),
      r = At(t).reverse();
    return (
      ~(t = w((r = r.slice(r.indexOf(n) + 1)), function (t) {
        return "fixed" === He(t, "position");
      })) && (r = r.slice(t)),
      [n]
        .concat(
          r.filter(function (t) {
            return (
              e.test(He(t, "overflow")) &&
              (!i || t.scrollHeight > t.clientHeight)
            );
          })
        )
        .reverse()
    );
  }
  function Oi(t) {
    return t === ji(t) ? window : t;
  }
  function ji(t) {
    return (t = W(t).document).scrollingElement || t.documentElement;
  }
  var Hi = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
  function Pi(t, e, i, n, r, o, s, a) {
    (i = Wi(i)), (n = Wi(n));
    var l = { element: i, target: n };
    if (!t || !e) return l;
    var c,
      h = Qe(t),
      u = Qe(e),
      d = u;
    return (
      zi(d, i, h, -1),
      zi(d, n, u, 1),
      (r = Fi(r, h.width, h.height)),
      (o = Fi(o, u.width, u.height)),
      (r.x += o.x),
      (r.y += o.y),
      (d.left += r.x),
      (d.top += r.y),
      s &&
        ((c = Ni(t).map(Oi)),
        a && v(c, a) && c.unshift(a),
        (c = c.map(function (t) {
          return Qe(t);
        })),
        K(Hi, function (t, e) {
          var o = t[0],
            a = t[1],
            f = t[2];
          (!0 !== s && !v(s, o)) ||
            c.some(function (t) {
              var s = i[o] === a ? -h[e] : i[o] === f ? h[e] : 0,
                c = n[o] === a ? u[e] : n[o] === f ? -u[e] : 0;
              if (d[a] < t[a] || d[a] + h[e] > t[f]) {
                var p = h[e] / 2,
                  g = "center" === n[o] ? -u[e] / 2 : 0;
                return ("center" === i[o] && (v(p, g) || v(-p, -g))) || v(s, c);
              }
              function v(i, n) {
                if (
                  (n = j((d[a] + i + n - 2 * r[o]).toFixed(4))) >= t[a] &&
                  n + h[e] <= t[f]
                )
                  return (
                    (d[a] = n),
                    ["element", "target"].forEach(function (t) {
                      l[t][o] = i
                        ? l[t][o] === Hi[e][1]
                          ? Hi[e][2]
                          : Hi[e][1]
                        : l[t][o];
                    }),
                    !0
                  );
              }
            });
        })),
      Qe(t, d),
      l
    );
  }
  function zi(t, e, i, n) {
    K(Hi, function (r, o) {
      var s = r[0],
        a = r[1];
      r = r[2];
      e[s] === r
        ? (t[a] += i[o] * n)
        : "center" === e[s] && (t[a] += (i[o] * n) / 2);
    });
  }
  function Wi(t) {
    var e = /left|center|right/,
      i = /top|center|bottom/;
    return (
      1 === (t = (t || "").split(" ")).length &&
        (t = e.test(t[0])
          ? t.concat("center")
          : i.test(t[0])
          ? ["center"].concat(t)
          : ["center", "center"]),
      { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" }
    );
  }
  function Fi(t, e, i) {
    t = (n = (t || "").split(" "))[0];
    var n = n[1];
    return {
      x: t ? j(t) * (u(t, "%") ? e / 100 : 1) : 0,
      y: n ? j(n) * (u(n, "%") ? i / 100 : 1) : 0,
    };
  }
  var Ri = Object.freeze({
    __proto__: null,
    ajax: ce,
    getImage: he,
    transition: Ye,
    Transition: Ve,
    animate: Ue,
    Animation: Ze,
    attr: nt,
    hasAttr: rt,
    removeAttr: ot,
    data: st,
    addClass: Se,
    removeClass: Me,
    removeClasses: Ee,
    replaceClass: Ae,
    hasClass: Ie,
    toggleClass: $e,
    dimensions: Je,
    offset: Qe,
    position: ti,
    offsetPosition: ei,
    height: ii,
    width: ni,
    boxModelAdjust: oi,
    flipPosition: si,
    toPx: ai,
    ready: function (t) {
      var e;
      "loading" === document.readyState
        ? (e = Kt(document, "DOMContentLoaded", function () {
            e(), t();
          }))
        : t();
    },
    empty: ue,
    html: de,
    prepend: function (t, e) {
      return (t = De(t)).hasChildNodes()
        ? ve(e, function (e) {
            return t.insertBefore(e, t.firstChild);
          })
        : fe(t, e);
    },
    append: fe,
    before: pe,
    after: ge,
    remove: me,
    wrapAll: we,
    wrapInner: ye,
    unwrap: xe,
    fragment: Ce,
    apply: _e,
    $: De,
    $$: Te,
    inBrowser: at,
    isIE: lt,
    isRtl: ct,
    hasTouch: dt,
    pointerDown: ft,
    pointerMove: pt,
    pointerUp: gt,
    pointerEnter: vt,
    pointerLeave: mt,
    pointerCancel: wt,
    on: Kt,
    off: Ut,
    once: Xt,
    trigger: Zt,
    createEvent: Gt,
    toEventTargets: ie,
    isTouch: ne,
    getEventPos: re,
    fastdom: ci,
    isVoidElement: xt,
    isVisible: bt,
    selInput: kt,
    isInput: Ct,
    parent: _t,
    filter: Dt,
    matches: Lt,
    closest: Mt,
    within: Et,
    parents: At,
    children: It,
    index: $t,
    hasOwn: e,
    hyphenate: n,
    camelize: o,
    ucfirst: s,
    startsWith: c,
    endsWith: u,
    includes: v,
    findIndex: w,
    isArray: y,
    isFunction: x,
    isObject: b,
    isPlainObject: C,
    isWindow: _,
    isDocument: D,
    isNode: T,
    isElement: L,
    isBoolean: M,
    isString: E,
    isNumber: A,
    isNumeric: I,
    isEmpty: $,
    isUndefined: B,
    toBoolean: N,
    toNumber: O,
    toFloat: j,
    toArray: H,
    toNode: P,
    toNodes: z,
    toWindow: W,
    toMs: F,
    isEqual: R,
    swap: q,
    assign: Y,
    last: V,
    each: K,
    sortBy: U,
    uniqueBy: X,
    clamp: Z,
    noop: G,
    intersectRect: J,
    pointInRect: Q,
    Dimensions: tt,
    getIndex: et,
    cacheFunction: it,
    MouseTracker: pi,
    mergeOptions: wi,
    parseOptions: yi,
    play: xi,
    pause: bi,
    mute: ki,
    positionAt: Pi,
    Promise: se,
    Deferred: oe,
    query: Bt,
    queryAll: Nt,
    find: jt,
    findAll: Ht,
    escape: Vt,
    css: He,
    getCssVar: Fe,
    propName: Re,
    isInView: Ai,
    scrollTop: Ii,
    scrollIntoView: $i,
    scrolledOver: Bi,
    scrollParents: Ni,
    getViewport: Oi,
  });
  function qi(t) {
    this._init(t);
  }
  var Yi,
    Vi,
    Ki,
    Ui,
    Xi,
    Zi,
    Gi,
    Ji,
    Qi,
    tn = it(function (t) {
      return (
        !(!c(t, "uk-") && !c(t, "data-uk-")) &&
        o(t.replace("data-uk-", "").replace("uk-", ""))
      );
    });
  function en(t, e) {
    if (t) for (var i in t) t[i]._connected && t[i]._callUpdate(e);
  }
  function nn(t, e) {
    var i = {},
      r = t.args;
    void 0 === r && (r = []);
    var s = t.props;
    void 0 === s && (s = {});
    var a,
      l = t.el;
    if (!s) return i;
    for (a in s) {
      var h = n(a),
        u = st(l, h);
      B(u) ||
        ((u = (s[a] === Boolean && "" === u) || on(s[a], u)),
        ("target" !== h || (u && !c(u, "_"))) && (i[a] = u));
    }
    var d,
      f = yi(st(l, e), r);
    for (d in f) {
      var p = o(d);
      void 0 !== s[p] && (i[p] = on(s[p], f[d]));
    }
    return i;
  }
  function rn(t, e, i) {
    C(e) || (e = { name: i, handler: e });
    var n = e.name,
      r = e.el,
      o = e.handler,
      s = e.capture,
      a = e.passive,
      l = e.delegate,
      c = e.filter,
      h = e.self;
    r = x(r) ? r.call(t) : r || t.$el;
    y(r)
      ? r.forEach(function (n) {
          return rn(t, Y({}, e, { el: n }), i);
        })
      : !r ||
        (c && !c.call(t)) ||
        t._events.push(
          Kt(r, n, l ? (E(l) ? l : l.call(t)) : null, E(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: s,
            self: h,
          })
        );
  }
  function on(t, e) {
    return t === Boolean
      ? N(e)
      : t === Number
      ? O(e)
      : "list" === t
      ? y((i = e))
        ? i
        : E(i)
        ? i.split(/,(?![^(]*\))/).map(function (t) {
            return I(t) ? O(t) : N(t.trim());
          })
        : [i]
      : t
      ? t(e)
      : e;
    var i;
  }
  (qi.util = Ri),
    (qi.data = "__uikit__"),
    (qi.prefix = "uk-"),
    (qi.options = {}),
    (qi.version = "3.6.14"),
    (Ki = (Yi = qi).data),
    (Yi.use = function (t) {
      if (!t.installed) return t.call(null, this), (t.installed = !0), this;
    }),
    (Yi.mixin = function (t, e) {
      (e = (E(e) ? Yi.component(e) : e) || this).options = wi(e.options, t);
    }),
    (Yi.extend = function (t) {
      function e(t) {
        this._init(t);
      }
      return (
        (t = t || {}),
        (((e.prototype = Object.create(this.prototype)).constructor =
          e).options = wi(this.options, t)),
        (e.super = this),
        (e.extend = this.extend),
        e
      );
    }),
    (Yi.update = function (t, e) {
      At((t = t ? P(t) : document.body))
        .reverse()
        .forEach(function (t) {
          return en(t[Ki], e);
        }),
        _e(t, function (t) {
          return en(t[Ki], e);
        });
    }),
    Object.defineProperty(Yi, "container", {
      get: function () {
        return Vi || document.body;
      },
      set: function (t) {
        Vi = De(t);
      },
    }),
    ((Ui = qi).prototype._callHook = function (t) {
      var e = this;
      (t = this.$options[t]) &&
        t.forEach(function (t) {
          return t.call(e);
        });
    }),
    (Ui.prototype._callConnected = function () {
      this._connected ||
        ((this._data = {}),
        (this._computeds = {}),
        this._initProps(),
        this._callHook("beforeConnect"),
        (this._connected = !0),
        this._initEvents(),
        this._initObservers(),
        this._callHook("connected"),
        this._callUpdate());
    }),
    (Ui.prototype._callDisconnected = function () {
      this._connected &&
        (this._callHook("beforeDisconnect"),
        this._disconnectObservers(),
        this._unbindEvents(),
        this._callHook("disconnected"),
        (this._connected = !1),
        delete this._watch);
    }),
    (Ui.prototype._callUpdate = function (t) {
      var e = this;
      void 0 === t && (t = "update"),
        this._connected &&
          (("update" !== t && "resize" !== t) || this._callWatches(),
          this.$options.update &&
            (this._updates ||
              ((this._updates = new Set()),
              ci.read(function () {
                (function (t) {
                  for (
                    var e = this, i = this.$options.update, n = 0;
                    n < i.length;
                    n++
                  )
                    !(function (n) {
                      n = (o = i[n]).read;
                      var r = o.write,
                        o = o.events;
                      (t.has("update") ||
                        (o &&
                          o.some(function (e) {
                            return t.has(e);
                          }))) &&
                        ((o = void 0),
                        n &&
                          (o = n.call(e, e._data, t)) &&
                          C(o) &&
                          Y(e._data, o),
                        r &&
                          !1 !== o &&
                          ci.write(function () {
                            return r.call(e, e._data, t);
                          }));
                    })(n);
                }.call(e, e._updates),
                  delete e._updates);
              })),
            this._updates.add(t.type || t)));
    }),
    (Ui.prototype._callWatches = function () {
      var t,
        i = this;
      this._watch ||
        ((t = !e(this, "_watch")),
        (this._watch = ci.read(function () {
          var n,
            r = i.$options.computed,
            o = i._computeds;
          for (n in r) {
            var s = e(o, n),
              a = o[n];
            delete o[n];
            var l = (c = r[n]).watch,
              c = c.immediate;
            l && ((t && c) || (s && !R(a, i[n]))) && l.call(i, i[n], a);
          }
          i._watch = null;
        })));
    }),
    (Zi = 0),
    ((Xi = qi).prototype._init = function (t) {
      ((t = t || {}).data = (function (t, e) {
        var i = t.data,
          n = (t.el, e.args),
          r = e.props;
        if (
          (void 0 === r && (r = {}),
          (i = y(i)
            ? $(n)
              ? void 0
              : i.slice(0, n.length).reduce(function (t, e, i) {
                  return C(e) ? Y(t, e) : (t[n[i]] = e), t;
                }, {})
            : i))
        )
          for (var o in i)
            B(i[o]) ? delete i[o] : (i[o] = r[o] ? on(r[o], i[o]) : i[o]);
        return i;
      })(t, this.constructor.options)),
        (this.$options = wi(this.constructor.options, t, this)),
        (this.$el = null),
        (this.$props = {}),
        (this._uid = Zi++),
        this._initData(),
        this._initMethods(),
        this._initComputeds(),
        this._callHook("created"),
        t.el && this.$mount(t.el);
    }),
    (Xi.prototype._initData = function () {
      var t,
        e = this.$options.data;
      for (t in (void 0 === e && (e = {}), e)) this.$props[t] = this[t] = e[t];
    }),
    (Xi.prototype._initMethods = function () {
      var t = this.$options.methods;
      if (t) for (var e in t) this[e] = t[e].bind(this);
    }),
    (Xi.prototype._initComputeds = function () {
      var t = this.$options.computed;
      if (((this._computeds = {}), t))
        for (var i in t)
          !(function (t, i, n) {
            Object.defineProperty(t, i, {
              enumerable: !0,
              get: function () {
                var r = t._computeds,
                  o = t.$props,
                  s = t.$el;
                return e(r, i) || (r[i] = (n.get || n).call(t, o, s)), r[i];
              },
              set: function (e) {
                var r = t._computeds;
                (r[i] = n.set ? n.set.call(t, e) : e), B(r[i]) && delete r[i];
              },
            });
          })(this, i, t[i]);
    }),
    (Xi.prototype._initProps = function (t) {
      for (var i in (t = t || nn(this.$options, this.$name)))
        B(t[i]) || (this.$props[i] = t[i]);
      var n = [this.$options.computed, this.$options.methods];
      for (i in this.$props)
        i in t &&
          (function (t, i) {
            return t.every(function (t) {
              return !t || !e(t, i);
            });
          })(n, i) &&
          (this[i] = this.$props[i]);
    }),
    (Xi.prototype._initEvents = function () {
      var t = this;
      this._events = [];
      var i = this.$options.events;
      i &&
        i.forEach(function (i) {
          if (e(i, "handler")) rn(t, i);
          else for (var n in i) rn(t, i[n], n);
        });
    }),
    (Xi.prototype._unbindEvents = function () {
      this._events.forEach(function (t) {
        return t();
      }),
        delete this._events;
    }),
    (Xi.prototype._initObservers = function () {
      var t, e, i;
      this._observers = [
        ((e = (t = this).$options.el),
        (i = new MutationObserver(function () {
          return t.$emit();
        })).observe(e, { childList: !0, subtree: !0 }),
        i),
        (function (t) {
          var e = t.$name,
            i = t.$options,
            r = t.$props,
            s = i.attrs,
            a = i.props,
            l = i.el;
          if (a && !1 !== s) {
            var c = y(s) ? s : Object.keys(a);
            s = c
              .map(function (t) {
                return n(t);
              })
              .concat(e);
            return (
              (a = new MutationObserver(function (n) {
                var s = nn(i, e);
                n.some(function (t) {
                  var i = t.attributeName;
                  return (
                    (t = i.replace("data-", "")) === e ? c : [o(t), o(i)]
                  ).some(function (t) {
                    return !B(s[t]) && s[t] !== r[t];
                  });
                }) && t.$reset();
              })).observe(l, {
                attributes: !0,
                attributeFilter: s.concat(
                  s.map(function (t) {
                    return "data-" + t;
                  })
                ),
              }),
              a
            );
          }
        })(this),
      ];
    }),
    (Xi.prototype._disconnectObservers = function () {
      this._observers.forEach(function (t) {
        return t && t.disconnect();
      });
    }),
    (Ji = (Gi = qi).data),
    (Qi = {}),
    (Gi.component = function (t, e) {
      var i = n(t);
      if (((t = o(i)), !e))
        return C(Qi[t]) && (Qi[t] = Gi.extend(Qi[t])), Qi[t];
      Gi[t] = function (e, i) {
        for (var n = arguments.length, r = Array(n); n--; ) r[n] = arguments[n];
        var o = Gi.component(t);
        return o.options.functional
          ? new o({ data: C(e) ? e : [].concat(r) })
          : e
          ? Te(e).map(s)[0]
          : s(e);
        function s(e) {
          var n = Gi.getComponent(e, t);
          if (n) {
            if (!i) return n;
            n.$destroy();
          }
          return new o({ el: e, data: i });
        }
      };
      var r = C(e) ? Y({}, e) : e.options;
      return (
        (r.name = t),
        r.install && r.install(Gi, r, t),
        Gi._initialized &&
          !r.functional &&
          ci.read(function () {
            return Gi[t]("[uk-" + i + "],[data-uk-" + i + "]");
          }),
        (Qi[t] = C(e) ? r : e)
      );
    }),
    (Gi.getComponents = function (t) {
      return (t && t[Ji]) || {};
    }),
    (Gi.getComponent = function (t, e) {
      return Gi.getComponents(t)[e];
    }),
    (Gi.connect = function (t) {
      if (t[Ji]) for (var e in t[Ji]) t[Ji][e]._callConnected();
      for (var i = 0; i < t.attributes.length; i++) {
        var n = tn(t.attributes[i].name);
        n && n in Qi && Gi[n](t);
      }
    }),
    (Gi.disconnect = function (t) {
      for (var e in t[Ji]) t[Ji][e]._callDisconnected();
    }),
    (function (t) {
      var e = t.data;
      (t.prototype.$create = function (e, i, n) {
        return t[e](i, n);
      }),
        (t.prototype.$mount = function (t) {
          var i = this.$options.name;
          t[e] || (t[e] = {}),
            t[e][i] ||
              (((t[e][i] = this).$el = this.$options.el =
                this.$options.el || t),
              Et(t, document) && this._callConnected());
        }),
        (t.prototype.$reset = function () {
          this._callDisconnected(), this._callConnected();
        }),
        (t.prototype.$destroy = function (t) {
          void 0 === t && (t = !1);
          var i = (n = this.$options).el,
            n = n.name;
          i && this._callDisconnected(),
            this._callHook("destroy"),
            i &&
              i[e] &&
              (delete i[e][n], $(i[e]) || delete i[e], t && me(this.$el));
        }),
        (t.prototype.$emit = function (t) {
          this._callUpdate(t);
        }),
        (t.prototype.$update = function (e, i) {
          void 0 === e && (e = this.$el), t.update(e, i);
        }),
        (t.prototype.$getComponent = t.getComponent);
      var i = it(function (e) {
        return t.prefix + n(e);
      });
      Object.defineProperties(t.prototype, {
        $container: Object.getOwnPropertyDescriptor(t, "container"),
        $name: {
          get: function () {
            return i(this.$options.name);
          },
        },
      });
    })(qi);
  var sn = {
      connected: function () {
        Ie(this.$el, this.$name) || Se(this.$el, this.$name);
      },
    },
    an = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        origin: String,
        transition: String,
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        origin: !1,
        transition: "linear",
        clsEnter: "uk-togglabe-enter",
        clsLeave: "uk-togglabe-leave",
        initProps: {
          overflow: "",
          height: "",
          paddingTop: "",
          paddingBottom: "",
          marginTop: "",
          marginBottom: "",
        },
        hideProps: {
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      },
      computed: {
        hasAnimation: function (t) {
          return !!t.animation[0];
        },
        hasTransition: function (t) {
          return (t = t.animation), this.hasAnimation && !0 === t[0];
        },
      },
      methods: {
        toggleElement: function (t, e, i) {
          var n = this;
          return new se(function (r) {
            return se
              .all(
                z(t).map(function (t) {
                  var r = M(e) ? e : !n.isToggled(t);
                  if (!Zt(t, "before" + (r ? "show" : "hide"), [n]))
                    return se.reject();
                  var o,
                    s = (
                      x(i)
                        ? i
                        : !1 !== i && n.hasAnimation
                        ? n.hasTransition
                          ? ln(n)
                          : ((o = n),
                            function (t, e) {
                              Ze.cancel(t);
                              var i = o.animation,
                                n = o.duration,
                                r = o._toggle;
                              return e
                                ? (r(t, !0), Ze.in(t, i[0], n, o.origin))
                                : Ze.out(t, i[1] || i[0], n, o.origin).then(
                                    function () {
                                      return r(t, !1);
                                    }
                                  );
                            })
                        : n._toggle
                    )(t, r),
                    a = r ? n.clsEnter : n.clsLeave;
                  function l() {
                    Me(t, a), Zt(t, r ? "shown" : "hidden", [n]), n.$update(t);
                  }
                  return (
                    Se(t, a),
                    Zt(t, r ? "show" : "hide", [n]),
                    s
                      ? s.then(l, function () {
                          return Me(t, a), se.reject();
                        })
                      : l()
                  );
                })
              )
              .then(r, G);
          });
        },
        isToggled: function (t) {
          return (
            void 0 === t && (t = this.$el),
            !!Ie(t, this.clsEnter) ||
              (!Ie(t, this.clsLeave) &&
                (this.cls ? Ie(t, this.cls.split(" ")[0]) : !rt(t, "hidden")))
          );
        },
        _toggle: function (t, e) {
          var i;
          t &&
            ((e = Boolean(e)),
            this.cls
              ? (i = v(this.cls, " ") || e !== Ie(t, this.cls)) &&
                $e(t, this.cls, v(this.cls, " ") ? void 0 : e)
              : (i = e === t.hidden) && (t.hidden = !e),
            Te("[autofocus]", t).some(function (t) {
              return bt(t) ? t.focus() || !0 : t.blur();
            }),
            i && (Zt(t, "toggled", [e, this]), this.$update(t)));
        },
      },
    };
  function ln(t) {
    var e = t.isToggled,
      i = t.duration,
      n = t.initProps,
      r = t.hideProps,
      o = t.transition,
      s = t._toggle;
    return function (t, a) {
      var l = Ve.inProgress(t),
        c = t.hasChildNodes
          ? j(He(t.firstElementChild, "marginTop")) +
            j(He(t.lastElementChild, "marginBottom"))
          : 0,
        h = bt(t) ? ii(t) + (l ? 0 : c) : 0;
      return (
        Ve.cancel(t),
        e(t) || s(t, !0),
        ii(t, ""),
        ci.flush(),
        (c = ii(t) + (l ? 0 : c)),
        ii(t, h),
        (a
          ? Ve.start(
              t,
              Y({}, n, { overflow: "hidden", height: c }),
              Math.round(i * (1 - h / c)),
              o
            )
          : Ve.start(t, r, Math.round(i * (h / c)), o).then(function () {
              return s(t, !1);
            })
        ).then(function () {
          return He(t, n);
        })
      );
    };
  }
  var cn = {
    mixins: [sn, an],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number,
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      transition: "ease",
      offset: 0,
    },
    computed: {
      items: {
        get: function (t, e) {
          return Te(t.targets, e);
        },
        watch: function (t, e) {
          var i = this;
          t.forEach(function (t) {
            return hn(De(i.content, t), !Ie(t, i.clsOpen));
          }),
            e ||
              Ie(t, this.clsOpen) ||
              ((t =
                (!1 !== this.active && t[Number(this.active)]) ||
                (!this.collapsible && t[0])) &&
                this.toggle(t, !1));
        },
        immediate: !0,
      },
      toggles: function (t) {
        var e = t.toggle;
        return this.items.map(function (t) {
          return De(e, t);
        });
      },
    },
    events: [
      {
        name: "click",
        delegate: function () {
          return this.targets + " " + this.$props.toggle;
        },
        handler: function (t) {
          t.preventDefault(), this.toggle($t(this.toggles, t.current));
        },
      },
    ],
    methods: {
      toggle: function (t, e) {
        var i = this,
          n = [this.items[et(t, this.items)]];
        t = Dt(this.items, "." + this.clsOpen);
        this.multiple || v(t, n[0]) || (n = n.concat(t)),
          (!this.collapsible &&
            t.length < 2 &&
            !Dt(n, ":not(." + this.clsOpen + ")").length) ||
            n.forEach(function (t) {
              return i.toggleElement(t, !Ie(t, i.clsOpen), function (t, n) {
                $e(t, i.clsOpen, n),
                  nt(De(i.$props.toggle, t), "aria-expanded", n);
                var r = De((t._wrapper ? "> * " : "") + i.content, t);
                if (!1 !== e && i.hasTransition)
                  return (
                    t._wrapper ||
                      (t._wrapper = we(r, "<div" + (n ? " hidden" : "") + ">")),
                    hn(r, !1),
                    ln(i)(t._wrapper, n).then(function () {
                      var e;
                      hn(r, !n),
                        delete t._wrapper,
                        xe(r),
                        n &&
                          (Ai((e = De(i.$props.toggle, t))) ||
                            $i(e, { offset: i.offset }));
                    })
                  );
                hn(r, !n);
              });
            });
      },
    },
  };
  function hn(t, e) {
    t && (t.hidden = e);
  }
  var un,
    dn = {
      mixins: [sn, an],
      args: "animation",
      props: { close: String },
      data: {
        animation: [!0],
        selClose: ".uk-alert-close",
        duration: 150,
        hideProps: Y({ opacity: 0 }, an.data.hideProps),
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.close();
          },
        },
      ],
      methods: {
        close: function () {
          var t = this;
          this.toggleElement(this.$el).then(function () {
            return t.$destroy(!0);
          });
        },
      },
    },
    fn = {
      mixins: [
        sn,
        (io = {
          args: "autoplay",
          props: { automute: Boolean, autoplay: Boolean },
          data: { automute: !1, autoplay: !0 },
          computed: {
            inView: function (t) {
              return "inview" === t.autoplay;
            },
          },
          connected: function () {
            this.inView &&
              !rt(this.$el, "preload") &&
              (this.$el.preload = "none"),
              this.automute && ki(this.$el);
          },
          update: {
            read: function () {
              return {
                visible:
                  bt(this.$el) && "hidden" !== He(this.$el, "visibility"),
                inView: this.inView && Ai(this.$el),
              };
            },
            write: function (t) {
              var e = t.visible;
              t = t.inView;
              !e || (this.inView && !t)
                ? bi(this.$el)
                : (!0 === this.autoplay || (this.inView && t)) && xi(this.$el);
            },
            events: ["resize", "scroll"],
          },
        }),
      ],
      props: { width: Number, height: Number },
      data: { automute: !0 },
      update: {
        read: function () {
          var t = this.$el,
            e = (i =
              (function (t) {
                for (; (t = _t(t)); )
                  if ("static" !== He(t, "position")) return t;
              })(t) || _t(t)).offsetHeight,
            i = i.offsetWidth;
          return (
            !(
              !(e = tt.cover(
                {
                  width:
                    this.width ||
                    t.naturalWidth ||
                    t.videoWidth ||
                    t.clientWidth,
                  height:
                    this.height ||
                    t.naturalHeight ||
                    t.videoHeight ||
                    t.clientHeight,
                },
                { width: i + (i % 2 ? 1 : 0), height: e + (e % 2 ? 1 : 0) }
              )).width || !e.height
            ) && e
          );
        },
        write: function (t) {
          var e = t.height;
          t = t.width;
          He(this.$el, { height: e, width: t });
        },
        events: ["resize"],
      },
    },
    pn = {
      props: { pos: String, offset: null, flip: Boolean, clsPos: String },
      data: {
        pos: "bottom-" + (ct ? "right" : "left"),
        flip: !0,
        offset: !1,
        clsPos: "",
      },
      computed: {
        pos: function (t) {
          return ((t = t.pos) + (v(t, "-") ? "" : "-center")).split("-");
        },
        dir: function () {
          return this.pos[0];
        },
        align: function () {
          return this.pos[1];
        },
      },
      methods: {
        positionAt: function (t, e, i) {
          Ee(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
          var n,
            r = this.offset,
            o = this.getAxis();
          I(r) ||
            (r = (n = De(r))
              ? Qe(n)["x" === o ? "left" : "top"] -
                Qe(e)["x" === o ? "right" : "bottom"]
              : 0),
            (i = (r = Pi(
              t,
              e,
              "x" === o
                ? si(this.dir) + " " + this.align
                : this.align + " " + si(this.dir),
              "x" === o
                ? this.dir + " " + this.align
                : this.align + " " + this.dir,
              "x" === o
                ? "" + ("left" === this.dir ? -r : r)
                : " " + ("top" === this.dir ? -r : r),
              null,
              this.flip,
              i
            ).target).x),
            (r = r.y),
            (this.dir = "x" === o ? i : r),
            (this.align = "x" === o ? r : i),
            $e(
              t,
              this.clsPos + "-" + this.dir + "-" + this.align,
              !1 === this.offset
            );
        },
        getAxis: function () {
          return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
        },
      },
    },
    gn = {
      mixins: [pn, an],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        clsDrop: String,
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: !0,
        boundaryAlign: !1,
        delayShow: 0,
        delayHide: 800,
        clsDrop: !1,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
      },
      computed: {
        boundary: function (t, e) {
          return !0 === (t = t.boundary) ? window : Bt(t, e);
        },
        clsDrop: function (t) {
          return t.clsDrop || "uk-" + this.$options.name;
        },
        clsPos: function () {
          return this.clsDrop;
        },
      },
      created: function () {
        this.tracker = new pi();
      },
      connected: function () {
        Se(this.$el, this.clsDrop);
        var t = this.$props.toggle;
        this.toggle =
          t &&
          this.$create("toggle", Bt(t, this.$el), {
            target: this.$el,
            mode: this.mode,
          });
      },
      disconnected: function () {
        this.isActive() && (un = null);
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return "." + this.clsDrop + "-close";
          },
          handler: function (t) {
            t.preventDefault(), this.hide(!1);
          },
        },
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.defaultPrevented;
            t = t.current.hash;
            e || !t || Et(t, this.$el) || this.hide(!1);
          },
        },
        {
          name: "beforescroll",
          handler: function () {
            this.hide(!1);
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(),
              this.isToggled() ? this.hide(!1) : this.show(e, !1);
          },
        },
        {
          name: "toggleshow",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(), this.show(e);
          },
        },
        {
          name: "togglehide",
          self: !0,
          handler: function (t) {
            t.preventDefault(), this.hide();
          },
        },
        {
          name: vt,
          filter: function () {
            return v(this.mode, "hover");
          },
          handler: function (t) {
            ne(t) || this.clearTimers();
          },
        },
        {
          name: mt,
          filter: function () {
            return v(this.mode, "hover");
          },
          handler: function (t) {
            !ne(t) && t.relatedTarget && this.hide();
          },
        },
        {
          name: "toggled",
          self: !0,
          handler: function (t, e) {
            e && (this.clearTimers(), this.position());
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            var t = this;
            (un = this).tracker.init(),
              Xt(
                this.$el,
                "hide",
                Kt(document, ft, function (e) {
                  var i = e.target;
                  return (
                    !Et(i, t.$el) &&
                    Xt(
                      document,
                      gt + " " + wt + " scroll",
                      function (e) {
                        var n = e.defaultPrevented,
                          r = e.type;
                        e = e.target;
                        n ||
                          r !== gt ||
                          i !== e ||
                          (t.toggle && Et(i, t.toggle.$el)) ||
                          t.hide(!1);
                      },
                      !0
                    )
                  );
                }),
                { self: !0 }
              ),
              Xt(
                this.$el,
                "hide",
                Kt(document, "keydown", function (e) {
                  27 === e.keyCode && t.hide(!1);
                }),
                { self: !0 }
              );
          },
        },
        {
          name: "beforehide",
          self: !0,
          handler: function () {
            this.clearTimers();
          },
        },
        {
          name: "hide",
          handler: function (t) {
            (t = t.target),
              this.$el === t
                ? ((un = this.isActive() ? null : un), this.tracker.cancel())
                : (un =
                    null === un && Et(t, this.$el) && this.isToggled()
                      ? this
                      : un);
          },
        },
      ],
      update: {
        write: function () {
          this.isToggled() && !Ie(this.$el, this.clsEnter) && this.position();
        },
        events: ["resize"],
      },
      methods: {
        show: function (t, e) {
          var i,
            n = this;
          if (
            (void 0 === t && (t = this.toggle),
            void 0 === e && (e = !0),
            this.isToggled() &&
              t &&
              this.toggle &&
              t.$el !== this.toggle.$el &&
              this.hide(!1),
            (this.toggle = t),
            this.clearTimers(),
            !this.isActive())
          ) {
            if (un) {
              if (e && un.isDelaying)
                return void (this.showTimer = setTimeout(this.show, 10));
              for (; un && i !== un && !Et(this.$el, un.$el); )
                (i = un).hide(!1);
            }
            this.showTimer = setTimeout(function () {
              return !n.isToggled() && n.toggleElement(n.$el, !0);
            }, (e && this.delayShow) || 0);
          }
        },
        hide: function (t) {
          var e,
            i,
            n = this;
          function r() {
            return n.toggleElement(n.$el, !1, !1);
          }
          void 0 === t && (t = !0),
            this.clearTimers(),
            (this.isDelaying =
              ((e = this.$el),
              (i = []),
              _e(e, function (t) {
                return "static" !== He(t, "position") && i.push(t);
              }),
              i.some(function (t) {
                return n.tracker.movesTo(t);
              }))),
            t && this.isDelaying
              ? (this.hideTimer = setTimeout(this.hide, 50))
              : t && this.delayHide
              ? (this.hideTimer = setTimeout(r, this.delayHide))
              : r();
        },
        clearTimers: function () {
          clearTimeout(this.showTimer),
            clearTimeout(this.hideTimer),
            (this.showTimer = null),
            (this.hideTimer = null),
            (this.isDelaying = !1);
        },
        isActive: function () {
          return un === this;
        },
        position: function () {
          Me(this.$el, this.clsDrop + "-stack"),
            $e(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
          var t,
            e = Qe(this.boundary),
            i = this.boundaryAlign ? e : Qe(this.toggle.$el);
          "justify" === this.align
            ? ((t = "y" === this.getAxis() ? "width" : "height"),
              He(this.$el, t, i[t]))
            : this.boundary &&
              this.$el.offsetWidth >
                Math.max(e.right - i.left, i.right - e.left) &&
              Se(this.$el, this.clsDrop + "-stack"),
            this.positionAt(
              this.$el,
              this.boundaryAlign ? this.boundary : this.toggle.$el,
              this.boundary
            );
        },
      },
    },
    vn = {
      mixins: [sn],
      args: "target",
      props: { target: Boolean },
      data: { target: !1 },
      computed: {
        input: function (t, e) {
          return De(kt, e);
        },
        state: function () {
          return this.input.nextElementSibling;
        },
        target: function (t, e) {
          return (
            (t = t.target) &&
            ((!0 === t &&
              _t(this.input) === e &&
              this.input.nextElementSibling) ||
              Bt(t, e))
          );
        },
      },
      update: function () {
        var t,
          e,
          i = this.target,
          n = this.input;
        !i ||
          (i[(e = Ct(i) ? "value" : "textContent")] !==
            (n =
              n.files && n.files[0]
                ? n.files[0].name
                : Lt(n, "select") &&
                  (t = Te("option", n).filter(function (t) {
                    return t.selected;
                  })[0])
                ? t.textContent
                : n.value) &&
            (i[e] = n));
      },
      events: [
        {
          name: "change",
          handler: function () {
            this.$update();
          },
        },
        {
          name: "reset",
          el: function () {
            return Mt(this.$el, "form");
          },
          handler: function () {
            this.$update();
          },
        },
      ],
    },
    mn = {
      update: {
        read: function (t) {
          var e = Ai(this.$el);
          if (!e || t.isInView === e) return !1;
          t.isInView = e;
        },
        write: function () {
          this.$el.src = "" + this.$el.src;
        },
        events: ["scroll", "resize"],
      },
    },
    wn = {
      props: { margin: String, firstColumn: Boolean },
      data: { margin: "uk-margin-small-top", firstColumn: "spa-first" },
      update: {
        read: function () {
          var t = yn(this.$el.children);
          return {
            rows: t,
            columns: (function (t) {
              for (var e = [], i = 0; i < t.length; i++)
                for (
                  var n = xn(t[i], "left", "right"), r = 0;
                  r < n.length;
                  r++
                )
                  e[r] = e[r] ? e[r].concat(n[r]) : n[r];
              return ct ? e.reverse() : e;
            })(t),
          };
        },
        write: function (t) {
          for (var e = t.columns, i = t.rows, n = 0; n < i.length; n++)
            for (var r = 0; r < i[n].length; r++)
              $e(i[n][r], this.margin, 0 !== n),
                $e(i[n][r], this.firstColumn, !!~e[0].indexOf(i[n][r]));
        },
        events: ["resize"],
      },
    };
  function yn(t) {
    return xn(t, "top", "bottom");
  }
  function xn(t, e, i) {
    for (var n = [[]], r = 0; r < t.length; r++) {
      var o = t[r];
      if (bt(o))
        for (var s = bn(o), a = n.length - 1; 0 <= a; a--) {
          var l = n[a];
          if (!l[0]) {
            l.push(o);
            break;
          }
          var c =
            l[0].offsetParent === o.offsetParent
              ? bn(l[0])
              : ((s = bn(o, !0)), bn(l[0], !0));
          if (s[e] >= c[i] - 1 && s[e] !== c[e]) {
            n.push([o]);
            break;
          }
          if (s[i] - 1 > c[e] || s[e] === c[e]) {
            l.push(o);
            break;
          }
          if (0 === a) {
            n.unshift([o]);
            break;
          }
        }
    }
    return n;
  }
  function bn(t, e) {
    void 0 === e && (e = !1);
    var i = t.offsetTop,
      n = t.offsetLeft,
      r = t.offsetHeight,
      o = t.offsetWidth;
    return (
      e && ((i = (t = ei(t))[0]), (n = t[1])),
      { top: i, left: n, bottom: i + r, right: n + o }
    );
  }
  var kn = {
    extends: wn,
    mixins: [sn],
    name: "grid",
    props: { masonry: Boolean, parallax: Number },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0,
    },
    connected: function () {
      this.masonry && Se(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    update: [
      {
        write: function (t) {
          (t = t.columns), $e(this.$el, this.clsStack, t.length < 2);
        },
        events: ["resize"],
      },
      {
        read: function (t) {
          var e = t.columns,
            i = t.rows;
          if (!e.length || (!this.masonry && !this.parallax) || Cn(this.$el))
            return (t.translates = !1);
          var n,
            r,
            o = !1,
            s = It(this.$el),
            a = e.map(function (t) {
              return t.reduce(function (t, e) {
                return t + e.offsetHeight;
              }, 0);
            }),
            l =
              ((t = s),
              (n = this.margin),
              j(
                (s = t.filter(function (t) {
                  return Ie(t, n);
                })[0])
                  ? He(s, "marginTop")
                  : He(t[0], "paddingLeft")
              ) *
                (i.length - 1)),
            c = Math.max.apply(Math, a) + l;
          this.masonry &&
            ((t = e =
              e.map(function (t) {
                return U(t, "offsetTop");
              })),
            (r = i.map(function (t) {
              return Math.max.apply(
                Math,
                t.map(function (t) {
                  return t.offsetHeight;
                })
              );
            })),
            (o = t.map(function (t) {
              var e = 0;
              return t.map(function (i, n) {
                return (e += n ? r[n - 1] - t[n - 1].offsetHeight : 0);
              });
            })));
          var h = Math.abs(this.parallax);
          return {
            padding: (h =
              h &&
              a.reduce(function (t, e, i) {
                return Math.max(t, e + l + (i % 2 ? h : h / 8) - c);
              }, 0)),
            columns: e,
            translates: o,
            height: o ? c : "",
          };
        },
        write: function (t) {
          var e = t.height;
          t = t.padding;
          He(this.$el, "paddingBottom", t || ""),
            !1 !== e && He(this.$el, "height", e);
        },
        events: ["resize"],
      },
      {
        read: function (t) {
          return (
            (t = t.height),
            !Cn(this.$el) && {
              scrolled:
                !!this.parallax &&
                Bi(this.$el, t ? t - ii(this.$el) : 0) *
                  Math.abs(this.parallax),
            }
          );
        },
        write: function (t) {
          var e = t.columns,
            i = t.scrolled,
            n = t.translates;
          (!1 === i && !n) ||
            e.forEach(function (t, e) {
              return t.forEach(function (t, r) {
                return He(
                  t,
                  "transform",
                  i || n
                    ? "translateY(" +
                        ((n && -n[e][r]) + (i ? (e % 2 ? i : i / 8) : 0)) +
                        "px)"
                    : ""
                );
              });
            });
        },
        events: ["scroll", "resize"],
      },
    ],
  };
  function Cn(t) {
    return It(t).some(function (t) {
      return "absolute" === He(t, "position");
    });
  }
  var _n = {
    mixins: [
      (xr = lt
        ? {
            props: { selMinHeight: String },
            data: { selMinHeight: !1, forceHeight: !1 },
            computed: {
              elements: function (t, e) {
                return (t = t.selMinHeight) ? Te(t, e) : [e];
              },
            },
            update: [
              {
                read: function () {
                  He(this.elements, "height", "");
                },
                order: -5,
                events: ["resize"],
              },
              {
                write: function () {
                  var t = this;
                  this.elements.forEach(function (e) {
                    var i = j(He(e, "minHeight"));
                    i &&
                      (t.forceHeight ||
                        Math.round(i + oi(e, "height", "content-box")) >=
                          e.offsetHeight) &&
                      He(e, "height", i);
                  });
                },
                order: 5,
                events: ["resize"],
              },
            ],
          }
        : {}),
    ],
    args: "target",
    props: { target: String, row: Boolean },
    data: { target: "> *", row: !0, forceHeight: !0 },
    computed: {
      elements: function (t, e) {
        return Te(t.target, e);
      },
    },
    update: {
      read: function () {
        return {
          rows: (this.row ? yn(this.elements) : [this.elements]).map(Dn),
        };
      },
      write: function (t) {
        t.rows.forEach(function (t) {
          var e = t.heights;
          return t.elements.forEach(function (t, i) {
            return He(t, "minHeight", e[i]);
          });
        });
      },
      events: ["resize"],
    },
  };
  function Dn(t) {
    if (t.length < 2) return { heights: [""], elements: t };
    var e = t.map(Tn),
      i = Math.max.apply(Math, e),
      n = t.some(function (t) {
        return t.style.minHeight;
      }),
      r = t.some(function (t, n) {
        return !t.style.minHeight && e[n] < i;
      });
    return (
      n &&
        r &&
        (He(t, "minHeight", ""),
        (e = t.map(Tn)),
        (i = Math.max.apply(Math, e))),
      {
        heights: (e = t.map(function (t, n) {
          return e[n] === i && j(t.style.minHeight).toFixed(2) !== i.toFixed(2)
            ? ""
            : i;
        })),
        elements: t,
      }
    );
  }
  function Tn(t) {
    var e = !1;
    bt(t) || ((e = t.style.display), He(t, "display", "block", "important"));
    var i = Je(t).height - oi(t, "height", "content-box");
    return !1 !== e && He(t, "display", e), i;
  }
  var Ln = {
      mixins: [xr],
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number,
      },
      data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
      update: {
        read: function (t) {
          var e = t.minHeight;
          if (!bt(this.$el)) return !1;
          var i = "",
            n = oi(this.$el, "height", "content-box");
          return (
            this.expand
              ? (i =
                  ii(window) -
                    (Je(document.documentElement).height -
                      Je(this.$el).height) -
                    n || "")
              : ((i = "calc(100vh"),
                this.offsetTop &&
                  (i +=
                    0 < (t = Qe(this.$el).top) && t < ii(window) / 2
                      ? " - " + t + "px"
                      : ""),
                !0 === this.offsetBottom
                  ? (i += " - " + Je(this.$el.nextElementSibling).height + "px")
                  : I(this.offsetBottom)
                  ? (i += " - " + this.offsetBottom + "vh")
                  : this.offsetBottom && u(this.offsetBottom, "px")
                  ? (i += " - " + j(this.offsetBottom) + "px")
                  : E(this.offsetBottom) &&
                    (i +=
                      " - " +
                      Je(Bt(this.offsetBottom, this.$el)).height +
                      "px"),
                (i += (n ? " - " + n + "px" : "") + ")")),
            { minHeight: i, prev: e }
          );
        },
        write: function (t) {
          var e = t.minHeight;
          t = t.prev;
          He(this.$el, { minHeight: e }),
            e !== t && this.$update(this.$el, "resize"),
            this.minHeight &&
              j(He(this.$el, "minHeight")) < this.minHeight &&
              He(this.$el, "minHeight", this.minHeight);
        },
        events: ["resize"],
      },
    },
    Sn = {
      args: "src",
      props: {
        id: Boolean,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        class: String,
        strokeAnimation: Boolean,
        focusable: Boolean,
        attributes: "list",
      },
      data: {
        ratio: 1,
        include: ["style", "class", "focusable"],
        class: "",
        strokeAnimation: !1,
      },
      beforeConnect: function () {
        this.class += " uk-svg";
      },
      connected: function () {
        var t,
          e = this;
        !this.icon &&
          v(this.src, "#") &&
          ((t = this.src.split("#")), (this.src = t[0]), (this.icon = t[1])),
          (this.svg = this.getSvg().then(function (t) {
            if (e._connected) {
              var i = (function (t, e) {
                if (xt(e) || "CANVAS" === e.tagName) {
                  e.hidden = !0;
                  var i = e.nextElementSibling;
                  return $n(t, i) ? i : ge(e, t);
                }
                return $n(t, (i = e.lastElementChild)) ? i : fe(e, t);
              })(t, e.$el);
              return (
                e.svgEl && i !== e.svgEl && me(e.svgEl),
                e.applyAttributes(i, t),
                e.$emit(),
                (e.svgEl = i)
              );
            }
          }, G));
      },
      disconnected: function () {
        var t = this;
        this.svg.then(function (e) {
          t._connected ||
            (xt(t.$el) && (t.$el.hidden = !1), me(e), (t.svgEl = null));
        }),
          (this.svg = null);
      },
      update: {
        read: function () {
          return !!(this.strokeAnimation && this.svgEl && bt(this.svgEl));
        },
        write: function () {
          var t, e;
          (e = In((t = this.svgEl))) &&
            t.style.setProperty("--uk-animation-stroke", e);
        },
        type: ["resize"],
      },
      methods: {
        getSvg: function () {
          var t = this;
          return Mn(this.src).then(function (e) {
            return (
              (function (t, e) {
                return (
                  e &&
                    v(t, "<symbol") &&
                    (t =
                      (function (t, e) {
                        var i;
                        if (!An[t])
                          for (An[t] = {}, En.lastIndex = 0; (i = En.exec(t)); )
                            An[t][i[3]] =
                              '<svg xmlns="http://www.w3.org/2000/svg"' +
                              i[1] +
                              "svg>";
                        return An[t][e];
                      })(t, e) || t),
                  (t = De(t.substr(t.indexOf("<svg")))) &&
                    t.hasChildNodes() &&
                    t
                );
              })(e, t.icon) || se.reject("SVG not found.")
            );
          });
        },
        applyAttributes: function (t, e) {
          var i,
            n,
            r = this;
          for (i in this.$options.props)
            v(this.include, i) && i in this && nt(t, i, this[i]);
          for (n in this.attributes) {
            var o = (s = this.attributes[n].split(":", 2))[0],
              s = s[1];
            nt(t, o, s);
          }
          this.id || ot(t, "id");
          var a = ["width", "height"],
            l = a.map(function (t) {
              return r[t];
            });
          l.some(function (t) {
            return t;
          }) ||
            (l = a.map(function (t) {
              return nt(e, t);
            }));
          var c = nt(e, "viewBox");
          c &&
            !l.some(function (t) {
              return t;
            }) &&
            (l = c.split(" ").slice(2)),
            l.forEach(function (e, i) {
              return nt(t, a[i], j(e) * r.ratio || null);
            });
        },
      },
    },
    Mn = it(function (t) {
      return new se(function (e, i) {
        t
          ? c(t, "data:")
            ? e(decodeURIComponent(t.split(",")[1]))
            : ce(t).then(
                function (t) {
                  return e(t.response);
                },
                function () {
                  return i("SVG not found.");
                }
              )
          : i();
      });
    }),
    En = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    An = {};
  function In(t) {
    return Math.ceil(
      Math.max.apply(
        Math,
        [0].concat(
          Te("[stroke]", t).map(function (t) {
            try {
              return t.getTotalLength();
            } catch (t) {
              return 0;
            }
          })
        )
      )
    );
  }
  function $n(t, e) {
    return Bn(t) && Bn(e) && Nn(t) === Nn(e);
  }
  function Bn(t) {
    return t && "svg" === t.tagName;
  }
  function Nn(t) {
    return (
      t.innerHTML ||
      new XMLSerializer()
        .serializeToString(t)
        .replace(/<svg.*?>(.*?)<\/svg>/g, "$1")
    ).replace(/\s/g, "");
  }
  var On = {
      spinner:
        '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
      totop:
        '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
      marker:
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
      "close-icon":
        '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
      "close-large":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
      "navbar-toggle-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
      "overlay-icon":
        '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
      "pagination-next":
        '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
      "pagination-previous":
        '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
      "search-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      "search-large":
        '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
      "search-navbar":
        '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
      "slidenav-next":
        '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
      "slidenav-next-large":
        '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
      "slidenav-previous":
        '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
      "slidenav-previous-large":
        '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
    },
    jn = {
      install: function (t) {
        t.icon.add = function (e, i) {
          var n,
            r = E(e) ? (((n = {})[e] = i), n) : e;
          K(r, function (t, e) {
            (On[e] = t), delete Rn[e];
          }),
            t._initialized &&
              _e(document.body, function (e) {
                return K(t.getComponents(e), function (t) {
                  t.$options.isIcon && t.icon in r && t.$reset();
                });
              });
        };
      },
      extends: Sn,
      args: "icon",
      props: ["icon"],
      data: { include: ["focusable"] },
      isIcon: !0,
      beforeConnect: function () {
        Se(this.$el, "uk-icon");
      },
      methods: {
        getSvg: function () {
          var t = (function (t) {
            return On[t]
              ? (Rn[t] ||
                  (Rn[t] = De(
                    (
                      On[
                        (function (t) {
                          return ct
                            ? q(q(t, "left", "right"), "previous", "next")
                            : t;
                        })(t)
                      ] || On[t]
                    ).trim()
                  )),
                Rn[t].cloneNode(!0))
              : null;
          })(this.icon);
          return t ? se.resolve(t) : se.reject("Icon not found.");
        },
      },
    },
    Hn = {
      args: !1,
      extends: jn,
      data: function (t) {
        return { icon: n(t.constructor.options.name) };
      },
      beforeConnect: function () {
        Se(this.$el, this.$name);
      },
    },
    Pn = {
      extends: Hn,
      beforeConnect: function () {
        Se(this.$el, "uk-slidenav");
      },
      computed: {
        icon: function (t, e) {
          return (t = t.icon), Ie(e, "uk-slidenav-large") ? t + "-large" : t;
        },
      },
    },
    zn = {
      extends: Hn,
      computed: {
        icon: function (t, e) {
          return (
            (t = t.icon),
            Ie(e, "uk-search-icon") && At(e, ".uk-search-large").length
              ? "search-large"
              : At(e, ".uk-search-navbar").length
              ? "search-navbar"
              : t
          );
        },
      },
    },
    Wn = {
      extends: Hn,
      computed: {
        icon: function () {
          return "close-" + (Ie(this.$el, "uk-close-large") ? "large" : "icon");
        },
      },
    },
    Fn = {
      extends: Hn,
      connected: function () {
        var t = this;
        this.svg.then(function (e) {
          return (
            e &&
            1 !== t.ratio &&
            He(De("circle", e), "strokeWidth", 1 / t.ratio)
          );
        });
      },
    },
    Rn = {},
    qn = {
      args: "dataSrc",
      props: {
        dataSrc: String,
        dataSrcset: Boolean,
        sizes: String,
        width: Number,
        height: Number,
        offsetTop: String,
        offsetLeft: String,
        target: String,
      },
      data: {
        dataSrc: "",
        dataSrcset: !1,
        sizes: !1,
        width: !1,
        height: !1,
        offsetTop: "50vh",
        offsetLeft: "50vw",
        target: !1,
      },
      computed: {
        cacheKey: function (t) {
          return (t = t.dataSrc), this.$name + "." + t;
        },
        width: function (t) {
          var e = t.width;
          t = t.dataWidth;
          return e || t;
        },
        height: function (t) {
          var e = t.height;
          t = t.dataHeight;
          return e || t;
        },
        sizes: function (t) {
          var e = t.sizes;
          t = t.dataSizes;
          return e || t;
        },
        isImg: function (t, e) {
          return Gn(e);
        },
        target: {
          get: function (t) {
            return (t = t.target), [this.$el].concat(Nt(t, this.$el));
          },
          watch: function () {
            this.observe();
          },
        },
        offsetTop: function (t) {
          return ai(t.offsetTop, "height");
        },
        offsetLeft: function (t) {
          return ai(t.offsetLeft, "width");
        },
      },
      connected: function () {
        window.IntersectionObserver
          ? (Qn[this.cacheKey]
              ? Yn(this.$el, Qn[this.cacheKey], this.dataSrcset, this.sizes)
              : this.isImg &&
                this.width &&
                this.height &&
                Yn(
                  this.$el,
                  (function (t, e, i) {
                    return (
                      i &&
                        ((t = (i = tt.ratio(
                          { width: t, height: e },
                          "width",
                          ai(Kn(i))
                        )).width),
                        (e = i.height)),
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' +
                        t +
                        '" height="' +
                        e +
                        '"></svg>'
                    );
                  })(this.width, this.height, this.sizes)
                ),
            (this.observer = new IntersectionObserver(this.load, {
              rootMargin: this.offsetTop + "px " + this.offsetLeft + "px",
            })),
            requestAnimationFrame(this.observe))
          : Yn(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
      },
      disconnected: function () {
        this.observer && this.observer.disconnect();
      },
      update: {
        read: function (t) {
          var e = this;
          t = t.image;
          return (
            !!this.observer &&
            (t ||
              "complete" !== document.readyState ||
              this.load(this.observer.takeRecords()),
            !this.isImg &&
              void (
                t &&
                t.then(function (t) {
                  return t && "" !== t.currentSrc && Yn(e.$el, Jn(t));
                })
              ))
          );
        },
        write: function (t) {
          var e, i, n;
          this.dataSrcset &&
            1 !== window.devicePixelRatio &&
            ((!(i = He(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) &&
              j(i) !== t.bgSize) ||
              ((t.bgSize =
                ((e = this.dataSrcset),
                (i = this.sizes),
                (n = ai(Kn(i))),
                (e = (e.match(Zn) || []).map(j).sort(function (t, e) {
                  return t - e;
                })).filter(function (t) {
                  return n <= t;
                })[0] ||
                  e.pop() ||
                  "")),
              He(this.$el, "backgroundSize", t.bgSize + "px")));
        },
        events: ["resize"],
      },
      methods: {
        load: function (t) {
          var e = this;
          t.some(function (t) {
            return B(t.isIntersecting) || t.isIntersecting;
          }) &&
            ((this._data.image = he(
              this.dataSrc,
              this.dataSrcset,
              this.sizes
            ).then(
              function (t) {
                return (
                  Yn(e.$el, Jn(t), t.srcset, t.sizes),
                  (Qn[e.cacheKey] = Jn(t)),
                  t
                );
              },
              function (t) {
                return Zt(e.$el, new t.constructor(t.type, t));
              }
            )),
            this.observer.disconnect());
        },
        observe: function () {
          var t = this;
          this._connected &&
            !this._data.image &&
            this.target.forEach(function (e) {
              return t.observer.observe(e);
            });
        },
      },
    };
  function Yn(t, e, i, n) {
    Gn(t)
      ? (n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e))
      : e &&
        !v(t.style.backgroundImage, e) &&
        (He(t, "backgroundImage", "url(" + Vt(e) + ")"), Zt(t, Gt("load", !1)));
  }
  var Vn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
  function Kn(t) {
    var e, i;
    for (Vn.lastIndex = 0; (e = Vn.exec(t)); )
      if (!e[1] || window.matchMedia(e[1]).matches) {
        e = c((i = e[2]), "calc")
          ? i
              .slice(5, -1)
              .replace(Un, function (t) {
                return ai(t);
              })
              .replace(/ /g, "")
              .match(Xn)
              .reduce(function (t, e) {
                return t + +e;
              }, 0)
          : i;
        break;
      }
    return e || "100vw";
  }
  var Un = /\d+(?:\w+|%)/g,
    Xn = /[+-]?(\d+)/g,
    Zn = /\s+\d+w\s*(?:,|$)/g;
  function Gn(t) {
    return "IMG" === t.tagName;
  }
  function Jn(t) {
    return t.currentSrc || t.src;
  }
  var Qn,
    tr = "__test__";
  try {
    ((Qn = window.sessionStorage || {})[tr] = 1), delete Qn[tr];
  } catch (dr) {
    Qn = {};
  }
  var er = {
      props: { media: Boolean },
      data: { media: !1 },
      computed: {
        matchMedia: function () {
          var t = (function (t) {
            if (E(t))
              if ("@" === t[0]) t = j(Fe("breakpoint-" + t.substr(1)));
              else if (isNaN(t)) return t;
            return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
          })(this.media);
          return !t || window.matchMedia(t).matches;
        },
      },
    },
    ir = {
      mixins: [sn, er],
      props: { fill: String },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill",
      },
      computed: {
        fill: function (t) {
          return t.fill || Fe("leader-fill-content");
        },
      },
      connected: function () {
        var t = ye(this.$el, '<span class="' + this.clsWrapper + '">');
        this.wrapper = t[0];
      },
      disconnected: function () {
        xe(this.wrapper.childNodes);
      },
      update: {
        read: function (t) {
          var e = t.changed,
            i = t.width;
          t = i;
          return {
            width: (i = Math.floor(this.$el.offsetWidth / 2)),
            fill: this.fill,
            changed: e || t !== i,
            hide: !this.matchMedia,
          };
        },
        write: function (t) {
          $e(this.wrapper, this.clsHide, t.hide),
            t.changed &&
              ((t.changed = !1),
              nt(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)));
        },
        events: ["resize"],
      },
    },
    nr = {
      props: { container: Boolean },
      data: { container: !0 },
      computed: {
        container: function (t) {
          return (!0 === (t = t.container) && this.$container) || (t && De(t));
        },
      },
    },
    rr = [];
  function or(t) {
    var e = t.transitionElement,
      i = t._toggle;
    return function (t, n) {
      return new se(function (r, o) {
        return Xt(t, "show hide", function () {
          t._reject && t._reject(), (t._reject = o), i(t, n);
          var s = Xt(
              e,
              "transitionstart",
              function () {
                Xt(e, "transitionend transitioncancel", r, { self: !0 }),
                  clearTimeout(a);
              },
              { self: !0 }
            ),
            a = setTimeout(function () {
              s(), r();
            }, F(He(e, "transitionDuration")));
        });
      }).then(function () {
        return delete t._reject;
      });
    };
  }
  var sr = {
      install: function (t) {
        var e = t.modal;
        function i(t, i, n, r) {
          i = Y({ bgClose: !1, escClose: !0, labels: e.labels }, i);
          var o = e.dialog(t(i), i),
            s = new oe(),
            a = !1;
          return (
            Kt(o.$el, "submit", "form", function (t) {
              t.preventDefault(), s.resolve(r && r(o)), (a = !0), o.hide();
            }),
            Kt(o.$el, "hide", function () {
              return !a && n(s);
            }),
            (s.promise.dialog = o),
            s.promise
          );
        }
        (e.dialog = function (t, i) {
          var n = e(
            '<div class="uk-modal"> <div class="uk-modal-dialog">' +
              t +
              "</div> </div>",
            i
          );
          return (
            n.show(),
            Kt(
              n.$el,
              "hidden",
              function () {
                return se.resolve().then(function () {
                  return n.$destroy(!0);
                });
              },
              { self: !0 }
            ),
            n
          );
        }),
          (e.alert = function (t, e) {
            return i(
              function (e) {
                return (
                  (e = e.labels),
                  '<div class="uk-modal-body">' +
                    (E(t) ? t : de(t)) +
                    '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                    e.ok +
                    "</button> </div>"
                );
              },
              e,
              function (t) {
                return t.resolve();
              }
            );
          }),
          (e.confirm = function (t, e) {
            return i(
              function (e) {
                return (
                  (e = e.labels),
                  '<form> <div class="uk-modal-body">' +
                    (E(t) ? t : de(t)) +
                    '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                    e.cancel +
                    '</button> <button class="uk-button uk-button-primary" autofocus>' +
                    e.ok +
                    "</button> </div> </form>"
                );
              },
              e,
              function (t) {
                return t.reject();
              }
            );
          }),
          (e.prompt = function (t, e, n) {
            return i(
              function (i) {
                return (
                  (i = i.labels),
                  '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                    (E(t) ? t : de(t)) +
                    '</label> <input class="uk-input" value="' +
                    (e || "") +
                    '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                    i.cancel +
                    '</button> <button class="uk-button uk-button-primary">' +
                    i.ok +
                    "</button> </div> </form>"
                );
              },
              n,
              function (t) {
                return t.resolve(null);
              },
              function (t) {
                return De("input", t.$el).value;
              }
            );
          }),
          (e.labels = { ok: "Ok", cancel: "Cancel" });
      },
      mixins: [
        (Yr = {
          mixins: [sn, nr, an],
          props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
          },
          data: {
            cls: "uk-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
          },
          computed: {
            panel: function (t, e) {
              return De(t.selPanel, e);
            },
            transitionElement: function () {
              return this.panel;
            },
            bgClose: function (t) {
              return t.bgClose && this.panel;
            },
          },
          beforeDisconnect: function () {
            this.isToggled() && this.toggleElement(this.$el, !1, !1);
          },
          events: [
            {
              name: "click",
              delegate: function () {
                return this.selClose;
              },
              handler: function (t) {
                t.preventDefault(), this.hide();
              },
            },
            {
              name: "toggle",
              self: !0,
              handler: function (t) {
                t.defaultPrevented ||
                  (t.preventDefault(),
                  this.isToggled() === v(rr, this) && this.toggle());
              },
            },
            {
              name: "beforeshow",
              self: !0,
              handler: function (t) {
                if (v(rr, this)) return !1;
                !this.stack && rr.length
                  ? (se
                      .all(
                        rr.map(function (t) {
                          return t.hide();
                        })
                      )
                      .then(this.show),
                    t.preventDefault())
                  : rr.push(this);
              },
            },
            {
              name: "show",
              self: !0,
              handler: function () {
                var t = this;
                ni(window) - ni(document) &&
                  this.overlay &&
                  He(document.body, "overflowY", "scroll"),
                  this.stack &&
                    He(
                      this.$el,
                      "zIndex",
                      j(He(this.$el, "zIndex")) + rr.length
                    ),
                  Se(document.documentElement, this.clsPage),
                  this.bgClose &&
                    Xt(
                      this.$el,
                      "hide",
                      Kt(document, ft, function (e) {
                        var i = e.target;
                        V(rr) !== t ||
                          (t.overlay && !Et(i, t.$el)) ||
                          Et(i, t.panel) ||
                          Xt(
                            document,
                            gt + " " + wt + " scroll",
                            function (e) {
                              var n = e.defaultPrevented,
                                r = e.type;
                              e = e.target;
                              n || r !== gt || i !== e || t.hide();
                            },
                            !0
                          );
                      }),
                      { self: !0 }
                    ),
                  this.escClose &&
                    Xt(
                      this.$el,
                      "hide",
                      Kt(document, "keydown", function (e) {
                        27 === e.keyCode && V(rr) === t && t.hide();
                      }),
                      { self: !0 }
                    );
              },
            },
            {
              name: "hidden",
              self: !0,
              handler: function () {
                var t = this;
                rr.splice(rr.indexOf(this), 1),
                  rr.length || He(document.body, "overflowY", ""),
                  He(this.$el, "zIndex", ""),
                  rr.some(function (e) {
                    return e.clsPage === t.clsPage;
                  }) || Me(document.documentElement, this.clsPage);
              },
            },
          ],
          methods: {
            toggle: function () {
              return this.isToggled() ? this.hide() : this.show();
            },
            show: function () {
              var t = this;
              return this.isToggled()
                ? se.resolve()
                : this.container && _t(this.$el) !== this.container
                ? (fe(this.container, this.$el),
                  new se(function (e) {
                    return requestAnimationFrame(function () {
                      return t.show().then(e);
                    });
                  }))
                : this.toggleElement(this.$el, !0, or(this));
            },
            hide: function () {
              return this.isToggled()
                ? this.toggleElement(this.$el, !1, or(this))
                : se.resolve();
            },
          },
        }),
      ],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose:
          ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
      },
      events: [
        {
          name: "show",
          self: !0,
          handler: function () {
            Ie(this.panel, "uk-margin-auto-vertical")
              ? Se(this.$el, "uk-flex")
              : He(this.$el, "display", "block"),
              ii(this.$el);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            He(this.$el, "display", ""), Me(this.$el, "uk-flex");
          },
        },
      ],
    },
    ar = {
      extends: cn,
      data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
    },
    lr = {
      mixins: [sn, xr],
      props: {
        dropdown: String,
        mode: "list",
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarMode: String,
        dropbarAnchor: Boolean,
        duration: Number,
      },
      data: {
        dropdown: ".uk-navbar-nav > li",
        align: ct ? "right" : "left",
        clsDrop: "uk-navbar-dropdown",
        mode: void 0,
        offset: void 0,
        delayShow: void 0,
        delayHide: void 0,
        boundaryAlign: void 0,
        flip: "x",
        boundary: !0,
        dropbar: !1,
        dropbarMode: "slide",
        dropbarAnchor: !1,
        duration: 200,
        forceHeight: !0,
        selMinHeight:
          ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
      },
      computed: {
        boundary: function (t, e) {
          var i = t.boundary;
          t = t.boundaryAlign;
          return !0 === i || t ? e : i;
        },
        dropbarAnchor: function (t, e) {
          return Bt(t.dropbarAnchor, e);
        },
        pos: function (t) {
          return "bottom-" + t.align;
        },
        dropbar: {
          get: function (t) {
            return (t = t.dropbar)
              ? (t =
                  this._dropbar ||
                  Bt(t, this.$el) ||
                  De("+ .uk-navbar-dropbar", this.$el)) ||
                  (this._dropbar = De("<div></div>"))
              : null;
          },
          watch: function (t) {
            Se(t, "uk-navbar-dropbar");
          },
          immediate: !0,
        },
        dropdowns: {
          get: function (t, e) {
            return Te(t.dropdown + " ." + t.clsDrop, e);
          },
          watch: function (t) {
            var e = this;
            this.$create(
              "drop",
              t.filter(function (t) {
                return !e.getDropdown(t);
              }),
              Y({}, this.$props, {
                boundary: this.boundary,
                pos: this.pos,
                offset: this.dropbar || this.offset,
              })
            );
          },
          immediate: !0,
        },
      },
      disconnected: function () {
        this.dropbar && me(this.dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover",
          delegate: function () {
            return this.dropdown;
          },
          handler: function (t) {
            var e = t.current;
            (t = this.getActive()) &&
              t.toggle &&
              !Et(t.toggle.$el, e) &&
              !t.tracker.movesTo(t.$el) &&
              t.hide(!1);
          },
        },
        {
          name: "mouseleave",
          el: function () {
            return this.dropbar;
          },
          handler: function () {
            var t = this.getActive();
            t &&
              !this.dropdowns.some(function (t) {
                return Lt(t, ":hover");
              }) &&
              t.hide();
          },
        },
        {
          name: "beforeshow",
          capture: !0,
          filter: function () {
            return this.dropbar;
          },
          handler: function () {
            _t(this.dropbar) ||
              ge(this.dropbarAnchor || this.$el, this.dropbar);
          },
        },
        {
          name: "show",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el;
            e = e.dir;
            Ie(i, this.clsDrop) &&
              ("slide" === this.dropbarMode &&
                Se(this.dropbar, "uk-navbar-dropbar-slide"),
              this.clsDrop && Se(i, this.clsDrop + "-dropbar"),
              "bottom" === e &&
                this.transitionTo(
                  i.offsetHeight +
                    j(He(i, "marginTop")) +
                    j(He(i, "marginBottom")),
                  i
                ));
          },
        },
        {
          name: "beforehide",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el;
            e = this.getActive();
            Lt(this.dropbar, ":hover") &&
              e &&
              e.$el === i &&
              t.preventDefault();
          },
        },
        {
          name: "hide",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el;
            !Ie(i, this.clsDrop) ||
              ((!(e = this.getActive()) || (e && e.$el === i)) &&
                this.transitionTo(0));
          },
        },
      ],
      methods: {
        getActive: function () {
          var t = this.dropdowns.map(this.getDropdown).filter(function (t) {
            return t && t.isActive();
          })[0];
          return t && v(t.mode, "hover") && Et(t.toggle.$el, this.$el) && t;
        },
        transitionTo: function (t, e) {
          var i = this,
            n = this.dropbar,
            r = bt(n) ? ii(n) : 0;
          return (
            He(
              (e = r < t && e),
              "clip",
              "rect(0," + e.offsetWidth + "px," + r + "px,0)"
            ),
            ii(n, r),
            Ve.cancel([e, n]),
            se
              .all([
                Ve.start(n, { height: t }, this.duration),
                Ve.start(
                  e,
                  { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" },
                  this.duration
                ),
              ])
              .catch(G)
              .then(function () {
                He(e, { clip: "" }), i.$update(n);
              })
          );
        },
        getDropdown: function (t) {
          return (
            this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
          );
        },
      },
    },
    cr = {
      mixins: [Yr],
      args: "mode",
      props: { mode: String, flip: Boolean, overlay: Boolean },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: !1,
      },
      computed: {
        clsFlip: function (t) {
          var e = t.flip;
          t = t.clsFlip;
          return e ? t : "";
        },
        clsOverlay: function (t) {
          var e = t.overlay;
          t = t.clsOverlay;
          return e ? t : "";
        },
        clsMode: function (t) {
          var e = t.mode;
          return t.clsMode + "-" + e;
        },
        clsSidebarAnimation: function (t) {
          var e = t.mode;
          t = t.clsSidebarAnimation;
          return "none" === e || "reveal" === e ? "" : t;
        },
        clsContainerAnimation: function (t) {
          var e = t.mode;
          t = t.clsContainerAnimation;
          return "push" !== e && "reveal" !== e ? "" : t;
        },
        transitionElement: function (t) {
          return "reveal" === t.mode ? _t(this.panel) : this.panel;
        },
      },
      update: {
        read: function () {
          this.isToggled() && !bt(this.$el) && this.hide();
        },
        events: ["resize"],
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.current.hash;
            !t.defaultPrevented && e && De(e, document.body) && this.hide();
          },
        },
        {
          name: "touchstart",
          passive: !0,
          el: function () {
            return this.panel;
          },
          handler: function (t) {
            1 === (t = t.targetTouches).length && (this.clientY = t[0].clientY);
          },
        },
        {
          name: "touchmove",
          self: !0,
          passive: !1,
          filter: function () {
            return this.overlay;
          },
          handler: function (t) {
            t.cancelable && t.preventDefault();
          },
        },
        {
          name: "touchmove",
          passive: !1,
          el: function () {
            return this.panel;
          },
          handler: function (t) {
            var e, i, n, r;
            1 === t.targetTouches.length &&
              ((e = event.targetTouches[0].clientY - this.clientY),
              (i = (r = this.panel).scrollTop),
              ((n = r.scrollHeight) <= (r = r.clientHeight) ||
                (0 === i && 0 < e) ||
                (n - i <= r && e < 0)) &&
                t.cancelable &&
                t.preventDefault());
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            "reveal" !== this.mode ||
              Ie(_t(this.panel), this.clsMode) ||
              (we(this.panel, "<div>"), Se(_t(this.panel), this.clsMode)),
              He(
                document.documentElement,
                "overflowY",
                this.overlay ? "hidden" : ""
              ),
              Se(document.body, this.clsContainer, this.clsFlip),
              He(document.body, "touch-action", "pan-y pinch-zoom"),
              He(this.$el, "display", "block"),
              Se(this.$el, this.clsOverlay),
              Se(
                this.panel,
                this.clsSidebarAnimation,
                "reveal" !== this.mode ? this.clsMode : ""
              ),
              ii(document.body),
              Se(document.body, this.clsContainerAnimation),
              this.clsContainerAnimation &&
                (hr().content += ",user-scalable=0");
          },
        },
        {
          name: "hide",
          self: !0,
          handler: function () {
            Me(document.body, this.clsContainerAnimation),
              He(document.body, "touch-action", "");
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            var t;
            this.clsContainerAnimation &&
              ((t = hr()).content = t.content.replace(/,user-scalable=0$/, "")),
              "reveal" === this.mode && xe(this.panel),
              Me(this.panel, this.clsSidebarAnimation, this.clsMode),
              Me(this.$el, this.clsOverlay),
              He(this.$el, "display", ""),
              Me(document.body, this.clsContainer, this.clsFlip),
              He(document.documentElement, "overflowY", "");
          },
        },
        {
          name: "swipeLeft swipeRight",
          handler: function (t) {
            this.isToggled() && u(t.type, "Left") ^ this.flip && this.hide();
          },
        },
      ],
    };
  function hr() {
    return (
      De('meta[name="viewport"]', document.head) ||
      fe(document.head, '<meta name="viewport">')
    );
  }
  var ur = {
      mixins: [sn],
      props: { selContainer: String, selContent: String },
      data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog" },
      computed: {
        container: function (t, e) {
          return Mt(e, t.selContainer);
        },
        content: function (t, e) {
          return Mt(e, t.selContent);
        },
      },
      connected: function () {
        He(this.$el, "minHeight", 150);
      },
      update: {
        read: function () {
          return (
            !!(this.content && this.container && bt(this.$el)) && {
              current: j(He(this.$el, "maxHeight")),
              max: Math.max(
                150,
                ii(this.container) - (Je(this.content).height - ii(this.$el))
              ),
            }
          );
        },
        write: function (t) {
          var e = t.current;
          t = t.max;
          He(this.$el, "maxHeight", t),
            Math.round(e) !== Math.round(t) && Zt(this.$el, "resize");
        },
        events: ["resize"],
      },
    },
    dr =
      ((f = {
        props: ["width", "height"],
        connected: function () {
          Se(this.$el, "uk-responsive-width");
        },
        update: {
          read: function () {
            return (
              !!(bt(this.$el) && this.width && this.height) && {
                width: ni(_t(this.$el)),
                height: this.height,
              }
            );
          },
          write: function (t) {
            ii(
              this.$el,
              tt.contain({ height: this.height, width: this.width }, t).height
            );
          },
          events: ["resize"],
        },
      }),
      {
        props: { offset: Number },
        data: { offset: 0 },
        methods: {
          scrollTo: function (t) {
            var e = this;
            (t = (t && De(t)) || document.body),
              Zt(this.$el, "beforescroll", [this, t]) &&
                $i(t, { offset: this.offset }).then(function () {
                  return Zt(e.$el, "scrolled", [e, t]);
                });
          },
        },
        events: {
          click: function (t) {
            t.defaultPrevented ||
              (t.preventDefault(),
              this.scrollTo(
                "#" + Vt(decodeURIComponent((this.$el.hash || "").substr(1)))
              ));
          },
        },
      }),
    fr = "_ukScrollspy",
    pr =
      ((ht = {
        args: "cls",
        props: {
          cls: String,
          target: String,
          hidden: Boolean,
          offsetTop: Number,
          offsetLeft: Number,
          repeat: Boolean,
          delay: Number,
        },
        data: function () {
          return {
            cls: !1,
            target: !1,
            hidden: !0,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: !1,
            delay: 0,
            inViewClass: "main-box-inview",
          };
        },
        computed: {
          elements: {
            get: function (t, e) {
              return (t = t.target) ? Te(t, e) : [e];
            },
            watch: function (t) {
              this.hidden &&
                He(
                  Dt(t, ":not(." + this.inViewClass + ")"),
                  "visibility",
                  "hidden"
                );
            },
            immediate: !0,
          },
        },
        disconnected: function () {
          var t = this;
          this.elements.forEach(function (e) {
            Me(e, t.inViewClass, e[fr] ? e[fr].cls : ""), delete e[fr];
          });
        },
        update: [
          {
            read: function (t) {
              var e = this;
              t.update &&
                this.elements.forEach(function (t) {
                  t[fr] || (t[fr] = { cls: st(t, "main-box-class") || e.cls }),
                    (t[fr].show = Ai(t, e.offsetTop, e.offsetLeft));
                });
            },
            write: function (t) {
              var e = this;
              if (!t.update) return this.$emit(), (t.update = !0);
              this.elements.forEach(function (i) {
                function n(t) {
                  He(i, "visibility", !t && e.hidden ? "hidden" : ""),
                    $e(i, e.inViewClass, t),
                    $e(i, r.cls),
                    Zt(i, t ? "inview" : "outview"),
                    (r.inview = t),
                    e.$update(i);
                }
                var r = i[fr];
                !r.show || r.inview || r.queued
                  ? !r.show && r.inview && !r.queued && e.repeat && n(!1)
                  : ((r.queued = !0),
                    (t.promise = (t.promise || se.resolve())
                      .then(function () {
                        return new se(function (t) {
                          return setTimeout(t, e.delay);
                        });
                      })
                      .then(function () {
                        n(!0),
                          setTimeout(function () {
                            (r.queued = !1), e.$emit();
                          }, 300);
                      })));
              });
            },
            events: ["scroll", "resize"],
          },
        ],
      }),
      (ut = {
        props: {
          cls: String,
          closest: String,
          scroll: Boolean,
          overflow: Boolean,
          offset: Number,
        },
        data: {
          cls: "uk-active",
          closest: !1,
          scroll: !1,
          overflow: !0,
          offset: 0,
        },
        computed: {
          links: {
            get: function (t, e) {
              return Te('a[href^="#"]', e).filter(function (t) {
                return t.hash;
              });
            },
            watch: function (t) {
              this.scroll &&
                this.$create("scroll", t, { offset: this.offset || 0 });
            },
            immediate: !0,
          },
          targets: function () {
            return Te(
              this.links
                .map(function (t) {
                  return Vt(t.hash).substr(1);
                })
                .join(",")
            );
          },
          elements: function (t) {
            return (t = t.closest), Mt(this.links, t || "*");
          },
        },
        update: [
          {
            read: function () {
              var t = this,
                e = this.targets.length;
              if (!e || !bt(this.$el)) return !1;
              var i = Ni(this.targets, /auto|scroll/, !0)[0],
                n = i.clientHeight,
                r = i.scrollTop,
                o = i.scrollHeight,
                s = !1;
              return (
                r === o - n
                  ? (s = e - 1)
                  : (this.targets.every(function (e, n) {
                      if (Qe(e).top - Qe(Oi(i)).top - t.offset <= 0)
                        return (s = n), !0;
                    }),
                    !1 === s && this.overflow && (s = 0)),
                { active: s }
              );
            },
            write: function (t) {
              (t = t.active),
                this.links.forEach(function (t) {
                  return t.blur();
                }),
                Me(this.elements, this.cls),
                !1 !== t &&
                  Zt(this.$el, "active", [t, Se(this.elements[t], this.cls)]);
            },
            events: ["scroll", "resize"],
          },
        ],
      }),
      {
        mixins: [sn, er],
        props: {
          top: null,
          bottom: Boolean,
          offset: String,
          animation: String,
          clsActive: String,
          clsInactive: String,
          clsFixed: String,
          clsBelow: String,
          selTarget: String,
          widthElement: Boolean,
          showOnUp: Boolean,
          targetOffset: Number,
        },
        data: {
          top: 0,
          bottom: !1,
          offset: 0,
          animation: "",
          clsActive: "uk-active",
          clsInactive: "",
          clsFixed: "uk-sticky-fixed",
          clsBelow: "uk-sticky-below",
          selTarget: "",
          widthElement: !1,
          showOnUp: !1,
          targetOffset: !1,
        },
        computed: {
          offset: function (t) {
            return ai(t.offset);
          },
          selTarget: function (t, e) {
            return ((t = t.selTarget) && De(t, e)) || e;
          },
          widthElement: function (t, e) {
            return Bt(t.widthElement, e) || this.placeholder;
          },
          isActive: {
            get: function () {
              return Ie(this.selTarget, this.clsActive);
            },
            set: function (t) {
              t && !this.isActive
                ? (Ae(this.selTarget, this.clsInactive, this.clsActive),
                  Zt(this.$el, "active"))
                : t ||
                  Ie(this.selTarget, this.clsInactive) ||
                  (Ae(this.selTarget, this.clsActive, this.clsInactive),
                  Zt(this.$el, "inactive"));
            },
          },
        },
        connected: function () {
          (this.placeholder =
            De("+ .uk-sticky-placeholder", this.$el) ||
            De('<div class="uk-sticky-placeholder"></div>')),
            (this.isFixed = !1),
            (this.isActive = !1);
        },
        disconnected: function () {
          this.isFixed && (this.hide(), Me(this.selTarget, this.clsInactive)),
            me(this.placeholder),
            (this.placeholder = null),
            (this.widthElement = null);
        },
        events: [
          {
            name: "load hashchange popstate",
            el: function () {
              return window;
            },
            handler: function () {
              var t,
                e = this;
              !1 !== this.targetOffset &&
                location.hash &&
                0 < window.pageYOffset &&
                (t = De(location.hash)) &&
                ci.read(function () {
                  var i = Qe(t).top,
                    n = Qe(e.$el).top,
                    r = e.$el.offsetHeight;
                  e.isFixed &&
                    i <= n + r &&
                    n <= i + t.offsetHeight &&
                    Ii(
                      window,
                      i -
                        r -
                        (I(e.targetOffset) ? e.targetOffset : 0) -
                        e.offset
                    );
                });
            },
          },
        ],
        update: [
          {
            read: function (t, e) {
              return (
                (t = t.height),
                (this.inactive = !this.matchMedia || !bt(this.$el)),
                !this.inactive &&
                  (this.isActive &&
                    e.has("resize") &&
                    (this.hide(), (t = this.$el.offsetHeight), this.show()),
                  (t = this.isActive ? t : this.$el.offsetHeight),
                  (this.topOffset = Qe(
                    this.isFixed ? this.placeholder : this.$el
                  ).top),
                  (this.bottomOffset = this.topOffset + t),
                  (e = gr("bottom", this)),
                  (this.top =
                    Math.max(j(gr("top", this)), this.topOffset) - this.offset),
                  (this.bottom = e && e - this.$el.offsetHeight),
                  (this.width = Je(
                    bt(this.widthElement) ? this.widthElement : this.$el
                  ).width),
                  {
                    height: t,
                    top: ei(this.placeholder)[0],
                    margins: He(this.$el, [
                      "marginTop",
                      "marginBottom",
                      "marginLeft",
                      "marginRight",
                    ]),
                  })
              );
            },
            write: function (t) {
              var e = t.height,
                i = t.margins;
              He((t = this.placeholder), Y({ height: e }, i)),
                Et(t, document) || (ge(this.$el, t), (t.hidden = !0)),
                (this.isActive = !!this.isActive);
            },
            events: ["resize"],
          },
          {
            read: function (t) {
              return (
                void 0 === (t = t.scroll) && (t = 0),
                (this.scroll = window.pageYOffset),
                { dir: t <= this.scroll ? "down" : "up", scroll: this.scroll }
              );
            },
            write: function (t, e) {
              var i = this,
                n = Date.now(),
                r = e.has("scroll"),
                o = t.initTimestamp;
              void 0 === o && (o = 0);
              var s = t.dir,
                a = t.lastDir,
                l = t.lastScroll,
                c = t.scroll;
              e = t.top;
              (t.lastScroll = c) < 0 ||
                (c === l && r) ||
                (this.showOnUp && !r && !this.isFixed) ||
                ((300 < n - o || s !== a) &&
                  ((t.initScroll = c), (t.initTimestamp = n)),
                (t.lastDir = s),
                (this.showOnUp &&
                  !this.isFixed &&
                  Math.abs(t.initScroll - c) <= 30 &&
                  Math.abs(l - c) <= 10) ||
                  (this.inactive ||
                  c < this.top ||
                  (this.showOnUp &&
                    (c <= this.top ||
                      ("down" === s && r) ||
                      ("up" === s && !this.isFixed && c <= this.bottomOffset)))
                    ? this.isFixed
                      ? ((this.isFixed = !1),
                        this.animation && c > this.topOffset
                          ? (Ze.cancel(this.$el),
                            Ze.out(this.$el, this.animation).then(function () {
                              return i.hide();
                            }, G))
                          : this.hide())
                      : Ze.inProgress(this.$el) &&
                        c < e &&
                        (Ze.cancel(this.$el), this.hide())
                    : this.isFixed
                    ? this.update()
                    : this.animation
                    ? (Ze.cancel(this.$el),
                      this.show(),
                      Ze.in(this.$el, this.animation).catch(G))
                    : this.show()));
            },
            events: ["resize", "scroll"],
          },
        ],
        methods: {
          show: function () {
            (this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
          },
          hide: function () {
            (this.isActive = !1),
              Me(this.$el, this.clsFixed, this.clsBelow),
              He(this.$el, { position: "", top: "", width: "" }),
              (this.placeholder.hidden = !0);
          },
          update: function () {
            var t = 0 !== this.top || this.scroll > this.top,
              e = Math.max(0, this.offset);
            I(this.bottom) &&
              this.scroll > this.bottom - this.offset &&
              (e = this.bottom - this.scroll),
              He(this.$el, {
                position: "fixed",
                top: e + "px",
                width: this.width,
              }),
              (this.isActive = t),
              $e(this.$el, this.clsBelow, this.scroll > this.bottomOffset),
              Se(this.$el, this.clsFixed);
          },
        },
      });
  function gr(t, e) {
    var i = e.$props,
      n = e.$el;
    e = e[t + "Offset"];
    if ((t = i[t]))
      return E(t) && t.match(/^-?\d/)
        ? e + ai(t)
        : Qe(!0 === t ? _t(n) : Bt(t, n)).bottom;
  }
  Ri = {
    mixins: [sn],
    extends: (yr = {
      mixins: [an],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        active: Number,
        swiping: Boolean,
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        active: 0,
        swiping: !0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
      },
      computed: {
        connects: {
          get: function (t, e) {
            return Nt(t.connect, e);
          },
          watch: function (t) {
            var e = this;
            this.swiping && He(t, "touch-action", "pan-y pinch-zoom");
            var i = this.index();
            this.connects.forEach(function (t) {
              return It(t).forEach(function (t, n) {
                return $e(t, e.cls, n === i);
              });
            });
          },
          immediate: !0,
        },
        toggles: {
          get: function (t, e) {
            return Te(t.toggle, e).filter(function (t) {
              return !Lt(t, ".uk-disabled *, .uk-disabled, [disabled]");
            });
          },
          watch: function (t) {
            var e = this.index();
            this.show((~e && e) || t[this.active] || t[0]);
          },
          immediate: !0,
        },
        children: function () {
          var t = this;
          return It(this.$el).filter(function (e) {
            return t.toggles.some(function (t) {
              return Et(t, e);
            });
          });
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.toggle;
          },
          handler: function (t) {
            t.preventDefault(), this.show(t.current);
          },
        },
        {
          name: "click",
          el: function () {
            return this.connects;
          },
          delegate: function () {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler: function (t) {
            t.preventDefault(), this.show(st(t.current, this.attrItem));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter: function () {
            return this.swiping;
          },
          el: function () {
            return this.connects;
          },
          handler: function (t) {
            (t = t.type), this.show(u(t, "Left") ? "next" : "previous");
          },
        },
      ],
      methods: {
        index: function () {
          var t = this;
          return w(this.children, function (e) {
            return Ie(e, t.cls);
          });
        },
        show: function (t) {
          var e = this,
            i = this.index(),
            n = et(this.children[et(t, this.toggles, i)], It(this.$el));
          i !== n &&
            (this.children.forEach(function (t, i) {
              $e(t, e.cls, n === i), nt(e.toggles[i], "aria-expanded", n === i);
            }),
            this.connects.forEach(function (t) {
              var r = t.children;
              return e
                .toggleElement(
                  z(r).filter(function (t) {
                    return Ie(t, e.cls);
                  }),
                  !1,
                  0 <= i
                )
                .then(function () {
                  return e.toggleElement(r[n], !0, 0 <= i);
                });
            }));
        },
      },
    }),
    props: { media: Boolean },
    data: { media: 960, attrItem: "uk-tab-item" },
    connected: function () {
      var t = Ie(this.$el, "uk-tab-left")
        ? "uk-tab-left"
        : !!Ie(this.$el, "uk-tab-right") && "uk-tab-right";
      t &&
        this.$create("toggle", this.$el, {
          cls: t,
          mode: "media",
          media: this.media,
        });
    },
  };
  var vr,
    mr,
    wr,
    yr,
    xr = {
      mixins: [er, an],
      args: "target",
      props: { href: String, target: null, mode: "list", queued: Boolean },
      data: { href: !1, target: !1, mode: "click", queued: !0 },
      computed: {
        target: {
          get: function (t, e) {
            var i = t.href;
            return ((t = Nt((t = t.target) || i, e)).length && t) || [e];
          },
          watch: function () {
            this.updateAria();
          },
          immediate: !0,
        },
      },
      events: [
        {
          name: vt + " " + mt,
          filter: function () {
            return v(this.mode, "hover");
          },
          handler: function (t) {
            ne(t) || this.toggle("toggle" + (t.type === vt ? "show" : "hide"));
          },
        },
        {
          name: "click",
          filter: function () {
            return v(this.mode, "click") || (dt && v(this.mode, "hover"));
          },
          handler: function (t) {
            var e;
            (Mt(t.target, 'a[href="#"], a[href=""]') ||
              ((e = Mt(t.target, "a[href]")) &&
                (!br(this.target, this.cls) ||
                  (e.hash && Lt(this.target, e.hash))))) &&
              t.preventDefault(),
              this.toggle();
          },
        },
        {
          name: "toggled",
          self: !0,
          el: function () {
            return this.target;
          },
          handler: function (t, e) {
            this.updateAria(e);
          },
        },
      ],
      update: {
        read: function () {
          return (
            !(!v(this.mode, "media") || !this.media) && {
              match: this.matchMedia,
            }
          );
        },
        write: function (t) {
          var e = t.match;
          t = this.isToggled(this.target);
          (e ? !t : t) && this.toggle();
        },
        events: ["resize"],
      },
      methods: {
        toggle: function (t) {
          var e = this;
          if (Zt(this.target, t || "toggle", [this])) {
            if (!this.queued) return this.toggleElement(this.target);
            var i,
              n = this.target.filter(function (t) {
                return Ie(t, e.clsLeave);
              });
            n.length
              ? this.target.forEach(function (t) {
                  var i = v(n, t);
                  e.toggleElement(t, i, i);
                })
              : ((i = this.target.filter(this.isToggled)),
                this.toggleElement(i, !1).then(function () {
                  return e.toggleElement(
                    e.target.filter(function (t) {
                      return !v(i, t);
                    }),
                    !0
                  );
                }));
          }
        },
        updateAria: function (t) {
          nt(this.$el, "aria-expanded", M(t) ? t : br(this.target, this.cls));
        },
      },
    };
  function br(t, e) {
    return e ? Ie(t, e.split(" ")[0]) : bt(t);
  }
  function kr(t) {
    for (var e = t.addedNodes, i = t.removedNodes, n = 0; n < e.length; n++)
      _e(e[n], mr);
    for (var r = 0; r < i.length; r++) _e(i[r], wr);
  }
  function Cr(t) {
    var e = t.target,
      i = t.attributeName;
    (t = tn(i)) &&
      t in vr &&
      (rt(e, i) ? vr[t](e) : (t = vr.getComponent(e, t)) && t.$destroy());
  }
  K(
    Object.freeze({
      __proto__: null,
      Accordion: cn,
      Alert: dn,
      Cover: fn,
      Drop: gn,
      Dropdown: gn,
      FormCustom: vn,
      Gif: mn,
      Grid: kn,
      HeightMatch: _n,
      HeightViewport: Ln,
      Icon: jn,
      Img: qn,
      Leader: ir,
      Margin: wn,
      Modal: sr,
      Nav: ar,
      Navbar: lr,
      Offcanvas: cr,
      OverflowAuto: ur,
      Responsive: f,
      Scroll: dr,
      Scrollspy: ht,
      ScrollspyNav: ut,
      Sticky: pr,
      Svg: Sn,
      Switcher: yr,
      Tab: Ri,
      Toggle: xr,
      Video: io,
      Close: Wn,
      Spinner: Fn,
      SlidenavNext: Pn,
      SlidenavPrevious: Pn,
      SearchIcon: zn,
      Marker: Hn,
      NavbarToggleIcon: Hn,
      OverlayIcon: Hn,
      PaginationNext: Hn,
      PaginationPrevious: Hn,
      Totop: Hn,
    }),
    function (t, e) {
      return qi.component(e, t);
    }
  ),
    qi.use(function (t) {
      var e, i, n, r;
      at &&
        ((i = function () {
          e ||
            ((e = !0),
            ci.write(function () {
              return (e = !1);
            }),
            t.update(null, "resize"));
        }),
        Kt(window, "load resize", i),
        Kt(document, "loadedmetadata load", i, !0),
        "ResizeObserver" in window &&
          new ResizeObserver(i).observe(document.documentElement),
        Kt(
          window,
          "scroll",
          function (e) {
            n ||
              ((n = !0),
              ci.write(function () {
                return (n = !1);
              }),
              t.update(null, e.type));
          },
          { passive: !0, capture: !0 }
        ),
        (r = 0),
        Kt(
          document,
          "animationstart",
          function (t) {
            (He((t = t.target), "animationName") || "").match(
              /^uk-.*(left|right)/
            ) &&
              (r++,
              He(document.documentElement, "overflowX", "hidden"),
              setTimeout(function () {
                --r || He(document.documentElement, "overflowX", "");
              }, F(He(t, "animationDuration")) + 100));
          },
          !0
        ),
        Kt(
          document,
          ft,
          function (t) {
            var e, i;
            ne(t) &&
              ((e = re(t)),
              (i = "tagName" in t.target ? t.target : _t(t.target)),
              Xt(document, gt + " " + wt + " scroll", function (t) {
                var n = re(t),
                  r = n.x,
                  o = n.y;
                (("scroll" !== t.type && i && r && 100 < Math.abs(e.x - r)) ||
                  (o && 100 < Math.abs(e.y - o))) &&
                  setTimeout(function () {
                    var t, n, s, a;
                    Zt(i, "swipe"),
                      Zt(
                        i,
                        "swipe" +
                          ((t = e.x),
                          (n = e.y),
                          (s = r),
                          (a = o),
                          Math.abs(t - s) >= Math.abs(n - a)
                            ? 0 < t - s
                              ? "Left"
                              : "Right"
                            : 0 < n - a
                            ? "Up"
                            : "Down")
                      );
                  });
              }));
          },
          { passive: !0 }
        ));
    }),
    (mr = (vr = qi).connect),
    (wr = vr.disconnect),
    at &&
      window.MutationObserver &&
      ci.read(function () {
        document.body && _e(document.body, mr),
          new MutationObserver(function (t) {
            return t.forEach(kr);
          }).observe(document, { childList: !0, subtree: !0 }),
          new MutationObserver(function (t) {
            return t.forEach(Cr);
          }).observe(document, { attributes: !0, subtree: !0 }),
          (vr._initialized = !0);
      }),
    (yr = {
      mixins: [sn],
      props: { date: String, clsWrapper: String },
      data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
      computed: {
        date: function (t) {
          return (t = t.date), Date.parse(t);
        },
        days: function (t, e) {
          return De(t.clsWrapper.replace("%unit%", "days"), e);
        },
        hours: function (t, e) {
          return De(t.clsWrapper.replace("%unit%", "hours"), e);
        },
        minutes: function (t, e) {
          return De(t.clsWrapper.replace("%unit%", "minutes"), e);
        },
        seconds: function (t, e) {
          return De(t.clsWrapper.replace("%unit%", "seconds"), e);
        },
        units: function () {
          var t = this;
          return ["days", "hours", "minutes", "seconds"].filter(function (e) {
            return t[e];
          });
        },
      },
      connected: function () {
        this.start();
      },
      disconnected: function () {
        var t = this;
        this.stop(),
          this.units.forEach(function (e) {
            return ue(t[e]);
          });
      },
      events: [
        {
          name: "visibilitychange",
          el: function () {
            return document;
          },
          handler: function () {
            document.hidden ? this.stop() : this.start();
          },
        },
      ],
      update: {
        write: function () {
          var t = this,
            e = (function (t) {
              return {
                total: (t -= Date.now()),
                seconds: (t / 1e3) % 60,
                minutes: (t / 1e3 / 60) % 60,
                hours: (t / 1e3 / 60 / 60) % 24,
                days: t / 1e3 / 60 / 60 / 24,
              };
            })(this.date);
          e.total <= 0 &&
            (this.stop(), (e.days = e.hours = e.minutes = e.seconds = 0)),
            this.units.forEach(function (i) {
              var n = (n = String(Math.floor(e[i]))).length < 2 ? "0" + n : n,
                r = t[i];
              r.textContent !== n &&
                ((n = n.split("")).length !== r.children.length &&
                  de(
                    r,
                    n
                      .map(function () {
                        return "<span></span>";
                      })
                      .join("")
                  ),
                n.forEach(function (t, e) {
                  return (r.children[e].textContent = t);
                }));
            });
        },
      },
      methods: {
        start: function () {
          this.stop(),
            this.date &&
              this.units.length &&
              (this.$update(), (this.timer = setInterval(this.$update, 1e3)));
        },
        stop: function () {
          this.timer && (clearInterval(this.timer), (this.timer = null));
        },
      },
    });
  var _r = "uk-transition-leave",
    Dr = "uk-transition-enter";
  function Tr(t, e, i, n) {
    void 0 === n && (n = 0);
    var r = Lr(e, !0),
      o = { opacity: 1 },
      s = { opacity: 0 },
      a = (l = function (t) {
        return function () {
          return r === Lr(e) ? t() : se.reject();
        };
      })(function () {
        return (
          Se(e, _r),
          se
            .all(
              Mr(e).map(function (t, e) {
                return new se(function (r) {
                  return setTimeout(function () {
                    return Ve.start(t, s, i / 2, "ease").then(r);
                  }, e * n);
                });
              })
            )
            .then(function () {
              return Me(e, _r);
            })
        );
      }),
      l = l(function () {
        var a = ii(e);
        return (
          Se(e, Dr),
          t(),
          He(It(e), { opacity: 0 }),
          new se(function (t) {
            return requestAnimationFrame(function () {
              var l = It(e),
                c = ii(e);
              ii(e, a);
              var h = Mr(e);
              He(l, s);
              var u = h.map(function (t, e) {
                return new se(function (r) {
                  return setTimeout(function () {
                    return Ve.start(t, o, i / 2, "ease").then(r);
                  }, e * n);
                });
              });
              a !== c &&
                u.push(
                  Ve.start(e, { height: c }, i / 2 + h.length * n, "ease")
                ),
                se.all(u).then(function () {
                  Me(e, Dr),
                    r === Lr(e) &&
                      (He(e, "height", ""),
                      He(l, { opacity: "" }),
                      delete e.dataset.transition),
                    t();
                });
            });
          })
        );
      });
    return (Ie(e, _r) ? Sr(e) : Ie(e, Dr) ? Sr(e).then(a) : a()).then(l);
  }
  function Lr(t, e) {
    return (
      e && (t.dataset.transition = 1 + Lr(t)), O(t.dataset.transition) || 0
    );
  }
  function Sr(t) {
    return se.all(
      It(t)
        .filter(Ve.inProgress)
        .map(function (t) {
          return new se(function (e) {
            return Xt(t, "transitionend transitioncanceled", e);
          });
        })
    );
  }
  function Mr(t) {
    return yn(It(t)).reduce(function (t, e) {
      return t.concat(
        U(
          e.filter(function (t) {
            return Ai(t);
          }),
          "offsetLeft"
        )
      );
    }, []);
  }
  function Er(t, e, i) {
    return new se(function (n) {
      return requestAnimationFrame(function () {
        var r = It(e),
          o = r.map(function (t) {
            return Ar(t, !0);
          }),
          s = He(e, ["height", "padding"]);
        Ve.cancel(e),
          r.forEach(Ve.cancel),
          Ir(e),
          t(),
          (r = r.concat(
            It(e).filter(function (t) {
              return !v(r, t);
            })
          )),
          se.resolve().then(function () {
            ci.flush();
            var t,
              a,
              l,
              c,
              h,
              u = He(e, ["height", "padding"]),
              d = (h =
                ((t = e),
                (l = o),
                (h = (c = (a = r).map(function (t, e) {
                  return (
                    !(!_t(t) || !(e in l)) &&
                    (l[e]
                      ? bt(t)
                        ? $r(t)
                        : { opacity: 0 }
                      : { opacity: bt(t) ? 1 : 0 })
                  );
                })).map(function (e, i) {
                  return (
                    !!(i = _t(a[i]) === t && (l[i] || Ar(a[i]))) &&
                    (e
                      ? "opacity" in e ||
                        (i.opacity % 1 ? (e.opacity = 1) : delete i.opacity)
                      : delete i.opacity,
                    i)
                  );
                })),
                [c, h]))[0],
              f = h[1];
            r.forEach(function (t, e) {
              return f[e] && He(t, f[e]);
            }),
              He(e, Y({ display: "block" }, s)),
              requestAnimationFrame(function () {
                var t = r
                  .map(function (t, n) {
                    return _t(t) === e && Ve.start(t, d[n], i, "ease");
                  })
                  .concat(Ve.start(e, u, i, "ease"));
                se.all(t)
                  .then(function () {
                    r.forEach(function (t, i) {
                      return (
                        _t(t) === e &&
                        He(t, "display", 0 === d[i].opacity ? "none" : "")
                      );
                    }),
                      Ir(e);
                  }, G)
                  .then(n);
              });
          });
      });
    });
  }
  function Ar(t, e) {
    var i = He(t, "zIndex");
    return (
      !!bt(t) &&
      Y(
        {
          display: "",
          opacity: e ? He(t, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: "auto" === i ? $t(t) : i,
        },
        $r(t)
      )
    );
  }
  function Ir(t) {
    He(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      marginTop: "",
      marginLeft: "",
      transform: "",
      width: "",
      zIndex: "",
    }),
      He(t, { height: "", display: "", padding: "" });
  }
  function $r(t) {
    var e,
      i,
      n = (e = Qe(t)).height,
      r = e.width;
    return {
      top: (e = (i = ti(t)).top),
      left: (i = i.left),
      height: n,
      width: r,
      marginLeft: (t = He(t, ["marginTop", "marginLeft"])).marginLeft,
      marginTop: t.marginTop,
      transform: "",
    };
  }
  function Br(t, e) {
    return yi(st(t, e), ["filter"]);
  }
  function Nr(t, e, i) {
    var n,
      r = (n = Br(t, e)).filter;
    (t = n.group), (e = n.sort);
    return (
      void 0 === (n = n.order) && (n = "asc"),
      (r || B(e)) &&
        (t
          ? r
            ? (delete i.filter[""], (i.filter[t] = r))
            : (delete i.filter[t],
              ($(i.filter) || "" in i.filter) && (i.filter = { "": r || "" }))
          : (i.filter = { "": r || "" })),
      B(e) || (i.sort = [e, n]),
      i
    );
  }
  function Or(t) {
    return Math.abs(He(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function jr(t, e) {
    return (
      void 0 === t && (t = 0),
      void 0 === e && (e = "%"),
      (t += t ? e : ""),
      lt ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
    );
  }
  function Hr(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }
  xr = {
    mixins: [
      (Ri = {
        props: { duration: Number, animation: String },
        data: { duration: 150, animation: "slide" },
        methods: {
          animate: function (t, e) {
            var i = this;
            void 0 === e && (e = this.$el);
            var n = this.animation;
            return (
              "fade" === n
                ? Tr
                : "delayed-fade" === n
                ? function () {
                    for (var t = [], e = arguments.length; e--; )
                      t[e] = arguments[e];
                    return Tr.apply(void 0, t.concat([40]));
                  }
                : Er
            )(t, e, this.duration).then(function () {
              return i.$update(e, "resize");
            }, G);
          },
        },
      }),
    ],
    args: "target",
    props: { target: Boolean, selActive: Boolean },
    data: {
      target: null,
      selActive: !1,
      attrItem: "uk-filter-control",
      cls: "uk-active",
      duration: 250,
    },
    computed: {
      toggles: {
        get: function (t, e) {
          return (
            t.attrItem,
            Te("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
          );
        },
        watch: function () {
          var t,
            e = this;
          this.updateState(),
            !1 !== this.selActive &&
              ((t = Te(this.selActive, this.$el)),
              this.toggles.forEach(function (i) {
                return $e(i, e.cls, v(t, i));
              }));
        },
        immediate: !0,
      },
      children: {
        get: function (t, e) {
          return Te(t.target + " > *", e);
        },
        watch: function (t, e) {
          var i;
          (i = e),
            ((t = t).length === i.length &&
              t.every(function (t) {
                return ~i.indexOf(t);
              })) ||
              this.updateState();
        },
      },
    },
    events: [
      {
        name: "click",
        delegate: function () {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        },
        handler: function (t) {
          t.preventDefault(), this.apply(t.current);
        },
      },
    ],
    methods: {
      apply: function (t) {
        var e,
          i,
          n = this.getState();
        t = Nr(t, this.attrItem, this.getState());
        (e = n),
          (i = t),
          ["filter", "sort"].every(function (t) {
            return R(e[t], i[t]);
          }) || this.setState(t);
      },
      getState: function () {
        var t = this;
        return this.toggles
          .filter(function (e) {
            return Ie(e, t.cls);
          })
          .reduce(
            function (e, i) {
              return Nr(i, t.attrItem, e);
            },
            { filter: { "": "" }, sort: [] }
          );
      },
      setState: function (t, e) {
        var i = this;
        void 0 === e && (e = !0),
          (t = Y({ filter: { "": "" }, sort: [] }, t)),
          Zt(this.$el, "beforeFilter", [this, t]),
          this.toggles.forEach(function (e) {
            return $e(
              e,
              i.cls,
              !!(function (t, e, i) {
                var n = i.filter;
                void 0 === n && (n = { "": "" });
                var r,
                  o = (r = i.sort)[0],
                  s = r[1];
                return (
                  void 0 === (r = (i = Br(t, e)).filter) && (r = ""),
                  void 0 === (t = i.group) && (t = ""),
                  (e = i.sort),
                  void 0 === (i = i.order) && (i = "asc"),
                  B(e)
                    ? (t in n && r === n[t]) || (!r && t && !(t in n) && !n[""])
                    : o === e && s === i
                );
              })(e, i.attrItem, t)
            );
          }),
          se
            .all(
              Te(this.target, this.$el).map(function (n) {
                function r() {
                  !(function (t, e, i) {
                    var n = (function (t) {
                      t = t.filter;
                      var e = "";
                      return (
                        K(t, function (t) {
                          return (e += t || "");
                        }),
                        e
                      );
                    })(t);
                    i.forEach(function (t) {
                      return He(t, "display", n && !Lt(t, n) ? "none" : "");
                    });
                    t = (r = t.sort)[0];
                    var r = r[1];
                    t &&
                      (R(
                        (r = (function (t, e, i) {
                          return Y([], t).sort(function (t, n) {
                            return (
                              st(t, e).localeCompare(st(n, e), void 0, {
                                numeric: !0,
                              }) * ("asc" === i || -1)
                            );
                          });
                        })(i, t, r)),
                        i
                      ) ||
                        fe(e, r));
                  })(t, n, It(n)),
                    i.$update(i.$el);
                }
                return e ? i.animate(r, n) : r();
              })
            )
            .then(function () {
              return Zt(i.$el, "afterFilter", [i]);
            });
      },
      updateState: function () {
        var t = this;
        ci.write(function () {
          return t.setState(t.getState(), !1);
        });
      },
    },
  };
  var Pr = Y(
    {},
    (io = {
      slide: {
        show: function (t) {
          return [{ transform: jr(-100 * t) }, { transform: jr() }];
        },
        percent: Or,
        translate: function (t, e) {
          return [
            { transform: jr(-100 * e * t) },
            { transform: jr(100 * e * (1 - t)) },
          ];
        },
      },
    }),
    {
      fade: {
        show: function () {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent: function (t) {
          return 1 - He(t, "opacity");
        },
        translate: function (t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        },
      },
      scale: {
        show: function () {
          return [
            { opacity: 0, transform: Hr(0.8) },
            { opacity: 1, transform: Hr(1) },
          ];
        },
        percent: function (t) {
          return 1 - He(t, "opacity");
        },
        translate: function (t) {
          return [
            { opacity: 1 - t, transform: Hr(1 - 0.2 * t) },
            { opacity: t, transform: Hr(0.8 + 0.2 * t) },
          ];
        },
      },
    }
  );
  function zr(t, e, i) {
    Zt(t, Gt(e, !1, !1, i));
  }
  function Wr(t) {
    return 0.5 * t + 300;
  }
  var Fr = {
    mixins: [
      nr,
      Yr,
      an,
      (Fn = {
        mixins: [
          (Wn = {
            mixins: [
              {
                props: {
                  autoplay: Boolean,
                  autoplayInterval: Number,
                  pauseOnHover: Boolean,
                },
                data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
                connected: function () {
                  this.autoplay && this.startAutoplay();
                },
                disconnected: function () {
                  this.stopAutoplay();
                },
                update: function () {
                  nt(this.slides, "tabindex", "-1");
                },
                events: [
                  {
                    name: "visibilitychange",
                    el: function () {
                      return document;
                    },
                    filter: function () {
                      return this.autoplay;
                    },
                    handler: function () {
                      document.hidden
                        ? this.stopAutoplay()
                        : this.startAutoplay();
                    },
                  },
                ],
                methods: {
                  startAutoplay: function () {
                    var t = this;
                    this.stopAutoplay(),
                      (this.interval = setInterval(function () {
                        return (
                          (!t.draggable || !De(":focus", t.$el)) &&
                          (!t.pauseOnHover || !Lt(t.$el, ":hover")) &&
                          !t.stack.length &&
                          t.show("next")
                        );
                      }, this.autoplayInterval));
                  },
                  stopAutoplay: function () {
                    this.interval && clearInterval(this.interval);
                  },
                },
              },
              {
                props: { draggable: Boolean },
                data: { draggable: !0, threshold: 10 },
                created: function () {
                  var t = this;
                  ["start", "move", "end"].forEach(function (e) {
                    var i = t[e];
                    t[e] = function (e) {
                      var n = re(e).x * (ct ? -1 : 1);
                      (t.prevPos = n !== t.pos ? t.pos : t.prevPos),
                        (t.pos = n),
                        i(e);
                    };
                  });
                },
                events: [
                  {
                    name: ft,
                    delegate: function () {
                      return this.selSlides;
                    },
                    handler: function (t) {
                      var e;
                      !this.draggable ||
                        (!ne(t) &&
                          !(e = t.target).children.length &&
                          e.childNodes.length) ||
                        Mt(t.target, kt) ||
                        0 < t.button ||
                        this.length < 2 ||
                        this.start(t);
                    },
                  },
                  {
                    name: "dragstart",
                    handler: function (t) {
                      t.preventDefault();
                    },
                  },
                ],
                methods: {
                  start: function () {
                    (this.drag = this.pos),
                      this._transitioner
                        ? ((this.percent = this._transitioner.percent()),
                          (this.drag +=
                            this._transitioner.getDistance() *
                            this.percent *
                            this.dir),
                          this._transitioner.cancel(),
                          this._transitioner.translate(this.percent),
                          (this.dragging = !0),
                          (this.stack = []))
                        : (this.prevIndex = this.index),
                      Kt(this.list, "touchmove", this.move, { passive: !1 }),
                      Kt(document, pt, this.move, { passive: !1 }),
                      Kt(document, gt + " " + wt, this.end, !0),
                      He(this.list, "userSelect", "none");
                  },
                  move: function (t) {
                    var e = this;
                    if (
                      !(
                        0 == (c = this.pos - this.drag) ||
                        this.prevPos === this.pos ||
                        (!this.dragging && Math.abs(c) < this.threshold)
                      )
                    ) {
                      t.cancelable && t.preventDefault(),
                        (this.dragging = !0),
                        (this.dir = c < 0 ? 1 : -1);
                      for (
                        var i = this.slides,
                          n = this.prevIndex,
                          r = Math.abs(c),
                          o = this.getIndex(n + this.dir, n),
                          s = this._getDistance(n, o) || i[n].offsetWidth;
                        o !== n && s < r;

                      )
                        (this.drag -= s * this.dir),
                          (n = o),
                          (r -= s),
                          (o = this.getIndex(n + this.dir, n)),
                          (s = this._getDistance(n, o) || i[n].offsetWidth);
                      this.percent = r / s;
                      var a,
                        l = i[n],
                        c = ((t = i[o]), this.index !== o),
                        h = n === o;
                      [this.index, this.prevIndex]
                        .filter(function (t) {
                          return !v([o, n], t);
                        })
                        .forEach(function (t) {
                          Zt(i[t], "itemhidden", [e]),
                            h && ((a = !0), (e.prevIndex = n));
                        }),
                        ((this.index === n && this.prevIndex !== n) || a) &&
                          Zt(i[this.index], "itemshown", [this]),
                        c &&
                          ((this.prevIndex = n),
                          (this.index = o),
                          h || Zt(l, "beforeitemhide", [this]),
                          Zt(t, "beforeitemshow", [this])),
                        (this._transitioner = this._translate(
                          Math.abs(this.percent),
                          l,
                          !h && t
                        )),
                        c &&
                          (h || Zt(l, "itemhide", [this]),
                          Zt(t, "itemshow", [this]));
                    }
                  },
                  end: function () {
                    var t;
                    Ut(this.list, "touchmove", this.move, { passive: !1 }),
                      Ut(document, pt, this.move, { passive: !1 }),
                      Ut(document, gt + " " + wt, this.end, !0),
                      this.dragging &&
                        ((this.dragging = null),
                        this.index === this.prevIndex
                          ? ((this.percent = 1 - this.percent),
                            (this.dir *= -1),
                            this._show(!1, this.index, !0),
                            (this._transitioner = null))
                          : ((t =
                              (ct ? this.dir * (ct ? 1 : -1) : this.dir) < 0 ==
                              this.prevPos > this.pos),
                            (this.index = t ? this.index : this.prevIndex),
                            t && (this.percent = 1 - this.percent),
                            this.show(
                              (0 < this.dir && !t) || (this.dir < 0 && t)
                                ? "next"
                                : "previous",
                              !0
                            ))),
                      He(this.list, { userSelect: "", pointerEvents: "" }),
                      (this.drag = this.percent = null);
                  },
                },
              },
              {
                data: { selNav: !1 },
                computed: {
                  nav: function (t, e) {
                    return De(t.selNav, e);
                  },
                  selNavItem: function (t) {
                    return "[" + (t = t.attrItem) + "],[data-" + t + "]";
                  },
                  navItems: function (t, e) {
                    return Te(this.selNavItem, e);
                  },
                },
                update: {
                  write: function () {
                    var t = this;
                    this.nav &&
                      this.length !== this.nav.children.length &&
                      de(
                        this.nav,
                        this.slides
                          .map(function (e, i) {
                            return (
                              "<li " +
                              t.attrItem +
                              '="' +
                              i +
                              '"><a href></a></li>'
                            );
                          })
                          .join("")
                      ),
                      this.navItems.concat(this.nav).forEach(function (e) {
                        return e && (e.hidden = !t.maxIndex);
                      }),
                      this.updateNav();
                  },
                  events: ["resize"],
                },
                events: [
                  {
                    name: "click",
                    delegate: function () {
                      return this.selNavItem;
                    },
                    handler: function (t) {
                      t.preventDefault(),
                        this.show(st(t.current, this.attrItem));
                    },
                  },
                  { name: "itemshow", handler: "updateNav" },
                ],
                methods: {
                  updateNav: function () {
                    var t = this,
                      e = this.getValidIndex();
                    this.navItems.forEach(function (i) {
                      var n = st(i, t.attrItem);
                      $e(i, t.clsActive, O(n) === e),
                        $e(
                          i,
                          "uk-invisible",
                          t.finite &&
                            (("previous" === n && 0 === e) ||
                              ("next" === n && e >= t.maxIndex))
                        );
                    });
                  },
                },
              },
            ],
            props: {
              clsActivated: Boolean,
              easing: String,
              index: Number,
              finite: Boolean,
              velocity: Number,
              selSlides: String,
            },
            data: function () {
              return {
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {},
              };
            },
            connected: function () {
              (this.prevIndex = -1),
                (this.index = this.getValidIndex(this.$props.index)),
                (this.stack = []);
            },
            disconnected: function () {
              Me(this.slides, this.clsActive);
            },
            computed: {
              duration: function (t, e) {
                return (t = t.velocity), Wr(e.offsetWidth / t);
              },
              list: function (t, e) {
                return De(t.selList, e);
              },
              maxIndex: function () {
                return this.length - 1;
              },
              selSlides: function (t) {
                return t.selList + " " + (t.selSlides || "> *");
              },
              slides: {
                get: function () {
                  return Te(this.selSlides, this.$el);
                },
                watch: function () {
                  this.$reset();
                },
              },
              length: function () {
                return this.slides.length;
              },
            },
            events: {
              itemshown: function () {
                this.$update(this.list);
              },
            },
            methods: {
              show: function (t, e) {
                var i = this;
                if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
                  var n = this.stack,
                    r = e ? 0 : n.length,
                    o = function () {
                      n.splice(r, 1), n.length && i.show(n.shift(), !0);
                    };
                  if ((n[e ? "unshift" : "push"](t), !e && 1 < n.length))
                    2 === n.length &&
                      this._transitioner.forward(Math.min(this.duration, 200));
                  else {
                    var s = this.getIndex(this.index),
                      a = Ie(this.slides, this.clsActive) && this.slides[s],
                      l = this.getIndex(t, this.index),
                      c = this.slides[l];
                    if (a !== c)
                      return (
                        (this.dir =
                          "next" !== (t = t) && ("previous" === t || t < s)
                            ? -1
                            : 1),
                        (this.prevIndex = s),
                        (this.index = l),
                        (a && !Zt(a, "beforeitemhide", [this])) ||
                        !Zt(c, "beforeitemshow", [this, a])
                          ? ((this.index = this.prevIndex), void o())
                          : ((e = this._show(a, c, e).then(function () {
                              return (
                                a && Zt(a, "itemhidden", [i]),
                                Zt(c, "itemshown", [i]),
                                new se(function (t) {
                                  ci.write(function () {
                                    n.shift(),
                                      n.length
                                        ? i.show(n.shift(), !0)
                                        : (i._transitioner = null),
                                      t();
                                  });
                                })
                              );
                            })),
                            a && Zt(a, "itemhide", [this]),
                            Zt(c, "itemshow", [this]),
                            e)
                      );
                    o();
                  }
                }
              },
              getIndex: function (t, e) {
                return (
                  void 0 === t && (t = this.index),
                  void 0 === e && (e = this.index),
                  Z(et(t, this.slides, e, this.finite), 0, this.maxIndex)
                );
              },
              getValidIndex: function (t, e) {
                return (
                  void 0 === t && (t = this.index),
                  void 0 === e && (e = this.prevIndex),
                  this.getIndex(t, e)
                );
              },
              _show: function (t, e, i) {
                return (
                  (this._transitioner = this._getTransitioner(
                    t,
                    e,
                    this.dir,
                    Y(
                      {
                        easing: i
                          ? e.offsetWidth < 600
                            ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                          : this.easing,
                      },
                      this.transitionOptions
                    )
                  )),
                  i || t
                    ? ((t = this.stack.length),
                      this._transitioner[1 < t ? "forward" : "show"](
                        1 < t
                          ? Math.min(this.duration, 75 + 75 / (t - 1))
                          : this.duration,
                        this.percent
                      ))
                    : (this._translate(1), se.resolve())
                );
              },
              _getDistance: function (t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance();
              },
              _translate: function (t, e, i) {
                return (
                  void 0 === e && (e = this.prevIndex),
                  void 0 === i && (i = this.index),
                  (i = this._getTransitioner(e !== i && e, i)).translate(t),
                  i
                );
              },
              _getTransitioner: function (t, e, i, n) {
                return (
                  void 0 === t && (t = this.prevIndex),
                  void 0 === e && (e = this.index),
                  void 0 === i && (i = this.dir || 1),
                  void 0 === n && (n = this.transitionOptions),
                  new this.Transitioner(
                    A(t) ? this.slides[t] : t,
                    A(e) ? this.slides[e] : e,
                    i * (ct ? -1 : 1),
                    n
                  )
                );
              },
            },
          }),
        ],
        props: { animation: String },
        data: {
          animation: "slide",
          clsActivated: "uk-transition-active",
          Animations: io,
          Transitioner: function (t, e, i, n) {
            var r = n.animation,
              o = n.easing,
              s = r.percent,
              a = r.translate;
            void 0 === (r = r.show) && (r = G);
            var l = r(i),
              c = new oe();
            return {
              dir: i,
              show: function (n, r, s) {
                var a = this;
                return (
                  void 0 === r && (r = 0),
                  (s = s ? "linear" : o),
                  (n -= Math.round(n * Z(r, -1, 1))),
                  this.translate(r),
                  zr(e, "itemin", {
                    percent: r,
                    duration: n,
                    timing: s,
                    dir: i,
                  }),
                  zr(t, "itemout", {
                    percent: 1 - r,
                    duration: n,
                    timing: s,
                    dir: i,
                  }),
                  se
                    .all([Ve.start(e, l[1], n, s), Ve.start(t, l[0], n, s)])
                    .then(function () {
                      a.reset(), c.resolve();
                    }, G),
                  c.promise
                );
              },
              cancel: function () {
                Ve.cancel([e, t]);
              },
              reset: function () {
                for (var i in l[0]) He([e, t], i, "");
              },
              forward: function (i, n) {
                return (
                  void 0 === n && (n = this.percent()),
                  Ve.cancel([e, t]),
                  this.show(i, n, !0)
                );
              },
              translate: function (n) {
                this.reset();
                var r = a(n, i);
                He(e, r[1]),
                  He(t, r[0]),
                  zr(e, "itemtranslatein", { percent: n, dir: i }),
                  zr(t, "itemtranslateout", { percent: 1 - n, dir: i });
              },
              percent: function () {
                return s(t || e, e, i);
              },
              getDistance: function () {
                return t && t.offsetWidth;
              },
            };
          },
        },
        computed: {
          animation: function (t) {
            var e = t.animation;
            t = t.Animations;
            return Y(t[e] || t.slide, { name: e });
          },
          transitionOptions: function () {
            return { animation: this.animation };
          },
        },
        events: {
          "itemshow itemhide itemshown itemhidden": function (t) {
            (t = t.target), this.$update(t);
          },
          beforeitemshow: function (t) {
            Se(t.target, this.clsActive);
          },
          itemshown: function (t) {
            Se(t.target, this.clsActivated);
          },
          itemhidden: function (t) {
            Me(t.target, this.clsActive, this.clsActivated);
          },
        },
      }),
    ],
    functional: !0,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String,
    },
    data: function () {
      return {
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: Pr,
        template:
          '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
      };
    },
    created: function () {
      var t = De(this.template),
        e = De(this.selList, t);
      this.items.forEach(function () {
        return fe(e, "<li>");
      }),
        this.$mount(fe(this.container, t));
    },
    computed: {
      caption: function (t, e) {
        return t.selCaption, De(".uk-lightbox-caption", e);
      },
    },
    events: [
      { name: pt + " " + ft + " keydown", handler: "showControls" },
      {
        name: "click",
        self: !0,
        delegate: function () {
          return this.selSlides;
        },
        handler: function (t) {
          t.defaultPrevented || Ve.inProgress(t.target) || this.hide();
        },
      },
      {
        name: "shown",
        self: !0,
        handler: function () {
          this.showControls();
        },
      },
      {
        name: "hide",
        self: !0,
        handler: function () {
          this.hideControls(),
            Me(this.slides, this.clsActive),
            Ve.stop(this.slides);
        },
      },
      {
        name: "hidden",
        self: !0,
        handler: function () {
          this.$destroy(!0);
        },
      },
      {
        name: "keyup",
        el: function () {
          return document;
        },
        handler: function (t) {
          if (this.isToggled(this.$el) && this.draggable)
            switch (t.keyCode) {
              case 37:
                this.show("previous");
                break;
              case 39:
                this.show("next");
            }
        },
      },
      {
        name: "beforeitemshow",
        handler: function (t) {
          this.isToggled() ||
            ((this.draggable = !1),
            t.preventDefault(),
            this.toggleElement(this.$el, !0, !1),
            (this.animation = Pr.scale),
            Me(t.target, this.clsActive),
            this.stack.splice(1, 0, this.index));
        },
      },
      {
        name: "itemshow",
        handler: function () {
          de(this.caption, this.getItem().caption || "");
          for (var t = -this.preload; t <= this.preload; t++)
            this.loadItem(this.index + t);
        },
      },
      {
        name: "itemshown",
        handler: function () {
          this.draggable = this.$props.draggable;
        },
      },
      {
        name: "itemload",
        handler: function (t, e) {
          var i = this,
            n = e.source,
            r = e.type,
            o = e.alt;
          void 0 === o && (o = "");
          var s,
            a,
            l,
            c = e.poster,
            h = e.attrs;
          void 0 === h && (h = {}),
            this.setItem(e, "<span uk-spinner></span>"),
            n &&
              ((a = {
                frameborder: "0",
                allow: "autoplay",
                allowfullscreen: "",
                style: "max-width: 100%; box-sizing: border-box;",
                "uk-responsive": "",
                "uk-video": "" + this.videoAutoplay,
              }),
              "image" === r || n.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)
                ? he(n, h.srcset, h.size).then(
                    function (t) {
                      var r = t.width;
                      t = t.height;
                      return i.setItem(
                        e,
                        Rr("img", Y({ src: n, width: r, height: t, alt: o }, h))
                      );
                    },
                    function () {
                      return i.setError(e);
                    }
                  )
                : "video" === r || n.match(/\.(mp4|webm|ogv)($|\?)/i)
                ? (Kt(
                    (l = Rr(
                      "video",
                      Y(
                        {
                          src: n,
                          poster: c,
                          controls: "",
                          playsinline: "",
                          "uk-video": "" + this.videoAutoplay,
                        },
                        h
                      )
                    )),
                    "loadedmetadata",
                    function () {
                      nt(l, { width: l.videoWidth, height: l.videoHeight }),
                        i.setItem(e, l);
                    }
                  ),
                  Kt(l, "error", function () {
                    return i.setError(e);
                  }))
                : "iframe" === r || n.match(/\.(html|php)($|\?)/i)
                ? this.setItem(
                    e,
                    Rr(
                      "iframe",
                      Y(
                        {
                          src: n,
                          frameborder: "0",
                          allowfullscreen: "",
                          class: "uk-lightbox-iframe",
                        },
                        h
                      )
                    )
                  )
                : (s = n.match(
                    /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
                  ))
                ? this.setItem(
                    e,
                    Rr(
                      "iframe",
                      Y(
                        {
                          src:
                            "https://www.youtube" +
                            (s[1] || "") +
                            ".com/embed/" +
                            s[2] +
                            (s[3] ? "?" + s[3] : ""),
                          width: 1920,
                          height: 1080,
                        },
                        a,
                        h
                      )
                    )
                  )
                : (s = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) &&
                  ce(
                    "https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                      encodeURI(n),
                    { responseType: "json", withCredentials: !1 }
                  ).then(
                    function (t) {
                      t = (n = t.response).height;
                      var n = n.width;
                      return i.setItem(
                        e,
                        Rr(
                          "iframe",
                          Y(
                            {
                              src:
                                "https://player.vimeo.com/video/" +
                                s[1] +
                                (s[2] ? "?" + s[2] : ""),
                              width: n,
                              height: t,
                            },
                            a,
                            h
                          )
                        )
                      );
                    },
                    function () {
                      return i.setError(e);
                    }
                  ));
        },
      },
    ],
    methods: {
      loadItem: function (t) {
        void 0 === t && (t = this.index),
          (t = this.getItem(t)),
          this.getSlide(t).childElementCount || Zt(this.$el, "itemload", [t]);
      },
      getItem: function (t) {
        return void 0 === t && (t = this.index), this.items[et(t, this.slides)];
      },
      setItem: function (t, e) {
        Zt(this.$el, "itemloaded", [this, de(this.getSlide(t), e)]);
      },
      getSlide: function (t) {
        return this.slides[this.items.indexOf(t)];
      },
      setError: function (t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function () {
        clearTimeout(this.controlsTimer),
          (this.controlsTimer = setTimeout(
            this.hideControls,
            this.delayControls
          )),
          Se(this.$el, "uk-active", "uk-transition-active");
      },
      hideControls: function () {
        Me(this.$el, "uk-active", "uk-transition-active");
      },
    },
  };
  function Rr(t, e) {
    return nt((t = Ce("<" + t + ">")), e), t;
  }
  function qr(t) {
    var e = {};
    return (
      ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (
        i
      ) {
        e["href" === i ? "source" : i] = st(t, i);
      }),
      (e.attrs = yi(e.attrs)),
      e
    );
  }
  (Pn = {
    install: function (t, e) {
      t.lightboxPanel || t.component("lightboxPanel", Fr),
        Y(e.props, t.component("lightboxPanel").options.props);
    },
    props: { toggle: String },
    data: { toggle: "a" },
    computed: {
      toggles: {
        get: function (t, e) {
          return Te(t.toggle, e);
        },
        watch: function () {
          this.hide();
        },
      },
    },
    disconnected: function () {
      this.hide();
    },
    events: [
      {
        name: "click",
        delegate: function () {
          return this.toggle + ":not(.uk-disabled)";
        },
        handler: function (t) {
          t.preventDefault(), this.show(t.current);
        },
      },
    ],
    methods: {
      show: function (t) {
        var e,
          i = this,
          n = X(this.toggles.map(qr), "source");
        return (
          L(t) &&
            ((e = qr(t).source),
            (t = w(n, function (t) {
              return (t = t.source), e === t;
            }))),
          (this.panel =
            this.panel ||
            this.$create("lightboxPanel", Y({}, this.$props, { items: n }))),
          Kt(this.panel.$el, "hidden", function () {
            return (i.panel = !1);
          }),
          this.panel.show(t)
        );
      },
      hide: function () {
        return this.panel && this.panel.hide();
      },
    },
  }),
    (Hn = {
      functional: !0,
      args: ["message", "status"],
      data: {
        message: "",
        status: "",
        timeout: 5e3,
        group: null,
        pos: "top-center",
        clsContainer: "uk-notification",
        clsClose: "uk-notification-close",
        clsMsg: "uk-notification-message",
      },
      install: function (t) {
        t.notification.closeAll = function (e, i) {
          _e(document.body, function (n) {
            !(n = t.getComponent(n, "notification")) ||
              (e && e !== n.group) ||
              n.close(i);
          });
        };
      },
      computed: {
        marginProp: function (t) {
          return "margin" + (c(t.pos, "top") ? "Top" : "Bottom");
        },
        startProps: function () {
          var t = { opacity: 0 };
          return (t[this.marginProp] = -this.$el.offsetHeight), t;
        },
      },
      created: function () {
        var t =
          De("." + this.clsContainer + "-" + this.pos, this.$container) ||
          fe(
            this.$container,
            '<div class="' +
              this.clsContainer +
              " " +
              this.clsContainer +
              "-" +
              this.pos +
              '" style="display: block"></div>'
          );
        this.$mount(
          fe(
            t,
            '<div class="' +
              this.clsMsg +
              (this.status ? " " + this.clsMsg + "-" + this.status : "") +
              '"> <a href class="' +
              this.clsClose +
              '" data-uk-close></a> <div>' +
              this.message +
              "</div> </div>"
          )
        );
      },
      connected: function () {
        var t,
          e = this,
          i = j(He(this.$el, this.marginProp));
        Ve.start(
          He(this.$el, this.startProps),
          (((t = { opacity: 1 })[this.marginProp] = i), t)
        ).then(function () {
          e.timeout && (e.timer = setTimeout(e.close, e.timeout));
        });
      },
      events:
        (((zn = {
          click: function (t) {
            Mt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
              this.close();
          },
        })[vt] = function () {
          this.timer && clearTimeout(this.timer);
        }),
        (zn[mt] = function () {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }),
        zn),
      methods: {
        close: function (t) {
          function e(t) {
            var e = _t(t);
            Zt(t, "close", [i]), me(t), e && !e.hasChildNodes() && me(e);
          }
          var i = this;
          this.timer && clearTimeout(this.timer),
            t ? e(this.$el) : Ve.start(this.$el, this.startProps).then(e);
        },
      },
    });
  var Yr,
    Vr = [
      "x",
      "y",
      "bgx",
      "bgy",
      "rotate",
      "scale",
      "color",
      "backgroundColor",
      "borderColor",
      "opacity",
      "blur",
      "hue",
      "grayscale",
      "invert",
      "saturate",
      "sepia",
      "fopacity",
      "stroke",
    ];
  function Kr(t, e) {
    var i = t.length - 1,
      n = Math.min(Math.floor(i * e), i - 1);
    return (n = t.slice(n, n + 2)).push(1 === e ? 1 : (e % (1 / i)) * i), n;
  }
  function Ur(t, e, i) {
    var n = Gr(t, e);
    return i
      ? n - ((t = t), Je(e).width / 2 - Je(t).width / 2)
      : Math.min(n, Xr(e));
  }
  function Xr(t) {
    return Math.max(0, Zr(t) - Je(t).width);
  }
  function Zr(t) {
    return It(t).reduce(function (t, e) {
      return Je(e).width + t;
    }, 0);
  }
  function Gr(t, e) {
    return (
      (t &&
        (ti(t).left + (ct ? Je(t).width - Je(e).width : 0)) * (ct ? -1 : 1)) ||
      0
    );
  }
  function Jr(t, e, i) {
    Zt(t, Gt(e, !1, !1, i));
  }
  function Qr(t) {
    return u(t, "in");
  }
  function to(t, e, i) {
    return (i /= 2), Qr(t) ? (e < 0 ? 1 - i : i) : e < 0 ? i : 1 - i;
  }
  (zn = {
    mixins: [
      (Yr = {
        mixins: [er],
        props: Vr.reduce(function (t, e) {
          return (t[e] = "list"), t;
        }, {}),
        data: Vr.reduce(function (t, e) {
          return (t[e] = void 0), t;
        }, {}),
        computed: {
          props: function (t, e) {
            var i = this;
            return Vr.reduce(function (n, r) {
              if (B(t[r])) return n;
              var o,
                s,
                a = r.match(/color/i),
                l = a || "opacity" === r,
                h = t[r].slice();
              l && He(e, r, ""),
                h.length < 2 &&
                  h.unshift(("scale" === r ? 1 : l ? He(e, r) : 0) || 0);
              var u, d, f, p, g;
              l = h.reduce(function (t, e) {
                return (E(e) && e.replace(/-|\d/g, "").trim()) || t;
              }, "");
              if (
                (a
                  ? ((a = e.style.color),
                    (h = h.map(function (t) {
                      return He(He(e, "color", t), "color")
                        .split(/[(),]/g)
                        .slice(1, -1)
                        .concat(1)
                        .slice(0, 4)
                        .map(j);
                    })),
                    (e.style.color = a))
                  : c(r, "bg")
                  ? ((u = "bgy" === r ? "height" : "width"),
                    (h = h.map(function (t) {
                      return ai(t, u, i.$el);
                    })),
                    He(e, "background-position-" + r[2], ""),
                    (s = He(e, "backgroundPosition").split(" ")[
                      "x" === r[2] ? 0 : 1
                    ]),
                    (o = i.covers
                      ? ((d = Math.min.apply(Math, h)),
                        (f = Math.max.apply(Math, h)),
                        (p = h.indexOf(d) < h.indexOf(f)),
                        (g = f - d),
                        (h = h.map(function (t) {
                          return t - (p ? d : f);
                        })),
                        (p ? -g : 0) + "px")
                      : s))
                  : (h = h.map(j)),
                "stroke" === r)
              ) {
                if (
                  !h.some(function (t) {
                    return t;
                  })
                )
                  return n;
                var v = In(i.$el);
                He(e, "strokeDasharray", v),
                  "%" === l &&
                    (h = h.map(function (t) {
                      return (t * v) / 100;
                    })),
                  (h = h.reverse()),
                  (r = "strokeDashoffset");
              }
              return (
                (n[r] = { steps: h, unit: l, pos: o, bgPos: s, diff: g }), n
              );
            }, {});
          },
          bgProps: function () {
            var t = this;
            return ["bgx", "bgy"].filter(function (e) {
              return e in t.props;
            });
          },
          covers: function (t, e) {
            return (
              (n = (i = e).style.backgroundSize),
              (e =
                "cover" === He(He(i, "backgroundSize", ""), "backgroundSize")),
              (i.style.backgroundSize = n),
              e
            );
            var i, n;
          },
        },
        disconnected: function () {
          delete this._image;
        },
        update: {
          read: function (t) {
            var e,
              i,
              n,
              r,
              o,
              s = this;
            this.matchMedia &&
              (t.image ||
                !this.covers ||
                !this.bgProps.length ||
                ((e = He(this.$el, "backgroundImage").replace(
                  /^none|url\(["']?(.+?)["']?\)$/,
                  "$1"
                )) &&
                  (((i = new Image()).src = e),
                  (t.image = i).naturalWidth ||
                    (i.onload = function () {
                      return s.$update();
                    }))),
              (i = t.image) &&
                i.naturalWidth &&
                ((n = {
                  width: this.$el.offsetWidth,
                  height: this.$el.offsetHeight,
                }),
                (r = { width: i.naturalWidth, height: i.naturalHeight }),
                (o = tt.cover(r, n)),
                this.bgProps.forEach(function (t) {
                  var e,
                    i,
                    a = (i = s.props[t]).diff,
                    l = i.bgPos,
                    c = i.steps,
                    h = o[(i = "bgy" === t ? "height" : "width")] - n[i];
                  h < a
                    ? (n[i] = o[i] + a - h)
                    : a < h &&
                      (e = n[i] / ai(l, i, s.$el)) &&
                      (s.props[t].steps = c.map(function (t) {
                        return t - (h - a) / e;
                      })),
                    (o = tt.cover(r, n));
                }),
                (t.dim = o)));
          },
          write: function (t) {
            (t = t.dim),
              this.matchMedia
                ? t &&
                  He(this.$el, {
                    backgroundSize: t.width + "px " + t.height + "px",
                    backgroundRepeat: "no-repeat",
                  })
                : He(this.$el, { backgroundSize: "", backgroundRepeat: "" });
          },
          events: ["resize"],
        },
        methods: {
          reset: function () {
            var t = this;
            K(this.getCss(0), function (e, i) {
              return He(t.$el, i, "");
            });
          },
          getCss: function (t) {
            var e = this.props;
            return Object.keys(e).reduce(
              function (i, n) {
                var r = e[n],
                  o = r.steps,
                  a = r.unit,
                  l = r.pos,
                  c = (function (t, e, i) {
                    void 0 === i && (i = 2);
                    (t = (n = Kr(t, e))[0]), (e = n[1]);
                    var n = n[2];
                    return (
                      A(t) ? t + Math.abs(t - e) * n * (t < e ? 1 : -1) : +e
                    ).toFixed(i);
                  })(o, t);
                switch (n) {
                  case "x":
                  case "y":
                    (a = a || "px"),
                      (i.transform +=
                        " translate" +
                        s(n) +
                        "(" +
                        j(c).toFixed("px" === a ? 0 : 2) +
                        a +
                        ")");
                    break;
                  case "rotate":
                    (a = a || "deg"),
                      (i.transform += " rotate(" + (c + a) + ")");
                    break;
                  case "scale":
                    i.transform += " scale(" + c + ")";
                    break;
                  case "bgy":
                  case "bgx":
                    i["background-position-" + n[2]] =
                      "calc(" + l + " + " + c + "px)";
                    break;
                  case "color":
                  case "backgroundColor":
                  case "borderColor":
                    var h = Kr(o, t),
                      u = h[0],
                      d = h[1],
                      f = h[2];
                    i[n] =
                      "rgba(" +
                      u
                        .map(function (t, e) {
                          return (
                            (t += f * (d[e] - t)),
                            3 === e ? j(t) : parseInt(t, 10)
                          );
                        })
                        .join(",") +
                      ")";
                    break;
                  case "blur":
                    (a = a || "px"), (i.filter += " blur(" + (c + a) + ")");
                    break;
                  case "hue":
                    (a = a || "deg"),
                      (i.filter += " hue-rotate(" + (c + a) + ")");
                    break;
                  case "fopacity":
                    (a = a || "%"), (i.filter += " opacity(" + (c + a) + ")");
                    break;
                  case "grayscale":
                  case "invert":
                  case "saturate":
                  case "sepia":
                    (a = a || "%"), (i.filter += " " + n + "(" + (c + a) + ")");
                    break;
                  default:
                    i[n] = c;
                }
                return i;
              },
              { transform: "", filter: "" }
            );
          },
        },
      }),
    ],
    props: { target: String, viewport: Number, easing: Number },
    data: { target: !1, viewport: 1, easing: 1 },
    computed: {
      target: function (t, e) {
        return (function t(e) {
          return e ? ("offsetTop" in e ? e : t(_t(e))) : document.body;
        })(((t = t.target) && Bt(t, e)) || e);
      },
    },
    update: {
      read: function (t, e) {
        var i = t.percent;
        if ((e.has("scroll") || (i = !1), this.matchMedia)) {
          var n = i;
          return {
            percent: (i = Z(
              (t = Bi(this.target) / (this.viewport || 1)) *
                (1 - ((e = this.easing) - e * t))
            )),
            style: n !== i && this.getCss(i),
          };
        }
      },
      write: function (t) {
        (t = t.style), this.matchMedia ? t && He(this.$el, t) : this.reset();
      },
      events: ["scroll", "resize"],
    },
  }),
    (Wn = {
      mixins: [
        sn,
        Wn,
        (er = {
          update: {
            write: function () {
              var t;
              this.stack.length ||
                this.dragging ||
                ((t = this.getValidIndex(this.index)),
                (~this.prevIndex && this.index === t) || this.show(t));
            },
            events: ["resize"],
          },
        }),
      ],
      props: { center: Boolean, sets: Boolean },
      data: {
        center: !1,
        sets: !1,
        attrItem: "uk-slider-item",
        selList: ".uk-slider-items",
        selNav: ".uk-slider-nav",
        clsContainer: "uk-slider-container",
        Transitioner: function (t, e, i, n) {
          var r = n.center,
            o = n.easing,
            s = n.list,
            a = new oe(),
            l = t ? Ur(t, s, r) : Ur(e, s, r) + Je(e).width * i,
            c = e ? Ur(e, s, r) : l + Je(t).width * i * (ct ? -1 : 1);
          return {
            dir: i,
            show: function (e, n, r) {
              return (
                void 0 === n && (n = 0),
                (r = r ? "linear" : o),
                (e -= Math.round(e * Z(n, -1, 1))),
                this.translate(n),
                t && this.updateTranslates(),
                (n = t ? n : Z(n, 0, 1)),
                Jr(this.getItemIn(), "itemin", {
                  percent: n,
                  duration: e,
                  timing: r,
                  dir: i,
                }),
                t &&
                  Jr(this.getItemIn(!0), "itemout", {
                    percent: 1 - n,
                    duration: e,
                    timing: r,
                    dir: i,
                  }),
                Ve.start(
                  s,
                  { transform: jr(-c * (ct ? -1 : 1), "px") },
                  e,
                  r
                ).then(a.resolve, G),
                a.promise
              );
            },
            cancel: function () {
              Ve.cancel(s);
            },
            reset: function () {
              He(s, "transform", "");
            },
            forward: function (t, e) {
              return (
                void 0 === e && (e = this.percent()),
                Ve.cancel(s),
                this.show(t, e, !0)
              );
            },
            translate: function (e) {
              var n = this.getDistance() * i * (ct ? -1 : 1);
              He(
                s,
                "transform",
                jr(Z(n - n * e - c, -Zr(s), Je(s).width) * (ct ? -1 : 1), "px")
              ),
                this.updateTranslates(),
                t &&
                  ((e = Z(e, -1, 1)),
                  Jr(this.getItemIn(), "itemtranslatein", {
                    percent: e,
                    dir: i,
                  }),
                  Jr(this.getItemIn(!0), "itemtranslateout", {
                    percent: 1 - e,
                    dir: i,
                  }));
            },
            percent: function () {
              return Math.abs(
                (He(s, "transform").split(",")[4] * (ct ? -1 : 1) + l) / (c - l)
              );
            },
            getDistance: function () {
              return Math.abs(c - l);
            },
            getItemIn: function (e) {
              void 0 === e && (e = !1);
              var n = U(this.getActives(), "offsetLeft"),
                r = U(It(s), "offsetLeft");
              return (
                ~(n = $t(r, n[0 < i * (e ? -1 : 1) ? n.length - 1 : 0])) &&
                r[n + (t && !e ? i : 0)]
              );
            },
            getActives: function () {
              return [t || e].concat(
                It(s).filter(function (t) {
                  var e = Gr(t, s);
                  return l < e && e + Je(t).width <= Je(s).width + l;
                })
              );
            },
            updateTranslates: function () {
              var t = this.getActives();
              It(s).forEach(function (i) {
                var n = v(t, i);
                Jr(i, "itemtranslate" + (n ? "in" : "out"), {
                  percent: n ? 1 : 0,
                  dir: i.offsetLeft <= e.offsetLeft ? 1 : -1,
                });
              });
            },
          };
        },
      },
      computed: {
        avgWidth: function () {
          return Zr(this.list) / this.length;
        },
        finite: function (t) {
          return (
            t.finite ||
            Math.ceil(Zr(this.list)) <
              Je(this.list).width +
                ((t = this.list),
                Math.max.apply(
                  Math,
                  [0].concat(
                    It(t).map(function (t) {
                      return Je(t).width;
                    })
                  )
                )) +
                this.center
          );
        },
        maxIndex: function () {
          var t = this;
          if (!this.finite || (this.center && !this.sets))
            return this.length - 1;
          if (this.center) return V(this.sets);
          He(this.slides, "order", "");
          var e = Xr(this.list),
            i = w(this.slides, function (i) {
              return Gr(i, t.list) >= e;
            });
          return ~i ? i : this.length - 1;
        },
        sets: function (t) {
          var e = this;
          if ((t = t.sets)) {
            var i = Je(this.list).width / (this.center ? 2 : 1),
              n = 0,
              r = i,
              o = 0;
            return (
              !$(
                (t = U(this.slides, "offsetLeft").reduce(function (t, s, a) {
                  var l = Je(s).width;
                  return (
                    n < o + l &&
                      (!e.center && a > e.maxIndex && (a = e.maxIndex),
                      v(t, a) ||
                        ((s = e.slides[a + 1]),
                        e.center && s && l < r - Je(s).width / 2
                          ? (r -= l)
                          : ((r = i),
                            t.push(a),
                            (n = o + i + (e.center ? l / 2 : 0))))),
                    (o += l),
                    t
                  );
                }, []))
              ) && t
            );
          }
        },
        transitionOptions: function () {
          return { center: this.center, list: this.list };
        },
      },
      connected: function () {
        $e(this.$el, this.clsContainer, !De("." + this.clsContainer, this.$el));
      },
      update: {
        write: function () {
          var t = this;
          this.navItems.forEach(function (e) {
            var i = O(st(e, t.attrItem));
            !1 !== i &&
              (e.hidden =
                !t.maxIndex || i > t.maxIndex || (t.sets && !v(t.sets, i)));
          }),
            !this.length ||
              this.dragging ||
              this.stack.length ||
              (this.reorder(), this._translate(1));
          var e = this._getTransitioner(this.index).getActives();
          this.slides.forEach(function (i) {
            return $e(i, t.clsActive, v(e, i));
          }),
            (this.sets && !v(this.sets, j(this.index))) ||
              this.slides.forEach(function (i) {
                return $e(i, t.clsActivated, v(e, i));
              });
        },
        events: ["resize"],
      },
      events: {
        beforeitemshow: function (t) {
          !this.dragging &&
            this.sets &&
            this.stack.length < 2 &&
            !v(this.sets, this.index) &&
            (this.index = this.getValidIndex());
          var e = Math.abs(
            this.index -
              this.prevIndex +
              ((0 < this.dir && this.index < this.prevIndex) ||
              (this.dir < 0 && this.index > this.prevIndex)
                ? (this.maxIndex + 1) * this.dir
                : 0)
          );
          if (!this.dragging && 1 < e) {
            for (var i = 0; i < e; i++)
              this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
            t.preventDefault();
          } else
            (t =
              this.dir < 0 || !this.slides[this.prevIndex]
                ? this.index
                : this.prevIndex),
              (this.duration =
                Wr(this.avgWidth / this.velocity) *
                (Je(this.slides[t]).width / this.avgWidth)),
              this.reorder();
        },
        itemshow: function () {
          ~this.prevIndex &&
            Se(this._getTransitioner().getItemIn(), this.clsActive);
        },
      },
      methods: {
        reorder: function () {
          var t = this;
          if (this.finite) He(this.slides, "order", "");
          else {
            var e =
              0 < this.dir && this.slides[this.prevIndex]
                ? this.prevIndex
                : this.index;
            if (
              (this.slides.forEach(function (i, n) {
                return He(
                  i,
                  "order",
                  0 < t.dir && n < e ? 1 : t.dir < 0 && n >= t.index ? -1 : ""
                );
              }),
              this.center)
            )
              for (
                var i = this.slides[e],
                  n = Je(this.list).width / 2 - Je(i).width / 2,
                  r = 0;
                0 < n;

              ) {
                var o = this.getIndex(--r + e, e),
                  s = this.slides[o];
                He(s, "order", e < o ? -2 : -1), (n -= Je(s).width);
              }
          }
        },
        getValidIndex: function (t, e) {
          if (
            (void 0 === t && (t = this.index),
            void 0 === e && (e = this.prevIndex),
            (t = this.getIndex(t, e)),
            !this.sets)
          )
            return t;
          var i;
          do {
            if (v(this.sets, t)) return t;
          } while (((i = t), (t = this.getIndex(t + this.dir, e)) !== i));
          return t;
        },
      },
    }),
    (Yr = {
      mixins: [Yr],
      data: { selItem: "!li" },
      computed: {
        item: function (t, e) {
          return Bt(t.selItem, e);
        },
      },
      events: [
        {
          name: "itemin itemout",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function (t) {
            var e = this,
              i = t.type,
              n = (t = t.detail).percent,
              r = t.duration,
              o = t.timing,
              s = t.dir;
            ci.read(function () {
              var t = e.getCss(to(i, s, n)),
                a = e.getCss(Qr(i) ? 0.5 : 0 < s ? 1 : 0);
              ci.write(function () {
                He(e.$el, t), Ve.start(e.$el, a, r, o).catch(G);
              });
            });
          },
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function () {
            Ve.cancel(this.$el);
          },
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function (t) {
            var e = this,
              i = t.type,
              n = (t = t.detail).percent,
              r = t.dir;
            ci.read(function () {
              var t = e.getCss(to(i, r, n));
              ci.write(function () {
                return He(e.$el, t);
              });
            });
          },
        },
      ],
    });
  var eo,
    io = Y({}, io, {
      fade: {
        show: function () {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent: function (t) {
          return 1 - He(t, "opacity");
        },
        translate: function (t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        },
      },
      scale: {
        show: function () {
          return [
            { opacity: 0, transform: Hr(1.5), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
        percent: function (t) {
          return 1 - He(t, "opacity");
        },
        translate: function (t) {
          return [
            { opacity: 1 - t, transform: Hr(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
      },
      pull: {
        show: function (t) {
          return t < 0
            ? [
                { transform: jr(30), zIndex: -1 },
                { transform: jr(), zIndex: 0 },
              ]
            : [
                { transform: jr(-100), zIndex: 0 },
                { transform: jr(), zIndex: -1 },
              ];
        },
        percent: function (t, e, i) {
          return i < 0 ? 1 - Or(e) : Or(t);
        },
        translate: function (t, e) {
          return e < 0
            ? [
                { transform: jr(30 * t), zIndex: -1 },
                { transform: jr(-100 * (1 - t)), zIndex: 0 },
              ]
            : [
                { transform: jr(100 * -t), zIndex: 0 },
                { transform: jr(30 * (1 - t)), zIndex: -1 },
              ];
        },
      },
      push: {
        show: function (t) {
          return t < 0
            ? [
                { transform: jr(100), zIndex: 0 },
                { transform: jr(), zIndex: -1 },
              ]
            : [
                { transform: jr(-30), zIndex: -1 },
                { transform: jr(), zIndex: 0 },
              ];
        },
        percent: function (t, e, i) {
          return 0 < i ? 1 - Or(e) : Or(t);
        },
        translate: function (t, e) {
          return e < 0
            ? [
                { transform: jr(100 * t), zIndex: 0 },
                { transform: jr(-30 * (1 - t)), zIndex: -1 },
              ]
            : [
                { transform: jr(-30 * t), zIndex: -1 },
                { transform: jr(100 * (1 - t)), zIndex: 0 },
              ];
        },
      },
    });
  (io = {
    mixins: [sn, Fn, er],
    props: { ratio: String, minHeight: Number, maxHeight: Number },
    data: {
      ratio: "16:9",
      minHeight: !1,
      maxHeight: !1,
      selList: ".uk-slideshow-items",
      attrItem: "uk-slideshow-item",
      selNav: ".uk-slideshow-nav",
      Animations: io,
    },
    update: {
      read: function () {
        var t = (e = this.ratio.split(":").map(Number))[0],
          e = ((e = e[1]) * this.list.offsetWidth) / t || 0;
        return (
          this.minHeight && (e = Math.max(this.minHeight, e)),
          this.maxHeight && (e = Math.min(this.maxHeight, e)),
          { height: e - oi(this.list, "height", "content-box") }
        );
      },
      write: function (t) {
        0 < (t = t.height) && He(this.list, "minHeight", t);
      },
      events: ["resize"],
    },
  }),
    (Ri = {
      mixins: [sn, Ri],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String,
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {},
      },
      created: function () {
        var t = this;
        ["init", "start", "move", "end"].forEach(function (e) {
          var i = t[e];
          t[e] = function (e) {
            Y(t.pos, re(e)), i(e);
          };
        });
      },
      events: { name: ft, passive: !1, handler: "init" },
      computed: {
        target: function () {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items: function () {
          return It(this.target);
        },
        isEmpty: {
          get: function () {
            return $(this.items);
          },
          watch: function (t) {
            $e(this.target, this.clsEmpty, t);
          },
          immediate: !0,
        },
        handles: {
          get: function (t, e) {
            return (t = t.handle) ? Te(t, e) : this.items;
          },
          watch: function (t, e) {
            He(e, { touchAction: "", userSelect: "" }),
              He(t, { touchAction: dt ? "none" : "", userSelect: "none" });
          },
          immediate: !0,
        },
      },
      update: {
        write: function (t) {
          var e, i, n, r, o, s, a;
          this.drag &&
            _t(this.placeholder) &&
            ((e = (i = this.pos).x),
            (a = i.y),
            (s = (n = this.origin).offsetTop),
            (r = n.offsetLeft),
            (i = this.placeholder),
            He(this.drag, { top: a - s, left: e - r }),
            (n = this.getSortable(document.elementFromPoint(e, a))) &&
              ((s = n.items).some(Ve.inProgress) ||
                ((o = { x: e, y: a }),
                (r = (r = s)[
                  w(r, function (t) {
                    return Q(o, t.getBoundingClientRect());
                  })
                ]),
                (!s.length || (r && r !== i)) &&
                  ((s = this.getSortable(i)),
                  !1 !==
                    (a = (function (t, e, i, n, r, o) {
                      if (It(t).length) {
                        var s = e.getBoundingClientRect();
                        return o
                          ? ((o = i.getBoundingClientRect()),
                            (i = (t = no([s.top, s.bottom], [o.top, o.bottom]))
                              ? n
                              : r),
                            (n = t ? "width" : "height"),
                            (r = t ? "left" : "top"),
                            (t = t ? "right" : "bottom"),
                            (n = o[n] < s[n] ? s[n] - o[n] : 0),
                            o[r] < s[r]
                              ? !(n && i < s[r] + n) && e.nextElementSibling
                              : !(n && i > s[t] - n) && e)
                          : (function (t, e) {
                              var i = 1 === It(t).length;
                              i && fe(t, e);
                              var n = It(t);
                              t = n.some(function (t, e) {
                                var i = t.getBoundingClientRect();
                                return n.slice(e + 1).some(function (t) {
                                  return (
                                    (t = t.getBoundingClientRect()),
                                    !no([i.left, i.right], [t.left, t.right])
                                  );
                                });
                              });
                              return i && me(e), t;
                            })(t, i) || r < s.top + s.height / 2
                          ? e
                          : e.nextElementSibling;
                      }
                    })(n.target, r, i, e, a, n === s && t.moved !== r)) &&
                    ((a && i === a) ||
                      (n !== s ? (s.remove(i), (t.moved = r)) : delete t.moved,
                      n.insert(i, a),
                      this.touched.add(n)))))));
        },
        events: ["move"],
      },
      methods: {
        init: function (t) {
          var e = t.target,
            i = t.button,
            n = t.defaultPrevented,
            r = this.items.filter(function (t) {
              return Et(e, t);
            })[0];
          !r ||
            n ||
            0 < i ||
            Ct(e) ||
            Et(e, "." + this.clsNoDrag) ||
            (this.handle && !Et(e, this.handle)) ||
            (t.preventDefault(),
            (this.touched = new Set([this])),
            (this.placeholder = r),
            (this.origin = Y({ target: e, index: $t(r) }, this.pos)),
            Kt(document, pt, this.move),
            Kt(document, gt, this.end),
            this.threshold || this.start(t));
        },
        start: function (t) {
          this.drag = (function (t, e) {
            return (
              He(
                (t = fe(
                  t,
                  e.outerHTML.replace(
                    /(^<)(?:li|tr)|(?:li|tr)(\/>$)/g,
                    "$1div$2"
                  )
                )),
                "margin",
                "0",
                "important"
              ),
              He(
                t,
                Y(
                  {
                    boxSizing: "border-box",
                    width: e.offsetWidth,
                    height: e.offsetHeight,
                  },
                  He(e, [
                    "paddingLeft",
                    "paddingRight",
                    "paddingTop",
                    "paddingBottom",
                  ])
                )
              ),
              ii(t.firstElementChild, ii(e.firstElementChild)),
              t
            );
          })(this.$container, this.placeholder);
          var e,
            i,
            n = (r = this.placeholder.getBoundingClientRect()).left,
            r = r.top;
          Y(this.origin, {
            offsetLeft: this.pos.x - n,
            offsetTop: this.pos.y - r,
          }),
            Se(this.drag, this.clsDrag, this.clsCustom),
            Se(this.placeholder, this.clsPlaceholder),
            Se(this.items, this.clsItem),
            Se(document.documentElement, this.clsDragState),
            Zt(this.$el, "start", [this, this.placeholder]),
            (e = this.pos),
            (i = Date.now()),
            (eo = setInterval(function () {
              var t = e.x,
                n = e.y;
              n += window.pageYOffset;
              var r = 0.3 * (Date.now() - i);
              (i = Date.now()),
                Ni(document.elementFromPoint(t, e.y))
                  .reverse()
                  .some(function (t) {
                    var e = t.scrollTop,
                      i = t.scrollHeight,
                      o = (a = Qe(Oi(t))).top,
                      s = a.bottom,
                      a = a.height;
                    if (o < n && n < o + 35) e -= r;
                    else {
                      if (!(n < s && s - 35 < n)) return;
                      e += r;
                    }
                    if (0 < e && e < i - a) return Ii(t, e), !0;
                  });
            }, 15)),
            this.move(t);
        },
        move: function (t) {
          this.drag
            ? this.$emit("move")
            : (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
              this.start(t);
        },
        end: function () {
          var t,
            e = this;
          Ut(document, pt, this.move),
            Ut(document, gt, this.end),
            Ut(window, "scroll", this.scroll),
            this.drag &&
              (clearInterval(eo),
              this === (t = this.getSortable(this.placeholder))
                ? this.origin.index !== $t(this.placeholder) &&
                  Zt(this.$el, "moved", [this, this.placeholder])
                : (Zt(t.$el, "added", [t, this.placeholder]),
                  Zt(this.$el, "removed", [this, this.placeholder])),
              Zt(this.$el, "stop", [this, this.placeholder]),
              me(this.drag),
              (this.drag = null),
              this.touched.forEach(function (t) {
                var i = t.clsPlaceholder,
                  n = t.clsItem;
                return e.touched.forEach(function (t) {
                  return Me(t.items, i, n);
                });
              }),
              (this.touched = null),
              Me(document.documentElement, this.clsDragState));
        },
        insert: function (t, e) {
          var i = this;
          function n() {
            return e ? pe(e, t) : fe(i.target, t);
          }
          Se(this.items, this.clsItem), this.animation ? this.animate(n) : n();
        },
        remove: function (t) {
          Et(t, this.target) &&
            (this.animation
              ? this.animate(function () {
                  return me(t);
                })
              : me(t));
        },
        getSortable: function (t) {
          do {
            var e = this.$getComponent(t, "sortable");
            if (
              e &&
              (e === this || (!1 !== this.group && e.group === this.group))
            )
              return e;
          } while ((t = _t(t)));
        },
      },
    });
  function no(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }
  function ro(t, e) {
    return e.match(
      new RegExp(
        "^" +
          t
            .replace(/\//g, "\\/")
            .replace(/\*\*/g, "(\\/[^\\/]+)*")
            .replace(/\*/g, "[^\\/]+")
            .replace(/((?!\\))\?/g, "$1.") +
          "$",
        "i"
      )
    );
  }
  function oo(t) {
    t.preventDefault(), t.stopPropagation();
  }
  return (
    (mt = {
      mixins: [nr, an, pn],
      args: "title",
      props: { delay: Number, title: String },
      data: {
        pos: "top",
        title: "",
        delay: 0,
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active",
        clsPos: "uk-tooltip",
      },
      beforeConnect: function () {
        var t;
        (this._hasTitle = rt(this.$el, "title")),
          nt(this.$el, "title", ""),
          this.updateAria(!1),
          (function (t) {
            return Ct(t) || Lt(t, "a,button") || rt(t, "tabindex");
          })((t = this.$el)) || nt(t, "tabindex", "0");
      },
      disconnected: function () {
        this.hide(), nt(this.$el, "title", this._hasTitle ? this.title : null);
      },
      methods: {
        show: function () {
          var t = this;
          !this.isToggled(this.tooltip) &&
            this.title &&
            ((this._unbind = Xt(
              document,
              "show keydown " + ft,
              this.hide,
              !1,
              function (e) {
                return (
                  (e.type === ft && !Et(e.target, t.$el)) ||
                  ("keydown" === e.type && 27 === e.keyCode) ||
                  ("show" === e.type &&
                    e.detail[0] !== t &&
                    e.detail[0].$name === t.$name)
                );
              }
            )),
            clearTimeout(this.showTimer),
            (this.showTimer = setTimeout(this._show, this.delay)));
        },
        hide: function () {
          var t = this;
          Lt(this.$el, "input:focus") ||
            (clearTimeout(this.showTimer),
            this.isToggled(this.tooltip) &&
              this.toggleElement(this.tooltip, !1, !1).then(function () {
                (t.tooltip = me(t.tooltip)), t._unbind();
              }));
        },
        _show: function () {
          var t = this;
          (this.tooltip = fe(
            this.container,
            '<div class="' +
              this.clsPos +
              '"> <div class="' +
              this.clsPos +
              '-inner">' +
              this.title +
              "</div> </div>"
          )),
            Kt(this.tooltip, "toggled", function (e, i) {
              t.updateAria(i),
                i &&
                  (t.positionAt(t.tooltip, t.$el),
                  (t.origin =
                    "y" === t.getAxis()
                      ? si(t.dir) + "-" + t.align
                      : t.align + "-" + si(t.dir)));
            }),
            this.toggleElement(this.tooltip, !0);
        },
        updateAria: function (t) {
          nt(this.$el, "aria-expanded", t);
        },
      },
      events:
        (((pn = { focus: "show", blur: "hide" })[vt + " " + mt] = function (t) {
          ne(t) || this[t.type === vt ? "show" : "hide"]();
        }),
        (pn[ft] = function (t) {
          ne(t) && this.show();
        }),
        pn),
    }),
    (pn = {
      props: {
        allow: String,
        clsDragover: String,
        concurrent: Number,
        maxSize: Number,
        method: String,
        mime: String,
        msgInvalidMime: String,
        msgInvalidName: String,
        msgInvalidSize: String,
        multiple: Boolean,
        name: String,
        params: Object,
        type: String,
        url: String,
      },
      data: {
        allow: !1,
        clsDragover: "uk-dragover",
        concurrent: 1,
        maxSize: 0,
        method: "POST",
        mime: !1,
        msgInvalidMime: "Invalid File Type: %s",
        msgInvalidName: "Invalid File Name: %s",
        msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
        multiple: !1,
        name: "files[]",
        params: {},
        type: "",
        url: "",
        abort: G,
        beforeAll: G,
        beforeSend: G,
        complete: G,
        completeAll: G,
        error: G,
        fail: G,
        load: G,
        loadEnd: G,
        loadStart: G,
        progress: G,
      },
      events: {
        change: function (t) {
          Lt(t.target, 'input[type="file"]') &&
            (t.preventDefault(),
            t.target.files && this.upload(t.target.files),
            (t.target.value = ""));
        },
        drop: function (t) {
          oo(t),
            (t = t.dataTransfer) &&
              t.files &&
              (Me(this.$el, this.clsDragover), this.upload(t.files));
        },
        dragenter: function (t) {
          oo(t);
        },
        dragover: function (t) {
          oo(t), Se(this.$el, this.clsDragover);
        },
        dragleave: function (t) {
          oo(t), Me(this.$el, this.clsDragover);
        },
      },
      methods: {
        upload: function (t) {
          var e = this;
          if (t.length) {
            Zt(this.$el, "upload", [t]);
            for (var i = 0; i < t.length; i++) {
              if (this.maxSize && 1e3 * this.maxSize < t[i].size)
                return void this.fail(
                  this.msgInvalidSize.replace("%s", this.maxSize)
                );
              if (this.allow && !ro(this.allow, t[i].name))
                return void this.fail(
                  this.msgInvalidName.replace("%s", this.allow)
                );
              if (this.mime && !ro(this.mime, t[i].type))
                return void this.fail(
                  this.msgInvalidMime.replace("%s", this.mime)
                );
            }
            this.multiple || (t = [t[0]]), this.beforeAll(this, t);
            var n = (function (t, e) {
                for (var i = [], n = 0; n < t.length; n += e) {
                  for (var r = [], o = 0; o < e; o++) r.push(t[n + o]);
                  i.push(r);
                }
                return i;
              })(t, this.concurrent),
              r = function (t) {
                var i,
                  o = new FormData();
                for (i in (t.forEach(function (t) {
                  return o.append(e.name, t);
                }),
                e.params))
                  o.append(i, e.params[i]);
                ce(e.url, {
                  data: o,
                  method: e.method,
                  responseType: e.type,
                  beforeSend: function (t) {
                    var i = t.xhr;
                    i.upload && Kt(i.upload, "progress", e.progress),
                      ["loadStart", "load", "loadEnd", "abort"].forEach(
                        function (t) {
                          return Kt(i, t.toLowerCase(), e[t]);
                        }
                      ),
                      e.beforeSend(t);
                  },
                }).then(
                  function (t) {
                    e.complete(t), n.length ? r(n.shift()) : e.completeAll(t);
                  },
                  function (t) {
                    return e.error(t);
                  }
                );
              };
            r(n.shift());
          }
        },
      },
    }),
    K(
      Object.freeze({
        __proto__: null,
        Countdown: yr,
        Filter: xr,
        Lightbox: Pn,
        LightboxPanel: Fr,
        Notification: Hn,
        Parallax: zn,
        Slider: Wn,
        SliderParallax: Yr,
        Slideshow: io,
        SlideshowParallax: Yr,
        Sortable: Ri,
        Tooltip: mt,
        Upload: pn,
      }),
      function (t, e) {
        return qi.component(e, t);
      }
    ),
    qi
  );
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define("uikiticons", e)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).UIkitIcons = e());
  })(this, function () {
    "use strict";
    function t(e) {
      t.installed ||
        e.icon.add({
          "500px":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
          album:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
          "arrow-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
          "arrow-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
          "arrow-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
          "arrow-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
          ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
          behance:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
          bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
          bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
          bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
          bookmark:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
          calendar:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
          camera:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
          cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
          check:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
          "chevron-double-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
          "chevron-double-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
          "chevron-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
          "chevron-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
          "chevron-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
          "chevron-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
          clock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
          close:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
          "cloud-download":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
          "cloud-upload":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
          code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
          cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
          comment:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
          commenting:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
          comments:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
          copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
          "credit-card":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
          database:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
          desktop:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
          download:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
          dribbble:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
          etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
          expand:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
          facebook:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
          "file-edit":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
          "file-pdf":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
          "file-text":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
          file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
          flickr:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
          folder:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
          forward:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
          foursquare:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
          future:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
          "git-branch":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
          "git-fork":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
          "github-alt":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
          github:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
          gitter:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
          "google-plus":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',
          google:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
          grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
          happy:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
          hashtag:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
          heart:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
          history:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
          home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
          image:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
          info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
          instagram:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
          italic:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
          joomla:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
          laptop:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
          lifesaver:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
          link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
          linkedin:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
          list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
          location:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
          lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
          mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
          menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
          microphone:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
          "minus-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
          minus:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
          "more-vertical":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
          more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
          move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
          nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
          pagekit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
          "paint-bucket":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
          pencil:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
          "phone-landscape":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
          phone:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
          pinterest:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
          "play-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
          play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
          "plus-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
          plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
          print:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
          pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
          push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
          question:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
          "quote-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
          receiver:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
          reddit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
          refresh:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
          reply:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
          rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
          search:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
          server:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
          settings:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
          shrink:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
          "sign-in":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
          "sign-out":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
          social:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
          soundcloud:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
          star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
          strikethrough:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
          table:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
          "tablet-landscape":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
          tablet:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
          tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
          thumbnails:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
          trash:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
          "triangle-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
          "triangle-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
          "triangle-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
          "triangle-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
          tripadvisor:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
          tumblr:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
          tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
          twitter:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
          uikit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
          unlock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
          upload:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
          user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
          users:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
          "video-camera":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
          vimeo:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
          warning:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
          whatsapp:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
          wordpress:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
          world:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
          xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
          yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
          youtube:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>',
        });
    }
    return (
      "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
    );
  }),
  (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var i = [],
      n = Object.getPrototypeOf,
      r = i.slice,
      o = i.flat
        ? function (t) {
            return i.flat.call(t);
          }
        : function (t) {
            return i.concat.apply([], t);
          },
      s = i.push,
      a = i.indexOf,
      l = {},
      c = l.toString,
      h = l.hasOwnProperty,
      u = h.toString,
      d = u.call(Object),
      f = {},
      p = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
      },
      g = function (t) {
        return null != t && t === t.window;
      },
      v = t.document,
      m = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function w(t, e, i) {
      var n,
        r,
        o = (i = i || v).createElement("script");
      if (((o.text = t), e))
        for (n in m)
          (r = e[n] || (e.getAttribute && e.getAttribute(n))) &&
            o.setAttribute(n, r);
      i.head.appendChild(o).parentNode.removeChild(o);
    }
    function y(t) {
      return null == t
        ? t + ""
        : "object" == typeof t || "function" == typeof t
        ? l[c.call(t)] || "object"
        : typeof t;
    }
    var x = "3.5.1",
      b = function (t, e) {
        return new b.fn.init(t, e);
      };
    function k(t) {
      var e = !!t && "length" in t && t.length,
        i = y(t);
      return (
        !p(t) &&
        !g(t) &&
        ("array" === i ||
          0 === e ||
          ("number" == typeof e && 0 < e && e - 1 in t))
      );
    }
    (b.fn = b.prototype =
      {
        jquery: x,
        constructor: b,
        length: 0,
        toArray: function () {
          return r.call(this);
        },
        get: function (t) {
          return null == t
            ? r.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = b.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return b.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            b.map(this, function (e, i) {
              return t.call(e, i, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(r.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            b.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            b.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            i = +t + (t < 0 ? e : 0);
          return this.pushStack(0 <= i && i < e ? [this[i]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: s,
        sort: i.sort,
        splice: i.splice,
      }),
      (b.extend = b.fn.extend =
        function () {
          var t,
            e,
            i,
            n,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || p(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (n = t[e]),
                  "__proto__" !== e &&
                    s !== n &&
                    (c && n && (b.isPlainObject(n) || (r = Array.isArray(n)))
                      ? ((i = s[e]),
                        (o =
                          r && !Array.isArray(i)
                            ? []
                            : r || b.isPlainObject(i)
                            ? i
                            : {}),
                        (r = !1),
                        (s[e] = b.extend(c, o, n)))
                      : void 0 !== n && (s[e] = n));
          return s;
        }),
      b.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isPlainObject: function (t) {
          var e, i;
          return !(
            !t ||
            "[object Object]" !== c.call(t) ||
            ((e = n(t)) &&
              ("function" !=
                typeof (i = h.call(e, "constructor") && e.constructor) ||
                u.call(i) !== d))
          );
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        globalEval: function (t, e, i) {
          w(t, { nonce: e && e.nonce }, i);
        },
        each: function (t, e) {
          var i,
            n = 0;
          if (k(t))
            for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
          else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
          return t;
        },
        makeArray: function (t, e) {
          var i = e || [];
          return (
            null != t &&
              (k(Object(t))
                ? b.merge(i, "string" == typeof t ? [t] : t)
                : s.call(i, t)),
            i
          );
        },
        inArray: function (t, e, i) {
          return null == e ? -1 : a.call(e, t, i);
        },
        merge: function (t, e) {
          for (var i = +e.length, n = 0, r = t.length; n < i; n++)
            t[r++] = e[n];
          return (t.length = r), t;
        },
        grep: function (t, e, i) {
          for (var n = [], r = 0, o = t.length, s = !i; r < o; r++)
            !e(t[r], r) !== s && n.push(t[r]);
          return n;
        },
        map: function (t, e, i) {
          var n,
            r,
            s = 0,
            a = [];
          if (k(t))
            for (n = t.length; s < n; s++)
              null != (r = e(t[s], s, i)) && a.push(r);
          else for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
          return o(a);
        },
        guid: 1,
        support: f,
      }),
      "function" == typeof Symbol &&
        (b.fn[Symbol.iterator] = i[Symbol.iterator]),
      b.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (t, e) {
          l["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var C = (function (t) {
      var e,
        i,
        n,
        r,
        o,
        s,
        a,
        l,
        c,
        h,
        u,
        d,
        f,
        p,
        g,
        v,
        m,
        w,
        y,
        x = "sizzle" + 1 * new Date(),
        b = t.document,
        k = 0,
        C = 0,
        _ = lt(),
        D = lt(),
        T = lt(),
        L = lt(),
        S = function (t, e) {
          return t === e && (u = !0), 0;
        },
        M = {}.hasOwnProperty,
        E = [],
        A = E.pop,
        I = E.push,
        $ = E.push,
        B = E.slice,
        N = function (t, e) {
          for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
          return -1;
        },
        O =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        j = "[\\x20\\t\\r\\n\\f]",
        H =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          j +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        P =
          "\\[" +
          j +
          "*(" +
          H +
          ")(?:" +
          j +
          "*([*^$|!~]?=)" +
          j +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          H +
          "))|)" +
          j +
          "*\\]",
        z =
          ":(" +
          H +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          P +
          ")*)|.*)\\)|)",
        W = new RegExp(j + "+", "g"),
        F = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
        R = new RegExp("^" + j + "*," + j + "*"),
        q = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
        Y = new RegExp(j + "|>"),
        V = new RegExp(z),
        K = new RegExp("^" + H + "$"),
        U = {
          ID: new RegExp("^#(" + H + ")"),
          CLASS: new RegExp("^\\.(" + H + ")"),
          TAG: new RegExp("^(" + H + "|[*])"),
          ATTR: new RegExp("^" + P),
          PSEUDO: new RegExp("^" + z),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              j +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              j +
              "*(?:([+-]|)" +
              j +
              "*(\\d+)|))" +
              j +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + O + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              j +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              j +
              "*((?:-\\d)?\\d*)" +
              j +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        X = /HTML$/i,
        Z = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tt = /[+~]/,
        et = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        it = function (t, e) {
          var i = "0x" + t.slice(1) - 65536;
          return (
            e ||
            (i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
          );
        },
        nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        rt = function (t, e) {
          return e
            ? "\0" === t
              ? "�"
              : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
            : "\\" + t;
        },
        ot = function () {
          d();
        },
        st = xt(
          function (t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        $.apply((E = B.call(b.childNodes)), b.childNodes),
          E[b.childNodes.length].nodeType;
      } catch (e) {
        $ = {
          apply: E.length
            ? function (t, e) {
                I.apply(t, B.call(e));
              }
            : function (t, e) {
                for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                t.length = i - 1;
              },
        };
      }
      function at(t, e, n, r) {
        var o,
          a,
          c,
          h,
          u,
          p,
          m,
          w = e && e.ownerDocument,
          b = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== b && 9 !== b && 11 !== b))
        )
          return n;
        if (!r && (d(e), (e = e || f), g)) {
          if (11 !== b && (u = Q.exec(t)))
            if ((o = u[1])) {
              if (9 === b) {
                if (!(c = e.getElementById(o))) return n;
                if (c.id === o) return n.push(c), n;
              } else if (
                w &&
                (c = w.getElementById(o)) &&
                y(e, c) &&
                c.id === o
              )
                return n.push(c), n;
            } else {
              if (u[2]) return $.apply(n, e.getElementsByTagName(t)), n;
              if (
                (o = u[3]) &&
                i.getElementsByClassName &&
                e.getElementsByClassName
              )
                return $.apply(n, e.getElementsByClassName(o)), n;
            }
          if (
            i.qsa &&
            !L[t + " "] &&
            (!v || !v.test(t)) &&
            (1 !== b || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((m = t), (w = e), 1 === b && (Y.test(t) || q.test(t)))) {
              for (
                ((w = (tt.test(t) && mt(e.parentNode)) || e) === e &&
                  i.scope) ||
                  ((h = e.getAttribute("id"))
                    ? (h = h.replace(nt, rt))
                    : e.setAttribute("id", (h = x))),
                  a = (p = s(t)).length;
                a--;

              )
                p[a] = (h ? "#" + h : ":scope") + " " + yt(p[a]);
              m = p.join(",");
            }
            try {
              return $.apply(n, w.querySelectorAll(m)), n;
            } catch (e) {
              L(t, !0);
            } finally {
              h === x && e.removeAttribute("id");
            }
          }
        }
        return l(t.replace(F, "$1"), e, n, r);
      }
      function lt() {
        var t = [];
        return function e(i, r) {
          return (
            t.push(i + " ") > n.cacheLength && delete e[t.shift()],
            (e[i + " "] = r)
          );
        };
      }
      function ct(t) {
        return (t[x] = !0), t;
      }
      function ht(t) {
        var e = f.createElement("fieldset");
        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function ut(t, e) {
        for (var i = t.split("|"), r = i.length; r--; ) n.attrHandle[i[r]] = e;
      }
      function dt(t, e) {
        var i = e && t,
          n =
            i &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            t.sourceIndex - e.sourceIndex;
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
        return t ? 1 : -1;
      }
      function ft(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function pt(t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && e.type === t;
        };
      }
      function gt(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function vt(t) {
        return ct(function (e) {
          return (
            (e = +e),
            ct(function (i, n) {
              for (var r, o = t([], i.length, e), s = o.length; s--; )
                i[(r = o[s])] && (i[r] = !(n[r] = i[r]));
            })
          );
        });
      }
      function mt(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }
      for (e in ((i = at.support = {}),
      (o = at.isXML =
        function (t) {
          var e = t.namespaceURI,
            i = (t.ownerDocument || t).documentElement;
          return !X.test(e || (i && i.nodeName) || "HTML");
        }),
      (d = at.setDocument =
        function (t) {
          var e,
            r,
            s = t ? t.ownerDocument || t : b;
          return (
            s != f &&
              9 === s.nodeType &&
              s.documentElement &&
              ((p = (f = s).documentElement),
              (g = !o(f)),
              b != f &&
                (r = f.defaultView) &&
                r.top !== r &&
                (r.addEventListener
                  ? r.addEventListener("unload", ot, !1)
                  : r.attachEvent && r.attachEvent("onunload", ot)),
              (i.scope = ht(function (t) {
                return (
                  p.appendChild(t).appendChild(f.createElement("div")),
                  void 0 !== t.querySelectorAll &&
                    !t.querySelectorAll(":scope fieldset div").length
                );
              })),
              (i.attributes = ht(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (i.getElementsByTagName = ht(function (t) {
                return (
                  t.appendChild(f.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (i.getElementsByClassName = J.test(f.getElementsByClassName)),
              (i.getById = ht(function (t) {
                return (
                  (p.appendChild(t).id = x),
                  !f.getElementsByName || !f.getElementsByName(x).length
                );
              })),
              i.getById
                ? ((n.filter.ID = function (t) {
                    var e = t.replace(et, it);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }),
                  (n.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var i = e.getElementById(t);
                      return i ? [i] : [];
                    }
                  }))
                : ((n.filter.ID = function (t) {
                    var e = t.replace(et, it);
                    return function (t) {
                      var i =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return i && i.value === e;
                    };
                  }),
                  (n.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var i,
                        n,
                        r,
                        o = e.getElementById(t);
                      if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t)
                          return [o];
                        for (r = e.getElementsByName(t), n = 0; (o = r[n++]); )
                          if ((i = o.getAttributeNode("id")) && i.value === t)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (n.find.TAG = i.getElementsByTagName
                ? function (t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : i.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var i,
                      n = [],
                      r = 0,
                      o = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (i = o[r++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }
                    return o;
                  }),
              (n.find.CLASS =
                i.getElementsByClassName &&
                function (t, e) {
                  if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t);
                }),
              (m = []),
              (v = []),
              (i.qsa = J.test(f.querySelectorAll)) &&
                (ht(function (t) {
                  var e;
                  (p.appendChild(t).innerHTML =
                    "<a id='" +
                    x +
                    "'></a><select id='" +
                    x +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      v.push("[*^$]=" + j + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      v.push("\\[" + j + "*(?:value|" + O + ")"),
                    t.querySelectorAll("[id~=" + x + "-]").length ||
                      v.push("~="),
                    (e = f.createElement("input")).setAttribute("name", ""),
                    t.appendChild(e),
                    t.querySelectorAll("[name='']").length ||
                      v.push(
                        "\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"
                      ),
                    t.querySelectorAll(":checked").length || v.push(":checked"),
                    t.querySelectorAll("a#" + x + "+*").length ||
                      v.push(".#.+[+~]"),
                    t.querySelectorAll("\\\f"),
                    v.push("[\\r\\n\\f]");
                }),
                ht(function (t) {
                  t.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = f.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      v.push("name" + j + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length &&
                      v.push(":enabled", ":disabled"),
                    (p.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(":disabled").length &&
                      v.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    v.push(",.*:");
                })),
              (i.matchesSelector = J.test(
                (w =
                  p.matches ||
                  p.webkitMatchesSelector ||
                  p.mozMatchesSelector ||
                  p.oMatchesSelector ||
                  p.msMatchesSelector)
              )) &&
                ht(function (t) {
                  (i.disconnectedMatch = w.call(t, "*")),
                    w.call(t, "[s!='']:x"),
                    m.push("!=", z);
                }),
              (v = v.length && new RegExp(v.join("|"))),
              (m = m.length && new RegExp(m.join("|"))),
              (e = J.test(p.compareDocumentPosition)),
              (y =
                e || J.test(p.contains)
                  ? function (t, e) {
                      var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(i.contains
                            ? i.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (S = e
                ? function (t, e) {
                    if (t === e) return (u = !0), 0;
                    var n =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (t.ownerDocument || t) == (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!i.sortDetached && e.compareDocumentPosition(t) === n)
                        ? t == f || (t.ownerDocument == b && y(b, t))
                          ? -1
                          : e == f || (e.ownerDocument == b && y(b, e))
                          ? 1
                          : h
                          ? N(h, t) - N(h, e)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (t, e) {
                    if (t === e) return (u = !0), 0;
                    var i,
                      n = 0,
                      r = t.parentNode,
                      o = e.parentNode,
                      s = [t],
                      a = [e];
                    if (!r || !o)
                      return t == f
                        ? -1
                        : e == f
                        ? 1
                        : r
                        ? -1
                        : o
                        ? 1
                        : h
                        ? N(h, t) - N(h, e)
                        : 0;
                    if (r === o) return dt(t, e);
                    for (i = t; (i = i.parentNode); ) s.unshift(i);
                    for (i = e; (i = i.parentNode); ) a.unshift(i);
                    for (; s[n] === a[n]; ) n++;
                    return n
                      ? dt(s[n], a[n])
                      : s[n] == b
                      ? -1
                      : a[n] == b
                      ? 1
                      : 0;
                  })),
            f
          );
        }),
      (at.matches = function (t, e) {
        return at(t, null, null, e);
      }),
      (at.matchesSelector = function (t, e) {
        if (
          (d(t),
          i.matchesSelector &&
            g &&
            !L[e + " "] &&
            (!m || !m.test(e)) &&
            (!v || !v.test(e)))
        )
          try {
            var n = w.call(t, e);
            if (
              n ||
              i.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return n;
          } catch (t) {
            L(e, !0);
          }
        return 0 < at(e, f, null, [t]).length;
      }),
      (at.contains = function (t, e) {
        return (t.ownerDocument || t) != f && d(t), y(t, e);
      }),
      (at.attr = function (t, e) {
        (t.ownerDocument || t) != f && d(t);
        var r = n.attrHandle[e.toLowerCase()],
          o = r && M.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
        return void 0 !== o
          ? o
          : i.attributes || !g
          ? t.getAttribute(e)
          : (o = t.getAttributeNode(e)) && o.specified
          ? o.value
          : null;
      }),
      (at.escape = function (t) {
        return (t + "").replace(nt, rt);
      }),
      (at.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (at.uniqueSort = function (t) {
        var e,
          n = [],
          r = 0,
          o = 0;
        if (
          ((u = !i.detectDuplicates),
          (h = !i.sortStable && t.slice(0)),
          t.sort(S),
          u)
        ) {
          for (; (e = t[o++]); ) e === t[o] && (r = n.push(o));
          for (; r--; ) t.splice(n[r], 1);
        }
        return (h = null), t;
      }),
      (r = at.getText =
        function (t) {
          var e,
            i = "",
            n = 0,
            o = t.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) i += r(t);
            } else if (3 === o || 4 === o) return t.nodeValue;
          } else for (; (e = t[n++]); ) i += r(e);
          return i;
        }),
      ((n = at.selectors =
        {
          cacheLength: 50,
          createPseudo: ct,
          match: U,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(et, it)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(et, it)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || at.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && at.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                i = !t[6] && t[2];
              return U.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : i &&
                      V.test(i) &&
                      (e = s(i, !0)) &&
                      (e = i.indexOf(")", i.length - e) - i.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(et, it).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = _[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) &&
                  _(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        (void 0 !== t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, e, i) {
              return function (n) {
                var r = at.attr(n, t);
                return null == r
                  ? "!=" === e
                  : !e ||
                      ((r += ""),
                      "=" === e
                        ? r === i
                        : "!=" === e
                        ? r !== i
                        : "^=" === e
                        ? i && 0 === r.indexOf(i)
                        : "*=" === e
                        ? i && -1 < r.indexOf(i)
                        : "$=" === e
                        ? i && r.slice(-i.length) === i
                        : "~=" === e
                        ? -1 < (" " + r.replace(W, " ") + " ").indexOf(i)
                        : "|=" === e &&
                          (r === i || r.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (t, e, i, n, r) {
              var o = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === n && 0 === r
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, i, l) {
                    var c,
                      h,
                      u,
                      d,
                      f,
                      p,
                      g = o !== s ? "nextSibling" : "previousSibling",
                      v = e.parentNode,
                      m = a && e.nodeName.toLowerCase(),
                      w = !l && !a,
                      y = !1;
                    if (v) {
                      if (o) {
                        for (; g; ) {
                          for (d = e; (d = d[g]); )
                            if (
                              a
                                ? d.nodeName.toLowerCase() === m
                                : 1 === d.nodeType
                            )
                              return !1;
                          p = g = "only" === t && !p && "nextSibling";
                        }
                        return !0;
                      }
                      if (((p = [s ? v.firstChild : v.lastChild]), s && w)) {
                        for (
                          y =
                            (f =
                              (c =
                                (h =
                                  (u = (d = v)[x] || (d[x] = {}))[d.uniqueID] ||
                                  (u[d.uniqueID] = {}))[t] || [])[0] === k &&
                              c[1]) && c[2],
                            d = f && v.childNodes[f];
                          (d = (++f && d && d[g]) || (y = f = 0) || p.pop());

                        )
                          if (1 === d.nodeType && ++y && d === e) {
                            h[t] = [k, f, y];
                            break;
                          }
                      } else if (
                        (w &&
                          (y = f =
                            (c =
                              (h =
                                (u = (d = e)[x] || (d[x] = {}))[d.uniqueID] ||
                                (u[d.uniqueID] = {}))[t] || [])[0] === k &&
                            c[1]),
                        !1 === y)
                      )
                        for (
                          ;
                          (d = (++f && d && d[g]) || (y = f = 0) || p.pop()) &&
                          ((a
                            ? d.nodeName.toLowerCase() !== m
                            : 1 !== d.nodeType) ||
                            !++y ||
                            (w &&
                              ((h =
                                (u = d[x] || (d[x] = {}))[d.uniqueID] ||
                                (u[d.uniqueID] = {}))[t] = [k, y]),
                            d !== e));

                        );
                      return (y -= r) === n || (y % n == 0 && 0 <= y / n);
                    }
                  };
            },
            PSEUDO: function (t, e) {
              var i,
                r =
                  n.pseudos[t] ||
                  n.setFilters[t.toLowerCase()] ||
                  at.error("unsupported pseudo: " + t);
              return r[x]
                ? r(e)
                : 1 < r.length
                ? ((i = [t, t, "", e]),
                  n.setFilters.hasOwnProperty(t.toLowerCase())
                    ? ct(function (t, i) {
                        for (var n, o = r(t, e), s = o.length; s--; )
                          t[(n = N(t, o[s]))] = !(i[n] = o[s]);
                      })
                    : function (t) {
                        return r(t, 0, i);
                      })
                : r;
            },
          },
          pseudos: {
            not: ct(function (t) {
              var e = [],
                i = [],
                n = a(t.replace(F, "$1"));
              return n[x]
                ? ct(function (t, e, i, r) {
                    for (var o, s = n(t, null, r, []), a = t.length; a--; )
                      (o = s[a]) && (t[a] = !(e[a] = o));
                  })
                : function (t, r, o) {
                    return (
                      (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop()
                    );
                  };
            }),
            has: ct(function (t) {
              return function (e) {
                return 0 < at(t, e).length;
              };
            }),
            contains: ct(function (t) {
              return (
                (t = t.replace(et, it)),
                function (e) {
                  return -1 < (e.textContent || r(e)).indexOf(t);
                }
              );
            }),
            lang: ct(function (t) {
              return (
                K.test(t || "") || at.error("unsupported lang: " + t),
                (t = t.replace(et, it).toLowerCase()),
                function (e) {
                  var i;
                  do {
                    if (
                      (i = g
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var i = t.location && t.location.hash;
              return i && i.slice(1) === e.id;
            },
            root: function (t) {
              return t === p;
            },
            focus: function (t) {
              return (
                t === f.activeElement &&
                (!f.hasFocus || f.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: gt(!1),
            disabled: gt(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !n.pseudos.empty(t);
            },
            header: function (t) {
              return G.test(t.nodeName);
            },
            input: function (t) {
              return Z.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: vt(function () {
              return [0];
            }),
            last: vt(function (t, e) {
              return [e - 1];
            }),
            eq: vt(function (t, e, i) {
              return [i < 0 ? i + e : i];
            }),
            even: vt(function (t, e) {
              for (var i = 0; i < e; i += 2) t.push(i);
              return t;
            }),
            odd: vt(function (t, e) {
              for (var i = 1; i < e; i += 2) t.push(i);
              return t;
            }),
            lt: vt(function (t, e, i) {
              for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n; ) t.push(n);
              return t;
            }),
            gt: vt(function (t, e, i) {
              for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
              return t;
            }),
          },
        }).pseudos.nth = n.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        n.pseudos[e] = ft(e);
      for (e in { submit: !0, reset: !0 }) n.pseudos[e] = pt(e);
      function wt() {}
      function yt(t) {
        for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
        return n;
      }
      function xt(t, e, i) {
        var n = e.dir,
          r = e.next,
          o = r || n,
          s = i && "parentNode" === o,
          a = C++;
        return e.first
          ? function (e, i, r) {
              for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, r);
              return !1;
            }
          : function (e, i, l) {
              var c,
                h,
                u,
                d = [k, a];
              if (l) {
                for (; (e = e[n]); )
                  if ((1 === e.nodeType || s) && t(e, i, l)) return !0;
              } else
                for (; (e = e[n]); )
                  if (1 === e.nodeType || s)
                    if (
                      ((h =
                        (u = e[x] || (e[x] = {}))[e.uniqueID] ||
                        (u[e.uniqueID] = {})),
                      r && r === e.nodeName.toLowerCase())
                    )
                      e = e[n] || e;
                    else {
                      if ((c = h[o]) && c[0] === k && c[1] === a)
                        return (d[2] = c[2]);
                      if (((h[o] = d)[2] = t(e, i, l))) return !0;
                    }
              return !1;
            };
      }
      function bt(t) {
        return 1 < t.length
          ? function (e, i, n) {
              for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
              return !0;
            }
          : t[0];
      }
      function kt(t, e, i, n, r) {
        for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
          (o = t[a]) && ((i && !i(o, n, r)) || (s.push(o), c && e.push(a)));
        return s;
      }
      function Ct(t, e, i, n, r, o) {
        return (
          n && !n[x] && (n = Ct(n)),
          r && !r[x] && (r = Ct(r, o)),
          ct(function (o, s, a, l) {
            var c,
              h,
              u,
              d = [],
              f = [],
              p = s.length,
              g =
                o ||
                (function (t, e, i) {
                  for (var n = 0, r = e.length; n < r; n++) at(t, e[n], i);
                  return i;
                })(e || "*", a.nodeType ? [a] : a, []),
              v = !t || (!o && e) ? g : kt(g, d, t, a, l),
              m = i ? (r || (o ? t : p || n) ? [] : s) : v;
            if ((i && i(v, m, a, l), n))
              for (c = kt(m, f), n(c, [], a, l), h = c.length; h--; )
                (u = c[h]) && (m[f[h]] = !(v[f[h]] = u));
            if (o) {
              if (r || t) {
                if (r) {
                  for (c = [], h = m.length; h--; )
                    (u = m[h]) && c.push((v[h] = u));
                  r(null, (m = []), c, l);
                }
                for (h = m.length; h--; )
                  (u = m[h]) &&
                    -1 < (c = r ? N(o, u) : d[h]) &&
                    (o[c] = !(s[c] = u));
              }
            } else (m = kt(m === s ? m.splice(p, m.length) : m)), r ? r(null, s, m, l) : $.apply(s, m);
          })
        );
      }
      function _t(t) {
        for (
          var e,
            i,
            r,
            o = t.length,
            s = n.relative[t[0].type],
            a = s || n.relative[" "],
            l = s ? 1 : 0,
            h = xt(
              function (t) {
                return t === e;
              },
              a,
              !0
            ),
            u = xt(
              function (t) {
                return -1 < N(e, t);
              },
              a,
              !0
            ),
            d = [
              function (t, i, n) {
                var r =
                  (!s && (n || i !== c)) ||
                  ((e = i).nodeType ? h(t, i, n) : u(t, i, n));
                return (e = null), r;
              },
            ];
          l < o;
          l++
        )
          if ((i = n.relative[t[l].type])) d = [xt(bt(d), i)];
          else {
            if ((i = n.filter[t[l].type].apply(null, t[l].matches))[x]) {
              for (r = ++l; r < o && !n.relative[t[r].type]; r++);
              return Ct(
                1 < l && bt(d),
                1 < l &&
                  yt(
                    t
                      .slice(0, l - 1)
                      .concat({ value: " " === t[l - 2].type ? "*" : "" })
                  ).replace(F, "$1"),
                i,
                l < r && _t(t.slice(l, r)),
                r < o && _t((t = t.slice(r))),
                r < o && yt(t)
              );
            }
            d.push(i);
          }
        return bt(d);
      }
      return (
        (wt.prototype = n.filters = n.pseudos),
        (n.setFilters = new wt()),
        (s = at.tokenize =
          function (t, e) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              h = D[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = n.preFilter; a; ) {
              for (s in ((i && !(r = R.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
              (i = !1),
              (r = q.exec(a)) &&
                ((i = r.shift()),
                o.push({ value: i, type: r[0].replace(F, " ") }),
                (a = a.slice(i.length))),
              n.filter))
                !(r = U[s].exec(a)) ||
                  (c[s] && !(r = c[s](r))) ||
                  ((i = r.shift()),
                  o.push({ value: i, type: s, matches: r }),
                  (a = a.slice(i.length)));
              if (!i) break;
            }
            return e ? a.length : a ? at.error(t) : D(t, l).slice(0);
          }),
        (a = at.compile =
          function (t, e) {
            var i,
              r,
              o,
              a,
              l,
              h,
              u = [],
              p = [],
              v = T[t + " "];
            if (!v) {
              for (e || (e = s(t)), i = e.length; i--; )
                (v = _t(e[i]))[x] ? u.push(v) : p.push(v);
              (v = T(
                t,
                ((r = p),
                (a = 0 < (o = u).length),
                (l = 0 < r.length),
                (h = function (t, e, i, s, h) {
                  var u,
                    p,
                    v,
                    m = 0,
                    w = "0",
                    y = t && [],
                    x = [],
                    b = c,
                    C = t || (l && n.find.TAG("*", h)),
                    _ = (k += null == b ? 1 : Math.random() || 0.1),
                    D = C.length;
                  for (
                    h && (c = e == f || e || h);
                    w !== D && null != (u = C[w]);
                    w++
                  ) {
                    if (l && u) {
                      for (
                        p = 0, e || u.ownerDocument == f || (d(u), (i = !g));
                        (v = r[p++]);

                      )
                        if (v(u, e || f, i)) {
                          s.push(u);
                          break;
                        }
                      h && (k = _);
                    }
                    a && ((u = !v && u) && m--, t && y.push(u));
                  }
                  if (((m += w), a && w !== m)) {
                    for (p = 0; (v = o[p++]); ) v(y, x, e, i);
                    if (t) {
                      if (0 < m)
                        for (; w--; ) y[w] || x[w] || (x[w] = A.call(s));
                      x = kt(x);
                    }
                    $.apply(s, x),
                      h &&
                        !t &&
                        0 < x.length &&
                        1 < m + o.length &&
                        at.uniqueSort(s);
                  }
                  return h && ((k = _), (c = b)), y;
                }),
                a ? ct(h) : h)
              )).selector = t;
            }
            return v;
          }),
        (l = at.select =
          function (t, e, i, r) {
            var o,
              l,
              c,
              h,
              u,
              d = "function" == typeof t && t,
              f = !r && s((t = d.selector || t));
            if (((i = i || []), 1 === f.length)) {
              if (
                2 < (l = f[0] = f[0].slice(0)).length &&
                "ID" === (c = l[0]).type &&
                9 === e.nodeType &&
                g &&
                n.relative[l[1].type]
              ) {
                if (
                  !(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0])
                )
                  return i;
                d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
              }
              for (
                o = U.needsContext.test(t) ? 0 : l.length;
                o-- && ((c = l[o]), !n.relative[(h = c.type)]);

              )
                if (
                  (u = n.find[h]) &&
                  (r = u(
                    c.matches[0].replace(et, it),
                    (tt.test(l[0].type) && mt(e.parentNode)) || e
                  ))
                ) {
                  if ((l.splice(o, 1), !(t = r.length && yt(l))))
                    return $.apply(i, r), i;
                  break;
                }
            }
            return (
              (d || a(t, f))(
                r,
                e,
                !g,
                i,
                !e || (tt.test(t) && mt(e.parentNode)) || e
              ),
              i
            );
          }),
        (i.sortStable = x.split("").sort(S).join("") === x),
        (i.detectDuplicates = !!u),
        d(),
        (i.sortDetached = ht(function (t) {
          return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
        })),
        ht(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          ut("type|href|height|width", function (t, e, i) {
            if (!i)
              return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (i.attributes &&
          ht(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          ut("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase())
              return t.defaultValue;
          }),
        ht(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          ut(O, function (t, e, i) {
            var n;
            if (!i)
              return !0 === t[e]
                ? e.toLowerCase()
                : (n = t.getAttributeNode(e)) && n.specified
                ? n.value
                : null;
          }),
        at
      );
    })(t);
    (b.find = C),
      (b.expr = C.selectors),
      (b.expr[":"] = b.expr.pseudos),
      (b.uniqueSort = b.unique = C.uniqueSort),
      (b.text = C.getText),
      (b.isXMLDoc = C.isXML),
      (b.contains = C.contains),
      (b.escapeSelector = C.escape);
    var _ = function (t, e, i) {
        for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (r && b(t).is(i)) break;
            n.push(t);
          }
        return n;
      },
      D = function (t, e) {
        for (var i = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && i.push(t);
        return i;
      },
      T = b.expr.match.needsContext;
    function L(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function M(t, e, i) {
      return p(e)
        ? b.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i;
          })
        : e.nodeType
        ? b.grep(t, function (t) {
            return (t === e) !== i;
          })
        : "string" != typeof e
        ? b.grep(t, function (t) {
            return -1 < a.call(e, t) !== i;
          })
        : b.filter(e, t, i);
    }
    (b.filter = function (t, e, i) {
      var n = e[0];
      return (
        i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType
          ? b.find.matchesSelector(n, t)
            ? [n]
            : []
          : b.find.matches(
              t,
              b.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      b.fn.extend({
        find: function (t) {
          var e,
            i,
            n = this.length,
            r = this;
          if ("string" != typeof t)
            return this.pushStack(
              b(t).filter(function () {
                for (e = 0; e < n; e++) if (b.contains(r[e], this)) return !0;
              })
            );
          for (i = this.pushStack([]), e = 0; e < n; e++) b.find(t, r[e], i);
          return 1 < n ? b.uniqueSort(i) : i;
        },
        filter: function (t) {
          return this.pushStack(M(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(M(this, t || [], !0));
        },
        is: function (t) {
          return !!M(
            this,
            "string" == typeof t && T.test(t) ? b(t) : t || [],
            !1
          ).length;
        },
      });
    var E,
      A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((b.fn.init = function (t, e, i) {
      var n, r;
      if (!t) return this;
      if (((i = i || E), "string" == typeof t)) {
        if (
          !(n =
            "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
              ? [null, t, null]
              : A.exec(t)) ||
          (!n[1] && e)
        )
          return !e || e.jquery
            ? (e || i).find(t)
            : this.constructor(e).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof b ? e[0] : e),
            b.merge(
              this,
              b.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : v, !0)
            ),
            S.test(n[1]) && b.isPlainObject(e))
          )
            for (n in e) p(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (
          (r = v.getElementById(n[2])) && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return t.nodeType
        ? ((this[0] = t), (this.length = 1), this)
        : p(t)
        ? void 0 !== i.ready
          ? i.ready(t)
          : t(b)
        : b.makeArray(t, this);
    }).prototype = b.fn),
      (E = b(v));
    var I = /^(?:parents|prev(?:Until|All))/,
      $ = { children: !0, contents: !0, next: !0, prev: !0 };
    function B(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    b.fn.extend({
      has: function (t) {
        var e = b(t, this),
          i = e.length;
        return this.filter(function () {
          for (var t = 0; t < i; t++) if (b.contains(this, e[t])) return !0;
        });
      },
      closest: function (t, e) {
        var i,
          n = 0,
          r = this.length,
          o = [],
          s = "string" != typeof t && b(t);
        if (!T.test(t))
          for (; n < r; n++)
            for (i = this[n]; i && i !== e; i = i.parentNode)
              if (
                i.nodeType < 11 &&
                (s
                  ? -1 < s.index(i)
                  : 1 === i.nodeType && b.find.matchesSelector(i, t))
              ) {
                o.push(i);
                break;
              }
        return this.pushStack(1 < o.length ? b.uniqueSort(o) : o);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? a.call(b(t), this[0])
            : a.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
      b.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return _(t, "parentNode");
          },
          parentsUntil: function (t, e, i) {
            return _(t, "parentNode", i);
          },
          next: function (t) {
            return B(t, "nextSibling");
          },
          prev: function (t) {
            return B(t, "previousSibling");
          },
          nextAll: function (t) {
            return _(t, "nextSibling");
          },
          prevAll: function (t) {
            return _(t, "previousSibling");
          },
          nextUntil: function (t, e, i) {
            return _(t, "nextSibling", i);
          },
          prevUntil: function (t, e, i) {
            return _(t, "previousSibling", i);
          },
          siblings: function (t) {
            return D((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return D(t.firstChild);
          },
          contents: function (t) {
            return null != t.contentDocument && n(t.contentDocument)
              ? t.contentDocument
              : (L(t, "template") && (t = t.content || t),
                b.merge([], t.childNodes));
          },
        },
        function (t, e) {
          b.fn[t] = function (i, n) {
            var r = b.map(this, e, i);
            return (
              "Until" !== t.slice(-5) && (n = i),
              n && "string" == typeof n && (r = b.filter(n, r)),
              1 < this.length &&
                ($[t] || b.uniqueSort(r), I.test(t) && r.reverse()),
              this.pushStack(r)
            );
          };
        }
      );
    var N = /[^\x20\t\r\n\f]+/g;
    function O(t) {
      return t;
    }
    function j(t) {
      throw t;
    }
    function H(t, e, i, n) {
      var r;
      try {
        t && p((r = t.promise))
          ? r.call(t).done(e).fail(i)
          : t && p((r = t.then))
          ? r.call(t, e, i)
          : e.apply(void 0, [t].slice(n));
      } catch (t) {
        i.apply(void 0, [t]);
      }
    }
    (b.Callbacks = function (t) {
      var e, i;
      t =
        "string" == typeof t
          ? ((e = t),
            (i = {}),
            b.each(e.match(N) || [], function (t, e) {
              i[e] = !0;
            }),
            i)
          : b.extend({}, t);
      var n,
        r,
        o,
        s,
        a = [],
        l = [],
        c = -1,
        h = function () {
          for (s = s || t.once, o = n = !0; l.length; c = -1)
            for (r = l.shift(); ++c < a.length; )
              !1 === a[c].apply(r[0], r[1]) &&
                t.stopOnFalse &&
                ((c = a.length), (r = !1));
          t.memory || (r = !1), (n = !1), s && (a = r ? [] : "");
        },
        u = {
          add: function () {
            return (
              a &&
                (r && !n && ((c = a.length - 1), l.push(r)),
                (function e(i) {
                  b.each(i, function (i, n) {
                    p(n)
                      ? (t.unique && u.has(n)) || a.push(n)
                      : n && n.length && "string" !== y(n) && e(n);
                  });
                })(arguments),
                r && !n && h()),
              this
            );
          },
          remove: function () {
            return (
              b.each(arguments, function (t, e) {
                for (var i; -1 < (i = b.inArray(e, a, i)); )
                  a.splice(i, 1), i <= c && c--;
              }),
              this
            );
          },
          has: function (t) {
            return t ? -1 < b.inArray(t, a) : 0 < a.length;
          },
          empty: function () {
            return a && (a = []), this;
          },
          disable: function () {
            return (s = l = []), (a = r = ""), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (s = l = []), r || n || (a = r = ""), this;
          },
          locked: function () {
            return !!s;
          },
          fireWith: function (t, e) {
            return (
              s ||
                ((e = [t, (e = e || []).slice ? e.slice() : e]),
                l.push(e),
                n || h()),
              this
            );
          },
          fire: function () {
            return u.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return u;
    }),
      b.extend({
        Deferred: function (e) {
          var i = [
              [
                "notify",
                "progress",
                b.Callbacks("memory"),
                b.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                b.Callbacks("once memory"),
                b.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                b.Callbacks("once memory"),
                b.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (t) {
                return r.then(null, t);
              },
              pipe: function () {
                var t = arguments;
                return b
                  .Deferred(function (e) {
                    b.each(i, function (i, n) {
                      var r = p(t[n[4]]) && t[n[4]];
                      o[n[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && p(t.promise)
                          ? t
                              .promise()
                              .progress(e.notify)
                              .done(e.resolve)
                              .fail(e.reject)
                          : e[n[0] + "With"](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  })
                  .promise();
              },
              then: function (e, n, r) {
                var o = 0;
                function s(e, i, n, r) {
                  return function () {
                    var a = this,
                      l = arguments,
                      c = function () {
                        var t, c;
                        if (!(e < o)) {
                          if ((t = n.apply(a, l)) === i.promise())
                            throw new TypeError("Thenable self-resolution");
                          (c =
                            t &&
                            ("object" == typeof t || "function" == typeof t) &&
                            t.then),
                            p(c)
                              ? r
                                ? c.call(t, s(o, i, O, r), s(o, i, j, r))
                                : (o++,
                                  c.call(
                                    t,
                                    s(o, i, O, r),
                                    s(o, i, j, r),
                                    s(o, i, O, i.notifyWith)
                                  ))
                              : (n !== O && ((a = void 0), (l = [t])),
                                (r || i.resolveWith)(a, l));
                        }
                      },
                      h = r
                        ? c
                        : function () {
                            try {
                              c();
                            } catch (t) {
                              b.Deferred.exceptionHook &&
                                b.Deferred.exceptionHook(t, h.stackTrace),
                                o <= e + 1 &&
                                  (n !== j && ((a = void 0), (l = [t])),
                                  i.rejectWith(a, l));
                            }
                          };
                    e
                      ? h()
                      : (b.Deferred.getStackHook &&
                          (h.stackTrace = b.Deferred.getStackHook()),
                        t.setTimeout(h));
                  };
                }
                return b
                  .Deferred(function (t) {
                    i[0][3].add(s(0, t, p(r) ? r : O, t.notifyWith)),
                      i[1][3].add(s(0, t, p(e) ? e : O)),
                      i[2][3].add(s(0, t, p(n) ? n : j));
                  })
                  .promise();
              },
              promise: function (t) {
                return null != t ? b.extend(t, r) : r;
              },
            },
            o = {};
          return (
            b.each(i, function (t, e) {
              var s = e[2],
                a = e[5];
              (r[e[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      n = a;
                    },
                    i[3 - t][2].disable,
                    i[3 - t][3].disable,
                    i[0][2].lock,
                    i[0][3].lock
                  ),
                s.add(e[3].fire),
                (o[e[0]] = function () {
                  return (
                    o[e[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[e[0] + "With"] = s.fireWith);
            }),
            r.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (t) {
          var e = arguments.length,
            i = e,
            n = Array(i),
            o = r.call(arguments),
            s = b.Deferred(),
            a = function (t) {
              return function (i) {
                (n[t] = this),
                  (o[t] = 1 < arguments.length ? r.call(arguments) : i),
                  --e || s.resolveWith(n, o);
              };
            };
          if (
            e <= 1 &&
            (H(t, s.done(a(i)).resolve, s.reject, !e),
            "pending" === s.state() || p(o[i] && o[i].then))
          )
            return s.then();
          for (; i--; ) H(o[i], a(i), s.reject);
          return s.promise();
        },
      });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (b.Deferred.exceptionHook = function (e, i) {
      t.console &&
        t.console.warn &&
        e &&
        P.test(e.name) &&
        t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
    }),
      (b.readyException = function (e) {
        t.setTimeout(function () {
          throw e;
        });
      });
    var z = b.Deferred();
    function W() {
      v.removeEventListener("DOMContentLoaded", W),
        t.removeEventListener("load", W),
        b.ready();
    }
    (b.fn.ready = function (t) {
      return (
        z.then(t).catch(function (t) {
          b.readyException(t);
        }),
        this
      );
    }),
      b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
          (!0 === t ? --b.readyWait : b.isReady) ||
            ((b.isReady = !0) !== t && 0 < --b.readyWait) ||
            z.resolveWith(v, [b]);
        },
      }),
      (b.ready.then = z.then),
      "complete" === v.readyState ||
      ("loading" !== v.readyState && !v.documentElement.doScroll)
        ? t.setTimeout(b.ready)
        : (v.addEventListener("DOMContentLoaded", W),
          t.addEventListener("load", W));
    var F = function (t, e, i, n, r, o, s) {
        var a = 0,
          l = t.length,
          c = null == i;
        if ("object" === y(i))
          for (a in ((r = !0), i)) F(t, e, a, i[a], !0, o, s);
        else if (
          void 0 !== n &&
          ((r = !0),
          p(n) || (s = !0),
          c &&
            (s
              ? (e.call(t, n), (e = null))
              : ((c = e),
                (e = function (t, e, i) {
                  return c.call(b(t), i);
                }))),
          e)
        )
          for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : c ? e.call(t) : l ? e(t[0], i) : o;
      },
      R = /^-ms-/,
      q = /-([a-z])/g;
    function Y(t, e) {
      return e.toUpperCase();
    }
    function V(t) {
      return t.replace(R, "ms-").replace(q, Y);
    }
    var K = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    function U() {
      this.expando = b.expando + U.uid++;
    }
    (U.uid = 1),
      (U.prototype = {
        cache: function (t) {
          var e = t[this.expando];
          return (
            e ||
              ((e = {}),
              K(t) &&
                (t.nodeType
                  ? (t[this.expando] = e)
                  : Object.defineProperty(t, this.expando, {
                      value: e,
                      configurable: !0,
                    }))),
            e
          );
        },
        set: function (t, e, i) {
          var n,
            r = this.cache(t);
          if ("string" == typeof e) r[V(e)] = i;
          else for (n in e) r[V(n)] = e[n];
          return r;
        },
        get: function (t, e) {
          return void 0 === e
            ? this.cache(t)
            : t[this.expando] && t[this.expando][V(e)];
        },
        access: function (t, e, i) {
          return void 0 === e || (e && "string" == typeof e && void 0 === i)
            ? this.get(t, e)
            : (this.set(t, e, i), void 0 !== i ? i : e);
        },
        remove: function (t, e) {
          var i,
            n = t[this.expando];
          if (void 0 !== n) {
            if (void 0 !== e) {
              i = (e = Array.isArray(e)
                ? e.map(V)
                : (e = V(e)) in n
                ? [e]
                : e.match(N) || []).length;
              for (; i--; ) delete n[e[i]];
            }
            (void 0 === e || b.isEmptyObject(n)) &&
              (t.nodeType
                ? (t[this.expando] = void 0)
                : delete t[this.expando]);
          }
        },
        hasData: function (t) {
          var e = t[this.expando];
          return void 0 !== e && !b.isEmptyObject(e);
        },
      });
    var X = new U(),
      Z = new U(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;
    function Q(t, e, i) {
      var n, r;
      if (void 0 === i && 1 === t.nodeType)
        if (
          ((n = "data-" + e.replace(J, "-$&").toLowerCase()),
          "string" == typeof (i = t.getAttribute(n)))
        ) {
          try {
            i =
              "true" === (r = i) ||
              ("false" !== r &&
                ("null" === r
                  ? null
                  : r === +r + ""
                  ? +r
                  : G.test(r)
                  ? JSON.parse(r)
                  : r));
          } catch (t) {}
          Z.set(t, e, i);
        } else i = void 0;
      return i;
    }
    b.extend({
      hasData: function (t) {
        return Z.hasData(t) || X.hasData(t);
      },
      data: function (t, e, i) {
        return Z.access(t, e, i);
      },
      removeData: function (t, e) {
        Z.remove(t, e);
      },
      _data: function (t, e, i) {
        return X.access(t, e, i);
      },
      _removeData: function (t, e) {
        X.remove(t, e);
      },
    }),
      b.fn.extend({
        data: function (t, e) {
          var i,
            n,
            r,
            o = this[0],
            s = o && o.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((r = Z.get(o)), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))
            ) {
              for (i = s.length; i--; )
                s[i] &&
                  0 === (n = s[i].name).indexOf("data-") &&
                  ((n = V(n.slice(5))), Q(o, n, r[n]));
              X.set(o, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof t
            ? this.each(function () {
                Z.set(this, t);
              })
            : F(
                this,
                function (e) {
                  var i;
                  if (o && void 0 === e)
                    return void 0 !== (i = Z.get(o, t)) ||
                      void 0 !== (i = Q(o, t))
                      ? i
                      : void 0;
                  this.each(function () {
                    Z.set(this, t, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            Z.remove(this, t);
          });
        },
      }),
      b.extend({
        queue: function (t, e, i) {
          var n;
          if (t)
            return (
              (e = (e || "fx") + "queue"),
              (n = X.get(t, e)),
              i &&
                (!n || Array.isArray(i)
                  ? (n = X.access(t, e, b.makeArray(i)))
                  : n.push(i)),
              n || []
            );
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var i = b.queue(t, e),
            n = i.length,
            r = i.shift(),
            o = b._queueHooks(t, e);
          "inprogress" === r && ((r = i.shift()), n--),
            r &&
              ("fx" === e && i.unshift("inprogress"),
              delete o.stop,
              r.call(
                t,
                function () {
                  b.dequeue(t, e);
                },
                o
              )),
            !n && o && o.empty.fire();
        },
        _queueHooks: function (t, e) {
          var i = e + "queueHooks";
          return (
            X.get(t, i) ||
            X.access(t, i, {
              empty: b.Callbacks("once memory").add(function () {
                X.remove(t, [e + "queue", i]);
              }),
            })
          );
        },
      }),
      b.fn.extend({
        queue: function (t, e) {
          var i = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), i--),
            arguments.length < i
              ? b.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var i = b.queue(this, t, e);
                  b._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && b.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            b.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var i,
            n = 1,
            r = b.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --n || r.resolveWith(o, [o]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            s--;

          )
            (i = X.get(o[s], t + "queueHooks")) &&
              i.empty &&
              (n++, i.empty.add(a));
          return a(), r.promise(e);
        },
      });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
      it = ["Top", "Right", "Bottom", "Left"],
      nt = v.documentElement,
      rt = function (t) {
        return b.contains(t.ownerDocument, t);
      },
      ot = { composed: !0 };
    nt.getRootNode &&
      (rt = function (t) {
        return (
          b.contains(t.ownerDocument, t) ||
          t.getRootNode(ot) === t.ownerDocument
        );
      });
    var st = function (t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display && rt(t) && "none" === b.css(t, "display"))
      );
    };
    function at(t, e, i, n) {
      var r,
        o,
        s = 20,
        a = n
          ? function () {
              return n.cur();
            }
          : function () {
              return b.css(t, e, "");
            },
        l = a(),
        c = (i && i[3]) || (b.cssNumber[e] ? "" : "px"),
        h =
          t.nodeType &&
          (b.cssNumber[e] || ("px" !== c && +l)) &&
          et.exec(b.css(t, e));
      if (h && h[3] !== c) {
        for (l /= 2, c = c || h[3], h = +l || 1; s--; )
          b.style(t, e, h + c),
            (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
            (h /= o);
        (h *= 2), b.style(t, e, h + c), (i = i || []);
      }
      return (
        i &&
          ((h = +h || +l || 0),
          (r = i[1] ? h + (i[1] + 1) * i[2] : +i[2]),
          n && ((n.unit = c), (n.start = h), (n.end = r))),
        r
      );
    }
    var lt = {};
    function ct(t, e) {
      for (var i, n, r, o, s, a, l, c = [], h = 0, u = t.length; h < u; h++)
        (n = t[h]).style &&
          ((i = n.style.display),
          e
            ? ("none" === i &&
                ((c[h] = X.get(n, "display") || null),
                c[h] || (n.style.display = "")),
              "" === n.style.display &&
                st(n) &&
                (c[h] =
                  ((l = s = o = void 0),
                  (s = (r = n).ownerDocument),
                  (a = r.nodeName),
                  (l = lt[a]) ||
                    ((o = s.body.appendChild(s.createElement(a))),
                    (l = b.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === l && (l = "block"),
                    (lt[a] = l)))))
            : "none" !== i && ((c[h] = "none"), X.set(n, "display", i)));
      for (h = 0; h < u; h++) null != c[h] && (t[h].style.display = c[h]);
      return t;
    }
    b.fn.extend({
      show: function () {
        return ct(this, !0);
      },
      hide: function () {
        return ct(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              st(this) ? b(this).show() : b(this).hide();
            });
      },
    });
    var ht,
      ut,
      dt = /^(?:checkbox|radio)$/i,
      ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      pt = /^$|^module$|\/(?:java|ecma)script/i;
    (ht = v.createDocumentFragment().appendChild(v.createElement("div"))),
      (ut = v.createElement("input")).setAttribute("type", "radio"),
      ut.setAttribute("checked", "checked"),
      ut.setAttribute("name", "t"),
      ht.appendChild(ut),
      (f.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ht.innerHTML = "<textarea>x</textarea>"),
      (f.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue),
      (ht.innerHTML = "<option></option>"),
      (f.option = !!ht.lastChild);
    var gt = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function vt(t, e) {
      var i;
      return (
        (i =
          void 0 !== t.getElementsByTagName
            ? t.getElementsByTagName(e || "*")
            : void 0 !== t.querySelectorAll
            ? t.querySelectorAll(e || "*")
            : []),
        void 0 === e || (e && L(t, e)) ? b.merge([t], i) : i
      );
    }
    function mt(t, e) {
      for (var i = 0, n = t.length; i < n; i++)
        X.set(t[i], "globalEval", !e || X.get(e[i], "globalEval"));
    }
    (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
      (gt.th = gt.td),
      f.option ||
        (gt.optgroup = gt.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var wt = /<|&#?\w+;/;
    function yt(t, e, i, n, r) {
      for (
        var o,
          s,
          a,
          l,
          c,
          h,
          u = e.createDocumentFragment(),
          d = [],
          f = 0,
          p = t.length;
        f < p;
        f++
      )
        if ((o = t[f]) || 0 === o)
          if ("object" === y(o)) b.merge(d, o.nodeType ? [o] : o);
          else if (wt.test(o)) {
            for (
              s = s || u.appendChild(e.createElement("div")),
                a = (ft.exec(o) || ["", ""])[1].toLowerCase(),
                l = gt[a] || gt._default,
                s.innerHTML = l[1] + b.htmlPrefilter(o) + l[2],
                h = l[0];
              h--;

            )
              s = s.lastChild;
            b.merge(d, s.childNodes), ((s = u.firstChild).textContent = "");
          } else d.push(e.createTextNode(o));
      for (u.textContent = "", f = 0; (o = d[f++]); )
        if (n && -1 < b.inArray(o, n)) r && r.push(o);
        else if (
          ((c = rt(o)), (s = vt(u.appendChild(o), "script")), c && mt(s), i)
        )
          for (h = 0; (o = s[h++]); ) pt.test(o.type || "") && i.push(o);
      return u;
    }
    var xt = /^key/,
      bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      kt = /^([^.]*)(?:\.(.+)|)/;
    function Ct() {
      return !0;
    }
    function _t() {
      return !1;
    }
    function Dt(t, e) {
      return (
        (t ===
          (function () {
            try {
              return v.activeElement;
            } catch (t) {}
          })()) ==
        ("focus" === e)
      );
    }
    function Tt(t, e, i, n, r, o) {
      var s, a;
      if ("object" == typeof e) {
        for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
          Tt(t, a, i, n, e[a], o);
        return t;
      }
      if (
        (null == n && null == r
          ? ((r = i), (n = i = void 0))
          : null == r &&
            ("string" == typeof i
              ? ((r = n), (n = void 0))
              : ((r = n), (n = i), (i = void 0))),
        !1 === r)
      )
        r = _t;
      else if (!r) return t;
      return (
        1 === o &&
          ((s = r),
          ((r = function (t) {
            return b().off(t), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = b.guid++))),
        t.each(function () {
          b.event.add(this, e, r, n, i);
        })
      );
    }
    function Lt(t, e, i) {
      i
        ? (X.set(t, e, !1),
          b.event.add(t, e, {
            namespace: !1,
            handler: function (t) {
              var n,
                o,
                s = X.get(this, e);
              if (1 & t.isTrigger && this[e]) {
                if (s.length)
                  (b.event.special[e] || {}).delegateType &&
                    t.stopPropagation();
                else if (
                  ((s = r.call(arguments)),
                  X.set(this, e, s),
                  (n = i(this, e)),
                  this[e](),
                  s !== (o = X.get(this, e)) || n
                    ? X.set(this, e, !1)
                    : (o = {}),
                  s !== o)
                )
                  return (
                    t.stopImmediatePropagation(), t.preventDefault(), o.value
                  );
              } else
                s.length &&
                  (X.set(this, e, {
                    value: b.event.trigger(
                      b.extend(s[0], b.Event.prototype),
                      s.slice(1),
                      this
                    ),
                  }),
                  t.stopImmediatePropagation());
            },
          }))
        : void 0 === X.get(t, e) && b.event.add(t, e, Ct);
    }
    (b.event = {
      global: {},
      add: function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          c,
          h,
          u,
          d,
          f,
          p,
          g,
          v = X.get(t);
        if (K(t))
          for (
            i.handler && ((i = (o = i).handler), (r = o.selector)),
              r && b.find.matchesSelector(nt, r),
              i.guid || (i.guid = b.guid++),
              (l = v.events) || (l = v.events = Object.create(null)),
              (s = v.handle) ||
                (s = v.handle =
                  function (e) {
                    return void 0 !== b && b.event.triggered !== e.type
                      ? b.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              c = (e = (e || "").match(N) || [""]).length;
            c--;

          )
            (f = g = (a = kt.exec(e[c]) || [])[1]),
              (p = (a[2] || "").split(".").sort()),
              f &&
                ((u = b.event.special[f] || {}),
                (f = (r ? u.delegateType : u.bindType) || f),
                (u = b.event.special[f] || {}),
                (h = b.extend(
                  {
                    type: f,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && b.expr.match.needsContext.test(r),
                    namespace: p.join("."),
                  },
                  o
                )),
                (d = l[f]) ||
                  (((d = l[f] = []).delegateCount = 0),
                  (u.setup && !1 !== u.setup.call(t, n, p, s)) ||
                    (t.addEventListener && t.addEventListener(f, s))),
                u.add &&
                  (u.add.call(t, h),
                  h.handler.guid || (h.handler.guid = i.guid)),
                r ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                (b.event.global[f] = !0));
      },
      remove: function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          c,
          h,
          u,
          d,
          f,
          p,
          g,
          v = X.hasData(t) && X.get(t);
        if (v && (l = v.events)) {
          for (c = (e = (e || "").match(N) || [""]).length; c--; )
            if (
              ((f = g = (a = kt.exec(e[c]) || [])[1]),
              (p = (a[2] || "").split(".").sort()),
              f)
            ) {
              for (
                u = b.event.special[f] || {},
                  d = l[(f = (n ? u.delegateType : u.bindType) || f)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = d.length;
                o--;

              )
                (h = d[o]),
                  (!r && g !== h.origType) ||
                    (i && i.guid !== h.guid) ||
                    (a && !a.test(h.namespace)) ||
                    (n && n !== h.selector && ("**" !== n || !h.selector)) ||
                    (d.splice(o, 1),
                    h.selector && d.delegateCount--,
                    u.remove && u.remove.call(t, h));
              s &&
                !d.length &&
                ((u.teardown && !1 !== u.teardown.call(t, p, v.handle)) ||
                  b.removeEvent(t, f, v.handle),
                delete l[f]);
            } else for (f in l) b.event.remove(t, f + e[c], i, n, !0);
          b.isEmptyObject(l) && X.remove(t, "handle events");
        }
      },
      dispatch: function (t) {
        var e,
          i,
          n,
          r,
          o,
          s,
          a = new Array(arguments.length),
          l = b.event.fix(t),
          c = (X.get(this, "events") || Object.create(null))[l.type] || [],
          h = b.event.special[l.type] || {};
        for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
        if (
          ((l.delegateTarget = this),
          !h.preDispatch || !1 !== h.preDispatch.call(this, l))
        ) {
          for (
            s = b.event.handlers.call(this, l, c), e = 0;
            (r = s[e++]) && !l.isPropagationStopped();

          )
            for (
              l.currentTarget = r.elem, i = 0;
              (o = r.handlers[i++]) && !l.isImmediatePropagationStopped();

            )
              (l.rnamespace &&
                !1 !== o.namespace &&
                !l.rnamespace.test(o.namespace)) ||
                ((l.handleObj = o),
                (l.data = o.data),
                void 0 !==
                  (n = (
                    (b.event.special[o.origType] || {}).handle || o.handler
                  ).apply(r.elem, a)) &&
                  !1 === (l.result = n) &&
                  (l.preventDefault(), l.stopPropagation()));
          return h.postDispatch && h.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          a = [],
          l = e.delegateCount,
          c = t.target;
        if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
              for (o = [], s = {}, i = 0; i < l; i++)
                void 0 === s[(r = (n = e[i]).selector + " ")] &&
                  (s[r] = n.needsContext
                    ? -1 < b(r, this).index(c)
                    : b.find(r, this, null, [c]).length),
                  s[r] && o.push(n);
              o.length && a.push({ elem: c, handlers: o });
            }
        return (
          (c = this),
          l < e.length && a.push({ elem: c, handlers: e.slice(l) }),
          a
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(b.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: p(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (t) {
        return t[b.expando] ? t : new b.Event(t);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (t) {
            var e = this || t;
            return (
              dt.test(e.type) && e.click && L(e, "input") && Lt(e, "click", Ct),
              !1
            );
          },
          trigger: function (t) {
            var e = this || t;
            return (
              dt.test(e.type) && e.click && L(e, "input") && Lt(e, "click"), !0
            );
          },
          _default: function (t) {
            var e = t.target;
            return (
              (dt.test(e.type) &&
                e.click &&
                L(e, "input") &&
                X.get(e, "click")) ||
              L(e, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
    }),
      (b.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i);
      }),
      (b.Event = function (t, e) {
        if (!(this instanceof b.Event)) return new b.Event(t, e);
        t && t.type
          ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
              t.defaultPrevented ||
              (void 0 === t.defaultPrevented && !1 === t.returnValue)
                ? Ct
                : _t),
            (this.target =
              t.target && 3 === t.target.nodeType
                ? t.target.parentNode
                : t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget))
          : (this.type = t),
          e && b.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || Date.now()),
          (this[b.expando] = !0);
      }),
      (b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: _t,
        isPropagationStopped: _t,
        isImmediatePropagationStopped: _t,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = Ct),
            t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = Ct),
            t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = Ct),
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      b.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (t) {
            var e = t.button;
            return null == t.which && xt.test(t.type)
              ? null != t.charCode
                ? t.charCode
                : t.keyCode
              : !t.which && void 0 !== e && bt.test(t.type)
              ? 1 & e
                ? 1
                : 2 & e
                ? 3
                : 4 & e
                ? 2
                : 0
              : t.which;
          },
        },
        b.event.addProp
      ),
      b.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        b.event.special[t] = {
          setup: function () {
            return Lt(this, t, Dt), !1;
          },
          trigger: function () {
            return Lt(this, t), !0;
          },
          delegateType: e,
        };
      }),
      b.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          b.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var i,
                n = t.relatedTarget,
                r = t.handleObj;
              return (
                (n && (n === this || b.contains(this, n))) ||
                  ((t.type = r.origType),
                  (i = r.handler.apply(this, arguments)),
                  (t.type = e)),
                i
              );
            },
          };
        }
      ),
      b.fn.extend({
        on: function (t, e, i, n) {
          return Tt(this, t, e, i, n);
        },
        one: function (t, e, i, n) {
          return Tt(this, t, e, i, n, 1);
        },
        off: function (t, e, i) {
          var n, r;
          if (t && t.preventDefault && t.handleObj)
            return (
              (n = t.handleObj),
              b(t.delegateTarget).off(
                n.namespace ? n.origType + "." + n.namespace : n.origType,
                n.selector,
                n.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (r in t) this.off(r, e, t[r]);
            return this;
          }
          return (
            (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
            !1 === i && (i = _t),
            this.each(function () {
              b.event.remove(this, t, i, e);
            })
          );
        },
      });
    var St = /<script|<style|<link/i,
      Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function At(t, e) {
      return (
        (L(t, "table") &&
          L(11 !== e.nodeType ? e : e.firstChild, "tr") &&
          b(t).children("tbody")[0]) ||
        t
      );
    }
    function It(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function $t(t) {
      return (
        "true/" === (t.type || "").slice(0, 5)
          ? (t.type = t.type.slice(5))
          : t.removeAttribute("type"),
        t
      );
    }
    function Bt(t, e) {
      var i, n, r, o, s, a;
      if (1 === e.nodeType) {
        if (X.hasData(t) && (a = X.get(t).events))
          for (r in (X.remove(e, "handle events"), a))
            for (i = 0, n = a[r].length; i < n; i++) b.event.add(e, r, a[r][i]);
        Z.hasData(t) && ((o = Z.access(t)), (s = b.extend({}, o)), Z.set(e, s));
      }
    }
    function Nt(t, e, i, n) {
      e = o(e);
      var r,
        s,
        a,
        l,
        c,
        h,
        u = 0,
        d = t.length,
        g = d - 1,
        v = e[0],
        m = p(v);
      if (m || (1 < d && "string" == typeof v && !f.checkClone && Mt.test(v)))
        return t.each(function (r) {
          var o = t.eq(r);
          m && (e[0] = v.call(this, r, o.html())), Nt(o, e, i, n);
        });
      if (
        d &&
        ((s = (r = yt(e, t[0].ownerDocument, !1, t, n)).firstChild),
        1 === r.childNodes.length && (r = s),
        s || n)
      ) {
        for (l = (a = b.map(vt(r, "script"), It)).length; u < d; u++)
          (c = r),
            u !== g &&
              ((c = b.clone(c, !0, !0)), l && b.merge(a, vt(c, "script"))),
            i.call(t[u], c, u);
        if (l)
          for (
            h = a[a.length - 1].ownerDocument, b.map(a, $t), u = 0;
            u < l;
            u++
          )
            (c = a[u]),
              pt.test(c.type || "") &&
                !X.access(c, "globalEval") &&
                b.contains(h, c) &&
                (c.src && "module" !== (c.type || "").toLowerCase()
                  ? b._evalUrl &&
                    !c.noModule &&
                    b._evalUrl(
                      c.src,
                      { nonce: c.nonce || c.getAttribute("nonce") },
                      h
                    )
                  : w(c.textContent.replace(Et, ""), c, h));
      }
      return t;
    }
    function Ot(t, e, i) {
      for (var n, r = e ? b.filter(e, t) : t, o = 0; null != (n = r[o]); o++)
        i || 1 !== n.nodeType || b.cleanData(vt(n)),
          n.parentNode &&
            (i && rt(n) && mt(vt(n, "script")), n.parentNode.removeChild(n));
      return t;
    }
    b.extend({
      htmlPrefilter: function (t) {
        return t;
      },
      clone: function (t, e, i) {
        var n,
          r,
          o,
          s,
          a,
          l,
          c,
          h = t.cloneNode(!0),
          u = rt(t);
        if (
          !(
            f.noCloneChecked ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            b.isXMLDoc(t)
          )
        )
          for (s = vt(h), n = 0, r = (o = vt(t)).length; n < r; n++)
            (a = o[n]),
              "input" === (c = (l = s[n]).nodeName.toLowerCase()) &&
              dt.test(a.type)
                ? (l.checked = a.checked)
                : ("input" !== c && "textarea" !== c) ||
                  (l.defaultValue = a.defaultValue);
        if (e)
          if (i)
            for (
              o = o || vt(t), s = s || vt(h), n = 0, r = o.length;
              n < r;
              n++
            )
              Bt(o[n], s[n]);
          else Bt(t, h);
        return (
          0 < (s = vt(h, "script")).length && mt(s, !u && vt(t, "script")), h
        );
      },
      cleanData: function (t) {
        for (
          var e, i, n, r = b.event.special, o = 0;
          void 0 !== (i = t[o]);
          o++
        )
          if (K(i)) {
            if ((e = i[X.expando])) {
              if (e.events)
                for (n in e.events)
                  r[n] ? b.event.remove(i, n) : b.removeEvent(i, n, e.handle);
              i[X.expando] = void 0;
            }
            i[Z.expando] && (i[Z.expando] = void 0);
          }
      },
    }),
      b.fn.extend({
        detach: function (t) {
          return Ot(this, t, !0);
        },
        remove: function (t) {
          return Ot(this, t);
        },
        text: function (t) {
          return F(
            this,
            function (t) {
              return void 0 === t
                ? b.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return Nt(this, arguments, function (t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              At(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return Nt(this, arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = At(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return Nt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return Nt(this, arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (b.cleanData(vt(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return b.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return F(
            this,
            function (t) {
              var e = this[0] || {},
                i = 0,
                n = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !St.test(t) &&
                !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = b.htmlPrefilter(t);
                try {
                  for (; i < n; i++)
                    1 === (e = this[i] || {}).nodeType &&
                      (b.cleanData(vt(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = [];
          return Nt(
            this,
            arguments,
            function (e) {
              var i = this.parentNode;
              b.inArray(this, t) < 0 &&
                (b.cleanData(vt(this)), i && i.replaceChild(e, this));
            },
            t
          );
        },
      }),
      b.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          b.fn[t] = function (t) {
            for (var i, n = [], r = b(t), o = r.length - 1, a = 0; a <= o; a++)
              (i = a === o ? this : this.clone(!0)),
                b(r[a])[e](i),
                s.apply(n, i.get());
            return this.pushStack(n);
          };
        }
      );
    var jt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
      Ht = function (e) {
        var i = e.ownerDocument.defaultView;
        return (i && i.opener) || (i = t), i.getComputedStyle(e);
      },
      Pt = function (t, e, i) {
        var n,
          r,
          o = {};
        for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
        for (r in ((n = i.call(t)), e)) t.style[r] = o[r];
        return n;
      },
      zt = new RegExp(it.join("|"), "i");
    function Wt(t, e, i) {
      var n,
        r,
        o,
        s,
        a = t.style;
      return (
        (i = i || Ht(t)) &&
          ("" !== (s = i.getPropertyValue(e) || i[e]) ||
            rt(t) ||
            (s = b.style(t, e)),
          !f.pixelBoxStyles() &&
            jt.test(s) &&
            zt.test(e) &&
            ((n = a.width),
            (r = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = i.width),
            (a.width = n),
            (a.minWidth = r),
            (a.maxWidth = o))),
        void 0 !== s ? s + "" : s
      );
    }
    function Ft(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (h) {
          (c.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (h.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            nt.appendChild(c).appendChild(h);
          var e = t.getComputedStyle(h);
          (n = "1%" !== e.top),
            (l = 12 === i(e.marginLeft)),
            (h.style.right = "60%"),
            (s = 36 === i(e.right)),
            (r = 36 === i(e.width)),
            (h.style.position = "absolute"),
            (o = 12 === i(h.offsetWidth / 3)),
            nt.removeChild(c),
            (h = null);
        }
      }
      function i(t) {
        return Math.round(parseFloat(t));
      }
      var n,
        r,
        o,
        s,
        a,
        l,
        c = v.createElement("div"),
        h = v.createElement("div");
      h.style &&
        ((h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (f.clearCloneStyle = "content-box" === h.style.backgroundClip),
        b.extend(f, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), s;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), l;
          },
          scrollboxSize: function () {
            return e(), o;
          },
          reliableTrDimensions: function () {
            var e, i, n, r;
            return (
              null == a &&
                ((e = v.createElement("table")),
                (i = v.createElement("tr")),
                (n = v.createElement("div")),
                (e.style.cssText = "position:absolute;left:-11111px"),
                (i.style.height = "1px"),
                (n.style.height = "9px"),
                nt.appendChild(e).appendChild(i).appendChild(n),
                (r = t.getComputedStyle(i)),
                (a = 3 < parseInt(r.height)),
                nt.removeChild(e)),
              a
            );
          },
        }));
    })();
    var Rt = ["Webkit", "Moz", "ms"],
      qt = v.createElement("div").style,
      Yt = {};
    function Vt(t) {
      return (
        b.cssProps[t] ||
        Yt[t] ||
        (t in qt
          ? t
          : (Yt[t] =
              (function (t) {
                for (
                  var e = t[0].toUpperCase() + t.slice(1), i = Rt.length;
                  i--;

                )
                  if ((t = Rt[i] + e) in qt) return t;
              })(t) || t))
      );
    }
    var Kt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^--/,
      Xt = { position: "absolute", visibility: "hidden", display: "block" },
      Zt = { letterSpacing: "0", fontWeight: "400" };
    function Gt(t, e, i) {
      var n = et.exec(e);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function Jt(t, e, i, n, r, o) {
      var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
      if (i === (n ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        "margin" === i && (l += b.css(t, i + it[s], !0, r)),
          n
            ? ("content" === i && (l -= b.css(t, "padding" + it[s], !0, r)),
              "margin" !== i &&
                (l -= b.css(t, "border" + it[s] + "Width", !0, r)))
            : ((l += b.css(t, "padding" + it[s], !0, r)),
              "padding" !== i
                ? (l += b.css(t, "border" + it[s] + "Width", !0, r))
                : (a += b.css(t, "border" + it[s] + "Width", !0, r)));
      return (
        !n &&
          0 <= o &&
          (l +=
            Math.max(
              0,
              Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5
              )
            ) || 0),
        l
      );
    }
    function Qt(t, e, i) {
      var n = Ht(t),
        r =
          (!f.boxSizingReliable() || i) &&
          "border-box" === b.css(t, "boxSizing", !1, n),
        o = r,
        s = Wt(t, e, n),
        a = "offset" + e[0].toUpperCase() + e.slice(1);
      if (jt.test(s)) {
        if (!i) return s;
        s = "auto";
      }
      return (
        ((!f.boxSizingReliable() && r) ||
          (!f.reliableTrDimensions() && L(t, "tr")) ||
          "auto" === s ||
          (!parseFloat(s) && "inline" === b.css(t, "display", !1, n))) &&
          t.getClientRects().length &&
          ((r = "border-box" === b.css(t, "boxSizing", !1, n)),
          (o = a in t) && (s = t[a])),
        (s = parseFloat(s) || 0) +
          Jt(t, e, i || (r ? "border" : "content"), o, n, s) +
          "px"
      );
    }
    function te(t, e, i, n, r) {
      return new te.prototype.init(t, e, i, n, r);
    }
    b.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var i = Wt(t, "opacity");
              return "" === i ? "1" : i;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r,
            o,
            s,
            a = V(e),
            l = Ut.test(e),
            c = t.style;
          if (
            (l || (e = Vt(a)),
            (s = b.cssHooks[e] || b.cssHooks[a]),
            void 0 === i)
          )
            return s && "get" in s && void 0 !== (r = s.get(t, !1, n))
              ? r
              : c[e];
          "string" == (o = typeof i) &&
            (r = et.exec(i)) &&
            r[1] &&
            ((i = at(t, e, r)), (o = "number")),
            null != i &&
              i == i &&
              ("number" !== o ||
                l ||
                (i += (r && r[3]) || (b.cssNumber[a] ? "" : "px")),
              f.clearCloneStyle ||
                "" !== i ||
                0 !== e.indexOf("background") ||
                (c[e] = "inherit"),
              (s && "set" in s && void 0 === (i = s.set(t, i, n))) ||
                (l ? c.setProperty(e, i) : (c[e] = i)));
        }
      },
      css: function (t, e, i, n) {
        var r,
          o,
          s,
          a = V(e);
        return (
          Ut.test(e) || (e = Vt(a)),
          (s = b.cssHooks[e] || b.cssHooks[a]) &&
            "get" in s &&
            (r = s.get(t, !0, i)),
          void 0 === r && (r = Wt(t, e, n)),
          "normal" === r && e in Zt && (r = Zt[e]),
          "" === i || i
            ? ((o = parseFloat(r)), !0 === i || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      b.each(["height", "width"], function (t, e) {
        b.cssHooks[e] = {
          get: function (t, i, n) {
            if (i)
              return !Kt.test(b.css(t, "display")) ||
                (t.getClientRects().length && t.getBoundingClientRect().width)
                ? Qt(t, e, n)
                : Pt(t, Xt, function () {
                    return Qt(t, e, n);
                  });
          },
          set: function (t, i, n) {
            var r,
              o = Ht(t),
              s = !f.scrollboxSize() && "absolute" === o.position,
              a = (s || n) && "border-box" === b.css(t, "boxSizing", !1, o),
              l = n ? Jt(t, e, n, a, o) : 0;
            return (
              a &&
                s &&
                (l -= Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    parseFloat(o[e]) -
                    Jt(t, e, "border", !1, o) -
                    0.5
                )),
              l &&
                (r = et.exec(i)) &&
                "px" !== (r[3] || "px") &&
                ((t.style[e] = i), (i = b.css(t, e))),
              Gt(0, i, l)
            );
          },
        };
      }),
      (b.cssHooks.marginLeft = Ft(f.reliableMarginLeft, function (t, e) {
        if (e)
          return (
            (parseFloat(Wt(t, "marginLeft")) ||
              t.getBoundingClientRect().left -
                Pt(t, { marginLeft: 0 }, function () {
                  return t.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      b.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (b.cssHooks[t + e] = {
          expand: function (i) {
            for (
              var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i];
              n < 4;
              n++
            )
              r[t + it[n] + e] = o[n] || o[n - 2] || o[0];
            return r;
          },
        }),
          "margin" !== t && (b.cssHooks[t + e].set = Gt);
      }),
      b.fn.extend({
        css: function (t, e) {
          return F(
            this,
            function (t, e, i) {
              var n,
                r,
                o = {},
                s = 0;
              if (Array.isArray(e)) {
                for (n = Ht(t), r = e.length; s < r; s++)
                  o[e[s]] = b.css(t, e[s], !1, n);
                return o;
              }
              return void 0 !== i ? b.style(t, e, i) : b.css(t, e);
            },
            t,
            e,
            1 < arguments.length
          );
        },
      }),
      (((b.Tween = te).prototype = {
        constructor: te,
        init: function (t, e, i, n, r, o) {
          (this.elem = t),
            (this.prop = i),
            (this.easing = r || b.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = n),
            (this.unit = o || (b.cssNumber[i] ? "" : "px"));
        },
        cur: function () {
          var t = te.propHooks[this.prop];
          return t && t.get ? t.get(this) : te.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            i = te.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e =
                  b.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : te.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = te.prototype),
      ((te.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType ||
              (null != t.elem[t.prop] && null == t.elem.style[t.prop])
              ? t.elem[t.prop]
              : (e = b.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function (t) {
            b.fx.step[t.prop]
              ? b.fx.step[t.prop](t)
              : 1 !== t.elem.nodeType ||
                (!b.cssHooks[t.prop] && null == t.elem.style[Vt(t.prop)])
              ? (t.elem[t.prop] = t.now)
              : b.style(t.elem, t.prop, t.now + t.unit);
          },
        },
      }).scrollTop = te.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (b.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (b.fx = te.prototype.init),
      (b.fx.step = {});
    var ee,
      ie,
      ne,
      re,
      oe = /^(?:toggle|show|hide)$/,
      se = /queueHooks$/;
    function ae() {
      ie &&
        (!1 === v.hidden && t.requestAnimationFrame
          ? t.requestAnimationFrame(ae)
          : t.setTimeout(ae, b.fx.interval),
        b.fx.tick());
    }
    function le() {
      return (
        t.setTimeout(function () {
          ee = void 0;
        }),
        (ee = Date.now())
      );
    }
    function ce(t, e) {
      var i,
        n = 0,
        r = { height: t };
      for (e = e ? 1 : 0; n < 4; n += 2 - e)
        r["margin" + (i = it[n])] = r["padding" + i] = t;
      return e && (r.opacity = r.width = t), r;
    }
    function he(t, e, i) {
      for (
        var n,
          r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]),
          o = 0,
          s = r.length;
        o < s;
        o++
      )
        if ((n = r[o].call(i, e, t))) return n;
    }
    function ue(t, e, i) {
      var n,
        r,
        o = 0,
        s = ue.prefilters.length,
        a = b.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var e = ee || le(),
              i = Math.max(0, c.startTime + c.duration - e),
              n = 1 - (i / c.duration || 0),
              o = 0,
              s = c.tweens.length;
            o < s;
            o++
          )
            c.tweens[o].run(n);
          return (
            a.notifyWith(t, [c, n, i]),
            n < 1 && s
              ? i
              : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
          );
        },
        c = a.promise({
          elem: t,
          props: b.extend({}, e),
          opts: b.extend(
            !0,
            { specialEasing: {}, easing: b.easing._default },
            i
          ),
          originalProperties: e,
          originalOptions: i,
          startTime: ee || le(),
          duration: i.duration,
          tweens: [],
          createTween: function (e, i) {
            var n = b.Tween(
              t,
              c.opts,
              e,
              i,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(n), n;
          },
          stop: function (e) {
            var i = 0,
              n = e ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; i < n; i++) c.tweens[i].run(1);
            return (
              e
                ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                : a.rejectWith(t, [c, e]),
              this
            );
          },
        }),
        h = c.props;
      for (
        (function (t, e) {
          var i, n, r, o, s;
          for (i in t)
            if (
              ((r = e[(n = V(i))]),
              (o = t[i]),
              Array.isArray(o) && ((r = o[1]), (o = t[i] = o[0])),
              i !== n && ((t[n] = o), delete t[i]),
              (s = b.cssHooks[n]) && ("expand" in s))
            )
              for (i in ((o = s.expand(o)), delete t[n], o))
                (i in t) || ((t[i] = o[i]), (e[i] = r));
            else e[n] = r;
        })(h, c.opts.specialEasing);
        o < s;
        o++
      )
        if ((n = ue.prefilters[o].call(c, t, h, c.opts)))
          return (
            p(n.stop) &&
              (b._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        b.map(h, he, c),
        p(c.opts.start) && c.opts.start.call(t, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        b.fx.timer(b.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
      );
    }
    (b.Animation = b.extend(ue, {
      tweeners: {
        "*": [
          function (t, e) {
            var i = this.createTween(t, e);
            return at(i.elem, t, et.exec(e), i), i;
          },
        ],
      },
      tweener: function (t, e) {
        p(t) ? ((e = t), (t = ["*"])) : (t = t.match(N));
        for (var i, n = 0, r = t.length; n < r; n++)
          (i = t[n]),
            (ue.tweeners[i] = ue.tweeners[i] || []),
            ue.tweeners[i].unshift(e);
      },
      prefilters: [
        function (t, e, i) {
          var n,
            r,
            o,
            s,
            a,
            l,
            c,
            h,
            u = "width" in e || "height" in e,
            d = this,
            f = {},
            p = t.style,
            g = t.nodeType && st(t),
            v = X.get(t, "fxshow");
          for (n in (i.queue ||
            (null == (s = b._queueHooks(t, "fx")).unqueued &&
              ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
            s.unqueued++,
            d.always(function () {
              d.always(function () {
                s.unqueued--, b.queue(t, "fx").length || s.empty.fire();
              });
            })),
          e))
            if (((r = e[n]), oe.test(r))) {
              if (
                (delete e[n],
                (o = o || "toggle" === r),
                r === (g ? "hide" : "show"))
              ) {
                if ("show" !== r || !v || void 0 === v[n]) continue;
                g = !0;
              }
              f[n] = (v && v[n]) || b.style(t, n);
            }
          if ((l = !b.isEmptyObject(e)) || !b.isEmptyObject(f))
            for (n in (u &&
              1 === t.nodeType &&
              ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
              null == (c = v && v.display) && (c = X.get(t, "display")),
              "none" === (h = b.css(t, "display")) &&
                (c
                  ? (h = c)
                  : (ct([t], !0),
                    (c = t.style.display || c),
                    (h = b.css(t, "display")),
                    ct([t]))),
              ("inline" === h || ("inline-block" === h && null != c)) &&
                "none" === b.css(t, "float") &&
                (l ||
                  (d.done(function () {
                    p.display = c;
                  }),
                  null == c && ((h = p.display), (c = "none" === h ? "" : h))),
                (p.display = "inline-block"))),
            i.overflow &&
              ((p.overflow = "hidden"),
              d.always(function () {
                (p.overflow = i.overflow[0]),
                  (p.overflowX = i.overflow[1]),
                  (p.overflowY = i.overflow[2]);
              })),
            (l = !1),
            f))
              l ||
                (v
                  ? "hidden" in v && (g = v.hidden)
                  : (v = X.access(t, "fxshow", { display: c })),
                o && (v.hidden = !g),
                g && ct([t], !0),
                d.done(function () {
                  for (n in (g || ct([t]), X.remove(t, "fxshow"), f))
                    b.style(t, n, f[n]);
                })),
                (l = he(g ? v[n] : 0, n, d)),
                n in v ||
                  ((v[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
        },
      ],
      prefilter: function (t, e) {
        e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
      },
    })),
      (b.speed = function (t, e, i) {
        var n =
          t && "object" == typeof t
            ? b.extend({}, t)
            : {
                complete: i || (!i && e) || (p(t) && t),
                duration: t,
                easing: (i && e) || (e && !p(e) && e),
              };
        return (
          b.fx.off
            ? (n.duration = 0)
            : "number" != typeof n.duration &&
              (n.duration in b.fx.speeds
                ? (n.duration = b.fx.speeds[n.duration])
                : (n.duration = b.fx.speeds._default)),
          (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
          (n.old = n.complete),
          (n.complete = function () {
            p(n.old) && n.old.call(this), n.queue && b.dequeue(this, n.queue);
          }),
          n
        );
      }),
      b.fn.extend({
        fadeTo: function (t, e, i, n) {
          return this.filter(st)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, i, n);
        },
        animate: function (t, e, i, n) {
          var r = b.isEmptyObject(t),
            o = b.speed(e, i, n),
            s = function () {
              var e = ue(this, b.extend({}, t), o);
              (r || X.get(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (t, e, i) {
          var n = function (t) {
            var e = t.stop;
            delete t.stop, e(i);
          };
          return (
            "string" != typeof t && ((i = e), (e = t), (t = void 0)),
            e && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                r = null != t && t + "queueHooks",
                o = b.timers,
                s = X.get(this);
              if (r) s[r] && s[r].stop && n(s[r]);
              else for (r in s) s[r] && s[r].stop && se.test(r) && n(s[r]);
              for (r = o.length; r--; )
                o[r].elem !== this ||
                  (null != t && o[r].queue !== t) ||
                  (o[r].anim.stop(i), (e = !1), o.splice(r, 1));
              (!e && i) || b.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function () {
              var e,
                i = X.get(this),
                n = i[t + "queue"],
                r = i[t + "queueHooks"],
                o = b.timers,
                s = n ? n.length : 0;
              for (
                i.finish = !0,
                  b.queue(this, t, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = o.length;
                e--;

              )
                o[e].elem === this &&
                  o[e].queue === t &&
                  (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; e < s; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete i.finish;
            })
          );
        },
      }),
      b.each(["toggle", "show", "hide"], function (t, e) {
        var i = b.fn[e];
        b.fn[e] = function (t, n, r) {
          return null == t || "boolean" == typeof t
            ? i.apply(this, arguments)
            : this.animate(ce(e, !0), t, n, r);
        };
      }),
      b.each(
        {
          slideDown: ce("show"),
          slideUp: ce("hide"),
          slideToggle: ce("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          b.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n);
          };
        }
      ),
      (b.timers = []),
      (b.fx.tick = function () {
        var t,
          e = 0,
          i = b.timers;
        for (ee = Date.now(); e < i.length; e++)
          (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || b.fx.stop(), (ee = void 0);
      }),
      (b.fx.timer = function (t) {
        b.timers.push(t), b.fx.start();
      }),
      (b.fx.interval = 13),
      (b.fx.start = function () {
        ie || ((ie = !0), ae());
      }),
      (b.fx.stop = function () {
        ie = null;
      }),
      (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (b.fn.delay = function (e, i) {
        return (
          (e = (b.fx && b.fx.speeds[e]) || e),
          (i = i || "fx"),
          this.queue(i, function (i, n) {
            var r = t.setTimeout(i, e);
            n.stop = function () {
              t.clearTimeout(r);
            };
          })
        );
      }),
      (ne = v.createElement("input")),
      (re = v.createElement("select").appendChild(v.createElement("option"))),
      (ne.type = "checkbox"),
      (f.checkOn = "" !== ne.value),
      (f.optSelected = re.selected),
      ((ne = v.createElement("input")).value = "t"),
      (ne.type = "radio"),
      (f.radioValue = "t" === ne.value);
    var de,
      fe = b.expr.attrHandle;
    b.fn.extend({
      attr: function (t, e) {
        return F(this, b.attr, t, e, 1 < arguments.length);
      },
      removeAttr: function (t) {
        return this.each(function () {
          b.removeAttr(this, t);
        });
      },
    }),
      b.extend({
        attr: function (t, e, i) {
          var n,
            r,
            o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === t.getAttribute
              ? b.prop(t, e, i)
              : ((1 === o && b.isXMLDoc(t)) ||
                  (r =
                    b.attrHooks[e.toLowerCase()] ||
                    (b.expr.match.bool.test(e) ? de : void 0)),
                void 0 !== i
                  ? null === i
                    ? void b.removeAttr(t, e)
                    : r && "set" in r && void 0 !== (n = r.set(t, i, e))
                    ? n
                    : (t.setAttribute(e, i + ""), i)
                  : r && "get" in r && null !== (n = r.get(t, e))
                  ? n
                  : null == (n = b.find.attr(t, e))
                  ? void 0
                  : n);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!f.radioValue && "radio" === e && L(t, "input")) {
                var i = t.value;
                return t.setAttribute("type", e), i && (t.value = i), e;
              }
            },
          },
        },
        removeAttr: function (t, e) {
          var i,
            n = 0,
            r = e && e.match(N);
          if (r && 1 === t.nodeType)
            for (; (i = r[n++]); ) t.removeAttribute(i);
        },
      }),
      (de = {
        set: function (t, e, i) {
          return !1 === e ? b.removeAttr(t, i) : t.setAttribute(i, i), i;
        },
      }),
      b.each(b.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = fe[e] || b.find.attr;
        fe[e] = function (t, e, n) {
          var r,
            o,
            s = e.toLowerCase();
          return (
            n ||
              ((o = fe[s]),
              (fe[s] = r),
              (r = null != i(t, e, n) ? s : null),
              (fe[s] = o)),
            r
          );
        };
      });
    var pe = /^(?:input|select|textarea|button)$/i,
      ge = /^(?:a|area)$/i;
    function ve(t) {
      return (t.match(N) || []).join(" ");
    }
    function me(t) {
      return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function we(t) {
      return Array.isArray(t) ? t : ("string" == typeof t && t.match(N)) || [];
    }
    b.fn.extend({
      prop: function (t, e) {
        return F(this, b.prop, t, e, 1 < arguments.length);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[b.propFix[t] || t];
        });
      },
    }),
      b.extend({
        prop: function (t, e, i) {
          var n,
            r,
            o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && b.isXMLDoc(t)) ||
                ((e = b.propFix[e] || e), (r = b.propHooks[e])),
              void 0 !== i
                ? r && "set" in r && void 0 !== (n = r.set(t, i, e))
                  ? n
                  : (t[e] = i)
                : r && "get" in r && null !== (n = r.get(t, e))
                ? n
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = b.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : pe.test(t.nodeName) || (ge.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      f.optSelected ||
        (b.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
          set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      b.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          b.propFix[this.toLowerCase()] = this;
        }
      ),
      b.fn.extend({
        addClass: function (t) {
          var e,
            i,
            n,
            r,
            o,
            s,
            a,
            l = 0;
          if (p(t))
            return this.each(function (e) {
              b(this).addClass(t.call(this, e, me(this)));
            });
          if ((e = we(t)).length)
            for (; (i = this[l++]); )
              if (((r = me(i)), (n = 1 === i.nodeType && " " + ve(r) + " "))) {
                for (s = 0; (o = e[s++]); )
                  n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                r !== (a = ve(n)) && i.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function (t) {
          var e,
            i,
            n,
            r,
            o,
            s,
            a,
            l = 0;
          if (p(t))
            return this.each(function (e) {
              b(this).removeClass(t.call(this, e, me(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((e = we(t)).length)
            for (; (i = this[l++]); )
              if (((r = me(i)), (n = 1 === i.nodeType && " " + ve(r) + " "))) {
                for (s = 0; (o = e[s++]); )
                  for (; -1 < n.indexOf(" " + o + " "); )
                    n = n.replace(" " + o + " ", " ");
                r !== (a = ve(n)) && i.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function (t, e) {
          var i = typeof t,
            n = "string" === i || Array.isArray(t);
          return "boolean" == typeof e && n
            ? e
              ? this.addClass(t)
              : this.removeClass(t)
            : p(t)
            ? this.each(function (i) {
                b(this).toggleClass(t.call(this, i, me(this), e), e);
              })
            : this.each(function () {
                var e, r, o, s;
                if (n)
                  for (r = 0, o = b(this), s = we(t); (e = s[r++]); )
                    o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                  (void 0 !== t && "boolean" !== i) ||
                    ((e = me(this)) && X.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || !1 === t ? "" : X.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (t) {
          var e,
            i,
            n = 0;
          for (e = " " + t + " "; (i = this[n++]); )
            if (1 === i.nodeType && -1 < (" " + ve(me(i)) + " ").indexOf(e))
              return !0;
          return !1;
        },
      });
    var ye = /\r/g;
    b.fn.extend({
      val: function (t) {
        var e,
          i,
          n,
          r = this[0];
        return arguments.length
          ? ((n = p(t)),
            this.each(function (i) {
              var r;
              1 === this.nodeType &&
                (null == (r = n ? t.call(this, i, b(this).val()) : t)
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : Array.isArray(r) &&
                    (r = b.map(r, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  b.valHooks[this.type] ||
                  b.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  void 0 !== e.set(this, r, "value")) ||
                  (this.value = r));
            }))
          : r
          ? (e = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) &&
            "get" in e &&
            void 0 !== (i = e.get(r, "value"))
            ? i
            : "string" == typeof (i = r.value)
            ? i.replace(ye, "")
            : null == i
            ? ""
            : i
          : void 0;
      },
    }),
      b.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = b.find.attr(t, "value");
              return null != e ? e : ve(b.text(t));
            },
          },
          select: {
            get: function (t) {
              var e,
                i,
                n,
                r = t.options,
                o = t.selectedIndex,
                s = "select-one" === t.type,
                a = s ? null : [],
                l = s ? o + 1 : r.length;
              for (n = o < 0 ? l : s ? o : 0; n < l; n++)
                if (
                  ((i = r[n]).selected || n === o) &&
                  !i.disabled &&
                  (!i.parentNode.disabled || !L(i.parentNode, "optgroup"))
                ) {
                  if (((e = b(i).val()), s)) return e;
                  a.push(e);
                }
              return a;
            },
            set: function (t, e) {
              for (
                var i, n, r = t.options, o = b.makeArray(e), s = r.length;
                s--;

              )
                ((n = r[s]).selected =
                  -1 < b.inArray(b.valHooks.option.get(n), o)) && (i = !0);
              return i || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      b.each(["radio", "checkbox"], function () {
        (b.valHooks[this] = {
          set: function (t, e) {
            if (Array.isArray(e))
              return (t.checked = -1 < b.inArray(b(t).val(), e));
          },
        }),
          f.checkOn ||
            (b.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      }),
      (f.focusin = "onfocusin" in t);
    var xe = /^(?:focusinfocus|focusoutblur)$/,
      be = function (t) {
        t.stopPropagation();
      };
    b.extend(b.event, {
      trigger: function (e, i, n, r) {
        var o,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          m = [n || v],
          w = h.call(e, "type") ? e.type : e,
          y = h.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((s = f = a = n = n || v),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !xe.test(w + b.event.triggered) &&
            (-1 < w.indexOf(".") &&
              ((w = (y = w.split(".")).shift()), y.sort()),
            (c = w.indexOf(":") < 0 && "on" + w),
            ((e = e[b.expando]
              ? e
              : new b.Event(w, "object" == typeof e && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = y.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (i = null == i ? [e] : b.makeArray(i, [e])),
            (d = b.event.special[w] || {}),
            r || !d.trigger || !1 !== d.trigger.apply(n, i)))
        ) {
          if (!r && !d.noBubble && !g(n)) {
            for (
              l = d.delegateType || w, xe.test(l + w) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              m.push(s), (a = s);
            a === (n.ownerDocument || v) &&
              m.push(a.defaultView || a.parentWindow || t);
          }
          for (o = 0; (s = m[o++]) && !e.isPropagationStopped(); )
            (f = s),
              (e.type = 1 < o ? l : d.bindType || w),
              (u =
                (X.get(s, "events") || Object.create(null))[e.type] &&
                X.get(s, "handle")) && u.apply(s, i),
              (u = c && s[c]) &&
                u.apply &&
                K(s) &&
                ((e.result = u.apply(s, i)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = w),
            r ||
              e.isDefaultPrevented() ||
              (d._default && !1 !== d._default.apply(m.pop(), i)) ||
              !K(n) ||
              (c &&
                p(n[w]) &&
                !g(n) &&
                ((a = n[c]) && (n[c] = null),
                (b.event.triggered = w),
                e.isPropagationStopped() && f.addEventListener(w, be),
                n[w](),
                e.isPropagationStopped() && f.removeEventListener(w, be),
                (b.event.triggered = void 0),
                a && (n[c] = a))),
            e.result
          );
        }
      },
      simulate: function (t, e, i) {
        var n = b.extend(new b.Event(), i, { type: t, isSimulated: !0 });
        b.event.trigger(n, null, e);
      },
    }),
      b.fn.extend({
        trigger: function (t, e) {
          return this.each(function () {
            b.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var i = this[0];
          if (i) return b.event.trigger(t, e, i, !0);
        },
      }),
      f.focusin ||
        b.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var i = function (t) {
            b.event.simulate(e, t.target, b.event.fix(t));
          };
          b.event.special[e] = {
            setup: function () {
              var n = this.ownerDocument || this.document || this,
                r = X.access(n, e);
              r || n.addEventListener(t, i, !0), X.access(n, e, (r || 0) + 1);
            },
            teardown: function () {
              var n = this.ownerDocument || this.document || this,
                r = X.access(n, e) - 1;
              r
                ? X.access(n, e, r)
                : (n.removeEventListener(t, i, !0), X.remove(n, e));
            },
          };
        });
    var ke = t.location,
      Ce = { guid: Date.now() },
      _e = /\?/;
    b.parseXML = function (e) {
      var i;
      if (!e || "string" != typeof e) return null;
      try {
        i = new t.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        i = void 0;
      }
      return (
        (i && !i.getElementsByTagName("parsererror").length) ||
          b.error("Invalid XML: " + e),
        i
      );
    };
    var De = /\[\]$/,
      Te = /\r?\n/g,
      Le = /^(?:submit|button|image|reset|file)$/i,
      Se = /^(?:input|select|textarea|keygen)/i;
    function Me(t, e, i, n) {
      var r;
      if (Array.isArray(e))
        b.each(e, function (e, r) {
          i || De.test(t)
            ? n(t, r)
            : Me(
                t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                r,
                i,
                n
              );
        });
      else if (i || "object" !== y(e)) n(t, e);
      else for (r in e) Me(t + "[" + r + "]", e[r], i, n);
    }
    (b.param = function (t, e) {
      var i,
        n = [],
        r = function (t, e) {
          var i = p(e) ? e() : e;
          n[n.length] =
            encodeURIComponent(t) +
            "=" +
            encodeURIComponent(null == i ? "" : i);
        };
      if (null == t) return "";
      if (Array.isArray(t) || (t.jquery && !b.isPlainObject(t)))
        b.each(t, function () {
          r(this.name, this.value);
        });
      else for (i in t) Me(i, t[i], e, r);
      return n.join("&");
    }),
      b.fn.extend({
        serialize: function () {
          return b.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = b.prop(this, "elements");
            return t ? b.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !b(this).is(":disabled") &&
                Se.test(this.nodeName) &&
                !Le.test(t) &&
                (this.checked || !dt.test(t))
              );
            })
            .map(function (t, e) {
              var i = b(this).val();
              return null == i
                ? null
                : Array.isArray(i)
                ? b.map(i, function (t) {
                    return { name: e.name, value: t.replace(Te, "\r\n") };
                  })
                : { name: e.name, value: i.replace(Te, "\r\n") };
            })
            .get();
        },
      });
    var Ee = /%20/g,
      Ae = /#.*$/,
      Ie = /([?&])_=[^&]*/,
      $e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Be = /^(?:GET|HEAD)$/,
      Ne = /^\/\//,
      Oe = {},
      je = {},
      He = "*/".concat("*"),
      Pe = v.createElement("a");
    function ze(t) {
      return function (e, i) {
        "string" != typeof e && ((i = e), (e = "*"));
        var n,
          r = 0,
          o = e.toLowerCase().match(N) || [];
        if (p(i))
          for (; (n = o[r++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
              : (t[n] = t[n] || []).push(i);
      };
    }
    function We(t, e, i, n) {
      var r = {},
        o = t === je;
      function s(a) {
        var l;
        return (
          (r[a] = !0),
          b.each(t[a] || [], function (t, a) {
            var c = a(e, i, n);
            return "string" != typeof c || o || r[c]
              ? o
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      return s(e.dataTypes[0]) || (!r["*"] && s("*"));
    }
    function Fe(t, e) {
      var i,
        n,
        r = b.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
      return n && b.extend(!0, t, n), t;
    }
    (Pe.href = ke.href),
      b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: ke.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              ke.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": He,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": b.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
          return e ? Fe(Fe(t, b.ajaxSettings), e) : Fe(b.ajaxSettings, t);
        },
        ajaxPrefilter: ze(Oe),
        ajaxTransport: ze(je),
        ajax: function (e, i) {
          "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
          var n,
            r,
            o,
            s,
            a,
            l,
            c,
            h,
            u,
            d,
            f = b.ajaxSetup({}, i),
            p = f.context || f,
            g = f.context && (p.nodeType || p.jquery) ? b(p) : b.event,
            m = b.Deferred(),
            w = b.Callbacks("once memory"),
            y = f.statusCode || {},
            x = {},
            k = {},
            C = "canceled",
            _ = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (c) {
                  if (!s)
                    for (s = {}; (e = $e.exec(o)); )
                      s[e[1].toLowerCase() + " "] = (
                        s[e[1].toLowerCase() + " "] || []
                      ).concat(e[2]);
                  e = s[t.toLowerCase() + " "];
                }
                return null == e ? null : e.join(", ");
              },
              getAllResponseHeaders: function () {
                return c ? o : null;
              },
              setRequestHeader: function (t, e) {
                return (
                  null == c &&
                    ((t = k[t.toLowerCase()] = k[t.toLowerCase()] || t),
                    (x[t] = e)),
                  this
                );
              },
              overrideMimeType: function (t) {
                return null == c && (f.mimeType = t), this;
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (c) _.always(t[_.status]);
                  else for (e in t) y[e] = [y[e], t[e]];
                return this;
              },
              abort: function (t) {
                var e = t || C;
                return n && n.abort(e), D(0, e), this;
              },
            };
          if (
            (m.promise(_),
            (f.url = ((e || f.url || ke.href) + "").replace(
              Ne,
              ke.protocol + "//"
            )),
            (f.type = i.method || i.type || f.method || f.type),
            (f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""]),
            null == f.crossDomain)
          ) {
            l = v.createElement("a");
            try {
              (l.href = f.url),
                (l.href = l.href),
                (f.crossDomain =
                  Pe.protocol + "//" + Pe.host != l.protocol + "//" + l.host);
            } catch (e) {
              f.crossDomain = !0;
            }
          }
          if (
            (f.data &&
              f.processData &&
              "string" != typeof f.data &&
              (f.data = b.param(f.data, f.traditional)),
            We(Oe, f, i, _),
            c)
          )
            return _;
          for (u in ((h = b.event && f.global) &&
            0 == b.active++ &&
            b.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !Be.test(f.type)),
          (r = f.url.replace(Ae, "")),
          f.hasContent
            ? f.data &&
              f.processData &&
              0 ===
                (f.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (f.data = f.data.replace(Ee, "+"))
            : ((d = f.url.slice(r.length)),
              f.data &&
                (f.processData || "string" == typeof f.data) &&
                ((r += (_e.test(r) ? "&" : "?") + f.data), delete f.data),
              !1 === f.cache &&
                ((r = r.replace(Ie, "$1")),
                (d = (_e.test(r) ? "&" : "?") + "_=" + Ce.guid++ + d)),
              (f.url = r + d)),
          f.ifModified &&
            (b.lastModified[r] &&
              _.setRequestHeader("If-Modified-Since", b.lastModified[r]),
            b.etag[r] && _.setRequestHeader("If-None-Match", b.etag[r])),
          ((f.data && f.hasContent && !1 !== f.contentType) || i.contentType) &&
            _.setRequestHeader("Content-Type", f.contentType),
          _.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + He + "; q=0.01" : "")
              : f.accepts["*"]
          ),
          f.headers))
            _.setRequestHeader(u, f.headers[u]);
          if (f.beforeSend && (!1 === f.beforeSend.call(p, _, f) || c))
            return _.abort();
          if (
            ((C = "abort"),
            w.add(f.complete),
            _.done(f.success),
            _.fail(f.error),
            (n = We(je, f, i, _)))
          ) {
            if (((_.readyState = 1), h && g.trigger("ajaxSend", [_, f]), c))
              return _;
            f.async &&
              0 < f.timeout &&
              (a = t.setTimeout(function () {
                _.abort("timeout");
              }, f.timeout));
            try {
              (c = !1), n.send(x, D);
            } catch (e) {
              if (c) throw e;
              D(-1, e);
            }
          } else D(-1, "No Transport");
          function D(e, i, s, l) {
            var u,
              d,
              v,
              x,
              k,
              C = i;
            c ||
              ((c = !0),
              a && t.clearTimeout(a),
              (n = void 0),
              (o = l || ""),
              (_.readyState = 0 < e ? 4 : 0),
              (u = (200 <= e && e < 300) || 304 === e),
              s &&
                (x = (function (t, e, i) {
                  for (
                    var n, r, o, s, a = t.contents, l = t.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === n &&
                        (n = t.mimeType || e.getResponseHeader("Content-Type"));
                  if (n)
                    for (r in a)
                      if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break;
                      }
                  if (l[0] in i) o = l[0];
                  else {
                    for (r in i) {
                      if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break;
                      }
                      s || (s = r);
                    }
                    o = o || s;
                  }
                  if (o) return o !== l[0] && l.unshift(o), i[o];
                })(f, _, s)),
              !u &&
                -1 < b.inArray("script", f.dataTypes) &&
                (f.converters["text script"] = function () {}),
              (x = (function (t, e, i, n) {
                var r,
                  o,
                  s,
                  a,
                  l,
                  c = {},
                  h = t.dataTypes.slice();
                if (h[1])
                  for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                for (o = h.shift(); o; )
                  if (
                    (t.responseFields[o] && (i[t.responseFields[o]] = e),
                    !l &&
                      n &&
                      t.dataFilter &&
                      (e = t.dataFilter(e, t.dataType)),
                    (l = o),
                    (o = h.shift()))
                  )
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                      if (!(s = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                          if (
                            (a = r.split(" "))[1] === o &&
                            (s = c[l + " " + a[0]] || c["* " + a[0]])
                          ) {
                            !0 === s
                              ? (s = c[r])
                              : !0 !== c[r] && ((o = a[0]), h.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && t.throws) e = s(e);
                        else
                          try {
                            e = s(e);
                          } catch (t) {
                            return {
                              state: "parsererror",
                              error: s
                                ? t
                                : "No conversion from " + l + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: e };
              })(f, x, _, u)),
              u
                ? (f.ifModified &&
                    ((k = _.getResponseHeader("Last-Modified")) &&
                      (b.lastModified[r] = k),
                    (k = _.getResponseHeader("etag")) && (b.etag[r] = k)),
                  204 === e || "HEAD" === f.type
                    ? (C = "nocontent")
                    : 304 === e
                    ? (C = "notmodified")
                    : ((C = x.state), (d = x.data), (u = !(v = x.error))))
                : ((v = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
              (_.status = e),
              (_.statusText = (i || C) + ""),
              u ? m.resolveWith(p, [d, C, _]) : m.rejectWith(p, [_, C, v]),
              _.statusCode(y),
              (y = void 0),
              h &&
                g.trigger(u ? "ajaxSuccess" : "ajaxError", [_, f, u ? d : v]),
              w.fireWith(p, [_, C]),
              h &&
                (g.trigger("ajaxComplete", [_, f]),
                --b.active || b.event.trigger("ajaxStop")));
          }
          return _;
        },
        getJSON: function (t, e, i) {
          return b.get(t, e, i, "json");
        },
        getScript: function (t, e) {
          return b.get(t, void 0, e, "script");
        },
      }),
      b.each(["get", "post"], function (t, e) {
        b[e] = function (t, i, n, r) {
          return (
            p(i) && ((r = r || n), (n = i), (i = void 0)),
            b.ajax(
              b.extend(
                { url: t, type: e, dataType: r, data: i, success: n },
                b.isPlainObject(t) && t
              )
            )
          );
        };
      }),
      b.ajaxPrefilter(function (t) {
        var e;
        for (e in t.headers)
          "content-type" === e.toLowerCase() &&
            (t.contentType = t.headers[e] || "");
      }),
      (b._evalUrl = function (t, e, i) {
        return b.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (t) {
            b.globalEval(t, e, i);
          },
        });
      }),
      b.fn.extend({
        wrapAll: function (t) {
          var e;
          return (
            this[0] &&
              (p(t) && (t = t.call(this[0])),
              (e = b(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (t) {
          return p(t)
            ? this.each(function (e) {
                b(this).wrapInner(t.call(this, e));
              })
            : this.each(function () {
                var e = b(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              });
        },
        wrap: function (t) {
          var e = p(t);
          return this.each(function (i) {
            b(this).wrapAll(e ? t.call(this, i) : t);
          });
        },
        unwrap: function (t) {
          return (
            this.parent(t)
              .not("body")
              .each(function () {
                b(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (b.expr.pseudos.hidden = function (t) {
        return !b.expr.pseudos.visible(t);
      }),
      (b.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
      }),
      (b.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch (t) {}
      });
    var Re = { 0: 200, 1223: 204 },
      qe = b.ajaxSettings.xhr();
    (f.cors = !!qe && "withCredentials" in qe),
      (f.ajax = qe = !!qe),
      b.ajaxTransport(function (e) {
        var i, n;
        if (f.cors || (qe && !e.crossDomain))
          return {
            send: function (r, o) {
              var s,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (s in e.xhrFields) a[s] = e.xhrFields[s];
              for (s in (e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
              e.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest"),
              r))
                a.setRequestHeader(s, r[s]);
              (i = function (t) {
                return function () {
                  i &&
                    ((i =
                      n =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    "abort" === t
                      ? a.abort()
                      : "error" === t
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          Re[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = i()),
                (n = a.onerror = a.ontimeout = i("error")),
                void 0 !== a.onabort
                  ? (a.onabort = n)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        t.setTimeout(function () {
                          i && n();
                        });
                    }),
                (i = i("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (r) {
                if (i) throw r;
              }
            },
            abort: function () {
              i && i();
            },
          };
      }),
      b.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1);
      }),
      b.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return b.globalEval(t), t;
          },
        },
      }),
      b.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      b.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain || t.scriptAttrs)
          return {
            send: function (n, r) {
              (e = b("<script>")
                .attr(t.scriptAttrs || {})
                .prop({ charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (i = function (t) {
                    e.remove(),
                      (i = null),
                      t && r("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                v.head.appendChild(e[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Ye,
      Ve = [],
      Ke = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Ve.pop() || b.expando + "_" + Ce.guid++;
        return (this[t] = !0), t;
      },
    }),
      b.ajaxPrefilter("json jsonp", function (e, i, n) {
        var r,
          o,
          s,
          a =
            !1 !== e.jsonp &&
            (Ke.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Ke.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Ke, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return s || b.error(r + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = t[r]),
            (t[r] = function () {
              s = arguments;
            }),
            n.always(function () {
              void 0 === o ? b(t).removeProp(r) : (t[r] = o),
                e[r] && ((e.jsonpCallback = i.jsonpCallback), Ve.push(r)),
                s && p(o) && o(s[0]),
                (s = o = void 0);
            }),
            "script"
          );
      }),
      (f.createHTMLDocument =
        (((Ye = v.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Ye.childNodes.length)),
      (b.parseHTML = function (t, e, i) {
        return "string" != typeof t
          ? []
          : ("boolean" == typeof e && ((i = e), (e = !1)),
            e ||
              (f.createHTMLDocument
                ? (((n = (e =
                    v.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = v.location.href),
                  e.head.appendChild(n))
                : (e = v)),
            (o = !i && []),
            (r = S.exec(t))
              ? [e.createElement(r[1])]
              : ((r = yt([t], e, o)),
                o && o.length && b(o).remove(),
                b.merge([], r.childNodes)));
        var n, r, o;
      }),
      (b.fn.load = function (t, e, i) {
        var n,
          r,
          o,
          s = this,
          a = t.indexOf(" ");
        return (
          -1 < a && ((n = ve(t.slice(a))), (t = t.slice(0, a))),
          p(e)
            ? ((i = e), (e = void 0))
            : e && "object" == typeof e && (r = "POST"),
          0 < s.length &&
            b
              .ajax({ url: t, type: r || "GET", dataType: "html", data: e })
              .done(function (t) {
                (o = arguments),
                  s.html(n ? b("<div>").append(b.parseHTML(t)).find(n) : t);
              })
              .always(
                i &&
                  function (t, e) {
                    s.each(function () {
                      i.apply(this, o || [t.responseText, e, t]);
                    });
                  }
              ),
          this
        );
      }),
      (b.expr.pseudos.hasEffect = function (t) {
        return b.grep(b.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (b.offset = {
        setOffset: function (t, e, i) {
          var n,
            r,
            o,
            s,
            a,
            l,
            c = b.css(t, "position"),
            h = b(t),
            u = {};
          "static" === c && (t.style.position = "relative"),
            (a = h.offset()),
            (o = b.css(t, "top")),
            (l = b.css(t, "left")),
            ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto")
              ? ((s = (n = h.position()).top), (r = n.left))
              : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
            p(e) && (e = e.call(t, i, b.extend({}, a))),
            null != e.top && (u.top = e.top - a.top + s),
            null != e.left && (u.left = e.left - a.left + r),
            "using" in e
              ? e.using.call(t, u)
              : ("number" == typeof u.top && (u.top += "px"),
                "number" == typeof u.left && (u.left += "px"),
                h.css(u));
        },
      }),
      b.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  b.offset.setOffset(this, t, e);
                });
          var e,
            i,
            n = this[0];
          return n
            ? n.getClientRects().length
              ? ((e = n.getBoundingClientRect()),
                (i = n.ownerDocument.defaultView),
                { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              i,
              n = this[0],
              r = { top: 0, left: 0 };
            if ("fixed" === b.css(n, "position")) e = n.getBoundingClientRect();
            else {
              for (
                e = this.offset(),
                  i = n.ownerDocument,
                  t = n.offsetParent || i.documentElement;
                t &&
                (t === i.body || t === i.documentElement) &&
                "static" === b.css(t, "position");

              )
                t = t.parentNode;
              t &&
                t !== n &&
                1 === t.nodeType &&
                (((r = b(t).offset()).top += b.css(t, "borderTopWidth", !0)),
                (r.left += b.css(t, "borderLeftWidth", !0)));
            }
            return {
              top: e.top - r.top - b.css(n, "marginTop", !0),
              left: e.left - r.left - b.css(n, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent;
              t && "static" === b.css(t, "position");

            )
              t = t.offsetParent;
            return t || nt;
          });
        },
      }),
      b.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, e) {
          var i = "pageYOffset" === e;
          b.fn[t] = function (n) {
            return F(
              this,
              function (t, n, r) {
                var o;
                if (
                  (g(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                  void 0 === r)
                )
                  return o ? o[e] : t[n];
                o
                  ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset)
                  : (t[n] = r);
              },
              t,
              n,
              arguments.length
            );
          };
        }
      ),
      b.each(["top", "left"], function (t, e) {
        b.cssHooks[e] = Ft(f.pixelPosition, function (t, i) {
          if (i)
            return (i = Wt(t, e)), jt.test(i) ? b(t).position()[e] + "px" : i;
        });
      }),
      b.each({ Height: "height", Width: "width" }, function (t, e) {
        b.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (i, n) {
            b.fn[n] = function (r, o) {
              var s = arguments.length && (i || "boolean" != typeof r),
                a = i || (!0 === r || !0 === o ? "margin" : "border");
              return F(
                this,
                function (e, i, r) {
                  var o;
                  return g(e)
                    ? 0 === n.indexOf("outer")
                      ? e["inner" + t]
                      : e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === r
                    ? b.css(e, i, a)
                    : b.style(e, i, r, a);
                },
                e,
                s ? r : void 0,
                s
              );
            };
          }
        );
      }),
      b.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          b.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      b.fn.extend({
        bind: function (t, e, i) {
          return this.on(t, null, e, i);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, i, n) {
          return this.on(e, t, i, n);
        },
        undelegate: function (t, e, i) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", i);
        },
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
      }),
      b.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (t, e) {
          b.fn[e] = function (t, i) {
            return 0 < arguments.length
              ? this.on(e, null, t, i)
              : this.trigger(e);
          };
        }
      );
    var Ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (b.proxy = function (t, e) {
      var i, n, o;
      if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), p(t)))
        return (
          (n = r.call(arguments, 2)),
          ((o = function () {
            return t.apply(e || this, n.concat(r.call(arguments)));
          }).guid = t.guid =
            t.guid || b.guid++),
          o
        );
    }),
      (b.holdReady = function (t) {
        t ? b.readyWait++ : b.ready(!0);
      }),
      (b.isArray = Array.isArray),
      (b.parseJSON = JSON.parse),
      (b.nodeName = L),
      (b.isFunction = p),
      (b.isWindow = g),
      (b.camelCase = V),
      (b.type = y),
      (b.now = Date.now),
      (b.isNumeric = function (t) {
        var e = b.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      }),
      (b.trim = function (t) {
        return null == t ? "" : (t + "").replace(Ue, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return b;
        });
    var Xe = t.jQuery,
      Ze = t.$;
    return (
      (b.noConflict = function (e) {
        return (
          t.$ === b && (t.$ = Ze), e && t.jQuery === b && (t.jQuery = Xe), b
        );
      }),
      void 0 === e && (t.jQuery = t.$ = b),
      b
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    function e() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.regional.en = t.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = i(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function i(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .on("mouseout", i, function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .on("mouseover", i, n);
    }
    function n() {
      t.datepicker._isDisabledDatepicker(
        o.inline ? o.dpDiv.parent()[0] : o.input[0]
      ) ||
        (t(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          t(this).addClass("ui-datepicker-next-hover"));
    }
    function r(e, i) {
      for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
      return e;
    }
    (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
    var o,
      s = 0,
      a = Array.prototype.slice;
    (t.cleanData = (function (e) {
      return function (i) {
        var n, r, o;
        for (o = 0; null != (r = i[o]); o++)
          try {
            (n = t._data(r, "events")) &&
              n.remove &&
              t(r).triggerHandler("remove");
          } catch (t) {}
        e(i);
      };
    })(t.cleanData)),
      (t.widget = function (e, i, n) {
        var r,
          o,
          s,
          a = {},
          l = e.split(".")[0],
          c = l + "-" + (e = e.split(".")[1]);
        return (
          n || ((n = i), (i = t.Widget)),
          t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
          (t.expr[":"][c.toLowerCase()] = function (e) {
            return !!t.data(e, c);
          }),
          (t[l] = t[l] || {}),
          (r = t[l][e]),
          (o = t[l][e] =
            function (t, e) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(t, e))
                : new o(t, e);
            }),
          t.extend(o, r, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          ((s = new i()).options = t.widget.extend({}, s.options)),
          t.each(n, function (e, n) {
            return t.isFunction(n)
              ? void (a[e] = (function () {
                  function t() {
                    return i.prototype[e].apply(this, arguments);
                  }
                  function r(t) {
                    return i.prototype[e].apply(this, t);
                  }
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = r),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (a[e] = n);
          }),
          (o.prototype = t.widget.extend(
            s,
            { widgetEventPrefix: (r && s.widgetEventPrefix) || e },
            a,
            { constructor: o, namespace: l, widgetName: e, widgetFullName: c }
          )),
          r
            ? (t.each(r._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto);
              }),
              delete r._childConstructors)
            : i._childConstructors.push(o),
          t.widget.bridge(e, o),
          o
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, n, r = a.call(arguments, 1), o = 0, s = r.length;
          s > o;
          o++
        )
          for (i in r[o])
            (n = r[o][i]),
              r[o].hasOwnProperty(i) &&
                void 0 !== n &&
                (e[i] = t.isPlainObject(n)
                  ? t.isPlainObject(e[i])
                    ? t.widget.extend({}, e[i], n)
                    : t.widget.extend({}, n)
                  : n);
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function (r) {
          var o = "string" == typeof r,
            s = a.call(arguments, 1),
            l = this;
          return (
            o
              ? this.length || "instance" !== r
                ? this.each(function () {
                    var i,
                      o = t.data(this, n);
                    return "instance" === r
                      ? ((l = o), !1)
                      : o
                      ? t.isFunction(o[r]) && "_" !== r.charAt(0)
                        ? (i = o[r].apply(o, s)) !== o && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0
                        : t.error(
                            "no such method '" +
                              r +
                              "' for " +
                              e +
                              " widget instance"
                          )
                      : t.error(
                          "cannot call methods on " +
                            e +
                            " prior to initialization; attempted to call method '" +
                            r +
                            "'"
                        );
                  })
                : (l = void 0)
              : (s.length && (r = t.widget.extend.apply(null, [r].concat(s))),
                this.each(function () {
                  var e = t.data(this, n);
                  e
                    ? (e.option(r || {}), e._init && e._init())
                    : t.data(this, n, new i(r, this));
                })),
            l
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (e, i) {
          (i = t(i || this.defaultElement || this)[0]),
            (this.element = t(i)),
            (this.uuid = s++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            (this.classesElementLookup = {}),
            i !== this &&
              (t.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === i && this.destroy();
                },
              }),
              (this.document = t(i.style ? i.ownerDocument : i.document || i)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          var e = this;
          this._destroy(),
            t.each(this.classesElementLookup, function (t, i) {
              e._removeClass(i, t);
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            r,
            o,
            s = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((s = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                r = s[e] = t.widget.extend({}, this.options[e]), o = 0;
                n.length - 1 > o;
                o++
              )
                (r[n[o]] = r[n[o]] || {}), (r = r[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === r[e] ? null : r[e];
              r[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              s[e] = i;
            }
          return this._setOptions(s), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            "classes" === t && this._setOptionClasses(e),
            (this.options[t] = e),
            "disabled" === t && this._setOptionDisabled(e),
            this
          );
        },
        _setOptionClasses: function (e) {
          var i, n, r;
          for (i in e)
            (r = this.classesElementLookup[i]),
              e[i] !== this.options.classes[i] &&
                r &&
                r.length &&
                ((n = t(r.get())),
                this._removeClass(r, i),
                n.addClass(
                  this._classes({ element: n, keys: i, classes: e, add: !0 })
                ));
        },
        _setOptionDisabled: function (t) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!t
          ),
            t &&
              (this._removeClass(this.hoverable, null, "ui-state-hover"),
              this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (e) {
          function i(i, o) {
            var s, a;
            for (a = 0; i.length > a; a++)
              (s = r.classesElementLookup[i[a]] || t()),
                (s = e.add
                  ? t(t.unique(s.get().concat(e.element.get())))
                  : t(s.not(e.element).get())),
                (r.classesElementLookup[i[a]] = s),
                n.push(i[a]),
                o && e.classes[i[a]] && n.push(e.classes[i[a]]);
          }
          var n = [],
            r = this;
          return (
            (e = t.extend(
              { element: this.element, classes: this.options.classes || {} },
              e
            )),
            this._on(e.element, { remove: "_untrackClassesElement" }),
            e.keys && i(e.keys.match(/\S+/g) || [], !0),
            e.extra && i(e.extra.match(/\S+/g) || []),
            n.join(" ")
          );
        },
        _untrackClassesElement: function (e) {
          var i = this;
          t.each(i.classesElementLookup, function (n, r) {
            -1 !== t.inArray(e.target, r) &&
              (i.classesElementLookup[n] = t(r.not(e.target).get()));
          });
        },
        _removeClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !1);
        },
        _addClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function (t, e, i, n) {
          n = "boolean" == typeof n ? n : i;
          var r = "string" == typeof t || null === t,
            o = {
              extra: r ? e : i,
              keys: r ? t : e,
              element: r ? this.element : t,
              add: n,
            };
          return o.element.toggleClass(this._classes(o), n), this;
        },
        _on: function (e, i, n) {
          var r,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = r = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (r = this.widget())),
            t.each(n, function (n, s) {
              function a() {
                return e ||
                  (!0 !== o.options.disabled &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof s ? o[s] : s).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof s &&
                (a.guid = s.guid = s.guid || a.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                c = l[1] + o.eventNamespace,
                h = l[2];
              h ? r.on(c, h, a) : i.on(c, a);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.off(i).off(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                this._addClass(t(e.currentTarget), null, "ui-state-hover");
              },
              mouseleave: function (e) {
                this._removeClass(t(e.currentTarget), null, "ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                this._addClass(t(e.currentTarget), null, "ui-state-focus");
              },
              focusout: function (e) {
                this._removeClass(t(e.currentTarget), null, "ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var r,
            o,
            s = this.options[e];
          if (
            ((n = n || {}),
            ((i = t.Event(i)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (r in o) r in i || (i[r] = o[r]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(s) &&
                !1 === s.apply(this.element[0], [i].concat(n))) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, r, o) {
          "string" == typeof r && (r = { effect: r });
          var s,
            a = r ? (!0 === r || "number" == typeof r ? i : r.effect || i) : e;
          "number" == typeof (r = r || {}) && (r = { duration: r }),
            (s = !t.isEmptyObject(r)),
            (r.complete = o),
            r.delay && n.delay(r.delay),
            s && t.effects && t.effects.effect[a]
              ? n[e](r)
              : a !== e && n[a]
              ? n[a](r.duration, r.easing, o)
              : n.queue(function (i) {
                  t(this)[e](), o && o.call(n[0]), i();
                });
        };
      }),
      t.widget,
      (function () {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
          ];
        }
        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0;
        }
        function n(e) {
          var i = e[0];
          return 9 === i.nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : t.isWindow(i)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : i.preventDefault
            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
        }
        var r,
          o = Math.max,
          s = Math.abs,
          a = /left|center|right/,
          l = /top|center|bottom/,
          c = /[\+\-]\d+(\.[\d]+)?%?/,
          h = /^\w+/,
          u = /%$/,
          d = t.fn.position;
        (t.position = {
          scrollbarWidth: function () {
            if (void 0 !== r) return r;
            var e,
              i,
              n = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              o = n.children()[0];
            return (
              t("body").append(n),
              (e = o.offsetWidth),
              n.css("overflow", "scroll"),
              e === (i = o.offsetWidth) && (i = n[0].clientWidth),
              n.remove(),
              (r = e - i)
            );
          },
          getScrollInfo: function (e) {
            var i =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              r =
                "scroll" === i ||
                ("auto" === i && e.width < e.element[0].scrollWidth);
            return {
              width:
                "scroll" === n ||
                ("auto" === n && e.height < e.element[0].scrollHeight)
                  ? t.position.scrollbarWidth()
                  : 0,
              height: r ? t.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (e) {
            var i = t(e || window),
              n = t.isWindow(i[0]),
              r = !!i[0] && 9 === i[0].nodeType;
            return {
              element: i,
              isWindow: n,
              isDocument: r,
              offset: !n && !r ? t(e).offset() : { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: i.outerWidth(),
              height: i.outerHeight(),
            };
          },
        }),
          (t.fn.position = function (r) {
            if (!r || !r.of) return d.apply(this, arguments);
            r = t.extend({}, r);
            var u,
              f,
              p,
              g,
              v,
              m,
              w = t(r.of),
              y = t.position.getWithinInfo(r.within),
              x = t.position.getScrollInfo(y),
              b = (r.collision || "flip").split(" "),
              k = {};
            return (
              (m = n(w)),
              w[0].preventDefault && (r.at = "left top"),
              (f = m.width),
              (p = m.height),
              (g = m.offset),
              (v = t.extend({}, g)),
              t.each(["my", "at"], function () {
                var t,
                  e,
                  i = (r[this] || "").split(" ");
                1 === i.length &&
                  (i = a.test(i[0])
                    ? i.concat(["center"])
                    : l.test(i[0])
                    ? ["center"].concat(i)
                    : ["center", "center"]),
                  (i[0] = a.test(i[0]) ? i[0] : "center"),
                  (i[1] = l.test(i[1]) ? i[1] : "center"),
                  (t = c.exec(i[0])),
                  (e = c.exec(i[1])),
                  (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (r[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]);
              }),
              1 === b.length && (b[1] = b[0]),
              "right" === r.at[0]
                ? (v.left += f)
                : "center" === r.at[0] && (v.left += f / 2),
              "bottom" === r.at[1]
                ? (v.top += p)
                : "center" === r.at[1] && (v.top += p / 2),
              (u = e(k.at, f, p)),
              (v.left += u[0]),
              (v.top += u[1]),
              this.each(function () {
                var n,
                  a,
                  l = t(this),
                  c = l.outerWidth(),
                  h = l.outerHeight(),
                  d = i(this, "marginLeft"),
                  m = i(this, "marginTop"),
                  C = c + d + i(this, "marginRight") + x.width,
                  _ = h + m + i(this, "marginBottom") + x.height,
                  D = t.extend({}, v),
                  T = e(k.my, l.outerWidth(), l.outerHeight());
                "right" === r.my[0]
                  ? (D.left -= c)
                  : "center" === r.my[0] && (D.left -= c / 2),
                  "bottom" === r.my[1]
                    ? (D.top -= h)
                    : "center" === r.my[1] && (D.top -= h / 2),
                  (D.left += T[0]),
                  (D.top += T[1]),
                  (n = { marginLeft: d, marginTop: m }),
                  t.each(["left", "top"], function (e, i) {
                    t.ui.position[b[e]] &&
                      t.ui.position[b[e]][i](D, {
                        targetWidth: f,
                        targetHeight: p,
                        elemWidth: c,
                        elemHeight: h,
                        collisionPosition: n,
                        collisionWidth: C,
                        collisionHeight: _,
                        offset: [u[0] + T[0], u[1] + T[1]],
                        my: r.my,
                        at: r.at,
                        within: y,
                        elem: l,
                      });
                  }),
                  r.using &&
                    (a = function (t) {
                      var e = g.left - D.left,
                        i = e + f - c,
                        n = g.top - D.top,
                        a = n + p - h,
                        u = {
                          target: {
                            element: w,
                            left: g.left,
                            top: g.top,
                            width: f,
                            height: p,
                          },
                          element: {
                            element: l,
                            left: D.left,
                            top: D.top,
                            width: c,
                            height: h,
                          },
                          horizontal:
                            0 > i ? "left" : e > 0 ? "right" : "center",
                          vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle",
                        };
                      c > f && f > s(e + i) && (u.horizontal = "center"),
                        h > p && p > s(n + a) && (u.vertical = "middle"),
                        (u.important =
                          o(s(e), s(i)) > o(s(n), s(a))
                            ? "horizontal"
                            : "vertical"),
                        r.using.call(this, t, u);
                    }),
                  l.offset(t.extend(D, { using: a }));
              })
            );
          }),
          (t.ui.position = {
            fit: {
              left: function (t, e) {
                var i,
                  n = e.within,
                  r = n.isWindow ? n.scrollLeft : n.offset.left,
                  s = n.width,
                  a = t.left - e.collisionPosition.marginLeft,
                  l = r - a,
                  c = a + e.collisionWidth - s - r;
                e.collisionWidth > s
                  ? l > 0 && 0 >= c
                    ? ((i = t.left + l + e.collisionWidth - s - r),
                      (t.left += l - i))
                    : (t.left =
                        c > 0 && 0 >= l
                          ? r
                          : l > c
                          ? r + s - e.collisionWidth
                          : r)
                  : l > 0
                  ? (t.left += l)
                  : c > 0
                  ? (t.left -= c)
                  : (t.left = o(t.left - a, t.left));
              },
              top: function (t, e) {
                var i,
                  n = e.within,
                  r = n.isWindow ? n.scrollTop : n.offset.top,
                  s = e.within.height,
                  a = t.top - e.collisionPosition.marginTop,
                  l = r - a,
                  c = a + e.collisionHeight - s - r;
                e.collisionHeight > s
                  ? l > 0 && 0 >= c
                    ? ((i = t.top + l + e.collisionHeight - s - r),
                      (t.top += l - i))
                    : (t.top =
                        c > 0 && 0 >= l
                          ? r
                          : l > c
                          ? r + s - e.collisionHeight
                          : r)
                  : l > 0
                  ? (t.top += l)
                  : c > 0
                  ? (t.top -= c)
                  : (t.top = o(t.top - a, t.top));
              },
            },
            flip: {
              left: function (t, e) {
                var i,
                  n,
                  r = e.within,
                  o = r.offset.left + r.scrollLeft,
                  a = r.width,
                  l = r.isWindow ? r.scrollLeft : r.offset.left,
                  c = t.left - e.collisionPosition.marginLeft,
                  h = c - l,
                  u = c + e.collisionWidth - a - l,
                  d =
                    "left" === e.my[0]
                      ? -e.elemWidth
                      : "right" === e.my[0]
                      ? e.elemWidth
                      : 0,
                  f =
                    "left" === e.at[0]
                      ? e.targetWidth
                      : "right" === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  p = -2 * e.offset[0];
                0 > h
                  ? (0 > (i = t.left + d + f + p + e.collisionWidth - a - o) ||
                      s(h) > i) &&
                    (t.left += d + f + p)
                  : u > 0 &&
                    ((n =
                      t.left - e.collisionPosition.marginLeft + d + f + p - l) >
                      0 ||
                      u > s(n)) &&
                    (t.left += d + f + p);
              },
              top: function (t, e) {
                var i,
                  n,
                  r = e.within,
                  o = r.offset.top + r.scrollTop,
                  a = r.height,
                  l = r.isWindow ? r.scrollTop : r.offset.top,
                  c = t.top - e.collisionPosition.marginTop,
                  h = c - l,
                  u = c + e.collisionHeight - a - l,
                  d =
                    "top" === e.my[1]
                      ? -e.elemHeight
                      : "bottom" === e.my[1]
                      ? e.elemHeight
                      : 0,
                  f =
                    "top" === e.at[1]
                      ? e.targetHeight
                      : "bottom" === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  p = -2 * e.offset[1];
                0 > h
                  ? (0 > (n = t.top + d + f + p + e.collisionHeight - a - o) ||
                      s(h) > n) &&
                    (t.top += d + f + p)
                  : u > 0 &&
                    ((i =
                      t.top - e.collisionPosition.marginTop + d + f + p - l) >
                      0 ||
                      u > s(i)) &&
                    (t.top += d + f + p);
              },
            },
            flipfit: {
              left: function () {
                t.ui.position.flip.left.apply(this, arguments),
                  t.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                t.ui.position.flip.top.apply(this, arguments),
                  t.ui.position.fit.top.apply(this, arguments);
              },
            },
          });
      })(),
      t.ui.position,
      (t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      }),
      t.fn.extend({
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      (t.ui.safeActiveElement = function (t) {
        var e;
        try {
          e = t.activeElement;
        } catch (i) {
          e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
      }),
      t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: { submenu: "ui-icon-caret-1-e" },
          items: "> *",
          menus: "ul",
          position: { my: "left top", at: "right top" },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .attr({ role: this.options.role, tabIndex: 0 }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
              "mousedown .ui-menu-item": function (t) {
                t.preventDefault();
              },
              "click .ui-menu-item": function (e) {
                var i = t(e.target),
                  n = t(t.ui.safeActiveElement(this.document[0]));
                !this.mouseHandled &&
                  i.not(".ui-state-disabled").length &&
                  (this.select(e),
                  e.isPropagationStopped() || (this.mouseHandled = !0),
                  i.has(".ui-menu").length
                    ? this.expand(e)
                    : !this.element.is(":focus") &&
                      n.closest(".ui-menu").length &&
                      (this.element.trigger("focus", [!0]),
                      this.active &&
                        1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)));
              },
              "mouseenter .ui-menu-item": function (e) {
                if (!this.previousFilter) {
                  var i = t(e.target).closest(".ui-menu-item"),
                    n = t(e.currentTarget);
                  i[0] === n[0] &&
                    (this._removeClass(
                      n.siblings().children(".ui-state-active"),
                      null,
                      "ui-state-active"
                    ),
                    this.focus(e, n));
                }
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (t, e) {
                var i =
                  this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i);
              },
              blur: function (e) {
                this._delay(function () {
                  !t.contains(
                    this.element[0],
                    t.ui.safeActiveElement(this.document[0])
                  ) && this.collapseAll(e);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t),
                  (this.mouseHandled = !1);
              },
            });
        },
        _destroy: function () {
          var e = this.element
            .find(".ui-menu-item")
            .removeAttr("role aria-disabled")
            .children(".ui-menu-item-wrapper")
            .removeUniqueId()
            .removeAttr("tabIndex role aria-haspopup");
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeAttr(
              "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
            )
            .removeUniqueId()
            .show(),
            e.children().each(function () {
              var e = t(this);
              e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function (e) {
          var i,
            n,
            r,
            o,
            s = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
            case t.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
            case t.ui.keyCode.END:
              this._move("last", "last", e);
              break;
            case t.ui.keyCode.UP:
              this.previous(e);
              break;
            case t.ui.keyCode.DOWN:
              this.next(e);
              break;
            case t.ui.keyCode.LEFT:
              this.collapse(e);
              break;
            case t.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(e);
              break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
              this._activate(e);
              break;
            case t.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
            default:
              (s = !1),
                (n = this.previousFilter || ""),
                (o = !1),
                (r =
                  e.keyCode >= 96 && 105 >= e.keyCode
                    ? "" + (e.keyCode - 96)
                    : String.fromCharCode(e.keyCode)),
                clearTimeout(this.filterTimer),
                r === n ? (o = !0) : (r = n + r),
                (i = this._filterMenuItems(r)),
                (i =
                  o && -1 !== i.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : i).length ||
                  ((r = String.fromCharCode(e.keyCode)),
                  (i = this._filterMenuItems(r))),
                i.length
                  ? (this.focus(e, i),
                    (this.previousFilter = r),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          s && e.preventDefault();
        },
        _activate: function (t) {
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            (this.active.children("[aria-haspopup='true']").length
              ? this.expand(t)
              : this.select(t));
        },
        refresh: function () {
          var e,
            i,
            n,
            r,
            o = this,
            s = this.options.icons.submenu,
            a = this.element.find(this.options.menus);
          this._toggleClass(
            "ui-menu-icons",
            null,
            !!this.element.find(".ui-icon").length
          ),
            (i = a
              .filter(":not(.ui-menu)")
              .hide()
              .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false",
              })
              .each(function () {
                var e = t(this),
                  i = e.prev(),
                  n = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(n, "ui-menu-icon", "ui-icon " + s),
                  i.attr("aria-haspopup", "true").prepend(n),
                  e.attr("aria-labelledby", i.attr("id"));
              })),
            this._addClass(
              i,
              "ui-menu",
              "ui-widget ui-widget-content ui-front"
            ),
            (e = a.add(this.element).find(this.options.items))
              .not(".ui-menu-item")
              .each(function () {
                var e = t(this);
                o._isDivider(e) &&
                  o._addClass(e, "ui-menu-divider", "ui-widget-content");
              }),
            (r = (n = e.not(".ui-menu-item, .ui-menu-divider"))
              .children()
              .not(".ui-menu")
              .uniqueId()
              .attr({ tabIndex: -1, role: this._itemRole() })),
            this._addClass(n, "ui-menu-item")._addClass(
              r,
              "ui-menu-item-wrapper"
            ),
            e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !t.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return { menu: "menuitem", listbox: "option" }[this.options.role];
        },
        _setOption: function (t, e) {
          if ("icons" === t) {
            var i = this.element.find(".ui-menu-icon");
            this._removeClass(i, null, this.options.icons.submenu)._addClass(
              i,
              null,
              e.submenu
            );
          }
          this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function (t, e) {
          var i, n, r;
          this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            (this.active = e.first()),
            (n = this.active.children(".ui-menu-item-wrapper")),
            this._addClass(n, null, "ui-state-active"),
            this.options.role &&
              this.element.attr("aria-activedescendant", n.attr("id")),
            (r = this.active
              .parent()
              .closest(".ui-menu-item")
              .children(".ui-menu-item-wrapper")),
            this._addClass(r, null, "ui-state-active"),
            t && "keydown" === t.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = e.children(".ui-menu")).length &&
              t &&
              /^mouse/.test(t.type) &&
              this._startOpening(i),
            (this.activeMenu = e.parent()),
            this._trigger("focus", t, { item: e });
        },
        _scrollIntoView: function (e) {
          var i, n, r, o, s, a;
          this._hasScroll() &&
            ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
            (r = e.offset().top - this.activeMenu.offset().top - i - n),
            (o = this.activeMenu.scrollTop()),
            (s = this.activeMenu.height()),
            (a = e.outerHeight()),
            0 > r
              ? this.activeMenu.scrollTop(o + r)
              : r + a > s && this.activeMenu.scrollTop(o + r - s + a));
        },
        blur: function (t, e) {
          e || clearTimeout(this.timer),
            this.active &&
              (this._removeClass(
                this.active.children(".ui-menu-item-wrapper"),
                null,
                "ui-state-active"
              ),
              this._trigger("blur", t, { item: this.active }),
              (this.active = null));
        },
        _startOpening: function (t) {
          clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(t);
              }, this.delay));
        },
        _open: function (e) {
          var i = t.extend({ of: this.active }, this.options.position);
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(e.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            e
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(i);
        },
        collapseAll: function (e, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var n = i
                ? this.element
                : t(e && e.target).closest(this.element.find(".ui-menu"));
              n.length || (n = this.element),
                this._close(n),
                this.blur(e),
                this._removeClass(
                  n.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                (this.activeMenu = n);
            }, this.delay));
        },
        _close: function (t) {
          t || (t = this.active ? this.active.parent() : this.element),
            t
              .find(".ui-menu")
              .hide()
              .attr("aria-hidden", "true")
              .attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function (e) {
          return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function (t) {
          return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function (t) {
          var e =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function (t) {
          var e =
            this.active &&
            this.active.children(".ui-menu ").find(this.options.items).first();
          e &&
            e.length &&
            (this._open(e.parent()),
            this._delay(function () {
              this.focus(t, e);
            }));
        },
        next: function (t) {
          this._move("next", "first", t);
        },
        previous: function (t) {
          this._move("prev", "last", t);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (t, e, i) {
          var n;
          this.active &&
            (n =
              "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](
                    ".ui-menu-item"
                  ).eq(-1)
                : this.active[t + "All"](".ui-menu-item").eq(0)),
            (n && n.length && this.active) ||
              (n = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, n);
        },
        nextPage: function (e) {
          var i, n, r;
          return this.active
            ? void (
                this.isLastItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (r = this.element.height()),
                    this.active.nextAll(".ui-menu-item").each(function () {
                      return 0 > (i = t(this)).offset().top - n - r;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu
                        .find(this.options.items)
                        [this.active ? "last" : "first"]()
                    ))
              )
            : void this.next(e);
        },
        previousPage: function (e) {
          var i, n, r;
          return this.active
            ? void (
                this.isFirstItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (r = this.element.height()),
                    this.active.prevAll(".ui-menu-item").each(function () {
                      return (i = t(this)).offset().top - n + r > 0;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu.find(this.options.items).first()
                    ))
              )
            : void this.next(e);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (e) {
          this.active = this.active || t(e.target).closest(".ui-menu-item");
          var i = { item: this.active };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i);
        },
        _filterMenuItems: function (e) {
          var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            n = RegExp("^" + i, "i");
          return this.activeMenu
            .find(this.options.items)
            .filter(".ui-menu-item")
            .filter(function () {
              return n.test(
                t.trim(t(this).children(".ui-menu-item-wrapper").text())
              );
            });
        },
      }),
      t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var e,
            i,
            n,
            r = this.element[0].nodeName.toLowerCase(),
            o = "textarea" === r,
            s = "input" === r;
          (this.isMultiLine =
            o || (!s && this._isContentEditable(this.element))),
            (this.valueMethod = this.element[o || s ? "val" : "text"]),
            (this.isNewMenu = !0),
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (r) {
                if (this.element.prop("readOnly"))
                  return (e = !0), (n = !0), void (i = !0);
                (e = !1), (n = !1), (i = !1);
                var o = t.ui.keyCode;
                switch (r.keyCode) {
                  case o.PAGE_UP:
                    (e = !0), this._move("previousPage", r);
                    break;
                  case o.PAGE_DOWN:
                    (e = !0), this._move("nextPage", r);
                    break;
                  case o.UP:
                    (e = !0), this._keyEvent("previous", r);
                    break;
                  case o.DOWN:
                    (e = !0), this._keyEvent("next", r);
                    break;
                  case o.ENTER:
                    this.menu.active &&
                      ((e = !0), r.preventDefault(), this.menu.select(r));
                    break;
                  case o.TAB:
                    this.menu.active && this.menu.select(r);
                    break;
                  case o.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(r),
                      r.preventDefault());
                    break;
                  default:
                    (i = !0), this._searchTimeout(r);
                }
              },
              keypress: function (n) {
                if (e)
                  return (
                    (e = !1),
                    void (
                      (!this.isMultiLine || this.menu.element.is(":visible")) &&
                      n.preventDefault()
                    )
                  );
                if (!i) {
                  var r = t.ui.keyCode;
                  switch (n.keyCode) {
                    case r.PAGE_UP:
                      this._move("previousPage", n);
                      break;
                    case r.PAGE_DOWN:
                      this._move("nextPage", n);
                      break;
                    case r.UP:
                      this._keyEvent("previous", n);
                      break;
                    case r.DOWN:
                      this._keyEvent("next", n);
                  }
                }
              },
              input: function (t) {
                return n
                  ? ((n = !1), void t.preventDefault())
                  : void this._searchTimeout(t);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (t) {
                return this.cancelBlur
                  ? void delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t));
              },
            }),
            this._initSource(),
            (this.menu = t("<ul>")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur,
                      this.element[0] !==
                        t.ui.safeActiveElement(this.document[0]) &&
                        this.element.trigger("focus");
                  });
              },
              menufocus: function (e, i) {
                var n, r;
                return this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                  ? (this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      t(e.target).trigger(e.originalEvent);
                    }))
                  : ((r = i.item.data("ui-autocomplete-item")),
                    !1 !== this._trigger("focus", e, { item: r }) &&
                      e.originalEvent &&
                      /^key/.test(e.originalEvent.type) &&
                      this._value(r.value),
                    void (
                      (n = i.item.attr("aria-label") || r.value) &&
                      t.trim(n).length &&
                      (this.liveRegion.children().hide(),
                      t("<div>").text(n).appendTo(this.liveRegion))
                    ));
              },
              menuselect: function (e, i) {
                var n = i.item.data("ui-autocomplete-item"),
                  r = this.previous;
                this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                  (this.element.trigger("focus"),
                  (this.previous = r),
                  this._delay(function () {
                    (this.previous = r), (this.selectedItem = n);
                  })),
                  !1 !== this._trigger("select", e, { item: n }) &&
                    this._value(n.value),
                  (this.term = this._value()),
                  this.close(e),
                  (this.selectedItem = n);
              },
            }),
            (this.liveRegion = t("<div>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            }).appendTo(this.document[0].body)),
            this._addClass(
              this.liveRegion,
              null,
              "ui-helper-hidden-accessible"
            ),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function (e) {
          var i = this.menu.element[0];
          return (
            e.target === this.element[0] ||
            e.target === i ||
            t.contains(i, e.target)
          );
        },
        _closeOnClickOutside: function (t) {
          this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _initSource: function () {
          var e,
            i,
            n = this;
          t.isArray(this.options.source)
            ? ((e = this.options.source),
              (this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
              }))
            : "string" == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function (e, r) {
                n.xhr && n.xhr.abort(),
                  (n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                      r(t);
                    },
                    error: function () {
                      r([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (t) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var e = this.term === this._value(),
                i = this.menu.element.is(":visible"),
                n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
              (!e || (e && !i && !n)) &&
                ((this.selectedItem = null), this.search(null, t));
            }, this.options.delay));
        },
        search: function (t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : !1 !== this._trigger("search", e)
              ? this._search(t)
              : void 0
          );
        },
        _search: function (t) {
          this.pending++,
            this._addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response());
        },
        _response: function () {
          var e = ++this.requestIndex;
          return t.proxy(function (t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending || this._removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (t) {
          t && (t = this._normalize(t)),
            this._trigger("response", null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger("open"))
              : this._close();
        },
        close: function (t) {
          (this.cancelSearch = !0), this._close(t);
        },
        _close: function (t) {
          this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") &&
              (this.menu.element.hide(),
              this.menu.blur(),
              (this.isNewMenu = !0),
              this._trigger("close", t));
        },
        _change: function (t) {
          this.previous !== this._value() &&
            this._trigger("change", t, { item: this.selectedItem });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : t.map(e, function (e) {
                return "string" == typeof e
                  ? { label: e, value: e }
                  : t.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label,
                    });
              });
        },
        _suggest: function (e) {
          var i = this.menu.element.empty();
          this._renderMenu(i, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, { mousedown: "_closeOnClickOutside" });
        },
        _resizeMenu: function () {
          var t = this.menu.element;
          t.outerWidth(
            Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (e, i) {
          var n = this;
          t.each(i, function (t, i) {
            n._renderItemData(e, i);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function (e, i) {
          return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
        },
        _move: function (t, e) {
          return this.menu.element.is(":visible")
            ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e)
            : void this.search(null, e);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (t, e) {
          (!this.isMultiLine || this.menu.element.is(":visible")) &&
            (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function (t) {
          if (!t.length) return !1;
          var e = t.prop("contentEditable");
          return "inherit" === e
            ? this._isContentEditable(t.parent())
            : "true" === e;
        },
      }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var i;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t("<div>").text(i).appendTo(this.liveRegion));
        },
      }),
      t.ui.autocomplete,
      t.extend(t.ui, { datepicker: { version: "1.12.1" } }),
      t.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (t) {
          return r(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (e, i) {
          var n, r, o;
          (r = "div" === (n = e.nodeName.toLowerCase()) || "span" === n),
            e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
            ((o = this._newInst(t(e), r)).settings = t.extend({}, i || {})),
            "input" === n
              ? this._connectDatepicker(e, o)
              : r && this._inlineDatepicker(e, o);
        },
        _newInst: function (e, n) {
          return {
            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: n,
            dpDiv: n
              ? i(
                  t(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                  )
                )
              : this.dpDiv,
          };
        },
        _connectDatepicker: function (e, i) {
          var n = t(e);
          (i.append = t([])),
            (i.trigger = t([])),
            n.hasClass(this.markerClassName) ||
              (this._attachments(n, i),
              n
                .addClass(this.markerClassName)
                .on("keydown", this._doKeyDown)
                .on("keypress", this._doKeyPress)
                .on("keyup", this._doKeyUp),
              this._autoSize(i),
              t.data(e, "datepicker", i),
              i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, i) {
          var n,
            r,
            o,
            s = this._get(i, "appendText"),
            a = this._get(i, "isRTL");
          i.append && i.append.remove(),
            s &&
              ((i.append = t(
                "<span class='" + this._appendClass + "'>" + s + "</span>"
              )),
              e[a ? "before" : "after"](i.append)),
            e.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            ("focus" === (n = this._get(i, "showOn")) || "both" === n) &&
              e.on("focus", this._showDatepicker),
            ("button" === n || "both" === n) &&
              ((r = this._get(i, "buttonText")),
              (o = this._get(i, "buttonImage")),
              (i.trigger = t(
                this._get(i, "buttonImageOnly")
                  ? t("<img/>")
                      .addClass(this._triggerClass)
                      .attr({ src: o, alt: r, title: r })
                  : t("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        o ? t("<img/>").attr({ src: o, alt: r, title: r }) : r
                      )
              )),
              e[a ? "before" : "after"](i.trigger),
              i.trigger.on("click", function () {
                return (
                  t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput === e[0]
                    ? t.datepicker._hideDatepicker()
                    : t.datepicker._datepickerShowing &&
                      t.datepicker._lastInput !== e[0]
                    ? (t.datepicker._hideDatepicker(),
                      t.datepicker._showDatepicker(e[0]))
                    : t.datepicker._showDatepicker(e[0]),
                  !1
                );
              }));
        },
        _autoSize: function (t) {
          if (this._get(t, "autoSize") && !t.inline) {
            var e,
              i,
              n,
              r,
              o = new Date(2009, 11, 20),
              s = this._get(t, "dateFormat");
            s.match(/[DM]/) &&
              ((e = function (t) {
                for (i = 0, n = 0, r = 0; t.length > r; r++)
                  t[r].length > i && ((i = t[r].length), (n = r));
                return n;
              }),
              o.setMonth(
                e(
                  this._get(t, s.match(/MM/) ? "monthNames" : "monthNamesShort")
                )
              ),
              o.setDate(
                e(this._get(t, s.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  o.getDay()
              )),
              t.input.attr("size", this._formatDate(t, o).length);
          }
        },
        _inlineDatepicker: function (e, i) {
          var n = t(e);
          n.hasClass(this.markerClassName) ||
            (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (e, i, n, o, s) {
          var a,
            l,
            c,
            h,
            u,
            d = this._dialogInst;
          return (
            d ||
              ((this.uuid += 1),
              (a = "dp" + this.uuid),
              (this._dialogInput = t(
                "<input type='text' id='" +
                  a +
                  "' style='position: absolute; top: -100px; width: 0px;'/>"
              )),
              this._dialogInput.on("keydown", this._doKeyDown),
              t("body").append(this._dialogInput),
              ((d = this._dialogInst =
                this._newInst(this._dialogInput, !1)).settings = {}),
              t.data(this._dialogInput[0], "datepicker", d)),
            r(d.settings, o || {}),
            (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
            this._dialogInput.val(i),
            (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
            this._pos ||
              ((l = document.documentElement.clientWidth),
              (c = document.documentElement.clientHeight),
              (h =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (u =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [l / 2 - 100 + h, c / 2 - 150 + u])),
            this._dialogInput
              .css("left", this._pos[0] + 20 + "px")
              .css("top", this._pos[1] + "px"),
            (d.settings.onSelect = n),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
          );
        },
        _destroyDatepicker: function (e) {
          var i,
            n = t(e),
            r = t.data(e, "datepicker");
          n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            t.removeData(e, "datepicker"),
            "input" === i
              ? (r.append.remove(),
                r.trigger.remove(),
                n
                  .removeClass(this.markerClassName)
                  .off("focus", this._showDatepicker)
                  .off("keydown", this._doKeyDown)
                  .off("keypress", this._doKeyPress)
                  .off("keyup", this._doKeyUp))
              : ("div" === i || "span" === i) &&
                n.removeClass(this.markerClassName).empty(),
            o === r && (o = null));
        },
        _enableDatepicker: function (e) {
          var i,
            n,
            r = t(e),
            o = t.data(e, "datepicker");
          r.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !1),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" }))
              : ("div" === i || "span" === i) &&
                ((n = r.children("." + this._inlineClass))
                  .children()
                  .removeClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })));
        },
        _disableDatepicker: function (e) {
          var i,
            n,
            r = t(e),
            o = t.data(e, "datepicker");
          r.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !0),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" }))
              : ("div" === i || "span" === i) &&
                ((n = r.children("." + this._inlineClass))
                  .children()
                  .addClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
          if (!t) return !1;
          for (var e = 0; this._disabledInputs.length > e; e++)
            if (this._disabledInputs[e] === t) return !0;
          return !1;
        },
        _getInst: function (e) {
          try {
            return t.data(e, "datepicker");
          } catch (t) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function (e, i, n) {
          var o,
            s,
            a,
            l,
            c = this._getInst(e);
          return 2 === arguments.length && "string" == typeof i
            ? "defaults" === i
              ? t.extend({}, t.datepicker._defaults)
              : c
              ? "all" === i
                ? t.extend({}, c.settings)
                : this._get(c, i)
              : null
            : ((o = i || {}),
              "string" == typeof i && ((o = {})[i] = n),
              void (
                c &&
                (this._curInst === c && this._hideDatepicker(),
                (s = this._getDateDatepicker(e, !0)),
                (a = this._getMinMaxDate(c, "min")),
                (l = this._getMinMaxDate(c, "max")),
                r(c.settings, o),
                null !== a &&
                  void 0 !== o.dateFormat &&
                  void 0 === o.minDate &&
                  (c.settings.minDate = this._formatDate(c, a)),
                null !== l &&
                  void 0 !== o.dateFormat &&
                  void 0 === o.maxDate &&
                  (c.settings.maxDate = this._formatDate(c, l)),
                "disabled" in o &&
                  (o.disabled
                    ? this._disableDatepicker(e)
                    : this._enableDatepicker(e)),
                this._attachments(t(e), c),
                this._autoSize(c),
                this._setDate(c, s),
                this._updateAlternate(c),
                this._updateDatepicker(c))
              ));
        },
        _changeDatepicker: function (t, e, i) {
          this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
          var e = this._getInst(t);
          e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          i &&
            (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i));
        },
        _getDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          return (
            i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
          );
        },
        _doKeyDown: function (e) {
          var i,
            n,
            r,
            o = t.datepicker._getInst(e.target),
            s = !0,
            a = o.dpDiv.is(".ui-datepicker-rtl");
          if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), (s = !1);
                break;
              case 13:
                return (
                  (r = t(
                    "td." +
                      t.datepicker._dayOverClass +
                      ":not(." +
                      t.datepicker._currentClass +
                      ")",
                    o.dpDiv
                  ))[0] &&
                    t.datepicker._selectDay(
                      e.target,
                      o.selectedMonth,
                      o.selectedYear,
                      r[0]
                    ),
                  (i = t.datepicker._get(o, "onSelect"))
                    ? ((n = t.datepicker._formatDate(o)),
                      i.apply(o.input ? o.input[0] : null, [n, o]))
                    : t.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                t.datepicker._hideDatepicker();
                break;
              case 33:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, "stepBigMonths")
                    : -t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 34:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, "stepBigMonths")
                    : +t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                  (s = e.ctrlKey || e.metaKey);
                break;
              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                  (s = e.ctrlKey || e.metaKey);
                break;
              case 37:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                  (s = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? -t.datepicker._get(o, "stepBigMonths")
                        : -t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 38:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, -7, "D"),
                  (s = e.ctrlKey || e.metaKey);
                break;
              case 39:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                  (s = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? +t.datepicker._get(o, "stepBigMonths")
                        : +t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 40:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, 7, "D"),
                  (s = e.ctrlKey || e.metaKey);
                break;
              default:
                s = !1;
            }
          else
            36 === e.keyCode && e.ctrlKey
              ? t.datepicker._showDatepicker(this)
              : (s = !1);
          s && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
          var i,
            n,
            r = t.datepicker._getInst(e.target);
          return t.datepicker._get(r, "constrainInput")
            ? ((i = t.datepicker._possibleChars(
                t.datepicker._get(r, "dateFormat")
              )),
              (n = String.fromCharCode(
                null == e.charCode ? e.keyCode : e.charCode
              )),
              e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1)
            : void 0;
        },
        _doKeyUp: function (e) {
          var i = t.datepicker._getInst(e.target);
          if (i.input.val() !== i.lastVal)
            try {
              t.datepicker.parseDate(
                t.datepicker._get(i, "dateFormat"),
                i.input ? i.input.val() : null,
                t.datepicker._getFormatConfig(i)
              ) &&
                (t.datepicker._setDateFromField(i),
                t.datepicker._updateAlternate(i),
                t.datepicker._updateDatepicker(i));
            } catch (t) {}
          return !0;
        },
        _showDatepicker: function (e) {
          var i, n, o, s, a, l, c;
          ("input" !== (e = e.target || e).nodeName.toLowerCase() &&
            (e = t("input", e.parentNode)[0]),
          t.datepicker._isDisabledDatepicker(e) ||
            t.datepicker._lastInput === e) ||
            ((i = t.datepicker._getInst(e)),
            t.datepicker._curInst &&
              t.datepicker._curInst !== i &&
              (t.datepicker._curInst.dpDiv.stop(!0, !0),
              i &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !==
              (o = (n = t.datepicker._get(i, "beforeShow"))
                ? n.apply(e, [e, i])
                : {}) &&
              (r(i.settings, o),
              (i.lastVal = null),
              (t.datepicker._lastInput = e),
              t.datepicker._setDateFromField(i),
              t.datepicker._inDialog && (e.value = ""),
              t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                (t.datepicker._pos[1] += e.offsetHeight)),
              (s = !1),
              t(e)
                .parents()
                .each(function () {
                  return !(s |= "fixed" === t(this).css("position"));
                }),
              (a = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
              (t.datepicker._pos = null),
              i.dpDiv.empty(),
              i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              t.datepicker._updateDatepicker(i),
              (a = t.datepicker._checkOffset(i, a, s)),
              i.dpDiv.css({
                position:
                  t.datepicker._inDialog && t.blockUI
                    ? "static"
                    : s
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px",
              }),
              i.inline ||
                ((l = t.datepicker._get(i, "showAnim")),
                (c = t.datepicker._get(i, "duration")),
                i.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) ||
                          "relative" === e ||
                          "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)),
                        !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(t(e)) + 1
                ),
                (t.datepicker._datepickerShowing = !0),
                t.effects && t.effects.effect[l]
                  ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c)
                  : i.dpDiv[l || "show"](l ? c : null),
                t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                (t.datepicker._curInst = i))));
        },
        _updateDatepicker: function (e) {
          (this.maxRows = 4),
            (o = e),
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
          var i,
            r = this._getNumberOfMonths(e),
            s = r[1],
            a = e.dpDiv.find("." + this._dayOverClass + " a");
          a.length > 0 && n.apply(a.get(0)),
            e.dpDiv
              .removeClass(
                "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
              )
              .width(""),
            s > 1 &&
              e.dpDiv
                .addClass("ui-datepicker-multi-" + s)
                .css("width", 17 * s + "em"),
            e.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"](
              "ui-datepicker-multi"
            ),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
              "ui-datepicker-rtl"
            ),
            e === t.datepicker._curInst &&
              t.datepicker._datepickerShowing &&
              t.datepicker._shouldFocusInput(e) &&
              e.input.trigger("focus"),
            e.yearshtml &&
              ((i = e.yearshtml),
              setTimeout(function () {
                i === e.yearshtml &&
                  e.yearshtml &&
                  e.dpDiv
                    .find("select.ui-datepicker-year:first")
                    .replaceWith(e.yearshtml),
                  (i = e.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (t) {
          return (
            t.input &&
            t.input.is(":visible") &&
            !t.input.is(":disabled") &&
            !t.input.is(":focus")
          );
        },
        _checkOffset: function (e, i, n) {
          var r = e.dpDiv.outerWidth(),
            o = e.dpDiv.outerHeight(),
            s = e.input ? e.input.outerWidth() : 0,
            a = e.input ? e.input.outerHeight() : 0,
            l =
              document.documentElement.clientWidth +
              (n ? 0 : t(document).scrollLeft()),
            c =
              document.documentElement.clientHeight +
              (n ? 0 : t(document).scrollTop());
          return (
            (i.left -= this._get(e, "isRTL") ? r - s : 0),
            (i.left -=
              n && i.left === e.input.offset().left
                ? t(document).scrollLeft()
                : 0),
            (i.top -=
              n && i.top === e.input.offset().top + a
                ? t(document).scrollTop()
                : 0),
            (i.left -= Math.min(
              i.left,
              i.left + r > l && l > r ? Math.abs(i.left + r - l) : 0
            )),
            (i.top -= Math.min(
              i.top,
              i.top + o > c && c > o ? Math.abs(o + a) : 0
            )),
            i
          );
        },
        _findPos: function (e) {
          for (
            var i, n = this._getInst(e), r = this._get(n, "isRTL");
            e &&
            ("hidden" === e.type ||
              1 !== e.nodeType ||
              t.expr.filters.hidden(e));

          )
            e = e[r ? "previousSibling" : "nextSibling"];
          return [(i = t(e).offset()).left, i.top];
        },
        _hideDatepicker: function (e) {
          var i,
            n,
            r,
            o,
            s = this._curInst;
          !s ||
            (e && s !== t.data(e, "datepicker")) ||
            (this._datepickerShowing &&
              ((i = this._get(s, "showAnim")),
              (n = this._get(s, "duration")),
              (r = function () {
                t.datepicker._tidyDialog(s);
              }),
              t.effects && (t.effects.effect[i] || t.effects[i])
                ? s.dpDiv.hide(i, t.datepicker._get(s, "showOptions"), n, r)
                : s.dpDiv[
                    "slideDown" === i
                      ? "slideUp"
                      : "fadeIn" === i
                      ? "fadeOut"
                      : "hide"
                  ](i ? n : null, r),
              i || r(),
              (this._datepickerShowing = !1),
              (o = this._get(s, "onClose")) &&
                o.apply(s.input ? s.input[0] : null, [
                  s.input ? s.input.val() : "",
                  s,
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px",
                }),
                t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
          t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (e) {
          if (t.datepicker._curInst) {
            var i = t(e.target),
              n = t.datepicker._getInst(i[0]);
            ((i[0].id !== t.datepicker._mainDivId &&
              0 === i.parents("#" + t.datepicker._mainDivId).length &&
              !i.hasClass(t.datepicker.markerClassName) &&
              !i.closest("." + t.datepicker._triggerClass).length &&
              t.datepicker._datepickerShowing &&
              (!t.datepicker._inDialog || !t.blockUI)) ||
              (i.hasClass(t.datepicker.markerClassName) &&
                t.datepicker._curInst !== n)) &&
              t.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function (e, i, n) {
          var r = t(e),
            o = this._getInst(r[0]);
          this._isDisabledDatepicker(r[0]) ||
            (this._adjustInstDate(
              o,
              i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
              n
            ),
            this._updateDatepicker(o));
        },
        _gotoToday: function (e) {
          var i,
            n = t(e),
            r = this._getInst(n[0]);
          this._get(r, "gotoCurrent") && r.currentDay
            ? ((r.selectedDay = r.currentDay),
              (r.drawMonth = r.selectedMonth = r.currentMonth),
              (r.drawYear = r.selectedYear = r.currentYear))
            : ((i = new Date()),
              (r.selectedDay = i.getDate()),
              (r.drawMonth = r.selectedMonth = i.getMonth()),
              (r.drawYear = r.selectedYear = i.getFullYear())),
            this._notifyChange(r),
            this._adjustDate(n);
        },
        _selectMonthYear: function (e, i, n) {
          var r = t(e),
            o = this._getInst(r[0]);
          (o["selected" + ("M" === n ? "Month" : "Year")] = o[
            "draw" + ("M" === n ? "Month" : "Year")
          ] =
            parseInt(i.options[i.selectedIndex].value, 10)),
            this._notifyChange(o),
            this._adjustDate(r);
        },
        _selectDay: function (e, i, n, r) {
          var o,
            s = t(e);
          t(r).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(s[0]) ||
            (((o = this._getInst(s[0])).selectedDay = o.currentDay =
              t("a", r).html()),
            (o.selectedMonth = o.currentMonth = i),
            (o.selectedYear = o.currentYear = n),
            this._selectDate(
              e,
              this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
            ));
        },
        _clearDate: function (e) {
          var i = t(e);
          this._selectDate(i, "");
        },
        _selectDate: function (e, i) {
          var n,
            r = t(e),
            o = this._getInst(r[0]);
          (i = null != i ? i : this._formatDate(o)),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (n = this._get(o, "onSelect"))
              ? n.apply(o.input ? o.input[0] : null, [i, o])
              : o.input && o.input.trigger("change"),
            o.inline
              ? this._updateDatepicker(o)
              : (this._hideDatepicker(),
                (this._lastInput = o.input[0]),
                "object" != typeof o.input[0] && o.input.trigger("focus"),
                (this._lastInput = null));
        },
        _updateAlternate: function (e) {
          var i,
            n,
            r,
            o = this._get(e, "altField");
          o &&
            ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
            (n = this._getDate(e)),
            (r = this.formatDate(i, n, this._getFormatConfig(e))),
            t(o).val(r));
        },
        noWeekends: function (t) {
          var e = t.getDay();
          return [e > 0 && 6 > e, ""];
        },
        iso8601Week: function (t) {
          var e,
            i = new Date(t.getTime());
          return (
            i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            (e = i.getTime()),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
          );
        },
        parseDate: function (e, i, n) {
          if (null == e || null == i) throw "Invalid arguments";
          if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
          var r,
            o,
            s,
            a,
            l = 0,
            c =
              (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            h =
              "string" != typeof c
                ? c
                : (new Date().getFullYear() % 100) + parseInt(c, 10),
            u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
            d = (n ? n.dayNames : null) || this._defaults.dayNames,
            f =
              (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
            p = (n ? n.monthNames : null) || this._defaults.monthNames,
            g = -1,
            v = -1,
            m = -1,
            w = -1,
            y = !1,
            x = function (t) {
              var i = e.length > r + 1 && e.charAt(r + 1) === t;
              return i && r++, i;
            },
            b = function (t) {
              var e = x(t),
                n =
                  "@" === t
                    ? 14
                    : "!" === t
                    ? 20
                    : "y" === t && e
                    ? 4
                    : "o" === t
                    ? 3
                    : 2,
                r = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                o = i.substring(l).match(r);
              if (!o) throw "Missing number at position " + l;
              return (l += o[0].length), parseInt(o[0], 10);
            },
            k = function (e, n, r) {
              var o = -1,
                s = t
                  .map(x(e) ? r : n, function (t, e) {
                    return [[e, t]];
                  })
                  .sort(function (t, e) {
                    return -(t[1].length - e[1].length);
                  });
              if (
                (t.each(s, function (t, e) {
                  var n = e[1];
                  return i.substr(l, n.length).toLowerCase() === n.toLowerCase()
                    ? ((o = e[0]), (l += n.length), !1)
                    : void 0;
                }),
                -1 !== o)
              )
                return o + 1;
              throw "Unknown name at position " + l;
            },
            C = function () {
              if (i.charAt(l) !== e.charAt(r))
                throw "Unexpected literal at position " + l;
              l++;
            };
          for (r = 0; e.length > r; r++)
            if (y) "'" !== e.charAt(r) || x("'") ? C() : (y = !1);
            else
              switch (e.charAt(r)) {
                case "d":
                  m = b("d");
                  break;
                case "D":
                  k("D", u, d);
                  break;
                case "o":
                  w = b("o");
                  break;
                case "m":
                  v = b("m");
                  break;
                case "M":
                  v = k("M", f, p);
                  break;
                case "y":
                  g = b("y");
                  break;
                case "@":
                  (g = (a = new Date(b("@"))).getFullYear()),
                    (v = a.getMonth() + 1),
                    (m = a.getDate());
                  break;
                case "!":
                  (g = (a = new Date(
                    (b("!") - this._ticksTo1970) / 1e4
                  )).getFullYear()),
                    (v = a.getMonth() + 1),
                    (m = a.getDate());
                  break;
                case "'":
                  x("'") ? C() : (y = !0);
                  break;
                default:
                  C();
              }
          if (i.length > l && ((s = i.substr(l)), !/^\s+/.test(s)))
            throw "Extra/unparsed characters found in date: " + s;
          if (
            (-1 === g
              ? (g = new Date().getFullYear())
              : 100 > g &&
                (g +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (h >= g ? 0 : -100)),
            w > -1)
          )
            for (v = 1, m = w; !((o = this._getDaysInMonth(g, v - 1)) >= m); )
              v++, (m -= o);
          if (
            (a = this._daylightSavingAdjust(
              new Date(g, v - 1, m)
            )).getFullYear() !== g ||
            a.getMonth() + 1 !== v ||
            a.getDate() !== m
          )
            throw "Invalid date";
          return a;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
          864e9 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
          if (!e) return "";
          var n,
            r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            s =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            a = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function (e) {
              var i = t.length > n + 1 && t.charAt(n + 1) === e;
              return i && n++, i;
            },
            c = function (t, e, i) {
              var n = "" + e;
              if (l(t)) for (; i > n.length; ) n = "0" + n;
              return n;
            },
            h = function (t, e, i, n) {
              return l(t) ? n[e] : i[e];
            },
            u = "",
            d = !1;
          if (e)
            for (n = 0; t.length > n; n++)
              if (d)
                "'" !== t.charAt(n) || l("'") ? (u += t.charAt(n)) : (d = !1);
              else
                switch (t.charAt(n)) {
                  case "d":
                    u += c("d", e.getDate(), 2);
                    break;
                  case "D":
                    u += h("D", e.getDay(), r, o);
                    break;
                  case "o":
                    u += c(
                      "o",
                      Math.round(
                        (new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate()
                        ).getTime() -
                          new Date(e.getFullYear(), 0, 0).getTime()) /
                          864e5
                      ),
                      3
                    );
                    break;
                  case "m":
                    u += c("m", e.getMonth() + 1, 2);
                    break;
                  case "M":
                    u += h("M", e.getMonth(), s, a);
                    break;
                  case "y":
                    u += l("y")
                      ? e.getFullYear()
                      : (10 > e.getFullYear() % 100 ? "0" : "") +
                        (e.getFullYear() % 100);
                    break;
                  case "@":
                    u += e.getTime();
                    break;
                  case "!":
                    u += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    l("'") ? (u += "'") : (d = !0);
                    break;
                  default:
                    u += t.charAt(n);
                }
          return u;
        },
        _possibleChars: function (t) {
          var e,
            i = "",
            n = !1,
            r = function (i) {
              var n = t.length > e + 1 && t.charAt(e + 1) === i;
              return n && e++, n;
            };
          for (e = 0; t.length > e; e++)
            if (n)
              "'" !== t.charAt(e) || r("'") ? (i += t.charAt(e)) : (n = !1);
            else
              switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  i += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  r("'") ? (i += "'") : (n = !0);
                  break;
                default:
                  i += t.charAt(e);
              }
          return i;
        },
        _get: function (t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function (t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, "dateFormat"),
              n = (t.lastVal = t.input ? t.input.val() : null),
              r = this._getDefaultDate(t),
              o = r,
              s = this._getFormatConfig(t);
            try {
              o = this.parseDate(i, n, s) || r;
            } catch (t) {
              n = e ? "" : n;
            }
            (t.selectedDay = o.getDate()),
              (t.drawMonth = t.selectedMonth = o.getMonth()),
              (t.drawYear = t.selectedYear = o.getFullYear()),
              (t.currentDay = n ? o.getDate() : 0),
              (t.currentMonth = n ? o.getMonth() : 0),
              (t.currentYear = n ? o.getFullYear() : 0),
              this._adjustInstDate(t);
          }
        },
        _getDefaultDate: function (t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, "defaultDate"), new Date())
          );
        },
        _determineDate: function (e, i, n) {
          var r =
            null == i || "" === i
              ? n
              : "string" == typeof i
              ? (function (i) {
                  try {
                    return t.datepicker.parseDate(
                      t.datepicker._get(e, "dateFormat"),
                      i,
                      t.datepicker._getFormatConfig(e)
                    );
                  } catch (t) {}
                  for (
                    var n =
                        (i.toLowerCase().match(/^c/)
                          ? t.datepicker._getDate(e)
                          : null) || new Date(),
                      r = n.getFullYear(),
                      o = n.getMonth(),
                      s = n.getDate(),
                      a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      l = a.exec(i);
                    l;

                  ) {
                    switch (l[2] || "d") {
                      case "d":
                      case "D":
                        s += parseInt(l[1], 10);
                        break;
                      case "w":
                      case "W":
                        s += 7 * parseInt(l[1], 10);
                        break;
                      case "m":
                      case "M":
                        (o += parseInt(l[1], 10)),
                          (s = Math.min(s, t.datepicker._getDaysInMonth(r, o)));
                        break;
                      case "y":
                      case "Y":
                        (r += parseInt(l[1], 10)),
                          (s = Math.min(s, t.datepicker._getDaysInMonth(r, o)));
                    }
                    l = a.exec(i);
                  }
                  return new Date(r, o, s);
                })(i)
              : "number" == typeof i
              ? isNaN(i)
                ? n
                : (function (t) {
                    var e = new Date();
                    return e.setDate(e.getDate() + t), e;
                  })(i)
              : new Date(i.getTime());
          return (
            (r = r && "Invalid Date" == "" + r ? n : r) &&
              (r.setHours(0),
              r.setMinutes(0),
              r.setSeconds(0),
              r.setMilliseconds(0)),
            this._daylightSavingAdjust(r)
          );
        },
        _daylightSavingAdjust: function (t) {
          return t
            ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
            : null;
        },
        _setDate: function (t, e, i) {
          var n = !e,
            r = t.selectedMonth,
            o = t.selectedYear,
            s = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
          (t.selectedDay = t.currentDay = s.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = s.getFullYear()),
            (r === t.selectedMonth && o === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
          return !t.currentYear || (t.input && "" === t.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
        },
        _attachHandlers: function (e) {
          var i = this._get(e, "stepMonths"),
            n = "#" + e.id.replace(/\\\\/g, "\\");
          e.dpDiv.find("[data-handler]").map(function () {
            var e = {
              prev: function () {
                t.datepicker._adjustDate(n, -i, "M");
              },
              next: function () {
                t.datepicker._adjustDate(n, +i, "M");
              },
              hide: function () {
                t.datepicker._hideDatepicker();
              },
              today: function () {
                t.datepicker._gotoToday(n);
              },
              selectDay: function () {
                return (
                  t.datepicker._selectDay(
                    n,
                    +this.getAttribute("data-month"),
                    +this.getAttribute("data-year"),
                    this
                  ),
                  !1
                );
              },
              selectMonth: function () {
                return t.datepicker._selectMonthYear(n, this, "M"), !1;
              },
              selectYear: function () {
                return t.datepicker._selectMonthYear(n, this, "Y"), !1;
              },
            };
            t(this).on(
              this.getAttribute("data-event"),
              e[this.getAttribute("data-handler")]
            );
          });
        },
        _generateHTML: function (t) {
          var e,
            i,
            n,
            r,
            o,
            s,
            a,
            l,
            c,
            h,
            u,
            d,
            f,
            p,
            g,
            v,
            m,
            w,
            y,
            x,
            b,
            k,
            C,
            _,
            D,
            T,
            L,
            S,
            M,
            E,
            A,
            I,
            $,
            B,
            N,
            O,
            j,
            H,
            P,
            z = new Date(),
            W = this._daylightSavingAdjust(
              new Date(z.getFullYear(), z.getMonth(), z.getDate())
            ),
            F = this._get(t, "isRTL"),
            R = this._get(t, "showButtonPanel"),
            q = this._get(t, "hideIfNoPrevNext"),
            Y = this._get(t, "navigationAsDateFormat"),
            V = this._getNumberOfMonths(t),
            K = this._get(t, "showCurrentAtPos"),
            U = this._get(t, "stepMonths"),
            X = 1 !== V[0] || 1 !== V[1],
            Z = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9)
            ),
            G = this._getMinMaxDate(t, "min"),
            J = this._getMinMaxDate(t, "max"),
            Q = t.drawMonth - K,
            tt = t.drawYear;
          if ((0 > Q && ((Q += 12), tt--), J))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  J.getFullYear(),
                  J.getMonth() - V[0] * V[1] + 1,
                  J.getDate()
                )
              ),
                e = G && G > e ? G : e;
              this._daylightSavingAdjust(new Date(tt, Q, 1)) > e;

            )
              0 > --Q && ((Q = 11), tt--);
          for (
            t.drawMonth = Q,
              t.drawYear = tt,
              i = this._get(t, "prevText"),
              i = Y
                ? this.formatDate(
                    i,
                    this._daylightSavingAdjust(new Date(tt, Q - U, 1)),
                    this._getFormatConfig(t)
                  )
                : i,
              n = this._canAdjustMonth(t, -1, tt, Q)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (F ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>"
                : q
                ? ""
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (F ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>",
              r = this._get(t, "nextText"),
              r = Y
                ? this.formatDate(
                    r,
                    this._daylightSavingAdjust(new Date(tt, Q + U, 1)),
                    this._getFormatConfig(t)
                  )
                : r,
              o = this._canAdjustMonth(t, 1, tt, Q)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  r +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (F ? "w" : "e") +
                  "'>" +
                  r +
                  "</span></a>"
                : q
                ? ""
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  r +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (F ? "w" : "e") +
                  "'>" +
                  r +
                  "</span></a>",
              s = this._get(t, "currentText"),
              a = this._get(t, "gotoCurrent") && t.currentDay ? Z : W,
              s = Y ? this.formatDate(s, a, this._getFormatConfig(t)) : s,
              l = t.inline
                ? ""
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, "closeText") +
                  "</button>",
              c = R
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (F ? l : "") +
                  (this._isInRange(t, a)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      s +
                      "</button>"
                    : "") +
                  (F ? "" : l) +
                  "</div>"
                : "",
              h = parseInt(this._get(t, "firstDay"), 10),
              h = isNaN(h) ? 0 : h,
              u = this._get(t, "showWeek"),
              d = this._get(t, "dayNames"),
              f = this._get(t, "dayNamesMin"),
              p = this._get(t, "monthNames"),
              g = this._get(t, "monthNamesShort"),
              v = this._get(t, "beforeShowDay"),
              m = this._get(t, "showOtherMonths"),
              w = this._get(t, "selectOtherMonths"),
              y = this._getDefaultDate(t),
              x = "",
              k = 0;
            V[0] > k;
            k++
          ) {
            for (C = "", this.maxRows = 4, _ = 0; V[1] > _; _++) {
              if (
                ((D = this._daylightSavingAdjust(
                  new Date(tt, Q, t.selectedDay)
                )),
                (T = " ui-corner-all"),
                (L = ""),
                X)
              ) {
                if (((L += "<div class='ui-datepicker-group"), V[1] > 1))
                  switch (_) {
                    case 0:
                      (L += " ui-datepicker-group-first"),
                        (T = " ui-corner-" + (F ? "right" : "left"));
                      break;
                    case V[1] - 1:
                      (L += " ui-datepicker-group-last"),
                        (T = " ui-corner-" + (F ? "left" : "right"));
                      break;
                    default:
                      (L += " ui-datepicker-group-middle"), (T = "");
                  }
                L += "'>";
              }
              for (
                L +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  T +
                  "'>" +
                  (/all|left/.test(T) && 0 === k ? (F ? o : n) : "") +
                  (/all|right/.test(T) && 0 === k ? (F ? n : o) : "") +
                  this._generateMonthYearHeader(
                    t,
                    Q,
                    tt,
                    G,
                    J,
                    k > 0 || _ > 0,
                    p,
                    g
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  S = u
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, "weekHeader") +
                      "</th>"
                    : "",
                  b = 0;
                7 > b;
                b++
              )
                S +=
                  "<th scope='col'" +
                  ((b + h + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  d[(M = (b + h) % 7)] +
                  "'>" +
                  f[M] +
                  "</span></th>";
              for (
                L += S + "</tr></thead><tbody>",
                  E = this._getDaysInMonth(tt, Q),
                  tt === t.selectedYear &&
                    Q === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, E)),
                  A = (this._getFirstDayOfMonth(tt, Q) - h + 7) % 7,
                  I = Math.ceil((A + E) / 7),
                  $ = X && this.maxRows > I ? this.maxRows : I,
                  this.maxRows = $,
                  B = this._daylightSavingAdjust(new Date(tt, Q, 1 - A)),
                  N = 0;
                $ > N;
                N++
              ) {
                for (
                  L += "<tr>",
                    O = u
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, "calculateWeek")(B) +
                        "</td>"
                      : "",
                    b = 0;
                  7 > b;
                  b++
                )
                  (j = v
                    ? v.apply(t.input ? t.input[0] : null, [B])
                    : [!0, ""]),
                    (P =
                      ((H = B.getMonth() !== Q) && !w) ||
                      !j[0] ||
                      (G && G > B) ||
                      (J && B > J)),
                    (O +=
                      "<td class='" +
                      ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                      (H ? " ui-datepicker-other-month" : "") +
                      ((B.getTime() === D.getTime() &&
                        Q === t.selectedMonth &&
                        t._keyEvent) ||
                      (y.getTime() === B.getTime() &&
                        y.getTime() === D.getTime())
                        ? " " + this._dayOverClass
                        : "") +
                      (P
                        ? " " + this._unselectableClass + " ui-state-disabled"
                        : "") +
                      (H && !m
                        ? ""
                        : " " +
                          j[1] +
                          (B.getTime() === Z.getTime()
                            ? " " + this._currentClass
                            : "") +
                          (B.getTime() === W.getTime()
                            ? " ui-datepicker-today"
                            : "")) +
                      "'" +
                      ((H && !m) || !j[2]
                        ? ""
                        : " title='" + j[2].replace(/'/g, "&#39;") + "'") +
                      (P
                        ? ""
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          B.getMonth() +
                          "' data-year='" +
                          B.getFullYear() +
                          "'") +
                      ">" +
                      (H && !m
                        ? "&#xa0;"
                        : P
                        ? "<span class='ui-state-default'>" +
                          B.getDate() +
                          "</span>"
                        : "<a class='ui-state-default" +
                          (B.getTime() === W.getTime()
                            ? " ui-state-highlight"
                            : "") +
                          (B.getTime() === Z.getTime()
                            ? " ui-state-active"
                            : "") +
                          (H ? " ui-priority-secondary" : "") +
                          "' href='#'>" +
                          B.getDate() +
                          "</a>") +
                      "</td>"),
                    B.setDate(B.getDate() + 1),
                    (B = this._daylightSavingAdjust(B));
                L += O + "</tr>";
              }
              ++Q > 11 && ((Q = 0), tt++),
                (C += L +=
                  "</tbody></table>" +
                  (X
                    ? "</div>" +
                      (V[0] > 0 && _ === V[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : "")
                    : ""));
            }
            x += C;
          }
          return (x += c), (t._keyEvent = !1), x;
        },
        _generateMonthYearHeader: function (t, e, i, n, r, o, s, a) {
          var l,
            c,
            h,
            u,
            d,
            f,
            p,
            g,
            v = this._get(t, "changeMonth"),
            m = this._get(t, "changeYear"),
            w = this._get(t, "showMonthAfterYear"),
            y = "<div class='ui-datepicker-title'>",
            x = "";
          if (o || !v)
            x += "<span class='ui-datepicker-month'>" + s[e] + "</span>";
          else {
            for (
              l = n && n.getFullYear() === i,
                c = r && r.getFullYear() === i,
                x +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                h = 0;
              12 > h;
              h++
            )
              (!l || h >= n.getMonth()) &&
                (!c || r.getMonth() >= h) &&
                (x +=
                  "<option value='" +
                  h +
                  "'" +
                  (h === e ? " selected='selected'" : "") +
                  ">" +
                  a[h] +
                  "</option>");
            x += "</select>";
          }
          if ((w || (y += x + (!o && v && m ? "" : "&#xa0;")), !t.yearshtml))
            if (((t.yearshtml = ""), o || !m))
              y += "<span class='ui-datepicker-year'>" + i + "</span>";
            else {
              for (
                u = this._get(t, "yearRange").split(":"),
                  d = new Date().getFullYear(),
                  p = (f = function (t) {
                    var e = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                      ? d + parseInt(t, 10)
                      : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                  })(u[0]),
                  g = Math.max(p, f(u[1] || "")),
                  p = n ? Math.max(p, n.getFullYear()) : p,
                  g = r ? Math.min(g, r.getFullYear()) : g,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                g >= p;
                p++
              )
                t.yearshtml +=
                  "<option value='" +
                  p +
                  "'" +
                  (p === i ? " selected='selected'" : "") +
                  ">" +
                  p +
                  "</option>";
              (t.yearshtml += "</select>"),
                (y += t.yearshtml),
                (t.yearshtml = null);
            }
          return (
            (y += this._get(t, "yearSuffix")),
            w && (y += (!o && v && m ? "" : "&#xa0;") + x),
            y + "</div>"
          );
        },
        _adjustInstDate: function (t, e, i) {
          var n = t.selectedYear + ("Y" === i ? e : 0),
            r = t.selectedMonth + ("M" === i ? e : 0),
            o =
              Math.min(t.selectedDay, this._getDaysInMonth(n, r)) +
              ("D" === i ? e : 0),
            s = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(n, r, o))
            );
          (t.selectedDay = s.getDate()),
            (t.drawMonth = t.selectedMonth = s.getMonth()),
            (t.drawYear = t.selectedYear = s.getFullYear()),
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            n = this._getMinMaxDate(t, "max"),
            r = i && i > e ? i : e;
          return n && r > n ? n : r;
        },
        _notifyChange: function (t) {
          var e = this._get(t, "onChangeMonthYear");
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t,
            ]);
        },
        _getNumberOfMonths: function (t) {
          var e = this._get(t, "numberOfMonths");
          return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function (t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
          return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, n) {
          var r = this._getNumberOfMonths(t),
            o = this._daylightSavingAdjust(
              new Date(i, n + (0 > e ? e : r[0] * r[1]), 1)
            );
          return (
            0 > e &&
              o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
          );
        },
        _isInRange: function (t, e) {
          var i,
            n,
            r = this._getMinMaxDate(t, "min"),
            o = this._getMinMaxDate(t, "max"),
            s = null,
            a = null,
            l = this._get(t, "yearRange");
          return (
            l &&
              ((i = l.split(":")),
              (n = new Date().getFullYear()),
              (s = parseInt(i[0], 10)),
              (a = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (s += n),
              i[1].match(/[+\-].*/) && (a += n)),
            (!r || e.getTime() >= r.getTime()) &&
              (!o || e.getTime() <= o.getTime()) &&
              (!s || e.getFullYear() >= s) &&
              (!a || a >= e.getFullYear())
          );
        },
        _getFormatConfig: function (t) {
          var e = this._get(t, "shortYearCutoff");
          return {
            shortYearCutoff: (e =
              "string" != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          };
        },
        _formatDate: function (t, e, i, n) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear));
          var r = e
            ? "object" == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(n, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
          return this.formatDate(
            this._get(t, "dateFormat"),
            r,
            this._getFormatConfig(t)
          );
        },
      }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).on("mousedown", t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            );
      }),
      (t.datepicker = new e()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.12.1"),
      t.datepicker;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], r = 0;
            r < i.length;
            r++
          ) {
            var o = i[r];
            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : this, function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t, e, r) {
      if (!(this instanceof n)) return new n(t, e, r);
      var o = t;
      return (
        "string" == typeof t && (o = document.querySelectorAll(t)),
        o
          ? ((this.elements = (function (t) {
              return Array.isArray(t)
                ? t
                : "object" == typeof t && "number" == typeof t.length
                ? l.call(t)
                : [t];
            })(o)),
            (this.options = i({}, this.options)),
            "function" == typeof e ? (r = e) : i(this.options, e),
            r && this.on("always", r),
            this.getImages(),
            s && (this.jqDeferred = new s.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (o || t))
      );
    }
    function r(t) {
      this.img = t;
    }
    function o(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var s = t.jQuery,
      a = t.console,
      l = Array.prototype.slice;
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.options = {}),
      (n.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (n.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var r = i[n];
            this.addImage(r);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var s = o[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    return (
      (n.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var r = n && n[2];
            r && this.addBackground(r, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (n.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e);
      }),
      (n.prototype.addBackground = function (t, e) {
        var i = new o(t, e);
        this.images.push(i);
      }),
      (n.prototype.check = function () {
        function t(t, i, n) {
          setTimeout(function () {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (n.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, t, e);
      }),
      (n.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (r.prototype = Object.create(e.prototype)),
      (r.prototype.check = function () {
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (o.prototype = Object.create(r.prototype)),
      (o.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (o.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (o.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (n.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((s = e).fn.imagesLoaded = function (t, e) {
            return new n(this, t, e).jqDeferred.promise(s(this));
          });
      }),
      n.makeJQueryPlugin(),
      n
    );
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).LocomotiveScroll = e());
  })(this, function () {
    "use strict";
    function t(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function e(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function i(t, i, n) {
      return i && e(t.prototype, i), n && e(t, n), t;
    }
    function n(t, e, i) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = i),
        t
      );
    }
    function r(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? r(Object(i), !0).forEach(function (e) {
              n(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : r(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    function s(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && l(t, e);
    }
    function a(t) {
      return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function l(t, e) {
      return (l =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function c(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function h(t, e) {
      return !e || ("object" != typeof e && "function" != typeof e) ? c(t) : e;
    }
    function u(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var i,
          n = a(t);
        if (e) {
          var r = a(this).constructor;
          i = Reflect.construct(n, arguments, r);
        } else i = n.apply(this, arguments);
        return h(this, i);
      };
    }
    function d(t, e, i) {
      return (d =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, i) {
              var n = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = a(t));

                );
                return t;
              })(t, e);
              if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(i) : r.value;
              }
            })(t, e, i || t);
    }
    function f(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var i = [],
            n = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(n = (s = a.next()).done) &&
              (i.push(s.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (r = !0), (o = t);
          } finally {
            try {
              n || null == a.return || a.return();
            } finally {
              if (r) throw o;
            }
          }
          return i;
        })(t, e) ||
        g(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function p(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return v(t);
        })(t) ||
        (function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        g(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(t, e) {
      if (t) {
        if ("string" == typeof t) return v(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === i && t.constructor && (i = t.constructor.name),
          "Map" === i || "Set" === i
            ? Array.from(t)
            : "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            ? v(t, e)
            : void 0
        );
      }
    }
    function v(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n;
    }
    var m = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: 0.1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
          smooth: !1,
          direction: "vertical",
          gestureDirection: "vertical",
          breakpoint: 1024,
        },
        smartphone: {
          smooth: !1,
          direction: "vertical",
          gestureDirection: "vertical",
        },
      },
      w = (function () {
        function e() {
          var i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t(this, e),
            Object.assign(this, m, i),
            (this.smartphone = m.smartphone),
            i.smartphone && Object.assign(this.smartphone, i.smartphone),
            (this.tablet = m.tablet),
            i.tablet && Object.assign(this.tablet, i.tablet),
            (this.namespace = "locomotive"),
            (this.html = document.documentElement),
            (this.windowHeight = window.innerHeight),
            (this.windowWidth = window.innerWidth),
            (this.windowMiddle = {
              x: this.windowWidth / 2,
              y: this.windowHeight / 2,
            }),
            (this.els = {}),
            (this.currentElements = {}),
            (this.listeners = {}),
            (this.hasScrollTicking = !1),
            (this.hasCallEventSet = !1),
            (this.checkScroll = this.checkScroll.bind(this)),
            (this.checkResize = this.checkResize.bind(this)),
            (this.checkEvent = this.checkEvent.bind(this)),
            (this.instance = {
              scroll: { x: 0, y: 0 },
              limit: { x: this.html.offsetHeight, y: this.html.offsetHeight },
              currentElements: this.currentElements,
            }),
            this.mobileView
              ? this.isTablet
                ? (this.context = "tablet")
                : (this.context = "smartphone")
              : (this.context = "desktop"),
            this.mobileView && (this.direction = this[this.context].direction),
            "horizontal" === this.direction
              ? (this.directionAxis = "x")
              : (this.directionAxis = "y"),
            this.getDirection && (this.instance.direction = null),
            this.getDirection && (this.instance.speed = 0),
            this.html.classList.add(this.initClass),
            window.addEventListener("resize", this.checkResize, !1);
        }
        return (
          i(e, [
            {
              key: "init",
              value: function () {
                this.initEvents();
              },
            },
            {
              key: "checkScroll",
              value: function () {
                this.dispatchScroll();
              },
            },
            {
              key: "checkResize",
              value: function () {
                var t = this;
                this.resizeTick ||
                  ((this.resizeTick = !0),
                  requestAnimationFrame(function () {
                    t.resize(), (t.resizeTick = !1);
                  }));
              },
            },
            { key: "resize", value: function () {} },
            {
              key: "checkContext",
              value: function () {
                if (this.reloadOnContextChange) {
                  (this.mobileView =
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ) ||
                    ("MacIntel" === navigator.platform &&
                      navigator.maxTouchPoints > 1) ||
                    this.windowWidth < this.tablet.breakpoint),
                    (this.isTablet =
                      this.mobileView &&
                      this.windowWidth >= this.tablet.breakpoint);
                  var t = this.context;
                  if (
                    (this.mobileView
                      ? this.isTablet
                        ? (this.context = "tablet")
                        : (this.context = "smartphone")
                      : (this.context = "desktop"),
                    t != this.context)
                  )
                    ("desktop" == t ? this.smooth : this[t].smooth) !=
                      ("desktop" == this.context
                        ? this.smooth
                        : this[this.context].smooth) &&
                      window.location.reload();
                }
              },
            },
            {
              key: "initEvents",
              value: function () {
                var t = this;
                (this.scrollToEls = this.el.querySelectorAll(
                  "[data-".concat(this.name, "-to]")
                )),
                  (this.setScrollTo = this.setScrollTo.bind(this)),
                  this.scrollToEls.forEach(function (e) {
                    e.addEventListener("click", t.setScrollTo, !1);
                  });
              },
            },
            {
              key: "setScrollTo",
              value: function (t) {
                t.preventDefault(),
                  this.scrollTo(
                    t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-href")
                    ) || t.currentTarget.getAttribute("href"),
                    {
                      offset: t.currentTarget.getAttribute(
                        "data-".concat(this.name, "-offset")
                      ),
                    }
                  );
              },
            },
            { key: "addElements", value: function () {} },
            {
              key: "detectElements",
              value: function (t) {
                var e = this,
                  i = this.instance.scroll.y,
                  n = i + this.windowHeight,
                  r = this.instance.scroll.x,
                  o = r + this.windowWidth;
                Object.entries(this.els).forEach(function (s) {
                  var a = f(s, 2),
                    l = a[0],
                    c = a[1];
                  if (
                    (!c ||
                      (c.inView && !t) ||
                      ("horizontal" === e.direction
                        ? o >= c.left && r < c.right && e.setInView(c, l)
                        : n >= c.top && i < c.bottom && e.setInView(c, l)),
                    c && c.inView)
                  )
                    if ("horizontal" === e.direction) {
                      var h = c.right - c.left;
                      (c.progress =
                        (e.instance.scroll.x - (c.left - e.windowWidth)) /
                        (h + e.windowWidth)),
                        (o < c.left || r > c.right) && e.setOutOfView(c, l);
                    } else {
                      var u = c.bottom - c.top;
                      (c.progress =
                        (e.instance.scroll.y - (c.top - e.windowHeight)) /
                        (u + e.windowHeight)),
                        (n < c.top || i > c.bottom) && e.setOutOfView(c, l);
                    }
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "setInView",
              value: function (t, e) {
                (this.els[e].inView = !0),
                  t.el.classList.add(t.class),
                  (this.currentElements[e] = t),
                  t.call &&
                    this.hasCallEventSet &&
                    (this.dispatchCall(t, "enter"),
                    t.repeat || (this.els[e].call = !1));
              },
            },
            {
              key: "setOutOfView",
              value: function (t, e) {
                var i = this;
                (this.els[e].inView = !1),
                  Object.keys(this.currentElements).forEach(function (t) {
                    t === e && delete i.currentElements[t];
                  }),
                  t.call &&
                    this.hasCallEventSet &&
                    this.dispatchCall(t, "exit"),
                  t.repeat && t.el.classList.remove(t.class);
              },
            },
            {
              key: "dispatchCall",
              value: function (t, e) {
                (this.callWay = e),
                  (this.callValue = t.call.split(",").map(function (t) {
                    return t.trim();
                  })),
                  (this.callObj = t),
                  1 == this.callValue.length &&
                    (this.callValue = this.callValue[0]);
                var i = new Event(this.namespace + "call");
                this.el.dispatchEvent(i);
              },
            },
            {
              key: "dispatchScroll",
              value: function () {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t);
              },
            },
            {
              key: "setEvents",
              value: function (t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var i = this.listeners[t];
                i.push(e),
                  1 === i.length &&
                    this.el.addEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ),
                  "call" === t &&
                    ((this.hasCallEventSet = !0), this.detectElements(!0));
              },
            },
            {
              key: "unsetEvents",
              value: function (t, e) {
                if (this.listeners[t]) {
                  var i = this.listeners[t],
                    n = i.indexOf(e);
                  n < 0 ||
                    (i.splice(n, 1),
                    0 === i.index &&
                      this.el.removeEventListener(
                        this.namespace + t,
                        this.checkEvent,
                        !1
                      ));
                }
              },
            },
            {
              key: "checkEvent",
              value: function (t) {
                var e = this,
                  i = t.type.replace(this.namespace, ""),
                  n = this.listeners[i];
                n &&
                  0 !== n.length &&
                  n.forEach(function (t) {
                    switch (i) {
                      case "scroll":
                        return t(e.instance);
                      case "call":
                        return t(e.callValue, e.callWay, e.callObj);
                      default:
                        return t();
                    }
                  });
              },
            },
            { key: "startScroll", value: function () {} },
            { key: "stopScroll", value: function () {} },
            {
              key: "setScroll",
              value: function (t, e) {
                this.instance.scroll = { x: 0, y: 0 };
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                window.removeEventListener("resize", this.checkResize, !1),
                  Object.keys(this.listeners).forEach(function (e) {
                    t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                  }),
                  (this.listeners = {}),
                  this.scrollToEls.forEach(function (e) {
                    e.removeEventListener("click", t.setScrollTo, !1);
                  }),
                  this.html.classList.remove(this.initClass);
              },
            },
          ]),
          e
        );
      })(),
      y =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {};
    function x(t, e) {
      return t((e = { exports: {} }), e.exports), e.exports;
    }
    var b = x(function (t, e) {
        t.exports = {
          polyfill: function () {
            var t = window,
              e = document;
            if (
              !("scrollBehavior" in e.documentElement.style) ||
              !0 === t.__forceSmoothScrollPolyfill__
            ) {
              var i,
                n = t.HTMLElement || t.Element,
                r = {
                  scroll: t.scroll || t.scrollTo,
                  scrollBy: t.scrollBy,
                  elementScroll: n.prototype.scroll || a,
                  scrollIntoView: n.prototype.scrollIntoView,
                },
                o =
                  t.performance && t.performance.now
                    ? t.performance.now.bind(t.performance)
                    : Date.now,
                s =
                  ((i = t.navigator.userAgent),
                  new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i)
                    ? 1
                    : 0);
              (t.scroll = t.scrollTo =
                function () {
                  void 0 !== arguments[0] &&
                    (!0 !== l(arguments[0])
                      ? p.call(
                          t,
                          e.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : t.scrollX || t.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : t.scrollY || t.pageYOffset
                        )
                      : r.scroll.call(
                          t,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : t.scrollX || t.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : t.scrollY || t.pageYOffset
                        ));
                }),
                (t.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (l(arguments[0])
                      ? r.scrollBy.call(
                          t,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : 0,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : 0
                        )
                      : p.call(
                          t,
                          e.body,
                          ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                          ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                        ));
                }),
                (n.prototype.scroll = n.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0])
                      if (!0 !== l(arguments[0])) {
                        var t = arguments[0].left,
                          e = arguments[0].top;
                        p.call(
                          this,
                          this,
                          void 0 === t ? this.scrollLeft : ~~t,
                          void 0 === e ? this.scrollTop : ~~e
                        );
                      } else {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError("Value could not be converted");
                        r.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                  }),
                (n.prototype.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (!0 !== l(arguments[0])
                      ? this.scroll({
                          left: ~~arguments[0].left + this.scrollLeft,
                          top: ~~arguments[0].top + this.scrollTop,
                          behavior: arguments[0].behavior,
                        })
                      : r.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left + this.scrollLeft
                            : ~~arguments[0] + this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top + this.scrollTop
                            : ~~arguments[1] + this.scrollTop
                        ));
                }),
                (n.prototype.scrollIntoView = function () {
                  if (!0 !== l(arguments[0])) {
                    var i = d(this),
                      n = i.getBoundingClientRect(),
                      o = this.getBoundingClientRect();
                    i !== e.body
                      ? (p.call(
                          this,
                          i,
                          i.scrollLeft + o.left - n.left,
                          i.scrollTop + o.top - n.top
                        ),
                        "fixed" !== t.getComputedStyle(i).position &&
                          t.scrollBy({
                            left: n.left,
                            top: n.top,
                            behavior: "smooth",
                          }))
                      : t.scrollBy({
                          left: o.left,
                          top: o.top,
                          behavior: "smooth",
                        });
                  } else
                    r.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                });
            }
            function a(t, e) {
              (this.scrollLeft = t), (this.scrollTop = e);
            }
            function l(t) {
              if (
                null === t ||
                "object" != typeof t ||
                void 0 === t.behavior ||
                "auto" === t.behavior ||
                "instant" === t.behavior
              )
                return !0;
              if ("object" == typeof t && "smooth" === t.behavior) return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  t.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function c(t, e) {
              return "Y" === e
                ? t.clientHeight + s < t.scrollHeight
                : "X" === e
                ? t.clientWidth + s < t.scrollWidth
                : void 0;
            }
            function h(e, i) {
              var n = t.getComputedStyle(e, null)["overflow" + i];
              return "auto" === n || "scroll" === n;
            }
            function u(t) {
              var e = c(t, "Y") && h(t, "Y"),
                i = c(t, "X") && h(t, "X");
              return e || i;
            }
            function d(t) {
              for (; t !== e.body && !1 === u(t); ) t = t.parentNode || t.host;
              return t;
            }
            function f(e) {
              var i,
                n,
                r,
                s,
                a = (o() - e.startTime) / 468;
              (s = a = a > 1 ? 1 : a),
                (i = 0.5 * (1 - Math.cos(Math.PI * s))),
                (n = e.startX + (e.x - e.startX) * i),
                (r = e.startY + (e.y - e.startY) * i),
                e.method.call(e.scrollable, n, r),
                (n === e.x && r === e.y) ||
                  t.requestAnimationFrame(f.bind(t, e));
            }
            function p(i, n, s) {
              var l,
                c,
                h,
                u,
                d = o();
              i === e.body
                ? ((l = t),
                  (c = t.scrollX || t.pageXOffset),
                  (h = t.scrollY || t.pageYOffset),
                  (u = r.scroll))
                : ((l = i), (c = i.scrollLeft), (h = i.scrollTop), (u = a)),
                f({
                  scrollable: l,
                  method: u,
                  startTime: d,
                  startX: c,
                  startY: h,
                  x: n,
                  y: s,
                });
            }
          },
        };
      }),
      k =
        (b.polyfill,
        (function (e) {
          s(r, e);
          var n = u(r);
          function r() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              t(this, r),
              (e = n.call(this, i)).resetNativeScroll &&
                (history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0)),
              window.addEventListener("scroll", e.checkScroll, !1),
              void 0 === window.smoothscrollPolyfill &&
                ((window.smoothscrollPolyfill = b),
                window.smoothscrollPolyfill.polyfill()),
              e
            );
          }
          return (
            i(r, [
              {
                key: "init",
                value: function () {
                  (this.instance.scroll.y = window.pageYOffset),
                    this.addElements(),
                    this.detectElements(),
                    d(a(r.prototype), "init", this).call(this);
                },
              },
              {
                key: "checkScroll",
                value: function () {
                  var t = this;
                  d(a(r.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed &&
                      (this.addSpeed(), (this.speedTs = Date.now())),
                    (this.instance.scroll.y = window.pageYOffset),
                    Object.entries(this.els).length &&
                      (this.hasScrollTicking ||
                        (requestAnimationFrame(function () {
                          t.detectElements();
                        }),
                        (this.hasScrollTicking = !0)));
                },
              },
              {
                key: "addDirection",
                value: function () {
                  window.pageYOffset > this.instance.scroll.y
                    ? "down" !== this.instance.direction &&
                      (this.instance.direction = "down")
                    : window.pageYOffset < this.instance.scroll.y &&
                      "up" !== this.instance.direction &&
                      (this.instance.direction = "up");
                },
              },
              {
                key: "addSpeed",
                value: function () {
                  window.pageYOffset != this.instance.scroll.y
                    ? (this.instance.speed =
                        (window.pageYOffset - this.instance.scroll.y) /
                        Math.max(1, Date.now() - this.speedTs))
                    : (this.instance.speed = 0);
                },
              },
              {
                key: "resize",
                value: function () {
                  Object.entries(this.els).length &&
                    ((this.windowHeight = window.innerHeight),
                    this.updateElements());
                },
              },
              {
                key: "addElements",
                value: function () {
                  var t = this;
                  (this.els = {}),
                    this.el
                      .querySelectorAll("[data-" + this.name + "]")
                      .forEach(function (e, i) {
                        e.getBoundingClientRect();
                        var n,
                          r,
                          o,
                          s = e.dataset[t.name + "Class"] || t.class,
                          a =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : i,
                          l =
                            "string" == typeof e.dataset[t.name + "Offset"]
                              ? e.dataset[t.name + "Offset"].split(",")
                              : t.offset,
                          c = e.dataset[t.name + "Repeat"],
                          h = e.dataset[t.name + "Call"],
                          u = e.dataset[t.name + "Target"],
                          d = (o =
                            void 0 !== u
                              ? document.querySelector("".concat(u))
                              : e).getBoundingClientRect();
                        (n = d.top + t.instance.scroll.y),
                          (r = d.left + t.instance.scroll.x);
                        var f = n + o.offsetHeight,
                          p = r + o.offsetWidth;
                        "#header" === u && console.log(n, f),
                          (c = "false" != c && (null != c || t.repeat));
                        var g = t.getRelativeOffset(l),
                          v = {
                            el: e,
                            targetEl: o,
                            id: a,
                            class: s,
                            top: (n += g[0]),
                            bottom: (f -= g[1]),
                            left: r,
                            right: p,
                            offset: l,
                            progress: 0,
                            repeat: c,
                            inView: !1,
                            call: h,
                          };
                        (t.els[a] = v),
                          e.classList.contains(s) && t.setInView(t.els[a], a);
                      });
                },
              },
              {
                key: "updateElements",
                value: function () {
                  var t = this;
                  Object.entries(this.els).forEach(function (e) {
                    var i = f(e, 2),
                      n = i[0],
                      r = i[1],
                      o =
                        r.targetEl.getBoundingClientRect().top +
                        t.instance.scroll.y,
                      s = o + r.targetEl.offsetHeight,
                      a = t.getRelativeOffset(r.offset);
                    (t.els[n].top = o + a[0]), (t.els[n].bottom = s - a[1]);
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: "getRelativeOffset",
                value: function (t) {
                  var e = [0, 0];
                  if (t)
                    for (var i = 0; i < t.length; i++)
                      "string" == typeof t[i]
                        ? t[i].includes("%")
                          ? (e[i] = parseInt(
                              (t[i].replace("%", "") * this.windowHeight) / 100
                            ))
                          : (e[i] = parseInt(t[i]))
                        : (e[i] = t[i]);
                  return e;
                },
              },
              {
                key: "scrollTo",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = parseInt(e.offset) || 0,
                    n = !!e.callback && e.callback;
                  if ("string" == typeof t) {
                    if ("top" === t) t = this.html;
                    else if ("bottom" === t)
                      t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t))) return;
                  } else if ("number" == typeof t) t = parseInt(t);
                  else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                  if (
                    ((i =
                      "number" != typeof t
                        ? t.getBoundingClientRect().top +
                          i +
                          this.instance.scroll.y
                        : t + i),
                    n)
                  ) {
                    i = i.toFixed();
                    var r = function t() {
                      window.pageYOffset.toFixed() === i &&
                        (window.removeEventListener("scroll", t), n());
                    };
                    window.addEventListener("scroll", r);
                  }
                  window.scrollTo({ top: i, behavior: "smooth" });
                },
              },
              {
                key: "update",
                value: function () {
                  this.addElements(), this.detectElements();
                },
              },
              {
                key: "destroy",
                value: function () {
                  d(a(r.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1);
                },
              },
            ]),
            r
          );
        })(w)),
      C = Object.getOwnPropertySymbols,
      _ = Object.prototype.hasOwnProperty,
      D = Object.prototype.propertyIsEnumerable;
    function T(t) {
      if (null == t)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(t);
    }
    var L = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, i = 0; i < 10; i++)
          e["_" + String.fromCharCode(i)] = i;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (var i, n, r = T(t), o = 1; o < arguments.length; o++) {
            for (var s in (i = Object(arguments[o])))
              _.call(i, s) && (r[s] = i[s]);
            if (C) {
              n = C(i);
              for (var a = 0; a < n.length; a++)
                D.call(i, n[a]) && (r[n[a]] = i[n[a]]);
            }
          }
          return r;
        };
    function S() {}
    S.prototype = {
      on: function (t, e, i) {
        var n = this.e || (this.e = {});
        return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
      },
      once: function (t, e, i) {
        var n = this;
        function r() {
          n.off(t, r), e.apply(i, arguments);
        }
        return (r._ = e), this.on(t, r, i);
      },
      emit: function (t) {
        for (
          var e = [].slice.call(arguments, 1),
            i = ((this.e || (this.e = {}))[t] || []).slice(),
            n = 0,
            r = i.length;
          n < r;
          n++
        )
          i[n].fn.apply(i[n].ctx, e);
        return this;
      },
      off: function (t, e) {
        var i = this.e || (this.e = {}),
          n = i[t],
          r = [];
        if (n && e)
          for (var o = 0, s = n.length; o < s; o++)
            n[o].fn !== e && n[o].fn._ !== e && r.push(n[o]);
        return r.length ? (i[t] = r) : delete i[t], this;
      },
    };
    var M = S,
      E = x(function (t, e) {
        (function () {
          (null !== e ? e : this).Lethargy = (function () {
            function t(t, e, i, n) {
              (this.stability = null != t ? Math.abs(t) : 8),
                (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                (this.delay = null != n ? n : 150),
                (this.lastUpDeltas = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this)),
                (this.lastDownDeltas = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this)),
                (this.deltasTimestamp = function () {
                  var t, e, i;
                  for (
                    i = [], t = 1, e = 2 * this.stability;
                    1 <= e ? t <= e : t >= e;
                    1 <= e ? t++ : t--
                  )
                    i.push(null);
                  return i;
                }.call(this));
            }
            return (
              (t.prototype.check = function (t) {
                var e;
                return (
                  null != (t = t.originalEvent || t).wheelDelta
                    ? (e = t.wheelDelta)
                    : null != t.deltaY
                    ? (e = -40 * t.deltaY)
                    : (null == t.detail && 0 !== t.detail) ||
                      (e = -40 * t.detail),
                  this.deltasTimestamp.push(Date.now()),
                  this.deltasTimestamp.shift(),
                  e > 0
                    ? (this.lastUpDeltas.push(e),
                      this.lastUpDeltas.shift(),
                      this.isInertia(1))
                    : (this.lastDownDeltas.push(e),
                      this.lastDownDeltas.shift(),
                      this.isInertia(-1))
                );
              }),
              (t.prototype.isInertia = function (t) {
                var e, i, n, r, o, s, a;
                return null ===
                  (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                  ? t
                  : !(
                      this.deltasTimestamp[2 * this.stability - 2] +
                        this.delay >
                        Date.now() && e[0] === e[2 * this.stability - 1]
                    ) &&
                      ((n = e.slice(0, this.stability)),
                      (i = e.slice(this.stability, 2 * this.stability)),
                      (a = n.reduce(function (t, e) {
                        return t + e;
                      })),
                      (o = i.reduce(function (t, e) {
                        return t + e;
                      })),
                      (s = a / n.length),
                      (r = o / i.length),
                      Math.abs(s) < Math.abs(r * this.tolerance) &&
                        this.sensitivity < Math.abs(r) &&
                        t);
              }),
              (t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas;
              }),
              (t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas;
              }),
              t
            );
          })();
        }.call(y));
      }),
      A = {
        hasWheelEvent: "onwheel" in document,
        hasMouseWheelEvent: "onmousewheel" in document,
        hasTouch:
          "ontouchstart" in window ||
          window.TouchEvent ||
          (window.DocumentTouch && document instanceof DocumentTouch),
        hasTouchWin:
          navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown" in document,
        isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
      },
      I = Object.prototype.toString,
      $ = Object.prototype.hasOwnProperty;
    function B(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var N = E.Lethargy,
      O = "virtualscroll",
      j = R,
      H = 37,
      P = 38,
      z = 39,
      W = 40,
      F = 32;
    function R(t) {
      !(function (t) {
        if (!t) return console.warn("bindAll requires at least one argument.");
        var e = Array.prototype.slice.call(arguments, 1);
        if (0 === e.length)
          for (var i in t)
            $.call(t, i) &&
              "function" == typeof t[i] &&
              "[object Function]" == I.call(t[i]) &&
              e.push(i);
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          t[r] = B(t[r], t);
        }
      })(
        this,
        "_onWheel",
        "_onMouseWheel",
        "_onTouchStart",
        "_onTouchMove",
        "_onKeyDown"
      ),
        (this.el = window),
        t && t.el && ((this.el = t.el), delete t.el),
        (this.options = L(
          {
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0,
          },
          t
        )),
        this.options.limitInertia && (this._lethargy = new N()),
        (this._emitter = new M()),
        (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
        (this.touchStartX = null),
        (this.touchStartY = null),
        (this.bodyTouchAction = null),
        void 0 !== this.options.passive &&
          (this.listenerOptions = { passive: this.options.passive });
    }
    function q(t, e, i) {
      return (1 - i) * t + i * e;
    }
    function Y(t) {
      var e = {};
      if (window.getComputedStyle) {
        var i = getComputedStyle(t),
          n = i.transform || i.webkitTransform || i.mozTransform,
          r = n.match(/^matrix3d\((.+)\)$/);
        return (
          r
            ? ((e.x = r ? parseFloat(r[1].split(", ")[12]) : 0),
              (e.y = r ? parseFloat(r[1].split(", ")[13]) : 0))
            : ((r = n.match(/^matrix\((.+)\)$/)),
              (e.x = r ? parseFloat(r[1].split(", ")[4]) : 0),
              (e.y = r ? parseFloat(r[1].split(", ")[5]) : 0)),
          e
        );
      }
    }
    function V(t) {
      for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
      return e;
    }
    (R.prototype._notify = function (t) {
      var e = this._event;
      (e.x += e.deltaX),
        (e.y += e.deltaY),
        this._emitter.emit(O, {
          x: e.x,
          y: e.y,
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          originalEvent: t,
        });
    }),
      (R.prototype._onWheel = function (t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
          var i = this._event;
          (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
            (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
            A.isFirefox &&
              1 == t.deltaMode &&
              ((i.deltaX *= e.firefoxMultiplier),
              (i.deltaY *= e.firefoxMultiplier)),
            (i.deltaX *= e.mouseMultiplier),
            (i.deltaY *= e.mouseMultiplier),
            this._notify(t);
        }
      }),
      (R.prototype._onMouseWheel = function (t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
          var e = this._event;
          (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
            (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
            this._notify(t);
        }
      }),
      (R.prototype._onTouchStart = function (t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
      }),
      (R.prototype._onTouchMove = function (t) {
        var e = this.options;
        e.preventTouch &&
          !t.target.classList.contains(e.unpreventTouchClass) &&
          t.preventDefault();
        var i = this._event,
          n = t.targetTouches ? t.targetTouches[0] : t;
        (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier),
          (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier),
          (this.touchStartX = n.pageX),
          (this.touchStartY = n.pageY),
          this._notify(t);
      }),
      (R.prototype._onKeyDown = function (t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
          case H:
          case P:
            e.deltaY = this.options.keyStep;
            break;
          case z:
          case W:
            e.deltaY = -this.options.keyStep;
            break;
          case t.shiftKey:
            e.deltaY = i;
            break;
          case F:
            e.deltaY = -i;
            break;
          default:
            return;
        }
        this._notify(t);
      }),
      (R.prototype._bind = function () {
        A.hasWheelEvent &&
          this.el.addEventListener(
            "wheel",
            this._onWheel,
            this.listenerOptions
          ),
          A.hasMouseWheelEvent &&
            this.el.addEventListener(
              "mousewheel",
              this._onMouseWheel,
              this.listenerOptions
            ),
          A.hasTouch &&
            this.options.useTouch &&
            (this.el.addEventListener(
              "touchstart",
              this._onTouchStart,
              this.listenerOptions
            ),
            this.el.addEventListener(
              "touchmove",
              this._onTouchMove,
              this.listenerOptions
            )),
          A.hasPointer &&
            A.hasTouchWin &&
            ((this.bodyTouchAction = document.body.style.msTouchAction),
            (document.body.style.msTouchAction = "none"),
            this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
            this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
          A.hasKeyDown &&
            this.options.useKeyboard &&
            document.addEventListener("keydown", this._onKeyDown);
      }),
      (R.prototype._unbind = function () {
        A.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
          A.hasMouseWheelEvent &&
            this.el.removeEventListener("mousewheel", this._onMouseWheel),
          A.hasTouch &&
            (this.el.removeEventListener("touchstart", this._onTouchStart),
            this.el.removeEventListener("touchmove", this._onTouchMove)),
          A.hasPointer &&
            A.hasTouchWin &&
            ((document.body.style.msTouchAction = this.bodyTouchAction),
            this.el.removeEventListener(
              "MSPointerDown",
              this._onTouchStart,
              !0
            ),
            this.el.removeEventListener(
              "MSPointerMove",
              this._onTouchMove,
              !0
            )),
          A.hasKeyDown &&
            this.options.useKeyboard &&
            document.removeEventListener("keydown", this._onKeyDown);
      }),
      (R.prototype.on = function (t, e) {
        this._emitter.on(O, t, e);
        var i = this._emitter.e;
        i && i[O] && 1 === i[O].length && this._bind();
      }),
      (R.prototype.off = function (t, e) {
        this._emitter.off(O, t, e);
        var i = this._emitter.e;
        (!i[O] || i[O].length <= 0) && this._unbind();
      }),
      (R.prototype.reset = function () {
        var t = this._event;
        (t.x = 0), (t.y = 0);
      }),
      (R.prototype.destroy = function () {
        this._emitter.off(), this._unbind();
      });
    var K = 0.1,
      U = "function" == typeof Float32Array;
    function X(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function Z(t, e) {
      return 3 * e - 6 * t;
    }
    function G(t) {
      return 3 * t;
    }
    function J(t, e, i) {
      return ((X(e, i) * t + Z(e, i)) * t + G(e)) * t;
    }
    function Q(t, e, i) {
      return 3 * X(e, i) * t * t + 2 * Z(e, i) * t + G(e);
    }
    function tt(t) {
      return t;
    }
    var et = function (t, e, i, n) {
        if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && i === n) return tt;
        for (
          var r = U ? new Float32Array(11) : new Array(11), o = 0;
          o < 11;
          ++o
        )
          r[o] = J(o * K, t, i);
        function s(e) {
          for (var n = 0, o = 1; 10 !== o && r[o] <= e; ++o) n += K;
          --o;
          var s = n + ((e - r[o]) / (r[o + 1] - r[o])) * K,
            a = Q(s, t, i);
          return a >= 0.001
            ? (function (t, e, i, n) {
                for (var r = 0; r < 4; ++r) {
                  var o = Q(e, i, n);
                  if (0 === o) return e;
                  e -= (J(e, i, n) - t) / o;
                }
                return e;
              })(e, s, t, i)
            : 0 === a
            ? s
            : (function (t, e, i, n, r) {
                var o,
                  s,
                  a = 0;
                do {
                  (o = J((s = e + (i - e) / 2), n, r) - t) > 0
                    ? (i = s)
                    : (e = s);
                } while (Math.abs(o) > 1e-7 && ++a < 10);
                return s;
              })(e, n, n + K, t, i);
        }
        return function (t) {
          return 0 === t ? 0 : 1 === t ? 1 : J(s(t), e, n);
        };
      },
      it = 38,
      nt = 40,
      rt = 32,
      ot = 9,
      st = 33,
      at = 34,
      lt = 36,
      ct = 35,
      ht = (function (e) {
        s(r, e);
        var n = u(r);
        function r() {
          var e,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            t(this, r),
            history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0),
            (e = n.call(this, i)).inertia && (e.lerp = 0.1 * e.inertia),
            (e.isScrolling = !1),
            (e.isDraggingScrollbar = !1),
            (e.isTicking = !1),
            (e.hasScrollTicking = !1),
            (e.parallaxElements = {}),
            (e.stop = !1),
            (e.scrollbarContainer = i.scrollbarContainer),
            (e.checkKey = e.checkKey.bind(c(e))),
            window.addEventListener("keydown", e.checkKey, !1),
            e
          );
        }
        return (
          i(r, [
            {
              key: "init",
              value: function () {
                var t = this;
                this.html.classList.add(this.smoothClass),
                  this.html.setAttribute(
                    "data-".concat(this.name, "-direction"),
                    this.direction
                  ),
                  (this.instance = o({ delta: { x: 0, y: 0 } }, this.instance)),
                  (this.vs = new j({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier:
                      navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0,
                  })),
                  this.vs.on(function (e) {
                    t.stop ||
                      t.isDraggingScrollbar ||
                      requestAnimationFrame(function () {
                        t.updateDelta(e), t.isScrolling || t.startScrolling();
                      });
                  }),
                  this.setScrollLimit(),
                  this.initScrollBar(),
                  this.addSections(),
                  this.addElements(),
                  this.checkScroll(!0),
                  this.transformElements(!0, !0),
                  d(a(r.prototype), "init", this).call(this);
              },
            },
            {
              key: "setScrollLimit",
              value: function () {
                if (
                  ((this.instance.limit.y =
                    this.el.offsetHeight - this.windowHeight),
                  "horizontal" === this.direction)
                ) {
                  for (
                    var t = 0, e = this.el.children, i = 0;
                    i < e.length;
                    i++
                  )
                    t += e[i].offsetWidth;
                  this.instance.limit.x = t - this.windowWidth;
                }
              },
            },
            {
              key: "startScrolling",
              value: function () {
                (this.startScrollTs = Date.now()),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              },
            },
            {
              key: "stopScrolling",
              value: function () {
                cancelAnimationFrame(this.checkScrollRaf),
                  this.scrollToRaf &&
                    (cancelAnimationFrame(this.scrollToRaf),
                    (this.scrollToRaf = null)),
                  (this.isScrolling = !1),
                  (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                  this.html.classList.remove(this.scrollingClass);
              },
            },
            {
              key: "checkKey",
              value: function (t) {
                var e = this;
                if (this.stop)
                  t.keyCode == ot &&
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0);
                    });
                else {
                  switch (t.keyCode) {
                    case ot:
                      requestAnimationFrame(function () {
                        (e.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (e.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0),
                          e.scrollTo(document.activeElement, {
                            offset: -window.innerHeight / 2,
                          });
                      });
                      break;
                    case it:
                      this.instance.delta[this.directionAxis] -= 240;
                      break;
                    case nt:
                      this.instance.delta[this.directionAxis] += 240;
                      break;
                    case st:
                      this.instance.delta[this.directionAxis] -=
                        window.innerHeight;
                      break;
                    case at:
                      this.instance.delta[this.directionAxis] +=
                        window.innerHeight;
                      break;
                    case lt:
                      this.instance.delta[this.directionAxis] -=
                        this.instance.limit[this.directionAxis];
                      break;
                    case ct:
                      this.instance.delta[this.directionAxis] +=
                        this.instance.limit[this.directionAxis];
                      break;
                    case rt:
                      document.activeElement instanceof HTMLInputElement ||
                        document.activeElement instanceof HTMLTextAreaElement ||
                        (t.shiftKey
                          ? (this.instance.delta[this.directionAxis] -=
                              window.innerHeight)
                          : (this.instance.delta[this.directionAxis] +=
                              window.innerHeight));
                      break;
                    default:
                      return;
                  }
                  this.instance.delta[this.directionAxis] < 0 &&
                    (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]),
                    this.stopScrolling(),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                }
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this,
                  e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                if (e || this.isScrolling || this.isDraggingScrollbar) {
                  this.hasScrollTicking ||
                    ((this.checkScrollRaf = requestAnimationFrame(function () {
                      return t.checkScroll();
                    })),
                    (this.hasScrollTicking = !0)),
                    this.updateScroll();
                  var i = Math.abs(
                      this.instance.delta[this.directionAxis] -
                        this.instance.scroll[this.directionAxis]
                    ),
                    n = Date.now() - this.startScrollTs;
                  if (
                    (!this.animatingScroll &&
                      n > 100 &&
                      ((i < 0.5 &&
                        0 != this.instance.delta[this.directionAxis]) ||
                        (i < 0.5 &&
                          0 == this.instance.delta[this.directionAxis])) &&
                      this.stopScrolling(),
                    Object.entries(this.sections).forEach(function (e) {
                      var i = f(e, 2),
                        n = (i[0], i[1]);
                      n.persistent ||
                      (t.instance.scroll[t.directionAxis] >
                        n.offset[t.directionAxis] &&
                        t.instance.scroll[t.directionAxis] <
                          n.limit[t.directionAxis])
                        ? ("horizontal" === t.direction
                            ? t.transform(
                                n.el,
                                -t.instance.scroll[t.directionAxis],
                                0
                              )
                            : t.transform(
                                n.el,
                                0,
                                -t.instance.scroll[t.directionAxis]
                              ),
                          n.inView ||
                            ((n.inView = !0),
                            (n.el.style.opacity = 1),
                            (n.el.style.pointerEvents = "all"),
                            n.el.setAttribute(
                              "data-".concat(t.name, "-section-inview"),
                              ""
                            )))
                        : (n.inView &&
                            ((n.inView = !1),
                            (n.el.style.opacity = 0),
                            (n.el.style.pointerEvents = "none"),
                            n.el.removeAttribute(
                              "data-".concat(t.name, "-section-inview")
                            )),
                          t.transform(n.el, 0, 0));
                    }),
                    this.getDirection && this.addDirection(),
                    this.getSpeed &&
                      (this.addSpeed(), (this.speedTs = Date.now())),
                    this.detectElements(),
                    this.transformElements(),
                    this.hasScrollbar)
                  ) {
                    var o =
                      (this.instance.scroll[this.directionAxis] /
                        this.instance.limit[this.directionAxis]) *
                      this.scrollBarLimit[this.directionAxis];
                    "horizontal" === this.direction
                      ? this.transform(this.scrollbarThumb, o, 0)
                      : this.transform(this.scrollbarThumb, 0, o);
                  }
                  d(a(r.prototype), "checkScroll", this).call(this),
                    (this.hasScrollTicking = !1);
                }
              },
            },
            {
              key: "resize",
              value: function () {
                (this.windowHeight = window.innerHeight),
                  (this.windowWidth = window.innerWidth),
                  this.checkContext(),
                  (this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2,
                  }),
                  this.update();
              },
            },
            {
              key: "updateDelta",
              value: function (t) {
                var e,
                  i =
                    this[this.context] && this[this.context].gestureDirection
                      ? this[this.context].gestureDirection
                      : this.gestureDirection;
                (e =
                  "both" === i
                    ? t.deltaX + t.deltaY
                    : "vertical" === i
                    ? t.deltaY
                    : "horizontal" === i
                    ? t.deltaX
                    : t.deltaY),
                  (this.instance.delta[this.directionAxis] -=
                    e * this.multiplier),
                  this.instance.delta[this.directionAxis] < 0 &&
                    (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]);
              },
            },
            {
              key: "updateScroll",
              value: function (t) {
                this.isScrolling || this.isDraggingScrollbar
                  ? (this.instance.scroll[this.directionAxis] = q(
                      this.instance.scroll[this.directionAxis],
                      this.instance.delta[this.directionAxis],
                      this.lerp
                    ))
                  : this.instance.scroll[this.directionAxis] >
                    this.instance.limit[this.directionAxis]
                  ? this.setScroll(
                      this.instance.scroll[this.directionAxis],
                      this.instance.limit[this.directionAxis]
                    )
                  : this.instance.scroll.y < 0
                  ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                  : this.setScroll(
                      this.instance.scroll[this.directionAxis],
                      this.instance.delta[this.directionAxis]
                    );
              },
            },
            {
              key: "addDirection",
              value: function () {
                this.instance.delta.y > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : this.instance.delta.y < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up"),
                  this.instance.delta.x > this.instance.scroll.x
                    ? "right" !== this.instance.direction &&
                      (this.instance.direction = "right")
                    : this.instance.delta.x < this.instance.scroll.x &&
                      "left" !== this.instance.direction &&
                      (this.instance.direction = "left");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                this.instance.delta[this.directionAxis] !=
                this.instance.scroll[this.directionAxis]
                  ? (this.instance.speed =
                      (this.instance.delta[this.directionAxis] -
                        this.instance.scroll[this.directionAxis]) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "initScrollBar",
              value: function () {
                if (
                  ((this.scrollbar = document.createElement("span")),
                  (this.scrollbarThumb = document.createElement("span")),
                  this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                  this.scrollbarThumb.classList.add(
                    "".concat(this.scrollbarClass, "_thumb")
                  ),
                  this.scrollbar.append(this.scrollbarThumb),
                  this.scrollbarContainer
                    ? this.scrollbarContainer.append(this.scrollbar)
                    : document.body.append(this.scrollbar),
                  (this.getScrollBar = this.getScrollBar.bind(this)),
                  (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                  (this.moveScrollBar = this.moveScrollBar.bind(this)),
                  this.scrollbarThumb.addEventListener(
                    "mousedown",
                    this.getScrollBar
                  ),
                  window.addEventListener("mouseup", this.releaseScrollBar),
                  window.addEventListener("mousemove", this.moveScrollBar),
                  (this.hasScrollbar = !1),
                  "horizontal" == this.direction)
                ) {
                  if (
                    this.instance.limit.x + this.windowWidth <=
                    this.windowWidth
                  )
                    return;
                } else if (
                  this.instance.limit.y + this.windowHeight <=
                  this.windowHeight
                )
                  return;
                (this.hasScrollbar = !0),
                  (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                  (this.scrollbarHeight = this.scrollbarBCR.height),
                  (this.scrollbarWidth = this.scrollbarBCR.width),
                  "horizontal" === this.direction
                    ? (this.scrollbarThumb.style.width = "".concat(
                        (this.scrollbarWidth * this.scrollbarWidth) /
                          (this.instance.limit.x + this.scrollbarWidth),
                        "px"
                      ))
                    : (this.scrollbarThumb.style.height = "".concat(
                        (this.scrollbarHeight * this.scrollbarHeight) /
                          (this.instance.limit.y + this.scrollbarHeight),
                        "px"
                      )),
                  (this.scrollbarThumbBCR =
                    this.scrollbarThumb.getBoundingClientRect()),
                  (this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                  });
              },
            },
            {
              key: "reinitScrollBar",
              value: function () {
                if (
                  ((this.hasScrollbar = !1), "horizontal" == this.direction)
                ) {
                  if (
                    this.instance.limit.x + this.windowWidth <=
                    this.windowWidth
                  )
                    return;
                } else if (
                  this.instance.limit.y + this.windowHeight <=
                  this.windowHeight
                )
                  return;
                (this.hasScrollbar = !0),
                  (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                  (this.scrollbarHeight = this.scrollbarBCR.height),
                  (this.scrollbarWidth = this.scrollbarBCR.width),
                  "horizontal" === this.direction
                    ? (this.scrollbarThumb.style.width = "".concat(
                        (this.scrollbarWidth * this.scrollbarWidth) /
                          (this.instance.limit.x + this.scrollbarWidth),
                        "px"
                      ))
                    : (this.scrollbarThumb.style.height = "".concat(
                        (this.scrollbarHeight * this.scrollbarHeight) /
                          (this.instance.limit.y + this.scrollbarHeight),
                        "px"
                      )),
                  (this.scrollbarThumbBCR =
                    this.scrollbarThumb.getBoundingClientRect()),
                  (this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                  });
              },
            },
            {
              key: "destroyScrollBar",
              value: function () {
                this.scrollbarThumb.removeEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                  window.removeEventListener("mouseup", this.releaseScrollBar),
                  window.removeEventListener("mousemove", this.moveScrollBar),
                  this.scrollbar.remove();
              },
            },
            {
              key: "getScrollBar",
              value: function (t) {
                (this.isDraggingScrollbar = !0),
                  this.checkScroll(),
                  this.html.classList.remove(this.scrollingClass),
                  this.html.classList.add(this.draggingClass);
              },
            },
            {
              key: "releaseScrollBar",
              value: function (t) {
                (this.isDraggingScrollbar = !1),
                  this.html.classList.add(this.scrollingClass),
                  this.html.classList.remove(this.draggingClass);
              },
            },
            {
              key: "moveScrollBar",
              value: function (t) {
                var e = this;
                this.isDraggingScrollbar &&
                  requestAnimationFrame(function () {
                    var i =
                        (((100 * (t.clientX - e.scrollbarBCR.left)) /
                          e.scrollbarWidth) *
                          e.instance.limit.x) /
                        100,
                      n =
                        (((100 * (t.clientY - e.scrollbarBCR.top)) /
                          e.scrollbarHeight) *
                          e.instance.limit.y) /
                        100;
                    n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n),
                      i > 0 &&
                        i < e.instance.limit.x &&
                        (e.instance.delta.x = i);
                  });
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  (this.parallaxElements = {}),
                  this.el
                    .querySelectorAll("[data-".concat(this.name, "]"))
                    .forEach(function (e, i) {
                      var n,
                        r,
                        o,
                        s = V(e),
                        a = Object.entries(t.sections)
                          .map(function (t) {
                            var e = f(t, 2);
                            e[0];
                            return e[1];
                          })
                          .find(function (t) {
                            return s.includes(t.el);
                          }),
                        l = e.dataset[t.name + "Class"] || t.class,
                        c =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : "el" + i,
                        h = e.dataset[t.name + "Repeat"],
                        u = e.dataset[t.name + "Call"],
                        d = e.dataset[t.name + "Position"],
                        p = e.dataset[t.name + "Delay"],
                        g = e.dataset[t.name + "Direction"],
                        v = "string" == typeof e.dataset[t.name + "Sticky"],
                        m =
                          !!e.dataset[t.name + "Speed"] &&
                          parseFloat(e.dataset[t.name + "Speed"]) / 10,
                        w =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        y = e.dataset[t.name + "Target"],
                        x = (o =
                          void 0 !== y
                            ? document.querySelector("".concat(y))
                            : e).getBoundingClientRect();
                      null === a || a.inView
                        ? ((n = x.top + t.instance.scroll.y - Y(o).y),
                          (r = x.left + t.instance.scroll.x - Y(o).x))
                        : ((n = x.top - Y(a.el).y - Y(o).y),
                          (r = x.left - Y(a.el).x - Y(o).x));
                      var b = n + o.offsetHeight,
                        k = r + o.offsetWidth,
                        C = { x: (k - r) / 2 + r, y: (b - n) / 2 + n };
                      if (v) {
                        var _ = e.getBoundingClientRect(),
                          D = _.top,
                          T = _.left,
                          L = { x: T - r, y: D - n };
                        (n += window.innerHeight),
                          (r += window.innerWidth),
                          (b =
                            D +
                            o.offsetHeight -
                            e.offsetHeight -
                            L[t.directionAxis]),
                          (C = {
                            x:
                              ((k =
                                T +
                                o.offsetWidth -
                                e.offsetWidth -
                                L[t.directionAxis]) -
                                r) /
                                2 +
                              r,
                            y: (b - n) / 2 + n,
                          });
                      }
                      h = "false" != h && (null != h || t.repeat);
                      var S = [0, 0];
                      if (w)
                        if ("horizontal" === t.direction) {
                          for (var M = 0; M < w.length; M++)
                            "string" == typeof w[M]
                              ? w[M].includes("%")
                                ? (S[M] = parseInt(
                                    (w[M].replace("%", "") * t.windowWidth) /
                                      100
                                  ))
                                : (S[M] = parseInt(w[M]))
                              : (S[M] = w[M]);
                          (r += S[0]), (k -= S[1]);
                        } else {
                          for (M = 0; M < w.length; M++)
                            "string" == typeof w[M]
                              ? w[M].includes("%")
                                ? (S[M] = parseInt(
                                    (w[M].replace("%", "") * t.windowHeight) /
                                      100
                                  ))
                                : (S[M] = parseInt(w[M]))
                              : (S[M] = w[M]);
                          (n += S[0]), (b -= S[1]);
                        }
                      var E = {
                        el: e,
                        id: c,
                        class: l,
                        section: a,
                        top: n,
                        middle: C,
                        bottom: b,
                        left: r,
                        right: k,
                        offset: w,
                        progress: 0,
                        repeat: h,
                        inView: !1,
                        call: u,
                        speed: m,
                        delay: p,
                        position: d,
                        target: o,
                        direction: g,
                        sticky: v,
                      };
                      (t.els[c] = E),
                        e.classList.contains(l) && t.setInView(t.els[c], c),
                        (!1 !== m || v) && (t.parallaxElements[c] = E);
                    });
              },
            },
            {
              key: "addSections",
              value: function () {
                var t = this;
                this.sections = {};
                var e = this.el.querySelectorAll(
                  "[data-".concat(this.name, "-section]")
                );
                0 === e.length && (e = [this.el]),
                  e.forEach(function (e, i) {
                    var n =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "section" + i,
                      r = e.getBoundingClientRect(),
                      o = {
                        x: r.left - 1.5 * window.innerWidth - Y(e).x,
                        y: r.top - 1.5 * window.innerHeight - Y(e).y,
                      },
                      s = {
                        x: o.x + r.width + 2 * window.innerWidth,
                        y: o.y + r.height + 2 * window.innerHeight,
                      },
                      a = "string" == typeof e.dataset[t.name + "Persistent"];
                    e.setAttribute("data-scroll-section-id", n);
                    var l = {
                      el: e,
                      offset: o,
                      limit: s,
                      inView: !1,
                      persistent: a,
                      id: n,
                    };
                    t.sections[n] = l;
                  });
              },
            },
            {
              key: "transform",
              value: function (t, e, i, n) {
                var r;
                if (n) {
                  var o = Y(t),
                    s = q(o.x, e, n),
                    a = q(o.y, i, n);
                  r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                    .concat(s, ",")
                    .concat(a, ",0,1)");
                } else
                  r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                    .concat(e, ",")
                    .concat(i, ",0,1)");
                (t.style.webkitTransform = r),
                  (t.style.msTransform = r),
                  (t.style.transform = r);
              },
            },
            {
              key: "transformElements",
              value: function (t) {
                var e = this,
                  i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = this.instance.scroll.x + this.windowWidth,
                  r = this.instance.scroll.y + this.windowHeight,
                  o = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y,
                  };
                Object.entries(this.parallaxElements).forEach(function (s) {
                  var a = f(s, 2),
                    l = (a[0], a[1]),
                    c = !1;
                  if ((t && (c = 0), l.inView || i))
                    switch (l.position) {
                      case "top":
                        c = e.instance.scroll[e.directionAxis] * -l.speed;
                        break;
                      case "elementTop":
                        c = (r - l.top) * -l.speed;
                        break;
                      case "bottom":
                        c =
                          (e.instance.limit[e.directionAxis] -
                            r +
                            e.windowHeight) *
                          l.speed;
                        break;
                      case "left":
                        c = e.instance.scroll[e.directionAxis] * -l.speed;
                        break;
                      case "elementLeft":
                        c = (n - l.left) * -l.speed;
                        break;
                      case "right":
                        c =
                          (e.instance.limit[e.directionAxis] -
                            n +
                            e.windowHeight) *
                          l.speed;
                        break;
                      default:
                        c =
                          (o[e.directionAxis] - l.middle[e.directionAxis]) *
                          -l.speed;
                    }
                  l.sticky &&
                    (c = l.inView
                      ? "horizontal" === e.direction
                        ? e.instance.scroll.x - l.left + window.innerWidth
                        : e.instance.scroll.y - l.top + window.innerHeight
                      : "horizontal" === e.direction
                      ? e.instance.scroll.x < l.left - window.innerWidth &&
                        e.instance.scroll.x < l.left - window.innerWidth / 2
                        ? 0
                        : e.instance.scroll.x > l.right &&
                          e.instance.scroll.x > l.right + 100 &&
                          l.right - l.left + window.innerWidth
                      : e.instance.scroll.y < l.top - window.innerHeight &&
                        e.instance.scroll.y < l.top - window.innerHeight / 2
                      ? 0
                      : e.instance.scroll.y > l.bottom &&
                        e.instance.scroll.y > l.bottom + 100 &&
                        l.bottom - l.top + window.innerHeight),
                    !1 !== c &&
                      ("horizontal" === l.direction ||
                      ("horizontal" === e.direction &&
                        "vertical" !== l.direction)
                        ? e.transform(l.el, c, 0, !t && l.delay)
                        : e.transform(l.el, 0, c, !t && l.delay));
                });
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e = this,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = parseInt(i.offset) || 0,
                  r = i.duration || 1e3,
                  o = i.easing || [0.25, 0, 0.35, 1],
                  s = !!i.disableLerp,
                  a = !!i.callback && i.callback;
                if (((o = et.apply(void 0, p(o))), "string" == typeof t)) {
                  if ("top" === t) t = 0;
                  else if ("bottom" === t) t = this.instance.limit.y;
                  else if ("left" === t) t = 0;
                  else if ("right" === t) t = this.instance.limit.x;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                if ("number" != typeof t) {
                  var l = V(t).includes(this.el);
                  if (!l) return;
                  var c = t.getBoundingClientRect(),
                    h = c.top,
                    u = c.left,
                    d = V(t),
                    g = d.find(function (t) {
                      return Object.entries(e.sections)
                        .map(function (t) {
                          var e = f(t, 2);
                          e[0];
                          return e[1];
                        })
                        .find(function (e) {
                          return e.el == t;
                        });
                    }),
                    v = 0;
                  (v = g
                    ? Y(g)[this.directionAxis]
                    : -this.instance.scroll[this.directionAxis]),
                    (n =
                      "horizontal" === this.direction ? u + n - v : h + n - v);
                } else n = t + n;
                var m = parseFloat(this.instance.delta[this.directionAxis]),
                  w = Math.max(
                    0,
                    Math.min(n, this.instance.limit[this.directionAxis])
                  ),
                  y = w - m,
                  x = function (t) {
                    s
                      ? "horizontal" === e.direction
                        ? e.setScroll(m + y * t, e.instance.delta.y)
                        : e.setScroll(e.instance.delta.x, m + y * t)
                      : (e.instance.delta[e.directionAxis] = m + y * t);
                  };
                (this.animatingScroll = !0),
                  this.stopScrolling(),
                  this.startScrolling();
                var b = Date.now(),
                  k = function t() {
                    var i = (Date.now() - b) / r;
                    i > 1
                      ? (x(1),
                        (e.animatingScroll = !1),
                        0 == r && e.update(),
                        a && a())
                      : ((e.scrollToRaf = requestAnimationFrame(t)), x(o(i)));
                  };
                k();
              },
            },
            {
              key: "update",
              value: function () {
                this.setScrollLimit(),
                  this.addSections(),
                  this.addElements(),
                  this.detectElements(),
                  this.updateScroll(),
                  this.transformElements(!0),
                  this.reinitScrollBar(),
                  this.checkScroll(!0);
              },
            },
            {
              key: "startScroll",
              value: function () {
                this.stop = !1;
              },
            },
            {
              key: "stopScroll",
              value: function () {
                this.stop = !0;
              },
            },
            {
              key: "setScroll",
              value: function (t, e) {
                this.instance = o(
                  o({}, this.instance),
                  {},
                  { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                d(a(r.prototype), "destroy", this).call(this),
                  this.stopScrolling(),
                  this.html.classList.remove(this.smoothClass),
                  this.vs.destroy(),
                  this.destroyScrollBar(),
                  window.removeEventListener("keydown", this.checkKey, !1);
              },
            },
          ]),
          r
        );
      })(w);
    return (function () {
      function e() {
        var i =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e),
          (this.options = i),
          Object.assign(this, m, i),
          (this.smartphone = m.smartphone),
          i.smartphone && Object.assign(this.smartphone, i.smartphone),
          (this.tablet = m.tablet),
          i.tablet && Object.assign(this.tablet, i.tablet),
          this.smooth ||
            "horizontal" != this.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
            ),
          this.tablet.smooth ||
            "horizontal" != this.tablet.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
            ),
          this.smartphone.smooth ||
            "horizontal" != this.smartphone.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
            ),
          this.init();
      }
      return (
        i(e, [
          {
            key: "init",
            value: function () {
              if (
                ((this.options.mobileView =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.mobileView &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.mobileView) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.mobileView &&
                  !this.options.isTablet)
                  ? (this.scroll = new ht(this.options))
                  : (this.scroll = new k(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var t = window.location.hash.slice(
                    1,
                    window.location.hash.length
                  ),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e);
              }
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        e
      );
    })();
  });
