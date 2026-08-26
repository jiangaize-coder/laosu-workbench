var Ks = { exports: {} }, fi = {};
var sm;
function Iv() {
  if (sm) return fi;
  sm = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(f, N, v) {
    var A = null;
    if (v !== void 0 && (A = "" + v), N.key !== void 0 && (A = "" + N.key), "key" in N) {
      v = {};
      for (var C in N)
        C !== "key" && (v[C] = N[C]);
    } else v = N;
    return N = v.ref, {
      $$typeof: c,
      type: f,
      key: A,
      ref: N !== void 0 ? N : null,
      props: v
    };
  }
  return fi.Fragment = o, fi.jsx = d, fi.jsxs = d, fi;
}
var rm;
function Pv() {
  return rm || (rm = 1, Ks.exports = Iv()), Ks.exports;
}
var i = Pv(), Js = { exports: {} }, ve = {};
var om;
function ey() {
  if (om) return ve;
  om = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), D = Symbol.iterator;
  function Y(g) {
    return g === null || typeof g != "object" ? null : (g = D && g[D] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var ee = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, te = Object.assign, he = {};
  function J(g, U, X) {
    this.props = g, this.context = U, this.refs = he, this.updater = X || ee;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(g, U) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, U, "setState");
  }, J.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function me() {
  }
  me.prototype = J.prototype;
  function fe(g, U, X) {
    this.props = g, this.context = U, this.refs = he, this.updater = X || ee;
  }
  var ne = fe.prototype = new me();
  ne.constructor = fe, te(ne, J.prototype), ne.isPureReactComponent = !0;
  var W = Array.isArray;
  function I() {
  }
  var w = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function H(g, U, X) {
    var Q = X.ref;
    return {
      $$typeof: c,
      type: g,
      key: U,
      ref: Q !== void 0 ? Q : null,
      props: X
    };
  }
  function ze(g, U) {
    return H(g.type, U, g.props);
  }
  function Ae(g) {
    return typeof g == "object" && g !== null && g.$$typeof === c;
  }
  function je(g) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(X) {
      return U[X];
    });
  }
  var et = /\/+/g;
  function Ue(g, U) {
    return typeof g == "object" && g !== null && g.key != null ? je("" + g.key) : U.toString(36);
  }
  function Ve(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(I, I) : (g.status = "pending", g.then(
          function(U) {
            g.status === "pending" && (g.status = "fulfilled", g.value = U);
          },
          function(U) {
            g.status === "pending" && (g.status = "rejected", g.reason = U);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function x(g, U, X, Q, de) {
    var re = typeof g;
    (re === "undefined" || re === "boolean") && (g = null);
    var pe = !1;
    if (g === null) pe = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case c:
            case o:
              pe = !0;
              break;
            case O:
              return pe = g._init, x(
                pe(g._payload),
                U,
                X,
                Q,
                de
              );
          }
      }
    if (pe)
      return de = de(g), pe = Q === "" ? "." + Ue(g, 0) : Q, W(de) ? (X = "", pe != null && (X = pe.replace(et, "$&/") + "/"), x(de, U, X, "", function(oe) {
        return oe;
      })) : de != null && (Ae(de) && (de = ze(
        de,
        X + (de.key == null || g && g.key === de.key ? "" : ("" + de.key).replace(
          et,
          "$&/"
        ) + "/") + pe
      )), U.push(de)), 1;
    pe = 0;
    var G = Q === "" ? "." : Q + ":";
    if (W(g))
      for (var ie = 0; ie < g.length; ie++)
        Q = g[ie], re = G + Ue(Q, ie), pe += x(
          Q,
          U,
          X,
          re,
          de
        );
    else if (ie = Y(g), typeof ie == "function")
      for (g = ie.call(g), ie = 0; !(Q = g.next()).done; )
        Q = Q.value, re = G + Ue(Q, ie++), pe += x(
          Q,
          U,
          X,
          re,
          de
        );
    else if (re === "object") {
      if (typeof g.then == "function")
        return x(
          Ve(g),
          U,
          X,
          Q,
          de
        );
      throw U = String(g), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function m(g, U, X) {
    if (g == null) return g;
    var Q = [], de = 0;
    return x(g, Q, "", "", function(re) {
      return U.call(X, re, de++);
    }), Q;
  }
  function V(g) {
    if (g._status === -1) {
      var U = g._result;
      U = U(), U.then(
        function(X) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = X);
        },
        function(X) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = X);
        }
      ), g._status === -1 && (g._status = 0, g._result = U);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var L = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  }, se = {
    map: m,
    forEach: function(g, U, X) {
      m(
        g,
        function() {
          U.apply(this, arguments);
        },
        X
      );
    },
    count: function(g) {
      var U = 0;
      return m(g, function() {
        U++;
      }), U;
    },
    toArray: function(g) {
      return m(g, function(U) {
        return U;
      }) || [];
    },
    only: function(g) {
      if (!Ae(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  };
  return ve.Activity = b, ve.Children = se, ve.Component = J, ve.Fragment = d, ve.Profiler = N, ve.PureComponent = fe, ve.StrictMode = f, ve.Suspense = j, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return w.H.useMemoCache(g);
    }
  }, ve.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(g, U, X) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var Q = te({}, g.props), de = g.key;
    if (U != null)
      for (re in U.key !== void 0 && (de = "" + U.key), U)
        !P.call(U, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && U.ref === void 0 || (Q[re] = U[re]);
    var re = arguments.length - 2;
    if (re === 1) Q.children = X;
    else if (1 < re) {
      for (var pe = Array(re), G = 0; G < re; G++)
        pe[G] = arguments[G + 2];
      Q.children = pe;
    }
    return H(g.type, de, Q);
  }, ve.createContext = function(g) {
    return g = {
      $$typeof: A,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: v,
      _context: g
    }, g;
  }, ve.createElement = function(g, U, X) {
    var Q, de = {}, re = null;
    if (U != null)
      for (Q in U.key !== void 0 && (re = "" + U.key), U)
        P.call(U, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (de[Q] = U[Q]);
    var pe = arguments.length - 2;
    if (pe === 1) de.children = X;
    else if (1 < pe) {
      for (var G = Array(pe), ie = 0; ie < pe; ie++)
        G[ie] = arguments[ie + 2];
      de.children = G;
    }
    if (g && g.defaultProps)
      for (Q in pe = g.defaultProps, pe)
        de[Q] === void 0 && (de[Q] = pe[Q]);
    return H(g, re, de);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(g) {
    return { $$typeof: C, render: g };
  }, ve.isValidElement = Ae, ve.lazy = function(g) {
    return {
      $$typeof: O,
      _payload: { _status: -1, _result: g },
      _init: V
    };
  }, ve.memo = function(g, U) {
    return {
      $$typeof: y,
      type: g,
      compare: U === void 0 ? null : U
    };
  }, ve.startTransition = function(g) {
    var U = w.T, X = {};
    w.T = X;
    try {
      var Q = g(), de = w.S;
      de !== null && de(X, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(I, L);
    } catch (re) {
      L(re);
    } finally {
      U !== null && X.types !== null && (U.types = X.types), w.T = U;
    }
  }, ve.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, ve.use = function(g) {
    return w.H.use(g);
  }, ve.useActionState = function(g, U, X) {
    return w.H.useActionState(g, U, X);
  }, ve.useCallback = function(g, U) {
    return w.H.useCallback(g, U);
  }, ve.useContext = function(g) {
    return w.H.useContext(g);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(g, U) {
    return w.H.useDeferredValue(g, U);
  }, ve.useEffect = function(g, U) {
    return w.H.useEffect(g, U);
  }, ve.useEffectEvent = function(g) {
    return w.H.useEffectEvent(g);
  }, ve.useId = function() {
    return w.H.useId();
  }, ve.useImperativeHandle = function(g, U, X) {
    return w.H.useImperativeHandle(g, U, X);
  }, ve.useInsertionEffect = function(g, U) {
    return w.H.useInsertionEffect(g, U);
  }, ve.useLayoutEffect = function(g, U) {
    return w.H.useLayoutEffect(g, U);
  }, ve.useMemo = function(g, U) {
    return w.H.useMemo(g, U);
  }, ve.useOptimistic = function(g, U) {
    return w.H.useOptimistic(g, U);
  }, ve.useReducer = function(g, U, X) {
    return w.H.useReducer(g, U, X);
  }, ve.useRef = function(g) {
    return w.H.useRef(g);
  }, ve.useState = function(g) {
    return w.H.useState(g);
  }, ve.useSyncExternalStore = function(g, U, X) {
    return w.H.useSyncExternalStore(
      g,
      U,
      X
    );
  }, ve.useTransition = function() {
    return w.H.useTransition();
  }, ve.version = "19.2.8", ve;
}
var fm;
function sr() {
  return fm || (fm = 1, Js.exports = ey()), Js.exports;
}
var M = sr(), $s = { exports: {} }, di = {}, Fs = { exports: {} }, Ws = {};
var dm;
function ty() {
  return dm || (dm = 1, (function(c) {
    function o(x, m) {
      var V = x.length;
      x.push(m);
      e: for (; 0 < V; ) {
        var L = V - 1 >>> 1, se = x[L];
        if (0 < N(se, m))
          x[L] = m, x[V] = se, V = L;
        else break e;
      }
    }
    function d(x) {
      return x.length === 0 ? null : x[0];
    }
    function f(x) {
      if (x.length === 0) return null;
      var m = x[0], V = x.pop();
      if (V !== m) {
        x[0] = V;
        e: for (var L = 0, se = x.length, g = se >>> 1; L < g; ) {
          var U = 2 * (L + 1) - 1, X = x[U], Q = U + 1, de = x[Q];
          if (0 > N(X, V))
            Q < se && 0 > N(de, X) ? (x[L] = de, x[Q] = V, L = Q) : (x[L] = X, x[U] = V, L = U);
          else if (Q < se && 0 > N(de, V))
            x[L] = de, x[Q] = V, L = Q;
          else break e;
        }
      }
      return m;
    }
    function N(x, m) {
      var V = x.sortIndex - m.sortIndex;
      return V !== 0 ? V : x.id - m.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      c.unstable_now = function() {
        return v.now();
      };
    } else {
      var A = Date, C = A.now();
      c.unstable_now = function() {
        return A.now() - C;
      };
    }
    var j = [], y = [], O = 1, b = null, D = 3, Y = !1, ee = !1, te = !1, he = !1, J = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    function ne(x) {
      for (var m = d(y); m !== null; ) {
        if (m.callback === null) f(y);
        else if (m.startTime <= x)
          f(y), m.sortIndex = m.expirationTime, o(j, m);
        else break;
        m = d(y);
      }
    }
    function W(x) {
      if (te = !1, ne(x), !ee)
        if (d(j) !== null)
          ee = !0, I || (I = !0, je());
        else {
          var m = d(y);
          m !== null && Ve(W, m.startTime - x);
        }
    }
    var I = !1, w = -1, P = 5, H = -1;
    function ze() {
      return he ? !0 : !(c.unstable_now() - H < P);
    }
    function Ae() {
      if (he = !1, I) {
        var x = c.unstable_now();
        H = x;
        var m = !0;
        try {
          e: {
            ee = !1, te && (te = !1, me(w), w = -1), Y = !0;
            var V = D;
            try {
              t: {
                for (ne(x), b = d(j); b !== null && !(b.expirationTime > x && ze()); ) {
                  var L = b.callback;
                  if (typeof L == "function") {
                    b.callback = null, D = b.priorityLevel;
                    var se = L(
                      b.expirationTime <= x
                    );
                    if (x = c.unstable_now(), typeof se == "function") {
                      b.callback = se, ne(x), m = !0;
                      break t;
                    }
                    b === d(j) && f(j), ne(x);
                  } else f(j);
                  b = d(j);
                }
                if (b !== null) m = !0;
                else {
                  var g = d(y);
                  g !== null && Ve(
                    W,
                    g.startTime - x
                  ), m = !1;
                }
              }
              break e;
            } finally {
              b = null, D = V, Y = !1;
            }
            m = void 0;
          }
        } finally {
          m ? je() : I = !1;
        }
      }
    }
    var je;
    if (typeof fe == "function")
      je = function() {
        fe(Ae);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), Ue = et.port2;
      et.port1.onmessage = Ae, je = function() {
        Ue.postMessage(null);
      };
    } else
      je = function() {
        J(Ae, 0);
      };
    function Ve(x, m) {
      w = J(function() {
        x(c.unstable_now());
      }, m);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, c.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < x ? Math.floor(1e3 / x) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, c.unstable_next = function(x) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var m = 3;
          break;
        default:
          m = D;
      }
      var V = D;
      D = m;
      try {
        return x();
      } finally {
        D = V;
      }
    }, c.unstable_requestPaint = function() {
      he = !0;
    }, c.unstable_runWithPriority = function(x, m) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var V = D;
      D = x;
      try {
        return m();
      } finally {
        D = V;
      }
    }, c.unstable_scheduleCallback = function(x, m, V) {
      var L = c.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? L + V : L) : V = L, x) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = V + se, x = {
        id: O++,
        callback: m,
        priorityLevel: x,
        startTime: V,
        expirationTime: se,
        sortIndex: -1
      }, V > L ? (x.sortIndex = V, o(y, x), d(j) === null && x === d(y) && (te ? (me(w), w = -1) : te = !0, Ve(W, V - L))) : (x.sortIndex = se, o(j, x), ee || Y || (ee = !0, I || (I = !0, je()))), x;
    }, c.unstable_shouldYield = ze, c.unstable_wrapCallback = function(x) {
      var m = D;
      return function() {
        var V = D;
        D = m;
        try {
          return x.apply(this, arguments);
        } finally {
          D = V;
        }
      };
    };
  })(Ws)), Ws;
}
var mm;
function ly() {
  return mm || (mm = 1, Fs.exports = ty()), Fs.exports;
}
var Is = { exports: {} }, vt = {};
var hm;
function ay() {
  if (hm) return vt;
  hm = 1;
  var c = sr();
  function o(j) {
    var y = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        y += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return "Minified React error #" + j + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var f = {
    d: {
      f: d,
      r: function() {
        throw Error(o(522));
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
  }, N = /* @__PURE__ */ Symbol.for("react.portal");
  function v(j, y, O) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: b == null ? null : "" + b,
      children: j,
      containerInfo: y,
      implementation: O
    };
  }
  var A = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(j, y) {
    if (j === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, vt.createPortal = function(j, y) {
    var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(o(299));
    return v(j, y, null, O);
  }, vt.flushSync = function(j) {
    var y = A.T, O = f.p;
    try {
      if (A.T = null, f.p = 2, j) return j();
    } finally {
      A.T = y, f.p = O, f.d.f();
    }
  }, vt.preconnect = function(j, y) {
    typeof j == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, f.d.C(j, y));
  }, vt.prefetchDNS = function(j) {
    typeof j == "string" && f.d.D(j);
  }, vt.preinit = function(j, y) {
    if (typeof j == "string" && y && typeof y.as == "string") {
      var O = y.as, b = C(O, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      O === "style" ? f.d.S(
        j,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: b,
          integrity: D,
          fetchPriority: Y
        }
      ) : O === "script" && f.d.X(j, {
        crossOrigin: b,
        integrity: D,
        fetchPriority: Y,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, vt.preinitModule = function(j, y) {
    if (typeof j == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var O = C(
            y.as,
            y.crossOrigin
          );
          f.d.M(j, {
            crossOrigin: O,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && f.d.M(j);
  }, vt.preload = function(j, y) {
    if (typeof j == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var O = y.as, b = C(O, y.crossOrigin);
      f.d.L(j, O, {
        crossOrigin: b,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, vt.preloadModule = function(j, y) {
    if (typeof j == "string")
      if (y) {
        var O = C(y.as, y.crossOrigin);
        f.d.m(j, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: O,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else f.d.m(j);
  }, vt.requestFormReset = function(j) {
    f.d.r(j);
  }, vt.unstable_batchedUpdates = function(j, y) {
    return j(y);
  }, vt.useFormState = function(j, y, O) {
    return A.H.useFormState(j, y, O);
  }, vt.useFormStatus = function() {
    return A.H.useHostTransitionStatus();
  }, vt.version = "19.2.8", vt;
}
var vm;
function ny() {
  if (vm) return Is.exports;
  vm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Is.exports = ay(), Is.exports;
}
var ym;
function iy() {
  if (ym) return di;
  ym = 1;
  var c = ly(), o = sr(), d = ny();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function v(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function A(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function j(e) {
    if (v(e) !== e)
      throw Error(f(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = v(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return j(n), e;
          if (u === a) return j(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var s = !1, r = n.child; r; ) {
          if (r === l) {
            s = !0, l = n, a = u;
            break;
          }
          if (r === a) {
            s = !0, a = n, l = u;
            break;
          }
          r = r.sibling;
        }
        if (!s) {
          for (r = u.child; r; ) {
            if (r === l) {
              s = !0, l = u, a = n;
              break;
            }
            if (r === a) {
              s = !0, a = u, l = n;
              break;
            }
            r = r.sibling;
          }
          if (!s) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function O(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = O(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, D = /* @__PURE__ */ Symbol.for("react.element"), Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), he = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), me = /* @__PURE__ */ Symbol.for("react.consumer"), fe = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), ze = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ae = Symbol.iterator;
  function je(e) {
    return e === null || typeof e != "object" ? null : (e = Ae && e[Ae] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var et = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ue(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === et ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case J:
        return "Profiler";
      case he:
        return "StrictMode";
      case W:
        return "Suspense";
      case I:
        return "SuspenseList";
      case H:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ee:
          return "Portal";
        case fe:
          return e.displayName || "Context";
        case me:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case w:
          return t = e.displayName || null, t !== null ? t : Ue(e.type) || "Memo";
        case P:
          t = e._payload, e = e._init;
          try {
            return Ue(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ve = Array.isArray, x = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, m = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, L = [], se = -1;
  function g(e) {
    return { current: e };
  }
  function U(e) {
    0 > se || (e.current = L[se], L[se] = null, se--);
  }
  function X(e, t) {
    se++, L[se] = e.current, e.current = t;
  }
  var Q = g(null), de = g(null), re = g(null), pe = g(null);
  function G(e, t) {
    switch (X(re, t), X(de, e), X(Q, null), t.nodeType) {
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
    U(Q), X(Q, e);
  }
  function ie() {
    U(Q), U(de), U(re);
  }
  function oe(e) {
    e.memoizedState !== null && X(pe, e);
    var t = Q.current, l = Md(t, e.type);
    t !== l && (X(de, e), X(Q, l));
  }
  function K(e) {
    de.current === e && (U(Q), U(de)), pe.current === e && (U(pe), ci._currentValue = V);
  }
  var tt, jt;
  function yt(e) {
    if (tt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        tt = t && t[1] || "", jt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + tt + e + jt;
  }
  var Ct = !1;
  function gt(e, t) {
    if (!e || Ct) return "";
    Ct = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
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
                } catch (z) {
                  var T = z;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (z) {
                  T = z;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                T = z;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (z) {
            if (z && T && typeof z.stack == "string")
              return [z.stack, T.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), s = u[0], r = u[1];
      if (s && r) {
        var h = s.split(`
`), _ = r.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === h.length || n === _.length)
          for (a = h.length - 1, n = _.length - 1; 1 <= a && 0 <= n && h[a] !== _[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || h[a] !== _[n]) {
                  var R = `
` + h[a].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ct = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? yt(l) : "";
  }
  function Cl(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return yt(e.type);
      case 16:
        return yt("Lazy");
      case 13:
        return e.child !== t && t !== null ? yt("Suspense Fallback") : yt("Suspense");
      case 19:
        return yt("SuspenseList");
      case 0:
      case 15:
        return gt(e.type, !1);
      case 11:
        return gt(e.type.render, !1);
      case 1:
        return gt(e.type, !0);
      case 31:
        return yt("Activity");
      default:
        return "";
    }
  }
  function at(e) {
    try {
      var t = "", l = null;
      do
        t += Cl(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var It = Object.prototype.hasOwnProperty, Dl = c.unstable_scheduleCallback, fl = c.unstable_cancelCallback, gn = c.unstable_shouldYield, st = c.unstable_requestPaint, Ze = c.unstable_now, pn = c.unstable_getCurrentPriorityLevel, xn = c.unstable_ImmediatePriority, hi = c.unstable_UserBlockingPriority, _a = c.unstable_NormalPriority, vi = c.unstable_LowPriority, bn = c.unstable_IdlePriority, Ta = c.log, Uu = c.unstable_setDisableYieldValue, ia = null, ht = null;
  function pt(e) {
    if (typeof Ta == "function" && Uu(e), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(ia, e);
      } catch {
      }
  }
  var nt = Math.clz32 ? Math.clz32 : Ru, jn = Math.log, yi = Math.LN2;
  function Ru(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jn(e) / yi | 0) | 0;
  }
  var Aa = 256, Ml = 262144, za = 4194304;
  function k(e) {
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
  function Z(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var r = a & 134217727;
    return r !== 0 ? (a = r & ~u, a !== 0 ? n = k(a) : (s &= r, s !== 0 ? n = k(s) : l || (l = r & ~e, l !== 0 && (n = k(l))))) : (r = a & ~u, r !== 0 ? n = k(r) : s !== 0 ? n = k(s) : l || (l = a & ~e, l !== 0 && (n = k(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function ye(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function xe(e, t) {
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
  function He() {
    var e = za;
    return za <<= 1, (za & 62914560) === 0 && (za = 4194304), e;
  }
  function it(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function le(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Dt(e, t, l, a, n, u) {
    var s = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var r = e.entanglements, h = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var R = 31 - nt(l), B = 1 << R;
      r[R] = 0, h[R] = -1;
      var T = _[R];
      if (T !== null)
        for (_[R] = null, R = 0; R < T.length; R++) {
          var z = T[R];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && nl(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function nl(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - nt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function il(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - nt(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function mr(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : qu(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function qu(e) {
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
  function Bu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hr() {
    var e = m.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tm(e.type));
  }
  function vr(e, t) {
    var l = m.p;
    try {
      return m.p = e, t();
    } finally {
      m.p = l;
    }
  }
  var Ol = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Ol, St = "__reactProps$" + Ol, wa = "__reactContainer$" + Ol, Hu = "__reactEvents$" + Ol, Ym = "__reactListeners$" + Ol, Gm = "__reactHandles$" + Ol, yr = "__reactResources$" + Ol, Sn = "__reactMarker$" + Ol;
  function ku(e) {
    delete e[rt], delete e[St], delete e[Hu], delete e[Ym], delete e[Gm];
  }
  function Ca(e) {
    var t = e[rt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[wa] || l[rt]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = kd(e); e !== null; ) {
            if (l = e[rt]) return l;
            e = kd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Da(e) {
    if (e = e[rt] || e[wa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Nn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Ma(e) {
    var t = e[yr];
    return t || (t = e[yr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Sn] = !0;
  }
  var gr = /* @__PURE__ */ new Set(), pr = {};
  function ua(e, t) {
    Oa(e, t), Oa(e + "Capture", t);
  }
  function Oa(e, t) {
    for (pr[e] = t, e = 0; e < t.length; e++)
      gr.add(t[e]);
  }
  var Vm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xr = {}, br = {};
  function Xm(e) {
    return It.call(br, e) ? !0 : It.call(xr, e) ? !1 : Vm.test(e) ? br[e] = !0 : (xr[e] = !0, !1);
  }
  function gi(e, t, l) {
    if (Xm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function pi(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function dl(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
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
  function Qm(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          l = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(s) {
          l = "" + s;
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
      e._valueTracker = Qm(
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
    var l = t.getValue(), a = "";
    return e && (a = jr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function xi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function Gt(e) {
    return e.replace(
      Zm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yu(e, t, l, a, n, u, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Gu(e, s, Yt(t)) : l != null ? Gu(e, s, Yt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Yt(r) : e.removeAttribute("name");
  }
  function Nr(e, t, l, a, n, u, s, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Lu(e);
        return;
      }
      l = l != null ? "" + Yt(l) : "", t = t != null ? "" + Yt(t) : l, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = r ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Lu(e);
  }
  function Gu(e, t, l) {
    t === "number" && xi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Ua(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Yt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Er(e, t, l) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Yt(l) : "";
  }
  function _r(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Ve(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Yt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Lu(e);
  }
  function Ra(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Km.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Ar(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && Tr(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Tr(e, u, t[u]);
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
  var Jm = /* @__PURE__ */ new Map([
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
  ]), $m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bi(e) {
    return $m.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ml() {
  }
  var Xu = null;
  function Qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var qa = null, Ba = null;
  function zr(e) {
    var t = Da(e);
    if (t && (e = t.stateNode)) {
      var l = e[St] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Yu(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Gt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[St] || null;
                if (!n) throw Error(f(90));
                Yu(
                  a,
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
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && Sr(a);
          }
          break e;
        case "textarea":
          Er(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Ua(e, !!l.multiple, t, !1);
      }
    }
  }
  var Zu = !1;
  function wr(e, t, l) {
    if (Zu) return e(t, l);
    Zu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Zu = !1, (qa !== null || Ba !== null) && (cu(), qa && (t = qa, e = Ba, Ba = qa = null, zr(t), e)))
        for (t = 0; t < e.length; t++) zr(e[t]);
    }
  }
  function En(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[St] || null;
    if (a === null) return null;
    l = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, t, typeof l)
      );
    return l;
  }
  var hl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = !1;
  if (hl)
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
  var Ul = null, Ju = null, ji = null;
  function Cr() {
    if (ji) return ji;
    var e, t = Ju, l = t.length, a, n = "value" in Ul ? Ul.value : Ul.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var s = l - e;
    for (a = 1; a <= s && t[l - a] === n[u - a]; a++) ;
    return ji = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Si(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ni() {
    return !0;
  }
  function Dr() {
    return !1;
  }
  function Nt(e) {
    function t(l, a, n, u, s) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (l = e[r], this[r] = l ? l(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ni : Dr, this.isPropagationStopped = Dr, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ni);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ni);
      },
      persist: function() {
      },
      isPersistent: Ni
    }), t;
  }
  var ca = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ei = Nt(ca), Tn = b({}, ca, { view: 0, detail: 0 }), Fm = Nt(Tn), $u, Fu, An, _i = b({}, Tn, {
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
  }), Mr = Nt(_i), Wm = b({}, _i, { dataTransfer: 0 }), Im = Nt(Wm), Pm = b({}, Tn, { relatedTarget: 0 }), Wu = Nt(Pm), eh = b({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), th = Nt(eh), lh = b({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ah = Nt(lh), nh = b({}, ca, { data: 0 }), Or = Nt(nh), ih = {
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
  }, uh = {
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
  }, ch = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
  }
  function Iu() {
    return sh;
  }
  var rh = b({}, Tn, {
    key: function(e) {
      if (e.key) {
        var t = ih[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uh[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Si(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), oh = Nt(rh), fh = b({}, _i, {
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
  }), Ur = Nt(fh), dh = b({}, Tn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu
  }), mh = Nt(dh), hh = b({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vh = Nt(hh), yh = b({}, _i, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gh = Nt(yh), ph = b({}, ca, {
    newState: 0,
    oldState: 0
  }), xh = Nt(ph), bh = [9, 13, 27, 32], Pu = hl && "CompositionEvent" in window, zn = null;
  hl && "documentMode" in document && (zn = document.documentMode);
  var jh = hl && "TextEvent" in window && !zn, Rr = hl && (!Pu || zn && 8 < zn && 11 >= zn), qr = " ", Br = !1;
  function Hr(e, t) {
    switch (e) {
      case "keyup":
        return bh.indexOf(t.keyCode) !== -1;
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
  var Ha = !1;
  function Sh(e, t) {
    switch (e) {
      case "compositionend":
        return kr(t);
      case "keypress":
        return t.which !== 32 ? null : (Br = !0, qr);
      case "textInput":
        return e = t.data, e === qr && Br ? null : e;
      default:
        return null;
    }
  }
  function Nh(e, t) {
    if (Ha)
      return e === "compositionend" || !Pu && Hr(e, t) ? (e = Cr(), ji = Ju = Ul = null, Ha = !1, e) : null;
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
  var Eh = {
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
    return t === "input" ? !!Eh[e.type] : t === "textarea";
  }
  function Yr(e, t, l, a) {
    qa ? Ba ? Ba.push(a) : Ba = [a] : qa = a, t = hu(t, "onChange"), 0 < t.length && (l = new Ei(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var wn = null, Cn = null;
  function _h(e) {
    _d(e, 0);
  }
  function Ti(e) {
    var t = Nn(e);
    if (Sr(t)) return e;
  }
  function Gr(e, t) {
    if (e === "change") return t;
  }
  var Vr = !1;
  if (hl) {
    var ec;
    if (hl) {
      var tc = "oninput" in document;
      if (!tc) {
        var Xr = document.createElement("div");
        Xr.setAttribute("oninput", "return;"), tc = typeof Xr.oninput == "function";
      }
      ec = tc;
    } else ec = !1;
    Vr = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function Qr() {
    wn && (wn.detachEvent("onpropertychange", Zr), Cn = wn = null);
  }
  function Zr(e) {
    if (e.propertyName === "value" && Ti(Cn)) {
      var t = [];
      Yr(
        t,
        Cn,
        e,
        Qu(e)
      ), wr(_h, t);
    }
  }
  function Th(e, t, l) {
    e === "focusin" ? (Qr(), wn = t, Cn = l, wn.attachEvent("onpropertychange", Zr)) : e === "focusout" && Qr();
  }
  function Ah(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ti(Cn);
  }
  function zh(e, t) {
    if (e === "click") return Ti(t);
  }
  function wh(e, t) {
    if (e === "input" || e === "change")
      return Ti(t);
  }
  function Ch(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : Ch;
  function Dn(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!It.call(t, n) || !Mt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Kr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jr(e, t) {
    var l = Kr(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Kr(l);
    }
  }
  function $r(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $r(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Fr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = xi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = xi(e.document);
    }
    return t;
  }
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Dh = hl && "documentMode" in document && 11 >= document.documentMode, ka = null, ac = null, Mn = null, nc = !1;
  function Wr(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nc || ka == null || ka !== xi(a) || (a = ka, "selectionStart" in a && lc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Mn && Dn(Mn, a) || (Mn = a, a = hu(ac, "onSelect"), 0 < a.length && (t = new Ei(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = ka)));
  }
  function sa(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var La = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, ic = {}, Ir = {};
  hl && (Ir = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function ra(e) {
    if (ic[e]) return ic[e];
    if (!La[e]) return e;
    var t = La[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Ir)
        return ic[e] = t[l];
    return e;
  }
  var Pr = ra("animationend"), eo = ra("animationiteration"), to = ra("animationstart"), Mh = ra("transitionrun"), Oh = ra("transitionstart"), Uh = ra("transitioncancel"), lo = ra("transitionend"), ao = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function Pt(e, t) {
    ao.set(e, t), ua(t, [e]);
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
  }, Vt = [], Ya = 0, cc = 0;
  function zi() {
    for (var e = Ya, t = cc = Ya = 0; t < e; ) {
      var l = Vt[t];
      Vt[t++] = null;
      var a = Vt[t];
      Vt[t++] = null;
      var n = Vt[t];
      Vt[t++] = null;
      var u = Vt[t];
      if (Vt[t++] = null, a !== null && n !== null) {
        var s = a.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n;
      }
      u !== 0 && no(l, n, u);
    }
  }
  function wi(e, t, l, a) {
    Vt[Ya++] = e, Vt[Ya++] = t, Vt[Ya++] = l, Vt[Ya++] = a, cc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function sc(e, t, l, a) {
    return wi(e, t, l, a), Ci(e);
  }
  function oa(e, t) {
    return wi(e, null, null, t), Ci(e);
  }
  function no(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - nt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Ci(e) {
    if (50 < ei)
      throw ei = 0, gs = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ga = {};
  function Rh(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, l, a) {
    return new Rh(e, t, l, a);
  }
  function rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function vl(e, t) {
    var l = e.alternate;
    return l === null ? (l = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function io(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Di(e, t, l, a, n, u) {
    var s = 0;
    if (a = e, typeof e == "function") rc(e) && (s = 1);
    else if (typeof e == "string")
      s = Lv(
        e,
        l,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case H:
          return e = Ot(31, l, t, n), e.elementType = H, e.lanes = u, e;
        case te:
          return fa(l.children, n, u, t);
        case he:
          s = 8, n |= 24;
          break;
        case J:
          return e = Ot(12, l, t, n | 2), e.elementType = J, e.lanes = u, e;
        case W:
          return e = Ot(13, l, t, n), e.elementType = W, e.lanes = u, e;
        case I:
          return e = Ot(19, l, t, n), e.elementType = I, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case fe:
                s = 10;
                break e;
              case me:
                s = 9;
                break e;
              case ne:
                s = 11;
                break e;
              case w:
                s = 14;
                break e;
              case P:
                s = 16, a = null;
                break e;
            }
          s = 29, l = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ot(s, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function fa(e, t, l, a) {
    return e = Ot(7, e, a, t), e.lanes = l, e;
  }
  function oc(e, t, l) {
    return e = Ot(6, e, null, t), e.lanes = l, e;
  }
  function uo(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function fc(e, t, l) {
    return t = Ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var co = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = co.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: at(t)
      }, co.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: at(t)
    };
  }
  var Va = [], Xa = 0, Mi = null, On = 0, Qt = [], Zt = 0, Rl = null, ul = 1, cl = "";
  function yl(e, t) {
    Va[Xa++] = On, Va[Xa++] = Mi, Mi = e, On = t;
  }
  function so(e, t, l) {
    Qt[Zt++] = ul, Qt[Zt++] = cl, Qt[Zt++] = Rl, Rl = e;
    var a = ul;
    e = cl;
    var n = 32 - nt(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - nt(t) + n;
    if (30 < u) {
      var s = n - n % 5;
      u = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, ul = 1 << 32 - nt(t) + n | l << n | a, cl = u + e;
    } else
      ul = 1 << u | l << n | a, cl = e;
  }
  function dc(e) {
    e.return !== null && (yl(e, 1), so(e, 1, 0));
  }
  function mc(e) {
    for (; e === Mi; )
      Mi = Va[--Xa], Va[Xa] = null, On = Va[--Xa], Va[Xa] = null;
    for (; e === Rl; )
      Rl = Qt[--Zt], Qt[Zt] = null, cl = Qt[--Zt], Qt[Zt] = null, ul = Qt[--Zt], Qt[Zt] = null;
  }
  function ro(e, t) {
    Qt[Zt++] = ul, Qt[Zt++] = cl, Qt[Zt++] = Rl, ul = t.id, cl = t.overflow, Rl = e;
  }
  var ot = null, Le = null, Te = !1, ql = null, Kt = !1, hc = Error(f(519));
  function Bl(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Un(Xt(t, e)), hc;
  }
  function oo(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[rt] = e, t[St] = a, l) {
      case "dialog":
        Ne("cancel", t), Ne("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < li.length; l++)
          Ne(li[l], t);
        break;
      case "source":
        Ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", t), Ne("load", t);
        break;
      case "details":
        Ne("toggle", t);
        break;
      case "input":
        Ne("invalid", t), Nr(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Ne("invalid", t);
        break;
      case "textarea":
        Ne("invalid", t), _r(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || wd(t.textContent, l) ? (a.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), a.onScroll != null && Ne("scroll", t), a.onScrollEnd != null && Ne("scrollend", t), a.onClick != null && (t.onclick = ml), t = !0) : t = !1, t || Bl(e, !0);
  }
  function fo(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
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
          ot = ot.return;
      }
  }
  function Qa(e) {
    if (e !== ot) return !1;
    if (!Te) return fo(e), Te = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ms(e.type, e.memoizedProps)), l = !l), l && Le && Bl(e), fo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Le = Hd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Le = Hd(e);
    } else
      t === 27 ? (t = Le, Wl(e.type) ? (e = Bs, Bs = null, Le = e) : Le = t) : Le = ot ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function da() {
    Le = ot = null, Te = !1;
  }
  function vc() {
    var e = ql;
    return e !== null && (At === null ? At = e : At.push.apply(
      At,
      e
    ), ql = null), e;
  }
  function Un(e) {
    ql === null ? ql = [e] : ql.push(e);
  }
  var yc = g(null), ma = null, gl = null;
  function Hl(e, t, l) {
    X(yc, t._currentValue), t._currentValue = l;
  }
  function pl(e) {
    e._currentValue = yc.current, U(yc);
  }
  function gc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function pc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var s = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var r = u;
          u = n;
          for (var h = 0; h < t.length; h++)
            if (r.context === t[h]) {
              u.lanes |= l, r = u.alternate, r !== null && (r.lanes |= l), gc(
                u.return,
                l,
                e
              ), a || (s = null);
              break e;
            }
          u = r.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(f(341));
        s.lanes |= l, u = s.alternate, u !== null && (u.lanes |= l), gc(s, l, e), s = null;
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
  function Za(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(f(387));
        if (s = s.memoizedProps, s !== null) {
          var r = n.type;
          Mt(n.pendingProps.value, s.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (n === pe.current) {
        if (s = n.alternate, s === null) throw Error(f(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(ci) : e = [ci]);
      }
      n = n.return;
    }
    e !== null && pc(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function Oi(e) {
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
  function ha(e) {
    ma = e, gl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return mo(ma, e);
  }
  function Ui(e, t) {
    return ma === null && ha(e), mo(e, t);
  }
  function mo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, gl === null) {
      if (e === null) throw Error(f(308));
      gl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else gl = gl.next = t;
    return l;
  }
  var qh = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Bh = c.unstable_scheduleCallback, Hh = c.unstable_NormalPriority, Fe = {
    $$typeof: fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xc() {
    return {
      controller: new qh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rn(e) {
    e.refCount--, e.refCount === 0 && Bh(Hh, function() {
      e.controller.abort();
    });
  }
  var qn = null, bc = 0, Ka = 0, Ja = null;
  function kh(e, t) {
    if (qn === null) {
      var l = qn = [];
      bc = 0, Ka = Ns(), Ja = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return bc++, t.then(ho, ho), t;
  }
  function ho() {
    if (--bc === 0 && qn !== null) {
      Ja !== null && (Ja.status = "fulfilled");
      var e = qn;
      qn = null, Ka = 0, Ja = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Lh(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var vo = x.S;
  x.S = function(e, t) {
    Pf = Ze(), typeof t == "object" && t !== null && typeof t.then == "function" && kh(e, t), vo !== null && vo(e, t);
  };
  var va = g(null);
  function jc() {
    var e = va.current;
    return e !== null ? e : ke.pooledCache;
  }
  function Ri(e, t) {
    t === null ? X(va, va.current) : X(va, t.pool);
  }
  function yo() {
    var e = jc();
    return e === null ? null : { parent: Fe._currentValue, pool: e };
  }
  var $a = Error(f(460)), Sc = Error(f(474)), qi = Error(f(542)), Bi = { then: function() {
  } };
  function go(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function po(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(ml, ml), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, bo(e), e;
      default:
        if (typeof t.status == "string") t.then(ml, ml);
        else {
          if (e = ke, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, bo(e), e;
        }
        throw ga = t, $a;
    }
  }
  function ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ga = l, $a) : l;
    }
  }
  var ga = null;
  function xo() {
    if (ga === null) throw Error(f(459));
    var e = ga;
    return ga = null, e;
  }
  function bo(e) {
    if (e === $a || e === qi)
      throw Error(f(483));
  }
  var Fa = null, Bn = 0;
  function Hi(e) {
    var t = Bn;
    return Bn += 1, Fa === null && (Fa = []), po(Fa, e, t);
  }
  function Hn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ki(e, t) {
    throw t.$$typeof === D ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function jo(e) {
    function t(S, p) {
      if (e) {
        var E = S.deletions;
        E === null ? (S.deletions = [p], S.flags |= 16) : E.push(p);
      }
    }
    function l(S, p) {
      if (!e) return null;
      for (; p !== null; )
        t(S, p), p = p.sibling;
      return null;
    }
    function a(S) {
      for (var p = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? p.set(S.key, S) : p.set(S.index, S), S = S.sibling;
      return p;
    }
    function n(S, p) {
      return S = vl(S, p), S.index = 0, S.sibling = null, S;
    }
    function u(S, p, E) {
      return S.index = E, e ? (E = S.alternate, E !== null ? (E = E.index, E < p ? (S.flags |= 67108866, p) : E) : (S.flags |= 67108866, p)) : (S.flags |= 1048576, p);
    }
    function s(S) {
      return e && S.alternate === null && (S.flags |= 67108866), S;
    }
    function r(S, p, E, q) {
      return p === null || p.tag !== 6 ? (p = oc(E, S.mode, q), p.return = S, p) : (p = n(p, E), p.return = S, p);
    }
    function h(S, p, E, q) {
      var ae = E.type;
      return ae === te ? R(
        S,
        p,
        E.props.children,
        q,
        E.key
      ) : p !== null && (p.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === P && ya(ae) === p.type) ? (p = n(p, E.props), Hn(p, E), p.return = S, p) : (p = Di(
        E.type,
        E.key,
        E.props,
        null,
        S.mode,
        q
      ), Hn(p, E), p.return = S, p);
    }
    function _(S, p, E, q) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== E.containerInfo || p.stateNode.implementation !== E.implementation ? (p = fc(E, S.mode, q), p.return = S, p) : (p = n(p, E.children || []), p.return = S, p);
    }
    function R(S, p, E, q, ae) {
      return p === null || p.tag !== 7 ? (p = fa(
        E,
        S.mode,
        q,
        ae
      ), p.return = S, p) : (p = n(p, E), p.return = S, p);
    }
    function B(S, p, E) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = oc(
          "" + p,
          S.mode,
          E
        ), p.return = S, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Y:
            return E = Di(
              p.type,
              p.key,
              p.props,
              null,
              S.mode,
              E
            ), Hn(E, p), E.return = S, E;
          case ee:
            return p = fc(
              p,
              S.mode,
              E
            ), p.return = S, p;
          case P:
            return p = ya(p), B(S, p, E);
        }
        if (Ve(p) || je(p))
          return p = fa(
            p,
            S.mode,
            E,
            null
          ), p.return = S, p;
        if (typeof p.then == "function")
          return B(S, Hi(p), E);
        if (p.$$typeof === fe)
          return B(
            S,
            Ui(S, p),
            E
          );
        ki(S, p);
      }
      return null;
    }
    function T(S, p, E, q) {
      var ae = p !== null ? p.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return ae !== null ? null : r(S, p, "" + E, q);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Y:
            return E.key === ae ? h(S, p, E, q) : null;
          case ee:
            return E.key === ae ? _(S, p, E, q) : null;
          case P:
            return E = ya(E), T(S, p, E, q);
        }
        if (Ve(E) || je(E))
          return ae !== null ? null : R(S, p, E, q, null);
        if (typeof E.then == "function")
          return T(
            S,
            p,
            Hi(E),
            q
          );
        if (E.$$typeof === fe)
          return T(
            S,
            p,
            Ui(S, E),
            q
          );
        ki(S, E);
      }
      return null;
    }
    function z(S, p, E, q, ae) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return S = S.get(E) || null, r(p, S, "" + q, ae);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case Y:
            return S = S.get(
              q.key === null ? E : q.key
            ) || null, h(p, S, q, ae);
          case ee:
            return S = S.get(
              q.key === null ? E : q.key
            ) || null, _(p, S, q, ae);
          case P:
            return q = ya(q), z(
              S,
              p,
              E,
              q,
              ae
            );
        }
        if (Ve(q) || je(q))
          return S = S.get(E) || null, R(p, S, q, ae, null);
        if (typeof q.then == "function")
          return z(
            S,
            p,
            E,
            Hi(q),
            ae
          );
        if (q.$$typeof === fe)
          return z(
            S,
            p,
            E,
            Ui(p, q),
            ae
          );
        ki(p, q);
      }
      return null;
    }
    function $(S, p, E, q) {
      for (var ae = null, we = null, F = p, be = p = 0, _e = null; F !== null && be < E.length; be++) {
        F.index > be ? (_e = F, F = null) : _e = F.sibling;
        var Ce = T(
          S,
          F,
          E[be],
          q
        );
        if (Ce === null) {
          F === null && (F = _e);
          break;
        }
        e && F && Ce.alternate === null && t(S, F), p = u(Ce, p, be), we === null ? ae = Ce : we.sibling = Ce, we = Ce, F = _e;
      }
      if (be === E.length)
        return l(S, F), Te && yl(S, be), ae;
      if (F === null) {
        for (; be < E.length; be++)
          F = B(S, E[be], q), F !== null && (p = u(
            F,
            p,
            be
          ), we === null ? ae = F : we.sibling = F, we = F);
        return Te && yl(S, be), ae;
      }
      for (F = a(F); be < E.length; be++)
        _e = z(
          F,
          S,
          be,
          E[be],
          q
        ), _e !== null && (e && _e.alternate !== null && F.delete(
          _e.key === null ? be : _e.key
        ), p = u(
          _e,
          p,
          be
        ), we === null ? ae = _e : we.sibling = _e, we = _e);
      return e && F.forEach(function(la) {
        return t(S, la);
      }), Te && yl(S, be), ae;
    }
    function ue(S, p, E, q) {
      if (E == null) throw Error(f(151));
      for (var ae = null, we = null, F = p, be = p = 0, _e = null, Ce = E.next(); F !== null && !Ce.done; be++, Ce = E.next()) {
        F.index > be ? (_e = F, F = null) : _e = F.sibling;
        var la = T(S, F, Ce.value, q);
        if (la === null) {
          F === null && (F = _e);
          break;
        }
        e && F && la.alternate === null && t(S, F), p = u(la, p, be), we === null ? ae = la : we.sibling = la, we = la, F = _e;
      }
      if (Ce.done)
        return l(S, F), Te && yl(S, be), ae;
      if (F === null) {
        for (; !Ce.done; be++, Ce = E.next())
          Ce = B(S, Ce.value, q), Ce !== null && (p = u(Ce, p, be), we === null ? ae = Ce : we.sibling = Ce, we = Ce);
        return Te && yl(S, be), ae;
      }
      for (F = a(F); !Ce.done; be++, Ce = E.next())
        Ce = z(F, S, be, Ce.value, q), Ce !== null && (e && Ce.alternate !== null && F.delete(Ce.key === null ? be : Ce.key), p = u(Ce, p, be), we === null ? ae = Ce : we.sibling = Ce, we = Ce);
      return e && F.forEach(function(Wv) {
        return t(S, Wv);
      }), Te && yl(S, be), ae;
    }
    function Be(S, p, E, q) {
      if (typeof E == "object" && E !== null && E.type === te && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Y:
            e: {
              for (var ae = E.key; p !== null; ) {
                if (p.key === ae) {
                  if (ae = E.type, ae === te) {
                    if (p.tag === 7) {
                      l(
                        S,
                        p.sibling
                      ), q = n(
                        p,
                        E.props.children
                      ), q.return = S, S = q;
                      break e;
                    }
                  } else if (p.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === P && ya(ae) === p.type) {
                    l(
                      S,
                      p.sibling
                    ), q = n(p, E.props), Hn(q, E), q.return = S, S = q;
                    break e;
                  }
                  l(S, p);
                  break;
                } else t(S, p);
                p = p.sibling;
              }
              E.type === te ? (q = fa(
                E.props.children,
                S.mode,
                q,
                E.key
              ), q.return = S, S = q) : (q = Di(
                E.type,
                E.key,
                E.props,
                null,
                S.mode,
                q
              ), Hn(q, E), q.return = S, S = q);
            }
            return s(S);
          case ee:
            e: {
              for (ae = E.key; p !== null; ) {
                if (p.key === ae)
                  if (p.tag === 4 && p.stateNode.containerInfo === E.containerInfo && p.stateNode.implementation === E.implementation) {
                    l(
                      S,
                      p.sibling
                    ), q = n(p, E.children || []), q.return = S, S = q;
                    break e;
                  } else {
                    l(S, p);
                    break;
                  }
                else t(S, p);
                p = p.sibling;
              }
              q = fc(E, S.mode, q), q.return = S, S = q;
            }
            return s(S);
          case P:
            return E = ya(E), Be(
              S,
              p,
              E,
              q
            );
        }
        if (Ve(E))
          return $(
            S,
            p,
            E,
            q
          );
        if (je(E)) {
          if (ae = je(E), typeof ae != "function") throw Error(f(150));
          return E = ae.call(E), ue(
            S,
            p,
            E,
            q
          );
        }
        if (typeof E.then == "function")
          return Be(
            S,
            p,
            Hi(E),
            q
          );
        if (E.$$typeof === fe)
          return Be(
            S,
            p,
            Ui(S, E),
            q
          );
        ki(S, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, p !== null && p.tag === 6 ? (l(S, p.sibling), q = n(p, E), q.return = S, S = q) : (l(S, p), q = oc(E, S.mode, q), q.return = S, S = q), s(S)) : l(S, p);
    }
    return function(S, p, E, q) {
      try {
        Bn = 0;
        var ae = Be(
          S,
          p,
          E,
          q
        );
        return Fa = null, ae;
      } catch (F) {
        if (F === $a || F === qi) throw F;
        var we = Ot(29, F, null, S.mode);
        return we.lanes = q, we.return = S, we;
      }
    };
  }
  var pa = jo(!0), So = jo(!1), kl = !1;
  function Nc(e) {
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
  function Ll(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (De & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Ci(e), no(e, null, l), t;
    }
    return wi(e, a, t, l), Ci(e);
  }
  function kn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, il(e, l);
    }
  }
  function _c(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = s : u = u.next = s, l = l.next;
        } while (l !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Tc = !1;
  function Ln() {
    if (Tc) {
      var e = Ja;
      if (e !== null) throw e;
    }
  }
  function Yn(e, t, l, a) {
    Tc = !1;
    var n = e.updateQueue;
    kl = !1;
    var u = n.firstBaseUpdate, s = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var h = r, _ = h.next;
      h.next = null, s === null ? u = _ : s.next = _, s = h;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, r = R.lastBaseUpdate, r !== s && (r === null ? R.firstBaseUpdate = _ : r.next = _, R.lastBaseUpdate = h));
    }
    if (u !== null) {
      var B = n.baseState;
      s = 0, R = _ = h = null, r = u;
      do {
        var T = r.lane & -536870913, z = T !== r.lane;
        if (z ? (Ee & T) === T : (a & T) === T) {
          T !== 0 && T === Ka && (Tc = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, ue = r;
            T = t;
            var Be = l;
            switch (ue.tag) {
              case 1:
                if ($ = ue.payload, typeof $ == "function") {
                  B = $.call(Be, B, T);
                  break e;
                }
                B = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ue.payload, T = typeof $ == "function" ? $.call(Be, B, T) : $, T == null) break e;
                B = b({}, B, T);
                break e;
              case 2:
                kl = !0;
            }
          }
          T = r.callback, T !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [T] : z.push(T));
        } else
          z = {
            lane: T,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, R === null ? (_ = R = z, h = B) : R = R.next = z, s |= T;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          z = r, r = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
        }
      } while (!0);
      R === null && (h = B), n.baseState = h, n.firstBaseUpdate = _, n.lastBaseUpdate = R, u === null && (n.shared.lanes = 0), Zl |= s, e.lanes = s, e.memoizedState = B;
    }
  }
  function No(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Eo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        No(l[e], t);
  }
  var Wa = g(null), Li = g(0);
  function _o(e, t) {
    e = Al, X(Li, e), X(Wa, t), Al = e | t.baseLanes;
  }
  function Ac() {
    X(Li, Al), X(Wa, Wa.current);
  }
  function zc() {
    Al = Li.current, U(Wa), U(Li);
  }
  var Ut = g(null), Jt = null;
  function Gl(e) {
    var t = e.alternate;
    X(Ke, Ke.current & 1), X(Ut, e), Jt === null && (t === null || Wa.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function wc(e) {
    X(Ke, Ke.current), X(Ut, e), Jt === null && (Jt = e);
  }
  function To(e) {
    e.tag === 22 ? (X(Ke, Ke.current), X(Ut, e), Jt === null && (Jt = e)) : Vl();
  }
  function Vl() {
    X(Ke, Ke.current), X(Ut, Ut.current);
  }
  function Rt(e) {
    U(Ut), Jt === e && (Jt = null), U(Ke);
  }
  var Ke = g(0);
  function Yi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Rs(l) || qs(l)))
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
  var xl = 0, ge = null, Re = null, We = null, Gi = !1, Ia = !1, xa = !1, Vi = 0, Gn = 0, Pa = null, Yh = 0;
  function Xe() {
    throw Error(f(321));
  }
  function Cc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Mt(e[l], t[l])) return !1;
    return !0;
  }
  function Dc(e, t, l, a, n, u) {
    return xl = u, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? of : Zc, xa = !1, u = l(a, n), xa = !1, Ia && (u = zo(
      t,
      l,
      a,
      n
    )), Ao(e), u;
  }
  function Ao(e) {
    x.H = Qn;
    var t = Re !== null && Re.next !== null;
    if (xl = 0, We = Re = ge = null, Gi = !1, Gn = 0, Pa = null, t) throw Error(f(300));
    e === null || Ie || (e = e.dependencies, e !== null && Oi(e) && (Ie = !0));
  }
  function zo(e, t, l, a) {
    ge = e;
    var n = 0;
    do {
      if (Ia && (Pa = null), Gn = 0, Ia = !1, 25 <= n) throw Error(f(301));
      if (n += 1, We = Re = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      x.H = ff, u = t(l, a);
    } while (Ia);
    return u;
  }
  function Gh() {
    var e = x.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Vn(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ge.flags |= 1024), t;
  }
  function Mc() {
    var e = Vi !== 0;
    return Vi = 0, e;
  }
  function Oc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Uc(e) {
    if (Gi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Gi = !1;
    }
    xl = 0, We = Re = ge = null, Ia = !1, Gn = Vi = 0, Pa = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? ge.memoizedState = We = e : We = We.next = e, We;
  }
  function Je() {
    if (Re === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = We === null ? ge.memoizedState : We.next;
    if (t !== null)
      We = t, Re = e;
    else {
      if (e === null)
        throw ge.alternate === null ? Error(f(467)) : Error(f(310));
      Re = e, e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null
      }, We === null ? ge.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function Xi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vn(e) {
    var t = Gn;
    return Gn += 1, Pa === null && (Pa = []), e = po(Pa, e, t), t = ge, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? of : Zc), e;
  }
  function Qi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vn(e);
      if (e.$$typeof === fe) return ft(e);
    }
    throw Error(f(438, String(e)));
  }
  function Rc(e) {
    var t = null, l = ge.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ge.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Xi(), ge.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = ze;
    return t.index++, l;
  }
  function bl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zi(e) {
    var t = Je();
    return qc(t, Re, e);
  }
  function qc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = u.next, u.next = s;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var r = s = null, h = null, _ = t, R = !1;
      do {
        var B = _.lane & -536870913;
        if (B !== _.lane ? (Ee & B) === B : (xl & B) === B) {
          var T = _.revertLane;
          if (T === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), B === Ka && (R = !0);
          else if ((xl & T) === T) {
            _ = _.next, T === Ka && (R = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, h === null ? (r = h = B, s = u) : h = h.next = B, ge.lanes |= T, Zl |= T;
          B = _.action, xa && l(u, B), u = _.hasEagerState ? _.eagerState : l(u, B);
        } else
          T = {
            lane: B,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, h === null ? (r = h = T, s = u) : h = h.next = T, ge.lanes |= B, Zl |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (h === null ? s = u : h.next = r, !Mt(u, e.memoizedState) && (Ie = !0, R && (l = Ja, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = s, e.baseQueue = h, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Bc(e) {
    var t = Je(), l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var s = n = n.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== n);
      Mt(u, t.memoizedState) || (Ie = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function wo(e, t, l) {
    var a = ge, n = Je(), u = Te;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var s = !Mt(
      (Re || n).memoizedState,
      l
    );
    if (s && (n.memoizedState = l, Ie = !0), n = n.queue, Lc(Mo.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || s || We !== null && We.memoizedState.tag & 1) {
      if (a.flags |= 2048, en(
        9,
        { destroy: void 0 },
        Do.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), ke === null) throw Error(f(349));
      u || (xl & 127) !== 0 || Co(a, t, l);
    }
    return l;
  }
  function Co(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ge.updateQueue, t === null ? (t = Xi(), ge.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Do(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Oo(t) && Uo(e);
  }
  function Mo(e, t, l) {
    return l(function() {
      Oo(t) && Uo(e);
    });
  }
  function Oo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Mt(e, l);
    } catch {
      return !0;
    }
  }
  function Uo(e) {
    var t = oa(e, 2);
    t !== null && zt(t, e, 2);
  }
  function Hc(e) {
    var t = xt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), xa) {
        pt(!0);
        try {
          l();
        } finally {
          pt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bl,
      lastRenderedState: e
    }, t;
  }
  function Ro(e, t, l, a) {
    return e.baseState = l, qc(
      e,
      Re,
      typeof a == "function" ? a : bl
    );
  }
  function Vh(e, t, l, a, n) {
    if ($i(e)) throw Error(f(485));
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
      x.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, qo(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function qo(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = x.T, s = {};
      x.T = s;
      try {
        var r = l(n, a), h = x.S;
        h !== null && h(s, r), Bo(e, t, r);
      } catch (_) {
        kc(e, t, _);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), x.T = u;
      }
    } else
      try {
        u = l(n, a), Bo(e, t, u);
      } catch (_) {
        kc(e, t, _);
      }
  }
  function Bo(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Ho(e, t, a);
      },
      function(a) {
        return kc(e, t, a);
      }
    ) : Ho(e, t, l);
  }
  function Ho(e, t, l) {
    t.status = "fulfilled", t.value = l, ko(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, qo(e, l)));
  }
  function kc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, ko(t), t = t.next;
      while (t !== a);
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
    if (Te) {
      var l = ke.formState;
      if (l !== null) {
        e: {
          var a = ge;
          if (Te) {
            if (Le) {
              t: {
                for (var n = Le, u = Kt; n.nodeType !== 8; ) {
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
                Le = $t(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            Bl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = xt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lo,
      lastRenderedState: t
    }, l.queue = a, l = cf.bind(
      null,
      ge,
      a
    ), a.dispatch = l, a = Hc(!1), u = Qc.bind(
      null,
      ge,
      !1,
      a.queue
    ), a = xt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = Vh.bind(
      null,
      ge,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Go(e) {
    var t = Je();
    return Vo(t, Re, e);
  }
  function Vo(e, t, l) {
    if (t = qc(
      e,
      t,
      Lo
    )[0], e = Zi(bl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Vn(t);
      } catch (s) {
        throw s === $a ? qi : s;
      }
    else a = t;
    t = Je();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ge.flags |= 2048, en(
      9,
      { destroy: void 0 },
      Xh.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function Xh(e, t) {
    e.action = t;
  }
  function Xo(e) {
    var t = Je(), l = Re;
    if (l !== null)
      return Vo(t, l, e);
    Je(), t = t.memoizedState, l = Je();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function en(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ge.updateQueue, t === null && (t = Xi(), ge.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Qo() {
    return Je().memoizedState;
  }
  function Ki(e, t, l, a) {
    var n = xt();
    ge.flags |= e, n.memoizedState = en(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ji(e, t, l, a) {
    var n = Je();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Re !== null && a !== null && Cc(a, Re.memoizedState.deps) ? n.memoizedState = en(t, u, l, a) : (ge.flags |= e, n.memoizedState = en(
      1 | t,
      u,
      l,
      a
    ));
  }
  function Zo(e, t) {
    Ki(8390656, 8, e, t);
  }
  function Lc(e, t) {
    Ji(2048, 8, e, t);
  }
  function Qh(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null)
      t = Xi(), ge.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Ko(e) {
    var t = Je().memoizedState;
    return Qh({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(f(440));
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
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Wo(e, t, l) {
    l = l != null ? l.concat([e]) : null, Ji(4, 4, Fo.bind(null, t, e), l);
  }
  function Yc() {
  }
  function Io(e, t) {
    var l = Je();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Cc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Po(e, t) {
    var l = Je();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Cc(t, a[1]))
      return a[0];
    if (a = e(), xa) {
      pt(!0);
      try {
        e();
      } finally {
        pt(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Gc(e, t, l) {
    return l === void 0 || (xl & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = td(), ge.lanes |= e, Zl |= e, l);
  }
  function ef(e, t, l, a) {
    return Mt(l, t) ? l : Wa.current !== null ? (e = Gc(e, l, a), Mt(e, t) || (Ie = !0), e) : (xl & 42) === 0 || (xl & 1073741824) !== 0 && (Ee & 261930) === 0 ? (Ie = !0, e.memoizedState = l) : (e = td(), ge.lanes |= e, Zl |= e, t);
  }
  function tf(e, t, l, a, n) {
    var u = m.p;
    m.p = u !== 0 && 8 > u ? u : 8;
    var s = x.T, r = {};
    x.T = r, Qc(e, !1, t, l);
    try {
      var h = n(), _ = x.S;
      if (_ !== null && _(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var R = Lh(
          h,
          a
        );
        Xn(
          e,
          t,
          R,
          Ht(e)
        );
      } else
        Xn(
          e,
          t,
          a,
          Ht(e)
        );
    } catch (B) {
      Xn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Ht()
      );
    } finally {
      m.p = u, s !== null && r.types !== null && (s.types = r.types), x.T = s;
    }
  }
  function Zh() {
  }
  function Vc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = lf(e).queue;
    tf(
      e,
      n,
      t,
      V,
      l === null ? Zh : function() {
        return af(e), l(a);
      }
    );
  }
  function lf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bl,
        lastRenderedState: V
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function af(e) {
    var t = lf(e);
    t.next === null && (t = e.alternate.memoizedState), Xn(
      e,
      t.next.queue,
      {},
      Ht()
    );
  }
  function Xc() {
    return ft(ci);
  }
  function nf() {
    return Je().memoizedState;
  }
  function uf() {
    return Je().memoizedState;
  }
  function Kh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ht();
          e = Ll(l);
          var a = Yl(t, e, l);
          a !== null && (zt(a, t, l), kn(a, t, l)), t = { cache: xc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Jh(e, t, l) {
    var a = Ht();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $i(e) ? sf(t, l) : (l = sc(e, t, l, a), l !== null && (zt(l, e, a), rf(l, t, a)));
  }
  function cf(e, t, l) {
    var a = Ht();
    Xn(e, t, l, a);
  }
  function Xn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($i(e)) sf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, r = u(s, l);
          if (n.hasEagerState = !0, n.eagerState = r, Mt(r, s))
            return wi(e, t, n, 0), ke === null && zi(), !1;
        } catch {
        }
      if (l = sc(e, t, n, a), l !== null)
        return zt(l, e, a), rf(l, t, a), !0;
    }
    return !1;
  }
  function Qc(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Ns(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $i(e)) {
      if (t) throw Error(f(479));
    } else
      t = sc(
        e,
        l,
        a,
        2
      ), t !== null && zt(t, e, 2);
  }
  function $i(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function sf(e, t) {
    Ia = Gi = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function rf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, il(e, l);
    }
  }
  var Qn = {
    readContext: ft,
    use: Qi,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useLayoutEffect: Xe,
    useInsertionEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    useHostTransitionStatus: Xe,
    useFormState: Xe,
    useActionState: Xe,
    useOptimistic: Xe,
    useMemoCache: Xe,
    useCacheRefresh: Xe
  };
  Qn.useEffectEvent = Xe;
  var of = {
    readContext: ft,
    use: Qi,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: Zo,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Ki(
        4194308,
        4,
        Fo.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Ki(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ki(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = xt();
      t = t === void 0 ? null : t;
      var a = e();
      if (xa) {
        pt(!0);
        try {
          e();
        } finally {
          pt(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = xt();
      if (l !== void 0) {
        var n = l(t);
        if (xa) {
          pt(!0);
          try {
            l(t);
          } finally {
            pt(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = Jh.bind(
        null,
        ge,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Hc(e);
      var t = e.queue, l = cf.bind(null, ge, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = xt();
      return Gc(l, e, t);
    },
    useTransition: function() {
      var e = Hc(!1);
      return e = tf.bind(
        null,
        ge,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ge, n = xt();
      if (Te) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = t(), ke === null)
          throw Error(f(349));
        (Ee & 127) !== 0 || Co(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, Zo(Mo.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, en(
        9,
        { destroy: void 0 },
        Do.bind(
          null,
          a,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = xt(), t = ke.identifierPrefix;
      if (Te) {
        var l = cl, a = ul;
        l = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Vi++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Yh++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xc,
    useFormState: Yo,
    useActionState: Yo,
    useOptimistic: function(e) {
      var t = xt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Qc.bind(
        null,
        ge,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Rc,
    useCacheRefresh: function() {
      return xt().memoizedState = Kh.bind(
        null,
        ge
      );
    },
    useEffectEvent: function(e) {
      var t = xt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((De & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Zc = {
    readContext: ft,
    use: Qi,
    useCallback: Io,
    useContext: ft,
    useEffect: Lc,
    useImperativeHandle: Wo,
    useInsertionEffect: Jo,
    useLayoutEffect: $o,
    useMemo: Po,
    useReducer: Zi,
    useRef: Qo,
    useState: function() {
      return Zi(bl);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = Je();
      return ef(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Zi(bl)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Vn(e),
        t
      ];
    },
    useSyncExternalStore: wo,
    useId: nf,
    useHostTransitionStatus: Xc,
    useFormState: Go,
    useActionState: Go,
    useOptimistic: function(e, t) {
      var l = Je();
      return Ro(l, Re, e, t);
    },
    useMemoCache: Rc,
    useCacheRefresh: uf
  };
  Zc.useEffectEvent = Ko;
  var ff = {
    readContext: ft,
    use: Qi,
    useCallback: Io,
    useContext: ft,
    useEffect: Lc,
    useImperativeHandle: Wo,
    useInsertionEffect: Jo,
    useLayoutEffect: $o,
    useMemo: Po,
    useReducer: Bc,
    useRef: Qo,
    useState: function() {
      return Bc(bl);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = Je();
      return Re === null ? Gc(l, e, t) : ef(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bc(bl)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Vn(e),
        t
      ];
    },
    useSyncExternalStore: wo,
    useId: nf,
    useHostTransitionStatus: Xc,
    useFormState: Xo,
    useActionState: Xo,
    useOptimistic: function(e, t) {
      var l = Je();
      return Re !== null ? Ro(l, Re, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: uf
  };
  ff.useEffectEvent = Ko;
  function Kc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : b({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Jc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Ht(), n = Ll(a);
      n.payload = t, l != null && (n.callback = l), t = Yl(e, n, a), t !== null && (zt(t, e, a), kn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Ht(), n = Ll(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Yl(e, n, a), t !== null && (zt(t, e, a), kn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Ht(), a = Ll(l);
      a.tag = 2, t != null && (a.callback = t), t = Yl(e, a, l), t !== null && (zt(t, e, l), kn(t, e, l));
    }
  };
  function df(e, t, l, a, n, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, s) : t.prototype && t.prototype.isPureReactComponent ? !Dn(l, a) || !Dn(n, u) : !0;
  }
  function mf(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Jc.enqueueReplaceState(t, t.state, null);
  }
  function ba(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = b({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function hf(e) {
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
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function gf(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function $c(e, t, l) {
    return l = Ll(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Fi(e, t);
    }, l;
  }
  function pf(e) {
    return e = Ll(e), e.tag = 3, e;
  }
  function xf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        gf(t, l, a);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      gf(t, l, a), typeof n != "function" && (Kl === null ? Kl = /* @__PURE__ */ new Set([this]) : Kl.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function $h(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Za(
        t,
        l,
        n,
        !0
      ), l = Ut.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Jt === null ? su() : l.alternate === null && Qe === 0 && (Qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Bi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), bs(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Bi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), bs(e, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return bs(e, a, n), su(), !1;
    }
    if (Te)
      return t = Ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== hc && (e = Error(f(422), { cause: a }), Un(Xt(e, l)))) : (a !== hc && (t = Error(f(423), {
        cause: a
      }), Un(
        Xt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Xt(a, l), n = $c(
        e.stateNode,
        a,
        n
      ), _c(e, n), Qe !== 4 && (Qe = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = Xt(u, l), Pn === null ? Pn = [u] : Pn.push(u), Qe !== 4 && (Qe = 2), t === null) return !0;
    a = Xt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = $c(l.stateNode, a, e), _c(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Kl === null || !Kl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = pf(n), xf(
              n,
              e,
              l,
              a
            ), _c(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Fc = Error(f(461)), Ie = !1;
  function dt(e, t, l, a) {
    t.child = e === null ? So(t, null, l, a) : pa(
      t,
      e.child,
      l,
      a
    );
  }
  function bf(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var s = {};
      for (var r in a)
        r !== "ref" && (s[r] = a[r]);
    } else s = a;
    return ha(t), a = Dc(
      e,
      t,
      l,
      s,
      u,
      n
    ), r = Mc(), e !== null && !Ie ? (Oc(e, t, n), jl(e, t, n)) : (Te && r && dc(t), t.flags |= 1, dt(e, t, a, n), t.child);
  }
  function jf(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !rc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Sf(
        e,
        t,
        u,
        a,
        n
      )) : (e = Di(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ns(e, n)) {
      var s = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Dn, l(s, a) && e.ref === t.ref)
        return jl(e, t, n);
    }
    return t.flags |= 1, e = vl(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sf(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Dn(u, a) && e.ref === t.ref)
        if (Ie = !1, t.pendingProps = a = u, ns(e, n))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else
          return t.lanes = e.lanes, jl(e, t, n);
    }
    return Wc(
      e,
      t,
      l,
      a,
      n
    );
  }
  function Nf(e, t, l, a) {
    var n = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return Ef(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ri(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? _o(t, u) : Ac(), To(t);
      else
        return a = t.lanes = 536870912, Ef(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Ri(t, u.cachePool), _o(t, u), Vl(), t.memoizedState = null) : (e !== null && Ri(t, null), Ac(), Vl());
    return dt(e, t, n, l), t.child;
  }
  function Zn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ef(e, t, l, a, n) {
    var u = jc();
    return u = u === null ? null : { parent: Fe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && Ri(t, null), Ac(), To(t), e !== null && Za(e, t, a, !0), t.childLanes = n, null;
  }
  function Wi(e, t) {
    return t = Pi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _f(e, t, l) {
    return pa(t, e.child, null, l), e = Wi(t, t.pendingProps), e.flags |= 2, Rt(t), t.memoizedState = null, e;
  }
  function Fh(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (a.mode === "hidden")
          return e = Wi(t, a), t.lanes = 536870912, Zn(null, e);
        if (wc(t), (e = Le) ? (e = Bd(
          e,
          Kt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Rl !== null ? { id: ul, overflow: cl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uo(e), l.return = t, t.child = l, ot = t, Le = null)) : e = null, e === null) throw Bl(t);
        return t.lanes = 536870912, null;
      }
      return Wi(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (wc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = _f(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Ie || Za(e, t, l, !1), n = (l & e.childLanes) !== 0, Ie || n) {
        if (a = ke, a !== null && (s = mr(a, l), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, oa(e, s), zt(a, e, s), Fc;
        su(), t = _f(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Le = $t(s.nextSibling), ot = t, Te = !0, ql = null, Kt = !1, e !== null && ro(t, e), t = Wi(t, a), t.flags |= 4096;
      return t;
    }
    return e = vl(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ii(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, l, a, n) {
    return ha(t), l = Dc(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Mc(), e !== null && !Ie ? (Oc(e, t, n), jl(e, t, n)) : (Te && a && dc(t), t.flags |= 1, dt(e, t, l, n), t.child);
  }
  function Tf(e, t, l, a, n, u) {
    return ha(t), t.updateQueue = null, l = zo(
      t,
      a,
      l,
      n
    ), Ao(e), a = Mc(), e !== null && !Ie ? (Oc(e, t, u), jl(e, t, u)) : (Te && a && dc(t), t.flags |= 1, dt(e, t, l, u), t.child);
  }
  function Af(e, t, l, a, n) {
    if (ha(t), t.stateNode === null) {
      var u = Ga, s = l.contextType;
      typeof s == "object" && s !== null && (u = ft(s)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Jc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Nc(t), s = l.contextType, u.context = typeof s == "object" && s !== null ? ft(s) : Ga, u.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Kc(
        t,
        l,
        s,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Jc.enqueueReplaceState(u, u.state, null), Yn(t, a, u, n), Ln(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, h = ba(l, r);
      u.props = h;
      var _ = u.context, R = l.contextType;
      s = Ga, typeof R == "object" && R !== null && (s = ft(R));
      var B = l.getDerivedStateFromProps;
      R = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || _ !== s) && mf(
        t,
        u,
        a,
        s
      ), kl = !1;
      var T = t.memoizedState;
      u.state = T, Yn(t, a, u, n), Ln(), _ = t.memoizedState, r || T !== _ || kl ? (typeof B == "function" && (Kc(
        t,
        l,
        B,
        a
      ), _ = t.memoizedState), (h = kl || df(
        t,
        l,
        h,
        a,
        T,
        _,
        s
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = s, a = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Ec(e, t), s = t.memoizedProps, R = ba(l, s), u.props = R, B = t.pendingProps, T = u.context, _ = l.contextType, h = Ga, typeof _ == "object" && _ !== null && (h = ft(_)), r = l.getDerivedStateFromProps, (_ = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== B || T !== h) && mf(
        t,
        u,
        a,
        h
      ), kl = !1, T = t.memoizedState, u.state = T, Yn(t, a, u, n), Ln();
      var z = t.memoizedState;
      s !== B || T !== z || kl || e !== null && e.dependencies !== null && Oi(e.dependencies) ? (typeof r == "function" && (Kc(
        t,
        l,
        r,
        a
      ), z = t.memoizedState), (R = kl || df(
        t,
        l,
        R,
        a,
        T,
        z,
        h
      ) || e !== null && e.dependencies !== null && Oi(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        z,
        h
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = h, a = R) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Ii(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = pa(
      t,
      e.child,
      null,
      n
    ), t.child = pa(
      t,
      null,
      l,
      n
    )) : dt(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = jl(
      e,
      t,
      n
    ), e;
  }
  function zf(e, t, l, a) {
    return da(), t.flags |= 256, dt(e, t, l, a), t.child;
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
  function es(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Bt), e;
  }
  function wf(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (Ke.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (n ? Gl(t) : Vl(), (e = Le) ? (e = Bd(
          e,
          Kt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Rl !== null ? { id: ul, overflow: cl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uo(e), l.return = t, t.child = l, ot = t, Le = null)) : e = null, e === null) throw Bl(t);
        return qs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, n ? (Vl(), n = t.mode, r = Pi(
        { mode: "hidden", children: r },
        n
      ), a = fa(
        a,
        n,
        l,
        null
      ), r.return = t, a.return = t, r.sibling = a, t.child = r, a = t.child, a.memoizedState = Pc(l), a.childLanes = es(
        e,
        s,
        l
      ), t.memoizedState = Ic, Zn(null, a)) : (Gl(t), ts(t, r));
    }
    var h = e.memoizedState;
    if (h !== null && (r = h.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Gl(t), t.flags &= -257, t = ls(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Vl(), t.child = e.child, t.flags |= 128, t = null) : (Vl(), r = a.fallback, n = t.mode, a = Pi(
          { mode: "visible", children: a.children },
          n
        ), r = fa(
          r,
          n,
          l,
          null
        ), r.flags |= 2, a.return = t, r.return = t, a.sibling = r, t.child = a, pa(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Pc(l), a.childLanes = es(
          e,
          s,
          l
        ), t.memoizedState = Ic, t = Zn(null, a));
      else if (Gl(t), qs(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var _ = s.dgst;
        s = _, a = Error(f(419)), a.stack = "", a.digest = s, Un({ value: a, source: null, stack: null }), t = ls(
          e,
          t,
          l
        );
      } else if (Ie || Za(e, t, l, !1), s = (l & e.childLanes) !== 0, Ie || s) {
        if (s = ke, s !== null && (a = mr(s, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, oa(e, a), zt(s, e, a), Fc;
        Rs(r) || su(), t = ls(
          e,
          t,
          l
        );
      } else
        Rs(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Le = $t(
          r.nextSibling
        ), ot = t, Te = !0, ql = null, Kt = !1, e !== null && ro(t, e), t = ts(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Vl(), r = a.fallback, n = t.mode, h = e.child, _ = h.sibling, a = vl(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, _ !== null ? r = vl(
      _,
      r
    ) : (r = fa(
      r,
      n,
      l,
      null
    ), r.flags |= 2), r.return = t, a.return = t, a.sibling = r, t.child = a, Zn(null, a), a = t.child, r = e.child.memoizedState, r === null ? r = Pc(l) : (n = r.cachePool, n !== null ? (h = Fe._currentValue, n = n.parent !== h ? { parent: h, pool: h } : n) : n = yo(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: n
    }), a.memoizedState = r, a.childLanes = es(
      e,
      s,
      l
    ), t.memoizedState = Ic, Zn(e.child, a)) : (Gl(t), l = e.child, e = l.sibling, l = vl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ts(e, t) {
    return t = Pi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Pi(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function ls(e, t, l) {
    return pa(t, e.child, null, l), e = ts(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), gc(e.return, t, l);
  }
  function as(e, t, l, a, n, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = l, s.tailMode = n, s.treeForkCount = u);
  }
  function Df(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var s = Ke.current, r = (s & 2) !== 0;
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, X(Ke, s), dt(e, t, a, l), a = Te ? On : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Cf(e, l, t);
        else if (e.tag === 19)
          Cf(e, l, t);
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
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && Yi(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), as(
          t,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Yi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        as(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        as(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Zl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Za(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, l = vl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = vl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function ns(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Oi(e)));
  }
  function Wh(e, t, l) {
    switch (t.tag) {
      case 3:
        G(t, t.stateNode.containerInfo), Hl(t, Fe, e.memoizedState.cache), da();
        break;
      case 27:
      case 5:
        oe(t);
        break;
      case 4:
        G(t, t.stateNode.containerInfo);
        break;
      case 10:
        Hl(
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
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Gl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? wf(e, t, l) : (Gl(t), e = jl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Gl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Za(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return Df(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X(Ke, Ke.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Nf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Hl(t, Fe, e.memoizedState.cache);
    }
    return jl(e, t, l);
  }
  function Mf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ie = !0;
      else {
        if (!ns(e, l) && (t.flags & 128) === 0)
          return Ie = !1, Wh(
            e,
            t,
            l
          );
        Ie = (e.flags & 131072) !== 0;
      }
    else
      Ie = !1, Te && (t.flags & 1048576) !== 0 && so(t, On, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ya(t.elementType), t.type = e, typeof e == "function")
            rc(e) ? (a = ba(e, a), t.tag = 1, t = Af(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Wc(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ne) {
                t.tag = 11, t = bf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === w) {
                t.tag = 14, t = jf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = Ue(e) || e, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = ba(
          a,
          t.pendingProps
        ), Af(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (G(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Ec(e, t), Yn(t, a, null, l);
          var s = t.memoizedState;
          if (a = s.cache, Hl(t, Fe, a), a !== u.cache && pc(
            t,
            [Fe],
            l,
            !0
          ), Ln(), a = s.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = zf(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Xt(
                Error(f(424)),
                t
              ), Un(n), t = zf(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = $t(e.firstChild), ot = t, Te = !0, ql = null, Kt = !0, l = So(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (da(), a === n) {
              t = jl(
                e,
                t,
                l
              );
              break e;
            }
            dt(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ii(e, t), e === null ? (l = Vd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : Te || (l = t.type, e = t.pendingProps, a = vu(
          re.current
        ).createElement(l), a[rt] = t, a[St] = e, mt(a, l, e), ut(a), t.stateNode = a) : t.memoizedState = Vd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return oe(t), e === null && Te && (a = t.stateNode = Ld(
          t.type,
          t.pendingProps,
          re.current
        ), ot = t, Kt = !0, n = Le, Wl(t.type) ? (Bs = n, Le = $t(a.firstChild)) : Le = n), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ii(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((n = a = Le) && (a = Av(
          a,
          t.type,
          t.pendingProps,
          Kt
        ), a !== null ? (t.stateNode = a, ot = t, Le = $t(a.firstChild), Kt = !1, n = !0) : n = !1), n || Bl(t)), oe(t), n = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = u.children, Ms(n, u) ? a = null : s !== null && Ms(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Dc(
          e,
          t,
          Gh,
          null,
          null,
          l
        ), ci._currentValue = n), Ii(e, t), dt(e, t, a, l), t.child;
      case 6:
        return e === null && Te && ((e = l = Le) && (l = zv(
          l,
          t.pendingProps,
          Kt
        ), l !== null ? (t.stateNode = l, ot = t, Le = null, e = !0) : e = !1), e || Bl(t)), null;
      case 13:
        return wf(e, t, l);
      case 4:
        return G(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = pa(
          t,
          null,
          a,
          l
        ) : dt(e, t, a, l), t.child;
      case 11:
        return bf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return dt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, Hl(t, t.type, a.value), dt(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, ha(t), n = ft(n), a = a(n), t.flags |= 1, dt(e, t, a, l), t.child;
      case 14:
        return jf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Sf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Df(e, t, l);
      case 31:
        return Fh(e, t, l);
      case 22:
        return Nf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return ha(t), a = ft(Fe), e === null ? (n = jc(), n === null && (n = ke, u = xc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Nc(t), Hl(t, Fe, n)) : ((e.lanes & l) !== 0 && (Ec(e, t), Yn(t, null, null, l), Ln()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Hl(t, Fe, a)) : (a = u.cache, Hl(t, Fe, a), a !== n.cache && pc(
          t,
          [Fe],
          l,
          !0
        ))), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Sl(e) {
    e.flags |= 4;
  }
  function is(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (id()) e.flags |= 8192;
        else
          throw ga = Bi, Sc;
    } else e.flags &= -16777217;
  }
  function Of(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jd(t))
      if (id()) e.flags |= 8192;
      else
        throw ga = Bi, Sc;
  }
  function eu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? He() : 536870912, e.lanes |= t, nn |= t);
  }
  function Kn(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Ih(e, t, l) {
    var a = t.pendingProps;
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
        return Ye(t), null;
      case 1:
        return Ye(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pl(Fe), ie(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Qa(t) ? Sl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vc())), Ye(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (Sl(t), u !== null ? (Ye(t), Of(t, u)) : (Ye(t), is(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (Sl(t), Ye(t), Of(t, u)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Sl(t), Ye(t), is(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (K(t), l = re.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Sl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ye(t), null;
          }
          e = Q.current, Qa(t) ? oo(t) : (e = Ld(n, a, l), t.stateNode = e, Sl(t));
        }
        return Ye(t), null;
      case 5:
        if (K(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Sl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ye(t), null;
          }
          if (u = Q.current, Qa(t))
            oo(t);
          else {
            var s = vu(
              re.current
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
                    u = typeof a.is == "string" ? s.createElement("select", {
                      is: a.is
                    }) : s.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? s.createElement(n, { is: a.is }) : s.createElement(n);
                }
            }
            u[rt] = t, u[St] = a;
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
            e: switch (mt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Sl(t);
          }
        }
        return Ye(t), is(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Sl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = re.current, Qa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = ot, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[rt] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || wd(e.nodeValue, l)), e || Bl(t, !0);
          } else
            e = vu(e).createTextNode(
              a
            ), e[rt] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Qa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[rt] = t;
            } else
              da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), e = !1;
          } else
            l = vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Ye(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Qa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[rt] = t;
            } else
              da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), n = !1;
          } else
            n = vc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return Rt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), eu(t, t.updateQueue), Ye(t), null);
      case 4:
        return ie(), e === null && As(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return pl(t.type), Ye(t), null;
      case 19:
        if (U(Ke), a = t.memoizedState, a === null) return Ye(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Kn(a, !1);
          else {
            if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Yi(e), u !== null) {
                  for (t.flags |= 128, Kn(a, !1), e = u.updateQueue, t.updateQueue = e, eu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    io(l, e), l = l.sibling;
                  return X(
                    Ke,
                    Ke.current & 1 | 2
                  ), Te && yl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ze() > iu && (t.flags |= 128, n = !0, Kn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Yi(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, eu(t, e), Kn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Te)
                return Ye(t), null;
            } else
              2 * Ze() - a.renderingStartTime > iu && l !== 536870912 && (t.flags |= 128, n = !0, Kn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ze(), e.sibling = null, l = Ke.current, X(
          Ke,
          n ? l & 1 | 2 : l & 1
        ), Te && yl(t, a.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return Rt(t), zc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), l = t.updateQueue, l !== null && eu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && U(va), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), pl(Fe), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Ph(e, t) {
    switch (mc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pl(Fe), ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return K(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Rt(t), t.alternate === null)
            throw Error(f(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(Ke), null;
      case 4:
        return ie(), null;
      case 10:
        return pl(t.type), null;
      case 22:
      case 23:
        return Rt(t), zc(), e !== null && U(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return pl(Fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Uf(e, t) {
    switch (mc(t), t.tag) {
      case 3:
        pl(Fe), ie();
        break;
      case 26:
      case 27:
      case 5:
        K(t);
        break;
      case 4:
        ie();
        break;
      case 31:
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        U(Ke);
        break;
      case 10:
        pl(t.type);
        break;
      case 22:
      case 23:
        Rt(t), zc(), e !== null && U(va);
        break;
      case 24:
        pl(Fe);
    }
  }
  function Jn(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, s = l.inst;
            a = u(), s.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      Oe(t, t.return, r);
    }
  }
  function Xl(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst, r = s.destroy;
            if (r !== void 0) {
              s.destroy = void 0, n = t;
              var h = l, _ = r;
              try {
                _();
              } catch (R) {
                Oe(
                  n,
                  h,
                  R
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (R) {
      Oe(t, t.return, R);
    }
  }
  function Rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Eo(t, l);
      } catch (a) {
        Oe(e, e.return, a);
      }
    }
  }
  function qf(e, t, l) {
    l.props = ba(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Oe(e, t, a);
    }
  }
  function $n(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      Oe(e, t, n);
    }
  }
  function sl(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Oe(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Oe(e, t, n);
        }
      else l.current = null;
  }
  function Bf(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Oe(e, e.return, n);
    }
  }
  function us(e, t, l) {
    try {
      var a = e.stateNode;
      jv(a, e.type, l, t), a[St] = t;
    } catch (n) {
      Oe(e, e.return, n);
    }
  }
  function Hf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wl(e.type) || e.tag === 4;
  }
  function cs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Wl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ss(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ml));
    else if (a !== 4 && (a === 27 && Wl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (ss(e, t, l), e = e.sibling; e !== null; )
        ss(e, t, l), e = e.sibling;
  }
  function tu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Wl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (tu(e, t, l), e = e.sibling; e !== null; )
        tu(e, t, l), e = e.sibling;
  }
  function kf(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      mt(t, a, l), t[rt] = e, t[St] = l;
    } catch (u) {
      Oe(e, e.return, u);
    }
  }
  var Nl = !1, Pe = !1, rs = !1, Lf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function ev(e, t) {
    if (e = e.containerInfo, Cs = Su, e = Fr(e), lc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var s = 0, r = -1, h = -1, _ = 0, R = 0, B = e, T = null;
            t: for (; ; ) {
              for (var z; B !== l || n !== 0 && B.nodeType !== 3 || (r = s + n), B !== u || a !== 0 && B.nodeType !== 3 || (h = s + a), B.nodeType === 3 && (s += B.nodeValue.length), (z = B.firstChild) !== null; )
                T = B, B = z;
              for (; ; ) {
                if (B === e) break t;
                if (T === l && ++_ === n && (r = s), T === u && ++R === a && (h = s), (z = B.nextSibling) !== null) break;
                B = T, T = B.parentNode;
              }
              B = z;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ds = { focusedElem: e, selectionRange: l }, Su = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var $ = ba(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    $,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ue) {
                  Oe(
                    l,
                    l.return,
                    ue
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Us(e);
                else if (l === 1)
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
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function Yf(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        _l(e, l), a & 4 && Jn(5, l);
        break;
      case 1:
        if (_l(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Oe(l, l.return, s);
            }
          else {
            var n = ba(
              l.type,
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
              Oe(
                l,
                l.return,
                s
              );
            }
          }
        a & 64 && Rf(l), a & 512 && $n(l, l.return);
        break;
      case 3:
        if (_l(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Eo(e, t);
          } catch (s) {
            Oe(l, l.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && kf(l);
      case 26:
      case 5:
        _l(e, l), t === null && a & 4 && Bf(l), a & 512 && $n(l, l.return);
        break;
      case 12:
        _l(e, l);
        break;
      case 31:
        _l(e, l), a & 4 && Xf(e, l);
        break;
      case 13:
        _l(e, l), a & 4 && Qf(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = rv.bind(
          null,
          l
        ), wv(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Nl, !a) {
          t = t !== null && t.memoizedState !== null || Pe, n = Nl;
          var u = Pe;
          Nl = a, (Pe = t) && !u ? Tl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : _l(e, l), Nl = n, Pe = u;
        }
        break;
      case 30:
        break;
      default:
        _l(e, l);
    }
  }
  function Gf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ku(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, Et = !1;
  function El(e, t, l) {
    for (l = l.child; l !== null; )
      Vf(e, t, l), l = l.sibling;
  }
  function Vf(e, t, l) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(ia, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Pe || sl(l, t), El(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Pe || sl(l, t);
        var a = Ge, n = Et;
        Wl(l.type) && (Ge = l.stateNode, Et = !1), El(
          e,
          t,
          l
        ), ni(l.stateNode), Ge = a, Et = n;
        break;
      case 5:
        Pe || sl(l, t);
      case 6:
        if (a = Ge, n = Et, Ge = null, El(
          e,
          t,
          l
        ), Ge = a, Et = n, Ge !== null)
          if (Et)
            try {
              (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(l.stateNode);
            } catch (u) {
              Oe(
                l,
                t,
                u
              );
            }
          else
            try {
              Ge.removeChild(l.stateNode);
            } catch (u) {
              Oe(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Ge !== null && (Et ? (e = Ge, Rd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), mn(e)) : Rd(Ge, l.stateNode));
        break;
      case 4:
        a = Ge, n = Et, Ge = l.stateNode.containerInfo, Et = !0, El(
          e,
          t,
          l
        ), Ge = a, Et = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xl(2, l, t), Pe || Xl(4, l, t), El(
          e,
          t,
          l
        );
        break;
      case 1:
        Pe || (sl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && qf(
          l,
          t,
          a
        )), El(
          e,
          t,
          l
        );
        break;
      case 21:
        El(
          e,
          t,
          l
        );
        break;
      case 22:
        Pe = (a = Pe) || l.memoizedState !== null, El(
          e,
          t,
          l
        ), Pe = a;
        break;
      default:
        El(
          e,
          t,
          l
        );
    }
  }
  function Xf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        mn(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
    }
  }
  function Qf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        mn(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
  }
  function tv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Lf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lf()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function lu(e, t) {
    var l = tv(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = ov.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function _t(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, s = t, r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Wl(r.type)) {
                Ge = r.stateNode, Et = !1;
                break e;
              }
              break;
            case 5:
              Ge = r.stateNode, Et = !1;
              break e;
            case 3:
            case 4:
              Ge = r.stateNode.containerInfo, Et = !0;
              break e;
          }
          r = r.return;
        }
        if (Ge === null) throw Error(f(160));
        Vf(u, s, n), Ge = null, Et = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Zf(t, e), t = t.sibling;
  }
  var el = null;
  function Zf(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _t(t, e), Tt(e), a & 4 && (Xl(3, e, e.return), Jn(3, e), Xl(5, e, e.return));
        break;
      case 1:
        _t(t, e), Tt(e), a & 512 && (Pe || l === null || sl(l, l.return)), a & 64 && Nl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = el;
        if (_t(t, e), Tt(e), a & 512 && (Pe || l === null || sl(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Sn] || u[rt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), mt(u, a, l), u[rt] = e, ut(u), a = u;
                      break e;
                    case "link":
                      var s = Zd(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (s) {
                        for (var r = 0; r < s.length; r++)
                          if (u = s[r], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(r, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), mt(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (s = Zd(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (r = 0; r < s.length; r++)
                          if (u = s[r], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(r, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), mt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[rt] = e, ut(u), a = u;
                }
                e.stateNode = a;
              } else
                Kd(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qd(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Kd(
              n,
              e.type,
              e.stateNode
            ) : Qd(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && us(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        _t(t, e), Tt(e), a & 512 && (Pe || l === null || sl(l, l.return)), l !== null && a & 4 && us(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (_t(t, e), Tt(e), a & 512 && (Pe || l === null || sl(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Ra(n, "");
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, us(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (rs = !0);
        break;
      case 6:
        if (_t(t, e), Tt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        break;
      case 3:
        if (pu = null, n = el, el = yu(t.containerInfo), _t(t, e), el = n, Tt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            mn(t.containerInfo);
          } catch ($) {
            Oe(e, e.return, $);
          }
        rs && (rs = !1, Kf(e));
        break;
      case 4:
        a = el, el = yu(
          e.stateNode.containerInfo
        ), _t(t, e), Tt(e), el = a;
        break;
      case 12:
        _t(t, e), Tt(e);
        break;
      case 31:
        _t(t, e), Tt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, lu(e, a)));
        break;
      case 13:
        _t(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (nu = Ze()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, lu(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, _ = Nl, R = Pe;
        if (Nl = _ || n, Pe = R || h, _t(t, e), Pe = R, Nl = _, Tt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || h || Nl || Pe || ja(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (u = h.stateNode, n)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    r = h.stateNode;
                    var B = h.memoizedProps.style, T = B != null && B.hasOwnProperty("display") ? B.display : null;
                    r.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch ($) {
                  Oe(h, h.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch ($) {
                  Oe(h, h.return, $);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                h = t;
                try {
                  var z = h.stateNode;
                  n ? qd(z, !0) : qd(h.stateNode, !1);
                } catch ($) {
                  Oe(h, h.return, $);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, lu(e, l))));
        break;
      case 19:
        _t(t, e), Tt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, lu(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        _t(t, e), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Hf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = cs(e);
            tu(e, u, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (Ra(s, ""), l.flags &= -33);
            var r = cs(e);
            tu(e, r, s);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, _ = cs(e);
            ss(
              e,
              _,
              h
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (R) {
        Oe(e, e.return, R);
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
  function _l(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Yf(e, t.alternate, t), t = t.sibling;
  }
  function ja(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xl(4, t, t.return), ja(t);
          break;
        case 1:
          sl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && qf(
            t,
            t.return,
            l
          ), ja(t);
          break;
        case 27:
          ni(t.stateNode);
        case 26:
        case 5:
          sl(t, t.return), ja(t);
          break;
        case 22:
          t.memoizedState === null && ja(t);
          break;
        case 30:
          ja(t);
          break;
        default:
          ja(t);
      }
      e = e.sibling;
    }
  }
  function Tl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Tl(
            n,
            u,
            l
          ), Jn(4, u);
          break;
        case 1:
          if (Tl(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (_) {
              Oe(a, a.return, _);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var r = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  No(h[n], r);
            } catch (_) {
              Oe(a, a.return, _);
            }
          }
          l && s & 64 && Rf(u), $n(u, u.return);
          break;
        case 27:
          kf(u);
        case 26:
        case 5:
          Tl(
            n,
            u,
            l
          ), l && a === null && s & 4 && Bf(u), $n(u, u.return);
          break;
        case 12:
          Tl(
            n,
            u,
            l
          );
          break;
        case 31:
          Tl(
            n,
            u,
            l
          ), l && s & 4 && Xf(n, u);
          break;
        case 13:
          Tl(
            n,
            u,
            l
          ), l && s & 4 && Qf(n, u);
          break;
        case 22:
          u.memoizedState === null && Tl(
            n,
            u,
            l
          ), $n(u, u.return);
          break;
        case 30:
          break;
        default:
          Tl(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function os(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Rn(l));
  }
  function fs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Rn(e));
  }
  function tl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Jf(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Jf(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tl(
          e,
          t,
          l,
          a
        ), n & 2048 && Jn(9, t);
        break;
      case 1:
        tl(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        tl(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Rn(e)));
        break;
      case 12:
        if (n & 2048) {
          tl(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, s = u.id, r = u.onPostCommit;
            typeof r == "function" && r(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (h) {
            Oe(t, t.return, h);
          }
        } else
          tl(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        tl(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        tl(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? tl(
          e,
          t,
          l,
          a
        ) : Fn(e, t) : u._visibility & 2 ? tl(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, tn(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && os(s, t);
        break;
      case 24:
        tl(
          e,
          t,
          l,
          a
        ), n & 2048 && fs(t.alternate, t);
        break;
      default:
        tl(
          e,
          t,
          l,
          a
        );
    }
  }
  function tn(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, r = l, h = a, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          tn(
            u,
            s,
            r,
            h,
            n
          ), Jn(8, s);
          break;
        case 23:
          break;
        case 22:
          var R = s.stateNode;
          s.memoizedState !== null ? R._visibility & 2 ? tn(
            u,
            s,
            r,
            h,
            n
          ) : Fn(
            u,
            s
          ) : (R._visibility |= 2, tn(
            u,
            s,
            r,
            h,
            n
          )), n && _ & 2048 && os(
            s.alternate,
            s
          );
          break;
        case 24:
          tn(
            u,
            s,
            r,
            h,
            n
          ), n && _ & 2048 && fs(s.alternate, s);
          break;
        default:
          tn(
            u,
            s,
            r,
            h,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Fn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            Fn(l, a), n & 2048 && os(
              a.alternate,
              a
            );
            break;
          case 24:
            Fn(l, a), n & 2048 && fs(a.alternate, a);
            break;
          default:
            Fn(l, a);
        }
        t = t.sibling;
      }
  }
  var Wn = 8192;
  function ln(e, t, l) {
    if (e.subtreeFlags & Wn)
      for (e = e.child; e !== null; )
        $f(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function $f(e, t, l) {
    switch (e.tag) {
      case 26:
        ln(
          e,
          t,
          l
        ), e.flags & Wn && e.memoizedState !== null && Yv(
          l,
          el,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ln(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = el;
        el = yu(e.stateNode.containerInfo), ln(
          e,
          t,
          l
        ), el = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Wn, Wn = 16777216, ln(
          e,
          t,
          l
        ), Wn = a) : ln(
          e,
          t,
          l
        ));
        break;
      default:
        ln(
          e,
          t,
          l
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
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ct = a, If(
            a,
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
        In(e), e.flags & 2048 && Xl(9, e, e.return);
        break;
      case 3:
        In(e);
        break;
      case 12:
        In(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, au(e)) : In(e);
        break;
      default:
        In(e);
    }
  }
  function au(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ct = a, If(
            a,
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
          Xl(8, t, t.return), au(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, au(t));
          break;
        default:
          au(t);
      }
      e = e.sibling;
    }
  }
  function If(e, t) {
    for (; ct !== null; ) {
      var l = ct;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Xl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Rn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, ct = a;
      else
        e: for (l = e; ct !== null; ) {
          a = ct;
          var n = a.sibling, u = a.return;
          if (Gf(a), a === l) {
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
  var lv = {
    getCacheForType: function(e) {
      var t = ft(Fe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return ft(Fe).controller.signal;
    }
  }, av = typeof WeakMap == "function" ? WeakMap : Map, De = 0, ke = null, Se = null, Ee = 0, Me = 0, qt = null, Ql = !1, an = !1, ds = !1, Al = 0, Qe = 0, Zl = 0, Sa = 0, ms = 0, Bt = 0, nn = 0, Pn = null, At = null, hs = !1, nu = 0, Pf = 0, iu = 1 / 0, uu = null, Kl = null, lt = 0, Jl = null, un = null, zl = 0, vs = 0, ys = null, ed = null, ei = 0, gs = null;
  function Ht() {
    return (De & 2) !== 0 && Ee !== 0 ? Ee & -Ee : x.T !== null ? Ns() : hr();
  }
  function td() {
    if (Bt === 0)
      if ((Ee & 536870912) === 0 || Te) {
        var e = Ml;
        Ml <<= 1, (Ml & 3932160) === 0 && (Ml = 262144), Bt = e;
      } else Bt = 536870912;
    return e = Ut.current, e !== null && (e.flags |= 32), Bt;
  }
  function zt(e, t, l) {
    (e === ke && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (cn(e, 0), $l(
      e,
      Ee,
      Bt,
      !1
    )), le(e, l), ((De & 2) === 0 || e !== ke) && (e === ke && ((De & 2) === 0 && (Sa |= l), Qe === 4 && $l(
      e,
      Ee,
      Bt,
      !1
    )), rl(e));
  }
  function ld(e, t, l) {
    if ((De & 6) !== 0) throw Error(f(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ye(e, t), n = a ? uv(e, t) : xs(e, t, !0), u = a;
    do {
      if (n === 0) {
        an && !a && $l(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !nv(l)) {
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
              n = Pn;
              var h = r.current.memoizedState.isDehydrated;
              if (h && (cn(r, s).flags |= 256), s = xs(
                r,
                s,
                !1
              ), s !== 2) {
                if (ds && !h) {
                  r.errorRecoveryDisabledLanes |= u, Sa |= u, n = 4;
                  break e;
                }
                u = At, At = n, u !== null && (At === null ? At = u : At.push.apply(
                  At,
                  u
                ));
              }
              n = s;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          cn(e, 0), $l(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              $l(
                a,
                t,
                Bt,
                !Ql
              );
              break e;
            case 2:
              At = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (n = nu + 300 - Ze(), 10 < n)) {
            if ($l(
              a,
              t,
              Bt,
              !Ql
            ), Z(a, 0, !0) !== 0) break e;
            zl = t, a.timeoutHandle = Od(
              ad.bind(
                null,
                a,
                l,
                At,
                uu,
                hs,
                t,
                Bt,
                Sa,
                nn,
                Ql,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          ad(
            a,
            l,
            At,
            uu,
            hs,
            t,
            Bt,
            Sa,
            nn,
            Ql,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rl(e);
  }
  function ad(e, t, l, a, n, u, s, r, h, _, R, B, T, z) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ml
      }, $f(
        t,
        u,
        B
      );
      var $ = (u & 62914560) === u ? nu - Ze() : (u & 4194048) === u ? Pf - Ze() : 0;
      if ($ = Gv(
        B,
        $
      ), $ !== null) {
        zl = u, e.cancelPendingCommit = $(
          fd.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            n,
            s,
            r,
            h,
            R,
            B,
            null,
            T,
            z
          )
        ), $l(e, u, s, !_);
        return;
      }
    }
    fd(
      e,
      t,
      u,
      l,
      a,
      n,
      s,
      r,
      h
    );
  }
  function nv(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Mt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
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
  function $l(e, t, l, a) {
    t &= ~ms, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - nt(n), s = 1 << u;
      a[u] = -1, n &= ~s;
    }
    l !== 0 && nl(e, l, t);
  }
  function cu() {
    return (De & 6) === 0 ? (ti(0), !1) : !0;
  }
  function ps() {
    if (Se !== null) {
      if (Me === 0)
        var e = Se.return;
      else
        e = Se, gl = ma = null, Uc(e), Fa = null, Bn = 0, e = Se;
      for (; e !== null; )
        Uf(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function cn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Ev(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), zl = 0, ps(), ke = e, Se = l = vl(e.current, null), Ee = t, Me = 0, qt = null, Ql = !1, an = ye(e, t), ds = !1, nn = Bt = ms = Sa = Zl = Qe = 0, At = Pn = null, hs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - nt(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return Al = t, zi(), l;
  }
  function nd(e, t) {
    ge = null, x.H = Qn, t === $a || t === qi ? (t = xo(), Me = 3) : t === Sc ? (t = xo(), Me = 4) : Me = t === Fc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, Se === null && (Qe = 1, Fi(
      e,
      Xt(t, e.current)
    ));
  }
  function id() {
    var e = Ut.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Jt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Jt : !1;
  }
  function ud() {
    var e = x.H;
    return x.H = Qn, e === null ? Qn : e;
  }
  function cd() {
    var e = x.A;
    return x.A = lv, e;
  }
  function su() {
    Qe = 4, Ql || (Ee & 4194048) !== Ee && Ut.current !== null || (an = !0), (Zl & 134217727) === 0 && (Sa & 134217727) === 0 || ke === null || $l(
      ke,
      Ee,
      Bt,
      !1
    );
  }
  function xs(e, t, l) {
    var a = De;
    De |= 2;
    var n = ud(), u = cd();
    (ke !== e || Ee !== t) && (uu = null, cn(e, t)), t = !1;
    var s = Qe;
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          var r = Se, h = qt;
          switch (Me) {
            case 8:
              ps(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var _ = Me;
              if (Me = 0, qt = null, sn(e, r, h, _), l && an) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Me, Me = 0, qt = null, sn(e, r, h, _);
          }
        }
        iv(), s = Qe;
        break;
      } catch (R) {
        nd(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, gl = ma = null, De = a, x.H = n, x.A = u, Se === null && (ke = null, Ee = 0, zi()), s;
  }
  function iv() {
    for (; Se !== null; ) sd(Se);
  }
  function uv(e, t) {
    var l = De;
    De |= 2;
    var a = ud(), n = cd();
    ke !== e || Ee !== t ? (uu = null, iu = Ze() + 500, cn(e, t)) : an = ye(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          t = Se;
          var u = qt;
          t: switch (Me) {
            case 1:
              Me = 0, qt = null, sn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (go(u)) {
                Me = 0, qt = null, rd(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || ke !== e || (Me = 7), rl(e);
              }, u.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              go(u) ? (Me = 0, qt = null, rd(t)) : (Me = 0, qt = null, sn(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (Se.tag) {
                case 26:
                  s = Se.memoizedState;
                case 5:
                case 27:
                  var r = Se;
                  if (s ? Jd(s) : r.stateNode.complete) {
                    Me = 0, qt = null;
                    var h = r.sibling;
                    if (h !== null) Se = h;
                    else {
                      var _ = r.return;
                      _ !== null ? (Se = _, ru(_)) : Se = null;
                    }
                    break t;
                  }
              }
              Me = 0, qt = null, sn(e, t, u, 5);
              break;
            case 6:
              Me = 0, qt = null, sn(e, t, u, 6);
              break;
            case 8:
              ps(), Qe = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        cv();
        break;
      } catch (R) {
        nd(e, R);
      }
    while (!0);
    return gl = ma = null, x.H = a, x.A = n, De = l, Se !== null ? 0 : (ke = null, Ee = 0, zi(), Qe);
  }
  function cv() {
    for (; Se !== null && !gn(); )
      sd(Se);
  }
  function sd(e) {
    var t = Mf(e.alternate, e, Al);
    e.memoizedProps = e.pendingProps, t === null ? ru(e) : Se = t;
  }
  function rd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Tf(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = Tf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        Uc(t);
      default:
        Uf(l, t), t = Se = io(t, Al), t = Mf(l, t, Al);
    }
    e.memoizedProps = e.pendingProps, t === null ? ru(e) : Se = t;
  }
  function sn(e, t, l, a) {
    gl = ma = null, Uc(t), Fa = null, Bn = 0;
    var n = t.return;
    try {
      if ($h(
        e,
        n,
        t,
        l,
        Ee
      )) {
        Qe = 1, Fi(
          e,
          Xt(l, e.current)
        ), Se = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw Se = n, u;
      Qe = 1, Fi(
        e,
        Xt(l, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Te || a === 1 ? e = !0 : an || (Ee & 536870912) !== 0 ? e = !1 : (Ql = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ut.current, a !== null && a.tag === 13 && (a.flags |= 16384))), od(t, e)) : ru(t);
  }
  function ru(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        od(
          t,
          Ql
        );
        return;
      }
      e = t.return;
      var l = Ih(
        t.alternate,
        t,
        Al
      );
      if (l !== null) {
        Se = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function od(e, t) {
    do {
      var l = Ph(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, Se = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        Se = e;
        return;
      }
      Se = e = l;
    } while (e !== null);
    Qe = 6, Se = null;
  }
  function fd(e, t, l, a, n, u, s, r, h) {
    e.cancelPendingCommit = null;
    do
      ou();
    while (lt !== 0);
    if ((De & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= cc, Dt(
        e,
        l,
        u,
        s,
        r,
        h
      ), e === ke && (Se = ke = null, Ee = 0), un = t, Jl = e, zl = l, vs = u, ys = n, ed = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, fv(_a, function() {
        return yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = x.T, x.T = null, n = m.p, m.p = 2, s = De, De |= 4;
        try {
          ev(e, t, l);
        } finally {
          De = s, m.p = n, x.T = a;
        }
      }
      lt = 1, dd(), md(), hd();
    }
  }
  function dd() {
    if (lt === 1) {
      lt = 0;
      var e = Jl, t = un, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = x.T, x.T = null;
        var a = m.p;
        m.p = 2;
        var n = De;
        De |= 4;
        try {
          Zf(t, e);
          var u = Ds, s = Fr(e.containerInfo), r = u.focusedElem, h = u.selectionRange;
          if (s !== r && r && r.ownerDocument && $r(
            r.ownerDocument.documentElement,
            r
          )) {
            if (h !== null && lc(r)) {
              var _ = h.start, R = h.end;
              if (R === void 0 && (R = _), "selectionStart" in r)
                r.selectionStart = _, r.selectionEnd = Math.min(
                  R,
                  r.value.length
                );
              else {
                var B = r.ownerDocument || document, T = B && B.defaultView || window;
                if (T.getSelection) {
                  var z = T.getSelection(), $ = r.textContent.length, ue = Math.min(h.start, $), Be = h.end === void 0 ? ue : Math.min(h.end, $);
                  !z.extend && ue > Be && (s = Be, Be = ue, ue = s);
                  var S = Jr(
                    r,
                    ue
                  ), p = Jr(
                    r,
                    Be
                  );
                  if (S && p && (z.rangeCount !== 1 || z.anchorNode !== S.node || z.anchorOffset !== S.offset || z.focusNode !== p.node || z.focusOffset !== p.offset)) {
                    var E = B.createRange();
                    E.setStart(S.node, S.offset), z.removeAllRanges(), ue > Be ? (z.addRange(E), z.extend(p.node, p.offset)) : (E.setEnd(p.node, p.offset), z.addRange(E));
                  }
                }
              }
            }
            for (B = [], z = r; z = z.parentNode; )
              z.nodeType === 1 && B.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < B.length; r++) {
              var q = B[r];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Su = !!Cs, Ds = Cs = null;
        } finally {
          De = n, m.p = a, x.T = l;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function md() {
    if (lt === 2) {
      lt = 0;
      var e = Jl, t = un, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = x.T, x.T = null;
        var a = m.p;
        m.p = 2;
        var n = De;
        De |= 4;
        try {
          Yf(e, t.alternate, t);
        } finally {
          De = n, m.p = a, x.T = l;
        }
      }
      lt = 3;
    }
  }
  function hd() {
    if (lt === 4 || lt === 3) {
      lt = 0, st();
      var e = Jl, t = un, l = zl, a = ed;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, un = Jl = null, vd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Kl = null), Bu(l), t = t.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            ia,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = x.T, n = m.p, m.p = 2, x.T = null;
        try {
          for (var u = e.onRecoverableError, s = 0; s < a.length; s++) {
            var r = a[s];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          x.T = t, m.p = n;
        }
      }
      (zl & 3) !== 0 && ou(), rl(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === gs ? ei++ : (ei = 0, gs = e) : ei = 0, ti(0);
    }
  }
  function vd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Rn(t)));
  }
  function ou() {
    return dd(), md(), hd(), yd();
  }
  function yd() {
    if (lt !== 5) return !1;
    var e = Jl, t = vs;
    vs = 0;
    var l = Bu(zl), a = x.T, n = m.p;
    try {
      m.p = 32 > l ? 32 : l, x.T = null, l = ys, ys = null;
      var u = Jl, s = zl;
      if (lt = 0, un = Jl = null, zl = 0, (De & 6) !== 0) throw Error(f(331));
      var r = De;
      if (De |= 4, Wf(u.current), Jf(
        u,
        u.current,
        s,
        l
      ), De = r, ti(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(ia, u);
        } catch {
        }
      return !0;
    } finally {
      m.p = n, x.T = a, vd(e, t);
    }
  }
  function gd(e, t, l) {
    t = Xt(l, t), t = $c(e.stateNode, t, 2), e = Yl(e, t, 2), e !== null && (le(e, 2), rl(e));
  }
  function Oe(e, t, l) {
    if (e.tag === 3)
      gd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Kl === null || !Kl.has(a))) {
            e = Xt(l, e), l = pf(2), a = Yl(t, l, 2), a !== null && (xf(
              l,
              a,
              t,
              e
            ), le(a, 2), rl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function bs(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new av();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (ds = !0, n.add(l), e = sv.bind(null, e, t, l), t.then(e, e));
  }
  function sv(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ke === e && (Ee & l) === l && (Qe === 4 || Qe === 3 && (Ee & 62914560) === Ee && 300 > Ze() - nu ? (De & 2) === 0 && cn(e, 0) : ms |= l, nn === Ee && (nn = 0)), rl(e);
  }
  function pd(e, t) {
    t === 0 && (t = He()), e = oa(e, t), e !== null && (le(e, t), rl(e));
  }
  function rv(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), pd(e, l);
  }
  function ov(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), pd(e, l);
  }
  function fv(e, t) {
    return Dl(e, t);
  }
  var fu = null, rn = null, js = !1, du = !1, Ss = !1, Fl = 0;
  function rl(e) {
    e !== rn && e.next === null && (rn === null ? fu = rn = e : rn = rn.next = e), du = !0, js || (js = !0, mv());
  }
  function ti(e, t) {
    if (!Ss && du) {
      Ss = !0;
      do
        for (var l = !1, a = fu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var s = a.suspendedLanes, r = a.pingedLanes;
              u = (1 << 31 - nt(42 | e) + 1) - 1, u &= n & ~(s & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Sd(a, u));
          } else
            u = Ee, u = Z(
              a,
              a === ke ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ye(a, u) || (l = !0, Sd(a, u));
          a = a.next;
        }
      while (l);
      Ss = !1;
    }
  }
  function dv() {
    xd();
  }
  function xd() {
    du = js = !1;
    var e = 0;
    Fl !== 0 && Nv() && (e = Fl);
    for (var t = Ze(), l = null, a = fu; a !== null; ) {
      var n = a.next, u = bd(a, t);
      u === 0 ? (a.next = null, l === null ? fu = n : l.next = n, n === null && (rn = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (du = !0)), a = n;
    }
    lt !== 0 && lt !== 5 || ti(e), Fl !== 0 && (Fl = 0);
  }
  function bd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - nt(u), r = 1 << s, h = n[s];
      h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[s] = xe(r, t)) : h <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = ke, l = Ee, l = Z(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && fl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ye(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && fl(a), Bu(l)) {
        case 2:
        case 8:
          l = hi;
          break;
        case 32:
          l = _a;
          break;
        case 268435456:
          l = bn;
          break;
        default:
          l = _a;
      }
      return a = jd.bind(null, e), l = Dl(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && fl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function jd(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ou() && e.callbackNode !== l)
      return null;
    var a = Ee;
    return a = Z(
      e,
      e === ke ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (ld(e, a, t), bd(e, Ze()), e.callbackNode != null && e.callbackNode === l ? jd.bind(null, e) : null);
  }
  function Sd(e, t) {
    if (ou()) return null;
    ld(e, t, !0);
  }
  function mv() {
    _v(function() {
      (De & 6) !== 0 ? Dl(
        xn,
        dv
      ) : xd();
    });
  }
  function Ns() {
    if (Fl === 0) {
      var e = Ka;
      e === 0 && (e = Aa, Aa <<= 1, (Aa & 261888) === 0 && (Aa = 256)), Fl = e;
    }
    return Fl;
  }
  function Nd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : bi("" + e);
  }
  function Ed(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function hv(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Nd(
        (n[St] || null).action
      ), s = a.submitter;
      s && (t = (t = s[St] || null) ? Nd(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var r = new Ei(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Fl !== 0) {
                  var h = s ? Ed(n, s) : new FormData(n);
                  Vc(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: n.method,
                      action: u
                    },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" && (r.preventDefault(), h = s ? Ed(n, s) : new FormData(n), Vc(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: n.method,
                    action: u
                  },
                  u,
                  h
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Es = 0; Es < uc.length; Es++) {
    var _s = uc[Es], vv = _s.toLowerCase(), yv = _s[0].toUpperCase() + _s.slice(1);
    Pt(
      vv,
      "on" + yv
    );
  }
  Pt(Pr, "onAnimationEnd"), Pt(eo, "onAnimationIteration"), Pt(to, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(Mh, "onTransitionRun"), Pt(Oh, "onTransitionStart"), Pt(Uh, "onTransitionCancel"), Pt(lo, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ua(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ua(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ua("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ua(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ua(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ua(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), gv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(li)
  );
  function _d(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var r = a[s], h = r.instance, _ = r.currentTarget;
            if (r = r.listener, h !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = _;
            try {
              u(n);
            } catch (R) {
              Ai(R);
            }
            n.currentTarget = null, u = h;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (r = a[s], h = r.instance, _ = r.currentTarget, r = r.listener, h !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = _;
            try {
              u(n);
            } catch (R) {
              Ai(R);
            }
            n.currentTarget = null, u = h;
          }
      }
    }
  }
  function Ne(e, t) {
    var l = t[Hu];
    l === void 0 && (l = t[Hu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Td(t, e, 2, !1), l.add(a));
  }
  function Ts(e, t, l) {
    var a = 0;
    t && (a |= 4), Td(
      l,
      e,
      a,
      t
    );
  }
  var mu = "_reactListening" + Math.random().toString(36).slice(2);
  function As(e) {
    if (!e[mu]) {
      e[mu] = !0, gr.forEach(function(l) {
        l !== "selectionchange" && (gv.has(l) || Ts(l, !1, e), Ts(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mu] || (t[mu] = !0, Ts("selectionchange", !1, t));
    }
  }
  function Td(e, t, l, a) {
    switch (tm(t)) {
      case 2:
        var n = Qv;
        break;
      case 8:
        n = Zv;
        break;
      default:
        n = Gs;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !Ku || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function zs(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var h = s.tag;
              if ((h === 3 || h === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; r !== null; ) {
            if (s = Ca(r), s === null) return;
            if (h = s.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = u = s;
              continue e;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    wr(function() {
      var _ = u, R = Qu(l), B = [];
      e: {
        var T = ao.get(e);
        if (T !== void 0) {
          var z = Ei, $ = e;
          switch (e) {
            case "keypress":
              if (Si(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = oh;
              break;
            case "focusin":
              $ = "focus", z = Wu;
              break;
            case "focusout":
              $ = "blur", z = Wu;
              break;
            case "beforeblur":
            case "afterblur":
              z = Wu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Mr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Im;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = mh;
              break;
            case Pr:
            case eo:
            case to:
              z = th;
              break;
            case lo:
              z = vh;
              break;
            case "scroll":
            case "scrollend":
              z = Fm;
              break;
            case "wheel":
              z = gh;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = ah;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Ur;
              break;
            case "toggle":
            case "beforetoggle":
              z = xh;
          }
          var ue = (t & 4) !== 0, Be = !ue && (e === "scroll" || e === "scrollend"), S = ue ? T !== null ? T + "Capture" : null : T;
          ue = [];
          for (var p = _, E; p !== null; ) {
            var q = p;
            if (E = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || E === null || S === null || (q = En(p, S), q != null && ue.push(
              ai(p, q, E)
            )), Be) break;
            p = p.return;
          }
          0 < ue.length && (T = new z(
            T,
            $,
            null,
            l,
            R
          ), B.push({ event: T, listeners: ue }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", T && l !== Xu && ($ = l.relatedTarget || l.fromElement) && (Ca($) || $[wa]))
            break e;
          if ((z || T) && (T = R.window === R ? R : (T = R.ownerDocument) ? T.defaultView || T.parentWindow : window, z ? ($ = l.relatedTarget || l.toElement, z = _, $ = $ ? Ca($) : null, $ !== null && (Be = v($), ue = $.tag, $ !== Be || ue !== 5 && ue !== 27 && ue !== 6) && ($ = null)) : (z = null, $ = _), z !== $)) {
            if (ue = Mr, q = "onMouseLeave", S = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (ue = Ur, q = "onPointerLeave", S = "onPointerEnter", p = "pointer"), Be = z == null ? T : Nn(z), E = $ == null ? T : Nn($), T = new ue(
              q,
              p + "leave",
              z,
              l,
              R
            ), T.target = Be, T.relatedTarget = E, q = null, Ca(R) === _ && (ue = new ue(
              S,
              p + "enter",
              $,
              l,
              R
            ), ue.target = E, ue.relatedTarget = Be, q = ue), Be = q, z && $)
              t: {
                for (ue = pv, S = z, p = $, E = 0, q = S; q; q = ue(q))
                  E++;
                q = 0;
                for (var ae = p; ae; ae = ue(ae))
                  q++;
                for (; 0 < E - q; )
                  S = ue(S), E--;
                for (; 0 < q - E; )
                  p = ue(p), q--;
                for (; E--; ) {
                  if (S === p || p !== null && S === p.alternate) {
                    ue = S;
                    break t;
                  }
                  S = ue(S), p = ue(p);
                }
                ue = null;
              }
            else ue = null;
            z !== null && Ad(
              B,
              T,
              z,
              ue,
              !1
            ), $ !== null && Be !== null && Ad(
              B,
              Be,
              $,
              ue,
              !0
            );
          }
        }
        e: {
          if (T = _ ? Nn(_) : window, z = T.nodeName && T.nodeName.toLowerCase(), z === "select" || z === "input" && T.type === "file")
            var we = Gr;
          else if (Lr(T))
            if (Vr)
              we = wh;
            else {
              we = Ah;
              var F = Th;
            }
          else
            z = T.nodeName, !z || z.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? _ && Vu(_.elementType) && (we = Gr) : we = zh;
          if (we && (we = we(e, _))) {
            Yr(
              B,
              we,
              l,
              R
            );
            break e;
          }
          F && F(e, T, _), e === "focusout" && _ && T.type === "number" && _.memoizedProps.value != null && Gu(T, "number", T.value);
        }
        switch (F = _ ? Nn(_) : window, e) {
          case "focusin":
            (Lr(F) || F.contentEditable === "true") && (ka = F, ac = _, Mn = null);
            break;
          case "focusout":
            Mn = ac = ka = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Wr(B, l, R);
            break;
          case "selectionchange":
            if (Dh) break;
          case "keydown":
          case "keyup":
            Wr(B, l, R);
        }
        var be;
        if (Pu)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          Ha ? Hr(e, l) && (_e = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Rr && l.locale !== "ko" && (Ha || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Ha && (be = Cr()) : (Ul = R, Ju = "value" in Ul ? Ul.value : Ul.textContent, Ha = !0)), F = hu(_, _e), 0 < F.length && (_e = new Or(
          _e,
          e,
          null,
          l,
          R
        ), B.push({ event: _e, listeners: F }), be ? _e.data = be : (be = kr(l), be !== null && (_e.data = be)))), (be = jh ? Sh(e, l) : Nh(e, l)) && (_e = hu(_, "onBeforeInput"), 0 < _e.length && (F = new Or(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          R
        ), B.push({
          event: F,
          listeners: _e
        }), F.data = be)), hv(
          B,
          e,
          _,
          l,
          R
        );
      }
      _d(B, t);
    });
  }
  function ai(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function hu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = En(e, l), n != null && a.unshift(
        ai(e, n, u)
      ), n = En(e, t), n != null && a.push(
        ai(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function pv(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ad(e, t, l, a, n) {
    for (var u = t._reactName, s = []; l !== null && l !== a; ) {
      var r = l, h = r.alternate, _ = r.stateNode;
      if (r = r.tag, h !== null && h === a) break;
      r !== 5 && r !== 26 && r !== 27 || _ === null || (h = _, n ? (_ = En(l, u), _ != null && s.unshift(
        ai(l, _, h)
      )) : n || (_ = En(l, u), _ != null && s.push(
        ai(l, _, h)
      ))), l = l.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var xv = /\r\n?/g, bv = /\u0000|\uFFFD/g;
  function zd(e) {
    return (typeof e == "string" ? e : "" + e).replace(xv, `
`).replace(bv, "");
  }
  function wd(e, t) {
    return t = zd(t), zd(e) === t;
  }
  function qe(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ra(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ra(e, "" + a);
        break;
      case "className":
        pi(e, "class", a);
        break;
      case "tabIndex":
        pi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pi(e, l, a);
        break;
      case "style":
        Ar(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          pi(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = bi("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && qe(e, t, "name", n.name, n, null), qe(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), qe(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), qe(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (qe(e, t, "encType", n.encType, n, null), qe(e, t, "method", n.method, n, null), qe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = bi("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = ml);
        break;
      case "onScroll":
        a != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = bi("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
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
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        Ne("beforetoggle", e), Ne("toggle", e), gi(e, "popover", a);
        break;
      case "xlinkActuate":
        dl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        dl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        dl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        dl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        dl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        dl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        dl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        dl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        dl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        gi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Jm.get(l) || l, gi(e, l, a));
    }
  }
  function ws(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Ar(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ra(e, a) : (typeof a == "number" || typeof a == "bigint") && Ra(e, "" + a);
        break;
      case "onScroll":
        a != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ne("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = ml);
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
        if (!pr.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[St] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : gi(e, l, a);
          }
    }
  }
  function mt(e, t, l) {
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
        Ne("error", e), Ne("load", e);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var s = l[u];
            if (s != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  qe(e, t, u, s, l, null);
              }
          }
        n && qe(e, t, "srcSet", l.srcSet, l, null), a && qe(e, t, "src", l.src, l, null);
        return;
      case "input":
        Ne("invalid", e);
        var r = u = s = n = null, h = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var R = l[a];
            if (R != null)
              switch (a) {
                case "name":
                  n = R;
                  break;
                case "type":
                  s = R;
                  break;
                case "checked":
                  h = R;
                  break;
                case "defaultChecked":
                  _ = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  r = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(f(137, t));
                  break;
                default:
                  qe(e, t, a, R, l, null);
              }
          }
        Nr(
          e,
          u,
          r,
          h,
          _,
          s,
          n,
          !1
        );
        return;
      case "select":
        Ne("invalid", e), a = s = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (r = l[n], r != null))
            switch (n) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                s = r;
                break;
              case "multiple":
                a = r;
              default:
                qe(e, t, n, r, l, null);
            }
        t = u, l = s, e.multiple = !!a, t != null ? Ua(e, !!a, t, !1) : l != null && Ua(e, !!a, l, !0);
        return;
      case "textarea":
        Ne("invalid", e), u = n = a = null;
        for (s in l)
          if (l.hasOwnProperty(s) && (r = l[s], r != null))
            switch (s) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                qe(e, t, s, r, l, null);
            }
        _r(e, a, n, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) && (a = l[h], a != null) && (h === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : qe(e, t, h, a, l, null));
        return;
      case "dialog":
        Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
        break;
      case "iframe":
      case "object":
        Ne("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < li.length; a++)
          Ne(li[a], e);
        break;
      case "image":
        Ne("error", e), Ne("load", e);
        break;
      case "details":
        Ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", e), Ne("load", e);
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
        for (_ in l)
          if (l.hasOwnProperty(_) && (a = l[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                qe(e, t, _, a, l, null);
            }
        return;
      default:
        if (Vu(t)) {
          for (R in l)
            l.hasOwnProperty(R) && (a = l[R], a !== void 0 && ws(
              e,
              t,
              R,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && (a = l[r], a != null && qe(e, t, r, a, l, null));
  }
  function jv(e, t, l, a) {
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
        var n = null, u = null, s = null, r = null, h = null, _ = null, R = null;
        for (z in l) {
          var B = l[z];
          if (l.hasOwnProperty(z) && B != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = B;
              default:
                a.hasOwnProperty(z) || qe(e, t, z, null, a, B);
            }
        }
        for (var T in a) {
          var z = a[T];
          if (B = l[T], a.hasOwnProperty(T) && (z != null || B != null))
            switch (T) {
              case "type":
                u = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                _ = z;
                break;
              case "defaultChecked":
                R = z;
                break;
              case "value":
                s = z;
                break;
              case "defaultValue":
                r = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(f(137, t));
                break;
              default:
                z !== B && qe(
                  e,
                  t,
                  T,
                  z,
                  a,
                  B
                );
            }
        }
        Yu(
          e,
          s,
          r,
          h,
          _,
          R,
          u,
          n
        );
        return;
      case "select":
        z = s = r = T = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = h;
              default:
                a.hasOwnProperty(u) || qe(
                  e,
                  t,
                  u,
                  null,
                  a,
                  h
                );
            }
        for (n in a)
          if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null))
            switch (n) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                s = u;
              default:
                u !== h && qe(
                  e,
                  t,
                  n,
                  u,
                  a,
                  h
                );
            }
        t = r, l = s, a = z, T != null ? Ua(e, !!l, T, !1) : !!a != !!l && (t != null ? Ua(e, !!l, t, !0) : Ua(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = T = null;
        for (r in l)
          if (n = l[r], l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, r, null, a, n);
            }
        for (s in a)
          if (n = a[s], u = l[s], a.hasOwnProperty(s) && (n != null || u != null))
            switch (s) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                z = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && qe(e, t, s, n, a, u);
            }
        Er(e, T, z);
        return;
      case "option":
        for (var $ in l)
          T = l[$], l.hasOwnProperty($) && T != null && !a.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : qe(
            e,
            t,
            $,
            null,
            a,
            T
          ));
        for (h in a)
          T = a[h], z = l[h], a.hasOwnProperty(h) && T !== z && (T != null || z != null) && (h === "selected" ? e.selected = T && typeof T != "function" && typeof T != "symbol" : qe(
            e,
            t,
            h,
            T,
            a,
            z
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
        for (var ue in l)
          T = l[ue], l.hasOwnProperty(ue) && T != null && !a.hasOwnProperty(ue) && qe(e, t, ue, null, a, T);
        for (_ in a)
          if (T = a[_], z = l[_], a.hasOwnProperty(_) && T !== z && (T != null || z != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(f(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  _,
                  T,
                  a,
                  z
                );
            }
        return;
      default:
        if (Vu(t)) {
          for (var Be in l)
            T = l[Be], l.hasOwnProperty(Be) && T !== void 0 && !a.hasOwnProperty(Be) && ws(
              e,
              t,
              Be,
              void 0,
              a,
              T
            );
          for (R in a)
            T = a[R], z = l[R], !a.hasOwnProperty(R) || T === z || T === void 0 && z === void 0 || ws(
              e,
              t,
              R,
              T,
              a,
              z
            );
          return;
        }
    }
    for (var S in l)
      T = l[S], l.hasOwnProperty(S) && T != null && !a.hasOwnProperty(S) && qe(e, t, S, null, a, T);
    for (B in a)
      T = a[B], z = l[B], !a.hasOwnProperty(B) || T === z || T == null && z == null || qe(e, t, B, T, a, z);
  }
  function Cd(e) {
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
  function Sv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, s = n.initiatorType, r = n.duration;
        if (u && r && Cd(s)) {
          for (s = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], _ = h.startTime;
            if (_ > r) break;
            var R = h.transferSize, B = h.initiatorType;
            R && Cd(B) && (h = h.responseEnd, s += R * (h < r ? 1 : (r - _) / (h - _)));
          }
          if (--a, t += 8 * (u + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Cs = null, Ds = null;
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
  function Ms(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Os = null;
  function Nv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Os ? !1 : (Os = e, !0) : (Os = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, Ev = typeof clearTimeout == "function" ? clearTimeout : void 0, Ud = typeof Promise == "function" ? Promise : void 0, _v = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ud < "u" ? function(e) {
    return Ud.resolve(null).then(e).catch(Tv);
  } : Od;
  function Tv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Wl(e) {
    return e === "head";
  }
  function Rd(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), mn(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          ni(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ni(l);
          for (var u = l.firstChild; u; ) {
            var s = u.nextSibling, r = u.nodeName;
            u[Sn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = s;
          }
        } else
          l === "body" && ni(e.ownerDocument.body);
      l = n;
    } while (l);
    mn(t);
  }
  function qd(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function Us(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Us(l), ku(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Av(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
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
  function zv(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bd(e, t) {
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
  function wv(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
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
  var Bs = null;
  function Hd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return $t(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function kd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ld(e, t, l) {
    switch (t = vu(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(f(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(f(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function ni(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ku(e);
  }
  var Ft = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Set();
  function yu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var wl = m.d;
  m.d = {
    f: Cv,
    r: Dv,
    D: Mv,
    C: Ov,
    L: Uv,
    m: Rv,
    X: Bv,
    S: qv,
    M: Hv
  };
  function Cv() {
    var e = wl.f(), t = cu();
    return e || t;
  }
  function Dv(e) {
    var t = Da(e);
    t !== null && t.tag === 5 && t.type === "form" ? af(t) : wl.r(e);
  }
  var on = typeof document > "u" ? null : document;
  function Gd(e, t, l) {
    var a = on;
    if (a && typeof t == "string" && t) {
      var n = Gt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Yd.has(n) || (Yd.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), mt(t, "link", e), ut(t), a.head.appendChild(t)));
    }
  }
  function Mv(e) {
    wl.D(e), Gd("dns-prefetch", e, null);
  }
  function Ov(e, t) {
    wl.C(e, t), Gd("preconnect", e, t);
  }
  function Uv(e, t, l) {
    wl.L(e, t, l);
    var a = on;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Gt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Gt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Gt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Gt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = fn(e);
          break;
        case "script":
          u = dn(e);
      }
      Ft.has(u) || (e = b(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ft.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(ii(u)) || t === "script" && a.querySelector(ui(u)) || (t = a.createElement("link"), mt(t, "link", e), ut(t), a.head.appendChild(t)));
    }
  }
  function Rv(e, t) {
    wl.m(e, t);
    var l = on;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Gt(a) + '"][href="' + Gt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = dn(e);
      }
      if (!Ft.has(u) && (e = b({ rel: "modulepreload", href: e }, t), Ft.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ui(u)))
              return;
        }
        a = l.createElement("link"), mt(a, "link", e), ut(a), l.head.appendChild(a);
      }
    }
  }
  function qv(e, t, l) {
    wl.S(e, t, l);
    var a = on;
    if (a && e) {
      var n = Ma(a).hoistableStyles, u = fn(e);
      t = t || "default";
      var s = n.get(u);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = a.querySelector(
          ii(u)
        ))
          r.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ft.get(u)) && Hs(e, l);
          var h = s = a.createElement("link");
          ut(h), mt(h, "link", e), h._p = new Promise(function(_, R) {
            h.onload = _, h.onerror = R;
          }), h.addEventListener("load", function() {
            r.loading |= 1;
          }), h.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, gu(s, t, a);
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
  function Bv(e, t) {
    wl.X(e, t);
    var l = on;
    if (l && e) {
      var a = Ma(l).hoistableScripts, n = dn(e), u = a.get(n);
      u || (u = l.querySelector(ui(n)), u || (e = b({ src: e, async: !0 }, t), (t = Ft.get(n)) && ks(e, t), u = l.createElement("script"), ut(u), mt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Hv(e, t) {
    wl.M(e, t);
    var l = on;
    if (l && e) {
      var a = Ma(l).hoistableScripts, n = dn(e), u = a.get(n);
      u || (u = l.querySelector(ui(n)), u || (e = b({ src: e, async: !0, type: "module" }, t), (t = Ft.get(n)) && ks(e, t), u = l.createElement("script"), ut(u), mt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Vd(e, t, l, a) {
    var n = (n = re.current) ? yu(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = fn(l.href), l = Ma(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = fn(l.href);
          var u = Ma(
            n
          ).hoistableStyles, s = u.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = n.querySelector(
            ii(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Ft.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ft.set(e, l), u || kv(
            n,
            e,
            l,
            s.state
          ))), t && a === null)
            throw Error(f(528, ""));
          return s;
        }
        if (t && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = dn(l), l = Ma(
          n
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, e));
    }
  }
  function fn(e) {
    return 'href="' + Gt(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xd(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function kv(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), mt(t, "link", l), ut(t), e.head.appendChild(t));
  }
  function dn(e) {
    return '[src="' + Gt(e) + '"]';
  }
  function ui(e) {
    return "script[async]" + e;
  }
  function Qd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Gt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, ut(a), a;
          var n = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ut(a), mt(a, "style", n), gu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = fn(l.href);
          var u = e.querySelector(
            ii(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ut(u), u;
          a = Xd(l), (n = Ft.get(n)) && Hs(a, n), u = (e.ownerDocument || e).createElement("link"), ut(u);
          var s = u;
          return s._p = new Promise(function(r, h) {
            s.onload = r, s.onerror = h;
          }), mt(u, "link", a), t.state.loading |= 4, gu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = dn(l.src), (n = e.querySelector(
            ui(u)
          )) ? (t.instance = n, ut(n), n) : (a = l, (n = Ft.get(u)) && (a = b({}, l), ks(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), ut(n), mt(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, gu(a, l.precedence, e));
    return t.instance;
  }
  function gu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, s = 0; s < a.length; s++) {
      var r = a[s];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ks(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var pu = null;
  function Zd(e, t, l) {
    if (pu === null) {
      var a = /* @__PURE__ */ new Map(), n = pu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = pu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Sn] || u[rt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var r = a.get(s);
        r ? r.push(u) : a.set(s, [u]);
      }
    }
    return a;
  }
  function Kd(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Lv(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
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
  function Yv(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = fn(a.href), u = t.querySelector(
          ii(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = xu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, ut(u);
          return;
        }
        u = t.ownerDocument || t, a = Xd(a), (n = Ft.get(n)) && Hs(a, n), u = u.createElement("link"), ut(u);
        var s = u;
        s._p = new Promise(function(r, h) {
          s.onload = r, s.onerror = h;
        }), mt(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = xu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Ls = 0;
  function Gv(e, t) {
    return e.stylesheets && e.count === 0 && ju(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && ju(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ls === 0 && (Ls = 62500 * Sv());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ju(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ls ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function xu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ju(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var bu = null;
  function ju(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bu = /* @__PURE__ */ new Map(), t.forEach(Vv, e), bu = null, xu.call(e));
  }
  function Vv(e, t) {
    if (!(t.state.loading & 4)) {
      var l = bu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), bu.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var s = n[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s);
        }
        a && l.set(null, a);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), u = l.get(s) || a, u === a && l.set(null, n), l.set(s, n), this.count++, a = xu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ci = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function Xv(e, t, l, a, n, u, s, r, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = it(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = it(0), this.hiddenUpdates = it(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $d(e, t, l, a, n, u, s, r, h, _, R, B) {
    return e = new Xv(
      e,
      t,
      l,
      s,
      h,
      _,
      R,
      B,
      r
    ), t = 1, u === !0 && (t |= 24), u = Ot(3, null, null, t), e.current = u, u.stateNode = e, t = xc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Nc(u), e;
  }
  function Fd(e) {
    return e ? (e = Ga, e) : Ga;
  }
  function Wd(e, t, l, a, n, u) {
    n = Fd(n), a.context === null ? a.context = n : a.pendingContext = n, a = Ll(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Yl(e, a, t), l !== null && (zt(l, e, t), kn(l, e, t));
  }
  function Id(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ys(e, t) {
    Id(e, t), (e = e.alternate) && Id(e, t);
  }
  function Pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = oa(e, 67108864);
      t !== null && zt(t, e, 67108864), Ys(e, 67108864);
    }
  }
  function em(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = qu(t);
      var l = oa(e, t);
      l !== null && zt(l, e, t), Ys(e, t);
    }
  }
  var Su = !0;
  function Qv(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var u = m.p;
    try {
      m.p = 2, Gs(e, t, l, a);
    } finally {
      m.p = u, x.T = n;
    }
  }
  function Zv(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var u = m.p;
    try {
      m.p = 8, Gs(e, t, l, a);
    } finally {
      m.p = u, x.T = n;
    }
  }
  function Gs(e, t, l, a) {
    if (Su) {
      var n = Vs(a);
      if (n === null)
        zs(
          e,
          t,
          a,
          Nu,
          l
        ), lm(e, a);
      else if (Jv(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (lm(e, a), t & 4 && -1 < Kv.indexOf(e)) {
        for (; n !== null; ) {
          var u = Da(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = k(u.pendingLanes);
                  if (s !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var h = 1 << 31 - nt(s);
                      r.entanglements[1] |= h, s &= ~h;
                    }
                    rl(u), (De & 6) === 0 && (iu = Ze() + 500, ti(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = oa(u, 2), r !== null && zt(r, u, 2), cu(), Ys(u, 2);
            }
          if (u = Vs(a), u === null && zs(
            e,
            t,
            a,
            Nu,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        zs(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Vs(e) {
    return e = Qu(e), Xs(e);
  }
  var Nu = null;
  function Xs(e) {
    if (Nu = null, e = Ca(e), e !== null) {
      var t = v(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = A(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = C(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Nu = e, null;
  }
  function tm(e) {
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
        switch (pn()) {
          case xn:
            return 2;
          case hi:
            return 8;
          case _a:
          case vi:
            return 32;
          case bn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qs = !1, Il = null, Pl = null, ea = null, si = /* @__PURE__ */ new Map(), ri = /* @__PURE__ */ new Map(), ta = [], Kv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Il = null;
        break;
      case "dragenter":
      case "dragleave":
        Pl = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
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
  function oi(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Da(t), t !== null && Pd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Jv(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Il = oi(
          Il,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Pl = oi(
          Pl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return ea = oi(
          ea,
          e,
          t,
          l,
          a,
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
            l,
            a,
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
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function am(e) {
    var t = Ca(e.target);
    if (t !== null) {
      var l = v(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = A(l), t !== null) {
            e.blockedOn = t, vr(e.priority, function() {
              em(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = C(l), t !== null) {
            e.blockedOn = t, vr(e.priority, function() {
              em(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Vs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Xu = a, l.target.dispatchEvent(a), Xu = null;
      } else
        return t = Da(l), t !== null && Pd(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function nm(e, t, l) {
    Eu(e) && l.delete(t);
  }
  function $v() {
    Qs = !1, Il !== null && Eu(Il) && (Il = null), Pl !== null && Eu(Pl) && (Pl = null), ea !== null && Eu(ea) && (ea = null), si.forEach(nm), ri.forEach(nm);
  }
  function _u(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qs || (Qs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      $v
    )));
  }
  var Tu = null;
  function im(e) {
    Tu !== e && (Tu = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Tu === e && (Tu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (Xs(a || l) === null)
              continue;
            break;
          }
          var u = Da(l);
          u !== null && (e.splice(t, 3), t -= 3, Vc(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function mn(e) {
    function t(h) {
      return _u(h, e);
    }
    Il !== null && _u(Il, e), Pl !== null && _u(Pl, e), ea !== null && _u(ea, e), si.forEach(t), ri.forEach(t);
    for (var l = 0; l < ta.length; l++) {
      var a = ta[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ta.length && (l = ta[0], l.blockedOn === null); )
      am(l), l.blockedOn === null && ta.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], s = n[St] || null;
        if (typeof u == "function")
          s || im(l);
        else if (s) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, s = u[St] || null)
              r = s.formAction;
            else if (Xs(n) !== null) continue;
          } else r = s.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), im(l);
        }
      }
  }
  function um() {
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
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Zs(e) {
    this._internalRoot = e;
  }
  Au.prototype.render = Zs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var l = t.current, a = Ht();
    Wd(l, a, e, t, null, null);
  }, Au.prototype.unmount = Zs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wd(e.current, 2, null, e, null, null), cu(), t[wa] = null;
    }
  };
  function Au(e) {
    this._internalRoot = e;
  }
  Au.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = hr();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ta.length && t !== 0 && t < ta[l].priority; l++) ;
      ta.splice(l, 0, e), l === 0 && am(e);
    }
  };
  var cm = o.version;
  if (cm !== "19.2.8")
    throw Error(
      f(
        527,
        cm,
        "19.2.8"
      )
    );
  m.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = y(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Fv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zu.isDisabled && zu.supportsFiber)
      try {
        ia = zu.inject(
          Fv
        ), ht = zu;
      } catch {
      }
  }
  return di.createRoot = function(e, t) {
    if (!N(e)) throw Error(f(299));
    var l = !1, a = "", n = hf, u = vf, s = yf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = $d(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      s,
      um
    ), e[wa] = t.current, As(e), new Zs(t);
  }, di.hydrateRoot = function(e, t, l) {
    if (!N(e)) throw Error(f(299));
    var a = !1, n = "", u = hf, s = vf, r = yf, h = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), t = $d(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      h,
      u,
      s,
      r,
      um
    ), t.context = Fd(null), l = t.current, a = Ht(), a = qu(a), n = Ll(a), n.callback = null, Yl(l, n, a), l = a, t.current.lanes = l, le(t, l), rl(t), e[wa] = t.current, As(e), new Au(t);
  }, di.version = "19.2.8", di;
}
var gm;
function uy() {
  if (gm) return $s.exports;
  gm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), $s.exports = iy(), $s.exports;
}
var cy = uy();
const lr = "hana.plugin.ui", ar = 1, sy = "X-Hana-Plugin-Surface-Session", ry = "pluginSurfaceSession", Am = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Na = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, oy = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function pm(c) {
  return typeof c == "object" && c !== null;
}
function aa(c) {
  return {
    ok: !1,
    error: {
      code: Am.BAD_MESSAGE,
      message: c
    }
  };
}
function xm(c) {
  if (!pm(c))
    return aa("Plugin UI messages must be objects.");
  if (c.protocol !== lr)
    return aa("Plugin UI message protocol is missing or invalid.");
  if (c.version !== ar)
    return {
      ok: !1,
      error: {
        code: Am.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(c.version)}.`
      }
    };
  if (typeof c.kind != "string" || !oy.has(c.kind))
    return aa("Plugin UI message kind is missing or invalid.");
  if (typeof c.type != "string" || c.type.trim() === "")
    return aa("Plugin UI message type must be a non-empty string.");
  const o = c.kind;
  if (o !== "event" && (typeof c.id != "string" || c.id.trim() === ""))
    return aa(`Plugin UI ${o} messages must include a non-empty id.`);
  if (o === "error") {
    if (!pm(c.error))
      return aa("Plugin UI error messages must include an error object.");
    if (typeof c.error.code != "string" || c.error.code.trim() === "")
      return aa("Plugin UI error code must be a non-empty string.");
    if (typeof c.error.message != "string" || c.error.message.trim() === "")
      return aa("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: c
  };
}
class bm extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(o) {
    super(o.message), this.code = o.code, this.details = o.details;
  }
}
let jm = 0;
function fy() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (jm += 1, `hana-plugin-${Date.now()}-${jm}`);
}
function dy() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function my(c) {
  if (!c)
    return null;
  try {
    return new URL(c).origin;
  } catch {
    return null;
  }
}
function hy(c, o) {
  if (o)
    return o;
  const d = new URLSearchParams(c.location.search).get("hana-host-origin");
  return d || (my(c.document.referrer) ?? "*");
}
function vy(c) {
  const o = new URLSearchParams(c.location.search);
  return {
    theme: o.get("hana-theme") ?? void 0,
    cssUrl: o.get("hana-css") ?? void 0
  };
}
function Sm(c, o, d) {
  return !(c.source !== o || d !== "*" && c.origin !== d);
}
function yy(c) {
  return typeof c == "string" ? { url: c } : c;
}
function gy(c) {
  return typeof c == "string" ? { text: c } : c;
}
function zm(c) {
  const o = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(c.location.pathname || "");
  if (!o)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(o[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function py(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (c.includes("\\") || c.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(c))
    throw new Error("Invalid plugin asset path.");
  const o = c.replace(/^\/+/, "");
  if (!o || o.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const d = o.split("/");
  if (d.some((f) => !f || f === "." || f === ".." || f.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return d.map((f) => encodeURIComponent(f)).join("/");
}
function xy(c, o) {
  const d = zm(c), f = py(o);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/assets/${f}`;
}
function by(c) {
  return new URLSearchParams(c.location.search).get(ry) || null;
}
function jy(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin API path.");
  const o = c.trim();
  if (!o || o.includes("\\") || o.includes("\0") || o.includes("#") || o.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(o))
    throw new Error("Invalid plugin API path.");
  const d = o.replace(/^\/+/, "");
  if (!d || d.startsWith("./") || d === "api/plugins" || d.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const f = d.indexOf("?"), N = f >= 0 ? d.slice(0, f) : d;
  if (!N)
    throw new Error("Invalid plugin API path.");
  const v = N.split("/");
  for (const j of v) {
    if (!j)
      throw new Error("Invalid plugin API path.");
    let y;
    try {
      y = decodeURIComponent(j);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (y === "." || y === ".." || y.includes("/") || y.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const A = new URL(`http://hana.local/${d}`);
  return `${v.map((j) => encodeURIComponent(decodeURIComponent(j))).join("/")}${A.search}`;
}
function wm(c, o) {
  const d = zm(c), f = jy(o);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(d)}/${f}`;
}
function Sy(c, o, d) {
  const f = by(c);
  if (!f)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const N = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!N)
    throw new Error("hana.api.fetch requires window.fetch.");
  const v = d ?? {}, A = new Headers(v.headers);
  return A.set(sy, f), N(wm(c, o), {
    ...v,
    headers: A
  });
}
function Ny(c = {}) {
  const o = c.targetWindow ?? dy(), d = c.parentWindow ?? o.parent, f = hy(o, c.targetOrigin), N = c.requestTimeoutMs ?? 1e4, v = c.idFactory ?? fy;
  let A = vy(o);
  const C = /* @__PURE__ */ new Set();
  function j(D) {
    d.postMessage(D, f);
  }
  function y(D, Y) {
    const ee = {
      protocol: lr,
      version: ar,
      kind: "event",
      type: D
    };
    Y !== void 0 && (ee.payload = Y), j(ee);
  }
  function O(D) {
    if (!Sm(D, d, f))
      return;
    const Y = xm(D.data);
    if (!Y.ok)
      return;
    const ee = Y.value;
    if (ee.kind !== "event" || ee.type !== "hana.theme.changed" || typeof ee.payload != "object" || ee.payload === null)
      return;
    const te = ee.payload;
    A = {
      theme: typeof te.theme == "string" ? te.theme : A.theme,
      cssUrl: typeof te.cssUrl == "string" ? te.cssUrl : A.cssUrl
    };
    for (const he of C)
      he(A);
  }
  function b(D, Y, ee = {}) {
    const te = v(), he = ee.timeoutMs ?? N;
    return new Promise((J, me) => {
      const fe = () => {
        o.removeEventListener("message", ne), o.clearTimeout(W);
      }, ne = (w) => {
        if (!Sm(w, d, f))
          return;
        const P = xm(w.data);
        if (!P.ok)
          return;
        const H = P.value;
        H.id !== te || H.type !== D || (H.kind === "response" && (fe(), J(H.payload)), H.kind === "error" && H.error && (fe(), me(new bm(H.error))));
      }, W = o.setTimeout(() => {
        fe(), me(new bm({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${D}.`
        }));
      }, he);
      o.addEventListener("message", ne);
      const I = {
        protocol: lr,
        version: ar,
        id: te,
        kind: "request",
        type: D
      };
      Y !== void 0 && (I.payload = Y), j(I);
    });
  }
  return {
    ready(D) {
      y("hana.ready", D);
    },
    assets: {
      url(D) {
        return xy(o, D);
      }
    },
    api: {
      url(D) {
        return wm(o, D);
      },
      fetch(D, Y) {
        return Sy(o, D, Y);
      }
    },
    ui: {
      resize(D) {
        y(Na.UI_RESIZE, D);
      }
    },
    theme: {
      getSnapshot() {
        return { ...A };
      },
      subscribe(D) {
        return C.size === 0 && o.addEventListener("message", O), C.add(D), D({ ...A }), () => {
          C.delete(D), C.size === 0 && o.removeEventListener("message", O);
        };
      }
    },
    host: {
      request: b
    },
    toast: {
      show(D, Y) {
        return b(Na.TOAST_SHOW, D, Y);
      }
    },
    external: {
      open(D, Y) {
        return b(Na.EXTERNAL_OPEN, yy(D), Y);
      }
    },
    clipboard: {
      writeText(D, Y) {
        return b(Na.CLIPBOARD_WRITE_TEXT, gy(D), Y);
      }
    },
    resources: {
      open(D, Y) {
        return b(Na.RESOURCE_OPEN, D, Y);
      },
      pick(D = {}, Y) {
        return b(Na.RESOURCE_PICK, D, Y);
      },
      requestAccess(D, Y) {
        return b(Na.RESOURCE_REQUEST_ACCESS, D, Y);
      }
    }
  };
}
let Nm = null;
function wt() {
  return Nm ??= Ny(), Nm;
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
    fetch(c, o) {
      return wt().api.fetch(c, o);
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
    request(c, o, d) {
      return wt().host.request(c, o, d);
    }
  },
  toast: {
    show(c, o) {
      return wt().toast.show(c, o);
    }
  },
  external: {
    open(c, o) {
      return wt().external.open(c, o);
    }
  },
  clipboard: {
    writeText(c, o) {
      return wt().clipboard.writeText(c, o);
    }
  },
  resources: {
    open(c, o) {
      return wt().resources.open(c, o);
    },
    pick(c, o) {
      return wt().resources.pick(c, o);
    },
    requestAccess(c, o) {
      return wt().resources.requestAccess(c, o);
    }
  }
};
function na(...c) {
  return c.filter(Boolean).join(" ");
}
const Em = {
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
}, Ey = {
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
function _y({ mode: c = "inherit", theme: o, className: d, style: f, children: N, "data-testid": v = "hana-plugin-theme", ...A }) {
  const C = typeof o == "string" ? o : void 0, j = Ty(c, o);
  return i.jsx("div", { ...A, "data-testid": v, className: na("hana-plugin-theme", d), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? C : void 0, style: { ...j, ...f }, children: N });
}
function Ty(c, o) {
  if (c === "inherit")
    return {};
  const d = Ay(c, o), f = {};
  for (const [N, v] of Object.entries(Ey)) {
    const A = d?.[N];
    A && (f[v] = A);
  }
  return f;
}
function Ay(c, o) {
  if (typeof o == "string")
    return Em[o];
  if (o)
    return o;
  if (c === "hana")
    return Em["warm-paper"];
}
M.forwardRef(function({ variant: o = "secondary", size: d = "md", loading: f = !1, iconLeft: N, iconRight: v, disabled: A, className: C, children: j, type: y = "button", ...O }, b) {
  return i.jsxs("button", { ...O, ref: b, type: y, disabled: A || f, className: na("hana-plugin-button", `hana-plugin-button-${o}`, `hana-plugin-button-${d}`, f && "hana-plugin-button-loading", C), children: [f ? i.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : N, j && i.jsx("span", { className: "hana-plugin-button-label", children: j }), !f && v] });
});
M.forwardRef(function({ label: o, size: d = "md", variant: f = "ghost", className: N, children: v, type: A = "button", ...C }, j) {
  return i.jsx("button", { ...C, ref: j, type: A, "aria-label": o, title: C.title || o, className: na("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${f}`, N), children: v });
});
M.forwardRef(function({ label: o, hint: d, error: f, id: N, className: v, inputClassName: A, ...C }, j) {
  const y = M.useId(), O = N || y;
  return i.jsx(Cm, { label: o, hint: d, error: f, htmlFor: O, className: v, children: i.jsx("input", { ...C, ref: j, id: O, "aria-invalid": !!f, className: na("hana-plugin-input", A) }) });
});
M.forwardRef(function({ label: o, hint: d, error: f, id: N, className: v, textareaClassName: A, rows: C = 4, ...j }, y) {
  const O = M.useId(), b = N || O;
  return i.jsx(Cm, { label: o, hint: d, error: f, htmlFor: b, className: v, children: i.jsx("textarea", { ...j, ref: y, id: b, rows: C, "aria-invalid": !!f, className: na("hana-plugin-textarea", A) }) });
});
M.forwardRef(function({ checked: o, onChange: d, label: f, disabled: N, className: v, onClick: A, type: C = "button", ...j }, y) {
  const O = typeof f == "string" ? f : j["aria-label"];
  return i.jsxs("span", { className: na("hana-plugin-switch-wrap", v), children: [i.jsx("button", { ...j, ref: y, type: C, role: "switch", "aria-checked": o, "aria-label": O, disabled: N, className: na("hana-plugin-switch", o && "hana-plugin-switch-on"), onClick: (b) => {
    A?.(b), !b.defaultPrevented && !N && d?.(!o);
  }, children: i.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), f && i.jsx("span", { className: "hana-plugin-switch-label", children: f })] });
});
function Cm({ label: c, hint: o, error: d, htmlFor: f, className: N, children: v }) {
  return i.jsxs("div", { className: na("hana-plugin-field", N), children: [c && i.jsx("label", { className: "hana-plugin-field-label", htmlFor: f, children: c }), o && i.jsx("div", { className: "hana-plugin-field-hint", children: o }), v, d && i.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const Dm = /^\d{4}-\d{2}-\d{2}$/;
function Ea(c, o) {
  if (!Dm.test(c)) return c;
  const d = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + o), d.toISOString().slice(0, 10);
}
function or(c) {
  const o = String(c || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: o[0] || "",
    end: o[1] || o[0] || ""
  };
}
function nr(c) {
  const o = (/* @__PURE__ */ new Date(`${c}T12:00:00Z`)).getUTCDay();
  return o === 0 ? 6 : o - 1;
}
function Mm(c, o) {
  return Array.from({ length: o }, (d, f) => Ea(c, f));
}
function ir(c, o) {
  const f = or(c).start || o, N = Ea(f, -nr(f));
  return Mm(N, 7);
}
function Om(c, o, d = 3) {
  const f = Math.max(1, Math.floor(d)), N = Math.max(0, Math.floor(o)), v = c.slice(N * f, N * f + f);
  return [...v, ...Array(Math.max(0, f - v.length)).fill(null)];
}
function zy(c, o) {
  const f = or(c).start || o, N = Dm.test(f) ? `${f.slice(0, 7)}-01` : o, v = /* @__PURE__ */ new Date(`${N}T12:00:00Z`);
  v.setUTCMonth(v.getUTCMonth() + 1, 1);
  const A = new Date(v);
  A.setUTCDate(A.getUTCDate() - 1);
  const C = A.toISOString().slice(0, 10), j = Ea(N, -nr(N)), y = 6 - nr(C), O = Ea(C, y), b = Math.round(((/* @__PURE__ */ new Date(`${O}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${j}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Mm(j, b);
}
function wu(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function mi(c) {
  if (!c || c.length < 16) return null;
  const o = Number(c.slice(11, 13)), d = Number(c.slice(14, 16));
  return !Number.isFinite(o) || !Number.isFinite(d) ? null : o * 60 + d;
}
function Um(c) {
  const o = c.map((v) => mi(v.start_at || v.deadline_at)).filter((v) => v !== null), d = c.map((v) => {
    const A = mi(v.end_at);
    if (A !== null) return A;
    const C = mi(v.start_at || v.deadline_at);
    return C === null ? null : C + Number(v.duration || v.estimated_minutes || 45);
  }).filter((v) => v !== null), f = o.length ? Math.floor(Math.min(...o) / 60) - 1 : 10, N = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, f)),
    endHour: Math.min(24, Math.max(22, N))
  };
}
function Rm(c, o, d, f = 56) {
  const N = mi(c.start_at || c.deadline_at);
  if (N === null) return null;
  const A = mi(c.end_at) ?? N + Number(c.duration || c.estimated_minutes || 45), C = Math.max(o * 60, N), j = Math.min(d * 60, Math.max(A, C + 30));
  return {
    top: (C - o * 60) / 60 * f,
    height: Math.max(30, (j - C) / 60 * f)
  };
}
function fr(c) {
  const o = c.map((v) => {
    const A = v.start_at || v.deadline_at, C = A ? new Date(A).getTime() : Number.NaN, j = v.end_at ? new Date(v.end_at).getTime() : Number.NaN, y = Number.isFinite(j) ? j : C + Number(v.duration || v.estimated_minutes || 45) * 6e4;
    return { item: v, start: C, end: y };
  }).filter((v) => Number.isFinite(v.start)).sort((v, A) => v.start - A.start || v.end - A.end), d = [], f = o.map((v) => {
    let A = d.findIndex((C) => C <= v.start);
    return A < 0 && (A = d.length), d[A] = v.end, { ...v, lane: A };
  }), N = Math.max(1, d.length);
  return f.map((v) => ({ ...v, laneCount: N }));
}
function wy(c, o) {
  return c && typeof c == "object" && "error" in c && typeof c.error == "string" && c.error.trim() ? c.error.trim() : o;
}
async function Cy(c) {
  const o = await c.text();
  let d = null;
  if (o.trim())
    try {
      d = JSON.parse(o);
    } catch {
      throw new Error(c.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${c.status}）`);
    }
  if (!c.ok)
    throw new Error(wy(d, `请求失败（HTTP ${c.status}）`));
  if (!d || typeof d != "object")
    throw new Error("插件接口没有返回有效数据");
  return d;
}
async function kt(c, o) {
  let d;
  try {
    d = await rr.api.fetch(c, o);
  } catch (f) {
    const N = f instanceof Error ? f.message : String(f || "未知错误");
    throw new Error(`页面会话请求失败：${N}`);
  }
  return Cy(d);
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
    isCurrent(o) {
      return o === c;
    }
  };
}
function dr(c, o) {
  const d = M.useRef(null), f = M.useRef(o);
  return f.current = o, M.useEffect(() => {
    if (!c) return;
    const N = (v) => {
      const A = v.target;
      d.current && A && !d.current.contains(A) && f.current();
    };
    return document.addEventListener("pointerdown", N), () => document.removeEventListener("pointerdown", N);
  }, [c]), d;
}
const _m = [
  { id: "overview", label: "总览" },
  { id: "cockpit", label: "驾驶舱" },
  { id: "planning", label: "筹备" },
  { id: "affairs", label: "事务" }
], cr = {
  today: "今天",
  week: "本周",
  month: "本月",
  horizon: "未来"
}, Dy = {
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
function My(c) {
  const o = c;
  if (!o || !Array.isArray(o.items) || !Array.isArray(o.pending) || !Array.isArray(o.courses) || !Array.isArray(o.affairs) || !Array.isArray(o.students) || !Array.isArray(o.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return o;
}
function Oy(c) {
  const o = c, d = o ? [
    o.students,
    o.inactiveConfirmed,
    o.pending,
    o.confirmed,
    o.reservations,
    o.templates,
    o.reviews,
    o.vacations,
    o.zones,
    o.availability,
    o.sources,
    o.warnings
  ] : [];
  if (!o || !o.summary || !o.audit || !o.commute || d.some((f) => !Array.isArray(f)))
    throw new Error("筹备接口返回的数据结构不完整");
  return o;
}
class Uy extends M.Component {
  state = { error: "" };
  static getDerivedStateFromError(o) {
    return { error: o instanceof Error ? o.message : "页面渲染异常" };
  }
  componentDidCatch(o, d) {
    console.error("[laosu-workbench] render failed", o, d.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ i.jsx("div", { className: "workbench-shell", children: /* @__PURE__ */ i.jsx("main", { className: "main-area", children: /* @__PURE__ */ i.jsxs("div", { className: "notice error", role: "alert", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "课务台页面异常" }),
      /* @__PURE__ */ i.jsx("span", { children: this.state.error }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => window.location.reload(), children: "重新载入" })
    ] }) }) }) : this.props.children;
  }
}
function al(c, o) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...o
  }).format(new Date(c)) : "未定";
}
function Lt(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Ry(c) {
  return c ? `更新于 ${Lt(c)}` : "尚未更新";
}
function Cu(c) {
  if (!c) return "当前范围";
  const [o, d] = c.split("..");
  if (!o || !d || !/^\d{4}-\d{2}-\d{2}$/.test(o) || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return c;
  const f = (N) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${N}T12:00:00+08:00`));
  return o === d ? f(o) : `${f(o)}—${f(d)}`;
}
function $e(c) {
  return c.start_at || c.deadline_at || null;
}
function qm(c) {
  return ["completed", "已完成"].includes(c) ? "done" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function yn(c) {
  const o = qm(c.status);
  return o === "done" ? "state-confirmed" : o === "muted" ? "state-neutral" : o === "error" ? "state-error" : o === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function vn(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function qy() {
  const c = new URLSearchParams(window.location.search), o = window.localStorage.getItem("laosu-workbench.tab"), d = window.localStorage.getItem("laosu-workbench.scope"), f = c.get("tab") || o || "overview", N = c.get("scope") || d || "week", v = _m.map((k) => k.id).includes(f) ? f : "overview", A = ["today", "week", "month", "horizon"].includes(N) ? N : "week", C = c.get("preview"), [j, y] = M.useState(v), [O, b] = M.useState(A), [D, Y] = M.useState(f === "actions" || !!C), [ee, te] = M.useState(null), he = ee !== null, [J, me] = M.useState(null), [fe, ne] = M.useState(!0), [W, I] = M.useState(""), [w, P] = M.useState(null), [H, ze] = M.useState(null), [Ae, je] = M.useState({ text: "", nonce: 0 }), [et, Ue] = M.useState(!1), [Ve, x] = M.useState(""), [m, V] = M.useState(null), [L, se] = M.useState({}), [g, U] = M.useState(!1), [X, Q] = M.useState(null), [de, re] = M.useState(0), [pe, G] = M.useState(null), ie = M.useRef(null), oe = M.useRef(null), K = M.useRef(ur()), tt = M.useRef(ur()), jt = M.useRef(/* @__PURE__ */ new Set()), yt = M.useRef(null), Ct = M.useRef(!1), gt = M.useRef(!1), Cl = M.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    cockpit: Number(window.sessionStorage.getItem("laosu-workbench.scroll.cockpit") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), at = M.useCallback(async (k = O, Z = {}) => {
    const ye = Z.silent === !0, xe = K.current.begin();
    ye || (ne(!0), I(""));
    try {
      const He = new URLSearchParams({ scope: k });
      Z.fresh && He.set("fresh", "1");
      const it = My(await kt(`api/dashboard?${He.toString()}`));
      return K.current.isCurrent(xe) ? (me(it), !0) : null;
    } catch (He) {
      return K.current.isCurrent(xe) ? (ye || I(He.message || "读取失败"), !1) : null;
    } finally {
      K.current.isCurrent(xe) && !ye && ne(!1);
    }
  }, [O]);
  M.useEffect(() => {
    at(A);
  }, []), M.useEffect(() => {
    const k = (Z) => {
      Z.target instanceof HTMLElement && !ie.current?.contains(Z.target) && (yt.current = Z.target);
    };
    return window.addEventListener("pointerdown", k, !0), () => window.removeEventListener("pointerdown", k, !0);
  }, []), M.useEffect(() => {
    C && (Y(!0), kt(`api/preview/${encodeURIComponent(C)}`).then(P).catch((k) => {
      P({ ok: !1, error: k.message });
    }));
  }, [C]), M.useEffect(() => {
    if (!D) return;
    const k = ie.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Ct.current) {
      const le = new URL(window.location.href);
      le.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", le), Ct.current = !0;
    }
    const ye = window.setTimeout(() => {
      ((H ? k?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : k?.querySelector(".ai-composer textarea")) || k?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), H && k?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), xe = () => Array.from(k?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((le) => le.getClientRects().length > 0 && !le.closest("[hidden]")), He = (le) => {
      if (le.key === "Escape") {
        le.preventDefault(), nt();
        return;
      }
      if (le.key !== "Tab") return;
      const Dt = xe();
      if (!Dt.length) return;
      const nl = Dt[0], il = Dt[Dt.length - 1];
      k?.contains(document.activeElement) ? le.shiftKey && document.activeElement === nl ? (le.preventDefault(), il.focus()) : !le.shiftKey && document.activeElement === il && (le.preventDefault(), nl.focus()) : (le.preventDefault(), (le.shiftKey ? il : nl).focus());
    }, it = () => {
      Ct.current && (Ct.current = !1, Y(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", He), window.addEventListener("popstate", it), () => {
      window.clearTimeout(ye), document.body.style.overflow = Z, window.removeEventListener("keydown", He), window.removeEventListener("popstate", it), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [D]), M.useEffect(() => {
    if (!he) return;
    const k = oe.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !gt.current) {
      const le = new URL(window.location.href);
      le.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", le), gt.current = !0;
    }
    const ye = window.setTimeout(() => k?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), xe = () => Array.from(k?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((le) => le.getClientRects().length > 0 && !le.closest("[hidden]")), He = (le) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (le.key === "Escape") {
        le.preventDefault(), jn();
        return;
      }
      if (le.key !== "Tab") return;
      const Dt = xe();
      if (!Dt.length) return;
      const nl = Dt[0], il = Dt[Dt.length - 1];
      k?.contains(document.activeElement) ? le.shiftKey && document.activeElement === nl ? (le.preventDefault(), il.focus()) : !le.shiftKey && document.activeElement === il && (le.preventDefault(), nl.focus()) : (le.preventDefault(), (le.shiftKey ? il : nl).focus());
    }, it = () => {
      const le = new URL(window.location.href).searchParams.get("drawer");
      le === "context" || le === "actions" || !gt.current || (gt.current = !1, te(null));
    };
    return window.addEventListener("keydown", He), window.addEventListener("popstate", it), () => {
      window.clearTimeout(ye), document.body.style.overflow = Z, window.removeEventListener("keydown", He), window.removeEventListener("popstate", it), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [he]), M.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", j);
    const k = () => {
      Cl.current[j] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${j}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", k), () => window.removeEventListener("pagehide", k);
  }, [j]), M.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", O);
  }, [O]), M.useEffect(() => {
    if (pe?.tab === j) return;
    const k = Cl.current[j] || 0;
    let Z = 0, ye, xe = !1;
    const He = () => {
      xe = !0;
    }, it = () => {
      xe || (window.scrollTo({ top: k, behavior: "auto" }), Z += 1, Math.abs(window.scrollY - k) > 3 && Z < 15 && (ye = window.setTimeout(it, 90)));
    }, le = window.requestAnimationFrame(it);
    return window.addEventListener("wheel", He, { passive: !0 }), window.addEventListener("touchstart", He, { passive: !0 }), window.addEventListener("keydown", He), () => {
      xe = !0, window.cancelAnimationFrame(le), ye && window.clearTimeout(ye), window.removeEventListener("wheel", He), window.removeEventListener("touchstart", He), window.removeEventListener("keydown", He);
    };
  }, [j]), M.useEffect(() => {
    if (!pe || pe.tab !== j) return;
    let k = 0, Z, ye, xe;
    const He = () => {
      const le = Array.from(document.querySelectorAll("[data-item-id]")).find((Dt) => Dt.dataset.itemId === pe.id);
      if (!le && k < 20) {
        k += 1, Z = window.setTimeout(He, 60);
        return;
      }
      if (!le) {
        G(null);
        return;
      }
      xe = le, le.classList.add("target-highlight"), le.setAttribute("tabindex", "-1"), le.scrollIntoView({ behavior: "smooth", block: "center" }), le.focus({ preventScroll: !0 }), ye = window.setTimeout(() => {
        le.classList.remove("target-highlight"), le.removeAttribute("tabindex"), G(null);
      }, 2400);
    }, it = window.setTimeout(He, 50);
    return () => {
      window.clearTimeout(it), Z && window.clearTimeout(Z), ye && window.clearTimeout(ye), xe?.classList.remove("target-highlight"), xe?.removeAttribute("tabindex");
    };
  }, [pe, j, J?.observedAt]), M.useEffect(() => {
    if (!Ve) return;
    const k = window.setTimeout(() => x(""), 4800);
    return () => window.clearTimeout(k);
  }, [Ve]);
  const It = M.useMemo(
    () => (J?.pending ?? []).filter((k) => !["completed", "cancelled"].includes(k.status)),
    [J]
  ), Dl = M.useMemo(() => {
    const k = Date.now();
    return (J?.items ?? []).filter((Z) => $e(Z) && new Date($e(Z)).getTime() >= k && !["completed", "cancelled", "已完成", "已取消"].includes(Z.status)).sort((Z, ye) => new Date($e(Z)).getTime() - new Date($e(ye)).getTime())[0] ?? null;
  }, [J]);
  async function fl(k) {
    const Z = new URL(window.location.href);
    Z.searchParams.set("scope", k), window.history.replaceState(window.history.state, "", Z), b(k), await at(k);
  }
  function gn(k = j) {
    Cl.current[k] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${k}`, String(window.scrollY));
  }
  function st(k, Z) {
    gn();
    const ye = new URL(window.location.href);
    ye.searchParams.set("tab", k), window.history.replaceState(window.history.state, "", ye), G(null), y(k);
  }
  function Ze(k) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const Z = document.activeElement;
    ((Z instanceof HTMLElement && Z !== document.body && !ie.current?.contains(Z) ? Z : null) || k || yt.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function pn(k) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const Z = document.activeElement, ye = Z instanceof HTMLElement && Z !== document.body && !oe.current?.contains(Z) ? Z : null;
    (k || ye || yt.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function xn(k, Z) {
    pn(Z), te({ kind: "item", item: k });
  }
  function hi(k, Z) {
    pn(Z), te({ kind: "day", date: k });
  }
  function _a(k) {
    pn(k), te({ kind: "system" });
  }
  function vi() {
    const k = /* @__PURE__ */ Symbol("workbench-operation");
    return jt.current.add(k), Ue(!0), k;
  }
  function bn(k) {
    jt.current.delete(k), Ue(jt.current.size > 0);
  }
  function Ta() {
    tt.current.invalidate(), P(null);
  }
  function Uu(k) {
    tt.current.invalidate(), P(k);
  }
  function ia() {
    Ze(document.querySelector(".ai-action-button")), ze(null), je({ text: "", nonce: Date.now() }), Ta(), Y(!0);
  }
  function ht(k) {
    Ze(), ze(null), je({ text: k, nonce: Date.now() }), Ta(), Y(!0);
  }
  function pt(k) {
    Ze(), ze(k), Ta(), Y(!0);
  }
  function nt() {
    if (Ct.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    Ct.current = !1, Y(!1);
  }
  function jn() {
    if (gt.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    gt.current = !1, te(null);
  }
  async function yi(k = {}) {
    const Z = k.silent === !0;
    Z || x("正在刷新数据…");
    const ye = await at(O, { ...k, fresh: !Z });
    ye === !0 ? (se({}), Q(null), re((xe) => xe + 1), Z || x("课表、筹备和事务数据已刷新")) : ye === !1 && !Z && x("刷新失败，请查看页面错误");
  }
  async function Ru(k) {
    const Z = tt.current.begin(), ye = vi();
    P(null);
    try {
      const xe = await kt("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(k)
      });
      if (!tt.current.isCurrent(Z)) return;
      P({ ...xe, operation: String(k.operation || ""), input: k });
    } catch (xe) {
      tt.current.isCurrent(Z) && P({ ok: !1, error: xe.message });
    } finally {
      bn(ye);
    }
  }
  async function Aa(k) {
    if (!g) {
      U(!0), Q({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const Z = await kt("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: k })
        });
        if (!Z.ok) throw new Error(Z.error || "全部上完的处理未完成");
        Q({ ok: !0, text: Z.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await at(O);
      } catch (Z) {
        const ye = Z.message || "全部上完的处理失败";
        Q({ ok: !1, text: `处理失败：${ye}`, buttonLabel: "重试全部上完" });
      } finally {
        U(!1);
      }
    }
  }
  async function Ml(k) {
    if (!m) {
      V(k.id), se((Z) => ({ ...Z, [k.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const Z = await kt("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: k.id, expectedVersion: k.version })
        });
        if (!Z.ok) throw new Error(Z.error || "没约上的处理未完成");
        const ye = Z.outcome?.candidateDate, xe = ye ? `已安排 ${ye.slice(5)}` : "已处理";
        se((He) => ({ ...He, [k.id]: { ok: !0, text: Z.message || "已推进到下一次尝试", buttonLabel: xe } })), await at(O);
      } catch (Z) {
        const ye = Z.message || "没约上的处理失败";
        se((xe) => ({ ...xe, [k.id]: { ok: !1, text: `处理失败：${ye}`, buttonLabel: "重试" } }));
      } finally {
        V(null);
      }
    }
  }
  async function za() {
    if (!w?.token || !w.canCommit) return;
    const k = tt.current.begin(), Z = vi(), ye = w.operation || H?.operation;
    try {
      const xe = await kt("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: w.token })
      }), He = { ok: xe.ok, summary: xe.summary, message: `${xe.message || ""}${xe.exportMessage ? `
导出：${xe.exportMessage}` : ""}${xe.syncMessage ? `
日历：${xe.syncMessage}` : ""}`, result: xe, operation: ye, input: w.input, committed: !!xe.ok };
      await at(O), re((it) => it + 1), tt.current.isCurrent(k) && P(He);
    } catch (xe) {
      tt.current.isCurrent(k) && P({ ok: !1, error: xe.message });
    } finally {
      bn(Z);
    }
  }
  return /* @__PURE__ */ i.jsx(_y, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ i.jsxs("div", { className: "workbench-shell", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "topbar", children: [
      /* @__PURE__ */ i.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", children: _m.map((k) => /* @__PURE__ */ i.jsx("button", { type: "button", className: j === k.id ? "tab active" : "tab", onClick: () => st(k.id), children: k.label }, k.id)) }),
      /* @__PURE__ */ i.jsxs("div", { className: "top-actions", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: D ? "ai-action-button active" : "ai-action-button", onClick: ia, "aria-expanded": D, children: "✦ AI 操作" }),
        /* @__PURE__ */ i.jsx("span", { className: "updated-at", children: Ry(J?.observedAt) }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${J?.health?.ok ? "health good" : "health bad"} health-button${ee?.kind === "system" ? " active" : ""}`, onClick: (k) => _a(k.currentTarget), "aria-expanded": ee?.kind === "system", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          J?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "icon-button", onClick: () => {
          yi();
        }, "aria-label": "刷新", disabled: fe, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: "main-area", children: [
      Ve && /* @__PURE__ */ i.jsx("div", { className: "toast", role: "status", children: Ve }),
      W && /* @__PURE__ */ i.jsx(hn, { tone: "error", title: "读取失败", text: W }),
      J?.warnings?.length ? /* @__PURE__ */ i.jsx(hn, { tone: "warn", title: "有警告", text: J.warnings.join("；") }) : null,
      fe && !J ? /* @__PURE__ */ i.jsx(Lm, {}) : null,
      J && j !== "planning" && /* @__PURE__ */ i.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": fe, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ i.jsx("span", { children: fe ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ i.jsx("strong", { children: Cu(J.range) })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "scope-switch", children: Object.keys(cr).map((k) => /* @__PURE__ */ i.jsx("button", { type: "button", className: O === k ? "selected" : "", disabled: fe, onClick: () => {
          fl(k);
        }, children: cr[k] }, k)) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: fe && J ? "view-content scope-loading" : "view-content", "aria-busy": fe && !!J, inert: fe && !!J, children: [
        J && j === "overview" && /* @__PURE__ */ i.jsx(By, { dashboard: J, pending: It, upcoming: Dl, onInspect: xn, onOpenDay: hi, onPrepare: pt, onRetry: Ml, retryingId: m, affairFeedback: L, onDayComplete: Aa, dayBusy: g, dayFeedback: X }),
        j === "cockpit" && /* @__PURE__ */ i.jsx(Ly, { onAction: pt, onAskAi: ht }),
        j === "planning" && /* @__PURE__ */ i.jsx(Yy, { onAction: pt, onAskAi: ht, refreshKey: de, scheduleText: J?.scheduleText, onDataChanged: yi }),
        J && j === "affairs" && /* @__PURE__ */ i.jsx(Xy, { pending: It, affairs: J.affairs, onPrepare: pt, onInspect: xn, onRetry: Ml, retryingId: m, feedback: L })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "context-drawer-backdrop", hidden: !he, onMouseDown: (k) => {
      k.currentTarget === k.target && jn();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: oe, className: "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: jn, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: ee?.kind === "system" ? "运行状态" : ee?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ i.jsx("h2", { children: ee?.kind === "system" ? "系统状态" : ee?.kind === "day" ? al(`${ee.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : ee?.item.title }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "context-drawer-body", children: ee && J && /* @__PURE__ */ i.jsx(
        Fy,
        {
          view: ee,
          dashboard: J,
          onPrepare: pt,
          onRetry: Ml,
          retryingId: m,
          affairFeedback: L,
          onSync: () => pt({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "action-drawer-backdrop", hidden: !D, onMouseDown: (k) => {
      k.currentTarget === k.target && nt();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: ie, className: "action-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: nt, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ i.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ i.jsx(
        Qy,
        {
          pending: It,
          students: J?.students ?? [],
          preset: H,
          aiDraft: Ae,
          preview: w,
          busy: et,
          onPreview: Ru,
          onAiPreview: Uu,
          onCommit: za,
          onClear: Ta,
          onClose: nt
        }
      ) })
    ] }) })
  ] }) });
}
function By({ dashboard: c, pending: o, upcoming: d, onInspect: f, onOpenDay: N, onPrepare: v, onRetry: A, retryingId: C, affairFeedback: j, onDayComplete: y, dayBusy: O, dayFeedback: b }) {
  const D = M.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return c.items.forEach((I) => W.set(I.id, I)), c.affairs.forEach((I) => W.set(I.id, { ...I, domain: "affair" })), c.courses.forEach((I) => W.set(I.id, { ...I, domain: "course" })), Array.from(W.values()).sort((I, w) => String($e(I) || "").localeCompare(String($e(w) || "")));
  }, [c.items, c.affairs, c.courses]), Y = M.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return D.forEach((I) => {
      const w = $e(I)?.slice(0, 10) || "未定日期";
      W.set(w, [...W.get(w) || [], I]);
    }), Array.from(W.entries()).sort(([I], [w]) => I.localeCompare(w));
  }, [D]), ee = c.courses.filter((W) => W.start_at?.slice(0, 10) === c.localDate && W.status !== "已取消"), te = ee.filter((W) => W.status === "待上课"), he = ee.map((W) => W.end_at).filter(Boolean).sort().at(-1) || null, J = !!(he && Date.now() >= new Date(he).getTime()), me = O ? "处理中…" : b?.buttonLabel || (te.length ? "全部上完" : "已全部记录"), fe = O || !!b?.ok || !te.length || !J, ne = {
    today: "把今天安排清楚。",
    week: "把今天和这周，放在一张桌面上。",
    month: "把这个月的课程和事务放在一张桌面上。",
    horizon: "把未来安排放在一张桌面上。"
  }[c.scope];
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx("section", { className: "hero-row", children: /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
        c.localDate,
        " · ",
        cr[c.scope]
      ] }),
      /* @__PURE__ */ i.jsx("h2", { children: ne }),
      /* @__PURE__ */ i.jsx("p", { className: "subtle", children: "数据来自排课与事务系统实时回读。" })
    ] }) }),
    /* @__PURE__ */ i.jsx(tg, { course: c.nextCourse || null, advice: c.commuteAdvice || null, onOpen: (W) => c.nextCourse && f(c.nextCourse, W), onPrepare: v }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid", children: [
      /* @__PURE__ */ i.jsx(ol, { label: "课程", value: c.courses.length, hint: Cu(c.range), tone: "sage" }),
      /* @__PURE__ */ i.jsx(ol, { label: "待办", value: o.length, hint: o[0]?.title || "没有积压", tone: "amber" }),
      /* @__PURE__ */ i.jsx(ol, { label: "下一项", value: d ? Lt($e(d)) || "待定" : "无", hint: d?.title || "当前范围内已清空", tone: "blue" }),
      /* @__PURE__ */ i.jsx(ol, { label: "系统", value: c.health?.ok ? "正常" : "异常", hint: `活动事务 ${c.health?.database?.verification?.counts?.active ?? "—"}`, tone: "ink" })
    ] }),
    c.scope === "today" && ee.length > 0 && /* @__PURE__ */ i.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ i.jsx("strong", { children: te.length ? `还有 ${te.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ i.jsx("span", { children: te.length && !J ? `最后一节 ${Lt(he)} 结束后可操作` : "提交后会写入本地课表并同步日历" }),
        b && /* @__PURE__ */ i.jsx("small", { className: b.ok ? "day-action-inline ok" : "day-action-inline error", children: b.text })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: fe,
          onClick: () => {
            y(c.localDate);
          },
          children: me
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: c.scope === "week" || c.scope === "month" ? "panel wide calendar-panel" : "panel wide", children: [
        /* @__PURE__ */ i.jsx(
          bt,
          {
            title: c.scope === "week" ? "周视图" : c.scope === "month" ? "月视图" : "时间轴",
            meta: Cu(c.range)
          }
        ),
        (c.scope === "week" || c.scope === "month") && /* @__PURE__ */ i.jsxs("div", { className: "calendar-legend", "aria-label": "状态颜色图例", children: [
          /* @__PURE__ */ i.jsxs("span", { className: "confirmed", children: [
            /* @__PURE__ */ i.jsx("i", {}),
            "已确认／已完成"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "pending", children: [
            /* @__PURE__ */ i.jsx("i", {}),
            "待确认／待处理"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "error", children: [
            /* @__PURE__ */ i.jsx("i", {}),
            "错误／硬阻塞"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "temporary", children: [
            /* @__PURE__ */ i.jsx("i", {}),
            "临时身份"
          ] }),
          /* @__PURE__ */ i.jsx("small", { children: "状态用绿黄红；蓝色只标记临时来源" })
        ] }),
        c.scope === "week" ? /* @__PURE__ */ i.jsx(Hy, { items: D, range: c.range, localDate: c.localDate, onInspect: f, onOpenDay: N, onPrepare: v, onRetry: A, retryingId: C, affairFeedback: j }) : c.scope === "month" ? /* @__PURE__ */ i.jsx(ky, { items: D, range: c.range, localDate: c.localDate, onOpenDay: N }) : Y.length ? Y.map(([W, I]) => /* @__PURE__ */ i.jsxs("div", { className: "day-group", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "day-label", children: [
            /* @__PURE__ */ i.jsx("strong", { children: W === "未定日期" ? W : al(`${W}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              I.length,
              " 项"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "timeline-list", children: I.map((w) => /* @__PURE__ */ i.jsx(lg, { item: w, onInspect: f, onPrepare: v, onRetry: A, retryingId: C, feedback: j[w.id] }, w.id)) })
        ] }, W)) : /* @__PURE__ */ i.jsx(Wt, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
      ] }),
      /* @__PURE__ */ i.jsx("aside", { className: "side-stack overview-side", children: /* @__PURE__ */ i.jsxs("div", { className: "panel pending-action-panel", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "待处理", meta: `${o.length} 项` }),
        o.length ? o.slice(0, 4).map((W) => /* @__PURE__ */ i.jsx(ag, { item: W, onInspect: f, onPrepare: v, onRetry: A, retryingId: C, feedback: j[W.id] }, W.id)) : /* @__PURE__ */ i.jsx(Wt, { title: "没有待处理事务", text: "当前队列是干净的。", compact: !0 })
      ] }) })
    ] })
  ] });
}
function Du({ item: c, onPrepare: o, onRetry: d, retryingId: f, feedback: N, compact: v = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(c.status)) return null;
  const C = c.start_at?.slice(0, 10), j = c.start_at?.slice(11, 16);
  if (c.domain === "course")
    return !C || !j ? null : /* @__PURE__ */ i.jsxs("div", { className: `item-action-buttons${v ? " compact" : ""}`, onClick: (O) => O.stopPropagation(), children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", onClick: () => o({ operation: "course_move", student: c.title, fromDate: C, fromTime: j, toDate: C, toTime: j, duration: c.duration }), children: "调整时间" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => o({ operation: "course_cancel", student: c.title, date: C, time: j }), children: "本次不上" })
    ] });
  const y = f === c.id;
  return /* @__PURE__ */ i.jsxs("div", { className: `item-action-buttons${v ? " compact" : ""}`, onClick: (O) => O.stopPropagation(), children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => o({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成" }),
    c.retry && d ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: !!f || !!N?.ok, "aria-busy": y, onClick: () => {
      d(c);
    }, children: y ? "处理中…" : N?.buttonLabel || "没约上" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => o({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
  ] });
}
function Bm(c) {
  return fr(c)[0]?.laneCount || 1;
}
function Hm() {
  const c = M.useRef(null), o = M.useRef(null), d = M.useCallback((v) => {
    if (v.button !== 0 || v.target.closest("button, article, a, input, select, textarea")) return;
    const A = c.current;
    !A || A.scrollWidth <= A.clientWidth || (o.current = { pointerId: v.pointerId, startX: v.clientX, scrollLeft: A.scrollLeft }, A.setPointerCapture(v.pointerId), A.classList.add("dragging"));
  }, []), f = M.useCallback((v) => {
    const A = c.current, C = o.current;
    !A || !C || C.pointerId !== v.pointerId || (A.scrollLeft = C.scrollLeft - (v.clientX - C.startX));
  }, []), N = M.useCallback((v) => {
    const A = c.current, C = o.current;
    !A || !C || C.pointerId !== v.pointerId || (A.hasPointerCapture(v.pointerId) && A.releasePointerCapture(v.pointerId), A.classList.remove("dragging"), o.current = null);
  }, []);
  return { ref: c, onPointerDown: d, onPointerMove: f, onPointerUp: N, onPointerCancel: N };
}
function Hy({ items: c, range: o, localDate: d, onInspect: f, onOpenDay: N, onPrepare: v, onRetry: A, retryingId: C, affairFeedback: j }) {
  const y = M.useMemo(() => ir(o, d), [o, d]), O = Hm(), [b, D] = M.useState(() => window.matchMedia("(max-width: 900px)").matches), [Y, ee] = M.useState(0), [te, he] = M.useState(null), J = M.useMemo(() => b ? Om(y, Y, 3) : y, [b, y, Y]);
  M.useEffect(() => {
    const x = window.matchMedia("(max-width: 900px)"), m = () => D(x.matches);
    return x.addEventListener("change", m), () => x.removeEventListener("change", m);
  }, []), M.useEffect(() => {
    ee(0), he(null);
  }, [o]), M.useEffect(() => {
    if (!te) return;
    const x = (m) => {
      m.key === "Escape" && he(null);
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [te]);
  const me = M.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    return c.forEach((m) => {
      const V = wu(m);
      V && x.set(V, [...x.get(V) || [], m]);
    }), x.forEach((m, V) => x.set(V, [...m].sort((L, se) => String($e(L) || "").localeCompare(String($e(se) || ""))))), x;
  }, [c]), fe = M.useMemo(() => new Map(y.map((x) => [x, Bm((me.get(x) || []).filter((m) => m.start_at || m.deadline_at))])), [me, y]), ne = M.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const m of y) {
      const V = (me.get(m) || []).filter((L) => L.start_at || L.deadline_at);
      x.set(m, fr(V));
    }
    return x;
  }, [me, y]), W = J.map((x) => x && fe.get(x) || 1), I = W.reduce((x, m) => x + m, 0), w = `52px ${W.map((x) => `minmax(0, ${x}fr)`).join(" ")}`, P = b ? `calc(100% * ${I / J.length})` : `${Math.ceil(1080 * I / J.length)}px`, H = c.filter((x) => x.start_at || x.deadline_at), ze = b ? H.filter((x) => J.includes(wu(x))) : H, { startHour: Ae, endHour: je } = Um(ze), et = b ? 76 : 64, Ue = (je - Ae) * et, Ve = Array.from({ length: je - Ae + 1 }, (x, m) => Ae + m);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    b && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本周日期页", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Y === 0, onClick: () => ee((x) => Math.max(0, x - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ i.jsxs("strong", { children: [
        "第 ",
        Y + 1,
        "/3 页 · 每页 3 天"
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: Y === 2, onClick: () => ee((x) => Math.min(2, x + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "一周时间视图，可使用方向键或触控横向浏览", ...O, children: /* @__PURE__ */ i.jsxs("div", { className: b ? "week-calendar-canvas compact-page" : "week-calendar-canvas", style: { minWidth: P }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: w }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-corner", children: "时间" }),
        J.map((x, m) => x ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: x === d ? "week-day-header today" : "week-day-header", onClick: (V) => N(x, V.currentTarget), children: [
          /* @__PURE__ */ i.jsx("span", { children: al(`${x}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(x.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            me.get(x)?.length || 0,
            " 项"
          ] })
        ] }, x) : /* @__PURE__ */ i.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${m}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: w }, onPointerDown: (x) => {
        x.target.closest(".week-time-block") || he(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-time-axis", style: { height: Ue }, children: Ve.map((x) => /* @__PURE__ */ i.jsxs("span", { style: { top: (x - Ae) * et }, children: [
          String(x).padStart(2, "0"),
          ":00"
        ] }, x)) }),
        J.map((x, m) => {
          if (!x) return /* @__PURE__ */ i.jsx("div", { className: "week-day-track empty-slot", style: { height: Ue }, "aria-hidden": "true" }, `empty-${m}`);
          const V = ne.get(x) || [];
          return /* @__PURE__ */ i.jsx("div", { className: x === d ? "week-day-track today" : "week-day-track", style: { height: Ue }, children: V.map(({ item: L, lane: se, laneCount: g }) => {
            const U = Rm(L, Ae, je, et);
            if (!U) return null;
            const X = 100 / g, Q = L.start_at || L.deadline_at, re = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(L.status) && (L.domain === "affair" || !!L.start_at), pe = re && te === L.id;
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${L.domain} ${yn(L)}${vn(L) ? " temporary" : ""}${re ? " actionable" : ""}${pe ? " action-open" : ""}`,
                style: { top: U.top, height: U.height, left: `calc(${se * X}% + 4px)`, width: `calc(${X}% - 8px)` },
                tabIndex: 0,
                role: "button",
                "aria-expanded": re ? pe : void 0,
                onClick: (G) => {
                  G.target.closest("button") || (re && window.matchMedia("(hover: none)").matches ? he((ie) => ie === L.id ? null : L.id) : f(L, G.currentTarget));
                },
                onKeyDown: (G) => {
                  G.key === "Enter" ? (G.preventDefault(), f(L, G.currentTarget)) : G.key === " " ? (G.preventDefault(), re && he((ie) => ie === L.id ? null : L.id)) : G.key === "Escape" && he(null);
                },
                "data-item-id": L.id,
                "aria-label": `${Lt(Q)} ${L.title}，${L.domain === "course" ? `${L.duration || "—"} 分钟课程` : "事务"}${re ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    Lt(Q),
                    " · ",
                    L.title
                  ] }),
                  /* @__PURE__ */ i.jsx("span", { children: L.domain === "course" ? `${L.duration || "—"} 分钟` : L.estimated_minutes ? `${L.estimated_minutes} 分钟 · 事务` : "事务" }),
                  re && /* @__PURE__ */ i.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ i.jsx(Du, { item: L, onPrepare: (G) => {
                    he(null), v(G);
                  }, onRetry: A, retryingId: C, feedback: j[L.id], compact: !0 }) })
                ]
              },
              L.id
            );
          }) }, x);
        })
      ] })
    ] }) })
  ] });
}
function ky({ items: c, range: o, localDate: d, onOpenDay: f }) {
  const N = M.useMemo(() => zy(o, d), [o, d]), v = (o.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), A = M.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    return c.forEach((y) => {
      const O = wu(y);
      O && j.set(O, [...j.get(O) || [], y]);
    }), j.forEach((y, O) => j.set(O, [...y].sort((b, D) => String($e(b) || "").localeCompare(String($e(D) || ""))))), j;
  }, [c]), C = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ i.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ i.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "month-weekdays", children: C.map((j) => /* @__PURE__ */ i.jsxs("span", { children: [
      "周",
      j
    ] }, j)) }),
    /* @__PURE__ */ i.jsx("div", { className: "month-grid", children: N.map((j) => {
      const y = A.get(j) || [], O = ["month-cell"];
      return j.startsWith(v) || O.push("outside"), j === d && O.push("today"), /* @__PURE__ */ i.jsxs("button", { type: "button", className: O.join(" "), onClick: (b) => f(j, b.currentTarget), children: [
        /* @__PURE__ */ i.jsxs("header", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: Number(j.slice(8, 10)) }),
          /* @__PURE__ */ i.jsx("span", { children: y.length ? `${y.length} 项` : "" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "month-item-list", children: [
          y.slice(0, 3).map((b) => /* @__PURE__ */ i.jsxs("span", { className: `month-item ${b.domain} ${yn(b)}${vn(b) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ i.jsx("i", {}),
            Lt($e(b)) || "待定",
            " · ",
            b.title
          ] }, b.id)),
          y.length > 3 && /* @__PURE__ */ i.jsxs("span", { className: "month-more", children: [
            "＋",
            y.length - 3,
            " 项"
          ] })
        ] })
      ] }, j);
    }) })
  ] }) });
}
function Ps(c) {
  const o = Math.floor(c / 60), d = c % 60;
  return String(o).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function Ly({ onAction: c, onAskAi: o }) {
  const [d, f] = M.useState(null), [N, v] = M.useState(!0), [A, C] = M.useState(""), j = M.useCallback(async (b = !1) => {
    b || v(!0);
    try {
      const D = await kt("api/cockpit");
      return f(D), C(""), !0;
    } catch (D) {
      return C(D?.message || "读取失败"), !1;
    } finally {
      v(!1);
    }
  }, []);
  M.useEffect(() => {
    j();
  }, [j]);
  const y = M.useMemo(() => {
    const b = /* @__PURE__ */ new Map();
    for (const Y of d?.students ?? [])
      b.has(Y.group) || b.set(Y.group, []), b.get(Y.group).push(Y);
    return ["本周已排", "已预留", "未排"].map((Y) => ({ label: Y, items: b.get(Y) ?? [] }));
  }, [d]);
  if (N && !d) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (A && !d) return /* @__PURE__ */ i.jsx("div", { className: "view-stack", children: /* @__PURE__ */ i.jsx(ll, { label: "驾驶舱读取", ok: !1, detail: A }) });
  const O = d?.localDate ?? "";
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ i.jsx(Ou, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ i.jsxs("span", { className: "muted-note", children: [
        d?.monday,
        " 当周 · 今天 ",
        O
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        j(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: () => o(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "候选学生" }),
        y.map((b) => /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            b.label,
            " · ",
            b.items.length
          ] }),
          b.items.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "（无）" }) : b.items.map((D) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: D.name }),
            /* @__PURE__ */ i.jsx("span", { className: "cockpit-zone", children: D.zone })
          ] }, D.name))
        ] }, b.label))
      ] }),
      /* @__PURE__ */ i.jsx("section", { className: "cockpit-canvas", children: d?.days.map((b) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day" + (b.date === O ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ i.jsx("strong", { children: b.weekday }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: b.date.slice(5) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "cockpit-day-body", children: [
          b.courses.map((D, Y) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => c({ operation: "course_move", student: D.title, fromDate: b.date, fromTime: String(D.start).slice(11, 16) }), children: [
              /* @__PURE__ */ i.jsx("span", { children: D.title }),
              /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
                String(D.start).slice(11, 16),
                "–",
                String(D.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "cockpit-card-ai", title: "用一句话交给 AI 调时间", onClick: () => o("把" + D.title + " " + b.date + " " + String(D.start).slice(11, 16) + " 的这节课调一下时间"), children: "AI" })
          ] }, "c" + Y)),
          b.reservations.map((D, Y) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => c({ operation: "reservation_update", id: D.id, student: D.student, date: b.date, time: String(D.start).slice(11, 16) }), children: [
            /* @__PURE__ */ i.jsxs("span", { children: [
              D.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-card-time", children: [
              String(D.start).slice(11, 16),
              "–",
              String(D.end).slice(11, 16)
            ] })
          ] }, "r" + Y)),
          b.gaps.map((D, Y) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + D.minutes + " 分钟，点击预留", onClick: () => c({ operation: "reservation_add", date: b.date, time: Ps(D.start) }), children: [
            Ps(D.start),
            "–",
            Ps(D.end),
            " 空档"
          ] }, "g" + Y)),
          b.courses.length === 0 && b.reservations.length === 0 && /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, b.date)) }),
      /* @__PURE__ */ i.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "实时诊断" }),
        /* @__PURE__ */ i.jsx(ol, { label: "本周课程", value: d?.diagnostics.courseCount ?? 0, hint: "共 " + (d?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ i.jsx(ol, { label: "有效预留", value: d?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          d?.diagnostics.dayGaps.map((b) => /* @__PURE__ */ i.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ i.jsx("span", { children: b.weekday }),
            /* @__PURE__ */ i.jsxs("span", { className: "cockpit-zone", children: [
              b.gapMinutes,
              " 分钟"
            ] })
          ] }, b.date))
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            d?.diagnostics.unassigned.length ?? 0
          ] }),
          d?.diagnostics.unassigned.length ? d?.diagnostics.unassigned.map((b) => /* @__PURE__ */ i.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ i.jsx("span", { children: b }) }, b)) : /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (d?.warnings ?? []).map((b, D) => /* @__PURE__ */ i.jsx(ll, { label: "读取警告", ok: !1, detail: b }, D))
      ] })
    ] })
  ] });
}
function Yy({ onAction: c, onAskAi: o, refreshKey: d, scheduleText: f, onDataChanged: N }) {
  const [v, A] = M.useState(null), [C, j] = M.useState(""), [y, O] = M.useState("calendar"), [b, D] = M.useState("issues"), [Y, ee] = M.useState(!1), [te, he] = M.useState(null), [J, me] = M.useState(!1), [fe, ne] = M.useState(null), [W, I] = M.useState({});
  M.useEffect(() => {
    let m = !1;
    return kt("api/planning").then((V) => {
      m || (A(Oy(V)), j(""), he(null));
    }).catch((V) => {
      m || j(V.message || "筹备数据读取失败");
    }), () => {
      m = !0;
    };
  }, [d]), M.useEffect(() => {
    const m = Object.entries(W).at(-1);
    if (!m || !m[1].ok || fe === m[0]) return;
    const V = window.setTimeout(() => {
      I((L) => {
        const se = { ...L };
        return delete se[m[0]], se;
      });
    }, 4500);
    return () => window.clearTimeout(V);
  }, [fe, W]);
  async function w() {
    if (!(!v || J)) {
      me(!0), he(null);
      try {
        he(await kt(`api/planning/template-check?monday=${encodeURIComponent(v.weekMonday)}`));
      } catch (m) {
        he({ ok: !1, passed: !1, monday: v.weekMonday, output: "", affectedDates: [], error: m.message });
      } finally {
        me(!1);
      }
    }
  }
  async function P(m) {
    if (!fe) {
      ne(m), I((V) => ({ ...V, [m]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const V = await kt("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: m })
        });
        if (!V.ok) throw new Error(V.error || "预留确认失败");
        A((L) => L && {
          ...L,
          summary: { ...L.summary, formalCourseCount: L.summary.formalCourseCount + 1 },
          reservations: L.reservations.map((se) => se.reservation_id === m ? { ...se, status: "已确认" } : se),
          audit: {
            ...L.audit,
            reservation_hard_blockers: L.audit.reservation_hard_blockers.filter((se) => se.reservation_id !== m)
          }
        }), I((L) => ({ ...L, [m]: { ok: !0, text: V.message || "已确认落课" } })), N({ silent: !0 });
      } catch (V) {
        I((L) => ({ ...L, [m]: { ok: !1, text: `确认失败：${V.message || "未知错误"}` } })), N({ silent: !0 });
      } finally {
        ne(null);
      }
    }
  }
  if (C) return /* @__PURE__ */ i.jsx(hn, { tone: "error", title: "筹备数据读取失败", text: C });
  if (!v) return /* @__PURE__ */ i.jsx(Lm, {});
  const H = v.summary, ze = v.students.filter((m) => m.confirmed && m.zone !== "未分区" && (m.availability.length > 0 || m.hasReservation)).length, Ae = H.activeStudentCount ? Math.round(ze / H.activeStudentCount * 100) : 100, je = v.commute.overlaps.length, et = new Map(v.audit.reservation_hard_blockers.map((m) => [m.reservation_id, m.reasons])), Ue = v.students.filter((m) => b === "all" ? !0 : b === "availability" ? !m.availability.length && !m.hasReservation : b === "zone" ? m.zone === "未分区" : b === "pending" ? !!m.pendingWeekday || !m.confirmed : m.issues.length > 0), Ve = Y ? Ue : Ue.slice(0, 10), x = v.sources.filter((m) => !m.ok);
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ i.jsx(Ou, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    x.length > 0 && /* @__PURE__ */ i.jsx(hn, { tone: "warn", title: `${x.length} 项筹备数据读取异常`, text: x.map((m) => `${m.label}：${m.message || "读取失败"}`).join("；") }),
    H.reservationHardBlockerCount > 0 && /* @__PURE__ */ i.jsx(hn, { tone: "warn", title: `${H.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: v.audit.reservation_hard_blockers.map((m) => `${m.student} ${m.date}：${m.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ i.jsx("nav", { className: "planning-subnav", "aria-label": "筹备页内部导航", children: [
      ["calendar", "周视图", v.reservations.length + v.templates.length],
      ["readiness", "准备度", H.unzonedCount + H.missingAvailabilityCount + H.unconfirmedActiveCount],
      ["students", "学生资料", v.students.filter((m) => m.issues.length).length],
      ["candidates", "候选与预留", je + H.reservationCount],
      ["review", "复核与证据", H.reviewCount + H.overdueCount + x.length]
    ].map(([m, V, L]) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: y === m ? "selected" : "", "aria-label": `${V}${L > 0 ? `，${L} 项` : ""}`, "aria-pressed": y === m, onClick: () => O(m), children: [
      /* @__PURE__ */ i.jsx("span", { children: V }),
      L > 0 && /* @__PURE__ */ i.jsx("strong", { children: L })
    ] }, m)) }),
    /* @__PURE__ */ i.jsx(Gy, { planning: v, hidden: y !== "calendar", onConfirmReservation: P, onAction: c, confirmingReservationId: fe, reservationFeedback: W }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: y !== "readiness", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ i.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          ze,
          "/",
          H.activeStudentCount
        ] }),
        /* @__PURE__ */ i.jsxs("small", { children: [
          Ae,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ i.jsx("i", { style: { width: `${Ae}%` } }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: je ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ i.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ i.jsx("strong", { children: je }),
        /* @__PURE__ */ i.jsx("small", { children: je ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ i.jsx("strong", { children: H.reservationCount }),
        /* @__PURE__ */ i.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ i.jsx("strong", { children: H.formalCourseCount }),
        /* @__PURE__ */ i.jsx("small", { children: H.reviewCount + H.overdueCount ? `${H.reviewCount + H.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-summary-strip", hidden: y !== "readiness", children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot amber" }),
        "未分区 ",
        /* @__PURE__ */ i.jsx("strong", { children: H.unzonedCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot blue" }),
        "缺候选时间 ",
        /* @__PURE__ */ i.jsx("strong", { children: H.missingAvailabilityCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot ink" }),
        "未确认在读 ",
        /* @__PURE__ */ i.jsx("strong", { children: H.unconfirmedActiveCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot sage" }),
        "待定名单 ",
        /* @__PURE__ */ i.jsx("strong", { children: H.pendingCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot rose" }),
        "出游约束 ",
        /* @__PURE__ */ i.jsx("strong", { children: H.activeVacationCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "planning-contract", children: [
        "contract ",
        v.contract.version ?? "—",
        " · schema ",
        v.contract.schemaVersion ?? "—",
        " · ",
        Cu(v.range)
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-overview-grid", hidden: y !== "readiness", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ i.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            H.activeStudentCount - ze,
            " 人仍有关键资料缺口。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            D("availability"), O("students");
          }, children: [
            "缺候选时间 ",
            H.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            D("zone"), O("students");
          }, children: [
            "未分区 ",
            H.unzonedCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            D("pending"), O("students");
          }, children: [
            "待确认 ",
            H.unconfirmedActiveCount + H.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ i.jsx("h3", { children: je ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            je,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => O("candidates"), children: "查看候选与预留" }),
          H.reviewCount + H.overdueCount + x.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => O("review"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "panel planning-student-panel", hidden: y !== "students", children: [
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
        ].map(([m, V]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: b === m ? "selected" : "", onClick: () => {
          D(m), ee(!1);
        }, children: V }, m)) })
      ] }),
      Ue.length ? /* @__PURE__ */ i.jsxs("div", { className: "planning-student-list", children: [
        Ve.map((m) => {
          const V = m.availability.length ? m.availability.map((L) => `${L.weekday} ${L.start_time}-${L.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ i.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ i.jsx("strong", { children: m.name }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                m.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ i.jsx("span", { className: m.confirmed ? "state-good" : "state-warn", children: m.pendingWeekday ? `${m.pendingWeekday}待定` : m.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "片区" }),
              /* @__PURE__ */ i.jsx("span", { className: m.zone === "未分区" ? "state-warn" : "", children: m.zone })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ i.jsx("span", { className: !m.availability.length && !m.hasReservation ? "state-warn" : "", title: V, children: m.availability.length ? V : m.hasReservation ? "已有单日预留" : V })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "约束" }),
              /* @__PURE__ */ i.jsx("span", { children: m.vacations.length ? m.vacations.map((L) => `至 ${L.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-row-actions", children: [
              m.zone === "未分区" && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "zone_set", student: m.name }), children: "设片区" }),
              !m.availability.length && !m.hasReservation && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "availability_set", student: m.name, weekday: m.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_add", student: m.name, duration: m.duration, zone: m.zone === "未分区" ? "" : m.zone }), children: "预留" })
            ] })
          ] }, m.sourceName);
        }),
        Ue.length > 10 && /* @__PURE__ */ i.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => ee((m) => !m), children: Y ? "收起学生列表" : `再看 ${Ue.length - 10} 人` })
      ] }) : /* @__PURE__ */ i.jsx(Wt, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      v.inactiveConfirmed.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          v.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-student-context", hidden: y !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ i.jsx("span", { children: v.pending.map((m) => m.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ i.jsx("span", { children: v.vacations.map((m) => `${m.student} ${m.start_date.slice(5)}—${m.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ i.jsx("span", { children: v.zones.map((m) => `${m.zone} ${m.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-two-column", hidden: y !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "课程预留", meta: `${v.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        v.reservations.length ? /* @__PURE__ */ i.jsx("div", { className: "reservation-card-list", children: v.reservations.map((m) => {
          const V = (m.conflicts?.formal_courses?.length || 0) + (m.conflicts?.soft_reservations?.length || 0), L = et.get(m.reservation_id) || [], se = `reservation-blocker-${m.reservation_id}`, g = m.status === "已确认" ? "已落课" : m.status === "预期" ? "待落课" : m.status, U = L.length ? "blocked" : m.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ i.jsxs("article", { className: `reservation-card ${U}`, children: [
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ i.jsx("strong", { children: m.reservation_date.slice(5) }),
              /* @__PURE__ */ i.jsx("span", { children: m.weekday })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ i.jsx("strong", { children: m.student }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                m.start_time,
                "-",
                m.end_time,
                " · ",
                m.duration,
                " 分钟",
                m.zone ? ` · ${m.zone}` : ""
              ] }),
              /* @__PURE__ */ i.jsxs("small", { id: se, children: [
                g,
                V ? ` · ${V} 项软冲突` : "",
                L.length ? ` · 硬约束：${L.join("、")}` : "",
                m.note ? ` · ${m.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "reservation-actions", children: m.status === "预期" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_update", reservationId: m.reservation_id, date: m.reservation_date, time: m.start_time, duration: m.duration, zone: m.zone || "", note: m.note || "" }), children: "调整时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: L.length > 0, "aria-describedby": L.length ? se : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: m.reservation_id }), children: L.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", onClick: () => c({ operation: "reservation_cancel", reservationId: m.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ i.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              g
            ] }) })
          ] }, m.reservation_id);
        }) }) : /* @__PURE__ */ i.jsx(Wt, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ i.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              H.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", disabled: J, onClick: () => {
            w();
          }, children: J ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ i.jsx(er, { label: "时间重叠", count: v.commute.overlaps.length, tone: "danger", details: v.commute.overlaps.slice(0, 3).map((m) => `${m.weekday} ${m.first} ${m.firstRange} / ${m.second} ${m.secondRange}`) }),
          /* @__PURE__ */ i.jsx(er, { label: "长期候选时间差异", count: v.commute.availabilityConflicts.length, tone: "neutral", details: v.commute.availabilityConflicts.slice(0, 3).map((m) => `${m.student} ${m.weekday} ${m.startTime}-${m.endTime}（仅提示）`) }),
          /* @__PURE__ */ i.jsx(er, { label: "排时间时再问通勤", count: v.commute.missingRoutes.length, tone: "neutral", details: v.commute.missingRoutes.slice(0, 3).map((m) => `${m.weekday} ${m.from} → ${m.to}`) })
        ] }),
        v.commute.missingRoutes.slice(0, 2).map((m) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: m.from, toStudent: m.to }), children: [
          "补录 ",
          m.from,
          " → ",
          m.to
        ] }, `${m.weekday}-${m.from}-${m.to}`)),
        te && /* @__PURE__ */ i.jsxs("div", { className: te.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ i.jsx("strong", { children: te.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ i.jsx("pre", { children: te.error || te.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    y === "review" && (v.reviews.length > 0 || H.overdueCount > 0) && /* @__PURE__ */ i.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ i.jsx(bt, { title: "历史课程复核", meta: `${v.reviews.length} 节待确认 · ${H.overdueCount} 节过期待转入`, action: H.overdueCount ? `处理 ${H.overdueCount} 节过期课` : void 0, onAction: H.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ i.jsx("div", { className: "review-card-list", children: v.reviews.map((m) => /* @__PURE__ */ i.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: m.student }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            m.date,
            " · ",
            m.start_time,
            "-",
            m.end_time
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: m.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: m.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, m.course_id)) })
    ] }),
    y === "review" && v.reviews.length === 0 && H.overdueCount === 0 && /* @__PURE__ */ i.jsx("section", { className: "panel", children: /* @__PURE__ */ i.jsx(Wt, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-detail-grid", hidden: y !== "review", children: [
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "过期待转入：" }),
            H.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "人工待复核：" }),
            H.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "读取异常：" }),
            x.length,
            " 项"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ i.jsx("div", { className: "source-status-list", children: v.sources.map((m) => /* @__PURE__ */ i.jsxs("span", { className: m.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          m.label
        ] }, m.label)) }),
        /* @__PURE__ */ i.jsxs("pre", { children: [
          Object.values(v.raw).filter(Boolean).join(`

`),
          f ? `

── 底层课表文本 ──
${f}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Gy({ planning: c, hidden: o, onConfirmReservation: d, onAction: f, confirmingReservationId: N, reservationFeedback: v }) {
  const [A, C] = M.useState("reservation"), [j, y] = M.useState(null), O = Hm(), [b, D] = M.useState(c.weekMonday), [Y, ee] = M.useState(() => window.matchMedia("(max-width: 900px)").matches), [te, he] = M.useState(0), J = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], me = M.useMemo(() => ir(`${b}..${b}`, b), [b]), fe = 3, ne = M.useMemo(() => Y ? Om(me, te, 3) : me, [Y, me, te]);
  M.useEffect(() => {
    D(c.weekMonday);
  }, [c.weekMonday]), M.useEffect(() => {
    const G = window.matchMedia("(max-width: 900px)"), ie = () => ee(G.matches);
    return G.addEventListener("change", ie), () => G.removeEventListener("change", ie);
  }, []), M.useEffect(() => {
    he(0), y(null);
  }, [b, A]);
  const W = M.useMemo(() => or(c.range), [c.range]), I = M.useMemo(() => ir(c.range, c.localDate)[0], [c.range, c.localDate]), w = b > I, P = !!(W.end && Ea(b, 7) <= W.end), H = M.useMemo(() => new Map(c.students.map((G) => [G.name, G])), [c.students]), ze = M.useMemo(() => new Map(c.pending.map((G) => [G.student, G])), [c.pending]), Ae = M.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((G) => [G.reservation_id, G.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), je = M.useMemo(() => {
    const G = (oe, K = "在读") => K !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : ze.has(oe) ? { studentState: "待定", stateClass: "pending" } : H.get(oe)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, ie = (oe) => ({
      ...oe,
      start_at: `${oe.date}T${oe.start_time}:00+08:00`,
      end_at: `${oe.date}T${oe.end_time}:00+08:00`
    });
    return A === "reservation" ? c.reservations.filter((oe) => oe.reservation_date >= me[0] && oe.reservation_date <= me[6] && oe.status !== "已取消").map((oe) => {
      const K = Ae.get(oe.reservation_id), tt = (oe.student_status || "在读") !== "在读", jt = oe.status === "已确认";
      return ie({
        id: oe.reservation_id,
        kind: "reservation",
        reservationId: oe.reservation_id,
        reservationStatus: oe.status,
        confirmedCourseId: oe.confirmed_course_id,
        blockerText: K,
        student: oe.student,
        date: oe.reservation_date,
        weekday: oe.weekday,
        start_time: oe.start_time,
        end_time: oe.end_time,
        duration: oe.duration,
        studentState: tt ? "已暂停" : jt ? "已落课" : K ? "有硬约束" : "待落课",
        stateClass: tt ? "paused" : jt ? "landed" : K ? "blocked" : "expected",
        zone: oe.zone,
        note: oe.note
      });
    }) : c.templates.flatMap((oe) => {
      const K = J.indexOf(oe.weekday);
      if (K < 0) return [];
      const tt = me[K], jt = G(oe.student, oe.student_status);
      return [ie({
        id: `template-${oe.template_id}`,
        kind: "template",
        student: oe.student,
        date: tt,
        weekday: oe.weekday,
        start_time: oe.start_time,
        end_time: oe.end_time,
        duration: oe.duration,
        studentState: jt.studentState,
        stateClass: jt.stateClass
      })];
    });
  }, [me, A, ze, c.reservations, c.templates, Ae, H]);
  M.useEffect(() => {
    j && !je.some((G) => G.id === j && G.kind === "reservation") && y(null);
  }, [je, j]), M.useEffect(() => {
    if (!j) return;
    const G = (ie) => {
      ie.key === "Escape" && y(null);
    };
    return window.addEventListener("keydown", G), () => window.removeEventListener("keydown", G);
  }, [j]);
  const et = !!N, Ue = M.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    return je.forEach((ie) => G.set(ie.date, [...G.get(ie.date) || [], ie])), G;
  }, [je]), Ve = M.useMemo(() => new Map(me.map((G) => [G, Bm(Ue.get(G) || [])])), [Ue, me]), x = M.useMemo(() => {
    const G = /* @__PURE__ */ new Map();
    for (const ie of me)
      G.set(ie, fr(Ue.get(ie) || []));
    return G;
  }, [Ue, me]), m = ne.map((G) => G && Ve.get(G) || 1), V = m.reduce((G, ie) => G + ie, 0), L = `52px ${m.map((G) => `minmax(0, ${G}fr)`).join(" ")}`, se = Y ? `calc(100% * ${V / ne.length})` : `${Math.ceil(1080 * V / ne.length)}px`, g = Y ? je.filter((G) => ne.includes(G.date)) : je, { startHour: U, endHour: X } = Um(g), Q = Y ? 76 : 64, de = (X - U) * Q, re = Array.from({ length: X - U + 1 }, (G, ie) => U + ie), pe = `${al(`${me[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${al(`${me[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ i.jsxs("section", { className: `panel planning-week-panel ${A}-mode`, hidden: o, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ i.jsx("h3", { children: A === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ i.jsx("span", { children: A === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: A === "reservation" ? "selected" : "", "aria-pressed": A === "reservation", onClick: () => C("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.reservations.length })
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: A === "template" ? "selected" : "", "aria-pressed": A === "template", onClick: () => C("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "上一周", disabled: !w, onClick: () => D((G) => Ea(G, -7)), children: "‹" }),
          /* @__PURE__ */ i.jsx("strong", { children: pe }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "下一周", disabled: !P, onClick: () => D((G) => Ea(G, 7)), children: "›" })
        ] }),
        Y && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本周日期页", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: te === 0, onClick: () => he((G) => Math.max(0, G - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "第 ",
            te + 1,
            "/",
            fe,
            " 页 · 每页 3 天"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: te === fe - 1, onClick: () => he((G) => Math.min(fe - 1, G + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "planning-week-legend", children: A === "reservation" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
    je.length ? /* @__PURE__ */ i.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，可使用方向键或触控横向浏览", ...O, children: /* @__PURE__ */ i.jsxs("div", { className: Y ? "planning-week-canvas compact-page" : "planning-week-canvas", style: { minWidth: se }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: L }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-corner", children: "时间" }),
        ne.map((G, ie) => G ? /* @__PURE__ */ i.jsxs("div", { className: G === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", children: [
          /* @__PURE__ */ i.jsx("span", { children: J[me.indexOf(G)] }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(G.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            Ue.get(G)?.length || 0,
            " 项"
          ] })
        ] }, G) : /* @__PURE__ */ i.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${ie}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: L }, onPointerDown: (G) => {
        G.target.closest(".planning-week-block") || y(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-axis", style: { height: de }, children: re.map((G) => /* @__PURE__ */ i.jsxs("span", { style: { top: (G - U) * Q }, children: [
          String(G).padStart(2, "0"),
          ":00"
        ] }, G)) }),
        ne.map((G, ie) => {
          if (!G) return /* @__PURE__ */ i.jsx("div", { className: "planning-week-track empty-slot", style: { height: de }, "aria-hidden": "true" }, `empty-${ie}`);
          const oe = x.get(G) || [];
          return /* @__PURE__ */ i.jsx("div", { className: G === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: de }, children: oe.map(({ item: K, lane: tt, laneCount: jt }) => {
            const yt = Rm(K, U, X, Q);
            if (!yt) return null;
            const Ct = 100 / jt, gt = K.kind === "reservation" && K.reservationStatus === "预期", Cl = K.kind === "reservation" && K.reservationStatus === "已确认", at = !!(K.reservationId && (gt || Cl)), It = !!(gt && N === K.reservationId), Dl = !!(at && (j === K.id || It)), fl = K.reservationId ? v[K.reservationId] : void 0, gn = !!(et || K.blockerText || K.stateClass === "paused");
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `planning-week-block ${K.kind} ${K.stateClass}${at ? " actionable" : ""}${Dl ? " action-open" : ""}`,
                tabIndex: at ? 0 : void 0,
                role: at ? "button" : void 0,
                "aria-expanded": at ? Dl : void 0,
                "aria-label": `${K.start_time}-${K.end_time} ${K.student}，${K.studentState}${K.zone ? `，${K.zone}` : ""}${gt ? "；移入或点击后可调整时间、确认落课" : Cl ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (st) => {
                  at && !st.target.closest("button") && y((Ze) => Ze === K.id ? null : K.id);
                },
                onKeyDown: (st) => {
                  at && (st.key === "Enter" || st.key === " " ? (st.preventDefault(), y((Ze) => Ze === K.id ? null : K.id)) : st.key === "Escape" && (st.preventDefault(), y(null)));
                },
                style: { top: yt.top, height: yt.height, left: `calc(${tt * Ct}% + 4px)`, width: `calc(${Ct}% - 8px)` },
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    K.start_time,
                    " · ",
                    K.student
                  ] }),
                  /* @__PURE__ */ i.jsxs("span", { children: [
                    K.duration,
                    " 分钟 · ",
                    K.studentState,
                    K.zone ? ` · ${K.zone}` : ""
                  ] }),
                  at && /* @__PURE__ */ i.jsxs("div", { className: "planning-week-inline-action", onClick: (st) => st.stopPropagation(), children: [
                    /* @__PURE__ */ i.jsx("div", { className: "planning-week-inline-buttons", children: gt ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: et, onClick: () => {
                        y(null), f({ operation: "reservation_update", reservationId: K.reservationId, date: K.date, time: K.start_time, duration: K.duration, zone: K.zone || "", note: K.note || "" });
                      }, children: "调整时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: gn, "aria-busy": It, onClick: () => {
                        const st = d(K.reservationId);
                        st && typeof st.then == "function" && st.finally(() => y(null));
                      }, children: It ? "确认中…" : et ? "处理中…" : K.stateClass === "paused" ? "学生已暂停" : K.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", onClick: () => f({ operation: "course_move", student: K.student, fromDate: K.date, fromTime: K.start_time, toDate: K.date, toTime: K.start_time, duration: K.duration }), children: "调整时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => f({ operation: "course_cancel", student: K.student, date: K.date, time: K.start_time }), children: "本次不上" })
                    ] }) }),
                    (K.blockerText || fl) && /* @__PURE__ */ i.jsx("small", { className: fl?.ok ? "ok" : "error", children: fl?.text || K.blockerText })
                  ] })
                ]
              },
              K.id
            );
          }) }, G);
        })
      ] })
    ] }) }) : /* @__PURE__ */ i.jsx(Wt, { title: A === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: A === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function er({ label: c, count: o, tone: d, details: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("span", { children: c }),
      /* @__PURE__ */ i.jsx("strong", { children: o })
    ] }),
    f.length > 0 && /* @__PURE__ */ i.jsx("ul", { children: f.map((N) => /* @__PURE__ */ i.jsx("li", { children: N }, N)) })
  ] });
}
const Vy = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function tr({ item: c, onInspect: o, onPrepare: d, onRetry: f, retryingId: N, feedback: v }) {
  const A = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), C = N === c.id, j = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", y = Date.now(), O = c.deadline_at ? new Date(c.deadline_at).getTime() : null, b = O != null ? Math.ceil((O - y) / 864e5) : null, D = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ i.jsxs(
    "article",
    {
      className: `affair-card ${j}${A ? " closed" : ""}`,
      "data-item-id": c.id,
      tabIndex: 0,
      role: "button",
      onClick: (Y) => {
        Y.target.closest("button") || o(c, Y.currentTarget);
      },
      onKeyDown: (Y) => {
        Y.key === "Enter" && (Y.preventDefault(), o(c, Y.currentTarget));
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-when", children: [
          j === "timed" && c.start_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: Lt(c.start_at) }),
            /* @__PURE__ */ i.jsx("span", { children: al(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          j === "deadline" && c.deadline_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: al(c.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "截止",
              b != null && !A ? ` · 剩 ${b} 天` : ""
            ] })
          ] }),
          j === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ i.jsx("span", { children: c.window_label || "窗口未定" })
          ] }),
          j === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ i.jsx("span", { children: D ? `下次 ${D.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ i.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ i.jsx(Mu, { value: c.status }),
            c.note ? /* @__PURE__ */ i.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ i.jsx("em", { children: `提醒 ${al(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${Lt(c.next_prompt_at)}` }) : null
          ] }),
          j === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ i.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((Y) => /* @__PURE__ */ i.jsx("i", { children: Vy[Y] || Y }, Y)) }) : null,
          v ? /* @__PURE__ */ i.jsx("small", { className: v.ok ? "affair-feedback ok" : "affair-feedback error", children: v.text }) : null
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "affair-card-actions", children: !A && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do primary", onClick: () => d({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成" }),
          c.retry && f ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!N || !!v?.ok, "aria-busy": C, onClick: () => {
            f(c);
          }, children: C ? "处理中…" : v?.buttonLabel || "没约上" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Xy({ pending: c, affairs: o, onPrepare: d, onInspect: f, onRetry: N, retryingId: v, feedback: A }) {
  const C = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), j = o.filter((O) => !C.has(O.status)).sort((O, b) => String($e(O) || "").localeCompare(String($e(b) || ""))), y = o.filter((O) => C.has(O.status)).sort((O, b) => String($e(b) || "").localeCompare(String($e(O) || "")));
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx(Ou, { eyebrow: "事务", title: "办事队列", description: "待确认、重试和当前时间范围内的事务集中展示。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid affairs-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "待处理", meta: `${c.length} 项` }),
        c.length ? c.map((O) => /* @__PURE__ */ i.jsx(tr, { item: O, onInspect: f, onPrepare: d, onRetry: N, retryingId: v, feedback: A[O.id] }, O.id)) : /* @__PURE__ */ i.jsx(Wt, { title: "没有待处理事务", text: "当前队列没有积压。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel affair-record-panel", children: [
        /* @__PURE__ */ i.jsxs("section", { className: "affair-record-group scheduled", children: [
          /* @__PURE__ */ i.jsx(bt, { title: "已安排", meta: `${j.length} 项` }),
          j.length ? j.map((O) => /* @__PURE__ */ i.jsx(tr, { item: O, onInspect: f, onPrepare: d, onRetry: N, retryingId: v, feedback: A[O.id] }, O.id)) : /* @__PURE__ */ i.jsx(Wt, { title: "暂无已安排事务", text: "当前时间范围内没有进行中的事务。", compact: !0 })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "affair-record-group completed", children: [
          /* @__PURE__ */ i.jsx(bt, { title: "已完成／已取消", meta: `${y.length} 项` }),
          y.length ? y.map((O) => /* @__PURE__ */ i.jsx(tr, { item: O, onInspect: f, onPrepare: d, onRetry: N, retryingId: v, feedback: A[O.id] }, O.id)) : /* @__PURE__ */ i.jsx(Wt, { title: "暂无完成记录", text: "结束后的事务会归档到这里。", compact: !0 })
        ] })
      ] })
    ] })
  ] });
}
function Qy({ pending: c, students: o, preset: d, aiDraft: f, preview: N, busy: v, onPreview: A, onAiPreview: C, onCommit: j, onClear: y, onClose: O }) {
  const [b, D] = M.useState(d?.operation || "course_move"), [Y, ee] = M.useState(d?.affairKind || "timed"), [te, he] = M.useState(d?.student || ""), [J, me] = M.useState(d?.duration || ""), [fe, ne] = M.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  M.useEffect(() => {
    d?.operation && D(d.operation), d?.affairKind && ee(d.affairKind), d?.student && he(d.student), d?.duration && me(d.duration);
  }, [d]);
  function W(w) {
    w.preventDefault();
    const P = new FormData(w.currentTarget), H = { operation: b };
    for (const [ze, Ae] of P.entries())
      ze !== "operation" && String(Ae).trim() && (H[ze] = Ae);
    H.duration && (H.duration = Number(H.duration)), H.minutes !== void 0 && (H.minutes = Number(H.minutes)), H.expectedVersion && (H.expectedVersion = Number(H.expectedVersion)), b === "course_plan" && (H.moves = fe.map((ze) => ({ ...ze, duration: ze.duration ? Number(ze.duration) : void 0 }))), A(H);
  }
  function I(w, P, H) {
    ne((ze) => ze.map((Ae, je) => je === w ? { ...Ae, [P]: H } : Ae));
  }
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ i.jsx($y, { initialDraft: f, preview: N, busy: v, onPreview: C, onCommit: j, onClear: y, onClose: O }),
    /* @__PURE__ */ i.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ i.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ i.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ i.jsxs("form", { className: "panel operation-form", onSubmit: W, children: [
          /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ i.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ i.jsxs("select", { name: "operation", value: b, onChange: (w) => {
              D(w.target.value), y();
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
              /* @__PURE__ */ i.jsx("option", { value: "affair_complete", children: "完成事务" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_retry_next", children: "推进重试日期" }),
              /* @__PURE__ */ i.jsx("option", { value: "affair_cancel", children: "取消事务" }),
              /* @__PURE__ */ i.jsx("option", { value: "calendar_sync", children: "同步飞书日历" })
            ] })
          ] }),
          b === "course_move" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ i.jsx(ce, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          b === "course_cancel" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
          ] }),
          b === "course_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (w) => {
                    const P = o.find((H) => H.name === w.target.value);
                    he(w.target.value), P && me(P.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((w) => w.status === "在读").map((w) => /* @__PURE__ */ i.jsxs("option", { value: w.name, children: [
                      w.name,
                      " · ",
                      w.default_duration,
                      " 分钟"
                    ] }, w.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: J, onChange: (w) => me(w.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          b === "reservation_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (w) => {
                    const P = o.find((H) => H.name === w.target.value);
                    he(w.target.value), P && me(P.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((w) => w.status === "在读").map((w) => /* @__PURE__ */ i.jsxs("option", { value: w.name, children: [
                      w.name,
                      " · ",
                      w.default_duration,
                      " 分钟"
                    ] }, w.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: J, onChange: (w) => me(w.target.value) })
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          b === "reservation_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(b) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          b === "zone_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          b === "availability_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((w) => /* @__PURE__ */ i.jsx("option", { value: w, children: w }, w))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          b === "availability_clear" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((w) => /* @__PURE__ */ i.jsx("option", { value: w, children: w }, w))
              ] })
            ] })
          ] }),
          b === "commute_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          b === "quarantine_overdue" && /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          b === "course_review_resolve" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ i.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ i.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ i.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          b === "course_day_complete" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          b === "course_plan" && /* @__PURE__ */ i.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ i.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", onClick: () => ne((w) => [...w, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            fe.map((w, P) => /* @__PURE__ */ i.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ i.jsx("span", { className: "plan-index", children: P + 1 }),
              /* @__PURE__ */ i.jsxs("select", { value: w.student || "", onChange: (H) => {
                const ze = o.find((Ae) => Ae.name === H.target.value);
                I(P, "student", H.target.value), ze && I(P, "duration", ze.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "学生" }),
                o.filter((H) => H.status === "在读").map((H) => /* @__PURE__ */ i.jsx("option", { value: H.name, children: H.name }, H.name))
              ] }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: w.fromDate || "", onChange: (H) => I(P, "fromDate", H.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: w.fromTime || "", onChange: (H) => I(P, "fromTime", H.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: w.toDate || "", onChange: (H) => I(P, "toDate", H.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: w.toTime || "", onChange: (H) => I(P, "toTime", H.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: w.duration || "", onChange: (H) => I(P, "duration", H.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "plan-remove", disabled: fe.length <= 2, onClick: () => ne((H) => H.filter((ze, Ae) => Ae !== P)), children: "×" })
            ] }, P))
          ] }),
          b === "affair_create" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "类型" }),
              /* @__PURE__ */ i.jsxs("select", { name: "affairKind", value: Y, onChange: (w) => ee(w.target.value), children: [
                /* @__PURE__ */ i.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ i.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ i.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ i.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            Y === "timed" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            Y === "deadline" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            Y === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            Y === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ i.jsx(ce, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ i.jsx(ce, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ i.jsx(ce, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "优先级" }),
              /* @__PURE__ */ i.jsxs("select", { name: "priority", defaultValue: "normal", children: [
                /* @__PURE__ */ i.jsx("option", { value: "low", children: "低" }),
                /* @__PURE__ */ i.jsx("option", { value: "normal", children: "普通" }),
                /* @__PURE__ */ i.jsx("option", { value: "high", children: "高" }),
                /* @__PURE__ */ i.jsx("option", { value: "urgent", children: "紧急" })
              ] })
            ] })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(b) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((w) => /* @__PURE__ */ i.jsxs("option", { value: w.id, children: [
                  w.title,
                  " · ",
                  w.id
                ] }, w.id))
              ] })
            ] }),
            b === "affair_retry_next" && /* @__PURE__ */ i.jsx(ce, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          b === "calendar_sync" && /* @__PURE__ */ i.jsx(ce, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ i.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: "primary-button full", type: "submit", disabled: v, children: v ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: b })),
        /* @__PURE__ */ i.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ i.jsx(bt, { title: "执行预览", meta: N?.token ? `令牌 ${N.token.slice(0, 8)}…` : "等待操作" }),
          !N && /* @__PURE__ */ i.jsx(Wt, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
          N && /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
            /* @__PURE__ */ i.jsxs("div", { className: N.canCommit ? "preview-status pass" : N.ok ? "preview-status neutral" : "preview-status fail", children: [
              /* @__PURE__ */ i.jsx("i", {}),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: N.canCommit ? "预演通过" : N.ok ? "执行结果" : "预演未通过" }),
                /* @__PURE__ */ i.jsx("span", { children: N.summary || N.error || "无摘要" })
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("pre", { children: N.message || N.error || JSON.stringify(N.result, null, 2) }),
            N.result && /* @__PURE__ */ i.jsxs("details", { className: "evidence-details", children: [
              /* @__PURE__ */ i.jsx("summary", { children: "查看执行证据" }),
              /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(N.result, null, 2) })
            ] }),
            N.canCommit && /* @__PURE__ */ i.jsxs("div", { className: "commit-box", children: [
              /* @__PURE__ */ i.jsx("p", { children: "提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger-button", onClick: () => {
                j();
              }, disabled: v, children: v ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ i.jsx(km, { preview: N, onClose: O })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Zy = {
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
}, Ky = {
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
function Jy({ preview: c, busy: o, onCommit: d, onClose: f }) {
  const N = c.operation || "", v = c.input || {}, A = Object.entries(v).filter(([j, y]) => y != null && y !== "" && !j.startsWith("_")), C = c.result?.affected_dates;
  return /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.canCommit ? "preview-status pass" : c.ok ? "preview-status neutral" : "preview-status fail", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.canCommit ? "方案预演通过" : c.ok ? "执行结果" : "方案未通过" }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.error })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "preview-summary", children: [
      N && /* @__PURE__ */ i.jsx("span", { className: "preview-op-badge", children: Zy[N] || N }),
      A.length > 0 && /* @__PURE__ */ i.jsx("dl", { className: "preview-fields", children: A.map(([j, y]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: Ky[j] || j }),
        /* @__PURE__ */ i.jsx("dd", { children: String(y) })
      ] }, j)) }),
      C && C.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        C.map((j) => /* @__PURE__ */ i.jsx("span", { children: j.slice(5) }, j))
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
      }, disabled: o, children: o ? "正在提交…" : "确认执行此方案" }),
      /* @__PURE__ */ i.jsx(km, { preview: c, onClose: f })
    ] })
  ] });
}
function $y({ initialDraft: c, preview: o, busy: d, onPreview: f, onCommit: N, onClear: v, onClose: A }) {
  const C = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, j = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [y, O] = M.useState([C]), [b, D] = M.useState(""), [Y, ee] = M.useState(!1), [te, he] = M.useState(""), J = M.useRef(ur());
  M.useEffect(() => () => J.current.invalidate(), []), M.useEffect(() => {
    c.nonce && (J.current.invalidate(), ee(!1), D(c.text));
  }, [c.nonce, c.text]);
  function me() {
    J.current.invalidate(), ee(!1), O([C]), D(""), he(""), v();
  }
  async function fe() {
    const ne = b.trim();
    if (!ne || Y) return;
    const W = J.current.begin(), I = y.slice(-10);
    O((w) => [...w, { role: "user", text: ne }]), D(""), ee(!0), he(""), v();
    try {
      const w = await kt("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: ne, history: I })
      });
      if (!J.current.isCurrent(W)) return;
      if (!w.ok) throw new Error(w.error || "AI 没有生成方案");
      O((P) => [...P, { role: "assistant", text: w.reply || "方案已经生成，请检查右侧预演。" }]), w.status === "ready" && w.preview && f({
        ok: !0,
        token: w.preview.token,
        expiresAt: w.preview.expiresAt,
        summary: w.preview.summary,
        canCommit: w.preview.canCommit,
        message: w.preview.message,
        result: w.preview.result,
        operation: w.operation,
        input: w.input
      });
    } catch (w) {
      if (!J.current.isCurrent(W)) return;
      const P = w.message || "AI 操作失败";
      he(P), O((H) => [...H, { role: "assistant", text: `这次没有生成预演：${P}` }]);
    } finally {
      J.current.isCurrent(W) && ee(!1);
    }
  }
  return /* @__PURE__ */ i.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ i.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ i.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ i.jsx("button", { className: "row-action-button", type: "button", onClick: me, disabled: Y, children: "清空对话" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: j.map((ne) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => D(ne), children: ne }, ne)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          y.map((ne, W) => /* @__PURE__ */ i.jsx("div", { className: `ai-bubble ${ne.role}`, children: ne.text }, W)),
          Y && /* @__PURE__ */ i.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        te && /* @__PURE__ */ i.jsx(hn, { tone: "error", title: "没有生成方案", text: te }),
        /* @__PURE__ */ i.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              value: b,
              onChange: (ne) => D(ne.target.value),
              onKeyDown: (ne) => {
                ne.key === "Enter" && !ne.shiftKey && (ne.preventDefault(), fe());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            fe();
          }, disabled: !b.trim() || Y, children: Y ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "AI 预演", meta: o?.token ? `令牌 ${o.token.slice(0, 8)}…` : "等待指令" }),
        !o && /* @__PURE__ */ i.jsx(Wt, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        o && /* @__PURE__ */ i.jsx(Jy, { preview: o, busy: d, onCommit: N, onClose: A })
      ] })
    ] })
  ] });
}
function Fy({ view: c, dashboard: o, onPrepare: d, onRetry: f, retryingId: N, affairFeedback: v, onSync: A }) {
  if (c.kind === "system") return /* @__PURE__ */ i.jsx(eg, { dashboard: o, onSync: A, embedded: !0 });
  const C = c.kind === "day" ? o.items.filter((j) => wu(j) === c.date).sort((j, y) => String($e(j) || "").localeCompare(String($e(y) || ""))) : [c.item];
  return C.length ? /* @__PURE__ */ i.jsx("div", { className: "context-item-list", children: C.map((j) => /* @__PURE__ */ i.jsx(
    Wy,
    {
      item: j,
      onPrepare: d,
      onRetry: f,
      retryingId: N,
      feedback: j.domain === "affair" ? v[j.id] : void 0
    },
    j.id
  )) }) : /* @__PURE__ */ i.jsx(Wt, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function Wy({ item: c, onPrepare: o, onRetry: d, retryingId: f, feedback: N }) {
  const v = $e(c), A = ["completed", "cancelled", "已完成", "已取消"].includes(c.status);
  return /* @__PURE__ */ i.jsxs("section", { className: `context-item-card ${yn(c)}${vn(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ i.jsx("time", { children: v ? `${al(v, { month: "long", day: "numeric", weekday: "short" })} ${Lt(v)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ i.jsx(Mu, { value: c.status })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: c.title }),
    /* @__PURE__ */ i.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" }),
    N && /* @__PURE__ */ i.jsx("small", { className: N.ok ? "context-feedback ok" : "context-feedback error", children: N.text }),
    !A && /* @__PURE__ */ i.jsx("div", { className: "context-item-actions", children: c.domain === "course" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "course_move", student: c.title, fromDate: c.start_at?.slice(0, 10), fromTime: c.start_at?.slice(11, 16), toDate: c.start_at?.slice(0, 10), toTime: c.start_at?.slice(11, 16), duration: c.duration }), children: "调整时间…" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "course_cancel", student: c.title, date: c.start_at?.slice(0, 10), time: c.start_at?.slice(11, 16) }), children: "本次不上…" })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成…" }),
      c.retry ? /* @__PURE__ */ i.jsx("button", { type: "button", className: N?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!f || !!N?.ok, onClick: () => {
        d(c);
      }, children: f === c.id ? "处理中…" : N?.buttonLabel || "没约上" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消…" })
    ] }) })
  ] });
}
function Iy() {
  const [c, o] = M.useState({ loading: !0 }), d = M.useCallback(() => {
    o({ loading: !0 }), kt("/api/versions").then((N) => o({ loading: !1, data: N })).catch((N) => o({ loading: !1, error: N.message }));
  }, []);
  M.useEffect(() => {
    d();
  }, [d]);
  const f = c.data?.versions;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(bt, { title: "版本与运行态" }),
    c.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : c.error ? /* @__PURE__ */ i.jsx(ll, { label: "版本读取", ok: !1, detail: c.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "源码版本" }),
        /* @__PURE__ */ i.jsx("code", { children: f?.source ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "正式安装版" }),
        /* @__PURE__ */ i.jsx("code", { children: f?.installed ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "安装记录" }),
        /* @__PURE__ */ i.jsx("code", { children: f?.installsRecord ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ i.jsx("span", { children: "开发槽" }),
        /* @__PURE__ */ i.jsx("code", { children: f?.dev ?? "—" })
      ] }),
      /* @__PURE__ */ i.jsx(ll, { label: "运行态", ok: !c.data?.devShadowing, detail: c.data?.note || "" })
    ] })
  ] });
}
function Py({ onSync: c }) {
  const [o, d] = M.useState({ loading: !0 }), f = M.useCallback(() => {
    d({ loading: !0 }), kt("/api/calendar-health").then((C) => d({ loading: !1, data: C })).catch((C) => d({ loading: !1, error: C.message }));
  }, []);
  M.useEffect(() => {
    f();
  }, [f]);
  const N = o.data?.diff, v = N?.toDelete ?? [], A = o.data?.inSync === !0;
  return /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ i.jsx(bt, { title: "飞书日历对账" }),
    o.loading ? /* @__PURE__ */ i.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : o.error ? /* @__PURE__ */ i.jsx(ll, { label: "日历盘点", ok: !1, detail: o.error }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(ll, { label: "对账结果", ok: A, detail: A ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
      /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-summary", children: [
        /* @__PURE__ */ i.jsxs("span", { children: [
          "日历事件 ",
          N?.calendarEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "托管 ",
          N?.managedEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "期望 ",
          N?.desiredEvents ?? "—"
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "待建 ",
          N?.toCreate?.length ?? 0
        ] }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "待更新 ",
          N?.toUpdate?.length ?? 0
        ] }),
        /* @__PURE__ */ i.jsxs("span", { className: v.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          v.length
        ] })
      ] }),
      v.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-list", children: [
        v.slice(0, 8).map((C, j) => /* @__PURE__ */ i.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ i.jsx("span", { children: C.summary }),
          /* @__PURE__ */ i.jsx("span", { className: "muted-note", children: String(C.start || "").slice(0, 16) })
        ] }, j)),
        v.length > 8 && /* @__PURE__ */ i.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          v.length - 8,
          " 条待删除…"
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "row-actions", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "ghost-button", onClick: f, children: "重新盘点" }),
        !A && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: c, children: "打开同步操作" })
      ] })
    ] })
  ] });
}
function eg({ dashboard: c, onSync: o, embedded: d = !1 }) {
  const f = c.health?.database?.verification;
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "view-stack system-embedded" : "view-stack", children: [
    !d && /* @__PURE__ */ i.jsx(Ou, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ i.jsx(ol, { label: "数据库完整性", value: f?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${f?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ i.jsx(ol, { label: "活动事务", value: f?.counts?.active ?? "—", hint: `总数 ${f?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ i.jsx(ol, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ i.jsx(ol, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ i.jsx(bt, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ i.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((N) => /* @__PURE__ */ i.jsx(ll, { label: N.label, ok: N.ok, detail: N.detail }, N.label)) }),
        /* @__PURE__ */ i.jsx(bt, { title: "契约检查" }),
        /* @__PURE__ */ i.jsx(ll, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ i.jsx(ll, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ i.jsx(ll, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ i.jsx(ll, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel action-panel", children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "飞书看板" }),
        /* @__PURE__ */ i.jsx("h3", { children: "同步前会先预演。" }),
        /* @__PURE__ */ i.jsxs("p", { children: [
          "正式同步固定使用 ",
          /* @__PURE__ */ i.jsx("code", { children: "--prune" }),
          "，清理已不存在的受管事件。"
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "打开同步操作" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(Py, { onSync: o }),
    /* @__PURE__ */ i.jsx(Iy, {})
  ] });
}
function tg({ course: c, advice: o, onOpen: d, onPrepare: f }) {
  const [N, v] = M.useState(!1), A = dr(N, () => v(!1));
  return c ? /* @__PURE__ */ i.jsxs(
    "section",
    {
      ref: A,
      className: `next-course-banner next-course-open contextual-action-host ${yn(c)}${vn(c) ? " temporary" : ""} actionable${N ? " action-open" : ""}`,
      role: "button",
      tabIndex: 0,
      "aria-expanded": N,
      onClick: (C) => {
        C.target.closest("button") || (window.matchMedia("(hover: none)").matches ? v((j) => !j) : d(C.currentTarget));
      },
      onKeyDown: (C) => {
        C.key === "Enter" ? (C.preventDefault(), d(C.currentTarget)) : C.key === " " ? (C.preventDefault(), v((j) => !j)) : C.key === "Escape" && v(!1);
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "next-course-time", children: [
          /* @__PURE__ */ i.jsx("span", { children: al(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ i.jsx("strong", { children: Lt(c.start_at) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "next-course-main", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
            "下一节课",
            vn(c) && /* @__PURE__ */ i.jsx("span", { className: "temporary-badge", children: "临时" })
          ] }),
          /* @__PURE__ */ i.jsx("h3", { children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            c.duration || "—",
            " 分钟 · ",
            c.note || "常规课程"
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: o?.tight ? "commute-chip tight" : "commute-chip", children: o?.available ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs("strong", { children: [
            o.minutes,
            " 分钟通勤"
          ] }),
          /* @__PURE__ */ i.jsx("span", { children: o.tight ? `间隔仅 ${o.gapMinutes} 分钟` : `最晚 ${Lt(o.leaveBy)} 出发` })
        ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("strong", { children: "出发时间待定" }),
          /* @__PURE__ */ i.jsx("span", { children: o?.reason || "暂无通勤信息" })
        ] }) }),
        /* @__PURE__ */ i.jsx("span", { className: "next-course-cue", children: "查看详情 →" }),
        /* @__PURE__ */ i.jsx("div", { className: "next-course-inline-action", children: /* @__PURE__ */ i.jsx(Du, { item: c, onPrepare: (C) => {
          v(!1), f(C);
        } }) })
      ]
    }
  ) : /* @__PURE__ */ i.jsx("section", { className: "next-course-banner empty-next", children: /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一节课" }),
    /* @__PURE__ */ i.jsx("h3", { children: "未来范围内没有课程" })
  ] }) });
}
function km({ preview: c, onClose: o }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ i.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "完成并返回" }) });
}
function ol({ label: c, value: o, hint: d, tone: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `metric-card ${f}`, children: [
    /* @__PURE__ */ i.jsx("span", { children: c }),
    /* @__PURE__ */ i.jsx("strong", { children: o }),
    /* @__PURE__ */ i.jsx("small", { children: d })
  ] });
}
function lg({ item: c, onInspect: o, onPrepare: d, onRetry: f, retryingId: N, feedback: v }) {
  const [A, C] = M.useState(!1), j = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(c.status), y = dr(A, () => C(!1)), O = !!d && !j;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: y,
      className: `${o ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${yn(c)}${vn(c) ? " temporary" : ""}${O ? " actionable" : ""}${A ? " action-open" : ""}`,
      "data-item-id": c.id,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      "aria-expanded": O ? A : void 0,
      onClick: (b) => {
        b.target.closest("button") || (O && window.matchMedia("(hover: none)").matches ? C((D) => !D) : o?.(c, b.currentTarget));
      },
      onKeyDown: (b) => {
        b.key === "Enter" && o ? (b.preventDefault(), o(c, b.currentTarget)) : b.key === " " && O ? (b.preventDefault(), C((D) => !D)) : b.key === "Escape" && C(!1);
      },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: `domain-dot ${c.domain}` }),
        /* @__PURE__ */ i.jsx("time", { children: Lt($e(c)) || "待定" }),
        /* @__PURE__ */ i.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: c.title }),
          /* @__PURE__ */ i.jsx("span", { children: c.domain === "course" ? `${c.duration || "—"} 分钟` : c.note || c.window_label || "事务" }),
          v && /* @__PURE__ */ i.jsx("small", { className: v.ok ? "course-feedback ok" : "course-feedback error", children: v.text })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ i.jsx(Mu, { value: c.status }) }),
        O && d && /* @__PURE__ */ i.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ i.jsx(Du, { item: c, onPrepare: (b) => {
          C(!1), d(b);
        }, onRetry: f, retryingId: N, feedback: v }) })
      ]
    }
  );
}
function ag({ item: c, onInspect: o, onPrepare: d, onRetry: f, retryingId: N, feedback: v }) {
  const [A, C] = M.useState(!1), j = dr(A, () => C(!1));
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: j,
      className: `quick-pending-item contextual-action-host ${yn(c)} actionable${A ? " action-open" : ""}`,
      "data-item-id": c.id,
      role: "button",
      tabIndex: 0,
      "aria-expanded": A,
      onClick: (y) => {
        y.target.closest("button") || (window.matchMedia("(hover: none)").matches ? C((O) => !O) : o(c, y.currentTarget));
      },
      onKeyDown: (y) => {
        y.key === "Enter" ? (y.preventDefault(), o(c, y.currentTarget)) : y.key === " " ? (y.preventDefault(), C((O) => !O)) : y.key === "Escape" && C(!1);
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: c.title }),
          /* @__PURE__ */ i.jsx("span", { children: c.window_label || (c.next_prompt_at ? `下次提醒 ${al(c.next_prompt_at)} ${Lt(c.next_prompt_at)}` : "待处理") }),
          v && /* @__PURE__ */ i.jsx("small", { className: v.ok ? "affair-feedback ok" : "affair-feedback error", children: v.text })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ i.jsx(Mu, { value: c.status }) }),
        /* @__PURE__ */ i.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ i.jsx(Du, { item: c, onPrepare: (y) => {
          C(!1), d(y);
        }, onRetry: f, retryingId: N, feedback: v }) })
      ]
    }
  );
}
function Mu({ value: c }) {
  return /* @__PURE__ */ i.jsx("span", { className: `status ${qm(c)}`, children: Dy[c] || c });
}
function bt({ title: c, meta: o, action: d, onAction: f, actionDisabled: N }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "panel-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h3", { children: c }),
      o && /* @__PURE__ */ i.jsx("span", { children: o })
    ] }),
    d && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: f, disabled: N, children: d })
  ] });
}
function Ou({ eyebrow: c, title: o, description: d }) {
  return /* @__PURE__ */ i.jsxs("header", { className: "page-title", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ i.jsx("h2", { children: o }),
    /* @__PURE__ */ i.jsx("p", { children: d })
  ] });
}
function ce({ name: c, label: o, type: d = "text", placeholder: f, defaultValue: N, required: v = !1 }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ i.jsx("span", { children: o }),
    /* @__PURE__ */ i.jsx("input", { name: c, type: d, placeholder: f, defaultValue: N, required: v })
  ] });
}
function ll({ label: c, ok: o, detail: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ i.jsx("span", { className: o ? "check ok" : "check no", children: o ? "✓" : "!" }),
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: c }),
      /* @__PURE__ */ i.jsx("small", { children: d })
    ] })
  ] });
}
function Wt({ title: c, text: o, compact: d = !1 }) {
  return /* @__PURE__ */ i.jsxs("div", { className: d ? "empty compact" : "empty", children: [
    /* @__PURE__ */ i.jsx("strong", { children: c }),
    /* @__PURE__ */ i.jsx("span", { children: o })
  ] });
}
function hn({ tone: c, title: o, text: d }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `notice ${c}`, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ i.jsx("strong", { children: o }),
    /* @__PURE__ */ i.jsx("span", { children: d })
  ] });
}
function Lm() {
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
const Tm = document.getElementById("root");
Tm && cy.createRoot(Tm).render(/* @__PURE__ */ i.jsx(Uy, { children: /* @__PURE__ */ i.jsx(qy, {}) }));
