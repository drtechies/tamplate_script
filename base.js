/*! Custom - Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */ ! function(i) {
    i.fn.theiaStickySidebar = function(t) {
        var e, o, a, s, n;

        function d(t, e) {
            return !0 === t.initialized || !(i("body").width() < t.minWidth) && (function(t, e) {
                t.initialized = !0, 0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function() {
                    var e = {};
                    if (e.sidebar = i(this), e.options = t || {}, e.container = i(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({
                            position: e.options.defaultPosition,
                            overflow: "visible",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length) {
                        var o = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        e.sidebar.find("script").filter(function(i, t) {
                            return 0 === t.type.length || t.type.match(o)
                        }).remove(), e.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
                    }
                    e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
                    var a, s, n, d = e.stickySidebar.offset().top,
                        c = e.stickySidebar.outerHeight();

                    function p() {
                        e.fixedScrollTop = 0, e.sidebar.css({
                            "min-height": "1px"
                        }), e.stickySidebar.css({
                            position: "static",
                            width: "",
                            transform: "none"
                        })
                    }
                    e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), d -= e.stickySidebar.offset().top, c = e.stickySidebar.outerHeight() - c - d, 0 == d ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == c ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, p(), e.onScroll = function(e) {
                        if (e.stickySidebar.is(":visible"))
                            if (i("body").width() < e.options.minWidth) p();
                            else {
                                if (e.options.disableOnResponsiveLayouts)
                                    if (e.sidebar.outerWidth("none" == e.sidebar.css("float")) + 50 > e.container.width()) return void p();
                                var o, a, s = i(document).scrollTop(),
                                    n = "static";
                                if (s >= e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) {
                                    var d, c = e.paddingTop + t.additionalMarginTop,
                                        b = e.paddingBottom + e.marginBottom + t.additionalMarginBottom,
                                        l = e.sidebar.offset().top,
                                        h = e.sidebar.offset().top + (o = e.container, a = o.height(), o.children().each(function() {
                                            a = Math.max(a, i(this).height())
                                        }), a),
                                        f = 0 + t.additionalMarginTop;
                                    d = e.stickySidebar.outerHeight() + c + b < i(window).height() ? f + e.stickySidebar.outerHeight() : i(window).height() - e.marginBottom - e.paddingBottom - t.additionalMarginBottom;
                                    var g = l - s + e.paddingTop,
                                        S = h - s - e.paddingBottom - e.marginBottom,
                                        m = e.stickySidebar.offset().top - s,
                                        y = e.previousScrollTop - s;
                                    "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (m += y), "stick-to-top" == e.options.sidebarBehavior && (m = t.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (m = d - e.stickySidebar.outerHeight()), m = 0 < y ? Math.min(m, f) : Math.max(m, d - e.stickySidebar.outerHeight()), m = Math.max(m, g), m = Math.min(m, S - e.stickySidebar.outerHeight());
                                    var u = e.container.height() == e.stickySidebar.outerHeight();
                                    n = !u && m == f || !u && m == d - e.stickySidebar.outerHeight() ? "fixed" : s + m - e.sidebar.offset().top - e.paddingTop <= t.additionalMarginTop ? "static" : "absolute"
                                }
                                if ("fixed" == n) {
                                    var k = i(document).scrollLeft();
                                    e.stickySidebar.css({
                                        position: "fixed",
                                        width: r(e.stickySidebar) + "px",
                                        transform: "translateY(" + m + "px)",
                                        left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - k + "px",
                                        top: "0px"
                                    })
                                } else if ("absolute" == n) {
                                    var v = {};
                                    "absolute" != e.stickySidebar.css("position") && (v.position = "absolute", v.transform = "translateY(" + (s + m - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", v.top = "0px"), v.width = r(e.stickySidebar) + "px", v.left = "", e.stickySidebar.css(v)
                                } else "static" == n && p();
                                "static" != n && 1 == e.options.updateSidebarHeight && e.sidebar.css({
                                    "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom
                                }), e.previousScrollTop = s
                            }
                    }, e.onScroll(e), i(document).on("scroll." + e.options.namespace, (a = e, function() {
                        a.onScroll(a)
                    })), i(window).on("resize." + e.options.namespace, (s = e, function() {
                        s.stickySidebar.css({
                            position: "static"
                        }), s.onScroll(s)
                    })), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], (n = e, function() {
                        n.onScroll(n)
                    }))
                })
            }(t, e), !0)
        }

        function r(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {}
            return void 0 === t && (t = i.width()), t
        }
        return (t = i.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, d(e = t, this) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + e.namespace, (s = e, n = this, function(t) {
            d(s, n) && i(this).unbind(t)
        })), i(window).on("resize." + e.namespace, (o = e, a = this, function(t) {
            d(o, a) && i(this).unbind(t)
        }))), this
    }
}(jQuery);

/*! MenuIfy | v1.0.0 - https://www.drtechies.com */
! function(a) {
    a.fn.menuify = function() {
        return this.each(function() {
            var $t = a(this),
                b = $t.find('.LinkList ul > li').children('a'),
                c = b.length;
            for (var i = 0; i < c; i++) {
                var d = b.eq(i),
                    h = d.text();
                if (h.charAt(0) !== '_') {
                    var e = b.eq(i + 1),
                        j = e.text();
                    if (j.charAt(0) === '_') {
                        var m = d.parent();
                        m.append('<ul class="sub-menu m-sub"/>');
                    }
                }
                if (h.charAt(0) === '_') {
                    d.text(h.replace('_', ''));
                    d.parent().appendTo(m.children('.sub-menu'));
                }
            }
            for (var i = 0; i < c; i++) {
                var f = b.eq(i),
                    k = f.text();
                if (k.charAt(0) !== '_') {
                    var g = b.eq(i + 1),
                        l = g.text();
                    if (l.charAt(0) === '_') {
                        var n = f.parent();
                        n.append('<ul class="sub-menu2 m-sub"/>');
                    }
                }
                if (k.charAt(0) === '_') {
                    f.text(k.replace('_', ''));
                    f.parent().appendTo(n.children('.sub-menu2'));
                }
            }
            $t.find('.LinkList ul li ul').parent('li').addClass('has-sub');
        });
    }
}(jQuery);


/*! LazyIfy on Scroll | v1.8.0 - Enhenced by DRTechies https://www.drtechies.com */
! function(o) {
    o.fn.lazyify = function() {
        return this.each(function() {
            var n, t = o(this),
                e = o(window),
                a = t.attr("data-image"),
                c = t.is("svg") ? Math.round(t.width() / 16 * 10) : t.height(),
                h = "w" + Math.round(1.5 * t.width()) + "-h" + Math.round(1.5 * c) + "-p-k-no-nu";
            noThumbnail = "undefined" != typeof noThumbnail ? noThumbnail : "//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png", a.match("resources.blogblog.com") && (a = noThumbnail), n = a.match("/s72-c") ? a.replace("/s72-c", "/" + h) : a.match("/w72-h") ? a.replace("/w72-h72-p-k-no-nu", "/" + h) : a.match("=w72-h") ? a.replace("=w72-h72-p-k-no-nu", "=" + h) : a.match("googleusercontent.com") && a.match("=") ? a.replace(/=.*/, "=" + h) : a.match("googleusercontent.com") && !a.match("=") ? a = a + "=" + h : a, t.is(":hidden") || e.on("load resize scroll", function o() {
                if (e.scrollTop() + e.height() >= t.offset().top) {
                    e.off("load resize scroll", o);
                    var a = new Image;
                    a.onload = function() {
                        t.attr("style", 'background-image:url("' + this.src + '");').addClass("lazy-ify")
                    }, a.src = n
                }
            }).trigger("scroll")
        })
    }
}(jQuery);

/*! TickerIfy | v1.0.0 - https://www.drtechies.com */
! function(t) {
    t.fn.tickerify = function() {
        return this.each(function() {
            new class {
                constructor(t) {
                    this.ticker = t, this.active = 0, this.tickerInit()
                }
                tickerActive(t) {
                    this.active = t, this.items.each(function() {
                        this.classList.remove("active")
                    }), this.items[t].classList.add("active"), this.tickerAuto()
                }
                tickerArrows() {
                    this.ticker.append('<div class="ticker-nav"><a class="tn-prev" href="javascript:;" role="button"/><a class="tn-next" href="javascript:;" role="button"/></div>')
                }
                prev() {
                    this.active > 0 ? this.tickerActive(this.active - 1) : this.tickerActive(this.items.length - 1)
                }
                next() {
                    this.active < this.items.length - 1 ? this.tickerActive(this.active + 1) : this.tickerActive(0)
                }
                tickerNavigation() {
                    const t = this.ticker.find(".tn-prev");
                    this.ticker.find(".tn-next").on("click", this.next), t.on("click", this.prev)
                }
                tickerAuto() {
                    clearTimeout(this.timeout), this.timeout = setTimeout(this.next, 5e3)
                }
                tickerInit() {
                    this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.items = this.ticker.find(".ticker-items > *");
                    const t = this.items.length;
                    t && (this.tickerActive(0), t >= 2 && (this.tickerArrows(), this.tickerNavigation()))
                }
            }(t(this))
        })
    }
}(jQuery);

/*! jQuery replaceText | v1.1.0 - https://benalman.com/projects/jquery-replacetext-plugin/ */
! function(e) {
    e.fn.replaceText = function(n, t, i) {
        return this.each(function() {
            var o, r, l = this.firstChild,
                u = [];
            if (l)
                do {
                    3 === l.nodeType && (r = (o = l.nodeValue).replace(n, t)) !== o && (!i && /</.test(r) ? (e(l).before(r), u.push(l)) : l.nodeValue = r)
                } while (l = l.nextSibling);
            u.length && e(u).remove()
        })
    }
}(jQuery);

/*! Table of Contents | v0.5 - Fork by DRTECIES - https://github.com/ndabas/toc (v0.4) */
! function(t) {
    "use strict";
    var n = function(n) {
            return this.each(function() {
                var e, a, i = t(this),
                    c = i.data(),
                    o = [i],
                    r = this.tagName,
                    d = 0;
                e = t.extend({
                    content: "body",
                    headings: "h1,h2,h3"
                }, {
                    content: c.toc || void 0,
                    headings: c.tocHeadings || void 0
                }, n), a = e.headings.split(","), t(e.content).find(e.headings).attr("id", function(n, e) {
                    return e || function(t) {
                        0 === t.length && (t = "?");
                        for (var n = (t = t.replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/([^\w]+|\s+)/g, "-").replace(/\-\-+/g, "-").replace(/(^-+|-+$)/, "")).replace(/\s+/g, "-"), e = "", a = 1; null !== document.getElementById(n + e);) e = "-" + a++;
                        return n + e
                    }(t(this).text())
                }).each(function() {
                    var n = t(this),
                        e = t.map(a, function(t, e) {
                            return n.is(t) ? e : void 0
                        })[0];
                    if (e > d) {
                        var i = o[0].children("li:last")[0];
                        i && o.unshift(t("<" + r + "/>").appendTo(i))
                    } else o.splice(0, Math.min(d - e, Math.max(o.length - 1, 0)));
                    t("<li/>").appendTo(o[0]).append(t("<a/>").text(n.text()).attr("href", "#" + n.attr("id"))), d = e
                })
            })
        },
        e = t.fn.toc;
    t.fn.toc = n, t.fn.toc.noConflict = function() {
        return t.fn.toc = e, this
    }, t(function() {
        n.call(t("[data-toc]"))
    })
}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
! function(e) {
    var n;
    if ("function" == typeof define && define.amd) define(["jquery"], e);
    else if ("object" == typeof exports) {
        try {
            n = require("jquery")
        } catch (e) {}
        module.exports = e(n)
    } else {
        var o = window.Cookies,
            r = window.Cookies = e(window.jQuery);
        r.noConflict = function() {
            return window.Cookies = o, r
        }
    }
}(function(e) {
    var n = /\+/g;

    function o(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function r(e) {
        return o(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e, o) {
        var r = u.raw ? e : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(n, " ")), u.json ? JSON.parse(e) : e
            } catch (e) {}
        }(e);
        return c(o) ? o(r) : r
    }

    function i() {
        for (var e, n, o = 0, r = {}; o < arguments.length; o++)
            for (e in n = arguments[o]) r[e] = n[e];
        return r
    }

    function c(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
    var u = function(e, n, f) {
        if (arguments.length > 1 && !c(n)) {
            if ("number" == typeof(f = i(u.defaults, f)).expires) {
                var s = f.expires,
                    a = f.expires = new Date;
                a.setMilliseconds(a.getMilliseconds() + 864e5 * s)
            }
            return document.cookie = [o(e), "=", r(n), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
        }
        for (var d, p = e ? void 0 : {}, l = document.cookie ? document.cookie.split("; ") : [], m = 0, v = l.length; m < v; m++) {
            var g = l[m].split("="),
                w = (d = g.shift(), u.raw ? d : decodeURIComponent(d)),
                j = g.join("=");
            if (e === w) {
                p = t(j, n);
                break
            }
            e || void 0 === (j = t(j)) || (p[w] = j)
        }
        return p
    };
    return u.get = u.set = u, u.defaults = {}, u.remove = function(e, n) {
        return u(e, "", i(n, {
            expires: -1
        })), !u(e)
    }, e && (e.cookie = u, e.removeCookie = u.remove), u
});

/*! lazysizes - v5.3.2 - https://github.com/aFarkas */
! function(e) {
    var t = function(u, D, f) {
        "use strict";
        var k, H;
        if (function() {
                var e;
                var t = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: true,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: true,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                H = u.lazySizesConfig || u.lazysizesConfig || {};
                for (e in t) {
                    if (!(e in H)) {
                        H[e] = t[e]
                    }
                }
            }(), !D || !D.getElementsByClassName) {
            return {
                init: function() {},
                cfg: H,
                noSupport: true
            }
        }
        var O = D.documentElement,
            i = u.HTMLPictureElement,
            P = "addEventListener",
            $ = "getAttribute",
            q = u[P].bind(u),
            I = u.setTimeout,
            U = u.requestAnimationFrame || I,
            o = u.requestIdleCallback,
            j = /^picture$/i,
            r = ["load", "error", "lazyincluded", "_lazyloaded"],
            a = {},
            G = Array.prototype.forEach,
            J = function(e, t) {
                if (!a[t]) {
                    a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")
                }
                return a[t].test(e[$]("class") || "") && a[t]
            },
            K = function(e, t) {
                if (!J(e, t)) {
                    e.setAttribute("class", (e[$]("class") || "").trim() + " " + t)
                }
            },
            Q = function(e, t) {
                var a;
                if (a = J(e, t)) {
                    e.setAttribute("class", (e[$]("class") || "").replace(a, " "))
                }
            },
            V = function(t, a, e) {
                var i = e ? P : "removeEventListener";
                if (e) {
                    V(t, a)
                }
                r.forEach(function(e) {
                    t[i](e, a)
                })
            },
            X = function(e, t, a, i, r) {
                var n = D.createEvent("Event");
                if (!a) {
                    a = {}
                }
                a.instance = k;
                n.initEvent(t, !i, !r);
                n.detail = a;
                e.dispatchEvent(n);
                return n
            },
            Y = function(e, t) {
                var a;
                if (!i && (a = u.picturefill || H.pf)) {
                    if (t && t.src && !e[$]("srcset")) {
                        e.setAttribute("srcset", t.src)
                    }
                    a({
                        reevaluate: true,
                        elements: [e]
                    })
                } else if (t && t.src) {
                    e.src = t.src
                }
            },
            Z = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            s = function(e, t, a) {
                a = a || e.offsetWidth;
                while (a < H.minSize && t && !e._lazysizesWidth) {
                    a = t.offsetWidth;
                    t = t.parentNode
                }
                return a
            },
            ee = function() {
                var a, i;
                var t = [];
                var r = [];
                var n = t;
                var s = function() {
                    var e = n;
                    n = t.length ? r : t;
                    a = true;
                    i = false;
                    while (e.length) {
                        e.shift()()
                    }
                    a = false
                };
                var e = function(e, t) {
                    if (a && !t) {
                        e.apply(this, arguments)
                    } else {
                        n.push(e);
                        if (!i) {
                            i = true;
                            (D.hidden ? I : U)(s)
                        }
                    }
                };
                e._lsFlush = s;
                return e
            }(),
            te = function(a, e) {
                return e ? function() {
                    ee(a)
                } : function() {
                    var e = this;
                    var t = arguments;
                    ee(function() {
                        a.apply(e, t)
                    })
                }
            },
            ae = function(e) {
                var a;
                var i = 0;
                var r = H.throttleDelay;
                var n = H.ricTimeout;
                var t = function() {
                    a = false;
                    i = f.now();
                    e()
                };
                var s = o && n > 49 ? function() {
                    o(t, {
                        timeout: n
                    });
                    if (n !== H.ricTimeout) {
                        n = H.ricTimeout
                    }
                } : te(function() {
                    I(t)
                }, true);
                return function(e) {
                    var t;
                    if (e = e === true) {
                        n = 33
                    }
                    if (a) {
                        return
                    }
                    a = true;
                    t = r - (f.now() - i);
                    if (t < 0) {
                        t = 0
                    }
                    if (e || t < 9) {
                        s()
                    } else {
                        I(s, t)
                    }
                }
            },
            ie = function(e) {
                var t, a;
                var i = 99;
                var r = function() {
                    t = null;
                    e()
                };
                var n = function() {
                    var e = f.now() - a;
                    if (e < i) {
                        I(n, i - e)
                    } else {
                        (o || r)(r)
                    }
                };
                return function() {
                    a = f.now();
                    if (!t) {
                        t = I(n, i)
                    }
                }
            },
            e = function() {
                var v, m, c, h, e;
                var y, z, g, p, C, b, A;
                var n = /^img$/i;
                var d = /^iframe$/i;
                var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
                var _ = 0;
                var w = 0;
                var M = 0;
                var N = -1;
                var L = function(e) {
                    M--;
                    if (!e || M < 0 || !e.target) {
                        M = 0
                    }
                };
                var x = function(e) {
                    if (A == null) {
                        A = Z(D.body, "visibility") == "hidden"
                    }
                    return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden")
                };
                var W = function(e, t) {
                    var a;
                    var i = e;
                    var r = x(e);
                    g -= t;
                    b += t;
                    p -= t;
                    C += t;
                    while (r && (i = i.offsetParent) && i != D.body && i != O) {
                        r = (Z(i, "opacity") || 1) > 0;
                        if (r && Z(i, "overflow") != "visible") {
                            a = i.getBoundingClientRect();
                            r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1
                        }
                    }
                    return r
                };
                var t = function() {
                    var e, t, a, i, r, n, s, o, l, u, f, c;
                    var d = k.elements;
                    if ((h = H.loadMode) && M < 8 && (e = d.length)) {
                        t = 0;
                        N++;
                        for (; t < e; t++) {
                            if (!d[t] || d[t]._lazyRace) {
                                continue
                            }
                            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
                                R(d[t]);
                                continue
                            }
                            if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                                n = w
                            }
                            if (!u) {
                                u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
                                k._defEx = u;
                                f = u * H.expFactor;
                                c = H.hFac;
                                A = null;
                                if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                                    w = f;
                                    N = 0
                                } else if (h > 1 && N > 1 && M < 6) {
                                    w = u
                                } else {
                                    w = _
                                }
                            }
                            if (l !== n) {
                                y = innerWidth + n * c;
                                z = innerHeight + n;
                                s = n * -1;
                                l = n
                            }
                            a = d[t].getBoundingClientRect();
                            if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
                                R(d[t]);
                                r = true;
                                if (M > 9) {
                                    break
                                }
                            } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
                                i = v[0] || d[t]
                            }
                        }
                        if (i && !r) {
                            R(i)
                        }
                    }
                };
                var a = ae(t);
                var S = function(e) {
                    var t = e.target;
                    if (t._lazyCache) {
                        delete t._lazyCache;
                        return
                    }
                    L(e);
                    K(t, H.loadedClass);
                    Q(t, H.loadingClass);
                    V(t, B);
                    X(t, "lazyloaded")
                };
                var i = te(S);
                var B = function(e) {
                    i({
                        target: e.target
                    })
                };
                var T = function(e, t) {
                    var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;
                    if (a == 0) {
                        e.contentWindow.location.replace(t)
                    } else if (a == 1) {
                        e.src = t
                    }
                };
                var F = function(e) {
                    var t;
                    var a = e[$](H.srcsetAttr);
                    if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
                        e.setAttribute("media", t)
                    }
                    if (a) {
                        e.setAttribute("srcset", a)
                    }
                };
                var s = te(function(t, e, a, i, r) {
                    var n, s, o, l, u, f;
                    if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
                        if (i) {
                            if (a) {
                                K(t, H.autosizesClass)
                            } else {
                                t.setAttribute("sizes", i)
                            }
                        }
                        s = t[$](H.srcsetAttr);
                        n = t[$](H.srcAttr);
                        if (r) {
                            o = t.parentNode;
                            l = o && j.test(o.nodeName || "")
                        }
                        f = e.firesLoad || "src" in t && (s || n || l);
                        u = {
                            target: t
                        };
                        K(t, H.loadingClass);
                        if (f) {
                            clearTimeout(c);
                            c = I(L, 2500);
                            V(t, B, true)
                        }
                        if (l) {
                            G.call(o.getElementsByTagName("source"), F)
                        }
                        if (s) {
                            t.setAttribute("srcset", s)
                        } else if (n && !l) {
                            if (d.test(t.nodeName)) {
                                T(t, n)
                            } else {
                                t.src = n
                            }
                        }
                        if (r && (s || l)) {
                            Y(t, {
                                src: n
                            })
                        }
                    }
                    if (t._lazyRace) {
                        delete t._lazyRace
                    }
                    Q(t, H.lazyClass);
                    ee(function() {
                        var e = t.complete && t.naturalWidth > 1;
                        if (!f || e) {
                            if (e) {
                                K(t, H.fastLoadedClass)
                            }
                            S(u);
                            t._lazyCache = true;
                            I(function() {
                                if ("_lazyCache" in t) {
                                    delete t._lazyCache
                                }
                            }, 9)
                        }
                        if (t.loading == "lazy") {
                            M--
                        }
                    }, true)
                });
                var R = function(e) {
                    if (e._lazyRace) {
                        return
                    }
                    var t;
                    var a = n.test(e.nodeName);
                    var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
                    var r = i == "auto";
                    if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
                        return
                    }
                    t = X(e, "lazyunveilread").detail;
                    if (r) {
                        re.updateElem(e, true, e.offsetWidth)
                    }
                    e._lazyRace = true;
                    M++;
                    s(e, t, r, i, a)
                };
                var r = ie(function() {
                    H.loadMode = 3;
                    a()
                });
                var o = function() {
                    if (H.loadMode == 3) {
                        H.loadMode = 2
                    }
                    r()
                };
                var l = function() {
                    if (m) {
                        return
                    }
                    if (f.now() - e < 999) {
                        I(l, 999);
                        return
                    }
                    m = true;
                    H.loadMode = 3;
                    a();
                    q("scroll", o, true)
                };
                return {
                    _: function() {
                        e = f.now();
                        k.elements = D.getElementsByClassName(H.lazyClass);
                        v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
                        q("scroll", a, true);
                        q("resize", a, true);
                        q("pageshow", function(e) {
                            if (e.persisted) {
                                var t = D.querySelectorAll("." + H.loadingClass);
                                if (t.length && t.forEach) {
                                    U(function() {
                                        t.forEach(function(e) {
                                            if (e.complete) {
                                                R(e)
                                            }
                                        })
                                    })
                                }
                            }
                        });
                        if (u.MutationObserver) {
                            new MutationObserver(a).observe(O, {
                                childList: true,
                                subtree: true,
                                attributes: true
                            })
                        } else {
                            O[P]("DOMNodeInserted", a, true);
                            O[P]("DOMAttrModified", a, true);
                            setInterval(a, 999)
                        }
                        q("hashchange", a, true);
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                            D[P](e, a, true)
                        });
                        if (/d$|^c/.test(D.readyState)) {
                            l()
                        } else {
                            q("load", l);
                            D[P]("DOMContentLoaded", a);
                            I(l, 2e4)
                        }
                        if (k.elements.length) {
                            t();
                            ee._lsFlush()
                        } else {
                            a()
                        }
                    },
                    checkElems: a,
                    unveil: R,
                    _aLSL: o
                }
            }(),
            re = function() {
                var a;
                var n = te(function(e, t, a, i) {
                    var r, n, s;
                    e._lazysizesWidth = i;
                    i += "px";
                    e.setAttribute("sizes", i);
                    if (j.test(t.nodeName || "")) {
                        r = t.getElementsByTagName("source");
                        for (n = 0, s = r.length; n < s; n++) {
                            r[n].setAttribute("sizes", i)
                        }
                    }
                    if (!a.detail.dataAttr) {
                        Y(e, a.detail)
                    }
                });
                var i = function(e, t, a) {
                    var i;
                    var r = e.parentNode;
                    if (r) {
                        a = s(e, r, a);
                        i = X(e, "lazybeforesizes", {
                            width: a,
                            dataAttr: !!t
                        });
                        if (!i.defaultPrevented) {
                            a = i.detail.width;
                            if (a && a !== e._lazysizesWidth) {
                                n(e, r, i, a)
                            }
                        }
                    }
                };
                var e = function() {
                    var e;
                    var t = a.length;
                    if (t) {
                        e = 0;
                        for (; e < t; e++) {
                            i(a[e])
                        }
                    }
                };
                var t = ie(e);
                return {
                    _: function() {
                        a = D.getElementsByClassName(H.autosizesClass);
                        q("resize", t)
                    },
                    checkElems: t,
                    updateElem: i
                }
            }(),
            t = function() {
                if (!t.i && D.getElementsByClassName) {
                    t.i = true;
                    re._();
                    e._()
                }
            };
        return I(function() {
            H.init && t()
        }), k = {
            cfg: H,
            autoSizer: re,
            loader: e,
            init: t,
            uP: Y,
            aC: K,
            rC: Q,
            hC: J,
            fire: X,
            gW: s,
            rAF: ee
        }
    }(e, e.document, Date);
    e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
