var Ks = { exports: {} }, fi = {};
var sh;
function ey() {
  if (sh) return fi;
  sh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(o, E, j) {
    var b = null;
    if (j !== void 0 && (b = "" + j), E.key !== void 0 && (b = "" + E.key), "key" in E) {
      j = {};
      for (var q in E)
        q !== "key" && (j[q] = E[q]);
    } else j = E;
    return E = j.ref, {
      $$typeof: c,
      type: o,
      key: b,
      ref: E !== void 0 ? E : null,
      props: j
    };
  }
  return fi.Fragment = f, fi.jsx = d, fi.jsxs = d, fi;
}
var rh;
function ty() {
  return rh || (rh = 1, Ks.exports = ey()), Ks.exports;
}
var i = ty(), Js = { exports: {} }, pe = {};
var oh;
function ay() {
  if (oh) return pe;
  oh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
  function L(h) {
    return h === null || typeof h != "object" ? null : (h = S && h[S] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var Q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, de = Object.assign, V = {};
  function ie(h, D, G) {
    this.props = h, this.context = D, this.refs = V, this.updater = G || Q;
  }
  ie.prototype.isReactComponent = {}, ie.prototype.setState = function(h, D) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, D, "setState");
  }, ie.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = ie.prototype;
  function le(h, D, G) {
    this.props = h, this.context = D, this.refs = V, this.updater = G || Q;
  }
  var W = le.prototype = new ae();
  W.constructor = le, de(W, ie.prototype), W.isPureReactComponent = !0;
  var Se = Array.isArray;
  function ge() {
  }
  var K = { H: null, A: null, T: null, S: null }, k = Object.prototype.hasOwnProperty;
  function I(h, D, G) {
    var F = G.ref;
    return {
      $$typeof: c,
      type: h,
      key: D,
      ref: F !== void 0 ? F : null,
      props: G
    };
  }
  function ee(h, D) {
    return I(h.type, D, h.props);
  }
  function Z(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function se(h) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(G) {
      return D[G];
    });
  }
  var Ee = /\/+/g;
  function qe(h, D) {
    return typeof h == "object" && h !== null && h.key != null ? se("" + h.key) : D.toString(36);
  }
  function Ue(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(ge, ge) : (h.status = "pending", h.then(
          function(D) {
            h.status === "pending" && (h.status = "fulfilled", h.value = D);
          },
          function(D) {
            h.status === "pending" && (h.status = "rejected", h.reason = D);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function g(h, D, G, F, ve) {
    var be = typeof h;
    (be === "undefined" || be === "boolean") && (h = null);
    var we = !1;
    if (h === null) we = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case c:
            case f:
              we = !0;
              break;
            case U:
              return we = h._init, g(
                we(h._payload),
                D,
                G,
                F,
                ve
              );
          }
      }
    if (we)
      return ve = ve(h), we = F === "" ? "." + qe(h, 0) : F, Se(ve) ? (G = "", we != null && (G = we.replace(Ee, "$&/") + "/"), g(ve, D, G, "", function(He) {
        return He;
      })) : ve != null && (Z(ve) && (ve = ee(
        ve,
        G + (ve.key == null || h && h.key === ve.key ? "" : ("" + ve.key).replace(
          Ee,
          "$&/"
        ) + "/") + we
      )), D.push(ve)), 1;
    we = 0;
    var Ie = F === "" ? "." : F + ":";
    if (Se(h))
      for (var Y = 0; Y < h.length; Y++)
        F = h[Y], be = Ie + qe(F, Y), we += g(
          F,
          D,
          G,
          be,
          ve
        );
    else if (Y = L(h), typeof Y == "function")
      for (h = Y.call(h), Y = 0; !(F = h.next()).done; )
        F = F.value, be = Ie + qe(F, Y++), we += g(
          F,
          D,
          G,
          be,
          ve
        );
    else if (be === "object") {
      if (typeof h.then == "function")
        return g(
          Ue(h),
          D,
          G,
          F,
          ve
        );
      throw D = String(h), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function B(h, D, G) {
    if (h == null) return h;
    var F = [], ve = 0;
    return g(h, F, "", "", function(be) {
      return D.call(G, be, ve++);
    }), F;
  }
  function $(h) {
    if (h._status === -1) {
      var D = h._result;
      D = D(), D.then(
        function(G) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = G);
        },
        function(G) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = G);
        }
      ), h._status === -1 && (h._status = 0, h._result = D);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var v = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, P = {
    map: B,
    forEach: function(h, D, G) {
      B(
        h,
        function() {
          D.apply(this, arguments);
        },
        G
      );
    },
    count: function(h) {
      var D = 0;
      return B(h, function() {
        D++;
      }), D;
    },
    toArray: function(h) {
      return B(h, function(D) {
        return D;
      }) || [];
    },
    only: function(h) {
      if (!Z(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return pe.Activity = A, pe.Children = P, pe.Component = ie, pe.Fragment = d, pe.Profiler = E, pe.PureComponent = le, pe.StrictMode = o, pe.Suspense = T, pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, pe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return K.H.useMemoCache(h);
    }
  }, pe.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, pe.cacheSignal = function() {
    return null;
  }, pe.cloneElement = function(h, D, G) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var F = de({}, h.props), ve = h.key;
    if (D != null)
      for (be in D.key !== void 0 && (ve = "" + D.key), D)
        !k.call(D, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && D.ref === void 0 || (F[be] = D[be]);
    var be = arguments.length - 2;
    if (be === 1) F.children = G;
    else if (1 < be) {
      for (var we = Array(be), Ie = 0; Ie < be; Ie++)
        we[Ie] = arguments[Ie + 2];
      F.children = we;
    }
    return I(h.type, ve, F);
  }, pe.createContext = function(h) {
    return h = {
      $$typeof: b,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: j,
      _context: h
    }, h;
  }, pe.createElement = function(h, D, G) {
    var F, ve = {}, be = null;
    if (D != null)
      for (F in D.key !== void 0 && (be = "" + D.key), D)
        k.call(D, F) && F !== "key" && F !== "__self" && F !== "__source" && (ve[F] = D[F]);
    var we = arguments.length - 2;
    if (we === 1) ve.children = G;
    else if (1 < we) {
      for (var Ie = Array(we), Y = 0; Y < we; Y++)
        Ie[Y] = arguments[Y + 2];
      ve.children = Ie;
    }
    if (h && h.defaultProps)
      for (F in we = h.defaultProps, we)
        ve[F] === void 0 && (ve[F] = we[F]);
    return I(h, be, ve);
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(h) {
    return { $$typeof: q, render: h };
  }, pe.isValidElement = Z, pe.lazy = function(h) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: h },
      _init: $
    };
  }, pe.memo = function(h, D) {
    return {
      $$typeof: p,
      type: h,
      compare: D === void 0 ? null : D
    };
  }, pe.startTransition = function(h) {
    var D = K.T, G = {};
    K.T = G;
    try {
      var F = h(), ve = K.S;
      ve !== null && ve(G, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(ge, v);
    } catch (be) {
      v(be);
    } finally {
      D !== null && G.types !== null && (D.types = G.types), K.T = D;
    }
  }, pe.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, pe.use = function(h) {
    return K.H.use(h);
  }, pe.useActionState = function(h, D, G) {
    return K.H.useActionState(h, D, G);
  }, pe.useCallback = function(h, D) {
    return K.H.useCallback(h, D);
  }, pe.useContext = function(h) {
    return K.H.useContext(h);
  }, pe.useDebugValue = function() {
  }, pe.useDeferredValue = function(h, D) {
    return K.H.useDeferredValue(h, D);
  }, pe.useEffect = function(h, D) {
    return K.H.useEffect(h, D);
  }, pe.useEffectEvent = function(h) {
    return K.H.useEffectEvent(h);
  }, pe.useId = function() {
    return K.H.useId();
  }, pe.useImperativeHandle = function(h, D, G) {
    return K.H.useImperativeHandle(h, D, G);
  }, pe.useInsertionEffect = function(h, D) {
    return K.H.useInsertionEffect(h, D);
  }, pe.useLayoutEffect = function(h, D) {
    return K.H.useLayoutEffect(h, D);
  }, pe.useMemo = function(h, D) {
    return K.H.useMemo(h, D);
  }, pe.useOptimistic = function(h, D) {
    return K.H.useOptimistic(h, D);
  }, pe.useReducer = function(h, D, G) {
    return K.H.useReducer(h, D, G);
  }, pe.useRef = function(h) {
    return K.H.useRef(h);
  }, pe.useState = function(h) {
    return K.H.useState(h);
  }, pe.useSyncExternalStore = function(h, D, G) {
    return K.H.useSyncExternalStore(
      h,
      D,
      G
    );
  }, pe.useTransition = function() {
    return K.H.useTransition();
  }, pe.version = "19.2.8", pe;
}
var fh;
function sr() {
  return fh || (fh = 1, Js.exports = ay()), Js.exports;
}
var w = sr(), $s = { exports: {} }, di = {}, Fs = { exports: {} }, Ws = {};
var dh;
function ly() {
  return dh || (dh = 1, (function(c) {
    function f(g, B) {
      var $ = g.length;
      g.push(B);
      e: for (; 0 < $; ) {
        var v = $ - 1 >>> 1, P = g[v];
        if (0 < E(P, B))
          g[v] = B, g[$] = P, $ = v;
        else break e;
      }
    }
    function d(g) {
      return g.length === 0 ? null : g[0];
    }
    function o(g) {
      if (g.length === 0) return null;
      var B = g[0], $ = g.pop();
      if ($ !== B) {
        g[0] = $;
        e: for (var v = 0, P = g.length, h = P >>> 1; v < h; ) {
          var D = 2 * (v + 1) - 1, G = g[D], F = D + 1, ve = g[F];
          if (0 > E(G, $))
            F < P && 0 > E(ve, G) ? (g[v] = ve, g[F] = $, v = F) : (g[v] = G, g[D] = $, v = D);
          else if (F < P && 0 > E(ve, $))
            g[v] = ve, g[F] = $, v = F;
          else break e;
        }
      }
      return B;
    }
    function E(g, B) {
      var $ = g.sortIndex - B.sortIndex;
      return $ !== 0 ? $ : g.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var j = performance;
      c.unstable_now = function() {
        return j.now();
      };
    } else {
      var b = Date, q = b.now();
      c.unstable_now = function() {
        return b.now() - q;
      };
    }
    var T = [], p = [], U = 1, A = null, S = 3, L = !1, Q = !1, de = !1, V = !1, ie = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    function W(g) {
      for (var B = d(p); B !== null; ) {
        if (B.callback === null) o(p);
        else if (B.startTime <= g)
          o(p), B.sortIndex = B.expirationTime, f(T, B);
        else break;
        B = d(p);
      }
    }
    function Se(g) {
      if (de = !1, W(g), !Q)
        if (d(T) !== null)
          Q = !0, ge || (ge = !0, se());
        else {
          var B = d(p);
          B !== null && Ue(Se, B.startTime - g);
        }
    }
    var ge = !1, K = -1, k = 5, I = -1;
    function ee() {
      return V ? !0 : !(c.unstable_now() - I < k);
    }
    function Z() {
      if (V = !1, ge) {
        var g = c.unstable_now();
        I = g;
        var B = !0;
        try {
          e: {
            Q = !1, de && (de = !1, ae(K), K = -1), L = !0;
            var $ = S;
            try {
              t: {
                for (W(g), A = d(T); A !== null && !(A.expirationTime > g && ee()); ) {
                  var v = A.callback;
                  if (typeof v == "function") {
                    A.callback = null, S = A.priorityLevel;
                    var P = v(
                      A.expirationTime <= g
                    );
                    if (g = c.unstable_now(), typeof P == "function") {
                      A.callback = P, W(g), B = !0;
                      break t;
                    }
                    A === d(T) && o(T), W(g);
                  } else o(T);
                  A = d(T);
                }
                if (A !== null) B = !0;
                else {
                  var h = d(p);
                  h !== null && Ue(
                    Se,
                    h.startTime - g
                  ), B = !1;
                }
              }
              break e;
            } finally {
              A = null, S = $, L = !1;
            }
            B = void 0;
          }
        } finally {
          B ? se() : ge = !1;
        }
      }
    }
    var se;
    if (typeof le == "function")
      se = function() {
        le(Z);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), qe = Ee.port2;
      Ee.port1.onmessage = Z, se = function() {
        qe.postMessage(null);
      };
    } else
      se = function() {
        ie(Z, 0);
      };
    function Ue(g, B) {
      K = ie(function() {
        g(c.unstable_now());
      }, B);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, c.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : k = 0 < g ? Math.floor(1e3 / g) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, c.unstable_next = function(g) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = S;
      }
      var $ = S;
      S = B;
      try {
        return g();
      } finally {
        S = $;
      }
    }, c.unstable_requestPaint = function() {
      V = !0;
    }, c.unstable_runWithPriority = function(g, B) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var $ = S;
      S = g;
      try {
        return B();
      } finally {
        S = $;
      }
    }, c.unstable_scheduleCallback = function(g, B, $) {
      var v = c.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? v + $ : v) : $ = v, g) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = $ + P, g = {
        id: U++,
        callback: B,
        priorityLevel: g,
        startTime: $,
        expirationTime: P,
        sortIndex: -1
      }, $ > v ? (g.sortIndex = $, f(p, g), d(T) === null && g === d(p) && (de ? (ae(K), K = -1) : de = !0, Ue(Se, $ - v))) : (g.sortIndex = P, f(T, g), Q || L || (Q = !0, ge || (ge = !0, se()))), g;
    }, c.unstable_shouldYield = ee, c.unstable_wrapCallback = function(g) {
      var B = S;
      return function() {
        var $ = S;
        S = B;
        try {
          return g.apply(this, arguments);
        } finally {
          S = $;
        }
      };
    };
  })(Ws)), Ws;
}
var hh;
function ny() {
  return hh || (hh = 1, Fs.exports = ly()), Fs.exports;
}
var Is = { exports: {} }, gt = {};
var mh;
function iy() {
  if (mh) return gt;
  mh = 1;
  var c = sr();
  function f(T) {
    var p = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        p += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + T + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var o = {
    d: {
      f: d,
      r: function() {
        throw Error(f(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, E = /* @__PURE__ */ Symbol.for("react.portal");
  function j(T, p, U) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: A == null ? null : "" + A,
      children: T,
      containerInfo: p,
      implementation: U
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(T, p) {
    if (T === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, gt.createPortal = function(T, p) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(f(299));
    return j(T, p, null, U);
  }, gt.flushSync = function(T) {
    var p = b.T, U = o.p;
    try {
      if (b.T = null, o.p = 2, T) return T();
    } finally {
      b.T = p, o.p = U, o.d.f();
    }
  }, gt.preconnect = function(T, p) {
    typeof T == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(T, p));
  }, gt.prefetchDNS = function(T) {
    typeof T == "string" && o.d.D(T);
  }, gt.preinit = function(T, p) {
    if (typeof T == "string" && p && typeof p.as == "string") {
      var U = p.as, A = q(U, p.crossOrigin), S = typeof p.integrity == "string" ? p.integrity : void 0, L = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      U === "style" ? o.d.S(
        T,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: A,
          integrity: S,
          fetchPriority: L
        }
      ) : U === "script" && o.d.X(T, {
        crossOrigin: A,
        integrity: S,
        fetchPriority: L,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, gt.preinitModule = function(T, p) {
    if (typeof T == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var U = q(
            p.as,
            p.crossOrigin
          );
          o.d.M(T, {
            crossOrigin: U,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(T);
  }, gt.preload = function(T, p) {
    if (typeof T == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var U = p.as, A = q(U, p.crossOrigin);
      o.d.L(T, U, {
        crossOrigin: A,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, gt.preloadModule = function(T, p) {
    if (typeof T == "string")
      if (p) {
        var U = q(p.as, p.crossOrigin);
        o.d.m(T, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: U,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(T);
  }, gt.requestFormReset = function(T) {
    o.d.r(T);
  }, gt.unstable_batchedUpdates = function(T, p) {
    return T(p);
  }, gt.useFormState = function(T, p, U) {
    return b.H.useFormState(T, p, U);
  }, gt.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, gt.version = "19.2.8", gt;
}
var vh;
function uy() {
  if (vh) return Is.exports;
  vh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), Is.exports = iy(), Is.exports;
}
var yh;
function cy() {
  if (yh) return di;
  yh = 1;
  var c = ny(), f = sr(), d = uy();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function E(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function j(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function b(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function q(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (j(e) !== e)
      throw Error(o(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = j(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === a) return T(n), e;
          if (u === l) return T(n), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) a = n, l = u;
      else {
        for (var s = !1, r = n.child; r; ) {
          if (r === a) {
            s = !0, a = n, l = u;
            break;
          }
          if (r === l) {
            s = !0, l = n, a = u;
            break;
          }
          r = r.sibling;
        }
        if (!s) {
          for (r = u.child; r; ) {
            if (r === a) {
              s = !0, a = u, l = n;
              break;
            }
            if (r === l) {
              s = !0, l = u, a = n;
              break;
            }
            r = r.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function U(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = U(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.transitional.element"), Q = /* @__PURE__ */ Symbol.for("react.portal"), de = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ie = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), le = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), Se = /* @__PURE__ */ Symbol.for("react.suspense"), ge = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), I = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Z = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != "object" ? null : (e = Z && e[Z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ee = /* @__PURE__ */ Symbol.for("react.client.reference");
  function qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case de:
        return "Fragment";
      case ie:
        return "Profiler";
      case V:
        return "StrictMode";
      case Se:
        return "Suspense";
      case ge:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Q:
          return "Portal";
        case le:
          return e.displayName || "Context";
        case ae:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : qe(e.type) || "Memo";
        case k:
          t = e._payload, e = e._init;
          try {
            return qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ue = Array.isArray, g = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, v = [], P = -1;
  function h(e) {
    return { current: e };
  }
  function D(e) {
    0 > P || (e.current = v[P], v[P] = null, P--);
  }
  function G(e, t) {
    P++, v[P] = e.current, e.current = t;
  }
  var F = h(null), ve = h(null), be = h(null), we = h(null);
  function Ie(e, t) {
    switch (G(be, t), G(ve, e), G(F, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Dd(t), e = Md(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    D(F), G(F, e);
  }
  function Y() {
    D(F), D(ve), D(be);
  }
  function He(e) {
    e.memoizedState !== null && G(we, e);
    var t = F.current, a = Md(t, e.type);
    t !== a && (G(ve, e), G(F, a));
  }
  function ye(e) {
    ve.current === e && (D(F), D(ve)), we.current === e && (D(we), ci._currentValue = $);
  }
  var J, kt;
  function Pe(e) {
    if (J === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        J = t && t[1] || "", kt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + J + e + kt;
  }
  var Wt = !1;
  function It(e, t) {
    if (!e || Wt) return "";
    Wt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (C) {
                  var z = C;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (C) {
                  z = C;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                z = C;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (C) {
            if (C && z && typeof C.stack == "string")
              return [C.stack, z.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), s = u[0], r = u[1];
      if (s && r) {
        var m = s.split(`
`), _ = r.split(`
`);
        for (n = l = 0; l < m.length && !m[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === m.length || n === _.length)
          for (l = m.length - 1, n = _.length - 1; 1 <= l && 0 <= n && m[l] !== _[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (m[l] !== _[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || m[l] !== _[n]) {
                  var O = `
` + m[l].replace(" at new ", " at ");
                  return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      Wt = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Pe(a) : "";
  }
  function rt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(e.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return e.child !== t && t !== null ? Pe("Suspense Fallback") : Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return It(e.type, !1);
      case 11:
        return It(e.type.render, !1);
      case 1:
        return It(e.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function ra(e) {
    try {
      var t = "", a = null;
      do
        t += rt(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var vt = Object.prototype.hasOwnProperty, jt = c.unstable_scheduleCallback, Dt = c.unstable_cancelCallback, Da = c.unstable_shouldYield, Dl = c.unstable_requestPaint, De = c.unstable_now, bt = c.unstable_getCurrentPriorityLevel, ul = c.unstable_ImmediatePriority, yi = c.unstable_UserBlockingPriority, Ml = c.unstable_NormalPriority, xn = c.unstable_LowPriority, Ol = c.unstable_IdlePriority, gi = c.log, pi = c.unstable_setDisableYieldValue, cl = null, ot = null;
  function Lt(e) {
    if (typeof gi == "function" && pi(e), ot && typeof ot.setStrictMode == "function")
      try {
        ot.setStrictMode(cl, e);
      } catch {
      }
  }
  var ut = Math.clz32 ? Math.clz32 : bi, Ru = Math.log, qu = Math.LN2;
  function bi(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ru(e) / qu | 0) | 0;
  }
  var sl = 256, oa = 262144, Ma = 4194304;
  function fa(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Oa(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~u, l !== 0 ? n = fa(l) : (s &= r, s !== 0 ? n = fa(s) : a || (a = r & ~e, a !== 0 && (n = fa(a))))) : (r = l & ~u, r !== 0 ? n = fa(r) : s !== 0 ? n = fa(s) : a || (a = l & ~e, a !== 0 && (n = fa(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function rl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Hu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xi() {
    var e = Ma;
    return Ma <<= 1, (Ma & 62914560) === 0 && (Ma = 4194304), e;
  }
  function jn(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ol(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function M(e, t, a, l, n, u) {
    var s = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, m = e.expirationTimes, _ = e.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var O = 31 - ut(a), H = 1 << O;
      r[O] = 0, m[O] = -1;
      var z = _[O];
      if (z !== null)
        for (_[O] = null, O = 0; O < z.length; O++) {
          var C = z[O];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~H;
    }
    l !== 0 && X(e, l, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function X(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - ut(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function ue(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - ut(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function ce(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : he(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function he(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Te(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fe() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : th(e.type));
  }
  function St(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var yt = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + yt, Et = "__reactProps$" + yt, Ul = "__reactContainer$" + yt, Bu = "__reactEvents$" + yt, Gh = "__reactListeners$" + yt, Xh = "__reactHandles$" + yt, yr = "__reactResources$" + yt, Sn = "__reactMarker$" + yt;
  function ku(e) {
    delete e[Xe], delete e[Et], delete e[Bu], delete e[Gh], delete e[Xh];
  }
  function Rl(e) {
    var t = e[Xe];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ul] || a[Xe]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = kd(e); e !== null; ) {
            if (a = e[Xe]) return a;
            e = kd(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function ql(e) {
    if (e = e[Xe] || e[Ul]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function En(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Hl(e) {
    var t = e[yr];
    return t || (t = e[yr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[Sn] = !0;
  }
  var gr = /* @__PURE__ */ new Set(), pr = {};
  function fl(e, t) {
    Bl(e, t), Bl(e + "Capture", t);
  }
  function Bl(e, t) {
    for (pr[e] = t, e = 0; e < t.length; e++)
      gr.add(t[e]);
  }
  var Qh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), br = {}, xr = {};
  function Zh(e) {
    return vt.call(xr, e) ? !0 : vt.call(br, e) ? !1 : Qh.test(e) ? xr[e] = !0 : (br[e] = !0, !1);
  }
  function ji(e, t, a) {
    if (Zh(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Si(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function da(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function jr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Kh(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          a = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(s) {
          a = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Lu(e) {
    if (!e._valueTracker) {
      var t = jr(e) ? "checked" : "value";
      e._valueTracker = Kh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Sr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = jr(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Ei(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jh = /[\n"\\]/g;
  function Vt(e) {
    return e.replace(
      Jh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yu(e, t, a, l, n, u, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Vu(e, s, Yt(t)) : a != null ? Vu(e, s, Yt(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Yt(r) : e.removeAttribute("name");
  }
  function Er(e, t, a, l, n, u, s, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Lu(e);
        return;
      }
      a = a != null ? "" + Yt(a) : "", t = t != null ? "" + Yt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Lu(e);
  }
  function Vu(e, t, a) {
    t === "number" && Ei(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function kl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Yt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = !0, l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nr(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function _r(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (Ue(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Lu(e);
  }
  function Ll(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var $h = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tr(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || $h.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Ar(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t)
        l = t[n], t.hasOwnProperty(n) && a[n] !== l && Tr(e, n, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Tr(e, u, t[u]);
  }
  function Gu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fh = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Wh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ni(e) {
    return Wh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ha() {
  }
  var Xu = null;
  function Qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yl = null, Vl = null;
  function zr(e) {
    var t = ql(e);
    if (t && (e = t.stateNode)) {
      var a = e[Et] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Yu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Vt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[Et] || null;
                if (!n) throw Error(o(90));
                Yu(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Sr(l);
          }
          break e;
        case "textarea":
          Nr(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && kl(e, !!a.multiple, t, !1);
      }
    }
  }
  var Zu = !1;
  function Cr(e, t, a) {
    if (Zu) return e(t, a);
    Zu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Zu = !1, (Yl !== null || Vl !== null) && (fu(), Yl && (t = Yl, e = Vl, Vl = Yl = null, zr(t), e)))
        for (t = 0; t < e.length; t++) zr(e[t]);
    }
  }
  function Nn(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Et] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        o(231, t, typeof a)
      );
    return a;
  }
  var ma = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = !1;
  if (ma)
    try {
      var _n = {};
      Object.defineProperty(_n, "passive", {
        get: function() {
          Ku = !0;
        }
      }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
    } catch {
      Ku = !1;
    }
  var Ua = null, Ju = null, _i = null;
  function wr() {
    if (_i) return _i;
    var e, t = Ju, a = t.length, l, n = "value" in Ua ? Ua.value : Ua.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var s = a - e;
    for (l = 1; l <= s && t[a - l] === n[u - l]; l++) ;
    return _i = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ti(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ai() {
    return !0;
  }
  function Dr() {
    return !1;
  }
  function Nt(e) {
    function t(a, l, n, u, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ai : Dr, this.isPropagationStopped = Dr, this;
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ai);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ai);
      },
      persist: function() {
      },
      isPersistent: Ai
    }), t;
  }
  var dl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zi = Nt(dl), Tn = A({}, dl, { view: 0, detail: 0 }), Ih = Nt(Tn), $u, Fu, An, Ci = A({}, Tn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Iu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== An && (An && e.type === "mousemove" ? ($u = e.screenX - An.screenX, Fu = e.screenY - An.screenY) : Fu = $u = 0, An = e), $u);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Fu;
    }
  }), Mr = Nt(Ci), Ph = A({}, Ci, { dataTransfer: 0 }), em = Nt(Ph), tm = A({}, Tn, { relatedTarget: 0 }), Wu = Nt(tm), am = A({}, dl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lm = Nt(am), nm = A({}, dl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), im = Nt(nm), um = A({}, dl, { data: 0 }), Or = Nt(um), cm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, rm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function om(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rm[e]) ? !!t[e] : !1;
  }
  function Iu() {
    return om;
  }
  var fm = A({}, Tn, {
    key: function(e) {
      if (e.key) {
        var t = cm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ti(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Iu,
    charCode: function(e) {
      return e.type === "keypress" ? Ti(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ti(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), dm = Nt(fm), hm = A({}, Ci, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ur = Nt(hm), mm = A({}, Tn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu
  }), vm = Nt(mm), ym = A({}, dl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gm = Nt(ym), pm = A({}, Ci, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bm = Nt(pm), xm = A({}, dl, {
    newState: 0,
    oldState: 0
  }), jm = Nt(xm), Sm = [9, 13, 27, 32], Pu = ma && "CompositionEvent" in window, zn = null;
  ma && "documentMode" in document && (zn = document.documentMode);
  var Em = ma && "TextEvent" in window && !zn, Rr = ma && (!Pu || zn && 8 < zn && 11 >= zn), qr = " ", Hr = !1;
  function Br(e, t) {
    switch (e) {
      case "keyup":
        return Sm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Gl = !1;
  function Nm(e, t) {
    switch (e) {
      case "compositionend":
        return kr(t);
      case "keypress":
        return t.which !== 32 ? null : (Hr = !0, qr);
      case "textInput":
        return e = t.data, e === qr && Hr ? null : e;
      default:
        return null;
    }
  }
  function _m(e, t) {
    if (Gl)
      return e === "compositionend" || !Pu && Br(e, t) ? (e = wr(), _i = Ju = Ua = null, Gl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Rr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Lr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tm[e.type] : t === "textarea";
  }
  function Yr(e, t, a, l) {
    Yl ? Vl ? Vl.push(l) : Vl = [l] : Yl = l, t = pu(t, "onChange"), 0 < t.length && (a = new zi(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Cn = null, wn = null;
  function Am(e) {
    _d(e, 0);
  }
  function wi(e) {
    var t = En(e);
    if (Sr(t)) return e;
  }
  function Vr(e, t) {
    if (e === "change") return t;
  }
  var Gr = !1;
  if (ma) {
    var ec;
    if (ma) {
      var tc = "oninput" in document;
      if (!tc) {
        var Xr = document.createElement("div");
        Xr.setAttribute("oninput", "return;"), tc = typeof Xr.oninput == "function";
      }
      ec = tc;
    } else ec = !1;
    Gr = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function Qr() {
    Cn && (Cn.detachEvent("onpropertychange", Zr), wn = Cn = null);
  }
  function Zr(e) {
    if (e.propertyName === "value" && wi(wn)) {
      var t = [];
      Yr(
        t,
        wn,
        e,
        Qu(e)
      ), Cr(Am, t);
    }
  }
  function zm(e, t, a) {
    e === "focusin" ? (Qr(), Cn = t, wn = a, Cn.attachEvent("onpropertychange", Zr)) : e === "focusout" && Qr();
  }
  function Cm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return wi(wn);
  }
  function wm(e, t) {
    if (e === "click") return wi(t);
  }
  function Dm(e, t) {
    if (e === "input" || e === "change")
      return wi(t);
  }
  function Mm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : Mm;
  function Dn(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!vt.call(t, n) || !Mt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Kr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jr(e, t) {
    var a = Kr(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Kr(a);
    }
  }
  function $r(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $r(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Fr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ei(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ei(e.document);
    }
    return t;
  }
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Om = ma && "documentMode" in document && 11 >= document.documentMode, Xl = null, lc = null, Mn = null, nc = !1;
  function Wr(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    nc || Xl == null || Xl !== Ei(l) || (l = Xl, "selectionStart" in l && ac(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Mn && Dn(Mn, l) || (Mn = l, l = pu(lc, "onSelect"), 0 < l.length && (t = new zi(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Xl)));
  }
  function hl(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ql = {
    animationend: hl("Animation", "AnimationEnd"),
    animationiteration: hl("Animation", "AnimationIteration"),
    animationstart: hl("Animation", "AnimationStart"),
    transitionrun: hl("Transition", "TransitionRun"),
    transitionstart: hl("Transition", "TransitionStart"),
    transitioncancel: hl("Transition", "TransitionCancel"),
    transitionend: hl("Transition", "TransitionEnd")
  }, ic = {}, Ir = {};
  ma && (Ir = document.createElement("div").style, "AnimationEvent" in window || (delete Ql.animationend.animation, delete Ql.animationiteration.animation, delete Ql.animationstart.animation), "TransitionEvent" in window || delete Ql.transitionend.transition);
  function ml(e) {
    if (ic[e]) return ic[e];
    if (!Ql[e]) return e;
    var t = Ql[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ir)
        return ic[e] = t[a];
    return e;
  }
  var Pr = ml("animationend"), eo = ml("animationiteration"), to = ml("animationstart"), Um = ml("transitionrun"), Rm = ml("transitionstart"), qm = ml("transitioncancel"), ao = ml("transitionend"), lo = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function Pt(e, t) {
    lo.set(e, t), fl(t, [e]);
  }
  var Di = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Gt = [], Zl = 0, cc = 0;
  function Mi() {
    for (var e = Zl, t = cc = Zl = 0; t < e; ) {
      var a = Gt[t];
      Gt[t++] = null;
      var l = Gt[t];
      Gt[t++] = null;
      var n = Gt[t];
      Gt[t++] = null;
      var u = Gt[t];
      if (Gt[t++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      u !== 0 && no(a, n, u);
    }
  }
  function Oi(e, t, a, l) {
    Gt[Zl++] = e, Gt[Zl++] = t, Gt[Zl++] = a, Gt[Zl++] = l, cc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function sc(e, t, a, l) {
    return Oi(e, t, a, l), Ui(e);
  }
  function vl(e, t) {
    return Oi(e, null, null, t), Ui(e);
  }
  function no(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - ut(a), e = u.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Ui(e) {
    if (50 < ei)
      throw ei = 0, gs = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Kl = {};
  function Hm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, a, l) {
    return new Hm(e, t, a, l);
  }
  function rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function va(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function io(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ri(e, t, a, l, n, u) {
    var s = 0;
    if (l = e, typeof e == "function") rc(e) && (s = 1);
    else if (typeof e == "string")
      s = Vv(
        e,
        a,
        F.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case I:
          return e = Ot(31, a, t, n), e.elementType = I, e.lanes = u, e;
        case de:
          return yl(a.children, n, u, t);
        case V:
          s = 8, n |= 24;
          break;
        case ie:
          return e = Ot(12, a, t, n | 2), e.elementType = ie, e.lanes = u, e;
        case Se:
          return e = Ot(13, a, t, n), e.elementType = Se, e.lanes = u, e;
        case ge:
          return e = Ot(19, a, t, n), e.elementType = ge, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case le:
                s = 10;
                break e;
              case ae:
                s = 9;
                break e;
              case W:
                s = 11;
                break e;
              case K:
                s = 14;
                break e;
              case k:
                s = 16, l = null;
                break e;
            }
          s = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ot(s, a, t, n), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function yl(e, t, a, l) {
    return e = Ot(7, e, l, t), e.lanes = a, e;
  }
  function oc(e, t, a) {
    return e = Ot(6, e, null, t), e.lanes = a, e;
  }
  function uo(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function fc(e, t, a) {
    return t = Ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var co = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = co.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: ra(t)
      }, co.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ra(t)
    };
  }
  var Jl = [], $l = 0, qi = null, On = 0, Qt = [], Zt = 0, Ra = null, ia = 1, ua = "";
  function ya(e, t) {
    Jl[$l++] = On, Jl[$l++] = qi, qi = e, On = t;
  }
  function so(e, t, a) {
    Qt[Zt++] = ia, Qt[Zt++] = ua, Qt[Zt++] = Ra, Ra = e;
    var l = ia;
    e = ua;
    var n = 32 - ut(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - ut(t) + n;
    if (30 < u) {
      var s = n - n % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, ia = 1 << 32 - ut(t) + n | a << n | l, ua = u + e;
    } else
      ia = 1 << u | a << n | l, ua = e;
  }
  function dc(e) {
    e.return !== null && (ya(e, 1), so(e, 1, 0));
  }
  function hc(e) {
    for (; e === qi; )
      qi = Jl[--$l], Jl[$l] = null, On = Jl[--$l], Jl[$l] = null;
    for (; e === Ra; )
      Ra = Qt[--Zt], Qt[Zt] = null, ua = Qt[--Zt], Qt[Zt] = null, ia = Qt[--Zt], Qt[Zt] = null;
  }
  function ro(e, t) {
    Qt[Zt++] = ia, Qt[Zt++] = ua, Qt[Zt++] = Ra, ia = t.id, ua = t.overflow, Ra = e;
  }
  var ft = null, Qe = null, Ce = !1, qa = null, Kt = !1, mc = Error(o(519));
  function Ha(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Un(Xt(t, e)), mc;
  }
  function oo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Xe] = e, t[Et] = l, a) {
      case "dialog":
        _e("cancel", t), _e("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        _e("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ai.length; a++)
          _e(ai[a], t);
        break;
      case "source":
        _e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        _e("error", t), _e("load", t);
        break;
      case "details":
        _e("toggle", t);
        break;
      case "input":
        _e("invalid", t), Er(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        _e("invalid", t);
        break;
      case "textarea":
        _e("invalid", t), _r(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Cd(t.textContent, a) ? (l.popover != null && (_e("beforetoggle", t), _e("toggle", t)), l.onScroll != null && _e("scroll", t), l.onScrollEnd != null && _e("scrollend", t), l.onClick != null && (t.onclick = ha), t = !0) : t = !1, t || Ha(e, !0);
  }
  function fo(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
        case 5:
        case 31:
        case 13:
          Kt = !1;
          return;
        case 27:
        case 3:
          Kt = !0;
          return;
        default:
          ft = ft.return;
      }
  }
  function Fl(e) {
    if (e !== ft) return !1;
    if (!Ce) return fo(e), Ce = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ms(e.type, e.memoizedProps)), a = !a), a && Qe && Ha(e), fo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Qe = Bd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Qe = Bd(e);
    } else
      t === 27 ? (t = Qe, Wa(e.type) ? (e = Hs, Hs = null, Qe = e) : Qe = t) : Qe = ft ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gl() {
    Qe = ft = null, Ce = !1;
  }
  function vc() {
    var e = qa;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), qa = null), e;
  }
  function Un(e) {
    qa === null ? qa = [e] : qa.push(e);
  }
  var yc = h(null), pl = null, ga = null;
  function Ba(e, t, a) {
    G(yc, t._currentValue), t._currentValue = a;
  }
  function pa(e) {
    e._currentValue = yc.current, D(yc);
  }
  function gc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function pc(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var s = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var r = u;
          u = n;
          for (var m = 0; m < t.length; m++)
            if (r.context === t[m]) {
              u.lanes |= a, r = u.alternate, r !== null && (r.lanes |= a), gc(
                u.return,
                a,
                e
              ), l || (s = null);
              break e;
            }
          u = r.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(o(341));
        s.lanes |= a, u = s.alternate, u !== null && (u.lanes |= a), gc(s, a, e), s = null;
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (n = s.sibling, n !== null) {
            n.return = s.return, s = n;
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function Wl(e, t, a, l) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(o(387));
        if (s = s.memoizedProps, s !== null) {
          var r = n.type;
          Mt(n.pendingProps.value, s.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (n === we.current) {
        if (s = n.alternate, s === null) throw Error(o(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ci) : e = [ci]);
      }
      n = n.return;
    }
    e !== null && pc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Hi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Mt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function bl(e) {
    pl = e, ga = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function dt(e) {
    return ho(pl, e);
  }
  function Bi(e, t) {
    return pl === null && bl(e), ho(e, t);
  }
  function ho(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ga === null) {
      if (e === null) throw Error(o(308));
      ga = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ga = ga.next = t;
    return a;
  }
  var Bm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, km = c.unstable_scheduleCallback, Lm = c.unstable_NormalPriority, et = {
    $$typeof: le,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bc() {
    return {
      controller: new Bm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rn(e) {
    e.refCount--, e.refCount === 0 && km(Lm, function() {
      e.controller.abort();
    });
  }
  var qn = null, xc = 0, Il = 0, Pl = null;
  function Ym(e, t) {
    if (qn === null) {
      var a = qn = [];
      xc = 0, Il = Es(), Pl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return xc++, t.then(mo, mo), t;
  }
  function mo() {
    if (--xc === 0 && qn !== null) {
      Pl !== null && (Pl.status = "fulfilled");
      var e = qn;
      qn = null, Il = 0, Pl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Vm(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var n = 0; n < a.length; n++) (0, a[n])(t);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var vo = g.S;
  g.S = function(e, t) {
    Pf = De(), typeof t == "object" && t !== null && typeof t.then == "function" && Ym(e, t), vo !== null && vo(e, t);
  };
  var xl = h(null);
  function jc() {
    var e = xl.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function ki(e, t) {
    t === null ? G(xl, xl.current) : G(xl, t.pool);
  }
  function yo() {
    var e = jc();
    return e === null ? null : { parent: et._currentValue, pool: e };
  }
  var en = Error(o(460)), Sc = Error(o(474)), Li = Error(o(542)), Yi = { then: function() {
  } };
  function go(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function po(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(ha, ha), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, xo(e), e;
      default:
        if (typeof t.status == "string") t.then(ha, ha);
        else {
          if (e = Ge, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, xo(e), e;
        }
        throw Sl = t, en;
    }
  }
  function jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Sl = a, en) : a;
    }
  }
  var Sl = null;
  function bo() {
    if (Sl === null) throw Error(o(459));
    var e = Sl;
    return Sl = null, e;
  }
  function xo(e) {
    if (e === en || e === Li)
      throw Error(o(483));
  }
  var tn = null, Hn = 0;
  function Vi(e) {
    var t = Hn;
    return Hn += 1, tn === null && (tn = []), po(tn, e, t);
  }
  function Bn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Gi(e, t) {
    throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function jo(e) {
    function t(x, y) {
      if (e) {
        var N = x.deletions;
        N === null ? (x.deletions = [y], x.flags |= 16) : N.push(y);
      }
    }
    function a(x, y) {
      if (!e) return null;
      for (; y !== null; )
        t(x, y), y = y.sibling;
      return null;
    }
    function l(x) {
      for (var y = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? y.set(x.key, x) : y.set(x.index, x), x = x.sibling;
      return y;
    }
    function n(x, y) {
      return x = va(x, y), x.index = 0, x.sibling = null, x;
    }
    function u(x, y, N) {
      return x.index = N, e ? (N = x.alternate, N !== null ? (N = N.index, N < y ? (x.flags |= 67108866, y) : N) : (x.flags |= 67108866, y)) : (x.flags |= 1048576, y);
    }
    function s(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function r(x, y, N, R) {
      return y === null || y.tag !== 6 ? (y = oc(N, x.mode, R), y.return = x, y) : (y = n(y, N), y.return = x, y);
    }
    function m(x, y, N, R) {
      var oe = N.type;
      return oe === de ? O(
        x,
        y,
        N.props.children,
        R,
        N.key
      ) : y !== null && (y.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === k && jl(oe) === y.type) ? (y = n(y, N.props), Bn(y, N), y.return = x, y) : (y = Ri(
        N.type,
        N.key,
        N.props,
        null,
        x.mode,
        R
      ), Bn(y, N), y.return = x, y);
    }
    function _(x, y, N, R) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== N.containerInfo || y.stateNode.implementation !== N.implementation ? (y = fc(N, x.mode, R), y.return = x, y) : (y = n(y, N.children || []), y.return = x, y);
    }
    function O(x, y, N, R, oe) {
      return y === null || y.tag !== 7 ? (y = yl(
        N,
        x.mode,
        R,
        oe
      ), y.return = x, y) : (y = n(y, N), y.return = x, y);
    }
    function H(x, y, N) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = oc(
          "" + y,
          x.mode,
          N
        ), y.return = x, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case L:
            return N = Ri(
              y.type,
              y.key,
              y.props,
              null,
              x.mode,
              N
            ), Bn(N, y), N.return = x, N;
          case Q:
            return y = fc(
              y,
              x.mode,
              N
            ), y.return = x, y;
          case k:
            return y = jl(y), H(x, y, N);
        }
        if (Ue(y) || se(y))
          return y = yl(
            y,
            x.mode,
            N,
            null
          ), y.return = x, y;
        if (typeof y.then == "function")
          return H(x, Vi(y), N);
        if (y.$$typeof === le)
          return H(
            x,
            Bi(x, y),
            N
          );
        Gi(x, y);
      }
      return null;
    }
    function z(x, y, N, R) {
      var oe = y !== null ? y.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return oe !== null ? null : r(x, y, "" + N, R);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case L:
            return N.key === oe ? m(x, y, N, R) : null;
          case Q:
            return N.key === oe ? _(x, y, N, R) : null;
          case k:
            return N = jl(N), z(x, y, N, R);
        }
        if (Ue(N) || se(N))
          return oe !== null ? null : O(x, y, N, R, null);
        if (typeof N.then == "function")
          return z(
            x,
            y,
            Vi(N),
            R
          );
        if (N.$$typeof === le)
          return z(
            x,
            y,
            Bi(x, N),
            R
          );
        Gi(x, N);
      }
      return null;
    }
    function C(x, y, N, R, oe) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return x = x.get(N) || null, r(y, x, "" + R, oe);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case L:
            return x = x.get(
              R.key === null ? N : R.key
            ) || null, m(y, x, R, oe);
          case Q:
            return x = x.get(
              R.key === null ? N : R.key
            ) || null, _(y, x, R, oe);
          case k:
            return R = jl(R), C(
              x,
              y,
              N,
              R,
              oe
            );
        }
        if (Ue(R) || se(R))
          return x = x.get(N) || null, O(y, x, R, oe, null);
        if (typeof R.then == "function")
          return C(
            x,
            y,
            N,
            Vi(R),
            oe
          );
        if (R.$$typeof === le)
          return C(
            x,
            y,
            N,
            Bi(y, R),
            oe
          );
        Gi(y, R);
      }
      return null;
    }
    function te(x, y, N, R) {
      for (var oe = null, Me = null, ne = y, je = y = 0, ze = null; ne !== null && je < N.length; je++) {
        ne.index > je ? (ze = ne, ne = null) : ze = ne.sibling;
        var Oe = z(
          x,
          ne,
          N[je],
          R
        );
        if (Oe === null) {
          ne === null && (ne = ze);
          break;
        }
        e && ne && Oe.alternate === null && t(x, ne), y = u(Oe, y, je), Me === null ? oe = Oe : Me.sibling = Oe, Me = Oe, ne = ze;
      }
      if (je === N.length)
        return a(x, ne), Ce && ya(x, je), oe;
      if (ne === null) {
        for (; je < N.length; je++)
          ne = H(x, N[je], R), ne !== null && (y = u(
            ne,
            y,
            je
          ), Me === null ? oe = ne : Me.sibling = ne, Me = ne);
        return Ce && ya(x, je), oe;
      }
      for (ne = l(ne); je < N.length; je++)
        ze = C(
          ne,
          x,
          je,
          N[je],
          R
        ), ze !== null && (e && ze.alternate !== null && ne.delete(
          ze.key === null ? je : ze.key
        ), y = u(
          ze,
          y,
          je
        ), Me === null ? oe = ze : Me.sibling = ze, Me = ze);
      return e && ne.forEach(function(al) {
        return t(x, al);
      }), Ce && ya(x, je), oe;
    }
    function me(x, y, N, R) {
      if (N == null) throw Error(o(151));
      for (var oe = null, Me = null, ne = y, je = y = 0, ze = null, Oe = N.next(); ne !== null && !Oe.done; je++, Oe = N.next()) {
        ne.index > je ? (ze = ne, ne = null) : ze = ne.sibling;
        var al = z(x, ne, Oe.value, R);
        if (al === null) {
          ne === null && (ne = ze);
          break;
        }
        e && ne && al.alternate === null && t(x, ne), y = u(al, y, je), Me === null ? oe = al : Me.sibling = al, Me = al, ne = ze;
      }
      if (Oe.done)
        return a(x, ne), Ce && ya(x, je), oe;
      if (ne === null) {
        for (; !Oe.done; je++, Oe = N.next())
          Oe = H(x, Oe.value, R), Oe !== null && (y = u(Oe, y, je), Me === null ? oe = Oe : Me.sibling = Oe, Me = Oe);
        return Ce && ya(x, je), oe;
      }
      for (ne = l(ne); !Oe.done; je++, Oe = N.next())
        Oe = C(ne, x, je, Oe.value, R), Oe !== null && (e && Oe.alternate !== null && ne.delete(Oe.key === null ? je : Oe.key), y = u(Oe, y, je), Me === null ? oe = Oe : Me.sibling = Oe, Me = Oe);
      return e && ne.forEach(function(Pv) {
        return t(x, Pv);
      }), Ce && ya(x, je), oe;
    }
    function Ve(x, y, N, R) {
      if (typeof N == "object" && N !== null && N.type === de && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case L:
            e: {
              for (var oe = N.key; y !== null; ) {
                if (y.key === oe) {
                  if (oe = N.type, oe === de) {
                    if (y.tag === 7) {
                      a(
                        x,
                        y.sibling
                      ), R = n(
                        y,
                        N.props.children
                      ), R.return = x, x = R;
                      break e;
                    }
                  } else if (y.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === k && jl(oe) === y.type) {
                    a(
                      x,
                      y.sibling
                    ), R = n(y, N.props), Bn(R, N), R.return = x, x = R;
                    break e;
                  }
                  a(x, y);
                  break;
                } else t(x, y);
                y = y.sibling;
              }
              N.type === de ? (R = yl(
                N.props.children,
                x.mode,
                R,
                N.key
              ), R.return = x, x = R) : (R = Ri(
                N.type,
                N.key,
                N.props,
                null,
                x.mode,
                R
              ), Bn(R, N), R.return = x, x = R);
            }
            return s(x);
          case Q:
            e: {
              for (oe = N.key; y !== null; ) {
                if (y.key === oe)
                  if (y.tag === 4 && y.stateNode.containerInfo === N.containerInfo && y.stateNode.implementation === N.implementation) {
                    a(
                      x,
                      y.sibling
                    ), R = n(y, N.children || []), R.return = x, x = R;
                    break e;
                  } else {
                    a(x, y);
                    break;
                  }
                else t(x, y);
                y = y.sibling;
              }
              R = fc(N, x.mode, R), R.return = x, x = R;
            }
            return s(x);
          case k:
            return N = jl(N), Ve(
              x,
              y,
              N,
              R
            );
        }
        if (Ue(N))
          return te(
            x,
            y,
            N,
            R
          );
        if (se(N)) {
          if (oe = se(N), typeof oe != "function") throw Error(o(150));
          return N = oe.call(N), me(
            x,
            y,
            N,
            R
          );
        }
        if (typeof N.then == "function")
          return Ve(
            x,
            y,
            Vi(N),
            R
          );
        if (N.$$typeof === le)
          return Ve(
            x,
            y,
            Bi(x, N),
            R
          );
        Gi(x, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, y !== null && y.tag === 6 ? (a(x, y.sibling), R = n(y, N), R.return = x, x = R) : (a(x, y), R = oc(N, x.mode, R), R.return = x, x = R), s(x)) : a(x, y);
    }
    return function(x, y, N, R) {
      try {
        Hn = 0;
        var oe = Ve(
          x,
          y,
          N,
          R
        );
        return tn = null, oe;
      } catch (ne) {
        if (ne === en || ne === Li) throw ne;
        var Me = Ot(29, ne, null, x.mode);
        return Me.lanes = R, Me.return = x, Me;
      }
    };
  }
  var El = jo(!0), So = jo(!1), ka = !1;
  function Ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function La(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ya(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Re & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Ui(e), no(e, null, a), t;
    }
    return Oi(e, l, t, a), Ui(e);
  }
  function kn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ue(e, a);
    }
  }
  function _c(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var s = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = s : u = u.next = s, a = a.next;
        } while (a !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Tc = !1;
  function Ln() {
    if (Tc) {
      var e = Pl;
      if (e !== null) throw e;
    }
  }
  function Yn(e, t, a, l) {
    Tc = !1;
    var n = e.updateQueue;
    ka = !1;
    var u = n.firstBaseUpdate, s = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var m = r, _ = m.next;
      m.next = null, s === null ? u = _ : s.next = _, s = m;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, r = O.lastBaseUpdate, r !== s && (r === null ? O.firstBaseUpdate = _ : r.next = _, O.lastBaseUpdate = m));
    }
    if (u !== null) {
      var H = n.baseState;
      s = 0, O = _ = m = null, r = u;
      do {
        var z = r.lane & -536870913, C = z !== r.lane;
        if (C ? (Ae & z) === z : (l & z) === z) {
          z !== 0 && z === Il && (Tc = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var te = e, me = r;
            z = t;
            var Ve = a;
            switch (me.tag) {
              case 1:
                if (te = me.payload, typeof te == "function") {
                  H = te.call(Ve, H, z);
                  break e;
                }
                H = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = me.payload, z = typeof te == "function" ? te.call(Ve, H, z) : te, z == null) break e;
                H = A({}, H, z);
                break e;
              case 2:
                ka = !0;
            }
          }
          z = r.callback, z !== null && (e.flags |= 64, C && (e.flags |= 8192), C = n.callbacks, C === null ? n.callbacks = [z] : C.push(z));
        } else
          C = {
            lane: z,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, O === null ? (_ = O = C, m = H) : O = O.next = C, s |= z;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          C = r, r = C.next, C.next = null, n.lastBaseUpdate = C, n.shared.pending = null;
        }
      } while (!0);
      O === null && (m = H), n.baseState = m, n.firstBaseUpdate = _, n.lastBaseUpdate = O, u === null && (n.shared.lanes = 0), Za |= s, e.lanes = s, e.memoizedState = H;
    }
  }
  function Eo(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function No(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Eo(a[e], t);
  }
  var an = h(null), Xi = h(0);
  function _o(e, t) {
    e = Aa, G(Xi, e), G(an, t), Aa = e | t.baseLanes;
  }
  function Ac() {
    G(Xi, Aa), G(an, an.current);
  }
  function zc() {
    Aa = Xi.current, D(an), D(Xi);
  }
  var Ut = h(null), Jt = null;
  function Va(e) {
    var t = e.alternate;
    G(Fe, Fe.current & 1), G(Ut, e), Jt === null && (t === null || an.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function Cc(e) {
    G(Fe, Fe.current), G(Ut, e), Jt === null && (Jt = e);
  }
  function To(e) {
    e.tag === 22 ? (G(Fe, Fe.current), G(Ut, e), Jt === null && (Jt = e)) : Ga();
  }
  function Ga() {
    G(Fe, Fe.current), G(Ut, Ut.current);
  }
  function Rt(e) {
    D(Ut), Jt === e && (Jt = null), D(Fe);
  }
  var Fe = h(0);
  function Qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Rs(a) || qs(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ba = 0, xe = null, Le = null, tt = null, Zi = !1, ln = !1, Nl = !1, Ki = 0, Vn = 0, nn = null, Gm = 0;
  function Je() {
    throw Error(o(321));
  }
  function wc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Mt(e[a], t[a])) return !1;
    return !0;
  }
  function Dc(e, t, a, l, n, u) {
    return ba = u, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = e === null || e.memoizedState === null ? of : Zc, Nl = !1, u = a(l, n), Nl = !1, ln && (u = zo(
      t,
      a,
      l,
      n
    )), Ao(e), u;
  }
  function Ao(e) {
    g.H = Qn;
    var t = Le !== null && Le.next !== null;
    if (ba = 0, tt = Le = xe = null, Zi = !1, Vn = 0, nn = null, t) throw Error(o(300));
    e === null || at || (e = e.dependencies, e !== null && Hi(e) && (at = !0));
  }
  function zo(e, t, a, l) {
    xe = e;
    var n = 0;
    do {
      if (ln && (nn = null), Vn = 0, ln = !1, 25 <= n) throw Error(o(301));
      if (n += 1, tt = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      g.H = ff, u = t(a, l);
    } while (ln);
    return u;
  }
  function Xm() {
    var e = g.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Gn(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function Mc() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function Oc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Uc(e) {
    if (Zi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Zi = !1;
    }
    ba = 0, tt = Le = xe = null, ln = !1, Vn = Ki = 0, nn = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return tt === null ? xe.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function We() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = tt === null ? xe.memoizedState : tt.next;
    if (t !== null)
      tt = t, Le = e;
    else {
      if (e === null)
        throw xe.alternate === null ? Error(o(467)) : Error(o(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, tt === null ? xe.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function Ji() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gn(e) {
    var t = Vn;
    return Vn += 1, nn === null && (nn = []), e = po(nn, e, t), t = xe, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? of : Zc), e;
  }
  function $i(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Gn(e);
      if (e.$$typeof === le) return dt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Rc(e) {
    var t = null, a = xe.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = xe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ji(), xe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = ee;
    return t.index++, a;
  }
  function xa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fi(e) {
    var t = We();
    return qc(t, Le, e);
  }
  function qc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = u.next, u.next = s;
      }
      t.baseQueue = n = u, l.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var r = s = null, m = null, _ = t, O = !1;
      do {
        var H = _.lane & -536870913;
        if (H !== _.lane ? (Ae & H) === H : (ba & H) === H) {
          var z = _.revertLane;
          if (z === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), H === Il && (O = !0);
          else if ((ba & z) === z) {
            _ = _.next, z === Il && (O = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (r = m = H, s = u) : m = m.next = H, xe.lanes |= z, Za |= z;
          H = _.action, Nl && a(u, H), u = _.hasEagerState ? _.eagerState : a(u, H);
        } else
          z = {
            lane: H,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (r = m = z, s = u) : m = m.next = z, xe.lanes |= H, Za |= H;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (m === null ? s = u : m.next = r, !Mt(u, e.memoizedState) && (at = !0, O && (a = Pl, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Hc(e) {
    var t = We(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, u = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var s = n = n.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== n);
      Mt(u, t.memoizedState) || (at = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Co(e, t, a) {
    var l = xe, n = We(), u = Ce;
    if (u) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var s = !Mt(
      (Le || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, at = !0), n = n.queue, Lc(Mo.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || s || tt !== null && tt.memoizedState.tag & 1) {
      if (l.flags |= 2048, un(
        9,
        { destroy: void 0 },
        Do.bind(
          null,
          l,
          n,
          a,
          t
        ),
        null
      ), Ge === null) throw Error(o(349));
      u || (ba & 127) !== 0 || wo(l, t, a);
    }
    return a;
  }
  function wo(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = xe.updateQueue, t === null ? (t = Ji(), xe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Do(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Oo(t) && Uo(e);
  }
  function Mo(e, t, a) {
    return a(function() {
      Oo(t) && Uo(e);
    });
  }
  function Oo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Mt(e, a);
    } catch {
      return !0;
    }
  }
  function Uo(e) {
    var t = vl(e, 2);
    t !== null && Ct(t, e, 2);
  }
  function Bc(e) {
    var t = xt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Nl) {
        Lt(!0);
        try {
          a();
        } finally {
          Lt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xa,
      lastRenderedState: e
    }, t;
  }
  function Ro(e, t, a, l) {
    return e.baseState = a, qc(
      e,
      Le,
      typeof l == "function" ? l : xa
    );
  }
  function Qm(e, t, a, l, n) {
    if (Pi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          u.listeners.push(s);
        }
      };
      g.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, qo(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function qo(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var u = g.T, s = {};
      g.T = s;
      try {
        var r = a(n, l), m = g.S;
        m !== null && m(s, r), Ho(e, t, r);
      } catch (_) {
        kc(e, t, _);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), g.T = u;
      }
    } else
      try {
        u = a(n, l), Ho(e, t, u);
      } catch (_) {
        kc(e, t, _);
      }
  }
  function Ho(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Bo(e, t, l);
      },
      function(l) {
        return kc(e, t, l);
      }
    ) : Bo(e, t, a);
  }
  function Bo(e, t, a) {
    t.status = "fulfilled", t.value = a, ko(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, qo(e, a)));
  }
  function kc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, ko(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function ko(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Lo(e, t) {
    return t;
  }
  function Yo(e, t) {
    if (Ce) {
      var a = Ge.formState;
      if (a !== null) {
        e: {
          var l = xe;
          if (Ce) {
            if (Qe) {
              t: {
                for (var n = Qe, u = Kt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = $t(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Qe = $t(
                  n.nextSibling
                ), l = n.data === "F!";
                break e;
              }
            }
            Ha(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = xt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lo,
      lastRenderedState: t
    }, a.queue = l, a = cf.bind(
      null,
      xe,
      l
    ), l.dispatch = a, l = Bc(!1), u = Qc.bind(
      null,
      xe,
      !1,
      l.queue
    ), l = xt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = Qm.bind(
      null,
      xe,
      n,
      u,
      a
    ), n.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Vo(e) {
    var t = We();
    return Go(t, Le, e);
  }
  function Go(e, t, a) {
    if (t = qc(
      e,
      t,
      Lo
    )[0], e = Fi(xa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Gn(t);
      } catch (s) {
        throw s === en ? Li : s;
      }
    else l = t;
    t = We();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (xe.flags |= 2048, un(
      9,
      { destroy: void 0 },
      Zm.bind(null, n, a),
      null
    )), [l, u, e];
  }
  function Zm(e, t) {
    e.action = t;
  }
  function Xo(e) {
    var t = We(), a = Le;
    if (a !== null)
      return Go(t, a, e);
    We(), t = t.memoizedState, a = We();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function un(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = xe.updateQueue, t === null && (t = Ji(), xe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Qo() {
    return We().memoizedState;
  }
  function Wi(e, t, a, l) {
    var n = xt();
    xe.flags |= e, n.memoizedState = un(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Ii(e, t, a, l) {
    var n = We();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    Le !== null && l !== null && wc(l, Le.memoizedState.deps) ? n.memoizedState = un(t, u, a, l) : (xe.flags |= e, n.memoizedState = un(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Zo(e, t) {
    Wi(8390656, 8, e, t);
  }
  function Lc(e, t) {
    Ii(2048, 8, e, t);
  }
  function Km(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null)
      t = Ji(), xe.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Ko(e) {
    var t = We().memoizedState;
    return Km({ ref: t, nextImpl: e }), function() {
      if ((Re & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Jo(e, t) {
    return Ii(4, 2, e, t);
  }
  function $o(e, t) {
    return Ii(4, 4, e, t);
  }
  function Fo(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Wo(e, t, a) {
    a = a != null ? a.concat([e]) : null, Ii(4, 4, Fo.bind(null, t, e), a);
  }
  function Yc() {
  }
  function Io(e, t) {
    var a = We();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && wc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Po(e, t) {
    var a = We();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && wc(t, l[1]))
      return l[0];
    if (l = e(), Nl) {
      Lt(!0);
      try {
        e();
      } finally {
        Lt(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Vc(e, t, a) {
    return a === void 0 || (ba & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = td(), xe.lanes |= e, Za |= e, a);
  }
  function ef(e, t, a, l) {
    return Mt(a, t) ? a : an.current !== null ? (e = Vc(e, a, l), Mt(e, t) || (at = !0), e) : (ba & 42) === 0 || (ba & 1073741824) !== 0 && (Ae & 261930) === 0 ? (at = !0, e.memoizedState = a) : (e = td(), xe.lanes |= e, Za |= e, t);
  }
  function tf(e, t, a, l, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var s = g.T, r = {};
    g.T = r, Qc(e, !1, t, a);
    try {
      var m = n(), _ = g.S;
      if (_ !== null && _(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Vm(
          m,
          l
        );
        Xn(
          e,
          t,
          O,
          Bt(e)
        );
      } else
        Xn(
          e,
          t,
          l,
          Bt(e)
        );
    } catch (H) {
      Xn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Bt()
      );
    } finally {
      B.p = u, s !== null && r.types !== null && (s.types = r.types), g.T = s;
    }
  }
  function Jm() {
  }
  function Gc(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var n = af(e).queue;
    tf(
      e,
      n,
      t,
      $,
      a === null ? Jm : function() {
        return lf(e), a(l);
      }
    );
  }
  function af(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xa,
        lastRenderedState: $
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xa,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function lf(e) {
    var t = af(e);
    t.next === null && (t = e.alternate.memoizedState), Xn(
      e,
      t.next.queue,
      {},
      Bt()
    );
  }
  function Xc() {
    return dt(ci);
  }
  function nf() {
    return We().memoizedState;
  }
  function uf() {
    return We().memoizedState;
  }
  function $m(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Bt();
          e = La(a);
          var l = Ya(t, e, a);
          l !== null && (Ct(l, t, a), kn(l, t, a)), t = { cache: bc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Fm(e, t, a) {
    var l = Bt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(e) ? sf(t, a) : (a = sc(e, t, a, l), a !== null && (Ct(a, e, l), rf(a, t, l)));
  }
  function cf(e, t, a) {
    var l = Bt();
    Xn(e, t, a, l);
  }
  function Xn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pi(e)) sf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, r = u(s, a);
          if (n.hasEagerState = !0, n.eagerState = r, Mt(r, s))
            return Oi(e, t, n, 0), Ge === null && Mi(), !1;
        } catch {
        }
      if (a = sc(e, t, n, l), a !== null)
        return Ct(a, e, l), rf(a, t, l), !0;
    }
    return !1;
  }
  function Qc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Es(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(e)) {
      if (t) throw Error(o(479));
    } else
      t = sc(
        e,
        a,
        l,
        2
      ), t !== null && Ct(t, e, 2);
  }
  function Pi(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function sf(e, t) {
    ln = Zi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function rf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ue(e, a);
    }
  }
  var Qn = {
    readContext: dt,
    use: $i,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useLayoutEffect: Je,
    useInsertionEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useSyncExternalStore: Je,
    useId: Je,
    useHostTransitionStatus: Je,
    useFormState: Je,
    useActionState: Je,
    useOptimistic: Je,
    useMemoCache: Je,
    useCacheRefresh: Je
  };
  Qn.useEffectEvent = Je;
  var of = {
    readContext: dt,
    use: $i,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: dt,
    useEffect: Zo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Wi(
        4194308,
        4,
        Fo.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Wi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Nl) {
        Lt(!0);
        try {
          e();
        } finally {
          Lt(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = xt();
      if (a !== void 0) {
        var n = a(t);
        if (Nl) {
          Lt(!0);
          try {
            a(t);
          } finally {
            Lt(!1);
          }
        }
      } else n = t;
      return l.memoizedState = l.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, l.queue = e, e = e.dispatch = Fm.bind(
        null,
        xe,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Bc(e);
      var t = e.queue, a = cf.bind(null, xe, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var a = xt();
      return Vc(a, e, t);
    },
    useTransition: function() {
      var e = Bc(!1);
      return e = tf.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = xe, n = xt();
      if (Ce) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Ge === null)
          throw Error(o(349));
        (Ae & 127) !== 0 || wo(l, t, a);
      }
      n.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return n.queue = u, Zo(Mo.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, un(
        9,
        { destroy: void 0 },
        Do.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = xt(), t = Ge.identifierPrefix;
      if (Ce) {
        var a = ua, l = ia;
        a = (l & ~(1 << 32 - ut(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Ki++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Gm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xc,
    useFormState: Yo,
    useActionState: Yo,
    useOptimistic: function(e) {
      var t = xt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Qc.bind(
        null,
        xe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Rc,
    useCacheRefresh: function() {
      return xt().memoizedState = $m.bind(
        null,
        xe
      );
    },
    useEffectEvent: function(e) {
      var t = xt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Re & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Zc = {
    readContext: dt,
    use: $i,
    useCallback: Io,
    useContext: dt,
    useEffect: Lc,
    useImperativeHandle: Wo,
    useInsertionEffect: Jo,
    useLayoutEffect: $o,
    useMemo: Po,
    useReducer: Fi,
    useRef: Qo,
    useState: function() {
      return Fi(xa);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var a = We();
      return ef(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fi(xa)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Gn(e),
        t
      ];
    },
    useSyncExternalStore: Co,
    useId: nf,
    useHostTransitionStatus: Xc,
    useFormState: Vo,
    useActionState: Vo,
    useOptimistic: function(e, t) {
      var a = We();
      return Ro(a, Le, e, t);
    },
    useMemoCache: Rc,
    useCacheRefresh: uf
  };
  Zc.useEffectEvent = Ko;
  var ff = {
    readContext: dt,
    use: $i,
    useCallback: Io,
    useContext: dt,
    useEffect: Lc,
    useImperativeHandle: Wo,
    useInsertionEffect: Jo,
    useLayoutEffect: $o,
    useMemo: Po,
    useReducer: Hc,
    useRef: Qo,
    useState: function() {
      return Hc(xa);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var a = We();
      return Le === null ? Vc(a, e, t) : ef(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hc(xa)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Gn(e),
        t
      ];
    },
    useSyncExternalStore: Co,
    useId: nf,
    useHostTransitionStatus: Xc,
    useFormState: Xo,
    useActionState: Xo,
    useOptimistic: function(e, t) {
      var a = We();
      return Le !== null ? Ro(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: uf
  };
  ff.useEffectEvent = Ko;
  function Kc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : A({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Jc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Bt(), n = La(l);
      n.payload = t, a != null && (n.callback = a), t = Ya(e, n, l), t !== null && (Ct(t, e, l), kn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Bt(), n = La(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Ya(e, n, l), t !== null && (Ct(t, e, l), kn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Bt(), l = La(a);
      l.tag = 2, t != null && (l.callback = t), t = Ya(e, l, a), t !== null && (Ct(t, e, a), kn(t, e, a));
    }
  };
  function df(e, t, a, l, n, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, s) : t.prototype && t.prototype.isPureReactComponent ? !Dn(a, l) || !Dn(n, u) : !0;
  }
  function hf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Jc.enqueueReplaceState(t, t.state, null);
  }
  function _l(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = A({}, a));
      for (var n in e)
        a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  function mf(e) {
    Di(e);
  }
  function vf(e) {
    console.error(e);
  }
  function yf(e) {
    Di(e);
  }
  function eu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function gf(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function $c(e, t, a) {
    return a = La(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      eu(e, t);
    }, a;
  }
  function pf(e) {
    return e = La(e), e.tag = 3, e;
  }
  function bf(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        gf(t, a, l);
      };
    }
    var s = a.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      gf(t, a, l), typeof n != "function" && (Ka === null ? Ka = /* @__PURE__ */ new Set([this]) : Ka.add(this));
      var r = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function Wm(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Wl(
        t,
        a,
        n,
        !0
      ), a = Ut.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Jt === null ? du() : a.alternate === null && $e === 0 && ($e = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Yi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), xs(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Yi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), xs(e, l, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return xs(e, l, n), du(), !1;
    }
    if (Ce)
      return t = Ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== mc && (e = Error(o(422), { cause: l }), Un(Xt(e, a)))) : (l !== mc && (t = Error(o(423), {
        cause: l
      }), Un(
        Xt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = Xt(l, a), n = $c(
        e.stateNode,
        l,
        n
      ), _c(e, n), $e !== 4 && ($e = 2)), !1;
    var u = Error(o(520), { cause: l });
    if (u = Xt(u, a), Pn === null ? Pn = [u] : Pn.push(u), $e !== 4 && ($e = 2), t === null) return !0;
    l = Xt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = $c(a.stateNode, l, e), _c(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ka === null || !Ka.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = pf(n), bf(
              n,
              e,
              a,
              l
            ), _c(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Fc = Error(o(461)), at = !1;
  function ht(e, t, a, l) {
    t.child = e === null ? So(t, null, a, l) : El(
      t,
      e.child,
      a,
      l
    );
  }
  function xf(e, t, a, l, n) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var r in l)
        r !== "ref" && (s[r] = l[r]);
    } else s = l;
    return bl(t), l = Dc(
      e,
      t,
      a,
      s,
      u,
      n
    ), r = Mc(), e !== null && !at ? (Oc(e, t, n), ja(e, t, n)) : (Ce && r && dc(t), t.flags |= 1, ht(e, t, l, n), t.child);
  }
  function jf(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !rc(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Sf(
        e,
        t,
        u,
        l,
        n
      )) : (e = Ri(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ns(e, n)) {
      var s = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Dn, a(s, l) && e.ref === t.ref)
        return ja(e, t, n);
    }
    return t.flags |= 1, e = va(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sf(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Dn(u, l) && e.ref === t.ref)
        if (at = !1, t.pendingProps = l = u, ns(e, n))
          (e.flags & 131072) !== 0 && (at = !0);
        else
          return t.lanes = e.lanes, ja(e, t, n);
    }
    return Wc(
      e,
      t,
      a,
      l,
      n
    );
  }
  function Ef(e, t, a, l) {
    var n = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~u;
        } else l = 0, t.child = null;
        return Nf(
          e,
          t,
          u,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ki(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? _o(t, u) : Ac(), To(t);
      else
        return l = t.lanes = 536870912, Nf(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (ki(t, u.cachePool), _o(t, u), Ga(), t.memoizedState = null) : (e !== null && ki(t, null), Ac(), Ga());
    return ht(e, t, n, a), t.child;
  }
  function Zn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Nf(e, t, a, l, n) {
    var u = jc();
    return u = u === null ? null : { parent: et._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && ki(t, null), Ac(), To(t), e !== null && Wl(e, t, l, !0), t.childLanes = n, null;
  }
  function tu(e, t) {
    return t = lu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _f(e, t, a) {
    return El(t, e.child, null, a), e = tu(t, t.pendingProps), e.flags |= 2, Rt(t), t.memoizedState = null, e;
  }
  function Im(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ce) {
        if (l.mode === "hidden")
          return e = tu(t, l), t.lanes = 536870912, Zn(null, e);
        if (Cc(t), (e = Qe) ? (e = Hd(
          e,
          Kt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ra !== null ? { id: ia, overflow: ua } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = uo(e), a.return = t, t.child = a, ft = t, Qe = null)) : e = null, e === null) throw Ha(t);
        return t.lanes = 536870912, null;
      }
      return tu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (Cc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = _f(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (at || Wl(e, t, a, !1), n = (a & e.childLanes) !== 0, at || n) {
        if (l = Ge, l !== null && (s = ce(l, a), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, vl(e, s), Ct(l, e, s), Fc;
        du(), t = _f(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Qe = $t(s.nextSibling), ft = t, Ce = !0, qa = null, Kt = !1, e !== null && ro(t, e), t = tu(t, l), t.flags |= 4096;
      return t;
    }
    return e = va(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function au(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, a, l, n) {
    return bl(t), a = Dc(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = Mc(), e !== null && !at ? (Oc(e, t, n), ja(e, t, n)) : (Ce && l && dc(t), t.flags |= 1, ht(e, t, a, n), t.child);
  }
  function Tf(e, t, a, l, n, u) {
    return bl(t), t.updateQueue = null, a = zo(
      t,
      l,
      a,
      n
    ), Ao(e), l = Mc(), e !== null && !at ? (Oc(e, t, u), ja(e, t, u)) : (Ce && l && dc(t), t.flags |= 1, ht(e, t, a, u), t.child);
  }
  function Af(e, t, a, l, n) {
    if (bl(t), t.stateNode === null) {
      var u = Kl, s = a.contextType;
      typeof s == "object" && s !== null && (u = dt(s)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Jc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Ec(t), s = a.contextType, u.context = typeof s == "object" && s !== null ? dt(s) : Kl, u.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Kc(
        t,
        a,
        s,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Jc.enqueueReplaceState(u, u.state, null), Yn(t, l, u, n), Ln(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, m = _l(a, r);
      u.props = m;
      var _ = u.context, O = a.contextType;
      s = Kl, typeof O == "object" && O !== null && (s = dt(O));
      var H = a.getDerivedStateFromProps;
      O = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || _ !== s) && hf(
        t,
        u,
        l,
        s
      ), ka = !1;
      var z = t.memoizedState;
      u.state = z, Yn(t, l, u, n), Ln(), _ = t.memoizedState, r || z !== _ || ka ? (typeof H == "function" && (Kc(
        t,
        a,
        H,
        l
      ), _ = t.memoizedState), (m = ka || df(
        t,
        a,
        m,
        l,
        z,
        _,
        s
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = _), u.props = l, u.state = _, u.context = s, l = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Nc(e, t), s = t.memoizedProps, O = _l(a, s), u.props = O, H = t.pendingProps, z = u.context, _ = a.contextType, m = Kl, typeof _ == "object" && _ !== null && (m = dt(_)), r = a.getDerivedStateFromProps, (_ = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || z !== m) && hf(
        t,
        u,
        l,
        m
      ), ka = !1, z = t.memoizedState, u.state = z, Yn(t, l, u, n), Ln();
      var C = t.memoizedState;
      s !== H || z !== C || ka || e !== null && e.dependencies !== null && Hi(e.dependencies) ? (typeof r == "function" && (Kc(
        t,
        a,
        r,
        l
      ), C = t.memoizedState), (O = ka || df(
        t,
        a,
        O,
        l,
        z,
        C,
        m
      ) || e !== null && e.dependencies !== null && Hi(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, C, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        C,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = C), u.props = l, u.state = C, u.context = m, l = O) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, au(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = El(
      t,
      e.child,
      null,
      n
    ), t.child = El(
      t,
      null,
      a,
      n
    )) : ht(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = ja(
      e,
      t,
      n
    ), e;
  }
  function zf(e, t, a, l) {
    return gl(), t.flags |= 256, ht(e, t, a, l), t.child;
  }
  var Ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pc(e) {
    return { baseLanes: e, cachePool: yo() };
  }
  function es(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ht), e;
  }
  function Cf(e, t, a) {
    var l = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ce) {
        if (n ? Va(t) : Ga(), (e = Qe) ? (e = Hd(
          e,
          Kt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ra !== null ? { id: ia, overflow: ua } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = uo(e), a.return = t, t.child = a, ft = t, Qe = null)) : e = null, e === null) throw Ha(t);
        return qs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, n ? (Ga(), n = t.mode, r = lu(
        { mode: "hidden", children: r },
        n
      ), l = yl(
        l,
        n,
        a,
        null
      ), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = Pc(a), l.childLanes = es(
        e,
        s,
        a
      ), t.memoizedState = Ic, Zn(null, l)) : (Va(t), ts(t, r));
    }
    var m = e.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Va(t), t.flags &= -257, t = as(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Ga(), t.child = e.child, t.flags |= 128, t = null) : (Ga(), r = l.fallback, n = t.mode, l = lu(
          { mode: "visible", children: l.children },
          n
        ), r = yl(
          r,
          n,
          a,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, El(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Pc(a), l.childLanes = es(
          e,
          s,
          a
        ), t.memoizedState = Ic, t = Zn(null, l));
      else if (Va(t), qs(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var _ = s.dgst;
        s = _, l = Error(o(419)), l.stack = "", l.digest = s, Un({ value: l, source: null, stack: null }), t = as(
          e,
          t,
          a
        );
      } else if (at || Wl(e, t, a, !1), s = (a & e.childLanes) !== 0, at || s) {
        if (s = Ge, s !== null && (l = ce(s, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, vl(e, l), Ct(s, e, l), Fc;
        Rs(r) || du(), t = as(
          e,
          t,
          a
        );
      } else
        Rs(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Qe = $t(
          r.nextSibling
        ), ft = t, Ce = !0, qa = null, Kt = !1, e !== null && ro(t, e), t = ts(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Ga(), r = l.fallback, n = t.mode, m = e.child, _ = m.sibling, l = va(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, _ !== null ? r = va(
      _,
      r
    ) : (r = yl(
      r,
      n,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, Zn(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = Pc(a) : (n = r.cachePool, n !== null ? (m = et._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = yo(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: n
    }), l.memoizedState = r, l.childLanes = es(
      e,
      s,
      a
    ), t.memoizedState = Ic, Zn(e.child, l)) : (Va(t), a = e.child, e = a.sibling, a = va(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ts(e, t) {
    return t = lu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function lu(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function as(e, t, a) {
    return El(t, e.child, null, a), e = ts(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wf(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), gc(e.return, t, a);
  }
  function ls(e, t, a, l, n, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: u
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = a, s.tailMode = n, s.treeForkCount = u);
  }
  function Df(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, u = l.tail;
    l = l.children;
    var s = Fe.current, r = (s & 2) !== 0;
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, G(Fe, s), ht(e, t, l, a), l = Ce ? On : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && wf(e, a, t);
        else if (e.tag === 19)
          wf(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null; )
          e = a.alternate, e !== null && Qi(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), ls(
          t,
          !1,
          n,
          a,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Qi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        ls(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        ls(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ja(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Za |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Wl(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, a = va(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = va(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ns(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Hi(e)));
  }
  function Pm(e, t, a) {
    switch (t.tag) {
      case 3:
        Ie(t, t.stateNode.containerInfo), Ba(t, et, e.memoizedState.cache), gl();
        break;
      case 27:
      case 5:
        He(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ba(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Cc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Va(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cf(e, t, a) : (Va(t), e = ja(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Va(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Wl(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), n) {
          if (l)
            return Df(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), G(Fe, Fe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Ef(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Ba(t, et, e.memoizedState.cache);
    }
    return ja(e, t, a);
  }
  function Mf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        at = !0;
      else {
        if (!ns(e, a) && (t.flags & 128) === 0)
          return at = !1, Pm(
            e,
            t,
            a
          );
        at = (e.flags & 131072) !== 0;
      }
    else
      at = !1, Ce && (t.flags & 1048576) !== 0 && so(t, On, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = jl(t.elementType), t.type = e, typeof e == "function")
            rc(e) ? (l = _l(e, l), t.tag = 1, t = Af(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Wc(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === W) {
                t.tag = 11, t = xf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (n === K) {
                t.tag = 14, t = jf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = qe(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = _l(
          l,
          t.pendingProps
        ), Af(
          e,
          t,
          l,
          n,
          a
        );
      case 3:
        e: {
          if (Ie(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Nc(e, t), Yn(t, l, null, a);
          var s = t.memoizedState;
          if (l = s.cache, Ba(t, et, l), l !== u.cache && pc(
            t,
            [et],
            a,
            !0
          ), Ln(), l = s.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = zf(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== n) {
              n = Xt(
                Error(o(424)),
                t
              ), Un(n), t = zf(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Qe = $t(e.firstChild), ft = t, Ce = !0, qa = null, Kt = !0, a = So(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (gl(), l === n) {
              t = ja(
                e,
                t,
                a
              );
              break e;
            }
            ht(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return au(e, t), e === null ? (a = Gd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ce || (a = t.type, e = t.pendingProps, l = bu(
          be.current
        ).createElement(a), l[Xe] = t, l[Et] = e, mt(l, a, e), ct(l), t.stateNode = l) : t.memoizedState = Gd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return He(t), e === null && Ce && (l = t.stateNode = Ld(
          t.type,
          t.pendingProps,
          be.current
        ), ft = t, Kt = !0, n = Qe, Wa(t.type) ? (Hs = n, Qe = $t(l.firstChild)) : Qe = n), ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), au(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ce && ((n = l = Qe) && (l = Cv(
          l,
          t.type,
          t.pendingProps,
          Kt
        ), l !== null ? (t.stateNode = l, ft = t, Qe = $t(l.firstChild), Kt = !1, n = !0) : n = !1), n || Ha(t)), He(t), n = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = u.children, Ms(n, u) ? l = null : s !== null && Ms(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Dc(
          e,
          t,
          Xm,
          null,
          null,
          a
        ), ci._currentValue = n), au(e, t), ht(e, t, l, a), t.child;
      case 6:
        return e === null && Ce && ((e = a = Qe) && (a = wv(
          a,
          t.pendingProps,
          Kt
        ), a !== null ? (t.stateNode = a, ft = t, Qe = null, e = !0) : e = !1), e || Ha(t)), null;
      case 13:
        return Cf(e, t, a);
      case 4:
        return Ie(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = El(
          t,
          null,
          l,
          a
        ) : ht(e, t, l, a), t.child;
      case 11:
        return xf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return ht(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Ba(t, t.type, l.value), ht(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, bl(t), n = dt(n), l = l(n), t.flags |= 1, ht(e, t, l, a), t.child;
      case 14:
        return jf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Sf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Df(e, t, a);
      case 31:
        return Im(e, t, a);
      case 22:
        return Ef(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return bl(t), l = dt(et), e === null ? (n = jc(), n === null && (n = Ge, u = bc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = { parent: l, cache: n }, Ec(t), Ba(t, et, n)) : ((e.lanes & a) !== 0 && (Nc(e, t), Yn(t, null, null, a), Ln()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Ba(t, et, l)) : (l = u.cache, Ba(t, et, l), l !== n.cache && pc(
          t,
          [et],
          a,
          !0
        ))), ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Sa(e) {
    e.flags |= 4;
  }
  function is(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (id()) e.flags |= 8192;
        else
          throw Sl = Yi, Sc;
    } else e.flags &= -16777217;
  }
  function Of(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jd(t))
      if (id()) e.flags |= 8192;
      else
        throw Sl = Yi, Sc;
  }
  function nu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xi() : 536870912, e.lanes |= t, on |= t);
  }
  function Kn(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function ev(e, t, a) {
    var l = t.pendingProps;
    switch (hc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ze(t), null;
      case 1:
        return Ze(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), pa(et), Y(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Fl(t) ? Sa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vc())), Ze(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (Sa(t), u !== null ? (Ze(t), Of(t, u)) : (Ze(t), is(
          t,
          n,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (Sa(t), Ze(t), Of(t, u)) : (Ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Sa(t), Ze(t), is(
          t,
          n,
          e,
          l,
          a
        )), null;
      case 27:
        if (ye(t), a = be.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ze(t), null;
          }
          e = F.current, Fl(t) ? oo(t) : (e = Ld(n, l, a), t.stateNode = e, Sa(t));
        }
        return Ze(t), null;
      case 5:
        if (ye(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ze(t), null;
          }
          if (u = F.current, Fl(t))
            oo(t);
          else {
            var s = bu(
              be.current
            );
            switch (u) {
              case 1:
                u = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = s.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? s.createElement(n, { is: l.is }) : s.createElement(n);
                }
            }
            u[Xe] = t, u[Et] = l;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                u.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = u;
            e: switch (mt(u, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Sa(t);
          }
        }
        return Ze(t), is(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = be.current, Fl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = ft, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[Xe] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Cd(e.nodeValue, a)), e || Ha(t, !0);
          } else
            e = bu(e).createTextNode(
              l
            ), e[Xe] = t, t.stateNode = e;
        }
        return Ze(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Fl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Xe] = t;
            } else
              gl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), e = !1;
          } else
            a = vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Ze(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Fl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[Xe] = t;
            } else
              gl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), n = !1;
          } else
            n = vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return Rt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), nu(t, t.updateQueue), Ze(t), null);
      case 4:
        return Y(), e === null && As(t.stateNode.containerInfo), Ze(t), null;
      case 10:
        return pa(t.type), Ze(t), null;
      case 19:
        if (D(Fe), l = t.memoizedState, l === null) return Ze(t), null;
        if (n = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (n) Kn(l, !1);
          else {
            if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Qi(e), u !== null) {
                  for (t.flags |= 128, Kn(l, !1), e = u.updateQueue, t.updateQueue = e, nu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    io(a, e), a = a.sibling;
                  return G(
                    Fe,
                    Fe.current & 1 | 2
                  ), Ce && ya(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && De() > ru && (t.flags |= 128, n = !0, Kn(l, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Qi(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, nu(t, e), Kn(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !Ce)
                return Ze(t), null;
            } else
              2 * De() - l.renderingStartTime > ru && a !== 536870912 && (t.flags |= 128, n = !0, Kn(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = De(), e.sibling = null, a = Fe.current, G(
          Fe,
          n ? a & 1 | 2 : a & 1
        ), Ce && ya(t, l.treeForkCount), e) : (Ze(t), null);
      case 22:
      case 23:
        return Rt(t), zc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), a = t.updateQueue, a !== null && nu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && D(xl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pa(et), Ze(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function tv(e, t) {
    switch (hc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pa(et), Y(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ye(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Rt(t), t.alternate === null)
            throw Error(o(340));
          gl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          gl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(Fe), null;
      case 4:
        return Y(), null;
      case 10:
        return pa(t.type), null;
      case 22:
      case 23:
        return Rt(t), zc(), e !== null && D(xl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return pa(et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Uf(e, t) {
    switch (hc(t), t.tag) {
      case 3:
        pa(et), Y();
        break;
      case 26:
      case 27:
      case 5:
        ye(t);
        break;
      case 4:
        Y();
        break;
      case 31:
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        D(Fe);
        break;
      case 10:
        pa(t.type);
        break;
      case 22:
      case 23:
        Rt(t), zc(), e !== null && D(xl);
        break;
      case 24:
        pa(et);
    }
  }
  function Jn(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var u = a.create, s = a.inst;
            l = u(), s.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (r) {
      ke(t, t.return, r);
    }
  }
  function Xa(e, t, a) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst, r = s.destroy;
            if (r !== void 0) {
              s.destroy = void 0, n = t;
              var m = a, _ = r;
              try {
                _();
              } catch (O) {
                ke(
                  n,
                  m,
                  O
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (O) {
      ke(t, t.return, O);
    }
  }
  function Rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        No(t, a);
      } catch (l) {
        ke(e, e.return, l);
      }
    }
  }
  function qf(e, t, a) {
    a.props = _l(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function $n(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      ke(e, t, n);
    }
  }
  function ca(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          ke(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          ke(e, t, n);
        }
      else a.current = null;
  }
  function Hf(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      ke(e, e.return, n);
    }
  }
  function us(e, t, a) {
    try {
      var l = e.stateNode;
      Ev(l, e.type, a, t), l[Et] = t;
    } catch (n) {
      ke(e, e.return, n);
    }
  }
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wa(e.type) || e.tag === 4;
  }
  function cs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Wa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ss(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ha));
    else if (l !== 4 && (l === 27 && Wa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (ss(e, t, a), e = e.sibling; e !== null; )
        ss(e, t, a), e = e.sibling;
  }
  function iu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Wa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (iu(e, t, a), e = e.sibling; e !== null; )
        iu(e, t, a), e = e.sibling;
  }
  function kf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      mt(t, l, a), t[Xe] = e, t[Et] = a;
    } catch (u) {
      ke(e, e.return, u);
    }
  }
  var Ea = !1, lt = !1, rs = !1, Lf = typeof WeakSet == "function" ? WeakSet : Set, st = null;
  function av(e, t) {
    if (e = e.containerInfo, ws = Tu, e = Fr(e), ac(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break e;
            }
            var s = 0, r = -1, m = -1, _ = 0, O = 0, H = e, z = null;
            t: for (; ; ) {
              for (var C; H !== a || n !== 0 && H.nodeType !== 3 || (r = s + n), H !== u || l !== 0 && H.nodeType !== 3 || (m = s + l), H.nodeType === 3 && (s += H.nodeValue.length), (C = H.firstChild) !== null; )
                z = H, H = C;
              for (; ; ) {
                if (H === e) break t;
                if (z === a && ++_ === n && (r = s), z === u && ++O === l && (m = s), (C = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = C;
            }
            a = r === -1 || m === -1 ? null : { start: r, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ds = { focusedElem: e, selectionRange: a }, Tu = !1, st = t; st !== null; )
      if (t = st, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, st = e;
      else
        for (; st !== null; ) {
          switch (t = st, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  n = e[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, a = t, n = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
                try {
                  var te = _l(
                    a.type,
                    n
                  );
                  e = l.getSnapshotBeforeUpdate(
                    te,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  ke(
                    a,
                    a.return,
                    me
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Us(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Us(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, st = e;
            break;
          }
          st = t.return;
        }
  }
  function Yf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        _a(e, a), l & 4 && Jn(5, a);
        break;
      case 1:
        if (_a(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              ke(a, a.return, s);
            }
          else {
            var n = _l(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              ke(
                a,
                a.return,
                s
              );
            }
          }
        l & 64 && Rf(a), l & 512 && $n(a, a.return);
        break;
      case 3:
        if (_a(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            No(e, t);
          } catch (s) {
            ke(a, a.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && kf(a);
      case 26:
      case 5:
        _a(e, a), t === null && l & 4 && Hf(a), l & 512 && $n(a, a.return);
        break;
      case 12:
        _a(e, a);
        break;
      case 31:
        _a(e, a), l & 4 && Xf(e, a);
        break;
      case 13:
        _a(e, a), l & 4 && Qf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = fv.bind(
          null,
          a
        ), Dv(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Ea, !l) {
          t = t !== null && t.memoizedState !== null || lt, n = Ea;
          var u = lt;
          Ea = l, (lt = t) && !u ? Ta(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : _a(e, a), Ea = n, lt = u;
        }
        break;
      case 30:
        break;
      default:
        _a(e, a);
    }
  }
  function Vf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ku(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, _t = !1;
  function Na(e, t, a) {
    for (a = a.child; a !== null; )
      Gf(e, t, a), a = a.sibling;
  }
  function Gf(e, t, a) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(cl, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || ca(a, t), Na(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || ca(a, t);
        var l = Ke, n = _t;
        Wa(a.type) && (Ke = a.stateNode, _t = !1), Na(
          e,
          t,
          a
        ), ni(a.stateNode), Ke = l, _t = n;
        break;
      case 5:
        lt || ca(a, t);
      case 6:
        if (l = Ke, n = _t, Ke = null, Na(
          e,
          t,
          a
        ), Ke = l, _t = n, Ke !== null)
          if (_t)
            try {
              (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(a.stateNode);
            } catch (u) {
              ke(
                a,
                t,
                u
              );
            }
          else
            try {
              Ke.removeChild(a.stateNode);
            } catch (u) {
              ke(
                a,
                t,
                u
              );
            }
        break;
      case 18:
        Ke !== null && (_t ? (e = Ke, Rd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), pn(e)) : Rd(Ke, a.stateNode));
        break;
      case 4:
        l = Ke, n = _t, Ke = a.stateNode.containerInfo, _t = !0, Na(
          e,
          t,
          a
        ), Ke = l, _t = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xa(2, a, t), lt || Xa(4, a, t), Na(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (ca(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && qf(
          a,
          t,
          l
        )), Na(
          e,
          t,
          a
        );
        break;
      case 21:
        Na(
          e,
          t,
          a
        );
        break;
      case 22:
        lt = (l = lt) || a.memoizedState !== null, Na(
          e,
          t,
          a
        ), lt = l;
        break;
      default:
        Na(
          e,
          t,
          a
        );
    }
  }
  function Xf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        pn(e);
      } catch (a) {
        ke(t, t.return, a);
      }
    }
  }
  function Qf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        pn(e);
      } catch (a) {
        ke(t, t.return, a);
      }
  }
  function lv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Lf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lf()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function uu(e, t) {
    var a = lv(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = dv.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Tt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], u = e, s = t, r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Wa(r.type)) {
                Ke = r.stateNode, _t = !1;
                break e;
              }
              break;
            case 5:
              Ke = r.stateNode, _t = !1;
              break e;
            case 3:
            case 4:
              Ke = r.stateNode.containerInfo, _t = !0;
              break e;
          }
          r = r.return;
        }
        if (Ke === null) throw Error(o(160));
        Gf(u, s, n), Ke = null, _t = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Zf(t, e), t = t.sibling;
  }
  var ea = null;
  function Zf(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), At(e), l & 4 && (Xa(3, e, e.return), Jn(3, e), Xa(5, e, e.return));
        break;
      case 1:
        Tt(t, e), At(e), l & 512 && (lt || a === null || ca(a, a.return)), l & 64 && Ea && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = ea;
        if (Tt(t, e), At(e), l & 512 && (lt || a === null || ca(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Sn] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), mt(u, l, a), u[Xe] = e, ct(u), l = u;
                      break e;
                    case "link":
                      var s = Zd(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (s) {
                        for (var r = 0; r < s.length; r++)
                          if (u = s[r], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            s.splice(r, 1);
                            break t;
                          }
                      }
                      u = n.createElement(l), mt(u, l, a), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (s = Zd(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (r = 0; r < s.length; r++)
                          if (u = s[r], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            s.splice(r, 1);
                            break t;
                          }
                      }
                      u = n.createElement(l), mt(u, l, a), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  u[Xe] = e, ct(u), l = u;
                }
                e.stateNode = l;
              } else
                Kd(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qd(
                n,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? Kd(
              n,
              e.type,
              e.stateNode
            ) : Qd(
              n,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && us(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), At(e), l & 512 && (lt || a === null || ca(a, a.return)), a !== null && l & 4 && us(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), At(e), l & 512 && (lt || a === null || ca(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Ll(n, "");
          } catch (te) {
            ke(e, e.return, te);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, us(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (rs = !0);
        break;
      case 6:
        if (Tt(t, e), At(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (te) {
            ke(e, e.return, te);
          }
        }
        break;
      case 3:
        if (Su = null, n = ea, ea = xu(t.containerInfo), Tt(t, e), ea = n, At(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            pn(t.containerInfo);
          } catch (te) {
            ke(e, e.return, te);
          }
        rs && (rs = !1, Kf(e));
        break;
      case 4:
        l = ea, ea = xu(
          e.stateNode.containerInfo
        ), Tt(t, e), At(e), ea = l;
        break;
      case 12:
        Tt(t, e), At(e);
        break;
      case 31:
        Tt(t, e), At(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, uu(e, l)));
        break;
      case 13:
        Tt(t, e), At(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (su = De()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, uu(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, _ = Ea, O = lt;
        if (Ea = _ || n, lt = O || m, Tt(t, e), lt = O, Ea = _, At(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || m || Ea || lt || Tl(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                m = a = t;
                try {
                  if (u = m.stateNode, n)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    r = m.stateNode;
                    var H = m.memoizedProps.style, z = H != null && H.hasOwnProperty("display") ? H.display : null;
                    r.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (te) {
                  ke(m, m.return, te);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (te) {
                  ke(m, m.return, te);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                m = t;
                try {
                  var C = m.stateNode;
                  n ? qd(C, !0) : qd(m.stateNode, !1);
                } catch (te) {
                  ke(m, m.return, te);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, uu(e, a))));
        break;
      case 19:
        Tt(t, e), At(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, uu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tt(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Bf(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, u = cs(e);
            iu(e, u, n);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (Ll(s, ""), a.flags &= -33);
            var r = cs(e);
            iu(e, r, s);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, _ = cs(e);
            ss(
              e,
              _,
              m
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (O) {
        ke(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Kf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function _a(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Yf(e, t.alternate, t), t = t.sibling;
  }
  function Tl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xa(4, t, t.return), Tl(t);
          break;
        case 1:
          ca(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && qf(
            t,
            t.return,
            a
          ), Tl(t);
          break;
        case 27:
          ni(t.stateNode);
        case 26:
        case 5:
          ca(t, t.return), Tl(t);
          break;
        case 22:
          t.memoizedState === null && Tl(t);
          break;
        case 30:
          Tl(t);
          break;
        default:
          Tl(t);
      }
      e = e.sibling;
    }
  }
  function Ta(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ta(
            n,
            u,
            a
          ), Jn(4, u);
          break;
        case 1:
          if (Ta(
            n,
            u,
            a
          ), l = u, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (_) {
              ke(l, l.return, _);
            }
          if (l = u, n = l.updateQueue, n !== null) {
            var r = l.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  Eo(m[n], r);
            } catch (_) {
              ke(l, l.return, _);
            }
          }
          a && s & 64 && Rf(u), $n(u, u.return);
          break;
        case 27:
          kf(u);
        case 26:
        case 5:
          Ta(
            n,
            u,
            a
          ), a && l === null && s & 4 && Hf(u), $n(u, u.return);
          break;
        case 12:
          Ta(
            n,
            u,
            a
          );
          break;
        case 31:
          Ta(
            n,
            u,
            a
          ), a && s & 4 && Xf(n, u);
          break;
        case 13:
          Ta(
            n,
            u,
            a
          ), a && s & 4 && Qf(n, u);
          break;
        case 22:
          u.memoizedState === null && Ta(
            n,
            u,
            a
          ), $n(u, u.return);
          break;
        case 30:
          break;
        default:
          Ta(
            n,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function os(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Rn(a));
  }
  function fs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Rn(e));
  }
  function ta(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Jf(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Jf(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ta(
          e,
          t,
          a,
          l
        ), n & 2048 && Jn(9, t);
        break;
      case 1:
        ta(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        ta(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Rn(e)));
        break;
      case 12:
        if (n & 2048) {
          ta(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, s = u.id, r = u.onPostCommit;
            typeof r == "function" && r(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (m) {
            ke(t, t.return, m);
          }
        } else
          ta(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        ta(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        ta(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? ta(
          e,
          t,
          a,
          l
        ) : Fn(e, t) : u._visibility & 2 ? ta(
          e,
          t,
          a,
          l
        ) : (u._visibility |= 2, cn(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && os(s, t);
        break;
      case 24:
        ta(
          e,
          t,
          a,
          l
        ), n & 2048 && fs(t.alternate, t);
        break;
      default:
        ta(
          e,
          t,
          a,
          l
        );
    }
  }
  function cn(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, r = a, m = l, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          cn(
            u,
            s,
            r,
            m,
            n
          ), Jn(8, s);
          break;
        case 23:
          break;
        case 22:
          var O = s.stateNode;
          s.memoizedState !== null ? O._visibility & 2 ? cn(
            u,
            s,
            r,
            m,
            n
          ) : Fn(
            u,
            s
          ) : (O._visibility |= 2, cn(
            u,
            s,
            r,
            m,
            n
          )), n && _ & 2048 && os(
            s.alternate,
            s
          );
          break;
        case 24:
          cn(
            u,
            s,
            r,
            m,
            n
          ), n && _ & 2048 && fs(s.alternate, s);
          break;
        default:
          cn(
            u,
            s,
            r,
            m,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Fn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            Fn(a, l), n & 2048 && os(
              l.alternate,
              l
            );
            break;
          case 24:
            Fn(a, l), n & 2048 && fs(l.alternate, l);
            break;
          default:
            Fn(a, l);
        }
        t = t.sibling;
      }
  }
  var Wn = 8192;
  function sn(e, t, a) {
    if (e.subtreeFlags & Wn)
      for (e = e.child; e !== null; )
        $f(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function $f(e, t, a) {
    switch (e.tag) {
      case 26:
        sn(
          e,
          t,
          a
        ), e.flags & Wn && e.memoizedState !== null && Gv(
          a,
          ea,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        sn(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = ea;
        ea = xu(e.stateNode.containerInfo), sn(
          e,
          t,
          a
        ), ea = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Wn, Wn = 16777216, sn(
          e,
          t,
          a
        ), Wn = l) : sn(
          e,
          t,
          a
        ));
        break;
      default:
        sn(
          e,
          t,
          a
        );
    }
  }
  function Ff(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function In(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          st = l, If(
            l,
            e
          );
        }
      Ff(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Wf(e), e = e.sibling;
  }
  function Wf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        In(e), e.flags & 2048 && Xa(9, e, e.return);
        break;
      case 3:
        In(e);
        break;
      case 12:
        In(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, cu(e)) : In(e);
        break;
      default:
        In(e);
    }
  }
  function cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          st = l, If(
            l,
            e
          );
        }
      Ff(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Xa(8, t, t.return), cu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, cu(t));
          break;
        default:
          cu(t);
      }
      e = e.sibling;
    }
  }
  function If(e, t) {
    for (; st !== null; ) {
      var a = st;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Rn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, st = l;
      else
        e: for (a = e; st !== null; ) {
          l = st;
          var n = l.sibling, u = l.return;
          if (Vf(l), l === a) {
            st = null;
            break e;
          }
          if (n !== null) {
            n.return = u, st = n;
            break e;
          }
          st = u;
        }
    }
  }
  var nv = {
    getCacheForType: function(e) {
      var t = dt(et), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return dt(et).controller.signal;
    }
  }, iv = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, Ge = null, Ne = null, Ae = 0, Be = 0, qt = null, Qa = !1, rn = !1, ds = !1, Aa = 0, $e = 0, Za = 0, Al = 0, hs = 0, Ht = 0, on = 0, Pn = null, zt = null, ms = !1, su = 0, Pf = 0, ru = 1 / 0, ou = null, Ka = null, nt = 0, Ja = null, fn = null, za = 0, vs = 0, ys = null, ed = null, ei = 0, gs = null;
  function Bt() {
    return (Re & 2) !== 0 && Ae !== 0 ? Ae & -Ae : g.T !== null ? Es() : fe();
  }
  function td() {
    if (Ht === 0)
      if ((Ae & 536870912) === 0 || Ce) {
        var e = oa;
        oa <<= 1, (oa & 3932160) === 0 && (oa = 262144), Ht = e;
      } else Ht = 536870912;
    return e = Ut.current, e !== null && (e.flags |= 32), Ht;
  }
  function Ct(e, t, a) {
    (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (dn(e, 0), $a(
      e,
      Ae,
      Ht,
      !1
    )), ol(e, a), ((Re & 2) === 0 || e !== Ge) && (e === Ge && ((Re & 2) === 0 && (Al |= a), $e === 4 && $a(
      e,
      Ae,
      Ht,
      !1
    )), sa(e));
  }
  function ad(e, t, a) {
    if ((Re & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || rl(e, t), n = l ? sv(e, t) : bs(e, t, !0), u = l;
    do {
      if (n === 0) {
        rn && !l && $a(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !uv(a)) {
          n = bs(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var r = e;
              n = Pn;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (dn(r, s).flags |= 256), s = bs(
                r,
                s,
                !1
              ), s !== 2) {
                if (ds && !m) {
                  r.errorRecoveryDisabledLanes |= u, Al |= u, n = 4;
                  break e;
                }
                u = zt, zt = n, u !== null && (zt === null ? zt = u : zt.push.apply(
                  zt,
                  u
                ));
              }
              n = s;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          dn(e, 0), $a(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = n, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              $a(
                l,
                t,
                Ht,
                !Qa
              );
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = su + 300 - De(), 10 < n)) {
            if ($a(
              l,
              t,
              Ht,
              !Qa
            ), Oa(l, 0, !0) !== 0) break e;
            za = t, l.timeoutHandle = Od(
              ld.bind(
                null,
                l,
                a,
                zt,
                ou,
                ms,
                t,
                Ht,
                Al,
                on,
                Qa,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          ld(
            l,
            a,
            zt,
            ou,
            ms,
            t,
            Ht,
            Al,
            on,
            Qa,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    sa(e);
  }
  function ld(e, t, a, l, n, u, s, r, m, _, O, H, z, C) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ha
      }, $f(
        t,
        u,
        H
      );
      var te = (u & 62914560) === u ? su - De() : (u & 4194048) === u ? Pf - De() : 0;
      if (te = Xv(
        H,
        te
      ), te !== null) {
        za = u, e.cancelPendingCommit = te(
          fd.bind(
            null,
            e,
            t,
            u,
            a,
            l,
            n,
            s,
            r,
            m,
            O,
            H,
            null,
            z,
            C
          )
        ), $a(e, u, s, !_);
        return;
      }
    }
    fd(
      e,
      t,
      u,
      a,
      l,
      n,
      s,
      r,
      m
    );
  }
  function uv(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Mt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function $a(e, t, a, l) {
    t &= ~hs, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - ut(n), s = 1 << u;
      l[u] = -1, n &= ~s;
    }
    a !== 0 && X(e, a, t);
  }
  function fu() {
    return (Re & 6) === 0 ? (ti(0), !1) : !0;
  }
  function ps() {
    if (Ne !== null) {
      if (Be === 0)
        var e = Ne.return;
      else
        e = Ne, ga = pl = null, Uc(e), tn = null, Hn = 0, e = Ne;
      for (; e !== null; )
        Uf(e.alternate, e), e = e.return;
      Ne = null;
    }
  }
  function dn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Tv(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), za = 0, ps(), Ge = e, Ne = a = va(e.current, null), Ae = t, Be = 0, qt = null, Qa = !1, rn = rl(e, t), ds = !1, on = Ht = hs = Al = Za = $e = 0, zt = Pn = null, ms = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - ut(l), u = 1 << n;
        t |= e[n], l &= ~u;
      }
    return Aa = t, Mi(), a;
  }
  function nd(e, t) {
    xe = null, g.H = Qn, t === en || t === Li ? (t = bo(), Be = 3) : t === Sc ? (t = bo(), Be = 4) : Be = t === Fc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, Ne === null && ($e = 1, eu(
      e,
      Xt(t, e.current)
    ));
  }
  function id() {
    var e = Ut.current;
    return e === null ? !0 : (Ae & 4194048) === Ae ? Jt === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === Jt : !1;
  }
  function ud() {
    var e = g.H;
    return g.H = Qn, e === null ? Qn : e;
  }
  function cd() {
    var e = g.A;
    return g.A = nv, e;
  }
  function du() {
    $e = 4, Qa || (Ae & 4194048) !== Ae && Ut.current !== null || (rn = !0), (Za & 134217727) === 0 && (Al & 134217727) === 0 || Ge === null || $a(
      Ge,
      Ae,
      Ht,
      !1
    );
  }
  function bs(e, t, a) {
    var l = Re;
    Re |= 2;
    var n = ud(), u = cd();
    (Ge !== e || Ae !== t) && (ou = null, dn(e, t)), t = !1;
    var s = $e;
    e: do
      try {
        if (Be !== 0 && Ne !== null) {
          var r = Ne, m = qt;
          switch (Be) {
            case 8:
              ps(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var _ = Be;
              if (Be = 0, qt = null, hn(e, r, m, _), a && rn) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Be, Be = 0, qt = null, hn(e, r, m, _);
          }
        }
        cv(), s = $e;
        break;
      } catch (O) {
        nd(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ga = pl = null, Re = l, g.H = n, g.A = u, Ne === null && (Ge = null, Ae = 0, Mi()), s;
  }
  function cv() {
    for (; Ne !== null; ) sd(Ne);
  }
  function sv(e, t) {
    var a = Re;
    Re |= 2;
    var l = ud(), n = cd();
    Ge !== e || Ae !== t ? (ou = null, ru = De() + 500, dn(e, t)) : rn = rl(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && Ne !== null) {
          t = Ne;
          var u = qt;
          t: switch (Be) {
            case 1:
              Be = 0, qt = null, hn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (go(u)) {
                Be = 0, qt = null, rd(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ge !== e || (Be = 7), sa(e);
              }, u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              go(u) ? (Be = 0, qt = null, rd(t)) : (Be = 0, qt = null, hn(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (Ne.tag) {
                case 26:
                  s = Ne.memoizedState;
                case 5:
                case 27:
                  var r = Ne;
                  if (s ? Jd(s) : r.stateNode.complete) {
                    Be = 0, qt = null;
                    var m = r.sibling;
                    if (m !== null) Ne = m;
                    else {
                      var _ = r.return;
                      _ !== null ? (Ne = _, hu(_)) : Ne = null;
                    }
                    break t;
                  }
              }
              Be = 0, qt = null, hn(e, t, u, 5);
              break;
            case 6:
              Be = 0, qt = null, hn(e, t, u, 6);
              break;
            case 8:
              ps(), $e = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        rv();
        break;
      } catch (O) {
        nd(e, O);
      }
    while (!0);
    return ga = pl = null, g.H = l, g.A = n, Re = a, Ne !== null ? 0 : (Ge = null, Ae = 0, Mi(), $e);
  }
  function rv() {
    for (; Ne !== null && !Da(); )
      sd(Ne);
  }
  function sd(e) {
    var t = Mf(e.alternate, e, Aa);
    e.memoizedProps = e.pendingProps, t === null ? hu(e) : Ne = t;
  }
  function rd(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Tf(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ae
        );
        break;
      case 11:
        t = Tf(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ae
        );
        break;
      case 5:
        Uc(t);
      default:
        Uf(a, t), t = Ne = io(t, Aa), t = Mf(a, t, Aa);
    }
    e.memoizedProps = e.pendingProps, t === null ? hu(e) : Ne = t;
  }
  function hn(e, t, a, l) {
    ga = pl = null, Uc(t), tn = null, Hn = 0;
    var n = t.return;
    try {
      if (Wm(
        e,
        n,
        t,
        a,
        Ae
      )) {
        $e = 1, eu(
          e,
          Xt(a, e.current)
        ), Ne = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw Ne = n, u;
      $e = 1, eu(
        e,
        Xt(a, e.current)
      ), Ne = null;
      return;
    }
    t.flags & 32768 ? (Ce || l === 1 ? e = !0 : rn || (Ae & 536870912) !== 0 ? e = !1 : (Qa = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ut.current, l !== null && l.tag === 13 && (l.flags |= 16384))), od(t, e)) : hu(t);
  }
  function hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        od(
          t,
          Qa
        );
        return;
      }
      e = t.return;
      var a = ev(
        t.alternate,
        t,
        Aa
      );
      if (a !== null) {
        Ne = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function od(e, t) {
    do {
      var a = tv(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ne = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ne = e;
        return;
      }
      Ne = e = a;
    } while (e !== null);
    $e = 6, Ne = null;
  }
  function fd(e, t, a, l, n, u, s, r, m) {
    e.cancelPendingCommit = null;
    do
      mu();
    while (nt !== 0);
    if ((Re & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= cc, M(
        e,
        a,
        u,
        s,
        r,
        m
      ), e === Ge && (Ne = Ge = null, Ae = 0), fn = t, Ja = e, za = a, vs = u, ys = n, ed = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, hv(Ml, function() {
        return yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = g.T, g.T = null, n = B.p, B.p = 2, s = Re, Re |= 4;
        try {
          av(e, t, a);
        } finally {
          Re = s, B.p = n, g.T = l;
        }
      }
      nt = 1, dd(), hd(), md();
    }
  }
  function dd() {
    if (nt === 1) {
      nt = 0;
      var e = Ja, t = fn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null;
        var l = B.p;
        B.p = 2;
        var n = Re;
        Re |= 4;
        try {
          Zf(t, e);
          var u = Ds, s = Fr(e.containerInfo), r = u.focusedElem, m = u.selectionRange;
          if (s !== r && r && r.ownerDocument && $r(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && ac(r)) {
              var _ = m.start, O = m.end;
              if (O === void 0 && (O = _), "selectionStart" in r)
                r.selectionStart = _, r.selectionEnd = Math.min(
                  O,
                  r.value.length
                );
              else {
                var H = r.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var C = z.getSelection(), te = r.textContent.length, me = Math.min(m.start, te), Ve = m.end === void 0 ? me : Math.min(m.end, te);
                  !C.extend && me > Ve && (s = Ve, Ve = me, me = s);
                  var x = Jr(
                    r,
                    me
                  ), y = Jr(
                    r,
                    Ve
                  );
                  if (x && y && (C.rangeCount !== 1 || C.anchorNode !== x.node || C.anchorOffset !== x.offset || C.focusNode !== y.node || C.focusOffset !== y.offset)) {
                    var N = H.createRange();
                    N.setStart(x.node, x.offset), C.removeAllRanges(), me > Ve ? (C.addRange(N), C.extend(y.node, y.offset)) : (N.setEnd(y.node, y.offset), C.addRange(N));
                  }
                }
              }
            }
            for (H = [], C = r; C = C.parentNode; )
              C.nodeType === 1 && H.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < H.length; r++) {
              var R = H[r];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          Tu = !!ws, Ds = ws = null;
        } finally {
          Re = n, B.p = l, g.T = a;
        }
      }
      e.current = t, nt = 2;
    }
  }
  function hd() {
    if (nt === 2) {
      nt = 0;
      var e = Ja, t = fn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = g.T, g.T = null;
        var l = B.p;
        B.p = 2;
        var n = Re;
        Re |= 4;
        try {
          Yf(e, t.alternate, t);
        } finally {
          Re = n, B.p = l, g.T = a;
        }
      }
      nt = 3;
    }
  }
  function md() {
    if (nt === 4 || nt === 3) {
      nt = 0, Dl();
      var e = Ja, t = fn, a = za, l = ed;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? nt = 5 : (nt = 0, fn = Ja = null, vd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ka = null), Te(a), t = t.stateNode, ot && typeof ot.onCommitFiberRoot == "function")
        try {
          ot.onCommitFiberRoot(
            cl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = g.T, n = B.p, B.p = 2, g.T = null;
        try {
          for (var u = e.onRecoverableError, s = 0; s < l.length; s++) {
            var r = l[s];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          g.T = t, B.p = n;
        }
      }
      (za & 3) !== 0 && mu(), sa(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === gs ? ei++ : (ei = 0, gs = e) : ei = 0, ti(0);
    }
  }
  function vd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Rn(t)));
  }
  function mu() {
    return dd(), hd(), md(), yd();
  }
  function yd() {
    if (nt !== 5) return !1;
    var e = Ja, t = vs;
    vs = 0;
    var a = Te(za), l = g.T, n = B.p;
    try {
      B.p = 32 > a ? 32 : a, g.T = null, a = ys, ys = null;
      var u = Ja, s = za;
      if (nt = 0, fn = Ja = null, za = 0, (Re & 6) !== 0) throw Error(o(331));
      var r = Re;
      if (Re |= 4, Wf(u.current), Jf(
        u,
        u.current,
        s,
        a
      ), Re = r, ti(0, !1), ot && typeof ot.onPostCommitFiberRoot == "function")
        try {
          ot.onPostCommitFiberRoot(cl, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = n, g.T = l, vd(e, t);
    }
  }
  function gd(e, t, a) {
    t = Xt(a, t), t = $c(e.stateNode, t, 2), e = Ya(e, t, 2), e !== null && (ol(e, 2), sa(e));
  }
  function ke(e, t, a) {
    if (e.tag === 3)
      gd(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gd(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ka === null || !Ka.has(l))) {
            e = Xt(a, e), a = pf(2), l = Ya(t, a, 2), l !== null && (bf(
              a,
              l,
              t,
              e
            ), ol(l, 2), sa(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function xs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new iv();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (ds = !0, n.add(a), e = ov.bind(null, e, t, a), t.then(e, e));
  }
  function ov(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ge === e && (Ae & a) === a && ($e === 4 || $e === 3 && (Ae & 62914560) === Ae && 300 > De() - su ? (Re & 2) === 0 && dn(e, 0) : hs |= a, on === Ae && (on = 0)), sa(e);
  }
  function pd(e, t) {
    t === 0 && (t = xi()), e = vl(e, t), e !== null && (ol(e, t), sa(e));
  }
  function fv(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), pd(e, a);
  }
  function dv(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), pd(e, a);
  }
  function hv(e, t) {
    return jt(e, t);
  }
  var vu = null, mn = null, js = !1, yu = !1, Ss = !1, Fa = 0;
  function sa(e) {
    e !== mn && e.next === null && (mn === null ? vu = mn = e : mn = mn.next = e), yu = !0, js || (js = !0, vv());
  }
  function ti(e, t) {
    if (!Ss && yu) {
      Ss = !0;
      do
        for (var a = !1, l = vu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var s = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - ut(42 | e) + 1) - 1, u &= n & ~(s & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Sd(l, u));
          } else
            u = Ae, u = Oa(
              l,
              l === Ge ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || rl(l, u) || (a = !0, Sd(l, u));
          l = l.next;
        }
      while (a);
      Ss = !1;
    }
  }
  function mv() {
    bd();
  }
  function bd() {
    yu = js = !1;
    var e = 0;
    Fa !== 0 && _v() && (e = Fa);
    for (var t = De(), a = null, l = vu; l !== null; ) {
      var n = l.next, u = xd(l, t);
      u === 0 ? (l.next = null, a === null ? vu = n : a.next = n, n === null && (mn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (yu = !0)), l = n;
    }
    nt !== 0 && nt !== 5 || ti(e), Fa !== 0 && (Fa = 0);
  }
  function xd(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - ut(u), r = 1 << s, m = n[s];
      m === -1 ? ((r & a) === 0 || (r & l) !== 0) && (n[s] = Hu(r, t)) : m <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Ge, a = Ae, a = Oa(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Dt(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || rl(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Dt(l), Te(a)) {
        case 2:
        case 8:
          a = yi;
          break;
        case 32:
          a = Ml;
          break;
        case 268435456:
          a = Ol;
          break;
        default:
          a = Ml;
      }
      return l = jd.bind(null, e), a = jt(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Dt(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function jd(e, t) {
    if (nt !== 0 && nt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (mu() && e.callbackNode !== a)
      return null;
    var l = Ae;
    return l = Oa(
      e,
      e === Ge ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ad(e, l, t), xd(e, De()), e.callbackNode != null && e.callbackNode === a ? jd.bind(null, e) : null);
  }
  function Sd(e, t) {
    if (mu()) return null;
    ad(e, t, !0);
  }
  function vv() {
    Av(function() {
      (Re & 6) !== 0 ? jt(
        ul,
        mv
      ) : bd();
    });
  }
  function Es() {
    if (Fa === 0) {
      var e = Il;
      e === 0 && (e = sl, sl <<= 1, (sl & 261888) === 0 && (sl = 256)), Fa = e;
    }
    return Fa;
  }
  function Ed(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ni("" + e);
  }
  function Nd(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function yv(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = Ed(
        (n[Et] || null).action
      ), s = l.submitter;
      s && (t = (t = s[Et] || null) ? Ed(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var r = new zi(
        "action",
        "action",
        null,
        l,
        n
      );
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Fa !== 0) {
                  var m = s ? Nd(n, s) : new FormData(n);
                  Gc(
                    a,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (r.preventDefault(), m = s ? Nd(n, s) : new FormData(n), Gc(
                  a,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Ns = 0; Ns < uc.length; Ns++) {
    var _s = uc[Ns], gv = _s.toLowerCase(), pv = _s[0].toUpperCase() + _s.slice(1);
    Pt(
      gv,
      "on" + pv
    );
  }
  Pt(Pr, "onAnimationEnd"), Pt(eo, "onAnimationIteration"), Pt(to, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(Um, "onTransitionRun"), Pt(Rm, "onTransitionStart"), Pt(qm, "onTransitionCancel"), Pt(ao, "onTransitionEnd"), Bl("onMouseEnter", ["mouseout", "mouseover"]), Bl("onMouseLeave", ["mouseout", "mouseover"]), Bl("onPointerEnter", ["pointerout", "pointerover"]), Bl("onPointerLeave", ["pointerout", "pointerover"]), fl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), fl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), fl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), fl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), fl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), fl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), bv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai)
  );
  function _d(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], n = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = l.length - 1; 0 <= s; s--) {
            var r = l[s], m = r.instance, _ = r.currentTarget;
            if (r = r.listener, m !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = _;
            try {
              u(n);
            } catch (O) {
              Di(O);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (r = l[s], m = r.instance, _ = r.currentTarget, r = r.listener, m !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = _;
            try {
              u(n);
            } catch (O) {
              Di(O);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function _e(e, t) {
    var a = t[Bu];
    a === void 0 && (a = t[Bu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Td(t, e, 2, !1), a.add(l));
  }
  function Ts(e, t, a) {
    var l = 0;
    t && (l |= 4), Td(
      a,
      e,
      l,
      t
    );
  }
  var gu = "_reactListening" + Math.random().toString(36).slice(2);
  function As(e) {
    if (!e[gu]) {
      e[gu] = !0, gr.forEach(function(a) {
        a !== "selectionchange" && (bv.has(a) || Ts(a, !1, e), Ts(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gu] || (t[gu] = !0, Ts("selectionchange", !1, t));
    }
  }
  function Td(e, t, a, l) {
    switch (th(t)) {
      case 2:
        var n = Kv;
        break;
      case 8:
        n = Jv;
        break;
      default:
        n = Vs;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !Ku || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function zs(e, t, a, l, n) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var r = l.stateNode.containerInfo;
          if (r === n) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var m = s.tag;
              if ((m === 3 || m === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; r !== null; ) {
            if (s = Rl(r), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              l = u = s;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    Cr(function() {
      var _ = u, O = Qu(a), H = [];
      e: {
        var z = lo.get(e);
        if (z !== void 0) {
          var C = zi, te = e;
          switch (e) {
            case "keypress":
              if (Ti(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = dm;
              break;
            case "focusin":
              te = "focus", C = Wu;
              break;
            case "focusout":
              te = "blur", C = Wu;
              break;
            case "beforeblur":
            case "afterblur":
              C = Wu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Mr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = em;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = vm;
              break;
            case Pr:
            case eo:
            case to:
              C = lm;
              break;
            case ao:
              C = gm;
              break;
            case "scroll":
            case "scrollend":
              C = Ih;
              break;
            case "wheel":
              C = bm;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = im;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Ur;
              break;
            case "toggle":
            case "beforetoggle":
              C = jm;
          }
          var me = (t & 4) !== 0, Ve = !me && (e === "scroll" || e === "scrollend"), x = me ? z !== null ? z + "Capture" : null : z;
          me = [];
          for (var y = _, N; y !== null; ) {
            var R = y;
            if (N = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || N === null || x === null || (R = Nn(y, x), R != null && me.push(
              li(y, R, N)
            )), Ve) break;
            y = y.return;
          }
          0 < me.length && (z = new C(
            z,
            te,
            null,
            a,
            O
          ), H.push({ event: z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", z && a !== Xu && (te = a.relatedTarget || a.fromElement) && (Rl(te) || te[Ul]))
            break e;
          if ((C || z) && (z = O.window === O ? O : (z = O.ownerDocument) ? z.defaultView || z.parentWindow : window, C ? (te = a.relatedTarget || a.toElement, C = _, te = te ? Rl(te) : null, te !== null && (Ve = j(te), me = te.tag, te !== Ve || me !== 5 && me !== 27 && me !== 6) && (te = null)) : (C = null, te = _), C !== te)) {
            if (me = Mr, R = "onMouseLeave", x = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (me = Ur, R = "onPointerLeave", x = "onPointerEnter", y = "pointer"), Ve = C == null ? z : En(C), N = te == null ? z : En(te), z = new me(
              R,
              y + "leave",
              C,
              a,
              O
            ), z.target = Ve, z.relatedTarget = N, R = null, Rl(O) === _ && (me = new me(
              x,
              y + "enter",
              te,
              a,
              O
            ), me.target = N, me.relatedTarget = Ve, R = me), Ve = R, C && te)
              t: {
                for (me = xv, x = C, y = te, N = 0, R = x; R; R = me(R))
                  N++;
                R = 0;
                for (var oe = y; oe; oe = me(oe))
                  R++;
                for (; 0 < N - R; )
                  x = me(x), N--;
                for (; 0 < R - N; )
                  y = me(y), R--;
                for (; N--; ) {
                  if (x === y || y !== null && x === y.alternate) {
                    me = x;
                    break t;
                  }
                  x = me(x), y = me(y);
                }
                me = null;
              }
            else me = null;
            C !== null && Ad(
              H,
              z,
              C,
              me,
              !1
            ), te !== null && Ve !== null && Ad(
              H,
              Ve,
              te,
              me,
              !0
            );
          }
        }
        e: {
          if (z = _ ? En(_) : window, C = z.nodeName && z.nodeName.toLowerCase(), C === "select" || C === "input" && z.type === "file")
            var Me = Vr;
          else if (Lr(z))
            if (Gr)
              Me = Dm;
            else {
              Me = Cm;
              var ne = zm;
            }
          else
            C = z.nodeName, !C || C.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? _ && Gu(_.elementType) && (Me = Vr) : Me = wm;
          if (Me && (Me = Me(e, _))) {
            Yr(
              H,
              Me,
              a,
              O
            );
            break e;
          }
          ne && ne(e, z, _), e === "focusout" && _ && z.type === "number" && _.memoizedProps.value != null && Vu(z, "number", z.value);
        }
        switch (ne = _ ? En(_) : window, e) {
          case "focusin":
            (Lr(ne) || ne.contentEditable === "true") && (Xl = ne, lc = _, Mn = null);
            break;
          case "focusout":
            Mn = lc = Xl = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Wr(H, a, O);
            break;
          case "selectionchange":
            if (Om) break;
          case "keydown":
          case "keyup":
            Wr(H, a, O);
        }
        var je;
        if (Pu)
          e: {
            switch (e) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          Gl ? Br(e, a) && (ze = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ze = "onCompositionStart");
        ze && (Rr && a.locale !== "ko" && (Gl || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Gl && (je = wr()) : (Ua = O, Ju = "value" in Ua ? Ua.value : Ua.textContent, Gl = !0)), ne = pu(_, ze), 0 < ne.length && (ze = new Or(
          ze,
          e,
          null,
          a,
          O
        ), H.push({ event: ze, listeners: ne }), je ? ze.data = je : (je = kr(a), je !== null && (ze.data = je)))), (je = Em ? Nm(e, a) : _m(e, a)) && (ze = pu(_, "onBeforeInput"), 0 < ze.length && (ne = new Or(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          O
        ), H.push({
          event: ne,
          listeners: ze
        }), ne.data = je)), yv(
          H,
          e,
          _,
          a,
          O
        );
      }
      _d(H, t);
    });
  }
  function li(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function pu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Nn(e, a), n != null && l.unshift(
        li(e, n, u)
      ), n = Nn(e, t), n != null && l.push(
        li(e, n, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function xv(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ad(e, t, a, l, n) {
    for (var u = t._reactName, s = []; a !== null && a !== l; ) {
      var r = a, m = r.alternate, _ = r.stateNode;
      if (r = r.tag, m !== null && m === l) break;
      r !== 5 && r !== 26 && r !== 27 || _ === null || (m = _, n ? (_ = Nn(a, u), _ != null && s.unshift(
        li(a, _, m)
      )) : n || (_ = Nn(a, u), _ != null && s.push(
        li(a, _, m)
      ))), a = a.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var jv = /\r\n?/g, Sv = /\u0000|\uFFFD/g;
  function zd(e) {
    return (typeof e == "string" ? e : "" + e).replace(jv, `
`).replace(Sv, "");
  }
  function Cd(e, t) {
    return t = zd(t), zd(e) === t;
  }
  function Ye(e, t, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ll(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ll(e, "" + l);
        break;
      case "className":
        Si(e, "class", l);
        break;
      case "tabIndex":
        Si(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Si(e, a, l);
        break;
      case "style":
        Ar(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Si(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Ni("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (a === "formAction" ? (t !== "input" && Ye(e, t, "name", n.name, n, null), Ye(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Ye(e, t, "encType", n.encType, n, null), Ye(e, t, "method", n.method, n, null), Ye(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Ni("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = ha);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Ni("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        _e("beforetoggle", e), _e("toggle", e), ji(e, "popover", l);
        break;
      case "xlinkActuate":
        da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        da(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        da(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        da(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        da(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        ji(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Fh.get(a) || a, ji(e, a, l));
    }
  }
  function Cs(e, t, a, l, n, u) {
    switch (a) {
      case "style":
        Ar(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ll(e, l) : (typeof l == "number" || typeof l == "bigint") && Ll(e, "" + l);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ha);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pr.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[Et] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : ji(e, a, l);
          }
    }
  }
  function mt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        _e("error", e), _e("load", e);
        var l = !1, n = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var s = a[u];
            if (s != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ye(e, t, u, s, a, null);
              }
          }
        n && Ye(e, t, "srcSet", a.srcSet, a, null), l && Ye(e, t, "src", a.src, a, null);
        return;
      case "input":
        _e("invalid", e);
        var r = u = s = n = null, m = null, _ = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var O = a[l];
            if (O != null)
              switch (l) {
                case "name":
                  n = O;
                  break;
                case "type":
                  s = O;
                  break;
                case "checked":
                  m = O;
                  break;
                case "defaultChecked":
                  _ = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  r = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ye(e, t, l, O, a, null);
              }
          }
        Er(
          e,
          u,
          r,
          m,
          _,
          s,
          n,
          !1
        );
        return;
      case "select":
        _e("invalid", e), l = s = u = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (r = a[n], r != null))
            switch (n) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                s = r;
                break;
              case "multiple":
                l = r;
              default:
                Ye(e, t, n, r, a, null);
            }
        t = u, a = s, e.multiple = !!l, t != null ? kl(e, !!l, t, !1) : a != null && kl(e, !!l, a, !0);
        return;
      case "textarea":
        _e("invalid", e), u = n = l = null;
        for (s in a)
          if (a.hasOwnProperty(s) && (r = a[s], r != null))
            switch (s) {
              case "value":
                l = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                Ye(e, t, s, r, a, null);
            }
        _r(e, l, n, u);
        return;
      case "option":
        for (m in a)
          a.hasOwnProperty(m) && (l = a[m], l != null) && (m === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ye(e, t, m, l, a, null));
        return;
      case "dialog":
        _e("beforetoggle", e), _e("toggle", e), _e("cancel", e), _e("close", e);
        break;
      case "iframe":
      case "object":
        _e("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ai.length; l++)
          _e(ai[l], e);
        break;
      case "image":
        _e("error", e), _e("load", e);
        break;
      case "details":
        _e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        _e("error", e), _e("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in a)
          if (a.hasOwnProperty(_) && (l = a[_], l != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ye(e, t, _, l, a, null);
            }
        return;
      default:
        if (Gu(t)) {
          for (O in a)
            a.hasOwnProperty(O) && (l = a[O], l !== void 0 && Cs(
              e,
              t,
              O,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (r in a)
      a.hasOwnProperty(r) && (l = a[r], l != null && Ye(e, t, r, l, a, null));
  }
  function Ev(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, s = null, r = null, m = null, _ = null, O = null;
        for (C in a) {
          var H = a[C];
          if (a.hasOwnProperty(C) && H != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = H;
              default:
                l.hasOwnProperty(C) || Ye(e, t, C, null, l, H);
            }
        }
        for (var z in l) {
          var C = l[z];
          if (H = a[z], l.hasOwnProperty(z) && (C != null || H != null))
            switch (z) {
              case "type":
                u = C;
                break;
              case "name":
                n = C;
                break;
              case "checked":
                _ = C;
                break;
              case "defaultChecked":
                O = C;
                break;
              case "value":
                s = C;
                break;
              case "defaultValue":
                r = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(o(137, t));
                break;
              default:
                C !== H && Ye(
                  e,
                  t,
                  z,
                  C,
                  l,
                  H
                );
            }
        }
        Yu(
          e,
          s,
          r,
          m,
          _,
          O,
          u,
          n
        );
        return;
      case "select":
        C = s = r = z = null;
        for (u in a)
          if (m = a[u], a.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                C = m;
              default:
                l.hasOwnProperty(u) || Ye(
                  e,
                  t,
                  u,
                  null,
                  l,
                  m
                );
            }
        for (n in l)
          if (u = l[n], m = a[n], l.hasOwnProperty(n) && (u != null || m != null))
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                s = u;
              default:
                u !== m && Ye(
                  e,
                  t,
                  n,
                  u,
                  l,
                  m
                );
            }
        t = r, a = s, l = C, z != null ? kl(e, !!a, z, !1) : !!l != !!a && (t != null ? kl(e, !!a, t, !0) : kl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        C = z = null;
        for (r in a)
          if (n = a[r], a.hasOwnProperty(r) && n != null && !l.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, r, null, l, n);
            }
        for (s in l)
          if (n = l[s], u = a[s], l.hasOwnProperty(s) && (n != null || u != null))
            switch (s) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                C = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && Ye(e, t, s, n, l, u);
            }
        Nr(e, z, C);
        return;
      case "option":
        for (var te in a)
          z = a[te], a.hasOwnProperty(te) && z != null && !l.hasOwnProperty(te) && (te === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            te,
            null,
            l,
            z
          ));
        for (m in l)
          z = l[m], C = a[m], l.hasOwnProperty(m) && z !== C && (z != null || C != null) && (m === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : Ye(
            e,
            t,
            m,
            z,
            l,
            C
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var me in a)
          z = a[me], a.hasOwnProperty(me) && z != null && !l.hasOwnProperty(me) && Ye(e, t, me, null, l, z);
        for (_ in l)
          if (z = l[_], C = a[_], l.hasOwnProperty(_) && z !== C && (z != null || C != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  _,
                  z,
                  l,
                  C
                );
            }
        return;
      default:
        if (Gu(t)) {
          for (var Ve in a)
            z = a[Ve], a.hasOwnProperty(Ve) && z !== void 0 && !l.hasOwnProperty(Ve) && Cs(
              e,
              t,
              Ve,
              void 0,
              l,
              z
            );
          for (O in l)
            z = l[O], C = a[O], !l.hasOwnProperty(O) || z === C || z === void 0 && C === void 0 || Cs(
              e,
              t,
              O,
              z,
              l,
              C
            );
          return;
        }
    }
    for (var x in a)
      z = a[x], a.hasOwnProperty(x) && z != null && !l.hasOwnProperty(x) && Ye(e, t, x, null, l, z);
    for (H in l)
      z = l[H], C = a[H], !l.hasOwnProperty(H) || z === C || z == null && C == null || Ye(e, t, H, z, l, C);
  }
  function wd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Nv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, s = n.initiatorType, r = n.duration;
        if (u && r && wd(s)) {
          for (s = 0, r = n.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], _ = m.startTime;
            if (_ > r) break;
            var O = m.transferSize, H = m.initiatorType;
            O && wd(H) && (m = m.responseEnd, s += O * (m < r ? 1 : (r - _) / (m - _)));
          }
          if (--l, t += 8 * (u + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ws = null, Ds = null;
  function bu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Md(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ms(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Os = null;
  function _v() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Os ? !1 : (Os = e, !0) : (Os = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ud = typeof Promise == "function" ? Promise : void 0, Av = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ud < "u" ? function(e) {
    return Ud.resolve(null).then(e).catch(zv);
  } : Od;
  function zv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Wa(e) {
    return e === "head";
  }
  function Rd(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(n), pn(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          ni(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, ni(a);
          for (var u = a.firstChild; u; ) {
            var s = u.nextSibling, r = u.nodeName;
            u[Sn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = s;
          }
        } else
          a === "body" && ni(e.ownerDocument.body);
      a = n;
    } while (a);
    pn(t);
  }
  function qd(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function Us(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Us(a), ku(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Cv(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Sn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = $t(e.nextSibling), e === null) break;
    }
    return null;
  }
  function wv(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function Rs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function qs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Dv(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Hs = null;
  function Bd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return $t(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function kd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ld(e, t, a) {
    switch (t = bu(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function ni(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ku(e);
  }
  var Ft = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Set();
  function xu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ca = B.d;
  B.d = {
    f: Mv,
    r: Ov,
    D: Uv,
    C: Rv,
    L: qv,
    m: Hv,
    X: kv,
    S: Bv,
    M: Lv
  };
  function Mv() {
    var e = Ca.f(), t = fu();
    return e || t;
  }
  function Ov(e) {
    var t = ql(e);
    t !== null && t.tag === 5 && t.type === "form" ? lf(t) : Ca.r(e);
  }
  var vn = typeof document > "u" ? null : document;
  function Vd(e, t, a) {
    var l = vn;
    if (l && typeof t == "string" && t) {
      var n = Vt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Yd.has(n) || (Yd.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), mt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function Uv(e) {
    Ca.D(e), Vd("dns-prefetch", e, null);
  }
  function Rv(e, t) {
    Ca.C(e, t), Vd("preconnect", e, t);
  }
  function qv(e, t, a) {
    Ca.L(e, t, a);
    var l = vn;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + Vt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Vt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Vt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Vt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = yn(e);
          break;
        case "script":
          u = gn(e);
      }
      Ft.has(u) || (e = A(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Ft.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(ii(u)) || t === "script" && l.querySelector(ui(u)) || (t = l.createElement("link"), mt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function Hv(e, t) {
    Ca.m(e, t);
    var a = vn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Vt(l) + '"][href="' + Vt(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = gn(e);
      }
      if (!Ft.has(u) && (e = A({ rel: "modulepreload", href: e }, t), Ft.set(u, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ui(u)))
              return;
        }
        l = a.createElement("link"), mt(l, "link", e), ct(l), a.head.appendChild(l);
      }
    }
  }
  function Bv(e, t, a) {
    Ca.S(e, t, a);
    var l = vn;
    if (l && e) {
      var n = Hl(l).hoistableStyles, u = yn(e);
      t = t || "default";
      var s = n.get(u);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = l.querySelector(
          ii(u)
        ))
          r.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Ft.get(u)) && Bs(e, a);
          var m = s = l.createElement("link");
          ct(m), mt(m, "link", e), m._p = new Promise(function(_, O) {
            m.onload = _, m.onerror = O;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, ju(s, t, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: r
        }, n.set(u, s);
      }
    }
  }
  function kv(e, t) {
    Ca.X(e, t);
    var a = vn;
    if (a && e) {
      var l = Hl(a).hoistableScripts, n = gn(e), u = l.get(n);
      u || (u = a.querySelector(ui(n)), u || (e = A({ src: e, async: !0 }, t), (t = Ft.get(n)) && ks(e, t), u = a.createElement("script"), ct(u), mt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Lv(e, t) {
    Ca.M(e, t);
    var a = vn;
    if (a && e) {
      var l = Hl(a).hoistableScripts, n = gn(e), u = l.get(n);
      u || (u = a.querySelector(ui(n)), u || (e = A({ src: e, async: !0, type: "module" }, t), (t = Ft.get(n)) && ks(e, t), u = a.createElement("script"), ct(u), mt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Gd(e, t, a, l) {
    var n = (n = be.current) ? xu(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = yn(a.href), a = Hl(
          n
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = yn(a.href);
          var u = Hl(
            n
          ).hoistableStyles, s = u.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = n.querySelector(
            ii(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Ft.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ft.set(e, a), u || Yv(
            n,
            e,
            a,
            s.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return s;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = gn(a), a = Hl(
          n
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function yn(e) {
    return 'href="' + Vt(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xd(e) {
    return A({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Yv(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), mt(t, "link", a), ct(t), e.head.appendChild(t));
  }
  function gn(e) {
    return '[src="' + Vt(e) + '"]';
  }
  function ui(e) {
    return "script[async]" + e;
  }
  function Qd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Vt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, ct(l), l;
          var n = A({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ct(l), mt(l, "style", n), ju(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = yn(a.href);
          var u = e.querySelector(
            ii(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ct(u), u;
          l = Xd(a), (n = Ft.get(n)) && Bs(l, n), u = (e.ownerDocument || e).createElement("link"), ct(u);
          var s = u;
          return s._p = new Promise(function(r, m) {
            s.onload = r, s.onerror = m;
          }), mt(u, "link", l), t.state.loading |= 4, ju(u, a.precedence, e), t.instance = u;
        case "script":
          return u = gn(a.src), (n = e.querySelector(
            ui(u)
          )) ? (t.instance = n, ct(n), n) : (l = a, (n = Ft.get(u)) && (l = A({}, a), ks(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), ct(n), mt(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, ju(l, a.precedence, e));
    return t.instance;
  }
  function ju(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, s = 0; s < l.length; s++) {
      var r = l[s];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Bs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ks(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Su = null;
  function Zd(e, t, a) {
    if (Su === null) {
      var l = /* @__PURE__ */ new Map(), n = Su = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Su, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[Sn] || u[Xe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var r = l.get(s);
        r ? r.push(u) : l.set(s, [u]);
      }
    }
    return l;
  }
  function Kd(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Vv(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Jd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Gv(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = yn(l.href), u = t.querySelector(
          ii(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Eu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, ct(u);
          return;
        }
        u = t.ownerDocument || t, l = Xd(l), (n = Ft.get(n)) && Bs(l, n), u = u.createElement("link"), ct(u);
        var s = u;
        s._p = new Promise(function(r, m) {
          s.onload = r, s.onerror = m;
        }), mt(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Eu.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ls = 0;
  function Xv(e, t) {
    return e.stylesheets && e.count === 0 && _u(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && _u(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ls === 0 && (Ls = 62500 * Nv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && _u(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ls ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Eu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) _u(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Nu = null;
  function _u(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nu = /* @__PURE__ */ new Map(), t.forEach(Qv, e), Nu = null, Eu.call(e));
  }
  function Qv(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Nu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nu.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var s = n[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), u = a.get(s) || l, u === l && a.set(null, n), a.set(s, n), this.count++, l = Eu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ci = {
    $$typeof: le,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function Zv(e, t, a, l, n, u, s, r, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jn(0), this.hiddenUpdates = jn(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $d(e, t, a, l, n, u, s, r, m, _, O, H) {
    return e = new Zv(
      e,
      t,
      a,
      s,
      m,
      _,
      O,
      H,
      r
    ), t = 1, u === !0 && (t |= 24), u = Ot(3, null, null, t), e.current = u, u.stateNode = e, t = bc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Ec(u), e;
  }
  function Fd(e) {
    return e ? (e = Kl, e) : Kl;
  }
  function Wd(e, t, a, l, n, u) {
    n = Fd(n), l.context === null ? l.context = n : l.pendingContext = n, l = La(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Ya(e, l, t), a !== null && (Ct(a, e, t), kn(a, e, t));
  }
  function Id(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ys(e, t) {
    Id(e, t), (e = e.alternate) && Id(e, t);
  }
  function Pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vl(e, 67108864);
      t !== null && Ct(t, e, 67108864), Ys(e, 67108864);
    }
  }
  function eh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bt();
      t = he(t);
      var a = vl(e, t);
      a !== null && Ct(a, e, t), Ys(e, t);
    }
  }
  var Tu = !0;
  function Kv(e, t, a, l) {
    var n = g.T;
    g.T = null;
    var u = B.p;
    try {
      B.p = 2, Vs(e, t, a, l);
    } finally {
      B.p = u, g.T = n;
    }
  }
  function Jv(e, t, a, l) {
    var n = g.T;
    g.T = null;
    var u = B.p;
    try {
      B.p = 8, Vs(e, t, a, l);
    } finally {
      B.p = u, g.T = n;
    }
  }
  function Vs(e, t, a, l) {
    if (Tu) {
      var n = Gs(l);
      if (n === null)
        zs(
          e,
          t,
          l,
          Au,
          a
        ), ah(e, l);
      else if (Fv(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (ah(e, l), t & 4 && -1 < $v.indexOf(e)) {
        for (; n !== null; ) {
          var u = ql(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = fa(u.pendingLanes);
                  if (s !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - ut(s);
                      r.entanglements[1] |= m, s &= ~m;
                    }
                    sa(u), (Re & 6) === 0 && (ru = De() + 500, ti(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = vl(u, 2), r !== null && Ct(r, u, 2), fu(), Ys(u, 2);
            }
          if (u = Gs(l), u === null && zs(
            e,
            t,
            l,
            Au,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        zs(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Gs(e) {
    return e = Qu(e), Xs(e);
  }
  var Au = null;
  function Xs(e) {
    if (Au = null, e = Rl(e), e !== null) {
      var t = j(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = q(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Au = e, null;
  }
  function th(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (bt()) {
          case ul:
            return 2;
          case yi:
            return 8;
          case Ml:
          case xn:
            return 32;
          case Ol:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qs = !1, Ia = null, Pa = null, el = null, si = /* @__PURE__ */ new Map(), ri = /* @__PURE__ */ new Map(), tl = [], $v = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ah(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ia = null;
        break;
      case "dragenter":
      case "dragleave":
        Pa = null;
        break;
      case "mouseover":
      case "mouseout":
        el = null;
        break;
      case "pointerover":
      case "pointerout":
        si.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ri.delete(t.pointerId);
    }
  }
  function oi(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = ql(t), t !== null && Pd(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Fv(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Ia = oi(
          Ia,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Pa = oi(
          Pa,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return el = oi(
          el,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return si.set(
          u,
          oi(
            si.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, ri.set(
          u,
          oi(
            ri.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function lh(e) {
    var t = Rl(e.target);
    if (t !== null) {
      var a = j(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = b(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              eh(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = q(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              eh(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Gs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Xu = l, a.target.dispatchEvent(l), Xu = null;
      } else
        return t = ql(a), t !== null && Pd(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function nh(e, t, a) {
    zu(e) && a.delete(t);
  }
  function Wv() {
    Qs = !1, Ia !== null && zu(Ia) && (Ia = null), Pa !== null && zu(Pa) && (Pa = null), el !== null && zu(el) && (el = null), si.forEach(nh), ri.forEach(nh);
  }
  function Cu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qs || (Qs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Wv
    )));
  }
  var wu = null;
  function ih(e) {
    wu !== e && (wu = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        wu === e && (wu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (Xs(l || a) === null)
              continue;
            break;
          }
          var u = ql(a);
          u !== null && (e.splice(t, 3), t -= 3, Gc(
            u,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function pn(e) {
    function t(m) {
      return Cu(m, e);
    }
    Ia !== null && Cu(Ia, e), Pa !== null && Cu(Pa, e), el !== null && Cu(el, e), si.forEach(t), ri.forEach(t);
    for (var a = 0; a < tl.length; a++) {
      var l = tl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < tl.length && (a = tl[0], a.blockedOn === null); )
      lh(a), a.blockedOn === null && tl.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], s = n[Et] || null;
        if (typeof u == "function")
          s || ih(a);
        else if (s) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, s = u[Et] || null)
              r = s.formAction;
            else if (Xs(n) !== null) continue;
          } else r = s.action;
          typeof r == "function" ? a[l + 1] = r : (a.splice(l, 3), l -= 3), ih(a);
        }
      }
  }
  function uh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(s) {
            return n = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Zs(e) {
    this._internalRoot = e;
  }
  Du.prototype.render = Zs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Bt();
    Wd(a, l, e, t, null, null);
  }, Du.prototype.unmount = Zs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wd(e.current, 2, null, e, null, null), fu(), t[Ul] = null;
    }
  };
  function Du(e) {
    this._internalRoot = e;
  }
  Du.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fe();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < tl.length && t !== 0 && t < tl[a].priority; a++) ;
      tl.splice(a, 0, e), a === 0 && lh(e);
    }
  };
  var ch = f.version;
  if (ch !== "19.2.8")
    throw Error(
      o(
        527,
        ch,
        "19.2.8"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Iv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mu.isDisabled && Mu.supportsFiber)
      try {
        cl = Mu.inject(
          Iv
        ), ot = Mu;
      } catch {
      }
  }
  return di.createRoot = function(e, t) {
    if (!E(e)) throw Error(o(299));
    var a = !1, l = "", n = mf, u = vf, s = yf;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = $d(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      u,
      s,
      uh
    ), e[Ul] = t.current, As(e), new Zs(t);
  }, di.hydrateRoot = function(e, t, a) {
    if (!E(e)) throw Error(o(299));
    var l = !1, n = "", u = mf, s = vf, r = yf, m = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (r = a.onRecoverableError), a.formState !== void 0 && (m = a.formState)), t = $d(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      n,
      m,
      u,
      s,
      r,
      uh
    ), t.context = Fd(null), a = t.current, l = Bt(), l = he(l), n = La(l), n.callback = null, Ya(a, n, l), a = l, t.current.lanes = a, ol(t, a), sa(t), e[Ul] = t.current, As(e), new Du(t);
  }, di.version = "19.2.8", di;
}
var gh;
function sy() {
  if (gh) return $s.exports;
  gh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), $s.exports = cy(), $s.exports;
}
var ry = sy();
const tr = "hana.plugin.ui", ar = 1, oy = "X-Hana-Plugin-Surface-Session", fy = "pluginSurfaceSession", Ch = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, zl = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, dy = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function ph(c) {
  return typeof c == "object" && c !== null;
}
function ll(c) {
  return {
    ok: !1,
    error: {
      code: Ch.BAD_MESSAGE,
      message: c
    }
  };
}
function bh(c) {
  if (!ph(c))
    return ll("Plugin UI messages must be objects.");
  if (c.protocol !== tr)
    return ll("Plugin UI message protocol is missing or invalid.");
  if (c.version !== ar)
    return {
      ok: !1,
      error: {
        code: Ch.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(c.version)}.`
      }
    };
  if (typeof c.kind != "string" || !dy.has(c.kind))
    return ll("Plugin UI message kind is missing or invalid.");
  if (typeof c.type != "string" || c.type.trim() === "")
    return ll("Plugin UI message type must be a non-empty string.");
  const f = c.kind;
  if (f !== "event" && (typeof c.id != "string" || c.id.trim() === ""))
    return ll(`Plugin UI ${f} messages must include a non-empty id.`);
  if (f === "error") {
    if (!ph(c.error))
      return ll("Plugin UI error messages must include an error object.");
    if (typeof c.error.code != "string" || c.error.code.trim() === "")
      return ll("Plugin UI error code must be a non-empty string.");
    if (typeof c.error.message != "string" || c.error.message.trim() === "")
      return ll("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: c
  };
}
class xh extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(f) {
    super(f.message), this.code = f.code, this.details = f.details;
  }
}
let jh = 0;
function hy() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (jh += 1, `hana-plugin-${Date.now()}-${jh}`);
}
function my() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function vy(c) {
  if (!c)
    return null;
  try {
    return new URL(c).origin;
  } catch {
    return null;
  }
}
function yy(c, f) {
  if (f)
    return f;
  const d = new URLSearchParams(c.location.search).get("hana-host-origin");
  return d || (vy(c.document.referrer) ?? "*");
}
function gy(c) {
  const f = new URLSearchParams(c.location.search);
  return {
    theme: f.get("hana-theme") ?? void 0,
    cssUrl: f.get("hana-css") ?? void 0
  };
}
function Sh(c, f, d) {
  return !(c.source !== f || d !== "*" && c.origin !== d);
}
function py(c) {
  return typeof c == "string" ? { url: c } : c;
}
function by(c) {
  return typeof c == "string" ? { text: c } : c;
}
function wh(c) {
  const f = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(c.location.pathname || "");
  if (!f)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(f[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function xy(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (c.includes("\\") || c.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(c))
    throw new Error("Invalid plugin asset path.");
  const f = c.replace(/^\/+/, "");
  if (!f || f.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const d = f.split("/");
  if (d.some((o) => !o || o === "." || o === ".." || o.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return d.map((o) => encodeURIComponent(o)).join("/");
}
function jy(c, f) {
  const d = wh(c), o = xy(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/assets/${o}`;
}
function Sy(c) {
  return new URLSearchParams(c.location.search).get(fy) || null;
}
function Ey(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin API path.");
  const f = c.trim();
  if (!f || f.includes("\\") || f.includes("\0") || f.includes("#") || f.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(f))
    throw new Error("Invalid plugin API path.");
  const d = f.replace(/^\/+/, "");
  if (!d || d.startsWith("./") || d === "api/plugins" || d.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const o = d.indexOf("?"), E = o >= 0 ? d.slice(0, o) : d;
  if (!E)
    throw new Error("Invalid plugin API path.");
  const j = E.split("/");
  for (const T of j) {
    if (!T)
      throw new Error("Invalid plugin API path.");
    let p;
    try {
      p = decodeURIComponent(T);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (p === "." || p === ".." || p.includes("/") || p.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const b = new URL(`http://hana.local/${d}`);
  return `${j.map((T) => encodeURIComponent(decodeURIComponent(T))).join("/")}${b.search}`;
}
function Dh(c, f) {
  const d = wh(c), o = Ey(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/${o}`;
}
function Ny(c, f, d) {
  const o = Sy(c);
  if (!o)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const E = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!E)
    throw new Error("hana.api.fetch requires window.fetch.");
  const j = d ?? {}, b = new Headers(j.headers);
  return b.set(oy, o), E(Dh(c, f), {
    ...j,
    headers: b
  });
}
function _y(c = {}) {
  const f = c.targetWindow ?? my(), d = c.parentWindow ?? f.parent, o = yy(f, c.targetOrigin), E = c.requestTimeoutMs ?? 1e4, j = c.idFactory ?? hy;
  let b = gy(f);
  const q = /* @__PURE__ */ new Set();
  function T(S) {
    d.postMessage(S, o);
  }
  function p(S, L) {
    const Q = {
      protocol: tr,
      version: ar,
      kind: "event",
      type: S
    };
    L !== void 0 && (Q.payload = L), T(Q);
  }
  function U(S) {
    if (!Sh(S, d, o))
      return;
    const L = bh(S.data);
    if (!L.ok)
      return;
    const Q = L.value;
    if (Q.kind !== "event" || Q.type !== "hana.theme.changed" || typeof Q.payload != "object" || Q.payload === null)
      return;
    const de = Q.payload;
    b = {
      theme: typeof de.theme == "string" ? de.theme : b.theme,
      cssUrl: typeof de.cssUrl == "string" ? de.cssUrl : b.cssUrl
    };
    for (const V of q)
      V(b);
  }
  function A(S, L, Q = {}) {
    const de = j(), V = Q.timeoutMs ?? E;
    return new Promise((ie, ae) => {
      const le = () => {
        f.removeEventListener("message", W), f.clearTimeout(Se);
      }, W = (K) => {
        if (!Sh(K, d, o))
          return;
        const k = bh(K.data);
        if (!k.ok)
          return;
        const I = k.value;
        I.id !== de || I.type !== S || (I.kind === "response" && (le(), ie(I.payload)), I.kind === "error" && I.error && (le(), ae(new xh(I.error))));
      }, Se = f.setTimeout(() => {
        le(), ae(new xh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${S}.`
        }));
      }, V);
      f.addEventListener("message", W);
      const ge = {
        protocol: tr,
        version: ar,
        id: de,
        kind: "request",
        type: S
      };
      L !== void 0 && (ge.payload = L), T(ge);
    });
  }
  return {
    ready(S) {
      p("hana.ready", S);
    },
    assets: {
      url(S) {
        return jy(f, S);
      }
    },
    api: {
      url(S) {
        return Dh(f, S);
      },
      fetch(S, L) {
        return Ny(f, S, L);
      }
    },
    ui: {
      resize(S) {
        p(zl.UI_RESIZE, S);
      }
    },
    theme: {
      getSnapshot() {
        return { ...b };
      },
      subscribe(S) {
        return q.size === 0 && f.addEventListener("message", U), q.add(S), S({ ...b }), () => {
          q.delete(S), q.size === 0 && f.removeEventListener("message", U);
        };
      }
    },
    host: {
      request: A
    },
    toast: {
      show(S, L) {
        return A(zl.TOAST_SHOW, S, L);
      }
    },
    external: {
      open(S, L) {
        return A(zl.EXTERNAL_OPEN, py(S), L);
      }
    },
    clipboard: {
      writeText(S, L) {
        return A(zl.CLIPBOARD_WRITE_TEXT, by(S), L);
      }
    },
    resources: {
      open(S, L) {
        return A(zl.RESOURCE_OPEN, S, L);
      },
      pick(S = {}, L) {
        return A(zl.RESOURCE_PICK, S, L);
      },
      requestAccess(S, L) {
        return A(zl.RESOURCE_REQUEST_ACCESS, S, L);
      }
    }
  };
}
let Eh = null;
function wt() {
  return Eh ??= _y(), Eh;
}
const rr = {
  ready(c) {
    return wt().ready(c);
  },
  assets: {
    url(c) {
      return wt().assets.url(c);
    }
  },
  api: {
    url(c) {
      return wt().api.url(c);
    },
    fetch(c, f) {
      return wt().api.fetch(c, f);
    }
  },
  ui: {
    resize(c) {
      return wt().ui.resize(c);
    }
  },
  theme: {
    getSnapshot() {
      return wt().theme.getSnapshot();
    },
    subscribe(c) {
      return wt().theme.subscribe(c);
    }
  },
  host: {
    request(c, f, d) {
      return wt().host.request(c, f, d);
    }
  },
  toast: {
    show(c, f) {
      return wt().toast.show(c, f);
    }
  },
  external: {
    open(c, f) {
      return wt().external.open(c, f);
    }
  },
  clipboard: {
    writeText(c, f) {
      return wt().clipboard.writeText(c, f);
    }
  },
  resources: {
    open(c, f) {
      return wt().resources.open(c, f);
    },
    pick(c, f) {
      return wt().resources.pick(c, f);
    },
    requestAccess(c, f) {
      return wt().resources.requestAccess(c, f);
    }
  }
};
function il(...c) {
  return c.filter(Boolean).join(" ");
}
const Nh = {
  "warm-paper": {
    bg: "#F8F5ED",
    bgCard: "#FCFAF5",
    accent: "#537D96",
    accentHover: "#456A80",
    accentLight: "rgba(83, 125, 150, 0.08)",
    text: "#3B3D3F",
    textLight: "#6B6F73",
    textMuted: "#8E9196",
    border: "rgba(83, 125, 150, 0.22)",
    danger: "#8B3A3A"
  },
  contemplation: {
    bg: "#F3F5F7",
    bgCard: "#F8F9FB",
    accent: "#7E99A8",
    accentHover: "#6B8594",
    accentLight: "rgba(126, 153, 168, 0.08)",
    text: "#2C3238",
    textLight: "#5A6570",
    textMuted: "#869098",
    border: "rgba(126, 153, 168, 0.22)",
    danger: "#8B4040"
  },
  "grass-aroma": {
    bg: "#F5F8F3",
    bgCard: "#F9FBF7",
    accent: "#5BA88C",
    accentHover: "#4D9179",
    accentLight: "rgba(91, 168, 140, 0.08)",
    text: "#2E3832",
    textLight: "#5E6B63",
    textMuted: "#8A9490",
    border: "rgba(91, 168, 140, 0.22)",
    danger: "#8B4A3A"
  },
  "high-contrast": {
    bg: "#FAF9F6",
    bgCard: "#FDFCFA",
    accent: "#3A6B85",
    accentHover: "#2E5870",
    accentLight: "rgba(58, 107, 133, 0.08)",
    text: "#1A1C1E",
    textLight: "#4A4E52",
    textMuted: "#6B6F73",
    border: "rgba(58, 107, 133, 0.28)",
    danger: "#7A3030"
  },
  midnight: {
    bg: "#3B4A54",
    bgCard: "#445560",
    accent: "#C99AAF",
    accentHover: "#D8AFC0",
    accentLight: "rgba(201, 154, 175, 0.11)",
    text: "#E1EAF0",
    textLight: "#B7C5CE",
    textMuted: "#A3B5C0",
    border: "rgba(170, 121, 141, 0.16)",
    danger: "#C77070"
  },
  "midnight-contrast": {
    bg: "#26343D",
    bgCard: "#30414B",
    accent: "#E6B1C4",
    accentHover: "#F0C4D3",
    accentLight: "rgba(230, 177, 196, 0.14)",
    text: "#F0F6FA",
    textLight: "#D3E0E8",
    textMuted: "#B7C8D3",
    border: "rgba(230, 177, 196, 0.26)",
    danger: "#E28B8B"
  },
  absolutely: {
    bg: "#F4F3EE",
    bgCard: "#FAF9F5",
    accent: "#B5846E",
    accentHover: "#A27460",
    accentLight: "rgba(181, 132, 110, 0.08)",
    text: "#2D2B28",
    textLight: "#6B6864",
    textMuted: "#9B9793",
    border: "rgba(177, 173, 161, 0.28)",
    danger: "#8B3A3A"
  },
  delve: {
    bg: "#FFFFFF",
    bgCard: "#F7F7F8",
    accent: "#1A1A1A",
    accentHover: "#000000",
    accentLight: "rgba(0, 0, 0, 0.05)",
    text: "#1A1A1A",
    textLight: "#6E6E6E",
    textMuted: "#999999",
    border: "rgba(0, 0, 0, 0.10)",
    danger: "#8B3A3A"
  },
  "deep-think": {
    bg: "#FCFCFD",
    bgCard: "#F8F8FA",
    accent: "#636AE8",
    accentHover: "#5158D4",
    accentLight: "rgba(99, 106, 232, 0.06)",
    text: "#1D1D1F",
    textLight: "#65656B",
    textMuted: "#95959C",
    border: "rgba(0, 0, 0, 0.09)",
    danger: "#8B3A3A"
  },
  "new-warm-paper": {
    bg: "#F5EFE4",
    bgCard: "#FBF7EE",
    accent: "#537D96",
    accentHover: "#3F6179",
    accentLight: "rgba(83, 125, 150, 0.08)",
    text: "#2A2622",
    textLight: "#4A433C",
    textMuted: "#6B6158",
    border: "#D8CFBE",
    danger: "#8B2C1F"
  }
}, Ty = {
  bg: "--hana-plugin-bg",
  bgCard: "--hana-plugin-bg-card",
  accent: "--hana-plugin-accent",
  accentHover: "--hana-plugin-accent-hover",
  accentLight: "--hana-plugin-accent-light",
  text: "--hana-plugin-text",
  textLight: "--hana-plugin-text-light",
  textMuted: "--hana-plugin-text-muted",
  border: "--hana-plugin-border",
  danger: "--hana-plugin-danger",
  radiusInput: "--hana-plugin-radius-input",
  radiusCard: "--hana-plugin-radius-card",
  fontUi: "--hana-plugin-font-ui",
  fontSerif: "--hana-plugin-font-serif",
  fontMono: "--hana-plugin-font-mono"
};
function Ay({ mode: c = "inherit", theme: f, className: d, style: o, children: E, "data-testid": j = "hana-plugin-theme", ...b }) {
  const q = typeof f == "string" ? f : void 0, T = zy(c, f);
  return i.jsx("div", { ...b, "data-testid": j, className: il("hana-plugin-theme", d), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? q : void 0, style: { ...T, ...o }, children: E });
}
function zy(c, f) {
  if (c === "inherit")
    return {};
  const d = Cy(c, f), o = {};
  for (const [E, j] of Object.entries(Ty)) {
    const b = d?.[E];
    b && (o[j] = b);
  }
  return o;
}
function Cy(c, f) {
  if (typeof f == "string")
    return Nh[f];
  if (f)
    return f;
  if (c === "hana")
    return Nh["warm-paper"];
}
w.forwardRef(function({ variant: f = "secondary", size: d = "md", loading: o = !1, iconLeft: E, iconRight: j, disabled: b, className: q, children: T, type: p = "button", ...U }, A) {
  return i.jsxs("button", { ...U, ref: A, type: p, disabled: b || o, className: il("hana-plugin-button", `hana-plugin-button-${f}`, `hana-plugin-button-${d}`, o && "hana-plugin-button-loading", q), children: [o ? i.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : E, T && i.jsx("span", { className: "hana-plugin-button-label", children: T }), !o && j] });
});
w.forwardRef(function({ label: f, size: d = "md", variant: o = "ghost", className: E, children: j, type: b = "button", ...q }, T) {
  return i.jsx("button", { ...q, ref: T, type: b, "aria-label": f, title: q.title || f, className: il("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${o}`, E), children: j });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: j, inputClassName: b, ...q }, T) {
  const p = w.useId(), U = E || p;
  return i.jsx(Mh, { label: f, hint: d, error: o, htmlFor: U, className: j, children: i.jsx("input", { ...q, ref: T, id: U, "aria-invalid": !!o, className: il("hana-plugin-input", b) }) });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: j, textareaClassName: b, rows: q = 4, ...T }, p) {
  const U = w.useId(), A = E || U;
  return i.jsx(Mh, { label: f, hint: d, error: o, htmlFor: A, className: j, children: i.jsx("textarea", { ...T, ref: p, id: A, rows: q, "aria-invalid": !!o, className: il("hana-plugin-textarea", b) }) });
});
w.forwardRef(function({ checked: f, onChange: d, label: o, disabled: E, className: j, onClick: b, type: q = "button", ...T }, p) {
  const U = typeof o == "string" ? o : T["aria-label"];
  return i.jsxs("span", { className: il("hana-plugin-switch-wrap", j), children: [i.jsx("button", { ...T, ref: p, type: q, role: "switch", "aria-checked": f, "aria-label": U, disabled: E, className: il("hana-plugin-switch", f && "hana-plugin-switch-on"), onClick: (A) => {
    b?.(A), !A.defaultPrevented && !E && d?.(!f);
  }, children: i.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), o && i.jsx("span", { className: "hana-plugin-switch-label", children: o })] });
});
function Mh({ label: c, hint: f, error: d, htmlFor: o, className: E, children: j }) {
  return i.jsxs("div", { className: il("hana-plugin-field", E), children: [c && i.jsx("label", { className: "hana-plugin-field-label", htmlFor: o, children: c }), f && i.jsx("div", { className: "hana-plugin-field-hint", children: f }), j, d && i.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const Oh = /^\d{4}-\d{2}-\d{2}$/;
function Cl(c, f) {
  if (!Oh.test(c)) return c;
  const d = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + f), d.toISOString().slice(0, 10);
}
function or(c) {
  const f = String(c || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: f[0] || "",
    end: f[1] || f[0] || ""
  };
}
function lr(c) {
  const f = (/* @__PURE__ */ new Date(`${c}T12:00:00Z`)).getUTCDay();
  return f === 0 ? 6 : f - 1;
}
function Uh(c, f) {
  return Array.from({ length: f }, (d, o) => Cl(c, o));
}
function nr(c, f) {
  const o = or(c).start || f, E = Cl(o, -lr(o));
  return Uh(E, 7);
}
function wy(c, f, d = 3) {
  const o = Math.max(1, Math.floor(d)), E = Math.max(0, Math.floor(f)), j = c.slice(E * o, E * o + o);
  return [...j, ...Array(Math.max(0, o - j.length)).fill(null)];
}
function Dy(c, f) {
  const o = or(c).start || f, E = Oh.test(o) ? `${o.slice(0, 7)}-01` : f, j = /* @__PURE__ */ new Date(`${E}T12:00:00Z`);
  j.setUTCMonth(j.getUTCMonth() + 1, 1);
  const b = new Date(j);
  b.setUTCDate(b.getUTCDate() - 1);
  const q = b.toISOString().slice(0, 10), T = Cl(E, -lr(E)), p = 6 - lr(q), U = Cl(q, p), A = Math.round(((/* @__PURE__ */ new Date(`${U}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${T}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Uh(T, A);
}
function Ou(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function hi(c) {
  if (!c || c.length < 16) return null;
  const f = Number(c.slice(11, 13)), d = Number(c.slice(14, 16));
  return !Number.isFinite(f) || !Number.isFinite(d) ? null : f * 60 + d;
}
function Rh(c) {
  const f = c.map((j) => hi(j.start_at || j.deadline_at)).filter((j) => j !== null), d = c.map((j) => {
    const b = hi(j.end_at);
    if (b !== null) return b;
    const q = hi(j.start_at || j.deadline_at);
    return q === null ? null : q + Number(j.duration || j.estimated_minutes || 45);
  }).filter((j) => j !== null), o = f.length ? Math.floor(Math.min(...f) / 60) - 1 : 10, E = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, o)),
    endHour: Math.min(24, Math.max(22, E))
  };
}
function qh(c, f, d, o = 56) {
  const E = hi(c.start_at || c.deadline_at);
  if (E === null) return null;
  const b = hi(c.end_at) ?? E + Number(c.duration || c.estimated_minutes || 45), q = Math.max(f * 60, E), T = Math.min(d * 60, Math.max(b, q + 30));
  return {
    top: (q - f * 60) / 60 * o,
    height: Math.max(30, (T - q) / 60 * o)
  };
}
const My = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消", "已调课"]), Oy = /* @__PURE__ */ new Set(["cancelled", "deleted", "removed", "void", "已取消", "已调课", "已删除", "删除"]);
function Uy(c) {
  const f = /* @__PURE__ */ new Map();
  for (const d of c) {
    const o = String(d.status || "").trim().toLowerCase();
    if (Oy.has(o)) continue;
    const E = d.start_at || d.deadline_at || d.window_start || "", j = String(d.title || "").trim().replace(/\s+/g, " ").toLowerCase(), b = E ? [d.domain, j, E, d.end_at || "", d.duration || d.estimated_minutes || ""].join("|") : `id:${d.id}`, q = f.get(b);
    (!q || ["completed", "已完成"].includes(d.status) && !["completed", "已完成"].includes(q.status)) && f.set(b, d);
  }
  return [...f.values()];
}
function Ry(c) {
  const f = c.filter((o) => !My.has(o.status) && o.start_at && o.end_at).map((o) => ({ item: o, start: new Date(o.start_at).getTime(), end: new Date(o.end_at).getTime() })).filter((o) => Number.isFinite(o.start) && Number.isFinite(o.end) && o.end > o.start).sort((o, E) => o.start - E.start || o.end - E.end), d = [];
  for (let o = 0; o < f.length; o += 1) {
    const E = f[o];
    for (let j = o + 1; j < f.length; j += 1) {
      const b = f[j];
      if (b.start >= E.end) break;
      if (E.item.id === b.item.id || b.end <= E.start) continue;
      const q = [E.item.domain, b.item.domain].sort().join("-"), T = q === "course-course" ? "course-course" : q === "affair-affair" ? "affair-affair" : "course-affair";
      d.push({
        id: `${E.item.id}:${b.item.id}`,
        kind: T,
        start: new Date(Math.max(E.start, b.start)).toISOString(),
        end: new Date(Math.min(E.end, b.end)).toISOString(),
        left: E.item,
        right: b.item
      });
    }
  }
  return d;
}
function fr(c) {
  const f = c.map((j) => {
    const b = j.start_at || j.deadline_at, q = b ? new Date(b).getTime() : Number.NaN, T = j.end_at ? new Date(j.end_at).getTime() : Number.NaN, p = Number.isFinite(T) ? T : q + Number(j.duration || j.estimated_minutes || 45) * 6e4;
    return { item: j, start: q, end: p };
  }).filter((j) => Number.isFinite(j.start)).sort((j, b) => j.start - b.start || j.end - b.end), d = [], o = f.map((j) => {
    let b = d.findIndex((q) => q <= j.start);
    return b < 0 && (b = d.length), d[b] = j.end, { ...j, lane: b };
  }), E = Math.max(1, d.length);
  return o.map((j) => ({ ...j, laneCount: E }));
}
function qy(c, f) {
  return c && typeof c == "object" && "error" in c && typeof c.error == "string" && c.error.trim() ? c.error.trim() : f;
}
async function Hy(c) {
  const f = await c.text();
  let d = null;
  if (f.trim())
    try {
      d = JSON.parse(f);
    } catch {
      throw new Error(c.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${c.status}）`);
    }
  if (!c.ok)
    throw new Error(qy(d, `请求失败（HTTP ${c.status}）`));
  if (!d || typeof d != "object")
    throw new Error("插件接口没有返回有效数据");
  return d;
}
async function it(c, f) {
  let d;
  try {
    d = await rr.api.fetch(c, f);
  } catch (o) {
    const E = o instanceof Error ? o.message : String(o || "未知错误");
    throw new Error(`页面会话请求失败：${E}`);
  }
  return Hy(d);
}
function ir() {
  let c = 0;
  return {
    begin() {
      return c += 1, c;
    },
    invalidate() {
      c += 1;
    },
    isCurrent(f) {
      return f === c;
    }
  };
}
const _h = {
  week: "周视图",
  month: "月视图"
}, By = {
  completed: "已完成",
  cancelled: "已取消",
  scheduled: "已安排",
  pending_confirmation: "待确认",
  in_progress: "进行中",
  postponed: "已推迟",
  needs_reschedule: "待重排",
  待上课: "待上课",
  已完成: "已完成",
  已取消: "已取消",
  已调课: "已调课",
  待确认: "待确认"
};
function ky(c) {
  const f = c;
  if (!f || !Array.isArray(f.items) || !Array.isArray(f.pending) || !Array.isArray(f.courses) || !Array.isArray(f.affairs) || !Array.isArray(f.students) || !Array.isArray(f.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return f;
}
function Ly(c) {
  const f = c, d = f ? [
    f.students,
    f.inactiveConfirmed,
    f.pending,
    f.confirmed,
    f.reservations,
    f.templates,
    f.reviews,
    f.vacations,
    f.zones,
    f.availability,
    f.sources,
    f.warnings
  ] : [];
  if (!f || !f.summary || !f.audit || !f.commute || d.some((o) => !Array.isArray(o)))
    throw new Error("筹备接口返回的数据结构不完整");
  return f;
}
class Yy extends w.Component {
  state = { error: "" };
  static getDerivedStateFromError(f) {
    return { error: f instanceof Error ? f.message : "页面渲染异常" };
  }
  componentDidCatch(f, d) {
    console.error("[laosu-workbench] render failed", f, d.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ i.jsx("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-error", children: /* @__PURE__ */ i.jsx("main", { className: "main-area", children: /* @__PURE__ */ i.jsxs("div", { className: "notice error", role: "alert", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "课务台页面异常" }),
      /* @__PURE__ */ i.jsx("span", { children: this.state.error }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => window.location.reload(), children: "重新载入" })
    ] }) }) }) : this.props.children;
  }
}
function la(c, f) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...f
  }).format(new Date(c)) : "未定";
}
function wa(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Vy(c) {
  return c ? `更新于 ${wa(c)}` : "尚未更新";
}
function Hh(c) {
  if (!c) return "当前范围";
  const [f, d] = c.split("..");
  if (!f || !d || !/^\d{4}-\d{2}-\d{2}$/.test(f) || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return c;
  const o = (E) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${E}T12:00:00+08:00`));
  return f === d ? o(f) : `${o(f)}—${o(d)}`;
}
function Th(c) {
  const f = Math.max(0, Math.round(Number(c) || 0)), d = Math.floor(f / 60), o = f % 60;
  return d ? o ? `${d} 小时 ${o} 分钟` : `${d} 小时` : `${o} 分钟`;
}
function pt(c) {
  return c.start_at || c.deadline_at || null;
}
function ur(c) {
  return ["completed", "已完成"].includes(c) ? "finished" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "待处理", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function dr(c, f) {
  if (!f || c.domain !== "course") return !1;
  const d = (c.start_at || "").slice(0, 10);
  return !!d && d < f && c.status === "待上课";
}
function hr(c, f) {
  if (dr(c, f)) return "state-pending";
  const d = ur(c.status);
  return d === "finished" ? "state-finished" : d === "muted" ? "state-neutral" : d === "error" ? "state-error" : d === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function mr(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function mi(c) {
  try {
    const f = window.sessionStorage.getItem(`laosu-workbench.cache.${c}`);
    return f ? JSON.parse(f) : null;
  } catch {
    return null;
  }
}
function Uu(c, f) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${c}`, JSON.stringify(f));
  } catch {
  }
}
function Gy() {
  const c = new URLSearchParams(window.location.search), f = c.get("tab") || "overview", d = c.get("scope") || "week", o = "overview", E = ["week", "month"].includes(d) ? d : "week", j = c.get("preview"), [b, q] = w.useState(o), [T, p] = w.useState(E), [U, A] = w.useState(() => {
    const M = Number(window.localStorage.getItem("laosu-workbench.view-scale"));
    return [0.7, 0.8, 0.9, 1].includes(M) ? M : null;
  }), [S, L] = w.useState(1), Q = U ?? S, [de, V] = w.useState(f === "actions" || !!j), [ie, ae] = w.useState(null), le = ie !== null, [W, Se] = w.useState(null), [ge, K] = w.useState(!0), [k, I] = w.useState(""), [ee, Z] = w.useState(null), [se, Ee] = w.useState(null), [qe, Ue] = w.useState({ text: "", nonce: 0 }), [g, B] = w.useState(!1), [$, v] = w.useState(""), [P, h] = w.useState(null), [D, G] = w.useState({}), [F, ve] = w.useState(!1), [be, we] = w.useState(null), [Ie, Y] = w.useState(0), [He, ye] = w.useState(null), [J, kt] = w.useState(null), Pe = w.useRef(null), Wt = w.useRef(null), It = w.useRef(ir()), rt = w.useRef(ir()), ra = w.useRef(/* @__PURE__ */ new Set()), vt = w.useRef(null), jt = w.useRef(!1), Dt = w.useRef(!1), Da = w.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  });
  w.useEffect(() => {
    const M = () => {
      const X = window.innerWidth;
      L(X < 680 ? 0.7 : X < 900 ? 0.8 : X < 1120 ? 0.9 : 1);
    };
    return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, []);
  function Dl(M) {
    A(M), M === null ? window.localStorage.removeItem("laosu-workbench.view-scale") : window.localStorage.setItem("laosu-workbench.view-scale", String(M));
  }
  function De(M) {
    const X = [0.7, 0.8, 0.9, 1], ue = X.reduce((he, Te) => Math.abs(Te - Q) < Math.abs(he - Q) ? Te : he, X[0]), ce = X.indexOf(ue);
    Dl(X[Math.max(0, Math.min(X.length - 1, ce + M))]);
  }
  const bt = w.useCallback(async (M = T, X = {}) => {
    const ue = X.silent === !0, ce = It.current.begin();
    ue || (K(!0), I(""));
    try {
      const he = new URLSearchParams({ scope: M });
      X.fresh && he.set("fresh", "1");
      const Te = ky(await it(`api/dashboard?${he.toString()}`));
      return It.current.isCurrent(ce) ? (Se(Te), Uu(`dashboard.${M}`, Te), !0) : null;
    } catch (he) {
      return It.current.isCurrent(ce) ? (ue || I(he.message || "读取失败"), !1) : null;
    } finally {
      It.current.isCurrent(ce) && !ue && K(!1);
    }
  }, [T]);
  w.useEffect(() => {
    const M = mi(`dashboard.${E}`);
    M && (Se(M), K(!1)), bt(E, { fresh: !0, silent: !!M });
  }, []), w.useEffect(() => {
    const M = (X) => {
      X.target instanceof HTMLElement && !Pe.current?.contains(X.target) && (vt.current = X.target);
    };
    return window.addEventListener("pointerdown", M, !0), () => window.removeEventListener("pointerdown", M, !0);
  }, []), w.useEffect(() => {
    j && (V(!0), it(`api/preview/${encodeURIComponent(j)}`).then(Z).catch((M) => {
      Z({ ok: !1, error: M.message });
    }));
  }, [j]), w.useEffect(() => {
    if (!de) return;
    const M = Pe.current, X = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !jt.current) {
      const fe = new URL(window.location.href);
      fe.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", fe), jt.current = !0;
    }
    const ue = window.setTimeout(() => {
      ((se ? M?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : M?.querySelector(".ai-composer textarea")) || M?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), se && M?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), ce = () => Array.from(M?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((fe) => fe.getClientRects().length > 0 && !fe.closest("[hidden]")), he = (fe) => {
      if (fe.key === "Escape") {
        fe.preventDefault(), oa();
        return;
      }
      if (fe.key !== "Tab") return;
      const St = ce();
      if (!St.length) return;
      const yt = St[0], Xe = St[St.length - 1];
      M?.contains(document.activeElement) ? fe.shiftKey && document.activeElement === yt ? (fe.preventDefault(), Xe.focus()) : !fe.shiftKey && document.activeElement === Xe && (fe.preventDefault(), yt.focus()) : (fe.preventDefault(), (fe.shiftKey ? Xe : yt).focus());
    }, Te = () => {
      jt.current && (jt.current = !1, V(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", he), window.addEventListener("popstate", Te), () => {
      window.clearTimeout(ue), document.body.style.overflow = X, window.removeEventListener("keydown", he), window.removeEventListener("popstate", Te), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [de]), w.useEffect(() => {
    if (!le) return;
    const M = Wt.current, X = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Dt.current) {
      const fe = new URL(window.location.href);
      fe.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", fe), Dt.current = !0;
    }
    const ue = window.setTimeout(() => M?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), ce = () => Array.from(M?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((fe) => fe.getClientRects().length > 0 && !fe.closest("[hidden]")), he = (fe) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (fe.key === "Escape") {
        fe.preventDefault(), Ma();
        return;
      }
      if (fe.key !== "Tab") return;
      const St = ce();
      if (!St.length) return;
      const yt = St[0], Xe = St[St.length - 1];
      M?.contains(document.activeElement) ? fe.shiftKey && document.activeElement === yt ? (fe.preventDefault(), Xe.focus()) : !fe.shiftKey && document.activeElement === Xe && (fe.preventDefault(), yt.focus()) : (fe.preventDefault(), (fe.shiftKey ? Xe : yt).focus());
    }, Te = () => {
      const fe = new URL(window.location.href).searchParams.get("drawer");
      fe === "context" || fe === "actions" || !Dt.current || (Dt.current = !1, ae(null));
    };
    return window.addEventListener("keydown", he), window.addEventListener("popstate", Te), () => {
      window.clearTimeout(ue), document.body.style.overflow = X, window.removeEventListener("keydown", he), window.removeEventListener("popstate", Te), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [le]), w.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", b);
    const M = () => {
      Da.current[b] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${b}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", M), () => window.removeEventListener("pagehide", M);
  }, [b]), w.useEffect(() => {
    if (J?.tab === b) return;
    const M = Da.current[b] || 0;
    let X = 0, ue, ce = !1;
    const he = () => {
      ce = !0;
    }, Te = () => {
      ce || (window.scrollTo({ top: M, behavior: "auto" }), X += 1, Math.abs(window.scrollY - M) > 3 && X < 15 && (ue = window.setTimeout(Te, 90)));
    }, fe = window.requestAnimationFrame(Te);
    return window.addEventListener("wheel", he, { passive: !0 }), window.addEventListener("touchstart", he, { passive: !0 }), window.addEventListener("keydown", he), () => {
      ce = !0, window.cancelAnimationFrame(fe), ue && window.clearTimeout(ue), window.removeEventListener("wheel", he), window.removeEventListener("touchstart", he), window.removeEventListener("keydown", he);
    };
  }, [b]), w.useEffect(() => {
    if (!J || J.tab !== b) return;
    let M = 0, X, ue, ce;
    const he = () => {
      const fe = Array.from(document.querySelectorAll("[data-item-id]")).find((St) => St.dataset.itemId === J.id);
      if (!fe && M < 20) {
        M += 1, X = window.setTimeout(he, 60);
        return;
      }
      if (!fe) {
        kt(null);
        return;
      }
      ce = fe, fe.classList.add("target-highlight"), fe.setAttribute("tabindex", "-1"), fe.scrollIntoView({ behavior: "smooth", block: "center" }), fe.focus({ preventScroll: !0 }), ue = window.setTimeout(() => {
        fe.classList.remove("target-highlight"), fe.removeAttribute("tabindex"), kt(null);
      }, 2400);
    }, Te = window.setTimeout(he, 50);
    return () => {
      window.clearTimeout(Te), X && window.clearTimeout(X), ue && window.clearTimeout(ue), ce?.classList.remove("target-highlight"), ce?.removeAttribute("tabindex");
    };
  }, [J, b, W?.observedAt]), w.useEffect(() => {
    if (!$) return;
    const M = window.setTimeout(() => v(""), 4800);
    return () => window.clearTimeout(M);
  }, [$]);
  const ul = w.useRef(null);
  w.useEffect(() => {
    const M = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const X = await it("api/data-revision");
          if (!X?.ok || typeof X.revision != "number") return;
          if (ul.current === null) {
            ul.current = X.revision;
            return;
          }
          X.revision !== ul.current && (ul.current = X.revision, Oa({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(M);
  }, [T]);
  const yi = w.useMemo(
    () => (W?.pending ?? []).filter((M) => !["completed", "cancelled"].includes(M.status)),
    [W]
  );
  async function Ml(M) {
    const X = new URL(window.location.href);
    X.searchParams.set("scope", M), window.history.replaceState(window.history.state, "", X), p(M);
    const ue = mi(`dashboard.${M}`);
    if (ue) {
      Se(ue), K(!1), bt(M, { fresh: !0, silent: !0 });
      return;
    }
    await bt(M);
  }
  function xn(M) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const X = document.activeElement;
    ((X instanceof HTMLElement && X !== document.body && !Pe.current?.contains(X) ? X : null) || M || vt.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function Ol(M) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const X = document.activeElement, ue = X instanceof HTMLElement && X !== document.body && !Wt.current?.contains(X) ? X : null;
    (M || ue || vt.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function gi(M, X) {
    Ol(X), ae({ kind: "item", item: M });
  }
  function pi(M, X, ue) {
    Ol(X), ae({ kind: "day", date: M, items: ue });
  }
  function cl(M) {
    Ol(M), ae({ kind: "system" });
  }
  function ot() {
    const M = /* @__PURE__ */ Symbol("workbench-operation");
    return ra.current.add(M), B(!0), M;
  }
  function Lt(M) {
    ra.current.delete(M), B(ra.current.size > 0);
  }
  function ut() {
    rt.current.invalidate(), Z(null);
  }
  function Ru(M) {
    rt.current.invalidate(), Z(M);
  }
  function qu() {
    xn(document.querySelector(".ai-action-button")), Ee(null), Ue({ text: "", nonce: Date.now() }), ut(), V(!0);
  }
  function bi(M) {
    xn(), Ee(null), Ue({ text: M, nonce: Date.now() }), ut(), V(!0);
  }
  function sl(M) {
    xn(), Ee(M), ut(), V(!0);
  }
  function oa() {
    if (jt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    jt.current = !1, V(!1);
  }
  function Ma() {
    if (Dt.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    Dt.current = !1, ae(null);
  }
  async function fa(M, X) {
    if (!P) {
      h(X.id);
      try {
        const ue = M === "courseCancel" ? await it("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: X.title, date: X.start_at?.slice(0, 10), time: X.start_at?.slice(11, 16), reason: "没上" })
        }) : await it("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: X.id, expectedVersion: X.version })
        });
        if (!ue.ok) throw new Error(ue.error || "处理未完成");
        M === "affairComplete" ? (G((ce) => ({ ...ce, [X.id]: { ok: !0, text: ue.message || "已完成", buttonLabel: "已完成" } })), v(`${X.title} 已完成`)) : v(`${X.title} ${X.start_at?.slice(5, 16) ?? ""} 已记录没上`), await bt(T);
      } catch (ue) {
        M === "affairComplete" && G((ce) => ({ ...ce, [X.id]: { ok: !1, text: `处理失败：${ue.message || "未知错误"}` } })), v(`处理失败：${ue.message || "未知错误"}`);
      } finally {
        h(null);
      }
    }
  }
  async function Oa(M = {}) {
    const X = M.silent === !0;
    X || v("正在刷新数据…");
    const ue = await bt(T, { ...M, fresh: !X });
    ue === !0 ? (G({}), we(null), Y((ce) => ce + 1), X || v("本地课程与事务数据已刷新")) : ue === !1 && !X && v("刷新失败，请查看页面错误");
  }
  async function rl(M) {
    const X = rt.current.begin(), ue = ot();
    Z(null);
    try {
      const ce = await it("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(M)
      });
      if (!rt.current.isCurrent(X)) return;
      Z({ ...ce, operation: String(M.operation || ""), input: M });
    } catch (ce) {
      rt.current.isCurrent(X) && Z({ ok: !1, error: ce.message });
    } finally {
      Lt(ue);
    }
  }
  async function Hu(M) {
    if (!P) {
      h(M.id), G((X) => ({ ...X, [M.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const X = await it("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: M.id, expectedVersion: M.version })
        });
        if (!X.ok) throw new Error(X.error || "没约上的处理未完成");
        const ue = X.outcome?.candidateDate, ce = ue ? `已安排 ${ue.slice(5)}` : "已处理";
        G((he) => ({ ...he, [M.id]: {
          ok: !0,
          text: X.message || "已推进到下一次尝试",
          buttonLabel: ce,
          undo: X.outcome ? { expectedVersion: X.outcome.version } : void 0
        } })), await bt(T);
      } catch (X) {
        const ue = X.message || "没约上的处理失败";
        G((ce) => ({ ...ce, [M.id]: { ok: !1, text: `处理失败：${ue}`, buttonLabel: "重试" } }));
      } finally {
        h(null);
      }
    }
  }
  async function xi(M) {
    if (P) return;
    const X = D[M.id]?.undo;
    h(M.id), G((ue) => ({ ...ue, [M.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const ue = await it("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: M.id, expectedVersion: X?.expectedVersion ?? M.version })
      });
      if (!ue.ok) throw new Error(ue.error || "恢复上一候选日未完成");
      const ce = ue.outcome?.candidateDate;
      G((he) => ({ ...he, [M.id]: {
        ok: !0,
        text: ue.message || "已恢复到上一候选日",
        buttonLabel: ce ? `回到 ${ce.slice(5)}` : "已恢复"
      } })), await bt(T);
    } catch (ue) {
      const ce = ue.message || "恢复上一候选日失败";
      G((he) => ({ ...he, [M.id]: { ok: !1, text: `恢复失败：${ce}`, buttonLabel: "重试" } }));
    } finally {
      h(null);
    }
  }
  async function jn() {
    if (!ee?.token || !ee.canCommit) return;
    const M = rt.current.begin(), X = ot(), ue = ee.operation || se?.operation;
    try {
      const ce = await it("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: ee.token })
      }), he = { ok: ce.ok, summary: ce.summary, message: `${ce.message || ""}${ce.exportMessage ? `
导出：${ce.exportMessage}` : ""}${ce.syncMessage ? `
日历：${ce.syncMessage}` : ""}`, result: ce, operation: ue, input: ee.input, committed: !!ce.ok };
      await bt(T), Y((Te) => Te + 1), rt.current.isCurrent(M) && Z(he);
    } catch (ce) {
      rt.current.isCurrent(M) && Z({ ok: !1, error: ce.message });
    } finally {
      Lt(X);
    }
  }
  async function ol() {
    const M = ee?.batchItems ?? [];
    if (!M.length) return;
    const X = rt.current.begin(), ue = ot(), ce = /* @__PURE__ */ new Map();
    try {
      for (const he of M) {
        if (!he.canCommit) {
          ce.set(he.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const Te = await it("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: he.token })
          });
          if (ce.set(he.token, { ok: !!Te.ok, message: Te.message || (Te.ok ? "已执行" : "执行失败") }), !Te.ok) break;
        } catch (Te) {
          ce.set(he.token, { ok: !1, message: Te.message || "提交失败" });
          break;
        }
      }
      await bt(T), Y((he) => he + 1), rt.current.isCurrent(X) && ee && Z({
        ...ee,
        ok: M.every((he) => ce.get(he.token)?.ok === !0),
        committed: !0,
        message: M.map((he) => {
          const Te = ce.get(he.token);
          return `${Te?.ok ? "✓" : Te ? "✗" : "·"} ${he.summary}：${Te?.message || "未执行"}`;
        }).join(`
`),
        batchItems: M.map((he) => {
          const Te = ce.get(he.token);
          return { ...he, canCommit: !1, resultOk: Te?.ok ?? !1, message: Te?.message || "未执行" };
        })
      });
    } finally {
      Lt(ue);
    }
  }
  return /* @__PURE__ */ i.jsx(Ay, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ i.jsxs("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-main", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "topbar", "data-ui": "topbar", children: [
      /* @__PURE__ */ i.jsx("nav", { className: "tabbar", "aria-label": "日程视图", "data-ui": "primary-navigation", children: Object.keys(_h).map((M) => /* @__PURE__ */ i.jsx("button", { type: "button", className: T === M ? "tab active" : "tab", "data-ui-role": "nav-item", "data-ui-id": `nav-${M}`, "aria-current": T === M ? "page" : void 0, disabled: ge, onClick: () => {
        Ml(M);
      }, children: _h[M] }, M)) }),
      /* @__PURE__ */ i.jsxs("div", { className: "top-actions", "data-ui": "top-actions", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "view-scale-control", role: "group", "aria-label": "页面缩放", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => De(-1), disabled: Q <= 0.7, "aria-label": "缩小页面", children: "−" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: U === null ? "auto active" : "auto", onClick: () => Dl(null), "aria-label": `当前缩放 ${Math.round(Q * 100)}%，点击恢复自动适配`, children: U === null ? `自动 ${Math.round(Q * 100)}%` : `${Math.round(Q * 100)}%` }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => De(1), disabled: Q >= 1, "aria-label": "放大页面", children: "＋" })
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: de ? "ai-action-button active" : "ai-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-ai", onClick: qu, "aria-expanded": de, children: "✦ AI 操作" }),
        /* @__PURE__ */ i.jsx("span", { className: "updated-at", children: Vy(W?.observedAt) }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${W?.health?.ok ? "health good" : "health bad"} health-button${ie?.kind === "system" ? " active" : ""}`, "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-system-status", onClick: (M) => cl(M.currentTarget), "aria-expanded": ie?.kind === "system", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          W?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: "ghost-button refresh-local-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "refresh-workbench", onClick: () => {
          Oa();
        }, "aria-label": "刷新本地数据", disabled: ge, children: [
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "↻" }),
          /* @__PURE__ */ i.jsx("span", { className: "refresh-local-label", children: "刷新本地数据" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: "main-area scalable-main", style: { zoom: Q, width: `${100 / Q}%` }, children: [
      $ && /* @__PURE__ */ i.jsx("div", { className: "toast", role: "status", children: $ }),
      k && /* @__PURE__ */ i.jsx(wl, { tone: "error", title: "读取失败", text: k }),
      W?.warnings?.length ? /* @__PURE__ */ i.jsx(wl, { tone: "warn", title: "有警告", text: W.warnings.join("；") }) : null,
      ge && !W ? /* @__PURE__ */ i.jsx(vr, {}) : null,
      /* @__PURE__ */ i.jsxs("div", { className: ge && W ? "view-content scope-loading" : "view-content", "aria-busy": ge && !!W, inert: ge && !!W, children: [
        W && b === "overview" && /* @__PURE__ */ i.jsx(Xy, { dashboard: W, onInspect: gi, onOpenDay: pi }),
        b === "planning" && /* @__PURE__ */ i.jsx(Wy, { onAction: sl, onAskAi: bi, refreshKey: Ie, sectionHint: He, scheduleText: W?.scheduleText, onDataChanged: Oa }),
        b === "affairs" && /* @__PURE__ */ i.jsx(tg, { onQuick: fa, onAskAi: bi, onPrepare: sl, onInspect: gi, onRetry: Hu, onRetryPrev: xi, retryingId: P, feedback: D, refreshKey: Ie, observedAt: W?.observedAt ?? "", onOpenDay: (M, X, ue) => pi(M, ue, X), localDate: W?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "context-drawer-backdrop", hidden: !le, onMouseDown: (M) => {
      M.currentTarget === M.target && Ma();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: Wt, className: "context-drawer", "data-ui": "drawer", "data-ui-id": "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: Ma, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: ie?.kind === "system" ? "运行状态" : ie?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ i.jsx("h2", { children: ie?.kind === "system" ? "系统状态" : ie?.kind === "day" ? la(`${ie.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : ie?.item.title }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "context-drawer-body", children: ie && W && /* @__PURE__ */ i.jsx(ug, { view: ie, dashboard: W }) })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "action-drawer-backdrop", hidden: !de, onMouseDown: (M) => {
      M.currentTarget === M.target && oa();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: Pe, className: "action-drawer", "data-ui": "drawer", "data-ui-id": "ai-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: oa, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ i.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ i.jsx(
        ag,
        {
          pending: yi,
          students: W?.students ?? [],
          preset: se,
          aiDraft: qe,
          preview: ee,
          busy: g,
          onPreview: rl,
          onAiPreview: Ru,
          onCommit: jn,
          onCommitBatch: ol,
          onClear: ut,
          onClose: oa
        }
      ) })
    ] }) })
  ] }) });
}
function Xy({ dashboard: c, onInspect: f, onOpenDay: d }) {
  const o = w.useMemo(() => {
    const A = /* @__PURE__ */ new Map();
    return c.courses.forEach((S) => A.set(S.id, { ...S, domain: "course" })), c.affairs.forEach((S) => A.set(S.id, { ...S, domain: "affair" })), Uy([...A.values()]).sort((S, L) => String(pt(S) || "").localeCompare(String(pt(L) || "")));
  }, [c.courses, c.affairs]), j = o.filter((A) => A.domain === "course").filter((A) => !["已取消", "已调课", "cancelled"].includes(A.status)), b = j.filter((A) => ["已完成", "completed"].includes(A.status)), q = j.reduce((A, S) => A + Number(S.duration || 0), 0), T = b.reduce((A, S) => A + Number(S.duration || 0), 0), p = w.useMemo(() => Ry(o), [o]), U = o.filter((A) => A.domain === "affair" && A.start_at && !A.end_at && !["completed", "cancelled", "已完成", "已取消"].includes(A.status));
  return /* @__PURE__ */ i.jsx("div", { className: "view-stack read-only-schedule", children: /* @__PURE__ */ i.jsxs("div", { className: "panel wide calendar-panel", children: [
    /* @__PURE__ */ i.jsx(na, { title: c.scope === "week" ? "周课表" : "月课表", meta: Hh(c.range) }),
    c.scope === "month" && /* @__PURE__ */ i.jsxs("section", { className: "month-course-summary", "aria-label": "本月课时统计", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { children: "排定课程" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          j.length,
          " 节"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { children: "总课时" }),
        /* @__PURE__ */ i.jsx("strong", { children: Th(q) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { children: "已完成" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          b.length,
          " 节 · ",
          Th(T)
        ] })
      ] })
    ] }),
    (p.length > 0 || U.length > 0) && /* @__PURE__ */ i.jsxs("section", { className: p.length ? "schedule-conflict-alert error" : "schedule-conflict-alert warn", "aria-label": "日程冲突检查", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: p.length ? `${p.length} 处时间冲突` : "冲突检查不完整" }),
        /* @__PURE__ */ i.jsx("span", { children: "刷新后按本地课程与事务数据即时核对" })
      ] }),
      p.slice(0, 4).map((A) => /* @__PURE__ */ i.jsxs("p", { children: [
        A.kind === "course-course" ? "课程重叠" : A.kind === "course-affair" ? "课程／事务冲突" : "事务重叠",
        "：",
        A.left.title,
        " ↔ ",
        A.right.title,
        " · ",
        la(A.start, { month: "numeric", day: "numeric" }),
        " ",
        wa(A.start),
        "–",
        wa(A.end)
      ] }, A.id)),
      U.length > 0 && /* @__PURE__ */ i.jsxs("p", { children: [
        U.length,
        " 个进行中事务缺结束时间，无法完整判断重叠。"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "calendar-legend", "aria-label": "状态颜色图例", children: [
      /* @__PURE__ */ i.jsxs("span", { className: "confirmed", children: [
        /* @__PURE__ */ i.jsx("i", {}),
        "课程"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "pending", children: [
        /* @__PURE__ */ i.jsx("i", {}),
        "事务／待确认"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "finished", children: [
        /* @__PURE__ */ i.jsx("i", {}),
        "已完成"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "muted", children: [
        /* @__PURE__ */ i.jsx("i", {}),
        "已取消"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "temporary", children: [
        /* @__PURE__ */ i.jsx("i", {}),
        "临时"
      ] })
    ] }),
    c.scope === "week" ? /* @__PURE__ */ i.jsx($y, { items: o, range: c.range, localDate: c.localDate, onInspect: f }) : /* @__PURE__ */ i.jsx(kh, { items: o, range: c.range, localDate: c.localDate, onOpenDay: d })
  ] }) });
}
function Qy(c) {
  return fr(c)[0]?.laneCount || 1;
}
const Zy = 52, Ky = 150;
function Jy(c, f) {
  const [d, o] = w.useState(0);
  if (w.useEffect(() => {
    const b = c.current;
    if (!b || typeof ResizeObserver > "u") return;
    const q = new ResizeObserver((T) => {
      const p = T[0]?.contentRect.width;
      p && Number.isFinite(p) && o(p);
    });
    return q.observe(b), () => q.disconnect();
  }, [c]), f) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const E = Math.floor((d - Zy) / Ky), j = Math.max(1, Math.min(7, E));
  return { visibleDays: j, paginated: j < 7 };
}
function Bh() {
  const c = w.useRef(null), f = w.useRef(null), d = w.useCallback((j) => {
    if (j.button !== 0 || j.target.closest("button, article, a, input, select, textarea")) return;
    const b = c.current;
    !b || b.scrollWidth <= b.clientWidth || (f.current = { pointerId: j.pointerId, startX: j.clientX, scrollLeft: b.scrollLeft }, b.setPointerCapture(j.pointerId), b.classList.add("dragging"));
  }, []), o = w.useCallback((j) => {
    const b = c.current, q = f.current;
    !b || !q || q.pointerId !== j.pointerId || (b.scrollLeft = q.scrollLeft - (j.clientX - q.startX));
  }, []), E = w.useCallback((j) => {
    const b = c.current, q = f.current;
    !b || !q || q.pointerId !== j.pointerId || (b.hasPointerCapture(j.pointerId) && b.releasePointerCapture(j.pointerId), b.classList.remove("dragging"), f.current = null);
  }, []);
  return { ref: c, onPointerDown: d, onPointerMove: o, onPointerUp: E, onPointerCancel: E };
}
function $y({ items: c, range: f, localDate: d, onInspect: o }) {
  const E = w.useMemo(() => nr(f, d), [f, d]), j = Bh(), b = E, q = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    return c.forEach((ie) => {
      const ae = Ou(ie);
      ae && (ae < d && ["已取消", "已调课", "cancelled"].includes(ie.status) || V.set(ae, [...V.get(ae) || [], ie]));
    }), V.forEach((ie, ae) => V.set(ae, [...ie].sort((le, W) => String(pt(le) || "").localeCompare(String(pt(W) || ""))))), V;
  }, [c, d]), T = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    for (const ie of E) {
      const ae = (q.get(ie) || []).filter((le) => le.start_at || le.deadline_at);
      V.set(ie, fr(ae));
    }
    return V;
  }, [q, E]), p = "36px repeat(7, minmax(0, 1fr))", U = c.filter((V) => V.start_at || V.deadline_at), { startHour: A, endHour: S } = Rh(U), L = 60, Q = (S - A) * L, de = Array.from({ length: S - A + 1 }, (V, ie) => A + ie);
  return /* @__PURE__ */ i.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "七列周时间视图", ...j, children: /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: p }, children: [
      /* @__PURE__ */ i.jsx("div", { className: "week-corner", children: "时间" }),
      b.map((V) => /* @__PURE__ */ i.jsxs("div", { className: V === d ? "week-day-header today" : "week-day-header", children: [
        /* @__PURE__ */ i.jsx("span", { children: la(`${V}T12:00:00+08:00`, { weekday: "short" }) }),
        /* @__PURE__ */ i.jsx("strong", { children: Number(V.slice(8, 10)) }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          q.get(V)?.length || 0,
          " 项"
        ] })
      ] }, V))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: p }, children: [
      /* @__PURE__ */ i.jsx("div", { className: "week-time-axis", style: { height: Q }, children: de.map((V) => /* @__PURE__ */ i.jsxs("span", { style: { top: (V - A) * L }, children: [
        String(V).padStart(2, "0"),
        ":00"
      ] }, V)) }),
      b.map((V) => {
        const ie = T.get(V) || [];
        return /* @__PURE__ */ i.jsx("div", { className: V === d ? "week-day-track today" : "week-day-track", style: { height: Q }, children: ie.map(({ item: ae, lane: le, laneCount: W }) => {
          const Se = qh(ae, A, S, L);
          if (!Se) return null;
          const ge = 100 / W, K = ae.start_at || ae.deadline_at, k = dr(ae, d);
          return /* @__PURE__ */ i.jsxs(
            "article",
            {
              className: `week-time-block ${ae.domain} ${hr(ae, d)}${mr(ae) ? " temporary" : ""}`,
              style: { top: Se.top, height: Se.height, left: `calc(${le * ge}% + 4px)`, width: `calc(${ge}% - 8px)` },
              tabIndex: 0,
              role: "button",
              onClick: (I) => {
                I.target.closest("button") || o(ae, I.currentTarget);
              },
              onKeyDown: (I) => {
                (I.key === "Enter" || I.key === " ") && (I.preventDefault(), o(ae, I.currentTarget));
              },
              "data-item-id": ae.id,
              "aria-label": `${wa(K)} ${ae.title}${k ? "（已过期待标记）" : ""}，${ae.domain === "course" ? `${ae.duration || "—"} 分钟课程` : "事务"}，打开详情`,
              children: [
                /* @__PURE__ */ i.jsxs("strong", { children: [
                  wa(K),
                  " · ",
                  ae.title,
                  k ? "（过期）" : ""
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: ae.domain === "course" ? `${ae.duration || "—"} 分钟 · 课程` : ae.estimated_minutes ? `${ae.estimated_minutes} 分钟 · 事务` : "事务" })
              ]
            },
            ae.id
          );
        }) }, V);
      })
    ] })
  ] }) });
}
function kh({ items: c, range: f, localDate: d, onOpenDay: o }) {
  const E = w.useMemo(() => Dy(f, d), [f, d]), j = (f.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), b = w.useMemo(() => {
    const T = /* @__PURE__ */ new Map();
    return c.forEach((p) => {
      const U = Ou(p);
      U && (U < d && ["已取消", "已调课", "cancelled"].includes(p.status) || T.set(U, [...T.get(U) || [], p]));
    }), T.forEach((p, U) => T.set(U, [...p].sort((A, S) => String(pt(A) || "").localeCompare(String(pt(S) || ""))))), T;
  }, [c, d]), q = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ i.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ i.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "month-weekdays", children: q.map((T) => /* @__PURE__ */ i.jsxs("span", { children: [
      "周",
      T
    ] }, T)) }),
    /* @__PURE__ */ i.jsx("div", { className: "month-grid", children: E.map((T) => {
      const p = b.get(T) || [], U = ["month-cell"];
      return T.startsWith(j) || U.push("outside"), T === d && U.push("today"), /* @__PURE__ */ i.jsxs("button", { type: "button", className: U.join(" "), onClick: (A) => o(T, A.currentTarget), children: [
        /* @__PURE__ */ i.jsxs("header", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: Number(T.slice(8, 10)) }),
          /* @__PURE__ */ i.jsx("span", { children: p.length ? `${p.length} 项` : "" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "month-item-list", children: [
          p.slice(0, 3).map((A) => /* @__PURE__ */ i.jsxs("span", { className: `month-item ${A.domain} ${hr(A, d)}${mr(A) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ i.jsx("i", {}),
            wa(pt(A)) || "待定",
            " · ",
            A.title,
            dr(A, d) ? "（过期）" : ""
          ] }, A.id)),
          p.length > 3 && /* @__PURE__ */ i.jsxs("span", { className: "month-more", children: [
            "＋",
            p.length - 3,
            " 项"
          ] })
        ] })
      ] }, T);
    }) })
  ] }) });
}
function Ps(c) {
  const f = Math.floor(c / 60), d = c % 60;
  return String(f).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function Fy({ onAction: c, onAskAi: f, refreshKey: d = 0 }) {
  const [o, E] = w.useState(() => mi("cockpit")), [j, b] = w.useState(!o), [q, T] = w.useState(""), p = w.useCallback(async (S = !1, L = !1) => {
    S || b(!0);
    try {
      const Q = await it("api/cockpit" + (L ? "?fresh=1" : ""));
      return E(Q), Uu("cockpit", Q), T(""), !0;
    } catch (Q) {
      return T(Q?.message || "读取失败"), !1;
    } finally {
      b(!1);
    }
  }, []);
  w.useEffect(() => {
    p(!o);
  }, [p]), w.useEffect(() => {
    d > 0 && p(!0, !0);
  }, [d]);
  const U = w.useMemo(() => {
    const S = /* @__PURE__ */ new Map();
    for (const Q of o?.students ?? [])
      S.has(Q.group) || S.set(Q.group, []), S.get(Q.group).push(Q);
    return ["本周已排", "已预留", "未排"].map((Q) => ({ label: Q, items: S.get(Q) ?? [] }));
  }, [o]);
  if (j && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (q && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx(aa, { label: "驾驶舱读取", ok: !1, detail: q }) });
  const A = o?.localDate ?? "";
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ i.jsx(vi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ i.jsxs("span", { className: "muted-note", children: [
        o?.monday,
        " 当周 · 今天 ",
        A
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        p(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: () => f(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ i.jsx(na, { title: "候选学生" }),
        U.map((S) => /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            S.label,
            " · ",
            S.items.length
          ] }),
          S.items.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "（无）" }) : S.items.map((L) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: L.name }),
            /* @__PURE__ */ i.jsx("span", { className: "cockpit-zone", children: L.zone })
          ] }, L.name))
        ] }, S.label))
      ] }),
      /* @__PURE__ */ i.jsx("section", { className: "cockpit-canvas", children: o?.days.map((S) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day" + (S.date === A ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ i.jsx("strong", { children: S.weekday }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: S.date.slice(5) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-body", children: [
          S.courses.map((L, Q) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => c({ operation: "course_move", student: L.title, fromDate: S.date, fromTime: String(L.start).slice(11, 16) }), children: [
              /* @__PURE__ */ i.jsx("span", { children: L.title }),
              /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
                String(L.start).slice(11, 16),
                "–",
                String(L.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "cockpit-card-ai", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", title: "用一句话交给 AI 调时间", onClick: () => f("把" + L.title + " " + S.date + " " + String(L.start).slice(11, 16) + " 的这节课调一下时间"), children: "调时间" })
          ] }, "c" + Q)),
          S.reservations.map((L, Q) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => c({ operation: "reservation_update", id: L.id, student: L.student, date: S.date, time: String(L.start).slice(11, 16) }), children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              L.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
              String(L.start).slice(11, 16),
              "–",
              String(L.end).slice(11, 16)
            ] })
          ] }, "r" + Q)),
          S.gaps.map((L, Q) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + L.minutes + " 分钟，点击预留", onClick: () => c({ operation: "reservation_add", date: S.date, time: Ps(L.start) }), children: [
            Ps(L.start),
            "–",
            Ps(L.end),
            " 空档"
          ] }, "g" + Q)),
          S.courses.length === 0 && S.reservations.length === 0 && /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, S.date)) }),
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ i.jsx(na, { title: "实时诊断" }),
        /* @__PURE__ */ i.jsx(bn, { label: "本周课程", value: o?.diagnostics.courseCount ?? 0, hint: "共 " + (o?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ i.jsx(bn, { label: "有效预留", value: o?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          o?.diagnostics.dayGaps.map((S) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: S.weekday }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-zone", children: [
              S.gapMinutes,
              " 分钟"
            ] })
          ] }, S.date))
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            o?.diagnostics.unassigned.length ?? 0
          ] }),
          o?.diagnostics.unassigned.length ? o?.diagnostics.unassigned.map((S) => /* @__PURE__ */ i.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ i.jsx("span", { children: S }) }, S)) : /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (o?.warnings ?? []).map((S, L) => /* @__PURE__ */ i.jsx(aa, { label: "读取警告", ok: !1, detail: S }, L))
      ] })
    ] })
  ] });
}
function Wy({ onAction: c, onAskAi: f, refreshKey: d, sectionHint: o, scheduleText: E, onDataChanged: j }) {
  const [b, q] = w.useState(() => mi("planning")), [T, p] = w.useState(""), [U, A] = w.useState("calendar"), [S, L] = w.useState("issues"), [Q, de] = w.useState(!1), [V, ie] = w.useState(null), [ae, le] = w.useState(!1), [W, Se] = w.useState(null), [ge, K] = w.useState({});
  w.useEffect(() => {
    o?.section && A(o.section);
  }, [o?.nonce]), w.useEffect(() => {
    let v = !1;
    return it(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((P) => {
      if (v) return;
      const h = Ly(P);
      q(h), Uu("planning", h), p(""), ie(null);
    }).catch((P) => {
      v || p(P.message || "筹备数据读取失败");
    }), () => {
      v = !0;
    };
  }, [d]), w.useEffect(() => {
    const v = Object.entries(ge).at(-1);
    if (!v || !v[1].ok || W === v[0]) return;
    const P = window.setTimeout(() => {
      K((h) => {
        const D = { ...h };
        return delete D[v[0]], D;
      });
    }, 4500);
    return () => window.clearTimeout(P);
  }, [W, ge]);
  async function k() {
    if (!(!b || ae)) {
      le(!0), ie(null);
      try {
        ie(await it(`api/planning/template-check?monday=${encodeURIComponent(b.weekMonday)}`));
      } catch (v) {
        ie({ ok: !1, passed: !1, monday: b.weekMonday, output: "", affectedDates: [], error: v.message });
      } finally {
        le(!1);
      }
    }
  }
  async function I(v) {
    if (!W) {
      Se(v), K((P) => ({ ...P, [v]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const P = await it("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: v })
        });
        if (!P.ok) throw new Error(P.error || "取消预留未完成");
        q((h) => h && {
          ...h,
          reservations: h.reservations.map((D) => D.reservation_id === v ? { ...D, status: "已取消" } : D)
        }), K((h) => ({ ...h, [v]: { ok: !0, text: P.message || "已取消预留" } })), j({ silent: !0 });
      } catch (P) {
        K((h) => ({ ...h, [v]: { ok: !1, text: `取消失败：${P.message || "未知错误"}` } }));
      } finally {
        Se(null);
      }
    }
  }
  async function ee(v) {
    if (!W) {
      Se(v), K((P) => ({ ...P, [v]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const P = await it("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: v })
        });
        if (!P.ok) throw new Error(P.error || "预留确认失败");
        q((h) => h && {
          ...h,
          summary: { ...h.summary, formalCourseCount: h.summary.formalCourseCount + 1 },
          reservations: h.reservations.map((D) => D.reservation_id === v ? { ...D, status: "已确认" } : D),
          audit: {
            ...h.audit,
            reservation_hard_blockers: h.audit.reservation_hard_blockers.filter((D) => D.reservation_id !== v)
          }
        }), K((h) => ({ ...h, [v]: { ok: !0, text: P.message || "已确认落课" } })), j({ silent: !0 });
      } catch (P) {
        K((h) => ({ ...h, [v]: { ok: !1, text: `确认失败：${P.message || "未知错误"}` } })), j({ silent: !0 });
      } finally {
        Se(null);
      }
    }
  }
  if (T) return /* @__PURE__ */ i.jsx(wl, { tone: "error", title: "筹备数据读取失败", text: T });
  if (!b) return /* @__PURE__ */ i.jsx(vr, {});
  const Z = b.summary, se = b.students.filter((v) => v.confirmed && v.zone !== "未分区" && (v.availability.length > 0 || v.hasReservation)).length, Ee = Z.activeStudentCount ? Math.round(se / Z.activeStudentCount * 100) : 100, qe = b.commute.overlaps.length, Ue = new Map(b.audit.reservation_hard_blockers.map((v) => [v.reservation_id, v.reasons])), g = b.students.filter((v) => S === "all" ? !0 : S === "availability" ? !v.availability.length && !v.hasReservation : S === "zone" ? v.zone === "未分区" : S === "pending" ? !!v.pendingWeekday || !v.confirmed : v.issues.length > 0), B = Q ? g : g.slice(0, 10), $ = b.sources.filter((v) => !v.ok);
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ i.jsx(vi, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    $.length > 0 && /* @__PURE__ */ i.jsx(wl, { tone: "warn", title: `${$.length} 项筹备数据读取异常`, text: $.map((v) => `${v.label}：${v.message || "读取失败"}`).join("；") }),
    Z.reservationHardBlockerCount > 0 && /* @__PURE__ */ i.jsx(wl, { tone: "warn", title: `${Z.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: b.audit.reservation_hard_blockers.map((v) => `${v.student} ${v.date}：${v.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ i.jsx(
      cr,
      {
        label: "筹备页内部导航",
        value: U,
        onChange: (v) => A(v),
        items: [
          { id: "calendar", label: "周视图", count: b.reservations.length + b.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: Z.unzonedCount + Z.missingAvailabilityCount + Z.unconfirmedActiveCount + b.students.filter((v) => v.issues.length).length },
          { id: "candidates", label: "预留与复核", count: qe + Z.reservationCount + Z.reviewCount + Z.overdueCount + $.length }
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(Iy, { planning: b, hidden: U !== "calendar", onConfirmReservation: ee, onCancelReservation: I, onAction: c, confirmingReservationId: W, reservationFeedback: ge }),
    /* @__PURE__ */ i.jsxs("div", { hidden: U !== "trial", children: [
      /* @__PURE__ */ i.jsx(vi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ i.jsx(Fy, { onAction: c, onAskAi: f, refreshKey: d })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ i.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          se,
          "/",
          Z.activeStudentCount
        ] }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          Ee,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ i.jsx("i", { style: { width: `${Ee}%` } }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: qe ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ i.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ i.jsx("strong", { children: qe }),
        /* @__PURE__ */ i.jsx("small", { children: qe ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ i.jsx("strong", { children: Z.reservationCount }),
        /* @__PURE__ */ i.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ i.jsx("strong", { children: Z.formalCourseCount }),
        /* @__PURE__ */ i.jsx("small", { children: Z.reviewCount + Z.overdueCount ? `${Z.reviewCount + Z.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-overview-grid", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ i.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            Z.activeStudentCount - se,
            " 人仍有关键资料缺口。contract ",
            b.contract.version ?? "—",
            " · schema ",
            b.contract.schemaVersion ?? "—",
            " · ",
            Hh(b.range)
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            L("availability"), A("students");
          }, children: [
            "缺候选时间 ",
            Z.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            L("zone"), A("students");
          }, children: [
            "未分区 ",
            Z.unzonedCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            L("pending"), A("students");
          }, children: [
            "待确认 ",
            Z.unconfirmedActiveCount + Z.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ i.jsx("h3", { children: qe ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            qe,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => A("candidates"), children: "查看候选与预留" }),
          Z.reviewCount + Z.overdueCount + $.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => A("candidates"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "panel planning-student-panel", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-panel-head", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "先处理这些" }),
          /* @__PURE__ */ i.jsx("h3", { children: "学生筹备队列" }),
          /* @__PURE__ */ i.jsx("span", { children: "默认只展示存在缺口或约束的学生。" })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "planning-filter", role: "group", "aria-label": "筛选学生", children: [
          ["issues", "待处理"],
          ["availability", "缺候选时间"],
          ["zone", "未分区"],
          ["pending", "待确认"],
          ["all", "全部"]
        ].map(([v, P]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: S === v ? "selected" : "", onClick: () => {
          L(v), de(!1);
        }, children: P }, v)) })
      ] }),
      g.length ? /* @__PURE__ */ i.jsxs("div", { className: "planning-student-list", children: [
        B.map((v) => {
          const P = v.availability.length ? v.availability.map((h) => `${h.weekday} ${h.start_time}-${h.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ i.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ i.jsx("strong", { children: v.name }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                v.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ i.jsx("span", { className: v.confirmed ? "state-good" : "state-warn", children: v.pendingWeekday ? `${v.pendingWeekday}待定` : v.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "片区" }),
              /* @__PURE__ */ i.jsx("span", { className: v.zone === "未分区" ? "state-warn" : "", children: v.zone })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ i.jsx("span", { className: !v.availability.length && !v.hasReservation ? "state-warn" : "", title: P, children: v.availability.length ? P : v.hasReservation ? "已有单日预留" : P })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "约束" }),
              /* @__PURE__ */ i.jsx("span", { children: v.vacations.length ? v.vacations.map((h) => `至 ${h.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-row-actions", children: [
              v.zone === "未分区" && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "zone_set", student: v.name }), children: "设片区" }),
              !v.availability.length && !v.hasReservation && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "availability_set", student: v.name, weekday: v.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_add", student: v.name, duration: v.duration, zone: v.zone === "未分区" ? "" : v.zone }), children: "预留" })
            ] })
          ] }, v.sourceName);
        }),
        g.length > 10 && /* @__PURE__ */ i.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => de((v) => !v), children: Q ? "收起学生列表" : `再看 ${g.length - 10} 人` })
      ] }) : /* @__PURE__ */ i.jsx(nl, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      b.inactiveConfirmed.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          b.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-student-context", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ i.jsx("span", { children: b.pending.map((v) => v.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ i.jsx("span", { children: b.vacations.map((v) => `${v.student} ${v.start_date.slice(5)}—${v.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ i.jsx("span", { children: b.zones.map((v) => `${v.zone} ${v.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-two-column", hidden: U !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ i.jsx(na, { title: "课程预留", meta: `${b.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        b.reservations.length ? /* @__PURE__ */ i.jsx("div", { className: "reservation-card-list", children: b.reservations.map((v) => {
          const P = (v.conflicts?.formal_courses?.length || 0) + (v.conflicts?.soft_reservations?.length || 0), h = Ue.get(v.reservation_id) || [], D = `reservation-blocker-${v.reservation_id}`, G = v.status === "已确认" ? "已落课" : v.status === "预期" ? "待落课" : v.status, F = h.length ? "blocked" : v.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ i.jsxs("article", { className: `reservation-card ${F}`, children: [
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ i.jsx("strong", { children: v.reservation_date.slice(5) }),
              /* @__PURE__ */ i.jsx("span", { children: v.weekday })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ i.jsx("strong", { children: v.student }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                v.start_time,
                "-",
                v.end_time,
                " · ",
                v.duration,
                " 分钟",
                v.zone ? ` · ${v.zone}` : ""
              ] }),
              /* @__PURE__ */ i.jsxs("small", { id: D, children: [
                G,
                P ? ` · ${P} 项软冲突` : "",
                h.length ? ` · 硬约束：${h.join("、")}` : "",
                v.note ? ` · ${v.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "reservation-actions", children: v.status === "预期" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "reservation-update", onClick: () => c({ operation: "reservation_update", reservationId: v.reservation_id, date: v.reservation_date, time: v.start_time, duration: v.duration, zone: v.zone || "", note: v.note || "" }), children: "调时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: h.length > 0, "aria-describedby": h.length ? D : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: v.reservation_id }), children: h.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", onClick: () => c({ operation: "reservation_cancel", reservationId: v.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ i.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              G
            ] }) })
          ] }, v.reservation_id);
        }) }) : /* @__PURE__ */ i.jsx(nl, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ i.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              Z.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", disabled: ae, onClick: () => {
            k();
          }, children: ae ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ i.jsx(er, { label: "时间重叠", count: b.commute.overlaps.length, tone: "danger", details: b.commute.overlaps.slice(0, 3).map((v) => `${v.weekday} ${v.first} ${v.firstRange} / ${v.second} ${v.secondRange}`) }),
          /* @__PURE__ */ i.jsx(er, { label: "长期候选时间差异", count: b.commute.availabilityConflicts.length, tone: "neutral", details: b.commute.availabilityConflicts.slice(0, 3).map((v) => `${v.student} ${v.weekday} ${v.startTime}-${v.endTime}（仅提示）`) }),
          /* @__PURE__ */ i.jsx(er, { label: "排时间时再问通勤", count: b.commute.missingRoutes.length, tone: "neutral", details: b.commute.missingRoutes.slice(0, 3).map((v) => `${v.weekday} ${v.from} → ${v.to}`) })
        ] }),
        b.commute.missingRoutes.slice(0, 2).map((v) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: v.from, toStudent: v.to }), children: [
          "补录 ",
          v.from,
          " → ",
          v.to
        ] }, `${v.weekday}-${v.from}-${v.to}`)),
        V && /* @__PURE__ */ i.jsxs("div", { className: V.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ i.jsx("strong", { children: V.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ i.jsx("pre", { children: V.error || V.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    U === "candidates" && (b.reviews.length > 0 || Z.overdueCount > 0) && /* @__PURE__ */ i.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ i.jsx(na, { title: "历史课程复核", meta: `${b.reviews.length} 节待确认 · ${Z.overdueCount} 节过期待转入`, action: Z.overdueCount ? `处理 ${Z.overdueCount} 节过期课` : void 0, onAction: Z.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ i.jsx("div", { className: "review-card-list", children: b.reviews.map((v) => /* @__PURE__ */ i.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: v.student }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            v.date,
            " · ",
            v.start_time,
            "-",
            v.end_time
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: v.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: v.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, v.course_id)) })
    ] }),
    U === "candidates" && b.reviews.length === 0 && Z.overdueCount === 0 && /* @__PURE__ */ i.jsx("section", { className: "panel", children: /* @__PURE__ */ i.jsx(nl, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-detail-grid", hidden: U !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "过期待转入：" }),
            Z.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "人工待复核：" }),
            Z.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "读取异常：" }),
            $.length,
            " 项"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ i.jsx("div", { className: "source-status-list", children: b.sources.map((v) => /* @__PURE__ */ i.jsxs("span", { className: v.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          v.label
        ] }, v.label)) }),
        /* @__PURE__ */ i.jsxs("pre", { children: [
          Object.values(b.raw).filter(Boolean).join(`

`),
          E ? `

── 底层课表文本 ──
${E}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Iy({ planning: c, hidden: f, onConfirmReservation: d, onCancelReservation: o, onAction: E, confirmingReservationId: j, reservationFeedback: b }) {
  const [q, T] = w.useState("reservation"), [p, U] = w.useState(null), A = Bh(), [S, L] = w.useState(c.weekMonday), [Q, de] = w.useState(0), [V, ie] = w.useState(null), ae = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], le = w.useMemo(() => nr(`${S}..${S}`, S), [S]), { visibleDays: W, paginated: Se } = Jy(A.ref, !!V), ge = Math.max(1, Math.ceil(7 / Math.max(1, W))), K = w.useMemo(
    () => V ? [V] : Se ? wy(le, Q, W) : le,
    [le, Q, V, Se, W]
  );
  w.useEffect(() => {
    L(c.weekMonday);
  }, [c.weekMonday]), w.useEffect(() => {
    de(0), ie(null), U(null);
  }, [S, q]);
  const k = w.useMemo(() => or(c.range), [c.range]), I = w.useMemo(() => nr(c.range, c.localDate)[0], [c.range, c.localDate]), ee = S > I, Z = !!(k.end && Cl(S, 7) <= k.end), se = w.useMemo(() => new Map(c.students.map((Y) => [Y.name, Y])), [c.students]), Ee = w.useMemo(() => new Map(c.pending.map((Y) => [Y.student, Y])), [c.pending]), qe = w.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((Y) => [Y.reservation_id, Y.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), Ue = w.useMemo(() => {
    const Y = (ye, J = "在读") => J !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : Ee.has(ye) ? { studentState: "待定", stateClass: "pending" } : se.get(ye)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, He = (ye) => ({
      ...ye,
      start_at: `${ye.date}T${ye.start_time}:00+08:00`,
      end_at: `${ye.date}T${ye.end_time}:00+08:00`
    });
    return q === "reservation" ? c.reservations.filter((ye) => ye.reservation_date >= le[0] && ye.reservation_date <= le[6] && ye.status !== "已取消").map((ye) => {
      const J = qe.get(ye.reservation_id), kt = (ye.student_status || "在读") !== "在读", Pe = ye.status === "已确认";
      return He({
        id: ye.reservation_id,
        kind: "reservation",
        reservationId: ye.reservation_id,
        reservationStatus: ye.status,
        confirmedCourseId: ye.confirmed_course_id,
        blockerText: J,
        student: ye.student,
        date: ye.reservation_date,
        weekday: ye.weekday,
        start_time: ye.start_time,
        end_time: ye.end_time,
        duration: ye.duration,
        studentState: kt ? "已暂停" : Pe ? "已落课" : J ? "有硬约束" : "待落课",
        stateClass: kt ? "paused" : Pe ? "landed" : J ? "blocked" : "expected",
        zone: ye.zone,
        note: ye.note
      });
    }) : c.templates.flatMap((ye) => {
      const J = ae.indexOf(ye.weekday);
      if (J < 0) return [];
      const kt = le[J], Pe = Y(ye.student, ye.student_status);
      return [He({
        id: `template-${ye.template_id}`,
        kind: "template",
        student: ye.student,
        date: kt,
        weekday: ye.weekday,
        start_time: ye.start_time,
        end_time: ye.end_time,
        duration: ye.duration,
        studentState: Pe.studentState,
        stateClass: Pe.stateClass
      })];
    });
  }, [le, q, Ee, c.reservations, c.templates, qe, se]);
  w.useEffect(() => {
    p && !Ue.some((Y) => Y.id === p && Y.kind === "reservation") && U(null);
  }, [Ue, p]), w.useEffect(() => {
    if (!V) return;
    const Y = (He) => {
      He.key === "Escape" && ie(null);
    };
    return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
  }, [V]), w.useEffect(() => {
    if (!p) return;
    const Y = (He) => {
      He.key === "Escape" && U(null);
    };
    return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
  }, [p]);
  const g = !!j, B = w.useMemo(() => {
    const Y = /* @__PURE__ */ new Map();
    return Ue.forEach((He) => Y.set(He.date, [...Y.get(He.date) || [], He])), Y;
  }, [Ue]), $ = w.useMemo(() => new Map(le.map((Y) => [Y, Qy(B.get(Y) || [])])), [B, le]), v = w.useMemo(() => {
    const Y = /* @__PURE__ */ new Map();
    for (const He of le)
      Y.set(He, fr(B.get(He) || []));
    return Y;
  }, [B, le]), P = K.map((Y) => Y && $.get(Y) || 1);
  P.reduce((Y, He) => Y + He, 0);
  const h = `52px ${P.map((Y) => `minmax(0, ${Y}fr)`).join(" ")}`, D = K.length >= 7 ? Ue : Ue.filter((Y) => K.includes(Y.date)), { startHour: G, endHour: F } = Rh(D), ve = V ? 92 : W >= 6 ? 64 : W >= 4 ? 72 : 84, be = (F - G) * ve, we = Array.from({ length: F - G + 1 }, (Y, He) => G + He), Ie = `${la(`${le[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${la(`${le[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ i.jsxs("section", { className: `panel planning-week-panel ${q}-mode`, hidden: f, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ i.jsx("h3", { children: q === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ i.jsx("span", { children: q === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: q === "reservation" ? "selected" : "", "aria-pressed": q === "reservation", onClick: () => T("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.reservations.length })
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: q === "template" ? "selected" : "", "aria-pressed": q === "template", onClick: () => T("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "上一周", disabled: !ee, onClick: () => L((Y) => Cl(Y, -7)), children: "‹" }),
          /* @__PURE__ */ i.jsx("strong", { children: Ie }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "下一周", disabled: !Z, onClick: () => L((Y) => Cl(Y, 7)), children: "›" })
        ] }),
        V ? /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => ie(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            la(`${V}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true" })
        ] }) : Se && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Q === 0, onClick: () => de((Y) => Math.max(0, Y - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "第 ",
            Q + 1,
            "/",
            ge,
            " 页 · 每页 ",
            W,
            " 天"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Q >= ge - 1, onClick: () => de((Y) => Math.min(ge - 1, Y + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "planning-week-legend", children: q === "reservation" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "reservation" }),
        "临时预留"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "expected" }),
        "待落课"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "landed" }),
        "已落课"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "blocked" }),
        "有硬约束"
      ] }),
      /* @__PURE__ */ i.jsx("small", { children: "移入哪张卡，就原地处理哪张卡；触屏轻点，Esc 关闭" })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "template" }),
        "正式固定"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "confirmed" }),
        "已确认"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "pending" }),
        "待定"
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "unconfirmed" }),
        "未确认"
      ] })
    ] }) }),
    Ue.length ? /* @__PURE__ */ i.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，点击日期标题聚焦到单日", ...A, children: /* @__PURE__ */ i.jsxs("div", { className: "planning-week-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: h }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-corner", children: "时间" }),
        K.map((Y, He) => Y ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: Y === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => ie(Y), "aria-label": `聚焦到 ${la(`${Y}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ i.jsx("span", { children: ae[le.indexOf(Y)] }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(Y.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            B.get(Y)?.length || 0,
            " 项"
          ] })
        ] }, Y) : /* @__PURE__ */ i.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${He}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: h }, onPointerDown: (Y) => {
        Y.target.closest(".planning-week-block") || U(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-axis", style: { height: be }, children: we.map((Y) => /* @__PURE__ */ i.jsxs("span", { style: { top: (Y - G) * ve }, children: [
          String(Y).padStart(2, "0"),
          ":00"
        ] }, Y)) }),
        K.map((Y, He) => {
          if (!Y) return /* @__PURE__ */ i.jsx("div", { className: "planning-week-track empty-slot", style: { height: be }, "aria-hidden": "true" }, `empty-${He}`);
          const ye = v.get(Y) || [];
          return /* @__PURE__ */ i.jsx("div", { className: Y === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: be }, children: ye.map(({ item: J, lane: kt, laneCount: Pe }) => {
            const Wt = qh(J, G, F, ve);
            if (!Wt) return null;
            const It = 100 / Pe, rt = J.kind === "reservation" && J.reservationStatus === "预期", ra = J.kind === "reservation" && J.reservationStatus === "已确认", vt = !!(J.reservationId && (rt || ra)), jt = !!(rt && j === J.reservationId), Dt = !!(vt && (p === J.id || jt)), Da = J.reservationId ? b[J.reservationId] : void 0, Dl = !!(g || J.blockerText || J.stateClass === "paused");
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `planning-week-block ${J.kind} ${J.stateClass}${vt ? " actionable" : ""}${Dt ? " action-open" : ""}`,
                tabIndex: vt ? 0 : void 0,
                role: vt ? "button" : void 0,
                "aria-expanded": vt ? Dt : void 0,
                "aria-label": `${J.start_time}-${J.end_time} ${J.student}，${J.studentState}${J.zone ? `，${J.zone}` : ""}${rt ? "；移入或点击后可调整时间、确认落课" : ra ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (De) => {
                  vt && !De.target.closest("button") && U((bt) => bt === J.id ? null : J.id);
                },
                onKeyDown: (De) => {
                  vt && (De.key === "Enter" || De.key === " " ? (De.preventDefault(), U((bt) => bt === J.id ? null : J.id)) : De.key === "Escape" && (De.preventDefault(), U(null)));
                },
                style: { top: Wt.top, height: Wt.height, left: `calc(${kt * It}% + 4px)`, width: `calc(${It}% - 8px)` },
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    J.start_time,
                    " · ",
                    J.student
                  ] }),
                  /* @__PURE__ */ i.jsxs("span", { children: [
                    J.duration,
                    " 分钟 · ",
                    J.studentState,
                    J.zone ? ` · ${J.zone}` : ""
                  ] }),
                  vt && /* @__PURE__ */ i.jsxs("div", { className: "planning-week-inline-action", onClick: (De) => De.stopPropagation(), children: [
                    /* @__PURE__ */ i.jsx("div", { className: "planning-week-inline-buttons", children: rt ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: g, onClick: () => {
                        U(null), E({ operation: "reservation_update", reservationId: J.reservationId, date: J.date, time: J.start_time, duration: J.duration, zone: J.zone || "", note: J.note || "" });
                      }, children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: Dl, "aria-busy": jt, onClick: () => {
                        const De = d(J.reservationId);
                        De && typeof De.then == "function" && De.finally(() => U(null));
                      }, children: jt ? "确认中…" : g ? "处理中…" : J.stateClass === "paused" ? "学生已暂停" : J.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => E({ operation: "course_move", student: J.student, fromDate: J.date, fromTime: J.start_time, toDate: J.date, toTime: J.start_time, duration: J.duration }), children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => E({ operation: "course_cancel", student: J.student, date: J.date, time: J.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", disabled: g, onClick: () => {
                        const De = o(J.reservationId);
                        De && typeof De.then == "function" && De.finally(() => U(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (J.blockerText || Da) && /* @__PURE__ */ i.jsx(Yh, { ok: !!Da?.ok, text: Da?.text || J.blockerText || "" })
                  ] })
                ]
              },
              J.id
            );
          }) }, Y);
        })
      ] })
    ] }) }) : /* @__PURE__ */ i.jsx(nl, { title: q === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: q === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function er({ label: c, count: f, tone: d, details: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("span", { children: c }),
      /* @__PURE__ */ i.jsx("strong", { children: f })
    ] }),
    o.length > 0 && /* @__PURE__ */ i.jsx("ul", { children: o.map((E) => /* @__PURE__ */ i.jsx("li", { children: E }, E)) })
  ] });
}
const Py = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function eg({ item: c, onInspect: f, onPrepare: d, onQuick: o, onAskAi: E, onRetry: j, onRetryPrev: b, retryingId: q, feedback: T }) {
  const p = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), U = q === c.id, A = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", S = Date.now(), L = c.deadline_at ? new Date(c.deadline_at).getTime() : null, Q = L != null ? Math.ceil((L - S) / 864e5) : null, de = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ i.jsxs(
    "article",
    {
      className: `affair-card ${A}${p ? " closed" : ""}`,
      "data-item-id": c.id,
      tabIndex: 0,
      role: "button",
      onClick: (V) => {
        V.target.closest("button") || f(c, V.currentTarget);
      },
      onKeyDown: (V) => {
        V.key === "Enter" && (V.preventDefault(), f(c, V.currentTarget));
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-when", children: [
          A === "timed" && c.start_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: wa(c.start_at) }),
            /* @__PURE__ */ i.jsx("span", { children: la(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          A === "deadline" && c.deadline_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: la(c.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "截止",
              Q != null && !p ? ` · ${Q >= 0 ? `剩 ${Q} 天` : `已过 ${-Q} 天`}` : ""
            ] })
          ] }),
          A === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ i.jsx("span", { children: c.window_label || "窗口未定" })
          ] }),
          A === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ i.jsx("span", { children: de ? `下次 ${de.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ i.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ i.jsx(Vh, { value: c.status }),
            c.note ? /* @__PURE__ */ i.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ i.jsx("em", { children: `提醒 ${la(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${wa(c.next_prompt_at)}` }) : null
          ] }),
          A === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ i.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((V) => /* @__PURE__ */ i.jsx("i", { children: Py[V] || V }, V)) }) : null,
          T ? /* @__PURE__ */ i.jsx(Yh, { ok: T.ok, text: T.text }) : null,
          T?.undo && b ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!q, onClick: () => {
            b(c);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "affair-card-actions", children: !p && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do primary", disabled: !!q || T?.ok, onClick: () => o?.("affairComplete", c), children: T?.ok ? "已完成" : "完成" }),
          c.retry && j ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!q || !!T?.ok, "aria-busy": U, onClick: () => {
            j(c);
          }, children: U ? "处理中…" : T?.buttonLabel || "没约上" }) : E ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => E(`把「${c.title}」（${c.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function tg({ onPrepare: c, onQuick: f, onAskAi: d, onInspect: o, onRetry: E, onRetryPrev: j, retryingId: b, feedback: q, refreshKey: T, observedAt: p, onOpenDay: U, localDate: A }) {
  const [S, L] = w.useState("pending"), [Q, de] = w.useState("list"), [V, ie] = w.useState(() => mi("affairs-month")), [ae, le] = w.useState(""), W = w.useCallback((g) => {
    it("api/affairs-month" + (g ? "?fresh=1" : "")).then((B) => {
      if (!B || !Array.isArray(B.affairs) || !Array.isArray(B.pending)) return;
      const $ = {
        affairs: B.affairs.map((v) => ({ ...v, domain: "affair" })),
        pending: B.pending.map((v) => ({ ...v, domain: "affair" })),
        month: String(B.month || "")
      };
      ie($), Uu("affairs-month", $), le("");
    }).catch(() => {
    });
  }, []);
  w.useEffect(() => {
    W(!V);
  }, [W]), w.useEffect(() => {
    T > 0 && W(!0);
  }, [T]), w.useEffect(() => {
    p && V && W(!1);
  }, [p, W]);
  const Se = V?.pending ?? [], ge = V?.affairs ?? [], K = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), k = ge.filter((g) => !K.has(g.status)).sort((g, B) => String(pt(g) || "").localeCompare(String(pt(B) || ""))), I = ge.filter((g) => K.has(g.status)).sort((g, B) => String(pt(B) || "").localeCompare(String(pt(g) || ""))), ee = I.filter((g) => !["cancelled", "已取消"].includes(g.status)).length, Z = V?.month ? `${V.month}-01..${V.month}-01` : "", Ee = { pending: Se, scheduled: k, closed: I }[S], qe = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[S];
  function Ue(g, B) {
    const $ = ge.filter((v) => Ou(v) === g);
    U(g, $, B);
  }
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx(vi, { eyebrow: `事务 · 本月 ${V?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${ee} 件、取消 ${I.length - ee} 件，进行中 ${k.length} 件。点日历上的任何一天，看那天的安排。` }),
    ae && /* @__PURE__ */ i.jsx(wl, { tone: "error", title: "事务数据读取失败", text: ae }),
    !V && /* @__PURE__ */ i.jsx(vr, {}),
    V && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ i.jsx(
          cr,
          {
            label: "事务状态",
            value: S,
            onChange: (g) => L(g),
            items: [
              { id: "pending", label: "待处理", count: Se.length },
              { id: "scheduled", label: "已安排", count: k.length },
              { id: "closed", label: "已完成·已取消", count: I.length }
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          cr,
          {
            label: "视图切换",
            value: Q,
            onChange: (g) => de(g),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      Q === "calendar" ? /* @__PURE__ */ i.jsx(kh, { items: ge, range: Z, localDate: A ?? V.month + "-01", onOpenDay: Ue }) : /* @__PURE__ */ i.jsx("div", { children: Ee.length ? Ee.map((g) => /* @__PURE__ */ i.jsx(eg, { item: g, onInspect: o, onPrepare: c, onQuick: f, onAskAi: d, onRetry: E, onRetryPrev: j, retryingId: b, feedback: q[g.id] }, g.id)) : /* @__PURE__ */ i.jsx(nl, { title: qe.title, text: qe.text }) })
    ] })
  ] });
}
function ag({ pending: c, students: f, preset: d, aiDraft: o, preview: E, busy: j, onPreview: b, onAiPreview: q, onCommit: T, onCommitBatch: p, onClear: U, onClose: A }) {
  const [S, L] = w.useState(d?.operation || "course_move"), [Q, de] = w.useState(d?.affairKind || "timed"), [V, ie] = w.useState(d?.student || ""), [ae, le] = w.useState(d?.duration || ""), [W, Se] = w.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  w.useEffect(() => {
    d?.operation && L(d.operation), d?.affairKind && de(d.affairKind), d?.student && ie(d.student), d?.duration && le(d.duration);
  }, [d]);
  function ge(k) {
    k.preventDefault();
    const I = new FormData(k.currentTarget), ee = { operation: S };
    for (const [Z, se] of I.entries())
      Z !== "operation" && String(se).trim() && (ee[Z] = se);
    ee.duration && (ee.duration = Number(ee.duration)), ee.minutes !== void 0 && (ee.minutes = Number(ee.minutes)), ee.expectedVersion && (ee.expectedVersion = Number(ee.expectedVersion)), S === "course_plan" && (ee.moves = W.map((Z) => ({ ...Z, duration: Z.duration ? Number(Z.duration) : void 0 }))), b(ee);
  }
  function K(k, I, ee) {
    Se((Z) => Z.map((se, Ee) => Ee === k ? { ...se, [I]: ee } : se));
  }
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ i.jsx(ig, { initialDraft: o, preview: E, busy: j, onPreview: q, onCommit: T, onCommitBatch: p, onClear: U, onClose: A }),
    /* @__PURE__ */ i.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ i.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ i.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ i.jsxs("form", { className: "panel operation-form", onSubmit: ge, children: [
          /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ i.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ i.jsxs("select", { name: "operation", value: S, onChange: (k) => {
              L(k.target.value), U();
            }, children: [
              /* @__PURE__ */ i.jsx("option", { value: "course_move", children: "调课" }),
              /* @__PURE__ */ i.jsx("option", { value: "course_add", children: "新建课程" }),
              /* @__PURE__ */ i.jsx("option", { value: "course_cancel", children: "取消课程" }),
              /* @__PURE__ */ i.jsx("option", { value: "reservation_add", children: "预留课程（未确认）" }),
              /* @__PURE__ */ i.jsx("option", { value: "reservation_update", children: "修改课程预留" }),
              /* @__PURE__ */ i.jsx("option", { value: "reservation_confirm", children: "确认预留为正式课" }),
              /* @__PURE__ */ i.jsx("option", { value: "reservation_cancel", children: "取消课程预留" }),
              /* @__PURE__ */ i.jsx("option", { value: "zone_set", children: "设置学生片区" }),
              /* @__PURE__ */ i.jsx("option", { value: "availability_set", children: "设置可用时间" }),
              /* @__PURE__ */ i.jsx("option", { value: "availability_clear", children: "清空某日可用时间" }),
              /* @__PURE__ */ i.jsx("option", { value: "commute_set", children: "记录学生间通勤" }),
              /* @__PURE__ */ i.jsx("option", { value: "quarantine_overdue", children: "过期课程转人工复核" }),
              /* @__PURE__ */ i.jsx("option", { value: "course_review_resolve", children: "复核历史课程" }),
              /* @__PURE__ */ i.jsx("option", { value: "course_day_complete", children: "完成当日课程" }),
              /* @__PURE__ */ i.jsx("option", { value: "course_plan", children: "多项调课计划" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_create", children: "新建事务" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_update", children: "修改事务" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_complete", children: "完成事务" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_retry_next", children: "推进重试日期" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_retry_prev", children: "恢复上一候选日" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_cancel", children: "取消事务" }),
              /* @__PURE__ */ i.jsx("option", { value: "calendar_sync", children: "同步飞书日历" })
            ] })
          ] }),
          S === "course_move" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ i.jsx(re, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          S === "course_cancel" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
          ] }),
          S === "course_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: V,
                  onChange: (k) => {
                    const I = f.find((ee) => ee.name === k.target.value);
                    ie(k.target.value), I && le(I.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    f.filter((k) => k.status === "在读").map((k) => /* @__PURE__ */ i.jsxs("option", { value: k.name, children: [
                      k.name,
                      " · ",
                      k.default_duration,
                      " 分钟"
                    ] }, k.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: ae, onChange: (k) => le(k.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          S === "reservation_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: V,
                  onChange: (k) => {
                    const I = f.find((ee) => ee.name === k.target.value);
                    ie(k.target.value), I && le(I.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    f.filter((k) => k.status === "在读").map((k) => /* @__PURE__ */ i.jsxs("option", { value: k.name, children: [
                      k.name,
                      " · ",
                      k.default_duration,
                      " 分钟"
                    ] }, k.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: ae, onChange: (k) => le(k.target.value) })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          S === "reservation_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(S) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          S === "zone_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          S === "availability_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((k) => /* @__PURE__ */ i.jsx("option", { value: k, children: k }, k))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          S === "availability_clear" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((k) => /* @__PURE__ */ i.jsx("option", { value: k, children: k }, k))
              ] })
            ] })
          ] }),
          S === "commute_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          S === "quarantine_overdue" && /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          S === "course_review_resolve" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ i.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ i.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ i.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          S === "course_day_complete" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          S === "course_plan" && /* @__PURE__ */ i.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ i.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", onClick: () => Se((k) => [...k, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            W.map((k, I) => /* @__PURE__ */ i.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ i.jsx("span", { className: "plan-index", children: I + 1 }),
              /* @__PURE__ */ i.jsxs("select", { value: k.student || "", onChange: (ee) => {
                const Z = f.find((se) => se.name === ee.target.value);
                K(I, "student", ee.target.value), Z && K(I, "duration", Z.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "学生" }),
                f.filter((ee) => ee.status === "在读").map((ee) => /* @__PURE__ */ i.jsx("option", { value: ee.name, children: ee.name }, ee.name))
              ] }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: k.fromDate || "", onChange: (ee) => K(I, "fromDate", ee.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: k.fromTime || "", onChange: (ee) => K(I, "fromTime", ee.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: k.toDate || "", onChange: (ee) => K(I, "toDate", ee.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: k.toTime || "", onChange: (ee) => K(I, "toTime", ee.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: k.duration || "", onChange: (ee) => K(I, "duration", ee.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "plan-remove", disabled: W.length <= 2, onClick: () => Se((ee) => ee.filter((Z, se) => se !== I)), children: "×" })
            ] }, I))
          ] }),
          S === "affair_create" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "类型" }),
              /* @__PURE__ */ i.jsxs("select", { name: "affairKind", value: Q, onChange: (k) => de(k.target.value), children: [
                /* @__PURE__ */ i.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ i.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ i.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ i.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            Q === "timed" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            Q === "deadline" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            Q === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            Q === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ i.jsx(re, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ i.jsx(re, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ i.jsx(re, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "优先级" }),
              /* @__PURE__ */ i.jsxs("select", { name: "priority", defaultValue: "normal", children: [
                /* @__PURE__ */ i.jsx("option", { value: "low", children: "低" }),
                /* @__PURE__ */ i.jsx("option", { value: "normal", children: "普通" }),
                /* @__PURE__ */ i.jsx("option", { value: "high", children: "高" }),
                /* @__PURE__ */ i.jsx("option", { value: "urgent", children: "紧急" })
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "followUp", type: "checkbox", value: "daily" }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "办成前每日跟进" }),
                /* @__PURE__ */ i.jsx("small", { children: "每天按提醒时间推送，直到约上或完成；约上（已排期）后自动静默。" })
              ] })
            ] })
          ] }),
          S === "affair_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((k) => /* @__PURE__ */ i.jsxs("option", { value: k.id, children: [
                  k.title,
                  " · ",
                  k.id
                ] }, k.id))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "title", label: "新标题（可选）", defaultValue: d?.title }),
            /* @__PURE__ */ i.jsx(re, { name: "startDate", label: "新开始日期（可选）", type: "date" }),
            /* @__PURE__ */ i.jsx(re, { name: "startTime", label: "新开始时间（可选）", type: "time" }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "优先级（可选）" }),
              /* @__PURE__ */ i.jsxs("select", { name: "priority", defaultValue: "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", children: "不变" }),
                /* @__PURE__ */ i.jsx("option", { value: "low", children: "低" }),
                /* @__PURE__ */ i.jsx("option", { value: "normal", children: "普通" }),
                /* @__PURE__ */ i.jsx("option", { value: "high", children: "高" }),
                /* @__PURE__ */ i.jsx("option", { value: "urgent", children: "紧急" })
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "新备注（可选）" }),
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "每日跟进" }),
              /* @__PURE__ */ i.jsxs("select", { name: "followUp", defaultValue: "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", children: "不变" }),
                /* @__PURE__ */ i.jsx("option", { value: "daily", children: "办成前每日跟进" }),
                /* @__PURE__ */ i.jsx("option", { value: "none", children: "停止跟进" })
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "修改会校验与其他事务和课程的冲突；至少填写一个要改的字段。retry 事务的候选日请用“推进重试日期”，不要在这里改时间。" })
          ] }),
          S === "affair_retry_prev" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((k) => /* @__PURE__ */ i.jsxs("option", { value: k.id, children: [
                  k.title,
                  " · ",
                  k.id
                ] }, k.id))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。" })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(S) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((k) => /* @__PURE__ */ i.jsxs("option", { value: k.id, children: [
                  k.title,
                  " · ",
                  k.id
                ] }, k.id))
              ] })
            ] }),
            S === "affair_retry_next" && /* @__PURE__ */ i.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          S === "calendar_sync" && /* @__PURE__ */ i.jsx(re, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ i.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: "primary-button full", type: "submit", disabled: j, children: j ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: S })),
        /* @__PURE__ */ i.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ i.jsx(na, { title: "执行预览", meta: E?.token ? `令牌 ${E.token.slice(0, 8)}…` : "等待操作" }),
          !E && /* @__PURE__ */ i.jsx(nl, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
          E && /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
            /* @__PURE__ */ i.jsxs("div", { className: E.canCommit ? "preview-status pass" : E.ok ? "preview-status neutral" : "preview-status fail", children: [
              /* @__PURE__ */ i.jsx("i", {}),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: E.canCommit ? "预演通过" : E.ok ? "执行结果" : "预演未通过" }),
                /* @__PURE__ */ i.jsx("span", { children: E.summary || E.error || "无摘要" })
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("pre", { children: E.message || E.error || JSON.stringify(E.result, null, 2) }),
            E.result && /* @__PURE__ */ i.jsxs("details", { className: "evidence-details", children: [
              /* @__PURE__ */ i.jsx("summary", { children: "查看执行证据" }),
              /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(E.result, null, 2) })
            ] }),
            E.canCommit && /* @__PURE__ */ i.jsxs("div", { className: "commit-box", children: [
              /* @__PURE__ */ i.jsx("p", { children: "提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger-button", onClick: () => {
                T();
              }, disabled: j, children: j ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ i.jsx(Lh, { preview: E, onClose: A })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Ah = {
  course_add: "新建课程",
  course_move: "调课",
  course_cancel: "取消课程",
  course_plan: "批量调整",
  course_day_complete: "今日课程收口",
  reservation_add: "预留课程",
  reservation_update: "修改预留",
  reservation_confirm: "确认落课",
  reservation_cancel: "取消预留",
  zone_set: "设置片区",
  availability_set: "设置可用时间",
  availability_clear: "清空可用时间",
  commute_set: "登记通勤",
  quarantine_overdue: "清理过期课",
  course_review_resolve: "复核处理",
  affair_create: "新建事务",
  affair_complete: "完成事务",
  affair_retry_next: "没约上·推进",
  affair_cancel: "取消事务"
}, lg = {
  student: "学生",
  name: "姓名",
  date: "日期",
  time: "时间",
  duration: "时长(分)",
  note: "备注",
  reason: "原因",
  fromDate: "原日期",
  fromTime: "原时间",
  toDate: "新日期",
  toTime: "新时间",
  id: "ID",
  title: "标题",
  affairKind: "事务类型",
  startDate: "开始日期",
  deadlineDate: "截止日期",
  windowStart: "窗口起点",
  windowEnd: "窗口终点",
  candidateDates: "候选日期",
  weekdays: "星期",
  startWeek: "起始周",
  remindAt: "提醒时刻",
  reservationId: "预留",
  expectedVersion: "版本"
};
function ng({ preview: c, busy: f, onCommit: d, onCommitBatch: o, onClose: E }) {
  const j = c.operation || "", b = c.input || {}, q = Object.entries(b).filter(([U, A]) => A != null && A !== "" && !U.startsWith("_")), T = c.result?.affected_dates, p = c.batchItems ?? [];
  return p.length ? /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.committed ? c.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.committed ? c.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${p.length} 项` }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.message })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "batch-list", children: p.map((U, A) => {
      const S = c.committed ? { text: U.resultOk ? "已执行" : "失败", cls: U.resultOk ? "ok" : "error" } : { text: U.canCommit ? "可执行" : "未通过", cls: U.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ i.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ i.jsx("span", { className: "batch-index", children: A + 1 }),
        /* @__PURE__ */ i.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: Ah[U.operation] || U.operation }),
          /* @__PURE__ */ i.jsx("span", { children: U.summary }),
          U.message && /* @__PURE__ */ i.jsx("small", { children: U.message })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: `batch-flag ${S.cls}`, children: S.text })
      ] }, U.token);
    }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-outcome-actions", children: [
      !c.committed && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", disabled: f || !p.some((U) => U.canCommit), onClick: () => {
        o?.() ?? Promise.resolve();
      }, children: f ? "正在提交…" : `全部执行（${p.filter((U) => U.canCommit).length} 项）` }),
      c.committed && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: E, children: "完成并返回" })
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.canCommit ? "preview-status pass" : c.ok ? "preview-status neutral" : "preview-status fail", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.canCommit ? "方案预演通过" : c.ok ? "执行结果" : "方案未通过" }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.error })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "preview-summary", children: [
      j && /* @__PURE__ */ i.jsx("span", { className: "preview-op-badge", children: Ah[j] || j }),
      q.length > 0 && /* @__PURE__ */ i.jsx("dl", { className: "preview-fields", children: q.map(([U, A]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: lg[U] || U }),
        /* @__PURE__ */ i.jsx("dd", { children: String(A) })
      ] }, U)) }),
      T && T.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        T.map((U) => /* @__PURE__ */ i.jsx("span", { children: U.slice(5) }, U))
      ] })
    ] }),
    c.message && c.message !== c.summary && /* @__PURE__ */ i.jsx("pre", { className: "preview-message", children: c.message }),
    c.result && /* @__PURE__ */ i.jsxs("details", { className: "evidence-details", children: [
      /* @__PURE__ */ i.jsx("summary", { children: "查看执行证据" }),
      /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(c.result, null, 2) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-outcome-actions", children: [
      c.canCommit && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
        d();
      }, disabled: f, children: f ? "正在提交…" : "确认执行此方案" }),
      /* @__PURE__ */ i.jsx(Lh, { preview: c, onClose: E })
    ] })
  ] });
}
function ig({ initialDraft: c, preview: f, busy: d, onPreview: o, onCommit: E, onCommitBatch: j, onClear: b, onClose: q }) {
  const T = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, p = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [U, A] = w.useState([T]), [S, L] = w.useState(""), [Q, de] = w.useState(!1), [V, ie] = w.useState(""), [ae, le] = w.useState([]), [W, Se] = w.useState(!1), ge = w.useRef(null), K = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function k() {
    const se = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!se) return;
    if (W) {
      ge.current?.stop();
      return;
    }
    const Ee = new se();
    Ee.lang = "zh-CN", Ee.interimResults = !1, Ee.continuous = !1, Ee.onresult = (qe) => {
      const Ue = Array.from(qe.results).map((g) => g[0].transcript).join("").trim();
      Ue && L((g) => (g ? `${g} ` : "") + Ue);
    }, Ee.onend = () => Se(!1), Ee.onerror = () => Se(!1), ge.current = Ee, Se(!0), Ee.start();
  }
  const I = w.useRef(ir());
  w.useEffect(() => () => I.current.invalidate(), []), w.useEffect(() => {
    c.nonce && (I.current.invalidate(), de(!1), L(c.text));
  }, [c.nonce, c.text]);
  function ee() {
    I.current.invalidate(), de(!1), A([T]), L(""), ie(""), le([]), b();
  }
  async function Z(se) {
    const Ee = (se ?? S).trim();
    if (!Ee || Q) return;
    const qe = I.current.begin(), Ue = U.slice(-10);
    A((g) => [...g, { role: "user", text: Ee }]), L(""), le([]), de(!0), ie(""), b();
    try {
      const g = await it("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: Ee, history: Ue })
      });
      if (!I.current.isCurrent(qe)) return;
      if (!g.ok) throw new Error(g.error || "AI 没有生成方案");
      le(g.status === "need_clarification" ? g.options ?? [] : []), A((B) => [...B, { role: "assistant", text: g.reply || "方案已经生成，请检查右侧预演。" }]), g.status === "ready" && g.batch && g.previews?.length ? o({
        ok: !0,
        batch: !0,
        summary: g.reply,
        message: g.reply,
        batchItems: g.previews.map((B) => ({ operation: B.operation, token: B.token, summary: B.summary, canCommit: B.canCommit, message: B.message }))
      }) : g.status === "ready" && g.preview && o({
        ok: !0,
        token: g.preview.token,
        expiresAt: g.preview.expiresAt,
        summary: g.preview.summary,
        canCommit: g.preview.canCommit,
        message: g.preview.message,
        result: g.preview.result,
        operation: g.operation,
        input: g.input
      });
    } catch (g) {
      if (!I.current.isCurrent(qe)) return;
      const B = g.message || "AI 操作失败";
      ie(B), A(($) => [...$, { role: "assistant", text: `这次没有生成预演：${B}` }]);
    } finally {
      I.current.isCurrent(qe) && de(!1);
    }
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ i.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ i.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: "row-action-button", type: "button", onClick: ee, disabled: Q, children: "清空对话" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: p.map((se) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => L(se), children: se }, se)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          U.map((se, Ee) => /* @__PURE__ */ i.jsx("div", { className: `ai-bubble ${se.role}`, children: se.text }, Ee)),
          Q && /* @__PURE__ */ i.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        V && /* @__PURE__ */ i.jsx(wl, { tone: "error", title: "没有生成方案", text: V }),
        ae.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: ae.map((se) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
          Z(se);
        }, children: se }, se)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              value: S,
              onChange: (se) => L(se.target.value),
              onKeyDown: (se) => {
                se.key === "Enter" && !se.shiftKey && (se.preventDefault(), Z());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          K && /* @__PURE__ */ i.jsx("button", { type: "button", className: W ? "ai-mic listening" : "ai-mic", onClick: k, "aria-label": W ? "停止语音输入" : "语音输入", title: "语音输入", children: W ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            Z();
          }, disabled: !S.trim() || Q, children: Q ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ i.jsx(na, { title: "AI 预演", meta: f?.token ? `令牌 ${f.token.slice(0, 8)}…` : "等待指令" }),
        !f && /* @__PURE__ */ i.jsx(nl, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        f && /* @__PURE__ */ i.jsx(ng, { preview: f, busy: d, onCommit: E, onCommitBatch: j, onClose: q })
      ] })
    ] })
  ] });
}
function ug({ view: c, dashboard: f }) {
  if (c.kind === "system") return /* @__PURE__ */ i.jsx(og, { dashboard: f, embedded: !0, readOnly: !0 });
  const d = c.kind === "day" ? c.items ? [...c.items].sort((o, E) => String(pt(o) || "").localeCompare(String(pt(E) || ""))) : f.items.filter((o) => Ou(o) === c.date).sort((o, E) => String(pt(o) || "").localeCompare(String(pt(E) || ""))) : [c.item];
  return d.length ? /* @__PURE__ */ i.jsx("div", { className: c.kind === "day" ? "context-item-list context-day-list" : "context-item-list", children: d.map((o) => /* @__PURE__ */ i.jsx(cg, { item: o }, o.id)) }) : /* @__PURE__ */ i.jsx(nl, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function cg({ item: c }) {
  const f = pt(c);
  return /* @__PURE__ */ i.jsxs("section", { className: `context-item-card ${hr(c)}${mr(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ i.jsx("time", { children: f ? `${la(f, { month: "long", day: "numeric", weekday: "short" })} ${wa(f)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ i.jsx(Vh, { value: c.status })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: c.title }),
    /* @__PURE__ */ i.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" })
  ] });
}
function sg() {
  const [c, f] = w.useState({ loading: !0 }), d = w.useCallback(() => {
    f({ loading: !0 }), it("/api/versions").then((E) => f({ loading: !1, data: E })).catch((E) => f({ loading: !1, error: E.message }));
  }, []);
  w.useEffect(() => {
    d();
  }, [d]);
  const o = c.data?.versions;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(na, { title: "版本与运行态" }),
    c.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : c.error ? /* @__PURE__ */ i.jsx(aa, { label: "版本读取", ok: !1, detail: c.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "源码版本" }),
        /* @__PURE__ */ i.jsx("code", { children: o?.source ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "正式安装版" }),
        /* @__PURE__ */ i.jsx("code", { children: o?.installed ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "安装记录" }),
        /* @__PURE__ */ i.jsx("code", { children: o?.installsRecord ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "开发槽" }),
        /* @__PURE__ */ i.jsx("code", { children: o?.dev ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsx(aa, { label: "运行态", ok: !c.data?.devShadowing, detail: c.data?.note || "" })
    ] })
  ] });
}
function rg({ onSync: c, readOnly: f = !1 }) {
  const [d, o] = w.useState({ loading: !0 }), E = w.useCallback(() => {
    o({ loading: !0 }), it("/api/calendar-health").then((T) => o({ loading: !1, data: T })).catch((T) => o({ loading: !1, error: T.message }));
  }, []);
  w.useEffect(() => {
    E();
  }, [E]);
  const j = d.data?.diff, b = j?.toDelete ?? [], q = d.data?.inSync === !0;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(na, { title: "飞书日历对账" }),
    d.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : d.error ? /* @__PURE__ */ i.jsx(aa, { label: "日历盘点", ok: !1, detail: d.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(aa, { label: "对账结果", ok: q, detail: q ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
      /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-summary", children: [
        /* @__PURE__ */ i.jsxs("span", { children: [
          "日历事件 ",
          j?.calendarEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "托管 ",
          j?.managedEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "期望 ",
          j?.desiredEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "待建 ",
          j?.toCreate?.length ?? 0
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "待更新 ",
          j?.toUpdate?.length ?? 0
        ] }),
        /* @__PURE__ */ i.jsxs("span", { className: b.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          b.length
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-list", children: [
        b.slice(0, 8).map((T, p) => /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ i.jsx("span", { children: T.summary }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: String(T.start || "").slice(0, 16) })
        ] }, p)),
        b.length > 8 && /* @__PURE__ */ i.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          b.length - 8,
          " 条待删除…"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "row-actions", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: E, children: "重新盘点" }),
        !f && !q && c && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: c, children: "打开同步操作" })
      ] })
    ] })
  ] });
}
function og({ dashboard: c, onSync: f, embedded: d = !1, readOnly: o = !1 }) {
  const E = c.health?.database?.verification;
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack system-embedded" : "view-stack", children: [
    !d && /* @__PURE__ */ i.jsx(vi, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ i.jsx(bn, { label: "数据库完整性", value: E?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${E?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ i.jsx(bn, { label: "活动事务", value: E?.counts?.active ?? "—", hint: `总数 ${E?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ i.jsx(bn, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ i.jsx(bn, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ i.jsx(na, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ i.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((j) => /* @__PURE__ */ i.jsx(aa, { label: j.label, ok: j.ok, detail: j.detail }, j.label)) }),
        /* @__PURE__ */ i.jsx(na, { title: "契约检查" }),
        /* @__PURE__ */ i.jsx(aa, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ i.jsx(aa, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ i.jsx(aa, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ i.jsx(aa, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
      ] }),
      !o && f && /* @__PURE__ */ i.jsxs("div", { className: "panel action-panel", children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "飞书看板" }),
        /* @__PURE__ */ i.jsx("h3", { children: "同步前会先预演。" }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "正式同步固定使用 ",
          /* @__PURE__ */ i.jsx("code", { children: "--prune" }),
          "，清理已不存在的受管事件。"
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "打开同步操作" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(rg, { onSync: f, readOnly: o }),
    /* @__PURE__ */ i.jsx(sg, {})
  ] });
}
function Lh({ preview: c, onClose: f }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ i.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "完成并返回" }) });
}
function cr({ label: c, items: f, value: d, onChange: o, busy: E }) {
  return /* @__PURE__ */ i.jsx("nav", { className: "workbench-nav", "aria-label": c, "data-ui": "segmented-navigation", children: f.map((j) => /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: "button",
      className: d === j.id ? "selected" : "",
      "data-ui-role": "nav-item",
      "data-ui-id": `secondary-nav-${j.id}`,
      "aria-label": `${j.label}${j.count ? `，${j.count} 项` : ""}`,
      "aria-pressed": d === j.id,
      disabled: E,
      onClick: () => o(j.id),
      children: [
        /* @__PURE__ */ i.jsx("span", { children: j.label }),
        j.count ? /* @__PURE__ */ i.jsx("strong", { children: j.count }) : null
      ]
    },
    j.id
  )) });
}
function Yh({ ok: c, text: f }) {
  return /* @__PURE__ */ i.jsx("small", { className: `inline-result ${c ? "ok" : "error"}`, children: f });
}
function bn({ label: c, value: f, hint: d, tone: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `metric-card ${o}`, children: [
    /* @__PURE__ */ i.jsx("span", { children: c }),
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("small", { children: d })
  ] });
}
function Vh({ value: c }) {
  return /* @__PURE__ */ i.jsx("span", { className: `status ${ur(c)}`, "data-ui": "status-badge", "data-ui-state": ur(c), children: By[c] || c });
}
function na({ title: c, meta: f, action: d, onAction: o, actionDisabled: E }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "panel-heading", "data-ui": "section-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h3", { children: c }),
      f && /* @__PURE__ */ i.jsx("span", { children: f })
    ] }),
    d && /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", onClick: o, disabled: E, children: d })
  ] });
}
function vi({ eyebrow: c, title: f, description: d }) {
  return /* @__PURE__ */ i.jsxs("header", { className: "page-title", "data-ui": "page-title", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ i.jsx("h2", { children: f }),
    /* @__PURE__ */ i.jsx("p", { children: d })
  ] });
}
function re({ name: c, label: f, type: d = "text", placeholder: o, defaultValue: E, required: j = !1 }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ i.jsx("span", { children: f }),
    /* @__PURE__ */ i.jsx("input", { name: c, type: d, placeholder: o, defaultValue: E, required: j })
  ] });
}
function aa({ label: c, ok: f, detail: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ i.jsx("span", { className: f ? "check ok" : "check no", children: f ? "✓" : "!" }),
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: c }),
      /* @__PURE__ */ i.jsx("small", { children: d })
    ] })
  ] });
}
function nl({ title: c, text: f, compact: d = !1 }) {
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "empty compact" : "empty", "data-ui": "empty-state", children: [
    /* @__PURE__ */ i.jsx("strong", { children: c }),
    /* @__PURE__ */ i.jsx("span", { children: f })
  ] });
}
function wl({ tone: c, title: f, text: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `notice ${c}`, "data-ui": "notice", "data-ui-state": c, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("span", { children: d })
  ] });
}
function vr() {
  return /* @__PURE__ */ i.jsxs("div", { className: "skeleton-layout", role: "status", "aria-label": "正在加载排课与事务数据…", children: [
    /* @__PURE__ */ i.jsx("div", { className: "skeleton-card skeleton-banner" }),
    /* @__PURE__ */ i.jsxs("div", { className: "skeleton-metrics", children: [
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "skeleton-lines", children: [
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ i.jsx("div", { className: "skeleton-card skeleton-row" })
    ] })
  ] });
}
rr.ready();
rr.ui.resize({ height: window.innerHeight || 900 });
const zh = document.getElementById("root");
zh && ry.createRoot(zh).render(/* @__PURE__ */ i.jsx(Yy, { children: /* @__PURE__ */ i.jsx(Gy, {}) }));
