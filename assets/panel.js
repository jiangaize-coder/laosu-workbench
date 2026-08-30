var Zs = { exports: {} }, mi = {};
var rh;
function lg() {
  if (rh) return mi;
  rh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(o, E, S) {
    var p = null;
    if (S !== void 0 && (p = "" + S), E.key !== void 0 && (p = "" + E.key), "key" in E) {
      S = {};
      for (var q in E)
        q !== "key" && (S[q] = E[q]);
    } else S = E;
    return E = S.ref, {
      $$typeof: c,
      type: o,
      key: p,
      ref: E !== void 0 ? E : null,
      props: S
    };
  }
  return mi.Fragment = f, mi.jsx = d, mi.jsxs = d, mi;
}
var oh;
function ng() {
  return oh || (oh = 1, Zs.exports = lg()), Zs.exports;
}
var i = ng(), Ks = { exports: {} }, be = {};
var fh;
function ig() {
  if (fh) return be;
  fh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function L(h) {
    return h === null || typeof h != "object" ? null : (h = x && h[x] || h["@@iterator"], typeof h == "function" ? h : null);
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
  }, I = Object.assign, te = {};
  function pe(h, O, X) {
    this.props = h, this.context = O, this.refs = te, this.updater = X || Q;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(h, O) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, O, "setState");
  }, pe.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function Ce() {
  }
  Ce.prototype = pe.prototype;
  function ce(h, O, X) {
    this.props = h, this.context = O, this.refs = te, this.updater = X || Q;
  }
  var ve = ce.prototype = new Ce();
  ve.constructor = ce, I(ve, pe.prototype), ve.isPureReactComponent = !0;
  var ge = Array.isArray;
  function de() {
  }
  var $ = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function ie(h, O, X) {
    var F = X.ref;
    return {
      $$typeof: c,
      type: h,
      key: O,
      ref: F !== void 0 ? F : null,
      props: X
    };
  }
  function k(h, O) {
    return ie(h.type, O, h.props);
  }
  function G(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function P(h) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(X) {
      return O[X];
    });
  }
  var ae = /\/+/g;
  function Ee(h, O) {
    return typeof h == "object" && h !== null && h.key != null ? P("" + h.key) : O.toString(36);
  }
  function we(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(de, de) : (h.status = "pending", h.then(
          function(O) {
            h.status === "pending" && (h.status = "fulfilled", h.value = O);
          },
          function(O) {
            h.status === "pending" && (h.status = "rejected", h.reason = O);
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
  function y(h, O, X, F, ye) {
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
              return Ne = h._init, y(
                Ne(h._payload),
                O,
                X,
                F,
                ye
              );
          }
      }
    if (Ne)
      return ye = ye(h), Ne = F === "" ? "." + Ee(h, 0) : F, ge(ye) ? (X = "", Ne != null && (X = Ne.replace(ae, "$&/") + "/"), y(ye, O, X, "", function(Re) {
        return Re;
      })) : ye != null && (G(ye) && (ye = k(
        ye,
        X + (ye.key == null || h && h.key === ye.key ? "" : ("" + ye.key).replace(
          ae,
          "$&/"
        ) + "/") + Ne
      )), O.push(ye)), 1;
    Ne = 0;
    var $e = F === "" ? "." : F + ":";
    if (ge(h))
      for (var V = 0; V < h.length; V++)
        F = h[V], xe = $e + Ee(F, V), Ne += y(
          F,
          O,
          X,
          xe,
          ye
        );
    else if (V = L(h), typeof V == "function")
      for (h = V.call(h), V = 0; !(F = h.next()).done; )
        F = F.value, xe = $e + Ee(F, V++), Ne += y(
          F,
          O,
          X,
          xe,
          ye
        );
    else if (xe === "object") {
      if (typeof h.then == "function")
        return y(
          we(h),
          O,
          X,
          F,
          ye
        );
      throw O = String(h), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ne;
  }
  function B(h, O, X) {
    if (h == null) return h;
    var F = [], ye = 0;
    return y(h, F, "", "", function(xe) {
      return O.call(X, xe, ye++);
    }), F;
  }
  function K(h) {
    if (h._status === -1) {
      var O = h._result;
      O = O(), O.then(
        function(X) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = X);
        },
        function(X) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = X);
        }
      ), h._status === -1 && (h._status = 0, h._result = O);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var g = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, W = {
    map: B,
    forEach: function(h, O, X) {
      B(
        h,
        function() {
          O.apply(this, arguments);
        },
        X
      );
    },
    count: function(h) {
      var O = 0;
      return B(h, function() {
        O++;
      }), O;
    },
    toArray: function(h) {
      return B(h, function(O) {
        return O;
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
  }, be.cloneElement = function(h, O, X) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var F = I({}, h.props), ye = h.key;
    if (O != null)
      for (xe in O.key !== void 0 && (ye = "" + O.key), O)
        !Y.call(O, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && O.ref === void 0 || (F[xe] = O[xe]);
    var xe = arguments.length - 2;
    if (xe === 1) F.children = X;
    else if (1 < xe) {
      for (var Ne = Array(xe), $e = 0; $e < xe; $e++)
        Ne[$e] = arguments[$e + 2];
      F.children = Ne;
    }
    return ie(h.type, ye, F);
  }, be.createContext = function(h) {
    return h = {
      $$typeof: p,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: S,
      _context: h
    }, h;
  }, be.createElement = function(h, O, X) {
    var F, ye = {}, xe = null;
    if (O != null)
      for (F in O.key !== void 0 && (xe = "" + O.key), O)
        Y.call(O, F) && F !== "key" && F !== "__self" && F !== "__source" && (ye[F] = O[F]);
    var Ne = arguments.length - 2;
    if (Ne === 1) ye.children = X;
    else if (1 < Ne) {
      for (var $e = Array(Ne), V = 0; V < Ne; V++)
        $e[V] = arguments[V + 2];
      ye.children = $e;
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
  }, be.memo = function(h, O) {
    return {
      $$typeof: b,
      type: h,
      compare: O === void 0 ? null : O
    };
  }, be.startTransition = function(h) {
    var O = $.T, X = {};
    $.T = X;
    try {
      var F = h(), ye = $.S;
      ye !== null && ye(X, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(de, g);
    } catch (xe) {
      g(xe);
    } finally {
      O !== null && X.types !== null && (O.types = X.types), $.T = O;
    }
  }, be.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, be.use = function(h) {
    return $.H.use(h);
  }, be.useActionState = function(h, O, X) {
    return $.H.useActionState(h, O, X);
  }, be.useCallback = function(h, O) {
    return $.H.useCallback(h, O);
  }, be.useContext = function(h) {
    return $.H.useContext(h);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(h, O) {
    return $.H.useDeferredValue(h, O);
  }, be.useEffect = function(h, O) {
    return $.H.useEffect(h, O);
  }, be.useEffectEvent = function(h) {
    return $.H.useEffectEvent(h);
  }, be.useId = function() {
    return $.H.useId();
  }, be.useImperativeHandle = function(h, O, X) {
    return $.H.useImperativeHandle(h, O, X);
  }, be.useInsertionEffect = function(h, O) {
    return $.H.useInsertionEffect(h, O);
  }, be.useLayoutEffect = function(h, O) {
    return $.H.useLayoutEffect(h, O);
  }, be.useMemo = function(h, O) {
    return $.H.useMemo(h, O);
  }, be.useOptimistic = function(h, O) {
    return $.H.useOptimistic(h, O);
  }, be.useReducer = function(h, O, X) {
    return $.H.useReducer(h, O, X);
  }, be.useRef = function(h) {
    return $.H.useRef(h);
  }, be.useState = function(h) {
    return $.H.useState(h);
  }, be.useSyncExternalStore = function(h, O, X) {
    return $.H.useSyncExternalStore(
      h,
      O,
      X
    );
  }, be.useTransition = function() {
    return $.H.useTransition();
  }, be.version = "19.2.8", be;
}
var dh;
function ur() {
  return dh || (dh = 1, Ks.exports = ig()), Ks.exports;
}
var w = ur(), Js = { exports: {} }, vi = {}, $s = { exports: {} }, Fs = {};
var hh;
function ug() {
  return hh || (hh = 1, (function(c) {
    function f(y, B) {
      var K = y.length;
      y.push(B);
      e: for (; 0 < K; ) {
        var g = K - 1 >>> 1, W = y[g];
        if (0 < E(W, B))
          y[g] = B, y[K] = W, K = g;
        else break e;
      }
    }
    function d(y) {
      return y.length === 0 ? null : y[0];
    }
    function o(y) {
      if (y.length === 0) return null;
      var B = y[0], K = y.pop();
      if (K !== B) {
        y[0] = K;
        e: for (var g = 0, W = y.length, h = W >>> 1; g < h; ) {
          var O = 2 * (g + 1) - 1, X = y[O], F = O + 1, ye = y[F];
          if (0 > E(X, K))
            F < W && 0 > E(ye, X) ? (y[g] = ye, y[F] = K, g = F) : (y[g] = X, y[O] = K, g = O);
          else if (F < W && 0 > E(ye, K))
            y[g] = ye, y[F] = K, g = F;
          else break e;
        }
      }
      return B;
    }
    function E(y, B) {
      var K = y.sortIndex - B.sortIndex;
      return K !== 0 ? K : y.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      c.unstable_now = function() {
        return S.now();
      };
    } else {
      var p = Date, q = p.now();
      c.unstable_now = function() {
        return p.now() - q;
      };
    }
    var N = [], b = [], D = 1, A = null, x = 3, L = !1, Q = !1, I = !1, te = !1, pe = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function ve(y) {
      for (var B = d(b); B !== null; ) {
        if (B.callback === null) o(b);
        else if (B.startTime <= y)
          o(b), B.sortIndex = B.expirationTime, f(N, B);
        else break;
        B = d(b);
      }
    }
    function ge(y) {
      if (I = !1, ve(y), !Q)
        if (d(N) !== null)
          Q = !0, de || (de = !0, P());
        else {
          var B = d(b);
          B !== null && we(ge, B.startTime - y);
        }
    }
    var de = !1, $ = -1, Y = 5, ie = -1;
    function k() {
      return te ? !0 : !(c.unstable_now() - ie < Y);
    }
    function G() {
      if (te = !1, de) {
        var y = c.unstable_now();
        ie = y;
        var B = !0;
        try {
          e: {
            Q = !1, I && (I = !1, Ce($), $ = -1), L = !0;
            var K = x;
            try {
              t: {
                for (ve(y), A = d(N); A !== null && !(A.expirationTime > y && k()); ) {
                  var g = A.callback;
                  if (typeof g == "function") {
                    A.callback = null, x = A.priorityLevel;
                    var W = g(
                      A.expirationTime <= y
                    );
                    if (y = c.unstable_now(), typeof W == "function") {
                      A.callback = W, ve(y), B = !0;
                      break t;
                    }
                    A === d(N) && o(N), ve(y);
                  } else o(N);
                  A = d(N);
                }
                if (A !== null) B = !0;
                else {
                  var h = d(b);
                  h !== null && we(
                    ge,
                    h.startTime - y
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
          B ? P() : de = !1;
        }
      }
    }
    var P;
    if (typeof ce == "function")
      P = function() {
        ce(G);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), Ee = ae.port2;
      ae.port1.onmessage = G, P = function() {
        Ee.postMessage(null);
      };
    } else
      P = function() {
        pe(G, 0);
      };
    function we(y, B) {
      $ = pe(function() {
        y(c.unstable_now());
      }, B);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(y) {
      y.callback = null;
    }, c.unstable_forceFrameRate = function(y) {
      0 > y || 125 < y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < y ? Math.floor(1e3 / y) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, c.unstable_next = function(y) {
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
        return y();
      } finally {
        x = K;
      }
    }, c.unstable_requestPaint = function() {
      te = !0;
    }, c.unstable_runWithPriority = function(y, B) {
      switch (y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          y = 3;
      }
      var K = x;
      x = y;
      try {
        return B();
      } finally {
        x = K;
      }
    }, c.unstable_scheduleCallback = function(y, B, K) {
      var g = c.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? g + K : g) : K = g, y) {
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
      return W = K + W, y = {
        id: D++,
        callback: B,
        priorityLevel: y,
        startTime: K,
        expirationTime: W,
        sortIndex: -1
      }, K > g ? (y.sortIndex = K, f(b, y), d(N) === null && y === d(b) && (I ? (Ce($), $ = -1) : I = !0, we(ge, K - g))) : (y.sortIndex = W, f(N, y), Q || L || (Q = !0, de || (de = !0, P()))), y;
    }, c.unstable_shouldYield = k, c.unstable_wrapCallback = function(y) {
      var B = x;
      return function() {
        var K = x;
        x = B;
        try {
          return y.apply(this, arguments);
        } finally {
          x = K;
        }
      };
    };
  })(Fs)), Fs;
}
var mh;
function cg() {
  return mh || (mh = 1, $s.exports = ug()), $s.exports;
}
var Ws = { exports: {} }, vt = {};
var vh;
function sg() {
  if (vh) return vt;
  vh = 1;
  var c = ur();
  function f(N) {
    var b = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        b += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return "Minified React error #" + N + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function S(N, b, D) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: A == null ? null : "" + A,
      children: N,
      containerInfo: b,
      implementation: D
    };
  }
  var p = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(N, b) {
    if (N === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, vt.createPortal = function(N, b) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(f(299));
    return S(N, b, null, D);
  }, vt.flushSync = function(N) {
    var b = p.T, D = o.p;
    try {
      if (p.T = null, o.p = 2, N) return N();
    } finally {
      p.T = b, o.p = D, o.d.f();
    }
  }, vt.preconnect = function(N, b) {
    typeof N == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, o.d.C(N, b));
  }, vt.prefetchDNS = function(N) {
    typeof N == "string" && o.d.D(N);
  }, vt.preinit = function(N, b) {
    if (typeof N == "string" && b && typeof b.as == "string") {
      var D = b.as, A = q(D, b.crossOrigin), x = typeof b.integrity == "string" ? b.integrity : void 0, L = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      D === "style" ? o.d.S(
        N,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: A,
          integrity: x,
          fetchPriority: L
        }
      ) : D === "script" && o.d.X(N, {
        crossOrigin: A,
        integrity: x,
        fetchPriority: L,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, vt.preinitModule = function(N, b) {
    if (typeof N == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var D = q(
            b.as,
            b.crossOrigin
          );
          o.d.M(N, {
            crossOrigin: D,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && o.d.M(N);
  }, vt.preload = function(N, b) {
    if (typeof N == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var D = b.as, A = q(D, b.crossOrigin);
      o.d.L(N, D, {
        crossOrigin: A,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, vt.preloadModule = function(N, b) {
    if (typeof N == "string")
      if (b) {
        var D = q(b.as, b.crossOrigin);
        o.d.m(N, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: D,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else o.d.m(N);
  }, vt.requestFormReset = function(N) {
    o.d.r(N);
  }, vt.unstable_batchedUpdates = function(N, b) {
    return N(b);
  }, vt.useFormState = function(N, b, D) {
    return p.H.useFormState(N, b, D);
  }, vt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, vt.version = "19.2.8", vt;
}
var gh;
function rg() {
  if (gh) return Ws.exports;
  gh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), Ws.exports = sg(), Ws.exports;
}
var yh;
function og() {
  if (yh) return vi;
  yh = 1;
  var c = cg(), f = ur(), d = rg();
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
  function p(e) {
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
  function b(e) {
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
  var A = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.transitional.element"), Q = /* @__PURE__ */ Symbol.for("react.portal"), I = /* @__PURE__ */ Symbol.for("react.fragment"), te = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), Ce = /* @__PURE__ */ Symbol.for("react.consumer"), ce = /* @__PURE__ */ Symbol.for("react.context"), ve = /* @__PURE__ */ Symbol.for("react.forward_ref"), ge = /* @__PURE__ */ Symbol.for("react.suspense"), de = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.activity"), k = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case pe:
        return "Profiler";
      case te:
        return "StrictMode";
      case ge:
        return "Suspense";
      case de:
        return "SuspenseList";
      case ie:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Q:
          return "Portal";
        case ce:
          return e.displayName || "Context";
        case Ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case ve:
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
  var we = Array.isArray, y = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, g = [], W = -1;
  function h(e) {
    return { current: e };
  }
  function O(e) {
    0 > W || (e.current = g[W], g[W] = null, W--);
  }
  function X(e, t) {
    W++, g[W] = e.current, e.current = t;
  }
  var F = h(null), ye = h(null), xe = h(null), Ne = h(null);
  function $e(e, t) {
    switch (X(xe, t), X(ye, e), X(F, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Md(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Md(t), e = Od(t, e);
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
    O(F), X(F, e);
  }
  function V() {
    O(F), O(ye), O(xe);
  }
  function Re(e) {
    e.memoizedState !== null && X(Ne, e);
    var t = F.current, a = Od(t, e.type);
    t !== a && (X(ye, e), X(F, a));
  }
  function he(e) {
    ye.current === e && (O(F), O(ye)), Ne.current === e && (O(Ne), oi._currentValue = K);
  }
  var J, Ct;
  function at(e) {
    if (J === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        J = t && t[1] || "", Ct = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + J + e + Ct;
  }
  var bt = !1;
  function wt(e, t) {
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
                  var U = `
` + m[l].replace(" at new ", " at ");
                  return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
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
  function aa(e, t) {
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
        return wt(e.type, !1);
      case 11:
        return wt(e.type.render, !1);
      case 1:
        return wt(e.type, !0);
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
        t += aa(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var st = Object.prototype.hasOwnProperty, sa = c.unstable_scheduleCallback, wa = c.unstable_cancelCallback, nl = c.unstable_shouldYield, bn = c.unstable_requestPaint, De = c.unstable_now, ra = c.unstable_getCurrentPriorityLevel, xn = c.unstable_ImmediatePriority, jn = c.unstable_UserBlockingPriority, Tl = c.unstable_NormalPriority, Sn = c.unstable_LowPriority, Al = c.unstable_IdlePriority, zl = c.log, Uu = c.unstable_setDisableYieldValue, il = null, mt = null;
  function $t(e) {
    if (typeof zl == "function" && Uu(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(il, e);
      } catch {
      }
  }
  var it = Math.clz32 ? Math.clz32 : Nn, En = Math.log, Ru = Math.LN2;
  function Nn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (En(e) / Ru | 0) | 0;
  }
  var Cl = 256, wl = 262144, Dl = 4194304;
  function oa(e) {
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
  function Ml(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~u, l !== 0 ? n = oa(l) : (s &= r, s !== 0 ? n = oa(s) : a || (a = r & ~e, a !== 0 && (n = oa(a))))) : (r = l & ~u, r !== 0 ? n = oa(r) : s !== 0 ? n = oa(s) : a || (a = l & ~e, a !== 0 && (n = oa(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function M(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Z(e, t) {
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
  function le() {
    var e = Dl;
    return Dl <<= 1, (Dl & 62914560) === 0 && (Dl = 4194304), e;
  }
  function ue(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function me(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function qe(e, t, a, l, n, u) {
    var s = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, m = e.expirationTimes, T = e.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var U = 31 - it(a), H = 1 << U;
      r[U] = 0, m[U] = -1;
      var z = T[U];
      if (z !== null)
        for (T[U] = null, U = 0; U < z.length; U++) {
          var C = z[U];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~H;
    }
    l !== 0 && oe(e, l, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function oe(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - it(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function xt(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - it(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function la(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Ft(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Ft(e) {
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
  function qu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vr() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ah(e.type));
  }
  function gr(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Da = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Da, jt = "__reactProps$" + Da, Ol = "__reactContainer$" + Da, Hu = "__reactEvents$" + Da, Zh = "__reactListeners$" + Da, Kh = "__reactHandles$" + Da, yr = "__reactResources$" + Da, _n = "__reactMarker$" + Da;
  function Bu(e) {
    delete e[rt], delete e[jt], delete e[Hu], delete e[Zh], delete e[Kh];
  }
  function Ul(e) {
    var t = e[rt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ol] || a[rt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Ld(e); e !== null; ) {
            if (a = e[rt]) return a;
            e = Ld(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Rl(e) {
    if (e = e[rt] || e[Ol]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Tn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ql(e) {
    var t = e[yr];
    return t || (t = e[yr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[_n] = !0;
  }
  var pr = /* @__PURE__ */ new Set(), br = {};
  function ul(e, t) {
    Hl(e, t), Hl(e + "Capture", t);
  }
  function Hl(e, t) {
    for (br[e] = t, e = 0; e < t.length; e++)
      pr.add(t[e]);
  }
  var Jh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xr = {}, jr = {};
  function $h(e) {
    return st.call(jr, e) ? !0 : st.call(xr, e) ? !1 : Jh.test(e) ? jr[e] = !0 : (xr[e] = !0, !1);
  }
  function xi(e, t, a) {
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
  function ji(e, t, a) {
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
  function fa(e, t, a, l) {
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
  function kt(e) {
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
  function Sr(e) {
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
  function ku(e) {
    if (!e._valueTracker) {
      var t = Sr(e) ? "checked" : "value";
      e._valueTracker = Fh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Er(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Sr(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Si(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wh = /[\n"\\]/g;
  function Lt(e) {
    return e.replace(
      Wh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Lu(e, t, a, l, n, u, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Yu(e, s, kt(t)) : a != null ? Yu(e, s, kt(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + kt(r) : e.removeAttribute("name");
  }
  function Nr(e, t, a, l, n, u, s, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ku(e);
        return;
      }
      a = a != null ? "" + kt(a) : "", t = t != null ? "" + kt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), ku(e);
  }
  function Yu(e, t, a) {
    t === "number" && Si(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Bl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + kt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = !0, l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _r(e, t, a) {
    if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + kt(a) : "";
  }
  function Tr(e, t, a, l) {
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
    a = kt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), ku(e);
  }
  function kl(e, t) {
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
  function Ar(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ih.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function zr(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t)
        l = t[n], t.hasOwnProperty(n) && a[n] !== l && Ar(e, n, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Ar(e, u, t[u]);
  }
  function Vu(e) {
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
  function Ei(e) {
    return em.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function da() {
  }
  var Gu = null;
  function Xu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ll = null, Yl = null;
  function Cr(e) {
    var t = Rl(e);
    if (t && (e = t.stateNode)) {
      var a = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Lu(
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
              'input[name="' + Lt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[jt] || null;
                if (!n) throw Error(o(90));
                Lu(
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
              l = a[t], l.form === e.form && Er(l);
          }
          break e;
        case "textarea":
          _r(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Bl(e, !!a.multiple, t, !1);
      }
    }
  }
  var Qu = !1;
  function wr(e, t, a) {
    if (Qu) return e(t, a);
    Qu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Qu = !1, (Ll !== null || Yl !== null) && (ou(), Ll && (t = Ll, e = Yl, Yl = Ll = null, Cr(t), e)))
        for (t = 0; t < e.length; t++) Cr(e[t]);
    }
  }
  function An(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[jt] || null;
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
  var ha = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zu = !1;
  if (ha)
    try {
      var zn = {};
      Object.defineProperty(zn, "passive", {
        get: function() {
          Zu = !0;
        }
      }), window.addEventListener("test", zn, zn), window.removeEventListener("test", zn, zn);
    } catch {
      Zu = !1;
    }
  var Ma = null, Ku = null, Ni = null;
  function Dr() {
    if (Ni) return Ni;
    var e, t = Ku, a = t.length, l, n = "value" in Ma ? Ma.value : Ma.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var s = a - e;
    for (l = 1; l <= s && t[a - l] === n[u - l]; l++) ;
    return Ni = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function _i(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ti() {
    return !0;
  }
  function Mr() {
    return !1;
  }
  function St(e) {
    function t(a, l, n, u, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ti : Mr, this.isPropagationStopped = Mr, this;
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ti);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ti);
      },
      persist: function() {
      },
      isPersistent: Ti
    }), t;
  }
  var cl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ai = St(cl), Cn = A({}, cl, { view: 0, detail: 0 }), tm = St(Cn), Ju, $u, wn, zi = A({}, Cn, {
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
    getModifierState: Wu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Ju = e.screenX - wn.screenX, $u = e.screenY - wn.screenY) : $u = Ju = 0, wn = e), Ju);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $u;
    }
  }), Or = St(zi), am = A({}, zi, { dataTransfer: 0 }), lm = St(am), nm = A({}, Cn, { relatedTarget: 0 }), Fu = St(nm), im = A({}, cl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = St(im), cm = A({}, cl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), sm = St(cm), rm = A({}, cl, { data: 0 }), Ur = St(rm), om = {
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
  function Wu() {
    return hm;
  }
  var mm = A({}, Cn, {
    key: function(e) {
      if (e.key) {
        var t = om[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = _i(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wu,
    charCode: function(e) {
      return e.type === "keypress" ? _i(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? _i(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), vm = St(mm), gm = A({}, zi, {
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
  }), Rr = St(gm), ym = A({}, Cn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wu
  }), pm = St(ym), bm = A({}, cl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xm = St(bm), jm = A({}, zi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sm = St(jm), Em = A({}, cl, {
    newState: 0,
    oldState: 0
  }), Nm = St(Em), _m = [9, 13, 27, 32], Iu = ha && "CompositionEvent" in window, Dn = null;
  ha && "documentMode" in document && (Dn = document.documentMode);
  var Tm = ha && "TextEvent" in window && !Dn, qr = ha && (!Iu || Dn && 8 < Dn && 11 >= Dn), Hr = " ", Br = !1;
  function kr(e, t) {
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
  function Lr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vl = !1;
  function Am(e, t) {
    switch (e) {
      case "compositionend":
        return Lr(t);
      case "keypress":
        return t.which !== 32 ? null : (Br = !0, Hr);
      case "textInput":
        return e = t.data, e === Hr && Br ? null : e;
      default:
        return null;
    }
  }
  function zm(e, t) {
    if (Vl)
      return e === "compositionend" || !Iu && kr(e, t) ? (e = Dr(), Ni = Ku = Ma = null, Vl = !1, e) : null;
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
        return qr && t.locale !== "ko" ? null : t.data;
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
  function Yr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cm[e.type] : t === "textarea";
  }
  function Vr(e, t, a, l) {
    Ll ? Yl ? Yl.push(l) : Yl = [l] : Ll = l, t = yu(t, "onChange"), 0 < t.length && (a = new Ai(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Mn = null, On = null;
  function wm(e) {
    Td(e, 0);
  }
  function Ci(e) {
    var t = Tn(e);
    if (Er(t)) return e;
  }
  function Gr(e, t) {
    if (e === "change") return t;
  }
  var Xr = !1;
  if (ha) {
    var Pu;
    if (ha) {
      var ec = "oninput" in document;
      if (!ec) {
        var Qr = document.createElement("div");
        Qr.setAttribute("oninput", "return;"), ec = typeof Qr.oninput == "function";
      }
      Pu = ec;
    } else Pu = !1;
    Xr = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zr() {
    Mn && (Mn.detachEvent("onpropertychange", Kr), On = Mn = null);
  }
  function Kr(e) {
    if (e.propertyName === "value" && Ci(On)) {
      var t = [];
      Vr(
        t,
        On,
        e,
        Xu(e)
      ), wr(wm, t);
    }
  }
  function Dm(e, t, a) {
    e === "focusin" ? (Zr(), Mn = t, On = a, Mn.attachEvent("onpropertychange", Kr)) : e === "focusout" && Zr();
  }
  function Mm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ci(On);
  }
  function Om(e, t) {
    if (e === "click") return Ci(t);
  }
  function Um(e, t) {
    if (e === "input" || e === "change")
      return Ci(t);
  }
  function Rm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : Rm;
  function Un(e, t) {
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
  function Jr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $r(e, t) {
    var a = Jr(e);
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
      a = Jr(a);
    }
  }
  function Fr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Si(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Si(e.document);
    }
    return t;
  }
  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qm = ha && "documentMode" in document && 11 >= document.documentMode, Gl = null, ac = null, Rn = null, lc = !1;
  function Ir(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    lc || Gl == null || Gl !== Si(l) || (l = Gl, "selectionStart" in l && tc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Rn && Un(Rn, l) || (Rn = l, l = yu(ac, "onSelect"), 0 < l.length && (t = new Ai(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Gl)));
  }
  function sl(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Xl = {
    animationend: sl("Animation", "AnimationEnd"),
    animationiteration: sl("Animation", "AnimationIteration"),
    animationstart: sl("Animation", "AnimationStart"),
    transitionrun: sl("Transition", "TransitionRun"),
    transitionstart: sl("Transition", "TransitionStart"),
    transitioncancel: sl("Transition", "TransitionCancel"),
    transitionend: sl("Transition", "TransitionEnd")
  }, nc = {}, Pr = {};
  ha && (Pr = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function rl(e) {
    if (nc[e]) return nc[e];
    if (!Xl[e]) return e;
    var t = Xl[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Pr)
        return nc[e] = t[a];
    return e;
  }
  var eo = rl("animationend"), to = rl("animationiteration"), ao = rl("animationstart"), Hm = rl("transitionrun"), Bm = rl("transitionstart"), km = rl("transitioncancel"), lo = rl("transitionend"), no = /* @__PURE__ */ new Map(), ic = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ic.push("scrollEnd");
  function Wt(e, t) {
    no.set(e, t), ul(t, [e]);
  }
  var wi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Yt = [], Ql = 0, uc = 0;
  function Di() {
    for (var e = Ql, t = uc = Ql = 0; t < e; ) {
      var a = Yt[t];
      Yt[t++] = null;
      var l = Yt[t];
      Yt[t++] = null;
      var n = Yt[t];
      Yt[t++] = null;
      var u = Yt[t];
      if (Yt[t++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      u !== 0 && io(a, n, u);
    }
  }
  function Mi(e, t, a, l) {
    Yt[Ql++] = e, Yt[Ql++] = t, Yt[Ql++] = a, Yt[Ql++] = l, uc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function cc(e, t, a, l) {
    return Mi(e, t, a, l), Oi(e);
  }
  function ol(e, t) {
    return Mi(e, null, null, t), Oi(e);
  }
  function io(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - it(a), e = u.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Oi(e) {
    if (50 < li)
      throw li = 0, gs = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Zl = {};
  function Lm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, a, l) {
    return new Lm(e, t, a, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ma(e, t) {
    var a = e.alternate;
    return a === null ? (a = Mt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function uo(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ui(e, t, a, l, n, u) {
    var s = 0;
    if (l = e, typeof e == "function") sc(e) && (s = 1);
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
        case I:
          return fl(a.children, n, u, t);
        case te:
          s = 8, n |= 24;
          break;
        case pe:
          return e = Mt(12, a, t, n | 2), e.elementType = pe, e.lanes = u, e;
        case ge:
          return e = Mt(13, a, t, n), e.elementType = ge, e.lanes = u, e;
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
              case ve:
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
  function fl(e, t, a, l) {
    return e = Mt(7, e, l, t), e.lanes = a, e;
  }
  function rc(e, t, a) {
    return e = Mt(6, e, null, t), e.lanes = a, e;
  }
  function co(e) {
    var t = Mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function oc(e, t, a) {
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
  var so = /* @__PURE__ */ new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = so.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: yt(t)
      }, so.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: yt(t)
    };
  }
  var Kl = [], Jl = 0, Ri = null, qn = 0, Gt = [], Xt = 0, Oa = null, na = 1, ia = "";
  function va(e, t) {
    Kl[Jl++] = qn, Kl[Jl++] = Ri, Ri = e, qn = t;
  }
  function ro(e, t, a) {
    Gt[Xt++] = na, Gt[Xt++] = ia, Gt[Xt++] = Oa, Oa = e;
    var l = na;
    e = ia;
    var n = 32 - it(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - it(t) + n;
    if (30 < u) {
      var s = n - n % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, na = 1 << 32 - it(t) + n | a << n | l, ia = u + e;
    } else
      na = 1 << u | a << n | l, ia = e;
  }
  function fc(e) {
    e.return !== null && (va(e, 1), ro(e, 1, 0));
  }
  function dc(e) {
    for (; e === Ri; )
      Ri = Kl[--Jl], Kl[Jl] = null, qn = Kl[--Jl], Kl[Jl] = null;
    for (; e === Oa; )
      Oa = Gt[--Xt], Gt[Xt] = null, ia = Gt[--Xt], Gt[Xt] = null, na = Gt[--Xt], Gt[Xt] = null;
  }
  function oo(e, t) {
    Gt[Xt++] = na, Gt[Xt++] = ia, Gt[Xt++] = Oa, na = t.id, ia = t.overflow, Oa = e;
  }
  var ot = null, Xe = null, Me = !1, Ua = null, Qt = !1, hc = Error(o(519));
  function Ra(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Hn(Vt(t, e)), hc;
  }
  function fo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[rt] = e, t[jt] = l, a) {
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
        for (a = 0; a < ii.length; a++)
          Te(ii[a], t);
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
        Te("invalid", t), Nr(
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
        Te("invalid", t), Tr(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || wd(t.textContent, a) ? (l.popover != null && (Te("beforetoggle", t), Te("toggle", t)), l.onScroll != null && Te("scroll", t), l.onScrollEnd != null && Te("scrollend", t), l.onClick != null && (t.onclick = da), t = !0) : t = !1, t || Ra(e, !0);
  }
  function ho(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          Qt = !1;
          return;
        case 27:
        case 3:
          Qt = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function $l(e) {
    if (e !== ot) return !1;
    if (!Me) return ho(e), Me = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ds(e.type, e.memoizedProps)), a = !a), a && Xe && Ra(e), ho(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Xe = kd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Xe = kd(e);
    } else
      t === 27 ? (t = Xe, $a(e.type) ? (e = qs, qs = null, Xe = e) : Xe = t) : Xe = ot ? Kt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dl() {
    Xe = ot = null, Me = !1;
  }
  function mc() {
    var e = Ua;
    return e !== null && (Tt === null ? Tt = e : Tt.push.apply(
      Tt,
      e
    ), Ua = null), e;
  }
  function Hn(e) {
    Ua === null ? Ua = [e] : Ua.push(e);
  }
  var vc = h(null), hl = null, ga = null;
  function qa(e, t, a) {
    X(vc, t._currentValue), t._currentValue = a;
  }
  function ya(e) {
    e._currentValue = vc.current, O(vc);
  }
  function gc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function yc(e, t, a, l) {
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
  function Fl(e, t, a, l) {
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
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(oi) : e = [oi]);
      }
      n = n.return;
    }
    e !== null && yc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function qi(e) {
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
  function ml(e) {
    hl = e, ga = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return mo(hl, e);
  }
  function Hi(e, t) {
    return hl === null && ml(e), mo(e, t);
  }
  function mo(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ga === null) {
      if (e === null) throw Error(o(308));
      ga = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ga = ga.next = t;
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
  function pc() {
    return {
      controller: new Ym(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bn(e) {
    e.refCount--, e.refCount === 0 && Vm(Gm, function() {
      e.controller.abort();
    });
  }
  var kn = null, bc = 0, Wl = 0, Il = null;
  function Xm(e, t) {
    if (kn === null) {
      var a = kn = [];
      bc = 0, Wl = Ss(), Il = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return bc++, t.then(vo, vo), t;
  }
  function vo() {
    if (--bc === 0 && kn !== null) {
      Il !== null && (Il.status = "fulfilled");
      var e = kn;
      kn = null, Wl = 0, Il = null;
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
  var go = y.S;
  y.S = function(e, t) {
    ed = De(), typeof t == "object" && t !== null && typeof t.then == "function" && Xm(e, t), go !== null && go(e, t);
  };
  var vl = h(null);
  function xc() {
    var e = vl.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Bi(e, t) {
    t === null ? X(vl, vl.current) : X(vl, t.pool);
  }
  function yo() {
    var e = xc();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Pl = Error(o(460)), jc = Error(o(474)), ki = Error(o(542)), Li = { then: function() {
  } };
  function po(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function bo(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(da, da), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, jo(e), e;
      default:
        if (typeof t.status == "string") t.then(da, da);
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
            throw e = t.reason, jo(e), e;
        }
        throw yl = t, Pl;
    }
  }
  function gl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (yl = a, Pl) : a;
    }
  }
  var yl = null;
  function xo() {
    if (yl === null) throw Error(o(459));
    var e = yl;
    return yl = null, e;
  }
  function jo(e) {
    if (e === Pl || e === ki)
      throw Error(o(483));
  }
  var en = null, Ln = 0;
  function Yi(e) {
    var t = Ln;
    return Ln += 1, en === null && (en = []), bo(en, e, t);
  }
  function Yn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Vi(e, t) {
    throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function So(e) {
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
      return j = ma(j, v), j.index = 0, j.sibling = null, j;
    }
    function u(j, v, _) {
      return j.index = _, e ? (_ = j.alternate, _ !== null ? (_ = _.index, _ < v ? (j.flags |= 67108866, v) : _) : (j.flags |= 67108866, v)) : (j.flags |= 1048576, v);
    }
    function s(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function r(j, v, _, R) {
      return v === null || v.tag !== 6 ? (v = rc(_, j.mode, R), v.return = j, v) : (v = n(v, _), v.return = j, v);
    }
    function m(j, v, _, R) {
      var re = _.type;
      return re === I ? U(
        j,
        v,
        _.props.children,
        R,
        _.key
      ) : v !== null && (v.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Y && gl(re) === v.type) ? (v = n(v, _.props), Yn(v, _), v.return = j, v) : (v = Ui(
        _.type,
        _.key,
        _.props,
        null,
        j.mode,
        R
      ), Yn(v, _), v.return = j, v);
    }
    function T(j, v, _, R) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== _.containerInfo || v.stateNode.implementation !== _.implementation ? (v = oc(_, j.mode, R), v.return = j, v) : (v = n(v, _.children || []), v.return = j, v);
    }
    function U(j, v, _, R, re) {
      return v === null || v.tag !== 7 ? (v = fl(
        _,
        j.mode,
        R,
        re
      ), v.return = j, v) : (v = n(v, _), v.return = j, v);
    }
    function H(j, v, _) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = rc(
          "" + v,
          j.mode,
          _
        ), v.return = j, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case L:
            return _ = Ui(
              v.type,
              v.key,
              v.props,
              null,
              j.mode,
              _
            ), Yn(_, v), _.return = j, _;
          case Q:
            return v = oc(
              v,
              j.mode,
              _
            ), v.return = j, v;
          case Y:
            return v = gl(v), H(j, v, _);
        }
        if (we(v) || P(v))
          return v = fl(
            v,
            j.mode,
            _,
            null
          ), v.return = j, v;
        if (typeof v.then == "function")
          return H(j, Yi(v), _);
        if (v.$$typeof === ce)
          return H(
            j,
            Hi(j, v),
            _
          );
        Vi(j, v);
      }
      return null;
    }
    function z(j, v, _, R) {
      var re = v !== null ? v.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return re !== null ? null : r(j, v, "" + _, R);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case L:
            return _.key === re ? m(j, v, _, R) : null;
          case Q:
            return _.key === re ? T(j, v, _, R) : null;
          case Y:
            return _ = gl(_), z(j, v, _, R);
        }
        if (we(_) || P(_))
          return re !== null ? null : U(j, v, _, R, null);
        if (typeof _.then == "function")
          return z(
            j,
            v,
            Yi(_),
            R
          );
        if (_.$$typeof === ce)
          return z(
            j,
            v,
            Hi(j, _),
            R
          );
        Vi(j, _);
      }
      return null;
    }
    function C(j, v, _, R, re) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return j = j.get(_) || null, r(v, j, "" + R, re);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case L:
            return j = j.get(
              R.key === null ? _ : R.key
            ) || null, m(v, j, R, re);
          case Q:
            return j = j.get(
              R.key === null ? _ : R.key
            ) || null, T(v, j, R, re);
          case Y:
            return R = gl(R), C(
              j,
              v,
              _,
              R,
              re
            );
        }
        if (we(R) || P(R))
          return j = j.get(_) || null, U(v, j, R, re, null);
        if (typeof R.then == "function")
          return C(
            j,
            v,
            _,
            Yi(R),
            re
          );
        if (R.$$typeof === ce)
          return C(
            j,
            v,
            _,
            Hi(v, R),
            re
          );
        Vi(v, R);
      }
      return null;
    }
    function ee(j, v, _, R) {
      for (var re = null, Oe = null, ne = v, Se = v = 0, ze = null; ne !== null && Se < _.length; Se++) {
        ne.index > Se ? (ze = ne, ne = null) : ze = ne.sibling;
        var Ue = z(
          j,
          ne,
          _[Se],
          R
        );
        if (Ue === null) {
          ne === null && (ne = ze);
          break;
        }
        e && ne && Ue.alternate === null && t(j, ne), v = u(Ue, v, Se), Oe === null ? re = Ue : Oe.sibling = Ue, Oe = Ue, ne = ze;
      }
      if (Se === _.length)
        return a(j, ne), Me && va(j, Se), re;
      if (ne === null) {
        for (; Se < _.length; Se++)
          ne = H(j, _[Se], R), ne !== null && (v = u(
            ne,
            v,
            Se
          ), Oe === null ? re = ne : Oe.sibling = ne, Oe = ne);
        return Me && va(j, Se), re;
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
        ), Oe === null ? re = ze : Oe.sibling = ze, Oe = ze);
      return e && ne.forEach(function(el) {
        return t(j, el);
      }), Me && va(j, Se), re;
    }
    function fe(j, v, _, R) {
      if (_ == null) throw Error(o(151));
      for (var re = null, Oe = null, ne = v, Se = v = 0, ze = null, Ue = _.next(); ne !== null && !Ue.done; Se++, Ue = _.next()) {
        ne.index > Se ? (ze = ne, ne = null) : ze = ne.sibling;
        var el = z(j, ne, Ue.value, R);
        if (el === null) {
          ne === null && (ne = ze);
          break;
        }
        e && ne && el.alternate === null && t(j, ne), v = u(el, v, Se), Oe === null ? re = el : Oe.sibling = el, Oe = el, ne = ze;
      }
      if (Ue.done)
        return a(j, ne), Me && va(j, Se), re;
      if (ne === null) {
        for (; !Ue.done; Se++, Ue = _.next())
          Ue = H(j, Ue.value, R), Ue !== null && (v = u(Ue, v, Se), Oe === null ? re = Ue : Oe.sibling = Ue, Oe = Ue);
        return Me && va(j, Se), re;
      }
      for (ne = l(ne); !Ue.done; Se++, Ue = _.next())
        Ue = C(ne, j, Se, Ue.value, R), Ue !== null && (e && Ue.alternate !== null && ne.delete(Ue.key === null ? Se : Ue.key), v = u(Ue, v, Se), Oe === null ? re = Ue : Oe.sibling = Ue, Oe = Ue);
      return e && ne.forEach(function(ag) {
        return t(j, ag);
      }), Me && va(j, Se), re;
    }
    function Ve(j, v, _, R) {
      if (typeof _ == "object" && _ !== null && _.type === I && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case L:
            e: {
              for (var re = _.key; v !== null; ) {
                if (v.key === re) {
                  if (re = _.type, re === I) {
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
                  } else if (v.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Y && gl(re) === v.type) {
                    a(
                      j,
                      v.sibling
                    ), R = n(v, _.props), Yn(R, _), R.return = j, j = R;
                    break e;
                  }
                  a(j, v);
                  break;
                } else t(j, v);
                v = v.sibling;
              }
              _.type === I ? (R = fl(
                _.props.children,
                j.mode,
                R,
                _.key
              ), R.return = j, j = R) : (R = Ui(
                _.type,
                _.key,
                _.props,
                null,
                j.mode,
                R
              ), Yn(R, _), R.return = j, j = R);
            }
            return s(j);
          case Q:
            e: {
              for (re = _.key; v !== null; ) {
                if (v.key === re)
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
              R = oc(_, j.mode, R), R.return = j, j = R;
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
        if (P(_)) {
          if (re = P(_), typeof re != "function") throw Error(o(150));
          return _ = re.call(_), fe(
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
            Yi(_),
            R
          );
        if (_.$$typeof === ce)
          return Ve(
            j,
            v,
            Hi(j, _),
            R
          );
        Vi(j, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, v !== null && v.tag === 6 ? (a(j, v.sibling), R = n(v, _), R.return = j, j = R) : (a(j, v), R = rc(_, j.mode, R), R.return = j, j = R), s(j)) : a(j, v);
    }
    return function(j, v, _, R) {
      try {
        Ln = 0;
        var re = Ve(
          j,
          v,
          _,
          R
        );
        return en = null, re;
      } catch (ne) {
        if (ne === Pl || ne === ki) throw ne;
        var Oe = Mt(29, ne, null, j.mode);
        return Oe.lanes = R, Oe.return = j, Oe;
      }
    };
  }
  var pl = So(!0), Eo = So(!1), Ha = !1;
  function Sc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ec(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ba(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (He & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Oi(e), io(e, null, a), t;
    }
    return Mi(e, l, t, a), Oi(e);
  }
  function Vn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, xt(e, a);
    }
  }
  function Nc(e, t) {
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
  var _c = !1;
  function Gn() {
    if (_c) {
      var e = Il;
      if (e !== null) throw e;
    }
  }
  function Xn(e, t, a, l) {
    _c = !1;
    var n = e.updateQueue;
    Ha = !1;
    var u = n.firstBaseUpdate, s = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var m = r, T = m.next;
      m.next = null, s === null ? u = T : s.next = T, s = m;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, r = U.lastBaseUpdate, r !== s && (r === null ? U.firstBaseUpdate = T : r.next = T, U.lastBaseUpdate = m));
    }
    if (u !== null) {
      var H = n.baseState;
      s = 0, U = T = m = null, r = u;
      do {
        var z = r.lane & -536870913, C = z !== r.lane;
        if (C ? (Ae & z) === z : (l & z) === z) {
          z !== 0 && z === Wl && (_c = !0), U !== null && (U = U.next = {
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
                Ha = !0;
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
          }, U === null ? (T = U = C, m = H) : U = U.next = C, s |= z;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          C = r, r = C.next, C.next = null, n.lastBaseUpdate = C, n.shared.pending = null;
        }
      } while (!0);
      U === null && (m = H), n.baseState = m, n.firstBaseUpdate = T, n.lastBaseUpdate = U, u === null && (n.shared.lanes = 0), Xa |= s, e.lanes = s, e.memoizedState = H;
    }
  }
  function No(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function _o(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        No(a[e], t);
  }
  var tn = h(null), Gi = h(0);
  function To(e, t) {
    e = Ta, X(Gi, e), X(tn, t), Ta = e | t.baseLanes;
  }
  function Tc() {
    X(Gi, Ta), X(tn, tn.current);
  }
  function Ac() {
    Ta = Gi.current, O(tn), O(Gi);
  }
  var Ot = h(null), Zt = null;
  function La(e) {
    var t = e.alternate;
    X(Fe, Fe.current & 1), X(Ot, e), Zt === null && (t === null || tn.current !== null || t.memoizedState !== null) && (Zt = e);
  }
  function zc(e) {
    X(Fe, Fe.current), X(Ot, e), Zt === null && (Zt = e);
  }
  function Ao(e) {
    e.tag === 22 ? (X(Fe, Fe.current), X(Ot, e), Zt === null && (Zt = e)) : Ya();
  }
  function Ya() {
    X(Fe, Fe.current), X(Ot, Ot.current);
  }
  function Ut(e) {
    O(Ot), Zt === e && (Zt = null), O(Fe);
  }
  var Fe = h(0);
  function Xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Us(a) || Rs(a)))
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
  var pa = 0, je = null, Le = null, Pe = null, Qi = !1, an = !1, bl = !1, Zi = 0, Qn = 0, ln = null, Zm = 0;
  function Ke() {
    throw Error(o(321));
  }
  function Cc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Dt(e[a], t[a])) return !1;
    return !0;
  }
  function wc(e, t, a, l, n, u) {
    return pa = u, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, y.H = e === null || e.memoizedState === null ? ff : Qc, bl = !1, u = a(l, n), bl = !1, an && (u = Co(
      t,
      a,
      l,
      n
    )), zo(e), u;
  }
  function zo(e) {
    y.H = Jn;
    var t = Le !== null && Le.next !== null;
    if (pa = 0, Pe = Le = je = null, Qi = !1, Qn = 0, ln = null, t) throw Error(o(300));
    e === null || et || (e = e.dependencies, e !== null && qi(e) && (et = !0));
  }
  function Co(e, t, a, l) {
    je = e;
    var n = 0;
    do {
      if (an && (ln = null), Qn = 0, an = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Pe = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      y.H = df, u = t(a, l);
    } while (an);
    return u;
  }
  function Km() {
    var e = y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Zn(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (je.flags |= 1024), t;
  }
  function Dc() {
    var e = Zi !== 0;
    return Zi = 0, e;
  }
  function Mc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Oc(e) {
    if (Qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Qi = !1;
    }
    pa = 0, Pe = Le = je = null, an = !1, Qn = Zi = 0, ln = null;
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
  function We() {
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
  function Ki() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zn(e) {
    var t = Qn;
    return Qn += 1, ln === null && (ln = []), e = bo(ln, e, t), t = je, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, y.H = t === null || t.memoizedState === null ? ff : Qc), e;
  }
  function Ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Zn(e);
      if (e.$$typeof === ce) return ft(e);
    }
    throw Error(o(438, String(e)));
  }
  function Uc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ki(), je.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = k;
    return t.index++, a;
  }
  function ba(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = We();
    return Rc(t, Le, e);
  }
  function Rc(e, t, a) {
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
      var r = s = null, m = null, T = t, U = !1;
      do {
        var H = T.lane & -536870913;
        if (H !== T.lane ? (Ae & H) === H : (pa & H) === H) {
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
            }), H === Wl && (U = !0);
          else if ((pa & z) === z) {
            T = T.next, z === Wl && (U = !0);
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
            }, m === null ? (r = m = H, s = u) : m = m.next = H, je.lanes |= z, Xa |= z;
          H = T.action, bl && a(u, H), u = T.hasEagerState ? T.eagerState : a(u, H);
        } else
          z = {
            lane: H,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, m === null ? (r = m = z, s = u) : m = m.next = z, je.lanes |= H, Xa |= H;
        T = T.next;
      } while (T !== null && T !== t);
      if (m === null ? s = u : m.next = r, !Dt(u, e.memoizedState) && (et = !0, U && (a = Il, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function qc(e) {
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
      Dt(u, t.memoizedState) || (et = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function wo(e, t, a) {
    var l = je, n = We(), u = Me;
    if (u) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var s = !Dt(
      (Le || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, et = !0), n = n.queue, kc(Oo.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || s || Pe !== null && Pe.memoizedState.tag & 1) {
      if (l.flags |= 2048, nn(
        9,
        { destroy: void 0 },
        Mo.bind(
          null,
          l,
          n,
          a,
          t
        ),
        null
      ), Ge === null) throw Error(o(349));
      u || (pa & 127) !== 0 || Do(l, t, a);
    }
    return a;
  }
  function Do(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = je.updateQueue, t === null ? (t = Ki(), je.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Mo(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Uo(t) && Ro(e);
  }
  function Oo(e, t, a) {
    return a(function() {
      Uo(t) && Ro(e);
    });
  }
  function Uo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Dt(e, a);
    } catch {
      return !0;
    }
  }
  function Ro(e) {
    var t = ol(e, 2);
    t !== null && At(t, e, 2);
  }
  function Hc(e) {
    var t = pt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), bl) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ba,
      lastRenderedState: e
    }, t;
  }
  function qo(e, t, a, l) {
    return e.baseState = a, Rc(
      e,
      Le,
      typeof l == "function" ? l : ba
    );
  }
  function Jm(e, t, a, l, n) {
    if (Ii(e)) throw Error(o(485));
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
      y.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, Ho(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Ho(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var u = y.T, s = {};
      y.T = s;
      try {
        var r = a(n, l), m = y.S;
        m !== null && m(s, r), Bo(e, t, r);
      } catch (T) {
        Bc(e, t, T);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), y.T = u;
      }
    } else
      try {
        u = a(n, l), Bo(e, t, u);
      } catch (T) {
        Bc(e, t, T);
      }
  }
  function Bo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        ko(e, t, l);
      },
      function(l) {
        return Bc(e, t, l);
      }
    ) : ko(e, t, a);
  }
  function ko(e, t, a) {
    t.status = "fulfilled", t.value = a, Lo(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ho(e, a)));
  }
  function Bc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Lo(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Lo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Yo(e, t) {
    return t;
  }
  function Vo(e, t) {
    if (Me) {
      var a = Ge.formState;
      if (a !== null) {
        e: {
          var l = je;
          if (Me) {
            if (Xe) {
              t: {
                for (var n = Xe, u = Qt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = Kt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Xe = Kt(
                  n.nextSibling
                ), l = n.data === "F!";
                break e;
              }
            }
            Ra(l);
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
      lastRenderedReducer: Yo,
      lastRenderedState: t
    }, a.queue = l, a = sf.bind(
      null,
      je,
      l
    ), l.dispatch = a, l = Hc(!1), u = Xc.bind(
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
  function Go(e) {
    var t = We();
    return Xo(t, Le, e);
  }
  function Xo(e, t, a) {
    if (t = Rc(
      e,
      t,
      Yo
    )[0], e = $i(ba)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Zn(t);
      } catch (s) {
        throw s === Pl ? ki : s;
      }
    else l = t;
    t = We();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (je.flags |= 2048, nn(
      9,
      { destroy: void 0 },
      $m.bind(null, n, a),
      null
    )), [l, u, e];
  }
  function $m(e, t) {
    e.action = t;
  }
  function Qo(e) {
    var t = We(), a = Le;
    if (a !== null)
      return Xo(t, a, e);
    We(), t = t.memoizedState, a = We();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function nn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = je.updateQueue, t === null && (t = Ki(), je.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Zo() {
    return We().memoizedState;
  }
  function Fi(e, t, a, l) {
    var n = pt();
    je.flags |= e, n.memoizedState = nn(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Wi(e, t, a, l) {
    var n = We();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    Le !== null && l !== null && Cc(l, Le.memoizedState.deps) ? n.memoizedState = nn(t, u, a, l) : (je.flags |= e, n.memoizedState = nn(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Ko(e, t) {
    Fi(8390656, 8, e, t);
  }
  function kc(e, t) {
    Wi(2048, 8, e, t);
  }
  function Fm(e) {
    je.flags |= 4;
    var t = je.updateQueue;
    if (t === null)
      t = Ki(), je.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Jo(e) {
    var t = We().memoizedState;
    return Fm({ ref: t, nextImpl: e }), function() {
      if ((He & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function $o(e, t) {
    return Wi(4, 2, e, t);
  }
  function Fo(e, t) {
    return Wi(4, 4, e, t);
  }
  function Wo(e, t) {
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
  function Io(e, t, a) {
    a = a != null ? a.concat([e]) : null, Wi(4, 4, Wo.bind(null, t, e), a);
  }
  function Lc() {
  }
  function Po(e, t) {
    var a = We();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Cc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function ef(e, t) {
    var a = We();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Cc(t, l[1]))
      return l[0];
    if (l = e(), bl) {
      $t(!0);
      try {
        e();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Yc(e, t, a) {
    return a === void 0 || (pa & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = ad(), je.lanes |= e, Xa |= e, a);
  }
  function tf(e, t, a, l) {
    return Dt(a, t) ? a : tn.current !== null ? (e = Yc(e, a, l), Dt(e, t) || (et = !0), e) : (pa & 42) === 0 || (pa & 1073741824) !== 0 && (Ae & 261930) === 0 ? (et = !0, e.memoizedState = a) : (e = ad(), je.lanes |= e, Xa |= e, t);
  }
  function af(e, t, a, l, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var s = y.T, r = {};
    y.T = r, Xc(e, !1, t, a);
    try {
      var m = n(), T = y.S;
      if (T !== null && T(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var U = Qm(
          m,
          l
        );
        Kn(
          e,
          t,
          U,
          Ht(e)
        );
      } else
        Kn(
          e,
          t,
          l,
          Ht(e)
        );
    } catch (H) {
      Kn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Ht()
      );
    } finally {
      B.p = u, s !== null && r.types !== null && (s.types = r.types), y.T = s;
    }
  }
  function Wm() {
  }
  function Vc(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var n = lf(e).queue;
    af(
      e,
      n,
      t,
      K,
      a === null ? Wm : function() {
        return nf(e), a(l);
      }
    );
  }
  function lf(e) {
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
        lastRenderedReducer: ba,
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
        lastRenderedReducer: ba,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function nf(e) {
    var t = lf(e);
    t.next === null && (t = e.alternate.memoizedState), Kn(
      e,
      t.next.queue,
      {},
      Ht()
    );
  }
  function Gc() {
    return ft(oi);
  }
  function uf() {
    return We().memoizedState;
  }
  function cf() {
    return We().memoizedState;
  }
  function Im(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ht();
          e = Ba(a);
          var l = ka(t, e, a);
          l !== null && (At(l, t, a), Vn(l, t, a)), t = { cache: pc() }, e.payload = t;
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
    }, Ii(e) ? rf(t, a) : (a = cc(e, t, a, l), a !== null && (At(a, e, l), of(a, t, l)));
  }
  function sf(e, t, a) {
    var l = Ht();
    Kn(e, t, a, l);
  }
  function Kn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ii(e)) rf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, r = u(s, a);
          if (n.hasEagerState = !0, n.eagerState = r, Dt(r, s))
            return Mi(e, t, n, 0), Ge === null && Di(), !1;
        } catch {
        }
      if (a = cc(e, t, n, l), a !== null)
        return At(a, e, l), of(a, t, l), !0;
    }
    return !1;
  }
  function Xc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ss(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ii(e)) {
      if (t) throw Error(o(479));
    } else
      t = cc(
        e,
        a,
        l,
        2
      ), t !== null && At(t, e, 2);
  }
  function Ii(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je;
  }
  function rf(e, t) {
    an = Qi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function of(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, xt(e, a);
    }
  }
  var Jn = {
    readContext: ft,
    use: Ji,
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
  Jn.useEffectEvent = Ke;
  var ff = {
    readContext: ft,
    use: Ji,
    useCallback: function(e, t) {
      return pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: Ko,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Fi(
        4194308,
        4,
        Wo.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Fi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Fi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = pt();
      t = t === void 0 ? null : t;
      var l = e();
      if (bl) {
        $t(!0);
        try {
          e();
        } finally {
          $t(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = pt();
      if (a !== void 0) {
        var n = a(t);
        if (bl) {
          $t(!0);
          try {
            a(t);
          } finally {
            $t(!1);
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
      e = Hc(e);
      var t = e.queue, a = sf.bind(null, je, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var a = pt();
      return Yc(a, e, t);
    },
    useTransition: function() {
      var e = Hc(!1);
      return e = af.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = je, n = pt();
      if (Me) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Ge === null)
          throw Error(o(349));
        (Ae & 127) !== 0 || Do(l, t, a);
      }
      n.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return n.queue = u, Ko(Oo.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, nn(
        9,
        { destroy: void 0 },
        Mo.bind(
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
      if (Me) {
        var a = ia, l = na;
        a = (l & ~(1 << 32 - it(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Zi++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Zm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Gc,
    useFormState: Vo,
    useActionState: Vo,
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
      return t.queue = a, t = Xc.bind(
        null,
        je,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Uc,
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
  }, Qc = {
    readContext: ft,
    use: Ji,
    useCallback: Po,
    useContext: ft,
    useEffect: kc,
    useImperativeHandle: Io,
    useInsertionEffect: $o,
    useLayoutEffect: Fo,
    useMemo: ef,
    useReducer: $i,
    useRef: Zo,
    useState: function() {
      return $i(ba);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var a = We();
      return tf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = $i(ba)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Zn(e),
        t
      ];
    },
    useSyncExternalStore: wo,
    useId: uf,
    useHostTransitionStatus: Gc,
    useFormState: Go,
    useActionState: Go,
    useOptimistic: function(e, t) {
      var a = We();
      return qo(a, Le, e, t);
    },
    useMemoCache: Uc,
    useCacheRefresh: cf
  };
  Qc.useEffectEvent = Jo;
  var df = {
    readContext: ft,
    use: Ji,
    useCallback: Po,
    useContext: ft,
    useEffect: kc,
    useImperativeHandle: Io,
    useInsertionEffect: $o,
    useLayoutEffect: Fo,
    useMemo: ef,
    useReducer: qc,
    useRef: Zo,
    useState: function() {
      return qc(ba);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var a = We();
      return Le === null ? Yc(a, e, t) : tf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qc(ba)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Zn(e),
        t
      ];
    },
    useSyncExternalStore: wo,
    useId: uf,
    useHostTransitionStatus: Gc,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function(e, t) {
      var a = We();
      return Le !== null ? qo(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: cf
  };
  df.useEffectEvent = Jo;
  function Zc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : A({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Kc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), n = Ba(l);
      n.payload = t, a != null && (n.callback = a), t = ka(e, n, l), t !== null && (At(t, e, l), Vn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), n = Ba(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = ka(e, n, l), t !== null && (At(t, e, l), Vn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ht(), l = Ba(a);
      l.tag = 2, t != null && (l.callback = t), t = ka(e, l, a), t !== null && (At(t, e, a), Vn(t, e, a));
    }
  };
  function hf(e, t, a, l, n, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, s) : t.prototype && t.prototype.isPureReactComponent ? !Un(a, l) || !Un(n, u) : !0;
  }
  function mf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Kc.enqueueReplaceState(t, t.state, null);
  }
  function xl(e, t) {
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
  function vf(e) {
    wi(e);
  }
  function gf(e) {
    console.error(e);
  }
  function yf(e) {
    wi(e);
  }
  function Pi(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function pf(e, t, a) {
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
  function Jc(e, t, a) {
    return a = Ba(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Pi(e, t);
    }, a;
  }
  function bf(e) {
    return e = Ba(e), e.tag = 3, e;
  }
  function xf(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        pf(t, a, l);
      };
    }
    var s = a.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      pf(t, a, l), typeof n != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
      var r = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function ev(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Fl(
        t,
        a,
        n,
        !0
      ), a = Ot.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Zt === null ? fu() : a.alternate === null && Je === 0 && (Je = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Li ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), bs(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Li ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), bs(e, l, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return bs(e, l, n), fu(), !1;
    }
    if (Me)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== hc && (e = Error(o(422), { cause: l }), Hn(Vt(e, a)))) : (l !== hc && (t = Error(o(423), {
        cause: l
      }), Hn(
        Vt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = Vt(l, a), n = Jc(
        e.stateNode,
        l,
        n
      ), Nc(e, n), Je !== 4 && (Je = 2)), !1;
    var u = Error(o(520), { cause: l });
    if (u = Vt(u, a), ai === null ? ai = [u] : ai.push(u), Je !== 4 && (Je = 2), t === null) return !0;
    l = Vt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = Jc(a.stateNode, l, e), Nc(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Qa === null || !Qa.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = bf(n), xf(
              n,
              e,
              a,
              l
            ), Nc(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var $c = Error(o(461)), et = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? Eo(t, null, a, l) : pl(
      t,
      e.child,
      a,
      l
    );
  }
  function jf(e, t, a, l, n) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var r in l)
        r !== "ref" && (s[r] = l[r]);
    } else s = l;
    return ml(t), l = wc(
      e,
      t,
      a,
      s,
      u,
      n
    ), r = Dc(), e !== null && !et ? (Mc(e, t, n), xa(e, t, n)) : (Me && r && fc(t), t.flags |= 1, dt(e, t, l, n), t.child);
  }
  function Sf(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !sc(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Ef(
        e,
        t,
        u,
        l,
        n
      )) : (e = Ui(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ls(e, n)) {
      var s = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Un, a(s, l) && e.ref === t.ref)
        return xa(e, t, n);
    }
    return t.flags |= 1, e = ma(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ef(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Un(u, l) && e.ref === t.ref)
        if (et = !1, t.pendingProps = l = u, ls(e, n))
          (e.flags & 131072) !== 0 && (et = !0);
        else
          return t.lanes = e.lanes, xa(e, t, n);
    }
    return Fc(
      e,
      t,
      a,
      l,
      n
    );
  }
  function Nf(e, t, a, l) {
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
        return _f(
          e,
          t,
          u,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Bi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? To(t, u) : Tc(), Ao(t);
      else
        return l = t.lanes = 536870912, _f(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Bi(t, u.cachePool), To(t, u), Ya(), t.memoizedState = null) : (e !== null && Bi(t, null), Tc(), Ya());
    return dt(e, t, n, a), t.child;
  }
  function $n(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function _f(e, t, a, l, n) {
    var u = xc();
    return u = u === null ? null : { parent: Ie._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Bi(t, null), Tc(), Ao(t), e !== null && Fl(e, t, l, !0), t.childLanes = n, null;
  }
  function eu(e, t) {
    return t = au(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Tf(e, t, a) {
    return pl(t, e.child, null, a), e = eu(t, t.pendingProps), e.flags |= 2, Ut(t), t.memoizedState = null, e;
  }
  function tv(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Me) {
        if (l.mode === "hidden")
          return e = eu(t, l), t.lanes = 536870912, $n(null, e);
        if (zc(t), (e = Xe) ? (e = Bd(
          e,
          Qt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Oa !== null ? { id: na, overflow: ia } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = co(e), a.return = t, t.child = a, ot = t, Xe = null)) : e = null, e === null) throw Ra(t);
        return t.lanes = 536870912, null;
      }
      return eu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (zc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Tf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (et || Fl(e, t, a, !1), n = (a & e.childLanes) !== 0, et || n) {
        if (l = Ge, l !== null && (s = la(l, a), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, ol(e, s), At(l, e, s), $c;
        fu(), t = Tf(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Xe = Kt(s.nextSibling), ot = t, Me = !0, Ua = null, Qt = !1, e !== null && oo(t, e), t = eu(t, l), t.flags |= 4096;
      return t;
    }
    return e = ma(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function tu(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Fc(e, t, a, l, n) {
    return ml(t), a = wc(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = Dc(), e !== null && !et ? (Mc(e, t, n), xa(e, t, n)) : (Me && l && fc(t), t.flags |= 1, dt(e, t, a, n), t.child);
  }
  function Af(e, t, a, l, n, u) {
    return ml(t), t.updateQueue = null, a = Co(
      t,
      l,
      a,
      n
    ), zo(e), l = Dc(), e !== null && !et ? (Mc(e, t, u), xa(e, t, u)) : (Me && l && fc(t), t.flags |= 1, dt(e, t, a, u), t.child);
  }
  function zf(e, t, a, l, n) {
    if (ml(t), t.stateNode === null) {
      var u = Zl, s = a.contextType;
      typeof s == "object" && s !== null && (u = ft(s)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Kc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Sc(t), s = a.contextType, u.context = typeof s == "object" && s !== null ? ft(s) : Zl, u.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Zc(
        t,
        a,
        s,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Kc.enqueueReplaceState(u, u.state, null), Xn(t, l, u, n), Gn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, m = xl(a, r);
      u.props = m;
      var T = u.context, U = a.contextType;
      s = Zl, typeof U == "object" && U !== null && (s = ft(U));
      var H = a.getDerivedStateFromProps;
      U = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, U || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || T !== s) && mf(
        t,
        u,
        l,
        s
      ), Ha = !1;
      var z = t.memoizedState;
      u.state = z, Xn(t, l, u, n), Gn(), T = t.memoizedState, r || z !== T || Ha ? (typeof H == "function" && (Zc(
        t,
        a,
        H,
        l
      ), T = t.memoizedState), (m = Ha || hf(
        t,
        a,
        m,
        l,
        z,
        T,
        s
      )) ? (U || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = s, l = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Ec(e, t), s = t.memoizedProps, U = xl(a, s), u.props = U, H = t.pendingProps, z = u.context, T = a.contextType, m = Zl, typeof T == "object" && T !== null && (m = ft(T)), r = a.getDerivedStateFromProps, (T = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || z !== m) && mf(
        t,
        u,
        l,
        m
      ), Ha = !1, z = t.memoizedState, u.state = z, Xn(t, l, u, n), Gn();
      var C = t.memoizedState;
      s !== H || z !== C || Ha || e !== null && e.dependencies !== null && qi(e.dependencies) ? (typeof r == "function" && (Zc(
        t,
        a,
        r,
        l
      ), C = t.memoizedState), (U = Ha || hf(
        t,
        a,
        U,
        l,
        z,
        C,
        m
      ) || e !== null && e.dependencies !== null && qi(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, C, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        C,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = C), u.props = l, u.state = C, u.context = m, l = U) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, tu(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = pl(
      t,
      e.child,
      null,
      n
    ), t.child = pl(
      t,
      null,
      a,
      n
    )) : dt(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = xa(
      e,
      t,
      n
    ), e;
  }
  function Cf(e, t, a, l) {
    return dl(), t.flags |= 256, dt(e, t, a, l), t.child;
  }
  var Wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ic(e) {
    return { baseLanes: e, cachePool: yo() };
  }
  function Pc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qt), e;
  }
  function wf(e, t, a) {
    var l = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Me) {
        if (n ? La(t) : Ya(), (e = Xe) ? (e = Bd(
          e,
          Qt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Oa !== null ? { id: na, overflow: ia } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = co(e), a.return = t, t.child = a, ot = t, Xe = null)) : e = null, e === null) throw Ra(t);
        return Rs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, n ? (Ya(), n = t.mode, r = au(
        { mode: "hidden", children: r },
        n
      ), l = fl(
        l,
        n,
        a,
        null
      ), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = Ic(a), l.childLanes = Pc(
        e,
        s,
        a
      ), t.memoizedState = Wc, $n(null, l)) : (La(t), es(t, r));
    }
    var m = e.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (La(t), t.flags &= -257, t = ts(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Ya(), t.child = e.child, t.flags |= 128, t = null) : (Ya(), r = l.fallback, n = t.mode, l = au(
          { mode: "visible", children: l.children },
          n
        ), r = fl(
          r,
          n,
          a,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, pl(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Ic(a), l.childLanes = Pc(
          e,
          s,
          a
        ), t.memoizedState = Wc, t = $n(null, l));
      else if (La(t), Rs(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var T = s.dgst;
        s = T, l = Error(o(419)), l.stack = "", l.digest = s, Hn({ value: l, source: null, stack: null }), t = ts(
          e,
          t,
          a
        );
      } else if (et || Fl(e, t, a, !1), s = (a & e.childLanes) !== 0, et || s) {
        if (s = Ge, s !== null && (l = la(s, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, ol(e, l), At(s, e, l), $c;
        Us(r) || fu(), t = ts(
          e,
          t,
          a
        );
      } else
        Us(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Xe = Kt(
          r.nextSibling
        ), ot = t, Me = !0, Ua = null, Qt = !1, e !== null && oo(t, e), t = es(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Ya(), r = l.fallback, n = t.mode, m = e.child, T = m.sibling, l = ma(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, T !== null ? r = ma(
      T,
      r
    ) : (r = fl(
      r,
      n,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, $n(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = Ic(a) : (n = r.cachePool, n !== null ? (m = Ie._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = yo(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: n
    }), l.memoizedState = r, l.childLanes = Pc(
      e,
      s,
      a
    ), t.memoizedState = Wc, $n(e.child, l)) : (La(t), a = e.child, e = a.sibling, a = ma(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function es(e, t) {
    return t = au(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function au(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e;
  }
  function ts(e, t, a) {
    return pl(t, e.child, null, a), e = es(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Df(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), gc(e.return, t, a);
  }
  function as(e, t, a, l, n, u) {
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
  function Mf(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, u = l.tail;
    l = l.children;
    var s = Fe.current, r = (s & 2) !== 0;
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, X(Fe, s), dt(e, t, l, a), l = Me ? qn : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Df(e, a, t);
        else if (e.tag === 19)
          Df(e, a, t);
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
          e = a.alternate, e !== null && Xi(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), as(
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
          if (e = n.alternate, e !== null && Xi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        as(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        as(
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
  function xa(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Xa |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Fl(
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
      for (e = t.child, a = ma(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ma(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ls(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && qi(e)));
  }
  function av(e, t, a) {
    switch (t.tag) {
      case 3:
        $e(t, t.stateNode.containerInfo), qa(t, Ie, e.memoizedState.cache), dl();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        $e(t, t.stateNode.containerInfo);
        break;
      case 10:
        qa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, zc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (La(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? wf(e, t, a) : (La(t), e = xa(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        La(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Fl(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), n) {
          if (l)
            return Mf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X(Fe, Fe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Nf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        qa(t, Ie, e.memoizedState.cache);
    }
    return xa(e, t, a);
  }
  function Of(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        et = !0;
      else {
        if (!ls(e, a) && (t.flags & 128) === 0)
          return et = !1, av(
            e,
            t,
            a
          );
        et = (e.flags & 131072) !== 0;
      }
    else
      et = !1, Me && (t.flags & 1048576) !== 0 && ro(t, qn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = gl(t.elementType), t.type = e, typeof e == "function")
            sc(e) ? (l = xl(e, l), t.tag = 1, t = zf(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Fc(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ve) {
                t.tag = 11, t = jf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (n === $) {
                t.tag = 14, t = Sf(
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
        return Fc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = xl(
          l,
          t.pendingProps
        ), zf(
          e,
          t,
          l,
          n,
          a
        );
      case 3:
        e: {
          if ($e(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Ec(e, t), Xn(t, l, null, a);
          var s = t.memoizedState;
          if (l = s.cache, qa(t, Ie, l), l !== u.cache && yc(
            t,
            [Ie],
            a,
            !0
          ), Gn(), l = s.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Cf(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== n) {
              n = Vt(
                Error(o(424)),
                t
              ), Hn(n), t = Cf(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Xe = Kt(e.firstChild), ot = t, Me = !0, Ua = null, Qt = !0, a = Eo(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (dl(), l === n) {
              t = xa(
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
        return tu(e, t), e === null ? (a = Xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Me || (a = t.type, e = t.pendingProps, l = pu(
          xe.current
        ).createElement(a), l[rt] = t, l[jt] = e, ht(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = Xd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(t), e === null && Me && (l = t.stateNode = Yd(
          t.type,
          t.pendingProps,
          xe.current
        ), ot = t, Qt = !0, n = Xe, $a(t.type) ? (qs = n, Xe = Kt(l.firstChild)) : Xe = n), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), tu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Me && ((n = l = Xe) && (l = Mv(
          l,
          t.type,
          t.pendingProps,
          Qt
        ), l !== null ? (t.stateNode = l, ot = t, Xe = Kt(l.firstChild), Qt = !1, n = !0) : n = !1), n || Ra(t)), Re(t), n = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = u.children, Ds(n, u) ? l = null : s !== null && Ds(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = wc(
          e,
          t,
          Km,
          null,
          null,
          a
        ), oi._currentValue = n), tu(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && Me && ((e = a = Xe) && (a = Ov(
          a,
          t.pendingProps,
          Qt
        ), a !== null ? (t.stateNode = a, ot = t, Xe = null, e = !0) : e = !1), e || Ra(t)), null;
      case 13:
        return wf(e, t, a);
      case 4:
        return $e(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = pl(
          t,
          null,
          l,
          a
        ) : dt(e, t, l, a), t.child;
      case 11:
        return jf(
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
        return l = t.pendingProps, qa(t, t.type, l.value), dt(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, ml(t), n = ft(n), l = l(n), t.flags |= 1, dt(e, t, l, a), t.child;
      case 14:
        return Sf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Ef(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Mf(e, t, a);
      case 31:
        return tv(e, t, a);
      case 22:
        return Nf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ml(t), l = ft(Ie), e === null ? (n = xc(), n === null && (n = Ge, u = pc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = { parent: l, cache: n }, Sc(t), qa(t, Ie, n)) : ((e.lanes & a) !== 0 && (Ec(e, t), Xn(t, null, null, a), Gn()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), qa(t, Ie, l)) : (l = u.cache, qa(t, Ie, l), l !== n.cache && yc(
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
  function ja(e) {
    e.flags |= 4;
  }
  function ns(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ud()) e.flags |= 8192;
        else
          throw yl = Li, jc;
    } else e.flags &= -16777217;
  }
  function Uf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$d(t))
      if (ud()) e.flags |= 8192;
      else
        throw yl = Li, jc;
  }
  function lu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? le() : 536870912, e.lanes |= t, rn |= t);
  }
  function Fn(e, t) {
    if (!Me)
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
    switch (dc(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ya(Ie), V(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && ($l(t) ? ja(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mc())), Qe(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (ja(t), u !== null ? (Qe(t), Uf(t, u)) : (Qe(t), ns(
          t,
          n,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (ja(t), Qe(t), Uf(t, u)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && ja(t), Qe(t), ns(
          t,
          n,
          e,
          l,
          a
        )), null;
      case 27:
        if (he(t), a = xe.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ja(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Qe(t), null;
          }
          e = F.current, $l(t) ? fo(t) : (e = Yd(n, l, a), t.stateNode = e, ja(t));
        }
        return Qe(t), null;
      case 5:
        if (he(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ja(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Qe(t), null;
          }
          if (u = F.current, $l(t))
            fo(t);
          else {
            var s = pu(
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
            u[rt] = t, u[jt] = l;
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
            l && ja(t);
          }
        }
        return Qe(t), ns(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && ja(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = xe.current, $l(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = ot, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[rt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || wd(e.nodeValue, a)), e || Ra(t, !0);
          } else
            e = pu(e).createTextNode(
              l
            ), e[rt] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = $l(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[rt] = t;
            } else
              dl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            a = mc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Qe(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = $l(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[rt] = t;
            } else
              dl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), n = !1;
          } else
            n = mc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
        }
        return Ut(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), lu(t, t.updateQueue), Qe(t), null);
      case 4:
        return V(), e === null && Ts(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return ya(t.type), Qe(t), null;
      case 19:
        if (O(Fe), l = t.memoizedState, l === null) return Qe(t), null;
        if (n = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (n) Fn(l, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Xi(e), u !== null) {
                  for (t.flags |= 128, Fn(l, !1), e = u.updateQueue, t.updateQueue = e, lu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    uo(a, e), a = a.sibling;
                  return X(
                    Fe,
                    Fe.current & 1 | 2
                  ), Me && va(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && De() > su && (t.flags |= 128, n = !0, Fn(l, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Xi(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, lu(t, e), Fn(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !Me)
                return Qe(t), null;
            } else
              2 * De() - l.renderingStartTime > su && a !== 536870912 && (t.flags |= 128, n = !0, Fn(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = De(), e.sibling = null, a = Fe.current, X(
          Fe,
          n ? a & 1 | 2 : a & 1
        ), Me && va(t, l.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return Ut(t), Ac(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), a = t.updateQueue, a !== null && lu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && O(vl), null;
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
    switch (dc(t), t.tag) {
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
          dl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ut(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          dl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return O(Fe), null;
      case 4:
        return V(), null;
      case 10:
        return ya(t.type), null;
      case 22:
      case 23:
        return Ut(t), Ac(), e !== null && O(vl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ya(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rf(e, t) {
    switch (dc(t), t.tag) {
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
        O(Fe);
        break;
      case 10:
        ya(t.type);
        break;
      case 22:
      case 23:
        Ut(t), Ac(), e !== null && O(vl);
        break;
      case 24:
        ya(Ie);
    }
  }
  function Wn(e, t) {
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
  function Va(e, t, a) {
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
              } catch (U) {
                ke(
                  n,
                  m,
                  U
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (U) {
      ke(t, t.return, U);
    }
  }
  function qf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        _o(t, a);
      } catch (l) {
        ke(e, e.return, l);
      }
    }
  }
  function Hf(e, t, a) {
    a.props = xl(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function In(e, t) {
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
  function ua(e, t) {
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
  function Bf(e) {
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
  function is(e, t, a) {
    try {
      var l = e.stateNode;
      Tv(l, e.type, a, t), l[jt] = t;
    } catch (n) {
      ke(e, e.return, n);
    }
  }
  function kf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && $a(e.type) || e.tag === 4;
  }
  function us(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || kf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && $a(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = da));
    else if (l !== 4 && (l === 27 && $a(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (cs(e, t, a), e = e.sibling; e !== null; )
        cs(e, t, a), e = e.sibling;
  }
  function nu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && $a(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (nu(e, t, a), e = e.sibling; e !== null; )
        nu(e, t, a), e = e.sibling;
  }
  function Lf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ht(t, l, a), t[rt] = e, t[jt] = a;
    } catch (u) {
      ke(e, e.return, u);
    }
  }
  var Sa = !1, tt = !1, ss = !1, Yf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function iv(e, t) {
    if (e = e.containerInfo, Cs = _u, e = Wr(e), tc(e)) {
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
            var s = 0, r = -1, m = -1, T = 0, U = 0, H = e, z = null;
            t: for (; ; ) {
              for (var C; H !== a || n !== 0 && H.nodeType !== 3 || (r = s + n), H !== u || l !== 0 && H.nodeType !== 3 || (m = s + l), H.nodeType === 3 && (s += H.nodeValue.length), (C = H.firstChild) !== null; )
                z = H, H = C;
              for (; ; ) {
                if (H === e) break t;
                if (z === a && ++T === n && (r = s), z === u && ++U === l && (m = s), (C = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = C;
            }
            a = r === -1 || m === -1 ? null : { start: r, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ws = { focusedElem: e, selectionRange: a }, _u = !1, ct = t; ct !== null; )
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
                  var ee = xl(
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
                  Os(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Os(e);
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
  function Vf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Na(e, a), l & 4 && Wn(5, a);
        break;
      case 1:
        if (Na(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              ke(a, a.return, s);
            }
          else {
            var n = xl(
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
        l & 64 && qf(a), l & 512 && In(a, a.return);
        break;
      case 3:
        if (Na(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            _o(e, t);
          } catch (s) {
            ke(a, a.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Lf(a);
      case 26:
      case 5:
        Na(e, a), t === null && l & 4 && Bf(a), l & 512 && In(a, a.return);
        break;
      case 12:
        Na(e, a);
        break;
      case 31:
        Na(e, a), l & 4 && Qf(e, a);
        break;
      case 13:
        Na(e, a), l & 4 && Zf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = mv.bind(
          null,
          a
        ), Uv(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Sa, !l) {
          t = t !== null && t.memoizedState !== null || tt, n = Sa;
          var u = tt;
          Sa = l, (tt = t) && !u ? _a(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Na(e, a), Sa = n, tt = u;
        }
        break;
      case 30:
        break;
      default:
        Na(e, a);
    }
  }
  function Gf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, Et = !1;
  function Ea(e, t, a) {
    for (a = a.child; a !== null; )
      Xf(e, t, a), a = a.sibling;
  }
  function Xf(e, t, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(il, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        tt || ua(a, t), Ea(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        tt || ua(a, t);
        var l = Ze, n = Et;
        $a(a.type) && (Ze = a.stateNode, Et = !1), Ea(
          e,
          t,
          a
        ), ci(a.stateNode), Ze = l, Et = n;
        break;
      case 5:
        tt || ua(a, t);
      case 6:
        if (l = Ze, n = Et, Ze = null, Ea(
          e,
          t,
          a
        ), Ze = l, Et = n, Ze !== null)
          if (Et)
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
        Ze !== null && (Et ? (e = Ze, qd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), yn(e)) : qd(Ze, a.stateNode));
        break;
      case 4:
        l = Ze, n = Et, Ze = a.stateNode.containerInfo, Et = !0, Ea(
          e,
          t,
          a
        ), Ze = l, Et = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Va(2, a, t), tt || Va(4, a, t), Ea(
          e,
          t,
          a
        );
        break;
      case 1:
        tt || (ua(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Hf(
          a,
          t,
          l
        )), Ea(
          e,
          t,
          a
        );
        break;
      case 21:
        Ea(
          e,
          t,
          a
        );
        break;
      case 22:
        tt = (l = tt) || a.memoizedState !== null, Ea(
          e,
          t,
          a
        ), tt = l;
        break;
      default:
        Ea(
          e,
          t,
          a
        );
    }
  }
  function Qf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        yn(e);
      } catch (a) {
        ke(t, t.return, a);
      }
    }
  }
  function Zf(e, t) {
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
        return t === null && (t = e.stateNode = new Yf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Yf()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function iu(e, t) {
    var a = uv(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = vv.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Nt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], u = e, s = t, r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if ($a(r.type)) {
                Ze = r.stateNode, Et = !1;
                break e;
              }
              break;
            case 5:
              Ze = r.stateNode, Et = !1;
              break e;
            case 3:
            case 4:
              Ze = r.stateNode.containerInfo, Et = !0;
              break e;
          }
          r = r.return;
        }
        if (Ze === null) throw Error(o(160));
        Xf(u, s, n), Ze = null, Et = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Kf(t, e), t = t.sibling;
  }
  var It = null;
  function Kf(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(t, e), _t(e), l & 4 && (Va(3, e, e.return), Wn(3, e), Va(5, e, e.return));
        break;
      case 1:
        Nt(t, e), _t(e), l & 512 && (tt || a === null || ua(a, a.return)), l & 64 && Sa && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = It;
        if (Nt(t, e), _t(e), l & 512 && (tt || a === null || ua(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[_n] || u[rt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), ht(u, l, a), u[rt] = e, ut(u), l = u;
                      break e;
                    case "link":
                      var s = Kd(
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
                      if (s = Kd(
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
                Jd(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Zd(
                n,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? Jd(
              n,
              e.type,
              e.stateNode
            ) : Zd(
              n,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && is(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Nt(t, e), _t(e), l & 512 && (tt || a === null || ua(a, a.return)), a !== null && l & 4 && is(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Nt(t, e), _t(e), l & 512 && (tt || a === null || ua(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            kl(n, "");
          } catch (ee) {
            ke(e, e.return, ee);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, is(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (ss = !0);
        break;
      case 6:
        if (Nt(t, e), _t(e), l & 4) {
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
        if (ju = null, n = It, It = bu(t.containerInfo), Nt(t, e), It = n, _t(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            yn(t.containerInfo);
          } catch (ee) {
            ke(e, e.return, ee);
          }
        ss && (ss = !1, Jf(e));
        break;
      case 4:
        l = It, It = bu(
          e.stateNode.containerInfo
        ), Nt(t, e), _t(e), It = l;
        break;
      case 12:
        Nt(t, e), _t(e);
        break;
      case 31:
        Nt(t, e), _t(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, iu(e, l)));
        break;
      case 13:
        Nt(t, e), _t(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (cu = De()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, iu(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, T = Sa, U = tt;
        if (Sa = T || n, tt = U || m, Nt(t, e), tt = U, Sa = T, _t(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || m || Sa || tt || jl(e)), a = null, t = e; ; ) {
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
                  n ? Hd(C, !0) : Hd(m.stateNode, !1);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, iu(e, a))));
        break;
      case 19:
        Nt(t, e), _t(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, iu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nt(t, e), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (kf(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, u = us(e);
            nu(e, u, n);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (kl(s, ""), a.flags &= -33);
            var r = us(e);
            nu(e, r, s);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, T = us(e);
            cs(
              e,
              T,
              m
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (U) {
        ke(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Jf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Na(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Vf(e, t.alternate, t), t = t.sibling;
  }
  function jl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Va(4, t, t.return), jl(t);
          break;
        case 1:
          ua(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Hf(
            t,
            t.return,
            a
          ), jl(t);
          break;
        case 27:
          ci(t.stateNode);
        case 26:
        case 5:
          ua(t, t.return), jl(t);
          break;
        case 22:
          t.memoizedState === null && jl(t);
          break;
        case 30:
          jl(t);
          break;
        default:
          jl(t);
      }
      e = e.sibling;
    }
  }
  function _a(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          _a(
            n,
            u,
            a
          ), Wn(4, u);
          break;
        case 1:
          if (_a(
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
                  No(m[n], r);
            } catch (T) {
              ke(l, l.return, T);
            }
          }
          a && s & 64 && qf(u), In(u, u.return);
          break;
        case 27:
          Lf(u);
        case 26:
        case 5:
          _a(
            n,
            u,
            a
          ), a && l === null && s & 4 && Bf(u), In(u, u.return);
          break;
        case 12:
          _a(
            n,
            u,
            a
          );
          break;
        case 31:
          _a(
            n,
            u,
            a
          ), a && s & 4 && Qf(n, u);
          break;
        case 13:
          _a(
            n,
            u,
            a
          ), a && s & 4 && Zf(n, u);
          break;
        case 22:
          u.memoizedState === null && _a(
            n,
            u,
            a
          ), In(u, u.return);
          break;
        case 30:
          break;
        default:
          _a(
            n,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function rs(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Bn(a));
  }
  function os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Bn(e));
  }
  function Pt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $f(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function $f(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          e,
          t,
          a,
          l
        ), n & 2048 && Wn(9, t);
        break;
      case 1:
        Pt(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Pt(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Bn(e)));
        break;
      case 12:
        if (n & 2048) {
          Pt(
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
          Pt(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Pt(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Pt(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Pt(
          e,
          t,
          a,
          l
        ) : Pn(e, t) : u._visibility & 2 ? Pt(
          e,
          t,
          a,
          l
        ) : (u._visibility |= 2, un(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && rs(s, t);
        break;
      case 24:
        Pt(
          e,
          t,
          a,
          l
        ), n & 2048 && os(t.alternate, t);
        break;
      default:
        Pt(
          e,
          t,
          a,
          l
        );
    }
  }
  function un(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, r = a, m = l, T = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          un(
            u,
            s,
            r,
            m,
            n
          ), Wn(8, s);
          break;
        case 23:
          break;
        case 22:
          var U = s.stateNode;
          s.memoizedState !== null ? U._visibility & 2 ? un(
            u,
            s,
            r,
            m,
            n
          ) : Pn(
            u,
            s
          ) : (U._visibility |= 2, un(
            u,
            s,
            r,
            m,
            n
          )), n && T & 2048 && rs(
            s.alternate,
            s
          );
          break;
        case 24:
          un(
            u,
            s,
            r,
            m,
            n
          ), n && T & 2048 && os(s.alternate, s);
          break;
        default:
          un(
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
  function Pn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            Pn(a, l), n & 2048 && rs(
              l.alternate,
              l
            );
            break;
          case 24:
            Pn(a, l), n & 2048 && os(l.alternate, l);
            break;
          default:
            Pn(a, l);
        }
        t = t.sibling;
      }
  }
  var ei = 8192;
  function cn(e, t, a) {
    if (e.subtreeFlags & ei)
      for (e = e.child; e !== null; )
        Ff(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Ff(e, t, a) {
    switch (e.tag) {
      case 26:
        cn(
          e,
          t,
          a
        ), e.flags & ei && e.memoizedState !== null && Zv(
          a,
          It,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        cn(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = It;
        It = bu(e.stateNode.containerInfo), cn(
          e,
          t,
          a
        ), It = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ei, ei = 16777216, cn(
          e,
          t,
          a
        ), ei = l) : cn(
          e,
          t,
          a
        ));
        break;
      default:
        cn(
          e,
          t,
          a
        );
    }
  }
  function Wf(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ti(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ct = l, Pf(
            l,
            e
          );
        }
      Wf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        If(e), e = e.sibling;
  }
  function If(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ti(e), e.flags & 2048 && Va(9, e, e.return);
        break;
      case 3:
        ti(e);
        break;
      case 12:
        ti(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, uu(e)) : ti(e);
        break;
      default:
        ti(e);
    }
  }
  function uu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ct = l, Pf(
            l,
            e
          );
        }
      Wf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Va(8, t, t.return), uu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, uu(t));
          break;
        default:
          uu(t);
      }
      e = e.sibling;
    }
  }
  function Pf(e, t) {
    for (; ct !== null; ) {
      var a = ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Va(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Bn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ct = l;
      else
        e: for (a = e; ct !== null; ) {
          l = ct;
          var n = l.sibling, u = l.return;
          if (Gf(l), l === a) {
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
  }, sv = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Ge = null, _e = null, Ae = 0, Be = 0, Rt = null, Ga = !1, sn = !1, fs = !1, Ta = 0, Je = 0, Xa = 0, Sl = 0, ds = 0, qt = 0, rn = 0, ai = null, Tt = null, hs = !1, cu = 0, ed = 0, su = 1 / 0, ru = null, Qa = null, lt = 0, Za = null, on = null, Aa = 0, ms = 0, vs = null, td = null, li = 0, gs = null;
  function Ht() {
    return (He & 2) !== 0 && Ae !== 0 ? Ae & -Ae : y.T !== null ? Ss() : vr();
  }
  function ad() {
    if (qt === 0)
      if ((Ae & 536870912) === 0 || Me) {
        var e = wl;
        wl <<= 1, (wl & 3932160) === 0 && (wl = 262144), qt = e;
      } else qt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), qt;
  }
  function At(e, t, a) {
    (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (fn(e, 0), Ka(
      e,
      Ae,
      qt,
      !1
    )), me(e, a), ((He & 2) === 0 || e !== Ge) && (e === Ge && ((He & 2) === 0 && (Sl |= a), Je === 4 && Ka(
      e,
      Ae,
      qt,
      !1
    )), ca(e));
  }
  function ld(e, t, a) {
    if ((He & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || M(e, t), n = l ? fv(e, t) : ps(e, t, !0), u = l;
    do {
      if (n === 0) {
        sn && !l && Ka(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !rv(a)) {
          n = ps(e, t, !1), u = !1;
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
              n = ai;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (fn(r, s).flags |= 256), s = ps(
                r,
                s,
                !1
              ), s !== 2) {
                if (fs && !m) {
                  r.errorRecoveryDisabledLanes |= u, Sl |= u, n = 4;
                  break e;
                }
                u = Tt, Tt = n, u !== null && (Tt === null ? Tt = u : Tt.push.apply(
                  Tt,
                  u
                ));
              }
              n = s;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          fn(e, 0), Ka(e, t, 0, !0);
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
              Ka(
                l,
                t,
                qt,
                !Ga
              );
              break e;
            case 2:
              Tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = cu + 300 - De(), 10 < n)) {
            if (Ka(
              l,
              t,
              qt,
              !Ga
            ), Ml(l, 0, !0) !== 0) break e;
            Aa = t, l.timeoutHandle = Ud(
              nd.bind(
                null,
                l,
                a,
                Tt,
                ru,
                hs,
                t,
                qt,
                Sl,
                rn,
                Ga,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          nd(
            l,
            a,
            Tt,
            ru,
            hs,
            t,
            qt,
            Sl,
            rn,
            Ga,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ca(e);
  }
  function nd(e, t, a, l, n, u, s, r, m, T, U, H, z, C) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: da
      }, Ff(
        t,
        u,
        H
      );
      var ee = (u & 62914560) === u ? cu - De() : (u & 4194048) === u ? ed - De() : 0;
      if (ee = Kv(
        H,
        ee
      ), ee !== null) {
        Aa = u, e.cancelPendingCommit = ee(
          dd.bind(
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
            U,
            H,
            null,
            z,
            C
          )
        ), Ka(e, u, s, !T);
        return;
      }
    }
    dd(
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
  function Ka(e, t, a, l) {
    t &= ~ds, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - it(n), s = 1 << u;
      l[u] = -1, n &= ~s;
    }
    a !== 0 && oe(e, a, t);
  }
  function ou() {
    return (He & 6) === 0 ? (ni(0), !1) : !0;
  }
  function ys() {
    if (_e !== null) {
      if (Be === 0)
        var e = _e.return;
      else
        e = _e, ga = hl = null, Oc(e), en = null, Ln = 0, e = _e;
      for (; e !== null; )
        Rf(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function fn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Cv(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Aa = 0, ys(), Ge = e, _e = a = ma(e.current, null), Ae = t, Be = 0, Rt = null, Ga = !1, sn = M(e, t), fs = !1, rn = qt = ds = Sl = Xa = Je = 0, Tt = ai = null, hs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - it(l), u = 1 << n;
        t |= e[n], l &= ~u;
      }
    return Ta = t, Di(), a;
  }
  function id(e, t) {
    je = null, y.H = Jn, t === Pl || t === ki ? (t = xo(), Be = 3) : t === jc ? (t = xo(), Be = 4) : Be = t === $c ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Rt = t, _e === null && (Je = 1, Pi(
      e,
      Vt(t, e.current)
    ));
  }
  function ud() {
    var e = Ot.current;
    return e === null ? !0 : (Ae & 4194048) === Ae ? Zt === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === Zt : !1;
  }
  function cd() {
    var e = y.H;
    return y.H = Jn, e === null ? Jn : e;
  }
  function sd() {
    var e = y.A;
    return y.A = cv, e;
  }
  function fu() {
    Je = 4, Ga || (Ae & 4194048) !== Ae && Ot.current !== null || (sn = !0), (Xa & 134217727) === 0 && (Sl & 134217727) === 0 || Ge === null || Ka(
      Ge,
      Ae,
      qt,
      !1
    );
  }
  function ps(e, t, a) {
    var l = He;
    He |= 2;
    var n = cd(), u = sd();
    (Ge !== e || Ae !== t) && (ru = null, fn(e, t)), t = !1;
    var s = Je;
    e: do
      try {
        if (Be !== 0 && _e !== null) {
          var r = _e, m = Rt;
          switch (Be) {
            case 8:
              ys(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var T = Be;
              if (Be = 0, Rt = null, dn(e, r, m, T), a && sn) {
                s = 0;
                break e;
              }
              break;
            default:
              T = Be, Be = 0, Rt = null, dn(e, r, m, T);
          }
        }
        ov(), s = Je;
        break;
      } catch (U) {
        id(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ga = hl = null, He = l, y.H = n, y.A = u, _e === null && (Ge = null, Ae = 0, Di()), s;
  }
  function ov() {
    for (; _e !== null; ) rd(_e);
  }
  function fv(e, t) {
    var a = He;
    He |= 2;
    var l = cd(), n = sd();
    Ge !== e || Ae !== t ? (ru = null, su = De() + 500, fn(e, t)) : sn = M(
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
              Be = 0, Rt = null, dn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (po(u)) {
                Be = 0, Rt = null, od(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ge !== e || (Be = 7), ca(e);
              }, u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              po(u) ? (Be = 0, Rt = null, od(t)) : (Be = 0, Rt = null, dn(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (_e.tag) {
                case 26:
                  s = _e.memoizedState;
                case 5:
                case 27:
                  var r = _e;
                  if (s ? $d(s) : r.stateNode.complete) {
                    Be = 0, Rt = null;
                    var m = r.sibling;
                    if (m !== null) _e = m;
                    else {
                      var T = r.return;
                      T !== null ? (_e = T, du(T)) : _e = null;
                    }
                    break t;
                  }
              }
              Be = 0, Rt = null, dn(e, t, u, 5);
              break;
            case 6:
              Be = 0, Rt = null, dn(e, t, u, 6);
              break;
            case 8:
              ys(), Je = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        dv();
        break;
      } catch (U) {
        id(e, U);
      }
    while (!0);
    return ga = hl = null, y.H = l, y.A = n, He = a, _e !== null ? 0 : (Ge = null, Ae = 0, Di(), Je);
  }
  function dv() {
    for (; _e !== null && !nl(); )
      rd(_e);
  }
  function rd(e) {
    var t = Of(e.alternate, e, Ta);
    e.memoizedProps = e.pendingProps, t === null ? du(e) : _e = t;
  }
  function od(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Af(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ae
        );
        break;
      case 11:
        t = Af(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ae
        );
        break;
      case 5:
        Oc(t);
      default:
        Rf(a, t), t = _e = uo(t, Ta), t = Of(a, t, Ta);
    }
    e.memoizedProps = e.pendingProps, t === null ? du(e) : _e = t;
  }
  function dn(e, t, a, l) {
    ga = hl = null, Oc(t), en = null, Ln = 0;
    var n = t.return;
    try {
      if (ev(
        e,
        n,
        t,
        a,
        Ae
      )) {
        Je = 1, Pi(
          e,
          Vt(a, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw _e = n, u;
      Je = 1, Pi(
        e,
        Vt(a, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (Me || l === 1 ? e = !0 : sn || (Ae & 536870912) !== 0 ? e = !1 : (Ga = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ot.current, l !== null && l.tag === 13 && (l.flags |= 16384))), fd(t, e)) : du(t);
  }
  function du(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fd(
          t,
          Ga
        );
        return;
      }
      e = t.return;
      var a = lv(
        t.alternate,
        t,
        Ta
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
  function fd(e, t) {
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
  function dd(e, t, a, l, n, u, s, r, m) {
    e.cancelPendingCommit = null;
    do
      hu();
    while (lt !== 0);
    if ((He & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= uc, qe(
        e,
        a,
        u,
        s,
        r,
        m
      ), e === Ge && (_e = Ge = null, Ae = 0), on = t, Za = e, Aa = a, ms = u, vs = n, td = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, gv(Tl, function() {
        return yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = y.T, y.T = null, n = B.p, B.p = 2, s = He, He |= 4;
        try {
          iv(e, t, a);
        } finally {
          He = s, B.p = n, y.T = l;
        }
      }
      lt = 1, hd(), md(), vd();
    }
  }
  function hd() {
    if (lt === 1) {
      lt = 0;
      var e = Za, t = on, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = y.T, y.T = null;
        var l = B.p;
        B.p = 2;
        var n = He;
        He |= 4;
        try {
          Kf(t, e);
          var u = ws, s = Wr(e.containerInfo), r = u.focusedElem, m = u.selectionRange;
          if (s !== r && r && r.ownerDocument && Fr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && tc(r)) {
              var T = m.start, U = m.end;
              if (U === void 0 && (U = T), "selectionStart" in r)
                r.selectionStart = T, r.selectionEnd = Math.min(
                  U,
                  r.value.length
                );
              else {
                var H = r.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var C = z.getSelection(), ee = r.textContent.length, fe = Math.min(m.start, ee), Ve = m.end === void 0 ? fe : Math.min(m.end, ee);
                  !C.extend && fe > Ve && (s = Ve, Ve = fe, fe = s);
                  var j = $r(
                    r,
                    fe
                  ), v = $r(
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
          _u = !!Cs, ws = Cs = null;
        } finally {
          He = n, B.p = l, y.T = a;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function md() {
    if (lt === 2) {
      lt = 0;
      var e = Za, t = on, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = y.T, y.T = null;
        var l = B.p;
        B.p = 2;
        var n = He;
        He |= 4;
        try {
          Vf(e, t.alternate, t);
        } finally {
          He = n, B.p = l, y.T = a;
        }
      }
      lt = 3;
    }
  }
  function vd() {
    if (lt === 4 || lt === 3) {
      lt = 0, bn();
      var e = Za, t = on, a = Aa, l = td;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, on = Za = null, gd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Qa = null), qu(a), t = t.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            il,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = y.T, n = B.p, B.p = 2, y.T = null;
        try {
          for (var u = e.onRecoverableError, s = 0; s < l.length; s++) {
            var r = l[s];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          y.T = t, B.p = n;
        }
      }
      (Aa & 3) !== 0 && hu(), ca(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === gs ? li++ : (li = 0, gs = e) : li = 0, ni(0);
    }
  }
  function gd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Bn(t)));
  }
  function hu() {
    return hd(), md(), vd(), yd();
  }
  function yd() {
    if (lt !== 5) return !1;
    var e = Za, t = ms;
    ms = 0;
    var a = qu(Aa), l = y.T, n = B.p;
    try {
      B.p = 32 > a ? 32 : a, y.T = null, a = vs, vs = null;
      var u = Za, s = Aa;
      if (lt = 0, on = Za = null, Aa = 0, (He & 6) !== 0) throw Error(o(331));
      var r = He;
      if (He |= 4, If(u.current), $f(
        u,
        u.current,
        s,
        a
      ), He = r, ni(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(il, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = n, y.T = l, gd(e, t);
    }
  }
  function pd(e, t, a) {
    t = Vt(a, t), t = Jc(e.stateNode, t, 2), e = ka(e, t, 2), e !== null && (me(e, 2), ca(e));
  }
  function ke(e, t, a) {
    if (e.tag === 3)
      pd(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pd(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qa === null || !Qa.has(l))) {
            e = Vt(a, e), a = bf(2), l = ka(t, a, 2), l !== null && (xf(
              a,
              l,
              t,
              e
            ), me(l, 2), ca(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function bs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new sv();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (fs = !0, n.add(a), e = hv.bind(null, e, t, a), t.then(e, e));
  }
  function hv(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ge === e && (Ae & a) === a && (Je === 4 || Je === 3 && (Ae & 62914560) === Ae && 300 > De() - cu ? (He & 2) === 0 && fn(e, 0) : ds |= a, rn === Ae && (rn = 0)), ca(e);
  }
  function bd(e, t) {
    t === 0 && (t = le()), e = ol(e, t), e !== null && (me(e, t), ca(e));
  }
  function mv(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), bd(e, a);
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
    l !== null && l.delete(t), bd(e, a);
  }
  function gv(e, t) {
    return sa(e, t);
  }
  var mu = null, hn = null, xs = !1, vu = !1, js = !1, Ja = 0;
  function ca(e) {
    e !== hn && e.next === null && (hn === null ? mu = hn = e : hn = hn.next = e), vu = !0, xs || (xs = !0, pv());
  }
  function ni(e, t) {
    if (!js && vu) {
      js = !0;
      do
        for (var a = !1, l = mu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var s = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - it(42 | e) + 1) - 1, u &= n & ~(s & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Ed(l, u));
          } else
            u = Ae, u = Ml(
              l,
              l === Ge ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || M(l, u) || (a = !0, Ed(l, u));
          l = l.next;
        }
      while (a);
      js = !1;
    }
  }
  function yv() {
    xd();
  }
  function xd() {
    vu = xs = !1;
    var e = 0;
    Ja !== 0 && zv() && (e = Ja);
    for (var t = De(), a = null, l = mu; l !== null; ) {
      var n = l.next, u = jd(l, t);
      u === 0 ? (l.next = null, a === null ? mu = n : a.next = n, n === null && (hn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (vu = !0)), l = n;
    }
    lt !== 0 && lt !== 5 || ni(e), Ja !== 0 && (Ja = 0);
  }
  function jd(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - it(u), r = 1 << s, m = n[s];
      m === -1 ? ((r & a) === 0 || (r & l) !== 0) && (n[s] = Z(r, t)) : m <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Ge, a = Ae, a = Ml(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && wa(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || M(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && wa(l), qu(a)) {
        case 2:
        case 8:
          a = jn;
          break;
        case 32:
          a = Tl;
          break;
        case 268435456:
          a = Al;
          break;
        default:
          a = Tl;
      }
      return l = Sd.bind(null, e), a = sa(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && wa(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Sd(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (hu() && e.callbackNode !== a)
      return null;
    var l = Ae;
    return l = Ml(
      e,
      e === Ge ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ld(e, l, t), jd(e, De()), e.callbackNode != null && e.callbackNode === a ? Sd.bind(null, e) : null);
  }
  function Ed(e, t) {
    if (hu()) return null;
    ld(e, t, !0);
  }
  function pv() {
    wv(function() {
      (He & 6) !== 0 ? sa(
        xn,
        yv
      ) : xd();
    });
  }
  function Ss() {
    if (Ja === 0) {
      var e = Wl;
      e === 0 && (e = Cl, Cl <<= 1, (Cl & 261888) === 0 && (Cl = 256)), Ja = e;
    }
    return Ja;
  }
  function Nd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ei("" + e);
  }
  function _d(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function bv(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = Nd(
        (n[jt] || null).action
      ), s = l.submitter;
      s && (t = (t = s[jt] || null) ? Nd(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var r = new Ai(
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
                if (Ja !== 0) {
                  var m = s ? _d(n, s) : new FormData(n);
                  Vc(
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
                typeof u == "function" && (r.preventDefault(), m = s ? _d(n, s) : new FormData(n), Vc(
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
  for (var Es = 0; Es < ic.length; Es++) {
    var Ns = ic[Es], xv = Ns.toLowerCase(), jv = Ns[0].toUpperCase() + Ns.slice(1);
    Wt(
      xv,
      "on" + jv
    );
  }
  Wt(eo, "onAnimationEnd"), Wt(to, "onAnimationIteration"), Wt(ao, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(Hm, "onTransitionRun"), Wt(Bm, "onTransitionStart"), Wt(km, "onTransitionCancel"), Wt(lo, "onTransitionEnd"), Hl("onMouseEnter", ["mouseout", "mouseover"]), Hl("onMouseLeave", ["mouseout", "mouseover"]), Hl("onPointerEnter", ["pointerout", "pointerover"]), Hl("onPointerLeave", ["pointerout", "pointerover"]), ul(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ul(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ul("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ul(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ul(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ul(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Sv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii)
  );
  function Td(e, t) {
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
            } catch (U) {
              wi(U);
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
            } catch (U) {
              wi(U);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function Te(e, t) {
    var a = t[Hu];
    a === void 0 && (a = t[Hu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Ad(t, e, 2, !1), a.add(l));
  }
  function _s(e, t, a) {
    var l = 0;
    t && (l |= 4), Ad(
      a,
      e,
      l,
      t
    );
  }
  var gu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ts(e) {
    if (!e[gu]) {
      e[gu] = !0, pr.forEach(function(a) {
        a !== "selectionchange" && (Sv.has(a) || _s(a, !1, e), _s(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gu] || (t[gu] = !0, _s("selectionchange", !1, t));
    }
  }
  function Ad(e, t, a, l) {
    switch (ah(t)) {
      case 2:
        var n = Fv;
        break;
      case 8:
        n = Wv;
        break;
      default:
        n = Ys;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !Zu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function As(e, t, a, l, n) {
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
            if (s = Ul(r), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              l = u = s;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    wr(function() {
      var T = u, U = Xu(a), H = [];
      e: {
        var z = no.get(e);
        if (z !== void 0) {
          var C = Ai, ee = e;
          switch (e) {
            case "keypress":
              if (_i(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = vm;
              break;
            case "focusin":
              ee = "focus", C = Fu;
              break;
            case "focusout":
              ee = "blur", C = Fu;
              break;
            case "beforeblur":
            case "afterblur":
              C = Fu;
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
              C = Or;
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
            case eo:
            case to:
            case ao:
              C = um;
              break;
            case lo:
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
              C = Rr;
              break;
            case "toggle":
            case "beforetoggle":
              C = Nm;
          }
          var fe = (t & 4) !== 0, Ve = !fe && (e === "scroll" || e === "scrollend"), j = fe ? z !== null ? z + "Capture" : null : z;
          fe = [];
          for (var v = T, _; v !== null; ) {
            var R = v;
            if (_ = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || _ === null || j === null || (R = An(v, j), R != null && fe.push(
              ui(v, R, _)
            )), Ve) break;
            v = v.return;
          }
          0 < fe.length && (z = new C(
            z,
            ee,
            null,
            a,
            U
          ), H.push({ event: z, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", z && a !== Gu && (ee = a.relatedTarget || a.fromElement) && (Ul(ee) || ee[Ol]))
            break e;
          if ((C || z) && (z = U.window === U ? U : (z = U.ownerDocument) ? z.defaultView || z.parentWindow : window, C ? (ee = a.relatedTarget || a.toElement, C = T, ee = ee ? Ul(ee) : null, ee !== null && (Ve = S(ee), fe = ee.tag, ee !== Ve || fe !== 5 && fe !== 27 && fe !== 6) && (ee = null)) : (C = null, ee = T), C !== ee)) {
            if (fe = Or, R = "onMouseLeave", j = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (fe = Rr, R = "onPointerLeave", j = "onPointerEnter", v = "pointer"), Ve = C == null ? z : Tn(C), _ = ee == null ? z : Tn(ee), z = new fe(
              R,
              v + "leave",
              C,
              a,
              U
            ), z.target = Ve, z.relatedTarget = _, R = null, Ul(U) === T && (fe = new fe(
              j,
              v + "enter",
              ee,
              a,
              U
            ), fe.target = _, fe.relatedTarget = Ve, R = fe), Ve = R, C && ee)
              t: {
                for (fe = Ev, j = C, v = ee, _ = 0, R = j; R; R = fe(R))
                  _++;
                R = 0;
                for (var re = v; re; re = fe(re))
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
            C !== null && zd(
              H,
              z,
              C,
              fe,
              !1
            ), ee !== null && Ve !== null && zd(
              H,
              Ve,
              ee,
              fe,
              !0
            );
          }
        }
        e: {
          if (z = T ? Tn(T) : window, C = z.nodeName && z.nodeName.toLowerCase(), C === "select" || C === "input" && z.type === "file")
            var Oe = Gr;
          else if (Yr(z))
            if (Xr)
              Oe = Um;
            else {
              Oe = Mm;
              var ne = Dm;
            }
          else
            C = z.nodeName, !C || C.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? T && Vu(T.elementType) && (Oe = Gr) : Oe = Om;
          if (Oe && (Oe = Oe(e, T))) {
            Vr(
              H,
              Oe,
              a,
              U
            );
            break e;
          }
          ne && ne(e, z, T), e === "focusout" && T && z.type === "number" && T.memoizedProps.value != null && Yu(z, "number", z.value);
        }
        switch (ne = T ? Tn(T) : window, e) {
          case "focusin":
            (Yr(ne) || ne.contentEditable === "true") && (Gl = ne, ac = T, Rn = null);
            break;
          case "focusout":
            Rn = ac = Gl = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, Ir(H, a, U);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            Ir(H, a, U);
        }
        var Se;
        if (Iu)
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
          Vl ? kr(e, a) && (ze = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ze = "onCompositionStart");
        ze && (qr && a.locale !== "ko" && (Vl || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Vl && (Se = Dr()) : (Ma = U, Ku = "value" in Ma ? Ma.value : Ma.textContent, Vl = !0)), ne = yu(T, ze), 0 < ne.length && (ze = new Ur(
          ze,
          e,
          null,
          a,
          U
        ), H.push({ event: ze, listeners: ne }), Se ? ze.data = Se : (Se = Lr(a), Se !== null && (ze.data = Se)))), (Se = Tm ? Am(e, a) : zm(e, a)) && (ze = yu(T, "onBeforeInput"), 0 < ze.length && (ne = new Ur(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          U
        ), H.push({
          event: ne,
          listeners: ze
        }), ne.data = Se)), bv(
          H,
          e,
          T,
          a,
          U
        );
      }
      Td(H, t);
    });
  }
  function ui(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function yu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = An(e, a), n != null && l.unshift(
        ui(e, n, u)
      ), n = An(e, t), n != null && l.push(
        ui(e, n, u)
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
  function zd(e, t, a, l, n) {
    for (var u = t._reactName, s = []; a !== null && a !== l; ) {
      var r = a, m = r.alternate, T = r.stateNode;
      if (r = r.tag, m !== null && m === l) break;
      r !== 5 && r !== 26 && r !== 27 || T === null || (m = T, n ? (T = An(a, u), T != null && s.unshift(
        ui(a, T, m)
      )) : n || (T = An(a, u), T != null && s.push(
        ui(a, T, m)
      ))), a = a.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Nv = /\r\n?/g, _v = /\u0000|\uFFFD/g;
  function Cd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nv, `
`).replace(_v, "");
  }
  function wd(e, t) {
    return t = Cd(t), Cd(e) === t;
  }
  function Ye(e, t, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || kl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && kl(e, "" + l);
        break;
      case "className":
        ji(e, "class", l);
        break;
      case "tabIndex":
        ji(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ji(e, a, l);
        break;
      case "style":
        zr(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          ji(e, "data", l);
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
        l = Ei("" + l), e.setAttribute(a, l);
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
        l = Ei("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = da);
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
        a = Ei("" + l), e.setAttributeNS(
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
        Te("beforetoggle", e), Te("toggle", e), xi(e, "popover", l);
        break;
      case "xlinkActuate":
        fa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        fa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        fa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        fa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        fa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        fa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        fa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        fa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        fa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        xi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ph.get(a) || a, xi(e, a, l));
    }
  }
  function zs(e, t, a, l, n, u) {
    switch (a) {
      case "style":
        zr(e, l, u);
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
        typeof l == "string" ? kl(e, l) : (typeof l == "number" || typeof l == "bigint") && kl(e, "" + l);
        break;
      case "onScroll":
        l != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Te("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = da);
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
        if (!br.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[jt] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : xi(e, a, l);
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
            var U = a[l];
            if (U != null)
              switch (l) {
                case "name":
                  n = U;
                  break;
                case "type":
                  s = U;
                  break;
                case "checked":
                  m = U;
                  break;
                case "defaultChecked":
                  T = U;
                  break;
                case "value":
                  u = U;
                  break;
                case "defaultValue":
                  r = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ye(e, t, l, U, a, null);
              }
          }
        Nr(
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
        t = u, a = s, e.multiple = !!l, t != null ? Bl(e, !!l, t, !1) : a != null && Bl(e, !!l, a, !0);
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
        Tr(e, l, n, u);
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
        for (l = 0; l < ii.length; l++)
          Te(ii[l], e);
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
        if (Vu(t)) {
          for (U in a)
            a.hasOwnProperty(U) && (l = a[U], l !== void 0 && zs(
              e,
              t,
              U,
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
        var n = null, u = null, s = null, r = null, m = null, T = null, U = null;
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
                U = C;
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
        Lu(
          e,
          s,
          r,
          m,
          T,
          U,
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
        t = r, a = s, l = C, z != null ? Bl(e, !!a, z, !1) : !!l != !!a && (t != null ? Bl(e, !!a, t, !0) : Bl(e, !!a, a ? [] : "", !1));
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
        _r(e, z, C);
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
        if (Vu(t)) {
          for (var Ve in a)
            z = a[Ve], a.hasOwnProperty(Ve) && z !== void 0 && !l.hasOwnProperty(Ve) && zs(
              e,
              t,
              Ve,
              void 0,
              l,
              z
            );
          for (U in l)
            z = l[U], C = a[U], !l.hasOwnProperty(U) || z === C || z === void 0 && C === void 0 || zs(
              e,
              t,
              U,
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
  function Dd(e) {
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
        if (u && r && Dd(s)) {
          for (s = 0, r = n.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], T = m.startTime;
            if (T > r) break;
            var U = m.transferSize, H = m.initiatorType;
            U && Dd(H) && (m = m.responseEnd, s += U * (m < r ? 1 : (r - T) / (m - T)));
          }
          if (--l, t += 8 * (u + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Cs = null, ws = null;
  function pu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Md(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Od(e, t) {
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
  function Ds(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ms = null;
  function zv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ms ? !1 : (Ms = e, !0) : (Ms = null, !1);
  }
  var Ud = typeof setTimeout == "function" ? setTimeout : void 0, Cv = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, wv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(e) {
    return Rd.resolve(null).then(e).catch(Dv);
  } : Ud;
  function Dv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $a(e) {
    return e === "head";
  }
  function qd(e, t) {
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
          ci(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, ci(a);
          for (var u = a.firstChild; u; ) {
            var s = u.nextSibling, r = u.nodeName;
            u[_n] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = s;
          }
        } else
          a === "body" && ci(e.ownerDocument.body);
      a = n;
    } while (a);
    yn(t);
  }
  function Hd(e, t) {
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
  function Os(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Os(a), Bu(a);
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
        if (!e[_n])
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
      if (e = Kt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ov(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Kt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Kt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Us(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Rs(e) {
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
  function Kt(e) {
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
  var qs = null;
  function kd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Kt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ld(e) {
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
  function Yd(e, t, a) {
    switch (t = pu(a), e) {
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
  function ci(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Bu(e);
  }
  var Jt = /* @__PURE__ */ new Map(), Vd = /* @__PURE__ */ new Set();
  function bu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var za = B.d;
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
    var e = za.f(), t = ou();
    return e || t;
  }
  function qv(e) {
    var t = Rl(e);
    t !== null && t.tag === 5 && t.type === "form" ? nf(t) : za.r(e);
  }
  var mn = typeof document > "u" ? null : document;
  function Gd(e, t, a) {
    var l = mn;
    if (l && typeof t == "string" && t) {
      var n = Lt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Vd.has(n) || (Vd.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), ht(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Hv(e) {
    za.D(e), Gd("dns-prefetch", e, null);
  }
  function Bv(e, t) {
    za.C(e, t), Gd("preconnect", e, t);
  }
  function kv(e, t, a) {
    za.L(e, t, a);
    var l = mn;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + Lt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Lt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Lt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Lt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = vn(e);
          break;
        case "script":
          u = gn(e);
      }
      Jt.has(u) || (e = A(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Jt.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(si(u)) || t === "script" && l.querySelector(ri(u)) || (t = l.createElement("link"), ht(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Lv(e, t) {
    za.m(e, t);
    var a = mn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Lt(l) + '"][href="' + Lt(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = gn(e);
      }
      if (!Jt.has(u) && (e = A({ rel: "modulepreload", href: e }, t), Jt.set(u, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ri(u)))
              return;
        }
        l = a.createElement("link"), ht(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function Yv(e, t, a) {
    za.S(e, t, a);
    var l = mn;
    if (l && e) {
      var n = ql(l).hoistableStyles, u = vn(e);
      t = t || "default";
      var s = n.get(u);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = l.querySelector(
          si(u)
        ))
          r.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Jt.get(u)) && Hs(e, a);
          var m = s = l.createElement("link");
          ut(m), ht(m, "link", e), m._p = new Promise(function(T, U) {
            m.onload = T, m.onerror = U;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, xu(s, t, l);
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
    za.X(e, t);
    var a = mn;
    if (a && e) {
      var l = ql(a).hoistableScripts, n = gn(e), u = l.get(n);
      u || (u = a.querySelector(ri(n)), u || (e = A({ src: e, async: !0 }, t), (t = Jt.get(n)) && Bs(e, t), u = a.createElement("script"), ut(u), ht(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Gv(e, t) {
    za.M(e, t);
    var a = mn;
    if (a && e) {
      var l = ql(a).hoistableScripts, n = gn(e), u = l.get(n);
      u || (u = a.querySelector(ri(n)), u || (e = A({ src: e, async: !0, type: "module" }, t), (t = Jt.get(n)) && Bs(e, t), u = a.createElement("script"), ut(u), ht(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Xd(e, t, a, l) {
    var n = (n = xe.current) ? bu(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = vn(a.href), a = ql(
          n
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = vn(a.href);
          var u = ql(
            n
          ).hoistableStyles, s = u.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = n.querySelector(
            si(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Jt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Jt.set(e, a), u || Xv(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = gn(a), a = ql(
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
  function vn(e) {
    return 'href="' + Lt(e) + '"';
  }
  function si(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qd(e) {
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
  function gn(e) {
    return '[src="' + Lt(e) + '"]';
  }
  function ri(e) {
    return "script[async]" + e;
  }
  function Zd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Lt(a.href) + '"]'
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
          ), ut(l), ht(l, "style", n), xu(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = vn(a.href);
          var u = e.querySelector(
            si(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ut(u), u;
          l = Qd(a), (n = Jt.get(n)) && Hs(l, n), u = (e.ownerDocument || e).createElement("link"), ut(u);
          var s = u;
          return s._p = new Promise(function(r, m) {
            s.onload = r, s.onerror = m;
          }), ht(u, "link", l), t.state.loading |= 4, xu(u, a.precedence, e), t.instance = u;
        case "script":
          return u = gn(a.src), (n = e.querySelector(
            ri(u)
          )) ? (t.instance = n, ut(n), n) : (l = a, (n = Jt.get(u)) && (l = A({}, a), Bs(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), ut(n), ht(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, xu(l, a.precedence, e));
    return t.instance;
  }
  function xu(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, s = 0; s < l.length; s++) {
      var r = l[s];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Bs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ju = null;
  function Kd(e, t, a) {
    if (ju === null) {
      var l = /* @__PURE__ */ new Map(), n = ju = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = ju, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[_n] || u[rt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var r = l.get(s);
        r ? r.push(u) : l.set(s, [u]);
      }
    }
    return l;
  }
  function Jd(e, t, a) {
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
  function $d(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zv(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = vn(l.href), u = t.querySelector(
          si(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Su.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, ut(u);
          return;
        }
        u = t.ownerDocument || t, l = Qd(l), (n = Jt.get(n)) && Hs(l, n), u = u.createElement("link"), ut(u);
        var s = u;
        s._p = new Promise(function(r, m) {
          s.onload = r, s.onerror = m;
        }), ht(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Su.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var ks = 0;
  function Kv(e, t) {
    return e.stylesheets && e.count === 0 && Nu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Nu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ks === 0 && (ks = 62500 * Av());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Nu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > ks ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Su() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Nu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Eu = null;
  function Nu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Eu = /* @__PURE__ */ new Map(), t.forEach(Jv, e), Eu = null, Su.call(e));
  }
  function Jv(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Eu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Eu.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var s = n[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), u = a.get(s) || l, u === l && a.set(null, n), a.set(s, n), this.count++, l = Su.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var oi = {
    $$typeof: ce,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function $v(e, t, a, l, n, u, s, r, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ue(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ue(0), this.hiddenUpdates = ue(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fd(e, t, a, l, n, u, s, r, m, T, U, H) {
    return e = new $v(
      e,
      t,
      a,
      s,
      m,
      T,
      U,
      H,
      r
    ), t = 1, u === !0 && (t |= 24), u = Mt(3, null, null, t), e.current = u, u.stateNode = e, t = pc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Sc(u), e;
  }
  function Wd(e) {
    return e ? (e = Zl, e) : Zl;
  }
  function Id(e, t, a, l, n, u) {
    n = Wd(n), l.context === null ? l.context = n : l.pendingContext = n, l = Ba(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = ka(e, l, t), a !== null && (At(a, e, t), Vn(a, e, t));
  }
  function Pd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ls(e, t) {
    Pd(e, t), (e = e.alternate) && Pd(e, t);
  }
  function eh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ol(e, 67108864);
      t !== null && At(t, e, 67108864), Ls(e, 67108864);
    }
  }
  function th(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = Ft(t);
      var a = ol(e, t);
      a !== null && At(a, e, t), Ls(e, t);
    }
  }
  var _u = !0;
  function Fv(e, t, a, l) {
    var n = y.T;
    y.T = null;
    var u = B.p;
    try {
      B.p = 2, Ys(e, t, a, l);
    } finally {
      B.p = u, y.T = n;
    }
  }
  function Wv(e, t, a, l) {
    var n = y.T;
    y.T = null;
    var u = B.p;
    try {
      B.p = 8, Ys(e, t, a, l);
    } finally {
      B.p = u, y.T = n;
    }
  }
  function Ys(e, t, a, l) {
    if (_u) {
      var n = Vs(l);
      if (n === null)
        As(
          e,
          t,
          l,
          Tu,
          a
        ), lh(e, l);
      else if (Pv(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (lh(e, l), t & 4 && -1 < Iv.indexOf(e)) {
        for (; n !== null; ) {
          var u = Rl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = oa(u.pendingLanes);
                  if (s !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - it(s);
                      r.entanglements[1] |= m, s &= ~m;
                    }
                    ca(u), (He & 6) === 0 && (su = De() + 500, ni(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = ol(u, 2), r !== null && At(r, u, 2), ou(), Ls(u, 2);
            }
          if (u = Vs(l), u === null && As(
            e,
            t,
            l,
            Tu,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        As(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Vs(e) {
    return e = Xu(e), Gs(e);
  }
  var Tu = null;
  function Gs(e) {
    if (Tu = null, e = Ul(e), e !== null) {
      var t = S(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = p(t), e !== null) return e;
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
    return Tu = e, null;
  }
  function ah(e) {
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
        switch (ra()) {
          case xn:
            return 2;
          case jn:
            return 8;
          case Tl:
          case Sn:
            return 32;
          case Al:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xs = !1, Fa = null, Wa = null, Ia = null, fi = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map(), Pa = [], Iv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Fa = null;
        break;
      case "dragenter":
      case "dragleave":
        Wa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ia = null;
        break;
      case "pointerover":
      case "pointerout":
        fi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        di.delete(t.pointerId);
    }
  }
  function hi(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Rl(t), t !== null && eh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Pv(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Fa = hi(
          Fa,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Wa = hi(
          Wa,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return Ia = hi(
          Ia,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return fi.set(
          u,
          hi(
            fi.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, di.set(
          u,
          hi(
            di.get(u) || null,
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
  function nh(e) {
    var t = Ul(e.target);
    if (t !== null) {
      var a = S(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = p(a), t !== null) {
            e.blockedOn = t, gr(e.priority, function() {
              th(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = q(a), t !== null) {
            e.blockedOn = t, gr(e.priority, function() {
              th(a);
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
  function Au(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Vs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Gu = l, a.target.dispatchEvent(l), Gu = null;
      } else
        return t = Rl(a), t !== null && eh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function ih(e, t, a) {
    Au(e) && a.delete(t);
  }
  function eg() {
    Xs = !1, Fa !== null && Au(Fa) && (Fa = null), Wa !== null && Au(Wa) && (Wa = null), Ia !== null && Au(Ia) && (Ia = null), fi.forEach(ih), di.forEach(ih);
  }
  function zu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      eg
    )));
  }
  var Cu = null;
  function uh(e) {
    Cu !== e && (Cu = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Cu === e && (Cu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (Gs(l || a) === null)
              continue;
            break;
          }
          var u = Rl(a);
          u !== null && (e.splice(t, 3), t -= 3, Vc(
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
      return zu(m, e);
    }
    Fa !== null && zu(Fa, e), Wa !== null && zu(Wa, e), Ia !== null && zu(Ia, e), fi.forEach(t), di.forEach(t);
    for (var a = 0; a < Pa.length; a++) {
      var l = Pa[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Pa.length && (a = Pa[0], a.blockedOn === null); )
      nh(a), a.blockedOn === null && Pa.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], s = n[jt] || null;
        if (typeof u == "function")
          s || uh(a);
        else if (s) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, s = u[jt] || null)
              r = s.formAction;
            else if (Gs(n) !== null) continue;
          } else r = s.action;
          typeof r == "function" ? a[l + 1] = r : (a.splice(l, 3), l -= 3), uh(a);
        }
      }
  }
  function ch() {
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
  function Qs(e) {
    this._internalRoot = e;
  }
  wu.prototype.render = Qs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Ht();
    Id(a, l, e, t, null, null);
  }, wu.prototype.unmount = Qs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Id(e.current, 2, null, e, null, null), ou(), t[Ol] = null;
    }
  };
  function wu(e) {
    this._internalRoot = e;
  }
  wu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vr();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Pa.length && t !== 0 && t < Pa[a].priority; a++) ;
      Pa.splice(a, 0, e), a === 0 && nh(e);
    }
  };
  var sh = f.version;
  if (sh !== "19.2.8")
    throw Error(
      o(
        527,
        sh,
        "19.2.8"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? D(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var tg = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: y,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Du.isDisabled && Du.supportsFiber)
      try {
        il = Du.inject(
          tg
        ), mt = Du;
      } catch {
      }
  }
  return vi.createRoot = function(e, t) {
    if (!E(e)) throw Error(o(299));
    var a = !1, l = "", n = vf, u = gf, s = yf;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Fd(
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
      ch
    ), e[Ol] = t.current, Ts(e), new Qs(t);
  }, vi.hydrateRoot = function(e, t, a) {
    if (!E(e)) throw Error(o(299));
    var l = !1, n = "", u = vf, s = gf, r = yf, m = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (r = a.onRecoverableError), a.formState !== void 0 && (m = a.formState)), t = Fd(
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
      ch
    ), t.context = Wd(null), a = t.current, l = Ht(), l = Ft(l), n = Ba(l), n.callback = null, ka(a, n, l), a = l, t.current.lanes = a, me(t, a), ca(t), e[Ol] = t.current, Ts(e), new wu(t);
  }, vi.version = "19.2.8", vi;
}
var ph;
function fg() {
  if (ph) return Js.exports;
  ph = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), Js.exports = og(), Js.exports;
}
var dg = fg();
const er = "hana.plugin.ui", tr = 1, hg = "X-Hana-Plugin-Surface-Session", mg = "pluginSurfaceSession", wh = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, El = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, vg = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function bh(c) {
  return typeof c == "object" && c !== null;
}
function tl(c) {
  return {
    ok: !1,
    error: {
      code: wh.BAD_MESSAGE,
      message: c
    }
  };
}
function xh(c) {
  if (!bh(c))
    return tl("Plugin UI messages must be objects.");
  if (c.protocol !== er)
    return tl("Plugin UI message protocol is missing or invalid.");
  if (c.version !== tr)
    return {
      ok: !1,
      error: {
        code: wh.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(c.version)}.`
      }
    };
  if (typeof c.kind != "string" || !vg.has(c.kind))
    return tl("Plugin UI message kind is missing or invalid.");
  if (typeof c.type != "string" || c.type.trim() === "")
    return tl("Plugin UI message type must be a non-empty string.");
  const f = c.kind;
  if (f !== "event" && (typeof c.id != "string" || c.id.trim() === ""))
    return tl(`Plugin UI ${f} messages must include a non-empty id.`);
  if (f === "error") {
    if (!bh(c.error))
      return tl("Plugin UI error messages must include an error object.");
    if (typeof c.error.code != "string" || c.error.code.trim() === "")
      return tl("Plugin UI error code must be a non-empty string.");
    if (typeof c.error.message != "string" || c.error.message.trim() === "")
      return tl("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: c
  };
}
class jh extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(f) {
    super(f.message), this.code = f.code, this.details = f.details;
  }
}
let Sh = 0;
function gg() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Sh += 1, `hana-plugin-${Date.now()}-${Sh}`);
}
function yg() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function pg(c) {
  if (!c)
    return null;
  try {
    return new URL(c).origin;
  } catch {
    return null;
  }
}
function bg(c, f) {
  if (f)
    return f;
  const d = new URLSearchParams(c.location.search).get("hana-host-origin");
  return d || (pg(c.document.referrer) ?? "*");
}
function xg(c) {
  const f = new URLSearchParams(c.location.search);
  return {
    theme: f.get("hana-theme") ?? void 0,
    cssUrl: f.get("hana-css") ?? void 0
  };
}
function Eh(c, f, d) {
  return !(c.source !== f || d !== "*" && c.origin !== d);
}
function jg(c) {
  return typeof c == "string" ? { url: c } : c;
}
function Sg(c) {
  return typeof c == "string" ? { text: c } : c;
}
function Dh(c) {
  const f = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(c.location.pathname || "");
  if (!f)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(f[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function Eg(c) {
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
function Ng(c, f) {
  const d = Dh(c), o = Eg(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/assets/${o}`;
}
function _g(c) {
  return new URLSearchParams(c.location.search).get(mg) || null;
}
function Tg(c) {
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
    let b;
    try {
      b = decodeURIComponent(N);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (b === "." || b === ".." || b.includes("/") || b.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const p = new URL(`http://hana.local/${d}`);
  return `${S.map((N) => encodeURIComponent(decodeURIComponent(N))).join("/")}${p.search}`;
}
function Mh(c, f) {
  const d = Dh(c), o = Tg(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/${o}`;
}
function Ag(c, f, d) {
  const o = _g(c);
  if (!o)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const E = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!E)
    throw new Error("hana.api.fetch requires window.fetch.");
  const S = d ?? {}, p = new Headers(S.headers);
  return p.set(hg, o), E(Mh(c, f), {
    ...S,
    headers: p
  });
}
function zg(c = {}) {
  const f = c.targetWindow ?? yg(), d = c.parentWindow ?? f.parent, o = bg(f, c.targetOrigin), E = c.requestTimeoutMs ?? 1e4, S = c.idFactory ?? gg;
  let p = xg(f);
  const q = /* @__PURE__ */ new Set();
  function N(x) {
    d.postMessage(x, o);
  }
  function b(x, L) {
    const Q = {
      protocol: er,
      version: tr,
      kind: "event",
      type: x
    };
    L !== void 0 && (Q.payload = L), N(Q);
  }
  function D(x) {
    if (!Eh(x, d, o))
      return;
    const L = xh(x.data);
    if (!L.ok)
      return;
    const Q = L.value;
    if (Q.kind !== "event" || Q.type !== "hana.theme.changed" || typeof Q.payload != "object" || Q.payload === null)
      return;
    const I = Q.payload;
    p = {
      theme: typeof I.theme == "string" ? I.theme : p.theme,
      cssUrl: typeof I.cssUrl == "string" ? I.cssUrl : p.cssUrl
    };
    for (const te of q)
      te(p);
  }
  function A(x, L, Q = {}) {
    const I = S(), te = Q.timeoutMs ?? E;
    return new Promise((pe, Ce) => {
      const ce = () => {
        f.removeEventListener("message", ve), f.clearTimeout(ge);
      }, ve = ($) => {
        if (!Eh($, d, o))
          return;
        const Y = xh($.data);
        if (!Y.ok)
          return;
        const ie = Y.value;
        ie.id !== I || ie.type !== x || (ie.kind === "response" && (ce(), pe(ie.payload)), ie.kind === "error" && ie.error && (ce(), Ce(new jh(ie.error))));
      }, ge = f.setTimeout(() => {
        ce(), Ce(new jh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${x}.`
        }));
      }, te);
      f.addEventListener("message", ve);
      const de = {
        protocol: er,
        version: tr,
        id: I,
        kind: "request",
        type: x
      };
      L !== void 0 && (de.payload = L), N(de);
    });
  }
  return {
    ready(x) {
      b("hana.ready", x);
    },
    assets: {
      url(x) {
        return Ng(f, x);
      }
    },
    api: {
      url(x) {
        return Mh(f, x);
      },
      fetch(x, L) {
        return Ag(f, x, L);
      }
    },
    ui: {
      resize(x) {
        b(El.UI_RESIZE, x);
      }
    },
    theme: {
      getSnapshot() {
        return { ...p };
      },
      subscribe(x) {
        return q.size === 0 && f.addEventListener("message", D), q.add(x), x({ ...p }), () => {
          q.delete(x), q.size === 0 && f.removeEventListener("message", D);
        };
      }
    },
    host: {
      request: A
    },
    toast: {
      show(x, L) {
        return A(El.TOAST_SHOW, x, L);
      }
    },
    external: {
      open(x, L) {
        return A(El.EXTERNAL_OPEN, jg(x), L);
      }
    },
    clipboard: {
      writeText(x, L) {
        return A(El.CLIPBOARD_WRITE_TEXT, Sg(x), L);
      }
    },
    resources: {
      open(x, L) {
        return A(El.RESOURCE_OPEN, x, L);
      },
      pick(x = {}, L) {
        return A(El.RESOURCE_PICK, x, L);
      },
      requestAccess(x, L) {
        return A(El.RESOURCE_REQUEST_ACCESS, x, L);
      }
    }
  };
}
let Nh = null;
function zt() {
  return Nh ??= zg(), Nh;
}
const cr = {
  ready(c) {
    return zt().ready(c);
  },
  assets: {
    url(c) {
      return zt().assets.url(c);
    }
  },
  api: {
    url(c) {
      return zt().api.url(c);
    },
    fetch(c, f) {
      return zt().api.fetch(c, f);
    }
  },
  ui: {
    resize(c) {
      return zt().ui.resize(c);
    }
  },
  theme: {
    getSnapshot() {
      return zt().theme.getSnapshot();
    },
    subscribe(c) {
      return zt().theme.subscribe(c);
    }
  },
  host: {
    request(c, f, d) {
      return zt().host.request(c, f, d);
    }
  },
  toast: {
    show(c, f) {
      return zt().toast.show(c, f);
    }
  },
  external: {
    open(c, f) {
      return zt().external.open(c, f);
    }
  },
  clipboard: {
    writeText(c, f) {
      return zt().clipboard.writeText(c, f);
    }
  },
  resources: {
    open(c, f) {
      return zt().resources.open(c, f);
    },
    pick(c, f) {
      return zt().resources.pick(c, f);
    },
    requestAccess(c, f) {
      return zt().resources.requestAccess(c, f);
    }
  }
};
function ll(...c) {
  return c.filter(Boolean).join(" ");
}
const _h = {
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
}, Cg = {
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
function wg({ mode: c = "inherit", theme: f, className: d, style: o, children: E, "data-testid": S = "hana-plugin-theme", ...p }) {
  const q = typeof f == "string" ? f : void 0, N = Dg(c, f);
  return i.jsx("div", { ...p, "data-testid": S, className: ll("hana-plugin-theme", d), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? q : void 0, style: { ...N, ...o }, children: E });
}
function Dg(c, f) {
  if (c === "inherit")
    return {};
  const d = Mg(c, f), o = {};
  for (const [E, S] of Object.entries(Cg)) {
    const p = d?.[E];
    p && (o[S] = p);
  }
  return o;
}
function Mg(c, f) {
  if (typeof f == "string")
    return _h[f];
  if (f)
    return f;
  if (c === "hana")
    return _h["warm-paper"];
}
w.forwardRef(function({ variant: f = "secondary", size: d = "md", loading: o = !1, iconLeft: E, iconRight: S, disabled: p, className: q, children: N, type: b = "button", ...D }, A) {
  return i.jsxs("button", { ...D, ref: A, type: b, disabled: p || o, className: ll("hana-plugin-button", `hana-plugin-button-${f}`, `hana-plugin-button-${d}`, o && "hana-plugin-button-loading", q), children: [o ? i.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : E, N && i.jsx("span", { className: "hana-plugin-button-label", children: N }), !o && S] });
});
w.forwardRef(function({ label: f, size: d = "md", variant: o = "ghost", className: E, children: S, type: p = "button", ...q }, N) {
  return i.jsx("button", { ...q, ref: N, type: p, "aria-label": f, title: q.title || f, className: ll("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${o}`, E), children: S });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: S, inputClassName: p, ...q }, N) {
  const b = w.useId(), D = E || b;
  return i.jsx(Oh, { label: f, hint: d, error: o, htmlFor: D, className: S, children: i.jsx("input", { ...q, ref: N, id: D, "aria-invalid": !!o, className: ll("hana-plugin-input", p) }) });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: S, textareaClassName: p, rows: q = 4, ...N }, b) {
  const D = w.useId(), A = E || D;
  return i.jsx(Oh, { label: f, hint: d, error: o, htmlFor: A, className: S, children: i.jsx("textarea", { ...N, ref: b, id: A, rows: q, "aria-invalid": !!o, className: ll("hana-plugin-textarea", p) }) });
});
w.forwardRef(function({ checked: f, onChange: d, label: o, disabled: E, className: S, onClick: p, type: q = "button", ...N }, b) {
  const D = typeof o == "string" ? o : N["aria-label"];
  return i.jsxs("span", { className: ll("hana-plugin-switch-wrap", S), children: [i.jsx("button", { ...N, ref: b, type: q, role: "switch", "aria-checked": f, "aria-label": D, disabled: E, className: ll("hana-plugin-switch", f && "hana-plugin-switch-on"), onClick: (A) => {
    p?.(A), !A.defaultPrevented && !E && d?.(!f);
  }, children: i.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), o && i.jsx("span", { className: "hana-plugin-switch-label", children: o })] });
});
function Oh({ label: c, hint: f, error: d, htmlFor: o, className: E, children: S }) {
  return i.jsxs("div", { className: ll("hana-plugin-field", E), children: [c && i.jsx("label", { className: "hana-plugin-field-label", htmlFor: o, children: c }), f && i.jsx("div", { className: "hana-plugin-field-hint", children: f }), S, d && i.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const Uh = /^\d{4}-\d{2}-\d{2}$/;
function Nl(c, f) {
  if (!Uh.test(c)) return c;
  const d = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + f), d.toISOString().slice(0, 10);
}
function sr(c) {
  const f = String(c || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: f[0] || "",
    end: f[1] || f[0] || ""
  };
}
function ar(c) {
  const f = (/* @__PURE__ */ new Date(`${c}T12:00:00Z`)).getUTCDay();
  return f === 0 ? 6 : f - 1;
}
function Rh(c, f) {
  return Array.from({ length: f }, (d, o) => Nl(c, o));
}
function lr(c, f) {
  const o = sr(c).start || f, E = Nl(o, -ar(o));
  return Rh(E, 7);
}
function qh(c, f, d = 3) {
  const o = Math.max(1, Math.floor(d)), E = Math.max(0, Math.floor(f)), S = c.slice(E * o, E * o + o);
  return [...S, ...Array(Math.max(0, o - S.length)).fill(null)];
}
function Og(c, f) {
  const o = sr(c).start || f, E = Uh.test(o) ? `${o.slice(0, 7)}-01` : f, S = /* @__PURE__ */ new Date(`${E}T12:00:00Z`);
  S.setUTCMonth(S.getUTCMonth() + 1, 1);
  const p = new Date(S);
  p.setUTCDate(p.getUTCDate() - 1);
  const q = p.toISOString().slice(0, 10), N = Nl(E, -ar(E)), b = 6 - ar(q), D = Nl(q, b), A = Math.round(((/* @__PURE__ */ new Date(`${D}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${N}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Rh(N, A);
}
function yi(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function gi(c) {
  if (!c || c.length < 16) return null;
  const f = Number(c.slice(11, 13)), d = Number(c.slice(14, 16));
  return !Number.isFinite(f) || !Number.isFinite(d) ? null : f * 60 + d;
}
function Hh(c) {
  const f = c.map((S) => gi(S.start_at || S.deadline_at)).filter((S) => S !== null), d = c.map((S) => {
    const p = gi(S.end_at);
    if (p !== null) return p;
    const q = gi(S.start_at || S.deadline_at);
    return q === null ? null : q + Number(S.duration || S.estimated_minutes || 45);
  }).filter((S) => S !== null), o = f.length ? Math.floor(Math.min(...f) / 60) - 1 : 10, E = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, o)),
    endHour: Math.min(24, Math.max(22, E))
  };
}
function Bh(c, f, d, o = 56) {
  const E = gi(c.start_at || c.deadline_at);
  if (E === null) return null;
  const p = gi(c.end_at) ?? E + Number(c.duration || c.estimated_minutes || 45), q = Math.max(f * 60, E), N = Math.min(d * 60, Math.max(p, q + 30));
  return {
    top: (q - f * 60) / 60 * o,
    height: Math.max(30, (N - q) / 60 * o)
  };
}
const Ug = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消", "已调课"]), Rg = /* @__PURE__ */ new Set(["cancelled", "deleted", "removed", "void", "已取消", "已调课", "已删除", "删除"]);
function qg(c) {
  const f = /* @__PURE__ */ new Map();
  for (const d of c) {
    const o = String(d.status || "").trim().toLowerCase();
    if (Rg.has(o)) continue;
    const E = d.start_at || d.deadline_at || d.window_start || "", S = String(d.title || "").trim().replace(/\s+/g, " ").toLowerCase(), p = E ? [d.domain, S, E, d.end_at || "", d.duration || d.estimated_minutes || ""].join("|") : `id:${d.id}`, q = f.get(p);
    (!q || ["completed", "已完成"].includes(d.status) && !["completed", "已完成"].includes(q.status)) && f.set(p, d);
  }
  return [...f.values()];
}
function Hg(c) {
  const f = c.filter((o) => !Ug.has(o.status) && o.start_at && o.end_at).map((o) => ({ item: o, start: new Date(o.start_at).getTime(), end: new Date(o.end_at).getTime() })).filter((o) => Number.isFinite(o.start) && Number.isFinite(o.end) && o.end > o.start).sort((o, E) => o.start - E.start || o.end - E.end), d = [];
  for (let o = 0; o < f.length; o += 1) {
    const E = f[o];
    for (let S = o + 1; S < f.length; S += 1) {
      const p = f[S];
      if (p.start >= E.end) break;
      if (E.item.id === p.item.id || p.end <= E.start) continue;
      const q = [E.item.domain, p.item.domain].sort().join("-"), N = q === "course-course" ? "course-course" : q === "affair-affair" ? "affair-affair" : "course-affair";
      d.push({
        id: `${E.item.id}:${p.item.id}`,
        kind: N,
        start: new Date(Math.max(E.start, p.start)).toISOString(),
        end: new Date(Math.min(E.end, p.end)).toISOString(),
        left: E.item,
        right: p.item
      });
    }
  }
  return d;
}
function rr(c) {
  const f = c.map((S) => {
    const p = S.start_at || S.deadline_at, q = p ? new Date(p).getTime() : Number.NaN, N = S.end_at ? new Date(S.end_at).getTime() : Number.NaN, b = Number.isFinite(N) ? N : q + Number(S.duration || S.estimated_minutes || 45) * 6e4;
    return { item: S, start: q, end: b };
  }).filter((S) => Number.isFinite(S.start)).sort((S, p) => S.start - p.start || S.end - p.end), d = [], o = f.map((S) => {
    let p = d.findIndex((q) => q <= S.start);
    return p < 0 && (p = d.length), d[p] = S.end, { ...S, lane: p };
  }), E = Math.max(1, d.length);
  return o.map((S) => ({ ...S, laneCount: E }));
}
function Bg(c, f) {
  return c && typeof c == "object" && "error" in c && typeof c.error == "string" && c.error.trim() ? c.error.trim() : f;
}
async function kg(c) {
  const f = await c.text();
  let d = null;
  if (f.trim())
    try {
      d = JSON.parse(f);
    } catch {
      throw new Error(c.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${c.status}）`);
    }
  if (!c.ok)
    throw new Error(Bg(d, `请求失败（HTTP ${c.status}）`));
  if (!d || typeof d != "object")
    throw new Error("插件接口没有返回有效数据");
  return d;
}
async function nt(c, f) {
  let d;
  try {
    d = await cr.api.fetch(c, f);
  } catch (o) {
    const E = o instanceof Error ? o.message : String(o || "未知错误");
    throw new Error(`页面会话请求失败：${E}`);
  }
  return kg(d);
}
function nr() {
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
const Lg = [
  { id: "overview", label: "课表" }
], Th = {
  week: "周视图",
  month: "月视图"
}, Yg = {
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
function Vg(c) {
  const f = c;
  if (!f || !Array.isArray(f.items) || !Array.isArray(f.pending) || !Array.isArray(f.courses) || !Array.isArray(f.affairs) || !Array.isArray(f.students) || !Array.isArray(f.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return f;
}
function Gg(c) {
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
class Xg extends w.Component {
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
function Ca(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Qg(c) {
  return c ? `更新于 ${Ca(c)}` : "尚未更新";
}
function or(c) {
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
function Ah(c) {
  const f = Math.max(0, Math.round(Number(c) || 0)), d = Math.floor(f / 60), o = f % 60;
  return d ? o ? `${d} 小时 ${o} 分钟` : `${d} 小时` : `${o} 分钟`;
}
function gt(c) {
  return c.start_at || c.deadline_at || null;
}
function ir(c) {
  return ["completed", "已完成"].includes(c) ? "finished" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "待处理", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function fr(c, f) {
  if (!f || c.domain !== "course") return !1;
  const d = (c.start_at || "").slice(0, 10);
  return !!d && d < f && c.status === "待上课";
}
function dr(c, f) {
  if (fr(c, f)) return "state-pending";
  const d = ir(c.status);
  return d === "finished" ? "state-finished" : d === "muted" ? "state-neutral" : d === "error" ? "state-error" : d === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function hr(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function pi(c) {
  try {
    const f = window.sessionStorage.getItem(`laosu-workbench.cache.${c}`);
    return f ? JSON.parse(f) : null;
  } catch {
    return null;
  }
}
function Ou(c, f) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${c}`, JSON.stringify(f));
  } catch {
  }
}
function Zg() {
  const c = new URLSearchParams(window.location.search), f = c.get("tab") || "overview", d = c.get("scope") || "week", o = "overview", E = ["week", "month"].includes(d) ? d : "week", S = c.get("preview"), [p, q] = w.useState(o), [N, b] = w.useState(E), [D, A] = w.useState(f === "actions" || !!S), [x, L] = w.useState(null), Q = x !== null, [I, te] = w.useState(null), [pe, Ce] = w.useState(!0), [ce, ve] = w.useState(""), [ge, de] = w.useState(null), [$, Y] = w.useState(null), [ie, k] = w.useState({ text: "", nonce: 0 }), [G, P] = w.useState(!1), [ae, Ee] = w.useState(""), [we, y] = w.useState(null), [B, K] = w.useState({}), [g, W] = w.useState(!1), [h, O] = w.useState(null), [X, F] = w.useState(0), [ye, xe] = w.useState(null), [Ne, $e] = w.useState(null), V = w.useRef(null), Re = w.useRef(null), he = w.useRef(nr()), J = w.useRef(nr()), Ct = w.useRef(/* @__PURE__ */ new Set()), at = w.useRef(null), bt = w.useRef(!1), wt = w.useRef(!1), aa = w.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), yt = w.useCallback(async (M = N, Z = {}) => {
    const le = Z.silent === !0, ue = he.current.begin();
    le || (Ce(!0), ve(""));
    try {
      const me = new URLSearchParams({ scope: M });
      Z.fresh && me.set("fresh", "1");
      const qe = Vg(await nt(`api/dashboard?${me.toString()}`));
      return he.current.isCurrent(ue) ? (te(qe), Ou(`dashboard.${M}`, qe), !0) : null;
    } catch (me) {
      return he.current.isCurrent(ue) ? (le || ve(me.message || "读取失败"), !1) : null;
    } finally {
      he.current.isCurrent(ue) && !le && Ce(!1);
    }
  }, [N]);
  w.useEffect(() => {
    const M = pi(`dashboard.${E}`);
    M && (te(M), Ce(!1)), yt(E, { fresh: !0, silent: !!M });
  }, []), w.useEffect(() => {
    const M = (Z) => {
      Z.target instanceof HTMLElement && !V.current?.contains(Z.target) && (at.current = Z.target);
    };
    return window.addEventListener("pointerdown", M, !0), () => window.removeEventListener("pointerdown", M, !0);
  }, []), w.useEffect(() => {
    S && (A(!0), nt(`api/preview/${encodeURIComponent(S)}`).then(de).catch((M) => {
      de({ ok: !1, error: M.message });
    }));
  }, [S]), w.useEffect(() => {
    if (!D) return;
    const M = V.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !bt.current) {
      const oe = new URL(window.location.href);
      oe.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", oe), bt.current = !0;
    }
    const le = window.setTimeout(() => {
      (($ ? M?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : M?.querySelector(".ai-composer textarea")) || M?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), $ && M?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), ue = () => Array.from(M?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((oe) => oe.getClientRects().length > 0 && !oe.closest("[hidden]")), me = (oe) => {
      if (oe.key === "Escape") {
        oe.preventDefault(), it();
        return;
      }
      if (oe.key !== "Tab") return;
      const xt = ue();
      if (!xt.length) return;
      const la = xt[0], Ft = xt[xt.length - 1];
      M?.contains(document.activeElement) ? oe.shiftKey && document.activeElement === la ? (oe.preventDefault(), Ft.focus()) : !oe.shiftKey && document.activeElement === Ft && (oe.preventDefault(), la.focus()) : (oe.preventDefault(), (oe.shiftKey ? Ft : la).focus());
    }, qe = () => {
      bt.current && (bt.current = !1, A(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", me), window.addEventListener("popstate", qe), () => {
      window.clearTimeout(le), document.body.style.overflow = Z, window.removeEventListener("keydown", me), window.removeEventListener("popstate", qe), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [D]), w.useEffect(() => {
    if (!Q) return;
    const M = Re.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !wt.current) {
      const oe = new URL(window.location.href);
      oe.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", oe), wt.current = !0;
    }
    const le = window.setTimeout(() => M?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), ue = () => Array.from(M?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((oe) => oe.getClientRects().length > 0 && !oe.closest("[hidden]")), me = (oe) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (oe.key === "Escape") {
        oe.preventDefault(), En();
        return;
      }
      if (oe.key !== "Tab") return;
      const xt = ue();
      if (!xt.length) return;
      const la = xt[0], Ft = xt[xt.length - 1];
      M?.contains(document.activeElement) ? oe.shiftKey && document.activeElement === la ? (oe.preventDefault(), Ft.focus()) : !oe.shiftKey && document.activeElement === Ft && (oe.preventDefault(), la.focus()) : (oe.preventDefault(), (oe.shiftKey ? Ft : la).focus());
    }, qe = () => {
      const oe = new URL(window.location.href).searchParams.get("drawer");
      oe === "context" || oe === "actions" || !wt.current || (wt.current = !1, L(null));
    };
    return window.addEventListener("keydown", me), window.addEventListener("popstate", qe), () => {
      window.clearTimeout(le), document.body.style.overflow = Z, window.removeEventListener("keydown", me), window.removeEventListener("popstate", qe), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [Q]), w.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", p);
    const M = () => {
      aa.current[p] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${p}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", M), () => window.removeEventListener("pagehide", M);
  }, [p]), w.useEffect(() => {
    if (Ne?.tab === p) return;
    const M = aa.current[p] || 0;
    let Z = 0, le, ue = !1;
    const me = () => {
      ue = !0;
    }, qe = () => {
      ue || (window.scrollTo({ top: M, behavior: "auto" }), Z += 1, Math.abs(window.scrollY - M) > 3 && Z < 15 && (le = window.setTimeout(qe, 90)));
    }, oe = window.requestAnimationFrame(qe);
    return window.addEventListener("wheel", me, { passive: !0 }), window.addEventListener("touchstart", me, { passive: !0 }), window.addEventListener("keydown", me), () => {
      ue = !0, window.cancelAnimationFrame(oe), le && window.clearTimeout(le), window.removeEventListener("wheel", me), window.removeEventListener("touchstart", me), window.removeEventListener("keydown", me);
    };
  }, [p]), w.useEffect(() => {
    if (!Ne || Ne.tab !== p) return;
    let M = 0, Z, le, ue;
    const me = () => {
      const oe = Array.from(document.querySelectorAll("[data-item-id]")).find((xt) => xt.dataset.itemId === Ne.id);
      if (!oe && M < 20) {
        M += 1, Z = window.setTimeout(me, 60);
        return;
      }
      if (!oe) {
        $e(null);
        return;
      }
      ue = oe, oe.classList.add("target-highlight"), oe.setAttribute("tabindex", "-1"), oe.scrollIntoView({ behavior: "smooth", block: "center" }), oe.focus({ preventScroll: !0 }), le = window.setTimeout(() => {
        oe.classList.remove("target-highlight"), oe.removeAttribute("tabindex"), $e(null);
      }, 2400);
    }, qe = window.setTimeout(me, 50);
    return () => {
      window.clearTimeout(qe), Z && window.clearTimeout(Z), le && window.clearTimeout(le), ue?.classList.remove("target-highlight"), ue?.removeAttribute("tabindex");
    };
  }, [Ne, p, I?.observedAt]), w.useEffect(() => {
    if (!ae) return;
    const M = window.setTimeout(() => Ee(""), 4800);
    return () => window.clearTimeout(M);
  }, [ae]);
  const st = w.useRef(null);
  w.useEffect(() => {
    const M = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const Z = await nt("api/data-revision");
          if (!Z?.ok || typeof Z.revision != "number") return;
          if (st.current === null) {
            st.current = Z.revision;
            return;
          }
          Z.revision !== st.current && (st.current = Z.revision, Nn({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(M);
  }, [N]);
  const sa = w.useMemo(
    () => (I?.pending ?? []).filter((M) => !["completed", "cancelled"].includes(M.status)),
    [I]
  );
  async function wa(M) {
    const Z = new URL(window.location.href);
    Z.searchParams.set("scope", M), window.history.replaceState(window.history.state, "", Z), b(M);
    const le = pi(`dashboard.${M}`);
    if (le) {
      te(le), Ce(!1), yt(M, { fresh: !0, silent: !0 });
      return;
    }
    await yt(M);
  }
  function nl(M = p) {
    aa.current[M] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${M}`, String(window.scrollY));
  }
  function bn(M, Z) {
    nl();
    const le = new URL(window.location.href);
    le.searchParams.set("tab", M), window.history.replaceState(window.history.state, "", le), $e(null), q(M);
  }
  function De(M) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const Z = document.activeElement;
    ((Z instanceof HTMLElement && Z !== document.body && !V.current?.contains(Z) ? Z : null) || M || at.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function ra(M) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const Z = document.activeElement, le = Z instanceof HTMLElement && Z !== document.body && !Re.current?.contains(Z) ? Z : null;
    (M || le || at.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function xn(M, Z) {
    ra(Z), L({ kind: "item", item: M });
  }
  function jn(M, Z, le) {
    ra(Z), L({ kind: "day", date: M, items: le });
  }
  function Tl(M) {
    ra(M), L({ kind: "system" });
  }
  function Sn() {
    const M = /* @__PURE__ */ Symbol("workbench-operation");
    return Ct.current.add(M), P(!0), M;
  }
  function Al(M) {
    Ct.current.delete(M), P(Ct.current.size > 0);
  }
  function zl() {
    J.current.invalidate(), de(null);
  }
  function Uu(M) {
    J.current.invalidate(), de(M);
  }
  function il() {
    De(document.querySelector(".ai-action-button")), Y(null), k({ text: "", nonce: Date.now() }), zl(), A(!0);
  }
  function mt(M) {
    De(), Y(null), k({ text: M, nonce: Date.now() }), zl(), A(!0);
  }
  function $t(M) {
    De(), Y(M), zl(), A(!0);
  }
  function it() {
    if (bt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    bt.current = !1, A(!1);
  }
  function En() {
    if (wt.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    wt.current = !1, L(null);
  }
  async function Ru(M, Z) {
    if (!we) {
      y(Z.id);
      try {
        const le = M === "courseCancel" ? await nt("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: Z.title, date: Z.start_at?.slice(0, 10), time: Z.start_at?.slice(11, 16), reason: "没上" })
        }) : await nt("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: Z.id, expectedVersion: Z.version })
        });
        if (!le.ok) throw new Error(le.error || "处理未完成");
        M === "affairComplete" ? (K((ue) => ({ ...ue, [Z.id]: { ok: !0, text: le.message || "已完成", buttonLabel: "已完成" } })), Ee(`${Z.title} 已完成`)) : Ee(`${Z.title} ${Z.start_at?.slice(5, 16) ?? ""} 已记录没上`), await yt(N);
      } catch (le) {
        M === "affairComplete" && K((ue) => ({ ...ue, [Z.id]: { ok: !1, text: `处理失败：${le.message || "未知错误"}` } })), Ee(`处理失败：${le.message || "未知错误"}`);
      } finally {
        y(null);
      }
    }
  }
  async function Nn(M = {}) {
    const Z = M.silent === !0;
    Z || Ee("正在刷新数据…");
    const le = await yt(N, { ...M, fresh: !Z });
    le === !0 ? (K({}), O(null), F((ue) => ue + 1), Z || Ee("本地课程与事务数据已刷新")) : le === !1 && !Z && Ee("刷新失败，请查看页面错误");
  }
  async function Cl(M) {
    const Z = J.current.begin(), le = Sn();
    de(null);
    try {
      const ue = await nt("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(M)
      });
      if (!J.current.isCurrent(Z)) return;
      de({ ...ue, operation: String(M.operation || ""), input: M });
    } catch (ue) {
      J.current.isCurrent(Z) && de({ ok: !1, error: ue.message });
    } finally {
      Al(le);
    }
  }
  async function wl(M) {
    if (!we) {
      y(M.id), K((Z) => ({ ...Z, [M.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const Z = await nt("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: M.id, expectedVersion: M.version })
        });
        if (!Z.ok) throw new Error(Z.error || "没约上的处理未完成");
        const le = Z.outcome?.candidateDate, ue = le ? `已安排 ${le.slice(5)}` : "已处理";
        K((me) => ({ ...me, [M.id]: {
          ok: !0,
          text: Z.message || "已推进到下一次尝试",
          buttonLabel: ue,
          undo: Z.outcome ? { expectedVersion: Z.outcome.version } : void 0
        } })), await yt(N);
      } catch (Z) {
        const le = Z.message || "没约上的处理失败";
        K((ue) => ({ ...ue, [M.id]: { ok: !1, text: `处理失败：${le}`, buttonLabel: "重试" } }));
      } finally {
        y(null);
      }
    }
  }
  async function Dl(M) {
    if (we) return;
    const Z = B[M.id]?.undo;
    y(M.id), K((le) => ({ ...le, [M.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const le = await nt("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: M.id, expectedVersion: Z?.expectedVersion ?? M.version })
      });
      if (!le.ok) throw new Error(le.error || "恢复上一候选日未完成");
      const ue = le.outcome?.candidateDate;
      K((me) => ({ ...me, [M.id]: {
        ok: !0,
        text: le.message || "已恢复到上一候选日",
        buttonLabel: ue ? `回到 ${ue.slice(5)}` : "已恢复"
      } })), await yt(N);
    } catch (le) {
      const ue = le.message || "恢复上一候选日失败";
      K((me) => ({ ...me, [M.id]: { ok: !1, text: `恢复失败：${ue}`, buttonLabel: "重试" } }));
    } finally {
      y(null);
    }
  }
  async function oa() {
    if (!ge?.token || !ge.canCommit) return;
    const M = J.current.begin(), Z = Sn(), le = ge.operation || $?.operation;
    try {
      const ue = await nt("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: ge.token })
      }), me = { ok: ue.ok, summary: ue.summary, message: `${ue.message || ""}${ue.exportMessage ? `
导出：${ue.exportMessage}` : ""}${ue.syncMessage ? `
日历：${ue.syncMessage}` : ""}`, result: ue, operation: le, input: ge.input, committed: !!ue.ok };
      await yt(N), F((qe) => qe + 1), J.current.isCurrent(M) && de(me);
    } catch (ue) {
      J.current.isCurrent(M) && de({ ok: !1, error: ue.message });
    } finally {
      Al(Z);
    }
  }
  async function Ml() {
    const M = ge?.batchItems ?? [];
    if (!M.length) return;
    const Z = J.current.begin(), le = Sn(), ue = /* @__PURE__ */ new Map();
    try {
      for (const me of M) {
        if (!me.canCommit) {
          ue.set(me.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const qe = await nt("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: me.token })
          });
          if (ue.set(me.token, { ok: !!qe.ok, message: qe.message || (qe.ok ? "已执行" : "执行失败") }), !qe.ok) break;
        } catch (qe) {
          ue.set(me.token, { ok: !1, message: qe.message || "提交失败" });
          break;
        }
      }
      await yt(N), F((me) => me + 1), J.current.isCurrent(Z) && ge && de({
        ...ge,
        ok: M.every((me) => ue.get(me.token)?.ok === !0),
        committed: !0,
        message: M.map((me) => {
          const qe = ue.get(me.token);
          return `${qe?.ok ? "✓" : qe ? "✗" : "·"} ${me.summary}：${qe?.message || "未执行"}`;
        }).join(`
`),
        batchItems: M.map((me) => {
          const qe = ue.get(me.token);
          return { ...me, canCommit: !1, resultOk: qe?.ok ?? !1, message: qe?.message || "未执行" };
        })
      });
    } finally {
      Al(le);
    }
  }
  return /* @__PURE__ */ i.jsx(wg, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ i.jsxs("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-main", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "topbar", "data-ui": "topbar", children: [
      /* @__PURE__ */ i.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", "data-ui": "primary-navigation", children: Lg.map((M) => /* @__PURE__ */ i.jsx("button", { type: "button", className: p === M.id ? "tab active" : "tab", "data-ui-role": "nav-item", "data-ui-id": `nav-${M.id}`, "aria-current": p === M.id ? "page" : void 0, onClick: () => bn(M.id), children: M.label }, M.id)) }),
      /* @__PURE__ */ i.jsxs("div", { className: "top-actions", "data-ui": "top-actions", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: D ? "ai-action-button active" : "ai-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-ai", onClick: il, "aria-expanded": D, children: "✦ AI 操作" }),
        /* @__PURE__ */ i.jsx("span", { className: "updated-at", children: Qg(I?.observedAt) }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${I?.health?.ok ? "health good" : "health bad"} health-button${x?.kind === "system" ? " active" : ""}`, "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-system-status", onClick: (M) => Tl(M.currentTarget), "aria-expanded": x?.kind === "system", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          I?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button refresh-local-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "refresh-workbench", onClick: () => {
          Nn();
        }, "aria-label": "刷新本地数据", disabled: pe, children: "↻ 刷新本地数据" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: "main-area", children: [
      ae && /* @__PURE__ */ i.jsx("div", { className: "toast", role: "status", children: ae }),
      ce && /* @__PURE__ */ i.jsx(_l, { tone: "error", title: "读取失败", text: ce }),
      I?.warnings?.length ? /* @__PURE__ */ i.jsx(_l, { tone: "warn", title: "有警告", text: I.warnings.join("；") }) : null,
      pe && !I ? /* @__PURE__ */ i.jsx(mr, {}) : null,
      I && p !== "planning" && p !== "affairs" && /* @__PURE__ */ i.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": pe, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ i.jsx("span", { children: pe ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ i.jsx("strong", { children: or(I.range) })
        ] }),
        /* @__PURE__ */ i.jsx(
          Mu,
          {
            label: "时间范围切换",
            busy: pe,
            value: N,
            onChange: (M) => {
              wa(M);
            },
            items: Object.keys(Th).map((M) => ({ id: M, label: Th[M] }))
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: pe && I ? "view-content scope-loading" : "view-content", "aria-busy": pe && !!I, inert: pe && !!I, children: [
        I && p === "overview" && /* @__PURE__ */ i.jsx(Kg, { dashboard: I, onInspect: xn, onOpenDay: jn }),
        p === "planning" && /* @__PURE__ */ i.jsx(Ig, { onAction: $t, onAskAi: mt, refreshKey: X, sectionHint: ye, scheduleText: I?.scheduleText, onDataChanged: Nn }),
        p === "affairs" && /* @__PURE__ */ i.jsx(ay, { onQuick: Ru, onAskAi: mt, onPrepare: $t, onInspect: xn, onRetry: wl, onRetryPrev: Dl, retryingId: we, feedback: B, refreshKey: X, observedAt: I?.observedAt ?? "", onOpenDay: (M, Z, le) => jn(M, le, Z), localDate: I?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "context-drawer-backdrop", hidden: !Q, onMouseDown: (M) => {
      M.currentTarget === M.target && En();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: Re, className: "context-drawer", "data-ui": "drawer", "data-ui-id": "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: En, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: x?.kind === "system" ? "运行状态" : x?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ i.jsx("h2", { children: x?.kind === "system" ? "系统状态" : x?.kind === "day" ? Bt(`${x.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : x?.item.title }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "context-drawer-body", children: x && I && /* @__PURE__ */ i.jsx(cy, { view: x, dashboard: I }) })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "action-drawer-backdrop", hidden: !D, onMouseDown: (M) => {
      M.currentTarget === M.target && it();
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
        ly,
        {
          pending: sa,
          students: I?.students ?? [],
          preset: $,
          aiDraft: ie,
          preview: ge,
          busy: G,
          onPreview: Cl,
          onAiPreview: Uu,
          onCommit: oa,
          onCommitBatch: Ml,
          onClear: zl,
          onClose: it
        }
      ) })
    ] }) })
  ] }) });
}
function Kg({ dashboard: c, onInspect: f, onOpenDay: d }) {
  const o = w.useMemo(() => {
    const A = /* @__PURE__ */ new Map();
    return c.courses.forEach((x) => A.set(x.id, { ...x, domain: "course" })), c.affairs.forEach((x) => A.set(x.id, { ...x, domain: "affair" })), qg([...A.values()]).sort((x, L) => String(gt(x) || "").localeCompare(String(gt(L) || "")));
  }, [c.courses, c.affairs]), S = o.filter((A) => A.domain === "course").filter((A) => !["已取消", "已调课", "cancelled"].includes(A.status)), p = S.filter((A) => ["已完成", "completed"].includes(A.status)), q = S.reduce((A, x) => A + Number(x.duration || 0), 0), N = p.reduce((A, x) => A + Number(x.duration || 0), 0), b = w.useMemo(() => Hg(o), [o]), D = o.filter((A) => A.domain === "affair" && A.start_at && !A.end_at && !["completed", "cancelled"].includes(A.status));
  return /* @__PURE__ */ i.jsx("div", { className: "view-stack read-only-schedule", children: /* @__PURE__ */ i.jsxs("div", { className: "panel wide calendar-panel", children: [
    /* @__PURE__ */ i.jsx(ta, { title: c.scope === "week" ? "周课表" : "月课表", meta: or(c.range) }),
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
        /* @__PURE__ */ i.jsx("strong", { children: Ah(q) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { children: "已完成" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          p.length,
          " 节 · ",
          Ah(N)
        ] })
      ] })
    ] }),
    (b.length > 0 || D.length > 0) && /* @__PURE__ */ i.jsxs("section", { className: b.length ? "schedule-conflict-alert error" : "schedule-conflict-alert warn", "aria-label": "日程冲突检查", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: b.length ? `${b.length} 处时间冲突` : "冲突检查不完整" }),
        /* @__PURE__ */ i.jsx("span", { children: "刷新后按本地课程与事务数据即时核对" })
      ] }),
      b.slice(0, 4).map((A) => /* @__PURE__ */ i.jsxs("p", { children: [
        A.kind === "course-course" ? "课程重叠" : A.kind === "course-affair" ? "课程／事务冲突" : "事务重叠",
        "：",
        A.left.title,
        " ↔ ",
        A.right.title,
        " · ",
        Bt(A.start, { month: "numeric", day: "numeric" }),
        " ",
        Ca(A.start),
        "–",
        Ca(A.end)
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
    c.scope === "week" ? /* @__PURE__ */ i.jsx(Fg, { items: o, range: c.range, localDate: c.localDate, onInspect: f }) : /* @__PURE__ */ i.jsx(Vh, { items: o, range: c.range, localDate: c.localDate, onOpenDay: d })
  ] }) });
}
function kh(c) {
  return rr(c)[0]?.laneCount || 1;
}
const Jg = 52, $g = 150;
function Lh(c, f) {
  const [d, o] = w.useState(0);
  if (w.useEffect(() => {
    const p = c.current;
    if (!p || typeof ResizeObserver > "u") return;
    const q = new ResizeObserver((N) => {
      const b = N[0]?.contentRect.width;
      b && Number.isFinite(b) && o(b);
    });
    return q.observe(p), () => q.disconnect();
  }, [c]), f) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const E = Math.floor((d - Jg) / $g), S = Math.max(1, Math.min(7, E));
  return { visibleDays: S, paginated: S < 7 };
}
function Yh() {
  const c = w.useRef(null), f = w.useRef(null), d = w.useCallback((S) => {
    if (S.button !== 0 || S.target.closest("button, article, a, input, select, textarea")) return;
    const p = c.current;
    !p || p.scrollWidth <= p.clientWidth || (f.current = { pointerId: S.pointerId, startX: S.clientX, scrollLeft: p.scrollLeft }, p.setPointerCapture(S.pointerId), p.classList.add("dragging"));
  }, []), o = w.useCallback((S) => {
    const p = c.current, q = f.current;
    !p || !q || q.pointerId !== S.pointerId || (p.scrollLeft = q.scrollLeft - (S.clientX - q.startX));
  }, []), E = w.useCallback((S) => {
    const p = c.current, q = f.current;
    !p || !q || q.pointerId !== S.pointerId || (p.hasPointerCapture(S.pointerId) && p.releasePointerCapture(S.pointerId), p.classList.remove("dragging"), f.current = null);
  }, []);
  return { ref: c, onPointerDown: d, onPointerMove: o, onPointerUp: E, onPointerCancel: E };
}
function Fg({ items: c, range: f, localDate: d, onInspect: o }) {
  const E = w.useMemo(() => lr(f, d), [f, d]), S = Yh(), [p, q] = w.useState(0), [N, b] = w.useState(null), { visibleDays: D, paginated: A } = Lh(S.ref, !!N), x = Math.max(1, Math.ceil(7 / Math.max(1, D))), L = w.useMemo(
    () => N ? [N] : A ? qh(E, p, D) : E,
    [E, p, N, A, D]
  );
  w.useEffect(() => {
    q(0);
  }, [f, D]), w.useEffect(() => {
    if (!N) return;
    const k = (G) => {
      G.key === "Escape" && b(null);
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [N]);
  const Q = w.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    return c.forEach((G) => {
      const P = yi(G);
      P && (P < d && ["已取消", "已调课", "cancelled"].includes(G.status) || k.set(P, [...k.get(P) || [], G]));
    }), k.forEach((G, P) => k.set(P, [...G].sort((ae, Ee) => String(gt(ae) || "").localeCompare(String(gt(Ee) || ""))))), k;
  }, [c, d]), I = w.useMemo(() => new Map(E.map((k) => [k, kh((Q.get(k) || []).filter((G) => G.start_at || G.deadline_at))])), [Q, E]), te = w.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    for (const G of E) {
      const P = (Q.get(G) || []).filter((ae) => ae.start_at || ae.deadline_at);
      k.set(G, rr(P));
    }
    return k;
  }, [Q, E]), pe = L.map((k) => k && I.get(k) || 1);
  pe.reduce((k, G) => k + G, 0);
  const Ce = `52px ${pe.map((k) => `minmax(0, ${k}fr)`).join(" ")}`, ce = c.filter((k) => k.start_at || k.deadline_at), ve = L.length >= 7 ? ce : ce.filter((k) => L.includes(yi(k))), { startHour: ge, endHour: de } = Hh(ve), $ = N ? 92 : D >= 6 ? 64 : D >= 4 ? 72 : 84, Y = (de - ge) * $, ie = Array.from({ length: de - ge + 1 }, (k, G) => ge + G);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    N ? /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => b(null), children: "‹ 返回整周" }),
      /* @__PURE__ */ i.jsxs("strong", { children: [
        Bt(`${N}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
        " · 单日视图"
      ] }),
      /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true" })
    ] }) : A && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本页日期", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: p === 0, onClick: () => q((k) => Math.max(0, k - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ i.jsxs("strong", { children: [
        "第 ",
        p + 1,
        "/",
        x,
        " 页 · 每页 ",
        D,
        " 天"
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: p >= x - 1, onClick: () => q((k) => Math.min(x - 1, k + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "时间视图，点击日期标题聚焦到单日", ...S, children: /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: Ce }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-corner", children: "时间" }),
        L.map((k, G) => k ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: k === d ? "week-day-header today" : "week-day-header", onClick: () => b(k), "aria-label": `聚焦到 ${Bt(`${k}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ i.jsx("span", { children: Bt(`${k}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(k.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            Q.get(k)?.length || 0,
            " 项"
          ] })
        ] }, k) : /* @__PURE__ */ i.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${G}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: Ce }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-time-axis", style: { height: Y }, children: ie.map((k) => /* @__PURE__ */ i.jsxs("span", { style: { top: (k - ge) * $ }, children: [
          String(k).padStart(2, "0"),
          ":00"
        ] }, k)) }),
        L.map((k, G) => {
          if (!k) return /* @__PURE__ */ i.jsx("div", { className: "week-day-track empty-slot", style: { height: Y }, "aria-hidden": "true" }, `empty-${G}`);
          const P = te.get(k) || [];
          return /* @__PURE__ */ i.jsx("div", { className: k === d ? "week-day-track today" : "week-day-track", style: { height: Y }, children: P.map(({ item: ae, lane: Ee, laneCount: we }) => {
            const y = Bh(ae, ge, de, $);
            if (!y) return null;
            const B = 100 / we, K = ae.start_at || ae.deadline_at, g = fr(ae, d);
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `week-time-block ${ae.domain} ${dr(ae, d)}${hr(ae) ? " temporary" : ""}`,
                style: { top: y.top, height: y.height, left: `calc(${Ee * B}% + 4px)`, width: `calc(${B}% - 8px)` },
                tabIndex: 0,
                role: "button",
                onClick: (W) => {
                  W.target.closest("button") || o(ae, W.currentTarget);
                },
                onKeyDown: (W) => {
                  (W.key === "Enter" || W.key === " ") && (W.preventDefault(), o(ae, W.currentTarget));
                },
                "data-item-id": ae.id,
                "aria-label": `${Ca(K)} ${ae.title}${g ? "（已过期待标记）" : ""}，${ae.domain === "course" ? `${ae.duration || "—"} 分钟课程` : "事务"}，打开详情`,
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    Ca(K),
                    " · ",
                    ae.title,
                    g ? "（过期）" : ""
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
  const E = w.useMemo(() => Og(f, d), [f, d]), S = (f.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), p = w.useMemo(() => {
    const N = /* @__PURE__ */ new Map();
    return c.forEach((b) => {
      const D = yi(b);
      D && (D < d && ["已取消", "已调课", "cancelled"].includes(b.status) || N.set(D, [...N.get(D) || [], b]));
    }), N.forEach((b, D) => N.set(D, [...b].sort((A, x) => String(gt(A) || "").localeCompare(String(gt(x) || ""))))), N;
  }, [c, d]), q = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ i.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ i.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "month-weekdays", children: q.map((N) => /* @__PURE__ */ i.jsxs("span", { children: [
      "周",
      N
    ] }, N)) }),
    /* @__PURE__ */ i.jsx("div", { className: "month-grid", children: E.map((N) => {
      const b = p.get(N) || [], D = ["month-cell"];
      return N.startsWith(S) || D.push("outside"), N === d && D.push("today"), /* @__PURE__ */ i.jsxs("button", { type: "button", className: D.join(" "), onClick: (A) => o(N, A.currentTarget), children: [
        /* @__PURE__ */ i.jsxs("header", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: Number(N.slice(8, 10)) }),
          /* @__PURE__ */ i.jsx("span", { children: b.length ? `${b.length} 项` : "" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "month-item-list", children: [
          b.slice(0, 3).map((A) => /* @__PURE__ */ i.jsxs("span", { className: `month-item ${A.domain} ${dr(A, d)}${hr(A) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ i.jsx("i", {}),
            Ca(gt(A)) || "待定",
            " · ",
            A.title,
            fr(A, d) ? "（过期）" : ""
          ] }, A.id)),
          b.length > 3 && /* @__PURE__ */ i.jsxs("span", { className: "month-more", children: [
            "＋",
            b.length - 3,
            " 项"
          ] })
        ] })
      ] }, N);
    }) })
  ] }) });
}
function Is(c) {
  const f = Math.floor(c / 60), d = c % 60;
  return String(f).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function Wg({ onAction: c, onAskAi: f, refreshKey: d = 0 }) {
  const [o, E] = w.useState(() => pi("cockpit")), [S, p] = w.useState(!o), [q, N] = w.useState(""), b = w.useCallback(async (x = !1, L = !1) => {
    x || p(!0);
    try {
      const Q = await nt("api/cockpit" + (L ? "?fresh=1" : ""));
      return E(Q), Ou("cockpit", Q), N(""), !0;
    } catch (Q) {
      return N(Q?.message || "读取失败"), !1;
    } finally {
      p(!1);
    }
  }, []);
  w.useEffect(() => {
    b(!o);
  }, [b]), w.useEffect(() => {
    d > 0 && b(!0, !0);
  }, [d]);
  const D = w.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const Q of o?.students ?? [])
      x.has(Q.group) || x.set(Q.group, []), x.get(Q.group).push(Q);
    return ["本周已排", "已预留", "未排"].map((Q) => ({ label: Q, items: x.get(Q) ?? [] }));
  }, [o]);
  if (S && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (q && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx(ea, { label: "驾驶舱读取", ok: !1, detail: q }) });
  const A = o?.localDate ?? "";
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ i.jsx(bi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ i.jsxs("span", { className: "muted-note", children: [
        o?.monday,
        " 当周 · 今天 ",
        A
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        b(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: () => f(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ i.jsx(ta, { title: "候选学生" }),
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
          x.courses.map((L, Q) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => c({ operation: "course_move", student: L.title, fromDate: x.date, fromTime: String(L.start).slice(11, 16) }), children: [
              /* @__PURE__ */ i.jsx("span", { children: L.title }),
              /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
                String(L.start).slice(11, 16),
                "–",
                String(L.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "cockpit-card-ai", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", title: "用一句话交给 AI 调时间", onClick: () => f("把" + L.title + " " + x.date + " " + String(L.start).slice(11, 16) + " 的这节课调一下时间"), children: "调时间" })
          ] }, "c" + Q)),
          x.reservations.map((L, Q) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => c({ operation: "reservation_update", id: L.id, student: L.student, date: x.date, time: String(L.start).slice(11, 16) }), children: [
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
          x.gaps.map((L, Q) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + L.minutes + " 分钟，点击预留", onClick: () => c({ operation: "reservation_add", date: x.date, time: Is(L.start) }), children: [
            Is(L.start),
            "–",
            Is(L.end),
            " 空档"
          ] }, "g" + Q)),
          x.courses.length === 0 && x.reservations.length === 0 && /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, x.date)) }),
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ i.jsx(ta, { title: "实时诊断" }),
        /* @__PURE__ */ i.jsx(pn, { label: "本周课程", value: o?.diagnostics.courseCount ?? 0, hint: "共 " + (o?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ i.jsx(pn, { label: "有效预留", value: o?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
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
        (o?.warnings ?? []).map((x, L) => /* @__PURE__ */ i.jsx(ea, { label: "读取警告", ok: !1, detail: x }, L))
      ] })
    ] })
  ] });
}
function Ig({ onAction: c, onAskAi: f, refreshKey: d, sectionHint: o, scheduleText: E, onDataChanged: S }) {
  const [p, q] = w.useState(() => pi("planning")), [N, b] = w.useState(""), [D, A] = w.useState("calendar"), [x, L] = w.useState("issues"), [Q, I] = w.useState(!1), [te, pe] = w.useState(null), [Ce, ce] = w.useState(!1), [ve, ge] = w.useState(null), [de, $] = w.useState({});
  w.useEffect(() => {
    o?.section && A(o.section);
  }, [o?.nonce]), w.useEffect(() => {
    let g = !1;
    return nt(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((W) => {
      if (g) return;
      const h = Gg(W);
      q(h), Ou("planning", h), b(""), pe(null);
    }).catch((W) => {
      g || b(W.message || "筹备数据读取失败");
    }), () => {
      g = !0;
    };
  }, [d]), w.useEffect(() => {
    const g = Object.entries(de).at(-1);
    if (!g || !g[1].ok || ve === g[0]) return;
    const W = window.setTimeout(() => {
      $((h) => {
        const O = { ...h };
        return delete O[g[0]], O;
      });
    }, 4500);
    return () => window.clearTimeout(W);
  }, [ve, de]);
  async function Y() {
    if (!(!p || Ce)) {
      ce(!0), pe(null);
      try {
        pe(await nt(`api/planning/template-check?monday=${encodeURIComponent(p.weekMonday)}`));
      } catch (g) {
        pe({ ok: !1, passed: !1, monday: p.weekMonday, output: "", affectedDates: [], error: g.message });
      } finally {
        ce(!1);
      }
    }
  }
  async function ie(g) {
    if (!ve) {
      ge(g), $((W) => ({ ...W, [g]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const W = await nt("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: g })
        });
        if (!W.ok) throw new Error(W.error || "取消预留未完成");
        q((h) => h && {
          ...h,
          reservations: h.reservations.map((O) => O.reservation_id === g ? { ...O, status: "已取消" } : O)
        }), $((h) => ({ ...h, [g]: { ok: !0, text: W.message || "已取消预留" } })), S({ silent: !0 });
      } catch (W) {
        $((h) => ({ ...h, [g]: { ok: !1, text: `取消失败：${W.message || "未知错误"}` } }));
      } finally {
        ge(null);
      }
    }
  }
  async function k(g) {
    if (!ve) {
      ge(g), $((W) => ({ ...W, [g]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const W = await nt("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: g })
        });
        if (!W.ok) throw new Error(W.error || "预留确认失败");
        q((h) => h && {
          ...h,
          summary: { ...h.summary, formalCourseCount: h.summary.formalCourseCount + 1 },
          reservations: h.reservations.map((O) => O.reservation_id === g ? { ...O, status: "已确认" } : O),
          audit: {
            ...h.audit,
            reservation_hard_blockers: h.audit.reservation_hard_blockers.filter((O) => O.reservation_id !== g)
          }
        }), $((h) => ({ ...h, [g]: { ok: !0, text: W.message || "已确认落课" } })), S({ silent: !0 });
      } catch (W) {
        $((h) => ({ ...h, [g]: { ok: !1, text: `确认失败：${W.message || "未知错误"}` } })), S({ silent: !0 });
      } finally {
        ge(null);
      }
    }
  }
  if (N) return /* @__PURE__ */ i.jsx(_l, { tone: "error", title: "筹备数据读取失败", text: N });
  if (!p) return /* @__PURE__ */ i.jsx(mr, {});
  const G = p.summary, P = p.students.filter((g) => g.confirmed && g.zone !== "未分区" && (g.availability.length > 0 || g.hasReservation)).length, ae = G.activeStudentCount ? Math.round(P / G.activeStudentCount * 100) : 100, Ee = p.commute.overlaps.length, we = new Map(p.audit.reservation_hard_blockers.map((g) => [g.reservation_id, g.reasons])), y = p.students.filter((g) => x === "all" ? !0 : x === "availability" ? !g.availability.length && !g.hasReservation : x === "zone" ? g.zone === "未分区" : x === "pending" ? !!g.pendingWeekday || !g.confirmed : g.issues.length > 0), B = Q ? y : y.slice(0, 10), K = p.sources.filter((g) => !g.ok);
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ i.jsx(bi, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    K.length > 0 && /* @__PURE__ */ i.jsx(_l, { tone: "warn", title: `${K.length} 项筹备数据读取异常`, text: K.map((g) => `${g.label}：${g.message || "读取失败"}`).join("；") }),
    G.reservationHardBlockerCount > 0 && /* @__PURE__ */ i.jsx(_l, { tone: "warn", title: `${G.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: p.audit.reservation_hard_blockers.map((g) => `${g.student} ${g.date}：${g.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ i.jsx(
      Mu,
      {
        label: "筹备页内部导航",
        value: D,
        onChange: (g) => A(g),
        items: [
          { id: "calendar", label: "周视图", count: p.reservations.length + p.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: G.unzonedCount + G.missingAvailabilityCount + G.unconfirmedActiveCount + p.students.filter((g) => g.issues.length).length },
          { id: "candidates", label: "预留与复核", count: Ee + G.reservationCount + G.reviewCount + G.overdueCount + K.length }
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(Pg, { planning: p, hidden: D !== "calendar", onConfirmReservation: k, onCancelReservation: ie, onAction: c, confirmingReservationId: ve, reservationFeedback: de }),
    /* @__PURE__ */ i.jsxs("div", { hidden: D !== "trial", children: [
      /* @__PURE__ */ i.jsx(bi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ i.jsx(Wg, { onAction: c, onAskAi: f, refreshKey: d })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: D !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ i.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          P,
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
            G.activeStudentCount - P,
            " 人仍有关键资料缺口。contract ",
            p.contract.version ?? "—",
            " · schema ",
            p.contract.schemaVersion ?? "—",
            " · ",
            or(p.range)
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
        ].map(([g, W]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: x === g ? "selected" : "", onClick: () => {
          L(g), I(!1);
        }, children: W }, g)) })
      ] }),
      y.length ? /* @__PURE__ */ i.jsxs("div", { className: "planning-student-list", children: [
        B.map((g) => {
          const W = g.availability.length ? g.availability.map((h) => `${h.weekday} ${h.start_time}-${h.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ i.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ i.jsx("strong", { children: g.name }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                g.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ i.jsx("span", { className: g.confirmed ? "state-good" : "state-warn", children: g.pendingWeekday ? `${g.pendingWeekday}待定` : g.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "片区" }),
              /* @__PURE__ */ i.jsx("span", { className: g.zone === "未分区" ? "state-warn" : "", children: g.zone })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ i.jsx("span", { className: !g.availability.length && !g.hasReservation ? "state-warn" : "", title: W, children: g.availability.length ? W : g.hasReservation ? "已有单日预留" : W })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "约束" }),
              /* @__PURE__ */ i.jsx("span", { children: g.vacations.length ? g.vacations.map((h) => `至 ${h.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-row-actions", children: [
              g.zone === "未分区" && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "zone_set", student: g.name }), children: "设片区" }),
              !g.availability.length && !g.hasReservation && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "availability_set", student: g.name, weekday: g.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_add", student: g.name, duration: g.duration, zone: g.zone === "未分区" ? "" : g.zone }), children: "预留" })
            ] })
          ] }, g.sourceName);
        }),
        y.length > 10 && /* @__PURE__ */ i.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => I((g) => !g), children: Q ? "收起学生列表" : `再看 ${y.length - 10} 人` })
      ] }) : /* @__PURE__ */ i.jsx(al, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      p.inactiveConfirmed.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          p.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-student-context", hidden: D !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ i.jsx("span", { children: p.pending.map((g) => g.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ i.jsx("span", { children: p.vacations.map((g) => `${g.student} ${g.start_date.slice(5)}—${g.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ i.jsx("span", { children: p.zones.map((g) => `${g.zone} ${g.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-two-column", hidden: D !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ i.jsx(ta, { title: "课程预留", meta: `${p.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        p.reservations.length ? /* @__PURE__ */ i.jsx("div", { className: "reservation-card-list", children: p.reservations.map((g) => {
          const W = (g.conflicts?.formal_courses?.length || 0) + (g.conflicts?.soft_reservations?.length || 0), h = we.get(g.reservation_id) || [], O = `reservation-blocker-${g.reservation_id}`, X = g.status === "已确认" ? "已落课" : g.status === "预期" ? "待落课" : g.status, F = h.length ? "blocked" : g.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ i.jsxs("article", { className: `reservation-card ${F}`, children: [
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ i.jsx("strong", { children: g.reservation_date.slice(5) }),
              /* @__PURE__ */ i.jsx("span", { children: g.weekday })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ i.jsx("strong", { children: g.student }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                g.start_time,
                "-",
                g.end_time,
                " · ",
                g.duration,
                " 分钟",
                g.zone ? ` · ${g.zone}` : ""
              ] }),
              /* @__PURE__ */ i.jsxs("small", { id: O, children: [
                X,
                W ? ` · ${W} 项软冲突` : "",
                h.length ? ` · 硬约束：${h.join("、")}` : "",
                g.note ? ` · ${g.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "reservation-actions", children: g.status === "预期" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "reservation-update", onClick: () => c({ operation: "reservation_update", reservationId: g.reservation_id, date: g.reservation_date, time: g.start_time, duration: g.duration, zone: g.zone || "", note: g.note || "" }), children: "调时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: h.length > 0, "aria-describedby": h.length ? O : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: g.reservation_id }), children: h.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", onClick: () => c({ operation: "reservation_cancel", reservationId: g.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ i.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              X
            ] }) })
          ] }, g.reservation_id);
        }) }) : /* @__PURE__ */ i.jsx(al, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
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
          /* @__PURE__ */ i.jsx(Ps, { label: "时间重叠", count: p.commute.overlaps.length, tone: "danger", details: p.commute.overlaps.slice(0, 3).map((g) => `${g.weekday} ${g.first} ${g.firstRange} / ${g.second} ${g.secondRange}`) }),
          /* @__PURE__ */ i.jsx(Ps, { label: "长期候选时间差异", count: p.commute.availabilityConflicts.length, tone: "neutral", details: p.commute.availabilityConflicts.slice(0, 3).map((g) => `${g.student} ${g.weekday} ${g.startTime}-${g.endTime}（仅提示）`) }),
          /* @__PURE__ */ i.jsx(Ps, { label: "排时间时再问通勤", count: p.commute.missingRoutes.length, tone: "neutral", details: p.commute.missingRoutes.slice(0, 3).map((g) => `${g.weekday} ${g.from} → ${g.to}`) })
        ] }),
        p.commute.missingRoutes.slice(0, 2).map((g) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: g.from, toStudent: g.to }), children: [
          "补录 ",
          g.from,
          " → ",
          g.to
        ] }, `${g.weekday}-${g.from}-${g.to}`)),
        te && /* @__PURE__ */ i.jsxs("div", { className: te.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ i.jsx("strong", { children: te.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ i.jsx("pre", { children: te.error || te.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    D === "candidates" && (p.reviews.length > 0 || G.overdueCount > 0) && /* @__PURE__ */ i.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ i.jsx(ta, { title: "历史课程复核", meta: `${p.reviews.length} 节待确认 · ${G.overdueCount} 节过期待转入`, action: G.overdueCount ? `处理 ${G.overdueCount} 节过期课` : void 0, onAction: G.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ i.jsx("div", { className: "review-card-list", children: p.reviews.map((g) => /* @__PURE__ */ i.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: g.student }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            g.date,
            " · ",
            g.start_time,
            "-",
            g.end_time
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: g.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: g.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, g.course_id)) })
    ] }),
    D === "candidates" && p.reviews.length === 0 && G.overdueCount === 0 && /* @__PURE__ */ i.jsx("section", { className: "panel", children: /* @__PURE__ */ i.jsx(al, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
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
        /* @__PURE__ */ i.jsx("div", { className: "source-status-list", children: p.sources.map((g) => /* @__PURE__ */ i.jsxs("span", { className: g.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          g.label
        ] }, g.label)) }),
        /* @__PURE__ */ i.jsxs("pre", { children: [
          Object.values(p.raw).filter(Boolean).join(`

`),
          E ? `

── 底层课表文本 ──
${E}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Pg({ planning: c, hidden: f, onConfirmReservation: d, onCancelReservation: o, onAction: E, confirmingReservationId: S, reservationFeedback: p }) {
  const [q, N] = w.useState("reservation"), [b, D] = w.useState(null), A = Yh(), [x, L] = w.useState(c.weekMonday), [Q, I] = w.useState(0), [te, pe] = w.useState(null), Ce = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], ce = w.useMemo(() => lr(`${x}..${x}`, x), [x]), { visibleDays: ve, paginated: ge } = Lh(A.ref, !!te), de = Math.max(1, Math.ceil(7 / Math.max(1, ve))), $ = w.useMemo(
    () => te ? [te] : ge ? qh(ce, Q, ve) : ce,
    [ce, Q, te, ge, ve]
  );
  w.useEffect(() => {
    L(c.weekMonday);
  }, [c.weekMonday]), w.useEffect(() => {
    I(0), pe(null), D(null);
  }, [x, q]);
  const Y = w.useMemo(() => sr(c.range), [c.range]), ie = w.useMemo(() => lr(c.range, c.localDate)[0], [c.range, c.localDate]), k = x > ie, G = !!(Y.end && Nl(x, 7) <= Y.end), P = w.useMemo(() => new Map(c.students.map((V) => [V.name, V])), [c.students]), ae = w.useMemo(() => new Map(c.pending.map((V) => [V.student, V])), [c.pending]), Ee = w.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((V) => [V.reservation_id, V.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), we = w.useMemo(() => {
    const V = (he, J = "在读") => J !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : ae.has(he) ? { studentState: "待定", stateClass: "pending" } : P.get(he)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, Re = (he) => ({
      ...he,
      start_at: `${he.date}T${he.start_time}:00+08:00`,
      end_at: `${he.date}T${he.end_time}:00+08:00`
    });
    return q === "reservation" ? c.reservations.filter((he) => he.reservation_date >= ce[0] && he.reservation_date <= ce[6] && he.status !== "已取消").map((he) => {
      const J = Ee.get(he.reservation_id), Ct = (he.student_status || "在读") !== "在读", at = he.status === "已确认";
      return Re({
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
        studentState: Ct ? "已暂停" : at ? "已落课" : J ? "有硬约束" : "待落课",
        stateClass: Ct ? "paused" : at ? "landed" : J ? "blocked" : "expected",
        zone: he.zone,
        note: he.note
      });
    }) : c.templates.flatMap((he) => {
      const J = Ce.indexOf(he.weekday);
      if (J < 0) return [];
      const Ct = ce[J], at = V(he.student, he.student_status);
      return [Re({
        id: `template-${he.template_id}`,
        kind: "template",
        student: he.student,
        date: Ct,
        weekday: he.weekday,
        start_time: he.start_time,
        end_time: he.end_time,
        duration: he.duration,
        studentState: at.studentState,
        stateClass: at.stateClass
      })];
    });
  }, [ce, q, ae, c.reservations, c.templates, Ee, P]);
  w.useEffect(() => {
    b && !we.some((V) => V.id === b && V.kind === "reservation") && D(null);
  }, [we, b]), w.useEffect(() => {
    if (!te) return;
    const V = (Re) => {
      Re.key === "Escape" && pe(null);
    };
    return window.addEventListener("keydown", V), () => window.removeEventListener("keydown", V);
  }, [te]), w.useEffect(() => {
    if (!b) return;
    const V = (Re) => {
      Re.key === "Escape" && D(null);
    };
    return window.addEventListener("keydown", V), () => window.removeEventListener("keydown", V);
  }, [b]);
  const y = !!S, B = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    return we.forEach((Re) => V.set(Re.date, [...V.get(Re.date) || [], Re])), V;
  }, [we]), K = w.useMemo(() => new Map(ce.map((V) => [V, kh(B.get(V) || [])])), [B, ce]), g = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    for (const Re of ce)
      V.set(Re, rr(B.get(Re) || []));
    return V;
  }, [B, ce]), W = $.map((V) => V && K.get(V) || 1);
  W.reduce((V, Re) => V + Re, 0);
  const h = `52px ${W.map((V) => `minmax(0, ${V}fr)`).join(" ")}`, O = $.length >= 7 ? we : we.filter((V) => $.includes(V.date)), { startHour: X, endHour: F } = Hh(O), ye = te ? 92 : ve >= 6 ? 64 : ve >= 4 ? 72 : 84, xe = (F - X) * ye, Ne = Array.from({ length: F - X + 1 }, (V, Re) => X + Re), $e = `${Bt(`${ce[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${Bt(`${ce[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
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
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "上一周", disabled: !k, onClick: () => L((V) => Nl(V, -7)), children: "‹" }),
          /* @__PURE__ */ i.jsx("strong", { children: $e }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "下一周", disabled: !G, onClick: () => L((V) => Nl(V, 7)), children: "›" })
        ] }),
        te ? /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => pe(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            Bt(`${te}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true" })
        ] }) : ge && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Q === 0, onClick: () => I((V) => Math.max(0, V - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "第 ",
            Q + 1,
            "/",
            de,
            " 页 · 每页 ",
            ve,
            " 天"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Q >= de - 1, onClick: () => I((V) => Math.min(de - 1, V + 1)), children: "下一页 ›" })
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
        $.map((V, Re) => V ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: V === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => pe(V), "aria-label": `聚焦到 ${Bt(`${V}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ i.jsx("span", { children: Ce[ce.indexOf(V)] }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(V.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            B.get(V)?.length || 0,
            " 项"
          ] })
        ] }, V) : /* @__PURE__ */ i.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${Re}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: h }, onPointerDown: (V) => {
        V.target.closest(".planning-week-block") || D(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-axis", style: { height: xe }, children: Ne.map((V) => /* @__PURE__ */ i.jsxs("span", { style: { top: (V - X) * ye }, children: [
          String(V).padStart(2, "0"),
          ":00"
        ] }, V)) }),
        $.map((V, Re) => {
          if (!V) return /* @__PURE__ */ i.jsx("div", { className: "planning-week-track empty-slot", style: { height: xe }, "aria-hidden": "true" }, `empty-${Re}`);
          const he = g.get(V) || [];
          return /* @__PURE__ */ i.jsx("div", { className: V === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: xe }, children: he.map(({ item: J, lane: Ct, laneCount: at }) => {
            const bt = Bh(J, X, F, ye);
            if (!bt) return null;
            const wt = 100 / at, aa = J.kind === "reservation" && J.reservationStatus === "预期", yt = J.kind === "reservation" && J.reservationStatus === "已确认", st = !!(J.reservationId && (aa || yt)), sa = !!(aa && S === J.reservationId), wa = !!(st && (b === J.id || sa)), nl = J.reservationId ? p[J.reservationId] : void 0, bn = !!(y || J.blockerText || J.stateClass === "paused");
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `planning-week-block ${J.kind} ${J.stateClass}${st ? " actionable" : ""}${wa ? " action-open" : ""}`,
                tabIndex: st ? 0 : void 0,
                role: st ? "button" : void 0,
                "aria-expanded": st ? wa : void 0,
                "aria-label": `${J.start_time}-${J.end_time} ${J.student}，${J.studentState}${J.zone ? `，${J.zone}` : ""}${aa ? "；移入或点击后可调整时间、确认落课" : yt ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (De) => {
                  st && !De.target.closest("button") && D((ra) => ra === J.id ? null : J.id);
                },
                onKeyDown: (De) => {
                  st && (De.key === "Enter" || De.key === " " ? (De.preventDefault(), D((ra) => ra === J.id ? null : J.id)) : De.key === "Escape" && (De.preventDefault(), D(null)));
                },
                style: { top: bt.top, height: bt.height, left: `calc(${Ct * wt}% + 4px)`, width: `calc(${wt}% - 8px)` },
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
                  st && /* @__PURE__ */ i.jsxs("div", { className: "planning-week-inline-action", onClick: (De) => De.stopPropagation(), children: [
                    /* @__PURE__ */ i.jsx("div", { className: "planning-week-inline-buttons", children: aa ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: y, onClick: () => {
                        D(null), E({ operation: "reservation_update", reservationId: J.reservationId, date: J.date, time: J.start_time, duration: J.duration, zone: J.zone || "", note: J.note || "" });
                      }, children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: bn, "aria-busy": sa, onClick: () => {
                        const De = d(J.reservationId);
                        De && typeof De.then == "function" && De.finally(() => D(null));
                      }, children: sa ? "确认中…" : y ? "处理中…" : J.stateClass === "paused" ? "学生已暂停" : J.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => E({ operation: "course_move", student: J.student, fromDate: J.date, fromTime: J.start_time, toDate: J.date, toTime: J.start_time, duration: J.duration }), children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => E({ operation: "course_cancel", student: J.student, date: J.date, time: J.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", disabled: y, onClick: () => {
                        const De = o(J.reservationId);
                        De && typeof De.then == "function" && De.finally(() => D(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (J.blockerText || nl) && /* @__PURE__ */ i.jsx(Xh, { ok: !!nl?.ok, text: nl?.text || J.blockerText || "" })
                  ] })
                ]
              },
              J.id
            );
          }) }, V);
        })
      ] })
    ] }) }) : /* @__PURE__ */ i.jsx(al, { title: q === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: q === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function Ps({ label: c, count: f, tone: d, details: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("span", { children: c }),
      /* @__PURE__ */ i.jsx("strong", { children: f })
    ] }),
    o.length > 0 && /* @__PURE__ */ i.jsx("ul", { children: o.map((E) => /* @__PURE__ */ i.jsx("li", { children: E }, E)) })
  ] });
}
const ey = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function ty({ item: c, onInspect: f, onPrepare: d, onQuick: o, onAskAi: E, onRetry: S, onRetryPrev: p, retryingId: q, feedback: N }) {
  const b = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), D = q === c.id, A = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", x = Date.now(), L = c.deadline_at ? new Date(c.deadline_at).getTime() : null, Q = L != null ? Math.ceil((L - x) / 864e5) : null, I = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ i.jsxs(
    "article",
    {
      className: `affair-card ${A}${b ? " closed" : ""}`,
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
            /* @__PURE__ */ i.jsx("strong", { children: Ca(c.start_at) }),
            /* @__PURE__ */ i.jsx("span", { children: Bt(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          A === "deadline" && c.deadline_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: Bt(c.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "截止",
              Q != null && !b ? ` · ${Q >= 0 ? `剩 ${Q} 天` : `已过 ${-Q} 天`}` : ""
            ] })
          ] }),
          A === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ i.jsx("span", { children: c.window_label || "窗口未定" })
          ] }),
          A === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ i.jsx("span", { children: I ? `下次 ${I.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ i.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ i.jsx(Qh, { value: c.status }),
            c.note ? /* @__PURE__ */ i.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ i.jsx("em", { children: `提醒 ${Bt(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${Ca(c.next_prompt_at)}` }) : null
          ] }),
          A === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ i.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((te) => /* @__PURE__ */ i.jsx("i", { children: ey[te] || te }, te)) }) : null,
          N ? /* @__PURE__ */ i.jsx(Xh, { ok: N.ok, text: N.text }) : null,
          N?.undo && p ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!q, onClick: () => {
            p(c);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "affair-card-actions", children: !b && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do primary", disabled: !!q || N?.ok, onClick: () => o?.("affairComplete", c), children: N?.ok ? "已完成" : "完成" }),
          c.retry && S ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!q || !!N?.ok, "aria-busy": D, onClick: () => {
            S(c);
          }, children: D ? "处理中…" : N?.buttonLabel || "没约上" }) : E ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => E(`把「${c.title}」（${c.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function ay({ onPrepare: c, onQuick: f, onAskAi: d, onInspect: o, onRetry: E, onRetryPrev: S, retryingId: p, feedback: q, refreshKey: N, observedAt: b, onOpenDay: D, localDate: A }) {
  const [x, L] = w.useState("pending"), [Q, I] = w.useState("list"), [te, pe] = w.useState(() => pi("affairs-month")), [Ce, ce] = w.useState(""), ve = w.useCallback((y) => {
    nt("api/affairs-month" + (y ? "?fresh=1" : "")).then((B) => {
      if (!B || !Array.isArray(B.affairs) || !Array.isArray(B.pending)) return;
      const K = {
        affairs: B.affairs.map((g) => ({ ...g, domain: "affair" })),
        pending: B.pending.map((g) => ({ ...g, domain: "affair" })),
        month: String(B.month || "")
      };
      pe(K), Ou("affairs-month", K), ce("");
    }).catch(() => {
    });
  }, []);
  w.useEffect(() => {
    ve(!te);
  }, [ve]), w.useEffect(() => {
    N > 0 && ve(!0);
  }, [N]), w.useEffect(() => {
    b && te && ve(!1);
  }, [b, ve]);
  const ge = te?.pending ?? [], de = te?.affairs ?? [], $ = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), Y = de.filter((y) => !$.has(y.status)).sort((y, B) => String(gt(y) || "").localeCompare(String(gt(B) || ""))), ie = de.filter((y) => $.has(y.status)).sort((y, B) => String(gt(B) || "").localeCompare(String(gt(y) || ""))), k = ie.filter((y) => !["cancelled", "已取消"].includes(y.status)).length, G = te?.month ? `${te.month}-01..${te.month}-01` : "", ae = { pending: ge, scheduled: Y, closed: ie }[x], Ee = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[x];
  function we(y, B) {
    const K = de.filter((g) => yi(g) === y);
    D(y, K, B);
  }
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx(bi, { eyebrow: `事务 · 本月 ${te?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${k} 件、取消 ${ie.length - k} 件，进行中 ${Y.length} 件。点日历上的任何一天，看那天的安排。` }),
    Ce && /* @__PURE__ */ i.jsx(_l, { tone: "error", title: "事务数据读取失败", text: Ce }),
    !te && /* @__PURE__ */ i.jsx(mr, {}),
    te && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ i.jsx(
          Mu,
          {
            label: "事务状态",
            value: x,
            onChange: (y) => L(y),
            items: [
              { id: "pending", label: "待处理", count: ge.length },
              { id: "scheduled", label: "已安排", count: Y.length },
              { id: "closed", label: "已完成·已取消", count: ie.length }
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          Mu,
          {
            label: "视图切换",
            value: Q,
            onChange: (y) => I(y),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      Q === "calendar" ? /* @__PURE__ */ i.jsx(Vh, { items: de, range: G, localDate: A ?? te.month + "-01", onOpenDay: we }) : /* @__PURE__ */ i.jsx("div", { children: ae.length ? ae.map((y) => /* @__PURE__ */ i.jsx(ty, { item: y, onInspect: o, onPrepare: c, onQuick: f, onAskAi: d, onRetry: E, onRetryPrev: S, retryingId: p, feedback: q[y.id] }, y.id)) : /* @__PURE__ */ i.jsx(al, { title: Ee.title, text: Ee.text }) })
    ] })
  ] });
}
function ly({ pending: c, students: f, preset: d, aiDraft: o, preview: E, busy: S, onPreview: p, onAiPreview: q, onCommit: N, onCommitBatch: b, onClear: D, onClose: A }) {
  const [x, L] = w.useState(d?.operation || "course_move"), [Q, I] = w.useState(d?.affairKind || "timed"), [te, pe] = w.useState(d?.student || ""), [Ce, ce] = w.useState(d?.duration || ""), [ve, ge] = w.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  w.useEffect(() => {
    d?.operation && L(d.operation), d?.affairKind && I(d.affairKind), d?.student && pe(d.student), d?.duration && ce(d.duration);
  }, [d]);
  function de(Y) {
    Y.preventDefault();
    const ie = new FormData(Y.currentTarget), k = { operation: x };
    for (const [G, P] of ie.entries())
      G !== "operation" && String(P).trim() && (k[G] = P);
    k.duration && (k.duration = Number(k.duration)), k.minutes !== void 0 && (k.minutes = Number(k.minutes)), k.expectedVersion && (k.expectedVersion = Number(k.expectedVersion)), x === "course_plan" && (k.moves = ve.map((G) => ({ ...G, duration: G.duration ? Number(G.duration) : void 0 }))), p(k);
  }
  function $(Y, ie, k) {
    ge((G) => G.map((P, ae) => ae === Y ? { ...P, [ie]: k } : P));
  }
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ i.jsx(uy, { initialDraft: o, preview: E, busy: S, onPreview: q, onCommit: N, onCommitBatch: b, onClear: D, onClose: A }),
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
            /* @__PURE__ */ i.jsx(se, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ i.jsx(se, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          x === "course_cancel" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
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
            /* @__PURE__ */ i.jsx(se, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: Ce, onChange: (Y) => ce(Y.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ i.jsx(se, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
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
            /* @__PURE__ */ i.jsx(se, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: Ce, onChange: (Y) => ce(Y.target.value) })
            ] }),
            /* @__PURE__ */ i.jsx(se, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(se, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          x === "reservation_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(se, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(x) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          x === "zone_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          x === "availability_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((Y) => /* @__PURE__ */ i.jsx("option", { value: Y, children: Y }, Y))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(se, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          x === "availability_clear" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((Y) => /* @__PURE__ */ i.jsx("option", { value: Y, children: Y }, Y))
              ] })
            ] })
          ] }),
          x === "commute_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ i.jsx(se, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          x === "quarantine_overdue" && /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          x === "course_review_resolve" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ i.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ i.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ i.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          x === "course_day_complete" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          x === "course_plan" && /* @__PURE__ */ i.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ i.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", onClick: () => ge((Y) => [...Y, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            ve.map((Y, ie) => /* @__PURE__ */ i.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ i.jsx("span", { className: "plan-index", children: ie + 1 }),
              /* @__PURE__ */ i.jsxs("select", { value: Y.student || "", onChange: (k) => {
                const G = f.find((P) => P.name === k.target.value);
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
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "plan-remove", disabled: ve.length <= 2, onClick: () => ge((k) => k.filter((G, P) => P !== ie)), children: "×" })
            ] }, ie))
          ] }),
          x === "affair_create" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(se, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "类型" }),
              /* @__PURE__ */ i.jsxs("select", { name: "affairKind", value: Q, onChange: (Y) => I(Y.target.value), children: [
                /* @__PURE__ */ i.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ i.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ i.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ i.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            Q === "timed" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(se, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(se, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ i.jsx(se, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            Q === "deadline" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(se, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(se, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            Q === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(se, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(se, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            Q === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(se, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ i.jsx(se, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ i.jsx(se, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ i.jsx(se, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
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
            /* @__PURE__ */ i.jsx(se, { name: "title", label: "新标题（可选）", defaultValue: d?.title }),
            /* @__PURE__ */ i.jsx(se, { name: "startDate", label: "新开始日期（可选）", type: "date" }),
            /* @__PURE__ */ i.jsx(se, { name: "startTime", label: "新开始时间（可选）", type: "time" }),
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
            /* @__PURE__ */ i.jsx(se, { name: "note", label: "新备注（可选）" }),
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
            /* @__PURE__ */ i.jsx(se, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
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
            x === "affair_retry_next" && /* @__PURE__ */ i.jsx(se, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          x === "calendar_sync" && /* @__PURE__ */ i.jsx(se, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ i.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: "primary-button full", type: "submit", disabled: S, children: S ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: x })),
        /* @__PURE__ */ i.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ i.jsx(ta, { title: "执行预览", meta: E?.token ? `令牌 ${E.token.slice(0, 8)}…` : "等待操作" }),
          !E && /* @__PURE__ */ i.jsx(al, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
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
const zh = {
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
}, ny = {
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
function iy({ preview: c, busy: f, onCommit: d, onCommitBatch: o, onClose: E }) {
  const S = c.operation || "", p = c.input || {}, q = Object.entries(p).filter(([D, A]) => A != null && A !== "" && !D.startsWith("_")), N = c.result?.affected_dates, b = c.batchItems ?? [];
  return b.length ? /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.committed ? c.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.committed ? c.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${b.length} 项` }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.message })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "batch-list", children: b.map((D, A) => {
      const x = c.committed ? { text: D.resultOk ? "已执行" : "失败", cls: D.resultOk ? "ok" : "error" } : { text: D.canCommit ? "可执行" : "未通过", cls: D.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ i.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ i.jsx("span", { className: "batch-index", children: A + 1 }),
        /* @__PURE__ */ i.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: zh[D.operation] || D.operation }),
          /* @__PURE__ */ i.jsx("span", { children: D.summary }),
          D.message && /* @__PURE__ */ i.jsx("small", { children: D.message })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: `batch-flag ${x.cls}`, children: x.text })
      ] }, D.token);
    }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-outcome-actions", children: [
      !c.committed && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", disabled: f || !b.some((D) => D.canCommit), onClick: () => {
        o?.() ?? Promise.resolve();
      }, children: f ? "正在提交…" : `全部执行（${b.filter((D) => D.canCommit).length} 项）` }),
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
      S && /* @__PURE__ */ i.jsx("span", { className: "preview-op-badge", children: zh[S] || S }),
      q.length > 0 && /* @__PURE__ */ i.jsx("dl", { className: "preview-fields", children: q.map(([D, A]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: ny[D] || D }),
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
function uy({ initialDraft: c, preview: f, busy: d, onPreview: o, onCommit: E, onCommitBatch: S, onClear: p, onClose: q }) {
  const N = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, b = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [D, A] = w.useState([N]), [x, L] = w.useState(""), [Q, I] = w.useState(!1), [te, pe] = w.useState(""), [Ce, ce] = w.useState([]), [ve, ge] = w.useState(!1), de = w.useRef(null), $ = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function Y() {
    const P = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!P) return;
    if (ve) {
      de.current?.stop();
      return;
    }
    const ae = new P();
    ae.lang = "zh-CN", ae.interimResults = !1, ae.continuous = !1, ae.onresult = (Ee) => {
      const we = Array.from(Ee.results).map((y) => y[0].transcript).join("").trim();
      we && L((y) => (y ? `${y} ` : "") + we);
    }, ae.onend = () => ge(!1), ae.onerror = () => ge(!1), de.current = ae, ge(!0), ae.start();
  }
  const ie = w.useRef(nr());
  w.useEffect(() => () => ie.current.invalidate(), []), w.useEffect(() => {
    c.nonce && (ie.current.invalidate(), I(!1), L(c.text));
  }, [c.nonce, c.text]);
  function k() {
    ie.current.invalidate(), I(!1), A([N]), L(""), pe(""), ce([]), p();
  }
  async function G(P) {
    const ae = (P ?? x).trim();
    if (!ae || Q) return;
    const Ee = ie.current.begin(), we = D.slice(-10);
    A((y) => [...y, { role: "user", text: ae }]), L(""), ce([]), I(!0), pe(""), p();
    try {
      const y = await nt("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: ae, history: we })
      });
      if (!ie.current.isCurrent(Ee)) return;
      if (!y.ok) throw new Error(y.error || "AI 没有生成方案");
      ce(y.status === "need_clarification" ? y.options ?? [] : []), A((B) => [...B, { role: "assistant", text: y.reply || "方案已经生成，请检查右侧预演。" }]), y.status === "ready" && y.batch && y.previews?.length ? o({
        ok: !0,
        batch: !0,
        summary: y.reply,
        message: y.reply,
        batchItems: y.previews.map((B) => ({ operation: B.operation, token: B.token, summary: B.summary, canCommit: B.canCommit, message: B.message }))
      }) : y.status === "ready" && y.preview && o({
        ok: !0,
        token: y.preview.token,
        expiresAt: y.preview.expiresAt,
        summary: y.preview.summary,
        canCommit: y.preview.canCommit,
        message: y.preview.message,
        result: y.preview.result,
        operation: y.operation,
        input: y.input
      });
    } catch (y) {
      if (!ie.current.isCurrent(Ee)) return;
      const B = y.message || "AI 操作失败";
      pe(B), A((K) => [...K, { role: "assistant", text: `这次没有生成预演：${B}` }]);
    } finally {
      ie.current.isCurrent(Ee) && I(!1);
    }
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ i.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ i.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: "row-action-button", type: "button", onClick: k, disabled: Q, children: "清空对话" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: b.map((P) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => L(P), children: P }, P)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          D.map((P, ae) => /* @__PURE__ */ i.jsx("div", { className: `ai-bubble ${P.role}`, children: P.text }, ae)),
          Q && /* @__PURE__ */ i.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        te && /* @__PURE__ */ i.jsx(_l, { tone: "error", title: "没有生成方案", text: te }),
        Ce.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: Ce.map((P) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
          G(P);
        }, children: P }, P)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              value: x,
              onChange: (P) => L(P.target.value),
              onKeyDown: (P) => {
                P.key === "Enter" && !P.shiftKey && (P.preventDefault(), G());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          $ && /* @__PURE__ */ i.jsx("button", { type: "button", className: ve ? "ai-mic listening" : "ai-mic", onClick: Y, "aria-label": ve ? "停止语音输入" : "语音输入", title: "语音输入", children: ve ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            G();
          }, disabled: !x.trim() || Q, children: Q ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ i.jsx(ta, { title: "AI 预演", meta: f?.token ? `令牌 ${f.token.slice(0, 8)}…` : "等待指令" }),
        !f && /* @__PURE__ */ i.jsx(al, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        f && /* @__PURE__ */ i.jsx(iy, { preview: f, busy: d, onCommit: E, onCommitBatch: S, onClose: q })
      ] })
    ] })
  ] });
}
function cy({ view: c, dashboard: f }) {
  if (c.kind === "system") return /* @__PURE__ */ i.jsx(fy, { dashboard: f, embedded: !0, readOnly: !0 });
  const d = c.kind === "day" ? c.items ? [...c.items].sort((o, E) => String(gt(o) || "").localeCompare(String(gt(E) || ""))) : f.items.filter((o) => yi(o) === c.date).sort((o, E) => String(gt(o) || "").localeCompare(String(gt(E) || ""))) : [c.item];
  return d.length ? /* @__PURE__ */ i.jsx("div", { className: "context-item-list", children: d.map((o) => /* @__PURE__ */ i.jsx(sy, { item: o }, o.id)) }) : /* @__PURE__ */ i.jsx(al, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function sy({ item: c }) {
  const f = gt(c);
  return /* @__PURE__ */ i.jsxs("section", { className: `context-item-card ${dr(c)}${hr(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ i.jsx("time", { children: f ? `${Bt(f, { month: "long", day: "numeric", weekday: "short" })} ${Ca(f)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ i.jsx(Qh, { value: c.status })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: c.title }),
    /* @__PURE__ */ i.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" })
  ] });
}
function ry() {
  const [c, f] = w.useState({ loading: !0 }), d = w.useCallback(() => {
    f({ loading: !0 }), nt("/api/versions").then((E) => f({ loading: !1, data: E })).catch((E) => f({ loading: !1, error: E.message }));
  }, []);
  w.useEffect(() => {
    d();
  }, [d]);
  const o = c.data?.versions;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(ta, { title: "版本与运行态" }),
    c.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : c.error ? /* @__PURE__ */ i.jsx(ea, { label: "版本读取", ok: !1, detail: c.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
      /* @__PURE__ */ i.jsx(ea, { label: "运行态", ok: !c.data?.devShadowing, detail: c.data?.note || "" })
    ] })
  ] });
}
function oy({ onSync: c, readOnly: f = !1 }) {
  const [d, o] = w.useState({ loading: !0 }), E = w.useCallback(() => {
    o({ loading: !0 }), nt("/api/calendar-health").then((N) => o({ loading: !1, data: N })).catch((N) => o({ loading: !1, error: N.message }));
  }, []);
  w.useEffect(() => {
    E();
  }, [E]);
  const S = d.data?.diff, p = S?.toDelete ?? [], q = d.data?.inSync === !0;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(ta, { title: "飞书日历对账" }),
    d.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : d.error ? /* @__PURE__ */ i.jsx(ea, { label: "日历盘点", ok: !1, detail: d.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(ea, { label: "对账结果", ok: q, detail: q ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
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
        /* @__PURE__ */ i.jsxs("span", { className: p.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          p.length
        ] })
      ] }),
      p.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-list", children: [
        p.slice(0, 8).map((N, b) => /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ i.jsx("span", { children: N.summary }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: String(N.start || "").slice(0, 16) })
        ] }, b)),
        p.length > 8 && /* @__PURE__ */ i.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          p.length - 8,
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
function fy({ dashboard: c, onSync: f, embedded: d = !1, readOnly: o = !1 }) {
  const E = c.health?.database?.verification;
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack system-embedded" : "view-stack", children: [
    !d && /* @__PURE__ */ i.jsx(bi, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ i.jsx(pn, { label: "数据库完整性", value: E?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${E?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ i.jsx(pn, { label: "活动事务", value: E?.counts?.active ?? "—", hint: `总数 ${E?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ i.jsx(pn, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ i.jsx(pn, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ i.jsx(ta, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ i.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((S) => /* @__PURE__ */ i.jsx(ea, { label: S.label, ok: S.ok, detail: S.detail }, S.label)) }),
        /* @__PURE__ */ i.jsx(ta, { title: "契约检查" }),
        /* @__PURE__ */ i.jsx(ea, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ i.jsx(ea, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ i.jsx(ea, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ i.jsx(ea, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
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
    /* @__PURE__ */ i.jsx(oy, { onSync: f, readOnly: o }),
    /* @__PURE__ */ i.jsx(ry, {})
  ] });
}
function Gh({ preview: c, onClose: f }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ i.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "完成并返回" }) });
}
function Mu({ label: c, items: f, value: d, onChange: o, busy: E }) {
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
function pn({ label: c, value: f, hint: d, tone: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `metric-card ${o}`, children: [
    /* @__PURE__ */ i.jsx("span", { children: c }),
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("small", { children: d })
  ] });
}
function Qh({ value: c }) {
  return /* @__PURE__ */ i.jsx("span", { className: `status ${ir(c)}`, "data-ui": "status-badge", "data-ui-state": ir(c), children: Yg[c] || c });
}
function ta({ title: c, meta: f, action: d, onAction: o, actionDisabled: E }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "panel-heading", "data-ui": "section-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h3", { children: c }),
      f && /* @__PURE__ */ i.jsx("span", { children: f })
    ] }),
    d && /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", onClick: o, disabled: E, children: d })
  ] });
}
function bi({ eyebrow: c, title: f, description: d }) {
  return /* @__PURE__ */ i.jsxs("header", { className: "page-title", "data-ui": "page-title", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ i.jsx("h2", { children: f }),
    /* @__PURE__ */ i.jsx("p", { children: d })
  ] });
}
function se({ name: c, label: f, type: d = "text", placeholder: o, defaultValue: E, required: S = !1 }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ i.jsx("span", { children: f }),
    /* @__PURE__ */ i.jsx("input", { name: c, type: d, placeholder: o, defaultValue: E, required: S })
  ] });
}
function ea({ label: c, ok: f, detail: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ i.jsx("span", { className: f ? "check ok" : "check no", children: f ? "✓" : "!" }),
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: c }),
      /* @__PURE__ */ i.jsx("small", { children: d })
    ] })
  ] });
}
function al({ title: c, text: f, compact: d = !1 }) {
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "empty compact" : "empty", "data-ui": "empty-state", children: [
    /* @__PURE__ */ i.jsx("strong", { children: c }),
    /* @__PURE__ */ i.jsx("span", { children: f })
  ] });
}
function _l({ tone: c, title: f, text: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `notice ${c}`, "data-ui": "notice", "data-ui-state": c, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("span", { children: d })
  ] });
}
function mr() {
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
cr.ready();
cr.ui.resize({ height: window.innerHeight || 900 });
const Ch = document.getElementById("root");
Ch && dg.createRoot(Ch).render(/* @__PURE__ */ i.jsx(Xg, { children: /* @__PURE__ */ i.jsx(Zg, {}) }));
