! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Treeviz = n() : t.Treeviz = n()
}(window, (function() {
    return function(t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function(n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "/", e(e.s = 4)
    }([function(t, n, e) {
        "use strict";
        e.r(n);
        var r = "http://www.w3.org/1999/xhtml",
            i = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: r,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            o = function(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), i.hasOwnProperty(n) ? {
                    space: i[n],
                    local: t
                } : t
            };

        function u(t) {
            return function() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === r && n.documentElement.namespaceURI === r ? n.createElement(t) : n.createElementNS(e, t)
            }
        }

        function a(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        var c = function(t) {
            var n = o(t);
            return (n.local ? a : u)(n)
        };

        function s() {}
        var l = function(t) {
            return null == t ? s : function() {
                return this.querySelector(t)
            }
        };

        function h() {
            return []
        }
        var f = function(t) {
                return null == t ? h : function() {
                    return this.querySelectorAll(t)
                }
            },
            p = function(t) {
                return function() {
                    return this.matches(t)
                }
            },
            d = function(t) {
                return new Array(t.length)
            };

        function v(t, n) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
        }
        v.prototype = {
            constructor: v,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var y = "$";

        function m(t, n, e, r, i, o) {
            for (var u, a = 0, c = n.length, s = o.length; a < s; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new v(t, o[a]);
            for (; a < c; ++a)(u = n[a]) && (i[a] = u)
        }

        function g(t, n, e, r, i, o, u) {
            var a, c, s, l = {},
                h = n.length,
                f = o.length,
                p = new Array(h);
            for (a = 0; a < h; ++a)(c = n[a]) && (p[a] = s = y + u.call(c, c.__data__, a, n), s in l ? i[a] = c : l[s] = c);
            for (a = 0; a < f; ++a)(c = l[s = y + u.call(t, o[a], a, o)]) ? (r[a] = c, c.__data__ = o[a], l[s] = null) : e[a] = new v(t, o[a]);
            for (a = 0; a < h; ++a)(c = n[a]) && l[p[a]] === c && (i[a] = c)
        }

        function _(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }

        function w(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function x(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function b(t, n) {
            return function() {
                this.setAttribute(t, n)
            }
        }

        function M(t, n) {
            return function() {
                this.setAttributeNS(t.space, t.local, n)
            }
        }

        function z(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }

        function k(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }
        var A = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };

        function N(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }

        function E(t, n, e) {
            return function() {
                this.style.setProperty(t, n, e)
            }
        }

        function S(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }

        function O(t, n) {
            return t.style.getPropertyValue(n) || A(t).getComputedStyle(t, null).getPropertyValue(n)
        }

        function j(t) {
            return function() {
                delete this[t]
            }
        }

        function P(t, n) {
            return function() {
                this[t] = n
            }
        }

        function T(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }

        function L(t) {
            return t.trim().split(/^|\s+/)
        }

        function q(t) {
            return t.classList || new B(t)
        }

        function B(t) {
            this._node = t, this._names = L(t.getAttribute("class") || "")
        }

        function I(t, n) {
            for (var e = q(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
        }

        function C(t, n) {
            for (var e = q(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
        }

        function D(t) {
            return function() {
                I(this, t)
            }
        }

        function H(t) {
            return function() {
                C(this, t)
            }
        }

        function X(t, n) {
            return function() {
                (n.apply(this, arguments) ? I : C)(this, t)
            }
        }
        B.prototype = {
            add: function(t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };

        function R() {
            this.textContent = ""
        }

        function Y(t) {
            return function() {
                this.textContent = t
            }
        }

        function V(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        function W() {
            this.innerHTML = ""
        }

        function F(t) {
            return function() {
                this.innerHTML = t
            }
        }

        function U(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }

        function $() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function G() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function Z() {
            return null
        }

        function K() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function Q() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function J() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }
        var tt = {},
            nt = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || (tt = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function et(t, n, e) {
            return t = rt(t, n, e),
                function(n) {
                    var e = n.relatedTarget;
                    e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                }
        }

        function rt(t, n, e) {
            return function(r) {
                var i = nt;
                nt = r;
                try {
                    t.call(this, this.__data__, n, e)
                } finally {
                    nt = i
                }
            }
        }

        function it(t) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var n = "",
                    e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                    type: t,
                    name: n
                }
            }))
        }

        function ot(t) {
            return function() {
                var n = this.__on;
                if (n) {
                    for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++i ? n.length = i : delete this.__on
                }
            }
        }

        function ut(t, n, e) {
            var r = tt.hasOwnProperty(t.type) ? et : rt;
            return function(i, o, u) {
                var a, c = this.__on,
                    s = r(n, o, u);
                if (c)
                    for (var l = 0, h = c.length; l < h; ++l)
                        if ((a = c[l]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
                this.addEventListener(t.type, s, e), a = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: s,
                    capture: e
                }, c ? c.push(a) : this.__on = [a]
            }
        }

        function at(t, n, e, r) {
            var i = nt;
            t.sourceEvent = nt, nt = t;
            try {
                return n.apply(e, r)
            } finally {
                nt = i
            }
        }

        function ct(t, n, e) {
            var r = A(t),
                i = r.CustomEvent;
            "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
        }

        function st(t, n) {
            return function() {
                return ct(this, t, n)
            }
        }

        function lt(t, n) {
            return function() {
                return ct(this, t, n.apply(this, arguments))
            }
        }
        var ht = [null];

        function ft(t, n) {
            this._groups = t, this._parents = n
        }

        function pt() {
            return new ft([
                [document.documentElement]
            ], ht)
        }
        ft.prototype = pt.prototype = {
            constructor: ft,
            select: function(t) {
                "function" != typeof t && (t = l(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), h = 0; h < c; ++h)(o = a[h]) && (u = t.call(o, o.__data__, h, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[h] = u);
                return new ft(r, this._parents)
            },
            selectAll: function(t) {
                "function" != typeof t && (t = f(t));
                for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                    for (var u, a = n[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
                return new ft(r, i)
            },
            filter: function(t) {
                "function" != typeof t && (t = p(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
                return new ft(r, this._parents)
            },
            data: function(t, n) {
                if (!t) return d = new Array(this.size()), l = -1, this.each((function(t) {
                    d[++l] = t
                })), d;
                var e, r = n ? g : m,
                    i = this._parents,
                    o = this._groups;
                "function" != typeof t && (e = t, t = function() {
                    return e
                });
                for (var u = o.length, a = new Array(u), c = new Array(u), s = new Array(u), l = 0; l < u; ++l) {
                    var h = i[l],
                        f = o[l],
                        p = f.length,
                        d = t.call(h, h && h.__data__, l, i),
                        v = d.length,
                        y = c[l] = new Array(v),
                        _ = a[l] = new Array(v);
                    r(h, f, y, _, s[l] = new Array(p), d, n);
                    for (var w, x, b = 0, M = 0; b < v; ++b)
                        if (w = y[b]) {
                            for (b >= M && (M = b + 1); !(x = _[M]) && ++M < v;);
                            w._next = x || null
                        }
                }
                return (a = new ft(a, i))._enter = c, a._exit = s, a
            },
            enter: function() {
                return new ft(this._enter || this._groups.map(d), this._parents)
            },
            exit: function() {
                return new ft(this._exit || this._groups.map(d), this._parents)
            },
            join: function(t, n, e) {
                var r = this.enter(),
                    i = this,
                    o = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
            },
            merge: function(t) {
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, s = n[a], l = e[a], h = s.length, f = u[a] = new Array(h), p = 0; p < h; ++p)(c = s[p] || l[p]) && (f[p] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new ft(u, this._parents)
            },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
                return this
            },
            sort: function(t) {
                function n(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
                t || (t = _);
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), l = 0; l < c; ++l)(u = a[l]) && (s[l] = u);
                    s.sort(n)
                }
                return new ft(i, this._parents).order()
            },
            call: function() {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            },
            nodes: function() {
                var t = new Array(this.size()),
                    n = -1;
                return this.each((function() {
                    t[++n] = this
                })), t
            },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                        var u = r[i];
                        if (u) return u
                    }
                return null
            },
            size: function() {
                var t = 0;
                return this.each((function() {
                    ++t
                })), t
            },
            empty: function() {
                return !this.node()
            },
            each: function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                return this
            },
            attr: function(t, n) {
                var e = o(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                }
                return this.each((null == n ? e.local ? x : w : "function" == typeof n ? e.local ? k : z : e.local ? M : b)(e, n))
            },
            style: function(t, n, e) {
                return arguments.length > 1 ? this.each((null == n ? N : "function" == typeof n ? S : E)(t, n, null == e ? "" : e)) : O(this.node(), t)
            },
            property: function(t, n) {
                return arguments.length > 1 ? this.each((null == n ? j : "function" == typeof n ? T : P)(t, n)) : this.node()[t]
            },
            classed: function(t, n) {
                var e = L(t + "");
                if (arguments.length < 2) {
                    for (var r = q(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? X : n ? D : H)(e, n))
            },
            text: function(t) {
                return arguments.length ? this.each(null == t ? R : ("function" == typeof t ? V : Y)(t)) : this.node().textContent
            },
            html: function(t) {
                return arguments.length ? this.each(null == t ? W : ("function" == typeof t ? U : F)(t)) : this.node().innerHTML
            },
            raise: function() {
                return this.each($)
            },
            lower: function() {
                return this.each(G)
            },
            append: function(t) {
                var n = "function" == typeof t ? t : c(t);
                return this.select((function() {
                    return this.appendChild(n.apply(this, arguments))
                }))
            },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : c(t),
                    r = null == n ? Z : "function" == typeof n ? n : l(n);
                return this.select((function() {
                    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                }))
            },
            remove: function() {
                return this.each(K)
            },
            clone: function(t) {
                return this.select(t ? J : Q)
            },
            datum: function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: function(t, n, e) {
                var r, i, o = it(t + ""),
                    u = o.length;
                if (!(arguments.length < 2)) {
                    for (a = n ? ut : ot, null == e && (e = !1), r = 0; r < u; ++r) this.each(a(o[r], n, e));
                    return this
                }
                var a = this.node().__on;
                if (a)
                    for (var c, s = 0, l = a.length; s < l; ++s)
                        for (r = 0, c = a[s]; r < u; ++r)
                            if ((i = o[r]).type === c.type && i.name === c.name) return c.value
            },
            dispatch: function(t, n) {
                return this.each(("function" == typeof n ? lt : st)(t, n))
            }
        };
        var dt = pt,
            vt = function(t) {
                return "string" == typeof t ? new ft([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new ft([
                    [t]
                ], ht)
            },
            yt = function(t) {
                return vt(c(t).call(document.documentElement))
            },
            mt = 0;

        function gt() {
            return new _t
        }

        function _t() {
            this._ = "@" + (++mt).toString(36)
        }
        _t.prototype = gt.prototype = {
            constructor: _t,
            get: function(t) {
                for (var n = this._; !(n in t);)
                    if (!(t = t.parentNode)) return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var wt = function() {
                for (var t, n = nt; t = n.sourceEvent;) n = t;
                return n
            },
            xt = function(t, n) {
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                }
                var i = t.getBoundingClientRect();
                return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
            },
            bt = function(t) {
                var n = wt();
                return n.changedTouches && (n = n.changedTouches[0]), xt(t, n)
            },
            Mt = function(t) {
                return "string" == typeof t ? new ft([document.querySelectorAll(t)], [document.documentElement]) : new ft([null == t ? [] : t], ht)
            },
            zt = function(t, n, e) {
                arguments.length < 3 && (e = n, n = wt().changedTouches);
                for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
                    if ((r = n[i]).identifier === e) return xt(t, r);
                return null
            },
            kt = function(t, n) {
                null == n && (n = wt().touches);
                for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = xt(t, n[e]);
                return i
            };
        e.d(n, "create", (function() {
            return yt
        })), e.d(n, "creator", (function() {
            return c
        })), e.d(n, "local", (function() {
            return gt
        })), e.d(n, "matcher", (function() {
            return p
        })), e.d(n, "mouse", (function() {
            return bt
        })), e.d(n, "namespace", (function() {
            return o
        })), e.d(n, "namespaces", (function() {
            return i
        })), e.d(n, "clientPoint", (function() {
            return xt
        })), e.d(n, "select", (function() {
            return vt
        })), e.d(n, "selectAll", (function() {
            return Mt
        })), e.d(n, "selection", (function() {
            return dt
        })), e.d(n, "selector", (function() {
            return l
        })), e.d(n, "selectorAll", (function() {
            return f
        })), e.d(n, "style", (function() {
            return O
        })), e.d(n, "touch", (function() {
            return zt
        })), e.d(n, "touches", (function() {
            return kt
        })), e.d(n, "window", (function() {
            return A
        })), e.d(n, "event", (function() {
            return nt
        })), e.d(n, "customEvent", (function() {
            return at
        }))
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getAreaSize = function(t) {
            var n = document.querySelector("#" + t);
            if (null === n) throw new Error("Cannot find dom element with id:" + t);
            var e = n.clientWidth,
                r = n.clientHeight;
            if (0 === r || 0 === e) throw new Error("The tree can't be display because the svg height or width of the container is null");
            return {
                areaWidth: e,
                areaHeight: r
            }
        }, n.getFirstDisplayedAncestor = function(t, e, r) {
            try {
                var i = t.find((function(t) {
                        return t.id === r
                    })),
                    o = i.ancestors()[1].id;
                return e.some((function(t) {
                    return t.id === o
                })) ? i.ancestors()[1] : n.getFirstDisplayedAncestor(t, e, o)
            } catch (n) {
                return t.find((function(t) {
                    return t.id === r
                }))
            }
        }, n.setNodeLocation = function(t, n, e) {
            return e.isHorizontal ? "translate(" + n + "," + t + ")" : "translate(" + t + "," + n + ")"
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.generateLinkLayout = function(t, n, e) {
            var i = e.isHorizontal,
                o = e.nodeHeight,
                u = e.nodeWidth,
                a = e.linkShape;
            return "orthogonal" === a ? i ? "M " + t.y + " " + (t.x + o / 2) + "\n        L " + (t.y + n.y + u) / 2 + " " + (t.x + o / 2) + "\n        L  " + (t.y + n.y + u) / 2 + " " + (n.x + o / 2) + "\n          " + (n.y + u) + " " + (n.x + o / 2) : "M " + (t.x + u / 2) + " " + t.y + "\n        L " + (t.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n        L  " + (n.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n          " + (n.x + u / 2) + " " + (n.y + o) + " " : "curve" === a ? i ? "M " + t.y + " " + (t.x + o / 2) + "\n      L " + (t.y - (t.y - n.y - u) / 2 + 15) + " " + (t.x + o / 2) + "\n      Q" + (t.y - (t.y - n.y - u) / 2) + " " + (t.x + o / 2) + "\n       " + (t.y - (t.y - n.y - u) / 2) + " " + (t.x + o / 2 - r(t.x, n.x, 15)) + "\n      L " + (t.y - (t.y - n.y - u) / 2) + " " + (n.x + o / 2) + "\n      L " + (n.y + u) + " " + (n.x + o / 2) : "M " + (t.x + u / 2) + " " + t.y + "\n      L " + (t.x + u / 2) + " " + (t.y - (t.y - n.y - o) / 2 + 15) + "\n      Q" + (t.x + u / 2) + " " + (t.y - (t.y - n.y - o) / 2) + "\n      " + (t.x + u / 2 - r(t.x, n.x, 15)) + " " + (t.y - (t.y - n.y - o) / 2) + "\n      L " + (n.x + u / 2) + " " + (t.y - (t.y - n.y - o) / 2) + " \n      L " + (n.x + u / 2) + " " + (n.y + o) + " " : i ? "M " + t.y + " " + (t.x + o / 2) + "\n        C " + (t.y + n.y + u) / 2 + " " + (t.x + o / 2) + "\n          " + (t.y + n.y + u) / 2 + " " + (n.x + o / 2) + "\n          " + (n.y + u) + " " + (n.x + o / 2) : "M " + (t.x + u / 2) + " " + t.y + "\n        C " + (t.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n          " + (n.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n          " + (n.x + u / 2) + " " + (n.y + o) + " "
        };
        var r = function(t, n, e) {
            return t > n ? e : t < n ? -e : 0
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(14),
            i = e(0),
            o = e(13);
        n.default = {
            hierarchy: r.hierarchy,
            stratify: r.stratify,
            tree: r.tree,
            treemap: r.treemap,
            select: i.select,
            selectAll: i.selectAll,
            event: i.event,
            zoom: o.zoom
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var n, e = 1, r = arguments.length; e < r; e++)
                        for (var i in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    return t
                }).apply(this, arguments)
            },
            i = this && this.__spreadArrays || function() {
                for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
                var r = Array(t),
                    i = 0;
                for (n = 0; n < e; n++)
                    for (var o = arguments[n], u = 0, a = o.length; u < a; u++, i++) r[i] = o[u];
                return r
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e(5),
            u = e(6),
            a = e(7),
            c = e(8),
            s = e(9),
            l = e(10),
            h = e(11),
            f = e(12);
        n.create = function(t) {
            var n = r(r({}, {
                htmlId: "",
                idKey: "id",
                relationnalField: "father",
                hasFlatData: !0,
                nodeWidth: 160,
                nodeHeight: 100,
                mainAxisNodeSpacing: 300,
                renderNode: function() {
                    return "Node"
                },
                linkColor: function() {
                    return "#ffcc80"
                },
                linkWidth: function() {
                    return 10
                },
                linkShape: "quadraticBeziers",
                isHorizontal: !0,
                hasPanAndZoom: !1,
                duration: 600,
                onNodeClick: function() {},
                onNodeMouseEnter: function() {},
                onNodeMouseLeave: function() {},
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                secondaryAxisNodeSpacing: 1.25
            }), t);
            void 0 !== t.hasPanAndZoom && console.warn("[DEPRECATED] hasPanAndZoom is deprecated and will be removed in treeviz version 3. Use hasPan and hasZoom instead");
            var e = [],
                p = {
                    refresh: function(t, o) {
                        o && (n = r(r({}, n), o));
                        var p = f.generateNestedData(t, n),
                            v = f.generateBasicTreemap(n)(p);
                        ! function(t, r) {
                            var o = r.descendants(),
                                f = r.descendants().slice(1),
                                p = n.mainAxisNodeSpacing;
                            "auto" !== p && o.forEach((function(t) {
                                t.y = t.depth * n.nodeWidth * p
                            })), o.forEach((function(t) {
                                var n = e.find((function(n) {
                                    return n.id === t.id
                                }));
                                t.x0 = n ? n.x0 : t.x, t.y0 = n ? n.y0 : t.y
                            }));
                            var d = t.selectAll("g.node").data(o, (function(t) {
                                    return t[n.idKey]
                                })),
                                v = s.drawNodeEnter(d, n, o, e);
                            h.drawNodeUpdate(v, d, n), l.drawNodeExit(d, n, o, e);
                            var y = t.selectAll("path.link").data(f, (function(t) {
                                    return t.id
                                })),
                                m = u.drawLinkEnter(y, n, o, e);
                            c.drawLinkUpdate(m, y, n), a.drawLinkExit(y, n, o, e), e = i(o)
                        }(d, v)
                    },
                    clean: function(t) {
                        var r = t ? document.querySelector("#" + n.htmlId + " svg g") : document.querySelector("#" + n.htmlId);
                        if (r)
                            for (; r.firstChild;) r.removeChild(r.firstChild);
                        e = []
                    }
                },
                d = o.initiliazeSVG(n);
            return p
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var n = {};
                if (null != t)
                    for (var e in t) Object.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                return n.default = t, n
            },
            i = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(0)),
            u = i(e(3)),
            a = e(1);
        n.initiliazeSVG = function(t) {
            var n = t.htmlId,
                e = t.isHorizontal,
                r = t.hasPanAndZoom,
                i = t.hasPan,
                s = t.hasZoom,
                l = t.mainAxisNodeSpacing,
                h = t.nodeHeight,
                f = t.nodeWidth,
                p = t.marginBottom,
                d = t.marginLeft,
                v = t.marginRight,
                y = t.marginTop,
                m = v,
                g = p,
                _ = d,
                w = a.getAreaSize(t.htmlId),
                x = w.areaHeight,
                b = w.areaWidth,
                M = b - _ - m,
                z = x - y - g,
                k = o.select("#" + n).append("svg").attr("width", b).attr("height", x).call(u.default.zoom().on("zoom", (function() {
                    return S.attr("transform", o.event.transform)
                }))),
                A = c(r, i, s),
                N = A[0],
                E = A[1];
            N || k.on("mousedown.zoom", null).on("touchstart.zoom", null).on("touchmove.zoom", null).on("touchend.zoom", null), E || k.on("wheel.zoom", null).on("mousewheel.zoom", null).on("mousemove.zoom", null).on("DOMMouseScroll.zoom", null).on("dblclick.zoom", null);
            var S = k.append("g");
            return S.append("g").attr("transform", "auto" === l ? "translate(0,0)" : e ? "translate(" + _ + "," + (y + z / 2 - h / 2) + ")" : "translate(" + (_ + M / 2 - f / 2) + "," + y + ")")
        };
        var c = function(t, n, e) {
            var r = [!1, !1];
            return !0 !== t && !1 !== t || (r = [t, t]), !0 !== n && !1 !== n || (r[0] = n), !0 !== e && !1 !== e || (r[1] = e), r
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(1),
            i = e(2);
        n.drawLinkEnter = function(t, n, e, o) {
            return t.enter().insert("path", "g").attr("class", "link").attr("d", (function(t) {
                var u = r.getFirstDisplayedAncestor(e, o, t.id),
                    a = {
                        x: u.x0,
                        y: u.y0
                    };
                return i.generateLinkLayout(a, a, n)
            })).attr("fill", "none").attr("stroke-width", (function(t) {
                var e = t.data;
                return n.linkWidth(e)
            })).attr("stroke", (function(t) {
                var e = t.data;
                return n.linkColor(e)
            }))
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(1),
            i = e(2);
        n.drawLinkExit = function(t, n, e, o) {
            t.exit().transition().duration(n.duration).style("opacity", 0).attr("d", (function(t) {
                var u = r.getFirstDisplayedAncestor(o, e, t.id),
                    a = {
                        x: u.x0,
                        y: u.y0
                    };
                return i.generateLinkLayout(a, a, n)
            })).remove()
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(2);
        n.drawLinkUpdate = function(t, n, e) {
            t.merge(n).transition().duration(e.duration).attr("d", (function(t) {
                return r.generateLinkLayout(t, t.parent, e)
            }))
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(1);
        n.drawNodeEnter = function(t, n, e, i) {
            var o = t.enter().append("g").attr("class", "node").attr("transform", (function(t) {
                var o = r.getFirstDisplayedAncestor(e, i, t.id);
                return r.setNodeLocation(o.x0, o.y0, n)
            }));
            return o.append("foreignObject").attr("width", n.nodeWidth).attr("height", n.nodeHeight), o
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(1);
        n.drawNodeExit = function(t, n, e, i) {
            var o = t.exit().transition().duration(n.duration).style("opacity", 0).attr("transform", (function(t) {
                var o = r.getFirstDisplayedAncestor(i, e, t.id);
                return r.setNodeLocation(o.x0, o.y0, n)
            })).remove();
            o.select("rect").style("fill-opacity", 1e-6), o.select("circle").attr("r", 1e-6), o.select("text").style("fill-opacity", 1e-6)
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var n, e = 1, r = arguments.length; e < r; e++)
                    for (var i in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawNodeUpdate = function(t, n, e) {
            var i = t.merge(n);
            i.transition().duration(e.duration).attr("transform", (function(t) {
                return e.isHorizontal ? "translate(" + t.y + "," + t.x + ")" : "translate(" + t.x + "," + t.y + ")"
            })), i.select("foreignObject").attr("width", e.nodeWidth).attr("height", e.nodeHeight).style("overflow", "visible").on("click", e.onNodeClick).on("mouseenter", e.onNodeMouseEnter).on("mouseleave", e.onNodeMouseLeave).html((function(t) {
                return e.renderNode(r(r({}, t), {
                    settings: e
                }))
            }))
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = r(e(3)),
            o = e(1);
        n.generateNestedData = function(t, n) {
            var e = n.idKey,
                r = n.relationnalField;
            return n.hasFlatData ? i.default.stratify().id((function(t) {
                return t[e]
            })).parentId((function(t) {
                return t[r]
            }))(t) : i.default.hierarchy(t, (function(t) {
                return t[r]
            }))
        }, n.generateBasicTreemap = function(t) {
            var n = o.getAreaSize(t.htmlId),
                e = n.areaHeight,
                r = n.areaWidth;
            return "auto" === t.mainAxisNodeSpacing && t.isHorizontal ? i.default.tree().size([e - t.nodeHeight, r - t.nodeWidth]) : "auto" !== t.mainAxisNodeSpacing || t.isHorizontal ? !0 === t.isHorizontal ? i.default.tree().nodeSize([t.nodeHeight * t.secondaryAxisNodeSpacing, t.nodeWidth]) : i.default.tree().nodeSize([t.nodeWidth * t.secondaryAxisNodeSpacing, t.nodeHeight]) : i.default.tree().size([r - t.nodeWidth, e - t.nodeHeight])
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var r = {
            value: function() {}
        };

        function i() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new o(r)
        }

        function o(t) {
            this._ = t
        }

        function u(t, n) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var e = "",
                    r = t.indexOf(".");
                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                }
            }))
        }

        function a(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n) return e.value
        }

        function c(t, n, e) {
            for (var i = 0, o = t.length; i < o; ++i)
                if (t[i].name === n) {
                    t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
                    break
                }
            return null != e && t.push({
                name: n,
                value: e
            }), t
        }
        o.prototype = i.prototype = {
            constructor: o,
            on: function(t, n) {
                var e, r = this._,
                    i = u(t + "", r),
                    o = -1,
                    s = i.length;
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < s;)
                        if (e = (t = i[o]).type) r[e] = c(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = c(r[e], t.name, null);
                    return this
                }
                for (; ++o < s;)
                    if ((e = (t = i[o]).type) && (e = a(r[e], t.name))) return e
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var e in n) t[e] = n[e].slice();
                return new o(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
            }
        };
        var s = i,
            l = e(0);
        var h = function() {
                l.event.preventDefault(), l.event.stopImmediatePropagation()
            },
            f = function(t) {
                var n = t.document.documentElement,
                    e = Object(l.select)(t).on("dragstart.drag", h, !0);
                "onselectstart" in n ? e.on("selectstart.drag", h, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            };

        function p(t, n) {
            var e = t.document.documentElement,
                r = Object(l.select)(t).on("dragstart.drag", null);
            n && (r.on("click.drag", h, !0), setTimeout((function() {
                r.on("click.drag", null)
            }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
        }

        function d(t, n, e, r, i, o, u, a, c, s) {
            this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
        }
        d.prototype.on = function() {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        };
        var v = function(t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        };

        function y(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n) e[r] = n[r];
            return e
        }

        function m() {}
        var g = "\\s*([+-]?\\d+)\\s*",
            _ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            w = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            x = /^#([0-9a-f]{3})$/,
            b = /^#([0-9a-f]{6})$/,
            M = new RegExp("^rgb\\(" + [g, g, g] + "\\)$"),
            z = new RegExp("^rgb\\(" + [w, w, w] + "\\)$"),
            k = new RegExp("^rgba\\(" + [g, g, g, _] + "\\)$"),
            A = new RegExp("^rgba\\(" + [w, w, w, _] + "\\)$"),
            N = new RegExp("^hsl\\(" + [_, w, w] + "\\)$"),
            E = new RegExp("^hsla\\(" + [_, w, w, _] + "\\)$"),
            S = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function O(t) {
            var n;
            return t = (t + "").trim().toLowerCase(), (n = x.exec(t)) ? new q((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = b.exec(t)) ? j(parseInt(n[1], 16)) : (n = M.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = z.exec(t)) ? new q(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = k.exec(t)) ? P(n[1], n[2], n[3], n[4]) : (n = A.exec(t)) ? P(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = N.exec(t)) ? I(n[1], n[2] / 100, n[3] / 100, 1) : (n = E.exec(t)) ? I(n[1], n[2] / 100, n[3] / 100, n[4]) : S.hasOwnProperty(t) ? j(S[t]) : "transparent" === t ? new q(NaN, NaN, NaN, 0) : null
        }

        function j(t) {
            return new q(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function P(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN), new q(t, n, e, r)
        }

        function T(t) {
            return t instanceof m || (t = O(t)), t ? new q((t = t.rgb()).r, t.g, t.b, t.opacity) : new q
        }

        function L(t, n, e, r) {
            return 1 === arguments.length ? T(t) : new q(t, n, e, null == r ? 1 : r)
        }

        function q(t, n, e, r) {
            this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
        }

        function B(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function I(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new D(t, n, e, r)
        }

        function C(t, n, e, r) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof D) return new D(t.h, t.s, t.l, t.opacity);
                if (t instanceof m || (t = O(t)), !t) return new D;
                if (t instanceof D) return t;
                var n = (t = t.rgb()).r / 255,
                    e = t.g / 255,
                    r = t.b / 255,
                    i = Math.min(n, e, r),
                    o = Math.max(n, e, r),
                    u = NaN,
                    a = o - i,
                    c = (o + i) / 2;
                return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new D(u, a, c, t.opacity)
            }(t) : new D(t, n, e, null == r ? 1 : r)
        }

        function D(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        function H(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }
        v(m, O, {
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: function() {
                return this.rgb().hex()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }), v(q, L, y(m, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new q(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new q(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: function() {
                return "#" + B(this.r) + B(this.g) + B(this.b)
            },
            toString: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), v(D, C, y(m, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new D(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new D(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n,
                    i = 2 * e - r;
                return new q(H(t >= 240 ? t - 240 : t + 120, i, r), H(t, i, r), H(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var X = Math.PI / 180,
            R = 180 / Math.PI,
            Y = .96422,
            V = 1,
            W = .82521,
            F = 4 / 29,
            U = 6 / 29,
            $ = 3 * U * U,
            G = U * U * U;

        function Z(t) {
            if (t instanceof Q) return new Q(t.l, t.a, t.b, t.opacity);
            if (t instanceof ot) {
                if (isNaN(t.h)) return new Q(t.l, 0, 0, t.opacity);
                var n = t.h * X;
                return new Q(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }
            t instanceof q || (t = T(t));
            var e, r, i = et(t.r),
                o = et(t.g),
                u = et(t.b),
                a = J((.2225045 * i + .7168786 * o + .0606169 * u) / V);
            return i === o && o === u ? e = r = a : (e = J((.4360747 * i + .3850649 * o + .1430804 * u) / Y), r = J((.0139322 * i + .0971045 * o + .7141733 * u) / W)), new Q(116 * a - 16, 500 * (e - a), 200 * (a - r), t.opacity)
        }

        function K(t, n, e, r) {
            return 1 === arguments.length ? Z(t) : new Q(t, n, e, null == r ? 1 : r)
        }

        function Q(t, n, e, r) {
            this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
        }

        function J(t) {
            return t > G ? Math.pow(t, 1 / 3) : t / $ + F
        }

        function tt(t) {
            return t > U ? t * t * t : $ * (t - F)
        }

        function nt(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function et(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function rt(t) {
            if (t instanceof ot) return new ot(t.h, t.c, t.l, t.opacity);
            if (t instanceof Q || (t = Z(t)), 0 === t.a && 0 === t.b) return new ot(NaN, 0, t.l, t.opacity);
            var n = Math.atan2(t.b, t.a) * R;
            return new ot(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function it(t, n, e, r) {
            return 1 === arguments.length ? rt(t) : new ot(t, n, e, null == r ? 1 : r)
        }

        function ot(t, n, e, r) {
            this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
        }
        v(Q, K, y(m, {
            brighter: function(t) {
                return new Q(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function(t) {
                return new Q(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return new q(nt(3.1338561 * (n = Y * tt(n)) - 1.6168667 * (t = V * tt(t)) - .4906146 * (e = W * tt(e))), nt(-.9787684 * n + 1.9161415 * t + .033454 * e), nt(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
            }
        })), v(ot, it, y(m, {
            brighter: function(t) {
                return new ot(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            },
            darker: function(t) {
                return new ot(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            },
            rgb: function() {
                return Z(this).rgb()
            }
        }));
        var ut = -.14861,
            at = 1.78277,
            ct = -.29227,
            st = -.90649,
            lt = 1.97294,
            ht = lt * st,
            ft = lt * at,
            pt = at * ct - st * ut;

        function dt(t, n, e, r) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof vt) return new vt(t.h, t.s, t.l, t.opacity);
                t instanceof q || (t = T(t));
                var n = t.r / 255,
                    e = t.g / 255,
                    r = t.b / 255,
                    i = (pt * r + ht * n - ft * e) / (pt + ht - ft),
                    o = r - i,
                    u = (lt * (e - i) - ct * o) / st,
                    a = Math.sqrt(u * u + o * o) / (lt * i * (1 - i)),
                    c = a ? Math.atan2(u, o) * R - 120 : NaN;
                return new vt(c < 0 ? c + 360 : c, a, i, t.opacity)
            }(t) : new vt(t, n, e, null == r ? 1 : r)
        }

        function vt(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        function yt(t, n, e, r, i) {
            var o = t * t,
                u = o * t;
            return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
        }
        v(vt, dt, y(m, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new vt(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new vt(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * X,
                    n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    r = Math.cos(t),
                    i = Math.sin(t);
                return new q(255 * (n + e * (ut * r + at * i)), 255 * (n + e * (ct * r + st * i)), 255 * (n + e * (lt * r)), this.opacity)
            }
        }));
        var mt = function(t) {
            return function() {
                return t
            }
        };

        function gt(t, n) {
            return function(e) {
                return t + e * n
            }
        }

        function _t(t, n) {
            var e = n - t;
            return e ? gt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : mt(isNaN(t) ? n : t)
        }

        function wt(t) {
            return 1 == (t = +t) ? xt : function(n, e) {
                return e - n ? function(t, n, e) {
                    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function(r) {
                            return Math.pow(t + r * n, e)
                        }
                }(n, e, t) : mt(isNaN(n) ? e : n)
            }
        }

        function xt(t, n) {
            var e = n - t;
            return e ? gt(t, e) : mt(isNaN(t) ? n : t)
        }
        var bt = function t(n) {
            var e = wt(n);

            function r(t, n) {
                var r = e((t = L(t)).r, (n = L(n)).r),
                    i = e(t.g, n.g),
                    o = e(t.b, n.b),
                    u = xt(t.opacity, n.opacity);
                return function(n) {
                    return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
                }
            }
            return r.gamma = t, r
        }(1);

        function Mt(t) {
            return function(n) {
                var e, r, i = n.length,
                    o = new Array(i),
                    u = new Array(i),
                    a = new Array(i);
                for (e = 0; e < i; ++e) r = L(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
                return o = t(o), u = t(u), a = t(a), r.opacity = 1,
                    function(t) {
                        return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
                    }
            }
        }
        Mt((function(t) {
            var n = t.length - 1;
            return function(e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                    i = t[r],
                    o = t[r + 1],
                    u = r > 0 ? t[r - 1] : 2 * i - o,
                    a = r < n - 1 ? t[r + 2] : 2 * o - i;
                return yt((e - r / n) * n, u, i, o, a)
            }
        })), Mt((function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                    i = t[(r + n - 1) % n],
                    o = t[r % n],
                    u = t[(r + 1) % n],
                    a = t[(r + 2) % n];
                return yt((e - r / n) * n, i, o, u, a)
            }
        }));
        var zt = function(t, n) {
                return n -= t = +t,
                    function(e) {
                        return t + n * e
                    }
            },
            kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            At = new RegExp(kt.source, "g");
        var Nt, Et, St, Ot, jt = function(t, n) {
                var e, r, i, o = kt.lastIndex = At.lastIndex = 0,
                    u = -1,
                    a = [],
                    c = [];
                for (t += "", n += "";
                    (e = kt.exec(t)) && (r = At.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                    i: u,
                    x: zt(e, r)
                })), o = At.lastIndex;
                return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? function(t) {
                    return function(n) {
                        return t(n) + ""
                    }
                }(c[0].x) : function(t) {
                    return function() {
                        return t
                    }
                }(n) : (n = c.length, function(t) {
                    for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                    return a.join("")
                })
            },
            Pt = 180 / Math.PI,
            Tt = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            Lt = function(t, n, e, r, i, o) {
                var u, a, c;
                return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(n, t) * Pt,
                    skewX: Math.atan(c) * Pt,
                    scaleX: u,
                    scaleY: a
                }
            };

        function qt(t, n, e, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(o, u) {
                var a = [],
                    c = [];
                return o = t(o), u = t(u),
                    function(t, r, i, o, u, a) {
                        if (t !== i || r !== o) {
                            var c = u.push("translate(", null, n, null, e);
                            a.push({
                                i: c - 4,
                                x: zt(t, i)
                            }, {
                                i: c - 2,
                                x: zt(r, o)
                            })
                        } else(i || o) && u.push("translate(" + i + n + o + e)
                    }(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
                    function(t, n, e, o) {
                        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                            i: e.push(i(e) + "rotate(", null, r) - 2,
                            x: zt(t, n)
                        })) : n && e.push(i(e) + "rotate(" + n + r)
                    }(o.rotate, u.rotate, a, c),
                    function(t, n, e, o) {
                        t !== n ? o.push({
                            i: e.push(i(e) + "skewX(", null, r) - 2,
                            x: zt(t, n)
                        }) : n && e.push(i(e) + "skewX(" + n + r)
                    }(o.skewX, u.skewX, a, c),
                    function(t, n, e, r, o, u) {
                        if (t !== e || n !== r) {
                            var a = o.push(i(o) + "scale(", null, ",", null, ")");
                            u.push({
                                i: a - 4,
                                x: zt(t, e)
                            }, {
                                i: a - 2,
                                x: zt(n, r)
                            })
                        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                    }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c), o = u = null,
                    function(t) {
                        for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
                        return a.join("")
                    }
            }
        }
        var Bt = qt((function(t) {
                return "none" === t ? Tt : (Nt || (Nt = document.createElement("DIV"), Et = document.documentElement, St = document.defaultView), Nt.style.transform = t, t = St.getComputedStyle(Et.appendChild(Nt), null).getPropertyValue("transform"), Et.removeChild(Nt), t = t.slice(7, -1).split(","), Lt(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }), "px, ", "px)", "deg)"),
            It = qt((function(t) {
                return null == t ? Tt : (Ot || (Ot = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ot.setAttribute("transform", t), (t = Ot.transform.baseVal.consolidate()) ? (t = t.matrix, Lt(t.a, t.b, t.c, t.d, t.e, t.f)) : Tt)
            }), ", ", ")", ")"),
            Ct = Math.SQRT2;

        function Dt(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var Ht = function(t, n) {
            var e, r, i = t[0],
                o = t[1],
                u = t[2],
                a = n[0],
                c = n[1],
                s = n[2],
                l = a - i,
                h = c - o,
                f = l * l + h * h;
            if (f < 1e-12) r = Math.log(s / u) / Ct, e = function(t) {
                return [i + t * l, o + t * h, u * Math.exp(Ct * t * r)]
            };
            else {
                var p = Math.sqrt(f),
                    d = (s * s - u * u + 4 * f) / (2 * u * 2 * p),
                    v = (s * s - u * u - 4 * f) / (2 * s * 2 * p),
                    y = Math.log(Math.sqrt(d * d + 1) - d),
                    m = Math.log(Math.sqrt(v * v + 1) - v);
                r = (m - y) / Ct, e = function(t) {
                    var n, e = t * r,
                        a = Dt(y),
                        c = u / (2 * p) * (a * (n = Ct * e + y, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function(t) {
                            return ((t = Math.exp(t)) - 1 / t) / 2
                        }(y));
                    return [i + c * l, o + c * h, u * a / Dt(Ct * e + y)]
                }
            }
            return e.duration = 1e3 * r, e
        };

        function Xt(t) {
            return function(n, e) {
                var r = t((n = C(n)).h, (e = C(e)).h),
                    i = xt(n.s, e.s),
                    o = xt(n.l, e.l),
                    u = xt(n.opacity, e.opacity);
                return function(t) {
                    return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
                }
            }
        }
        Xt(_t), Xt(xt);

        function Rt(t) {
            return function(n, e) {
                var r = t((n = it(n)).h, (e = it(e)).h),
                    i = xt(n.c, e.c),
                    o = xt(n.l, e.l),
                    u = xt(n.opacity, e.opacity);
                return function(t) {
                    return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
                }
            }
        }
        Rt(_t), Rt(xt);

        function Yt(t) {
            return function n(e) {
                function r(n, r) {
                    var i = t((n = dt(n)).h, (r = dt(r)).h),
                        o = xt(n.s, r.s),
                        u = xt(n.l, r.l),
                        a = xt(n.opacity, r.opacity);
                    return function(t) {
                        return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
                    }
                }
                return e = +e, r.gamma = n, r
            }(1)
        }
        Yt(_t), Yt(xt);
        var Vt, Wt, Ft = 0,
            Ut = 0,
            $t = 0,
            Gt = 1e3,
            Zt = 0,
            Kt = 0,
            Qt = 0,
            Jt = "object" == typeof performance && performance.now ? performance : Date,
            tn = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
            };

        function nn() {
            return Kt || (tn(en), Kt = Jt.now() + Qt)
        }

        function en() {
            Kt = 0
        }

        function rn() {
            this._call = this._time = this._next = null
        }

        function on(t, n, e) {
            var r = new rn;
            return r.restart(t, n, e), r
        }

        function un() {
            Kt = (Zt = Jt.now()) + Qt, Ft = Ut = 0;
            try {
                ! function() {
                    nn(), ++Ft;
                    for (var t, n = Vt; n;)(t = Kt - n._time) >= 0 && n._call.call(null, t), n = n._next;
                    --Ft
                }()
            } finally {
                Ft = 0,
                    function() {
                        var t, n, e = Vt,
                            r = 1 / 0;
                        for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Vt = n);
                        Wt = t, cn(r)
                    }(), Kt = 0
            }
        }

        function an() {
            var t = Jt.now(),
                n = t - Zt;
            n > Gt && (Qt -= n, Zt = t)
        }

        function cn(t) {
            Ft || (Ut && (Ut = clearTimeout(Ut)), t - Kt > 24 ? (t < 1 / 0 && (Ut = setTimeout(un, t - Jt.now() - Qt)), $t && ($t = clearInterval($t))) : ($t || (Zt = Jt.now(), $t = setInterval(an, Gt)), Ft = 1, tn(un)))
        }
        rn.prototype = on.prototype = {
            constructor: rn,
            restart: function(t, n, e) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                e = (null == e ? nn() : +e) + (null == n ? 0 : +n), this._next || Wt === this || (Wt ? Wt._next = this : Vt = this, Wt = this), this._call = t, this._time = e, cn()
            },
            stop: function() {
                this._call && (this._call = null, this._time = 1 / 0, cn())
            }
        };
        var sn = function(t, n, e) {
                var r = new rn;
                return n = null == n ? 0 : +n, r.restart((function(e) {
                    r.stop(), t(e + n)
                }), n, e), r
            },
            ln = s("start", "end", "cancel", "interrupt"),
            hn = [],
            fn = 0,
            pn = 1,
            dn = 2,
            vn = 3,
            yn = 4,
            mn = 5,
            gn = 6,
            _n = function(t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) {
                    if (e in u) return
                } else t.__transition = {};
                ! function(t, n, e) {
                    var r, i = t.__transition;

                    function o(c) {
                        var s, l, h, f;
                        if (e.state !== pn) return a();
                        for (s in i)
                            if ((f = i[s]).name === e.name) {
                                if (f.state === vn) return sn(o);
                                f.state === yn ? (f.state = gn, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[s]) : +s < n && (f.state = gn, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete i[s])
                            }
                        if (sn((function() {
                                e.state === vn && (e.state = yn, e.timer.restart(u, e.delay, e.time), u(c))
                            })), e.state = dn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === dn) {
                            for (e.state = vn, r = new Array(h = e.tween.length), s = 0, l = -1; s < h; ++s)(f = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (r[++l] = f);
                            r.length = l + 1
                        }
                    }

                    function u(n) {
                        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = mn, 1), o = -1, u = r.length; ++o < u;) r[o].call(t, i);
                        e.state === mn && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                    }

                    function a() {
                        for (var r in e.state = gn, e.timer.stop(), delete i[n], i) return;
                        delete t.__transition
                    }
                    i[n] = e, e.timer = on((function(t) {
                        e.state = pn, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
                    }), 0, e.time)
                }(t, e, {
                    name: n,
                    index: r,
                    group: i,
                    on: ln,
                    tween: hn,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: fn
                })
            };

        function wn(t, n) {
            var e = bn(t, n);
            if (e.state > fn) throw new Error("too late; already scheduled");
            return e
        }

        function xn(t, n) {
            var e = bn(t, n);
            if (e.state > vn) throw new Error("too late; already running");
            return e
        }

        function bn(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n])) throw new Error("transition not found");
            return e
        }
        var Mn = function(t, n) {
            var e, r, i, o = t.__transition,
                u = !0;
            if (o) {
                for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > dn && e.state < mn, e.state = gn, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                u && delete t.__transition
            }
        };

        function zn(t, n) {
            var e, r;
            return function() {
                var i = xn(this, t),
                    o = i.tween;
                if (o !== e)
                    for (var u = 0, a = (r = e = o).length; u < a; ++u)
                        if (r[u].name === n) {
                            (r = r.slice()).splice(u, 1);
                            break
                        }
                i.tween = r
            }
        }

        function kn(t, n, e) {
            var r, i;
            if ("function" != typeof e) throw new Error;
            return function() {
                var o = xn(this, t),
                    u = o.tween;
                if (u !== r) {
                    i = (r = u).slice();
                    for (var a = {
                            name: n,
                            value: e
                        }, c = 0, s = i.length; c < s; ++c)
                        if (i[c].name === n) {
                            i[c] = a;
                            break
                        }
                    c === s && i.push(a)
                }
                o.tween = i
            }
        }

        function An(t, n, e) {
            var r = t._id;
            return t.each((function() {
                    var t = xn(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                })),
                function(t) {
                    return bn(t, r).value[n]
                }
        }
        var Nn = function(t, n) {
            var e;
            return ("number" == typeof n ? zt : n instanceof O ? bt : (e = O(n)) ? (n = e, bt) : jt)(t, n)
        };

        function En(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function Sn(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function On(t, n, e) {
            var r, i, o = e + "";
            return function() {
                var u = this.getAttribute(t);
                return u === o ? null : u === r ? i : i = n(r = u, e)
            }
        }

        function jn(t, n, e) {
            var r, i, o = e + "";
            return function() {
                var u = this.getAttributeNS(t.space, t.local);
                return u === o ? null : u === r ? i : i = n(r = u, e)
            }
        }

        function Pn(t, n, e) {
            var r, i, o;
            return function() {
                var u, a, c = e(this);
                if (null != c) return (u = this.getAttribute(t)) === (a = c + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, c));
                this.removeAttribute(t)
            }
        }

        function Tn(t, n, e) {
            var r, i, o;
            return function() {
                var u, a, c = e(this);
                if (null != c) return (u = this.getAttributeNS(t.space, t.local)) === (a = c + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, c));
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function Ln(t, n) {
            var e, r;

            function i() {
                var i = n.apply(this, arguments);
                return i !== r && (e = (r = i) && function(t, n) {
                    return function(e) {
                        this.setAttributeNS(t.space, t.local, n(e))
                    }
                }(t, i)), e
            }
            return i._value = n, i
        }

        function qn(t, n) {
            var e, r;

            function i() {
                var i = n.apply(this, arguments);
                return i !== r && (e = (r = i) && function(t, n) {
                    return function(e) {
                        this.setAttribute(t, n(e))
                    }
                }(t, i)), e
            }
            return i._value = n, i
        }

        function Bn(t, n) {
            return function() {
                wn(this, t).delay = +n.apply(this, arguments)
            }
        }

        function In(t, n) {
            return n = +n,
                function() {
                    wn(this, t).delay = n
                }
        }

        function Cn(t, n) {
            return function() {
                xn(this, t).duration = +n.apply(this, arguments)
            }
        }

        function Dn(t, n) {
            return n = +n,
                function() {
                    xn(this, t).duration = n
                }
        }

        function Hn(t, n) {
            if ("function" != typeof n) throw new Error;
            return function() {
                xn(this, t).ease = n
            }
        }

        function Xn(t, n, e) {
            var r, i, o = function(t) {
                return (t + "").trim().split(/^|\s+/).every((function(t) {
                    var n = t.indexOf(".");
                    return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                }))
            }(n) ? wn : xn;
            return function() {
                var u = o(this, t),
                    a = u.on;
                a !== r && (i = (r = a).copy()).on(n, e), u.on = i
            }
        }
        var Rn = l.selection.prototype.constructor;

        function Yn(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }

        function Vn(t, n, e) {
            var r, i;

            function o() {
                var o = n.apply(this, arguments);
                return o !== i && (r = (i = o) && function(t, n, e) {
                    return function(r) {
                        this.style.setProperty(t, n(r), e)
                    }
                }(t, o, e)), r
            }
            return o._value = n, o
        }
        var Wn = 0;

        function Fn(t, n, e, r) {
            this._groups = t, this._parents = n, this._name = e, this._id = r
        }

        function Un() {
            return ++Wn
        }
        var $n = l.selection.prototype;
        Fn.prototype = function(t) {
            return Object(l.selection)().transition(t)
        }.prototype = {
            constructor: Fn,
            select: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(l.selector)(t));
                for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
                    for (var a, c, s = r[u], h = s.length, f = o[u] = new Array(h), p = 0; p < h; ++p)(a = s[p]) && (c = t.call(a, a.__data__, p, s)) && ("__data__" in a && (c.__data__ = a.__data__), f[p] = c, _n(f[p], n, e, p, f, bn(a, e)));
                return new Fn(o, this._parents, n, e)
            },
            selectAll: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(l.selectorAll)(t));
                for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
                    for (var c, s = r[a], h = s.length, f = 0; f < h; ++f)
                        if (c = s[f]) {
                            for (var p, d = t.call(c, c.__data__, f, s), v = bn(c, e), y = 0, m = d.length; y < m; ++y)(p = d[y]) && _n(p, n, e, y, d, v);
                            o.push(d), u.push(c)
                        }
                return new Fn(o, u, n, e)
            },
            filter: function(t) {
                "function" != typeof t && (t = Object(l.matcher)(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
                return new Fn(r, this._parents, this._name, this._id)
            },
            merge: function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, s = n[a], l = e[a], h = s.length, f = u[a] = new Array(h), p = 0; p < h; ++p)(c = s[p] || l[p]) && (f[p] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new Fn(u, this._parents, this._name, this._id)
            },
            selection: function() {
                return new Rn(this._groups, this._parents)
            },
            transition: function() {
                for (var t = this._name, n = this._id, e = Un(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
                        if (u = a[s]) {
                            var l = bn(u, n);
                            _n(u, t, e, s, a, {
                                time: l.time + l.delay + l.duration,
                                delay: 0,
                                duration: l.duration,
                                ease: l.ease
                            })
                        }
                return new Fn(r, this._parents, t, e)
            },
            call: $n.call,
            nodes: $n.nodes,
            node: $n.node,
            size: $n.size,
            empty: $n.empty,
            each: $n.each,
            on: function(t, n) {
                var e = this._id;
                return arguments.length < 2 ? bn(this.node(), e).on.on(t) : this.each(Xn(e, t, n))
            },
            attr: function(t, n) {
                var e = Object(l.namespace)(t),
                    r = "transform" === e ? It : Nn;
                return this.attrTween(t, "function" == typeof n ? (e.local ? Tn : Pn)(e, r, An(this, "attr." + t, n)) : null == n ? (e.local ? Sn : En)(e) : (e.local ? jn : On)(e, r, n))
            },
            attrTween: function(t, n) {
                var e = "attr." + t;
                if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                if (null == n) return this.tween(e, null);
                if ("function" != typeof n) throw new Error;
                var r = Object(l.namespace)(t);
                return this.tween(e, (r.local ? Ln : qn)(r, n))
            },
            style: function(t, n, e) {
                var r = "transform" == (t += "") ? Bt : Nn;
                return null == n ? this.styleTween(t, function(t, n) {
                    var e, r, i;
                    return function() {
                        var o = Object(l.style)(this, t),
                            u = (this.style.removeProperty(t), Object(l.style)(this, t));
                        return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
                    }
                }(t, r)).on("end.style." + t, Yn(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                    var r, i, o;
                    return function() {
                        var u = Object(l.style)(this, t),
                            a = e(this),
                            c = a + "";
                        return null == a && (this.style.removeProperty(t), c = a = Object(l.style)(this, t)), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a))
                    }
                }(t, r, An(this, "style." + t, n))).each(function(t, n) {
                    var e, r, i, o, u = "style." + n,
                        a = "end." + u;
                    return function() {
                        var c = xn(this, t),
                            s = c.on,
                            l = null == c.value[u] ? o || (o = Yn(n)) : void 0;
                        s === e && i === l || (r = (e = s).copy()).on(a, i = l), c.on = r
                    }
                }(this._id, t)) : this.styleTween(t, function(t, n, e) {
                    var r, i, o = e + "";
                    return function() {
                        var u = Object(l.style)(this, t);
                        return u === o ? null : u === r ? i : i = n(r = u, e)
                    }
                }(t, r, n), e).on("end.style." + t, null)
            },
            styleTween: function(t, n, e) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == n) return this.tween(r, null);
                if ("function" != typeof n) throw new Error;
                return this.tween(r, Vn(t, n, null == e ? "" : e))
            },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? function(t) {
                    return function() {
                        var n = t(this);
                        this.textContent = null == n ? "" : n
                    }
                }(An(this, "text", t)) : function(t) {
                    return function() {
                        this.textContent = t
                    }
                }(null == t ? "" : t + ""))
            },
            remove: function() {
                return this.on("end.remove", (t = this._id, function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }));
                var t
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = bn(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                        if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == n ? zn : kn)(e, t, n))
            },
            delay: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? Bn : In)(n, t)) : bn(this.node(), n).delay
            },
            duration: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? Cn : Dn)(n, t)) : bn(this.node(), n).duration
            },
            ease: function(t) {
                var n = this._id;
                return arguments.length ? this.each(Hn(n, t)) : bn(this.node(), n).ease
            },
            end: function() {
                var t, n, e = this,
                    r = e._id,
                    i = e.size();
                return new Promise((function(o, u) {
                    var a = {
                            value: u
                        },
                        c = {
                            value: function() {
                                0 == --i && o()
                            }
                        };
                    e.each((function() {
                        var e = xn(this, r),
                            i = e.on;
                        i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(c)), e.on = n
                    }))
                }))
            }
        };
        (function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }
            return n = +n, e.exponent = t, e
        })(3),
        function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }
            return n = +n, e.exponent = t, e
        }(3),
        function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }
            return n = +n, e.exponent = t, e
        }(3), Math.PI;
        (function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n)
            }
            return n = +n, e.overshoot = t, e
        })(1.70158),
        function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }
            return n = +n, e.overshoot = t, e
        }(1.70158),
        function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            }
            return n = +n, e.overshoot = t, e
        }(1.70158);
        var Gn = 2 * Math.PI,
            Zn = (function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gn);

                function i(t) {
                    return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
                }
                return i.amplitude = function(n) {
                    return t(n, e * Gn)
                }, i.period = function(e) {
                    return t(n, e)
                }, i
            }(1, .3), function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gn);

                function i(t) {
                    return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
                }
                return i.amplitude = function(n) {
                    return t(n, e * Gn)
                }, i.period = function(e) {
                    return t(n, e)
                }, i
            }(1, .3), function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gn);

                function i(t) {
                    return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
                }
                return i.amplitude = function(n) {
                    return t(n, e * Gn)
                }, i.period = function(e) {
                    return t(n, e)
                }, i
            }(1, .3), {
                time: null,
                delay: 0,
                duration: 250,
                ease: function(t) {
                    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                }
            });

        function Kn(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) return Zn.time = nn(), Zn;
            return e
        }
        l.selection.prototype.interrupt = function(t) {
            return this.each((function() {
                Mn(this, t)
            }))
        }, l.selection.prototype.transition = function(t) {
            var n, e;
            t instanceof Fn ? (n = t._id, t = t._name) : (n = Un(), (e = Zn).time = nn(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && _n(u, t, n, s, a, e || Kn(u, n));
            return new Fn(r, this._parents, t, n)
        };
        var Qn = function(t) {
            return function() {
                return t
            }
        };

        function Jn(t, n, e) {
            this.target = t, this.type = n, this.transform = e
        }

        function te(t, n, e) {
            this.k = t, this.x = n, this.y = e
        }
        te.prototype = {
            constructor: te,
            scale: function(t) {
                return 1 === t ? this : new te(this.k * t, this.x, this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new te(this.k, this.x + this.k * t, this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var ne = new te(1, 0, 0);

        function ee(t) {
            for (; !t.__zoom;)
                if (!(t = t.parentNode)) return ne;
            return t.__zoom
        }

        function re() {
            l.event.stopImmediatePropagation()
        }
        ee.prototype = te.prototype;
        var ie = function() {
            l.event.preventDefault(), l.event.stopImmediatePropagation()
        };

        function oe() {
            return !l.event.ctrlKey && !l.event.button
        }

        function ue() {
            var t = this;
            return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height]
            ] : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value]
            ] : [
                [0, 0],
                [t.clientWidth, t.clientHeight]
            ]
        }

        function ae() {
            return this.__zoom || ne
        }

        function ce() {
            return -l.event.deltaY * (1 === l.event.deltaMode ? .05 : l.event.deltaMode ? 1 : .002)
        }

        function se() {
            return navigator.maxTouchPoints || "ontouchstart" in this
        }

        function le(t, n, e) {
            var r = t.invertX(n[0][0]) - e[0][0],
                i = t.invertX(n[1][0]) - e[1][0],
                o = t.invertY(n[0][1]) - e[0][1],
                u = t.invertY(n[1][1]) - e[1][1];
            return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
        }
        var he = function() {
            var t, n, e = oe,
                r = ue,
                i = le,
                o = ce,
                u = se,
                a = [0, 1 / 0],
                c = [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0]
                ],
                h = 250,
                d = Ht,
                v = s("start", "zoom", "end"),
                y = 500,
                m = 150,
                g = 0;

            function _(t) {
                t.property("__zoom", ae).on("wheel.zoom", A).on("mousedown.zoom", N).on("dblclick.zoom", E).filter(u).on("touchstart.zoom", S).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", j).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function w(t, n) {
                return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t : new te(n, t.x, t.y)
            }

            function x(t, n, e) {
                var r = n[0] - e[0] * t.k,
                    i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new te(t.k, r, i)
            }

            function b(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }

            function M(t, n, e) {
                t.on("start.zoom", (function() {
                    z(this, arguments).start()
                })).on("interrupt.zoom end.zoom", (function() {
                    z(this, arguments).end()
                })).tween("zoom", (function() {
                    var t = this,
                        i = arguments,
                        o = z(t, i),
                        u = r.apply(t, i),
                        a = null == e ? b(u) : "function" == typeof e ? e.apply(t, i) : e,
                        c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                        s = t.__zoom,
                        l = "function" == typeof n ? n.apply(t, i) : n,
                        h = d(s.invert(a).concat(c / s.k), l.invert(a).concat(c / l.k));
                    return function(t) {
                        if (1 === t) t = l;
                        else {
                            var n = h(t),
                                e = c / n[2];
                            t = new te(e, a[0] - n[0] * e, a[1] - n[1] * e)
                        }
                        o.zoom(null, t)
                    }
                }))
            }

            function z(t, n, e) {
                return !e && t.__zooming || new k(t, n)
            }

            function k(t, n) {
                this.that = t, this.args = n, this.active = 0, this.extent = r.apply(t, n), this.taps = 0
            }

            function A() {
                if (e.apply(this, arguments)) {
                    var t = z(this, arguments),
                        n = this.__zoom,
                        r = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, o.apply(this, arguments)))),
                        u = Object(l.mouse)(this);
                    if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = n.invert(t.mouse[0] = u)), clearTimeout(t.wheel);
                    else {
                        if (n.k === r) return;
                        t.mouse = [u, n.invert(u)], Mn(this), t.start()
                    }
                    ie(), t.wheel = setTimeout((function() {
                        t.wheel = null, t.end()
                    }), m), t.zoom("mouse", i(x(w(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
                }
            }

            function N() {
                if (!n && e.apply(this, arguments)) {
                    var t = z(this, arguments, !0),
                        r = Object(l.select)(l.event.view).on("mousemove.zoom", (function() {
                            if (ie(), !t.moved) {
                                var n = l.event.clientX - u,
                                    e = l.event.clientY - a;
                                t.moved = n * n + e * e > g
                            }
                            t.zoom("mouse", i(x(t.that.__zoom, t.mouse[0] = Object(l.mouse)(t.that), t.mouse[1]), t.extent, c))
                        }), !0).on("mouseup.zoom", (function() {
                            r.on("mousemove.zoom mouseup.zoom", null), p(l.event.view, t.moved), ie(), t.end()
                        }), !0),
                        o = Object(l.mouse)(this),
                        u = l.event.clientX,
                        a = l.event.clientY;
                    f(l.event.view), re(), t.mouse = [o, this.__zoom.invert(o)], Mn(this), t.start()
                }
            }

            function E() {
                if (e.apply(this, arguments)) {
                    var t = this.__zoom,
                        n = Object(l.mouse)(this),
                        o = t.invert(n),
                        u = t.k * (l.event.shiftKey ? .5 : 2),
                        a = i(x(w(t, u), n, o), r.apply(this, arguments), c);
                    ie(), h > 0 ? Object(l.select)(this).transition().duration(h).call(M, a, n) : Object(l.select)(this).call(_.transform, a)
                }
            }

            function S() {
                if (e.apply(this, arguments)) {
                    var n, r, i, o, u = l.event.touches,
                        a = u.length,
                        c = z(this, arguments, l.event.changedTouches.length === a);
                    for (re(), r = 0; r < a; ++r) i = u[r], o = [o = Object(l.touch)(this, u, i.identifier), this.__zoom.invert(o), i.identifier], c.touch0 ? c.touch1 || c.touch0[2] === o[2] || (c.touch1 = o, c.taps = 0) : (c.touch0 = o, n = !0, c.taps = 1 + !!t);
                    t && (t = clearTimeout(t)), n && (c.taps < 2 && (t = setTimeout((function() {
                        t = null
                    }), y)), Mn(this), c.start())
                }
            }

            function O() {
                if (this.__zooming) {
                    var n, e, r, o, u = z(this, arguments),
                        a = l.event.changedTouches,
                        s = a.length;
                    for (ie(), t && (t = clearTimeout(t)), u.taps = 0, n = 0; n < s; ++n) e = a[n], r = Object(l.touch)(this, a, e.identifier), u.touch0 && u.touch0[2] === e.identifier ? u.touch0[0] = r : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = r);
                    if (e = u.that.__zoom, u.touch1) {
                        var h = u.touch0[0],
                            f = u.touch0[1],
                            p = u.touch1[0],
                            d = u.touch1[1],
                            v = (v = p[0] - h[0]) * v + (v = p[1] - h[1]) * v,
                            y = (y = d[0] - f[0]) * y + (y = d[1] - f[1]) * y;
                        e = w(e, Math.sqrt(v / y)), r = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2], o = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2]
                    } else {
                        if (!u.touch0) return;
                        r = u.touch0[0], o = u.touch0[1]
                    }
                    u.zoom("touch", i(x(e, r, o), u.extent, c))
                }
            }

            function j() {
                if (this.__zooming) {
                    var t, e, r = z(this, arguments),
                        i = l.event.changedTouches,
                        o = i.length;
                    for (re(), n && clearTimeout(n), n = setTimeout((function() {
                            n = null
                        }), y), t = 0; t < o; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                    if (r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0) r.touch0[1] = this.__zoom.invert(r.touch0[0]);
                    else if (r.end(), 2 === r.taps) {
                        var u = Object(l.select)(this).on("dblclick.zoom");
                        u && u.apply(this, arguments)
                    }
                }
            }
            return _.transform = function(t, n, e) {
                var r = t.selection ? t.selection() : t;
                r.property("__zoom", ae), t !== r ? M(t, n, e) : r.interrupt().each((function() {
                    z(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                }))
            }, _.scaleBy = function(t, n, e) {
                _.scaleTo(t, (function() {
                    var t = this.__zoom.k,
                        e = "function" == typeof n ? n.apply(this, arguments) : n;
                    return t * e
                }), e)
            }, _.scaleTo = function(t, n, e) {
                _.transform(t, (function() {
                    var t = r.apply(this, arguments),
                        o = this.__zoom,
                        u = null == e ? b(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                        a = o.invert(u),
                        s = "function" == typeof n ? n.apply(this, arguments) : n;
                    return i(x(w(o, s), u, a), t, c)
                }), e)
            }, _.translateBy = function(t, n, e) {
                _.transform(t, (function() {
                    return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
                }))
            }, _.translateTo = function(t, n, e, o) {
                _.transform(t, (function() {
                    var t = r.apply(this, arguments),
                        u = this.__zoom,
                        a = null == o ? b(t) : "function" == typeof o ? o.apply(this, arguments) : o;
                    return i(ne.translate(a[0], a[1]).scale(u.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
                }), o)
            }, k.prototype = {
                start: function() {
                    return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                },
                end: function() {
                    return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                },
                emit: function(t) {
                    Object(l.customEvent)(new Jn(_, t, this.that.__zoom), v.apply, v, [t, this.that, this.args])
                }
            }, _.wheelDelta = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : Qn(+t), _) : o
            }, _.filter = function(t) {
                return arguments.length ? (e = "function" == typeof t ? t : Qn(!!t), _) : e
            }, _.touchable = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : Qn(!!t), _) : u
            }, _.extent = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : Qn([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), _) : r
            }, _.scaleExtent = function(t) {
                return arguments.length ? (a[0] = +t[0], a[1] = +t[1], _) : [a[0], a[1]]
            }, _.translateExtent = function(t) {
                return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], _) : [
                    [c[0][0], c[0][1]],
                    [c[1][0], c[1][1]]
                ]
            }, _.constrain = function(t) {
                return arguments.length ? (i = t, _) : i
            }, _.duration = function(t) {
                return arguments.length ? (h = +t, _) : h
            }, _.interpolate = function(t) {
                return arguments.length ? (d = t, _) : d
            }, _.on = function() {
                var t = v.on.apply(v, arguments);
                return t === v ? _ : t
            }, _.clickDistance = function(t) {
                return arguments.length ? (g = (t = +t) * t, _) : Math.sqrt(g)
            }, _
        };
        e.d(n, "zoom", (function() {
            return he
        })), e.d(n, "zoomTransform", (function() {
            return ee
        })), e.d(n, "zoomIdentity", (function() {
            return ne
        }))
    }, function(t, n, e) {
        "use strict";

        function r(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function i(t, n) {
            return t + n.x
        }

        function o(t, n) {
            return Math.max(t, n.y)
        }
        e.r(n);
        var u = function() {
            var t = r,
                n = 1,
                e = 1,
                u = !1;

            function a(r) {
                var a, c = 0;
                r.eachAfter((function(n) {
                    var e = n.children;
                    e ? (n.x = function(t) {
                        return t.reduce(i, 0) / t.length
                    }(e), n.y = function(t) {
                        return 1 + t.reduce(o, 0)
                    }(e)) : (n.x = a ? c += t(n, a) : 0, n.y = 0, a = n)
                }));
                var s = function(t) {
                        for (var n; n = t.children;) t = n[0];
                        return t
                    }(r),
                    l = function(t) {
                        for (var n; n = t.children;) t = n[n.length - 1];
                        return t
                    }(r),
                    h = s.x - t(s, l) / 2,
                    f = l.x + t(l, s) / 2;
                return r.eachAfter(u ? function(t) {
                    t.x = (t.x - r.x) * n, t.y = (r.y - t.y) * e
                } : function(t) {
                    t.x = (t.x - h) / (f - h) * n, t.y = (1 - (r.y ? t.y / r.y : 1)) * e
                })
            }
            return a.separation = function(n) {
                return arguments.length ? (t = n, a) : t
            }, a.size = function(t) {
                return arguments.length ? (u = !1, n = +t[0], e = +t[1], a) : u ? null : [n, e]
            }, a.nodeSize = function(t) {
                return arguments.length ? (u = !0, n = +t[0], e = +t[1], a) : u ? [n, e] : null
            }, a
        };

        function a(t) {
            var n = 0,
                e = t.children,
                r = e && e.length;
            if (r)
                for (; --r >= 0;) n += e[r].value;
            else n = 1;
            t.value = n
        }

        function c(t, n) {
            var e, r, i, o, u, a = new f(t),
                c = +t.value && (a.value = t.value),
                l = [a];
            for (null == n && (n = s); e = l.pop();)
                if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
                    for (e.children = new Array(u), o = u - 1; o >= 0; --o) l.push(r = e.children[o] = new f(i[o])), r.parent = e, r.depth = e.depth + 1;
            return a.eachBefore(h)
        }

        function s(t) {
            return t.children
        }

        function l(t) {
            t.data = t.data.data
        }

        function h(t) {
            var n = 0;
            do {
                t.height = n
            } while ((t = t.parent) && t.height < ++n)
        }

        function f(t) {
            this.data = t, this.depth = this.height = 0, this.parent = null
        }
        f.prototype = c.prototype = {
            constructor: f,
            count: function() {
                return this.eachAfter(a)
            },
            each: function(t) {
                var n, e, r, i, o = this,
                    u = [o];
                do {
                    for (n = u.reverse(), u = []; o = n.pop();)
                        if (t(o), e = o.children)
                            for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
                } while (u.length);
                return this
            },
            eachAfter: function(t) {
                for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
                    if (u.push(i), n = i.children)
                        for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
                for (; i = u.pop();) t(i);
                return this
            },
            eachBefore: function(t) {
                for (var n, e, r = this, i = [r]; r = i.pop();)
                    if (t(r), n = r.children)
                        for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
                return this
            },
            sum: function(t) {
                return this.eachAfter((function(n) {
                    for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                    n.value = e
                }))
            },
            sort: function(t) {
                return this.eachBefore((function(n) {
                    n.children && n.children.sort(t)
                }))
            },
            path: function(t) {
                for (var n = this, e = function(t, n) {
                        if (t === n) return t;
                        var e = t.ancestors(),
                            r = n.ancestors(),
                            i = null;
                        t = e.pop(), n = r.pop();
                        for (; t === n;) i = t, t = e.pop(), n = r.pop();
                        return i
                    }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
                for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
                return r
            },
            ancestors: function() {
                for (var t = this, n = [t]; t = t.parent;) n.push(t);
                return n
            },
            descendants: function() {
                var t = [];
                return this.each((function(n) {
                    t.push(n)
                })), t
            },
            leaves: function() {
                var t = [];
                return this.eachBefore((function(n) {
                    n.children || t.push(n)
                })), t
            },
            links: function() {
                var t = this,
                    n = [];
                return t.each((function(e) {
                    e !== t && n.push({
                        source: e.parent,
                        target: e
                    })
                })), n
            },
            copy: function() {
                return c(this).eachBefore(l)
            }
        };
        var p = Array.prototype.slice;
        var d = function(t) {
            for (var n, e, r = 0, i = (t = function(t) {
                    for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
                    return t
                }(p.call(t))).length, o = []; r < i;) n = t[r], e && m(e, n) ? ++r : (e = _(o = v(o, n)), r = 0);
            return e
        };

        function v(t, n) {
            var e, r;
            if (g(n, t)) return [n];
            for (e = 0; e < t.length; ++e)
                if (y(n, t[e]) && g(w(t[e], n), t)) return [t[e], n];
            for (e = 0; e < t.length - 1; ++e)
                for (r = e + 1; r < t.length; ++r)
                    if (y(w(t[e], t[r]), n) && y(w(t[e], n), t[r]) && y(w(t[r], n), t[e]) && g(x(t[e], t[r], n), t)) return [t[e], t[r], n];
            throw new Error
        }

        function y(t, n) {
            var e = t.r - n.r,
                r = n.x - t.x,
                i = n.y - t.y;
            return e < 0 || e * e < r * r + i * i
        }

        function m(t, n) {
            var e = t.r - n.r + 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return e > 0 && e * e > r * r + i * i
        }

        function g(t, n) {
            for (var e = 0; e < n.length; ++e)
                if (!m(t, n[e])) return !1;
            return !0
        }

        function _(t) {
            switch (t.length) {
                case 1:
                    return {
                        x: (n = t[0]).x,
                        y: n.y,
                        r: n.r
                    };
                case 2:
                    return w(t[0], t[1]);
                case 3:
                    return x(t[0], t[1], t[2])
            }
            var n
        }

        function w(t, n) {
            var e = t.x,
                r = t.y,
                i = t.r,
                o = n.x,
                u = n.y,
                a = n.r,
                c = o - e,
                s = u - r,
                l = a - i,
                h = Math.sqrt(c * c + s * s);
            return {
                x: (e + o + c / h * l) / 2,
                y: (r + u + s / h * l) / 2,
                r: (h + i + a) / 2
            }
        }

        function x(t, n, e) {
            var r = t.x,
                i = t.y,
                o = t.r,
                u = n.x,
                a = n.y,
                c = n.r,
                s = e.x,
                l = e.y,
                h = e.r,
                f = r - u,
                p = r - s,
                d = i - a,
                v = i - l,
                y = c - o,
                m = h - o,
                g = r * r + i * i - o * o,
                _ = g - u * u - a * a + c * c,
                w = g - s * s - l * l + h * h,
                x = p * d - f * v,
                b = (d * w - v * _) / (2 * x) - r,
                M = (v * y - d * m) / x,
                z = (p * _ - f * w) / (2 * x) - i,
                k = (f * m - p * y) / x,
                A = M * M + k * k - 1,
                N = 2 * (o + b * M + z * k),
                E = b * b + z * z - o * o,
                S = -(A ? (N + Math.sqrt(N * N - 4 * A * E)) / (2 * A) : E / N);
            return {
                x: r + b + M * S,
                y: i + z + k * S,
                r: S
            }
        }

        function b(t, n, e) {
            var r, i, o, u, a = t.x - n.x,
                c = t.y - n.y,
                s = a * a + c * c;
            s ? (i = n.r + e.r, i *= i, u = t.r + e.r, i > (u *= u) ? (r = (s + u - i) / (2 * s), o = Math.sqrt(Math.max(0, u / s - r * r)), e.x = t.x - r * a - o * c, e.y = t.y - r * c + o * a) : (r = (s + i - u) / (2 * s), o = Math.sqrt(Math.max(0, i / s - r * r)), e.x = n.x + r * a - o * c, e.y = n.y + r * c + o * a)) : (e.x = n.x + e.r, e.y = n.y)
        }

        function M(t, n) {
            var e = t.r + n.r - 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return e > 0 && e * e > r * r + i * i
        }

        function z(t) {
            var n = t._,
                e = t.next._,
                r = n.r + e.r,
                i = (n.x * e.r + e.x * n.r) / r,
                o = (n.y * e.r + e.y * n.r) / r;
            return i * i + o * o
        }

        function k(t) {
            this._ = t, this.next = null, this.previous = null
        }

        function A(t) {
            if (!(i = t.length)) return 0;
            var n, e, r, i, o, u, a, c, s, l, h;
            if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
            if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
            b(e, n, r = t[2]), n = new k(n), e = new k(e), r = new k(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
            t: for (a = 3; a < i; ++a) {
                b(n._, e._, r = t[a]), r = new k(r), c = e.next, s = n.previous, l = e._.r, h = n._.r;
                do {
                    if (l <= h) {
                        if (M(c._, r._)) {
                            e = c, n.next = e, e.previous = n, --a;
                            continue t
                        }
                        l += c._.r, c = c.next
                    } else {
                        if (M(s._, r._)) {
                            (n = s).next = e, e.previous = n, --a;
                            continue t
                        }
                        h += s._.r, s = s.previous
                    }
                } while (c !== s.next);
                for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = z(n);
                    (r = r.next) !== e;)(u = z(r)) < o && (n = r, o = u);
                e = n.next
            }
            for (n = [e._], r = e;
                (r = r.next) !== e;) n.push(r._);
            for (r = d(n), a = 0; a < i; ++a)(n = t[a]).x -= r.x, n.y -= r.y;
            return r.r
        }
        var N = function(t) {
            return A(t), t
        };

        function E(t) {
            return null == t ? null : S(t)
        }

        function S(t) {
            if ("function" != typeof t) throw new Error;
            return t
        }

        function O() {
            return 0
        }
        var j = function(t) {
            return function() {
                return t
            }
        };

        function P(t) {
            return Math.sqrt(t.value)
        }
        var T = function() {
            var t = null,
                n = 1,
                e = 1,
                r = O;

            function i(i) {
                return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(L(t)).eachAfter(q(r, .5)).eachBefore(B(1)) : i.eachBefore(L(P)).eachAfter(q(O, 1)).eachAfter(q(r, i.r / Math.min(n, e))).eachBefore(B(Math.min(n, e) / (2 * i.r))), i
            }
            return i.radius = function(n) {
                return arguments.length ? (t = E(n), i) : t
            }, i.size = function(t) {
                return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
            }, i.padding = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : j(+t), i) : r
            }, i
        };

        function L(t) {
            return function(n) {
                n.children || (n.r = Math.max(0, +t(n) || 0))
            }
        }

        function q(t, n) {
            return function(e) {
                if (r = e.children) {
                    var r, i, o, u = r.length,
                        a = t(e) * n || 0;
                    if (a)
                        for (i = 0; i < u; ++i) r[i].r += a;
                    if (o = A(r), a)
                        for (i = 0; i < u; ++i) r[i].r -= a;
                    e.r = o + a
                }
            }
        }

        function B(t) {
            return function(n) {
                var e = n.parent;
                n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
            }
        }
        var I = function(t) {
                t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
            },
            C = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;)(o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
            },
            D = function() {
                var t = 1,
                    n = 1,
                    e = 0,
                    r = !1;

                function i(i) {
                    var o = i.height + 1;
                    return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function(t, n) {
                        return function(r) {
                            r.children && C(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
                            var i = r.x0,
                                o = r.y0,
                                u = r.x1 - e,
                                a = r.y1 - e;
                            u < i && (i = u = (i + u) / 2), a < o && (o = a = (o + a) / 2), r.x0 = i, r.y0 = o, r.x1 = u, r.y1 = a
                        }
                    }(n, o)), r && i.eachBefore(I), i
                }
                return i.round = function(t) {
                    return arguments.length ? (r = !!t, i) : r
                }, i.size = function(e) {
                    return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
                }, i.padding = function(t) {
                    return arguments.length ? (e = +t, i) : e
                }, i
            },
            H = "$",
            X = {
                depth: -1
            },
            R = {};

        function Y(t) {
            return t.id
        }

        function V(t) {
            return t.parentId
        }
        var W = function() {
            var t = Y,
                n = V;

            function e(e) {
                var r, i, o, u, a, c, s, l = e.length,
                    p = new Array(l),
                    d = {};
                for (i = 0; i < l; ++i) r = e[i], a = p[i] = new f(r), null != (c = t(r, i, e)) && (c += "") && (d[s = H + (a.id = c)] = s in d ? R : a);
                for (i = 0; i < l; ++i)
                    if (a = p[i], null != (c = n(e[i], i, e)) && (c += "")) {
                        if (!(u = d[H + c])) { throw new Error("missing: " + c); }
                        if (u === R) throw new Error("ambiguous: " + c);
                        u.children ? u.children.push(a) : u.children = [a], a.parent = u
                    } else {
                        if (o) throw new Error("multiple roots");
                        o = a
                    }
                if (!o) throw new Error("no root");
                if (o.parent = X, o.eachBefore((function(t) {
                        t.depth = t.parent.depth + 1, --l
                    })).eachBefore(h), o.parent = null, l > 0) console.error("cycle") //throw new Error("cycle");
                return o
            }
            return e.id = function(n) {
                return arguments.length ? (t = S(n), e) : t
            }, e.parentId = function(t) {
                return arguments.length ? (n = S(t), e) : n
            }, e
        };

        function F(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function U(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }

        function $(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }

        function G(t, n, e) {
            var r = e / (n.i - t.i);
            n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
        }

        function Z(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function K(t, n) {
            this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
        }
        K.prototype = Object.create(f.prototype);
        var Q = function() {
                var t = F,
                    n = 1,
                    e = 1,
                    r = null;

                function i(i) {
                    var c = function(t) {
                        for (var n, e, r, i, o, u = new K(t, 0), a = [u]; n = a.pop();)
                            if (r = n._.children)
                                for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new K(r[i], i)), e.parent = n;
                        return (u.parent = new K(null, 0)).children = [u], u
                    }(i);
                    if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(u), r) i.eachBefore(a);
                    else {
                        var s = i,
                            l = i,
                            h = i;
                        i.eachBefore((function(t) {
                            t.x < s.x && (s = t), t.x > l.x && (l = t), t.depth > h.depth && (h = t)
                        }));
                        var f = s === l ? 1 : t(s, l) / 2,
                            p = f - s.x,
                            d = n / (l.x + f + p),
                            v = e / (h.depth || 1);
                        i.eachBefore((function(t) {
                            t.x = (t.x + p) * d, t.y = t.depth * v
                        }))
                    }
                    return i
                }

                function o(n) {
                    var e = n.children,
                        r = n.parent.children,
                        i = n.i ? r[n.i - 1] : null;
                    if (e) {
                        ! function(t) {
                            for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
                        }(n);
                        var o = (e[0].z + e[e.length - 1].z) / 2;
                        i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o
                    } else i && (n.z = i.z + t(n._, i._));
                    n.parent.A = function(n, e, r) {
                        if (e) {
                            for (var i, o = n, u = n, a = e, c = o.parent.children[0], s = o.m, l = u.m, h = a.m, f = c.m; a = $(a), o = U(o), a && o;) c = U(c), (u = $(u)).a = n, (i = a.z + h - o.z - s + t(a._, o._)) > 0 && (G(Z(a, n, r), n, i), s += i, l += i), h += a.m, s += o.m, f += c.m, l += u.m;
                            a && !$(u) && (u.t = a, u.m += h - l), o && !U(c) && (c.t = o, c.m += s - f, r = n)
                        }
                        return r
                    }(n, i, n.parent.A || r[0])
                }

                function u(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function a(t) {
                    t.x *= n, t.y = t.depth * e
                }
                return i.separation = function(n) {
                    return arguments.length ? (t = n, i) : t
                }, i.size = function(t) {
                    return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
                }, i.nodeSize = function(t) {
                    return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
                }, i
            },
            J = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;)(o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
            },
            tt = (1 + Math.sqrt(5)) / 2;

        function nt(t, n, e, r, i, o) {
            for (var u, a, c, s, l, h, f, p, d, v, y, m = [], g = n.children, _ = 0, w = 0, x = g.length, b = n.value; _ < x;) {
                c = i - e, s = o - r;
                do {
                    l = g[w++].value
                } while (!l && w < x);
                for (h = f = l, y = l * l * (v = Math.max(s / c, c / s) / (b * t)), d = Math.max(f / y, y / h); w < x; ++w) {
                    if (l += a = g[w].value, a < h && (h = a), a > f && (f = a), y = l * l * v, (p = Math.max(f / y, y / h)) > d) {
                        l -= a;
                        break
                    }
                    d = p
                }
                m.push(u = {
                    value: l,
                    dice: c < s,
                    children: g.slice(_, w)
                }), u.dice ? C(u, e, r, i, b ? r += s * l / b : o) : J(u, e, r, b ? e += c * l / b : i, o), b -= l, _ = w
            }
            return m
        }
        var et = function t(n) {
                function e(t, e, r, i, o) {
                    nt(n, t, e, r, i, o)
                }
                return e.ratio = function(n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(tt),
            rt = function() {
                var t = et,
                    n = !1,
                    e = 1,
                    r = 1,
                    i = [0],
                    o = O,
                    u = O,
                    a = O,
                    c = O,
                    s = O;

                function l(t) {
                    return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(h), i = [0], n && t.eachBefore(I), t
                }

                function h(n) {
                    var e = i[n.depth],
                        r = n.x0 + e,
                        l = n.y0 + e,
                        h = n.x1 - e,
                        f = n.y1 - e;
                    h < r && (r = h = (r + h) / 2), f < l && (l = f = (l + f) / 2), n.x0 = r, n.y0 = l, n.x1 = h, n.y1 = f, n.children && (e = i[n.depth + 1] = o(n) / 2, r += s(n) - e, l += u(n) - e, (h -= a(n) - e) < r && (r = h = (r + h) / 2), (f -= c(n) - e) < l && (l = f = (l + f) / 2), t(n, r, l, h, f))
                }
                return l.round = function(t) {
                    return arguments.length ? (n = !!t, l) : n
                }, l.size = function(t) {
                    return arguments.length ? (e = +t[0], r = +t[1], l) : [e, r]
                }, l.tile = function(n) {
                    return arguments.length ? (t = S(n), l) : t
                }, l.padding = function(t) {
                    return arguments.length ? l.paddingInner(t).paddingOuter(t) : l.paddingInner()
                }, l.paddingInner = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : j(+t), l) : o
                }, l.paddingOuter = function(t) {
                    return arguments.length ? l.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : l.paddingTop()
                }, l.paddingTop = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : j(+t), l) : u
                }, l.paddingRight = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : j(+t), l) : a
                }, l.paddingBottom = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : j(+t), l) : c
                }, l.paddingLeft = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : j(+t), l) : s
                }, l
            },
            it = function(t, n, e, r, i) {
                var o, u, a = t.children,
                    c = a.length,
                    s = new Array(c + 1);
                for (s[0] = u = o = 0; o < c; ++o) s[o + 1] = u += a[o].value;
                ! function t(n, e, r, i, o, u, c) {
                    if (n >= e - 1) {
                        var l = a[n];
                        return l.x0 = i, l.y0 = o, l.x1 = u, void(l.y1 = c)
                    }
                    var h = s[n],
                        f = r / 2 + h,
                        p = n + 1,
                        d = e - 1;
                    for (; p < d;) {
                        var v = p + d >>> 1;
                        s[v] < f ? p = v + 1 : d = v
                    }
                    f - s[p - 1] < s[p] - f && n + 1 < p && --p;
                    var y = s[p] - h,
                        m = r - y;
                    if (u - i > c - o) {
                        var g = (i * m + u * y) / r;
                        t(n, p, y, i, o, g, c), t(p, e, m, g, o, u, c)
                    } else {
                        var _ = (o * m + c * y) / r;
                        t(n, p, y, i, o, u, _), t(p, e, m, i, _, u, c)
                    }
                }(0, c, t.value, n, e, r, i)
            },
            ot = function(t, n, e, r, i) {
                (1 & t.depth ? J : C)(t, n, e, r, i)
            },
            ut = function t(n) {
                function e(t, e, r, i, o) {
                    if ((u = t._squarify) && u.ratio === n)
                        for (var u, a, c, s, l, h = -1, f = u.length, p = t.value; ++h < f;) {
                            for (c = (a = u[h]).children, s = a.value = 0, l = c.length; s < l; ++s) a.value += c[s].value;
                            a.dice ? C(a, e, r, i, r += (o - r) * a.value / p) : J(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
                        } else t._squarify = u = nt(n, t, e, r, i, o), u.ratio = n
                }
                return e.ratio = function(n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(tt);
        e.d(n, "cluster", (function() {
            return u
        })), e.d(n, "hierarchy", (function() {
            return c
        })), e.d(n, "pack", (function() {
            return T
        })), e.d(n, "packSiblings", (function() {
            return N
        })), e.d(n, "packEnclose", (function() {
            return d
        })), e.d(n, "partition", (function() {
            return D
        })), e.d(n, "stratify", (function() {
            return W
        })), e.d(n, "tree", (function() {
            return Q
        })), e.d(n, "treemap", (function() {
            return rt
        })), e.d(n, "treemapBinary", (function() {
            return it
        })), e.d(n, "treemapDice", (function() {
            return C
        })), e.d(n, "treemapSlice", (function() {
            return J
        })), e.d(n, "treemapSliceDice", (function() {
            return ot
        })), e.d(n, "treemapSquarify", (function() {
            return et
        })), e.d(n, "treemapResquarify", (function() {
            return ut
        }))
    }])
}));