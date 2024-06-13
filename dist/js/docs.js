/*!
  * choco-theme v0.7.3 (https://github.com/chocolatey/choco-theme#readme)
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
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // js/src/lib/prism.min.js
  var require_prism_min = __commonJS({
    "js/src/lib/prism.min.js"(exports, module) {
      var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(e2) {
        var n3 = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t2 = 0, r2 = {}, a2 = { manual: e2.Prism && e2.Prism.manual, disableWorkerMessageHandler: e2.Prism && e2.Prism.disableWorkerMessageHandler, util: { encode: function e3(n4) {
          return n4 instanceof i2 ? new i2(n4.type, e3(n4.content), n4.alias) : Array.isArray(n4) ? n4.map(e3) : n4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }, type: function(e3) {
          return Object.prototype.toString.call(e3).slice(8, -1);
        }, objId: function(e3) {
          return e3.__id || Object.defineProperty(e3, "__id", { value: ++t2 }), e3.__id;
        }, clone: function e3(n4, t3) {
          var r3, i3;
          switch (t3 = t3 || {}, a2.util.type(n4)) {
            case "Object":
              if (i3 = a2.util.objId(n4), t3[i3])
                return t3[i3];
              for (var l4 in r3 = {}, t3[i3] = r3, n4)
                n4.hasOwnProperty(l4) && (r3[l4] = e3(n4[l4], t3));
              return r3;
            case "Array":
              return i3 = a2.util.objId(n4), t3[i3] ? t3[i3] : (r3 = [], t3[i3] = r3, n4.forEach(function(n5, a3) {
                r3[a3] = e3(n5, t3);
              }), r3);
            default:
              return n4;
          }
        }, getLanguage: function(e3) {
          for (; e3; ) {
            var t3 = n3.exec(e3.className);
            if (t3)
              return t3[1].toLowerCase();
            e3 = e3.parentElement;
          }
          return "none";
        }, setLanguage: function(e3, t3) {
          e3.className = e3.className.replace(RegExp(n3, "gi"), ""), e3.classList.add("language-" + t3);
        }, currentScript: function() {
          if ("undefined" == typeof document)
            return null;
          if ("currentScript" in document)
            return document.currentScript;
          try {
            throw new Error();
          } catch (r3) {
            var e3 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r3.stack) || [])[1];
            if (e3) {
              var n4 = document.getElementsByTagName("script");
              for (var t3 in n4)
                if (n4[t3].src == e3)
                  return n4[t3];
            }
            return null;
          }
        }, isActive: function(e3, n4, t3) {
          for (var r3 = "no-" + n4; e3; ) {
            var a3 = e3.classList;
            if (a3.contains(n4))
              return true;
            if (a3.contains(r3))
              return false;
            e3 = e3.parentElement;
          }
          return !!t3;
        } }, languages: { plain: r2, plaintext: r2, text: r2, txt: r2, extend: function(e3, n4) {
          var t3 = a2.util.clone(a2.languages[e3]);
          for (var r3 in n4)
            t3[r3] = n4[r3];
          return t3;
        }, insertBefore: function(e3, n4, t3, r3) {
          var i3 = (r3 = r3 || a2.languages)[e3], l4 = {};
          for (var o3 in i3)
            if (i3.hasOwnProperty(o3)) {
              if (o3 == n4)
                for (var s4 in t3)
                  t3.hasOwnProperty(s4) && (l4[s4] = t3[s4]);
              t3.hasOwnProperty(o3) || (l4[o3] = i3[o3]);
            }
          var u3 = r3[e3];
          return r3[e3] = l4, a2.languages.DFS(a2.languages, function(n5, t4) {
            t4 === u3 && n5 != e3 && (this[n5] = l4);
          }), l4;
        }, DFS: function e3(n4, t3, r3, i3) {
          i3 = i3 || {};
          var l4 = a2.util.objId;
          for (var o3 in n4)
            if (n4.hasOwnProperty(o3)) {
              t3.call(n4, o3, n4[o3], r3 || o3);
              var s4 = n4[o3], u3 = a2.util.type(s4);
              "Object" !== u3 || i3[l4(s4)] ? "Array" !== u3 || i3[l4(s4)] || (i3[l4(s4)] = true, e3(s4, t3, o3, i3)) : (i3[l4(s4)] = true, e3(s4, t3, null, i3));
            }
        } }, plugins: {}, highlightAll: function(e3, n4) {
          a2.highlightAllUnder(document, e3, n4);
        }, highlightAllUnder: function(e3, n4, t3) {
          var r3 = { callback: t3, container: e3, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
          a2.hooks.run("before-highlightall", r3), r3.elements = Array.prototype.slice.apply(r3.container.querySelectorAll(r3.selector)), a2.hooks.run("before-all-elements-highlight", r3);
          for (var i3, l4 = 0; i3 = r3.elements[l4++]; )
            a2.highlightElement(i3, true === n4, r3.callback);
        }, highlightElement: function(n4, t3, r3) {
          var i3 = a2.util.getLanguage(n4), l4 = a2.languages[i3];
          a2.util.setLanguage(n4, i3);
          var o3 = n4.parentElement;
          o3 && "pre" === o3.nodeName.toLowerCase() && a2.util.setLanguage(o3, i3);
          var s4 = { element: n4, language: i3, grammar: l4, code: n4.textContent };
          function u3(e3) {
            s4.highlightedCode = e3, a2.hooks.run("before-insert", s4), s4.element.innerHTML = s4.highlightedCode, a2.hooks.run("after-highlight", s4), a2.hooks.run("complete", s4), r3 && r3.call(s4.element);
          }
          if (a2.hooks.run("before-sanity-check", s4), (o3 = s4.element.parentElement) && "pre" === o3.nodeName.toLowerCase() && !o3.hasAttribute("tabindex") && o3.setAttribute("tabindex", "0"), !s4.code)
            return a2.hooks.run("complete", s4), void (r3 && r3.call(s4.element));
          if (a2.hooks.run("before-highlight", s4), s4.grammar)
            if (t3 && e2.Worker) {
              var c3 = new Worker(a2.filename);
              c3.onmessage = function(e3) {
                u3(e3.data);
              }, c3.postMessage(JSON.stringify({ language: s4.language, code: s4.code, immediateClose: true }));
            } else
              u3(a2.highlight(s4.code, s4.grammar, s4.language));
          else
            u3(a2.util.encode(s4.code));
        }, highlight: function(e3, n4, t3) {
          var r3 = { code: e3, grammar: n4, language: t3 };
          if (a2.hooks.run("before-tokenize", r3), !r3.grammar)
            throw new Error('The language "' + r3.language + '" has no grammar.');
          return r3.tokens = a2.tokenize(r3.code, r3.grammar), a2.hooks.run("after-tokenize", r3), i2.stringify(a2.util.encode(r3.tokens), r3.language);
        }, tokenize: function(e3, n4) {
          var t3 = n4.rest;
          if (t3) {
            for (var r3 in t3)
              n4[r3] = t3[r3];
            delete n4.rest;
          }
          var a3 = new s3();
          return u2(a3, a3.head, e3), o2(e3, a3, n4, a3.head, 0), function(e4) {
            for (var n5 = [], t4 = e4.head.next; t4 !== e4.tail; )
              n5.push(t4.value), t4 = t4.next;
            return n5;
          }(a3);
        }, hooks: { all: {}, add: function(e3, n4) {
          var t3 = a2.hooks.all;
          t3[e3] = t3[e3] || [], t3[e3].push(n4);
        }, run: function(e3, n4) {
          var t3 = a2.hooks.all[e3];
          if (t3 && t3.length)
            for (var r3, i3 = 0; r3 = t3[i3++]; )
              r3(n4);
        } }, Token: i2 };
        function i2(e3, n4, t3, r3) {
          this.type = e3, this.content = n4, this.alias = t3, this.length = 0 | (r3 || "").length;
        }
        function l3(e3, n4, t3, r3) {
          e3.lastIndex = n4;
          var a3 = e3.exec(t3);
          if (a3 && r3 && a3[1]) {
            var i3 = a3[1].length;
            a3.index += i3, a3[0] = a3[0].slice(i3);
          }
          return a3;
        }
        function o2(e3, n4, t3, r3, s4, g3) {
          for (var f3 in t3)
            if (t3.hasOwnProperty(f3) && t3[f3]) {
              var h3 = t3[f3];
              h3 = Array.isArray(h3) ? h3 : [h3];
              for (var d2 = 0; d2 < h3.length; ++d2) {
                if (g3 && g3.cause == f3 + "," + d2)
                  return;
                var v2 = h3[d2], p2 = v2.inside, m2 = !!v2.lookbehind, y2 = !!v2.greedy, k2 = v2.alias;
                if (y2 && !v2.pattern.global) {
                  var x2 = v2.pattern.toString().match(/[imsuy]*$/)[0];
                  v2.pattern = RegExp(v2.pattern.source, x2 + "g");
                }
                for (var b2 = v2.pattern || v2, w2 = r3.next, A2 = s4; w2 !== n4.tail && !(g3 && A2 >= g3.reach); A2 += w2.value.length, w2 = w2.next) {
                  var E2 = w2.value;
                  if (n4.length > e3.length)
                    return;
                  if (!(E2 instanceof i2)) {
                    var P2, L2 = 1;
                    if (y2) {
                      if (!(P2 = l3(b2, A2, e3, m2)) || P2.index >= e3.length)
                        break;
                      var S2 = P2.index, O2 = P2.index + P2[0].length, j2 = A2;
                      for (j2 += w2.value.length; S2 >= j2; )
                        j2 += (w2 = w2.next).value.length;
                      if (A2 = j2 -= w2.value.length, w2.value instanceof i2)
                        continue;
                      for (var C2 = w2; C2 !== n4.tail && (j2 < O2 || "string" == typeof C2.value); C2 = C2.next)
                        L2++, j2 += C2.value.length;
                      L2--, E2 = e3.slice(A2, j2), P2.index -= A2;
                    } else if (!(P2 = l3(b2, 0, E2, m2)))
                      continue;
                    S2 = P2.index;
                    var N2 = P2[0], _2 = E2.slice(0, S2), M2 = E2.slice(S2 + N2.length), W2 = A2 + E2.length;
                    g3 && W2 > g3.reach && (g3.reach = W2);
                    var z2 = w2.prev;
                    if (_2 && (z2 = u2(n4, z2, _2), A2 += _2.length), c2(n4, z2, L2), w2 = u2(n4, z2, new i2(f3, p2 ? a2.tokenize(N2, p2) : N2, k2, N2)), M2 && u2(n4, w2, M2), L2 > 1) {
                      var I2 = { cause: f3 + "," + d2, reach: W2 };
                      o2(e3, n4, t3, w2.prev, A2, I2), g3 && I2.reach > g3.reach && (g3.reach = I2.reach);
                    }
                  }
                }
              }
            }
        }
        function s3() {
          var e3 = { value: null, prev: null, next: null }, n4 = { value: null, prev: e3, next: null };
          e3.next = n4, this.head = e3, this.tail = n4, this.length = 0;
        }
        function u2(e3, n4, t3) {
          var r3 = n4.next, a3 = { value: t3, prev: n4, next: r3 };
          return n4.next = a3, r3.prev = a3, e3.length++, a3;
        }
        function c2(e3, n4, t3) {
          for (var r3 = n4.next, a3 = 0; a3 < t3 && r3 !== e3.tail; a3++)
            r3 = r3.next;
          n4.next = r3, r3.prev = n4, e3.length -= a3;
        }
        if (e2.Prism = a2, i2.stringify = function e3(n4, t3) {
          if ("string" == typeof n4)
            return n4;
          if (Array.isArray(n4)) {
            var r3 = "";
            return n4.forEach(function(n5) {
              r3 += e3(n5, t3);
            }), r3;
          }
          var i3 = { type: n4.type, content: e3(n4.content, t3), tag: "span", classes: ["token", n4.type], attributes: {}, language: t3 }, l4 = n4.alias;
          l4 && (Array.isArray(l4) ? Array.prototype.push.apply(i3.classes, l4) : i3.classes.push(l4)), a2.hooks.run("wrap", i3);
          var o3 = "";
          for (var s4 in i3.attributes)
            o3 += " " + s4 + '="' + (i3.attributes[s4] || "").replace(/"/g, "&quot;") + '"';
          return "<" + i3.tag + ' class="' + i3.classes.join(" ") + '"' + o3 + ">" + i3.content + "</" + i3.tag + ">";
        }, !e2.document)
          return e2.addEventListener ? (a2.disableWorkerMessageHandler || e2.addEventListener("message", function(n4) {
            var t3 = JSON.parse(n4.data), r3 = t3.language, i3 = t3.code, l4 = t3.immediateClose;
            e2.postMessage(a2.highlight(i3, a2.languages[r3], r3)), l4 && e2.close();
          }, false), a2) : a2;
        var g2 = a2.util.currentScript();
        function f2() {
          a2.manual || a2.highlightAll();
        }
        if (g2 && (a2.filename = g2.src, g2.hasAttribute("data-manual") && (a2.manual = true)), !a2.manual) {
          var h2 = document.readyState;
          "loading" === h2 || "interactive" === h2 && g2 && g2.defer ? document.addEventListener("DOMContentLoaded", f2) : window.requestAnimationFrame ? window.requestAnimationFrame(f2) : window.setTimeout(f2, 16);
        }
        return a2;
      }(_self);
      "undefined" != typeof module && module.exports && (module.exports = Prism2), "undefined" != typeof global && (global.Prism = Prism2);
      Prism2.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism2.languages.markup.tag.inside["attr-value"].inside.entity = Prism2.languages.markup.entity, Prism2.languages.markup.doctype.inside["internal-subset"].inside = Prism2.languages.markup, Prism2.hooks.add("wrap", function(a2) {
        "entity" === a2.type && (a2.attributes.title = a2.content.replace(/&amp;/, "&"));
      }), Object.defineProperty(Prism2.languages.markup.tag, "addInlined", { value: function(a2, e2) {
        var s3 = {};
        s3["language-" + e2] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism2.languages[e2] }, s3.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t2 = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s3 } };
        t2["language-" + e2] = { pattern: /[\s\S]+/, inside: Prism2.languages[e2] };
        var n3 = {};
        n3[a2] = { pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
          return a2;
        }), "i"), lookbehind: true, greedy: true, inside: t2 }, Prism2.languages.insertBefore("markup", "cdata", n3);
      } }), Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", { value: function(a2, e2) {
        Prism2.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(`(^|["'\\s])(?:` + a2 + `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [e2, "language-" + e2], inside: Prism2.languages[e2] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
      } }), Prism2.languages.html = Prism2.languages.markup, Prism2.languages.mathml = Prism2.languages.markup, Prism2.languages.svg = Prism2.languages.markup, Prism2.languages.xml = Prism2.languages.extend("markup", {}), Prism2.languages.ssml = Prism2.languages.xml, Prism2.languages.atom = Prism2.languages.xml, Prism2.languages.rss = Prism2.languages.xml;
      !function(s3) {
        var e2 = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        s3.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|` + e2.source + ")*?(?:;|(?=\\s*\\{))"), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + e2.source + `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`, "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + e2.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e2.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: e2, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, s3.languages.css.atrule.inside.rest = s3.languages.css;
        var t2 = s3.languages.markup;
        t2 && (t2.tag.addInlined("style", "css"), t2.tag.addAttribute("style", "css"));
      }(Prism2);
      Prism2.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
      Prism2.languages.javascript = Prism2.languages.extend("clike", { "class-name": [Prism2.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism2.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism2.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism2.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism2.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism2.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism2.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism2.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism2.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), Prism2.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), Prism2.languages.markup && (Prism2.languages.markup.tag.addInlined("script", "javascript"), Prism2.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism2.languages.js = Prism2.languages.javascript;
      !function(e2) {
        var t2 = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", a2 = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: true, alias: "punctuation", inside: null }, n3 = { bash: a2, environment: { pattern: RegExp("\\$" + t2), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: true, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: true }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: true, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: true, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t2), lookbehind: true, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
        e2.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: true }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: true, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: true }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t2), lookbehind: true, alias: "constant" } }, alias: "variable", lookbehind: true }, parameter: { pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/, alias: "variable", lookbehind: true }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: true, greedy: true, inside: n3 }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: true, greedy: true, inside: { bash: a2 } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: true, greedy: true, inside: n3 }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: true, greedy: true }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: true, inside: { entity: n3.entity } }], environment: { pattern: RegExp("\\$?" + t2), alias: "constant" }, variable: n3.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: true }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: true }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: true, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: true }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: true } }, a2.inside = e2.languages.bash;
        for (var s3 = ["comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], o2 = n3.variable[1].inside, i2 = 0; i2 < s3.length; i2++)
          o2[s3[i2]] = e2.languages.bash[s3[i2]];
        e2.languages.sh = e2.languages.bash, e2.languages.shell = e2.languages.bash;
      }(Prism2);
      !function(e2) {
        function n3(e3, n4) {
          return e3.replace(/<<(\d+)>>/g, function(e4, s4) {
            return "(?:" + n4[+s4] + ")";
          });
        }
        function s3(e3, s4, a3) {
          return RegExp(n3(e3, s4), a3 || "");
        }
        function a2(e3, n4) {
          for (var s4 = 0; s4 < n4; s4++)
            e3 = e3.replace(/<<self>>/g, function() {
              return "(?:" + e3 + ")";
            });
          return e3.replace(/<<self>>/g, "[^\\s\\S]");
        }
        var t2 = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void", r2 = "class enum interface record struct", i2 = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)", o2 = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
        function l3(e3) {
          return "\\b(?:" + e3.trim().replace(/ /g, "|") + ")\\b";
        }
        var d2 = l3(r2), p2 = RegExp(l3(t2 + " " + r2 + " " + i2 + " " + o2)), c2 = l3(r2 + " " + i2 + " " + o2), u2 = l3(t2 + " " + r2 + " " + o2), g2 = a2("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2), b2 = a2("\\((?:[^()]|<<self>>)*\\)", 2), h2 = "@?\\b[A-Za-z_]\\w*\\b", f2 = n3("<<0>>(?:\\s*<<1>>)?", [h2, g2]), m2 = n3("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c2, f2]), k2 = "\\[\\s*(?:,\\s*)*\\]", y2 = n3("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m2, k2]), w2 = n3("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g2, b2, k2]), v2 = n3("\\(<<0>>+(?:,<<0>>+)+\\)", [w2]), x2 = n3("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [v2, m2, k2]), $2 = { keyword: p2, punctuation: /[<>()?,.:[\]]/ }, _2 = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'", B2 = '"(?:\\\\.|[^\\\\"\r\n])*"';
        e2.languages.csharp = e2.languages.extend("clike", { string: [{ pattern: s3("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']), lookbehind: true, greedy: true }, { pattern: s3("(^|[^@$\\\\])<<0>>", [B2]), lookbehind: true, greedy: true }], "class-name": [{ pattern: s3("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m2]), lookbehind: true, inside: $2 }, { pattern: s3("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h2, x2]), lookbehind: true, inside: $2 }, { pattern: s3("(\\busing\\s+)<<0>>(?=\\s*=)", [h2]), lookbehind: true }, { pattern: s3("(\\b<<0>>\\s+)<<1>>", [d2, f2]), lookbehind: true, inside: $2 }, { pattern: s3("(\\bcatch\\s*\\(\\s*)<<0>>", [m2]), lookbehind: true, inside: $2 }, { pattern: s3("(\\bwhere\\s+)<<0>>", [h2]), lookbehind: true }, { pattern: s3("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y2]), lookbehind: true, inside: $2 }, { pattern: s3("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [x2, u2, h2]), inside: $2 }], keyword: p2, number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i, operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), e2.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }), e2.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: s3("([(,]\\s*)<<0>>(?=\\s*:)", [h2]), lookbehind: true, alias: "punctuation" } }), e2.languages.insertBefore("csharp", "class-name", { namespace: { pattern: s3("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h2]), lookbehind: true, inside: { punctuation: /\./ } }, "type-expression": { pattern: s3("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [b2]), lookbehind: true, alias: "class-name", inside: $2 }, "return-type": { pattern: s3("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [x2, m2]), inside: $2, alias: "class-name" }, "constructor-invocation": { pattern: s3("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [x2]), lookbehind: true, inside: $2, alias: "class-name" }, "generic-method": { pattern: s3("<<0>>\\s*<<1>>(?=\\s*\\()", [h2, g2]), inside: { function: s3("^<<0>>", [h2]), generic: { pattern: RegExp(g2), alias: "class-name", inside: $2 } } }, "type-list": { pattern: s3("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [d2, f2, h2, x2, p2.source, b2, "\\bnew\\s*\\(\\s*\\)"]), lookbehind: true, inside: { "record-arguments": { pattern: s3("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f2, b2]), lookbehind: true, greedy: true, inside: e2.languages.csharp }, keyword: p2, "class-name": { pattern: RegExp(x2), greedy: true, inside: $2 }, punctuation: /[,()]/ } }, preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: true, alias: "property", inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: true, alias: "keyword" } } } });
        var E2 = B2 + "|" + _2, R2 = n3("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [E2]), z2 = a2(n3(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [R2]), 2), S2 = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b", j2 = n3("<<0>>(?:\\s*\\(<<1>>*\\))?", [m2, z2]);
        e2.languages.insertBefore("csharp", "class-name", { attribute: { pattern: s3("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [S2, j2]), lookbehind: true, greedy: true, inside: { target: { pattern: s3("^<<0>>(?=\\s*:)", [S2]), alias: "keyword" }, "attribute-arguments": { pattern: s3("\\(<<0>>*\\)", [z2]), inside: e2.languages.csharp }, "class-name": { pattern: RegExp(m2), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } });
        var A2 = ":[^}\r\n]+", F2 = a2(n3(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [R2]), 2), P2 = n3("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F2, A2]), U2 = a2(n3(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`, [E2]), 2), Z2 = n3("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [U2, A2]);
        function q2(n4, a3) {
          return { interpolation: { pattern: s3("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n4]), lookbehind: true, inside: { "format-string": { pattern: s3("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [a3, A2]), lookbehind: true, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: e2.languages.csharp } } }, string: /[\s\S]+/ };
        }
        e2.languages.insertBefore("csharp", "string", { "interpolation-string": [{ pattern: s3('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [P2]), lookbehind: true, greedy: true, inside: q2(P2, F2) }, { pattern: s3('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [Z2]), lookbehind: true, greedy: true, inside: q2(Z2, U2) }], char: { pattern: RegExp(_2), greedy: true } }), e2.languages.dotnet = e2.languages.cs = e2.languages.csharp;
      }(Prism2);
      !function(e2) {
        e2.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
        var n3 = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
        Object.keys(n3).forEach(function(a2) {
          var i2 = n3[a2], r2 = [];
          /^\w+$/.test(a2) || r2.push(/\w+/.exec(a2)[0]), "diff" === a2 && r2.push("bold"), e2.languages.diff[a2] = { pattern: RegExp("^(?:[" + i2 + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"), alias: r2, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: true }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(a2)[0] } } };
        }), Object.defineProperty(e2.languages.diff, "PREFIXES", { value: n3 });
      }(Prism2);
      Prism2.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: true, greedy: true }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: true, greedy: true }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism2.languages.webmanifest = Prism2.languages.json;
      !function(e2) {
        var i2 = e2.languages.powershell = { comment: [{ pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: true }, { pattern: /(^|[^`])#.*/, lookbehind: true }], string: [{ pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: true, inside: null }, { pattern: /'(?:[^']|'')*'/, greedy: true }], namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i, boolean: /\$(?:false|true)\b/i, variable: /\$\w+\b/, function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i], keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i, operator: { pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i, lookbehind: true }, punctuation: /[|{}[\];(),.]/ };
        i2.string[0].inside = { function: { pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/, lookbehind: true, inside: i2 }, boolean: i2.boolean, variable: i2.variable };
      }(Prism2);
      !function(e2) {
        e2.languages.puppet = { heredoc: [{ pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/, lookbehind: true, alias: "string", inside: { punctuation: /(?=\S).*\S(?= *$)/ } }, { pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/, lookbehind: true, greedy: true, alias: "string", inside: { punctuation: /(?=\S).*\S(?= *$)/ } }, { pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/, alias: "string", inside: { punctuation: { pattern: /(\().+?(?=\))/, lookbehind: true } } }], "multiline-comment": { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: true, greedy: true, alias: "comment" }, regex: { pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/, lookbehind: true, greedy: true, inside: { "extended-regex": { pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/, inside: { comment: /#.*/ } } } }, comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, string: { pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/, greedy: true, inside: { "double-quoted": { pattern: /^"[\s\S]*"$/, inside: {} } } }, variable: { pattern: /\$(?:::)?\w+(?:::\w+)*/, inside: { punctuation: /::/ } }, "attr-name": /(?:\b\w+|\*)(?=\s*=>)/, function: [{ pattern: /(\.)(?!\d)\w+/, lookbehind: true }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/], number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i, boolean: /\b(?:false|true)\b/, keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/, datatype: { pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/, alias: "symbol" }, operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/, punctuation: /[\[\]{}().,;]|:+/ };
        var n3 = [{ pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/, lookbehind: true, inside: { "short-variable": { pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/, lookbehind: true, alias: "variable", inside: { punctuation: /::/ } }, delimiter: { pattern: /^\$/, alias: "variable" }, rest: e2.languages.puppet } }, { pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/, lookbehind: true, alias: "variable", inside: { punctuation: /::/ } }];
        e2.languages.puppet.heredoc[0].inside.interpolation = n3, e2.languages.puppet.string.inside["double-quoted"].inside.interpolation = n3;
      }(Prism2);
      Prism2.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism2.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism2.languages.python, Prism2.languages.py = Prism2.languages.python;
      !function(e2) {
        e2.languages.ruby = e2.languages.extend("clike", { comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: true }, "class-name": { pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/, operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/, punctuation: /[(){}[\].,;]/ }), e2.languages.insertBefore("ruby", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } });
        var n3 = { pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/, lookbehind: true, inside: { content: { pattern: /^(#\{)[\s\S]+(?=\}$)/, lookbehind: true, inside: e2.languages.ruby }, delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" } } };
        delete e2.languages.ruby.function;
        var t2 = "(?:" + ["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)", "\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]", "<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|") + ")", i2 = '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';
        e2.languages.insertBefore("ruby", "keyword", { "regex-literal": [{ pattern: RegExp("%r" + t2 + "[egimnosux]{0,6}"), greedy: true, inside: { interpolation: n3, regex: /[\s\S]+/ } }, { pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/, lookbehind: true, greedy: true, inside: { interpolation: n3, regex: /[\s\S]+/ } }], variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/, symbol: [{ pattern: RegExp("(^|[^:]):" + i2), lookbehind: true, greedy: true }, { pattern: RegExp("([\r\n{(,][ 	]*)" + i2 + "(?=:(?!:))"), lookbehind: true, greedy: true }], "method-definition": { pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/, lookbehind: true, inside: { function: /\b\w+$/, keyword: /^self\b/, "class-name": /^\w+/, punctuation: /\./ } } }), e2.languages.insertBefore("ruby", "string", { "string-literal": [{ pattern: RegExp("%[qQiIwWs]?" + t2), greedy: true, inside: { interpolation: n3, string: /[\s\S]+/ } }, { pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/, greedy: true, inside: { interpolation: n3, string: /[\s\S]+/ } }, { pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i, inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ } }, interpolation: n3, string: /[\s\S]+/ } }, { pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i, inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?'|'$/ } }, string: /[\s\S]+/ } }], "command-literal": [{ pattern: RegExp("%x" + t2), greedy: true, inside: { interpolation: n3, command: { pattern: /[\s\S]+/, alias: "string" } } }, { pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/, greedy: true, inside: { interpolation: n3, command: { pattern: /[\s\S]+/, alias: "string" } } }] }), delete e2.languages.ruby.string, e2.languages.insertBefore("ruby", "number", { builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/, constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/ }), e2.languages.rb = e2.languages.ruby;
      }(Prism2);
      Prism2.languages.scss = Prism2.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: true }, atrule: { pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)?url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, property: { pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism2.languages.insertBefore("scss", "atrule", { keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, { pattern: /( )(?:from|through)(?= )/, lookbehind: true }] }), Prism2.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism2.languages.insertBefore("scss", "function", { "module-modifier": { pattern: /\b(?:as|hide|show|with)\b/i, alias: "keyword" }, placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" }, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/, lookbehind: true } }), Prism2.languages.scss.atrule.inside.rest = Prism2.languages.scss;
      !function(s3) {
        var n3 = ['"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"', "'[^']*'", "\\$'(?:[^'\\\\]|\\\\[^])*'", `<<-?\\s*(["']?)(\\w+)\\1\\s[^]*?[\r
]\\2`].join("|");
        s3.languages["shell-session"] = { command: { pattern: RegExp('^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)' + `(?:[^\\\\\r
 	'"<$]|[ 	](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r
?)|\\$(?!')|<(?!<)|<<str>>)+`.replace(/<<str>>/g, function() {
          return n3;
        }), "m"), greedy: true, inside: { info: { pattern: /^[^#$%]+/, alias: "punctuation", inside: { user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/, punctuation: /:/, path: /[\s\S]+/ } }, bash: { pattern: /(^[$#%]\s*)\S[\s\S]*/, lookbehind: true, alias: "language-bash", inside: s3.languages.bash }, "shell-symbol": { pattern: /^[$#%]/, alias: "important" } } }, output: /.(?:.*(?:[\r\n]|.$))*/ }, s3.languages["sh-session"] = s3.languages.shellsession = s3.languages["shell-session"];
      }(Prism2);
      !function(a2) {
        function e2(e3, n4) {
          a2.languages[e3] && a2.languages.insertBefore(e3, "comment", { "doc-comment": n4 });
        }
        var n3 = a2.languages.markup.tag, t2 = { pattern: /\/\/\/.*/, greedy: true, alias: "comment", inside: { tag: n3 } }, g2 = { pattern: /'''.*/, greedy: true, alias: "comment", inside: { tag: n3 } };
        e2("csharp", t2), e2("fsharp", t2), e2("vbnet", g2);
      }(Prism2);
      !function(e2) {
        var n3 = /[*&][^\s[\]{},]+/, r2 = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, t2 = "(?:" + r2.source + "(?:[ 	]+" + n3.source + ")?|" + n3.source + "(?:[ 	]+" + r2.source + ")?)", a2 = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, function() {
          return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
        }), d2 = `"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;
        function o2(e3, n4) {
          n4 = (n4 || "").replace(/m/g, "") + "m";
          var r3 = "([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, function() {
            return t2;
          }).replace(/<<value>>/g, function() {
            return e3;
          });
          return RegExp(r3, n4);
        }
        e2.languages.yaml = { scalar: { pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?\n|\r)[ 	]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, function() {
          return t2;
        })), lookbehind: true, alias: "string" }, comment: /#.*/, key: { pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, function() {
          return t2;
        }).replace(/<<key>>/g, function() {
          return "(?:" + a2 + "|" + d2 + ")";
        })), lookbehind: true, greedy: true, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" }, datetime: { pattern: o2("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"), lookbehind: true, alias: "number" }, boolean: { pattern: o2("false|true", "i"), lookbehind: true, alias: "important" }, null: { pattern: o2("null|~", "i"), lookbehind: true, alias: "important" }, string: { pattern: o2(d2), lookbehind: true, greedy: true }, number: { pattern: o2("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"), lookbehind: true }, tag: r2, important: n3, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e2.languages.yml = e2.languages.yaml;
      }(Prism2);
      !function() {
        if ("undefined" != typeof Prism2 && "undefined" != typeof document) {
          var e2 = "line-numbers", n3 = /\n(?!$)/g, t2 = Prism2.plugins.lineNumbers = { getLine: function(n4, t3) {
            if ("PRE" === n4.tagName && n4.classList.contains(e2)) {
              var i3 = n4.querySelector(".line-numbers-rows");
              if (i3) {
                var r3 = parseInt(n4.getAttribute("data-start"), 10) || 1, s3 = r3 + (i3.children.length - 1);
                t3 < r3 && (t3 = r3), t3 > s3 && (t3 = s3);
                var l3 = t3 - r3;
                return i3.children[l3];
              }
            }
          }, resize: function(e3) {
            r2([e3]);
          }, assumeViewportIndependence: true }, i2 = void 0;
          window.addEventListener("resize", function() {
            t2.assumeViewportIndependence && i2 === window.innerWidth || (i2 = window.innerWidth, r2(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))));
          }), Prism2.hooks.add("complete", function(t3) {
            if (t3.code) {
              var i3 = t3.element, s3 = i3.parentNode;
              if (s3 && /pre/i.test(s3.nodeName) && !i3.querySelector(".line-numbers-rows") && Prism2.util.isActive(i3, e2)) {
                i3.classList.remove(e2), s3.classList.add(e2);
                var l3, o2 = t3.code.match(n3), a2 = o2 ? o2.length + 1 : 1, u2 = new Array(a2 + 1).join("<span></span>");
                (l3 = document.createElement("span")).setAttribute("aria-hidden", "true"), l3.className = "line-numbers-rows", l3.innerHTML = u2, s3.hasAttribute("data-start") && (s3.style.counterReset = "linenumber " + (parseInt(s3.getAttribute("data-start"), 10) - 1)), t3.element.appendChild(l3), r2([s3]), Prism2.hooks.run("line-numbers", t3);
              }
            }
          }), Prism2.hooks.add("line-numbers", function(e3) {
            e3.plugins = e3.plugins || {}, e3.plugins.lineNumbers = true;
          });
        }
        function r2(e3) {
          if (0 != (e3 = e3.filter(function(e4) {
            var n4, t4 = (n4 = e4, n4 ? window.getComputedStyle ? getComputedStyle(n4) : n4.currentStyle || null : null)["white-space"];
            return "pre-wrap" === t4 || "pre-line" === t4;
          })).length) {
            var t3 = e3.map(function(e4) {
              var t4 = e4.querySelector("code"), i3 = e4.querySelector(".line-numbers-rows");
              if (t4 && i3) {
                var r3 = e4.querySelector(".line-numbers-sizer"), s3 = t4.textContent.split(n3);
                r3 || ((r3 = document.createElement("span")).className = "line-numbers-sizer", t4.appendChild(r3)), r3.innerHTML = "0", r3.style.display = "block";
                var l3 = r3.getBoundingClientRect().height;
                return r3.innerHTML = "", { element: e4, lines: s3, lineHeights: [], oneLinerHeight: l3, sizer: r3 };
              }
            }).filter(Boolean);
            t3.forEach(function(e4) {
              var n4 = e4.sizer, t4 = e4.lines, i3 = e4.lineHeights, r3 = e4.oneLinerHeight;
              i3[t4.length - 1] = void 0, t4.forEach(function(e5, t5) {
                if (e5 && e5.length > 1) {
                  var s3 = n4.appendChild(document.createElement("span"));
                  s3.style.display = "block", s3.textContent = e5;
                } else
                  i3[t5] = r3;
              });
            }), t3.forEach(function(e4) {
              for (var n4 = e4.sizer, t4 = e4.lineHeights, i3 = 0, r3 = 0; r3 < t4.length; r3++)
                void 0 === t4[r3] && (t4[r3] = n4.children[i3++].getBoundingClientRect().height);
            }), t3.forEach(function(e4) {
              var n4 = e4.sizer, t4 = e4.element.querySelector(".line-numbers-rows");
              n4.style.display = "none", n4.innerHTML = "", e4.lineHeights.forEach(function(e5, n5) {
                t4.children[n5].style.height = e5 + "px";
              });
            });
          }
        }
      }();
      !function() {
        if ("undefined" != typeof Prism2 && "undefined" != typeof document) {
          var e2 = [], t2 = {}, n3 = function() {
          };
          Prism2.plugins.toolbar = {};
          var a2 = Prism2.plugins.toolbar.registerButton = function(n4, a3) {
            var r3;
            r3 = "function" == typeof a3 ? a3 : function(e3) {
              var t3;
              return "function" == typeof a3.onClick ? ((t3 = document.createElement("button")).type = "button", t3.addEventListener("click", function() {
                a3.onClick.call(this, e3);
              })) : "string" == typeof a3.url ? (t3 = document.createElement("a")).href = a3.url : t3 = document.createElement("span"), a3.className && t3.classList.add(a3.className), t3.textContent = a3.text, t3;
            }, n4 in t2 ? console.warn('There is a button with the key "' + n4 + '" registered already.') : e2.push(t2[n4] = r3);
          }, r2 = Prism2.plugins.toolbar.hook = function(a3) {
            var r3 = a3.element.parentNode;
            if (r3 && /pre/i.test(r3.nodeName) && !r3.parentNode.classList.contains("code-toolbar")) {
              var o2 = document.createElement("div");
              o2.classList.add("code-toolbar"), r3.parentNode.insertBefore(o2, r3), o2.appendChild(r3);
              var i2 = document.createElement("div");
              i2.classList.add("toolbar");
              var l3 = e2, d2 = function(e3) {
                for (; e3; ) {
                  var t3 = e3.getAttribute("data-toolbar-order");
                  if (null != t3)
                    return (t3 = t3.trim()).length ? t3.split(/\s*,\s*/g) : [];
                  e3 = e3.parentElement;
                }
              }(a3.element);
              d2 && (l3 = d2.map(function(e3) {
                return t2[e3] || n3;
              })), l3.forEach(function(e3) {
                var t3 = e3(a3);
                if (t3) {
                  var n4 = document.createElement("div");
                  n4.classList.add("toolbar-item"), n4.appendChild(t3), i2.appendChild(n4);
                }
              }), o2.appendChild(i2);
            }
          };
          a2("label", function(e3) {
            var t3 = e3.element.parentNode;
            if (t3 && /pre/i.test(t3.nodeName) && t3.hasAttribute("data-label")) {
              var n4, a3, r3 = t3.getAttribute("data-label");
              try {
                a3 = document.querySelector("template#" + r3);
              } catch (e4) {
              }
              return a3 ? n4 = a3.content : (t3.hasAttribute("data-url") ? (n4 = document.createElement("a")).href = t3.getAttribute("data-url") : n4 = document.createElement("span"), n4.textContent = r3), n4;
            }
          }), Prism2.hooks.add("complete", r2);
        }
      }();
      !function() {
        function t2(t3) {
          var e2 = document.createElement("textarea");
          e2.value = t3.getText(), e2.style.top = "0", e2.style.left = "0", e2.style.position = "fixed", document.body.appendChild(e2), e2.focus(), e2.select();
          try {
            var o2 = document.execCommand("copy");
            setTimeout(function() {
              o2 ? t3.success() : t3.error();
            }, 1);
          } catch (e3) {
            setTimeout(function() {
              t3.error(e3);
            }, 1);
          }
          document.body.removeChild(e2);
        }
        "undefined" != typeof Prism2 && "undefined" != typeof document && (Prism2.plugins.toolbar ? Prism2.plugins.toolbar.registerButton("copy-to-clipboard", function(e2) {
          var o2 = e2.element, n3 = function(t3) {
            var e3 = { copy: "Copy", "copy-error": "Press Ctrl+C to copy", "copy-success": "Copied!", "copy-timeout": 5e3 };
            for (var o3 in e3) {
              for (var n4 = "data-prismjs-" + o3, c3 = t3; c3 && !c3.hasAttribute(n4); )
                c3 = c3.parentElement;
              c3 && (e3[o3] = c3.getAttribute(n4));
            }
            return e3;
          }(o2), c2 = document.createElement("button");
          c2.className = "copy-to-clipboard-button", c2.setAttribute("type", "button");
          var r2 = document.createElement("span");
          return c2.appendChild(r2), u2("copy"), function(e3, o3) {
            e3.addEventListener("click", function() {
              !function(e4) {
                navigator.clipboard ? navigator.clipboard.writeText(e4.getText()).then(e4.success, function() {
                  t2(e4);
                }) : t2(e4);
              }(o3);
            });
          }(c2, { getText: function() {
            return o2.textContent;
          }, success: function() {
            u2("copy-success"), i2();
          }, error: function() {
            u2("copy-error"), setTimeout(function() {
              !function(t3) {
                window.getSelection().selectAllChildren(t3);
              }(o2);
            }, 1), i2();
          } }), c2;
          function i2() {
            setTimeout(function() {
              u2("copy");
            }, n3["copy-timeout"]);
          }
          function u2(t3) {
            r2.textContent = n3[t3], c2.setAttribute("data-copy-state", t3);
          }
        }) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."));
      }();
      !function() {
        if ("undefined" != typeof Prism2) {
          var e2 = /^diff-([\w-]+)/i, i2 = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g, a2 = RegExp("(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))".replace(/__/g, function() {
            return i2.source;
          }), "gi"), s3 = false;
          Prism2.hooks.add("before-sanity-check", function(i3) {
            var a3 = i3.language;
            e2.test(a3) && !i3.grammar && (i3.grammar = Prism2.languages[a3] = Prism2.languages.diff);
          }), Prism2.hooks.add("before-tokenize", function(i3) {
            s3 || Prism2.languages.diff || Prism2.plugins.autoloader || (s3 = true, console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));
            var a3 = i3.language;
            e2.test(a3) && !Prism2.languages[a3] && (Prism2.languages[a3] = Prism2.languages.diff);
          }), Prism2.hooks.add("wrap", function(s4) {
            var r2, n3;
            if ("diff" !== s4.language) {
              var g2 = e2.exec(s4.language);
              if (!g2)
                return;
              r2 = g2[1], n3 = Prism2.languages[r2];
            }
            var f2 = Prism2.languages.diff && Prism2.languages.diff.PREFIXES;
            if (f2 && s4.type in f2) {
              var u2, l3 = s4.content.replace(i2, "").replace(/&lt;/g, "<").replace(/&amp;/g, "&"), t2 = l3.replace(/(^|[\r\n])./g, "$1");
              u2 = n3 ? Prism2.highlight(t2, n3, r2) : Prism2.util.encode(t2);
              var o2, m2 = new Prism2.Token("prefix", f2[s4.type], [/\w+/.exec(s4.type)[0]]), d2 = Prism2.Token.stringify(m2, s4.language), c2 = [];
              for (a2.lastIndex = 0; o2 = a2.exec(u2); )
                c2.push(d2 + o2[0]);
              /(?:^|[\r\n]).$/.test(l3) && c2.push(d2), s4.content = c2.join(""), n3 && s4.classes.push("language-" + r2);
            }
          });
        }
      }();
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
            var elements, elsWithIds, idList, elementID, i2, index, count, tidyText, newTidyText, anchor, hrefBase, indexesToDrop = [];
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
            for (i2 = 0; i2 < elements.length; i2++) {
              if (this.hasAnchorJSLink(elements[i2])) {
                indexesToDrop.push(i2);
                continue;
              }
              if (elements[i2].hasAttribute("id")) {
                elementID = elements[i2].getAttribute("id");
              } else if (elements[i2].hasAttribute("data-anchor-id")) {
                elementID = elements[i2].getAttribute("data-anchor-id");
              } else {
                tidyText = this.urlify(elements[i2].textContent);
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
                elements[i2].setAttribute("id", newTidyText);
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
                elements[i2].insertBefore(anchor, elements[i2].firstChild);
              } else {
                anchor.style.marginLeft = ".1875em";
                anchor.style.paddingRight = ".1875em";
                anchor.style.paddingLeft = ".1875em";
                elements[i2].appendChild(anchor);
              }
            }
            for (i2 = 0; i2 < indexesToDrop.length; i2++) {
              elements.splice(indexesToDrop[i2] - i2, 1);
            }
            this.elements = this.elements.concat(elements);
            return this;
          };
          this.remove = function(selector) {
            var index, domAnchor, elements = _getElements(selector);
            for (var i2 = 0; i2 < elements.length; i2++) {
              domAnchor = elements[i2].querySelector(".anchorjs-link");
              if (domAnchor) {
                index = this.elements.indexOf(elements[i2]);
                if (index !== -1) {
                  this.elements.splice(index, 1);
                }
                elements[i2].removeChild(domAnchor);
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

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global2, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w2) {
            if (!w2.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w2);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i2, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i2 in preservedScriptAttributes) {
              val = node[i2] || node.getAttribute && node.getAttribute(i2);
              if (val) {
                script.setAttribute(i2, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType2(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
          return new jQuery2.fn.init(selector, context);
        };
        jQuery2.fn = jQuery2.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery2,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery2.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery2.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery2.map(this, function(elem, i2) {
              return callback.call(elem, i2, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
              return (i2 + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
              return i2 % 2;
            }));
          },
          eq: function(i2) {
            var len = this.length, j2 = +i2 + (i2 < 0 ? len : 0);
            return this.pushStack(j2 >= 0 && j2 < len ? [this[j2]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery2.extend = jQuery2.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone3, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i2] || {};
            i2++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i2 === length) {
            target = this;
            i2--;
          }
          for (; i2 < length; i2++) {
            if ((options = arguments[i2]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone3 = [];
                  } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                    clone3 = {};
                  } else {
                    clone3 = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery2.extend(deep, clone3, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery2.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i2 = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i2 < length; i2++) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            } else {
              for (i2 in obj) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += jQuery2.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery2.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i2) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j2 = 0, i2 = first.length;
            for (; j2 < len; j2++) {
              first[i2++] = second[j2];
            }
            first.length = i2;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
            for (; i2 < length; i2++) {
              callbackInverse = !callback(elems[i2], i2);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i2]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i2 = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i2 < length; i2++) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i2 in elems) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery2.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType2(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery2.contains = function(a2, b2) {
          var bup = b2 && b2.parentNode;
          return a2 === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a2.contains ? a2.contains(bup) : a2.compareDocumentPosition && a2.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery2.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i2, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a2, b2) {
            if (a2 === b2) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e2) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m2, i3, elem, nid, match2, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match2 = rquickExpr2.exec(selector))) {
                  if (m2 = match2[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m2)) {
                        if (elem.id === m2) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match2[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m2 = match2[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m2));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery2.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i3 = groups.length;
                    while (i3--) {
                      groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn3) {
            fn3[expando] = true;
            return fn3;
          }
          function assert(fn3) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn3(el);
            } catch (e2) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn3) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j2, matchIndexes = fn3([], seed.length, argument), i3 = matchIndexes.length;
                while (i3--) {
                  if (seed[j2 = matchIndexes[i3]]) {
                    seed[j2] = !(matches2[j2] = seed[j2]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery2.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery2.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e2) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i3, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i3 = 0;
                    while (elem = elems[i3++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a2, b2) {
              if (a2 === b2) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a2.compareDocumentPosition - !b2.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a2.ownerDocument || a2) == (b2.ownerDocument || b2) ? a2.compareDocumentPosition(b2) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b2.compareDocumentPosition(a2) === compare) {
                if (a2 === document3 || a2.ownerDocument == preferredDoc && find.contains(preferredDoc, a2)) {
                  return -1;
                }
                if (b2 === document3 || b2.ownerDocument == preferredDoc && find.contains(preferredDoc, b2)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a2) - indexOf.call(sortInput, b2) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e2) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery2.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn3 = Expr.attrHandle[name.toLowerCase()], val = fn3 && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn3(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery2.uniqueSort = function(results) {
            var elem, duplicates = [], j2 = 0, i3 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i3++]) {
                if (elem === results[i3]) {
                  j2 = duplicates.push(i3);
                }
              }
              while (j2--) {
                splice.call(results, duplicates[j2], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery2.fn.uniqueSort = function() {
            return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery2.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match2) {
                match2[1] = match2[1].replace(runescape, funescape);
                match2[3] = (match2[3] || match2[4] || match2[5] || "").replace(runescape, funescape);
                if (match2[2] === "~=") {
                  match2[3] = " " + match2[3] + " ";
                }
                return match2.slice(0, 4);
              },
              CHILD: function(match2) {
                match2[1] = match2[1].toLowerCase();
                if (match2[1].slice(0, 3) === "nth") {
                  if (!match2[3]) {
                    find.error(match2[0]);
                  }
                  match2[4] = +(match2[4] ? match2[5] + (match2[6] || 1) : 2 * (match2[3] === "even" || match2[3] === "odd"));
                  match2[5] = +(match2[7] + match2[8] || match2[3] === "odd");
                } else if (match2[3]) {
                  find.error(match2[0]);
                }
                return match2;
              },
              PSEUDO: function(match2) {
                var excess, unquoted = !match2[6] && match2[2];
                if (matchExpr.CHILD.test(match2[0])) {
                  return null;
                }
                if (match2[3]) {
                  match2[2] = match2[4] || match2[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match2[0] = match2[0].slice(0, excess);
                  match2[2] = unquoted.slice(0, excess);
                }
                return match2.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple2 = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start2, dir2 = simple2 !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple2) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start2 = dir2 = type === "only" && !start2 && "nextSibling";
                      }
                      return true;
                    }
                    start2 = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start2.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn3 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn3[expando]) {
                  return fn3(argument);
                }
                if (fn3.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn3(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf.call(seed, matched[i3]);
                      seed[idx] = !(matches2[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn3(elem, 0, args);
                  };
                }
                return fn3;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                  while (i3--) {
                    if (elem = unmatched[i3]) {
                      seed[i3] = !(matches2[i3] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash3 = window2.location && window2.location.hash;
                return hash3 && hash3.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 0;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 1;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3;
                if (argument < 0) {
                  i3 = argument + length;
                } else if (argument > length) {
                  i3 = length;
                } else {
                  i3 = argument;
                }
                for (; --i3 >= 0; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; ++i3 < length; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i2] = createInputPseudo(i2);
          }
          for (i2 in { submit: true, reset: true }) {
            Expr.pseudos[i2] = createButtonPseudo(i2);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match2, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match2 = rcomma.exec(soFar))) {
                if (match2) {
                  soFar = soFar.slice(match2[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match2 = rleadingCombinator.exec(soFar)) {
                matched = match2.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match2[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match2 = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match2 = preFilters[type](match2)))) {
                  matched = match2.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match2
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i3 = 0, len = tokens.length, selector = "";
            for (; i3 < len; i3++) {
              selector += tokens[i3].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i3 = matchers.length;
              while (i3--) {
                if (!matchers[i3](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i3 = 0, len = contexts.length;
            for (; i3 < len; i3++) {
              find(selector, contexts[i3], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
            for (; i3 < len; i3++) {
              if (elem = unmatched[i3]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i3);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i3, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i3 = temp.length;
                while (i3--) {
                  if (elem = temp[i3]) {
                    matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i3 = matcherOut.length;
                    while (i3--) {
                      if (elem = matcherOut[i3]) {
                        temp.push(matcherIn[i3] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i3 = matcherOut.length;
                  while (i3--) {
                    if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i3]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j2, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i3 < len; i3++) {
              if (matcher = Expr.relative[tokens[i3].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                if (matcher[expando]) {
                  j2 = ++i3;
                  for (; j2 < len; j2++) {
                    if (Expr.relative[tokens[j2].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i3 > 1 && elementMatcher(matchers),
                    i3 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i3 < j2 && matcherFromTokens(tokens.slice(i3, j2)),
                    j2 < len && matcherFromTokens(tokens = tokens.slice(j2)),
                    j2 < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j2, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                if (byElement && elem) {
                  j2 = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j2++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i3;
              if (bySet && i3 !== matchedCount) {
                j2 = 0;
                while (matcher = setMatchers[j2++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i3--) {
                      if (!(unmatched[i3] || setMatched[i3])) {
                        setMatched[i3] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match2) {
            var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match2) {
                match2 = tokenize(selector);
              }
              i3 = match2.length;
              while (i3--) {
                cached = matcherFromTokens(match2[i3]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i3, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match2 = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match2.length === 1) {
              tokens = match2[0] = match2[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i3 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i3--) {
                token = tokens[i3];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i3, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match2))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery2.find = find;
          jQuery2.expr[":"] = jQuery2.expr.pseudos;
          jQuery2.unique = jQuery2.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery2.escapeSelector;
          find.getText = jQuery2.text;
          find.isXML = jQuery2.isXMLDoc;
          find.selectors = jQuery2.expr;
          find.support = jQuery2.support;
          find.uniqueSort = jQuery2.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery2(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n3, elem) {
          var matched = [];
          for (; n3; n3 = n3.nextSibling) {
            if (n3.nodeType === 1 && n3 !== elem) {
              matched.push(n3);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery2.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery2.grep(elements, function(elem, i2) {
              return !!qualifier.call(elem, i2, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery2.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery2.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery2.filter(qualifier, elements, not);
        }
        jQuery2.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery2.fn.extend({
          find: function(selector) {
            var i2, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery2(selector).filter(function() {
                for (i2 = 0; i2 < len; i2++) {
                  if (jQuery2.contains(self2[i2], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i2 = 0; i2 < len; i2++) {
              jQuery2.find(selector, self2[i2], ret);
            }
            return len > 1 ? jQuery2.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
          var match2, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match2 = [null, selector, null];
            } else {
              match2 = rquickExpr.exec(selector);
            }
            if (match2 && (match2[1] || !context)) {
              if (match2[1]) {
                context = context instanceof jQuery2 ? context[0] : context;
                jQuery2.merge(this, jQuery2.parseHTML(
                  match2[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match2[1]) && jQuery2.isPlainObject(context)) {
                  for (match2 in context) {
                    if (isFunction(this[match2])) {
                      this[match2](context[match2]);
                    } else {
                      this.attr(match2, context[match2]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match2[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery2)
            );
          }
          return jQuery2.makeArray(selector, this);
        };
        init.prototype = jQuery2.fn;
        rootjQuery = jQuery2(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery2.fn.extend({
          has: function(target) {
            var targets = jQuery2(target, this), l3 = targets.length;
            return this.filter(function() {
              var i2 = 0;
              for (; i2 < l3; i2++) {
                if (jQuery2.contains(this, targets[i2])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i2 = 0, l3 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i2 < l3; i2++) {
                for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery2(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery2.uniqueSort(
                jQuery2.merge(this.get(), jQuery2(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery2.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery2.merge([], elem.childNodes);
          }
        }, function(name, fn3) {
          jQuery2.fn[name] = function(until, selector) {
            var matched = jQuery2.map(this, fn3, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery2.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery2.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery2.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery2.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery2.each(args, function(_2, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType2(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery2.each(arguments, function(_2, arg) {
                var index;
                while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn3) {
              return fn3 ? jQuery2.inArray(fn3, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v2) {
          return v2;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery2.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery2.Callbacks("memory"),
                jQuery2.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn3) {
                return promise.then(null, fn3);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(_i, tuple) {
                    var fn3 = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn3 && fn3.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn3 ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process2 = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e2) {
                        if (jQuery2.Deferred.exceptionHook) {
                          jQuery2.Deferred.exceptionHook(
                            e2,
                            process2.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e2];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process2();
                    } else {
                      if (jQuery2.Deferred.getErrorHook) {
                        process2.error = jQuery2.Deferred.getErrorHook();
                      } else if (jQuery2.Deferred.getStackHook) {
                        process2.error = jQuery2.Deferred.getStackHook();
                      }
                      window2.setTimeout(process2);
                    }
                  };
                }
                return jQuery2.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery2.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery2.each(tuples, function(i2, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i2][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i2][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
              return function(value) {
                resolveContexts[i3] = this;
                resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i2)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) {
                return primary.then();
              }
            }
            while (i2--) {
              adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery2.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery2.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery2.Deferred();
        jQuery2.fn.ready = function(fn3) {
          readyList.then(fn3).catch(function(error) {
            jQuery2.readyException(error);
          });
          return this;
        };
        jQuery2.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
              return;
            }
            jQuery2.isReady = true;
            if (wait !== true && --jQuery2.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery2]);
          }
        });
        jQuery2.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery2.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery2.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn3, key, value, chainable, emptyGet, raw) {
          var i2 = 0, len = elems.length, bulk = key == null;
          if (toType2(key) === "object") {
            chainable = true;
            for (i2 in key) {
              access(elems, fn3, i2, key[i2], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn3.call(elems, value);
                fn3 = null;
              } else {
                bulk = fn3;
                fn3 = function(elem, _key, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn3) {
              for (; i2 < len; i2++) {
                fn3(
                  elems[i2],
                  key,
                  raw ? value : value.call(elems[i2], i2, fn3(elems[i2], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn3.call(elems);
          }
          return len ? fn3(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data2() {
          this.expando = jQuery2.expando + Data2.uid++;
        }
        Data2.uid = 1;
        Data2.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i2, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i2 = key.length;
              while (i2--) {
                delete cache[key[i2]];
              }
            }
            if (key === void 0 || jQuery2.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery2.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data2();
        var dataUser = new Data2();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e2) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery2.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery2.fn.extend({
          data: function(key, value) {
            var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i2 = attrs.length;
                  while (i2--) {
                    if (attrs[i2]) {
                      name = attrs[i2].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery2.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn3 = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn3 === "inprogress") {
              fn3 = queue.shift();
              startLength--;
            }
            if (fn3) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn3.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery2.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery2.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery2.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery2.queue(this, type, data);
              jQuery2._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery2.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery2.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i2--) {
              tmp = dataPriv.get(elements[i2], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery2.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery2.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery2.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery2.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery2.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery2.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery2(this).show();
              } else {
                jQuery2(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery2.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i2 = 0, l3 = elems.length;
          for (; i2 < l3; i2++) {
            dataPriv.set(
              elems[i2],
              "globalEval",
              !refElements || dataPriv.get(refElements[i2], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j2, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l3 = elems.length;
          for (; i2 < l3; i2++) {
            elem = elems[i2];
            if (elem || elem === 0) {
              if (toType2(elem) === "object") {
                jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
                j2 = wrap[0];
                while (j2--) {
                  tmp = tmp.lastChild;
                }
                jQuery2.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i2 = 0;
          while (elem = nodes[i2++]) {
            if (selection && jQuery2.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j2 = 0;
              while (elem = tmp[j2++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on2(elem, types, selector, data, fn3, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on2(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn3 == null) {
            fn3 = selector;
            data = selector = void 0;
          } else if (fn3 == null) {
            if (typeof selector === "string") {
              fn3 = data;
              data = void 0;
            } else {
              fn3 = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn3 === false) {
            fn3 = returnFalse;
          } else if (!fn3) {
            return elem;
          }
          if (one === 1) {
            origFn = fn3;
            fn3 = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn3.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn3, data, selector);
          });
        }
        jQuery2.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery2.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery2.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e2) {
                return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e2.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery2.event.special[type] || {};
              handleObj = jQuery2.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery2.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j2, origCount, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery2.event.remove(elem, type + types[t2], handler, selector, true);
                }
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j2 = handlers.length;
              while (j2--) {
                handleObj = handlers[j2];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j2, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery2.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery2.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i2, j2, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
            args[0] = event;
            for (i2 = 1; i2 < arguments.length; i2++) {
              args[i2] = arguments[i2];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
            i2 = 0;
            while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j2 = 0;
              while ((handleObj = matched.handlers[j2++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i2 = 0; i2 < delegateCount; i2++) {
                    handleObj = handlers[i2];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery2.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery2.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery2.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery2.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery2.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery2.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery2.Event = function(src, props) {
          if (!(this instanceof jQuery2.Event)) {
            return new jQuery2.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery2.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery2.expando] = true;
        };
        jQuery2.Event.prototype = {
          constructor: jQuery2.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e2 = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.preventDefault();
            }
          },
          stopPropagation: function() {
            var e2 = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e2 = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery2.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery2.event.addProp);
        jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery2.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery2.event.fix(nativeEvent)
              );
            }
          }
          jQuery2.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery2.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery2.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery2.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery2.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery2.fn.extend({
          on: function(types, selector, data, fn3) {
            return on2(this, types, selector, data, fn3);
          },
          one: function(types, selector, data, fn3) {
            return on2(this, types, selector, data, fn3, 1);
          },
          off: function(types, selector, fn3) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery2(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn3 = selector;
              selector = void 0;
            }
            if (fn3 === false) {
              fn3 = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn3, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery2(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i2, l3, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i2 = 0, l3 = events[type].length; i2 < l3; i2++) {
                  jQuery2.event.add(dest, type, events[type][i2]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery2.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l3 = collection.length, iNoClone = l3 - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l3 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l3) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i2 < l3; i2++) {
                node = fragment;
                if (i2 !== iNoClone) {
                  node = jQuery2.clone(node, true, true);
                  if (hasScripts) {
                    jQuery2.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i2], node, i2);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery2.map(scripts, restoreScript);
                for (i2 = 0; i2 < hasScripts; i2++) {
                  node = scripts[i2];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery2._evalUrl && !node.noModule) {
                        jQuery2._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
          for (; (node = nodes[i2]) != null; i2++) {
            if (!keepData && node.nodeType === 1) {
              jQuery2.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery2.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i2, l3, srcElements, destElements, clone3 = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
              destElements = getAll(clone3);
              srcElements = getAll(elem);
              for (i2 = 0, l3 = srcElements.length; i2 < l3; i2++) {
                fixInput(srcElements[i2], destElements[i2]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone3);
                for (i2 = 0, l3 = srcElements.length; i2 < l3; i2++) {
                  cloneCopyEvent(srcElements[i2], destElements[i2]);
                }
              } else {
                cloneCopyEvent(elem, clone3);
              }
            }
            destElements = getAll(clone3, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone3;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery2.event.special, i2 = 0;
            for (; (elem = elems[i2]) !== void 0; i2++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery2.event.remove(elem, type);
                      } else {
                        jQuery2.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery2.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i2 = 0;
            for (; (elem = this[i2]) != null; i2++) {
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i2 = 0, l3 = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery2.htmlPrefilter(value2);
                try {
                  for (; i2 < l3; i2++) {
                    elem = this[i2] || {};
                    if (elem.nodeType === 1) {
                      jQuery2.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e2) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery2.inArray(this, ignored) < 0) {
                jQuery2.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery2.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery2.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
            for (; i2 <= last; i2++) {
              elems = i2 === last ? this : this.clone(true);
              jQuery2(insert[i2])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery2.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr2, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr2 = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr2.style.cssText = "box-sizing:content-box;border:1px solid";
                tr2.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr2).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr2);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr2.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery2.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
          while (i2--) {
            name = cssPrefixes[i2] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery2.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i2 < 4; i2 += 2) {
            if (box === "margin") {
              marginDelta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              if (box !== "padding") {
                delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              } else {
                extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery2.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery2.each(["height", "width"], function(_i, dimension) {
          jQuery2.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery2.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery2.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery2.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery2.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i2 < 4; i2++) {
                expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery2.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i2 = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i2 < len; i2++) {
                  map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end2, easing) {
          return new Tween.prototype.init(elem, options, prop, end2, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end2, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end2;
            this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery2.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery2.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery2.fx.step[tween.prop]) {
                jQuery2.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery2.easing = {
          linear: function(p2) {
            return p2;
          },
          swing: function(p2) {
            return 0.5 - Math.cos(p2 * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery2.fx = Tween.prototype.init;
        jQuery2.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery2.fx.interval);
            }
            jQuery2.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i2 = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i2 < 4; i2 += 2 - includeWidth) {
            which = cssExpand[i2];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery2._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery2.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
            }
          }
          propTween = !jQuery2.isEmptyObject(props);
          if (!propTween && jQuery2.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery2.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery2.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery2.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery2.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery2.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery2.extend({}, properties),
            opts: jQuery2.extend(true, {
              specialEasing: {},
              easing: jQuery2.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end2) {
              var tween = jQuery2.Tween(
                elem,
                animation.opts,
                prop,
                end2,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery2.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery2.fx.timer(
            jQuery2.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery2.Animation = jQuery2.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery2.speed = function(speed, easing, fn3) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn3 || !fn3 && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn3 && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery2.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery2.fx.speeds) {
                opt.duration = jQuery2.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery2.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery2.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery2.fn.extend({
          fadeTo: function(speed, to2, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to2 }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery2.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery2.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery2.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery2.fn[name];
          jQuery2.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery2.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery2.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery2.timers = [];
        jQuery2.fx.tick = function() {
          var timer, i2 = 0, timers = jQuery2.timers;
          fxNow = Date.now();
          for (; i2 < timers.length; i2++) {
            timer = timers[i2];
            if (!timer() && timers[i2] === timer) {
              timers.splice(i2--, 1);
            }
          }
          if (!timers.length) {
            jQuery2.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery2.fx.timer = function(timer) {
          jQuery2.timers.push(timer);
          jQuery2.fx.start();
        };
        jQuery2.fx.interval = 13;
        jQuery2.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery2.fx.stop = function() {
          inProgress = null;
        };
        jQuery2.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery2.fn.delay = function(time, type) {
          time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery2.expr.attrHandle;
        jQuery2.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery2.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery2.removeAttr(this, name);
            });
          }
        });
        jQuery2.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery2.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery2.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery2.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i2++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery2.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery2.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery2.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery2.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery2.propFix[name] || name];
            });
          }
        });
        jQuery2.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = jQuery2.propFix[name] || name;
              hooks = jQuery2.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery2.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery2.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery2.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery2.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery2.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i2, finalValue;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i2, finalValue;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i2, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i3) {
                jQuery2(this).toggleClass(
                  value.call(this, i3, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self2 = jQuery2(this);
                for (i2 = 0; i2 < classNames.length; i2++) {
                  className = classNames[i2];
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i2 = 0;
            className = " " + selector + " ";
            while (elem = this[i2++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery2.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i2) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i2, jQuery2(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery2.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery2.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery2.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery2.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
                if (index < 0) {
                  i2 = max2;
                } else {
                  i2 = one ? index : 0;
                }
                for (; i2 < max2; i2++) {
                  option = options[i2];
                  if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery2(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
                while (i2--) {
                  option = options[i2];
                  if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery2.each(["radio", "checkbox"], function() {
          jQuery2.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery2.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery2.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e2) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
          e2.stopPropagation();
        };
        jQuery2.extend(jQuery2.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery2.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery2.makeArray(data, [event]);
            special = jQuery2.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i2 = 0;
            while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i2 > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery2.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery2.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e2 = jQuery2.extend(
              new jQuery2.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery2.event.trigger(e2, null, elem);
          }
        });
        jQuery2.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery2.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery2.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery2.each(obj, function(i2, v2) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v2);
              } else {
                buildParams(
                  prefix + "[" + (typeof v2 === "object" && v2 != null ? i2 : "") + "]",
                  v2,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType2(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery2.param = function(a2, traditional) {
          var prefix, s3 = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s3[s3.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a2 == null) {
            return "";
          }
          if (Array.isArray(a2) || a2.jquery && !jQuery2.isPlainObject(a2)) {
            jQuery2.each(a2, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a2) {
              buildParams(prefix, a2[prefix], traditional, add);
            }
          }
          return s3.join("&");
        };
        jQuery2.fn.extend({
          serialize: function() {
            return jQuery2.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery2.prop(this, "elements");
              return elements ? jQuery2.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery2(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery2.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i2++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery2.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery2.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s3, jqXHR, responses) {
          var ct2, type, finalDataType, firstDataType, contents = s3.contents, dataTypes = s3.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct2 === void 0) {
              ct2 = s3.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct2) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct2)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s3.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s3, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s3.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s3.converters) {
              converters[conv.toLowerCase()] = s3.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s3.responseFields[current]) {
              jqXHR[s3.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s3.dataFilter) {
              response = s3.dataFilter(response, s3.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s3.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e2) {
                      return {
                        state: "parsererror",
                        error: conv ? e2 : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery2.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery2.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery2.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s3 = jQuery2.ajaxSetup({}, options), callbackContext = s3.context || s3, globalEventContext = s3.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s3.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match2;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match2 = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match2[1].toLowerCase() + " "] = (responseHeaders[match2[1].toLowerCase() + " "] || []).concat(match2[2]);
                    }
                  }
                  match2 = responseHeaders[key.toLowerCase() + " "];
                }
                return match2 == null ? null : match2.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s3.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s3.url = ((url || s3.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s3.type = options.method || options.type || s3.method || s3.type;
            s3.dataTypes = (s3.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s3.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s3.url;
                urlAnchor.href = urlAnchor.href;
                s3.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e2) {
                s3.crossDomain = true;
              }
            }
            if (s3.data && s3.processData && typeof s3.data !== "string") {
              s3.data = jQuery2.param(s3.data, s3.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s3, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery2.event && s3.global;
            if (fireGlobals && jQuery2.active++ === 0) {
              jQuery2.event.trigger("ajaxStart");
            }
            s3.type = s3.type.toUpperCase();
            s3.hasContent = !rnoContent.test(s3.type);
            cacheURL = s3.url.replace(rhash, "");
            if (!s3.hasContent) {
              uncached = s3.url.slice(cacheURL.length);
              if (s3.data && (s3.processData || typeof s3.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s3.data;
                delete s3.data;
              }
              if (s3.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s3.url = cacheURL + uncached;
            } else if (s3.data && s3.processData && (s3.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s3.data = s3.data.replace(r20, "+");
            }
            if (s3.ifModified) {
              if (jQuery2.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
              }
              if (jQuery2.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
              }
            }
            if (s3.data && s3.hasContent && s3.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s3.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s3.dataTypes[0] && s3.accepts[s3.dataTypes[0]] ? s3.accepts[s3.dataTypes[0]] + (s3.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s3.accepts["*"]
            );
            for (i2 in s3.headers) {
              jqXHR.setRequestHeader(i2, s3.headers[i2]);
            }
            if (s3.beforeSend && (s3.beforeSend.call(callbackContext, jqXHR, s3) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s3.complete);
            jqXHR.done(s3.success);
            jqXHR.fail(s3.error);
            transport = inspectPrefiltersOrTransports(transports, s3, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s3]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s3.async && s3.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s3.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e2) {
                if (completed2) {
                  throw e2;
                }
                done(-1, e2);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s3, jqXHR, responses);
              }
              if (!isSuccess && jQuery2.inArray("script", s3.dataTypes) > -1 && jQuery2.inArray("json", s3.dataTypes) < 0) {
                s3.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s3, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s3.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery2.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery2.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s3.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s3, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s3]);
                if (!--jQuery2.active) {
                  jQuery2.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery2.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery2.get(url, void 0, callback, "script");
          }
        });
        jQuery2.each(["get", "post"], function(_i, method) {
          jQuery2[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery2.ajax(jQuery2.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery2.isPlainObject(url) && url));
          };
        });
        jQuery2.ajaxPrefilter(function(s3) {
          var i2;
          for (i2 in s3.headers) {
            if (i2.toLowerCase() === "content-type") {
              s3.contentType = s3.headers[i2] || "";
            }
          }
        });
        jQuery2._evalUrl = function(url, options, doc) {
          return jQuery2.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery2.globalEval(response, options, doc);
            }
          });
        };
        jQuery2.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i2) {
                jQuery2(this).wrapInner(html.call(this, i2));
              });
            }
            return this.each(function() {
              var self2 = jQuery2(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i2) {
              jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery2(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery2.expr.pseudos.hidden = function(elem) {
          return !jQuery2.expr.pseudos.visible(elem);
        };
        jQuery2.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery2.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery2.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery2.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i2, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i2 in options.xhrFields) {
                    xhr[i2] = options.xhrFields[i2];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i2 in headers) {
                  xhr.setRequestHeader(i2, headers[i2]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e2) {
                  if (callback) {
                    throw e2;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery2.ajaxPrefilter(function(s3) {
          if (s3.crossDomain) {
            s3.contents.script = false;
          }
        });
        jQuery2.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery2.globalEval(text);
              return text;
            }
          }
        });
        jQuery2.ajaxPrefilter("script", function(s3) {
          if (s3.cache === void 0) {
            s3.cache = false;
          }
          if (s3.crossDomain) {
            s3.type = "GET";
          }
        });
        jQuery2.ajaxTransport("script", function(s3) {
          if (s3.crossDomain || s3.scriptAttrs) {
            var script, callback;
            return {
              send: function(_2, complete) {
                script = jQuery2("<script>").attr(s3.scriptAttrs || {}).prop({ charset: s3.scriptCharset, src: s3.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery2.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery2.ajaxPrefilter("json jsonp", function(s3, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s3.jsonp !== false && (rjsonp.test(s3.url) ? "url" : typeof s3.data === "string" && (s3.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s3.data) && "data");
          if (jsonProp || s3.dataTypes[0] === "jsonp") {
            callbackName = s3.jsonpCallback = isFunction(s3.jsonpCallback) ? s3.jsonpCallback() : s3.jsonpCallback;
            if (jsonProp) {
              s3[jsonProp] = s3[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s3.jsonp !== false) {
              s3.url += (rquery.test(s3.url) ? "&" : "?") + s3.jsonp + "=" + callbackName;
            }
            s3.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery2.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s3.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery2(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s3[callbackName]) {
                s3.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery2.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery2(scripts).remove();
          }
          return jQuery2.merge([], parsed.childNodes);
        };
        jQuery2.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery2.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery2.expr.pseudos.animated = function(elem) {
          return jQuery2.grep(jQuery2.timers, function(fn3) {
            return elem === fn3.elem;
          }).length;
        };
        jQuery2.offset = {
          setOffset: function(elem, options, i2) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery2.css(elem, "top");
            curCSSLeft = jQuery2.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i2, jQuery2.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery2.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i2) {
                jQuery2.offset.setOffset(this, options, i2);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset3, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery2.css(elem, "position") === "fixed") {
              offset3 = elem.getBoundingClientRect();
            } else {
              offset3 = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery2(offsetParent).offset();
                parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset3.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset3.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top2 = "pageYOffset" === prop;
          jQuery2.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top2 ? val2 : win.pageXOffset,
                  top2 ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery2.each(["top", "left"], function(_i, prop) {
          jQuery2.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery2.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery2.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery2.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery2.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery2.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery2.fn[type] = function(fn3) {
            return this.on(type, fn3);
          };
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn3) {
            return this.on(types, null, data, fn3);
          },
          unbind: function(types, fn3) {
            return this.off(types, null, fn3);
          },
          delegate: function(selector, types, data, fn3) {
            return this.on(types, selector, data, fn3);
          },
          undelegate: function(selector, types, fn3) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn3);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery2.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery2.fn[name] = function(data, fn3) {
              return arguments.length > 0 ? this.on(name, null, data, fn3) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery2.proxy = function(fn3, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn3[context];
            context = fn3;
            fn3 = tmp;
          }
          if (!isFunction(fn3)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn3.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn3.guid = fn3.guid || jQuery2.guid++;
          return proxy;
        };
        jQuery2.holdReady = function(hold) {
          if (hold) {
            jQuery2.readyWait++;
          } else {
            jQuery2.ready(true);
          }
        };
        jQuery2.isArray = Array.isArray;
        jQuery2.parseJSON = JSON.parse;
        jQuery2.nodeName = nodeName;
        jQuery2.isFunction = isFunction;
        jQuery2.isWindow = isWindow;
        jQuery2.camelCase = camelCase;
        jQuery2.type = toType2;
        jQuery2.now = Date.now;
        jQuery2.isNumeric = function(obj) {
          var type = jQuery2.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery2.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery2;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery2.noConflict = function(deep) {
          if (window2.$ === jQuery2) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery2) {
            window2.jQuery = _jQuery;
          }
          return jQuery2;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery2;
        }
        return jQuery2;
      });
    }
  });

  // js/docs.js
  var import_prism_min = __toESM(require_prism_min());

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y2,
      right: x2 + width,
      bottom: y2 + height,
      left: x2,
      x: x2,
      y: y2
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v2 = within(min2, value, max2);
    return v2 > max2 ? max2 : v2;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset3 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x2 = _ref.x, y2 = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x2 * dpr) / dpr || 0,
      y: round(y2 * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x: x2,
      y: y2
    }) : {
      x: x2,
      y: y2
    };
    x2 = _ref3.x;
    y2 = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y2 -= offsetY - popperRect.height;
        y2 *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x2 -= offsetX - popperRect.width;
        x2 *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x2,
      y: y2
    }, getWindow(popper2)) : {
      x: x2,
      y: y2
    };
    x2 = _ref4.x;
    y2 = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x2 = 0;
    var y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2 + getWindowScrollBarX(element),
      y: y2
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y2 = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset3 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset3[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a2, b2) {
      return overflows[a2] - overflows[b2];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i2 = 0; i2 < placements2.length; i2++) {
      var placement = placements2[i2];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset3) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
      placement
    })) : offset3, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset3);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x2;
      state.modifiersData.popperOffsets.y += y2;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset3 = popperOffsets2[mainAxis];
      var min2 = offset3 + overflow[mainSide];
      var max2 = offset3 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset3 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset3, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset3;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn3) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn3());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m2) {
            return m2.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn3 === "function") {
              state = fn3({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn3) {
          return fn3();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match2, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $2 = getjQuery();
      if ($2) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $2.fn[name];
        $2.fn[name] = plugin.jQueryInterface;
        $2.fn[name].Constructor = plugin;
        $2.fn[name].noConflict = () => {
          $2.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn3) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn3);
      }
      return fn3.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn3) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn3);
          }
          return fn3.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn4) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn4.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn3 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn3.delegationSelector = isDelegated ? handler : null;
    fn3.callable = callable;
    fn3.oneOff = oneOff;
    fn3.uidEvent = uid;
    handlers[uid] = fn3;
    element.addEventListener(typeEvent, fn3, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn3 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn3) {
      return;
    }
    element.removeEventListener(typeEvent, fn3, Boolean(delegationSelector));
    delete events[typeEvent][fn3.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $2 = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $2) {
        jQueryEvent = $2.Event(event, args);
        $2(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), typeof jsonConfig === "object" ? jsonConfig : {}), isElement2(element) ? Manipulator.getDataAttributes(element) : {}), typeof config === "object" ? config : {});
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.3";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset3
      } = this._config;
      if (typeof offset3 === "string") {
        return offset3.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset3 === "function") {
        return (popperData) => offset3(popperData, this._element);
      }
      return offset3;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = __spreadValues(__spreadValues({}, this._config.content), content);
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
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
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory(__spreadProps(__spreadValues({}, this._config), {
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }));
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset3
      } = this._config;
      if (typeof offset3 === "string") {
        return offset3.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset3 === "function") {
        return (popperData) => offset3(popperData, this._element);
      }
      return offset3;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = __spreadValues(__spreadValues({}, dataAttributes), typeof config === "object" && config ? config : {});
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = __spreadProps(__spreadValues({}, Tooltip.Default), {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  });
  var DefaultType$2 = __spreadProps(__spreadValues({}, Tooltip.DefaultType), {
    content: "(null|string|element|function)"
  });
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);

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
    for (let i2 = 0; i2 < formatted.length; i2++) {
      const { type, value } = formatted[i2];
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
     * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
     * @return {boolean}
     */
    static isValidSpecifier(s3) {
      return this.isValidZone(s3);
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
      } catch (e2) {
        return false;
      }
    }
    constructor(name) {
      super();
      this.zoneName = name;
      this.valid = _IANAZone.isValidZone(name);
    }
    /** @override **/
    get type() {
      return "iana";
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
    offsetName(ts, { format, locale }) {
      return parseZoneInfo(ts, format, locale, this.name);
    }
    /** @override **/
    formatOffset(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /** @override **/
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
    /** @override **/
    equals(otherZone) {
      return otherZone.type === "iana" && otherZone.name === this.name;
    }
    /** @override **/
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
      } catch (e2) {
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
  function mapMonths(f2) {
    const ms = [];
    for (let i2 = 1; i2 <= 12; i2++) {
      const dt2 = DateTime.utc(2009, i2, 1);
      ms.push(f2(dt2));
    }
    return ms;
  }
  function mapWeekdays(f2) {
    const ms = [];
    for (let i2 = 1; i2 <= 7; i2++) {
      const dt2 = DateTime.utc(2016, 11, 13 + i2);
      ms.push(f2(dt2));
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
    format(i2) {
      if (this.inf) {
        const fixed = this.floor ? Math.floor(i2) : i2;
        return this.inf.format(fixed);
      } else {
        const fixed = this.floor ? Math.floor(i2) : roundTo(i2, 3);
        return padStart(fixed, this.padTo);
      }
    }
  };
  var PolyDateFormatter = class {
    constructor(dt2, intl, opts) {
      this.opts = opts;
      this.originalZone = void 0;
      let z2 = void 0;
      if (this.opts.timeZone) {
        this.dt = dt2;
      } else if (dt2.zone.type === "fixed") {
        const gmtOffset = -1 * (dt2.offset / 60);
        const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
        if (dt2.offset !== 0 && IANAZone.create(offsetZ).valid) {
          z2 = offsetZ;
          this.dt = dt2;
        } else {
          z2 = "UTC";
          this.dt = dt2.offset === 0 ? dt2 : dt2.setZone("UTC").plus({ minutes: dt2.offset });
          this.originalZone = dt2.zone;
        }
      } else if (dt2.zone.type === "system") {
        this.dt = dt2;
      } else if (dt2.zone.type === "iana") {
        this.dt = dt2;
        z2 = dt2.zone.name;
      } else {
        z2 = "UTC";
        this.dt = dt2.setZone("UTC").plus({ minutes: dt2.offset });
        this.originalZone = dt2.zone;
      }
      const intlOpts = __spreadValues({}, this.opts);
      intlOpts.timeZone = intlOpts.timeZone || z2;
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
          this.monthsCache[formatStr][length] = mapMonths((dt2) => this.extract(dt2, intl, "month"));
        }
        return this.monthsCache[formatStr][length];
      });
    }
    weekdays(length, format = false) {
      return listStuff(this, length, weekdays, () => {
        const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
        if (!this.weekdaysCache[formatStr][length]) {
          this.weekdaysCache[formatStr][length] = mapWeekdays(
            (dt2) => this.extract(dt2, intl, "weekday")
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
              (dt2) => this.extract(dt2, intl, "dayperiod")
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
            (dt2) => this.extract(dt2, intl, "era")
          );
        }
        return this.eraCache[length];
      });
    }
    extract(dt2, intlOpts, field) {
      const df = this.dtFormatter(dt2, intlOpts), results = df.formatToParts(), matching = results.find((m2) => m2.type.toLowerCase() === field);
      return matching ? matching.value : null;
    }
    numberFormatter(opts = {}) {
      return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
    dtFormatter(dt2, intlOpts = {}) {
      return new PolyDateFormatter(dt2, this.intl, intlOpts);
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
    static instance(offset3) {
      return offset3 === 0 ? _FixedOffsetZone.utcInstance : new _FixedOffsetZone(offset3);
    }
    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
    static parseSpecifier(s3) {
      if (s3) {
        const r2 = s3.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r2) {
          return new _FixedOffsetZone(signedOffset(r2[1], r2[2]));
        }
      }
      return null;
    }
    constructor(offset3) {
      super();
      this.fixed = offset3;
    }
    /** @override **/
    get type() {
      return "fixed";
    }
    /** @override **/
    get name() {
      return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
    }
    get ianaName() {
      if (this.fixed === 0) {
        return "Etc/UTC";
      } else {
        return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
      }
    }
    /** @override **/
    offsetName() {
      return this.name;
    }
    /** @override **/
    formatOffset(ts, format) {
      return formatOffset(this.fixed, format);
    }
    /** @override **/
    get isUniversal() {
      return true;
    }
    /** @override **/
    offset() {
      return this.fixed;
    }
    /** @override **/
    equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
    /** @override **/
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
    let offset3;
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
    static set now(n3) {
      now = n3;
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
     * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
     * @type {number}
     */
    static get twoDigitCutoffYear() {
      return twoDigitCutoffYear;
    }
    /**
     * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
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
    static set throwOnInvalid(t2) {
      throwOnInvalid = t2;
    }
    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCaches() {
      Locale.resetCache();
      IANAZone.resetCache();
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
    const d2 = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) {
      d2.setUTCFullYear(d2.getUTCFullYear() - 1900);
    }
    const js = d2.getUTCDay();
    return js === 0 ? 7 : js;
  }
  function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
  }
  function uncomputeOrdinal(year, ordinal) {
    const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i2) => i2 < ordinal), day = ordinal - table[month0];
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
  function isUndefined(o2) {
    return typeof o2 === "undefined";
  }
  function isNumber(o2) {
    return typeof o2 === "number";
  }
  function isInteger(o2) {
    return typeof o2 === "number" && o2 % 1 === 0;
  }
  function isString(o2) {
    return typeof o2 === "string";
  }
  function isDate(o2) {
    return Object.prototype.toString.call(o2) === "[object Date]";
  }
  function hasRelative() {
    try {
      return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e2) {
      return false;
    }
  }
  function hasLocaleWeekInfo() {
    try {
      return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch (e2) {
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
    return keys.reduce((a2, k2) => {
      a2[k2] = obj[k2];
      return a2;
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
      if (!integerBetween(settings.firstDay, 1, 7) || !integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some((v2) => !integerBetween(v2, 1, 7))) {
        throw new InvalidArgumentError("Invalid week settings");
      }
      return {
        firstDay: settings.firstDay,
        minimalDays: settings.minimalDays,
        weekend: Array.from(settings.weekend)
      };
    }
  }
  function integerBetween(thing, bottom2, top2) {
    return isInteger(thing) && thing >= bottom2 && thing <= top2;
  }
  function floorMod(x2, n3) {
    return x2 - n3 * Math.floor(x2 / n3);
  }
  function padStart(input, n3 = 2) {
    const isNeg = input < 0;
    let padded;
    if (isNeg) {
      padded = "-" + ("" + -input).padStart(n3, "0");
    } else {
      padded = ("" + input).padStart(n3, "0");
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
      const f2 = parseFloat("0." + fraction) * 1e3;
      return Math.floor(f2);
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
    let d2 = Date.UTC(
      obj.year,
      obj.month - 1,
      obj.day,
      obj.hour,
      obj.minute,
      obj.second,
      obj.millisecond
    );
    if (obj.year < 100 && obj.year >= 0) {
      d2 = new Date(d2);
      d2.setUTCFullYear(obj.year, obj.month - 1, obj.day);
    }
    return +d2;
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
    const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m2) => m2.type.toLowerCase() === "timezonename");
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
    for (const u2 in obj) {
      if (hasOwnProperty(obj, u2)) {
        const v2 = obj[u2];
        if (v2 === void 0 || v2 === null)
          continue;
        normalized[normalizer(u2)] = asNumber(v2);
      }
    }
    return normalized;
  }
  function formatOffset(offset3, format) {
    const hours = Math.trunc(Math.abs(offset3 / 60)), minutes = Math.trunc(Math.abs(offset3 % 60)), sign = offset3 >= 0 ? "+" : "-";
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
  function meridiemForDateTime(dt2) {
    return meridiems[dt2.hour < 12 ? 0 : 1];
  }
  function weekdayForDateTime(dt2, length) {
    return weekdays(length)[dt2.weekday - 1];
  }
  function monthForDateTime(dt2, length) {
    return months(length)[dt2.month - 1];
  }
  function eraForDateTime(dt2, length) {
    return eras(length)[dt2.year < 0 ? 0 : 1];
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
    let s3 = "";
    for (const token of splits) {
      if (token.literal) {
        s3 += token.val;
      } else {
        s3 += tokenToString(token.val);
      }
    }
    return s3;
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
      for (let i2 = 0; i2 < fmt.length; i2++) {
        const c2 = fmt.charAt(i2);
        if (c2 === "'") {
          if (currentFull.length > 0) {
            splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
          }
          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c2;
        } else if (c2 === current) {
          currentFull += c2;
        } else {
          if (currentFull.length > 0) {
            splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
          }
          currentFull = c2;
          current = c2;
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
    formatWithSystemDefault(dt2, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }
      const df = this.systemLoc.dtFormatter(dt2, __spreadValues(__spreadValues({}, this.opts), opts));
      return df.format();
    }
    dtFormatter(dt2, opts = {}) {
      return this.loc.dtFormatter(dt2, __spreadValues(__spreadValues({}, this.opts), opts));
    }
    formatDateTime(dt2, opts) {
      return this.dtFormatter(dt2, opts).format();
    }
    formatDateTimeParts(dt2, opts) {
      return this.dtFormatter(dt2, opts).formatToParts();
    }
    formatInterval(interval, opts) {
      const df = this.dtFormatter(interval.start, opts);
      return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    }
    resolvedOptions(dt2, opts) {
      return this.dtFormatter(dt2, opts).resolvedOptions();
    }
    num(n3, p2 = 0) {
      if (this.opts.forceSimple) {
        return padStart(n3, p2);
      }
      const opts = __spreadValues({}, this.opts);
      if (p2 > 0) {
        opts.padTo = p2;
      }
      return this.loc.numberFormatter(opts).format(n3);
    }
    formatDateTimeFromString(dt2, fmt) {
      const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt2, opts, extract), formatOffset2 = (opts) => {
        if (dt2.isOffsetFixed && dt2.offset === 0 && opts.allowZ) {
          return "Z";
        }
        return dt2.isValid ? dt2.zone.formatOffset(dt2.ts, opts.format) : "";
      }, meridiem = () => knownEnglish ? meridiemForDateTime(dt2) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt2, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt2, length) : string(
        standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
        "weekday"
      ), maybeMacro = (token) => {
        const formatOpts = _Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt2, formatOpts);
        } else {
          return token;
        }
      }, era = (length) => knownEnglish ? eraForDateTime(dt2, length) : string({ era: length }, "era"), tokenToString = (token) => {
        switch (token) {
          case "S":
            return this.num(dt2.millisecond);
          case "u":
          case "SSS":
            return this.num(dt2.millisecond, 3);
          case "s":
            return this.num(dt2.second);
          case "ss":
            return this.num(dt2.second, 2);
          case "uu":
            return this.num(Math.floor(dt2.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt2.millisecond / 100));
          case "m":
            return this.num(dt2.minute);
          case "mm":
            return this.num(dt2.minute, 2);
          case "h":
            return this.num(dt2.hour % 12 === 0 ? 12 : dt2.hour % 12);
          case "hh":
            return this.num(dt2.hour % 12 === 0 ? 12 : dt2.hour % 12, 2);
          case "H":
            return this.num(dt2.hour);
          case "HH":
            return this.num(dt2.hour, 2);
          case "Z":
            return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return dt2.zone.offsetName(dt2.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            return dt2.zone.offsetName(dt2.ts, { format: "long", locale: this.loc.locale });
          case "z":
            return dt2.zoneName;
          case "a":
            return meridiem();
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt2.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt2.day, 2);
          case "c":
            return this.num(dt2.weekday);
          case "ccc":
            return weekday("short", true);
          case "cccc":
            return weekday("long", true);
          case "ccccc":
            return weekday("narrow", true);
          case "E":
            return this.num(dt2.weekday);
          case "EEE":
            return weekday("short", false);
          case "EEEE":
            return weekday("long", false);
          case "EEEEE":
            return weekday("narrow", false);
          case "L":
            return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt2.month);
          case "LL":
            return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt2.month, 2);
          case "LLL":
            return month("short", true);
          case "LLLL":
            return month("long", true);
          case "LLLLL":
            return month("narrow", true);
          case "M":
            return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt2.month);
          case "MM":
            return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt2.month, 2);
          case "MMM":
            return month("short", false);
          case "MMMM":
            return month("long", false);
          case "MMMMM":
            return month("narrow", false);
          case "y":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt2.year);
          case "yy":
            return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt2.year.toString().slice(-2), 2);
          case "yyyy":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt2.year, 4);
          case "yyyyyy":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt2.year, 6);
          case "G":
            return era("short");
          case "GG":
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt2.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt2.weekYear, 4);
          case "W":
            return this.num(dt2.weekNumber);
          case "WW":
            return this.num(dt2.weekNumber, 2);
          case "n":
            return this.num(dt2.localWeekNumber);
          case "nn":
            return this.num(dt2.localWeekNumber, 2);
          case "ii":
            return this.num(dt2.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(dt2.localWeekYear, 4);
          case "o":
            return this.num(dt2.ordinal);
          case "ooo":
            return this.num(dt2.ordinal, 3);
          case "q":
            return this.num(dt2.quarter);
          case "qq":
            return this.num(dt2.quarter, 2);
          case "X":
            return this.num(Math.floor(dt2.ts / 1e3));
          case "x":
            return this.num(dt2.ts);
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
      ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t2) => t2));
      return stringifyTokens(tokens, tokenToString(collapsed));
    }
  };

  // node_modules/luxon/src/impl/regexParser.js
  var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  function combineRegexes(...regexes) {
    const full = regexes.reduce((f2, r2) => f2 + r2.source, "");
    return RegExp(`^${full}$`);
  }
  function combineExtractors(...extractors) {
    return (m2) => extractors.reduce(
      ([mergedVals, mergedZone, cursor], ex) => {
        const [val, zone, next] = ex(m2, cursor);
        return [__spreadValues(__spreadValues({}, mergedVals), val), zone || mergedZone, next];
      },
      [{}, null, 1]
    ).slice(0, 2);
  }
  function parse(s3, ...patterns) {
    if (s3 == null) {
      return [null, null];
    }
    for (const [regex, extractor] of patterns) {
      const m2 = regex.exec(s3);
      if (m2) {
        return extractor(m2);
      }
    }
    return [null, null];
  }
  function simpleParse(...keys) {
    return (match2, cursor) => {
      const ret = {};
      let i2;
      for (i2 = 0; i2 < keys.length; i2++) {
        ret[keys[i2]] = parseInteger(match2[cursor + i2]);
      }
      return [ret, null, cursor + i2];
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
    const m2 = match2[pos];
    return isUndefined(m2) ? fallback : parseInteger(m2);
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
    const [s3, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
    const hasNegativePrefix = s3[0] === "-";
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
    let offset3;
    if (obsOffset) {
      offset3 = obsOffsets[obsOffset];
    } else if (milOffset) {
      offset3 = 0;
    } else {
      offset3 = signedOffset(offHourStr, offMinuteStr);
    }
    return [result, new FixedOffsetZone(offset3)];
  }
  function preprocessRFC2822(s3) {
    return s3.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
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
  function parseISODate(s3) {
    return parse(
      s3,
      [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
      [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
      [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
      [isoTimeCombinedRegex, extractISOTimeAndOffset]
    );
  }
  function parseRFC2822Date(s3) {
    return parse(preprocessRFC2822(s3), [rfc2822, extractRFC2822]);
  }
  function parseHTTPDate(s3) {
    return parse(
      s3,
      [rfc1123, extractRFC1123Or850],
      [rfc850, extractRFC1123Or850],
      [ascii, extractASCII]
    );
  }
  function parseISODuration(s3) {
    return parse(s3, [isoDuration, extractISODuration]);
  }
  var extractISOTimeOnly = combineExtractors(extractISOTime);
  function parseISOTimeOnly(s3) {
    return parse(s3, [isoTimeOnly, extractISOTimeOnly]);
  }
  var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
  var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
  var extractISOTimeOffsetAndIANAZone = combineExtractors(
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  function parseSQL(s3) {
    return parse(
      s3,
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
    static isDuration(o2) {
      return o2 && o2.isLuxonDuration || false;
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
      const l3 = orderedUnits.map((unit) => {
        const val = this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return this.loc.numberFormatter(__spreadProps(__spreadValues({ style: "unit", unitDisplay: "long" }, opts), { unit: unit.slice(0, -1) })).format(val);
      }).filter((n3) => n3);
      return this.loc.listFormatter(__spreadValues({ type: "conjunction", style: opts.listStyle || "narrow" }, opts)).format(l3);
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
      let s3 = "P";
      if (this.years !== 0)
        s3 += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0)
        s3 += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0)
        s3 += this.weeks + "W";
      if (this.days !== 0)
        s3 += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
        s3 += "T";
      if (this.hours !== 0)
        s3 += this.hours + "H";
      if (this.minutes !== 0)
        s3 += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0)
        s3 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
      if (s3 === "P")
        s3 += "T0S";
      return s3;
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
      for (const k2 of orderedUnits) {
        if (hasOwnProperty(dur.values, k2) || hasOwnProperty(this.values, k2)) {
          result[k2] = dur.get(k2) + this.get(k2);
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
    mapUnits(fn3) {
      if (!this.isValid)
        return this;
      const result = {};
      for (const k2 of Object.keys(this.values)) {
        result[k2] = asNumber(fn3(this.values[k2], k2));
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
      units = units.map((u2) => _Duration.normalizeUnit(u2));
      const built = {}, accumulated = {}, vals = this.toObject();
      let lastUnit;
      for (const k2 of orderedUnits) {
        if (units.indexOf(k2) >= 0) {
          lastUnit = k2;
          let own = 0;
          for (const ak in accumulated) {
            own += this.matrix[ak][k2] * accumulated[ak];
            accumulated[ak] = 0;
          }
          if (isNumber(vals[k2])) {
            own += vals[k2];
          }
          const i2 = Math.trunc(own);
          built[k2] = i2;
          accumulated[k2] = (own * 1e3 - i2 * 1e3) / 1e3;
        } else if (isNumber(vals[k2])) {
          accumulated[k2] = vals[k2];
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
      for (const k2 of Object.keys(this.values)) {
        negated[k2] = this.values[k2] === 0 ? 0 : -this.values[k2];
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
      for (const u2 of orderedUnits) {
        if (!eq(this.values[u2], other.values[u2])) {
          return false;
        }
      }
      return true;
    }
  };

  // node_modules/luxon/src/interval.js
  var INVALID2 = "Invalid Interval";
  function validateStartEnd(start2, end2) {
    if (!start2 || !start2.isValid) {
      return Interval.invalid("missing or invalid start");
    } else if (!end2 || !end2.isValid) {
      return Interval.invalid("missing or invalid end");
    } else if (end2 < start2) {
      return Interval.invalid(
        "end before start",
        `The end of an interval must be after its start, but you had start=${start2.toISO()} and end=${end2.toISO()}`
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
    static fromDateTimes(start2, end2) {
      const builtStart = friendlyDateTime(start2), builtEnd = friendlyDateTime(end2);
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
    static after(start2, duration) {
      const dur = Duration.fromDurationLike(duration), dt2 = friendlyDateTime(start2);
      return _Interval.fromDateTimes(dt2, dt2.plus(dur));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static before(end2, duration) {
      const dur = Duration.fromDurationLike(duration), dt2 = friendlyDateTime(end2);
      return _Interval.fromDateTimes(dt2.minus(dur), dt2);
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
      const [s3, e2] = (text || "").split("/", 2);
      if (s3 && e2) {
        let start2, startIsValid;
        try {
          start2 = DateTime.fromISO(s3, opts);
          startIsValid = start2.isValid;
        } catch (e3) {
          startIsValid = false;
        }
        let end2, endIsValid;
        try {
          end2 = DateTime.fromISO(e2, opts);
          endIsValid = end2.isValid;
        } catch (e3) {
          endIsValid = false;
        }
        if (startIsValid && endIsValid) {
          return _Interval.fromDateTimes(start2, end2);
        }
        if (startIsValid) {
          const dur = Duration.fromISO(e2, opts);
          if (dur.isValid) {
            return _Interval.after(start2, dur);
          }
        } else if (endIsValid) {
          const dur = Duration.fromISO(s3, opts);
          if (dur.isValid) {
            return _Interval.before(end2, dur);
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
    static isInterval(o2) {
      return o2 && o2.isLuxonInterval || false;
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
      const start2 = this.start.startOf(unit, opts);
      let end2;
      if (opts == null ? void 0 : opts.useLocaleWeeks) {
        end2 = this.end.reconfigure({ locale: start2.locale });
      } else {
        end2 = this.end;
      }
      end2 = end2.startOf(unit, opts);
      return Math.floor(end2.diff(start2, unit).get(unit)) + (end2.valueOf() !== this.end.valueOf());
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
    set({ start: start2, end: end2 } = {}) {
      if (!this.isValid)
        return this;
      return _Interval.fromDateTimes(start2 || this.s, end2 || this.e);
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
    splitAt(...dateTimes) {
      if (!this.isValid)
        return [];
      const sorted = dateTimes.map(friendlyDateTime).filter((d2) => this.contains(d2)).sort((a2, b2) => a2.toMillis() - b2.toMillis()), results = [];
      let { s: s3 } = this, i2 = 0;
      while (s3 < this.e) {
        const added = sorted[i2] || this.e, next = +added > +this.e ? this.e : added;
        results.push(_Interval.fromDateTimes(s3, next));
        s3 = next;
        i2 += 1;
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
      let { s: s3 } = this, idx = 1, next;
      const results = [];
      while (s3 < this.e) {
        const added = this.start.plus(dur.mapUnits((x2) => x2 * idx));
        next = +added > +this.e ? this.e : added;
        results.push(_Interval.fromDateTimes(s3, next));
        s3 = next;
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
     * Return whether this Interval engulfs the start and end of the specified Interval.
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
      const s3 = this.s > other.s ? this.s : other.s, e2 = this.e < other.e ? this.e : other.e;
      if (s3 >= e2) {
        return null;
      } else {
        return _Interval.fromDateTimes(s3, e2);
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
      const s3 = this.s < other.s ? this.s : other.s, e2 = this.e > other.e ? this.e : other.e;
      return _Interval.fromDateTimes(s3, e2);
    }
    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
    static merge(intervals) {
      const [found, final] = intervals.sort((a2, b2) => a2.s - b2.s).reduce(
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
      let start2 = null, currentCount = 0;
      const results = [], ends = intervals.map((i2) => [
        { time: i2.s, type: "s" },
        { time: i2.e, type: "e" }
      ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a2, b2) => a2.time - b2.time);
      for (const i2 of arr) {
        currentCount += i2.type === "s" ? 1 : -1;
        if (currentCount === 1) {
          start2 = i2.time;
        } else {
          if (start2 && +start2 !== +i2.time) {
            results.push(_Interval.fromDateTimes(start2, i2.time));
          }
          start2 = null;
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
      return _Interval.xor([this].concat(intervals)).map((i2) => this.intersection(i2)).filter((i2) => i2 && !i2.isEmpty());
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
    const utcDayStart = (dt2) => dt2.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
  }
  function highOrderDiffs(cursor, later, units) {
    const differs = [
      ["years", (a2, b2) => b2.year - a2.year],
      ["quarters", (a2, b2) => b2.quarter - a2.quarter + (b2.year - a2.year) * 4],
      ["months", (a2, b2) => b2.month - a2.month + (b2.year - a2.year) * 12],
      [
        "weeks",
        (a2, b2) => {
          const days = dayDiff(a2, b2);
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
      (u2) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u2) >= 0
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
      for (let i2 = 0; i2 < str.length; i2++) {
        const code = str.charCodeAt(i2);
        if (str[i2].search(numberingSystems.hanidec) !== -1) {
          value += hanidecChars.indexOf(str[i2]);
        } else {
          for (const key in numberingSystemsUTF16) {
            const [min2, max2] = numberingSystemsUTF16[key];
            if (code >= min2 && code <= max2) {
              value += code - min2;
            }
          }
        }
      }
      return parseInt(value, 10);
    } else {
      return value;
    }
  }
  function digitRegex({ numberingSystem }, append = "") {
    return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
  }

  // node_modules/luxon/src/impl/tokenParser.js
  var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
  function intUnit(regex, post = (i2) => i2) {
    return { regex, deser: ([s3]) => post(parseDigits(s3)) };
  }
  var NBSP = String.fromCharCode(160);
  var spaceOrNBSP = `[ ${NBSP}]`;
  var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
  function fixListRegex(s3) {
    return s3.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
  }
  function stripInsensitivities(s3) {
    return s3.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
  }
  function oneOf(strings, startIndex) {
    if (strings === null) {
      return null;
    } else {
      return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: ([s3]) => strings.findIndex((i2) => stripInsensitivities(s3) === stripInsensitivities(i2)) + startIndex
      };
    }
  }
  function offset2(regex, groups) {
    return { regex, deser: ([, h2, m2]) => signedOffset(h2, m2), groups };
  }
  function simple(regex) {
    return { regex, deser: ([s3]) => s3 };
  }
  function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function unitForToken(token, loc) {
    const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t2) => ({ regex: RegExp(escapeToken(t2.val)), deser: ([s3]) => s3, literal: true }), unitate = (t2) => {
      if (token.literal) {
        return literal(t2);
      }
      switch (t2.val) {
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
          return offset2(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset2(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal(t2);
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
    const re2 = units.map((u2) => u2.regex).reduce((f2, r2) => `${f2}(${r2.source})`, "");
    return [`^${re2}$`, units];
  }
  function match(input, regex, handlers) {
    const matches = input.match(regex);
    if (matches) {
      const all = {};
      let matchIndex = 1;
      for (const i2 in handlers) {
        if (hasOwnProperty(handlers, i2)) {
          const h2 = handlers[i2], groups = h2.groups ? h2.groups + 1 : 1;
          if (!h2.literal && h2.token) {
            all[h2.token.val[0]] = h2.deser(matches.slice(matchIndex, matchIndex + groups));
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
    const vals = Object.keys(matches).reduce((r2, k2) => {
      const f2 = toField(k2);
      if (f2) {
        r2[f2] = matches[k2];
      }
      return r2;
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
    return Array.prototype.concat(...tokens.map((t2) => maybeExpandMacroToken(t2, locale)));
  }
  function explainFromTokens(locale, input, format) {
    const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t2) => unitForToken(t2, locale)), disqualifyingUnit = units.find((t2) => t2.invalidReason);
    if (disqualifyingUnit) {
      return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
    } else {
      const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
      if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
        throw new ConflictingSpecificationError(
          "Can't include meridiem when specifying 24-hour format"
        );
      }
      return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
    }
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
    return parts.map((p2) => tokenForPart(p2, formatOpts, resolvedOpts));
  }

  // node_modules/luxon/src/datetime.js
  var INVALID3 = "Invalid DateTime";
  var MAX_DATE = 864e13;
  function unsupportedZone(zone) {
    return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
  }
  function possiblyCachedWeekData(dt2) {
    if (dt2.weekData === null) {
      dt2.weekData = gregorianToWeek(dt2.c);
    }
    return dt2.weekData;
  }
  function possiblyCachedLocalWeekData(dt2) {
    if (dt2.localWeekData === null) {
      dt2.localWeekData = gregorianToWeek(
        dt2.c,
        dt2.loc.getMinDaysInFirstWeek(),
        dt2.loc.getStartOfWeek()
      );
    }
    return dt2.localWeekData;
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
  function fixOffset(localTS, o2, tz) {
    let utcGuess = localTS - o2 * 60 * 1e3;
    const o22 = tz.offset(utcGuess);
    if (o2 === o22) {
      return [utcGuess, o2];
    }
    utcGuess -= (o22 - o2) * 60 * 1e3;
    const o3 = tz.offset(utcGuess);
    if (o22 === o3) {
      return [utcGuess, o22];
    }
    return [localTS - Math.min(o22, o3) * 60 * 1e3, Math.max(o22, o3)];
  }
  function tsToObj(ts, offset3) {
    ts += offset3 * 60 * 1e3;
    const d2 = new Date(ts);
    return {
      year: d2.getUTCFullYear(),
      month: d2.getUTCMonth() + 1,
      day: d2.getUTCDate(),
      hour: d2.getUTCHours(),
      minute: d2.getUTCMinutes(),
      second: d2.getUTCSeconds(),
      millisecond: d2.getUTCMilliseconds()
    };
  }
  function objToTS(obj, offset3, zone) {
    return fixOffset(objToLocalTS(obj), offset3, zone);
  }
  function adjustTime(inst, dur) {
    const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c2 = __spreadProps(__spreadValues({}, inst.c), {
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
    }).as("milliseconds"), localTS = objToLocalTS(c2);
    let [ts, o2] = fixOffset(localTS, oPre, inst.zone);
    if (millisToAdd !== 0) {
      ts += millisToAdd;
      o2 = inst.zone.offset(ts);
    }
    return { ts, o: o2 };
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
  function toTechFormat(dt2, format, allowZ = true) {
    return dt2.isValid ? Formatter.create(Locale.create("en-US"), {
      allowZ,
      forceSimple: true
    }).formatDateTimeFromString(dt2, format) : null;
  }
  function toISODate(o2, extended) {
    const longFormat = o2.c.year > 9999 || o2.c.year < 0;
    let c2 = "";
    if (longFormat && o2.c.year >= 0)
      c2 += "+";
    c2 += padStart(o2.c.year, longFormat ? 6 : 4);
    if (extended) {
      c2 += "-";
      c2 += padStart(o2.c.month);
      c2 += "-";
      c2 += padStart(o2.c.day);
    } else {
      c2 += padStart(o2.c.month);
      c2 += padStart(o2.c.day);
    }
    return c2;
  }
  function toISOTime(o2, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    let c2 = padStart(o2.c.hour);
    if (extended) {
      c2 += ":";
      c2 += padStart(o2.c.minute);
      if (o2.c.millisecond !== 0 || o2.c.second !== 0 || !suppressSeconds) {
        c2 += ":";
      }
    } else {
      c2 += padStart(o2.c.minute);
    }
    if (o2.c.millisecond !== 0 || o2.c.second !== 0 || !suppressSeconds) {
      c2 += padStart(o2.c.second);
      if (o2.c.millisecond !== 0 || !suppressMilliseconds) {
        c2 += ".";
        c2 += padStart(o2.c.millisecond, 3);
      }
    }
    if (includeOffset) {
      if (o2.isOffsetFixed && o2.offset === 0 && !extendedZone) {
        c2 += "Z";
      } else if (o2.o < 0) {
        c2 += "-";
        c2 += padStart(Math.trunc(-o2.o / 60));
        c2 += ":";
        c2 += padStart(Math.trunc(-o2.o % 60));
      } else {
        c2 += "+";
        c2 += padStart(Math.trunc(o2.o / 60));
        c2 += ":";
        c2 += padStart(Math.trunc(o2.o % 60));
      }
    }
    if (extendedZone) {
      c2 += "[" + o2.zone.ianaName + "]";
    }
    return c2;
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
  function quickDT(obj, opts) {
    const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
    let ts, o2;
    if (!isUndefined(obj.year)) {
      for (const u2 of orderedUnits2) {
        if (isUndefined(obj[u2])) {
          obj[u2] = defaultUnitValues[u2];
        }
      }
      const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
      if (invalid) {
        return DateTime.invalid(invalid);
      }
      const offsetProvis = zone.offset(tsNow);
      [ts, o2] = objToTS(obj, offsetProvis, zone);
    } else {
      ts = tsNow;
    }
    return new DateTime({ ts, zone, loc, o: o2 });
  }
  function diffRelative(start2, end2, opts) {
    const round2 = isUndefined(opts.round) ? true : opts.round, format = (c2, unit) => {
      c2 = roundTo(c2, round2 || opts.calendary ? 0 : 2, true);
      const formatter = end2.loc.clone(opts).relFormatter(opts);
      return formatter.format(c2, unit);
    }, differ = (unit) => {
      if (opts.calendary) {
        if (!end2.hasSame(start2, unit)) {
          return end2.startOf(unit).diff(start2.startOf(unit), unit).get(unit);
        } else
          return 0;
      } else {
        return end2.diff(start2, unit).get(unit);
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
    return format(start2 > end2 ? -0 : 0, opts.units[opts.units.length - 1]);
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
  var DateTime = class _DateTime {
    /**
     * @access private
     */
    constructor(config) {
      const zone = config.zone || Settings.defaultZone;
      let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
      this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
      let c2 = null, o2 = null;
      if (!invalid) {
        const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
        if (unchanged) {
          [c2, o2] = [config.old.c, config.old.o];
        } else {
          const ot2 = zone.offset(this.ts);
          c2 = tsToObj(this.ts, ot2);
          invalid = Number.isNaN(c2.year) ? new Invalid("invalid input") : null;
          c2 = invalid ? null : c2;
          o2 = invalid ? null : ot2;
        }
      }
      this._zone = zone;
      this.loc = config.loc || Locale.create();
      this.invalid = invalid;
      this.weekData = null;
      this.localWeekData = null;
      this.c = c2;
      this.o = o2;
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
      for (const u2 of units) {
        const v2 = normalized[u2];
        if (!isUndefined(v2)) {
          foundFirst = true;
        } else if (foundFirst) {
          normalized[u2] = defaultValues[u2];
        } else {
          normalized[u2] = objNow[u2];
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
    static isDateTime(o2) {
      return o2 && o2.isLuxonDateTime || false;
    }
    /**
     * Produce the format string for a set of options
     * @param formatOpts
     * @param localeOpts
     * @returns {string}
     */
    static parseFormatForOpts(formatOpts, localeOpts = {}) {
      const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
      return !tokenList ? null : tokenList.map((t2) => t2 ? t2.val : null).join("");
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
      return expanded.map((t2) => t2.val).join("");
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
    toUTC(offset3 = 0, opts = {}) {
      return this.setZone(FixedOffsetZone.instance(offset3), opts);
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
      const [ts, o2] = objToTS(mixed, this.o, this.zone);
      return clone2(this, { ts, o: o2 });
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
      const o2 = {}, normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case "years":
          o2.month = 1;
        case "quarters":
        case "months":
          o2.day = 1;
        case "weeks":
        case "days":
          o2.hour = 0;
        case "hours":
          o2.minute = 0;
        case "minutes":
          o2.second = 0;
        case "seconds":
          o2.millisecond = 0;
          break;
        case "milliseconds":
          break;
      }
      if (normalizedUnit === "weeks") {
        if (useLocaleWeeks) {
          const startOfWeek = this.loc.getStartOfWeek();
          const { weekday } = this;
          if (weekday < startOfWeek) {
            o2.weekNumber = this.weekNumber - 1;
          }
          o2.weekday = startOfWeek;
        } else {
          o2.weekday = 1;
        }
      }
      if (normalizedUnit === "quarters") {
        const q2 = Math.ceil(this.month / 3);
        o2.month = (q2 - 1) * 3 + 1;
      }
      return this.set(o2);
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
      let c2 = toISODate(this, ext);
      c2 += "T";
      c2 += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
      return c2;
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
      let c2 = includePrefix ? "T" : "";
      return c2 + toISOTime(
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
      return bestBy(dateTimes, (i2) => i2.valueOf(), Math.min);
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
      return bestBy(dateTimes, (i2) => i2.valueOf(), Math.max);
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
  var getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  };
  var getElementHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.querySelector("html").setAttribute("style", `--vh:${vh}px;`);
    const mh = window.innerHeight - outerHeightTrue(document.querySelector("header")) - outerHeightTrue(document.querySelector("footer"));
    document.querySelector("main").setAttribute("style", `--mh:${mh}px;`);
  };
  getElementHeight();
  window.onresize = getElementHeight;
  var setCookieExpirationNever = () => {
    const d2 = /* @__PURE__ */ new Date();
    d2.setTime(d2.getTime() + 100 * 365 * 24 * 60 * 60 * 1e3);
    return `expires=${d2.toUTCString()};`;
  };
  var getCookie = (name) => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);
    if (matched) {
      const cookie = matched[0].split("=");
      return cookie[1];
    }
    return false;
  };
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

  // js/src/ts/util/functions.ts
  var trimString = (item) => {
    item.innerHTML = item.innerHTML.trim();
  };
  var getCookie2 = (name) => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);
    if (matched) {
      const cookie = matched[0].split("=");
      return cookie[1];
    }
    return false;
  };
  var setCookieExpirationNever2 = () => {
    const d2 = /* @__PURE__ */ new Date();
    d2.setTime(d2.getTime() + 100 * 365 * 24 * 60 * 60 * 1e3);
    return `expires=${d2.toUTCString()};`;
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
    for (const i2 of codePre) {
      if (!i2.classList.contains("highlight-delay") && !i2.classList.contains("d-format-none")) {
        const codeElement = i2;
        codeElement.classList.add("line-numbers", "language-none");
        Prism.highlightAll();
      }
    }
  })();

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
            const collapseParentContainer = Collapse.getOrCreateInstance(el2, { toggle: false });
            collapseParentContainer.show();
            el2.addEventListener("shown.bs.collapse", (e2) => {
              e2.stopImmediatePropagation();
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
            const tabParentContainer = Tab.getOrCreateInstance(el2, { toggle: false });
            tabParentContainer.show();
            el2.addEventListener("shown.bs.tab", (e2) => {
              e2.stopImmediatePropagation();
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
          const collapseTargetContainer = Collapse.getOrCreateInstance(collapseTarget, { toggle: false });
          collapseTargetContainer.show();
        }, false);
      });
    }
    const changeHash = (el) => {
      el.addEventListener("click", (e2) => {
        history.pushState(null, null, e2.target.hash);
      });
    };
    document.querySelectorAll('[data-bs-toggle="tab"]:not(.d-hash-none)').forEach((el) => changeHash(el));
    document.querySelectorAll('[data-bs-toggle="collapse"]:not(.d-hash-none)').forEach((el) => changeHash(el));
  })();

  // js/src/collapse-responsive.js
  (() => {
    const collapseLg = document.querySelector(".collapse-lg");
    if (collapseLg) {
      const mediaLg = window.matchMedia("(max-width: 1199px)");
      const collapseLgCollapse = Collapse.getOrCreateInstance(collapseLg, { toggle: false });
      collapseLg.querySelectorAll("a").forEach((el) => {
        el.addEventListener("click", () => {
          if (mediaLg.matches) {
            el.classList.add("active-scroll");
            collapseLgCollapse.hide();
          }
        }, false);
      });
      collapseLg.addEventListener("hidden.bs.collapse", () => {
        const el = collapseLg.querySelector(".active-scroll");
        if (el) {
          const elScroll = document.querySelector(escapeId(el.getAttribute("href")));
          elScroll.scrollIntoView();
          el.classList.remove("active-scroll");
        }
      });
      const toggleCollapseLg = (mediaLg2) => {
        if (mediaLg2.matches) {
          collapseLgCollapse.hide();
        } else {
          collapseLgCollapse.show();
        }
      };
      toggleCollapseLg(mediaLg);
      mediaLg.addEventListener("change", () => toggleCollapseLg(mediaLg));
    }
  })();

  // js/src/collapse-y-height.js
  (() => {
    const collapseY = document.querySelector(".collapse-y-height");
    const mainContent = document.getElementById("mainContent");
    if (collapseY && mainContent) {
      const getCollapseYHeight = () => {
        if (window.innerWidth >= 768) {
          if (getOffset(mainContent).top + outerHeightTrue(mainContent) < window.innerHeight) {
            const collapseYHeight = window.innerHeight - outerHeightTrue(document.querySelector("header")) - outerHeightTrue(document.querySelector("footer"));
            collapseY.style.height = `${collapseYHeight}px`;
          } else {
            collapseY.style.height = "";
          }
        } else {
          collapseY.style.height = "";
        }
      };
      getCollapseYHeight();
      const resizeObserver = new ResizeObserver(() => getCollapseYHeight());
      resizeObserver.observe(document.body);
      window.onresize = getCollapseYHeight;
    }
  })();

  // js/src/docs.js
  (() => {
    const titleChild = document.querySelector("h2.title-child");
    if (titleChild) {
      const allTitles = document.querySelectorAll("h2");
      if (!allTitles[0].classList.contains("title-child")) {
        titleChild.classList.remove("d-none");
      }
    }
  })();

  // node_modules/@docsearch/js/dist/esm/index.js
  function e(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function t(t2) {
    for (var n3 = 1; n3 < arguments.length; n3++) {
      var o2 = null != arguments[n3] ? arguments[n3] : {};
      n3 % 2 ? e(Object(o2), true).forEach(function(e2) {
        r(t2, e2, o2[e2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
        Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
      });
    }
    return t2;
  }
  function n2(e2) {
    return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, n2(e2);
  }
  function r(e2, t2, n3) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function o() {
    return o = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, o.apply(this, arguments);
  }
  function i(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function c(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n3)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n3 = n3.call(e3); !(c2 = (r2 = n3.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || null == n3.return || n3.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || u(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return l2(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || u(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function u(e2, t2) {
    if (e2) {
      if ("string" == typeof e2)
        return l2(e2, t2);
      var n3 = Object.prototype.toString.call(e2).slice(8, -1);
      return "Object" === n3 && e2.constructor && (n3 = e2.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e2) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? l2(e2, t2) : void 0;
    }
  }
  function l2(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  var s2;
  var f;
  var p;
  var m;
  var v;
  var d = {};
  var y = [];
  var h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function b(e2, t2) {
    for (var n3 in t2)
      e2[n3] = t2[n3];
    return e2;
  }
  function g(e2) {
    var t2 = e2.parentNode;
    t2 && t2.removeChild(e2);
  }
  function _(e2, t2, n3) {
    var r2, o2, i2, c2 = arguments, a2 = {};
    for (i2 in t2)
      "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
    if (arguments.length > 3)
      for (n3 = [n3], i2 = 3; i2 < arguments.length; i2++)
        n3.push(c2[i2]);
    if (null != n3 && (a2.children = n3), "function" == typeof e2 && null != e2.defaultProps)
      for (i2 in e2.defaultProps)
        void 0 === a2[i2] && (a2[i2] = e2.defaultProps[i2]);
    return O(e2, a2, r2, o2, null);
  }
  function O(e2, t2, n3, r2, o2) {
    var i2 = { type: e2, props: t2, key: n3, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++s2.__v : o2 };
    return null != s2.vnode && s2.vnode(i2), i2;
  }
  function S(e2) {
    return e2.children;
  }
  function w(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function j(e2, t2) {
    if (null == t2)
      return e2.__ ? j(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
    for (var n3; t2 < e2.__k.length; t2++)
      if (null != (n3 = e2.__k[t2]) && null != n3.__e)
        return n3.__e;
    return "function" == typeof e2.type ? j(e2) : null;
  }
  function E(e2) {
    var t2, n3;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
        if (null != (n3 = e2.__k[t2]) && null != n3.__e) {
          e2.__e = e2.__c.base = n3.__e;
          break;
        }
      return E(e2);
    }
  }
  function P(e2) {
    (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s2.debounceRendering) && ((m = s2.debounceRendering) || p)(I);
  }
  function I() {
    for (var e2; I.__r = f.length; )
      e2 = f.sort(function(e3, t2) {
        return e3.__v.__b - t2.__v.__b;
      }), f = [], e2.some(function(e3) {
        var t2, n3, r2, o2, i2, c2;
        e3.__d && (i2 = (o2 = (t2 = e3).__v).__e, (c2 = t2.__P) && (n3 = [], (r2 = b({}, o2)).__v = o2.__v + 1, q(c2, o2, r2, t2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [i2] : null, n3, null == i2 ? j(o2) : i2, o2.__h), L(n3, o2), o2.__e != i2 && E(o2)));
      });
  }
  function D(e2, t2, n3, r2, o2, i2, c2, a2, u2, l3) {
    var s3, f2, p2, m2, v2, h2, b2, g2 = r2 && r2.__k || y, _2 = g2.length;
    for (n3.__k = [], s3 = 0; s3 < t2.length; s3++)
      if (null != (m2 = n3.__k[s3] = null == (m2 = t2[s3]) || "boolean" == typeof m2 ? null : "string" == typeof m2 || "number" == typeof m2 ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2)) {
        if (m2.__ = n3, m2.__b = n3.__b + 1, null === (p2 = g2[s3]) || p2 && m2.key == p2.key && m2.type === p2.type)
          g2[s3] = void 0;
        else
          for (f2 = 0; f2 < _2; f2++) {
            if ((p2 = g2[f2]) && m2.key == p2.key && m2.type === p2.type) {
              g2[f2] = void 0;
              break;
            }
            p2 = null;
          }
        q(e2, m2, p2 = p2 || d, o2, i2, c2, a2, u2, l3), v2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (b2 || (b2 = []), p2.ref && b2.push(p2.ref, null, m2), b2.push(f2, m2.__c || v2, m2)), null != v2 ? (null == h2 && (h2 = v2), "function" == typeof m2.type && null != m2.__k && m2.__k === p2.__k ? m2.__d = u2 = k(m2, u2, e2) : u2 = C(e2, m2, p2, g2, v2, u2), l3 || "option" !== n3.type ? "function" == typeof n3.type && (n3.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = j(p2));
      }
    for (n3.__e = h2, s3 = _2; s3--; )
      null != g2[s3] && ("function" == typeof n3.type && null != g2[s3].__e && g2[s3].__e == n3.__d && (n3.__d = j(r2, s3 + 1)), U(g2[s3], g2[s3]));
    if (b2)
      for (s3 = 0; s3 < b2.length; s3++)
        H(b2[s3], b2[++s3], b2[++s3]);
  }
  function k(e2, t2, n3) {
    var r2, o2;
    for (r2 = 0; r2 < e2.__k.length; r2++)
      (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = "function" == typeof o2.type ? k(o2, t2, n3) : C(n3, o2, o2, e2.__k, o2.__e, t2));
    return t2;
  }
  function A(e2, t2) {
    return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (Array.isArray(e2) ? e2.some(function(e3) {
      A(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function C(e2, t2, n3, r2, o2, i2) {
    var c2, a2, u2;
    if (void 0 !== t2.__d)
      c2 = t2.__d, t2.__d = void 0;
    else if (null == n3 || o2 != i2 || null == o2.parentNode)
      e:
        if (null == i2 || i2.parentNode !== e2)
          e2.appendChild(o2), c2 = null;
        else {
          for (a2 = i2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
            if (a2 == o2)
              break e;
          e2.insertBefore(o2, i2), c2 = i2;
        }
    return void 0 !== c2 ? c2 : o2.nextSibling;
  }
  function N(e2, t2, n3) {
    "-" === t2[0] ? e2.setProperty(t2, n3) : e2[t2] = null == n3 ? "" : "number" != typeof n3 || h.test(t2) ? n3 : n3 + "px";
  }
  function x(e2, t2, n3, r2, o2) {
    var i2;
    e:
      if ("style" === t2)
        if ("string" == typeof n3)
          e2.style.cssText = n3;
        else {
          if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2)
            for (t2 in r2)
              n3 && t2 in n3 || N(e2.style, t2, "");
          if (n3)
            for (t2 in n3)
              r2 && n3[t2] === r2[t2] || N(e2.style, t2, n3[t2]);
        }
      else if ("o" === t2[0] && "n" === t2[1])
        i2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n3, n3 ? r2 || e2.addEventListener(t2, i2 ? R : T, i2) : e2.removeEventListener(t2, i2 ? R : T, i2);
      else if ("dangerouslySetInnerHTML" !== t2) {
        if (o2)
          t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t2 && "list" !== t2 && "form" !== t2 && "download" !== t2 && t2 in e2)
          try {
            e2[t2] = null == n3 ? "" : n3;
            break e;
          } catch (e3) {
          }
        "function" == typeof n3 || (null != n3 && (false !== n3 || "a" === t2[0] && "r" === t2[1]) ? e2.setAttribute(t2, n3) : e2.removeAttribute(t2));
      }
  }
  function T(e2) {
    this.l[e2.type + false](s2.event ? s2.event(e2) : e2);
  }
  function R(e2) {
    this.l[e2.type + true](s2.event ? s2.event(e2) : e2);
  }
  function q(e2, t2, n3, r2, o2, i2, c2, a2, u2) {
    var l3, f2, p2, m2, v2, d2, y2, h2, g2, _2, O2, j2 = t2.type;
    if (void 0 !== t2.constructor)
      return null;
    null != n3.__h && (u2 = n3.__h, a2 = t2.__e = n3.__e, t2.__h = null, i2 = [a2]), (l3 = s2.__b) && l3(t2);
    try {
      e:
        if ("function" == typeof j2) {
          if (h2 = t2.props, g2 = (l3 = j2.contextType) && r2[l3.__c], _2 = l3 ? g2 ? g2.props.value : l3.__ : r2, n3.__c ? y2 = (f2 = t2.__c = n3.__c).__ = f2.__E : ("prototype" in j2 && j2.prototype.render ? t2.__c = f2 = new j2(h2, _2) : (t2.__c = f2 = new w(h2, _2), f2.constructor = j2, f2.render = F), g2 && g2.sub(f2), f2.props = h2, f2.state || (f2.state = {}), f2.context = _2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), null == f2.__s && (f2.__s = f2.state), null != j2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = b({}, f2.__s)), b(f2.__s, j2.getDerivedStateFromProps(h2, f2.__s))), m2 = f2.props, v2 = f2.state, p2)
            null == j2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
          else {
            if (null == j2.getDerivedStateFromProps && h2 !== m2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(h2, _2), !f2.__e && null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(h2, f2.__s, _2) || t2.__v === n3.__v) {
              f2.props = h2, f2.state = f2.__s, t2.__v !== n3.__v && (f2.__d = false), f2.__v = t2, t2.__e = n3.__e, t2.__k = n3.__k, f2.__h.length && c2.push(f2);
              break e;
            }
            null != f2.componentWillUpdate && f2.componentWillUpdate(h2, f2.__s, _2), null != f2.componentDidUpdate && f2.__h.push(function() {
              f2.componentDidUpdate(m2, v2, d2);
            });
          }
          f2.context = _2, f2.props = h2, f2.state = f2.__s, (l3 = s2.__r) && l3(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, l3 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, null != f2.getChildContext && (r2 = b(b({}, r2), f2.getChildContext())), p2 || null == f2.getSnapshotBeforeUpdate || (d2 = f2.getSnapshotBeforeUpdate(m2, v2)), O2 = null != l3 && l3.type === S && null == l3.key ? l3.props.children : l3, D(e2, Array.isArray(O2) ? O2 : [O2], t2, n3, r2, o2, i2, c2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && c2.push(f2), y2 && (f2.__E = f2.__ = null), f2.__e = false;
        } else
          null == i2 && t2.__v === n3.__v ? (t2.__k = n3.__k, t2.__e = n3.__e) : t2.__e = M(n3.__e, t2, n3, r2, o2, i2, c2, u2);
      (l3 = s2.diffed) && l3(t2);
    } catch (e3) {
      t2.__v = null, (u2 || null != i2) && (t2.__e = a2, t2.__h = !!u2, i2[i2.indexOf(a2)] = null), s2.__e(e3, t2, n3);
    }
  }
  function L(e2, t2) {
    s2.__c && s2.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        s2.__e(e3, t3.__v);
      }
    });
  }
  function M(e2, t2, n3, r2, o2, i2, c2, a2) {
    var u2, l3, s3, f2, p2 = n3.props, m2 = t2.props, v2 = t2.type, h2 = 0;
    if ("svg" === v2 && (o2 = true), null != i2) {
      for (; h2 < i2.length; h2++)
        if ((u2 = i2[h2]) && (u2 === e2 || (v2 ? u2.localName == v2 : 3 == u2.nodeType))) {
          e2 = u2, i2[h2] = null;
          break;
        }
    }
    if (null == e2) {
      if (null === v2)
        return document.createTextNode(m2);
      e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", v2) : document.createElement(v2, m2.is && m2), i2 = null, a2 = false;
    }
    if (null === v2)
      p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
    else {
      if (i2 = i2 && y.slice.call(e2.childNodes), l3 = (p2 = n3.props || d).dangerouslySetInnerHTML, s3 = m2.dangerouslySetInnerHTML, !a2) {
        if (null != i2)
          for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
            p2[e2.attributes[f2].name] = e2.attributes[f2].value;
        (s3 || l3) && (s3 && (l3 && s3.__html == l3.__html || s3.__html === e2.innerHTML) || (e2.innerHTML = s3 && s3.__html || ""));
      }
      if (function(e3, t3, n4, r3, o3) {
        var i3;
        for (i3 in n4)
          "children" === i3 || "key" === i3 || i3 in t3 || x(e3, i3, null, n4[i3], r3);
        for (i3 in t3)
          o3 && "function" != typeof t3[i3] || "children" === i3 || "key" === i3 || "value" === i3 || "checked" === i3 || n4[i3] === t3[i3] || x(e3, i3, t3[i3], n4[i3], r3);
      }(e2, m2, p2, o2, a2), s3)
        t2.__k = [];
      else if (h2 = t2.props.children, D(e2, Array.isArray(h2) ? h2 : [h2], t2, n3, r2, o2 && "foreignObject" !== v2, i2, c2, e2.firstChild, a2), null != i2)
        for (h2 = i2.length; h2--; )
          null != i2[h2] && g(i2[h2]);
      a2 || ("value" in m2 && void 0 !== (h2 = m2.value) && (h2 !== e2.value || "progress" === v2 && !h2) && x(e2, "value", h2, p2.value, false), "checked" in m2 && void 0 !== (h2 = m2.checked) && h2 !== e2.checked && x(e2, "checked", h2, p2.checked, false));
    }
    return e2;
  }
  function H(e2, t2, n3) {
    try {
      "function" == typeof e2 ? e2(t2) : e2.current = t2;
    } catch (e3) {
      s2.__e(e3, n3);
    }
  }
  function U(e2, t2, n3) {
    var r2, o2, i2;
    if (s2.unmount && s2.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || H(r2, null, t2)), n3 || "function" == typeof e2.type || (n3 = null != (o2 = e2.__e)), e2.__e = e2.__d = void 0, null != (r2 = e2.__c)) {
      if (r2.componentWillUnmount)
        try {
          r2.componentWillUnmount();
        } catch (e3) {
          s2.__e(e3, t2);
        }
      r2.base = r2.__P = null;
    }
    if (r2 = e2.__k)
      for (i2 = 0; i2 < r2.length; i2++)
        r2[i2] && U(r2[i2], t2, n3);
    null != o2 && g(o2);
  }
  function F(e2, t2, n3) {
    return this.constructor(e2, n3);
  }
  function B(e2, t2, n3) {
    var r2, o2, i2;
    s2.__ && s2.__(e2, t2), o2 = (r2 = "function" == typeof n3) ? null : n3 && n3.__k || t2.__k, i2 = [], q(t2, e2 = (!r2 && n3 || t2).__k = _(S, null, [e2]), o2 || d, d, void 0 !== t2.ownerSVGElement, !r2 && n3 ? [n3] : o2 ? null : t2.firstChild ? y.slice.call(t2.childNodes) : null, i2, !r2 && n3 ? n3 : o2 ? o2.__e : t2.firstChild, r2), L(i2, e2);
  }
  function V(e2, t2) {
    B(e2, t2, V);
  }
  function K(e2, t2, n3) {
    var r2, o2, i2, c2 = arguments, a2 = b({}, e2.props);
    for (i2 in t2)
      "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
    if (arguments.length > 3)
      for (n3 = [n3], i2 = 3; i2 < arguments.length; i2++)
        n3.push(c2[i2]);
    return null != n3 && (a2.children = n3), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
  }
  s2 = { __e: function(e2, t2) {
    for (var n3, r2, o2; t2 = t2.__; )
      if ((n3 = t2.__c) && !n3.__)
        try {
          if ((r2 = n3.constructor) && null != r2.getDerivedStateFromError && (n3.setState(r2.getDerivedStateFromError(e2)), o2 = n3.__d), null != n3.componentDidCatch && (n3.componentDidCatch(e2), o2 = n3.__d), o2)
            return n3.__E = n3;
        } catch (t3) {
          e2 = t3;
        }
    throw e2;
  }, __v: 0 }, w.prototype.setState = function(e2, t2) {
    var n3;
    n3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), "function" == typeof e2 && (e2 = e2(b({}, n3), this.props)), e2 && b(n3, e2), null != e2 && this.__v && (t2 && this.__h.push(t2), P(this));
  }, w.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
  }, w.prototype.render = S, f = [], p = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, v = 0;
  var W;
  var z;
  var J;
  var $ = 0;
  var Q = [];
  var Z = s2.__b;
  var Y = s2.__r;
  var G = s2.diffed;
  var X = s2.__c;
  var ee = s2.unmount;
  function te(e2, t2) {
    s2.__h && s2.__h(z, e2, $ || t2), $ = 0;
    var n3 = z.__H || (z.__H = { __: [], __h: [] });
    return e2 >= n3.__.length && n3.__.push({}), n3.__[e2];
  }
  function ne(e2) {
    return $ = 1, re(pe, e2);
  }
  function re(e2, t2, n3) {
    var r2 = te(W++, 2);
    return r2.t = e2, r2.__c || (r2.__ = [n3 ? n3(t2) : pe(void 0, t2), function(e3) {
      var t3 = r2.t(r2.__[0], e3);
      r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = z), r2.__;
  }
  function oe(e2, t2) {
    var n3 = te(W++, 3);
    !s2.__s && fe(n3.__H, t2) && (n3.__ = e2, n3.__H = t2, z.__H.__h.push(n3));
  }
  function ie(e2, t2) {
    var n3 = te(W++, 4);
    !s2.__s && fe(n3.__H, t2) && (n3.__ = e2, n3.__H = t2, z.__h.push(n3));
  }
  function ce(e2, t2) {
    var n3 = te(W++, 7);
    return fe(n3.__H, t2) && (n3.__ = e2(), n3.__H = t2, n3.__h = e2), n3.__;
  }
  function ae() {
    Q.forEach(function(e2) {
      if (e2.__P)
        try {
          e2.__H.__h.forEach(le), e2.__H.__h.forEach(se), e2.__H.__h = [];
        } catch (t2) {
          e2.__H.__h = [], s2.__e(t2, e2.__v);
        }
    }), Q = [];
  }
  s2.__b = function(e2) {
    z = null, Z && Z(e2);
  }, s2.__r = function(e2) {
    Y && Y(e2), W = 0;
    var t2 = (z = e2.__c).__H;
    t2 && (t2.__h.forEach(le), t2.__h.forEach(se), t2.__h = []);
  }, s2.diffed = function(e2) {
    G && G(e2);
    var t2 = e2.__c;
    t2 && t2.__H && t2.__H.__h.length && (1 !== Q.push(t2) && J === s2.requestAnimationFrame || ((J = s2.requestAnimationFrame) || function(e3) {
      var t3, n3 = function() {
        clearTimeout(r2), ue && cancelAnimationFrame(t3), setTimeout(e3);
      }, r2 = setTimeout(n3, 100);
      ue && (t3 = requestAnimationFrame(n3));
    })(ae)), z = void 0;
  }, s2.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(le), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || se(e4);
        });
      } catch (n3) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], s2.__e(n3, e3.__v);
      }
    }), X && X(e2, t2);
  }, s2.unmount = function(e2) {
    ee && ee(e2);
    var t2 = e2.__c;
    if (t2 && t2.__H)
      try {
        t2.__H.__.forEach(le);
      } catch (e3) {
        s2.__e(e3, t2.__v);
      }
  };
  var ue = "function" == typeof requestAnimationFrame;
  function le(e2) {
    var t2 = z;
    "function" == typeof e2.__c && e2.__c(), z = t2;
  }
  function se(e2) {
    var t2 = z;
    e2.__c = e2.__(), z = t2;
  }
  function fe(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n3) {
      return t3 !== e2[n3];
    });
  }
  function pe(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function me(e2, t2) {
    for (var n3 in t2)
      e2[n3] = t2[n3];
    return e2;
  }
  function ve(e2, t2) {
    for (var n3 in e2)
      if ("__source" !== n3 && !(n3 in t2))
        return true;
    for (var r2 in t2)
      if ("__source" !== r2 && e2[r2] !== t2[r2])
        return true;
    return false;
  }
  function de(e2) {
    this.props = e2;
  }
  (de.prototype = new w()).isPureReactComponent = true, de.prototype.shouldComponentUpdate = function(e2, t2) {
    return ve(this.props, e2) || ve(this.state, t2);
  };
  var ye = s2.__b;
  s2.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), ye && ye(e2);
  };
  var he = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var be = function(e2, t2) {
    return null == e2 ? null : A(A(e2).map(t2));
  };
  var ge = { map: be, forEach: be, count: function(e2) {
    return e2 ? A(e2).length : 0;
  }, only: function(e2) {
    var t2 = A(e2);
    if (1 !== t2.length)
      throw "Children.only";
    return t2[0];
  }, toArray: A };
  var _e = s2.__e;
  function Oe() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Se(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__e && t2.__e(e2);
  }
  function we() {
    this.u = null, this.o = null;
  }
  s2.__e = function(e2, t2, n3) {
    if (e2.then) {
      for (var r2, o2 = t2; o2 = o2.__; )
        if ((r2 = o2.__c) && r2.__c)
          return null == t2.__e && (t2.__e = n3.__e, t2.__k = n3.__k), r2.__c(e2, t2);
    }
    _e(e2, t2, n3);
  }, (Oe.prototype = new w()).__c = function(e2, t2) {
    var n3 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(n3);
    var o2 = Se(r2.__v), i2 = false, c2 = function() {
      i2 || (i2 = true, n3.componentWillUnmount = n3.__c, o2 ? o2(a2) : a2());
    };
    n3.__c = n3.componentWillUnmount, n3.componentWillUnmount = function() {
      c2(), n3.__c && n3.__c();
    };
    var a2 = function() {
      if (!--r2.__u) {
        if (r2.state.__e) {
          var e3 = r2.state.__e;
          r2.__v.__k[0] = function e4(t4, n4, r3) {
            return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
              return e4(t5, n4, r3);
            }), t4.__c && t4.__c.__P === n4 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
          }(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
          t3.forceUpdate();
      }
    }, u2 = true === t2.__h;
    r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(c2, c2);
  }, Oe.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Oe.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n3 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = function e3(t3, n4, r3) {
          return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
            "function" == typeof e4.__c && e4.__c();
          }), t3.__c.__H = null), null != (t3 = me({}, t3)).__c && (t3.__c.__P === r3 && (t3.__c.__P = n4), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
            return e3(t4, n4, r3);
          })), t3;
        }(this.__b, n3, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__e && _(S, null, e2.fallback);
    return o2 && (o2.__h = null), [_(S, null, t2.__e ? null : e2.children), o2];
  };
  var je = function(e2, t2, n3) {
    if (++n3[1] === n3[0] && e2.o.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.o.size))
      for (n3 = e2.u; n3; ) {
        for (; n3.length > 3; )
          n3.pop()();
        if (n3[1] < n3[0])
          break;
        e2.u = n3 = n3[2];
      }
  };
  function Ee(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function Pe(e2) {
    var t2 = this, n3 = e2.i;
    t2.componentWillUnmount = function() {
      B(null, t2.l), t2.l = null, t2.i = null;
    }, t2.i && t2.i !== n3 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n3, t2.l = { nodeType: 1, parentNode: n3, childNodes: [], appendChild: function(e3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, insertBefore: function(e3, n4) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
    } }), B(_(Ee, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
  }
  function Ie(e2, t2) {
    return _(Pe, { __v: e2, i: t2 });
  }
  (we.prototype = new w()).__e = function(e2) {
    var t2 = this, n3 = Se(t2.__v), r2 = t2.o.get(e2);
    return r2[0]++, function(o2) {
      var i2 = function() {
        t2.props.revealOrder ? (r2.push(o2), je(t2, e2, r2)) : o2();
      };
      n3 ? n3(i2) : i2();
    };
  }, we.prototype.render = function(e2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = A(e2.children);
    e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
    for (var n3 = t2.length; n3--; )
      this.o.set(t2[n3], this.u = [1, 0, this.u]);
    return e2.children;
  }, we.prototype.componentDidUpdate = we.prototype.componentDidMount = function() {
    var e2 = this;
    this.o.forEach(function(t2, n3) {
      je(e2, n3, t2);
    });
  };
  var De = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var ke = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Ae = function(e2) {
    return ("undefined" != typeof Symbol && "symbol" == n2(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
  };
  function Ce(e2, t2, n3) {
    return null == t2.__k && (t2.textContent = ""), B(e2, t2), "function" == typeof n3 && n3(), e2 ? e2.__c : null;
  }
  w.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(w.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Ne = s2.event;
  function xe() {
  }
  function Te() {
    return this.cancelBubble;
  }
  function Re() {
    return this.defaultPrevented;
  }
  s2.event = function(e2) {
    return Ne && (e2 = Ne(e2)), e2.persist = xe, e2.isPropagationStopped = Te, e2.isDefaultPrevented = Re, e2.nativeEvent = e2;
  };
  var qe;
  var Le = { configurable: true, get: function() {
    return this.class;
  } };
  var Me = s2.vnode;
  s2.vnode = function(e2) {
    var t2 = e2.type, n3 = e2.props, r2 = n3;
    if ("string" == typeof t2) {
      for (var o2 in r2 = {}, n3) {
        var i2 = n3[o2];
        "value" === o2 && "defaultValue" in n3 && null == i2 || ("defaultValue" === o2 && "value" in n3 && null == n3.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !Ae(n3.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : ke.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i2 && (i2 = void 0), r2[o2] = i2);
      }
      "select" == t2 && r2.multiple && Array.isArray(r2.value) && (r2.value = A(n3.children).forEach(function(e3) {
        e3.props.selected = -1 != r2.value.indexOf(e3.props.value);
      })), "select" == t2 && null != r2.defaultValue && (r2.value = A(n3.children).forEach(function(e3) {
        e3.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e3.props.value) : r2.defaultValue == e3.props.value;
      })), e2.props = r2;
    }
    t2 && n3.class != n3.className && (Le.enumerable = "className" in n3, null != n3.className && (r2.class = n3.className), Object.defineProperty(r2, "className", Le)), e2.$$typeof = De, Me && Me(e2);
  };
  var He = s2.__r;
  s2.__r = function(e2) {
    He && He(e2), qe = e2.__c;
  };
  var Ue = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return qe.__n[e2.__c].props.value;
  } } } };
  "object" == ("undefined" == typeof performance ? "undefined" : n2(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
  function Fe(e2) {
    return !!e2 && e2.$$typeof === De;
  }
  var Be = { useState: ne, useReducer: re, useEffect: oe, useLayoutEffect: ie, useRef: function(e2) {
    return $ = 5, ce(function() {
      return { current: e2 };
    }, []);
  }, useImperativeHandle: function(e2, t2, n3) {
    $ = 6, ie(function() {
      "function" == typeof e2 ? e2(t2()) : e2 && (e2.current = t2());
    }, null == n3 ? n3 : n3.concat(e2));
  }, useMemo: ce, useCallback: function(e2, t2) {
    return $ = 8, ce(function() {
      return e2;
    }, t2);
  }, useContext: function(e2) {
    var t2 = z.context[e2.__c], n3 = te(W++, 9);
    return n3.__c = e2, t2 ? (null == n3.__ && (n3.__ = true, t2.sub(z)), t2.props.value) : e2.__;
  }, useDebugValue: function(e2, t2) {
    s2.useDebugValue && s2.useDebugValue(t2 ? t2(e2) : e2);
  }, version: "16.8.0", Children: ge, render: Ce, hydrate: function(e2, t2, n3) {
    return V(e2, t2), "function" == typeof n3 && n3(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (B(null, e2), true);
  }, createPortal: Ie, createElement: _, createContext: function(e2, t2) {
    var n3 = { __c: t2 = "__cC" + v++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n4, r2;
      return this.getChildContext || (n4 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n4.some(P);
      }, this.sub = function(e4) {
        n4.push(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n4.splice(n4.indexOf(e4), 1), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n3.Provider.__ = n3.Consumer.contextType = n3;
  }, createFactory: function(e2) {
    return _.bind(null, e2);
  }, cloneElement: function(e2) {
    return Fe(e2) ? K.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: S, isValidElement: Fe, findDOMNode: function(e2) {
    return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
  }, Component: w, PureComponent: de, memo: function(e2, t2) {
    function n3(e3) {
      var n4 = this.props.ref, r3 = n4 == e3.ref;
      return !r3 && n4 && (n4.call ? n4(null) : n4.current = null), t2 ? !t2(this.props, e3) || !r3 : ve(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n3, _(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3, r2) {
      var o2 = me({}, t3);
      return delete o2.ref, e2(o2, (r2 = t3.ref || r2) && ("object" != n2(r2) || "current" in r2) ? r2 : null);
    }
    return t2.$$typeof = he, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: S, Suspense: Oe, SuspenseList: we, lazy: function(e2) {
    var t2, n3, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n3 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2)
        throw r2;
      if (!n3)
        throw t2;
      return _(n3, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue };
  function Ve() {
    return Be.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Be.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function Ke() {
    return Be.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, Be.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var We = ["translations"];
  function ze() {
    return ze = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, ze.apply(this, arguments);
  }
  function Je(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n3)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n3 = n3.call(e3); !(c2 = (r2 = n3.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || null == n3.return || n3.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return $e(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return $e(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function $e(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function Qe(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  var Ze = Be.forwardRef(function(e2, t2) {
    var n3 = e2.translations, r2 = void 0 === n3 ? {} : n3, o2 = Qe(e2, We), i2 = r2.buttonText, c2 = void 0 === i2 ? "Search" : i2, a2 = r2.buttonAriaLabel, u2 = void 0 === a2 ? "Search" : a2, l3 = Je(ne(null), 2), s3 = l3[0], f2 = l3[1];
    return oe(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2("Ctrl"));
    }, []), Be.createElement("button", ze({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Be.createElement("span", { className: "DocSearch-Button-Container" }, Be.createElement(Ke, null), Be.createElement("span", { className: "DocSearch-Button-Placeholder" }, c2)), Be.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s3 && Be.createElement(Be.Fragment, null, Be.createElement(Ye, { reactsToKey: "Ctrl" === s3 ? "Ctrl" : "Meta" }, "Ctrl" === s3 ? Be.createElement(Ve, null) : s3), Be.createElement(Ye, { reactsToKey: "k" }, "K"))));
  });
  function Ye(e2) {
    var t2 = e2.reactsToKey, n3 = e2.children, r2 = Je(ne(false), 2), o2 = r2[0], i2 = r2[1];
    return oe(function() {
      if (t2)
        return window.addEventListener("keydown", e3), window.addEventListener("keyup", n4), function() {
          window.removeEventListener("keydown", e3), window.removeEventListener("keyup", n4);
        };
      function e3(e4) {
        e4.key === t2 && i2(true);
      }
      function n4(e4) {
        e4.key !== t2 && "Meta" !== e4.key || i2(false);
      }
    }, [t2]), Be.createElement("kbd", { className: o2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" }, n3);
  }
  function Ge(e2, t2) {
    var n3 = void 0;
    return function() {
      for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++)
        o2[i2] = arguments[i2];
      n3 && clearTimeout(n3), n3 = setTimeout(function() {
        return e2.apply(void 0, o2);
      }, t2);
    };
  }
  function Xe(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n3) {
        var r2, o2, i2, c2, a2 = [], u2 = true, l3 = false;
        try {
          if (i2 = (n3 = n3.call(e3)).next, 0 === t3) {
            if (Object(n3) !== n3)
              return;
            u2 = false;
          } else
            for (; !(u2 = (r2 = i2.call(n3)).done) && (a2.push(r2.value), a2.length !== t3); u2 = true)
              ;
        } catch (e4) {
          l3 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && null != n3.return && (c2 = n3.return(), Object(c2) !== c2))
              return;
          } finally {
            if (l3)
              throw o2;
          }
        }
        return a2;
      }
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return et(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return et(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function et(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function tt(e2) {
    return tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, tt(e2);
  }
  function nt(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new Set();
    if (!e2 || "object" !== tt(e2))
      return e2;
    if (t2.has(e2))
      return "[Circular]";
    var n3 = t2.add(e2);
    return Array.isArray(e2) ? e2.map(function(e3) {
      return nt(e3, n3);
    }) : Object.fromEntries(Object.entries(e2).map(function(e3) {
      var t3 = Xe(e3, 2);
      return [t3[0], nt(t3[1], n3)];
    }));
  }
  function rt(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var ot = 0;
  function it(e2) {
    return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function ct(e2, t2) {
    if (!e2)
      throw new Error("[Autocomplete] ".concat("function" == typeof t2 ? t2() : t2));
  }
  function at(e2) {
    return e2 !== Object(e2);
  }
  function ut(e2, t2) {
    if (e2 === t2)
      return true;
    if (at(e2) || at(t2) || "function" == typeof e2 || "function" == typeof t2)
      return e2 === t2;
    if (Object.keys(e2).length !== Object.keys(t2).length)
      return false;
    for (var n3 = 0, r2 = Object.keys(e2); n3 < r2.length; n3++) {
      var o2 = r2[n3];
      if (!(o2 in t2))
        return false;
      if (!ut(e2[o2], t2[o2]))
        return false;
    }
    return true;
  }
  var lt = function() {
  };
  var st = [{ segment: "autocomplete-core", version: "1.9.3" }];
  var ft = { current: {} };
  function pt(e2) {
    var t2 = e2.item, n3 = e2.items;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + n3.findIndex(function(e3) {
      return e3.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function mt(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n3) {
        var r2, o2, i2, c2, a2 = [], u2 = true, l3 = false;
        try {
          if (i2 = (n3 = n3.call(e3)).next, 0 === t3) {
            if (Object(n3) !== n3)
              return;
            u2 = false;
          } else
            for (; !(u2 = (r2 = i2.call(n3)).done) && (a2.push(r2.value), a2.length !== t3); u2 = true)
              ;
        } catch (e4) {
          l3 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && null != n3.return && (c2 = n3.return(), Object(c2) !== c2))
              return;
          } finally {
            if (l3)
              throw o2;
          }
        }
        return a2;
      }
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return vt(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return vt(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function vt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  var dt = ["items"];
  var yt = ["items"];
  function ht(e2) {
    return ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, ht(e2);
  }
  function bt(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return gt(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return gt(e3, t2);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return gt(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function gt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function _t(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Ot(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function St(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ot(Object(n3), true).forEach(function(t3) {
        wt(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Ot(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function wt(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== ht(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== ht(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === ht(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function jt(e2) {
    for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n3 = [], r2 = 0; r2 < e2.objectIDs.length; r2 += t2)
      n3.push(St(St({}, e2), {}, { objectIDs: e2.objectIDs.slice(r2, r2 + t2) }));
    return n3;
  }
  function Et(e2) {
    return e2.map(function(e3) {
      var t2 = e3.items, n3 = _t(e3, dt);
      return St(St({}, n3), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e4) {
        return e4.objectID;
      })) || n3.objectIDs });
    });
  }
  function Pt(e2) {
    var t2, n3, r2, o2 = (t2 = mt((e2.version || "").split(".").map(Number), 2), n3 = t2[0], r2 = t2[1], n3 >= 3 || 2 === n3 && r2 >= 4 || 1 === n3 && r2 >= 10);
    function i2(t3, n4, r3) {
      if (o2 && void 0 !== r3) {
        var i3 = r3[0].__autocomplete_algoliaCredentials, c2 = { "X-Algolia-Application-Id": i3.appId, "X-Algolia-API-Key": i3.apiKey };
        e2.apply(void 0, [t3].concat(bt(n4), [{ headers: c2 }]));
      } else
        e2.apply(void 0, [t3].concat(bt(n4)));
    }
    return { init: function(t3, n4) {
      e2("init", { appId: t3, apiKey: n4 });
    }, setUserToken: function(t3) {
      e2("setUserToken", t3);
    }, clickedObjectIDsAfterSearch: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n4 = 0; n4 < e3; n4++)
        t3[n4] = arguments[n4];
      t3.length > 0 && i2("clickedObjectIDsAfterSearch", Et(t3), t3[0].items);
    }, clickedObjectIDs: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n4 = 0; n4 < e3; n4++)
        t3[n4] = arguments[n4];
      t3.length > 0 && i2("clickedObjectIDs", Et(t3), t3[0].items);
    }, clickedFilters: function() {
      for (var t3 = arguments.length, n4 = new Array(t3), r3 = 0; r3 < t3; r3++)
        n4[r3] = arguments[r3];
      n4.length > 0 && e2.apply(void 0, ["clickedFilters"].concat(n4));
    }, convertedObjectIDsAfterSearch: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n4 = 0; n4 < e3; n4++)
        t3[n4] = arguments[n4];
      t3.length > 0 && i2("convertedObjectIDsAfterSearch", Et(t3), t3[0].items);
    }, convertedObjectIDs: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n4 = 0; n4 < e3; n4++)
        t3[n4] = arguments[n4];
      t3.length > 0 && i2("convertedObjectIDs", Et(t3), t3[0].items);
    }, convertedFilters: function() {
      for (var t3 = arguments.length, n4 = new Array(t3), r3 = 0; r3 < t3; r3++)
        n4[r3] = arguments[r3];
      n4.length > 0 && e2.apply(void 0, ["convertedFilters"].concat(n4));
    }, viewedObjectIDs: function() {
      for (var e3 = arguments.length, t3 = new Array(e3), n4 = 0; n4 < e3; n4++)
        t3[n4] = arguments[n4];
      t3.length > 0 && t3.reduce(function(e4, t4) {
        var n5 = t4.items, r3 = _t(t4, yt);
        return [].concat(bt(e4), bt(jt(St(St({}, r3), {}, { objectIDs: (null == n5 ? void 0 : n5.map(function(e5) {
          return e5.objectID;
        })) || r3.objectIDs })).map(function(e5) {
          return { items: n5, payload: e5 };
        })));
      }, []).forEach(function(e4) {
        var t4 = e4.items;
        return i2("viewedObjectIDs", [e4.payload], t4);
      });
    }, viewedFilters: function() {
      for (var t3 = arguments.length, n4 = new Array(t3), r3 = 0; r3 < t3; r3++)
        n4[r3] = arguments[r3];
      n4.length > 0 && e2.apply(void 0, ["viewedFilters"].concat(n4));
    } };
  }
  function It(e2) {
    var t2 = e2.items.reduce(function(e3, t3) {
      var n3;
      return e3[t3.__autocomplete_indexName] = (null !== (n3 = e3[t3.__autocomplete_indexName]) && void 0 !== n3 ? n3 : []).concat(t3), e3;
    }, {});
    return Object.keys(t2).map(function(e3) {
      return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
    });
  }
  function Dt(e2) {
    return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
  }
  function kt(e2) {
    return kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, kt(e2);
  }
  function At(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return Ct(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Ct(e3, t2);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return Ct(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Ct(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function Nt(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function xt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Nt(Object(n3), true).forEach(function(t3) {
        Tt(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Nt(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Tt(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== kt(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== kt(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === kt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  var Rt = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js");
  var qt = Ge(function(e2) {
    var t2 = e2.onItemsChange, n3 = e2.items, r2 = e2.insights, o2 = e2.state;
    t2({ insights: r2, insightsEvents: It({ items: n3 }).map(function(e3) {
      return xt({ eventName: "Items Viewed" }, e3);
    }), state: o2 });
  }, 400);
  function Lt(e2) {
    var t2 = function(e3) {
      return xt({ onItemsChange: function(e4) {
        var t3 = e4.insights, n4 = e4.insightsEvents;
        t3.viewedObjectIDs.apply(t3, At(n4.map(function(e5) {
          return xt(xt({}, e5), {}, { algoliaSource: [].concat(At(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onSelect: function(e4) {
        var t3 = e4.insights, n4 = e4.insightsEvents;
        t3.clickedObjectIDsAfterSearch.apply(t3, At(n4.map(function(e5) {
          return xt(xt({}, e5), {}, { algoliaSource: [].concat(At(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onActive: lt }, e3);
    }(e2), n3 = t2.insightsClient, r2 = t2.onItemsChange, o2 = t2.onSelect, i2 = t2.onActive, c2 = n3;
    n3 || function(e3) {
      if ("undefined" != typeof window)
        e3({ window });
    }(function(e3) {
      var t3 = e3.window, n4 = t3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof n4 && (c2 = t3[n4]), c2 || (t3.AlgoliaAnalyticsObject = n4, t3[n4] || (t3[n4] = function() {
        t3[n4].queue || (t3[n4].queue = []);
        for (var e4 = arguments.length, r3 = new Array(e4), o3 = 0; o3 < e4; o3++)
          r3[o3] = arguments[o3];
        t3[n4].queue.push(r3);
      }), t3[n4].version = "2.6.0", c2 = t3[n4], function(e4) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n5 = e4.document.createElement("script");
          n5.async = true, n5.src = Rt, n5.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n5);
        } catch (e5) {
          console.error(t4);
        }
      }(t3));
    });
    var a2 = Pt(c2), u2 = { current: [] }, l3 = Ge(function(e3) {
      var t3 = e3.state;
      if (t3.isOpen) {
        var n4 = t3.collections.reduce(function(e4, t4) {
          return [].concat(At(e4), At(t4.items));
        }, []).filter(Dt);
        ut(u2.current.map(function(e4) {
          return e4.objectID;
        }), n4.map(function(e4) {
          return e4.objectID;
        })) || (u2.current = n4, n4.length > 0 && qt({ onItemsChange: r2, items: n4, insights: a2, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
      var t3 = e3.setContext, n4 = e3.onSelect, r3 = e3.onActive;
      c2("addAlgoliaAgent", "insights-plugin"), t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: true }, insights: a2 } }), n4(function(e4) {
        var t4 = e4.item, n5 = e4.state, r4 = e4.event;
        Dt(t4) && o2({ state: n5, event: r4, insights: a2, item: t4, insightsEvents: [xt({ eventName: "Item Selected" }, pt({ item: t4, items: u2.current }))] });
      }), r3(function(e4) {
        var t4 = e4.item, n5 = e4.state, r4 = e4.event;
        Dt(t4) && i2({ state: n5, event: r4, insights: a2, item: t4, insightsEvents: [xt({ eventName: "Item Active" }, pt({ item: t4, items: u2.current }))] });
      });
    }, onStateChange: function(e3) {
      var t3 = e3.state;
      l3({ state: t3 });
    }, __autocomplete_pluginOptions: e2 };
  }
  function Mt(e2) {
    (function(e3, t2) {
      if (!e3) {
        var n3 = t2.trim();
        ft.current[n3] || (ft.current[n3] = true, console.warn("[Autocomplete] ".concat(n3)));
      }
    })(!e2.debug, "The `debug` option is meant for development debugging and should not be used in production.");
  }
  function Ht(e2, t2) {
    var n3 = t2;
    return { then: function(t3, r2) {
      return Ht(e2.then(Ft(t3, n3, e2), Ft(r2, n3, e2)), n3);
    }, catch: function(t3) {
      return Ht(e2.catch(Ft(t3, n3, e2)), n3);
    }, finally: function(t3) {
      return t3 && n3.onCancelList.push(t3), Ht(e2.finally(Ft(t3 && function() {
        return n3.onCancelList = [], t3();
      }, n3, e2)), n3);
    }, cancel: function() {
      n3.isCanceled = true;
      var e3 = n3.onCancelList;
      n3.onCancelList = [], e3.forEach(function(e4) {
        e4();
      });
    }, isCanceled: function() {
      return true === n3.isCanceled;
    } };
  }
  function Ut(e2) {
    return Ht(e2, { isCanceled: false, onCancelList: [] });
  }
  function Ft(e2, t2, n3) {
    return e2 ? function(n4) {
      return t2.isCanceled ? n4 : e2(n4);
    } : n3;
  }
  function Bt(e2, t2, n3, r2) {
    if (!n3)
      return null;
    if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2))
      return n3 + e2;
    var o2 = (null === t2 ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n3 ? null === r2 ? null : 0 : o2;
  }
  function Vt(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Kt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Vt(Object(n3), true).forEach(function(t3) {
        Wt(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Vt(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Wt(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== zt(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== zt(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === zt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function zt(e2) {
    return zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, zt(e2);
  }
  function Jt(e2) {
    var t2 = function(e3) {
      var t3 = e3.collections.map(function(e4) {
        return e4.items.length;
      }).reduce(function(e4, t4, n4) {
        var r3 = (e4[n4 - 1] || 0) + t4;
        return e4.push(r3), e4;
      }, []).reduce(function(t4, n4) {
        return n4 <= e3.activeItemId ? t4 + 1 : t4;
      }, 0);
      return e3.collections[t3];
    }(e2);
    if (!t2)
      return null;
    var n3 = t2.items[function(e3) {
      for (var t3 = e3.state, n4 = e3.collection, r3 = false, o2 = 0, i2 = 0; false === r3; ) {
        var c2 = t3.collections[o2];
        if (c2 === n4) {
          r3 = true;
          break;
        }
        i2 += c2.items.length, o2++;
      }
      return t3.activeItemId - i2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n3, itemInputValue: r2.getItemInputValue({ item: n3, state: e2 }), itemUrl: r2.getItemUrl({ item: n3, state: e2 }), source: r2 };
  }
  var $t = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function Qt(e2) {
    return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Qt(e2);
  }
  function Zt(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Yt(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Qt(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== Qt(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === Qt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Gt(e2, t2, n3) {
    var r2, o2 = t2.initialState;
    return { getState: function() {
      return o2;
    }, dispatch: function(r3, i2) {
      var c2 = function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n4 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? Zt(Object(n4), true).forEach(function(t4) {
            Yt(e3, t4, n4[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n4)) : Zt(Object(n4)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n4, t4));
          });
        }
        return e3;
      }({}, o2);
      o2 = e2(o2, { type: r3, props: t2, payload: i2 }), n3({ state: o2, prevState: c2 });
    }, pendingRequests: (r2 = [], { add: function(e3) {
      return r2.push(e3), e3.finally(function() {
        r2 = r2.filter(function(t3) {
          return t3 !== e3;
        });
      });
    }, cancelAll: function() {
      r2.forEach(function(e3) {
        return e3.cancel();
      });
    }, isEmpty: function() {
      return 0 === r2.length;
    } }) };
  }
  function Xt(e2) {
    return Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Xt(e2);
  }
  function en(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function tn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? en(Object(n3), true).forEach(function(t3) {
        nn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : en(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function nn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Xt(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== Xt(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === Xt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function rn(e2) {
    return rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, rn(e2);
  }
  function on(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return cn(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return cn(e3, t2);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return cn(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function cn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function an(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function un(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? an(Object(n3), true).forEach(function(t3) {
        ln(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : an(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function ln(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== rn(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== rn(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === rn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function sn(e2, t2) {
    var n3, r2 = "undefined" != typeof window ? window : {}, o2 = e2.plugins || [];
    return un(un({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: false, environment: r2, shouldPanelOpen: function(e3) {
      return it(e3.state) > 0;
    }, reshape: function(e3) {
      return e3.sources;
    } }, e2), {}, { id: null !== (n3 = e2.id) && void 0 !== n3 ? n3 : "autocomplete-".concat(ot++), plugins: o2, initialState: un({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e2.initialState), onStateChange: function(t3) {
      var n4;
      null === (n4 = e2.onStateChange) || void 0 === n4 || n4.call(e2, t3), o2.forEach(function(e3) {
        var n5;
        return null === (n5 = e3.onStateChange) || void 0 === n5 ? void 0 : n5.call(e3, t3);
      });
    }, onSubmit: function(t3) {
      var n4;
      null === (n4 = e2.onSubmit) || void 0 === n4 || n4.call(e2, t3), o2.forEach(function(e3) {
        var n5;
        return null === (n5 = e3.onSubmit) || void 0 === n5 ? void 0 : n5.call(e3, t3);
      });
    }, onReset: function(t3) {
      var n4;
      null === (n4 = e2.onReset) || void 0 === n4 || n4.call(e2, t3), o2.forEach(function(e3) {
        var n5;
        return null === (n5 = e3.onReset) || void 0 === n5 ? void 0 : n5.call(e3, t3);
      });
    }, getSources: function(n4) {
      return Promise.all([].concat(on(o2.map(function(e3) {
        return e3.getSources;
      })), [e2.getSources]).filter(Boolean).map(function(e3) {
        return function(e4, t3) {
          var n5 = [];
          return Promise.resolve(e4(t3)).then(function(e5) {
            return ct(Array.isArray(e5), function() {
              return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(zt(e5)), ":\n\n").concat(JSON.stringify(nt(e5), null, 2));
            }), Promise.all(e5.filter(function(e6) {
              return Boolean(e6);
            }).map(function(e6) {
              if (ct("string" == typeof e6.sourceId, "A source must provide a `sourceId` string."), n5.includes(e6.sourceId))
                throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e6.sourceId), " is not unique."));
              n5.push(e6.sourceId);
              var t4 = { getItemInputValue: function(e7) {
                return e7.state.query;
              }, getItemUrl: function() {
              }, onSelect: function(e7) {
                (0, e7.setIsOpen)(false);
              }, onActive: lt, onResolve: lt };
              Object.keys(t4).forEach(function(e7) {
                t4[e7].__default = true;
              });
              var r3 = Kt(Kt({}, t4), e6);
              return Promise.resolve(r3);
            }));
          });
        }(e3, n4);
      })).then(function(e3) {
        return rt(e3);
      }).then(function(e3) {
        return e3.map(function(e4) {
          return un(un({}, e4), {}, { onSelect: function(n5) {
            e4.onSelect(n5), t2.forEach(function(e5) {
              var t3;
              return null === (t3 = e5.onSelect) || void 0 === t3 ? void 0 : t3.call(e5, n5);
            });
          }, onActive: function(n5) {
            e4.onActive(n5), t2.forEach(function(e5) {
              var t3;
              return null === (t3 = e5.onActive) || void 0 === t3 ? void 0 : t3.call(e5, n5);
            });
          }, onResolve: function(n5) {
            e4.onResolve(n5), t2.forEach(function(e5) {
              var t3;
              return null === (t3 = e5.onResolve) || void 0 === t3 ? void 0 : t3.call(e5, n5);
            });
          } });
        });
      });
    }, navigator: un({ navigate: function(e3) {
      var t3 = e3.itemUrl;
      r2.location.assign(t3);
    }, navigateNewTab: function(e3) {
      var t3 = e3.itemUrl, n4 = r2.open(t3, "_blank", "noopener");
      null == n4 || n4.focus();
    }, navigateNewWindow: function(e3) {
      var t3 = e3.itemUrl;
      r2.open(t3, "_blank", "noopener");
    } }, e2.navigator) });
  }
  function fn2(e2) {
    return fn2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, fn2(e2);
  }
  function pn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function mn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? pn(Object(n3), true).forEach(function(t3) {
        vn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : pn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function vn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== fn2(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== fn2(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === fn2(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function dn(e2) {
    return dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, dn(e2);
  }
  function yn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function hn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? yn(Object(n3), true).forEach(function(t3) {
        bn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : yn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function bn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== dn(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== dn(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === dn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function gn(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return _n(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return _n(e3, t2);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return _n(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _n(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function On(e2) {
    return Boolean(e2.execute);
  }
  function Sn(e2, t2, n3) {
    if (o2 = e2, Boolean(null == o2 ? void 0 : o2.execute)) {
      var r2 = "algolia" === e2.requesterId ? Object.assign.apply(Object, [{}].concat(gn(Object.keys(n3.context).map(function(e3) {
        var t3;
        return null === (t3 = n3.context[e3]) || void 0 === t3 ? void 0 : t3.__algoliaSearchParameters;
      })))) : {};
      return hn(hn({}, e2), {}, { requests: e2.queries.map(function(n4) {
        return { query: "algolia" === e2.requesterId ? hn(hn({}, n4), {}, { params: hn(hn({}, r2), n4.params) }) : n4, sourceId: t2, transformResponse: e2.transformResponse };
      }) });
    }
    var o2;
    return { items: e2, sourceId: t2 };
  }
  function wn(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!On(t3))
        return e3.push(t3), e3;
      var n3 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, c2 = e3.find(function(e4) {
        return On(t3) && On(e4) && e4.searchClient === n3 && Boolean(o2) && e4.requesterId === o2;
      });
      if (c2) {
        var a2;
        (a2 = c2.items).push.apply(a2, gn(i2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n3 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!On(e3))
        return Promise.resolve(e3);
      var t3 = e3, n3 = t3.execute, r2 = t3.items;
      return n3({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return rt(e3);
    });
  }
  function jn(e2, t2, n3) {
    return t2.map(function(t3) {
      var r2, o2 = e2.filter(function(e3) {
        return e3.sourceId === t3.sourceId;
      }), i2 = o2.map(function(e3) {
        return e3.items;
      }), c2 = o2[0].transformResponse, a2 = c2 ? c2({ results: r2 = i2, hits: r2.map(function(e3) {
        return e3.hits;
      }).filter(Boolean), facetHits: r2.map(function(e3) {
        var t4;
        return null === (t4 = e3.facetHits) || void 0 === t4 ? void 0 : t4.map(function(e4) {
          return { label: e4.value, count: e4.count, _highlightResult: { label: { value: e4.highlighted } } };
        });
      }).filter(Boolean) }) : i2;
      return t3.onResolve({ source: t3, results: i2, items: a2, state: n3.getState() }), ct(Array.isArray(a2), function() {
        return 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(dn(a2)), ":\n\n").concat(JSON.stringify(nt(a2), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
      }), ct(a2.every(Boolean), 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), { source: t3, items: a2 };
    });
  }
  function En(e2) {
    return En = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, En(e2);
  }
  var Pn = ["event", "nextState", "props", "query", "refresh", "store"];
  function In(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Dn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? In(Object(n3), true).forEach(function(t3) {
        kn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : In(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function kn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== En(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== En(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === En(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function An(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  var Cn;
  var Nn;
  var xn;
  var Tn = null;
  var Rn = (Cn = -1, Nn = -1, xn = void 0, function(e2) {
    var t2 = ++Cn;
    return Promise.resolve(e2).then(function(e3) {
      return xn && t2 < Nn ? xn : (Nn = t2, xn = e3, e3);
    });
  });
  function qn(e2) {
    var t2 = e2.event, n3 = e2.nextState, r2 = void 0 === n3 ? {} : n3, o2 = e2.props, i2 = e2.query, c2 = e2.refresh, a2 = e2.store, u2 = An(e2, Pn);
    Tn && o2.environment.clearTimeout(Tn);
    var l3 = u2.setCollections, s3 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
    if (f2(i2), p2(o2.defaultActiveItemId), !i2 && false === o2.openOnFocus) {
      var v2, d2 = a2.getState().collections.map(function(e3) {
        return Dn(Dn({}, e3), {}, { items: [] });
      });
      m2("idle"), l3(d2), s3(null !== (v2 = r2.isOpen) && void 0 !== v2 ? v2 : o2.shouldPanelOpen({ state: a2.getState() }));
      var y2 = Ut(Rn(d2).then(function() {
        return Promise.resolve();
      }));
      return a2.pendingRequests.add(y2);
    }
    m2("loading"), Tn = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var h2 = Ut(Rn(o2.getSources(Dn({ query: i2, refresh: c2, state: a2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems(Dn({ query: i2, refresh: c2, state: a2.getState() }, u2))).then(function(t3) {
          return Sn(t3, e4.sourceId, a2.getState());
        });
      })).then(wn).then(function(t3) {
        return jn(t3, e3, a2);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.collections, n4 = e5.props, r3 = e5.state, o3 = t3.reduce(function(e6, t4) {
            return mn(mn({}, e6), {}, vn({}, t4.source.sourceId, mn(mn({}, t4.source), {}, { getItems: function() {
              return rt(t4.items);
            } })));
          }, {}), i3 = n4.plugins.reduce(function(e6, t4) {
            return t4.reshape ? t4.reshape(e6) : e6;
          }, { sourcesBySourceId: o3, state: r3 }).sourcesBySourceId;
          return rt(n4.reshape({ sourcesBySourceId: i3, sources: Object.values(i3), state: r3 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: a2.getState() });
      });
    }))).then(function(e3) {
      var n4;
      m2("idle"), l3(e3);
      var f3 = o2.shouldPanelOpen({ state: a2.getState() });
      s3(null !== (n4 = r2.isOpen) && void 0 !== n4 ? n4 : o2.openOnFocus && !i2 && f3 || f3);
      var p3 = Jt(a2.getState());
      if (null !== a2.getState().activeItemId && p3) {
        var v3 = p3.item, d3 = p3.itemInputValue, y3 = p3.itemUrl, h3 = p3.source;
        h3.onActive(Dn({ event: t2, item: v3, itemInputValue: d3, itemUrl: y3, refresh: c2, source: h3, state: a2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), Tn && o2.environment.clearTimeout(Tn);
    });
    return a2.pendingRequests.add(h2);
  }
  function Ln(e2) {
    return Ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Ln(e2);
  }
  var Mn = ["event", "props", "refresh", "store"];
  function Hn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Un(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Hn(Object(n3), true).forEach(function(t3) {
        Fn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Hn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Fn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Ln(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== Ln(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === Ln(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Bn(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Vn(e2) {
    return Vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Vn(e2);
  }
  var Kn = ["props", "refresh", "store"];
  var Wn = ["inputElement", "formElement", "panelElement"];
  var zn = ["inputElement"];
  var Jn = ["inputElement", "maxLength"];
  var $n = ["sourceIndex"];
  var Qn = ["sourceIndex"];
  var Zn = ["item", "source", "sourceIndex"];
  function Yn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Gn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Yn(Object(n3), true).forEach(function(t3) {
        Xn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Yn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Xn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Vn(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== Vn(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === Vn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function er(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function tr(e2) {
    var t2 = e2.props, n3 = e2.refresh, r2 = e2.store, o2 = er(e2, Kn), i2 = function(e3, t3) {
      return void 0 !== t3 ? "".concat(e3, "-").concat(t3) : e3;
    };
    return { getEnvironmentProps: function(e3) {
      var n4 = e3.inputElement, o3 = e3.formElement, i3 = e3.panelElement;
      function c2(e4) {
        !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e4.target === n4 || false === [o3, i3].some(function(t3) {
          return n5 = t3, r3 = e4.target, n5 === r3 || n5.contains(r3);
          var n5, r3;
        }) && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
      }
      return Gn({ onTouchStart: c2, onMouseDown: c2, onTouchMove: function(e4) {
        false !== r2.getState().isOpen && n4 === t2.environment.document.activeElement && e4.target !== n4 && n4.blur();
      } }, er(e3, Wn));
    }, getRootProps: function(e3) {
      return Gn({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label") }, e3);
    }, getFormProps: function(e3) {
      e3.inputElement;
      return Gn({ action: "", noValidate: true, role: "search", onSubmit: function(i3) {
        var c2;
        i3.preventDefault(), t2.onSubmit(Gn({ event: i3, refresh: n3, state: r2.getState() }, o2)), r2.dispatch("submit", null), null === (c2 = e3.inputElement) || void 0 === c2 || c2.blur();
      }, onReset: function(i3) {
        var c2;
        i3.preventDefault(), t2.onReset(Gn({ event: i3, refresh: n3, state: r2.getState() }, o2)), r2.dispatch("reset", null), null === (c2 = e3.inputElement) || void 0 === c2 || c2.focus();
      } }, er(e3, zn));
    }, getLabelProps: function(e3) {
      var n4 = e3 || {}, r3 = n4.sourceIndex, o3 = er(n4, $n);
      return Gn({ htmlFor: "".concat(i2(t2.id, r3), "-input"), id: "".concat(i2(t2.id, r3), "-label") }, o3);
    }, getInputProps: function(e3) {
      var i3;
      function c2(e4) {
        (t2.openOnFocus || Boolean(r2.getState().query)) && qn(Gn({ event: e4, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n3, store: r2 }, o2)), r2.dispatch("focus", null);
      }
      var a2 = e3 || {}, u2 = (a2.inputElement, a2.maxLength), l3 = void 0 === u2 ? 512 : u2, s3 = er(a2, Jn), f2 = Jt(r2.getState()), p2 = function(e4) {
        return Boolean(e4 && e4.match($t));
      }((null === (i3 = t2.environment.navigator) || void 0 === i3 ? void 0 : i3.userAgent) || ""), m2 = null != f2 && f2.itemUrl && !p2 ? "go" : "search";
      return Gn({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && null !== r2.getState().activeItemId ? "".concat(t2.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t2.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: l3, type: "search", onChange: function(e4) {
        qn(Gn({ event: e4, props: t2, query: e4.currentTarget.value.slice(0, l3), refresh: n3, store: r2 }, o2));
      }, onKeyDown: function(e4) {
        !function(e5) {
          var t3 = e5.event, n4 = e5.props, r3 = e5.refresh, o3 = e5.store, i4 = Bn(e5, Mn);
          if ("ArrowUp" === t3.key || "ArrowDown" === t3.key) {
            var c3 = function() {
              var e6 = n4.environment.document.getElementById("".concat(n4.id, "-item-").concat(o3.getState().activeItemId));
              e6 && (e6.scrollIntoViewIfNeeded ? e6.scrollIntoViewIfNeeded(false) : e6.scrollIntoView(false));
            }, a3 = function() {
              var e6 = Jt(o3.getState());
              if (null !== o3.getState().activeItemId && e6) {
                var n5 = e6.item, c4 = e6.itemInputValue, a4 = e6.itemUrl, u4 = e6.source;
                u4.onActive(Un({ event: t3, item: n5, itemInputValue: c4, itemUrl: a4, refresh: r3, source: u4, state: o3.getState() }, i4));
              }
            };
            t3.preventDefault(), false === o3.getState().isOpen && (n4.openOnFocus || Boolean(o3.getState().query)) ? qn(Un({ event: t3, props: n4, query: o3.getState().query, refresh: r3, store: o3 }, i4)).then(function() {
              o3.dispatch(t3.key, { nextActiveItemId: n4.defaultActiveItemId }), a3(), setTimeout(c3, 0);
            }) : (o3.dispatch(t3.key, {}), a3(), c3());
          } else if ("Escape" === t3.key)
            t3.preventDefault(), o3.dispatch(t3.key, null), o3.pendingRequests.cancelAll();
          else if ("Tab" === t3.key)
            o3.dispatch("blur", null), o3.pendingRequests.cancelAll();
          else if ("Enter" === t3.key) {
            if (null === o3.getState().activeItemId || o3.getState().collections.every(function(e6) {
              return 0 === e6.items.length;
            }))
              return void (n4.debug || o3.pendingRequests.cancelAll());
            t3.preventDefault();
            var u3 = Jt(o3.getState()), l4 = u3.item, s4 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
            if (t3.metaKey || t3.ctrlKey)
              void 0 !== f3 && (p3.onSelect(Un({ event: t3, item: l4, itemInputValue: s4, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), n4.navigator.navigateNewTab({ itemUrl: f3, item: l4, state: o3.getState() }));
            else if (t3.shiftKey)
              void 0 !== f3 && (p3.onSelect(Un({ event: t3, item: l4, itemInputValue: s4, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), n4.navigator.navigateNewWindow({ itemUrl: f3, item: l4, state: o3.getState() }));
            else if (t3.altKey)
              ;
            else {
              if (void 0 !== f3)
                return p3.onSelect(Un({ event: t3, item: l4, itemInputValue: s4, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), void n4.navigator.navigate({ itemUrl: f3, item: l4, state: o3.getState() });
              qn(Un({ event: t3, nextState: { isOpen: false }, props: n4, query: s4, refresh: r3, store: o3 }, i4)).then(function() {
                p3.onSelect(Un({ event: t3, item: l4, itemInputValue: s4, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4));
              });
            }
          }
        }(Gn({ event: e4, props: t2, refresh: n3, store: r2 }, o2));
      }, onFocus: c2, onBlur: lt, onClick: function(n4) {
        e3.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || c2(n4);
      } }, s3);
    }, getPanelProps: function(e3) {
      return Gn({ onMouseDown: function(e4) {
        e4.preventDefault();
      }, onMouseLeave: function() {
        r2.dispatch("mouseleave", null);
      } }, e3);
    }, getListProps: function(e3) {
      var n4 = e3 || {}, r3 = n4.sourceIndex, o3 = er(n4, Qn);
      return Gn({ role: "listbox", "aria-labelledby": "".concat(i2(t2.id, r3), "-label"), id: "".concat(i2(t2.id, r3), "-list") }, o3);
    }, getItemProps: function(e3) {
      var c2 = e3.item, a2 = e3.source, u2 = e3.sourceIndex, l3 = er(e3, Zn);
      return Gn({ id: "".concat(i2(t2.id, u2), "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
        if (c2.__autocomplete_id !== r2.getState().activeItemId) {
          r2.dispatch("mousemove", c2.__autocomplete_id);
          var t3 = Jt(r2.getState());
          if (null !== r2.getState().activeItemId && t3) {
            var i3 = t3.item, a3 = t3.itemInputValue, u3 = t3.itemUrl, l4 = t3.source;
            l4.onActive(Gn({ event: e4, item: i3, itemInputValue: a3, itemUrl: u3, refresh: n3, source: l4, state: r2.getState() }, o2));
          }
        }
      }, onMouseDown: function(e4) {
        e4.preventDefault();
      }, onClick: function(e4) {
        var i3 = a2.getItemInputValue({ item: c2, state: r2.getState() }), u3 = a2.getItemUrl({ item: c2, state: r2.getState() });
        (u3 ? Promise.resolve() : qn(Gn({ event: e4, nextState: { isOpen: false }, props: t2, query: i3, refresh: n3, store: r2 }, o2))).then(function() {
          a2.onSelect(Gn({ event: e4, item: c2, itemInputValue: i3, itemUrl: u3, refresh: n3, source: a2, state: r2.getState() }, o2));
        });
      } }, l3);
    } };
  }
  function nr(e2) {
    return nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, nr(e2);
  }
  function rr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function or(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? rr(Object(n3), true).forEach(function(t3) {
        ir(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : rr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function ir(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== nr(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== nr(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === nr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function cr(e2) {
    var t2, n3, r2, o2, i2 = e2.plugins, c2 = e2.options, a2 = null === (t2 = ((null === (n3 = c2.__autocomplete_metadata) || void 0 === n3 ? void 0 : n3.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = a2 ? ir({}, a2, Object.keys((null === (r2 = c2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: i2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: or({ "autocomplete-core": Object.keys(c2) }, u2), ua: st.concat((null === (o2 = c2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
  }
  function ar(e2) {
    var t2, n3 = e2.state;
    return false === n3.isOpen || null === n3.activeItemId ? null : (null === (t2 = Jt(n3)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function ur(e2) {
    return ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, ur(e2);
  }
  function lr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function sr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? lr(Object(n3), true).forEach(function(t3) {
        fr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : lr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function fr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== ur(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== ur(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === ur(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  var pr = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return sr(sr({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return sr(sr({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return sr(sr({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return sr(sr({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return sr(sr({}, e2), {}, { status: t2.payload });
      case "setContext":
        return sr(sr({}, e2), {}, { context: sr(sr({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n3 = sr(sr({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : Bt(1, e2.activeItemId, it(e2), t2.props.defaultActiveItemId) });
        return sr(sr({}, n3), {}, { completion: ar({ state: n3 }) });
      case "ArrowUp":
        var r2 = sr(sr({}, e2), {}, { activeItemId: Bt(-1, e2.activeItemId, it(e2), t2.props.defaultActiveItemId) });
        return sr(sr({}, r2), {}, { completion: ar({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? sr(sr({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : sr(sr({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return sr(sr({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return sr(sr({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
      case "focus":
        return sr(sr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : sr(sr({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return sr(sr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return ct(false, "The reducer action ".concat(JSON.stringify(t2.type), " is not supported.")), e2;
    }
  };
  function mr(e2) {
    return mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, mr(e2);
  }
  function vr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function dr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? vr(Object(n3), true).forEach(function(t3) {
        yr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : vr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function yr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== mr(e4) || null === e4)
          return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r2 = n4.call(e4, t4 || "default");
          if ("object" !== mr(r2))
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" === mr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function hr(e2) {
    Mt(e2);
    var t2 = [], n3 = sn(e2, t2), r2 = Gt(pr, n3, function(e3) {
      var t3 = e3.prevState, r3 = e3.state;
      n3.onStateChange(dr({ prevState: t3, state: r3, refresh: c2, navigator: n3.navigator }, o2));
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n4 = 0, r3 = e4.map(function(e5) {
          return tn(tn({}, e5), {}, { items: rt(e5.items).map(function(e6) {
            return tn(tn({}, e6), {}, { __autocomplete_id: n4++ });
          }) });
        });
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e4) {
        t3.dispatch("setIsOpen", e4);
      }, setStatus: function(e4) {
        t3.dispatch("setStatus", e4);
      }, setContext: function(e4) {
        t3.dispatch("setContext", e4);
      } };
    }({ store: r2 }), i2 = tr(dr({ props: n3, refresh: c2, store: r2, navigator: n3.navigator }, o2));
    function c2() {
      return qn(dr({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n3, navigator: n3.navigator, query: r2.getState().query, refresh: c2, store: r2 }, o2));
    }
    if (e2.insights && !n3.plugins.some(function(e3) {
      return "aa.algoliaInsightsPlugin" === e3.name;
    })) {
      var a2 = "boolean" == typeof e2.insights ? {} : e2.insights;
      n3.plugins.push(Lt(a2));
    }
    return n3.plugins.forEach(function(e3) {
      var r3;
      return null === (r3 = e3.subscribe) || void 0 === r3 ? void 0 : r3.call(e3, dr(dr({}, o2), {}, { navigator: n3.navigator, refresh: c2, onSelect: function(e4) {
        t2.push({ onSelect: e4 });
      }, onActive: function(e4) {
        t2.push({ onActive: e4 });
      }, onResolve: function(e4) {
        t2.push({ onResolve: e4 });
      } }));
    }), function(e3) {
      var t3, n4, r3 = e3.metadata, o3 = e3.environment;
      if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n4 = t3.userAgent) || void 0 === n4 ? void 0 : n4.includes("Algolia Crawler")) {
        var i3 = o3.document.createElement("meta"), c3 = o3.document.querySelector("head");
        i3.name = "algolia:metadata", setTimeout(function() {
          i3.content = JSON.stringify(r3), c3.appendChild(i3);
        }, 0);
      }
    }({ metadata: cr({ plugins: n3.plugins, options: e2 }), environment: n3.environment }), dr(dr({ refresh: c2, navigator: n3.navigator }, i2), o2);
  }
  function br(e2) {
    var t2 = e2.translations, n3 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n3 ? "Search by" : n3;
    return Be.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Be.createElement("span", { className: "DocSearch-Label" }, r2), Be.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, Be.createElement("defs", null, Be.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Be.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), Be.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), Be.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), Be.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), Be.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function gr(e2) {
    return Be.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, Be.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function _r(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = n3.selectText, o2 = void 0 === r2 ? "to select" : r2, i2 = n3.selectKeyAriaLabel, c2 = void 0 === i2 ? "Enter key" : i2, a2 = n3.navigateText, u2 = void 0 === a2 ? "to navigate" : a2, l3 = n3.navigateUpKeyAriaLabel, s3 = void 0 === l3 ? "Arrow up" : l3, f2 = n3.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n3.closeText, v2 = void 0 === m2 ? "to close" : m2, d2 = n3.closeKeyAriaLabel, y2 = void 0 === d2 ? "Escape key" : d2, h2 = n3.searchByText, b2 = void 0 === h2 ? "Search by" : h2;
    return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Logo" }, Be.createElement(br, { translations: { searchByText: b2 } })), Be.createElement("ul", { className: "DocSearch-Commands" }, Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: c2 }, Be.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Be.createElement("span", { className: "DocSearch-Label" }, o2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: p2 }, Be.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: s3 }, Be.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Be.createElement("span", { className: "DocSearch-Label" }, u2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(gr, { ariaLabel: y2 }, Be.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Be.createElement("span", { className: "DocSearch-Label" }, v2))));
  }
  function Or(e2) {
    var t2 = e2.hit, n3 = e2.children;
    return Be.createElement("a", { href: t2.url }, n3);
  }
  function Sr() {
    return Be.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Be.createElement("g", { fill: "none", fillRule: "evenodd" }, Be.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Be.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Be.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Be.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function wr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Be.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function jr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Er() {
    return Be.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Be.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Pr = function() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function Ir(e2) {
    switch (e2.type) {
      case "lvl1":
        return Be.createElement(Pr, null);
      case "content":
        return Be.createElement(kr, null);
      default:
        return Be.createElement(Dr, null);
    }
  }
  function Dr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function kr() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Ar() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Cr() {
    return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function Nr() {
    return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function xr(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = n3.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, i2 = n3.helpText, c2 = void 0 === i2 ? "You might want to check your network connection." : i2;
    return Be.createElement("div", { className: "DocSearch-ErrorScreen" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Cr, null)), Be.createElement("p", { className: "DocSearch-Title" }, o2), Be.createElement("p", { className: "DocSearch-Help" }, c2));
  }
  var Tr = ["translations"];
  function Rr(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return qr(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return qr(e3, t2);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return qr(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function qr(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function Lr(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Mr(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = Lr(e2, Tr), o2 = n3.noResultsText, i2 = void 0 === o2 ? "No results for" : o2, c2 = n3.suggestedQueryText, a2 = void 0 === c2 ? "Try searching for" : c2, u2 = n3.reportMissingResultsText, l3 = void 0 === u2 ? "Believe this query should return results?" : u2, s3 = n3.reportMissingResultsLinkText, f2 = void 0 === s3 ? "Let us know." : s3, p2 = r2.state.context.searchSuggestions;
    return Be.createElement("div", { className: "DocSearch-NoResults" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Nr, null)), Be.createElement("p", { className: "DocSearch-Title" }, i2, ' "', Be.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Be.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Be.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Be.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(Rr(e3), [Be.createElement("li", { key: t3 }, Be.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && Be.createElement("p", { className: "DocSearch-Help" }, "".concat(l3, " "), Be.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var Hr = ["hit", "attribute", "tagName"];
  function Ur(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Fr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ur(Object(n3), true).forEach(function(t3) {
        Br(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Ur(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Br(e2, t2, n3) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Vr(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Kr(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return null != e3 && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function Wr(e2) {
    var t2 = e2.hit, n3 = e2.attribute, r2 = e2.tagName;
    return _(void 0 === r2 ? "span" : r2, Fr(Fr({}, Vr(e2, Hr)), {}, { dangerouslySetInnerHTML: { __html: Kr(t2, "_snippetResult.".concat(n3, ".value")) || Kr(t2, n3) } }));
  }
  function zr(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n3)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n3 = n3.call(e3); !(c2 = (r2 = n3.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || null == n3.return || n3.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Jr(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return Jr(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Jr(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function $r() {
    return $r = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, $r.apply(this, arguments);
  }
  function Qr(e2) {
    return e2.collection && 0 !== e2.collection.items.length ? Be.createElement("section", { className: "DocSearch-Hits" }, Be.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Be.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n3) {
      return Be.createElement(Zr, $r({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n3 }, e2));
    }))) : null;
  }
  function Zr(e2) {
    var t2 = e2.item, n3 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, c2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l3 = zr(Be.useState(false), 2), s3 = l3[0], f2 = l3[1], p2 = zr(Be.useState(false), 2), m2 = p2[0], v2 = p2[1], d2 = Be.useRef(null), y2 = u2;
    return Be.createElement("li", $r({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s3 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      d2.current && d2.current();
    } }, i2({ item: t2, source: a2.source, onClick: function(e3) {
      c2(t2, e3);
    } })), Be.createElement(y2, { hit: t2 }, Be.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n3 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), d2.current = e3;
    }, runFavoriteTransition: function(e3) {
      v2(true), d2.current = e3;
    } }))));
  }
  function Yr(e2, t2, n3) {
    return e2.reduce(function(e3, r2) {
      var o2 = t2(r2);
      return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n3 || 5) && e3[o2].push(r2), e3;
    }, {});
  }
  function Gr(e2) {
    return e2;
  }
  function Xr(e2) {
    return 1 === e2.button || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
  }
  function eo() {
  }
  var to = /(<mark>|<\/mark>)/g;
  var no = RegExp(to.source);
  function ro(e2) {
    var t2, n3, r2 = e2;
    if (!r2.__docsearch_parent && !e2._highlightResult)
      return e2.hierarchy.lvl0;
    var o2 = ((r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n3 = e2._highlightResult) || void 0 === n3 || null === (n3 = n3.hierarchy) || void 0 === n3 ? void 0 : n3.lvl0) || {}).value;
    return o2 && no.test(o2) ? o2.replace(to, "") : o2;
  }
  function oo() {
    return oo = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, oo.apply(this, arguments);
  }
  function io(e2) {
    return Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (0 === t2.items.length)
        return null;
      var n3 = ro(t2.items[0]);
      return Be.createElement(Qr, oo({}, e2, { key: t2.source.sourceId, title: n3, collection: t2, renderIcon: function(e3) {
        var n4, r2 = e3.item, o2 = e3.index;
        return Be.createElement(Be.Fragment, null, r2.__docsearch_parent && Be.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n4 = t2.items[o2 + 1]) || void 0 === n4 ? void 0 : n4.__docsearch_parent) ? Be.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Be.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Ir, { type: r2.type })));
      }, renderAction: function() {
        return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement(Er, null));
      } }));
    }), e2.resultsFooterComponent && Be.createElement("section", { className: "DocSearch-HitsFooter" }, Be.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var co = ["translations"];
  function ao() {
    return ao = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, ao.apply(this, arguments);
  }
  function uo(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function lo(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = uo(e2, co), o2 = n3.recentSearchesTitle, i2 = void 0 === o2 ? "Recent" : o2, c2 = n3.noRecentSearchesText, a2 = void 0 === c2 ? "No recent searches" : c2, u2 = n3.saveRecentSearchButtonTitle, l3 = void 0 === u2 ? "Save this search" : u2, s3 = n3.removeRecentSearchButtonTitle, f2 = void 0 === s3 ? "Remove this search from history" : s3, p2 = n3.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, v2 = n3.removeFavoriteSearchButtonTitle, d2 = void 0 === v2 ? "Remove this search from favorites" : v2;
    return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : Be.createElement("div", { className: "DocSearch-StartScreen" }, Be.createElement("p", { className: "DocSearch-Help" }, a2)) : false === r2.hasCollections ? null : Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, Be.createElement(Qr, ao({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(wr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n4 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: l3, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n4(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(Ar, null))), Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(jr, null))));
    } })), Be.createElement(Qr, ao({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Ar, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n4 = e3.runDeleteTransition;
      return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: d2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n4(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(jr, null)));
    } })));
  }
  var so = ["translations"];
  function fo() {
    return fo = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, fo.apply(this, arguments);
  }
  function po(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  var mo = Be.memo(function(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = po(e2, so);
    if ("error" === r2.state.status)
      return Be.createElement(xr, { translations: null == n3 ? void 0 : n3.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? false === o2 ? Be.createElement(Mr, fo({}, r2, { translations: null == n3 ? void 0 : n3.noResultsScreen })) : Be.createElement(io, r2) : Be.createElement(lo, fo({}, r2, { hasCollections: o2, translations: null == n3 ? void 0 : n3.startScreen }));
  }, function(e2, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  var vo = ["translations"];
  function yo() {
    return yo = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, yo.apply(this, arguments);
  }
  function ho(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function bo(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = ho(e2, vo), o2 = n3.resetButtonTitle, i2 = void 0 === o2 ? "Clear the query" : o2, c2 = n3.resetButtonAriaLabel, a2 = void 0 === c2 ? "Clear the query" : c2, u2 = n3.cancelButtonText, l3 = void 0 === u2 ? "Cancel" : u2, s3 = n3.cancelButtonAriaLabel, f2 = void 0 === s3 ? "Cancel" : s3, p2 = n3.searchInputLabel, m2 = void 0 === p2 ? "Search" : p2, v2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return Be.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), Be.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), Be.createElement(Be.Fragment, null, Be.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: v2 }, Be.createElement("label", yo({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), Be.createElement(Ke, null), Be.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2)), Be.createElement("div", { className: "DocSearch-LoadingIndicator" }, Be.createElement(Sr, null)), Be.createElement("input", yo({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), Be.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": a2, hidden: !r2.state.query }, Be.createElement(jr, null))), Be.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l3));
  }
  var go = ["_highlightResult", "_snippetResult"];
  function _o(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Oo(e2) {
    return false === function() {
      var e3 = "__TEST_KEY__";
      try {
        return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
      } catch (e4) {
        return false;
      }
    }() ? { setItem: function() {
    }, getItem: function() {
      return [];
    } } : { setItem: function(t2) {
      return window.localStorage.setItem(e2, JSON.stringify(t2));
    }, getItem: function() {
      var t2 = window.localStorage.getItem(e2);
      return t2 ? JSON.parse(t2) : [];
    } };
  }
  function So(e2) {
    var t2 = e2.key, n3 = e2.limit, r2 = void 0 === n3 ? 5 : n3, o2 = Oo(t2), i2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3, n4 = (t3._highlightResult, t3._snippetResult, _o(t3, go)), c2 = i2.findIndex(function(e4) {
        return e4.objectID === n4.objectID;
      });
      c2 > -1 && i2.splice(c2, 1), i2.unshift(n4), i2 = i2.slice(0, r2), o2.setItem(i2);
    }, remove: function(e3) {
      i2 = i2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(i2);
    }, getAll: function() {
      return i2;
    } };
  }
  var wo = ["facetName", "facetQuery"];
  function jo(e2) {
    var t2, n3 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
      return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
    }, o2 = function() {
      return JSON.parse(r2().getItem(n3) || "{}");
    }, i2 = function(e3) {
      r2().setItem(n3, JSON.stringify(e3));
    }, a2 = function() {
      var t3 = e2.timeToLive ? 1e3 * e2.timeToLive : null, n4 = o2(), r3 = Object.fromEntries(Object.entries(n4).filter(function(e3) {
        return void 0 !== c(e3, 2)[1].timestamp;
      }));
      if (i2(r3), t3) {
        var a3 = Object.fromEntries(Object.entries(r3).filter(function(e3) {
          var n5 = c(e3, 2)[1], r4 = (/* @__PURE__ */ new Date()).getTime();
          return !(n5.timestamp + t3 < r4);
        }));
        i2(a3);
      }
    };
    return { get: function(e3, t3) {
      var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        a2();
        var t4 = JSON.stringify(e3);
        return o2()[t4];
      }).then(function(e4) {
        return Promise.all([e4 ? e4.value : t3(), void 0 !== e4]);
      }).then(function(e4) {
        var t4 = c(e4, 2), r3 = t4[0], o3 = t4[1];
        return Promise.all([r3, o3 || n4.miss(r3)]);
      }).then(function(e4) {
        return c(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve().then(function() {
        var i3 = o2();
        return i3[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n3, JSON.stringify(i3)), t3;
      });
    }, delete: function(e3) {
      return Promise.resolve().then(function() {
        var t3 = o2();
        delete t3[JSON.stringify(e3)], r2().setItem(n3, JSON.stringify(t3));
      });
    }, clear: function() {
      return Promise.resolve().then(function() {
        r2().removeItem(n3);
      });
    } };
  }
  function Eo(e2) {
    var t2 = a(e2.caches), n3 = t2.shift();
    return void 0 === n3 ? { get: function(e3, t3) {
      var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n4.miss(e4)]);
      }).then(function(e4) {
        return c(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve(t3);
    }, delete: function(e3) {
      return Promise.resolve();
    }, clear: function() {
      return Promise.resolve();
    } } : { get: function(e3, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return n3.get(e3, r2, o2).catch(function() {
        return Eo({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n3.set(e3, r2).catch(function() {
        return Eo({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n3.delete(e3).catch(function() {
        return Eo({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n3.clear().catch(function() {
        return Eo({ caches: t2 }).clear();
      });
    } };
  }
  function Po() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n3, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, i2 = JSON.stringify(n3);
      if (i2 in t2)
        return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      var c2 = r2(), a2 = o2 && o2.miss || function() {
        return Promise.resolve();
      };
      return c2.then(function(e3) {
        return a2(e3);
      }).then(function() {
        return c2;
      });
    }, set: function(n3, r2) {
      return t2[JSON.stringify(n3)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Io(e2) {
    for (var t2 = e2.length - 1; t2 > 0; t2--) {
      var n3 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
      e2[t2] = e2[n3], e2[n3] = r2;
    }
    return e2;
  }
  function Do(e2, t2) {
    return t2 ? (Object.keys(t2).forEach(function(n3) {
      e2[n3] = t2[n3](e2);
    }), e2) : e2;
  }
  function ko(e2) {
    for (var t2 = arguments.length, n3 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
      n3[r2 - 1] = arguments[r2];
    var o2 = 0;
    return e2.replace(/%s/g, function() {
      return encodeURIComponent(n3[o2++]);
    });
  }
  var Ao = { WithinQueryParameters: 0, WithinHeaders: 1 };
  function Co(e2, t2) {
    var n3 = e2 || {}, r2 = n3.data || {};
    return Object.keys(n3).forEach(function(e3) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (r2[e3] = n3[e3]);
    }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n3.timeout || t2, headers: n3.headers || {}, queryParameters: n3.queryParameters || {}, cacheable: n3.cacheable };
  }
  var No = { Read: 1, Write: 2, Any: 3 };
  var xo = 1;
  var To = 2;
  var Ro = 3;
  function qo(e2) {
    var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xo;
    return t(t({}, e2), {}, { status: n3, lastUpdate: Date.now() });
  }
  function Lo(e2) {
    return "string" == typeof e2 ? { protocol: "https", url: e2, accept: No.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || No.Any };
  }
  var Mo = "GET";
  var Ho = "POST";
  function Uo(e2, t2) {
    return Promise.all(t2.map(function(t3) {
      return e2.get(t3, function() {
        return Promise.resolve(qo(t3));
      });
    })).then(function(e3) {
      var n3 = e3.filter(function(e4) {
        return function(e5) {
          return e5.status === xo || Date.now() - e5.lastUpdate > 12e4;
        }(e4);
      }), r2 = e3.filter(function(e4) {
        return function(e5) {
          return e5.status === Ro && Date.now() - e5.lastUpdate <= 12e4;
        }(e4);
      }), o2 = [].concat(a(n3), a(r2));
      return { getTimeout: function(e4, t3) {
        return (0 === r2.length && 0 === e4 ? 1 : r2.length + 3 + e4) * t3;
      }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
        return Lo(e4);
      }) : t2 };
    });
  }
  function Fo(e2, n3, r2, o2) {
    var i2 = [], c2 = function(e3, n4) {
      if (e3.method === Mo || void 0 === e3.data && void 0 === n4.data)
        return;
      var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n4.data);
      return JSON.stringify(r3);
    }(r2, o2), u2 = function(e3, n4) {
      var r3 = t(t({}, e3.headers), n4.headers), o3 = {};
      return Object.keys(r3).forEach(function(e4) {
        var t2 = r3[e4];
        o3[e4.toLowerCase()] = t2;
      }), o3;
    }(e2, o2), l3 = r2.method, s3 = r2.method !== Mo ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s3), o2.queryParameters), p2 = 0, m2 = function t2(n4, a2) {
      var s4 = n4.pop();
      if (void 0 === s4)
        throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Wo(i2) };
      var m3 = { data: c2, headers: u2, method: l3, url: Vo(s4, r2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, o2.timeout) }, v2 = function(e3) {
        var t3 = { request: m3, response: e3, host: s4, triesLeft: n4.length };
        return i2.push(t3), t3;
      }, d2 = { onSuccess: function(e3) {
        return function(e4) {
          try {
            return JSON.parse(e4.content);
          } catch (t3) {
            throw /* @__PURE__ */ function(e5, t4) {
              return { name: "DeserializationError", message: e5, response: t4 };
            }(t3.message, e4);
          }
        }(e3);
      }, onRetry: function(r3) {
        var o3 = v2(r3);
        return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", zo(o3)), e2.hostsCache.set(s4, qo(s4, r3.isTimedOut ? Ro : To))]).then(function() {
          return t2(n4, a2);
        });
      }, onFail: function(e3) {
        throw v2(e3), function(e4, t3) {
          var n5 = e4.content, r3 = e4.status, o3 = n5;
          try {
            o3 = JSON.parse(n5).message;
          } catch (e5) {
          }
          return /* @__PURE__ */ function(e5, t4, n6) {
            return { name: "ApiError", message: e5, status: t4, transporterStackTrace: n6 };
          }(o3, r3, t3);
        }(e3, Wo(i2));
      } };
      return e2.requester.send(m3).then(function(e3) {
        return function(e4, t3) {
          return function(e5) {
            var t4 = e5.status;
            return e5.isTimedOut || function(e6) {
              var t5 = e6.isTimedOut, n5 = e6.status;
              return !t5 && 0 == ~~n5;
            }(e5) || 2 != ~~(t4 / 100) && 4 != ~~(t4 / 100);
          }(e4) ? t3.onRetry(e4) : 2 == ~~(e4.status / 100) ? t3.onSuccess(e4) : t3.onFail(e4);
        }(e3, d2);
      });
    };
    return Uo(e2.hostsCache, n3).then(function(e3) {
      return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
    });
  }
  function Bo(e2) {
    var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
      var n3 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
      return -1 === t2.value.indexOf(n3) && (t2.value = "".concat(t2.value).concat(n3)), t2;
    } };
    return t2;
  }
  function Vo(e2, t2, n3) {
    var r2 = Ko(n3), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
    return r2.length && (o2 += "?".concat(r2)), o2;
  }
  function Ko(e2) {
    return Object.keys(e2).map(function(t2) {
      return ko("%s=%s", t2, (n3 = e2[t2], "[object Object]" === Object.prototype.toString.call(n3) || "[object Array]" === Object.prototype.toString.call(n3) ? JSON.stringify(e2[t2]) : e2[t2]));
      var n3;
    }).join("&");
  }
  function Wo(e2) {
    return e2.map(function(e3) {
      return zo(e3);
    });
  }
  function zo(e2) {
    var n3 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n3) }) });
  }
  var Jo = function(e2) {
    var n3 = e2.appId, r2 = /* @__PURE__ */ function(e3, t2, n4) {
      var r3 = { "x-algolia-api-key": n4, "x-algolia-application-id": t2 };
      return { headers: function() {
        return e3 === Ao.WithinHeaders ? r3 : {};
      }, queryParameters: function() {
        return e3 === Ao.WithinQueryParameters ? r3 : {};
      } };
    }(void 0 !== e2.authMode ? e2.authMode : Ao.WithinHeaders, n3, e2.apiKey), o2 = function(e3) {
      var t2 = e3.hostsCache, n4 = e3.logger, r3 = e3.requester, o3 = e3.requestsCache, i3 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l3 = e3.hosts, s3 = e3.queryParameters, f2 = { hostsCache: t2, logger: n4, requester: r3, requestsCache: o3, responsesCache: i3, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s3, hosts: l3.map(function(e4) {
        return Lo(e4);
      }), read: function(e4, t3) {
        var n5 = Co(t3, f2.timeouts.read), r4 = function() {
          return Fo(f2, f2.hosts.filter(function(e5) {
            return 0 != (e5.accept & No.Read);
          }), e4, n5);
        };
        if (true !== (void 0 !== n5.cacheable ? n5.cacheable : e4.cacheable))
          return r4();
        var o4 = { request: e4, mappedRequestOptions: n5, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
        return f2.responsesCache.get(o4, function() {
          return f2.requestsCache.get(o4, function() {
            return f2.requestsCache.set(o4, r4()).then(function(e5) {
              return Promise.all([f2.requestsCache.delete(o4), e5]);
            }, function(e5) {
              return Promise.all([f2.requestsCache.delete(o4), Promise.reject(e5)]);
            }).then(function(e5) {
              var t4 = c(e5, 2);
              return t4[0], t4[1];
            });
          });
        }, { miss: function(e5) {
          return f2.responsesCache.set(o4, e5);
        } });
      }, write: function(e4, t3) {
        return Fo(f2, f2.hosts.filter(function(e5) {
          return 0 != (e5.accept & No.Write);
        }), e4, Co(t3, f2.timeouts.write));
      } };
      return f2;
    }(t(t({ hosts: [{ url: "".concat(n3, "-dsn.algolia.net"), accept: No.Read }, { url: "".concat(n3, ".algolia.net"), accept: No.Write }].concat(Io([{ url: "".concat(n3, "-1.algolianet.com") }, { url: "".concat(n3, "-2.algolianet.com") }, { url: "".concat(n3, "-3.algolianet.com") }])) }, e2), {}, { headers: t(t(t({}, r2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: t(t({}, r2.queryParameters()), e2.queryParameters) })), i2 = { transporter: o2, appId: n3, addAlgoliaAgent: function(e3, t2) {
      o2.userAgent.add({ segment: e3, version: t2 });
    }, clearCache: function() {
      return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
      });
    } };
    return Do(i2, e2.methods);
  };
  var $o = function(e2) {
    return function(t2, n3) {
      return t2.method === Mo ? e2.transporter.read(t2, n3) : e2.transporter.write(t2, n3);
    };
  };
  var Qo = function(e2) {
    return function(t2) {
      var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
      return Do(r2, n3.methods);
    };
  };
  var Zo = function(e2) {
    return function(n3, r2) {
      var o2 = n3.map(function(e3) {
        return t(t({}, e3), {}, { params: Ko(e3.params || {}) });
      });
      return e2.transporter.read({ method: Ho, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
    };
  };
  var Yo = function(e2) {
    return function(n3, r2) {
      return Promise.all(n3.map(function(n4) {
        var o2 = n4.params, c2 = o2.facetName, a2 = o2.facetQuery, u2 = i(o2, wo);
        return Qo(e2)(n4.indexName, { methods: { searchForFacetValues: ei } }).searchForFacetValues(c2, a2, t(t({}, r2), u2));
      }));
    };
  };
  var Go = function(e2) {
    return function(t2, n3, r2) {
      return e2.transporter.read({ method: Ho, path: ko("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n3 }, cacheable: true }, r2);
    };
  };
  var Xo = function(e2) {
    return function(t2, n3) {
      return e2.transporter.read({ method: Ho, path: ko("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n3);
    };
  };
  var ei = function(e2) {
    return function(t2, n3, r2) {
      return e2.transporter.read({ method: Ho, path: ko("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n3 }, cacheable: true }, r2);
    };
  };
  var ti = 1;
  var ni = 2;
  var ri = 3;
  function oi(e2, n3, r2) {
    var o2, i2 = { appId: e2, apiKey: n3, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
      return new Promise(function(t2) {
        var n4 = new XMLHttpRequest();
        n4.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t3) {
          return n4.setRequestHeader(t3, e3.headers[t3]);
        });
        var r3, o3 = function(e4, r4) {
          return setTimeout(function() {
            n4.abort(), t2({ status: 0, content: r4, isTimedOut: true });
          }, 1e3 * e4);
        }, i3 = o3(e3.connectTimeout, "Connection timeout");
        n4.onreadystatechange = function() {
          n4.readyState > n4.OPENED && void 0 === r3 && (clearTimeout(i3), r3 = o3(e3.responseTimeout, "Socket timeout"));
        }, n4.onerror = function() {
          0 === n4.status && (clearTimeout(i3), clearTimeout(r3), t2({ content: n4.responseText || "Network request failed", status: n4.status, isTimedOut: false }));
        }, n4.onload = function() {
          clearTimeout(i3), clearTimeout(r3), t2({ content: n4.responseText, status: n4.status, isTimedOut: false });
        }, n4.send(e3.data);
      });
    } }, logger: (o2 = ri, { debug: function(e3, t2) {
      return ti >= o2 && console.debug(e3, t2), Promise.resolve();
    }, info: function(e3, t2) {
      return ni >= o2 && console.info(e3, t2), Promise.resolve();
    }, error: function(e3, t2) {
      return console.error(e3, t2), Promise.resolve();
    } }), responsesCache: Po(), requestsCache: Po({ serializable: false }), hostsCache: Eo({ caches: [jo({ key: "".concat("4.19.1", "-").concat(e2) }), Po()] }), userAgent: Bo("4.19.1").add({ segment: "Browser", version: "lite" }), authMode: Ao.WithinQueryParameters };
    return Jo(t(t(t({}, i2), r2), {}, { methods: { search: Zo, searchForFacetValues: Yo, multipleQueries: Zo, multipleSearchForFacetValues: Yo, customRequest: $o, initIndex: function(e3) {
      return function(t2) {
        return Qo(e3)(t2, { methods: { search: Xo, searchForFacetValues: ei, findAnswers: Go } });
      };
    } } }));
  }
  oi.version = "4.19.1";
  var ii = ["footer", "searchBox"];
  function ci() {
    return ci = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, ci.apply(this, arguments);
  }
  function ai(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function ui(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? ai(Object(n3), true).forEach(function(t3) {
        li(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : ai(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function li(e2, t2, n3) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function si(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n3)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n3 = n3.call(e3); !(c2 = (r2 = n3.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || null == n3.return || n3.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return fi(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return fi(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function fi(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function pi(e2, t2) {
    if (null == e2)
      return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++)
        n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function mi(e2) {
    var t2 = e2.appId, n3 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = void 0 === o2 ? "Search docs" : o2, c2 = e2.searchParameters, a2 = e2.maxResultsPerGroup, u2 = e2.onClose, l3 = void 0 === u2 ? eo : u2, s3 = e2.transformItems, f2 = void 0 === s3 ? Gr : s3, p2 = e2.hitComponent, m2 = void 0 === p2 ? Or : p2, v2 = e2.resultsFooterComponent, d2 = void 0 === v2 ? function() {
      return null;
    } : v2, y2 = e2.navigator, h2 = e2.initialScrollY, b2 = void 0 === h2 ? 0 : h2, g2 = e2.transformSearchClient, _2 = void 0 === g2 ? Gr : g2, O2 = e2.disableUserPersonalization, S2 = void 0 !== O2 && O2, w2 = e2.initialQuery, j2 = void 0 === w2 ? "" : w2, E2 = e2.translations, P2 = void 0 === E2 ? {} : E2, I2 = e2.getMissingResultsUrl, D2 = e2.insights, k2 = void 0 !== D2 && D2, A2 = P2.footer, C2 = P2.searchBox, N2 = pi(P2, ii), x2 = si(Be.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = x2[0], R2 = x2[1], q2 = Be.useRef(null), L2 = Be.useRef(null), M2 = Be.useRef(null), H2 = Be.useRef(null), U2 = Be.useRef(null), F2 = Be.useRef(10), B2 = Be.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, V2 = Be.useRef(j2 || B2).current, K2 = function(e3, t3, n4) {
      return Be.useMemo(function() {
        var r3 = oi(e3, t3);
        return r3.addAlgoliaAgent("docsearch", "3.6.0"), false === /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) && r3.addAlgoliaAgent("docsearch-react", "3.6.0"), n4(r3);
      }, [e3, t3, n4]);
    }(t2, n3, _2), W2 = Be.useRef(So({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = Be.useRef(So({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === W2.getAll().length ? 7 : 4 })).current, J2 = Be.useCallback(function(e3) {
      if (!S2) {
        var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
        t3 && -1 === W2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) && z2.add(t3);
      }
    }, [W2, z2, S2]), $2 = Be.useCallback(function(e3) {
      if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
        var t3 = e3, n4 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n4);
      }
    }, [T2.context.algoliaInsightsPlugin]), Q2 = Be.useMemo(function() {
      return hr({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: k2, navigator: y2, onStateChange: function(e3) {
        R2(e3.state);
      }, getSources: function(e3) {
        var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s4 = e3.setStatus;
        if (!o3)
          return S2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
            var t3 = e4.item, n4 = e4.event;
            J2(t3), Xr(n4) || l3();
          }, getItemUrl: function(e4) {
            return e4.item.url;
          }, getItems: function() {
            return z2.getAll();
          } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
            var t3 = e4.item, n4 = e4.event;
            J2(t3), Xr(n4) || l3();
          }, getItemUrl: function(e4) {
            return e4.item.url;
          }, getItems: function() {
            return W2.getAll();
          } }];
        var p3 = Boolean(k2);
        return K2.search([{ query: o3, indexName: r2, params: ui({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, c2) }]).catch(function(e4) {
          throw "RetryError" === e4.name && s4("error"), e4;
        }).then(function(e4) {
          var o4 = e4.results[0], c3 = o4.hits, s5 = o4.nbHits, m3 = Yr(c3, function(e5) {
            return ro(e5);
          }, a2);
          i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s5 });
          var v3 = {};
          return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n3 } }), Object.values(m3).map(function(e5, t3) {
            return { sourceId: "hits".concat(t3), onSelect: function(e6) {
              var t4 = e6.item, n4 = e6.event;
              J2(t4), Xr(n4) || l3();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(Yr(e5, function(e6) {
                return e6.hierarchy.lvl1;
              }, a2)).map(f2).map(function(e6) {
                return e6.map(function(t4) {
                  var n4 = null, r3 = e6.find(function(e7) {
                    return "lvl1" === e7.type && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return "lvl1" !== t4.type && r3 && (n4 = r3), ui(ui({}, t4), {}, { __docsearch_parent: n4 }, v3);
                });
              }).flat();
            } };
          });
        });
      } });
    }, [r2, c2, a2, K2, l3, z2, W2, J2, V2, i2, y2, f2, S2, k2, t2, n3]), Z2 = Q2.getEnvironmentProps, Y2 = Q2.getRootProps, G2 = Q2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n4 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      Be.useEffect(function() {
        if (n4 && r3 && o3) {
          var e4 = t3({ panelElement: n4, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, c3 = e4.onTouchMove;
          return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", c3), function() {
            window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", c3);
          };
        }
      }, [t3, n4, r3, o3]);
    }({ getEnvironmentProps: Z2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
      var t3 = e3.container;
      Be.useEffect(function() {
        if (t3) {
          var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n4 = e4[0], r3 = e4[e4.length - 1];
          return t3.addEventListener("keydown", o3), function() {
            t3.removeEventListener("keydown", o3);
          };
        }
        function o3(e5) {
          "Tab" === e5.key && (e5.shiftKey ? document.activeElement === n4 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n4.focus()));
        }
      }, [t3]);
    }({ container: q2.current }), Be.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, b2);
      };
    }, []), Be.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
    }, []), Be.useEffect(function() {
      H2.current && (H2.current.scrollTop = 0);
    }, [T2.query]), Be.useEffect(function() {
      V2.length > 0 && (G2(), U2.current && U2.current.focus());
    }, [V2, G2]), Be.useEffect(function() {
      function e3() {
        if (L2.current) {
          var e4 = 0.01 * window.innerHeight;
          L2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), Be.createElement("div", ci({ ref: q2 }, Y2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === T2.status && "DocSearch-Container--Stalled", "error" === T2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && l3();
    } }), Be.createElement("div", { className: "DocSearch-Modal", ref: L2 }, Be.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, Be.createElement(bo, ci({}, Q2, { state: T2, autoFocus: 0 === V2.length, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: C2, onClose: l3 }))), Be.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, Be.createElement(mo, ci({}, Q2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: d2, disableUserPersonalization: S2, recentSearches: z2, favoriteSearches: W2, inputRef: U2, translations: N2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
      $2(e3), J2(e3), Xr(t3) || l3();
    } }))), Be.createElement("footer", { className: "DocSearch-Footer" }, Be.createElement(_r, { translations: A2 }))));
  }
  function vi() {
    return vi = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3)
          Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, vi.apply(this, arguments);
  }
  function di(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n3)
        return;
      var r2, o2, i2 = [], c2 = true, a2 = false;
      try {
        for (n3 = n3.call(e3); !(c2 = (r2 = n3.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          c2 || null == n3.return || n3.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return yi(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3)
        return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
        return yi(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function yi(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++)
      r2[n3] = e2[n3];
    return r2;
  }
  function hi(e2) {
    var t2, n3, r2 = Be.useRef(null), o2 = di(Be.useState(false), 2), i2 = o2[0], c2 = o2[1], a2 = di(Be.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = a2[0], l3 = a2[1], s3 = Be.useCallback(function() {
      c2(true);
    }, [c2]), f2 = Be.useCallback(function() {
      c2(false);
    }, [c2]);
    return function(e3) {
      var t3 = e3.isOpen, n4 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
      Be.useEffect(function() {
        function e4(e5) {
          var c3;
          (27 === e5.keyCode && t3 || "k" === (null === (c3 = e5.key) || void 0 === c3 ? void 0 : c3.toLowerCase()) && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n5 = t4.tagName;
            return t4.isContentEditable || "INPUT" === n5 || "SELECT" === n5 || "TEXTAREA" === n5;
          }(e5) && "/" === e5.key && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n4()), i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n4, r3, o3, i3]);
    }({ isOpen: i2, onOpen: s3, onClose: f2, onInput: Be.useCallback(function(e3) {
      c2(true), l3(e3.key);
    }, [c2, l3]), searchButtonRef: r2 }), Be.createElement(Be.Fragment, null, Be.createElement(Ze, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s3 }), i2 && Ie(Be.createElement(mi, vi({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n3 = e2.translations) || void 0 === n3 ? void 0 : n3.modal, onClose: f2 })), document.body));
  }
  function bi(e2) {
    Ce(Be.createElement(hi, o({}, e2, { transformSearchClient: function(t2) {
      return t2.addAlgoliaAgent("docsearch.js", "3.6.0"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
    } })), function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e3 ? t2.document.querySelector(e3) : e3;
    }(e2.container, e2.environment));
  }
  var esm_default = bi;

  // js/src/docsearch.js
  esm_default({
    appId: "S4T2OSB07R",
    apiKey: "ea6ae2e0546ad6007f7f464a296b67de",
    indexName: "chocolatey",
    container: "#docsearchResults"
  });

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
      for (const li2 of document.querySelectorAll("li")) {
        const firstChild = li2.firstChild;
        const isTaskListItem = li2.classList.contains("task-list-item");
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

  // js/src/scrollspy.js
  var import_jquery = __toESM(require_jquery());
  (() => {
    (0, import_jquery.default)(".nav-scrollspy .nav-link").each((index, element) => {
      const scrollHash = (0, import_jquery.default)(element).attr("href");
      const findActiveRightNavLink = (scrollHash2) => {
        if (scrollHash2 === "#") {
          (0, import_jquery.default)(element).parent().remove();
          return;
        }
        if (~scrollHash2.indexOf(".")) {
          scrollHash2 = scrollHash2.replace(/\./g, "\\.");
        }
        if ((0, import_jquery.default)(scrollHash2).length) {
          if ((0, import_jquery.default)(window).scrollTop() > (0, import_jquery.default)(scrollHash2).offset().top - 30 && (0, import_jquery.default)(scrollHash2).is(":visible")) {
            (0, import_jquery.default)(`a[href="${scrollHash2}"].nav-link`).addClass("active active-page");
            (0, import_jquery.default)(`a[href="${scrollHash2}"].nav-link`).parent().prev().find("a.active").removeClass("active active-page");
          } else {
            (0, import_jquery.default)(`a[href="${scrollHash2}"].nav-link`).removeClass("active active-page");
          }
        }
      };
      findActiveRightNavLink(scrollHash);
      window.addEventListener("scroll", () => {
        findActiveRightNavLink(scrollHash);
      });
    });
  })();

  // js/src/ts/tab-multiples.ts
  window.addEventListener("DOMContentLoaded", () => {
    const tabMultiAttribute = "data-choco-tab-multi";
    const tabMultiElements = document.querySelectorAll(`[${tabMultiAttribute}]`);
    const tabCookies = /* @__PURE__ */ new Set();
    if (tabMultiElements.value) {
      for (const tabElement of tabMultiElements) {
        const tabMultiConfigAttribute = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, "");
        let tabMultiConfig = null;
        try {
          tabMultiConfig = JSON.parse(tabMultiConfigAttribute != null ? tabMultiConfigAttribute : "");
        } catch (error) {
          console.error(`Invalid JSON: ${tabMultiConfigAttribute}`);
          return;
        }
        for (const key in tabMultiConfig) {
          if (Object.prototype.hasOwnProperty.call(tabMultiConfig, key)) {
            tabCookies.add(key);
          }
        }
        tabElement.addEventListener("click", () => {
          const tabMultiValue = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, "");
          for (const otherTab of tabMultiElements) {
            const otherTabMultiValue = otherTab.getAttribute(tabMultiAttribute).replace(/\s/g, "");
            if (otherTabMultiValue == null ? void 0 : otherTabMultiValue.includes(tabMultiValue != null ? tabMultiValue : "")) {
              Tab.getOrCreateInstance(otherTab).show();
            }
          }
          const cookieDomain = ~location.hostname.indexOf("chocolatey.org") ? "domain=chocolatey.org;" : "";
          for (const key in tabMultiConfig) {
            if (Object.prototype.hasOwnProperty.call(tabMultiConfig, key)) {
              const value = tabMultiConfig[key];
              document.cookie = `${key}=${value}; ${setCookieExpirationNever2()}path=/; ${cookieDomain}`;
            }
          }
        });
      }
      for (const cookieName of tabCookies) {
        const cookieValue = getCookie2(cookieName);
        if (cookieValue) {
          for (const tabElement of tabMultiElements) {
            const tabMultiValue = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, "");
            if ((tabMultiValue == null ? void 0 : tabMultiValue.includes(cookieName)) && (tabMultiValue == null ? void 0 : tabMultiValue.includes(cookieValue))) {
              Tab.getOrCreateInstance(tabElement).show();
            }
          }
        }
      }
    }
  });

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
          document.querySelectorAll("main").forEach((main2) => {
            main2.classList.remove("z-0");
          });
        });
        el.addEventListener("show.bs.dropdown", () => {
          document.querySelectorAll("main").forEach((main2) => {
            main2.classList.add("z-0");
          });
        });
      });
    });
  })();
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

@docsearch/js/dist/esm/index.js:
  (*! @docsearch/js 3.6.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
