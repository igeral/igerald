/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ !(function (
  a,
  b
) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                        : (f = a && n.isPlainObject(a) ? a : {}),
                      (g[d] = n.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !k.call(a, "constructor") &&
            !k.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (!l.ownFirst) for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (h) return h.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a)
            ? ((c = e.call(arguments, 2)),
              (d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)));
              }),
              (d.guid = a.guid = a.guid || n.guid++),
              d)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        if (((f = d.getElementById(e[2])), f && f.parentNode)) {
          if (f.id !== e[2]) return A.find(a);
          (this.length = 1), (this[0] = f);
        }
        return (this.context = d), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b,
        c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? n.inArray(this[0], n(a))
          : n.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = !0), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.addEventListener
      ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K))
      : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }
  function K() {
    (d.addEventListener ||
      "load" === a.event.type ||
      "complete" === d.readyState) &&
      (J(), n.ready());
  }
  (n.ready.promise = function (b) {
    if (!I)
      if (
        ((I = n.Deferred()),
        "complete" === d.readyState ||
          ("loading" !== d.readyState && !d.documentElement.doScroll))
      )
        a.setTimeout(n.ready);
      else if (d.addEventListener)
        d.addEventListener("DOMContentLoaded", K),
          a.addEventListener("load", K);
      else {
        d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
        var c = !1;
        try {
          c = null == a.frameElement && d.documentElement;
        } catch (e) {}
        c &&
          c.doScroll &&
          !(function f() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (b) {
                return a.setTimeout(f, 50);
              }
              J(), n.ready();
            }
          })();
      }
    return I.promise(b);
  }),
    n.ready.promise();
  var L;
  for (L in n(l)) break;
  (l.ownFirst = "0" === L),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a, b, c, e;
      (c = d.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = d.createElement("div")),
          (e = d.createElement("div")),
          (e.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(e).appendChild(b),
          "undefined" != typeof b.style.zoom &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(e));
    }),
    (function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        l.deleteExpando = !1;
      }
      a = null;
    })();
  var M = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function R(a, b, d, e) {
    if (M(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
          ("object" != typeof b && "function" != typeof b) ||
            (e
              ? (j[k] = n.extend(j[k], b))
              : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function S(a, b, c) {
    if (M(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = void 0));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
      );
    },
    data: function (a, b, c) {
      return R(a, b, c);
    },
    removeData: function (a, b) {
      return S(a, b);
    },
    _data: function (a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return S(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              n.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              n.data(this, a, b);
            })
          : f
          ? P(f, a, n.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = n._data(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    }),
    (function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return (
          (c = d.getElementsByTagName("body")[0]),
          c && c.style
            ? ((b = d.createElement("div")),
              (e = d.createElement("div")),
              (e.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              c.appendChild(e).appendChild(b),
              "undefined" != typeof b.style.zoom &&
                ((b.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (b.appendChild(d.createElement("div")).style.width = "5px"),
                (a = 3 !== b.offsetWidth)),
              c.removeChild(e),
              a)
            : void 0
        );
      };
    })();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function X(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var Y = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !(function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    (a.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (l.leadingWhitespace = 3 === a.firstChild.nodeType),
      (l.tbody = !a.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!a.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      b.appendChild(c),
      (l.appendChecked = c.checked),
      (a.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
      b.appendChild(a),
      (c = d.createElement("input")),
      c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      a.appendChild(c),
      (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !!a.addEventListener),
      (a[n.expando] = 1),
      (l.attributes = !a.getAttribute(n.expando));
  })();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (da.optgroup = da.option),
    (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
    (da.th = da.td);
  function ea(a, b) {
    var c,
      d,
      e = 0,
      f =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }
  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }
  function ja(a, b, c, d, e) {
    for (
      var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
      o > r;
      r++
    )
      if (((g = a[r]), g || 0 === g))
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
          (i = i || p.appendChild(b.createElement("div"))),
            (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
            (m = da[j] || da._default),
            (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
            (f = m[0]);
          while (f--) i = i.lastChild;
          if (
            (!l.leadingWhitespace &&
              aa.test(g) &&
              q.push(b.createTextNode(aa.exec(g)[0])),
            !l.tbody)
          ) {
            (g =
              "table" !== j || ha.test(g)
                ? "<table>" !== m[1] || ha.test(g)
                  ? 0
                  : i
                : i.firstChild),
              (f = g && g.childNodes.length);
            while (f--)
              n.nodeName((k = g.childNodes[f]), "tbody") &&
                !k.childNodes.length &&
                g.removeChild(k);
          }
          n.merge(q, i.childNodes), (i.textContent = "");
          while (i.firstChild) i.removeChild(i.firstChild);
          i = p.lastChild;
        } else q.push(b.createTextNode(g));
    i && p.removeChild(i),
      l.appendChecked || n.grep(ea(q, "input"), ia),
      (r = 0);
    while ((g = q[r++]))
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (
        ((h = n.contains(g.ownerDocument, g)),
        (i = ea(p.appendChild(g), "script")),
        h && fa(i),
        c)
      ) {
        f = 0;
        while ((g = i[f++])) _.test(g.type || "") && c.push(g);
      }
    return (i = null), p;
  }
  !(function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in { submit: !0, change: !0, focusin: !0 })
      (c = "on" + b),
        (l[b] = c in a) ||
          (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
    e = null;
  })();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return !0;
  }
  function qa() {
    return !1;
  }
  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) sa(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = qa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return "undefined" == typeof n ||
                  (a && n.event.triggered === a.type)
                  ? void 0
                  : n.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(G) || [""]),
          (h = b.length);
        while (h--)
          (f = oa.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
                ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = oa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((i = m = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !na.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (h = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (l = n.event.special[q] || {}),
          f || !l.trigger || l.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (
            j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (m = i);
          m === (e.ownerDocument || d) &&
            p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped())
          (b.type = o > 1 ? j : l.bindType || q),
            (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
            g && g.apply(i, c),
            (g = h && i[h]),
            g &&
              g.apply &&
              M(i) &&
              ((b.result = g.apply(i, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = q),
          !f &&
            !b.isDefaultPrevented() &&
            (!l._default || l._default.apply(p.pop(), c) === !1) &&
            M(e) &&
            h &&
            e[q] &&
            !n.isWindow(e))
        ) {
          (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
          try {
            e[q]();
          } catch (s) {}
          (n.event.triggered = void 0), m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = g.srcElement || d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        h.filter ? h.filter(a, g) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((e = a.target.ownerDocument || d),
            (f = e.documentElement),
            (c = e.body),
            (a.pageX =
              b.clientX +
              ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
              ((f && f.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            h &&
            (a.relatedTarget = h === a.target ? b.toElement : h),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = d.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
        }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? pa
                  : qa))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: qa,
      isPropagationStopped: qa,
      isImmediatePropagationStopped: qa,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = pa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = pa),
          a &&
            !this.isSimulated &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = pa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submit ||
      (n.event.special.submit = {
        setup: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      n.nodeName(b, "input") || n.nodeName(b, "button")
                        ? n.prop(b, "form")
                        : void 0;
                  c &&
                    !n._data(c, "submit") &&
                    (n.event.add(c, "submit._submit", function (a) {
                      a._submitBubble = !0;
                    }),
                    n._data(c, "submit", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submitBubble &&
            (delete a._submitBubble,
            this.parentNode &&
              !a.isTrigger &&
              n.event.simulate("submit", this.parentNode, a));
        },
        teardown: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.remove(this, "._submit");
        },
      }),
    l.change ||
      (n.event.special.change = {
        setup: function () {
          return ka.test(this.nodeName)
            ? (("checkbox" !== this.type && "radio" !== this.type) ||
                (n.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                n.event.add(this, "click._change", function (a) {
                  this._justChanged && !a.isTrigger && (this._justChanged = !1),
                    n.event.simulate("change", this, a);
                })),
              !1)
            : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ka.test(b.nodeName) &&
                  !n._data(b, "change") &&
                  (n.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      n.event.simulate("change", this.parentNode, a);
                  }),
                  n._data(b, "change", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return n.event.remove(this, "._change"), !ka.test(this.nodeName);
        },
      }),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d) {
        return sa(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return sa(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = qa),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function Da(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }
  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }
  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((Da(b).text = a.text), Ea(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && Z.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }
  }
  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
      });
    if (
      o &&
      ((k = ja(b, a[0].ownerDocument, !1, a, d)),
      (e = k.firstChild),
      1 === k.childNodes.length && (k = e),
      e || d)
    ) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
        (g = k),
          m !== p &&
            ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
          c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
          (g = i[m]),
            _.test(g.type || "") &&
              !n._data(g, "globalEval") &&
              n.contains(j, g) &&
              (g.src
                ? n._evalUrl && n._evalUrl(g.src)
                : n.globalEval(
                    (g.text || g.textContent || g.innerHTML || "").replace(
                      za,
                      ""
                    )
                  ));
      k = e = null;
    }
    return a;
  }
  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(ea(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((Ba.innerHTML = a.outerHTML), Ba.removeChild((f = Ba.firstChild))),
        !(
          (l.noCloneEvent && l.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        ))
      )
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
            Fa(e, d[g]);
        else Fa(a, f);
      return (
        (d = ea(f, "script")),
        d.length > 0 && fa(d, !i && ea(a, "script")),
        (d = h = e = null),
        f
      );
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = n.expando,
          j = n.cache,
          k = l.attributes,
          m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            k || "undefined" == typeof d.removeAttribute
              ? (d[i] = void 0)
              : d.removeAttribute(i),
            c.push(f));
        }
    },
  }),
    n.fn.extend({
      domManip: Ha,
      detach: function (a) {
        return Ia(this, a, !0);
      },
      remove: function (a) {
        return Ia(this, a);
      },
      text: function (a) {
        return Y(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(ea(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return Y(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
            if (
              "string" == typeof a &&
              !wa.test(a) &&
              (l.htmlSerialize || !ua.test(a)) &&
              (l.leadingWhitespace || !aa.test(a)) &&
              !da[($.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ha(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(ea(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              n(f[d])[b](c),
              g.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ja,
    Ka = { HTML: "block", BODY: "block" };
  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function Ma(a) {
    var b = d,
      c = Ka[a];
    return (
      c ||
        ((c = La(a, b)),
        ("none" !== c && c) ||
          ((Ja = (
            Ja || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = La(a, b)),
          Ja.detach()),
        (Ka[a] = c)),
      c
    );
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Qa = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      (j.style.cssText = "float:left;opacity:.5"),
        (l.opacity = "0.5" === j.style.opacity),
        (l.cssFloat = !!j.style.cssFloat),
        (j.style.backgroundClip = "content-box"),
        (j.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
        (i = d.createElement("div")),
        (i.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (j.innerHTML = ""),
        i.appendChild(j),
        (l.boxSizing =
          "" === j.style.boxSizing ||
          "" === j.style.MozBoxSizing ||
          "" === j.style.WebkitBoxSizing),
        n.extend(l, {
          reliableHiddenOffsets: function () {
            return null == b && k(), f;
          },
          boxSizingReliable: function () {
            return null == b && k(), e;
          },
          pixelMarginRight: function () {
            return null == b && k(), c;
          },
          pixelPosition: function () {
            return null == b && k(), b;
          },
          reliableMarginRight: function () {
            return null == b && k(), g;
          },
          reliableMarginLeft: function () {
            return null == b && k(), h;
          },
        });
      function k() {
        var k,
          l,
          m = d.documentElement;
        m.appendChild(i),
          (j.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (b = e = h = !1),
          (c = g = !0),
          a.getComputedStyle &&
            ((l = a.getComputedStyle(j)),
            (b = "1%" !== (l || {}).top),
            (h = "2px" === (l || {}).marginLeft),
            (e = "4px" === (l || { width: "4px" }).width),
            (j.style.marginRight = "50%"),
            (c = "4px" === (l || { marginRight: "4px" }).marginRight),
            (k = j.appendChild(d.createElement("div"))),
            (k.style.cssText = j.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (k.style.marginRight = k.style.width = "0"),
            (j.style.width = "1px"),
            (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
            j.removeChild(k)),
          (j.style.display = "none"),
          (f = 0 === j.getClientRects().length),
          f &&
            ((j.style.display = ""),
            (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (j.childNodes[0].style.borderCollapse = "separate"),
            (k = j.getElementsByTagName("td")),
            (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (f = 0 === k[0].offsetHeight),
            f &&
              ((k[0].style.display = ""),
              (k[1].style.display = "none"),
              (f = 0 === k[0].offsetHeight))),
          m.removeChild(i);
      }
    }
  })();
  var Ra,
    Sa,
    Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          ("" !== g && void 0 !== g) ||
            n.contains(a.ownerDocument, a) ||
            (g = n.style(a, b)),
          c &&
            !l.pixelMarginRight() &&
            Oa.test(g) &&
            Na.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f)),
          void 0 === g ? g : g + ""
        );
      }))
    : Qa.currentStyle &&
      ((Ra = function (a) {
        return a.currentStyle;
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Oa.test(g) &&
            !Ta.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Ua(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = { position: "absolute", visibility: "hidden", display: "block" },
    $a = { letterSpacing: "0", fontWeight: "400" },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--) if (((a = _a[c] + b), a in ab)) return a;
  }
  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                W(d) &&
                (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
            : ((e = W(d)),
              ((c && "none" !== c) || !e) &&
                n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function eb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + V[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + V[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g;
  }
  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Sa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Oa.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
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
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = U.exec(c)) &&
            e[1] &&
            ((c = X(a, b, e)), (f = "number")),
          null != c &&
            c === c &&
            ("number" === f &&
              (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
            l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Sa(a, b, d)),
        "normal" === f && b in $a && (f = $a[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Pa(a, Za, function () {
                  return fb(a, b, d);
                })
              : fb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ra(a);
          return db(
            a,
            c,
            d
              ? eb(
                  a,
                  b,
                  d,
                  l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    l.opacity ||
      (n.cssHooks.opacity = {
        get: function (a, b) {
          return Wa.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === n.trim(f.replace(Va, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
        },
      }),
    (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
      return b
        ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"])
        : void 0;
    })),
    (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Sa(a, "marginLeft")) ||
            (n.contains(a.ownerDocument, a)
              ? a.getBoundingClientRect().left -
                Pa(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })
              : 0)) + "px"
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Na.test(a) || (n.cssHooks[a + b].set = db);
    }),
    n.fn.extend({
      css: function (a, b) {
        return Y(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return cb(this, !0);
      },
      hide: function () {
        return cb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              W(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = gb),
    (gb.prototype = {
      constructor: gb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = gb.propHooks[this.prop];
        return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = gb.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : gb.propHooks._default.set(this),
          this
        );
      },
    }),
    (gb.prototype.init.prototype = gb.prototype),
    (gb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (gb.propHooks.scrollTop = gb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = gb.prototype.init),
    (n.fx.step = {});
  var hb,
    ib,
    jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
  function lb() {
    return (
      a.setTimeout(function () {
        hb = void 0;
      }),
      (hb = n.now())
    );
  }
  function mb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function nb(a, b, c) {
    for (
      var d,
        e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      m.always(function () {
        m.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
          m.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), jb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(o))
      "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
              n(a).hide();
            }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = nb(q ? r[d] : 0, d, m)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function qb(a, b, c) {
    var d,
      e,
      f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = hb || lb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, nb, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(qb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (qb.tweeners[c] = qb.tweeners[c] || []),
          qb.tweeners[c].unshift(b);
    },
    prefilters: [ob],
    prefilter: function (a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(mb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (hb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(ib), (ib = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      (c = d.createElement("div")),
        c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = c.getElementsByTagName("a")[0]),
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        (a = c.getElementsByTagName("a")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== c.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = f.selected),
        (l.enctype = !!d.createElement("form").enctype),
        (e.disabled = !0),
        (l.optDisabled = !f.disabled),
        (b = d.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value);
    })();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var tb,
    ub,
    vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (yb && xb) || !wb.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(xb ? c : d);
      },
    }),
    (ub = {
      set: function (a, b, c) {
        return (
          b === !1
            ? n.removeAttr(a, c)
            : (yb && xb) || !wb.test(c)
            ? a.setAttribute((!xb && n.propFix[c]) || c, c)
            : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = vb[b] || n.find.attr;
      (yb && xb) || !wb.test(b)
        ? (vb[b] = function (a, b, d) {
            var e, f;
            return (
              d ||
                ((f = vb[b]),
                (vb[b] = e),
                (e = null != c(a, b, d) ? b.toLowerCase() : null),
                (vb[b] = f)),
              e
            );
          })
        : (vb[b] = function (a, b, c) {
            return c
              ? void 0
              : a[n.camelCase("default-" + b)]
              ? b.toLowerCase()
              : null;
          });
    }),
    (yb && xb) ||
      (n.attrHooks.value = {
        set: function (a, b, c) {
          return n.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : tb && tb.set(a, b, c);
        },
      }),
    xb ||
      ((tb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (vb.id =
        vb.name =
        vb.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: tb.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          tb.set(a, "" === b ? !1 : b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    l.style ||
      (n.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.hrefNormalized ||
      n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
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
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;
  function Cb(a) {
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, Cb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, Cb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Cb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = Cb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(Gb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];
  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Vb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }
  function Wb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Xb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
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
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while ((b = Jb.exec(g))) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u) for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this;
          },
        };
      if (
        ((p.promise(w).complete = q.add),
        (w.success = w.done),
        (w.error = w.fail),
        (l.url = ((b || l.url || Rb) + "")
          .replace(Hb, "")
          .replace(Mb, Sb[1] + "//")),
        (l.type = c.method || c.type || l.method || l.type),
        (l.dataTypes = n
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == l.crossDomain &&
          ((d = Nb.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !d ||
            (d[1] === Sb[1] &&
              d[2] === Sb[2] &&
              (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = n.param(l.data, l.traditional)),
        Ub(Ob, l, c, w),
        2 === u)
      )
        return w;
      (i = n.event && l.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !Lb.test(l.type)),
        (f = l.url),
        l.hasContent ||
          (l.data &&
            ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data), delete l.data),
          l.cache === !1 &&
            (l.url = Ib.test(f)
              ? f.replace(Ib, "$1_=" + Eb++)
              : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
        l.ifModified &&
          (n.lastModified[f] &&
            w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          w.setRequestHeader("Content-Type", l.contentType),
        w.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
        return w.abort();
      v = "abort";
      for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
      if ((j = Ub(Pb, l, c, w))) {
        if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
          return w;
        l.async &&
          l.timeout > 0 &&
          (h = a.setTimeout(function () {
            w.abort("timeout");
          }, l.timeout));
        try {
          (u = 1), j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");
      function y(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u &&
          ((u = 2),
          h && a.clearTimeout(h),
          (j = void 0),
          (g = e || ""),
          (w.readyState = b > 0 ? 4 : 0),
          (k = (b >= 200 && 300 > b) || 304 === b),
          d && (v = Wb(l, w, d)),
          (v = Xb(l, v, w, k)),
          k
            ? (l.ifModified &&
                ((x = w.getResponseHeader("Last-Modified")),
                x && (n.lastModified[f] = x),
                (x = w.getResponseHeader("etag")),
                x && (n.etag[f] = x)),
              204 === b || "HEAD" === l.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (w.status = b),
          (w.statusText = (c || y) + ""),
          k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
          w.statusCode(r),
          (r = void 0),
          i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
          q.fireWith(m, [w, y]),
          i &&
            (o.trigger("ajaxComplete", [w, l]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  function Yb(a) {
    return (a.style && a.style.display) || n.css(a, "display");
  }
  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  (n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets()
      ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
      : Zb(a);
  }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || _b.test(a)
          ? d(a, e)
          : dc(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              cc.test(this.nodeName) &&
              !bc.test(a) &&
              (this.checked || !Z.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(ac, "\r\n") };
                })
              : { name: b.name, value: c.replace(ac, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return this.isLocal
              ? ic()
              : d.documentMode > 8
              ? hc()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  hc()) ||
                ic();
          }
        : hc);
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in fc) fc[a](void 0, !0);
    }),
    (l.cors = !!gc && "withCredentials" in gc),
    (gc = l.ajax = !!gc),
    gc &&
      n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
          var c;
          return {
            send: function (d, e) {
              var f,
                g = b.xhr(),
                h = ++ec;
              if (
                (g.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (f in b.xhrFields) g[f] = b.xhrFields[f];
              b.mimeType &&
                g.overrideMimeType &&
                g.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  d["X-Requested-With"] ||
                  (d["X-Requested-With"] = "XMLHttpRequest");
              for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
              g.send((b.hasContent && b.data) || null),
                (c = function (a, d) {
                  var f, i, j;
                  if (c && (d || 4 === g.readyState))
                    if (
                      (delete fc[h],
                      (c = void 0),
                      (g.onreadystatechange = n.noop),
                      d)
                    )
                      4 !== g.readyState && g.abort();
                    else {
                      (j = {}),
                        (f = g.status),
                        "string" == typeof g.responseText &&
                          (j.text = g.responseText);
                      try {
                        i = g.statusText;
                      } catch (k) {
                        i = "";
                      }
                      f || !b.isLocal || b.crossDomain
                        ? 1223 === f && (f = 204)
                        : (f = j.text ? 200 : 404);
                    }
                  j && e(f, i, j, g.getAllResponseHeaders());
                }),
                b.async
                  ? 4 === g.readyState
                    ? a.setTimeout(c)
                    : (g.onreadystatechange = fc[h] = c)
                  : c();
            },
            abort: function () {
              c && c(void 0, !0);
            },
          };
        }
      });
  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      },
    },
  }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = d.head || n("head")[0] || d.documentElement;
        return {
          send: function (e, f) {
            (b = d.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || f(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (kc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              kc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(kc, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), jc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ja([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var lc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function mc(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? ("undefined" != typeof e.getBoundingClientRect &&
                  (d = e.getBoundingClientRect()),
                (c = mc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Qa;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return Y(
            this,
            function (a, d, e) {
              var f = mc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? n(f).scrollLeft() : e,
                        c ? e : n(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return Y(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var nc = a.jQuery,
    oc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
  (function (e, t, n) {
    function r(n) {
      var r = t.console;
      i[n] ||
        ((i[n] = !0),
        e.migrateWarnings.push(n),
        r &&
          r.warn &&
          !e.migrateMute &&
          (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()));
    }
    function a(t, a, i, o) {
      if (Object.defineProperty)
        try {
          return (
            Object.defineProperty(t, a, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return r(o), i;
              },
              set: function (e) {
                r(o), (i = e);
              },
            }),
            n
          );
        } catch (s) {}
      (e._definePropertyBroken = !0), (t[a] = i);
    }
    var i = {};
    (e.migrateWarnings = []),
      !e.migrateMute &&
        t.console &&
        t.console.log &&
        t.console.log("JQMIGRATE: Logging is active"),
      e.migrateTrace === n && (e.migrateTrace = !0),
      (e.migrateReset = function () {
        (i = {}), (e.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
      s = e.attr,
      u =
        (e.attrHooks.value && e.attrHooks.value.get) ||
        function () {
          return null;
        },
      c =
        (e.attrHooks.value && e.attrHooks.value.set) ||
        function () {
          return n;
        },
      l = /^(?:input|button)$/i,
      d = /^[238]$/,
      p =
        /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"),
      (e.attr = function (t, a, i, u) {
        var c = a.toLowerCase(),
          g = t && t.nodeType;
        return u &&
          (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"),
          t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a])))
          ? e(t)[a](i)
          : ("type" === a &&
              i !== n &&
              l.test(t.nodeName) &&
              t.parentNode &&
              r("Can't change the 'type' of an input or button in IE 6/7/8"),
            !e.attrHooks[c] &&
              p.test(c) &&
              ((e.attrHooks[c] = {
                get: function (t, r) {
                  var a,
                    i = e.prop(t, r);
                  return i === !0 ||
                    ("boolean" != typeof i &&
                      (a = t.getAttributeNode(r)) &&
                      a.nodeValue !== !1)
                    ? r.toLowerCase()
                    : n;
                },
                set: function (t, n, r) {
                  var a;
                  return (
                    n === !1
                      ? e.removeAttr(t, r)
                      : ((a = e.propFix[r] || r),
                        a in t && (t[a] = !0),
                        t.setAttribute(r, r.toLowerCase())),
                    r
                  );
                },
              }),
              f.test(c) &&
                r(
                  "jQuery.fn.attr('" +
                    c +
                    "') may use property instead of attribute"
                )),
            s.call(e, t, a, i));
      }),
      (e.attrHooks.value = {
        get: function (e, t) {
          var n = (e.nodeName || "").toLowerCase();
          return "button" === n
            ? u.apply(this, arguments)
            : ("input" !== n &&
                "option" !== n &&
                r("jQuery.fn.attr('value') no longer gets properties"),
              t in e ? e.value : null);
        },
        set: function (e, t) {
          var a = (e.nodeName || "").toLowerCase();
          return "button" === a
            ? c.apply(this, arguments)
            : ("input" !== a &&
                "option" !== a &&
                r("jQuery.fn.attr('value', val) no longer sets properties"),
              (e.value = t),
              n);
        },
      });
    var g,
      h,
      v = e.fn.init,
      m = e.parseJSON,
      y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    (e.fn.init = function (t, n, a) {
      var i;
      return t &&
        "string" == typeof t &&
        !e.isPlainObject(n) &&
        (i = y.exec(e.trim(t))) &&
        i[0] &&
        ("<" !== t.charAt(0) &&
          r("$(html) HTML strings must start with '<' character"),
        i[3] && r("$(html) HTML text after last tag is ignored"),
        "#" === i[0].charAt(0) &&
          (r("HTML string cannot start with a '#' character"),
          e.error("JQMIGRATE: Invalid selector string (XSS)")),
        n && n.context && (n = n.context),
        e.parseHTML)
        ? v.call(this, e.parseHTML(i[2], n, !0), n, a)
        : v.apply(this, arguments);
    }),
      (e.fn.init.prototype = e.fn),
      (e.parseJSON = function (e) {
        return e || null === e
          ? m.apply(this, arguments)
          : (r("jQuery.parseJSON requires a valid JSON string"), null);
      }),
      (e.uaMatch = function (e) {
        e = e.toLowerCase();
        var t =
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (0 > e.indexOf("compatible") &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          [];
        return { browser: t[1] || "", version: t[2] || "0" };
      }),
      e.browser ||
        ((g = e.uaMatch(navigator.userAgent)),
        (h = {}),
        g.browser && ((h[g.browser] = !0), (h.version = g.version)),
        h.chrome ? (h.webkit = !0) : h.webkit && (h.safari = !0),
        (e.browser = h)),
      a(e, "browser", e.browser, "jQuery.browser is deprecated"),
      (e.sub = function () {
        function t(e, n) {
          return new t.fn.init(e, n);
        }
        e.extend(!0, t, this),
          (t.superclass = this),
          (t.fn = t.prototype = this()),
          (t.fn.constructor = t),
          (t.sub = this.sub),
          (t.fn.init = function (r, a) {
            return (
              a && a instanceof e && !(a instanceof t) && (a = t(a)),
              e.fn.init.call(this, r, a, n)
            );
          }),
          (t.fn.init.prototype = t.fn);
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t;
      }),
      e.ajaxSetup({ converters: { "text json": e.parseJSON } });
    var b = e.fn.data;
    e.fn.data = function (t) {
      var a,
        i,
        o = this[0];
      return !o ||
        "events" !== t ||
        1 !== arguments.length ||
        ((a = e.data(o, t)),
        (i = e._data(o, t)),
        (a !== n && a !== i) || i === n)
        ? b.apply(this, arguments)
        : (r("Use of jQuery.fn.data('events') is deprecated"), i);
    };
    var j = /\/(java|ecma)script/i,
      w = e.fn.andSelf || e.fn.addBack;
    (e.fn.andSelf = function () {
      return (
        r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
      );
    }),
      e.clean ||
        (e.clean = function (t, a, i, o) {
          (a = a || document),
            (a = (!a.nodeType && a[0]) || a),
            (a = a.ownerDocument || a),
            r("jQuery.clean() is deprecated");
          var s,
            u,
            c,
            l,
            d = [];
          if ((e.merge(d, e.buildFragment(t, a).childNodes), i))
            for (
              c = function (e) {
                return !e.type || j.test(e.type)
                  ? o
                    ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e)
                    : i.appendChild(e)
                  : n;
              },
                s = 0;
              null != (u = d[s]);
              s++
            )
              (e.nodeName(u, "script") && c(u)) ||
                (i.appendChild(u),
                u.getElementsByTagName !== n &&
                  ((l = e.grep(
                    e.merge([], u.getElementsByTagName("script")),
                    c
                  )),
                  d.splice.apply(d, [s + 1, 0].concat(l)),
                  (s += l.length)));
          return d;
        });
    var Q = e.event.add,
      x = e.event.remove,
      k = e.event.trigger,
      N = e.fn.toggle,
      T = e.fn.live,
      M = e.fn.die,
      S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      C = RegExp("\\b(?:" + S + ")\\b"),
      H = /(?:^|\s)hover(\.\S+|)\b/,
      A = function (t) {
        return "string" != typeof t || e.event.special.hover
          ? t
          : (H.test(t) &&
              r(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            t && t.replace(H, "mouseenter$1 mouseleave$1"));
      };
    e.event.props &&
      "attrChange" !== e.event.props[0] &&
      e.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      e.event.dispatch &&
        a(
          e.event,
          "handle",
          e.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (e.event.add = function (e, t, n, a, i) {
        e !== document &&
          C.test(t) &&
          r("AJAX events should be attached to document: " + t),
          Q.call(this, e, A(t || ""), n, a, i);
      }),
      (e.event.remove = function (e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a);
      }),
      (e.fn.error = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return (
          r("jQuery.fn.error() is deprecated"),
          e.splice(0, 0, "error"),
          arguments.length
            ? this.bind.apply(this, e)
            : (this.triggerHandler.apply(this, e), this)
        );
      }),
      (e.fn.toggle = function (t, n) {
        if (!e.isFunction(t) || !e.isFunction(n))
          return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments,
          i = t.guid || e.guid++,
          o = 0,
          s = function (n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return (
              e._data(this, "lastToggle" + t.guid, r + 1),
              n.preventDefault(),
              a[r].apply(this, arguments) || !1
            );
          };
        for (s.guid = i; a.length > o; ) a[o++].guid = i;
        return this.click(s);
      }),
      (e.fn.live = function (t, n, a) {
        return (
          r("jQuery.fn.live() is deprecated"),
          T
            ? T.apply(this, arguments)
            : (e(this.context).on(t, this.selector, n, a), this)
        );
      }),
      (e.fn.die = function (t, n) {
        return (
          r("jQuery.fn.die() is deprecated"),
          M
            ? M.apply(this, arguments)
            : (e(this.context).off(t, this.selector || "**", n), this)
        );
      }),
      (e.event.trigger = function (e, t, n, a) {
        return (
          n || C.test(e) || r("Global events are undocumented and deprecated"),
          k.call(this, e, t, n || document, a)
        );
      }),
      e.each(S.split("|"), function (t, n) {
        e.event.special[n] = {
          setup: function () {
            var t = this;
            return (
              t !== document &&
                (e.event.add(document, n + "." + e.guid, function () {
                  e.event.trigger(n, null, t, !0);
                }),
                e._data(this, n, e.guid++)),
              !1
            );
          },
          teardown: function () {
            return (
              this !== document &&
                e.event.remove(document, n + "." + e._data(this, n)),
              !1
            );
          },
        };
      });
  })(jQuery, window);
(function (root, doc, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      factory($, root, doc);
      return $.mobile;
    });
  } else {
    factory(root.jQuery, root, doc);
  }
})(this, document, function (jQuery, window, document, undefined) {
  (function ($, window, document, undefined) {
    var dataPropertyName = "virtualMouseBindings",
      touchTargetPropertyName = "virtualTouchID",
      virtualEventNames =
        "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(
          " "
        ),
      touchEventProps = "clientX clientY pageX pageY screenX screenY".split(
        " "
      ),
      mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
      mouseEventProps = $.event.props.concat(mouseHookProps),
      activeDocHandlers = {},
      resetTimerID = 0,
      startX = 0,
      startY = 0,
      didScroll = false,
      clickBlockList = [],
      blockMouseTriggers = false,
      blockTouchTriggers = false,
      eventCaptureSupported = "addEventListener" in document,
      $document = $(document),
      nextTouchID = 1,
      lastTouchID = 0,
      threshold,
      i;
    $.vmouse = {
      moveDistanceThreshold: 10,
      clickDistanceThreshold: 10,
      resetTimerDuration: 1500,
    };
    function getNativeEvent(event) {
      while (event && typeof event.originalEvent !== "undefined") {
        event = event.originalEvent;
      }
      return event;
    }
    function createVirtualEvent(event, eventType) {
      var t = event.type,
        oe,
        props,
        ne,
        prop,
        ct,
        touch,
        i,
        j,
        len;
      event = $.Event(event);
      event.type = eventType;
      oe = event.originalEvent;
      props = $.event.props;
      if (t.search(/^(mouse|click)/) > -1) {
        props = mouseEventProps;
      }
      if (oe) {
        for (i = props.length, prop; i; ) {
          prop = props[--i];
          event[prop] = oe[prop];
        }
      }
      if (t.search(/mouse(down|up)|click/) > -1 && !event.which) {
        event.which = 1;
      }
      if (t.search(/^touch/) !== -1) {
        ne = getNativeEvent(oe);
        t = ne.touches;
        ct = ne.changedTouches;
        touch = t && t.length ? t[0] : ct && ct.length ? ct[0] : undefined;
        if (touch) {
          for (j = 0, len = touchEventProps.length; j < len; j++) {
            prop = touchEventProps[j];
            event[prop] = touch[prop];
          }
        }
      }
      return event;
    }
    function getVirtualBindingFlags(element) {
      var flags = {},
        b,
        k;
      while (element) {
        b = $.data(element, dataPropertyName);
        for (k in b) {
          if (b[k]) {
            flags[k] = flags.hasVirtualBinding = true;
          }
        }
        element = element.parentNode;
      }
      return flags;
    }
    function getClosestElementWithVirtualBinding(element, eventType) {
      var b;
      while (element) {
        b = $.data(element, dataPropertyName);
        if (b && (!eventType || b[eventType])) {
          return element;
        }
        element = element.parentNode;
      }
      return null;
    }
    function enableTouchBindings() {
      blockTouchTriggers = false;
    }
    function disableTouchBindings() {
      blockTouchTriggers = true;
    }
    function enableMouseBindings() {
      lastTouchID = 0;
      clickBlockList.length = 0;
      blockMouseTriggers = false;
      disableTouchBindings();
    }
    function disableMouseBindings() {
      enableTouchBindings();
    }
    function startResetTimer() {
      clearResetTimer();
      resetTimerID = setTimeout(function () {
        resetTimerID = 0;
        enableMouseBindings();
      }, $.vmouse.resetTimerDuration);
    }
    function clearResetTimer() {
      if (resetTimerID) {
        clearTimeout(resetTimerID);
        resetTimerID = 0;
      }
    }
    function triggerVirtualEvent(eventType, event, flags) {
      var ve;
      if (
        (flags && flags[eventType]) ||
        (!flags && getClosestElementWithVirtualBinding(event.target, eventType))
      ) {
        ve = createVirtualEvent(event, eventType);
        $(event.target).trigger(ve);
      }
      return ve;
    }
    function mouseEventCallback(event) {
      var touchID = $.data(event.target, touchTargetPropertyName),
        ve;
      if (!blockMouseTriggers && (!lastTouchID || lastTouchID !== touchID)) {
        ve = triggerVirtualEvent("v" + event.type, event);
        if (ve) {
          if (ve.isDefaultPrevented()) {
            event.preventDefault();
          }
          if (ve.isPropagationStopped()) {
            event.stopPropagation();
          }
          if (ve.isImmediatePropagationStopped()) {
            event.stopImmediatePropagation();
          }
        }
      }
    }
    function handleTouchStart(event) {
      var touches = getNativeEvent(event).touches,
        target,
        flags,
        t;
      if (touches && touches.length === 1) {
        target = event.target;
        flags = getVirtualBindingFlags(target);
        if (flags.hasVirtualBinding) {
          lastTouchID = nextTouchID++;
          $.data(target, touchTargetPropertyName, lastTouchID);
          clearResetTimer();
          disableMouseBindings();
          didScroll = false;
          t = getNativeEvent(event).touches[0];
          startX = t.pageX;
          startY = t.pageY;
          triggerVirtualEvent("vmouseover", event, flags);
          triggerVirtualEvent("vmousedown", event, flags);
        }
      }
    }
    function handleScroll(event) {
      if (blockTouchTriggers) {
        return;
      }
      if (!didScroll) {
        triggerVirtualEvent(
          "vmousecancel",
          event,
          getVirtualBindingFlags(event.target)
        );
      }
      didScroll = true;
      startResetTimer();
    }
    function handleTouchMove(event) {
      if (blockTouchTriggers) {
        return;
      }
      var t = getNativeEvent(event).touches[0],
        didCancel = didScroll,
        moveThreshold = $.vmouse.moveDistanceThreshold,
        flags = getVirtualBindingFlags(event.target);
      didScroll =
        didScroll ||
        Math.abs(t.pageX - startX) > moveThreshold ||
        Math.abs(t.pageY - startY) > moveThreshold;
      if (didScroll && !didCancel) {
        triggerVirtualEvent("vmousecancel", event, flags);
      }
      triggerVirtualEvent("vmousemove", event, flags);
      startResetTimer();
    }
    function handleTouchEnd(event) {
      if (blockTouchTriggers) {
        return;
      }
      disableTouchBindings();
      var flags = getVirtualBindingFlags(event.target),
        ve,
        t;
      triggerVirtualEvent("vmouseup", event, flags);
      if (!didScroll) {
        ve = triggerVirtualEvent("vclick", event, flags);
        if (ve && ve.isDefaultPrevented()) {
          t = getNativeEvent(event).changedTouches[0];
          clickBlockList.push({
            touchID: lastTouchID,
            x: t.clientX,
            y: t.clientY,
          });
          blockMouseTriggers = true;
        }
      }
      triggerVirtualEvent("vmouseout", event, flags);
      didScroll = false;
      startResetTimer();
    }
    function hasVirtualBindings(ele) {
      var bindings = $.data(ele, dataPropertyName),
        k;
      if (bindings) {
        for (k in bindings) {
          if (bindings[k]) {
            return true;
          }
        }
      }
      return false;
    }
    function dummyMouseHandler() {}
    function getSpecialEventObject(eventType) {
      var realType = eventType.substr(1);
      return {
        setup: function () {
          if (!hasVirtualBindings(this)) {
            $.data(this, dataPropertyName, {});
          }
          var bindings = $.data(this, dataPropertyName);
          bindings[eventType] = true;
          activeDocHandlers[eventType] =
            (activeDocHandlers[eventType] || 0) + 1;
          if (activeDocHandlers[eventType] === 1) {
            $document.bind(realType, mouseEventCallback);
          }
          $(this).bind(realType, dummyMouseHandler);
          if (eventCaptureSupported) {
            activeDocHandlers["touchstart"] =
              (activeDocHandlers["touchstart"] || 0) + 1;
            if (activeDocHandlers["touchstart"] === 1) {
              $document
                .bind("touchstart", handleTouchStart)
                .bind("touchend", handleTouchEnd)
                .bind("touchmove", handleTouchMove)
                .bind("scroll", handleScroll);
            }
          }
        },
        teardown: function () {
          --activeDocHandlers[eventType];
          if (!activeDocHandlers[eventType]) {
            $document.unbind(realType, mouseEventCallback);
          }
          if (eventCaptureSupported) {
            --activeDocHandlers["touchstart"];
            if (!activeDocHandlers["touchstart"]) {
              $document
                .unbind("touchstart", handleTouchStart)
                .unbind("touchmove", handleTouchMove)
                .unbind("touchend", handleTouchEnd)
                .unbind("scroll", handleScroll);
            }
          }
          var $this = $(this),
            bindings = $.data(this, dataPropertyName);
          if (bindings) {
            bindings[eventType] = false;
          }
          $this.unbind(realType, dummyMouseHandler);
          if (!hasVirtualBindings(this)) {
            $this.removeData(dataPropertyName);
          }
        },
      };
    }
    for (i = 0; i < virtualEventNames.length; i++) {
      $.event.special[virtualEventNames[i]] = getSpecialEventObject(
        virtualEventNames[i]
      );
    }
    if (eventCaptureSupported) {
      document.addEventListener(
        "click",
        function (e) {
          var cnt = clickBlockList.length,
            target = e.target,
            x,
            y,
            ele,
            i,
            o,
            touchID;
          if (cnt) {
            x = e.clientX;
            y = e.clientY;
            threshold = $.vmouse.clickDistanceThreshold;
            ele = target;
            while (ele) {
              for (i = 0; i < cnt; i++) {
                o = clickBlockList[i];
                touchID = 0;
                if (
                  (ele === target &&
                    Math.abs(o.x - x) < threshold &&
                    Math.abs(o.y - y) < threshold) ||
                  $.data(ele, touchTargetPropertyName) === o.touchID
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
              }
              ele = ele.parentNode;
            }
          }
        },
        true
      );
    }
  })(jQuery, window, document);
  (function ($) {
    $.mobile = {};
  })(jQuery);
  (function ($, undefined) {
    var support = { touch: "ontouchend" in document };
    $.mobile.support = $.mobile.support || {};
    $.extend($.support, support);
    $.extend($.mobile.support, support);
  })(jQuery);
  (function ($, window, undefined) {
    var $document = $(document),
      supportTouch = $.mobile.support.touch,
      scrollEvent = "touchmove scroll",
      touchStartEvent = supportTouch ? "touchstart" : "mousedown",
      touchStopEvent = supportTouch ? "touchend" : "mouseup",
      touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.each(
      (
        "touchstart touchmove touchend " +
        "tap taphold " +
        "swipe swipeleft swiperight " +
        "scrollstart scrollstop"
      ).split(" "),
      function (i, name) {
        $.fn[name] = function (fn) {
          return fn ? this.bind(name, fn) : this.trigger(name);
        };
        if ($.attrFn) {
          $.attrFn[name] = true;
        }
      }
    );
    function triggerCustomEvent(obj, eventType, event, bubble) {
      var originalType = event.type;
      event.type = eventType;
      if (bubble) {
        $.event.trigger(event, undefined, obj);
      } else {
        $.event.dispatch.call(obj, event);
      }
      event.type = originalType;
    }
    $.event.special.scrollstart = {
      enabled: true,
      setup: function () {
        var thisObject = this,
          $this = $(thisObject),
          scrolling,
          timer;
        function trigger(event, state) {
          scrolling = state;
          triggerCustomEvent(
            thisObject,
            scrolling ? "scrollstart" : "scrollstop",
            event
          );
        }
        $this.bind(scrollEvent, function (event) {
          if (!$.event.special.scrollstart.enabled) {
            return;
          }
          if (!scrolling) {
            trigger(event, true);
          }
          clearTimeout(timer);
          timer = setTimeout(function () {
            trigger(event, false);
          }, 50);
        });
      },
      teardown: function () {
        $(this).unbind(scrollEvent);
      },
    };
    $.event.special.tap = {
      tapholdThreshold: 750,
      emitTapOnTaphold: true,
      setup: function () {
        var thisObject = this,
          $this = $(thisObject),
          isTaphold = false;
        $this.bind("vmousedown", function (event) {
          isTaphold = false;
          if (event.which && event.which !== 1) {
            return false;
          }
          var origTarget = event.target,
            timer;
          function clearTapTimer() {
            clearTimeout(timer);
          }
          function clearTapHandlers() {
            clearTapTimer();
            $this
              .unbind("vclick", clickHandler)
              .unbind("vmouseup", clearTapTimer);
            $document.unbind("vmousecancel", clearTapHandlers);
          }
          function clickHandler(event) {
            clearTapHandlers();
            if (!isTaphold && origTarget === event.target) {
              triggerCustomEvent(thisObject, "tap", event);
            } else if (isTaphold) {
              event.preventDefault();
            }
          }
          $this.bind("vmouseup", clearTapTimer).bind("vclick", clickHandler);
          $document.bind("vmousecancel", clearTapHandlers);
          timer = setTimeout(function () {
            if (!$.event.special.tap.emitTapOnTaphold) {
              isTaphold = true;
            }
            triggerCustomEvent(
              thisObject,
              "taphold",
              $.Event("taphold", { target: origTarget })
            );
          }, $.event.special.tap.tapholdThreshold);
        });
      },
      teardown: function () {
        $(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
        $document.unbind("vmousecancel");
      },
    };
    $.event.special.swipe = {
      scrollSupressionThreshold: 30,
      durationThreshold: 1000,
      horizontalDistanceThreshold: 30,
      verticalDistanceThreshold: 30,
      getLocation: function (event) {
        var winPageX = window.pageXOffset,
          winPageY = window.pageYOffset,
          x = event.clientX,
          y = event.clientY;
        if (
          (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY)) ||
          (event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX))
        ) {
          x = x - winPageX;
          y = y - winPageY;
        } else if (y < event.pageY - winPageY || x < event.pageX - winPageX) {
          x = event.pageX - winPageX;
          y = event.pageY - winPageY;
        }
        return { x: x, y: y };
      },
      start: function (event) {
        var data = event.originalEvent.touches
            ? event.originalEvent.touches[0]
            : event,
          location = $.event.special.swipe.getLocation(data);
        return {
          time: new Date().getTime(),
          coords: [location.x, location.y],
          origin: $(event.target),
        };
      },
      stop: function (event) {
        var data = event.originalEvent.touches
            ? event.originalEvent.touches[0]
            : event,
          location = $.event.special.swipe.getLocation(data);
        return { time: new Date().getTime(), coords: [location.x, location.y] };
      },
      handleSwipe: function (start, stop, thisObject, origTarget) {
        if (
          stop.time - start.time < $.event.special.swipe.durationThreshold &&
          Math.abs(start.coords[0] - stop.coords[0]) >
            $.event.special.swipe.horizontalDistanceThreshold &&
          Math.abs(start.coords[1] - stop.coords[1]) <
            $.event.special.swipe.verticalDistanceThreshold
        ) {
          var direction =
            start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";
          triggerCustomEvent(
            thisObject,
            "swipe",
            $.Event("swipe", {
              target: origTarget,
              swipestart: start,
              swipestop: stop,
            }),
            true
          );
          triggerCustomEvent(
            thisObject,
            direction,
            $.Event(direction, {
              target: origTarget,
              swipestart: start,
              swipestop: stop,
            }),
            true
          );
          return true;
        }
        return false;
      },
      eventInProgress: false,
      setup: function () {
        var events,
          thisObject = this,
          $this = $(thisObject),
          context = {};
        events = $.data(this, "mobile-events");
        if (!events) {
          events = { length: 0 };
          $.data(this, "mobile-events", events);
        }
        events.length++;
        events.swipe = context;
        context.start = function (event) {
          if ($.event.special.swipe.eventInProgress) {
            return;
          }
          $.event.special.swipe.eventInProgress = true;
          var stop,
            start = $.event.special.swipe.start(event),
            origTarget = event.target,
            emitted = false;
          context.move = function (event) {
            if (!start || event.isDefaultPrevented()) {
              return;
            }
            stop = $.event.special.swipe.stop(event);
            if (!emitted) {
              emitted = $.event.special.swipe.handleSwipe(
                start,
                stop,
                thisObject,
                origTarget
              );
              if (emitted) {
                $.event.special.swipe.eventInProgress = false;
              }
            }
            if (
              Math.abs(start.coords[0] - stop.coords[0]) >
              $.event.special.swipe.scrollSupressionThreshold
            ) {
              event.preventDefault();
            }
          };
          context.stop = function () {
            emitted = true;
            $.event.special.swipe.eventInProgress = false;
            $document.off(touchMoveEvent, context.move);
            context.move = null;
          };
          $document
            .on(touchMoveEvent, context.move)
            .one(touchStopEvent, context.stop);
        };
        $this.on(touchStartEvent, context.start);
      },
      teardown: function () {
        var events, context;
        events = $.data(this, "mobile-events");
        if (events) {
          context = events.swipe;
          delete events.swipe;
          events.length--;
          if (events.length === 0) {
            $.removeData(this, "mobile-events");
          }
        }
        if (context) {
          if (context.start) {
            $(this).off(touchStartEvent, context.start);
          }
          if (context.move) {
            $document.off(touchMoveEvent, context.move);
          }
          if (context.stop) {
            $document.off(touchStopEvent, context.stop);
          }
        }
      },
    };
    $.each(
      {
        scrollstop: "scrollstart",
        taphold: "tap",
        swipeleft: "swipe.left",
        swiperight: "swipe.right",
      },
      function (event, sourceEvent) {
        $.event.special[event] = {
          setup: function () {
            $(this).bind(sourceEvent, $.noop);
          },
          teardown: function () {
            $(this).unbind(sourceEvent);
          },
        };
      }
    );
  })(jQuery, this);
});
(function () {
  function n(n, t) {
    return n.set(t[0], t[1]), n;
  }
  function t(n, t) {
    return n.add(t), n;
  }
  function r(n, t, r) {
    switch (r.length) {
      case 0:
        return n.call(t);
      case 1:
        return n.call(t, r[0]);
      case 2:
        return n.call(t, r[0], r[1]);
      case 3:
        return n.call(t, r[0], r[1], r[2]);
    }
    return n.apply(t, r);
  }
  function e(n, t, r, e) {
    for (var u = -1, i = null == n ? 0 : n.length; ++u < i; ) {
      var o = n[u];
      t(e, o, r(o), n);
    }
    return e;
  }
  function u(n, t) {
    for (
      var r = -1, e = null == n ? 0 : n.length;
      ++r < e && t(n[r], r, n) !== !1;

    );
    return n;
  }
  function i(n, t) {
    for (var r = null == n ? 0 : n.length; r-- && t(n[r], r, n) !== !1; );
    return n;
  }
  function o(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e; )
      if (!t(n[r], r, n)) return !1;
    return !0;
  }
  function f(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e; ) {
      var o = n[r];
      t(o, r, n) && (i[u++] = o);
    }
    return i;
  }
  function a(n, t) {
    var r = null == n ? 0 : n.length;
    return !!r && b(n, t, 0) > -1;
  }
  function c(n, t, r) {
    for (var e = -1, u = null == n ? 0 : n.length; ++e < u; )
      if (r(t, n[e])) return !0;
    return !1;
  }
  function l(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e; )
      u[r] = t(n[r], r, n);
    return u;
  }
  function s(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e; ) n[u + r] = t[r];
    return n;
  }
  function h(n, t, r, e) {
    var u = -1,
      i = null == n ? 0 : n.length;
    for (e && i && (r = n[++u]); ++u < i; ) r = t(r, n[u], u, n);
    return r;
  }
  function p(n, t, r, e) {
    var u = null == n ? 0 : n.length;
    for (e && u && (r = n[--u]); u--; ) r = t(r, n[u], u, n);
    return r;
  }
  function v(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e; )
      if (t(n[r], r, n)) return !0;
    return !1;
  }
  function _(n) {
    return n.split("");
  }
  function g(n) {
    return n.match(Dt) || [];
  }
  function y(n, t, r) {
    var e;
    return (
      r(n, function (n, r, u) {
        if (t(n, r, u)) return (e = r), !1;
      }),
      e
    );
  }
  function d(n, t, r, e) {
    for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u; )
      if (t(n[i], i, n)) return i;
    return -1;
  }
  function b(n, t, r) {
    return t === t ? K(n, t, r) : d(n, m, r);
  }
  function w(n, t, r, e) {
    for (var u = r - 1, i = n.length; ++u < i; ) if (e(n[u], t)) return u;
    return -1;
  }
  function m(n) {
    return n !== n;
  }
  function x(n, t) {
    var r = null == n ? 0 : n.length;
    return r ? I(n, t) / r : Ln;
  }
  function j(n) {
    return function (t) {
      return null == t ? X : t[n];
    };
  }
  function A(n) {
    return function (t) {
      return null == n ? X : n[t];
    };
  }
  function k(n, t, r, e, u) {
    return (
      u(n, function (n, u, i) {
        r = e ? ((e = !1), n) : t(r, n, u, i);
      }),
      r
    );
  }
  function O(n, t) {
    var r = n.length;
    for (n.sort(t); r--; ) n[r] = n[r].value;
    return n;
  }
  function I(n, t) {
    for (var r, e = -1, u = n.length; ++e < u; ) {
      var i = t(n[e]);
      i !== X && (r = r === X ? i : r + i);
    }
    return r;
  }
  function R(n, t) {
    for (var r = -1, e = Array(n); ++r < n; ) e[r] = t(r);
    return e;
  }
  function z(n, t) {
    return l(t, function (t) {
      return [t, n[t]];
    });
  }
  function E(n) {
    return function (t) {
      return n(t);
    };
  }
  function S(n, t) {
    return l(t, function (t) {
      return n[t];
    });
  }
  function W(n, t) {
    return n.has(t);
  }
  function L(n, t) {
    for (var r = -1, e = n.length; ++r < e && b(t, n[r], 0) > -1; );
    return r;
  }
  function C(n, t) {
    for (var r = n.length; r-- && b(t, n[r], 0) > -1; );
    return r;
  }
  function U(n, t) {
    for (var r = n.length, e = 0; r--; ) n[r] === t && ++e;
    return e;
  }
  function B(n) {
    return "\\" + Yr[n];
  }
  function T(n, t) {
    return null == n ? X : n[t];
  }
  function $(n) {
    return Nr.test(n);
  }
  function D(n) {
    return Pr.test(n);
  }
  function M(n) {
    for (var t, r = []; !(t = n.next()).done; ) r.push(t.value);
    return r;
  }
  function F(n) {
    var t = -1,
      r = Array(n.size);
    return (
      n.forEach(function (n, e) {
        r[++t] = [e, n];
      }),
      r
    );
  }
  function N(n, t) {
    return function (r) {
      return n(t(r));
    };
  }
  function P(n, t) {
    for (var r = -1, e = n.length, u = 0, i = []; ++r < e; ) {
      var o = n[r];
      (o !== t && o !== fn) || ((n[r] = fn), (i[u++] = r));
    }
    return i;
  }
  function q(n) {
    var t = -1,
      r = Array(n.size);
    return (
      n.forEach(function (n) {
        r[++t] = n;
      }),
      r
    );
  }
  function Z(n) {
    var t = -1,
      r = Array(n.size);
    return (
      n.forEach(function (n) {
        r[++t] = [n, n];
      }),
      r
    );
  }
  function K(n, t, r) {
    for (var e = r - 1, u = n.length; ++e < u; ) if (n[e] === t) return e;
    return -1;
  }
  function V(n, t, r) {
    for (var e = r + 1; e--; ) if (n[e] === t) return e;
    return e;
  }
  function G(n) {
    return $(n) ? J(n) : ve(n);
  }
  function H(n) {
    return $(n) ? Y(n) : _(n);
  }
  function J(n) {
    for (var t = (Mr.lastIndex = 0); Mr.test(n); ) ++t;
    return t;
  }
  function Y(n) {
    return n.match(Mr) || [];
  }
  function Q(n) {
    return n.match(Fr) || [];
  }
  var X,
    nn = "4.17.4",
    tn = 200,
    rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
    en = "Expected a function",
    un = "__lodash_hash_undefined__",
    on = 500,
    fn = "__lodash_placeholder__",
    an = 1,
    cn = 2,
    ln = 4,
    sn = 1,
    hn = 2,
    pn = 1,
    vn = 2,
    _n = 4,
    gn = 8,
    yn = 16,
    dn = 32,
    bn = 64,
    wn = 128,
    mn = 256,
    xn = 512,
    jn = 30,
    An = "...",
    kn = 800,
    On = 16,
    In = 1,
    Rn = 2,
    zn = 3,
    En = 1 / 0,
    Sn = 9007199254740991,
    Wn = 1.7976931348623157e308,
    Ln = NaN,
    Cn = 4294967295,
    Un = Cn - 1,
    Bn = Cn >>> 1,
    Tn = [
      ["ary", wn],
      ["bind", pn],
      ["bindKey", vn],
      ["curry", gn],
      ["curryRight", yn],
      ["flip", xn],
      ["partial", dn],
      ["partialRight", bn],
      ["rearg", mn],
    ],
    $n = "[object Arguments]",
    Dn = "[object Array]",
    Mn = "[object AsyncFunction]",
    Fn = "[object Boolean]",
    Nn = "[object Date]",
    Pn = "[object DOMException]",
    qn = "[object Error]",
    Zn = "[object Function]",
    Kn = "[object GeneratorFunction]",
    Vn = "[object Map]",
    Gn = "[object Number]",
    Hn = "[object Null]",
    Jn = "[object Object]",
    Yn = "[object Promise]",
    Qn = "[object Proxy]",
    Xn = "[object RegExp]",
    nt = "[object Set]",
    tt = "[object String]",
    rt = "[object Symbol]",
    et = "[object Undefined]",
    ut = "[object WeakMap]",
    it = "[object WeakSet]",
    ot = "[object ArrayBuffer]",
    ft = "[object DataView]",
    at = "[object Float32Array]",
    ct = "[object Float64Array]",
    lt = "[object Int8Array]",
    st = "[object Int16Array]",
    ht = "[object Int32Array]",
    pt = "[object Uint8Array]",
    vt = "[object Uint8ClampedArray]",
    _t = "[object Uint16Array]",
    gt = "[object Uint32Array]",
    yt = /\b__p \+= '';/g,
    dt = /\b(__p \+=) '' \+/g,
    bt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    wt = /&(?:amp|lt|gt|quot|#39);/g,
    mt = /[&<>"']/g,
    xt = RegExp(wt.source),
    jt = RegExp(mt.source),
    At = /<%-([\s\S]+?)%>/g,
    kt = /<%([\s\S]+?)%>/g,
    Ot = /<%=([\s\S]+?)%>/g,
    It = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Rt = /^\w*$/,
    zt = /^\./,
    Et =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    St = /[\\^$.*+?()[\]{}|]/g,
    Wt = RegExp(St.source),
    Lt = /^\s+|\s+$/g,
    Ct = /^\s+/,
    Ut = /\s+$/,
    Bt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    Tt = /\{\n\/\* \[wrapped with (.+)\] \*/,
    $t = /,? & /,
    Dt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    Mt = /\\(\\)?/g,
    Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    Nt = /\w*$/,
    Pt = /^[-+]0x[0-9a-f]+$/i,
    qt = /^0b[01]+$/i,
    Zt = /^\[object .+?Constructor\]$/,
    Kt = /^0o[0-7]+$/i,
    Vt = /^(?:0|[1-9]\d*)$/,
    Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    Ht = /($^)/,
    Jt = /['\n\r\u2028\u2029\\]/g,
    Yt = "\\ud800-\\udfff",
    Qt = "\\u0300-\\u036f",
    Xt = "\\ufe20-\\ufe2f",
    nr = "\\u20d0-\\u20ff",
    tr = Qt + Xt + nr,
    rr = "\\u2700-\\u27bf",
    er = "a-z\\xdf-\\xf6\\xf8-\\xff",
    ur = "\\xac\\xb1\\xd7\\xf7",
    ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    or = "\\u2000-\\u206f",
    fr =
      " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    ar = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    cr = "\\ufe0e\\ufe0f",
    lr = ur + ir + or + fr,
    sr = "['â€™]",
    hr = "[" + Yt + "]",
    pr = "[" + lr + "]",
    vr = "[" + tr + "]",
    _r = "\\d+",
    gr = "[" + rr + "]",
    yr = "[" + er + "]",
    dr = "[^" + Yt + lr + _r + rr + er + ar + "]",
    br = "\\ud83c[\\udffb-\\udfff]",
    wr = "(?:" + vr + "|" + br + ")",
    mr = "[^" + Yt + "]",
    xr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    jr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Ar = "[" + ar + "]",
    kr = "\\u200d",
    Or = "(?:" + yr + "|" + dr + ")",
    Ir = "(?:" + Ar + "|" + dr + ")",
    Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?",
    zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?",
    Er = wr + "?",
    Sr = "[" + cr + "]?",
    Wr = "(?:" + kr + "(?:" + [mr, xr, jr].join("|") + ")" + Sr + Er + ")*",
    Lr = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",
    Cr = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
    Ur = Sr + Er + Wr,
    Br = "(?:" + [gr, xr, jr].join("|") + ")" + Ur,
    Tr = "(?:" + [mr + vr + "?", vr, xr, jr, hr].join("|") + ")",
    $r = RegExp(sr, "g"),
    Dr = RegExp(vr, "g"),
    Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"),
    Fr = RegExp(
      [
        Ar + "?" + yr + "+" + Rr + "(?=" + [pr, Ar, "$"].join("|") + ")",
        Ir + "+" + zr + "(?=" + [pr, Ar + Or, "$"].join("|") + ")",
        Ar + "?" + Or + "+" + Rr,
        Ar + "+" + zr,
        Cr,
        Lr,
        _r,
        Br,
      ].join("|"),
      "g"
    ),
    Nr = RegExp("[" + kr + Yt + tr + cr + "]"),
    Pr = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    qr = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout",
    ],
    Zr = -1,
    Kr = {};
  (Kr[at] =
    Kr[ct] =
    Kr[lt] =
    Kr[st] =
    Kr[ht] =
    Kr[pt] =
    Kr[vt] =
    Kr[_t] =
    Kr[gt] =
      !0),
    (Kr[$n] =
      Kr[Dn] =
      Kr[ot] =
      Kr[Fn] =
      Kr[ft] =
      Kr[Nn] =
      Kr[qn] =
      Kr[Zn] =
      Kr[Vn] =
      Kr[Gn] =
      Kr[Jn] =
      Kr[Xn] =
      Kr[nt] =
      Kr[tt] =
      Kr[ut] =
        !1);
  var Vr = {};
  (Vr[$n] =
    Vr[Dn] =
    Vr[ot] =
    Vr[ft] =
    Vr[Fn] =
    Vr[Nn] =
    Vr[at] =
    Vr[ct] =
    Vr[lt] =
    Vr[st] =
    Vr[ht] =
    Vr[Vn] =
    Vr[Gn] =
    Vr[Jn] =
    Vr[Xn] =
    Vr[nt] =
    Vr[tt] =
    Vr[rt] =
    Vr[pt] =
    Vr[vt] =
    Vr[_t] =
    Vr[gt] =
      !0),
    (Vr[qn] = Vr[Zn] = Vr[ut] = !1);
  var Gr = {
      "Ã€": "A",
      "Ã": "A",
      "Ã‚": "A",
      Ãƒ: "A",
      "Ã„": "A",
      "Ã…": "A",
      "Ã ": "a",
      "Ã¡": "a",
      "Ã¢": "a",
      "Ã£": "a",
      "Ã¤": "a",
      "Ã¥": "a",
      "Ã‡": "C",
      "Ã§": "c",
      "Ã": "D",
      "Ã°": "d",
      Ãˆ: "E",
      "Ã‰": "E",
      ÃŠ: "E",
      "Ã‹": "E",
      "Ã¨": "e",
      "Ã©": "e",
      Ãª: "e",
      "Ã«": "e",
      ÃŒ: "I",
      "Ã": "I",
      ÃŽ: "I",
      "Ã": "I",
      "Ã¬": "i",
      "Ã­": "i",
      "Ã®": "i",
      "Ã¯": "i",
      "Ã‘": "N",
      "Ã±": "n",
      "Ã’": "O",
      "Ã“": "O",
      "Ã”": "O",
      "Ã•": "O",
      "Ã–": "O",
      "Ã˜": "O",
      "Ã²": "o",
      "Ã³": "o",
      "Ã´": "o",
      Ãµ: "o",
      "Ã¶": "o",
      "Ã¸": "o",
      "Ã™": "U",
      Ãš: "U",
      "Ã›": "U",
      Ãœ: "U",
      "Ã¹": "u",
      Ãº: "u",
      "Ã»": "u",
      "Ã¼": "u",
      "Ã": "Y",
      "Ã½": "y",
      "Ã¿": "y",
      "Ã†": "Ae",
      "Ã¦": "ae",
      Ãž: "Th",
      "Ã¾": "th",
      ÃŸ: "ss",
      "Ä€": "A",
      "Ä‚": "A",
      "Ä„": "A",
      "Ä": "a",
      Äƒ: "a",
      "Ä…": "a",
      "Ä†": "C",
      Äˆ: "C",
      ÄŠ: "C",
      ÄŒ: "C",
      "Ä‡": "c",
      "Ä‰": "c",
      "Ä‹": "c",
      "Ä": "c",
      ÄŽ: "D",
      "Ä": "D",
      "Ä": "d",
      "Ä‘": "d",
      "Ä’": "E",
      "Ä”": "E",
      "Ä–": "E",
      "Ä˜": "E",
      Äš: "E",
      "Ä“": "e",
      "Ä•": "e",
      "Ä—": "e",
      "Ä™": "e",
      "Ä›": "e",
      Äœ: "G",
      Äž: "G",
      "Ä ": "G",
      "Ä¢": "G",
      "Ä": "g",
      ÄŸ: "g",
      "Ä¡": "g",
      "Ä£": "g",
      "Ä¤": "H",
      "Ä¦": "H",
      "Ä¥": "h",
      "Ä§": "h",
      "Ä¨": "I",
      Äª: "I",
      "Ä¬": "I",
      "Ä®": "I",
      "Ä°": "I",
      "Ä©": "i",
      "Ä«": "i",
      "Ä­": "i",
      "Ä¯": "i",
      "Ä±": "i",
      "Ä´": "J",
      Äµ: "j",
      "Ä¶": "K",
      "Ä·": "k",
      "Ä¸": "k",
      "Ä¹": "L",
      "Ä»": "L",
      "Ä½": "L",
      "Ä¿": "L",
      "Å": "L",
      Äº: "l",
      "Ä¼": "l",
      "Ä¾": "l",
      "Å€": "l",
      "Å‚": "l",
      Åƒ: "N",
      "Å…": "N",
      "Å‡": "N",
      ÅŠ: "N",
      "Å„": "n",
      "Å†": "n",
      Åˆ: "n",
      "Å‹": "n",
      ÅŒ: "O",
      ÅŽ: "O",
      "Å": "O",
      "Å": "o",
      "Å": "o",
      "Å‘": "o",
      "Å”": "R",
      "Å–": "R",
      "Å˜": "R",
      "Å•": "r",
      "Å—": "r",
      "Å™": "r",
      Åš: "S",
      Åœ: "S",
      Åž: "S",
      "Å ": "S",
      "Å›": "s",
      "Å": "s",
      ÅŸ: "s",
      "Å¡": "s",
      "Å¢": "T",
      "Å¤": "T",
      "Å¦": "T",
      "Å£": "t",
      "Å¥": "t",
      "Å§": "t",
      "Å¨": "U",
      Åª: "U",
      "Å¬": "U",
      "Å®": "U",
      "Å°": "U",
      "Å²": "U",
      "Å©": "u",
      "Å«": "u",
      "Å­": "u",
      "Å¯": "u",
      "Å±": "u",
      "Å³": "u",
      "Å´": "W",
      Åµ: "w",
      "Å¶": "Y",
      "Å·": "y",
      "Å¸": "Y",
      "Å¹": "Z",
      "Å»": "Z",
      "Å½": "Z",
      Åº: "z",
      "Å¼": "z",
      "Å¾": "z",
      "Ä²": "IJ",
      "Ä³": "ij",
      "Å’": "Oe",
      "Å“": "oe",
      "Å‰": "'n",
      "Å¿": "s",
    },
    Hr = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Jr = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    },
    Yr = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Qr = parseFloat,
    Xr = parseInt,
    ne =
      "object" == typeof global && global && global.Object === Object && global,
    te = "object" == typeof self && self && self.Object === Object && self,
    re = ne || te || Function("return this")(),
    ee = "object" == typeof exports && exports && !exports.nodeType && exports,
    ue =
      ee && "object" == typeof module && module && !module.nodeType && module,
    ie = ue && ue.exports === ee,
    oe = ie && ne.process,
    fe = (function () {
      try {
        return oe && oe.binding && oe.binding("util");
      } catch (n) {}
    })(),
    ae = fe && fe.isArrayBuffer,
    ce = fe && fe.isDate,
    le = fe && fe.isMap,
    se = fe && fe.isRegExp,
    he = fe && fe.isSet,
    pe = fe && fe.isTypedArray,
    ve = j("length"),
    _e = A(Gr),
    ge = A(Hr),
    ye = A(Jr),
    de = function _(A) {
      function K(n) {
        if (la(n) && !mh(n) && !(n instanceof Dt)) {
          if (n instanceof Y) return n;
          if (ml.call(n, "__wrapped__")) return io(n);
        }
        return new Y(n);
      }
      function J() {}
      function Y(n, t) {
        (this.__wrapped__ = n),
          (this.__actions__ = []),
          (this.__chain__ = !!t),
          (this.__index__ = 0),
          (this.__values__ = X);
      }
      function Dt(n) {
        (this.__wrapped__ = n),
          (this.__actions__ = []),
          (this.__dir__ = 1),
          (this.__filtered__ = !1),
          (this.__iteratees__ = []),
          (this.__takeCount__ = Cn),
          (this.__views__ = []);
      }
      function Yt() {
        var n = new Dt(this.__wrapped__);
        return (
          (n.__actions__ = Mu(this.__actions__)),
          (n.__dir__ = this.__dir__),
          (n.__filtered__ = this.__filtered__),
          (n.__iteratees__ = Mu(this.__iteratees__)),
          (n.__takeCount__ = this.__takeCount__),
          (n.__views__ = Mu(this.__views__)),
          n
        );
      }
      function Qt() {
        if (this.__filtered__) {
          var n = new Dt(this);
          (n.__dir__ = -1), (n.__filtered__ = !0);
        } else (n = this.clone()), (n.__dir__ *= -1);
        return n;
      }
      function Xt() {
        var n = this.__wrapped__.value(),
          t = this.__dir__,
          r = mh(n),
          e = t < 0,
          u = r ? n.length : 0,
          i = zi(0, u, this.__views__),
          o = i.start,
          f = i.end,
          a = f - o,
          c = e ? f : o - 1,
          l = this.__iteratees__,
          s = l.length,
          h = 0,
          p = Yl(a, this.__takeCount__);
        if (!r || (!e && u == a && p == a)) return mu(n, this.__actions__);
        var v = [];
        n: for (; a-- && h < p; ) {
          c += t;
          for (var _ = -1, g = n[c]; ++_ < s; ) {
            var y = l[_],
              d = y.iteratee,
              b = y.type,
              w = d(g);
            if (b == Rn) g = w;
            else if (!w) {
              if (b == In) continue n;
              break n;
            }
          }
          v[h++] = g;
        }
        return v;
      }
      function nr(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.clear(); ++t < r; ) {
          var e = n[t];
          this.set(e[0], e[1]);
        }
      }
      function tr() {
        (this.__data__ = fs ? fs(null) : {}), (this.size = 0);
      }
      function rr(n) {
        var t = this.has(n) && delete this.__data__[n];
        return (this.size -= t ? 1 : 0), t;
      }
      function er(n) {
        var t = this.__data__;
        if (fs) {
          var r = t[n];
          return r === un ? X : r;
        }
        return ml.call(t, n) ? t[n] : X;
      }
      function ur(n) {
        var t = this.__data__;
        return fs ? t[n] !== X : ml.call(t, n);
      }
      function ir(n, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(n) ? 0 : 1),
          (r[n] = fs && t === X ? un : t),
          this
        );
      }
      function or(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.clear(); ++t < r; ) {
          var e = n[t];
          this.set(e[0], e[1]);
        }
      }
      function fr() {
        (this.__data__ = []), (this.size = 0);
      }
      function ar(n) {
        var t = this.__data__,
          r = Lr(t, n);
        if (r < 0) return !1;
        var e = t.length - 1;
        return r == e ? t.pop() : Ul.call(t, r, 1), --this.size, !0;
      }
      function cr(n) {
        var t = this.__data__,
          r = Lr(t, n);
        return r < 0 ? X : t[r][1];
      }
      function lr(n) {
        return Lr(this.__data__, n) > -1;
      }
      function sr(n, t) {
        var r = this.__data__,
          e = Lr(r, n);
        return e < 0 ? (++this.size, r.push([n, t])) : (r[e][1] = t), this;
      }
      function hr(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.clear(); ++t < r; ) {
          var e = n[t];
          this.set(e[0], e[1]);
        }
      }
      function pr() {
        (this.size = 0),
          (this.__data__ = {
            hash: new nr(),
            map: new (es || or)(),
            string: new nr(),
          });
      }
      function vr(n) {
        var t = ki(this, n).delete(n);
        return (this.size -= t ? 1 : 0), t;
      }
      function _r(n) {
        return ki(this, n).get(n);
      }
      function gr(n) {
        return ki(this, n).has(n);
      }
      function yr(n, t) {
        var r = ki(this, n),
          e = r.size;
        return r.set(n, t), (this.size += r.size == e ? 0 : 1), this;
      }
      function dr(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.__data__ = new hr(); ++t < r; ) this.add(n[t]);
      }
      function br(n) {
        return this.__data__.set(n, un), this;
      }
      function wr(n) {
        return this.__data__.has(n);
      }
      function mr(n) {
        var t = (this.__data__ = new or(n));
        this.size = t.size;
      }
      function xr() {
        (this.__data__ = new or()), (this.size = 0);
      }
      function jr(n) {
        var t = this.__data__,
          r = t.delete(n);
        return (this.size = t.size), r;
      }
      function Ar(n) {
        return this.__data__.get(n);
      }
      function kr(n) {
        return this.__data__.has(n);
      }
      function Or(n, t) {
        var r = this.__data__;
        if (r instanceof or) {
          var e = r.__data__;
          if (!es || e.length < tn - 1)
            return e.push([n, t]), (this.size = ++r.size), this;
          r = this.__data__ = new hr(e);
        }
        return r.set(n, t), (this.size = r.size), this;
      }
      function Ir(n, t) {
        var r = mh(n),
          e = !r && wh(n),
          u = !r && !e && jh(n),
          i = !r && !e && !u && Rh(n),
          o = r || e || u || i,
          f = o ? R(n.length, vl) : [],
          a = f.length;
        for (var c in n)
          (!t && !ml.call(n, c)) ||
            (o &&
              ("length" == c ||
                (u && ("offset" == c || "parent" == c)) ||
                (i &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                Ti(c, a))) ||
            f.push(c);
        return f;
      }
      function Rr(n) {
        var t = n.length;
        return t ? n[ru(0, t - 1)] : X;
      }
      function zr(n, t) {
        return to(Mu(n), Fr(t, 0, n.length));
      }
      function Er(n) {
        return to(Mu(n));
      }
      function Sr(n, t, r) {
        ((r === X || Jf(n[t], r)) && (r !== X || t in n)) || Tr(n, t, r);
      }
      function Wr(n, t, r) {
        var e = n[t];
        (ml.call(n, t) && Jf(e, r) && (r !== X || t in n)) || Tr(n, t, r);
      }
      function Lr(n, t) {
        for (var r = n.length; r--; ) if (Jf(n[r][0], t)) return r;
        return -1;
      }
      function Cr(n, t, r, e) {
        return (
          bs(n, function (n, u, i) {
            t(e, n, r(n), i);
          }),
          e
        );
      }
      function Ur(n, t) {
        return n && Fu(t, Za(t), n);
      }
      function Br(n, t) {
        return n && Fu(t, Ka(t), n);
      }
      function Tr(n, t, r) {
        "__proto__" == t && Dl
          ? Dl(n, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (n[t] = r);
      }
      function Mr(n, t) {
        for (var r = -1, e = t.length, u = fl(e), i = null == n; ++r < e; )
          u[r] = i ? X : Na(n, t[r]);
        return u;
      }
      function Fr(n, t, r) {
        return (
          n === n &&
            (r !== X && (n = n <= r ? n : r), t !== X && (n = n >= t ? n : t)),
          n
        );
      }
      function Nr(n, t, r, e, i, o) {
        var f,
          a = t & an,
          c = t & cn,
          l = t & ln;
        if ((r && (f = i ? r(n, e, i, o) : r(n)), f !== X)) return f;
        if (!ca(n)) return n;
        var s = mh(n);
        if (s) {
          if (((f = Wi(n)), !a)) return Mu(n, f);
        } else {
          var h = Ss(n),
            p = h == Zn || h == Kn;
          if (jh(n)) return Ru(n, a);
          if (h == Jn || h == $n || (p && !i)) {
            if (((f = c || p ? {} : Li(n)), !a))
              return c ? Pu(n, Br(f, n)) : Nu(n, Ur(f, n));
          } else {
            if (!Vr[h]) return i ? n : {};
            f = Ci(n, h, Nr, a);
          }
        }
        o || (o = new mr());
        var v = o.get(n);
        if (v) return v;
        o.set(n, f);
        var _ = l ? (c ? mi : wi) : c ? Ka : Za,
          g = s ? X : _(n);
        return (
          u(g || n, function (e, u) {
            g && ((u = e), (e = n[u])), Wr(f, u, Nr(e, t, r, u, n, o));
          }),
          f
        );
      }
      function Pr(n) {
        var t = Za(n);
        return function (r) {
          return Gr(r, n, t);
        };
      }
      function Gr(n, t, r) {
        var e = r.length;
        if (null == n) return !e;
        for (n = hl(n); e--; ) {
          var u = r[e],
            i = t[u],
            o = n[u];
          if ((o === X && !(u in n)) || !i(o)) return !1;
        }
        return !0;
      }
      function Hr(n, t, r) {
        if ("function" != typeof n) throw new _l(en);
        return Cs(function () {
          n.apply(X, r);
        }, t);
      }
      function Jr(n, t, r, e) {
        var u = -1,
          i = a,
          o = !0,
          f = n.length,
          s = [],
          h = t.length;
        if (!f) return s;
        r && (t = l(t, E(r))),
          e
            ? ((i = c), (o = !1))
            : t.length >= tn && ((i = W), (o = !1), (t = new dr(t)));
        n: for (; ++u < f; ) {
          var p = n[u],
            v = null == r ? p : r(p);
          if (((p = e || 0 !== p ? p : 0), o && v === v)) {
            for (var _ = h; _--; ) if (t[_] === v) continue n;
            s.push(p);
          } else i(t, v, e) || s.push(p);
        }
        return s;
      }
      function Yr(n, t) {
        var r = !0;
        return (
          bs(n, function (n, e, u) {
            return (r = !!t(n, e, u));
          }),
          r
        );
      }
      function ne(n, t, r) {
        for (var e = -1, u = n.length; ++e < u; ) {
          var i = n[e],
            o = t(i);
          if (null != o && (f === X ? o === o && !ma(o) : r(o, f)))
            var f = o,
              a = i;
        }
        return a;
      }
      function te(n, t, r, e) {
        var u = n.length;
        for (
          r = Ia(r),
            r < 0 && (r = -r > u ? 0 : u + r),
            e = e === X || e > u ? u : Ia(e),
            e < 0 && (e += u),
            e = r > e ? 0 : Ra(e);
          r < e;

        )
          n[r++] = t;
        return n;
      }
      function ee(n, t) {
        var r = [];
        return (
          bs(n, function (n, e, u) {
            t(n, e, u) && r.push(n);
          }),
          r
        );
      }
      function ue(n, t, r, e, u) {
        var i = -1,
          o = n.length;
        for (r || (r = Bi), u || (u = []); ++i < o; ) {
          var f = n[i];
          t > 0 && r(f)
            ? t > 1
              ? ue(f, t - 1, r, e, u)
              : s(u, f)
            : e || (u[u.length] = f);
        }
        return u;
      }
      function oe(n, t) {
        return n && ms(n, t, Za);
      }
      function fe(n, t) {
        return n && xs(n, t, Za);
      }
      function ve(n, t) {
        return f(t, function (t) {
          return oa(n[t]);
        });
      }
      function de(n, t) {
        t = Ou(t, n);
        for (var r = 0, e = t.length; null != n && r < e; ) n = n[ro(t[r++])];
        return r && r == e ? n : X;
      }
      function we(n, t, r) {
        var e = t(n);
        return mh(n) ? e : s(e, r(n));
      }
      function me(n) {
        return null == n
          ? n === X
            ? et
            : Hn
          : $l && $l in hl(n)
          ? Ri(n)
          : Hi(n);
      }
      function xe(n, t) {
        return n > t;
      }
      function je(n, t) {
        return null != n && ml.call(n, t);
      }
      function Ae(n, t) {
        return null != n && t in hl(n);
      }
      function ke(n, t, r) {
        return n >= Yl(t, r) && n < Jl(t, r);
      }
      function Oe(n, t, r) {
        for (
          var e = r ? c : a,
            u = n[0].length,
            i = n.length,
            o = i,
            f = fl(i),
            s = 1 / 0,
            h = [];
          o--;

        ) {
          var p = n[o];
          o && t && (p = l(p, E(t))),
            (s = Yl(p.length, s)),
            (f[o] =
              !r && (t || (u >= 120 && p.length >= 120)) ? new dr(o && p) : X);
        }
        p = n[0];
        var v = -1,
          _ = f[0];
        n: for (; ++v < u && h.length < s; ) {
          var g = p[v],
            y = t ? t(g) : g;
          if (((g = r || 0 !== g ? g : 0), !(_ ? W(_, y) : e(h, y, r)))) {
            for (o = i; --o; ) {
              var d = f[o];
              if (!(d ? W(d, y) : e(n[o], y, r))) continue n;
            }
            _ && _.push(y), h.push(g);
          }
        }
        return h;
      }
      function Ie(n, t, r, e) {
        return (
          oe(n, function (n, u, i) {
            t(e, r(n), u, i);
          }),
          e
        );
      }
      function Re(n, t, e) {
        (t = Ou(t, n)), (n = Yi(n, t));
        var u = null == n ? n : n[ro(ko(t))];
        return null == u ? X : r(u, n, e);
      }
      function ze(n) {
        return la(n) && me(n) == $n;
      }
      function Ee(n) {
        return la(n) && me(n) == ot;
      }
      function Se(n) {
        return la(n) && me(n) == Nn;
      }
      function We(n, t, r, e, u) {
        return (
          n === t ||
          (null == n || null == t || (!la(n) && !la(t))
            ? n !== n && t !== t
            : Le(n, t, r, e, We, u))
        );
      }
      function Le(n, t, r, e, u, i) {
        var o = mh(n),
          f = mh(t),
          a = o ? Dn : Ss(n),
          c = f ? Dn : Ss(t);
        (a = a == $n ? Jn : a), (c = c == $n ? Jn : c);
        var l = a == Jn,
          s = c == Jn,
          h = a == c;
        if (h && jh(n)) {
          if (!jh(t)) return !1;
          (o = !0), (l = !1);
        }
        if (h && !l)
          return (
            i || (i = new mr()),
            o || Rh(n) ? gi(n, t, r, e, u, i) : yi(n, t, a, r, e, u, i)
          );
        if (!(r & sn)) {
          var p = l && ml.call(n, "__wrapped__"),
            v = s && ml.call(t, "__wrapped__");
          if (p || v) {
            var _ = p ? n.value() : n,
              g = v ? t.value() : t;
            return i || (i = new mr()), u(_, g, r, e, i);
          }
        }
        return !!h && (i || (i = new mr()), di(n, t, r, e, u, i));
      }
      function Ce(n) {
        return la(n) && Ss(n) == Vn;
      }
      function Ue(n, t, r, e) {
        var u = r.length,
          i = u,
          o = !e;
        if (null == n) return !i;
        for (n = hl(n); u--; ) {
          var f = r[u];
          if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1;
        }
        for (; ++u < i; ) {
          f = r[u];
          var a = f[0],
            c = n[a],
            l = f[1];
          if (o && f[2]) {
            if (c === X && !(a in n)) return !1;
          } else {
            var s = new mr();
            if (e) var h = e(c, l, a, n, t, s);
            if (!(h === X ? We(l, c, sn | hn, e, s) : h)) return !1;
          }
        }
        return !0;
      }
      function Be(n) {
        if (!ca(n) || Ni(n)) return !1;
        var t = oa(n) ? Il : Zt;
        return t.test(eo(n));
      }
      function Te(n) {
        return la(n) && me(n) == Xn;
      }
      function $e(n) {
        return la(n) && Ss(n) == nt;
      }
      function De(n) {
        return la(n) && aa(n.length) && !!Kr[me(n)];
      }
      function Me(n) {
        return "function" == typeof n
          ? n
          : null == n
          ? Uc
          : "object" == typeof n
          ? mh(n)
            ? Ke(n[0], n[1])
            : Ze(n)
          : Pc(n);
      }
      function Fe(n) {
        if (!Pi(n)) return Hl(n);
        var t = [];
        for (var r in hl(n)) ml.call(n, r) && "constructor" != r && t.push(r);
        return t;
      }
      function Ne(n) {
        if (!ca(n)) return Gi(n);
        var t = Pi(n),
          r = [];
        for (var e in n)
          ("constructor" != e || (!t && ml.call(n, e))) && r.push(e);
        return r;
      }
      function Pe(n, t) {
        return n < t;
      }
      function qe(n, t) {
        var r = -1,
          e = Yf(n) ? fl(n.length) : [];
        return (
          bs(n, function (n, u, i) {
            e[++r] = t(n, u, i);
          }),
          e
        );
      }
      function Ze(n) {
        var t = Oi(n);
        return 1 == t.length && t[0][2]
          ? Zi(t[0][0], t[0][1])
          : function (r) {
              return r === n || Ue(r, n, t);
            };
      }
      function Ke(n, t) {
        return Di(n) && qi(t)
          ? Zi(ro(n), t)
          : function (r) {
              var e = Na(r, n);
              return e === X && e === t ? qa(r, n) : We(t, e, sn | hn);
            };
      }
      function Ve(n, t, r, e, u) {
        n !== t &&
          ms(
            t,
            function (i, o) {
              if (ca(i)) u || (u = new mr()), Ge(n, t, o, r, Ve, e, u);
              else {
                var f = e ? e(n[o], i, o + "", n, t, u) : X;
                f === X && (f = i), Sr(n, o, f);
              }
            },
            Ka
          );
      }
      function Ge(n, t, r, e, u, i, o) {
        var f = n[r],
          a = t[r],
          c = o.get(a);
        if (c) return void Sr(n, r, c);
        var l = i ? i(f, a, r + "", n, t, o) : X,
          s = l === X;
        if (s) {
          var h = mh(a),
            p = !h && jh(a),
            v = !h && !p && Rh(a);
          (l = a),
            h || p || v
              ? mh(f)
                ? (l = f)
                : Qf(f)
                ? (l = Mu(f))
                : p
                ? ((s = !1), (l = Ru(a, !0)))
                : v
                ? ((s = !1), (l = Uu(a, !0)))
                : (l = [])
              : da(a) || wh(a)
              ? ((l = f),
                wh(f) ? (l = Ea(f)) : (!ca(f) || (e && oa(f))) && (l = Li(a)))
              : (s = !1);
        }
        s && (o.set(a, l), u(l, a, e, i, o), o.delete(a)), Sr(n, r, l);
      }
      function He(n, t) {
        var r = n.length;
        if (r) return (t += t < 0 ? r : 0), Ti(t, r) ? n[t] : X;
      }
      function Je(n, t, r) {
        var e = -1;
        t = l(t.length ? t : [Uc], E(Ai()));
        var u = qe(n, function (n, r, u) {
          var i = l(t, function (t) {
            return t(n);
          });
          return { criteria: i, index: ++e, value: n };
        });
        return O(u, function (n, t) {
          return Tu(n, t, r);
        });
      }
      function Ye(n, t) {
        return Qe(n, t, function (t, r) {
          return qa(n, r);
        });
      }
      function Qe(n, t, r) {
        for (var e = -1, u = t.length, i = {}; ++e < u; ) {
          var o = t[e],
            f = de(n, o);
          r(f, o) && au(i, Ou(o, n), f);
        }
        return i;
      }
      function Xe(n) {
        return function (t) {
          return de(t, n);
        };
      }
      function nu(n, t, r, e) {
        var u = e ? w : b,
          i = -1,
          o = t.length,
          f = n;
        for (n === t && (t = Mu(t)), r && (f = l(n, E(r))); ++i < o; )
          for (
            var a = 0, c = t[i], s = r ? r(c) : c;
            (a = u(f, s, a, e)) > -1;

          )
            f !== n && Ul.call(f, a, 1), Ul.call(n, a, 1);
        return n;
      }
      function tu(n, t) {
        for (var r = n ? t.length : 0, e = r - 1; r--; ) {
          var u = t[r];
          if (r == e || u !== i) {
            var i = u;
            Ti(u) ? Ul.call(n, u, 1) : du(n, u);
          }
        }
        return n;
      }
      function ru(n, t) {
        return n + ql(ns() * (t - n + 1));
      }
      function eu(n, t, r, e) {
        for (var u = -1, i = Jl(Pl((t - n) / (r || 1)), 0), o = fl(i); i--; )
          (o[e ? i : ++u] = n), (n += r);
        return o;
      }
      function uu(n, t) {
        var r = "";
        if (!n || t < 1 || t > Sn) return r;
        do t % 2 && (r += n), (t = ql(t / 2)), t && (n += n);
        while (t);
        return r;
      }
      function iu(n, t) {
        return Us(Ji(n, t, Uc), n + "");
      }
      function ou(n) {
        return Rr(uc(n));
      }
      function fu(n, t) {
        var r = uc(n);
        return to(r, Fr(t, 0, r.length));
      }
      function au(n, t, r, e) {
        if (!ca(n)) return n;
        t = Ou(t, n);
        for (
          var u = -1, i = t.length, o = i - 1, f = n;
          null != f && ++u < i;

        ) {
          var a = ro(t[u]),
            c = r;
          if (u != o) {
            var l = f[a];
            (c = e ? e(l, a, f) : X),
              c === X && (c = ca(l) ? l : Ti(t[u + 1]) ? [] : {});
          }
          Wr(f, a, c), (f = f[a]);
        }
        return n;
      }
      function cu(n) {
        return to(uc(n));
      }
      function lu(n, t, r) {
        var e = -1,
          u = n.length;
        t < 0 && (t = -t > u ? 0 : u + t),
          (r = r > u ? u : r),
          r < 0 && (r += u),
          (u = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var i = fl(u); ++e < u; ) i[e] = n[e + t];
        return i;
      }
      function su(n, t) {
        var r;
        return (
          bs(n, function (n, e, u) {
            return (r = t(n, e, u)), !r;
          }),
          !!r
        );
      }
      function hu(n, t, r) {
        var e = 0,
          u = null == n ? e : n.length;
        if ("number" == typeof t && t === t && u <= Bn) {
          for (; e < u; ) {
            var i = (e + u) >>> 1,
              o = n[i];
            null !== o && !ma(o) && (r ? o <= t : o < t)
              ? (e = i + 1)
              : (u = i);
          }
          return u;
        }
        return pu(n, t, Uc, r);
      }
      function pu(n, t, r, e) {
        t = r(t);
        for (
          var u = 0,
            i = null == n ? 0 : n.length,
            o = t !== t,
            f = null === t,
            a = ma(t),
            c = t === X;
          u < i;

        ) {
          var l = ql((u + i) / 2),
            s = r(n[l]),
            h = s !== X,
            p = null === s,
            v = s === s,
            _ = ma(s);
          if (o) var g = e || v;
          else
            g = c
              ? v && (e || h)
              : f
              ? v && h && (e || !p)
              : a
              ? v && h && !p && (e || !_)
              : !p && !_ && (e ? s <= t : s < t);
          g ? (u = l + 1) : (i = l);
        }
        return Yl(i, Un);
      }
      function vu(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e; ) {
          var o = n[r],
            f = t ? t(o) : o;
          if (!r || !Jf(f, a)) {
            var a = f;
            i[u++] = 0 === o ? 0 : o;
          }
        }
        return i;
      }
      function _u(n) {
        return "number" == typeof n ? n : ma(n) ? Ln : +n;
      }
      function gu(n) {
        if ("string" == typeof n) return n;
        if (mh(n)) return l(n, gu) + "";
        if (ma(n)) return ys ? ys.call(n) : "";
        var t = n + "";
        return "0" == t && 1 / n == -En ? "-0" : t;
      }
      function yu(n, t, r) {
        var e = -1,
          u = a,
          i = n.length,
          o = !0,
          f = [],
          l = f;
        if (r) (o = !1), (u = c);
        else if (i >= tn) {
          var s = t ? null : Is(n);
          if (s) return q(s);
          (o = !1), (u = W), (l = new dr());
        } else l = t ? [] : f;
        n: for (; ++e < i; ) {
          var h = n[e],
            p = t ? t(h) : h;
          if (((h = r || 0 !== h ? h : 0), o && p === p)) {
            for (var v = l.length; v--; ) if (l[v] === p) continue n;
            t && l.push(p), f.push(h);
          } else u(l, p, r) || (l !== f && l.push(p), f.push(h));
        }
        return f;
      }
      function du(n, t) {
        return (t = Ou(t, n)), (n = Yi(n, t)), null == n || delete n[ro(ko(t))];
      }
      function bu(n, t, r, e) {
        return au(n, t, r(de(n, t)), e);
      }
      function wu(n, t, r, e) {
        for (
          var u = n.length, i = e ? u : -1;
          (e ? i-- : ++i < u) && t(n[i], i, n);

        );
        return r
          ? lu(n, e ? 0 : i, e ? i + 1 : u)
          : lu(n, e ? i + 1 : 0, e ? u : i);
      }
      function mu(n, t) {
        var r = n;
        return (
          r instanceof Dt && (r = r.value()),
          h(
            t,
            function (n, t) {
              return t.func.apply(t.thisArg, s([n], t.args));
            },
            r
          )
        );
      }
      function xu(n, t, r) {
        var e = n.length;
        if (e < 2) return e ? yu(n[0]) : [];
        for (var u = -1, i = fl(e); ++u < e; )
          for (var o = n[u], f = -1; ++f < e; )
            f != u && (i[u] = Jr(i[u] || o, n[f], t, r));
        return yu(ue(i, 1), t, r);
      }
      function ju(n, t, r) {
        for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u; ) {
          var f = e < i ? t[e] : X;
          r(o, n[e], f);
        }
        return o;
      }
      function Au(n) {
        return Qf(n) ? n : [];
      }
      function ku(n) {
        return "function" == typeof n ? n : Uc;
      }
      function Ou(n, t) {
        return mh(n) ? n : Di(n, t) ? [n] : Bs(Wa(n));
      }
      function Iu(n, t, r) {
        var e = n.length;
        return (r = r === X ? e : r), !t && r >= e ? n : lu(n, t, r);
      }
      function Ru(n, t) {
        if (t) return n.slice();
        var r = n.length,
          e = Sl ? Sl(r) : new n.constructor(r);
        return n.copy(e), e;
      }
      function zu(n) {
        var t = new n.constructor(n.byteLength);
        return new El(t).set(new El(n)), t;
      }
      function Eu(n, t) {
        var r = t ? zu(n.buffer) : n.buffer;
        return new n.constructor(r, n.byteOffset, n.byteLength);
      }
      function Su(t, r, e) {
        var u = r ? e(F(t), an) : F(t);
        return h(u, n, new t.constructor());
      }
      function Wu(n) {
        var t = new n.constructor(n.source, Nt.exec(n));
        return (t.lastIndex = n.lastIndex), t;
      }
      function Lu(n, r, e) {
        var u = r ? e(q(n), an) : q(n);
        return h(u, t, new n.constructor());
      }
      function Cu(n) {
        return gs ? hl(gs.call(n)) : {};
      }
      function Uu(n, t) {
        var r = t ? zu(n.buffer) : n.buffer;
        return new n.constructor(r, n.byteOffset, n.length);
      }
      function Bu(n, t) {
        if (n !== t) {
          var r = n !== X,
            e = null === n,
            u = n === n,
            i = ma(n),
            o = t !== X,
            f = null === t,
            a = t === t,
            c = ma(t);
          if (
            (!f && !c && !i && n > t) ||
            (i && o && a && !f && !c) ||
            (e && o && a) ||
            (!r && a) ||
            !u
          )
            return 1;
          if (
            (!e && !i && !c && n < t) ||
            (c && r && u && !e && !i) ||
            (f && r && u) ||
            (!o && u) ||
            !a
          )
            return -1;
        }
        return 0;
      }
      function Tu(n, t, r) {
        for (
          var e = -1,
            u = n.criteria,
            i = t.criteria,
            o = u.length,
            f = r.length;
          ++e < o;

        ) {
          var a = Bu(u[e], i[e]);
          if (a) {
            if (e >= f) return a;
            var c = r[e];
            return a * ("desc" == c ? -1 : 1);
          }
        }
        return n.index - t.index;
      }
      function $u(n, t, r, e) {
        for (
          var u = -1,
            i = n.length,
            o = r.length,
            f = -1,
            a = t.length,
            c = Jl(i - o, 0),
            l = fl(a + c),
            s = !e;
          ++f < a;

        )
          l[f] = t[f];
        for (; ++u < o; ) (s || u < i) && (l[r[u]] = n[u]);
        for (; c--; ) l[f++] = n[u++];
        return l;
      }
      function Du(n, t, r, e) {
        for (
          var u = -1,
            i = n.length,
            o = -1,
            f = r.length,
            a = -1,
            c = t.length,
            l = Jl(i - f, 0),
            s = fl(l + c),
            h = !e;
          ++u < l;

        )
          s[u] = n[u];
        for (var p = u; ++a < c; ) s[p + a] = t[a];
        for (; ++o < f; ) (h || u < i) && (s[p + r[o]] = n[u++]);
        return s;
      }
      function Mu(n, t) {
        var r = -1,
          e = n.length;
        for (t || (t = fl(e)); ++r < e; ) t[r] = n[r];
        return t;
      }
      function Fu(n, t, r, e) {
        var u = !r;
        r || (r = {});
        for (var i = -1, o = t.length; ++i < o; ) {
          var f = t[i],
            a = e ? e(r[f], n[f], f, r, n) : X;
          a === X && (a = n[f]), u ? Tr(r, f, a) : Wr(r, f, a);
        }
        return r;
      }
      function Nu(n, t) {
        return Fu(n, zs(n), t);
      }
      function Pu(n, t) {
        return Fu(n, Es(n), t);
      }
      function qu(n, t) {
        return function (r, u) {
          var i = mh(r) ? e : Cr,
            o = t ? t() : {};
          return i(r, n, Ai(u, 2), o);
        };
      }
      function Zu(n) {
        return iu(function (t, r) {
          var e = -1,
            u = r.length,
            i = u > 1 ? r[u - 1] : X,
            o = u > 2 ? r[2] : X;
          for (
            i = n.length > 3 && "function" == typeof i ? (u--, i) : X,
              o && $i(r[0], r[1], o) && ((i = u < 3 ? X : i), (u = 1)),
              t = hl(t);
            ++e < u;

          ) {
            var f = r[e];
            f && n(t, f, e, i);
          }
          return t;
        });
      }
      function Ku(n, t) {
        return function (r, e) {
          if (null == r) return r;
          if (!Yf(r)) return n(r, e);
          for (
            var u = r.length, i = t ? u : -1, o = hl(r);
            (t ? i-- : ++i < u) && e(o[i], i, o) !== !1;

          );
          return r;
        };
      }
      function Vu(n) {
        return function (t, r, e) {
          for (var u = -1, i = hl(t), o = e(t), f = o.length; f--; ) {
            var a = o[n ? f : ++u];
            if (r(i[a], a, i) === !1) break;
          }
          return t;
        };
      }
      function Gu(n, t, r) {
        function e() {
          var t = this && this !== re && this instanceof e ? i : n;
          return t.apply(u ? r : this, arguments);
        }
        var u = t & pn,
          i = Yu(n);
        return e;
      }
      function Hu(n) {
        return function (t) {
          t = Wa(t);
          var r = $(t) ? H(t) : X,
            e = r ? r[0] : t.charAt(0),
            u = r ? Iu(r, 1).join("") : t.slice(1);
          return e[n]() + u;
        };
      }
      function Ju(n) {
        return function (t) {
          return h(Ec(lc(t).replace($r, "")), n, "");
        };
      }
      function Yu(n) {
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n();
            case 1:
              return new n(t[0]);
            case 2:
              return new n(t[0], t[1]);
            case 3:
              return new n(t[0], t[1], t[2]);
            case 4:
              return new n(t[0], t[1], t[2], t[3]);
            case 5:
              return new n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var r = ds(n.prototype),
            e = n.apply(r, t);
          return ca(e) ? e : r;
        };
      }
      function Qu(n, t, e) {
        function u() {
          for (var o = arguments.length, f = fl(o), a = o, c = ji(u); a--; )
            f[a] = arguments[a];
          var l = o < 3 && f[0] !== c && f[o - 1] !== c ? [] : P(f, c);
          if (((o -= l.length), o < e))
            return ci(n, t, ti, u.placeholder, X, f, l, X, X, e - o);
          var s = this && this !== re && this instanceof u ? i : n;
          return r(s, this, f);
        }
        var i = Yu(n);
        return u;
      }
      function Xu(n) {
        return function (t, r, e) {
          var u = hl(t);
          if (!Yf(t)) {
            var i = Ai(r, 3);
            (t = Za(t)),
              (r = function (n) {
                return i(u[n], n, u);
              });
          }
          var o = n(t, r, e);
          return o > -1 ? u[i ? t[o] : o] : X;
        };
      }
      function ni(n) {
        return bi(function (t) {
          var r = t.length,
            e = r,
            u = Y.prototype.thru;
          for (n && t.reverse(); e--; ) {
            var i = t[e];
            if ("function" != typeof i) throw new _l(en);
            if (u && !o && "wrapper" == xi(i)) var o = new Y([], !0);
          }
          for (e = o ? e : r; ++e < r; ) {
            i = t[e];
            var f = xi(i),
              a = "wrapper" == f ? Rs(i) : X;
            o =
              a &&
              Fi(a[0]) &&
              a[1] == (wn | gn | dn | mn) &&
              !a[4].length &&
              1 == a[9]
                ? o[xi(a[0])].apply(o, a[3])
                : 1 == i.length && Fi(i)
                ? o[f]()
                : o.thru(i);
          }
          return function () {
            var n = arguments,
              e = n[0];
            if (o && 1 == n.length && mh(e)) return o.plant(e).value();
            for (var u = 0, i = r ? t[u].apply(this, n) : e; ++u < r; )
              i = t[u].call(this, i);
            return i;
          };
        });
      }
      function ti(n, t, r, e, u, i, o, f, a, c) {
        function l() {
          for (var y = arguments.length, d = fl(y), b = y; b--; )
            d[b] = arguments[b];
          if (v)
            var w = ji(l),
              m = U(d, w);
          if (
            (e && (d = $u(d, e, u, v)),
            i && (d = Du(d, i, o, v)),
            (y -= m),
            v && y < c)
          ) {
            var x = P(d, w);
            return ci(n, t, ti, l.placeholder, r, d, x, f, a, c - y);
          }
          var j = h ? r : this,
            A = p ? j[n] : n;
          return (
            (y = d.length),
            f ? (d = Qi(d, f)) : _ && y > 1 && d.reverse(),
            s && a < y && (d.length = a),
            this && this !== re && this instanceof l && (A = g || Yu(A)),
            A.apply(j, d)
          );
        }
        var s = t & wn,
          h = t & pn,
          p = t & vn,
          v = t & (gn | yn),
          _ = t & xn,
          g = p ? X : Yu(n);
        return l;
      }
      function ri(n, t) {
        return function (r, e) {
          return Ie(r, n, t(e), {});
        };
      }
      function ei(n, t) {
        return function (r, e) {
          var u;
          if (r === X && e === X) return t;
          if ((r !== X && (u = r), e !== X)) {
            if (u === X) return e;
            "string" == typeof r || "string" == typeof e
              ? ((r = gu(r)), (e = gu(e)))
              : ((r = _u(r)), (e = _u(e))),
              (u = n(r, e));
          }
          return u;
        };
      }
      function ui(n) {
        return bi(function (t) {
          return (
            (t = l(t, E(Ai()))),
            iu(function (e) {
              var u = this;
              return n(t, function (n) {
                return r(n, u, e);
              });
            })
          );
        });
      }
      function ii(n, t) {
        t = t === X ? " " : gu(t);
        var r = t.length;
        if (r < 2) return r ? uu(t, n) : t;
        var e = uu(t, Pl(n / G(t)));
        return $(t) ? Iu(H(e), 0, n).join("") : e.slice(0, n);
      }
      function oi(n, t, e, u) {
        function i() {
          for (
            var t = -1,
              a = arguments.length,
              c = -1,
              l = u.length,
              s = fl(l + a),
              h = this && this !== re && this instanceof i ? f : n;
            ++c < l;

          )
            s[c] = u[c];
          for (; a--; ) s[c++] = arguments[++t];
          return r(h, o ? e : this, s);
        }
        var o = t & pn,
          f = Yu(n);
        return i;
      }
      function fi(n) {
        return function (t, r, e) {
          return (
            e && "number" != typeof e && $i(t, r, e) && (r = e = X),
            (t = Oa(t)),
            r === X ? ((r = t), (t = 0)) : (r = Oa(r)),
            (e = e === X ? (t < r ? 1 : -1) : Oa(e)),
            eu(t, r, e, n)
          );
        };
      }
      function ai(n) {
        return function (t, r) {
          return (
            ("string" == typeof t && "string" == typeof r) ||
              ((t = za(t)), (r = za(r))),
            n(t, r)
          );
        };
      }
      function ci(n, t, r, e, u, i, o, f, a, c) {
        var l = t & gn,
          s = l ? o : X,
          h = l ? X : o,
          p = l ? i : X,
          v = l ? X : i;
        (t |= l ? dn : bn), (t &= ~(l ? bn : dn)), t & _n || (t &= ~(pn | vn));
        var _ = [n, t, u, p, s, v, h, f, a, c],
          g = r.apply(X, _);
        return Fi(n) && Ls(g, _), (g.placeholder = e), Xi(g, n, t);
      }
      function li(n) {
        var t = sl[n];
        return function (n, r) {
          if (((n = za(n)), (r = null == r ? 0 : Yl(Ia(r), 292)))) {
            var e = (Wa(n) + "e").split("e"),
              u = t(e[0] + "e" + (+e[1] + r));
            return (e = (Wa(u) + "e").split("e")), +(e[0] + "e" + (+e[1] - r));
          }
          return t(n);
        };
      }
      function si(n) {
        return function (t) {
          var r = Ss(t);
          return r == Vn ? F(t) : r == nt ? Z(t) : z(t, n(t));
        };
      }
      function hi(n, t, r, e, u, i, o, f) {
        var a = t & vn;
        if (!a && "function" != typeof n) throw new _l(en);
        var c = e ? e.length : 0;
        if (
          (c || ((t &= ~(dn | bn)), (e = u = X)),
          (o = o === X ? o : Jl(Ia(o), 0)),
          (f = f === X ? f : Ia(f)),
          (c -= u ? u.length : 0),
          t & bn)
        ) {
          var l = e,
            s = u;
          e = u = X;
        }
        var h = a ? X : Rs(n),
          p = [n, t, r, e, u, l, s, i, o, f];
        if (
          (h && Vi(p, h),
          (n = p[0]),
          (t = p[1]),
          (r = p[2]),
          (e = p[3]),
          (u = p[4]),
          (f = p[9] = p[9] === X ? (a ? 0 : n.length) : Jl(p[9] - c, 0)),
          !f && t & (gn | yn) && (t &= ~(gn | yn)),
          t && t != pn)
        )
          v =
            t == gn || t == yn
              ? Qu(n, t, f)
              : (t != dn && t != (pn | dn)) || u.length
              ? ti.apply(X, p)
              : oi(n, t, r, e);
        else var v = Gu(n, t, r);
        var _ = h ? js : Ls;
        return Xi(_(v, p), n, t);
      }
      function pi(n, t, r, e) {
        return n === X || (Jf(n, dl[r]) && !ml.call(e, r)) ? t : n;
      }
      function vi(n, t, r, e, u, i) {
        return (
          ca(n) && ca(t) && (i.set(t, n), Ve(n, t, X, vi, i), i.delete(t)), n
        );
      }
      function _i(n) {
        return da(n) ? X : n;
      }
      function gi(n, t, r, e, u, i) {
        var o = r & sn,
          f = n.length,
          a = t.length;
        if (f != a && !(o && a > f)) return !1;
        var c = i.get(n);
        if (c && i.get(t)) return c == t;
        var l = -1,
          s = !0,
          h = r & hn ? new dr() : X;
        for (i.set(n, t), i.set(t, n); ++l < f; ) {
          var p = n[l],
            _ = t[l];
          if (e) var g = o ? e(_, p, l, t, n, i) : e(p, _, l, n, t, i);
          if (g !== X) {
            if (g) continue;
            s = !1;
            break;
          }
          if (h) {
            if (
              !v(t, function (n, t) {
                if (!W(h, t) && (p === n || u(p, n, r, e, i))) return h.push(t);
              })
            ) {
              s = !1;
              break;
            }
          } else if (p !== _ && !u(p, _, r, e, i)) {
            s = !1;
            break;
          }
        }
        return i.delete(n), i.delete(t), s;
      }
      function yi(n, t, r, e, u, i, o) {
        switch (r) {
          case ft:
            if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
              return !1;
            (n = n.buffer), (t = t.buffer);
          case ot:
            return !(n.byteLength != t.byteLength || !i(new El(n), new El(t)));
          case Fn:
          case Nn:
          case Gn:
            return Jf(+n, +t);
          case qn:
            return n.name == t.name && n.message == t.message;
          case Xn:
          case tt:
            return n == t + "";
          case Vn:
            var f = F;
          case nt:
            var a = e & sn;
            if ((f || (f = q), n.size != t.size && !a)) return !1;
            var c = o.get(n);
            if (c) return c == t;
            (e |= hn), o.set(n, t);
            var l = gi(f(n), f(t), e, u, i, o);
            return o.delete(n), l;
          case rt:
            if (gs) return gs.call(n) == gs.call(t);
        }
        return !1;
      }
      function di(n, t, r, e, u, i) {
        var o = r & sn,
          f = wi(n),
          a = f.length,
          c = wi(t),
          l = c.length;
        if (a != l && !o) return !1;
        for (var s = a; s--; ) {
          var h = f[s];
          if (!(o ? h in t : ml.call(t, h))) return !1;
        }
        var p = i.get(n);
        if (p && i.get(t)) return p == t;
        var v = !0;
        i.set(n, t), i.set(t, n);
        for (var _ = o; ++s < a; ) {
          h = f[s];
          var g = n[h],
            y = t[h];
          if (e) var d = o ? e(y, g, h, t, n, i) : e(g, y, h, n, t, i);
          if (!(d === X ? g === y || u(g, y, r, e, i) : d)) {
            v = !1;
            break;
          }
          _ || (_ = "constructor" == h);
        }
        if (v && !_) {
          var b = n.constructor,
            w = t.constructor;
          b != w &&
            "constructor" in n &&
            "constructor" in t &&
            !(
              "function" == typeof b &&
              b instanceof b &&
              "function" == typeof w &&
              w instanceof w
            ) &&
            (v = !1);
        }
        return i.delete(n), i.delete(t), v;
      }
      function bi(n) {
        return Us(Ji(n, X, go), n + "");
      }
      function wi(n) {
        return we(n, Za, zs);
      }
      function mi(n) {
        return we(n, Ka, Es);
      }
      function xi(n) {
        for (
          var t = n.name + "", r = cs[t], e = ml.call(cs, t) ? r.length : 0;
          e--;

        ) {
          var u = r[e],
            i = u.func;
          if (null == i || i == n) return u.name;
        }
        return t;
      }
      function ji(n) {
        var t = ml.call(K, "placeholder") ? K : n;
        return t.placeholder;
      }
      function Ai() {
        var n = K.iteratee || Bc;
        return (
          (n = n === Bc ? Me : n),
          arguments.length ? n(arguments[0], arguments[1]) : n
        );
      }
      function ki(n, t) {
        var r = n.__data__;
        return Mi(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      }
      function Oi(n) {
        for (var t = Za(n), r = t.length; r--; ) {
          var e = t[r],
            u = n[e];
          t[r] = [e, u, qi(u)];
        }
        return t;
      }
      function Ii(n, t) {
        var r = T(n, t);
        return Be(r) ? r : X;
      }
      function Ri(n) {
        var t = ml.call(n, $l),
          r = n[$l];
        try {
          n[$l] = X;
          var e = !0;
        } catch (n) {}
        var u = Al.call(n);
        return e && (t ? (n[$l] = r) : delete n[$l]), u;
      }
      function zi(n, t, r) {
        for (var e = -1, u = r.length; ++e < u; ) {
          var i = r[e],
            o = i.size;
          switch (i.type) {
            case "drop":
              n += o;
              break;
            case "dropRight":
              t -= o;
              break;
            case "take":
              t = Yl(t, n + o);
              break;
            case "takeRight":
              n = Jl(n, t - o);
          }
        }
        return { start: n, end: t };
      }
      function Ei(n) {
        var t = n.match(Tt);
        return t ? t[1].split($t) : [];
      }
      function Si(n, t, r) {
        t = Ou(t, n);
        for (var e = -1, u = t.length, i = !1; ++e < u; ) {
          var o = ro(t[e]);
          if (!(i = null != n && r(n, o))) break;
          n = n[o];
        }
        return i || ++e != u
          ? i
          : ((u = null == n ? 0 : n.length),
            !!u && aa(u) && Ti(o, u) && (mh(n) || wh(n)));
      }
      function Wi(n) {
        var t = n.length,
          r = n.constructor(t);
        return (
          t &&
            "string" == typeof n[0] &&
            ml.call(n, "index") &&
            ((r.index = n.index), (r.input = n.input)),
          r
        );
      }
      function Li(n) {
        return "function" != typeof n.constructor || Pi(n) ? {} : ds(Wl(n));
      }
      function Ci(n, t, r, e) {
        var u = n.constructor;
        switch (t) {
          case ot:
            return zu(n);
          case Fn:
          case Nn:
            return new u(+n);
          case ft:
            return Eu(n, e);
          case at:
          case ct:
          case lt:
          case st:
          case ht:
          case pt:
          case vt:
          case _t:
          case gt:
            return Uu(n, e);
          case Vn:
            return Su(n, e, r);
          case Gn:
          case tt:
            return new u(n);
          case Xn:
            return Wu(n);
          case nt:
            return Lu(n, e, r);
          case rt:
            return Cu(n);
        }
      }
      function Ui(n, t) {
        var r = t.length;
        if (!r) return n;
        var e = r - 1;
        return (
          (t[e] = (r > 1 ? "& " : "") + t[e]),
          (t = t.join(r > 2 ? ", " : " ")),
          n.replace(Bt, "{\n/* [wrapped with " + t + "] */\n")
        );
      }
      function Bi(n) {
        return mh(n) || wh(n) || !!(Bl && n && n[Bl]);
      }
      function Ti(n, t) {
        return (
          (t = null == t ? Sn : t),
          !!t &&
            ("number" == typeof n || Vt.test(n)) &&
            n > -1 &&
            n % 1 == 0 &&
            n < t
        );
      }
      function $i(n, t, r) {
        if (!ca(r)) return !1;
        var e = typeof t;
        return (
          !!("number" == e
            ? Yf(r) && Ti(t, r.length)
            : "string" == e && t in r) && Jf(r[t], n)
        );
      }
      function Di(n, t) {
        if (mh(n)) return !1;
        var r = typeof n;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != n &&
            !ma(n)
          ) ||
          Rt.test(n) ||
          !It.test(n) ||
          (null != t && n in hl(t))
        );
      }
      function Mi(n) {
        var t = typeof n;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== n
          : null === n;
      }
      function Fi(n) {
        var t = xi(n),
          r = K[t];
        if ("function" != typeof r || !(t in Dt.prototype)) return !1;
        if (n === r) return !0;
        var e = Rs(r);
        return !!e && n === e[0];
      }
      function Ni(n) {
        return !!jl && jl in n;
      }
      function Pi(n) {
        var t = n && n.constructor,
          r = ("function" == typeof t && t.prototype) || dl;
        return n === r;
      }
      function qi(n) {
        return n === n && !ca(n);
      }
      function Zi(n, t) {
        return function (r) {
          return null != r && r[n] === t && (t !== X || n in hl(r));
        };
      }
      function Ki(n) {
        var t = Bf(n, function (n) {
            return r.size === on && r.clear(), n;
          }),
          r = t.cache;
        return t;
      }
      function Vi(n, t) {
        var r = n[1],
          e = t[1],
          u = r | e,
          i = u < (pn | vn | wn),
          o =
            (e == wn && r == gn) ||
            (e == wn && r == mn && n[7].length <= t[8]) ||
            (e == (wn | mn) && t[7].length <= t[8] && r == gn);
        if (!i && !o) return n;
        e & pn && ((n[2] = t[2]), (u |= r & pn ? 0 : _n));
        var f = t[3];
        if (f) {
          var a = n[3];
          (n[3] = a ? $u(a, f, t[4]) : f), (n[4] = a ? P(n[3], fn) : t[4]);
        }
        return (
          (f = t[5]),
          f &&
            ((a = n[5]),
            (n[5] = a ? Du(a, f, t[6]) : f),
            (n[6] = a ? P(n[5], fn) : t[6])),
          (f = t[7]),
          f && (n[7] = f),
          e & wn && (n[8] = null == n[8] ? t[8] : Yl(n[8], t[8])),
          null == n[9] && (n[9] = t[9]),
          (n[0] = t[0]),
          (n[1] = u),
          n
        );
      }
      function Gi(n) {
        var t = [];
        if (null != n) for (var r in hl(n)) t.push(r);
        return t;
      }
      function Hi(n) {
        return Al.call(n);
      }
      function Ji(n, t, e) {
        return (
          (t = Jl(t === X ? n.length - 1 : t, 0)),
          function () {
            for (
              var u = arguments, i = -1, o = Jl(u.length - t, 0), f = fl(o);
              ++i < o;

            )
              f[i] = u[t + i];
            i = -1;
            for (var a = fl(t + 1); ++i < t; ) a[i] = u[i];
            return (a[t] = e(f)), r(n, this, a);
          }
        );
      }
      function Yi(n, t) {
        return t.length < 2 ? n : de(n, lu(t, 0, -1));
      }
      function Qi(n, t) {
        for (var r = n.length, e = Yl(t.length, r), u = Mu(n); e--; ) {
          var i = t[e];
          n[e] = Ti(i, r) ? u[i] : X;
        }
        return n;
      }
      function Xi(n, t, r) {
        var e = t + "";
        return Us(n, Ui(e, uo(Ei(e), r)));
      }
      function no(n) {
        var t = 0,
          r = 0;
        return function () {
          var e = Ql(),
            u = On - (e - r);
          if (((r = e), u > 0)) {
            if (++t >= kn) return arguments[0];
          } else t = 0;
          return n.apply(X, arguments);
        };
      }
      function to(n, t) {
        var r = -1,
          e = n.length,
          u = e - 1;
        for (t = t === X ? e : t; ++r < t; ) {
          var i = ru(r, u),
            o = n[i];
          (n[i] = n[r]), (n[r] = o);
        }
        return (n.length = t), n;
      }
      function ro(n) {
        if ("string" == typeof n || ma(n)) return n;
        var t = n + "";
        return "0" == t && 1 / n == -En ? "-0" : t;
      }
      function eo(n) {
        if (null != n) {
          try {
            return wl.call(n);
          } catch (n) {}
          try {
            return n + "";
          } catch (n) {}
        }
        return "";
      }
      function uo(n, t) {
        return (
          u(Tn, function (r) {
            var e = "_." + r[0];
            t & r[1] && !a(n, e) && n.push(e);
          }),
          n.sort()
        );
      }
      function io(n) {
        if (n instanceof Dt) return n.clone();
        var t = new Y(n.__wrapped__, n.__chain__);
        return (
          (t.__actions__ = Mu(n.__actions__)),
          (t.__index__ = n.__index__),
          (t.__values__ = n.__values__),
          t
        );
      }
      function oo(n, t, r) {
        t = (r ? $i(n, t, r) : t === X) ? 1 : Jl(Ia(t), 0);
        var e = null == n ? 0 : n.length;
        if (!e || t < 1) return [];
        for (var u = 0, i = 0, o = fl(Pl(e / t)); u < e; )
          o[i++] = lu(n, u, (u += t));
        return o;
      }
      function fo(n) {
        for (
          var t = -1, r = null == n ? 0 : n.length, e = 0, u = [];
          ++t < r;

        ) {
          var i = n[t];
          i && (u[e++] = i);
        }
        return u;
      }
      function ao() {
        var n = arguments.length;
        if (!n) return [];
        for (var t = fl(n - 1), r = arguments[0], e = n; e--; )
          t[e - 1] = arguments[e];
        return s(mh(r) ? Mu(r) : [r], ue(t, 1));
      }
      function co(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? ((t = r || t === X ? 1 : Ia(t)), lu(n, t < 0 ? 0 : t, e))
          : [];
      }
      function lo(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? ((t = r || t === X ? 1 : Ia(t)),
            (t = e - t),
            lu(n, 0, t < 0 ? 0 : t))
          : [];
      }
      function so(n, t) {
        return n && n.length ? wu(n, Ai(t, 3), !0, !0) : [];
      }
      function ho(n, t) {
        return n && n.length ? wu(n, Ai(t, 3), !0) : [];
      }
      function po(n, t, r, e) {
        var u = null == n ? 0 : n.length;
        return u
          ? (r && "number" != typeof r && $i(n, t, r) && ((r = 0), (e = u)),
            te(n, t, r, e))
          : [];
      }
      function vo(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = null == r ? 0 : Ia(r);
        return u < 0 && (u = Jl(e + u, 0)), d(n, Ai(t, 3), u);
      }
      function _o(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = e - 1;
        return (
          r !== X && ((u = Ia(r)), (u = r < 0 ? Jl(e + u, 0) : Yl(u, e - 1))),
          d(n, Ai(t, 3), u, !0)
        );
      }
      function go(n) {
        var t = null == n ? 0 : n.length;
        return t ? ue(n, 1) : [];
      }
      function yo(n) {
        var t = null == n ? 0 : n.length;
        return t ? ue(n, En) : [];
      }
      function bo(n, t) {
        var r = null == n ? 0 : n.length;
        return r ? ((t = t === X ? 1 : Ia(t)), ue(n, t)) : [];
      }
      function wo(n) {
        for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r; ) {
          var u = n[t];
          e[u[0]] = u[1];
        }
        return e;
      }
      function mo(n) {
        return n && n.length ? n[0] : X;
      }
      function xo(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = null == r ? 0 : Ia(r);
        return u < 0 && (u = Jl(e + u, 0)), b(n, t, u);
      }
      function jo(n) {
        var t = null == n ? 0 : n.length;
        return t ? lu(n, 0, -1) : [];
      }
      function Ao(n, t) {
        return null == n ? "" : Gl.call(n, t);
      }
      function ko(n) {
        var t = null == n ? 0 : n.length;
        return t ? n[t - 1] : X;
      }
      function Oo(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = e;
        return (
          r !== X && ((u = Ia(r)), (u = u < 0 ? Jl(e + u, 0) : Yl(u, e - 1))),
          t === t ? V(n, t, u) : d(n, m, u, !0)
        );
      }
      function Io(n, t) {
        return n && n.length ? He(n, Ia(t)) : X;
      }
      function Ro(n, t) {
        return n && n.length && t && t.length ? nu(n, t) : n;
      }
      function zo(n, t, r) {
        return n && n.length && t && t.length ? nu(n, t, Ai(r, 2)) : n;
      }
      function Eo(n, t, r) {
        return n && n.length && t && t.length ? nu(n, t, X, r) : n;
      }
      function So(n, t) {
        var r = [];
        if (!n || !n.length) return r;
        var e = -1,
          u = [],
          i = n.length;
        for (t = Ai(t, 3); ++e < i; ) {
          var o = n[e];
          t(o, e, n) && (r.push(o), u.push(e));
        }
        return tu(n, u), r;
      }
      function Wo(n) {
        return null == n ? n : ts.call(n);
      }
      function Lo(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? (r && "number" != typeof r && $i(n, t, r)
              ? ((t = 0), (r = e))
              : ((t = null == t ? 0 : Ia(t)), (r = r === X ? e : Ia(r))),
            lu(n, t, r))
          : [];
      }
      function Co(n, t) {
        return hu(n, t);
      }
      function Uo(n, t, r) {
        return pu(n, t, Ai(r, 2));
      }
      function Bo(n, t) {
        var r = null == n ? 0 : n.length;
        if (r) {
          var e = hu(n, t);
          if (e < r && Jf(n[e], t)) return e;
        }
        return -1;
      }
      function To(n, t) {
        return hu(n, t, !0);
      }
      function $o(n, t, r) {
        return pu(n, t, Ai(r, 2), !0);
      }
      function Do(n, t) {
        var r = null == n ? 0 : n.length;
        if (r) {
          var e = hu(n, t, !0) - 1;
          if (Jf(n[e], t)) return e;
        }
        return -1;
      }
      function Mo(n) {
        return n && n.length ? vu(n) : [];
      }
      function Fo(n, t) {
        return n && n.length ? vu(n, Ai(t, 2)) : [];
      }
      function No(n) {
        var t = null == n ? 0 : n.length;
        return t ? lu(n, 1, t) : [];
      }
      function Po(n, t, r) {
        return n && n.length
          ? ((t = r || t === X ? 1 : Ia(t)), lu(n, 0, t < 0 ? 0 : t))
          : [];
      }
      function qo(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? ((t = r || t === X ? 1 : Ia(t)),
            (t = e - t),
            lu(n, t < 0 ? 0 : t, e))
          : [];
      }
      function Zo(n, t) {
        return n && n.length ? wu(n, Ai(t, 3), !1, !0) : [];
      }
      function Ko(n, t) {
        return n && n.length ? wu(n, Ai(t, 3)) : [];
      }
      function Vo(n) {
        return n && n.length ? yu(n) : [];
      }
      function Go(n, t) {
        return n && n.length ? yu(n, Ai(t, 2)) : [];
      }
      function Ho(n, t) {
        return (
          (t = "function" == typeof t ? t : X), n && n.length ? yu(n, X, t) : []
        );
      }
      function Jo(n) {
        if (!n || !n.length) return [];
        var t = 0;
        return (
          (n = f(n, function (n) {
            if (Qf(n)) return (t = Jl(n.length, t)), !0;
          })),
          R(t, function (t) {
            return l(n, j(t));
          })
        );
      }
      function Yo(n, t) {
        if (!n || !n.length) return [];
        var e = Jo(n);
        return null == t
          ? e
          : l(e, function (n) {
              return r(t, X, n);
            });
      }
      function Qo(n, t) {
        return ju(n || [], t || [], Wr);
      }
      function Xo(n, t) {
        return ju(n || [], t || [], au);
      }
      function nf(n) {
        var t = K(n);
        return (t.__chain__ = !0), t;
      }
      function tf(n, t) {
        return t(n), n;
      }
      function rf(n, t) {
        return t(n);
      }
      function ef() {
        return nf(this);
      }
      function uf() {
        return new Y(this.value(), this.__chain__);
      }
      function of() {
        this.__values__ === X && (this.__values__ = ka(this.value()));
        var n = this.__index__ >= this.__values__.length,
          t = n ? X : this.__values__[this.__index__++];
        return { done: n, value: t };
      }
      function ff() {
        return this;
      }
      function af(n) {
        for (var t, r = this; r instanceof J; ) {
          var e = io(r);
          (e.__index__ = 0),
            (e.__values__ = X),
            t ? (u.__wrapped__ = e) : (t = e);
          var u = e;
          r = r.__wrapped__;
        }
        return (u.__wrapped__ = n), t;
      }
      function cf() {
        var n = this.__wrapped__;
        if (n instanceof Dt) {
          var t = n;
          return (
            this.__actions__.length && (t = new Dt(this)),
            (t = t.reverse()),
            t.__actions__.push({ func: rf, args: [Wo], thisArg: X }),
            new Y(t, this.__chain__)
          );
        }
        return this.thru(Wo);
      }
      function lf() {
        return mu(this.__wrapped__, this.__actions__);
      }
      function sf(n, t, r) {
        var e = mh(n) ? o : Yr;
        return r && $i(n, t, r) && (t = X), e(n, Ai(t, 3));
      }
      function hf(n, t) {
        var r = mh(n) ? f : ee;
        return r(n, Ai(t, 3));
      }
      function pf(n, t) {
        return ue(bf(n, t), 1);
      }
      function vf(n, t) {
        return ue(bf(n, t), En);
      }
      function _f(n, t, r) {
        return (r = r === X ? 1 : Ia(r)), ue(bf(n, t), r);
      }
      function gf(n, t) {
        var r = mh(n) ? u : bs;
        return r(n, Ai(t, 3));
      }
      function yf(n, t) {
        var r = mh(n) ? i : ws;
        return r(n, Ai(t, 3));
      }
      function df(n, t, r, e) {
        (n = Yf(n) ? n : uc(n)), (r = r && !e ? Ia(r) : 0);
        var u = n.length;
        return (
          r < 0 && (r = Jl(u + r, 0)),
          wa(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && b(n, t, r) > -1
        );
      }
      function bf(n, t) {
        var r = mh(n) ? l : qe;
        return r(n, Ai(t, 3));
      }
      function wf(n, t, r, e) {
        return null == n
          ? []
          : (mh(t) || (t = null == t ? [] : [t]),
            (r = e ? X : r),
            mh(r) || (r = null == r ? [] : [r]),
            Je(n, t, r));
      }
      function mf(n, t, r) {
        var e = mh(n) ? h : k,
          u = arguments.length < 3;
        return e(n, Ai(t, 4), r, u, bs);
      }
      function xf(n, t, r) {
        var e = mh(n) ? p : k,
          u = arguments.length < 3;
        return e(n, Ai(t, 4), r, u, ws);
      }
      function jf(n, t) {
        var r = mh(n) ? f : ee;
        return r(n, Tf(Ai(t, 3)));
      }
      function Af(n) {
        var t = mh(n) ? Rr : ou;
        return t(n);
      }
      function kf(n, t, r) {
        t = (r ? $i(n, t, r) : t === X) ? 1 : Ia(t);
        var e = mh(n) ? zr : fu;
        return e(n, t);
      }
      function Of(n) {
        var t = mh(n) ? Er : cu;
        return t(n);
      }
      function If(n) {
        if (null == n) return 0;
        if (Yf(n)) return wa(n) ? G(n) : n.length;
        var t = Ss(n);
        return t == Vn || t == nt ? n.size : Fe(n).length;
      }
      function Rf(n, t, r) {
        var e = mh(n) ? v : su;
        return r && $i(n, t, r) && (t = X), e(n, Ai(t, 3));
      }
      function zf(n, t) {
        if ("function" != typeof t) throw new _l(en);
        return (
          (n = Ia(n)),
          function () {
            if (--n < 1) return t.apply(this, arguments);
          }
        );
      }
      function Ef(n, t, r) {
        return (
          (t = r ? X : t),
          (t = n && null == t ? n.length : t),
          hi(n, wn, X, X, X, X, t)
        );
      }
      function Sf(n, t) {
        var r;
        if ("function" != typeof t) throw new _l(en);
        return (
          (n = Ia(n)),
          function () {
            return (
              --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = X), r
            );
          }
        );
      }
      function Wf(n, t, r) {
        t = r ? X : t;
        var e = hi(n, gn, X, X, X, X, X, t);
        return (e.placeholder = Wf.placeholder), e;
      }
      function Lf(n, t, r) {
        t = r ? X : t;
        var e = hi(n, yn, X, X, X, X, X, t);
        return (e.placeholder = Lf.placeholder), e;
      }
      function Cf(n, t, r) {
        function e(t) {
          var r = h,
            e = p;
          return (h = p = X), (d = t), (_ = n.apply(e, r));
        }
        function u(n) {
          return (d = n), (g = Cs(f, t)), b ? e(n) : _;
        }
        function i(n) {
          var r = n - y,
            e = n - d,
            u = t - r;
          return w ? Yl(u, v - e) : u;
        }
        function o(n) {
          var r = n - y,
            e = n - d;
          return y === X || r >= t || r < 0 || (w && e >= v);
        }
        function f() {
          var n = ch();
          return o(n) ? a(n) : void (g = Cs(f, i(n)));
        }
        function a(n) {
          return (g = X), m && h ? e(n) : ((h = p = X), _);
        }
        function c() {
          g !== X && Os(g), (d = 0), (h = y = p = g = X);
        }
        function l() {
          return g === X ? _ : a(ch());
        }
        function s() {
          var n = ch(),
            r = o(n);
          if (((h = arguments), (p = this), (y = n), r)) {
            if (g === X) return u(y);
            if (w) return (g = Cs(f, t)), e(y);
          }
          return g === X && (g = Cs(f, t)), _;
        }
        var h,
          p,
          v,
          _,
          g,
          y,
          d = 0,
          b = !1,
          w = !1,
          m = !0;
        if ("function" != typeof n) throw new _l(en);
        return (
          (t = za(t) || 0),
          ca(r) &&
            ((b = !!r.leading),
            (w = "maxWait" in r),
            (v = w ? Jl(za(r.maxWait) || 0, t) : v),
            (m = "trailing" in r ? !!r.trailing : m)),
          (s.cancel = c),
          (s.flush = l),
          s
        );
      }
      function Uf(n) {
        return hi(n, xn);
      }
      function Bf(n, t) {
        if ("function" != typeof n || (null != t && "function" != typeof t))
          throw new _l(en);
        var r = function () {
          var e = arguments,
            u = t ? t.apply(this, e) : e[0],
            i = r.cache;
          if (i.has(u)) return i.get(u);
          var o = n.apply(this, e);
          return (r.cache = i.set(u, o) || i), o;
        };
        return (r.cache = new (Bf.Cache || hr)()), r;
      }
      function Tf(n) {
        if ("function" != typeof n) throw new _l(en);
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, t[0]);
            case 2:
              return !n.call(this, t[0], t[1]);
            case 3:
              return !n.call(this, t[0], t[1], t[2]);
          }
          return !n.apply(this, t);
        };
      }
      function $f(n) {
        return Sf(2, n);
      }
      function Df(n, t) {
        if ("function" != typeof n) throw new _l(en);
        return (t = t === X ? t : Ia(t)), iu(n, t);
      }
      function Mf(n, t) {
        if ("function" != typeof n) throw new _l(en);
        return (
          (t = null == t ? 0 : Jl(Ia(t), 0)),
          iu(function (e) {
            var u = e[t],
              i = Iu(e, 0, t);
            return u && s(i, u), r(n, this, i);
          })
        );
      }
      function Ff(n, t, r) {
        var e = !0,
          u = !0;
        if ("function" != typeof n) throw new _l(en);
        return (
          ca(r) &&
            ((e = "leading" in r ? !!r.leading : e),
            (u = "trailing" in r ? !!r.trailing : u)),
          Cf(n, t, { leading: e, maxWait: t, trailing: u })
        );
      }
      function Nf(n) {
        return Ef(n, 1);
      }
      function Pf(n, t) {
        return _h(ku(t), n);
      }
      function qf() {
        if (!arguments.length) return [];
        var n = arguments[0];
        return mh(n) ? n : [n];
      }
      function Zf(n) {
        return Nr(n, ln);
      }
      function Kf(n, t) {
        return (t = "function" == typeof t ? t : X), Nr(n, ln, t);
      }
      function Vf(n) {
        return Nr(n, an | ln);
      }
      function Gf(n, t) {
        return (t = "function" == typeof t ? t : X), Nr(n, an | ln, t);
      }
      function Hf(n, t) {
        return null == t || Gr(n, t, Za(t));
      }
      function Jf(n, t) {
        return n === t || (n !== n && t !== t);
      }
      function Yf(n) {
        return null != n && aa(n.length) && !oa(n);
      }
      function Qf(n) {
        return la(n) && Yf(n);
      }
      function Xf(n) {
        return n === !0 || n === !1 || (la(n) && me(n) == Fn);
      }
      function na(n) {
        return la(n) && 1 === n.nodeType && !da(n);
      }
      function ta(n) {
        if (null == n) return !0;
        if (
          Yf(n) &&
          (mh(n) ||
            "string" == typeof n ||
            "function" == typeof n.splice ||
            jh(n) ||
            Rh(n) ||
            wh(n))
        )
          return !n.length;
        var t = Ss(n);
        if (t == Vn || t == nt) return !n.size;
        if (Pi(n)) return !Fe(n).length;
        for (var r in n) if (ml.call(n, r)) return !1;
        return !0;
      }
      function ra(n, t) {
        return We(n, t);
      }
      function ea(n, t, r) {
        r = "function" == typeof r ? r : X;
        var e = r ? r(n, t) : X;
        return e === X ? We(n, t, X, r) : !!e;
      }
      function ua(n) {
        if (!la(n)) return !1;
        var t = me(n);
        return (
          t == qn ||
          t == Pn ||
          ("string" == typeof n.message && "string" == typeof n.name && !da(n))
        );
      }
      function ia(n) {
        return "number" == typeof n && Vl(n);
      }
      function oa(n) {
        if (!ca(n)) return !1;
        var t = me(n);
        return t == Zn || t == Kn || t == Mn || t == Qn;
      }
      function fa(n) {
        return "number" == typeof n && n == Ia(n);
      }
      function aa(n) {
        return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Sn;
      }
      function ca(n) {
        var t = typeof n;
        return null != n && ("object" == t || "function" == t);
      }
      function la(n) {
        return null != n && "object" == typeof n;
      }
      function sa(n, t) {
        return n === t || Ue(n, t, Oi(t));
      }
      function ha(n, t, r) {
        return (r = "function" == typeof r ? r : X), Ue(n, t, Oi(t), r);
      }
      function pa(n) {
        return ya(n) && n != +n;
      }
      function va(n) {
        if (Ws(n)) throw new cl(rn);
        return Be(n);
      }
      function _a(n) {
        return null === n;
      }
      function ga(n) {
        return null == n;
      }
      function ya(n) {
        return "number" == typeof n || (la(n) && me(n) == Gn);
      }
      function da(n) {
        if (!la(n) || me(n) != Jn) return !1;
        var t = Wl(n);
        if (null === t) return !0;
        var r = ml.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && wl.call(r) == kl;
      }
      function ba(n) {
        return fa(n) && n >= -Sn && n <= Sn;
      }
      function wa(n) {
        return "string" == typeof n || (!mh(n) && la(n) && me(n) == tt);
      }
      function ma(n) {
        return "symbol" == typeof n || (la(n) && me(n) == rt);
      }
      function xa(n) {
        return n === X;
      }
      function ja(n) {
        return la(n) && Ss(n) == ut;
      }
      function Aa(n) {
        return la(n) && me(n) == it;
      }
      function ka(n) {
        if (!n) return [];
        if (Yf(n)) return wa(n) ? H(n) : Mu(n);
        if (Tl && n[Tl]) return M(n[Tl]());
        var t = Ss(n),
          r = t == Vn ? F : t == nt ? q : uc;
        return r(n);
      }
      function Oa(n) {
        if (!n) return 0 === n ? n : 0;
        if (((n = za(n)), n === En || n === -En)) {
          var t = n < 0 ? -1 : 1;
          return t * Wn;
        }
        return n === n ? n : 0;
      }
      function Ia(n) {
        var t = Oa(n),
          r = t % 1;
        return t === t ? (r ? t - r : t) : 0;
      }
      function Ra(n) {
        return n ? Fr(Ia(n), 0, Cn) : 0;
      }
      function za(n) {
        if ("number" == typeof n) return n;
        if (ma(n)) return Ln;
        if (ca(n)) {
          var t = "function" == typeof n.valueOf ? n.valueOf() : n;
          n = ca(t) ? t + "" : t;
        }
        if ("string" != typeof n) return 0 === n ? n : +n;
        n = n.replace(Lt, "");
        var r = qt.test(n);
        return r || Kt.test(n)
          ? Xr(n.slice(2), r ? 2 : 8)
          : Pt.test(n)
          ? Ln
          : +n;
      }
      function Ea(n) {
        return Fu(n, Ka(n));
      }
      function Sa(n) {
        return n ? Fr(Ia(n), -Sn, Sn) : 0 === n ? n : 0;
      }
      function Wa(n) {
        return null == n ? "" : gu(n);
      }
      function La(n, t) {
        var r = ds(n);
        return null == t ? r : Ur(r, t);
      }
      function Ca(n, t) {
        return y(n, Ai(t, 3), oe);
      }
      function Ua(n, t) {
        return y(n, Ai(t, 3), fe);
      }
      function Ba(n, t) {
        return null == n ? n : ms(n, Ai(t, 3), Ka);
      }
      function Ta(n, t) {
        return null == n ? n : xs(n, Ai(t, 3), Ka);
      }
      function $a(n, t) {
        return n && oe(n, Ai(t, 3));
      }
      function Da(n, t) {
        return n && fe(n, Ai(t, 3));
      }
      function Ma(n) {
        return null == n ? [] : ve(n, Za(n));
      }
      function Fa(n) {
        return null == n ? [] : ve(n, Ka(n));
      }
      function Na(n, t, r) {
        var e = null == n ? X : de(n, t);
        return e === X ? r : e;
      }
      function Pa(n, t) {
        return null != n && Si(n, t, je);
      }
      function qa(n, t) {
        return null != n && Si(n, t, Ae);
      }
      function Za(n) {
        return Yf(n) ? Ir(n) : Fe(n);
      }
      function Ka(n) {
        return Yf(n) ? Ir(n, !0) : Ne(n);
      }
      function Va(n, t) {
        var r = {};
        return (
          (t = Ai(t, 3)),
          oe(n, function (n, e, u) {
            Tr(r, t(n, e, u), n);
          }),
          r
        );
      }
      function Ga(n, t) {
        var r = {};
        return (
          (t = Ai(t, 3)),
          oe(n, function (n, e, u) {
            Tr(r, e, t(n, e, u));
          }),
          r
        );
      }
      function Ha(n, t) {
        return Ja(n, Tf(Ai(t)));
      }
      function Ja(n, t) {
        if (null == n) return {};
        var r = l(mi(n), function (n) {
          return [n];
        });
        return (
          (t = Ai(t)),
          Qe(n, r, function (n, r) {
            return t(n, r[0]);
          })
        );
      }
      function Ya(n, t, r) {
        t = Ou(t, n);
        var e = -1,
          u = t.length;
        for (u || ((u = 1), (n = X)); ++e < u; ) {
          var i = null == n ? X : n[ro(t[e])];
          i === X && ((e = u), (i = r)), (n = oa(i) ? i.call(n) : i);
        }
        return n;
      }
      function Qa(n, t, r) {
        return null == n ? n : au(n, t, r);
      }
      function Xa(n, t, r, e) {
        return (
          (e = "function" == typeof e ? e : X), null == n ? n : au(n, t, r, e)
        );
      }
      function nc(n, t, r) {
        var e = mh(n),
          i = e || jh(n) || Rh(n);
        if (((t = Ai(t, 4)), null == r)) {
          var o = n && n.constructor;
          r = i ? (e ? new o() : []) : ca(n) && oa(o) ? ds(Wl(n)) : {};
        }
        return (
          (i ? u : oe)(n, function (n, e, u) {
            return t(r, n, e, u);
          }),
          r
        );
      }
      function tc(n, t) {
        return null == n || du(n, t);
      }
      function rc(n, t, r) {
        return null == n ? n : bu(n, t, ku(r));
      }
      function ec(n, t, r, e) {
        return (
          (e = "function" == typeof e ? e : X),
          null == n ? n : bu(n, t, ku(r), e)
        );
      }
      function uc(n) {
        return null == n ? [] : S(n, Za(n));
      }
      function ic(n) {
        return null == n ? [] : S(n, Ka(n));
      }
      function oc(n, t, r) {
        return (
          r === X && ((r = t), (t = X)),
          r !== X && ((r = za(r)), (r = r === r ? r : 0)),
          t !== X && ((t = za(t)), (t = t === t ? t : 0)),
          Fr(za(n), t, r)
        );
      }
      function fc(n, t, r) {
        return (
          (t = Oa(t)),
          r === X ? ((r = t), (t = 0)) : (r = Oa(r)),
          (n = za(n)),
          ke(n, t, r)
        );
      }
      function ac(n, t, r) {
        if (
          (r && "boolean" != typeof r && $i(n, t, r) && (t = r = X),
          r === X &&
            ("boolean" == typeof t
              ? ((r = t), (t = X))
              : "boolean" == typeof n && ((r = n), (n = X))),
          n === X && t === X
            ? ((n = 0), (t = 1))
            : ((n = Oa(n)), t === X ? ((t = n), (n = 0)) : (t = Oa(t))),
          n > t)
        ) {
          var e = n;
          (n = t), (t = e);
        }
        if (r || n % 1 || t % 1) {
          var u = ns();
          return Yl(n + u * (t - n + Qr("1e-" + ((u + "").length - 1))), t);
        }
        return ru(n, t);
      }
      function cc(n) {
        return np(Wa(n).toLowerCase());
      }
      function lc(n) {
        return (n = Wa(n)), n && n.replace(Gt, _e).replace(Dr, "");
      }
      function sc(n, t, r) {
        (n = Wa(n)), (t = gu(t));
        var e = n.length;
        r = r === X ? e : Fr(Ia(r), 0, e);
        var u = r;
        return (r -= t.length), r >= 0 && n.slice(r, u) == t;
      }
      function hc(n) {
        return (n = Wa(n)), n && jt.test(n) ? n.replace(mt, ge) : n;
      }
      function pc(n) {
        return (n = Wa(n)), n && Wt.test(n) ? n.replace(St, "\\$&") : n;
      }
      function vc(n, t, r) {
        (n = Wa(n)), (t = Ia(t));
        var e = t ? G(n) : 0;
        if (!t || e >= t) return n;
        var u = (t - e) / 2;
        return ii(ql(u), r) + n + ii(Pl(u), r);
      }
      function _c(n, t, r) {
        (n = Wa(n)), (t = Ia(t));
        var e = t ? G(n) : 0;
        return t && e < t ? n + ii(t - e, r) : n;
      }
      function gc(n, t, r) {
        (n = Wa(n)), (t = Ia(t));
        var e = t ? G(n) : 0;
        return t && e < t ? ii(t - e, r) + n : n;
      }
      function yc(n, t, r) {
        return (
          r || null == t ? (t = 0) : t && (t = +t),
          Xl(Wa(n).replace(Ct, ""), t || 0)
        );
      }
      function dc(n, t, r) {
        return (t = (r ? $i(n, t, r) : t === X) ? 1 : Ia(t)), uu(Wa(n), t);
      }
      function bc() {
        var n = arguments,
          t = Wa(n[0]);
        return n.length < 3 ? t : t.replace(n[1], n[2]);
      }
      function wc(n, t, r) {
        return (
          r && "number" != typeof r && $i(n, t, r) && (t = r = X),
          (r = r === X ? Cn : r >>> 0)
            ? ((n = Wa(n)),
              n &&
              ("string" == typeof t || (null != t && !Oh(t))) &&
              ((t = gu(t)), !t && $(n))
                ? Iu(H(n), 0, r)
                : n.split(t, r))
            : []
        );
      }
      function mc(n, t, r) {
        return (
          (n = Wa(n)),
          (r = null == r ? 0 : Fr(Ia(r), 0, n.length)),
          (t = gu(t)),
          n.slice(r, r + t.length) == t
        );
      }
      function xc(n, t, r) {
        var e = K.templateSettings;
        r && $i(n, t, r) && (t = X), (n = Wa(n)), (t = Lh({}, t, e, pi));
        var u,
          i,
          o = Lh({}, t.imports, e.imports, pi),
          f = Za(o),
          a = S(o, f),
          c = 0,
          l = t.interpolate || Ht,
          s = "__p += '",
          h = pl(
            (t.escape || Ht).source +
              "|" +
              l.source +
              "|" +
              (l === Ot ? Ft : Ht).source +
              "|" +
              (t.evaluate || Ht).source +
              "|$",
            "g"
          ),
          p =
            "//# sourceURL=" +
            ("sourceURL" in t
              ? t.sourceURL
              : "lodash.templateSources[" + ++Zr + "]") +
            "\n";
        n.replace(h, function (t, r, e, o, f, a) {
          return (
            e || (e = o),
            (s += n.slice(c, a).replace(Jt, B)),
            r && ((u = !0), (s += "' +\n__e(" + r + ") +\n'")),
            f && ((i = !0), (s += "';\n" + f + ";\n__p += '")),
            e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"),
            (c = a + t.length),
            t
          );
        }),
          (s += "';\n");
        var v = t.variable;
        v || (s = "with (obj) {\n" + s + "\n}\n"),
          (s = (i ? s.replace(yt, "") : s)
            .replace(dt, "$1")
            .replace(bt, "$1;")),
          (s =
            "function(" +
            (v || "obj") +
            ") {\n" +
            (v ? "" : "obj || (obj = {});\n") +
            "var __t, __p = ''" +
            (u ? ", __e = _.escape" : "") +
            (i
              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
              : ";\n") +
            s +
            "return __p\n}");
        var _ = tp(function () {
          return ll(f, p + "return " + s).apply(X, a);
        });
        if (((_.source = s), ua(_))) throw _;
        return _;
      }
      function jc(n) {
        return Wa(n).toLowerCase();
      }
      function Ac(n) {
        return Wa(n).toUpperCase();
      }
      function kc(n, t, r) {
        if (((n = Wa(n)), n && (r || t === X))) return n.replace(Lt, "");
        if (!n || !(t = gu(t))) return n;
        var e = H(n),
          u = H(t),
          i = L(e, u),
          o = C(e, u) + 1;
        return Iu(e, i, o).join("");
      }
      function Oc(n, t, r) {
        if (((n = Wa(n)), n && (r || t === X))) return n.replace(Ut, "");
        if (!n || !(t = gu(t))) return n;
        var e = H(n),
          u = C(e, H(t)) + 1;
        return Iu(e, 0, u).join("");
      }
      function Ic(n, t, r) {
        if (((n = Wa(n)), n && (r || t === X))) return n.replace(Ct, "");
        if (!n || !(t = gu(t))) return n;
        var e = H(n),
          u = L(e, H(t));
        return Iu(e, u).join("");
      }
      function Rc(n, t) {
        var r = jn,
          e = An;
        if (ca(t)) {
          var u = "separator" in t ? t.separator : u;
          (r = "length" in t ? Ia(t.length) : r),
            (e = "omission" in t ? gu(t.omission) : e);
        }
        n = Wa(n);
        var i = n.length;
        if ($(n)) {
          var o = H(n);
          i = o.length;
        }
        if (r >= i) return n;
        var f = r - G(e);
        if (f < 1) return e;
        var a = o ? Iu(o, 0, f).join("") : n.slice(0, f);
        if (u === X) return a + e;
        if ((o && (f += a.length - f), Oh(u))) {
          if (n.slice(f).search(u)) {
            var c,
              l = a;
            for (
              u.global || (u = pl(u.source, Wa(Nt.exec(u)) + "g")),
                u.lastIndex = 0;
              (c = u.exec(l));

            )
              var s = c.index;
            a = a.slice(0, s === X ? f : s);
          }
        } else if (n.indexOf(gu(u), f) != f) {
          var h = a.lastIndexOf(u);
          h > -1 && (a = a.slice(0, h));
        }
        return a + e;
      }
      function zc(n) {
        return (n = Wa(n)), n && xt.test(n) ? n.replace(wt, ye) : n;
      }
      function Ec(n, t, r) {
        return (
          (n = Wa(n)),
          (t = r ? X : t),
          t === X ? (D(n) ? Q(n) : g(n)) : n.match(t) || []
        );
      }
      function Sc(n) {
        var t = null == n ? 0 : n.length,
          e = Ai();
        return (
          (n = t
            ? l(n, function (n) {
                if ("function" != typeof n[1]) throw new _l(en);
                return [e(n[0]), n[1]];
              })
            : []),
          iu(function (e) {
            for (var u = -1; ++u < t; ) {
              var i = n[u];
              if (r(i[0], this, e)) return r(i[1], this, e);
            }
          })
        );
      }
      function Wc(n) {
        return Pr(Nr(n, an));
      }
      function Lc(n) {
        return function () {
          return n;
        };
      }
      function Cc(n, t) {
        return null == n || n !== n ? t : n;
      }
      function Uc(n) {
        return n;
      }
      function Bc(n) {
        return Me("function" == typeof n ? n : Nr(n, an));
      }
      function Tc(n) {
        return Ze(Nr(n, an));
      }
      function $c(n, t) {
        return Ke(n, Nr(t, an));
      }
      function Dc(n, t, r) {
        var e = Za(t),
          i = ve(t, e);
        null != r ||
          (ca(t) && (i.length || !e.length)) ||
          ((r = t), (t = n), (n = this), (i = ve(t, Za(t))));
        var o = !(ca(r) && "chain" in r && !r.chain),
          f = oa(n);
        return (
          u(i, function (r) {
            var e = t[r];
            (n[r] = e),
              f &&
                (n.prototype[r] = function () {
                  var t = this.__chain__;
                  if (o || t) {
                    var r = n(this.__wrapped__),
                      u = (r.__actions__ = Mu(this.__actions__));
                    return (
                      u.push({ func: e, args: arguments, thisArg: n }),
                      (r.__chain__ = t),
                      r
                    );
                  }
                  return e.apply(n, s([this.value()], arguments));
                });
          }),
          n
        );
      }
      function Mc() {
        return re._ === this && (re._ = Ol), this;
      }
      function Fc() {}
      function Nc(n) {
        return (
          (n = Ia(n)),
          iu(function (t) {
            return He(t, n);
          })
        );
      }
      function Pc(n) {
        return Di(n) ? j(ro(n)) : Xe(n);
      }
      function qc(n) {
        return function (t) {
          return null == n ? X : de(n, t);
        };
      }
      function Zc() {
        return [];
      }
      function Kc() {
        return !1;
      }
      function Vc() {
        return {};
      }
      function Gc() {
        return "";
      }
      function Hc() {
        return !0;
      }
      function Jc(n, t) {
        if (((n = Ia(n)), n < 1 || n > Sn)) return [];
        var r = Cn,
          e = Yl(n, Cn);
        (t = Ai(t)), (n -= Cn);
        for (var u = R(e, t); ++r < n; ) t(r);
        return u;
      }
      function Yc(n) {
        return mh(n) ? l(n, ro) : ma(n) ? [n] : Mu(Bs(Wa(n)));
      }
      function Qc(n) {
        var t = ++xl;
        return Wa(n) + t;
      }
      function Xc(n) {
        return n && n.length ? ne(n, Uc, xe) : X;
      }
      function nl(n, t) {
        return n && n.length ? ne(n, Ai(t, 2), xe) : X;
      }
      function tl(n) {
        return x(n, Uc);
      }
      function rl(n, t) {
        return x(n, Ai(t, 2));
      }
      function el(n) {
        return n && n.length ? ne(n, Uc, Pe) : X;
      }
      function ul(n, t) {
        return n && n.length ? ne(n, Ai(t, 2), Pe) : X;
      }
      function il(n) {
        return n && n.length ? I(n, Uc) : 0;
      }
      function ol(n, t) {
        return n && n.length ? I(n, Ai(t, 2)) : 0;
      }
      A = null == A ? re : be.defaults(re.Object(), A, be.pick(re, qr));
      var fl = A.Array,
        al = A.Date,
        cl = A.Error,
        ll = A.Function,
        sl = A.Math,
        hl = A.Object,
        pl = A.RegExp,
        vl = A.String,
        _l = A.TypeError,
        gl = fl.prototype,
        yl = ll.prototype,
        dl = hl.prototype,
        bl = A["__core-js_shared__"],
        wl = yl.toString,
        ml = dl.hasOwnProperty,
        xl = 0,
        jl = (function () {
          var n = /[^.]+$/.exec((bl && bl.keys && bl.keys.IE_PROTO) || "");
          return n ? "Symbol(src)_1." + n : "";
        })(),
        Al = dl.toString,
        kl = wl.call(hl),
        Ol = re._,
        Il = pl(
          "^" +
            wl
              .call(ml)
              .replace(St, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        Rl = ie ? A.Buffer : X,
        zl = A.Symbol,
        El = A.Uint8Array,
        Sl = Rl ? Rl.allocUnsafe : X,
        Wl = N(hl.getPrototypeOf, hl),
        Ll = hl.create,
        Cl = dl.propertyIsEnumerable,
        Ul = gl.splice,
        Bl = zl ? zl.isConcatSpreadable : X,
        Tl = zl ? zl.iterator : X,
        $l = zl ? zl.toStringTag : X,
        Dl = (function () {
          try {
            var n = Ii(hl, "defineProperty");
            return n({}, "", {}), n;
          } catch (n) {}
        })(),
        Ml = A.clearTimeout !== re.clearTimeout && A.clearTimeout,
        Fl = al && al.now !== re.Date.now && al.now,
        Nl = A.setTimeout !== re.setTimeout && A.setTimeout,
        Pl = sl.ceil,
        ql = sl.floor,
        Zl = hl.getOwnPropertySymbols,
        Kl = Rl ? Rl.isBuffer : X,
        Vl = A.isFinite,
        Gl = gl.join,
        Hl = N(hl.keys, hl),
        Jl = sl.max,
        Yl = sl.min,
        Ql = al.now,
        Xl = A.parseInt,
        ns = sl.random,
        ts = gl.reverse,
        rs = Ii(A, "DataView"),
        es = Ii(A, "Map"),
        us = Ii(A, "Promise"),
        is = Ii(A, "Set"),
        os = Ii(A, "WeakMap"),
        fs = Ii(hl, "create"),
        as = os && new os(),
        cs = {},
        ls = eo(rs),
        ss = eo(es),
        hs = eo(us),
        ps = eo(is),
        vs = eo(os),
        _s = zl ? zl.prototype : X,
        gs = _s ? _s.valueOf : X,
        ys = _s ? _s.toString : X,
        ds = (function () {
          function n() {}
          return function (t) {
            if (!ca(t)) return {};
            if (Ll) return Ll(t);
            n.prototype = t;
            var r = new n();
            return (n.prototype = X), r;
          };
        })();
      (K.templateSettings = {
        escape: At,
        evaluate: kt,
        interpolate: Ot,
        variable: "",
        imports: { _: K },
      }),
        (K.prototype = J.prototype),
        (K.prototype.constructor = K),
        (Y.prototype = ds(J.prototype)),
        (Y.prototype.constructor = Y),
        (Dt.prototype = ds(J.prototype)),
        (Dt.prototype.constructor = Dt),
        (nr.prototype.clear = tr),
        (nr.prototype.delete = rr),
        (nr.prototype.get = er),
        (nr.prototype.has = ur),
        (nr.prototype.set = ir),
        (or.prototype.clear = fr),
        (or.prototype.delete = ar),
        (or.prototype.get = cr),
        (or.prototype.has = lr),
        (or.prototype.set = sr),
        (hr.prototype.clear = pr),
        (hr.prototype.delete = vr),
        (hr.prototype.get = _r),
        (hr.prototype.has = gr),
        (hr.prototype.set = yr),
        (dr.prototype.add = dr.prototype.push = br),
        (dr.prototype.has = wr),
        (mr.prototype.clear = xr),
        (mr.prototype.delete = jr),
        (mr.prototype.get = Ar),
        (mr.prototype.has = kr),
        (mr.prototype.set = Or);
      var bs = Ku(oe),
        ws = Ku(fe, !0),
        ms = Vu(),
        xs = Vu(!0),
        js = as
          ? function (n, t) {
              return as.set(n, t), n;
            }
          : Uc,
        As = Dl
          ? function (n, t) {
              return Dl(n, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Lc(t),
                writable: !0,
              });
            }
          : Uc,
        ks = iu,
        Os =
          Ml ||
          function (n) {
            return re.clearTimeout(n);
          },
        Is =
          is && 1 / q(new is([, -0]))[1] == En
            ? function (n) {
                return new is(n);
              }
            : Fc,
        Rs = as
          ? function (n) {
              return as.get(n);
            }
          : Fc,
        zs = Zl
          ? function (n) {
              return null == n
                ? []
                : ((n = hl(n)),
                  f(Zl(n), function (t) {
                    return Cl.call(n, t);
                  }));
            }
          : Zc,
        Es = Zl
          ? function (n) {
              for (var t = []; n; ) s(t, zs(n)), (n = Wl(n));
              return t;
            }
          : Zc,
        Ss = me;
      ((rs && Ss(new rs(new ArrayBuffer(1))) != ft) ||
        (es && Ss(new es()) != Vn) ||
        (us && Ss(us.resolve()) != Yn) ||
        (is && Ss(new is()) != nt) ||
        (os && Ss(new os()) != ut)) &&
        (Ss = function (n) {
          var t = me(n),
            r = t == Jn ? n.constructor : X,
            e = r ? eo(r) : "";
          if (e)
            switch (e) {
              case ls:
                return ft;
              case ss:
                return Vn;
              case hs:
                return Yn;
              case ps:
                return nt;
              case vs:
                return ut;
            }
          return t;
        });
      var Ws = bl ? oa : Kc,
        Ls = no(js),
        Cs =
          Nl ||
          function (n, t) {
            return re.setTimeout(n, t);
          },
        Us = no(As),
        Bs = Ki(function (n) {
          var t = [];
          return (
            zt.test(n) && t.push(""),
            n.replace(Et, function (n, r, e, u) {
              t.push(e ? u.replace(Mt, "$1") : r || n);
            }),
            t
          );
        }),
        Ts = iu(function (n, t) {
          return Qf(n) ? Jr(n, ue(t, 1, Qf, !0)) : [];
        }),
        $s = iu(function (n, t) {
          var r = ko(t);
          return (
            Qf(r) && (r = X), Qf(n) ? Jr(n, ue(t, 1, Qf, !0), Ai(r, 2)) : []
          );
        }),
        Ds = iu(function (n, t) {
          var r = ko(t);
          return Qf(r) && (r = X), Qf(n) ? Jr(n, ue(t, 1, Qf, !0), X, r) : [];
        }),
        Ms = iu(function (n) {
          var t = l(n, Au);
          return t.length && t[0] === n[0] ? Oe(t) : [];
        }),
        Fs = iu(function (n) {
          var t = ko(n),
            r = l(n, Au);
          return (
            t === ko(r) ? (t = X) : r.pop(),
            r.length && r[0] === n[0] ? Oe(r, Ai(t, 2)) : []
          );
        }),
        Ns = iu(function (n) {
          var t = ko(n),
            r = l(n, Au);
          return (
            (t = "function" == typeof t ? t : X),
            t && r.pop(),
            r.length && r[0] === n[0] ? Oe(r, X, t) : []
          );
        }),
        Ps = iu(Ro),
        qs = bi(function (n, t) {
          var r = null == n ? 0 : n.length,
            e = Mr(n, t);
          return (
            tu(
              n,
              l(t, function (n) {
                return Ti(n, r) ? +n : n;
              }).sort(Bu)
            ),
            e
          );
        }),
        Zs = iu(function (n) {
          return yu(ue(n, 1, Qf, !0));
        }),
        Ks = iu(function (n) {
          var t = ko(n);
          return Qf(t) && (t = X), yu(ue(n, 1, Qf, !0), Ai(t, 2));
        }),
        Vs = iu(function (n) {
          var t = ko(n);
          return (
            (t = "function" == typeof t ? t : X), yu(ue(n, 1, Qf, !0), X, t)
          );
        }),
        Gs = iu(function (n, t) {
          return Qf(n) ? Jr(n, t) : [];
        }),
        Hs = iu(function (n) {
          return xu(f(n, Qf));
        }),
        Js = iu(function (n) {
          var t = ko(n);
          return Qf(t) && (t = X), xu(f(n, Qf), Ai(t, 2));
        }),
        Ys = iu(function (n) {
          var t = ko(n);
          return (t = "function" == typeof t ? t : X), xu(f(n, Qf), X, t);
        }),
        Qs = iu(Jo),
        Xs = iu(function (n) {
          var t = n.length,
            r = t > 1 ? n[t - 1] : X;
          return (r = "function" == typeof r ? (n.pop(), r) : X), Yo(n, r);
        }),
        nh = bi(function (n) {
          var t = n.length,
            r = t ? n[0] : 0,
            e = this.__wrapped__,
            u = function (t) {
              return Mr(t, n);
            };
          return !(t > 1 || this.__actions__.length) && e instanceof Dt && Ti(r)
            ? ((e = e.slice(r, +r + (t ? 1 : 0))),
              e.__actions__.push({ func: rf, args: [u], thisArg: X }),
              new Y(e, this.__chain__).thru(function (n) {
                return t && !n.length && n.push(X), n;
              }))
            : this.thru(u);
        }),
        th = qu(function (n, t, r) {
          ml.call(n, r) ? ++n[r] : Tr(n, r, 1);
        }),
        rh = Xu(vo),
        eh = Xu(_o),
        uh = qu(function (n, t, r) {
          ml.call(n, r) ? n[r].push(t) : Tr(n, r, [t]);
        }),
        ih = iu(function (n, t, e) {
          var u = -1,
            i = "function" == typeof t,
            o = Yf(n) ? fl(n.length) : [];
          return (
            bs(n, function (n) {
              o[++u] = i ? r(t, n, e) : Re(n, t, e);
            }),
            o
          );
        }),
        oh = qu(function (n, t, r) {
          Tr(n, r, t);
        }),
        fh = qu(
          function (n, t, r) {
            n[r ? 0 : 1].push(t);
          },
          function () {
            return [[], []];
          }
        ),
        ah = iu(function (n, t) {
          if (null == n) return [];
          var r = t.length;
          return (
            r > 1 && $i(n, t[0], t[1])
              ? (t = [])
              : r > 2 && $i(t[0], t[1], t[2]) && (t = [t[0]]),
            Je(n, ue(t, 1), [])
          );
        }),
        ch =
          Fl ||
          function () {
            return re.Date.now();
          },
        lh = iu(function (n, t, r) {
          var e = pn;
          if (r.length) {
            var u = P(r, ji(lh));
            e |= dn;
          }
          return hi(n, e, t, r, u);
        }),
        sh = iu(function (n, t, r) {
          var e = pn | vn;
          if (r.length) {
            var u = P(r, ji(sh));
            e |= dn;
          }
          return hi(t, e, n, r, u);
        }),
        hh = iu(function (n, t) {
          return Hr(n, 1, t);
        }),
        ph = iu(function (n, t, r) {
          return Hr(n, za(t) || 0, r);
        });
      Bf.Cache = hr;
      var vh = ks(function (n, t) {
          t =
            1 == t.length && mh(t[0]) ? l(t[0], E(Ai())) : l(ue(t, 1), E(Ai()));
          var e = t.length;
          return iu(function (u) {
            for (var i = -1, o = Yl(u.length, e); ++i < o; )
              u[i] = t[i].call(this, u[i]);
            return r(n, this, u);
          });
        }),
        _h = iu(function (n, t) {
          var r = P(t, ji(_h));
          return hi(n, dn, X, t, r);
        }),
        gh = iu(function (n, t) {
          var r = P(t, ji(gh));
          return hi(n, bn, X, t, r);
        }),
        yh = bi(function (n, t) {
          return hi(n, mn, X, X, X, t);
        }),
        dh = ai(xe),
        bh = ai(function (n, t) {
          return n >= t;
        }),
        wh = ze(
          (function () {
            return arguments;
          })()
        )
          ? ze
          : function (n) {
              return la(n) && ml.call(n, "callee") && !Cl.call(n, "callee");
            },
        mh = fl.isArray,
        xh = ae ? E(ae) : Ee,
        jh = Kl || Kc,
        Ah = ce ? E(ce) : Se,
        kh = le ? E(le) : Ce,
        Oh = se ? E(se) : Te,
        Ih = he ? E(he) : $e,
        Rh = pe ? E(pe) : De,
        zh = ai(Pe),
        Eh = ai(function (n, t) {
          return n <= t;
        }),
        Sh = Zu(function (n, t) {
          if (Pi(t) || Yf(t)) return void Fu(t, Za(t), n);
          for (var r in t) ml.call(t, r) && Wr(n, r, t[r]);
        }),
        Wh = Zu(function (n, t) {
          Fu(t, Ka(t), n);
        }),
        Lh = Zu(function (n, t, r, e) {
          Fu(t, Ka(t), n, e);
        }),
        Ch = Zu(function (n, t, r, e) {
          Fu(t, Za(t), n, e);
        }),
        Uh = bi(Mr),
        Bh = iu(function (n) {
          return n.push(X, pi), r(Lh, X, n);
        }),
        Th = iu(function (n) {
          return n.push(X, vi), r(Nh, X, n);
        }),
        $h = ri(function (n, t, r) {
          n[t] = r;
        }, Lc(Uc)),
        Dh = ri(function (n, t, r) {
          ml.call(n, t) ? n[t].push(r) : (n[t] = [r]);
        }, Ai),
        Mh = iu(Re),
        Fh = Zu(function (n, t, r) {
          Ve(n, t, r);
        }),
        Nh = Zu(function (n, t, r, e) {
          Ve(n, t, r, e);
        }),
        Ph = bi(function (n, t) {
          var r = {};
          if (null == n) return r;
          var e = !1;
          (t = l(t, function (t) {
            return (t = Ou(t, n)), e || (e = t.length > 1), t;
          })),
            Fu(n, mi(n), r),
            e && (r = Nr(r, an | cn | ln, _i));
          for (var u = t.length; u--; ) du(r, t[u]);
          return r;
        }),
        qh = bi(function (n, t) {
          return null == n ? {} : Ye(n, t);
        }),
        Zh = si(Za),
        Kh = si(Ka),
        Vh = Ju(function (n, t, r) {
          return (t = t.toLowerCase()), n + (r ? cc(t) : t);
        }),
        Gh = Ju(function (n, t, r) {
          return n + (r ? "-" : "") + t.toLowerCase();
        }),
        Hh = Ju(function (n, t, r) {
          return n + (r ? " " : "") + t.toLowerCase();
        }),
        Jh = Hu("toLowerCase"),
        Yh = Ju(function (n, t, r) {
          return n + (r ? "_" : "") + t.toLowerCase();
        }),
        Qh = Ju(function (n, t, r) {
          return n + (r ? " " : "") + np(t);
        }),
        Xh = Ju(function (n, t, r) {
          return n + (r ? " " : "") + t.toUpperCase();
        }),
        np = Hu("toUpperCase"),
        tp = iu(function (n, t) {
          try {
            return r(n, X, t);
          } catch (n) {
            return ua(n) ? n : new cl(n);
          }
        }),
        rp = bi(function (n, t) {
          return (
            u(t, function (t) {
              (t = ro(t)), Tr(n, t, lh(n[t], n));
            }),
            n
          );
        }),
        ep = ni(),
        up = ni(!0),
        ip = iu(function (n, t) {
          return function (r) {
            return Re(r, n, t);
          };
        }),
        op = iu(function (n, t) {
          return function (r) {
            return Re(n, r, t);
          };
        }),
        fp = ui(l),
        ap = ui(o),
        cp = ui(v),
        lp = fi(),
        sp = fi(!0),
        hp = ei(function (n, t) {
          return n + t;
        }, 0),
        pp = li("ceil"),
        vp = ei(function (n, t) {
          return n / t;
        }, 1),
        _p = li("floor"),
        gp = ei(function (n, t) {
          return n * t;
        }, 1),
        yp = li("round"),
        dp = ei(function (n, t) {
          return n - t;
        }, 0);
      return (
        (K.after = zf),
        (K.ary = Ef),
        (K.assign = Sh),
        (K.assignIn = Wh),
        (K.assignInWith = Lh),
        (K.assignWith = Ch),
        (K.at = Uh),
        (K.before = Sf),
        (K.bind = lh),
        (K.bindAll = rp),
        (K.bindKey = sh),
        (K.castArray = qf),
        (K.chain = nf),
        (K.chunk = oo),
        (K.compact = fo),
        (K.concat = ao),
        (K.cond = Sc),
        (K.conforms = Wc),
        (K.constant = Lc),
        (K.countBy = th),
        (K.create = La),
        (K.curry = Wf),
        (K.curryRight = Lf),
        (K.debounce = Cf),
        (K.defaults = Bh),
        (K.defaultsDeep = Th),
        (K.defer = hh),
        (K.delay = ph),
        (K.difference = Ts),
        (K.differenceBy = $s),
        (K.differenceWith = Ds),
        (K.drop = co),
        (K.dropRight = lo),
        (K.dropRightWhile = so),
        (K.dropWhile = ho),
        (K.fill = po),
        (K.filter = hf),
        (K.flatMap = pf),
        (K.flatMapDeep = vf),
        (K.flatMapDepth = _f),
        (K.flatten = go),
        (K.flattenDeep = yo),
        (K.flattenDepth = bo),
        (K.flip = Uf),
        (K.flow = ep),
        (K.flowRight = up),
        (K.fromPairs = wo),
        (K.functions = Ma),
        (K.functionsIn = Fa),
        (K.groupBy = uh),
        (K.initial = jo),
        (K.intersection = Ms),
        (K.intersectionBy = Fs),
        (K.intersectionWith = Ns),
        (K.invert = $h),
        (K.invertBy = Dh),
        (K.invokeMap = ih),
        (K.iteratee = Bc),
        (K.keyBy = oh),
        (K.keys = Za),
        (K.keysIn = Ka),
        (K.map = bf),
        (K.mapKeys = Va),
        (K.mapValues = Ga),
        (K.matches = Tc),
        (K.matchesProperty = $c),
        (K.memoize = Bf),
        (K.merge = Fh),
        (K.mergeWith = Nh),
        (K.method = ip),
        (K.methodOf = op),
        (K.mixin = Dc),
        (K.negate = Tf),
        (K.nthArg = Nc),
        (K.omit = Ph),
        (K.omitBy = Ha),
        (K.once = $f),
        (K.orderBy = wf),
        (K.over = fp),
        (K.overArgs = vh),
        (K.overEvery = ap),
        (K.overSome = cp),
        (K.partial = _h),
        (K.partialRight = gh),
        (K.partition = fh),
        (K.pick = qh),
        (K.pickBy = Ja),
        (K.property = Pc),
        (K.propertyOf = qc),
        (K.pull = Ps),
        (K.pullAll = Ro),
        (K.pullAllBy = zo),
        (K.pullAllWith = Eo),
        (K.pullAt = qs),
        (K.range = lp),
        (K.rangeRight = sp),
        (K.rearg = yh),
        (K.reject = jf),
        (K.remove = So),
        (K.rest = Df),
        (K.reverse = Wo),
        (K.sampleSize = kf),
        (K.set = Qa),
        (K.setWith = Xa),
        (K.shuffle = Of),
        (K.slice = Lo),
        (K.sortBy = ah),
        (K.sortedUniq = Mo),
        (K.sortedUniqBy = Fo),
        (K.split = wc),
        (K.spread = Mf),
        (K.tail = No),
        (K.take = Po),
        (K.takeRight = qo),
        (K.takeRightWhile = Zo),
        (K.takeWhile = Ko),
        (K.tap = tf),
        (K.throttle = Ff),
        (K.thru = rf),
        (K.toArray = ka),
        (K.toPairs = Zh),
        (K.toPairsIn = Kh),
        (K.toPath = Yc),
        (K.toPlainObject = Ea),
        (K.transform = nc),
        (K.unary = Nf),
        (K.union = Zs),
        (K.unionBy = Ks),
        (K.unionWith = Vs),
        (K.uniq = Vo),
        (K.uniqBy = Go),
        (K.uniqWith = Ho),
        (K.unset = tc),
        (K.unzip = Jo),
        (K.unzipWith = Yo),
        (K.update = rc),
        (K.updateWith = ec),
        (K.values = uc),
        (K.valuesIn = ic),
        (K.without = Gs),
        (K.words = Ec),
        (K.wrap = Pf),
        (K.xor = Hs),
        (K.xorBy = Js),
        (K.xorWith = Ys),
        (K.zip = Qs),
        (K.zipObject = Qo),
        (K.zipObjectDeep = Xo),
        (K.zipWith = Xs),
        (K.entries = Zh),
        (K.entriesIn = Kh),
        (K.extend = Wh),
        (K.extendWith = Lh),
        Dc(K, K),
        (K.add = hp),
        (K.attempt = tp),
        (K.camelCase = Vh),
        (K.capitalize = cc),
        (K.ceil = pp),
        (K.clamp = oc),
        (K.clone = Zf),
        (K.cloneDeep = Vf),
        (K.cloneDeepWith = Gf),
        (K.cloneWith = Kf),
        (K.conformsTo = Hf),
        (K.deburr = lc),
        (K.defaultTo = Cc),
        (K.divide = vp),
        (K.endsWith = sc),
        (K.eq = Jf),
        (K.escape = hc),
        (K.escapeRegExp = pc),
        (K.every = sf),
        (K.find = rh),
        (K.findIndex = vo),
        (K.findKey = Ca),
        (K.findLast = eh),
        (K.findLastIndex = _o),
        (K.findLastKey = Ua),
        (K.floor = _p),
        (K.forEach = gf),
        (K.forEachRight = yf),
        (K.forIn = Ba),
        (K.forInRight = Ta),
        (K.forOwn = $a),
        (K.forOwnRight = Da),
        (K.get = Na),
        (K.gt = dh),
        (K.gte = bh),
        (K.has = Pa),
        (K.hasIn = qa),
        (K.head = mo),
        (K.identity = Uc),
        (K.includes = df),
        (K.indexOf = xo),
        (K.inRange = fc),
        (K.invoke = Mh),
        (K.isArguments = wh),
        (K.isArray = mh),
        (K.isArrayBuffer = xh),
        (K.isArrayLike = Yf),
        (K.isArrayLikeObject = Qf),
        (K.isBoolean = Xf),
        (K.isBuffer = jh),
        (K.isDate = Ah),
        (K.isElement = na),
        (K.isEmpty = ta),
        (K.isEqual = ra),
        (K.isEqualWith = ea),
        (K.isError = ua),
        (K.isFinite = ia),
        (K.isFunction = oa),
        (K.isInteger = fa),
        (K.isLength = aa),
        (K.isMap = kh),
        (K.isMatch = sa),
        (K.isMatchWith = ha),
        (K.isNaN = pa),
        (K.isNative = va),
        (K.isNil = ga),
        (K.isNull = _a),
        (K.isNumber = ya),
        (K.isObject = ca),
        (K.isObjectLike = la),
        (K.isPlainObject = da),
        (K.isRegExp = Oh),
        (K.isSafeInteger = ba),
        (K.isSet = Ih),
        (K.isString = wa),
        (K.isSymbol = ma),
        (K.isTypedArray = Rh),
        (K.isUndefined = xa),
        (K.isWeakMap = ja),
        (K.isWeakSet = Aa),
        (K.join = Ao),
        (K.kebabCase = Gh),
        (K.last = ko),
        (K.lastIndexOf = Oo),
        (K.lowerCase = Hh),
        (K.lowerFirst = Jh),
        (K.lt = zh),
        (K.lte = Eh),
        (K.max = Xc),
        (K.maxBy = nl),
        (K.mean = tl),
        (K.meanBy = rl),
        (K.min = el),
        (K.minBy = ul),
        (K.stubArray = Zc),
        (K.stubFalse = Kc),
        (K.stubObject = Vc),
        (K.stubString = Gc),
        (K.stubTrue = Hc),
        (K.multiply = gp),
        (K.nth = Io),
        (K.noConflict = Mc),
        (K.noop = Fc),
        (K.now = ch),
        (K.pad = vc),
        (K.padEnd = _c),
        (K.padStart = gc),
        (K.parseInt = yc),
        (K.random = ac),
        (K.reduce = mf),
        (K.reduceRight = xf),
        (K.repeat = dc),
        (K.replace = bc),
        (K.result = Ya),
        (K.round = yp),
        (K.runInContext = _),
        (K.sample = Af),
        (K.size = If),
        (K.snakeCase = Yh),
        (K.some = Rf),
        (K.sortedIndex = Co),
        (K.sortedIndexBy = Uo),
        (K.sortedIndexOf = Bo),
        (K.sortedLastIndex = To),
        (K.sortedLastIndexBy = $o),
        (K.sortedLastIndexOf = Do),
        (K.startCase = Qh),
        (K.startsWith = mc),
        (K.subtract = dp),
        (K.sum = il),
        (K.sumBy = ol),
        (K.template = xc),
        (K.times = Jc),
        (K.toFinite = Oa),
        (K.toInteger = Ia),
        (K.toLength = Ra),
        (K.toLower = jc),
        (K.toNumber = za),
        (K.toSafeInteger = Sa),
        (K.toString = Wa),
        (K.toUpper = Ac),
        (K.trim = kc),
        (K.trimEnd = Oc),
        (K.trimStart = Ic),
        (K.truncate = Rc),
        (K.unescape = zc),
        (K.uniqueId = Qc),
        (K.upperCase = Xh),
        (K.upperFirst = np),
        (K.each = gf),
        (K.eachRight = yf),
        (K.first = mo),
        Dc(
          K,
          (function () {
            var n = {};
            return (
              oe(K, function (t, r) {
                ml.call(K.prototype, r) || (n[r] = t);
              }),
              n
            );
          })(),
          { chain: !1 }
        ),
        (K.VERSION = nn),
        u(
          ["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"],
          function (n) {
            K[n].placeholder = K;
          }
        ),
        u(["drop", "take"], function (n, t) {
          (Dt.prototype[n] = function (r) {
            r = r === X ? 1 : Jl(Ia(r), 0);
            var e = this.__filtered__ && !t ? new Dt(this) : this.clone();
            return (
              e.__filtered__
                ? (e.__takeCount__ = Yl(r, e.__takeCount__))
                : e.__views__.push({
                    size: Yl(r, Cn),
                    type: n + (e.__dir__ < 0 ? "Right" : ""),
                  }),
              e
            );
          }),
            (Dt.prototype[n + "Right"] = function (t) {
              return this.reverse()[n](t).reverse();
            });
        }),
        u(["filter", "map", "takeWhile"], function (n, t) {
          var r = t + 1,
            e = r == In || r == zn;
          Dt.prototype[n] = function (n) {
            var t = this.clone();
            return (
              t.__iteratees__.push({ iteratee: Ai(n, 3), type: r }),
              (t.__filtered__ = t.__filtered__ || e),
              t
            );
          };
        }),
        u(["head", "last"], function (n, t) {
          var r = "take" + (t ? "Right" : "");
          Dt.prototype[n] = function () {
            return this[r](1).value()[0];
          };
        }),
        u(["initial", "tail"], function (n, t) {
          var r = "drop" + (t ? "" : "Right");
          Dt.prototype[n] = function () {
            return this.__filtered__ ? new Dt(this) : this[r](1);
          };
        }),
        (Dt.prototype.compact = function () {
          return this.filter(Uc);
        }),
        (Dt.prototype.find = function (n) {
          return this.filter(n).head();
        }),
        (Dt.prototype.findLast = function (n) {
          return this.reverse().find(n);
        }),
        (Dt.prototype.invokeMap = iu(function (n, t) {
          return "function" == typeof n
            ? new Dt(this)
            : this.map(function (r) {
                return Re(r, n, t);
              });
        })),
        (Dt.prototype.reject = function (n) {
          return this.filter(Tf(Ai(n)));
        }),
        (Dt.prototype.slice = function (n, t) {
          n = Ia(n);
          var r = this;
          return r.__filtered__ && (n > 0 || t < 0)
            ? new Dt(r)
            : (n < 0 ? (r = r.takeRight(-n)) : n && (r = r.drop(n)),
              t !== X &&
                ((t = Ia(t)), (r = t < 0 ? r.dropRight(-t) : r.take(t - n))),
              r);
        }),
        (Dt.prototype.takeRightWhile = function (n) {
          return this.reverse().takeWhile(n).reverse();
        }),
        (Dt.prototype.toArray = function () {
          return this.take(Cn);
        }),
        oe(Dt.prototype, function (n, t) {
          var r = /^(?:filter|find|map|reject)|While$/.test(t),
            e = /^(?:head|last)$/.test(t),
            u = K[e ? "take" + ("last" == t ? "Right" : "") : t],
            i = e || /^find/.test(t);
          u &&
            (K.prototype[t] = function () {
              var t = this.__wrapped__,
                o = e ? [1] : arguments,
                f = t instanceof Dt,
                a = o[0],
                c = f || mh(t),
                l = function (n) {
                  var t = u.apply(K, s([n], o));
                  return e && h ? t[0] : t;
                };
              c && r && "function" == typeof a && 1 != a.length && (f = c = !1);
              var h = this.__chain__,
                p = !!this.__actions__.length,
                v = i && !h,
                _ = f && !p;
              if (!i && c) {
                t = _ ? t : new Dt(this);
                var g = n.apply(t, o);
                return (
                  g.__actions__.push({ func: rf, args: [l], thisArg: X }),
                  new Y(g, h)
                );
              }
              return v && _
                ? n.apply(this, o)
                : ((g = this.thru(l)), v ? (e ? g.value()[0] : g.value()) : g);
            });
        }),
        u(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
          var t = gl[n],
            r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
            e = /^(?:pop|shift)$/.test(n);
          K.prototype[n] = function () {
            var n = arguments;
            if (e && !this.__chain__) {
              var u = this.value();
              return t.apply(mh(u) ? u : [], n);
            }
            return this[r](function (r) {
              return t.apply(mh(r) ? r : [], n);
            });
          };
        }),
        oe(Dt.prototype, function (n, t) {
          var r = K[t];
          if (r) {
            var e = r.name + "",
              u = cs[e] || (cs[e] = []);
            u.push({ name: t, func: r });
          }
        }),
        (cs[ti(X, vn).name] = [{ name: "wrapper", func: X }]),
        (Dt.prototype.clone = Yt),
        (Dt.prototype.reverse = Qt),
        (Dt.prototype.value = Xt),
        (K.prototype.at = nh),
        (K.prototype.chain = ef),
        (K.prototype.commit = uf),
        (K.prototype.next = of),
        (K.prototype.plant = af),
        (K.prototype.reverse = cf),
        (K.prototype.toJSON = K.prototype.valueOf = K.prototype.value = lf),
        (K.prototype.first = K.prototype.head),
        Tl && (K.prototype[Tl] = ff),
        K
      );
    },
    be = de();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((re._ = be),
      define(function () {
        return be;
      }))
    : ue
    ? (((ue.exports = be)._ = be), (ee._ = be))
    : (re._ = be);
}.call(this));
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
(function () {
  var b, f;
  b = this.jQuery || window.jQuery;
  f = b(window);
  b.fn.stick_in_parent = function (d) {
    var A, w, J, n, B, K, p, q, k, E, t;
    null == d && (d = {});
    t = d.sticky_class;
    B = d.inner_scrolling;
    E = d.recalc_every;
    k = d.parent;
    q = d.offset_top;
    p = d.spacer;
    w = d.bottoming;
    null == q && (q = 0);
    null == k && (k = void 0);
    null == B && (B = !0);
    null == t && (t = "is_stuck");
    A = b(document);
    null == w && (w = !0);
    J = function (a, d, n, C, F, u, r, G) {
      var v, H, m, D, I, c, g, x, y, z, h, l;
      if (!a.data("sticky_kit")) {
        a.data("sticky_kit", !0);
        I = A.height();
        g = a.parent();
        null != k && (g = g.closest(k));
        if (!g.length) throw "failed to find stick parent";
        v = m = !1;
        (h = null != p ? p && a.closest(p) : b("<div />")) &&
          h.css("position", a.css("position"));
        x = function () {
          var c, f, e;
          if (
            !G &&
            ((I = A.height()),
            (c = parseInt(g.css("border-top-width"), 10)),
            (f = parseInt(g.css("padding-top"), 10)),
            (d = parseInt(g.css("padding-bottom"), 10)),
            (n = g.offset().top + c + f),
            (C = g.height()),
            m &&
              ((v = m = !1),
              null == p && (a.insertAfter(h), h.detach()),
              a
                .css({ position: "", top: "", width: "", bottom: "" })
                .removeClass(t),
              (e = !0)),
            (F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q),
            (u = a.outerHeight(!0)),
            (r = a.css("float")),
            h &&
              h.css({
                width: a.outerWidth(!0),
                height: u,
                display: a.css("display"),
                "vertical-align": a.css("vertical-align"),
                float: r,
              }),
            e)
          )
            return l();
        };
        x();
        if (u !== C)
          return (
            (D = void 0),
            (c = q),
            (z = E),
            (l = function () {
              var b, l, e, k;
              if (
                !G &&
                ((e = !1),
                null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
                e || A.height() === I || x(),
                (e = f.scrollTop()),
                null != D && (l = e - D),
                (D = e),
                m
                  ? (w &&
                      ((k = e + u + c > C + n),
                      v &&
                        !k &&
                        ((v = !1),
                        a
                          .css({ position: "fixed", bottom: "", top: c })
                          .trigger("sticky_kit:unbottom"))),
                    e < F &&
                      ((m = !1),
                      (c = q),
                      null == p &&
                        (("left" !== r && "right" !== r) || a.insertAfter(h),
                        h.detach()),
                      (b = { position: "", width: "", top: "" }),
                      a.css(b).removeClass(t).trigger("sticky_kit:unstick")),
                    B &&
                      ((b = f.height()),
                      u + q > b &&
                        !v &&
                        ((c -= l),
                        (c = Math.max(b - u, c)),
                        (c = Math.min(q, c)),
                        m && a.css({ top: c + "px" }))))
                  : e > F &&
                    ((m = !0),
                    (b = { position: "fixed", top: c }),
                    (b.width =
                      "border-box" === a.css("box-sizing")
                        ? a.outerWidth() + "px"
                        : a.width() + "px"),
                    a.css(b).addClass(t),
                    null == p &&
                      (a.after(h),
                      ("left" !== r && "right" !== r) || h.append(a)),
                    a.trigger("sticky_kit:stick")),
                m && w && (null == k && (k = e + u + c > C + n), !v && k))
              )
                return (
                  (v = !0),
                  "static" === g.css("position") &&
                    g.css({ position: "relative" }),
                  a
                    .css({ position: "absolute", bottom: d, top: "auto" })
                    .trigger("sticky_kit:bottom")
                );
            }),
            (y = function () {
              x();
              return l();
            }),
            (H = function () {
              G = !0;
              f.off("touchmove", l);
              f.off("scroll", l);
              f.off("resize", y);
              b(document.body).off("sticky_kit:recalc", y);
              a.off("sticky_kit:detach", H);
              a.removeData("sticky_kit");
              a.css({ position: "", bottom: "", top: "", width: "" });
              g.position("position", "");
              if (m)
                return (
                  null == p &&
                    (("left" !== r && "right" !== r) || a.insertAfter(h),
                    h.remove()),
                  a.removeClass(t)
                );
            }),
            f.on("touchmove", l),
            f.on("scroll", l),
            f.on("resize", y),
            b(document.body).on("sticky_kit:recalc", y),
            a.on("sticky_kit:detach", H),
            setTimeout(l, 0)
          );
      }
    };
    n = 0;
    for (K = this.length; n < K; n++) (d = this[n]), J(b(d));
    return this;
  };
}.call(this));
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "undefined" != typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  "use strict";
  var b = window.Slick || {};
  (b = (function () {
    function c(c, d) {
      var f,
        e = this;
      (e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a(
            '<button type="button" data-role="none" role="button" tabindex="0" />'
          ).text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        a.extend(e, e.initials),
        (e.activeBreakpoint = null),
        (e.animType = null),
        (e.animProp = null),
        (e.breakpoints = []),
        (e.breakpointSettings = []),
        (e.cssTransitions = !1),
        (e.focussed = !1),
        (e.interrupted = !1),
        (e.hidden = "hidden"),
        (e.paused = !0),
        (e.positionProp = null),
        (e.respondTo = null),
        (e.rowCount = 1),
        (e.shouldClick = !0),
        (e.$slider = a(c)),
        (e.$slidesCache = null),
        (e.transformType = null),
        (e.transitionType = null),
        (e.visibilityChange = "visibilitychange"),
        (e.windowWidth = 0),
        (e.windowTimer = null),
        (f = a(c).data("slick") || {}),
        (e.options = a.extend({}, e.defaults, d, f)),
        (e.currentSlide = e.options.initialSlide),
        (e.originalSettings = e.options),
        "undefined" != typeof document.mozHidden
          ? ((e.hidden = "mozHidden"),
            (e.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((e.hidden = "webkitHidden"),
            (e.visibilityChange = "webkitvisibilitychange")),
        (e.autoPlay = a.proxy(e.autoPlay, e)),
        (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
        (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
        (e.changeSlide = a.proxy(e.changeSlide, e)),
        (e.clickHandler = a.proxy(e.clickHandler, e)),
        (e.selectHandler = a.proxy(e.selectHandler, e)),
        (e.setPosition = a.proxy(e.setPosition, e)),
        (e.swipeHandler = a.proxy(e.swipeHandler, e)),
        (e.dragHandler = a.proxy(e.dragHandler, e)),
        (e.keyHandler = a.proxy(e.keyHandler, e)),
        (e.instanceUid = b++),
        (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        e.registerBreakpoints(),
        e.init(!0);
    }
    var b = 0;
    return c;
  })()),
    (b.prototype.activateADA = function () {
      var a = this;
      a.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (b.prototype.addSlide = b.prototype.slickAdd =
      function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) (d = c), (c = null);
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(),
          "number" == typeof c
            ? 0 === c && 0 === e.$slides.length
              ? a(b).appendTo(e.$slideTrack)
              : d
              ? a(b).insertBefore(e.$slides.eq(c))
              : a(b).insertAfter(e.$slides.eq(c))
            : d === !0
            ? a(b).prependTo(e.$slideTrack)
            : a(b).appendTo(e.$slideTrack),
          (e.$slides = e.$slideTrack.children(this.options.slide)),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.append(e.$slides),
          e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
          }),
          (e.$slidesCache = e.$slides),
          e.reinit();
      }),
    (b.prototype.animateHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({ height: b }, a.options.speed);
      }
    }),
    (b.prototype.animateSlide = function (b, c) {
      var d = {},
        e = this;
      e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1
          ? e.options.vertical === !1
            ? e.$slideTrack.animate(
                { left: b },
                e.options.speed,
                e.options.easing,
                c
              )
            : e.$slideTrack.animate(
                { top: b },
                e.options.speed,
                e.options.easing,
                c
              )
          : e.cssTransitions === !1
          ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
            a({ animStart: e.currentLeft }).animate(
              { animStart: b },
              {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function (a) {
                  (a = Math.ceil(a)),
                    e.options.vertical === !1
                      ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                        e.$slideTrack.css(d))
                      : ((d[e.animType] = "translate(0px," + a + "px)"),
                        e.$slideTrack.css(d));
                },
                complete: function () {
                  c && c.call();
                },
              }
            ))
          : (e.applyTransition(),
            (b = Math.ceil(b)),
            e.options.vertical === !1
              ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
              : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
            e.$slideTrack.css(d),
            c &&
              setTimeout(function () {
                e.disableTransition(), c.call();
              }, e.options.speed));
    }),
    (b.prototype.getNavTarget = function () {
      var b = this,
        c = b.options.asNavFor;
      return c && null !== c && (c = a(c).not(b.$slider)), c;
    }),
    (b.prototype.asNavFor = function (b) {
      var c = this,
        d = c.getNavTarget();
      null !== d &&
        "object" == typeof d &&
        d.each(function () {
          var c = a(this).slick("getSlick");
          c.unslicked || c.slideHandler(b, !0);
        });
    }),
    (b.prototype.applyTransition = function (a) {
      var b = this,
        c = {};
      b.options.fade === !1
        ? (c[b.transitionType] =
            b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
        : (c[b.transitionType] =
            "opacity " + b.options.speed + "ms " + b.options.cssEase),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.autoPlay = function () {
      var a = this;
      a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow &&
          (a.autoPlayTimer = setInterval(
            a.autoPlayIterator,
            a.options.autoplaySpeed
          ));
    }),
    (b.prototype.autoPlayClear = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }),
    (b.prototype.autoPlayIterator = function () {
      var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
      a.paused ||
        a.interrupted ||
        a.focussed ||
        (a.options.infinite === !1 &&
          (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
            ? (a.direction = 0)
            : 0 === a.direction &&
              ((b = a.currentSlide - a.options.slidesToScroll),
              a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b));
    }),
    (b.prototype.buildArrows = function () {
      var b = this;
      b.options.arrows === !0 &&
        ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
        (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
        b.slideCount > b.options.slidesToShow
          ? (b.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.htmlExpr.test(b.options.prevArrow) &&
              b.$prevArrow.prependTo(b.options.appendArrows),
            b.htmlExpr.test(b.options.nextArrow) &&
              b.$nextArrow.appendTo(b.options.appendArrows),
            b.options.infinite !== !0 &&
              b.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : b.$prevArrow
              .add(b.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (b.prototype.buildDots = function () {
      var c,
        d,
        b = this;
      if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
        for (
          b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0;
          c <= b.getDotCount();
          c += 1
        )
          d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
        (b.$dots = d.appendTo(b.options.appendDots)),
          b.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (b.prototype.buildOut = function () {
      var b = this;
      (b.$slides = b.$slider
        .children(b.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.$slides.each(function (b, c) {
          a(c)
            .attr("data-slick-index", b)
            .data("originalStyling", a(c).attr("style") || "");
        }),
        b.$slider.addClass("slick-slider"),
        (b.$slideTrack =
          0 === b.slideCount
            ? a('<div class="slick-track"/>').appendTo(b.$slider)
            : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (b.$list = b.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
          (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.options.draggable === !0 && b.$list.addClass("draggable");
    }),
    (b.prototype.buildRows = function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;
      if (
        ((e = document.createDocumentFragment()),
        (g = a.$slider.children()),
        a.options.rows > 1)
      ) {
        for (
          h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0;
          f > b;
          b++
        ) {
          var i = document.createElement("div");
          for (c = 0; c < a.options.rows; c++) {
            var j = document.createElement("div");
            for (d = 0; d < a.options.slidesPerRow; d++) {
              var k = b * h + (c * a.options.slidesPerRow + d);
              g.get(k) && j.appendChild(g.get(k));
            }
            i.appendChild(j);
          }
          e.appendChild(i);
        }
        a.$slider.empty().append(e),
          a.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (b.prototype.checkResponsive = function (b, c) {
      var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();
      if (
        ("window" === d.respondTo
          ? (g = j)
          : "slider" === d.respondTo
          ? (g = i)
          : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive &&
          d.options.responsive.length &&
          null !== d.options.responsive)
      ) {
        f = null;
        for (e in d.breakpoints)
          d.breakpoints.hasOwnProperty(e) &&
            (d.originalSettings.mobileFirst === !1
              ? g < d.breakpoints[e] && (f = d.breakpoints[e])
              : g > d.breakpoints[e] && (f = d.breakpoints[e]));
        null !== f
          ? null !== d.activeBreakpoint
            ? (f !== d.activeBreakpoint || c) &&
              ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
            : ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
          : null !== d.activeBreakpoint &&
            ((d.activeBreakpoint = null),
            (d.options = d.originalSettings),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            (h = f)),
          b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
      }
    }),
    (b.prototype.changeSlide = function (b, c) {
      var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);
      switch (
        (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        (h = d.slideCount % d.options.slidesToScroll !== 0),
        (f = h
          ? 0
          : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
        b.data.message)
      ) {
        case "previous":
          (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide - g, !1, c);
          break;
        case "next":
          (g = 0 === f ? d.options.slidesToScroll : f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide + g, !1, c);
          break;
        case "index":
          var i =
            0 === b.data.index
              ? 0
              : b.data.index || e.index() * d.options.slidesToScroll;
          d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (b.prototype.checkNavigable = function (a) {
      var c,
        d,
        b = this;
      if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
        a = c[c.length - 1];
      else
        for (var e in c) {
          if (a < c[e]) {
            a = d;
            break;
          }
          d = c[e];
        }
      return a;
    }),
    (b.prototype.cleanUpEvents = function () {
      var b = this;
      b.options.dots &&
        null !== b.$dots &&
        a("li", b.$dots)
          .off("click.slick", b.changeSlide)
          .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
          .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
          b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 &&
          b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off(
          "orientationchange.slick.slick-" + b.instanceUid,
          b.orientationChange
        ),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off(
          "dragstart",
          b.preventDefault
        ),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.cleanUpSlideEvents = function () {
      var b = this;
      b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.cleanUpRows = function () {
      var b,
        a = this;
      a.options.rows > 1 &&
        ((b = a.$slides.children().children()),
        b.removeAttr("style"),
        a.$slider.empty().append(b));
    }),
    (b.prototype.clickHandler = function (a) {
      var b = this;
      b.shouldClick === !1 &&
        (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }),
    (b.prototype.destroy = function (b) {
      var c = this;
      c.autoPlayClear(),
        (c.touchObject = {}),
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow &&
          c.$prevArrow.length &&
          (c.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow &&
          c.$nextArrow.length &&
          (c.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides &&
          (c.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              a(this).attr("style", a(this).data("originalStyling"));
            }),
          c.$slideTrack.children(this.options.slide).detach(),
          c.$slideTrack.detach(),
          c.$list.detach(),
          c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        (c.unslicked = !0),
        b || c.$slider.trigger("destroy", [c]);
    }),
    (b.prototype.disableTransition = function (a) {
      var b = this,
        c = {};
      (c[b.transitionType] = ""),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.fadeSlide = function (a, b) {
      var c = this;
      c.cssTransitions === !1
        ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
          c.$slides
            .eq(a)
            .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
        : (c.applyTransition(a),
          c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
          b &&
            setTimeout(function () {
              c.disableTransition(a), b.call();
            }, c.options.speed));
    }),
    (b.prototype.fadeSlideOut = function (a) {
      var b = this;
      b.cssTransitions === !1
        ? b.$slides
            .eq(a)
            .animate(
              { opacity: 0, zIndex: b.options.zIndex - 2 },
              b.options.speed,
              b.options.easing
            )
        : (b.applyTransition(a),
          b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }),
    (b.prototype.filterSlides = b.prototype.slickFilter =
      function (a) {
        var b = this;
        null !== a &&
          ((b.$slidesCache = b.$slides),
          b.unload(),
          b.$slideTrack.children(this.options.slide).detach(),
          b.$slidesCache.filter(a).appendTo(b.$slideTrack),
          b.reinit());
      }),
    (b.prototype.focusHandler = function () {
      var b = this;
      b.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
          c.stopImmediatePropagation();
          var d = a(this);
          setTimeout(function () {
            b.options.pauseOnFocus &&
              ((b.focussed = d.is(":focus")), b.autoPlay());
          }, 0);
        });
    }),
    (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
      function () {
        var a = this;
        return a.currentSlide;
      }),
    (b.prototype.getDotCount = function () {
      var a = this,
        b = 0,
        c = 0,
        d = 0;
      if (a.options.infinite === !0)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else if (a.options.centerMode === !0) d = a.slideCount;
      else if (a.options.asNavFor)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else
        d =
          1 +
          Math.ceil(
            (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
          );
      return d - 1;
    }),
    (b.prototype.getLeft = function (a) {
      var c,
        d,
        f,
        b = this,
        e = 0;
      return (
        (b.slideOffset = 0),
        (d = b.$slides.first().outerHeight(!0)),
        b.options.infinite === !0
          ? (b.slideCount > b.options.slidesToShow &&
              ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
              (e = d * b.options.slidesToShow * -1)),
            b.slideCount % b.options.slidesToScroll !== 0 &&
              a + b.options.slidesToScroll > b.slideCount &&
              b.slideCount > b.options.slidesToShow &&
              (a > b.slideCount
                ? ((b.slideOffset =
                    (b.options.slidesToShow - (a - b.slideCount)) *
                    b.slideWidth *
                    -1),
                  (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                : ((b.slideOffset =
                    (b.slideCount % b.options.slidesToScroll) *
                    b.slideWidth *
                    -1),
                  (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
          : a + b.options.slidesToShow > b.slideCount &&
            ((b.slideOffset =
              (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
            (e = (a + b.options.slidesToShow - b.slideCount) * d)),
        b.slideCount <= b.options.slidesToShow &&
          ((b.slideOffset = 0), (e = 0)),
        b.options.centerMode === !0 && b.options.infinite === !0
          ? (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
              b.slideWidth)
          : b.options.centerMode === !0 &&
            ((b.slideOffset = 0),
            (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
        (c =
          b.options.vertical === !1
            ? a * b.slideWidth * -1 + b.slideOffset
            : a * d * -1 + e),
        b.options.variableWidth === !0 &&
          ((f =
            b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
              ? b.$slideTrack.children(".slick-slide").eq(a)
              : b.$slideTrack
                  .children(".slick-slide")
                  .eq(a + b.options.slidesToShow)),
          (c =
            b.options.rtl === !0
              ? f[0]
                ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                : 0
              : f[0]
              ? -1 * f[0].offsetLeft
              : 0),
          b.options.centerMode === !0 &&
            ((f =
              b.slideCount <= b.options.slidesToShow ||
              b.options.infinite === !1
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow + 1)),
            (c =
              b.options.rtl === !0
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            (c += (b.$list.width() - f.outerWidth()) / 2))),
        c
      );
    }),
    (b.prototype.getOption = b.prototype.slickGetOption =
      function (a) {
        var b = this;
        return b.options[a];
      }),
    (b.prototype.getNavigableIndexes = function () {
      var e,
        a = this,
        b = 0,
        c = 0,
        d = [];
      for (
        a.options.infinite === !1
          ? (e = a.slideCount)
          : ((b = -1 * a.options.slidesToScroll),
            (c = -1 * a.options.slidesToScroll),
            (e = 2 * a.slideCount));
        e > b;

      )
        d.push(b),
          (b = c + a.options.slidesToScroll),
          (c +=
            a.options.slidesToScroll <= a.options.slidesToShow
              ? a.options.slidesToScroll
              : a.options.slidesToShow);
      return d;
    }),
    (b.prototype.getSlick = function () {
      return this;
    }),
    (b.prototype.getSlideCount = function () {
      var c,
        d,
        e,
        b = this;
      return (
        (e =
          b.options.centerMode === !0
            ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
            : 0),
        b.options.swipeToSlide === !0
          ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
              return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                ? ((d = f), !1)
                : void 0;
            }),
            (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
          : b.options.slidesToScroll
      );
    }),
    (b.prototype.goTo = b.prototype.slickGoTo =
      function (a, b) {
        var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
      }),
    (b.prototype.init = function (b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") ||
        (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && ((c.paused = !1), c.autoPlay());
    }),
    (b.prototype.initADA = function () {
      var b = this;
      b.$slides
        .add(b.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
          a(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + b.instanceUid + c,
          });
        }),
        null !== b.$dots &&
          b.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (c) {
              a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        b.activateADA();
    }),
    (b.prototype.initArrowEvents = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, a.changeSlide),
        a.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, a.changeSlide));
    }),
    (b.prototype.initDotEvents = function () {
      var b = this;
      b.options.dots === !0 &&
        b.slideCount > b.options.slidesToShow &&
        a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
        b.options.dots === !0 &&
          b.options.pauseOnDotsHover === !0 &&
          a("li", b.$dots)
            .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.initSlideEvents = function () {
      var b = this;
      b.options.pauseOnHover &&
        (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }),
    (b.prototype.initializeEvents = function () {
      var b = this;
      b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 &&
          b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on(
          "orientationchange.slick.slick-" + b.instanceUid,
          a.proxy(b.orientationChange, b)
        ),
        a(window).on(
          "resize.slick.slick-" + b.instanceUid,
          a.proxy(b.resize, b)
        ),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.initUI = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.show(), a.$nextArrow.show()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.show();
    }),
    (b.prototype.keyHandler = function (a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === a.keyCode && b.options.accessibility === !0
          ? b.changeSlide({
              data: { message: b.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === a.keyCode &&
            b.options.accessibility === !0 &&
            b.changeSlide({
              data: { message: b.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (b.prototype.lazyLoad = function () {
      function g(c) {
        a("img[data-lazy]", c).each(function () {
          var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");
          (e.onload = function () {
            c.animate({ opacity: 0 }, 100, function () {
              c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                c.removeAttr("data-lazy").removeClass("slick-loading");
              }),
                b.$slider.trigger("lazyLoaded", [b, c, d]);
            });
          }),
            (e.onerror = function () {
              c
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                b.$slider.trigger("lazyLoadError", [b, c, d]);
            }),
            (e.src = d);
        });
      }
      var c,
        d,
        e,
        f,
        b = this;
      b.options.centerMode === !0
        ? b.options.infinite === !0
          ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
            (f = e + b.options.slidesToShow + 2))
          : ((e = Math.max(
              0,
              b.currentSlide - (b.options.slidesToShow / 2 + 1)
            )),
            (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
        : ((e = b.options.infinite
            ? b.options.slidesToShow + b.currentSlide
            : b.currentSlide),
          (f = Math.ceil(e + b.options.slidesToShow)),
          b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
        (c = b.$slider.find(".slick-slide").slice(e, f)),
        g(c),
        b.slideCount <= b.options.slidesToShow
          ? ((d = b.$slider.find(".slick-slide")), g(d))
          : b.currentSlide >= b.slideCount - b.options.slidesToShow
          ? ((d = b.$slider
              .find(".slick-cloned")
              .slice(0, b.options.slidesToShow)),
            g(d))
          : 0 === b.currentSlide &&
            ((d = b.$slider
              .find(".slick-cloned")
              .slice(-1 * b.options.slidesToShow)),
            g(d));
    }),
    (b.prototype.loadSlider = function () {
      var a = this;
      a.setPosition(),
        a.$slideTrack.css({ opacity: 1 }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }),
    (b.prototype.next = b.prototype.slickNext =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "next" } });
      }),
    (b.prototype.orientationChange = function () {
      var a = this;
      a.checkResponsive(), a.setPosition();
    }),
    (b.prototype.pause = b.prototype.slickPause =
      function () {
        var a = this;
        a.autoPlayClear(), (a.paused = !0);
      }),
    (b.prototype.play = b.prototype.slickPlay =
      function () {
        var a = this;
        a.autoPlay(),
          (a.options.autoplay = !0),
          (a.paused = !1),
          (a.focussed = !1),
          (a.interrupted = !1);
      }),
    (b.prototype.postSlide = function (a) {
      var b = this;
      b.unslicked ||
        (b.$slider.trigger("afterChange", [b, a]),
        (b.animating = !1),
        b.setPosition(),
        (b.swipeLeft = null),
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA());
    }),
    (b.prototype.prev = b.prototype.slickPrev =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "previous" } });
      }),
    (b.prototype.preventDefault = function (a) {
      a.preventDefault();
    }),
    (b.prototype.progressiveLazyLoad = function (b) {
      b = b || 1;
      var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);
      d.length
        ? ((e = d.first()),
          (f = e.attr("data-lazy")),
          (g = document.createElement("img")),
          (g.onload = function () {
            e
              .attr("src", f)
              .removeAttr("data-lazy")
              .removeClass("slick-loading"),
              c.options.adaptiveHeight === !0 && c.setPosition(),
              c.$slider.trigger("lazyLoaded", [c, e, f]),
              c.progressiveLazyLoad();
          }),
          (g.onerror = function () {
            3 > b
              ? setTimeout(function () {
                  c.progressiveLazyLoad(b + 1);
                }, 500)
              : (e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                c.$slider.trigger("lazyLoadError", [c, e, f]),
                c.progressiveLazyLoad());
          }),
          (g.src = f))
        : c.$slider.trigger("allImagesLoaded", [c]);
    }),
    (b.prototype.refresh = function (b) {
      var d,
        e,
        c = this;
      (e = c.slideCount - c.options.slidesToShow),
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        (d = c.currentSlide),
        c.destroy(!0),
        a.extend(c, c.initials, { currentSlide: d }),
        c.init(),
        b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }),
    (b.prototype.registerBreakpoints = function () {
      var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;
      if ("array" === a.type(f) && f.length) {
        b.respondTo = b.options.respondTo || "window";
        for (c in f)
          if (
            ((e = b.breakpoints.length - 1),
            (d = f[c].breakpoint),
            f.hasOwnProperty(c))
          ) {
            for (; e >= 0; )
              b.breakpoints[e] &&
                b.breakpoints[e] === d &&
                b.breakpoints.splice(e, 1),
                e--;
            b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
          }
        b.breakpoints.sort(function (a, c) {
          return b.options.mobileFirst ? a - c : c - a;
        });
      }
    }),
    (b.prototype.reinit = function () {
      var b = this;
      (b.$slides = b.$slideTrack
        .children(b.options.slide)
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.currentSlide >= b.slideCount &&
          0 !== b.currentSlide &&
          (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.setPosition(),
        b.focusHandler(),
        (b.paused = !b.options.autoplay),
        b.autoPlay(),
        b.$slider.trigger("reInit", [b]);
    }),
    (b.prototype.resize = function () {
      var b = this;
      a(window).width() !== b.windowWidth &&
        (clearTimeout(b.windowDelay),
        (b.windowDelay = window.setTimeout(function () {
          (b.windowWidth = a(window).width()),
            b.checkResponsive(),
            b.unslicked || b.setPosition();
        }, 50)));
    }),
    (b.prototype.removeSlide = b.prototype.slickRemove =
      function (a, b, c) {
        var d = this;
        return (
          "boolean" == typeof a
            ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
            : (a = b === !0 ? --a : a),
          d.slideCount < 1 || 0 > a || a > d.slideCount - 1
            ? !1
            : (d.unload(),
              c === !0
                ? d.$slideTrack.children().remove()
                : d.$slideTrack.children(this.options.slide).eq(a).remove(),
              (d.$slides = d.$slideTrack.children(this.options.slide)),
              d.$slideTrack.children(this.options.slide).detach(),
              d.$slideTrack.append(d.$slides),
              (d.$slidesCache = d.$slides),
              void d.reinit())
        );
      }),
    (b.prototype.setCSS = function (a) {
      var d,
        e,
        b = this,
        c = {};
      b.options.rtl === !0 && (a = -a),
        (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (c[b.positionProp] = a),
        b.transformsEnabled === !1
          ? b.$slideTrack.css(c)
          : ((c = {}),
            b.cssTransitions === !1
              ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                b.$slideTrack.css(c))
              : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                b.$slideTrack.css(c)));
    }),
    (b.prototype.setDimensions = function () {
      var a = this;
      a.options.vertical === !1
        ? a.options.centerMode === !0 &&
          a.$list.css({ padding: "0px " + a.options.centerPadding })
        : (a.$list.height(
            a.$slides.first().outerHeight(!0) * a.options.slidesToShow
          ),
          a.options.centerMode === !0 &&
            a.$list.css({ padding: a.options.centerPadding + " 0px" })),
        (a.listWidth = a.$list.width()),
        (a.listHeight = a.$list.height()),
        a.options.vertical === !1 && a.options.variableWidth === !1
          ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
            a.$slideTrack.width(
              Math.ceil(
                a.slideWidth * a.$slideTrack.children(".slick-slide").length
              )
            ))
          : a.options.variableWidth === !0
          ? a.$slideTrack.width(5e3 * a.slideCount)
          : ((a.slideWidth = Math.ceil(a.listWidth)),
            a.$slideTrack.height(
              Math.ceil(
                a.$slides.first().outerHeight(!0) *
                  a.$slideTrack.children(".slick-slide").length
              )
            ));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.options.variableWidth === !1 &&
        a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }),
    (b.prototype.setFade = function () {
      var c,
        b = this;
      b.$slides.each(function (d, e) {
        (c = b.slideWidth * d * -1),
          b.options.rtl === !0
            ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              })
            : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              });
      }),
        b.$slides
          .eq(b.currentSlide)
          .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }),
    (b.prototype.setHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b);
      }
    }),
    (b.prototype.setOption = b.prototype.slickSetOption =
      function () {
        var c,
          d,
          e,
          f,
          h,
          b = this,
          g = !1;
        if (
          ("object" === a.type(arguments[0])
            ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
            : "string" === a.type(arguments[0]) &&
              ((e = arguments[0]),
              (f = arguments[1]),
              (g = arguments[2]),
              "responsive" === arguments[0] && "array" === a.type(arguments[1])
                ? (h = "responsive")
                : "undefined" != typeof arguments[1] && (h = "single")),
          "single" === h)
        )
          b.options[e] = f;
        else if ("multiple" === h)
          a.each(e, function (a, c) {
            b.options[a] = c;
          });
        else if ("responsive" === h)
          for (d in f)
            if ("array" !== a.type(b.options.responsive))
              b.options.responsive = [f[d]];
            else {
              for (c = b.options.responsive.length - 1; c >= 0; )
                b.options.responsive[c].breakpoint === f[d].breakpoint &&
                  b.options.responsive.splice(c, 1),
                  c--;
              b.options.responsive.push(f[d]);
            }
        g && (b.unload(), b.reinit());
      }),
    (b.prototype.setPosition = function () {
      var a = this;
      a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1
          ? a.setCSS(a.getLeft(a.currentSlide))
          : a.setFade(),
        a.$slider.trigger("setPosition", [a]);
    }),
    (b.prototype.setProps = function () {
      var a = this,
        b = document.body.style;
      (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
        "top" === a.positionProp
          ? a.$slider.addClass("slick-vertical")
          : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition ||
          void 0 !== b.MozTransition ||
          void 0 !== b.msTransition) &&
          a.options.useCSS === !0 &&
          (a.cssTransitions = !0),
        a.options.fade &&
          ("number" == typeof a.options.zIndex
            ? a.options.zIndex < 3 && (a.options.zIndex = 3)
            : (a.options.zIndex = a.defaults.zIndex)),
        void 0 !== b.OTransform &&
          ((a.animType = "OTransform"),
          (a.transformType = "-o-transform"),
          (a.transitionType = "OTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.MozTransform &&
          ((a.animType = "MozTransform"),
          (a.transformType = "-moz-transform"),
          (a.transitionType = "MozTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.MozPerspective &&
            (a.animType = !1)),
        void 0 !== b.webkitTransform &&
          ((a.animType = "webkitTransform"),
          (a.transformType = "-webkit-transform"),
          (a.transitionType = "webkitTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.msTransform &&
          ((a.animType = "msTransform"),
          (a.transformType = "-ms-transform"),
          (a.transitionType = "msTransition"),
          void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform &&
          a.animType !== !1 &&
          ((a.animType = "transform"),
          (a.transformType = "transform"),
          (a.transitionType = "transition")),
        (a.transformsEnabled =
          a.options.useTransform && null !== a.animType && a.animType !== !1);
    }),
    (b.prototype.setSlideClasses = function (a) {
      var c,
        d,
        e,
        f,
        b = this;
      (d = b.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0
          ? ((c = Math.floor(b.options.slidesToShow / 2)),
            b.options.infinite === !0 &&
              (a >= c && a <= b.slideCount - 1 - c
                ? b.$slides
                    .slice(a - c, a + c + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((e = b.options.slidesToShow + a),
                  d
                    .slice(e - c + 1, e + c + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? d
                    .eq(d.length - 1 - b.options.slidesToShow)
                    .addClass("slick-center")
                : a === b.slideCount - 1 &&
                  d.eq(b.options.slidesToShow).addClass("slick-center")),
            b.$slides.eq(a).addClass("slick-center"))
          : a >= 0 && a <= b.slideCount - b.options.slidesToShow
          ? b.$slides
              .slice(a, a + b.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : d.length <= b.options.slidesToShow
          ? d.addClass("slick-active").attr("aria-hidden", "false")
          : ((f = b.slideCount % b.options.slidesToShow),
            (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
            b.options.slidesToShow == b.options.slidesToScroll &&
            b.slideCount - a < b.options.slidesToShow
              ? d
                  .slice(e - (b.options.slidesToShow - f), e + f)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : d
                  .slice(e, e + b.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }),
    (b.prototype.setupInfinite = function () {
      var c,
        d,
        e,
        b = this;
      if (
        (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 &&
          b.options.fade === !1 &&
          ((d = null), b.slideCount > b.options.slidesToShow))
      ) {
        for (
          e =
            b.options.centerMode === !0
              ? b.options.slidesToShow + 1
              : b.options.slidesToShow,
            c = b.slideCount;
          c > b.slideCount - e;
          c -= 1
        )
          (d = c - 1),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d - b.slideCount)
              .prependTo(b.$slideTrack)
              .addClass("slick-cloned");
        for (c = 0; e > c; c += 1)
          (d = c),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d + b.slideCount)
              .appendTo(b.$slideTrack)
              .addClass("slick-cloned");
        b.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            a(this).attr("id", "");
          });
      }
    }),
    (b.prototype.interrupt = function (a) {
      var b = this;
      a || b.autoPlay(), (b.interrupted = a);
    }),
    (b.prototype.selectHandler = function (b) {
      var c = this,
        d = a(b.target).is(".slick-slide")
          ? a(b.target)
          : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
      return (
        e || (e = 0),
        c.slideCount <= c.options.slidesToShow
          ? (c.setSlideClasses(e), void c.asNavFor(e))
          : void c.slideHandler(e)
      );
    }),
    (b.prototype.slideHandler = function (a, b, c) {
      var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
      return (
        (b = b || !1),
        (i.animating === !0 && i.options.waitForAnimate === !0) ||
        (i.options.fade === !0 && i.currentSlide === a) ||
        i.slideCount <= i.options.slidesToShow
          ? void 0
          : (b === !1 && i.asNavFor(a),
            (d = a),
            (h = i.getLeft(d)),
            (g = i.getLeft(i.currentSlide)),
            (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
            i.options.infinite === !1 &&
            i.options.centerMode === !1 &&
            (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : i.options.infinite === !1 &&
                i.options.centerMode === !0 &&
                (0 > a || a > i.slideCount - i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                (e =
                  0 > d
                    ? i.slideCount % i.options.slidesToScroll !== 0
                      ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                      : i.slideCount + d
                    : d >= i.slideCount
                    ? i.slideCount % i.options.slidesToScroll !== 0
                      ? 0
                      : d - i.slideCount
                    : d),
                (i.animating = !0),
                i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                (f = i.currentSlide),
                (i.currentSlide = e),
                i.setSlideClasses(i.currentSlide),
                i.options.asNavFor &&
                  ((j = i.getNavTarget()),
                  (j = j.slick("getSlick")),
                  j.slideCount <= j.options.slidesToShow &&
                    j.setSlideClasses(i.currentSlide)),
                i.updateDots(),
                i.updateArrows(),
                i.options.fade === !0
                  ? (c !== !0
                      ? (i.fadeSlideOut(f),
                        i.fadeSlide(e, function () {
                          i.postSlide(e);
                        }))
                      : i.postSlide(e),
                    void i.animateHeight())
                  : void (c !== !0
                      ? i.animateSlide(h, function () {
                          i.postSlide(e);
                        })
                      : i.postSlide(e))))
      );
    }),
    (b.prototype.startLoad = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.hide(), a.$nextArrow.hide()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.hide(),
        a.$slider.addClass("slick-loading");
    }),
    (b.prototype.swipeDirection = function () {
      var a,
        b,
        c,
        d,
        e = this;
      return (
        (a = e.touchObject.startX - e.touchObject.curX),
        (b = e.touchObject.startY - e.touchObject.curY),
        (c = Math.atan2(b, a)),
        (d = Math.round((180 * c) / Math.PI)),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : 360 >= d && d >= 315
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : d >= 135 && 225 >= d
          ? e.options.rtl === !1
            ? "right"
            : "left"
          : e.options.verticalSwiping === !0
          ? d >= 35 && 135 >= d
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (b.prototype.swipeEnd = function (a) {
      var c,
        d,
        b = this;
      if (
        ((b.dragging = !1),
        (b.interrupted = !1),
        (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
        void 0 === b.touchObject.curX)
      )
        return !1;
      if (
        (b.touchObject.edgeHit === !0 &&
          b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe)
      ) {
        switch ((d = b.swipeDirection())) {
          case "left":
          case "down":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide + b.getSlideCount())
              : b.currentSlide + b.getSlideCount()),
              (b.currentDirection = 0);
            break;
          case "right":
          case "up":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide - b.getSlideCount())
              : b.currentSlide - b.getSlideCount()),
              (b.currentDirection = 1);
        }
        "vertical" != d &&
          (b.slideHandler(c),
          (b.touchObject = {}),
          b.$slider.trigger("swipe", [b, d]));
      } else
        b.touchObject.startX !== b.touchObject.curX &&
          (b.slideHandler(b.currentSlide), (b.touchObject = {}));
    }),
    (b.prototype.swipeHandler = function (a) {
      var b = this;
      if (
        !(
          b.options.swipe === !1 ||
          ("ontouchend" in document && b.options.swipe === !1) ||
          (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
        )
      )
        switch (
          ((b.touchObject.fingerCount =
            a.originalEvent && void 0 !== a.originalEvent.touches
              ? a.originalEvent.touches.length
              : 1),
          (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
          b.options.verticalSwiping === !0 &&
            (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
          a.data.action)
        ) {
          case "start":
            b.swipeStart(a);
            break;
          case "move":
            b.swipeMove(a);
            break;
          case "end":
            b.swipeEnd(a);
        }
    }),
    (b.prototype.swipeMove = function (a) {
      var d,
        e,
        f,
        g,
        h,
        b = this;
      return (
        (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
        !b.dragging || (h && 1 !== h.length)
          ? !1
          : ((d = b.getLeft(b.currentSlide)),
            (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
            (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
            (b.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
            )),
            b.options.verticalSwiping === !0 &&
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                )
              )),
            (e = b.swipeDirection()),
            "vertical" !== e
              ? (void 0 !== a.originalEvent &&
                  b.touchObject.swipeLength > 4 &&
                  a.preventDefault(),
                (g =
                  (b.options.rtl === !1 ? 1 : -1) *
                  (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                b.options.verticalSwiping === !0 &&
                  (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                (f = b.touchObject.swipeLength),
                (b.touchObject.edgeHit = !1),
                b.options.infinite === !1 &&
                  ((0 === b.currentSlide && "right" === e) ||
                    (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                  ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                  (b.touchObject.edgeHit = !0)),
                b.options.vertical === !1
                  ? (b.swipeLeft = d + f * g)
                  : (b.swipeLeft =
                      d + f * (b.$list.height() / b.listWidth) * g),
                b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                b.options.fade === !0 || b.options.touchMove === !1
                  ? !1
                  : b.animating === !0
                  ? ((b.swipeLeft = null), !1)
                  : void b.setCSS(b.swipeLeft))
              : void 0)
      );
    }),
    (b.prototype.swipeStart = function (a) {
      var c,
        b = this;
      return (
        (b.interrupted = !0),
        1 !== b.touchObject.fingerCount ||
        b.slideCount <= b.options.slidesToShow
          ? ((b.touchObject = {}), !1)
          : (void 0 !== a.originalEvent &&
              void 0 !== a.originalEvent.touches &&
              (c = a.originalEvent.touches[0]),
            (b.touchObject.startX = b.touchObject.curX =
              void 0 !== c ? c.pageX : a.clientX),
            (b.touchObject.startY = b.touchObject.curY =
              void 0 !== c ? c.pageY : a.clientY),
            void (b.dragging = !0))
      );
    }),
    (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
      function () {
        var a = this;
        null !== a.$slidesCache &&
          (a.unload(),
          a.$slideTrack.children(this.options.slide).detach(),
          a.$slidesCache.appendTo(a.$slideTrack),
          a.reinit());
      }),
    (b.prototype.unload = function () {
      var b = this;
      a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow &&
          b.htmlExpr.test(b.options.prevArrow) &&
          b.$prevArrow.remove(),
        b.$nextArrow &&
          b.htmlExpr.test(b.options.nextArrow) &&
          b.$nextArrow.remove(),
        b.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (b.prototype.unslick = function (a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy();
    }),
    (b.prototype.updateArrows = function () {
      var b,
        a = this;
      (b = Math.floor(a.options.slidesToShow / 2)),
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          !a.options.infinite &&
          (a.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          a.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === a.currentSlide
            ? (a.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
              a.options.centerMode === !1
            ? (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - 1 &&
              a.options.centerMode === !0 &&
              (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (b.prototype.updateDots = function () {
      var a = this;
      null !== a.$dots &&
        (a.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        a.$dots
          .find("li")
          .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (b.prototype.visibility = function () {
      var a = this;
      a.options.autoplay &&
        (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
    }),
    (a.fn.slick = function () {
      var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;
      for (f = 0; e > f; f++)
        if (
          ("object" == typeof c || "undefined" == typeof c
            ? (a[f].slick = new b(a[f], c))
            : (g = a[f].slick[c].apply(a[f].slick, d)),
          "undefined" != typeof g)
        )
          return g;
      return a;
    });
});
/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */ !(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, h) {
          var u = a.data(h, i);
          if (!u)
            return void s(
              i + " not initialized. Cannot call methods, i.e. " + r
            );
          var d = u[e];
          if (!d || "_" == e.charAt(0))
            return void s(r + " is not a valid method");
          var l = d.apply(u, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (r.prototype.option ||
          (r.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function () {}
        : function (t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
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
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
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
          var n = 0,
            o = i[n];
          e = e || [];
          for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
            var s = r && r[o];
            s && (this.off(t, o), delete r[o]),
              o.apply(this, e),
              (n += s ? 0 : 1),
              (o = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        u > e;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
      }
    }
    function r(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var r = n(e);
        if ("none" == r.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
          u > l;
          l++
        ) {
          var c = h[l],
            f = r[c],
            m = parseFloat(f);
          a[c] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          E = d && s,
          b = t(r.width);
        b !== !1 && (a.width = b + (E ? 0 : p + _));
        var x = t(r.height);
        return (
          x !== !1 && (a.height = x + (E ? 0 : g + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + z)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      u = h.length,
      d = !1;
    return r;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                o.push(i[r]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function () {
            n.apply(r, e), delete r[o];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var r = i.toDashed(o),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            h = document.querySelectorAll(".js-" + r),
            u = i.makeArray(a).concat(i.makeArray(h)),
            d = s + "-options",
            l = t.jQuery;
          u.forEach(function (t) {
            var i,
              r = t.getAttribute(s) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + s + " on " + t.className + ": " + a)
              );
            }
            var h = new e(t, i);
            l && l.data(t, o, h);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = u[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = this.layout.size,
          s =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * r.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * r.height
              : parseInt(o, 10);
        (s = isNaN(s) ? 0 : s),
          (a = isNaN(a) ? 0 : a),
          (s -= e ? r.paddingLeft : r.paddingRight),
          (a -= i ? r.paddingTop : r.paddingBottom),
          (this.position.x = s),
          (this.position.y = a);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[r] = this.getXValue(a)), (e[s] = "");
        var h = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[h];
        (e[u] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          h = e - n,
          u = {};
        (u.transform = this.getTranslate(a, h)),
          this.transition({
            to: u,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(h, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(h, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(f);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, r) {
            return e(t, i, n, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (c[o] = this), this._create();
      var r = this._getOption("initLayout");
      r && this.layout();
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var h = t.console,
      u = t.jQuery,
      d = function () {},
      l = 0,
      c = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = r.prototype;
    n.extend(f, e.prototype),
      (f.option = function (t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = e[o],
            s = new i(r, this);
          n.push(s);
        }
        return n;
      }),
      (f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          s++, s == r && i();
        }
        var o = this,
          r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var o = u.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (f._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return r;
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(r, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
      }),
      (r.create = function (t, e) {
        var i = s(r);
        return (
          (i.defaults = n.extend({}, r.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = s(o)),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return (
      (n._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (n.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / n,
          s = n - (o % n),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            r = this[o](n, t),
            s = { x: this.columnWidth * r.col, y: r.y },
            a = r.y + t.size.outerHeight,
            h = n + r.col,
            u = r.col;
          h > u;
          u++
        )
          this.colYs[u] = a;
        return s;
      }),
      (n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (n._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          r = o ? n.left : n.right,
          s = r + i.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var u = this._getOption("originTop"),
            d = (u ? n.top : n.bottom) + i.outerHeight,
            l = a;
          h >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  });
!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["ev-emitter/ev-emitter"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("ev-emitter")))
    : (t.imagesLoaded = e(t, t.EvEmitter));
})("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  function i(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }
  function o(t) {
    var e = [];
    if (Array.isArray(t)) e = t;
    else if ("number" == typeof t.length)
      for (var i = 0; i < t.length; i++) e.push(t[i]);
    else e.push(t);
    return e;
  }
  function n(t, e, r) {
    if (!(this instanceof n)) return new n(t, e, r);
    "string" == typeof t && (t = document.querySelectorAll(t)),
      (this.elements = o(t)),
      (this.options = i({}, this.options)),
      "function" == typeof e ? (r = e) : i(this.options, e),
      r && this.on("always", r),
      this.getImages(),
      h && (this.jqDeferred = new h.Deferred()),
      setTimeout(
        function () {
          this.check();
        }.bind(this)
      );
  }
  function r(t) {
    this.img = t;
  }
  function s(t, e) {
    (this.url = t), (this.element = e), (this.img = new Image());
  }
  var h = t.jQuery,
    a = t.console;
  (n.prototype = Object.create(e.prototype)),
    (n.prototype.options = {}),
    (n.prototype.getImages = function () {
      (this.images = []), this.elements.forEach(this.addElementImages, this);
    }),
    (n.prototype.addElementImages = function (t) {
      "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && d[e]) {
        for (var i = t.querySelectorAll("img"), o = 0; o < i.length; o++) {
          var n = i[o];
          this.addImage(n);
        }
        if ("string" == typeof this.options.background) {
          var r = t.querySelectorAll(this.options.background);
          for (o = 0; o < r.length; o++) {
            var s = r[o];
            this.addElementBackgroundImages(s);
          }
        }
      }
    });
  var d = { 1: !0, 9: !0, 11: !0 };
  return (
    (n.prototype.addElementBackgroundImages = function (t) {
      var e = getComputedStyle(t);
      if (e)
        for (
          var i = /url\((['"])?(.*?)\1\)/gi, o = i.exec(e.backgroundImage);
          null !== o;

        ) {
          var n = o && o[2];
          n && this.addBackground(n, t), (o = i.exec(e.backgroundImage));
        }
    }),
    (n.prototype.addImage = function (t) {
      var e = new r(t);
      this.images.push(e);
    }),
    (n.prototype.addBackground = function (t, e) {
      var i = new s(t, e);
      this.images.push(i);
    }),
    (n.prototype.check = function () {
      function t(t, i, o) {
        setTimeout(function () {
          e.progress(t, i, o);
        });
      }
      var e = this;
      (this.progressedCount = 0),
        (this.hasAnyBroken = !1),
        this.images.length
          ? this.images.forEach(function (e) {
              e.once("progress", t), e.check();
            })
          : this.complete();
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
      this.getIsImageComplete()
        ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
        : ((this.proxyImage = new Image()),
          this.proxyImage.addEventListener("load", this),
          this.proxyImage.addEventListener("error", this),
          this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.proxyImage.src = this.img.src));
    }),
    (r.prototype.getIsImageComplete = function () {
      return this.img.complete && void 0 !== this.img.naturalWidth;
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
    (s.prototype = Object.create(r.prototype)),
    (s.prototype.check = function () {
      this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        (this.img.src = this.url),
        this.getIsImageComplete() &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
    }),
    (s.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
    }),
    (s.prototype.confirm = function (t, e) {
      (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
    }),
    (n.makeJQueryPlugin = function (e) {
      (e = e || t.jQuery) &&
        ((h = e).fn.imagesLoaded = function (t, e) {
          return new n(this, t, e).jqDeferred.promise(h(this));
        });
    }),
    n.makeJQueryPlugin(),
    n
  );
});
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
if ("ontouchstart" in window) {
  document.documentElement.className =
    document.documentElement.className + " touch";
}
$(document).ready(function () {
  if ($(".carousel [data-month]").length > 0) {
    $(".left.carousel-control .month").text(
      $("#carouselSingle .item.active").data("month")
    );
    $(".right.carousel-control .month").text(
      $("#carouselSingle .item.active").data("year")
    );
    $("#carouselSingle").on("slide.bs.carousel", function (e) {
      $(".left.carousel-control .month").text($(e.relatedTarget).data("month"));
      $(".right.carousel-control .month").text($(e.relatedTarget).data("year"));
    });
  }
  $(".nd-row-grid").imagesLoaded({}, function () {
    $(".nd-row-grid").masonry({
      itemSelector: ".nd-row-grid-item",
      columnWidth: ".nd-row-grid-sizer",
      percentPosition: true,
    });
  });
  $(".nd-next-section").click(function () {
    var $target = $(this).parent().next(),
      targetOffset = $target.offset().top;
    $("html,body").animate({ scrollTop: targetOffset - 80 }, 1000);
  });
  $(".carousel").swiperight(function () {
    $(this).carousel("prev");
  });
  $(".carousel").swipeleft(function () {
    $(this).carousel("next");
  });
  $("[data-toggle-class]").click(function (ev) {
    ev.preventDefault();
    $($(this).attr("data-target")).toggleClass(
      $(this).attr("data-toggle-class")
    );
    var el = this;
    setTimeout(function () {
      $("body").toggleClass("toggled-" + $(el).attr("data-toggle-class"));
    }, 200);
  });
  $("[data-popup-share]").click(function (e) {
    e.preventDefault();
    return window.open(
      getSharerUrl({
        social: $(this).data("popup-share"),
        url: $(this).data("url"),
        title: $(this).data("title"),
        image: $(this).data("img"),
      }),
      "ShareWindow",
      "height=450, width=550, top=" +
        ($(window).height() / 2 - 275) +
        ", left=" +
        ($(window).width() / 2 - 225) +
        ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
    );
  });
  function getSharerUrl(opt) {
    var mapping = {
      facebook: "http://www.facebook.com/share.php?u=" + opt.url,
      linkedin:
        "https://www.linkedin.com/shareArticle?mini=true&url=" + opt.url,
      twitter:
        "https://twitter.com/intent/tweet?text=Check this article&url=" +
        opt.url +
        "&hashtags=franke&original_referer=",
      pinterest:
        "https://it.pinterest.com/pin/create/button/?url=" +
        opt.url +
        "&amp=&media=" +
        opt.image +
        "&description=" +
        opt.title,
    };
    return mapping[opt.social];
  }
});
var $ = jQuery;
$("[data-guess-height]").each(function () {
  var $this = $(this),
    bg = $this.css("background-image");
  bg = bg.replace("url(", "").replace(")", "").replace(/\"/gi, "");
  getImageSize(bg, function (w, h) {
    var percRateo = (h / w) * 100;
    $this.css("padding-bottom", percRateo + "%");
  });
});
$("#contact-form-country").on("change", function () {
  country = $(this).val();
  if (country == "IT") {
    $(".nd-gridded-form-contacts .zipcode-container").hide();
    $(".nd-gridded-form-contacts .province-container").show();
  } else {
    $(".nd-gridded-form-contacts .province-container").hide();
    $(".nd-gridded-form-contacts .zipcode-container").show();
  }
});
$("#newsletter-form-country").on("change", function () {
  country = $(this).val();
  if (country == "IT") {
    $(".nd-form-newsletter .zipcode-container").hide();
    $(".nd-form-newsletter .province-container").show();
  } else {
    $(".nd-form-newsletter .province-container").hide();
    $(".nd-form-newsletter .zipcode-container").show();
  }
});
$("#register-form-country").on("change", function () {
  country = $(this).val();
  if (country == "IT") {
    $(".nd-gridded-form .zipcode-container").hide();
    $(".nd-gridded-form .province-container").show();
  } else {
    $(".nd-gridded-form .province-container").hide();
    $(".nd-gridded-form .zipcode-container").show();
  }
});
function getImageSize(src, callback) {
  var img = document.createElement("img");
  img.src = src;
  var poll = setInterval(function () {
    if (img.naturalWidth) {
      clearInterval(poll);
      callback.apply(this, [img.naturalWidth, img.naturalHeight]);
    }
  }, 10);
}
function anchor(id, animate, margin) {
  margin = margin || 0;
  if (!window.location.hash) {
    animate = typeof animate != "undefined" ? animate : false;
    if (animate) {
      $("html,body").stop();
      $("html,body").animate(
        { scrollTop: $("#" + id).offset().top + (-margin + 2) },
        "slow"
      );
    } else {
      var offTop = $("#" + id).offset().top + 2;
      $("html,body").scrollTop(offTop);
    }
  }
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
$(document).ready(function () {
  $(".nd-main-nav li .nd-nav-submenu").each(function () {
    $(this)
      .parent()
      .click(function (e) {
        if (
          window.innerWidth < 1200 &&
          !$(e.target).parent().is(".nd-nav-submenu-close")
        ) {
          if (!$(e.target).is("a")) {
            if ($(e.target).is("h5")) {
              e.preventDefault();
              var $this = $(e.target);
              $this.toggleClass("open");
              $this.find("i").toggleClass("fa-minus").toggleClass("fa-plus");
            }
            e.preventDefault();
            $(this).find(".nd-nav-submenu").addClass("open");
          }
        }
      })
      .mouseenter(function () {
        if (window.innerWidth >= 1200)
          $(this).find(".nd-nav-submenu").addClass("open");
      })
      .mouseleave(
        debounce(function () {
          if (window.innerWidth >= 1200)
            $(this).find(".nd-nav-submenu").removeClass("open");
        }, 200)
      );
  });
  $(".nd-nav-submenu-close").click(function () {
    $(this).parent().removeClass("open");
  });
  $(".nd-menu-show-more").click(function () {
    $parent = $(this).parent();
    $(this).find("i").toggleClass("fa-minus").toggleClass("fa-plus");
    $parent.toggleClass("open");
  });
  $("[data-carousel-commander]").each(function () {
    var $carousel = $($(this).attr("data-carousel-commander"));
    $(this)
      .find("li")
      .each(function (index) {
        $(this).mouseenter(
          debounce(function () {
            $carousel.carousel(index);
          }, 300)
        );
      });
  });
  $(".nd-close-mobile-nav").click(function () {
    $(".nd-nav-submenu").removeClass("open");
  });
  $(".nd-btn-search").on("click", function () {
    $(".nd-search-overlay-content input").focus();
  });
});
$("#carouselSingle").bind("slid.bs.carousel", function (e) {
  if ($(".nd-cont-slider-total").length > 0) {
    var text = $(".active", e.target).index() + 1;
    $(".nd-cont-slider-total .item-to-change").text(text);
  }
});
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Rellax = factory();
  }
})(this, function () {
  var Rellax = function (el, options) {
    "use strict";
    var self = Object.create(Rellax.prototype);
    var posY = 0;
    var screenY = 0;
    var blocks = [];
    var pause = false;
    var loop =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / 60);
      };
    var transformProp =
      window.transformProp ||
      (function () {
        var testEl = document.createElement("div");
        if (testEl.style.transform == null) {
          var vendors = ["Webkit", "Moz", "ms"];
          for (var vendor in vendors) {
            if (testEl.style[vendors[vendor] + "Transform"] !== undefined) {
              return vendors[vendor] + "Transform";
            }
          }
        }
        return "transform";
      })();
    var clamp = function (num, min, max) {
      return num <= min ? min : num >= max ? max : num;
    };
    self.options = {
      speed: -2,
      center: false,
      round: true,
      roundPercision: 1,
      totaldegrees: 180,
    };
    if (options) {
      Object.keys(options).forEach(function (key) {
        self.options[key] = options[key];
      });
    }
    self.options.speed = clamp(self.options.speed, -10, 10);
    if (!el) {
      el = ".rellax";
    }
    var elements = document.querySelectorAll(el);
    if (elements.length > 0) {
      self.elems = elements;
    } else {
      throw new Error("The elements you're trying to select don't exist.");
    }
    var init = function () {
      screenY = window.innerHeight;
      setPosition();
      for (var i = 0; i < self.elems.length; i++) {
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }
      window.addEventListener("resize", function () {
        animate();
      });
      update();
      animate();
    };
    var createBlock = function (el) {
      var dataPercentage = el.dataset.rellaxPercentage;
      var dataSpeed = el.dataset.rellaxSpeed;
      var posY =
        dataPercentage || self.options.center
          ? window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
          : 0;
      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
      var percentage = dataPercentage
        ? dataPercentage
        : (posY - blockTop + screenY) / (blockHeight + screenY);
      if (self.options.center) {
        percentage = 0.5;
      }
      var speed = dataSpeed ? clamp(dataSpeed, -10, 10) : self.options.speed;
      if (dataPercentage || self.options.center) {
        speed = clamp(dataSpeed || self.options.speed, -5, 5);
      }
      var base = updatePosition(percentage, speed);
      var style = el.style.cssText;
      var transform = "";
      if (style.indexOf("transform") >= 0) {
        var index = style.indexOf("transform");
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(";");
        if (delimiter) {
          transform =
            " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
        }
      }
      return {
        base: base,
        top: blockTop,
        height: blockHeight,
        speed: speed,
        style: style,
        transform: transform,
      };
    };
    var setPosition = function () {
      var oldY = posY;
      if (window.pageYOffset !== undefined) {
        posY = window.pageYOffset;
      } else {
        posY = (
          document.documentElement ||
          document.body.parentNode ||
          document.body
        ).scrollTop;
      }
      if (oldY != posY) {
        return true;
      }
      return false;
    };
    var updatePosition = function (percentage, speed) {
      var value = speed * (100 * (1 - percentage));
      var factor = Math.pow(10, self.options.roundPercision);
      return self.options.round ? Math.round(value * factor) / factor : value;
    };
    var update = function () {
      if (setPosition() && pause === false) {
        animate();
      }
      loop(update);
    };
    var animate = function () {
      for (var i = 0; i < self.elems.length; i++) {
        var percentage =
          (posY - blocks[i].top + screenY) / (blocks[i].height + screenY);
        var position =
          updatePosition(percentage, blocks[i].speed) - blocks[i].base;
        var degree = percentage * self.options.totaldegrees;
        var rotate = "rotate(" + degree + "deg)";
        if (self.elems[i].getAttribute("data-not-rotate") !== null) {
          rotate = "";
        }
        if (self.elems[i].getAttribute("data-inverte-rotate") !== null) {
          rotate = "rotate(" + degree * -1 + "deg)";
        }
        var translate =
          "translate3d(0," + position + "px,0) " + blocks[i].transform + rotate;
        self.elems[i].style[transformProp] = translate;
      }
    };
    self.destroy = function () {
      for (var i = 0; i < self.elems.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }
      pause = true;
    };
    init();
    return self;
  };
  return Rellax;
});
$(document).ready(function () {
  if ($("[data-rellax-speed]").length)
    var rellax = new Rellax("[data-rellax-speed]");
});
$("#store-form").on("submit", function ($e) {
  $e.preventDefault();
  var xhr;
  var route = "";
  var action = "";
  var $anchor = $(this);
  var successMessage = "";
  var errorMessage = "";
  var data = $(this).serializeArray();
  var type = "";
  var provinceName = "";
  var userType = "";
  var userTypeInput = "";
  var checkNewsletter = "";
  if ($(this).is($("#newsletter-subscription"))) {
    var $formBlock = $("#newsletter-subscription").parent(".col-xs-12");
    route = "/" + Config.locale + "/newsletter/iscriviti";
    action = "subscribe";
    successMessage =
      '<div class="text-xs-center newsletter-form-response">' +
      "<h1>" +
      Translations.newsletterSuccess[0] +
      "</h1>" +
      "<p>" +
      Translations.newsletterSuccess[1] +
      "</p>" +
      "</div>";
    errorMessage =
      '<div class="text-xs-center newsletter-form-response">' +
      "<h1>" +
      Translations.newsletterError[0] +
      "</h1>" +
      "<p>" +
      Translations.newsletterError[1] +
      "</p>" +
      '<a href="' +
      window.location +
      "/#" +
      $anchor.attr("id") +
      '" >' +
      Translations.newsletterError[2] +
      "</a>" +
      "</div>";
    type = "newsletter";
    userTypeInput = $(this).find('input[name="tipology"]:checked').val();
  } else {
    if ($(this).is($("#contact-form"))) {
      var $formBlock = $("#contact-form").parent(".col-xs-12");
      route = "/" + Config.locale + "/contacts";
      action = "contactsForm";
      successMessage =
        '<div class="text-xs-center contact-form-response">' +
        "<h1>" +
        Translations.contactSuccess[0] +
        "</h1>" +
        "<p>" +
        Translations.contactSuccess[1] +
        "</p>" +
        "</div>";
      errorMessage =
        '<div class="text-xs-center contact-form-response">' +
        "<h1>" +
        Translations.contactError[0] +
        "</h1>" +
        "<p>" +
        Translations.contactError[1] +
        "</p>" +
        '<a href=" ' +
        getURL() +
        "/#" +
        $anchor.attr("id") +
        '" target="_self" >' +
        Translations.contactError[2] +
        "</a>" +
        "</div>";
      type = "contact";
      userTypeInput = $(this).find('input[name="tipology"]:checked').val();
      checkNewsletter = $(this).find('input[name="newsletter"]').prop("checked")
        ? "yes"
        : "no";
    } else {
      var $formBlock = $("#store-form").closest("div.col-xs-12");
      route = "/" + Config.locale + "/stores/contacts";
      action = "storeForm";
      successMessage =
        '<div class="text-xs-center contact-form-response">' +
        "<h1>" +
        Translations.contactSuccess[0] +
        "</h1>" +
        "<p>" +
        Translations.contactSuccess[1] +
        "</p>" +
        "</div>";
      errorMessage =
        '<div class="text-xs-center contact-form-response">' +
        "<h1>" +
        Translations.contactError[0] +
        "</h1>" +
        "<p>" +
        Translations.contactError[1] +
        "</p>" +
        '<a href=" ' +
        getURL() +
        "/#" +
        $anchor.attr("id") +
        '" target="_self" >' +
        Translations.contactError[2] +
        "</a>" +
        "</div>";
      type = "store";
      userTypeInput = $(this).find('input[name="tipology"]:checked').val();
      checkNewsletter = $(this).find('input[name="newsletter"]').prop("checked")
        ? "yes"
        : "no";
      provinceName = $("#form-italy-province option:selected").text();
    }
  }
  switch (parseInt(userTypeInput)) {
    case 1:
      userType = "Dealer";
      break;
    case 2:
      userType = "Architect";
      break;
    case 3:
      userType = "End customer";
      break;
  }
  xhr = $.ajax({
    headers: { "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content") },
    url: route,
    action: action,
    type: "post",
    dataType: "json",
    async: false,
    data: data,
    success: function (response) {
      if (response.success) {
        $formBlock.empty();
        $formBlock.append(successMessage);
        if (type === "newsletter") {
          dataLayer.push({
            event: "newsletter-subscription",
            userType: userType,
          });
        } else if (type === "contact") {
          dataLayer.push({
            event: "contact-form-info",
            userType: userType,
            checkNewsletter: checkNewsletter,
          });
        } else if (type === "store") {
          dataLayer.push({
            event: "contact-form-stores",
            userType: userType,
            checkNewsletter: checkNewsletter,
            province: provinceName,
          });
        }
      } else {
        var error = response.error;
        if ($("#error-message").length > 0) {
          $("#error-message").addClass("error");
        }
        $.each(error, function (key, value) {
          if (key == "country") {
            $formBlock.find("select[name=" + key + "]").addClass("error");
          } else {
            if (key == "message") {
              $formBlock.find("textarea[name=" + key + "]").addClass("error");
            } else {
              $formBlock.find("input[name=" + key + "]").addClass("error");
            }
          }
        });
      }
    },
    error: function (response) {
      $formBlock.empty();
      $formBlock.append(errorMessage);
    },
  });
});
function getURL() {
  return location.protocol + "//" + location.host + location.pathname;
}
function submitContactForm(event, token) {
  event.preventDefault();
  console.log("vai con la ajax");
  var xhr;
  var route = "";
  var action = "";
  var $anchor = $(this);
  var successMessage = "";
  var errorMessage = "";
  var data = $(this).serializeArray();
  var type = "";
  var provinceName = "";
  var userType = "";
  var userTypeInput = "";
  var checkNewsletter = "";
  var $formBlock = $("#contact-form").parent(".col-xs-12");
  route = "/" + Config.locale + "/contacts";
  action = "contactsForm";
  successMessage =
    '<div class="text-xs-center contact-form-response">' +
    "<h1>" +
    Translations.contactSuccess[0] +
    "</h1>" +
    "<p>" +
    Translations.contactSuccess[1] +
    "</p>" +
    "</div>";
  errorMessage =
    '<div class="text-xs-center contact-form-response">' +
    "<h1>" +
    Translations.contactError[0] +
    "</h1>" +
    "<p>" +
    Translations.contactError[1] +
    "</p>" +
    '<a href=" ' +
    getURL() +
    "/#" +
    $anchor.attr("id") +
    '" target="_self" >' +
    Translations.contactError[2] +
    "</a>" +
    "</div>";
  type = "contact";
  userTypeInput = $(this).find('input[name="tipology"]:checked').val();
  checkNewsletter = $(this).find('input[name="newsletter"]').prop("checked")
    ? "yes"
    : "no";
  switch (parseInt(userTypeInput)) {
    case 1:
      userType = "Dealer";
      break;
    case 2:
      userType = "Architect";
      break;
    case 3:
      userType = "End customer";
      break;
  }
  xhr = $.ajax({
    headers: { "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content") },
    url: route,
    action: action,
    type: "post",
    dataType: "json",
    async: false,
    data: data,
    success: function (response) {
      if (response.success) {
        $formBlock.empty();
        $formBlock.append(successMessage);
        if (type === "newsletter") {
          dataLayer.push({
            event: "newsletter-subscription",
            userType: userType,
          });
        } else if (type === "contact") {
          dataLayer.push({
            event: "contact-form-info",
            userType: userType,
            checkNewsletter: checkNewsletter,
          });
        } else if (type === "store") {
          dataLayer.push({
            event: "contact-form-stores",
            userType: userType,
            checkNewsletter: checkNewsletter,
            province: provinceName,
          });
        }
      } else {
        var error = response.error;
        if ($("#error-message").length > 0) {
          $("#error-message").addClass("error");
        }
        $.each(error, function (key, value) {
          if (key == "country") {
            $formBlock.find("select[name=" + key + "]").addClass("error");
          } else {
            if (key == "message") {
              $formBlock.find("textarea[name=" + key + "]").addClass("error");
            } else {
              $formBlock.find("input[name=" + key + "]").addClass("error");
            }
          }
        });
      }
    },
    error: function (response) {
      $formBlock.empty();
      $formBlock.append(errorMessage);
    },
  });
}
var $dataStickies = $("[data-sticky]");
if ($("[data-sticky]").length > 0) {
  var scrollProductFunction = function () {
    $dataStickies.each(function () {
      if (
        window.scrollY + window.innerHeight > $(this).parent().height() + 80 &&
        !$(this).hasClass("is_stuck")
      ) {
        $(this).addClass("is_stuck");
      }
      if (
        window.scrollY + window.innerHeight < $(this).parent().height() + 80 &&
        $(this).hasClass("is_stuck")
      ) {
        $(this).removeClass("is_stuck");
      }
    });
  };
} else {
  var scrollProductFunction = function () {};
}
$(document).ready(function () {
  scrollProductFunction();
  $(document).on(
    "click",
    "body.toggled-nd-open-finiture-menu",
    function (event) {
      if (
        ($(event.target).hasClass("nd-open-finiture-menu") ||
          $(event.target).parents(".nd-open-finiture-menu").size()) &&
        !$(event.target).parents().is(".nd-finiture-close")
      ) {
      } else {
        $("body").removeClass("toggled-nd-open-finiture-menu");
        $(".nd-open-finiture-menu").removeClass("nd-open-finiture-menu");
      }
    }
  );
  $(".to-choose").click(function () {
    var src = $(this).find("img")[0].src;
    var alt = $(this).find("img")[0].alt;
    $(this)
      .parent()
      .parent()
      .find(".choosen img")
      .attr("src", src)
      .attr("alt", alt);
  });
  if ($(".nd-product-suggested-item").length < 4 && $(window).width() > 768) {
    simpleSlider();
  }
  if (
    !($(".nd-product-suggested-item").length < 2 && $(window).width() < 769)
  ) {
    $(".nd-product-suggested-items").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow:
        '<div class="nd-slick-pd-control prev"><svg version="1.1" class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-black" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-black" d="M1.1,18.5L18.9,1.2"/></g></g></svg></div>',
      nextArrow:
        '<div class="nd-slick-pd-control next"><svg version="1.1" class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-black" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-black" d="M1.1,18.5L18.9,1.2"/></g></g></svg></div>',
      responsive: [
        { breakpoint: 1920, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 1 } },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "80px",
          },
        },
      ],
    });
  }
  function simpleSlider() {
    if ($(".nd-product-suggested-items").hasClass("slick-initialized")) {
      $(".slick-track").css("margin", "auto");
    } else {
      setTimeout(simpleSlider, 500);
    }
  }
});
$(window).scroll(scrollProductFunction);
$(document).ready(function () {
  scrollProductFunction();
  if ($(window).width() < 768) {
    $(".nd-compo-popup").each(function () {
      if (!$(this).hasClass("hidden-xs")) {
        $(this).addClass("hidden-xs");
      }
    });
  }
  if (!$(".nd-compo-popup").hasClass("hidden-xs")) {
    $(document).on("click", ".nd-compo-point", function (e) {
      e.preventDefault();
      var el = this;
      $(".nd-compo-popup").removeClass("nd-open-compo-popoup");
      $("body").removeClass("toggled-nd-open-compo-popoup");
      $($(this).attr("data-target")).toggleClass(
        $(this).attr("data-toggle-class")
      );
      setTimeout(function () {
        $("body").toggleClass("toggled-" + $(el).attr("data-toggle-class"));
      }, 200);
      return false;
    });
    $(document).on("click", ".nd-composizione-bg", function (event) {
      if (
        $(event.target).hasClass("nd-compo-point") ||
        $(event.target).hasClass("nd-compo-popup") ||
        $(event.target).parents(".nd-compo-point").size() ||
        $(event.target).parents(".nd-compo-popup").size()
      ) {
      } else {
        $(".nd-compo-popup").removeClass("nd-open-compo-popoup");
        $("body").removeClass("toggled-nd-open-compo-popoup");
      }
    });
  } else {
    $(document).on("click", ".nd-compo-point", function (e) {
      e.preventDefault();
      var $pin = $(e.target.closest(".nd-compo-point"));
      var $modal = $(".nd-compo-popup-mobile");
      $modal.find(".catgory-title").text($pin.attr("data-hotspot-category"));
      $modal.find(".product-title").text($pin.attr("data-hotspot-title"));
      $modal.find(".content").text($pin.attr("data-hotspot-text"));
      $modal
        .find(".btn")
        .text($pin.attr("data-hotspot-label"))
        .attr("href", $pin.attr("data-hotspot-link"));
      $modal.addClass("visible");
    });
    $(document).on("click", ".nd-compo-popup-close", function () {
      var $modal = $(".nd-compo-popup-mobile");
      $modal.removeClass("visible");
      $modal.find(".catgory-title").text("");
      $modal.find(".product-title").text("");
      $modal.find(".content").text("");
      $modal.find(".btn").text("").attr("href", "");
    });
  }
  $(".nd-composition-suggested-items").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<div class="nd-slick-pd-control prev"><svg version="1.1" class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-black" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-black" d="M1.1,18.5L18.9,1.2"/></g></g></svg></div>',
    nextArrow:
      '<div class="nd-slick-pd-control next"><svg version="1.1" class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-black" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-black" d="M1.1,18.5L18.9,1.2"/></g></g></svg></div>',
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
  var slickable = false;
  function goSlick() {
    if (window.innerWidth >= 768 && slickable) {
      $(".nd-composizioni-section").slick("unslick");
      slickable = false;
    }
    if (window.innerWidth < 768 && !slickable) {
      slickable = true;
      $(".nd-composizioni-section").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
          '<div class="nd-slick-pd-control prev"><svg version="1.1" class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-white" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-white" d="M1.1,18.5L18.9,1.2"/></g></g></svg></div>',
        nextArrow:
          '<div class="nd-slick-pd-control next"><svg version="1.1" class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-white" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-white" d="M1.1,18.5L18.9,1.2"/></g></g></svg></div>',
      });
    }
  }
  if ($(".nd-composizioni-section").length > 0) {
    goSlick();
    $(window).resize(goSlick);
  }
});
$(document).ready(function () {
  $(document).on(
    "click",
    ".nd-link-object-finiture-tessuti-maniglie",
    function (e) {
      e.preventDefault();
      var el = this,
        $target = $($(el).attr("data-extra-target"));
      if ($target.hasClass($(el).attr("data-extra-toggle-class"))) {
      } else {
        $(".nd-link-object-finiture-tessuti-maniglie").removeClass("active");
        $(el).addClass("active");
        $("." + $(el).attr("data-extra-toggle-class")).removeClass(
          $(el).attr("data-extra-toggle-class")
        );
        $target.addClass($(el).attr("data-extra-toggle-class"));
      }
      return false;
    }
  );
  $(document).on("click", ".nd-materiale-choice", function (e) {
    var $slideChoosen = $(this).parent().parent();
    $slideChoosen
      .find(".nd-materiale-active")
      .removeClass("nd-materiale-active");
    $slideChoosen
      .find(".nd-materiale-choosen img")
      .attr("src", $(this).find("img").attr("src"));
    $slideChoosen
      .find(".nd-materiale-choosen .nd-materiale-title")
      .text($(this).attr("data-materiale-title"));
    $(this).addClass("nd-materiale-active");
  });
});
$(document).ready(function () {
  if ($(".nd-slider-teens-kids").length > 0) {
    var svgPrevDesktop =
        '<svg version="1.1" id="Livello_1" class="hidden-xs" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 30" style="enable-background:new 0 0 41 30;" xml:space="preserve"><g id="Symbols"><g id="Arrow-balck"><g id="Group"><path id="Rectangle-5-Copy" d="M1.3,14.2L14.1,1.5c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L2.7,15.7c-0.4,0.4-1,0.4-1.4,0l0,0C0.9,15.3,0.9,14.6,1.3,14.2z"/><path id="Rectangle-5-Copy_1_" d="M15.8,27.4L3.1,14.7c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l12.7,12.7c0.4,0.4,1,0.4,1.4,0l0,0C16.2,28.5,16.2,27.8,15.8,27.4z"/><path id="Rectangle-5" d="M2,14h38c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,14.4,1.4,14,2,14z"/></g></g></g></svg>',
      svgPrevMobile =
        '<svg version="1.1" class="visible-xs" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-black" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-black" d="M1.1,18.5L18.9,1.2"/></g></g></svg>',
      svgNextMobile =
        '<svg version="1.1" class="visible-xs" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 38" style="enable-background:new 0 0 20 38;" xml:space="preserve"><g id="Symbols"><g id="Next"><path id="Line" class="nd-svg-icon-line-black" d="M18.8,36.8L1.1,18.4"/><path id="Line_1_" class="nd-svg-icon-line-black" d="M1.1,18.5L18.9,1.2"/></g></g></svg>',
      svgNextDesktop =
        '<svg version="1.1" id="Livello_1"  class="hidden-xs" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 30" style="enable-background:new 0 0 41 30;" xml:space="preserve"><g id="Symbols"><g id="Arrow-balck"><g id="Group"><path id="Rectangle-5-Copy" d="M1.3,14.2L14.1,1.5c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L2.7,15.7c-0.4,0.4-1,0.4-1.4,0l0,0C0.9,15.3,0.9,14.6,1.3,14.2z"/><path id="Rectangle-5-Copy_1_" d="M15.8,27.4L3.1,14.7c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l12.7,12.7c0.4,0.4,1,0.4,1.4,0l0,0C16.2,28.5,16.2,27.8,15.8,27.4z"/><path id="Rectangle-5" d="M2,14h38c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,14.4,1.4,14,2,14z"/></g></g></g></svg>',
      slideLen = $(".nd-slider-teens-kids .nd-element").length;
    var percentage = 1 / slideLen;
    $(".nd-navigator-slider .nd-bar").css(
      "width",
      parseInt(percentage * 100) + "%"
    );
    var $slider = $(".nd-slider-teens-kids");
    $slider
      .on("init", function () {
        mouseWheel($slider);
      })
      .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        swipeToSlide: false,
        centerMode: true,
        centerPadding: "22vw",
        prevArrow:
          '<div class="nd-slick-pd-control prev">' +
          svgPrevDesktop +
          svgPrevMobile +
          "</div>",
        nextArrow:
          '<div class="nd-slick-pd-control next">' +
          svgNextDesktop +
          svgNextMobile +
          "</div>",
        responsive: [{ breakpoint: 768, settings: { centerMode: false } }],
      })
      .on("afterChange", function (event, slick, currentSlide) {
        var percentage = (currentSlide + 1) / slideLen;
        $(".nd-navigator-slider .nd-bar").css(
          "width",
          parseInt(percentage * 100) + "%"
        );
        $(".nd-navigator-slider .count").text(currentSlide);
        if ($(".nd-section-kids-slider-anchors").length > 0) {
          $(".nd-section-kids-slider-anchors a").each(function () {
            var goTo = $(this).attr("data-compositions-category-id");
            var $this = $(this);
            var $container = $(".nd-section-kids-slider-anchors");
            var currSlideCat = parseInt(
              $(".nd-element.slick-slide.slick-current").attr(
                "data-category-id"
              )
            );
            if (currSlideCat != 0) {
              if (currSlideCat == goTo) {
                console.log(currSlideCat + "=" + goTo);
                $(".btn-open-anchors").text($(this).text());
                $container.find("a.active").removeClass("active");
                $this.addClass("active");
              }
            } else {
              $container.find("a.active").removeClass("active");
            }
          });
        }
      });
    function mouseWheel($slider) {
      $(window).on("wheel", { $slider: $slider }, mouseWheelHandler);
    }
    function mouseWheelHandler(event) {
      var $slider = event.data.$slider;
      var deltaY = event.originalEvent.deltaY;
      if (deltaY < 0) {
        $slider.slick("slickPrev");
      } else {
        $slider.slick("slickNext");
      }
    }
    if ($(".nd-section-kids-slider-anchors").length > 0) {
      $(document).on(
        "click",
        ".nd-section-kids-slider-anchors a",
        function (e) {
          e.preventDefault();
          var goTo = $(this).attr("href").replace("#", "");
          $(".nd-kids-close-anchors").click();
          $(".btn-open-anchors").text($(this).text());
          $(".nd-slider-teens-kids").slick("slickGoTo", goTo);
          return false;
        }
      );
    }
    window.addEventListener("keydown", function (e) {
      if (e.defaultPrevented) {
        return;
      }
      switch (e.key) {
        case "ArrowLeft":
          $slider.slick("slickPrev");
          break;
        case "ArrowRight":
          $slider.slick("slickNext");
          break;
        default:
          return;
      }
    });
  }
  $.fn.wheel = function (callback) {
    return this.each(function () {
      $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.delta = null;
        if (e.originalEvent) {
          if (e.originalEvent.axis && e.originalEvent.axis == 1) {
            if (e.originalEvent.detail) e.delta = e.originalEvent.detail;
          } else {
            if (
              Math.abs(e.originalEvent.deltaX) >
              Math.abs(e.originalEvent.deltaY)
            ) {
              if (e.originalEvent.wheelDelta)
                e.delta = e.originalEvent.wheelDelta / -40;
              if (e.originalEvent.deltaX) e.delta = e.originalEvent.deltaX;
            }
          }
        }
        if (typeof callback == "function") {
          callback.call(this, e);
        }
      });
    });
  };
  scrollingPossible = true;
  $("body").wheel(function (e) {
    if (e.delta) {
      if (scrollingPossible) {
        if (e.delta > 0) {
          $(".nd-slider-teens-kids").slick("slickNext");
        } else {
          $(".nd-slider-teens-kids").slick("slickPrev");
        }
        scrollingPossible = false;
        setTimeout(function () {
          scrollingPossible = true;
        }, 1500);
      }
    }
  });
});
$(document).ready(function () {
  $animationShow = "slow";
  if (window.innerWidth < 768) {
    $(".tab-pane").removeClass("active");
    $(".nd-back-download").hide();
  }
  $(document).on("touchstart", ".nd-back-download", function () {
    $(".tab-pane").removeClass("active");
    $(".heading-content").show($animationShow);
    $(".tabs-nd-download").show($animationShow);
    $(".nd-back-download").hide($animationShow);
  });
  $(".tabs-nd-download a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
    if (window.innerWidth < 768) {
      if (!$($(this).attr("href")).hasClass("active")) {
        $($(this).attr("href")).addClass("active");
      }
      $(".heading-content").hide($animationShow);
      $(".tabs-nd-download").hide($animationShow);
      $(".nd-back-download").show($animationShow);
    }
  });
});
$(document).ready(function () {
  var $tecnicalSheetsFatherSelect = $("#technical-sheet-father-category");
  var $tecnicalSheetsChildSelect = $("#technical-sheet-child-category");
  var $tecnicalSheetsResultsList = $("#technical-sheet-row");
  var tecnicalSheetsChildPlaceholder = $(
    "#technical-sheet-child-category option"
  ).text();
  var $modelFatherSelect = $("#model-3ds-father-category");
  var $modelChildSelect = $("#model-3ds-child-category");
  var $modelResultsList = $("#model-3ds-row");
  var modelChildPlaceholder = $("#model-3ds-child-category option").text();
  $tecnicalSheetsFatherSelect.on("change", function () {
    var value = $(this).val();
    var type = "technicalSheet";
    ajaxGetCategories(
      value,
      $tecnicalSheetsChildSelect,
      tecnicalSheetsChildPlaceholder
    );
  });
  $modelFatherSelect.on("change", function () {
    var value = $(this).val();
    var type = "technicalSheet";
    ajaxGetCategories(value, $modelChildSelect, modelChildPlaceholder);
  });
  $tecnicalSheetsChildSelect.on("change", function () {
    var value = $(this).val();
    var type = "technicalSheets";
    $(this).parent().find(".clear-filter").show();
    ajaxGetResults(value, type, $tecnicalSheetsResultsList);
  });
  $modelChildSelect.on("change", function () {
    var value = $(this).val();
    var type = "3DsModel";
    $(this).parent().find(".clear-filter").show();
    ajaxGetResults(value, type, $modelResultsList);
  });
});
$(".nd-press-item").on("mouseenter", function () {
  var $this = $(this);
  var bg = $this.find(".nd-list-news-article-image").attr("data-bg-color");
  $this.css("background-color", bg);
});
$(".nd-press-item").on("mouseleave", function () {
  var $this = $(this);
  $this.css("background-color", "transparent");
});
function ajaxGetCategories(value, $childSelect, childPlaceholder) {
  var xhr;
  xhr = $.ajax({
    headers: { "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content") },
    url: "/" + Config.locale + "/downloads-categories",
    method: "POST",
    data: { action: "downloadsGetCategories", term: value },
    success: function (data) {
      var categories = JSON.parse(data);
      $childSelect.empty();
      $childSelect.append(
        $("<option>", {
          value: "",
          text: childPlaceholder,
          disabled: true,
          selected: true,
        })
      );
      $.each(categories, function (key, value) {
        $childSelect.append($("<option>", { value: key, text: value }));
      });
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function ajaxGetResults(value, type, $resultsList) {
  var xhr;
  xhr = $.ajax({
    headers: { "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content") },
    url: "/" + Config.locale + "/downloads-results",
    method: "POST",
    data: { action: "downloadsGetResults", term: value, type: type },
    success: function (data) {
      var results = JSON.parse(data);
      $resultsList.empty();
      $.each(results, function ($key, $value) {
        $resultsList.append(
          '<div class="col-xs-12 col-sm-6 col-md-3">\n' +
            '                    <div class="nd-scheda-prodotto-download">\n' +
            '                        <img src="' +
            $value[2] +
            '" alt="" class="img-responsive">\n' +
            '                        <h6 class="title-product">' +
            $value[0] +
            "</h6>\n" +
            '                        <a href="' +
            $value[1] +
            '">' +
            $value[3] +
            "</a>\n" +
            "                    </div>\n" +
            "                </div>"
        );
      });
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
$(document).ready(function () {
  $(this).on("click", ".deleteMyAccount", function (e) {
    e.preventDefault();
    $(".deleteAccount").addClass("isOpen");
  });
  $(this).on("click", ".closeDeleteAccount", function (e) {
    e.preventDefault();
    $(".deleteAccount").removeClass("isOpen");
  });
  $(this).on("change", '[name="country"]', function () {
    if ($(this).val() == "IT") {
      $(this).closest("form").find(".province-field").show();
      $(this).closest("form").find(".city-field").hide();
    } else {
      $(this).closest("form").find(".province-field").hide();
      $(this).closest("form").find(".city-field").show();
    }
  });
  if ($('[name="country"]').length > 0) {
    $('[name="country"]').trigger("change");
  }
  $(this).on("click", ".shareProductWishlist", function (e) {
    e.preventDefault();
    var code = $(this).attr("data-code");
    $('.formShareProductWishlist input[name="code"]').val(code);
    $(".popupShareProductWishlist").addClass("isOpen");
  });
  $(this).on("click", ".popupShareProductWishlist .close", function (e) {
    e.preventDefault();
    $(".popupShareProductWishlist").removeClass("isOpen");
  });
  $(this).on("submit", ".formShareProductWishlist", function (e) {
    e.preventDefault();
    var qst = $(this);
    var datas = qst.serialize();
    var code = qst.find("input[name='code']").val();
    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content") },
      url: "/" + Config.locale + "/dashboard/profile/wishlist/share/" + code,
      method: "POST",
      dataType: "json",
      data: datas,
      error: function (error) {
        console.log(error);
      },
      beforeSend: function () {
        qst.find(".response").slideUp();
      },
      success: function (response) {
        console.log(response);
        qst.find(".response").html(response.message).slideDown();
        if (response.error == 1) {
        } else {
          setTimeout(function () {
            $(".popupShareProductWishlist").removeClass("isOpen");
          }, 4000);
        }
      },
      complete: function () {
        setTimeout(function () {
          qst.find(".response").slideUp();
        }, 4000);
      },
    });
  });
});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ (function (factory) {
  var registeredInModuleLoader = false;
  if (typeof define === "function" && define.amd) {
    define(factory);
    registeredInModuleLoader = true;
  }
  if (typeof exports === "object") {
    module.exports = factory();
    registeredInModuleLoader = true;
  }
  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = (window.Cookies = factory());
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === "undefined") {
        return;
      }
      if (arguments.length > 1) {
        attributes = extend({ path: "/" }, api.defaults, attributes);
        if (typeof attributes.expires === "number") {
          var expires = new Date();
          expires.setMilliseconds(
            expires.getMilliseconds() + attributes.expires * 864e5
          );
          attributes.expires = expires;
        }
        attributes.expires = attributes.expires
          ? attributes.expires.toUTCString()
          : "";
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          );
        } else {
          value = converter.write(value, key);
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        var stringifiedAttributes = "";
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += "; " + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }
          stringifiedAttributes += "=" + attributes[attributeName];
        }
        return (document.cookie = key + "=" + value + stringifiedAttributes);
      }
      if (!key) {
        result = {};
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var cookie = parts.slice(1).join("=");
        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read
            ? converter.read(cookie, name)
            : converter(cookie, name) ||
              cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }
      return result;
    }
    api.set = api;
    api.get = function (key) {
      return api.call(api, key);
    };
    api.getJSON = function () {
      return api.apply({ json: true }, [].slice.call(arguments));
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(key, "", extend(attributes, { expires: -1 }));
    };
    api.withConverter = init;
    return api;
  }
  return init(function () {});
});
$(document).ready(function () {
  if (typeof Cookies != "undefined") {
    var cookieMessageCheck = Cookies.get("cookie_message");
    if (
      typeof cookieMessageCheck === "undefined" &&
      cookieMessageCheck != "1"
    ) {
      $("#footer-cookie-notice").fadeIn();
    }
  }
  var $window = $(window);
  var $cookieBanner = $("#footer-cookie-notice");
  $("#cookie-accept").on("click", function () {
    Cookies.set("cookie_message", "1", { expires: 365, path: "/" });
    $cookieBanner.fadeOut();
  });
  $window.on("click", function (e) {
    if (
      !$cookieBanner.is(e.target) &&
      $cookieBanner.has(e.target).length === 0
    ) {
      Cookies.set("cookie_message", "1", { expires: 365, path: "/" });
      $cookieBanner.fadeOut();
    }
  });
});
(function () {
  var laroute = function () {
    var routes = {
      absolute: false,
      rootUrl: "https://nidi.it",
      routes: [
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_image/loading",
          name: "image_loading",
          action:
            "NoonicImageuploaderHttpControllersImagesCropController@loading",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_image/uploader/{target}/{id}/{folder}/{skipCrop?}",
          name: "image_uploader",
          action:
            "NoonicImageuploaderHttpControllersImagesCropController@uploader",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "_image/upload",
          name: "image_upload_image",
          action:
            "NoonicImageuploaderHttpControllersImagesCropController@uploadImage",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_image/cropper/{target}/{id}/{directory}/{image}/{folder}",
          name: "image_cropper",
          action:
            "NoonicImageuploaderHttpControllersImagesCropController@cropper",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "_image/crop",
          name: "image_crop",
          action: "NoonicImageuploaderHttpControllersImagesCropController@crop",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "_image/done/{target}/{id}/{directory}/{image}/{url}",
          name: "image_done",
          action: "NoonicImageuploaderHttpControllersImagesCropController@done",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "_image/get-input",
          name: "image_get_input",
          action:
            "NoonicImageuploaderHttpControllersImagesCropController@getInput",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "api/user",
          name: null,
          action: "Closure",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "admin",
          name: "admin_dashboard_index",
          action: "AppHttpControllersAdminDashboardController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers",
          name: "admin_customers_index",
          action: "AppHttpControllersAdminCustomersController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/add",
          name: "admin_customers_add",
          action: "AppHttpControllersAdminCustomersController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/edit/{id}",
          name: "admin_customers_edit",
          action: "AppHttpControllersAdminCustomersController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/save/{id?}",
          name: "admin_customers_save",
          action: "AppHttpControllersAdminCustomersController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/view/{id}",
          name: "admin_customers_view",
          action: "AppHttpControllersAdminCustomersController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/delete/{id}",
          name: "admin_customers_delete",
          action: "AppHttpControllersAdminCustomersController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/restore/{id}",
          name: "admin_customers_restore",
          action: "AppHttpControllersAdminCustomersController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/forceDelete/{id}",
          name: "admin_customers_force_delete",
          action: "AppHttpControllersAdminCustomersController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/status/{id}/{status}",
          name: "admin_customers_status",
          action: "AppHttpControllersAdminCustomersController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/export/{format}",
          name: "admin_customers_export",
          action: "AppHttpControllersAdminCustomersController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/customers/bulk",
          name: "admin_customers_bulk",
          action: "AppHttpControllersAdminCustomersController@bulk",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators",
          name: "admin_administrators_index",
          action: "AppHttpControllersAdminAdministratorsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/add",
          name: "admin_administrators_add",
          action: "AppHttpControllersAdminAdministratorsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/edit/{id}",
          name: "admin_administrators_edit",
          action: "AppHttpControllersAdminAdministratorsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/save/{id?}",
          name: "admin_administrators_save",
          action: "AppHttpControllersAdminAdministratorsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/view/{id}",
          name: "admin_administrators_view",
          action: "AppHttpControllersAdminAdministratorsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/delete/{id}",
          name: "admin_administrators_delete",
          action: "AppHttpControllersAdminAdministratorsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/restore/{id}",
          name: "admin_administrators_restore",
          action: "AppHttpControllersAdminAdministratorsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/forceDelete/{id}",
          name: "admin_administrators_force_delete",
          action: "AppHttpControllersAdminAdministratorsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/status/{id}/{status}",
          name: "admin_administrators_status",
          action: "AppHttpControllersAdminAdministratorsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/administrators/export/{format}",
          name: "admin_administrators_export",
          action: "AppHttpControllersAdminAdministratorsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups",
          name: "admin_user_groups_index",
          action: "AppHttpControllersAdminUserGroupsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/add",
          name: "admin_user_groups_add",
          action: "AppHttpControllersAdminUserGroupsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/edit/{id}",
          name: "admin_user_groups_edit",
          action: "AppHttpControllersAdminUserGroupsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/save/{id?}",
          name: "admin_user_groups_save",
          action: "AppHttpControllersAdminUserGroupsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/view/{id}",
          name: "admin_user_groups_view",
          action: "AppHttpControllersAdminUserGroupsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/delete/{id}",
          name: "admin_user_groups_delete",
          action: "AppHttpControllersAdminUserGroupsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/restore/{id}",
          name: "admin_user_groups_restore",
          action: "AppHttpControllersAdminUserGroupsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/forceDelete/{id}",
          name: "admin_user_groups_force_delete",
          action: "AppHttpControllersAdminUserGroupsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/status/{id}/{status}",
          name: "admin_user_groups_status",
          action: "AppHttpControllersAdminUserGroupsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/user_groups/export/{format}",
          name: "admin_user_groups_export",
          action: "AppHttpControllersAdminUserGroupsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails",
          name: "admin_emails_index",
          action: "AppHttpControllersAdminEmailsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/add",
          name: "admin_emails_add",
          action: "AppHttpControllersAdminEmailsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/edit/{id}",
          name: "admin_emails_edit",
          action: "AppHttpControllersAdminEmailsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/save/{id?}",
          name: "admin_emails_save",
          action: "AppHttpControllersAdminEmailsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/view/{id}",
          name: "admin_emails_view",
          action: "AppHttpControllersAdminEmailsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/delete/{id}",
          name: "admin_emails_delete",
          action: "AppHttpControllersAdminEmailsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/restore/{id}",
          name: "admin_emails_restore",
          action: "AppHttpControllersAdminEmailsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/forceDelete/{id}",
          name: "admin_emails_force_delete",
          action: "AppHttpControllersAdminEmailsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/status/{id}/{status}",
          name: "admin_emails_status",
          action: "AppHttpControllersAdminEmailsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/export/{format}",
          name: "admin_emails_export",
          action: "AppHttpControllersAdminEmailsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/preview/{id}",
          name: "admin_emails_preview",
          action: "AppHttpControllersAdminEmailsController@preview",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/emails/resend/{id}",
          name: "admin_emails_resend",
          action: "AppHttpControllersAdminEmailsController@resend",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items",
          name: "admin_menu_items_index",
          action: "AppHttpControllersAdminMenuItemsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/add",
          name: "admin_menu_items_add",
          action: "AppHttpControllersAdminMenuItemsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/edit/{id}",
          name: "admin_menu_items_edit",
          action: "AppHttpControllersAdminMenuItemsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/save/{id?}",
          name: "admin_menu_items_save",
          action: "AppHttpControllersAdminMenuItemsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/view/{id}",
          name: "admin_menu_items_view",
          action: "AppHttpControllersAdminMenuItemsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/delete/{id}",
          name: "admin_menu_items_delete",
          action: "AppHttpControllersAdminMenuItemsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/restore/{id}",
          name: "admin_menu_items_restore",
          action: "AppHttpControllersAdminMenuItemsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/forceDelete/{id}",
          name: "admin_menu_items_force_delete",
          action: "AppHttpControllersAdminMenuItemsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/status/{id}/{status}",
          name: "admin_menu_items_status",
          action: "AppHttpControllersAdminMenuItemsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/export/{format}",
          name: "admin_menu_items_export",
          action: "AppHttpControllersAdminMenuItemsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/menu_items/positions",
          name: "admin_menu_items_positions",
          action: "AppHttpControllersAdminMenuItemsController@positions",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages",
          name: "admin_pages_index",
          action: "AppHttpControllersAdminPagesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/add",
          name: "admin_pages_add",
          action: "AppHttpControllersAdminPagesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/edit/{id}",
          name: "admin_pages_edit",
          action: "AppHttpControllersAdminPagesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/save/{id?}",
          name: "admin_pages_save",
          action: "AppHttpControllersAdminPagesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/view/{id}",
          name: "admin_pages_view",
          action: "AppHttpControllersAdminPagesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/delete/{id}",
          name: "admin_pages_delete",
          action: "AppHttpControllersAdminPagesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/restore/{id}",
          name: "admin_pages_restore",
          action: "AppHttpControllersAdminPagesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/forceDelete/{id}",
          name: "admin_pages_force_delete",
          action: "AppHttpControllersAdminPagesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/status/{id}/{status}",
          name: "admin_pages_status",
          action: "AppHttpControllersAdminPagesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/export/{format}",
          name: "admin_pages_export",
          action: "AppHttpControllersAdminPagesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/pages/bulk",
          name: "admin_pages_bulk",
          action: "AppHttpControllersAdminPagesController@bulk",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories",
          name: "admin_categories_index",
          action: "AppHttpControllersAdminCategoriesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/add",
          name: "admin_categories_add",
          action: "AppHttpControllersAdminCategoriesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/edit/{id}",
          name: "admin_categories_edit",
          action: "AppHttpControllersAdminCategoriesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/save/{id?}",
          name: "admin_categories_save",
          action: "AppHttpControllersAdminCategoriesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/view/{id}",
          name: "admin_categories_view",
          action: "AppHttpControllersAdminCategoriesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/delete/{id}",
          name: "admin_categories_delete",
          action: "AppHttpControllersAdminCategoriesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/restore/{id}",
          name: "admin_categories_restore",
          action: "AppHttpControllersAdminCategoriesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/forceDelete/{id}",
          name: "admin_categories_force_delete",
          action: "AppHttpControllersAdminCategoriesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/status/{id}/{status}",
          name: "admin_categories_status",
          action: "AppHttpControllersAdminCategoriesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/categories/export/{format}",
          name: "admin_categories_export",
          action: "AppHttpControllersAdminCategoriesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags",
          name: "admin_tags_index",
          action: "AppHttpControllersAdminTagsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/add",
          name: "admin_tags_add",
          action: "AppHttpControllersAdminTagsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/edit/{id}",
          name: "admin_tags_edit",
          action: "AppHttpControllersAdminTagsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/save/{id?}",
          name: "admin_tags_save",
          action: "AppHttpControllersAdminTagsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/view/{id}",
          name: "admin_tags_view",
          action: "AppHttpControllersAdminTagsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/delete/{id}",
          name: "admin_tags_delete",
          action: "AppHttpControllersAdminTagsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/restore/{id}",
          name: "admin_tags_restore",
          action: "AppHttpControllersAdminTagsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/forceDelete/{id}",
          name: "admin_tags_force_delete",
          action: "AppHttpControllersAdminTagsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/status/{id}/{status}",
          name: "admin_tags_status",
          action: "AppHttpControllersAdminTagsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/tags/export/{format}",
          name: "admin_tags_export",
          action: "AppHttpControllersAdminTagsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores",
          name: "admin_stores_index",
          action: "AppHttpControllersAdminStoresController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/add",
          name: "admin_stores_add",
          action: "AppHttpControllersAdminStoresController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/edit/{id}",
          name: "admin_stores_edit",
          action: "AppHttpControllersAdminStoresController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/save/{id?}",
          name: "admin_stores_save",
          action: "AppHttpControllersAdminStoresController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/view/{id}",
          name: "admin_stores_view",
          action: "AppHttpControllersAdminStoresController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/delete/{id}",
          name: "admin_stores_delete",
          action: "AppHttpControllersAdminStoresController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/restore/{id}",
          name: "admin_stores_restore",
          action: "AppHttpControllersAdminStoresController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/forceDelete/{id}",
          name: "admin_stores_force_delete",
          action: "AppHttpControllersAdminStoresController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/status/{id}/{status}",
          name: "admin_stores_status",
          action: "AppHttpControllersAdminStoresController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/stores/export/{format}",
          name: "admin_stores_export",
          action: "AppHttpControllersAdminStoresController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products",
          name: "admin_products_index",
          action: "AppHttpControllersAdminProductsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/add",
          name: "admin_products_add",
          action: "AppHttpControllersAdminProductsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/edit/{id}",
          name: "admin_products_edit",
          action: "AppHttpControllersAdminProductsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/save/{id?}",
          name: "admin_products_save",
          action: "AppHttpControllersAdminProductsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/view/{id}",
          name: "admin_products_view",
          action: "AppHttpControllersAdminProductsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/delete/{id}",
          name: "admin_products_delete",
          action: "AppHttpControllersAdminProductsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/restore/{id}",
          name: "admin_products_restore",
          action: "AppHttpControllersAdminProductsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/forceDelete/{id}",
          name: "admin_products_force_delete",
          action: "AppHttpControllersAdminProductsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/status/{id}/{status}",
          name: "admin_products_status",
          action: "AppHttpControllersAdminProductsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/export/{format}",
          name: "admin_products_export",
          action: "AppHttpControllersAdminProductsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/configurable-products-chips",
          name: "admin_products_configurable_products_chips",
          action:
            "AppHttpControllersAdminProductsController@configurableProductsChips",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/product-chips",
          name: "admin_products_products_chips",
          action: "AppHttpControllersAdminProductsController@productsChips",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/bulk",
          name: "admin_products_bulk",
          action: "AppHttpControllersAdminProductsController@bulk",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/products/positions",
          name: "admin_products_positions",
          action: "AppHttpControllersAdminProductsController@positions",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "admin/categories_list",
          name: "admin_products_categories_list",
          action: "AppHttpControllersAdminProductsController@categoriesList",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads",
          name: "admin_downloads_index",
          action: "AppHttpControllersAdminDownloadsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/add",
          name: "admin_downloads_add",
          action: "AppHttpControllersAdminDownloadsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/edit/{id}",
          name: "admin_downloads_edit",
          action: "AppHttpControllersAdminDownloadsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/save/{id?}",
          name: "admin_downloads_save",
          action: "AppHttpControllersAdminDownloadsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/view/{id}",
          name: "admin_downloads_view",
          action: "AppHttpControllersAdminDownloadsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/delete/{id}",
          name: "admin_downloads_delete",
          action: "AppHttpControllersAdminDownloadsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/restore/{id}",
          name: "admin_downloads_restore",
          action: "AppHttpControllersAdminDownloadsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/forceDelete/{id}",
          name: "admin_downloads_force_delete",
          action: "AppHttpControllersAdminDownloadsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/status/{id}/{status}",
          name: "admin_downloads_status",
          action: "AppHttpControllersAdminDownloadsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/export/{format}",
          name: "admin_downloads_export",
          action: "AppHttpControllersAdminDownloadsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/downloads/configurable-chips",
          name: "admin_downloads_chips",
          action: "AppHttpControllersAdminDownloadsController@chips",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods",
          name: "admin_shipping_methods_index",
          action: "AppHttpControllersAdminShippingMethodsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/add",
          name: "admin_shipping_methods_add",
          action: "AppHttpControllersAdminShippingMethodsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/edit/{id}",
          name: "admin_shipping_methods_edit",
          action: "AppHttpControllersAdminShippingMethodsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/save/{id?}",
          name: "admin_shipping_methods_save",
          action: "AppHttpControllersAdminShippingMethodsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/view/{id}",
          name: "admin_shipping_methods_view",
          action: "AppHttpControllersAdminShippingMethodsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/delete/{id}",
          name: "admin_shipping_methods_delete",
          action: "AppHttpControllersAdminShippingMethodsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/restore/{id}",
          name: "admin_shipping_methods_restore",
          action: "AppHttpControllersAdminShippingMethodsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/forceDelete/{id}",
          name: "admin_shipping_methods_force_delete",
          action:
            "AppHttpControllersAdminShippingMethodsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/status/{id}/{status}",
          name: "admin_shipping_methods_status",
          action: "AppHttpControllersAdminShippingMethodsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_methods/export/{format}",
          name: "admin_shipping_methods_export",
          action: "AppHttpControllersAdminShippingMethodsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards",
          name: "admin_shipping_method_standards_index",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/add",
          name: "admin_shipping_method_standards_add",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/edit/{id}",
          name: "admin_shipping_method_standards_edit",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/save/{id?}",
          name: "admin_shipping_method_standards_save",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/view/{id}",
          name: "admin_shipping_method_standards_view",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/delete/{id}",
          name: "admin_shipping_method_standards_delete",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/restore/{id}",
          name: "admin_shipping_method_standards_restore",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/forceDelete/{id}",
          name: "admin_shipping_method_standards_force_delete",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/status/{id}/{status}",
          name: "admin_shipping_method_standards_status",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/export/{format}",
          name: "admin_shipping_method_standards_export",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/import/{filename}",
          name: "admin_shipping_method_standards_import",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@import",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_standards/upload",
          name: "admin_shipping_method_standards_upload",
          action:
            "AppHttpControllersAdminShippingMethodStandardsController@upload",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps",
          name: "admin_shipping_method_maps_index",
          action: "AppHttpControllersAdminShippingMethodMapsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/add",
          name: "admin_shipping_method_maps_add",
          action: "AppHttpControllersAdminShippingMethodMapsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/edit/{id}",
          name: "admin_shipping_method_maps_edit",
          action: "AppHttpControllersAdminShippingMethodMapsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/save/{id?}",
          name: "admin_shipping_method_maps_save",
          action: "AppHttpControllersAdminShippingMethodMapsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/view/{id}",
          name: "admin_shipping_method_maps_view",
          action: "AppHttpControllersAdminShippingMethodMapsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/delete/{id}",
          name: "admin_shipping_method_maps_delete",
          action: "AppHttpControllersAdminShippingMethodMapsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/restore/{id}",
          name: "admin_shipping_method_maps_restore",
          action: "AppHttpControllersAdminShippingMethodMapsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/forceDelete/{id}",
          name: "admin_shipping_method_maps_force_delete",
          action:
            "AppHttpControllersAdminShippingMethodMapsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/status/{id}/{status}",
          name: "admin_shipping_method_maps_status",
          action: "AppHttpControllersAdminShippingMethodMapsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/export/{format}",
          name: "admin_shipping_method_maps_export",
          action: "AppHttpControllersAdminShippingMethodMapsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/import/{filename}",
          name: "admin_shipping_method_maps_import",
          action: "AppHttpControllersAdminShippingMethodMapsController@import",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/upload",
          name: "admin_shipping_method_maps_upload",
          action: "AppHttpControllersAdminShippingMethodMapsController@upload",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/shipping_method_maps/area/{id?}",
          name: "admin_shipping_method_maps_area",
          action: "AppHttpControllersAdminShippingMethodMapsController@area",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods",
          name: "admin_payment_methods_index",
          action: "AppHttpControllersAdminPaymentMethodsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/add",
          name: "admin_payment_methods_add",
          action: "AppHttpControllersAdminPaymentMethodsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/edit/{id}",
          name: "admin_payment_methods_edit",
          action: "AppHttpControllersAdminPaymentMethodsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/save/{id?}",
          name: "admin_payment_methods_save",
          action: "AppHttpControllersAdminPaymentMethodsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/view/{id}",
          name: "admin_payment_methods_view",
          action: "AppHttpControllersAdminPaymentMethodsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/delete/{id}",
          name: "admin_payment_methods_delete",
          action: "AppHttpControllersAdminPaymentMethodsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/restore/{id}",
          name: "admin_payment_methods_restore",
          action: "AppHttpControllersAdminPaymentMethodsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/forceDelete/{id}",
          name: "admin_payment_methods_force_delete",
          action: "AppHttpControllersAdminPaymentMethodsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/status/{id}/{status}",
          name: "admin_payment_methods_status",
          action: "AppHttpControllersAdminPaymentMethodsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payment_methods/export/{format}",
          name: "admin_payment_methods_export",
          action: "AppHttpControllersAdminPaymentMethodsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts",
          name: "admin_carts_index",
          action: "AppHttpControllersAdminCartsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/add",
          name: "admin_carts_add",
          action: "AppHttpControllersAdminCartsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/edit/{id}",
          name: "admin_carts_edit",
          action: "AppHttpControllersAdminCartsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/save/{id?}",
          name: "admin_carts_save",
          action: "AppHttpControllersAdminCartsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/view/{id}",
          name: "admin_carts_view",
          action: "AppHttpControllersAdminCartsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/delete/{id}",
          name: "admin_carts_delete",
          action: "AppHttpControllersAdminCartsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/restore/{id}",
          name: "admin_carts_restore",
          action: "AppHttpControllersAdminCartsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/forceDelete/{id}",
          name: "admin_carts_force_delete",
          action: "AppHttpControllersAdminCartsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/status/{id}/{status}",
          name: "admin_carts_status",
          action: "AppHttpControllersAdminCartsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/carts/export/{format}",
          name: "admin_carts_export",
          action: "AppHttpControllersAdminCartsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders",
          name: "admin_orders_index",
          action: "AppHttpControllersAdminOrdersController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/add",
          name: "admin_orders_add",
          action: "AppHttpControllersAdminOrdersController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/edit/{id}",
          name: "admin_orders_edit",
          action: "AppHttpControllersAdminOrdersController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/save/{id?}",
          name: "admin_orders_save",
          action: "AppHttpControllersAdminOrdersController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/view/{id}",
          name: "admin_orders_view",
          action: "AppHttpControllersAdminOrdersController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/delete/{id}",
          name: "admin_orders_delete",
          action: "AppHttpControllersAdminOrdersController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/restore/{id}",
          name: "admin_orders_restore",
          action: "AppHttpControllersAdminOrdersController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/forceDelete/{id}",
          name: "admin_orders_force_delete",
          action: "AppHttpControllersAdminOrdersController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/status/{id}/{status}",
          name: "admin_orders_status",
          action: "AppHttpControllersAdminOrdersController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/export/{format}",
          name: "admin_orders_export",
          action: "AppHttpControllersAdminOrdersController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/update/{id}/order_status/{order_status_id}",
          name: "admin_orders_update",
          action: "AppHttpControllersAdminOrdersController@update",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/paid/{id}/{paid}",
          name: "admin_orders_paid",
          action: "AppHttpControllersAdminOrdersController@paid",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/message",
          name: "admin_orders_message",
          action: "AppHttpControllersAdminOrdersController@message",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/invoice",
          name: "admin_orders_invoice",
          action: "AppHttpControllersAdminOrdersController@invoice",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/orders/tracking",
          name: "admin_orders_tracking",
          action: "AppHttpControllersAdminOrdersController@tracking",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages",
          name: "admin_not_found_pages_index",
          action: "AppHttpControllersAdminNotFoundPagesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/add",
          name: "admin_not_found_pages_add",
          action: "AppHttpControllersAdminNotFoundPagesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/edit/{id}",
          name: "admin_not_found_pages_edit",
          action: "AppHttpControllersAdminNotFoundPagesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/save/{id?}",
          name: "admin_not_found_pages_save",
          action: "AppHttpControllersAdminNotFoundPagesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/view/{id}",
          name: "admin_not_found_pages_view",
          action: "AppHttpControllersAdminNotFoundPagesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/delete/{id}",
          name: "admin_not_found_pages_delete",
          action: "AppHttpControllersAdminNotFoundPagesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/restore/{id}",
          name: "admin_not_found_pages_restore",
          action: "AppHttpControllersAdminNotFoundPagesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/forceDelete/{id}",
          name: "admin_not_found_pages_force_delete",
          action: "AppHttpControllersAdminNotFoundPagesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/status/{id}/{status}",
          name: "admin_not_found_pages_status",
          action: "AppHttpControllersAdminNotFoundPagesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/not_found_pages/export/{format}",
          name: "admin_not_found_pages_export",
          action: "AppHttpControllersAdminNotFoundPagesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache",
          name: "admin_cache_index",
          action: "AppHttpControllersAdminCacheController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/add",
          name: "admin_cache_add",
          action: "AppHttpControllersAdminCacheController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/edit/{id}",
          name: "admin_cache_edit",
          action: "AppHttpControllersAdminCacheController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/save/{id?}",
          name: "admin_cache_save",
          action: "AppHttpControllersAdminCacheController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/view/{id}",
          name: "admin_cache_view",
          action: "AppHttpControllersAdminCacheController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/delete/{id}",
          name: "admin_cache_delete",
          action: "AppHttpControllersAdminCacheController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/restore/{id}",
          name: "admin_cache_restore",
          action: "AppHttpControllersAdminCacheController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/forceDelete/{id}",
          name: "admin_cache_force_delete",
          action: "AppHttpControllersAdminCacheController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/status/{id}/{status}",
          name: "admin_cache_status",
          action: "AppHttpControllersAdminCacheController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/export/{format}",
          name: "admin_cache_export",
          action: "AppHttpControllersAdminCacheController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cache/clear",
          name: "admin_cache_clear",
          action: "AppHttpControllersAdminCacheController@clear",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments",
          name: "admin_payments_index",
          action: "AppHttpControllersAdminPaymentsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/add",
          name: "admin_payments_add",
          action: "AppHttpControllersAdminPaymentsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/edit/{id}",
          name: "admin_payments_edit",
          action: "AppHttpControllersAdminPaymentsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/save/{id?}",
          name: "admin_payments_save",
          action: "AppHttpControllersAdminPaymentsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/view/{id}",
          name: "admin_payments_view",
          action: "AppHttpControllersAdminPaymentsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/delete/{id}",
          name: "admin_payments_delete",
          action: "AppHttpControllersAdminPaymentsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/restore/{id}",
          name: "admin_payments_restore",
          action: "AppHttpControllersAdminPaymentsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/forceDelete/{id}",
          name: "admin_payments_force_delete",
          action: "AppHttpControllersAdminPaymentsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/status/{id}/{status}",
          name: "admin_payments_status",
          action: "AppHttpControllersAdminPaymentsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/payments/export/{format}",
          name: "admin_payments_export",
          action: "AppHttpControllersAdminPaymentsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses",
          name: "admin_order_statuses_index",
          action: "AppHttpControllersAdminOrderStatusesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/add",
          name: "admin_order_statuses_add",
          action: "AppHttpControllersAdminOrderStatusesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/edit/{id}",
          name: "admin_order_statuses_edit",
          action: "AppHttpControllersAdminOrderStatusesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/save/{id?}",
          name: "admin_order_statuses_save",
          action: "AppHttpControllersAdminOrderStatusesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/view/{id}",
          name: "admin_order_statuses_view",
          action: "AppHttpControllersAdminOrderStatusesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/delete/{id}",
          name: "admin_order_statuses_delete",
          action: "AppHttpControllersAdminOrderStatusesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/restore/{id}",
          name: "admin_order_statuses_restore",
          action: "AppHttpControllersAdminOrderStatusesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/forceDelete/{id}",
          name: "admin_order_statuses_force_delete",
          action: "AppHttpControllersAdminOrderStatusesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/status/{id}/{status}",
          name: "admin_order_statuses_status",
          action: "AppHttpControllersAdminOrderStatusesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/order_statuses/export/{format}",
          name: "admin_order_statuses_export",
          action: "AppHttpControllersAdminOrderStatusesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses",
          name: "admin_warehouses_index",
          action: "AppHttpControllersAdminWarehousesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/add",
          name: "admin_warehouses_add",
          action: "AppHttpControllersAdminWarehousesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/edit/{id}",
          name: "admin_warehouses_edit",
          action: "AppHttpControllersAdminWarehousesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/save/{id?}",
          name: "admin_warehouses_save",
          action: "AppHttpControllersAdminWarehousesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/view/{id}",
          name: "admin_warehouses_view",
          action: "AppHttpControllersAdminWarehousesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/delete/{id}",
          name: "admin_warehouses_delete",
          action: "AppHttpControllersAdminWarehousesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/restore/{id}",
          name: "admin_warehouses_restore",
          action: "AppHttpControllersAdminWarehousesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/forceDelete/{id}",
          name: "admin_warehouses_force_delete",
          action: "AppHttpControllersAdminWarehousesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/status/{id}/{status}",
          name: "admin_warehouses_status",
          action: "AppHttpControllersAdminWarehousesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/warehouses/export/{format}",
          name: "admin_warehouses_export",
          action: "AppHttpControllersAdminWarehousesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts",
          name: "admin_discounts_index",
          action: "AppHttpControllersAdminDiscountsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/add",
          name: "admin_discounts_add",
          action: "AppHttpControllersAdminDiscountsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/edit/{id}",
          name: "admin_discounts_edit",
          action: "AppHttpControllersAdminDiscountsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/save/{id?}",
          name: "admin_discounts_save",
          action: "AppHttpControllersAdminDiscountsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/view/{id}",
          name: "admin_discounts_view",
          action: "AppHttpControllersAdminDiscountsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/delete/{id}",
          name: "admin_discounts_delete",
          action: "AppHttpControllersAdminDiscountsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/restore/{id}",
          name: "admin_discounts_restore",
          action: "AppHttpControllersAdminDiscountsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/forceDelete/{id}",
          name: "admin_discounts_force_delete",
          action: "AppHttpControllersAdminDiscountsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/status/{id}/{status}",
          name: "admin_discounts_status",
          action: "AppHttpControllersAdminDiscountsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/discounts/export/{format}",
          name: "admin_discounts_export",
          action: "AppHttpControllersAdminDiscountsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands",
          name: "admin_brands_index",
          action: "AppHttpControllersAdminBrandsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/add",
          name: "admin_brands_add",
          action: "AppHttpControllersAdminBrandsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/edit/{id}",
          name: "admin_brands_edit",
          action: "AppHttpControllersAdminBrandsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/save/{id?}",
          name: "admin_brands_save",
          action: "AppHttpControllersAdminBrandsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/view/{id}",
          name: "admin_brands_view",
          action: "AppHttpControllersAdminBrandsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/delete/{id}",
          name: "admin_brands_delete",
          action: "AppHttpControllersAdminBrandsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/restore/{id}",
          name: "admin_brands_restore",
          action: "AppHttpControllersAdminBrandsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/forceDelete/{id}",
          name: "admin_brands_force_delete",
          action: "AppHttpControllersAdminBrandsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/status/{id}/{status}",
          name: "admin_brands_status",
          action: "AppHttpControllersAdminBrandsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/export/{format}",
          name: "admin_brands_export",
          action: "AppHttpControllersAdminBrandsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/brands/configurable-chips",
          name: "admin_brands_chips",
          action: "AppHttpControllersAdminBrandsController@chips",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases",
          name: "admin_showcases_index",
          action: "AppHttpControllersAdminShowcasesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/add",
          name: "admin_showcases_add",
          action: "AppHttpControllersAdminShowcasesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/edit/{id}",
          name: "admin_showcases_edit",
          action: "AppHttpControllersAdminShowcasesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/save/{id?}",
          name: "admin_showcases_save",
          action: "AppHttpControllersAdminShowcasesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/view/{id}",
          name: "admin_showcases_view",
          action: "AppHttpControllersAdminShowcasesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/delete/{id}",
          name: "admin_showcases_delete",
          action: "AppHttpControllersAdminShowcasesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/restore/{id}",
          name: "admin_showcases_restore",
          action: "AppHttpControllersAdminShowcasesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/forceDelete/{id}",
          name: "admin_showcases_force_delete",
          action: "AppHttpControllersAdminShowcasesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/status/{id}/{status}",
          name: "admin_showcases_status",
          action: "AppHttpControllersAdminShowcasesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/export/{format}",
          name: "admin_showcases_export",
          action: "AppHttpControllersAdminShowcasesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/showcases/configurable-chips",
          name: "admin_showcases_chips",
          action: "AppHttpControllersAdminShowcasesController@chips",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews",
          name: "admin_reviews_index",
          action: "AppHttpControllersAdminReviewsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/add",
          name: "admin_reviews_add",
          action: "AppHttpControllersAdminReviewsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/edit/{id}",
          name: "admin_reviews_edit",
          action: "AppHttpControllersAdminReviewsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/save/{id?}",
          name: "admin_reviews_save",
          action: "AppHttpControllersAdminReviewsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/view/{id}",
          name: "admin_reviews_view",
          action: "AppHttpControllersAdminReviewsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/delete/{id}",
          name: "admin_reviews_delete",
          action: "AppHttpControllersAdminReviewsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/restore/{id}",
          name: "admin_reviews_restore",
          action: "AppHttpControllersAdminReviewsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/forceDelete/{id}",
          name: "admin_reviews_force_delete",
          action: "AppHttpControllersAdminReviewsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/status/{id}/{status}",
          name: "admin_reviews_status",
          action: "AppHttpControllersAdminReviewsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/reviews/export/{format}",
          name: "admin_reviews_export",
          action: "AppHttpControllersAdminReviewsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events",
          name: "admin_events_index",
          action: "AppHttpControllersAdminEventsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/add",
          name: "admin_events_add",
          action: "AppHttpControllersAdminEventsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/edit/{id}",
          name: "admin_events_edit",
          action: "AppHttpControllersAdminEventsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/save/{id?}",
          name: "admin_events_save",
          action: "AppHttpControllersAdminEventsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/view/{id}",
          name: "admin_events_view",
          action: "AppHttpControllersAdminEventsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/delete/{id}",
          name: "admin_events_delete",
          action: "AppHttpControllersAdminEventsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/restore/{id}",
          name: "admin_events_restore",
          action: "AppHttpControllersAdminEventsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/forceDelete/{id}",
          name: "admin_events_force_delete",
          action: "AppHttpControllersAdminEventsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/status/{id}/{status}",
          name: "admin_events_status",
          action: "AppHttpControllersAdminEventsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/events/export/{format}",
          name: "admin_events_export",
          action: "AppHttpControllersAdminEventsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts",
          name: "admin_posts_index",
          action: "AppHttpControllersAdminPostsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/add",
          name: "admin_posts_add",
          action: "AppHttpControllersAdminPostsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/edit/{id}",
          name: "admin_posts_edit",
          action: "AppHttpControllersAdminPostsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/save/{id?}",
          name: "admin_posts_save",
          action: "AppHttpControllersAdminPostsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/view/{id}",
          name: "admin_posts_view",
          action: "AppHttpControllersAdminPostsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/delete/{id}",
          name: "admin_posts_delete",
          action: "AppHttpControllersAdminPostsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/restore/{id}",
          name: "admin_posts_restore",
          action: "AppHttpControllersAdminPostsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/forceDelete/{id}",
          name: "admin_posts_force_delete",
          action: "AppHttpControllersAdminPostsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/status/{id}/{status}",
          name: "admin_posts_status",
          action: "AppHttpControllersAdminPostsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/posts/export/{format}",
          name: "admin_posts_export",
          action: "AppHttpControllersAdminPostsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories",
          name: "admin_post_categories_index",
          action: "AppHttpControllersAdminPostCategoriesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/add",
          name: "admin_post_categories_add",
          action: "AppHttpControllersAdminPostCategoriesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/edit/{id}",
          name: "admin_post_categories_edit",
          action: "AppHttpControllersAdminPostCategoriesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/save/{id?}",
          name: "admin_post_categories_save",
          action: "AppHttpControllersAdminPostCategoriesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/view/{id}",
          name: "admin_post_categories_view",
          action: "AppHttpControllersAdminPostCategoriesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/delete/{id}",
          name: "admin_post_categories_delete",
          action: "AppHttpControllersAdminPostCategoriesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/restore/{id}",
          name: "admin_post_categories_restore",
          action: "AppHttpControllersAdminPostCategoriesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/forceDelete/{id}",
          name: "admin_post_categories_force_delete",
          action: "AppHttpControllersAdminPostCategoriesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/status/{id}/{status}",
          name: "admin_post_categories_status",
          action: "AppHttpControllersAdminPostCategoriesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/post_categories/export/{format}",
          name: "admin_post_categories_export",
          action: "AppHttpControllersAdminPostCategoriesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places",
          name: "admin_places_index",
          action: "AppHttpControllersAdminPlacesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/add",
          name: "admin_places_add",
          action: "AppHttpControllersAdminPlacesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/edit/{id}",
          name: "admin_places_edit",
          action: "AppHttpControllersAdminPlacesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/save/{id?}",
          name: "admin_places_save",
          action: "AppHttpControllersAdminPlacesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/view/{id}",
          name: "admin_places_view",
          action: "AppHttpControllersAdminPlacesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/delete/{id}",
          name: "admin_places_delete",
          action: "AppHttpControllersAdminPlacesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/restore/{id}",
          name: "admin_places_restore",
          action: "AppHttpControllersAdminPlacesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/forceDelete/{id}",
          name: "admin_places_force_delete",
          action: "AppHttpControllersAdminPlacesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/status/{id}/{status}",
          name: "admin_places_status",
          action: "AppHttpControllersAdminPlacesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/export/{format}",
          name: "admin_places_export",
          action: "AppHttpControllersAdminPlacesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/places/positions",
          name: "admin_places_positions",
          action: "AppHttpControllersAdminPlacesController@positions",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "admin/provinces_list",
          name: "admin_places_provinces_list",
          action: "AppHttpControllersAdminPlacesController@provincesList",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "admin/regions_list",
          name: "admin_places_regions_list",
          action: "AppHttpControllersAdminPlacesController@regionsList",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "admin/states_list",
          name: "admin_places_states_list",
          action: "AppHttpControllersAdminPlacesController@statesList",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners",
          name: "admin_banners_index",
          action: "AppHttpControllersAdminBannersController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/add",
          name: "admin_banners_add",
          action: "AppHttpControllersAdminBannersController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/edit/{id}",
          name: "admin_banners_edit",
          action: "AppHttpControllersAdminBannersController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/save/{id?}",
          name: "admin_banners_save",
          action: "AppHttpControllersAdminBannersController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/view/{id}",
          name: "admin_banners_view",
          action: "AppHttpControllersAdminBannersController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/delete/{id}",
          name: "admin_banners_delete",
          action: "AppHttpControllersAdminBannersController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/restore/{id}",
          name: "admin_banners_restore",
          action: "AppHttpControllersAdminBannersController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/forceDelete/{id}",
          name: "admin_banners_force_delete",
          action: "AppHttpControllersAdminBannersController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/status/{id}/{status}",
          name: "admin_banners_status",
          action: "AppHttpControllersAdminBannersController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/banners/export/{format}",
          name: "admin_banners_export",
          action: "AppHttpControllersAdminBannersController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths",
          name: "admin_cloths_index",
          action: "AppHttpControllersAdminClothsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/add",
          name: "admin_cloths_add",
          action: "AppHttpControllersAdminClothsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/edit/{id}",
          name: "admin_cloths_edit",
          action: "AppHttpControllersAdminClothsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/save/{id?}",
          name: "admin_cloths_save",
          action: "AppHttpControllersAdminClothsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/view/{id}",
          name: "admin_cloths_view",
          action: "AppHttpControllersAdminClothsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/delete/{id}",
          name: "admin_cloths_delete",
          action: "AppHttpControllersAdminClothsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/restore/{id}",
          name: "admin_cloths_restore",
          action: "AppHttpControllersAdminClothsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/forceDelete/{id}",
          name: "admin_cloths_force_delete",
          action: "AppHttpControllersAdminClothsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/status/{id}/{status}",
          name: "admin_cloths_status",
          action: "AppHttpControllersAdminClothsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/cloths/export/{format}",
          name: "admin_cloths_export",
          action: "AppHttpControllersAdminClothsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles",
          name: "admin_handles_index",
          action: "AppHttpControllersAdminHandlesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/add",
          name: "admin_handles_add",
          action: "AppHttpControllersAdminHandlesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/edit/{id}",
          name: "admin_handles_edit",
          action: "AppHttpControllersAdminHandlesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/save/{id?}",
          name: "admin_handles_save",
          action: "AppHttpControllersAdminHandlesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/view/{id}",
          name: "admin_handles_view",
          action: "AppHttpControllersAdminHandlesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/delete/{id}",
          name: "admin_handles_delete",
          action: "AppHttpControllersAdminHandlesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/restore/{id}",
          name: "admin_handles_restore",
          action: "AppHttpControllersAdminHandlesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/forceDelete/{id}",
          name: "admin_handles_force_delete",
          action: "AppHttpControllersAdminHandlesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/status/{id}/{status}",
          name: "admin_handles_status",
          action: "AppHttpControllersAdminHandlesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/handles/export/{format}",
          name: "admin_handles_export",
          action: "AppHttpControllersAdminHandlesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes",
          name: "admin_finishes_index",
          action: "AppHttpControllersAdminFinishesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/add",
          name: "admin_finishes_add",
          action: "AppHttpControllersAdminFinishesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/edit/{id}",
          name: "admin_finishes_edit",
          action: "AppHttpControllersAdminFinishesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/save/{id?}",
          name: "admin_finishes_save",
          action: "AppHttpControllersAdminFinishesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/view/{id}",
          name: "admin_finishes_view",
          action: "AppHttpControllersAdminFinishesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/delete/{id}",
          name: "admin_finishes_delete",
          action: "AppHttpControllersAdminFinishesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/restore/{id}",
          name: "admin_finishes_restore",
          action: "AppHttpControllersAdminFinishesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/forceDelete/{id}",
          name: "admin_finishes_force_delete",
          action: "AppHttpControllersAdminFinishesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/status/{id}/{status}",
          name: "admin_finishes_status",
          action: "AppHttpControllersAdminFinishesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/finishes/export/{format}",
          name: "admin_finishes_export",
          action: "AppHttpControllersAdminFinishesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions",
          name: "admin_compositions_index",
          action: "AppHttpControllersAdminCompositionsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/add",
          name: "admin_compositions_add",
          action: "AppHttpControllersAdminCompositionsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/edit/{id}",
          name: "admin_compositions_edit",
          action: "AppHttpControllersAdminCompositionsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/save/{id?}",
          name: "admin_compositions_save",
          action: "AppHttpControllersAdminCompositionsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/view/{id}",
          name: "admin_compositions_view",
          action: "AppHttpControllersAdminCompositionsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/delete/{id}",
          name: "admin_compositions_delete",
          action: "AppHttpControllersAdminCompositionsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/restore/{id}",
          name: "admin_compositions_restore",
          action: "AppHttpControllersAdminCompositionsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/forceDelete/{id}",
          name: "admin_compositions_force_delete",
          action: "AppHttpControllersAdminCompositionsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/status/{id}/{status}",
          name: "admin_compositions_status",
          action: "AppHttpControllersAdminCompositionsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/export/{format}",
          name: "admin_compositions_export",
          action: "AppHttpControllersAdminCompositionsController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/compositions/positions",
          name: "admin_compositions_positions",
          action: "AppHttpControllersAdminCompositionsController@positions",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches",
          name: "admin_launches_index",
          action: "AppHttpControllersAdminLaunchesController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/add",
          name: "admin_launches_add",
          action: "AppHttpControllersAdminLaunchesController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/edit/{id}",
          name: "admin_launches_edit",
          action: "AppHttpControllersAdminLaunchesController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/save/{id?}",
          name: "admin_launches_save",
          action: "AppHttpControllersAdminLaunchesController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/view/{id}",
          name: "admin_launches_view",
          action: "AppHttpControllersAdminLaunchesController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/delete/{id}",
          name: "admin_launches_delete",
          action: "AppHttpControllersAdminLaunchesController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/restore/{id}",
          name: "admin_launches_restore",
          action: "AppHttpControllersAdminLaunchesController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/forceDelete/{id}",
          name: "admin_launches_force_delete",
          action: "AppHttpControllersAdminLaunchesController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/status/{id}/{status}",
          name: "admin_launches_status",
          action: "AppHttpControllersAdminLaunchesController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/launches/export/{format}",
          name: "admin_launches_export",
          action: "AppHttpControllersAdminLaunchesController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers",
          name: "admin_subscribers_index",
          action: "AppHttpControllersAdminSubscribersController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/add",
          name: "admin_subscribers_add",
          action: "AppHttpControllersAdminSubscribersController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/edit/{id}",
          name: "admin_subscribers_edit",
          action: "AppHttpControllersAdminSubscribersController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/save/{id?}",
          name: "admin_subscribers_save",
          action: "AppHttpControllersAdminSubscribersController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/view/{id}",
          name: "admin_subscribers_view",
          action: "AppHttpControllersAdminSubscribersController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/delete/{id}",
          name: "admin_subscribers_delete",
          action: "AppHttpControllersAdminSubscribersController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/restore/{id}",
          name: "admin_subscribers_restore",
          action: "AppHttpControllersAdminSubscribersController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/forceDelete/{id}",
          name: "admin_subscribers_force_delete",
          action: "AppHttpControllersAdminSubscribersController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/status/{id}/{status}",
          name: "admin_subscribers_status",
          action: "AppHttpControllersAdminSubscribersController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/export/{format}",
          name: "admin_subscribers_export",
          action: "AppHttpControllersAdminSubscribersController@export",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/stats/{format}",
          name: "admin_subscribers_stats",
          action: "AppHttpControllersAdminSubscribersController@stats",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/subscribers/download_stats/{period}",
          name: "admin_subscribers_download_stats",
          action: "AppHttpControllersAdminSubscribersController@downloadStats",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections",
          name: "admin_sections_index",
          action: "AppHttpControllersAdminSectionsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/add",
          name: "admin_sections_add",
          action: "AppHttpControllersAdminSectionsController@add",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/edit/{id}",
          name: "admin_sections_edit",
          action: "AppHttpControllersAdminSectionsController@edit",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/save/{id?}",
          name: "admin_sections_save",
          action: "AppHttpControllersAdminSectionsController@save",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/view/{id}",
          name: "admin_sections_view",
          action: "AppHttpControllersAdminSectionsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/delete/{id}",
          name: "admin_sections_delete",
          action: "AppHttpControllersAdminSectionsController@delete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/restore/{id}",
          name: "admin_sections_restore",
          action: "AppHttpControllersAdminSectionsController@restore",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/forceDelete/{id}",
          name: "admin_sections_force_delete",
          action: "AppHttpControllersAdminSectionsController@forceDelete",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/status/{id}/{status}",
          name: "admin_sections_status",
          action: "AppHttpControllersAdminSectionsController@status",
        },
        {
          host: null,
          methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
          uri: "admin/sections/export/{format}",
          name: "admin_sections_export",
          action: "AppHttpControllersAdminSectionsController@export",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "admin/redactor_images/upload",
          name: "admin_redactor_images_upload",
          action: "AppHttpControllersAdminRedactorImagesController@upload",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "admin/redactor_images/manager_json",
          name: "admin_redactor_images_manager_json",
          action:
            "AppHttpControllersAdminRedactorImagesController@manager_json",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "countries",
          name: null,
          action: "Closure",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "cache-clear",
          name: null,
          action: "Closure",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "update-store-locator-stats",
          name: null,
          action: "Closure",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "st",
          name: "store_track",
          action: "AppHttpControllersAppHomeController@storeTrack",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "email-contact-new-store",
          name: "home",
          action: "AppHttpControllersAppHomeController@mailTest",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "/",
          name: "home",
          action: "AppHttpControllersAppHomeController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "spaces",
          name: "spaces",
          action: "AppHttpControllersAppHomeController@spaces",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "finishes",
          name: "finishes",
          action: "AppHttpControllersAppHomeController@finishes",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "about",
          name: "about",
          action: "AppHttpControllersAppHomeController@about",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "downloads",
          name: "downloads",
          action: "AppHttpControllersAppHomeController@downloads",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "downloads-categories",
          name: "downloads_categories",
          action: "AppHttpControllersAppHomeController@downloadsGetCategories",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "downloads-results",
          name: "downloads_results",
          action: "AppHttpControllersAppHomeController@downloadsGetResults",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "press",
          name: "press",
          action: "AppHttpControllersAppHomeController@press",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "contacts",
          name: "contacts",
          action: "AppHttpControllersAppHomeController@contacts",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "contacts",
          name: "contacts_form",
          action: "AppHttpControllersAppHomeController@contactsForm",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "terms-of-sale",
          name: "terms_of_sale",
          action: "AppHttpControllersAppHomeController@termsOfSale",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "privacy-policy",
          name: "privacy",
          action: "AppHttpControllersAppHomeController@privacy",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "newsletter/iscriviti",
          name: "subscribe",
          action: "AppHttpControllersAppHomeController@subscribe",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "compositions/{type?}",
          name: "compositions_index",
          action: "AppHttpControllersAppCompositionsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "compositions/{type}/{slug}",
          name: "compositions_view",
          action: "AppHttpControllersAppCompositionsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "news",
          name: "posts_index",
          action: "AppHttpControllersAppPostsController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "news/{slug}",
          name: "posts_view",
          action: "AppHttpControllersAppPostsController@view",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "stores",
          name: "stores_index",
          action: "AppHttpControllersAppStoresController@index",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "stores/contacts",
          name: "stores_form",
          action: "AppHttpControllersAppStoresController@storeForm",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "stores/country",
          name: "stores_country",
          action: "AppHttpControllersAppStoresController@loadCountries",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "stores/reseller",
          name: "stores_reseller",
          action: "AppHttpControllersAppStoresController@loadReseller",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "search",
          name: "search",
          action: "AppHttpControllersAppSearchController@search",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "sitemap",
          name: null,
          action: "AppHttpControllersAppHomeController@sitemap",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "sitemap.xml",
          name: null,
          action: "AppHttpControllersAppHomeController@sitemap",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "test",
          name: null,
          action: "Closure",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "download/{id}",
          name: "download_id",
          action: "AppHttpControllersAppHomeController@downloadFile",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "showroom",
          name: "showroom",
          action: "AppHttpControllersAppHomeController@showroom",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard",
          name: "dashboard_index",
          action: "AppHttpControllersAppDashboardController@index",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/profile",
          name: "dashboard_profile",
          action: "AppHttpControllersAppDashboardController@profile",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "dashboard/profile/edit",
          name: "dashboard_profile_save",
          action: "AppHttpControllersAppDashboardController@profileSave",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/profile/password",
          name: "dashboard_profile_password",
          action: "AppHttpControllersAppDashboardController@profilePassword",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "dashboard/profile/password/edit",
          name: "dashboard_profile_password_save",
          action:
            "AppHttpControllersAppDashboardController@profilePasswordSave",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/profile/wishlist",
          name: "dashboard_profile_wishlist",
          action: "AppHttpControllersAppDashboardController@wishlist",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/profile/wishlist/share/{code}",
          name: "dashboard_profile_wishlist_post_share",
          action: "AppHttpControllersAppDashboardController@wishlistGetShare",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "dashboard/profile/wishlist/share/{code}",
          name: "dashboard_profile_wishlist_post_share",
          action: "AppHttpControllersAppDashboardController@wishlistPostShare",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/profile/wishlist/{code}",
          name: "dashboard_profile_wishlist_post",
          action: "AppHttpControllersAppDashboardController@wishlistPost",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/profile/delete",
          name: "dashboard_profile_delete",
          action: "AppHttpControllersAppDashboardController@deleteUser",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/addresses",
          name: "dashboard_addresses",
          action: "AppHttpControllersAppDashboardController@addresses",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/addresses/add",
          name: "dashboard_addresses_add",
          action: "AppHttpControllersAppDashboardController@addressesAdd",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/addresses/edit/{id}",
          name: "dashboard_addresses_edit",
          action: "AppHttpControllersAppDashboardController@addressesEdit",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/addresses/delete/{id}",
          name: "dashboard_addresses_delete",
          action: "AppHttpControllersAppDashboardController@addressesDelete",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "dashboard/addresses/save/{id?}",
          name: "dashboard_addresses_save",
          action: "AppHttpControllersAppDashboardController@addressesSave",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/orders",
          name: "dashboard_orders",
          action: "AppHttpControllersAppDashboardController@orders",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dashboard/orders/view/{id}",
          name: "dashboard_orders_view",
          action: "AppHttpControllersAppDashboardController@ordersView",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/login",
          name: "auth_login",
          action: "AppHttpControllersAuthAuthController@getLogin",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "auth/login/submit",
          name: "auth_login_post",
          action: "AppHttpControllersAuthAuthController@postLogin",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/logout",
          name: "auth_logout",
          action: "AppHttpControllersAuthAuthController@logout",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/register",
          name: "auth_register",
          action: "AppHttpControllersAuthAuthController@getRegister",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "auth/register/submit",
          name: "auth_register_post",
          action: "AppHttpControllersAuthAuthController@postRegister",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/register/verify/{confirmationCode?}",
          name: "auth_register_verify",
          action: "AppHttpControllersAuthAuthController@verify",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/register/congratulation",
          name: "auth_register_congratulation",
          action: "AppHttpControllersAuthAuthController@congratulation",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/social/email",
          name: "auth_social_email",
          action: "AppHttpControllersAuthAuthController@socialEmail",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "auth/social/email/submit",
          name: "auth_social_email_submit",
          action: "AppHttpControllersAuthAuthController@socialEmailSubmit",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/social/{provider?}",
          name: "auth_social",
          action:
            "AppHttpControllersAuthAuthController@socialRedirectToProvider",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/social/{provider?}/callback",
          name: "auth_social_callback",
          action:
            "AppHttpControllersAuthAuthController@socialHandleProviderCallback",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/password/email",
          name: "auth_password_email",
          action: "AppHttpControllersAuthPasswordController@showEmailForm",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "auth/password/email",
          name: "auth_password_email_submit",
          action: "AppHttpControllersAuthPasswordController@sendResetLinkEmail",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/password/email/sent",
          name: "auth_password_email_sent",
          action: "AppHttpControllersAuthPasswordController@resetSent",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "auth/password/reset/{token?}",
          name: "auth_password_reset",
          action: "AppHttpControllersAuthPasswordController@showResetForm",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "auth/password/reset",
          name: "auth_password_reset_submit",
          action: "AppHttpControllersAuthPasswordController@postReset",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "preferences/set/{key}/{value}",
          name: "preferences_set",
          action: "AppHttpControllersPreferencesController@set",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "preferences/get/{key?}",
          name: "preferences_get",
          action: "AppHttpControllersPreferencesController@get",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "catalog/product/{slug}",
          name: "shop_product",
          action: "AppHttpControllersAppShopController@product",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "catalog/{slug?}",
          name: "shop_catalog",
          action: "AppHttpControllersAppShopController@catalog",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "catalog/grid",
          name: "shop_catalog_grid",
          action: "AppHttpControllersAppShopController@catalogGrid",
        },
        {
          host: null,
          methods: ["POST"],
          uri: "save_wishlist",
          name: "save_wishlist",
          action: "AppHttpControllersAppShopController@saveWishlist",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "{slug?}",
          name: "catchall",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "wardrobes",
          name: "category_1",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "beds",
          name: "category_2",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "bookcases",
          name: "category_3",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "desks",
          name: "category_4",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "seating",
          name: "category_5",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "storage-units",
          name: "category_6",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "complements",
          name: "category_7",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "hinged-door",
          name: "category_8",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "sliding-door",
          name: "category_9",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "freestanding-wardrobes",
          name: "category_10",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "walk-in-closets",
          name: "category_11",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "bridging-units",
          name: "category_12",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "wardrobe-accessories",
          name: "category_13",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "single-beds",
          name: "category_14",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "equipped-and-raised-beds",
          name: "category_15",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "bunk-beds",
          name: "category_16",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "loft-beds",
          name: "category_17",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "sofa-beds",
          name: "category_18",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "convertible-beds",
          name: "category_19",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "freestanding-bookcases",
          name: "category_21",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "bookcases-2",
          name: "category_22",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "desks-2",
          name: "category_23",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "modular-desks",
          name: "category_24",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "desk-accessories",
          name: "category_25",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "seating-2",
          name: "category_26",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "ottomans-and-floor-cushions",
          name: "category_27",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "stools",
          name: "category_28",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "bedside-tables",
          name: "category_29",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "tallboys",
          name: "category_30",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "chests-of-drawers",
          name: "category_31",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "storage-units-on-wheels",
          name: "category_32",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "chests",
          name: "category_33",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "sideboards",
          name: "category_34",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "wall-units",
          name: "category_35",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "shelves-and-walls-units",
          name: "category_36",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "rugs",
          name: "category_37",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "wallpaper",
          name: "category_38",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "stickers",
          name: "category_39",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "mirrors",
          name: "category_40",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "clothes-hanger-knobs",
          name: "category_41",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "spider-system",
          name: "category_42",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "whiteboard",
          name: "category_43",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "leaning-ladders",
          name: "category_44",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "cushions-and-blankets",
          name: "category_45",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "categories",
          name: "category_46",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "wall-panelling",
          name: "category_49",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "benches",
          name: "category_50",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "collection-and-system",
          name: "category_51",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "dots-collection",
          name: "category_53",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "woody-collection",
          name: "category_55",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "loop-system-2",
          name: "category_56",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "regoli-system-2",
          name: "category_57",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "double-beds",
          name: "category_58",
          action: "AppHttpControllersCatchallController@catchall",
        },
        {
          host: null,
          methods: ["GET", "HEAD"],
          uri: "bed-accessories",
          name: "category_60",
          action: "AppHttpControllersCatchallController@catchall",
        },
      ],
      prefix: "",
      route: function (name, parameters, route) {
        route = route || this.getByName(name);
        if (!route) {
          return undefined;
        }
        return this.toRoute(route, parameters);
      },
      url: function (url, parameters) {
        parameters = parameters || [];
        var uri = url + "/" + parameters.join("/");
        return this.getCorrectUrl(uri);
      },
      toRoute: function (route, parameters) {
        var uri = this.replaceNamedParameters(route.uri, parameters);
        var qs = this.getRouteQueryString(parameters);
        if (this.absolute && this.isOtherHost(route)) {
          return "//" + route.host + "/" + uri + qs;
        }
        return this.getCorrectUrl(uri + qs);
      },
      isOtherHost: function (route) {
        return route.host && route.host != window.location.hostname;
      },
      replaceNamedParameters: function (uri, parameters) {
        uri = uri.replace(/\{(.*?)\??\}/g, function (match, key) {
          if (parameters.hasOwnProperty(key)) {
            var value = parameters[key];
            delete parameters[key];
            return value;
          } else {
            return match;
          }
        });
        uri = uri.replace(/\/\{.*?\?\}/g, "");
        return uri;
      },
      getRouteQueryString: function (parameters) {
        var qs = [];
        for (var key in parameters) {
          if (parameters.hasOwnProperty(key)) {
            qs.push(key + "=" + parameters[key]);
          }
        }
        if (qs.length < 1) {
          return "";
        }
        return "?" + qs.join("&");
      },
      getByName: function (name) {
        for (var key in this.routes) {
          if (
            this.routes.hasOwnProperty(key) &&
            this.routes[key].name === name
          ) {
            return this.routes[key];
          }
        }
      },
      getByAction: function (action) {
        for (var key in this.routes) {
          if (
            this.routes.hasOwnProperty(key) &&
            this.routes[key].action === action
          ) {
            return this.routes[key];
          }
        }
      },
      getCorrectUrl: function (uri) {
        var url = this.prefix + "/" + uri.replace(/^\/?/, "");
        if (!this.absolute) {
          return url;
        }
        return this.rootUrl.replace("//?$/", "") + url;
      },
    };
    var getLinkAttributes = function (attributes) {
      if (!attributes) {
        return "";
      }
      var attrs = [];
      for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          attrs.push(key + '="' + attributes[key] + '"');
        }
      }
      return attrs.join(" ");
    };
    var getHtmlLink = function (url, title, attributes) {
      title = title || url;
      attributes = getLinkAttributes(attributes);
      return '<a href="' + url + '" ' + attributes + ">" + title + "</a>";
    };
    return {
      action: function (name, parameters) {
        parameters = parameters || {};
        return routes.route(name, parameters, routes.getByAction(name));
      },
      route: function (route, parameters) {
        parameters = parameters || {};
        return routes.route(route, parameters);
      },
      url: function (route, parameters) {
        parameters = parameters || {};
        return routes.url(route, parameters);
      },
      link_to: function (url, title, attributes) {
        url = this.url(url);
        return getHtmlLink(url, title, attributes);
      },
      link_to_route: function (route, title, parameters, attributes) {
        var url = this.route(route, parameters);
        return getHtmlLink(url, title, attributes);
      },
      link_to_action: function (action, title, parameters, attributes) {
        var url = this.action(action, parameters);
        return getHtmlLink(url, title, attributes);
      },
    };
  }.call(this);
  if (typeof define === "function" && define.amd) {
    define(function () {
      return laroute;
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = laroute;
  } else {
    window.Router = laroute;
  }
}.call(this));
