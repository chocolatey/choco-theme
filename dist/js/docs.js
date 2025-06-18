/*!
  * choco-theme v1.2.2 (https://github.com/chocolatey/choco-theme#readme)
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

  // js/src/lib/prism.js
  var require_prism = __commonJS({
    "js/src/lib/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _2 = {
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
            type: function(o2) {
              return Object.prototype.toString.call(o2).slice(8, -1);
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
            clone: function deepClone(o2, visited) {
              visited = visited || {};
              var clone3;
              var id;
              switch (_2.util.type(o2)) {
                case "Object":
                  id = _2.util.objId(o2);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone3 = /** @type {Record<string, any>} */
                  {};
                  visited[id] = clone3;
                  for (var key in o2) {
                    if (o2.hasOwnProperty(key)) {
                      clone3[key] = deepClone(o2[key], visited);
                    }
                  }
                  return (
                    /** @type {any} */
                    clone3
                  );
                case "Array":
                  id = _2.util.objId(o2);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone3 = [];
                  visited[id] = clone3;
                  /** @type {Array} */
                  /** @type {any} */
                  o2.forEach(function(v2, i2) {
                    clone3[i2] = deepClone(v2, visited);
                  });
                  return (
                    /** @type {any} */
                    clone3
                  );
                default:
                  return o2;
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
                var m2 = lang.exec(element.className);
                if (m2) {
                  return m2[1].toLowerCase();
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
              if (document.currentScript && document.currentScript.tagName === "SCRIPT" && 1 < 2) {
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
                  for (var i2 in scripts) {
                    if (scripts[i2].src == src) {
                      return scripts[i2];
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
              var no2 = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no2)) {
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
              var lang2 = _2.util.clone(_2.languages[id]);
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
              _2.languages;
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
              _2.languages.DFS(_2.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o2, callback, type, visited) {
              visited = visited || {};
              var objId = _2.util.objId;
              for (var i2 in o2) {
                if (o2.hasOwnProperty(i2)) {
                  callback.call(o2, i2, o2[i2], type || i2);
                  var property = o2[i2];
                  var propertyType = _2.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i2, visited);
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
            _2.highlightAllUnder(document, async, callback);
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
            _2.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _2.hooks.run("before-all-elements-highlight", env);
            for (var i2 = 0, element; element = env.elements[i2++]; ) {
              _2.highlightElement(element, async === true, env.callback);
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
            var language = _2.util.getLanguage(element);
            var grammar = _2.languages[language];
            _2.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _2.util.setLanguage(parent, language);
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
              _2.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _2.hooks.run("after-highlight", env);
              _2.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _2.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _2.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _2.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_2.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_2.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_2.highlight(env.code, env.grammar, env.language));
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
            _2.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _2.tokenize(env.code, env.grammar);
            _2.hooks.run("after-tokenize", env);
            return Token.stringify(_2.util.encode(env.tokens), env.language);
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
              var hooks = _2.hooks.all;
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
              var callbacks = _2.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i2 = 0, callback; callback = callbacks[i2++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _2;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o2, language) {
          if (typeof o2 == "string") {
            return o2;
          }
          if (Array.isArray(o2)) {
            var s3 = "";
            o2.forEach(function(e2) {
              s3 += stringify(e2, language);
            });
            return s3;
          }
          var env = {
            type: o2.type,
            content: stringify(o2.content, language),
            tag: "span",
            classes: ["token", o2.type],
            attributes: {},
            language
          };
          var aliases = o2.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _2.hooks.run("wrap", env);
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
            for (var j2 = 0; j2 < patterns.length; ++j2) {
              if (rematch && rematch.cause == token + "," + j2) {
                return;
              }
              var patternObj = patterns[j2];
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
                  var to2 = match2.index + match2[0].length;
                  var p2 = pos;
                  p2 += currentNode.value.length;
                  while (from >= p2) {
                    currentNode = currentNode.next;
                    p2 += currentNode.value.length;
                  }
                  p2 -= currentNode.value.length;
                  pos = p2;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k2 = currentNode; k2 !== tokenList.tail && (p2 < to2 || typeof k2.value === "string"); k2 = k2.next) {
                    removeCount++;
                    p2 += k2.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p2);
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
                var wrapped = new Token(token, inside ? _2.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j2,
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
          for (var i2 = 0; i2 < count && next !== list.tail; i2++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i2;
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
            return _2;
          }
          if (!_2.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_2.highlight(code, _2.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _2;
        }
        var script = _2.util.currentScript();
        if (script) {
          _2.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _2.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_2.manual) {
            _2.highlightAll();
          }
        }
        if (!_2.manual) {
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
        return _2;
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
        for (var i2 = 0; i2 < toBeCopied.length; i2++) {
          inside[toBeCopied[i2]] = Prism3.languages.bash[toBeCopied[i2]];
        }
        Prism3.languages.sh = Prism3.languages.bash;
        Prism3.languages.shell = Prism3.languages.bash;
      })(Prism2);
      (function(Prism3) {
        function replace(pattern, replacements) {
          return pattern.replace(/<<(\d+)>>/g, function(m2, index) {
            return "(?:" + replacements[+index] + ")";
          });
        }
        function re2(pattern, replacements, flags) {
          return RegExp(replace(pattern, replacements), flags || "");
        }
        function nested(pattern, depthLog2) {
          for (var i2 = 0; i2 < depthLog2; i2++) {
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
              pattern: re2(/(^|[^$\\])<<0>>/.source, [verbatimString]),
              lookbehind: true,
              greedy: true
            },
            {
              pattern: re2(/(^|[^@$\\])<<0>>/.source, [regularString]),
              lookbehind: true,
              greedy: true
            }
          ],
          "class-name": [
            {
              // Using static
              // using static System.Math;
              pattern: re2(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Using alias (type)
              // using Project = PC.MyCompany.Project;
              pattern: re2(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Using alias (alias)
              // using Project = PC.MyCompany.Project;
              pattern: re2(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
              lookbehind: true
            },
            {
              // Type declarations
              // class Foo<A, B>
              // interface Foo<out A, B>
              pattern: re2(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Single catch exception declaration
              // catch(Foo)
              // (things like catch(Foo e) is covered by variable declaration)
              pattern: re2(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Name of the type parameter of generic constraints
              // where Foo : class
              pattern: re2(/(\bwhere\s+)<<0>>/.source, [name]),
              lookbehind: true
            },
            {
              // Casts and checks via as and is.
              // as Foo<A>, is Bar<B>
              // (things like if(a is Foo b) is covered by variable declaration)
              pattern: re2(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
              lookbehind: true,
              inside: typeInside
            },
            {
              // Variable, field and parameter declaration
              // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
              pattern: re2(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
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
            pattern: re2(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
            lookbehind: true,
            alias: "punctuation"
          }
        });
        Prism3.languages.insertBefore("csharp", "class-name", {
          "namespace": {
            // namespace Foo.Bar {}
            // using Foo.Bar;
            pattern: re2(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
            lookbehind: true,
            inside: {
              "punctuation": /\./
            }
          },
          "type-expression": {
            // default(Foo), typeof(Foo<Bar>), sizeof(int)
            pattern: re2(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
            lookbehind: true,
            alias: "class-name",
            inside: typeInside
          },
          "return-type": {
            // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
            // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
            // int Foo => 0; int Foo { get; set } = 0;
            pattern: re2(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
            inside: typeInside,
            alias: "class-name"
          },
          "constructor-invocation": {
            // new List<Foo<Bar[]>> { }
            pattern: re2(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
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
            pattern: re2(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
            inside: {
              "function": re2(/^<<0>>/.source, [name]),
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
            pattern: re2(
              /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
              [typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
            ),
            lookbehind: true,
            inside: {
              "record-arguments": {
                pattern: re2(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
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
            pattern: re2(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
            lookbehind: true,
            greedy: true,
            inside: {
              "target": {
                pattern: re2(/^<<0>>(?=\s*:)/.source, [attrTarget]),
                alias: "keyword"
              },
              "attribute-arguments": {
                pattern: re2(/\(<<0>>*\)/.source, [roundExpression]),
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
              pattern: re2(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
              lookbehind: true,
              inside: {
                "format-string": {
                  pattern: re2(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
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
              pattern: re2(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
              lookbehind: true,
              greedy: true,
              inside: createInterpolationInside(mInterpolation, mInterpolationRound)
            },
            {
              pattern: re2(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
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
          elements = elements.filter(function(e2) {
            var codeStyles = getStyles(e2);
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
                var e2 = lineNumberSizer.appendChild(document.createElement("span"));
                e2.style.display = "block";
                e2.textContent = line;
              } else {
                lineHeights[index] = oneLinerHeight;
              }
            });
          });
          infos.forEach(function(info) {
            var lineNumberSizer = info.sizer;
            var lineHeights = info.lineHeights;
            var childIndex = 0;
            for (var i2 = 0; i2 < lineHeights.length; i2++) {
              if (lineHeights[i2] === void 0) {
                lineHeights[i2] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
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
          } catch (e2) {
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
            var m2;
            HTML_LINE.lastIndex = 0;
            while (m2 = HTML_LINE.exec(highlighted)) {
              lines.push(prefix + m2[0]);
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

  // node_modules/clipboard/dist/clipboard.js
  var require_clipboard = __commonJS({
    "node_modules/clipboard/dist/clipboard.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["ClipboardJS"] = factory();
        else
          root["ClipboardJS"] = factory();
      })(exports, function() {
        return (
          /******/
          function() {
            var __webpack_modules__ = {
              /***/
              686: (
                /***/
                function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                  "use strict";
                  __webpack_require__2.d(__webpack_exports__, {
                    "default": function() {
                      return (
                        /* binding */
                        clipboard
                      );
                    }
                  });
                  var tiny_emitter = __webpack_require__2(279);
                  var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                  var listen = __webpack_require__2(370);
                  var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                  var src_select = __webpack_require__2(817);
                  var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                  ;
                  function command(type) {
                    try {
                      return document.execCommand(type);
                    } catch (err) {
                      return false;
                    }
                  }
                  ;
                  var ClipboardActionCut = function ClipboardActionCut2(target) {
                    var selectedText = select_default()(target);
                    command("cut");
                    return selectedText;
                  };
                  var actions_cut = ClipboardActionCut;
                  ;
                  function createFakeElement(value) {
                    var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                    var fakeElement = document.createElement("textarea");
                    fakeElement.style.fontSize = "12pt";
                    fakeElement.style.border = "0";
                    fakeElement.style.padding = "0";
                    fakeElement.style.margin = "0";
                    fakeElement.style.position = "absolute";
                    fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                    fakeElement.style.top = "".concat(yPosition, "px");
                    fakeElement.setAttribute("readonly", "");
                    fakeElement.value = value;
                    return fakeElement;
                  }
                  ;
                  var fakeCopyAction = function fakeCopyAction2(value, options) {
                    var fakeElement = createFakeElement(value);
                    options.container.appendChild(fakeElement);
                    var selectedText = select_default()(fakeElement);
                    command("copy");
                    fakeElement.remove();
                    return selectedText;
                  };
                  var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    var selectedText = "";
                    if (typeof target === "string") {
                      selectedText = fakeCopyAction(target, options);
                    } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                      selectedText = fakeCopyAction(target.value, options);
                    } else {
                      selectedText = select_default()(target);
                      command("copy");
                    }
                    return selectedText;
                  };
                  var actions_copy = ClipboardActionCopy;
                  ;
                  function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      _typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      _typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return _typeof(obj);
                  }
                  var ClipboardActionDefault = function ClipboardActionDefault2() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                    if (action !== "copy" && action !== "cut") {
                      throw new Error('Invalid "action" value, use either "copy" or "cut"');
                    }
                    if (target !== void 0) {
                      if (target && _typeof(target) === "object" && target.nodeType === 1) {
                        if (action === "copy" && target.hasAttribute("disabled")) {
                          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }
                        if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                          throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                        }
                      } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                      }
                    }
                    if (text) {
                      return actions_copy(text, {
                        container
                      });
                    }
                    if (target) {
                      return action === "cut" ? actions_cut(target) : actions_copy(target, {
                        container
                      });
                    }
                  };
                  var actions_default = ClipboardActionDefault;
                  ;
                  function clipboard_typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      clipboard_typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      clipboard_typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return clipboard_typeof(obj);
                  }
                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }
                  function _defineProperties(target, props) {
                    for (var i2 = 0; i2 < props.length; i2++) {
                      var descriptor = props[i2];
                      descriptor.enumerable = descriptor.enumerable || false;
                      descriptor.configurable = true;
                      if ("value" in descriptor) descriptor.writable = true;
                      Object.defineProperty(target, descriptor.key, descriptor);
                    }
                  }
                  function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                  }
                  function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                      throw new TypeError("Super expression must either be null or a function");
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                  }
                  function _setPrototypeOf(o2, p2) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
                      o3.__proto__ = p3;
                      return o3;
                    };
                    return _setPrototypeOf(o2, p2);
                  }
                  function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                      var Super = _getPrototypeOf(Derived), result;
                      if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                      } else {
                        result = Super.apply(this, arguments);
                      }
                      return _possibleConstructorReturn(this, result);
                    };
                  }
                  function _possibleConstructorReturn(self2, call) {
                    if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                      return call;
                    }
                    return _assertThisInitialized(self2);
                  }
                  function _assertThisInitialized(self2) {
                    if (self2 === void 0) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return self2;
                  }
                  function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                      }));
                      return true;
                    } catch (e2) {
                      return false;
                    }
                  }
                  function _getPrototypeOf(o2) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
                      return o3.__proto__ || Object.getPrototypeOf(o3);
                    };
                    return _getPrototypeOf(o2);
                  }
                  function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-".concat(suffix);
                    if (!element.hasAttribute(attribute)) {
                      return;
                    }
                    return element.getAttribute(attribute);
                  }
                  var Clipboard = /* @__PURE__ */ function(_Emitter) {
                    _inherits(Clipboard2, _Emitter);
                    var _super = _createSuper(Clipboard2);
                    function Clipboard2(trigger, options) {
                      var _this;
                      _classCallCheck(this, Clipboard2);
                      _this = _super.call(this);
                      _this.resolveOptions(options);
                      _this.listenClick(trigger);
                      return _this;
                    }
                    _createClass(Clipboard2, [{
                      key: "resolveOptions",
                      value: function resolveOptions() {
                        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                        this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                        this.text = typeof options.text === "function" ? options.text : this.defaultText;
                        this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                      }
                      /**
                       * Adds a click event listener to the passed trigger.
                       * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                       */
                    }, {
                      key: "listenClick",
                      value: function listenClick(trigger) {
                        var _this2 = this;
                        this.listener = listen_default()(trigger, "click", function(e2) {
                          return _this2.onClick(e2);
                        });
                      }
                      /**
                       * Defines a new `ClipboardAction` on each click event.
                       * @param {Event} e
                       */
                    }, {
                      key: "onClick",
                      value: function onClick(e2) {
                        var trigger = e2.delegateTarget || e2.currentTarget;
                        var action = this.action(trigger) || "copy";
                        var text = actions_default({
                          action,
                          container: this.container,
                          target: this.target(trigger),
                          text: this.text(trigger)
                        });
                        this.emit(text ? "success" : "error", {
                          action,
                          text,
                          trigger,
                          clearSelection: function clearSelection() {
                            if (trigger) {
                              trigger.focus();
                            }
                            window.getSelection().removeAllRanges();
                          }
                        });
                      }
                      /**
                       * Default `action` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultAction",
                      value: function defaultAction(trigger) {
                        return getAttributeValue("action", trigger);
                      }
                      /**
                       * Default `target` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultTarget",
                      value: function defaultTarget(trigger) {
                        var selector = getAttributeValue("target", trigger);
                        if (selector) {
                          return document.querySelector(selector);
                        }
                      }
                      /**
                       * Allow fire programmatically a copy action
                       * @param {String|HTMLElement} target
                       * @param {Object} options
                       * @returns Text copied.
                       */
                    }, {
                      key: "defaultText",
                      /**
                       * Default `text` lookup function.
                       * @param {Element} trigger
                       */
                      value: function defaultText(trigger) {
                        return getAttributeValue("text", trigger);
                      }
                      /**
                       * Destroy lifecycle.
                       */
                    }, {
                      key: "destroy",
                      value: function destroy() {
                        this.listener.destroy();
                      }
                    }], [{
                      key: "copy",
                      value: function copy(target) {
                        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                          container: document.body
                        };
                        return actions_copy(target, options);
                      }
                      /**
                       * Allow fire programmatically a cut action
                       * @param {String|HTMLElement} target
                       * @returns Text cutted.
                       */
                    }, {
                      key: "cut",
                      value: function cut(target) {
                        return actions_cut(target);
                      }
                      /**
                       * Returns the support of the given action, or all actions if no action is
                       * given.
                       * @param {String} [action]
                       */
                    }, {
                      key: "isSupported",
                      value: function isSupported() {
                        var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                        var actions = typeof action === "string" ? [action] : action;
                        var support = !!document.queryCommandSupported;
                        actions.forEach(function(action2) {
                          support = support && !!document.queryCommandSupported(action2);
                        });
                        return support;
                      }
                    }]);
                    return Clipboard2;
                  }(tiny_emitter_default());
                  var clipboard = Clipboard;
                }
              ),
              /***/
              828: (
                /***/
                function(module2) {
                  var DOCUMENT_NODE_TYPE = 9;
                  if (typeof Element !== "undefined" && !Element.prototype.matches) {
                    var proto = Element.prototype;
                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                  }
                  function closest(element, selector) {
                    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                      if (typeof element.matches === "function" && element.matches(selector)) {
                        return element;
                      }
                      element = element.parentNode;
                    }
                  }
                  module2.exports = closest;
                }
              ),
              /***/
              438: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var closest = __webpack_require__2(828);
                  function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);
                    element.addEventListener(type, listenerFn, useCapture);
                    return {
                      destroy: function() {
                        element.removeEventListener(type, listenerFn, useCapture);
                      }
                    };
                  }
                  function delegate(elements, selector, type, callback, useCapture) {
                    if (typeof elements.addEventListener === "function") {
                      return _delegate.apply(null, arguments);
                    }
                    if (typeof type === "function") {
                      return _delegate.bind(null, document).apply(null, arguments);
                    }
                    if (typeof elements === "string") {
                      elements = document.querySelectorAll(elements);
                    }
                    return Array.prototype.map.call(elements, function(element) {
                      return _delegate(element, selector, type, callback, useCapture);
                    });
                  }
                  function listener(element, selector, type, callback) {
                    return function(e2) {
                      e2.delegateTarget = closest(e2.target, selector);
                      if (e2.delegateTarget) {
                        callback.call(element, e2);
                      }
                    };
                  }
                  module2.exports = delegate;
                }
              ),
              /***/
              879: (
                /***/
                function(__unused_webpack_module, exports2) {
                  exports2.node = function(value) {
                    return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                  };
                  exports2.nodeList = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
                  };
                  exports2.string = function(value) {
                    return typeof value === "string" || value instanceof String;
                  };
                  exports2.fn = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return type === "[object Function]";
                  };
                }
              ),
              /***/
              370: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var is = __webpack_require__2(879);
                  var delegate = __webpack_require__2(438);
                  function listen(target, type, callback) {
                    if (!target && !type && !callback) {
                      throw new Error("Missing required arguments");
                    }
                    if (!is.string(type)) {
                      throw new TypeError("Second argument must be a String");
                    }
                    if (!is.fn(callback)) {
                      throw new TypeError("Third argument must be a Function");
                    }
                    if (is.node(target)) {
                      return listenNode(target, type, callback);
                    } else if (is.nodeList(target)) {
                      return listenNodeList(target, type, callback);
                    } else if (is.string(target)) {
                      return listenSelector(target, type, callback);
                    } else {
                      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                    }
                  }
                  function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);
                    return {
                      destroy: function() {
                        node.removeEventListener(type, callback);
                      }
                    };
                  }
                  function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function(node) {
                      node.addEventListener(type, callback);
                    });
                    return {
                      destroy: function() {
                        Array.prototype.forEach.call(nodeList, function(node) {
                          node.removeEventListener(type, callback);
                        });
                      }
                    };
                  }
                  function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                  }
                  module2.exports = listen;
                }
              ),
              /***/
              817: (
                /***/
                function(module2) {
                  function select(element) {
                    var selectedText;
                    if (element.nodeName === "SELECT") {
                      element.focus();
                      selectedText = element.value;
                    } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                      var isReadOnly = element.hasAttribute("readonly");
                      if (!isReadOnly) {
                        element.setAttribute("readonly", "");
                      }
                      element.select();
                      element.setSelectionRange(0, element.value.length);
                      if (!isReadOnly) {
                        element.removeAttribute("readonly");
                      }
                      selectedText = element.value;
                    } else {
                      if (element.hasAttribute("contenteditable")) {
                        element.focus();
                      }
                      var selection = window.getSelection();
                      var range = document.createRange();
                      range.selectNodeContents(element);
                      selection.removeAllRanges();
                      selection.addRange(range);
                      selectedText = selection.toString();
                    }
                    return selectedText;
                  }
                  module2.exports = select;
                }
              ),
              /***/
              279: (
                /***/
                function(module2) {
                  function E2() {
                  }
                  E2.prototype = {
                    on: function(name, callback, ctx) {
                      var e2 = this.e || (this.e = {});
                      (e2[name] || (e2[name] = [])).push({
                        fn: callback,
                        ctx
                      });
                      return this;
                    },
                    once: function(name, callback, ctx) {
                      var self2 = this;
                      function listener() {
                        self2.off(name, listener);
                        callback.apply(ctx, arguments);
                      }
                      ;
                      listener._ = callback;
                      return this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                      var data = [].slice.call(arguments, 1);
                      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                      var i2 = 0;
                      var len = evtArr.length;
                      for (i2; i2 < len; i2++) {
                        evtArr[i2].fn.apply(evtArr[i2].ctx, data);
                      }
                      return this;
                    },
                    off: function(name, callback) {
                      var e2 = this.e || (this.e = {});
                      var evts = e2[name];
                      var liveEvents = [];
                      if (evts && callback) {
                        for (var i2 = 0, len = evts.length; i2 < len; i2++) {
                          if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
                            liveEvents.push(evts[i2]);
                        }
                      }
                      liveEvents.length ? e2[name] = liveEvents : delete e2[name];
                      return this;
                    }
                  };
                  module2.exports = E2;
                  module2.exports.TinyEmitter = E2;
                }
              )
              /******/
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
              if (__webpack_module_cache__[moduleId]) {
                return __webpack_module_cache__[moduleId].exports;
              }
              var module2 = __webpack_module_cache__[moduleId] = {
                /******/
                // no module.id needed
                /******/
                // no module.loaded needed
                /******/
                exports: {}
                /******/
              };
              __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
              return module2.exports;
            }
            !function() {
              __webpack_require__.n = function(module2) {
                var getter = module2 && module2.__esModule ? (
                  /******/
                  function() {
                    return module2["default"];
                  }
                ) : (
                  /******/
                  function() {
                    return module2;
                  }
                );
                __webpack_require__.d(getter, { a: getter });
                return getter;
              };
            }();
            !function() {
              __webpack_require__.d = function(exports2, definition) {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            }();
            !function() {
              __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              };
            }();
            return __webpack_require__(686);
          }().default
        );
      });
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
        function toType(obj) {
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
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
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
          function markFunction(fn2) {
            fn2[expando] = true;
            return fn2;
          }
          function assert(fn2) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn2(el);
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
          function createPositionalPseudo(fn2) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j2, matchIndexes = fn2([], seed.length, argument), i3 = matchIndexes.length;
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
            var fn2 = Expr.attrHandle[name.toLowerCase()], val = fn2 && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn2(elem, name, !documentIsHTML) : void 0;
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
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple2 !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple2) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
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
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
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
                var args, fn2 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn2[expando]) {
                  return fn2(argument);
                }
                if (fn2.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn2(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf.call(seed, matched[i3]);
                      seed[idx] = !(matches2[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn2(elem, 0, args);
                  };
                }
                return fn2;
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
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
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
        }, function(name, fn2) {
          jQuery2.fn[name] = function(until, selector) {
            var matched = jQuery2.map(this, fn2, until);
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
                    } else if (arg && arg.length && toType(arg) !== "string") {
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
            has: function(fn2) {
              return fn2 ? jQuery2.inArray(fn2, list) > -1 : list.length > 0;
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
              "catch": function(fn2) {
                return promise.then(null, fn2);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(_i, tuple) {
                    var fn2 = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn2 && fn2.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn2 ? [returned] : arguments
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
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e2) {
                        if (jQuery2.Deferred.exceptionHook) {
                          jQuery2.Deferred.exceptionHook(
                            e2,
                            process.error
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
                      process();
                    } else {
                      if (jQuery2.Deferred.getErrorHook) {
                        process.error = jQuery2.Deferred.getErrorHook();
                      } else if (jQuery2.Deferred.getStackHook) {
                        process.error = jQuery2.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
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
        jQuery2.fn.ready = function(fn2) {
          readyList.then(fn2).catch(function(error) {
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
        var access = function(elems, fn2, key, value, chainable, emptyGet, raw) {
          var i2 = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i2 in key) {
              access(elems, fn2, i2, key[i2], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn2.call(elems, value);
                fn2 = null;
              } else {
                bulk = fn2;
                fn2 = function(elem, _key, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn2) {
              for (; i2 < len; i2++) {
                fn2(
                  elems[i2],
                  key,
                  raw ? value : value.call(elems[i2], i2, fn2(elems[i2], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn2.call(elems);
          }
          return len ? fn2(elems[0], key) : emptyGet;
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
        function Data() {
          this.expando = jQuery2.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
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
        var dataPriv = new Data();
        var dataUser = new Data();
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
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn2 = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn2 === "inprogress") {
              fn2 = queue.shift();
              startLength--;
            }
            if (fn2) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn2.call(elem, next, hooks);
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
              if (toType(elem) === "object") {
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
        function on2(elem, types, selector, data, fn2, one) {
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
          if (data == null && fn2 == null) {
            fn2 = selector;
            data = selector = void 0;
          } else if (fn2 == null) {
            if (typeof selector === "string") {
              fn2 = data;
              data = void 0;
            } else {
              fn2 = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn2 === false) {
            fn2 = returnFalse;
          } else if (!fn2) {
            return elem;
          }
          if (one === 1) {
            origFn = fn2;
            fn2 = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn2.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn2, data, selector);
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
          on: function(types, selector, data, fn2) {
            return on2(this, types, selector, data, fn2);
          },
          one: function(types, selector, data, fn2) {
            return on2(this, types, selector, data, fn2, 1);
          },
          off: function(types, selector, fn2) {
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
              fn2 = selector;
              selector = void 0;
            }
            if (fn2 === false) {
              fn2 = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn2, selector);
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
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
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
            createTween: function(prop, end) {
              var tween = jQuery2.Tween(
                elem,
                animation.opts,
                prop,
                end,
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
        jQuery2.speed = function(speed, easing, fn2) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn2 || !fn2 && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn2 && easing || easing && !isFunction(easing) && easing
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
                var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i2 = max;
                } else {
                  i2 = one ? index : 0;
                }
                for (; i2 < max; i2++) {
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
          } else if (!traditional && toType(obj) === "object") {
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
          return jQuery2.grep(jQuery2.timers, function(fn2) {
            return elem === fn2.elem;
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
            var offsetParent, offset2, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery2.css(elem, "position") === "fixed") {
              offset2 = elem.getBoundingClientRect();
            } else {
              offset2 = this.offset();
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
              top: offset2.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset2.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
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
          var top = "pageYOffset" === prop;
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
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
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
          jQuery2.fn[type] = function(fn2) {
            return this.on(type, fn2);
          };
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn2) {
            return this.on(types, null, data, fn2);
          },
          unbind: function(types, fn2) {
            return this.off(types, null, fn2);
          },
          delegate: function(selector, types, data, fn2) {
            return this.on(types, selector, data, fn2);
          },
          undelegate: function(selector, types, fn2) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn2);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery2.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery2.fn[name] = function(data, fn2) {
              return arguments.length > 0 ? this.on(name, null, data, fn2) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery2.proxy = function(fn2, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn2[context];
            context = fn2;
            fn2 = tmp;
          }
          if (!isFunction(fn2)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn2.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn2.guid = fn2.guid || jQuery2.guid++;
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
        jQuery2.type = toType;
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
  var import_prism = __toESM(require_prism());

  // js/src/util/set-cookie-expiration-never.js
  var setCookieExpirationNever = () => {
    const d2 = /* @__PURE__ */ new Date();
    d2.setTime(d2.getTime() + 100 * 365 * 24 * 60 * 60 * 1e3);
    return `expires=${d2.toUTCString()};`;
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
          } else if (callout.classList.contains("callout-tip") || calloutHeaderText.includes(":choco-tip:")) {
            calloutIconColor = "tip";
            calloutIcon = "lightbulb";
            callout.classList.add("callout-tip");
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

  // js/src/clipboard.js
  var import_clipboard = __toESM(require_clipboard());
  (() => {
    const clipboard = new import_clipboard.default(".btn-copy");
    const userSelectAllInput = document.querySelectorAll(".user-select-all");
    clipboard.on("success", (e2) => {
      if (e2.trigger.classList.contains("copy-to-clipboard-button")) {
        e2.trigger.textContent = "Copied!";
        setTimeout(() => {
          e2.trigger.blur();
          setTimeout(() => {
            e2.trigger.textContent = "Copy";
          }, 200);
        }, 2e3);
      } else {
        const button = new bootstrap.Button(e2.trigger);
        setTimeout(() => {
          button.toggle();
        }, 2e3);
      }
      e2.clearSelection();
    });
    if (userSelectAllInput) {
      userSelectAllInput.forEach((el) => el.addEventListener("click", () => el.select(), false));
    }
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
    for (const i2 of codePre) {
      if (!i2.classList.contains("highlight-delay") && !i2.classList.contains("d-format-none")) {
        const codeElement = i2;
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
  var dtfCache = /* @__PURE__ */ new Map();
  function makeDTF(zoneName) {
    let dtf = dtfCache.get(zoneName);
    if (dtf === void 0) {
      dtf = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zoneName,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
      });
      dtfCache.set(zoneName, dtf);
    }
    return dtf;
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
  var ianaZoneCache = /* @__PURE__ */ new Map();
  var IANAZone = class _IANAZone extends Zone {
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */
    static create(name) {
      let zone = ianaZoneCache.get(name);
      if (zone === void 0) {
        ianaZoneCache.set(name, zone = new _IANAZone(name));
      }
      return zone;
    }
    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCache() {
      ianaZoneCache.clear();
      dtfCache.clear();
    }
    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
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
      if (!this.valid) return NaN;
      const date = new Date(ts);
      if (isNaN(date)) return NaN;
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
  var intlDTCache = /* @__PURE__ */ new Map();
  function getCachedDTF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let dtf = intlDTCache.get(key);
    if (dtf === void 0) {
      dtf = new Intl.DateTimeFormat(locString, opts);
      intlDTCache.set(key, dtf);
    }
    return dtf;
  }
  var intlNumCache = /* @__PURE__ */ new Map();
  function getCachedINF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let inf = intlNumCache.get(key);
    if (inf === void 0) {
      inf = new Intl.NumberFormat(locString, opts);
      intlNumCache.set(key, inf);
    }
    return inf;
  }
  var intlRelCache = /* @__PURE__ */ new Map();
  function getCachedRTF(locString, opts = {}) {
    const _a = opts, { base } = _a, cacheKeyOpts = __objRest(_a, ["base"]);
    const key = JSON.stringify([locString, cacheKeyOpts]);
    let inf = intlRelCache.get(key);
    if (inf === void 0) {
      inf = new Intl.RelativeTimeFormat(locString, opts);
      intlRelCache.set(key, inf);
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
  var intlResolvedOptionsCache = /* @__PURE__ */ new Map();
  function getCachedIntResolvedOptions(locString) {
    let opts = intlResolvedOptionsCache.get(locString);
    if (opts === void 0) {
      opts = new Intl.DateTimeFormat(locString).resolvedOptions();
      intlResolvedOptionsCache.set(locString, opts);
    }
    return opts;
  }
  var weekInfoCache = /* @__PURE__ */ new Map();
  function getCachedWeekInfo(locString) {
    let data = weekInfoCache.get(locString);
    if (!data) {
      const locale = new Intl.Locale(locString);
      data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
      if (!("minimalDays" in data)) {
        data = __spreadValues(__spreadValues({}, fallbackWeekSettings), data);
      }
      weekInfoCache.set(locString, data);
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
      return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || getCachedIntResolvedOptions(loc.locale).numberingSystem === "latn";
    }
  }
  var PolyNumberFormatter = class {
    constructor(intl, forceSimple, opts) {
      this.padTo = opts.padTo || 0;
      this.floor = opts.floor || false;
      const _a = opts, { padTo, floor } = _a, otherOpts = __objRest(_a, ["padTo", "floor"]);
      if (!forceSimple || Object.keys(otherOpts).length > 0) {
        const intlOpts = __spreadValues({ useGrouping: false }, opts);
        if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
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
      intlDTCache.clear();
      intlNumCache.clear();
      intlRelCache.clear();
      intlResolvedOptionsCache.clear();
      weekInfoCache.clear();
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
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || getCachedIntResolvedOptions(this.intl).locale.startsWith("en-us");
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
    static parseSpecifier(s3) {
      if (s3) {
        const r2 = s3.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r2) {
          return new _FixedOffsetZone(signedOffset(r2[1], r2[2]));
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
      if (lowered === "default") return defaultZone2;
      else if (lowered === "local" || lowered === "system") return SystemZone.instance;
      else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
      else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
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
      for (let i2 = 0; i2 < str.length; i2++) {
        const code = str.charCodeAt(i2);
        if (str[i2].search(numberingSystems.hanidec) !== -1) {
          value += hanidecChars.indexOf(str[i2]);
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
  var digitRegexCache = /* @__PURE__ */ new Map();
  function resetDigitRegexCache() {
    digitRegexCache.clear();
  }
  function digitRegex({ numberingSystem }, append = "") {
    const ns = numberingSystem || "latn";
    let appendCache = digitRegexCache.get(ns);
    if (appendCache === void 0) {
      appendCache = /* @__PURE__ */ new Map();
      digitRegexCache.set(ns, appendCache);
    }
    let regex = appendCache.get(append);
    if (regex === void 0) {
      regex = new RegExp(`${numberingSystems[ns]}${append}`);
      appendCache.set(append, regex);
    }
    return regex;
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
      if (!isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
      if (!isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
      if (!isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
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
    } else return false;
  }
  function hasInvalidOrdinalData(obj) {
    const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validOrdinal) {
      return unitOutOfRange("ordinal", obj.ordinal);
    } else return false;
  }
  function hasInvalidGregorianData(obj) {
    const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validMonth) {
      return unitOutOfRange("month", obj.month);
    } else if (!validDay) {
      return unitOutOfRange("day", obj.day);
    } else return false;
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
    } else return false;
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
  function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
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
    } else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
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
        if (v2 === void 0 || v2 === null) continue;
        normalized[normalizer(u2)] = asNumber(v2);
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
          // ms
          case "S":
            return this.num(dt2.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt2.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt2.second);
          case "ss":
            return this.num(dt2.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt2.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt2.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt2.minute);
          case "mm":
            return this.num(dt2.minute, 2);
          // hours
          case "h":
            return this.num(dt2.hour % 12 === 0 ? 12 : dt2.hour % 12);
          case "hh":
            return this.num(dt2.hour % 12 === 0 ? 12 : dt2.hour % 12, 2);
          case "H":
            return this.num(dt2.hour);
          case "HH":
            return this.num(dt2.hour, 2);
          // offset
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
          // zone
          case "z":
            return dt2.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt2.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt2.day, 2);
          // weekdays - standalone
          case "c":
            return this.num(dt2.weekday);
          case "ccc":
            return weekday("short", true);
          case "cccc":
            return weekday("long", true);
          case "ccccc":
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            return this.num(dt2.weekday);
          case "EEE":
            return weekday("short", false);
          case "EEEE":
            return weekday("long", false);
          case "EEEEE":
            return weekday("narrow", false);
          // months - standalone
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
          // months - format
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
          // years
          case "y":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt2.year);
          case "yy":
            return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt2.year.toString().slice(-2), 2);
          case "yyyy":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt2.year, 4);
          case "yyyyyy":
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt2.year, 6);
          // eras
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
    if (secondStr) result.second = parseInteger(secondStr);
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
      if (!normalized) throw new InvalidUnitError(unit);
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
      if (!this.isValid) return INVALID;
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
      if (!this.isValid) return {};
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
      if (!this.isValid) return null;
      let s3 = "P";
      if (this.years !== 0) s3 += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0) s3 += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0) s3 += this.weeks + "W";
      if (this.days !== 0) s3 += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
        s3 += "T";
      if (this.hours !== 0) s3 += this.hours + "H";
      if (this.minutes !== 0) s3 += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0)
        s3 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
      if (s3 === "P") s3 += "T0S";
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
      if (!this.isValid) return null;
      const millis = this.toMillis();
      if (millis < 0 || millis >= 864e5) return null;
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
      if (!this.isValid) return NaN;
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
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
    mapUnits(fn2) {
      if (!this.isValid) return this;
      const result = {};
      for (const k2 of Object.keys(this.values)) {
        result[k2] = asNumber(fn2(this.values[k2], k2));
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
      const vals = removeZeroes(this.normalize().shiftToAll().toObject());
      return clone(this, { values: vals }, true);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
    shiftTo(...units) {
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
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
        if (v1 === void 0 || v1 === 0) return v2 === void 0 || v2 === 0;
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
      const dur = Duration.fromDurationLike(duration), dt2 = friendlyDateTime(start);
      return _Interval.fromDateTimes(dt2, dt2.plus(dur));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static before(end, duration) {
      const dur = Duration.fromDurationLike(duration), dt2 = friendlyDateTime(end);
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
        let start, startIsValid;
        try {
          start = DateTime.fromISO(s3, opts);
          startIsValid = start.isValid;
        } catch (e3) {
          startIsValid = false;
        }
        let end, endIsValid;
        try {
          end = DateTime.fromISO(e2, opts);
          endIsValid = end.isValid;
        } catch (e3) {
          endIsValid = false;
        }
        if (startIsValid && endIsValid) {
          return _Interval.fromDateTimes(start, end);
        }
        if (startIsValid) {
          const dur = Duration.fromISO(e2, opts);
          if (dur.isValid) {
            return _Interval.after(start, dur);
          }
        } else if (endIsValid) {
          const dur = Duration.fromISO(s3, opts);
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
     * Returns the last DateTime included in the interval (since end is not part of the interval)
     * @type {DateTime}
     */
    get lastDateTime() {
      return this.isValid ? this.e ? this.e.minus(1) : null : null;
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
      if (!this.isValid) return NaN;
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
      if (!this.isValid) return false;
      return this.s > dateTime;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e <= dateTime;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    contains(dateTime) {
      if (!this.isValid) return false;
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
      if (!this.isValid) return this;
      return _Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
    splitAt(...dateTimes) {
      if (!this.isValid) return [];
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
      if (!this.isValid) return [];
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
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }
    /**
     * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
     * @param {Interval} other
     * @return {boolean}
     */
    engulfs(other) {
      if (!this.isValid) return false;
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
      const s3 = this.s < other.s ? this.s : other.s, e2 = this.e > other.e ? this.e : other.e;
      return _Interval.fromDateTimes(s3, e2);
    }
    /**
     * Merge an array of Intervals into an equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
     * and ending with the latest.
     *
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
      let start = null, currentCount = 0;
      const results = [], ends = intervals.map((i2) => [
        { time: i2.s, type: "s" },
        { time: i2.e, type: "e" }
      ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a2, b2) => a2.time - b2.time);
      for (const i2 of arr) {
        currentCount += i2.type === "s" ? 1 : -1;
        if (currentCount === 1) {
          start = i2.time;
        } else {
          if (start && +start !== +i2.time) {
            results.push(_Interval.fromDateTimes(start, i2.time));
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
      return _Interval.xor([this].concat(intervals)).map((i2) => this.intersection(i2)).filter((i2) => i2 && !i2.isEmpty());
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
    toString() {
      if (!this.isValid) return INVALID2;
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
      if (!this.isValid) return INVALID2;
      return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
    }
    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
    toISODate() {
      if (!this.isValid) return INVALID2;
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
      if (!this.isValid) return INVALID2;
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
      if (!this.isValid) return INVALID2;
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
  function offset(regex, groups) {
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
        // era
        case "G":
          return oneOf(loc.eras("short"), 0);
        case "GG":
          return oneOf(loc.eras("long"), 0);
        // years
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
        // months
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
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
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
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
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
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
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
  var TokenParser = class {
    constructor(locale, format) {
      this.locale = locale;
      this.format = format;
      this.tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
      this.units = this.tokens.map((t2) => unitForToken(t2, locale));
      this.disqualifyingUnit = this.units.find((t2) => t2.invalidReason);
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
  function tsToObj(ts, offset2) {
    ts += offset2 * 60 * 1e3;
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
  function objToTS(obj, offset2, zone) {
    return fixOffset(objToLocalTS(obj), offset2, zone);
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
    if (longFormat && o2.c.year >= 0) c2 += "+";
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
    if (!normalized) throw new InvalidUnitError(unit);
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
    if (zoneOffsetTs === void 0) {
      zoneOffsetTs = Settings.now();
    }
    if (zone.type !== "iana") {
      return zone.offset(zoneOffsetTs);
    }
    const zoneName = zone.name;
    let offsetGuess = zoneOffsetGuessCache.get(zoneName);
    if (offsetGuess === void 0) {
      offsetGuess = zone.offset(zoneOffsetTs);
      zoneOffsetGuessCache.set(zoneName, offsetGuess);
    }
    return offsetGuess;
  }
  function quickDT(obj, opts) {
    const zone = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    }
    const loc = Locale.fromObject(opts);
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
      const offsetProvis = guessOffsetForZone(zone);
      [ts, o2] = objToTS(obj, offsetProvis, zone);
    } else {
      ts = Settings.now();
    }
    return new DateTime({ ts, zone, loc, o: o2 });
  }
  function diffRelative(start, end, opts) {
    const round = isUndefined(opts.round) ? true : opts.round, format = (c2, unit) => {
      c2 = roundTo(c2, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c2, unit);
    }, differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
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
  var zoneOffsetGuessCache = /* @__PURE__ */ new Map();
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
          const ot2 = isNumber(config.o) && !config.old ? config.o : zone.offset(this.ts);
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
    static resetCache() {
      zoneOffsetTs = void 0;
      zoneOffsetGuessCache.clear();
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
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
      if (!this.isValid) return this;
      const o2 = {}, normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case "years":
          o2.month = 1;
        // falls through
        case "quarters":
        case "months":
          o2.day = 1;
        // falls through
        case "weeks":
        case "days":
          o2.hour = 0;
        // falls through
        case "hours":
          o2.minute = 0;
        // falls through
        case "minutes":
          o2.second = 0;
        // falls through
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
     * @return {string|null}
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
     * @return {string|null}
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
     * @return {string|null}
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
     * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
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
      if (!this.isValid) return {};
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
     * @return {Interval|DateTime}
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
      if (!this.isValid) return false;
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
      if (!this.isValid) return null;
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
      if (!this.isValid) return null;
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
  var copyCodeBlocks = () => {
    document.querySelectorAll(".copy-command").forEach((el) => {
      const copyCommand = el.querySelector("code").getAttribute("class").split(" ");
      const copyBtn = el.querySelector("button");
      if (copyBtn) {
        copyBtn.classList.add("btn-copy");
        copyBtn.setAttribute("data-clipboard-target", `.${copyCommand[0]}`);
      }
    });
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
            const tabParentContainer = bootstrap.Tab.getOrCreateInstance(el2, { toggle: false });
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
          const collapseTargetContainer = bootstrap.Collapse.getOrCreateInstance(collapseTarget, { toggle: false });
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
      const collapseLgCollapse = bootstrap.Collapse.getOrCreateInstance(collapseLg, { toggle: false });
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
  function e() {
    return e = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3) ({}).hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, e.apply(null, arguments);
  }
  function t(e2) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, t(e2);
  }
  var n2;
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  var l2;
  var s2;
  var f;
  var p;
  var m;
  var v = {};
  var h = [];
  var d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function _(e2, t2) {
    for (var n3 in t2) e2[n3] = t2[n3];
    return e2;
  }
  function g(e2) {
    e2 && e2.parentNode && e2.parentNode.removeChild(e2);
  }
  function b(e2, t2, r2) {
    var o2, i2, a2, c2 = {};
    for (a2 in t2) "key" == a2 ? o2 = t2[a2] : "ref" == a2 ? i2 = t2[a2] : c2[a2] = t2[a2];
    if (arguments.length > 2 && (c2.children = arguments.length > 3 ? n2.call(arguments, 2) : r2), "function" == typeof e2 && null != e2.defaultProps) for (a2 in e2.defaultProps) void 0 === c2[a2] && (c2[a2] = e2.defaultProps[a2]);
    return S(e2, c2, o2, i2, null);
  }
  function S(e2, t2, n3, i2, a2) {
    var c2 = { type: e2, props: t2, key: n3, ref: i2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == a2 ? ++o : a2, __i: -1, __u: 0 };
    return null == a2 && null != r.vnode && r.vnode(c2), c2;
  }
  function O(e2) {
    return e2.children;
  }
  function w(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function E(e2, t2) {
    if (null == t2) return e2.__ ? E(e2.__, e2.__i + 1) : null;
    for (var n3; t2 < e2.__k.length; t2++) if (null != (n3 = e2.__k[t2]) && null != n3.__e) return n3.__e;
    return "function" == typeof e2.type ? E(e2) : null;
  }
  function j(e2) {
    var t2, n3;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++) if (null != (n3 = e2.__k[t2]) && null != n3.__e) {
        e2.__e = e2.__c.base = n3.__e;
        break;
      }
      return j(e2);
    }
  }
  function P(e2) {
    (!e2.__d && (e2.__d = true) && i.push(e2) && !I.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || c)(I);
  }
  function I() {
    var e2, t2, n3, o2, a2, c2, l3, s3;
    for (i.sort(u); e2 = i.shift(); ) e2.__d && (t2 = i.length, o2 = void 0, c2 = (a2 = (n3 = e2).__v).__e, l3 = [], s3 = [], n3.__P && ((o2 = _({}, a2)).__v = a2.__v + 1, r.vnode && r.vnode(o2), R(n3.__P, o2, a2, n3.__n, n3.__P.namespaceURI, 32 & a2.__u ? [c2] : null, l3, null == c2 ? E(a2) : c2, !!(32 & a2.__u), s3), o2.__v = a2.__v, o2.__.__k[o2.__i] = o2, L(l3, o2, s3), o2.__e != c2 && j(o2)), i.length > t2 && i.sort(u));
    I.__r = 0;
  }
  function k(e2, t2, n3, r2, o2, i2, a2, c2, u2, l3, s3) {
    var f2, p2, m2, d2, _2, g2, b2 = r2 && r2.__k || h, w2 = t2.length;
    for (u2 = function(e3, t3, n4, r3, o3) {
      var i3, a3, c3, u3, l4, s4 = n4.length, f3 = s4, p3 = 0;
      for (e3.__k = new Array(o3), i3 = 0; i3 < o3; i3++) null != (a3 = t3[i3]) && "boolean" != typeof a3 && "function" != typeof a3 ? (u3 = i3 + p3, (a3 = e3.__k[i3] = "string" == typeof a3 || "number" == typeof a3 || "bigint" == typeof a3 || a3.constructor == String ? S(null, a3, null, null, null) : y(a3) ? S(O, { children: a3 }, null, null, null) : void 0 === a3.constructor && a3.__b > 0 ? S(a3.type, a3.props, a3.key, a3.ref ? a3.ref : null, a3.__v) : a3).__ = e3, a3.__b = e3.__b + 1, c3 = null, -1 !== (l4 = a3.__i = x(a3, n4, u3, f3)) && (f3--, (c3 = n4[l4]) && (c3.__u |= 2)), null == c3 || null === c3.__v ? (-1 == l4 && p3--, "function" != typeof a3.type && (a3.__u |= 4)) : l4 != u3 && (l4 == u3 - 1 ? p3-- : l4 == u3 + 1 ? p3++ : (l4 > u3 ? p3-- : p3++, a3.__u |= 4))) : e3.__k[i3] = null;
      if (f3) for (i3 = 0; i3 < s4; i3++) null != (c3 = n4[i3]) && !(2 & c3.__u) && (c3.__e == r3 && (r3 = E(c3)), H(c3, c3));
      return r3;
    }(n3, t2, b2, u2, w2), f2 = 0; f2 < w2; f2++) null != (m2 = n3.__k[f2]) && (p2 = -1 === m2.__i ? v : b2[m2.__i] || v, m2.__i = f2, g2 = R(e2, m2, p2, o2, i2, a2, c2, u2, l3, s3), d2 = m2.__e, m2.ref && p2.ref != m2.ref && (p2.ref && M(p2.ref, null, m2), s3.push(m2.ref, m2.__c || d2, m2)), null == _2 && null != d2 && (_2 = d2), 4 & m2.__u || p2.__k === m2.__k ? u2 = D(m2, u2, e2) : "function" == typeof m2.type && void 0 !== g2 ? u2 = g2 : d2 && (u2 = d2.nextSibling), m2.__u &= -7);
    return n3.__e = _2, u2;
  }
  function D(e2, t2, n3) {
    var r2, o2;
    if ("function" == typeof e2.type) {
      for (r2 = e2.__k, o2 = 0; r2 && o2 < r2.length; o2++) r2[o2] && (r2[o2].__ = e2, t2 = D(r2[o2], t2, n3));
      return t2;
    }
    e2.__e != t2 && (t2 && e2.type && !n3.contains(t2) && (t2 = E(e2)), n3.insertBefore(e2.__e, t2 || null), t2 = e2.__e);
    do {
      t2 = t2 && t2.nextSibling;
    } while (null != t2 && 8 == t2.nodeType);
    return t2;
  }
  function C(e2, t2) {
    return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (y(e2) ? e2.some(function(e3) {
      C(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function x(e2, t2, n3, r2) {
    var o2, i2, a2 = e2.key, c2 = e2.type, u2 = t2[n3];
    if (null === u2 || u2 && a2 == u2.key && c2 === u2.type && !(2 & u2.__u)) return n3;
    if (r2 > (null == u2 || 2 & u2.__u ? 0 : 1)) for (o2 = n3 - 1, i2 = n3 + 1; o2 >= 0 || i2 < t2.length; ) {
      if (o2 >= 0) {
        if ((u2 = t2[o2]) && !(2 & u2.__u) && a2 == u2.key && c2 === u2.type) return o2;
        o2--;
      }
      if (i2 < t2.length) {
        if ((u2 = t2[i2]) && !(2 & u2.__u) && a2 == u2.key && c2 === u2.type) return i2;
        i2++;
      }
    }
    return -1;
  }
  function A(e2, t2, n3) {
    "-" == t2[0] ? e2.setProperty(t2, null == n3 ? "" : n3) : e2[t2] = null == n3 ? "" : "number" != typeof n3 || d.test(t2) ? n3 : n3 + "px";
  }
  function N(e2, t2, n3, r2, o2) {
    var i2;
    e: if ("style" == t2) if ("string" == typeof n3) e2.style.cssText = n3;
    else {
      if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2) for (t2 in r2) n3 && t2 in n3 || A(e2.style, t2, "");
      if (n3) for (t2 in n3) r2 && n3[t2] === r2[t2] || A(e2.style, t2, n3[t2]);
    }
    else if ("o" == t2[0] && "n" == t2[1]) i2 = t2 != (t2 = t2.replace(l2, "$1")), t2 = t2.toLowerCase() in e2 || "onFocusOut" == t2 || "onFocusIn" == t2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n3, n3 ? r2 ? n3.u = r2.u : (n3.u = s2, e2.addEventListener(t2, i2 ? p : f, i2)) : e2.removeEventListener(t2, i2 ? p : f, i2);
    else {
      if ("http://www.w3.org/2000/svg" == o2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e2) try {
        e2[t2] = null == n3 ? "" : n3;
        break e;
      } catch (e3) {
      }
      "function" == typeof n3 || (null == n3 || false === n3 && "-" != t2[4] ? e2.removeAttribute(t2) : e2.setAttribute(t2, "popover" == t2 && 1 == n3 ? "" : n3));
    }
  }
  function T(e2) {
    return function(t2) {
      if (this.l) {
        var n3 = this.l[t2.type + e2];
        if (null == t2.t) t2.t = s2++;
        else if (t2.t < n3.u) return;
        return n3(r.event ? r.event(t2) : t2);
      }
    };
  }
  function R(e2, t2, n3, o2, i2, a2, c2, u2, l3, s3) {
    var f2, p2, m2, v2, h2, d2, b2, S2, E2, j2, P2, I2, D2, C2, x2, A2, N2, T2 = t2.type;
    if (void 0 !== t2.constructor) return null;
    128 & n3.__u && (l3 = !!(32 & n3.__u), a2 = [u2 = t2.__e = n3.__e]), (f2 = r.__b) && f2(t2);
    e: if ("function" == typeof T2) try {
      if (S2 = t2.props, E2 = "prototype" in T2 && T2.prototype.render, j2 = (f2 = T2.contextType) && o2[f2.__c], P2 = f2 ? j2 ? j2.props.value : f2.__ : o2, n3.__c ? b2 = (p2 = t2.__c = n3.__c).__ = p2.__E : (E2 ? t2.__c = p2 = new T2(S2, P2) : (t2.__c = p2 = new w(S2, P2), p2.constructor = T2, p2.render = U), j2 && j2.sub(p2), p2.props = S2, p2.state || (p2.state = {}), p2.context = P2, p2.__n = o2, m2 = p2.__d = true, p2.__h = [], p2._sb = []), E2 && null == p2.__s && (p2.__s = p2.state), E2 && null != T2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = _({}, p2.__s)), _(p2.__s, T2.getDerivedStateFromProps(S2, p2.__s))), v2 = p2.props, h2 = p2.state, p2.__v = t2, m2) E2 && null == T2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), E2 && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
      else {
        if (E2 && null == T2.getDerivedStateFromProps && S2 !== v2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(S2, P2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(S2, p2.__s, P2) || t2.__v == n3.__v)) {
          for (t2.__v != n3.__v && (p2.props = S2, p2.state = p2.__s, p2.__d = false), t2.__e = n3.__e, t2.__k = n3.__k, t2.__k.some(function(e3) {
            e3 && (e3.__ = t2);
          }), I2 = 0; I2 < p2._sb.length; I2++) p2.__h.push(p2._sb[I2]);
          p2._sb = [], p2.__h.length && c2.push(p2);
          break e;
        }
        null != p2.componentWillUpdate && p2.componentWillUpdate(S2, p2.__s, P2), E2 && null != p2.componentDidUpdate && p2.__h.push(function() {
          p2.componentDidUpdate(v2, h2, d2);
        });
      }
      if (p2.context = P2, p2.props = S2, p2.__P = e2, p2.__e = false, D2 = r.__r, C2 = 0, E2) {
        for (p2.state = p2.__s, p2.__d = false, D2 && D2(t2), f2 = p2.render(p2.props, p2.state, p2.context), x2 = 0; x2 < p2._sb.length; x2++) p2.__h.push(p2._sb[x2]);
        p2._sb = [];
      } else do {
        p2.__d = false, D2 && D2(t2), f2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
      } while (p2.__d && ++C2 < 25);
      p2.state = p2.__s, null != p2.getChildContext && (o2 = _(_({}, o2), p2.getChildContext())), E2 && !m2 && null != p2.getSnapshotBeforeUpdate && (d2 = p2.getSnapshotBeforeUpdate(v2, h2)), u2 = k(e2, y(A2 = null != f2 && f2.type === O && null == f2.key ? f2.props.children : f2) ? A2 : [A2], t2, n3, o2, i2, a2, c2, u2, l3, s3), p2.base = t2.__e, t2.__u &= -161, p2.__h.length && c2.push(p2), b2 && (p2.__E = p2.__ = null);
    } catch (e3) {
      if (t2.__v = null, l3 || null != a2) if (e3.then) {
        for (t2.__u |= l3 ? 160 : 128; u2 && 8 == u2.nodeType && u2.nextSibling; ) u2 = u2.nextSibling;
        a2[a2.indexOf(u2)] = null, t2.__e = u2;
      } else for (N2 = a2.length; N2--; ) g(a2[N2]);
      else t2.__e = n3.__e, t2.__k = n3.__k;
      r.__e(e3, t2, n3);
    }
    else null == a2 && t2.__v == n3.__v ? (t2.__k = n3.__k, t2.__e = n3.__e) : u2 = t2.__e = q(n3.__e, t2, n3, o2, i2, a2, c2, l3, s3);
    return (f2 = r.diffed) && f2(t2), 128 & t2.__u ? void 0 : u2;
  }
  function L(e2, t2, n3) {
    for (var o2 = 0; o2 < n3.length; o2++) M(n3[o2], n3[++o2], n3[++o2]);
    r.__c && r.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        r.__e(e3, t3.__v);
      }
    });
  }
  function q(e2, t2, o2, i2, a2, c2, u2, l3, s3) {
    var f2, p2, m2, h2, d2, _2, b2, S2 = o2.props, O2 = t2.props, w2 = t2.type;
    if ("svg" == w2 ? a2 = "http://www.w3.org/2000/svg" : "math" == w2 ? a2 = "http://www.w3.org/1998/Math/MathML" : a2 || (a2 = "http://www.w3.org/1999/xhtml"), null != c2) {
      for (f2 = 0; f2 < c2.length; f2++) if ((d2 = c2[f2]) && "setAttribute" in d2 == !!w2 && (w2 ? d2.localName == w2 : 3 == d2.nodeType)) {
        e2 = d2, c2[f2] = null;
        break;
      }
    }
    if (null == e2) {
      if (null == w2) return document.createTextNode(O2);
      e2 = document.createElementNS(a2, w2, O2.is && O2), l3 && (r.__m && r.__m(t2, c2), l3 = false), c2 = null;
    }
    if (null === w2) S2 === O2 || l3 && e2.data === O2 || (e2.data = O2);
    else {
      if (c2 = c2 && n2.call(e2.childNodes), S2 = o2.props || v, !l3 && null != c2) for (S2 = {}, f2 = 0; f2 < e2.attributes.length; f2++) S2[(d2 = e2.attributes[f2]).name] = d2.value;
      for (f2 in S2) if (d2 = S2[f2], "children" == f2) ;
      else if ("dangerouslySetInnerHTML" == f2) m2 = d2;
      else if (!(f2 in O2)) {
        if ("value" == f2 && "defaultValue" in O2 || "checked" == f2 && "defaultChecked" in O2) continue;
        N(e2, f2, null, d2, a2);
      }
      for (f2 in O2) d2 = O2[f2], "children" == f2 ? h2 = d2 : "dangerouslySetInnerHTML" == f2 ? p2 = d2 : "value" == f2 ? _2 = d2 : "checked" == f2 ? b2 = d2 : l3 && "function" != typeof d2 || S2[f2] === d2 || N(e2, f2, d2, S2[f2], a2);
      if (p2) l3 || m2 && (p2.__html === m2.__html || p2.__html === e2.innerHTML) || (e2.innerHTML = p2.__html), t2.__k = [];
      else if (m2 && (e2.innerHTML = ""), k(e2, y(h2) ? h2 : [h2], t2, o2, i2, "foreignObject" == w2 ? "http://www.w3.org/1999/xhtml" : a2, c2, u2, c2 ? c2[0] : o2.__k && E(o2, 0), l3, s3), null != c2) for (f2 = c2.length; f2--; ) g(c2[f2]);
      l3 || (f2 = "value", "progress" == w2 && null == _2 ? e2.removeAttribute("value") : void 0 !== _2 && (_2 !== e2[f2] || "progress" == w2 && !_2 || "option" == w2 && _2 !== S2[f2]) && N(e2, f2, _2, S2[f2], a2), f2 = "checked", void 0 !== b2 && b2 !== e2[f2] && N(e2, f2, b2, S2[f2], a2));
    }
    return e2;
  }
  function M(e2, t2, n3) {
    try {
      if ("function" == typeof e2) {
        var o2 = "function" == typeof e2.__u;
        o2 && e2.__u(), o2 && null == t2 || (e2.__u = e2(t2));
      } else e2.current = t2;
    } catch (e3) {
      r.__e(e3, n3);
    }
  }
  function H(e2, t2, n3) {
    var o2, i2;
    if (r.unmount && r.unmount(e2), (o2 = e2.ref) && (o2.current && o2.current !== e2.__e || M(o2, null, t2)), null != (o2 = e2.__c)) {
      if (o2.componentWillUnmount) try {
        o2.componentWillUnmount();
      } catch (e3) {
        r.__e(e3, t2);
      }
      o2.base = o2.__P = null;
    }
    if (o2 = e2.__k) for (i2 = 0; i2 < o2.length; i2++) o2[i2] && H(o2[i2], t2, n3 || "function" != typeof e2.type);
    n3 || g(e2.__e), e2.__c = e2.__ = e2.__e = void 0;
  }
  function U(e2, t2, n3) {
    return this.constructor(e2, n3);
  }
  function F(e2, t2, o2) {
    var i2, a2, c2, u2;
    t2 == document && (t2 = document.documentElement), r.__ && r.__(e2, t2), a2 = (i2 = "function" == typeof o2) ? null : o2 && o2.__k || t2.__k, c2 = [], u2 = [], R(t2, e2 = (!i2 && o2 || t2).__k = b(O, null, [e2]), a2 || v, v, t2.namespaceURI, !i2 && o2 ? [o2] : a2 ? null : t2.firstChild ? n2.call(t2.childNodes) : null, c2, !i2 && o2 ? o2 : a2 ? a2.__e : t2.firstChild, i2, u2), L(c2, e2, u2);
  }
  function B(e2, t2) {
    F(e2, t2, B);
  }
  function V(e2, t2, r2) {
    var o2, i2, a2, c2, u2 = _({}, e2.props);
    for (a2 in e2.type && e2.type.defaultProps && (c2 = e2.type.defaultProps), t2) "key" == a2 ? o2 = t2[a2] : "ref" == a2 ? i2 = t2[a2] : u2[a2] = void 0 === t2[a2] && void 0 !== c2 ? c2[a2] : t2[a2];
    return arguments.length > 2 && (u2.children = arguments.length > 3 ? n2.call(arguments, 2) : r2), S(e2.type, u2, o2 || e2.key, i2 || e2.ref, null);
  }
  n2 = h.slice, r = { __e: function(e2, t2, n3, r2) {
    for (var o2, i2, a2; t2 = t2.__; ) if ((o2 = t2.__c) && !o2.__) try {
      if ((i2 = o2.constructor) && null != i2.getDerivedStateFromError && (o2.setState(i2.getDerivedStateFromError(e2)), a2 = o2.__d), null != o2.componentDidCatch && (o2.componentDidCatch(e2, r2 || {}), a2 = o2.__d), a2) return o2.__E = o2;
    } catch (t3) {
      e2 = t3;
    }
    throw e2;
  } }, o = 0, w.prototype.setState = function(e2, t2) {
    var n3;
    n3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e2 && (e2 = e2(_({}, n3), this.props)), e2 && _(n3, e2), null != e2 && this.__v && (t2 && this._sb.push(t2), P(this));
  }, w.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
  }, w.prototype.render = O, i = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(e2, t2) {
    return e2.__v.__b - t2.__v.__b;
  }, I.__r = 0, l2 = /(PointerCapture)$|Capture$/i, s2 = 0, f = T(false), p = T(true), m = 0;
  var K;
  var W;
  var z;
  var J;
  var Q = 0;
  var $ = [];
  var Z = r;
  var G = Z.__b;
  var Y = Z.__r;
  var X = Z.diffed;
  var ee = Z.__c;
  var te = Z.unmount;
  var ne = Z.__;
  function re(e2, t2) {
    Z.__h && Z.__h(W, e2, Q || t2), Q = 0;
    var n3 = W.__H || (W.__H = { __: [], __h: [] });
    return e2 >= n3.__.length && n3.__.push({}), n3.__[e2];
  }
  function oe(e2) {
    return Q = 1, ie(Se, e2);
  }
  function ie(e2, t2, n3) {
    var r2 = re(K++, 2);
    if (r2.t = e2, !r2.__c && (r2.__ = [n3 ? n3(t2) : Se(void 0, t2), function(e3) {
      var t3 = r2.__N ? r2.__N[0] : r2.__[0], n4 = r2.t(t3, e3);
      t3 !== n4 && (r2.__N = [n4, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = W, !W.u)) {
      var o2 = function(e3, t3, n4) {
        if (!r2.__c.__H) return true;
        var o3 = r2.__c.__H.__.filter(function(e4) {
          return !!e4.__c;
        });
        if (o3.every(function(e4) {
          return !e4.__N;
        })) return !i2 || i2.call(this, e3, t3, n4);
        var a3 = r2.__c.props !== e3;
        return o3.forEach(function(e4) {
          if (e4.__N) {
            var t4 = e4.__[0];
            e4.__ = e4.__N, e4.__N = void 0, t4 !== e4.__[0] && (a3 = true);
          }
        }), i2 && i2.call(this, e3, t3, n4) || a3;
      };
      W.u = true;
      var i2 = W.shouldComponentUpdate, a2 = W.componentWillUpdate;
      W.componentWillUpdate = function(e3, t3, n4) {
        if (this.__e) {
          var r3 = i2;
          i2 = void 0, o2(e3, t3, n4), i2 = r3;
        }
        a2 && a2.call(this, e3, t3, n4);
      }, W.shouldComponentUpdate = o2;
    }
    return r2.__N || r2.__;
  }
  function ae(e2, t2) {
    var n3 = re(K++, 3);
    !Z.__s && be(n3.__H, t2) && (n3.__ = e2, n3.i = t2, W.__H.__h.push(n3));
  }
  function ce(e2, t2) {
    var n3 = re(K++, 4);
    !Z.__s && be(n3.__H, t2) && (n3.__ = e2, n3.i = t2, W.__h.push(n3));
  }
  function ue(e2) {
    return Q = 5, se(function() {
      return { current: e2 };
    }, []);
  }
  function le(e2, t2, n3) {
    Q = 6, ce(function() {
      return "function" == typeof e2 ? (e2(t2()), function() {
        return e2(null);
      }) : e2 ? (e2.current = t2(), function() {
        return e2.current = null;
      }) : void 0;
    }, null == n3 ? n3 : n3.concat(e2));
  }
  function se(e2, t2) {
    var n3 = re(K++, 7);
    return be(n3.__H, t2) && (n3.__ = e2(), n3.__H = t2, n3.__h = e2), n3.__;
  }
  function fe(e2, t2) {
    return Q = 8, se(function() {
      return e2;
    }, t2);
  }
  function pe(e2) {
    var t2 = W.context[e2.__c], n3 = re(K++, 9);
    return n3.c = e2, t2 ? (null == n3.__ && (n3.__ = true, t2.sub(W)), t2.props.value) : e2.__;
  }
  function me(e2, t2) {
    Z.useDebugValue && Z.useDebugValue(t2 ? t2(e2) : e2);
  }
  function ve() {
    var e2 = re(K++, 11);
    if (!e2.__) {
      for (var t2 = W.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
      var n3 = t2.__m || (t2.__m = [0, 0]);
      e2.__ = "P" + n3[0] + "-" + n3[1]++;
    }
    return e2.__;
  }
  function he() {
    for (var e2; e2 = $.shift(); ) if (e2.__P && e2.__H) try {
      e2.__H.__h.forEach(_e), e2.__H.__h.forEach(ge), e2.__H.__h = [];
    } catch (t2) {
      e2.__H.__h = [], Z.__e(t2, e2.__v);
    }
  }
  Z.__b = function(e2) {
    W = null, G && G(e2);
  }, Z.__ = function(e2, t2) {
    e2 && t2.__k && t2.__k.__m && (e2.__m = t2.__k.__m), ne && ne(e2, t2);
  }, Z.__r = function(e2) {
    Y && Y(e2), K = 0;
    var t2 = (W = e2.__c).__H;
    t2 && (z === W ? (t2.__h = [], W.__h = [], t2.__.forEach(function(e3) {
      e3.__N && (e3.__ = e3.__N), e3.i = e3.__N = void 0;
    })) : (t2.__h.forEach(_e), t2.__h.forEach(ge), t2.__h = [], K = 0)), z = W;
  }, Z.diffed = function(e2) {
    X && X(e2);
    var t2 = e2.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== $.push(t2) && J === Z.requestAnimationFrame || ((J = Z.requestAnimationFrame) || ye)(he)), t2.__H.__.forEach(function(e3) {
      e3.i && (e3.__H = e3.i), e3.i = void 0;
    })), z = W = null;
  }, Z.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(_e), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || ge(e4);
        });
      } catch (n3) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], Z.__e(n3, e3.__v);
      }
    }), ee && ee(e2, t2);
  }, Z.unmount = function(e2) {
    te && te(e2);
    var t2, n3 = e2.__c;
    n3 && n3.__H && (n3.__H.__.forEach(function(e3) {
      try {
        _e(e3);
      } catch (e4) {
        t2 = e4;
      }
    }), n3.__H = void 0, t2 && Z.__e(t2, n3.__v));
  };
  var de = "function" == typeof requestAnimationFrame;
  function ye(e2) {
    var t2, n3 = function() {
      clearTimeout(r2), de && cancelAnimationFrame(t2), setTimeout(e2);
    }, r2 = setTimeout(n3, 100);
    de && (t2 = requestAnimationFrame(n3));
  }
  function _e(e2) {
    var t2 = W, n3 = e2.__c;
    "function" == typeof n3 && (e2.__c = void 0, n3()), W = t2;
  }
  function ge(e2) {
    var t2 = W;
    e2.__c = e2.__(), W = t2;
  }
  function be(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n3) {
      return t3 !== e2[n3];
    });
  }
  function Se(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function Oe(e2, t2) {
    for (var n3 in t2) e2[n3] = t2[n3];
    return e2;
  }
  function we(e2, t2) {
    for (var n3 in e2) if ("__source" !== n3 && !(n3 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && e2[r2] !== t2[r2]) return true;
    return false;
  }
  function Ee(e2, t2) {
    var n3 = t2(), r2 = oe({ t: { __: n3, u: t2 } }), o2 = r2[0].t, i2 = r2[1];
    return ce(function() {
      o2.__ = n3, o2.u = t2, je(o2) && i2({ t: o2 });
    }, [e2, n3, t2]), ae(function() {
      return je(o2) && i2({ t: o2 }), e2(function() {
        je(o2) && i2({ t: o2 });
      });
    }, [e2]), n3;
  }
  function je(e2) {
    var t2, n3, r2 = e2.u, o2 = e2.__;
    try {
      var i2 = r2();
      return !((t2 = o2) === (n3 = i2) && (0 !== t2 || 1 / t2 == 1 / n3) || t2 != t2 && n3 != n3);
    } catch (e3) {
      return true;
    }
  }
  function Pe(e2) {
    e2();
  }
  function Ie(e2) {
    return e2;
  }
  function ke() {
    return [false, Pe];
  }
  var De = ce;
  function Ce(e2, t2) {
    this.props = e2, this.context = t2;
  }
  (Ce.prototype = new w()).isPureReactComponent = true, Ce.prototype.shouldComponentUpdate = function(e2, t2) {
    return we(this.props, e2) || we(this.state, t2);
  };
  var xe = r.__b;
  r.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), xe && xe(e2);
  };
  var Ae = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var Ne = function(e2, t2) {
    return null == e2 ? null : C(C(e2).map(t2));
  };
  var Te = { map: Ne, forEach: Ne, count: function(e2) {
    return e2 ? C(e2).length : 0;
  }, only: function(e2) {
    var t2 = C(e2);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: C };
  var Re = r.__e;
  r.__e = function(e2, t2, n3, r2) {
    if (e2.then) {
      for (var o2, i2 = t2; i2 = i2.__; ) if ((o2 = i2.__c) && o2.__c) return null == t2.__e && (t2.__e = n3.__e, t2.__k = n3.__k), o2.__c(e2, t2);
    }
    Re(e2, t2, n3, r2);
  };
  var Le = r.unmount;
  function qe(e2, t2, n3) {
    return e2 && (e2.__c && e2.__c.__H && (e2.__c.__H.__.forEach(function(e3) {
      "function" == typeof e3.__c && e3.__c();
    }), e2.__c.__H = null), null != (e2 = Oe({}, e2)).__c && (e2.__c.__P === n3 && (e2.__c.__P = t2), e2.__c = null), e2.__k = e2.__k && e2.__k.map(function(e3) {
      return qe(e3, t2, n3);
    })), e2;
  }
  function Me(e2, t2, n3) {
    return e2 && n3 && (e2.__v = null, e2.__k = e2.__k && e2.__k.map(function(e3) {
      return Me(e3, t2, n3);
    }), e2.__c && e2.__c.__P === t2 && (e2.__e && n3.appendChild(e2.__e), e2.__c.__e = true, e2.__c.__P = n3)), e2;
  }
  function He() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ue(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__a && t2.__a(e2);
  }
  function Fe() {
    this.i = null, this.l = null;
  }
  r.unmount = function(e2) {
    var t2 = e2.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & e2.__u && (e2.type = null), Le && Le(e2);
  }, (He.prototype = new w()).__c = function(e2, t2) {
    var n3 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(n3);
    var o2 = Ue(r2.__v), i2 = false, a2 = function() {
      i2 || (i2 = true, n3.__R = null, o2 ? o2(c2) : c2());
    };
    n3.__R = a2;
    var c2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var e3 = r2.state.__a;
          r2.__v.__k[0] = Me(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e2.then(a2, a2);
  }, He.prototype.componentWillUnmount = function() {
    this.o = [];
  }, He.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n3 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = qe(this.__b, n3, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__a && b(O, null, e2.fallback);
    return o2 && (o2.__u &= -33), [b(O, null, t2.__a ? null : e2.children), o2];
  };
  var Be = function(e2, t2, n3) {
    if (++n3[1] === n3[0] && e2.l.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.l.size)) for (n3 = e2.i; n3; ) {
      for (; n3.length > 3; ) n3.pop()();
      if (n3[1] < n3[0]) break;
      e2.i = n3 = n3[2];
    }
  };
  function Ve(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function Ke(e2) {
    var t2 = this, n3 = e2.h;
    t2.componentWillUnmount = function() {
      F(null, t2.v), t2.v = null, t2.h = null;
    }, t2.h && t2.h !== n3 && t2.componentWillUnmount(), t2.v || (t2.h = n3, t2.v = { nodeType: 1, parentNode: n3, childNodes: [], contains: function() {
      return true;
    }, appendChild: function(e3) {
      this.childNodes.push(e3), t2.h.appendChild(e3);
    }, insertBefore: function(e3, n4) {
      this.childNodes.push(e3), t2.h.insertBefore(e3, n4);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.h.removeChild(e3);
    } }), F(b(Ve, { context: t2.context }, e2.__v), t2.v);
  }
  function We(e2, t2) {
    var n3 = b(Ke, { __v: e2, h: t2 });
    return n3.containerInfo = t2, n3;
  }
  (Fe.prototype = new w()).__a = function(e2) {
    var t2 = this, n3 = Ue(t2.__v), r2 = t2.l.get(e2);
    return r2[0]++, function(o2) {
      var i2 = function() {
        t2.props.revealOrder ? (r2.push(o2), Be(t2, e2, r2)) : o2();
      };
      n3 ? n3(i2) : i2();
    };
  }, Fe.prototype.render = function(e2) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t2 = C(e2.children);
    e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
    for (var n3 = t2.length; n3--; ) this.l.set(t2[n3], this.i = [1, 0, this.i]);
    return e2.children;
  }, Fe.prototype.componentDidUpdate = Fe.prototype.componentDidMount = function() {
    var e2 = this;
    this.l.forEach(function(t2, n3) {
      Be(e2, n3, t2);
    });
  };
  var ze = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var Je = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Qe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var $e = /[A-Z0-9]/g;
  var Ze = "undefined" != typeof document;
  var Ge = function(e2) {
    return ("undefined" != typeof Symbol && "symbol" == t(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(e2);
  };
  function Ye(e2, t2, n3) {
    return null == t2.__k && (t2.textContent = ""), F(e2, t2), "function" == typeof n3 && n3(), e2 ? e2.__c : null;
  }
  w.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(w.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Xe = r.event;
  function et() {
  }
  function tt() {
    return this.cancelBubble;
  }
  function nt() {
    return this.defaultPrevented;
  }
  r.event = function(e2) {
    return Xe && (e2 = Xe(e2)), e2.persist = et, e2.isPropagationStopped = tt, e2.isDefaultPrevented = nt, e2.nativeEvent = e2;
  };
  var rt;
  var ot = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var it = r.vnode;
  r.vnode = function(e2) {
    "string" == typeof e2.type && function(e3) {
      var t2 = e3.props, n3 = e3.type, r2 = {}, o2 = -1 === n3.indexOf("-");
      for (var i2 in t2) {
        var a2 = t2[i2];
        if (!("value" === i2 && "defaultValue" in t2 && null == a2 || Ze && "children" === i2 && "noscript" === n3 || "class" === i2 || "className" === i2)) {
          var c2 = i2.toLowerCase();
          "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === a2 ? a2 = "" : "translate" === c2 && "no" === a2 ? a2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i2 = "ondblclick" : "onchange" !== c2 || "input" !== n3 && "textarea" !== n3 || Ge(t2.type) ? "onfocus" === c2 ? i2 = "onfocusin" : "onblur" === c2 ? i2 = "onfocusout" : Qe.test(i2) && (i2 = c2) : c2 = i2 = "oninput" : o2 && Je.test(i2) ? i2 = i2.replace($e, "-$&").toLowerCase() : null === a2 && (a2 = void 0), "oninput" === c2 && r2[i2 = c2] && (i2 = "oninputCapture"), r2[i2] = a2;
        }
      }
      "select" == n3 && r2.multiple && Array.isArray(r2.value) && (r2.value = C(t2.children).forEach(function(e4) {
        e4.props.selected = -1 != r2.value.indexOf(e4.props.value);
      })), "select" == n3 && null != r2.defaultValue && (r2.value = C(t2.children).forEach(function(e4) {
        e4.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e4.props.value) : r2.defaultValue == e4.props.value;
      })), t2.class && !t2.className ? (r2.class = t2.class, Object.defineProperty(r2, "className", ot)) : (t2.className && !t2.class || t2.class && t2.className) && (r2.class = r2.className = t2.className), e3.props = r2;
    }(e2), e2.$$typeof = ze, it && it(e2);
  };
  var at = r.__r;
  r.__r = function(e2) {
    at && at(e2), rt = e2.__c;
  };
  var ct = r.diffed;
  r.diffed = function(e2) {
    ct && ct(e2);
    var t2 = e2.props, n3 = e2.__e;
    null != n3 && "textarea" === e2.type && "value" in t2 && t2.value !== n3.value && (n3.value = null == t2.value ? "" : t2.value), rt = null;
  };
  var ut = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return rt.__n[e2.__c].props.value;
  }, useCallback: fe, useContext: pe, useDebugValue: me, useDeferredValue: Ie, useEffect: ae, useId: ve, useImperativeHandle: le, useInsertionEffect: De, useLayoutEffect: ce, useMemo: se, useReducer: ie, useRef: ue, useState: oe, useSyncExternalStore: Ee, useTransition: ke } } };
  function lt(e2) {
    return !!e2 && e2.$$typeof === ze;
  }
  var st = { useState: oe, useId: ve, useReducer: ie, useEffect: ae, useLayoutEffect: ce, useInsertionEffect: De, useTransition: ke, useDeferredValue: Ie, useSyncExternalStore: Ee, startTransition: Pe, useRef: ue, useImperativeHandle: le, useMemo: se, useCallback: fe, useContext: pe, useDebugValue: me, version: "18.3.1", Children: Te, render: Ye, hydrate: function(e2, t2, n3) {
    return B(e2, t2), "function" == typeof n3 && n3(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (F(null, e2), true);
  }, createPortal: We, createElement: b, createContext: function(e2, t2) {
    var n3 = { __c: t2 = "__cC" + m++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n4, r2;
      return this.getChildContext || (n4 = /* @__PURE__ */ new Set(), (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.componentWillUnmount = function() {
        n4 = null;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n4.forEach(function(e5) {
          e5.__e = true, P(e5);
        });
      }, this.sub = function(e4) {
        n4.add(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n4 && n4.delete(e4), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n3.Provider.__ = n3.Consumer.contextType = n3;
  }, createFactory: function(e2) {
    return b.bind(null, e2);
  }, cloneElement: function(e2) {
    return lt(e2) ? V.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: O, isValidElement: lt, isElement: lt, isFragment: function(e2) {
    return lt(e2) && e2.type === O;
  }, isMemo: function(e2) {
    return !!e2 && !!e2.displayName && ("string" == typeof e2.displayName || e2.displayName instanceof String) && e2.displayName.startsWith("Memo(");
  }, findDOMNode: function(e2) {
    return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
  }, Component: w, PureComponent: Ce, memo: function(e2, t2) {
    function n3(e3) {
      var n4 = this.props.ref, r3 = n4 == e3.ref;
      return !r3 && n4 && (n4.call ? n4(null) : n4.current = null), t2 ? !t2(this.props, e3) || !r3 : we(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n3, b(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3) {
      var n3 = Oe({}, t3);
      return delete n3.ref, e2(n3, t3.ref || null);
    }
    return t2.$$typeof = Ae, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, flushSync: function(e2, t2) {
    return e2(t2);
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: O, Suspense: He, SuspenseList: Fe, lazy: function(e2) {
    var t2, n3, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n3 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2) throw r2;
      if (!n3) throw t2;
      return b(n3, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ut };
  function ft(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = Array(t2); n3 < t2; n3++) r2[n3] = e2[n3];
    return r2;
  }
  function pt(e2, t2, n3, r2, o2, i2, a2) {
    try {
      var c2 = e2[i2](a2), u2 = c2.value;
    } catch (e3) {
      return void n3(e3);
    }
    c2.done ? t2(u2) : Promise.resolve(u2).then(r2, o2);
  }
  function mt(e2) {
    return function() {
      var t2 = this, n3 = arguments;
      return new Promise(function(r2, o2) {
        var i2 = e2.apply(t2, n3);
        function a2(e3) {
          pt(i2, r2, o2, a2, c2, "next", e3);
        }
        function c2(e3) {
          pt(i2, r2, o2, a2, c2, "throw", e3);
        }
        a2(void 0);
      });
    };
  }
  function vt(e2, n3, r2) {
    return n3 = gt(n3), function(e3, n4) {
      if (n4 && ("object" == t(n4) || "function" == typeof n4)) return n4;
      if (void 0 !== n4) throw new TypeError("Derived constructors may only return object or undefined");
      return function(e4) {
        if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      }(e3);
    }(e2, St() ? Reflect.construct(n3, r2 || [], gt(e2).constructor) : n3.apply(e2, r2));
  }
  function ht(e2, t2) {
    if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }
  function dt(e2, t2, n3) {
    return Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function yt(e2, n3, r2) {
    return (n3 = function(e3) {
      var n4 = function(e4) {
        if ("object" != t(e4) || !e4) return e4;
        var n5 = e4[Symbol.toPrimitive];
        if (void 0 !== n5) {
          var r3 = n5.call(e4, "string");
          if ("object" != t(r3)) return r3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" == t(n4) ? n4 : n4 + "";
    }(n3)) in e2 ? Object.defineProperty(e2, n3, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[n3] = r2, e2;
  }
  function _t() {
    return _t = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n3 = arguments[t2];
        for (var r2 in n3) ({}).hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
      }
      return e2;
    }, _t.apply(null, arguments);
  }
  function gt(e2) {
    return gt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    }, gt(e2);
  }
  function bt(e2, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && Pt(e2, t2);
  }
  function St() {
    try {
      var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e3) {
    }
    return (St = function() {
      return !!e2;
    })();
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
  function wt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ot(Object(n3), true).forEach(function(t3) {
        yt(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Ot(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Et(e2, t2) {
    if (null == e2) return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n4 = {};
      for (var r3 in e3) if ({}.hasOwnProperty.call(e3, r3)) {
        if (t3.includes(r3)) continue;
        n4[r3] = e3[r3];
      }
      return n4;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n3 = i2[r2], t2.includes(n3) || {}.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function jt() {
    jt = function() {
      return n3;
    };
    var e2, n3 = {}, r2 = Object.prototype, o2 = r2.hasOwnProperty, i2 = Object.defineProperty || function(e3, t2, n4) {
      e3[t2] = n4.value;
    }, a2 = "function" == typeof Symbol ? Symbol : {}, c2 = a2.iterator || "@@iterator", u2 = a2.asyncIterator || "@@asyncIterator", l3 = a2.toStringTag || "@@toStringTag";
    function s3(e3, t2, n4) {
      return Object.defineProperty(e3, t2, { value: n4, enumerable: true, configurable: true, writable: true }), e3[t2];
    }
    try {
      s3({}, "");
    } catch (e3) {
      s3 = function(e4, t2, n4) {
        return e4[t2] = n4;
      };
    }
    function f2(e3, t2, n4, r3) {
      var o3 = t2 && t2.prototype instanceof _2 ? t2 : _2, a3 = Object.create(o3.prototype), c3 = new x2(r3 || []);
      return i2(a3, "_invoke", { value: I2(e3, n4, c3) }), a3;
    }
    function p2(e3, t2, n4) {
      try {
        return { type: "normal", arg: e3.call(t2, n4) };
      } catch (e4) {
        return { type: "throw", arg: e4 };
      }
    }
    n3.wrap = f2;
    var m2 = "suspendedStart", v2 = "suspendedYield", h2 = "executing", d2 = "completed", y2 = {};
    function _2() {
    }
    function g2() {
    }
    function b2() {
    }
    var S2 = {};
    s3(S2, c2, function() {
      return this;
    });
    var O2 = Object.getPrototypeOf, w2 = O2 && O2(O2(A2([])));
    w2 && w2 !== r2 && o2.call(w2, c2) && (S2 = w2);
    var E2 = b2.prototype = _2.prototype = Object.create(S2);
    function j2(e3) {
      ["next", "throw", "return"].forEach(function(t2) {
        s3(e3, t2, function(e4) {
          return this._invoke(t2, e4);
        });
      });
    }
    function P2(e3, n4) {
      function r3(i3, a4, c3, u3) {
        var l4 = p2(e3[i3], e3, a4);
        if ("throw" !== l4.type) {
          var s4 = l4.arg, f3 = s4.value;
          return f3 && "object" == t(f3) && o2.call(f3, "__await") ? n4.resolve(f3.__await).then(function(e4) {
            r3("next", e4, c3, u3);
          }, function(e4) {
            r3("throw", e4, c3, u3);
          }) : n4.resolve(f3).then(function(e4) {
            s4.value = e4, c3(s4);
          }, function(e4) {
            return r3("throw", e4, c3, u3);
          });
        }
        u3(l4.arg);
      }
      var a3;
      i2(this, "_invoke", { value: function(e4, t2) {
        function o3() {
          return new n4(function(n5, o4) {
            r3(e4, t2, n5, o4);
          });
        }
        return a3 = a3 ? a3.then(o3, o3) : o3();
      } });
    }
    function I2(t2, n4, r3) {
      var o3 = m2;
      return function(i3, a3) {
        if (o3 === h2) throw Error("Generator is already running");
        if (o3 === d2) {
          if ("throw" === i3) throw a3;
          return { value: e2, done: true };
        }
        for (r3.method = i3, r3.arg = a3; ; ) {
          var c3 = r3.delegate;
          if (c3) {
            var u3 = k2(c3, r3);
            if (u3) {
              if (u3 === y2) continue;
              return u3;
            }
          }
          if ("next" === r3.method) r3.sent = r3._sent = r3.arg;
          else if ("throw" === r3.method) {
            if (o3 === m2) throw o3 = d2, r3.arg;
            r3.dispatchException(r3.arg);
          } else "return" === r3.method && r3.abrupt("return", r3.arg);
          o3 = h2;
          var l4 = p2(t2, n4, r3);
          if ("normal" === l4.type) {
            if (o3 = r3.done ? d2 : v2, l4.arg === y2) continue;
            return { value: l4.arg, done: r3.done };
          }
          "throw" === l4.type && (o3 = d2, r3.method = "throw", r3.arg = l4.arg);
        }
      };
    }
    function k2(t2, n4) {
      var r3 = n4.method, o3 = t2.iterator[r3];
      if (o3 === e2) return n4.delegate = null, "throw" === r3 && t2.iterator.return && (n4.method = "return", n4.arg = e2, k2(t2, n4), "throw" === n4.method) || "return" !== r3 && (n4.method = "throw", n4.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), y2;
      var i3 = p2(o3, t2.iterator, n4.arg);
      if ("throw" === i3.type) return n4.method = "throw", n4.arg = i3.arg, n4.delegate = null, y2;
      var a3 = i3.arg;
      return a3 ? a3.done ? (n4[t2.resultName] = a3.value, n4.next = t2.nextLoc, "return" !== n4.method && (n4.method = "next", n4.arg = e2), n4.delegate = null, y2) : a3 : (n4.method = "throw", n4.arg = new TypeError("iterator result is not an object"), n4.delegate = null, y2);
    }
    function D2(e3) {
      var t2 = { tryLoc: e3[0] };
      1 in e3 && (t2.catchLoc = e3[1]), 2 in e3 && (t2.finallyLoc = e3[2], t2.afterLoc = e3[3]), this.tryEntries.push(t2);
    }
    function C2(e3) {
      var t2 = e3.completion || {};
      t2.type = "normal", delete t2.arg, e3.completion = t2;
    }
    function x2(e3) {
      this.tryEntries = [{ tryLoc: "root" }], e3.forEach(D2, this), this.reset(true);
    }
    function A2(n4) {
      if (n4 || "" === n4) {
        var r3 = n4[c2];
        if (r3) return r3.call(n4);
        if ("function" == typeof n4.next) return n4;
        if (!isNaN(n4.length)) {
          var i3 = -1, a3 = function t2() {
            for (; ++i3 < n4.length; ) if (o2.call(n4, i3)) return t2.value = n4[i3], t2.done = false, t2;
            return t2.value = e2, t2.done = true, t2;
          };
          return a3.next = a3;
        }
      }
      throw new TypeError(t(n4) + " is not iterable");
    }
    return g2.prototype = b2, i2(E2, "constructor", { value: b2, configurable: true }), i2(b2, "constructor", { value: g2, configurable: true }), g2.displayName = s3(b2, l3, "GeneratorFunction"), n3.isGeneratorFunction = function(e3) {
      var t2 = "function" == typeof e3 && e3.constructor;
      return !!t2 && (t2 === g2 || "GeneratorFunction" === (t2.displayName || t2.name));
    }, n3.mark = function(e3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e3, b2) : (e3.__proto__ = b2, s3(e3, l3, "GeneratorFunction")), e3.prototype = Object.create(E2), e3;
    }, n3.awrap = function(e3) {
      return { __await: e3 };
    }, j2(P2.prototype), s3(P2.prototype, u2, function() {
      return this;
    }), n3.AsyncIterator = P2, n3.async = function(e3, t2, r3, o3, i3) {
      void 0 === i3 && (i3 = Promise);
      var a3 = new P2(f2(e3, t2, r3, o3), i3);
      return n3.isGeneratorFunction(t2) ? a3 : a3.next().then(function(e4) {
        return e4.done ? e4.value : a3.next();
      });
    }, j2(E2), s3(E2, l3, "Generator"), s3(E2, c2, function() {
      return this;
    }), s3(E2, "toString", function() {
      return "[object Generator]";
    }), n3.keys = function(e3) {
      var t2 = Object(e3), n4 = [];
      for (var r3 in t2) n4.push(r3);
      return n4.reverse(), function e4() {
        for (; n4.length; ) {
          var r4 = n4.pop();
          if (r4 in t2) return e4.value = r4, e4.done = false, e4;
        }
        return e4.done = true, e4;
      };
    }, n3.values = A2, x2.prototype = { constructor: x2, reset: function(t2) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e2, this.done = false, this.delegate = null, this.method = "next", this.arg = e2, this.tryEntries.forEach(C2), !t2) for (var n4 in this) "t" === n4.charAt(0) && o2.call(this, n4) && !isNaN(+n4.slice(1)) && (this[n4] = e2);
    }, stop: function() {
      this.done = true;
      var e3 = this.tryEntries[0].completion;
      if ("throw" === e3.type) throw e3.arg;
      return this.rval;
    }, dispatchException: function(t2) {
      if (this.done) throw t2;
      var n4 = this;
      function r3(r4, o3) {
        return c3.type = "throw", c3.arg = t2, n4.next = r4, o3 && (n4.method = "next", n4.arg = e2), !!o3;
      }
      for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
        var a3 = this.tryEntries[i3], c3 = a3.completion;
        if ("root" === a3.tryLoc) return r3("end");
        if (a3.tryLoc <= this.prev) {
          var u3 = o2.call(a3, "catchLoc"), l4 = o2.call(a3, "finallyLoc");
          if (u3 && l4) {
            if (this.prev < a3.catchLoc) return r3(a3.catchLoc, true);
            if (this.prev < a3.finallyLoc) return r3(a3.finallyLoc);
          } else if (u3) {
            if (this.prev < a3.catchLoc) return r3(a3.catchLoc, true);
          } else {
            if (!l4) throw Error("try statement without catch or finally");
            if (this.prev < a3.finallyLoc) return r3(a3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e3, t2) {
      for (var n4 = this.tryEntries.length - 1; n4 >= 0; --n4) {
        var r3 = this.tryEntries[n4];
        if (r3.tryLoc <= this.prev && o2.call(r3, "finallyLoc") && this.prev < r3.finallyLoc) {
          var i3 = r3;
          break;
        }
      }
      i3 && ("break" === e3 || "continue" === e3) && i3.tryLoc <= t2 && t2 <= i3.finallyLoc && (i3 = null);
      var a3 = i3 ? i3.completion : {};
      return a3.type = e3, a3.arg = t2, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
    }, complete: function(e3, t2) {
      if ("throw" === e3.type) throw e3.arg;
      return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t2 && (this.next = t2), y2;
    }, finish: function(e3) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n4 = this.tryEntries[t2];
        if (n4.finallyLoc === e3) return this.complete(n4.completion, n4.afterLoc), C2(n4), y2;
      }
    }, catch: function(e3) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n4 = this.tryEntries[t2];
        if (n4.tryLoc === e3) {
          var r3 = n4.completion;
          if ("throw" === r3.type) {
            var o3 = r3.arg;
            C2(n4);
          }
          return o3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(t2, n4, r3) {
      return this.delegate = { iterator: A2(t2), resultName: n4, nextLoc: r3 }, "next" === this.method && (this.arg = e2), y2;
    } }, n3;
  }
  function Pt(e2, t2) {
    return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
      return e3.__proto__ = t3, e3;
    }, Pt(e2, t2);
  }
  function It(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3)) return e3;
    }(e2) || function(e3, t3) {
      var n3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n3) {
        var r2, o2, i2, a2, c2 = [], u2 = true, l3 = false;
        try {
          if (i2 = (n3 = n3.call(e3)).next, 0 === t3) {
            if (Object(n3) !== n3) return;
            u2 = false;
          } else for (; !(u2 = (r2 = i2.call(n3)).done) && (c2.push(r2.value), c2.length !== t3); u2 = true) ;
        } catch (e4) {
          l3 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && null != n3.return && (a2 = n3.return(), Object(a2) !== a2)) return;
          } finally {
            if (l3) throw o2;
          }
        }
        return c2;
      }
    }(e2, t2) || Dt(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function kt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return ft(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || Dt(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Dt(e2, t2) {
    if (e2) {
      if ("string" == typeof e2) return ft(e2, t2);
      var n3 = {}.toString.call(e2).slice(8, -1);
      return "Object" === n3 && e2.constructor && (n3 = e2.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e2) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? ft(e2, t2) : void 0;
    }
  }
  function Ct(e2) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return Ct = function(e3) {
      if (null === e3 || !function(e4) {
        try {
          return -1 !== Function.toString.call(e4).indexOf("[native code]");
        } catch (t3) {
          return "function" == typeof e4;
        }
      }(e3)) return e3;
      if ("function" != typeof e3) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t2) {
        if (t2.has(e3)) return t2.get(e3);
        t2.set(e3, n3);
      }
      function n3() {
        return function(e4, t3, n4) {
          if (St()) return Reflect.construct.apply(null, arguments);
          var r2 = [null];
          r2.push.apply(r2, t3);
          var o2 = new (e4.bind.apply(e4, r2))();
          return n4 && Pt(o2, n4.prototype), o2;
        }(e3, arguments, gt(this).constructor);
      }
      return n3.prototype = Object.create(e3.prototype, { constructor: { value: n3, enumerable: false, writable: true, configurable: true } }), Pt(n3, e3);
    }, Ct(e2);
  }
  function xt() {
    return st.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, st.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function At() {
    return st.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, st.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var Nt = ["translations"];
  var Tt = "Ctrl";
  var Rt = st.forwardRef(function(e2, t2) {
    var n3 = e2.translations, r2 = void 0 === n3 ? {} : n3, o2 = Et(e2, Nt), i2 = r2.buttonText, a2 = void 0 === i2 ? "Search" : i2, c2 = r2.buttonAriaLabel, u2 = void 0 === c2 ? "Search" : c2, l3 = It(oe(null), 2), s3 = l3[0], f2 = l3[1];
    ae(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2(Tt));
    }, []);
    var p2 = It(s3 === Tt ? [Tt, "Ctrl", st.createElement(xt, null)] : ["Meta", "Command", s3], 3), m2 = p2[0], v2 = p2[1], h2 = p2[2];
    return st.createElement("button", _t({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": "".concat(u2, " (").concat(v2, "+K)") }, o2, { ref: t2 }), st.createElement("span", { className: "DocSearch-Button-Container" }, st.createElement(At, null), st.createElement("span", { className: "DocSearch-Button-Placeholder" }, a2)), st.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s3 && st.createElement(st.Fragment, null, st.createElement(Lt, { reactsToKey: m2 }, h2), st.createElement(Lt, { reactsToKey: "k" }, "K"))));
  });
  function Lt(e2) {
    var t2 = e2.reactsToKey, n3 = e2.children, r2 = It(oe(false), 2), o2 = r2[0], i2 = r2[1];
    return ae(function() {
      if (t2) return window.addEventListener("keydown", e3), window.addEventListener("keyup", n4), function() {
        window.removeEventListener("keydown", e3), window.removeEventListener("keyup", n4);
      };
      function e3(e4) {
        e4.key === t2 && i2(true);
      }
      function n4(e4) {
        e4.key !== t2 && "Meta" !== e4.key || i2(false);
      }
    }, [t2]), st.createElement("kbd", { className: o2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" }, n3);
  }
  function qt(e2, t2) {
    var n3 = void 0;
    return function() {
      for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
      n3 && clearTimeout(n3), n3 = setTimeout(function() {
        return e2.apply(void 0, o2);
      }, t2);
    };
  }
  function Mt(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var Ht = 0;
  function Ut(e2) {
    return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function Ft(e2) {
    return e2 !== Object(e2);
  }
  function Bt(e2, t2) {
    if (e2 === t2) return true;
    if (Ft(e2) || Ft(t2) || "function" == typeof e2 || "function" == typeof t2) return e2 === t2;
    if (Object.keys(e2).length !== Object.keys(t2).length) return false;
    for (var n3 = 0, r2 = Object.keys(e2); n3 < r2.length; n3++) {
      var o2 = r2[n3];
      if (!(o2 in t2)) return false;
      if (!Bt(e2[o2], t2[o2])) return false;
    }
    return true;
  }
  var Vt = function() {
  };
  var Kt = [{ segment: "autocomplete-core", version: "1.17.9" }];
  function Wt(e2) {
    var t2 = e2.item, n3 = e2.items, r2 = void 0 === n3 ? [] : n3;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + r2.findIndex(function(e3) {
      return e3.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function zt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++) r2[n3] = e2[n3];
    return r2;
  }
  var Jt = ["items"];
  var Qt = ["items"];
  function $t(e2) {
    return $t = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, $t(e2);
  }
  function Zt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return Gt(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return Gt(e3, t2);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Gt(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Gt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++) r2[n3] = e2[n3];
    return r2;
  }
  function Yt(e2, t2) {
    if (null == e2) return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Xt(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function en(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Xt(Object(n3), true).forEach(function(t3) {
        tn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Xt(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function tn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== $t(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== $t(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === $t(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function nn(e2) {
    return e2.map(function(e3) {
      var t2 = e3.items, n3 = Yt(e3, Jt);
      return en(en({}, n3), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e4) {
        return e4.objectID;
      })) || n3.objectIDs });
    });
  }
  function rn(e2) {
    var t2 = e2.items.reduce(function(e3, t3) {
      var n3;
      return e3[t3.__autocomplete_indexName] = (null !== (n3 = e3[t3.__autocomplete_indexName]) && void 0 !== n3 ? n3 : []).concat(t3), e3;
    }, {});
    return Object.keys(t2).map(function(e3) {
      return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
    });
  }
  function on(e2) {
    return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
  }
  function an(e2) {
    return an = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, an(e2);
  }
  function cn(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return un(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return un(e3, t2);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? un(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function un(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++) r2[n3] = e2[n3];
    return r2;
  }
  function ln(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function sn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? ln(Object(n3), true).forEach(function(t3) {
        fn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : ln(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function fn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== an(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== an(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === an(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  var pn = "2.15.0";
  var mn = "https://cdn.jsdelivr.net/npm/search-insights@".concat(pn, "/dist/search-insights.min.js");
  var vn = qt(function(e2) {
    var t2 = e2.onItemsChange, n3 = e2.items, r2 = e2.insights, o2 = e2.state;
    t2({ insights: r2, insightsEvents: rn({ items: n3 }).map(function(e3) {
      return sn({ eventName: "Items Viewed" }, e3);
    }), state: o2 });
  }, 400);
  function hn(e2) {
    var t2 = function(e3) {
      return sn({ onItemsChange: function(e4) {
        var t3 = e4.insights, n4 = e4.insightsEvents, r3 = e4.state;
        t3.viewedObjectIDs.apply(t3, cn(n4.map(function(e5) {
          return sn(sn({}, e5), {}, { algoliaSource: dn(e5.algoliaSource, r3.context) });
        })));
      }, onSelect: function(e4) {
        var t3 = e4.insights, n4 = e4.insightsEvents, r3 = e4.state;
        t3.clickedObjectIDsAfterSearch.apply(t3, cn(n4.map(function(e5) {
          return sn(sn({}, e5), {}, { algoliaSource: dn(e5.algoliaSource, r3.context) });
        })));
      }, onActive: Vt, __autocomplete_clickAnalytics: true }, e3);
    }(e2), n3 = t2.insightsClient, r2 = t2.insightsInitParams, o2 = t2.onItemsChange, i2 = t2.onSelect, a2 = t2.onActive, c2 = t2.__autocomplete_clickAnalytics, u2 = n3;
    if (n3 || "undefined" != typeof window && function() {
      var e3 = { window }.window, t3 = e3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof t3 && (u2 = e3[t3]), u2 || (e3.AlgoliaAnalyticsObject = t3, e3[t3] || (e3[t3] = function() {
        e3[t3].queue || (e3[t3].queue = []);
        for (var n4 = arguments.length, r3 = new Array(n4), o3 = 0; o3 < n4; o3++) r3[o3] = arguments[o3];
        e3[t3].queue.push(r3);
      }), e3[t3].version = pn, u2 = e3[t3], function(e4) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n4 = e4.document.createElement("script");
          n4.async = true, n4.src = mn, n4.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n4);
        } catch (e5) {
          console.error(t4);
        }
      }(e3));
    }(), !u2) return {};
    r2 && u2("init", sn({ partial: true }, r2));
    var l3 = function(e3) {
      var t3, n4, r3, o3 = (t3 = function(e4) {
        return function(e5) {
          if (Array.isArray(e5)) return e5;
        }(e4) || function(e5) {
          var t4 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
          if (null != t4) {
            var n5, r4, o4, i4, a3 = [], c3 = true, u3 = false;
            try {
              for (o4 = (t4 = t4.call(e5)).next; !(c3 = (n5 = o4.call(t4)).done) && (a3.push(n5.value), 2 !== a3.length); c3 = true) ;
            } catch (e6) {
              u3 = true, r4 = e6;
            } finally {
              try {
                if (!c3 && null != t4.return && (i4 = t4.return(), Object(i4) !== i4)) return;
              } finally {
                if (u3) throw r4;
              }
            }
            return a3;
          }
        }(e4) || function(e5) {
          if (e5) {
            if ("string" == typeof e5) return zt(e5, 2);
            var t4 = Object.prototype.toString.call(e5).slice(8, -1);
            return "Object" === t4 && e5.constructor && (t4 = e5.constructor.name), "Map" === t4 || "Set" === t4 ? Array.from(e5) : "Arguments" === t4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t4) ? zt(e5, 2) : void 0;
          }
        }(e4) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((e3.version || "").split(".").map(Number)), n4 = t3[0], r3 = t3[1], n4 >= 3 || 2 === n4 && r3 >= 4 || 1 === n4 && r3 >= 10);
      function i3(t4, n5, r4) {
        if (o3 && void 0 !== r4) {
          var i4 = r4[0].__autocomplete_algoliaCredentials, a3 = { "X-Algolia-Application-Id": i4.appId, "X-Algolia-API-Key": i4.apiKey };
          e3.apply(void 0, [t4].concat(Zt(n5), [{ headers: a3 }]));
        } else e3.apply(void 0, [t4].concat(Zt(n5)));
      }
      return { init: function(t4, n5) {
        e3("init", { appId: t4, apiKey: n5 });
      }, setAuthenticatedUserToken: function(t4) {
        e3("setAuthenticatedUserToken", t4);
      }, setUserToken: function(t4) {
        e3("setUserToken", t4);
      }, clickedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n5 = 0; n5 < e4; n5++) t4[n5] = arguments[n5];
        t4.length > 0 && i3("clickedObjectIDsAfterSearch", nn(t4), t4[0].items);
      }, clickedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n5 = 0; n5 < e4; n5++) t4[n5] = arguments[n5];
        t4.length > 0 && i3("clickedObjectIDs", nn(t4), t4[0].items);
      }, clickedFilters: function() {
        for (var t4 = arguments.length, n5 = new Array(t4), r4 = 0; r4 < t4; r4++) n5[r4] = arguments[r4];
        n5.length > 0 && e3.apply(void 0, ["clickedFilters"].concat(n5));
      }, convertedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n5 = 0; n5 < e4; n5++) t4[n5] = arguments[n5];
        t4.length > 0 && i3("convertedObjectIDsAfterSearch", nn(t4), t4[0].items);
      }, convertedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n5 = 0; n5 < e4; n5++) t4[n5] = arguments[n5];
        t4.length > 0 && i3("convertedObjectIDs", nn(t4), t4[0].items);
      }, convertedFilters: function() {
        for (var t4 = arguments.length, n5 = new Array(t4), r4 = 0; r4 < t4; r4++) n5[r4] = arguments[r4];
        n5.length > 0 && e3.apply(void 0, ["convertedFilters"].concat(n5));
      }, viewedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n5 = 0; n5 < e4; n5++) t4[n5] = arguments[n5];
        t4.length > 0 && t4.reduce(function(e5, t5) {
          var n6 = t5.items, r4 = Yt(t5, Qt);
          return [].concat(Zt(e5), Zt(function(e6) {
            for (var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n7 = [], r5 = 0; r5 < e6.objectIDs.length; r5 += t6) n7.push(en(en({}, e6), {}, { objectIDs: e6.objectIDs.slice(r5, r5 + t6) }));
            return n7;
          }(en(en({}, r4), {}, { objectIDs: (null == n6 ? void 0 : n6.map(function(e6) {
            return e6.objectID;
          })) || r4.objectIDs })).map(function(e6) {
            return { items: n6, payload: e6 };
          })));
        }, []).forEach(function(e5) {
          var t5 = e5.items;
          return i3("viewedObjectIDs", [e5.payload], t5);
        });
      }, viewedFilters: function() {
        for (var t4 = arguments.length, n5 = new Array(t4), r4 = 0; r4 < t4; r4++) n5[r4] = arguments[r4];
        n5.length > 0 && e3.apply(void 0, ["viewedFilters"].concat(n5));
      } };
    }(u2), s3 = { current: [] }, f2 = qt(function(e3) {
      var t3 = e3.state;
      if (t3.isOpen) {
        var n4 = t3.collections.reduce(function(e4, t4) {
          return [].concat(cn(e4), cn(t4.items));
        }, []).filter(on);
        Bt(s3.current.map(function(e4) {
          return e4.objectID;
        }), n4.map(function(e4) {
          return e4.objectID;
        })) || (s3.current = n4, n4.length > 0 && vn({ onItemsChange: o2, items: n4, insights: l3, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
      var t3 = e3.setContext, n4 = e3.onSelect, r3 = e3.onActive;
      function o3(e4) {
        t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: sn(sn({}, c2 ? { clickAnalytics: true } : {}), e4 ? { userToken: yn(e4) } : {}), insights: l3 } });
      }
      u2("addAlgoliaAgent", "insights-plugin"), o3(), u2("onUserTokenChange", function(e4) {
        o3(e4);
      }), u2("getUserToken", null, function(e4, t4) {
        o3(t4);
      }), n4(function(e4) {
        var t4 = e4.item, n5 = e4.state, r4 = e4.event, o4 = e4.source;
        on(t4) && i2({ state: n5, event: r4, insights: l3, item: t4, insightsEvents: [sn({ eventName: "Item Selected" }, Wt({ item: t4, items: o4.getItems().filter(on) }))] });
      }), r3(function(e4) {
        var t4 = e4.item, n5 = e4.source, r4 = e4.state, o4 = e4.event;
        on(t4) && a2({ state: r4, event: o4, insights: l3, item: t4, insightsEvents: [sn({ eventName: "Item Active" }, Wt({ item: t4, items: n5.getItems().filter(on) }))] });
      });
    }, onStateChange: function(e3) {
      var t3 = e3.state;
      f2({ state: t3 });
    }, __autocomplete_pluginOptions: e2 };
  }
  function dn() {
    var e2, t2 = arguments.length > 1 ? arguments[1] : void 0;
    return [].concat(cn(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ["autocomplete-internal"], cn(null !== (e2 = t2.algoliaInsightsPlugin) && void 0 !== e2 && e2.__automaticInsights ? ["autocomplete-automatic"] : []));
  }
  function yn(e2) {
    return "number" == typeof e2 ? e2.toString() : e2;
  }
  function _n(e2, t2) {
    var n3 = t2;
    return { then: function(t3, r2) {
      return _n(e2.then(bn(t3, n3, e2), bn(r2, n3, e2)), n3);
    }, catch: function(t3) {
      return _n(e2.catch(bn(t3, n3, e2)), n3);
    }, finally: function(t3) {
      return t3 && n3.onCancelList.push(t3), _n(e2.finally(bn(t3 && function() {
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
  function gn(e2) {
    return _n(e2, { isCanceled: false, onCancelList: [] });
  }
  function bn(e2, t2, n3) {
    return e2 ? function(n4) {
      return t2.isCanceled ? n4 : e2(n4);
    } : n3;
  }
  function Sn(e2, t2, n3, r2) {
    if (!n3) return null;
    if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n3 + e2;
    var o2 = (null === t2 ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n3 ? null === r2 ? null : 0 : o2;
  }
  function On(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function wn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? On(Object(n3), true).forEach(function(t3) {
        En(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : On(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function En(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== jn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== jn(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === jn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function jn(e2) {
    return jn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, jn(e2);
  }
  function Pn(e2) {
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
    if (!t2) return null;
    var n3 = t2.items[function(e3) {
      for (var t3 = e3.state, n4 = e3.collection, r3 = false, o2 = 0, i2 = 0; false === r3; ) {
        var a2 = t3.collections[o2];
        if (a2 === n4) {
          r3 = true;
          break;
        }
        i2 += a2.items.length, o2++;
      }
      return t3.activeItemId - i2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n3, itemInputValue: r2.getItemInputValue({ item: n3, state: e2 }), itemUrl: r2.getItemUrl({ item: n3, state: e2 }), source: r2 };
  }
  function In(e2, t2, n3) {
    return [e2, null == n3 ? void 0 : n3.sourceId, t2].filter(Boolean).join("-").replace(/\s/g, "");
  }
  var kn = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function Dn(e2) {
    return e2.nativeEvent || e2;
  }
  function Cn(e2) {
    return Cn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Cn(e2);
  }
  function xn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function An(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Cn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== Cn(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Cn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Nn(e2) {
    return Nn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Nn(e2);
  }
  function Tn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Rn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Tn(Object(n3), true).forEach(function(t3) {
        Ln(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Tn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Ln(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Nn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== Nn(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Nn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function qn(e2) {
    return qn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, qn(e2);
  }
  function Mn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++) r2[n3] = e2[n3];
    return r2;
  }
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
      var t3 = function(e4) {
        if ("object" !== qn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== qn(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === qn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Bn(e2) {
    return Bn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Bn(e2);
  }
  function Vn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Kn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Vn(Object(n3), true).forEach(function(t3) {
        Wn(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Vn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Wn(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Bn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== Bn(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Bn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function zn(e2) {
    return zn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, zn(e2);
  }
  function Jn(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Qn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Jn(Object(n3), true).forEach(function(t3) {
        $n(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Jn(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function $n(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== zn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== zn(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === zn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Zn(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return Gn(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return Gn(e3, t2);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? Gn(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Gn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n3 = 0, r2 = new Array(t2); n3 < t2; n3++) r2[n3] = e2[n3];
    return r2;
  }
  function Yn(e2) {
    return Boolean(e2.execute);
  }
  function Xn(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!Yn(t3)) return e3.push(t3), e3;
      var n3 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, a2 = e3.find(function(e4) {
        return Yn(t3) && Yn(e4) && e4.searchClient === n3 && Boolean(o2) && e4.requesterId === o2;
      });
      if (a2) {
        var c2;
        (c2 = a2.items).push.apply(c2, Zn(i2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n3 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!Yn(e3)) return Promise.resolve(e3);
      var t3 = e3, n3 = t3.execute, r2 = t3.items;
      return n3({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return Mt(e3);
    });
  }
  function er(e2) {
    return er = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, er(e2);
  }
  var tr = ["event", "nextState", "props", "query", "refresh", "store"];
  function nr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function rr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? nr(Object(n3), true).forEach(function(t3) {
        or(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : nr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function or(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== er(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== er(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === er(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  var ir;
  var ar;
  var cr;
  var ur = null;
  var lr = (ir = -1, ar = -1, cr = void 0, function(e2) {
    var t2 = ++ir;
    return Promise.resolve(e2).then(function(e3) {
      return cr && t2 < ar ? cr : (ar = t2, cr = e3, e3);
    });
  });
  function sr(e2) {
    var t2 = e2.event, n3 = e2.nextState, r2 = void 0 === n3 ? {} : n3, o2 = e2.props, i2 = e2.query, a2 = e2.refresh, c2 = e2.store, u2 = function(e3, t3) {
      if (null == e3) return {};
      var n4, r3, o3 = function(e4, t4) {
        if (null == e4) return {};
        var n5, r4, o4 = {}, i4 = Object.keys(e4);
        for (r4 = 0; r4 < i4.length; r4++) n5 = i4[r4], t4.indexOf(n5) >= 0 || (o4[n5] = e4[n5]);
        return o4;
      }(e3, t3);
      if (Object.getOwnPropertySymbols) {
        var i3 = Object.getOwnPropertySymbols(e3);
        for (r3 = 0; r3 < i3.length; r3++) n4 = i3[r3], t3.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n4) && (o3[n4] = e3[n4]);
      }
      return o3;
    }(e2, tr);
    ur && o2.environment.clearTimeout(ur);
    var l3 = u2.setCollections, s3 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus, v2 = u2.setContext;
    if (f2(i2), p2(o2.defaultActiveItemId), !i2 && false === o2.openOnFocus) {
      var h2, d2 = c2.getState().collections.map(function(e3) {
        return rr(rr({}, e3), {}, { items: [] });
      });
      m2("idle"), l3(d2), s3(null !== (h2 = r2.isOpen) && void 0 !== h2 ? h2 : o2.shouldPanelOpen({ state: c2.getState() }));
      var y2 = gn(lr(d2).then(function() {
        return Promise.resolve();
      }));
      return c2.pendingRequests.add(y2);
    }
    m2("loading"), ur = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var _2 = gn(lr(o2.getSources(rr({ query: i2, refresh: a2, state: c2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems(rr({ query: i2, refresh: a2, state: c2.getState() }, u2))).then(function(t3) {
          return function(e5, t4, n4) {
            if (o3 = e5, Boolean(null == o3 ? void 0 : o3.execute)) {
              var r3 = "algolia" === e5.requesterId ? Object.assign.apply(Object, [{}].concat(Zn(Object.keys(n4.context).map(function(e6) {
                var t5;
                return null === (t5 = n4.context[e6]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
              })))) : {};
              return Qn(Qn({}, e5), {}, { requests: e5.queries.map(function(n5) {
                return { query: "algolia" === e5.requesterId ? Qn(Qn({}, n5), {}, { params: Qn(Qn({}, r3), n5.params) }) : n5, sourceId: t4, transformResponse: e5.transformResponse };
              }) });
            }
            var o3;
            return { items: e5, sourceId: t4 };
          }(t3, e4.sourceId, c2.getState());
        });
      })).then(Xn).then(function(t3) {
        var n4, r3 = t3.some(function(e4) {
          return function(e5) {
            return !Array.isArray(e5) && Boolean(null == e5 ? void 0 : e5._automaticInsights);
          }(e4.items);
        });
        return r3 && v2({ algoliaInsightsPlugin: rr(rr({}, (null === (n4 = c2.getState().context) || void 0 === n4 ? void 0 : n4.algoliaInsightsPlugin) || {}), {}, { __automaticInsights: r3 }) }), function(e4, t4, n5) {
          return t4.map(function(t5) {
            var r4, o3 = e4.filter(function(e5) {
              return e5.sourceId === t5.sourceId;
            }), i3 = o3.map(function(e5) {
              return e5.items;
            }), a3 = o3[0].transformResponse, c3 = a3 ? a3({ results: r4 = i3, hits: r4.map(function(e5) {
              return e5.hits;
            }).filter(Boolean), facetHits: r4.map(function(e5) {
              var t6;
              return null === (t6 = e5.facetHits) || void 0 === t6 ? void 0 : t6.map(function(e6) {
                return { label: e6.value, count: e6.count, _highlightResult: { label: { value: e6.highlighted } } };
              });
            }).filter(Boolean) }) : i3;
            return t5.onResolve({ source: t5, results: i3, items: c3, state: n5.getState() }), c3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: c3 };
          });
        }(t3, e3, c2);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.props, n4 = e5.state, r3 = e5.collections.reduce(function(e6, t4) {
            return Kn(Kn({}, e6), {}, Wn({}, t4.source.sourceId, Kn(Kn({}, t4.source), {}, { getItems: function() {
              return Mt(t4.items);
            } })));
          }, {}), o3 = t3.plugins.reduce(function(e6, t4) {
            return t4.reshape ? t4.reshape(e6) : e6;
          }, { sourcesBySourceId: r3, state: n4 }).sourcesBySourceId;
          return Mt(t3.reshape({ sourcesBySourceId: o3, sources: Object.values(o3), state: n4 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: c2.getState() });
      });
    }))).then(function(e3) {
      var n4;
      m2("idle"), l3(e3);
      var f3 = o2.shouldPanelOpen({ state: c2.getState() });
      s3(null !== (n4 = r2.isOpen) && void 0 !== n4 ? n4 : o2.openOnFocus && !i2 && f3 || f3);
      var p3 = Pn(c2.getState());
      if (null !== c2.getState().activeItemId && p3) {
        var v3 = p3.item, h3 = p3.itemInputValue, d3 = p3.itemUrl, y3 = p3.source;
        y3.onActive(rr({ event: t2, item: v3, itemInputValue: h3, itemUrl: d3, refresh: a2, source: y3, state: c2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), ur && o2.environment.clearTimeout(ur);
    });
    return c2.pendingRequests.add(_2);
  }
  function fr(e2) {
    return fr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, fr(e2);
  }
  var pr = ["event", "props", "refresh", "store"];
  function mr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function vr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? mr(Object(n3), true).forEach(function(t3) {
        hr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : mr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function hr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== fr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== fr(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === fr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function dr(e2) {
    return dr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, dr(e2);
  }
  var yr = ["props", "refresh", "store"];
  var _r = ["inputElement", "formElement", "panelElement"];
  var gr = ["inputElement"];
  var br = ["inputElement", "maxLength"];
  var Sr = ["source"];
  var Or = ["item", "source"];
  function wr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Er(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? wr(Object(n3), true).forEach(function(t3) {
        jr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : wr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function jr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== dr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== dr(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === dr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Pr(e2, t2) {
    if (null == e2) return {};
    var n3, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n4, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n4 = i3[r3], t3.indexOf(n4) >= 0 || (o3[n4] = e3[n4]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n3 = i2[r2], t2.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n3) && (o2[n3] = e2[n3]);
    }
    return o2;
  }
  function Ir(e2) {
    return Ir = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Ir(e2);
  }
  function kr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Dr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? kr(Object(n3), true).forEach(function(t3) {
        Cr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : kr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Cr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Ir(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== Ir(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Ir(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function xr(e2) {
    var t2, n3, r2, o2, i2 = e2.plugins, a2 = e2.options, c2 = null === (t2 = ((null === (n3 = a2.__autocomplete_metadata) || void 0 === n3 ? void 0 : n3.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = c2 ? Cr({}, c2, Object.keys((null === (r2 = a2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: i2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: Dr({ "autocomplete-core": Object.keys(a2) }, u2), ua: Kt.concat((null === (o2 = a2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
  }
  function Ar(e2) {
    var t2, n3 = e2.state;
    return false === n3.isOpen || null === n3.activeItemId ? null : (null === (t2 = Pn(n3)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function Nr(e2) {
    return Nr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Nr(e2);
  }
  function Tr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Rr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Tr(Object(n3), true).forEach(function(t3) {
        Lr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Tr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Lr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Nr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== Nr(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Nr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  var qr = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return Rr(Rr({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return Rr(Rr({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return Rr(Rr({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return Rr(Rr({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return Rr(Rr({}, e2), {}, { status: t2.payload });
      case "setContext":
        return Rr(Rr({}, e2), {}, { context: Rr(Rr({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n3 = Rr(Rr({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : Sn(1, e2.activeItemId, Ut(e2), t2.props.defaultActiveItemId) });
        return Rr(Rr({}, n3), {}, { completion: Ar({ state: n3 }) });
      case "ArrowUp":
        var r2 = Rr(Rr({}, e2), {}, { activeItemId: Sn(-1, e2.activeItemId, Ut(e2), t2.props.defaultActiveItemId) });
        return Rr(Rr({}, r2), {}, { completion: Ar({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? Rr(Rr({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : Rr(Rr({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return Rr(Rr({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return Rr(Rr({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", completion: null, query: "" });
      case "focus":
        return Rr(Rr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : Rr(Rr({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return Rr(Rr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e2;
    }
  };
  function Mr(e2) {
    return Mr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Mr(e2);
  }
  function Hr(e2, t2) {
    var n3 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n3.push.apply(n3, r2);
    }
    return n3;
  }
  function Ur(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Hr(Object(n3), true).forEach(function(t3) {
        Fr(e2, t3, n3[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n3)) : Hr(Object(n3)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n3, t3));
      });
    }
    return e2;
  }
  function Fr(e2, t2, n3) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Mr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n4 = t4.call(e4, "string");
          if ("object" !== Mr(n4)) return n4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Mr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
  }
  function Br(e2) {
    var t2 = [], n3 = function(e3, t3) {
      var n4, r3 = "undefined" != typeof window ? window : {}, o3 = e3.plugins || [];
      return Un(Un({ debug: false, openOnFocus: false, enterKeyHint: void 0, ignoreCompositionEvents: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: void 0, environment: r3, shouldPanelOpen: function(e4) {
        return Ut(e4.state) > 0;
      }, reshape: function(e4) {
        return e4.sources;
      } }, e3), {}, { id: null !== (n4 = e3.id) && void 0 !== n4 ? n4 : "autocomplete-".concat(Ht++), plugins: o3, initialState: Un({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
        var n5;
        null === (n5 = e3.onStateChange) || void 0 === n5 || n5.call(e3, t4), o3.forEach(function(e4) {
          var n6;
          return null === (n6 = e4.onStateChange) || void 0 === n6 ? void 0 : n6.call(e4, t4);
        });
      }, onSubmit: function(t4) {
        var n5;
        null === (n5 = e3.onSubmit) || void 0 === n5 || n5.call(e3, t4), o3.forEach(function(e4) {
          var n6;
          return null === (n6 = e4.onSubmit) || void 0 === n6 ? void 0 : n6.call(e4, t4);
        });
      }, onReset: function(t4) {
        var n5;
        null === (n5 = e3.onReset) || void 0 === n5 || n5.call(e3, t4), o3.forEach(function(e4) {
          var n6;
          return null === (n6 = e4.onReset) || void 0 === n6 ? void 0 : n6.call(e4, t4);
        });
      }, getSources: function(n5) {
        return Promise.all([].concat(function(e4) {
          return function(e5) {
            if (Array.isArray(e5)) return Mn(e5);
          }(e4) || function(e5) {
            if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
          }(e4) || function(e5, t4) {
            if (e5) {
              if ("string" == typeof e5) return Mn(e5, t4);
              var n6 = Object.prototype.toString.call(e5).slice(8, -1);
              return "Object" === n6 && e5.constructor && (n6 = e5.constructor.name), "Map" === n6 || "Set" === n6 ? Array.from(e5) : "Arguments" === n6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6) ? Mn(e5, t4) : void 0;
            }
          }(e4) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(o3.map(function(e4) {
          return e4.getSources;
        })), [e3.getSources]).filter(Boolean).map(function(e4) {
          return function(e5, t4) {
            var n6 = [];
            return Promise.resolve(e5(t4)).then(function(e6) {
              return Promise.all(e6.filter(function(e7) {
                return Boolean(e7);
              }).map(function(e7) {
                if (e7.sourceId, n6.includes(e7.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e7.sourceId), " is not unique."));
                n6.push(e7.sourceId);
                var t5 = { getItemInputValue: function(e8) {
                  return e8.state.query;
                }, getItemUrl: function() {
                }, onSelect: function(e8) {
                  (0, e8.setIsOpen)(false);
                }, onActive: Vt, onResolve: Vt };
                Object.keys(t5).forEach(function(e8) {
                  t5[e8].__default = true;
                });
                var r4 = wn(wn({}, t5), e7);
                return Promise.resolve(r4);
              }));
            });
          }(e4, n5);
        })).then(function(e4) {
          return Mt(e4);
        }).then(function(e4) {
          return e4.map(function(e5) {
            return Un(Un({}, e5), {}, { onSelect: function(n6) {
              e5.onSelect(n6), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onSelect) || void 0 === t4 ? void 0 : t4.call(e6, n6);
              });
            }, onActive: function(n6) {
              e5.onActive(n6), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onActive) || void 0 === t4 ? void 0 : t4.call(e6, n6);
              });
            }, onResolve: function(n6) {
              e5.onResolve(n6), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onResolve) || void 0 === t4 ? void 0 : t4.call(e6, n6);
              });
            } });
          });
        });
      }, navigator: Un({ navigate: function(e4) {
        var t4 = e4.itemUrl;
        r3.location.assign(t4);
      }, navigateNewTab: function(e4) {
        var t4 = e4.itemUrl, n5 = r3.open(t4, "_blank", "noopener");
        null == n5 || n5.focus();
      }, navigateNewWindow: function(e4) {
        var t4 = e4.itemUrl;
        r3.open(t4, "_blank", "noopener");
      } }, e3.navigator) });
    }(e2, t2), r2 = function(e3, t3, n4) {
      var r3, o3 = t3.initialState;
      return { getState: function() {
        return o3;
      }, dispatch: function(r4, i3) {
        var a3 = function(e4) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n5 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? xn(Object(n5), true).forEach(function(t5) {
              An(e4, t5, n5[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n5)) : xn(Object(n5)).forEach(function(t5) {
              Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(n5, t5));
            });
          }
          return e4;
        }({}, o3);
        o3 = e3(o3, { type: r4, props: t3, payload: i3 }), n4({ state: o3, prevState: a3 });
      }, pendingRequests: (r3 = [], { add: function(e4) {
        return r3.push(e4), e4.finally(function() {
          r3 = r3.filter(function(t4) {
            return t4 !== e4;
          });
        });
      }, cancelAll: function() {
        r3.forEach(function(e4) {
          return e4.cancel();
        });
      }, isEmpty: function() {
        return 0 === r3.length;
      } }) };
    }(qr, n3, function(e3) {
      var t3, r3, i3 = e3.prevState, l4 = e3.state;
      if (n3.onStateChange(Ur({ prevState: i3, state: l4, refresh: a2, navigator: n3.navigator }, o2)), !u2() && null !== (t3 = l4.context) && void 0 !== t3 && null !== (r3 = t3.algoliaInsightsPlugin) && void 0 !== r3 && r3.__automaticInsights && false !== n3.insights) {
        var s3 = hn({ __autocomplete_clickAnalytics: false });
        n3.plugins.push(s3), c2([s3]);
      }
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n4 = 0, r3 = e4.map(function(e5) {
          return Rn(Rn({}, e5), {}, { items: Mt(e5.items).map(function(e6) {
            return Rn(Rn({}, e6), {}, { __autocomplete_id: n4++ });
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
    }({ store: r2 }), i2 = function(e3) {
      var t3 = e3.props, n4 = e3.refresh, r3 = e3.store, o3 = Pr(e3, yr);
      return { getEnvironmentProps: function(e4) {
        var n5 = e4.inputElement, o4 = e4.formElement, i3 = e4.panelElement;
        function a3(e5) {
          !r3.getState().isOpen && r3.pendingRequests.isEmpty() || e5.target === n5 || false === [o4, i3].some(function(t4) {
            return (n6 = t4) === (r4 = e5.target) || n6.contains(r4);
            var n6, r4;
          }) && (r3.dispatch("blur", null), t3.debug || r3.pendingRequests.cancelAll());
        }
        return Er({ onTouchStart: a3, onMouseDown: a3, onTouchMove: function(e5) {
          false !== r3.getState().isOpen && n5 === t3.environment.document.activeElement && e5.target !== n5 && n5.blur();
        } }, Pr(e4, _r));
      }, getRootProps: function(e4) {
        return Er({ role: "combobox", "aria-expanded": r3.getState().isOpen, "aria-haspopup": "listbox", "aria-controls": r3.getState().isOpen ? r3.getState().collections.map(function(e5) {
          var n5 = e5.source;
          return In(t3.id, "list", n5);
        }).join(" ") : void 0, "aria-labelledby": In(t3.id, "label") }, e4);
      }, getFormProps: function(e4) {
        return e4.inputElement, Er({ action: "", noValidate: true, role: "search", onSubmit: function(i3) {
          var a3;
          i3.preventDefault(), t3.onSubmit(Er({ event: i3, refresh: n4, state: r3.getState() }, o3)), r3.dispatch("submit", null), null === (a3 = e4.inputElement) || void 0 === a3 || a3.blur();
        }, onReset: function(i3) {
          var a3;
          i3.preventDefault(), t3.onReset(Er({ event: i3, refresh: n4, state: r3.getState() }, o3)), r3.dispatch("reset", null), null === (a3 = e4.inputElement) || void 0 === a3 || a3.focus();
        } }, Pr(e4, gr));
      }, getLabelProps: function(e4) {
        return Er({ htmlFor: In(t3.id, "input"), id: In(t3.id, "label") }, e4);
      }, getInputProps: function(e4) {
        var i3;
        function a3(e5) {
          (t3.openOnFocus || Boolean(r3.getState().query)) && sr(Er({ event: e5, props: t3, query: r3.getState().completion || r3.getState().query, refresh: n4, store: r3 }, o3)), r3.dispatch("focus", null);
        }
        var c3 = e4 || {};
        c3.inputElement;
        var u3 = c3.maxLength, l4 = void 0 === u3 ? 512 : u3, s3 = Pr(c3, br), f2 = Pn(r3.getState()), p2 = function(e5) {
          return Boolean(e5 && e5.match(kn));
        }((null === (i3 = t3.environment.navigator) || void 0 === i3 ? void 0 : i3.userAgent) || ""), m2 = t3.enterKeyHint || (null != f2 && f2.itemUrl && !p2 ? "go" : "search");
        return Er({ "aria-autocomplete": "both", "aria-activedescendant": r3.getState().isOpen && null !== r3.getState().activeItemId ? In(t3.id, "item-".concat(r3.getState().activeItemId), null == f2 ? void 0 : f2.source) : void 0, "aria-controls": r3.getState().isOpen ? r3.getState().collections.map(function(e5) {
          var n5 = e5.source;
          return In(t3.id, "list", n5);
        }).join(" ") : void 0, "aria-labelledby": In(t3.id, "label"), value: r3.getState().completion || r3.getState().query, id: In(t3.id, "input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t3.autoFocus, placeholder: t3.placeholder, maxLength: l4, type: "search", onChange: function(e5) {
          var i4 = e5.currentTarget.value;
          t3.ignoreCompositionEvents && Dn(e5).isComposing ? o3.setQuery(i4) : sr(Er({ event: e5, props: t3, query: i4.slice(0, l4), refresh: n4, store: r3 }, o3));
        }, onCompositionEnd: function(e5) {
          sr(Er({ event: e5, props: t3, query: e5.currentTarget.value.slice(0, l4), refresh: n4, store: r3 }, o3));
        }, onKeyDown: function(e5) {
          Dn(e5).isComposing || function(e6) {
            var t4 = e6.event, n5 = e6.props, r4 = e6.refresh, o4 = e6.store, i4 = function(e7, t5) {
              if (null == e7) return {};
              var n6, r5, o5 = function(e8, t6) {
                if (null == e8) return {};
                var n7, r6, o6 = {}, i6 = Object.keys(e8);
                for (r6 = 0; r6 < i6.length; r6++) n7 = i6[r6], t6.indexOf(n7) >= 0 || (o6[n7] = e8[n7]);
                return o6;
              }(e7, t5);
              if (Object.getOwnPropertySymbols) {
                var i5 = Object.getOwnPropertySymbols(e7);
                for (r5 = 0; r5 < i5.length; r5++) n6 = i5[r5], t5.indexOf(n6) >= 0 || Object.prototype.propertyIsEnumerable.call(e7, n6) && (o5[n6] = e7[n6]);
              }
              return o5;
            }(e6, pr);
            if ("ArrowUp" === t4.key || "ArrowDown" === t4.key) {
              var a4 = function() {
                var e7 = Pn(o4.getState()), t5 = n5.environment.document.getElementById(In(n5.id, "item-".concat(o4.getState().activeItemId), null == e7 ? void 0 : e7.source));
                t5 && (t5.scrollIntoViewIfNeeded ? t5.scrollIntoViewIfNeeded(false) : t5.scrollIntoView(false));
              }, c4 = function() {
                var e7 = Pn(o4.getState());
                if (null !== o4.getState().activeItemId && e7) {
                  var n6 = e7.item, a5 = e7.itemInputValue, c5 = e7.itemUrl, u5 = e7.source;
                  u5.onActive(vr({ event: t4, item: n6, itemInputValue: a5, itemUrl: c5, refresh: r4, source: u5, state: o4.getState() }, i4));
                }
              };
              t4.preventDefault(), false === o4.getState().isOpen && (n5.openOnFocus || Boolean(o4.getState().query)) ? sr(vr({ event: t4, props: n5, query: o4.getState().query, refresh: r4, store: o4 }, i4)).then(function() {
                o4.dispatch(t4.key, { nextActiveItemId: n5.defaultActiveItemId }), c4(), setTimeout(a4, 0);
              }) : (o4.dispatch(t4.key, {}), c4(), a4());
            } else if ("Escape" === t4.key) t4.preventDefault(), o4.dispatch(t4.key, null), o4.pendingRequests.cancelAll();
            else if ("Tab" === t4.key) o4.dispatch("blur", null), o4.pendingRequests.cancelAll();
            else if ("Enter" === t4.key) {
              if (null === o4.getState().activeItemId || o4.getState().collections.every(function(e7) {
                return 0 === e7.items.length;
              })) return void (n5.debug || o4.pendingRequests.cancelAll());
              t4.preventDefault();
              var u4 = Pn(o4.getState()), l5 = u4.item, s4 = u4.itemInputValue, f3 = u4.itemUrl, p3 = u4.source;
              if (t4.metaKey || t4.ctrlKey) void 0 !== f3 && (p3.onSelect(vr({ event: t4, item: l5, itemInputValue: s4, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4)), n5.navigator.navigateNewTab({ itemUrl: f3, item: l5, state: o4.getState() }));
              else if (t4.shiftKey) void 0 !== f3 && (p3.onSelect(vr({ event: t4, item: l5, itemInputValue: s4, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4)), n5.navigator.navigateNewWindow({ itemUrl: f3, item: l5, state: o4.getState() }));
              else if (t4.altKey) ;
              else {
                if (void 0 !== f3) return p3.onSelect(vr({ event: t4, item: l5, itemInputValue: s4, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4)), void n5.navigator.navigate({ itemUrl: f3, item: l5, state: o4.getState() });
                sr(vr({ event: t4, nextState: { isOpen: false }, props: n5, query: s4, refresh: r4, store: o4 }, i4)).then(function() {
                  p3.onSelect(vr({ event: t4, item: l5, itemInputValue: s4, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4));
                });
              }
            }
          }(Er({ event: e5, props: t3, refresh: n4, store: r3 }, o3));
        }, onFocus: a3, onBlur: Vt, onClick: function(n5) {
          e4.inputElement !== t3.environment.document.activeElement || r3.getState().isOpen || a3(n5);
        } }, s3);
      }, getPanelProps: function(e4) {
        return Er({ onMouseDown: function(e5) {
          e5.preventDefault();
        }, onMouseLeave: function() {
          r3.dispatch("mouseleave", null);
        } }, e4);
      }, getListProps: function(e4) {
        var n5 = e4 || {}, r4 = n5.source, o4 = Pr(n5, Sr);
        return Er({ role: "listbox", "aria-labelledby": In(t3.id, "label"), id: In(t3.id, "list", r4) }, o4);
      }, getItemProps: function(e4) {
        var i3 = e4.item, a3 = e4.source, c3 = Pr(e4, Or);
        return Er({ id: In(t3.id, "item-".concat(i3.__autocomplete_id), a3), role: "option", "aria-selected": r3.getState().activeItemId === i3.__autocomplete_id, onMouseMove: function(e5) {
          if (i3.__autocomplete_id !== r3.getState().activeItemId) {
            r3.dispatch("mousemove", i3.__autocomplete_id);
            var t4 = Pn(r3.getState());
            if (null !== r3.getState().activeItemId && t4) {
              var a4 = t4.item, c4 = t4.itemInputValue, u3 = t4.itemUrl, l4 = t4.source;
              l4.onActive(Er({ event: e5, item: a4, itemInputValue: c4, itemUrl: u3, refresh: n4, source: l4, state: r3.getState() }, o3));
            }
          }
        }, onMouseDown: function(e5) {
          e5.preventDefault();
        }, onClick: function(e5) {
          var c4 = a3.getItemInputValue({ item: i3, state: r3.getState() }), u3 = a3.getItemUrl({ item: i3, state: r3.getState() });
          (u3 ? Promise.resolve() : sr(Er({ event: e5, nextState: { isOpen: false }, props: t3, query: c4, refresh: n4, store: r3 }, o3))).then(function() {
            a3.onSelect(Er({ event: e5, item: i3, itemInputValue: c4, itemUrl: u3, refresh: n4, source: a3, state: r3.getState() }, o3));
          });
        } }, c3);
      } };
    }(Ur({ props: n3, refresh: a2, store: r2, navigator: n3.navigator }, o2));
    function a2() {
      return sr(Ur({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n3, navigator: n3.navigator, query: r2.getState().query, refresh: a2, store: r2 }, o2));
    }
    function c2(e3) {
      e3.forEach(function(e4) {
        var r3;
        return null === (r3 = e4.subscribe) || void 0 === r3 ? void 0 : r3.call(e4, Ur(Ur({}, o2), {}, { navigator: n3.navigator, refresh: a2, onSelect: function(e5) {
          t2.push({ onSelect: e5 });
        }, onActive: function(e5) {
          t2.push({ onActive: e5 });
        }, onResolve: function(e5) {
          t2.push({ onResolve: e5 });
        } }));
      });
    }
    function u2() {
      return n3.plugins.some(function(e3) {
        return "aa.algoliaInsightsPlugin" === e3.name;
      });
    }
    if (n3.insights && !u2()) {
      var l3 = "boolean" == typeof n3.insights ? {} : n3.insights;
      n3.plugins.push(hn(l3));
    }
    return c2(n3.plugins), function(e3) {
      var t3, n4, r3 = e3.metadata, o3 = e3.environment;
      if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n4 = t3.userAgent) || void 0 === n4 ? void 0 : n4.includes("Algolia Crawler")) {
        var i3 = o3.document.createElement("meta"), a3 = o3.document.querySelector("head");
        i3.name = "algolia:metadata", setTimeout(function() {
          i3.content = JSON.stringify(r3), a3.appendChild(i3);
        }, 0);
      }
    }({ metadata: xr({ plugins: n3.plugins, options: e2 }), environment: n3.environment }), Ur(Ur({ refresh: a2, navigator: n3.navigator }, i2), o2);
  }
  function Vr(e2) {
    var t2 = e2.translations, n3 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n3 ? "Search by" : n3;
    return st.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, st.createElement("span", { className: "DocSearch-Label" }, r2), st.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, st.createElement("defs", null, st.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), st.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), st.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), st.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), st.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), st.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), st.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), st.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), st.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), st.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function Kr(e2) {
    return st.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, st.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function Wr(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = n3.selectText, o2 = void 0 === r2 ? "to select" : r2, i2 = n3.selectKeyAriaLabel, a2 = void 0 === i2 ? "Enter key" : i2, c2 = n3.navigateText, u2 = void 0 === c2 ? "to navigate" : c2, l3 = n3.navigateUpKeyAriaLabel, s3 = void 0 === l3 ? "Arrow up" : l3, f2 = n3.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n3.closeText, v2 = void 0 === m2 ? "to close" : m2, h2 = n3.closeKeyAriaLabel, d2 = void 0 === h2 ? "Escape key" : h2, y2 = n3.searchByText, _2 = void 0 === y2 ? "Search by" : y2;
    return st.createElement(st.Fragment, null, st.createElement("div", { className: "DocSearch-Logo" }, st.createElement(Vr, { translations: { searchByText: _2 } })), st.createElement("ul", { className: "DocSearch-Commands" }, st.createElement("li", null, st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: a2 }, st.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), st.createElement("span", { className: "DocSearch-Label" }, o2)), st.createElement("li", null, st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: p2 }, st.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: s3 }, st.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), st.createElement("span", { className: "DocSearch-Label" }, u2)), st.createElement("li", null, st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: d2 }, st.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), st.createElement("span", { className: "DocSearch-Label" }, v2))));
  }
  function zr(e2) {
    var t2 = e2.hit, n3 = e2.children;
    return st.createElement("a", { href: t2.url }, n3);
  }
  function Jr() {
    return st.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, st.createElement("g", { fill: "none", fillRule: "evenodd" }, st.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, st.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), st.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, st.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function Qr() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), st.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function $r() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Zr() {
    return st.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), st.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Gr = function() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function Yr(e2) {
    switch (e2.type) {
      case "lvl1":
        return st.createElement(Gr, null);
      case "content":
        return st.createElement(eo, null);
      default:
        return st.createElement(Xr, null);
    }
  }
  function Xr() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function eo() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function to() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function no() {
    return st.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function ro() {
    return st.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function oo(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = n3.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, i2 = n3.helpText, a2 = void 0 === i2 ? "You might want to check your network connection." : i2;
    return st.createElement("div", { className: "DocSearch-ErrorScreen" }, st.createElement("div", { className: "DocSearch-Screen-Icon" }, st.createElement(no, null)), st.createElement("p", { className: "DocSearch-Title" }, o2), st.createElement("p", { className: "DocSearch-Help" }, a2));
  }
  var io = ["translations"];
  function ao(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = Et(e2, io), o2 = n3.noResultsText, i2 = void 0 === o2 ? "No results for" : o2, a2 = n3.suggestedQueryText, c2 = void 0 === a2 ? "Try searching for" : a2, u2 = n3.reportMissingResultsText, l3 = void 0 === u2 ? "Believe this query should return results?" : u2, s3 = n3.reportMissingResultsLinkText, f2 = void 0 === s3 ? "Let us know." : s3, p2 = r2.state.context.searchSuggestions;
    return st.createElement("div", { className: "DocSearch-NoResults" }, st.createElement("div", { className: "DocSearch-Screen-Icon" }, st.createElement(ro, null)), st.createElement("p", { className: "DocSearch-Title" }, i2, ' "', st.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && st.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, st.createElement("p", { className: "DocSearch-Help" }, c2, ":"), st.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(kt(e3), [st.createElement("li", { key: t3 }, st.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && st.createElement("p", { className: "DocSearch-Help" }, "".concat(l3, " "), st.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var co = ["hit", "attribute", "tagName"];
  function uo(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return null != e3 && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function lo(e2) {
    var t2 = e2.hit, n3 = e2.attribute, r2 = e2.tagName;
    return b(void 0 === r2 ? "span" : r2, wt(wt({}, Et(e2, co)), {}, { dangerouslySetInnerHTML: { __html: uo(t2, "_snippetResult.".concat(n3, ".value")) || uo(t2, n3) } }));
  }
  function so(e2) {
    return e2.collection && 0 !== e2.collection.items.length ? st.createElement("section", { className: "DocSearch-Hits" }, st.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), st.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n3) {
      return st.createElement(fo, _t({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n3 }, e2));
    }))) : null;
  }
  function fo(e2) {
    var t2 = e2.item, n3 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, a2 = e2.onItemClick, c2 = e2.collection, u2 = e2.hitComponent, l3 = It(st.useState(false), 2), s3 = l3[0], f2 = l3[1], p2 = It(st.useState(false), 2), m2 = p2[0], v2 = p2[1], h2 = st.useRef(null), d2 = u2;
    return st.createElement("li", _t({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s3 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      h2.current && h2.current();
    } }, i2({ item: t2, source: c2.source, onClick: function(e3) {
      a2(t2, e3);
    } })), st.createElement(d2, { hit: t2 }, st.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n3 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && st.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, st.createElement(lo, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && st.createElement(lo, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && st.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, st.createElement(lo, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), st.createElement(lo, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && st.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, st.createElement(lo, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), st.createElement(lo, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), h2.current = e3;
    }, runFavoriteTransition: function(e3) {
      v2(true), h2.current = e3;
    } }))));
  }
  function po(e2, t2, n3) {
    return e2.reduce(function(e3, r2) {
      var o2 = t2(r2);
      return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n3 || 5) && e3[o2].push(r2), e3;
    }, {});
  }
  function mo(e2) {
    return e2;
  }
  function vo(e2) {
    return 1 === e2.button || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
  }
  function ho() {
  }
  var yo = /(<mark>|<\/mark>)/g;
  var _o = RegExp(yo.source);
  function go(e2) {
    var t2, n3, r2 = e2;
    if (!r2.__docsearch_parent && !e2._highlightResult) return e2.hierarchy.lvl0;
    var o2 = r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n3 = e2._highlightResult) || void 0 === n3 || null === (n3 = n3.hierarchy) || void 0 === n3 ? void 0 : n3.lvl0;
    return o2 ? o2.value && _o.test(o2.value) ? o2.value.replace(yo, "") : o2.value : e2.hierarchy.lvl0;
  }
  function bo(e2) {
    return st.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (0 === t2.items.length) return null;
      var n3 = go(t2.items[0]);
      return st.createElement(so, _t({}, e2, { key: t2.source.sourceId, title: n3, collection: t2, renderIcon: function(e3) {
        var n4, r2 = e3.item, o2 = e3.index;
        return st.createElement(st.Fragment, null, r2.__docsearch_parent && st.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, st.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n4 = t2.items[o2 + 1]) || void 0 === n4 ? void 0 : n4.__docsearch_parent) ? st.createElement("path", { d: "M8 6v21M20 27H8.3" }) : st.createElement("path", { d: "M8 6v42M20 27H8.3" }))), st.createElement("div", { className: "DocSearch-Hit-icon" }, st.createElement(Yr, { type: r2.type })));
      }, renderAction: function() {
        return st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement(Zr, null));
      } }));
    }), e2.resultsFooterComponent && st.createElement("section", { className: "DocSearch-HitsFooter" }, st.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var So = ["translations"];
  function Oo(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = Et(e2, So), o2 = n3.recentSearchesTitle, i2 = void 0 === o2 ? "Recent" : o2, a2 = n3.noRecentSearchesText, c2 = void 0 === a2 ? "No recent searches" : a2, u2 = n3.saveRecentSearchButtonTitle, l3 = void 0 === u2 ? "Save this search" : u2, s3 = n3.removeRecentSearchButtonTitle, f2 = void 0 === s3 ? "Remove this search from history" : s3, p2 = n3.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, v2 = n3.removeFavoriteSearchButtonTitle, h2 = void 0 === v2 ? "Remove this search from favorites" : v2;
    return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : st.createElement("div", { className: "DocSearch-StartScreen" }, st.createElement("p", { className: "DocSearch-Help" }, c2)) : false === r2.hasCollections ? null : st.createElement("div", { className: "DocSearch-Dropdown-Container" }, st.createElement(so, _t({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
      return st.createElement("div", { className: "DocSearch-Hit-icon" }, st.createElement(Qr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n4 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return st.createElement(st.Fragment, null, st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement("button", { className: "DocSearch-Hit-action-button", title: l3, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n4(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, st.createElement(to, null))), st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, st.createElement($r, null))));
    } })), st.createElement(so, _t({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return st.createElement("div", { className: "DocSearch-Hit-icon" }, st.createElement(to, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n4 = e3.runDeleteTransition;
      return st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement("button", { className: "DocSearch-Hit-action-button", title: h2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n4(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, st.createElement($r, null)));
    } })));
  }
  var wo = ["translations"];
  var Eo = st.memo(function(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = Et(e2, wo);
    if ("error" === r2.state.status) return st.createElement(oo, { translations: null == n3 ? void 0 : n3.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? false === o2 ? st.createElement(ao, _t({}, r2, { translations: null == n3 ? void 0 : n3.noResultsScreen })) : st.createElement(bo, r2) : st.createElement(Oo, _t({}, r2, { hasCollections: o2, translations: null == n3 ? void 0 : n3.startScreen }));
  }, function(e2, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  var jo = ["translations"];
  function Po(e2) {
    var t2 = e2.translations, n3 = void 0 === t2 ? {} : t2, r2 = Et(e2, jo), o2 = n3.resetButtonTitle, i2 = void 0 === o2 ? "Clear the query" : o2, a2 = n3.resetButtonAriaLabel, c2 = void 0 === a2 ? "Clear the query" : a2, u2 = n3.cancelButtonText, l3 = void 0 === u2 ? "Cancel" : u2, s3 = n3.cancelButtonAriaLabel, f2 = void 0 === s3 ? "Cancel" : s3, p2 = n3.searchInputLabel, m2 = void 0 === p2 ? "Search" : p2, v2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return st.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), st.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), st.createElement(st.Fragment, null, st.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: v2 }, st.createElement("label", _t({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), st.createElement(At, null), st.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2)), st.createElement("div", { className: "DocSearch-LoadingIndicator" }, st.createElement(Jr, null)), st.createElement("input", _t({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), st.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": c2, hidden: !r2.state.query }, st.createElement($r, null))), st.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l3));
  }
  var Io = ["_highlightResult", "_snippetResult"];
  function ko(e2) {
    var t2 = e2.key, n3 = e2.limit, r2 = void 0 === n3 ? 5 : n3, o2 = function(e3) {
      return false === function() {
        var e4 = "__TEST_KEY__";
        try {
          return localStorage.setItem(e4, ""), localStorage.removeItem(e4), true;
        } catch (e5) {
          return false;
        }
      }() ? { setItem: function() {
      }, getItem: function() {
        return [];
      } } : { setItem: function(t3) {
        return window.localStorage.setItem(e3, JSON.stringify(t3));
      }, getItem: function() {
        var t3 = window.localStorage.getItem(e3);
        return t3 ? JSON.parse(t3) : [];
      } };
    }(t2), i2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3;
      t3._highlightResult, t3._snippetResult;
      var n4 = Et(t3, Io), a2 = i2.findIndex(function(e4) {
        return e4.objectID === n4.objectID;
      });
      a2 > -1 && i2.splice(a2, 1), i2.unshift(n4), i2 = i2.slice(0, r2), o2.setItem(i2);
    }, remove: function(e3) {
      i2 = i2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(i2);
    }, getAll: function() {
      return i2;
    } };
  }
  function Do(e2) {
    var t2, n3 = "algolia-client-js-".concat(e2.key);
    function r2() {
      return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
    }
    function o2() {
      return JSON.parse(r2().getItem(n3) || "{}");
    }
    function i2(e3) {
      r2().setItem(n3, JSON.stringify(e3));
    }
    return { get: function(t3, n4) {
      var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        var n5, r4, a2;
        return n5 = e2.timeToLive ? 1e3 * e2.timeToLive : null, r4 = o2(), i2(a2 = Object.fromEntries(Object.entries(r4).filter(function(e3) {
          return void 0 !== It(e3, 2)[1].timestamp;
        }))), n5 && i2(Object.fromEntries(Object.entries(a2).filter(function(e3) {
          var t4 = It(e3, 2)[1], r5 = (/* @__PURE__ */ new Date()).getTime();
          return !(t4.timestamp + n5 < r5);
        }))), o2()[JSON.stringify(t3)];
      }).then(function(e3) {
        return Promise.all([e3 ? e3.value : n4(), void 0 !== e3]);
      }).then(function(e3) {
        var t4 = It(e3, 2), n5 = t4[0], o3 = t4[1];
        return Promise.all([n5, o3 || r3.miss(n5)]);
      }).then(function(e3) {
        return It(e3, 1)[0];
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
  function Co(e2) {
    var t2 = kt(e2.caches), n3 = t2.shift();
    return void 0 === n3 ? { get: function(e3, t3) {
      var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n4.miss(e4)]);
      }).then(function(e4) {
        return It(e4, 1)[0];
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
        return Co({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n3.set(e3, r2).catch(function() {
        return Co({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n3.delete(e3).catch(function() {
        return Co({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n3.clear().catch(function() {
        return Co({ caches: t2 }).clear();
      });
    } };
  }
  function xo() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n3, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, i2 = JSON.stringify(n3);
      if (i2 in t2) return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      var a2 = r2();
      return a2.then(function(e3) {
        return o2.miss(e3);
      }).then(function() {
        return a2;
      });
    }, set: function(n3, r2) {
      return t2[JSON.stringify(n3)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Ao(e2) {
    var t2 = e2.algoliaAgents, n3 = e2.client, r2 = e2.version, o2 = function(e3) {
      var t3 = { value: "Algolia for JavaScript (".concat(e3, ")"), add: function(e4) {
        var n4 = "; ".concat(e4.segment).concat(void 0 !== e4.version ? " (".concat(e4.version, ")") : "");
        return -1 === t3.value.indexOf(n4) && (t3.value = "".concat(t3.value).concat(n4)), t3;
      } };
      return t3;
    }(r2).add({ segment: n3, version: r2 });
    return t2.forEach(function(e3) {
      return o2.add(e3);
    }), o2;
  }
  var No = 12e4;
  function To(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up", n3 = Date.now();
    return wt(wt({}, e2), {}, { status: t2, lastUpdate: n3, isUp: function() {
      return "up" === t2 || Date.now() - n3 > No;
    }, isTimedOut: function() {
      return "timed out" === t2 && Date.now() - n3 <= No;
    } });
  }
  var Ro = function() {
    function e2(t2, n3) {
      var r2;
      return ht(this, e2), yt(r2 = vt(this, e2, [t2]), "name", "AlgoliaError"), n3 && (r2.name = n3), r2;
    }
    return bt(e2, Ct(Error)), dt(e2);
  }();
  var Lo = function() {
    function e2(t2, n3, r2) {
      var o2;
      return ht(this, e2), yt(o2 = vt(this, e2, [t2, r2]), "stackTrace", void 0), o2.stackTrace = n3, o2;
    }
    return bt(e2, Ro), dt(e2);
  }();
  var qo = function() {
    function e2(t2) {
      return ht(this, e2), vt(this, e2, ["Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.", t2, "RetryError"]);
    }
    return bt(e2, Lo), dt(e2);
  }();
  var Mo = function() {
    function e2(t2, n3, r2) {
      var o2, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ApiError";
      return ht(this, e2), yt(o2 = vt(this, e2, [t2, r2, i2]), "status", void 0), o2.status = n3, o2;
    }
    return bt(e2, Lo), dt(e2);
  }();
  var Ho = function() {
    function e2(t2, n3) {
      var r2;
      return ht(this, e2), yt(r2 = vt(this, e2, [t2, "DeserializationError"]), "response", void 0), r2.response = n3, r2;
    }
    return bt(e2, Ro), dt(e2);
  }();
  var Uo = function() {
    function e2(t2, n3, r2, o2) {
      var i2;
      return ht(this, e2), yt(i2 = vt(this, e2, [t2, n3, o2, "DetailedApiError"]), "error", void 0), i2.error = r2, i2;
    }
    return bt(e2, Mo), dt(e2);
  }();
  function Fo(e2, t2, n3) {
    var r2, o2 = (r2 = n3, Object.keys(r2).filter(function(e3) {
      return void 0 !== r2[e3];
    }).sort().map(function(e3) {
      return "".concat(e3, "=").concat(encodeURIComponent("[object Array]" === Object.prototype.toString.call(r2[e3]) ? r2[e3].join(",") : r2[e3]).replace(/\+/g, "%20"));
    }).join("&")), i2 = "".concat(e2.protocol, "://").concat(e2.url).concat(e2.port ? ":".concat(e2.port) : "", "/").concat("/" === t2.charAt(0) ? t2.substring(1) : t2);
    return o2.length && (i2 += "?".concat(o2)), i2;
  }
  function Bo(e2, t2) {
    if ("GET" !== e2.method && (void 0 !== e2.data || void 0 !== t2.data)) {
      var n3 = Array.isArray(e2.data) ? e2.data : wt(wt({}, e2.data), t2.data);
      return JSON.stringify(n3);
    }
  }
  function Vo(e2, t2, n3) {
    var r2 = wt(wt(wt({ Accept: "application/json" }, e2), t2), n3), o2 = {};
    return Object.keys(r2).forEach(function(e3) {
      var t3 = r2[e3];
      o2[e3.toLowerCase()] = t3;
    }), o2;
  }
  function Ko(e2) {
    try {
      return JSON.parse(e2.content);
    } catch (t2) {
      throw new Ho(t2.message, e2);
    }
  }
  function Wo(e2, t2) {
    var n3 = e2.content, r2 = e2.status;
    try {
      var o2 = JSON.parse(n3);
      return "error" in o2 ? new Uo(o2.message, r2, o2.error, t2) : new Mo(o2.message, r2, t2);
    } catch (e3) {
    }
    return new Mo(n3, r2, t2);
  }
  function zo(e2) {
    return e2.map(function(e3) {
      return Jo(e3);
    });
  }
  function Jo(e2) {
    var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return wt(wt({}, e2), {}, { request: wt(wt({}, e2.request), {}, { headers: wt(wt({}, e2.request.headers), t2) }) });
  }
  var Qo = ["appId", "apiKey", "authMode", "algoliaAgents"];
  var $o = ["params"];
  var Zo = "5.19.0";
  function Go(e2) {
    return [{ url: "".concat(e2, "-dsn.algolia.net"), accept: "read", protocol: "https" }, { url: "".concat(e2, ".algolia.net"), accept: "write", protocol: "https" }].concat(function(e3) {
      for (var t2 = e3, n3 = e3.length - 1; n3 > 0; n3--) {
        var r2 = Math.floor(Math.random() * (n3 + 1)), o2 = e3[n3];
        t2[n3] = e3[r2], t2[r2] = o2;
      }
      return t2;
    }([{ url: "".concat(e2, "-1.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e2, "-2.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e2, "-3.algolianet.com"), accept: "readWrite", protocol: "https" }]));
  }
  var Yo = "3.9.0";
  var Xo = ["footer", "searchBox"];
  function ei(e2) {
    var t2 = e2.appId, n3 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = void 0 === o2 ? "Search docs" : o2, a2 = e2.searchParameters, c2 = e2.maxResultsPerGroup, u2 = e2.onClose, l3 = void 0 === u2 ? ho : u2, s3 = e2.transformItems, f2 = void 0 === s3 ? mo : s3, p2 = e2.hitComponent, m2 = void 0 === p2 ? zr : p2, v2 = e2.resultsFooterComponent, h2 = void 0 === v2 ? function() {
      return null;
    } : v2, d2 = e2.navigator, y2 = e2.initialScrollY, _2 = void 0 === y2 ? 0 : y2, g2 = e2.transformSearchClient, b2 = void 0 === g2 ? mo : g2, S2 = e2.disableUserPersonalization, O2 = void 0 !== S2 && S2, w2 = e2.initialQuery, E2 = void 0 === w2 ? "" : w2, j2 = e2.translations, P2 = void 0 === j2 ? {} : j2, I2 = e2.getMissingResultsUrl, k2 = e2.insights, D2 = void 0 !== k2 && k2, C2 = P2.footer, x2 = P2.searchBox, A2 = Et(P2, Xo), N2 = It(st.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = N2[0], R2 = N2[1], L2 = st.useRef(null), q2 = st.useRef(null), M2 = st.useRef(null), H2 = st.useRef(null), U2 = st.useRef(null), F2 = st.useRef(10), B2 = st.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, V2 = st.useRef(E2 || B2).current, K2 = function(e3, t3, n4) {
      return st.useMemo(function() {
        var r3 = function(e4, t4) {
          if (!e4 || "string" != typeof e4) throw new Error("`appId` is missing.");
          if (!t4 || "string" != typeof t4) throw new Error("`apiKey` is missing.");
          return function(e5) {
            var t5 = e5.appId, n5 = e5.apiKey, r4 = e5.authMode, o3 = e5.algoliaAgents, i3 = Et(e5, Qo), a3 = function(e6, t6) {
              var n6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "WithinHeaders", r5 = { "x-algolia-api-key": t6, "x-algolia-application-id": e6 };
              return { headers: function() {
                return "WithinHeaders" === n6 ? r5 : {};
              }, queryParameters: function() {
                return "WithinQueryParameters" === n6 ? r5 : {};
              } };
            }(t5, n5, r4), c3 = function(e6) {
              var t6 = e6.hosts, n6 = e6.hostsCache, r5 = e6.baseHeaders, o4 = e6.logger, i4 = e6.baseQueryParameters, a4 = e6.algoliaAgent, c4 = e6.timeouts, u3 = e6.requester, l4 = e6.requestsCache, s4 = e6.responsesCache;
              function f3(e7) {
                return p3.apply(this, arguments);
              }
              function p3() {
                return (p3 = mt(jt().mark(function e7(t7) {
                  var r6, o5, i5, a5, c5;
                  return jt().wrap(function(e8) {
                    for (; ; ) switch (e8.prev = e8.next) {
                      case 0:
                        return e8.next = 2, Promise.all(t7.map(function(e9) {
                          return n6.get(e9, function() {
                            return Promise.resolve(To(e9));
                          });
                        }));
                      case 2:
                        return r6 = e8.sent, o5 = r6.filter(function(e9) {
                          return e9.isUp();
                        }), i5 = r6.filter(function(e9) {
                          return e9.isTimedOut();
                        }), a5 = [].concat(kt(o5), kt(i5)), c5 = a5.length > 0 ? a5 : t7, e8.abrupt("return", { hosts: c5, getTimeout: function(e9, t8) {
                          return (0 === i5.length && 0 === e9 ? 1 : i5.length + 3 + e9) * t8;
                        } });
                      case 8:
                      case "end":
                        return e8.stop();
                    }
                  }, e7);
                }))).apply(this, arguments);
              }
              function m3(e7, t7) {
                return v3.apply(this, arguments);
              }
              function v3() {
                return v3 = mt(jt().mark(function e7(l5, s5) {
                  var p4, m4, v4, h3, d3, y3, _3, g3, b3, S3, O3, w3, E3, j3 = arguments;
                  return jt().wrap(function(e8) {
                    for (; ; ) switch (e8.prev = e8.next) {
                      case 0:
                        if (p4 = !(j3.length > 2 && void 0 !== j3[2]) || j3[2], m4 = [], v4 = Bo(l5, s5), h3 = Vo(r5, l5.headers, s5.headers), d3 = "GET" === l5.method ? wt(wt({}, l5.data), s5.data) : {}, y3 = wt(wt(wt({}, i4), l5.queryParameters), d3), a4.value && (y3["x-algolia-agent"] = a4.value), s5 && s5.queryParameters) for (_3 = 0, g3 = Object.keys(s5.queryParameters); _3 < g3.length; _3++) b3 = g3[_3], s5.queryParameters[b3] && "[object Object]" !== Object.prototype.toString.call(s5.queryParameters[b3]) ? y3[b3] = s5.queryParameters[b3].toString() : y3[b3] = s5.queryParameters[b3];
                        return S3 = 0, O3 = function() {
                          var e9 = mt(jt().mark(function e10(t7, r6) {
                            var i5, a5, f4, d4, _4, g4;
                            return jt().wrap(function(e11) {
                              for (; ; ) switch (e11.prev = e11.next) {
                                case 0:
                                  if (void 0 !== (i5 = t7.pop())) {
                                    e11.next = 3;
                                    break;
                                  }
                                  throw new qo(zo(m4));
                                case 3:
                                  return a5 = wt(wt({}, c4), s5.timeouts), f4 = { data: v4, headers: h3, method: l5.method, url: Fo(i5, l5.path, y3), connectTimeout: r6(S3, a5.connect), responseTimeout: r6(S3, p4 ? a5.read : a5.write) }, d4 = function(e12) {
                                    var n7 = { request: f4, response: e12, host: i5, triesLeft: t7.length };
                                    return m4.push(n7), n7;
                                  }, e11.next = 8, u3.send(f4);
                                case 8:
                                  if (w4 = (b4 = _4 = e11.sent).isTimedOut, E4 = b4.status, !(w4 || function(e12) {
                                    return !e12.isTimedOut && !~~e12.status;
                                  }({ isTimedOut: w4, status: E4 }) || 2 != ~~(E4 / 100) && 4 != ~~(E4 / 100))) {
                                    e11.next = 16;
                                    break;
                                  }
                                  return g4 = d4(_4), _4.isTimedOut && S3++, o4.info("Retryable failure", Jo(g4)), e11.next = 15, n6.set(i5, To(i5, _4.isTimedOut ? "timed out" : "down"));
                                case 15:
                                  return e11.abrupt("return", O3(t7, r6));
                                case 16:
                                  if (2 != ~~(_4.status / 100)) {
                                    e11.next = 18;
                                    break;
                                  }
                                  return e11.abrupt("return", Ko(_4));
                                case 18:
                                  throw d4(_4), Wo(_4, m4);
                                case 20:
                                case "end":
                                  return e11.stop();
                              }
                              var b4, w4, E4;
                            }, e10);
                          }));
                          return function(t7, n7) {
                            return e9.apply(this, arguments);
                          };
                        }(), w3 = t6.filter(function(e9) {
                          return "readWrite" === e9.accept || (p4 ? "read" === e9.accept : "write" === e9.accept);
                        }), e8.next = 13, f3(w3);
                      case 13:
                        return E3 = e8.sent, e8.abrupt("return", O3(kt(E3.hosts).reverse(), E3.getTimeout));
                      case 15:
                      case "end":
                        return e8.stop();
                    }
                  }, e7);
                })), v3.apply(this, arguments);
              }
              return { hostsCache: n6, requester: u3, timeouts: c4, logger: o4, algoliaAgent: a4, baseHeaders: r5, baseQueryParameters: i4, hosts: t6, request: function(e7) {
                var t7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n7 = e7.useReadTransporter || "GET" === e7.method;
                if (!n7) return m3(e7, t7, n7);
                var o5 = function() {
                  return m3(e7, t7);
                };
                if (true !== (t7.cacheable || e7.cacheable)) return o5();
                var a5 = { request: e7, requestOptions: t7, transporter: { queryParameters: i4, headers: r5 } };
                return s4.get(a5, function() {
                  return l4.get(a5, function() {
                    return l4.set(a5, o5()).then(function(e8) {
                      return Promise.all([l4.delete(a5), e8]);
                    }, function(e8) {
                      return Promise.all([l4.delete(a5), Promise.reject(e8)]);
                    }).then(function(e8) {
                      var t8 = It(e8, 2);
                      return t8[0], t8[1];
                    });
                  });
                }, { miss: function(e8) {
                  return s4.set(a5, e8);
                } });
              }, requestsCache: l4, responsesCache: s4 };
            }(wt(wt({ hosts: Go(t5) }, i3), {}, { algoliaAgent: Ao({ algoliaAgents: o3, client: "Lite", version: Zo }), baseHeaders: wt(wt({ "content-type": "text/plain" }, a3.headers()), i3.baseHeaders), baseQueryParameters: wt(wt({}, a3.queryParameters()), i3.baseQueryParameters) }));
            return { transporter: c3, appId: t5, apiKey: n5, clearCache: function() {
              return Promise.all([c3.requestsCache.clear(), c3.responsesCache.clear()]).then(function() {
              });
            }, get _ua() {
              return c3.algoliaAgent.value;
            }, addAlgoliaAgent: function(e6, t6) {
              c3.algoliaAgent.add({ segment: e6, version: t6 });
            }, setClientApiKey: function(e6) {
              var t6 = e6.apiKey;
              r4 && "WithinHeaders" !== r4 ? c3.baseQueryParameters["x-algolia-api-key"] = t6 : c3.baseHeaders["x-algolia-api-key"] = t6;
            }, searchForHits: function(e6, t6) {
              return this.search(e6, t6);
            }, searchForFacets: function(e6, t6) {
              return this.search(e6, t6);
            }, customPost: function(e6, t6) {
              var n6 = e6.path, r5 = e6.parameters, o4 = e6.body;
              if (!n6) throw new Error("Parameter `path` is required when calling `customPost`.");
              var i4 = { method: "POST", path: "/{path}".replace("{path}", n6), queryParameters: r5 || {}, headers: {}, data: o4 || {} };
              return c3.request(i4, t6);
            }, getRecommendations: function(e6, t6) {
              if (e6 && Array.isArray(e6) && (e6 = { requests: e6 }), !e6) throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
              if (!e6.requests) throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
              var n6 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e6, useReadTransporter: true, cacheable: true };
              return c3.request(n6, t6);
            }, search: function(e6, t6) {
              if (e6 && Array.isArray(e6)) {
                var n6 = { requests: e6.map(function(e7) {
                  var t7 = e7.params, n7 = Et(e7, $o);
                  return "facet" === n7.type ? wt(wt(wt({}, n7), t7), {}, { type: "facet" }) : wt(wt(wt({}, n7), t7), {}, { facet: void 0, maxFacetHits: void 0, facetQuery: void 0 });
                }) };
                e6 = n6;
              }
              if (!e6) throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
              if (!e6.requests) throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
              var r5 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e6, useReadTransporter: true, cacheable: true };
              return c3.request(r5, t6);
            } };
          }(wt({ appId: e4, apiKey: t4, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: { debug: function(e5, t5) {
            return Promise.resolve();
          }, info: function(e5, t5) {
            return Promise.resolve();
          }, error: function(e5, t5) {
            return Promise.resolve();
          } }, requester: { send: function(e5) {
            return new Promise(function(t5) {
              var n5 = new XMLHttpRequest();
              n5.open(e5.method, e5.url, true), Object.keys(e5.headers).forEach(function(t6) {
                return n5.setRequestHeader(t6, e5.headers[t6]);
              });
              var r4, o3 = function(e6, r5) {
                return setTimeout(function() {
                  n5.abort(), t5({ status: 0, content: r5, isTimedOut: true });
                }, e6);
              }, i3 = o3(e5.connectTimeout, "Connection timeout");
              n5.onreadystatechange = function() {
                n5.readyState > n5.OPENED && void 0 === r4 && (clearTimeout(i3), r4 = o3(e5.responseTimeout, "Socket timeout"));
              }, n5.onerror = function() {
                0 === n5.status && (clearTimeout(i3), clearTimeout(r4), t5({ content: n5.responseText || "Network request failed", status: n5.status, isTimedOut: false }));
              }, n5.onload = function() {
                clearTimeout(i3), clearTimeout(r4), t5({ content: n5.responseText, status: n5.status, isTimedOut: false });
              }, n5.send(e5.data);
            });
          } }, algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: xo(), requestsCache: xo({ serializable: false }), hostsCache: Co({ caches: [Do({ key: "".concat(Zo, "-").concat(e4) }), xo()] }) }, void 0));
        }(e3, t3);
        return r3.addAlgoliaAgent("docsearch", Yo), false === /docsearch.js \(.*\)/.test(r3.transporter.algoliaAgent.value) && r3.addAlgoliaAgent("docsearch-react", Yo), n4(r3);
      }, [e3, t3, n4]);
    }(t2, n3, b2), W2 = st.useRef(ko({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = st.useRef(ko({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === W2.getAll().length ? 7 : 4 })).current, J2 = st.useCallback(function(e3) {
      if (!O2) {
        var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
        t3 && -1 === W2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) && z2.add(t3);
      }
    }, [W2, z2, O2]), Q2 = st.useCallback(function(e3) {
      if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
        var t3 = e3, n4 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n4);
      }
    }, [T2.context.algoliaInsightsPlugin]), $2 = st.useMemo(function() {
      return Br({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: D2, navigator: d2, onStateChange: function(e3) {
        R2(e3.state);
      }, getSources: function(e3) {
        var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s4 = e3.setStatus;
        if (!o3) return O2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
          var t3 = e4.item, n4 = e4.event;
          J2(t3), vo(n4) || l3();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return z2.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
          var t3 = e4.item, n4 = e4.event;
          J2(t3), vo(n4) || l3();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return W2.getAll();
        } }];
        var p3 = Boolean(D2);
        return K2.search({ requests: [wt({ query: o3, indexName: r2, attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, a2)] }).catch(function(e4) {
          throw "RetryError" === e4.name && s4("error"), e4;
        }).then(function(e4) {
          var o4 = e4.results[0], a3 = o4.hits, s5 = o4.nbHits, m3 = po(a3, function(e5) {
            return go(e5);
          }, c2);
          i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s5 });
          var v3 = {};
          return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n3 } }), Object.values(m3).map(function(e5, t3) {
            return { sourceId: "hits".concat(t3), onSelect: function(e6) {
              var t4 = e6.item, n4 = e6.event;
              J2(t4), vo(n4) || l3();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(po(e5, function(e6) {
                return e6.hierarchy.lvl1;
              }, c2)).map(f2).map(function(e6) {
                return e6.map(function(t4) {
                  var n4 = null, r3 = e6.find(function(e7) {
                    return "lvl1" === e7.type && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return "lvl1" !== t4.type && r3 && (n4 = r3), wt(wt({}, t4), {}, { __docsearch_parent: n4 }, v3);
                });
              }).flat();
            } };
          });
        });
      } });
    }, [r2, a2, c2, K2, l3, z2, W2, J2, V2, i2, d2, f2, O2, D2, t2, n3]), Z2 = $2.getEnvironmentProps, G2 = $2.getRootProps, Y2 = $2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n4 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      st.useEffect(function() {
        if (n4 && r3 && o3) {
          var e4 = t3({ panelElement: n4, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, a3 = e4.onTouchMove;
          return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", a3), function() {
            window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", a3);
          };
        }
      }, [t3, n4, r3, o3]);
    }({ getEnvironmentProps: Z2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
      var t3 = e3.container;
      st.useEffect(function() {
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
    }({ container: L2.current }), st.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, _2);
      };
    }, []), st.useLayoutEffect(function() {
      var e3 = window.innerWidth - document.body.clientWidth;
      return document.body.style.marginRight = "".concat(e3, "px"), function() {
        document.body.style.marginRight = "0px";
      };
    }, []), st.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
    }, []), st.useEffect(function() {
      H2.current && (H2.current.scrollTop = 0);
    }, [T2.query]), st.useEffect(function() {
      V2.length > 0 && (Y2(), U2.current && U2.current.focus());
    }, [V2, Y2]), st.useEffect(function() {
      function e3() {
        if (q2.current) {
          var e4 = 0.01 * window.innerHeight;
          q2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), st.createElement("div", _t({ ref: L2 }, G2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === T2.status && "DocSearch-Container--Stalled", "error" === T2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && l3();
    } }), st.createElement("div", { className: "DocSearch-Modal", ref: q2 }, st.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, st.createElement(Po, _t({}, $2, { state: T2, autoFocus: 0 === V2.length, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: x2, onClose: l3 }))), st.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, st.createElement(Eo, _t({}, $2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: h2, disableUserPersonalization: O2, recentSearches: z2, favoriteSearches: W2, inputRef: U2, translations: A2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
      Q2(e3), J2(e3), vo(t3) || l3();
    } }))), st.createElement("footer", { className: "DocSearch-Footer" }, st.createElement(Wr, { translations: C2 }))));
  }
  function ti(e2) {
    var t2, n3, r2 = st.useRef(null), o2 = It(st.useState(false), 2), i2 = o2[0], a2 = o2[1], c2 = It(st.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = c2[0], l3 = c2[1], s3 = st.useCallback(function() {
      a2(true);
    }, [a2]), f2 = st.useCallback(function() {
      a2(false), l3(null == e2 ? void 0 : e2.initialQuery);
    }, [a2, e2.initialQuery]);
    return function(e3) {
      var t3 = e3.isOpen, n4 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
      st.useEffect(function() {
        function e4(e5) {
          var a3;
          if ("Escape" === e5.code && t3 || "k" === (null === (a3 = e5.key) || void 0 === a3 ? void 0 : a3.toLowerCase()) && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n5 = t4.tagName;
            return t4.isContentEditable || "INPUT" === n5 || "SELECT" === n5 || "TEXTAREA" === n5;
          }(e5) && "/" === e5.key && !t3) return e5.preventDefault(), void (t3 ? r3() : document.body.classList.contains("DocSearch--active") || n4());
          i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n4, r3, o3, i3]);
    }({ isOpen: i2, onOpen: s3, onClose: f2, onInput: st.useCallback(function(e3) {
      a2(true), l3(e3.key);
    }, [a2, l3]), searchButtonRef: r2 }), st.createElement(st.Fragment, null, st.createElement(Rt, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s3 }), i2 && We(st.createElement(ei, _t({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n3 = e2.translations) || void 0 === n3 ? void 0 : n3.modal, onClose: f2 })), document.body));
  }
  function ni(t2) {
    Ye(st.createElement(ti, e({}, t2, { transformSearchClient: function(e2) {
      return e2.addAlgoliaAgent("docsearch.js", Yo), t2.transformSearchClient ? t2.transformSearchClient(e2) : e2;
    } })), function(e2) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e2 ? t3.document.querySelector(e2) : e2;
    }(t2.container, t2.environment));
  }

  // js/src/docsearch.js
  ni({
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

  // js/src/ts/util/set-cookie-expiration-never.ts
  var setCookieExpirationNever2 = () => {
    const d2 = /* @__PURE__ */ new Date();
    d2.setTime(d2.getTime() + 100 * 365 * 24 * 60 * 60 * 1e3);
    return `expires=${d2.toUTCString()};`;
  };

  // js/src/ts/util/get-cookie.ts
  var getCookie2 = (name) => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);
    if (matched) {
      const cookie = matched[0].split("=");
      return cookie[1];
    }
    return false;
  };

  // js/src/ts/tab-multiples.ts
  window.addEventListener("DOMContentLoaded", () => {
    const tabMultiAttribute = "data-choco-tab-multi";
    const tabMultiElements = document.querySelectorAll(`[${tabMultiAttribute}]`);
    const tabCookies = /* @__PURE__ */ new Set();
    if (tabMultiElements && tabMultiElements.value) {
      for (const tabElement of tabMultiElements) {
        const tabMultiConfigAttribute = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, "");
        let tabMultiConfig = null;
        try {
          tabMultiConfig = JSON.parse(tabMultiConfigAttribute != null ? tabMultiConfigAttribute : "");
        } catch (e2) {
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
              bootstrap.Tab.getOrCreateInstance(otherTab).show();
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
              bootstrap.Tab.getOrCreateInstance(tabElement).show();
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

  // js/src/dynamic-code-block.js
  document.addEventListener("DOMContentLoaded", () => {
    const dynamicCodeBlockContainers = document.querySelectorAll(".dynamic-code-block-container");
    const dynamicCodeBlockInputs = document.querySelectorAll(".dynamic-code-block-input");
    const replaceCodeVariableInCodeBlock = (input, inputVariable, inputDefaultValue) => {
      const codeVariables = document.querySelectorAll(`.${inputVariable}`);
      if (input.value) {
        for (const codeVariable of codeVariables) {
          codeVariable.textContent = input.value;
        }
      } else {
        for (const codeVariable of codeVariables) {
          codeVariable.textContent = inputDefaultValue;
        }
      }
    };
    dynamicCodeBlockInputs.forEach((input) => {
      const inputVariable = input.name;
      const inputDefaultValue = input.getAttribute("data-default-value");
      const regex = new RegExp(`\\b${inputVariable}\\b`, "g");
      for (const dynamicCodeBlockContainer of dynamicCodeBlockContainers) {
        dynamicCodeBlockContainer.innerHTML = dynamicCodeBlockContainer.innerHTML.replaceAll(regex, `<span class="${inputVariable}">${inputDefaultValue}</span>`);
      }
      replaceCodeVariableInCodeBlock(input, inputVariable, inputDefaultValue);
      input.addEventListener("keyup", () => {
        replaceCodeVariableInCodeBlock(input, inputVariable, inputDefaultValue);
      });
    });
    copyCodeBlocks();
  });
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

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

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

@docsearch/js/dist/esm/index.js:
  (*! @docsearch/js 3.9.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
