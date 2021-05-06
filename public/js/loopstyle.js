
    (function () {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        (window.goog = window.goog || {}).inherits = function (a, c) {
            function b() {}
            b.prototype = c.prototype;
            a.prototype = new b();
            a.prototype.constructor = a;
        };
    }.call(this));
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
    (function () {
        if (void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.polyfillWrapFlushCallback) {
            var BuiltInHTMLElement = HTMLElement;
            window.HTMLElement = function () {
                return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
            };
            HTMLElement.prototype = BuiltInHTMLElement.prototype;
            HTMLElement.prototype.constructor = HTMLElement;
            Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
        }
    })();
    (function () {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var n; /*

 Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
        /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io /LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
        var p = window.Document.prototype.createElement,
            q = window.Document.prototype.createElementNS,
            aa = window.Document.prototype.importNode,
            ba = window.Document.prototype.prepend,
            ca = window.Document.prototype.append,
            da = window.DocumentFragment.prototype.prepend,
            ea = window.DocumentFragment.prototype.append,
            r = window.Node.prototype.cloneNode,
            t = window.Node.prototype.appendChild,
            u = window.Node.prototype.insertBefore,
            v = window.Node.prototype.removeChild,
            w = window.Node.prototype.replaceChild,
            x = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            z = window.Element.prototype.attachShadow,
            A = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            B = window.Element.prototype.getAttribute,
            C = window.Element.prototype.setAttribute,
            D = window.Element.prototype.removeAttribute,
            E = window.Element.prototype.getAttributeNS,
            F = window.Element.prototype.setAttributeNS,
            G = window.Element.prototype.removeAttributeNS,
            H = window.Element.prototype.insertAdjacentElement,
            fa = window.Element.prototype.insertAdjacentHTML,
            ha = window.Element.prototype.prepend,
            ia = window.Element.prototype.append,
            ja = window.Element.prototype.before,
            ka = window.Element.prototype.after,
            la = window.Element.prototype.replaceWith,
            ma = window.Element.prototype.remove,
            na = window.HTMLElement,
            I = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            oa = window.HTMLElement.prototype.insertAdjacentElement,
            pa = window.HTMLElement.prototype.insertAdjacentHTML;
        var qa = (function () {
            var a = new Set();
            "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (b) {
                return a.add(b);
            });
            return a;
        })();
        function ra(a) {
            var b = qa.has(a);
            a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
            return !b && a;
        }
        var sa = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
        function J(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            if (sa(a)) return !0;
            for (; a && !(a.__CE_isImportDocument || a instanceof Document); ) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
            return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
        }
        function K(a) {
            var b = a.children;
            if (b) return Array.prototype.slice.call(b);
            b = [];
            for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
            return b;
        }
        function L(a, b) {
            for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
            return b && b !== a ? b.nextSibling : null;
        }
        function M(a, b, c) {
            for (var e = a; e; ) {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var d = e;
                    b(d);
                    var f = d.localName;
                    if ("link" === f && "import" === d.getAttribute("rel")) {
                        e = d.import;
                        void 0 === c && (c = new Set());
                        if (e instanceof Node && !c.has(e)) for (c.add(e), e = e.firstChild; e; e = e.nextSibling) M(e, b, c);
                        e = L(a, d);
                        continue;
                    } else if ("template" === f) {
                        e = L(a, d);
                        continue;
                    }
                    if ((d = d.__CE_shadowRoot)) for (d = d.firstChild; d; d = d.nextSibling) M(d, b, c);
                }
                e = e.firstChild ? e.firstChild : L(a, e);
            }
        }
        function ta() {
            var a = !(null === N || void 0 === N || !N.noDocumentConstructionObserver),
                b = !(null === N || void 0 === N || !N.shadyDomFastWalk);
            this.f = [];
            this.s = [];
            this.c = !1;
            this.shadyDomFastWalk = b;
            this.K = !a;
        }
        function O(a, b, c, e) {
            var d = window.ShadyDom;
            if (a.shadyDomFastWalk && d && d.inUse) {
                if ((b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll)) for (a = d.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
            } else M(b, c, e);
        }
        function ua(a, b) {
            a.c = !0;
            a.f.push(b);
        }
        function va(a, b) {
            a.c = !0;
            a.s.push(b);
        }
        function P(a, b) {
            a.c &&
                O(a, b, function (c) {
                    return Q(a, c);
                });
        }
        function Q(a, b) {
            if (a.c && !b.__CE_patched) {
                b.__CE_patched = !0;
                for (var c = 0; c < a.f.length; c++) a.f[c](b);
                for (c = 0; c < a.s.length; c++) a.s[c](b);
            }
        }
        function R(a, b) {
            var c = [];
            O(a, b, function (d) {
                return c.push(d);
            });
            for (b = 0; b < c.length; b++) {
                var e = c[b];
                1 === e.__CE_state ? a.connectedCallback(e) : S(a, e);
            }
        }
        function T(a, b) {
            var c = [];
            O(a, b, function (d) {
                return c.push(d);
            });
            for (b = 0; b < c.length; b++) {
                var e = c[b];
                1 === e.__CE_state && a.disconnectedCallback(e);
            }
        }
        function U(a, b, c) {
            c = void 0 === c ? {} : c;
            var e = c.L,
                d =
                    c.upgrade ||
                    function (g) {
                        return S(a, g);
                    },
                f = [];
            O(
                a,
                b,
                function (g) {
                    a.c && Q(a, g);
                    if ("link" === g.localName && "import" === g.getAttribute("rel")) {
                        var h = g.import;
                        h instanceof Node && ((h.__CE_isImportDocument = !0), (h.__CE_registry = document.__CE_registry));
                        h && "complete" === h.readyState
                            ? (h.__CE_documentLoadHandled = !0)
                            : g.addEventListener("load", function () {
                                  var k = g.import;
                                  if (!k.__CE_documentLoadHandled) {
                                      k.__CE_documentLoadHandled = !0;
                                      var l = new Set();
                                      e &&
                                          (e.forEach(function (m) {
                                              return l.add(m);
                                          }),
                                          l.delete(k));
                                      U(a, k, { L: l, upgrade: d });
                                  }
                              });
                    } else f.push(g);
                },
                e
            );
            for (b = 0; b < f.length; b++) d(f[b]);
        }
        function S(a, b) {
            try {
                var c = a.G(b.ownerDocument, b.localName);
                c && a.I(b, c);
            } catch (e) {
                V(e);
            }
        }
        n = ta.prototype;
        n.I = function (a, b) {
            if (void 0 === a.__CE_state) {
                b.constructionStack.push(a);
                try {
                    try {
                        if (new b.constructorFunction() !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
                    } finally {
                        b.constructionStack.pop();
                    }
                } catch (f) {
                    throw ((a.__CE_state = 2), f);
                }
                a.__CE_state = 1;
                a.__CE_definition = b;
                if (b.attributeChangedCallback && a.hasAttributes()) {
                    b = b.observedAttributes;
                    for (var c = 0; c < b.length; c++) {
                        var e = b[c],
                            d = a.getAttribute(e);
                        null !== d && this.attributeChangedCallback(a, e, null, d, null);
                    }
                }
                J(a) && this.connectedCallback(a);
            }
        };
        n.connectedCallback = function (a) {
            var b = a.__CE_definition;
            if (b.connectedCallback)
                try {
                    b.connectedCallback.call(a);
                } catch (c) {
                    V(c);
                }
        };
        n.disconnectedCallback = function (a) {
            var b = a.__CE_definition;
            if (b.disconnectedCallback)
                try {
                    b.disconnectedCallback.call(a);
                } catch (c) {
                    V(c);
                }
        };
        n.attributeChangedCallback = function (a, b, c, e, d) {
            var f = a.__CE_definition;
            if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b))
                try {
                    f.attributeChangedCallback.call(a, b, c, e, d);
                } catch (g) {
                    V(g);
                }
        };
        n.G = function (a, b) {
            var c = a.__CE_registry;
            if (c && (a.defaultView || a.__CE_isImportDocument)) return W(c, b);
        };
        function wa(a, b, c, e) {
            var d = b.__CE_registry;
            if (d && (null === e || "http://www.w3.org/1999/xhtml" === e) && (d = W(d, c)))
                try {
                    var f = new d.constructorFunction();
                    if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
                    if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
                    if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");
                    if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
                    if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
                    if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
                    if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
                    return f;
                } catch (g) {
                    return V(g), (b = null === e ? p.call(b, c) : q.call(b, e, c)), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), (b.__CE_state = 2), (b.__CE_definition = void 0), Q(a, b), b;
                }
            b = null === e ? p.call(b, c) : q.call(b, e, c);
            Q(a, b);
            return b;
        }
        function V(a) {
            var b = a.message,
                c = a.sourceURL || a.fileName || "",
                e = a.line || a.lineNumber || 0,
                d = a.column || a.columnNumber || 0,
                f = void 0;
            void 0 === ErrorEvent.prototype.initErrorEvent
                ? (f = new ErrorEvent("error", { cancelable: !0, message: b, filename: c, lineno: e, colno: d, error: a }))
                : ((f = document.createEvent("ErrorEvent")),
                  f.initErrorEvent("error", !1, !0, b, c, e),
                  (f.preventDefault = function () {
                      Object.defineProperty(this, "defaultPrevented", {
                          configurable: !0,
                          get: function () {
                              return !0;
                          },
                      });
                  }));
            void 0 === f.error &&
                Object.defineProperty(f, "error", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            window.dispatchEvent(f);
            f.defaultPrevented || console.error(a);
        }
        function xa() {
            var a = this;
            this.D = void 0;
            this.C = new Promise(function (b) {
                a.H = b;
            });
        }
        xa.prototype.resolve = function (a) {
            if (this.D) throw Error("Already resolved.");
            this.D = a;
            this.H(a);
        };
        function X(a) {
            var b = document;
            this.l = void 0;
            this.a = a;
            this.g = b;
            U(this.a, this.g);
            "loading" === this.g.readyState && ((this.l = new MutationObserver(this.F.bind(this))), this.l.observe(this.g, { childList: !0, subtree: !0 }));
        }
        X.prototype.disconnect = function () {
            this.l && this.l.disconnect();
        };
        X.prototype.F = function (a) {
            var b = this.g.readyState;
            ("interactive" !== b && "complete" !== b) || this.disconnect();
            for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, e = 0; e < c.length; e++) U(this.a, c[e]);
        };
        function Y(a) {
            this.i = new Map();
            this.j = new Map();
            this.v = new Map();
            this.o = !1;
            this.u = new Map();
            this.h = function (b) {
                return b();
            };
            this.b = !1;
            this.m = [];
            this.a = a;
            this.A = a.K ? new X(a) : void 0;
        }
        n = Y.prototype;
        n.J = function (a, b) {
            var c = this;
            if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
            ya(this, a);
            this.i.set(a, b);
            this.m.push(a);
            this.b ||
                ((this.b = !0),
                this.h(function () {
                    return c.B();
                }));
        };
        n.define = function (a, b) {
            var c = this;
            if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            ya(this, a);
            za(this, a, b);
            this.m.push(a);
            this.b ||
                ((this.b = !0),
                this.h(function () {
                    return c.B();
                }));
        };
        function ya(a, b) {
            if (!ra(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
            if (W(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
            if (a.o) throw Error("A custom element is already being defined.");
        }
        function za(a, b, c) {
            a.o = !0;
            var e;
            try {
                var d = c.prototype;
                if (!(d instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                var f = function (m) {
                    var y = d[m];
                    if (void 0 !== y && !(y instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
                    return y;
                };
                var g = f("connectedCallback");
                var h = f("disconnectedCallback");
                var k = f("adoptedCallback");
                var l = ((e = f("attributeChangedCallback")) && c.observedAttributes) || [];
            } catch (m) {
                throw m;
            } finally {
                a.o = !1;
            }
            c = { localName: b, constructorFunction: c, connectedCallback: g, disconnectedCallback: h, adoptedCallback: k, attributeChangedCallback: e, observedAttributes: l, constructionStack: [] };
            a.j.set(b, c);
            a.v.set(c.constructorFunction, c);
            return c;
        }
        n.upgrade = function (a) {
            U(this.a, a);
        };
        n.B = function () {
            var a = this;
            if (!1 !== this.b) {
                this.b = !1;
                for (var b = [], c = this.m, e = new Map(), d = 0; d < c.length; d++) e.set(c[d], []);
                U(this.a, document, {
                    upgrade: function (k) {
                        if (void 0 === k.__CE_state) {
                            var l = k.localName,
                                m = e.get(l);
                            m ? m.push(k) : a.j.has(l) && b.push(k);
                        }
                    },
                });
                for (d = 0; d < b.length; d++) S(this.a, b[d]);
                for (d = 0; d < c.length; d++) {
                    for (var f = c[d], g = e.get(f), h = 0; h < g.length; h++) S(this.a, g[h]);
                    (f = this.u.get(f)) && f.resolve(void 0);
                }
                c.length = 0;
            }
        };
        n.get = function (a) {
            if ((a = W(this, a))) return a.constructorFunction;
        };
        n.whenDefined = function (a) {
            if (!ra(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
            var b = this.u.get(a);
            if (b) return b.C;
            b = new xa();
            this.u.set(a, b);
            var c = this.j.has(a) || this.i.has(a);
            a = -1 === this.m.indexOf(a);
            c && a && b.resolve(void 0);
            return b.C;
        };
        n.polyfillWrapFlushCallback = function (a) {
            this.A && this.A.disconnect();
            var b = this.h;
            this.h = function (c) {
                return a(function () {
                    return b(c);
                });
            };
        };
        function W(a, b) {
            var c = a.j.get(b);
            if (c) return c;
            if ((c = a.i.get(b))) {
                a.i.delete(b);
                try {
                    return za(a, b, c());
                } catch (e) {
                    V(e);
                }
            }
        }
        window.CustomElementRegistry = Y;
        Y.prototype.define = Y.prototype.define;
        Y.prototype.upgrade = Y.prototype.upgrade;
        Y.prototype.get = Y.prototype.get;
        Y.prototype.whenDefined = Y.prototype.whenDefined;
        Y.prototype.polyfillDefineLazy = Y.prototype.J;
        Y.prototype.polyfillWrapFlushCallback = Y.prototype.polyfillWrapFlushCallback;
        function Z(a, b, c) {
            function e(d) {
                return function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
                    h = [];
                    for (var k = [], l = 0; l < g.length; l++) {
                        var m = g[l];
                        m instanceof Element && J(m) && k.push(m);
                        if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);
                        else h.push(m);
                    }
                    d.apply(this, g);
                    for (g = 0; g < k.length; g++) T(a, k[g]);
                    if (J(this)) for (g = 0; g < h.length; g++) (k = h[g]), k instanceof Element && R(a, k);
                };
            }
            void 0 !== c.prepend && (b.prepend = e(c.prepend));
            void 0 !== c.append && (b.append = e(c.append));
        }
        function Aa(a) {
            Document.prototype.createElement = function (b) {
                return wa(a, this, b, null);
            };
            Document.prototype.importNode = function (b, c) {
                b = aa.call(this, b, !!c);
                this.__CE_registry ? U(a, b) : P(a, b);
                return b;
            };
            Document.prototype.createElementNS = function (b, c) {
                return wa(a, this, c, b);
            };
            Z(a, Document.prototype, { prepend: ba, append: ca });
        }
        function Ba(a) {
            function b(e) {
                return function (d) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g - 0] = arguments[g];
                    g = [];
                    for (var h = [], k = 0; k < f.length; k++) {
                        var l = f[k];
                        l instanceof Element && J(l) && h.push(l);
                        if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);
                        else g.push(l);
                    }
                    e.apply(this, f);
                    for (f = 0; f < h.length; f++) T(a, h[f]);
                    if (J(this)) for (f = 0; f < g.length; f++) (h = g[f]), h instanceof Element && R(a, h);
                };
            }
            var c = Element.prototype;
            void 0 !== ja && (c.before = b(ja));
            void 0 !== ka && (c.after = b(ka));
            void 0 !== la &&
                (c.replaceWith = function (e) {
                    for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
                    f = [];
                    for (var g = [], h = 0; h < d.length; h++) {
                        var k = d[h];
                        k instanceof Element && J(k) && g.push(k);
                        if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) f.push(k);
                        else f.push(k);
                    }
                    h = J(this);
                    la.apply(this, d);
                    for (d = 0; d < g.length; d++) T(a, g[d]);
                    if (h) for (T(a, this), d = 0; d < f.length; d++) (g = f[d]), g instanceof Element && R(a, g);
                });
            void 0 !== ma &&
                (c.remove = function () {
                    var e = J(this);
                    ma.call(this);
                    e && T(a, this);
                });
        }
        function Ca(a) {
            function b(d, f) {
                Object.defineProperty(d, "innerHTML", {
                    enumerable: f.enumerable,
                    configurable: !0,
                    get: f.get,
                    set: function (g) {
                        var h = this,
                            k = void 0;
                        J(this) &&
                            ((k = []),
                            O(a, this, function (y) {
                                y !== h && k.push(y);
                            }));
                        f.set.call(this, g);
                        if (k)
                            for (var l = 0; l < k.length; l++) {
                                var m = k[l];
                                1 === m.__CE_state && a.disconnectedCallback(m);
                            }
                        this.ownerDocument.__CE_registry ? U(a, this) : P(a, this);
                        return g;
                    },
                });
            }
            function c(d, f) {
                d.insertAdjacentElement = function (g, h) {
                    var k = J(h);
                    g = f.call(this, g, h);
                    k && T(a, h);
                    J(g) && R(a, h);
                    return g;
                };
            }
            function e(d, f) {
                function g(h, k) {
                    for (var l = []; h !== k; h = h.nextSibling) l.push(h);
                    for (k = 0; k < l.length; k++) U(a, l[k]);
                }
                d.insertAdjacentHTML = function (h, k) {
                    h = h.toLowerCase();
                    if ("beforebegin" === h) {
                        var l = this.previousSibling;
                        f.call(this, h, k);
                        g(l || this.parentNode.firstChild, this);
                    } else if ("afterbegin" === h) (l = this.firstChild), f.call(this, h, k), g(this.firstChild, l);
                    else if ("beforeend" === h) (l = this.lastChild), f.call(this, h, k), g(l || this.firstChild, null);
                    else if ("afterend" === h) (l = this.nextSibling), f.call(this, h, k), g(this.nextSibling, l);
                    else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                };
            }
            z &&
                (Element.prototype.attachShadow = function (d) {
                    d = z.call(this, d);
                    if (a.c && !d.__CE_patched) {
                        d.__CE_patched = !0;
                        for (var f = 0; f < a.f.length; f++) a.f[f](d);
                    }
                    return (this.__CE_shadowRoot = d);
                });
            A && A.get
                ? b(Element.prototype, A)
                : I && I.get
                ? b(HTMLElement.prototype, I)
                : va(a, function (d) {
                      b(d, {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                              return r.call(this, !0).innerHTML;
                          },
                          set: function (f) {
                              var g = "template" === this.localName,
                                  h = g ? this.content : this,
                                  k = q.call(document, this.namespaceURI, this.localName);
                              for (k.innerHTML = f; 0 < h.childNodes.length; ) v.call(h, h.childNodes[0]);
                              for (f = g ? k.content : k; 0 < f.childNodes.length; ) t.call(h, f.childNodes[0]);
                          },
                      });
                  });
            Element.prototype.setAttribute = function (d, f) {
                if (1 !== this.__CE_state) return C.call(this, d, f);
                var g = B.call(this, d);
                C.call(this, d, f);
                f = B.call(this, d);
                a.attributeChangedCallback(this, d, g, f, null);
            };
            Element.prototype.setAttributeNS = function (d, f, g) {
                if (1 !== this.__CE_state) return F.call(this, d, f, g);
                var h = E.call(this, d, f);
                F.call(this, d, f, g);
                g = E.call(this, d, f);
                a.attributeChangedCallback(this, f, h, g, d);
            };
            Element.prototype.removeAttribute = function (d) {
                if (1 !== this.__CE_state) return D.call(this, d);
                var f = B.call(this, d);
                D.call(this, d);
                null !== f && a.attributeChangedCallback(this, d, f, null, null);
            };
            Element.prototype.removeAttributeNS = function (d, f) {
                if (1 !== this.__CE_state) return G.call(this, d, f);
                var g = E.call(this, d, f);
                G.call(this, d, f);
                var h = E.call(this, d, f);
                g !== h && a.attributeChangedCallback(this, f, g, h, d);
            };
            oa ? c(HTMLElement.prototype, oa) : H && c(Element.prototype, H);
            pa ? e(HTMLElement.prototype, pa) : fa && e(Element.prototype, fa);
            Z(a, Element.prototype, { prepend: ha, append: ia });
            Ba(a);
        }
        var Da = {};
        function Ea(a) {
            function b() {
                var c = this.constructor;
                var e = document.__CE_registry.v.get(c);
                if (!e) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                var d = e.constructionStack;
                if (0 === d.length) return (d = p.call(document, e.localName)), Object.setPrototypeOf(d, c.prototype), (d.__CE_state = 1), (d.__CE_definition = e), Q(a, d), d;
                var f = d.length - 1,
                    g = d[f];
                if (g === Da) throw Error("Failed to construct '" + e.localName + "': This element was already constructed.");
                d[f] = Da;
                Object.setPrototypeOf(g, c.prototype);
                Q(a, g);
                return g;
            }
            b.prototype = na.prototype;
            Object.defineProperty(HTMLElement.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });
            window.HTMLElement = b;
        }
        function Fa(a) {
            function b(c, e) {
                Object.defineProperty(c, "textContent", {
                    enumerable: e.enumerable,
                    configurable: !0,
                    get: e.get,
                    set: function (d) {
                        if (this.nodeType === Node.TEXT_NODE) e.set.call(this, d);
                        else {
                            var f = void 0;
                            if (this.firstChild) {
                                var g = this.childNodes,
                                    h = g.length;
                                if (0 < h && J(this)) {
                                    f = Array(h);
                                    for (var k = 0; k < h; k++) f[k] = g[k];
                                }
                            }
                            e.set.call(this, d);
                            if (f) for (d = 0; d < f.length; d++) T(a, f[d]);
                        }
                    },
                });
            }
            Node.prototype.insertBefore = function (c, e) {
                if (c instanceof DocumentFragment) {
                    var d = K(c);
                    c = u.call(this, c, e);
                    if (J(this)) for (e = 0; e < d.length; e++) R(a, d[e]);
                    return c;
                }
                d = c instanceof Element && J(c);
                e = u.call(this, c, e);
                d && T(a, c);
                J(this) && R(a, c);
                return e;
            };
            Node.prototype.appendChild = function (c) {
                if (c instanceof DocumentFragment) {
                    var e = K(c);
                    c = t.call(this, c);
                    if (J(this)) for (var d = 0; d < e.length; d++) R(a, e[d]);
                    return c;
                }
                e = c instanceof Element && J(c);
                d = t.call(this, c);
                e && T(a, c);
                J(this) && R(a, c);
                return d;
            };
            Node.prototype.cloneNode = function (c) {
                c = r.call(this, !!c);
                this.ownerDocument.__CE_registry ? U(a, c) : P(a, c);
                return c;
            };
            Node.prototype.removeChild = function (c) {
                var e = c instanceof Element && J(c),
                    d = v.call(this, c);
                e && T(a, c);
                return d;
            };
            Node.prototype.replaceChild = function (c, e) {
                if (c instanceof DocumentFragment) {
                    var d = K(c);
                    c = w.call(this, c, e);
                    if (J(this)) for (T(a, e), e = 0; e < d.length; e++) R(a, d[e]);
                    return c;
                }
                d = c instanceof Element && J(c);
                var f = w.call(this, c, e),
                    g = J(this);
                g && T(a, e);
                d && T(a, c);
                g && R(a, c);
                return f;
            };
            x && x.get
                ? b(Node.prototype, x)
                : ua(a, function (c) {
                      b(c, {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                              for (var e = [], d = this.firstChild; d; d = d.nextSibling) d.nodeType !== Node.COMMENT_NODE && e.push(d.textContent);
                              return e.join("");
                          },
                          set: function (e) {
                              for (; this.firstChild; ) v.call(this, this.firstChild);
                              null != e && "" !== e && t.call(this, document.createTextNode(e));
                          },
                      });
                  });
        }
        var N = window.customElements;
        function Ga() {
            var a = new ta();
            Ea(a);
            Aa(a);
            Z(a, DocumentFragment.prototype, { prepend: da, append: ea });
            Fa(a);
            Ca(a);
            a = new Y(a);
            document.__CE_registry = a;
            Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: a });
        }
        (N && !N.forcePolyfill && "function" == typeof N.define && "function" == typeof N.get) || Ga();
        window.__CE_installPolyfill = Ga; /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    })();
    (function () {
        var b = window.document;
        window.WebComponents = window.WebComponents || {};
        var a = function () {
            window.removeEventListener("DOMContentLoaded", a);
            window.WebComponents.ready = !0;
            var c = b.createEvent("CustomEvent");
            c.initEvent("WebComponentsReady", !0, !0);
            setTimeout(function () {
                window.document.dispatchEvent(c);
            }, 0);
        };
        "complete" === b.readyState ? a() : window.addEventListener("DOMContentLoaded", a);
    })();
    (function () {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        "use strict";
        var d,
            e =
                "function" == typeof Object.create
                    ? Object.create
                    : function (a) {
                          var c = function () {};
                          c.prototype = a;
                          return new c();
                      },
            f;
        if ("function" == typeof Object.setPrototypeOf) f = Object.setPrototypeOf;
        else {
            var g;
            a: {
                var h = { l: !0 },
                    l = {};
                try {
                    l.__proto__ = h;
                    g = l.l;
                    break a;
                } catch (a) {}
                g = !1;
            }
            f = g
                ? function (a, c) {
                      a.__proto__ = c;
                      if (a.__proto__ !== c) throw new TypeError(a + " is not extensible");
                      return a;
                  }
                : null;
        }
        var m = f;
        var n = function (a, c) {
            var b = void 0 === b ? null : b;
            var k = document.createEvent("CustomEvent");
            k.initCustomEvent(a, !0, !0, b);
            c.dispatchEvent(k);
        };
        var p = function () {
                var a = HTMLElement.call(this) || this;
                a.j = a.m.bind(a);
                a.a = [];
                a.g = !1;
                a.f = !1;
                a.b = !1;
                a.i = -1;
                a.h = -1;
                a.c = !1;
                return a;
            },
            q = HTMLElement;
        p.prototype = e(q.prototype);
        p.prototype.constructor = p;
        if (m) m(p, q);
        else
            for (var r in q)
                if ("prototype" != r)
                    if (Object.defineProperties) {
                        var t = Object.getOwnPropertyDescriptor(q, r);
                        t && Object.defineProperty(p, r, t);
                    } else p[r] = q[r];
        d = p.prototype;
        d.connectedCallback = function () {
            var a = this;
            this.i = parseInt(this.getAttribute("data-gwd-width"), 10) || this.clientWidth;
            this.h = parseInt(this.getAttribute("data-gwd-height"), 10) || this.clientHeight;
            this.addEventListener("ready", this.j, !1);
            this.style.visibility = "hidden";
            setTimeout(function () {
                a.a = Array.prototype.slice.call(a.querySelectorAll("*")).filter(function (c) {
                    return "function" != typeof c.gwdLoad || "function" != typeof c.gwdIsLoaded || c.gwdIsLoaded() ? !1 : !0;
                }, a);
                a.g = !0;
                0 < a.a.length ? (a.f = !1) : u(a);
                a.b = !0;
                n("attached", a);
            }, 0);
        };
        d.disconnectedCallback = function () {
            this.removeEventListener("ready", this.j, !1);
            this.classList.remove("gwd-play-animation");
            n("detached", this);
        };
        d.gwdActivate = function () {
            this.classList.remove("gwd-inactive");
            Array.prototype.slice.call(this.querySelectorAll("*")).forEach(function (a) {
                "function" == typeof a.gwdActivate && "function" == typeof a.gwdIsActive && 0 == a.gwdIsActive() && a.gwdActivate();
            });
            this.c = !0;
            this.b ? (this.b = !1) : n("attached", this);
            n("pageactivated", this);
        };
        d.gwdDeactivate = function () {
            this.classList.add("gwd-inactive");
            this.classList.remove("gwd-play-animation");
            var a = Array.prototype.slice.call(this.querySelectorAll("*"));
            a.push(this);
            for (var c = 0; c < a.length; c++) {
                var b = a[c];
                if (b.classList && (b.classList.remove("gwd-pause-animation"), b.hasAttribute("data-gwd-current-label"))) {
                    var k = b.getAttribute("data-gwd-current-label");
                    b.classList.remove(k);
                    b.removeAttribute("data-gwd-current-label");
                }
                delete b.gwdGotoCounters;
                b != this && "function" == typeof b.gwdDeactivate && "function" == typeof b.gwdIsActive && 1 == b.gwdIsActive() && b.gwdDeactivate();
            }
            this.c = !1;
            n("pagedeactivated", this);
            n("detached", this);
        };
        d.gwdIsActive = function () {
            return this.c;
        };
        d.gwdIsLoaded = function () {
            return this.g && 0 == this.a.length;
        };
        d.gwdLoad = function () {
            if (this.gwdIsLoaded()) u(this);
            else for (var a = this.a.length - 1; 0 <= a; a--) this.a[a].gwdLoad();
        };
        d.m = function (a) {
            a = this.a.indexOf(a.target);
            -1 < a && (this.a.splice(a, 1), 0 == this.a.length && u(this));
        };
        var u = function (a) {
            a.style.visibility = "";
            a.f || (n("ready", a), n("pageload", a));
            a.f = !0;
        };
        p.prototype.gwdPresent = function () {
            n("pagepresenting", this);
            this.classList.add("gwd-play-animation");
        };
        p.prototype.isPortrait = function () {
            return this.h >= this.i;
        };
        customElements.define("gwd-page", p);
    }.call(this));
    (function () {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        "use strict";
        var g,
            k = function (a) {
                a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    if (c && c.Math == Math) return c;
                }
                throw Error("Cannot find global object");
            },
            m = k(this),
            n =
                "function" == typeof Object.create
                    ? Object.create
                    : function (a) {
                          var b = function () {};
                          b.prototype = a;
                          return new b();
                      },
            p;
        if ("function" == typeof Object.setPrototypeOf) p = Object.setPrototypeOf;
        else {
            var q;
            a: {
                var r = { G: !0 },
                    t = {};
                try {
                    t.__proto__ = r;
                    q = t.G;
                    break a;
                } catch (a) {}
                q = !1;
            }
            p = q
                ? function (a, b) {
                      a.__proto__ = b;
                      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                      return a;
                  }
                : null;
        }
        var u = p,
            goog = goog || {},
            v = this || self,
            w = Date.now,
            x = function (a, b) {
                a = a.split(".");
                var c = v;
                a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                for (var d; a.length && (d = a.shift()); ) a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
            };
        var y = function (a, b, c) {
                c = void 0 === c ? null : c;
                var d = document.createEvent("CustomEvent");
                d.initCustomEvent(a, !0, !0, c);
                b.dispatchEvent(d);
            },
            z = function (a, b, c) {
                var d = function (e) {
                    a.removeEventListener(b, d);
                    c(e);
                };
                a.addEventListener(b, d);
            };
        var A = "center top bottom left right transparent".split(" ");
        var B = ["-ms-", "-moz-", "-webkit-", ""],
            C = function (a, b) {
                var c = void 0 === c ? !1 : c;
                for (var d, e, f = 0; f < B.length; f++) (d = B[f] + "transition-duration"), (e = (c ? B[f] : "") + b), a.style.setProperty(d, e);
            },
            D = function (a) {
                var b = document,
                    c = b.getElementsByTagName("head")[0];
                if (!c) {
                    var d = b.getElementsByTagName("body")[0];
                    c = b.createElement("head");
                    d.parentNode.insertBefore(c, d);
                }
                b = b.createElement("style");
                b.textContent = a;
                c.appendChild(b);
                return b;
            };
        var E = function (a) {
                for (var b = 0; b < A.length; b++) a.classList.remove(A[b]);
            },
            F = function (a, b) {
                var c = function () {
                    a.removeEventListener("webkitTransitionEnd", c);
                    a.removeEventListener("transitionend", c);
                    b();
                };
                a.addEventListener("webkitTransitionEnd", c);
                a.addEventListener("transitionend", c);
            },
            G = function (a, b, c, d) {
                c = "transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0," + c + "," + d + ",0,1);";
                return a + "." + b + "{-webkit-" + c + "-moz-" + c + "-ms-" + c + c + "}";
            },
            H = function (a, b, c) {
                a = (a && "#") + a + ".gwd-pagedeck > .gwd-page";
                return G(a, "center", 0, 0) + G(a, "top", 0, c) + G(a, "bottom", 0, -c) + G(a, "left", b, 0) + G(a, "right", -b, 0);
            },
            I = function (a, b, c, d, e, f, h) {
                d = void 0 === d ? "none" : d;
                this.b = a;
                this.c = b;
                this.B = c;
                this.h = "none" == d ? 0 : void 0 === e ? 1e3 : e;
                this.i = void 0 === f ? "linear" : f;
                this.l = [];
                if (this.h) {
                    a = d;
                    h = void 0 === h ? "top" : h;
                    if (this.b) {
                        this.b.classList.add("gwd-page");
                        this.b.classList.add("center");
                        b = "center";
                        if ("push" == a)
                            switch (h) {
                                case "top":
                                    b = "top";
                                    break;
                                case "bottom":
                                    b = "bottom";
                                    break;
                                case "left":
                                    b = "left";
                                    break;
                                case "right":
                                    b = "right";
                            }
                        this.l.push(b);
                        "fade" == a && this.l.push("transparent");
                    }
                    b = "center";
                    if ("none" != a && "fade" != a)
                        switch (h) {
                            case "top":
                                b = "bottom";
                                break;
                            case "bottom":
                                b = "top";
                                break;
                            case "left":
                                b = "right";
                                break;
                            case "right":
                                b = "left";
                        }
                    this.c.classList.add(b);
                    this.c.classList.add("gwd-page");
                    "fade" == a && this.c.classList.add("transparent");
                }
            };
        I.prototype.start = function () {
            if (this.h) {
                F(this.c, this.N.bind(this));
                this.b && (C(this.b, this.h + "ms"), this.b.classList.add(this.i));
                C(this.c, this.h + "ms");
                this.c.classList.add(this.i);
                var a = this.c;
                a.setAttribute("gwd-reflow", a.offsetWidth);
                if (this.b) for (a = 0; a < this.l.length; a++) this.b.classList.add(this.l[a]);
                E(this.c);
            } else this.B();
        };
        I.prototype.N = function () {
            this.b && (E(this.b), C(this.b, 0), this.b.classList.remove(this.i));
            C(this.c, 0);
            this.c.classList.remove(this.i);
            this.B();
        };
        Object.freeze && Object.freeze([]);
        var J = function (a, b) {
            var c = (c = v.performance) && c.now && c.timing ? Math.floor(c.now() + c.timing.navigationStart) : w();
            a = { label: a, type: 9, value: c };
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a);
        };
        var L = {},
            M = !1,
            N = !1;
        L.L = function (a) {
            M || ((M = !0), J("11", a));
        };
        L.A = function (a) {
            N || ((N = !0), J("12", a));
        };
        L.M = function (a, b, c) {
            c = void 0 === c ? 0 : c;
            var d = b;
            d = void 0 === d ? v : d;
            if ((d = (d = d.performance) && d.now ? d.now() : null)) (a = { label: a, type: c, value: d }), (b = b.google_js_reporting_queue = b.google_js_reporting_queue || []), 2048 > b.length && b.push(a);
        };
        L.reset = function (a) {
            N = M = !1;
            (a.google_js_reporting_queue = a.google_js_reporting_queue || []).length = 0;
        };
        x("gwd.rumUtil", L);
        x("gwd.rumUtil.logContentLoading", L.L);
        x("gwd.rumUtil.logContentRendered", L.A);
        x("gwd.rumUtil.logTimingEvent", L.M);
        x("gwd.rumUtil.reset", L.reset);
        var O = function () {
                var a = HTMLElement.call(this) || this;
                z(window, "WebComponentsReady", a.K.bind(a));
                a.u = a.j.bind(a, "shake");
                a.v = a.j.bind(a, "tilt");
                a.s = a.j.bind(a, "rotatetoportrait");
                a.o = a.j.bind(a, "rotatetolandscape");
                a.a = [];
                a.C = a.J.bind(a);
                a.H = a.I.bind(a);
                a.D = null;
                a.g = null;
                a.f = -1;
                a.m = !1;
                return a;
            },
            P = HTMLElement;
        O.prototype = n(P.prototype);
        O.prototype.constructor = O;
        if (u) u(O, P);
        else
            for (var Q in P)
                if ("prototype" != Q)
                    if (Object.defineProperties) {
                        var R = Object.getOwnPropertyDescriptor(P, Q);
                        R && Object.defineProperty(O, Q, R);
                    } else O[Q] = P[Q];
        O.prototype.connectedCallback = function () {
            this.addEventListener("pageload", this.C, !1);
            document.body.addEventListener("shake", this.u, !0);
            document.body.addEventListener("tilt", this.v, !0);
            document.body.addEventListener("rotatetoportrait", this.s, !0);
            document.body.addEventListener("rotatetolandscape", this.o, !0);
        };
        O.prototype.disconnectedCallback = function () {
            this.removeEventListener("pageload", this.C, !1);
            document.body &&
                (document.body.removeEventListener("shake", this.u, !0),
                document.body.removeEventListener("tilt", this.v, !0),
                document.body.removeEventListener("rotatetoportrait", this.s, !0),
                document.body.removeEventListener("rotatetolandscape", this.o, !0));
        };
        O.prototype.K = function () {
            this.classList.add("gwd-pagedeck");
            this.D || (this.D = D(H(this.id, this.offsetWidth, this.offsetHeight)));
            this.a = Array.prototype.slice.call(this.querySelectorAll("gwd-page"));
            this.a.forEach(function (a) {
                a.classList.add("gwd-page");
            });
            for (y("beforepagesdetached", this, { pages: this.a.slice() }); this.firstChild; ) this.removeChild(this.firstChild);
            -1 == this.f && void 0 !== this.F && this.goToPage(this.F);
        };
        var T = function (a, b, c, d, e, f) {
            if (!(a.f == b || 0 > b || b > a.a.length - 1 || a.g)) {
                var h = a.a[a.f],
                    l = a.a[b];
                a.f = b;
                a.g = new I(h, l, a.H, c, d, e, f);
                var K = l.gwdLoad && !l.gwdIsLoaded();
                a.m = K;
                z(l, "attached", function () {
                    l.gwdActivate();
                    K ? l.gwdLoad() : S(a);
                });
                a.appendChild(l);
            }
        };
        O.prototype.J = function (a) {
            this.m && a.target.parentNode == this && (S(this), (this.m = !1));
        };
        var S = function (a) {
            (0, L.A)(window);
            a.g.start();
            y("pagetransitionstart", a);
        };
        g = O.prototype;
        g.I = function () {
            if (this.g) {
                var a = this.g.b,
                    b = this.g.c;
                this.g = null;
                y("pagetransitionend", this, { outgoingPage: a ? a : null, incomingPage: b });
                a && a.gwdDeactivate();
                b.gwdPresent();
            }
        };
        g.findPageIndexByAttributeValue = function (a, b) {
            for (var c = this.a.length, d, e = 0; e < c; e++)
                if (((d = this.a[e]), "boolean" == typeof b)) {
                    if (d.hasAttribute(a)) return e;
                } else if (d.getAttribute(a) == b) return e;
            return -1;
        };
        g.goToNextPage = function (a, b, c, d, e) {
            var f = this.f,
                h = f + 1;
            h >= this.a.length && (h = a ? 0 : f);
            T(this, h, b, c, d, e);
        };
        g.goToPreviousPage = function (a, b, c, d, e) {
            var f = this.f,
                h = this.a.length,
                l = f - 1;
            0 > l && (l = a ? h - 1 : f);
            T(this, l, b, c, d, e);
        };
        g.goToPage = function (a, b, c, d, e) {
            this.a.length ? ((a = "number" == typeof a ? a : this.findPageIndexByAttributeValue("id", a)), 0 <= a && T(this, a, b, c, d, e)) : (this.F = a);
        };
        g.getPages = function () {
            return this.a;
        };
        g.getPage = function (a) {
            if ("number" != typeof a) {
                if (!a) return null;
                a = this.findPageIndexByAttributeValue("id", a);
            }
            return 0 > a || a > this.a.length - 1 ? null : this.a[a];
        };
        g.getCurrentPage = function () {
            return this.getPage(this.f);
        };
        g.getDefaultPage = function () {
            var a = this.getAttribute("default-page");
            return a ? this.getPage(this.findPageIndexByAttributeValue("id", a)) : this.getPage(0);
        };
        g.getOrientationSpecificPage = function (a, b) {
            b = this.getPage(b);
            var c = b.getAttribute("alt-orientation-page");
            if (!c) return b;
            var d = b.isPortrait();
            a = 1 == a;
            c = this.getPage(c);
            return a == d ? b : c;
        };
        g.j = function (a, b) {
            if (b.target == document.body) {
                var c = this.getPage(this.f);
                y(a, c, b.detail);
            }
        };
        g.getElementById = function (a) {
            for (var b = this.a.length, c = 0; c < b; c++) {
                var d = this.a[c].querySelector("#" + a);
                if (d) return d;
            }
            return null;
        };
        g.getElementsBySelector = function (a) {
            for (var b = this.a.length, c = [], d = 0; d < b; d++) {
                var e = this.a[d].querySelectorAll(a);
                e && (c = c.concat(Array.prototype.slice.call(e)));
            }
            return c;
        };
        m.Object.defineProperties(O.prototype, {
            currentIndex: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return 0 <= this.f ? this.f : void 0;
                },
            },
        });
        customElements.define("gwd-pagedeck", O);
    }.call(this));
    (function () {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        "use strict";
        var g,
            h =
                "function" == typeof Object.create
                    ? Object.create
                    : function (a) {
                          var b = function () {};
                          b.prototype = a;
                          return new b();
                      },
            k;
        if ("function" == typeof Object.setPrototypeOf) k = Object.setPrototypeOf;
        else {
            var l;
            a: {
                var n = { $: !0 },
                    p = {};
                try {
                    p.__proto__ = n;
                    l = p.$;
                    break a;
                } catch (a) {}
                l = !1;
            }
            k = l
                ? function (a, b) {
                      a.__proto__ = b;
                      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                      return a;
                  }
                : null;
        }
        var q = k,
            goog = goog || {},
            r = this || self,
            t = Date.now,
            u = function (a, b) {
                a = a.split(".");
                var c = r;
                a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                for (var d; a.length && (d = a.shift()); ) a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
            };
        var v = function () {
            this.A = {};
        };
        v.prototype.add = function (a, b) {
            a = "string" === typeof a ? a : a.getString();
            this.A[a] || (this.A[a] = []);
            this.A[a].push(b);
        };
        var w = function (a) {
                var b = [],
                    c = "object" == typeof gwd && "GwdId" in gwd,
                    d;
                for (d in a.A) b.push(c ? new gwd.GwdId(d) : d);
                return b;
            },
            x = function (a, b) {
                return b ? a.A["string" === typeof b ? b : b.getString()] || [] : [];
            };
        var y = function (a, b) {
                if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
                if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
                for (; b && a != b; ) b = b.parentNode;
                return b == a;
            },
            z = function (a) {
                return "gwd-page" == a.tagName.toLowerCase() || "gwd-page" == a.getAttribute("is");
            },
            B = function (a) {
                if (z(a)) return a;
                for (; a && 9 != a.nodeType; ) if ((a = a.parentElement) && z(a)) return a;
                return null;
            };
        var C = function (a, b) {
            this.i = a;
            this.aa = b;
            this.H = this.M.bind(this);
        };
        C.prototype.observe = function (a) {
            if (a.nodeType == Node.ELEMENT_NODE)
                for (var b = w(this.i), c = 0; c < b.length; c++) {
                    var d = D(b[c]);
                    if (d && y(a, d)) {
                        var e = x(this.i, b[c]);
                        if (e) for (var f = 0; f < e.length; f++) d.addEventListener(e[f].event, this.H, !1);
                    }
                }
        };
        C.prototype.M = function (a) {
            this.aa(a);
        };
        var D = function (a) {
            return "string" === typeof a ? document.getElementById(a) : a.getElement(document);
        };
        var E = function (a, b, c) {
            c = void 0 === c ? null : c;
            var d = document.createEvent("CustomEvent");
            d.initCustomEvent(a, !0, !0, c);
            b.dispatchEvent(d);
            return d;
        };
        Object.freeze && Object.freeze([]);
        var F = function (a, b) {
            var c = (c = r.performance) && c.now && c.timing ? Math.floor(c.now() + c.timing.navigationStart) : t();
            a = { label: a, type: 9, value: c };
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a);
        };
        var G = {},
            H = !1,
            I = !1;
        G.V = function (a) {
            H || ((H = !0), F("11", a));
        };
        G.ma = function (a) {
            I || ((I = !0), F("12", a));
        };
        G.na = function (a, b, c) {
            c = void 0 === c ? 0 : c;
            var d = b;
            d = void 0 === d ? r : d;
            if ((d = (d = d.performance) && d.now ? d.now() : null)) (a = { label: a, type: c, value: d }), (b = b.google_js_reporting_queue = b.google_js_reporting_queue || []), 2048 > b.length && b.push(a);
        };
        G.reset = function (a) {
            I = H = !1;
            (a.google_js_reporting_queue = a.google_js_reporting_queue || []).length = 0;
        };
        u("gwd.rumUtil", G);
        u("gwd.rumUtil.logContentLoading", G.V);
        u("gwd.rumUtil.logContentRendered", G.ma);
        u("gwd.rumUtil.logTimingEvent", G.na);
        u("gwd.rumUtil.reset", G.reset);
        var J = function () {
                var a = HTMLElement.call(this) || this;
                a.S = a.ga.bind(a);
                a.K = a.ia.bind(a);
                a.T = a.ha.bind(a);
                a.D = a.fa.bind(a);
                a.C = a.da.bind(a);
                a.F = E.bind(null, "expandfinish", a);
                a.B = E.bind(null, "collapsefinish", a);
                a.R = a.ea.bind(a);
                a.m = a.la.bind(a);
                a.H = a.M.bind(a);
                a.X = a.ja.bind(a);
                a.Z = a.ka.bind(a);
                a.h = null;
                a.c = null;
                a.v = !1;
                a.u = !1;
                a.N = [];
                a.s = !1;
                a.J = !1;
                a.o = null;
                a.j = !1;
                a.G = !1;
                a.I = window.innerHeight >= window.innerWidth ? 1 : 2;
                a.b = null;
                a.g = null;
                a.U = !1;
                return a;
            },
            K = HTMLElement;
        J.prototype = h(K.prototype);
        J.prototype.constructor = J;
        if (q) q(J, K);
        else
            for (var L in K)
                if ("prototype" != L)
                    if (Object.defineProperties) {
                        var M = Object.getOwnPropertyDescriptor(K, L);
                        M && Object.defineProperty(J, L, M);
                    } else J[L] = K[L];
        g = J.prototype;
        g.connectedCallback = function () {
            var a = this;
            this.U || ((this.J = this.hasAttribute("fullscreen")), (document.body.style.opacity = "0"), (this.U = !0));
            Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, this.D);
            Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, this.C);
            Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, this.D);
            Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, this.C);
            Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, this.F);
            Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, this.B);
            Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH, this.F);
            Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH, this.B);
            Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS, this.R);
            window.addEventListener("resize", this.Z, !1);
            (0, G.V)(window);
            setTimeout(function () {
                a.a = a.querySelector("gwd-pagedeck");
                a.a.addEventListener("pagetransitionend", a.X, !1);
                a.b = document.getElementById(a.getAttribute("data-provider"));
                a.g = document.querySelector("gwd-data-binder");
                var b = a.querySelector("gwd-metric-configuration"),
                    c = new v();
                if (b) {
                    b = Array.prototype.slice.call(b.getElementsByTagName("gwd-metric-event"));
                    for (var d = 0; d < b.length; d++) {
                        var e = b[d],
                            f = e.getAttribute("source");
                        if (f) {
                            var m = e.getAttribute("exit");
                            e = { event: e.getAttribute("event"), oa: e.getAttribute("metric") || m, ba: e.hasAttribute("cumulative"), exit: m };
                            c.add(N(f), e);
                        }
                    }
                }
                a.i = c;
                a.W = new C(a.i, a.H);
            }, 0);
        };
        g.disconnectedCallback = function () {
            Enabler.removeEventListener(studio.events.StudioEvent.INIT, this.S);
            Enabler.removeEventListener(studio.events.StudioEvent.VISIBLE, this.K);
            Enabler.removeEventListener(studio.events.StudioEvent.PAGE_LOADED, this.T);
            Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_START, this.D);
            Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_START, this.C);
            Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, this.D);
            Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, this.C);
            Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_FINISH, this.F);
            Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, this.B);
            Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH, this.F);
            Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH, this.B);
            Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS, this.R);
            this.a.removeEventListener("pagetransitionend", this.X, !1);
            window.removeEventListener("resize", this.Z, !1);
            this.b && this.h && this.b.removeEventListener("ready", this.h);
            this.g && this.c && this.g.removeEventListener("bindingfinished", this.c);
            Enabler.removeEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL, this.m, !1);
            window.removeEventListener("message", this.m, !1);
        };
        g.initAd = function () {
            this.s = !1;
            var a = this.S;
            Enabler.removeEventListener(studio.events.StudioEvent.INIT, a);
            Enabler.addEventListener(studio.events.StudioEvent.INIT, a);
            Enabler.isInitialized() && a();
        };
        g.exit = function (a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !0 : d;
            Enabler.exit(a, b);
            d && O(this);
            c && this.goToPage(e);
        };
        g.exitOverride = function (a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !0 : d;
            Enabler.exitOverride(a, b);
            d && O(this);
            c && this.goToPage(e);
        };
        g.incrementCounter = function (a, b) {
            Enabler.counter(a, b);
        };
        g.startTimer = function (a) {
            Enabler.startTimer(a);
        };
        g.stopTimer = function (a) {
            Enabler.stopTimer(a);
        };
        g.reportManualClose = function () {
            Enabler.reportManualClose();
        };
        g.M = function (a) {
            var b = a.target,
                c = N(b),
                d = c + ": " + a.type;
            a: {
                var e = x(this.i, c);
                for (var f = 0; f < e.length; f++)
                    if (e[f].event == a.type) {
                        e = e[f];
                        break a;
                    }
                e = void 0;
            }
            e.exit && a.detail && a.detail.url
                ? ((d = c + ": " + e.exit),
                  a.detail["exit-id"] && (d = a.detail["exit-id"]),
                  (b = ""),
                  null != a.detail["product-index"] && (b = a.detail["product-index"]),
                  this.b && 0 == (this.b.getAttribute("gwd-schema-id") || "").indexOf("dynamic_remarketing")
                      ? ((c = a.detail["action-event"]), (e = {}), c && ((e.clickX = c.clientX || c.changedTouches[0].clientX), (e.clickY = c.clientY || c.changedTouches[0].clientY)), Enabler.dynamicExit(d, a.detail.url, b, void 0, e))
                      : Enabler.exitOverride(d, a.detail.url),
                  (a.detail.handled = !0),
                  a.detail.collapse && this.goToPage())
                : (a = B(b)) && a.gwdIsActive() && this.incrementCounter(e.oa || d, e.ba);
        };
        g.ga = function () {
            var a = this;
            Enabler.removeEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL, this.m, !1);
            window.removeEventListener("message", this.m, !1);
            Enabler.isServingInLiveEnvironment() ? Enabler.addEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL, this.m, !1) : window.addEventListener("message", this.m, !1);
            var b = function () {
                if (a.hasAttribute("polite-load")) {
                    var d = a.T;
                    Enabler.isPageLoaded() ? d() : Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, d);
                } else (d = a.K), Enabler.isVisible() ? d() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, d);
            };
            if (this.J) {
                var c = function (d) {
                    a.o = !!d.supported;
                    a.o && E("fullscreensupport", a);
                    Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, c);
                    b();
                };
                Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, c);
                Enabler.queryFullscreenSupport();
            } else b();
        };
        g.ia = function (a) {
            var b = this;
            if (this.s) this.b && this.P(null);
            else {
                var c;
                a && (c = a.detail);
                var d = this.qa.bind(this, c);
                this.b && (d = this.ca.bind(this, d));
                if (this.J) {
                    Enabler.setResponsiveExpanding(!0);
                    var e = function (f) {
                        b.G = f;
                        d();
                    };
                    Enabler.loadModule(studio.module.ModuleId.GDN, function () {
                        var f = studio.sdk.gdn.getConfig();
                        f.isInCreativeToolsetContext() ? f.isInterstitial(e) : d();
                    });
                } else d();
            }
        };
        g.ha = function () {
            var a = this.K;
            Enabler.isVisible() ? a() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, a);
        };
        g.ca = function (a) {
            this.b ? (this.h && this.b.removeEventListener("ready", this.h), (this.h = this.P.bind(this, a)), this.b.isDataLoaded() && this.h(), this.b.addEventListener("ready", this.h)) : a();
        };
        g.P = function (a) {
            var b = !!a;
            if (this.g) {
                this.c && (this.g.removeEventListener("bindingfinished", this.c), (this.c = null));
                var c = this.b.getData();
                c && ((b = this.a.getElementsBySelector("*")), (b = b.concat(this.a.getPages())), this.g.bindData(c, b) ? this.Y(a) : ((this.c = this.Y.bind(this, a)), this.g.addEventListener("bindingfinished", this.c)), (b = !1));
            }
            b && a();
        };
        g.Y = function (a) {
            this.c && (this.g.removeEventListener("bindingfinished", this.c), (this.c = null));
            if (this.s) {
                var b = document.getElementsByTagName("gwd-text-helper");
                0 < b.length && b[0].refitAll();
            }
            E("dynamicelementsready", this);
            a && a();
        };
        g.qa = function (a) {
            this.s || ((this.s = !0), (document.body.style.opacity = ""), E("adinitialized", this, a), this.G ? ((a = this.a.getPage(this.a.findPageIndexByAttributeValue("expanded", !0))), this.goToPage(a.id)) : this.goToPage());
        };
        g.goToPage = function (a, b, c, d, e) {
            var f = this.a.getPage(this.a.currentIndex);
            if ((a = a ? this.a.getPage(a) : this.a.getDefaultPage())) {
                var m = !!f && !!a && !this.v && !this.G && !f.hasAttribute("expanded") && a.hasAttribute("expanded");
                f = !!f && !!a && !this.u && !this.G && f.hasAttribute("expanded") && !a.hasAttribute("expanded");
                (m && this.u) ||
                    (f && this.v) ||
                    (((this.f = a.id), b && (this.l = { transition: b, duration: c, easing: d, direction: e }), m)
                        ? this.J && !1 !== this.o
                            ? this.o && ((this.j = !0), Enabler.requestFullscreenExpand())
                            : Enabler.requestExpand()
                        : f
                        ? this.j
                            ? Enabler.requestFullscreenCollapse()
                            : Enabler.requestCollapse()
                        : ((this.u = this.v = !1), this.L()));
            }
        };
        g.fa = function () {
            E("expandstart", this);
            this.o ? ((this.j = !0), Enabler.finishFullscreenExpand()) : Enabler.finishExpand();
            if (!this.f) {
                var a = this.a.getPage(this.a.findPageIndexByAttributeValue("expanded", !0));
                a && (this.f = a.id);
            }
            a = this.a.getPage(this.a.currentIndex);
            this.v = !!a && this.f != a.id;
            window.setTimeout(this.L.bind(this), 30);
        };
        g.da = function () {
            E("collapsestart", this);
            this.j ? (Enabler.finishFullscreenCollapse(), (this.j = !1)) : Enabler.finishCollapse();
            this.f || (this.reportManualClose(), (this.f = this.a.getDefaultPage().id));
            var a = this.a.getPage(this.a.currentIndex);
            this.u = !!a && this.f != a.id;
            window.setTimeout(this.L.bind(this), 30);
        };
        g.la = function (a) {
            if (Enabler.isServingInLiveEnvironment()) var b = a;
            else {
                if (!a.data || "string" !== typeof a.data) return;
                try {
                    b = JSON.parse(a.data);
                } catch (c) {
                    return;
                }
                if (b.eventType !== studio.events.StudioEvent.HOSTPAGE_SCROLL) return;
            }
            E("hostpagescroll", this, b);
        };
        g.ka = function () {
            if (!this.f) {
                var a = window.innerHeight >= window.innerWidth ? 1 : 2;
                this.I != a && ((this.I = a), (a = this.a.getPage(this.a.currentIndex)) && window.setTimeout(this.goToPage.bind(this, a.id), 0));
            }
        };
        g.ea = function (a) {
            a && Enabler.setResponsiveSize(a.width, a.height);
        };
        g.L = function () {
            if (this.f) {
                this.I = window.innerHeight >= window.innerWidth ? 1 : 2;
                var a = this.a.getOrientationSpecificPage(this.I, this.f);
                this.l ? this.a.goToPage(a.id, this.l.transition, this.l.duration, this.l.easing, this.l.direction) : this.a.goToPage(a.id);
                this.j && a.classList.add("fs");
            }
            this.l = this.f = void 0;
        };
        g.ja = function (a) {
            this.u = this.v = !1;
            if (a.target == this.a) {
                var b = a.detail;
                a = b.outgoingPage;
                b = b.incomingPage;
                if (a) {
                    var c = this.W;
                    if (a.nodeType == Node.ELEMENT_NODE)
                        for (var d = w(c.i), e = 0; e < d.length; e++) {
                            var f = D(d[e]);
                            if (f && y(a, f)) for (var m = x(c.i, d[e]), A = 0; A < m.length; A++) f.removeEventListener(m[A].event, c.H, !1);
                        }
                    if ((a = a.querySelectorAll("video, gwd-video")) && 0 < a.length) for (this.O = []; this.N.length; ) studio.video.Reporter.detach(this.N.shift());
                }
                this.W.observe(b);
                (a = b.querySelectorAll("video, gwd-video")) &&
                    0 < a.length &&
                    ((b = studio.video && studio.video.Reporter), (c = this.pa.bind(this)), (this.O = Array.prototype.slice.call(a)), b ? c() : Enabler.loadModule(studio.module.ModuleId.VIDEO, c));
            }
        };
        g.pa = function () {
            for (var a, b; this.O.length; ) if (((b = this.O.shift()), (a = N(b)))) studio.video.Reporter.attach(a, "gwd-video" == b.tagName.toLowerCase() ? b.nativeElement : b, b.autoplay), this.N.push(a);
        };
        var N = function (a) {
                return "object" == typeof gwd && "GwdId" in gwd ? new gwd.GwdId(a).getString() : "string" == typeof a ? a : a.id;
            },
            O = function (a) {
                a = Array.prototype.slice.call(a.a.querySelectorAll("audio, video, gwd-video, gwd-youtube, gwd-youtube-livestream, gwd-audio"));
                for (var b = 0; b < a.length; b++) a[b].pause();
            };
        customElements.define("gwd-google-ad", J);
    }.call(this));
    (function () {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        "use strict";
        var d,
            e =
                "function" == typeof Object.create
                    ? Object.create
                    : function (a) {
                          var b = function () {};
                          b.prototype = a;
                          return new b();
                      },
            h = function (a) {
                a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    if (c && c.Math == Math) return c;
                }
                throw Error("Cannot find global object");
            },
            k = h(this),
            n;
        if ("function" == typeof Object.setPrototypeOf) n = Object.setPrototypeOf;
        else {
            var p;
            a: {
                var q = { j: !0 },
                    r = {};
                try {
                    r.__proto__ = q;
                    p = r.j;
                    break a;
                } catch (a) {}
                p = !1;
            }
            n = p
                ? function (a, b) {
                      a.__proto__ = b;
                      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                      return a;
                  }
                : null;
        }
        var u = n;
        var v = /^\d*\.?\d+\s\d*\.?\d+$/,
            w = function (a) {
                var b = !1,
                    c = a.getAttribute("focalpoint"),
                    g = a.getAttribute("scaling");
                ("cover" !== g && "none" !== g) || a.hasAttribute("disablefocalpoint") || !c || !v.test(c) || (b = !0);
                return b;
            };
        var x = function (a) {
                return "gwd-page" == a.tagName.toLowerCase() || "gwd-page" == a.getAttribute("is");
            },
            y = function (a) {
                if (x(a)) return a;
                for (; a && 9 != a.nodeType; ) if ((a = a.parentElement) && x(a)) return a;
                return null;
            };
        var z = function (a) {
            var b = !1,
                c = null;
            return function () {
                b = !0;
                c ||
                    (b && (a(), (b = !1)),
                    (c = window.setTimeout(function () {
                        c = null;
                        b && (a(), (b = !1));
                    }, 250)));
            };
        };
        var A = ["alignment", "alt", "focalpoint", "scaling", "source"],
            B = function () {
                var a = HTMLElement.call(this) || this;
                a.a = document.createElement("img");
                a.g = a.l.bind(a);
                a.i = z(a.m.bind(a));
                a.b = 0;
                a.c = -1;
                a.f = -1;
                a.h = !1;
                a.a.addEventListener("load", a.g, !1);
                a.a.addEventListener("error", a.g, !1);
                return a;
            },
            C = HTMLElement;
        B.prototype = e(C.prototype);
        B.prototype.constructor = B;
        if (u) u(B, C);
        else
            for (var D in C)
                if ("prototype" != D)
                    if (Object.defineProperties) {
                        var E = Object.getOwnPropertyDescriptor(C, D);
                        E && Object.defineProperty(B, D, E);
                    } else B[D] = C[D];
        d = B.prototype;
        d.connectedCallback = function () {
            if (!this.h) {
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                var a = this.getAttribute("src");
                a && (this.setAttribute("source", a), this.removeAttribute("src"));
                a = this.ownerDocument.createElement("div");
                a.classList.add("intermediate-element");
                a.appendChild(this.a);
                this.appendChild(a);
                this.h = !0;
            }
            this.gwdIsLoaded() || ((a = y(this)) ? a.gwdIsLoaded() && this.gwdLoad() : this.gwdLoad());
            w(this) && window.addEventListener("resize", this.i, !1);
        };
        d.disconnectedCallback = function () {
            window.removeEventListener("resize", this.i, !1);
        };
        d.attributeChangedCallback = function (a) {
            if ("source" == a) 0 !== this.b && this.gwdLoad();
            else if ("scaling" == a) F(this);
            else if ("alignment" == a) G(this);
            else if ("focalpoint" == a) H(this);
            else if ("alt" == a) {
                var b = this.a;
                if (this.hasAttribute(a)) {
                    var c = this.getAttribute(a);
                    b.setAttribute(a, c);
                } else b.removeAttribute(a);
            }
        };
        d.l = function (a) {
            if (2 != this.b) {
                a && "error" == a.type
                    ? ((this.b = 3), (this.c = this.f = -1), (this.a.style.backgroundImage = ""))
                    : ((-1 != this.f && -1 != this.c) || !this.getAttribute("source") || ((this.f = this.naturalWidth), (this.c = this.naturalHeight)), (this.b = 2));
                F(this);
                w(this) ? H(this) : G(this);
                var b = void 0 === b ? null : b;
                a = document.createEvent("CustomEvent");
                a.initCustomEvent("ready", !0, !0, b);
                this.dispatchEvent(a);
            }
        };
        d.m = function () {
            w(this) && H(this);
        };
        d.gwdLoad = function () {
            this.b = 1;
            this.c = this.f = -1;
            var a = this.getAttribute("source") || "data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
            this.a.setAttribute("src", a);
        };
        d.gwdIsLoaded = function () {
            return 2 == this.b || 3 == this.b;
        };
        var F = function (a) {
                if (2 == a.b) {
                    var b = a.getAttribute("source"),
                        c = a.getAttribute("scaling") || "stretch";
                    "stretch" == c
                        ? (a.classList.remove("scaled-proportionally"),
                          (a.a.style.backgroundImage = ""),
                          (a = a.a),
                          (b = b || "data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
                          b != a.getAttribute("src") && a.setAttribute("src", b))
                        : (a.classList.add("scaled-proportionally"),
                          (a.a.style.backgroundImage = b ? "url(" + JSON.stringify(b) + ")" : ""),
                          (a.a.style.backgroundSize = "none" != c ? c : "auto"),
                          (b = a.a),
                          "data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" != b.getAttribute("src") &&
                              b.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="));
                }
            },
            G = function (a) {
                var b = a.getAttribute("alignment") || "center";
                a.a.style.backgroundPosition = b;
            },
            H = function (a) {
                var b = a.width,
                    c = a.height,
                    g = a.f,
                    t = a.c,
                    l = 1;
                "cover" == a.getAttribute("scaling") && (l = c / b > t / g ? c / t : b / g);
                var f = a.getAttribute("focalpoint").split(" "),
                    m = parseFloat(f[0]) * l - b / 2;
                f = parseFloat(f[1]) * l - c / 2;
                m = 0 < m ? Math.min(m, g * l - b) : 0;
                f = 0 < f ? Math.min(f, t * l - c) : 0;
                a.a.style.backgroundPositionX = -m + "px";
                a.a.style.backgroundPositionY = -f + "px";
            };
        k.Object.defineProperties(B.prototype, {
            nativeElement: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a;
                },
            },
            assetHeight: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.c;
                },
            },
            assetWidth: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.f;
                },
            },
            naturalHeight: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a.naturalHeight;
                },
            },
            naturalWidth: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a.naturalWidth;
                },
            },
            height: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a.height;
                },
                set: function (a) {
                    this.a.height = a;
                },
            },
            width: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a.width;
                },
                set: function (a) {
                    this.a.width = a;
                },
            },
            alt: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a.alt;
                },
                set: function (a) {
                    this.a.alt = a;
                },
            },
            src: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return this.a.src;
                },
            },
        });
        k.Object.defineProperties(B, {
            observedAttributes: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return A;
                },
            },
        });
        customElements.define("gwd-image", B);
    }.call(this));
    var gwd = gwd || {};
    gwd.actions = gwd.actions || {};
    gwd.actions.events = gwd.actions.events || {};
    gwd.actions.events.getElementById = function (id) {
        var element = document.getElementById(id);
        if (!element) {
            var pageDeck = document.querySelector("gwd-pagedeck");
            if (pageDeck) {
                if (typeof pageDeck.getElementById === "function") {
                    element = pageDeck.getElementById(id);
                }
            }
        }
        if (!element) {
            switch (id) {
                case "document.body":
                    element = document.body;
                    break;
                case "document":
                    element = document;
                    break;
                case "window":
                    element = window;
                    break;
                default:
                    break;
            }
        }
        return element;
    };
    gwd.actions.events.addHandler = function (eventTarget, eventName, eventHandler, useCapture) {
        var targetElement = gwd.actions.events.getElementById(eventTarget);
        if (targetElement) {
            targetElement.addEventListener(eventName, eventHandler, useCapture);
        }
    };
    gwd.actions.events.removeHandler = function (eventTarget, eventName, eventHandler, useCapture) {
        var targetElement = gwd.actions.events.getElementById(eventTarget);
        if (targetElement) {
            targetElement.removeEventListener(eventName, eventHandler, useCapture);
        }
    };
    gwd.actions.events.setInlineStyle = function (id, styles) {
        var element = gwd.actions.events.getElementById(id);
        if (!element || !styles) {
            return;
        }
        var transitionProperty = element.style.transition !== undefined ? "transition" : "-webkit-transition";
        var prevTransition = element.style[transitionProperty];
        var splitStyles = styles.split(/\s*;\s*/);
        var nameValue;
        splitStyles.forEach(function (splitStyle) {
            if (splitStyle) {
                var regex = new RegExp("[:](?![/]{2})");
                nameValue = splitStyle.split(regex);
                nameValue[1] = nameValue[1] ? nameValue[1].trim() : null;
                if (!(nameValue[0] && nameValue[1])) {
                    return;
                }
                element.style.setProperty(nameValue[0], nameValue[1]);
            }
        });
        function restoreTransition(event) {
            var el = event.target;
            el.style.transition = prevTransition;
            el.removeEventListener(event.type, restoreTransition, false);
        }
        element.addEventListener("transitionend", restoreTransition, false);
        element.addEventListener("webkitTransitionEnd", restoreTransition, false);
    };
    gwd.actions.timeline = gwd.actions.timeline || {};
    gwd.actions.timeline.dispatchTimedEvent = function (event) {
        var customEventTarget = event.target;
        if (customEventTarget) {
            var customEventName = customEventTarget.getAttribute("data-event-name");
            if (customEventName) {
                event.stopPropagation();
                var event = document.createEvent("CustomEvent");
                event.initCustomEvent(customEventName, true, true, null);
                customEventTarget.dispatchEvent(event);
            }
        }
    };
    gwd.actions.timeline.captureAnimationEnd = function (element) {
        if (!element) {
            return;
        }
        var animationEndEvents = ["animationend", "webkitAnimationEnd"];
        for (var i = 0; i < animationEndEvents.length; i++) {
            element.addEventListener(animationEndEvents[i], gwd.actions.timeline.dispatchTimedEvent, true);
        }
    };
    gwd.actions.timeline.releaseAnimationEnd = function (element) {
        if (!element) {
            return;
        }
        var animationEndEvents = ["animationend", "webkitAnimationEnd"];
        for (var i = 0; i < animationEndEvents.length; i++) {
            element.removeEventListener(animationEndEvents[i], gwd.actions.timeline.dispatchTimedEvent, true);
        }
    };
    gwd.actions.timeline.pauseAnimationClassName = "gwd-pause-animation";
    gwd.actions.timeline.CURRENT_LABEL_ANIMATION = "data-gwd-current-label";
    gwd.actions.timeline.reflow = function (el) {
        el.offsetWidth = el.offsetWidth;
    };
    gwd.actions.timeline.pause = function (id) {
        var el = gwd.actions.events.getElementById(id);
        el && el.classList && el.classList.add(gwd.actions.timeline.pauseAnimationClassName);
    };
    gwd.actions.timeline.play = function (id) {
        var el = gwd.actions.events.getElementById(id);
        el && el.classList && el.classList.remove(gwd.actions.timeline.pauseAnimationClassName);
    };
    gwd.actions.timeline.togglePlay = function (id) {
        var el = gwd.actions.events.getElementById(id);
        el && el.classList && el.classList.toggle(gwd.actions.timeline.pauseAnimationClassName);
    };
    gwd.actions.timeline.gotoAndPlay = function (id, animClass) {
        var el = gwd.actions.events.getElementById(id);
        if (!(el && el.classList && id && animClass)) {
            return false;
        }
        var currentLabelAnimClass = el.getAttribute(gwd.actions.timeline.CURRENT_LABEL_ANIMATION);
        if (currentLabelAnimClass) {
            el.classList.remove(currentLabelAnimClass);
            el.removeAttribute(gwd.actions.timeline.CURRENT_LABEL_ANIMATION);
        }
        gwd.actions.timeline.play(id);
        if (currentLabelAnimClass == animClass) {
            gwd.actions.timeline.reflow(el);
        }
        el.classList.add(animClass);
        el.setAttribute(gwd.actions.timeline.CURRENT_LABEL_ANIMATION, animClass);
        return true;
    };
    gwd.actions.timeline.gotoAndPause = function (id, animClass) {
        var el = gwd.actions.events.getElementById(id);
        if (!(el && el.classList)) {
            return false;
        }
        if (gwd.actions.timeline.gotoAndPlay(id, animClass)) {
            var timeoutId = window.setTimeout(function () {
                el.classList.add(gwd.actions.timeline.pauseAnimationClassName);
            }, 40);
        }
        return !!timeoutId;
    };
    gwd.actions.timeline.gotoAndPlayNTimes = function (id, animClass, count, eventName) {
        var el = gwd.actions.events.getElementById(id);
        el.gwdGotoCounters = el.gwdGotoCounters || {};
        var counters = el.gwdGotoCounters;
        var counterName = eventName + "_" + animClass + "_counter";
        if (typeof counters[counterName] == "undefined") {
            counters[counterName] = 0;
        }
        if (counters[counterName] < count) {
            gwd.actions.timeline.gotoAndPlay(id, animClass);
        }
        counters[counterName]++;
    };
    gwd.auto_Page1Event_1 = function (event) {
        gwd.actions.timeline.gotoAndPlayNTimes("page1", "AnimationStart", 1, "counter");
    };
    gwd.auto_Page1Event_11 = function (event) {
        gwd.actions.timeline.gotoAndPlayNTimes("page1", "AnimationStart", 2, "counter");
    };
    gwd.auto_Page1AnimationEnd = function (event) {
        gwd.actions.timeline.gotoAndPlayNTimes("page1", "AnimationStart", 1, "counter");
    };
    gwd.auto_Page1AnimationEnd1 = function (event) {
        gwd.actions.timeline.gotoAndPlay("page1", "AnimationStart");
    };
    gwd.actions.events.registerEventHandlers = function (event) {
        gwd.actions.events.addHandler("page1", "AnimationEnd", gwd.auto_Page1Event_1, false);
        gwd.actions.events.addHandler("page1", "AnimationEnd", gwd.auto_Page1Event_11, false);
        gwd.actions.events.addHandler("page1", "AnimationEnd", gwd.auto_Page1AnimationEnd, false);
        gwd.actions.events.addHandler("page1", "AnimationEnd", gwd.auto_Page1AnimationEnd1, false);
        gwd.actions.timeline.captureAnimationEnd(document.body);
    };
    gwd.actions.events.deregisterEventHandlers = function (event) {
        gwd.actions.events.removeHandler("page1", "AnimationEnd", gwd.auto_Page1Event_1, false);
        gwd.actions.events.removeHandler("page1", "AnimationEnd", gwd.auto_Page1Event_11, false);
        gwd.actions.events.removeHandler("page1", "AnimationEnd", gwd.auto_Page1AnimationEnd, false);
        gwd.actions.events.removeHandler("page1", "AnimationEnd", gwd.auto_Page1AnimationEnd1, false);
        gwd.actions.timeline.releaseAnimationEnd(document.body);
    };
    document.addEventListener("DOMContentLoaded", gwd.actions.events.registerEventHandlers);
    document.addEventListener("unload", gwd.actions.events.deregisterEventHandlers);
