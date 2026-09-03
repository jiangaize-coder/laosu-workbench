var Js = { exports: {} }, hi = {};
var rh;
function ey() {
  if (rh) return hi;
  rh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(o, E, j) {
    var p = null;
    if (j !== void 0 && (p = "" + j), E.key !== void 0 && (p = "" + E.key), "key" in E) {
      j = {};
      for (var R in E)
        R !== "key" && (j[R] = E[R]);
    } else j = E;
    return E = j.ref, {
      $$typeof: c,
      type: o,
      key: p,
      ref: E !== void 0 ? E : null,
      props: j
    };
  }
  return hi.Fragment = f, hi.jsx = d, hi.jsxs = d, hi;
}
var oh;
function ty() {
  return oh || (oh = 1, Js.exports = ey()), Js.exports;
}
var i = ty(), $s = { exports: {} }, xe = {};
var fh;
function ay() {
  if (fh) return xe;
  fh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
  function Y(h) {
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
  }, ve = Object.assign, V = {};
  function ce(h, D, X) {
    this.props = h, this.context = D, this.refs = V, this.updater = X || Q;
  }
  ce.prototype.isReactComponent = {}, ce.prototype.setState = function(h, D) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, D, "setState");
  }, ce.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function le() {
  }
  le.prototype = ce.prototype;
  function ne(h, D, X) {
    this.props = h, this.context = D, this.refs = V, this.updater = X || Q;
  }
  var $ = ne.prototype = new le();
  $.constructor = ne, ve($, ce.prototype), $.isPureReactComponent = !0;
  var Ne = Array.isArray;
  function pe() {
  }
  var Z = { H: null, A: null, T: null, S: null }, k = Object.prototype.hasOwnProperty;
  function F(h, D, X) {
    var K = X.ref;
    return {
      $$typeof: c,
      type: h,
      key: D,
      ref: K !== void 0 ? K : null,
      props: X
    };
  }
  function re(h, D) {
    return F(h.type, D, h.props);
  }
  function J(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function ae(h) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(X) {
      return D[X];
    });
  }
  var be = /\/+/g;
  function De(h, D) {
    return typeof h == "object" && h !== null && h.key != null ? ae("" + h.key) : D.toString(36);
  }
  function Oe(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(pe, pe) : (h.status = "pending", h.then(
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
  function g(h, D, X, K, oe) {
    var je = typeof h;
    (je === "undefined" || je === "boolean") && (h = null);
    var Me = !1;
    if (h === null) Me = !0;
    else
      switch (je) {
        case "bigint":
        case "string":
        case "number":
          Me = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case c:
            case f:
              Me = !0;
              break;
            case U:
              return Me = h._init, g(
                Me(h._payload),
                D,
                X,
                K,
                oe
              );
          }
      }
    if (Me)
      return oe = oe(h), Me = K === "" ? "." + De(h, 0) : K, Ne(oe) ? (X = "", Me != null && (X = Me.replace(be, "$&/") + "/"), g(oe, D, X, "", function(He) {
        return He;
      })) : oe != null && (J(oe) && (oe = re(
        oe,
        X + (oe.key == null || h && h.key === oe.key ? "" : ("" + oe.key).replace(
          be,
          "$&/"
        ) + "/") + Me
      )), D.push(oe)), 1;
    Me = 0;
    var nt = K === "" ? "." : K + ":";
    if (Ne(h))
      for (var G = 0; G < h.length; G++)
        K = h[G], je = nt + De(K, G), Me += g(
          K,
          D,
          X,
          je,
          oe
        );
    else if (G = Y(h), typeof G == "function")
      for (h = G.call(h), G = 0; !(K = h.next()).done; )
        K = K.value, je = nt + De(K, G++), Me += g(
          K,
          D,
          X,
          je,
          oe
        );
    else if (je === "object") {
      if (typeof h.then == "function")
        return g(
          Oe(h),
          D,
          X,
          K,
          oe
        );
      throw D = String(h), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Me;
  }
  function B(h, D, X) {
    if (h == null) return h;
    var K = [], oe = 0;
    return g(h, K, "", "", function(je) {
      return D.call(X, je, oe++);
    }), K;
  }
  function I(h) {
    if (h._status === -1) {
      var D = h._result;
      D = D(), D.then(
        function(X) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = X);
        },
        function(X) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = X);
        }
      ), h._status === -1 && (h._status = 0, h._result = D);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var y = typeof reportError == "function" ? reportError : function(h) {
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
    forEach: function(h, D, X) {
      B(
        h,
        function() {
          D.apply(this, arguments);
        },
        X
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
      if (!J(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return xe.Activity = A, xe.Children = P, xe.Component = ce, xe.Fragment = d, xe.Profiler = E, xe.PureComponent = ne, xe.StrictMode = o, xe.Suspense = N, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return Z.H.useMemoCache(h);
    }
  }, xe.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, xe.cacheSignal = function() {
    return null;
  }, xe.cloneElement = function(h, D, X) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var K = ve({}, h.props), oe = h.key;
    if (D != null)
      for (je in D.key !== void 0 && (oe = "" + D.key), D)
        !k.call(D, je) || je === "key" || je === "__self" || je === "__source" || je === "ref" && D.ref === void 0 || (K[je] = D[je]);
    var je = arguments.length - 2;
    if (je === 1) K.children = X;
    else if (1 < je) {
      for (var Me = Array(je), nt = 0; nt < je; nt++)
        Me[nt] = arguments[nt + 2];
      K.children = Me;
    }
    return F(h.type, oe, K);
  }, xe.createContext = function(h) {
    return h = {
      $$typeof: p,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: j,
      _context: h
    }, h;
  }, xe.createElement = function(h, D, X) {
    var K, oe = {}, je = null;
    if (D != null)
      for (K in D.key !== void 0 && (je = "" + D.key), D)
        k.call(D, K) && K !== "key" && K !== "__self" && K !== "__source" && (oe[K] = D[K]);
    var Me = arguments.length - 2;
    if (Me === 1) oe.children = X;
    else if (1 < Me) {
      for (var nt = Array(Me), G = 0; G < Me; G++)
        nt[G] = arguments[G + 2];
      oe.children = nt;
    }
    if (h && h.defaultProps)
      for (K in Me = h.defaultProps, Me)
        oe[K] === void 0 && (oe[K] = Me[K]);
    return F(h, je, oe);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(h) {
    return { $$typeof: R, render: h };
  }, xe.isValidElement = J, xe.lazy = function(h) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: h },
      _init: I
    };
  }, xe.memo = function(h, D) {
    return {
      $$typeof: b,
      type: h,
      compare: D === void 0 ? null : D
    };
  }, xe.startTransition = function(h) {
    var D = Z.T, X = {};
    Z.T = X;
    try {
      var K = h(), oe = Z.S;
      oe !== null && oe(X, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(pe, y);
    } catch (je) {
      y(je);
    } finally {
      D !== null && X.types !== null && (D.types = X.types), Z.T = D;
    }
  }, xe.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, xe.use = function(h) {
    return Z.H.use(h);
  }, xe.useActionState = function(h, D, X) {
    return Z.H.useActionState(h, D, X);
  }, xe.useCallback = function(h, D) {
    return Z.H.useCallback(h, D);
  }, xe.useContext = function(h) {
    return Z.H.useContext(h);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(h, D) {
    return Z.H.useDeferredValue(h, D);
  }, xe.useEffect = function(h, D) {
    return Z.H.useEffect(h, D);
  }, xe.useEffectEvent = function(h) {
    return Z.H.useEffectEvent(h);
  }, xe.useId = function() {
    return Z.H.useId();
  }, xe.useImperativeHandle = function(h, D, X) {
    return Z.H.useImperativeHandle(h, D, X);
  }, xe.useInsertionEffect = function(h, D) {
    return Z.H.useInsertionEffect(h, D);
  }, xe.useLayoutEffect = function(h, D) {
    return Z.H.useLayoutEffect(h, D);
  }, xe.useMemo = function(h, D) {
    return Z.H.useMemo(h, D);
  }, xe.useOptimistic = function(h, D) {
    return Z.H.useOptimistic(h, D);
  }, xe.useReducer = function(h, D, X) {
    return Z.H.useReducer(h, D, X);
  }, xe.useRef = function(h) {
    return Z.H.useRef(h);
  }, xe.useState = function(h) {
    return Z.H.useState(h);
  }, xe.useSyncExternalStore = function(h, D, X) {
    return Z.H.useSyncExternalStore(
      h,
      D,
      X
    );
  }, xe.useTransition = function() {
    return Z.H.useTransition();
  }, xe.version = "19.2.8", xe;
}
var dh;
function rr() {
  return dh || (dh = 1, $s.exports = ay()), $s.exports;
}
var w = rr(), Fs = { exports: {} }, mi = {}, Ws = { exports: {} }, Is = {};
var hh;
function ly() {
  return hh || (hh = 1, (function(c) {
    function f(g, B) {
      var I = g.length;
      g.push(B);
      e: for (; 0 < I; ) {
        var y = I - 1 >>> 1, P = g[y];
        if (0 < E(P, B))
          g[y] = B, g[I] = P, I = y;
        else break e;
      }
    }
    function d(g) {
      return g.length === 0 ? null : g[0];
    }
    function o(g) {
      if (g.length === 0) return null;
      var B = g[0], I = g.pop();
      if (I !== B) {
        g[0] = I;
        e: for (var y = 0, P = g.length, h = P >>> 1; y < h; ) {
          var D = 2 * (y + 1) - 1, X = g[D], K = D + 1, oe = g[K];
          if (0 > E(X, I))
            K < P && 0 > E(oe, X) ? (g[y] = oe, g[K] = I, y = K) : (g[y] = X, g[D] = I, y = D);
          else if (K < P && 0 > E(oe, I))
            g[y] = oe, g[K] = I, y = K;
          else break e;
        }
      }
      return B;
    }
    function E(g, B) {
      var I = g.sortIndex - B.sortIndex;
      return I !== 0 ? I : g.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var j = performance;
      c.unstable_now = function() {
        return j.now();
      };
    } else {
      var p = Date, R = p.now();
      c.unstable_now = function() {
        return p.now() - R;
      };
    }
    var N = [], b = [], U = 1, A = null, S = 3, Y = !1, Q = !1, ve = !1, V = !1, ce = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
    function $(g) {
      for (var B = d(b); B !== null; ) {
        if (B.callback === null) o(b);
        else if (B.startTime <= g)
          o(b), B.sortIndex = B.expirationTime, f(N, B);
        else break;
        B = d(b);
      }
    }
    function Ne(g) {
      if (ve = !1, $(g), !Q)
        if (d(N) !== null)
          Q = !0, pe || (pe = !0, ae());
        else {
          var B = d(b);
          B !== null && Oe(Ne, B.startTime - g);
        }
    }
    var pe = !1, Z = -1, k = 5, F = -1;
    function re() {
      return V ? !0 : !(c.unstable_now() - F < k);
    }
    function J() {
      if (V = !1, pe) {
        var g = c.unstable_now();
        F = g;
        var B = !0;
        try {
          e: {
            Q = !1, ve && (ve = !1, le(Z), Z = -1), Y = !0;
            var I = S;
            try {
              t: {
                for ($(g), A = d(N); A !== null && !(A.expirationTime > g && re()); ) {
                  var y = A.callback;
                  if (typeof y == "function") {
                    A.callback = null, S = A.priorityLevel;
                    var P = y(
                      A.expirationTime <= g
                    );
                    if (g = c.unstable_now(), typeof P == "function") {
                      A.callback = P, $(g), B = !0;
                      break t;
                    }
                    A === d(N) && o(N), $(g);
                  } else o(N);
                  A = d(N);
                }
                if (A !== null) B = !0;
                else {
                  var h = d(b);
                  h !== null && Oe(
                    Ne,
                    h.startTime - g
                  ), B = !1;
                }
              }
              break e;
            } finally {
              A = null, S = I, Y = !1;
            }
            B = void 0;
          }
        } finally {
          B ? ae() : pe = !1;
        }
      }
    }
    var ae;
    if (typeof ne == "function")
      ae = function() {
        ne(J);
      };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), De = be.port2;
      be.port1.onmessage = J, ae = function() {
        De.postMessage(null);
      };
    } else
      ae = function() {
        ce(J, 0);
      };
    function Oe(g, B) {
      Z = ce(function() {
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
      var I = S;
      S = B;
      try {
        return g();
      } finally {
        S = I;
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
      var I = S;
      S = g;
      try {
        return B();
      } finally {
        S = I;
      }
    }, c.unstable_scheduleCallback = function(g, B, I) {
      var y = c.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? y + I : y) : I = y, g) {
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
      return P = I + P, g = {
        id: U++,
        callback: B,
        priorityLevel: g,
        startTime: I,
        expirationTime: P,
        sortIndex: -1
      }, I > y ? (g.sortIndex = I, f(b, g), d(N) === null && g === d(b) && (ve ? (le(Z), Z = -1) : ve = !0, Oe(Ne, I - y))) : (g.sortIndex = P, f(N, g), Q || Y || (Q = !0, pe || (pe = !0, ae()))), g;
    }, c.unstable_shouldYield = re, c.unstable_wrapCallback = function(g) {
      var B = S;
      return function() {
        var I = S;
        S = B;
        try {
          return g.apply(this, arguments);
        } finally {
          S = I;
        }
      };
    };
  })(Is)), Is;
}
var mh;
function ny() {
  return mh || (mh = 1, Ws.exports = ly()), Ws.exports;
}
var Ps = { exports: {} }, yt = {};
var vh;
function iy() {
  if (vh) return yt;
  vh = 1;
  var c = rr();
  function f(N) {
    var b = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        b += "&args[]=" + encodeURIComponent(arguments[U]);
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
  function j(N, b, U) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: A == null ? null : "" + A,
      children: N,
      containerInfo: b,
      implementation: U
    };
  }
  var p = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(N, b) {
    if (N === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, yt.createPortal = function(N, b) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(f(299));
    return j(N, b, null, U);
  }, yt.flushSync = function(N) {
    var b = p.T, U = o.p;
    try {
      if (p.T = null, o.p = 2, N) return N();
    } finally {
      p.T = b, o.p = U, o.d.f();
    }
  }, yt.preconnect = function(N, b) {
    typeof N == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, o.d.C(N, b));
  }, yt.prefetchDNS = function(N) {
    typeof N == "string" && o.d.D(N);
  }, yt.preinit = function(N, b) {
    if (typeof N == "string" && b && typeof b.as == "string") {
      var U = b.as, A = R(U, b.crossOrigin), S = typeof b.integrity == "string" ? b.integrity : void 0, Y = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      U === "style" ? o.d.S(
        N,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: A,
          integrity: S,
          fetchPriority: Y
        }
      ) : U === "script" && o.d.X(N, {
        crossOrigin: A,
        integrity: S,
        fetchPriority: Y,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, yt.preinitModule = function(N, b) {
    if (typeof N == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var U = R(
            b.as,
            b.crossOrigin
          );
          o.d.M(N, {
            crossOrigin: U,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && o.d.M(N);
  }, yt.preload = function(N, b) {
    if (typeof N == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var U = b.as, A = R(U, b.crossOrigin);
      o.d.L(N, U, {
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
  }, yt.preloadModule = function(N, b) {
    if (typeof N == "string")
      if (b) {
        var U = R(b.as, b.crossOrigin);
        o.d.m(N, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: U,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else o.d.m(N);
  }, yt.requestFormReset = function(N) {
    o.d.r(N);
  }, yt.unstable_batchedUpdates = function(N, b) {
    return N(b);
  }, yt.useFormState = function(N, b, U) {
    return p.H.useFormState(N, b, U);
  }, yt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, yt.version = "19.2.8", yt;
}
var yh;
function uy() {
  if (yh) return Ps.exports;
  yh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), Ps.exports = iy(), Ps.exports;
}
var gh;
function cy() {
  if (gh) return mi;
  gh = 1;
  var c = ny(), f = rr(), d = uy();
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
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function R(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(e) {
    if (j(e) !== e)
      throw Error(o(188));
  }
  function b(e) {
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
  function U(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = U(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), Q = /* @__PURE__ */ Symbol.for("react.portal"), ve = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), ce = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.consumer"), ne = /* @__PURE__ */ Symbol.for("react.context"), $ = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ne = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), J = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = J && e[J] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var be = /* @__PURE__ */ Symbol.for("react.client.reference");
  function De(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === be ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ve:
        return "Fragment";
      case ce:
        return "Profiler";
      case V:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case pe:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Q:
          return "Portal";
        case ne:
          return e.displayName || "Context";
        case le:
          return (e._context.displayName || "Context") + ".Consumer";
        case $:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : De(e.type) || "Memo";
        case k:
          t = e._payload, e = e._init;
          try {
            return De(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, g = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, y = [], P = -1;
  function h(e) {
    return { current: e };
  }
  function D(e) {
    0 > P || (e.current = y[P], y[P] = null, P--);
  }
  function X(e, t) {
    P++, y[P] = e.current, e.current = t;
  }
  var K = h(null), oe = h(null), je = h(null), Me = h(null);
  function nt(e, t) {
    switch (X(je, t), X(oe, e), X(K, null), t.nodeType) {
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
    D(K), X(K, e);
  }
  function G() {
    D(K), D(oe), D(je);
  }
  function He(e) {
    e.memoizedState !== null && X(Me, e);
    var t = K.current, a = Od(t, e.type);
    t !== a && (X(oe, e), X(K, a));
  }
  function ge(e) {
    oe.current === e && (D(K), D(oe)), Me.current === e && (D(Me), ri._currentValue = I);
  }
  var W, ta;
  function $e(e) {
    if (W === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        W = t && t[1] || "", ta = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + W + e + ta;
  }
  var aa = !1;
  function Qt(e, t) {
    if (!e || aa) return "";
    aa = !0;
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
      aa = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? $e(a) : "";
  }
  function la(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $e(e.type);
      case 16:
        return $e("Lazy");
      case 13:
        return e.child !== t && t !== null ? $e("Suspense Fallback") : $e("Suspense");
      case 19:
        return $e("SuspenseList");
      case 0:
      case 15:
        return Qt(e.type, !1);
      case 11:
        return Qt(e.type.render, !1);
      case 1:
        return Qt(e.type, !0);
      case 31:
        return $e("Activity");
      default:
        return "";
    }
  }
  function na(e) {
    try {
      var t = "", a = null;
      do
        t += la(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var mt = Object.prototype.hasOwnProperty, Ot = c.unstable_scheduleCallback, st = c.unstable_cancelCallback, fa = c.unstable_shouldYield, ul = c.unstable_requestPaint, _e = c.unstable_now, Ut = c.unstable_getCurrentPriorityLevel, bn = c.unstable_ImmediatePriority, xn = c.unstable_UserBlockingPriority, cl = c.unstable_NormalPriority, Zt = c.unstable_LowPriority, sl = c.unstable_IdlePriority, qu = c.log, Hu = c.unstable_setDisableYieldValue, da = null, rt = null;
  function Kt(e) {
    if (typeof qu == "function" && Hu(e), rt && typeof rt.setStrictMode == "function")
      try {
        rt.setStrictMode(da, e);
      } catch {
      }
  }
  var vt = Math.clz32 ? Math.clz32 : Sn, Bu = Math.log, jn = Math.LN2;
  function Sn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Bu(e) / jn | 0) | 0;
  }
  var ha = 256, Ml = 262144, Ol = 4194304;
  function ia(e) {
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
  function rl(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~u, l !== 0 ? n = ia(l) : (s &= r, s !== 0 ? n = ia(s) : a || (a = r & ~e, a !== 0 && (n = ia(a))))) : (r = l & ~u, r !== 0 ? n = ia(r) : s !== 0 ? n = ia(s) : a || (a = l & ~e, a !== 0 && (n = ia(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function ua(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function En(e, t) {
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
  function pi() {
    var e = Ol;
    return Ol <<= 1, (Ol & 62914560) === 0 && (Ol = 4194304), e;
  }
  function ol(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function fl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function ku(e, t, a, l, n, u) {
    var s = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, m = e.expirationTimes, T = e.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var O = 31 - vt(a), H = 1 << O;
      r[O] = 0, m[O] = -1;
      var z = T[O];
      if (z !== null)
        for (T[O] = null, O = 0; O < z.length; O++) {
          var C = z[O];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~H;
    }
    l !== 0 && bi(e, l, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function bi(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - vt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function xi(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - vt(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function ji(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : M(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function M(e) {
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
  function L(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ie() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ah(e.type));
  }
  function se(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var fe = Math.random().toString(36).slice(2), me = "__reactFiber$" + fe, ee = "__reactProps$" + fe, it = "__reactContainer$" + fe, Jt = "__reactEvents$" + fe, ma = "__reactListeners$" + fe, Xh = "__reactHandles$" + fe, gr = "__reactResources$" + fe, Nn = "__reactMarker$" + fe;
  function Lu(e) {
    delete e[me], delete e[ee], delete e[Jt], delete e[ma], delete e[Xh];
  }
  function Ul(e) {
    var t = e[me];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[it] || a[me]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Ld(e); e !== null; ) {
            if (a = e[me]) return a;
            e = Ld(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Rl(e) {
    if (e = e[me] || e[it]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function _n(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ql(e) {
    var t = e[gr];
    return t || (t = e[gr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Nn] = !0;
  }
  var pr = /* @__PURE__ */ new Set(), br = {};
  function dl(e, t) {
    Hl(e, t), Hl(e + "Capture", t);
  }
  function Hl(e, t) {
    for (br[e] = t, e = 0; e < t.length; e++)
      pr.add(t[e]);
  }
  var Qh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xr = {}, jr = {};
  function Zh(e) {
    return mt.call(jr, e) ? !0 : mt.call(xr, e) ? !1 : Qh.test(e) ? jr[e] = !0 : (xr[e] = !0, !1);
  }
  function Si(e, t, a) {
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
  function Ei(e, t, a) {
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
  function va(e, t, a, l) {
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
  function Rt(e) {
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
  function Yu(e) {
    if (!e._valueTracker) {
      var t = Sr(e) ? "checked" : "value";
      e._valueTracker = Kh(
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
  function Ni(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(
      Jh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vu(e, t, a, l, n, u, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Rt(t)) : e.value !== "" + Rt(t) && (e.value = "" + Rt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Gu(e, s, Rt(t)) : a != null ? Gu(e, s, Rt(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Rt(r) : e.removeAttribute("name");
  }
  function Nr(e, t, a, l, n, u, s, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Yu(e);
        return;
      }
      a = a != null ? "" + Rt(a) : "", t = t != null ? "" + Rt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Yu(e);
  }
  function Gu(e, t, a) {
    t === "number" && Ni(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Bl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Rt(a), t = null, n = 0; n < e.length; n++) {
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
    if (t != null && (t = "" + Rt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Rt(a) : "";
  }
  function Tr(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (Oe(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Rt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Yu(e);
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
  var $h = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ar(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || $h.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
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
  function Xu(e) {
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
  function _i(e) {
    return Wh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ya() {
  }
  var Qu = null;
  function Zu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ll = null, Yl = null;
  function Cr(e) {
    var t = Rl(e);
    if (t && (e = t.stateNode)) {
      var a = e[ee] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Vu(
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
              'input[name="' + qt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[ee] || null;
                if (!n) throw Error(o(90));
                Vu(
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
  var Ku = !1;
  function wr(e, t, a) {
    if (Ku) return e(t, a);
    Ku = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Ku = !1, (Ll !== null || Yl !== null) && (du(), Ll && (t = Ll, e = Yl, Yl = Ll = null, Cr(t), e)))
        for (t = 0; t < e.length; t++) Cr(e[t]);
    }
  }
  function Tn(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[ee] || null;
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
  var ga = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ju = !1;
  if (ga)
    try {
      var An = {};
      Object.defineProperty(An, "passive", {
        get: function() {
          Ju = !0;
        }
      }), window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
    } catch {
      Ju = !1;
    }
  var Ua = null, $u = null, Ti = null;
  function Dr() {
    if (Ti) return Ti;
    var e, t = $u, a = t.length, l, n = "value" in Ua ? Ua.value : Ua.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var s = a - e;
    for (l = 1; l <= s && t[a - l] === n[u - l]; l++) ;
    return Ti = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ai(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zi() {
    return !0;
  }
  function Mr() {
    return !1;
  }
  function bt(e) {
    function t(a, l, n, u, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zi : Mr, this.isPropagationStopped = Mr, this;
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = zi);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = zi);
      },
      persist: function() {
      },
      isPersistent: zi
    }), t;
  }
  var hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ci = bt(hl), zn = A({}, hl, { view: 0, detail: 0 }), Ih = bt(zn), Fu, Wu, Cn, wi = A({}, zn, {
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
    getModifierState: Pu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (Fu = e.screenX - Cn.screenX, Wu = e.screenY - Cn.screenY) : Wu = Fu = 0, Cn = e), Fu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wu;
    }
  }), Or = bt(wi), Ph = A({}, wi, { dataTransfer: 0 }), em = bt(Ph), tm = A({}, zn, { relatedTarget: 0 }), Iu = bt(tm), am = A({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lm = bt(am), nm = A({}, hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), im = bt(nm), um = A({}, hl, { data: 0 }), Ur = bt(um), cm = {
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
  function Pu() {
    return om;
  }
  var fm = A({}, zn, {
    key: function(e) {
      if (e.key) {
        var t = cm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pu,
    charCode: function(e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), dm = bt(fm), hm = A({}, wi, {
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
  }), Rr = bt(hm), mm = A({}, zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu
  }), vm = bt(mm), ym = A({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gm = bt(ym), pm = A({}, wi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bm = bt(pm), xm = A({}, hl, {
    newState: 0,
    oldState: 0
  }), jm = bt(xm), Sm = [9, 13, 27, 32], ec = ga && "CompositionEvent" in window, wn = null;
  ga && "documentMode" in document && (wn = document.documentMode);
  var Em = ga && "TextEvent" in window && !wn, qr = ga && (!ec || wn && 8 < wn && 11 >= wn), Hr = " ", Br = !1;
  function kr(e, t) {
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
  function Lr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vl = !1;
  function Nm(e, t) {
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
  function _m(e, t) {
    if (Vl)
      return e === "compositionend" || !ec && kr(e, t) ? (e = Dr(), Ti = $u = Ua = null, Vl = !1, e) : null;
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
  function Yr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tm[e.type] : t === "textarea";
  }
  function Vr(e, t, a, l) {
    Ll ? Yl ? Yl.push(l) : Yl = [l] : Ll = l, t = bu(t, "onChange"), 0 < t.length && (a = new Ci(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Dn = null, Mn = null;
  function Am(e) {
    Td(e, 0);
  }
  function Di(e) {
    var t = _n(e);
    if (Er(t)) return e;
  }
  function Gr(e, t) {
    if (e === "change") return t;
  }
  var Xr = !1;
  if (ga) {
    var tc;
    if (ga) {
      var ac = "oninput" in document;
      if (!ac) {
        var Qr = document.createElement("div");
        Qr.setAttribute("oninput", "return;"), ac = typeof Qr.oninput == "function";
      }
      tc = ac;
    } else tc = !1;
    Xr = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function Zr() {
    Dn && (Dn.detachEvent("onpropertychange", Kr), Mn = Dn = null);
  }
  function Kr(e) {
    if (e.propertyName === "value" && Di(Mn)) {
      var t = [];
      Vr(
        t,
        Mn,
        e,
        Zu(e)
      ), wr(Am, t);
    }
  }
  function zm(e, t, a) {
    e === "focusin" ? (Zr(), Dn = t, Mn = a, Dn.attachEvent("onpropertychange", Kr)) : e === "focusout" && Zr();
  }
  function Cm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Di(Mn);
  }
  function wm(e, t) {
    if (e === "click") return Di(t);
  }
  function Dm(e, t) {
    if (e === "input" || e === "change")
      return Di(t);
  }
  function Mm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Tt = typeof Object.is == "function" ? Object.is : Mm;
  function On(e, t) {
    if (Tt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!mt.call(t, n) || !Tt(e[n], t[n]))
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
    for (var t = Ni(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ni(e.document);
    }
    return t;
  }
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Om = ga && "documentMode" in document && 11 >= document.documentMode, Gl = null, nc = null, Un = null, ic = !1;
  function Ir(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ic || Gl == null || Gl !== Ni(l) || (l = Gl, "selectionStart" in l && lc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Un && On(Un, l) || (Un = l, l = bu(nc, "onSelect"), 0 < l.length && (t = new Ci(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Gl)));
  }
  function ml(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Xl = {
    animationend: ml("Animation", "AnimationEnd"),
    animationiteration: ml("Animation", "AnimationIteration"),
    animationstart: ml("Animation", "AnimationStart"),
    transitionrun: ml("Transition", "TransitionRun"),
    transitionstart: ml("Transition", "TransitionStart"),
    transitioncancel: ml("Transition", "TransitionCancel"),
    transitionend: ml("Transition", "TransitionEnd")
  }, uc = {}, Pr = {};
  ga && (Pr = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function vl(e) {
    if (uc[e]) return uc[e];
    if (!Xl[e]) return e;
    var t = Xl[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Pr)
        return uc[e] = t[a];
    return e;
  }
  var eo = vl("animationend"), to = vl("animationiteration"), ao = vl("animationstart"), Um = vl("transitionrun"), Rm = vl("transitionstart"), qm = vl("transitioncancel"), lo = vl("transitionend"), no = /* @__PURE__ */ new Map(), cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cc.push("scrollEnd");
  function $t(e, t) {
    no.set(e, t), dl(t, [e]);
  }
  var Mi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ht = [], Ql = 0, sc = 0;
  function Oi() {
    for (var e = Ql, t = sc = Ql = 0; t < e; ) {
      var a = Ht[t];
      Ht[t++] = null;
      var l = Ht[t];
      Ht[t++] = null;
      var n = Ht[t];
      Ht[t++] = null;
      var u = Ht[t];
      if (Ht[t++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      u !== 0 && io(a, n, u);
    }
  }
  function Ui(e, t, a, l) {
    Ht[Ql++] = e, Ht[Ql++] = t, Ht[Ql++] = a, Ht[Ql++] = l, sc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function rc(e, t, a, l) {
    return Ui(e, t, a, l), Ri(e);
  }
  function yl(e, t) {
    return Ui(e, null, null, t), Ri(e);
  }
  function io(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - vt(a), e = u.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Ri(e) {
    if (50 < ai)
      throw ai = 0, ps = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Zl = {};
  function Hm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, a, l) {
    return new Hm(e, t, a, l);
  }
  function oc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pa(e, t) {
    var a = e.alternate;
    return a === null ? (a = At(
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
  function qi(e, t, a, l, n, u) {
    var s = 0;
    if (l = e, typeof e == "function") oc(e) && (s = 1);
    else if (typeof e == "string")
      s = Vv(
        e,
        a,
        K.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case F:
          return e = At(31, a, t, n), e.elementType = F, e.lanes = u, e;
        case ve:
          return gl(a.children, n, u, t);
        case V:
          s = 8, n |= 24;
          break;
        case ce:
          return e = At(12, a, t, n | 2), e.elementType = ce, e.lanes = u, e;
        case Ne:
          return e = At(13, a, t, n), e.elementType = Ne, e.lanes = u, e;
        case pe:
          return e = At(19, a, t, n), e.elementType = pe, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ne:
                s = 10;
                break e;
              case le:
                s = 9;
                break e;
              case $:
                s = 11;
                break e;
              case Z:
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
    return t = At(s, a, t, n), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function gl(e, t, a, l) {
    return e = At(7, e, l, t), e.lanes = a, e;
  }
  function fc(e, t, a) {
    return e = At(6, e, null, t), e.lanes = a, e;
  }
  function co(e) {
    var t = At(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function dc(e, t, a) {
    return t = At(
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
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = so.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: na(t)
      }, so.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: na(t)
    };
  }
  var Kl = [], Jl = 0, Hi = null, Rn = 0, kt = [], Lt = 0, Ra = null, ca = 1, sa = "";
  function ba(e, t) {
    Kl[Jl++] = Rn, Kl[Jl++] = Hi, Hi = e, Rn = t;
  }
  function ro(e, t, a) {
    kt[Lt++] = ca, kt[Lt++] = sa, kt[Lt++] = Ra, Ra = e;
    var l = ca;
    e = sa;
    var n = 32 - vt(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - vt(t) + n;
    if (30 < u) {
      var s = n - n % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, ca = 1 << 32 - vt(t) + n | a << n | l, sa = u + e;
    } else
      ca = 1 << u | a << n | l, sa = e;
  }
  function hc(e) {
    e.return !== null && (ba(e, 1), ro(e, 1, 0));
  }
  function mc(e) {
    for (; e === Hi; )
      Hi = Kl[--Jl], Kl[Jl] = null, Rn = Kl[--Jl], Kl[Jl] = null;
    for (; e === Ra; )
      Ra = kt[--Lt], kt[Lt] = null, sa = kt[--Lt], kt[Lt] = null, ca = kt[--Lt], kt[Lt] = null;
  }
  function oo(e, t) {
    kt[Lt++] = ca, kt[Lt++] = sa, kt[Lt++] = Ra, ca = t.id, sa = t.overflow, Ra = e;
  }
  var ot = null, Xe = null, we = !1, qa = null, Yt = !1, vc = Error(o(519));
  function Ha(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw qn(Bt(t, e)), vc;
  }
  function fo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[me] = e, t[ee] = l, a) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ni.length; a++)
          Ae(ni[a], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), Nr(
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
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), Tr(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || wd(t.textContent, a) ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), l.onScroll != null && Ae("scroll", t), l.onScrollEnd != null && Ae("scrollend", t), l.onClick != null && (t.onclick = ya), t = !0) : t = !1, t || Ha(e, !0);
  }
  function ho(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          Yt = !1;
          return;
        case 27:
        case 3:
          Yt = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function $l(e) {
    if (e !== ot) return !1;
    if (!we) return ho(e), we = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Os(e.type, e.memoizedProps)), a = !a), a && Xe && Ha(e), ho(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Xe = kd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Xe = kd(e);
    } else
      t === 27 ? (t = Xe, Wa(e.type) ? (e = Bs, Bs = null, Xe = e) : Xe = t) : Xe = ot ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pl() {
    Xe = ot = null, we = !1;
  }
  function yc() {
    var e = qa;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), qa = null), e;
  }
  function qn(e) {
    qa === null ? qa = [e] : qa.push(e);
  }
  var gc = h(null), bl = null, xa = null;
  function Ba(e, t, a) {
    X(gc, t._currentValue), t._currentValue = a;
  }
  function ja(e) {
    e._currentValue = gc.current, D(gc);
  }
  function pc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function bc(e, t, a, l) {
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
              u.lanes |= a, r = u.alternate, r !== null && (r.lanes |= a), pc(
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
        s.lanes |= a, u = s.alternate, u !== null && (u.lanes |= a), pc(s, a, e), s = null;
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
          Tt(n.pendingProps.value, s.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (n === Me.current) {
        if (s = n.alternate, s === null) throw Error(o(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ri) : e = [ri]);
      }
      n = n.return;
    }
    e !== null && bc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Bi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function xl(e) {
    bl = e, xa = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return mo(bl, e);
  }
  function ki(e, t) {
    return bl === null && xl(e), mo(e, t);
  }
  function mo(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, xa === null) {
      if (e === null) throw Error(o(308));
      xa = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else xa = xa.next = t;
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
  }, km = c.unstable_scheduleCallback, Lm = c.unstable_NormalPriority, Ie = {
    $$typeof: ne,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xc() {
    return {
      controller: new Bm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Hn(e) {
    e.refCount--, e.refCount === 0 && km(Lm, function() {
      e.controller.abort();
    });
  }
  var Bn = null, jc = 0, Wl = 0, Il = null;
  function Ym(e, t) {
    if (Bn === null) {
      var a = Bn = [];
      jc = 0, Wl = Ns(), Il = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return jc++, t.then(vo, vo), t;
  }
  function vo() {
    if (--jc === 0 && Bn !== null) {
      Il !== null && (Il.status = "fulfilled");
      var e = Bn;
      Bn = null, Wl = 0, Il = null;
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
  var yo = g.S;
  g.S = function(e, t) {
    ed = _e(), typeof t == "object" && t !== null && typeof t.then == "function" && Ym(e, t), yo !== null && yo(e, t);
  };
  var jl = h(null);
  function Sc() {
    var e = jl.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Li(e, t) {
    t === null ? X(jl, jl.current) : X(jl, t.pool);
  }
  function go() {
    var e = Sc();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Pl = Error(o(460)), Ec = Error(o(474)), Yi = Error(o(542)), Vi = { then: function() {
  } };
  function po(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function bo(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(ya, ya), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, jo(e), e;
      default:
        if (typeof t.status == "string") t.then(ya, ya);
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
        throw El = t, Pl;
    }
  }
  function Sl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (El = a, Pl) : a;
    }
  }
  var El = null;
  function xo() {
    if (El === null) throw Error(o(459));
    var e = El;
    return El = null, e;
  }
  function jo(e) {
    if (e === Pl || e === Yi)
      throw Error(o(483));
  }
  var en = null, kn = 0;
  function Gi(e) {
    var t = kn;
    return kn += 1, en === null && (en = []), bo(en, e, t);
  }
  function Ln(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Xi(e, t) {
    throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function So(e) {
    function t(x, v) {
      if (e) {
        var _ = x.deletions;
        _ === null ? (x.deletions = [v], x.flags |= 16) : _.push(v);
      }
    }
    function a(x, v) {
      if (!e) return null;
      for (; v !== null; )
        t(x, v), v = v.sibling;
      return null;
    }
    function l(x) {
      for (var v = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? v.set(x.key, x) : v.set(x.index, x), x = x.sibling;
      return v;
    }
    function n(x, v) {
      return x = pa(x, v), x.index = 0, x.sibling = null, x;
    }
    function u(x, v, _) {
      return x.index = _, e ? (_ = x.alternate, _ !== null ? (_ = _.index, _ < v ? (x.flags |= 67108866, v) : _) : (x.flags |= 67108866, v)) : (x.flags |= 1048576, v);
    }
    function s(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function r(x, v, _, q) {
      return v === null || v.tag !== 6 ? (v = fc(_, x.mode, q), v.return = x, v) : (v = n(v, _), v.return = x, v);
    }
    function m(x, v, _, q) {
      var he = _.type;
      return he === ve ? O(
        x,
        v,
        _.props.children,
        q,
        _.key
      ) : v !== null && (v.elementType === he || typeof he == "object" && he !== null && he.$$typeof === k && Sl(he) === v.type) ? (v = n(v, _.props), Ln(v, _), v.return = x, v) : (v = qi(
        _.type,
        _.key,
        _.props,
        null,
        x.mode,
        q
      ), Ln(v, _), v.return = x, v);
    }
    function T(x, v, _, q) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== _.containerInfo || v.stateNode.implementation !== _.implementation ? (v = dc(_, x.mode, q), v.return = x, v) : (v = n(v, _.children || []), v.return = x, v);
    }
    function O(x, v, _, q, he) {
      return v === null || v.tag !== 7 ? (v = gl(
        _,
        x.mode,
        q,
        he
      ), v.return = x, v) : (v = n(v, _), v.return = x, v);
    }
    function H(x, v, _) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = fc(
          "" + v,
          x.mode,
          _
        ), v.return = x, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Y:
            return _ = qi(
              v.type,
              v.key,
              v.props,
              null,
              x.mode,
              _
            ), Ln(_, v), _.return = x, _;
          case Q:
            return v = dc(
              v,
              x.mode,
              _
            ), v.return = x, v;
          case k:
            return v = Sl(v), H(x, v, _);
        }
        if (Oe(v) || ae(v))
          return v = gl(
            v,
            x.mode,
            _,
            null
          ), v.return = x, v;
        if (typeof v.then == "function")
          return H(x, Gi(v), _);
        if (v.$$typeof === ne)
          return H(
            x,
            ki(x, v),
            _
          );
        Xi(x, v);
      }
      return null;
    }
    function z(x, v, _, q) {
      var he = v !== null ? v.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return he !== null ? null : r(x, v, "" + _, q);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Y:
            return _.key === he ? m(x, v, _, q) : null;
          case Q:
            return _.key === he ? T(x, v, _, q) : null;
          case k:
            return _ = Sl(_), z(x, v, _, q);
        }
        if (Oe(_) || ae(_))
          return he !== null ? null : O(x, v, _, q, null);
        if (typeof _.then == "function")
          return z(
            x,
            v,
            Gi(_),
            q
          );
        if (_.$$typeof === ne)
          return z(
            x,
            v,
            ki(x, _),
            q
          );
        Xi(x, _);
      }
      return null;
    }
    function C(x, v, _, q, he) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return x = x.get(_) || null, r(v, x, "" + q, he);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case Y:
            return x = x.get(
              q.key === null ? _ : q.key
            ) || null, m(v, x, q, he);
          case Q:
            return x = x.get(
              q.key === null ? _ : q.key
            ) || null, T(v, x, q, he);
          case k:
            return q = Sl(q), C(
              x,
              v,
              _,
              q,
              he
            );
        }
        if (Oe(q) || ae(q))
          return x = x.get(_) || null, O(v, x, q, he, null);
        if (typeof q.then == "function")
          return C(
            x,
            v,
            _,
            Gi(q),
            he
          );
        if (q.$$typeof === ne)
          return C(
            x,
            v,
            _,
            ki(v, q),
            he
          );
        Xi(v, q);
      }
      return null;
    }
    function te(x, v, _, q) {
      for (var he = null, Ue = null, ue = v, Ee = v = 0, Ce = null; ue !== null && Ee < _.length; Ee++) {
        ue.index > Ee ? (Ce = ue, ue = null) : Ce = ue.sibling;
        var Re = z(
          x,
          ue,
          _[Ee],
          q
        );
        if (Re === null) {
          ue === null && (ue = Ce);
          break;
        }
        e && ue && Re.alternate === null && t(x, ue), v = u(Re, v, Ee), Ue === null ? he = Re : Ue.sibling = Re, Ue = Re, ue = Ce;
      }
      if (Ee === _.length)
        return a(x, ue), we && ba(x, Ee), he;
      if (ue === null) {
        for (; Ee < _.length; Ee++)
          ue = H(x, _[Ee], q), ue !== null && (v = u(
            ue,
            v,
            Ee
          ), Ue === null ? he = ue : Ue.sibling = ue, Ue = ue);
        return we && ba(x, Ee), he;
      }
      for (ue = l(ue); Ee < _.length; Ee++)
        Ce = C(
          ue,
          x,
          Ee,
          _[Ee],
          q
        ), Ce !== null && (e && Ce.alternate !== null && ue.delete(
          Ce.key === null ? Ee : Ce.key
        ), v = u(
          Ce,
          v,
          Ee
        ), Ue === null ? he = Ce : Ue.sibling = Ce, Ue = Ce);
      return e && ue.forEach(function(al) {
        return t(x, al);
      }), we && ba(x, Ee), he;
    }
    function ye(x, v, _, q) {
      if (_ == null) throw Error(o(151));
      for (var he = null, Ue = null, ue = v, Ee = v = 0, Ce = null, Re = _.next(); ue !== null && !Re.done; Ee++, Re = _.next()) {
        ue.index > Ee ? (Ce = ue, ue = null) : Ce = ue.sibling;
        var al = z(x, ue, Re.value, q);
        if (al === null) {
          ue === null && (ue = Ce);
          break;
        }
        e && ue && al.alternate === null && t(x, ue), v = u(al, v, Ee), Ue === null ? he = al : Ue.sibling = al, Ue = al, ue = Ce;
      }
      if (Re.done)
        return a(x, ue), we && ba(x, Ee), he;
      if (ue === null) {
        for (; !Re.done; Ee++, Re = _.next())
          Re = H(x, Re.value, q), Re !== null && (v = u(Re, v, Ee), Ue === null ? he = Re : Ue.sibling = Re, Ue = Re);
        return we && ba(x, Ee), he;
      }
      for (ue = l(ue); !Re.done; Ee++, Re = _.next())
        Re = C(ue, x, Ee, Re.value, q), Re !== null && (e && Re.alternate !== null && ue.delete(Re.key === null ? Ee : Re.key), v = u(Re, v, Ee), Ue === null ? he = Re : Ue.sibling = Re, Ue = Re);
      return e && ue.forEach(function(Pv) {
        return t(x, Pv);
      }), we && ba(x, Ee), he;
    }
    function Ve(x, v, _, q) {
      if (typeof _ == "object" && _ !== null && _.type === ve && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Y:
            e: {
              for (var he = _.key; v !== null; ) {
                if (v.key === he) {
                  if (he = _.type, he === ve) {
                    if (v.tag === 7) {
                      a(
                        x,
                        v.sibling
                      ), q = n(
                        v,
                        _.props.children
                      ), q.return = x, x = q;
                      break e;
                    }
                  } else if (v.elementType === he || typeof he == "object" && he !== null && he.$$typeof === k && Sl(he) === v.type) {
                    a(
                      x,
                      v.sibling
                    ), q = n(v, _.props), Ln(q, _), q.return = x, x = q;
                    break e;
                  }
                  a(x, v);
                  break;
                } else t(x, v);
                v = v.sibling;
              }
              _.type === ve ? (q = gl(
                _.props.children,
                x.mode,
                q,
                _.key
              ), q.return = x, x = q) : (q = qi(
                _.type,
                _.key,
                _.props,
                null,
                x.mode,
                q
              ), Ln(q, _), q.return = x, x = q);
            }
            return s(x);
          case Q:
            e: {
              for (he = _.key; v !== null; ) {
                if (v.key === he)
                  if (v.tag === 4 && v.stateNode.containerInfo === _.containerInfo && v.stateNode.implementation === _.implementation) {
                    a(
                      x,
                      v.sibling
                    ), q = n(v, _.children || []), q.return = x, x = q;
                    break e;
                  } else {
                    a(x, v);
                    break;
                  }
                else t(x, v);
                v = v.sibling;
              }
              q = dc(_, x.mode, q), q.return = x, x = q;
            }
            return s(x);
          case k:
            return _ = Sl(_), Ve(
              x,
              v,
              _,
              q
            );
        }
        if (Oe(_))
          return te(
            x,
            v,
            _,
            q
          );
        if (ae(_)) {
          if (he = ae(_), typeof he != "function") throw Error(o(150));
          return _ = he.call(_), ye(
            x,
            v,
            _,
            q
          );
        }
        if (typeof _.then == "function")
          return Ve(
            x,
            v,
            Gi(_),
            q
          );
        if (_.$$typeof === ne)
          return Ve(
            x,
            v,
            ki(x, _),
            q
          );
        Xi(x, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, v !== null && v.tag === 6 ? (a(x, v.sibling), q = n(v, _), q.return = x, x = q) : (a(x, v), q = fc(_, x.mode, q), q.return = x, x = q), s(x)) : a(x, v);
    }
    return function(x, v, _, q) {
      try {
        kn = 0;
        var he = Ve(
          x,
          v,
          _,
          q
        );
        return en = null, he;
      } catch (ue) {
        if (ue === Pl || ue === Yi) throw ue;
        var Ue = At(29, ue, null, x.mode);
        return Ue.lanes = q, Ue.return = x, Ue;
      }
    };
  }
  var Nl = So(!0), Eo = So(!1), ka = !1;
  function Nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(e, t) {
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
    if (l = l.shared, (qe & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Ri(e), io(e, null, a), t;
    }
    return Ui(e, l, t, a), Ri(e);
  }
  function Yn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, xi(e, a);
    }
  }
  function Tc(e, t) {
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
  var Ac = !1;
  function Vn() {
    if (Ac) {
      var e = Il;
      if (e !== null) throw e;
    }
  }
  function Gn(e, t, a, l) {
    Ac = !1;
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
        if (C ? (ze & z) === z : (l & z) === z) {
          z !== 0 && z === Wl && (Ac = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var te = e, ye = r;
            z = t;
            var Ve = a;
            switch (ye.tag) {
              case 1:
                if (te = ye.payload, typeof te == "function") {
                  H = te.call(Ve, H, z);
                  break e;
                }
                H = te;
                break e;
              case 3:
                te.flags = te.flags & -65537 | 128;
              case 0:
                if (te = ye.payload, z = typeof te == "function" ? te.call(Ve, H, z) : te, z == null) break e;
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
  var tn = h(null), Qi = h(0);
  function To(e, t) {
    e = wa, X(Qi, e), X(tn, t), wa = e | t.baseLanes;
  }
  function zc() {
    X(Qi, wa), X(tn, tn.current);
  }
  function Cc() {
    wa = Qi.current, D(tn), D(Qi);
  }
  var zt = h(null), Vt = null;
  function Va(e) {
    var t = e.alternate;
    X(Fe, Fe.current & 1), X(zt, e), Vt === null && (t === null || tn.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function wc(e) {
    X(Fe, Fe.current), X(zt, e), Vt === null && (Vt = e);
  }
  function Ao(e) {
    e.tag === 22 ? (X(Fe, Fe.current), X(zt, e), Vt === null && (Vt = e)) : Ga();
  }
  function Ga() {
    X(Fe, Fe.current), X(zt, zt.current);
  }
  function Ct(e) {
    D(zt), Vt === e && (Vt = null), D(Fe);
  }
  var Fe = h(0);
  function Zi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || qs(a) || Hs(a)))
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
  var Sa = 0, Se = null, Le = null, Pe = null, Ki = !1, an = !1, _l = !1, Ji = 0, Xn = 0, ln = null, Gm = 0;
  function Ke() {
    throw Error(o(321));
  }
  function Dc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Tt(e[a], t[a])) return !1;
    return !0;
  }
  function Mc(e, t, a, l, n, u) {
    return Sa = u, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = e === null || e.memoizedState === null ? ff : Kc, _l = !1, u = a(l, n), _l = !1, an && (u = Co(
      t,
      a,
      l,
      n
    )), zo(e), u;
  }
  function zo(e) {
    g.H = Kn;
    var t = Le !== null && Le.next !== null;
    if (Sa = 0, Pe = Le = Se = null, Ki = !1, Xn = 0, ln = null, t) throw Error(o(300));
    e === null || et || (e = e.dependencies, e !== null && Bi(e) && (et = !0));
  }
  function Co(e, t, a, l) {
    Se = e;
    var n = 0;
    do {
      if (an && (ln = null), Xn = 0, an = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Pe = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      g.H = df, u = t(a, l);
    } while (an);
    return u;
  }
  function Xm() {
    var e = g.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Qn(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (Se.flags |= 1024), t;
  }
  function Oc() {
    var e = Ji !== 0;
    return Ji = 0, e;
  }
  function Uc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Rc(e) {
    if (Ki) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ki = !1;
    }
    Sa = 0, Pe = Le = Se = null, an = !1, Xn = Ji = 0, ln = null;
  }
  function pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? Se.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function We() {
    if (Le === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Pe === null ? Se.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, Le = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(o(467)) : Error(o(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, Pe === null ? Se.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Qn(e) {
    var t = Xn;
    return Xn += 1, ln === null && (ln = []), e = bo(ln, e, t), t = Se, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? ff : Kc), e;
  }
  function Fi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Qn(e);
      if (e.$$typeof === ne) return ft(e);
    }
    throw Error(o(438, String(e)));
  }
  function qc(e) {
    var t = null, a = Se.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Se.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = $i(), Se.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = re;
    return t.index++, a;
  }
  function Ea(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = We();
    return Hc(t, Le, e);
  }
  function Hc(e, t, a) {
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
        if (H !== T.lane ? (ze & H) === H : (Sa & H) === H) {
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
            }), H === Wl && (O = !0);
          else if ((Sa & z) === z) {
            T = T.next, z === Wl && (O = !0);
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
            }, m === null ? (r = m = H, s = u) : m = m.next = H, Se.lanes |= z, Za |= z;
          H = T.action, _l && a(u, H), u = T.hasEagerState ? T.eagerState : a(u, H);
        } else
          z = {
            lane: H,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, m === null ? (r = m = z, s = u) : m = m.next = z, Se.lanes |= H, Za |= H;
        T = T.next;
      } while (T !== null && T !== t);
      if (m === null ? s = u : m.next = r, !Tt(u, e.memoizedState) && (et = !0, O && (a = Il, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Bc(e) {
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
      Tt(u, t.memoizedState) || (et = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function wo(e, t, a) {
    var l = Se, n = We(), u = we;
    if (u) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var s = !Tt(
      (Le || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, et = !0), n = n.queue, Yc(Oo.bind(null, l, n, e), [
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
      u || (Sa & 127) !== 0 || Do(l, t, a);
    }
    return a;
  }
  function Do(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Se.updateQueue, t === null ? (t = $i(), Se.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
      return !Tt(e, a);
    } catch {
      return !0;
    }
  }
  function Ro(e) {
    var t = yl(e, 2);
    t !== null && Nt(t, e, 2);
  }
  function kc(e) {
    var t = pt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _l) {
        Kt(!0);
        try {
          a();
        } finally {
          Kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ea,
      lastRenderedState: e
    }, t;
  }
  function qo(e, t, a, l) {
    return e.baseState = a, Hc(
      e,
      Le,
      typeof l == "function" ? l : Ea
    );
  }
  function Qm(e, t, a, l, n) {
    if (eu(e)) throw Error(o(485));
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
      g.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, Ho(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Ho(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var u = g.T, s = {};
      g.T = s;
      try {
        var r = a(n, l), m = g.S;
        m !== null && m(s, r), Bo(e, t, r);
      } catch (T) {
        Lc(e, t, T);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), g.T = u;
      }
    } else
      try {
        u = a(n, l), Bo(e, t, u);
      } catch (T) {
        Lc(e, t, T);
      }
  }
  function Bo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        ko(e, t, l);
      },
      function(l) {
        return Lc(e, t, l);
      }
    ) : ko(e, t, a);
  }
  function ko(e, t, a) {
    t.status = "fulfilled", t.value = a, Lo(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ho(e, a)));
  }
  function Lc(e, t, a) {
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
    if (we) {
      var a = Ge.formState;
      if (a !== null) {
        e: {
          var l = Se;
          if (we) {
            if (Xe) {
              t: {
                for (var n = Xe, u = Yt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = Gt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Xe = Gt(
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
      lastRenderedReducer: Yo,
      lastRenderedState: t
    }, a.queue = l, a = sf.bind(
      null,
      Se,
      l
    ), l.dispatch = a, l = kc(!1), u = Zc.bind(
      null,
      Se,
      !1,
      l.queue
    ), l = pt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = Qm.bind(
      null,
      Se,
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
    if (t = Hc(
      e,
      t,
      Yo
    )[0], e = Wi(Ea)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Qn(t);
      } catch (s) {
        throw s === Pl ? Yi : s;
      }
    else l = t;
    t = We();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (Se.flags |= 2048, nn(
      9,
      { destroy: void 0 },
      Zm.bind(null, n, a),
      null
    )), [l, u, e];
  }
  function Zm(e, t) {
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
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Se.updateQueue, t === null && (t = $i(), Se.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Zo() {
    return We().memoizedState;
  }
  function Ii(e, t, a, l) {
    var n = pt();
    Se.flags |= e, n.memoizedState = nn(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Pi(e, t, a, l) {
    var n = We();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    Le !== null && l !== null && Dc(l, Le.memoizedState.deps) ? n.memoizedState = nn(t, u, a, l) : (Se.flags |= e, n.memoizedState = nn(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Ko(e, t) {
    Ii(8390656, 8, e, t);
  }
  function Yc(e, t) {
    Pi(2048, 8, e, t);
  }
  function Km(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null)
      t = $i(), Se.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Jo(e) {
    var t = We().memoizedState;
    return Km({ ref: t, nextImpl: e }), function() {
      if ((qe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function $o(e, t) {
    return Pi(4, 2, e, t);
  }
  function Fo(e, t) {
    return Pi(4, 4, e, t);
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
    a = a != null ? a.concat([e]) : null, Pi(4, 4, Wo.bind(null, t, e), a);
  }
  function Vc() {
  }
  function Po(e, t) {
    var a = We();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Dc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function ef(e, t) {
    var a = We();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Dc(t, l[1]))
      return l[0];
    if (l = e(), _l) {
      Kt(!0);
      try {
        e();
      } finally {
        Kt(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Gc(e, t, a) {
    return a === void 0 || (Sa & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = ad(), Se.lanes |= e, Za |= e, a);
  }
  function tf(e, t, a, l) {
    return Tt(a, t) ? a : tn.current !== null ? (e = Gc(e, a, l), Tt(e, t) || (et = !0), e) : (Sa & 42) === 0 || (Sa & 1073741824) !== 0 && (ze & 261930) === 0 ? (et = !0, e.memoizedState = a) : (e = ad(), Se.lanes |= e, Za |= e, t);
  }
  function af(e, t, a, l, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var s = g.T, r = {};
    g.T = r, Zc(e, !1, t, a);
    try {
      var m = n(), T = g.S;
      if (T !== null && T(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var O = Vm(
          m,
          l
        );
        Zn(
          e,
          t,
          O,
          Mt(e)
        );
      } else
        Zn(
          e,
          t,
          l,
          Mt(e)
        );
    } catch (H) {
      Zn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Mt()
      );
    } finally {
      B.p = u, s !== null && r.types !== null && (s.types = r.types), g.T = s;
    }
  }
  function Jm() {
  }
  function Xc(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var n = lf(e).queue;
    af(
      e,
      n,
      t,
      I,
      a === null ? Jm : function() {
        return nf(e), a(l);
      }
    );
  }
  function lf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: I
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
        lastRenderedReducer: Ea,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function nf(e) {
    var t = lf(e);
    t.next === null && (t = e.alternate.memoizedState), Zn(
      e,
      t.next.queue,
      {},
      Mt()
    );
  }
  function Qc() {
    return ft(ri);
  }
  function uf() {
    return We().memoizedState;
  }
  function cf() {
    return We().memoizedState;
  }
  function $m(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Mt();
          e = La(a);
          var l = Ya(t, e, a);
          l !== null && (Nt(l, t, a), Yn(l, t, a)), t = { cache: xc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Fm(e, t, a) {
    var l = Mt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eu(e) ? rf(t, a) : (a = rc(e, t, a, l), a !== null && (Nt(a, e, l), of(a, t, l)));
  }
  function sf(e, t, a) {
    var l = Mt();
    Zn(e, t, a, l);
  }
  function Zn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (eu(e)) rf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, r = u(s, a);
          if (n.hasEagerState = !0, n.eagerState = r, Tt(r, s))
            return Ui(e, t, n, 0), Ge === null && Oi(), !1;
        } catch {
        }
      if (a = rc(e, t, n, l), a !== null)
        return Nt(a, e, l), of(a, t, l), !0;
    }
    return !1;
  }
  function Zc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ns(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eu(e)) {
      if (t) throw Error(o(479));
    } else
      t = rc(
        e,
        a,
        l,
        2
      ), t !== null && Nt(t, e, 2);
  }
  function eu(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function rf(e, t) {
    an = Ki = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function of(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, xi(e, a);
    }
  }
  var Kn = {
    readContext: ft,
    use: Fi,
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
  Kn.useEffectEvent = Ke;
  var ff = {
    readContext: ft,
    use: Fi,
    useCallback: function(e, t) {
      return pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: Ko,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Ii(
        4194308,
        4,
        Wo.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ii(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = pt();
      t = t === void 0 ? null : t;
      var l = e();
      if (_l) {
        Kt(!0);
        try {
          e();
        } finally {
          Kt(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = pt();
      if (a !== void 0) {
        var n = a(t);
        if (_l) {
          Kt(!0);
          try {
            a(t);
          } finally {
            Kt(!1);
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
        Se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = pt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = kc(e);
      var t = e.queue, a = sf.bind(null, Se, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      var a = pt();
      return Gc(a, e, t);
    },
    useTransition: function() {
      var e = kc(!1);
      return e = af.bind(
        null,
        Se,
        e.queue,
        !0,
        !1
      ), pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Se, n = pt();
      if (we) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Ge === null)
          throw Error(o(349));
        (ze & 127) !== 0 || Do(l, t, a);
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
      if (we) {
        var a = sa, l = ca;
        a = (l & ~(1 << 32 - vt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Ji++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Gm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Qc,
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
      return t.queue = a, t = Zc.bind(
        null,
        Se,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: qc,
    useCacheRefresh: function() {
      return pt().memoizedState = $m.bind(
        null,
        Se
      );
    },
    useEffectEvent: function(e) {
      var t = pt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((qe & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Kc = {
    readContext: ft,
    use: Fi,
    useCallback: Po,
    useContext: ft,
    useEffect: Yc,
    useImperativeHandle: Io,
    useInsertionEffect: $o,
    useLayoutEffect: Fo,
    useMemo: ef,
    useReducer: Wi,
    useRef: Zo,
    useState: function() {
      return Wi(Ea);
    },
    useDebugValue: Vc,
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
      var e = Wi(Ea)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Qn(e),
        t
      ];
    },
    useSyncExternalStore: wo,
    useId: uf,
    useHostTransitionStatus: Qc,
    useFormState: Go,
    useActionState: Go,
    useOptimistic: function(e, t) {
      var a = We();
      return qo(a, Le, e, t);
    },
    useMemoCache: qc,
    useCacheRefresh: cf
  };
  Kc.useEffectEvent = Jo;
  var df = {
    readContext: ft,
    use: Fi,
    useCallback: Po,
    useContext: ft,
    useEffect: Yc,
    useImperativeHandle: Io,
    useInsertionEffect: $o,
    useLayoutEffect: Fo,
    useMemo: ef,
    useReducer: Bc,
    useRef: Zo,
    useState: function() {
      return Bc(Ea);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      var a = We();
      return Le === null ? Gc(a, e, t) : tf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bc(Ea)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Qn(e),
        t
      ];
    },
    useSyncExternalStore: wo,
    useId: uf,
    useHostTransitionStatus: Qc,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function(e, t) {
      var a = We();
      return Le !== null ? qo(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: qc,
    useCacheRefresh: cf
  };
  df.useEffectEvent = Jo;
  function Jc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : A({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var $c = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Mt(), n = La(l);
      n.payload = t, a != null && (n.callback = a), t = Ya(e, n, l), t !== null && (Nt(t, e, l), Yn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Mt(), n = La(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Ya(e, n, l), t !== null && (Nt(t, e, l), Yn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Mt(), l = La(a);
      l.tag = 2, t != null && (l.callback = t), t = Ya(e, l, a), t !== null && (Nt(t, e, a), Yn(t, e, a));
    }
  };
  function hf(e, t, a, l, n, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, s) : t.prototype && t.prototype.isPureReactComponent ? !On(a, l) || !On(n, u) : !0;
  }
  function mf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && $c.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t) {
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
    Mi(e);
  }
  function yf(e) {
    console.error(e);
  }
  function gf(e) {
    Mi(e);
  }
  function tu(e, t) {
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
  function Fc(e, t, a) {
    return a = La(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      tu(e, t);
    }, a;
  }
  function bf(e) {
    return e = La(e), e.tag = 3, e;
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
      pf(t, a, l), typeof n != "function" && (Ka === null ? Ka = /* @__PURE__ */ new Set([this]) : Ka.add(this));
      var r = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function Wm(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Fl(
        t,
        a,
        n,
        !0
      ), a = zt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? hu() : a.alternate === null && Je === 0 && (Je = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Vi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), js(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Vi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), js(e, l, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return js(e, l, n), hu(), !1;
    }
    if (we)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== vc && (e = Error(o(422), { cause: l }), qn(Bt(e, a)))) : (l !== vc && (t = Error(o(423), {
        cause: l
      }), qn(
        Bt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = Bt(l, a), n = Fc(
        e.stateNode,
        l,
        n
      ), Tc(e, n), Je !== 4 && (Je = 2)), !1;
    var u = Error(o(520), { cause: l });
    if (u = Bt(u, a), ti === null ? ti = [u] : ti.push(u), Je !== 4 && (Je = 2), t === null) return !0;
    l = Bt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = Fc(a.stateNode, l, e), Tc(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ka === null || !Ka.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = bf(n), xf(
              n,
              e,
              a,
              l
            ), Tc(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Wc = Error(o(461)), et = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? Eo(t, null, a, l) : Nl(
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
    return xl(t), l = Mc(
      e,
      t,
      a,
      s,
      u,
      n
    ), r = Oc(), e !== null && !et ? (Uc(e, t, n), Na(e, t, n)) : (we && r && hc(t), t.flags |= 1, dt(e, t, l, n), t.child);
  }
  function Sf(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !oc(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Ef(
        e,
        t,
        u,
        l,
        n
      )) : (e = qi(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !is(e, n)) {
      var s = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : On, a(s, l) && e.ref === t.ref)
        return Na(e, t, n);
    }
    return t.flags |= 1, e = pa(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ef(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (On(u, l) && e.ref === t.ref)
        if (et = !1, t.pendingProps = l = u, is(e, n))
          (e.flags & 131072) !== 0 && (et = !0);
        else
          return t.lanes = e.lanes, Na(e, t, n);
    }
    return Ic(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Li(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? To(t, u) : zc(), Ao(t);
      else
        return l = t.lanes = 536870912, _f(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Li(t, u.cachePool), To(t, u), Ga(), t.memoizedState = null) : (e !== null && Li(t, null), zc(), Ga());
    return dt(e, t, n, a), t.child;
  }
  function Jn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function _f(e, t, a, l, n) {
    var u = Sc();
    return u = u === null ? null : { parent: Ie._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Li(t, null), zc(), Ao(t), e !== null && Fl(e, t, l, !0), t.childLanes = n, null;
  }
  function au(e, t) {
    return t = nu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Tf(e, t, a) {
    return Nl(t, e.child, null, a), e = au(t, t.pendingProps), e.flags |= 2, Ct(t), t.memoizedState = null, e;
  }
  function Im(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (l.mode === "hidden")
          return e = au(t, l), t.lanes = 536870912, Jn(null, e);
        if (wc(t), (e = Xe) ? (e = Bd(
          e,
          Yt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ra !== null ? { id: ca, overflow: sa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = co(e), a.return = t, t.child = a, ot = t, Xe = null)) : e = null, e === null) throw Ha(t);
        return t.lanes = 536870912, null;
      }
      return au(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (wc(t), n)
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
        if (l = Ge, l !== null && (s = ji(l, a), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, yl(e, s), Nt(l, e, s), Wc;
        hu(), t = Tf(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Xe = Gt(s.nextSibling), ot = t, we = !0, qa = null, Yt = !1, e !== null && oo(t, e), t = au(t, l), t.flags |= 4096;
      return t;
    }
    return e = pa(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function lu(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ic(e, t, a, l, n) {
    return xl(t), a = Mc(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = Oc(), e !== null && !et ? (Uc(e, t, n), Na(e, t, n)) : (we && l && hc(t), t.flags |= 1, dt(e, t, a, n), t.child);
  }
  function Af(e, t, a, l, n, u) {
    return xl(t), t.updateQueue = null, a = Co(
      t,
      l,
      a,
      n
    ), zo(e), l = Oc(), e !== null && !et ? (Uc(e, t, u), Na(e, t, u)) : (we && l && hc(t), t.flags |= 1, dt(e, t, a, u), t.child);
  }
  function zf(e, t, a, l, n) {
    if (xl(t), t.stateNode === null) {
      var u = Zl, s = a.contextType;
      typeof s == "object" && s !== null && (u = ft(s)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = $c, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Nc(t), s = a.contextType, u.context = typeof s == "object" && s !== null ? ft(s) : Zl, u.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Jc(
        t,
        a,
        s,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && $c.enqueueReplaceState(u, u.state, null), Gn(t, l, u, n), Vn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, m = Tl(a, r);
      u.props = m;
      var T = u.context, O = a.contextType;
      s = Zl, typeof O == "object" && O !== null && (s = ft(O));
      var H = a.getDerivedStateFromProps;
      O = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || T !== s) && mf(
        t,
        u,
        l,
        s
      ), ka = !1;
      var z = t.memoizedState;
      u.state = z, Gn(t, l, u, n), Vn(), T = t.memoizedState, r || z !== T || ka ? (typeof H == "function" && (Jc(
        t,
        a,
        H,
        l
      ), T = t.memoizedState), (m = ka || hf(
        t,
        a,
        m,
        l,
        z,
        T,
        s
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = s, l = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, _c(e, t), s = t.memoizedProps, O = Tl(a, s), u.props = O, H = t.pendingProps, z = u.context, T = a.contextType, m = Zl, typeof T == "object" && T !== null && (m = ft(T)), r = a.getDerivedStateFromProps, (T = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || z !== m) && mf(
        t,
        u,
        l,
        m
      ), ka = !1, z = t.memoizedState, u.state = z, Gn(t, l, u, n), Vn();
      var C = t.memoizedState;
      s !== H || z !== C || ka || e !== null && e.dependencies !== null && Bi(e.dependencies) ? (typeof r == "function" && (Jc(
        t,
        a,
        r,
        l
      ), C = t.memoizedState), (O = ka || hf(
        t,
        a,
        O,
        l,
        z,
        C,
        m
      ) || e !== null && e.dependencies !== null && Bi(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, C, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        C,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = C), u.props = l, u.state = C, u.context = m, l = O) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, lu(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = Nl(
      t,
      e.child,
      null,
      n
    ), t.child = Nl(
      t,
      null,
      a,
      n
    )) : dt(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = Na(
      e,
      t,
      n
    ), e;
  }
  function Cf(e, t, a, l) {
    return pl(), t.flags |= 256, dt(e, t, a, l), t.child;
  }
  var Pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function es(e) {
    return { baseLanes: e, cachePool: go() };
  }
  function ts(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Dt), e;
  }
  function wf(e, t, a) {
    var l = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (n ? Va(t) : Ga(), (e = Xe) ? (e = Bd(
          e,
          Yt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ra !== null ? { id: ca, overflow: sa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = co(e), a.return = t, t.child = a, ot = t, Xe = null)) : e = null, e === null) throw Ha(t);
        return Hs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, n ? (Ga(), n = t.mode, r = nu(
        { mode: "hidden", children: r },
        n
      ), l = gl(
        l,
        n,
        a,
        null
      ), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = es(a), l.childLanes = ts(
        e,
        s,
        a
      ), t.memoizedState = Pc, Jn(null, l)) : (Va(t), as(t, r));
    }
    var m = e.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Va(t), t.flags &= -257, t = ls(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Ga(), t.child = e.child, t.flags |= 128, t = null) : (Ga(), r = l.fallback, n = t.mode, l = nu(
          { mode: "visible", children: l.children },
          n
        ), r = gl(
          r,
          n,
          a,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, Nl(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = es(a), l.childLanes = ts(
          e,
          s,
          a
        ), t.memoizedState = Pc, t = Jn(null, l));
      else if (Va(t), Hs(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var T = s.dgst;
        s = T, l = Error(o(419)), l.stack = "", l.digest = s, qn({ value: l, source: null, stack: null }), t = ls(
          e,
          t,
          a
        );
      } else if (et || Fl(e, t, a, !1), s = (a & e.childLanes) !== 0, et || s) {
        if (s = Ge, s !== null && (l = ji(s, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, yl(e, l), Nt(s, e, l), Wc;
        qs(r) || hu(), t = ls(
          e,
          t,
          a
        );
      } else
        qs(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Xe = Gt(
          r.nextSibling
        ), ot = t, we = !0, qa = null, Yt = !1, e !== null && oo(t, e), t = as(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Ga(), r = l.fallback, n = t.mode, m = e.child, T = m.sibling, l = pa(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, T !== null ? r = pa(
      T,
      r
    ) : (r = gl(
      r,
      n,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, Jn(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = es(a) : (n = r.cachePool, n !== null ? (m = Ie._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = go(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: n
    }), l.memoizedState = r, l.childLanes = ts(
      e,
      s,
      a
    ), t.memoizedState = Pc, Jn(e.child, l)) : (Va(t), a = e.child, e = a.sibling, a = pa(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function as(e, t) {
    return t = nu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function nu(e, t) {
    return e = At(22, e, null, t), e.lanes = 0, e;
  }
  function ls(e, t, a) {
    return Nl(t, e.child, null, a), e = as(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Df(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), pc(e.return, t, a);
  }
  function ns(e, t, a, l, n, u) {
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
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, X(Fe, s), dt(e, t, l, a), l = we ? Rn : 0, !r && e !== null && (e.flags & 128) !== 0)
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
          e = a.alternate, e !== null && Zi(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), ns(
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
          if (e = n.alternate, e !== null && Zi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        ns(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        ns(
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
  function Na(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Za |= t.lanes, (a & t.childLanes) === 0)
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
      for (e = t.child, a = pa(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = pa(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function is(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bi(e)));
  }
  function Pm(e, t, a) {
    switch (t.tag) {
      case 3:
        nt(t, t.stateNode.containerInfo), Ba(t, Ie, e.memoizedState.cache), pl();
        break;
      case 27:
      case 5:
        He(t);
        break;
      case 4:
        nt(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, wc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Va(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? wf(e, t, a) : (Va(t), e = Na(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Va(t);
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
        Ba(t, Ie, e.memoizedState.cache);
    }
    return Na(e, t, a);
  }
  function Of(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        et = !0;
      else {
        if (!is(e, a) && (t.flags & 128) === 0)
          return et = !1, Pm(
            e,
            t,
            a
          );
        et = (e.flags & 131072) !== 0;
      }
    else
      et = !1, we && (t.flags & 1048576) !== 0 && ro(t, Rn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Sl(t.elementType), t.type = e, typeof e == "function")
            oc(e) ? (l = Tl(e, l), t.tag = 1, t = zf(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Ic(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === $) {
                t.tag = 11, t = jf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (n === Z) {
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
            throw t = De(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ic(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = Tl(
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
          if (nt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, _c(e, t), Gn(t, l, null, a);
          var s = t.memoizedState;
          if (l = s.cache, Ba(t, Ie, l), l !== u.cache && bc(
            t,
            [Ie],
            a,
            !0
          ), Vn(), l = s.element, u.isDehydrated)
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
              n = Bt(
                Error(o(424)),
                t
              ), qn(n), t = Cf(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Xe = Gt(e.firstChild), ot = t, we = !0, qa = null, Yt = !0, a = Eo(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (pl(), l === n) {
              t = Na(
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
        return lu(e, t), e === null ? (a = Xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : we || (a = t.type, e = t.pendingProps, l = xu(
          je.current
        ).createElement(a), l[me] = t, l[ee] = e, ht(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = Xd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return He(t), e === null && we && (l = t.stateNode = Yd(
          t.type,
          t.pendingProps,
          je.current
        ), ot = t, Yt = !0, n = Xe, Wa(t.type) ? (Bs = n, Xe = Gt(l.firstChild)) : Xe = n), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), lu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((n = l = Xe) && (l = Cv(
          l,
          t.type,
          t.pendingProps,
          Yt
        ), l !== null ? (t.stateNode = l, ot = t, Xe = Gt(l.firstChild), Yt = !1, n = !0) : n = !1), n || Ha(t)), He(t), n = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = u.children, Os(n, u) ? l = null : s !== null && Os(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Mc(
          e,
          t,
          Xm,
          null,
          null,
          a
        ), ri._currentValue = n), lu(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && we && ((e = a = Xe) && (a = wv(
          a,
          t.pendingProps,
          Yt
        ), a !== null ? (t.stateNode = a, ot = t, Xe = null, e = !0) : e = !1), e || Ha(t)), null;
      case 13:
        return wf(e, t, a);
      case 4:
        return nt(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Nl(
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
        return l = t.pendingProps, Ba(t, t.type, l.value), dt(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, xl(t), n = ft(n), l = l(n), t.flags |= 1, dt(e, t, l, a), t.child;
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
        return Im(e, t, a);
      case 22:
        return Nf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return xl(t), l = ft(Ie), e === null ? (n = Sc(), n === null && (n = Ge, u = xc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = { parent: l, cache: n }, Nc(t), Ba(t, Ie, n)) : ((e.lanes & a) !== 0 && (_c(e, t), Gn(t, null, null, a), Vn()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Ba(t, Ie, l)) : (l = u.cache, Ba(t, Ie, l), l !== n.cache && bc(
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
  function _a(e) {
    e.flags |= 4;
  }
  function us(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ud()) e.flags |= 8192;
        else
          throw El = Vi, Ec;
    } else e.flags &= -16777217;
  }
  function Uf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$d(t))
      if (ud()) e.flags |= 8192;
      else
        throw El = Vi, Ec;
  }
  function iu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? pi() : 536870912, e.lanes |= t, rn |= t);
  }
  function $n(e, t) {
    if (!we)
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
  function ev(e, t, a) {
    var l = t.pendingProps;
    switch (mc(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ja(Ie), G(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && ($l(t) ? _a(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yc())), Qe(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (_a(t), u !== null ? (Qe(t), Uf(t, u)) : (Qe(t), us(
          t,
          n,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (_a(t), Qe(t), Uf(t, u)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && _a(t), Qe(t), us(
          t,
          n,
          e,
          l,
          a
        )), null;
      case 27:
        if (ge(t), a = je.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && _a(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Qe(t), null;
          }
          e = K.current, $l(t) ? fo(t) : (e = Yd(n, l, a), t.stateNode = e, _a(t));
        }
        return Qe(t), null;
      case 5:
        if (ge(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && _a(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Qe(t), null;
          }
          if (u = K.current, $l(t))
            fo(t);
          else {
            var s = xu(
              je.current
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
            u[me] = t, u[ee] = l;
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
            l && _a(t);
          }
        }
        return Qe(t), us(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && _a(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = je.current, $l(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = ot, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[me] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || wd(e.nodeValue, a)), e || Ha(t, !0);
          } else
            e = xu(e).createTextNode(
              l
            ), e[me] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = $l(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[me] = t;
            } else
              pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            a = yc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
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
              n[me] = t;
            } else
              pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), n = !1;
          } else
            n = yc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
        }
        return Ct(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), iu(t, t.updateQueue), Qe(t), null);
      case 4:
        return G(), e === null && zs(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return ja(t.type), Qe(t), null;
      case 19:
        if (D(Fe), l = t.memoizedState, l === null) return Qe(t), null;
        if (n = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (n) $n(l, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Zi(e), u !== null) {
                  for (t.flags |= 128, $n(l, !1), e = u.updateQueue, t.updateQueue = e, iu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    uo(a, e), a = a.sibling;
                  return X(
                    Fe,
                    Fe.current & 1 | 2
                  ), we && ba(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && _e() > ou && (t.flags |= 128, n = !0, $n(l, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Zi(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, iu(t, e), $n(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !we)
                return Qe(t), null;
            } else
              2 * _e() - l.renderingStartTime > ou && a !== 536870912 && (t.flags |= 128, n = !0, $n(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = _e(), e.sibling = null, a = Fe.current, X(
          Fe,
          n ? a & 1 | 2 : a & 1
        ), we && ba(t, l.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return Ct(t), Cc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), a = t.updateQueue, a !== null && iu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && D(jl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ja(Ie), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function tv(e, t) {
    switch (mc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ja(Ie), G(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ge(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ct(t), t.alternate === null)
            throw Error(o(340));
          pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ct(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(Fe), null;
      case 4:
        return G(), null;
      case 10:
        return ja(t.type), null;
      case 22:
      case 23:
        return Ct(t), Cc(), e !== null && D(jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ja(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rf(e, t) {
    switch (mc(t), t.tag) {
      case 3:
        ja(Ie), G();
        break;
      case 26:
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        G();
        break;
      case 31:
        t.memoizedState !== null && Ct(t);
        break;
      case 13:
        Ct(t);
        break;
      case 19:
        D(Fe);
        break;
      case 10:
        ja(t.type);
        break;
      case 22:
      case 23:
        Ct(t), Cc(), e !== null && D(jl);
        break;
      case 24:
        ja(Ie);
    }
  }
  function Fn(e, t) {
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
    a.props = Tl(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function Wn(e, t) {
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
  function ra(e, t) {
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
  function cs(e, t, a) {
    try {
      var l = e.stateNode;
      Ev(l, e.type, a, t), l[ee] = t;
    } catch (n) {
      ke(e, e.return, n);
    }
  }
  function kf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wa(e.type) || e.tag === 4;
  }
  function ss(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || kf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Wa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ya));
    else if (l !== 4 && (l === 27 && Wa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (rs(e, t, a), e = e.sibling; e !== null; )
        rs(e, t, a), e = e.sibling;
  }
  function uu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Wa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (uu(e, t, a), e = e.sibling; e !== null; )
        uu(e, t, a), e = e.sibling;
  }
  function Lf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ht(t, l, a), t[me] = e, t[ee] = a;
    } catch (u) {
      ke(e, e.return, u);
    }
  }
  var Ta = !1, tt = !1, os = !1, Yf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function av(e, t) {
    if (e = e.containerInfo, Ds = Au, e = Wr(e), lc(e)) {
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
    for (Ms = { focusedElem: e, selectionRange: a }, Au = !1, ct = t; ct !== null; )
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
                  var te = Tl(
                    a.type,
                    n
                  );
                  e = l.getSnapshotBeforeUpdate(
                    te,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ye) {
                  ke(
                    a,
                    a.return,
                    ye
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Rs(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rs(e);
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
        za(e, a), l & 4 && Fn(5, a);
        break;
      case 1:
        if (za(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              ke(a, a.return, s);
            }
          else {
            var n = Tl(
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
        l & 64 && qf(a), l & 512 && Wn(a, a.return);
        break;
      case 3:
        if (za(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
        za(e, a), t === null && l & 4 && Bf(a), l & 512 && Wn(a, a.return);
        break;
      case 12:
        za(e, a);
        break;
      case 31:
        za(e, a), l & 4 && Qf(e, a);
        break;
      case 13:
        za(e, a), l & 4 && Zf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = fv.bind(
          null,
          a
        ), Dv(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Ta, !l) {
          t = t !== null && t.memoizedState !== null || tt, n = Ta;
          var u = tt;
          Ta = l, (tt = t) && !u ? Ca(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : za(e, a), Ta = n, tt = u;
        }
        break;
      case 30:
        break;
      default:
        za(e, a);
    }
  }
  function Gf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Lu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, xt = !1;
  function Aa(e, t, a) {
    for (a = a.child; a !== null; )
      Xf(e, t, a), a = a.sibling;
  }
  function Xf(e, t, a) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(da, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        tt || ra(a, t), Aa(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        tt || ra(a, t);
        var l = Ze, n = xt;
        Wa(a.type) && (Ze = a.stateNode, xt = !1), Aa(
          e,
          t,
          a
        ), ui(a.stateNode), Ze = l, xt = n;
        break;
      case 5:
        tt || ra(a, t);
      case 6:
        if (l = Ze, n = xt, Ze = null, Aa(
          e,
          t,
          a
        ), Ze = l, xt = n, Ze !== null)
          if (xt)
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
        Ze !== null && (xt ? (e = Ze, qd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), gn(e)) : qd(Ze, a.stateNode));
        break;
      case 4:
        l = Ze, n = xt, Ze = a.stateNode.containerInfo, xt = !0, Aa(
          e,
          t,
          a
        ), Ze = l, xt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xa(2, a, t), tt || Xa(4, a, t), Aa(
          e,
          t,
          a
        );
        break;
      case 1:
        tt || (ra(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Hf(
          a,
          t,
          l
        )), Aa(
          e,
          t,
          a
        );
        break;
      case 21:
        Aa(
          e,
          t,
          a
        );
        break;
      case 22:
        tt = (l = tt) || a.memoizedState !== null, Aa(
          e,
          t,
          a
        ), tt = l;
        break;
      default:
        Aa(
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
        gn(e);
      } catch (a) {
        ke(t, t.return, a);
      }
    }
  }
  function Zf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        gn(e);
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
        return t === null && (t = e.stateNode = new Yf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Yf()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function cu(e, t) {
    var a = lv(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = dv.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function jt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], u = e, s = t, r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Wa(r.type)) {
                Ze = r.stateNode, xt = !1;
                break e;
              }
              break;
            case 5:
              Ze = r.stateNode, xt = !1;
              break e;
            case 3:
            case 4:
              Ze = r.stateNode.containerInfo, xt = !0;
              break e;
          }
          r = r.return;
        }
        if (Ze === null) throw Error(o(160));
        Xf(u, s, n), Ze = null, xt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Kf(t, e), t = t.sibling;
  }
  var Ft = null;
  function Kf(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        jt(t, e), St(e), l & 4 && (Xa(3, e, e.return), Fn(3, e), Xa(5, e, e.return));
        break;
      case 1:
        jt(t, e), St(e), l & 512 && (tt || a === null || ra(a, a.return)), l & 64 && Ta && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Ft;
        if (jt(t, e), St(e), l & 512 && (tt || a === null || ra(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Nn] || u[me] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), ht(u, l, a), u[me] = e, ut(u), l = u;
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
                  u[me] = e, ut(u), l = u;
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
            )) : l === null && e.stateNode !== null && cs(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        jt(t, e), St(e), l & 512 && (tt || a === null || ra(a, a.return)), a !== null && l & 4 && cs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (jt(t, e), St(e), l & 512 && (tt || a === null || ra(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            kl(n, "");
          } catch (te) {
            ke(e, e.return, te);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, cs(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (os = !0);
        break;
      case 6:
        if (jt(t, e), St(e), l & 4) {
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
        if (Eu = null, n = Ft, Ft = ju(t.containerInfo), jt(t, e), Ft = n, St(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            gn(t.containerInfo);
          } catch (te) {
            ke(e, e.return, te);
          }
        os && (os = !1, Jf(e));
        break;
      case 4:
        l = Ft, Ft = ju(
          e.stateNode.containerInfo
        ), jt(t, e), St(e), Ft = l;
        break;
      case 12:
        jt(t, e), St(e);
        break;
      case 31:
        jt(t, e), St(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cu(e, l)));
        break;
      case 13:
        jt(t, e), St(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ru = _e()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cu(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, T = Ta, O = tt;
        if (Ta = T || n, tt = O || m, jt(t, e), tt = O, Ta = T, St(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || m || Ta || tt || Al(e)), a = null, t = e; ; ) {
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
                  n ? Hd(C, !0) : Hd(m.stateNode, !1);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, cu(e, a))));
        break;
      case 19:
        jt(t, e), St(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        jt(t, e), St(e);
    }
  }
  function St(e) {
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
            var n = a.stateNode, u = ss(e);
            uu(e, u, n);
            break;
          case 5:
            var s = a.stateNode;
            a.flags & 32 && (kl(s, ""), a.flags &= -33);
            var r = ss(e);
            uu(e, r, s);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, T = ss(e);
            rs(
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
  function Jf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Jf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function za(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Vf(e, t.alternate, t), t = t.sibling;
  }
  function Al(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xa(4, t, t.return), Al(t);
          break;
        case 1:
          ra(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Hf(
            t,
            t.return,
            a
          ), Al(t);
          break;
        case 27:
          ui(t.stateNode);
        case 26:
        case 5:
          ra(t, t.return), Al(t);
          break;
        case 22:
          t.memoizedState === null && Al(t);
          break;
        case 30:
          Al(t);
          break;
        default:
          Al(t);
      }
      e = e.sibling;
    }
  }
  function Ca(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ca(
            n,
            u,
            a
          ), Fn(4, u);
          break;
        case 1:
          if (Ca(
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
          a && s & 64 && qf(u), Wn(u, u.return);
          break;
        case 27:
          Lf(u);
        case 26:
        case 5:
          Ca(
            n,
            u,
            a
          ), a && l === null && s & 4 && Bf(u), Wn(u, u.return);
          break;
        case 12:
          Ca(
            n,
            u,
            a
          );
          break;
        case 31:
          Ca(
            n,
            u,
            a
          ), a && s & 4 && Qf(n, u);
          break;
        case 13:
          Ca(
            n,
            u,
            a
          ), a && s & 4 && Zf(n, u);
          break;
        case 22:
          u.memoizedState === null && Ca(
            n,
            u,
            a
          ), Wn(u, u.return);
          break;
        case 30:
          break;
        default:
          Ca(
            n,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function fs(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Hn(a));
  }
  function ds(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Hn(e));
  }
  function Wt(e, t, a, l) {
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
        Wt(
          e,
          t,
          a,
          l
        ), n & 2048 && Fn(9, t);
        break;
      case 1:
        Wt(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Wt(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Hn(e)));
        break;
      case 12:
        if (n & 2048) {
          Wt(
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
          Wt(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Wt(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Wt(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Wt(
          e,
          t,
          a,
          l
        ) : In(e, t) : u._visibility & 2 ? Wt(
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
        )), n & 2048 && fs(s, t);
        break;
      case 24:
        Wt(
          e,
          t,
          a,
          l
        ), n & 2048 && ds(t.alternate, t);
        break;
      default:
        Wt(
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
          ), Fn(8, s);
          break;
        case 23:
          break;
        case 22:
          var O = s.stateNode;
          s.memoizedState !== null ? O._visibility & 2 ? un(
            u,
            s,
            r,
            m,
            n
          ) : In(
            u,
            s
          ) : (O._visibility |= 2, un(
            u,
            s,
            r,
            m,
            n
          )), n && T & 2048 && fs(
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
          ), n && T & 2048 && ds(s.alternate, s);
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
  function In(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            In(a, l), n & 2048 && fs(
              l.alternate,
              l
            );
            break;
          case 24:
            In(a, l), n & 2048 && ds(l.alternate, l);
            break;
          default:
            In(a, l);
        }
        t = t.sibling;
      }
  }
  var Pn = 8192;
  function cn(e, t, a) {
    if (e.subtreeFlags & Pn)
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
        ), e.flags & Pn && e.memoizedState !== null && Gv(
          a,
          Ft,
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
        var l = Ft;
        Ft = ju(e.stateNode.containerInfo), cn(
          e,
          t,
          a
        ), Ft = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Pn, Pn = 16777216, cn(
          e,
          t,
          a
        ), Pn = l) : cn(
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
  function ei(e) {
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
        ei(e), e.flags & 2048 && Xa(9, e, e.return);
        break;
      case 3:
        ei(e);
        break;
      case 12:
        ei(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, su(e)) : ei(e);
        break;
      default:
        ei(e);
    }
  }
  function su(e) {
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
          Xa(8, t, t.return), su(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, su(t));
          break;
        default:
          su(t);
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
          Hn(a.memoizedState.cache);
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
  var nv = {
    getCacheForType: function(e) {
      var t = ft(Ie), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ft(Ie).controller.signal;
    }
  }, iv = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, Ge = null, Te = null, ze = 0, Be = 0, wt = null, Qa = !1, sn = !1, hs = !1, wa = 0, Je = 0, Za = 0, zl = 0, ms = 0, Dt = 0, rn = 0, ti = null, Et = null, vs = !1, ru = 0, ed = 0, ou = 1 / 0, fu = null, Ka = null, at = 0, Ja = null, on = null, Da = 0, ys = 0, gs = null, td = null, ai = 0, ps = null;
  function Mt() {
    return (qe & 2) !== 0 && ze !== 0 ? ze & -ze : g.T !== null ? Ns() : ie();
  }
  function ad() {
    if (Dt === 0)
      if ((ze & 536870912) === 0 || we) {
        var e = Ml;
        Ml <<= 1, (Ml & 3932160) === 0 && (Ml = 262144), Dt = e;
      } else Dt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), Dt;
  }
  function Nt(e, t, a) {
    (e === Ge && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (fn(e, 0), $a(
      e,
      ze,
      Dt,
      !1
    )), fl(e, a), ((qe & 2) === 0 || e !== Ge) && (e === Ge && ((qe & 2) === 0 && (zl |= a), Je === 4 && $a(
      e,
      ze,
      Dt,
      !1
    )), oa(e));
  }
  function ld(e, t, a) {
    if ((qe & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ua(e, t), n = l ? sv(e, t) : xs(e, t, !0), u = l;
    do {
      if (n === 0) {
        sn && !l && $a(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !uv(a)) {
          n = xs(e, t, !1), u = !1;
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
              n = ti;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (fn(r, s).flags |= 256), s = xs(
                r,
                s,
                !1
              ), s !== 2) {
                if (hs && !m) {
                  r.errorRecoveryDisabledLanes |= u, zl |= u, n = 4;
                  break e;
                }
                u = Et, Et = n, u !== null && (Et === null ? Et = u : Et.push.apply(
                  Et,
                  u
                ));
              }
              n = s;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          fn(e, 0), $a(e, t, 0, !0);
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
                Dt,
                !Qa
              );
              break e;
            case 2:
              Et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = ru + 300 - _e(), 10 < n)) {
            if ($a(
              l,
              t,
              Dt,
              !Qa
            ), rl(l, 0, !0) !== 0) break e;
            Da = t, l.timeoutHandle = Ud(
              nd.bind(
                null,
                l,
                a,
                Et,
                fu,
                vs,
                t,
                Dt,
                zl,
                rn,
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
          nd(
            l,
            a,
            Et,
            fu,
            vs,
            t,
            Dt,
            zl,
            rn,
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
    oa(e);
  }
  function nd(e, t, a, l, n, u, s, r, m, T, O, H, z, C) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ya
      }, Ff(
        t,
        u,
        H
      );
      var te = (u & 62914560) === u ? ru - _e() : (u & 4194048) === u ? ed - _e() : 0;
      if (te = Xv(
        H,
        te
      ), te !== null) {
        Da = u, e.cancelPendingCommit = te(
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
  function uv(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Tt(u(), n)) return !1;
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
    t &= ~ms, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - vt(n), s = 1 << u;
      l[u] = -1, n &= ~s;
    }
    a !== 0 && bi(e, a, t);
  }
  function du() {
    return (qe & 6) === 0 ? (li(0), !1) : !0;
  }
  function bs() {
    if (Te !== null) {
      if (Be === 0)
        var e = Te.return;
      else
        e = Te, xa = bl = null, Rc(e), en = null, kn = 0, e = Te;
      for (; e !== null; )
        Rf(e.alternate, e), e = e.return;
      Te = null;
    }
  }
  function fn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Tv(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Da = 0, bs(), Ge = e, Te = a = pa(e.current, null), ze = t, Be = 0, wt = null, Qa = !1, sn = ua(e, t), hs = !1, rn = Dt = ms = zl = Za = Je = 0, Et = ti = null, vs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - vt(l), u = 1 << n;
        t |= e[n], l &= ~u;
      }
    return wa = t, Oi(), a;
  }
  function id(e, t) {
    Se = null, g.H = Kn, t === Pl || t === Yi ? (t = xo(), Be = 3) : t === Ec ? (t = xo(), Be = 4) : Be = t === Wc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, wt = t, Te === null && (Je = 1, tu(
      e,
      Bt(t, e.current)
    ));
  }
  function ud() {
    var e = zt.current;
    return e === null ? !0 : (ze & 4194048) === ze ? Vt === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === Vt : !1;
  }
  function cd() {
    var e = g.H;
    return g.H = Kn, e === null ? Kn : e;
  }
  function sd() {
    var e = g.A;
    return g.A = nv, e;
  }
  function hu() {
    Je = 4, Qa || (ze & 4194048) !== ze && zt.current !== null || (sn = !0), (Za & 134217727) === 0 && (zl & 134217727) === 0 || Ge === null || $a(
      Ge,
      ze,
      Dt,
      !1
    );
  }
  function xs(e, t, a) {
    var l = qe;
    qe |= 2;
    var n = cd(), u = sd();
    (Ge !== e || ze !== t) && (fu = null, fn(e, t)), t = !1;
    var s = Je;
    e: do
      try {
        if (Be !== 0 && Te !== null) {
          var r = Te, m = wt;
          switch (Be) {
            case 8:
              bs(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var T = Be;
              if (Be = 0, wt = null, dn(e, r, m, T), a && sn) {
                s = 0;
                break e;
              }
              break;
            default:
              T = Be, Be = 0, wt = null, dn(e, r, m, T);
          }
        }
        cv(), s = Je;
        break;
      } catch (O) {
        id(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, xa = bl = null, qe = l, g.H = n, g.A = u, Te === null && (Ge = null, ze = 0, Oi()), s;
  }
  function cv() {
    for (; Te !== null; ) rd(Te);
  }
  function sv(e, t) {
    var a = qe;
    qe |= 2;
    var l = cd(), n = sd();
    Ge !== e || ze !== t ? (fu = null, ou = _e() + 500, fn(e, t)) : sn = ua(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && Te !== null) {
          t = Te;
          var u = wt;
          t: switch (Be) {
            case 1:
              Be = 0, wt = null, dn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (po(u)) {
                Be = 0, wt = null, od(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ge !== e || (Be = 7), oa(e);
              }, u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              po(u) ? (Be = 0, wt = null, od(t)) : (Be = 0, wt = null, dn(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (Te.tag) {
                case 26:
                  s = Te.memoizedState;
                case 5:
                case 27:
                  var r = Te;
                  if (s ? $d(s) : r.stateNode.complete) {
                    Be = 0, wt = null;
                    var m = r.sibling;
                    if (m !== null) Te = m;
                    else {
                      var T = r.return;
                      T !== null ? (Te = T, mu(T)) : Te = null;
                    }
                    break t;
                  }
              }
              Be = 0, wt = null, dn(e, t, u, 5);
              break;
            case 6:
              Be = 0, wt = null, dn(e, t, u, 6);
              break;
            case 8:
              bs(), Je = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        rv();
        break;
      } catch (O) {
        id(e, O);
      }
    while (!0);
    return xa = bl = null, g.H = l, g.A = n, qe = a, Te !== null ? 0 : (Ge = null, ze = 0, Oi(), Je);
  }
  function rv() {
    for (; Te !== null && !fa(); )
      rd(Te);
  }
  function rd(e) {
    var t = Of(e.alternate, e, wa);
    e.memoizedProps = e.pendingProps, t === null ? mu(e) : Te = t;
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
          ze
        );
        break;
      case 11:
        t = Af(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        Rc(t);
      default:
        Rf(a, t), t = Te = uo(t, wa), t = Of(a, t, wa);
    }
    e.memoizedProps = e.pendingProps, t === null ? mu(e) : Te = t;
  }
  function dn(e, t, a, l) {
    xa = bl = null, Rc(t), en = null, kn = 0;
    var n = t.return;
    try {
      if (Wm(
        e,
        n,
        t,
        a,
        ze
      )) {
        Je = 1, tu(
          e,
          Bt(a, e.current)
        ), Te = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw Te = n, u;
      Je = 1, tu(
        e,
        Bt(a, e.current)
      ), Te = null;
      return;
    }
    t.flags & 32768 ? (we || l === 1 ? e = !0 : sn || (ze & 536870912) !== 0 ? e = !1 : (Qa = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = zt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), fd(t, e)) : mu(t);
  }
  function mu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fd(
          t,
          Qa
        );
        return;
      }
      e = t.return;
      var a = ev(
        t.alternate,
        t,
        wa
      );
      if (a !== null) {
        Te = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function fd(e, t) {
    do {
      var a = tv(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Te = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Te = e;
        return;
      }
      Te = e = a;
    } while (e !== null);
    Je = 6, Te = null;
  }
  function dd(e, t, a, l, n, u, s, r, m) {
    e.cancelPendingCommit = null;
    do
      vu();
    while (at !== 0);
    if ((qe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= sc, ku(
        e,
        a,
        u,
        s,
        r,
        m
      ), e === Ge && (Te = Ge = null, ze = 0), on = t, Ja = e, Da = a, ys = u, gs = n, td = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, hv(cl, function() {
        return gd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = g.T, g.T = null, n = B.p, B.p = 2, s = qe, qe |= 4;
        try {
          av(e, t, a);
        } finally {
          qe = s, B.p = n, g.T = l;
        }
      }
      at = 1, hd(), md(), vd();
    }
  }
  function hd() {
    if (at === 1) {
      at = 0;
      var e = Ja, t = on, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null;
        var l = B.p;
        B.p = 2;
        var n = qe;
        qe |= 4;
        try {
          Kf(t, e);
          var u = Ms, s = Wr(e.containerInfo), r = u.focusedElem, m = u.selectionRange;
          if (s !== r && r && r.ownerDocument && Fr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && lc(r)) {
              var T = m.start, O = m.end;
              if (O === void 0 && (O = T), "selectionStart" in r)
                r.selectionStart = T, r.selectionEnd = Math.min(
                  O,
                  r.value.length
                );
              else {
                var H = r.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var C = z.getSelection(), te = r.textContent.length, ye = Math.min(m.start, te), Ve = m.end === void 0 ? ye : Math.min(m.end, te);
                  !C.extend && ye > Ve && (s = Ve, Ve = ye, ye = s);
                  var x = $r(
                    r,
                    ye
                  ), v = $r(
                    r,
                    Ve
                  );
                  if (x && v && (C.rangeCount !== 1 || C.anchorNode !== x.node || C.anchorOffset !== x.offset || C.focusNode !== v.node || C.focusOffset !== v.offset)) {
                    var _ = H.createRange();
                    _.setStart(x.node, x.offset), C.removeAllRanges(), ye > Ve ? (C.addRange(_), C.extend(v.node, v.offset)) : (_.setEnd(v.node, v.offset), C.addRange(_));
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
              var q = H[r];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Au = !!Ds, Ms = Ds = null;
        } finally {
          qe = n, B.p = l, g.T = a;
        }
      }
      e.current = t, at = 2;
    }
  }
  function md() {
    if (at === 2) {
      at = 0;
      var e = Ja, t = on, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = g.T, g.T = null;
        var l = B.p;
        B.p = 2;
        var n = qe;
        qe |= 4;
        try {
          Vf(e, t.alternate, t);
        } finally {
          qe = n, B.p = l, g.T = a;
        }
      }
      at = 3;
    }
  }
  function vd() {
    if (at === 4 || at === 3) {
      at = 0, ul();
      var e = Ja, t = on, a = Da, l = td;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, on = Ja = null, yd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ka = null), L(a), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function")
        try {
          rt.onCommitFiberRoot(
            da,
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
      (Da & 3) !== 0 && vu(), oa(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === ps ? ai++ : (ai = 0, ps = e) : ai = 0, li(0);
    }
  }
  function yd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Hn(t)));
  }
  function vu() {
    return hd(), md(), vd(), gd();
  }
  function gd() {
    if (at !== 5) return !1;
    var e = Ja, t = ys;
    ys = 0;
    var a = L(Da), l = g.T, n = B.p;
    try {
      B.p = 32 > a ? 32 : a, g.T = null, a = gs, gs = null;
      var u = Ja, s = Da;
      if (at = 0, on = Ja = null, Da = 0, (qe & 6) !== 0) throw Error(o(331));
      var r = qe;
      if (qe |= 4, If(u.current), $f(
        u,
        u.current,
        s,
        a
      ), qe = r, li(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function")
        try {
          rt.onPostCommitFiberRoot(da, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = n, g.T = l, yd(e, t);
    }
  }
  function pd(e, t, a) {
    t = Bt(a, t), t = Fc(e.stateNode, t, 2), e = Ya(e, t, 2), e !== null && (fl(e, 2), oa(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ka === null || !Ka.has(l))) {
            e = Bt(a, e), a = bf(2), l = Ya(t, a, 2), l !== null && (xf(
              a,
              l,
              t,
              e
            ), fl(l, 2), oa(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function js(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new iv();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (hs = !0, n.add(a), e = ov.bind(null, e, t, a), t.then(e, e));
  }
  function ov(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ge === e && (ze & a) === a && (Je === 4 || Je === 3 && (ze & 62914560) === ze && 300 > _e() - ru ? (qe & 2) === 0 && fn(e, 0) : ms |= a, rn === ze && (rn = 0)), oa(e);
  }
  function bd(e, t) {
    t === 0 && (t = pi()), e = yl(e, t), e !== null && (fl(e, t), oa(e));
  }
  function fv(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), bd(e, a);
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
    l !== null && l.delete(t), bd(e, a);
  }
  function hv(e, t) {
    return Ot(e, t);
  }
  var yu = null, hn = null, Ss = !1, gu = !1, Es = !1, Fa = 0;
  function oa(e) {
    e !== hn && e.next === null && (hn === null ? yu = hn = e : hn = hn.next = e), gu = !0, Ss || (Ss = !0, vv());
  }
  function li(e, t) {
    if (!Es && gu) {
      Es = !0;
      do
        for (var a = !1, l = yu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var s = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - vt(42 | e) + 1) - 1, u &= n & ~(s & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Ed(l, u));
          } else
            u = ze, u = rl(
              l,
              l === Ge ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || ua(l, u) || (a = !0, Ed(l, u));
          l = l.next;
        }
      while (a);
      Es = !1;
    }
  }
  function mv() {
    xd();
  }
  function xd() {
    gu = Ss = !1;
    var e = 0;
    Fa !== 0 && _v() && (e = Fa);
    for (var t = _e(), a = null, l = yu; l !== null; ) {
      var n = l.next, u = jd(l, t);
      u === 0 ? (l.next = null, a === null ? yu = n : a.next = n, n === null && (hn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (gu = !0)), l = n;
    }
    at !== 0 && at !== 5 || li(e), Fa !== 0 && (Fa = 0);
  }
  function jd(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - vt(u), r = 1 << s, m = n[s];
      m === -1 ? ((r & a) === 0 || (r & l) !== 0) && (n[s] = En(r, t)) : m <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Ge, a = ze, a = rl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && st(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ua(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && st(l), L(a)) {
        case 2:
        case 8:
          a = xn;
          break;
        case 32:
          a = cl;
          break;
        case 268435456:
          a = sl;
          break;
        default:
          a = cl;
      }
      return l = Sd.bind(null, e), a = Ot(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && st(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Sd(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (vu() && e.callbackNode !== a)
      return null;
    var l = ze;
    return l = rl(
      e,
      e === Ge ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ld(e, l, t), jd(e, _e()), e.callbackNode != null && e.callbackNode === a ? Sd.bind(null, e) : null);
  }
  function Ed(e, t) {
    if (vu()) return null;
    ld(e, t, !0);
  }
  function vv() {
    Av(function() {
      (qe & 6) !== 0 ? Ot(
        bn,
        mv
      ) : xd();
    });
  }
  function Ns() {
    if (Fa === 0) {
      var e = Wl;
      e === 0 && (e = ha, ha <<= 1, (ha & 261888) === 0 && (ha = 256)), Fa = e;
    }
    return Fa;
  }
  function Nd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _i("" + e);
  }
  function _d(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function yv(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = Nd(
        (n[ee] || null).action
      ), s = l.submitter;
      s && (t = (t = s[ee] || null) ? Nd(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var r = new Ci(
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
                  var m = s ? _d(n, s) : new FormData(n);
                  Xc(
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
                typeof u == "function" && (r.preventDefault(), m = s ? _d(n, s) : new FormData(n), Xc(
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
  for (var _s = 0; _s < cc.length; _s++) {
    var Ts = cc[_s], gv = Ts.toLowerCase(), pv = Ts[0].toUpperCase() + Ts.slice(1);
    $t(
      gv,
      "on" + pv
    );
  }
  $t(eo, "onAnimationEnd"), $t(to, "onAnimationIteration"), $t(ao, "onAnimationStart"), $t("dblclick", "onDoubleClick"), $t("focusin", "onFocus"), $t("focusout", "onBlur"), $t(Um, "onTransitionRun"), $t(Rm, "onTransitionStart"), $t(qm, "onTransitionCancel"), $t(lo, "onTransitionEnd"), Hl("onMouseEnter", ["mouseout", "mouseover"]), Hl("onMouseLeave", ["mouseout", "mouseover"]), Hl("onPointerEnter", ["pointerout", "pointerover"]), Hl("onPointerLeave", ["pointerout", "pointerover"]), dl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), bv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni)
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
            } catch (O) {
              Mi(O);
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
              Mi(O);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function Ae(e, t) {
    var a = t[Jt];
    a === void 0 && (a = t[Jt] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Ad(t, e, 2, !1), a.add(l));
  }
  function As(e, t, a) {
    var l = 0;
    t && (l |= 4), Ad(
      a,
      e,
      l,
      t
    );
  }
  var pu = "_reactListening" + Math.random().toString(36).slice(2);
  function zs(e) {
    if (!e[pu]) {
      e[pu] = !0, pr.forEach(function(a) {
        a !== "selectionchange" && (bv.has(a) || As(a, !1, e), As(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pu] || (t[pu] = !0, As("selectionchange", !1, t));
    }
  }
  function Ad(e, t, a, l) {
    switch (ah(t)) {
      case 2:
        var n = Kv;
        break;
      case 8:
        n = Jv;
        break;
      default:
        n = Gs;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !Ju || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function Cs(e, t, a, l, n) {
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
      var T = u, O = Zu(a), H = [];
      e: {
        var z = no.get(e);
        if (z !== void 0) {
          var C = Ci, te = e;
          switch (e) {
            case "keypress":
              if (Ai(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = dm;
              break;
            case "focusin":
              te = "focus", C = Iu;
              break;
            case "focusout":
              te = "blur", C = Iu;
              break;
            case "beforeblur":
            case "afterblur":
              C = Iu;
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
              C = em;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = vm;
              break;
            case eo:
            case to:
            case ao:
              C = lm;
              break;
            case lo:
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
              C = Rr;
              break;
            case "toggle":
            case "beforetoggle":
              C = jm;
          }
          var ye = (t & 4) !== 0, Ve = !ye && (e === "scroll" || e === "scrollend"), x = ye ? z !== null ? z + "Capture" : null : z;
          ye = [];
          for (var v = T, _; v !== null; ) {
            var q = v;
            if (_ = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || _ === null || x === null || (q = Tn(v, x), q != null && ye.push(
              ii(v, q, _)
            )), Ve) break;
            v = v.return;
          }
          0 < ye.length && (z = new C(
            z,
            te,
            null,
            a,
            O
          ), H.push({ event: z, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", z && a !== Qu && (te = a.relatedTarget || a.fromElement) && (Ul(te) || te[it]))
            break e;
          if ((C || z) && (z = O.window === O ? O : (z = O.ownerDocument) ? z.defaultView || z.parentWindow : window, C ? (te = a.relatedTarget || a.toElement, C = T, te = te ? Ul(te) : null, te !== null && (Ve = j(te), ye = te.tag, te !== Ve || ye !== 5 && ye !== 27 && ye !== 6) && (te = null)) : (C = null, te = T), C !== te)) {
            if (ye = Or, q = "onMouseLeave", x = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (ye = Rr, q = "onPointerLeave", x = "onPointerEnter", v = "pointer"), Ve = C == null ? z : _n(C), _ = te == null ? z : _n(te), z = new ye(
              q,
              v + "leave",
              C,
              a,
              O
            ), z.target = Ve, z.relatedTarget = _, q = null, Ul(O) === T && (ye = new ye(
              x,
              v + "enter",
              te,
              a,
              O
            ), ye.target = _, ye.relatedTarget = Ve, q = ye), Ve = q, C && te)
              t: {
                for (ye = xv, x = C, v = te, _ = 0, q = x; q; q = ye(q))
                  _++;
                q = 0;
                for (var he = v; he; he = ye(he))
                  q++;
                for (; 0 < _ - q; )
                  x = ye(x), _--;
                for (; 0 < q - _; )
                  v = ye(v), q--;
                for (; _--; ) {
                  if (x === v || v !== null && x === v.alternate) {
                    ye = x;
                    break t;
                  }
                  x = ye(x), v = ye(v);
                }
                ye = null;
              }
            else ye = null;
            C !== null && zd(
              H,
              z,
              C,
              ye,
              !1
            ), te !== null && Ve !== null && zd(
              H,
              Ve,
              te,
              ye,
              !0
            );
          }
        }
        e: {
          if (z = T ? _n(T) : window, C = z.nodeName && z.nodeName.toLowerCase(), C === "select" || C === "input" && z.type === "file")
            var Ue = Gr;
          else if (Yr(z))
            if (Xr)
              Ue = Dm;
            else {
              Ue = Cm;
              var ue = zm;
            }
          else
            C = z.nodeName, !C || C.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? T && Xu(T.elementType) && (Ue = Gr) : Ue = wm;
          if (Ue && (Ue = Ue(e, T))) {
            Vr(
              H,
              Ue,
              a,
              O
            );
            break e;
          }
          ue && ue(e, z, T), e === "focusout" && T && z.type === "number" && T.memoizedProps.value != null && Gu(z, "number", z.value);
        }
        switch (ue = T ? _n(T) : window, e) {
          case "focusin":
            (Yr(ue) || ue.contentEditable === "true") && (Gl = ue, nc = T, Un = null);
            break;
          case "focusout":
            Un = nc = Gl = null;
            break;
          case "mousedown":
            ic = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ic = !1, Ir(H, a, O);
            break;
          case "selectionchange":
            if (Om) break;
          case "keydown":
          case "keyup":
            Ir(H, a, O);
        }
        var Ee;
        if (ec)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Vl ? kr(e, a) && (Ce = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (qr && a.locale !== "ko" && (Vl || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Vl && (Ee = Dr()) : (Ua = O, $u = "value" in Ua ? Ua.value : Ua.textContent, Vl = !0)), ue = bu(T, Ce), 0 < ue.length && (Ce = new Ur(
          Ce,
          e,
          null,
          a,
          O
        ), H.push({ event: Ce, listeners: ue }), Ee ? Ce.data = Ee : (Ee = Lr(a), Ee !== null && (Ce.data = Ee)))), (Ee = Em ? Nm(e, a) : _m(e, a)) && (Ce = bu(T, "onBeforeInput"), 0 < Ce.length && (ue = new Ur(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          O
        ), H.push({
          event: ue,
          listeners: Ce
        }), ue.data = Ee)), yv(
          H,
          e,
          T,
          a,
          O
        );
      }
      Td(H, t);
    });
  }
  function ii(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function bu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Tn(e, a), n != null && l.unshift(
        ii(e, n, u)
      ), n = Tn(e, t), n != null && l.push(
        ii(e, n, u)
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
  function zd(e, t, a, l, n) {
    for (var u = t._reactName, s = []; a !== null && a !== l; ) {
      var r = a, m = r.alternate, T = r.stateNode;
      if (r = r.tag, m !== null && m === l) break;
      r !== 5 && r !== 26 && r !== 27 || T === null || (m = T, n ? (T = Tn(a, u), T != null && s.unshift(
        ii(a, T, m)
      )) : n || (T = Tn(a, u), T != null && s.push(
        ii(a, T, m)
      ))), a = a.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var jv = /\r\n?/g, Sv = /\u0000|\uFFFD/g;
  function Cd(e) {
    return (typeof e == "string" ? e : "" + e).replace(jv, `
`).replace(Sv, "");
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
        Ei(e, "class", l);
        break;
      case "tabIndex":
        Ei(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ei(e, a, l);
        break;
      case "style":
        zr(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Ei(e, "data", l);
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
        l = _i("" + l), e.setAttribute(a, l);
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
        l = _i("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = ya);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
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
        a = _i("" + l), e.setAttributeNS(
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
        Ae("beforetoggle", e), Ae("toggle", e), Si(e, "popover", l);
        break;
      case "xlinkActuate":
        va(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        va(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        va(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        va(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        va(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        va(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        va(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        va(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        va(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Si(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Fh.get(a) || a, Si(e, a, l));
    }
  }
  function ws(e, t, a, l, n, u) {
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
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ya);
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
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[ee] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Si(e, a, l);
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
        Ae("error", e), Ae("load", e);
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
        Ae("invalid", e);
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
        Ae("invalid", e), l = s = u = null;
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
        Ae("invalid", e), u = n = l = null;
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
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ni.length; l++)
          Ae(ni[l], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
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
        if (Xu(t)) {
          for (O in a)
            a.hasOwnProperty(O) && (l = a[O], l !== void 0 && ws(
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
        Vu(
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
        for (var ye in a)
          z = a[ye], a.hasOwnProperty(ye) && z != null && !l.hasOwnProperty(ye) && Ye(e, t, ye, null, l, z);
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
        if (Xu(t)) {
          for (var Ve in a)
            z = a[Ve], a.hasOwnProperty(Ve) && z !== void 0 && !l.hasOwnProperty(Ve) && ws(
              e,
              t,
              Ve,
              void 0,
              l,
              z
            );
          for (O in l)
            z = l[O], C = a[O], !l.hasOwnProperty(O) || z === C || z === void 0 && C === void 0 || ws(
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
  function Nv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, s = n.initiatorType, r = n.duration;
        if (u && r && Dd(s)) {
          for (s = 0, r = n.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], T = m.startTime;
            if (T > r) break;
            var O = m.transferSize, H = m.initiatorType;
            O && Dd(H) && (m = m.responseEnd, s += O * (m < r ? 1 : (r - T) / (m - T)));
          }
          if (--l, t += 8 * (u + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ds = null, Ms = null;
  function xu(e) {
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
  function Os(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Us = null;
  function _v() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Us ? !1 : (Us = e, !0) : (Us = null, !1);
  }
  var Ud = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, Av = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(e) {
    return Rd.resolve(null).then(e).catch(zv);
  } : Ud;
  function zv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Wa(e) {
    return e === "head";
  }
  function qd(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(n), gn(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          ui(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, ui(a);
          for (var u = a.firstChild; u; ) {
            var s = u.nextSibling, r = u.nodeName;
            u[Nn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = s;
          }
        } else
          a === "body" && ui(e.ownerDocument.body);
      a = n;
    } while (a);
    gn(t);
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
  function Rs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rs(a), Lu(a);
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
        if (!e[Nn])
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
      if (e = Gt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function wv(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function qs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hs(e) {
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
  function Gt(e) {
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
  var Bs = null;
  function kd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Gt(e.nextSibling);
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
    switch (t = xu(a), e) {
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
  function ui(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Lu(e);
  }
  var Xt = /* @__PURE__ */ new Map(), Vd = /* @__PURE__ */ new Set();
  function ju(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ma = B.d;
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
    var e = Ma.f(), t = du();
    return e || t;
  }
  function Ov(e) {
    var t = Rl(e);
    t !== null && t.tag === 5 && t.type === "form" ? nf(t) : Ma.r(e);
  }
  var mn = typeof document > "u" ? null : document;
  function Gd(e, t, a) {
    var l = mn;
    if (l && typeof t == "string" && t) {
      var n = qt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Vd.has(n) || (Vd.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), ht(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Uv(e) {
    Ma.D(e), Gd("dns-prefetch", e, null);
  }
  function Rv(e, t) {
    Ma.C(e, t), Gd("preconnect", e, t);
  }
  function qv(e, t, a) {
    Ma.L(e, t, a);
    var l = mn;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + qt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + qt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + qt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = vn(e);
          break;
        case "script":
          u = yn(e);
      }
      Xt.has(u) || (e = A(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Xt.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(ci(u)) || t === "script" && l.querySelector(si(u)) || (t = l.createElement("link"), ht(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Hv(e, t) {
    Ma.m(e, t);
    var a = mn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + qt(l) + '"][href="' + qt(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = yn(e);
      }
      if (!Xt.has(u) && (e = A({ rel: "modulepreload", href: e }, t), Xt.set(u, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(si(u)))
              return;
        }
        l = a.createElement("link"), ht(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function Bv(e, t, a) {
    Ma.S(e, t, a);
    var l = mn;
    if (l && e) {
      var n = ql(l).hoistableStyles, u = vn(e);
      t = t || "default";
      var s = n.get(u);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = l.querySelector(
          ci(u)
        ))
          r.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Xt.get(u)) && ks(e, a);
          var m = s = l.createElement("link");
          ut(m), ht(m, "link", e), m._p = new Promise(function(T, O) {
            m.onload = T, m.onerror = O;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Su(s, t, l);
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
    Ma.X(e, t);
    var a = mn;
    if (a && e) {
      var l = ql(a).hoistableScripts, n = yn(e), u = l.get(n);
      u || (u = a.querySelector(si(n)), u || (e = A({ src: e, async: !0 }, t), (t = Xt.get(n)) && Ls(e, t), u = a.createElement("script"), ut(u), ht(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Lv(e, t) {
    Ma.M(e, t);
    var a = mn;
    if (a && e) {
      var l = ql(a).hoistableScripts, n = yn(e), u = l.get(n);
      u || (u = a.querySelector(si(n)), u || (e = A({ src: e, async: !0, type: "module" }, t), (t = Xt.get(n)) && Ls(e, t), u = a.createElement("script"), ut(u), ht(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Xd(e, t, a, l) {
    var n = (n = je.current) ? ju(n) : null;
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
            ci(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Xt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Xt.set(e, a), u || Yv(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yn(a), a = ql(
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
    return 'href="' + qt(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qd(e) {
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
    }), ht(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function yn(e) {
    return '[src="' + qt(e) + '"]';
  }
  function si(e) {
    return "script[async]" + e;
  }
  function Zd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + qt(a.href) + '"]'
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
          ), ut(l), ht(l, "style", n), Su(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = vn(a.href);
          var u = e.querySelector(
            ci(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ut(u), u;
          l = Qd(a), (n = Xt.get(n)) && ks(l, n), u = (e.ownerDocument || e).createElement("link"), ut(u);
          var s = u;
          return s._p = new Promise(function(r, m) {
            s.onload = r, s.onerror = m;
          }), ht(u, "link", l), t.state.loading |= 4, Su(u, a.precedence, e), t.instance = u;
        case "script":
          return u = yn(a.src), (n = e.querySelector(
            si(u)
          )) ? (t.instance = n, ut(n), n) : (l = a, (n = Xt.get(u)) && (l = A({}, a), Ls(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), ut(n), ht(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Su(l, a.precedence, e));
    return t.instance;
  }
  function Su(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, s = 0; s < l.length; s++) {
      var r = l[s];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function ks(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ls(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Eu = null;
  function Kd(e, t, a) {
    if (Eu === null) {
      var l = /* @__PURE__ */ new Map(), n = Eu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Eu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[Nn] || u[me] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function $d(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Gv(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = vn(l.href), u = t.querySelector(
          ci(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Nu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, ut(u);
          return;
        }
        u = t.ownerDocument || t, l = Qd(l), (n = Xt.get(n)) && ks(l, n), u = u.createElement("link"), ut(u);
        var s = u;
        s._p = new Promise(function(r, m) {
          s.onload = r, s.onerror = m;
        }), ht(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Nu.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ys = 0;
  function Xv(e, t) {
    return e.stylesheets && e.count === 0 && Tu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Tu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ys === 0 && (Ys = 62500 * Nv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ys ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Nu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Tu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var _u = null;
  function Tu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, _u = /* @__PURE__ */ new Map(), t.forEach(Qv, e), _u = null, Nu.call(e));
  }
  function Qv(e, t) {
    if (!(t.state.loading & 4)) {
      var a = _u.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), _u.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var s = n[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), u = a.get(s) || l, u === l && a.set(null, n), a.set(s, n), this.count++, l = Nu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ri = {
    $$typeof: ne,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function Zv(e, t, a, l, n, u, s, r, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ol(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.hiddenUpdates = ol(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fd(e, t, a, l, n, u, s, r, m, T, O, H) {
    return e = new Zv(
      e,
      t,
      a,
      s,
      m,
      T,
      O,
      H,
      r
    ), t = 1, u === !0 && (t |= 24), u = At(3, null, null, t), e.current = u, u.stateNode = e, t = xc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Nc(u), e;
  }
  function Wd(e) {
    return e ? (e = Zl, e) : Zl;
  }
  function Id(e, t, a, l, n, u) {
    n = Wd(n), l.context === null ? l.context = n : l.pendingContext = n, l = La(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Ya(e, l, t), a !== null && (Nt(a, e, t), Yn(a, e, t));
  }
  function Pd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Vs(e, t) {
    Pd(e, t), (e = e.alternate) && Pd(e, t);
  }
  function eh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = yl(e, 67108864);
      t !== null && Nt(t, e, 67108864), Vs(e, 67108864);
    }
  }
  function th(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mt();
      t = M(t);
      var a = yl(e, t);
      a !== null && Nt(a, e, t), Vs(e, t);
    }
  }
  var Au = !0;
  function Kv(e, t, a, l) {
    var n = g.T;
    g.T = null;
    var u = B.p;
    try {
      B.p = 2, Gs(e, t, a, l);
    } finally {
      B.p = u, g.T = n;
    }
  }
  function Jv(e, t, a, l) {
    var n = g.T;
    g.T = null;
    var u = B.p;
    try {
      B.p = 8, Gs(e, t, a, l);
    } finally {
      B.p = u, g.T = n;
    }
  }
  function Gs(e, t, a, l) {
    if (Au) {
      var n = Xs(l);
      if (n === null)
        Cs(
          e,
          t,
          l,
          zu,
          a
        ), lh(e, l);
      else if (Fv(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (lh(e, l), t & 4 && -1 < $v.indexOf(e)) {
        for (; n !== null; ) {
          var u = Rl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = ia(u.pendingLanes);
                  if (s !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - vt(s);
                      r.entanglements[1] |= m, s &= ~m;
                    }
                    oa(u), (qe & 6) === 0 && (ou = _e() + 500, li(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = yl(u, 2), r !== null && Nt(r, u, 2), du(), Vs(u, 2);
            }
          if (u = Xs(l), u === null && Cs(
            e,
            t,
            l,
            zu,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        Cs(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Xs(e) {
    return e = Zu(e), Qs(e);
  }
  var zu = null;
  function Qs(e) {
    if (zu = null, e = Ul(e), e !== null) {
      var t = j(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = R(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return zu = e, null;
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
        switch (Ut()) {
          case bn:
            return 2;
          case xn:
            return 8;
          case cl:
          case Zt:
            return 32;
          case sl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zs = !1, Ia = null, Pa = null, el = null, oi = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), tl = [], $v = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lh(e, t) {
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
        oi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fi.delete(t.pointerId);
    }
  }
  function di(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Rl(t), t !== null && eh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Fv(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Ia = di(
          Ia,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Pa = di(
          Pa,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return el = di(
          el,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return oi.set(
          u,
          di(
            oi.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, fi.set(
          u,
          di(
            fi.get(u) || null,
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
      var a = j(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = p(a), t !== null) {
            e.blockedOn = t, se(e.priority, function() {
              th(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = R(a), t !== null) {
            e.blockedOn = t, se(e.priority, function() {
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
  function Cu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Xs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Qu = l, a.target.dispatchEvent(l), Qu = null;
      } else
        return t = Rl(a), t !== null && eh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function ih(e, t, a) {
    Cu(e) && a.delete(t);
  }
  function Wv() {
    Zs = !1, Ia !== null && Cu(Ia) && (Ia = null), Pa !== null && Cu(Pa) && (Pa = null), el !== null && Cu(el) && (el = null), oi.forEach(ih), fi.forEach(ih);
  }
  function wu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Wv
    )));
  }
  var Du = null;
  function uh(e) {
    Du !== e && (Du = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Du === e && (Du = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (Qs(l || a) === null)
              continue;
            break;
          }
          var u = Rl(a);
          u !== null && (e.splice(t, 3), t -= 3, Xc(
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
  function gn(e) {
    function t(m) {
      return wu(m, e);
    }
    Ia !== null && wu(Ia, e), Pa !== null && wu(Pa, e), el !== null && wu(el, e), oi.forEach(t), fi.forEach(t);
    for (var a = 0; a < tl.length; a++) {
      var l = tl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < tl.length && (a = tl[0], a.blockedOn === null); )
      nh(a), a.blockedOn === null && tl.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], s = n[ee] || null;
        if (typeof u == "function")
          s || uh(a);
        else if (s) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, s = u[ee] || null)
              r = s.formAction;
            else if (Qs(n) !== null) continue;
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
  function Ks(e) {
    this._internalRoot = e;
  }
  Mu.prototype.render = Ks.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Mt();
    Id(a, l, e, t, null, null);
  }, Mu.prototype.unmount = Ks.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Id(e.current, 2, null, e, null, null), du(), t[it] = null;
    }
  };
  function Mu(e) {
    this._internalRoot = e;
  }
  Mu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ie();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < tl.length && t !== 0 && t < tl[a].priority; a++) ;
      tl.splice(a, 0, e), a === 0 && nh(e);
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
    return e = b(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Iv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ou.isDisabled && Ou.supportsFiber)
      try {
        da = Ou.inject(
          Iv
        ), rt = Ou;
      } catch {
      }
  }
  return mi.createRoot = function(e, t) {
    if (!E(e)) throw Error(o(299));
    var a = !1, l = "", n = vf, u = yf, s = gf;
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
    ), e[it] = t.current, zs(e), new Ks(t);
  }, mi.hydrateRoot = function(e, t, a) {
    if (!E(e)) throw Error(o(299));
    var l = !1, n = "", u = vf, s = yf, r = gf, m = null;
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
    ), t.context = Wd(null), a = t.current, l = Mt(), l = M(l), n = La(l), n.callback = null, Ya(a, n, l), a = l, t.current.lanes = a, fl(t, a), oa(t), e[it] = t.current, zs(e), new Mu(t);
  }, mi.version = "19.2.8", mi;
}
var ph;
function sy() {
  if (ph) return Fs.exports;
  ph = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), Fs.exports = cy(), Fs.exports;
}
var ry = sy();
const ar = "hana.plugin.ui", lr = 1, oy = "X-Hana-Plugin-Surface-Session", fy = "pluginSurfaceSession", wh = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Cl = {
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
function bh(c) {
  return typeof c == "object" && c !== null;
}
function ll(c) {
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
    return ll("Plugin UI messages must be objects.");
  if (c.protocol !== ar)
    return ll("Plugin UI message protocol is missing or invalid.");
  if (c.version !== lr)
    return {
      ok: !1,
      error: {
        code: wh.UNSUPPORTED_VERSION,
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
    if (!bh(c.error))
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
class jh extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(f) {
    super(f.message), this.code = f.code, this.details = f.details;
  }
}
let Sh = 0;
function hy() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Sh += 1, `hana-plugin-${Date.now()}-${Sh}`);
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
function Eh(c, f, d) {
  return !(c.source !== f || d !== "*" && c.origin !== d);
}
function py(c) {
  return typeof c == "string" ? { url: c } : c;
}
function by(c) {
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
  const d = Dh(c), o = xy(f);
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
  for (const N of j) {
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
  return `${j.map((N) => encodeURIComponent(decodeURIComponent(N))).join("/")}${p.search}`;
}
function Mh(c, f) {
  const d = Dh(c), o = Ey(f);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/${o}`;
}
function Ny(c, f, d) {
  const o = Sy(c);
  if (!o)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const E = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!E)
    throw new Error("hana.api.fetch requires window.fetch.");
  const j = d ?? {}, p = new Headers(j.headers);
  return p.set(oy, o), E(Mh(c, f), {
    ...j,
    headers: p
  });
}
function _y(c = {}) {
  const f = c.targetWindow ?? my(), d = c.parentWindow ?? f.parent, o = yy(f, c.targetOrigin), E = c.requestTimeoutMs ?? 1e4, j = c.idFactory ?? hy;
  let p = gy(f);
  const R = /* @__PURE__ */ new Set();
  function N(S) {
    d.postMessage(S, o);
  }
  function b(S, Y) {
    const Q = {
      protocol: ar,
      version: lr,
      kind: "event",
      type: S
    };
    Y !== void 0 && (Q.payload = Y), N(Q);
  }
  function U(S) {
    if (!Eh(S, d, o))
      return;
    const Y = xh(S.data);
    if (!Y.ok)
      return;
    const Q = Y.value;
    if (Q.kind !== "event" || Q.type !== "hana.theme.changed" || typeof Q.payload != "object" || Q.payload === null)
      return;
    const ve = Q.payload;
    p = {
      theme: typeof ve.theme == "string" ? ve.theme : p.theme,
      cssUrl: typeof ve.cssUrl == "string" ? ve.cssUrl : p.cssUrl
    };
    for (const V of R)
      V(p);
  }
  function A(S, Y, Q = {}) {
    const ve = j(), V = Q.timeoutMs ?? E;
    return new Promise((ce, le) => {
      const ne = () => {
        f.removeEventListener("message", $), f.clearTimeout(Ne);
      }, $ = (Z) => {
        if (!Eh(Z, d, o))
          return;
        const k = xh(Z.data);
        if (!k.ok)
          return;
        const F = k.value;
        F.id !== ve || F.type !== S || (F.kind === "response" && (ne(), ce(F.payload)), F.kind === "error" && F.error && (ne(), le(new jh(F.error))));
      }, Ne = f.setTimeout(() => {
        ne(), le(new jh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${S}.`
        }));
      }, V);
      f.addEventListener("message", $);
      const pe = {
        protocol: ar,
        version: lr,
        id: ve,
        kind: "request",
        type: S
      };
      Y !== void 0 && (pe.payload = Y), N(pe);
    });
  }
  return {
    ready(S) {
      b("hana.ready", S);
    },
    assets: {
      url(S) {
        return jy(f, S);
      }
    },
    api: {
      url(S) {
        return Mh(f, S);
      },
      fetch(S, Y) {
        return Ny(f, S, Y);
      }
    },
    ui: {
      resize(S) {
        b(Cl.UI_RESIZE, S);
      }
    },
    theme: {
      getSnapshot() {
        return { ...p };
      },
      subscribe(S) {
        return R.size === 0 && f.addEventListener("message", U), R.add(S), S({ ...p }), () => {
          R.delete(S), R.size === 0 && f.removeEventListener("message", U);
        };
      }
    },
    host: {
      request: A
    },
    toast: {
      show(S, Y) {
        return A(Cl.TOAST_SHOW, S, Y);
      }
    },
    external: {
      open(S, Y) {
        return A(Cl.EXTERNAL_OPEN, py(S), Y);
      }
    },
    clipboard: {
      writeText(S, Y) {
        return A(Cl.CLIPBOARD_WRITE_TEXT, by(S), Y);
      }
    },
    resources: {
      open(S, Y) {
        return A(Cl.RESOURCE_OPEN, S, Y);
      },
      pick(S = {}, Y) {
        return A(Cl.RESOURCE_PICK, S, Y);
      },
      requestAccess(S, Y) {
        return A(Cl.RESOURCE_REQUEST_ACCESS, S, Y);
      }
    }
  };
}
let Nh = null;
function _t() {
  return Nh ??= _y(), Nh;
}
const or = {
  ready(c) {
    return _t().ready(c);
  },
  assets: {
    url(c) {
      return _t().assets.url(c);
    }
  },
  api: {
    url(c) {
      return _t().api.url(c);
    },
    fetch(c, f) {
      return _t().api.fetch(c, f);
    }
  },
  ui: {
    resize(c) {
      return _t().ui.resize(c);
    }
  },
  theme: {
    getSnapshot() {
      return _t().theme.getSnapshot();
    },
    subscribe(c) {
      return _t().theme.subscribe(c);
    }
  },
  host: {
    request(c, f, d) {
      return _t().host.request(c, f, d);
    }
  },
  toast: {
    show(c, f) {
      return _t().toast.show(c, f);
    }
  },
  external: {
    open(c, f) {
      return _t().external.open(c, f);
    }
  },
  clipboard: {
    writeText(c, f) {
      return _t().clipboard.writeText(c, f);
    }
  },
  resources: {
    open(c, f) {
      return _t().resources.open(c, f);
    },
    pick(c, f) {
      return _t().resources.pick(c, f);
    },
    requestAccess(c, f) {
      return _t().resources.requestAccess(c, f);
    }
  }
};
function il(...c) {
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
function Ay({ mode: c = "inherit", theme: f, className: d, style: o, children: E, "data-testid": j = "hana-plugin-theme", ...p }) {
  const R = typeof f == "string" ? f : void 0, N = zy(c, f);
  return i.jsx("div", { ...p, "data-testid": j, className: il("hana-plugin-theme", d), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? R : void 0, style: { ...N, ...o }, children: E });
}
function zy(c, f) {
  if (c === "inherit")
    return {};
  const d = Cy(c, f), o = {};
  for (const [E, j] of Object.entries(Ty)) {
    const p = d?.[E];
    p && (o[j] = p);
  }
  return o;
}
function Cy(c, f) {
  if (typeof f == "string")
    return _h[f];
  if (f)
    return f;
  if (c === "hana")
    return _h["warm-paper"];
}
w.forwardRef(function({ variant: f = "secondary", size: d = "md", loading: o = !1, iconLeft: E, iconRight: j, disabled: p, className: R, children: N, type: b = "button", ...U }, A) {
  return i.jsxs("button", { ...U, ref: A, type: b, disabled: p || o, className: il("hana-plugin-button", `hana-plugin-button-${f}`, `hana-plugin-button-${d}`, o && "hana-plugin-button-loading", R), children: [o ? i.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : E, N && i.jsx("span", { className: "hana-plugin-button-label", children: N }), !o && j] });
});
w.forwardRef(function({ label: f, size: d = "md", variant: o = "ghost", className: E, children: j, type: p = "button", ...R }, N) {
  return i.jsx("button", { ...R, ref: N, type: p, "aria-label": f, title: R.title || f, className: il("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${o}`, E), children: j });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: j, inputClassName: p, ...R }, N) {
  const b = w.useId(), U = E || b;
  return i.jsx(Oh, { label: f, hint: d, error: o, htmlFor: U, className: j, children: i.jsx("input", { ...R, ref: N, id: U, "aria-invalid": !!o, className: il("hana-plugin-input", p) }) });
});
w.forwardRef(function({ label: f, hint: d, error: o, id: E, className: j, textareaClassName: p, rows: R = 4, ...N }, b) {
  const U = w.useId(), A = E || U;
  return i.jsx(Oh, { label: f, hint: d, error: o, htmlFor: A, className: j, children: i.jsx("textarea", { ...N, ref: b, id: A, rows: R, "aria-invalid": !!o, className: il("hana-plugin-textarea", p) }) });
});
w.forwardRef(function({ checked: f, onChange: d, label: o, disabled: E, className: j, onClick: p, type: R = "button", ...N }, b) {
  const U = typeof o == "string" ? o : N["aria-label"];
  return i.jsxs("span", { className: il("hana-plugin-switch-wrap", j), children: [i.jsx("button", { ...N, ref: b, type: R, role: "switch", "aria-checked": f, "aria-label": U, disabled: E, className: il("hana-plugin-switch", f && "hana-plugin-switch-on"), onClick: (A) => {
    p?.(A), !A.defaultPrevented && !E && d?.(!f);
  }, children: i.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), o && i.jsx("span", { className: "hana-plugin-switch-label", children: o })] });
});
function Oh({ label: c, hint: f, error: d, htmlFor: o, className: E, children: j }) {
  return i.jsxs("div", { className: il("hana-plugin-field", E), children: [c && i.jsx("label", { className: "hana-plugin-field-label", htmlFor: o, children: c }), f && i.jsx("div", { className: "hana-plugin-field-hint", children: f }), j, d && i.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const Uh = /^\d{4}-\d{2}-\d{2}$/;
function wl(c, f) {
  if (!Uh.test(c)) return c;
  const d = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + f), d.toISOString().slice(0, 10);
}
function fr(c) {
  const f = String(c || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: f[0] || "",
    end: f[1] || f[0] || ""
  };
}
function nr(c) {
  const f = (/* @__PURE__ */ new Date(`${c}T12:00:00Z`)).getUTCDay();
  return f === 0 ? 6 : f - 1;
}
function Rh(c, f) {
  return Array.from({ length: f }, (d, o) => wl(c, o));
}
function ir(c, f) {
  const o = fr(c).start || f, E = wl(o, -nr(o));
  return Rh(E, 7);
}
function wy(c, f, d = 3) {
  const o = Math.max(1, Math.floor(d)), E = Math.max(0, Math.floor(f)), j = c.slice(E * o, E * o + o);
  return [...j, ...Array(Math.max(0, o - j.length)).fill(null)];
}
function Dy(c, f) {
  const o = fr(c).start || f, E = Uh.test(o) ? `${o.slice(0, 7)}-01` : f, j = /* @__PURE__ */ new Date(`${E}T12:00:00Z`);
  j.setUTCMonth(j.getUTCMonth() + 1, 1);
  const p = new Date(j);
  p.setUTCDate(p.getUTCDate() - 1);
  const R = p.toISOString().slice(0, 10), N = wl(E, -nr(E)), b = 6 - nr(R), U = wl(R, b), A = Math.round(((/* @__PURE__ */ new Date(`${U}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${N}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Rh(N, A);
}
function Uu(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function vi(c) {
  if (!c || c.length < 16) return null;
  const f = Number(c.slice(11, 13)), d = Number(c.slice(14, 16));
  return !Number.isFinite(f) || !Number.isFinite(d) ? null : f * 60 + d;
}
function qh(c) {
  const f = c.map((j) => vi(j.start_at || j.deadline_at)).filter((j) => j !== null), d = c.map((j) => {
    const p = vi(j.end_at);
    if (p !== null) return p;
    const R = vi(j.start_at || j.deadline_at);
    return R === null ? null : R + Number(j.duration || j.estimated_minutes || 45);
  }).filter((j) => j !== null), o = f.length ? Math.floor(Math.min(...f) / 60) - 1 : 10, E = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, o)),
    endHour: Math.min(24, Math.max(22, E))
  };
}
function Hh(c, f, d, o = 56) {
  const E = vi(c.start_at || c.deadline_at);
  if (E === null) return null;
  const p = vi(c.end_at) ?? E + Number(c.duration || c.estimated_minutes || 45), R = Math.max(f * 60, E), N = Math.min(d * 60, Math.max(p, R + 30));
  return {
    top: (R - f * 60) / 60 * o,
    height: Math.max(30, (N - R) / 60 * o)
  };
}
const My = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消", "已调课"]), Oy = /* @__PURE__ */ new Set(["cancelled", "deleted", "removed", "void", "已取消", "已调课", "已删除", "删除"]);
function Uy(c) {
  const f = /* @__PURE__ */ new Map();
  for (const d of c) {
    const o = String(d.status || "").trim().toLowerCase();
    if (Oy.has(o)) continue;
    const E = d.start_at || d.deadline_at || d.window_start || "", j = String(d.title || "").trim().replace(/\s+/g, " ").toLowerCase(), p = E ? [d.domain, j, E, d.end_at || "", d.duration || d.estimated_minutes || ""].join("|") : `id:${d.id}`, R = f.get(p);
    (!R || ["completed", "已完成"].includes(d.status) && !["completed", "已完成"].includes(R.status)) && f.set(p, d);
  }
  return [...f.values()];
}
function Ry(c) {
  const f = c.filter((o) => !My.has(o.status) && o.start_at && o.end_at).map((o) => ({ item: o, start: new Date(o.start_at).getTime(), end: new Date(o.end_at).getTime() })).filter((o) => Number.isFinite(o.start) && Number.isFinite(o.end) && o.end > o.start).sort((o, E) => o.start - E.start || o.end - E.end), d = [];
  for (let o = 0; o < f.length; o += 1) {
    const E = f[o];
    for (let j = o + 1; j < f.length; j += 1) {
      const p = f[j];
      if (p.start >= E.end) break;
      if (E.item.id === p.item.id || p.end <= E.start) continue;
      const R = [E.item.domain, p.item.domain].sort().join("-"), N = R === "course-course" ? "course-course" : R === "affair-affair" ? "affair-affair" : "course-affair";
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
function dr(c) {
  const f = c.map((j) => {
    const p = j.start_at || j.deadline_at, R = p ? new Date(p).getTime() : Number.NaN, N = j.end_at ? new Date(j.end_at).getTime() : Number.NaN, b = Number.isFinite(N) ? N : R + Number(j.duration || j.estimated_minutes || 45) * 6e4;
    return { item: j, start: R, end: b };
  }).filter((j) => Number.isFinite(j.start)).sort((j, p) => j.start - p.start || j.end - p.end), d = [], o = f.map((j) => {
    let p = d.findIndex((R) => R <= j.start);
    return p < 0 && (p = d.length), d[p] = j.end, { ...j, lane: p };
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
const By = /* @__PURE__ */ new Set([408, 425, 429, 500, 502, 503, 504]);
function ky(c) {
  return String(c?.method || "GET").toUpperCase() === "GET";
}
async function Ly(c, f, d, o = {}) {
  const E = ky(d) ? Math.max(1, o.attempts ?? 2) : 1, j = Math.max(0, o.delayMs ?? 160);
  let p;
  for (let R = 1; R <= E; R += 1) {
    try {
      const N = await c(f, d);
      if (R === E || !By.has(N.status)) return N;
    } catch (N) {
      if (p = N, R === E) throw N;
    }
    j && await new Promise((N) => globalThis.setTimeout(N, j));
  }
  throw p instanceof Error ? p : new Error("插件读取请求失败");
}
async function lt(c, f) {
  let d;
  try {
    d = await Ly((o, E) => or.api.fetch(o, E), c, f);
  } catch (o) {
    const E = o instanceof Error ? o.message : String(o || "未知错误");
    throw new Error(`页面会话请求失败：${E}`);
  }
  return Hy(d);
}
function ur() {
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
const Th = {
  week: "周视图",
  month: "月视图"
}, Yy = {
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
function Vy(c) {
  const f = c;
  if (!f || !Array.isArray(f.items) || !Array.isArray(f.pending) || !Array.isArray(f.courses) || !Array.isArray(f.affairs) || !Array.isArray(f.students) || !Array.isArray(f.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return f;
}
function Gy(c) {
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
class Xy extends w.Component {
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
function Pt(c, f) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...f
  }).format(new Date(c)) : "未定";
}
function Oa(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Qy(c) {
  return c ? `更新于 ${Oa(c)}` : "尚未更新";
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
function Ah(c) {
  const f = Math.max(0, Math.round(Number(c) || 0)), d = Math.floor(f / 60), o = f % 60;
  return d ? o ? `${d} 小时 ${o} 分钟` : `${d} 小时` : `${o} 分钟`;
}
function gt(c) {
  return c.start_at || c.deadline_at || null;
}
function cr(c) {
  return ["completed", "已完成"].includes(c) ? "finished" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "待处理", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function hr(c, f) {
  if (!f || c.domain !== "course") return !1;
  const d = (c.start_at || "").slice(0, 10);
  return !!d && d < f && c.status === "待上课";
}
function mr(c, f) {
  if (hr(c, f)) return "state-pending";
  const d = cr(c.status);
  return d === "finished" ? "state-finished" : d === "muted" ? "state-neutral" : d === "error" ? "state-error" : d === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function vr(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function yi(c) {
  try {
    const f = window.sessionStorage.getItem(`laosu-workbench.cache.${c}`);
    return f ? JSON.parse(f) : null;
  } catch {
    return null;
  }
}
function Ru(c, f) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${c}`, JSON.stringify(f));
  } catch {
  }
}
function Zy() {
  const c = new URLSearchParams(window.location.search), f = c.get("tab") || "overview", d = c.get("scope") || "week", o = "overview", E = ["week", "month"].includes(d) ? d : "week", j = c.get("preview"), [p, R] = w.useState(o), [N, b] = w.useState(E), [U, A] = w.useState(() => {
    const M = Number(window.localStorage.getItem("laosu-workbench.view-scale"));
    return [0.7, 0.8, 0.9, 1].includes(M) ? M : null;
  }), [S, Y] = w.useState(1), Q = U ?? S, [ve, V] = w.useState(f === "actions" || !!j), [ce, le] = w.useState(null), ne = ce !== null, [$, Ne] = w.useState(null), [pe, Z] = w.useState(!0), [k, F] = w.useState(!1), [re, J] = w.useState(""), [ae, be] = w.useState(null), [De, Oe] = w.useState(null), [g, B] = w.useState({ text: "", nonce: 0 }), [I, y] = w.useState(!1), [P, h] = w.useState(""), [D, X] = w.useState(null), [K, oe] = w.useState({}), [je, Me] = w.useState(!1), [nt, G] = w.useState(null), [He, ge] = w.useState(0), [W, ta] = w.useState(null), [$e, aa] = w.useState(null), Qt = w.useRef(null), la = w.useRef(null), na = w.useRef(ur()), mt = w.useRef(""), Ot = w.useRef(!1), st = w.useRef(ur()), fa = w.useRef(/* @__PURE__ */ new Set()), ul = w.useRef(null), _e = w.useRef(!1), Ut = w.useRef(!1), bn = w.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  });
  w.useEffect(() => {
    const M = () => {
      const L = window.innerWidth;
      Y(L < 680 ? 0.7 : L < 900 ? 0.8 : L < 1120 ? 0.9 : 1);
    };
    return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, []);
  function xn(M) {
    A(M), M === null ? window.localStorage.removeItem("laosu-workbench.view-scale") : window.localStorage.setItem("laosu-workbench.view-scale", String(M));
  }
  function cl(M) {
    const L = [0.7, 0.8, 0.9, 1], ie = L.reduce((fe, me) => Math.abs(me - Q) < Math.abs(fe - Q) ? me : fe, L[0]), se = L.indexOf(ie);
    xn(L[Math.max(0, Math.min(L.length - 1, se + M))]);
  }
  const Zt = w.useCallback(async (M = N, L = {}) => {
    const ie = L.silent === !0, se = na.current.begin();
    ie || (Z(!0), J(""));
    try {
      const fe = new URLSearchParams({ scope: M });
      L.fresh && fe.set("fresh", "1");
      const me = Vy(await lt(`api/dashboard?${fe.toString()}`));
      return na.current.isCurrent(se) ? (Ne(me), Ru(`dashboard.${M}`, me), mt.current = "", J(""), !0) : null;
    } catch (fe) {
      if (!na.current.isCurrent(se)) return null;
      const me = fe.message || "读取失败";
      return mt.current = me, !ie && !L.preserveOnError && J(me), !1;
    } finally {
      na.current.isCurrent(se) && !ie && Z(!1);
    }
  }, [N]);
  w.useEffect(() => {
    const M = yi(`dashboard.${E}`);
    M && (Ne(M), Z(!1)), Zt(E, { fresh: !0, silent: !!M });
  }, []), w.useEffect(() => {
    const M = (L) => {
      L.target instanceof HTMLElement && !Qt.current?.contains(L.target) && (ul.current = L.target);
    };
    return window.addEventListener("pointerdown", M, !0), () => window.removeEventListener("pointerdown", M, !0);
  }, []), w.useEffect(() => {
    j && (V(!0), lt(`api/preview/${encodeURIComponent(j)}`).then(be).catch((M) => {
      be({ ok: !1, error: M.message });
    }));
  }, [j]), w.useEffect(() => {
    if (!ve) return;
    const M = Qt.current, L = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !_e.current) {
      const ee = new URL(window.location.href);
      ee.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", ee), _e.current = !0;
    }
    const ie = window.setTimeout(() => {
      ((De ? M?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : M?.querySelector(".ai-composer textarea")) || M?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), De && M?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), se = () => Array.from(M?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((ee) => ee.getClientRects().length > 0 && !ee.closest("[hidden]")), fe = (ee) => {
      if (ee.key === "Escape") {
        ee.preventDefault(), ua();
        return;
      }
      if (ee.key !== "Tab") return;
      const it = se();
      if (!it.length) return;
      const Jt = it[0], ma = it[it.length - 1];
      M?.contains(document.activeElement) ? ee.shiftKey && document.activeElement === Jt ? (ee.preventDefault(), ma.focus()) : !ee.shiftKey && document.activeElement === ma && (ee.preventDefault(), Jt.focus()) : (ee.preventDefault(), (ee.shiftKey ? ma : Jt).focus());
    }, me = () => {
      _e.current && (_e.current = !1, V(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", fe), window.addEventListener("popstate", me), () => {
      window.clearTimeout(ie), document.body.style.overflow = L, window.removeEventListener("keydown", fe), window.removeEventListener("popstate", me), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [ve]), w.useEffect(() => {
    if (!ne) return;
    const M = la.current, L = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Ut.current) {
      const ee = new URL(window.location.href);
      ee.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", ee), Ut.current = !0;
    }
    const ie = window.setTimeout(() => M?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), se = () => Array.from(M?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((ee) => ee.getClientRects().length > 0 && !ee.closest("[hidden]")), fe = (ee) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (ee.key === "Escape") {
        ee.preventDefault(), En();
        return;
      }
      if (ee.key !== "Tab") return;
      const it = se();
      if (!it.length) return;
      const Jt = it[0], ma = it[it.length - 1];
      M?.contains(document.activeElement) ? ee.shiftKey && document.activeElement === Jt ? (ee.preventDefault(), ma.focus()) : !ee.shiftKey && document.activeElement === ma && (ee.preventDefault(), Jt.focus()) : (ee.preventDefault(), (ee.shiftKey ? ma : Jt).focus());
    }, me = () => {
      const ee = new URL(window.location.href).searchParams.get("drawer");
      ee === "context" || ee === "actions" || !Ut.current || (Ut.current = !1, le(null));
    };
    return window.addEventListener("keydown", fe), window.addEventListener("popstate", me), () => {
      window.clearTimeout(ie), document.body.style.overflow = L, window.removeEventListener("keydown", fe), window.removeEventListener("popstate", me), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [ne]), w.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", p);
    const M = () => {
      bn.current[p] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${p}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", M), () => window.removeEventListener("pagehide", M);
  }, [p]), w.useEffect(() => {
    if ($e?.tab === p) return;
    const M = bn.current[p] || 0;
    let L = 0, ie, se = !1;
    const fe = () => {
      se = !0;
    }, me = () => {
      se || (window.scrollTo({ top: M, behavior: "auto" }), L += 1, Math.abs(window.scrollY - M) > 3 && L < 15 && (ie = window.setTimeout(me, 90)));
    }, ee = window.requestAnimationFrame(me);
    return window.addEventListener("wheel", fe, { passive: !0 }), window.addEventListener("touchstart", fe, { passive: !0 }), window.addEventListener("keydown", fe), () => {
      se = !0, window.cancelAnimationFrame(ee), ie && window.clearTimeout(ie), window.removeEventListener("wheel", fe), window.removeEventListener("touchstart", fe), window.removeEventListener("keydown", fe);
    };
  }, [p]), w.useEffect(() => {
    if (!$e || $e.tab !== p) return;
    let M = 0, L, ie, se;
    const fe = () => {
      const ee = Array.from(document.querySelectorAll("[data-item-id]")).find((it) => it.dataset.itemId === $e.id);
      if (!ee && M < 20) {
        M += 1, L = window.setTimeout(fe, 60);
        return;
      }
      if (!ee) {
        aa(null);
        return;
      }
      se = ee, ee.classList.add("target-highlight"), ee.setAttribute("tabindex", "-1"), ee.scrollIntoView({ behavior: "smooth", block: "center" }), ee.focus({ preventScroll: !0 }), ie = window.setTimeout(() => {
        ee.classList.remove("target-highlight"), ee.removeAttribute("tabindex"), aa(null);
      }, 2400);
    }, me = window.setTimeout(fe, 50);
    return () => {
      window.clearTimeout(me), L && window.clearTimeout(L), ie && window.clearTimeout(ie), se?.classList.remove("target-highlight"), se?.removeAttribute("tabindex");
    };
  }, [$e, p, $?.observedAt]), w.useEffect(() => {
    if (!P) return;
    const M = window.setTimeout(() => h(""), 4800);
    return () => window.clearTimeout(M);
  }, [P]);
  const sl = w.useRef(null);
  w.useEffect(() => {
    const M = window.setInterval(async () => {
      if (!(document.hidden || Ot.current))
        try {
          const L = await lt("api/data-revision");
          if (!L?.ok || typeof L.revision != "number") return;
          if (sl.current === null) {
            sl.current = L.revision;
            return;
          }
          L.revision !== sl.current && (sl.current = L.revision, ol({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(M);
  }, [N]);
  const qu = w.useMemo(
    () => ($?.pending ?? []).filter((M) => !["completed", "cancelled"].includes(M.status)),
    [$]
  );
  async function Hu(M) {
    const L = new URL(window.location.href);
    L.searchParams.set("scope", M), window.history.replaceState(window.history.state, "", L), b(M);
    const ie = yi(`dashboard.${M}`);
    if (ie) {
      Ne(ie), Z(!1), Zt(M, { fresh: !0, silent: !0 });
      return;
    }
    await Zt(M);
  }
  function da(M) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const L = document.activeElement;
    ((L instanceof HTMLElement && L !== document.body && !Qt.current?.contains(L) ? L : null) || M || ul.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function rt(M) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const L = document.activeElement, ie = L instanceof HTMLElement && L !== document.body && !la.current?.contains(L) ? L : null;
    (M || ie || ul.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function Kt(M, L) {
    rt(L), le({ kind: "item", item: M });
  }
  function vt(M, L, ie) {
    rt(L), le({ kind: "day", date: M, items: ie });
  }
  function Bu(M) {
    rt(M), le({ kind: "system" });
  }
  function jn() {
    const M = /* @__PURE__ */ Symbol("workbench-operation");
    return fa.current.add(M), y(!0), M;
  }
  function Sn(M) {
    fa.current.delete(M), y(fa.current.size > 0);
  }
  function ha() {
    st.current.invalidate(), be(null);
  }
  function Ml(M) {
    st.current.invalidate(), be(M);
  }
  function Ol() {
    da(document.querySelector(".ai-action-button")), Oe(null), B({ text: "", nonce: Date.now() }), ha(), V(!0);
  }
  function ia(M) {
    da(), Oe(null), B({ text: M, nonce: Date.now() }), ha(), V(!0);
  }
  function rl(M) {
    da(), Oe(M), ha(), V(!0);
  }
  function ua() {
    if (_e.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    _e.current = !1, V(!1);
  }
  function En() {
    if (Ut.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    Ut.current = !1, le(null);
  }
  async function pi(M, L) {
    if (!D) {
      X(L.id);
      try {
        const ie = M === "courseCancel" ? await lt("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: L.title, date: L.start_at?.slice(0, 10), time: L.start_at?.slice(11, 16), reason: "没上" })
        }) : await lt("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: L.id, expectedVersion: L.version })
        });
        if (!ie.ok) throw new Error(ie.error || "处理未完成");
        M === "affairComplete" ? (oe((se) => ({ ...se, [L.id]: { ok: !0, text: ie.message || "已完成", buttonLabel: "已完成" } })), h(`${L.title} 已完成`)) : h(`${L.title} ${L.start_at?.slice(5, 16) ?? ""} 已记录没上`), await Zt(N);
      } catch (ie) {
        M === "affairComplete" && oe((se) => ({ ...se, [L.id]: { ok: !1, text: `处理失败：${ie.message || "未知错误"}` } })), h(`处理失败：${ie.message || "未知错误"}`);
      } finally {
        X(null);
      }
    }
  }
  async function ol(M = {}) {
    const L = M.silent === !0;
    if (!(!L && Ot.current)) {
      L || (Ot.current = !0, F(!0), h("正在刷新数据…"));
      try {
        const ie = await Zt(N, { ...M, silent: !0, fresh: !L, preserveOnError: !L });
        ie === !0 ? (oe({}), G(null), ge((se) => se + 1), L || h("本地课程与事务数据已刷新")) : ie === !1 && !L ? h(`刷新未完成，已保留当前数据：${mt.current || "读取失败"}`) : ie === null && !L && h("视图已切换，当前页面正在读取最新数据");
      } finally {
        L || (Ot.current = !1, F(!1));
      }
    }
  }
  async function fl(M) {
    const L = st.current.begin(), ie = jn();
    be(null);
    try {
      const se = await lt("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(M)
      });
      if (!st.current.isCurrent(L)) return;
      be({ ...se, operation: String(M.operation || ""), input: M });
    } catch (se) {
      st.current.isCurrent(L) && be({ ok: !1, error: se.message });
    } finally {
      Sn(ie);
    }
  }
  async function ku(M) {
    if (!D) {
      X(M.id), oe((L) => ({ ...L, [M.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const L = await lt("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: M.id, expectedVersion: M.version })
        });
        if (!L.ok) throw new Error(L.error || "没约上的处理未完成");
        const ie = L.outcome?.candidateDate, se = ie ? `已安排 ${ie.slice(5)}` : "已处理";
        oe((fe) => ({ ...fe, [M.id]: {
          ok: !0,
          text: L.message || "已推进到下一次尝试",
          buttonLabel: se,
          undo: L.outcome ? { expectedVersion: L.outcome.version } : void 0
        } })), await Zt(N);
      } catch (L) {
        const ie = L.message || "没约上的处理失败";
        oe((se) => ({ ...se, [M.id]: { ok: !1, text: `处理失败：${ie}`, buttonLabel: "重试" } }));
      } finally {
        X(null);
      }
    }
  }
  async function bi(M) {
    if (D) return;
    const L = K[M.id]?.undo;
    X(M.id), oe((ie) => ({ ...ie, [M.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const ie = await lt("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: M.id, expectedVersion: L?.expectedVersion ?? M.version })
      });
      if (!ie.ok) throw new Error(ie.error || "恢复上一候选日未完成");
      const se = ie.outcome?.candidateDate;
      oe((fe) => ({ ...fe, [M.id]: {
        ok: !0,
        text: ie.message || "已恢复到上一候选日",
        buttonLabel: se ? `回到 ${se.slice(5)}` : "已恢复"
      } })), await Zt(N);
    } catch (ie) {
      const se = ie.message || "恢复上一候选日失败";
      oe((fe) => ({ ...fe, [M.id]: { ok: !1, text: `恢复失败：${se}`, buttonLabel: "重试" } }));
    } finally {
      X(null);
    }
  }
  async function xi() {
    if (!ae?.token || !ae.canCommit) return;
    const M = st.current.begin(), L = jn(), ie = ae.operation || De?.operation;
    try {
      const se = await lt("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: ae.token })
      }), fe = { ok: se.ok, summary: se.summary, message: `${se.message || ""}${se.exportMessage ? `
导出：${se.exportMessage}` : ""}${se.syncMessage ? `
日历：${se.syncMessage}` : ""}`, result: se, operation: ie, input: ae.input, committed: !!se.ok };
      await Zt(N), ge((me) => me + 1), st.current.isCurrent(M) && be(fe);
    } catch (se) {
      st.current.isCurrent(M) && be({ ok: !1, error: se.message });
    } finally {
      Sn(L);
    }
  }
  async function ji() {
    const M = ae?.batchItems ?? [];
    if (!M.length) return;
    const L = st.current.begin(), ie = jn(), se = /* @__PURE__ */ new Map();
    try {
      for (const fe of M) {
        if (!fe.canCommit) {
          se.set(fe.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const me = await lt("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: fe.token })
          });
          if (se.set(fe.token, { ok: !!me.ok, message: me.message || (me.ok ? "已执行" : "执行失败") }), !me.ok) break;
        } catch (me) {
          se.set(fe.token, { ok: !1, message: me.message || "提交失败" });
          break;
        }
      }
      await Zt(N), ge((fe) => fe + 1), st.current.isCurrent(L) && ae && be({
        ...ae,
        ok: M.every((fe) => se.get(fe.token)?.ok === !0),
        committed: !0,
        message: M.map((fe) => {
          const me = se.get(fe.token);
          return `${me?.ok ? "✓" : me ? "✗" : "·"} ${fe.summary}：${me?.message || "未执行"}`;
        }).join(`
`),
        batchItems: M.map((fe) => {
          const me = se.get(fe.token);
          return { ...fe, canCommit: !1, resultOk: me?.ok ?? !1, message: me?.message || "未执行" };
        })
      });
    } finally {
      Sn(ie);
    }
  }
  return /* @__PURE__ */ i.jsx(Ay, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ i.jsxs("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-main", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "topbar", "data-ui": "topbar", children: [
      /* @__PURE__ */ i.jsx("nav", { className: "tabbar", "aria-label": "日程视图", "data-ui": "primary-navigation", children: Object.keys(Th).map((M) => /* @__PURE__ */ i.jsx("button", { type: "button", className: N === M ? "tab active" : "tab", "data-ui-role": "nav-item", "data-ui-id": `nav-${M}`, "aria-current": N === M ? "page" : void 0, disabled: pe, onClick: () => {
        Hu(M);
      }, children: Th[M] }, M)) }),
      /* @__PURE__ */ i.jsxs("div", { className: "top-actions", "data-ui": "top-actions", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "view-scale-control", role: "group", "aria-label": "页面缩放", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => cl(-1), disabled: Q <= 0.7, "aria-label": "缩小页面", children: "−" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: U === null ? "auto active" : "auto", onClick: () => xn(null), "aria-label": `当前缩放 ${Math.round(Q * 100)}%，点击恢复自动适配`, children: U === null ? `自动 ${Math.round(Q * 100)}%` : `${Math.round(Q * 100)}%` }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => cl(1), disabled: Q >= 1, "aria-label": "放大页面", children: "＋" })
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: ve ? "ai-action-button active" : "ai-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-ai", onClick: Ol, "aria-expanded": ve, children: "✦ AI 操作" }),
        /* @__PURE__ */ i.jsx("span", { className: "updated-at", children: Qy($?.observedAt) }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${$?.health?.ok ? "health good" : "health bad"} health-button${ce?.kind === "system" ? " active" : ""}`, "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-system-status", onClick: (M) => Bu(M.currentTarget), "aria-expanded": ce?.kind === "system", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          $?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: "ghost-button refresh-local-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "refresh-workbench", onClick: () => {
          ol();
        }, "aria-label": k ? "正在刷新本地数据" : "刷新本地数据", "aria-busy": k, disabled: pe || k, children: [
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "↻" }),
          /* @__PURE__ */ i.jsx("span", { className: "refresh-local-label", children: k ? "刷新中…" : "刷新本地数据" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: "main-area scalable-main", style: { zoom: Q, width: `${100 / Q}%` }, children: [
      P && /* @__PURE__ */ i.jsx("div", { className: "toast", role: "status", children: P }),
      re && /* @__PURE__ */ i.jsx(Dl, { tone: "error", title: "读取失败", text: re }),
      $?.warnings?.length ? /* @__PURE__ */ i.jsx(Dl, { tone: "warn", title: "有警告", text: $.warnings.join("；") }) : null,
      pe && !$ ? /* @__PURE__ */ i.jsx(yr, {}) : null,
      /* @__PURE__ */ i.jsxs("div", { className: pe && $ ? "view-content scope-loading" : "view-content", "aria-busy": pe && !!$, inert: pe && !!$, children: [
        $ && p === "overview" && /* @__PURE__ */ i.jsx(Ky, { dashboard: $, onInspect: Kt, onOpenDay: vt }),
        p === "planning" && /* @__PURE__ */ i.jsx(eg, { onAction: rl, onAskAi: ia, refreshKey: He, sectionHint: W, scheduleText: $?.scheduleText, onDataChanged: ol }),
        p === "affairs" && /* @__PURE__ */ i.jsx(ng, { onQuick: pi, onAskAi: ia, onPrepare: rl, onInspect: Kt, onRetry: ku, onRetryPrev: bi, retryingId: D, feedback: K, refreshKey: He, observedAt: $?.observedAt ?? "", onOpenDay: (M, L, ie) => vt(M, ie, L), localDate: $?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "context-drawer-backdrop", hidden: !ne, onMouseDown: (M) => {
      M.currentTarget === M.target && En();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: la, className: "context-drawer", "data-ui": "drawer", "data-ui-id": "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: En, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: ce?.kind === "system" ? "运行状态" : ce?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ i.jsx("h2", { children: ce?.kind === "system" ? "系统状态" : ce?.kind === "day" ? Pt(`${ce.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : ce?.item.title }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "context-drawer-body", children: ce && $ && /* @__PURE__ */ i.jsx(rg, { view: ce, dashboard: $ }) })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "action-drawer-backdrop", hidden: !ve, onMouseDown: (M) => {
      M.currentTarget === M.target && ua();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: Qt, className: "action-drawer", "data-ui": "drawer", "data-ui-id": "ai-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: ua, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ i.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ i.jsx(
        ig,
        {
          pending: qu,
          students: $?.students ?? [],
          preset: De,
          aiDraft: g,
          preview: ae,
          busy: I,
          onPreview: fl,
          onAiPreview: Ml,
          onCommit: xi,
          onCommitBatch: ji,
          onClear: ha,
          onClose: ua
        }
      ) })
    ] }) })
  ] }) });
}
function Ky({ dashboard: c, onInspect: f, onOpenDay: d }) {
  const o = w.useMemo(() => {
    const A = /* @__PURE__ */ new Map();
    return c.courses.forEach((S) => A.set(S.id, { ...S, domain: "course" })), c.affairs.forEach((S) => A.set(S.id, { ...S, domain: "affair" })), Uy([...A.values()]).sort((S, Y) => String(gt(S) || "").localeCompare(String(gt(Y) || "")));
  }, [c.courses, c.affairs]), j = o.filter((A) => A.domain === "course").filter((A) => !["已取消", "已调课", "cancelled"].includes(A.status)), p = j.filter((A) => ["已完成", "completed"].includes(A.status)), R = j.reduce((A, S) => A + Number(S.duration || 0), 0), N = p.reduce((A, S) => A + Number(S.duration || 0), 0), b = w.useMemo(() => Ry(o), [o]), U = o.filter((A) => A.domain === "affair" && A.start_at && !A.end_at && !["completed", "cancelled", "已完成", "已取消"].includes(A.status));
  return /* @__PURE__ */ i.jsx("div", { className: "view-stack read-only-schedule", children: /* @__PURE__ */ i.jsxs("div", { className: "panel wide calendar-panel", children: [
    /* @__PURE__ */ i.jsx(ea, { title: c.scope === "week" ? "周课表" : "月课表", meta: Bh(c.range) }),
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
        /* @__PURE__ */ i.jsx("strong", { children: Ah(R) })
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
    (b.length > 0 || U.length > 0) && /* @__PURE__ */ i.jsxs("section", { className: b.length ? "schedule-conflict-alert error" : "schedule-conflict-alert warn", "aria-label": "日程冲突检查", children: [
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
        Pt(A.start, { month: "numeric", day: "numeric" }),
        " ",
        Oa(A.start),
        "–",
        Oa(A.end)
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
    c.scope === "week" ? /* @__PURE__ */ i.jsx(Iy, { items: o, range: c.range, localDate: c.localDate, onInspect: f }) : /* @__PURE__ */ i.jsx(Lh, { items: o, range: c.range, localDate: c.localDate, onOpenDay: d })
  ] }) });
}
function Jy(c) {
  return dr(c)[0]?.laneCount || 1;
}
const $y = 52, Fy = 150;
function Wy(c, f) {
  const [d, o] = w.useState(0);
  if (w.useEffect(() => {
    const p = c.current;
    if (!p || typeof ResizeObserver > "u") return;
    const R = new ResizeObserver((N) => {
      const b = N[0]?.contentRect.width;
      b && Number.isFinite(b) && o(b);
    });
    return R.observe(p), () => R.disconnect();
  }, [c]), f) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const E = Math.floor((d - $y) / Fy), j = Math.max(1, Math.min(7, E));
  return { visibleDays: j, paginated: j < 7 };
}
function kh() {
  const c = w.useRef(null), f = w.useRef(null), d = w.useCallback((j) => {
    if (j.button !== 0 || j.target.closest("button, article, a, input, select, textarea")) return;
    const p = c.current;
    !p || p.scrollWidth <= p.clientWidth || (f.current = { pointerId: j.pointerId, startX: j.clientX, scrollLeft: p.scrollLeft }, p.setPointerCapture(j.pointerId), p.classList.add("dragging"));
  }, []), o = w.useCallback((j) => {
    const p = c.current, R = f.current;
    !p || !R || R.pointerId !== j.pointerId || (p.scrollLeft = R.scrollLeft - (j.clientX - R.startX));
  }, []), E = w.useCallback((j) => {
    const p = c.current, R = f.current;
    !p || !R || R.pointerId !== j.pointerId || (p.hasPointerCapture(j.pointerId) && p.releasePointerCapture(j.pointerId), p.classList.remove("dragging"), f.current = null);
  }, []);
  return { ref: c, onPointerDown: d, onPointerMove: o, onPointerUp: E, onPointerCancel: E };
}
function Iy({ items: c, range: f, localDate: d, onInspect: o }) {
  const E = w.useMemo(() => ir(f, d), [f, d]), j = kh(), p = E, R = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    return c.forEach((ce) => {
      const le = Uu(ce);
      le && (le < d && ["已取消", "已调课", "cancelled"].includes(ce.status) || V.set(le, [...V.get(le) || [], ce]));
    }), V.forEach((ce, le) => V.set(le, [...ce].sort((ne, $) => String(gt(ne) || "").localeCompare(String(gt($) || ""))))), V;
  }, [c, d]), N = w.useMemo(() => {
    const V = /* @__PURE__ */ new Map();
    for (const ce of E) {
      const le = (R.get(ce) || []).filter((ne) => ne.start_at || ne.deadline_at);
      V.set(ce, dr(le));
    }
    return V;
  }, [R, E]), b = "36px repeat(7, minmax(0, 1fr))", U = c.filter((V) => V.start_at || V.deadline_at), { startHour: A, endHour: S } = qh(U), Y = 60, Q = (S - A) * Y, ve = Array.from({ length: S - A + 1 }, (V, ce) => A + ce);
  return /* @__PURE__ */ i.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "七列周时间视图", ...j, children: /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: b }, children: [
      /* @__PURE__ */ i.jsx("div", { className: "week-corner", children: "时间" }),
      p.map((V) => /* @__PURE__ */ i.jsxs("div", { className: V === d ? "week-day-header today" : "week-day-header", children: [
        /* @__PURE__ */ i.jsx("span", { children: Pt(`${V}T12:00:00+08:00`, { weekday: "short" }) }),
        /* @__PURE__ */ i.jsx("strong", { children: Number(V.slice(8, 10)) }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          R.get(V)?.length || 0,
          " 项"
        ] })
      ] }, V))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: b }, children: [
      /* @__PURE__ */ i.jsx("div", { className: "week-time-axis", style: { height: Q }, children: ve.map((V) => /* @__PURE__ */ i.jsxs("span", { style: { top: (V - A) * Y }, children: [
        String(V).padStart(2, "0"),
        ":00"
      ] }, V)) }),
      p.map((V) => {
        const ce = N.get(V) || [];
        return /* @__PURE__ */ i.jsx("div", { className: V === d ? "week-day-track today" : "week-day-track", style: { height: Q }, children: ce.map(({ item: le, lane: ne, laneCount: $ }) => {
          const Ne = Hh(le, A, S, Y);
          if (!Ne) return null;
          const pe = 100 / $, Z = le.start_at || le.deadline_at, k = hr(le, d);
          return /* @__PURE__ */ i.jsxs(
            "article",
            {
              className: `week-time-block ${le.domain} ${mr(le, d)}${vr(le) ? " temporary" : ""}`,
              style: { top: Ne.top, height: Ne.height, left: `calc(${ne * pe}% + 4px)`, width: `calc(${pe}% - 8px)` },
              tabIndex: 0,
              role: "button",
              onClick: (F) => {
                F.target.closest("button") || o(le, F.currentTarget);
              },
              onKeyDown: (F) => {
                (F.key === "Enter" || F.key === " ") && (F.preventDefault(), o(le, F.currentTarget));
              },
              "data-item-id": le.id,
              "aria-label": `${Oa(Z)} ${le.title}${k ? "（已过期待标记）" : ""}，${le.domain === "course" ? `${le.duration || "—"} 分钟课程` : "事务"}，打开详情`,
              children: [
                /* @__PURE__ */ i.jsxs("strong", { children: [
                  Oa(Z),
                  " · ",
                  le.title,
                  k ? "（过期）" : ""
                ] }),
                /* @__PURE__ */ i.jsx("span", { children: le.domain === "course" ? `${le.duration || "—"} 分钟 · 课程` : le.estimated_minutes ? `${le.estimated_minutes} 分钟 · 事务` : "事务" })
              ]
            },
            le.id
          );
        }) }, V);
      })
    ] })
  ] }) });
}
function Lh({ items: c, range: f, localDate: d, onOpenDay: o }) {
  const E = w.useMemo(() => Dy(f, d), [f, d]), j = (f.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), p = w.useMemo(() => {
    const N = /* @__PURE__ */ new Map();
    return c.forEach((b) => {
      const U = Uu(b);
      U && (U < d && ["已取消", "已调课", "cancelled"].includes(b.status) || N.set(U, [...N.get(U) || [], b]));
    }), N.forEach((b, U) => N.set(U, [...b].sort((A, S) => String(gt(A) || "").localeCompare(String(gt(S) || ""))))), N;
  }, [c, d]), R = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ i.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ i.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "month-weekdays", children: R.map((N) => /* @__PURE__ */ i.jsxs("span", { children: [
      "周",
      N
    ] }, N)) }),
    /* @__PURE__ */ i.jsx("div", { className: "month-grid", children: E.map((N) => {
      const b = p.get(N) || [], U = ["month-cell"];
      return N.startsWith(j) || U.push("outside"), N === d && U.push("today"), /* @__PURE__ */ i.jsxs("button", { type: "button", className: U.join(" "), onClick: (A) => o(N, A.currentTarget), children: [
        /* @__PURE__ */ i.jsxs("header", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: Number(N.slice(8, 10)) }),
          /* @__PURE__ */ i.jsx("span", { children: b.length ? `${b.length} 项` : "" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "month-item-list", children: [
          b.slice(0, 3).map((A) => /* @__PURE__ */ i.jsxs("span", { className: `month-item ${A.domain} ${mr(A, d)}${vr(A) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ i.jsx("i", {}),
            Oa(gt(A)) || "待定",
            " · ",
            A.title,
            hr(A, d) ? "（过期）" : ""
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
function er(c) {
  const f = Math.floor(c / 60), d = c % 60;
  return String(f).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function Py({ onAction: c, onAskAi: f, refreshKey: d = 0 }) {
  const [o, E] = w.useState(() => yi("cockpit")), [j, p] = w.useState(!o), [R, N] = w.useState(""), b = w.useCallback(async (S = !1, Y = !1) => {
    S || p(!0);
    try {
      const Q = await lt("api/cockpit" + (Y ? "?fresh=1" : ""));
      return E(Q), Ru("cockpit", Q), N(""), !0;
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
  const U = w.useMemo(() => {
    const S = /* @__PURE__ */ new Map();
    for (const Q of o?.students ?? [])
      S.has(Q.group) || S.set(Q.group, []), S.get(Q.group).push(Q);
    return ["本周已排", "已预留", "未排"].map((Q) => ({ label: Q, items: S.get(Q) ?? [] }));
  }, [o]);
  if (j && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (R && !o) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx(It, { label: "驾驶舱读取", ok: !1, detail: R }) });
  const A = o?.localDate ?? "";
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ i.jsx(gi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
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
        /* @__PURE__ */ i.jsx(ea, { title: "候选学生" }),
        U.map((S) => /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            S.label,
            " · ",
            S.items.length
          ] }),
          S.items.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "（无）" }) : S.items.map((Y) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: Y.name }),
            /* @__PURE__ */ i.jsx("span", { className: "cockpit-zone", children: Y.zone })
          ] }, Y.name))
        ] }, S.label))
      ] }),
      /* @__PURE__ */ i.jsx("section", { className: "cockpit-canvas", children: o?.days.map((S) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day" + (S.date === A ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ i.jsx("strong", { children: S.weekday }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: S.date.slice(5) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-body", children: [
          S.courses.map((Y, Q) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => c({ operation: "course_move", student: Y.title, fromDate: S.date, fromTime: String(Y.start).slice(11, 16) }), children: [
              /* @__PURE__ */ i.jsx("span", { children: Y.title }),
              /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
                String(Y.start).slice(11, 16),
                "–",
                String(Y.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "cockpit-card-ai", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", title: "用一句话交给 AI 调时间", onClick: () => f("把" + Y.title + " " + S.date + " " + String(Y.start).slice(11, 16) + " 的这节课调一下时间"), children: "调时间" })
          ] }, "c" + Q)),
          S.reservations.map((Y, Q) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => c({ operation: "reservation_update", id: Y.id, student: Y.student, date: S.date, time: String(Y.start).slice(11, 16) }), children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              Y.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
              String(Y.start).slice(11, 16),
              "–",
              String(Y.end).slice(11, 16)
            ] })
          ] }, "r" + Q)),
          S.gaps.map((Y, Q) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + Y.minutes + " 分钟，点击预留", onClick: () => c({ operation: "reservation_add", date: S.date, time: er(Y.start) }), children: [
            er(Y.start),
            "–",
            er(Y.end),
            " 空档"
          ] }, "g" + Q)),
          S.courses.length === 0 && S.reservations.length === 0 && /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, S.date)) }),
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "实时诊断" }),
        /* @__PURE__ */ i.jsx(pn, { label: "本周课程", value: o?.diagnostics.courseCount ?? 0, hint: "共 " + (o?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ i.jsx(pn, { label: "有效预留", value: o?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
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
        (o?.warnings ?? []).map((S, Y) => /* @__PURE__ */ i.jsx(It, { label: "读取警告", ok: !1, detail: S }, Y))
      ] })
    ] })
  ] });
}
function eg({ onAction: c, onAskAi: f, refreshKey: d, sectionHint: o, scheduleText: E, onDataChanged: j }) {
  const [p, R] = w.useState(() => yi("planning")), [N, b] = w.useState(""), [U, A] = w.useState("calendar"), [S, Y] = w.useState("issues"), [Q, ve] = w.useState(!1), [V, ce] = w.useState(null), [le, ne] = w.useState(!1), [$, Ne] = w.useState(null), [pe, Z] = w.useState({});
  w.useEffect(() => {
    o?.section && A(o.section);
  }, [o?.nonce]), w.useEffect(() => {
    let y = !1;
    return lt(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((P) => {
      if (y) return;
      const h = Gy(P);
      R(h), Ru("planning", h), b(""), ce(null);
    }).catch((P) => {
      y || b(P.message || "筹备数据读取失败");
    }), () => {
      y = !0;
    };
  }, [d]), w.useEffect(() => {
    const y = Object.entries(pe).at(-1);
    if (!y || !y[1].ok || $ === y[0]) return;
    const P = window.setTimeout(() => {
      Z((h) => {
        const D = { ...h };
        return delete D[y[0]], D;
      });
    }, 4500);
    return () => window.clearTimeout(P);
  }, [$, pe]);
  async function k() {
    if (!(!p || le)) {
      ne(!0), ce(null);
      try {
        ce(await lt(`api/planning/template-check?monday=${encodeURIComponent(p.weekMonday)}`));
      } catch (y) {
        ce({ ok: !1, passed: !1, monday: p.weekMonday, output: "", affectedDates: [], error: y.message });
      } finally {
        ne(!1);
      }
    }
  }
  async function F(y) {
    if (!$) {
      Ne(y), Z((P) => ({ ...P, [y]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const P = await lt("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: y })
        });
        if (!P.ok) throw new Error(P.error || "取消预留未完成");
        R((h) => h && {
          ...h,
          reservations: h.reservations.map((D) => D.reservation_id === y ? { ...D, status: "已取消" } : D)
        }), Z((h) => ({ ...h, [y]: { ok: !0, text: P.message || "已取消预留" } })), j({ silent: !0 });
      } catch (P) {
        Z((h) => ({ ...h, [y]: { ok: !1, text: `取消失败：${P.message || "未知错误"}` } }));
      } finally {
        Ne(null);
      }
    }
  }
  async function re(y) {
    if (!$) {
      Ne(y), Z((P) => ({ ...P, [y]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const P = await lt("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: y })
        });
        if (!P.ok) throw new Error(P.error || "预留确认失败");
        R((h) => h && {
          ...h,
          summary: { ...h.summary, formalCourseCount: h.summary.formalCourseCount + 1 },
          reservations: h.reservations.map((D) => D.reservation_id === y ? { ...D, status: "已确认" } : D),
          audit: {
            ...h.audit,
            reservation_hard_blockers: h.audit.reservation_hard_blockers.filter((D) => D.reservation_id !== y)
          }
        }), Z((h) => ({ ...h, [y]: { ok: !0, text: P.message || "已确认落课" } })), j({ silent: !0 });
      } catch (P) {
        Z((h) => ({ ...h, [y]: { ok: !1, text: `确认失败：${P.message || "未知错误"}` } })), j({ silent: !0 });
      } finally {
        Ne(null);
      }
    }
  }
  if (N) return /* @__PURE__ */ i.jsx(Dl, { tone: "error", title: "筹备数据读取失败", text: N });
  if (!p) return /* @__PURE__ */ i.jsx(yr, {});
  const J = p.summary, ae = p.students.filter((y) => y.confirmed && y.zone !== "未分区" && (y.availability.length > 0 || y.hasReservation)).length, be = J.activeStudentCount ? Math.round(ae / J.activeStudentCount * 100) : 100, De = p.commute.overlaps.length, Oe = new Map(p.audit.reservation_hard_blockers.map((y) => [y.reservation_id, y.reasons])), g = p.students.filter((y) => S === "all" ? !0 : S === "availability" ? !y.availability.length && !y.hasReservation : S === "zone" ? y.zone === "未分区" : S === "pending" ? !!y.pendingWeekday || !y.confirmed : y.issues.length > 0), B = Q ? g : g.slice(0, 10), I = p.sources.filter((y) => !y.ok);
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ i.jsx(gi, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    I.length > 0 && /* @__PURE__ */ i.jsx(Dl, { tone: "warn", title: `${I.length} 项筹备数据读取异常`, text: I.map((y) => `${y.label}：${y.message || "读取失败"}`).join("；") }),
    J.reservationHardBlockerCount > 0 && /* @__PURE__ */ i.jsx(Dl, { tone: "warn", title: `${J.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: p.audit.reservation_hard_blockers.map((y) => `${y.student} ${y.date}：${y.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ i.jsx(
      sr,
      {
        label: "筹备页内部导航",
        value: U,
        onChange: (y) => A(y),
        items: [
          { id: "calendar", label: "周视图", count: p.reservations.length + p.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: J.unzonedCount + J.missingAvailabilityCount + J.unconfirmedActiveCount + p.students.filter((y) => y.issues.length).length },
          { id: "candidates", label: "预留与复核", count: De + J.reservationCount + J.reviewCount + J.overdueCount + I.length }
        ]
      }
    ),
    /* @__PURE__ */ i.jsx(tg, { planning: p, hidden: U !== "calendar", onConfirmReservation: re, onCancelReservation: F, onAction: c, confirmingReservationId: $, reservationFeedback: pe }),
    /* @__PURE__ */ i.jsxs("div", { hidden: U !== "trial", children: [
      /* @__PURE__ */ i.jsx(gi, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ i.jsx(Py, { onAction: c, onAskAi: f, refreshKey: d })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ i.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          ae,
          "/",
          J.activeStudentCount
        ] }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          be,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ i.jsx("i", { style: { width: `${be}%` } }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: De ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ i.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ i.jsx("strong", { children: De }),
        /* @__PURE__ */ i.jsx("small", { children: De ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ i.jsx("strong", { children: J.reservationCount }),
        /* @__PURE__ */ i.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ i.jsx("strong", { children: J.formalCourseCount }),
        /* @__PURE__ */ i.jsx("small", { children: J.reviewCount + J.overdueCount ? `${J.reviewCount + J.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-overview-grid", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ i.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            J.activeStudentCount - ae,
            " 人仍有关键资料缺口。contract ",
            p.contract.version ?? "—",
            " · schema ",
            p.contract.schemaVersion ?? "—",
            " · ",
            Bh(p.range)
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            Y("availability"), A("students");
          }, children: [
            "缺候选时间 ",
            J.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            Y("zone"), A("students");
          }, children: [
            "未分区 ",
            J.unzonedCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            Y("pending"), A("students");
          }, children: [
            "待确认 ",
            J.unconfirmedActiveCount + J.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ i.jsx("h3", { children: De ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            De,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => A("candidates"), children: "查看候选与预留" }),
          J.reviewCount + J.overdueCount + I.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => A("candidates"), children: "处理复核与异常" })
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
        ].map(([y, P]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: S === y ? "selected" : "", onClick: () => {
          Y(y), ve(!1);
        }, children: P }, y)) })
      ] }),
      g.length ? /* @__PURE__ */ i.jsxs("div", { className: "planning-student-list", children: [
        B.map((y) => {
          const P = y.availability.length ? y.availability.map((h) => `${h.weekday} ${h.start_time}-${h.end_time}`).join("；") : "尚未记录";
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
              /* @__PURE__ */ i.jsx("span", { className: !y.availability.length && !y.hasReservation ? "state-warn" : "", title: P, children: y.availability.length ? P : y.hasReservation ? "已有单日预留" : P })
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
        g.length > 10 && /* @__PURE__ */ i.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => ve((y) => !y), children: Q ? "收起学生列表" : `再看 ${g.length - 10} 人` })
      ] }) : /* @__PURE__ */ i.jsx(nl, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      p.inactiveConfirmed.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          p.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-student-context", hidden: U !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ i.jsx("span", { children: p.pending.map((y) => y.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ i.jsx("span", { children: p.vacations.map((y) => `${y.student} ${y.start_date.slice(5)}—${y.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ i.jsx("span", { children: p.zones.map((y) => `${y.zone} ${y.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-two-column", hidden: U !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "课程预留", meta: `${p.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        p.reservations.length ? /* @__PURE__ */ i.jsx("div", { className: "reservation-card-list", children: p.reservations.map((y) => {
          const P = (y.conflicts?.formal_courses?.length || 0) + (y.conflicts?.soft_reservations?.length || 0), h = Oe.get(y.reservation_id) || [], D = `reservation-blocker-${y.reservation_id}`, X = y.status === "已确认" ? "已落课" : y.status === "预期" ? "待落课" : y.status, K = h.length ? "blocked" : y.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ i.jsxs("article", { className: `reservation-card ${K}`, children: [
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
              /* @__PURE__ */ i.jsxs("small", { id: D, children: [
                X,
                P ? ` · ${P} 项软冲突` : "",
                h.length ? ` · 硬约束：${h.join("、")}` : "",
                y.note ? ` · ${y.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "reservation-actions", children: y.status === "预期" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "reservation-update", onClick: () => c({ operation: "reservation_update", reservationId: y.reservation_id, date: y.reservation_date, time: y.start_time, duration: y.duration, zone: y.zone || "", note: y.note || "" }), children: "调时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: h.length > 0, "aria-describedby": h.length ? D : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: y.reservation_id }), children: h.length ? "暂不可落课" : "确认落课" }),
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
              J.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", disabled: le, onClick: () => {
            k();
          }, children: le ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ i.jsx(tr, { label: "时间重叠", count: p.commute.overlaps.length, tone: "danger", details: p.commute.overlaps.slice(0, 3).map((y) => `${y.weekday} ${y.first} ${y.firstRange} / ${y.second} ${y.secondRange}`) }),
          /* @__PURE__ */ i.jsx(tr, { label: "长期候选时间差异", count: p.commute.availabilityConflicts.length, tone: "neutral", details: p.commute.availabilityConflicts.slice(0, 3).map((y) => `${y.student} ${y.weekday} ${y.startTime}-${y.endTime}（仅提示）`) }),
          /* @__PURE__ */ i.jsx(tr, { label: "排时间时再问通勤", count: p.commute.missingRoutes.length, tone: "neutral", details: p.commute.missingRoutes.slice(0, 3).map((y) => `${y.weekday} ${y.from} → ${y.to}`) })
        ] }),
        p.commute.missingRoutes.slice(0, 2).map((y) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: y.from, toStudent: y.to }), children: [
          "补录 ",
          y.from,
          " → ",
          y.to
        ] }, `${y.weekday}-${y.from}-${y.to}`)),
        V && /* @__PURE__ */ i.jsxs("div", { className: V.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ i.jsx("strong", { children: V.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ i.jsx("pre", { children: V.error || V.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    U === "candidates" && (p.reviews.length > 0 || J.overdueCount > 0) && /* @__PURE__ */ i.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ i.jsx(ea, { title: "历史课程复核", meta: `${p.reviews.length} 节待确认 · ${J.overdueCount} 节过期待转入`, action: J.overdueCount ? `处理 ${J.overdueCount} 节过期课` : void 0, onAction: J.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ i.jsx("div", { className: "review-card-list", children: p.reviews.map((y) => /* @__PURE__ */ i.jsxs("article", { className: "review-card", children: [
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
    U === "candidates" && p.reviews.length === 0 && J.overdueCount === 0 && /* @__PURE__ */ i.jsx("section", { className: "panel", children: /* @__PURE__ */ i.jsx(nl, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-detail-grid", hidden: U !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "过期待转入：" }),
            J.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "人工待复核：" }),
            J.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "读取异常：" }),
            I.length,
            " 项"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ i.jsx("div", { className: "source-status-list", children: p.sources.map((y) => /* @__PURE__ */ i.jsxs("span", { className: y.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          y.label
        ] }, y.label)) }),
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
function tg({ planning: c, hidden: f, onConfirmReservation: d, onCancelReservation: o, onAction: E, confirmingReservationId: j, reservationFeedback: p }) {
  const [R, N] = w.useState("reservation"), [b, U] = w.useState(null), A = kh(), [S, Y] = w.useState(c.weekMonday), [Q, ve] = w.useState(0), [V, ce] = w.useState(null), le = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], ne = w.useMemo(() => ir(`${S}..${S}`, S), [S]), { visibleDays: $, paginated: Ne } = Wy(A.ref, !!V), pe = Math.max(1, Math.ceil(7 / Math.max(1, $))), Z = w.useMemo(
    () => V ? [V] : Ne ? wy(ne, Q, $) : ne,
    [ne, Q, V, Ne, $]
  );
  w.useEffect(() => {
    Y(c.weekMonday);
  }, [c.weekMonday]), w.useEffect(() => {
    ve(0), ce(null), U(null);
  }, [S, R]);
  const k = w.useMemo(() => fr(c.range), [c.range]), F = w.useMemo(() => ir(c.range, c.localDate)[0], [c.range, c.localDate]), re = S > F, J = !!(k.end && wl(S, 7) <= k.end), ae = w.useMemo(() => new Map(c.students.map((G) => [G.name, G])), [c.students]), be = w.useMemo(() => new Map(c.pending.map((G) => [G.student, G])), [c.pending]), De = w.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((G) => [G.reservation_id, G.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), Oe = w.useMemo(() => {
    const G = (ge, W = "在读") => W !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : be.has(ge) ? { studentState: "待定", stateClass: "pending" } : ae.get(ge)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, He = (ge) => ({
      ...ge,
      start_at: `${ge.date}T${ge.start_time}:00+08:00`,
      end_at: `${ge.date}T${ge.end_time}:00+08:00`
    });
    return R === "reservation" ? c.reservations.filter((ge) => ge.reservation_date >= ne[0] && ge.reservation_date <= ne[6] && ge.status !== "已取消").map((ge) => {
      const W = De.get(ge.reservation_id), ta = (ge.student_status || "在读") !== "在读", $e = ge.status === "已确认";
      return He({
        id: ge.reservation_id,
        kind: "reservation",
        reservationId: ge.reservation_id,
        reservationStatus: ge.status,
        confirmedCourseId: ge.confirmed_course_id,
        blockerText: W,
        student: ge.student,
        date: ge.reservation_date,
        weekday: ge.weekday,
        start_time: ge.start_time,
        end_time: ge.end_time,
        duration: ge.duration,
        studentState: ta ? "已暂停" : $e ? "已落课" : W ? "有硬约束" : "待落课",
        stateClass: ta ? "paused" : $e ? "landed" : W ? "blocked" : "expected",
        zone: ge.zone,
        note: ge.note
      });
    }) : c.templates.flatMap((ge) => {
      const W = le.indexOf(ge.weekday);
      if (W < 0) return [];
      const ta = ne[W], $e = G(ge.student, ge.student_status);
      return [He({
        id: `template-${ge.template_id}`,
        kind: "template",
        student: ge.student,
        date: ta,
        weekday: ge.weekday,
        start_time: ge.start_time,
        end_time: ge.end_time,
        duration: ge.duration,
        studentState: $e.studentState,
        stateClass: $e.stateClass
      })];
    });
  }, [ne, R, be, c.reservations, c.templates, De, ae]);
  w.useEffect(() => {
    b && !Oe.some((G) => G.id === b && G.kind === "reservation") && U(null);
  }, [Oe, b]), w.useEffect(() => {
    if (!V) return;
    const G = (He) => {
      He.key === "Escape" && ce(null);
    };
    return window.addEventListener("keydown", G), () => window.removeEventListener("keydown", G);
  }, [V]), w.useEffect(() => {
    if (!b) return;
    const G = (He) => {
      He.key === "Escape" && U(null);
    };
    return window.addEventListener("keydown", G), () => window.removeEventListener("keydown", G);
  }, [b]);
  const g = !!j, B = w.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    return Oe.forEach((He) => G.set(He.date, [...G.get(He.date) || [], He])), G;
  }, [Oe]), I = w.useMemo(() => new Map(ne.map((G) => [G, Jy(B.get(G) || [])])), [B, ne]), y = w.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    for (const He of ne)
      G.set(He, dr(B.get(He) || []));
    return G;
  }, [B, ne]), P = Z.map((G) => G && I.get(G) || 1);
  P.reduce((G, He) => G + He, 0);
  const h = `52px ${P.map((G) => `minmax(0, ${G}fr)`).join(" ")}`, D = Z.length >= 7 ? Oe : Oe.filter((G) => Z.includes(G.date)), { startHour: X, endHour: K } = qh(D), oe = V ? 92 : $ >= 6 ? 64 : $ >= 4 ? 72 : 84, je = (K - X) * oe, Me = Array.from({ length: K - X + 1 }, (G, He) => X + He), nt = `${Pt(`${ne[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${Pt(`${ne[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ i.jsxs("section", { className: `panel planning-week-panel ${R}-mode`, hidden: f, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ i.jsx("h3", { children: R === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ i.jsx("span", { children: R === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: R === "reservation" ? "selected" : "", "aria-pressed": R === "reservation", onClick: () => N("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.reservations.length })
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: R === "template" ? "selected" : "", "aria-pressed": R === "template", onClick: () => N("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "上一周", disabled: !re, onClick: () => Y((G) => wl(G, -7)), children: "‹" }),
          /* @__PURE__ */ i.jsx("strong", { children: nt }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "下一周", disabled: !J, onClick: () => Y((G) => wl(G, 7)), children: "›" })
        ] }),
        V ? /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => ce(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            Pt(`${V}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true" })
        ] }) : Ne && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Q === 0, onClick: () => ve((G) => Math.max(0, G - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "第 ",
            Q + 1,
            "/",
            pe,
            " 页 · 每页 ",
            $,
            " 天"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Q >= pe - 1, onClick: () => ve((G) => Math.min(pe - 1, G + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "planning-week-legend", children: R === "reservation" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
    Oe.length ? /* @__PURE__ */ i.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，点击日期标题聚焦到单日", ...A, children: /* @__PURE__ */ i.jsxs("div", { className: "planning-week-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: h }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-corner", children: "时间" }),
        Z.map((G, He) => G ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: G === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => ce(G), "aria-label": `聚焦到 ${Pt(`${G}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ i.jsx("span", { children: le[ne.indexOf(G)] }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(G.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            B.get(G)?.length || 0,
            " 项"
          ] })
        ] }, G) : /* @__PURE__ */ i.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${He}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: h }, onPointerDown: (G) => {
        G.target.closest(".planning-week-block") || U(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-axis", style: { height: je }, children: Me.map((G) => /* @__PURE__ */ i.jsxs("span", { style: { top: (G - X) * oe }, children: [
          String(G).padStart(2, "0"),
          ":00"
        ] }, G)) }),
        Z.map((G, He) => {
          if (!G) return /* @__PURE__ */ i.jsx("div", { className: "planning-week-track empty-slot", style: { height: je }, "aria-hidden": "true" }, `empty-${He}`);
          const ge = y.get(G) || [];
          return /* @__PURE__ */ i.jsx("div", { className: G === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: je }, children: ge.map(({ item: W, lane: ta, laneCount: $e }) => {
            const aa = Hh(W, X, K, oe);
            if (!aa) return null;
            const Qt = 100 / $e, la = W.kind === "reservation" && W.reservationStatus === "预期", na = W.kind === "reservation" && W.reservationStatus === "已确认", mt = !!(W.reservationId && (la || na)), Ot = !!(la && j === W.reservationId), st = !!(mt && (b === W.id || Ot)), fa = W.reservationId ? p[W.reservationId] : void 0, ul = !!(g || W.blockerText || W.stateClass === "paused");
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `planning-week-block ${W.kind} ${W.stateClass}${mt ? " actionable" : ""}${st ? " action-open" : ""}`,
                tabIndex: mt ? 0 : void 0,
                role: mt ? "button" : void 0,
                "aria-expanded": mt ? st : void 0,
                "aria-label": `${W.start_time}-${W.end_time} ${W.student}，${W.studentState}${W.zone ? `，${W.zone}` : ""}${la ? "；移入或点击后可调整时间、确认落课" : na ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (_e) => {
                  mt && !_e.target.closest("button") && U((Ut) => Ut === W.id ? null : W.id);
                },
                onKeyDown: (_e) => {
                  mt && (_e.key === "Enter" || _e.key === " " ? (_e.preventDefault(), U((Ut) => Ut === W.id ? null : W.id)) : _e.key === "Escape" && (_e.preventDefault(), U(null)));
                },
                style: { top: aa.top, height: aa.height, left: `calc(${ta * Qt}% + 4px)`, width: `calc(${Qt}% - 8px)` },
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    W.start_time,
                    " · ",
                    W.student
                  ] }),
                  /* @__PURE__ */ i.jsxs("span", { children: [
                    W.duration,
                    " 分钟 · ",
                    W.studentState,
                    W.zone ? ` · ${W.zone}` : ""
                  ] }),
                  mt && /* @__PURE__ */ i.jsxs("div", { className: "planning-week-inline-action", onClick: (_e) => _e.stopPropagation(), children: [
                    /* @__PURE__ */ i.jsx("div", { className: "planning-week-inline-buttons", children: la ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: g, onClick: () => {
                        U(null), E({ operation: "reservation_update", reservationId: W.reservationId, date: W.date, time: W.start_time, duration: W.duration, zone: W.zone || "", note: W.note || "" });
                      }, children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: ul, "aria-busy": Ot, onClick: () => {
                        const _e = d(W.reservationId);
                        _e && typeof _e.then == "function" && _e.finally(() => U(null));
                      }, children: Ot ? "确认中…" : g ? "处理中…" : W.stateClass === "paused" ? "学生已暂停" : W.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => E({ operation: "course_move", student: W.student, fromDate: W.date, fromTime: W.start_time, toDate: W.date, toTime: W.start_time, duration: W.duration }), children: "调时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => E({ operation: "course_cancel", student: W.student, date: W.date, time: W.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", disabled: g, onClick: () => {
                        const _e = o(W.reservationId);
                        _e && typeof _e.then == "function" && _e.finally(() => U(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (W.blockerText || fa) && /* @__PURE__ */ i.jsx(Vh, { ok: !!fa?.ok, text: fa?.text || W.blockerText || "" })
                  ] })
                ]
              },
              W.id
            );
          }) }, G);
        })
      ] })
    ] }) }) : /* @__PURE__ */ i.jsx(nl, { title: R === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: R === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function tr({ label: c, count: f, tone: d, details: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("span", { children: c }),
      /* @__PURE__ */ i.jsx("strong", { children: f })
    ] }),
    o.length > 0 && /* @__PURE__ */ i.jsx("ul", { children: o.map((E) => /* @__PURE__ */ i.jsx("li", { children: E }, E)) })
  ] });
}
const ag = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function lg({ item: c, onInspect: f, onPrepare: d, onQuick: o, onAskAi: E, onRetry: j, onRetryPrev: p, retryingId: R, feedback: N }) {
  const b = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), U = R === c.id, A = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", S = Date.now(), Y = c.deadline_at ? new Date(c.deadline_at).getTime() : null, Q = Y != null ? Math.ceil((Y - S) / 864e5) : null, ve = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ i.jsxs(
    "article",
    {
      className: `affair-card ${A}${b ? " closed" : ""}`,
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
            /* @__PURE__ */ i.jsx("strong", { children: Oa(c.start_at) }),
            /* @__PURE__ */ i.jsx("span", { children: Pt(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          A === "deadline" && c.deadline_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: Pt(c.deadline_at, { month: "numeric", day: "numeric" }) }),
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
            /* @__PURE__ */ i.jsx("span", { children: ve ? `下次 ${ve.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ i.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ i.jsx(Gh, { value: c.status }),
            c.note ? /* @__PURE__ */ i.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ i.jsx("em", { children: `提醒 ${Pt(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${Oa(c.next_prompt_at)}` }) : null
          ] }),
          A === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ i.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((V) => /* @__PURE__ */ i.jsx("i", { children: ag[V] || V }, V)) }) : null,
          N ? /* @__PURE__ */ i.jsx(Vh, { ok: N.ok, text: N.text }) : null,
          N?.undo && p ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!R, onClick: () => {
            p(c);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "affair-card-actions", children: !b && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do primary", disabled: !!R || N?.ok, onClick: () => o?.("affairComplete", c), children: N?.ok ? "已完成" : "完成" }),
          c.retry && j ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!R || !!N?.ok, "aria-busy": U, onClick: () => {
            j(c);
          }, children: U ? "处理中…" : N?.buttonLabel || "没约上" }) : E ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => E(`把「${c.title}」（${c.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function ng({ onPrepare: c, onQuick: f, onAskAi: d, onInspect: o, onRetry: E, onRetryPrev: j, retryingId: p, feedback: R, refreshKey: N, observedAt: b, onOpenDay: U, localDate: A }) {
  const [S, Y] = w.useState("pending"), [Q, ve] = w.useState("list"), [V, ce] = w.useState(() => yi("affairs-month")), [le, ne] = w.useState(""), $ = w.useCallback((g) => {
    lt("api/affairs-month" + (g ? "?fresh=1" : "")).then((B) => {
      if (!B || !Array.isArray(B.affairs) || !Array.isArray(B.pending)) return;
      const I = {
        affairs: B.affairs.map((y) => ({ ...y, domain: "affair" })),
        pending: B.pending.map((y) => ({ ...y, domain: "affair" })),
        month: String(B.month || "")
      };
      ce(I), Ru("affairs-month", I), ne("");
    }).catch(() => {
    });
  }, []);
  w.useEffect(() => {
    $(!V);
  }, [$]), w.useEffect(() => {
    N > 0 && $(!0);
  }, [N]), w.useEffect(() => {
    b && V && $(!1);
  }, [b, $]);
  const Ne = V?.pending ?? [], pe = V?.affairs ?? [], Z = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), k = pe.filter((g) => !Z.has(g.status)).sort((g, B) => String(gt(g) || "").localeCompare(String(gt(B) || ""))), F = pe.filter((g) => Z.has(g.status)).sort((g, B) => String(gt(B) || "").localeCompare(String(gt(g) || ""))), re = F.filter((g) => !["cancelled", "已取消"].includes(g.status)).length, J = V?.month ? `${V.month}-01..${V.month}-01` : "", be = { pending: Ne, scheduled: k, closed: F }[S], De = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[S];
  function Oe(g, B) {
    const I = pe.filter((y) => Uu(y) === g);
    U(g, I, B);
  }
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx(gi, { eyebrow: `事务 · 本月 ${V?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${re} 件、取消 ${F.length - re} 件，进行中 ${k.length} 件。点日历上的任何一天，看那天的安排。` }),
    le && /* @__PURE__ */ i.jsx(Dl, { tone: "error", title: "事务数据读取失败", text: le }),
    !V && /* @__PURE__ */ i.jsx(yr, {}),
    V && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ i.jsx(
          sr,
          {
            label: "事务状态",
            value: S,
            onChange: (g) => Y(g),
            items: [
              { id: "pending", label: "待处理", count: Ne.length },
              { id: "scheduled", label: "已安排", count: k.length },
              { id: "closed", label: "已完成·已取消", count: F.length }
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          sr,
          {
            label: "视图切换",
            value: Q,
            onChange: (g) => ve(g),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      Q === "calendar" ? /* @__PURE__ */ i.jsx(Lh, { items: pe, range: J, localDate: A ?? V.month + "-01", onOpenDay: Oe }) : /* @__PURE__ */ i.jsx("div", { children: be.length ? be.map((g) => /* @__PURE__ */ i.jsx(lg, { item: g, onInspect: o, onPrepare: c, onQuick: f, onAskAi: d, onRetry: E, onRetryPrev: j, retryingId: p, feedback: R[g.id] }, g.id)) : /* @__PURE__ */ i.jsx(nl, { title: De.title, text: De.text }) })
    ] })
  ] });
}
function ig({ pending: c, students: f, preset: d, aiDraft: o, preview: E, busy: j, onPreview: p, onAiPreview: R, onCommit: N, onCommitBatch: b, onClear: U, onClose: A }) {
  const [S, Y] = w.useState(d?.operation || "course_move"), [Q, ve] = w.useState(d?.affairKind || "timed"), [V, ce] = w.useState(d?.student || ""), [le, ne] = w.useState(d?.duration || ""), [$, Ne] = w.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  w.useEffect(() => {
    d?.operation && Y(d.operation), d?.affairKind && ve(d.affairKind), d?.student && ce(d.student), d?.duration && ne(d.duration);
  }, [d]);
  function pe(k) {
    k.preventDefault();
    const F = new FormData(k.currentTarget), re = { operation: S };
    for (const [J, ae] of F.entries())
      J !== "operation" && String(ae).trim() && (re[J] = ae);
    re.duration && (re.duration = Number(re.duration)), re.minutes !== void 0 && (re.minutes = Number(re.minutes)), re.expectedVersion && (re.expectedVersion = Number(re.expectedVersion)), S === "course_plan" && (re.moves = $.map((J) => ({ ...J, duration: J.duration ? Number(J.duration) : void 0 }))), p(re);
  }
  function Z(k, F, re) {
    Ne((J) => J.map((ae, be) => be === k ? { ...ae, [F]: re } : ae));
  }
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ i.jsx(sg, { initialDraft: o, preview: E, busy: j, onPreview: R, onCommit: N, onCommitBatch: b, onClear: U, onClose: A }),
    /* @__PURE__ */ i.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ i.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ i.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ i.jsxs("form", { className: "panel operation-form", onSubmit: pe, children: [
          /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ i.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ i.jsxs("select", { name: "operation", value: S, onChange: (k) => {
              Y(k.target.value), U();
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
            /* @__PURE__ */ i.jsx(de, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ i.jsx(de, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          S === "course_cancel" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
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
                    const F = f.find((re) => re.name === k.target.value);
                    ce(k.target.value), F && ne(F.default_duration);
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
            /* @__PURE__ */ i.jsx(de, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: le, onChange: (k) => ne(k.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ i.jsx(de, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
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
                    const F = f.find((re) => re.name === k.target.value);
                    ce(k.target.value), F && ne(F.default_duration);
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
            /* @__PURE__ */ i.jsx(de, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: le, onChange: (k) => ne(k.target.value) })
            ] }),
            /* @__PURE__ */ i.jsx(de, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(de, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          S === "reservation_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(de, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(S) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          S === "zone_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          S === "availability_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((k) => /* @__PURE__ */ i.jsx("option", { value: k, children: k }, k))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(de, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          S === "availability_clear" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((k) => /* @__PURE__ */ i.jsx("option", { value: k, children: k }, k))
              ] })
            ] })
          ] }),
          S === "commute_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ i.jsx(de, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          S === "quarantine_overdue" && /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          S === "course_review_resolve" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ i.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ i.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ i.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          S === "course_day_complete" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          S === "course_plan" && /* @__PURE__ */ i.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ i.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", onClick: () => Ne((k) => [...k, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            $.map((k, F) => /* @__PURE__ */ i.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ i.jsx("span", { className: "plan-index", children: F + 1 }),
              /* @__PURE__ */ i.jsxs("select", { value: k.student || "", onChange: (re) => {
                const J = f.find((ae) => ae.name === re.target.value);
                Z(F, "student", re.target.value), J && Z(F, "duration", J.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "学生" }),
                f.filter((re) => re.status === "在读").map((re) => /* @__PURE__ */ i.jsx("option", { value: re.name, children: re.name }, re.name))
              ] }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: k.fromDate || "", onChange: (re) => Z(F, "fromDate", re.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: k.fromTime || "", onChange: (re) => Z(F, "fromTime", re.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: k.toDate || "", onChange: (re) => Z(F, "toDate", re.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: k.toTime || "", onChange: (re) => Z(F, "toTime", re.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: k.duration || "", onChange: (re) => Z(F, "duration", re.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "plan-remove", disabled: $.length <= 2, onClick: () => Ne((re) => re.filter((J, ae) => ae !== F)), children: "×" })
            ] }, F))
          ] }),
          S === "affair_create" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "类型" }),
              /* @__PURE__ */ i.jsxs("select", { name: "affairKind", value: Q, onChange: (k) => ve(k.target.value), children: [
                /* @__PURE__ */ i.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ i.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ i.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ i.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            Q === "timed" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(de, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(de, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ i.jsx(de, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            Q === "deadline" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(de, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(de, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            Q === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(de, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(de, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            Q === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(de, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ i.jsx(de, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ i.jsx(de, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ i.jsx(de, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
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
            /* @__PURE__ */ i.jsx(de, { name: "title", label: "新标题（可选）", defaultValue: d?.title }),
            /* @__PURE__ */ i.jsx(de, { name: "startDate", label: "新开始日期（可选）", type: "date" }),
            /* @__PURE__ */ i.jsx(de, { name: "startTime", label: "新开始时间（可选）", type: "time" }),
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
            /* @__PURE__ */ i.jsx(de, { name: "note", label: "新备注（可选）" }),
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
            /* @__PURE__ */ i.jsx(de, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
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
            S === "affair_retry_next" && /* @__PURE__ */ i.jsx(de, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          S === "calendar_sync" && /* @__PURE__ */ i.jsx(de, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ i.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: "primary-button full", type: "submit", disabled: j, children: j ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: S })),
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
              }, disabled: j, children: j ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ i.jsx(Yh, { preview: E, onClose: A })
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
}, ug = {
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
function cg({ preview: c, busy: f, onCommit: d, onCommitBatch: o, onClose: E }) {
  const j = c.operation || "", p = c.input || {}, R = Object.entries(p).filter(([U, A]) => A != null && A !== "" && !U.startsWith("_")), N = c.result?.affected_dates, b = c.batchItems ?? [];
  return b.length ? /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.committed ? c.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.committed ? c.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${b.length} 项` }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.message })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "batch-list", children: b.map((U, A) => {
      const S = c.committed ? { text: U.resultOk ? "已执行" : "失败", cls: U.resultOk ? "ok" : "error" } : { text: U.canCommit ? "可执行" : "未通过", cls: U.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ i.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ i.jsx("span", { className: "batch-index", children: A + 1 }),
        /* @__PURE__ */ i.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: zh[U.operation] || U.operation }),
          /* @__PURE__ */ i.jsx("span", { children: U.summary }),
          U.message && /* @__PURE__ */ i.jsx("small", { children: U.message })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: `batch-flag ${S.cls}`, children: S.text })
      ] }, U.token);
    }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-outcome-actions", children: [
      !c.committed && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", disabled: f || !b.some((U) => U.canCommit), onClick: () => {
        o?.() ?? Promise.resolve();
      }, children: f ? "正在提交…" : `全部执行（${b.filter((U) => U.canCommit).length} 项）` }),
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
      j && /* @__PURE__ */ i.jsx("span", { className: "preview-op-badge", children: zh[j] || j }),
      R.length > 0 && /* @__PURE__ */ i.jsx("dl", { className: "preview-fields", children: R.map(([U, A]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: ug[U] || U }),
        /* @__PURE__ */ i.jsx("dd", { children: String(A) })
      ] }, U)) }),
      N && N.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        N.map((U) => /* @__PURE__ */ i.jsx("span", { children: U.slice(5) }, U))
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
      /* @__PURE__ */ i.jsx(Yh, { preview: c, onClose: E })
    ] })
  ] });
}
function sg({ initialDraft: c, preview: f, busy: d, onPreview: o, onCommit: E, onCommitBatch: j, onClear: p, onClose: R }) {
  const N = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, b = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [U, A] = w.useState([N]), [S, Y] = w.useState(""), [Q, ve] = w.useState(!1), [V, ce] = w.useState(""), [le, ne] = w.useState([]), [$, Ne] = w.useState(!1), pe = w.useRef(null), Z = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function k() {
    const ae = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!ae) return;
    if ($) {
      pe.current?.stop();
      return;
    }
    const be = new ae();
    be.lang = "zh-CN", be.interimResults = !1, be.continuous = !1, be.onresult = (De) => {
      const Oe = Array.from(De.results).map((g) => g[0].transcript).join("").trim();
      Oe && Y((g) => (g ? `${g} ` : "") + Oe);
    }, be.onend = () => Ne(!1), be.onerror = () => Ne(!1), pe.current = be, Ne(!0), be.start();
  }
  const F = w.useRef(ur());
  w.useEffect(() => () => F.current.invalidate(), []), w.useEffect(() => {
    c.nonce && (F.current.invalidate(), ve(!1), Y(c.text));
  }, [c.nonce, c.text]);
  function re() {
    F.current.invalidate(), ve(!1), A([N]), Y(""), ce(""), ne([]), p();
  }
  async function J(ae) {
    const be = (ae ?? S).trim();
    if (!be || Q) return;
    const De = F.current.begin(), Oe = U.slice(-10);
    A((g) => [...g, { role: "user", text: be }]), Y(""), ne([]), ve(!0), ce(""), p();
    try {
      const g = await lt("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: be, history: Oe })
      });
      if (!F.current.isCurrent(De)) return;
      if (!g.ok) throw new Error(g.error || "AI 没有生成方案");
      ne(g.status === "need_clarification" ? g.options ?? [] : []), A((B) => [...B, { role: "assistant", text: g.reply || "方案已经生成，请检查右侧预演。" }]), g.status === "ready" && g.batch && g.previews?.length ? o({
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
      if (!F.current.isCurrent(De)) return;
      const B = g.message || "AI 操作失败";
      ce(B), A((I) => [...I, { role: "assistant", text: `这次没有生成预演：${B}` }]);
    } finally {
      F.current.isCurrent(De) && ve(!1);
    }
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ i.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ i.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: "row-action-button", type: "button", onClick: re, disabled: Q, children: "清空对话" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: b.map((ae) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Y(ae), children: ae }, ae)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          U.map((ae, be) => /* @__PURE__ */ i.jsx("div", { className: `ai-bubble ${ae.role}`, children: ae.text }, be)),
          Q && /* @__PURE__ */ i.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        V && /* @__PURE__ */ i.jsx(Dl, { tone: "error", title: "没有生成方案", text: V }),
        le.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: le.map((ae) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => {
          J(ae);
        }, children: ae }, ae)) }),
        /* @__PURE__ */ i.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              value: S,
              onChange: (ae) => Y(ae.target.value),
              onKeyDown: (ae) => {
                ae.key === "Enter" && !ae.shiftKey && (ae.preventDefault(), J());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          Z && /* @__PURE__ */ i.jsx("button", { type: "button", className: $ ? "ai-mic listening" : "ai-mic", onClick: k, "aria-label": $ ? "停止语音输入" : "语音输入", title: "语音输入", children: $ ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            J();
          }, disabled: !S.trim() || Q, children: Q ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "AI 预演", meta: f?.token ? `令牌 ${f.token.slice(0, 8)}…` : "等待指令" }),
        !f && /* @__PURE__ */ i.jsx(nl, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        f && /* @__PURE__ */ i.jsx(cg, { preview: f, busy: d, onCommit: E, onCommitBatch: j, onClose: R })
      ] })
    ] })
  ] });
}
function rg({ view: c, dashboard: f }) {
  if (c.kind === "system") return /* @__PURE__ */ i.jsx(hg, { dashboard: f, embedded: !0, readOnly: !0 });
  const d = c.kind === "day" ? c.items ? [...c.items].sort((o, E) => String(gt(o) || "").localeCompare(String(gt(E) || ""))) : f.items.filter((o) => Uu(o) === c.date).sort((o, E) => String(gt(o) || "").localeCompare(String(gt(E) || ""))) : [c.item];
  return d.length ? /* @__PURE__ */ i.jsx("div", { className: c.kind === "day" ? "context-item-list context-day-list" : "context-item-list", children: d.map((o) => /* @__PURE__ */ i.jsx(og, { item: o }, o.id)) }) : /* @__PURE__ */ i.jsx(nl, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function og({ item: c }) {
  const f = gt(c);
  return /* @__PURE__ */ i.jsxs("section", { className: `context-item-card ${mr(c)}${vr(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ i.jsx("time", { children: f ? `${Pt(f, { month: "long", day: "numeric", weekday: "short" })} ${Oa(f)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ i.jsx(Gh, { value: c.status })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: c.title }),
    /* @__PURE__ */ i.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" })
  ] });
}
function fg() {
  const [c, f] = w.useState({ loading: !0 }), d = w.useCallback(() => {
    f({ loading: !0 }), lt("/api/versions").then((E) => f({ loading: !1, data: E })).catch((E) => f({ loading: !1, error: E.message }));
  }, []);
  w.useEffect(() => {
    d();
  }, [d]);
  const o = c.data?.versions;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(ea, { title: "版本与运行态" }),
    c.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : c.error ? /* @__PURE__ */ i.jsx(It, { label: "版本读取", ok: !1, detail: c.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
      /* @__PURE__ */ i.jsx(It, { label: "运行态", ok: !c.data?.devShadowing, detail: c.data?.note || "" })
    ] })
  ] });
}
function dg({ onSync: c, readOnly: f = !1 }) {
  const [d, o] = w.useState({ loading: !0 }), E = w.useCallback(() => {
    o({ loading: !0 }), lt("/api/calendar-health").then((N) => o({ loading: !1, data: N })).catch((N) => o({ loading: !1, error: N.message }));
  }, []);
  w.useEffect(() => {
    E();
  }, [E]);
  const j = d.data?.diff, p = j?.toDelete ?? [], R = d.data?.inSync === !0;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(ea, { title: "飞书日历对账" }),
    d.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : d.error ? /* @__PURE__ */ i.jsx(It, { label: "日历盘点", ok: !1, detail: d.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(It, { label: "对账结果", ok: R, detail: R ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
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
        !f && !R && c && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: c, children: "打开同步操作" })
      ] })
    ] })
  ] });
}
function hg({ dashboard: c, onSync: f, embedded: d = !1, readOnly: o = !1 }) {
  const E = c.health?.database?.verification;
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack system-embedded" : "view-stack", children: [
    !d && /* @__PURE__ */ i.jsx(gi, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ i.jsx(pn, { label: "数据库完整性", value: E?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${E?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ i.jsx(pn, { label: "活动事务", value: E?.counts?.active ?? "—", hint: `总数 ${E?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ i.jsx(pn, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ i.jsx(pn, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ i.jsx(ea, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ i.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((j) => /* @__PURE__ */ i.jsx(It, { label: j.label, ok: j.ok, detail: j.detail }, j.label)) }),
        /* @__PURE__ */ i.jsx(ea, { title: "契约检查" }),
        /* @__PURE__ */ i.jsx(It, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ i.jsx(It, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ i.jsx(It, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ i.jsx(It, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
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
    /* @__PURE__ */ i.jsx(dg, { onSync: f, readOnly: o }),
    /* @__PURE__ */ i.jsx(fg, {})
  ] });
}
function Yh({ preview: c, onClose: f }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ i.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "完成并返回" }) });
}
function sr({ label: c, items: f, value: d, onChange: o, busy: E }) {
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
function Vh({ ok: c, text: f }) {
  return /* @__PURE__ */ i.jsx("small", { className: `inline-result ${c ? "ok" : "error"}`, children: f });
}
function pn({ label: c, value: f, hint: d, tone: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `metric-card ${o}`, children: [
    /* @__PURE__ */ i.jsx("span", { children: c }),
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("small", { children: d })
  ] });
}
function Gh({ value: c }) {
  return /* @__PURE__ */ i.jsx("span", { className: `status ${cr(c)}`, "data-ui": "status-badge", "data-ui-state": cr(c), children: Yy[c] || c });
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
function gi({ eyebrow: c, title: f, description: d }) {
  return /* @__PURE__ */ i.jsxs("header", { className: "page-title", "data-ui": "page-title", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ i.jsx("h2", { children: f }),
    /* @__PURE__ */ i.jsx("p", { children: d })
  ] });
}
function de({ name: c, label: f, type: d = "text", placeholder: o, defaultValue: E, required: j = !1 }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ i.jsx("span", { children: f }),
    /* @__PURE__ */ i.jsx("input", { name: c, type: d, placeholder: o, defaultValue: E, required: j })
  ] });
}
function It({ label: c, ok: f, detail: d }) {
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
function Dl({ tone: c, title: f, text: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `notice ${c}`, "data-ui": "notice", "data-ui-state": c, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ i.jsx("strong", { children: f }),
    /* @__PURE__ */ i.jsx("span", { children: d })
  ] });
}
function yr() {
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
or.ready();
or.ui.resize({ height: window.innerHeight || 900 });
const Ch = document.getElementById("root");
Ch && ry.createRoot(Ch).render(/* @__PURE__ */ i.jsx(Xy, { children: /* @__PURE__ */ i.jsx(Zy, {}) }));
