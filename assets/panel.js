var Pc = { exports: {} }, ji = {};
var hh;
function ng() {
  if (hh) return ji;
  hh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(d, E, b) {
    var S = null;
    if (b !== void 0 && (S = "" + b), E.key !== void 0 && (S = "" + E.key), "key" in E) {
      b = {};
      for (var O in E)
        O !== "key" && (b[O] = E[O]);
    } else b = E;
    return E = b.ref, {
      $$typeof: s,
      type: d,
      key: S,
      ref: E !== void 0 ? E : null,
      props: b
    };
  }
  return ji.Fragment = f, ji.jsx = h, ji.jsxs = h, ji;
}
var mh;
function ig() {
  return mh || (mh = 1, Pc.exports = ng()), Pc.exports;
}
var n = ig(), er = { exports: {} }, xe = {};
var yh;
function ug() {
  if (yh) return xe;
  yh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), N = Symbol.iterator;
  function L(y) {
    return y === null || typeof y != "object" ? null : (y = N && y[N] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var V = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ce = Object.assign, I = {};
  function ee(y, R, Z) {
    this.props = y, this.context = R, this.refs = I, this.updater = Z || V;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(y, R) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, R, "setState");
  }, ee.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function je() {
  }
  je.prototype = ee.prototype;
  function $(y, R, Z) {
    this.props = y, this.context = R, this.refs = I, this.updater = Z || V;
  }
  var ie = $.prototype = new je();
  ie.constructor = $, ce(ie, ee.prototype), ie.isPureReactComponent = !0;
  var be = Array.isArray;
  function me() {
  }
  var J = { H: null, A: null, T: null, S: null }, H = Object.prototype.hasOwnProperty;
  function Q(y, R, Z) {
    var P = Z.ref;
    return {
      $$typeof: s,
      type: y,
      key: R,
      ref: P !== void 0 ? P : null,
      props: Z
    };
  }
  function F(y, R) {
    return Q(y.type, R, y.props);
  }
  function K(y) {
    return typeof y == "object" && y !== null && y.$$typeof === s;
  }
  function le(y) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(Z) {
      return R[Z];
    });
  }
  var pe = /\/+/g;
  function Ee(y, R) {
    return typeof y == "object" && y !== null && y.key != null ? le("" + y.key) : R.toString(36);
  }
  function _e(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(me, me) : (y.status = "pending", y.then(
          function(R) {
            y.status === "pending" && (y.status = "fulfilled", y.value = R);
          },
          function(R) {
            y.status === "pending" && (y.status = "rejected", y.reason = R);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function o(y, R, Z, P, he) {
    var ye = typeof y;
    (ye === "undefined" || ye === "boolean") && (y = null);
    var Te = !1;
    if (y === null) Te = !0;
    else
      switch (ye) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case s:
            case f:
              Te = !0;
              break;
            case w:
              return Te = y._init, o(
                Te(y._payload),
                R,
                Z,
                P,
                he
              );
          }
      }
    if (Te)
      return he = he(y), Te = P === "" ? "." + Ee(y, 0) : P, be(he) ? (Z = "", Te != null && (Z = Te.replace(pe, "$&/") + "/"), o(he, R, Z, "", function(Me) {
        return Me;
      })) : he != null && (K(he) && (he = F(
        he,
        Z + (he.key == null || y && y.key === he.key ? "" : ("" + he.key).replace(
          pe,
          "$&/"
        ) + "/") + Te
      )), R.push(he)), 1;
    Te = 0;
    var Ge = P === "" ? "." : P + ":";
    if (be(y))
      for (var G = 0; G < y.length; G++)
        P = y[G], ye = Ge + Ee(P, G), Te += o(
          P,
          R,
          Z,
          ye,
          he
        );
    else if (G = L(y), typeof G == "function")
      for (y = G.call(y), G = 0; !(P = y.next()).done; )
        P = P.value, ye = Ge + Ee(P, G++), Te += o(
          P,
          R,
          Z,
          ye,
          he
        );
    else if (ye === "object") {
      if (typeof y.then == "function")
        return o(
          _e(y),
          R,
          Z,
          P,
          he
        );
      throw R = String(y), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function C(y, R, Z) {
    if (y == null) return y;
    var P = [], he = 0;
    return o(y, P, "", "", function(ye) {
      return R.call(Z, ye, he++);
    }), P;
  }
  function Y(y) {
    if (y._status === -1) {
      var R = y._result;
      R = R(), R.then(
        function(Z) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = Z);
        },
        function(Z) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = Z);
        }
      ), y._status === -1 && (y._status = 0, y._result = R);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var m = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, W = {
    map: C,
    forEach: function(y, R, Z) {
      C(
        y,
        function() {
          R.apply(this, arguments);
        },
        Z
      );
    },
    count: function(y) {
      var R = 0;
      return C(y, function() {
        R++;
      }), R;
    },
    toArray: function(y) {
      return C(y, function(R) {
        return R;
      }) || [];
    },
    only: function(y) {
      if (!K(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return xe.Activity = D, xe.Children = W, xe.Component = ee, xe.Fragment = h, xe.Profiler = E, xe.PureComponent = $, xe.StrictMode = d, xe.Suspense = j, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return J.H.useMemoCache(y);
    }
  }, xe.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, xe.cacheSignal = function() {
    return null;
  }, xe.cloneElement = function(y, R, Z) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var P = ce({}, y.props), he = y.key;
    if (R != null)
      for (ye in R.key !== void 0 && (he = "" + R.key), R)
        !H.call(R, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && R.ref === void 0 || (P[ye] = R[ye]);
    var ye = arguments.length - 2;
    if (ye === 1) P.children = Z;
    else if (1 < ye) {
      for (var Te = Array(ye), Ge = 0; Ge < ye; Ge++)
        Te[Ge] = arguments[Ge + 2];
      P.children = Te;
    }
    return Q(y.type, he, P);
  }, xe.createContext = function(y) {
    return y = {
      $$typeof: S,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: b,
      _context: y
    }, y;
  }, xe.createElement = function(y, R, Z) {
    var P, he = {}, ye = null;
    if (R != null)
      for (P in R.key !== void 0 && (ye = "" + R.key), R)
        H.call(R, P) && P !== "key" && P !== "__self" && P !== "__source" && (he[P] = R[P]);
    var Te = arguments.length - 2;
    if (Te === 1) he.children = Z;
    else if (1 < Te) {
      for (var Ge = Array(Te), G = 0; G < Te; G++)
        Ge[G] = arguments[G + 2];
      he.children = Ge;
    }
    if (y && y.defaultProps)
      for (P in Te = y.defaultProps, Te)
        he[P] === void 0 && (he[P] = Te[P]);
    return Q(y, ye, he);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(y) {
    return { $$typeof: O, render: y };
  }, xe.isValidElement = K, xe.lazy = function(y) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: y },
      _init: Y
    };
  }, xe.memo = function(y, R) {
    return {
      $$typeof: p,
      type: y,
      compare: R === void 0 ? null : R
    };
  }, xe.startTransition = function(y) {
    var R = J.T, Z = {};
    J.T = Z;
    try {
      var P = y(), he = J.S;
      he !== null && he(Z, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(me, m);
    } catch (ye) {
      m(ye);
    } finally {
      R !== null && Z.types !== null && (R.types = Z.types), J.T = R;
    }
  }, xe.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, xe.use = function(y) {
    return J.H.use(y);
  }, xe.useActionState = function(y, R, Z) {
    return J.H.useActionState(y, R, Z);
  }, xe.useCallback = function(y, R) {
    return J.H.useCallback(y, R);
  }, xe.useContext = function(y) {
    return J.H.useContext(y);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(y, R) {
    return J.H.useDeferredValue(y, R);
  }, xe.useEffect = function(y, R) {
    return J.H.useEffect(y, R);
  }, xe.useEffectEvent = function(y) {
    return J.H.useEffectEvent(y);
  }, xe.useId = function() {
    return J.H.useId();
  }, xe.useImperativeHandle = function(y, R, Z) {
    return J.H.useImperativeHandle(y, R, Z);
  }, xe.useInsertionEffect = function(y, R) {
    return J.H.useInsertionEffect(y, R);
  }, xe.useLayoutEffect = function(y, R) {
    return J.H.useLayoutEffect(y, R);
  }, xe.useMemo = function(y, R) {
    return J.H.useMemo(y, R);
  }, xe.useOptimistic = function(y, R) {
    return J.H.useOptimistic(y, R);
  }, xe.useReducer = function(y, R, Z) {
    return J.H.useReducer(y, R, Z);
  }, xe.useRef = function(y) {
    return J.H.useRef(y);
  }, xe.useState = function(y) {
    return J.H.useState(y);
  }, xe.useSyncExternalStore = function(y, R, Z) {
    return J.H.useSyncExternalStore(
      y,
      R,
      Z
    );
  }, xe.useTransition = function() {
    return J.H.useTransition();
  }, xe.version = "19.2.8", xe;
}
var gh;
function mr() {
  return gh || (gh = 1, er.exports = ug()), er.exports;
}
var z = mr(), tr = { exports: {} }, Si = {}, ar = { exports: {} }, lr = {};
var vh;
function sg() {
  return vh || (vh = 1, (function(s) {
    function f(o, C) {
      var Y = o.length;
      o.push(C);
      e: for (; 0 < Y; ) {
        var m = Y - 1 >>> 1, W = o[m];
        if (0 < E(W, C))
          o[m] = C, o[Y] = W, Y = m;
        else break e;
      }
    }
    function h(o) {
      return o.length === 0 ? null : o[0];
    }
    function d(o) {
      if (o.length === 0) return null;
      var C = o[0], Y = o.pop();
      if (Y !== C) {
        o[0] = Y;
        e: for (var m = 0, W = o.length, y = W >>> 1; m < y; ) {
          var R = 2 * (m + 1) - 1, Z = o[R], P = R + 1, he = o[P];
          if (0 > E(Z, Y))
            P < W && 0 > E(he, Z) ? (o[m] = he, o[P] = Y, m = P) : (o[m] = Z, o[R] = Y, m = R);
          else if (P < W && 0 > E(he, Y))
            o[m] = he, o[P] = Y, m = P;
          else break e;
        }
      }
      return C;
    }
    function E(o, C) {
      var Y = o.sortIndex - C.sortIndex;
      return Y !== 0 ? Y : o.id - C.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      s.unstable_now = function() {
        return b.now();
      };
    } else {
      var S = Date, O = S.now();
      s.unstable_now = function() {
        return S.now() - O;
      };
    }
    var j = [], p = [], w = 1, D = null, N = 3, L = !1, V = !1, ce = !1, I = !1, ee = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function ie(o) {
      for (var C = h(p); C !== null; ) {
        if (C.callback === null) d(p);
        else if (C.startTime <= o)
          d(p), C.sortIndex = C.expirationTime, f(j, C);
        else break;
        C = h(p);
      }
    }
    function be(o) {
      if (ce = !1, ie(o), !V)
        if (h(j) !== null)
          V = !0, me || (me = !0, le());
        else {
          var C = h(p);
          C !== null && _e(be, C.startTime - o);
        }
    }
    var me = !1, J = -1, H = 5, Q = -1;
    function F() {
      return I ? !0 : !(s.unstable_now() - Q < H);
    }
    function K() {
      if (I = !1, me) {
        var o = s.unstable_now();
        Q = o;
        var C = !0;
        try {
          e: {
            V = !1, ce && (ce = !1, je(J), J = -1), L = !0;
            var Y = N;
            try {
              t: {
                for (ie(o), D = h(j); D !== null && !(D.expirationTime > o && F()); ) {
                  var m = D.callback;
                  if (typeof m == "function") {
                    D.callback = null, N = D.priorityLevel;
                    var W = m(
                      D.expirationTime <= o
                    );
                    if (o = s.unstable_now(), typeof W == "function") {
                      D.callback = W, ie(o), C = !0;
                      break t;
                    }
                    D === h(j) && d(j), ie(o);
                  } else d(j);
                  D = h(j);
                }
                if (D !== null) C = !0;
                else {
                  var y = h(p);
                  y !== null && _e(
                    be,
                    y.startTime - o
                  ), C = !1;
                }
              }
              break e;
            } finally {
              D = null, N = Y, L = !1;
            }
            C = void 0;
          }
        } finally {
          C ? le() : me = !1;
        }
      }
    }
    var le;
    if (typeof $ == "function")
      le = function() {
        $(K);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), Ee = pe.port2;
      pe.port1.onmessage = K, le = function() {
        Ee.postMessage(null);
      };
    } else
      le = function() {
        ee(K, 0);
      };
    function _e(o, C) {
      J = ee(function() {
        o(s.unstable_now());
      }, C);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(o) {
      o.callback = null;
    }, s.unstable_forceFrameRate = function(o) {
      0 > o || 125 < o ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < o ? Math.floor(1e3 / o) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, s.unstable_next = function(o) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = N;
      }
      var Y = N;
      N = C;
      try {
        return o();
      } finally {
        N = Y;
      }
    }, s.unstable_requestPaint = function() {
      I = !0;
    }, s.unstable_runWithPriority = function(o, C) {
      switch (o) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          o = 3;
      }
      var Y = N;
      N = o;
      try {
        return C();
      } finally {
        N = Y;
      }
    }, s.unstable_scheduleCallback = function(o, C, Y) {
      var m = s.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? m + Y : m) : Y = m, o) {
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
      return W = Y + W, o = {
        id: w++,
        callback: C,
        priorityLevel: o,
        startTime: Y,
        expirationTime: W,
        sortIndex: -1
      }, Y > m ? (o.sortIndex = Y, f(p, o), h(j) === null && o === h(p) && (ce ? (je(J), J = -1) : ce = !0, _e(be, Y - m))) : (o.sortIndex = W, f(j, o), V || L || (V = !0, me || (me = !0, le()))), o;
    }, s.unstable_shouldYield = F, s.unstable_wrapCallback = function(o) {
      var C = N;
      return function() {
        var Y = N;
        N = C;
        try {
          return o.apply(this, arguments);
        } finally {
          N = Y;
        }
      };
    };
  })(lr)), lr;
}
var ph;
function cg() {
  return ph || (ph = 1, ar.exports = sg()), ar.exports;
}
var nr = { exports: {} }, pt = {};
var bh;
function rg() {
  if (bh) return pt;
  bh = 1;
  var s = mr();
  function f(j) {
    var p = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        p += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + j + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var d = {
    d: {
      f: h,
      r: function() {
        throw Error(f(522));
      },
      D: h,
      C: h,
      L: h,
      m: h,
      X: h,
      S: h,
      M: h
    },
    p: 0,
    findDOMNode: null
  }, E = /* @__PURE__ */ Symbol.for("react.portal");
  function b(j, p, w) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: D == null ? null : "" + D,
      children: j,
      containerInfo: p,
      implementation: w
    };
  }
  var S = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(j, p) {
    if (j === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, pt.createPortal = function(j, p) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(f(299));
    return b(j, p, null, w);
  }, pt.flushSync = function(j) {
    var p = S.T, w = d.p;
    try {
      if (S.T = null, d.p = 2, j) return j();
    } finally {
      S.T = p, d.p = w, d.d.f();
    }
  }, pt.preconnect = function(j, p) {
    typeof j == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, d.d.C(j, p));
  }, pt.prefetchDNS = function(j) {
    typeof j == "string" && d.d.D(j);
  }, pt.preinit = function(j, p) {
    if (typeof j == "string" && p && typeof p.as == "string") {
      var w = p.as, D = O(w, p.crossOrigin), N = typeof p.integrity == "string" ? p.integrity : void 0, L = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      w === "style" ? d.d.S(
        j,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: D,
          integrity: N,
          fetchPriority: L
        }
      ) : w === "script" && d.d.X(j, {
        crossOrigin: D,
        integrity: N,
        fetchPriority: L,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, pt.preinitModule = function(j, p) {
    if (typeof j == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var w = O(
            p.as,
            p.crossOrigin
          );
          d.d.M(j, {
            crossOrigin: w,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && d.d.M(j);
  }, pt.preload = function(j, p) {
    if (typeof j == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var w = p.as, D = O(w, p.crossOrigin);
      d.d.L(j, w, {
        crossOrigin: D,
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
  }, pt.preloadModule = function(j, p) {
    if (typeof j == "string")
      if (p) {
        var w = O(p.as, p.crossOrigin);
        d.d.m(j, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: w,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else d.d.m(j);
  }, pt.requestFormReset = function(j) {
    d.d.r(j);
  }, pt.unstable_batchedUpdates = function(j, p) {
    return j(p);
  }, pt.useFormState = function(j, p, w) {
    return S.H.useFormState(j, p, w);
  }, pt.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, pt.version = "19.2.8", pt;
}
var xh;
function og() {
  if (xh) return nr.exports;
  xh = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
  }
  return s(), nr.exports = rg(), nr.exports;
}
var jh;
function fg() {
  if (jh) return Si;
  jh = 1;
  var s = cg(), f = mr(), h = og();
  function d(e) {
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
  function b(e) {
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
  function S(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function j(e) {
    if (b(e) !== e)
      throw Error(d(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = b(e), t === null) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (l = i.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === a) return j(i), e;
          if (u === l) return j(i), t;
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (a.return !== l.return) a = i, l = u;
      else {
        for (var c = !1, r = i.child; r; ) {
          if (r === a) {
            c = !0, a = i, l = u;
            break;
          }
          if (r === l) {
            c = !0, l = i, a = u;
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = u.child; r; ) {
            if (r === a) {
              c = !0, a = u, l = i;
              break;
            }
            if (r === l) {
              c = !0, l = u, a = i;
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(d(189));
        }
      }
      if (a.alternate !== l) throw Error(d(190));
    }
    if (a.tag !== 3) throw Error(d(188));
    return a.stateNode.current === a ? e : t;
  }
  function w(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = w(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), ce = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), be = /* @__PURE__ */ Symbol.for("react.suspense"), me = /* @__PURE__ */ Symbol.for("react.suspense_list"), J = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), F = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), K = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var pe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case ee:
        return "Profiler";
      case I:
        return "StrictMode";
      case be:
        return "Suspense";
      case me:
        return "SuspenseList";
      case Q:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case je:
          return (e._context.displayName || "Context") + ".Consumer";
        case ie:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
        case H:
          t = e._payload, e = e._init;
          try {
            return Ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var _e = Array.isArray, o = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, m = [], W = -1;
  function y(e) {
    return { current: e };
  }
  function R(e) {
    0 > W || (e.current = m[W], m[W] = null, W--);
  }
  function Z(e, t) {
    W++, m[W] = e.current, e.current = t;
  }
  var P = y(null), he = y(null), ye = y(null), Te = y(null);
  function Ge(e, t) {
    switch (Z(ye, t), Z(he, e), Z(P, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? kd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = kd(t), e = qd(t, e);
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
    R(P), Z(P, e);
  }
  function G() {
    R(P), R(he), R(ye);
  }
  function Me(e) {
    e.memoizedState !== null && Z(Te, e);
    var t = P.current, a = qd(t, e.type);
    t !== a && (Z(he, e), Z(P, a));
  }
  function ge(e) {
    he.current === e && (R(P), R(he)), Te.current === e && (R(Te), vi._currentValue = Y);
  }
  var te, Dt;
  function Pe(e) {
    if (te === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        te = t && t[1] || "", Dt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + te + e + Dt;
  }
  var ut = !1;
  function la(e, t) {
    if (!e || ut) return "";
    ut = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (M) {
                  var A = M;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (M) {
                  A = M;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                A = M;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (M) {
            if (M && A && typeof M.stack == "string")
              return [M.stack, A.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), c = u[0], r = u[1];
      if (c && r) {
        var g = c.split(`
`), T = r.split(`
`);
        for (i = l = 0; l < g.length && !g[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < T.length && !T[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === g.length || i === T.length)
          for (l = g.length - 1, i = T.length - 1; 1 <= l && 0 <= i && g[l] !== T[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (g[l] !== T[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || g[l] !== T[i]) {
                  var k = `
` + g[l].replace(" at new ", " at ");
                  return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ut = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Pe(a) : "";
  }
  function na(e, t) {
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
        return la(e.type, !1);
      case 11:
        return la(e.type.render, !1);
      case 1:
        return la(e.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function Lt(e) {
    try {
      var t = "", a = null;
      do
        t += na(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var nt = Object.prototype.hasOwnProperty, Wt = s.unstable_scheduleCallback, ft = s.unstable_cancelCallback, ia = s.unstable_shouldYield, Ml = s.unstable_requestPaint, Oe = s.unstable_now, rl = s.unstable_getCurrentPriorityLevel, wn = s.unstable_ImmediatePriority, Ol = s.unstable_UserBlockingPriority, Ra = s.unstable_NormalPriority, wi = s.unstable_LowPriority, Cn = s.unstable_IdlePriority, Gu = s.log, An = s.unstable_setDisableYieldValue, da = null, st = null;
  function ua(e) {
    if (typeof Gu == "function" && An(e), st && typeof st.setStrictMode == "function")
      try {
        st.setStrictMode(da, e);
      } catch {
      }
  }
  var bt = Math.clz32 ? Math.clz32 : Rl, Ul = Math.log, ol = Math.LN2;
  function Rl(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ul(e) / ol | 0) | 0;
  }
  var ka = 256, qa = 262144, ha = 4194304;
  function ma(e) {
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
  function kl(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~u, l !== 0 ? i = ma(l) : (c &= r, c !== 0 ? i = ma(c) : a || (a = r & ~e, a !== 0 && (i = ma(a))))) : (r = l & ~u, r !== 0 ? i = ma(r) : c !== 0 ? i = ma(c) : a || (a = l & ~e, a !== 0 && (i = ma(a)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : i;
  }
  function ya(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function zn(e, t) {
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
  function Ci() {
    var e = ha;
    return ha <<= 1, (ha & 62914560) === 0 && (ha = 4194304), e;
  }
  function Dn(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function U(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function X(e, t, a, l, i, u) {
    var c = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, g = e.expirationTimes, T = e.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var k = 31 - bt(a), B = 1 << k;
      r[k] = 0, g[k] = -1;
      var A = T[k];
      if (A !== null)
        for (T[k] = null, k = 0; k < A.length; k++) {
          var M = A[k];
          M !== null && (M.lane &= -536870913);
        }
      a &= ~B;
    }
    l !== 0 && ne(e, l, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function ne(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - bt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function se(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - bt(a), i = 1 << l;
      i & t | e[l] & t && (e[l] |= t), a &= ~i;
    }
  }
  function ve(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Ue(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Ue(e) {
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
  function fe(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function St() {
    var e = C.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : uh(e.type));
  }
  function sa(e, t) {
    var a = C.p;
    try {
      return C.p = e, t();
    } finally {
      C.p = a;
    }
  }
  var vt = Math.random().toString(36).slice(2), dt = "__reactFiber$" + vt, Nt = "__reactProps$" + vt, ql = "__reactContainer$" + vt, Xu = "__reactEvents$" + vt, Kh = "__reactListeners$" + vt, $h = "__reactHandles$" + vt, jr = "__reactResources$" + vt, Mn = "__reactMarker$" + vt;
  function Qu(e) {
    delete e[dt], delete e[Nt], delete e[Xu], delete e[Kh], delete e[$h];
  }
  function Bl(e) {
    var t = e[dt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[ql] || a[dt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Xd(e); e !== null; ) {
            if (a = e[dt]) return a;
            e = Xd(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Hl(e) {
    if (e = e[dt] || e[ql]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function On(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Ll(e) {
    var t = e[jr];
    return t || (t = e[jr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[Mn] = !0;
  }
  var Sr = /* @__PURE__ */ new Set(), Nr = {};
  function fl(e, t) {
    Yl(e, t), Yl(e + "Capture", t);
  }
  function Yl(e, t) {
    for (Nr[e] = t, e = 0; e < t.length; e++)
      Sr.add(t[e]);
  }
  var Jh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Er = {}, _r = {};
  function Fh(e) {
    return nt.call(_r, e) ? !0 : nt.call(Er, e) ? !1 : Jh.test(e) ? _r[e] = !0 : (Er[e] = !0, !1);
  }
  function Ai(e, t, a) {
    if (Fh(t))
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
  function zi(e, t, a) {
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
  function ga(e, t, a, l) {
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
  function Tr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Wh(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var i = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(c) {
          a = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Zu(e) {
    if (!e._valueTracker) {
      var t = Tr(e) ? "checked" : "value";
      e._valueTracker = Wh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function wr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Tr(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Di(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ih = /[\n"\\]/g;
  function Vt(e) {
    return e.replace(
      Ih,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ku(e, t, a, l, i, u, c, r) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? $u(e, c, Yt(t)) : a != null ? $u(e, c, Yt(a)) : l != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Yt(r) : e.removeAttribute("name");
  }
  function Cr(e, t, a, l, i, u, c, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Zu(e);
        return;
      }
      a = a != null ? "" + Yt(a) : "", t = t != null ? "" + Yt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Zu(e);
  }
  function $u(e, t, a) {
    t === "number" && Di(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Vl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < a.length; i++)
        t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        i = t.hasOwnProperty("$" + e[a].value), e[a].selected !== i && (e[a].selected = i), i && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Yt(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          e[i].selected = !0, l && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ar(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function zr(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(d(92));
        if (_e(l)) {
          if (1 < l.length) throw Error(d(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Zu(e);
  }
  function Gl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ph = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dr(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ph.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Mr(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(d(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var i in t)
        l = t[i], t.hasOwnProperty(i) && a[i] !== l && Dr(e, i, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Dr(e, u, t[u]);
  }
  function Ju(e) {
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
  var em = /* @__PURE__ */ new Map([
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
  ]), tm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mi(e) {
    return tm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function va() {
  }
  var Fu = null;
  function Wu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xl = null, Ql = null;
  function Or(e) {
    var t = Hl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Nt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ku(
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
                var i = l[Nt] || null;
                if (!i) throw Error(d(90));
                Ku(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && wr(l);
          }
          break e;
        case "textarea":
          Ar(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Vl(e, !!a.multiple, t, !1);
      }
    }
  }
  var Iu = !1;
  function Ur(e, t, a) {
    if (Iu) return e(t, a);
    Iu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Iu = !1, (Xl !== null || Ql !== null) && (bu(), Xl && (t = Xl, e = Ql, Ql = Xl = null, Or(t), e)))
        for (t = 0; t < e.length; t++) Or(e[t]);
    }
  }
  function Un(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Nt] || null;
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
        d(231, t, typeof a)
      );
    return a;
  }
  var pa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pu = !1;
  if (pa)
    try {
      var Rn = {};
      Object.defineProperty(Rn, "passive", {
        get: function() {
          Pu = !0;
        }
      }), window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
    } catch {
      Pu = !1;
    }
  var Ba = null, es = null, Oi = null;
  function Rr() {
    if (Oi) return Oi;
    var e, t = es, a = t.length, l, i = "value" in Ba ? Ba.value : Ba.textContent, u = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++) ;
    var c = a - e;
    for (l = 1; l <= c && t[a - l] === i[u - l]; l++) ;
    return Oi = i.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ui(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ri() {
    return !0;
  }
  function kr() {
    return !1;
  }
  function Et(e) {
    function t(a, l, i, u, c) {
      this._reactName = a, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ri : kr, this.isPropagationStopped = kr, this;
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ri);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ri);
      },
      persist: function() {
      },
      isPersistent: Ri
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
  }, ki = Et(dl), kn = D({}, dl, { view: 0, detail: 0 }), am = Et(kn), ts, as, qn, qi = D({}, kn, {
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
    getModifierState: ns,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (ts = e.screenX - qn.screenX, as = e.screenY - qn.screenY) : as = ts = 0, qn = e), ts);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : as;
    }
  }), qr = Et(qi), lm = D({}, qi, { dataTransfer: 0 }), nm = Et(lm), im = D({}, kn, { relatedTarget: 0 }), ls = Et(im), um = D({}, dl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = Et(um), cm = D({}, dl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rm = Et(cm), om = D({}, dl, { data: 0 }), Br = Et(om), fm = {
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
  }, dm = {
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
  }, hm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function mm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hm[e]) ? !!t[e] : !1;
  }
  function ns() {
    return mm;
  }
  var ym = D({}, kn, {
    key: function(e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ns,
    charCode: function(e) {
      return e.type === "keypress" ? Ui(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), gm = Et(ym), vm = D({}, qi, {
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
  }), Hr = Et(vm), pm = D({}, kn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ns
  }), bm = Et(pm), xm = D({}, dl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jm = Et(xm), Sm = D({}, qi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nm = Et(Sm), Em = D({}, dl, {
    newState: 0,
    oldState: 0
  }), _m = Et(Em), Tm = [9, 13, 27, 32], is = pa && "CompositionEvent" in window, Bn = null;
  pa && "documentMode" in document && (Bn = document.documentMode);
  var wm = pa && "TextEvent" in window && !Bn, Lr = pa && (!is || Bn && 8 < Bn && 11 >= Bn), Yr = " ", Vr = !1;
  function Gr(e, t) {
    switch (e) {
      case "keyup":
        return Tm.indexOf(t.keyCode) !== -1;
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
  function Xr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Zl = !1;
  function Cm(e, t) {
    switch (e) {
      case "compositionend":
        return Xr(t);
      case "keypress":
        return t.which !== 32 ? null : (Vr = !0, Yr);
      case "textInput":
        return e = t.data, e === Yr && Vr ? null : e;
      default:
        return null;
    }
  }
  function Am(e, t) {
    if (Zl)
      return e === "compositionend" || !is && Gr(e, t) ? (e = Rr(), Oi = es = Ba = null, Zl = !1, e) : null;
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
        return Lr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zm = {
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
  function Qr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zm[e.type] : t === "textarea";
  }
  function Zr(e, t, a, l) {
    Xl ? Ql ? Ql.push(l) : Ql = [l] : Xl = l, t = Tu(t, "onChange"), 0 < t.length && (a = new ki(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Hn = null, Ln = null;
  function Dm(e) {
    zd(e, 0);
  }
  function Bi(e) {
    var t = On(e);
    if (wr(t)) return e;
  }
  function Kr(e, t) {
    if (e === "change") return t;
  }
  var $r = !1;
  if (pa) {
    var us;
    if (pa) {
      var ss = "oninput" in document;
      if (!ss) {
        var Jr = document.createElement("div");
        Jr.setAttribute("oninput", "return;"), ss = typeof Jr.oninput == "function";
      }
      us = ss;
    } else us = !1;
    $r = us && (!document.documentMode || 9 < document.documentMode);
  }
  function Fr() {
    Hn && (Hn.detachEvent("onpropertychange", Wr), Ln = Hn = null);
  }
  function Wr(e) {
    if (e.propertyName === "value" && Bi(Ln)) {
      var t = [];
      Zr(
        t,
        Ln,
        e,
        Wu(e)
      ), Ur(Dm, t);
    }
  }
  function Mm(e, t, a) {
    e === "focusin" ? (Fr(), Hn = t, Ln = a, Hn.attachEvent("onpropertychange", Wr)) : e === "focusout" && Fr();
  }
  function Om(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Bi(Ln);
  }
  function Um(e, t) {
    if (e === "click") return Bi(t);
  }
  function Rm(e, t) {
    if (e === "input" || e === "change")
      return Bi(t);
  }
  function km(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : km;
  function Yn(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var i = a[l];
      if (!nt.call(t, i) || !Mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Ir(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pr(e, t) {
    var a = Ir(e);
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
      a = Ir(a);
    }
  }
  function eo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function to(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Di(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Di(e.document);
    }
    return t;
  }
  function cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qm = pa && "documentMode" in document && 11 >= document.documentMode, Kl = null, rs = null, Vn = null, os = !1;
  function ao(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    os || Kl == null || Kl !== Di(l) || (l = Kl, "selectionStart" in l && cs(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Vn && Yn(Vn, l) || (Vn = l, l = Tu(rs, "onSelect"), 0 < l.length && (t = new ki(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Kl)));
  }
  function hl(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var $l = {
    animationend: hl("Animation", "AnimationEnd"),
    animationiteration: hl("Animation", "AnimationIteration"),
    animationstart: hl("Animation", "AnimationStart"),
    transitionrun: hl("Transition", "TransitionRun"),
    transitionstart: hl("Transition", "TransitionStart"),
    transitioncancel: hl("Transition", "TransitionCancel"),
    transitionend: hl("Transition", "TransitionEnd")
  }, fs = {}, lo = {};
  pa && (lo = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function ml(e) {
    if (fs[e]) return fs[e];
    if (!$l[e]) return e;
    var t = $l[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in lo)
        return fs[e] = t[a];
    return e;
  }
  var no = ml("animationend"), io = ml("animationiteration"), uo = ml("animationstart"), Bm = ml("transitionrun"), Hm = ml("transitionstart"), Lm = ml("transitioncancel"), so = ml("transitionend"), co = /* @__PURE__ */ new Map(), ds = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ds.push("scrollEnd");
  function It(e, t) {
    co.set(e, t), fl(t, [e]);
  }
  var Hi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Gt = [], Jl = 0, hs = 0;
  function Li() {
    for (var e = Jl, t = hs = Jl = 0; t < e; ) {
      var a = Gt[t];
      Gt[t++] = null;
      var l = Gt[t];
      Gt[t++] = null;
      var i = Gt[t];
      Gt[t++] = null;
      var u = Gt[t];
      if (Gt[t++] = null, l !== null && i !== null) {
        var c = l.pending;
        c === null ? i.next = i : (i.next = c.next, c.next = i), l.pending = i;
      }
      u !== 0 && ro(a, i, u);
    }
  }
  function Yi(e, t, a, l) {
    Gt[Jl++] = e, Gt[Jl++] = t, Gt[Jl++] = a, Gt[Jl++] = l, hs |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ms(e, t, a, l) {
    return Yi(e, t, a, l), Vi(e);
  }
  function yl(e, t) {
    return Yi(e, null, null, t), Vi(e);
  }
  function ro(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - bt(a), e = u.hiddenUpdates, l = e[i], l === null ? e[i] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Vi(e) {
    if (50 < oi)
      throw oi = 0, Nc = null, Error(d(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fl = {};
  function Ym(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, a, l) {
    return new Ym(e, t, a, l);
  }
  function ys(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ba(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function oo(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Gi(e, t, a, l, i, u) {
    var c = 0;
    if (l = e, typeof e == "function") ys(e) && (c = 1);
    else if (typeof e == "string")
      c = Zy(
        e,
        a,
        P.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Q:
          return e = Ot(31, a, t, i), e.elementType = Q, e.lanes = u, e;
        case ce:
          return gl(a.children, i, u, t);
        case I:
          c = 8, i |= 24;
          break;
        case ee:
          return e = Ot(12, a, t, i | 2), e.elementType = ee, e.lanes = u, e;
        case be:
          return e = Ot(13, a, t, i), e.elementType = be, e.lanes = u, e;
        case me:
          return e = Ot(19, a, t, i), e.elementType = me, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                c = 10;
                break e;
              case je:
                c = 9;
                break e;
              case ie:
                c = 11;
                break e;
              case J:
                c = 14;
                break e;
              case H:
                c = 16, l = null;
                break e;
            }
          c = 29, a = Error(
            d(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ot(c, a, t, i), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function gl(e, t, a, l) {
    return e = Ot(7, e, l, t), e.lanes = a, e;
  }
  function gs(e, t, a) {
    return e = Ot(6, e, null, t), e.lanes = a, e;
  }
  function fo(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function vs(e, t, a) {
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
  var ho = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = ho.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Lt(t)
      }, ho.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Lt(t)
    };
  }
  var Wl = [], Il = 0, Xi = null, Gn = 0, Qt = [], Zt = 0, Ha = null, ca = 1, ra = "";
  function xa(e, t) {
    Wl[Il++] = Gn, Wl[Il++] = Xi, Xi = e, Gn = t;
  }
  function mo(e, t, a) {
    Qt[Zt++] = ca, Qt[Zt++] = ra, Qt[Zt++] = Ha, Ha = e;
    var l = ca;
    e = ra;
    var i = 32 - bt(l) - 1;
    l &= ~(1 << i), a += 1;
    var u = 32 - bt(t) + i;
    if (30 < u) {
      var c = i - i % 5;
      u = (l & (1 << c) - 1).toString(32), l >>= c, i -= c, ca = 1 << 32 - bt(t) + i | a << i | l, ra = u + e;
    } else
      ca = 1 << u | a << i | l, ra = e;
  }
  function ps(e) {
    e.return !== null && (xa(e, 1), mo(e, 1, 0));
  }
  function bs(e) {
    for (; e === Xi; )
      Xi = Wl[--Il], Wl[Il] = null, Gn = Wl[--Il], Wl[Il] = null;
    for (; e === Ha; )
      Ha = Qt[--Zt], Qt[Zt] = null, ra = Qt[--Zt], Qt[Zt] = null, ca = Qt[--Zt], Qt[Zt] = null;
  }
  function yo(e, t) {
    Qt[Zt++] = ca, Qt[Zt++] = ra, Qt[Zt++] = Ha, ca = t.id, ra = t.overflow, Ha = e;
  }
  var ht = null, Ze = null, De = !1, La = null, Kt = !1, xs = Error(d(519));
  function Ya(e) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Xn(Xt(t, e)), xs;
  }
  function go(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[dt] = e, t[Nt] = l, a) {
      case "dialog":
        Ce("cancel", t), Ce("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < di.length; a++)
          Ce(di[a], t);
        break;
      case "source":
        Ce("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", t), Ce("load", t);
        break;
      case "details":
        Ce("toggle", t);
        break;
      case "input":
        Ce("invalid", t), Cr(
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
        Ce("invalid", t);
        break;
      case "textarea":
        Ce("invalid", t), zr(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Ud(t.textContent, a) ? (l.popover != null && (Ce("beforetoggle", t), Ce("toggle", t)), l.onScroll != null && Ce("scroll", t), l.onScrollEnd != null && Ce("scrollend", t), l.onClick != null && (t.onclick = va), t = !0) : t = !1, t || Ya(e, !0);
  }
  function vo(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
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
          ht = ht.return;
      }
  }
  function Pl(e) {
    if (e !== ht) return !1;
    if (!De) return vo(e), De = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Bc(e.type, e.memoizedProps)), a = !a), a && Ze && Ya(e), vo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      Ze = Gd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      Ze = Gd(e);
    } else
      t === 27 ? (t = Ze, tl(e.type) ? (e = Gc, Gc = null, Ze = e) : Ze = t) : Ze = ht ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vl() {
    Ze = ht = null, De = !1;
  }
  function js() {
    var e = La;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), La = null), e;
  }
  function Xn(e) {
    La === null ? La = [e] : La.push(e);
  }
  var Ss = y(null), pl = null, ja = null;
  function Va(e, t, a) {
    Z(Ss, t._currentValue), t._currentValue = a;
  }
  function Sa(e) {
    e._currentValue = Ss.current, R(Ss);
  }
  function Ns(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Es(e, t, a, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var c = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var r = u;
          u = i;
          for (var g = 0; g < t.length; g++)
            if (r.context === t[g]) {
              u.lanes |= a, r = u.alternate, r !== null && (r.lanes |= a), Ns(
                u.return,
                a,
                e
              ), l || (c = null);
              break e;
            }
          u = r.next;
        }
      } else if (i.tag === 18) {
        if (c = i.return, c === null) throw Error(d(341));
        c.lanes |= a, u = c.alternate, u !== null && (u.lanes |= a), Ns(c, a, e), c = null;
      } else c = i.child;
      if (c !== null) c.return = i;
      else
        for (c = i; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (i = c.sibling, i !== null) {
            i.return = c.return, c = i;
            break;
          }
          c = c.return;
        }
      i = c;
    }
  }
  function en(e, t, a, l) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var c = i.alternate;
        if (c === null) throw Error(d(387));
        if (c = c.memoizedProps, c !== null) {
          var r = i.type;
          Mt(i.pendingProps.value, c.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (i === Te.current) {
        if (c = i.alternate, c === null) throw Error(d(387));
        c.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(vi) : e = [vi]);
      }
      i = i.return;
    }
    e !== null && Es(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Qi(e) {
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
    pl = e, ja = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return po(pl, e);
  }
  function Zi(e, t) {
    return pl === null && bl(e), po(e, t);
  }
  function po(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ja === null) {
      if (e === null) throw Error(d(308));
      ja = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ja = ja.next = t;
    return a;
  }
  var Vm = typeof AbortController < "u" ? AbortController : function() {
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
  }, Gm = s.unstable_scheduleCallback, Xm = s.unstable_NormalPriority, et = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _s() {
    return {
      controller: new Vm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qn(e) {
    e.refCount--, e.refCount === 0 && Gm(Xm, function() {
      e.controller.abort();
    });
  }
  var Zn = null, Ts = 0, tn = 0, an = null;
  function Qm(e, t) {
    if (Zn === null) {
      var a = Zn = [];
      Ts = 0, tn = Ac(), an = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Ts++, t.then(bo, bo), t;
  }
  function bo() {
    if (--Ts === 0 && Zn !== null) {
      an !== null && (an.status = "fulfilled");
      var e = Zn;
      Zn = null, tn = 0, an = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Zm(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        a.push(i);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var i = 0; i < a.length; i++) (0, a[i])(t);
      },
      function(i) {
        for (l.status = "rejected", l.reason = i, i = 0; i < a.length; i++)
          (0, a[i])(void 0);
      }
    ), l;
  }
  var xo = o.S;
  o.S = function(e, t) {
    nd = Oe(), typeof t == "object" && t !== null && typeof t.then == "function" && Qm(e, t), xo !== null && xo(e, t);
  };
  var xl = y(null);
  function ws() {
    var e = xl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Ki(e, t) {
    t === null ? Z(xl, xl.current) : Z(xl, t.pool);
  }
  function jo() {
    var e = ws();
    return e === null ? null : { parent: et._currentValue, pool: e };
  }
  var ln = Error(d(460)), Cs = Error(d(474)), $i = Error(d(542)), Ji = { then: function() {
  } };
  function So(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function No(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(va, va), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, _o(e), e;
      default:
        if (typeof t.status == "string") t.then(va, va);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(d(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, _o(e), e;
        }
        throw Sl = t, ln;
    }
  }
  function jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Sl = a, ln) : a;
    }
  }
  var Sl = null;
  function Eo() {
    if (Sl === null) throw Error(d(459));
    var e = Sl;
    return Sl = null, e;
  }
  function _o(e) {
    if (e === ln || e === $i)
      throw Error(d(483));
  }
  var nn = null, Kn = 0;
  function Fi(e) {
    var t = Kn;
    return Kn += 1, nn === null && (nn = []), No(nn, e, t);
  }
  function $n(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Wi(e, t) {
    throw t.$$typeof === N ? Error(d(525)) : (e = Object.prototype.toString.call(t), Error(
      d(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function To(e) {
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
    function i(x, v) {
      return x = ba(x, v), x.index = 0, x.sibling = null, x;
    }
    function u(x, v, _) {
      return x.index = _, e ? (_ = x.alternate, _ !== null ? (_ = _.index, _ < v ? (x.flags |= 67108866, v) : _) : (x.flags |= 67108866, v)) : (x.flags |= 1048576, v);
    }
    function c(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function r(x, v, _, q) {
      return v === null || v.tag !== 6 ? (v = gs(_, x.mode, q), v.return = x, v) : (v = i(v, _), v.return = x, v);
    }
    function g(x, v, _, q) {
      var oe = _.type;
      return oe === ce ? k(
        x,
        v,
        _.props.children,
        q,
        _.key
      ) : v !== null && (v.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === H && jl(oe) === v.type) ? (v = i(v, _.props), $n(v, _), v.return = x, v) : (v = Gi(
        _.type,
        _.key,
        _.props,
        null,
        x.mode,
        q
      ), $n(v, _), v.return = x, v);
    }
    function T(x, v, _, q) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== _.containerInfo || v.stateNode.implementation !== _.implementation ? (v = vs(_, x.mode, q), v.return = x, v) : (v = i(v, _.children || []), v.return = x, v);
    }
    function k(x, v, _, q, oe) {
      return v === null || v.tag !== 7 ? (v = gl(
        _,
        x.mode,
        q,
        oe
      ), v.return = x, v) : (v = i(v, _), v.return = x, v);
    }
    function B(x, v, _) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = gs(
          "" + v,
          x.mode,
          _
        ), v.return = x, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case L:
            return _ = Gi(
              v.type,
              v.key,
              v.props,
              null,
              x.mode,
              _
            ), $n(_, v), _.return = x, _;
          case V:
            return v = vs(
              v,
              x.mode,
              _
            ), v.return = x, v;
          case H:
            return v = jl(v), B(x, v, _);
        }
        if (_e(v) || le(v))
          return v = gl(
            v,
            x.mode,
            _,
            null
          ), v.return = x, v;
        if (typeof v.then == "function")
          return B(x, Fi(v), _);
        if (v.$$typeof === $)
          return B(
            x,
            Zi(x, v),
            _
          );
        Wi(x, v);
      }
      return null;
    }
    function A(x, v, _, q) {
      var oe = v !== null ? v.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return oe !== null ? null : r(x, v, "" + _, q);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case L:
            return _.key === oe ? g(x, v, _, q) : null;
          case V:
            return _.key === oe ? T(x, v, _, q) : null;
          case H:
            return _ = jl(_), A(x, v, _, q);
        }
        if (_e(_) || le(_))
          return oe !== null ? null : k(x, v, _, q, null);
        if (typeof _.then == "function")
          return A(
            x,
            v,
            Fi(_),
            q
          );
        if (_.$$typeof === $)
          return A(
            x,
            v,
            Zi(x, _),
            q
          );
        Wi(x, _);
      }
      return null;
    }
    function M(x, v, _, q, oe) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return x = x.get(_) || null, r(v, x, "" + q, oe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case L:
            return x = x.get(
              q.key === null ? _ : q.key
            ) || null, g(v, x, q, oe);
          case V:
            return x = x.get(
              q.key === null ? _ : q.key
            ) || null, T(v, x, q, oe);
          case H:
            return q = jl(q), M(
              x,
              v,
              _,
              q,
              oe
            );
        }
        if (_e(q) || le(q))
          return x = x.get(_) || null, k(v, x, q, oe, null);
        if (typeof q.then == "function")
          return M(
            x,
            v,
            _,
            Fi(q),
            oe
          );
        if (q.$$typeof === $)
          return M(
            x,
            v,
            _,
            Zi(v, q),
            oe
          );
        Wi(v, q);
      }
      return null;
    }
    function ae(x, v, _, q) {
      for (var oe = null, Re = null, ue = v, Ne = v = 0, ze = null; ue !== null && Ne < _.length; Ne++) {
        ue.index > Ne ? (ze = ue, ue = null) : ze = ue.sibling;
        var ke = A(
          x,
          ue,
          _[Ne],
          q
        );
        if (ke === null) {
          ue === null && (ue = ze);
          break;
        }
        e && ue && ke.alternate === null && t(x, ue), v = u(ke, v, Ne), Re === null ? oe = ke : Re.sibling = ke, Re = ke, ue = ze;
      }
      if (Ne === _.length)
        return a(x, ue), De && xa(x, Ne), oe;
      if (ue === null) {
        for (; Ne < _.length; Ne++)
          ue = B(x, _[Ne], q), ue !== null && (v = u(
            ue,
            v,
            Ne
          ), Re === null ? oe = ue : Re.sibling = ue, Re = ue);
        return De && xa(x, Ne), oe;
      }
      for (ue = l(ue); Ne < _.length; Ne++)
        ze = M(
          ue,
          x,
          Ne,
          _[Ne],
          q
        ), ze !== null && (e && ze.alternate !== null && ue.delete(
          ze.key === null ? Ne : ze.key
        ), v = u(
          ze,
          v,
          Ne
        ), Re === null ? oe = ze : Re.sibling = ze, Re = ze);
      return e && ue.forEach(function(ul) {
        return t(x, ul);
      }), De && xa(x, Ne), oe;
    }
    function de(x, v, _, q) {
      if (_ == null) throw Error(d(151));
      for (var oe = null, Re = null, ue = v, Ne = v = 0, ze = null, ke = _.next(); ue !== null && !ke.done; Ne++, ke = _.next()) {
        ue.index > Ne ? (ze = ue, ue = null) : ze = ue.sibling;
        var ul = A(x, ue, ke.value, q);
        if (ul === null) {
          ue === null && (ue = ze);
          break;
        }
        e && ue && ul.alternate === null && t(x, ue), v = u(ul, v, Ne), Re === null ? oe = ul : Re.sibling = ul, Re = ul, ue = ze;
      }
      if (ke.done)
        return a(x, ue), De && xa(x, Ne), oe;
      if (ue === null) {
        for (; !ke.done; Ne++, ke = _.next())
          ke = B(x, ke.value, q), ke !== null && (v = u(ke, v, Ne), Re === null ? oe = ke : Re.sibling = ke, Re = ke);
        return De && xa(x, Ne), oe;
      }
      for (ue = l(ue); !ke.done; Ne++, ke = _.next())
        ke = M(ue, x, Ne, ke.value, q), ke !== null && (e && ke.alternate !== null && ue.delete(ke.key === null ? Ne : ke.key), v = u(ke, v, Ne), Re === null ? oe = ke : Re.sibling = ke, Re = ke);
      return e && ue.forEach(function(lg) {
        return t(x, lg);
      }), De && xa(x, Ne), oe;
    }
    function Ve(x, v, _, q) {
      if (typeof _ == "object" && _ !== null && _.type === ce && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case L:
            e: {
              for (var oe = _.key; v !== null; ) {
                if (v.key === oe) {
                  if (oe = _.type, oe === ce) {
                    if (v.tag === 7) {
                      a(
                        x,
                        v.sibling
                      ), q = i(
                        v,
                        _.props.children
                      ), q.return = x, x = q;
                      break e;
                    }
                  } else if (v.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === H && jl(oe) === v.type) {
                    a(
                      x,
                      v.sibling
                    ), q = i(v, _.props), $n(q, _), q.return = x, x = q;
                    break e;
                  }
                  a(x, v);
                  break;
                } else t(x, v);
                v = v.sibling;
              }
              _.type === ce ? (q = gl(
                _.props.children,
                x.mode,
                q,
                _.key
              ), q.return = x, x = q) : (q = Gi(
                _.type,
                _.key,
                _.props,
                null,
                x.mode,
                q
              ), $n(q, _), q.return = x, x = q);
            }
            return c(x);
          case V:
            e: {
              for (oe = _.key; v !== null; ) {
                if (v.key === oe)
                  if (v.tag === 4 && v.stateNode.containerInfo === _.containerInfo && v.stateNode.implementation === _.implementation) {
                    a(
                      x,
                      v.sibling
                    ), q = i(v, _.children || []), q.return = x, x = q;
                    break e;
                  } else {
                    a(x, v);
                    break;
                  }
                else t(x, v);
                v = v.sibling;
              }
              q = vs(_, x.mode, q), q.return = x, x = q;
            }
            return c(x);
          case H:
            return _ = jl(_), Ve(
              x,
              v,
              _,
              q
            );
        }
        if (_e(_))
          return ae(
            x,
            v,
            _,
            q
          );
        if (le(_)) {
          if (oe = le(_), typeof oe != "function") throw Error(d(150));
          return _ = oe.call(_), de(
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
            Fi(_),
            q
          );
        if (_.$$typeof === $)
          return Ve(
            x,
            v,
            Zi(x, _),
            q
          );
        Wi(x, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, v !== null && v.tag === 6 ? (a(x, v.sibling), q = i(v, _), q.return = x, x = q) : (a(x, v), q = gs(_, x.mode, q), q.return = x, x = q), c(x)) : a(x, v);
    }
    return function(x, v, _, q) {
      try {
        Kn = 0;
        var oe = Ve(
          x,
          v,
          _,
          q
        );
        return nn = null, oe;
      } catch (ue) {
        if (ue === ln || ue === $i) throw ue;
        var Re = Ot(29, ue, null, x.mode);
        return Re.lanes = q, Re.return = x, Re;
      }
    };
  }
  var Nl = To(!0), wo = To(!1), Ga = !1;
  function As(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function zs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Xa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qa(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (qe & 2) !== 0) {
      var i = l.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = Vi(e), ro(e, null, a), t;
    }
    return Yi(e, l, t, a), Vi(e);
  }
  function Jn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, se(e, a);
    }
  }
  function Ds(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var i = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? i = u = c : u = u.next = c, a = a.next;
        } while (a !== null);
        u === null ? i = u = t : u = u.next = t;
      } else i = u = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Ms = !1;
  function Fn() {
    if (Ms) {
      var e = an;
      if (e !== null) throw e;
    }
  }
  function Wn(e, t, a, l) {
    Ms = !1;
    var i = e.updateQueue;
    Ga = !1;
    var u = i.firstBaseUpdate, c = i.lastBaseUpdate, r = i.shared.pending;
    if (r !== null) {
      i.shared.pending = null;
      var g = r, T = g.next;
      g.next = null, c === null ? u = T : c.next = T, c = g;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, r = k.lastBaseUpdate, r !== c && (r === null ? k.firstBaseUpdate = T : r.next = T, k.lastBaseUpdate = g));
    }
    if (u !== null) {
      var B = i.baseState;
      c = 0, k = T = g = null, r = u;
      do {
        var A = r.lane & -536870913, M = A !== r.lane;
        if (M ? (Ae & A) === A : (l & A) === A) {
          A !== 0 && A === tn && (Ms = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var ae = e, de = r;
            A = t;
            var Ve = a;
            switch (de.tag) {
              case 1:
                if (ae = de.payload, typeof ae == "function") {
                  B = ae.call(Ve, B, A);
                  break e;
                }
                B = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = de.payload, A = typeof ae == "function" ? ae.call(Ve, B, A) : ae, A == null) break e;
                B = D({}, B, A);
                break e;
              case 2:
                Ga = !0;
            }
          }
          A = r.callback, A !== null && (e.flags |= 64, M && (e.flags |= 8192), M = i.callbacks, M === null ? i.callbacks = [A] : M.push(A));
        } else
          M = {
            lane: A,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, k === null ? (T = k = M, g = B) : k = k.next = M, c |= A;
        if (r = r.next, r === null) {
          if (r = i.shared.pending, r === null)
            break;
          M = r, r = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      k === null && (g = B), i.baseState = g, i.firstBaseUpdate = T, i.lastBaseUpdate = k, u === null && (i.shared.lanes = 0), Fa |= c, e.lanes = c, e.memoizedState = B;
    }
  }
  function Co(e, t) {
    if (typeof e != "function")
      throw Error(d(191, e));
    e.call(t);
  }
  function Ao(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Co(a[e], t);
  }
  var un = y(null), Ii = y(0);
  function zo(e, t) {
    e = Da, Z(Ii, e), Z(un, t), Da = e | t.baseLanes;
  }
  function Os() {
    Z(Ii, Da), Z(un, un.current);
  }
  function Us() {
    Da = Ii.current, R(un), R(Ii);
  }
  var Ut = y(null), $t = null;
  function Za(e) {
    var t = e.alternate;
    Z(We, We.current & 1), Z(Ut, e), $t === null && (t === null || un.current !== null || t.memoizedState !== null) && ($t = e);
  }
  function Rs(e) {
    Z(We, We.current), Z(Ut, e), $t === null && ($t = e);
  }
  function Do(e) {
    e.tag === 22 ? (Z(We, We.current), Z(Ut, e), $t === null && ($t = e)) : Ka();
  }
  function Ka() {
    Z(We, We.current), Z(Ut, Ut.current);
  }
  function Rt(e) {
    R(Ut), $t === e && ($t = null), R(We);
  }
  var We = y(0);
  function Pi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Yc(a) || Vc(a)))
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
  var Na = 0, Se = null, Le = null, tt = null, eu = !1, sn = !1, El = !1, tu = 0, In = 0, cn = null, Km = 0;
  function Je() {
    throw Error(d(321));
  }
  function ks(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Mt(e[a], t[a])) return !1;
    return !0;
  }
  function qs(e, t, a, l, i, u) {
    return Na = u, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, o.H = e === null || e.memoizedState === null ? yf : Is, El = !1, u = a(l, i), El = !1, sn && (u = Oo(
      t,
      a,
      l,
      i
    )), Mo(e), u;
  }
  function Mo(e) {
    o.H = ti;
    var t = Le !== null && Le.next !== null;
    if (Na = 0, tt = Le = Se = null, eu = !1, In = 0, cn = null, t) throw Error(d(300));
    e === null || at || (e = e.dependencies, e !== null && Qi(e) && (at = !0));
  }
  function Oo(e, t, a, l) {
    Se = e;
    var i = 0;
    do {
      if (sn && (cn = null), In = 0, sn = !1, 25 <= i) throw Error(d(301));
      if (i += 1, tt = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      o.H = gf, u = t(a, l);
    } while (sn);
    return u;
  }
  function $m() {
    var e = o.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Pn(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (Se.flags |= 1024), t;
  }
  function Bs() {
    var e = tu !== 0;
    return tu = 0, e;
  }
  function Hs(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Ls(e) {
    if (eu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      eu = !1;
    }
    Na = 0, tt = Le = Se = null, sn = !1, In = tu = 0, cn = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return tt === null ? Se.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function Ie() {
    if (Le === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = tt === null ? Se.memoizedState : tt.next;
    if (t !== null)
      tt = t, Le = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(d(467)) : Error(d(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, tt === null ? Se.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pn(e) {
    var t = In;
    return In += 1, cn === null && (cn = []), e = No(cn, e, t), t = Se, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, o.H = t === null || t.memoizedState === null ? yf : Is), e;
  }
  function lu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pn(e);
      if (e.$$typeof === $) return mt(e);
    }
    throw Error(d(438, String(e)));
  }
  function Ys(e) {
    var t = null, a = Se.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Se.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = au(), Se.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = F;
    return t.index++, a;
  }
  function Ea(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function nu(e) {
    var t = Ie();
    return Vs(t, Le, e);
  }
  function Vs(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = a;
    var i = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (i !== null) {
        var c = i.next;
        i.next = u.next, u.next = c;
      }
      t.baseQueue = i = u, l.pending = null;
    }
    if (u = e.baseState, i === null) e.memoizedState = u;
    else {
      t = i.next;
      var r = c = null, g = null, T = t, k = !1;
      do {
        var B = T.lane & -536870913;
        if (B !== T.lane ? (Ae & B) === B : (Na & B) === B) {
          var A = T.revertLane;
          if (A === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), B === tn && (k = !0);
          else if ((Na & A) === A) {
            T = T.next, A === tn && (k = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, g === null ? (r = g = B, c = u) : g = g.next = B, Se.lanes |= A, Fa |= A;
          B = T.action, El && a(u, B), u = T.hasEagerState ? T.eagerState : a(u, B);
        } else
          A = {
            lane: B,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, g === null ? (r = g = A, c = u) : g = g.next = A, Se.lanes |= B, Fa |= B;
        T = T.next;
      } while (T !== null && T !== t);
      if (g === null ? c = u : g.next = r, !Mt(u, e.memoizedState) && (at = !0, k && (a = an, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = c, e.baseQueue = g, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Gs(e) {
    var t = Ie(), a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, i = a.pending, u = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var c = i = i.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== i);
      Mt(u, t.memoizedState) || (at = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Uo(e, t, a) {
    var l = Se, i = Ie(), u = De;
    if (u) {
      if (a === void 0) throw Error(d(407));
      a = a();
    } else a = t();
    var c = !Mt(
      (Le || i).memoizedState,
      a
    );
    if (c && (i.memoizedState = a, at = !0), i = i.queue, Zs(qo.bind(null, l, i, e), [
      e
    ]), i.getSnapshot !== t || c || tt !== null && tt.memoizedState.tag & 1) {
      if (l.flags |= 2048, rn(
        9,
        { destroy: void 0 },
        ko.bind(
          null,
          l,
          i,
          a,
          t
        ),
        null
      ), Xe === null) throw Error(d(349));
      u || (Na & 127) !== 0 || Ro(l, t, a);
    }
    return a;
  }
  function Ro(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Se.updateQueue, t === null ? (t = au(), Se.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function ko(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Bo(t) && Ho(e);
  }
  function qo(e, t, a) {
    return a(function() {
      Bo(t) && Ho(e);
    });
  }
  function Bo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Mt(e, a);
    } catch {
      return !0;
    }
  }
  function Ho(e) {
    var t = yl(e, 2);
    t !== null && At(t, e, 2);
  }
  function Xs(e) {
    var t = xt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), El) {
        ua(!0);
        try {
          a();
        } finally {
          ua(!1);
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
  function Lo(e, t, a, l) {
    return e.baseState = a, Vs(
      e,
      Le,
      typeof l == "function" ? l : Ea
    );
  }
  function Jm(e, t, a, l, i) {
    if (su(e)) throw Error(d(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      o.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, Yo(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Yo(e, t) {
    var a = t.action, l = t.payload, i = e.state;
    if (t.isTransition) {
      var u = o.T, c = {};
      o.T = c;
      try {
        var r = a(i, l), g = o.S;
        g !== null && g(c, r), Vo(e, t, r);
      } catch (T) {
        Qs(e, t, T);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), o.T = u;
      }
    } else
      try {
        u = a(i, l), Vo(e, t, u);
      } catch (T) {
        Qs(e, t, T);
      }
  }
  function Vo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Go(e, t, l);
      },
      function(l) {
        return Qs(e, t, l);
      }
    ) : Go(e, t, a);
  }
  function Go(e, t, a) {
    t.status = "fulfilled", t.value = a, Xo(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Yo(e, a)));
  }
  function Qs(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Xo(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Xo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Qo(e, t) {
    return t;
  }
  function Zo(e, t) {
    if (De) {
      var a = Xe.formState;
      if (a !== null) {
        e: {
          var l = Se;
          if (De) {
            if (Ze) {
              t: {
                for (var i = Ze, u = Kt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = Jt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                Ze = Jt(
                  i.nextSibling
                ), l = i.data === "F!";
                break e;
              }
            }
            Ya(l);
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
      lastRenderedReducer: Qo,
      lastRenderedState: t
    }, a.queue = l, a = df.bind(
      null,
      Se,
      l
    ), l.dispatch = a, l = Xs(!1), u = Ws.bind(
      null,
      Se,
      !1,
      l.queue
    ), l = xt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = i, a = Jm.bind(
      null,
      Se,
      i,
      u,
      a
    ), i.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Ko(e) {
    var t = Ie();
    return $o(t, Le, e);
  }
  function $o(e, t, a) {
    if (t = Vs(
      e,
      t,
      Qo
    )[0], e = nu(Ea)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Pn(t);
      } catch (c) {
        throw c === ln ? $i : c;
      }
    else l = t;
    t = Ie();
    var i = t.queue, u = i.dispatch;
    return a !== t.memoizedState && (Se.flags |= 2048, rn(
      9,
      { destroy: void 0 },
      Fm.bind(null, i, a),
      null
    )), [l, u, e];
  }
  function Fm(e, t) {
    e.action = t;
  }
  function Jo(e) {
    var t = Ie(), a = Le;
    if (a !== null)
      return $o(t, a, e);
    Ie(), t = t.memoizedState, a = Ie();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function rn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Se.updateQueue, t === null && (t = au(), Se.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Fo() {
    return Ie().memoizedState;
  }
  function iu(e, t, a, l) {
    var i = xt();
    Se.flags |= e, i.memoizedState = rn(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function uu(e, t, a, l) {
    var i = Ie();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Le !== null && l !== null && ks(l, Le.memoizedState.deps) ? i.memoizedState = rn(t, u, a, l) : (Se.flags |= e, i.memoizedState = rn(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Wo(e, t) {
    iu(8390656, 8, e, t);
  }
  function Zs(e, t) {
    uu(2048, 8, e, t);
  }
  function Wm(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null)
      t = au(), Se.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Io(e) {
    var t = Ie().memoizedState;
    return Wm({ ref: t, nextImpl: e }), function() {
      if ((qe & 2) !== 0) throw Error(d(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Po(e, t) {
    return uu(4, 2, e, t);
  }
  function ef(e, t) {
    return uu(4, 4, e, t);
  }
  function tf(e, t) {
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
  function af(e, t, a) {
    a = a != null ? a.concat([e]) : null, uu(4, 4, tf.bind(null, t, e), a);
  }
  function Ks() {
  }
  function lf(e, t) {
    var a = Ie();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && ks(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function nf(e, t) {
    var a = Ie();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && ks(t, l[1]))
      return l[0];
    if (l = e(), El) {
      ua(!0);
      try {
        e();
      } finally {
        ua(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function $s(e, t, a) {
    return a === void 0 || (Na & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = ud(), Se.lanes |= e, Fa |= e, a);
  }
  function uf(e, t, a, l) {
    return Mt(a, t) ? a : un.current !== null ? (e = $s(e, a, l), Mt(e, t) || (at = !0), e) : (Na & 42) === 0 || (Na & 1073741824) !== 0 && (Ae & 261930) === 0 ? (at = !0, e.memoizedState = a) : (e = ud(), Se.lanes |= e, Fa |= e, t);
  }
  function sf(e, t, a, l, i) {
    var u = C.p;
    C.p = u !== 0 && 8 > u ? u : 8;
    var c = o.T, r = {};
    o.T = r, Ws(e, !1, t, a);
    try {
      var g = i(), T = o.S;
      if (T !== null && T(r, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var k = Zm(
          g,
          l
        );
        ei(
          e,
          t,
          k,
          Bt(e)
        );
      } else
        ei(
          e,
          t,
          l,
          Bt(e)
        );
    } catch (B) {
      ei(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Bt()
      );
    } finally {
      C.p = u, c !== null && r.types !== null && (c.types = r.types), o.T = c;
    }
  }
  function Im() {
  }
  function Js(e, t, a, l) {
    if (e.tag !== 5) throw Error(d(476));
    var i = cf(e).queue;
    sf(
      e,
      i,
      t,
      Y,
      a === null ? Im : function() {
        return rf(e), a(l);
      }
    );
  }
  function cf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: Y
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
  function rf(e) {
    var t = cf(e);
    t.next === null && (t = e.alternate.memoizedState), ei(
      e,
      t.next.queue,
      {},
      Bt()
    );
  }
  function Fs() {
    return mt(vi);
  }
  function of() {
    return Ie().memoizedState;
  }
  function ff() {
    return Ie().memoizedState;
  }
  function Pm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Bt();
          e = Xa(a);
          var l = Qa(t, e, a);
          l !== null && (At(l, t, a), Jn(l, t, a)), t = { cache: _s() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ey(e, t, a) {
    var l = Bt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, su(e) ? hf(t, a) : (a = ms(e, t, a, l), a !== null && (At(a, e, l), mf(a, t, l)));
  }
  function df(e, t, a) {
    var l = Bt();
    ei(e, t, a, l);
  }
  function ei(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (su(e)) hf(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, r = u(c, a);
          if (i.hasEagerState = !0, i.eagerState = r, Mt(r, c))
            return Yi(e, t, i, 0), Xe === null && Li(), !1;
        } catch {
        }
      if (a = ms(e, t, i, l), a !== null)
        return At(a, e, l), mf(a, t, l), !0;
    }
    return !1;
  }
  function Ws(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ac(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, su(e)) {
      if (t) throw Error(d(479));
    } else
      t = ms(
        e,
        a,
        l,
        2
      ), t !== null && At(t, e, 2);
  }
  function su(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function hf(e, t) {
    sn = eu = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function mf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, se(e, a);
    }
  }
  var ti = {
    readContext: mt,
    use: lu,
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
  ti.useEffectEvent = Je;
  var yf = {
    readContext: mt,
    use: lu,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: Wo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, iu(
        4194308,
        4,
        tf.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return iu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      iu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (El) {
        ua(!0);
        try {
          e();
        } finally {
          ua(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = xt();
      if (a !== void 0) {
        var i = a(t);
        if (El) {
          ua(!0);
          try {
            a(t);
          } finally {
            ua(!1);
          }
        }
      } else i = t;
      return l.memoizedState = l.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, l.queue = e, e = e.dispatch = ey.bind(
        null,
        Se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Xs(e);
      var t = e.queue, a = df.bind(null, Se, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Ks,
    useDeferredValue: function(e, t) {
      var a = xt();
      return $s(a, e, t);
    },
    useTransition: function() {
      var e = Xs(!1);
      return e = sf.bind(
        null,
        Se,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Se, i = xt();
      if (De) {
        if (a === void 0)
          throw Error(d(407));
        a = a();
      } else {
        if (a = t(), Xe === null)
          throw Error(d(349));
        (Ae & 127) !== 0 || Ro(l, t, a);
      }
      i.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return i.queue = u, Wo(qo.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, rn(
        9,
        { destroy: void 0 },
        ko.bind(
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
      var e = xt(), t = Xe.identifierPrefix;
      if (De) {
        var a = ra, l = ca;
        a = (l & ~(1 << 32 - bt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = tu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Km++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fs,
    useFormState: Zo,
    useActionState: Zo,
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
      return t.queue = a, t = Ws.bind(
        null,
        Se,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Ys,
    useCacheRefresh: function() {
      return xt().memoizedState = Pm.bind(
        null,
        Se
      );
    },
    useEffectEvent: function(e) {
      var t = xt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((qe & 2) !== 0)
          throw Error(d(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Is = {
    readContext: mt,
    use: lu,
    useCallback: lf,
    useContext: mt,
    useEffect: Zs,
    useImperativeHandle: af,
    useInsertionEffect: Po,
    useLayoutEffect: ef,
    useMemo: nf,
    useReducer: nu,
    useRef: Fo,
    useState: function() {
      return nu(Ea);
    },
    useDebugValue: Ks,
    useDeferredValue: function(e, t) {
      var a = Ie();
      return uf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = nu(Ea)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Pn(e),
        t
      ];
    },
    useSyncExternalStore: Uo,
    useId: of,
    useHostTransitionStatus: Fs,
    useFormState: Ko,
    useActionState: Ko,
    useOptimistic: function(e, t) {
      var a = Ie();
      return Lo(a, Le, e, t);
    },
    useMemoCache: Ys,
    useCacheRefresh: ff
  };
  Is.useEffectEvent = Io;
  var gf = {
    readContext: mt,
    use: lu,
    useCallback: lf,
    useContext: mt,
    useEffect: Zs,
    useImperativeHandle: af,
    useInsertionEffect: Po,
    useLayoutEffect: ef,
    useMemo: nf,
    useReducer: Gs,
    useRef: Fo,
    useState: function() {
      return Gs(Ea);
    },
    useDebugValue: Ks,
    useDeferredValue: function(e, t) {
      var a = Ie();
      return Le === null ? $s(a, e, t) : uf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gs(Ea)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Pn(e),
        t
      ];
    },
    useSyncExternalStore: Uo,
    useId: of,
    useHostTransitionStatus: Fs,
    useFormState: Jo,
    useActionState: Jo,
    useOptimistic: function(e, t) {
      var a = Ie();
      return Le !== null ? Lo(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Ys,
    useCacheRefresh: ff
  };
  gf.useEffectEvent = Io;
  function Ps(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : D({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var ec = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Bt(), i = Xa(l);
      i.payload = t, a != null && (i.callback = a), t = Qa(e, i, l), t !== null && (At(t, e, l), Jn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Bt(), i = Xa(l);
      i.tag = 1, i.payload = t, a != null && (i.callback = a), t = Qa(e, i, l), t !== null && (At(t, e, l), Jn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Bt(), l = Xa(a);
      l.tag = 2, t != null && (l.callback = t), t = Qa(e, l, a), t !== null && (At(t, e, a), Jn(t, e, a));
    }
  };
  function vf(e, t, a, l, i, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Yn(a, l) || !Yn(i, u) : !0;
  }
  function pf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && ec.enqueueReplaceState(t, t.state, null);
  }
  function _l(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = D({}, a));
      for (var i in e)
        a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function bf(e) {
    Hi(e);
  }
  function xf(e) {
    console.error(e);
  }
  function jf(e) {
    Hi(e);
  }
  function cu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Sf(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function tc(e, t, a) {
    return a = Xa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cu(e, t);
    }, a;
  }
  function Nf(e) {
    return e = Xa(e), e.tag = 3, e;
  }
  function Ef(e, t, a, l) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Sf(t, a, l);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Sf(t, a, l), typeof i != "function" && (Wa === null ? Wa = /* @__PURE__ */ new Set([this]) : Wa.add(this));
      var r = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function ty(e, t, a, l, i) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && en(
        t,
        a,
        i,
        !0
      ), a = Ut.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return $t === null ? xu() : a.alternate === null && Fe === 0 && (Fe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = i, l === Ji ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Tc(e, l, i)), !1;
          case 22:
            return a.flags |= 65536, l === Ji ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Tc(e, l, i)), !1;
        }
        throw Error(d(435, a.tag));
      }
      return Tc(e, l, i), xu(), !1;
    }
    if (De)
      return t = Ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, l !== xs && (e = Error(d(422), { cause: l }), Xn(Xt(e, a)))) : (l !== xs && (t = Error(d(423), {
        cause: l
      }), Xn(
        Xt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, l = Xt(l, a), i = tc(
        e.stateNode,
        l,
        i
      ), Ds(e, i), Fe !== 4 && (Fe = 2)), !1;
    var u = Error(d(520), { cause: l });
    if (u = Xt(u, a), ri === null ? ri = [u] : ri.push(u), Fe !== 4 && (Fe = 2), t === null) return !0;
    l = Xt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = i & -i, a.lanes |= e, e = tc(a.stateNode, l, e), Ds(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Wa === null || !Wa.has(u))))
            return a.flags |= 65536, i &= -i, a.lanes |= i, i = Nf(i), Ef(
              i,
              e,
              a,
              l
            ), Ds(a, i), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ac = Error(d(461)), at = !1;
  function yt(e, t, a, l) {
    t.child = e === null ? wo(t, null, a, l) : Nl(
      t,
      e.child,
      a,
      l
    );
  }
  function _f(e, t, a, l, i) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var c = {};
      for (var r in l)
        r !== "ref" && (c[r] = l[r]);
    } else c = l;
    return bl(t), l = qs(
      e,
      t,
      a,
      c,
      u,
      i
    ), r = Bs(), e !== null && !at ? (Hs(e, t, i), _a(e, t, i)) : (De && r && ps(t), t.flags |= 1, yt(e, t, l, i), t.child);
  }
  function Tf(e, t, a, l, i) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !ys(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, wf(
        e,
        t,
        u,
        l,
        i
      )) : (e = Gi(
        a.type,
        null,
        l,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !oc(e, i)) {
      var c = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Yn, a(c, l) && e.ref === t.ref)
        return _a(e, t, i);
    }
    return t.flags |= 1, e = ba(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function wf(e, t, a, l, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Yn(u, l) && e.ref === t.ref)
        if (at = !1, t.pendingProps = l = u, oc(e, i))
          (e.flags & 131072) !== 0 && (at = !0);
        else
          return t.lanes = e.lanes, _a(e, t, i);
    }
    return lc(
      e,
      t,
      a,
      l,
      i
    );
  }
  function Cf(e, t, a, l) {
    var i = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, i = 0; l !== null; )
            i = i | l.lanes | l.childLanes, l = l.sibling;
          l = i & ~u;
        } else l = 0, t.child = null;
        return Af(
          e,
          t,
          u,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ki(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? zo(t, u) : Os(), Do(t);
      else
        return l = t.lanes = 536870912, Af(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Ki(t, u.cachePool), zo(t, u), Ka(), t.memoizedState = null) : (e !== null && Ki(t, null), Os(), Ka());
    return yt(e, t, i, a), t.child;
  }
  function ai(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Af(e, t, a, l, i) {
    var u = ws();
    return u = u === null ? null : { parent: et._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Ki(t, null), Os(), Do(t), e !== null && en(e, t, l, !0), t.childLanes = i, null;
  }
  function ru(e, t) {
    return t = fu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zf(e, t, a) {
    return Nl(t, e.child, null, a), e = ru(t, t.pendingProps), e.flags |= 2, Rt(t), t.memoizedState = null, e;
  }
  function ay(e, t, a) {
    var l = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (De) {
        if (l.mode === "hidden")
          return e = ru(t, l), t.lanes = 536870912, ai(null, e);
        if (Rs(t), (e = Ze) ? (e = Vd(
          e,
          Kt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ha !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = fo(e), a.return = t, t.child = a, ht = t, Ze = null)) : e = null, e === null) throw Ya(t);
        return t.lanes = 536870912, null;
      }
      return ru(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Rs(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = zf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(d(558));
      else if (at || en(e, t, a, !1), i = (a & e.childLanes) !== 0, at || i) {
        if (l = Xe, l !== null && (c = ve(l, a), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, yl(e, c), At(l, e, c), ac;
        xu(), t = zf(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Ze = Jt(c.nextSibling), ht = t, De = !0, La = null, Kt = !1, e !== null && yo(t, e), t = ru(t, l), t.flags |= 4096;
      return t;
    }
    return e = ba(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ou(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(d(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function lc(e, t, a, l, i) {
    return bl(t), a = qs(
      e,
      t,
      a,
      l,
      void 0,
      i
    ), l = Bs(), e !== null && !at ? (Hs(e, t, i), _a(e, t, i)) : (De && l && ps(t), t.flags |= 1, yt(e, t, a, i), t.child);
  }
  function Df(e, t, a, l, i, u) {
    return bl(t), t.updateQueue = null, a = Oo(
      t,
      l,
      a,
      i
    ), Mo(e), l = Bs(), e !== null && !at ? (Hs(e, t, u), _a(e, t, u)) : (De && l && ps(t), t.flags |= 1, yt(e, t, a, u), t.child);
  }
  function Mf(e, t, a, l, i) {
    if (bl(t), t.stateNode === null) {
      var u = Fl, c = a.contextType;
      typeof c == "object" && c !== null && (u = mt(c)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ec, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, As(t), c = a.contextType, u.context = typeof c == "object" && c !== null ? mt(c) : Fl, u.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Ps(
        t,
        a,
        c,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && ec.enqueueReplaceState(u, u.state, null), Wn(t, l, u, i), Fn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, g = _l(a, r);
      u.props = g;
      var T = u.context, k = a.contextType;
      c = Fl, typeof k == "object" && k !== null && (c = mt(k));
      var B = a.getDerivedStateFromProps;
      k = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, k || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || T !== c) && pf(
        t,
        u,
        l,
        c
      ), Ga = !1;
      var A = t.memoizedState;
      u.state = A, Wn(t, l, u, i), Fn(), T = t.memoizedState, r || A !== T || Ga ? (typeof B == "function" && (Ps(
        t,
        a,
        B,
        l
      ), T = t.memoizedState), (g = Ga || vf(
        t,
        a,
        g,
        l,
        A,
        T,
        c
      )) ? (k || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = c, l = g) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, zs(e, t), c = t.memoizedProps, k = _l(a, c), u.props = k, B = t.pendingProps, A = u.context, T = a.contextType, g = Fl, typeof T == "object" && T !== null && (g = mt(T)), r = a.getDerivedStateFromProps, (T = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== B || A !== g) && pf(
        t,
        u,
        l,
        g
      ), Ga = !1, A = t.memoizedState, u.state = A, Wn(t, l, u, i), Fn();
      var M = t.memoizedState;
      c !== B || A !== M || Ga || e !== null && e.dependencies !== null && Qi(e.dependencies) ? (typeof r == "function" && (Ps(
        t,
        a,
        r,
        l
      ), M = t.memoizedState), (k = Ga || vf(
        t,
        a,
        k,
        l,
        A,
        M,
        g
      ) || e !== null && e.dependencies !== null && Qi(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, M, g), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        M,
        g
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = M), u.props = l, u.state = M, u.context = g, l = k) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, ou(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = Nl(
      t,
      e.child,
      null,
      i
    ), t.child = Nl(
      t,
      null,
      a,
      i
    )) : yt(e, t, a, i), t.memoizedState = u.state, e = t.child) : e = _a(
      e,
      t,
      i
    ), e;
  }
  function Of(e, t, a, l) {
    return vl(), t.flags |= 256, yt(e, t, a, l), t.child;
  }
  var nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ic(e) {
    return { baseLanes: e, cachePool: jo() };
  }
  function uc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qt), e;
  }
  function Uf(e, t, a) {
    var l = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), c && (i = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (De) {
        if (i ? Za(t) : Ka(), (e = Ze) ? (e = Vd(
          e,
          Kt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ha !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = fo(e), a.return = t, t.child = a, ht = t, Ze = null)) : e = null, e === null) throw Ya(t);
        return Vc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, i ? (Ka(), i = t.mode, r = fu(
        { mode: "hidden", children: r },
        i
      ), l = gl(
        l,
        i,
        a,
        null
      ), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = ic(a), l.childLanes = uc(
        e,
        c,
        a
      ), t.memoizedState = nc, ai(null, l)) : (Za(t), sc(t, r));
    }
    var g = e.memoizedState;
    if (g !== null && (r = g.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Za(t), t.flags &= -257, t = cc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Ka(), t.child = e.child, t.flags |= 128, t = null) : (Ka(), r = l.fallback, i = t.mode, l = fu(
          { mode: "visible", children: l.children },
          i
        ), r = gl(
          r,
          i,
          a,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, Nl(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = ic(a), l.childLanes = uc(
          e,
          c,
          a
        ), t.memoizedState = nc, t = ai(null, l));
      else if (Za(t), Vc(r)) {
        if (c = r.nextSibling && r.nextSibling.dataset, c) var T = c.dgst;
        c = T, l = Error(d(419)), l.stack = "", l.digest = c, Xn({ value: l, source: null, stack: null }), t = cc(
          e,
          t,
          a
        );
      } else if (at || en(e, t, a, !1), c = (a & e.childLanes) !== 0, at || c) {
        if (c = Xe, c !== null && (l = ve(c, a), l !== 0 && l !== g.retryLane))
          throw g.retryLane = l, yl(e, l), At(c, e, l), ac;
        Yc(r) || xu(), t = cc(
          e,
          t,
          a
        );
      } else
        Yc(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Ze = Jt(
          r.nextSibling
        ), ht = t, De = !0, La = null, Kt = !1, e !== null && yo(t, e), t = sc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Ka(), r = l.fallback, i = t.mode, g = e.child, T = g.sibling, l = ba(g, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = g.subtreeFlags & 65011712, T !== null ? r = ba(
      T,
      r
    ) : (r = gl(
      r,
      i,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, ai(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = ic(a) : (i = r.cachePool, i !== null ? (g = et._currentValue, i = i.parent !== g ? { parent: g, pool: g } : i) : i = jo(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: i
    }), l.memoizedState = r, l.childLanes = uc(
      e,
      c,
      a
    ), t.memoizedState = nc, ai(e.child, l)) : (Za(t), a = e.child, e = a.sibling, a = ba(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function sc(e, t) {
    return t = fu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function fu(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function cc(e, t, a) {
    return Nl(t, e.child, null, a), e = sc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Rf(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Ns(e.return, t, a);
  }
  function rc(e, t, a, l, i, u) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: i,
      treeForkCount: u
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = a, c.tailMode = i, c.treeForkCount = u);
  }
  function kf(e, t, a) {
    var l = t.pendingProps, i = l.revealOrder, u = l.tail;
    l = l.children;
    var c = We.current, r = (c & 2) !== 0;
    if (r ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Z(We, c), yt(e, t, l, a), l = De ? Gn : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Rf(e, a, t);
        else if (e.tag === 19)
          Rf(e, a, t);
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
    switch (i) {
      case "forwards":
        for (a = t.child, i = null; a !== null; )
          e = a.alternate, e !== null && Pi(e) === null && (i = a), a = a.sibling;
        a = i, a === null ? (i = t.child, t.child = null) : (i = a.sibling, a.sibling = null), rc(
          t,
          !1,
          i,
          a,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Pi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = a, a = i, i = e;
        }
        rc(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        rc(
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
  function _a(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Fa |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (en(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, a = ba(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ba(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function oc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Qi(e)));
  }
  function ly(e, t, a) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), Va(t, et, e.memoizedState.cache), vl();
        break;
      case 27:
      case 5:
        Me(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        Va(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Rs(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Za(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Uf(e, t, a) : (Za(t), e = _a(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Za(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (en(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), i) {
          if (l)
            return kf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Z(We, We.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Va(t, et, e.memoizedState.cache);
    }
    return _a(e, t, a);
  }
  function qf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        at = !0;
      else {
        if (!oc(e, a) && (t.flags & 128) === 0)
          return at = !1, ly(
            e,
            t,
            a
          );
        at = (e.flags & 131072) !== 0;
      }
    else
      at = !1, De && (t.flags & 1048576) !== 0 && mo(t, Gn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = jl(t.elementType), t.type = e, typeof e == "function")
            ys(e) ? (l = _l(e, l), t.tag = 1, t = Mf(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = lc(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === ie) {
                t.tag = 11, t = _f(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (i === J) {
                t.tag = 14, t = Tf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Ee(e) || e, Error(d(306, t, ""));
          }
        }
        return t;
      case 0:
        return lc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, i = _l(
          l,
          t.pendingProps
        ), Mf(
          e,
          t,
          l,
          i,
          a
        );
      case 3:
        e: {
          if (Ge(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(d(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, zs(e, t), Wn(t, l, null, a);
          var c = t.memoizedState;
          if (l = c.cache, Va(t, et, l), l !== u.cache && Es(
            t,
            [et],
            a,
            !0
          ), Fn(), l = c.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Of(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== i) {
              i = Xt(
                Error(d(424)),
                t
              ), Xn(i), t = Of(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ze = Jt(e.firstChild), ht = t, De = !0, La = null, Kt = !0, a = wo(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (vl(), l === i) {
              t = _a(
                e,
                t,
                a
              );
              break e;
            }
            yt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ou(e, t), e === null ? (a = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : De || (a = t.type, e = t.pendingProps, l = wu(
          ye.current
        ).createElement(a), l[dt] = t, l[Nt] = e, gt(l, a, e), ct(l), t.stateNode = l) : t.memoizedState = $d(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Me(t), e === null && De && (l = t.stateNode = Qd(
          t.type,
          t.pendingProps,
          ye.current
        ), ht = t, Kt = !0, i = Ze, tl(t.type) ? (Gc = i, Ze = Jt(l.firstChild)) : Ze = i), yt(
          e,
          t,
          t.pendingProps.children,
          a
        ), ou(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && De && ((i = l = Ze) && (l = Oy(
          l,
          t.type,
          t.pendingProps,
          Kt
        ), l !== null ? (t.stateNode = l, ht = t, Ze = Jt(l.firstChild), Kt = !1, i = !0) : i = !1), i || Ya(t)), Me(t), i = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = u.children, Bc(i, u) ? l = null : c !== null && Bc(i, c) && (t.flags |= 32), t.memoizedState !== null && (i = qs(
          e,
          t,
          $m,
          null,
          null,
          a
        ), vi._currentValue = i), ou(e, t), yt(e, t, l, a), t.child;
      case 6:
        return e === null && De && ((e = a = Ze) && (a = Uy(
          a,
          t.pendingProps,
          Kt
        ), a !== null ? (t.stateNode = a, ht = t, Ze = null, e = !0) : e = !1), e || Ya(t)), null;
      case 13:
        return Uf(e, t, a);
      case 4:
        return Ge(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Nl(
          t,
          null,
          l,
          a
        ) : yt(e, t, l, a), t.child;
      case 11:
        return _f(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return yt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return yt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return yt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Va(t, t.type, l.value), yt(e, t, l.children, a), t.child;
      case 9:
        return i = t.type._context, l = t.pendingProps.children, bl(t), i = mt(i), l = l(i), t.flags |= 1, yt(e, t, l, a), t.child;
      case 14:
        return Tf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return wf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return kf(e, t, a);
      case 31:
        return ay(e, t, a);
      case 22:
        return Cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return bl(t), l = mt(et), e === null ? (i = ws(), i === null && (i = Xe, u = _s(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= a), i = u), t.memoizedState = { parent: l, cache: i }, As(t), Va(t, et, i)) : ((e.lanes & a) !== 0 && (zs(e, t), Wn(t, null, null, a), Fn()), i = e.memoizedState, u = t.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Va(t, et, l)) : (l = u.cache, Va(t, et, l), l !== i.cache && Es(
          t,
          [et],
          a,
          !0
        ))), yt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function Ta(e) {
    e.flags |= 4;
  }
  function fc(e, t, a, l, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (od()) e.flags |= 8192;
        else
          throw Sl = Ji, Cs;
    } else e.flags &= -16777217;
  }
  function Bf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Pd(t))
      if (od()) e.flags |= 8192;
      else
        throw Sl = Ji, Cs;
  }
  function du(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ci() : 536870912, e.lanes |= t, hn |= t);
  }
  function li(e, t) {
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
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        a |= i.lanes | i.childLanes, l |= i.subtreeFlags & 65011712, l |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        a |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function ny(e, t, a) {
    var l = t.pendingProps;
    switch (bs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sa(et), G(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? Ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, js())), Ke(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (Ta(t), u !== null ? (Ke(t), Bf(t, u)) : (Ke(t), fc(
          t,
          i,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (Ta(t), Ke(t), Bf(t, u)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ta(t), Ke(t), fc(
          t,
          i,
          e,
          l,
          a
        )), null;
      case 27:
        if (ge(t), a = ye.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(d(166));
            return Ke(t), null;
          }
          e = P.current, Pl(t) ? go(t) : (e = Qd(i, l, a), t.stateNode = e, Ta(t));
        }
        return Ke(t), null;
      case 5:
        if (ge(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(d(166));
            return Ke(t), null;
          }
          if (u = P.current, Pl(t))
            go(t);
          else {
            var c = wu(
              ye.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? c.createElement("select", {
                      is: l.is
                    }) : c.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? c.createElement(i, { is: l.is }) : c.createElement(i);
                }
            }
            u[dt] = t, u[Nt] = l;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = u;
            e: switch (gt(u, i, l), i) {
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
            l && Ta(t);
          }
        }
        return Ke(t), fc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(d(166));
          if (e = ye.current, Pl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, i = ht, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Ud(e.nodeValue, a)), e || Ya(t, !0);
          } else
            e = wu(e).createTextNode(
              l
            ), e[dt] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Pl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(d(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(557));
              e[dt] = t;
            } else
              vl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), e = !1;
          } else
            a = js(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(d(558));
        }
        return Ke(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Pl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(d(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(d(317));
              i[dt] = t;
            } else
              vl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else
            i = js(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return Rt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), du(t, t.updateQueue), Ke(t), null);
      case 4:
        return G(), e === null && Oc(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Sa(t.type), Ke(t), null;
      case 19:
        if (R(We), l = t.memoizedState, l === null) return Ke(t), null;
        if (i = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (i) li(l, !1);
          else {
            if (Fe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Pi(e), u !== null) {
                  for (t.flags |= 128, li(l, !1), e = u.updateQueue, t.updateQueue = e, du(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    oo(a, e), a = a.sibling;
                  return Z(
                    We,
                    We.current & 1 | 2
                  ), De && xa(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Oe() > vu && (t.flags |= 128, i = !0, li(l, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Pi(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, du(t, e), li(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !De)
                return Ke(t), null;
            } else
              2 * Oe() - l.renderingStartTime > vu && a !== 536870912 && (t.flags |= 128, i = !0, li(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Oe(), e.sibling = null, a = We.current, Z(
          We,
          i ? a & 1 | 2 : a & 1
        ), De && xa(t, l.treeForkCount), e) : (Ke(t), null);
      case 22:
      case 23:
        return Rt(t), Us(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), a = t.updateQueue, a !== null && du(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && R(xl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Sa(et), Ke(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function iy(e, t) {
    switch (bs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sa(et), G(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ge(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Rt(t), t.alternate === null)
            throw Error(d(340));
          vl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(d(340));
          vl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return R(We), null;
      case 4:
        return G(), null;
      case 10:
        return Sa(t.type), null;
      case 22:
      case 23:
        return Rt(t), Us(), e !== null && R(xl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sa(et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hf(e, t) {
    switch (bs(t), t.tag) {
      case 3:
        Sa(et), G();
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
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        R(We);
        break;
      case 10:
        Sa(t.type);
        break;
      case 22:
      case 23:
        Rt(t), Us(), e !== null && R(xl);
        break;
      case 24:
        Sa(et);
    }
  }
  function ni(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var u = a.create, c = a.inst;
            l = u(), c.destroy = l;
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (r) {
      He(t, t.return, r);
    }
  }
  function $a(e, t, a) {
    try {
      var l = t.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var c = l.inst, r = c.destroy;
            if (r !== void 0) {
              c.destroy = void 0, i = t;
              var g = a, T = r;
              try {
                T();
              } catch (k) {
                He(
                  i,
                  g,
                  k
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (k) {
      He(t, t.return, k);
    }
  }
  function Lf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Ao(t, a);
      } catch (l) {
        He(e, e.return, l);
      }
    }
  }
  function Yf(e, t, a) {
    a.props = _l(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      He(e, t, l);
    }
  }
  function ii(e, t) {
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
    } catch (i) {
      He(e, t, i);
    }
  }
  function oa(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          He(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          He(e, t, i);
        }
      else a.current = null;
  }
  function Vf(e) {
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
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function dc(e, t, a) {
    try {
      var l = e.stateNode;
      wy(l, e.type, a, t), l[Nt] = t;
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function Gf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && tl(e.type) || e.tag === 4;
  }
  function hc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && tl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = va));
    else if (l !== 4 && (l === 27 && tl(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (mc(e, t, a), e = e.sibling; e !== null; )
        mc(e, t, a), e = e.sibling;
  }
  function hu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && tl(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (hu(e, t, a), e = e.sibling; e !== null; )
        hu(e, t, a), e = e.sibling;
  }
  function Xf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      gt(t, l, a), t[dt] = e, t[Nt] = a;
    } catch (u) {
      He(e, e.return, u);
    }
  }
  var wa = !1, lt = !1, yc = !1, Qf = typeof WeakSet == "function" ? WeakSet : Set, rt = null;
  function uy(e, t) {
    if (e = e.containerInfo, kc = Uu, e = to(e), cs(e)) {
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
            var i = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break e;
            }
            var c = 0, r = -1, g = -1, T = 0, k = 0, B = e, A = null;
            t: for (; ; ) {
              for (var M; B !== a || i !== 0 && B.nodeType !== 3 || (r = c + i), B !== u || l !== 0 && B.nodeType !== 3 || (g = c + l), B.nodeType === 3 && (c += B.nodeValue.length), (M = B.firstChild) !== null; )
                A = B, B = M;
              for (; ; ) {
                if (B === e) break t;
                if (A === a && ++T === i && (r = c), A === u && ++k === l && (g = c), (M = B.nextSibling) !== null) break;
                B = A, A = B.parentNode;
              }
              B = M;
            }
            a = r === -1 || g === -1 ? null : { start: r, end: g };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (qc = { focusedElem: e, selectionRange: a }, Uu = !1, rt = t; rt !== null; )
      if (t = rt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, rt = e;
      else
        for (; rt !== null; ) {
          switch (t = rt, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  i = e[a], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, a = t, i = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
                try {
                  var ae = _l(
                    a.type,
                    i
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ae,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (de) {
                  He(
                    a,
                    a.return,
                    de
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Lc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lc(e);
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
              if ((e & 1024) !== 0) throw Error(d(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, rt = e;
            break;
          }
          rt = t.return;
        }
  }
  function Zf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Aa(e, a), l & 4 && ni(5, a);
        break;
      case 1:
        if (Aa(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              He(a, a.return, c);
            }
          else {
            var i = _l(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                i,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              He(
                a,
                a.return,
                c
              );
            }
          }
        l & 64 && Lf(a), l & 512 && ii(a, a.return);
        break;
      case 3:
        if (Aa(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            Ao(e, t);
          } catch (c) {
            He(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Xf(a);
      case 26:
      case 5:
        Aa(e, a), t === null && l & 4 && Vf(a), l & 512 && ii(a, a.return);
        break;
      case 12:
        Aa(e, a);
        break;
      case 31:
        Aa(e, a), l & 4 && Jf(e, a);
        break;
      case 13:
        Aa(e, a), l & 4 && Ff(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = yy.bind(
          null,
          a
        ), Ry(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || wa, !l) {
          t = t !== null && t.memoizedState !== null || lt, i = wa;
          var u = lt;
          wa = l, (lt = t) && !u ? za(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Aa(e, a), wa = i, lt = u;
        }
        break;
      case 30:
        break;
      default:
        Aa(e, a);
    }
  }
  function Kf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Qu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var $e = null, _t = !1;
  function Ca(e, t, a) {
    for (a = a.child; a !== null; )
      $f(e, t, a), a = a.sibling;
  }
  function $f(e, t, a) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(da, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || oa(a, t), Ca(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || oa(a, t);
        var l = $e, i = _t;
        tl(a.type) && ($e = a.stateNode, _t = !1), Ca(
          e,
          t,
          a
        ), mi(a.stateNode), $e = l, _t = i;
        break;
      case 5:
        lt || oa(a, t);
      case 6:
        if (l = $e, i = _t, $e = null, Ca(
          e,
          t,
          a
        ), $e = l, _t = i, $e !== null)
          if (_t)
            try {
              ($e.nodeType === 9 ? $e.body : $e.nodeName === "HTML" ? $e.ownerDocument.body : $e).removeChild(a.stateNode);
            } catch (u) {
              He(
                a,
                t,
                u
              );
            }
          else
            try {
              $e.removeChild(a.stateNode);
            } catch (u) {
              He(
                a,
                t,
                u
              );
            }
        break;
      case 18:
        $e !== null && (_t ? (e = $e, Ld(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), jn(e)) : Ld($e, a.stateNode));
        break;
      case 4:
        l = $e, i = _t, $e = a.stateNode.containerInfo, _t = !0, Ca(
          e,
          t,
          a
        ), $e = l, _t = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $a(2, a, t), lt || $a(4, a, t), Ca(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (oa(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Yf(
          a,
          t,
          l
        )), Ca(
          e,
          t,
          a
        );
        break;
      case 21:
        Ca(
          e,
          t,
          a
        );
        break;
      case 22:
        lt = (l = lt) || a.memoizedState !== null, Ca(
          e,
          t,
          a
        ), lt = l;
        break;
      default:
        Ca(
          e,
          t,
          a
        );
    }
  }
  function Jf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        jn(e);
      } catch (a) {
        He(t, t.return, a);
      }
    }
  }
  function Ff(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        jn(e);
      } catch (a) {
        He(t, t.return, a);
      }
  }
  function sy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Qf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qf()), t;
      default:
        throw Error(d(435, e.tag));
    }
  }
  function mu(e, t) {
    var a = sy(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var i = gy.bind(null, e, l);
        l.then(i, i);
      }
    });
  }
  function Tt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l], u = e, c = t, r = c;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (tl(r.type)) {
                $e = r.stateNode, _t = !1;
                break e;
              }
              break;
            case 5:
              $e = r.stateNode, _t = !1;
              break e;
            case 3:
            case 4:
              $e = r.stateNode.containerInfo, _t = !0;
              break e;
          }
          r = r.return;
        }
        if ($e === null) throw Error(d(160));
        $f(u, c, i), $e = null, _t = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Wf(t, e), t = t.sibling;
  }
  var Pt = null;
  function Wf(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), wt(e), l & 4 && ($a(3, e, e.return), ni(3, e), $a(5, e, e.return));
        break;
      case 1:
        Tt(t, e), wt(e), l & 512 && (lt || a === null || oa(a, a.return)), l & 64 && wa && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var i = Pt;
        if (Tt(t, e), wt(e), l & 512 && (lt || a === null || oa(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (l) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Mn] || u[dt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), gt(u, l, a), u[dt] = e, ct(u), l = u;
                      break e;
                    case "link":
                      var c = Wd(
                        "link",
                        "href",
                        i
                      ).get(l + (a.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (u = c[r], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            c.splice(r, 1);
                            break t;
                          }
                      }
                      u = i.createElement(l), gt(u, l, a), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = Wd(
                        "meta",
                        "content",
                        i
                      ).get(l + (a.content || ""))) {
                        for (r = 0; r < c.length; r++)
                          if (u = c[r], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            c.splice(r, 1);
                            break t;
                          }
                      }
                      u = i.createElement(l), gt(u, l, a), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(d(468, l));
                  }
                  u[dt] = e, ct(u), l = u;
                }
                e.stateNode = l;
              } else
                Id(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Fd(
                i,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? Id(
              i,
              e.type,
              e.stateNode
            ) : Fd(
              i,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && dc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), wt(e), l & 512 && (lt || a === null || oa(a, a.return)), a !== null && l & 4 && dc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), wt(e), l & 512 && (lt || a === null || oa(a, a.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Gl(i, "");
          } catch (ae) {
            He(e, e.return, ae);
          }
        }
        l & 4 && e.stateNode != null && (i = e.memoizedProps, dc(
          e,
          i,
          a !== null ? a.memoizedProps : i
        )), l & 1024 && (yc = !0);
        break;
      case 6:
        if (Tt(t, e), wt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(d(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (ae) {
            He(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (zu = null, i = Pt, Pt = Cu(t.containerInfo), Tt(t, e), Pt = i, wt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            jn(t.containerInfo);
          } catch (ae) {
            He(e, e.return, ae);
          }
        yc && (yc = !1, If(e));
        break;
      case 4:
        l = Pt, Pt = Cu(
          e.stateNode.containerInfo
        ), Tt(t, e), wt(e), Pt = l;
        break;
      case 12:
        Tt(t, e), wt(e);
        break;
      case 31:
        Tt(t, e), wt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, mu(e, l)));
        break;
      case 13:
        Tt(t, e), wt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gu = Oe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, mu(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var g = a !== null && a.memoizedState !== null, T = wa, k = lt;
        if (wa = T || i, lt = k || g, Tt(t, e), lt = k, wa = T, wt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (a === null || g || wa || lt || Tl(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                g = a = t;
                try {
                  if (u = g.stateNode, i)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    r = g.stateNode;
                    var B = g.memoizedProps.style, A = B != null && B.hasOwnProperty("display") ? B.display : null;
                    r.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (ae) {
                  He(g, g.return, ae);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = i ? "" : g.memoizedProps;
                } catch (ae) {
                  He(g, g.return, ae);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                g = t;
                try {
                  var M = g.stateNode;
                  i ? Yd(M, !0) : Yd(g.stateNode, !1);
                } catch (ae) {
                  He(g, g.return, ae);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, mu(e, a))));
        break;
      case 19:
        Tt(t, e), wt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, mu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tt(t, e), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Gf(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(d(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode, u = hc(e);
            hu(e, u, i);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Gl(c, ""), a.flags &= -33);
            var r = hc(e);
            hu(e, r, c);
            break;
          case 3:
          case 4:
            var g = a.stateNode.containerInfo, T = hc(e);
            mc(
              e,
              T,
              g
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (k) {
        He(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function If(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        If(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Aa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Zf(e, t.alternate, t), t = t.sibling;
  }
  function Tl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $a(4, t, t.return), Tl(t);
          break;
        case 1:
          oa(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Yf(
            t,
            t.return,
            a
          ), Tl(t);
          break;
        case 27:
          mi(t.stateNode);
        case 26:
        case 5:
          oa(t, t.return), Tl(t);
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
  function za(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, i = e, u = t, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          za(
            i,
            u,
            a
          ), ni(4, u);
          break;
        case 1:
          if (za(
            i,
            u,
            a
          ), l = u, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (T) {
              He(l, l.return, T);
            }
          if (l = u, i = l.updateQueue, i !== null) {
            var r = l.stateNode;
            try {
              var g = i.shared.hiddenCallbacks;
              if (g !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < g.length; i++)
                  Co(g[i], r);
            } catch (T) {
              He(l, l.return, T);
            }
          }
          a && c & 64 && Lf(u), ii(u, u.return);
          break;
        case 27:
          Xf(u);
        case 26:
        case 5:
          za(
            i,
            u,
            a
          ), a && l === null && c & 4 && Vf(u), ii(u, u.return);
          break;
        case 12:
          za(
            i,
            u,
            a
          );
          break;
        case 31:
          za(
            i,
            u,
            a
          ), a && c & 4 && Jf(i, u);
          break;
        case 13:
          za(
            i,
            u,
            a
          ), a && c & 4 && Ff(i, u);
          break;
        case 22:
          u.memoizedState === null && za(
            i,
            u,
            a
          ), ii(u, u.return);
          break;
        case 30:
          break;
        default:
          za(
            i,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function gc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Qn(a));
  }
  function vc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Qn(e));
  }
  function ea(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Pf(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Pf(e, t, a, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ea(
          e,
          t,
          a,
          l
        ), i & 2048 && ni(9, t);
        break;
      case 1:
        ea(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        ea(
          e,
          t,
          a,
          l
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Qn(e)));
        break;
      case 12:
        if (i & 2048) {
          ea(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, c = u.id, r = u.onPostCommit;
            typeof r == "function" && r(
              c,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (g) {
            He(t, t.return, g);
          }
        } else
          ea(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        ea(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        ea(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? ea(
          e,
          t,
          a,
          l
        ) : ui(e, t) : u._visibility & 2 ? ea(
          e,
          t,
          a,
          l
        ) : (u._visibility |= 2, on(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && gc(c, t);
        break;
      case 24:
        ea(
          e,
          t,
          a,
          l
        ), i & 2048 && vc(t.alternate, t);
        break;
      default:
        ea(
          e,
          t,
          a,
          l
        );
    }
  }
  function on(e, t, a, l, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, r = a, g = l, T = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          on(
            u,
            c,
            r,
            g,
            i
          ), ni(8, c);
          break;
        case 23:
          break;
        case 22:
          var k = c.stateNode;
          c.memoizedState !== null ? k._visibility & 2 ? on(
            u,
            c,
            r,
            g,
            i
          ) : ui(
            u,
            c
          ) : (k._visibility |= 2, on(
            u,
            c,
            r,
            g,
            i
          )), i && T & 2048 && gc(
            c.alternate,
            c
          );
          break;
        case 24:
          on(
            u,
            c,
            r,
            g,
            i
          ), i && T & 2048 && vc(c.alternate, c);
          break;
        default:
          on(
            u,
            c,
            r,
            g,
            i
          );
      }
      t = t.sibling;
    }
  }
  function ui(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, i = l.flags;
        switch (l.tag) {
          case 22:
            ui(a, l), i & 2048 && gc(
              l.alternate,
              l
            );
            break;
          case 24:
            ui(a, l), i & 2048 && vc(l.alternate, l);
            break;
          default:
            ui(a, l);
        }
        t = t.sibling;
      }
  }
  var si = 8192;
  function fn(e, t, a) {
    if (e.subtreeFlags & si)
      for (e = e.child; e !== null; )
        ed(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function ed(e, t, a) {
    switch (e.tag) {
      case 26:
        fn(
          e,
          t,
          a
        ), e.flags & si && e.memoizedState !== null && Ky(
          a,
          Pt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        fn(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Pt;
        Pt = Cu(e.stateNode.containerInfo), fn(
          e,
          t,
          a
        ), Pt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = si, si = 16777216, fn(
          e,
          t,
          a
        ), si = l) : fn(
          e,
          t,
          a
        ));
        break;
      default:
        fn(
          e,
          t,
          a
        );
    }
  }
  function td(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ci(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          rt = l, ld(
            l,
            e
          );
        }
      td(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ad(e), e = e.sibling;
  }
  function ad(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ci(e), e.flags & 2048 && $a(9, e, e.return);
        break;
      case 3:
        ci(e);
        break;
      case 12:
        ci(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, yu(e)) : ci(e);
        break;
      default:
        ci(e);
    }
  }
  function yu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          rt = l, ld(
            l,
            e
          );
        }
      td(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          $a(8, t, t.return), yu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, yu(t));
          break;
        default:
          yu(t);
      }
      e = e.sibling;
    }
  }
  function ld(e, t) {
    for (; rt !== null; ) {
      var a = rt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $a(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Qn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, rt = l;
      else
        e: for (a = e; rt !== null; ) {
          l = rt;
          var i = l.sibling, u = l.return;
          if (Kf(l), l === a) {
            rt = null;
            break e;
          }
          if (i !== null) {
            i.return = u, rt = i;
            break e;
          }
          rt = u;
        }
    }
  }
  var cy = {
    getCacheForType: function(e) {
      var t = mt(et), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return mt(et).controller.signal;
    }
  }, ry = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, Xe = null, we = null, Ae = 0, Be = 0, kt = null, Ja = !1, dn = !1, pc = !1, Da = 0, Fe = 0, Fa = 0, wl = 0, bc = 0, qt = 0, hn = 0, ri = null, Ct = null, xc = !1, gu = 0, nd = 0, vu = 1 / 0, pu = null, Wa = null, it = 0, Ia = null, mn = null, Ma = 0, jc = 0, Sc = null, id = null, oi = 0, Nc = null;
  function Bt() {
    return (qe & 2) !== 0 && Ae !== 0 ? Ae & -Ae : o.T !== null ? Ac() : St();
  }
  function ud() {
    if (qt === 0)
      if ((Ae & 536870912) === 0 || De) {
        var e = qa;
        qa <<= 1, (qa & 3932160) === 0 && (qa = 262144), qt = e;
      } else qt = 536870912;
    return e = Ut.current, e !== null && (e.flags |= 32), qt;
  }
  function At(e, t, a) {
    (e === Xe && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (yn(e, 0), Pa(
      e,
      Ae,
      qt,
      !1
    )), U(e, a), ((qe & 2) === 0 || e !== Xe) && (e === Xe && ((qe & 2) === 0 && (wl |= a), Fe === 4 && Pa(
      e,
      Ae,
      qt,
      !1
    )), fa(e));
  }
  function sd(e, t, a) {
    if ((qe & 6) !== 0) throw Error(d(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ya(e, t), i = l ? dy(e, t) : _c(e, t, !0), u = l;
    do {
      if (i === 0) {
        dn && !l && Pa(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !oy(a)) {
          i = _c(e, t, !1), u = !1;
          continue;
        }
        if (i === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var r = e;
              i = ri;
              var g = r.current.memoizedState.isDehydrated;
              if (g && (yn(r, c).flags |= 256), c = _c(
                r,
                c,
                !1
              ), c !== 2) {
                if (pc && !g) {
                  r.errorRecoveryDisabledLanes |= u, wl |= u, i = 4;
                  break e;
                }
                u = Ct, Ct = i, u !== null && (Ct === null ? Ct = u : Ct.push.apply(
                  Ct,
                  u
                ));
              }
              i = c;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          yn(e, 0), Pa(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = i, u) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Pa(
                l,
                t,
                qt,
                !Ja
              );
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && (i = gu + 300 - Oe(), 10 < i)) {
            if (Pa(
              l,
              t,
              qt,
              !Ja
            ), kl(l, 0, !0) !== 0) break e;
            Ma = t, l.timeoutHandle = Bd(
              cd.bind(
                null,
                l,
                a,
                Ct,
                pu,
                xc,
                t,
                qt,
                wl,
                hn,
                Ja,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          cd(
            l,
            a,
            Ct,
            pu,
            xc,
            t,
            qt,
            wl,
            hn,
            Ja,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    fa(e);
  }
  function cd(e, t, a, l, i, u, c, r, g, T, k, B, A, M) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: va
      }, ed(
        t,
        u,
        B
      );
      var ae = (u & 62914560) === u ? gu - Oe() : (u & 4194048) === u ? nd - Oe() : 0;
      if (ae = $y(
        B,
        ae
      ), ae !== null) {
        Ma = u, e.cancelPendingCommit = ae(
          gd.bind(
            null,
            e,
            t,
            u,
            a,
            l,
            i,
            c,
            r,
            g,
            k,
            B,
            null,
            A,
            M
          )
        ), Pa(e, u, c, !T);
        return;
      }
    }
    gd(
      e,
      t,
      u,
      a,
      l,
      i,
      c,
      r,
      g
    );
  }
  function oy(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var i = a[l], u = i.getSnapshot;
          i = i.value;
          try {
            if (!Mt(u(), i)) return !1;
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
  function Pa(e, t, a, l) {
    t &= ~bc, t &= ~wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - bt(i), c = 1 << u;
      l[u] = -1, i &= ~c;
    }
    a !== 0 && ne(e, a, t);
  }
  function bu() {
    return (qe & 6) === 0 ? (fi(0), !1) : !0;
  }
  function Ec() {
    if (we !== null) {
      if (Be === 0)
        var e = we.return;
      else
        e = we, ja = pl = null, Ls(e), nn = null, Kn = 0, e = we;
      for (; e !== null; )
        Hf(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function yn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, zy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ma = 0, Ec(), Xe = e, we = a = ba(e.current, null), Ae = t, Be = 0, kt = null, Ja = !1, dn = ya(e, t), pc = !1, hn = qt = bc = wl = Fa = Fe = 0, Ct = ri = null, xc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - bt(l), u = 1 << i;
        t |= e[i], l &= ~u;
      }
    return Da = t, Li(), a;
  }
  function rd(e, t) {
    Se = null, o.H = ti, t === ln || t === $i ? (t = Eo(), Be = 3) : t === Cs ? (t = Eo(), Be = 4) : Be = t === ac ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, kt = t, we === null && (Fe = 1, cu(
      e,
      Xt(t, e.current)
    ));
  }
  function od() {
    var e = Ut.current;
    return e === null ? !0 : (Ae & 4194048) === Ae ? $t === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === $t : !1;
  }
  function fd() {
    var e = o.H;
    return o.H = ti, e === null ? ti : e;
  }
  function dd() {
    var e = o.A;
    return o.A = cy, e;
  }
  function xu() {
    Fe = 4, Ja || (Ae & 4194048) !== Ae && Ut.current !== null || (dn = !0), (Fa & 134217727) === 0 && (wl & 134217727) === 0 || Xe === null || Pa(
      Xe,
      Ae,
      qt,
      !1
    );
  }
  function _c(e, t, a) {
    var l = qe;
    qe |= 2;
    var i = fd(), u = dd();
    (Xe !== e || Ae !== t) && (pu = null, yn(e, t)), t = !1;
    var c = Fe;
    e: do
      try {
        if (Be !== 0 && we !== null) {
          var r = we, g = kt;
          switch (Be) {
            case 8:
              Ec(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var T = Be;
              if (Be = 0, kt = null, gn(e, r, g, T), a && dn) {
                c = 0;
                break e;
              }
              break;
            default:
              T = Be, Be = 0, kt = null, gn(e, r, g, T);
          }
        }
        fy(), c = Fe;
        break;
      } catch (k) {
        rd(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ja = pl = null, qe = l, o.H = i, o.A = u, we === null && (Xe = null, Ae = 0, Li()), c;
  }
  function fy() {
    for (; we !== null; ) hd(we);
  }
  function dy(e, t) {
    var a = qe;
    qe |= 2;
    var l = fd(), i = dd();
    Xe !== e || Ae !== t ? (pu = null, vu = Oe() + 500, yn(e, t)) : dn = ya(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && we !== null) {
          t = we;
          var u = kt;
          t: switch (Be) {
            case 1:
              Be = 0, kt = null, gn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (So(u)) {
                Be = 0, kt = null, md(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Xe !== e || (Be = 7), fa(e);
              }, u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              So(u) ? (Be = 0, kt = null, md(t)) : (Be = 0, kt = null, gn(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (we.tag) {
                case 26:
                  c = we.memoizedState;
                case 5:
                case 27:
                  var r = we;
                  if (c ? Pd(c) : r.stateNode.complete) {
                    Be = 0, kt = null;
                    var g = r.sibling;
                    if (g !== null) we = g;
                    else {
                      var T = r.return;
                      T !== null ? (we = T, ju(T)) : we = null;
                    }
                    break t;
                  }
              }
              Be = 0, kt = null, gn(e, t, u, 5);
              break;
            case 6:
              Be = 0, kt = null, gn(e, t, u, 6);
              break;
            case 8:
              Ec(), Fe = 6;
              break e;
            default:
              throw Error(d(462));
          }
        }
        hy();
        break;
      } catch (k) {
        rd(e, k);
      }
    while (!0);
    return ja = pl = null, o.H = l, o.A = i, qe = a, we !== null ? 0 : (Xe = null, Ae = 0, Li(), Fe);
  }
  function hy() {
    for (; we !== null && !ia(); )
      hd(we);
  }
  function hd(e) {
    var t = qf(e.alternate, e, Da);
    e.memoizedProps = e.pendingProps, t === null ? ju(e) : we = t;
  }
  function md(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Df(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ae
        );
        break;
      case 11:
        t = Df(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ae
        );
        break;
      case 5:
        Ls(t);
      default:
        Hf(a, t), t = we = oo(t, Da), t = qf(a, t, Da);
    }
    e.memoizedProps = e.pendingProps, t === null ? ju(e) : we = t;
  }
  function gn(e, t, a, l) {
    ja = pl = null, Ls(t), nn = null, Kn = 0;
    var i = t.return;
    try {
      if (ty(
        e,
        i,
        t,
        a,
        Ae
      )) {
        Fe = 1, cu(
          e,
          Xt(a, e.current)
        ), we = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw we = i, u;
      Fe = 1, cu(
        e,
        Xt(a, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (De || l === 1 ? e = !0 : dn || (Ae & 536870912) !== 0 ? e = !1 : (Ja = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ut.current, l !== null && l.tag === 13 && (l.flags |= 16384))), yd(t, e)) : ju(t);
  }
  function ju(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yd(
          t,
          Ja
        );
        return;
      }
      e = t.return;
      var a = ny(
        t.alternate,
        t,
        Da
      );
      if (a !== null) {
        we = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
  }
  function yd(e, t) {
    do {
      var a = iy(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, we = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = a;
    } while (e !== null);
    Fe = 6, we = null;
  }
  function gd(e, t, a, l, i, u, c, r, g) {
    e.cancelPendingCommit = null;
    do
      Su();
    while (it !== 0);
    if ((qe & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === e.current) throw Error(d(177));
      if (u = t.lanes | t.childLanes, u |= hs, X(
        e,
        a,
        u,
        c,
        r,
        g
      ), e === Xe && (we = Xe = null, Ae = 0), mn = t, Ia = e, Ma = a, jc = u, Sc = i, id = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vy(Ra, function() {
        return jd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = o.T, o.T = null, i = C.p, C.p = 2, c = qe, qe |= 4;
        try {
          uy(e, t, a);
        } finally {
          qe = c, C.p = i, o.T = l;
        }
      }
      it = 1, vd(), pd(), bd();
    }
  }
  function vd() {
    if (it === 1) {
      it = 0;
      var e = Ia, t = mn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = o.T, o.T = null;
        var l = C.p;
        C.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Wf(t, e);
          var u = qc, c = to(e.containerInfo), r = u.focusedElem, g = u.selectionRange;
          if (c !== r && r && r.ownerDocument && eo(
            r.ownerDocument.documentElement,
            r
          )) {
            if (g !== null && cs(r)) {
              var T = g.start, k = g.end;
              if (k === void 0 && (k = T), "selectionStart" in r)
                r.selectionStart = T, r.selectionEnd = Math.min(
                  k,
                  r.value.length
                );
              else {
                var B = r.ownerDocument || document, A = B && B.defaultView || window;
                if (A.getSelection) {
                  var M = A.getSelection(), ae = r.textContent.length, de = Math.min(g.start, ae), Ve = g.end === void 0 ? de : Math.min(g.end, ae);
                  !M.extend && de > Ve && (c = Ve, Ve = de, de = c);
                  var x = Pr(
                    r,
                    de
                  ), v = Pr(
                    r,
                    Ve
                  );
                  if (x && v && (M.rangeCount !== 1 || M.anchorNode !== x.node || M.anchorOffset !== x.offset || M.focusNode !== v.node || M.focusOffset !== v.offset)) {
                    var _ = B.createRange();
                    _.setStart(x.node, x.offset), M.removeAllRanges(), de > Ve ? (M.addRange(_), M.extend(v.node, v.offset)) : (_.setEnd(v.node, v.offset), M.addRange(_));
                  }
                }
              }
            }
            for (B = [], M = r; M = M.parentNode; )
              M.nodeType === 1 && B.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < B.length; r++) {
              var q = B[r];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Uu = !!kc, qc = kc = null;
        } finally {
          qe = i, C.p = l, o.T = a;
        }
      }
      e.current = t, it = 2;
    }
  }
  function pd() {
    if (it === 2) {
      it = 0;
      var e = Ia, t = mn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = o.T, o.T = null;
        var l = C.p;
        C.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Zf(e, t.alternate, t);
        } finally {
          qe = i, C.p = l, o.T = a;
        }
      }
      it = 3;
    }
  }
  function bd() {
    if (it === 4 || it === 3) {
      it = 0, Ml();
      var e = Ia, t = mn, a = Ma, l = id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? it = 5 : (it = 0, mn = Ia = null, xd(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Wa = null), fe(a), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function")
        try {
          st.onCommitFiberRoot(
            da,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = o.T, i = C.p, C.p = 2, o.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < l.length; c++) {
            var r = l[c];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          o.T = t, C.p = i;
        }
      }
      (Ma & 3) !== 0 && Su(), fa(e), i = e.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? e === Nc ? oi++ : (oi = 0, Nc = e) : oi = 0, fi(0);
    }
  }
  function xd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Qn(t)));
  }
  function Su() {
    return vd(), pd(), bd(), jd();
  }
  function jd() {
    if (it !== 5) return !1;
    var e = Ia, t = jc;
    jc = 0;
    var a = fe(Ma), l = o.T, i = C.p;
    try {
      C.p = 32 > a ? 32 : a, o.T = null, a = Sc, Sc = null;
      var u = Ia, c = Ma;
      if (it = 0, mn = Ia = null, Ma = 0, (qe & 6) !== 0) throw Error(d(331));
      var r = qe;
      if (qe |= 4, ad(u.current), Pf(
        u,
        u.current,
        c,
        a
      ), qe = r, fi(0, !1), st && typeof st.onPostCommitFiberRoot == "function")
        try {
          st.onPostCommitFiberRoot(da, u);
        } catch {
        }
      return !0;
    } finally {
      C.p = i, o.T = l, xd(e, t);
    }
  }
  function Sd(e, t, a) {
    t = Xt(a, t), t = tc(e.stateNode, t, 2), e = Qa(e, t, 2), e !== null && (U(e, 2), fa(e));
  }
  function He(e, t, a) {
    if (e.tag === 3)
      Sd(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sd(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Wa === null || !Wa.has(l))) {
            e = Xt(a, e), a = Nf(2), l = Qa(t, a, 2), l !== null && (Ef(
              a,
              l,
              t,
              e
            ), U(l, 2), fa(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Tc(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ry();
      var i = /* @__PURE__ */ new Set();
      l.set(t, i);
    } else
      i = l.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(t, i));
    i.has(a) || (pc = !0, i.add(a), e = my.bind(null, e, t, a), t.then(e, e));
  }
  function my(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Xe === e && (Ae & a) === a && (Fe === 4 || Fe === 3 && (Ae & 62914560) === Ae && 300 > Oe() - gu ? (qe & 2) === 0 && yn(e, 0) : bc |= a, hn === Ae && (hn = 0)), fa(e);
  }
  function Nd(e, t) {
    t === 0 && (t = Ci()), e = yl(e, t), e !== null && (U(e, t), fa(e));
  }
  function yy(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Nd(e, a);
  }
  function gy(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    l !== null && l.delete(t), Nd(e, a);
  }
  function vy(e, t) {
    return Wt(e, t);
  }
  var Nu = null, vn = null, wc = !1, Eu = !1, Cc = !1, el = 0;
  function fa(e) {
    e !== vn && e.next === null && (vn === null ? Nu = vn = e : vn = vn.next = e), Eu = !0, wc || (wc = !0, by());
  }
  function fi(e, t) {
    if (!Cc && Eu) {
      Cc = !0;
      do
        for (var a = !1, l = Nu; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var c = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - bt(42 | e) + 1) - 1, u &= i & ~(c & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, wd(l, u));
          } else
            u = Ae, u = kl(
              l,
              l === Xe ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || ya(l, u) || (a = !0, wd(l, u));
          l = l.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function py() {
    Ed();
  }
  function Ed() {
    Eu = wc = !1;
    var e = 0;
    el !== 0 && Ay() && (e = el);
    for (var t = Oe(), a = null, l = Nu; l !== null; ) {
      var i = l.next, u = _d(l, t);
      u === 0 ? (l.next = null, a === null ? Nu = i : a.next = i, i === null && (vn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (Eu = !0)), l = i;
    }
    it !== 0 && it !== 5 || fi(e), el !== 0 && (el = 0);
  }
  function _d(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - bt(u), r = 1 << c, g = i[c];
      g === -1 ? ((r & a) === 0 || (r & l) !== 0) && (i[c] = zn(r, t)) : g <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Xe, a = Ae, a = kl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ft(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ya(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && ft(l), fe(a)) {
        case 2:
        case 8:
          a = Ol;
          break;
        case 32:
          a = Ra;
          break;
        case 268435456:
          a = Cn;
          break;
        default:
          a = Ra;
      }
      return l = Td.bind(null, e), a = Wt(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && ft(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Td(e, t) {
    if (it !== 0 && it !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Su() && e.callbackNode !== a)
      return null;
    var l = Ae;
    return l = kl(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (sd(e, l, t), _d(e, Oe()), e.callbackNode != null && e.callbackNode === a ? Td.bind(null, e) : null);
  }
  function wd(e, t) {
    if (Su()) return null;
    sd(e, t, !0);
  }
  function by() {
    Dy(function() {
      (qe & 6) !== 0 ? Wt(
        wn,
        py
      ) : Ed();
    });
  }
  function Ac() {
    if (el === 0) {
      var e = tn;
      e === 0 && (e = ka, ka <<= 1, (ka & 261888) === 0 && (ka = 256)), el = e;
    }
    return el;
  }
  function Cd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Mi("" + e);
  }
  function Ad(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function xy(e, t, a, l, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var u = Cd(
        (i[Nt] || null).action
      ), c = l.submitter;
      c && (t = (t = c[Nt] || null) ? Cd(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var r = new ki(
        "action",
        "action",
        null,
        l,
        i
      );
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (el !== 0) {
                  var g = c ? Ad(i, c) : new FormData(i);
                  Js(
                    a,
                    {
                      pending: !0,
                      data: g,
                      method: i.method,
                      action: u
                    },
                    null,
                    g
                  );
                }
              } else
                typeof u == "function" && (r.preventDefault(), g = c ? Ad(i, c) : new FormData(i), Js(
                  a,
                  {
                    pending: !0,
                    data: g,
                    method: i.method,
                    action: u
                  },
                  u,
                  g
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var zc = 0; zc < ds.length; zc++) {
    var Dc = ds[zc], jy = Dc.toLowerCase(), Sy = Dc[0].toUpperCase() + Dc.slice(1);
    It(
      jy,
      "on" + Sy
    );
  }
  It(no, "onAnimationEnd"), It(io, "onAnimationIteration"), It(uo, "onAnimationStart"), It("dblclick", "onDoubleClick"), It("focusin", "onFocus"), It("focusout", "onBlur"), It(Bm, "onTransitionRun"), It(Hm, "onTransitionStart"), It(Lm, "onTransitionCancel"), It(so, "onTransitionEnd"), Yl("onMouseEnter", ["mouseout", "mouseover"]), Yl("onMouseLeave", ["mouseout", "mouseover"]), Yl("onPointerEnter", ["pointerout", "pointerover"]), Yl("onPointerLeave", ["pointerout", "pointerover"]), fl(
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
  var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ny = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di)
  );
  function zd(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], i = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = l.length - 1; 0 <= c; c--) {
            var r = l[c], g = r.instance, T = r.currentTarget;
            if (r = r.listener, g !== u && i.isPropagationStopped())
              break e;
            u = r, i.currentTarget = T;
            try {
              u(i);
            } catch (k) {
              Hi(k);
            }
            i.currentTarget = null, u = g;
          }
        else
          for (c = 0; c < l.length; c++) {
            if (r = l[c], g = r.instance, T = r.currentTarget, r = r.listener, g !== u && i.isPropagationStopped())
              break e;
            u = r, i.currentTarget = T;
            try {
              u(i);
            } catch (k) {
              Hi(k);
            }
            i.currentTarget = null, u = g;
          }
      }
    }
  }
  function Ce(e, t) {
    var a = t[Xu];
    a === void 0 && (a = t[Xu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Dd(t, e, 2, !1), a.add(l));
  }
  function Mc(e, t, a) {
    var l = 0;
    t && (l |= 4), Dd(
      a,
      e,
      l,
      t
    );
  }
  var _u = "_reactListening" + Math.random().toString(36).slice(2);
  function Oc(e) {
    if (!e[_u]) {
      e[_u] = !0, Sr.forEach(function(a) {
        a !== "selectionchange" && (Ny.has(a) || Mc(a, !1, e), Mc(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_u] || (t[_u] = !0, Mc("selectionchange", !1, t));
    }
  }
  function Dd(e, t, a, l) {
    switch (uh(t)) {
      case 2:
        var i = Wy;
        break;
      case 8:
        i = Iy;
        break;
      default:
        i = $c;
    }
    a = i.bind(
      null,
      t,
      a,
      e
    ), i = void 0, !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), l ? i !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, a, !0) : i !== void 0 ? e.addEventListener(t, a, {
      passive: i
    }) : e.addEventListener(t, a, !1);
  }
  function Uc(e, t, a, l, i) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var c = l.tag;
        if (c === 3 || c === 4) {
          var r = l.stateNode.containerInfo;
          if (r === i) break;
          if (c === 4)
            for (c = l.return; c !== null; ) {
              var g = c.tag;
              if ((g === 3 || g === 4) && c.stateNode.containerInfo === i)
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (c = Bl(r), c === null) return;
            if (g = c.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              l = u = c;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    Ur(function() {
      var T = u, k = Wu(a), B = [];
      e: {
        var A = co.get(e);
        if (A !== void 0) {
          var M = ki, ae = e;
          switch (e) {
            case "keypress":
              if (Ui(a) === 0) break e;
            case "keydown":
            case "keyup":
              M = gm;
              break;
            case "focusin":
              ae = "focus", M = ls;
              break;
            case "focusout":
              ae = "blur", M = ls;
              break;
            case "beforeblur":
            case "afterblur":
              M = ls;
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
              M = qr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = nm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = bm;
              break;
            case no:
            case io:
            case uo:
              M = sm;
              break;
            case so:
              M = jm;
              break;
            case "scroll":
            case "scrollend":
              M = am;
              break;
            case "wheel":
              M = Nm;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = rm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Hr;
              break;
            case "toggle":
            case "beforetoggle":
              M = _m;
          }
          var de = (t & 4) !== 0, Ve = !de && (e === "scroll" || e === "scrollend"), x = de ? A !== null ? A + "Capture" : null : A;
          de = [];
          for (var v = T, _; v !== null; ) {
            var q = v;
            if (_ = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || _ === null || x === null || (q = Un(v, x), q != null && de.push(
              hi(v, q, _)
            )), Ve) break;
            v = v.return;
          }
          0 < de.length && (A = new M(
            A,
            ae,
            null,
            a,
            k
          ), B.push({ event: A, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", A && a !== Fu && (ae = a.relatedTarget || a.fromElement) && (Bl(ae) || ae[ql]))
            break e;
          if ((M || A) && (A = k.window === k ? k : (A = k.ownerDocument) ? A.defaultView || A.parentWindow : window, M ? (ae = a.relatedTarget || a.toElement, M = T, ae = ae ? Bl(ae) : null, ae !== null && (Ve = b(ae), de = ae.tag, ae !== Ve || de !== 5 && de !== 27 && de !== 6) && (ae = null)) : (M = null, ae = T), M !== ae)) {
            if (de = qr, q = "onMouseLeave", x = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (de = Hr, q = "onPointerLeave", x = "onPointerEnter", v = "pointer"), Ve = M == null ? A : On(M), _ = ae == null ? A : On(ae), A = new de(
              q,
              v + "leave",
              M,
              a,
              k
            ), A.target = Ve, A.relatedTarget = _, q = null, Bl(k) === T && (de = new de(
              x,
              v + "enter",
              ae,
              a,
              k
            ), de.target = _, de.relatedTarget = Ve, q = de), Ve = q, M && ae)
              t: {
                for (de = Ey, x = M, v = ae, _ = 0, q = x; q; q = de(q))
                  _++;
                q = 0;
                for (var oe = v; oe; oe = de(oe))
                  q++;
                for (; 0 < _ - q; )
                  x = de(x), _--;
                for (; 0 < q - _; )
                  v = de(v), q--;
                for (; _--; ) {
                  if (x === v || v !== null && x === v.alternate) {
                    de = x;
                    break t;
                  }
                  x = de(x), v = de(v);
                }
                de = null;
              }
            else de = null;
            M !== null && Md(
              B,
              A,
              M,
              de,
              !1
            ), ae !== null && Ve !== null && Md(
              B,
              Ve,
              ae,
              de,
              !0
            );
          }
        }
        e: {
          if (A = T ? On(T) : window, M = A.nodeName && A.nodeName.toLowerCase(), M === "select" || M === "input" && A.type === "file")
            var Re = Kr;
          else if (Qr(A))
            if ($r)
              Re = Rm;
            else {
              Re = Om;
              var ue = Mm;
            }
          else
            M = A.nodeName, !M || M.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? T && Ju(T.elementType) && (Re = Kr) : Re = Um;
          if (Re && (Re = Re(e, T))) {
            Zr(
              B,
              Re,
              a,
              k
            );
            break e;
          }
          ue && ue(e, A, T), e === "focusout" && T && A.type === "number" && T.memoizedProps.value != null && $u(A, "number", A.value);
        }
        switch (ue = T ? On(T) : window, e) {
          case "focusin":
            (Qr(ue) || ue.contentEditable === "true") && (Kl = ue, rs = T, Vn = null);
            break;
          case "focusout":
            Vn = rs = Kl = null;
            break;
          case "mousedown":
            os = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            os = !1, ao(B, a, k);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            ao(B, a, k);
        }
        var Ne;
        if (is)
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
          Zl ? Gr(e, a) && (ze = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ze = "onCompositionStart");
        ze && (Lr && a.locale !== "ko" && (Zl || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Zl && (Ne = Rr()) : (Ba = k, es = "value" in Ba ? Ba.value : Ba.textContent, Zl = !0)), ue = Tu(T, ze), 0 < ue.length && (ze = new Br(
          ze,
          e,
          null,
          a,
          k
        ), B.push({ event: ze, listeners: ue }), Ne ? ze.data = Ne : (Ne = Xr(a), Ne !== null && (ze.data = Ne)))), (Ne = wm ? Cm(e, a) : Am(e, a)) && (ze = Tu(T, "onBeforeInput"), 0 < ze.length && (ue = new Br(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          k
        ), B.push({
          event: ue,
          listeners: ze
        }), ue.data = Ne)), xy(
          B,
          e,
          T,
          a,
          k
        );
      }
      zd(B, t);
    });
  }
  function hi(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Tu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Un(e, a), i != null && l.unshift(
        hi(e, i, u)
      ), i = Un(e, t), i != null && l.push(
        hi(e, i, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ey(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Md(e, t, a, l, i) {
    for (var u = t._reactName, c = []; a !== null && a !== l; ) {
      var r = a, g = r.alternate, T = r.stateNode;
      if (r = r.tag, g !== null && g === l) break;
      r !== 5 && r !== 26 && r !== 27 || T === null || (g = T, i ? (T = Un(a, u), T != null && c.unshift(
        hi(a, T, g)
      )) : i || (T = Un(a, u), T != null && c.push(
        hi(a, T, g)
      ))), a = a.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var _y = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
  function Od(e) {
    return (typeof e == "string" ? e : "" + e).replace(_y, `
`).replace(Ty, "");
  }
  function Ud(e, t) {
    return t = Od(t), Od(e) === t;
  }
  function Ye(e, t, a, l, i, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Gl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Gl(e, "" + l);
        break;
      case "className":
        zi(e, "class", l);
        break;
      case "tabIndex":
        zi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zi(e, a, l);
        break;
      case "style":
        Mr(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          zi(e, "data", l);
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
        l = Mi("" + l), e.setAttribute(a, l);
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
          typeof u == "function" && (a === "formAction" ? (t !== "input" && Ye(e, t, "name", i.name, i, null), Ye(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Ye(e, t, "encType", i.encType, i, null), Ye(e, t, "method", i.method, i, null), Ye(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Mi("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = va);
        break;
      case "onScroll":
        l != null && Ce("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ce("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(d(61));
          if (a = l.__html, a != null) {
            if (i.children != null) throw Error(d(60));
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
        a = Mi("" + l), e.setAttributeNS(
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
        Ce("beforetoggle", e), Ce("toggle", e), Ai(e, "popover", l);
        break;
      case "xlinkActuate":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ga(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ga(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ga(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ai(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = em.get(a) || a, Ai(e, a, l));
    }
  }
  function Rc(e, t, a, l, i, u) {
    switch (a) {
      case "style":
        Mr(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(d(61));
          if (a = l.__html, a != null) {
            if (i.children != null) throw Error(d(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Gl(e, l) : (typeof l == "number" || typeof l == "bigint") && Gl(e, "" + l);
        break;
      case "onScroll":
        l != null && Ce("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ce("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = va);
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
        if (!Nr.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (i = a.endsWith("Capture"), t = a.slice(2, i ? a.length - 7 : void 0), u = e[Nt] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, i);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Ai(e, a, l);
          }
    }
  }
  function gt(e, t, a) {
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
        Ce("error", e), Ce("load", e);
        var l = !1, i = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var c = a[u];
            if (c != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  Ye(e, t, u, c, a, null);
              }
          }
        i && Ye(e, t, "srcSet", a.srcSet, a, null), l && Ye(e, t, "src", a.src, a, null);
        return;
      case "input":
        Ce("invalid", e);
        var r = u = c = i = null, g = null, T = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var k = a[l];
            if (k != null)
              switch (l) {
                case "name":
                  i = k;
                  break;
                case "type":
                  c = k;
                  break;
                case "checked":
                  g = k;
                  break;
                case "defaultChecked":
                  T = k;
                  break;
                case "value":
                  u = k;
                  break;
                case "defaultValue":
                  r = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(d(137, t));
                  break;
                default:
                  Ye(e, t, l, k, a, null);
              }
          }
        Cr(
          e,
          u,
          r,
          g,
          T,
          c,
          i,
          !1
        );
        return;
      case "select":
        Ce("invalid", e), l = c = u = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (r = a[i], r != null))
            switch (i) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                l = r;
              default:
                Ye(e, t, i, r, a, null);
            }
        t = u, a = c, e.multiple = !!l, t != null ? Vl(e, !!l, t, !1) : a != null && Vl(e, !!l, a, !0);
        return;
      case "textarea":
        Ce("invalid", e), u = i = l = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (r = a[c], r != null))
            switch (c) {
              case "value":
                l = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(d(91));
                break;
              default:
                Ye(e, t, c, r, a, null);
            }
        zr(e, l, i, u);
        return;
      case "option":
        for (g in a)
          a.hasOwnProperty(g) && (l = a[g], l != null) && (g === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ye(e, t, g, l, a, null));
        return;
      case "dialog":
        Ce("beforetoggle", e), Ce("toggle", e), Ce("cancel", e), Ce("close", e);
        break;
      case "iframe":
      case "object":
        Ce("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < di.length; l++)
          Ce(di[l], e);
        break;
      case "image":
        Ce("error", e), Ce("load", e);
        break;
      case "details":
        Ce("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", e), Ce("load", e);
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
                throw Error(d(137, t));
              default:
                Ye(e, t, T, l, a, null);
            }
        return;
      default:
        if (Ju(t)) {
          for (k in a)
            a.hasOwnProperty(k) && (l = a[k], l !== void 0 && Rc(
              e,
              t,
              k,
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
  function wy(e, t, a, l) {
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
        var i = null, u = null, c = null, r = null, g = null, T = null, k = null;
        for (M in a) {
          var B = a[M];
          if (a.hasOwnProperty(M) && B != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = B;
              default:
                l.hasOwnProperty(M) || Ye(e, t, M, null, l, B);
            }
        }
        for (var A in l) {
          var M = l[A];
          if (B = a[A], l.hasOwnProperty(A) && (M != null || B != null))
            switch (A) {
              case "type":
                u = M;
                break;
              case "name":
                i = M;
                break;
              case "checked":
                T = M;
                break;
              case "defaultChecked":
                k = M;
                break;
              case "value":
                c = M;
                break;
              case "defaultValue":
                r = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(d(137, t));
                break;
              default:
                M !== B && Ye(
                  e,
                  t,
                  A,
                  M,
                  l,
                  B
                );
            }
        }
        Ku(
          e,
          c,
          r,
          g,
          T,
          k,
          u,
          i
        );
        return;
      case "select":
        M = c = r = A = null;
        for (u in a)
          if (g = a[u], a.hasOwnProperty(u) && g != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = g;
              default:
                l.hasOwnProperty(u) || Ye(
                  e,
                  t,
                  u,
                  null,
                  l,
                  g
                );
            }
        for (i in l)
          if (u = l[i], g = a[i], l.hasOwnProperty(i) && (u != null || g != null))
            switch (i) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== g && Ye(
                  e,
                  t,
                  i,
                  u,
                  l,
                  g
                );
            }
        t = r, a = c, l = M, A != null ? Vl(e, !!a, A, !1) : !!l != !!a && (t != null ? Vl(e, !!a, t, !0) : Vl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        M = A = null;
        for (r in a)
          if (i = a[r], a.hasOwnProperty(r) && i != null && !l.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, r, null, l, i);
            }
        for (c in l)
          if (i = l[c], u = a[c], l.hasOwnProperty(c) && (i != null || u != null))
            switch (c) {
              case "value":
                A = i;
                break;
              case "defaultValue":
                M = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(d(91));
                break;
              default:
                i !== u && Ye(e, t, c, i, l, u);
            }
        Ar(e, A, M);
        return;
      case "option":
        for (var ae in a)
          A = a[ae], a.hasOwnProperty(ae) && A != null && !l.hasOwnProperty(ae) && (ae === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            ae,
            null,
            l,
            A
          ));
        for (g in l)
          A = l[g], M = a[g], l.hasOwnProperty(g) && A !== M && (A != null || M != null) && (g === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Ye(
            e,
            t,
            g,
            A,
            l,
            M
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
        for (var de in a)
          A = a[de], a.hasOwnProperty(de) && A != null && !l.hasOwnProperty(de) && Ye(e, t, de, null, l, A);
        for (T in l)
          if (A = l[T], M = a[T], l.hasOwnProperty(T) && A !== M && (A != null || M != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(d(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  T,
                  A,
                  l,
                  M
                );
            }
        return;
      default:
        if (Ju(t)) {
          for (var Ve in a)
            A = a[Ve], a.hasOwnProperty(Ve) && A !== void 0 && !l.hasOwnProperty(Ve) && Rc(
              e,
              t,
              Ve,
              void 0,
              l,
              A
            );
          for (k in l)
            A = l[k], M = a[k], !l.hasOwnProperty(k) || A === M || A === void 0 && M === void 0 || Rc(
              e,
              t,
              k,
              A,
              l,
              M
            );
          return;
        }
    }
    for (var x in a)
      A = a[x], a.hasOwnProperty(x) && A != null && !l.hasOwnProperty(x) && Ye(e, t, x, null, l, A);
    for (B in l)
      A = l[B], M = a[B], !l.hasOwnProperty(B) || A === M || A == null && M == null || Ye(e, t, B, A, l, M);
  }
  function Rd(e) {
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
  function Cy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var i = a[l], u = i.transferSize, c = i.initiatorType, r = i.duration;
        if (u && r && Rd(c)) {
          for (c = 0, r = i.responseEnd, l += 1; l < a.length; l++) {
            var g = a[l], T = g.startTime;
            if (T > r) break;
            var k = g.transferSize, B = g.initiatorType;
            k && Rd(B) && (g = g.responseEnd, c += k * (g < r ? 1 : (r - T) / (g - T)));
          }
          if (--l, t += 8 * (u + c) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var kc = null, qc = null;
  function wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function kd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qd(e, t) {
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
  function Bc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Hc = null;
  function Ay() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Hc ? !1 : (Hc = e, !0) : (Hc = null, !1);
  }
  var Bd = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, Hd = typeof Promise == "function" ? Promise : void 0, Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(e) {
    return Hd.resolve(null).then(e).catch(My);
  } : Bd;
  function My(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function tl(e) {
    return e === "head";
  }
  function Ld(e, t) {
    var a = t, l = 0;
    do {
      var i = a.nextSibling;
      if (e.removeChild(a), i && i.nodeType === 8)
        if (a = i.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(i), jn(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          mi(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, mi(a);
          for (var u = a.firstChild; u; ) {
            var c = u.nextSibling, r = u.nodeName;
            u[Mn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = c;
          }
        } else
          a === "body" && mi(e.ownerDocument.body);
      a = i;
    } while (a);
    jn(t);
  }
  function Yd(e, t) {
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
  function Lc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lc(a), Qu(a);
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
  function Oy(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Mn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Uy(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Yc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ry(e, t) {
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
  var Gc = null;
  function Gd(e) {
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
  function Xd(e) {
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
  function Qd(e, t, a) {
    switch (t = wu(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(d(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(d(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(d(454));
        return e;
      default:
        throw Error(d(451));
    }
  }
  function mi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Qu(e);
  }
  var Ft = /* @__PURE__ */ new Map(), Zd = /* @__PURE__ */ new Set();
  function Cu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Oa = C.d;
  C.d = {
    f: ky,
    r: qy,
    D: By,
    C: Hy,
    L: Ly,
    m: Yy,
    X: Gy,
    S: Vy,
    M: Xy
  };
  function ky() {
    var e = Oa.f(), t = bu();
    return e || t;
  }
  function qy(e) {
    var t = Hl(e);
    t !== null && t.tag === 5 && t.type === "form" ? rf(t) : Oa.r(e);
  }
  var pn = typeof document > "u" ? null : document;
  function Kd(e, t, a) {
    var l = pn;
    if (l && typeof t == "string" && t) {
      var i = Vt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof a == "string" && (i += '[crossorigin="' + a + '"]'), Zd.has(i) || (Zd.add(i), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(i) === null && (t = l.createElement("link"), gt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function By(e) {
    Oa.D(e), Kd("dns-prefetch", e, null);
  }
  function Hy(e, t) {
    Oa.C(e, t), Kd("preconnect", e, t);
  }
  function Ly(e, t, a) {
    Oa.L(e, t, a);
    var l = pn;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + Vt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (i += '[imagesrcset="' + Vt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (i += '[imagesizes="' + Vt(
        a.imageSizes
      ) + '"]')) : i += '[href="' + Vt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = bn(e);
          break;
        case "script":
          u = xn(e);
      }
      Ft.has(u) || (e = D(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Ft.set(u, e), l.querySelector(i) !== null || t === "style" && l.querySelector(yi(u)) || t === "script" && l.querySelector(gi(u)) || (t = l.createElement("link"), gt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function Yy(e, t) {
    Oa.m(e, t);
    var a = pn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Vt(l) + '"][href="' + Vt(e) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = xn(e);
      }
      if (!Ft.has(u) && (e = D({ rel: "modulepreload", href: e }, t), Ft.set(u, e), a.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(gi(u)))
              return;
        }
        l = a.createElement("link"), gt(l, "link", e), ct(l), a.head.appendChild(l);
      }
    }
  }
  function Vy(e, t, a) {
    Oa.S(e, t, a);
    var l = pn;
    if (l && e) {
      var i = Ll(l).hoistableStyles, u = bn(e);
      t = t || "default";
      var c = i.get(u);
      if (!c) {
        var r = { loading: 0, preload: null };
        if (c = l.querySelector(
          yi(u)
        ))
          r.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Ft.get(u)) && Xc(e, a);
          var g = c = l.createElement("link");
          ct(g), gt(g, "link", e), g._p = new Promise(function(T, k) {
            g.onload = T, g.onerror = k;
          }), g.addEventListener("load", function() {
            r.loading |= 1;
          }), g.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Au(c, t, l);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: r
        }, i.set(u, c);
      }
    }
  }
  function Gy(e, t) {
    Oa.X(e, t);
    var a = pn;
    if (a && e) {
      var l = Ll(a).hoistableScripts, i = xn(e), u = l.get(i);
      u || (u = a.querySelector(gi(i)), u || (e = D({ src: e, async: !0 }, t), (t = Ft.get(i)) && Qc(e, t), u = a.createElement("script"), ct(u), gt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function Xy(e, t) {
    Oa.M(e, t);
    var a = pn;
    if (a && e) {
      var l = Ll(a).hoistableScripts, i = xn(e), u = l.get(i);
      u || (u = a.querySelector(gi(i)), u || (e = D({ src: e, async: !0, type: "module" }, t), (t = Ft.get(i)) && Qc(e, t), u = a.createElement("script"), ct(u), gt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function $d(e, t, a, l) {
    var i = (i = ye.current) ? Cu(i) : null;
    if (!i) throw Error(d(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = bn(a.href), a = Ll(
          i
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = bn(a.href);
          var u = Ll(
            i
          ).hoistableStyles, c = u.get(e);
          if (c || (i = i.ownerDocument || i, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = i.querySelector(
            yi(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Ft.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ft.set(e, a), u || Qy(
            i,
            e,
            a,
            c.state
          ))), t && l === null)
            throw Error(d(528, ""));
          return c;
        }
        if (t && l !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xn(a), a = Ll(
          i
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, e));
    }
  }
  function bn(e) {
    return 'href="' + Vt(e) + '"';
  }
  function yi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Jd(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Qy(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), gt(t, "link", a), ct(t), e.head.appendChild(t));
  }
  function xn(e) {
    return '[src="' + Vt(e) + '"]';
  }
  function gi(e) {
    return "script[async]" + e;
  }
  function Fd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Vt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, ct(l), l;
          var i = D({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ct(l), gt(l, "style", i), Au(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          i = bn(a.href);
          var u = e.querySelector(
            yi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ct(u), u;
          l = Jd(a), (i = Ft.get(i)) && Xc(l, i), u = (e.ownerDocument || e).createElement("link"), ct(u);
          var c = u;
          return c._p = new Promise(function(r, g) {
            c.onload = r, c.onerror = g;
          }), gt(u, "link", l), t.state.loading |= 4, Au(u, a.precedence, e), t.instance = u;
        case "script":
          return u = xn(a.src), (i = e.querySelector(
            gi(u)
          )) ? (t.instance = i, ct(i), i) : (l = a, (i = Ft.get(u)) && (l = D({}, a), Qc(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), ct(i), gt(i, "link", l), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Au(l, a.precedence, e));
    return t.instance;
  }
  function Au(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = l.length ? l[l.length - 1] : null, u = i, c = 0; c < l.length; c++) {
      var r = l[c];
      if (r.dataset.precedence === t) u = r;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Xc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Qc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var zu = null;
  function Wd(e, t, a) {
    if (zu === null) {
      var l = /* @__PURE__ */ new Map(), i = zu = /* @__PURE__ */ new Map();
      i.set(a, l);
    } else
      i = zu, l = i.get(a), l || (l = /* @__PURE__ */ new Map(), i.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), i = 0; i < a.length; i++) {
      var u = a[i];
      if (!(u[Mn] || u[dt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var r = l.get(c);
        r ? r.push(u) : l.set(c, [u]);
      }
    }
    return l;
  }
  function Id(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Zy(e, t, a) {
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
  function Pd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Ky(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var i = bn(l.href), u = t.querySelector(
          yi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Du.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, ct(u);
          return;
        }
        u = t.ownerDocument || t, l = Jd(l), (i = Ft.get(i)) && Xc(l, i), u = u.createElement("link"), ct(u);
        var c = u;
        c._p = new Promise(function(r, g) {
          c.onload = r, c.onerror = g;
        }), gt(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Du.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Zc = 0;
  function $y(e, t) {
    return e.stylesheets && e.count === 0 && Ou(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ou(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Zc === 0 && (Zc = 62500 * Cy());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ou(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Zc ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(i);
      };
    } : null;
  }
  function Du() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ou(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Mu = null;
  function Ou(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Mu = /* @__PURE__ */ new Map(), t.forEach(Jy, e), Mu = null, Du.call(e));
  }
  function Jy(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Mu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Mu.set(e, a);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var c = i[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), l = c);
        }
        l && a.set(null, l);
      }
      i = t.instance, c = i.getAttribute("data-precedence"), u = a.get(c) || l, u === l && a.set(null, i), a.set(c, i), this.count++, l = Du.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var vi = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function Fy(e, t, a, l, i, u, c, r, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dn(0), this.hiddenUpdates = Dn(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function eh(e, t, a, l, i, u, c, r, g, T, k, B) {
    return e = new Fy(
      e,
      t,
      a,
      c,
      g,
      T,
      k,
      B,
      r
    ), t = 1, u === !0 && (t |= 24), u = Ot(3, null, null, t), e.current = u, u.stateNode = e, t = _s(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, As(u), e;
  }
  function th(e) {
    return e ? (e = Fl, e) : Fl;
  }
  function ah(e, t, a, l, i, u) {
    i = th(i), l.context === null ? l.context = i : l.pendingContext = i, l = Xa(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Qa(e, l, t), a !== null && (At(a, e, t), Jn(a, e, t));
  }
  function lh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Kc(e, t) {
    lh(e, t), (e = e.alternate) && lh(e, t);
  }
  function nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = yl(e, 67108864);
      t !== null && At(t, e, 67108864), Kc(e, 67108864);
    }
  }
  function ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bt();
      t = Ue(t);
      var a = yl(e, t);
      a !== null && At(a, e, t), Kc(e, t);
    }
  }
  var Uu = !0;
  function Wy(e, t, a, l) {
    var i = o.T;
    o.T = null;
    var u = C.p;
    try {
      C.p = 2, $c(e, t, a, l);
    } finally {
      C.p = u, o.T = i;
    }
  }
  function Iy(e, t, a, l) {
    var i = o.T;
    o.T = null;
    var u = C.p;
    try {
      C.p = 8, $c(e, t, a, l);
    } finally {
      C.p = u, o.T = i;
    }
  }
  function $c(e, t, a, l) {
    if (Uu) {
      var i = Jc(l);
      if (i === null)
        Uc(
          e,
          t,
          l,
          Ru,
          a
        ), sh(e, l);
      else if (eg(
        i,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (sh(e, l), t & 4 && -1 < Py.indexOf(e)) {
        for (; i !== null; ) {
          var u = Hl(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = ma(u.pendingLanes);
                  if (c !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var g = 1 << 31 - bt(c);
                      r.entanglements[1] |= g, c &= ~g;
                    }
                    fa(u), (qe & 6) === 0 && (vu = Oe() + 500, fi(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = yl(u, 2), r !== null && At(r, u, 2), bu(), Kc(u, 2);
            }
          if (u = Jc(l), u === null && Uc(
            e,
            t,
            l,
            Ru,
            a
          ), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else
        Uc(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Jc(e) {
    return e = Wu(e), Fc(e);
  }
  var Ru = null;
  function Fc(e) {
    if (Ru = null, e = Bl(e), e !== null) {
      var t = b(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = S(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = O(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ru = e, null;
  }
  function uh(e) {
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
        switch (rl()) {
          case wn:
            return 2;
          case Ol:
            return 8;
          case Ra:
          case wi:
            return 32;
          case Cn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1, al = null, ll = null, nl = null, pi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), il = [], Py = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        al = null;
        break;
      case "dragenter":
      case "dragleave":
        ll = null;
        break;
      case "mouseover":
      case "mouseout":
        nl = null;
        break;
      case "pointerover":
      case "pointerout":
        pi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bi.delete(t.pointerId);
    }
  }
  function xi(e, t, a, l, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Hl(t), t !== null && nh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function eg(e, t, a, l, i) {
    switch (t) {
      case "focusin":
        return al = xi(
          al,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "dragenter":
        return ll = xi(
          ll,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "mouseover":
        return nl = xi(
          nl,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return pi.set(
          u,
          xi(
            pi.get(u) || null,
            e,
            t,
            a,
            l,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, bi.set(
          u,
          xi(
            bi.get(u) || null,
            e,
            t,
            a,
            l,
            i
          )
        ), !0;
    }
    return !1;
  }
  function ch(e) {
    var t = Bl(e.target);
    if (t !== null) {
      var a = b(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = S(a), t !== null) {
            e.blockedOn = t, sa(e.priority, function() {
              ih(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = O(a), t !== null) {
            e.blockedOn = t, sa(e.priority, function() {
              ih(a);
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
  function ku(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Jc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Fu = l, a.target.dispatchEvent(l), Fu = null;
      } else
        return t = Hl(a), t !== null && nh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function rh(e, t, a) {
    ku(e) && a.delete(t);
  }
  function tg() {
    Wc = !1, al !== null && ku(al) && (al = null), ll !== null && ku(ll) && (ll = null), nl !== null && ku(nl) && (nl = null), pi.forEach(rh), bi.forEach(rh);
  }
  function qu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Wc || (Wc = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      tg
    )));
  }
  var Bu = null;
  function oh(e) {
    Bu !== e && (Bu = e, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        Bu === e && (Bu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], i = e[t + 2];
          if (typeof l != "function") {
            if (Fc(l || a) === null)
              continue;
            break;
          }
          var u = Hl(a);
          u !== null && (e.splice(t, 3), t -= 3, Js(
            u,
            {
              pending: !0,
              data: i,
              method: a.method,
              action: l
            },
            l,
            i
          ));
        }
      }
    ));
  }
  function jn(e) {
    function t(g) {
      return qu(g, e);
    }
    al !== null && qu(al, e), ll !== null && qu(ll, e), nl !== null && qu(nl, e), pi.forEach(t), bi.forEach(t);
    for (var a = 0; a < il.length; a++) {
      var l = il[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < il.length && (a = il[0], a.blockedOn === null); )
      ch(a), a.blockedOn === null && il.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var i = a[l], u = a[l + 1], c = i[Nt] || null;
        if (typeof u == "function")
          c || oh(a);
        else if (c) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, c = u[Nt] || null)
              r = c.formAction;
            else if (Fc(i) !== null) continue;
          } else r = c.action;
          typeof r == "function" ? a[l + 1] = r : (a.splice(l, 3), l -= 3), oh(a);
        }
      }
  }
  function fh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return i = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      i !== null && (i(), i = null), l || setTimeout(a, 20);
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
      var l = !1, i = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
      };
    }
  }
  function Ic(e) {
    this._internalRoot = e;
  }
  Hu.prototype.render = Ic.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    var a = t.current, l = Bt();
    ah(a, l, e, t, null, null);
  }, Hu.prototype.unmount = Ic.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ah(e.current, 2, null, e, null, null), bu(), t[ql] = null;
    }
  };
  function Hu(e) {
    this._internalRoot = e;
  }
  Hu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = St();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < il.length && t !== 0 && t < il[a].priority; a++) ;
      il.splice(a, 0, e), a === 0 && ch(e);
    }
  };
  var dh = f.version;
  if (dh !== "19.2.8")
    throw Error(
      d(
        527,
        dh,
        "19.2.8"
      )
    );
  C.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = p(t), e = e !== null ? w(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var ag = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: o,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lu.isDisabled && Lu.supportsFiber)
      try {
        da = Lu.inject(
          ag
        ), st = Lu;
      } catch {
      }
  }
  return Si.createRoot = function(e, t) {
    if (!E(e)) throw Error(d(299));
    var a = !1, l = "", i = bf, u = xf, c = jf;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = eh(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      i,
      u,
      c,
      fh
    ), e[ql] = t.current, Oc(e), new Ic(t);
  }, Si.hydrateRoot = function(e, t, a) {
    if (!E(e)) throw Error(d(299));
    var l = !1, i = "", u = bf, c = xf, r = jf, g = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (i = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (r = a.onRecoverableError), a.formState !== void 0 && (g = a.formState)), t = eh(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      i,
      g,
      u,
      c,
      r,
      fh
    ), t.context = th(null), a = t.current, l = Bt(), l = Ue(l), i = Xa(l), i.callback = null, Qa(a, i, l), a = l, t.current.lanes = a, U(t, a), fa(t), e[ql] = t.current, Oc(e), new Hu(t);
  }, Si.version = "19.2.8", Si;
}
var Sh;
function dg() {
  if (Sh) return tr.exports;
  Sh = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
  }
  return s(), tr.exports = fg(), tr.exports;
}
var hg = dg();
const sr = "hana.plugin.ui", cr = 1, mg = "X-Hana-Plugin-Surface-Session", yg = "pluginSurfaceSession", Oh = {
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
}, gg = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function Nh(s) {
  return typeof s == "object" && s !== null;
}
function sl(s) {
  return {
    ok: !1,
    error: {
      code: Oh.BAD_MESSAGE,
      message: s
    }
  };
}
function Eh(s) {
  if (!Nh(s))
    return sl("Plugin UI messages must be objects.");
  if (s.protocol !== sr)
    return sl("Plugin UI message protocol is missing or invalid.");
  if (s.version !== cr)
    return {
      ok: !1,
      error: {
        code: Oh.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(s.version)}.`
      }
    };
  if (typeof s.kind != "string" || !gg.has(s.kind))
    return sl("Plugin UI message kind is missing or invalid.");
  if (typeof s.type != "string" || s.type.trim() === "")
    return sl("Plugin UI message type must be a non-empty string.");
  const f = s.kind;
  if (f !== "event" && (typeof s.id != "string" || s.id.trim() === ""))
    return sl(`Plugin UI ${f} messages must include a non-empty id.`);
  if (f === "error") {
    if (!Nh(s.error))
      return sl("Plugin UI error messages must include an error object.");
    if (typeof s.error.code != "string" || s.error.code.trim() === "")
      return sl("Plugin UI error code must be a non-empty string.");
    if (typeof s.error.message != "string" || s.error.message.trim() === "")
      return sl("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: s
  };
}
class _h extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(f) {
    super(f.message), this.code = f.code, this.details = f.details;
  }
}
let Th = 0;
function vg() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Th += 1, `hana-plugin-${Date.now()}-${Th}`);
}
function pg() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function bg(s) {
  if (!s)
    return null;
  try {
    return new URL(s).origin;
  } catch {
    return null;
  }
}
function xg(s, f) {
  if (f)
    return f;
  const h = new URLSearchParams(s.location.search).get("hana-host-origin");
  return h || (bg(s.document.referrer) ?? "*");
}
function jg(s) {
  const f = new URLSearchParams(s.location.search);
  return {
    theme: f.get("hana-theme") ?? void 0,
    cssUrl: f.get("hana-css") ?? void 0
  };
}
function wh(s, f, h) {
  return !(s.source !== f || h !== "*" && s.origin !== h);
}
function Sg(s) {
  return typeof s == "string" ? { url: s } : s;
}
function Ng(s) {
  return typeof s == "string" ? { text: s } : s;
}
function Uh(s) {
  const f = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(s.location.pathname || "");
  if (!f)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(f[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function Eg(s) {
  if (typeof s != "string" || s.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (s.includes("\\") || s.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(s))
    throw new Error("Invalid plugin asset path.");
  const f = s.replace(/^\/+/, "");
  if (!f || f.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const h = f.split("/");
  if (h.some((d) => !d || d === "." || d === ".." || d.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return h.map((d) => encodeURIComponent(d)).join("/");
}
function _g(s, f) {
  const h = Uh(s), d = Eg(f);
  return `${s.location.origin}/api/plugins/${encodeURIComponent(h)}/assets/${d}`;
}
function Tg(s) {
  return new URLSearchParams(s.location.search).get(yg) || null;
}
function wg(s) {
  if (typeof s != "string" || s.length === 0)
    throw new Error("Invalid plugin API path.");
  const f = s.trim();
  if (!f || f.includes("\\") || f.includes("\0") || f.includes("#") || f.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(f))
    throw new Error("Invalid plugin API path.");
  const h = f.replace(/^\/+/, "");
  if (!h || h.startsWith("./") || h === "api/plugins" || h.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const d = h.indexOf("?"), E = d >= 0 ? h.slice(0, d) : h;
  if (!E)
    throw new Error("Invalid plugin API path.");
  const b = E.split("/");
  for (const j of b) {
    if (!j)
      throw new Error("Invalid plugin API path.");
    let p;
    try {
      p = decodeURIComponent(j);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (p === "." || p === ".." || p.includes("/") || p.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const S = new URL(`http://hana.local/${h}`);
  return `${b.map((j) => encodeURIComponent(decodeURIComponent(j))).join("/")}${S.search}`;
}
function Rh(s, f) {
  const h = Uh(s), d = wg(f);
  return `${s.location.origin}/api/plugins/${encodeURIComponent(h)}/${d}`;
}
function Cg(s, f, h) {
  const d = Tg(s);
  if (!d)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const E = s.fetch?.bind(s) ?? globalThis.fetch?.bind(globalThis);
  if (!E)
    throw new Error("hana.api.fetch requires window.fetch.");
  const b = h ?? {}, S = new Headers(b.headers);
  return S.set(mg, d), E(Rh(s, f), {
    ...b,
    headers: S
  });
}
function Ag(s = {}) {
  const f = s.targetWindow ?? pg(), h = s.parentWindow ?? f.parent, d = xg(f, s.targetOrigin), E = s.requestTimeoutMs ?? 1e4, b = s.idFactory ?? vg;
  let S = jg(f);
  const O = /* @__PURE__ */ new Set();
  function j(N) {
    h.postMessage(N, d);
  }
  function p(N, L) {
    const V = {
      protocol: sr,
      version: cr,
      kind: "event",
      type: N
    };
    L !== void 0 && (V.payload = L), j(V);
  }
  function w(N) {
    if (!wh(N, h, d))
      return;
    const L = Eh(N.data);
    if (!L.ok)
      return;
    const V = L.value;
    if (V.kind !== "event" || V.type !== "hana.theme.changed" || typeof V.payload != "object" || V.payload === null)
      return;
    const ce = V.payload;
    S = {
      theme: typeof ce.theme == "string" ? ce.theme : S.theme,
      cssUrl: typeof ce.cssUrl == "string" ? ce.cssUrl : S.cssUrl
    };
    for (const I of O)
      I(S);
  }
  function D(N, L, V = {}) {
    const ce = b(), I = V.timeoutMs ?? E;
    return new Promise((ee, je) => {
      const $ = () => {
        f.removeEventListener("message", ie), f.clearTimeout(be);
      }, ie = (J) => {
        if (!wh(J, h, d))
          return;
        const H = Eh(J.data);
        if (!H.ok)
          return;
        const Q = H.value;
        Q.id !== ce || Q.type !== N || (Q.kind === "response" && ($(), ee(Q.payload)), Q.kind === "error" && Q.error && ($(), je(new _h(Q.error))));
      }, be = f.setTimeout(() => {
        $(), je(new _h({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${N}.`
        }));
      }, I);
      f.addEventListener("message", ie);
      const me = {
        protocol: sr,
        version: cr,
        id: ce,
        kind: "request",
        type: N
      };
      L !== void 0 && (me.payload = L), j(me);
    });
  }
  return {
    ready(N) {
      p("hana.ready", N);
    },
    assets: {
      url(N) {
        return _g(f, N);
      }
    },
    api: {
      url(N) {
        return Rh(f, N);
      },
      fetch(N, L) {
        return Cg(f, N, L);
      }
    },
    ui: {
      resize(N) {
        p(Cl.UI_RESIZE, N);
      }
    },
    theme: {
      getSnapshot() {
        return { ...S };
      },
      subscribe(N) {
        return O.size === 0 && f.addEventListener("message", w), O.add(N), N({ ...S }), () => {
          O.delete(N), O.size === 0 && f.removeEventListener("message", w);
        };
      }
    },
    host: {
      request: D
    },
    toast: {
      show(N, L) {
        return D(Cl.TOAST_SHOW, N, L);
      }
    },
    external: {
      open(N, L) {
        return D(Cl.EXTERNAL_OPEN, Sg(N), L);
      }
    },
    clipboard: {
      writeText(N, L) {
        return D(Cl.CLIPBOARD_WRITE_TEXT, Ng(N), L);
      }
    },
    resources: {
      open(N, L) {
        return D(Cl.RESOURCE_OPEN, N, L);
      },
      pick(N = {}, L) {
        return D(Cl.RESOURCE_PICK, N, L);
      },
      requestAccess(N, L) {
        return D(Cl.RESOURCE_REQUEST_ACCESS, N, L);
      }
    }
  };
}
let Ch = null;
function zt() {
  return Ch ??= Ag(), Ch;
}
const yr = {
  ready(s) {
    return zt().ready(s);
  },
  assets: {
    url(s) {
      return zt().assets.url(s);
    }
  },
  api: {
    url(s) {
      return zt().api.url(s);
    },
    fetch(s, f) {
      return zt().api.fetch(s, f);
    }
  },
  ui: {
    resize(s) {
      return zt().ui.resize(s);
    }
  },
  theme: {
    getSnapshot() {
      return zt().theme.getSnapshot();
    },
    subscribe(s) {
      return zt().theme.subscribe(s);
    }
  },
  host: {
    request(s, f, h) {
      return zt().host.request(s, f, h);
    }
  },
  toast: {
    show(s, f) {
      return zt().toast.show(s, f);
    }
  },
  external: {
    open(s, f) {
      return zt().external.open(s, f);
    }
  },
  clipboard: {
    writeText(s, f) {
      return zt().clipboard.writeText(s, f);
    }
  },
  resources: {
    open(s, f) {
      return zt().resources.open(s, f);
    },
    pick(s, f) {
      return zt().resources.pick(s, f);
    },
    requestAccess(s, f) {
      return zt().resources.requestAccess(s, f);
    }
  }
};
function cl(...s) {
  return s.filter(Boolean).join(" ");
}
const Ah = {
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
}, zg = {
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
function Dg({ mode: s = "inherit", theme: f, className: h, style: d, children: E, "data-testid": b = "hana-plugin-theme", ...S }) {
  const O = typeof f == "string" ? f : void 0, j = Mg(s, f);
  return n.jsx("div", { ...S, "data-testid": b, className: cl("hana-plugin-theme", h), "data-hana-theme-mode": s, "data-hana-theme": s === "hana" ? O : void 0, style: { ...j, ...d }, children: E });
}
function Mg(s, f) {
  if (s === "inherit")
    return {};
  const h = Og(s, f), d = {};
  for (const [E, b] of Object.entries(zg)) {
    const S = h?.[E];
    S && (d[b] = S);
  }
  return d;
}
function Og(s, f) {
  if (typeof f == "string")
    return Ah[f];
  if (f)
    return f;
  if (s === "hana")
    return Ah["warm-paper"];
}
z.forwardRef(function({ variant: f = "secondary", size: h = "md", loading: d = !1, iconLeft: E, iconRight: b, disabled: S, className: O, children: j, type: p = "button", ...w }, D) {
  return n.jsxs("button", { ...w, ref: D, type: p, disabled: S || d, className: cl("hana-plugin-button", `hana-plugin-button-${f}`, `hana-plugin-button-${h}`, d && "hana-plugin-button-loading", O), children: [d ? n.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : E, j && n.jsx("span", { className: "hana-plugin-button-label", children: j }), !d && b] });
});
z.forwardRef(function({ label: f, size: h = "md", variant: d = "ghost", className: E, children: b, type: S = "button", ...O }, j) {
  return n.jsx("button", { ...O, ref: j, type: S, "aria-label": f, title: O.title || f, className: cl("hana-plugin-icon-button", `hana-plugin-icon-button-${h}`, `hana-plugin-icon-button-${d}`, E), children: b });
});
z.forwardRef(function({ label: f, hint: h, error: d, id: E, className: b, inputClassName: S, ...O }, j) {
  const p = z.useId(), w = E || p;
  return n.jsx(kh, { label: f, hint: h, error: d, htmlFor: w, className: b, children: n.jsx("input", { ...O, ref: j, id: w, "aria-invalid": !!d, className: cl("hana-plugin-input", S) }) });
});
z.forwardRef(function({ label: f, hint: h, error: d, id: E, className: b, textareaClassName: S, rows: O = 4, ...j }, p) {
  const w = z.useId(), D = E || w;
  return n.jsx(kh, { label: f, hint: h, error: d, htmlFor: D, className: b, children: n.jsx("textarea", { ...j, ref: p, id: D, rows: O, "aria-invalid": !!d, className: cl("hana-plugin-textarea", S) }) });
});
z.forwardRef(function({ checked: f, onChange: h, label: d, disabled: E, className: b, onClick: S, type: O = "button", ...j }, p) {
  const w = typeof d == "string" ? d : j["aria-label"];
  return n.jsxs("span", { className: cl("hana-plugin-switch-wrap", b), children: [n.jsx("button", { ...j, ref: p, type: O, role: "switch", "aria-checked": f, "aria-label": w, disabled: E, className: cl("hana-plugin-switch", f && "hana-plugin-switch-on"), onClick: (D) => {
    S?.(D), !D.defaultPrevented && !E && h?.(!f);
  }, children: n.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), d && n.jsx("span", { className: "hana-plugin-switch-label", children: d })] });
});
function kh({ label: s, hint: f, error: h, htmlFor: d, className: E, children: b }) {
  return n.jsxs("div", { className: cl("hana-plugin-field", E), children: [s && n.jsx("label", { className: "hana-plugin-field-label", htmlFor: d, children: s }), f && n.jsx("div", { className: "hana-plugin-field-hint", children: f }), b, h && n.jsx("div", { className: "hana-plugin-field-error", children: h })] });
}
const qh = /^\d{4}-\d{2}-\d{2}$/;
function Al(s, f) {
  if (!qh.test(s)) return s;
  const h = /* @__PURE__ */ new Date(`${s}T12:00:00Z`);
  return h.setUTCDate(h.getUTCDate() + f), h.toISOString().slice(0, 10);
}
function gr(s) {
  const f = String(s || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: f[0] || "",
    end: f[1] || f[0] || ""
  };
}
function rr(s) {
  const f = (/* @__PURE__ */ new Date(`${s}T12:00:00Z`)).getUTCDay();
  return f === 0 ? 6 : f - 1;
}
function Bh(s, f) {
  return Array.from({ length: f }, (h, d) => Al(s, d));
}
function or(s, f) {
  const d = gr(s).start || f, E = Al(d, -rr(d));
  return Bh(E, 7);
}
function Hh(s, f, h = 3) {
  const d = Math.max(1, Math.floor(h)), E = Math.max(0, Math.floor(f)), b = s.slice(E * d, E * d + d);
  return [...b, ...Array(Math.max(0, d - b.length)).fill(null)];
}
function Ug(s, f) {
  const d = gr(s).start || f, E = qh.test(d) ? `${d.slice(0, 7)}-01` : f, b = /* @__PURE__ */ new Date(`${E}T12:00:00Z`);
  b.setUTCMonth(b.getUTCMonth() + 1, 1);
  const S = new Date(b);
  S.setUTCDate(S.getUTCDate() - 1);
  const O = S.toISOString().slice(0, 10), j = Al(E, -rr(E)), p = 6 - rr(O), w = Al(O, p), D = Math.round(((/* @__PURE__ */ new Date(`${w}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${j}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Bh(j, D);
}
function Ei(s) {
  return (s.start_at || s.deadline_at || s.window_start || "").slice(0, 10);
}
function Ni(s) {
  if (!s || s.length < 16) return null;
  const f = Number(s.slice(11, 13)), h = Number(s.slice(14, 16));
  return !Number.isFinite(f) || !Number.isFinite(h) ? null : f * 60 + h;
}
function Lh(s) {
  const f = s.map((b) => Ni(b.start_at || b.deadline_at)).filter((b) => b !== null), h = s.map((b) => {
    const S = Ni(b.end_at);
    if (S !== null) return S;
    const O = Ni(b.start_at || b.deadline_at);
    return O === null ? null : O + Number(b.duration || b.estimated_minutes || 45);
  }).filter((b) => b !== null), d = f.length ? Math.floor(Math.min(...f) / 60) - 1 : 10, E = h.length ? Math.ceil(Math.max(...h) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, d)),
    endHour: Math.min(24, Math.max(22, E))
  };
}
function Yh(s, f, h, d = 56) {
  const E = Ni(s.start_at || s.deadline_at);
  if (E === null) return null;
  const S = Ni(s.end_at) ?? E + Number(s.duration || s.estimated_minutes || 45), O = Math.max(f * 60, E), j = Math.min(h * 60, Math.max(S, O + 30));
  return {
    top: (O - f * 60) / 60 * d,
    height: Math.max(30, (j - O) / 60 * d)
  };
}
function vr(s) {
  const f = s.map((b) => {
    const S = b.start_at || b.deadline_at, O = S ? new Date(S).getTime() : Number.NaN, j = b.end_at ? new Date(b.end_at).getTime() : Number.NaN, p = Number.isFinite(j) ? j : O + Number(b.duration || b.estimated_minutes || 45) * 6e4;
    return { item: b, start: O, end: p };
  }).filter((b) => Number.isFinite(b.start)).sort((b, S) => b.start - S.start || b.end - S.end), h = [], d = f.map((b) => {
    let S = h.findIndex((O) => O <= b.start);
    return S < 0 && (S = h.length), h[S] = b.end, { ...b, lane: S };
  }), E = Math.max(1, h.length);
  return d.map((b) => ({ ...b, laneCount: E }));
}
function Rg(s, f) {
  return s && typeof s == "object" && "error" in s && typeof s.error == "string" && s.error.trim() ? s.error.trim() : f;
}
async function kg(s) {
  const f = await s.text();
  let h = null;
  if (f.trim())
    try {
      h = JSON.parse(f);
    } catch {
      throw new Error(s.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${s.status}）`);
    }
  if (!s.ok)
    throw new Error(Rg(h, `请求失败（HTTP ${s.status}）`));
  if (!h || typeof h != "object")
    throw new Error("插件接口没有返回有效数据");
  return h;
}
async function Qe(s, f) {
  let h;
  try {
    h = await yr.api.fetch(s, f);
  } catch (d) {
    const E = d instanceof Error ? d.message : String(d || "未知错误");
    throw new Error(`页面会话请求失败：${E}`);
  }
  return kg(h);
}
function fr() {
  let s = 0;
  return {
    begin() {
      return s += 1, s;
    },
    invalidate() {
      s += 1;
    },
    isCurrent(f) {
      return f === s;
    }
  };
}
const zh = [
  { id: "overview", label: "总览" },
  { id: "planning", label: "筹备" },
  { id: "affairs", label: "事务" }
], dr = {
  today: "今天",
  week: "本周",
  month: "本月",
  horizon: "未来"
}, qg = {
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
function Bg(s) {
  const f = s;
  if (!f || !Array.isArray(f.items) || !Array.isArray(f.pending) || !Array.isArray(f.courses) || !Array.isArray(f.affairs) || !Array.isArray(f.students) || !Array.isArray(f.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return f;
}
function Hg(s) {
  const f = s, h = f ? [
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
  if (!f || !f.summary || !f.audit || !f.commute || h.some((d) => !Array.isArray(d)))
    throw new Error("筹备接口返回的数据结构不完整");
  return f;
}
class Lg extends z.Component {
  state = { error: "" };
  static getDerivedStateFromError(f) {
    return { error: f instanceof Error ? f.message : "页面渲染异常" };
  }
  componentDidCatch(f, h) {
    console.error("[laosu-workbench] render failed", f, h.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ n.jsx("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-error", children: /* @__PURE__ */ n.jsx("main", { className: "main-area", children: /* @__PURE__ */ n.jsxs("div", { className: "notice error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("strong", { children: "课务台页面异常" }),
      /* @__PURE__ */ n.jsx("span", { children: this.state.error }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => window.location.reload(), children: "重新载入" })
    ] }) }) }) : this.props.children;
  }
}
function jt(s, f) {
  return s ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...f
  }).format(new Date(s)) : "未定";
}
function aa(s) {
  return s ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(s)) : "";
}
function Yg(s) {
  return s ? `更新于 ${aa(s)}` : "尚未更新";
}
function pr(s) {
  if (!s) return "当前范围";
  const [f, h] = s.split("..");
  if (!f || !h || !/^\d{4}-\d{2}-\d{2}$/.test(f) || !/^\d{4}-\d{2}-\d{2}$/.test(h)) return s;
  const d = (E) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${E}T12:00:00+08:00`));
  return f === h ? d(f) : `${d(f)}—${d(h)}`;
}
function ot(s) {
  return s.start_at || s.deadline_at || null;
}
function hr(s) {
  return ["completed", "已完成"].includes(s) ? "finished" : ["cancelled", "已取消", "已调课"].includes(s) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(s) ? "error" : ["pending_confirmation", "待确认", "待处理", "needs_reschedule"].includes(s) ? "warn" : "active";
}
function br(s, f) {
  if (!f || s.domain !== "course") return !1;
  const h = (s.start_at || "").slice(0, 10);
  return !!h && h < f && s.status === "待上课";
}
function Tn(s, f) {
  if (br(s, f)) return "state-pending";
  const h = hr(s.status);
  return h === "finished" ? "state-finished" : h === "muted" ? "state-neutral" : h === "error" ? "state-error" : h === "warn" ? "state-pending" : s.domain === "course" ? "state-confirmed" : "state-pending";
}
function Nn(s) {
  return s.scope === "one_off" || ["reservation", "manual", "move"].includes(s.origin || "");
}
function En(s) {
  try {
    const f = window.sessionStorage.getItem(`laosu-workbench.cache.${s}`);
    return f ? JSON.parse(f) : null;
  } catch {
    return null;
  }
}
function _i(s, f) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${s}`, JSON.stringify(f));
  } catch {
  }
}
function Vg() {
  const s = new URLSearchParams(window.location.search), f = window.localStorage.getItem("laosu-workbench.tab"), h = window.localStorage.getItem("laosu-workbench.scope"), d = s.get("tab") || f || "overview", E = s.get("scope") || h || "week", b = zh.map((U) => U.id).includes(d) ? d : "overview", S = ["today", "week", "month", "horizon"].includes(E) ? E : "week", O = s.get("preview"), [j, p] = z.useState(b), [w, D] = z.useState(S), [N, L] = z.useState(d === "actions" || !!O), [V, ce] = z.useState(null), I = V !== null, [ee, je] = z.useState(null), [$, ie] = z.useState(!0), [be, me] = z.useState(""), [J, H] = z.useState(null), [Q, F] = z.useState(null), [K, le] = z.useState({ text: "", nonce: 0 }), [pe, Ee] = z.useState(!1), [_e, o] = z.useState(""), [C, Y] = z.useState(null), [m, W] = z.useState({}), [y, R] = z.useState(!1), [Z, P] = z.useState(null), [he, ye] = z.useState(0), [Te, Ge] = z.useState(null);
  function G(U, X) {
    X && Ge({ section: X, nonce: Date.now() }), wn(U);
  }
  const [Me, ge] = z.useState(null), te = z.useRef(null), Dt = z.useRef(null), Pe = z.useRef(fr()), ut = z.useRef(fr()), la = z.useRef(/* @__PURE__ */ new Set()), na = z.useRef(null), Lt = z.useRef(!1), nt = z.useRef(!1), Wt = z.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), ft = z.useCallback(async (U = w, X = {}) => {
    const ne = X.silent === !0, se = Pe.current.begin();
    ne || (ie(!0), me(""));
    try {
      const ve = new URLSearchParams({ scope: U });
      X.fresh && ve.set("fresh", "1");
      const Ue = Bg(await Qe(`api/dashboard?${ve.toString()}`));
      return Pe.current.isCurrent(se) ? (je(Ue), _i(`dashboard.${U}`, Ue), !0) : null;
    } catch (ve) {
      return Pe.current.isCurrent(se) ? (ne || me(ve.message || "读取失败"), !1) : null;
    } finally {
      Pe.current.isCurrent(se) && !ne && ie(!1);
    }
  }, [w]);
  z.useEffect(() => {
    const U = En(`dashboard.${S}`);
    U && (je(U), ie(!1)), ft(S, { fresh: !0, silent: !!U });
  }, []), z.useEffect(() => {
    const U = (X) => {
      X.target instanceof HTMLElement && !te.current?.contains(X.target) && (na.current = X.target);
    };
    return window.addEventListener("pointerdown", U, !0), () => window.removeEventListener("pointerdown", U, !0);
  }, []), z.useEffect(() => {
    O && (L(!0), Qe(`api/preview/${encodeURIComponent(O)}`).then(H).catch((U) => {
      H({ ok: !1, error: U.message });
    }));
  }, [O]), z.useEffect(() => {
    if (!N) return;
    const U = te.current, X = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Lt.current) {
      const fe = new URL(window.location.href);
      fe.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", fe), Lt.current = !0;
    }
    const ne = window.setTimeout(() => {
      ((Q ? U?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : U?.querySelector(".ai-composer textarea")) || U?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), Q && U?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), se = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((fe) => fe.getClientRects().length > 0 && !fe.closest("[hidden]")), ve = (fe) => {
      if (fe.key === "Escape") {
        fe.preventDefault(), Rl();
        return;
      }
      if (fe.key !== "Tab") return;
      const St = se();
      if (!St.length) return;
      const sa = St[0], vt = St[St.length - 1];
      U?.contains(document.activeElement) ? fe.shiftKey && document.activeElement === sa ? (fe.preventDefault(), vt.focus()) : !fe.shiftKey && document.activeElement === vt && (fe.preventDefault(), sa.focus()) : (fe.preventDefault(), (fe.shiftKey ? vt : sa).focus());
    }, Ue = () => {
      Lt.current && (Lt.current = !1, L(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", ve), window.addEventListener("popstate", Ue), () => {
      window.clearTimeout(ne), document.body.style.overflow = X, window.removeEventListener("keydown", ve), window.removeEventListener("popstate", Ue), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [N]), z.useEffect(() => {
    if (!I) return;
    const U = Dt.current, X = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !nt.current) {
      const fe = new URL(window.location.href);
      fe.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", fe), nt.current = !0;
    }
    const ne = window.setTimeout(() => U?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), se = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((fe) => fe.getClientRects().length > 0 && !fe.closest("[hidden]")), ve = (fe) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (fe.key === "Escape") {
        fe.preventDefault(), ka();
        return;
      }
      if (fe.key !== "Tab") return;
      const St = se();
      if (!St.length) return;
      const sa = St[0], vt = St[St.length - 1];
      U?.contains(document.activeElement) ? fe.shiftKey && document.activeElement === sa ? (fe.preventDefault(), vt.focus()) : !fe.shiftKey && document.activeElement === vt && (fe.preventDefault(), sa.focus()) : (fe.preventDefault(), (fe.shiftKey ? vt : sa).focus());
    }, Ue = () => {
      const fe = new URL(window.location.href).searchParams.get("drawer");
      fe === "context" || fe === "actions" || !nt.current || (nt.current = !1, ce(null));
    };
    return window.addEventListener("keydown", ve), window.addEventListener("popstate", Ue), () => {
      window.clearTimeout(ne), document.body.style.overflow = X, window.removeEventListener("keydown", ve), window.removeEventListener("popstate", Ue), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [I]), z.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", j);
    const U = () => {
      Wt.current[j] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${j}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", U), () => window.removeEventListener("pagehide", U);
  }, [j]), z.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", w);
  }, [w]), z.useEffect(() => {
    if (Me?.tab === j) return;
    const U = Wt.current[j] || 0;
    let X = 0, ne, se = !1;
    const ve = () => {
      se = !0;
    }, Ue = () => {
      se || (window.scrollTo({ top: U, behavior: "auto" }), X += 1, Math.abs(window.scrollY - U) > 3 && X < 15 && (ne = window.setTimeout(Ue, 90)));
    }, fe = window.requestAnimationFrame(Ue);
    return window.addEventListener("wheel", ve, { passive: !0 }), window.addEventListener("touchstart", ve, { passive: !0 }), window.addEventListener("keydown", ve), () => {
      se = !0, window.cancelAnimationFrame(fe), ne && window.clearTimeout(ne), window.removeEventListener("wheel", ve), window.removeEventListener("touchstart", ve), window.removeEventListener("keydown", ve);
    };
  }, [j]), z.useEffect(() => {
    if (!Me || Me.tab !== j) return;
    let U = 0, X, ne, se;
    const ve = () => {
      const fe = Array.from(document.querySelectorAll("[data-item-id]")).find((St) => St.dataset.itemId === Me.id);
      if (!fe && U < 20) {
        U += 1, X = window.setTimeout(ve, 60);
        return;
      }
      if (!fe) {
        ge(null);
        return;
      }
      se = fe, fe.classList.add("target-highlight"), fe.setAttribute("tabindex", "-1"), fe.scrollIntoView({ behavior: "smooth", block: "center" }), fe.focus({ preventScroll: !0 }), ne = window.setTimeout(() => {
        fe.classList.remove("target-highlight"), fe.removeAttribute("tabindex"), ge(null);
      }, 2400);
    }, Ue = window.setTimeout(ve, 50);
    return () => {
      window.clearTimeout(Ue), X && window.clearTimeout(X), ne && window.clearTimeout(ne), se?.classList.remove("target-highlight"), se?.removeAttribute("tabindex");
    };
  }, [Me, j, ee?.observedAt]), z.useEffect(() => {
    if (!_e) return;
    const U = window.setTimeout(() => o(""), 4800);
    return () => window.clearTimeout(U);
  }, [_e]);
  const ia = z.useRef(null);
  z.useEffect(() => {
    const U = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const X = await Qe("api/data-revision");
          if (!X?.ok || typeof X.revision != "number") return;
          if (ia.current === null) {
            ia.current = X.revision;
            return;
          }
          X.revision !== ia.current && (ia.current = X.revision, ha({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(U);
  }, [w]);
  const Ml = z.useMemo(
    () => (ee?.pending ?? []).filter((U) => !["completed", "cancelled"].includes(U.status)),
    [ee]
  );
  async function Oe(U) {
    const X = new URL(window.location.href);
    X.searchParams.set("scope", U), window.history.replaceState(window.history.state, "", X), D(U);
    const ne = En(`dashboard.${U}`);
    if (ne) {
      je(ne), ie(!1), ft(U, { fresh: !0, silent: !0 });
      return;
    }
    await ft(U);
  }
  function rl(U = j) {
    Wt.current[U] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${U}`, String(window.scrollY));
  }
  function wn(U, X) {
    rl();
    const ne = new URL(window.location.href);
    ne.searchParams.set("tab", U), window.history.replaceState(window.history.state, "", ne), ge(null), p(U);
  }
  function Ol(U) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const X = document.activeElement;
    ((X instanceof HTMLElement && X !== document.body && !te.current?.contains(X) ? X : null) || U || na.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function Ra(U) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const X = document.activeElement, ne = X instanceof HTMLElement && X !== document.body && !Dt.current?.contains(X) ? X : null;
    (U || ne || na.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function wi(U, X) {
    Ra(X), ce({ kind: "item", item: U });
  }
  function Cn(U, X, ne) {
    Ra(X), ce({ kind: "day", date: U, items: ne });
  }
  function Gu(U) {
    Ra(U), ce({ kind: "system" });
  }
  function An() {
    const U = /* @__PURE__ */ Symbol("workbench-operation");
    return la.current.add(U), Ee(!0), U;
  }
  function da(U) {
    la.current.delete(U), Ee(la.current.size > 0);
  }
  function st() {
    ut.current.invalidate(), H(null);
  }
  function ua(U) {
    ut.current.invalidate(), H(U);
  }
  function bt() {
    Ol(document.querySelector(".ai-action-button")), F(null), le({ text: "", nonce: Date.now() }), st(), L(!0);
  }
  function Ul(U) {
    Ol(), F(null), le({ text: U, nonce: Date.now() }), st(), L(!0);
  }
  function ol(U) {
    Ol(), F(U), st(), L(!0);
  }
  function Rl() {
    if (Lt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    Lt.current = !1, L(!1);
  }
  function ka() {
    if (nt.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    nt.current = !1, ce(null);
  }
  async function qa(U, X) {
    if (!C) {
      Y(X.id);
      try {
        const ne = U === "courseCancel" ? await Qe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: X.title, date: X.start_at?.slice(0, 10), time: X.start_at?.slice(11, 16), reason: "没上" })
        }) : await Qe("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: X.id, expectedVersion: X.version })
        });
        if (!ne.ok) throw new Error(ne.error || "处理未完成");
        U === "affairComplete" ? (W((se) => ({ ...se, [X.id]: { ok: !0, text: ne.message || "已完成", buttonLabel: "已完成" } })), o(`${X.title} 已完成`)) : o(`${X.title} ${X.start_at?.slice(5, 16) ?? ""} 已记录没上`), await ft(w);
      } catch (ne) {
        U === "affairComplete" && W((se) => ({ ...se, [X.id]: { ok: !1, text: `处理失败：${ne.message || "未知错误"}` } })), o(`处理失败：${ne.message || "未知错误"}`);
      } finally {
        Y(null);
      }
    }
  }
  async function ha(U = {}) {
    const X = U.silent === !0;
    X || o("正在刷新数据…");
    const ne = await ft(w, { ...U, fresh: !X });
    ne === !0 ? (W({}), P(null), ye((se) => se + 1), X || o("课表、筹备、驾驶舱和事务数据已全部刷新")) : ne === !1 && !X && o("刷新失败，请查看页面错误");
  }
  async function ma(U) {
    const X = ut.current.begin(), ne = An();
    H(null);
    try {
      const se = await Qe("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(U)
      });
      if (!ut.current.isCurrent(X)) return;
      H({ ...se, operation: String(U.operation || ""), input: U });
    } catch (se) {
      ut.current.isCurrent(X) && H({ ok: !1, error: se.message });
    } finally {
      da(ne);
    }
  }
  async function kl(U) {
    if (!y) {
      R(!0), P({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const X = await Qe("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: U })
        });
        if (!X.ok) throw new Error(X.error || "全部上完的处理未完成");
        P({ ok: !0, text: X.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await ft(w);
      } catch (X) {
        const ne = X.message || "全部上完的处理失败";
        P({ ok: !1, text: `处理失败：${ne}`, buttonLabel: "重试全部上完" });
      } finally {
        R(!1);
      }
    }
  }
  async function ya(U) {
    if (!C) {
      Y(U.id), W((X) => ({ ...X, [U.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const X = await Qe("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: U.id, expectedVersion: U.version })
        });
        if (!X.ok) throw new Error(X.error || "没约上的处理未完成");
        const ne = X.outcome?.candidateDate, se = ne ? `已安排 ${ne.slice(5)}` : "已处理";
        W((ve) => ({ ...ve, [U.id]: {
          ok: !0,
          text: X.message || "已推进到下一次尝试",
          buttonLabel: se,
          undo: X.outcome ? { expectedVersion: X.outcome.version } : void 0
        } })), await ft(w);
      } catch (X) {
        const ne = X.message || "没约上的处理失败";
        W((se) => ({ ...se, [U.id]: { ok: !1, text: `处理失败：${ne}`, buttonLabel: "重试" } }));
      } finally {
        Y(null);
      }
    }
  }
  async function zn(U) {
    if (C) return;
    const X = m[U.id]?.undo;
    Y(U.id), W((ne) => ({ ...ne, [U.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const ne = await Qe("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: U.id, expectedVersion: X?.expectedVersion ?? U.version })
      });
      if (!ne.ok) throw new Error(ne.error || "恢复上一候选日未完成");
      const se = ne.outcome?.candidateDate;
      W((ve) => ({ ...ve, [U.id]: {
        ok: !0,
        text: ne.message || "已恢复到上一候选日",
        buttonLabel: se ? `回到 ${se.slice(5)}` : "已恢复"
      } })), await ft(w);
    } catch (ne) {
      const se = ne.message || "恢复上一候选日失败";
      W((ve) => ({ ...ve, [U.id]: { ok: !1, text: `恢复失败：${se}`, buttonLabel: "重试" } }));
    } finally {
      Y(null);
    }
  }
  async function Ci() {
    if (!J?.token || !J.canCommit) return;
    const U = ut.current.begin(), X = An(), ne = J.operation || Q?.operation;
    try {
      const se = await Qe("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: J.token })
      }), ve = { ok: se.ok, summary: se.summary, message: `${se.message || ""}${se.exportMessage ? `
导出：${se.exportMessage}` : ""}${se.syncMessage ? `
日历：${se.syncMessage}` : ""}`, result: se, operation: ne, input: J.input, committed: !!se.ok };
      await ft(w), ye((Ue) => Ue + 1), ut.current.isCurrent(U) && H(ve);
    } catch (se) {
      ut.current.isCurrent(U) && H({ ok: !1, error: se.message });
    } finally {
      da(X);
    }
  }
  async function Dn() {
    const U = J?.batchItems ?? [];
    if (!U.length) return;
    const X = ut.current.begin(), ne = An(), se = /* @__PURE__ */ new Map();
    try {
      for (const ve of U) {
        if (!ve.canCommit) {
          se.set(ve.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const Ue = await Qe("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: ve.token })
          });
          if (se.set(ve.token, { ok: !!Ue.ok, message: Ue.message || (Ue.ok ? "已执行" : "执行失败") }), !Ue.ok) break;
        } catch (Ue) {
          se.set(ve.token, { ok: !1, message: Ue.message || "提交失败" });
          break;
        }
      }
      await ft(w), ye((ve) => ve + 1), ut.current.isCurrent(X) && J && H({
        ...J,
        ok: U.every((ve) => se.get(ve.token)?.ok === !0),
        committed: !0,
        message: U.map((ve) => {
          const Ue = se.get(ve.token);
          return `${Ue?.ok ? "✓" : Ue ? "✗" : "·"} ${ve.summary}：${Ue?.message || "未执行"}`;
        }).join(`
`),
        batchItems: U.map((ve) => {
          const Ue = se.get(ve.token);
          return { ...ve, canCommit: !1, resultOk: Ue?.ok ?? !1, message: Ue?.message || "未执行" };
        })
      });
    } finally {
      da(ne);
    }
  }
  return /* @__PURE__ */ n.jsx(Dg, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ n.jsxs("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-main", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "topbar", "data-ui": "topbar", children: [
      /* @__PURE__ */ n.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", "data-ui": "primary-navigation", children: zh.map((U) => /* @__PURE__ */ n.jsx("button", { type: "button", className: j === U.id ? "tab active" : "tab", "data-ui-role": "nav-item", "data-ui-id": `nav-${U.id}`, "aria-current": j === U.id ? "page" : void 0, onClick: () => wn(U.id), children: U.label }, U.id)) }),
      /* @__PURE__ */ n.jsxs("div", { className: "top-actions", "data-ui": "top-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: N ? "ai-action-button active" : "ai-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-ai", onClick: bt, "aria-expanded": N, children: "✦ AI 操作" }),
        /* @__PURE__ */ n.jsx("span", { className: "updated-at", children: Yg(ee?.observedAt) }),
        /* @__PURE__ */ n.jsxs("button", { type: "button", className: `${ee?.health?.ok ? "health good" : "health bad"} health-button${V?.kind === "system" ? " active" : ""}`, "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-system-status", onClick: (U) => Gu(U.currentTarget), "aria-expanded": V?.kind === "system", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          ee?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "icon-button", "data-ui-role": "button", "data-ui-variant": "icon", "data-ui-id": "refresh-workbench", onClick: () => {
          ha();
        }, "aria-label": "刷新", disabled: $, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("main", { className: "main-area", children: [
      _e && /* @__PURE__ */ n.jsx("div", { className: "toast", role: "status", children: _e }),
      be && /* @__PURE__ */ n.jsx(zl, { tone: "error", title: "读取失败", text: be }),
      ee?.warnings?.length ? /* @__PURE__ */ n.jsx(zl, { tone: "warn", title: "有警告", text: ee.warnings.join("；") }) : null,
      $ && !ee ? /* @__PURE__ */ n.jsx(xr, {}) : null,
      ee && j !== "planning" && j !== "affairs" && /* @__PURE__ */ n.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": $, children: [
        /* @__PURE__ */ n.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ n.jsx("span", { children: $ ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ n.jsx("strong", { children: pr(ee.range) })
        ] }),
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "时间范围切换",
            busy: $,
            value: w,
            onChange: (U) => {
              Oe(U);
            },
            items: Object.keys(dr).map((U) => ({ id: U, label: dr[U] }))
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: $ && ee ? "view-content scope-loading" : "view-content", "aria-busy": $ && !!ee, inert: $ && !!ee, children: [
        ee && j === "overview" && /* @__PURE__ */ n.jsx(Gg, { dashboard: ee, pending: Ml, onInspect: wi, onOpenDay: Cn, onPrepare: ol, onRetry: ya, onRetryPrev: zn, retryingId: C, affairFeedback: m, onDayComplete: kl, dayBusy: y, dayFeedback: Z, onNavigate: G, onQuick: qa, onAskAi: Ul, onDataChanged: ha }),
        j === "planning" && /* @__PURE__ */ n.jsx(Jg, { onAction: ol, onAskAi: Ul, refreshKey: he, sectionHint: Te, scheduleText: ee?.scheduleText, onDataChanged: ha }),
        j === "affairs" && /* @__PURE__ */ n.jsx(Pg, { onQuick: qa, onAskAi: Ul, onPrepare: ol, onInspect: wi, onRetry: ya, onRetryPrev: zn, retryingId: C, feedback: m, refreshKey: he, observedAt: ee?.observedAt ?? "", onOpenDay: (U, X, ne) => Cn(U, ne, X), localDate: ee?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "context-drawer-backdrop", hidden: !I, onMouseDown: (U) => {
      U.currentTarget === U.target && ka();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: Dt, className: "context-drawer", "data-ui": "drawer", "data-ui-id": "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ n.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "context-back", onClick: ka, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: V?.kind === "system" ? "运行状态" : V?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ n.jsx("h2", { children: V?.kind === "system" ? "系统状态" : V?.kind === "day" ? jt(`${V.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : V?.item.title }),
          /* @__PURE__ */ n.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "context-drawer-body", children: V && ee && /* @__PURE__ */ n.jsx(
        nv,
        {
          view: V,
          dashboard: ee,
          onQuick: qa,
          onAskAi: Ul,
          onPrepare: ol,
          onRetry: ya,
          onRetryPrev: zn,
          retryingId: C,
          affairFeedback: m,
          onSync: () => ol({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: "action-drawer-backdrop", hidden: !N, onMouseDown: (U) => {
      U.currentTarget === U.target && Rl();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: te, className: "action-drawer", "data-ui": "drawer", "data-ui-id": "ai-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ n.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "context-back", onClick: Rl, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ n.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ n.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ n.jsx(
        ev,
        {
          pending: Ml,
          students: ee?.students ?? [],
          preset: Q,
          aiDraft: K,
          preview: J,
          busy: pe,
          onPreview: ma,
          onAiPreview: ua,
          onCommit: Ci,
          onCommitBatch: Dn,
          onClear: st,
          onClose: Rl
        }
      ) })
    ] }) })
  ] }) });
}
function Gg({ dashboard: s, pending: f, onInspect: h, onOpenDay: d, onPrepare: E, onQuick: b, onAskAi: S, onRetry: O, onRetryPrev: j, retryingId: p, affairFeedback: w, onDayComplete: D, dayBusy: N, dayFeedback: L, onNavigate: V, onDataChanged: ce }) {
  const I = z.useMemo(() => {
    const Q = /* @__PURE__ */ new Map();
    return s.items.forEach((F) => Q.set(F.id, F)), s.affairs.forEach((F) => Q.set(F.id, { ...F, domain: "affair" })), s.courses.forEach((F) => Q.set(F.id, { ...F, domain: "course" })), Array.from(Q.values()).sort((F, K) => String(ot(F) || "").localeCompare(String(ot(K) || "")));
  }, [s.items, s.affairs, s.courses]), ee = z.useMemo(() => {
    const Q = /* @__PURE__ */ new Map();
    return I.forEach((F) => {
      const K = ot(F)?.slice(0, 10) || "未定日期";
      Q.set(K, [...Q.get(K) || [], F]);
    }), Array.from(Q.entries()).sort(([F], [K]) => F.localeCompare(K));
  }, [I]), je = s.courses.filter((Q) => Q.start_at?.slice(0, 10) === s.localDate && Q.status !== "已取消"), $ = je.filter((Q) => Q.status === "待上课"), ie = je.map((Q) => Q.end_at).filter(Boolean).sort().at(-1) || null, be = !!(ie && Date.now() >= new Date(ie).getTime()), me = N ? "处理中…" : L?.buttonLabel || ($.length ? "全部上完" : "已全部记录"), J = N || !!L?.ok || !$.length || !be, H = {
    today: "把今天安排清楚。",
    week: "把今天和这周，放在一张桌面上。",
    month: "把这个月的课程和事务放在一张桌面上。",
    horizon: "把未来安排放在一张桌面上。"
  }[s.scope];
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(
      _n,
      {
        eyebrow: `课务总览 · ${dr[s.scope]}`,
        title: H,
        description: "先看下一步，再处理欠账，最后看完整安排。"
      }
    ),
    /* @__PURE__ */ n.jsx(rv, { course: s.nextCourse || null, advice: s.commuteAdvice || null, onOpen: (Q) => s.nextCourse && h(s.nextCourse, Q), onQuick: b, onAskAi: S }),
    s.scope === "today" && ($.length > 0 && be || L) && /* @__PURE__ */ n.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ n.jsx("strong", { children: $.length ? `还有 ${$.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ n.jsx("span", { children: "提交后会写入本地课表并同步日历" }),
        L && /* @__PURE__ */ n.jsx(Dl, { ok: L.ok, text: L.text })
      ] }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: J,
          onClick: () => {
            D(s.localDate);
          },
          children: me
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(
      Xg,
      {
        observedAt: s.observedAt,
        pending: f,
        onInspect: h,
        onPrepare: E,
        onOpenDay: d,
        onNavigate: V,
        onQuick: b,
        onAskAi: S,
        onRetry: O,
        onRetryPrev: j,
        retryingId: p,
        affairFeedback: w,
        onDataChanged: ce
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: s.scope === "week" || s.scope === "month" ? "panel wide calendar-panel" : "panel wide", children: [
      /* @__PURE__ */ n.jsx(
        Ht,
        {
          title: s.scope === "week" ? "周视图" : s.scope === "month" ? "月视图" : "时间轴",
          meta: pr(s.range)
        }
      ),
      (s.scope === "week" || s.scope === "month") && /* @__PURE__ */ n.jsxs("div", { className: "calendar-legend", "aria-label": "状态颜色图例", children: [
        /* @__PURE__ */ n.jsxs("span", { className: "confirmed", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          "已确认"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: "pending", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          "待确认／待处理"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: "finished", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          "已完成·留痕"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: "muted", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          "已取消"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: "error", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          "错误／硬阻塞"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: "temporary", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          "临时身份"
        ] }),
        /* @__PURE__ */ n.jsx("small", { children: "石板色=上过课留痕；过期未标记的课程以琥珀“过期”提示，待补标记" })
      ] }),
      s.scope === "week" ? /* @__PURE__ */ n.jsx(Kg, { items: I, range: s.range, localDate: s.localDate, onInspect: h, onPrepare: E, onQuick: b, onAskAi: S, onRetry: O, retryingId: p, affairFeedback: w }) : s.scope === "month" ? /* @__PURE__ */ n.jsx(Qh, { items: I, range: s.range, localDate: s.localDate, onOpenDay: d }) : ee.length ? ee.map(([Q, F]) => /* @__PURE__ */ n.jsxs("div", { className: "day-group", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "day-label", children: [
          /* @__PURE__ */ n.jsx("strong", { children: Q === "未定日期" ? Q : jt(`${Q}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            F.length,
            " 项"
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-list", children: F.map((K) => /* @__PURE__ */ n.jsx(ov, { item: K, onInspect: h, onPrepare: E, onQuick: b, onAskAi: S, onRetry: O, retryingId: p, feedback: w[K.id] }, K.id)) })
      ] }, Q)) : /* @__PURE__ */ n.jsx(Ua, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
    ] })
  ] });
}
function Xg({ observedAt: s, pending: f, onInspect: h, onPrepare: d, onOpenDay: E, onNavigate: b, onQuick: S, onAskAi: O, onRetry: j, onRetryPrev: p, retryingId: w, affairFeedback: D, onDataChanged: N }) {
  const [L, V] = z.useState(() => En("suggestions")), [ce, I] = z.useState(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem("laosu-workbench.suggestions.dismissed") || "[]");
    } catch {
      return [];
    }
  }), ee = z.useCallback((o) => {
    Qe(`api/suggestions${o ? "?fresh=1" : ""}`).then((C) => {
      C?.cards && (V(C), _i("suggestions", C));
    }).catch(() => {
    });
  }, []);
  z.useEffect(() => {
    ee(!0);
  }, [ee]), z.useEffect(() => {
    s && ee(!1);
  }, [s, ee]);
  function je(o) {
    I((C) => {
      const Y = C.includes(o) ? C : [...C, o];
      try {
        window.sessionStorage.setItem("laosu-workbench.suggestions.dismissed", JSON.stringify(Y));
      } catch {
      }
      return Y;
    });
  }
  const [$, ie] = z.useState(null), [be, me] = z.useState({});
  async function J(o, C) {
    if ($) return;
    const Y = o.id;
    ie(Y), me((m) => ({ ...m, [Y]: { ok: !0, text: "正在处理…" } }));
    try {
      let m;
      if (o.action.kind === "overdue" && C === "done")
        m = await Qe("api/courses/overdue-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: o.action.student, date: o.action.date })
        });
      else if (o.action.kind === "overdue")
        m = await Qe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: o.action.student, date: o.action.date, time: o.action.time, reason: "没上" })
        });
      else if (o.action.operation === "calendar_sync")
        m = await Qe("api/calendar/sync-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o.action.input ?? {})
        });
      else if (o.action.operation === "quarantine_overdue")
        m = await Qe("api/courses/quarantine-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      else
        throw new Error("该建议不支持一键执行");
      if (!m.ok) throw new Error(m.error || "处理未完成");
      me((W) => ({ ...W, [Y]: { ok: !0, text: m.message || "已处理" } })), je(Y), ee(!0), N?.({ silent: !0 });
    } catch (m) {
      me((W) => ({ ...W, [Y]: { ok: !1, text: `处理失败：${m.message || "未知错误"}` } }));
    } finally {
      ie(null);
    }
  }
  async function H(o) {
    if ($) return;
    const C = o.id;
    ie(C), me((Y) => ({ ...Y, [C]: { ok: !0, text: "正在补齐…" } }));
    try {
      const Y = await Qe("api/affairs/backfill-end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: o.action.ids ?? [] })
      });
      if (!Y.ok) throw new Error(Y.error || "补齐未完成");
      me((m) => ({ ...m, [C]: { ok: !0, text: Y.message || "已补齐" } })), je(C), ee(!0), N?.({ silent: !0 });
    } catch (Y) {
      me((m) => ({ ...m, [C]: { ok: !1, text: `补齐失败：${Y.message || "未知错误"}` } }));
    } finally {
      ie(null);
    }
  }
  const Q = L?.cards ?? [], F = Q.filter((o) => o.bucket === "required"), K = new Set(F.map((o) => o.entityId).filter(Boolean)), le = f.filter((o) => !K.has(o.id)), pe = Q.filter((o) => o.bucket === "suggestion" && !ce.includes(o.id)), Ee = le.length + F.length;
  function _e(o, C) {
    const Y = o.bucket === "required" ? o.tone === "urgent" ? "待处理" : "待确认" : "建议";
    return /* @__PURE__ */ n.jsxs("div", { className: `quick-pending-item contextual-action-host actionable action-open ${o.bucket}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
        /* @__PURE__ */ n.jsx("strong", { children: o.title }),
        /* @__PURE__ */ n.jsx("span", { children: o.detail }),
        be[o.id] && /* @__PURE__ */ n.jsx(Dl, { ok: be[o.id].ok, text: be[o.id].text })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(Ti, { value: Y }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-inline-action", children: [
        o.action.kind === "overdue" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: $ === o.id, onClick: () => {
            J(o, "done");
          }, children: $ === o.id ? "处理中…" : o.action.label }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!$, onClick: () => {
            J(o, "cancelled");
          }, children: o.action.cancelLabel || "没上" })
        ] }),
        o.action.kind === "backfill" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!$, onClick: () => {
          H(o);
        }, children: $ === o.id ? "处理中…" : o.action.label }),
        o.action.kind === "preview" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!$, onClick: () => {
          const m = o.action.operation;
          if (m === "calendar_sync" || m === "quarantine_overdue") {
            J(o);
            return;
          }
          d({ operation: m ?? "", ...o.action.input ?? {} });
        }, children: $ === o.id ? "处理中…" : o.action.label }),
        o.action.kind === "retryNext" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!$, onClick: () => {
          const m = { id: o.action.id ?? "", version: o.action.version, retry: {}, domain: "affair", title: o.action.title ?? o.title, status: "pending_confirmation" };
          j(m);
        }, children: o.action.label }),
        o.action.kind === "openDay" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!$, onClick: (m) => E(o.action.date ?? "", m.currentTarget), children: o.action.label }),
        o.action.kind === "navigate" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!$, onClick: () => b(o.action.tab ?? "planning", o.action.section), children: o.action.label }),
        C && /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => je(o.id), children: "收起" })
      ] })
    ] }, o.id);
  }
  return !Ee && !pe.length ? null : Ee ? /* @__PURE__ */ n.jsxs("section", { className: "panel pending-action-panel action-center", "aria-label": "待处理", children: [
    /* @__PURE__ */ n.jsx(Ht, { title: "待处理", meta: `${Ee} 项` }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      F.map((o) => _e(o, !1)),
      le.map((o) => /* @__PURE__ */ n.jsx(fv, { item: o, onInspect: h, onPrepare: d, onQuick: S, onAskAi: O, onRetry: j, onRetryPrev: p, retryingId: w, feedback: D[o.id] }, o.id))
    ] }),
    pe.length > 0 && /* @__PURE__ */ n.jsxs("details", { className: "action-suggestions", children: [
      /* @__PURE__ */ n.jsxs("summary", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: "系统建议" }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          pe.length,
          " 项可选优化"
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { children: pe.map((o) => _e(o, !0)) })
    ] })
  ] }) : /* @__PURE__ */ n.jsxs("section", { className: "panel suggestion-action-panel", "aria-label": "建议处理", children: [
    /* @__PURE__ */ n.jsx(Ht, { title: "建议处理", meta: `${pe.length} 项` }),
    /* @__PURE__ */ n.jsx("div", { children: pe.map((o) => _e(o, !0)) })
  ] });
}
function Vu({ item: s, onQuick: f, onAskAi: h, onRetry: d, retryingId: E, feedback: b, compact: S = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status)) return null;
  const j = s.start_at?.slice(0, 10), p = s.start_at?.slice(11, 16);
  if (s.domain === "course")
    return !j || !p ? null : /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${S ? " compact" : ""}`, "data-ui": "item-actions", onClick: (D) => D.stopPropagation(), children: [
      h && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => h(`把${s.title} ${j} ${p} 的这节课调一下时间`), children: "调时间" }),
      f && /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", "data-ui-role": "button", "data-ui-variant": "danger", "data-ui-action": "course-cancel", onClick: () => f("courseCancel", s), children: "本次不上" })
    ] });
  const w = E === s.id;
  return /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${S ? " compact" : ""}`, "data-ui": "item-actions", onClick: (D) => D.stopPropagation(), children: [
    /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", "data-ui-role": "button", "data-ui-variant": "primary", "data-ui-action": "affair-complete", disabled: !!E || b?.ok, onClick: () => f?.("affairComplete", s), children: b?.ok ? "已完成" : "完成" }),
    s.retry && d ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-retry", disabled: !!E || !!b?.ok, "aria-busy": w, onClick: () => {
      d(s);
    }, children: w ? "处理中…" : b?.buttonLabel || "没约上" }) : null
  ] });
}
function Vh(s) {
  return vr(s)[0]?.laneCount || 1;
}
const Qg = 52, Zg = 150;
function Gh(s, f) {
  const [h, d] = z.useState(0);
  if (z.useEffect(() => {
    const S = s.current;
    if (!S || typeof ResizeObserver > "u") return;
    const O = new ResizeObserver((j) => {
      const p = j[0]?.contentRect.width;
      p && Number.isFinite(p) && d(p);
    });
    return O.observe(S), () => O.disconnect();
  }, [s]), f) return { visibleDays: 1, paginated: !1 };
  if (!h) return { visibleDays: 7, paginated: !1 };
  const E = Math.floor((h - Qg) / Zg), b = Math.max(1, Math.min(7, E));
  return { visibleDays: b, paginated: b < 7 };
}
function Xh() {
  const s = z.useRef(null), f = z.useRef(null), h = z.useCallback((b) => {
    if (b.button !== 0 || b.target.closest("button, article, a, input, select, textarea")) return;
    const S = s.current;
    !S || S.scrollWidth <= S.clientWidth || (f.current = { pointerId: b.pointerId, startX: b.clientX, scrollLeft: S.scrollLeft }, S.setPointerCapture(b.pointerId), S.classList.add("dragging"));
  }, []), d = z.useCallback((b) => {
    const S = s.current, O = f.current;
    !S || !O || O.pointerId !== b.pointerId || (S.scrollLeft = O.scrollLeft - (b.clientX - O.startX));
  }, []), E = z.useCallback((b) => {
    const S = s.current, O = f.current;
    !S || !O || O.pointerId !== b.pointerId || (S.hasPointerCapture(b.pointerId) && S.releasePointerCapture(b.pointerId), S.classList.remove("dragging"), f.current = null);
  }, []);
  return { ref: s, onPointerDown: h, onPointerMove: d, onPointerUp: E, onPointerCancel: E };
}
function Kg({ items: s, range: f, localDate: h, onInspect: d, onPrepare: E, onQuick: b, onAskAi: S, onRetry: O, retryingId: j, affairFeedback: p }) {
  const w = z.useMemo(() => or(f, h), [f, h]), D = Xh(), [N, L] = z.useState(0), [V, ce] = z.useState(null), { visibleDays: I, paginated: ee } = Gh(D.ref, !!V), je = Math.max(1, Math.ceil(7 / Math.max(1, I))), $ = z.useMemo(
    () => V ? [V] : ee ? Hh(w, N, I) : w,
    [w, N, V, ee, I]
  );
  z.useEffect(() => {
    L(0);
  }, [f, I]), z.useEffect(() => {
    if (!V) return;
    const o = (C) => {
      C.key === "Escape" && ce(null);
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [V]);
  const ie = z.useMemo(() => {
    const o = /* @__PURE__ */ new Map();
    return s.forEach((C) => {
      const Y = Ei(C);
      Y && (Y < h && ["已取消", "已调课", "cancelled"].includes(C.status) || o.set(Y, [...o.get(Y) || [], C]));
    }), o.forEach((C, Y) => o.set(Y, [...C].sort((m, W) => String(ot(m) || "").localeCompare(String(ot(W) || ""))))), o;
  }, [s, h]), be = z.useMemo(() => new Map(w.map((o) => [o, Vh((ie.get(o) || []).filter((C) => C.start_at || C.deadline_at))])), [ie, w]), me = z.useMemo(() => {
    const o = /* @__PURE__ */ new Map();
    for (const C of w) {
      const Y = (ie.get(C) || []).filter((m) => m.start_at || m.deadline_at);
      o.set(C, vr(Y));
    }
    return o;
  }, [ie, w]), J = $.map((o) => o && be.get(o) || 1);
  J.reduce((o, C) => o + C, 0);
  const H = `52px ${J.map((o) => `minmax(0, ${o}fr)`).join(" ")}`, Q = s.filter((o) => o.start_at || o.deadline_at), F = $.length >= 7 ? Q : Q.filter((o) => $.includes(Ei(o))), { startHour: K, endHour: le } = Lh(F), pe = V ? 92 : I >= 6 ? 64 : I >= 4 ? 72 : 84, Ee = (le - K) * pe, _e = Array.from({ length: le - K + 1 }, (o, C) => K + C);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    V ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => ce(null), children: "‹ 返回整周" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        jt(`${V}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
        " · 单日视图"
      ] }),
      /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
    ] }) : ee && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本页日期", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: N === 0, onClick: () => L((o) => Math.max(0, o - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        "第 ",
        N + 1,
        "/",
        je,
        " 页 · 每页 ",
        I,
        " 天"
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: N >= je - 1, onClick: () => L((o) => Math.min(je - 1, o + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "时间视图，点击日期标题聚焦到单日", ...D, children: /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: H }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-corner", children: "时间" }),
        $.map((o, C) => o ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: o === h ? "week-day-header today" : "week-day-header", onClick: () => ce(o), "aria-label": `聚焦到 ${jt(`${o}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(`${o}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(o.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            ie.get(o)?.length || 0,
            " 项"
          ] })
        ] }, o) : /* @__PURE__ */ n.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${C}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: H }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-time-axis", style: { height: Ee }, children: _e.map((o) => /* @__PURE__ */ n.jsxs("span", { style: { top: (o - K) * pe }, children: [
          String(o).padStart(2, "0"),
          ":00"
        ] }, o)) }),
        $.map((o, C) => {
          if (!o) return /* @__PURE__ */ n.jsx("div", { className: "week-day-track empty-slot", style: { height: Ee }, "aria-hidden": "true" }, `empty-${C}`);
          const Y = me.get(o) || [];
          return /* @__PURE__ */ n.jsx("div", { className: o === h ? "week-day-track today" : "week-day-track", style: { height: Ee }, children: Y.map(({ item: m, lane: W, laneCount: y }) => {
            const R = Yh(m, K, le, pe);
            if (!R) return null;
            const Z = 100 / y, P = m.start_at || m.deadline_at, ye = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(m.status) && (m.domain === "affair" || !!m.start_at), Te = br(m, h);
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${m.domain} ${Tn(m, h)}${Nn(m) ? " temporary" : ""}${ye ? " actionable" : ""}`,
                style: { top: R.top, height: R.height, left: `calc(${W * Z}% + 4px)`, width: `calc(${Z}% - 8px)` },
                tabIndex: 0,
                role: "button",
                onClick: (Ge) => {
                  Ge.target.closest("button") || d(m, Ge.currentTarget);
                },
                onKeyDown: (Ge) => {
                  (Ge.key === "Enter" || Ge.key === " ") && (Ge.preventDefault(), d(m, Ge.currentTarget));
                },
                "data-item-id": m.id,
                "aria-label": `${aa(P)} ${m.title}${Te ? "（已过期待标记）" : ""}，${m.domain === "course" ? `${m.duration || "—"} 分钟课程` : "事务"}${ye ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    aa(P),
                    " · ",
                    m.title,
                    Te ? "（过期）" : ""
                  ] }),
                  /* @__PURE__ */ n.jsx("span", { children: m.domain === "course" ? `${m.duration || "—"} 分钟` : m.estimated_minutes ? `${m.estimated_minutes} 分钟 · 事务` : "事务" }),
                  ye && /* @__PURE__ */ n.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: m, onQuick: b, onAskAi: S, onRetry: O, retryingId: j, feedback: p[m.id], compact: !0 }) })
                ]
              },
              m.id
            );
          }) }, o);
        })
      ] })
    ] }) })
  ] });
}
function Qh({ items: s, range: f, localDate: h, onOpenDay: d }) {
  const E = z.useMemo(() => Ug(f, h), [f, h]), b = (f.match(/\d{4}-\d{2}-\d{2}/) || [h])[0].slice(0, 7), S = z.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    return s.forEach((p) => {
      const w = Ei(p);
      w && (w < h && ["已取消", "已调课", "cancelled"].includes(p.status) || j.set(w, [...j.get(w) || [], p]));
    }), j.forEach((p, w) => j.set(w, [...p].sort((D, N) => String(ot(D) || "").localeCompare(String(ot(N) || ""))))), j;
  }, [s, h]), O = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ n.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ n.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ n.jsx("div", { className: "month-weekdays", children: O.map((j) => /* @__PURE__ */ n.jsxs("span", { children: [
      "周",
      j
    ] }, j)) }),
    /* @__PURE__ */ n.jsx("div", { className: "month-grid", children: E.map((j) => {
      const p = S.get(j) || [], w = ["month-cell"];
      return j.startsWith(b) || w.push("outside"), j === h && w.push("today"), /* @__PURE__ */ n.jsxs("button", { type: "button", className: w.join(" "), onClick: (D) => d(j, D.currentTarget), children: [
        /* @__PURE__ */ n.jsxs("header", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: Number(j.slice(8, 10)) }),
          /* @__PURE__ */ n.jsx("span", { children: p.length ? `${p.length} 项` : "" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "month-item-list", children: [
          p.slice(0, 3).map((D) => /* @__PURE__ */ n.jsxs("span", { className: `month-item ${D.domain} ${Tn(D, h)}${Nn(D) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ n.jsx("i", {}),
            aa(ot(D)) || "待定",
            " · ",
            D.title,
            br(D, h) ? "（过期）" : ""
          ] }, D.id)),
          p.length > 3 && /* @__PURE__ */ n.jsxs("span", { className: "month-more", children: [
            "＋",
            p.length - 3,
            " 项"
          ] })
        ] })
      ] }, j);
    }) })
  ] }) });
}
function ir(s) {
  const f = Math.floor(s / 60), h = s % 60;
  return String(f).padStart(2, "0") + ":" + String(h).padStart(2, "0");
}
function $g({ onAction: s, onAskAi: f, refreshKey: h = 0 }) {
  const [d, E] = z.useState(() => En("cockpit")), [b, S] = z.useState(!d), [O, j] = z.useState(""), p = z.useCallback(async (N = !1, L = !1) => {
    N || S(!0);
    try {
      const V = await Qe("api/cockpit" + (L ? "?fresh=1" : ""));
      return E(V), _i("cockpit", V), j(""), !0;
    } catch (V) {
      return j(V?.message || "读取失败"), !1;
    } finally {
      S(!1);
    }
  }, []);
  z.useEffect(() => {
    p(!d);
  }, [p]), z.useEffect(() => {
    h > 0 && p(!0, !0);
  }, [h]);
  const w = z.useMemo(() => {
    const N = /* @__PURE__ */ new Map();
    for (const V of d?.students ?? [])
      N.has(V.group) || N.set(V.group, []), N.get(V.group).push(V);
    return ["本周已排", "已预留", "未排"].map((V) => ({ label: V, items: N.get(V) ?? [] }));
  }, [d]);
  if (b && !d) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (O && !d) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx(ta, { label: "驾驶舱读取", ok: !1, detail: O }) });
  const D = d?.localDate ?? "";
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ n.jsx(_n, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "muted-note", children: [
        d?.monday,
        " 当周 · 今天 ",
        D
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        p(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => f(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ n.jsx(Ht, { title: "候选学生" }),
        w.map((N) => /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            N.label,
            " · ",
            N.items.length
          ] }),
          N.items.length === 0 ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "（无）" }) : N.items.map((L) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: L.name }),
            /* @__PURE__ */ n.jsx("span", { className: "cockpit-zone", children: L.zone })
          ] }, L.name))
        ] }, N.label))
      ] }),
      /* @__PURE__ */ n.jsx("section", { className: "cockpit-canvas", children: d?.days.map((N) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day" + (N.date === D ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ n.jsx("strong", { children: N.weekday }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: N.date.slice(5) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-body", children: [
          N.courses.map((L, V) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => s({ operation: "course_move", student: L.title, fromDate: N.date, fromTime: String(L.start).slice(11, 16) }), children: [
              /* @__PURE__ */ n.jsx("span", { children: L.title }),
              /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
                String(L.start).slice(11, 16),
                "–",
                String(L.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "cockpit-card-ai", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", title: "用一句话交给 AI 调时间", onClick: () => f("把" + L.title + " " + N.date + " " + String(L.start).slice(11, 16) + " 的这节课调一下时间"), children: "调时间" })
          ] }, "c" + V)),
          N.reservations.map((L, V) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => s({ operation: "reservation_update", id: L.id, student: L.student, date: N.date, time: String(L.start).slice(11, 16) }), children: [
            /* @__PURE__ */ n.jsxs("span", { children: [
              L.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
              String(L.start).slice(11, 16),
              "–",
              String(L.end).slice(11, 16)
            ] })
          ] }, "r" + V)),
          N.gaps.map((L, V) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + L.minutes + " 分钟，点击预留", onClick: () => s({ operation: "reservation_add", date: N.date, time: ir(L.start) }), children: [
            ir(L.start),
            "–",
            ir(L.end),
            " 空档"
          ] }, "g" + V)),
          N.courses.length === 0 && N.reservations.length === 0 && /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, N.date)) }),
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ n.jsx(Ht, { title: "实时诊断" }),
        /* @__PURE__ */ n.jsx(Sn, { label: "本周课程", value: d?.diagnostics.courseCount ?? 0, hint: "共 " + (d?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ n.jsx(Sn, { label: "有效预留", value: d?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          d?.diagnostics.dayGaps.map((N) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: N.weekday }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-zone", children: [
              N.gapMinutes,
              " 分钟"
            ] })
          ] }, N.date))
        ] }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            d?.diagnostics.unassigned.length ?? 0
          ] }),
          d?.diagnostics.unassigned.length ? d?.diagnostics.unassigned.map((N) => /* @__PURE__ */ n.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ n.jsx("span", { children: N }) }, N)) : /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (d?.warnings ?? []).map((N, L) => /* @__PURE__ */ n.jsx(ta, { label: "读取警告", ok: !1, detail: N }, L))
      ] })
    ] })
  ] });
}
function Jg({ onAction: s, onAskAi: f, refreshKey: h, sectionHint: d, scheduleText: E, onDataChanged: b }) {
  const [S, O] = z.useState(() => En("planning")), [j, p] = z.useState(""), [w, D] = z.useState("calendar"), [N, L] = z.useState("issues"), [V, ce] = z.useState(!1), [I, ee] = z.useState(null), [je, $] = z.useState(!1), [ie, be] = z.useState(null), [me, J] = z.useState({});
  z.useEffect(() => {
    d?.section && D(d.section);
  }, [d?.nonce]), z.useEffect(() => {
    let m = !1;
    return Qe(`api/planning${h > 0 ? "?fresh=1" : ""}`).then((W) => {
      if (m) return;
      const y = Hg(W);
      O(y), _i("planning", y), p(""), ee(null);
    }).catch((W) => {
      m || p(W.message || "筹备数据读取失败");
    }), () => {
      m = !0;
    };
  }, [h]), z.useEffect(() => {
    const m = Object.entries(me).at(-1);
    if (!m || !m[1].ok || ie === m[0]) return;
    const W = window.setTimeout(() => {
      J((y) => {
        const R = { ...y };
        return delete R[m[0]], R;
      });
    }, 4500);
    return () => window.clearTimeout(W);
  }, [ie, me]);
  async function H() {
    if (!(!S || je)) {
      $(!0), ee(null);
      try {
        ee(await Qe(`api/planning/template-check?monday=${encodeURIComponent(S.weekMonday)}`));
      } catch (m) {
        ee({ ok: !1, passed: !1, monday: S.weekMonday, output: "", affectedDates: [], error: m.message });
      } finally {
        $(!1);
      }
    }
  }
  async function Q(m) {
    if (!ie) {
      be(m), J((W) => ({ ...W, [m]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const W = await Qe("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: m })
        });
        if (!W.ok) throw new Error(W.error || "取消预留未完成");
        O((y) => y && {
          ...y,
          reservations: y.reservations.map((R) => R.reservation_id === m ? { ...R, status: "已取消" } : R)
        }), J((y) => ({ ...y, [m]: { ok: !0, text: W.message || "已取消预留" } })), b({ silent: !0 });
      } catch (W) {
        J((y) => ({ ...y, [m]: { ok: !1, text: `取消失败：${W.message || "未知错误"}` } }));
      } finally {
        be(null);
      }
    }
  }
  async function F(m) {
    if (!ie) {
      be(m), J((W) => ({ ...W, [m]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const W = await Qe("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: m })
        });
        if (!W.ok) throw new Error(W.error || "预留确认失败");
        O((y) => y && {
          ...y,
          summary: { ...y.summary, formalCourseCount: y.summary.formalCourseCount + 1 },
          reservations: y.reservations.map((R) => R.reservation_id === m ? { ...R, status: "已确认" } : R),
          audit: {
            ...y.audit,
            reservation_hard_blockers: y.audit.reservation_hard_blockers.filter((R) => R.reservation_id !== m)
          }
        }), J((y) => ({ ...y, [m]: { ok: !0, text: W.message || "已确认落课" } })), b({ silent: !0 });
      } catch (W) {
        J((y) => ({ ...y, [m]: { ok: !1, text: `确认失败：${W.message || "未知错误"}` } })), b({ silent: !0 });
      } finally {
        be(null);
      }
    }
  }
  if (j) return /* @__PURE__ */ n.jsx(zl, { tone: "error", title: "筹备数据读取失败", text: j });
  if (!S) return /* @__PURE__ */ n.jsx(xr, {});
  const K = S.summary, le = S.students.filter((m) => m.confirmed && m.zone !== "未分区" && (m.availability.length > 0 || m.hasReservation)).length, pe = K.activeStudentCount ? Math.round(le / K.activeStudentCount * 100) : 100, Ee = S.commute.overlaps.length, _e = new Map(S.audit.reservation_hard_blockers.map((m) => [m.reservation_id, m.reasons])), o = S.students.filter((m) => N === "all" ? !0 : N === "availability" ? !m.availability.length && !m.hasReservation : N === "zone" ? m.zone === "未分区" : N === "pending" ? !!m.pendingWeekday || !m.confirmed : m.issues.length > 0), C = V ? o : o.slice(0, 10), Y = S.sources.filter((m) => !m.ok);
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ n.jsx(_n, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    Y.length > 0 && /* @__PURE__ */ n.jsx(zl, { tone: "warn", title: `${Y.length} 项筹备数据读取异常`, text: Y.map((m) => `${m.label}：${m.message || "读取失败"}`).join("；") }),
    K.reservationHardBlockerCount > 0 && /* @__PURE__ */ n.jsx(zl, { tone: "warn", title: `${K.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: S.audit.reservation_hard_blockers.map((m) => `${m.student} ${m.date}：${m.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ n.jsx(
      Yu,
      {
        label: "筹备页内部导航",
        value: w,
        onChange: (m) => D(m),
        items: [
          { id: "calendar", label: "周视图", count: S.reservations.length + S.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: K.unzonedCount + K.missingAvailabilityCount + K.unconfirmedActiveCount + S.students.filter((m) => m.issues.length).length },
          { id: "candidates", label: "预留与复核", count: Ee + K.reservationCount + K.reviewCount + K.overdueCount + Y.length }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(Fg, { planning: S, hidden: w !== "calendar", onConfirmReservation: F, onCancelReservation: Q, onAction: s, confirmingReservationId: ie, reservationFeedback: me }),
    /* @__PURE__ */ n.jsxs("div", { hidden: w !== "trial", children: [
      /* @__PURE__ */ n.jsx(_n, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ n.jsx($g, { onAction: s, onAskAi: f, refreshKey: h })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: w !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ n.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ n.jsxs("strong", { children: [
          le,
          "/",
          K.activeStudentCount
        ] }),
        /* @__PURE__ */ n.jsxs("small", { children: [
          pe,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ n.jsx("i", { style: { width: `${pe}%` } }) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: Ee ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ n.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ n.jsx("strong", { children: Ee }),
        /* @__PURE__ */ n.jsx("small", { children: Ee ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ n.jsx("strong", { children: K.reservationCount }),
        /* @__PURE__ */ n.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ n.jsx("strong", { children: K.formalCourseCount }),
        /* @__PURE__ */ n.jsx("small", { children: K.reviewCount + K.overdueCount ? `${K.reviewCount + K.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-overview-grid", hidden: w !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ n.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            K.activeStudentCount - le,
            " 人仍有关键资料缺口。contract ",
            S.contract.version ?? "—",
            " · schema ",
            S.contract.schemaVersion ?? "—",
            " · ",
            pr(S.range)
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            L("availability"), D("students");
          }, children: [
            "缺候选时间 ",
            K.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            L("zone"), D("students");
          }, children: [
            "未分区 ",
            K.unzonedCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            L("pending"), D("students");
          }, children: [
            "待确认 ",
            K.unconfirmedActiveCount + K.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ n.jsx("h3", { children: Ee ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            Ee,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => D("candidates"), children: "查看候选与预留" }),
          K.reviewCount + K.overdueCount + Y.length > 0 && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => D("candidates"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "panel planning-student-panel", hidden: w !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-panel-head", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "先处理这些" }),
          /* @__PURE__ */ n.jsx("h3", { children: "学生筹备队列" }),
          /* @__PURE__ */ n.jsx("span", { children: "默认只展示存在缺口或约束的学生。" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "planning-filter", role: "group", "aria-label": "筛选学生", children: [
          ["issues", "待处理"],
          ["availability", "缺候选时间"],
          ["zone", "未分区"],
          ["pending", "待确认"],
          ["all", "全部"]
        ].map(([m, W]) => /* @__PURE__ */ n.jsx("button", { type: "button", className: N === m ? "selected" : "", onClick: () => {
          L(m), ce(!1);
        }, children: W }, m)) })
      ] }),
      o.length ? /* @__PURE__ */ n.jsxs("div", { className: "planning-student-list", children: [
        C.map((m) => {
          const W = m.availability.length ? m.availability.map((y) => `${y.weekday} ${y.start_time}-${y.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ n.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ n.jsx("strong", { children: m.name }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                m.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ n.jsx("span", { className: m.confirmed ? "state-good" : "state-warn", children: m.pendingWeekday ? `${m.pendingWeekday}待定` : m.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "片区" }),
              /* @__PURE__ */ n.jsx("span", { className: m.zone === "未分区" ? "state-warn" : "", children: m.zone })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ n.jsx("span", { className: !m.availability.length && !m.hasReservation ? "state-warn" : "", title: W, children: m.availability.length ? W : m.hasReservation ? "已有单日预留" : W })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "约束" }),
              /* @__PURE__ */ n.jsx("span", { children: m.vacations.length ? m.vacations.map((y) => `至 ${y.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-row-actions", children: [
              m.zone === "未分区" && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "zone_set", student: m.name }), children: "设片区" }),
              !m.availability.length && !m.hasReservation && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "availability_set", student: m.name, weekday: m.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "reservation_add", student: m.name, duration: m.duration, zone: m.zone === "未分区" ? "" : m.zone }), children: "预留" })
            ] })
          ] }, m.sourceName);
        }),
        o.length > 10 && /* @__PURE__ */ n.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => ce((m) => !m), children: V ? "收起学生列表" : `再看 ${o.length - 10} 人` })
      ] }) : /* @__PURE__ */ n.jsx(Ua, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      S.inactiveConfirmed.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          S.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-student-context", hidden: w !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ n.jsx("span", { children: S.pending.map((m) => m.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ n.jsx("span", { children: S.vacations.map((m) => `${m.student} ${m.start_date.slice(5)}—${m.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ n.jsx("span", { children: S.zones.map((m) => `${m.zone} ${m.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-two-column", hidden: w !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ n.jsx(Ht, { title: "课程预留", meta: `${S.reservations.length} 条`, action: "新增预留…", onAction: () => s({ operation: "reservation_add" }) }),
        S.reservations.length ? /* @__PURE__ */ n.jsx("div", { className: "reservation-card-list", children: S.reservations.map((m) => {
          const W = (m.conflicts?.formal_courses?.length || 0) + (m.conflicts?.soft_reservations?.length || 0), y = _e.get(m.reservation_id) || [], R = `reservation-blocker-${m.reservation_id}`, Z = m.status === "已确认" ? "已落课" : m.status === "预期" ? "待落课" : m.status, P = y.length ? "blocked" : m.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ n.jsxs("article", { className: `reservation-card ${P}`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ n.jsx("strong", { children: m.reservation_date.slice(5) }),
              /* @__PURE__ */ n.jsx("span", { children: m.weekday })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ n.jsx("strong", { children: m.student }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                m.start_time,
                "-",
                m.end_time,
                " · ",
                m.duration,
                " 分钟",
                m.zone ? ` · ${m.zone}` : ""
              ] }),
              /* @__PURE__ */ n.jsxs("small", { id: R, children: [
                Z,
                W ? ` · ${W} 项软冲突` : "",
                y.length ? ` · 硬约束：${y.join("、")}` : "",
                m.note ? ` · ${m.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "reservation-actions", children: m.status === "预期" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "reservation-update", onClick: () => s({ operation: "reservation_update", reservationId: m.reservation_id, date: m.reservation_date, time: m.start_time, duration: m.duration, zone: m.zone || "", note: m.note || "" }), children: "调时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: y.length > 0, "aria-describedby": y.length ? R : void 0, onClick: () => s({ operation: "reservation_confirm", reservationId: m.reservation_id }), children: y.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => s({ operation: "reservation_cancel", reservationId: m.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ n.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              Z
            ] }) })
          ] }, m.reservation_id);
        }) }) : /* @__PURE__ */ n.jsx(Ua, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ n.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              K.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: je, onClick: () => {
            H();
          }, children: je ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ n.jsx(ur, { label: "时间重叠", count: S.commute.overlaps.length, tone: "danger", details: S.commute.overlaps.slice(0, 3).map((m) => `${m.weekday} ${m.first} ${m.firstRange} / ${m.second} ${m.secondRange}`) }),
          /* @__PURE__ */ n.jsx(ur, { label: "长期候选时间差异", count: S.commute.availabilityConflicts.length, tone: "neutral", details: S.commute.availabilityConflicts.slice(0, 3).map((m) => `${m.student} ${m.weekday} ${m.startTime}-${m.endTime}（仅提示）`) }),
          /* @__PURE__ */ n.jsx(ur, { label: "排时间时再问通勤", count: S.commute.missingRoutes.length, tone: "neutral", details: S.commute.missingRoutes.slice(0, 3).map((m) => `${m.weekday} ${m.from} → ${m.to}`) })
        ] }),
        S.commute.missingRoutes.slice(0, 2).map((m) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => s({ operation: "commute_set", fromStudent: m.from, toStudent: m.to }), children: [
          "补录 ",
          m.from,
          " → ",
          m.to
        ] }, `${m.weekday}-${m.from}-${m.to}`)),
        I && /* @__PURE__ */ n.jsxs("div", { className: I.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ n.jsx("strong", { children: I.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ n.jsx("pre", { children: I.error || I.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    w === "candidates" && (S.reviews.length > 0 || K.overdueCount > 0) && /* @__PURE__ */ n.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ n.jsx(Ht, { title: "历史课程复核", meta: `${S.reviews.length} 节待确认 · ${K.overdueCount} 节过期待转入`, action: K.overdueCount ? `处理 ${K.overdueCount} 节过期课` : void 0, onAction: K.overdueCount ? () => s({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ n.jsx("div", { className: "review-card-list", children: S.reviews.map((m) => /* @__PURE__ */ n.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: m.student }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            m.date,
            " · ",
            m.start_time,
            "-",
            m.end_time
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: m.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: m.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, m.course_id)) })
    ] }),
    w === "candidates" && S.reviews.length === 0 && K.overdueCount === 0 && /* @__PURE__ */ n.jsx("section", { className: "panel", children: /* @__PURE__ */ n.jsx(Ua, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-detail-grid", hidden: w !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "过期待转入：" }),
            K.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "人工待复核：" }),
            K.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "读取异常：" }),
            Y.length,
            " 项"
          ] }),
          /* @__PURE__ */ n.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ n.jsx("div", { className: "source-status-list", children: S.sources.map((m) => /* @__PURE__ */ n.jsxs("span", { className: m.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          m.label
        ] }, m.label)) }),
        /* @__PURE__ */ n.jsxs("pre", { children: [
          Object.values(S.raw).filter(Boolean).join(`

`),
          E ? `

── 底层课表文本 ──
${E}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Fg({ planning: s, hidden: f, onConfirmReservation: h, onCancelReservation: d, onAction: E, confirmingReservationId: b, reservationFeedback: S }) {
  const [O, j] = z.useState("reservation"), [p, w] = z.useState(null), D = Xh(), [N, L] = z.useState(s.weekMonday), [V, ce] = z.useState(0), [I, ee] = z.useState(null), je = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], $ = z.useMemo(() => or(`${N}..${N}`, N), [N]), { visibleDays: ie, paginated: be } = Gh(D.ref, !!I), me = Math.max(1, Math.ceil(7 / Math.max(1, ie))), J = z.useMemo(
    () => I ? [I] : be ? Hh($, V, ie) : $,
    [$, V, I, be, ie]
  );
  z.useEffect(() => {
    L(s.weekMonday);
  }, [s.weekMonday]), z.useEffect(() => {
    ce(0), ee(null), w(null);
  }, [N, O]);
  const H = z.useMemo(() => gr(s.range), [s.range]), Q = z.useMemo(() => or(s.range, s.localDate)[0], [s.range, s.localDate]), F = N > Q, K = !!(H.end && Al(N, 7) <= H.end), le = z.useMemo(() => new Map(s.students.map((G) => [G.name, G])), [s.students]), pe = z.useMemo(() => new Map(s.pending.map((G) => [G.student, G])), [s.pending]), Ee = z.useMemo(() => new Map(
    s.audit.reservation_hard_blockers.map((G) => [G.reservation_id, G.reasons.join("、")])
  ), [s.audit.reservation_hard_blockers]), _e = z.useMemo(() => {
    const G = (ge, te = "在读") => te !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : pe.has(ge) ? { studentState: "待定", stateClass: "pending" } : le.get(ge)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, Me = (ge) => ({
      ...ge,
      start_at: `${ge.date}T${ge.start_time}:00+08:00`,
      end_at: `${ge.date}T${ge.end_time}:00+08:00`
    });
    return O === "reservation" ? s.reservations.filter((ge) => ge.reservation_date >= $[0] && ge.reservation_date <= $[6] && ge.status !== "已取消").map((ge) => {
      const te = Ee.get(ge.reservation_id), Dt = (ge.student_status || "在读") !== "在读", Pe = ge.status === "已确认";
      return Me({
        id: ge.reservation_id,
        kind: "reservation",
        reservationId: ge.reservation_id,
        reservationStatus: ge.status,
        confirmedCourseId: ge.confirmed_course_id,
        blockerText: te,
        student: ge.student,
        date: ge.reservation_date,
        weekday: ge.weekday,
        start_time: ge.start_time,
        end_time: ge.end_time,
        duration: ge.duration,
        studentState: Dt ? "已暂停" : Pe ? "已落课" : te ? "有硬约束" : "待落课",
        stateClass: Dt ? "paused" : Pe ? "landed" : te ? "blocked" : "expected",
        zone: ge.zone,
        note: ge.note
      });
    }) : s.templates.flatMap((ge) => {
      const te = je.indexOf(ge.weekday);
      if (te < 0) return [];
      const Dt = $[te], Pe = G(ge.student, ge.student_status);
      return [Me({
        id: `template-${ge.template_id}`,
        kind: "template",
        student: ge.student,
        date: Dt,
        weekday: ge.weekday,
        start_time: ge.start_time,
        end_time: ge.end_time,
        duration: ge.duration,
        studentState: Pe.studentState,
        stateClass: Pe.stateClass
      })];
    });
  }, [$, O, pe, s.reservations, s.templates, Ee, le]);
  z.useEffect(() => {
    p && !_e.some((G) => G.id === p && G.kind === "reservation") && w(null);
  }, [_e, p]), z.useEffect(() => {
    if (!I) return;
    const G = (Me) => {
      Me.key === "Escape" && ee(null);
    };
    return window.addEventListener("keydown", G), () => window.removeEventListener("keydown", G);
  }, [I]), z.useEffect(() => {
    if (!p) return;
    const G = (Me) => {
      Me.key === "Escape" && w(null);
    };
    return window.addEventListener("keydown", G), () => window.removeEventListener("keydown", G);
  }, [p]);
  const o = !!b, C = z.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    return _e.forEach((Me) => G.set(Me.date, [...G.get(Me.date) || [], Me])), G;
  }, [_e]), Y = z.useMemo(() => new Map($.map((G) => [G, Vh(C.get(G) || [])])), [C, $]), m = z.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    for (const Me of $)
      G.set(Me, vr(C.get(Me) || []));
    return G;
  }, [C, $]), W = J.map((G) => G && Y.get(G) || 1);
  W.reduce((G, Me) => G + Me, 0);
  const y = `52px ${W.map((G) => `minmax(0, ${G}fr)`).join(" ")}`, R = J.length >= 7 ? _e : _e.filter((G) => J.includes(G.date)), { startHour: Z, endHour: P } = Lh(R), he = I ? 92 : ie >= 6 ? 64 : ie >= 4 ? 72 : 84, ye = (P - Z) * he, Te = Array.from({ length: P - Z + 1 }, (G, Me) => Z + Me), Ge = `${jt(`${$[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${jt(`${$[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ n.jsxs("section", { className: `panel planning-week-panel ${O}-mode`, hidden: f, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ n.jsx("h3", { children: O === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ n.jsx("span", { children: O === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: O === "reservation" ? "selected" : "", "aria-pressed": O === "reservation", onClick: () => j("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.reservations.length })
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: O === "template" ? "selected" : "", "aria-pressed": O === "template", onClick: () => j("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "上一周", disabled: !F, onClick: () => L((G) => Al(G, -7)), children: "‹" }),
          /* @__PURE__ */ n.jsx("strong", { children: Ge }),
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "下一周", disabled: !K, onClick: () => L((G) => Al(G, 7)), children: "›" })
        ] }),
        I ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => ee(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            jt(`${I}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
        ] }) : be && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: V === 0, onClick: () => ce((G) => Math.max(0, G - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            "第 ",
            V + 1,
            "/",
            me,
            " 页 · 每页 ",
            ie,
            " 天"
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: V >= me - 1, onClick: () => ce((G) => Math.min(me - 1, G + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "planning-week-legend", children: O === "reservation" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "reservation" }),
        "临时预留"
      ] }),
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "expected" }),
        "待落课"
      ] }),
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "landed" }),
        "已落课"
      ] }),
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "blocked" }),
        "有硬约束"
      ] }),
      /* @__PURE__ */ n.jsx("small", { children: "移入哪张卡，就原地处理哪张卡；触屏轻点，Esc 关闭" })
    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "template" }),
        "正式固定"
      ] }),
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "confirmed" }),
        "已确认"
      ] }),
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "pending" }),
        "待定"
      ] }),
      /* @__PURE__ */ n.jsxs("span", { children: [
        /* @__PURE__ */ n.jsx("i", { className: "unconfirmed" }),
        "未确认"
      ] })
    ] }) }),
    _e.length ? /* @__PURE__ */ n.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，点击日期标题聚焦到单日", ...D, children: /* @__PURE__ */ n.jsxs("div", { className: "planning-week-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: y }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-corner", children: "时间" }),
        J.map((G, Me) => G ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: G === s.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => ee(G), "aria-label": `聚焦到 ${jt(`${G}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: je[$.indexOf(G)] }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(G.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            C.get(G)?.length || 0,
            " 项"
          ] })
        ] }, G) : /* @__PURE__ */ n.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${Me}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: y }, onPointerDown: (G) => {
        G.target.closest(".planning-week-block") || w(null);
      }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-axis", style: { height: ye }, children: Te.map((G) => /* @__PURE__ */ n.jsxs("span", { style: { top: (G - Z) * he }, children: [
          String(G).padStart(2, "0"),
          ":00"
        ] }, G)) }),
        J.map((G, Me) => {
          if (!G) return /* @__PURE__ */ n.jsx("div", { className: "planning-week-track empty-slot", style: { height: ye }, "aria-hidden": "true" }, `empty-${Me}`);
          const ge = m.get(G) || [];
          return /* @__PURE__ */ n.jsx("div", { className: G === s.localDate ? "planning-week-track today" : "planning-week-track", style: { height: ye }, children: ge.map(({ item: te, lane: Dt, laneCount: Pe }) => {
            const ut = Yh(te, Z, P, he);
            if (!ut) return null;
            const la = 100 / Pe, na = te.kind === "reservation" && te.reservationStatus === "预期", Lt = te.kind === "reservation" && te.reservationStatus === "已确认", nt = !!(te.reservationId && (na || Lt)), Wt = !!(na && b === te.reservationId), ft = !!(nt && (p === te.id || Wt)), ia = te.reservationId ? S[te.reservationId] : void 0, Ml = !!(o || te.blockerText || te.stateClass === "paused");
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `planning-week-block ${te.kind} ${te.stateClass}${nt ? " actionable" : ""}${ft ? " action-open" : ""}`,
                tabIndex: nt ? 0 : void 0,
                role: nt ? "button" : void 0,
                "aria-expanded": nt ? ft : void 0,
                "aria-label": `${te.start_time}-${te.end_time} ${te.student}，${te.studentState}${te.zone ? `，${te.zone}` : ""}${na ? "；移入或点击后可调整时间、确认落课" : Lt ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (Oe) => {
                  nt && !Oe.target.closest("button") && w((rl) => rl === te.id ? null : te.id);
                },
                onKeyDown: (Oe) => {
                  nt && (Oe.key === "Enter" || Oe.key === " " ? (Oe.preventDefault(), w((rl) => rl === te.id ? null : te.id)) : Oe.key === "Escape" && (Oe.preventDefault(), w(null)));
                },
                style: { top: ut.top, height: ut.height, left: `calc(${Dt * la}% + 4px)`, width: `calc(${la}% - 8px)` },
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    te.start_time,
                    " · ",
                    te.student
                  ] }),
                  /* @__PURE__ */ n.jsxs("span", { children: [
                    te.duration,
                    " 分钟 · ",
                    te.studentState,
                    te.zone ? ` · ${te.zone}` : ""
                  ] }),
                  nt && /* @__PURE__ */ n.jsxs("div", { className: "planning-week-inline-action", onClick: (Oe) => Oe.stopPropagation(), children: [
                    /* @__PURE__ */ n.jsx("div", { className: "planning-week-inline-buttons", children: na ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: o, onClick: () => {
                        w(null), E({ operation: "reservation_update", reservationId: te.reservationId, date: te.date, time: te.start_time, duration: te.duration, zone: te.zone || "", note: te.note || "" });
                      }, children: "调时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: Ml, "aria-busy": Wt, onClick: () => {
                        const Oe = h(te.reservationId);
                        Oe && typeof Oe.then == "function" && Oe.finally(() => w(null));
                      }, children: Wt ? "确认中…" : o ? "处理中…" : te.stateClass === "paused" ? "学生已暂停" : te.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => E({ operation: "course_move", student: te.student, fromDate: te.date, fromTime: te.start_time, toDate: te.date, toTime: te.start_time, duration: te.duration }), children: "调时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", onClick: () => E({ operation: "course_cancel", student: te.student, date: te.date, time: te.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", disabled: o, onClick: () => {
                        const Oe = d(te.reservationId);
                        Oe && typeof Oe.then == "function" && Oe.finally(() => w(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (te.blockerText || ia) && /* @__PURE__ */ n.jsx(Dl, { ok: !!ia?.ok, text: ia?.text || te.blockerText || "" })
                  ] })
                ]
              },
              te.id
            );
          }) }, G);
        })
      ] })
    ] }) }) : /* @__PURE__ */ n.jsx(Ua, { title: O === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: O === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function ur({ label: s, count: f, tone: h, details: d }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `template-issue ${h}`, children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("span", { children: s }),
      /* @__PURE__ */ n.jsx("strong", { children: f })
    ] }),
    d.length > 0 && /* @__PURE__ */ n.jsx("ul", { children: d.map((E) => /* @__PURE__ */ n.jsx("li", { children: E }, E)) })
  ] });
}
const Wg = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function Ig({ item: s, onInspect: f, onPrepare: h, onQuick: d, onAskAi: E, onRetry: b, onRetryPrev: S, retryingId: O, feedback: j }) {
  const p = ["completed", "cancelled", "已完成", "已取消"].includes(s.status), w = O === s.id, D = s.retry ? "retry" : s.start_at ? "timed" : s.deadline_at ? "deadline" : "fuzzy", N = Date.now(), L = s.deadline_at ? new Date(s.deadline_at).getTime() : null, V = L != null ? Math.ceil((L - N) / 864e5) : null, ce = s.retry?.current_candidate_date || null;
  return /* @__PURE__ */ n.jsxs(
    "article",
    {
      className: `affair-card ${D}${p ? " closed" : ""}`,
      "data-item-id": s.id,
      tabIndex: 0,
      role: "button",
      onClick: (I) => {
        I.target.closest("button") || f(s, I.currentTarget);
      },
      onKeyDown: (I) => {
        I.key === "Enter" && (I.preventDefault(), f(s, I.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-when", children: [
          D === "timed" && s.start_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: aa(s.start_at) }),
            /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          D === "deadline" && s.deadline_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: jt(s.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              "截止",
              V != null && !p ? ` · ${V >= 0 ? `剩 ${V} 天` : `已过 ${-V} 天`}` : ""
            ] })
          ] }),
          D === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ n.jsx("span", { children: s.window_label || "窗口未定" })
          ] }),
          D === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ n.jsx("span", { children: ce ? `下次 ${ce.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ n.jsx("strong", { className: "affair-card-title", children: s.title }),
          /* @__PURE__ */ n.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ n.jsx(Ti, { value: s.status }),
            s.note ? /* @__PURE__ */ n.jsx("em", { children: s.note }) : null,
            s.next_prompt_at ? /* @__PURE__ */ n.jsx("em", { children: `提醒 ${jt(s.next_prompt_at, { month: "numeric", day: "numeric" })} ${aa(s.next_prompt_at)}` }) : null
          ] }),
          D === "retry" && s.retry?.weekdays?.length ? /* @__PURE__ */ n.jsx("span", { className: "affair-candidates", children: s.retry.weekdays.map((I) => /* @__PURE__ */ n.jsx("i", { children: Wg[I] || I }, I)) }) : null,
          j ? /* @__PURE__ */ n.jsx(Dl, { ok: j.ok, text: j.text }) : null,
          j?.undo && S ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!O, onClick: () => {
            S(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "affair-card-actions", children: !p && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do primary", disabled: !!O || j?.ok, onClick: () => d?.("affairComplete", s), children: j?.ok ? "已完成" : "完成" }),
          s.retry && b ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!O || !!j?.ok, "aria-busy": w, onClick: () => {
            b(s);
          }, children: w ? "处理中…" : j?.buttonLabel || "没约上" }) : E ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => E(`把「${s.title}」（${s.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => h({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Pg({ onPrepare: s, onQuick: f, onAskAi: h, onInspect: d, onRetry: E, onRetryPrev: b, retryingId: S, feedback: O, refreshKey: j, observedAt: p, onOpenDay: w, localDate: D }) {
  const [N, L] = z.useState("pending"), [V, ce] = z.useState("list"), [I, ee] = z.useState(() => En("affairs-month")), [je, $] = z.useState(""), ie = z.useCallback((o) => {
    Qe("api/affairs-month" + (o ? "?fresh=1" : "")).then((C) => {
      if (!C || !Array.isArray(C.affairs) || !Array.isArray(C.pending)) return;
      const Y = {
        affairs: C.affairs.map((m) => ({ ...m, domain: "affair" })),
        pending: C.pending.map((m) => ({ ...m, domain: "affair" })),
        month: String(C.month || "")
      };
      ee(Y), _i("affairs-month", Y), $("");
    }).catch(() => {
    });
  }, []);
  z.useEffect(() => {
    ie(!I);
  }, [ie]), z.useEffect(() => {
    j > 0 && ie(!0);
  }, [j]), z.useEffect(() => {
    p && I && ie(!1);
  }, [p, ie]);
  const be = I?.pending ?? [], me = I?.affairs ?? [], J = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), H = me.filter((o) => !J.has(o.status)).sort((o, C) => String(ot(o) || "").localeCompare(String(ot(C) || ""))), Q = me.filter((o) => J.has(o.status)).sort((o, C) => String(ot(C) || "").localeCompare(String(ot(o) || ""))), F = Q.filter((o) => !["cancelled", "已取消"].includes(o.status)).length, K = I?.month ? `${I.month}-01..${I.month}-01` : "", pe = { pending: be, scheduled: H, closed: Q }[N], Ee = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[N];
  function _e(o, C) {
    const Y = me.filter((m) => Ei(m) === o);
    w(o, Y, C);
  }
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(_n, { eyebrow: `事务 · 本月 ${I?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${F} 件、取消 ${Q.length - F} 件，进行中 ${H.length} 件。点日历上的任何一天，看那天的安排。` }),
    je && /* @__PURE__ */ n.jsx(zl, { tone: "error", title: "事务数据读取失败", text: je }),
    !I && /* @__PURE__ */ n.jsx(xr, {}),
    I && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "事务状态",
            value: N,
            onChange: (o) => L(o),
            items: [
              { id: "pending", label: "待处理", count: be.length },
              { id: "scheduled", label: "已安排", count: H.length },
              { id: "closed", label: "已完成·已取消", count: Q.length }
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "视图切换",
            value: V,
            onChange: (o) => ce(o),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      V === "calendar" ? /* @__PURE__ */ n.jsx(Qh, { items: me, range: K, localDate: D ?? I.month + "-01", onOpenDay: _e }) : /* @__PURE__ */ n.jsx("div", { children: pe.length ? pe.map((o) => /* @__PURE__ */ n.jsx(Ig, { item: o, onInspect: d, onPrepare: s, onQuick: f, onAskAi: h, onRetry: E, onRetryPrev: b, retryingId: S, feedback: O[o.id] }, o.id)) : /* @__PURE__ */ n.jsx(Ua, { title: Ee.title, text: Ee.text }) })
    ] })
  ] });
}
function ev({ pending: s, students: f, preset: h, aiDraft: d, preview: E, busy: b, onPreview: S, onAiPreview: O, onCommit: j, onCommitBatch: p, onClear: w, onClose: D }) {
  const [N, L] = z.useState(h?.operation || "course_move"), [V, ce] = z.useState(h?.affairKind || "timed"), [I, ee] = z.useState(h?.student || ""), [je, $] = z.useState(h?.duration || ""), [ie, be] = z.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  z.useEffect(() => {
    h?.operation && L(h.operation), h?.affairKind && ce(h.affairKind), h?.student && ee(h.student), h?.duration && $(h.duration);
  }, [h]);
  function me(H) {
    H.preventDefault();
    const Q = new FormData(H.currentTarget), F = { operation: N };
    for (const [K, le] of Q.entries())
      K !== "operation" && String(le).trim() && (F[K] = le);
    F.duration && (F.duration = Number(F.duration)), F.minutes !== void 0 && (F.minutes = Number(F.minutes)), F.expectedVersion && (F.expectedVersion = Number(F.expectedVersion)), N === "course_plan" && (F.moves = ie.map((K) => ({ ...K, duration: K.duration ? Number(K.duration) : void 0 }))), S(F);
  }
  function J(H, Q, F) {
    be((K) => K.map((le, pe) => pe === H ? { ...le, [Q]: F } : le));
  }
  return /* @__PURE__ */ n.jsxs("div", { className: h ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ n.jsx(lv, { initialDraft: d, preview: E, busy: b, onPreview: O, onCommit: j, onCommitBatch: p, onClear: w, onClose: D }),
    /* @__PURE__ */ n.jsxs("details", { className: "manual-operations", open: !!h, children: [
      /* @__PURE__ */ n.jsxs("summary", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ n.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ n.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ n.jsxs("form", { className: "panel operation-form", onSubmit: me, children: [
          /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ n.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ n.jsxs("select", { name: "operation", value: N, onChange: (H) => {
              L(H.target.value), w();
            }, children: [
              /* @__PURE__ */ n.jsx("option", { value: "course_move", children: "调课" }),
              /* @__PURE__ */ n.jsx("option", { value: "course_add", children: "新建课程" }),
              /* @__PURE__ */ n.jsx("option", { value: "course_cancel", children: "取消课程" }),
              /* @__PURE__ */ n.jsx("option", { value: "reservation_add", children: "预留课程（未确认）" }),
              /* @__PURE__ */ n.jsx("option", { value: "reservation_update", children: "修改课程预留" }),
              /* @__PURE__ */ n.jsx("option", { value: "reservation_confirm", children: "确认预留为正式课" }),
              /* @__PURE__ */ n.jsx("option", { value: "reservation_cancel", children: "取消课程预留" }),
              /* @__PURE__ */ n.jsx("option", { value: "zone_set", children: "设置学生片区" }),
              /* @__PURE__ */ n.jsx("option", { value: "availability_set", children: "设置可用时间" }),
              /* @__PURE__ */ n.jsx("option", { value: "availability_clear", children: "清空某日可用时间" }),
              /* @__PURE__ */ n.jsx("option", { value: "commute_set", children: "记录学生间通勤" }),
              /* @__PURE__ */ n.jsx("option", { value: "quarantine_overdue", children: "过期课程转人工复核" }),
              /* @__PURE__ */ n.jsx("option", { value: "course_review_resolve", children: "复核历史课程" }),
              /* @__PURE__ */ n.jsx("option", { value: "course_day_complete", children: "完成当日课程" }),
              /* @__PURE__ */ n.jsx("option", { value: "course_plan", children: "多项调课计划" }),
              /* @__PURE__ */ n.jsx("option", { value: "affair_create", children: "新建事务" }),
              /* @__PURE__ */ n.jsx("option", { value: "affair_update", children: "修改事务" }),
              /* @__PURE__ */ n.jsx("option", { value: "affair_complete", children: "完成事务" }),
              /* @__PURE__ */ n.jsx("option", { value: "affair_retry_next", children: "推进重试日期" }),
              /* @__PURE__ */ n.jsx("option", { value: "affair_retry_prev", children: "恢复上一候选日" }),
              /* @__PURE__ */ n.jsx("option", { value: "affair_cancel", children: "取消事务" }),
              /* @__PURE__ */ n.jsx("option", { value: "calendar_sync", children: "同步飞书日历" })
            ] })
          ] }),
          N === "course_move" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: h?.duration }),
            /* @__PURE__ */ n.jsx(re, { name: "fromDate", label: "原日期", type: "date", defaultValue: h?.fromDate, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "fromTime", label: "原时间", type: "time", defaultValue: h?.fromTime, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "toDate", label: "新日期", type: "date", defaultValue: h?.toDate, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "toTime", label: "新时间", type: "time", defaultValue: h?.toTime, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!h?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          N === "course_cancel" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "课程日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "课程时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "reason", label: "取消原因（可选）", defaultValue: h?.reason })
          ] }),
          N === "course_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: I,
                  onChange: (H) => {
                    const Q = f.find((F) => F.name === H.target.value);
                    ee(H.target.value), Q && $(Q.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    f.filter((H) => H.status === "在读").map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.name, children: [
                      H.name,
                      " · ",
                      H.default_duration,
                      " 分钟"
                    ] }, H.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: je, onChange: (H) => $(H.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: h?.note }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!h?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          N === "reservation_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: I,
                  onChange: (H) => {
                    const Q = f.find((F) => F.name === H.target.value);
                    ee(H.target.value), Q && $(Q.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    f.filter((H) => H.status === "在读").map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.name, children: [
                      H.name,
                      " · ",
                      H.default_duration,
                      " 分钟"
                    ] }, H.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: je, onChange: (H) => $(H.target.value) })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: h?.zone }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: h?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          N === "reservation_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: h?.reservationId || h?.id, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "duration", label: "时长", type: "number", defaultValue: h?.duration, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: h?.zone }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: h?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(N) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: h?.reservationId || h?.id, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          N === "zone_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: h?.zone === "未分区" ? "" : h?.zone, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: h?.boundaryZones }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          N === "availability_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: h?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((H) => /* @__PURE__ */ n.jsx("option", { value: H, children: H }, H))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: h?.windows, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          N === "availability_clear" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: h?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((H) => /* @__PURE__ */ n.jsx("option", { value: H, children: H }, H))
              ] })
            ] })
          ] }),
          N === "commute_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "fromStudent", label: "出发学生", defaultValue: h?.fromStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "toStudent", label: "到达学生", defaultValue: h?.toStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: h?.minutes, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "transport", label: "交通方式", defaultValue: h?.transport || "driving", required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: h?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          N === "quarantine_overdue" && /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          N === "course_review_resolve" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "courseId", label: "课程ID", type: "number", defaultValue: h?.courseId || h?.id, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ n.jsxs("select", { name: "resolution", defaultValue: h?.resolution || "done", children: [
                /* @__PURE__ */ n.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ n.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          N === "course_day_complete" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "完成日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          N === "course_plan" && /* @__PURE__ */ n.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ n.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", onClick: () => be((H) => [...H, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            ie.map((H, Q) => /* @__PURE__ */ n.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ n.jsx("span", { className: "plan-index", children: Q + 1 }),
              /* @__PURE__ */ n.jsxs("select", { value: H.student || "", onChange: (F) => {
                const K = f.find((le) => le.name === F.target.value);
                J(Q, "student", F.target.value), K && J(Q, "duration", K.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "学生" }),
                f.filter((F) => F.status === "在读").map((F) => /* @__PURE__ */ n.jsx("option", { value: F.name, children: F.name }, F.name))
              ] }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: H.fromDate || "", onChange: (F) => J(Q, "fromDate", F.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: H.fromTime || "", onChange: (F) => J(Q, "fromTime", F.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: H.toDate || "", onChange: (F) => J(Q, "toDate", F.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: H.toTime || "", onChange: (F) => J(Q, "toTime", F.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: H.duration || "", onChange: (F) => J(Q, "duration", F.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "plan-remove", disabled: ie.length <= 2, onClick: () => be((F) => F.filter((K, le) => le !== Q)), children: "×" })
            ] }, Q))
          ] }),
          N === "affair_create" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "title", label: "事务标题", defaultValue: h?.title, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "类型" }),
              /* @__PURE__ */ n.jsxs("select", { name: "affairKind", value: V, onChange: (H) => ce(H.target.value), children: [
                /* @__PURE__ */ n.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ n.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ n.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ n.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            V === "timed" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            V === "deadline" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            V === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            V === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ n.jsx(re, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ n.jsx(re, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ n.jsx(re, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "优先级" }),
              /* @__PURE__ */ n.jsxs("select", { name: "priority", defaultValue: "normal", children: [
                /* @__PURE__ */ n.jsx("option", { value: "low", children: "低" }),
                /* @__PURE__ */ n.jsx("option", { value: "normal", children: "普通" }),
                /* @__PURE__ */ n.jsx("option", { value: "high", children: "高" }),
                /* @__PURE__ */ n.jsx("option", { value: "urgent", children: "紧急" })
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "followUp", type: "checkbox", value: "daily" }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "办成前每日跟进" }),
                /* @__PURE__ */ n.jsx("small", { children: "每天按提醒时间推送，直到约上或完成；约上（已排期）后自动静默。" })
              ] })
            ] })
          ] }),
          N === "affair_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: h?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.id, children: [
                  H.title,
                  " · ",
                  H.id
                ] }, H.id))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "title", label: "新标题（可选）", defaultValue: h?.title }),
            /* @__PURE__ */ n.jsx(re, { name: "startDate", label: "新开始日期（可选）", type: "date" }),
            /* @__PURE__ */ n.jsx(re, { name: "startTime", label: "新开始时间（可选）", type: "time" }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "优先级（可选）" }),
              /* @__PURE__ */ n.jsxs("select", { name: "priority", defaultValue: "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", children: "不变" }),
                /* @__PURE__ */ n.jsx("option", { value: "low", children: "低" }),
                /* @__PURE__ */ n.jsx("option", { value: "normal", children: "普通" }),
                /* @__PURE__ */ n.jsx("option", { value: "high", children: "高" }),
                /* @__PURE__ */ n.jsx("option", { value: "urgent", children: "紧急" })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "新备注（可选）" }),
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "每日跟进" }),
              /* @__PURE__ */ n.jsxs("select", { name: "followUp", defaultValue: "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", children: "不变" }),
                /* @__PURE__ */ n.jsx("option", { value: "daily", children: "办成前每日跟进" }),
                /* @__PURE__ */ n.jsx("option", { value: "none", children: "停止跟进" })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "修改会校验与其他事务和课程的冲突；至少填写一个要改的字段。retry 事务的候选日请用“推进重试日期”，不要在这里改时间。" })
          ] }),
          N === "affair_retry_prev" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: h?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.id, children: [
                  H.title,
                  " · ",
                  H.id
                ] }, H.id))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: h?.expectedVersion }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。" })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(N) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: h?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.id, children: [
                  H.title,
                  " · ",
                  H.id
                ] }, H.id))
              ] })
            ] }),
            N === "affair_retry_next" && /* @__PURE__ */ n.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: h?.expectedVersion })
          ] }),
          N === "calendar_sync" && /* @__PURE__ */ n.jsx(re, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: h?.week }),
          /* @__PURE__ */ n.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ n.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ n.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ n.jsx("button", { className: "primary-button full", type: "submit", disabled: b, children: b ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(h || { operation: N })),
        /* @__PURE__ */ n.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ n.jsx(Ht, { title: "执行预览", meta: E?.token ? `令牌 ${E.token.slice(0, 8)}…` : "等待操作" }),
          !E && /* @__PURE__ */ n.jsx(Ua, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
          E && /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
            /* @__PURE__ */ n.jsxs("div", { className: E.canCommit ? "preview-status pass" : E.ok ? "preview-status neutral" : "preview-status fail", children: [
              /* @__PURE__ */ n.jsx("i", {}),
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: E.canCommit ? "预演通过" : E.ok ? "执行结果" : "预演未通过" }),
                /* @__PURE__ */ n.jsx("span", { children: E.summary || E.error || "无摘要" })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("pre", { children: E.message || E.error || JSON.stringify(E.result, null, 2) }),
            E.result && /* @__PURE__ */ n.jsxs("details", { className: "evidence-details", children: [
              /* @__PURE__ */ n.jsx("summary", { children: "查看执行证据" }),
              /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(E.result, null, 2) })
            ] }),
            E.canCommit && /* @__PURE__ */ n.jsxs("div", { className: "commit-box", children: [
              /* @__PURE__ */ n.jsx("p", { children: "提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger-button", onClick: () => {
                j();
              }, disabled: b, children: b ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ n.jsx(Zh, { preview: E, onClose: D })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Dh = {
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
}, tv = {
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
function av({ preview: s, busy: f, onCommit: h, onCommitBatch: d, onClose: E }) {
  const b = s.operation || "", S = s.input || {}, O = Object.entries(S).filter(([w, D]) => D != null && D !== "" && !w.startsWith("_")), j = s.result?.affected_dates, p = s.batchItems ?? [];
  return p.length ? /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ n.jsxs("div", { className: s.committed ? s.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ n.jsx("i", {}),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: s.committed ? s.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${p.length} 项` }),
        /* @__PURE__ */ n.jsx("span", { children: s.summary || s.message })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "batch-list", children: p.map((w, D) => {
      const N = s.committed ? { text: w.resultOk ? "已执行" : "失败", cls: w.resultOk ? "ok" : "error" } : { text: w.canCommit ? "可执行" : "未通过", cls: w.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ n.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ n.jsx("span", { className: "batch-index", children: D + 1 }),
        /* @__PURE__ */ n.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: Dh[w.operation] || w.operation }),
          /* @__PURE__ */ n.jsx("span", { children: w.summary }),
          w.message && /* @__PURE__ */ n.jsx("small", { children: w.message })
        ] }),
        /* @__PURE__ */ n.jsx("span", { className: `batch-flag ${N.cls}`, children: N.text })
      ] }, w.token);
    }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "action-outcome-actions", children: [
      !s.committed && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: f || !p.some((w) => w.canCommit), onClick: () => {
        d?.() ?? Promise.resolve();
      }, children: f ? "正在提交…" : `全部执行（${p.filter((w) => w.canCommit).length} 项）` }),
      s.committed && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: E, children: "完成并返回" })
    ] })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ n.jsxs("div", { className: s.canCommit ? "preview-status pass" : s.ok ? "preview-status neutral" : "preview-status fail", children: [
      /* @__PURE__ */ n.jsx("i", {}),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: s.canCommit ? "方案预演通过" : s.ok ? "执行结果" : "方案未通过" }),
        /* @__PURE__ */ n.jsx("span", { children: s.summary || s.error })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "preview-summary", children: [
      b && /* @__PURE__ */ n.jsx("span", { className: "preview-op-badge", children: Dh[b] || b }),
      O.length > 0 && /* @__PURE__ */ n.jsx("dl", { className: "preview-fields", children: O.map(([w, D]) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("dt", { children: tv[w] || w }),
        /* @__PURE__ */ n.jsx("dd", { children: String(D) })
      ] }, w)) }),
      j && j.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        j.map((w) => /* @__PURE__ */ n.jsx("span", { children: w.slice(5) }, w))
      ] })
    ] }),
    s.message && s.message !== s.summary && /* @__PURE__ */ n.jsx("pre", { className: "preview-message", children: s.message }),
    s.result && /* @__PURE__ */ n.jsxs("details", { className: "evidence-details", children: [
      /* @__PURE__ */ n.jsx("summary", { children: "查看执行证据" }),
      /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(s.result, null, 2) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "action-outcome-actions", children: [
      s.canCommit && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => {
        h();
      }, disabled: f, children: f ? "正在提交…" : "确认执行此方案" }),
      /* @__PURE__ */ n.jsx(Zh, { preview: s, onClose: E })
    ] })
  ] });
}
function lv({ initialDraft: s, preview: f, busy: h, onPreview: d, onCommit: E, onCommitBatch: b, onClear: S, onClose: O }) {
  const j = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, p = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [w, D] = z.useState([j]), [N, L] = z.useState(""), [V, ce] = z.useState(!1), [I, ee] = z.useState(""), [je, $] = z.useState([]), [ie, be] = z.useState(!1), me = z.useRef(null), J = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function H() {
    const le = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!le) return;
    if (ie) {
      me.current?.stop();
      return;
    }
    const pe = new le();
    pe.lang = "zh-CN", pe.interimResults = !1, pe.continuous = !1, pe.onresult = (Ee) => {
      const _e = Array.from(Ee.results).map((o) => o[0].transcript).join("").trim();
      _e && L((o) => (o ? `${o} ` : "") + _e);
    }, pe.onend = () => be(!1), pe.onerror = () => be(!1), me.current = pe, be(!0), pe.start();
  }
  const Q = z.useRef(fr());
  z.useEffect(() => () => Q.current.invalidate(), []), z.useEffect(() => {
    s.nonce && (Q.current.invalidate(), ce(!1), L(s.text));
  }, [s.nonce, s.text]);
  function F() {
    Q.current.invalidate(), ce(!1), D([j]), L(""), ee(""), $([]), S();
  }
  async function K(le) {
    const pe = (le ?? N).trim();
    if (!pe || V) return;
    const Ee = Q.current.begin(), _e = w.slice(-10);
    D((o) => [...o, { role: "user", text: pe }]), L(""), $([]), ce(!0), ee(""), S();
    try {
      const o = await Qe("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: pe, history: _e })
      });
      if (!Q.current.isCurrent(Ee)) return;
      if (!o.ok) throw new Error(o.error || "AI 没有生成方案");
      $(o.status === "need_clarification" ? o.options ?? [] : []), D((C) => [...C, { role: "assistant", text: o.reply || "方案已经生成，请检查右侧预演。" }]), o.status === "ready" && o.batch && o.previews?.length ? d({
        ok: !0,
        batch: !0,
        summary: o.reply,
        message: o.reply,
        batchItems: o.previews.map((C) => ({ operation: C.operation, token: C.token, summary: C.summary, canCommit: C.canCommit, message: C.message }))
      }) : o.status === "ready" && o.preview && d({
        ok: !0,
        token: o.preview.token,
        expiresAt: o.preview.expiresAt,
        summary: o.preview.summary,
        canCommit: o.preview.canCommit,
        message: o.preview.message,
        result: o.preview.result,
        operation: o.operation,
        input: o.input
      });
    } catch (o) {
      if (!Q.current.isCurrent(Ee)) return;
      const C = o.message || "AI 操作失败";
      ee(C), D((Y) => [...Y, { role: "assistant", text: `这次没有生成预演：${C}` }]);
    } finally {
      Q.current.isCurrent(Ee) && ce(!1);
    }
  }
  return /* @__PURE__ */ n.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ n.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ n.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ n.jsx("button", { className: "row-action-button", type: "button", onClick: F, disabled: V, children: "清空对话" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: p.map((le) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => L(le), children: le }, le)) }),
    /* @__PURE__ */ n.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          w.map((le, pe) => /* @__PURE__ */ n.jsx("div", { className: `ai-bubble ${le.role}`, children: le.text }, pe)),
          V && /* @__PURE__ */ n.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        I && /* @__PURE__ */ n.jsx(zl, { tone: "error", title: "没有生成方案", text: I }),
        je.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: je.map((le) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => {
          K(le);
        }, children: le }, le)) }),
        /* @__PURE__ */ n.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ n.jsx(
            "textarea",
            {
              value: N,
              onChange: (le) => L(le.target.value),
              onKeyDown: (le) => {
                le.key === "Enter" && !le.shiftKey && (le.preventDefault(), K());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          J && /* @__PURE__ */ n.jsx("button", { type: "button", className: ie ? "ai-mic listening" : "ai-mic", onClick: H, "aria-label": ie ? "停止语音输入" : "语音输入", title: "语音输入", children: ie ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            K();
          }, disabled: !N.trim() || V, children: V ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ n.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ n.jsx(Ht, { title: "AI 预演", meta: f?.token ? `令牌 ${f.token.slice(0, 8)}…` : "等待指令" }),
        !f && /* @__PURE__ */ n.jsx(Ua, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        f && /* @__PURE__ */ n.jsx(av, { preview: f, busy: h, onCommit: E, onCommitBatch: b, onClose: O })
      ] })
    ] })
  ] });
}
function nv({ view: s, dashboard: f, onPrepare: h, onQuick: d, onAskAi: E, onRetry: b, onRetryPrev: S, retryingId: O, affairFeedback: j, onSync: p }) {
  if (s.kind === "system") return /* @__PURE__ */ n.jsx(cv, { dashboard: f, onSync: p, embedded: !0 });
  const w = s.kind === "day" ? s.items ? [...s.items].sort((D, N) => String(ot(D) || "").localeCompare(String(ot(N) || ""))) : f.items.filter((D) => Ei(D) === s.date).sort((D, N) => String(ot(D) || "").localeCompare(String(ot(N) || ""))) : [s.item];
  return w.length ? /* @__PURE__ */ n.jsx("div", { className: "context-item-list", children: w.map((D) => /* @__PURE__ */ n.jsx(
    iv,
    {
      item: D,
      onPrepare: h,
      onQuick: d,
      onAskAi: E,
      onRetry: b,
      onRetryPrev: S,
      retryingId: O,
      feedback: D.domain === "affair" ? j[D.id] : void 0
    },
    D.id
  )) }) : /* @__PURE__ */ n.jsx(Ua, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function iv({ item: s, onPrepare: f, onQuick: h, onAskAi: d, onRetry: E, onRetryPrev: b, retryingId: S, feedback: O }) {
  const j = ot(s), p = ["completed", "cancelled", "已完成", "已取消"].includes(s.status);
  return /* @__PURE__ */ n.jsxs("section", { className: `context-item-card ${Tn(s)}${Nn(s) ? " temporary" : ""}`, "data-item-id": s.id, children: [
    /* @__PURE__ */ n.jsxs("header", { children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("span", { className: `context-domain ${s.domain}`, children: s.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ n.jsx("time", { children: j ? `${jt(j, { month: "long", day: "numeric", weekday: "short" })} ${aa(j)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ n.jsx(Ti, { value: s.status })
    ] }),
    /* @__PURE__ */ n.jsx("h3", { children: s.title }),
    /* @__PURE__ */ n.jsx("p", { children: s.domain === "course" ? `${s.duration || "—"} 分钟 · ${s.note || "常规课程"}` : s.note || s.window_label || "暂无补充说明" }),
    O && /* @__PURE__ */ n.jsx(Dl, { ok: O.ok, text: O.text }),
    O?.undo && b ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!S, onClick: () => {
      b(s);
    }, children: "撤销推进" }) : null,
    !p && /* @__PURE__ */ n.jsx("div", { className: "context-item-actions", children: s.domain === "course" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", "data-ui-role": "button", "data-ui-variant": "primary", "data-ui-action": "course-move", onClick: () => d?.(`把${s.title} ${s.start_at?.slice(5, 10)} ${s.start_at?.slice(11, 16)} 的这节课调一下时间`), children: "调时间" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", disabled: !!S, onClick: () => h?.("courseCancel", s), children: "本次不上" })
    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: !!S || O?.ok, onClick: () => h?.("affairComplete", s), children: O?.ok ? "已完成" : "完成" }),
      s.retry ? /* @__PURE__ */ n.jsx("button", { type: "button", className: O?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!S || !!O?.ok, onClick: () => {
        E(s);
      }, children: S === s.id ? "处理中…" : O?.buttonLabel || "没约上" }) : d ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => d(`把「${s.title}」（${s.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => f({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消…" })
    ] }) })
  ] });
}
function uv() {
  const [s, f] = z.useState({ loading: !0 }), h = z.useCallback(() => {
    f({ loading: !0 }), Qe("/api/versions").then((E) => f({ loading: !1, data: E })).catch((E) => f({ loading: !1, error: E.message }));
  }, []);
  z.useEffect(() => {
    h();
  }, [h]);
  const d = s.data?.versions;
  return /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ n.jsx(Ht, { title: "版本与运行态" }),
    s.loading ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : s.error ? /* @__PURE__ */ n.jsx(ta, { label: "版本读取", ok: !1, detail: s.error }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "源码版本" }),
        /* @__PURE__ */ n.jsx("code", { children: d?.source ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "正式安装版" }),
        /* @__PURE__ */ n.jsx("code", { children: d?.installed ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "安装记录" }),
        /* @__PURE__ */ n.jsx("code", { children: d?.installsRecord ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "开发槽" }),
        /* @__PURE__ */ n.jsx("code", { children: d?.dev ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsx(ta, { label: "运行态", ok: !s.data?.devShadowing, detail: s.data?.note || "" })
    ] })
  ] });
}
function sv({ onSync: s }) {
  const [f, h] = z.useState({ loading: !0 }), d = z.useCallback(() => {
    h({ loading: !0 }), Qe("/api/calendar-health").then((O) => h({ loading: !1, data: O })).catch((O) => h({ loading: !1, error: O.message }));
  }, []);
  z.useEffect(() => {
    d();
  }, [d]);
  const E = f.data?.diff, b = E?.toDelete ?? [], S = f.data?.inSync === !0;
  return /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ n.jsx(Ht, { title: "飞书日历对账" }),
    f.loading ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : f.error ? /* @__PURE__ */ n.jsx(ta, { label: "日历盘点", ok: !1, detail: f.error }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(ta, { label: "对账结果", ok: S, detail: S ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
      /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-summary", children: [
        /* @__PURE__ */ n.jsxs("span", { children: [
          "日历事件 ",
          E?.calendarEvents ?? "—"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "托管 ",
          E?.managedEvents ?? "—"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "期望 ",
          E?.desiredEvents ?? "—"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "待建 ",
          E?.toCreate?.length ?? 0
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "待更新 ",
          E?.toUpdate?.length ?? 0
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: b.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          b.length
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-list", children: [
        b.slice(0, 8).map((O, j) => /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ n.jsx("span", { children: O.summary }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: String(O.start || "").slice(0, 16) })
        ] }, j)),
        b.length > 8 && /* @__PURE__ */ n.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          b.length - 8,
          " 条待删除…"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "row-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: d, children: "重新盘点" }),
        !S && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: s, children: "打开同步操作" })
      ] })
    ] })
  ] });
}
function cv({ dashboard: s, onSync: f, embedded: h = !1 }) {
  const d = s.health?.database?.verification;
  return /* @__PURE__ */ n.jsxs("div", { className: h ? "view-stack system-embedded" : "view-stack", children: [
    !h && /* @__PURE__ */ n.jsx(_n, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ n.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ n.jsx(Sn, { label: "数据库完整性", value: d?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${d?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ n.jsx(Sn, { label: "活动事务", value: d?.counts?.active ?? "—", hint: `总数 ${d?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ n.jsx(Sn, { label: "排课 Agent", value: s.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ n.jsx(Sn, { label: "写入锁", value: s.health?.writer?.active ? "占用中" : "空闲", hint: s.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ n.jsx(Ht, { title: "读取链路" }),
        s.health?.reads && /* @__PURE__ */ n.jsx("div", { className: "system-read-health", children: Object.values(s.health.reads).map((E) => /* @__PURE__ */ n.jsx(ta, { label: E.label, ok: E.ok, detail: E.detail }, E.label)) }),
        /* @__PURE__ */ n.jsx(Ht, { title: "契约检查" }),
        /* @__PURE__ */ n.jsx(ta, { label: "事务数据库", ok: s.health?.database?.verification?.ok, detail: s.health?.database?.path }),
        /* @__PURE__ */ n.jsx(ta, { label: "排课入口", ok: s.health?.schedule_agent?.exists, detail: s.health?.schedule_agent?.path }),
        /* @__PURE__ */ n.jsx(ta, { label: "维护模式", ok: !s.health?.maintenance, detail: s.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ n.jsx(ta, { label: "写入锁", ok: !s.health?.writer?.active, detail: s.health?.writer?.active ? `由 ${s.health.writer.owner} 占用` : "当前空闲" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel action-panel", children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "飞书看板" }),
        /* @__PURE__ */ n.jsx("h3", { children: "同步前会先预演。" }),
        /* @__PURE__ */ n.jsxs("p", { children: [
          "正式同步固定使用 ",
          /* @__PURE__ */ n.jsx("code", { children: "--prune" }),
          "，清理已不存在的受管事件。"
        ] }),
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "打开同步操作" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(sv, { onSync: f }),
    /* @__PURE__ */ n.jsx(uv, {})
  ] });
}
function rv({ course: s, advice: f, onOpen: h, onQuick: d, onAskAi: E }) {
  return s ? /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: `next-course-banner next-course-open contextual-action-host ${Tn(s)}${Nn(s) ? " temporary" : ""} actionable`,
      role: "button",
      tabIndex: 0,
      onClick: (b) => {
        b.target.closest("button") || h(b.currentTarget);
      },
      onKeyDown: (b) => {
        (b.key === "Enter" || b.key === " ") && (b.preventDefault(), h(b.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "next-course-time", children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: aa(s.start_at) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "next-course-main", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "eyebrow", children: [
            "下一节课",
            Nn(s) && /* @__PURE__ */ n.jsx("span", { className: "temporary-badge", children: "临时" })
          ] }),
          /* @__PURE__ */ n.jsx("h3", { children: s.title }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            s.duration || "—",
            " 分钟 · ",
            s.note || "常规课程"
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: f?.tight ? "commute-chip tight" : "commute-chip", children: f?.available ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsxs("strong", { children: [
            f.minutes,
            " 分钟通勤"
          ] }),
          /* @__PURE__ */ n.jsx("span", { children: f.tight ? `间隔仅 ${f.gapMinutes} 分钟` : `最晚 ${aa(f.leaveBy)} 出发` })
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "出发时间待定" }),
          /* @__PURE__ */ n.jsx("span", { children: f?.reason || "暂无通勤信息" })
        ] }) }),
        /* @__PURE__ */ n.jsx("span", { className: "next-course-cue", children: "查看详情 →" }),
        /* @__PURE__ */ n.jsx("div", { className: "next-course-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: d, onAskAi: E }) })
      ]
    }
  ) : null;
}
function Zh({ preview: s, onClose: f }) {
  return !s.committed || !s.ok ? null : /* @__PURE__ */ n.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: f, children: "完成并返回" }) });
}
function Yu({ label: s, items: f, value: h, onChange: d, busy: E }) {
  return /* @__PURE__ */ n.jsx("nav", { className: "workbench-nav", "aria-label": s, "data-ui": "segmented-navigation", children: f.map((b) => /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: h === b.id ? "selected" : "",
      "data-ui-role": "nav-item",
      "data-ui-id": `secondary-nav-${b.id}`,
      "aria-label": `${b.label}${b.count ? `，${b.count} 项` : ""}`,
      "aria-pressed": h === b.id,
      disabled: E,
      onClick: () => d(b.id),
      children: [
        /* @__PURE__ */ n.jsx("span", { children: b.label }),
        b.count ? /* @__PURE__ */ n.jsx("strong", { children: b.count }) : null
      ]
    },
    b.id
  )) });
}
function Dl({ ok: s, text: f }) {
  return /* @__PURE__ */ n.jsx("small", { className: `inline-result ${s ? "ok" : "error"}`, children: f });
}
function Sn({ label: s, value: f, hint: h, tone: d }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `metric-card ${d}`, children: [
    /* @__PURE__ */ n.jsx("span", { children: s }),
    /* @__PURE__ */ n.jsx("strong", { children: f }),
    /* @__PURE__ */ n.jsx("small", { children: h })
  ] });
}
function ov({ item: s, onInspect: f, onPrepare: h, onQuick: d, onAskAi: E, onRetry: b, retryingId: S, feedback: O }) {
  const j = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status), p = !!h && !j;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${f ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${Tn(s)}${Nn(s) ? " temporary" : ""}${p ? " actionable" : ""}`,
      "data-item-id": s.id,
      role: f ? "button" : void 0,
      tabIndex: f ? 0 : void 0,
      onClick: (w) => {
        w.target.closest("button") || f?.(s, w.currentTarget);
      },
      onKeyDown: (w) => {
        (w.key === "Enter" || w.key === " ") && f && (w.preventDefault(), f(s, w.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: `domain-dot ${s.domain}` }),
        /* @__PURE__ */ n.jsx("time", { children: aa(ot(s)) || "待定" }),
        /* @__PURE__ */ n.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.domain === "course" ? `${s.duration || "—"} 分钟` : s.note || s.window_label || "事务" }),
          O && /* @__PURE__ */ n.jsx(Dl, { ok: O.ok, text: O.text })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ n.jsx(Ti, { value: s.status }) }),
        p && (h || d || E) && /* @__PURE__ */ n.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: d, onAskAi: E, onRetry: b, retryingId: S, feedback: O }) })
      ]
    }
  );
}
function fv({ item: s, onInspect: f, onPrepare: h, onQuick: d, onAskAi: E, onRetry: b, onRetryPrev: S, retryingId: O, feedback: j }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `quick-pending-item contextual-action-host ${Tn(s)} actionable`,
      "data-item-id": s.id,
      role: "button",
      tabIndex: 0,
      onClick: (p) => {
        p.target.closest("button") || f(s, p.currentTarget);
      },
      onKeyDown: (p) => {
        (p.key === "Enter" || p.key === " ") && (p.preventDefault(), f(s, p.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.window_label || (s.next_prompt_at ? `下次提醒 ${jt(s.next_prompt_at)} ${aa(s.next_prompt_at)}` : "待处理") }),
          j && /* @__PURE__ */ n.jsx(Dl, { ok: j.ok, text: j.text }),
          j?.undo && S ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!O, onClick: () => {
            S(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(Ti, { value: s.status }) }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: d, onAskAi: E, onRetry: b, retryingId: O, feedback: j }) })
      ]
    }
  );
}
function Ti({ value: s }) {
  return /* @__PURE__ */ n.jsx("span", { className: `status ${hr(s)}`, "data-ui": "status-badge", "data-ui-state": hr(s), children: qg[s] || s });
}
function Ht({ title: s, meta: f, action: h, onAction: d, actionDisabled: E }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "panel-heading", "data-ui": "section-heading", children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("h3", { children: s }),
      f && /* @__PURE__ */ n.jsx("span", { children: f })
    ] }),
    h && /* @__PURE__ */ n.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", onClick: d, disabled: E, children: h })
  ] });
}
function _n({ eyebrow: s, title: f, description: h }) {
  return /* @__PURE__ */ n.jsxs("header", { className: "page-title", "data-ui": "page-title", children: [
    /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: s }),
    /* @__PURE__ */ n.jsx("h2", { children: f }),
    /* @__PURE__ */ n.jsx("p", { children: h })
  ] });
}
function re({ name: s, label: f, type: h = "text", placeholder: d, defaultValue: E, required: b = !1 }) {
  return /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: f }),
    /* @__PURE__ */ n.jsx("input", { name: s, type: h, placeholder: d, defaultValue: E, required: b })
  ] });
}
function ta({ label: s, ok: f, detail: h }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ n.jsx("span", { className: f ? "check ok" : "check no", children: f ? "✓" : "!" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("strong", { children: s }),
      /* @__PURE__ */ n.jsx("small", { children: h })
    ] })
  ] });
}
function Ua({ title: s, text: f, compact: h = !1 }) {
  return /* @__PURE__ */ n.jsxs("div", { className: h ? "empty compact" : "empty", "data-ui": "empty-state", children: [
    /* @__PURE__ */ n.jsx("strong", { children: s }),
    /* @__PURE__ */ n.jsx("span", { children: f })
  ] });
}
function zl({ tone: s, title: f, text: h }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `notice ${s}`, "data-ui": "notice", "data-ui-state": s, role: s === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ n.jsx("strong", { children: f }),
    /* @__PURE__ */ n.jsx("span", { children: h })
  ] });
}
function xr() {
  return /* @__PURE__ */ n.jsxs("div", { className: "skeleton-layout", role: "status", "aria-label": "正在加载排课与事务数据…", children: [
    /* @__PURE__ */ n.jsx("div", { className: "skeleton-card skeleton-banner" }),
    /* @__PURE__ */ n.jsxs("div", { className: "skeleton-metrics", children: [
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "skeleton-lines", children: [
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ n.jsx("div", { className: "skeleton-card skeleton-row" })
    ] })
  ] });
}
yr.ready();
yr.ui.resize({ height: window.innerHeight || 900 });
const Mh = document.getElementById("root");
Mh && hg.createRoot(Mh).render(/* @__PURE__ */ n.jsx(Lg, { children: /* @__PURE__ */ n.jsx(Vg, {}) }));
