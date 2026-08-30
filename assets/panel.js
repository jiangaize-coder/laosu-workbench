var Xs = { exports: {} }, si = {};
var sh;
function ly() {
  if (sh) return si;
  sh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(o, E, S) {
    var b = null;
    if (S !== void 0 && (b = "" + S), E.key !== void 0 && (b = "" + E.key), "key" in E) {
      S = {};
      for (var q in E)
        q !== "key" && (S[q] = E[q]);
    } else S = E;
    return E = S.ref, {
      $$typeof: c,
      type: o,
      key: b,
      ref: E !== void 0 ? E : null,
      props: S
    };
  }
  return si.Fragment = f, si.jsx = d, si.jsxs = d, si;
}
var rh;
function ny() {
  return rh || (rh = 1, Xs.exports = ly()), Xs.exports;
}
var i = ny(), Qs = { exports: {} }, be = {};
var oh;
function iy() {
  if (oh) return be;
  oh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function L(h) {
    return h === null || typeof h != "object" ? null : (h = x && h[x] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var Z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P = Object.assign, te = {};
  function pe(h, M, X) {
    this.props = h, this.context = M, this.refs = te, this.updater = X || Z;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(h, M) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, M, "setState");
  }, pe.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function Ce() {
  }
  Ce.prototype = pe.prototype;
  function ce(h, M, X) {
    this.props = h, this.context = M, this.refs = te, this.updater = X || Z;
  }
  var me = ce.prototype = new Ce();
  me.constructor = ce, P(me, pe.prototype), me.isPureReactComponent = !0;
  var ve = Array.isArray;
  function de() {
  }
  var $ = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function ie(h, M, X) {
    var F = X.ref;
    return {
      $$typeof: c,
      type: h,
      key: M,
      ref: F !== void 0 ? F : null,
      props: X
    };
  }
  function k(h, M) {
    return ie(h.type, M, h.props);
  }
  function G(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function I(h) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(X) {
      return M[X];
    });
  }
  var ae = /\/+/g;
  function Ee(h, M) {
    return typeof h == "object" && h !== null && h.key != null ? I("" + h.key) : M.toString(36);
  }
  function we(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(de, de) : (h.status = "pending", h.then(
          function(M) {
            h.status === "pending" && (h.status = "fulfilled", h.value = M);
          },
          function(M) {
            h.status === "pending" && (h.status = "rejected", h.reason = M);
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
  function g(h, M, X, F, ye) {
    var xe = typeof h;
    (xe === "undefined" || xe === "boolean") && (h = null);
    var Ne = !1;
    if (h === null) Ne = !0;
    else
      switch (xe) {
        case "bigint":
        case "string":
        case "number":
          Ne = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case c:
            case f:
              Ne = !0;
              break;
            case D:
              return Ne = h._init, g(
                Ne(h._payload),
                M,
                X,
                F,
                ye
              );
          }
      }
    if (Ne)
      return ye = ye(h), Ne = F === "" ? "." + Ee(h, 0) : F, ve(ye) ? (X = "", Ne != null && (X = Ne.replace(ae, "$&/") + "/"), g(ye, M, X, "", function(qe) {
        return qe;
      })) : ye != null && (G(ye) && (ye = k(
        ye,
        X + (ye.key == null || h && h.key === ye.key ? "" : ("" + ye.key).replace(
          ae,
          "$&/"
        ) + "/") + Ne
      )), M.push(ye)), 1;
    Ne = 0;
    var We = F === "" ? "." : F + ":";
    if (ve(h))
      for (var V = 0; V < h.length; V++)
        F = h[V], xe = We + Ee(F, V), Ne += g(
          F,
          M,
          X,
          xe,
          ye
        );
    else if (V = L(h), typeof V == "function")
      for (h = V.call(h), V = 0; !(F = h.next()).done; )
        F = F.value, xe = We + Ee(F, V++), Ne += g(
          F,
          M,
          X,
          xe,
          ye
        );
    else if (xe === "object") {
      if (typeof h.then == "function")
        return g(
          we(h),
          M,
          X,
          F,
          ye
        );
      throw M = String(h), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ne;
  }
  function B(h, M, X) {
    if (h == null) return h;
    var F = [], ye = 0;
    return g(h, F, "", "", function(xe) {
      return M.call(X, xe, ye++);
    }), F;
  }
  function K(h) {
    if (h._status === -1) {
      var M = h._result;
      M = M(), M.then(
        function(X) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = X);
        },
        function(X) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = X);
        }
      ), h._status === -1 && (h._status = 0, h._result = M);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var y = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, W = {
    map: B,
    forEach: function(h, M, X) {
      B(
        h,
        function() {
          M.apply(this, arguments);
        },
        X
      );
    },
    count: function(h) {
      var M = 0;
      return B(h, function() {
        M++;
      }), M;
    },
    toArray: function(h) {
      return B(h, function(M) {
        return M;
      }) || [];
    },
    only: function(h) {
      if (!G(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return be.Activity = A, be.Children = W, be.Component = pe, be.Fragment = d, be.Profiler = E, be.PureComponent = ce, be.StrictMode = o, be.Suspense = N, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return $.H.useMemoCache(h);
    }
  }, be.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, be.cacheSignal = function() {
    return null;
  }, be.cloneElement = function(h, M, X) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var F = P({}, h.props), ye = h.key;
    if (M != null)
      for (xe in M.key !== void 0 && (ye = "" + M.key), M)
        !Y.call(M, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && M.ref === void 0 || (F[xe] = M[xe]);
    var xe = arguments.length - 2;
    if (xe === 1) F.children = X;
    else if (1 < xe) {
      for (var Ne = Array(xe), We = 0; We < xe; We++)
        Ne[We] = arguments[We + 2];
      F.children = Ne;
    }
    return ie(h.type, ye, F);
  }, be.createContext = function(h) {
    return h = {
      $$typeof: b,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: S,
      _context: h
    }, h;
  }, be.createElement = function(h, M, X) {
    var F, ye = {}, xe = null;
    if (M != null)
      for (F in M.key !== void 0 && (xe = "" + M.key), M)
        Y.call(M, F) && F !== "key" && F !== "__self" && F !== "__source" && (ye[F] = M[F]);
    var Ne = arguments.length - 2;
    if (Ne === 1) ye.children = X;
    else if (1 < Ne) {
      for (var We = Array(Ne), V = 0; V < Ne; V++)
        We[V] = arguments[V + 2];
      ye.children = We;
    }
    if (h && h.defaultProps)
      for (F in Ne = h.defaultProps, Ne)
        ye[F] === void 0 && (ye[F] = Ne[F]);
    return ie(h, xe, ye);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(h) {
    return { $$typeof: q, render: h };
  }, be.isValidElement = G, be.lazy = function(h) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: h },
      _init: K
    };
  }, be.memo = function(h, M) {
    return {
      $$typeof: p,
      type: h,
      compare: M === void 0 ? null : M
    };
  }, be.startTransition = function(h) {
    var M = $.T, X = {};
    $.T = X;
    try {
      var F = h(), ye = $.S;
      ye !== null && ye(X, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(de, y);
    } catch (xe) {
      y(xe);
    } finally {
      M !== null && X.types !== null && (M.types = X.types), $.T = M;
    }
  }, be.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, be.use = function(h) {
    return $.H.use(h);
  }, be.useActionState = function(h, M, X) {
    return $.H.useActionState(h, M, X);
  }, be.useCallback = function(h, M) {
    return $.H.useCallback(h, M);
  }, be.useContext = function(h) {
    return $.H.useContext(h);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(h, M) {
    return $.H.useDeferredValue(h, M);
  }, be.useEffect = function(h, M) {
    return $.H.useEffect(h, M);
  }, be.useEffectEvent = function(h) {
    return $.H.useEffectEvent(h);
  }, be.useId = function() {
    return $.H.useId();
  }, be.useImperativeHandle = function(h, M, X) {
    return $.H.useImperativeHandle(h, M, X);
  }, be.useInsertionEffect = function(h, M) {
    return $.H.useInsertionEffect(h, M);
  }, be.useLayoutEffect = function(h, M) {
    return $.H.useLayoutEffect(h, M);
  }, be.useMemo = function(h, M) {
    return $.H.useMemo(h, M);
  }, be.useOptimistic = function(h, M) {
    return $.H.useOptimistic(h, M);
  }, be.useReducer = function(h, M, X) {
    return $.H.useReducer(h, M, X);
  }, be.useRef = function(h) {
    return $.H.useRef(h);
  }, be.useState = function(h) {
    return $.H.useState(h);
  }, be.useSyncExternalStore = function(h, M, X) {
    return $.H.useSyncExternalStore(
      h,
      M,
      X
    );
  }, be.useTransition = function() {
    return $.H.useTransition();
  }, be.version = "19.2.8", be;
}
var fh;
function ir() {
  return fh || (fh = 1, Qs.exports = iy()), Qs.exports;
}
var w = ir(), Zs = { exports: {} }, ri = {}, Ks = { exports: {} }, Js = {};
var dh;
function uy() {
  return dh || (dh = 1, (function(c) {
    function f(g, B) {
      var K = g.length;
      g.push(B);
      e: for (; 0 < K; ) {
        var y = K - 1 >>> 1, W = g[y];
        if (0 < E(W, B))
          g[y] = B, g[K] = W, K = y;
        else break e;
      }
    }
    function d(g) {
      return g.length === 0 ? null : g[0];
    }
    function o(g) {
      if (g.length === 0) return null;
      var B = g[0], K = g.pop();
      if (K !== B) {
        g[0] = K;
        e: for (var y = 0, W = g.length, h = W >>> 1; y < h; ) {
          var M = 2 * (y + 1) - 1, X = g[M], F = M + 1, ye = g[F];
          if (0 > E(X, K))
            F < W && 0 > E(ye, X) ? (g[y] = ye, g[F] = K, y = F) : (g[y] = X, g[M] = K, y = M);
          else if (F < W && 0 > E(ye, K))
            g[y] = ye, g[F] = K, y = F;
          else break e;
        }
      }
      return B;
    }
    function E(g, B) {
      var K = g.sortIndex - B.sortIndex;
      return K !== 0 ? K : g.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      c.unstable_now = function() {
        return S.now();
      };
    } else {
      var b = Date, q = b.now();
      c.unstable_now = function() {
        return b.now() - q;
      };
    }
    var N = [], p = [], D = 1, A = null, x = 3, L = !1, Z = !1, P = !1, te = !1, pe = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function me(g) {
      for (var B = d(p); B !== null; ) {
        if (B.callback === null) o(p);
        else if (B.startTime <= g)
          o(p), B.sortIndex = B.expirationTime, f(N, B);
        else break;
        B = d(p);
      }
    }
    function ve(g) {
      if (P = !1, me(g), !Z)
        if (d(N) !== null)
          Z = !0, de || (de = !0, I());
        else {
          var B = d(p);
          B !== null && we(ve, B.startTime - g);
        }
    }
    var de = !1, $ = -1, Y = 5, ie = -1;
    function k() {
      return te ? !0 : !(c.unstable_now() - ie < Y);
    }
    function G() {
      if (te = !1, de) {
        var g = c.unstable_now();
        ie = g;
        var B = !0;
        try {
          e: {
            Z = !1, P && (P = !1, Ce($), $ = -1), L = !0;
            var K = x;
            try {
              t: {
                for (me(g), A = d(N); A !== null && !(A.expirationTime > g && k()); ) {
                  var y = A.callback;
                  if (typeof y == "function") {
                    A.callback = null, x = A.priorityLevel;
                    var W = y(
                      A.expirationTime <= g
                    );
                    if (g = c.unstable_now(), typeof W == "function") {
                      A.callback = W, me(g), B = !0;
                      break t;
                    }
                    A === d(N) && o(N), me(g);
                  } else o(N);
                  A = d(N);
                }
                if (A !== null) B = !0;
                else {
                  var h = d(p);
                  h !== null && we(
                    ve,
                    h.startTime - g
                  ), B = !1;
                }
              }
              break e;
            } finally {
              A = null, x = K, L = !1;
            }
            B = void 0;
          }
        } finally {
          B ? I() : de = !1;
        }
      }
    }
    var I;
    if (typeof ce == "function")
      I = function() {
        ce(G);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), Ee = ae.port2;
      ae.port1.onmessage = G, I = function() {
        Ee.postMessage(null);
      };
    } else
      I = function() {
        pe(G, 0);
      };
    function we(g, B) {
      $ = pe(function() {
        g(c.unstable_now());
      }, B);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, c.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < g ? Math.floor(1e3 / g) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, c.unstable_next = function(g) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = x;
      }
      var K = x;
      x = B;
      try {
        return g();
      } finally {
        x = K;
      }
    }, c.unstable_requestPaint = function() {
      te = !0;
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
      var K = x;
      x = g;
      try {
        return B();
      } finally {
        x = K;
      }
    }, c.unstable_scheduleCallback = function(g, B, K) {
      var y = c.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? y + K : y) : K = y, g) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = K + W, g = {
        id: D++,
        callback: B,
        priorityLevel: g,
        startTime: K,
        expirationTime: W,
        sortIndex: -1
      }, K > y ? (g.sortIndex = K, f(p, g), d(N) === null && g === d(p) && (P ? (Ce($), $ = -1) : P = !0, we(ve, K - y))) : (g.sortIndex = W, f(N, g), Z || L || (Z = !0, de || (de = !0, I()))), g;
    }, c.unstable_shouldYield = k, c.unstable_wrapCallback = function(g) {
      var B = x;
      return function() {
        var K = x;
        x = B;
        try {
          return g.apply(this, arguments);
        } finally {
          x = K;
        }
      };
    };
  })(Js)), Js;
}
var hh;
function cy() {
  return hh || (hh = 1, Ks.exports = uy()), Ks.exports;
}
var $s = { exports: {} }, mt = {};
var mh;
function sy() {
  if (mh) return mt;
  mh = 1;
  var c = ir();
  function f(N) {
    var p = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        p += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return "Minified React error #" + N + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function S(N, p, D) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: A == null ? null : "" + A,
      children: N,
      containerInfo: p,
      implementation: D
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(N, p) {
    if (N === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, mt.createPortal = function(N, p) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(f(299));
    return S(N, p, null, D);
  }, mt.flushSync = function(N) {
    var p = b.T, D = o.p;
    try {
      if (b.T = null, o.p = 2, N) return N();
    } finally {
      b.T = p, o.p = D, o.d.f();
    }
  }, mt.preconnect = function(N, p) {
    typeof N == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(N, p));
  }, mt.prefetchDNS = function(N) {
    typeof N == "string" && o.d.D(N);
  }, mt.preinit = function(N, p) {
    if (typeof N == "string" && p && typeof p.as == "string") {
      var D = p.as, A = q(D, p.crossOrigin), x = typeof p.integrity == "string" ? p.integrity : void 0, L = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      D === "style" ? o.d.S(
        N,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: A,
          integrity: x,
          fetchPriority: L
        }
      ) : D === "script" && o.d.X(N, {
        crossOrigin: A,
        integrity: x,
        fetchPriority: L,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, mt.preinitModule = function(N, p) {
    if (typeof N == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var D = q(
            p.as,
            p.crossOrigin
          );
          o.d.M(N, {
            crossOrigin: D,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(N);
  }, mt.preload = function(N, p) {
    if (typeof N == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var D = p.as, A = q(D, p.crossOrigin);
      o.d.L(N, D, {
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
  }, mt.preloadModule = function(N, p) {
    if (typeof N == "string")
      if (p) {
        var D = q(p.as, p.crossOrigin);
        o.d.m(N, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: D,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(N);
  }, mt.requestFormReset = function(N) {
    o.d.r(N);
  }, mt.unstable_batchedUpdates = function(N, p) {
    return N(p);
  }, mt.useFormState = function(N, p, D) {
    return b.H.useFormState(N, p, D);
  }, mt.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, mt.version = "19.2.8", mt;
}
var vh;
function ry() {
  if (vh) return $s.exports;
  vh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), $s.exports = sy(), $s.exports;
}
var yh;
function oy() {
  if (yh) return ri;
  yh = 1;
  var c = cy(), f = ir(), d = ry();
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
  function S(e) {
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
  function N(e) {
    if (S(e) !== e)
      throw Error(o(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = S(e), t === null) throw Error(o(188));
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
          if (u === a) return N(n), e;
          if (u === l) return N(n), t;
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
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = D(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), te = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), Ce = /* @__PURE__ */ Symbol.for("react.consumer"), ce = /* @__PURE__ */ Symbol.for("react.context"), me = /* @__PURE__ */ Symbol.for("react.forward_ref"), ve = /* @__PURE__ */ Symbol.for("react.suspense"), de = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.activity"), k = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case P:
        return "Fragment";
      case pe:
        return "Profiler";
      case te:
        return "StrictMode";
      case ve:
        return "Suspense";
      case de:
        return "SuspenseList";
      case ie:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Z:
          return "Portal";
        case ce:
          return e.displayName || "Context";
        case Ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case me:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
        case Y:
          t = e._payload, e = e._init;
          try {
            return Ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var we = Array.isArray, g = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, y = [], W = -1;
  function h(e) {
    return { current: e };
  }
  function M(e) {
    0 > W || (e.current = y[W], y[W] = null, W--);
  }
  function X(e, t) {
    W++, y[W] = e.current, e.current = t;
  }
  var F = h(null), ye = h(null), xe = h(null), Ne = h(null);
  function We(e, t) {
    switch (X(xe, t), X(ye, e), X(F, null), t.nodeType) {
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
    M(F), X(F, e);
  }
  function V() {
    M(F), M(ye), M(xe);
  }
  function qe(e) {
    e.memoizedState !== null && X(Ne, e);
    var t = F.current, a = Md(t, e.type);
    t !== a && (X(ye, e), X(F, a));
  }
  function he(e) {
    ye.current === e && (M(F), M(ye)), Ne.current === e && (M(Ne), ni._currentValue = K);
  }
  var J, zt;
  function at(e) {
    if (J === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        J = t && t[1] || "", zt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + J + e + zt;
  }
  var bt = !1;
  function Ct(e, t) {
    if (!e || bt) return "";
    bt = !0;
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
`), T = r.split(`
`);
        for (n = l = 0; l < m.length && !m[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < T.length && !T[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === m.length || n === T.length)
          for (l = m.length - 1, n = T.length - 1; 1 <= l && 0 <= n && m[l] !== T[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (m[l] !== T[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || m[l] !== T[n]) {
                  var O = `
` + m[l].replace(" at new ", " at ");
                  return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      bt = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? at(a) : "";
  }
  function ca(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return at(e.type);
      case 16:
        return at("Lazy");
      case 13:
        return e.child !== t && t !== null ? at("Suspense Fallback") : at("Suspense");
      case 19:
        return at("SuspenseList");
      case 0:
      case 15:
        return Ct(e.type, !1);
      case 11:
        return Ct(e.type.render, !1);
      case 1:
        return Ct(e.type, !0);
      case 31:
        return at("Activity");
      default:
        return "";
    }
  }
  function yt(e) {
    try {
      var t = "", a = null;
      do
        t += ca(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var st = Object.prototype.hasOwnProperty, sa = c.unstable_scheduleCallback, Ca = c.unstable_cancelCallback, ra = c.unstable_shouldYield, ul = c.unstable_requestPaint, Me = c.unstable_now, wa = c.unstable_getCurrentPriorityLevel, mi = c.unstable_ImmediatePriority, Al = c.unstable_UserBlockingPriority, Da = c.unstable_NormalPriority, zl = c.unstable_LowPriority, vi = c.unstable_IdlePriority, wu = c.log, yi = c.unstable_setDisableYieldValue, Ma = null, it = null;
  function kt(e) {
    if (typeof wu == "function" && yi(e), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(Ma, e);
      } catch {
      }
  }
  var gt = Math.clz32 ? Math.clz32 : Mu, pn = Math.log, Du = Math.LN2;
  function Mu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pn(e) / Du | 0) | 0;
  }
  var Cl = 256, wl = 262144, Dl = 4194304;
  function U(e) {
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
  function Q(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~u, l !== 0 ? n = U(l) : (s &= r, s !== 0 ? n = U(s) : a || (a = r & ~e, a !== 0 && (n = U(a))))) : (r = l & ~u, r !== 0 ? n = U(r) : s !== 0 ? n = U(s) : a || (a = l & ~e, a !== 0 && (n = U(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function le(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ue(e, t) {
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
  function ge() {
    var e = Dl;
    return Dl <<= 1, (Dl & 62914560) === 0 && (Dl = 4194304), e;
  }
  function Oe(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function se(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wt(e, t, a, l, n, u) {
    var s = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, m = e.expirationTimes, T = e.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var O = 31 - gt(a), H = 1 << O;
      r[O] = 0, m[O] = -1;
      var z = T[O];
      if (z !== null)
        for (T[O] = null, O = 0; O < z.length; O++) {
          var C = z[O];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~H;
    }
    l !== 0 && ta(e, l, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function ta(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - gt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function aa(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - gt(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function hr(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Ou(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Ou(e) {
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
  function Uu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mr() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : th(e.type));
  }
  function vr(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Oa = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Oa, xt = "__reactProps$" + Oa, Ml = "__reactContainer$" + Oa, Ru = "__reactEvents$" + Oa, Zh = "__reactListeners$" + Oa, Kh = "__reactHandles$" + Oa, yr = "__reactResources$" + Oa, bn = "__reactMarker$" + Oa;
  function qu(e) {
    delete e[rt], delete e[xt], delete e[Ru], delete e[Zh], delete e[Kh];
  }
  function Ol(e) {
    var t = e[rt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ml] || a[rt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = kd(e); e !== null; ) {
            if (a = e[rt]) return a;
            e = kd(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ul(e) {
    if (e = e[rt] || e[Ml]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function xn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Rl(e) {
    var t = e[yr];
    return t || (t = e[yr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[bn] = !0;
  }
  var gr = /* @__PURE__ */ new Set(), pr = {};
  function cl(e, t) {
    ql(e, t), ql(e + "Capture", t);
  }
  function ql(e, t) {
    for (pr[e] = t, e = 0; e < t.length; e++)
      gr.add(t[e]);
  }
  var Jh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), br = {}, xr = {};
  function $h(e) {
    return st.call(xr, e) ? !0 : st.call(br, e) ? !1 : Jh.test(e) ? xr[e] = !0 : (br[e] = !0, !1);
  }
  function gi(e, t, a) {
    if ($h(t))
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
  function pi(e, t, a) {
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
  function oa(e, t, a, l) {
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
  function Lt(e) {
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
  function Fh(e, t, a) {
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
  function Hu(e) {
    if (!e._valueTracker) {
      var t = jr(e) ? "checked" : "value";
      e._valueTracker = Fh(
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
  function bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wh = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      Wh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(e, t, a, l, n, u, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Lt(t)) : e.value !== "" + Lt(t) && (e.value = "" + Lt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? ku(e, s, Lt(t)) : a != null ? ku(e, s, Lt(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Lt(r) : e.removeAttribute("name");
  }
  function Er(e, t, a, l, n, u, s, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Hu(e);
        return;
      }
      a = a != null ? "" + Lt(a) : "", t = t != null ? "" + Lt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Hu(e);
  }
  function ku(e, t, a) {
    t === "number" && bi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Hl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Lt(a), t = null, n = 0; n < e.length; n++) {
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
    if (t != null && (t = "" + Lt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Lt(a) : "";
  }
  function _r(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (we(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Lt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Hu(e);
  }
  function Bl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ih = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tr(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ih.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
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
  function Lu(e) {
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
  var Ph = /* @__PURE__ */ new Map([
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
  ]), em = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xi(e) {
    return em.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function fa() {
  }
  var Yu = null;
  function Vu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var kl = null, Ll = null;
  function zr(e) {
    var t = Ul(e);
    if (t && (e = t.stateNode)) {
      var a = e[xt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Bu(
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
              'input[name="' + Yt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[xt] || null;
                if (!n) throw Error(o(90));
                Bu(
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
          t = a.value, t != null && Hl(e, !!a.multiple, t, !1);
      }
    }
  }
  var Gu = !1;
  function Cr(e, t, a) {
    if (Gu) return e(t, a);
    Gu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Gu = !1, (kl !== null || Ll !== null) && (cu(), kl && (t = kl, e = Ll, Ll = kl = null, zr(t), e)))
        for (t = 0; t < e.length; t++) zr(e[t]);
    }
  }
  function jn(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[xt] || null;
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
  var da = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (da)
    try {
      var Sn = {};
      Object.defineProperty(Sn, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
    } catch {
      Xu = !1;
    }
  var Ua = null, Qu = null, ji = null;
  function wr() {
    if (ji) return ji;
    var e, t = Qu, a = t.length, l, n = "value" in Ua ? Ua.value : Ua.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var s = a - e;
    for (l = 1; l <= s && t[a - l] === n[u - l]; l++) ;
    return ji = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Si(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ei() {
    return !0;
  }
  function Dr() {
    return !1;
  }
  function jt(e) {
    function t(a, l, n, u, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ei : Dr, this.isPropagationStopped = Dr, this;
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ei);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ei);
      },
      persist: function() {
      },
      isPersistent: Ei
    }), t;
  }
  var sl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ni = jt(sl), En = A({}, sl, { view: 0, detail: 0 }), tm = jt(En), Zu, Ku, Nn, _i = A({}, En, {
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
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Nn && (Nn && e.type === "mousemove" ? (Zu = e.screenX - Nn.screenX, Ku = e.screenY - Nn.screenY) : Ku = Zu = 0, Nn = e), Zu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ku;
    }
  }), Mr = jt(_i), am = A({}, _i, { dataTransfer: 0 }), lm = jt(am), nm = A({}, En, { relatedTarget: 0 }), Ju = jt(nm), im = A({}, sl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = jt(im), cm = A({}, sl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), sm = jt(cm), rm = A({}, sl, { data: 0 }), Or = jt(rm), om = {
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
  }, fm = {
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
  }, dm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function hm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dm[e]) ? !!t[e] : !1;
  }
  function $u() {
    return hm;
  }
  var mm = A({}, En, {
    key: function(e) {
      if (e.key) {
        var t = om[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(e) {
      return e.type === "keypress" ? Si(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), vm = jt(mm), ym = A({}, _i, {
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
  }), Ur = jt(ym), gm = A({}, En, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), pm = jt(gm), bm = A({}, sl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xm = jt(bm), jm = A({}, _i, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sm = jt(jm), Em = A({}, sl, {
    newState: 0,
    oldState: 0
  }), Nm = jt(Em), _m = [9, 13, 27, 32], Fu = da && "CompositionEvent" in window, _n = null;
  da && "documentMode" in document && (_n = document.documentMode);
  var Tm = da && "TextEvent" in window && !_n, Rr = da && (!Fu || _n && 8 < _n && 11 >= _n), qr = " ", Hr = !1;
  function Br(e, t) {
    switch (e) {
      case "keyup":
        return _m.indexOf(t.keyCode) !== -1;
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
  var Yl = !1;
  function Am(e, t) {
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
  function zm(e, t) {
    if (Yl)
      return e === "compositionend" || !Fu && Br(e, t) ? (e = wr(), ji = Qu = Ua = null, Yl = !1, e) : null;
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
  var Cm = {
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
    return t === "input" ? !!Cm[e.type] : t === "textarea";
  }
  function Yr(e, t, a, l) {
    kl ? Ll ? Ll.push(l) : Ll = [l] : kl = l, t = mu(t, "onChange"), 0 < t.length && (a = new Ni(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Tn = null, An = null;
  function wm(e) {
    _d(e, 0);
  }
  function Ti(e) {
    var t = xn(e);
    if (Sr(t)) return e;
  }
  function Vr(e, t) {
    if (e === "change") return t;
  }
  var Gr = !1;
  if (da) {
    var Wu;
    if (da) {
      var Iu = "oninput" in document;
      if (!Iu) {
        var Xr = document.createElement("div");
        Xr.setAttribute("oninput", "return;"), Iu = typeof Xr.oninput == "function";
      }
      Wu = Iu;
    } else Wu = !1;
    Gr = Wu && (!document.documentMode || 9 < document.documentMode);
  }
  function Qr() {
    Tn && (Tn.detachEvent("onpropertychange", Zr), An = Tn = null);
  }
  function Zr(e) {
    if (e.propertyName === "value" && Ti(An)) {
      var t = [];
      Yr(
        t,
        An,
        e,
        Vu(e)
      ), Cr(wm, t);
    }
  }
  function Dm(e, t, a) {
    e === "focusin" ? (Qr(), Tn = t, An = a, Tn.attachEvent("onpropertychange", Zr)) : e === "focusout" && Qr();
  }
  function Mm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ti(An);
  }
  function Om(e, t) {
    if (e === "click") return Ti(t);
  }
  function Um(e, t) {
    if (e === "input" || e === "change")
      return Ti(t);
  }
  function Rm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : Rm;
  function zn(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!st.call(t, n) || !Dt(e[n], t[n]))
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
    for (var t = bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = bi(e.document);
    }
    return t;
  }
  function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qm = da && "documentMode" in document && 11 >= document.documentMode, Vl = null, ec = null, Cn = null, tc = !1;
  function Wr(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    tc || Vl == null || Vl !== bi(l) || (l = Vl, "selectionStart" in l && Pu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Cn && zn(Cn, l) || (Cn = l, l = mu(ec, "onSelect"), 0 < l.length && (t = new Ni(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Vl)));
  }
  function rl(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Gl = {
    animationend: rl("Animation", "AnimationEnd"),
    animationiteration: rl("Animation", "AnimationIteration"),
    animationstart: rl("Animation", "AnimationStart"),
    transitionrun: rl("Transition", "TransitionRun"),
    transitionstart: rl("Transition", "TransitionStart"),
    transitioncancel: rl("Transition", "TransitionCancel"),
    transitionend: rl("Transition", "TransitionEnd")
  }, ac = {}, Ir = {};
  da && (Ir = document.createElement("div").style, "AnimationEvent" in window || (delete Gl.animationend.animation, delete Gl.animationiteration.animation, delete Gl.animationstart.animation), "TransitionEvent" in window || delete Gl.transitionend.transition);
  function ol(e) {
    if (ac[e]) return ac[e];
    if (!Gl[e]) return e;
    var t = Gl[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ir)
        return ac[e] = t[a];
    return e;
  }
  var Pr = ol("animationend"), eo = ol("animationiteration"), to = ol("animationstart"), Hm = ol("transitionrun"), Bm = ol("transitionstart"), km = ol("transitioncancel"), ao = ol("transitionend"), lo = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function Ft(e, t) {
    lo.set(e, t), cl(t, [e]);
  }
  var Ai = typeof reportError == "function" ? reportError : function(e) {
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
  }, Vt = [], Xl = 0, nc = 0;
  function zi() {
    for (var e = Xl, t = nc = Xl = 0; t < e; ) {
      var a = Vt[t];
      Vt[t++] = null;
      var l = Vt[t];
      Vt[t++] = null;
      var n = Vt[t];
      Vt[t++] = null;
      var u = Vt[t];
      if (Vt[t++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      u !== 0 && no(a, n, u);
    }
  }
  function Ci(e, t, a, l) {
    Vt[Xl++] = e, Vt[Xl++] = t, Vt[Xl++] = a, Vt[Xl++] = l, nc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ic(e, t, a, l) {
    return Ci(e, t, a, l), wi(e);
  }
  function fl(e, t) {
    return Ci(e, null, null, t), wi(e);
  }
  function no(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - gt(a), e = u.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function wi(e) {
    if (50 < Wn)
      throw Wn = 0, ms = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ql = {};
  function Lm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, a, l) {
    return new Lm(e, t, a, l);
  }
  function uc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ha(e, t) {
    var a = e.alternate;
    return a === null ? (a = Mt(
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
  function Di(e, t, a, l, n, u) {
    var s = 0;
    if (l = e, typeof e == "function") uc(e) && (s = 1);
    else if (typeof e == "string")
      s = Qv(
        e,
        a,
        F.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ie:
          return e = Mt(31, a, t, n), e.elementType = ie, e.lanes = u, e;
        case P:
          return dl(a.children, n, u, t);
        case te:
          s = 8, n |= 24;
          break;
        case pe:
          return e = Mt(12, a, t, n | 2), e.elementType = pe, e.lanes = u, e;
        case ve:
          return e = Mt(13, a, t, n), e.elementType = ve, e.lanes = u, e;
        case de:
          return e = Mt(19, a, t, n), e.elementType = de, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ce:
                s = 10;
                break e;
              case Ce:
                s = 9;
                break e;
              case me:
                s = 11;
                break e;
              case $:
                s = 14;
                break e;
              case Y:
                s = 16, l = null;
                break e;
            }
          s = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Mt(s, a, t, n), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function dl(e, t, a, l) {
    return e = Mt(7, e, l, t), e.lanes = a, e;
  }
  function cc(e, t, a) {
    return e = Mt(6, e, null, t), e.lanes = a, e;
  }
  function uo(e) {
    var t = Mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function sc(e, t, a) {
    return t = Mt(
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
  function Gt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = co.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: yt(t)
      }, co.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: yt(t)
    };
  }
  var Zl = [], Kl = 0, Mi = null, wn = 0, Xt = [], Qt = 0, Ra = null, la = 1, na = "";
  function ma(e, t) {
    Zl[Kl++] = wn, Zl[Kl++] = Mi, Mi = e, wn = t;
  }
  function so(e, t, a) {
    Xt[Qt++] = la, Xt[Qt++] = na, Xt[Qt++] = Ra, Ra = e;
    var l = la;
    e = na;
    var n = 32 - gt(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - gt(t) + n;
    if (30 < u) {
      var s = n - n % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, la = 1 << 32 - gt(t) + n | a << n | l, na = u + e;
    } else
      la = 1 << u | a << n | l, na = e;
  }
  function rc(e) {
    e.return !== null && (ma(e, 1), so(e, 1, 0));
  }
  function oc(e) {
    for (; e === Mi; )
      Mi = Zl[--Kl], Zl[Kl] = null, wn = Zl[--Kl], Zl[Kl] = null;
    for (; e === Ra; )
      Ra = Xt[--Qt], Xt[Qt] = null, na = Xt[--Qt], Xt[Qt] = null, la = Xt[--Qt], Xt[Qt] = null;
  }
  function ro(e, t) {
    Xt[Qt++] = la, Xt[Qt++] = na, Xt[Qt++] = Ra, la = t.id, na = t.overflow, Ra = e;
  }
  var ot = null, Xe = null, De = !1, qa = null, Zt = !1, fc = Error(o(519));
  function Ha(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Dn(Gt(t, e)), fc;
  }
  function oo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[rt] = e, t[xt] = l, a) {
      case "dialog":
        Te("cancel", t), Te("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Te("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Pn.length; a++)
          Te(Pn[a], t);
        break;
      case "source":
        Te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Te("error", t), Te("load", t);
        break;
      case "details":
        Te("toggle", t);
        break;
      case "input":
        Te("invalid", t), Er(
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
        Te("invalid", t);
        break;
      case "textarea":
        Te("invalid", t), _r(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Cd(t.textContent, a) ? (l.popover != null && (Te("beforetoggle", t), Te("toggle", t)), l.onScroll != null && Te("scroll", t), l.onScrollEnd != null && Te("scrollend", t), l.onClick != null && (t.onclick = fa), t = !0) : t = !1, t || Ha(e, !0);
  }
  function fo(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          Zt = !1;
          return;
        case 27:
        case 3:
          Zt = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function Jl(e) {
    if (e !== ot) return !1;
    if (!De) return fo(e), De = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Cs(e.type, e.memoizedProps)), a = !a), a && Xe && Ha(e), fo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Xe = Bd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Xe = Bd(e);
    } else
      t === 27 ? (t = Xe, Wa(e.type) ? (e = Us, Us = null, Xe = e) : Xe = t) : Xe = ot ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function hl() {
    Xe = ot = null, De = !1;
  }
  function dc() {
    var e = qa;
    return e !== null && (_t === null ? _t = e : _t.push.apply(
      _t,
      e
    ), qa = null), e;
  }
  function Dn(e) {
    qa === null ? qa = [e] : qa.push(e);
  }
  var hc = h(null), ml = null, va = null;
  function Ba(e, t, a) {
    X(hc, t._currentValue), t._currentValue = a;
  }
  function ya(e) {
    e._currentValue = hc.current, M(hc);
  }
  function mc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function vc(e, t, a, l) {
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
              u.lanes |= a, r = u.alternate, r !== null && (r.lanes |= a), mc(
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
        s.lanes |= a, u = s.alternate, u !== null && (u.lanes |= a), mc(s, a, e), s = null;
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
  function $l(e, t, a, l) {
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
          Dt(n.pendingProps.value, s.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (n === Ne.current) {
        if (s = n.alternate, s === null) throw Error(o(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ni) : e = [ni]);
      }
      n = n.return;
    }
    e !== null && vc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Oi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Dt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function vl(e) {
    ml = e, va = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return ho(ml, e);
  }
  function Ui(e, t) {
    return ml === null && vl(e), ho(e, t);
  }
  function ho(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, va === null) {
      if (e === null) throw Error(o(308));
      va = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else va = va.next = t;
    return a;
  }
  var Ym = typeof AbortController < "u" ? AbortController : function() {
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
  }, Vm = c.unstable_scheduleCallback, Gm = c.unstable_NormalPriority, Ie = {
    $$typeof: ce,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new Ym(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mn(e) {
    e.refCount--, e.refCount === 0 && Vm(Gm, function() {
      e.controller.abort();
    });
  }
  var On = null, gc = 0, Fl = 0, Wl = null;
  function Xm(e, t) {
    if (On === null) {
      var a = On = [];
      gc = 0, Fl = xs(), Wl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return gc++, t.then(mo, mo), t;
  }
  function mo() {
    if (--gc === 0 && On !== null) {
      Wl !== null && (Wl.status = "fulfilled");
      var e = On;
      On = null, Fl = 0, Wl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Qm(e, t) {
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
    Pf = Me(), typeof t == "object" && t !== null && typeof t.then == "function" && Xm(e, t), vo !== null && vo(e, t);
  };
  var yl = h(null);
  function pc() {
    var e = yl.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Ri(e, t) {
    t === null ? X(yl, yl.current) : X(yl, t.pool);
  }
  function yo() {
    var e = pc();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Il = Error(o(460)), bc = Error(o(474)), qi = Error(o(542)), Hi = { then: function() {
  } };
  function go(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function po(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(fa, fa), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, xo(e), e;
      default:
        if (typeof t.status == "string") t.then(fa, fa);
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
        throw pl = t, Il;
    }
  }
  function gl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (pl = a, Il) : a;
    }
  }
  var pl = null;
  function bo() {
    if (pl === null) throw Error(o(459));
    var e = pl;
    return pl = null, e;
  }
  function xo(e) {
    if (e === Il || e === qi)
      throw Error(o(483));
  }
  var Pl = null, Un = 0;
  function Bi(e) {
    var t = Un;
    return Un += 1, Pl === null && (Pl = []), po(Pl, e, t);
  }
  function Rn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ki(e, t) {
    throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function jo(e) {
    function t(j, v) {
      if (e) {
        var _ = j.deletions;
        _ === null ? (j.deletions = [v], j.flags |= 16) : _.push(v);
      }
    }
    function a(j, v) {
      if (!e) return null;
      for (; v !== null; )
        t(j, v), v = v.sibling;
      return null;
    }
    function l(j) {
      for (var v = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? v.set(j.key, j) : v.set(j.index, j), j = j.sibling;
      return v;
    }
    function n(j, v) {
      return j = ha(j, v), j.index = 0, j.sibling = null, j;
    }
    function u(j, v, _) {
      return j.index = _, e ? (_ = j.alternate, _ !== null ? (_ = _.index, _ < v ? (j.flags |= 67108866, v) : _) : (j.flags |= 67108866, v)) : (j.flags |= 1048576, v);
    }
    function s(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function r(j, v, _, R) {
      return v === null || v.tag !== 6 ? (v = cc(_, j.mode, R), v.return = j, v) : (v = n(v, _), v.return = j, v);
    }
    function m(j, v, _, R) {
      var oe = _.type;
      return oe === P ? O(
        j,
        v,
        _.props.children,
        R,
        _.key
      ) : v !== null && (v.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Y && gl(oe) === v.type) ? (v = n(v, _.props), Rn(v, _), v.return = j, v) : (v = Di(
        _.type,
        _.key,
        _.props,
        null,
        j.mode,
        R
      ), Rn(v, _), v.return = j, v);
    }
    function T(j, v, _, R) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== _.containerInfo || v.stateNode.implementation !== _.implementation ? (v = sc(_, j.mode, R), v.return = j, v) : (v = n(v, _.children || []), v.return = j, v);
    }
    function O(j, v, _, R, oe) {
      return v === null || v.tag !== 7 ? (v = dl(
        _,
        j.mode,
        R,
        oe
      ), v.return = j, v) : (v = n(v, _), v.return = j, v);
    }
    function H(j, v, _) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = cc(
          "" + v,
          j.mode,
          _
        ), v.return = j, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case L:
            return _ = Di(
              v.type,
              v.key,
              v.props,
              null,
              j.mode,
              _
            ), Rn(_, v), _.return = j, _;
          case Z:
            return v = sc(
              v,
              j.mode,
              _
            ), v.return = j, v;
          case Y:
            return v = gl(v), H(j, v, _);
        }
        if (we(v) || I(v))
          return v = dl(
            v,
            j.mode,
            _,
            null
          ), v.return = j, v;
        if (typeof v.then == "function")
          return H(j, Bi(v), _);
        if (v.$$typeof === ce)
          return H(
            j,
            Ui(j, v),
            _
          );
        ki(j, v);
      }
      return null;
    }
    function z(j, v, _, R) {
      var oe = v !== null ? v.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return oe !== null ? null : r(j, v, "" + _, R);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case L:
            return _.key === oe ? m(j, v, _, R) : null;
          case Z:
            return _.key === oe ? T(j, v, _, R) : null;
          case Y:
            return _ = gl(_), z(j, v, _, R);
        }
        if (we(_) || I(_))
          return oe !== null ? null : O(j, v, _, R, null);
        if (typeof _.then == "function")
          return z(
            j,
            v,
            Bi(_),
            R
          );
        if (_.$$typeof === ce)
          return z(
            j,
            v,
            Ui(j, _),
            R
          );
        ki(j, _);
      }
      return null;
    }
    function C(j, v, _, R, oe) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return j = j.get(_) || null, r(v, j, "" + R, oe);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case L:
            return j = j.get(
              R.key === null ? _ : R.key
            ) || null, m(v, j, R, oe);
          case Z:
            return j = j.get(
              R.key === null ? _ : R.key
            ) || null, T(v, j, R, oe);
          case Y:
            return R = gl(R), C(
              j,
              v,
              _,
              R,
              oe
            );
        }
        if (we(R) || I(R))
          return j = j.get(_) || null, O(v, j, R, oe, null);
        if (typeof R.then == "function")
          return C(
            j,
            v,
            _,
            Bi(R),
            oe
          );
        if (R.$$typeof === ce)
          return C(
            j,
            v,
            _,
            Ui(v, R),
            oe
          );
        ki(v, R);
      }
      return null;
    }
    function ee(j, v, _, R) {
      for (var oe = null, Ue = null, ne = v, Se = v = 0, ze = null; ne !== null && Se < _.length; Se++) {
        ne.index > Se ? (ze = ne, ne = null) : ze = ne.sibling;
        var Re = z(
          j,
          ne,
          _[Se],
          R
        );
        if (Re === null) {
          ne === null && (ne = ze);
          break;
        }
        e && ne && Re.alternate === null && t(j, ne), v = u(Re, v, Se), Ue === null ? oe = Re : Ue.sibling = Re, Ue = Re, ne = ze;
      }
      if (Se === _.length)
        return a(j, ne), De && ma(j, Se), oe;
      if (ne === null) {
        for (; Se < _.length; Se++)
          ne = H(j, _[Se], R), ne !== null && (v = u(
            ne,
            v,
            Se
          ), Ue === null ? oe = ne : Ue.sibling = ne, Ue = ne);
        return De && ma(j, Se), oe;
      }
      for (ne = l(ne); Se < _.length; Se++)
        ze = C(
          ne,
          j,
          Se,
          _[Se],
          R
        ), ze !== null && (e && ze.alternate !== null && ne.delete(
          ze.key === null ? Se : ze.key
        ), v = u(
          ze,
          v,
          Se
        ), Ue === null ? oe = ze : Ue.sibling = ze, Ue = ze);
      return e && ne.forEach(function(al) {
        return t(j, al);
      }), De && ma(j, Se), oe;
    }
    function fe(j, v, _, R) {
      if (_ == null) throw Error(o(151));
      for (var oe = null, Ue = null, ne = v, Se = v = 0, ze = null, Re = _.next(); ne !== null && !Re.done; Se++, Re = _.next()) {
        ne.index > Se ? (ze = ne, ne = null) : ze = ne.sibling;
        var al = z(j, ne, Re.value, R);
        if (al === null) {
          ne === null && (ne = ze);
          break;
        }
        e && ne && al.alternate === null && t(j, ne), v = u(al, v, Se), Ue === null ? oe = al : Ue.sibling = al, Ue = al, ne = ze;
      }
      if (Re.done)
        return a(j, ne), De && ma(j, Se), oe;
      if (ne === null) {
        for (; !Re.done; Se++, Re = _.next())
          Re = H(j, Re.value, R), Re !== null && (v = u(Re, v, Se), Ue === null ? oe = Re : Ue.sibling = Re, Ue = Re);
        return De && ma(j, Se), oe;
      }
      for (ne = l(ne); !Re.done; Se++, Re = _.next())
        Re = C(ne, j, Se, Re.value, R), Re !== null && (e && Re.alternate !== null && ne.delete(Re.key === null ? Se : Re.key), v = u(Re, v, Se), Ue === null ? oe = Re : Ue.sibling = Re, Ue = Re);
      return e && ne.forEach(function(ay) {
        return t(j, ay);
      }), De && ma(j, Se), oe;
    }
    function Ve(j, v, _, R) {
      if (typeof _ == "object" && _ !== null && _.type === P && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case L:
            e: {
              for (var oe = _.key; v !== null; ) {
                if (v.key === oe) {
                  if (oe = _.type, oe === P) {
                    if (v.tag === 7) {
                      a(
                        j,
                        v.sibling
                      ), R = n(
                        v,
                        _.props.children
                      ), R.return = j, j = R;
                      break e;
                    }
                  } else if (v.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Y && gl(oe) === v.type) {
                    a(
                      j,
                      v.sibling
                    ), R = n(v, _.props), Rn(R, _), R.return = j, j = R;
                    break e;
                  }
                  a(j, v);
                  break;
                } else t(j, v);
                v = v.sibling;
              }
              _.type === P ? (R = dl(
                _.props.children,
                j.mode,
                R,
                _.key
              ), R.return = j, j = R) : (R = Di(
                _.type,
                _.key,
                _.props,
                null,
                j.mode,
                R
              ), Rn(R, _), R.return = j, j = R);
            }
            return s(j);
          case Z:
            e: {
              for (oe = _.key; v !== null; ) {
                if (v.key === oe)
                  if (v.tag === 4 && v.stateNode.containerInfo === _.containerInfo && v.stateNode.implementation === _.implementation) {
                    a(
                      j,
                      v.sibling
                    ), R = n(v, _.children || []), R.return = j, j = R;
                    break e;
                  } else {
                    a(j, v);
                    break;
                  }
                else t(j, v);
                v = v.sibling;
              }
              R = sc(_, j.mode, R), R.return = j, j = R;
            }
            return s(j);
          case Y:
            return _ = gl(_), Ve(
              j,
              v,
              _,
              R
            );
        }
        if (we(_))
          return ee(
            j,
            v,
            _,
            R
          );
        if (I(_)) {
          if (oe = I(_), typeof oe != "function") throw Error(o(150));
          return _ = oe.call(_), fe(
            j,
            v,
            _,
            R
          );
        }
        if (typeof _.then == "function")
          return Ve(
            j,
            v,
            Bi(_),
            R
          );
        if (_.$$typeof === ce)
          return Ve(
            j,
            v,
            Ui(j, _),
            R
          );
        ki(j, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, v !== null && v.tag === 6 ? (a(j, v.sibling), R = n(v, _), R.return = j, j = R) : (a(j, v), R = cc(_, j.mode, R), R.return = j, j = R), s(j)) : a(j, v);
    }
    return function(j, v, _, R) {
      try {
        Un = 0;
        var oe = Ve(
          j,
          v,
          _,
          R
        );
        return Pl = null, oe;
      } catch (ne) {
        if (ne === Il || ne === qi) throw ne;
        var Ue = Mt(29, ne, null, j.mode);
        return Ue.lanes = R, Ue.return = j, Ue;
      }
    };
  }
  var bl = jo(!0), So = jo(!1), ka = !1;
  function xc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function jc(e, t) {
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
    if (l = l.shared, (He & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = wi(e), no(e, null, a), t;
    }
    return Ci(e, l, t, a), wi(e);
  }
  function qn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, aa(e, a);
    }
  }
  function Sc(e, t) {
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
  var Ec = !1;
  function Hn() {
    if (Ec) {
      var e = Wl;
      if (e !== null) throw e;
    }
  }
  function Bn(e, t, a, l) {
    Ec = !1;
    var n = e.updateQueue;
    ka = !1;
    var u = n.firstBaseUpdate, s = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var m = r, T = m.next;
      m.next = null, s === null ? u = T : s.next = T, s = m;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, r = O.lastBaseUpdate, r !== s && (r === null ? O.firstBaseUpdate = T : r.next = T, O.lastBaseUpdate = m));
    }
    if (u !== null) {
      var H = n.baseState;
      s = 0, O = T = m = null, r = u;
      do {
        var z = r.lane & -536870913, C = z !== r.lane;
        if (C ? (Ae & z) === z : (l & z) === z) {
          z !== 0 && z === Fl && (Ec = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var ee = e, fe = r;
            z = t;
            var Ve = a;
            switch (fe.tag) {
              case 1:
                if (ee = fe.payload, typeof ee == "function") {
                  H = ee.call(Ve, H, z);
                  break e;
                }
                H = ee;
                break e;
              case 3:
                ee.flags = ee.flags & -65537 | 128;
              case 0:
                if (ee = fe.payload, z = typeof ee == "function" ? ee.call(Ve, H, z) : ee, z == null) break e;
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
          }, O === null ? (T = O = C, m = H) : O = O.next = C, s |= z;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          C = r, r = C.next, C.next = null, n.lastBaseUpdate = C, n.shared.pending = null;
        }
      } while (!0);
      O === null && (m = H), n.baseState = m, n.firstBaseUpdate = T, n.lastBaseUpdate = O, u === null && (n.shared.lanes = 0), Za |= s, e.lanes = s, e.memoizedState = H;
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
  var en = h(null), Li = h(0);
  function _o(e, t) {
    e = _a, X(Li, e), X(en, t), _a = e | t.baseLanes;
  }
  function Nc() {
    X(Li, _a), X(en, en.current);
  }
  function _c() {
    _a = Li.current, M(en), M(Li);
  }
  var Ot = h(null), Kt = null;
  function Va(e) {
    var t = e.alternate;
    X($e, $e.current & 1), X(Ot, e), Kt === null && (t === null || en.current !== null || t.memoizedState !== null) && (Kt = e);
  }
  function Tc(e) {
    X($e, $e.current), X(Ot, e), Kt === null && (Kt = e);
  }
  function To(e) {
    e.tag === 22 ? (X($e, $e.current), X(Ot, e), Kt === null && (Kt = e)) : Ga();
  }
  function Ga() {
    X($e, $e.current), X(Ot, Ot.current);
  }
  function Ut(e) {
    M(Ot), Kt === e && (Kt = null), M($e);
  }
  var $e = h(0);
  function Yi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Ms(a) || Os(a)))
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
  var ga = 0, je = null, Le = null, Pe = null, Vi = !1, tn = !1, xl = !1, Gi = 0, kn = 0, an = null, Zm = 0;
  function Ke() {
    throw Error(o(321));
  }
  function Ac(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Dt(e[a], t[a])) return !1;
    return !0;
  }
  function zc(e, t, a, l, n, u) {
    return ga = u, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = e === null || e.memoizedState === null ? of : Gc, xl = !1, u = a(l, n), xl = !1, tn && (u = zo(
      t,
      a,
      l,
      n
    )), Ao(e), u;
  }
  function Ao(e) {
    g.H = Vn;
    var t = Le !== null && Le.next !== null;
    if (ga = 0, Pe = Le = je = null, Vi = !1, kn = 0, an = null, t) throw Error(o(300));
    e === null || et || (e = e.dependencies, e !== null && Oi(e) && (et = !0));
  }
  function zo(e, t, a, l) {
    je = e;
    var n = 0;
    do {
      if (tn && (an = null), kn = 0, tn = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Pe = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      g.H = ff, u = t(a, l);
    } while (tn);
    return u;
  }
  function Km() {
    var e = g.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ln(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (je.flags |= 1024), t;
  }
  function Cc() {
    var e = Gi !== 0;
    return Gi = 0, e;
  }
  function wc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Dc(e) {
    if (Vi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Vi = !1;
    }
    ga = 0, Pe = Le = je = null, tn = !1, kn = Gi = 0, an = null;
  }
  function pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? je.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function Fe() {
    if (Le === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Pe === null ? je.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, Le = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(o(467)) : Error(o(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, Pe === null ? je.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function Xi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ln(e) {
    var t = kn;
    return kn += 1, an === null && (an = []), e = po(an, e, t), t = je, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? of : Gc), e;
  }
  function Qi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ln(e);
      if (e.$$typeof === ce) return ft(e);
    }
    throw Error(o(438, String(e)));
  }
  function Mc(e) {
    var t = null, a = je.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = je.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Xi(), je.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = k;
    return t.index++, a;
  }
  function pa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zi(e) {
    var t = Fe();
    return Oc(t, Le, e);
  }
  function Oc(e, t, a) {
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
      var r = s = null, m = null, T = t, O = !1;
      do {
        var H = T.lane & -536870913;
        if (H !== T.lane ? (Ae & H) === H : (ga & H) === H) {
          var z = T.revertLane;
          if (z === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), H === Fl && (O = !0);
          else if ((ga & z) === z) {
            T = T.next, z === Fl && (O = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, m === null ? (r = m = H, s = u) : m = m.next = H, je.lanes |= z, Za |= z;
          H = T.action, xl && a(u, H), u = T.hasEagerState ? T.eagerState : a(u, H);
        } else
          z = {
            lane: H,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, m === null ? (r = m = z, s = u) : m = m.next = z, je.lanes |= H, Za |= H;
        T = T.next;
      } while (T !== null && T !== t);
      if (m === null ? s = u : m.next = r, !Dt(u, e.memoizedState) && (et = !0, O && (a = Wl, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Uc(e) {
    var t = Fe(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, u = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var s = n = n.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== n);
      Dt(u, t.memoizedState) || (et = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Co(e, t, a) {
    var l = je, n = Fe(), u = De;
    if (u) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var s = !Dt(
      (Le || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, et = !0), n = n.queue, Hc(Mo.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || s || Pe !== null && Pe.memoizedState.tag & 1) {
      if (l.flags |= 2048, ln(
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
      u || (ga & 127) !== 0 || wo(l, t, a);
    }
    return a;
  }
  function wo(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = je.updateQueue, t === null ? (t = Xi(), je.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
      return !Dt(e, a);
    } catch {
      return !0;
    }
  }
  function Uo(e) {
    var t = fl(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function Rc(e) {
    var t = pt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), xl) {
        kt(!0);
        try {
          a();
        } finally {
          kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pa,
      lastRenderedState: e
    }, t;
  }
  function Ro(e, t, a, l) {
    return e.baseState = a, Oc(
      e,
      Le,
      typeof l == "function" ? l : pa
    );
  }
  function Jm(e, t, a, l, n) {
    if ($i(e)) throw Error(o(485));
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
      } catch (T) {
        qc(e, t, T);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), g.T = u;
      }
    } else
      try {
        u = a(n, l), Ho(e, t, u);
      } catch (T) {
        qc(e, t, T);
      }
  }
  function Ho(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Bo(e, t, l);
      },
      function(l) {
        return qc(e, t, l);
      }
    ) : Bo(e, t, a);
  }
  function Bo(e, t, a) {
    t.status = "fulfilled", t.value = a, ko(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, qo(e, a)));
  }
  function qc(e, t, a) {
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
    if (De) {
      var a = Ge.formState;
      if (a !== null) {
        e: {
          var l = je;
          if (De) {
            if (Xe) {
              t: {
                for (var n = Xe, u = Zt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = Jt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Xe = Jt(
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
    return a = pt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lo,
      lastRenderedState: t
    }, a.queue = l, a = cf.bind(
      null,
      je,
      l
    ), l.dispatch = a, l = Rc(!1), u = Vc.bind(
      null,
      je,
      !1,
      l.queue
    ), l = pt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = Jm.bind(
      null,
      je,
      n,
      u,
      a
    ), n.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Vo(e) {
    var t = Fe();
    return Go(t, Le, e);
  }
  function Go(e, t, a) {
    if (t = Oc(
      e,
      t,
      Lo
    )[0], e = Zi(pa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ln(t);
      } catch (s) {
        throw s === Il ? qi : s;
      }
    else l = t;
    t = Fe();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (je.flags |= 2048, ln(
      9,
      { destroy: void 0 },
      $m.bind(null, n, a),
      null
    )), [l, u, e];
  }
  function $m(e, t) {
    e.action = t;
  }
  function Xo(e) {
    var t = Fe(), a = Le;
    if (a !== null)
      return Go(t, a, e);
    Fe(), t = t.memoizedState, a = Fe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ln(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = je.updateQueue, t === null && (t = Xi(), je.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Qo() {
    return Fe().memoizedState;
  }
  function Ki(e, t, a, l) {
    var n = pt();
    je.flags |= e, n.memoizedState = ln(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Ji(e, t, a, l) {
    var n = Fe();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    Le !== null && l !== null && Ac(l, Le.memoizedState.deps) ? n.memoizedState = ln(t, u, a, l) : (je.flags |= e, n.memoizedState = ln(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Zo(e, t) {
    Ki(8390656, 8, e, t);
  }
  function Hc(e, t) {
    Ji(2048, 8, e, t);
  }
  function Fm(e) {
    je.flags |= 4;
    var t = je.updateQueue;
    if (t === null)
      t = Xi(), je.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Ko(e) {
    var t = Fe().memoizedState;
    return Fm({ ref: t, nextImpl: e }), function() {
      if ((He & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Jo(e, t) {
    return Ji(4, 2, e, t);
  }
  function $o(e, t) {
    return Ji(4, 4, e, t);
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
    a = a != null ? a.concat([e]) : null, Ji(4, 4, Fo.bind(null, t, e), a);
  }
  function Bc() {
  }
  function Io(e, t) {
    var a = Fe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Ac(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Po(e, t) {
    var a = Fe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Ac(t, l[1]))
      return l[0];
    if (l = e(), xl) {
      kt(!0);
      try {
        e();
      } finally {
        kt(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function kc(e, t, a) {
    return a === void 0 || (ga & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = td(), je.lanes |= e, Za |= e, a);
  }
  function ef(e, t, a, l) {
    return Dt(a, t) ? a : en.current !== null ? (e = kc(e, a, l), Dt(e, t) || (et = !0), e) : (ga & 42) === 0 || (ga & 1073741824) !== 0 && (Ae & 261930) === 0 ? (et = !0, e.memoizedState = a) : (e = td(), je.lanes |= e, Za |= e, t);
  }
  function tf(e, t, a, l, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var s = g.T, r = {};
    g.T = r, Vc(e, !1, t, a);
    try {
      var m = n(), T = g.S;
      if (T !== null && T(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Qm(
          m,
          l
        );
        Yn(
          e,
          t,
          O,
          Ht(e)
        );
      } else
        Yn(
          e,
          t,
          l,
          Ht(e)
        );
    } catch (H) {
      Yn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Ht()
      );
    } finally {
      B.p = u, s !== null && r.types !== null && (s.types = r.types), g.T = s;
    }
  }
  function Wm() {
  }
  function Lc(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var n = af(e).queue;
    tf(
      e,
      n,
      t,
      K,
      a === null ? Wm : function() {
        return lf(e), a(l);
      }
    );
  }
  function af(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pa,
        lastRenderedState: K
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
        lastRenderedReducer: pa,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function lf(e) {
    var t = af(e);
    t.next === null && (t = e.alternate.memoizedState), Yn(
      e,
      t.next.queue,
      {},
      Ht()
    );
  }
  function Yc() {
    return ft(ni);
  }
  function nf() {
    return Fe().memoizedState;
  }
  function uf() {
    return Fe().memoizedState;
  }
  function Im(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ht();
          e = La(a);
          var l = Ya(t, e, a);
          l !== null && (Tt(l, t, a), qn(l, t, a)), t = { cache: yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Pm(e, t, a) {
    var l = Ht();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $i(e) ? sf(t, a) : (a = ic(e, t, a, l), a !== null && (Tt(a, e, l), rf(a, t, l)));
  }
  function cf(e, t, a) {
    var l = Ht();
    Yn(e, t, a, l);
  }
  function Yn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($i(e)) sf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, r = u(s, a);
          if (n.hasEagerState = !0, n.eagerState = r, Dt(r, s))
            return Ci(e, t, n, 0), Ge === null && zi(), !1;
        } catch {
        }
      if (a = ic(e, t, n, l), a !== null)
        return Tt(a, e, l), rf(a, t, l), !0;
    }
    return !1;
  }
  function Vc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: xs(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $i(e)) {
      if (t) throw Error(o(479));
    } else
      t = ic(
        e,
        a,
        l,
        2
      ), t !== null && Tt(t, e, 2);
  }
  function $i(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je;
  }
  function sf(e, t) {
    tn = Vi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function rf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, aa(e, a);
    }
  }
  var Vn = {
    readContext: ft,
    use: Qi,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useLayoutEffect: Ke,
    useInsertionEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    useHostTransitionStatus: Ke,
    useFormState: Ke,
    useActionState: Ke,
    useOptimistic: Ke,
    useMemoCache: Ke,
    useCacheRefresh: Ke
  };
  Vn.useEffectEvent = Ke;
  var of = {
    readContext: ft,
    use: Qi,
    useCallback: function(e, t) {
      return pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: Zo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Ki(
        4194308,
        4,
        Fo.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Ki(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ki(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = pt();
      t = t === void 0 ? null : t;
      var l = e();
      if (xl) {
        kt(!0);
        try {
          e();
        } finally {
          kt(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = pt();
      if (a !== void 0) {
        var n = a(t);
        if (xl) {
          kt(!0);
          try {
            a(t);
          } finally {
            kt(!1);
          }
        }
      } else n = t;
      return l.memoizedState = l.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, l.queue = e, e = e.dispatch = Pm.bind(
        null,
        je,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = pt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var t = e.queue, a = cf.bind(null, je, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, t) {
      var a = pt();
      return kc(a, e, t);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = tf.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = je, n = pt();
      if (De) {
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
      ]), l.flags |= 2048, ln(
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
      var e = pt(), t = Ge.identifierPrefix;
      if (De) {
        var a = na, l = la;
        a = (l & ~(1 << 32 - gt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Gi++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Zm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Yc,
    useFormState: Yo,
    useActionState: Yo,
    useOptimistic: function(e) {
      var t = pt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Vc.bind(
        null,
        je,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return pt().memoizedState = Im.bind(
        null,
        je
      );
    },
    useEffectEvent: function(e) {
      var t = pt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((He & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Gc = {
    readContext: ft,
    use: Qi,
    useCallback: Io,
    useContext: ft,
    useEffect: Hc,
    useImperativeHandle: Wo,
    useInsertionEffect: Jo,
    useLayoutEffect: $o,
    useMemo: Po,
    useReducer: Zi,
    useRef: Qo,
    useState: function() {
      return Zi(pa);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, t) {
      var a = Fe();
      return ef(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Zi(pa)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ln(e),
        t
      ];
    },
    useSyncExternalStore: Co,
    useId: nf,
    useHostTransitionStatus: Yc,
    useFormState: Vo,
    useActionState: Vo,
    useOptimistic: function(e, t) {
      var a = Fe();
      return Ro(a, Le, e, t);
    },
    useMemoCache: Mc,
    useCacheRefresh: uf
  };
  Gc.useEffectEvent = Ko;
  var ff = {
    readContext: ft,
    use: Qi,
    useCallback: Io,
    useContext: ft,
    useEffect: Hc,
    useImperativeHandle: Wo,
    useInsertionEffect: Jo,
    useLayoutEffect: $o,
    useMemo: Po,
    useReducer: Uc,
    useRef: Qo,
    useState: function() {
      return Uc(pa);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, t) {
      var a = Fe();
      return Le === null ? kc(a, e, t) : ef(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Uc(pa)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ln(e),
        t
      ];
    },
    useSyncExternalStore: Co,
    useId: nf,
    useHostTransitionStatus: Yc,
    useFormState: Xo,
    useActionState: Xo,
    useOptimistic: function(e, t) {
      var a = Fe();
      return Le !== null ? Ro(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Mc,
    useCacheRefresh: uf
  };
  ff.useEffectEvent = Ko;
  function Xc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : A({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Qc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), n = La(l);
      n.payload = t, a != null && (n.callback = a), t = Ya(e, n, l), t !== null && (Tt(t, e, l), qn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), n = La(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Ya(e, n, l), t !== null && (Tt(t, e, l), qn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ht(), l = La(a);
      l.tag = 2, t != null && (l.callback = t), t = Ya(e, l, a), t !== null && (Tt(t, e, a), qn(t, e, a));
    }
  };
  function df(e, t, a, l, n, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, s) : t.prototype && t.prototype.isPureReactComponent ? !zn(a, l) || !zn(n, u) : !0;
  }
  function hf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Qc.enqueueReplaceState(t, t.state, null);
  }
  function jl(e, t) {
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
    Ai(e);
  }
  function vf(e) {
    console.error(e);
  }
  function yf(e) {
    Ai(e);
  }
  function Fi(e, t) {
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
  function Zc(e, t, a) {
    return a = La(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Fi(e, t);
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
  function ev(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && $l(
        t,
        a,
        n,
        !0
      ), a = Ot.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Kt === null ? su() : a.alternate === null && Je === 0 && (Je = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Hi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), gs(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Hi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), gs(e, l, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return gs(e, l, n), su(), !1;
    }
    if (De)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== fc && (e = Error(o(422), { cause: l }), Dn(Gt(e, a)))) : (l !== fc && (t = Error(o(423), {
        cause: l
      }), Dn(
        Gt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = Gt(l, a), n = Zc(
        e.stateNode,
        l,
        n
      ), Sc(e, n), Je !== 4 && (Je = 2)), !1;
    var u = Error(o(520), { cause: l });
    if (u = Gt(u, a), Fn === null ? Fn = [u] : Fn.push(u), Je !== 4 && (Je = 2), t === null) return !0;
    l = Gt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = Zc(a.stateNode, l, e), Sc(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ka === null || !Ka.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = pf(n), bf(
              n,
              e,
              a,
              l
            ), Sc(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Kc = Error(o(461)), et = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? So(t, null, a, l) : bl(
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
    return vl(t), l = zc(
      e,
      t,
      a,
      s,
      u,
      n
    ), r = Cc(), e !== null && !et ? (wc(e, t, n), ba(e, t, n)) : (De && r && rc(t), t.flags |= 1, dt(e, t, l, n), t.child);
  }
  function jf(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !uc(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Sf(
        e,
        t,
        u,
        l,
        n
      )) : (e = Di(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ts(e, n)) {
      var s = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : zn, a(s, l) && e.ref === t.ref)
        return ba(e, t, n);
    }
    return t.flags |= 1, e = ha(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sf(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zn(u, l) && e.ref === t.ref)
        if (et = !1, t.pendingProps = l = u, ts(e, n))
          (e.flags & 131072) !== 0 && (et = !0);
        else
          return t.lanes = e.lanes, ba(e, t, n);
    }
    return Jc(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ri(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? _o(t, u) : Nc(), To(t);
      else
        return l = t.lanes = 536870912, Nf(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Ri(t, u.cachePool), _o(t, u), Ga(), t.memoizedState = null) : (e !== null && Ri(t, null), Nc(), Ga());
    return dt(e, t, n, a), t.child;
  }
  function Gn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Nf(e, t, a, l, n) {
    var u = pc();
    return u = u === null ? null : { parent: Ie._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Ri(t, null), Nc(), To(t), e !== null && $l(e, t, l, !0), t.childLanes = n, null;
  }
  function Wi(e, t) {
    return t = Pi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _f(e, t, a) {
    return bl(t, e.child, null, a), e = Wi(t, t.pendingProps), e.flags |= 2, Ut(t), t.memoizedState = null, e;
  }
  function tv(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (De) {
        if (l.mode === "hidden")
          return e = Wi(t, l), t.lanes = 536870912, Gn(null, e);
        if (Tc(t), (e = Xe) ? (e = Hd(
          e,
          Zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ra !== null ? { id: la, overflow: na } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = uo(e), a.return = t, t.child = a, ot = t, Xe = null)) : e = null, e === null) throw Ha(t);
        return t.lanes = 536870912, null;
      }
      return Wi(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (Tc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = _f(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (et || $l(e, t, a, !1), n = (a & e.childLanes) !== 0, et || n) {
        if (l = Ge, l !== null && (s = hr(l, a), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, fl(e, s), Tt(l, e, s), Kc;
        su(), t = _f(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Xe = Jt(s.nextSibling), ot = t, De = !0, qa = null, Zt = !1, e !== null && ro(t, e), t = Wi(t, l), t.flags |= 4096;
      return t;
    }
    return e = ha(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ii(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Jc(e, t, a, l, n) {
    return vl(t), a = zc(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = Cc(), e !== null && !et ? (wc(e, t, n), ba(e, t, n)) : (De && l && rc(t), t.flags |= 1, dt(e, t, a, n), t.child);
  }
  function Tf(e, t, a, l, n, u) {
    return vl(t), t.updateQueue = null, a = zo(
      t,
      l,
      a,
      n
    ), Ao(e), l = Cc(), e !== null && !et ? (wc(e, t, u), ba(e, t, u)) : (De && l && rc(t), t.flags |= 1, dt(e, t, a, u), t.child);
  }
  function Af(e, t, a, l, n) {
    if (vl(t), t.stateNode === null) {
      var u = Ql, s = a.contextType;
      typeof s == "object" && s !== null && (u = ft(s)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Qc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, xc(t), s = a.contextType, u.context = typeof s == "object" && s !== null ? ft(s) : Ql, u.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Xc(
        t,
        a,
        s,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Qc.enqueueReplaceState(u, u.state, null), Bn(t, l, u, n), Hn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, m = jl(a, r);
      u.props = m;
      var T = u.context, O = a.contextType;
      s = Ql, typeof O == "object" && O !== null && (s = ft(O));
      var H = a.getDerivedStateFromProps;
      O = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || T !== s) && hf(
        t,
        u,
        l,
        s
      ), ka = !1;
      var z = t.memoizedState;
      u.state = z, Bn(t, l, u, n), Hn(), T = t.memoizedState, r || z !== T || ka ? (typeof H == "function" && (Xc(
        t,
        a,
        H,
        l
      ), T = t.memoizedState), (m = ka || df(
        t,
        a,
        m,
        l,
        z,
        T,
        s
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = s, l = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, jc(e, t), s = t.memoizedProps, O = jl(a, s), u.props = O, H = t.pendingProps, z = u.context, T = a.contextType, m = Ql, typeof T == "object" && T !== null && (m = ft(T)), r = a.getDerivedStateFromProps, (T = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || z !== m) && hf(
        t,
        u,
        l,
        m
      ), ka = !1, z = t.memoizedState, u.state = z, Bn(t, l, u, n), Hn();
      var C = t.memoizedState;
      s !== H || z !== C || ka || e !== null && e.dependencies !== null && Oi(e.dependencies) ? (typeof r == "function" && (Xc(
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
      ) || e !== null && e.dependencies !== null && Oi(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, C, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        C,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = C), u.props = l, u.state = C, u.context = m, l = O) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, Ii(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = bl(
      t,
      e.child,
      null,
      n
    ), t.child = bl(
      t,
      null,
      a,
      n
    )) : dt(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = ba(
      e,
      t,
      n
    ), e;
  }
  function zf(e, t, a, l) {
    return hl(), t.flags |= 256, dt(e, t, a, l), t.child;
  }
  var $c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Fc(e) {
    return { baseLanes: e, cachePool: yo() };
  }
  function Wc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qt), e;
  }
  function Cf(e, t, a) {
    var l = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (De) {
        if (n ? Va(t) : Ga(), (e = Xe) ? (e = Hd(
          e,
          Zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ra !== null ? { id: la, overflow: na } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = uo(e), a.return = t, t.child = a, ot = t, Xe = null)) : e = null, e === null) throw Ha(t);
        return Os(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, n ? (Ga(), n = t.mode, r = Pi(
        { mode: "hidden", children: r },
        n
      ), l = dl(
        l,
        n,
        a,
        null
      ), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = Fc(a), l.childLanes = Wc(
        e,
        s,
        a
      ), t.memoizedState = $c, Gn(null, l)) : (Va(t), Ic(t, r));
    }
    var m = e.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Va(t), t.flags &= -257, t = Pc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Ga(), t.child = e.child, t.flags |= 128, t = null) : (Ga(), r = l.fallback, n = t.mode, l = Pi(
          { mode: "visible", children: l.children },
          n
        ), r = dl(
          r,
          n,
          a,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, bl(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Fc(a), l.childLanes = Wc(
          e,
          s,
          a
        ), t.memoizedState = $c, t = Gn(null, l));
      else if (Va(t), Os(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var T = s.dgst;
        s = T, l = Error(o(419)), l.stack = "", l.digest = s, Dn({ value: l, source: null, stack: null }), t = Pc(
          e,
          t,
          a
        );
      } else if (et || $l(e, t, a, !1), s = (a & e.childLanes) !== 0, et || s) {
        if (s = Ge, s !== null && (l = hr(s, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, fl(e, l), Tt(s, e, l), Kc;
        Ms(r) || su(), t = Pc(
          e,
          t,
          a
        );
      } else
        Ms(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Xe = Jt(
          r.nextSibling
        ), ot = t, De = !0, qa = null, Zt = !1, e !== null && ro(t, e), t = Ic(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Ga(), r = l.fallback, n = t.mode, m = e.child, T = m.sibling, l = ha(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, T !== null ? r = ha(
      T,
      r
    ) : (r = dl(
      r,
      n,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, Gn(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = Fc(a) : (n = r.cachePool, n !== null ? (m = Ie._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = yo(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: n
    }), l.memoizedState = r, l.childLanes = Wc(
      e,
      s,
      a
    ), t.memoizedState = $c, Gn(e.child, l)) : (Va(t), a = e.child, e = a.sibling, a = ha(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Ic(e, t) {
    return t = Pi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Pi(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e;
  }
  function Pc(e, t, a) {
    return bl(t, e.child, null, a), e = Ic(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wf(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), mc(e.return, t, a);
  }
  function es(e, t, a, l, n, u) {
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
    var s = $e.current, r = (s & 2) !== 0;
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, X($e, s), dt(e, t, l, a), l = De ? wn : 0, !r && e !== null && (e.flags & 128) !== 0)
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
          e = a.alternate, e !== null && Yi(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), es(
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
          if (e = n.alternate, e !== null && Yi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        es(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        es(
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
  function ba(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Za |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if ($l(
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
      for (e = t.child, a = ha(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ha(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ts(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Oi(e)));
  }
  function av(e, t, a) {
    switch (t.tag) {
      case 3:
        We(t, t.stateNode.containerInfo), Ba(t, Ie, e.memoizedState.cache), hl();
        break;
      case 27:
      case 5:
        qe(t);
        break;
      case 4:
        We(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Tc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Va(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cf(e, t, a) : (Va(t), e = ba(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Va(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || ($l(
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
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X($e, $e.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Ef(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Ba(t, Ie, e.memoizedState.cache);
    }
    return ba(e, t, a);
  }
  function Mf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        et = !0;
      else {
        if (!ts(e, a) && (t.flags & 128) === 0)
          return et = !1, av(
            e,
            t,
            a
          );
        et = (e.flags & 131072) !== 0;
      }
    else
      et = !1, De && (t.flags & 1048576) !== 0 && so(t, wn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = gl(t.elementType), t.type = e, typeof e == "function")
            uc(e) ? (l = jl(e, l), t.tag = 1, t = Af(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Jc(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === me) {
                t.tag = 11, t = xf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (n === $) {
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
            throw t = Ee(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Jc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = jl(
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
          if (We(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, jc(e, t), Bn(t, l, null, a);
          var s = t.memoizedState;
          if (l = s.cache, Ba(t, Ie, l), l !== u.cache && vc(
            t,
            [Ie],
            a,
            !0
          ), Hn(), l = s.element, u.isDehydrated)
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
              n = Gt(
                Error(o(424)),
                t
              ), Dn(n), t = zf(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Xe = Jt(e.firstChild), ot = t, De = !0, qa = null, Zt = !0, a = So(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (hl(), l === n) {
              t = ba(
                e,
                t,
                a
              );
              break e;
            }
            dt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ii(e, t), e === null ? (a = Gd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : De || (a = t.type, e = t.pendingProps, l = vu(
          xe.current
        ).createElement(a), l[rt] = t, l[xt] = e, ht(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = Gd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return qe(t), e === null && De && (l = t.stateNode = Ld(
          t.type,
          t.pendingProps,
          xe.current
        ), ot = t, Zt = !0, n = Xe, Wa(t.type) ? (Us = n, Xe = Jt(l.firstChild)) : Xe = n), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Ii(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && De && ((n = l = Xe) && (l = Mv(
          l,
          t.type,
          t.pendingProps,
          Zt
        ), l !== null ? (t.stateNode = l, ot = t, Xe = Jt(l.firstChild), Zt = !1, n = !0) : n = !1), n || Ha(t)), qe(t), n = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = u.children, Cs(n, u) ? l = null : s !== null && Cs(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = zc(
          e,
          t,
          Km,
          null,
          null,
          a
        ), ni._currentValue = n), Ii(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && De && ((e = a = Xe) && (a = Ov(
          a,
          t.pendingProps,
          Zt
        ), a !== null ? (t.stateNode = a, ot = t, Xe = null, e = !0) : e = !1), e || Ha(t)), null;
      case 13:
        return Cf(e, t, a);
      case 4:
        return We(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = bl(
          t,
          null,
          l,
          a
        ) : dt(e, t, l, a), t.child;
      case 11:
        return xf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return dt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Ba(t, t.type, l.value), dt(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, vl(t), n = ft(n), l = l(n), t.flags |= 1, dt(e, t, l, a), t.child;
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
        return tv(e, t, a);
      case 22:
        return Ef(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return vl(t), l = ft(Ie), e === null ? (n = pc(), n === null && (n = Ge, u = yc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = { parent: l, cache: n }, xc(t), Ba(t, Ie, n)) : ((e.lanes & a) !== 0 && (jc(e, t), Bn(t, null, null, a), Hn()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Ba(t, Ie, l)) : (l = u.cache, Ba(t, Ie, l), l !== n.cache && vc(
          t,
          [Ie],
          a,
          !0
        ))), dt(
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
  function xa(e) {
    e.flags |= 4;
  }
  function as(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (id()) e.flags |= 8192;
        else
          throw pl = Hi, bc;
    } else e.flags &= -16777217;
  }
  function Of(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jd(t))
      if (id()) e.flags |= 8192;
      else
        throw pl = Hi, bc;
  }
  function eu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ge() : 536870912, e.lanes |= t, sn |= t);
  }
  function Xn(e, t) {
    if (!De)
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
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function lv(e, t, a) {
    var l = t.pendingProps;
    switch (oc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return Qe(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ya(Ie), V(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Jl(t) ? xa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, dc())), Qe(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (xa(t), u !== null ? (Qe(t), Of(t, u)) : (Qe(t), as(
          t,
          n,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (xa(t), Qe(t), Of(t, u)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && xa(t), Qe(t), as(
          t,
          n,
          e,
          l,
          a
        )), null;
      case 27:
        if (he(t), a = xe.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && xa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Qe(t), null;
          }
          e = F.current, Jl(t) ? oo(t) : (e = Ld(n, l, a), t.stateNode = e, xa(t));
        }
        return Qe(t), null;
      case 5:
        if (he(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && xa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Qe(t), null;
          }
          if (u = F.current, Jl(t))
            oo(t);
          else {
            var s = vu(
              xe.current
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
            u[rt] = t, u[xt] = l;
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
            e: switch (ht(u, n, l), n) {
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
            l && xa(t);
          }
        }
        return Qe(t), as(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && xa(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = xe.current, Jl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = ot, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[rt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Cd(e.nodeValue, a)), e || Ha(t, !0);
          } else
            e = vu(e).createTextNode(
              l
            ), e[rt] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Jl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[rt] = t;
            } else
              hl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            a = dc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Jl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[rt] = t;
            } else
              hl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), n = !1;
          } else
            n = dc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
        }
        return Ut(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), eu(t, t.updateQueue), Qe(t), null);
      case 4:
        return V(), e === null && Ns(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return ya(t.type), Qe(t), null;
      case 19:
        if (M($e), l = t.memoizedState, l === null) return Qe(t), null;
        if (n = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (n) Xn(l, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Yi(e), u !== null) {
                  for (t.flags |= 128, Xn(l, !1), e = u.updateQueue, t.updateQueue = e, eu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    io(a, e), a = a.sibling;
                  return X(
                    $e,
                    $e.current & 1 | 2
                  ), De && ma(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Me() > iu && (t.flags |= 128, n = !0, Xn(l, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Yi(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, eu(t, e), Xn(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !De)
                return Qe(t), null;
            } else
              2 * Me() - l.renderingStartTime > iu && a !== 536870912 && (t.flags |= 128, n = !0, Xn(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Me(), e.sibling = null, a = $e.current, X(
          $e,
          n ? a & 1 | 2 : a & 1
        ), De && ma(t, l.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return Ut(t), _c(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), a = t.updateQueue, a !== null && eu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && M(yl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ya(Ie), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function nv(e, t) {
    switch (oc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ya(Ie), V(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return he(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ut(t), t.alternate === null)
            throw Error(o(340));
          hl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ut(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          hl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return M($e), null;
      case 4:
        return V(), null;
      case 10:
        return ya(t.type), null;
      case 22:
      case 23:
        return Ut(t), _c(), e !== null && M(yl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ya(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Uf(e, t) {
    switch (oc(t), t.tag) {
      case 3:
        ya(Ie), V();
        break;
      case 26:
      case 27:
      case 5:
        he(t);
        break;
      case 4:
        V();
        break;
      case 31:
        t.memoizedState !== null && Ut(t);
        break;
      case 13:
        Ut(t);
        break;
      case 19:
        M($e);
        break;
      case 10:
        ya(t.type);
        break;
      case 22:
      case 23:
        Ut(t), _c(), e !== null && M(yl);
        break;
      case 24:
        ya(Ie);
    }
  }
  function Qn(e, t) {
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
              var m = a, T = r;
              try {
                T();
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
    a.props = jl(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function Zn(e, t) {
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
  function ia(e, t) {
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
  function ls(e, t, a) {
    try {
      var l = e.stateNode;
      Tv(l, e.type, a, t), l[xt] = t;
    } catch (n) {
      ke(e, e.return, n);
    }
  }
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wa(e.type) || e.tag === 4;
  }
  function ns(e) {
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
  function is(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = fa));
    else if (l !== 4 && (l === 27 && Wa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (is(e, t, a), e = e.sibling; e !== null; )
        is(e, t, a), e = e.sibling;
  }
  function tu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Wa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (tu(e, t, a), e = e.sibling; e !== null; )
        tu(e, t, a), e = e.sibling;
  }
  function kf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ht(t, l, a), t[rt] = e, t[xt] = a;
    } catch (u) {
      ke(e, e.return, u);
    }
  }
  var ja = !1, tt = !1, us = !1, Lf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function iv(e, t) {
    if (e = e.containerInfo, As = Su, e = Fr(e), Pu(e)) {
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
            var s = 0, r = -1, m = -1, T = 0, O = 0, H = e, z = null;
            t: for (; ; ) {
              for (var C; H !== a || n !== 0 && H.nodeType !== 3 || (r = s + n), H !== u || l !== 0 && H.nodeType !== 3 || (m = s + l), H.nodeType === 3 && (s += H.nodeValue.length), (C = H.firstChild) !== null; )
                z = H, H = C;
              for (; ; ) {
                if (H === e) break t;
                if (z === a && ++T === n && (r = s), z === u && ++O === l && (m = s), (C = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = C;
            }
            a = r === -1 || m === -1 ? null : { start: r, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (zs = { focusedElem: e, selectionRange: a }, Su = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, u = t.alternate, e = t.flags, t.tag) {
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
                  var ee = jl(
                    a.type,
                    n
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ee,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (fe) {
                  ke(
                    a,
                    a.return,
                    fe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Ds(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ds(e);
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
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function Yf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ea(e, a), l & 4 && Qn(5, a);
        break;
      case 1:
        if (Ea(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              ke(a, a.return, s);
            }
          else {
            var n = jl(
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
        l & 64 && Rf(a), l & 512 && Zn(a, a.return);
        break;
      case 3:
        if (Ea(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
        Ea(e, a), t === null && l & 4 && Hf(a), l & 512 && Zn(a, a.return);
        break;
      case 12:
        Ea(e, a);
        break;
      case 31:
        Ea(e, a), l & 4 && Xf(e, a);
        break;
      case 13:
        Ea(e, a), l & 4 && Qf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = mv.bind(
          null,
          a
        ), Uv(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || ja, !l) {
          t = t !== null && t.memoizedState !== null || tt, n = ja;
          var u = tt;
          ja = l, (tt = t) && !u ? Na(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ea(e, a), ja = n, tt = u;
        }
        break;
      case 30:
        break;
      default:
        Ea(e, a);
    }
  }
  function Vf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && qu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, St = !1;
  function Sa(e, t, a) {
    for (a = a.child; a !== null; )
      Gf(e, t, a), a = a.sibling;
  }
  function Gf(e, t, a) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(Ma, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        tt || ia(a, t), Sa(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        tt || ia(a, t);
        var l = Ze, n = St;
        Wa(a.type) && (Ze = a.stateNode, St = !1), Sa(
          e,
          t,
          a
        ), ti(a.stateNode), Ze = l, St = n;
        break;
      case 5:
        tt || ia(a, t);
      case 6:
        if (l = Ze, n = St, Ze = null, Sa(
          e,
          t,
          a
        ), Ze = l, St = n, Ze !== null)
          if (St)
            try {
              (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(a.stateNode);
            } catch (u) {
              ke(
                a,
                t,
                u
              );
            }
          else
            try {
              Ze.removeChild(a.stateNode);
            } catch (u) {
              ke(
                a,
                t,
                u
              );
            }
        break;
      case 18:
        Ze !== null && (St ? (e = Ze, Rd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), yn(e)) : Rd(Ze, a.stateNode));
        break;
      case 4:
        l = Ze, n = St, Ze = a.stateNode.containerInfo, St = !0, Sa(
          e,
          t,
          a
        ), Ze = l, St = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xa(2, a, t), tt || Xa(4, a, t), Sa(
          e,
          t,
          a
        );
        break;
      case 1:
        tt || (ia(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && qf(
          a,
          t,
          l
        )), Sa(
          e,
          t,
          a
        );
        break;
      case 21:
        Sa(
          e,
          t,
          a
        );
        break;
      case 22:
        tt = (l = tt) || a.memoizedState !== null, Sa(
          e,
          t,
          a
        ), tt = l;
        break;
      default:
        Sa(
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
        yn(e);
      } catch (a) {
        ke(t, t.return, a);
      }
    }
  }
  function Qf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        yn(e);
      } catch (a) {
        ke(t, t.return, a);
      }
  }
  function uv(e) {
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
  function au(e, t) {
    var a = uv(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = vv.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Et(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], u = e, s = t, r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Wa(r.type)) {
                Ze = r.stateNode, St = !1;
                break e;
              }
              break;
            case 5:
              Ze = r.stateNode, St = !1;
              break e;
            case 3:
            case 4:
              Ze = r.stateNode.containerInfo, St = !0;
              break e;
          }
          r = r.return;
        }
        if (Ze === null) throw Error(o(160));
        Gf(u, s, n), Ze = null, St = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Zf(t, e), t = t.sibling;
  }
  var Wt = null;
  function Zf(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Et(t, e), Nt(e), l & 4 && (Xa(3, e, e.return), Qn(3, e), Xa(5, e, e.return));
        break;
      case 1:
        Et(t, e), Nt(e), l & 512 && (tt || a === null || ia(a, a.return)), l & 64 && ja && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Wt;
        if (Et(t, e), Nt(e), l & 512 && (tt || a === null || ia(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[bn] || u[rt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), ht(u, l, a), u[rt] = e, ut(u), l = u;
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
                      u = n.createElement(l), ht(u, l, a), n.head.appendChild(u);
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
                      u = n.createElement(l), ht(u, l, a), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  u[rt] = e, ut(u), l = u;
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
            )) : l === null && e.stateNode !== null && ls(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Et(t, e), Nt(e), l & 512 && (tt || a === null || ia(a, a.return)), a !== null && l & 4 && ls(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Et(t, e), Nt(e), l & 512 && (tt || a === null || ia(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Bl(n, "");
          } catch (ee) {
            ke(e, e.return, ee);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, ls(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (us = !0);
        break;
      case 6:
        if (Et(t, e), Nt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (ee) {
            ke(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (pu = null, n = Wt, Wt = yu(t.containerInfo), Et(t, e), Wt = n, Nt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            yn(t.containerInfo);
          } catch (ee) {
            ke(e, e.return, ee);
          }
        us && (us = !1, Kf(e));
        break;
      case 4:
        l = Wt, Wt = yu(
          e.stateNode.containerInfo
        ), Et(t, e), Nt(e), Wt = l;
        break;
      case 12:
        Et(t, e), Nt(e);
        break;
      case 31:
        Et(t, e), Nt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, au(e, l)));
        break;
      case 13:
        Et(t, e), Nt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (nu = Me()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, au(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, T = ja, O = tt;
        if (ja = T || n, tt = O || m, Et(t, e), tt = O, ja = T, Nt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || m || ja || tt || Sl(e)), a = null, t = e; ; ) {
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
                } catch (ee) {
                  ke(m, m.return, ee);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (ee) {
                  ke(m, m.return, ee);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                m = t;
                try {
                  var C = m.stateNode;
                  n ? qd(C, !0) : qd(m.stateNode, !1);
                } catch (ee) {
                  ke(m, m.return, ee);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, au(e, a))));
        break;
      case 19:
        Et(t, e), Nt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, au(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Et(t, e), Nt(e);
    }
  }
  function Nt(e) {
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
            var n = a.stateNode, u = ns(e);
            tu(e, u, n);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (Bl(s, ""), a.flags &= -33);
            var r = ns(e);
            tu(e, r, s);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, T = ns(e);
            is(
              e,
              T,
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
  function Ea(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Yf(e, t.alternate, t), t = t.sibling;
  }
  function Sl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xa(4, t, t.return), Sl(t);
          break;
        case 1:
          ia(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && qf(
            t,
            t.return,
            a
          ), Sl(t);
          break;
        case 27:
          ti(t.stateNode);
        case 26:
        case 5:
          ia(t, t.return), Sl(t);
          break;
        case 22:
          t.memoizedState === null && Sl(t);
          break;
        case 30:
          Sl(t);
          break;
        default:
          Sl(t);
      }
      e = e.sibling;
    }
  }
  function Na(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Na(
            n,
            u,
            a
          ), Qn(4, u);
          break;
        case 1:
          if (Na(
            n,
            u,
            a
          ), l = u, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (T) {
              ke(l, l.return, T);
            }
          if (l = u, n = l.updateQueue, n !== null) {
            var r = l.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  Eo(m[n], r);
            } catch (T) {
              ke(l, l.return, T);
            }
          }
          a && s & 64 && Rf(u), Zn(u, u.return);
          break;
        case 27:
          kf(u);
        case 26:
        case 5:
          Na(
            n,
            u,
            a
          ), a && l === null && s & 4 && Hf(u), Zn(u, u.return);
          break;
        case 12:
          Na(
            n,
            u,
            a
          );
          break;
        case 31:
          Na(
            n,
            u,
            a
          ), a && s & 4 && Xf(n, u);
          break;
        case 13:
          Na(
            n,
            u,
            a
          ), a && s & 4 && Qf(n, u);
          break;
        case 22:
          u.memoizedState === null && Na(
            n,
            u,
            a
          ), Zn(u, u.return);
          break;
        case 30:
          break;
        default:
          Na(
            n,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function cs(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Mn(a));
  }
  function ss(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mn(e));
  }
  function It(e, t, a, l) {
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
        It(
          e,
          t,
          a,
          l
        ), n & 2048 && Qn(9, t);
        break;
      case 1:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        It(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mn(e)));
        break;
      case 12:
        if (n & 2048) {
          It(
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
          It(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? It(
          e,
          t,
          a,
          l
        ) : Kn(e, t) : u._visibility & 2 ? It(
          e,
          t,
          a,
          l
        ) : (u._visibility |= 2, nn(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && cs(s, t);
        break;
      case 24:
        It(
          e,
          t,
          a,
          l
        ), n & 2048 && ss(t.alternate, t);
        break;
      default:
        It(
          e,
          t,
          a,
          l
        );
    }
  }
  function nn(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, r = a, m = l, T = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          nn(
            u,
            s,
            r,
            m,
            n
          ), Qn(8, s);
          break;
        case 23:
          break;
        case 22:
          var O = s.stateNode;
          s.memoizedState !== null ? O._visibility & 2 ? nn(
            u,
            s,
            r,
            m,
            n
          ) : Kn(
            u,
            s
          ) : (O._visibility |= 2, nn(
            u,
            s,
            r,
            m,
            n
          )), n && T & 2048 && cs(
            s.alternate,
            s
          );
          break;
        case 24:
          nn(
            u,
            s,
            r,
            m,
            n
          ), n && T & 2048 && ss(s.alternate, s);
          break;
        default:
          nn(
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
  function Kn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            Kn(a, l), n & 2048 && cs(
              l.alternate,
              l
            );
            break;
          case 24:
            Kn(a, l), n & 2048 && ss(l.alternate, l);
            break;
          default:
            Kn(a, l);
        }
        t = t.sibling;
      }
  }
  var Jn = 8192;
  function un(e, t, a) {
    if (e.subtreeFlags & Jn)
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
        un(
          e,
          t,
          a
        ), e.flags & Jn && e.memoizedState !== null && Zv(
          a,
          Wt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        un(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Wt;
        Wt = yu(e.stateNode.containerInfo), un(
          e,
          t,
          a
        ), Wt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Jn, Jn = 16777216, un(
          e,
          t,
          a
        ), Jn = l) : un(
          e,
          t,
          a
        ));
        break;
      default:
        un(
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
  function $n(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ct = l, If(
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
        $n(e), e.flags & 2048 && Xa(9, e, e.return);
        break;
      case 3:
        $n(e);
        break;
      case 12:
        $n(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, lu(e)) : $n(e);
        break;
      default:
        $n(e);
    }
  }
  function lu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ct = l, If(
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
          Xa(8, t, t.return), lu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, lu(t));
          break;
        default:
          lu(t);
      }
      e = e.sibling;
    }
  }
  function If(e, t) {
    for (; ct !== null; ) {
      var a = ct;
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
          Mn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ct = l;
      else
        e: for (a = e; ct !== null; ) {
          l = ct;
          var n = l.sibling, u = l.return;
          if (Vf(l), l === a) {
            ct = null;
            break e;
          }
          if (n !== null) {
            n.return = u, ct = n;
            break e;
          }
          ct = u;
        }
    }
  }
  var cv = {
    getCacheForType: function(e) {
      var t = ft(Ie), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ft(Ie).controller.signal;
    }
  }, sv = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Ge = null, _e = null, Ae = 0, Be = 0, Rt = null, Qa = !1, cn = !1, rs = !1, _a = 0, Je = 0, Za = 0, El = 0, os = 0, qt = 0, sn = 0, Fn = null, _t = null, fs = !1, nu = 0, Pf = 0, iu = 1 / 0, uu = null, Ka = null, lt = 0, Ja = null, rn = null, Ta = 0, ds = 0, hs = null, ed = null, Wn = 0, ms = null;
  function Ht() {
    return (He & 2) !== 0 && Ae !== 0 ? Ae & -Ae : g.T !== null ? xs() : mr();
  }
  function td() {
    if (qt === 0)
      if ((Ae & 536870912) === 0 || De) {
        var e = wl;
        wl <<= 1, (wl & 3932160) === 0 && (wl = 262144), qt = e;
      } else qt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), qt;
  }
  function Tt(e, t, a) {
    (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (on(e, 0), $a(
      e,
      Ae,
      qt,
      !1
    )), se(e, a), ((He & 2) === 0 || e !== Ge) && (e === Ge && ((He & 2) === 0 && (El |= a), Je === 4 && $a(
      e,
      Ae,
      qt,
      !1
    )), ua(e));
  }
  function ad(e, t, a) {
    if ((He & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || le(e, t), n = l ? fv(e, t) : ys(e, t, !0), u = l;
    do {
      if (n === 0) {
        cn && !l && $a(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !rv(a)) {
          n = ys(e, t, !1), u = !1;
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
              n = Fn;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (on(r, s).flags |= 256), s = ys(
                r,
                s,
                !1
              ), s !== 2) {
                if (rs && !m) {
                  r.errorRecoveryDisabledLanes |= u, El |= u, n = 4;
                  break e;
                }
                u = _t, _t = n, u !== null && (_t === null ? _t = u : _t.push.apply(
                  _t,
                  u
                ));
              }
              n = s;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          on(e, 0), $a(e, t, 0, !0);
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
                qt,
                !Qa
              );
              break e;
            case 2:
              _t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = nu + 300 - Me(), 10 < n)) {
            if ($a(
              l,
              t,
              qt,
              !Qa
            ), Q(l, 0, !0) !== 0) break e;
            Ta = t, l.timeoutHandle = Od(
              ld.bind(
                null,
                l,
                a,
                _t,
                uu,
                fs,
                t,
                qt,
                El,
                sn,
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
            _t,
            uu,
            fs,
            t,
            qt,
            El,
            sn,
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
    ua(e);
  }
  function ld(e, t, a, l, n, u, s, r, m, T, O, H, z, C) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fa
      }, $f(
        t,
        u,
        H
      );
      var ee = (u & 62914560) === u ? nu - Me() : (u & 4194048) === u ? Pf - Me() : 0;
      if (ee = Kv(
        H,
        ee
      ), ee !== null) {
        Ta = u, e.cancelPendingCommit = ee(
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
        ), $a(e, u, s, !T);
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
  function rv(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Dt(u(), n)) return !1;
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
    t &= ~os, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - gt(n), s = 1 << u;
      l[u] = -1, n &= ~s;
    }
    a !== 0 && ta(e, a, t);
  }
  function cu() {
    return (He & 6) === 0 ? (In(0), !1) : !0;
  }
  function vs() {
    if (_e !== null) {
      if (Be === 0)
        var e = _e.return;
      else
        e = _e, va = ml = null, Dc(e), Pl = null, Un = 0, e = _e;
      for (; e !== null; )
        Uf(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function on(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Cv(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ta = 0, vs(), Ge = e, _e = a = ha(e.current, null), Ae = t, Be = 0, Rt = null, Qa = !1, cn = le(e, t), rs = !1, sn = qt = os = El = Za = Je = 0, _t = Fn = null, fs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - gt(l), u = 1 << n;
        t |= e[n], l &= ~u;
      }
    return _a = t, zi(), a;
  }
  function nd(e, t) {
    je = null, g.H = Vn, t === Il || t === qi ? (t = bo(), Be = 3) : t === bc ? (t = bo(), Be = 4) : Be = t === Kc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Rt = t, _e === null && (Je = 1, Fi(
      e,
      Gt(t, e.current)
    ));
  }
  function id() {
    var e = Ot.current;
    return e === null ? !0 : (Ae & 4194048) === Ae ? Kt === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === Kt : !1;
  }
  function ud() {
    var e = g.H;
    return g.H = Vn, e === null ? Vn : e;
  }
  function cd() {
    var e = g.A;
    return g.A = cv, e;
  }
  function su() {
    Je = 4, Qa || (Ae & 4194048) !== Ae && Ot.current !== null || (cn = !0), (Za & 134217727) === 0 && (El & 134217727) === 0 || Ge === null || $a(
      Ge,
      Ae,
      qt,
      !1
    );
  }
  function ys(e, t, a) {
    var l = He;
    He |= 2;
    var n = ud(), u = cd();
    (Ge !== e || Ae !== t) && (uu = null, on(e, t)), t = !1;
    var s = Je;
    e: do
      try {
        if (Be !== 0 && _e !== null) {
          var r = _e, m = Rt;
          switch (Be) {
            case 8:
              vs(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var T = Be;
              if (Be = 0, Rt = null, fn(e, r, m, T), a && cn) {
                s = 0;
                break e;
              }
              break;
            default:
              T = Be, Be = 0, Rt = null, fn(e, r, m, T);
          }
        }
        ov(), s = Je;
        break;
      } catch (O) {
        nd(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, va = ml = null, He = l, g.H = n, g.A = u, _e === null && (Ge = null, Ae = 0, zi()), s;
  }
  function ov() {
    for (; _e !== null; ) sd(_e);
  }
  function fv(e, t) {
    var a = He;
    He |= 2;
    var l = ud(), n = cd();
    Ge !== e || Ae !== t ? (uu = null, iu = Me() + 500, on(e, t)) : cn = le(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && _e !== null) {
          t = _e;
          var u = Rt;
          t: switch (Be) {
            case 1:
              Be = 0, Rt = null, fn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (go(u)) {
                Be = 0, Rt = null, rd(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ge !== e || (Be = 7), ua(e);
              }, u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              go(u) ? (Be = 0, Rt = null, rd(t)) : (Be = 0, Rt = null, fn(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (_e.tag) {
                case 26:
                  s = _e.memoizedState;
                case 5:
                case 27:
                  var r = _e;
                  if (s ? Jd(s) : r.stateNode.complete) {
                    Be = 0, Rt = null;
                    var m = r.sibling;
                    if (m !== null) _e = m;
                    else {
                      var T = r.return;
                      T !== null ? (_e = T, ru(T)) : _e = null;
                    }
                    break t;
                  }
              }
              Be = 0, Rt = null, fn(e, t, u, 5);
              break;
            case 6:
              Be = 0, Rt = null, fn(e, t, u, 6);
              break;
            case 8:
              vs(), Je = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        dv();
        break;
      } catch (O) {
        nd(e, O);
      }
    while (!0);
    return va = ml = null, g.H = l, g.A = n, He = a, _e !== null ? 0 : (Ge = null, Ae = 0, zi(), Je);
  }
  function dv() {
    for (; _e !== null && !ra(); )
      sd(_e);
  }
  function sd(e) {
    var t = Mf(e.alternate, e, _a);
    e.memoizedProps = e.pendingProps, t === null ? ru(e) : _e = t;
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
        Dc(t);
      default:
        Uf(a, t), t = _e = io(t, _a), t = Mf(a, t, _a);
    }
    e.memoizedProps = e.pendingProps, t === null ? ru(e) : _e = t;
  }
  function fn(e, t, a, l) {
    va = ml = null, Dc(t), Pl = null, Un = 0;
    var n = t.return;
    try {
      if (ev(
        e,
        n,
        t,
        a,
        Ae
      )) {
        Je = 1, Fi(
          e,
          Gt(a, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw _e = n, u;
      Je = 1, Fi(
        e,
        Gt(a, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (De || l === 1 ? e = !0 : cn || (Ae & 536870912) !== 0 ? e = !1 : (Qa = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ot.current, l !== null && l.tag === 13 && (l.flags |= 16384))), od(t, e)) : ru(t);
  }
  function ru(e) {
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
      var a = lv(
        t.alternate,
        t,
        _a
      );
      if (a !== null) {
        _e = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function od(e, t) {
    do {
      var a = nv(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, _e = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        _e = e;
        return;
      }
      _e = e = a;
    } while (e !== null);
    Je = 6, _e = null;
  }
  function fd(e, t, a, l, n, u, s, r, m) {
    e.cancelPendingCommit = null;
    do
      ou();
    while (lt !== 0);
    if ((He & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= nc, wt(
        e,
        a,
        u,
        s,
        r,
        m
      ), e === Ge && (_e = Ge = null, Ae = 0), rn = t, Ja = e, Ta = a, ds = u, hs = n, ed = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yv(Da, function() {
        return yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = g.T, g.T = null, n = B.p, B.p = 2, s = He, He |= 4;
        try {
          iv(e, t, a);
        } finally {
          He = s, B.p = n, g.T = l;
        }
      }
      lt = 1, dd(), hd(), md();
    }
  }
  function dd() {
    if (lt === 1) {
      lt = 0;
      var e = Ja, t = rn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null;
        var l = B.p;
        B.p = 2;
        var n = He;
        He |= 4;
        try {
          Zf(t, e);
          var u = zs, s = Fr(e.containerInfo), r = u.focusedElem, m = u.selectionRange;
          if (s !== r && r && r.ownerDocument && $r(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && Pu(r)) {
              var T = m.start, O = m.end;
              if (O === void 0 && (O = T), "selectionStart" in r)
                r.selectionStart = T, r.selectionEnd = Math.min(
                  O,
                  r.value.length
                );
              else {
                var H = r.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var C = z.getSelection(), ee = r.textContent.length, fe = Math.min(m.start, ee), Ve = m.end === void 0 ? fe : Math.min(m.end, ee);
                  !C.extend && fe > Ve && (s = Ve, Ve = fe, fe = s);
                  var j = Jr(
                    r,
                    fe
                  ), v = Jr(
                    r,
                    Ve
                  );
                  if (j && v && (C.rangeCount !== 1 || C.anchorNode !== j.node || C.anchorOffset !== j.offset || C.focusNode !== v.node || C.focusOffset !== v.offset)) {
                    var _ = H.createRange();
                    _.setStart(j.node, j.offset), C.removeAllRanges(), fe > Ve ? (C.addRange(_), C.extend(v.node, v.offset)) : (_.setEnd(v.node, v.offset), C.addRange(_));
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
          Su = !!As, zs = As = null;
        } finally {
          He = n, B.p = l, g.T = a;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function hd() {
    if (lt === 2) {
      lt = 0;
      var e = Ja, t = rn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = g.T, g.T = null;
        var l = B.p;
        B.p = 2;
        var n = He;
        He |= 4;
        try {
          Yf(e, t.alternate, t);
        } finally {
          He = n, B.p = l, g.T = a;
        }
      }
      lt = 3;
    }
  }
  function md() {
    if (lt === 4 || lt === 3) {
      lt = 0, ul();
      var e = Ja, t = rn, a = Ta, l = ed;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, rn = Ja = null, vd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ka = null), Uu(a), t = t.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            Ma,
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
      (Ta & 3) !== 0 && ou(), ua(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === ms ? Wn++ : (Wn = 0, ms = e) : Wn = 0, In(0);
    }
  }
  function vd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Mn(t)));
  }
  function ou() {
    return dd(), hd(), md(), yd();
  }
  function yd() {
    if (lt !== 5) return !1;
    var e = Ja, t = ds;
    ds = 0;
    var a = Uu(Ta), l = g.T, n = B.p;
    try {
      B.p = 32 > a ? 32 : a, g.T = null, a = hs, hs = null;
      var u = Ja, s = Ta;
      if (lt = 0, rn = Ja = null, Ta = 0, (He & 6) !== 0) throw Error(o(331));
      var r = He;
      if (He |= 4, Wf(u.current), Jf(
        u,
        u.current,
        s,
        a
      ), He = r, In(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(Ma, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = n, g.T = l, vd(e, t);
    }
  }
  function gd(e, t, a) {
    t = Gt(a, t), t = Zc(e.stateNode, t, 2), e = Ya(e, t, 2), e !== null && (se(e, 2), ua(e));
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
            e = Gt(a, e), a = pf(2), l = Ya(t, a, 2), l !== null && (bf(
              a,
              l,
              t,
              e
            ), se(l, 2), ua(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function gs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new sv();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (rs = !0, n.add(a), e = hv.bind(null, e, t, a), t.then(e, e));
  }
  function hv(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ge === e && (Ae & a) === a && (Je === 4 || Je === 3 && (Ae & 62914560) === Ae && 300 > Me() - nu ? (He & 2) === 0 && on(e, 0) : os |= a, sn === Ae && (sn = 0)), ua(e);
  }
  function pd(e, t) {
    t === 0 && (t = ge()), e = fl(e, t), e !== null && (se(e, t), ua(e));
  }
  function mv(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), pd(e, a);
  }
  function vv(e, t) {
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
  function yv(e, t) {
    return sa(e, t);
  }
  var fu = null, dn = null, ps = !1, du = !1, bs = !1, Fa = 0;
  function ua(e) {
    e !== dn && e.next === null && (dn === null ? fu = dn = e : dn = dn.next = e), du = !0, ps || (ps = !0, pv());
  }
  function In(e, t) {
    if (!bs && du) {
      bs = !0;
      do
        for (var a = !1, l = fu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var s = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - gt(42 | e) + 1) - 1, u &= n & ~(s & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Sd(l, u));
          } else
            u = Ae, u = Q(
              l,
              l === Ge ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || le(l, u) || (a = !0, Sd(l, u));
          l = l.next;
        }
      while (a);
      bs = !1;
    }
  }
  function gv() {
    bd();
  }
  function bd() {
    du = ps = !1;
    var e = 0;
    Fa !== 0 && zv() && (e = Fa);
    for (var t = Me(), a = null, l = fu; l !== null; ) {
      var n = l.next, u = xd(l, t);
      u === 0 ? (l.next = null, a === null ? fu = n : a.next = n, n === null && (dn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (du = !0)), l = n;
    }
    lt !== 0 && lt !== 5 || In(e), Fa !== 0 && (Fa = 0);
  }
  function xd(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - gt(u), r = 1 << s, m = n[s];
      m === -1 ? ((r & a) === 0 || (r & l) !== 0) && (n[s] = ue(r, t)) : m <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Ge, a = Ae, a = Q(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ca(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || le(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ca(l), Uu(a)) {
        case 2:
        case 8:
          a = Al;
          break;
        case 32:
          a = Da;
          break;
        case 268435456:
          a = vi;
          break;
        default:
          a = Da;
      }
      return l = jd.bind(null, e), a = sa(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ca(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function jd(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ou() && e.callbackNode !== a)
      return null;
    var l = Ae;
    return l = Q(
      e,
      e === Ge ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ad(e, l, t), xd(e, Me()), e.callbackNode != null && e.callbackNode === a ? jd.bind(null, e) : null);
  }
  function Sd(e, t) {
    if (ou()) return null;
    ad(e, t, !0);
  }
  function pv() {
    wv(function() {
      (He & 6) !== 0 ? sa(
        mi,
        gv
      ) : bd();
    });
  }
  function xs() {
    if (Fa === 0) {
      var e = Fl;
      e === 0 && (e = Cl, Cl <<= 1, (Cl & 261888) === 0 && (Cl = 256)), Fa = e;
    }
    return Fa;
  }
  function Ed(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xi("" + e);
  }
  function Nd(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function bv(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = Ed(
        (n[xt] || null).action
      ), s = l.submitter;
      s && (t = (t = s[xt] || null) ? Ed(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var r = new Ni(
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
                  Lc(
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
                typeof u == "function" && (r.preventDefault(), m = s ? Nd(n, s) : new FormData(n), Lc(
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
  for (var js = 0; js < lc.length; js++) {
    var Ss = lc[js], xv = Ss.toLowerCase(), jv = Ss[0].toUpperCase() + Ss.slice(1);
    Ft(
      xv,
      "on" + jv
    );
  }
  Ft(Pr, "onAnimationEnd"), Ft(eo, "onAnimationIteration"), Ft(to, "onAnimationStart"), Ft("dblclick", "onDoubleClick"), Ft("focusin", "onFocus"), Ft("focusout", "onBlur"), Ft(Hm, "onTransitionRun"), Ft(Bm, "onTransitionStart"), Ft(km, "onTransitionCancel"), Ft(ao, "onTransitionEnd"), ql("onMouseEnter", ["mouseout", "mouseover"]), ql("onMouseLeave", ["mouseout", "mouseover"]), ql("onPointerEnter", ["pointerout", "pointerover"]), ql("onPointerLeave", ["pointerout", "pointerover"]), cl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), cl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), cl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), cl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), cl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), cl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Sv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pn)
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
            var r = l[s], m = r.instance, T = r.currentTarget;
            if (r = r.listener, m !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = T;
            try {
              u(n);
            } catch (O) {
              Ai(O);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (r = l[s], m = r.instance, T = r.currentTarget, r = r.listener, m !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = T;
            try {
              u(n);
            } catch (O) {
              Ai(O);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function Te(e, t) {
    var a = t[Ru];
    a === void 0 && (a = t[Ru] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Td(t, e, 2, !1), a.add(l));
  }
  function Es(e, t, a) {
    var l = 0;
    t && (l |= 4), Td(
      a,
      e,
      l,
      t
    );
  }
  var hu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ns(e) {
    if (!e[hu]) {
      e[hu] = !0, gr.forEach(function(a) {
        a !== "selectionchange" && (Sv.has(a) || Es(a, !1, e), Es(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hu] || (t[hu] = !0, Es("selectionchange", !1, t));
    }
  }
  function Td(e, t, a, l) {
    switch (th(t)) {
      case 2:
        var n = Fv;
        break;
      case 8:
        n = Wv;
        break;
      default:
        n = ks;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function _s(e, t, a, l, n) {
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
            if (s = Ol(r), s === null) return;
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
      var T = u, O = Vu(a), H = [];
      e: {
        var z = lo.get(e);
        if (z !== void 0) {
          var C = Ni, ee = e;
          switch (e) {
            case "keypress":
              if (Si(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = vm;
              break;
            case "focusin":
              ee = "focus", C = Ju;
              break;
            case "focusout":
              ee = "blur", C = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              C = Ju;
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
              C = lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = pm;
              break;
            case Pr:
            case eo:
            case to:
              C = um;
              break;
            case ao:
              C = xm;
              break;
            case "scroll":
            case "scrollend":
              C = tm;
              break;
            case "wheel":
              C = Sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = sm;
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
              C = Nm;
          }
          var fe = (t & 4) !== 0, Ve = !fe && (e === "scroll" || e === "scrollend"), j = fe ? z !== null ? z + "Capture" : null : z;
          fe = [];
          for (var v = T, _; v !== null; ) {
            var R = v;
            if (_ = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || _ === null || j === null || (R = jn(v, j), R != null && fe.push(
              ei(v, R, _)
            )), Ve) break;
            v = v.return;
          }
          0 < fe.length && (z = new C(
            z,
            ee,
            null,
            a,
            O
          ), H.push({ event: z, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", z && a !== Yu && (ee = a.relatedTarget || a.fromElement) && (Ol(ee) || ee[Ml]))
            break e;
          if ((C || z) && (z = O.window === O ? O : (z = O.ownerDocument) ? z.defaultView || z.parentWindow : window, C ? (ee = a.relatedTarget || a.toElement, C = T, ee = ee ? Ol(ee) : null, ee !== null && (Ve = S(ee), fe = ee.tag, ee !== Ve || fe !== 5 && fe !== 27 && fe !== 6) && (ee = null)) : (C = null, ee = T), C !== ee)) {
            if (fe = Mr, R = "onMouseLeave", j = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Ur, R = "onPointerLeave", j = "onPointerEnter", v = "pointer"), Ve = C == null ? z : xn(C), _ = ee == null ? z : xn(ee), z = new fe(
              R,
              v + "leave",
              C,
              a,
              O
            ), z.target = Ve, z.relatedTarget = _, R = null, Ol(O) === T && (fe = new fe(
              j,
              v + "enter",
              ee,
              a,
              O
            ), fe.target = _, fe.relatedTarget = Ve, R = fe), Ve = R, C && ee)
              t: {
                for (fe = Ev, j = C, v = ee, _ = 0, R = j; R; R = fe(R))
                  _++;
                R = 0;
                for (var oe = v; oe; oe = fe(oe))
                  R++;
                for (; 0 < _ - R; )
                  j = fe(j), _--;
                for (; 0 < R - _; )
                  v = fe(v), R--;
                for (; _--; ) {
                  if (j === v || v !== null && j === v.alternate) {
                    fe = j;
                    break t;
                  }
                  j = fe(j), v = fe(v);
                }
                fe = null;
              }
            else fe = null;
            C !== null && Ad(
              H,
              z,
              C,
              fe,
              !1
            ), ee !== null && Ve !== null && Ad(
              H,
              Ve,
              ee,
              fe,
              !0
            );
          }
        }
        e: {
          if (z = T ? xn(T) : window, C = z.nodeName && z.nodeName.toLowerCase(), C === "select" || C === "input" && z.type === "file")
            var Ue = Vr;
          else if (Lr(z))
            if (Gr)
              Ue = Um;
            else {
              Ue = Mm;
              var ne = Dm;
            }
          else
            C = z.nodeName, !C || C.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? T && Lu(T.elementType) && (Ue = Vr) : Ue = Om;
          if (Ue && (Ue = Ue(e, T))) {
            Yr(
              H,
              Ue,
              a,
              O
            );
            break e;
          }
          ne && ne(e, z, T), e === "focusout" && T && z.type === "number" && T.memoizedProps.value != null && ku(z, "number", z.value);
        }
        switch (ne = T ? xn(T) : window, e) {
          case "focusin":
            (Lr(ne) || ne.contentEditable === "true") && (Vl = ne, ec = T, Cn = null);
            break;
          case "focusout":
            Cn = ec = Vl = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, Wr(H, a, O);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            Wr(H, a, O);
        }
        var Se;
        if (Fu)
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
          Yl ? Br(e, a) && (ze = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ze = "onCompositionStart");
        ze && (Rr && a.locale !== "ko" && (Yl || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Yl && (Se = wr()) : (Ua = O, Qu = "value" in Ua ? Ua.value : Ua.textContent, Yl = !0)), ne = mu(T, ze), 0 < ne.length && (ze = new Or(
          ze,
          e,
          null,
          a,
          O
        ), H.push({ event: ze, listeners: ne }), Se ? ze.data = Se : (Se = kr(a), Se !== null && (ze.data = Se)))), (Se = Tm ? Am(e, a) : zm(e, a)) && (ze = mu(T, "onBeforeInput"), 0 < ze.length && (ne = new Or(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          O
        ), H.push({
          event: ne,
          listeners: ze
        }), ne.data = Se)), bv(
          H,
          e,
          T,
          a,
          O
        );
      }
      _d(H, t);
    });
  }
  function ei(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function mu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = jn(e, a), n != null && l.unshift(
        ei(e, n, u)
      ), n = jn(e, t), n != null && l.push(
        ei(e, n, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ev(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ad(e, t, a, l, n) {
    for (var u = t._reactName, s = []; a !== null && a !== l; ) {
      var r = a, m = r.alternate, T = r.stateNode;
      if (r = r.tag, m !== null && m === l) break;
      r !== 5 && r !== 26 && r !== 27 || T === null || (m = T, n ? (T = jn(a, u), T != null && s.unshift(
        ei(a, T, m)
      )) : n || (T = jn(a, u), T != null && s.push(
        ei(a, T, m)
      ))), a = a.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Nv = /\r\n?/g, _v = /\u0000|\uFFFD/g;
  function zd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nv, `
`).replace(_v, "");
  }
  function Cd(e, t) {
    return t = zd(t), zd(e) === t;
  }
  function Ye(e, t, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Bl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Bl(e, "" + l);
        break;
      case "className":
        pi(e, "class", l);
        break;
      case "tabIndex":
        pi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pi(e, a, l);
        break;
      case "style":
        Ar(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          pi(e, "data", l);
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
        l = xi("" + l), e.setAttribute(a, l);
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
        l = xi("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = fa);
        break;
      case "onScroll":
        l != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Te("scrollend", e);
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
        a = xi("" + l), e.setAttributeNS(
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
        Te("beforetoggle", e), Te("toggle", e), gi(e, "popover", l);
        break;
      case "xlinkActuate":
        oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        oa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        oa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        gi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ph.get(a) || a, gi(e, a, l));
    }
  }
  function Ts(e, t, a, l, n, u) {
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
        typeof l == "string" ? Bl(e, l) : (typeof l == "number" || typeof l == "bigint") && Bl(e, "" + l);
        break;
      case "onScroll":
        l != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Te("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = fa);
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
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[xt] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : gi(e, a, l);
          }
    }
  }
  function ht(e, t, a) {
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
        Te("error", e), Te("load", e);
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
        Te("invalid", e);
        var r = u = s = n = null, m = null, T = null;
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
                  T = O;
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
          T,
          s,
          n,
          !1
        );
        return;
      case "select":
        Te("invalid", e), l = s = u = null;
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
        t = u, a = s, e.multiple = !!l, t != null ? Hl(e, !!l, t, !1) : a != null && Hl(e, !!l, a, !0);
        return;
      case "textarea":
        Te("invalid", e), u = n = l = null;
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
        Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
        break;
      case "iframe":
      case "object":
        Te("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Pn.length; l++)
          Te(Pn[l], e);
        break;
      case "image":
        Te("error", e), Te("load", e);
        break;
      case "details":
        Te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Te("error", e), Te("load", e);
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
        for (T in a)
          if (a.hasOwnProperty(T) && (l = a[T], l != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ye(e, t, T, l, a, null);
            }
        return;
      default:
        if (Lu(t)) {
          for (O in a)
            a.hasOwnProperty(O) && (l = a[O], l !== void 0 && Ts(
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
  function Tv(e, t, a, l) {
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
        var n = null, u = null, s = null, r = null, m = null, T = null, O = null;
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
                T = C;
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
        Bu(
          e,
          s,
          r,
          m,
          T,
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
        t = r, a = s, l = C, z != null ? Hl(e, !!a, z, !1) : !!l != !!a && (t != null ? Hl(e, !!a, t, !0) : Hl(e, !!a, a ? [] : "", !1));
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
        for (var ee in a)
          z = a[ee], a.hasOwnProperty(ee) && z != null && !l.hasOwnProperty(ee) && (ee === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            ee,
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
        for (var fe in a)
          z = a[fe], a.hasOwnProperty(fe) && z != null && !l.hasOwnProperty(fe) && Ye(e, t, fe, null, l, z);
        for (T in l)
          if (z = l[T], C = a[T], l.hasOwnProperty(T) && z !== C && (z != null || C != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  T,
                  z,
                  l,
                  C
                );
            }
        return;
      default:
        if (Lu(t)) {
          for (var Ve in a)
            z = a[Ve], a.hasOwnProperty(Ve) && z !== void 0 && !l.hasOwnProperty(Ve) && Ts(
              e,
              t,
              Ve,
              void 0,
              l,
              z
            );
          for (O in l)
            z = l[O], C = a[O], !l.hasOwnProperty(O) || z === C || z === void 0 && C === void 0 || Ts(
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
    for (var j in a)
      z = a[j], a.hasOwnProperty(j) && z != null && !l.hasOwnProperty(j) && Ye(e, t, j, null, l, z);
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
  function Av() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, s = n.initiatorType, r = n.duration;
        if (u && r && wd(s)) {
          for (s = 0, r = n.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], T = m.startTime;
            if (T > r) break;
            var O = m.transferSize, H = m.initiatorType;
            O && wd(H) && (m = m.responseEnd, s += O * (m < r ? 1 : (r - T) / (m - T)));
          }
          if (--l, t += 8 * (u + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var As = null, zs = null;
  function vu(e) {
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
  function Cs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ws = null;
  function zv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ws ? !1 : (ws = e, !0) : (ws = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, Cv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ud = typeof Promise == "function" ? Promise : void 0, wv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ud < "u" ? function(e) {
    return Ud.resolve(null).then(e).catch(Dv);
  } : Od;
  function Dv(e) {
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
            e.removeChild(n), yn(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          ti(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, ti(a);
          for (var u = a.firstChild; u; ) {
            var s = u.nextSibling, r = u.nodeName;
            u[bn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = s;
          }
        } else
          a === "body" && ti(e.ownerDocument.body);
      a = n;
    } while (a);
    yn(t);
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
  function Ds(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ds(a), qu(a);
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
  function Mv(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[bn])
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
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ov(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ms(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Os(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Uv(e, t) {
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
  function Jt(e) {
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
  var Us = null;
  function Bd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Jt(e.nextSibling);
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
    switch (t = vu(a), e) {
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
  function ti(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    qu(e);
  }
  var $t = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Set();
  function yu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Aa = B.d;
  B.d = {
    f: Rv,
    r: qv,
    D: Hv,
    C: Bv,
    L: kv,
    m: Lv,
    X: Vv,
    S: Yv,
    M: Gv
  };
  function Rv() {
    var e = Aa.f(), t = cu();
    return e || t;
  }
  function qv(e) {
    var t = Ul(e);
    t !== null && t.tag === 5 && t.type === "form" ? lf(t) : Aa.r(e);
  }
  var hn = typeof document > "u" ? null : document;
  function Vd(e, t, a) {
    var l = hn;
    if (l && typeof t == "string" && t) {
      var n = Yt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Yd.has(n) || (Yd.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), ht(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Hv(e) {
    Aa.D(e), Vd("dns-prefetch", e, null);
  }
  function Bv(e, t) {
    Aa.C(e, t), Vd("preconnect", e, t);
  }
  function kv(e, t, a) {
    Aa.L(e, t, a);
    var l = hn;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Yt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Yt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Yt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = mn(e);
          break;
        case "script":
          u = vn(e);
      }
      $t.has(u) || (e = A(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), $t.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(ai(u)) || t === "script" && l.querySelector(li(u)) || (t = l.createElement("link"), ht(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Lv(e, t) {
    Aa.m(e, t);
    var a = hn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Yt(l) + '"][href="' + Yt(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = vn(e);
      }
      if (!$t.has(u) && (e = A({ rel: "modulepreload", href: e }, t), $t.set(u, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(li(u)))
              return;
        }
        l = a.createElement("link"), ht(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function Yv(e, t, a) {
    Aa.S(e, t, a);
    var l = hn;
    if (l && e) {
      var n = Rl(l).hoistableStyles, u = mn(e);
      t = t || "default";
      var s = n.get(u);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = l.querySelector(
          ai(u)
        ))
          r.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = $t.get(u)) && Rs(e, a);
          var m = s = l.createElement("link");
          ut(m), ht(m, "link", e), m._p = new Promise(function(T, O) {
            m.onload = T, m.onerror = O;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, gu(s, t, l);
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
  function Vv(e, t) {
    Aa.X(e, t);
    var a = hn;
    if (a && e) {
      var l = Rl(a).hoistableScripts, n = vn(e), u = l.get(n);
      u || (u = a.querySelector(li(n)), u || (e = A({ src: e, async: !0 }, t), (t = $t.get(n)) && qs(e, t), u = a.createElement("script"), ut(u), ht(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Gv(e, t) {
    Aa.M(e, t);
    var a = hn;
    if (a && e) {
      var l = Rl(a).hoistableScripts, n = vn(e), u = l.get(n);
      u || (u = a.querySelector(li(n)), u || (e = A({ src: e, async: !0, type: "module" }, t), (t = $t.get(n)) && qs(e, t), u = a.createElement("script"), ut(u), ht(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Gd(e, t, a, l) {
    var n = (n = xe.current) ? yu(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = mn(a.href), a = Rl(
          n
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = mn(a.href);
          var u = Rl(
            n
          ).hoistableStyles, s = u.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = n.querySelector(
            ai(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), $t.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, $t.set(e, a), u || Xv(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = vn(a), a = Rl(
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
  function mn(e) {
    return 'href="' + Yt(e) + '"';
  }
  function ai(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xd(e) {
    return A({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Xv(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ht(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function vn(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function li(e) {
    return "script[async]" + e;
  }
  function Qd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Yt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, ut(l), l;
          var n = A({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ut(l), ht(l, "style", n), gu(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = mn(a.href);
          var u = e.querySelector(
            ai(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ut(u), u;
          l = Xd(a), (n = $t.get(n)) && Rs(l, n), u = (e.ownerDocument || e).createElement("link"), ut(u);
          var s = u;
          return s._p = new Promise(function(r, m) {
            s.onload = r, s.onerror = m;
          }), ht(u, "link", l), t.state.loading |= 4, gu(u, a.precedence, e), t.instance = u;
        case "script":
          return u = vn(a.src), (n = e.querySelector(
            li(u)
          )) ? (t.instance = n, ut(n), n) : (l = a, (n = $t.get(u)) && (l = A({}, a), qs(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), ut(n), ht(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, gu(l, a.precedence, e));
    return t.instance;
  }
  function gu(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, s = 0; s < l.length; s++) {
      var r = l[s];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Rs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var pu = null;
  function Zd(e, t, a) {
    if (pu === null) {
      var l = /* @__PURE__ */ new Map(), n = pu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = pu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[bn] || u[rt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Qv(e, t, a) {
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
  function Zv(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = mn(l.href), u = t.querySelector(
          ai(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = bu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, ut(u);
          return;
        }
        u = t.ownerDocument || t, l = Xd(l), (n = $t.get(n)) && Rs(l, n), u = u.createElement("link"), ut(u);
        var s = u;
        s._p = new Promise(function(r, m) {
          s.onload = r, s.onerror = m;
        }), ht(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = bu.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Hs = 0;
  function Kv(e, t) {
    return e.stylesheets && e.count === 0 && ju(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && ju(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Hs === 0 && (Hs = 62500 * Av());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ju(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Hs ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function bu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ju(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var xu = null;
  function ju(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xu = /* @__PURE__ */ new Map(), t.forEach(Jv, e), xu = null, bu.call(e));
  }
  function Jv(e, t) {
    if (!(t.state.loading & 4)) {
      var a = xu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), xu.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var s = n[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), u = a.get(s) || l, u === l && a.set(null, n), a.set(s, n), this.count++, l = bu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ni = {
    $$typeof: ce,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function $v(e, t, a, l, n, u, s, r, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Oe(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oe(0), this.hiddenUpdates = Oe(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $d(e, t, a, l, n, u, s, r, m, T, O, H) {
    return e = new $v(
      e,
      t,
      a,
      s,
      m,
      T,
      O,
      H,
      r
    ), t = 1, u === !0 && (t |= 24), u = Mt(3, null, null, t), e.current = u, u.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, xc(u), e;
  }
  function Fd(e) {
    return e ? (e = Ql, e) : Ql;
  }
  function Wd(e, t, a, l, n, u) {
    n = Fd(n), l.context === null ? l.context = n : l.pendingContext = n, l = La(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Ya(e, l, t), a !== null && (Tt(a, e, t), qn(a, e, t));
  }
  function Id(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Bs(e, t) {
    Id(e, t), (e = e.alternate) && Id(e, t);
  }
  function Pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = fl(e, 67108864);
      t !== null && Tt(t, e, 67108864), Bs(e, 67108864);
    }
  }
  function eh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = Ou(t);
      var a = fl(e, t);
      a !== null && Tt(a, e, t), Bs(e, t);
    }
  }
  var Su = !0;
  function Fv(e, t, a, l) {
    var n = g.T;
    g.T = null;
    var u = B.p;
    try {
      B.p = 2, ks(e, t, a, l);
    } finally {
      B.p = u, g.T = n;
    }
  }
  function Wv(e, t, a, l) {
    var n = g.T;
    g.T = null;
    var u = B.p;
    try {
      B.p = 8, ks(e, t, a, l);
    } finally {
      B.p = u, g.T = n;
    }
  }
  function ks(e, t, a, l) {
    if (Su) {
      var n = Ls(l);
      if (n === null)
        _s(
          e,
          t,
          l,
          Eu,
          a
        ), ah(e, l);
      else if (Pv(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (ah(e, l), t & 4 && -1 < Iv.indexOf(e)) {
        for (; n !== null; ) {
          var u = Ul(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = U(u.pendingLanes);
                  if (s !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - gt(s);
                      r.entanglements[1] |= m, s &= ~m;
                    }
                    ua(u), (He & 6) === 0 && (iu = Me() + 500, In(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = fl(u, 2), r !== null && Tt(r, u, 2), cu(), Bs(u, 2);
            }
          if (u = Ls(l), u === null && _s(
            e,
            t,
            l,
            Eu,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        _s(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Ls(e) {
    return e = Vu(e), Ys(e);
  }
  var Eu = null;
  function Ys(e) {
    if (Eu = null, e = Ol(e), e !== null) {
      var t = S(e);
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
    return Eu = e, null;
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
        switch (wa()) {
          case mi:
            return 2;
          case Al:
            return 8;
          case Da:
          case zl:
            return 32;
          case vi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vs = !1, Ia = null, Pa = null, el = null, ii = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), tl = [], Iv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        ii.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ui.delete(t.pointerId);
    }
  }
  function ci(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ul(t), t !== null && Pd(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Pv(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Ia = ci(
          Ia,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Pa = ci(
          Pa,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return el = ci(
          el,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return ii.set(
          u,
          ci(
            ii.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, ui.set(
          u,
          ci(
            ui.get(u) || null,
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
    var t = Ol(e.target);
    if (t !== null) {
      var a = S(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = b(a), t !== null) {
            e.blockedOn = t, vr(e.priority, function() {
              eh(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = q(a), t !== null) {
            e.blockedOn = t, vr(e.priority, function() {
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
  function Nu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Ls(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Yu = l, a.target.dispatchEvent(l), Yu = null;
      } else
        return t = Ul(a), t !== null && Pd(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function nh(e, t, a) {
    Nu(e) && a.delete(t);
  }
  function ey() {
    Vs = !1, Ia !== null && Nu(Ia) && (Ia = null), Pa !== null && Nu(Pa) && (Pa = null), el !== null && Nu(el) && (el = null), ii.forEach(nh), ui.forEach(nh);
  }
  function _u(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vs || (Vs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      ey
    )));
  }
  var Tu = null;
  function ih(e) {
    Tu !== e && (Tu = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Tu === e && (Tu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (Ys(l || a) === null)
              continue;
            break;
          }
          var u = Ul(a);
          u !== null && (e.splice(t, 3), t -= 3, Lc(
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
  function yn(e) {
    function t(m) {
      return _u(m, e);
    }
    Ia !== null && _u(Ia, e), Pa !== null && _u(Pa, e), el !== null && _u(el, e), ii.forEach(t), ui.forEach(t);
    for (var a = 0; a < tl.length; a++) {
      var l = tl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < tl.length && (a = tl[0], a.blockedOn === null); )
      lh(a), a.blockedOn === null && tl.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], s = n[xt] || null;
        if (typeof u == "function")
          s || ih(a);
        else if (s) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, s = u[xt] || null)
              r = s.formAction;
            else if (Ys(n) !== null) continue;
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
  function Gs(e) {
    this._internalRoot = e;
  }
  Au.prototype.render = Gs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Ht();
    Wd(a, l, e, t, null, null);
  }, Au.prototype.unmount = Gs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wd(e.current, 2, null, e, null, null), cu(), t[Ml] = null;
    }
  };
  function Au(e) {
    this._internalRoot = e;
  }
  Au.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mr();
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
    return e = p(t), e = e !== null ? D(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var ty = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zu.isDisabled && zu.supportsFiber)
      try {
        Ma = zu.inject(
          ty
        ), it = zu;
      } catch {
      }
  }
  return ri.createRoot = function(e, t) {
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
    ), e[Ml] = t.current, Ns(e), new Gs(t);
  }, ri.hydrateRoot = function(e, t, a) {
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
    ), t.context = Fd(null), a = t.current, l = Ht(), l = Ou(l), n = La(l), n.callback = null, Ya(a, n, l), a = l, t.current.lanes = a, se(t, a), ua(t), e[Ml] = t.current, Ns(e), new Au(t);
  }, ri.version = "19.2.8", ri;
}
var gh;
function fy() {
  if (gh) return Zs.exports;
  gh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), Zs.exports = oy(), Zs.exports;
}
var dy = fy();
const Is = "hana.plugin.ui", Ps = 1, hy = "X-Hana-Plugin-Surface-Session", my = "pluginSurfaceSession", Ch = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Nl = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, vy = /* @__PURE__ */ new Set([
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
  if (c.protocol !== Is)
    return ll("Plugin UI message protocol is missing or invalid.");
  if (c.version !== Ps)
    return {
      ok: !1,
      error: {
        code: Ch.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(c.version)}.`
      }
    };
  if (typeof c.kind != "string" || !vy.has(c.kind))
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
function yy() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (jh += 1, `hana-plugin-${Date.now()}-${jh}`);
}
function gy() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function py(c) {
  if (!c)
    return null;
  try {
    return new URL(c).origin;
  } catch {
    return null;
  }
}
function by(c, f) {
  if (f)
    return f;
  const d = new URLSearchParams(c.location.search).get("hana-host-origin");
  return d || (py(c.document.referrer) ?? "*");
}
function xy(c) {
  const f = new URLSearchParams(c.location.search);
  return {
    theme: f.get("hana-theme") ?? void 0,
    cssUrl: f.get("hana-css") ?? void 0
  };
}
function Sh(c, f, d) {
  return !(c.source !== f || d !== "*" && c.origin !== d);
}
function jy(c) {
  return typeof c == "string" ? { url: c } : c;
}
function Sy(c) {
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
function Ey(c) {
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
function Ny(c, f) {
  const d = wh(c), o = Ey(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/assets/${o}`;
}
function _y(c) {
  return new URLSearchParams(c.location.search).get(my) || null;
}
function Ty(c) {
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
  const S = E.split("/");
  for (const N of S) {
    if (!N)
      throw new Error("Invalid plugin API path.");
    let p;
    try {
      p = decodeURIComponent(N);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (p === "." || p === ".." || p.includes("/") || p.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const b = new URL(`http://hana.local/${d}`);
  return `${S.map((N) => encodeURIComponent(decodeURIComponent(N))).join("/")}${b.search}`;
}
function Dh(c, f) {
  const d = wh(c), o = Ty(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/${o}`;
}
function Ay(c, f, d) {
  const o = _y(c);
  if (!o)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const E = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!E)
    throw new Error("hana.api.fetch requires window.fetch.");
  const S = d ?? {}, b = new Headers(S.headers);
  return b.set(hy, o), E(Dh(c, f), {
    ...S,
    headers: b
  });
}
function zy(c = {}) {
  const f = c.targetWindow ?? gy(), d = c.parentWindow ?? f.parent, o = by(f, c.targetOrigin), E = c.requestTimeoutMs ?? 1e4, S = c.idFactory ?? yy;
  let b = xy(f);
  const q = /* @__PURE__ */ new Set();
  function N(x) {
    d.postMessage(x, o);
  }
  function p(x, L) {
    const Z = {
      protocol: Is,
      version: Ps,
      kind: "event",
      type: x
    };
    L !== void 0 && (Z.payload = L), N(Z);
  }
  function D(x) {
    if (!Sh(x, d, o))
      return;
    const L = bh(x.data);
    if (!L.ok)
      return;
    const Z = L.value;
    if (Z.kind !== "event" || Z.type !== "hana.theme.changed" || typeof Z.payload != "object" || Z.payload === null)
      return;
    const P = Z.payload;
    b = {
      theme: typeof P.theme == "string" ? P.theme : b.theme,
      cssUrl: typeof P.cssUrl == "string" ? P.cssUrl : b.cssUrl
    };
    for (const te of q)
      te(b);
  }
  function A(x, L, Z = {}) {
    const P = S(), te = Z.timeoutMs ?? E;
    return new Promise((pe, Ce) => {
      const ce = () => {
        f.removeEventListener("message", me), f.clearTimeout(ve);
      }, me = ($) => {
        if (!Sh($, d, o))
          return;
        const Y = bh($.data);
        if (!Y.ok)
          return;
        const ie = Y.value;
        ie.id !== P || ie.type !== x || (ie.kind === "response" && (ce(), pe(ie.payload)), ie.kind === "error" && ie.error && (ce(), Ce(new xh(ie.error))));
      }, ve = f.setTimeout(() => {
        ce(), Ce(new xh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${x}.`
        }));
      }, te);
      f.addEventListener("message", me);
      const de = {
        protocol: Is,
        version: Ps,
        id: P,
        kind: "request",
        type: x
      };
      L !== void 0 && (de.payload = L), N(de);
    });
  }
  return {
    ready(x) {
      p("hana.ready", x);
    },
    assets: {
      url(x) {
        return Ny(f, x);
      }
    },
    api: {
      url(x) {
        return Dh(f, x);
      },
      fetch(x, L) {
        return Ay(f, x, L);
      }
    },
    ui: {
      resize(x) {
        p(Nl.UI_RESIZE, x);
      }
    },
    theme: {
      getSnapshot() {
        return { ...b };
      },
      subscribe(x) {
        return q.size === 0 && f.addEventListener("message", D), q.add(x), x({ ...b }), () => {
          q.delete(x), q.size === 0 && f.removeEventListener("message", D);
        };
      }
    },
    host: {
      request: A
    },
    toast: {
      show(x, L) {
        return A(Nl.TOAST_SHOW, x, L);
      }
    },
    external: {
      open(x, L) {
        return A(Nl.EXTERNAL_OPEN, jy(x), L);
      }
    },
    clipboard: {
      writeText(x, L) {
        return A(Nl.CLIPBOARD_WRITE_TEXT, Sy(x), L);
      }
    },
    resources: {
      open(x, L) {
        return A(Nl.RESOURCE_OPEN, x, L);
      },
      pick(x = {}, L) {
        return A(Nl.RESOURCE_PICK, x, L);
      },
      requestAccess(x, L) {
        return A(Nl.RESOURCE_REQUEST_ACCESS, x, L);
      }
    }
  };
}
let Eh = null;
function At() {
  return Eh ??= zy(), Eh;
}
const ur = {
  ready(c) {
    return At().ready(c);
  },
  assets: {
    url(c) {
      return At().assets.url(c);
    }
  },
  api: {
    url(c) {
      return At().api.url(c);
    },
    fetch(c, f) {
      return At().api.fetch(c, f);
    }
  },
  ui: {
    resize(c) {
      return At().ui.resize(c);
    }
  },
  theme: {
    getSnapshot() {
      return At().theme.getSnapshot();
    },
    subscribe(c) {
      return At().theme.subscribe(c);
    }
  },
  host: {
    request(c, f, d) {
      return At().host.request(c, f, d);
    }
  },
  toast: {
    show(c, f) {
      return At().toast.show(c, f);
    }
  },
  external: {
    open(c, f) {
      return At().external.open(c, f);
    }
  },
  clipboard: {
    writeText(c, f) {
      return At().clipboard.writeText(c, f);
    }
  },
  resources: {
    open(c, f) {
      return At().resources.open(c, f);
    },
    pick(c, f) {
      return At().resources.pick(c, f);
    },
    requestAccess(c, f) {
      return At().resources.requestAccess(c, f);
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
}, Cy = {
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
function wy({ mode: c = "inherit", theme: f, className: d, style: o, children: E, "data-testid": S = "hana-plugin-theme", ...b }) {
  const q = typeof f == "string" ? f : void 0, N = Dy(c, f);
  return i.jsx("div", { ...b, "data-testid": S, className: il("hana-plugin-theme", d), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? q : void 0, style: { ...N, ...o }, children: E });
}
function Dy(c, f) {
  if (c === "inherit")
    return {};
  const d = My(c, f), o = {};
  for (const [E, S] of Object.entries(Cy)) {
    const b = d?.[E];
    b && (o[S] = b);
  }
  return o;
}
function My(c, f) {
  if (typeof f == "string")
    return Nh[f];
  if (f)
    return f;
  if (c === "hana")
    return Nh["warm-paper"];
}
w.forwardRef(function({ variant: f = "secondary", size: d = "md", loading: o = !1, iconLeft: E, iconRight: S, disabled: b, className: q, children: N, type: p = "button", ...D }, A) {
  return i.jsxs("button", { ...D, ref: A, type: p, disabled: b || o, className: il("hana-plugin-button", `hana-plugin-button-${f}`, `hana-plugin-button-${d}`, o && "hana-plugin-button-loading", q), children: [o ? i.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : E, N && i.jsx("span", { className: "hana-plugin-button-label", children: N }), !o && S] });
});
w.forwardRef(function({ label: f, size: d = "md", variant: o = "ghost", className: E, children: S, type: b = "button", ...q }, N) {
  return i.jsx("button", { ...q, ref: N, type: b, "aria-label": f, title: q.title || f, className: il("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${o}`, E), children: S });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: S, inputClassName: b, ...q }, N) {
  const p = w.useId(), D = E || p;
  return i.jsx(Mh, { label: f, hint: d, error: o, htmlFor: D, className: S, children: i.jsx("input", { ...q, ref: N, id: D, "aria-invalid": !!o, className: il("hana-plugin-input", b) }) });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: S, textareaClassName: b, rows: q = 4, ...N }, p) {
  const D = w.useId(), A = E || D;
  return i.jsx(Mh, { label: f, hint: d, error: o, htmlFor: A, className: S, children: i.jsx("textarea", { ...N, ref: p, id: A, rows: q, "aria-invalid": !!o, className: il("hana-plugin-textarea", b) }) });
});
w.forwardRef(function({ checked: f, onChange: d, label: o, disabled: E, className: S, onClick: b, type: q = "button", ...N }, p) {
  const D = typeof o == "string" ? o : N["aria-label"];
  return i.jsxs("span", { className: il("hana-plugin-switch-wrap", S), children: [i.jsx("button", { ...N, ref: p, type: q, role: "switch", "aria-checked": f, "aria-label": D, disabled: E, className: il("hana-plugin-switch", f && "hana-plugin-switch-on"), onClick: (A) => {
    b?.(A), !A.defaultPrevented && !E && d?.(!f);
  }, children: i.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), o && i.jsx("span", { className: "hana-plugin-switch-label", children: o })] });
});
function Mh({ label: c, hint: f, error: d, htmlFor: o, className: E, children: S }) {
  return i.jsxs("div", { className: il("hana-plugin-field", E), children: [c && i.jsx("label", { className: "hana-plugin-field-label", htmlFor: o, children: c }), f && i.jsx("div", { className: "hana-plugin-field-hint", children: f }), S, d && i.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const Oh = /^\d{4}-\d{2}-\d{2}$/;
function _l(c, f) {
  if (!Oh.test(c)) return c;
  const d = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + f), d.toISOString().slice(0, 10);
}
function cr(c) {
  const f = String(c || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: f[0] || "",
    end: f[1] || f[0] || ""
  };
}
function er(c) {
  const f = (/* @__PURE__ */ new Date(`${c}T12:00:00Z`)).getUTCDay();
  return f === 0 ? 6 : f - 1;
}
function Uh(c, f) {
  return Array.from({ length: f }, (d, o) => _l(c, o));
}
function tr(c, f) {
  const o = cr(c).start || f, E = _l(o, -er(o));
  return Uh(E, 7);
}
function Rh(c, f, d = 3) {
  const o = Math.max(1, Math.floor(d)), E = Math.max(0, Math.floor(f)), S = c.slice(E * o, E * o + o);
  return [...S, ...Array(Math.max(0, o - S.length)).fill(null)];
}
function Oy(c, f) {
  const o = cr(c).start || f, E = Oh.test(o) ? `${o.slice(0, 7)}-01` : f, S = /* @__PURE__ */ new Date(`${E}T12:00:00Z`);
  S.setUTCMonth(S.getUTCMonth() + 1, 1);
  const b = new Date(S);
  b.setUTCDate(b.getUTCDate() - 1);
  const q = b.toISOString().slice(0, 10), N = _l(E, -er(E)), p = 6 - er(q), D = _l(q, p), A = Math.round(((/* @__PURE__ */ new Date(`${D}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${N}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Uh(N, A);
}
function fi(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function oi(c) {
  if (!c || c.length < 16) return null;
  const f = Number(c.slice(11, 13)), d = Number(c.slice(14, 16));
  return !Number.isFinite(f) || !Number.isFinite(d) ? null : f * 60 + d;
}
function qh(c) {
  const f = c.map((S) => oi(S.start_at || S.deadline_at)).filter((S) => S !== null), d = c.map((S) => {
    const b = oi(S.end_at);
    if (b !== null) return b;
    const q = oi(S.start_at || S.deadline_at);
    return q === null ? null : q + Number(S.duration || S.estimated_minutes || 45);
  }).filter((S) => S !== null), o = f.length ? Math.floor(Math.min(...f) / 60) - 1 : 10, E = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, o)),
    endHour: Math.min(24, Math.max(22, E))
  };
}
function Hh(c, f, d, o = 56) {
  const E = oi(c.start_at || c.deadline_at);
  if (E === null) return null;
  const b = oi(c.end_at) ?? E + Number(c.duration || c.estimated_minutes || 45), q = Math.max(f * 60, E), N = Math.min(d * 60, Math.max(b, q + 30));
  return {
    top: (q - f * 60) / 60 * o,
    height: Math.max(30, (N - q) / 60 * o)
  };
}
const Uy = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消", "已调课"]), Ry = /* @__PURE__ */ new Set(["cancelled", "deleted", "removed", "void", "已取消", "已调课", "已删除", "删除"]);
function qy(c) {
  const f = /* @__PURE__ */ new Map();
  for (const d of c) {
    const o = String(d.status || "").trim().toLowerCase();
    if (Ry.has(o)) continue;
    const E = d.start_at || d.deadline_at || d.window_start || "", S = String(d.title || "").trim().replace(/\s+/g, " ").toLowerCase(), b = E ? [d.domain, S, E, d.end_at || "", d.duration || d.estimated_minutes || ""].join("|") : `id:${d.id}`, q = f.get(b);
    (!q || ["completed", "已完成"].includes(d.status) && !["completed", "已完成"].includes(q.status)) && f.set(b, d);
  }
  return [...f.values()];
}
function Hy(c) {
  const f = c.filter((o) => !Uy.has(o.status) && o.start_at && o.end_at).map((o) => ({ item: o, start: new Date(o.start_at).getTime(), end: new Date(o.end_at).getTime() })).filter((o) => Number.isFinite(o.start) && Number.isFinite(o.end) && o.end > o.start).sort((o, E) => o.start - E.start || o.end - E.end), d = [];
  for (let o = 0; o < f.length; o += 1) {
    const E = f[o];
    for (let S = o + 1; S < f.length; S += 1) {
      const b = f[S];
      if (b.start >= E.end) break;
      if (E.item.id === b.item.id || b.end <= E.start) continue;
      const q = [E.item.domain, b.item.domain].sort().join("-"), N = q === "course-course" ? "course-course" : q === "affair-affair" ? "affair-affair" : "course-affair";
      d.push({
        id: `${E.item.id}:${b.item.id}`,
        kind: N,
        start: new Date(Math.max(E.start, b.start)).toISOString(),
        end: new Date(Math.min(E.end, b.end)).toISOString(),
        left: E.item,
        right: b.item
      });
    }
  }
  return d;
}
function sr(c) {
  const f = c.map((S) => {
    const b = S.start_at || S.deadline_at, q = b ? new Date(b).getTime() : Number.NaN, N = S.end_at ? new Date(S.end_at).getTime() : Number.NaN, p = Number.isFinite(N) ? N : q + Number(S.duration || S.estimated_minutes || 45) * 6e4;
    return { item: S, start: q, end: p };
  }).filter((S) => Number.isFinite(S.start)).sort((S, b) => S.start - b.start || S.end - b.end), d = [], o = f.map((S) => {
    let b = d.findIndex((q) => q <= S.start);
    return b < 0 && (b = d.length), d[b] = S.end, { ...S, lane: b };
  }), E = Math.max(1, d.length);
  return o.map((S) => ({ ...S, laneCount: E }));
}
function By(c, f) {
  return c && typeof c == "object" && "error" in c && typeof c.error == "string" && c.error.trim() ? c.error.trim() : f;
}
async function ky(c) {
  const f = await c.text();
  let d = null;
  if (f.trim())
    try {
      d = JSON.parse(f);
    } catch {
      throw new Error(c.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${c.status}）`);
    }
  if (!c.ok)
    throw new Error(By(d, `请求失败（HTTP ${c.status}）`));
  if (!d || typeof d != "object")
    throw new Error("插件接口没有返回有效数据");
  return d;
}
async function nt(c, f) {
  let d;
  try {
    d = await ur.api.fetch(c, f);
  } catch (o) {
    const E = o instanceof Error ? o.message : String(o || "未知错误");
    throw new Error(`页面会话请求失败：${E}`);
  }
  return ky(d);
}
function ar() {
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
}, Ly = {
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
function Yy(c) {
  const f = c;
  if (!f || !Array.isArray(f.items) || !Array.isArray(f.pending) || !Array.isArray(f.courses) || !Array.isArray(f.affairs) || !Array.isArray(f.students) || !Array.isArray(f.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return f;
}
function Vy(c) {
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
class Gy extends w.Component {
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
function Bt(c, f) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...f
  }).format(new Date(c)) : "未定";
}
function za(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Xy(c) {
  return c ? `更新于 ${za(c)}` : "尚未更新";
}
function Bh(c) {
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
function vt(c) {
  return c.start_at || c.deadline_at || null;
}
function lr(c) {
  return ["completed", "已完成"].includes(c) ? "finished" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "待处理", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function rr(c, f) {
  if (!f || c.domain !== "course") return !1;
  const d = (c.start_at || "").slice(0, 10);
  return !!d && d < f && c.status === "待上课";
}
function or(c, f) {
  if (rr(c, f)) return "state-pending";
  const d = lr(c.status);
  return d === "finished" ? "state-finished" : d === "muted" ? "state-neutral" : d === "error" ? "state-error" : d === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function fr(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function di(c) {
  try {
    const f = window.sessionStorage.getItem(`laosu-workbench.cache.${c}`);
    return f ? JSON.parse(f) : null;
  } catch {
    return null;
  }
}
function Cu(c, f) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${c}`, JSON.stringify(f));
  } catch {
  }
}
function Qy() {
  const c = new URLSearchParams(window.location.search), f = c.get("tab") || "overview", d = c.get("scope") || "week", o = "overview", E = ["week", "month"].includes(d) ? d : "week", S = c.get("preview"), [b, q] = w.useState(o), [N, p] = w.useState(E), [D, A] = w.useState(f === "actions" || !!S), [x, L] = w.useState(null), Z = x !== null, [P, te] = w.useState(null), [pe, Ce] = w.useState(!0), [ce, me] = w.useState(""), [ve, de] = w.useState(null), [$, Y] = w.useState(null), [ie, k] = w.useState({ text: "", nonce: 0 }), [G, I] = w.useState(!1), [ae, Ee] = w.useState(""), [we, g] = w.useState(null), [B, K] = w.useState({}), [y, W] = w.useState(!1), [h, M] = w.useState(null), [X, F] = w.useState(0), [ye, xe] = w.useState(null), [Ne, We] = w.useState(null), V = w.useRef(null), qe = w.useRef(null), he = w.useRef(ar()), J = w.useRef(ar()), zt = w.useRef(/* @__PURE__ */ new Set()), at = w.useRef(null), bt = w.useRef(!1), Ct = w.useRef(!1), ca = w.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), yt = w.useCallback(async (U = N, Q = {}) => {
    const le = Q.silent === !0, ue = he.current.begin();
    le || (Ce(!0), me(""));
    try {
      const ge = new URLSearchParams({ scope: U });
      Q.fresh && ge.set("fresh", "1");
      const Oe = Yy(await nt(`api/dashboard?${ge.toString()}`));
      return he.current.isCurrent(ue) ? (te(Oe), Cu(`dashboard.${U}`, Oe), !0) : null;
    } catch (ge) {
      return he.current.isCurrent(ue) ? (le || me(ge.message || "读取失败"), !1) : null;
    } finally {
      he.current.isCurrent(ue) && !le && Ce(!1);
    }
  }, [N]);
  w.useEffect(() => {
    const U = di(`dashboard.${E}`);
    U && (te(U), Ce(!1)), yt(E, { fresh: !0, silent: !!U });
  }, []), w.useEffect(() => {
    const U = (Q) => {
      Q.target instanceof HTMLElement && !V.current?.contains(Q.target) && (at.current = Q.target);
    };
    return window.addEventListener("pointerdown", U, !0), () => window.removeEventListener("pointerdown", U, !0);
  }, []), w.useEffect(() => {
    S && (A(!0), nt(`api/preview/${encodeURIComponent(S)}`).then(de).catch((U) => {
      de({ ok: !1, error: U.message });
    }));
  }, [S]), w.useEffect(() => {
    if (!D) return;
    const U = V.current, Q = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !bt.current) {
      const se = new URL(window.location.href);
      se.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", se), bt.current = !0;
    }
    const le = window.setTimeout(() => {
      (($ ? U?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : U?.querySelector(".ai-composer textarea")) || U?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), $ && U?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), ue = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((se) => se.getClientRects().length > 0 && !se.closest("[hidden]")), ge = (se) => {
      if (se.key === "Escape") {
        se.preventDefault(), it();
        return;
      }
      if (se.key !== "Tab") return;
      const wt = ue();
      if (!wt.length) return;
      const ta = wt[0], aa = wt[wt.length - 1];
      U?.contains(document.activeElement) ? se.shiftKey && document.activeElement === ta ? (se.preventDefault(), aa.focus()) : !se.shiftKey && document.activeElement === aa && (se.preventDefault(), ta.focus()) : (se.preventDefault(), (se.shiftKey ? aa : ta).focus());
    }, Oe = () => {
      bt.current && (bt.current = !1, A(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", ge), window.addEventListener("popstate", Oe), () => {
      window.clearTimeout(le), document.body.style.overflow = Q, window.removeEventListener("keydown", ge), window.removeEventListener("popstate", Oe), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [D]), w.useEffect(() => {
    if (!Z) return;
    const U = qe.current, Q = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Ct.current) {
      const se = new URL(window.location.href);
      se.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", se), Ct.current = !0;
    }
    const le = window.setTimeout(() => U?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), ue = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((se) => se.getClientRects().length > 0 && !se.closest("[hidden]")), ge = (se) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (se.key === "Escape") {
        se.preventDefault(), kt();
        return;
      }
      if (se.key !== "Tab") return;
      const wt = ue();
      if (!wt.length) return;
      const ta = wt[0], aa = wt[wt.length - 1];
      U?.contains(document.activeElement) ? se.shiftKey && document.activeElement === ta ? (se.preventDefault(), aa.focus()) : !se.shiftKey && document.activeElement === aa && (se.preventDefault(), ta.focus()) : (se.preventDefault(), (se.shiftKey ? aa : ta).focus());
    }, Oe = () => {
      const se = new URL(window.location.href).searchParams.get("drawer");
      se === "context" || se === "actions" || !Ct.current || (Ct.current = !1, L(null));
    };
    return window.addEventListener("keydown", ge), window.addEventListener("popstate", Oe), () => {
      window.clearTimeout(le), document.body.style.overflow = Q, window.removeEventListener("keydown", ge), window.removeEventListener("popstate", Oe), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [Z]), w.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", b);
    const U = () => {
      ca.current[b] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${b}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", U), () => window.removeEventListener("pagehide", U);
  }, [b]), w.useEffect(() => {
    if (Ne?.tab === b) return;
    const U = ca.current[b] || 0;
    let Q = 0, le, ue = !1;
    const ge = () => {
      ue = !0;
    }, Oe = () => {
      ue || (window.scrollTo({ top: U, behavior: "auto" }), Q += 1, Math.abs(window.scrollY - U) > 3 && Q < 15 && (le = window.setTimeout(Oe, 90)));
    }, se = window.requestAnimationFrame(Oe);
    return window.addEventListener("wheel", ge, { passive: !0 }), window.addEventListener("touchstart", ge, { passive: !0 }), window.addEventListener("keydown", ge), () => {
      ue = !0, window.cancelAnimationFrame(se), le && window.clearTimeout(le), window.removeEventListener("wheel", ge), window.removeEventListener("touchstart", ge), window.removeEventListener("keydown", ge);
    };
  }, [b]), w.useEffect(() => {
    if (!Ne || Ne.tab !== b) return;
    let U = 0, Q, le, ue;
    const ge = () => {
      const se = Array.from(document.querySelectorAll("[data-item-id]")).find((wt) => wt.dataset.itemId === Ne.id);
      if (!se && U < 20) {
        U += 1, Q = window.setTimeout(ge, 60);
        return;
      }
      if (!se) {
        We(null);
        return;
      }
      ue = se, se.classList.add("target-highlight"), se.setAttribute("tabindex", "-1"), se.scrollIntoView({ behavior: "smooth", block: "center" }), se.focus({ preventScroll: !0 }), le = window.setTimeout(() => {
        se.classList.remove("target-highlight"), se.removeAttribute("tabindex"), We(null);
      }, 2400);
    }, Oe = window.setTimeout(ge, 50);
    return () => {
      window.clearTimeout(Oe), Q && window.clearTimeout(Q), le && window.clearTimeout(le), ue?.classList.remove("target-highlight"), ue?.removeAttribute("tabindex");
    };
  }, [Ne, b, P?.observedAt]), w.useEffect(() => {
    if (!ae) return;
    const U = window.setTimeout(() => Ee(""), 4800);
    return () => window.clearTimeout(U);
  }, [ae]);
  const st = w.useRef(null);
  w.useEffect(() => {
    const U = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const Q = await nt("api/data-revision");
          if (!Q?.ok || typeof Q.revision != "number") return;
          if (st.current === null) {
            st.current = Q.revision;
            return;
          }
          Q.revision !== st.current && (st.current = Q.revision, pn({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(U);
  }, [N]);
  const sa = w.useMemo(
    () => (P?.pending ?? []).filter((U) => !["completed", "cancelled"].includes(U.status)),
    [P]
  );
  async function Ca(U) {
    const Q = new URL(window.location.href);
    Q.searchParams.set("scope", U), window.history.replaceState(window.history.state, "", Q), p(U);
    const le = di(`dashboard.${U}`);
    if (le) {
      te(le), Ce(!1), yt(U, { fresh: !0, silent: !0 });
      return;
    }
    await yt(U);
  }
  function ra(U) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const Q = document.activeElement;
    ((Q instanceof HTMLElement && Q !== document.body && !V.current?.contains(Q) ? Q : null) || U || at.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function ul(U) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const Q = document.activeElement, le = Q instanceof HTMLElement && Q !== document.body && !qe.current?.contains(Q) ? Q : null;
    (U || le || at.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function Me(U, Q) {
    ul(Q), L({ kind: "item", item: U });
  }
  function wa(U, Q, le) {
    ul(Q), L({ kind: "day", date: U, items: le });
  }
  function mi(U) {
    ul(U), L({ kind: "system" });
  }
  function Al() {
    const U = /* @__PURE__ */ Symbol("workbench-operation");
    return zt.current.add(U), I(!0), U;
  }
  function Da(U) {
    zt.current.delete(U), I(zt.current.size > 0);
  }
  function zl() {
    J.current.invalidate(), de(null);
  }
  function vi(U) {
    J.current.invalidate(), de(U);
  }
  function wu() {
    ra(document.querySelector(".ai-action-button")), Y(null), k({ text: "", nonce: Date.now() }), zl(), A(!0);
  }
  function yi(U) {
    ra(), Y(null), k({ text: U, nonce: Date.now() }), zl(), A(!0);
  }
  function Ma(U) {
    ra(), Y(U), zl(), A(!0);
  }
  function it() {
    if (bt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    bt.current = !1, A(!1);
  }
  function kt() {
    if (Ct.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    Ct.current = !1, L(null);
  }
  async function gt(U, Q) {
    if (!we) {
      g(Q.id);
      try {
        const le = U === "courseCancel" ? await nt("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: Q.title, date: Q.start_at?.slice(0, 10), time: Q.start_at?.slice(11, 16), reason: "没上" })
        }) : await nt("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: Q.id, expectedVersion: Q.version })
        });
        if (!le.ok) throw new Error(le.error || "处理未完成");
        U === "affairComplete" ? (K((ue) => ({ ...ue, [Q.id]: { ok: !0, text: le.message || "已完成", buttonLabel: "已完成" } })), Ee(`${Q.title} 已完成`)) : Ee(`${Q.title} ${Q.start_at?.slice(5, 16) ?? ""} 已记录没上`), await yt(N);
      } catch (le) {
        U === "affairComplete" && K((ue) => ({ ...ue, [Q.id]: { ok: !1, text: `处理失败：${le.message || "未知错误"}` } })), Ee(`处理失败：${le.message || "未知错误"}`);
      } finally {
        g(null);
      }
    }
  }
  async function pn(U = {}) {
    const Q = U.silent === !0;
    Q || Ee("正在刷新数据…");
    const le = await yt(N, { ...U, fresh: !Q });
    le === !0 ? (K({}), M(null), F((ue) => ue + 1), Q || Ee("本地课程与事务数据已刷新")) : le === !1 && !Q && Ee("刷新失败，请查看页面错误");
  }
  async function Du(U) {
    const Q = J.current.begin(), le = Al();
    de(null);
    try {
      const ue = await nt("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(U)
      });
      if (!J.current.isCurrent(Q)) return;
      de({ ...ue, operation: String(U.operation || ""), input: U });
    } catch (ue) {
      J.current.isCurrent(Q) && de({ ok: !1, error: ue.message });
    } finally {
      Da(le);
    }
  }
  async function Mu(U) {
    if (!we) {
      g(U.id), K((Q) => ({ ...Q, [U.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const Q = await nt("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: U.id, expectedVersion: U.version })
        });
        if (!Q.ok) throw new Error(Q.error || "没约上的处理未完成");
        const le = Q.outcome?.candidateDate, ue = le ? `已安排 ${le.slice(5)}` : "已处理";
        K((ge) => ({ ...ge, [U.id]: {
          ok: !0,
          text: Q.message || "已推进到下一次尝试",
          buttonLabel: ue,
          undo: Q.outcome ? { expectedVersion: Q.outcome.version } : void 0
        } })), await yt(N);
      } catch (Q) {
        const le = Q.message || "没约上的处理失败";
        K((ue) => ({ ...ue, [U.id]: { ok: !1, text: `处理失败：${le}`, buttonLabel: "重试" } }));
      } finally {
        g(null);
      }
    }
  }
  async function Cl(U) {
    if (we) return;
    const Q = B[U.id]?.undo;
    g(U.id), K((le) => ({ ...le, [U.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const le = await nt("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: U.id, expectedVersion: Q?.expectedVersion ?? U.version })
      });
      if (!le.ok) throw new Error(le.error || "恢复上一候选日未完成");
      const ue = le.outcome?.candidateDate;
      K((ge) => ({ ...ge, [U.id]: {
        ok: !0,
        text: le.message || "已恢复到上一候选日",
        buttonLabel: ue ? `回到 ${ue.slice(5)}` : "已恢复"
      } })), await yt(N);
    } catch (le) {
      const ue = le.message || "恢复上一候选日失败";
      K((ge) => ({ ...ge, [U.id]: { ok: !1, text: `恢复失败：${ue}`, buttonLabel: "重试" } }));
    } finally {
      g(null);
    }
  }
  async function wl() {
    if (!ve?.token || !ve.canCommit) return;
    const U = J.current.begin(), Q = Al(), le = ve.operation || $?.operation;
    try {
      const ue = await nt("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: ve.token })
      }), ge = { ok: ue.ok, summary: ue.summary, message: `${ue.message || ""}${ue.exportMessage ? `
导出：${ue.exportMessage}` : ""}${ue.syncMessage ? `
日历：${ue.syncMessage}` : ""}`, result: ue, operation: le, input: ve.input, committed: !!ue.ok };
      await yt(N), F((Oe) => Oe + 1), J.current.isCurrent(U) && de(ge);
    } catch (ue) {
      J.current.isCurrent(U) && de({ ok: !1, error: ue.message });
    } finally {
      Da(Q);
    }
  }
  async function Dl() {
    const U = ve?.batchItems ?? [];
    if (!U.length) return;
    const Q = J.current.begin(), le = Al(), ue = /* @__PURE__ */ new Map();
    try {
      for (const ge of U) {
        if (!ge.canCommit) {
          ue.set(ge.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const Oe = await nt("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: ge.token })
          });
          if (ue.set(ge.token, { ok: !!Oe.ok, message: Oe.message || (Oe.ok ? "已执行" : "执行失败") }), !Oe.ok) break;
        } catch (Oe) {
          ue.set(ge.token, { ok: !1, message: Oe.message || "提交失败" });
          break;
        }
      }
      await yt(N), F((ge) => ge + 1), J.current.isCurrent(Q) && ve && de({
        ...ve,
        ok: U.every((ge) => ue.get(ge.token)?.ok === !0),
        committed: !0,
        message: U.map((ge) => {
          const Oe = ue.get(ge.token);
          return `${Oe?.ok ? "✓" : Oe ? "✗" : "·"} ${ge.summary}：${Oe?.message || "未执行"}`;
        }).join(`
`),
        batchItems: U.map((ge) => {
          const Oe = ue.get(ge.token);
          return { ...ge, canCommit: !1, resultOk: Oe?.ok ?? !1, message: Oe?.message || "未执行" };
        })
      });
    } finally {
      Da(le);
    }
  }
  return /* @__PURE__ */ i.jsx(wy, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ i.jsxs("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-main", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "topbar", "data-ui": "topbar", children: [
      /* @__PURE__ */ i.jsx("nav", { className: "tabbar", "aria-label": "日程视图", "data-ui": "primary-navigation", children: Object.keys(_h).map((U) => /* @__PURE__ */ i.jsx("button", { type: "button", className: N === U ? "tab active" : "tab", "data-ui-role": "nav-item", "data-ui-id": `nav-${U}`, "aria-current": N === U ? "page" : void 0, disabled: pe, onClick: () => {
        Ca(U);
      }, children: _h[U] }, U)) }),
      /* @__PURE__ */ i.jsxs("div", { className: "top-actions", "data-ui": "top-actions", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: D ? "ai-action-button active" : "ai-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-ai", onClick: wu, "aria-expanded": D, children: "✦ AI 操作" }),
        /* @__PURE__ */ i.jsx("span", { className: "updated-at", children: Xy(P?.observedAt) }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${P?.health?.ok ? "health good" : "health bad"} health-button${x?.kind === "system" ? " active" : ""}`, "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-system-status", onClick: (U) => mi(U.currentTarget), "aria-expanded": x?.kind === "system", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          P?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button refresh-local-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "refresh-workbench", onClick: () => {
          pn();
        }, "aria-label": "刷新本地数据", disabled: pe, children: "↻ 刷新本地数据" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: "main-area", children: [
      ae && /* @__PURE__ */ i.jsx("div", { className: "toast", role: "status", children: ae }),
      ce && /* @__PURE__ */ i.jsx(Tl, { tone: "error", title: "读取失败", text: ce }),
      P?.warnings?.length ? /* @__PURE__ */ i.jsx(Tl, { tone: "warn", title: "有警告", text: P.warnings.join("；") }) : null,
      pe && !P ? /* @__PURE__ */ i.jsx(dr, {}) : null,
      /* @__PURE__ */ i.jsxs("div", { className: pe && P ? "view-content scope-loading" : "view-content", "aria-busy": pe && !!P, inert: pe && !!P, children: [
        P && b === "overview" && /* @__PURE__ */ i.jsx(Zy, { dashboard: P, onInspect: Me, onOpenDay: wa }),
        b === "planning" && /* @__PURE__ */ i.jsx(Wy, { onAction: Ma, onAskAi: yi, refreshKey: X, sectionHint: ye, scheduleText: P?.scheduleText, onDataChanged: pn }),
        b === "affairs" && /* @__PURE__ */ i.jsx(tg, { onQuick: gt, onAskAi: yi, onPrepare: Ma, onInspect: Me, onRetry: Mu, onRetryPrev: Cl, retryingId: we, feedback: B, refreshKey: X, observedAt: P?.observedAt ?? "", onOpenDay: (U, Q, le) => wa(U, le, Q), localDate: P?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "context-drawer-backdrop", hidden: !Z, onMouseDown: (U) => {
      U.currentTarget === U.target && kt();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: qe, className: "context-drawer", "data-ui": "drawer", "data-ui-id": "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: kt, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: x?.kind === "system" ? "运行状态" : x?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ i.jsx("h2", { children: x?.kind === "system" ? "系统状态" : x?.kind === "day" ? Bt(`${x.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : x?.item.title }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "context-drawer-body", children: x && P && /* @__PURE__ */ i.jsx(ug, { view: x, dashboard: P }) })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "action-drawer-backdrop", hidden: !D, onMouseDown: (U) => {
      U.currentTarget === U.target && it();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: V, className: "action-drawer", "data-ui": "drawer", "data-ui-id": "ai-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: it, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ i.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ i.jsx(
        ag,
        {
          pending: sa,
          students: P?.students ?? [],
          preset: $,
          aiDraft: ie,
          preview: ve,
          busy: G,
          onPreview: Du,
          onAiPreview: vi,
          onCommit: wl,
          onCommitBatch: Dl,
          onClear: zl,
          onClose: it
        }
      ) })
    ] }) })
  ] }) });
}
function Zy({ dashboard: c, onInspect: f, onOpenDay: d }) {
  const o = w.useMemo(() => {
    const A = /* @__PURE__ */ new Map();
    return c.courses.forEach((x) => A.set(x.id, { ...x, domain: "course" })), c.affairs.forEach((x) => A.set(x.id, { ...x, domain: "affair" })), qy([...A.values()]).sort((x, L) => String(vt(x) || "").localeCompare(String(vt(L) || "")));
  }, [c.courses, c.affairs]), S = o.filter((A) => A.domain === "course").filter((A) => !["已取消", "已调课", "cancelled"].includes(A.status)), b = S.filter((A) => ["已完成", "completed"].includes(A.status)), q = S.reduce((A, x) => A + Number(x.duration || 0), 0), N = b.reduce((A, x) => A + Number(x.duration || 0), 0), p = w.useMemo(() => Hy(o), [o]), D = o.filter((A) => A.domain === "affair" && A.start_at && !A.end_at && !["completed", "cancelled", "已完成", "已取消"].includes(A.status));
  return /* @__PURE__ */ i.jsx("div", { className: "view-stack read-only-schedule", children: /* @__PURE__ */ i.jsxs("div", { className: "panel wide calendar-panel", children: [
    /* @__PURE__ */ i.jsx(ea, { title: c.scope === "week" ? "周课表" : "月课表", meta: Bh(c.range) }),
    c.scope === "month" && /* @__PURE__ */ i.jsxs("section", { className: "month-course-summary", "aria-label": "本月课时统计", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { children: "排定课程" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          S.length,
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
          Th(N)
        ] })
      ] })
    ] }),
    (p.length > 0 || D.length > 0) && /* @__PURE__ */ i.jsxs("section", { className: p.length ? "schedule-conflict-alert error" : "schedule-conflict-alert warn", "aria-label": "日程冲突检查", children: [
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
        Bt(A.start, { month: "numeric", day: "numeric" }),
        " ",
        za(A.start),
        "–",
        za(A.end)
      ] }, A.id)),
      D.length > 0 && /* @__PURE__ */ i.jsxs("p", { children: [
        D.length,
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
    c.scope === "week" ? /* @__PURE__ */ i.jsx($y, { items: o, range: c.range, localDate: c.localDate, onInspect: f }) : /* @__PURE__ */ i.jsx(Vh, { items: o, range: c.range, localDate: c.localDate, onOpenDay: d })
  ] }) });
}
function kh(c) {
  return sr(c)[0]?.laneCount || 1;
}
const Ky = 52, Jy = 150;
function Lh(c, f) {
  const [d, o] = w.useState(0);
  if (w.useEffect(() => {
    const b = c.current;
    if (!b || typeof ResizeObserver > "u") return;
    const q = new ResizeObserver((N) => {
      const p = N[0]?.contentRect.width;
      p && Number.isFinite(p) && o(p);
    });
    return q.observe(b), () => q.disconnect();
  }, [c]), f) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const E = Math.floor((d - Ky) / Jy), S = Math.max(1, Math.min(7, E));
  return { visibleDays: S, paginated: S < 7 };
}
function Yh() {
  const c = w.useRef(null), f = w.useRef(null), d = w.useCallback((S) => {
    if (S.button !== 0 || S.target.closest("button, article, a, input, select, textarea")) return;
    const b = c.current;
    !b || b.scrollWidth <= b.clientWidth || (f.current = { pointerId: S.pointerId, startX: S.clientX, scrollLeft: b.scrollLeft }, b.setPointerCapture(S.pointerId), b.classList.add("dragging"));
  }, []), o = w.useCallback((S) => {
    const b = c.current, q = f.current;
    !b || !q || q.pointerId !== S.pointerId || (b.scrollLeft = q.scrollLeft - (S.clientX - q.startX));
  }, []), E = w.useCallback((S) => {
    const b = c.current, q = f.current;
    !b || !q || q.pointerId !== S.pointerId || (b.hasPointerCapture(S.pointerId) && b.releasePointerCapture(S.pointerId), b.classList.remove("dragging"), f.current = null);
  }, []);
  return { ref: c, onPointerDown: d, onPointerMove: o, onPointerUp: E, onPointerCancel: E };
}
function $y({ items: c, range: f, localDate: d, onInspect: o }) {
  const E = w.useMemo(() => tr(f, d), [f, d]), S = Yh(), [b, q] = w.useState(0), [N, p] = w.useState(null), { visibleDays: D, paginated: A } = Lh(S.ref, !!N), x = Math.max(1, Math.ceil(7 / Math.max(1, D))), L = w.useMemo(
    () => N ? [N] : A ? Rh(E, b, D) : E,
    [E, b, N, A, D]
  );
  w.useEffect(() => {
    q(0);
  }, [f, D]), w.useEffect(() => {
    if (!N) return;
    const k = (G) => {
      G.key === "Escape" && p(null);
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [N]);
  const Z = w.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    return c.forEach((G) => {
      const I = fi(G);
      I && (I < d && ["已取消", "已调课", "cancelled"].includes(G.status) || k.set(I, [...k.get(I) || [], G]));
    }), k.forEach((G, I) => k.set(I, [...G].sort((ae, Ee) => String(vt(ae) || "").localeCompare(String(vt(Ee) || ""))))), k;
  }, [c, d]), P = w.useMemo(() => new Map(E.map((k) => [k, kh((Z.get(k) || []).filter((G) => G.start_at || G.deadline_at))])), [Z, E]), te = w.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    for (const G of E) {
      const I = (Z.get(G) || []).filter((ae) => ae.start_at || ae.deadline_at);
      k.set(G, sr(I));
    }
    return k;
  }, [Z, E]), pe = L.map((k) => k && P.get(k) || 1);
  pe.reduce((k, G) => k + G, 0);
  const Ce = `52px ${pe.map((k) => `minmax(0, ${k}fr)`).join(" ")}`, ce = c.filter((k) => k.start_at || k.deadline_at), me = L.length >= 7 ? ce : ce.filter((k) => L.includes(fi(k))), { startHour: ve, endHour: de } = qh(me), $ = N ? 92 : D >= 6 ? 64 : D >= 4 ? 72 : 84, Y = (de - ve) * $, ie = Array.from({ length: de - ve + 1 }, (k, G) => ve + G);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    N ? /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => p(null), children: "‹ 返回整周" }),
      /* @__PURE__ */ i.jsxs("strong", { children: [
        Bt(`${N}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
        " · 单日视图"
      ] }),
      /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true" })
    ] }) : A && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本页日期", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: b === 0, onClick: () => q((k) => Math.max(0, k - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ i.jsxs("strong", { children: [
        "第 ",
        b + 1,
        "/",
        x,
        " 页 · 每页 ",
        D,
        " 天"
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: b >= x - 1, onClick: () => q((k) => Math.min(x - 1, k + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "时间视图，点击日期标题聚焦到单日", ...S, children: /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: Ce }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-corner", children: "时间" }),
        L.map((k, G) => k ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: k === d ? "week-day-header today" : "week-day-header", onClick: () => p(k), "aria-label": `聚焦到 ${Bt(`${k}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ i.jsx("span", { children: Bt(`${k}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(k.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            Z.get(k)?.length || 0,
            " 项"
          ] })
        ] }, k) : /* @__PURE__ */ i.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${G}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: Ce }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-time-axis", style: { height: Y }, children: ie.map((k) => /* @__PURE__ */ i.jsxs("span", { style: { top: (k - ve) * $ }, children: [
          String(k).padStart(2, "0"),
          ":00"
        ] }, k)) }),
        L.map((k, G) => {
          if (!k) return /* @__PURE__ */ i.jsx("div", { className: "week-day-track empty-slot", style: { height: Y }, "aria-hidden": "true" }, `empty-${G}`);
          const I = te.get(k) || [];
          return /* @__PURE__ */ i.jsx("div", { className: k === d ? "week-day-track today" : "week-day-track", style: { height: Y }, children: I.map(({ item: ae, lane: Ee, laneCount: we }) => {
            const g = Hh(ae, ve, de, $);
            if (!g) return null;
            const B = 100 / we, K = ae.start_at || ae.deadline_at, y = rr(ae, d);
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `week-time-block ${ae.domain} ${or(ae, d)}${fr(ae) ? " temporary" : ""}`,
                style: { top: g.top, height: g.height, left: `calc(${Ee * B}% + 4px)`, width: `calc(${B}% - 8px)` },
                tabIndex: 0,
                role: "button",
                onClick: (W) => {
                  W.target.closest("button") || o(ae, W.currentTarget);
                },
                onKeyDown: (W) => {
                  (W.key === "Enter" || W.key === " ") && (W.preventDefault(), o(ae, W.currentTarget));
                },
                "data-item-id": ae.id,
                "aria-label": `${za(K)} ${ae.title}${y ? "（已过期待标记）" : ""}，${ae.domain === "course" ? `${ae.duration || "—"} 分钟课程` : "事务"}，打开详情`,
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    za(K),
                    " · ",
                    ae.title,
                    y ? "（过期）" : ""
                  ] }),
                  /* @__PURE__ */ i.jsx("span", { children: ae.domain === "course" ? `${ae.duration || "—"} 分钟 · 课程` : ae.estimated_minutes ? `${ae.estimated_minutes} 分钟 · 事务` : "事务" })
                ]
              },
              ae.id
            );
          }) }, k);
        })
      ] })
    ] }) })
  ] });
}
function Vh({ items: c, range: f, localDate: d, onOpenDay: o }) {
  const E = w.useMemo(() => Oy(f, d), [f, d]), S = (f.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), b = w.useMemo(() => {
    const N = /* @__PURE__ */ new Map();
    return c.forEach((p) => {
      const D = fi(p);
      D && (D < d && ["已取消", "已调课", "cancelled"].includes(p.status) || N.set(D, [...N.get(D) || [], p]));
    }), N.forEach((p, D) => N.set(D, [...p].sort((A, x) => String(vt(A) || "").localeCompare(String(vt(x) || ""))))), N;
  }, [c, d]), q = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ i.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ i.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "month-weekdays", children: q.map((N) => /* @__PURE__ */ i.jsxs("span", { children: [
      "周",
      N
    ] }, N)) }),
    /* @__PURE__ */ i.jsx("div", { className: "month-grid", children: E.map((N) => {
      const p = b.get(N) || [], D = ["month-cell"];
      return N.startsWith(S) || D.push("outside"), N === d && D.push("today"), /* @__PURE__ */ i.jsxs("button", { type: "button", className: D.join(" "), onClick: (A) => o(N, A.currentTarget), children: [
        /* @__PURE__ */ i.jsxs("header", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: Number(N.slice(8, 10)) }),
          /* @__PURE__ */ i.jsx("span", { children: p.length ? `${p.length} 项` : "" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "month-item-list", children: [
          p.slice(0, 3).map((A) => /* @__PURE__ */ i.jsxs("span", { className: `month-item ${A.domain} ${or(A, d)}${fr(A) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ i.jsx("i", {}),
            za(vt(A)) || "待定",
            " · ",
            A.title,
            rr(A, d) ? "（过期）" : ""
          ] }, A.id)),
          p.length > 3 && /* @__PURE__ */ i.jsxs("span", { className: "month-more", children: [
            "＋",
            p.length - 3,
            " 项"
          ] })
        ] })
      ] }, N);
    }) })
  ] }) });
}
function Fs(c) {
  const f = Math.floor(c / 60), d = c % 60;
  return String(f).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function Fy({ onAction: c, onAskAi: f, refreshKey: d = 0 }) {
  const [o, E] = w.useState(() => di("cockpit")), [S, b] = w.useState(!o), [q, N] = w.useState(""), p = w.useCallback(async (x = !1, L = !1) => {
    x || b(!0);
    try {
      const Z = await nt("api/cockpit" + (L ? "?fresh=1" : ""));
      return E(Z), Cu("cockpit", Z), N(""), !0;
    } catch (Z) {
      return N(Z?.message || "读取失败"), !1;
    } finally {
      b(!1);
    }
  }, []);
  w.useEffect(() => {
    p(!o);
  }, [p]), w.useEffect(() => {
    d > 0 && p(!0, !0);
  }, [d]);
  const D = w.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const Z of o?.students ?? [])
      x.has(Z.group) || x.set(Z.group, []), x.get(Z.group).push(Z);
    return ["本周已排", "已预留", "未排"].map((Z) => ({ label: Z, items: x.get(Z) ?? [] }));
  }, [o]);
  if (S && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (q && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx(Pt, { label: "驾驶舱读取", ok: !1, detail: q }) });
  const A = o?.localDate ?? "";
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ i.jsx(hi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
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
        /* @__PURE__ */ i.jsx(ea, { title: "候选学生" }),
        D.map((x) => /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            x.label,
            " · ",
            x.items.length
          ] }),
          x.items.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "（无）" }) : x.items.map((L) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: L.name }),
            /* @__PURE__ */ i.jsx("span", { className: "cockpit-zone", children: L.zone })
          ] }, L.name))
        ] }, x.label))
      ] }),
      /* @__PURE__ */ i.jsx("section", { className: "cockpit-canvas", children: o?.days.map((x) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day" + (x.date === A ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ i.jsx("strong", { children: x.weekday }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: x.date.slice(5) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-body", children: [
          x.courses.map((L, Z) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => c({ operation: "course_move", student: L.title, fromDate: x.date, fromTime: String(L.start).slice(11, 16) }), children: [
              /* @__PURE__ */ i.jsx("span", { children: L.title }),
              /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
                String(L.start).slice(11, 16),
                "–",
                String(L.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "cockpit-card-ai", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", title: "用一句话交给 AI 调时间", onClick: () => f("把" + L.title + " " + x.date + " " + String(L.start).slice(11, 16) + " 的这节课调一下时间"), children: "调时间" })
          ] }, "c" + Z)),
          x.reservations.map((L, Z) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => c({ operation: "reservation_update", id: L.id, student: L.student, date: x.date, time: String(L.start).slice(11, 16) }), children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              L.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
              String(L.start).slice(11, 16),
              "–",
              String(L.end).slice(11, 16)
            ] })
          ] }, "r" + Z)),
          x.gaps.map((L, Z) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + L.minutes + " 分钟，点击预留", onClick: () => c({ operation: "reservation_add", date: x.date, time: Fs(L.start) }), children: [
            Fs(L.start),
            "–",
            Fs(L.end),
            " 空档"
          ] }, "g" + Z)),
          x.courses.length === 0 && x.reservations.length === 0 && /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, x.date)) }),
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "实时诊断" }),
        /* @__PURE__ */ i.jsx(gn, { label: "本周课程", value: o?.diagnostics.courseCount ?? 0, hint: "共 " + (o?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ i.jsx(gn, { label: "有效预留", value: o?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          o?.diagnostics.dayGaps.map((x) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: x.weekday }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-zone", children: [
              x.gapMinutes,
              " 分钟"
            ] })
          ] }, x.date))
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            o?.diagnostics.unassigned.length ?? 0
          ] }),
          o?.diagnostics.unassigned.length ? o?.diagnostics.unassigned.map((x) => /* @__PURE__ */ i.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ i.jsx("span", { children: x }) }, x)) : /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (o?.warnings ?? []).map((x, L) => /* @__PURE__ */ i.jsx(Pt, { label: "读取警告", ok: !1, detail: x }, L))
      ] })
    ] })
  ] });
}
function Wy({ onAction: c, onAskAi: f, refreshKey: d, sectionHint: o, scheduleText: E, onDataChanged: S }) {
  const [b, q] = w.useState(() => di("planning")), [N, p] = w.useState(""), [D, A] = w.useState("calendar"), [x, L] = w.useState("issues"), [Z, P] = w.useState(!1), [te, pe] = w.useState(null), [Ce, ce] = w.useState(!1), [me, ve] = w.useState(null), [de, $] = w.useState({});
  w.useEffect(() => {
    o?.section && A(o.section);
  }, [o?.nonce]), w.useEffect(() => {
    let y = !1;
    return nt(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((W) => {
      if (y) return;
      const h = Vy(W);
      q(h), Cu("planning", h), p(""), pe(null);
    }).catch((W) => {
      y || p(W.message || "筹备数据读取失败");
    }), () => {
      y = !0;
    };
  }, [d]), w.useEffect(() => {
    const y = Object.entries(de).at(-1);
    if (!y || !y[1].ok || me === y[0]) return;
    const W = window.setTimeout(() => {
      $((h) => {
        const M = { ...h };
        return delete M[y[0]], M;
      });
    }, 4500);
    return () => window.clearTimeout(W);
  }, [me, de]);
  async function Y() {
    if (!(!b || Ce)) {
      ce(!0), pe(null);
      try {
        pe(await nt(`api/planning/template-check?monday=${encodeURIComponent(b.weekMonday)}`));
      } catch (y) {
        pe({ ok: !1, passed: !1, monday: b.weekMonday, output: "", affectedDates: [], error: y.message });
      } finally {
        ce(!1);
      }
    }
  }
  async function ie(y) {
    if (!me) {
      ve(y), $((W) => ({ ...W, [y]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const W = await nt("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: y })
        });
        if (!W.ok) throw new Error(W.error || "取消预留未完成");
        q((h) => h && {
          ...h,
          reservations: h.reservations.map((M) => M.reservation_id === y ? { ...M, status: "已取消" } : M)
        }), $((h) => ({ ...h, [y]: { ok: !0, text: W.message || "已取消预留" } })), S({ silent: !0 });
      } catch (W) {
        $((h) => ({ ...h, [y]: { ok: !1, text: `取消失败：${W.message || "未知错误"}` } }));
      } finally {
        ve(null);
      }
    }
  }
  async function k(y) {
    if (!me) {
      ve(y), $((W) => ({ ...W, [y]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const W = await nt("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: y })
        });
        if (!W.ok) throw new Error(W.error || "预留确认失败");
        q((h) => h && {
          ...h,
          summary: { ...h.summary, formalCourseCount: h.summary.formalCourseCount + 1 },
          reservations: h.reservations.map((M) => M.reservation_id === y ? { ...M, status: "已确认" } : M),
          audit: {
            ...h.audit,
            reservation_hard_blockers: h.audit.reservation_hard_blockers.filter((M) => M.reservation_id !== y)
          }
        }), $((h) => ({ ...h, [y]: { ok: !0, text: W.message || "已确认落课" } })), S({ silent: !0 });
      } catch (W) {
        $((h) => ({ ...h, [y]: { ok: !1, text: `确认失败：${W.message || "未知错误"}` } })), S({ silent: !0 });
      } finally {
        ve(null);
      }
    }
  }
  if (N) return /* @__PURE__ */ i.jsx(Tl, { tone: "error", title: "筹备数据读取失败", text: N });
  if (!b) return /* @__PURE__ */ i.jsx(dr, {});
  const G = b.summary, I = b.students.filter((y) => y.confirmed && y.zone !== "未分区" && (y.availability.length > 0 || y.hasReservation)).length, ae = G.activeStudentCount ? Math.round(I / G.activeStudentCount * 100) : 100, Ee = b.commute.overlaps.length, we = new Map(b.audit.reservation_hard_blockers.map((y) => [y.reservation_id, y.reasons])), g = b.students.filter((y) => x === "all" ? !0 : x === "availability" ? !y.availability.length && !y.hasReservation : x === "zone" ? y.zone === "未分区" : x === "pending" ? !!y.pendingWeekday || !y.confirmed : y.issues.length > 0), B = Z ? g : g.slice(0, 10), K = b.sources.filter((y) => !y.ok);
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ i.jsx(hi, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    K.length > 0 && /* @__PURE__ */ i.jsx(Tl, { tone: "warn", title: `${K.length} 项筹备数据读取异常`, text: K.map((y) => `${y.label}：${y.message || "读取失败"}`).join("；") }),
    G.reservationHardBlockerCount > 0 && /* @__PURE__ */ i.jsx(Tl, { tone: "warn", title: `${G.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: b.audit.reservation_hard_blockers.map((y) => `${y.student} ${y.date}：${y.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ i.jsx(
      nr,
      {
        label: "筹备页内部导航",
        value: D,
        onChange: (y) => A(y),
        items: [
          { id: "calendar", label: "周视图", count: b.reservations.length + b.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: G.unzonedCount + G.missingAvailabilityCount + G.unconfirmedActiveCount + b.students.filter((y) => y.issues.length).length },
          { id: "candidates", label: "预留与复核", count: Ee + G.reservationCount + G.reviewCount + G.overdueCount + K.length }
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(Iy, { planning: b, hidden: D !== "calendar", onConfirmReservation: k, onCancelReservation: ie, onAction: c, confirmingReservationId: me, reservationFeedback: de }),
    /* @__PURE__ */ i.jsxs("div", { hidden: D !== "trial", children: [
      /* @__PURE__ */ i.jsx(hi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ i.jsx(Fy, { onAction: c, onAskAi: f, refreshKey: d })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: D !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ i.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          I,
          "/",
          G.activeStudentCount
        ] }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          ae,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ i.jsx("i", { style: { width: `${ae}%` } }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: Ee ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ i.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ i.jsx("strong", { children: Ee }),
        /* @__PURE__ */ i.jsx("small", { children: Ee ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ i.jsx("strong", { children: G.reservationCount }),
        /* @__PURE__ */ i.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ i.jsx("strong", { children: G.formalCourseCount }),
        /* @__PURE__ */ i.jsx("small", { children: G.reviewCount + G.overdueCount ? `${G.reviewCount + G.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-overview-grid", hidden: D !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ i.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            G.activeStudentCount - I,
            " 人仍有关键资料缺口。contract ",
            b.contract.version ?? "—",
            " · schema ",
            b.contract.schemaVersion ?? "—",
            " · ",
            Bh(b.range)
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            L("availability"), A("students");
          }, children: [
            "缺候选时间 ",
            G.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            L("zone"), A("students");
          }, children: [
            "未分区 ",
            G.unzonedCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            L("pending"), A("students");
          }, children: [
            "待确认 ",
            G.unconfirmedActiveCount + G.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ i.jsx("h3", { children: Ee ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            Ee,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => A("candidates"), children: "查看候选与预留" }),
          G.reviewCount + G.overdueCount + K.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => A("candidates"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "panel planning-student-panel", hidden: D !== "students", children: [
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
        ].map(([y, W]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: x === y ? "selected" : "", onClick: () => {
          L(y), P(!1);
        }, children: W }, y)) })
      ] }),
      g.length ? /* @__PURE__ */ i.jsxs("div", { className: "planning-student-list", children: [
        B.map((y) => {
          const W = y.availability.length ? y.availability.map((h) => `${h.weekday} ${h.start_time}-${h.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ i.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ i.jsx("strong", { children: y.name }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                y.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ i.jsx("span", { className: y.confirmed ? "state-good" : "state-warn", children: y.pendingWeekday ? `${y.pendingWeekday}待定` : y.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "片区" }),
              /* @__PURE__ */ i.jsx("span", { className: y.zone === "未分区" ? "state-warn" : "", children: y.zone })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ i.jsx("span", { className: !y.availability.length && !y.hasReservation ? "state-warn" : "", title: W, children: y.availability.length ? W : y.hasReservation ? "已有单日预留" : W })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "约束" }),
              /* @__PURE__ */ i.jsx("span", { children: y.vacations.length ? y.vacations.map((h) => `至 ${h.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-row-actions", children: [
              y.zone === "未分区" && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "zone_set", student: y.name }), children: "设片区" }),
              !y.availability.length && !y.hasReservation && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "availability_set", student: y.name, weekday: y.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_add", student: y.name, duration: y.duration, zone: y.zone === "未分区" ? "" : y.zone }), children: "预留" })
            ] })
          ] }, y.sourceName);
        }),
        g.length > 10 && /* @__PURE__ */ i.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => P((y) => !y), children: Z ? "收起学生列表" : `再看 ${g.length - 10} 人` })
      ] }) : /* @__PURE__ */ i.jsx(nl, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      b.inactiveConfirmed.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          b.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-student-context", hidden: D !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ i.jsx("span", { children: b.pending.map((y) => y.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ i.jsx("span", { children: b.vacations.map((y) => `${y.student} ${y.start_date.slice(5)}—${y.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ i.jsx("span", { children: b.zones.map((y) => `${y.zone} ${y.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-two-column", hidden: D !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "课程预留", meta: `${b.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        b.reservations.length ? /* @__PURE__ */ i.jsx("div", { className: "reservation-card-list", children: b.reservations.map((y) => {
          const W = (y.conflicts?.formal_courses?.length || 0) + (y.conflicts?.soft_reservations?.length || 0), h = we.get(y.reservation_id) || [], M = `reservation-blocker-${y.reservation_id}`, X = y.status === "已确认" ? "已落课" : y.status === "预期" ? "待落课" : y.status, F = h.length ? "blocked" : y.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ i.jsxs("article", { className: `reservation-card ${F}`, children: [
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ i.jsx("strong", { children: y.reservation_date.slice(5) }),
              /* @__PURE__ */ i.jsx("span", { children: y.weekday })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ i.jsx("strong", { children: y.student }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                y.start_time,
                "-",
                y.end_time,
                " · ",
                y.duration,
                " 分钟",
                y.zone ? ` · ${y.zone}` : ""
              ] }),
              /* @__PURE__ */ i.jsxs("small", { id: M, children: [
                X,
                W ? ` · ${W} 项软冲突` : "",
                h.length ? ` · 硬约束：${h.join("、")}` : "",
                y.note ? ` · ${y.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "reservation-actions", children: y.status === "预期" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "reservation-update", onClick: () => c({ operation: "reservation_update", reservationId: y.reservation_id, date: y.reservation_date, time: y.start_time, duration: y.duration, zone: y.zone || "", note: y.note || "" }), children: "调时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: h.length > 0, "aria-describedby": h.length ? M : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: y.reservation_id }), children: h.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", onClick: () => c({ operation: "reservation_cancel", reservationId: y.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ i.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              X
            ] }) })
          ] }, y.reservation_id);
        }) }) : /* @__PURE__ */ i.jsx(nl, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ i.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              G.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", disabled: Ce, onClick: () => {
            Y();
          }, children: Ce ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ i.jsx(Ws, { label: "时间重叠", count: b.commute.overlaps.length, tone: "danger", details: b.commute.overlaps.slice(0, 3).map((y) => `${y.weekday} ${y.first} ${y.firstRange} / ${y.second} ${y.secondRange}`) }),
          /* @__PURE__ */ i.jsx(Ws, { label: "长期候选时间差异", count: b.commute.availabilityConflicts.length, tone: "neutral", details: b.commute.availabilityConflicts.slice(0, 3).map((y) => `${y.student} ${y.weekday} ${y.startTime}-${y.endTime}（仅提示）`) }),
          /* @__PURE__ */ i.jsx(Ws, { label: "排时间时再问通勤", count: b.commute.missingRoutes.length, tone: "neutral", details: b.commute.missingRoutes.slice(0, 3).map((y) => `${y.weekday} ${y.from} → ${y.to}`) })
        ] }),
        b.commute.missingRoutes.slice(0, 2).map((y) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: y.from, toStudent: y.to }), children: [
          "补录 ",
          y.from,
          " → ",
          y.to
        ] }, `${y.weekday}-${y.from}-${y.to}`)),
        te && /* @__PURE__ */ i.jsxs("div", { className: te.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ i.jsx("strong", { children: te.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ i.jsx("pre", { children: te.error || te.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    D === "candidates" && (b.reviews.length > 0 || G.overdueCount > 0) && /* @__PURE__ */ i.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ i.jsx(ea, { title: "历史课程复核", meta: `${b.reviews.length} 节待确认 · ${G.overdueCount} 节过期待转入`, action: G.overdueCount ? `处理 ${G.overdueCount} 节过期课` : void 0, onAction: G.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ i.jsx("div", { className: "review-card-list", children: b.reviews.map((y) => /* @__PURE__ */ i.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: y.student }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            y.date,
            " · ",
            y.start_time,
            "-",
            y.end_time
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: y.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: y.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, y.course_id)) })
    ] }),
    D === "candidates" && b.reviews.length === 0 && G.overdueCount === 0 && /* @__PURE__ */ i.jsx("section", { className: "panel", children: /* @__PURE__ */ i.jsx(nl, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-detail-grid", hidden: D !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "过期待转入：" }),
            G.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "人工待复核：" }),
            G.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "读取异常：" }),
            K.length,
            " 项"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ i.jsx("div", { className: "source-status-list", children: b.sources.map((y) => /* @__PURE__ */ i.jsxs("span", { className: y.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          y.label
        ] }, y.label)) }),
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
function Iy({ planning: c, hidden: f, onConfirmReservation: d, onCancelReservation: o, onAction: E, confirmingReservationId: S, reservationFeedback: b }) {
  const [q, N] = w.useState("reservation"), [p, D] = w.useState(null), A = Yh(), [x, L] = w.useState(c.weekMonday), [Z, P] = w.useState(0), [te, pe] = w.useState(null), Ce = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], ce = w.useMemo(() => tr(`${x}..${x}`, x), [x]), { visibleDays: me, paginated: ve } = Lh(A.ref, !!te), de = Math.max(1, Math.ceil(7 / Math.max(1, me))), $ = w.useMemo(
    () => te ? [te] : ve ? Rh(ce, Z, me) : ce,
    [ce, Z, te, ve, me]
  );
  w.useEffect(() => {
    L(c.weekMonday);
  }, [c.weekMonday]), w.useEffect(() => {
    P(0), pe(null), D(null);
  }, [x, q]);
  const Y = w.useMemo(() => cr(c.range), [c.range]), ie = w.useMemo(() => tr(c.range, c.localDate)[0], [c.range, c.localDate]), k = x > ie, G = !!(Y.end && _l(x, 7) <= Y.end), I = w.useMemo(() => new Map(c.students.map((V) => [V.name, V])), [c.students]), ae = w.useMemo(() => new Map(c.pending.map((V) => [V.student, V])), [c.pending]), Ee = w.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((V) => [V.reservation_id, V.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), we = w.useMemo(() => {
    const V = (he, J = "在读") => J !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : ae.has(he) ? { studentState: "待定", stateClass: "pending" } : I.get(he)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, qe = (he) => ({
      ...he,
      start_at: `${he.date}T${he.start_time}:00+08:00`,
      end_at: `${he.date}T${he.end_time}:00+08:00`
    });
    return q === "reservation" ? c.reservations.filter((he) => he.reservation_date >= ce[0] && he.reservation_date <= ce[6] && he.status !== "已取消").map((he) => {
      const J = Ee.get(he.reservation_id), zt = (he.student_status || "在读") !== "在读", at = he.status === "已确认";
      return qe({
        id: he.reservation_id,
        kind: "reservation",
        reservationId: he.reservation_id,
        reservationStatus: he.status,
        confirmedCourseId: he.confirmed_course_id,
        blockerText: J,
        student: he.student,
        date: he.reservation_date,
        weekday: he.weekday,
        start_time: he.start_time,
        end_time: he.end_time,
        duration: he.duration,
        studentState: zt ? "已暂停" : at ? "已落课" : J ? "有硬约束" : "待落课",
        stateClass: zt ? "paused" : at ? "landed" : J ? "blocked" : "expected",
        zone: he.zone,
        note: he.note
      });
    }) : c.templates.flatMap((he) => {
      const J = Ce.indexOf(he.weekday);
      if (J < 0) return [];
      const zt = ce[J], at = V(he.student, he.student_status);
      return [qe({
        id: `template-${he.template_id}`,
        kind: "template",
        student: he.student,
        date: zt,
        weekday: he.weekday,
        start_time: he.start_time,
        end_time: he.end_time,
        duration: he.duration,
        studentState: at.studentState,
        stateClass: at.stateClass
      })];
    });
  }, [ce, q, ae, c.reservations, c.templates, Ee, I]);
  w.useEffect(() => {
    p && !we.some((V) => V.id === p && V.kind === "reservation") && D(null);
  }, [we, p]), w.useEffect(() => {
    if (!te) return;
    const V = (qe) => {
      qe.key === "Escape" && pe(null);
    };
    return window.addEventListener("keydown", V), () => window.removeEventListener("keydown", V);
  }, [te]), w.useEffect(() => {
    if (!p) return;
    const V = (qe) => {
      qe.key === "Escape" && D(null);
    };
    return window.addEventListener("keydown", V), () => window.removeEventListener("keydown", V);
  }, [p]);
  const g = !!S, B = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    return we.forEach((qe) => V.set(qe.date, [...V.get(qe.date) || [], qe])), V;
  }, [we]), K = w.useMemo(() => new Map(ce.map((V) => [V, kh(B.get(V) || [])])), [B, ce]), y = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    for (const qe of ce)
      V.set(qe, sr(B.get(qe) || []));
    return V;
  }, [B, ce]), W = $.map((V) => V && K.get(V) || 1);
  W.reduce((V, qe) => V + qe, 0);
  const h = `52px ${W.map((V) => `minmax(0, ${V}fr)`).join(" ")}`, M = $.length >= 7 ? we : we.filter((V) => $.includes(V.date)), { startHour: X, endHour: F } = qh(M), ye = te ? 92 : me >= 6 ? 64 : me >= 4 ? 72 : 84, xe = (F - X) * ye, Ne = Array.from({ length: F - X + 1 }, (V, qe) => X + qe), We = `${Bt(`${ce[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${Bt(`${ce[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ i.jsxs("section", { className: `panel planning-week-panel ${q}-mode`, hidden: f, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ i.jsx("h3", { children: q === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ i.jsx("span", { children: q === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: q === "reservation" ? "selected" : "", "aria-pressed": q === "reservation", onClick: () => N("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.reservations.length })
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: q === "template" ? "selected" : "", "aria-pressed": q === "template", onClick: () => N("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "上一周", disabled: !k, onClick: () => L((V) => _l(V, -7)), children: "‹" }),
          /* @__PURE__ */ i.jsx("strong", { children: We }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "下一周", disabled: !G, onClick: () => L((V) => _l(V, 7)), children: "›" })
        ] }),
        te ? /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => pe(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            Bt(`${te}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true" })
        ] }) : ve && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Z === 0, onClick: () => P((V) => Math.max(0, V - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "第 ",
            Z + 1,
            "/",
            de,
            " 页 · 每页 ",
            me,
            " 天"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Z >= de - 1, onClick: () => P((V) => Math.min(de - 1, V + 1)), children: "下一页 ›" })
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
    we.length ? /* @__PURE__ */ i.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，点击日期标题聚焦到单日", ...A, children: /* @__PURE__ */ i.jsxs("div", { className: "planning-week-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: h }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-corner", children: "时间" }),
        $.map((V, qe) => V ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: V === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => pe(V), "aria-label": `聚焦到 ${Bt(`${V}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ i.jsx("span", { children: Ce[ce.indexOf(V)] }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(V.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            B.get(V)?.length || 0,
            " 项"
          ] })
        ] }, V) : /* @__PURE__ */ i.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${qe}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: h }, onPointerDown: (V) => {
        V.target.closest(".planning-week-block") || D(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-axis", style: { height: xe }, children: Ne.map((V) => /* @__PURE__ */ i.jsxs("span", { style: { top: (V - X) * ye }, children: [
          String(V).padStart(2, "0"),
          ":00"
        ] }, V)) }),
        $.map((V, qe) => {
          if (!V) return /* @__PURE__ */ i.jsx("div", { className: "planning-week-track empty-slot", style: { height: xe }, "aria-hidden": "true" }, `empty-${qe}`);
          const he = y.get(V) || [];
          return /* @__PURE__ */ i.jsx("div", { className: V === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: xe }, children: he.map(({ item: J, lane: zt, laneCount: at }) => {
            const bt = Hh(J, X, F, ye);
            if (!bt) return null;
            const Ct = 100 / at, ca = J.kind === "reservation" && J.reservationStatus === "预期", yt = J.kind === "reservation" && J.reservationStatus === "已确认", st = !!(J.reservationId && (ca || yt)), sa = !!(ca && S === J.reservationId), Ca = !!(st && (p === J.id || sa)), ra = J.reservationId ? b[J.reservationId] : void 0, ul = !!(g || J.blockerText || J.stateClass === "paused");
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `planning-week-block ${J.kind} ${J.stateClass}${st ? " actionable" : ""}${Ca ? " action-open" : ""}`,
                tabIndex: st ? 0 : void 0,
                role: st ? "button" : void 0,
                "aria-expanded": st ? Ca : void 0,
                "aria-label": `${J.start_time}-${J.end_time} ${J.student}，${J.studentState}${J.zone ? `，${J.zone}` : ""}${ca ? "；移入或点击后可调整时间、确认落课" : yt ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (Me) => {
                  st && !Me.target.closest("button") && D((wa) => wa === J.id ? null : J.id);
                },
                onKeyDown: (Me) => {
                  st && (Me.key === "Enter" || Me.key === " " ? (Me.preventDefault(), D((wa) => wa === J.id ? null : J.id)) : Me.key === "Escape" && (Me.preventDefault(), D(null)));
                },
                style: { top: bt.top, height: bt.height, left: `calc(${zt * Ct}% + 4px)`, width: `calc(${Ct}% - 8px)` },
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
                  st && /* @__PURE__ */ i.jsxs("div", { className: "planning-week-inline-action", onClick: (Me) => Me.stopPropagation(), children: [
                    /* @__PURE__ */ i.jsx("div", { className: "planning-week-inline-buttons", children: ca ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: g, onClick: () => {
                        D(null), E({ operation: "reservation_update", reservationId: J.reservationId, date: J.date, time: J.start_time, duration: J.duration, zone: J.zone || "", note: J.note || "" });
                      }, children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: ul, "aria-busy": sa, onClick: () => {
                        const Me = d(J.reservationId);
                        Me && typeof Me.then == "function" && Me.finally(() => D(null));
                      }, children: sa ? "确认中…" : g ? "处理中…" : J.stateClass === "paused" ? "学生已暂停" : J.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => E({ operation: "course_move", student: J.student, fromDate: J.date, fromTime: J.start_time, toDate: J.date, toTime: J.start_time, duration: J.duration }), children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => E({ operation: "course_cancel", student: J.student, date: J.date, time: J.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", disabled: g, onClick: () => {
                        const Me = o(J.reservationId);
                        Me && typeof Me.then == "function" && Me.finally(() => D(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (J.blockerText || ra) && /* @__PURE__ */ i.jsx(Xh, { ok: !!ra?.ok, text: ra?.text || J.blockerText || "" })
                  ] })
                ]
              },
              J.id
            );
          }) }, V);
        })
      ] })
    ] }) }) : /* @__PURE__ */ i.jsx(nl, { title: q === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: q === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function Ws({ label: c, count: f, tone: d, details: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("span", { children: c }),
      /* @__PURE__ */ i.jsx("strong", { children: f })
    ] }),
    o.length > 0 && /* @__PURE__ */ i.jsx("ul", { children: o.map((E) => /* @__PURE__ */ i.jsx("li", { children: E }, E)) })
  ] });
}
const Py = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function eg({ item: c, onInspect: f, onPrepare: d, onQuick: o, onAskAi: E, onRetry: S, onRetryPrev: b, retryingId: q, feedback: N }) {
  const p = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), D = q === c.id, A = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", x = Date.now(), L = c.deadline_at ? new Date(c.deadline_at).getTime() : null, Z = L != null ? Math.ceil((L - x) / 864e5) : null, P = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ i.jsxs(
    "article",
    {
      className: `affair-card ${A}${p ? " closed" : ""}`,
      "data-item-id": c.id,
      tabIndex: 0,
      role: "button",
      onClick: (te) => {
        te.target.closest("button") || f(c, te.currentTarget);
      },
      onKeyDown: (te) => {
        te.key === "Enter" && (te.preventDefault(), f(c, te.currentTarget));
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-when", children: [
          A === "timed" && c.start_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: za(c.start_at) }),
            /* @__PURE__ */ i.jsx("span", { children: Bt(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          A === "deadline" && c.deadline_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: Bt(c.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "截止",
              Z != null && !p ? ` · ${Z >= 0 ? `剩 ${Z} 天` : `已过 ${-Z} 天`}` : ""
            ] })
          ] }),
          A === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ i.jsx("span", { children: c.window_label || "窗口未定" })
          ] }),
          A === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ i.jsx("span", { children: P ? `下次 ${P.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ i.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ i.jsx(Qh, { value: c.status }),
            c.note ? /* @__PURE__ */ i.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ i.jsx("em", { children: `提醒 ${Bt(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${za(c.next_prompt_at)}` }) : null
          ] }),
          A === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ i.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((te) => /* @__PURE__ */ i.jsx("i", { children: Py[te] || te }, te)) }) : null,
          N ? /* @__PURE__ */ i.jsx(Xh, { ok: N.ok, text: N.text }) : null,
          N?.undo && b ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!q, onClick: () => {
            b(c);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "affair-card-actions", children: !p && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do primary", disabled: !!q || N?.ok, onClick: () => o?.("affairComplete", c), children: N?.ok ? "已完成" : "完成" }),
          c.retry && S ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!q || !!N?.ok, "aria-busy": D, onClick: () => {
            S(c);
          }, children: D ? "处理中…" : N?.buttonLabel || "没约上" }) : E ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => E(`把「${c.title}」（${c.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function tg({ onPrepare: c, onQuick: f, onAskAi: d, onInspect: o, onRetry: E, onRetryPrev: S, retryingId: b, feedback: q, refreshKey: N, observedAt: p, onOpenDay: D, localDate: A }) {
  const [x, L] = w.useState("pending"), [Z, P] = w.useState("list"), [te, pe] = w.useState(() => di("affairs-month")), [Ce, ce] = w.useState(""), me = w.useCallback((g) => {
    nt("api/affairs-month" + (g ? "?fresh=1" : "")).then((B) => {
      if (!B || !Array.isArray(B.affairs) || !Array.isArray(B.pending)) return;
      const K = {
        affairs: B.affairs.map((y) => ({ ...y, domain: "affair" })),
        pending: B.pending.map((y) => ({ ...y, domain: "affair" })),
        month: String(B.month || "")
      };
      pe(K), Cu("affairs-month", K), ce("");
    }).catch(() => {
    });
  }, []);
  w.useEffect(() => {
    me(!te);
  }, [me]), w.useEffect(() => {
    N > 0 && me(!0);
  }, [N]), w.useEffect(() => {
    p && te && me(!1);
  }, [p, me]);
  const ve = te?.pending ?? [], de = te?.affairs ?? [], $ = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), Y = de.filter((g) => !$.has(g.status)).sort((g, B) => String(vt(g) || "").localeCompare(String(vt(B) || ""))), ie = de.filter((g) => $.has(g.status)).sort((g, B) => String(vt(B) || "").localeCompare(String(vt(g) || ""))), k = ie.filter((g) => !["cancelled", "已取消"].includes(g.status)).length, G = te?.month ? `${te.month}-01..${te.month}-01` : "", ae = { pending: ve, scheduled: Y, closed: ie }[x], Ee = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[x];
  function we(g, B) {
    const K = de.filter((y) => fi(y) === g);
    D(g, K, B);
  }
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx(hi, { eyebrow: `事务 · 本月 ${te?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${k} 件、取消 ${ie.length - k} 件，进行中 ${Y.length} 件。点日历上的任何一天，看那天的安排。` }),
    Ce && /* @__PURE__ */ i.jsx(Tl, { tone: "error", title: "事务数据读取失败", text: Ce }),
    !te && /* @__PURE__ */ i.jsx(dr, {}),
    te && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ i.jsx(
          nr,
          {
            label: "事务状态",
            value: x,
            onChange: (g) => L(g),
            items: [
              { id: "pending", label: "待处理", count: ve.length },
              { id: "scheduled", label: "已安排", count: Y.length },
              { id: "closed", label: "已完成·已取消", count: ie.length }
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          nr,
          {
            label: "视图切换",
            value: Z,
            onChange: (g) => P(g),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      Z === "calendar" ? /* @__PURE__ */ i.jsx(Vh, { items: de, range: G, localDate: A ?? te.month + "-01", onOpenDay: we }) : /* @__PURE__ */ i.jsx("div", { children: ae.length ? ae.map((g) => /* @__PURE__ */ i.jsx(eg, { item: g, onInspect: o, onPrepare: c, onQuick: f, onAskAi: d, onRetry: E, onRetryPrev: S, retryingId: b, feedback: q[g.id] }, g.id)) : /* @__PURE__ */ i.jsx(nl, { title: Ee.title, text: Ee.text }) })
    ] })
  ] });
}
function ag({ pending: c, students: f, preset: d, aiDraft: o, preview: E, busy: S, onPreview: b, onAiPreview: q, onCommit: N, onCommitBatch: p, onClear: D, onClose: A }) {
  const [x, L] = w.useState(d?.operation || "course_move"), [Z, P] = w.useState(d?.affairKind || "timed"), [te, pe] = w.useState(d?.student || ""), [Ce, ce] = w.useState(d?.duration || ""), [me, ve] = w.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  w.useEffect(() => {
    d?.operation && L(d.operation), d?.affairKind && P(d.affairKind), d?.student && pe(d.student), d?.duration && ce(d.duration);
  }, [d]);
  function de(Y) {
    Y.preventDefault();
    const ie = new FormData(Y.currentTarget), k = { operation: x };
    for (const [G, I] of ie.entries())
      G !== "operation" && String(I).trim() && (k[G] = I);
    k.duration && (k.duration = Number(k.duration)), k.minutes !== void 0 && (k.minutes = Number(k.minutes)), k.expectedVersion && (k.expectedVersion = Number(k.expectedVersion)), x === "course_plan" && (k.moves = me.map((G) => ({ ...G, duration: G.duration ? Number(G.duration) : void 0 }))), b(k);
  }
  function $(Y, ie, k) {
    ve((G) => G.map((I, ae) => ae === Y ? { ...I, [ie]: k } : I));
  }
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ i.jsx(ig, { initialDraft: o, preview: E, busy: S, onPreview: q, onCommit: N, onCommitBatch: p, onClear: D, onClose: A }),
    /* @__PURE__ */ i.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ i.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ i.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ i.jsxs("form", { className: "panel operation-form", onSubmit: de, children: [
          /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ i.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ i.jsxs("select", { name: "operation", value: x, onChange: (Y) => {
              L(Y.target.value), D();
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
          x === "course_move" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
          x === "course_cancel" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
          ] }),
          x === "course_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (Y) => {
                    const ie = f.find((k) => k.name === Y.target.value);
                    pe(Y.target.value), ie && ce(ie.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    f.filter((Y) => Y.status === "在读").map((Y) => /* @__PURE__ */ i.jsxs("option", { value: Y.name, children: [
                      Y.name,
                      " · ",
                      Y.default_duration,
                      " 分钟"
                    ] }, Y.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: Ce, onChange: (Y) => ce(Y.target.value), required: !0 })
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
          x === "reservation_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (Y) => {
                    const ie = f.find((k) => k.name === Y.target.value);
                    pe(Y.target.value), ie && ce(ie.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    f.filter((Y) => Y.status === "在读").map((Y) => /* @__PURE__ */ i.jsxs("option", { value: Y.name, children: [
                      Y.name,
                      " · ",
                      Y.default_duration,
                      " 分钟"
                    ] }, Y.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: Ce, onChange: (Y) => ce(Y.target.value) })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          x === "reservation_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(x) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          x === "zone_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          x === "availability_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((Y) => /* @__PURE__ */ i.jsx("option", { value: Y, children: Y }, Y))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          x === "availability_clear" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((Y) => /* @__PURE__ */ i.jsx("option", { value: Y, children: Y }, Y))
              ] })
            ] })
          ] }),
          x === "commute_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ i.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          x === "quarantine_overdue" && /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          x === "course_review_resolve" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ i.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ i.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ i.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          x === "course_day_complete" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          x === "course_plan" && /* @__PURE__ */ i.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ i.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", onClick: () => ve((Y) => [...Y, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            me.map((Y, ie) => /* @__PURE__ */ i.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ i.jsx("span", { className: "plan-index", children: ie + 1 }),
              /* @__PURE__ */ i.jsxs("select", { value: Y.student || "", onChange: (k) => {
                const G = f.find((I) => I.name === k.target.value);
                $(ie, "student", k.target.value), G && $(ie, "duration", G.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "学生" }),
                f.filter((k) => k.status === "在读").map((k) => /* @__PURE__ */ i.jsx("option", { value: k.name, children: k.name }, k.name))
              ] }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: Y.fromDate || "", onChange: (k) => $(ie, "fromDate", k.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: Y.fromTime || "", onChange: (k) => $(ie, "fromTime", k.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: Y.toDate || "", onChange: (k) => $(ie, "toDate", k.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: Y.toTime || "", onChange: (k) => $(ie, "toTime", k.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: Y.duration || "", onChange: (k) => $(ie, "duration", k.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "plan-remove", disabled: me.length <= 2, onClick: () => ve((k) => k.filter((G, I) => I !== ie)), children: "×" })
            ] }, ie))
          ] }),
          x === "affair_create" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(re, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "类型" }),
              /* @__PURE__ */ i.jsxs("select", { name: "affairKind", value: Z, onChange: (Y) => P(Y.target.value), children: [
                /* @__PURE__ */ i.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ i.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ i.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ i.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            Z === "timed" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            Z === "deadline" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            Z === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(re, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(re, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            Z === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
          x === "affair_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((Y) => /* @__PURE__ */ i.jsxs("option", { value: Y.id, children: [
                  Y.title,
                  " · ",
                  Y.id
                ] }, Y.id))
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
          x === "affair_retry_prev" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((Y) => /* @__PURE__ */ i.jsxs("option", { value: Y.id, children: [
                  Y.title,
                  " · ",
                  Y.id
                ] }, Y.id))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。" })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(x) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((Y) => /* @__PURE__ */ i.jsxs("option", { value: Y.id, children: [
                  Y.title,
                  " · ",
                  Y.id
                ] }, Y.id))
              ] })
            ] }),
            x === "affair_retry_next" && /* @__PURE__ */ i.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          x === "calendar_sync" && /* @__PURE__ */ i.jsx(re, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ i.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: "primary-button full", type: "submit", disabled: S, children: S ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: x })),
        /* @__PURE__ */ i.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ i.jsx(ea, { title: "执行预览", meta: E?.token ? `令牌 ${E.token.slice(0, 8)}…` : "等待操作" }),
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
                N();
              }, disabled: S, children: S ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ i.jsx(Gh, { preview: E, onClose: A })
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
  const S = c.operation || "", b = c.input || {}, q = Object.entries(b).filter(([D, A]) => A != null && A !== "" && !D.startsWith("_")), N = c.result?.affected_dates, p = c.batchItems ?? [];
  return p.length ? /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.committed ? c.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.committed ? c.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${p.length} 项` }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.message })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "batch-list", children: p.map((D, A) => {
      const x = c.committed ? { text: D.resultOk ? "已执行" : "失败", cls: D.resultOk ? "ok" : "error" } : { text: D.canCommit ? "可执行" : "未通过", cls: D.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ i.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ i.jsx("span", { className: "batch-index", children: A + 1 }),
        /* @__PURE__ */ i.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: Ah[D.operation] || D.operation }),
          /* @__PURE__ */ i.jsx("span", { children: D.summary }),
          D.message && /* @__PURE__ */ i.jsx("small", { children: D.message })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: `batch-flag ${x.cls}`, children: x.text })
      ] }, D.token);
    }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-outcome-actions", children: [
      !c.committed && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", disabled: f || !p.some((D) => D.canCommit), onClick: () => {
        o?.() ?? Promise.resolve();
      }, children: f ? "正在提交…" : `全部执行（${p.filter((D) => D.canCommit).length} 项）` }),
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
      S && /* @__PURE__ */ i.jsx("span", { className: "preview-op-badge", children: Ah[S] || S }),
      q.length > 0 && /* @__PURE__ */ i.jsx("dl", { className: "preview-fields", children: q.map(([D, A]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: lg[D] || D }),
        /* @__PURE__ */ i.jsx("dd", { children: String(A) })
      ] }, D)) }),
      N && N.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        N.map((D) => /* @__PURE__ */ i.jsx("span", { children: D.slice(5) }, D))
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
      /* @__PURE__ */ i.jsx(Gh, { preview: c, onClose: E })
    ] })
  ] });
}
function ig({ initialDraft: c, preview: f, busy: d, onPreview: o, onCommit: E, onCommitBatch: S, onClear: b, onClose: q }) {
  const N = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, p = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [D, A] = w.useState([N]), [x, L] = w.useState(""), [Z, P] = w.useState(!1), [te, pe] = w.useState(""), [Ce, ce] = w.useState([]), [me, ve] = w.useState(!1), de = w.useRef(null), $ = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function Y() {
    const I = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!I) return;
    if (me) {
      de.current?.stop();
      return;
    }
    const ae = new I();
    ae.lang = "zh-CN", ae.interimResults = !1, ae.continuous = !1, ae.onresult = (Ee) => {
      const we = Array.from(Ee.results).map((g) => g[0].transcript).join("").trim();
      we && L((g) => (g ? `${g} ` : "") + we);
    }, ae.onend = () => ve(!1), ae.onerror = () => ve(!1), de.current = ae, ve(!0), ae.start();
  }
  const ie = w.useRef(ar());
  w.useEffect(() => () => ie.current.invalidate(), []), w.useEffect(() => {
    c.nonce && (ie.current.invalidate(), P(!1), L(c.text));
  }, [c.nonce, c.text]);
  function k() {
    ie.current.invalidate(), P(!1), A([N]), L(""), pe(""), ce([]), b();
  }
  async function G(I) {
    const ae = (I ?? x).trim();
    if (!ae || Z) return;
    const Ee = ie.current.begin(), we = D.slice(-10);
    A((g) => [...g, { role: "user", text: ae }]), L(""), ce([]), P(!0), pe(""), b();
    try {
      const g = await nt("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: ae, history: we })
      });
      if (!ie.current.isCurrent(Ee)) return;
      if (!g.ok) throw new Error(g.error || "AI 没有生成方案");
      ce(g.status === "need_clarification" ? g.options ?? [] : []), A((B) => [...B, { role: "assistant", text: g.reply || "方案已经生成，请检查右侧预演。" }]), g.status === "ready" && g.batch && g.previews?.length ? o({
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
      if (!ie.current.isCurrent(Ee)) return;
      const B = g.message || "AI 操作失败";
      pe(B), A((K) => [...K, { role: "assistant", text: `这次没有生成预演：${B}` }]);
    } finally {
      ie.current.isCurrent(Ee) && P(!1);
    }
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ i.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ i.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: "row-action-button", type: "button", onClick: k, disabled: Z, children: "清空对话" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: p.map((I) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => L(I), children: I }, I)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          D.map((I, ae) => /* @__PURE__ */ i.jsx("div", { className: `ai-bubble ${I.role}`, children: I.text }, ae)),
          Z && /* @__PURE__ */ i.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        te && /* @__PURE__ */ i.jsx(Tl, { tone: "error", title: "没有生成方案", text: te }),
        Ce.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: Ce.map((I) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
          G(I);
        }, children: I }, I)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              value: x,
              onChange: (I) => L(I.target.value),
              onKeyDown: (I) => {
                I.key === "Enter" && !I.shiftKey && (I.preventDefault(), G());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          $ && /* @__PURE__ */ i.jsx("button", { type: "button", className: me ? "ai-mic listening" : "ai-mic", onClick: Y, "aria-label": me ? "停止语音输入" : "语音输入", title: "语音输入", children: me ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            G();
          }, disabled: !x.trim() || Z, children: Z ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "AI 预演", meta: f?.token ? `令牌 ${f.token.slice(0, 8)}…` : "等待指令" }),
        !f && /* @__PURE__ */ i.jsx(nl, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        f && /* @__PURE__ */ i.jsx(ng, { preview: f, busy: d, onCommit: E, onCommitBatch: S, onClose: q })
      ] })
    ] })
  ] });
}
function ug({ view: c, dashboard: f }) {
  if (c.kind === "system") return /* @__PURE__ */ i.jsx(og, { dashboard: f, embedded: !0, readOnly: !0 });
  const d = c.kind === "day" ? c.items ? [...c.items].sort((o, E) => String(vt(o) || "").localeCompare(String(vt(E) || ""))) : f.items.filter((o) => fi(o) === c.date).sort((o, E) => String(vt(o) || "").localeCompare(String(vt(E) || ""))) : [c.item];
  return d.length ? /* @__PURE__ */ i.jsx("div", { className: "context-item-list", children: d.map((o) => /* @__PURE__ */ i.jsx(cg, { item: o }, o.id)) }) : /* @__PURE__ */ i.jsx(nl, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function cg({ item: c }) {
  const f = vt(c);
  return /* @__PURE__ */ i.jsxs("section", { className: `context-item-card ${or(c)}${fr(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ i.jsx("time", { children: f ? `${Bt(f, { month: "long", day: "numeric", weekday: "short" })} ${za(f)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ i.jsx(Qh, { value: c.status })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: c.title }),
    /* @__PURE__ */ i.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" })
  ] });
}
function sg() {
  const [c, f] = w.useState({ loading: !0 }), d = w.useCallback(() => {
    f({ loading: !0 }), nt("/api/versions").then((E) => f({ loading: !1, data: E })).catch((E) => f({ loading: !1, error: E.message }));
  }, []);
  w.useEffect(() => {
    d();
  }, [d]);
  const o = c.data?.versions;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(ea, { title: "版本与运行态" }),
    c.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : c.error ? /* @__PURE__ */ i.jsx(Pt, { label: "版本读取", ok: !1, detail: c.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
      /* @__PURE__ */ i.jsx(Pt, { label: "运行态", ok: !c.data?.devShadowing, detail: c.data?.note || "" })
    ] })
  ] });
}
function rg({ onSync: c, readOnly: f = !1 }) {
  const [d, o] = w.useState({ loading: !0 }), E = w.useCallback(() => {
    o({ loading: !0 }), nt("/api/calendar-health").then((N) => o({ loading: !1, data: N })).catch((N) => o({ loading: !1, error: N.message }));
  }, []);
  w.useEffect(() => {
    E();
  }, [E]);
  const S = d.data?.diff, b = S?.toDelete ?? [], q = d.data?.inSync === !0;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(ea, { title: "飞书日历对账" }),
    d.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : d.error ? /* @__PURE__ */ i.jsx(Pt, { label: "日历盘点", ok: !1, detail: d.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(Pt, { label: "对账结果", ok: q, detail: q ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
      /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-summary", children: [
        /* @__PURE__ */ i.jsxs("span", { children: [
          "日历事件 ",
          S?.calendarEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "托管 ",
          S?.managedEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "期望 ",
          S?.desiredEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "待建 ",
          S?.toCreate?.length ?? 0
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "待更新 ",
          S?.toUpdate?.length ?? 0
        ] }),
        /* @__PURE__ */ i.jsxs("span", { className: b.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          b.length
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-list", children: [
        b.slice(0, 8).map((N, p) => /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ i.jsx("span", { children: N.summary }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: String(N.start || "").slice(0, 16) })
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
    !d && /* @__PURE__ */ i.jsx(hi, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ i.jsx(gn, { label: "数据库完整性", value: E?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${E?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ i.jsx(gn, { label: "活动事务", value: E?.counts?.active ?? "—", hint: `总数 ${E?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ i.jsx(gn, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ i.jsx(gn, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ i.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((S) => /* @__PURE__ */ i.jsx(Pt, { label: S.label, ok: S.ok, detail: S.detail }, S.label)) }),
        /* @__PURE__ */ i.jsx(ea, { title: "契约检查" }),
        /* @__PURE__ */ i.jsx(Pt, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ i.jsx(Pt, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ i.jsx(Pt, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ i.jsx(Pt, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
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
function Gh({ preview: c, onClose: f }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ i.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "完成并返回" }) });
}
function nr({ label: c, items: f, value: d, onChange: o, busy: E }) {
  return /* @__PURE__ */ i.jsx("nav", { className: "workbench-nav", "aria-label": c, "data-ui": "segmented-navigation", children: f.map((S) => /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: "button",
      className: d === S.id ? "selected" : "",
      "data-ui-role": "nav-item",
      "data-ui-id": `secondary-nav-${S.id}`,
      "aria-label": `${S.label}${S.count ? `，${S.count} 项` : ""}`,
      "aria-pressed": d === S.id,
      disabled: E,
      onClick: () => o(S.id),
      children: [
        /* @__PURE__ */ i.jsx("span", { children: S.label }),
        S.count ? /* @__PURE__ */ i.jsx("strong", { children: S.count }) : null
      ]
    },
    S.id
  )) });
}
function Xh({ ok: c, text: f }) {
  return /* @__PURE__ */ i.jsx("small", { className: `inline-result ${c ? "ok" : "error"}`, children: f });
}
function gn({ label: c, value: f, hint: d, tone: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `metric-card ${o}`, children: [
    /* @__PURE__ */ i.jsx("span", { children: c }),
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("small", { children: d })
  ] });
}
function Qh({ value: c }) {
  return /* @__PURE__ */ i.jsx("span", { className: `status ${lr(c)}`, "data-ui": "status-badge", "data-ui-state": lr(c), children: Ly[c] || c });
}
function ea({ title: c, meta: f, action: d, onAction: o, actionDisabled: E }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "panel-heading", "data-ui": "section-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h3", { children: c }),
      f && /* @__PURE__ */ i.jsx("span", { children: f })
    ] }),
    d && /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", onClick: o, disabled: E, children: d })
  ] });
}
function hi({ eyebrow: c, title: f, description: d }) {
  return /* @__PURE__ */ i.jsxs("header", { className: "page-title", "data-ui": "page-title", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ i.jsx("h2", { children: f }),
    /* @__PURE__ */ i.jsx("p", { children: d })
  ] });
}
function re({ name: c, label: f, type: d = "text", placeholder: o, defaultValue: E, required: S = !1 }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ i.jsx("span", { children: f }),
    /* @__PURE__ */ i.jsx("input", { name: c, type: d, placeholder: o, defaultValue: E, required: S })
  ] });
}
function Pt({ label: c, ok: f, detail: d }) {
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
function Tl({ tone: c, title: f, text: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `notice ${c}`, "data-ui": "notice", "data-ui-state": c, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("span", { children: d })
  ] });
}
function dr() {
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
ur.ready();
ur.ui.resize({ height: window.innerHeight || 900 });
const zh = document.getElementById("root");
zh && dy.createRoot(zh).render(/* @__PURE__ */ i.jsx(Gy, { children: /* @__PURE__ */ i.jsx(Qy, {}) }));
