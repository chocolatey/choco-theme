/*!
  * choco-theme v0.8.0 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
      }(exports, function() {
        "use strict";
        const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n3) {
          t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
          const s3 = t.get(e2);
          s3.has(i2) || 0 === s3.size ? s3.set(i2, n3) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s3.keys())[0]}.`);
        }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
          if (!t.has(e2))
            return;
          const n3 = t.get(e2);
          n3.delete(i2), 0 === n3.size && t.delete(e2);
        } }, i = "transitionend", n2 = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s2 = (t2) => {
          t2.dispatchEvent(new Event(i));
        }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n2(t2)) : null, a = (t2) => {
          if (!o(t2) || 0 === t2.getClientRects().length)
            return false;
          const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
          if (!i2)
            return e2;
          if (i2 !== t2) {
            const e3 = t2.closest("summary");
            if (e3 && e3.parentNode !== i2)
              return false;
            if (null === e3)
              return false;
          }
          return e2;
        }, l2 = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), c = (t2) => {
          if (!document.documentElement.attachShadow)
            return null;
          if ("function" == typeof t2.getRootNode) {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
          }
          return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
        }, h = () => {
        }, d = (t2) => {
          t2.offsetHeight;
        }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = () => "rtl" === document.documentElement.dir, m = (t2) => {
          var e2;
          e2 = () => {
            const e3 = u();
            if (e3) {
              const i2 = t2.NAME, n3 = e3.fn[i2];
              e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n3, t2.jQueryInterface);
            }
          }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t3 of f)
              t3();
          }), f.push(e2)) : e2();
        }, g = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2(...e2) : i2, _ = (t2, e2, n3 = true) => {
          if (!n3)
            return void g(t2);
          const o2 = ((t3) => {
            if (!t3)
              return 0;
            let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
            const n4 = Number.parseFloat(e3), s3 = Number.parseFloat(i2);
            return n4 || s3 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
          })(e2) + 5;
          let r2 = false;
          const a2 = ({ target: n4 }) => {
            n4 === e2 && (r2 = true, e2.removeEventListener(i, a2), g(t2));
          };
          e2.addEventListener(i, a2), setTimeout(() => {
            r2 || s2(e2);
          }, o2);
        }, b = (t2, e2, i2, n3) => {
          const s3 = t2.length;
          let o2 = t2.indexOf(e2);
          return -1 === o2 ? !i2 && n3 ? t2[s3 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n3 && (o2 = (o2 + s3) % s3), t2[Math.max(0, Math.min(o2, s3 - 1))]);
        }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
        let E = 1;
        const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function O(t2, e2) {
          return e2 && `${e2}::${E++}` || t2.uidEvent || E++;
        }
        function x(t2) {
          const e2 = O(t2);
          return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
        }
        function k(t2, e2, i2 = null) {
          return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
        }
        function L(t2, e2, i2) {
          const n3 = "string" == typeof e2, s3 = n3 ? i2 : e2 || i2;
          let o2 = I(t2);
          return C.has(o2) || (o2 = t2), [n3, s3, o2];
        }
        function S(t2, e2, i2, n3, s3) {
          if ("string" != typeof e2 || !t2)
            return;
          let [o2, r2, a2] = L(e2, i2, n3);
          if (e2 in T) {
            const t3 = (t4) => function(e3) {
              if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
                return t4.call(this, e3);
            };
            r2 = t3(r2);
          }
          const l3 = x(t2), c2 = l3[a2] || (l3[a2] = {}), h2 = k(c2, r2, o2 ? i2 : null);
          if (h2)
            return void (h2.oneOff = h2.oneOff && s3);
          const d2 = O(r2, e2.replace(v, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
            return function n4(s4) {
              const o3 = t3.querySelectorAll(e3);
              for (let { target: r3 } = s4; r3 && r3 !== this; r3 = r3.parentNode)
                for (const a3 of o3)
                  if (a3 === r3)
                    return P(s4, { delegateTarget: r3 }), n4.oneOff && N.off(t3, s4.type, e3, i3), i3.apply(r3, [s4]);
            };
          }(t2, i2, r2) : /* @__PURE__ */ function(t3, e3) {
            return function i3(n4) {
              return P(n4, { delegateTarget: t3 }), i3.oneOff && N.off(t3, n4.type, e3), e3.apply(t3, [n4]);
            };
          }(t2, r2);
          u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s3, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
        }
        function D(t2, e2, i2, n3, s3) {
          const o2 = k(e2[i2], n3, s3);
          o2 && (t2.removeEventListener(i2, o2, Boolean(s3)), delete e2[i2][o2.uidEvent]);
        }
        function $(t2, e2, i2, n3) {
          const s3 = e2[i2] || {};
          for (const [o2, r2] of Object.entries(s3))
            o2.includes(n3) && D(t2, e2, i2, r2.callable, r2.delegationSelector);
        }
        function I(t2) {
          return t2 = t2.replace(y, ""), T[t2] || t2;
        }
        const N = { on(t2, e2, i2, n3) {
          S(t2, e2, i2, n3, false);
        }, one(t2, e2, i2, n3) {
          S(t2, e2, i2, n3, true);
        }, off(t2, e2, i2, n3) {
          if ("string" != typeof e2 || !t2)
            return;
          const [s3, o2, r2] = L(e2, i2, n3), a2 = r2 !== e2, l3 = x(t2), c2 = l3[r2] || {}, h2 = e2.startsWith(".");
          if (void 0 === o2) {
            if (h2)
              for (const i3 of Object.keys(l3))
                $(t2, l3, i3, e2.slice(1));
            for (const [i3, n4] of Object.entries(c2)) {
              const s4 = i3.replace(w, "");
              a2 && !e2.includes(s4) || D(t2, l3, r2, n4.callable, n4.delegationSelector);
            }
          } else {
            if (!Object.keys(c2).length)
              return;
            D(t2, l3, r2, o2, s3 ? i2 : null);
          }
        }, trigger(t2, e2, i2) {
          if ("string" != typeof e2 || !t2)
            return null;
          const n3 = u();
          let s3 = null, o2 = true, r2 = true, a2 = false;
          e2 !== I(e2) && n3 && (s3 = n3.Event(e2, i2), n3(t2).trigger(s3), o2 = !s3.isPropagationStopped(), r2 = !s3.isImmediatePropagationStopped(), a2 = s3.isDefaultPrevented());
          const l3 = P(new Event(e2, { bubbles: o2, cancelable: true }), i2);
          return a2 && l3.preventDefault(), r2 && t2.dispatchEvent(l3), l3.defaultPrevented && s3 && s3.preventDefault(), l3;
        } };
        function P(t2, e2 = {}) {
          for (const [i2, n3] of Object.entries(e2))
            try {
              t2[i2] = n3;
            } catch (e3) {
              Object.defineProperty(t2, i2, { configurable: true, get: () => n3 });
            }
          return t2;
        }
        function j(t2) {
          if ("true" === t2)
            return true;
          if ("false" === t2)
            return false;
          if (t2 === Number(t2).toString())
            return Number(t2);
          if ("" === t2 || "null" === t2)
            return null;
          if ("string" != typeof t2)
            return t2;
          try {
            return JSON.parse(decodeURIComponent(t2));
          } catch (e2) {
            return t2;
          }
        }
        function M(t2) {
          return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
        }
        const F = { setDataAttribute(t2, e2, i2) {
          t2.setAttribute(`data-bs-${M(e2)}`, i2);
        }, removeDataAttribute(t2, e2) {
          t2.removeAttribute(`data-bs-${M(e2)}`);
        }, getDataAttributes(t2) {
          if (!t2)
            return {};
          const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
          for (const n3 of i2) {
            let i3 = n3.replace(/^bs/, "");
            i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = j(t2.dataset[n3]);
          }
          return e2;
        }, getDataAttribute: (t2, e2) => j(t2.getAttribute(`data-bs-${M(e2)}`)) };
        class H {
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(t2) {
            return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          _configAfterMerge(t2) {
            return t2;
          }
          _mergeConfigObj(t2, e2) {
            const i2 = o(e2) ? F.getDataAttribute(e2, "config") : {};
            return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), "object" == typeof i2 ? i2 : {}), o(e2) ? F.getDataAttributes(e2) : {}), "object" == typeof t2 ? t2 : {});
          }
          _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
            for (const [n3, s3] of Object.entries(e2)) {
              const e3 = t2[n3], r2 = o(e3) ? "element" : null == (i2 = e3) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(s3).test(r2))
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n3}" provided type "${r2}" but expected type "${s3}".`);
            }
            var i2;
          }
        }
        class W extends H {
          constructor(t2, i2) {
            super(), (t2 = r(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t2 of Object.getOwnPropertyNames(this))
              this[t2] = null;
          }
          _queueCallback(t2, e2, i2 = true) {
            _(t2, e2, i2);
          }
          _getConfig(t2) {
            return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          static getInstance(t2) {
            return e.get(r(t2), this.DATA_KEY);
          }
          static getOrCreateInstance(t2, e2 = {}) {
            return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
          }
          static get VERSION() {
            return "5.3.3";
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(t2) {
            return `${t2}${this.EVENT_KEY}`;
          }
        }
        const B = (t2) => {
          let e2 = t2.getAttribute("data-bs-target");
          if (!e2 || "#" === e2) {
            let i2 = t2.getAttribute("href");
            if (!i2 || !i2.includes("#") && !i2.startsWith("."))
              return null;
            i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
          }
          return e2 ? e2.split(",").map((t3) => n2(t3)).join(",") : null;
        }, z = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
          const i2 = [];
          let n3 = t2.parentNode.closest(e2);
          for (; n3; )
            i2.push(n3), n3 = n3.parentNode.closest(e2);
          return i2;
        }, prev(t2, e2) {
          let i2 = t2.previousElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.previousElementSibling;
          }
          return [];
        }, next(t2, e2) {
          let i2 = t2.nextElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.nextElementSibling;
          }
          return [];
        }, focusableChildren(t2) {
          const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
          return this.find(e2, t2).filter((t3) => !l2(t3) && a(t3));
        }, getSelectorFromElement(t2) {
          const e2 = B(t2);
          return e2 && z.findOne(e2) ? e2 : null;
        }, getElementFromSelector(t2) {
          const e2 = B(t2);
          return e2 ? z.findOne(e2) : null;
        }, getMultipleElementsFromSelector(t2) {
          const e2 = B(t2);
          return e2 ? z.find(e2) : [];
        } }, R = (t2, e2 = "hide") => {
          const i2 = `click.dismiss${t2.EVENT_KEY}`, n3 = t2.NAME;
          N.on(document, i2, `[data-bs-dismiss="${n3}"]`, function(i3) {
            if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), l2(this))
              return;
            const s3 = z.getElementFromSelector(this) || this.closest(`.${n3}`);
            t2.getOrCreateInstance(s3)[e2]();
          });
        }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
        class Q extends W {
          static get NAME() {
            return "alert";
          }
          close() {
            if (N.trigger(this._element, V).defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t2 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t2);
          }
          _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Q.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        R(Q, "close"), m(Q);
        const X = '[data-bs-toggle="button"]';
        class Y extends W {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Y.getOrCreateInstance(this);
              "toggle" === t2 && e2[t2]();
            });
          }
        }
        N.on(document, "click.bs.button.data-api", X, (t2) => {
          t2.preventDefault();
          const e2 = t2.target.closest(X);
          Y.getOrCreateInstance(e2).toggle();
        }), m(Y);
        const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = { endCallback: null, leftCallback: null, rightCallback: null }, nt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
        class st extends H {
          constructor(t2, e2) {
            super(), this._element = t2, t2 && st.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
          }
          static get Default() {
            return it;
          }
          static get DefaultType() {
            return nt;
          }
          static get NAME() {
            return "swipe";
          }
          dispose() {
            N.off(this._element, U);
          }
          _start(t2) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
          }
          _end(t2) {
            this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
          }
          _move(t2) {
            this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
          }
          _handleSwipe() {
            const t2 = Math.abs(this._deltaX);
            if (t2 <= 40)
              return;
            const e2 = t2 / this._deltaX;
            this._deltaX = 0, e2 && g(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
          }
          _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t2) => this._start(t2)), N.on(this._element, et, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t2) => this._start(t2)), N.on(this._element, J, (t2) => this._move(t2)), N.on(this._element, Z, (t2) => this._end(t2)));
          }
          _eventIsPointerPenTouch(t2) {
            return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
          }
          static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
          }
        }
        const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = { ArrowLeft: ht, ArrowRight: ct }, Ct = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Ot = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
        class xt extends W {
          constructor(t2, e2) {
            super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
          }
          static get Default() {
            return Ct;
          }
          static get DefaultType() {
            return Ot;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(at);
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
          }
          prev() {
            this._slide(lt);
          }
          pause() {
            this._isSliding && s2(this._element), this._clearInterval();
          }
          cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
          }
          _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle());
          }
          to(t2) {
            const e2 = this._getItems();
            if (t2 > e2.length - 1 || t2 < 0)
              return;
            if (this._isSliding)
              return void N.one(this._element, ut, () => this.to(t2));
            const i2 = this._getItemIndex(this._getActive());
            if (i2 === t2)
              return;
            const n3 = t2 > i2 ? at : lt;
            this._slide(n3, e2[t2]);
          }
          dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
          }
          _configAfterMerge(t2) {
            return t2.defaultInterval = t2.interval, t2;
          }
          _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t2) => this._keydown(t2)), "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            for (const t3 of z.find(".carousel-item img", this._element))
              N.on(t3, gt, (t4) => t4.preventDefault());
            const t2 = { leftCallback: () => this._slide(this._directionToOrder(ct)), rightCallback: () => this._slide(this._directionToOrder(ht)), endCallback: () => {
              "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
            } };
            this._swipeHelper = new st(this._element, t2);
          }
          _keydown(t2) {
            if (/input|textarea/i.test(t2.target.tagName))
              return;
            const e2 = Tt[t2.key];
            e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
          }
          _getItemIndex(t2) {
            return this._getItems().indexOf(t2);
          }
          _setActiveIndicatorElement(t2) {
            if (!this._indicatorsElement)
              return;
            const e2 = z.findOne(wt, this._indicatorsElement);
            e2.classList.remove(yt), e2.removeAttribute("aria-current");
            const i2 = z.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
            i2 && (i2.classList.add(yt), i2.setAttribute("aria-current", "true"));
          }
          _updateInterval() {
            const t2 = this._activeElement || this._getActive();
            if (!t2)
              return;
            const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
            this._config.interval = e2 || this._config.defaultInterval;
          }
          _slide(t2, e2 = null) {
            if (this._isSliding)
              return;
            const i2 = this._getActive(), n3 = t2 === at, s3 = e2 || b(this._getItems(), i2, n3, this._config.wrap);
            if (s3 === i2)
              return;
            const o2 = this._getItemIndex(s3), r2 = (e3) => N.trigger(this._element, e3, { relatedTarget: s3, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
            if (r2(dt).defaultPrevented)
              return;
            if (!i2 || !s3)
              return;
            const a2 = Boolean(this._interval);
            this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s3;
            const l3 = n3 ? "carousel-item-start" : "carousel-item-end", c2 = n3 ? "carousel-item-next" : "carousel-item-prev";
            s3.classList.add(c2), d(s3), i2.classList.add(l3), s3.classList.add(l3), this._queueCallback(() => {
              s3.classList.remove(l3, c2), s3.classList.add(yt), i2.classList.remove(yt, c2, l3), this._isSliding = false, r2(ut);
            }, i2, this._isAnimated()), a2 && this.cycle();
          }
          _isAnimated() {
            return this._element.classList.contains("slide");
          }
          _getActive() {
            return z.findOne(Et, this._element);
          }
          _getItems() {
            return z.find(At, this._element);
          }
          _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
          }
          _directionToOrder(t2) {
            return p() ? t2 === ct ? lt : at : t2 === ct ? at : lt;
          }
          _orderToDirection(t2) {
            return p() ? t2 === lt ? ct : ht : t2 === lt ? ht : ct;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = xt.getOrCreateInstance(this, t2);
              if ("number" != typeof t2) {
                if ("string" == typeof t2) {
                  if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                    throw new TypeError(`No method named "${t2}"`);
                  e2[t2]();
                }
              } else
                e2.to(t2);
            });
          }
        }
        N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
          const e2 = z.getElementFromSelector(this);
          if (!e2 || !e2.classList.contains(vt))
            return;
          t2.preventDefault();
          const i2 = xt.getOrCreateInstance(e2), n3 = this.getAttribute("data-bs-slide-to");
          return n3 ? (i2.to(n3), void i2._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
        }), N.on(window, _t, () => {
          const t2 = z.find('[data-bs-ride="carousel"]');
          for (const e2 of t2)
            xt.getOrCreateInstance(e2);
        }), m(xt);
        const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", jt = "collapsing", Mt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = { parent: null, toggle: true }, Wt = { parent: "(null|element)", toggle: "boolean" };
        class Bt extends W {
          constructor(t2, e2) {
            super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
            const i2 = z.find(Ft);
            for (const t3 of i2) {
              const e3 = z.getSelectorFromElement(t3), i3 = z.find(e3).filter((t4) => t4 === this._element);
              null !== e3 && i3.length && this._triggerArray.push(t3);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return Ht;
          }
          static get DefaultType() {
            return Wt;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown())
              return;
            let t2 = [];
            if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => Bt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
              return;
            if (N.trigger(this._element, Lt).defaultPrevented)
              return;
            for (const e3 of t2)
              e3.hide();
            const e2 = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(jt), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(jt), this._element.classList.add(Pt, Nt), this._element.style[e2] = "", N.trigger(this._element, St);
            }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown())
              return;
            if (N.trigger(this._element, Dt).defaultPrevented)
              return;
            const t2 = this._getDimension();
            this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, d(this._element), this._element.classList.add(jt), this._element.classList.remove(Pt, Nt);
            for (const t3 of this._triggerArray) {
              const e2 = z.getElementFromSelector(t3);
              e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
            }
            this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(jt), this._element.classList.add(Pt), N.trigger(this._element, $t);
            }, this._element, true);
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains(Nt);
          }
          _configAfterMerge(t2) {
            return t2.toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), t2;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent)
              return;
            const t2 = this._getFirstLevelChildren(Ft);
            for (const e2 of t2) {
              const t3 = z.getElementFromSelector(e2);
              t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
            }
          }
          _getFirstLevelChildren(t2) {
            const e2 = z.find(Mt, this._config.parent);
            return z.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
          }
          _addAriaAndCollapsedClass(t2, e2) {
            if (t2.length)
              for (const i2 of t2)
                i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
          }
          static jQueryInterface(t2) {
            const e2 = {};
            return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
              const i2 = Bt.getOrCreateInstance(this, e2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2]();
              }
            });
          }
        }
        N.on(document, It, Ft, function(t2) {
          ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
          for (const t3 of z.getMultipleElementsFromSelector(this))
            Bt.getOrCreateInstance(t3, { toggle: false }).toggle();
        }), m(Bt);
        var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [zt, Rt, qt, Vt], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t2, e2) {
          return t2.concat([e2 + "-" + Xt, e2 + "-" + Yt]);
        }, []), ee = [].concat(Qt, [Kt]).reduce(function(t2, e2) {
          return t2.concat([e2, e2 + "-" + Xt, e2 + "-" + Yt]);
        }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [ie, ne, se, oe, re, ae, le, ce, he];
        function ue(t2) {
          return t2 ? (t2.nodeName || "").toLowerCase() : null;
        }
        function fe(t2) {
          if (null == t2)
            return window;
          if ("[object Window]" !== t2.toString()) {
            var e2 = t2.ownerDocument;
            return e2 && e2.defaultView || window;
          }
          return t2;
        }
        function pe(t2) {
          return t2 instanceof fe(t2).Element || t2 instanceof Element;
        }
        function me(t2) {
          return t2 instanceof fe(t2).HTMLElement || t2 instanceof HTMLElement;
        }
        function ge(t2) {
          return "undefined" != typeof ShadowRoot && (t2 instanceof fe(t2).ShadowRoot || t2 instanceof ShadowRoot);
        }
        const _e = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
          var e2 = t2.state;
          Object.keys(e2.elements).forEach(function(t3) {
            var i2 = e2.styles[t3] || {}, n3 = e2.attributes[t3] || {}, s3 = e2.elements[t3];
            me(s3) && ue(s3) && (Object.assign(s3.style, i2), Object.keys(n3).forEach(function(t4) {
              var e3 = n3[t4];
              false === e3 ? s3.removeAttribute(t4) : s3.setAttribute(t4, true === e3 ? "" : e3);
            }));
          });
        }, effect: function(t2) {
          var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
            Object.keys(e2.elements).forEach(function(t3) {
              var n3 = e2.elements[t3], s3 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
                return t4[e3] = "", t4;
              }, {});
              me(n3) && ue(n3) && (Object.assign(n3.style, o2), Object.keys(s3).forEach(function(t4) {
                n3.removeAttribute(t4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function be(t2) {
          return t2.split("-")[0];
        }
        var ve = Math.max, ye = Math.min, we = Math.round;
        function Ae() {
          var t2 = navigator.userAgentData;
          return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
            return t3.brand + "/" + t3.version;
          }).join(" ") : navigator.userAgent;
        }
        function Ee() {
          return !/^((?!chrome|android).)*safari/i.test(Ae());
        }
        function Te(t2, e2, i2) {
          void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
          var n3 = t2.getBoundingClientRect(), s3 = 1, o2 = 1;
          e2 && me(t2) && (s3 = t2.offsetWidth > 0 && we(n3.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && we(n3.height) / t2.offsetHeight || 1);
          var r2 = (pe(t2) ? fe(t2) : window).visualViewport, a2 = !Ee() && i2, l3 = (n3.left + (a2 && r2 ? r2.offsetLeft : 0)) / s3, c2 = (n3.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n3.width / s3, d2 = n3.height / o2;
          return { width: h2, height: d2, top: c2, right: l3 + h2, bottom: c2 + d2, left: l3, x: l3, y: c2 };
        }
        function Ce(t2) {
          var e2 = Te(t2), i2 = t2.offsetWidth, n3 = t2.offsetHeight;
          return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n3) <= 1 && (n3 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n3 };
        }
        function Oe(t2, e2) {
          var i2 = e2.getRootNode && e2.getRootNode();
          if (t2.contains(e2))
            return true;
          if (i2 && ge(i2)) {
            var n3 = e2;
            do {
              if (n3 && t2.isSameNode(n3))
                return true;
              n3 = n3.parentNode || n3.host;
            } while (n3);
          }
          return false;
        }
        function xe(t2) {
          return fe(t2).getComputedStyle(t2);
        }
        function ke(t2) {
          return ["table", "td", "th"].indexOf(ue(t2)) >= 0;
        }
        function Le(t2) {
          return ((pe(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
        }
        function Se(t2) {
          return "html" === ue(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ge(t2) ? t2.host : null) || Le(t2);
        }
        function De(t2) {
          return me(t2) && "fixed" !== xe(t2).position ? t2.offsetParent : null;
        }
        function $e(t2) {
          for (var e2 = fe(t2), i2 = De(t2); i2 && ke(i2) && "static" === xe(i2).position; )
            i2 = De(i2);
          return i2 && ("html" === ue(i2) || "body" === ue(i2) && "static" === xe(i2).position) ? e2 : i2 || function(t3) {
            var e3 = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t3) && "fixed" === xe(t3).position)
              return null;
            var i3 = Se(t3);
            for (ge(i3) && (i3 = i3.host); me(i3) && ["html", "body"].indexOf(ue(i3)) < 0; ) {
              var n3 = xe(i3);
              if ("none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || -1 !== ["transform", "perspective"].indexOf(n3.willChange) || e3 && "filter" === n3.willChange || e3 && n3.filter && "none" !== n3.filter)
                return i3;
              i3 = i3.parentNode;
            }
            return null;
          }(t2) || e2;
        }
        function Ie(t2) {
          return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
        }
        function Ne(t2, e2, i2) {
          return ve(t2, ye(e2, i2));
        }
        function Pe(t2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
        }
        function je(t2, e2) {
          return e2.reduce(function(e3, i2) {
            return e3[i2] = t2, e3;
          }, {});
        }
        const Me = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
          var e2, i2 = t2.state, n3 = t2.name, s3 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = be(i2.placement), l3 = Ie(a2), c2 = [Vt, qt].indexOf(a2) >= 0 ? "height" : "width";
          if (o2 && r2) {
            var h2 = function(t3, e3) {
              return Pe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : je(t3, Qt));
            }(s3.padding, i2), d2 = Ce(o2), u2 = "y" === l3 ? zt : Vt, f2 = "y" === l3 ? Rt : qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l3] - r2[l3] - i2.rects.popper[c2], m2 = r2[l3] - i2.rects.reference[l3], g2 = $e(o2), _2 = g2 ? "y" === l3 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Ne(v2, w2, y2), E2 = l3;
            i2.modifiersData[n3] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
          }
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.options.element, n3 = void 0 === i2 ? "[data-popper-arrow]" : i2;
          null != n3 && ("string" != typeof n3 || (n3 = e2.elements.popper.querySelector(n3))) && Oe(e2.elements.popper, n3) && (e2.elements.arrow = n3);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
        function Fe(t2) {
          return t2.split("-")[1];
        }
        var He = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function We(t2) {
          var e2, i2 = t2.popper, n3 = t2.popperRect, s3 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l3 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
          f2 = g2.x, m2 = g2.y;
          var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Vt, y2 = zt, w2 = window;
          if (c2) {
            var A2 = $e(i2), E2 = "clientHeight", T2 = "clientWidth";
            A2 === fe(i2) && "static" !== xe(A2 = Le(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s3 === zt || (s3 === Vt || s3 === qt) && o2 === Yt) && (y2 = Rt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n3.height, m2 *= l3 ? 1 : -1), s3 !== Vt && (s3 !== zt && s3 !== Rt || o2 !== Yt) || (v2 = qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n3.width, f2 *= l3 ? 1 : -1);
          }
          var C2, O2 = Object.assign({ position: a2 }, c2 && He), x2 = true === h2 ? function(t3, e3) {
            var i3 = t3.x, n4 = t3.y, s4 = e3.devicePixelRatio || 1;
            return { x: we(i3 * s4) / s4 || 0, y: we(n4 * s4) / s4 || 0 };
          }({ x: f2, y: m2 }, fe(i2)) : { x: f2, y: m2 };
          return f2 = x2.x, m2 = x2.y, l3 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
        }
        const Be = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n3 = i2.gpuAcceleration, s3 = void 0 === n3 || n3, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l3 = void 0 === a2 || a2, c2 = { placement: be(e2.placement), variation: Fe(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s3, isFixed: "fixed" === e2.options.strategy };
          null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, We(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l3 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, We(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l3 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
        }, data: {} };
        var ze = { passive: true };
        const Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.instance, n3 = t2.options, s3 = n3.scroll, o2 = void 0 === s3 || s3, r2 = n3.resize, a2 = void 0 === r2 || r2, l3 = fe(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
          return o2 && c2.forEach(function(t3) {
            t3.addEventListener("scroll", i2.update, ze);
          }), a2 && l3.addEventListener("resize", i2.update, ze), function() {
            o2 && c2.forEach(function(t3) {
              t3.removeEventListener("scroll", i2.update, ze);
            }), a2 && l3.removeEventListener("resize", i2.update, ze);
          };
        }, data: {} };
        var qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Ve(t2) {
          return t2.replace(/left|right|bottom|top/g, function(t3) {
            return qe[t3];
          });
        }
        var Ke = { start: "end", end: "start" };
        function Qe(t2) {
          return t2.replace(/start|end/g, function(t3) {
            return Ke[t3];
          });
        }
        function Xe(t2) {
          var e2 = fe(t2);
          return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
        }
        function Ye(t2) {
          return Te(Le(t2)).left + Xe(t2).scrollLeft;
        }
        function Ue(t2) {
          var e2 = xe(t2), i2 = e2.overflow, n3 = e2.overflowX, s3 = e2.overflowY;
          return /auto|scroll|overlay|hidden/.test(i2 + s3 + n3);
        }
        function Ge(t2) {
          return ["html", "body", "#document"].indexOf(ue(t2)) >= 0 ? t2.ownerDocument.body : me(t2) && Ue(t2) ? t2 : Ge(Se(t2));
        }
        function Je(t2, e2) {
          var i2;
          void 0 === e2 && (e2 = []);
          var n3 = Ge(t2), s3 = n3 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = fe(n3), r2 = s3 ? [o2].concat(o2.visualViewport || [], Ue(n3) ? n3 : []) : n3, a2 = e2.concat(r2);
          return s3 ? a2 : a2.concat(Je(Se(r2)));
        }
        function Ze(t2) {
          return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
        }
        function ti(t2, e2, i2) {
          return e2 === Gt ? Ze(function(t3, e3) {
            var i3 = fe(t3), n3 = Le(t3), s3 = i3.visualViewport, o2 = n3.clientWidth, r2 = n3.clientHeight, a2 = 0, l3 = 0;
            if (s3) {
              o2 = s3.width, r2 = s3.height;
              var c2 = Ee();
              (c2 || !c2 && "fixed" === e3) && (a2 = s3.offsetLeft, l3 = s3.offsetTop);
            }
            return { width: o2, height: r2, x: a2 + Ye(t3), y: l3 };
          }(t2, i2)) : pe(e2) ? function(t3, e3) {
            var i3 = Te(t3, false, "fixed" === e3);
            return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
          }(e2, i2) : Ze(function(t3) {
            var e3, i3 = Le(t3), n3 = Xe(t3), s3 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = ve(i3.scrollWidth, i3.clientWidth, s3 ? s3.scrollWidth : 0, s3 ? s3.clientWidth : 0), r2 = ve(i3.scrollHeight, i3.clientHeight, s3 ? s3.scrollHeight : 0, s3 ? s3.clientHeight : 0), a2 = -n3.scrollLeft + Ye(t3), l3 = -n3.scrollTop;
            return "rtl" === xe(s3 || i3).direction && (a2 += ve(i3.clientWidth, s3 ? s3.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l3 };
          }(Le(t2)));
        }
        function ei(t2) {
          var e2, i2 = t2.reference, n3 = t2.element, s3 = t2.placement, o2 = s3 ? be(s3) : null, r2 = s3 ? Fe(s3) : null, a2 = i2.x + i2.width / 2 - n3.width / 2, l3 = i2.y + i2.height / 2 - n3.height / 2;
          switch (o2) {
            case zt:
              e2 = { x: a2, y: i2.y - n3.height };
              break;
            case Rt:
              e2 = { x: a2, y: i2.y + i2.height };
              break;
            case qt:
              e2 = { x: i2.x + i2.width, y: l3 };
              break;
            case Vt:
              e2 = { x: i2.x - n3.width, y: l3 };
              break;
            default:
              e2 = { x: i2.x, y: i2.y };
          }
          var c2 = o2 ? Ie(o2) : null;
          if (null != c2) {
            var h2 = "y" === c2 ? "height" : "width";
            switch (r2) {
              case Xt:
                e2[c2] = e2[c2] - (i2[h2] / 2 - n3[h2] / 2);
                break;
              case Yt:
                e2[c2] = e2[c2] + (i2[h2] / 2 - n3[h2] / 2);
            }
          }
          return e2;
        }
        function ii(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n3 = i2.placement, s3 = void 0 === n3 ? t2.placement : n3, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l3 = void 0 === a2 ? Ut : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? Gt : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? Jt : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Pe("number" != typeof g2 ? g2 : je(g2, Qt)), b2 = u2 === Jt ? Zt : Jt, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = function(t3, e3, i3, n4) {
            var s4 = "clippingParents" === e3 ? function(t4) {
              var e4 = Je(Se(t4)), i4 = ["absolute", "fixed"].indexOf(xe(t4).position) >= 0 && me(t4) ? $e(t4) : t4;
              return pe(i4) ? e4.filter(function(t5) {
                return pe(t5) && Oe(t5, i4) && "body" !== ue(t5);
              }) : [];
            }(t3) : [].concat(e3), o3 = [].concat(s4, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
              var s5 = ti(t3, i4, n4);
              return e4.top = ve(s5.top, e4.top), e4.right = ye(s5.right, e4.right), e4.bottom = ye(s5.bottom, e4.bottom), e4.left = ve(s5.left, e4.left), e4;
            }, ti(t3, r3, n4));
            return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
          }(pe(y2) ? y2 : y2.contextElement || Le(t2.elements.popper), l3, h2, r2), A2 = Te(t2.elements.reference), E2 = ei({ reference: A2, element: v2, strategy: "absolute", placement: s3 }), T2 = Ze(Object.assign({}, v2, E2)), C2 = u2 === Jt ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
          if (u2 === Jt && x2) {
            var k2 = x2[s3];
            Object.keys(O2).forEach(function(t3) {
              var e3 = [qt, Rt].indexOf(t3) >= 0 ? 1 : -1, i3 = [zt, Rt].indexOf(t3) >= 0 ? "y" : "x";
              O2[t3] += k2[i3] * e3;
            });
          }
          return O2;
        }
        function ni(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n3 = i2.placement, s3 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l3 = i2.allowedAutoPlacements, c2 = void 0 === l3 ? ee : l3, h2 = Fe(n3), d2 = h2 ? a2 ? te : te.filter(function(t3) {
            return Fe(t3) === h2;
          }) : Qt, u2 = d2.filter(function(t3) {
            return c2.indexOf(t3) >= 0;
          });
          0 === u2.length && (u2 = d2);
          var f2 = u2.reduce(function(e3, i3) {
            return e3[i3] = ii(t2, { placement: i3, boundary: s3, rootBoundary: o2, padding: r2 })[be(i3)], e3;
          }, {});
          return Object.keys(f2).sort(function(t3, e3) {
            return f2[t3] - f2[e3];
          });
        }
        const si = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n3 = t2.name;
          if (!e2.modifiersData[n3]._skip) {
            for (var s3 = i2.mainAxis, o2 = void 0 === s3 || s3, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l3 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = be(g2), b2 = l3 || (_2 !== g2 && p2 ? function(t3) {
              if (be(t3) === Kt)
                return [];
              var e3 = Ve(t3);
              return [Qe(t3), e3, Qe(e3)];
            }(g2) : [Ve(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
              return t3.concat(be(i3) === Kt ? ni(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
            }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
              var O2 = v2[C2], x2 = be(O2), k2 = Fe(O2) === Xt, L2 = [zt, Rt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = ii(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? qt : Vt : k2 ? Rt : zt;
              y2[S2] > w2[S2] && ($2 = Ve($2));
              var I2 = Ve($2), N2 = [];
              if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
                return t3;
              })) {
                T2 = O2, E2 = false;
                break;
              }
              A2.set(O2, N2);
            }
            if (E2)
              for (var P2 = function(t3) {
                var e3 = v2.find(function(e4) {
                  var i3 = A2.get(e4);
                  if (i3)
                    return i3.slice(0, t3).every(function(t4) {
                      return t4;
                    });
                });
                if (e3)
                  return T2 = e3, "break";
              }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== P2(j2); j2--)
                ;
            e2.placement !== T2 && (e2.modifiersData[n3]._skip = true, e2.placement = T2, e2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function oi(t2, e2, i2) {
          return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
        }
        function ri(t2) {
          return [zt, qt, Rt, Vt].some(function(e2) {
            return t2[e2] >= 0;
          });
        }
        const ai = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.name, n3 = e2.rects.reference, s3 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = ii(e2, { elementContext: "reference" }), a2 = ii(e2, { altBoundary: true }), l3 = oi(r2, n3), c2 = oi(a2, s3, o2), h2 = ri(l3), d2 = ri(c2);
          e2.modifiersData[i2] = { referenceClippingOffsets: l3, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
        } }, li = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n3 = t2.name, s3 = i2.offset, o2 = void 0 === s3 ? [0, 0] : s3, r2 = ee.reduce(function(t3, i3) {
            return t3[i3] = function(t4, e3, i4) {
              var n4 = be(t4), s4 = [Vt, zt].indexOf(n4) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
              return r3 = r3 || 0, a3 = (a3 || 0) * s4, [Vt, qt].indexOf(n4) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
            }(i3, e2.rects, o2), t3;
          }, {}), a2 = r2[e2.placement], l3 = a2.x, c2 = a2.y;
          null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l3, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n3] = r2;
        } }, ci = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
          var e2 = t2.state, i2 = t2.name;
          e2.modifiersData[i2] = ei({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
        }, data: {} }, hi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n3 = t2.name, s3 = i2.mainAxis, o2 = void 0 === s3 || s3, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l3 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = ii(e2, { boundary: l3, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = be(e2.placement), b2 = Fe(e2.placement), v2 = !b2, y2 = Ie(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
          if (A2) {
            if (o2) {
              var L2, S2 = "y" === y2 ? zt : Vt, D2 = "y" === y2 ? Rt : qt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], j2 = f2 ? -T2[$2] / 2 : 0, M2 = b2 === Xt ? E2[$2] : T2[$2], F2 = b2 === Xt ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? Ce(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Ne(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - j2 - q2 - z2 - O2.mainAxis : M2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + j2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && $e(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Ne(f2 ? ye(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? ve(P2, U2) : P2);
              A2[y2] = G2, k2[y2] = G2 - I2;
            }
            if (a2) {
              var J2, Z2 = "x" === y2 ? zt : Vt, tt2 = "x" === y2 ? Rt : qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [zt, Vt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? function(t3, e3, i3) {
                var n4 = Ne(t3, e3, i3);
                return n4 > i3 ? i3 : n4;
              }(at2, et2, lt2) : Ne(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
              A2[w2] = ct2, k2[w2] = ct2 - et2;
            }
            e2.modifiersData[n3] = k2;
          }
        }, requiresIfExists: ["offset"] };
        function di(t2, e2, i2) {
          void 0 === i2 && (i2 = false);
          var n3, s3, o2 = me(e2), r2 = me(e2) && function(t3) {
            var e3 = t3.getBoundingClientRect(), i3 = we(e3.width) / t3.offsetWidth || 1, n4 = we(e3.height) / t3.offsetHeight || 1;
            return 1 !== i3 || 1 !== n4;
          }(e2), a2 = Le(e2), l3 = Te(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
          return (o2 || !o2 && !i2) && (("body" !== ue(e2) || Ue(a2)) && (c2 = (n3 = e2) !== fe(n3) && me(n3) ? { scrollLeft: (s3 = n3).scrollLeft, scrollTop: s3.scrollTop } : Xe(n3)), me(e2) ? ((h2 = Te(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Ye(a2))), { x: l3.left + c2.scrollLeft - h2.x, y: l3.top + c2.scrollTop - h2.y, width: l3.width, height: l3.height };
        }
        function ui(t2) {
          var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n3 = [];
          function s3(t3) {
            i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
              if (!i2.has(t4)) {
                var n4 = e2.get(t4);
                n4 && s3(n4);
              }
            }), n3.push(t3);
          }
          return t2.forEach(function(t3) {
            e2.set(t3.name, t3);
          }), t2.forEach(function(t3) {
            i2.has(t3.name) || s3(t3);
          }), n3;
        }
        var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function pi() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            e2[i2] = arguments[i2];
          return !e2.some(function(t3) {
            return !(t3 && "function" == typeof t3.getBoundingClientRect);
          });
        }
        function mi(t2) {
          void 0 === t2 && (t2 = {});
          var e2 = t2, i2 = e2.defaultModifiers, n3 = void 0 === i2 ? [] : i2, s3 = e2.defaultOptions, o2 = void 0 === s3 ? fi : s3;
          return function(t3, e3, i3) {
            void 0 === i3 && (i3 = o2);
            var s4, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l3 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
              var s5 = "function" == typeof i4 ? i4(a2.options) : i4;
              d2(), a2.options = Object.assign({}, o2, a2.options, s5), a2.scrollParents = { reference: pe(t3) ? Je(t3) : t3.contextElement ? Je(t3.contextElement) : [], popper: Je(e3) };
              var r3, c3, u2 = function(t4) {
                var e4 = ui(t4);
                return de.reduce(function(t5, i5) {
                  return t5.concat(e4.filter(function(t6) {
                    return t6.phase === i5;
                  }));
                }, []);
              }((r3 = [].concat(n3, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
              }, {}), Object.keys(c3).map(function(t4) {
                return c3[t4];
              })));
              return a2.orderedModifiers = u2.filter(function(t4) {
                return t4.enabled;
              }), a2.orderedModifiers.forEach(function(t4) {
                var e4 = t4.name, i5 = t4.options, n4 = void 0 === i5 ? {} : i5, s6 = t4.effect;
                if ("function" == typeof s6) {
                  var o3 = s6({ state: a2, name: e4, instance: h2, options: n4 });
                  l3.push(o3 || function() {
                  });
                }
              }), h2.update();
            }, forceUpdate: function() {
              if (!c2) {
                var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
                if (pi(e4, i4)) {
                  a2.rects = { reference: di(e4, $e(i4), "fixed" === a2.options.strategy), popper: Ce(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                    return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                  });
                  for (var n4 = 0; n4 < a2.orderedModifiers.length; n4++)
                    if (true !== a2.reset) {
                      var s5 = a2.orderedModifiers[n4], o3 = s5.fn, r3 = s5.options, l4 = void 0 === r3 ? {} : r3, d3 = s5.name;
                      "function" == typeof o3 && (a2 = o3({ state: a2, options: l4, name: d3, instance: h2 }) || a2);
                    } else
                      a2.reset = false, n4 = -1;
                }
              }
            }, update: (s4 = function() {
              return new Promise(function(t4) {
                h2.forceUpdate(), t4(a2);
              });
            }, function() {
              return r2 || (r2 = new Promise(function(t4) {
                Promise.resolve().then(function() {
                  r2 = void 0, t4(s4());
                });
              })), r2;
            }), destroy: function() {
              d2(), c2 = true;
            } };
            if (!pi(t3, e3))
              return h2;
            function d2() {
              l3.forEach(function(t4) {
                return t4();
              }), l3 = [];
            }
            return h2.setOptions(i3).then(function(t4) {
              !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
            }), h2;
          };
        }
        var gi = mi(), _i = mi({ defaultModifiers: [Re, ci, Be, _e] }), bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai] });
        const vi = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: ae, afterRead: se, afterWrite: he, applyStyles: _e, arrow: Me, auto: Kt, basePlacements: Qt, beforeMain: oe, beforeRead: ie, beforeWrite: le, bottom: Rt, clippingParents: Ut, computeStyles: Be, createPopper: bi, createPopperBase: gi, createPopperLite: _i, detectOverflow: ii, end: Yt, eventListeners: Re, flip: si, hide: ai, left: Vt, main: re, modifierPhases: de, offset: li, placements: ee, popper: Jt, popperGenerator: mi, popperOffsets: ci, preventOverflow: hi, read: ne, reference: Zt, right: qt, start: Xt, top: zt, variationPlacements: te, viewport: Gt, write: ce }, Symbol.toStringTag, { value: "Module" })), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", ji = p() ? "top-end" : "top-start", Mi = p() ? "top-start" : "top-end", Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end", Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ri = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
        class qi extends W {
          constructor(t2, e2) {
            super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return zi;
          }
          static get DefaultType() {
            return Ri;
          }
          static get NAME() {
            return yi;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l2(this._element) || this._isShown())
              return;
            const t2 = { relatedTarget: this._element };
            if (!N.trigger(this._element, xi, t2).defaultPrevented) {
              if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                for (const t3 of [].concat(...document.body.children))
                  N.on(t3, "mouseover", h);
              this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t2);
            }
          }
          hide() {
            if (l2(this._element) || !this._isShown())
              return;
            const t2 = { relatedTarget: this._element };
            this._completeHide(t2);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t2) {
            if (!N.trigger(this._element, Ci, t2).defaultPrevented) {
              if ("ontouchstart" in document.documentElement)
                for (const t3 of [].concat(...document.body.children))
                  N.off(t3, "mouseover", h);
              this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t2);
            }
          }
          _getConfig(t2) {
            if ("object" == typeof (t2 = super._getConfig(t2)).reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
              throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t2;
          }
          _createPopper() {
            if (void 0 === vi)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t2 = this._element;
            "parent" === this._config.reference ? t2 = this._parent : o(this._config.reference) ? t2 = r(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
            const e2 = this._getPopperConfig();
            this._popper = bi(t2, this._menu, e2);
          }
          _isShown() {
            return this._menu.classList.contains($i);
          }
          _getPlacement() {
            const t2 = this._parent;
            if (t2.classList.contains("dropend"))
              return Wi;
            if (t2.classList.contains("dropstart"))
              return Bi;
            if (t2.classList.contains("dropup-center"))
              return "top";
            if (t2.classList.contains("dropdown-center"))
              return "bottom";
            const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t2.classList.contains("dropup") ? e2 ? Mi : ji : e2 ? Hi : Fi;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _getPopperConfig() {
            const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), __spreadValues(__spreadValues({}, t2), g(this._config.popperConfig, [t2]));
          }
          _selectMenuItem({ key: t2, target: e2 }) {
            const i2 = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => a(t3));
            i2.length && b(i2, e2, t2 === Ti, !i2.includes(e2)).focus();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = qi.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
          static clearMenus(t2) {
            if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
              return;
            const e2 = z.find(Ni);
            for (const i2 of e2) {
              const e3 = qi.getInstance(i2);
              if (!e3 || false === e3._config.autoClose)
                continue;
              const n3 = t2.composedPath(), s3 = n3.includes(e3._menu);
              if (n3.includes(e3._element) || "inside" === e3._config.autoClose && !s3 || "outside" === e3._config.autoClose && s3)
                continue;
              if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName)))
                continue;
              const o2 = { relatedTarget: e3._element };
              "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
            }
          }
          static dataApiKeydownHandler(t2) {
            const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n3 = [Ei, Ti].includes(t2.key);
            if (!n3 && !i2)
              return;
            if (e2 && !i2)
              return;
            t2.preventDefault();
            const s3 = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t2.delegateTarget.parentNode), o2 = qi.getOrCreateInstance(s3);
            if (n3)
              return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
            o2._isShown() && (t2.stopPropagation(), o2.hide(), s3.focus());
          }
        }
        N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t2) {
          t2.preventDefault(), qi.getOrCreateInstance(this).toggle();
        }), m(qi);
        const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Yi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
        class Ui extends H {
          constructor(t2) {
            super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
          }
          static get Default() {
            return Xi;
          }
          static get DefaultType() {
            return Yi;
          }
          static get NAME() {
            return Vi;
          }
          show(t2) {
            if (!this._config.isVisible)
              return void g(t2);
            this._append();
            const e2 = this._getElement();
            this._config.isAnimated && d(e2), e2.classList.add(Ki), this._emulateAnimation(() => {
              g(t2);
            });
          }
          hide(t2) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
              this.dispose(), g(t2);
            })) : g(t2);
          }
          dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = false);
          }
          _getElement() {
            if (!this._element) {
              const t2 = document.createElement("div");
              t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
            }
            return this._element;
          }
          _configAfterMerge(t2) {
            return t2.rootElement = r(t2.rootElement), t2;
          }
          _append() {
            if (this._isAppended)
              return;
            const t2 = this._getElement();
            this._config.rootElement.append(t2), N.on(t2, Qi, () => {
              g(this._config.clickCallback);
            }), this._isAppended = true;
          }
          _emulateAnimation(t2) {
            _(t2, this._getElement(), this._config.isAnimated);
          }
        }
        const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward", en = { autofocus: true, trapElement: null }, nn = { autofocus: "boolean", trapElement: "element" };
        class sn extends H {
          constructor(t2) {
            super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
          }
          static get Default() {
            return en;
          }
          static get DefaultType() {
            return nn;
          }
          static get NAME() {
            return "focustrap";
          }
          activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t2) => this._handleFocusin(t2)), N.on(document, Zi, (t2) => this._handleKeydown(t2)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, N.off(document, Gi));
          }
          _handleFocusin(t2) {
            const { trapElement: e2 } = this._config;
            if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
              return;
            const i2 = z.focusableChildren(e2);
            0 === i2.length ? e2.focus() : this._lastTabNavDirection === tn ? i2[i2.length - 1].focus() : i2[0].focus();
          }
          _handleKeydown(t2) {
            "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? tn : "forward");
          }
        }
        const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right", ln = "margin-right";
        class cn {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t2 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t2);
          }
          hide() {
            const t2 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e2) => e2 + t2), this._setElementAttributes(on, an, (e2) => e2 + t2), this._setElementAttributes(rn, ln, (e2) => e2 - t2);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t2, e2, i2) {
            const n3 = this.getWidth();
            this._applyManipulationCallback(t2, (t3) => {
              if (t3 !== this._element && window.innerWidth > t3.clientWidth + n3)
                return;
              this._saveInitialAttribute(t3, e2);
              const s3 = window.getComputedStyle(t3).getPropertyValue(e2);
              t3.style.setProperty(e2, `${i2(Number.parseFloat(s3))}px`);
            });
          }
          _saveInitialAttribute(t2, e2) {
            const i2 = t2.style.getPropertyValue(e2);
            i2 && F.setDataAttribute(t2, e2, i2);
          }
          _resetElementAttributes(t2, e2) {
            this._applyManipulationCallback(t2, (t3) => {
              const i2 = F.getDataAttribute(t3, e2);
              null !== i2 ? (F.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
            });
          }
          _applyManipulationCallback(t2, e2) {
            if (o(t2))
              e2(t2);
            else
              for (const i2 of z.find(t2, this._element))
                e2(i2);
          }
        }
        const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = { backdrop: true, focus: true, keyboard: true }, Cn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
        class On extends W {
          constructor(t2, e2) {
            super(t2, e2), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new cn(), this._addEventListeners();
          }
          static get Default() {
            return Tn;
          }
          static get DefaultType() {
            return Cn;
          }
          static get NAME() {
            return "modal";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
          }
          hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
          }
          dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new Ui({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new sn({ trapElement: this._element });
          }
          _showElement(t2) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e2 = z.findOne(".modal-body", this._dialog);
            e2 && (e2.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, mn, { relatedTarget: t2 });
            }, this._dialog, this._isAnimated());
          }
          _addEventListeners() {
            N.on(this._element, vn, (t2) => {
              "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), N.on(window, gn, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }), N.on(this._element, bn, (t2) => {
              N.one(this._element, _n, (e2) => {
                this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
              });
            });
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
            });
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented)
              return;
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
            "hidden" === e2 || this._element.classList.contains(En) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
              this._element.classList.remove(En), this._queueCallback(() => {
                this._element.style.overflowY = e2;
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
            if (i2 && !t2) {
              const t3 = p() ? "paddingLeft" : "paddingRight";
              this._element.style[t3] = `${e2}px`;
            }
            if (!i2 && t2) {
              const t3 = p() ? "paddingRight" : "paddingLeft";
              this._element.style[t3] = `${e2}px`;
            }
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t2, e2) {
            return this.each(function() {
              const i2 = On.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2](e2);
              }
            });
          }
        }
        N.on(document, yn, '[data-bs-toggle="modal"]', function(t2) {
          const e2 = z.getElementFromSelector(this);
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), N.one(e2, pn, (t3) => {
            t3.defaultPrevented || N.one(e2, fn, () => {
              a(this) && this.focus();
            });
          });
          const i2 = z.findOne(".modal.show");
          i2 && On.getInstance(i2).hide(), On.getOrCreateInstance(e2).toggle(this);
        }), R(On), m(On);
        const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, jn = `hide${xn}`, Mn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = { backdrop: true, keyboard: true, scroll: false }, Rn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class qn extends W {
          constructor(t2, e2) {
            super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get Default() {
            return zn;
          }
          static get DefaultType() {
            return Rn;
          }
          static get NAME() {
            return "offcanvas";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || N.trigger(this._element, Nn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(() => {
              this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, { relatedTarget: t2 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (N.trigger(this._element, jn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(() => {
              this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N.trigger(this._element, Fn);
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _initializeBackDrop() {
            const t2 = Boolean(this._config.backdrop);
            return new Ui({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
              "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Mn);
            } : null });
          }
          _initializeFocusTrap() {
            return new sn({ trapElement: this._element });
          }
          _addEventListeners() {
            N.on(this._element, Bn, (t2) => {
              "Escape" === t2.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Mn));
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = qn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t2) {
          const e2 = z.getElementFromSelector(this);
          if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l2(this))
            return;
          N.one(e2, Fn, () => {
            a(this) && this.focus();
          });
          const i2 = z.findOne(In);
          i2 && i2 !== e2 && qn.getInstance(i2).hide(), qn.getOrCreateInstance(e2).toggle(this);
        }), N.on(window, Ln, () => {
          for (const t2 of z.find(In))
            qn.getOrCreateInstance(t2).show();
        }), N.on(window, Hn, () => {
          for (const t2 of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t2).position && qn.getOrCreateInstance(t2).hide();
        }), R(qn), m(qn);
        const Vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Kn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t2, e2) => {
          const i2 = t2.nodeName.toLowerCase();
          return e2.includes(i2) ? !Kn.has(i2) || Boolean(Qn.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
        }, Yn = { allowList: Vn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Un = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Gn = { entry: "(string|element|function|null)", selector: "(string|element)" };
        class Jn extends H {
          constructor(t2) {
            super(), this._config = this._getConfig(t2);
          }
          static get Default() {
            return Yn;
          }
          static get DefaultType() {
            return Un;
          }
          static get NAME() {
            return "TemplateFactory";
          }
          getContent() {
            return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
          }
          hasContent() {
            return this.getContent().length > 0;
          }
          changeContent(t2) {
            return this._checkContent(t2), this._config.content = __spreadValues(__spreadValues({}, this._config.content), t2), this;
          }
          toHtml() {
            const t2 = document.createElement("div");
            t2.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e3, i3] of Object.entries(this._config.content))
              this._setContent(t2, i3, e3);
            const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
            return i2 && e2.classList.add(...i2.split(" ")), e2;
          }
          _typeCheckConfig(t2) {
            super._typeCheckConfig(t2), this._checkContent(t2.content);
          }
          _checkContent(t2) {
            for (const [e2, i2] of Object.entries(t2))
              super._typeCheckConfig({ selector: e2, entry: i2 }, Gn);
          }
          _setContent(t2, e2, i2) {
            const n3 = z.findOne(i2, t2);
            n3 && ((e2 = this._resolvePossibleFunction(e2)) ? o(e2) ? this._putElementInTemplate(r(e2), n3) : this._config.html ? n3.innerHTML = this._maybeSanitize(e2) : n3.textContent = e2 : n3.remove());
          }
          _maybeSanitize(t2) {
            return this._config.sanitize ? function(t3, e2, i2) {
              if (!t3.length)
                return t3;
              if (i2 && "function" == typeof i2)
                return i2(t3);
              const n3 = new window.DOMParser().parseFromString(t3, "text/html"), s3 = [].concat(...n3.body.querySelectorAll("*"));
              for (const t4 of s3) {
                const i3 = t4.nodeName.toLowerCase();
                if (!Object.keys(e2).includes(i3)) {
                  t4.remove();
                  continue;
                }
                const n4 = [].concat(...t4.attributes), s4 = [].concat(e2["*"] || [], e2[i3] || []);
                for (const e3 of n4)
                  Xn(e3, s4) || t4.removeAttribute(e3.nodeName);
              }
              return n3.body.innerHTML;
            }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
          }
          _resolvePossibleFunction(t2) {
            return g(t2, [this]);
          }
          _putElementInTemplate(t2, e2) {
            if (this._config.html)
              return e2.innerHTML = "", void e2.append(t2);
            e2.textContent = t2.textContent;
          }
        }
        const Zn = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, as = { allowList: Vn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ls = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
        class cs extends W {
          constructor(t2, e2) {
            if (void 0 === vi)
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
          }
          static get Default() {
            return as;
          }
          static get DefaultType() {
            return ls;
          }
          static get NAME() {
            return "tooltip";
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
          }
          dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
          }
          show() {
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
              return;
            const t2 = N.trigger(this._element, this.constructor.eventName("show")), e2 = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t2.defaultPrevented || !e2)
              return;
            this._disposePopper();
            const i2 = this._getTipElement();
            this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
            const { container: n3 } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n3.append(i2), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(es), "ontouchstart" in document.documentElement)
              for (const t3 of [].concat(...document.body.children))
                N.on(t3, "mouseover", h);
            this._queueCallback(() => {
              N.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
            }, this.tip, this._isAnimated());
          }
          hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
              if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
                for (const t2 of [].concat(...document.body.children))
                  N.off(t2, "mouseover", h);
              this._activeTrigger.click = false, this._activeTrigger[os] = false, this._activeTrigger[ss] = false, this._isHovered = null, this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
              }, this.tip, this._isAnimated());
            }
          }
          update() {
            this._popper && this._popper.update();
          }
          _isWithContent() {
            return Boolean(this._getTitle());
          }
          _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
          }
          _createTipElement(t2) {
            const e2 = this._getTemplateFactory(t2).toHtml();
            if (!e2)
              return null;
            e2.classList.remove(ts, es), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i2 = ((t3) => {
              do {
                t3 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t3));
              return t3;
            })(this.constructor.NAME).toString();
            return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ts), e2;
          }
          setContent(t2) {
            this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
          }
          _getTemplateFactory(t2) {
            return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Jn(__spreadProps(__spreadValues({}, this._config), { content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) })), this._templateFactory;
          }
          _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
          }
          _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
          }
          _initializeOnDelegatedTarget(t2) {
            return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
          }
          _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts);
          }
          _isShown() {
            return this.tip && this.tip.classList.contains(es);
          }
          _createPopper(t2) {
            const e2 = g(this._config.placement, [this, t2, this._element]), i2 = rs[e2.toUpperCase()];
            return bi(this._element, t2, this._getPopperConfig(i2));
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _resolvePossibleFunction(t2) {
            return g(t2, [this._element]);
          }
          _getPopperConfig(t2) {
            const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
              this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
            } }] };
            return __spreadValues(__spreadValues({}, e2), g(this._config.popperConfig, [e2]));
          }
          _setListeners() {
            const t2 = this._config.trigger.split(" ");
            for (const e2 of t2)
              if ("click" === e2)
                N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
                  this._initializeOnDelegatedTarget(t3).toggle();
                });
              else if ("manual" !== e2) {
                const t3 = e2 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t3, this._config.selector, (t4) => {
                  const e3 = this._initializeOnDelegatedTarget(t4);
                  e3._activeTrigger["focusin" === t4.type ? os : ss] = true, e3._enter();
                }), N.on(this._element, i2, this._config.selector, (t4) => {
                  const e3 = this._initializeOnDelegatedTarget(t4);
                  e3._activeTrigger["focusout" === t4.type ? os : ss] = e3._element.contains(t4.relatedTarget), e3._leave();
                });
              }
            this._hideModalHandler = () => {
              this._element && this.hide();
            }, N.on(this._element.closest(is), ns, this._hideModalHandler);
          }
          _fixTitle() {
            const t2 = this._element.getAttribute("title");
            t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
          }
          _enter() {
            this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
          }
          _leave() {
            this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
          }
          _setTimeout(t2, e2) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
          }
          _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(true);
          }
          _getConfig(t2) {
            const e2 = F.getDataAttributes(this._element);
            for (const t3 of Object.keys(e2))
              Zn.has(t3) && delete e2[t3];
            return t2 = __spreadValues(__spreadValues({}, e2), "object" == typeof t2 && t2 ? t2 : {}), t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          _configAfterMerge(t2) {
            return t2.container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
          }
          _getDelegateConfig() {
            const t2 = {};
            for (const [e2, i2] of Object.entries(this._config))
              this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
            return t2.selector = false, t2.trigger = "manual", t2;
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = cs.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(cs);
        const hs = __spreadProps(__spreadValues({}, cs.Default), { content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }), ds = __spreadProps(__spreadValues({}, cs.DefaultType), { content: "(null|string|element|function)" });
        class us extends cs {
          static get Default() {
            return hs;
          }
          static get DefaultType() {
            return ds;
          }
          static get NAME() {
            return "popover";
          }
          _isWithContent() {
            return this._getTitle() || this._getContent();
          }
          _getContentForTemplate() {
            return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = us.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(us);
        const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, As = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
        class Es extends W {
          constructor(t2, e2) {
            super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
          }
          static get Default() {
            return ws;
          }
          static get DefaultType() {
            return As;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t2 of this._observableSections.values())
              this._observer.observe(t2);
          }
          dispose() {
            this._observer.disconnect(), super.dispose();
          }
          _configAfterMerge(t2) {
            return t2.target = r(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
          }
          _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t2) => {
              const e2 = this._observableSections.get(t2.target.hash);
              if (e2) {
                t2.preventDefault();
                const i2 = this._rootElement || window, n3 = e2.offsetTop - this._element.offsetTop;
                if (i2.scrollTo)
                  return void i2.scrollTo({ top: n3, behavior: "smooth" });
                i2.scrollTop = n3;
              }
            }));
          }
          _getNewObserver() {
            const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
            return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
          }
          _observerCallback(t2) {
            const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
              this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
            }, n3 = (this._rootElement || document.documentElement).scrollTop, s3 = n3 >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n3;
            for (const o2 of t2) {
              if (!o2.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(e2(o2));
                continue;
              }
              const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s3 && t3) {
                if (i2(o2), !n3)
                  return;
              } else
                s3 || t3 || i2(o2);
            }
          }
          _initializeTargetsAndObservables() {
            this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
            const t2 = z.find(bs, this._config.target);
            for (const e2 of t2) {
              if (!e2.hash || l2(e2))
                continue;
              const t3 = z.findOne(decodeURI(e2.hash), this._element);
              a(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
            }
          }
          _process(t2) {
            this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(_s), this._activateParents(t2), N.trigger(this._element, ps, { relatedTarget: t2 }));
          }
          _activateParents(t2) {
            if (t2.classList.contains("dropdown-item"))
              z.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(_s);
            else
              for (const e2 of z.parents(t2, ".nav, .list-group"))
                for (const t3 of z.prev(e2, ys))
                  t3.classList.add(_s);
          }
          _clearActiveClass(t2) {
            t2.classList.remove(_s);
            const e2 = z.find(`${bs}.${_s}`, t2);
            for (const t3 of e2)
              t3.classList.remove(_s);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Es.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        N.on(window, gs, () => {
          for (const t2 of z.find('[data-bs-spy="scroll"]'))
            Es.getOrCreateInstance(t2);
        }), m(Es);
        const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", js = "Home", Ms = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
        class Ks extends W {
          constructor(t2) {
            super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t3) => this._keydown(t3)));
          }
          static get NAME() {
            return "tab";
          }
          show() {
            const t2 = this._element;
            if (this._elemIsActive(t2))
              return;
            const e2 = this._getActiveElem(), i2 = e2 ? N.trigger(e2, Cs, { relatedTarget: t2 }) : null;
            N.trigger(t2, xs, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
          }
          _activate(t2, e2) {
            t2 && (t2.classList.add(Fs), this._activate(z.getElementFromSelector(t2)), this._queueCallback(() => {
              "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), N.trigger(t2, ks, { relatedTarget: e2 })) : t2.classList.add(Ws);
            }, t2, t2.classList.contains(Hs)));
          }
          _deactivate(t2, e2) {
            t2 && (t2.classList.remove(Fs), t2.blur(), this._deactivate(z.getElementFromSelector(t2)), this._queueCallback(() => {
              "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), N.trigger(t2, Os, { relatedTarget: e2 })) : t2.classList.remove(Ws);
            }, t2, t2.classList.contains(Hs)));
          }
          _keydown(t2) {
            if (![$s, Is, Ns, Ps, js, Ms].includes(t2.key))
              return;
            t2.stopPropagation(), t2.preventDefault();
            const e2 = this._getChildren().filter((t3) => !l2(t3));
            let i2;
            if ([js, Ms].includes(t2.key))
              i2 = e2[t2.key === js ? 0 : e2.length - 1];
            else {
              const n3 = [Is, Ps].includes(t2.key);
              i2 = b(e2, t2.target, n3, true);
            }
            i2 && (i2.focus({ preventScroll: true }), Ks.getOrCreateInstance(i2).show());
          }
          _getChildren() {
            return z.find(qs, this._parent);
          }
          _getActiveElem() {
            return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
          }
          _setInitialAttributes(t2, e2) {
            this._setAttributeIfNotExists(t2, "role", "tablist");
            for (const t3 of e2)
              this._setInitialAttributesOnChild(t3);
          }
          _setInitialAttributesOnChild(t2) {
            t2 = this._getInnerElement(t2);
            const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
            t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
          }
          _setInitialAttributesOnTargetPanel(t2) {
            const e2 = z.getElementFromSelector(t2);
            e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
          }
          _toggleDropDown(t2, e2) {
            const i2 = this._getOuterElement(t2);
            if (!i2.classList.contains("dropdown"))
              return;
            const n3 = (t3, n4) => {
              const s3 = z.findOne(t3, i2);
              s3 && s3.classList.toggle(n4, e2);
            };
            n3(Bs, Fs), n3(".dropdown-menu", Ws), i2.setAttribute("aria-expanded", e2);
          }
          _setAttributeIfNotExists(t2, e2, i2) {
            t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
          }
          _elemIsActive(t2) {
            return t2.classList.contains(Fs);
          }
          _getInnerElement(t2) {
            return t2.matches(qs) ? t2 : z.findOne(qs, t2);
          }
          _getOuterElement(t2) {
            return t2.closest(".nav-item, .list-group-item") || t2;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Ks.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        N.on(document, Ls, Rs, function(t2) {
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l2(this) || Ks.getOrCreateInstance(this).show();
        }), N.on(window, Ds, () => {
          for (const t2 of z.find(Vs))
            Ks.getOrCreateInstance(t2);
        }), m(Ks);
        const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = { animation: "boolean", autohide: "boolean", delay: "number" }, ro = { animation: true, autohide: true, delay: 5e3 };
        class ao extends W {
          constructor(t2, e2) {
            super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get Default() {
            return ro;
          }
          static get DefaultType() {
            return oo;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(() => {
              this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(() => {
              this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
          }
          isShown() {
            return this._element.classList.contains(no);
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t2, e2) {
            switch (t2.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e2;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e2;
            }
            if (e2)
              return void this._clearTimeout();
            const i2 = t2.relatedTarget;
            this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
          }
          _setListeners() {
            N.on(this._element, Xs, (t2) => this._onInteraction(t2, true)), N.on(this._element, Ys, (t2) => this._onInteraction(t2, false)), N.on(this._element, Us, (t2) => this._onInteraction(t2, true)), N.on(this._element, Gs, (t2) => this._onInteraction(t2, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ao.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        return R(ao), m(ao), { Alert: Q, Button: Y, Carousel: xt, Collapse: Bt, Dropdown: qi, Modal: On, Offcanvas: qn, Popover: us, ScrollSpy: Es, Tab: Ks, Toast: ao, Tooltip: cs };
      });
    }
  });

  // js/src/lib/prism.js
  var require_prism = __commonJS({
    "js/src/lib/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _ = {
          /**
           * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
           * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
           * additional languages or plugins yourself.
           *
           * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
           *
           * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.manual = true;
           * // add a new <script> to load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          manual: _self2.Prism && _self2.Prism.manual,
          /**
           * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
           * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
           * own worker, you don't want it to do this.
           *
           * By setting this value to `true`, Prism will not add its own listeners to the worker.
           *
           * You obviously have to change this value before Prism executes. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.disableWorkerMessageHandler = true;
           * // Load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          /**
           * A namespace for utility methods.
           *
           * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
           * change or disappear at any time.
           *
           * @namespace
           * @memberof Prism
           */
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone3;
              var id;
              switch (_.util.type(o)) {
                case "Object":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone3 = /** @type {Record<string, any>} */
                  {};
                  visited[id] = clone3;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone3[key] = deepClone(o[key], visited);
                    }
                  }
                  return (
                    /** @type {any} */
                    clone3
                  );
                case "Array":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone3 = [];
                  visited[id] = clone3;
                  /** @type {Array} */
                  /** @type {any} */
                  o.forEach(function(v, i) {
                    clone3[i] = deepClone(v, visited);
                  });
                  return (
                    /** @type {any} */
                    clone3
                  );
                default:
                  return o;
              }
            },
            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return (
                  /** @type {any} */
                  document.currentScript
                );
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          /**
           * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
           *
           * @namespace
           * @memberof Prism
           * @public
           */
          languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function(id, redef) {
              var lang2 = _.util.clone(_.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function(inside, before, insert, root) {
              root = root || /** @type {any} */
              _.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _.languages.DFS(_.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          /**
           * This is the most high-level function in Prism’s API.
           * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
           * each one of them.
           *
           * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
           *
           * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
           * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
           * @memberof Prism
           * @public
           */
          highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
          },
          /**
           * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
           * {@link Prism.highlightElement} on each one of them.
           *
           * The following hooks will be run:
           * 1. `before-highlightall`
           * 2. `before-all-elements-highlight`
           * 3. All hooks of {@link Prism.highlightElement} for each element.
           *
           * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
           * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
           * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
           * @memberof Prism
           * @public
           */
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run("before-all-elements-highlight", env);
            for (var i = 0, element; element = env.elements[i++]; ) {
              _.highlightElement(element, async === true, env.callback);
            }
          },
          /**
           * Highlights the code inside a single element.
           *
           * The following hooks will be run:
           * 1. `before-sanity-check`
           * 2. `before-highlight`
           * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
           * 4. `before-insert`
           * 5. `after-highlight`
           * 6. `complete`
           *
           * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
           * the element's language.
           *
           * @param {Element} element The element containing the code.
           * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
           * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
           * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
           * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
           *
           * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
           * asynchronous highlighting to work. You can build your own bundle on the
           * [Download page](https://prismjs.com/download.html).
           * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
           * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
           * @memberof Prism
           * @public
           */
          highlightElement: function(element, async, callback) {
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            _.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _.hooks.run("after-highlight", env);
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
          },
          /**
           * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
           * and the language definitions to use, and returns a string with the HTML produced.
           *
           * The following hooks will be run:
           * 1. `before-tokenize`
           * 2. `after-tokenize`
           * 3. `wrap`: On each {@link Token}.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @param {string} language The name of the language definition passed to `grammar`.
           * @returns {string} The highlighted HTML.
           * @memberof Prism
           * @public
           * @example
           * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
           */
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run("after-tokenize", env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
          },
          /**
           * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
           * and the language definitions to use, and returns an array with the tokenized code.
           *
           * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
           *
           * This method could be useful in other contexts as well, as a very crude parser.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @returns {TokenStream} An array of strings and tokens, a token stream.
           * @memberof Prism
           * @public
           * @example
           * let code = `var foo = 0;`;
           * let tokens = Prism.tokenize(code, Prism.languages.javascript);
           * tokens.forEach(token => {
           *     if (token instanceof Prism.Token && token.type === 'number') {
           *         console.log(`Found numeric literal: ${token.content}`);
           *     }
           * });
           */
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          /**
           * @namespace
           * @memberof Prism
           * @public
           */
          hooks: {
            all: {},
            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function(name, callback) {
              var hooks = _.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function(name, env) {
              var callbacks = _.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o, language) {
          if (typeof o == "string") {
            return o;
          }
          if (Array.isArray(o)) {
            var s2 = "";
            o.forEach(function(e) {
              s2 += stringify(e, language);
            });
            return s2;
          }
          var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match2 = pattern.exec(text);
          if (match2 && lookbehind && match2[1]) {
            var lookbehindLength = match2[1].length;
            match2.index += lookbehindLength;
            match2[0] = match2[0].slice(lookbehindLength);
          }
          return match2;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + "," + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match2;
                if (greedy) {
                  match2 = matchPattern(pattern, pos, text, lookbehind);
                  if (!match2 || match2.index >= text.length) {
                    break;
                  }
                  var from = match2.index;
                  var to = match2.index + match2[0].length;
                  var p = pos;
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  p -= currentNode.value.length;
                  pos = p;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p);
                  match2.index -= pos;
                } else {
                  match2 = matchPattern(pattern, 0, str, lookbehind);
                  if (!match2) {
                    continue;
                  }
                }
                var from = match2.index;
                var matchStr = match2[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _;
          }
          if (!_.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _;
        }
        var script = _.util.currentScript();
        if (script) {
          _.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }
        if (!_.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          // https://www.w3.org/TR/xml/#NT-doctypedecl
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
              // see below
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        /**
         * Adds an pattern to highlight languages embedded in HTML attributes.
         *
         * An example of an inlined language is CSS with `style` attributes.
         *
         * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addAttribute('style', 'css');
         */
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(
              /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              "i"
            ),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
              // See rest below
            }
          },
          "url": {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        "boolean": /\b(?:false|true)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": {
          pattern: RegExp(
            /(^|[^\w$])/.source + "(?:" + // constant
            (/NaN|Infinity/.source + "|" + // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
            /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
          ),
          lookbehind: true
        },
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: RegExp(
            // lookbehind
            // eslint-disable-next-line regexp/no-dupe-characters-character-class
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
            // with the only syntax, so we have to define 2 different regex patterns.
            /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism2.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(
          /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
          "javascript"
        );
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function(Prism3) {
        var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
        var commandAfterHeredoc = {
          pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
          lookbehind: true,
          alias: "punctuation",
          // this looks reasonably well in all themes
          inside: null
          // see below
        };
        var insideString = {
          "bash": commandAfterHeredoc,
          "environment": {
            pattern: RegExp("\\$" + envVars),
            alias: "constant"
          },
          "variable": [
            // [0]: Arithmetic Environment
            {
              pattern: /\$?\(\([\s\S]+?\)\)/,
              greedy: true,
              inside: {
                // If there is a $ sign at the beginning highlight $(( and )) as variable
                "variable": [
                  {
                    pattern: /(^\$\(\([\s\S]+)\)\)/,
                    lookbehind: true
                  },
                  /^\$\(\(/
                ],
                "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
                "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                // If there is no $ sign at the beginning highlight (( and )) as punctuation
                "punctuation": /\(\(?|\)\)?|,|;/
              }
            },
            // [1]: Command Substitution
            {
              pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
              greedy: true,
              inside: {
                "variable": /^\$\(|^`|\)$|`$/
              }
            },
            // [2]: Brace expansion
            {
              pattern: /\$\{[^}]+\}/,
              greedy: true,
              inside: {
                "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                "punctuation": /[\[\]]/,
                "environment": {
                  pattern: RegExp("(\\{)" + envVars),
                  lookbehind: true,
                  alias: "constant"
                }
              }
            },
            /\$(?:\w+|[#?*!@$])/
          ],
          // Escape sequences from echo and printf's manuals, and escaped quotes.
          "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
        };
        Prism3.languages.bash = {
          "shebang": {
            pattern: /^#!\s*\/.*/,
            alias: "important"
          },
          "comment": {
            pattern: /(^|[^"{\\$])#.*/,
            lookbehind: true
          },
          "function-name": [
            // a) function foo {
            // b) foo() {
            // c) function foo() {
            // but not “foo {”
            {
              // a) and c)
              pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
              lookbehind: true,
              alias: "function"
            },
            {
              // b)
              pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
              alias: "function"
            }
          ],
          // Highlight variable names as variables in for and select beginnings.
          "for-or-select": {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: "variable",
            lookbehind: true
          },
          // Highlight variable names as variables in the left-hand part
          // of assignments (“=” and “+=”).
          "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
            inside: {
              "environment": {
                pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
                lookbehind: true,
                alias: "constant"
              }
            },
            alias: "variable",
            lookbehind: true
          },
          // Highlight parameter names as variables
          "parameter": {
            pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
            alias: "variable",
            lookbehind: true
          },
          "string": [
            // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
            {
              pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
              lookbehind: true,
              greedy: true,
              inside: insideString
            },
            // Here-document with quotes around the tag
            // → No expansion (so no “inside”).
            {
              pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
              lookbehind: true,
              greedy: true,
              inside: {
                "bash": commandAfterHeredoc
              }
            },
            // “Normal” string
            {
              // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
              pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
              lookbehind: true,
              greedy: true,
              inside: insideString
            },
            {
              // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
              pattern: /(^|[^$\\])'[^']*'/,
              lookbehind: true,
              greedy: true
            },
            {
              // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
              pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
              greedy: true,
              inside: {
                "entity": insideString.entity
              }
            }
          ],
          "environment": {
            pattern: RegExp("\\$?" + envVars),
            alias: "constant"
          },
          "variable": insideString.variable,
          "function": {
            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: true
          },
          "keyword": {
            pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: true
          },
          // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
          "builtin": {
            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: true,
            // Alias added to make those easier to distinguish from strings.
            alias: "class-name"
          },
          "boolean": {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: true
          },
          "file-descriptor": {
            pattern: /\B&\d\b/,
            alias: "important"
          },
          "operator": {
            // Lots of redirections here, but not just that.
            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {
              "file-descriptor": {
                pattern: /^\d/,
                alias: "important"
              }
            }
          },
          "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
          "number": {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: true
          }
        };
        commandAfterHeredoc.inside = Prism3.languages.bash;
        var toBeCopied = [
          "comment",
          "function-name",
          "for-or-select",
          "assign-left",
          "parameter",
          "string",
          "environment",
          "function",
          "keyword",
          "builtin",
          "boolean",
          "file-descriptor",
          "operator",
          "punctuation",
          "number"
        ];
        var inside = insideString.variable[1].inside;
        for (var i = 0; i < toBeCopied.length; i++) {
          inside[toBeCopied[i]] = Prism3.languages.bash[toBeCopied[i]];
        }
        Prism3.languages.sh = Prism3.languages.bash;
        Prism3.languages.shell = Prism3.languages.bash;
      })(Prism2);
      (function(Prism3) {
        function replace(pattern, replacements) {
          return pattern.replace(/<<(\d+)>>/g, function(m, index) {
            return "(?:" + replacements[+index] + ")";
          });
        }
        function re(pattern, replacements, flags) {
          return RegExp(replace(pattern, replacements), flags || "");
        }
        function nested(pattern, depthLog2) {
          for (var i = 0; i < depthLog2; i++) {
            pattern = pattern.replace(/<<self>>/g, function() {
              return "(?:" + pattern + ")";
            });
          }
          return pattern.replace(/<<self>>/g, "[^\\s\\S]");
        }
        var keywordKinds = {
          // keywords which represent a return or variable type
          type: "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
          // keywords which are used to declare a type
          typeDeclaration: "class enum interface record struct",
          // contextual keywords
          // ("var" and "dynamic" are missing because they are used like types)
          contextual: "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
          // all other keywords
          other: "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"
        };
        function keywordsToPattern(words) {
          return "\\b(?:" + words.trim().replace(/ /g, "|") + ")\\b";
        }
        var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
        var keywords = RegExp(keywordsToPattern(keywordKinds.type + " " + keywordKinds.typeDeclaration + " " + keywordKinds.contextual + " " + keywordKinds.other));
        var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + " " + keywordKinds.contextual + " " + keywordKinds.other);
        var nonContextualKeywords = keywordsToPattern(keywordKinds.type + " " + keywordKinds.typeDeclaration + " " + keywordKinds.other);
        var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2);
        var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
        var name = /@?\b[A-Za-z_]\w*\b/.source;
        var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
        var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
        var array = /\[\s*(?:,\s*)*\]/.source;
        var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
        var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array]);
        var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
        var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);
        var typeInside = {
          "keyword": keywords,
          "punctuation": /[<>()?,.:[\]]/
        };
        var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source;
        var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
        var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
        Prism3.languages.csharp = Prism3.languages.extend("clike", {
          "string": [
            {
              pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
              lookbehind: true,
              greedy: true
            },
            {
              pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
              lookbehind: true,
              greedy: true
            }
          ],
          "class-name": [
            {
              // Using static
              // using static System.Math;
              pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Using alias (type)
              // using Project = PC.MyCompany.Project;
              pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Using alias (alias)
              // using Project = PC.MyCompany.Project;
              pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
              lookbehind: true
            },
            {
              // Type declarations
              // class Foo<A, B>
              // interface Foo<out A, B>
              pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Single catch exception declaration
              // catch(Foo)
              // (things like catch(Foo e) is covered by variable declaration)
              pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Name of the type parameter of generic constraints
              // where Foo : class
              pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
              lookbehind: true
            },
            {
              // Casts and checks via as and is.
              // as Foo<A>, is Bar<B>
              // (things like if(a is Foo b) is covered by variable declaration)
              pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Variable, field and parameter declaration
              // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
              pattern: re(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
              inside: typeInside
            }
          ],
          "keyword": keywords,
          // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
          "number": /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
          "operator": />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
          "punctuation": /\?\.?|::|[{}[\];(),.:]/
        });
        Prism3.languages.insertBefore("csharp", "number", {
          "range": {
            pattern: /\.\./,
            alias: "operator"
          }
        });
        Prism3.languages.insertBefore("csharp", "punctuation", {
          "named-parameter": {
            pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
            lookbehind: true,
            alias: "punctuation"
          }
        });
        Prism3.languages.insertBefore("csharp", "class-name", {
          "namespace": {
            // namespace Foo.Bar {}
            // using Foo.Bar;
            pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
            lookbehind: true,
            inside: {
              "punctuation": /\./
            }
          },
          "type-expression": {
            // default(Foo), typeof(Foo<Bar>), sizeof(int)
            pattern: re(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
            lookbehind: true,
            alias: "class-name",
            inside: typeInside
          },
          "return-type": {
            // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
            // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
            // int Foo => 0; int Foo { get; set } = 0;
            pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
            inside: typeInside,
            alias: "class-name"
          },
          "constructor-invocation": {
            // new List<Foo<Bar[]>> { }
            pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
            lookbehind: true,
            inside: typeInside,
            alias: "class-name"
          },
          /*'explicit-implementation': {
          	// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
          	pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
          	inside: classNameInside,
          	alias: 'class-name'
          },*/
          "generic-method": {
            // foo<Bar>()
            pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
            inside: {
              "function": re(/^<<0>>/.source, [name]),
              "generic": {
                pattern: RegExp(generic),
                alias: "class-name",
                inside: typeInside
              }
            }
          },
          "type-list": {
            // The list of types inherited or of generic constraints
            // class Foo<F> : Bar, IList<FooBar>
            // where F : Bar, IList<int>
            pattern: re(
              /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
              [typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
            ),
            lookbehind: true,
            inside: {
              "record-arguments": {
                pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
                lookbehind: true,
                greedy: true,
                inside: Prism3.languages.csharp
              },
              "keyword": keywords,
              "class-name": {
                pattern: RegExp(typeExpression),
                greedy: true,
                inside: typeInside
              },
              "punctuation": /[,()]/
            }
          },
          "preprocessor": {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: true,
            alias: "property",
            inside: {
              // highlight preprocessor directives as keywords
              "directive": {
                pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                lookbehind: true,
                alias: "keyword"
              }
            }
          }
        });
        var regularStringOrCharacter = regularString + "|" + character;
        var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
        var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
        var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
        var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);
        Prism3.languages.insertBefore("csharp", "class-name", {
          "attribute": {
            // Attributes
            // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
            pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
            lookbehind: true,
            greedy: true,
            inside: {
              "target": {
                pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
                alias: "keyword"
              },
              "attribute-arguments": {
                pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
                inside: Prism3.languages.csharp
              },
              "class-name": {
                pattern: RegExp(identifier),
                inside: {
                  "punctuation": /\./
                }
              },
              "punctuation": /[:,]/
            }
          }
        });
        var formatString = /:[^}\r\n]+/.source;
        var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
        var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
        var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2);
        var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);
        function createInterpolationInside(interpolation, interpolationRound) {
          return {
            "interpolation": {
              pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
              lookbehind: true,
              inside: {
                "format-string": {
                  pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
                  lookbehind: true,
                  inside: {
                    "punctuation": /^:/
                  }
                },
                "punctuation": /^\{|\}$/,
                "expression": {
                  pattern: /[\s\S]+/,
                  alias: "language-csharp",
                  inside: Prism3.languages.csharp
                }
              }
            },
            "string": /[\s\S]+/
          };
        }
        Prism3.languages.insertBefore("csharp", "string", {
          "interpolation-string": [
            {
              pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
              lookbehind: true,
              greedy: true,
              inside: createInterpolationInside(mInterpolation, mInterpolationRound)
            },
            {
              pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
              lookbehind: true,
              greedy: true,
              inside: createInterpolationInside(sInterpolation, sInterpolationRound)
            }
          ],
          "char": {
            pattern: RegExp(character),
            greedy: true
          }
        });
        Prism3.languages.dotnet = Prism3.languages.cs = Prism3.languages.csharp;
      })(Prism2);
      (function(Prism3) {
        Prism3.languages.diff = {
          "coord": [
            // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
            /^(?:\*{3}|-{3}|\+{3}).*$/m,
            // Match "@@ ... @@" coord lines in unified diff.
            /^@@.*@@$/m,
            // Match coord lines in normal diff (starts with a number).
            /^\d.*$/m
          ]
          // deleted, inserted, unchanged, diff
        };
        var PREFIXES = {
          "deleted-sign": "-",
          "deleted-arrow": "<",
          "inserted-sign": "+",
          "inserted-arrow": ">",
          "unchanged": " ",
          "diff": "!"
        };
        Object.keys(PREFIXES).forEach(function(name) {
          var prefix = PREFIXES[name];
          var alias = [];
          if (!/^\w+$/.test(name)) {
            alias.push(/\w+/.exec(name)[0]);
          }
          if (name === "diff") {
            alias.push("bold");
          }
          Prism3.languages.diff[name] = {
            pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
            alias,
            inside: {
              "line": {
                pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                lookbehind: true
              },
              "prefix": {
                pattern: /[\s\S]/,
                alias: /\w+/.exec(name)[0]
              }
            }
          };
        });
        Object.defineProperty(Prism3.languages.diff, "PREFIXES", {
          value: PREFIXES
        });
      })(Prism2);
      Prism2.languages.json = {
        "property": {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
          lookbehind: true,
          greedy: true
        },
        "string": {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
          lookbehind: true,
          greedy: true
        },
        "comment": {
          pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          greedy: true
        },
        "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        "punctuation": /[{}[\],]/,
        "operator": /:/,
        "boolean": /\b(?:false|true)\b/,
        "null": {
          pattern: /\bnull\b/,
          alias: "keyword"
        }
      };
      Prism2.languages.webmanifest = Prism2.languages.json;
      (function(Prism3) {
        var powershell = Prism3.languages.powershell = {
          "sensitive-variable": {
            pattern: /(\[\[.*?\]\])/i,
            greedy: true
          },
          "comment": [
            {
              pattern: /(^|[^`])<#[\s\S]*?#>/,
              lookbehind: true
            },
            {
              pattern: /(^|[^`])#.*/,
              lookbehind: true
            }
          ],
          "string": [
            {
              pattern: /"(?:`[\s\S]|[^`"])*"/,
              greedy: true,
              inside: {
                "function": {
                  // Allow for one level of nesting
                  pattern: /(^|[^`])\$\((?:\$\(.*?\)|(?!\$\()[^\r\n)])*\)/,
                  lookbehind: true,
                  // Populated at end of file
                  inside: {}
                },
                "sensitive-variable": {
                  pattern: /(\[\[.*?\]\])/i,
                  greedy: true
                }
              }
            },
            {
              pattern: /'(?:[^']|'')*'/,
              greedy: true
            }
          ],
          // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
          // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
          "namespace": /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
          "boolean": /\$(?:false|true)\b/i,
          "variable": /\$\w+\b/,
          // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
          // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
          // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
          "function": [
            /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
            /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
          ],
          // per http://technet.microsoft.com/en-us/library/hh847744.aspx
          "keyword": /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
          "operator": {
            pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: true
          },
          "punctuation": /[|{}[\];(),.]/
        };
        powershell.string[0].inside = {
          "function": {
            // Allow for one level of nesting
            pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
            lookbehind: true,
            inside: powershell
          },
          "boolean": powershell.boolean,
          "variable": powershell.variable
        };
      })(Prism2);
      (function(Prism3) {
        Prism3.languages.puppet = {
          "heredoc": [
            // Matches the content of a quoted heredoc string (subject to interpolation)
            {
              pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
              lookbehind: true,
              alias: "string",
              inside: {
                // Matches the end tag
                "punctuation": /(?=\S).*\S(?= *$)/
                // See interpolation below
              }
            },
            // Matches the content of an unquoted heredoc string (no interpolation)
            {
              pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
              lookbehind: true,
              greedy: true,
              alias: "string",
              inside: {
                // Matches the end tag
                "punctuation": /(?=\S).*\S(?= *$)/
              }
            },
            // Matches the start tag of heredoc strings
            {
              pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
              alias: "string",
              inside: {
                "punctuation": {
                  pattern: /(\().+?(?=\))/,
                  lookbehind: true
                }
              }
            }
          ],
          "multiline-comment": {
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: true,
            greedy: true,
            alias: "comment"
          },
          "regex": {
            // Must be prefixed with the keyword "node" or a non-word char
            pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
            lookbehind: true,
            greedy: true,
            inside: {
              // Extended regexes must have the x flag. They can contain single-line comments.
              "extended-regex": {
                pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
                inside: {
                  "comment": /#.*/
                }
              }
            }
          },
          "comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true,
            greedy: true
          },
          "string": {
            // Allow for one nested level of double quotes inside interpolation
            pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
            greedy: true,
            inside: {
              "double-quoted": {
                pattern: /^"[\s\S]*"$/,
                inside: {
                  // See interpolation below
                }
              }
            }
          },
          "variable": {
            pattern: /\$(?:::)?\w+(?:::\w+)*/,
            inside: {
              "punctuation": /::/
            }
          },
          "attr-name": /(?:\b\w+|\*)(?=\s*=>)/,
          "function": [
            {
              pattern: /(\.)(?!\d)\w+/,
              lookbehind: true
            },
            /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
          ],
          "number": /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
          "boolean": /\b(?:false|true)\b/,
          // Includes words reserved for future use
          "keyword": /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
          "datatype": {
            pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
            alias: "symbol"
          },
          "operator": /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
          "punctuation": /[\[\]{}().,;]|:+/
        };
        var interpolation = [
          {
            // Allow for one nested level of braces inside interpolation
            pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
            lookbehind: true,
            inside: {
              "short-variable": {
                // Negative look-ahead prevent wrong highlighting of functions
                pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                lookbehind: true,
                alias: "variable",
                inside: {
                  "punctuation": /::/
                }
              },
              "delimiter": {
                pattern: /^\$/,
                alias: "variable"
              },
              rest: Prism3.languages.puppet
            }
          },
          {
            pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
            lookbehind: true,
            alias: "variable",
            inside: {
              "punctuation": /::/
            }
          }
        ];
        Prism3.languages.puppet["heredoc"][0].inside.interpolation = interpolation;
        Prism3.languages.puppet["string"].inside["double-quoted"].inside.interpolation = interpolation;
      })(Prism2);
      Prism2.languages.python = {
        "comment": {
          pattern: /(^|[^\\])#.*/,
          lookbehind: true,
          greedy: true
        },
        "string-interpolation": {
          pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
          greedy: true,
          inside: {
            "interpolation": {
              // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
              pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
              lookbehind: true,
              inside: {
                "format-spec": {
                  pattern: /(:)[^:(){}]+(?=\}$)/,
                  lookbehind: true
                },
                "conversion-option": {
                  pattern: /![sra](?=[:}]$)/,
                  alias: "punctuation"
                },
                rest: null
              }
            },
            "string": /[\s\S]+/
          }
        },
        "triple-quoted-string": {
          pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
          greedy: true,
          alias: "string"
        },
        "string": {
          pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
          greedy: true
        },
        "function": {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
          lookbehind: true
        },
        "class-name": {
          pattern: /(\bclass\s+)\w+/i,
          lookbehind: true
        },
        "decorator": {
          pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
          lookbehind: true,
          alias: ["annotation", "punctuation"],
          inside: {
            "punctuation": /\./
          }
        },
        "keyword": /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        "builtin": /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        "boolean": /\b(?:False|None|True)\b/,
        "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
        "operator": /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.python["string-interpolation"].inside["interpolation"].inside.rest = Prism2.languages.python;
      Prism2.languages.py = Prism2.languages.python;
      (function(Prism3) {
        Prism3.languages.ruby = Prism3.languages.extend("clike", {
          "comment": {
            pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
            greedy: true
          },
          "class-name": {
            pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
            lookbehind: true,
            inside: {
              "punctuation": /[.\\]/
            }
          },
          "keyword": /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
          "operator": /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
          "punctuation": /[(){}[\].,;]/
        });
        Prism3.languages.insertBefore("ruby", "operator", {
          "double-colon": {
            pattern: /::/,
            alias: "punctuation"
          }
        });
        var interpolation = {
          pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
          lookbehind: true,
          inside: {
            "content": {
              pattern: /^(#\{)[\s\S]+(?=\}$)/,
              lookbehind: true,
              inside: Prism3.languages.ruby
            },
            "delimiter": {
              pattern: /^#\{|\}$/,
              alias: "punctuation"
            }
          }
        };
        delete Prism3.languages.ruby.function;
        var percentExpression = "(?:" + [
          /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
          /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
          /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
          /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
          /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
        ].join("|") + ")";
        var symbolName = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
        Prism3.languages.insertBefore("ruby", "keyword", {
          "regex-literal": [
            {
              pattern: RegExp(/%r/.source + percentExpression + /[egimnosux]{0,6}/.source),
              greedy: true,
              inside: {
                "interpolation": interpolation,
                "regex": /[\s\S]+/
              }
            },
            {
              pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
              lookbehind: true,
              greedy: true,
              inside: {
                "interpolation": interpolation,
                "regex": /[\s\S]+/
              }
            }
          ],
          "variable": /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
          "symbol": [
            {
              pattern: RegExp(/(^|[^:]):/.source + symbolName),
              lookbehind: true,
              greedy: true
            },
            {
              pattern: RegExp(/([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source),
              lookbehind: true,
              greedy: true
            }
          ],
          "method-definition": {
            pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
            lookbehind: true,
            inside: {
              "function": /\b\w+$/,
              "keyword": /^self\b/,
              "class-name": /^\w+/,
              "punctuation": /\./
            }
          }
        });
        Prism3.languages.insertBefore("ruby", "string", {
          "string-literal": [
            {
              pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
              greedy: true,
              inside: {
                "interpolation": interpolation,
                "string": /[\s\S]+/
              }
            },
            {
              pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
              greedy: true,
              inside: {
                "interpolation": interpolation,
                "string": /[\s\S]+/
              }
            },
            {
              pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
              alias: "heredoc-string",
              greedy: true,
              inside: {
                "delimiter": {
                  pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                  inside: {
                    "symbol": /\b\w+/,
                    "punctuation": /^<<[-~]?/
                  }
                },
                "interpolation": interpolation,
                "string": /[\s\S]+/
              }
            },
            {
              pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
              alias: "heredoc-string",
              greedy: true,
              inside: {
                "delimiter": {
                  pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                  inside: {
                    "symbol": /\b\w+/,
                    "punctuation": /^<<[-~]?'|'$/
                  }
                },
                "string": /[\s\S]+/
              }
            }
          ],
          "command-literal": [
            {
              pattern: RegExp(/%x/.source + percentExpression),
              greedy: true,
              inside: {
                "interpolation": interpolation,
                "command": {
                  pattern: /[\s\S]+/,
                  alias: "string"
                }
              }
            },
            {
              pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
              greedy: true,
              inside: {
                "interpolation": interpolation,
                "command": {
                  pattern: /[\s\S]+/,
                  alias: "string"
                }
              }
            }
          ]
        });
        delete Prism3.languages.ruby.string;
        Prism3.languages.insertBefore("ruby", "number", {
          "builtin": /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
          "constant": /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
        });
        Prism3.languages.rb = Prism3.languages.ruby;
      })(Prism2);
      Prism2.languages.scss = Prism2.languages.extend("css", {
        "comment": {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: true
        },
        "atrule": {
          pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
          inside: {
            "rule": /@[\w-]+/
            // See rest below
          }
        },
        // url, compassified
        "url": /(?:[-a-z]+-)?url(?=\()/i,
        // CSS selector regex is not appropriate for Sass
        // since there can be lot more things (var, @ directive, nesting..)
        // a selector must start at the end of a property or after a brace (end of other rules or nesting)
        // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
        // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
        // can "pass" as a selector- e.g: proper#{$erty})
        // this one was hard to do, so please be careful if you edit this one :)
        "selector": {
          // Initial look-ahead is used to prevent matching of blank selectors
          pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
          inside: {
            "parent": {
              pattern: /&/,
              alias: "important"
            },
            "placeholder": /%[-\w]+/,
            "variable": /\$[-\w]+|#\{\$[-\w]+\}/
          }
        },
        "property": {
          pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
          inside: {
            "variable": /\$[-\w]+|#\{\$[-\w]+\}/
          }
        }
      });
      Prism2.languages.insertBefore("scss", "atrule", {
        "keyword": [
          /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
          {
            pattern: /( )(?:from|through)(?= )/,
            lookbehind: true
          }
        ]
      });
      Prism2.languages.insertBefore("scss", "important", {
        // var and interpolated vars
        "variable": /\$[-\w]+|#\{\$[-\w]+\}/
      });
      Prism2.languages.insertBefore("scss", "function", {
        "module-modifier": {
          pattern: /\b(?:as|hide|show|with)\b/i,
          alias: "keyword"
        },
        "placeholder": {
          pattern: /%[-\w]+/,
          alias: "selector"
        },
        "statement": {
          pattern: /\B!(?:default|optional)\b/i,
          alias: "keyword"
        },
        "boolean": /\b(?:false|true)\b/,
        "null": {
          pattern: /\bnull\b/,
          alias: "keyword"
        },
        "operator": {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
          lookbehind: true
        }
      });
      Prism2.languages.scss["atrule"].inside.rest = Prism2.languages.scss;
      (function(Prism3) {
        var strings = [
          // normal string
          /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,
          /'[^']*'/.source,
          /\$'(?:[^'\\]|\\[\s\S])*'/.source,
          // here doc
          // 2 capturing groups
          /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source
        ].join("|");
        Prism3.languages["shell-session"] = {
          "command": {
            pattern: RegExp(
              // user info
              /^/.source + "(?:" + // <user> ":" ( <path> )?
              (/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source + "|" + // <path>
              // Since the path pattern is quite general, we will require it to start with a special character to
              // prevent false positives.
              /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source) + ")?" + // shell symbol
              /[$#%](?=\s)/.source + // bash command
              /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g, function() {
                return strings;
              }),
              "m"
            ),
            greedy: true,
            inside: {
              "info": {
                // foo@bar:~/files$ exit
                // foo@bar$ exit
                // ~/files$ exit
                pattern: /^[^#$%]+/,
                alias: "punctuation",
                inside: {
                  "user": /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
                  "punctuation": /:/,
                  "path": /[\s\S]+/
                }
              },
              "bash": {
                pattern: /(^[$#%]\s*)\S[\s\S]*/,
                lookbehind: true,
                alias: "language-bash",
                inside: Prism3.languages.bash
              },
              "shell-symbol": {
                pattern: /^[$#%]/,
                alias: "important"
              }
            }
          },
          "output": /.(?:.*(?:[\r\n]|.$))*/
        };
        Prism3.languages["sh-session"] = Prism3.languages["shellsession"] = Prism3.languages["shell-session"];
      })(Prism2);
      (function(Prism3) {
        function insertDocComment(lang, docComment) {
          if (Prism3.languages[lang]) {
            Prism3.languages.insertBefore(lang, "comment", {
              "doc-comment": docComment
            });
          }
        }
        var tag = Prism3.languages.markup.tag;
        var slashDocComment = {
          pattern: /\/\/\/.*/,
          greedy: true,
          alias: "comment",
          inside: {
            "tag": tag
          }
        };
        var tickDocComment = {
          pattern: /'''.*/,
          greedy: true,
          alias: "comment",
          inside: {
            "tag": tag
          }
        };
        insertDocComment("csharp", slashDocComment);
        insertDocComment("fsharp", slashDocComment);
        insertDocComment("vbnet", tickDocComment);
      })(Prism2);
      (function(Prism3) {
        var anchorOrAlias = /[*&][^\s[\]{},]+/;
        var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
        var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
        var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
        });
        var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
        function createValuePattern(value, flags) {
          flags = (flags || "").replace(/m/g, "") + "m";
          var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
            return properties;
          }).replace(/<<value>>/g, function() {
            return value;
          });
          return RegExp(pattern, flags);
        }
        Prism3.languages.yaml = {
          "scalar": {
            pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
              return properties;
            })),
            lookbehind: true,
            alias: "string"
          },
          "comment": /#.*/,
          "key": {
            pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
              return properties;
            }).replace(/<<key>>/g, function() {
              return "(?:" + plainKey + "|" + string + ")";
            })),
            lookbehind: true,
            greedy: true,
            alias: "atrule"
          },
          "directive": {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: true,
            alias: "important"
          },
          "datetime": {
            pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
            lookbehind: true,
            alias: "number"
          },
          "boolean": {
            pattern: createValuePattern(/false|true/.source, "i"),
            lookbehind: true,
            alias: "important"
          },
          "null": {
            pattern: createValuePattern(/null|~/.source, "i"),
            lookbehind: true,
            alias: "important"
          },
          "string": {
            pattern: createValuePattern(string),
            lookbehind: true,
            greedy: true
          },
          "number": {
            pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
            lookbehind: true
          },
          "tag": tag,
          "important": anchorOrAlias,
          "punctuation": /---|[:[\]{}\-,|>?]|\.\.\./
        };
        Prism3.languages.yml = Prism3.languages.yaml;
      })(Prism2);
      (function(Prism3) {
        var guid = {
          // https://en.wikipedia.org/wiki/Universally_unique_identifier#Format
          pattern: /[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}/i,
          alias: "constant"
        };
        Prism3.languages["log-file"] = {
          "sensitive-variable": {
            pattern: /(\[\[.*?\]\])/i,
            greedy: true
          },
          "verbose": [
            {
              pattern: /\b(Trace)\b:/i,
              greedy: true
            },
            {
              pattern: /\[(verbose|verb|vrb|vb|v)\]/i,
              greedy: true
            }
          ],
          "debug": [
            {
              pattern: /\b(DEBUG|Debug)\b|\b(debug)\:/i,
              greedy: true
            },
            {
              pattern: /\[(debug|dbug|dbg|de|d)\]/i,
              greedy: true
            }
          ],
          "info": [
            {
              pattern: /\b(HINT|INFO|INFORMATION|Info|NOTICE|II)\b | \b(^[^\.\.]+$)\b | \b(info|information)\:/,
              greedy: true
            },
            {
              pattern: /\[(information|info|inf|in|i)\]/i,
              greedy: true
            }
          ],
          "warning": [
            {
              pattern: /\b(WARNING|WARN|Warn|WW)\b|\b(warning)\:/i,
              greedy: true
            },
            {
              pattern: /\[(warning|warn|wrn|wn|w)\]/i,
              greedy: true
            }
          ],
          "error": [
            {
              pattern: /\b(ALERT|CRITICAL|EMERGENCY|ERROR|FAILURE|FAIL|Fatal|FATAL|Error|EE)\b|\b(error)\:/i,
              greedy: true
            },
            {
              pattern: /\[(error|eror|err|er|e|fatal|fatl|ftl|fa|f)\]/i,
              greedy: true
            }
          ],
          "date": [
            {
              pattern: /\b\d{4}-\d{2}-\d{2}(T|\b)/i,
              greedy: true
            },
            {
              pattern: /\b\d{2}[^\w\s]\d{2}[^\w\s]\d{4}\b/i,
              greedy: true
            },
            {
              pattern: /\d{1,2}:\d{2}(:\d{2}([.,]\d{1,})?)?(Z| ?[+-]\d{1,2}:\d{2})?\b/i,
              greedy: true
            }
          ],
          // Add Git Commit Hash possibly
          "guid": guid,
          "text-string": [
            {
              pattern: /[a-zA-Z]'[a-zA-Z]/i,
              greedy: true
            },
            {
              pattern: /[a-zA-Z]\('[a-zA-Z]/i,
              greedy: true
            }
          ],
          "string": [
            {
              pattern: /"[^"]*"/i,
              greedy: true,
              inside: {
                "sensitive-variable": {
                  pattern: /(\[\[.*?\]\])/i,
                  greedy: true
                }
              }
            },
            {
              pattern: /'[^']*'/i,
              greedy: true
            }
          ],
          "exceptiontype": {
            pattern: /\b([a-zA-Z.]*Exception)\b/i,
            greedy: true
          },
          // Add Exception Call Stacks possibly
          "text-constant": {
            pattern: /(\\[\w-]+.\w+)/i,
            greedy: true
          },
          "constant": [
            {
              pattern: /\b([0-9]+|true|false|null)\b/i,
              // bools and numbers
              greedy: true
            },
            {
              pattern: /\b(http|https|ftp|file):\/\S+\b\/?/i,
              greedy: true
            },
            {
              pattern: /([\w-]+\.)+([\w-])+(?![\w/\\])/i,
              // Match character and . sequences (such as namespaces) as well as file names and extensions (e.g. bar.txt)
              greedy: true
            }
          ]
        };
        Prism3.languages["log"] = Prism3.languages["log-file"];
      })(Prism2);
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        var PLUGIN_NAME = "line-numbers";
        var NEW_LINE_EXP = /\n(?!$)/g;
        var config = Prism2.plugins.lineNumbers = {
          /**
           * Get node for provided line number
           *
           * @param {Element} element pre element
           * @param {number} number line number
           * @returns {Element|undefined}
           */
          getLine: function(element, number) {
            if (element.tagName !== "PRE" || !element.classList.contains(PLUGIN_NAME)) {
              return;
            }
            var lineNumberRows = element.querySelector(".line-numbers-rows");
            if (!lineNumberRows) {
              return;
            }
            var lineNumberStart = parseInt(element.getAttribute("data-start"), 10) || 1;
            var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);
            if (number < lineNumberStart) {
              number = lineNumberStart;
            }
            if (number > lineNumberEnd) {
              number = lineNumberEnd;
            }
            var lineIndex = number - lineNumberStart;
            return lineNumberRows.children[lineIndex];
          },
          /**
           * Resizes the line numbers of the given element.
           *
           * This function will not add line numbers. It will only resize existing ones.
           *
           * @param {HTMLElement} element A `<pre>` element with line numbers.
           * @returns {void}
           */
          resize: function(element) {
            resizeElements([element]);
          },
          /**
           * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
           * the current viewport.
           *
           * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
           *
           * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
           *
           * @type {boolean}
           */
          assumeViewportIndependence: true
        };
        function resizeElements(elements) {
          elements = elements.filter(function(e) {
            var codeStyles = getStyles(e);
            var whiteSpace = codeStyles["white-space"];
            return whiteSpace === "pre-wrap" || whiteSpace === "pre-line";
          });
          if (elements.length == 0) {
            return;
          }
          var infos = elements.map(function(element) {
            var codeElement = element.querySelector("code");
            var lineNumbersWrapper = element.querySelector(".line-numbers-rows");
            if (!codeElement || !lineNumbersWrapper) {
              return void 0;
            }
            var lineNumberSizer = element.querySelector(".line-numbers-sizer");
            var codeLines = codeElement.textContent.split(NEW_LINE_EXP);
            if (!lineNumberSizer) {
              lineNumberSizer = document.createElement("span");
              lineNumberSizer.className = "line-numbers-sizer";
              codeElement.appendChild(lineNumberSizer);
            }
            lineNumberSizer.innerHTML = "0";
            lineNumberSizer.style.display = "block";
            var oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
            lineNumberSizer.innerHTML = "";
            return {
              element,
              lines: codeLines,
              lineHeights: [],
              oneLinerHeight,
              sizer: lineNumberSizer
            };
          }).filter(Boolean);
          infos.forEach(function(info) {
            var lineNumberSizer = info.sizer;
            var lines = info.lines;
            var lineHeights = info.lineHeights;
            var oneLinerHeight = info.oneLinerHeight;
            lineHeights[lines.length - 1] = void 0;
            lines.forEach(function(line, index) {
              if (line && line.length > 1) {
                var e = lineNumberSizer.appendChild(document.createElement("span"));
                e.style.display = "block";
                e.textContent = line;
              } else {
                lineHeights[index] = oneLinerHeight;
              }
            });
          });
          infos.forEach(function(info) {
            var lineNumberSizer = info.sizer;
            var lineHeights = info.lineHeights;
            var childIndex = 0;
            for (var i = 0; i < lineHeights.length; i++) {
              if (lineHeights[i] === void 0) {
                lineHeights[i] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
              }
            }
          });
          infos.forEach(function(info) {
            var lineNumberSizer = info.sizer;
            var wrapper = info.element.querySelector(".line-numbers-rows");
            lineNumberSizer.style.display = "none";
            lineNumberSizer.innerHTML = "";
            info.lineHeights.forEach(function(height, lineNumber) {
              wrapper.children[lineNumber].style.height = height + "px";
            });
          });
        }
        function getStyles(element) {
          if (!element) {
            return null;
          }
          return window.getComputedStyle ? getComputedStyle(element) : element.currentStyle || null;
        }
        var lastWidth = void 0;
        window.addEventListener("resize", function() {
          if (config.assumeViewportIndependence && lastWidth === window.innerWidth) {
            return;
          }
          lastWidth = window.innerWidth;
          resizeElements(Array.prototype.slice.call(document.querySelectorAll("pre." + PLUGIN_NAME)));
        });
        Prism2.hooks.add("complete", function(env) {
          if (!env.code) {
            return;
          }
          var code = (
            /** @type {Element} */
            env.element
          );
          var pre = (
            /** @type {HTMLElement} */
            code.parentNode
          );
          if (!pre || !/pre/i.test(pre.nodeName)) {
            return;
          }
          if (code.querySelector(".line-numbers-rows")) {
            return;
          }
          if (!Prism2.util.isActive(code, PLUGIN_NAME)) {
            return;
          }
          code.classList.remove(PLUGIN_NAME);
          pre.classList.add(PLUGIN_NAME);
          var match2 = env.code.match(NEW_LINE_EXP);
          var linesNum = match2 ? match2.length + 1 : 1;
          var lineNumbersWrapper;
          var lines = new Array(linesNum + 1).join("<span></span>");
          lineNumbersWrapper = document.createElement("span");
          lineNumbersWrapper.setAttribute("aria-hidden", "true");
          lineNumbersWrapper.className = "line-numbers-rows";
          lineNumbersWrapper.innerHTML = lines;
          if (pre.hasAttribute("data-start")) {
            pre.style.counterReset = "linenumber " + (parseInt(pre.getAttribute("data-start"), 10) - 1);
          }
          env.element.appendChild(lineNumbersWrapper);
          resizeElements([pre]);
          Prism2.hooks.run("line-numbers", env);
        });
        Prism2.hooks.add("line-numbers", function(env) {
          env.plugins = env.plugins || {};
          env.plugins.lineNumbers = true;
        });
      })();
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        var callbacks = [];
        var map = {};
        var noop = function() {
        };
        Prism2.plugins.toolbar = {};
        var registerButton = Prism2.plugins.toolbar.registerButton = function(key, opts) {
          var callback;
          if (typeof opts === "function") {
            callback = opts;
          } else {
            callback = function(env) {
              var element;
              if (typeof opts.onClick === "function") {
                element = document.createElement("button");
                element.type = "button";
                element.addEventListener("click", function() {
                  opts.onClick.call(this, env);
                });
              } else if (typeof opts.url === "string") {
                element = document.createElement("a");
                element.href = opts.url;
              } else {
                element = document.createElement("span");
              }
              if (opts.className) {
                element.classList.add(opts.className);
              }
              element.textContent = opts.text;
              return element;
            };
          }
          if (key in map) {
            console.warn('There is a button with the key "' + key + '" registered already.');
            return;
          }
          callbacks.push(map[key] = callback);
        };
        function getOrder(element) {
          while (element) {
            var order = element.getAttribute("data-toolbar-order");
            if (order != null) {
              order = order.trim();
              if (order.length) {
                return order.split(/\s*,\s*/g);
              } else {
                return [];
              }
            }
            element = element.parentElement;
          }
        }
        var hook = Prism2.plugins.toolbar.hook = function(env) {
          var pre = env.element.parentNode;
          if (!pre || !/pre/i.test(pre.nodeName)) {
            return;
          }
          if (pre.parentNode.classList.contains("code-toolbar")) {
            return;
          }
          var wrapper = document.createElement("div");
          wrapper.classList.add("code-toolbar");
          pre.parentNode.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);
          var toolbar = document.createElement("div");
          toolbar.classList.add("toolbar");
          var elementCallbacks = callbacks;
          var order = getOrder(env.element);
          if (order) {
            elementCallbacks = order.map(function(key) {
              return map[key] || noop;
            });
          }
          elementCallbacks.forEach(function(callback) {
            var element = callback(env);
            if (!element) {
              return;
            }
            var item = document.createElement("div");
            item.classList.add("toolbar-item");
            item.appendChild(element);
            toolbar.appendChild(item);
          });
          wrapper.appendChild(toolbar);
        };
        registerButton("label", function(env) {
          var pre = env.element.parentNode;
          if (!pre || !/pre/i.test(pre.nodeName)) {
            return;
          }
          if (!pre.hasAttribute("data-label")) {
            return;
          }
          var element;
          var template;
          var text = pre.getAttribute("data-label");
          try {
            template = document.querySelector("template#" + text);
          } catch (e) {
          }
          if (template) {
            element = template.content;
          } else {
            if (pre.hasAttribute("data-url")) {
              element = document.createElement("a");
              element.href = pre.getAttribute("data-url");
            } else {
              element = document.createElement("span");
            }
            element.textContent = text;
          }
          return element;
        });
        Prism2.hooks.add("complete", hook);
      })();
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Prism2.plugins.toolbar) {
          console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
          return;
        }
        function registerClipboard(element, copyInfo) {
          element.addEventListener("click", function() {
            copyTextToClipboard(copyInfo);
          });
        }
        function fallbackCopyTextToClipboard(copyInfo) {
          var textArea = document.createElement("textarea");
          textArea.value = copyInfo.getText();
          textArea.style.top = "0";
          textArea.style.left = "0";
          textArea.style.position = "fixed";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            var successful = document.execCommand("copy");
            setTimeout(function() {
              if (successful) {
                copyInfo.success();
              } else {
                copyInfo.error();
              }
            }, 1);
          } catch (err) {
            setTimeout(function() {
              copyInfo.error(err);
            }, 1);
          }
          document.body.removeChild(textArea);
        }
        function copyTextToClipboard(copyInfo) {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(copyInfo.getText()).then(copyInfo.success, function() {
              fallbackCopyTextToClipboard(copyInfo);
            });
          } else {
            fallbackCopyTextToClipboard(copyInfo);
          }
        }
        function selectElementText(element) {
          window.getSelection().selectAllChildren(element);
        }
        function getSettings(startElement) {
          var settings = {
            "copy": "Copy",
            "copy-error": "Press Ctrl+C to copy",
            "copy-success": "Copied!",
            "copy-timeout": 5e3
          };
          var prefix = "data-prismjs-";
          for (var key in settings) {
            var attr = prefix + key;
            var element = startElement;
            while (element && !element.hasAttribute(attr)) {
              element = element.parentElement;
            }
            if (element) {
              settings[key] = element.getAttribute(attr);
            }
          }
          return settings;
        }
        Prism2.plugins.toolbar.registerButton("copy-to-clipboard", function(env) {
          var element = env.element;
          var settings = getSettings(element);
          var linkCopy = document.createElement("button");
          linkCopy.className = "copy-to-clipboard-button";
          linkCopy.setAttribute("type", "button");
          var linkSpan = document.createElement("span");
          linkCopy.appendChild(linkSpan);
          setState("copy");
          registerClipboard(linkCopy, {
            getText: function() {
              return element.textContent;
            },
            success: function() {
              setState("copy-success");
              resetText();
            },
            error: function() {
              setState("copy-error");
              setTimeout(function() {
                selectElementText(element);
              }, 1);
              resetText();
            }
          });
          return linkCopy;
          function resetText() {
            setTimeout(function() {
              setState("copy");
            }, settings["copy-timeout"]);
          }
          function setState(state) {
            linkSpan.textContent = settings[state];
            linkCopy.setAttribute("data-copy-state", state);
          }
        });
      })();
      (function() {
        if (typeof Prism2 === "undefined") {
          return;
        }
        var LANGUAGE_REGEX = /^diff-([\w-]+)/i;
        var HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g;
        var HTML_LINE = RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g, function() {
          return HTML_TAG.source;
        }), "gi");
        var warningLogged = false;
        Prism2.hooks.add("before-sanity-check", function(env) {
          var lang = env.language;
          if (LANGUAGE_REGEX.test(lang) && !env.grammar) {
            env.grammar = Prism2.languages[lang] = Prism2.languages.diff;
          }
        });
        Prism2.hooks.add("before-tokenize", function(env) {
          if (!warningLogged && !Prism2.languages.diff && !Prism2.plugins.autoloader) {
            warningLogged = true;
            console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin.");
          }
          var lang = env.language;
          if (LANGUAGE_REGEX.test(lang) && !Prism2.languages[lang]) {
            Prism2.languages[lang] = Prism2.languages.diff;
          }
        });
        Prism2.hooks.add("wrap", function(env) {
          var diffLanguage;
          var diffGrammar;
          if (env.language !== "diff") {
            var langMatch = LANGUAGE_REGEX.exec(env.language);
            if (!langMatch) {
              return;
            }
            diffLanguage = langMatch[1];
            diffGrammar = Prism2.languages[diffLanguage];
          }
          var PREFIXES = Prism2.languages.diff && Prism2.languages.diff.PREFIXES;
          if (PREFIXES && env.type in PREFIXES) {
            var content = env.content.replace(HTML_TAG, "");
            var decoded = content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
            var code = decoded.replace(/(^|[\r\n])./g, "$1");
            var highlighted;
            if (diffGrammar) {
              highlighted = Prism2.highlight(code, diffGrammar, diffLanguage);
            } else {
              highlighted = Prism2.util.encode(code);
            }
            var prefixToken = new Prism2.Token("prefix", PREFIXES[env.type], [/\w+/.exec(env.type)[0]]);
            var prefix = Prism2.Token.stringify(prefixToken, env.language);
            var lines = [];
            var m;
            HTML_LINE.lastIndex = 0;
            while (m = HTML_LINE.exec(highlighted)) {
              lines.push(prefix + m[0]);
            }
            if (/(?:^|[\r\n]).$/.test(decoded)) {
              lines.push(prefix);
            }
            env.content = lines.join("");
            if (diffGrammar) {
              env.classes.push("language-" + diffLanguage);
            }
          }
        });
      })();
    }
  });

  // node_modules/anchor-js/anchor.js
  var require_anchor = __commonJS({
    "node_modules/anchor-js/anchor.js"(exports, module) {
      (function(root, factory) {
        "use strict";
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof module === "object" && module.exports) {
          module.exports = factory();
        } else {
          root.AnchorJS = factory();
          root.anchors = new root.AnchorJS();
        }
      })(globalThis, function() {
        "use strict";
        function AnchorJS2(options) {
          this.options = options || {};
          this.elements = [];
          function _applyRemainingDefaultOptions(opts) {
            opts.icon = Object.prototype.hasOwnProperty.call(opts, "icon") ? opts.icon : "\uE9CB";
            opts.visible = Object.prototype.hasOwnProperty.call(opts, "visible") ? opts.visible : "hover";
            opts.placement = Object.prototype.hasOwnProperty.call(opts, "placement") ? opts.placement : "right";
            opts.ariaLabel = Object.prototype.hasOwnProperty.call(opts, "ariaLabel") ? opts.ariaLabel : "Anchor";
            opts.class = Object.prototype.hasOwnProperty.call(opts, "class") ? opts.class : "";
            opts.base = Object.prototype.hasOwnProperty.call(opts, "base") ? opts.base : "";
            opts.truncate = Object.prototype.hasOwnProperty.call(opts, "truncate") ? Math.floor(opts.truncate) : 64;
            opts.titleText = Object.prototype.hasOwnProperty.call(opts, "titleText") ? opts.titleText : "";
          }
          _applyRemainingDefaultOptions(this.options);
          this.add = function(selector) {
            var elements, elsWithIds, idList, elementID, i, index, count, tidyText, newTidyText, anchor, hrefBase, indexesToDrop = [];
            _applyRemainingDefaultOptions(this.options);
            if (!selector) {
              selector = "h2, h3, h4, h5, h6";
            }
            elements = _getElements(selector);
            if (elements.length === 0) {
              return this;
            }
            _addBaselineStyles();
            elsWithIds = document.querySelectorAll("[id]");
            idList = [].map.call(elsWithIds, function(el) {
              return el.id;
            });
            for (i = 0; i < elements.length; i++) {
              if (this.hasAnchorJSLink(elements[i])) {
                indexesToDrop.push(i);
                continue;
              }
              if (elements[i].hasAttribute("id")) {
                elementID = elements[i].getAttribute("id");
              } else if (elements[i].hasAttribute("data-anchor-id")) {
                elementID = elements[i].getAttribute("data-anchor-id");
              } else {
                tidyText = this.urlify(elements[i].textContent);
                newTidyText = tidyText;
                count = 0;
                do {
                  if (index !== void 0) {
                    newTidyText = tidyText + "-" + count;
                  }
                  index = idList.indexOf(newTidyText);
                  count += 1;
                } while (index !== -1);
                index = void 0;
                idList.push(newTidyText);
                elements[i].setAttribute("id", newTidyText);
                elementID = newTidyText;
              }
              anchor = document.createElement("a");
              anchor.className = "anchorjs-link " + this.options.class;
              anchor.setAttribute("aria-label", this.options.ariaLabel);
              anchor.setAttribute("data-anchorjs-icon", this.options.icon);
              if (this.options.titleText) {
                anchor.title = this.options.titleText;
              }
              hrefBase = document.querySelector("base") ? window.location.pathname + window.location.search : "";
              hrefBase = this.options.base || hrefBase;
              anchor.href = hrefBase + "#" + elementID;
              if (this.options.visible === "always") {
                anchor.style.opacity = "1";
              }
              if (this.options.icon === "\uE9CB") {
                anchor.style.font = "1em/1 anchorjs-icons";
                if (this.options.placement === "left") {
                  anchor.style.lineHeight = "inherit";
                }
              }
              if (this.options.placement === "left") {
                anchor.style.position = "absolute";
                anchor.style.marginLeft = "-1.25em";
                anchor.style.paddingRight = ".25em";
                anchor.style.paddingLeft = ".25em";
                elements[i].insertBefore(anchor, elements[i].firstChild);
              } else {
                anchor.style.marginLeft = ".1875em";
                anchor.style.paddingRight = ".1875em";
                anchor.style.paddingLeft = ".1875em";
                elements[i].appendChild(anchor);
              }
            }
            for (i = 0; i < indexesToDrop.length; i++) {
              elements.splice(indexesToDrop[i] - i, 1);
            }
            this.elements = this.elements.concat(elements);
            return this;
          };
          this.remove = function(selector) {
            var index, domAnchor, elements = _getElements(selector);
            for (var i = 0; i < elements.length; i++) {
              domAnchor = elements[i].querySelector(".anchorjs-link");
              if (domAnchor) {
                index = this.elements.indexOf(elements[i]);
                if (index !== -1) {
                  this.elements.splice(index, 1);
                }
                elements[i].removeChild(domAnchor);
              }
            }
            return this;
          };
          this.removeAll = function() {
            this.remove(this.elements);
          };
          this.urlify = function(text) {
            var textareaElement = document.createElement("textarea");
            textareaElement.innerHTML = text;
            text = textareaElement.value;
            var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g;
            if (!this.options.truncate) {
              _applyRemainingDefaultOptions(this.options);
            }
            return text.trim().replace(/'/gi, "").replace(nonsafeChars, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase();
          };
          this.hasAnchorJSLink = function(el) {
            var hasLeftAnchor = el.firstChild && (" " + el.firstChild.className + " ").indexOf(" anchorjs-link ") > -1, hasRightAnchor = el.lastChild && (" " + el.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
            return hasLeftAnchor || hasRightAnchor || false;
          };
          function _getElements(input) {
            var elements;
            if (typeof input === "string" || input instanceof String) {
              elements = [].slice.call(document.querySelectorAll(input));
            } else if (Array.isArray(input) || input instanceof NodeList) {
              elements = [].slice.call(input);
            } else {
              throw new TypeError("The selector provided to AnchorJS was invalid.");
            }
            return elements;
          }
          function _addBaselineStyles() {
            if (document.head.querySelector("style.anchorjs") !== null) {
              return;
            }
            var style = document.createElement("style"), linkRule = ".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}", hoverRule = ":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}", anchorjsLinkFontFace = '@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}', pseudoElContent = "[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}", firstStyleEl;
            style.className = "anchorjs";
            style.appendChild(document.createTextNode(""));
            firstStyleEl = document.head.querySelector('[rel="stylesheet"],style');
            if (firstStyleEl === void 0) {
              document.head.appendChild(style);
            } else {
              document.head.insertBefore(style, firstStyleEl);
            }
            style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
            style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
            style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
            style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
          }
        }
        return AnchorJS2;
      });
    }
  });

  // js/blog.js
  var import_bootstrap_bundle_min = __toESM(require_bootstrap_bundle_min());
  var import_prism = __toESM(require_prism());

  // js/src/util/set-cookie-expiration-never.js
  var setCookieExpirationNever = () => {
    const d = /* @__PURE__ */ new Date();
    d.setTime(d.getTime() + 100 * 365 * 24 * 60 * 60 * 1e3);
    return `expires=${d.toUTCString()};`;
  };

  // js/src/util/get-cookie.js
  var getCookie = (name) => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);
    if (matched) {
      const cookie = matched[0].split("=");
      return cookie[1];
    }
    return false;
  };

  // js/src/alerts.js
  (() => {
    const topNoticeAlert = document.getElementById("topNoticeAlert");
    const topNotice = window.sessionStorage.getItem("notice");
    const cookieNoticeAlert = document.getElementById("cookieNoticeAlert");
    const cookieNoticeName = "chocolatey_hide_cookies_notice";
    if (topNoticeAlert) {
      if (topNotice) {
        topNoticeAlert.remove();
      } else {
        topNoticeAlert.classList.remove("d-none");
      }
      topNoticeAlert.querySelector("button").addEventListener("click", () => sessionStorage.setItem("notice", "true"), false);
    }
    if (cookieNoticeAlert) {
      if (getCookie(cookieNoticeName)) {
        cookieNoticeAlert.remove();
      } else {
        cookieNoticeAlert.classList.remove("d-none");
      }
      cookieNoticeAlert.querySelectorAll("button").forEach((el) => {
        el.addEventListener("click", () => {
          if (~location.hostname.indexOf("chocolatey.org")) {
            document.cookie = `${cookieNoticeName}=true; ${setCookieExpirationNever()}path=/; domain=chocolatey.org;`;
          } else {
            document.cookie = `${cookieNoticeName}=true; ${setCookieExpirationNever()}path=/;`;
          }
        }, false);
      });
    }
  })();

  // js/src/callouts.js
  (() => {
    const htmlCallouts = document.querySelectorAll(".callout");
    const markdownCallouts = document.querySelectorAll("blockquote");
    const applyCalloutStyles = (calloutType) => {
      calloutType.forEach((callout) => {
        let calloutHeader = callout.querySelector(".callout-header");
        if (callout.nodeName === "BLOCKQUOTE") {
          if (callout.querySelector("p:first-child") && callout.querySelector("p:first-child").textContent.includes(":choco-")) {
            calloutHeader = callout.querySelector("p:first-child");
          }
        }
        if (calloutHeader) {
          let calloutIcon = "";
          let calloutIconColor = "";
          let calloutHeaderText = calloutHeader.textContent;
          if (callout.classList.contains("callout-success") || calloutHeaderText.includes(":choco-success:")) {
            calloutIconColor = "success";
            calloutIcon = "check";
            callout.classList.add("callout-success");
          } else if (callout.classList.contains("callout-danger") || calloutHeaderText.includes(":choco-danger:")) {
            calloutIconColor = "danger";
            calloutIcon = "xmark";
            callout.classList.add("callout-danger");
          } else if (callout.classList.contains("callout-warning") || calloutHeaderText.includes(":choco-warning:")) {
            calloutIconColor = "warning";
            calloutIcon = "triangle-exclamation";
            callout.classList.add("callout-warning");
          } else {
            calloutIconColor = "info";
            calloutIcon = "info";
            callout.classList.add("callout-info");
          }
          if (calloutHeaderText.includes(":choco-")) {
            calloutHeaderText = calloutHeaderText.replace(/:.+?:/, "").trim();
          }
          const calloutHeaderContainer = `<div class="callout-header d-flex align-items-center"><span class="flex-shrink-0 text-bg-${calloutIconColor} h-px-30 w-px-30 d-flex align-items-center justify-content-center rounded me-3"><span class="fa-solid fa-${calloutIcon}"></span></span><p class="lead"><strong>${calloutHeaderText}</strong></p></div>`;
          calloutHeader.outerHTML = calloutHeaderContainer;
        }
      });
    };
    applyCalloutStyles(htmlCallouts);
    applyCalloutStyles(markdownCallouts);
  })();

  // js/src/ts/util/trim-string.ts
  var trimString = (item) => {
    item.innerHTML = item.innerHTML.trim();
  };

  // js/src/ts/code.ts
  (() => {
    const codeBlocks = document.querySelectorAll("code");
    const codePre = document.querySelectorAll("pre");
    codeBlocks.forEach(trimString);
    const trimCodeBlocks = () => {
      const currentURL = window.location.href;
      const targetURLs = ["en-us/choco/commands/", "en-us/create/commands/"];
      if (targetURLs.some((url) => currentURL.includes(url))) {
        const headings = document.querySelectorAll("h2");
        for (const heading of headings) {
          const text = heading.textContent.trim();
          if (text === "Examples" || text === "Usage") {
            let nextSibling = heading.nextElementSibling;
            while (nextSibling && nextSibling.tagName !== "H2") {
              if (nextSibling.tagName === "PRE" && nextSibling.firstElementChild && nextSibling.firstElementChild.tagName === "CODE") {
                const codeBlock = nextSibling.firstElementChild;
                const lines = codeBlock.textContent.split("\n");
                const trimmedLines = lines.map((line) => line.trim());
                codeBlock.textContent = trimmedLines.join("\n");
              }
              nextSibling = nextSibling.nextElementSibling;
            }
          }
        }
      }
    };
    trimCodeBlocks();
    for (const i of codePre) {
      if (!i.classList.contains("highlight-delay") && !i.classList.contains("d-format-none")) {
        const codeElement = i;
        codeElement.classList.add("line-numbers", "language-none");
        Prism.highlightAll();
      }
    }
  })();

  // node_modules/luxon/src/errors.js
  var LuxonError = class extends Error {
  };
  var InvalidDateTimeError = class extends LuxonError {
    constructor(reason) {
      super(`Invalid DateTime: ${reason.toMessage()}`);
    }
  };
  var InvalidIntervalError = class extends LuxonError {
    constructor(reason) {
      super(`Invalid Interval: ${reason.toMessage()}`);
    }
  };
  var InvalidDurationError = class extends LuxonError {
    constructor(reason) {
      super(`Invalid Duration: ${reason.toMessage()}`);
    }
  };
  var ConflictingSpecificationError = class extends LuxonError {
  };
  var InvalidUnitError = class extends LuxonError {
    constructor(unit) {
      super(`Invalid unit ${unit}`);
    }
  };
  var InvalidArgumentError = class extends LuxonError {
  };
  var ZoneIsAbstractError = class extends LuxonError {
    constructor() {
      super("Zone is an abstract class");
    }
  };

  // node_modules/luxon/src/impl/formats.js
  var n = "numeric";
  var s = "short";
  var l = "long";
  var DATE_SHORT = {
    year: n,
    month: n,
    day: n
  };
  var DATE_MED = {
    year: n,
    month: s,
    day: n
  };
  var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
  };
  var DATE_FULL = {
    year: n,
    month: l,
    day: n
  };
  var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
  };
  var TIME_SIMPLE = {
    hour: n,
    minute: n
  };
  var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
  };
  var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
  };
  var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
  };
  var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
  };
  var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
  };
  var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
  };
  var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
  };
  var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
  };
  var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };

  // node_modules/luxon/src/zone.js
  var Zone = class {
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get type() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
    get name() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The IANA name of this zone.
     * Defaults to `name` if not overwritten by a subclass.
     * @abstract
     * @type {string}
     */
    get ianaName() {
      return this.name;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
    get isUniversal() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns the offset's value as a string
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(ts, format) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(ts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(otherZone) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */
    get isValid() {
      throw new ZoneIsAbstractError();
    }
  };

  // node_modules/luxon/src/zones/systemZone.js
  var singleton = null;
  var SystemZone = class _SystemZone extends Zone {
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    static get instance() {
      if (singleton === null) {
        singleton = new _SystemZone();
      }
      return singleton;
    }
    /** @override **/
    get type() {
      return "system";
    }
    /** @override **/
    get name() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/
    get isUniversal() {
      return false;
    }
    /** @override **/
    offsetName(ts, { format, locale }) {
      return parseZoneInfo(ts, format, locale);
    }
    /** @override **/
    formatOffset(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /** @override **/
    offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }
    /** @override **/
    equals(otherZone) {
      return otherZone.type === "system";
    }
    /** @override **/
    get isValid() {
      return true;
    }
  };

  // node_modules/luxon/src/zones/IANAZone.js
  var dtfCache = {};
  function makeDTF(zone) {
    if (!dtfCache[zone]) {
      dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
      });
    }
    return dtfCache[zone];
  }
  var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
  };
  function hackyOffset(dtf, date) {
    const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
    return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
  }
  function partsOffset(dtf, date) {
    const formatted = dtf.formatToParts(date);
    const filled = [];
    for (let i = 0; i < formatted.length; i++) {
      const { type, value } = formatted[i];
      const pos = typeToPos[type];
      if (type === "era") {
        filled[pos] = value;
      } else if (!isUndefined(pos)) {
        filled[pos] = parseInt(value, 10);
      }
    }
    return filled;
  }
  var ianaZoneCache = {};
  var IANAZone = class _IANAZone extends Zone {
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */
    static create(name) {
      if (!ianaZoneCache[name]) {
        ianaZoneCache[name] = new _IANAZone(name);
      }
      return ianaZoneCache[name];
    }
    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCache() {
      ianaZoneCache = {};
      dtfCache = {};
    }
    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
     * @return {boolean}
     */
    static isValidSpecifier(s2) {
      return this.isValidZone(s2);
    }
    /**
     * Returns whether the provided string identifies a real zone
     * @param {string} zone - The string to check
     * @example IANAZone.isValidZone("America/New_York") //=> true
     * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
     * @example IANAZone.isValidZone("Sport~~blorp") //=> false
     * @return {boolean}
     */
    static isValidZone(zone) {
      if (!zone) {
        return false;
      }
      try {
        new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
        return true;
      } catch (e) {
        return false;
      }
    }
    constructor(name) {
      super();
      this.zoneName = name;
      this.valid = _IANAZone.isValidZone(name);
    }
    /**
     * The type of zone. `iana` for all instances of `IANAZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "iana";
    }
    /**
     * The name of this zone (i.e. the IANA zone name).
     * @override
     * @type {string}
     */
    get name() {
      return this.zoneName;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns false for all IANA zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return false;
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(ts, { format, locale }) {
      return parseZoneInfo(ts, format, locale, this.name);
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @override
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(ts) {
      const date = new Date(ts);
      if (isNaN(date))
        return NaN;
      const dtf = makeDTF(this.name);
      let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
      if (adOrBc === "BC") {
        year = -Math.abs(year) + 1;
      }
      const adjustedHour = hour === 24 ? 0 : hour;
      const asUTC = objToLocalTS({
        year,
        month,
        day,
        hour: adjustedHour,
        minute,
        second,
        millisecond: 0
      });
      let asTS = +date;
      const over = asTS % 1e3;
      asTS -= over >= 0 ? over : 1e3 + over;
      return (asUTC - asTS) / (60 * 1e3);
    }
    /**
     * Return whether this Zone is equal to another zone
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(otherZone) {
      return otherZone.type === "iana" && otherZone.name === this.name;
    }
    /**
     * Return whether this Zone is valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return this.valid;
    }
  };

  // node_modules/luxon/src/impl/locale.js
  var intlLFCache = {};
  function getCachedLF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let dtf = intlLFCache[key];
    if (!dtf) {
      dtf = new Intl.ListFormat(locString, opts);
      intlLFCache[key] = dtf;
    }
    return dtf;
  }
  var intlDTCache = {};
  function getCachedDTF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let dtf = intlDTCache[key];
    if (!dtf) {
      dtf = new Intl.DateTimeFormat(locString, opts);
      intlDTCache[key] = dtf;
    }
    return dtf;
  }
  var intlNumCache = {};
  function getCachedINF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let inf = intlNumCache[key];
    if (!inf) {
      inf = new Intl.NumberFormat(locString, opts);
      intlNumCache[key] = inf;
    }
    return inf;
  }
  var intlRelCache = {};
  function getCachedRTF(locString, opts = {}) {
    const _a = opts, { base } = _a, cacheKeyOpts = __objRest(_a, ["base"]);
    const key = JSON.stringify([locString, cacheKeyOpts]);
    let inf = intlRelCache[key];
    if (!inf) {
      inf = new Intl.RelativeTimeFormat(locString, opts);
      intlRelCache[key] = inf;
    }
    return inf;
  }
  var sysLocaleCache = null;
  function systemLocale() {
    if (sysLocaleCache) {
      return sysLocaleCache;
    } else {
      sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
      return sysLocaleCache;
    }
  }
  var weekInfoCache = {};
  function getCachedWeekInfo(locString) {
    let data = weekInfoCache[locString];
    if (!data) {
      const locale = new Intl.Locale(locString);
      data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
      weekInfoCache[locString] = data;
    }
    return data;
  }
  function parseLocaleString(localeStr) {
    const xIndex = localeStr.indexOf("-x-");
    if (xIndex !== -1) {
      localeStr = localeStr.substring(0, xIndex);
    }
    const uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) {
      return [localeStr];
    } else {
      let options;
      let selectedStr;
      try {
        options = getCachedDTF(localeStr).resolvedOptions();
        selectedStr = localeStr;
      } catch (e) {
        const smaller = localeStr.substring(0, uIndex);
        options = getCachedDTF(smaller).resolvedOptions();
        selectedStr = smaller;
      }
      const { numberingSystem, calendar } = options;
      return [selectedStr, numberingSystem, calendar];
    }
  }
  function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
      if (!localeStr.includes("-u-")) {
        localeStr += "-u";
      }
      if (outputCalendar) {
        localeStr += `-ca-${outputCalendar}`;
      }
      if (numberingSystem) {
        localeStr += `-nu-${numberingSystem}`;
      }
      return localeStr;
    } else {
      return localeStr;
    }
  }
  function mapMonths(f) {
    const ms = [];
    for (let i = 1; i <= 12; i++) {
      const dt = DateTime.utc(2009, i, 1);
      ms.push(f(dt));
    }
    return ms;
  }
  function mapWeekdays(f) {
    const ms = [];
    for (let i = 1; i <= 7; i++) {
      const dt = DateTime.utc(2016, 11, 13 + i);
      ms.push(f(dt));
    }
    return ms;
  }
  function listStuff(loc, length, englishFn, intlFn) {
    const mode = loc.listingMode();
    if (mode === "error") {
      return null;
    } else if (mode === "en") {
      return englishFn(length);
    } else {
      return intlFn(length);
    }
  }
  function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") {
      return false;
    } else {
      return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
    }
  }
  var PolyNumberFormatter = class {
    constructor(intl, forceSimple, opts) {
      this.padTo = opts.padTo || 0;
      this.floor = opts.floor || false;
      const _a = opts, { padTo, floor } = _a, otherOpts = __objRest(_a, ["padTo", "floor"]);
      if (!forceSimple || Object.keys(otherOpts).length > 0) {
        const intlOpts = __spreadValues({ useGrouping: false }, opts);
        if (opts.padTo > 0)
          intlOpts.minimumIntegerDigits = opts.padTo;
        this.inf = getCachedINF(intl, intlOpts);
      }
    }
    format(i) {
      if (this.inf) {
        const fixed = this.floor ? Math.floor(i) : i;
        return this.inf.format(fixed);
      } else {
        const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
        return padStart(fixed, this.padTo);
      }
    }
  };
  var PolyDateFormatter = class {
    constructor(dt, intl, opts) {
      this.opts = opts;
      this.originalZone = void 0;
      let z = void 0;
      if (this.opts.timeZone) {
        this.dt = dt;
      } else if (dt.zone.type === "fixed") {
        const gmtOffset = -1 * (dt.offset / 60);
        const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
        if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
          z = offsetZ;
          this.dt = dt;
        } else {
          z = "UTC";
          this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
          this.originalZone = dt.zone;
        }
      } else if (dt.zone.type === "system") {
        this.dt = dt;
      } else if (dt.zone.type === "iana") {
        this.dt = dt;
        z = dt.zone.name;
      } else {
        z = "UTC";
        this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
        this.originalZone = dt.zone;
      }
      const intlOpts = __spreadValues({}, this.opts);
      intlOpts.timeZone = intlOpts.timeZone || z;
      this.dtf = getCachedDTF(intl, intlOpts);
    }
    format() {
      if (this.originalZone) {
        return this.formatToParts().map(({ value }) => value).join("");
      }
      return this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
      const parts = this.dtf.formatToParts(this.dt.toJSDate());
      if (this.originalZone) {
        return parts.map((part) => {
          if (part.type === "timeZoneName") {
            const offsetName = this.originalZone.offsetName(this.dt.ts, {
              locale: this.dt.locale,
              format: this.opts.timeZoneName
            });
            return __spreadProps(__spreadValues({}, part), {
              value: offsetName
            });
          } else {
            return part;
          }
        });
      }
      return parts;
    }
    resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  };
  var PolyRelFormatter = class {
    constructor(intl, isEnglish, opts) {
      this.opts = __spreadValues({ style: "long" }, opts);
      if (!isEnglish && hasRelative()) {
        this.rtf = getCachedRTF(intl, opts);
      }
    }
    format(count, unit) {
      if (this.rtf) {
        return this.rtf.format(count, unit);
      } else {
        return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
      }
    }
    formatToParts(count, unit) {
      if (this.rtf) {
        return this.rtf.formatToParts(count, unit);
      } else {
        return [];
      }
    }
  };
  var fallbackWeekSettings = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7]
  };
  var Locale = class _Locale {
    static fromOpts(opts) {
      return _Locale.create(
        opts.locale,
        opts.numberingSystem,
        opts.outputCalendar,
        opts.weekSettings,
        opts.defaultToEN
      );
    }
    static create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN = false) {
      const specifiedLocale = locale || Settings.defaultLocale;
      const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
      const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
      const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
      const weekSettingsR = validateWeekSettings(weekSettings) || Settings.defaultWeekSettings;
      return new _Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
    }
    static resetCache() {
      sysLocaleCache = null;
      intlDTCache = {};
      intlNumCache = {};
      intlRelCache = {};
    }
    static fromObject({ locale, numberingSystem, outputCalendar, weekSettings } = {}) {
      return _Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
    }
    constructor(locale, numbering, outputCalendar, weekSettings, specifiedLocale) {
      const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
      this.locale = parsedLocale;
      this.numberingSystem = numbering || parsedNumberingSystem || null;
      this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
      this.weekSettings = weekSettings;
      this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
      this.weekdaysCache = { format: {}, standalone: {} };
      this.monthsCache = { format: {}, standalone: {} };
      this.meridiemCache = null;
      this.eraCache = {};
      this.specifiedLocale = specifiedLocale;
      this.fastNumbersCached = null;
    }
    get fastNumbers() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }
      return this.fastNumbersCached;
    }
    listingMode() {
      const isActuallyEn = this.isEnglish();
      const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    }
    clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return _Locale.create(
          alts.locale || this.specifiedLocale,
          alts.numberingSystem || this.numberingSystem,
          alts.outputCalendar || this.outputCalendar,
          validateWeekSettings(alts.weekSettings) || this.weekSettings,
          alts.defaultToEN || false
        );
      }
    }
    redefaultToEN(alts = {}) {
      return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: true }));
    }
    redefaultToSystem(alts = {}) {
      return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: false }));
    }
    months(length, format = false) {
      return listStuff(this, length, months, () => {
        const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
        if (!this.monthsCache[formatStr][length]) {
          this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
        }
        return this.monthsCache[formatStr][length];
      });
    }
    weekdays(length, format = false) {
      return listStuff(this, length, weekdays, () => {
        const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
        if (!this.weekdaysCache[formatStr][length]) {
          this.weekdaysCache[formatStr][length] = mapWeekdays(
            (dt) => this.extract(dt, intl, "weekday")
          );
        }
        return this.weekdaysCache[formatStr][length];
      });
    }
    meridiems() {
      return listStuff(
        this,
        void 0,
        () => meridiems,
        () => {
          if (!this.meridiemCache) {
            const intl = { hour: "numeric", hourCycle: "h12" };
            this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
              (dt) => this.extract(dt, intl, "dayperiod")
            );
          }
          return this.meridiemCache;
        }
      );
    }
    eras(length) {
      return listStuff(this, length, eras, () => {
        const intl = { era: length };
        if (!this.eraCache[length]) {
          this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(
            (dt) => this.extract(dt, intl, "era")
          );
        }
        return this.eraCache[length];
      });
    }
    extract(dt, intlOpts, field) {
      const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
      return matching ? matching.value : null;
    }
    numberFormatter(opts = {}) {
      return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
    dtFormatter(dt, intlOpts = {}) {
      return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
    relFormatter(opts = {}) {
      return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    }
    listFormatter(opts = {}) {
      return getCachedLF(this.intl, opts);
    }
    isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    }
    getWeekSettings() {
      if (this.weekSettings) {
        return this.weekSettings;
      } else if (!hasLocaleWeekInfo()) {
        return fallbackWeekSettings;
      } else {
        return getCachedWeekInfo(this.locale);
      }
    }
    getStartOfWeek() {
      return this.getWeekSettings().firstDay;
    }
    getMinDaysInFirstWeek() {
      return this.getWeekSettings().minimalDays;
    }
    getWeekendDays() {
      return this.getWeekSettings().weekend;
    }
    equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
    toString() {
      return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
    }
  };

  // node_modules/luxon/src/zones/fixedOffsetZone.js
  var singleton2 = null;
  var FixedOffsetZone = class _FixedOffsetZone extends Zone {
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    static get utcInstance() {
      if (singleton2 === null) {
        singleton2 = new _FixedOffsetZone(0);
      }
      return singleton2;
    }
    /**
     * Get an instance with a specified offset
     * @param {number} offset - The offset in minutes
     * @return {FixedOffsetZone}
     */
    static instance(offset2) {
      return offset2 === 0 ? _FixedOffsetZone.utcInstance : new _FixedOffsetZone(offset2);
    }
    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
    static parseSpecifier(s2) {
      if (s2) {
        const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r) {
          return new _FixedOffsetZone(signedOffset(r[1], r[2]));
        }
      }
      return null;
    }
    constructor(offset2) {
      super();
      this.fixed = offset2;
    }
    /**
     * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "fixed";
    }
    /**
     * The name of this zone.
     * All fixed zones' names always start with "UTC" (plus optional offset)
     * @override
     * @type {string}
     */
    get name() {
      return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
    }
    /**
     * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
     *
     * @override
     * @type {string}
     */
    get ianaName() {
      if (this.fixed === 0) {
        return "Etc/UTC";
      } else {
        return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
      }
    }
    /**
     * Returns the offset's common name at the specified timestamp.
     *
     * For fixed offset zones this equals to the zone name.
     * @override
     */
    offsetName() {
      return this.name;
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(ts, format) {
      return formatOffset(this.fixed, format);
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns true for all fixed offset zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return true;
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     *
     * For fixed offset zones, this is constant and does not depend on a timestamp.
     * @override
     * @return {number}
     */
    offset() {
      return this.fixed;
    }
    /**
     * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
    /**
     * Return whether this Zone is valid:
     * All fixed offset zones are valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return true;
    }
  };

  // node_modules/luxon/src/zones/invalidZone.js
  var InvalidZone = class extends Zone {
    constructor(zoneName) {
      super();
      this.zoneName = zoneName;
    }
    /** @override **/
    get type() {
      return "invalid";
    }
    /** @override **/
    get name() {
      return this.zoneName;
    }
    /** @override **/
    get isUniversal() {
      return false;
    }
    /** @override **/
    offsetName() {
      return null;
    }
    /** @override **/
    formatOffset() {
      return "";
    }
    /** @override **/
    offset() {
      return NaN;
    }
    /** @override **/
    equals() {
      return false;
    }
    /** @override **/
    get isValid() {
      return false;
    }
  };

  // node_modules/luxon/src/impl/zoneUtil.js
  function normalizeZone(input, defaultZone2) {
    let offset2;
    if (isUndefined(input) || input === null) {
      return defaultZone2;
    } else if (input instanceof Zone) {
      return input;
    } else if (isString(input)) {
      const lowered = input.toLowerCase();
      if (lowered === "default")
        return defaultZone2;
      else if (lowered === "local" || lowered === "system")
        return SystemZone.instance;
      else if (lowered === "utc" || lowered === "gmt")
        return FixedOffsetZone.utcInstance;
      else
        return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
    } else if (isNumber(input)) {
      return FixedOffsetZone.instance(input);
    } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
      return input;
    } else {
      return new InvalidZone(input);
    }
  }

  // node_modules/luxon/src/impl/digits.js
  var numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
  };
  var numberingSystemsUTF16 = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881]
  };
  var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
  function parseDigits(str) {
    let value = parseInt(str, 10);
    if (isNaN(value)) {
      value = "";
      for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (str[i].search(numberingSystems.hanidec) !== -1) {
          value += hanidecChars.indexOf(str[i]);
        } else {
          for (const key in numberingSystemsUTF16) {
            const [min, max] = numberingSystemsUTF16[key];
            if (code >= min && code <= max) {
              value += code - min;
            }
          }
        }
      }
      return parseInt(value, 10);
    } else {
      return value;
    }
  }
  var digitRegexCache = {};
  function resetDigitRegexCache() {
    digitRegexCache = {};
  }
  function digitRegex({ numberingSystem }, append = "") {
    const ns = numberingSystem || "latn";
    if (!digitRegexCache[ns]) {
      digitRegexCache[ns] = {};
    }
    if (!digitRegexCache[ns][append]) {
      digitRegexCache[ns][append] = new RegExp(`${numberingSystems[ns]}${append}`);
    }
    return digitRegexCache[ns][append];
  }

  // node_modules/luxon/src/settings.js
  var now = () => Date.now();
  var defaultZone = "system";
  var defaultLocale = null;
  var defaultNumberingSystem = null;
  var defaultOutputCalendar = null;
  var twoDigitCutoffYear = 60;
  var throwOnInvalid;
  var defaultWeekSettings = null;
  var Settings = class {
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    static get now() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    static set now(n2) {
      now = n2;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */
    static set defaultZone(zone) {
      defaultZone = zone;
    }
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    static get defaultZone() {
      return normalizeZone(defaultZone, SystemZone.instance);
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultLocale() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultLocale(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultNumberingSystem() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultNumberingSystem(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultOutputCalendar() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultOutputCalendar(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * @typedef {Object} WeekSettings
     * @property {number} firstDay
     * @property {number} minimalDays
     * @property {number[]} weekend
     */
    /**
     * @return {WeekSettings|null}
     */
    static get defaultWeekSettings() {
      return defaultWeekSettings;
    }
    /**
     * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
     * how many days are required in the first week of a year.
     * Does not affect existing instances.
     *
     * @param {WeekSettings|null} weekSettings
     */
    static set defaultWeekSettings(weekSettings) {
      defaultWeekSettings = validateWeekSettings(weekSettings);
    }
    /**
     * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     */
    static get twoDigitCutoffYear() {
      return twoDigitCutoffYear;
    }
    /**
     * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
     * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
     * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
     * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
     */
    static set twoDigitCutoffYear(cutoffYear) {
      twoDigitCutoffYear = cutoffYear % 100;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static get throwOnInvalid() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static set throwOnInvalid(t) {
      throwOnInvalid = t;
    }
    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCaches() {
      Locale.resetCache();
      IANAZone.resetCache();
      DateTime.resetCache();
      resetDigitRegexCache();
    }
  };

  // node_modules/luxon/src/impl/invalid.js
  var Invalid = class {
    constructor(reason, explanation) {
      this.reason = reason;
      this.explanation = explanation;
    }
    toMessage() {
      if (this.explanation) {
        return `${this.reason}: ${this.explanation}`;
      } else {
        return this.reason;
      }
    }
  };

  // node_modules/luxon/src/impl/conversions.js
  var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function unitOutOfRange(unit, value) {
    return new Invalid(
      "unit out of range",
      `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
    );
  }
  function dayOfWeek(year, month, day) {
    const d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) {
      d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    const js = d.getUTCDay();
    return js === 0 ? 7 : js;
  }
  function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
  }
  function uncomputeOrdinal(year, ordinal) {
    const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
    return { month: month0 + 1, day };
  }
  function isoWeekdayToLocal(isoWeekday, startOfWeek) {
    return (isoWeekday - startOfWeek + 7) % 7 + 1;
  }
  function gregorianToWeek(gregObj, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = isoWeekdayToLocal(dayOfWeek(year, month, day), startOfWeek);
    let weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7), weekYear;
    if (weekNumber < 1) {
      weekYear = year - 1;
      weekNumber = weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
    } else if (weekNumber > weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
      weekYear = year + 1;
      weekNumber = 1;
    } else {
      weekYear = year;
    }
    return __spreadValues({ weekYear, weekNumber, weekday }, timeObject(gregObj));
  }
  function weekToGregorian(weekData, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = isoWeekdayToLocal(dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek), yearInDays = daysInYear(weekYear);
    let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek, year;
    if (ordinal < 1) {
      year = weekYear - 1;
      ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
      year = weekYear + 1;
      ordinal -= daysInYear(weekYear);
    } else {
      year = weekYear;
    }
    const { month, day } = uncomputeOrdinal(year, ordinal);
    return __spreadValues({ year, month, day }, timeObject(weekData));
  }
  function gregorianToOrdinal(gregData) {
    const { year, month, day } = gregData;
    const ordinal = computeOrdinal(year, month, day);
    return __spreadValues({ year, ordinal }, timeObject(gregData));
  }
  function ordinalToGregorian(ordinalData) {
    const { year, ordinal } = ordinalData;
    const { month, day } = uncomputeOrdinal(year, ordinal);
    return __spreadValues({ year, month, day }, timeObject(ordinalData));
  }
  function usesLocalWeekValues(obj, loc) {
    const hasLocaleWeekData = !isUndefined(obj.localWeekday) || !isUndefined(obj.localWeekNumber) || !isUndefined(obj.localWeekYear);
    if (hasLocaleWeekData) {
      const hasIsoWeekData = !isUndefined(obj.weekday) || !isUndefined(obj.weekNumber) || !isUndefined(obj.weekYear);
      if (hasIsoWeekData) {
        throw new ConflictingSpecificationError(
          "Cannot mix locale-based week fields with ISO-based week fields"
        );
      }
      if (!isUndefined(obj.localWeekday))
        obj.weekday = obj.localWeekday;
      if (!isUndefined(obj.localWeekNumber))
        obj.weekNumber = obj.localWeekNumber;
      if (!isUndefined(obj.localWeekYear))
        obj.weekYear = obj.localWeekYear;
      delete obj.localWeekday;
      delete obj.localWeekNumber;
      delete obj.localWeekYear;
      return {
        minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
        startOfWeek: loc.getStartOfWeek()
      };
    } else {
      return { minDaysInFirstWeek: 4, startOfWeek: 1 };
    }
  }
  function hasInvalidWeekData(obj, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const validYear = isInteger(obj.weekYear), validWeek = integerBetween(
      obj.weekNumber,
      1,
      weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)
    ), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) {
      return unitOutOfRange("weekYear", obj.weekYear);
    } else if (!validWeek) {
      return unitOutOfRange("week", obj.weekNumber);
    } else if (!validWeekday) {
      return unitOutOfRange("weekday", obj.weekday);
    } else
      return false;
  }
  function hasInvalidOrdinalData(obj) {
    const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validOrdinal) {
      return unitOutOfRange("ordinal", obj.ordinal);
    } else
      return false;
  }
  function hasInvalidGregorianData(obj) {
    const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validMonth) {
      return unitOutOfRange("month", obj.month);
    } else if (!validDay) {
      return unitOutOfRange("day", obj.day);
    } else
      return false;
  }
  function hasInvalidTimeData(obj) {
    const { hour, minute, second, millisecond } = obj;
    const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) {
      return unitOutOfRange("hour", hour);
    } else if (!validMinute) {
      return unitOutOfRange("minute", minute);
    } else if (!validSecond) {
      return unitOutOfRange("second", second);
    } else if (!validMillisecond) {
      return unitOutOfRange("millisecond", millisecond);
    } else
      return false;
  }

  // node_modules/luxon/src/impl/util.js
  function isUndefined(o) {
    return typeof o === "undefined";
  }
  function isNumber(o) {
    return typeof o === "number";
  }
  function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
  }
  function isString(o) {
    return typeof o === "string";
  }
  function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
  }
  function hasRelative() {
    try {
      return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
      return false;
    }
  }
  function hasLocaleWeekInfo() {
    try {
      return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch (e) {
      return false;
    }
  }
  function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [thing];
  }
  function bestBy(arr, by, compare) {
    if (arr.length === 0) {
      return void 0;
    }
    return arr.reduce((best, next) => {
      const pair = [by(next), next];
      if (!best) {
        return pair;
      } else if (compare(best[0], pair[0]) === best[0]) {
        return best;
      } else {
        return pair;
      }
    }, null)[1];
  }
  function pick(obj, keys) {
    return keys.reduce((a, k) => {
      a[k] = obj[k];
      return a;
    }, {});
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function validateWeekSettings(settings) {
    if (settings == null) {
      return null;
    } else if (typeof settings !== "object") {
      throw new InvalidArgumentError("Week settings must be an object");
    } else {
      if (!integerBetween(settings.firstDay, 1, 7) || !integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some((v) => !integerBetween(v, 1, 7))) {
        throw new InvalidArgumentError("Invalid week settings");
      }
      return {
        firstDay: settings.firstDay,
        minimalDays: settings.minimalDays,
        weekend: Array.from(settings.weekend)
      };
    }
  }
  function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
  }
  function floorMod(x, n2) {
    return x - n2 * Math.floor(x / n2);
  }
  function padStart(input, n2 = 2) {
    const isNeg = input < 0;
    let padded;
    if (isNeg) {
      padded = "-" + ("" + -input).padStart(n2, "0");
    } else {
      padded = ("" + input).padStart(n2, "0");
    }
    return padded;
  }
  function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") {
      return void 0;
    } else {
      return parseInt(string, 10);
    }
  }
  function parseFloating(string) {
    if (isUndefined(string) || string === null || string === "") {
      return void 0;
    } else {
      return parseFloat(string);
    }
  }
  function parseMillis(fraction) {
    if (isUndefined(fraction) || fraction === null || fraction === "") {
      return void 0;
    } else {
      const f = parseFloat("0." + fraction) * 1e3;
      return Math.floor(f);
    }
  }
  function roundTo(number, digits, towardZero = false) {
    const factor = __pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function daysInMonth(year, month) {
    const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) {
      return isLeapYear(modYear) ? 29 : 28;
    } else {
      return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
    }
  }
  function objToLocalTS(obj) {
    let d = Date.UTC(
      obj.year,
      obj.month - 1,
      obj.day,
      obj.hour,
      obj.minute,
      obj.second,
      obj.millisecond
    );
    if (obj.year < 100 && obj.year >= 0) {
      d = new Date(d);
      d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
    }
    return +d;
  }
  function firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
    const fwdlw = isoWeekdayToLocal(dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
    return -fwdlw + minDaysInFirstWeek - 1;
  }
  function weeksInWeekYear(weekYear, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const weekOffset = firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
    const weekOffsetNext = firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
    return (daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
  }
  function untruncateYear(year) {
    if (year > 99) {
      return year;
    } else
      return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
  }
  function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
    const date = new Date(ts), intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    if (timeZone) {
      intlOpts.timeZone = timeZone;
    }
    const modified = __spreadValues({ timeZoneName: offsetFormat }, intlOpts);
    const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
    return parsed ? parsed.value : null;
  }
  function signedOffset(offHourStr, offMinuteStr) {
    let offHour = parseInt(offHourStr, 10);
    if (Number.isNaN(offHour)) {
      offHour = 0;
    }
    const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
  }
  function asNumber(value) {
    const numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
      throw new InvalidArgumentError(`Invalid unit value ${value}`);
    return numericValue;
  }
  function normalizeObject(obj, normalizer) {
    const normalized = {};
    for (const u in obj) {
      if (hasOwnProperty(obj, u)) {
        const v = obj[u];
        if (v === void 0 || v === null)
          continue;
        normalized[normalizer(u)] = asNumber(v);
      }
    }
    return normalized;
  }
  function formatOffset(offset2, format) {
    const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
    switch (format) {
      case "short":
        return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
      case "narrow":
        return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
      case "techie":
        return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
      default:
        throw new RangeError(`Value format ${format} is out of range for property format`);
    }
  }
  function timeObject(obj) {
    return pick(obj, ["hour", "minute", "second", "millisecond"]);
  }

  // node_modules/luxon/src/impl/english.js
  var monthsLong = [
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
    "December"
  ];
  var monthsShort = [
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
    "Dec"
  ];
  var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  function months(length) {
    switch (length) {
      case "narrow":
        return [...monthsNarrow];
      case "short":
        return [...monthsShort];
      case "long":
        return [...monthsLong];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      case "2-digit":
        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      default:
        return null;
    }
  }
  var weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
  function weekdays(length) {
    switch (length) {
      case "narrow":
        return [...weekdaysNarrow];
      case "short":
        return [...weekdaysShort];
      case "long":
        return [...weekdaysLong];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];
      default:
        return null;
    }
  }
  var meridiems = ["AM", "PM"];
  var erasLong = ["Before Christ", "Anno Domini"];
  var erasShort = ["BC", "AD"];
  var erasNarrow = ["B", "A"];
  function eras(length) {
    switch (length) {
      case "narrow":
        return [...erasNarrow];
      case "short":
        return [...erasShort];
      case "long":
        return [...erasLong];
      default:
        return null;
    }
  }
  function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
  }
  function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
  }
  function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
  }
  function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
  }
  function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
    const units = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."]
    };
    const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
      const isDay = unit === "days";
      switch (count) {
        case 1:
          return isDay ? "tomorrow" : `next ${units[unit][0]}`;
        case -1:
          return isDay ? "yesterday" : `last ${units[unit][0]}`;
        case 0:
          return isDay ? "today" : `this ${units[unit][0]}`;
        default:
      }
    }
    const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
  }

  // node_modules/luxon/src/impl/formatter.js
  function stringifyTokens(splits, tokenToString) {
    let s2 = "";
    for (const token of splits) {
      if (token.literal) {
        s2 += token.val;
      } else {
        s2 += tokenToString(token.val);
      }
    }
    return s2;
  }
  var macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
  };
  var Formatter = class _Formatter {
    static create(locale, opts = {}) {
      return new _Formatter(locale, opts);
    }
    static parseFormat(fmt) {
      let current = null, currentFull = "", bracketed = false;
      const splits = [];
      for (let i = 0; i < fmt.length; i++) {
        const c = fmt.charAt(i);
        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
          }
          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
          }
          currentFull = c;
          current = c;
        }
      }
      if (currentFull.length > 0) {
        splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
      }
      return splits;
    }
    static macroTokenToFormatOpts(token) {
      return macroTokenToFormatOpts[token];
    }
    constructor(locale, formatOpts) {
      this.opts = formatOpts;
      this.loc = locale;
      this.systemLoc = null;
    }
    formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }
      const df = this.systemLoc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
      return df.format();
    }
    dtFormatter(dt, opts = {}) {
      return this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    }
    formatDateTime(dt, opts) {
      return this.dtFormatter(dt, opts).format();
    }
    formatDateTimeParts(dt, opts) {
      return this.dtFormatter(dt, opts).formatToParts();
    }
    formatInterval(interval, opts) {
      const df = this.dtFormatter(interval.start, opts);
      return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    }
    resolvedOptions(dt, opts) {
      return this.dtFormatter(dt, opts).resolvedOptions();
    }
    num(n2, p = 0) {
      if (this.opts.forceSimple) {
        return padStart(n2, p);
      }
      const opts = __spreadValues({}, this.opts);
      if (p > 0) {
        opts.padTo = p;
      }
      return this.loc.numberFormatter(opts).format(n2);
    }
    formatDateTimeFromString(dt, fmt) {
      const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }
        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(
        standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
        "weekday"
      ), maybeMacro = (token) => {
        const formatOpts = _Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
        switch (token) {
          case "S":
            return this.num(dt.millisecond);
          case "u":
          case "SSS":
            return this.num(dt.millisecond, 3);
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          case "Z":
            return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          case "z":
            return dt.zoneName;
          case "a":
            return meridiem();
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          case "c":
            return this.num(dt.weekday);
          case "ccc":
            return weekday("short", true);
          case "cccc":
            return weekday("long", true);
          case "ccccc":
            return weekday("narrow", true);
          case "E":
            return this.num(dt.weekday);
          case "EEE":
            return weekday("short", false);
          case "EEEE":
            return weekday("long", false);
          case "EEEEE":
            return weekday("narrow", false);
          case "L":
            return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
          case "LL":
            return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
          case "LLL":
            return month("short", true);
          case "LLLL":
            return month("long", true);
          case "LLLLL":
            return month("narrow", true);
          case "M":
            return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
          case "MM":
            return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
          case "MMM":
            return month("short", false);
          case "MMMM":
            return month("long", false);
          case "MMMMM":
            return month("narrow", false);
          case "y":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
          case "yyyyyy":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
          case "G":
            return era("short");
          case "GG":
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "n":
            return this.num(dt.localWeekNumber);
          case "nn":
            return this.num(dt.localWeekNumber, 2);
          case "ii":
            return this.num(dt.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(dt.localWeekYear, 4);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            return this.num(dt.quarter);
          case "qq":
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1e3));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };
      return stringifyTokens(_Formatter.parseFormat(fmt), tokenToString);
    }
    formatDurationFromString(dur, fmt) {
      const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      }, tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      }, tokens = _Formatter.parseFormat(fmt), realTokens = tokens.reduce(
        (found, { literal, val }) => literal ? found : found.concat(val),
        []
      ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
      return stringifyTokens(tokens, tokenToString(collapsed));
    }
  };

  // node_modules/luxon/src/impl/regexParser.js
  var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  function combineRegexes(...regexes) {
    const full = regexes.reduce((f, r) => f + r.source, "");
    return RegExp(`^${full}$`);
  }
  function combineExtractors(...extractors) {
    return (m) => extractors.reduce(
      ([mergedVals, mergedZone, cursor], ex) => {
        const [val, zone, next] = ex(m, cursor);
        return [__spreadValues(__spreadValues({}, mergedVals), val), zone || mergedZone, next];
      },
      [{}, null, 1]
    ).slice(0, 2);
  }
  function parse(s2, ...patterns) {
    if (s2 == null) {
      return [null, null];
    }
    for (const [regex, extractor] of patterns) {
      const m = regex.exec(s2);
      if (m) {
        return extractor(m);
      }
    }
    return [null, null];
  }
  function simpleParse(...keys) {
    return (match2, cursor) => {
      const ret = {};
      let i;
      for (i = 0; i < keys.length; i++) {
        ret[keys[i]] = parseInteger(match2[cursor + i]);
      }
      return [ret, null, cursor + i];
    };
  }
  var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
  var isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
  var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
  var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
  var isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
  var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
  var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
  var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
  var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
  var extractISOOrdinalData = simpleParse("year", "ordinal");
  var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
  var sqlTimeRegex = RegExp(
    `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
  );
  var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
  function int(match2, pos, fallback) {
    const m = match2[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
  }
  function extractISOYmd(match2, cursor) {
    const item = {
      year: int(match2, cursor),
      month: int(match2, cursor + 1, 1),
      day: int(match2, cursor + 2, 1)
    };
    return [item, null, cursor + 3];
  }
  function extractISOTime(match2, cursor) {
    const item = {
      hours: int(match2, cursor, 0),
      minutes: int(match2, cursor + 1, 0),
      seconds: int(match2, cursor + 2, 0),
      milliseconds: parseMillis(match2[cursor + 3])
    };
    return [item, null, cursor + 4];
  }
  function extractISOOffset(match2, cursor) {
    const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [{}, zone, cursor + 3];
  }
  function extractIANAZone(match2, cursor) {
    const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
    return [{}, zone, cursor + 1];
  }
  var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
  var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
  function extractISODuration(match2) {
    const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
    const hasNegativePrefix = s2[0] === "-";
    const negativeSeconds = secondStr && secondStr[0] === "-";
    const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
    return [
      {
        years: maybeNegate(parseFloating(yearStr)),
        months: maybeNegate(parseFloating(monthStr)),
        weeks: maybeNegate(parseFloating(weekStr)),
        days: maybeNegate(parseFloating(dayStr)),
        hours: maybeNegate(parseFloating(hourStr)),
        minutes: maybeNegate(parseFloating(minuteStr)),
        seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
        milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
      }
    ];
  }
  var obsOffsets = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    const result = {
      year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
      month: monthsShort.indexOf(monthStr) + 1,
      day: parseInteger(dayStr),
      hour: parseInteger(hourStr),
      minute: parseInteger(minuteStr)
    };
    if (secondStr)
      result.second = parseInteger(secondStr);
    if (weekdayStr) {
      result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    }
    return result;
  }
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function extractRFC2822(match2) {
    const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr
    ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    let offset2;
    if (obsOffset) {
      offset2 = obsOffsets[obsOffset];
    } else if (milOffset) {
      offset2 = 0;
    } else {
      offset2 = signedOffset(offHourStr, offMinuteStr);
    }
    return [result, new FixedOffsetZone(offset2)];
  }
  function preprocessRFC2822(s2) {
    return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }
  var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
  var rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
  var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function extractRFC1123Or850(match2) {
    const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [result, FixedOffsetZone.utcInstance];
  }
  function extractASCII(match2) {
    const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [result, FixedOffsetZone.utcInstance];
  }
  var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
  var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
  var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
  var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
  var extractISOYmdTimeAndOffset = combineExtractors(
    extractISOYmd,
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  var extractISOWeekTimeAndOffset = combineExtractors(
    extractISOWeekData,
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  var extractISOOrdinalDateAndTime = combineExtractors(
    extractISOOrdinalData,
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  var extractISOTimeAndOffset = combineExtractors(
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  function parseISODate(s2) {
    return parse(
      s2,
      [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
      [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
      [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
      [isoTimeCombinedRegex, extractISOTimeAndOffset]
    );
  }
  function parseRFC2822Date(s2) {
    return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
  }
  function parseHTTPDate(s2) {
    return parse(
      s2,
      [rfc1123, extractRFC1123Or850],
      [rfc850, extractRFC1123Or850],
      [ascii, extractASCII]
    );
  }
  function parseISODuration(s2) {
    return parse(s2, [isoDuration, extractISODuration]);
  }
  var extractISOTimeOnly = combineExtractors(extractISOTime);
  function parseISOTimeOnly(s2) {
    return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
  }
  var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
  var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
  var extractISOTimeOffsetAndIANAZone = combineExtractors(
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  function parseSQL(s2) {
    return parse(
      s2,
      [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
      [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
    );
  }

  // node_modules/luxon/src/duration.js
  var INVALID = "Invalid Duration";
  var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
    minutes: { seconds: 60, milliseconds: 60 * 1e3 },
    seconds: { milliseconds: 1e3 }
  };
  var casualMatrix = __spreadValues({
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1e3
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1e3
    }
  }, lowOrderMatrix);
  var daysInYearAccurate = 146097 / 400;
  var daysInMonthAccurate = 146097 / 4800;
  var accurateMatrix = __spreadValues({
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: daysInYearAccurate * 24 / 4,
      minutes: daysInYearAccurate * 24 * 60 / 4,
      seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
    }
  }, lowOrderMatrix);
  var orderedUnits = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ];
  var reverseUnits = orderedUnits.slice(0).reverse();
  function clone(dur, alts, clear = false) {
    const conf = {
      values: clear ? alts.values : __spreadValues(__spreadValues({}, dur.values), alts.values || {}),
      loc: dur.loc.clone(alts.loc),
      conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
      matrix: alts.matrix || dur.matrix
    };
    return new Duration(conf);
  }
  function durationToMillis(matrix, vals) {
    var _a;
    let sum = (_a = vals.milliseconds) != null ? _a : 0;
    for (const unit of reverseUnits.slice(1)) {
      if (vals[unit]) {
        sum += vals[unit] * matrix[unit]["milliseconds"];
      }
    }
    return sum;
  }
  function normalizeValues(matrix, vals) {
    const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
    orderedUnits.reduceRight((previous, current) => {
      if (!isUndefined(vals[current])) {
        if (previous) {
          const previousVal = vals[previous] * factor;
          const conv = matrix[current][previous];
          const rollUp = Math.floor(previousVal / conv);
          vals[current] += rollUp * factor;
          vals[previous] -= rollUp * conv * factor;
        }
        return current;
      } else {
        return previous;
      }
    }, null);
    orderedUnits.reduce((previous, current) => {
      if (!isUndefined(vals[current])) {
        if (previous) {
          const fraction = vals[previous] % 1;
          vals[previous] -= fraction;
          vals[current] += fraction * matrix[previous][current];
        }
        return current;
      } else {
        return previous;
      }
    }, null);
  }
  function removeZeroes(vals) {
    const newVals = {};
    for (const [key, value] of Object.entries(vals)) {
      if (value !== 0) {
        newVals[key] = value;
      }
    }
    return newVals;
  }
  var Duration = class _Duration {
    /**
     * @private
     */
    constructor(config) {
      const accurate = config.conversionAccuracy === "longterm" || false;
      let matrix = accurate ? accurateMatrix : casualMatrix;
      if (config.matrix) {
        matrix = config.matrix;
      }
      this.values = config.values;
      this.loc = config.loc || Locale.create();
      this.conversionAccuracy = accurate ? "longterm" : "casual";
      this.invalid = config.invalid || null;
      this.matrix = matrix;
      this.isLuxonDuration = true;
    }
    /**
     * Create Duration from a number of milliseconds.
     * @param {number} count of milliseconds
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    static fromMillis(count, opts) {
      return _Duration.fromObject({ milliseconds: count }, opts);
    }
    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
     * If this object is empty then a zero milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {Object} [opts=[]] - options for creating this Duration
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the custom conversion system to use
     * @return {Duration}
     */
    static fromObject(obj, opts = {}) {
      if (obj == null || typeof obj !== "object") {
        throw new InvalidArgumentError(
          `Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`
        );
      }
      return new _Duration({
        values: normalizeObject(obj, _Duration.normalizeUnit),
        loc: Locale.fromObject(opts),
        conversionAccuracy: opts.conversionAccuracy,
        matrix: opts.matrix
      });
    }
    /**
     * Create a Duration from DurationLike.
     *
     * @param {Object | number | Duration} durationLike
     * One of:
     * - object with keys like 'years' and 'hours'.
     * - number representing milliseconds
     * - Duration instance
     * @return {Duration}
     */
    static fromDurationLike(durationLike) {
      if (isNumber(durationLike)) {
        return _Duration.fromMillis(durationLike);
      } else if (_Duration.isDuration(durationLike)) {
        return durationLike;
      } else if (typeof durationLike === "object") {
        return _Duration.fromObject(durationLike);
      } else {
        throw new InvalidArgumentError(
          `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
        );
      }
    }
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the preset conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */
    static fromISO(text, opts) {
      const [parsed] = parseISODuration(text);
      if (parsed) {
        return _Duration.fromObject(parsed, opts);
      } else {
        return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }
    }
    /**
     * Create a Duration from an ISO 8601 time string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @return {Duration}
     */
    static fromISOTime(text, opts) {
      const [parsed] = parseISOTimeOnly(text);
      if (parsed) {
        return _Duration.fromObject(parsed, opts);
      } else {
        return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }
    }
    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */
    static invalid(reason, explanation = null) {
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
      }
      const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(invalid);
      } else {
        return new _Duration({ invalid });
      }
    }
    /**
     * @private
     */
    static normalizeUnit(unit) {
      const normalized = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[unit ? unit.toLowerCase() : unit];
      if (!normalized)
        throw new InvalidUnitError(unit);
      return normalized;
    }
    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDuration(o) {
      return o && o.isLuxonDuration || false;
    }
    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `w` for weeks
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * Tokens can be escaped by wrapping with single quotes.
     * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @return {string}
     */
    toFormat(fmt, opts = {}) {
      const fmtOpts = __spreadProps(__spreadValues({}, opts), {
        floor: opts.round !== false && opts.floor !== false
      });
      return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    }
    /**
     * Returns a string representation of a Duration with all units included.
     * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
     * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
     * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
     * @example
     * ```js
     * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
     * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
     * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
     * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
     * ```
     */
    toHuman(opts = {}) {
      if (!this.isValid)
        return INVALID;
      const l2 = orderedUnits.map((unit) => {
        const val = this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return this.loc.numberFormatter(__spreadProps(__spreadValues({ style: "unit", unitDisplay: "long" }, opts), { unit: unit.slice(0, -1) })).format(val);
      }).filter((n2) => n2);
      return this.loc.listFormatter(__spreadValues({ type: "conjunction", style: opts.listStyle || "narrow" }, opts)).format(l2);
    }
    /**
     * Returns a JavaScript object with this Duration's values.
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */
    toObject() {
      if (!this.isValid)
        return {};
      return __spreadValues({}, this.values);
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */
    toISO() {
      if (!this.isValid)
        return null;
      let s2 = "P";
      if (this.years !== 0)
        s2 += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0)
        s2 += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0)
        s2 += this.weeks + "W";
      if (this.days !== 0)
        s2 += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
        s2 += "T";
      if (this.hours !== 0)
        s2 += this.hours + "H";
      if (this.minutes !== 0)
        s2 += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0)
        s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
      if (s2 === "P")
        s2 += "T0S";
      return s2;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     * @return {string}
     */
    toISOTime(opts = {}) {
      if (!this.isValid)
        return null;
      const millis = this.toMillis();
      if (millis < 0 || millis >= 864e5)
        return null;
      opts = __spreadProps(__spreadValues({
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: "extended"
      }, opts), {
        includeOffset: false
      });
      const dateTime = DateTime.fromMillis(millis, { zone: "UTC" });
      return dateTime.toISOTime(opts);
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */
    toString() {
      return this.toISO();
    }
    /**
     * Returns a string representation of this Duration appropriate for the REPL.
     * @return {string}
     */
    [Symbol.for("nodejs.util.inspect.custom")]() {
      if (this.isValid) {
        return `Duration { values: ${JSON.stringify(this.values)} }`;
      } else {
        return `Duration { Invalid, reason: ${this.invalidReason} }`;
      }
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */
    toMillis() {
      if (!this.isValid)
        return NaN;
      return durationToMillis(this.matrix, this.values);
    }
    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    plus(duration) {
      if (!this.isValid)
        return this;
      const dur = _Duration.fromDurationLike(duration), result = {};
      for (const k of orderedUnits) {
        if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
          result[k] = dur.get(k) + this.get(k);
        }
      }
      return clone(this, { values: result }, true);
    }
    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    minus(duration) {
      if (!this.isValid)
        return this;
      const dur = _Duration.fromDurationLike(duration);
      return this.plus(dur.negate());
    }
    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     * @return {Duration}
     */
    mapUnits(fn) {
      if (!this.isValid)
        return this;
      const result = {};
      for (const k of Object.keys(this.values)) {
        result[k] = asNumber(fn(this.values[k], k));
      }
      return clone(this, { values: result }, true);
    }
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
     * @return {number}
     */
    get(unit) {
      return this[_Duration.normalizeUnit(unit)];
    }
    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */
    set(values) {
      if (!this.isValid)
        return this;
      const mixed = __spreadValues(__spreadValues({}, this.values), normalizeObject(values, _Duration.normalizeUnit));
      return clone(this, { values: mixed });
    }
    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */
    reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
      const loc = this.loc.clone({ locale, numberingSystem });
      const opts = { loc, matrix, conversionAccuracy };
      return clone(this, opts);
    }
    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */
    as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     * Assuming the overall value of the Duration is positive, this means:
     * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
     * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
     *   the overall value would be negative, see third example)
     * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
     *
     * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
     * @return {Duration}
     */
    normalize() {
      if (!this.isValid)
        return this;
      const vals = this.toObject();
      normalizeValues(this.matrix, vals);
      return clone(this, { values: vals }, true);
    }
    /**
     * Rescale units to its largest representation
     * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
     * @return {Duration}
     */
    rescale() {
      if (!this.isValid)
        return this;
      const vals = removeZeroes(this.normalize().shiftToAll().toObject());
      return clone(this, { values: vals }, true);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
    shiftTo(...units) {
      if (!this.isValid)
        return this;
      if (units.length === 0) {
        return this;
      }
      units = units.map((u) => _Duration.normalizeUnit(u));
      const built = {}, accumulated = {}, vals = this.toObject();
      let lastUnit;
      for (const k of orderedUnits) {
        if (units.indexOf(k) >= 0) {
          lastUnit = k;
          let own = 0;
          for (const ak in accumulated) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          }
          if (isNumber(vals[k])) {
            own += vals[k];
          }
          const i = Math.trunc(own);
          built[k] = i;
          accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
        } else if (isNumber(vals[k])) {
          accumulated[k] = vals[k];
        }
      }
      for (const key in accumulated) {
        if (accumulated[key] !== 0) {
          built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        }
      }
      normalizeValues(this.matrix, built);
      return clone(this, { values: built }, true);
    }
    /**
     * Shift this Duration to all available units.
     * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
     * @return {Duration}
     */
    shiftToAll() {
      if (!this.isValid)
        return this;
      return this.shiftTo(
        "years",
        "months",
        "weeks",
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds"
      );
    }
    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */
    negate() {
      if (!this.isValid)
        return this;
      const negated = {};
      for (const k of Object.keys(this.values)) {
        negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
      }
      return clone(this, { values: negated }, true);
    }
    /**
     * Get the years.
     * @type {number}
     */
    get years() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
    get quarters() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
    get months() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
    get weeks() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
    get days() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
    get hours() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
    get minutes() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
    get seconds() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
    get milliseconds() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      if (!this.loc.equals(other.loc)) {
        return false;
      }
      function eq(v1, v2) {
        if (v1 === void 0 || v1 === 0)
          return v2 === void 0 || v2 === 0;
        return v1 === v2;
      }
      for (const u of orderedUnits) {
        if (!eq(this.values[u], other.values[u])) {
          return false;
        }
      }
      return true;
    }
  };

  // node_modules/luxon/src/interval.js
  var INVALID2 = "Invalid Interval";
  function validateStartEnd(start, end) {
    if (!start || !start.isValid) {
      return Interval.invalid("missing or invalid start");
    } else if (!end || !end.isValid) {
      return Interval.invalid("missing or invalid end");
    } else if (end < start) {
      return Interval.invalid(
        "end before start",
        `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
      );
    } else {
      return null;
    }
  }
  var Interval = class _Interval {
    /**
     * @private
     */
    constructor(config) {
      this.s = config.start;
      this.e = config.end;
      this.invalid = config.invalid || null;
      this.isLuxonInterval = true;
    }
    /**
     * Create an invalid Interval.
     * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Interval}
     */
    static invalid(reason, explanation = null) {
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
      }
      const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(invalid);
      } else {
        return new _Interval({ invalid });
      }
    }
    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */
    static fromDateTimes(start, end) {
      const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
      const validateError = validateStartEnd(builtStart, builtEnd);
      if (validateError == null) {
        return new _Interval({
          start: builtStart,
          end: builtEnd
        });
      } else {
        return validateError;
      }
    }
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static after(start, duration) {
      const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
      return _Interval.fromDateTimes(dt, dt.plus(dur));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static before(end, duration) {
      const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
      return _Interval.fromDateTimes(dt.minus(dur), dt);
    }
    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */
    static fromISO(text, opts) {
      const [s2, e] = (text || "").split("/", 2);
      if (s2 && e) {
        let start, startIsValid;
        try {
          start = DateTime.fromISO(s2, opts);
          startIsValid = start.isValid;
        } catch (e2) {
          startIsValid = false;
        }
        let end, endIsValid;
        try {
          end = DateTime.fromISO(e, opts);
          endIsValid = end.isValid;
        } catch (e2) {
          endIsValid = false;
        }
        if (startIsValid && endIsValid) {
          return _Interval.fromDateTimes(start, end);
        }
        if (startIsValid) {
          const dur = Duration.fromISO(e, opts);
          if (dur.isValid) {
            return _Interval.after(start, dur);
          }
        } else if (endIsValid) {
          const dur = Duration.fromISO(s2, opts);
          if (dur.isValid) {
            return _Interval.before(end, dur);
          }
        }
      }
      return _Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isInterval(o) {
      return o && o.isLuxonInterval || false;
    }
    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    get start() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
    get end() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
    get isValid() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    length(unit = "milliseconds") {
      return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
    }
    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
     * @return {number}
     */
    count(unit = "milliseconds", opts) {
      if (!this.isValid)
        return NaN;
      const start = this.start.startOf(unit, opts);
      let end;
      if (opts == null ? void 0 : opts.useLocaleWeeks) {
        end = this.end.reconfigure({ locale: start.locale });
      } else {
        end = this.end;
      }
      end = end.startOf(unit, opts);
      return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
    }
    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */
    hasSame(unit) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    }
    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */
    isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isAfter(dateTime) {
      if (!this.isValid)
        return false;
      return this.s > dateTime;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isBefore(dateTime) {
      if (!this.isValid)
        return false;
      return this.e <= dateTime;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    contains(dateTime) {
      if (!this.isValid)
        return false;
      return this.s <= dateTime && this.e > dateTime;
    }
    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */
    set({ start, end } = {}) {
      if (!this.isValid)
        return this;
      return _Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
    splitAt(...dateTimes) {
      if (!this.isValid)
        return [];
      const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort((a, b) => a.toMillis() - b.toMillis()), results = [];
      let { s: s2 } = this, i = 0;
      while (s2 < this.e) {
        const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
        results.push(_Interval.fromDateTimes(s2, next));
        s2 = next;
        i += 1;
      }
      return results;
    }
    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {Array}
     */
    splitBy(duration) {
      const dur = Duration.fromDurationLike(duration);
      if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
        return [];
      }
      let { s: s2 } = this, idx = 1, next;
      const results = [];
      while (s2 < this.e) {
        const added = this.start.plus(dur.mapUnits((x) => x * idx));
        next = +added > +this.e ? this.e : added;
        results.push(_Interval.fromDateTimes(s2, next));
        s2 = next;
        idx += 1;
      }
      return results;
    }
    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {Array}
     */
    divideEqually(numberOfParts) {
      if (!this.isValid)
        return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }
    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */
    overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }
    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsStart(other) {
      if (!this.isValid)
        return false;
      return +this.e === +other.s;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsEnd(other) {
      if (!this.isValid)
        return false;
      return +other.e === +this.s;
    }
    /**
     * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
     * @param {Interval} other
     * @return {boolean}
     */
    engulfs(other) {
      if (!this.isValid)
        return false;
      return this.s <= other.s && this.e >= other.e;
    }
    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
    equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      return this.s.equals(other.s) && this.e.equals(other.e);
    }
    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */
    intersection(other) {
      if (!this.isValid)
        return this;
      const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
      if (s2 >= e) {
        return null;
      } else {
        return _Interval.fromDateTimes(s2, e);
      }
    }
    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */
    union(other) {
      if (!this.isValid)
        return this;
      const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
      return _Interval.fromDateTimes(s2, e);
    }
    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
    static merge(intervals) {
      const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
      if (final) {
        found.push(final);
      }
      return found;
    }
    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
    static xor(intervals) {
      let start = null, currentCount = 0;
      const results = [], ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" }
      ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
      for (const i of arr) {
        currentCount += i.type === "s" ? 1 : -1;
        if (currentCount === 1) {
          start = i.time;
        } else {
          if (start && +start !== +i.time) {
            results.push(_Interval.fromDateTimes(start, i.time));
          }
          start = null;
        }
      }
      return _Interval.merge(results);
    }
    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Array}
     */
    difference(...intervals) {
      return _Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
    toString() {
      if (!this.isValid)
        return INVALID2;
      return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
    }
    /**
     * Returns a string representation of this Interval appropriate for the REPL.
     * @return {string}
     */
    [Symbol.for("nodejs.util.inspect.custom")]() {
      if (this.isValid) {
        return `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`;
      } else {
        return `Interval { Invalid, reason: ${this.invalidReason} }`;
      }
    }
    /**
     * Returns a localized string representing this Interval. Accepts the same options as the
     * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
     * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
     * is browser-specific, but in general it will return an appropriate representation of the
     * Interval in the assigned locale. Defaults to the system's locale if no locale has been
     * specified.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
     * Intl.DateTimeFormat constructor options.
     * @param {Object} opts - Options to override the configuration of the start DateTime.
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
     * @return {string}
     */
    toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
      return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID2;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISO(opts) {
      if (!this.isValid)
        return INVALID2;
      return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
    }
    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
    toISODate() {
      if (!this.isValid)
        return INVALID2;
      return `${this.s.toISODate()}/${this.e.toISODate()}`;
    }
    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISOTime(opts) {
      if (!this.isValid)
        return INVALID2;
      return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
    }
    /**
     * Returns a string representation of this Interval formatted according to the specified format
     * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
     * formatting tool.
     * @param {string} dateFormat - The format string. This string formats the start and end time.
     * See {@link DateTime#toFormat} for details.
     * @param {Object} opts - Options.
     * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
     * representations.
     * @return {string}
     */
    toFormat(dateFormat, { separator = " \u2013 " } = {}) {
      if (!this.isValid)
        return INVALID2;
      return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
    }
    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */
    toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }
      return this.e.diff(this.s, unit, opts);
    }
    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
    mapEndpoints(mapFn) {
      return _Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    }
  };

  // node_modules/luxon/src/info.js
  var Info = class {
    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    static hasDST(zone = Settings.defaultZone) {
      const proto = DateTime.now().setZone(zone).set({ month: 12 });
      return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
    }
    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */
    static isValidIANAZone(zone) {
      return IANAZone.isValidZone(zone);
    }
    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone#isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */
    static normalizeZone(input) {
      return normalizeZone(input, Settings.defaultZone);
    }
    /**
     * Get the weekday on which the week starts according to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
     */
    static getStartOfWeek({ locale = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale)).getStartOfWeek();
    }
    /**
     * Get the minimum number of days necessary in a week before it is considered part of the next year according
     * to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number}
     */
    static getMinimumDaysInFirstWeek({ locale = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale)).getMinDaysInFirstWeek();
    }
    /**
     * Get the weekdays, which are considered the weekend according to the given locale
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
     */
    static getWeekendWeekdays({ locale = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale)).getWeekendDays().slice();
    }
    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {Array}
     */
    static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    }
    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link Info#months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {Array}
     */
    static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    }
    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {Array}
     */
    static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    }
    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link Info#weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @return {Array}
     */
    static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    }
    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {Array}
     */
    static meridiems({ locale = null } = {}) {
      return Locale.create(locale).meridiems();
    }
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {Array}
     */
    static eras(length = "short", { locale = null } = {}) {
      return Locale.create(locale, null, "gregory").eras(length);
    }
    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `relative`: whether this environment supports relative time formatting
     * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
     * @example Info.features() //=> { relative: false, localeWeek: true }
     * @return {Object}
     */
    static features() {
      return { relative: hasRelative(), localeWeek: hasLocaleWeekInfo() };
    }
  };

  // node_modules/luxon/src/impl/diff.js
  function dayDiff(earlier, later) {
    const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
  }
  function highOrderDiffs(cursor, later, units) {
    const differs = [
      ["years", (a, b) => b.year - a.year],
      ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
      ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
      [
        "weeks",
        (a, b) => {
          const days = dayDiff(a, b);
          return (days - days % 7) / 7;
        }
      ],
      ["days", dayDiff]
    ];
    const results = {};
    const earlier = cursor;
    let lowestOrder, highWater;
    for (const [unit, differ] of differs) {
      if (units.indexOf(unit) >= 0) {
        lowestOrder = unit;
        results[unit] = differ(cursor, later);
        highWater = earlier.plus(results);
        if (highWater > later) {
          results[unit]--;
          cursor = earlier.plus(results);
          if (cursor > later) {
            highWater = cursor;
            results[unit]--;
            cursor = earlier.plus(results);
          }
        } else {
          cursor = highWater;
        }
      }
    }
    return [cursor, results, highWater, lowestOrder];
  }
  function diff_default(earlier, later, units, opts) {
    let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
    const remainingMillis = later - cursor;
    const lowerOrderUnits = units.filter(
      (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
    );
    if (lowerOrderUnits.length === 0) {
      if (highWater < later) {
        highWater = cursor.plus({ [lowestOrder]: 1 });
      }
      if (highWater !== cursor) {
        results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
      }
    }
    const duration = Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
      return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
    } else {
      return duration;
    }
  }

  // node_modules/luxon/src/impl/tokenParser.js
  var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
  function intUnit(regex, post = (i) => i) {
    return { regex, deser: ([s2]) => post(parseDigits(s2)) };
  }
  var NBSP = String.fromCharCode(160);
  var spaceOrNBSP = `[ ${NBSP}]`;
  var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
  function fixListRegex(s2) {
    return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
  }
  function stripInsensitivities(s2) {
    return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
  }
  function oneOf(strings, startIndex) {
    if (strings === null) {
      return null;
    } else {
      return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
      };
    }
  }
  function offset(regex, groups) {
    return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
  }
  function simple(regex) {
    return { regex, deser: ([s2]) => s2 };
  }
  function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function unitForToken(token, loc) {
    const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        case "G":
          return oneOf(loc.eras("short"), 0);
        case "GG":
          return oneOf(loc.eras("long"), 0);
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true), 1);
        case "MMMM":
          return oneOf(loc.months("long", true), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false), 1);
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        case "a":
          return oneOf(loc.meridiems(), 0);
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, untruncateYear);
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true), 1);
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal(t);
      }
    };
    const unit = unitate(token) || {
      invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
  }
  var partTypeStyleToTokenVal = {
    year: {
      "2-digit": "yy",
      numeric: "yyyyy"
    },
    month: {
      numeric: "M",
      "2-digit": "MM",
      short: "MMM",
      long: "MMMM"
    },
    day: {
      numeric: "d",
      "2-digit": "dd"
    },
    weekday: {
      short: "EEE",
      long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
      numeric: "h",
      "2-digit": "hh"
    },
    hour24: {
      numeric: "H",
      "2-digit": "HH"
    },
    minute: {
      numeric: "m",
      "2-digit": "mm"
    },
    second: {
      numeric: "s",
      "2-digit": "ss"
    },
    timeZoneName: {
      long: "ZZZZZ",
      short: "ZZZ"
    }
  };
  function tokenForPart(part, formatOpts, resolvedOpts) {
    const { type, value } = part;
    if (type === "literal") {
      const isSpace = /^\s+$/.test(value);
      return {
        literal: !isSpace,
        val: isSpace ? " " : value
      };
    }
    const style = formatOpts[type];
    let actualType = type;
    if (type === "hour") {
      if (formatOpts.hour12 != null) {
        actualType = formatOpts.hour12 ? "hour12" : "hour24";
      } else if (formatOpts.hourCycle != null) {
        if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
          actualType = "hour12";
        } else {
          actualType = "hour24";
        }
      } else {
        actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
      }
    }
    let val = partTypeStyleToTokenVal[actualType];
    if (typeof val === "object") {
      val = val[style];
    }
    if (val) {
      return {
        literal: false,
        val
      };
    }
    return void 0;
  }
  function buildRegex(units) {
    const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
    return [`^${re}$`, units];
  }
  function match(input, regex, handlers) {
    const matches = input.match(regex);
    if (matches) {
      const all = {};
      let matchIndex = 1;
      for (const i in handlers) {
        if (hasOwnProperty(handlers, i)) {
          const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
          if (!h.literal && h.token) {
            all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
          }
          matchIndex += groups;
        }
      }
      return [matches, all];
    } else {
      return [matches, {}];
    }
  }
  function dateTimeFromMatches(matches) {
    const toField = (token) => {
      switch (token) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
        case "H":
          return "hour";
        case "d":
          return "day";
        case "o":
          return "ordinal";
        case "L":
        case "M":
          return "month";
        case "y":
          return "year";
        case "E":
        case "c":
          return "weekday";
        case "W":
          return "weekNumber";
        case "k":
          return "weekYear";
        case "q":
          return "quarter";
        default:
          return null;
      }
    };
    let zone = null;
    let specificOffset;
    if (!isUndefined(matches.z)) {
      zone = IANAZone.create(matches.z);
    }
    if (!isUndefined(matches.Z)) {
      if (!zone) {
        zone = new FixedOffsetZone(matches.Z);
      }
      specificOffset = matches.Z;
    }
    if (!isUndefined(matches.q)) {
      matches.M = (matches.q - 1) * 3 + 1;
    }
    if (!isUndefined(matches.h)) {
      if (matches.h < 12 && matches.a === 1) {
        matches.h += 12;
      } else if (matches.h === 12 && matches.a === 0) {
        matches.h = 0;
      }
    }
    if (matches.G === 0 && matches.y) {
      matches.y = -matches.y;
    }
    if (!isUndefined(matches.u)) {
      matches.S = parseMillis(matches.u);
    }
    const vals = Object.keys(matches).reduce((r, k) => {
      const f = toField(k);
      if (f) {
        r[f] = matches[k];
      }
      return r;
    }, {});
    return [vals, zone, specificOffset];
  }
  var dummyDateTimeCache = null;
  function getDummyDateTime() {
    if (!dummyDateTimeCache) {
      dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    }
    return dummyDateTimeCache;
  }
  function maybeExpandMacroToken(token, locale) {
    if (token.literal) {
      return token;
    }
    const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    const tokens = formatOptsToTokens(formatOpts, locale);
    if (tokens == null || tokens.includes(void 0)) {
      return token;
    }
    return tokens;
  }
  function expandMacroTokens(tokens, locale) {
    return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
  }
  var TokenParser = class {
    constructor(locale, format) {
      this.locale = locale;
      this.format = format;
      this.tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
      this.units = this.tokens.map((t) => unitForToken(t, locale));
      this.disqualifyingUnit = this.units.find((t) => t.invalidReason);
      if (!this.disqualifyingUnit) {
        const [regexString, handlers] = buildRegex(this.units);
        this.regex = RegExp(regexString, "i");
        this.handlers = handlers;
      }
    }
    explainFromTokens(input) {
      if (!this.isValid) {
        return { input, tokens: this.tokens, invalidReason: this.invalidReason };
      } else {
        const [rawMatches, matches] = match(input, this.regex, this.handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
          throw new ConflictingSpecificationError(
            "Can't include meridiem when specifying 24-hour format"
          );
        }
        return {
          input,
          tokens: this.tokens,
          regex: this.regex,
          rawMatches,
          matches,
          result,
          zone,
          specificOffset
        };
      }
    }
    get isValid() {
      return !this.disqualifyingUnit;
    }
    get invalidReason() {
      return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
    }
  };
  function explainFromTokens(locale, input, format) {
    const parser = new TokenParser(locale, format);
    return parser.explainFromTokens(input);
  }
  function parseFromTokens(locale, input, format) {
    const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
    return [result, zone, specificOffset, invalidReason];
  }
  function formatOptsToTokens(formatOpts, locale) {
    if (!formatOpts) {
      return null;
    }
    const formatter = Formatter.create(locale, formatOpts);
    const df = formatter.dtFormatter(getDummyDateTime());
    const parts = df.formatToParts();
    const resolvedOpts = df.resolvedOptions();
    return parts.map((p) => tokenForPart(p, formatOpts, resolvedOpts));
  }

  // node_modules/luxon/src/datetime.js
  var INVALID3 = "Invalid DateTime";
  var MAX_DATE = 864e13;
  function unsupportedZone(zone) {
    return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
  }
  function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) {
      dt.weekData = gregorianToWeek(dt.c);
    }
    return dt.weekData;
  }
  function possiblyCachedLocalWeekData(dt) {
    if (dt.localWeekData === null) {
      dt.localWeekData = gregorianToWeek(
        dt.c,
        dt.loc.getMinDaysInFirstWeek(),
        dt.loc.getStartOfWeek()
      );
    }
    return dt.localWeekData;
  }
  function clone2(inst, alts) {
    const current = {
      ts: inst.ts,
      zone: inst.zone,
      c: inst.c,
      o: inst.o,
      loc: inst.loc,
      invalid: inst.invalid
    };
    return new DateTime(__spreadProps(__spreadValues(__spreadValues({}, current), alts), { old: current }));
  }
  function fixOffset(localTS, o, tz) {
    let utcGuess = localTS - o * 60 * 1e3;
    const o2 = tz.offset(utcGuess);
    if (o === o2) {
      return [utcGuess, o];
    }
    utcGuess -= (o2 - o) * 60 * 1e3;
    const o3 = tz.offset(utcGuess);
    if (o2 === o3) {
      return [utcGuess, o2];
    }
    return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
  }
  function tsToObj(ts, offset2) {
    ts += offset2 * 60 * 1e3;
    const d = new Date(ts);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      hour: d.getUTCHours(),
      minute: d.getUTCMinutes(),
      second: d.getUTCSeconds(),
      millisecond: d.getUTCMilliseconds()
    };
  }
  function objToTS(obj, offset2, zone) {
    return fixOffset(objToLocalTS(obj), offset2, zone);
  }
  function adjustTime(inst, dur) {
    const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = __spreadProps(__spreadValues({}, inst.c), {
      year,
      month,
      day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }), millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    let [ts, o] = fixOffset(localTS, oPre, inst.zone);
    if (millisToAdd !== 0) {
      ts += millisToAdd;
      o = inst.zone.offset(ts);
    }
    return { ts, o };
  }
  function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    const { setZone, zone } = opts;
    if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
      const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, __spreadProps(__spreadValues({}, opts), {
        zone: interpretationZone,
        specificOffset
      }));
      return setZone ? inst : inst.setZone(zone);
    } else {
      return DateTime.invalid(
        new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
      );
    }
  }
  function toTechFormat(dt, format, allowZ = true) {
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
      allowZ,
      forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
  }
  function toISODate(o, extended) {
    const longFormat = o.c.year > 9999 || o.c.year < 0;
    let c = "";
    if (longFormat && o.c.year >= 0)
      c += "+";
    c += padStart(o.c.year, longFormat ? 6 : 4);
    if (extended) {
      c += "-";
      c += padStart(o.c.month);
      c += "-";
      c += padStart(o.c.day);
    } else {
      c += padStart(o.c.month);
      c += padStart(o.c.day);
    }
    return c;
  }
  function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    let c = padStart(o.c.hour);
    if (extended) {
      c += ":";
      c += padStart(o.c.minute);
      if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
        c += ":";
      }
    } else {
      c += padStart(o.c.minute);
    }
    if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
      c += padStart(o.c.second);
      if (o.c.millisecond !== 0 || !suppressMilliseconds) {
        c += ".";
        c += padStart(o.c.millisecond, 3);
      }
    }
    if (includeOffset) {
      if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
        c += "Z";
      } else if (o.o < 0) {
        c += "-";
        c += padStart(Math.trunc(-o.o / 60));
        c += ":";
        c += padStart(Math.trunc(-o.o % 60));
      } else {
        c += "+";
        c += padStart(Math.trunc(o.o / 60));
        c += ":";
        c += padStart(Math.trunc(o.o % 60));
      }
    }
    if (extendedZone) {
      c += "[" + o.zone.ianaName + "]";
    }
    return c;
  }
  var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var orderedUnits2 = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
  var orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
  function normalizeUnit(unit) {
    const normalized = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  function normalizeUnitWithLocalWeeks(unit) {
    switch (unit.toLowerCase()) {
      case "localweekday":
      case "localweekdays":
        return "localWeekday";
      case "localweeknumber":
      case "localweeknumbers":
        return "localWeekNumber";
      case "localweekyear":
      case "localweekyears":
        return "localWeekYear";
      default:
        return normalizeUnit(unit);
    }
  }
  function guessOffsetForZone(zone) {
    if (!zoneOffsetGuessCache[zone]) {
      if (zoneOffsetTs === void 0) {
        zoneOffsetTs = Settings.now();
      }
      zoneOffsetGuessCache[zone] = zone.offset(zoneOffsetTs);
    }
    return zoneOffsetGuessCache[zone];
  }
  function quickDT(obj, opts) {
    const zone = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    }
    const loc = Locale.fromObject(opts);
    let ts, o;
    if (!isUndefined(obj.year)) {
      for (const u of orderedUnits2) {
        if (isUndefined(obj[u])) {
          obj[u] = defaultUnitValues[u];
        }
      }
      const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
      if (invalid) {
        return DateTime.invalid(invalid);
      }
      const offsetProvis = guessOffsetForZone(zone);
      [ts, o] = objToTS(obj, offsetProvis, zone);
    } else {
      ts = Settings.now();
    }
    return new DateTime({ ts, zone, loc, o });
  }
  function diffRelative(start, end, opts) {
    const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    }, differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else
          return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };
    if (opts.unit) {
      return format(differ(opts.unit), opts.unit);
    }
    for (const unit of opts.units) {
      const count = differ(unit);
      if (Math.abs(count) >= 1) {
        return format(count, unit);
      }
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
  }
  function lastOpts(argList) {
    let opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
      opts = argList[argList.length - 1];
      args = Array.from(argList).slice(0, argList.length - 1);
    } else {
      args = Array.from(argList);
    }
    return [opts, args];
  }
  var zoneOffsetTs;
  var zoneOffsetGuessCache = {};
  var DateTime = class _DateTime {
    /**
     * @access private
     */
    constructor(config) {
      const zone = config.zone || Settings.defaultZone;
      let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
      this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
      let c = null, o = null;
      if (!invalid) {
        const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
        if (unchanged) {
          [c, o] = [config.old.c, config.old.o];
        } else {
          const ot = isNumber(config.o) && !config.old ? config.o : zone.offset(this.ts);
          c = tsToObj(this.ts, ot);
          invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
          c = invalid ? null : c;
          o = invalid ? null : ot;
        }
      }
      this._zone = zone;
      this.loc = config.loc || Locale.create();
      this.invalid = invalid;
      this.weekData = null;
      this.localWeekData = null;
      this.c = c;
      this.o = o;
      this.isLuxonDateTime = true;
    }
    // CONSTRUCT
    /**
     * Create a DateTime for the current instant, in the system's time zone.
     *
     * Use Settings to override these default values if needed.
     * @example DateTime.now().toISO() //~> now in the ISO format
     * @return {DateTime}
     */
    static now() {
      return new _DateTime({});
    }
    /**
     * Create a local DateTime
     * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month, 1-indexed
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.local()                                  //~> now
     * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
     * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
     * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
     * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
     * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
     * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
     * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
     * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
     * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
     * @return {DateTime}
     */
    static local() {
      const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
      return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
    }
    /**
     * Create a DateTime in UTC
     * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @param {Object} options - configuration options for the DateTime
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.utc()                                              //~> now
     * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
     * @return {DateTime}
     */
    static utc() {
      const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
      opts.zone = FixedOffsetZone.utcInstance;
      return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
    }
    /**
     * Create a DateTime from a JavaScript Date object. Uses the default zone.
     * @param {Date} date - a JavaScript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */
    static fromJSDate(date, options = {}) {
      const ts = isDate(date) ? date.valueOf() : NaN;
      if (Number.isNaN(ts)) {
        return _DateTime.invalid("invalid input");
      }
      const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return _DateTime.invalid(unsupportedZone(zoneToUse));
      }
      return new _DateTime({
        ts,
        zone: zoneToUse,
        loc: Locale.fromObject(options)
      });
    }
    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromMillis(milliseconds, options = {}) {
      if (!isNumber(milliseconds)) {
        throw new InvalidArgumentError(
          `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
        );
      } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
        return _DateTime.invalid("Timestamp out of range");
      } else {
        return new _DateTime({
          ts: milliseconds,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromSeconds(seconds, options = {}) {
      if (!isNumber(seconds)) {
        throw new InvalidArgumentError("fromSeconds requires a numerical input");
      } else {
        return new _DateTime({
          ts: seconds * 1e3,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.localWeekYear - a week year, according to the locale
     * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
     * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {Object} opts - options for creating this DateTime
     * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
     * @return {DateTime}
     */
    static fromObject(obj, opts = {}) {
      obj = obj || {};
      const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return _DateTime.invalid(unsupportedZone(zoneToUse));
      }
      const loc = Locale.fromObject(opts);
      const normalized = normalizeObject(obj, normalizeUnitWithLocalWeeks);
      const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, loc);
      const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
        );
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
      let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits2;
        defaultValues = defaultUnitValues;
      }
      let foundFirst = false;
      for (const u of units) {
        const v = normalized[u];
        if (!isUndefined(v)) {
          foundFirst = true;
        } else if (foundFirst) {
          normalized[u] = defaultValues[u];
        } else {
          normalized[u] = objNow[u];
        }
      }
      const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
      if (invalid) {
        return _DateTime.invalid(invalid);
      }
      const gregorian = useWeekData ? weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new _DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc
      });
      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return _DateTime.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
        );
      }
      if (!inst.isValid) {
        return _DateTime.invalid(inst.invalid);
      }
      return inst;
    }
    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */
    static fromISO(text, opts = {}) {
      const [vals, parsedZone] = parseISODate(text);
      return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }
    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */
    static fromRFC2822(text, opts = {}) {
      const [vals, parsedZone] = parseRFC2822Date(text);
      return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }
    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */
    static fromHTTP(text, opts = {}) {
      const [vals, parsedZone] = parseHTTPDate(text);
      return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }
    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromFormat(text, fmt, opts = {}) {
      if (isUndefined(text) || isUndefined(fmt)) {
        throw new InvalidArgumentError("fromFormat requires an input string and a format");
      }
      const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
      if (invalid) {
        return _DateTime.invalid(invalid);
      } else {
        return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
      }
    }
    /**
     * @deprecated use fromFormat instead
     */
    static fromString(text, fmt, opts = {}) {
      return _DateTime.fromFormat(text, fmt, opts);
    }
    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */
    static fromSQL(text, opts = {}) {
      const [vals, parsedZone] = parseSQL(text);
      return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }
    /**
     * Create an invalid DateTime.
     * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */
    static invalid(reason, explanation = null) {
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
      }
      const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(invalid);
      } else {
        return new _DateTime({ invalid });
      }
    }
    /**
     * Check if an object is an instance of DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDateTime(o) {
      return o && o.isLuxonDateTime || false;
    }
    /**
     * Produce the format string for a set of options
     * @param formatOpts
     * @param localeOpts
     * @returns {string}
     */
    static parseFormatForOpts(formatOpts, localeOpts = {}) {
      const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
      return !tokenList ? null : tokenList.map((t) => t ? t.val : null).join("");
    }
    /**
     * Produce the the fully expanded format token for the locale
     * Does NOT quote characters, so quoted tokens will not round trip correctly
     * @param fmt
     * @param localeOpts
     * @returns {string}
     */
    static expandFormat(fmt, localeOpts = {}) {
      const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
      return expanded.map((t) => t.val).join("");
    }
    static resetCache() {
      zoneOffsetTs = void 0;
      zoneOffsetGuessCache = {};
    }
    // INFO
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    get(unit) {
      return this[unit];
    }
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
    get outputCalendar() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
    get zone() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
    get zoneName() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
    get year() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
    get quarter() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
    get month() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
    get day() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
    get hour() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
    get minute() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
    get second() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
    get millisecond() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
    get weekYear() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
    get weekNumber() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
    get weekday() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Returns true if this date is on a weekend according to the locale, false otherwise
     * @returns {boolean}
     */
    get isWeekend() {
      return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
    }
    /**
     * Get the day of the week according to the locale.
     * 1 is the first day of the week and 7 is the last day of the week.
     * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
     * @returns {number}
     */
    get localWeekday() {
      return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
    }
    /**
     * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
     * because the week can start on different days of the week (see localWeekday) and because a different number of days
     * is required for a week to count as the first week of a year.
     * @returns {number}
     */
    get localWeekNumber() {
      return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
     * differently, see localWeekNumber.
     * @returns {number}
     */
    get localWeekYear() {
      return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
    get ordinal() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
    get monthShort() {
      return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
    get monthLong() {
      return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
    get weekdayShort() {
      return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
    get weekdayLong() {
      return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
    get offset() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameShort() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameLong() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
    get isOffsetFixed() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
    get isInDST() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
      }
    }
    /**
     * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
     * in this DateTime's zone. During DST changes local time can be ambiguous, for example
     * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
     * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
     * @returns {DateTime[]}
     */
    getPossibleOffsets() {
      if (!this.isValid || this.isOffsetFixed) {
        return [this];
      }
      const dayMs = 864e5;
      const minuteMs = 6e4;
      const localTS = objToLocalTS(this.c);
      const oEarlier = this.zone.offset(localTS - dayMs);
      const oLater = this.zone.offset(localTS + dayMs);
      const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
      const o2 = this.zone.offset(localTS - oLater * minuteMs);
      if (o1 === o2) {
        return [this];
      }
      const ts1 = localTS - o1 * minuteMs;
      const ts2 = localTS - o2 * minuteMs;
      const c1 = tsToObj(ts1, o1);
      const c2 = tsToObj(ts2, o2);
      if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) {
        return [clone2(this, { ts: ts1 }), clone2(this, { ts: ts2 })];
      }
      return [this];
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
    get isInLeapYear() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
    get daysInMonth() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
    get daysInYear() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
    get weeksInWeekYear() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's local week year
     * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
     * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
     * @type {number}
     */
    get weeksInLocalWeekYear() {
      return this.isValid ? weeksInWeekYear(
        this.localWeekYear,
        this.loc.getMinDaysInFirstWeek(),
        this.loc.getStartOfWeek()
      ) : NaN;
    }
    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */
    resolvedLocaleOptions(opts = {}) {
      const { locale, numberingSystem, calendar } = Formatter.create(
        this.loc.clone(opts),
        opts
      ).resolvedOptions(this);
      return { locale, numberingSystem, outputCalendar: calendar };
    }
    // TRANSFORM
    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link DateTime#setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */
    toUTC(offset2 = 0, opts = {}) {
      return this.setZone(FixedOffsetZone.instance(offset2), opts);
    }
    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */
    toLocal() {
      return this.setZone(Settings.defaultZone);
    }
    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */
    setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
      zone = normalizeZone(zone, Settings.defaultZone);
      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return _DateTime.invalid(unsupportedZone(zone));
      } else {
        let newTS = this.ts;
        if (keepLocalTime || keepCalendarTime) {
          const offsetGuess = zone.offset(this.ts);
          const asObj = this.toObject();
          [newTS] = objToTS(asObj, offsetGuess, zone);
        }
        return clone2(this, { ts: newTS, zone });
      }
    }
    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */
    reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
      const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
      return clone2(this, { loc });
    }
    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */
    setLocale(locale) {
      return this.reconfigure({ locale });
    }
    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
     *
     * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
     * They cannot be mixed with ISO-week units like `weekday`.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */
    set(values) {
      if (!this.isValid)
        return this;
      const normalized = normalizeObject(values, normalizeUnitWithLocalWeeks);
      const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, this.loc);
      const settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
        );
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      let mixed;
      if (settingWeekStuff) {
        mixed = weekToGregorian(
          __spreadValues(__spreadValues({}, gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek)), normalized),
          minDaysInFirstWeek,
          startOfWeek
        );
      } else if (!isUndefined(normalized.ordinal)) {
        mixed = ordinalToGregorian(__spreadValues(__spreadValues({}, gregorianToOrdinal(this.c)), normalized));
      } else {
        mixed = __spreadValues(__spreadValues({}, this.toObject()), normalized);
        if (isUndefined(normalized.day)) {
          mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }
      const [ts, o] = objToTS(mixed, this.o, this.zone);
      return clone2(this, { ts, o });
    }
    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.now().plus(123) //~> in 123 milliseconds
     * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     * @return {DateTime}
     */
    plus(duration) {
      if (!this.isValid)
        return this;
      const dur = Duration.fromDurationLike(duration);
      return clone2(this, adjustTime(this, dur));
    }
    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link DateTime#plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
     */
    minus(duration) {
      if (!this.isValid)
        return this;
      const dur = Duration.fromDurationLike(duration).negate();
      return clone2(this, adjustTime(this, dur));
    }
    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */
    startOf(unit, { useLocaleWeeks = false } = {}) {
      if (!this.isValid)
        return this;
      const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case "years":
          o.month = 1;
        case "quarters":
        case "months":
          o.day = 1;
        case "weeks":
        case "days":
          o.hour = 0;
        case "hours":
          o.minute = 0;
        case "minutes":
          o.second = 0;
        case "seconds":
          o.millisecond = 0;
          break;
        case "milliseconds":
          break;
      }
      if (normalizedUnit === "weeks") {
        if (useLocaleWeeks) {
          const startOfWeek = this.loc.getStartOfWeek();
          const { weekday } = this;
          if (weekday < startOfWeek) {
            o.weekNumber = this.weekNumber - 1;
          }
          o.weekday = startOfWeek;
        } else {
          o.weekday = 1;
        }
      }
      if (normalizedUnit === "quarters") {
        const q = Math.ceil(this.month / 3);
        o.month = (q - 1) * 3 + 1;
      }
      return this.set(o);
    }
    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */
    endOf(unit, opts) {
      return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit, opts).minus(1) : this;
    }
    // OUTPUT
    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */
    toFormat(fmt, opts = {}) {
      return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID3;
    }
    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
     * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
     * @return {string}
     */
    toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
      return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID3;
    }
    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.now().toLocaleParts(); //=> [
     *                                   //=>   { type: 'day', value: '25' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'month', value: '05' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'year', value: '1982' }
     *                                   //=> ]
     */
    toLocaleParts(opts = {}) {
      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     * @return {string}
     */
    toISO({
      format = "extended",
      suppressSeconds = false,
      suppressMilliseconds = false,
      includeOffset = true,
      extendedZone = false
    } = {}) {
      if (!this.isValid) {
        return null;
      }
      const ext = format === "extended";
      let c = toISODate(this, ext);
      c += "T";
      c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
      return c;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @param {Object} opts - options
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     * @return {string}
     */
    toISODate({ format = "extended" } = {}) {
      if (!this.isValid) {
        return null;
      }
      return toISODate(this, format === "extended");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */
    toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     * @return {string}
     */
    toISOTime({
      suppressMilliseconds = false,
      suppressSeconds = false,
      includeOffset = true,
      includePrefix = false,
      extendedZone = false,
      format = "extended"
    } = {}) {
      if (!this.isValid) {
        return null;
      }
      let c = includePrefix ? "T" : "";
      return c + toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      );
    }
    /**
     * Returns an RFC 2822-compatible string representation of this DateTime
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */
    toRFC2822() {
      return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */
    toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string}
     */
    toSQLDate() {
      if (!this.isValid) {
        return null;
      }
      return toISODate(this, true);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */
    toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
      let fmt = "HH:mm:ss.SSS";
      if (includeZone || includeOffset) {
        if (includeOffsetSpace) {
          fmt += " ";
        }
        if (includeZone) {
          fmt += "z";
        } else if (includeOffset) {
          fmt += "ZZ";
        }
      }
      return toTechFormat(this, fmt, true);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */
    toSQL(opts = {}) {
      if (!this.isValid) {
        return null;
      }
      return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
    }
    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */
    toString() {
      return this.isValid ? this.toISO() : INVALID3;
    }
    /**
     * Returns a string representation of this DateTime appropriate for the REPL.
     * @return {string}
     */
    [Symbol.for("nodejs.util.inspect.custom")]() {
      if (this.isValid) {
        return `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`;
      } else {
        return `DateTime { Invalid, reason: ${this.invalidReason} }`;
      }
    }
    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */
    toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    /**
     * Returns the epoch seconds of this DateTime.
     * @return {number}
     */
    toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
    /**
     * Returns the epoch seconds (as a whole number) of this DateTime.
     * @return {number}
     */
    toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */
    toBSON() {
      return this.toJSDate();
    }
    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */
    toObject(opts = {}) {
      if (!this.isValid)
        return {};
      const base = __spreadValues({}, this.c);
      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }
    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     * @return {Date}
     */
    toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
    // COMPARE
    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */
    diff(otherDateTime, unit = "milliseconds", opts = {}) {
      if (!this.isValid || !otherDateTime.isValid) {
        return Duration.invalid("created by diffing an invalid DateTime");
      }
      const durOpts = __spreadValues({ locale: this.locale, numberingSystem: this.numberingSystem }, opts);
      const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff_default(earlier, later, units, durOpts);
      return otherIsLater ? diffed.negate() : diffed;
    }
    /**
     * Return the difference between this DateTime and right now.
     * See {@link DateTime#diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    diffNow(unit = "milliseconds", opts = {}) {
      return this.diff(_DateTime.now(), unit, opts);
    }
    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval}
     */
    until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }
    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
     * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     * @return {boolean}
     */
    hasSame(otherDateTime, unit, opts) {
      if (!this.isValid)
        return false;
      const inputMs = otherDateTime.valueOf();
      const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
      return adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts);
    }
    /**
     * Equality check
     * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */
    equals(other) {
      return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }
    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeTimeFormat. Rounds down by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
    toRelative(options = {}) {
      if (!this.isValid)
        return null;
      const base = options.base || _DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
      let units = ["years", "months", "days", "hours", "minutes", "seconds"];
      let unit = options.unit;
      if (Array.isArray(options.unit)) {
        units = options.unit;
        unit = void 0;
      }
      return diffRelative(base, this.plus(padding), __spreadProps(__spreadValues({}, options), {
        numeric: "always",
        units,
        unit
      }));
    }
    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
    toRelativeCalendar(options = {}) {
      if (!this.isValid)
        return null;
      return diffRelative(options.base || _DateTime.fromObject({}, { zone: this.zone }), this, __spreadProps(__spreadValues({}, options), {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: true
      }));
    }
    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */
    static min(...dateTimes) {
      if (!dateTimes.every(_DateTime.isDateTime)) {
        throw new InvalidArgumentError("min requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
    }
    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */
    static max(...dateTimes) {
      if (!dateTimes.every(_DateTime.isDateTime)) {
        throw new InvalidArgumentError("max requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
    }
    // MISC
    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */
    static fromFormatExplain(text, fmt, options = {}) {
      const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      });
      return explainFromTokens(localeToUse, text, fmt);
    }
    /**
     * @deprecated use fromFormatExplain instead
     */
    static fromStringExplain(text, fmt, options = {}) {
      return _DateTime.fromFormatExplain(text, fmt, options);
    }
    /**
     * Build a parser for `fmt` using the given locale. This parser can be passed
     * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
     * can be used to optimize cases where many dates need to be parsed in a
     * specific format.
     *
     * @param {String} fmt - the format the string is expected to be in (see
     * description)
     * @param {Object} options - options used to set locale and numberingSystem
     * for parser
     * @returns {TokenParser} - opaque object to be used
     */
    static buildFormatParser(fmt, options = {}) {
      const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      });
      return new TokenParser(localeToUse, fmt);
    }
    /**
     * Create a DateTime from an input string and format parser.
     *
     * The format parser must have been created with the same locale as this call.
     *
     * @param {String} text - the string to parse
     * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
     * @param {Object} opts - options taken by fromFormat()
     * @returns {DateTime}
     */
    static fromFormatParser(text, formatParser, opts = {}) {
      if (isUndefined(text) || isUndefined(formatParser)) {
        throw new InvalidArgumentError(
          "fromFormatParser requires an input string and a format parser"
        );
      }
      const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      });
      if (!localeToUse.equals(formatParser.locale)) {
        throw new InvalidArgumentError(
          `fromFormatParser called with a locale of ${localeToUse}, but the format parser was created for ${formatParser.locale}`
        );
      }
      const { result, zone, specificOffset, invalidReason } = formatParser.explainFromTokens(text);
      if (invalidReason) {
        return _DateTime.invalid(invalidReason);
      } else {
        return parseDataToDateTime(
          result,
          zone,
          opts,
          `format ${formatParser.format}`,
          text,
          specificOffset
        );
      }
    }
    // FORMAT PRESETS
    /**
     * {@link DateTime#toLocaleString} format like 10/14/1983
     * @type {Object}
     */
    static get DATE_SHORT() {
      return DATE_SHORT;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED() {
      return DATE_MED;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED_WITH_WEEKDAY() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
    static get DATE_FULL() {
      return DATE_FULL;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
    static get DATE_HUGE() {
      return DATE_HUGE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_SIMPLE() {
      return TIME_SIMPLE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SECONDS() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SHORT_OFFSET() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_LONG_OFFSET() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_SIMPLE() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SECONDS() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SHORT_OFFSET() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_LONG_OFFSET() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT() {
      return DATETIME_SHORT;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT_WITH_SECONDS() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED() {
      return DATETIME_MED;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_SECONDS() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_WEEKDAY() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL() {
      return DATETIME_FULL;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL_WITH_SECONDS() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE() {
      return DATETIME_HUGE;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE_WITH_SECONDS() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  };
  function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) {
      return dateTimeish;
    } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
      return DateTime.fromJSDate(dateTimeish);
    } else if (dateTimeish && typeof dateTimeish === "object") {
      return DateTime.fromObject(dateTimeish);
    } else {
      throw new InvalidArgumentError(
        `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
      );
    }
  }

  // js/src/util/functions.js
  var outerHeightTrue = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.height;
  };
  var getElementHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.querySelector("html").setAttribute("style", `--vh:${vh}px;`);
    const mh = window.innerHeight - outerHeightTrue(document.querySelector("header")) - outerHeightTrue(document.querySelector("footer"));
    document.querySelector("main").setAttribute("style", `--mh:${mh}px;`);
  };
  getElementHeight();
  window.onresize = getElementHeight;
  var getParents = (el) => {
    const parents = [];
    let node = el;
    while (node != document) {
      parents.push(node.parentNode);
      node = node.parentNode;
    }
    return parents;
  };
  var escapeId = (el) => el.replace(/[.]/g, "\\$&");
  var convertEventTimeToLocal = document.querySelectorAll(".convert-utc-to-local");
  convertEventTimeToLocal.forEach((el) => {
    const timeIncludeBreak = el.getAttribute("data-event-include-break");
    const timeOccurrence = el.getAttribute("data-event-occurrence");
    const definedDate = DateTime.fromISO(el.getAttribute("data-event-utc"));
    let timeIncludeBreakText;
    let timeOccurrenceText;
    if (timeIncludeBreak == "true") {
      timeIncludeBreakText = "<br />";
    } else if (timeOccurrence == "-2" && definedDate <= DateTime.utc().toISO()) {
      timeIncludeBreakText = " ";
    } else {
      timeIncludeBreakText = "at ";
    }
    switch (timeOccurrence) {
      case "0":
        timeOccurrenceText = `Every ${definedDate.toLocal().toFormat("cccc")} ${timeIncludeBreakText}`;
        break;
      case "1":
        timeOccurrenceText = `First ${definedDate.toLocal().toFormat("cccc")} of Every Month ${timeIncludeBreakText}`;
        break;
      case "-1":
        timeOccurrenceText = `${definedDate.toLocal().toFormat("cccc, dd LLL yyyy")}${timeIncludeBreakText}`;
        break;
      case "-2":
        timeOccurrenceText = `${definedDate.toLocal().toFormat("cccc, dd LLL yyyy")} ${timeIncludeBreakText}`;
        break;
      default:
        timeOccurrenceText = "";
    }
    if (timeOccurrence) {
      if (timeOccurrence == "-2" && definedDate <= DateTime.utc().toISO()) {
        el.innerHTML = `Webinar Replay from${timeIncludeBreakText}${definedDate.toLocal().toFormat("cccc, dd LLL yyyy")}`;
      } else {
        el.innerHTML = `${timeOccurrenceText}${definedDate.toLocal().toFormat("h:mm a ZZZZ")} / ${definedDate.toUTC().toFormat("h:mm a ZZZZ")}`;
      }
      return;
    }
    el.innerHTML = `${definedDate.toLocal().toFormat("cccc, dd LLL yyyy ")}${timeIncludeBreakText}${definedDate.toLocal().toFormat("h:mm a ZZZZ")} / ${definedDate.toUTC().toFormat("h:mm a ZZZZ")}`;
  });
  var syncScroll = (el1, el2) => {
    el1.scrollLeft = el2.scrollLeft;
  };
  var deploymentMethods = document.querySelectorAll("[data-deployment-method]");
  var deploymentMethodHash = window.location.hash.toString().toLowerCase().substring(1);
  var deploymentMethodHashArray = [];
  deploymentMethods.forEach((el) => {
    const deploymentMethod = el.getAttribute("data-deployment-method");
    if (!deploymentMethodHashArray.includes(deploymentMethod)) {
      deploymentMethodHashArray.push(deploymentMethod);
    }
    el.addEventListener("click", () => {
      document.cookie = `deployment_method=${deploymentMethod}; path=/`;
    }, false);
  });
  if (deploymentMethodHashArray.includes(deploymentMethodHash)) {
    document.cookie = `deployment_method=${deploymentMethodHash}; path=/`;
  }

  // js/src/collapse-nested.js
  (() => {
    const nestedCollapseLocation = () => {
      if (location.hash) {
        const el = document.querySelector(escapeId(location.hash));
        if (el) {
          const elScroll = el;
          const collapseParents = getParents(el).filter((el2) => el2 != document && el2.classList.contains("collapse"));
          if (collapseParents.length == 0 && el.classList.contains("collapse")) {
            collapseParents.push(el);
          }
          collapseParents.reverse().forEach((el2, idx, array) => {
            el2 = document.getElementById(escapeId(el2.id));
            const collapseParentContainer = bootstrap.Collapse.getOrCreateInstance(el2, { toggle: false });
            collapseParentContainer.show();
            el2.addEventListener("shown.bs.collapse", (e) => {
              e.stopImmediatePropagation();
              if (idx === array.length - 1) {
                elScroll.scrollIntoView();
              }
            });
          });
        }
      }
    };
    const nestedTabLocation = () => {
      if (location.hash) {
        const el = document.querySelector(`[data-bs-toggle="tab"][href="${escapeId(location.hash)}"]`);
        if (el) {
          const elScroll = el;
          const tabParents = getParents(el).filter((el2) => el2 != document && el2.classList.contains("tab-pane"));
          tabParents.push(el);
          tabParents.reverse().forEach((el2, idx, array) => {
            if (!el2.id.includes("-tab")) {
              el2 = document.getElementById(`${escapeId(el2.id)}-tab`);
            }
            const tabParentContainer = bootstrap.Tab.getOrCreateInstance(el2, { toggle: false });
            tabParentContainer.show();
            el2.addEventListener("shown.bs.tab", (e) => {
              e.stopImmediatePropagation();
              if (idx === array.length - 1) {
                elScroll.scrollIntoView();
              }
            });
          });
        }
      }
    };
    nestedCollapseLocation();
    nestedTabLocation();
    window.addEventListener("hashchange", nestedCollapseLocation, false);
    window.addEventListener("hashchange", nestedTabLocation, false);
    const btnCollapseTarget = document.querySelectorAll(".btn-collapse-target");
    if (btnCollapseTarget) {
      btnCollapseTarget.forEach((el) => {
        el.addEventListener("click", () => {
          const collapseTarget = document.querySelector(el.getAttribute("data-collapse-target"));
          const collapseTargetContainer = bootstrap.Collapse.getOrCreateInstance(collapseTarget, { toggle: false });
          collapseTargetContainer.show();
        }, false);
      });
    }
    const changeHash = (el) => {
      el.addEventListener("click", (e) => {
        history.pushState(null, null, e.target.hash);
      });
    };
    document.querySelectorAll('[data-bs-toggle="tab"]:not(.d-hash-none)').forEach((el) => changeHash(el));
    document.querySelectorAll('[data-bs-toggle="collapse"]:not(.d-hash-none)').forEach((el) => changeHash(el));
  })();

  // js/src/markdown.js
  (() => {
    const taskListItems = document.querySelectorAll('.task-list-item [type="checkbox"]');
    if (taskListItems) {
      taskListItems.forEach((el) => {
        el.classList.add("form-check-input");
        el.outerHTML = `<div class="form-check">${el.outerHTML}<label class="form-check-label"></label></div>`;
      });
    }
  })();

  // js/src/anchors.js
  var import_anchor_js = __toESM(require_anchor());
  window.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".anchorjs-container")) {
      for (const li of document.querySelectorAll("li")) {
        const firstChild = li.firstChild;
        const isTaskListItem = li.classList.contains("task-list-item");
        let targetElement;
        if (isTaskListItem) {
          targetElement = firstChild.nextElementSibling;
        } else {
          targetElement = firstChild;
        }
        switch (targetElement.nodeName) {
          case "STRONG":
          case "CODE":
            targetElement.classList.add("d-anchor");
            break;
          default:
            break;
        }
      }
      const anchors = new import_anchor_js.default();
      anchors.options.placement = "left";
      anchors.add(".anchorjs-container h2:not(.d-anchor-none), .anchorjs-container h3:not(.d-anchor-none), .anchorjs-container h4:not(.d-anchor-none), .anchorjs-container h5:not(.d-anchor-none), .anchorjs-container h6:not(.d-anchor-none), .anchorjs-container li .d-anchor");
    }
  });

  // js/src/placeholders.js
  (() => {
    const placeholderContainers = document.querySelectorAll(".placeholder-container");
    if (placeholderContainers) {
      placeholderContainers.forEach((el) => {
        const placeholderImg = el.querySelector("div:first-child");
        const placeholderBg = el.querySelector("div:last-child");
        const bgColor = [
          "bg-primary",
          "bg-primary",
          "bg-success",
          "bg-success",
          "bg-danger",
          "bg-purple"
        ];
        const bgImg = [
          "bg-sun-tornado",
          "bg-liquid-cheese",
          "bg-wintery-sunburst",
          "bg-bullseye-gradient",
          "bg-geometric-intersection",
          "bg-cornered-stairs"
        ];
        placeholderBg.classList.add(bgColor[~~(Math.random() * bgColor.length)]);
        placeholderImg.classList.add(bgImg[~~(Math.random() * bgImg.length)]);
      });
    }
  })();

  // js/src/sticky-table.js
  (() => {
    const scrollStickyTable = document.querySelector(".table-sticky");
    const scrollStickyTableHeader = document.querySelector(".table-sticky-header");
    if (scrollStickyTable) {
      scrollStickyTable.addEventListener("scroll", () => syncScroll(scrollStickyTableHeader, scrollStickyTable));
      scrollStickyTableHeader.addEventListener("scroll", () => syncScroll(scrollStickyTable, scrollStickyTableHeader));
    }
  })();

  // js/src/substrings.js
  (() => {
    document.querySelectorAll("[data-substring]").forEach((el) => {
      const subStringLength = parseInt(el.getAttribute("data-substring")) - 1;
      if (el.innerText.length > subStringLength) {
        const subString = el.innerText.substring(0, subStringLength);
        const subStringLink = el.getAttribute("data-link");
        if (typeof subStringLink !== "undefined" && subStringLink !== false) {
          el.innerHTML = `${subString}<a href="${subStringLink}"><strong>...</strong></a>`;
          return;
        }
        el.innerHTML = `${subString}...`;
      }
    });
  })();

  // js/src/ts/tables.ts
  (() => {
    const table = document.querySelectorAll("table");
    if (table) {
      table.forEach((el) => {
        el.classList.add("table", "table-bordered", "table-striped");
        el.outerHTML = `<div class="table-responsive">${el.outerHTML}</div>`;
      });
    }
  })();

  // js/src/theme-toggle.js
  (() => {
    const themeDropdownContainers = document.querySelectorAll(".dropdown-theme");
    themeDropdownContainers.forEach((dropdownContainer) => {
      dropdownContainer.querySelectorAll(".dropdown-toggle").forEach((el) => {
        el.addEventListener("hide.bs.dropdown", () => {
          document.querySelectorAll("main").forEach((main) => {
            main.classList.remove("z-0");
          });
        });
        el.addEventListener("show.bs.dropdown", () => {
          document.querySelectorAll("main").forEach((main) => {
            main.classList.add("z-0");
          });
        });
      });
    });
  })();
})();
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
/*! Bundled license information:

bootstrap/dist/js/bootstrap.bundle.min.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
