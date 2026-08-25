var Zs = { exports: {} }, ou = {};
var cm;
function Wy() {
  if (cm) return ou;
  cm = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function m(f, _, p) {
    var A = null;
    if (p !== void 0 && (A = "" + p), _.key !== void 0 && (A = "" + _.key), "key" in _) {
      p = {};
      for (var M in _)
        M !== "key" && (p[M] = _[M]);
    } else p = _;
    return _ = p.ref, {
      $$typeof: c,
      type: f,
      key: A,
      ref: _ !== void 0 ? _ : null,
      props: p
    };
  }
  return ou.Fragment = o, ou.jsx = m, ou.jsxs = m, ou;
}
var sm;
function Iy() {
  return sm || (sm = 1, Zs.exports = Wy()), Zs.exports;
}
var i = Iy(), Ks = { exports: {} }, ye = {};
var rm;
function Py() {
  if (rm) return ye;
  rm = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
  function V(y) {
    return y === null || typeof y != "object" ? null : (y = Y && y[Y] || y["@@iterator"], typeof y == "function" ? y : null);
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
  function J(y, C, X) {
    this.props = y, this.context = C, this.refs = he, this.updater = X || ee;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(y, C) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, C, "setState");
  }, J.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function me() {
  }
  me.prototype = J.prototype;
  function fe(y, C, X) {
    this.props = y, this.context = C, this.refs = he, this.updater = X || ee;
  }
  var ne = fe.prototype = new me();
  ne.constructor = fe, te(ne, J.prototype), ne.isPureReactComponent = !0;
  var W = Array.isArray;
  function I() {
  }
  var w = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function B(y, C, X) {
    var Q = X.ref;
    return {
      $$typeof: c,
      type: y,
      key: C,
      ref: Q !== void 0 ? Q : null,
      props: X
    };
  }
  function ze(y, C) {
    return B(y.type, C, y.props);
  }
  function Ae(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c;
  }
  function je(y) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(X) {
      return C[X];
    });
  }
  var et = /\/+/g;
  function Ue(y, C) {
    return typeof y == "object" && y !== null && y.key != null ? je("" + y.key) : C.toString(36);
  }
  function Ve(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(I, I) : (y.status = "pending", y.then(
          function(C) {
            y.status === "pending" && (y.status = "fulfilled", y.value = C);
          },
          function(C) {
            y.status === "pending" && (y.status = "rejected", y.reason = C);
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
  function b(y, C, X, Q, de) {
    var re = typeof y;
    (re === "undefined" || re === "boolean") && (y = null);
    var pe = !1;
    if (y === null) pe = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case c:
            case o:
              pe = !0;
              break;
            case O:
              return pe = y._init, b(
                pe(y._payload),
                C,
                X,
                Q,
                de
              );
          }
      }
    if (pe)
      return de = de(y), pe = Q === "" ? "." + Ue(y, 0) : Q, W(de) ? (X = "", pe != null && (X = pe.replace(et, "$&/") + "/"), b(de, C, X, "", function(oe) {
        return oe;
      })) : de != null && (Ae(de) && (de = ze(
        de,
        X + (de.key == null || y && y.key === de.key ? "" : ("" + de.key).replace(
          et,
          "$&/"
        ) + "/") + pe
      )), C.push(de)), 1;
    pe = 0;
    var k = Q === "" ? "." : Q + ":";
    if (W(y))
      for (var ue = 0; ue < y.length; ue++)
        Q = y[ue], re = k + Ue(Q, ue), pe += b(
          Q,
          C,
          X,
          re,
          de
        );
    else if (ue = V(y), typeof ue == "function")
      for (y = ue.call(y), ue = 0; !(Q = y.next()).done; )
        Q = Q.value, re = k + Ue(Q, ue++), pe += b(
          Q,
          C,
          X,
          re,
          de
        );
    else if (re === "object") {
      if (typeof y.then == "function")
        return b(
          Ve(y),
          C,
          X,
          Q,
          de
        );
      throw C = String(y), Error(
        "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function d(y, C, X) {
    if (y == null) return y;
    var Q = [], de = 0;
    return b(y, Q, "", "", function(re) {
      return C.call(X, re, de++);
    }), Q;
  }
  function G(y) {
    if (y._status === -1) {
      var C = y._result;
      C = C(), C.then(
        function(X) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = X);
        },
        function(X) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = X);
        }
      ), y._status === -1 && (y._status = 0, y._result = C);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var L = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var C = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(C)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, se = {
    map: d,
    forEach: function(y, C, X) {
      d(
        y,
        function() {
          C.apply(this, arguments);
        },
        X
      );
    },
    count: function(y) {
      var C = 0;
      return d(y, function() {
        C++;
      }), C;
    },
    toArray: function(y) {
      return d(y, function(C) {
        return C;
      }) || [];
    },
    only: function(y) {
      if (!Ae(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return ye.Activity = N, ye.Children = se, ye.Component = J, ye.Fragment = m, ye.Profiler = _, ye.PureComponent = fe, ye.StrictMode = f, ye.Suspense = x, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ye.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return w.H.useMemoCache(y);
    }
  }, ye.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, ye.cacheSignal = function() {
    return null;
  }, ye.cloneElement = function(y, C, X) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var Q = te({}, y.props), de = y.key;
    if (C != null)
      for (re in C.key !== void 0 && (de = "" + C.key), C)
        !P.call(C, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && C.ref === void 0 || (Q[re] = C[re]);
    var re = arguments.length - 2;
    if (re === 1) Q.children = X;
    else if (1 < re) {
      for (var pe = Array(re), k = 0; k < re; k++)
        pe[k] = arguments[k + 2];
      Q.children = pe;
    }
    return B(y.type, de, Q);
  }, ye.createContext = function(y) {
    return y = {
      $$typeof: A,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: p,
      _context: y
    }, y;
  }, ye.createElement = function(y, C, X) {
    var Q, de = {}, re = null;
    if (C != null)
      for (Q in C.key !== void 0 && (re = "" + C.key), C)
        P.call(C, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (de[Q] = C[Q]);
    var pe = arguments.length - 2;
    if (pe === 1) de.children = X;
    else if (1 < pe) {
      for (var k = Array(pe), ue = 0; ue < pe; ue++)
        k[ue] = arguments[ue + 2];
      de.children = k;
    }
    if (y && y.defaultProps)
      for (Q in pe = y.defaultProps, pe)
        de[Q] === void 0 && (de[Q] = pe[Q]);
    return B(y, re, de);
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(y) {
    return { $$typeof: M, render: y };
  }, ye.isValidElement = Ae, ye.lazy = function(y) {
    return {
      $$typeof: O,
      _payload: { _status: -1, _result: y },
      _init: G
    };
  }, ye.memo = function(y, C) {
    return {
      $$typeof: v,
      type: y,
      compare: C === void 0 ? null : C
    };
  }, ye.startTransition = function(y) {
    var C = w.T, X = {};
    w.T = X;
    try {
      var Q = y(), de = w.S;
      de !== null && de(X, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(I, L);
    } catch (re) {
      L(re);
    } finally {
      C !== null && X.types !== null && (C.types = X.types), w.T = C;
    }
  }, ye.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, ye.use = function(y) {
    return w.H.use(y);
  }, ye.useActionState = function(y, C, X) {
    return w.H.useActionState(y, C, X);
  }, ye.useCallback = function(y, C) {
    return w.H.useCallback(y, C);
  }, ye.useContext = function(y) {
    return w.H.useContext(y);
  }, ye.useDebugValue = function() {
  }, ye.useDeferredValue = function(y, C) {
    return w.H.useDeferredValue(y, C);
  }, ye.useEffect = function(y, C) {
    return w.H.useEffect(y, C);
  }, ye.useEffectEvent = function(y) {
    return w.H.useEffectEvent(y);
  }, ye.useId = function() {
    return w.H.useId();
  }, ye.useImperativeHandle = function(y, C, X) {
    return w.H.useImperativeHandle(y, C, X);
  }, ye.useInsertionEffect = function(y, C) {
    return w.H.useInsertionEffect(y, C);
  }, ye.useLayoutEffect = function(y, C) {
    return w.H.useLayoutEffect(y, C);
  }, ye.useMemo = function(y, C) {
    return w.H.useMemo(y, C);
  }, ye.useOptimistic = function(y, C) {
    return w.H.useOptimistic(y, C);
  }, ye.useReducer = function(y, C, X) {
    return w.H.useReducer(y, C, X);
  }, ye.useRef = function(y) {
    return w.H.useRef(y);
  }, ye.useState = function(y) {
    return w.H.useState(y);
  }, ye.useSyncExternalStore = function(y, C, X) {
    return w.H.useSyncExternalStore(
      y,
      C,
      X
    );
  }, ye.useTransition = function() {
    return w.H.useTransition();
  }, ye.version = "19.2.8", ye;
}
var om;
function ir() {
  return om || (om = 1, Ks.exports = Py()), Ks.exports;
}
var R = ir(), Js = { exports: {} }, fu = {}, $s = { exports: {} }, Fs = {};
var fm;
function ev() {
  return fm || (fm = 1, (function(c) {
    function o(b, d) {
      var G = b.length;
      b.push(d);
      e: for (; 0 < G; ) {
        var L = G - 1 >>> 1, se = b[L];
        if (0 < _(se, d))
          b[L] = d, b[G] = se, G = L;
        else break e;
      }
    }
    function m(b) {
      return b.length === 0 ? null : b[0];
    }
    function f(b) {
      if (b.length === 0) return null;
      var d = b[0], G = b.pop();
      if (G !== d) {
        b[0] = G;
        e: for (var L = 0, se = b.length, y = se >>> 1; L < y; ) {
          var C = 2 * (L + 1) - 1, X = b[C], Q = C + 1, de = b[Q];
          if (0 > _(X, G))
            Q < se && 0 > _(de, X) ? (b[L] = de, b[Q] = G, L = Q) : (b[L] = X, b[C] = G, L = C);
          else if (Q < se && 0 > _(de, G))
            b[L] = de, b[Q] = G, L = Q;
          else break e;
        }
      }
      return d;
    }
    function _(b, d) {
      var G = b.sortIndex - d.sortIndex;
      return G !== 0 ? G : b.id - d.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      c.unstable_now = function() {
        return p.now();
      };
    } else {
      var A = Date, M = A.now();
      c.unstable_now = function() {
        return A.now() - M;
      };
    }
    var x = [], v = [], O = 1, N = null, Y = 3, V = !1, ee = !1, te = !1, he = !1, J = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    function ne(b) {
      for (var d = m(v); d !== null; ) {
        if (d.callback === null) f(v);
        else if (d.startTime <= b)
          f(v), d.sortIndex = d.expirationTime, o(x, d);
        else break;
        d = m(v);
      }
    }
    function W(b) {
      if (te = !1, ne(b), !ee)
        if (m(x) !== null)
          ee = !0, I || (I = !0, je());
        else {
          var d = m(v);
          d !== null && Ve(W, d.startTime - b);
        }
    }
    var I = !1, w = -1, P = 5, B = -1;
    function ze() {
      return he ? !0 : !(c.unstable_now() - B < P);
    }
    function Ae() {
      if (he = !1, I) {
        var b = c.unstable_now();
        B = b;
        var d = !0;
        try {
          e: {
            ee = !1, te && (te = !1, me(w), w = -1), V = !0;
            var G = Y;
            try {
              t: {
                for (ne(b), N = m(x); N !== null && !(N.expirationTime > b && ze()); ) {
                  var L = N.callback;
                  if (typeof L == "function") {
                    N.callback = null, Y = N.priorityLevel;
                    var se = L(
                      N.expirationTime <= b
                    );
                    if (b = c.unstable_now(), typeof se == "function") {
                      N.callback = se, ne(b), d = !0;
                      break t;
                    }
                    N === m(x) && f(x), ne(b);
                  } else f(x);
                  N = m(x);
                }
                if (N !== null) d = !0;
                else {
                  var y = m(v);
                  y !== null && Ve(
                    W,
                    y.startTime - b
                  ), d = !1;
                }
              }
              break e;
            } finally {
              N = null, Y = G, V = !1;
            }
            d = void 0;
          }
        } finally {
          d ? je() : I = !1;
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
    function Ve(b, d) {
      w = J(function() {
        b(c.unstable_now());
      }, d);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, c.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < b ? Math.floor(1e3 / b) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, c.unstable_next = function(b) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var d = 3;
          break;
        default:
          d = Y;
      }
      var G = Y;
      Y = d;
      try {
        return b();
      } finally {
        Y = G;
      }
    }, c.unstable_requestPaint = function() {
      he = !0;
    }, c.unstable_runWithPriority = function(b, d) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var G = Y;
      Y = b;
      try {
        return d();
      } finally {
        Y = G;
      }
    }, c.unstable_scheduleCallback = function(b, d, G) {
      var L = c.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? L + G : L) : G = L, b) {
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
      return se = G + se, b = {
        id: O++,
        callback: d,
        priorityLevel: b,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > L ? (b.sortIndex = G, o(v, b), m(x) === null && b === m(v) && (te ? (me(w), w = -1) : te = !0, Ve(W, G - L))) : (b.sortIndex = se, o(x, b), ee || V || (ee = !0, I || (I = !0, je()))), b;
    }, c.unstable_shouldYield = ze, c.unstable_wrapCallback = function(b) {
      var d = Y;
      return function() {
        var G = Y;
        Y = d;
        try {
          return b.apply(this, arguments);
        } finally {
          Y = G;
        }
      };
    };
  })(Fs)), Fs;
}
var dm;
function tv() {
  return dm || (dm = 1, $s.exports = ev()), $s.exports;
}
var Ws = { exports: {} }, ht = {};
var mm;
function lv() {
  if (mm) return ht;
  mm = 1;
  var c = ir();
  function o(x) {
    var v = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        v += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return "Minified React error #" + x + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m() {
  }
  var f = {
    d: {
      f: m,
      r: function() {
        throw Error(o(522));
      },
      D: m,
      C: m,
      L: m,
      m,
      X: m,
      S: m,
      M: m
    },
    p: 0,
    findDOMNode: null
  }, _ = /* @__PURE__ */ Symbol.for("react.portal");
  function p(x, v, O) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _,
      key: N == null ? null : "" + N,
      children: x,
      containerInfo: v,
      implementation: O
    };
  }
  var A = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function M(x, v) {
    if (x === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ht.createPortal = function(x, v) {
    var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(o(299));
    return p(x, v, null, O);
  }, ht.flushSync = function(x) {
    var v = A.T, O = f.p;
    try {
      if (A.T = null, f.p = 2, x) return x();
    } finally {
      A.T = v, f.p = O, f.d.f();
    }
  }, ht.preconnect = function(x, v) {
    typeof x == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(x, v));
  }, ht.prefetchDNS = function(x) {
    typeof x == "string" && f.d.D(x);
  }, ht.preinit = function(x, v) {
    if (typeof x == "string" && v && typeof v.as == "string") {
      var O = v.as, N = M(O, v.crossOrigin), Y = typeof v.integrity == "string" ? v.integrity : void 0, V = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      O === "style" ? f.d.S(
        x,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: N,
          integrity: Y,
          fetchPriority: V
        }
      ) : O === "script" && f.d.X(x, {
        crossOrigin: N,
        integrity: Y,
        fetchPriority: V,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, ht.preinitModule = function(x, v) {
    if (typeof x == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var O = M(
            v.as,
            v.crossOrigin
          );
          f.d.M(x, {
            crossOrigin: O,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(x);
  }, ht.preload = function(x, v) {
    if (typeof x == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var O = v.as, N = M(O, v.crossOrigin);
      f.d.L(x, O, {
        crossOrigin: N,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, ht.preloadModule = function(x, v) {
    if (typeof x == "string")
      if (v) {
        var O = M(v.as, v.crossOrigin);
        f.d.m(x, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: O,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(x);
  }, ht.requestFormReset = function(x) {
    f.d.r(x);
  }, ht.unstable_batchedUpdates = function(x, v) {
    return x(v);
  }, ht.useFormState = function(x, v, O) {
    return A.H.useFormState(x, v, O);
  }, ht.useFormStatus = function() {
    return A.H.useHostTransitionStatus();
  }, ht.version = "19.2.8", ht;
}
var hm;
function av() {
  if (hm) return Ws.exports;
  hm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Ws.exports = lv(), Ws.exports;
}
var ym;
function nv() {
  if (ym) return fu;
  ym = 1;
  var c = tv(), o = ir(), m = av();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function p(e) {
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
  function M(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function x(e) {
    if (p(e) !== e)
      throw Error(f(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = p(e), t === null) throw Error(f(188));
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
          if (u === l) return x(n), e;
          if (u === a) return x(n), t;
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
  var N = Object.assign, Y = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.transitional.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), he = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), me = /* @__PURE__ */ Symbol.for("react.consumer"), fe = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), ze = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ae = Symbol.iterator;
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
      case B:
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
  var Ve = Array.isArray, b = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, d = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, L = [], se = -1;
  function y(e) {
    return { current: e };
  }
  function C(e) {
    0 > se || (e.current = L[se], L[se] = null, se--);
  }
  function X(e, t) {
    se++, L[se] = e.current, e.current = t;
  }
  var Q = y(null), de = y(null), re = y(null), pe = y(null);
  function k(e, t) {
    switch (X(re, t), X(de, e), X(Q, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Cd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Cd(t), e = Dd(t, e);
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
    C(Q), X(Q, e);
  }
  function ue() {
    C(Q), C(de), C(re);
  }
  function oe(e) {
    e.memoizedState !== null && X(pe, e);
    var t = Q.current, l = Dd(t, e.type);
    t !== l && (X(de, e), X(Q, l));
  }
  function K(e) {
    de.current === e && (C(Q), C(de)), pe.current === e && (C(pe), iu._currentValue = G);
  }
  var tt, bt;
  function yt(e) {
    if (tt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        tt = t && t[1] || "", bt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + tt + e + bt;
  }
  var wt = !1;
  function vt(e, t) {
    if (!e || wt) return "";
    wt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (z) {
                  var T = z;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (z) {
                  T = z;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                T = z;
              }
              (q = e()) && typeof q.catch == "function" && q.catch(function() {
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
`), E = r.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < E.length && !E[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === h.length || n === E.length)
          for (a = h.length - 1, n = E.length - 1; 1 <= a && 0 <= n && h[a] !== E[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || h[a] !== E[n]) {
                  var D = `
` + h[a].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      wt = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? yt(l) : "";
  }
  function zl(e, t) {
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
        return vt(e.type, !1);
      case 11:
        return vt(e.type.render, !1);
      case 1:
        return vt(e.type, !0);
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
        t += zl(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ft = Object.prototype.hasOwnProperty, wl = c.unstable_scheduleCallback, rl = c.unstable_cancelCallback, vn = c.unstable_shouldYield, st = c.unstable_requestPaint, Ze = c.unstable_now, gn = c.unstable_getCurrentPriorityLevel, pn = c.unstable_ImmediatePriority, hu = c.unstable_UserBlockingPriority, _a = c.unstable_NormalPriority, yu = c.unstable_LowPriority, bn = c.unstable_IdlePriority, Na = c.log, Oi = c.unstable_setDisableYieldValue, na = null, gt = null;
  function xt(e) {
    if (typeof Na == "function" && Oi(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(na, e);
      } catch {
      }
  }
  var nt = Math.clz32 ? Math.clz32 : Ui, xn = Math.log, vu = Math.LN2;
  function Ui(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xn(e) / vu | 0) | 0;
  }
  var Ta = 256, Cl = 262144, Aa = 4194304;
  function H(e) {
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
    return r !== 0 ? (a = r & ~u, a !== 0 ? n = H(a) : (s &= r, s !== 0 ? n = H(s) : l || (l = r & ~e, l !== 0 && (n = H(l))))) : (r = a & ~u, r !== 0 ? n = H(r) : s !== 0 ? n = H(s) : l || (l = a & ~e, l !== 0 && (n = H(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function ve(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function be(e, t) {
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
    var e = Aa;
    return Aa <<= 1, (Aa & 62914560) === 0 && (Aa = 4194304), e;
  }
  function ut(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function le(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ct(e, t, l, a, n, u) {
    var s = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var r = e.entanglements, h = e.expirationTimes, E = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var D = 31 - nt(l), q = 1 << D;
      r[D] = 0, h[D] = -1;
      var T = E[D];
      if (T !== null)
        for (E[D] = null, D = 0; D < T.length; D++) {
          var z = T[D];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~q;
    }
    a !== 0 && ll(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function ll(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - nt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function al(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - nt(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function dr(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Ri(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Ri(e) {
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
  function qi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mr() {
    var e = d.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : em(e.type));
  }
  function hr(e, t) {
    var l = d.p;
    try {
      return d.p = e, t();
    } finally {
      d.p = l;
    }
  }
  var Dl = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Dl, jt = "__reactProps$" + Dl, za = "__reactContainer$" + Dl, Bi = "__reactEvents$" + Dl, Ym = "__reactListeners$" + Dl, km = "__reactHandles$" + Dl, yr = "__reactResources$" + Dl, jn = "__reactMarker$" + Dl;
  function Hi(e) {
    delete e[rt], delete e[jt], delete e[Bi], delete e[Ym], delete e[km];
  }
  function wa(e) {
    var t = e[rt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[za] || l[rt]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Hd(e); e !== null; ) {
            if (l = e[rt]) return l;
            e = Hd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Ca(e) {
    if (e = e[rt] || e[za]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Sn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Da(e) {
    var t = e[yr];
    return t || (t = e[yr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function it(e) {
    e[jn] = !0;
  }
  var vr = /* @__PURE__ */ new Set(), gr = {};
  function ua(e, t) {
    Ma(e, t), Ma(e + "Capture", t);
  }
  function Ma(e, t) {
    for (gr[e] = t, e = 0; e < t.length; e++)
      vr.add(t[e]);
  }
  var Gm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), pr = {}, br = {};
  function Vm(e) {
    return Ft.call(br, e) ? !0 : Ft.call(pr, e) ? !1 : Gm.test(e) ? br[e] = !0 : (pr[e] = !0, !1);
  }
  function gu(e, t, l) {
    if (Vm(t))
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
  function pu(e, t, l) {
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
  function ol(e, t, l, a) {
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
  function xr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xm(e, t, l) {
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
  function Li(e) {
    if (!e._valueTracker) {
      var t = xr(e) ? "checked" : "value";
      e._valueTracker = Xm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function jr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = xr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function bu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Qm = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      Qm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yi(e, t, l, a, n, u, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Lt(t)) : e.value !== "" + Lt(t) && (e.value = "" + Lt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? ki(e, s, Lt(t)) : l != null ? ki(e, s, Lt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Lt(r) : e.removeAttribute("name");
  }
  function Sr(e, t, l, a, n, u, s, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Li(e);
        return;
      }
      l = l != null ? "" + Lt(l) : "", t = t != null ? "" + Lt(t) : l, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = r ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Li(e);
  }
  function ki(e, t, l) {
    t === "number" && bu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Oa(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Lt(l), t = null, n = 0; n < e.length; n++) {
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
    if (t != null && (t = "" + Lt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Lt(l) : "";
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
    l = Lt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Li(e);
  }
  function Ua(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Zm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Tr(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && Nr(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Nr(e, u, t[u]);
  }
  function Gi(e) {
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
  var Km = /* @__PURE__ */ new Map([
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
  ]), Jm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xu(e) {
    return Jm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function fl() {
  }
  var Vi = null;
  function Xi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ra = null, qa = null;
  function Ar(e) {
    var t = Ca(e);
    if (t && (e = t.stateNode)) {
      var l = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Yi(
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
              'input[name="' + Yt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[jt] || null;
                if (!n) throw Error(f(90));
                Yi(
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
              a = l[t], a.form === e.form && jr(a);
          }
          break e;
        case "textarea":
          Er(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Oa(e, !!l.multiple, t, !1);
      }
    }
  }
  var Qi = !1;
  function zr(e, t, l) {
    if (Qi) return e(t, l);
    Qi = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Qi = !1, (Ra !== null || qa !== null) && (ci(), Ra && (t = Ra, e = qa, qa = Ra = null, Ar(t), e)))
        for (t = 0; t < e.length; t++) Ar(e[t]);
    }
  }
  function En(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[jt] || null;
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
  var dl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zi = !1;
  if (dl)
    try {
      var _n = {};
      Object.defineProperty(_n, "passive", {
        get: function() {
          Zi = !0;
        }
      }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
    } catch {
      Zi = !1;
    }
  var Ml = null, Ki = null, ju = null;
  function wr() {
    if (ju) return ju;
    var e, t = Ki, l = t.length, a, n = "value" in Ml ? Ml.value : Ml.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var s = l - e;
    for (a = 1; a <= s && t[l - a] === n[u - a]; a++) ;
    return ju = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Su(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Eu() {
    return !0;
  }
  function Cr() {
    return !1;
  }
  function St(e) {
    function t(l, a, n, u, s) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (l = e[r], this[r] = l ? l(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Eu : Cr, this.isPropagationStopped = Cr, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Eu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Eu);
      },
      persist: function() {
      },
      isPersistent: Eu
    }), t;
  }
  var ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _u = St(ia), Nn = N({}, ia, { view: 0, detail: 0 }), $m = St(Nn), Ji, $i, Tn, Nu = N({}, Nn, {
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
    getModifierState: Wi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Tn && (Tn && e.type === "mousemove" ? (Ji = e.screenX - Tn.screenX, $i = e.screenY - Tn.screenY) : $i = Ji = 0, Tn = e), Ji);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $i;
    }
  }), Dr = St(Nu), Fm = N({}, Nu, { dataTransfer: 0 }), Wm = St(Fm), Im = N({}, Nn, { relatedTarget: 0 }), Fi = St(Im), Pm = N({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), eh = St(Pm), th = N({}, ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), lh = St(th), ah = N({}, ia, { data: 0 }), Mr = St(ah), nh = {
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
  }, ih = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ch(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ih[e]) ? !!t[e] : !1;
  }
  function Wi() {
    return ch;
  }
  var sh = N({}, Nn, {
    key: function(e) {
      if (e.key) {
        var t = nh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Su(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wi,
    charCode: function(e) {
      return e.type === "keypress" ? Su(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Su(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), rh = St(sh), oh = N({}, Nu, {
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
  }), Or = St(oh), fh = N({}, Nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wi
  }), dh = St(fh), mh = N({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), hh = St(mh), yh = N({}, Nu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vh = St(yh), gh = N({}, ia, {
    newState: 0,
    oldState: 0
  }), ph = St(gh), bh = [9, 13, 27, 32], Ii = dl && "CompositionEvent" in window, An = null;
  dl && "documentMode" in document && (An = document.documentMode);
  var xh = dl && "TextEvent" in window && !An, Ur = dl && (!Ii || An && 8 < An && 11 >= An), Rr = " ", qr = !1;
  function Br(e, t) {
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
  function Hr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ba = !1;
  function jh(e, t) {
    switch (e) {
      case "compositionend":
        return Hr(t);
      case "keypress":
        return t.which !== 32 ? null : (qr = !0, Rr);
      case "textInput":
        return e = t.data, e === Rr && qr ? null : e;
      default:
        return null;
    }
  }
  function Sh(e, t) {
    if (Ba)
      return e === "compositionend" || !Ii && Br(e, t) ? (e = wr(), ju = Ki = Ml = null, Ba = !1, e) : null;
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
        return Ur && t.locale !== "ko" ? null : t.data;
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
    Ra ? qa ? qa.push(a) : qa = [a] : Ra = a, t = hi(t, "onChange"), 0 < t.length && (l = new _u(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var zn = null, wn = null;
  function _h(e) {
    _d(e, 0);
  }
  function Tu(e) {
    var t = Sn(e);
    if (jr(t)) return e;
  }
  function kr(e, t) {
    if (e === "change") return t;
  }
  var Gr = !1;
  if (dl) {
    var Pi;
    if (dl) {
      var ec = "oninput" in document;
      if (!ec) {
        var Vr = document.createElement("div");
        Vr.setAttribute("oninput", "return;"), ec = typeof Vr.oninput == "function";
      }
      Pi = ec;
    } else Pi = !1;
    Gr = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function Xr() {
    zn && (zn.detachEvent("onpropertychange", Qr), wn = zn = null);
  }
  function Qr(e) {
    if (e.propertyName === "value" && Tu(wn)) {
      var t = [];
      Yr(
        t,
        wn,
        e,
        Xi(e)
      ), zr(_h, t);
    }
  }
  function Nh(e, t, l) {
    e === "focusin" ? (Xr(), zn = t, wn = l, zn.attachEvent("onpropertychange", Qr)) : e === "focusout" && Xr();
  }
  function Th(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(wn);
  }
  function Ah(e, t) {
    if (e === "click") return Tu(t);
  }
  function zh(e, t) {
    if (e === "input" || e === "change")
      return Tu(t);
  }
  function wh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : wh;
  function Cn(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ft.call(t, n) || !Dt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Zr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Kr(e, t) {
    var l = Zr(e);
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
      l = Zr(l);
    }
  }
  function Jr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $r(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = bu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = bu(e.document);
    }
    return t;
  }
  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Ch = dl && "documentMode" in document && 11 >= document.documentMode, Ha = null, lc = null, Dn = null, ac = !1;
  function Fr(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ac || Ha == null || Ha !== bu(a) || (a = Ha, "selectionStart" in a && tc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Dn && Cn(Dn, a) || (Dn = a, a = hi(lc, "onSelect"), 0 < a.length && (t = new _u(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Ha)));
  }
  function ca(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var La = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, nc = {}, Wr = {};
  dl && (Wr = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function sa(e) {
    if (nc[e]) return nc[e];
    if (!La[e]) return e;
    var t = La[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Wr)
        return nc[e] = t[l];
    return e;
  }
  var Ir = sa("animationend"), Pr = sa("animationiteration"), eo = sa("animationstart"), Dh = sa("transitionrun"), Mh = sa("transitionstart"), Oh = sa("transitioncancel"), to = sa("transitionend"), lo = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function Wt(e, t) {
    lo.set(e, t), ua(t, [e]);
  }
  var Au = typeof reportError == "function" ? reportError : function(e) {
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
  }, kt = [], Ya = 0, ic = 0;
  function zu() {
    for (var e = Ya, t = ic = Ya = 0; t < e; ) {
      var l = kt[t];
      kt[t++] = null;
      var a = kt[t];
      kt[t++] = null;
      var n = kt[t];
      kt[t++] = null;
      var u = kt[t];
      if (kt[t++] = null, a !== null && n !== null) {
        var s = a.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n;
      }
      u !== 0 && ao(l, n, u);
    }
  }
  function wu(e, t, l, a) {
    kt[Ya++] = e, kt[Ya++] = t, kt[Ya++] = l, kt[Ya++] = a, ic |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function cc(e, t, l, a) {
    return wu(e, t, l, a), Cu(e);
  }
  function ra(e, t) {
    return wu(e, null, null, t), Cu(e);
  }
  function ao(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - nt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Cu(e) {
    if (50 < Pn)
      throw Pn = 0, vs = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ka = {};
  function Uh(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, l, a) {
    return new Uh(e, t, l, a);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ml(e, t) {
    var l = e.alternate;
    return l === null ? (l = Mt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function no(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Du(e, t, l, a, n, u) {
    var s = 0;
    if (a = e, typeof e == "function") sc(e) && (s = 1);
    else if (typeof e == "string")
      s = Ly(
        e,
        l,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return e = Mt(31, l, t, n), e.elementType = B, e.lanes = u, e;
        case te:
          return oa(l.children, n, u, t);
        case he:
          s = 8, n |= 24;
          break;
        case J:
          return e = Mt(12, l, t, n | 2), e.elementType = J, e.lanes = u, e;
        case W:
          return e = Mt(13, l, t, n), e.elementType = W, e.lanes = u, e;
        case I:
          return e = Mt(19, l, t, n), e.elementType = I, e.lanes = u, e;
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
    return t = Mt(s, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function oa(e, t, l, a) {
    return e = Mt(7, e, a, t), e.lanes = l, e;
  }
  function rc(e, t, l) {
    return e = Mt(6, e, null, t), e.lanes = l, e;
  }
  function uo(e) {
    var t = Mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function oc(e, t, l) {
    return t = Mt(
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
  var io = /* @__PURE__ */ new WeakMap();
  function Gt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = io.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: at(t)
      }, io.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: at(t)
    };
  }
  var Ga = [], Va = 0, Mu = null, Mn = 0, Vt = [], Xt = 0, Ol = null, nl = 1, ul = "";
  function hl(e, t) {
    Ga[Va++] = Mn, Ga[Va++] = Mu, Mu = e, Mn = t;
  }
  function co(e, t, l) {
    Vt[Xt++] = nl, Vt[Xt++] = ul, Vt[Xt++] = Ol, Ol = e;
    var a = nl;
    e = ul;
    var n = 32 - nt(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - nt(t) + n;
    if (30 < u) {
      var s = n - n % 5;
      u = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, nl = 1 << 32 - nt(t) + n | l << n | a, ul = u + e;
    } else
      nl = 1 << u | l << n | a, ul = e;
  }
  function fc(e) {
    e.return !== null && (hl(e, 1), co(e, 1, 0));
  }
  function dc(e) {
    for (; e === Mu; )
      Mu = Ga[--Va], Ga[Va] = null, Mn = Ga[--Va], Ga[Va] = null;
    for (; e === Ol; )
      Ol = Vt[--Xt], Vt[Xt] = null, ul = Vt[--Xt], Vt[Xt] = null, nl = Vt[--Xt], Vt[Xt] = null;
  }
  function so(e, t) {
    Vt[Xt++] = nl, Vt[Xt++] = ul, Vt[Xt++] = Ol, nl = t.id, ul = t.overflow, Ol = e;
  }
  var ot = null, Ye = null, Te = !1, Ul = null, Qt = !1, mc = Error(f(519));
  function Rl(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw On(Gt(t, e)), mc;
  }
  function ro(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[rt] = e, t[jt] = a, l) {
      case "dialog":
        Ee("cancel", t), Ee("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ee("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < tu.length; l++)
          Ee(tu[l], t);
        break;
      case "source":
        Ee("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ee("error", t), Ee("load", t);
        break;
      case "details":
        Ee("toggle", t);
        break;
      case "input":
        Ee("invalid", t), Sr(
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
        Ee("invalid", t);
        break;
      case "textarea":
        Ee("invalid", t), _r(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || zd(t.textContent, l) ? (a.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)), a.onScroll != null && Ee("scroll", t), a.onScrollEnd != null && Ee("scrollend", t), a.onClick != null && (t.onclick = fl), t = !0) : t = !1, t || Rl(e, !0);
  }
  function oo(e) {
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
  function Xa(e) {
    if (e !== ot) return !1;
    if (!Te) return oo(e), Te = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ds(e.type, e.memoizedProps)), l = !l), l && Ye && Rl(e), oo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ye = Bd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ye = Bd(e);
    } else
      t === 27 ? (t = Ye, $l(e.type) ? (e = qs, qs = null, Ye = e) : Ye = t) : Ye = ot ? Kt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fa() {
    Ye = ot = null, Te = !1;
  }
  function hc() {
    var e = Ul;
    return e !== null && (Tt === null ? Tt = e : Tt.push.apply(
      Tt,
      e
    ), Ul = null), e;
  }
  function On(e) {
    Ul === null ? Ul = [e] : Ul.push(e);
  }
  var yc = y(null), da = null, yl = null;
  function ql(e, t, l) {
    X(yc, t._currentValue), t._currentValue = l;
  }
  function vl(e) {
    e._currentValue = yc.current, C(yc);
  }
  function vc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function gc(e, t, l, a) {
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
              u.lanes |= l, r = u.alternate, r !== null && (r.lanes |= l), vc(
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
        s.lanes |= l, u = s.alternate, u !== null && (u.lanes |= l), vc(s, l, e), s = null;
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
  function Qa(e, t, l, a) {
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
          Dt(n.pendingProps.value, s.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (n === pe.current) {
        if (s = n.alternate, s === null) throw Error(f(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(iu) : e = [iu]);
      }
      n = n.return;
    }
    e !== null && gc(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function Ou(e) {
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
  function ma(e) {
    da = e, yl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return fo(da, e);
  }
  function Uu(e, t) {
    return da === null && ma(e), fo(e, t);
  }
  function fo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, yl === null) {
      if (e === null) throw Error(f(308));
      yl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else yl = yl.next = t;
    return l;
  }
  var Rh = typeof AbortController < "u" ? AbortController : function() {
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
  }, qh = c.unstable_scheduleCallback, Bh = c.unstable_NormalPriority, Fe = {
    $$typeof: fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pc() {
    return {
      controller: new Rh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Un(e) {
    e.refCount--, e.refCount === 0 && qh(Bh, function() {
      e.controller.abort();
    });
  }
  var Rn = null, bc = 0, Za = 0, Ka = null;
  function Hh(e, t) {
    if (Rn === null) {
      var l = Rn = [];
      bc = 0, Za = Ss(), Ka = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return bc++, t.then(mo, mo), t;
  }
  function mo() {
    if (--bc === 0 && Rn !== null) {
      Ka !== null && (Ka.status = "fulfilled");
      var e = Rn;
      Rn = null, Za = 0, Ka = null;
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
  var ho = b.S;
  b.S = function(e, t) {
    If = Ze(), typeof t == "object" && t !== null && typeof t.then == "function" && Hh(e, t), ho !== null && ho(e, t);
  };
  var ha = y(null);
  function xc() {
    var e = ha.current;
    return e !== null ? e : Le.pooledCache;
  }
  function Ru(e, t) {
    t === null ? X(ha, ha.current) : X(ha, t.pool);
  }
  function yo() {
    var e = xc();
    return e === null ? null : { parent: Fe._currentValue, pool: e };
  }
  var Ja = Error(f(460)), jc = Error(f(474)), qu = Error(f(542)), Bu = { then: function() {
  } };
  function vo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function go(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(fl, fl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, bo(e), e;
      default:
        if (typeof t.status == "string") t.then(fl, fl);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
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
        throw va = t, Ja;
    }
  }
  function ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (va = l, Ja) : l;
    }
  }
  var va = null;
  function po() {
    if (va === null) throw Error(f(459));
    var e = va;
    return va = null, e;
  }
  function bo(e) {
    if (e === Ja || e === qu)
      throw Error(f(483));
  }
  var $a = null, qn = 0;
  function Hu(e) {
    var t = qn;
    return qn += 1, $a === null && ($a = []), go($a, e, t);
  }
  function Bn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Lu(e, t) {
    throw t.$$typeof === Y ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function xo(e) {
    function t(j, g) {
      if (e) {
        var S = j.deletions;
        S === null ? (j.deletions = [g], j.flags |= 16) : S.push(g);
      }
    }
    function l(j, g) {
      if (!e) return null;
      for (; g !== null; )
        t(j, g), g = g.sibling;
      return null;
    }
    function a(j) {
      for (var g = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? g.set(j.key, j) : g.set(j.index, j), j = j.sibling;
      return g;
    }
    function n(j, g) {
      return j = ml(j, g), j.index = 0, j.sibling = null, j;
    }
    function u(j, g, S) {
      return j.index = S, e ? (S = j.alternate, S !== null ? (S = S.index, S < g ? (j.flags |= 67108866, g) : S) : (j.flags |= 67108866, g)) : (j.flags |= 1048576, g);
    }
    function s(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function r(j, g, S, U) {
      return g === null || g.tag !== 6 ? (g = rc(S, j.mode, U), g.return = j, g) : (g = n(g, S), g.return = j, g);
    }
    function h(j, g, S, U) {
      var ae = S.type;
      return ae === te ? D(
        j,
        g,
        S.props.children,
        U,
        S.key
      ) : g !== null && (g.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === P && ya(ae) === g.type) ? (g = n(g, S.props), Bn(g, S), g.return = j, g) : (g = Du(
        S.type,
        S.key,
        S.props,
        null,
        j.mode,
        U
      ), Bn(g, S), g.return = j, g);
    }
    function E(j, g, S, U) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = oc(S, j.mode, U), g.return = j, g) : (g = n(g, S.children || []), g.return = j, g);
    }
    function D(j, g, S, U, ae) {
      return g === null || g.tag !== 7 ? (g = oa(
        S,
        j.mode,
        U,
        ae
      ), g.return = j, g) : (g = n(g, S), g.return = j, g);
    }
    function q(j, g, S) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = rc(
          "" + g,
          j.mode,
          S
        ), g.return = j, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case V:
            return S = Du(
              g.type,
              g.key,
              g.props,
              null,
              j.mode,
              S
            ), Bn(S, g), S.return = j, S;
          case ee:
            return g = oc(
              g,
              j.mode,
              S
            ), g.return = j, g;
          case P:
            return g = ya(g), q(j, g, S);
        }
        if (Ve(g) || je(g))
          return g = oa(
            g,
            j.mode,
            S,
            null
          ), g.return = j, g;
        if (typeof g.then == "function")
          return q(j, Hu(g), S);
        if (g.$$typeof === fe)
          return q(
            j,
            Uu(j, g),
            S
          );
        Lu(j, g);
      }
      return null;
    }
    function T(j, g, S, U) {
      var ae = g !== null ? g.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return ae !== null ? null : r(j, g, "" + S, U);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case V:
            return S.key === ae ? h(j, g, S, U) : null;
          case ee:
            return S.key === ae ? E(j, g, S, U) : null;
          case P:
            return S = ya(S), T(j, g, S, U);
        }
        if (Ve(S) || je(S))
          return ae !== null ? null : D(j, g, S, U, null);
        if (typeof S.then == "function")
          return T(
            j,
            g,
            Hu(S),
            U
          );
        if (S.$$typeof === fe)
          return T(
            j,
            g,
            Uu(j, S),
            U
          );
        Lu(j, S);
      }
      return null;
    }
    function z(j, g, S, U, ae) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return j = j.get(S) || null, r(g, j, "" + U, ae);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case V:
            return j = j.get(
              U.key === null ? S : U.key
            ) || null, h(g, j, U, ae);
          case ee:
            return j = j.get(
              U.key === null ? S : U.key
            ) || null, E(g, j, U, ae);
          case P:
            return U = ya(U), z(
              j,
              g,
              S,
              U,
              ae
            );
        }
        if (Ve(U) || je(U))
          return j = j.get(S) || null, D(g, j, U, ae, null);
        if (typeof U.then == "function")
          return z(
            j,
            g,
            S,
            Hu(U),
            ae
          );
        if (U.$$typeof === fe)
          return z(
            j,
            g,
            S,
            Uu(g, U),
            ae
          );
        Lu(g, U);
      }
      return null;
    }
    function $(j, g, S, U) {
      for (var ae = null, we = null, F = g, xe = g = 0, Ne = null; F !== null && xe < S.length; xe++) {
        F.index > xe ? (Ne = F, F = null) : Ne = F.sibling;
        var Ce = T(
          j,
          F,
          S[xe],
          U
        );
        if (Ce === null) {
          F === null && (F = Ne);
          break;
        }
        e && F && Ce.alternate === null && t(j, F), g = u(Ce, g, xe), we === null ? ae = Ce : we.sibling = Ce, we = Ce, F = Ne;
      }
      if (xe === S.length)
        return l(j, F), Te && hl(j, xe), ae;
      if (F === null) {
        for (; xe < S.length; xe++)
          F = q(j, S[xe], U), F !== null && (g = u(
            F,
            g,
            xe
          ), we === null ? ae = F : we.sibling = F, we = F);
        return Te && hl(j, xe), ae;
      }
      for (F = a(F); xe < S.length; xe++)
        Ne = z(
          F,
          j,
          xe,
          S[xe],
          U
        ), Ne !== null && (e && Ne.alternate !== null && F.delete(
          Ne.key === null ? xe : Ne.key
        ), g = u(
          Ne,
          g,
          xe
        ), we === null ? ae = Ne : we.sibling = Ne, we = Ne);
      return e && F.forEach(function(ea) {
        return t(j, ea);
      }), Te && hl(j, xe), ae;
    }
    function ie(j, g, S, U) {
      if (S == null) throw Error(f(151));
      for (var ae = null, we = null, F = g, xe = g = 0, Ne = null, Ce = S.next(); F !== null && !Ce.done; xe++, Ce = S.next()) {
        F.index > xe ? (Ne = F, F = null) : Ne = F.sibling;
        var ea = T(j, F, Ce.value, U);
        if (ea === null) {
          F === null && (F = Ne);
          break;
        }
        e && F && ea.alternate === null && t(j, F), g = u(ea, g, xe), we === null ? ae = ea : we.sibling = ea, we = ea, F = Ne;
      }
      if (Ce.done)
        return l(j, F), Te && hl(j, xe), ae;
      if (F === null) {
        for (; !Ce.done; xe++, Ce = S.next())
          Ce = q(j, Ce.value, U), Ce !== null && (g = u(Ce, g, xe), we === null ? ae = Ce : we.sibling = Ce, we = Ce);
        return Te && hl(j, xe), ae;
      }
      for (F = a(F); !Ce.done; xe++, Ce = S.next())
        Ce = z(F, j, xe, Ce.value, U), Ce !== null && (e && Ce.alternate !== null && F.delete(Ce.key === null ? xe : Ce.key), g = u(Ce, g, xe), we === null ? ae = Ce : we.sibling = Ce, we = Ce);
      return e && F.forEach(function(Fy) {
        return t(j, Fy);
      }), Te && hl(j, xe), ae;
    }
    function Be(j, g, S, U) {
      if (typeof S == "object" && S !== null && S.type === te && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case V:
            e: {
              for (var ae = S.key; g !== null; ) {
                if (g.key === ae) {
                  if (ae = S.type, ae === te) {
                    if (g.tag === 7) {
                      l(
                        j,
                        g.sibling
                      ), U = n(
                        g,
                        S.props.children
                      ), U.return = j, j = U;
                      break e;
                    }
                  } else if (g.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === P && ya(ae) === g.type) {
                    l(
                      j,
                      g.sibling
                    ), U = n(g, S.props), Bn(U, S), U.return = j, j = U;
                    break e;
                  }
                  l(j, g);
                  break;
                } else t(j, g);
                g = g.sibling;
              }
              S.type === te ? (U = oa(
                S.props.children,
                j.mode,
                U,
                S.key
              ), U.return = j, j = U) : (U = Du(
                S.type,
                S.key,
                S.props,
                null,
                j.mode,
                U
              ), Bn(U, S), U.return = j, j = U);
            }
            return s(j);
          case ee:
            e: {
              for (ae = S.key; g !== null; ) {
                if (g.key === ae)
                  if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
                    l(
                      j,
                      g.sibling
                    ), U = n(g, S.children || []), U.return = j, j = U;
                    break e;
                  } else {
                    l(j, g);
                    break;
                  }
                else t(j, g);
                g = g.sibling;
              }
              U = oc(S, j.mode, U), U.return = j, j = U;
            }
            return s(j);
          case P:
            return S = ya(S), Be(
              j,
              g,
              S,
              U
            );
        }
        if (Ve(S))
          return $(
            j,
            g,
            S,
            U
          );
        if (je(S)) {
          if (ae = je(S), typeof ae != "function") throw Error(f(150));
          return S = ae.call(S), ie(
            j,
            g,
            S,
            U
          );
        }
        if (typeof S.then == "function")
          return Be(
            j,
            g,
            Hu(S),
            U
          );
        if (S.$$typeof === fe)
          return Be(
            j,
            g,
            Uu(j, S),
            U
          );
        Lu(j, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, g !== null && g.tag === 6 ? (l(j, g.sibling), U = n(g, S), U.return = j, j = U) : (l(j, g), U = rc(S, j.mode, U), U.return = j, j = U), s(j)) : l(j, g);
    }
    return function(j, g, S, U) {
      try {
        qn = 0;
        var ae = Be(
          j,
          g,
          S,
          U
        );
        return $a = null, ae;
      } catch (F) {
        if (F === Ja || F === qu) throw F;
        var we = Mt(29, F, null, j.mode);
        return we.lanes = U, we.return = j, we;
      }
    };
  }
  var ga = xo(!0), jo = xo(!1), Bl = !1;
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
  function Hl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (De & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Cu(e), ao(e, null, l), t;
    }
    return wu(e, a, t, l), Cu(e);
  }
  function Hn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, al(e, l);
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
  var Nc = !1;
  function Ln() {
    if (Nc) {
      var e = Ka;
      if (e !== null) throw e;
    }
  }
  function Yn(e, t, l, a) {
    Nc = !1;
    var n = e.updateQueue;
    Bl = !1;
    var u = n.firstBaseUpdate, s = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var h = r, E = h.next;
      h.next = null, s === null ? u = E : s.next = E, s = h;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, r = D.lastBaseUpdate, r !== s && (r === null ? D.firstBaseUpdate = E : r.next = E, D.lastBaseUpdate = h));
    }
    if (u !== null) {
      var q = n.baseState;
      s = 0, D = E = h = null, r = u;
      do {
        var T = r.lane & -536870913, z = T !== r.lane;
        if (z ? (_e & T) === T : (a & T) === T) {
          T !== 0 && T === Za && (Nc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, ie = r;
            T = t;
            var Be = l;
            switch (ie.tag) {
              case 1:
                if ($ = ie.payload, typeof $ == "function") {
                  q = $.call(Be, q, T);
                  break e;
                }
                q = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ie.payload, T = typeof $ == "function" ? $.call(Be, q, T) : $, T == null) break e;
                q = N({}, q, T);
                break e;
              case 2:
                Bl = !0;
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
          }, D === null ? (E = D = z, h = q) : D = D.next = z, s |= T;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          z = r, r = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
        }
      } while (!0);
      D === null && (h = q), n.baseState = h, n.firstBaseUpdate = E, n.lastBaseUpdate = D, u === null && (n.shared.lanes = 0), Xl |= s, e.lanes = s, e.memoizedState = q;
    }
  }
  function So(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Eo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        So(l[e], t);
  }
  var Fa = y(null), Yu = y(0);
  function _o(e, t) {
    e = Nl, X(Yu, e), X(Fa, t), Nl = e | t.baseLanes;
  }
  function Tc() {
    X(Yu, Nl), X(Fa, Fa.current);
  }
  function Ac() {
    Nl = Yu.current, C(Fa), C(Yu);
  }
  var Ot = y(null), Zt = null;
  function Yl(e) {
    var t = e.alternate;
    X(Ke, Ke.current & 1), X(Ot, e), Zt === null && (t === null || Fa.current !== null || t.memoizedState !== null) && (Zt = e);
  }
  function zc(e) {
    X(Ke, Ke.current), X(Ot, e), Zt === null && (Zt = e);
  }
  function No(e) {
    e.tag === 22 ? (X(Ke, Ke.current), X(Ot, e), Zt === null && (Zt = e)) : kl();
  }
  function kl() {
    X(Ke, Ke.current), X(Ot, Ot.current);
  }
  function Ut(e) {
    C(Ot), Zt === e && (Zt = null), C(Ke);
  }
  var Ke = y(0);
  function ku(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Us(l) || Rs(l)))
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
  var gl = 0, ge = null, Re = null, We = null, Gu = !1, Wa = !1, pa = !1, Vu = 0, kn = 0, Ia = null, Yh = 0;
  function Xe() {
    throw Error(f(321));
  }
  function wc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Dt(e[l], t[l])) return !1;
    return !0;
  }
  function Cc(e, t, l, a, n, u) {
    return gl = u, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = e === null || e.memoizedState === null ? rf : Qc, pa = !1, u = l(a, n), pa = !1, Wa && (u = Ao(
      t,
      l,
      a,
      n
    )), To(e), u;
  }
  function To(e) {
    b.H = Xn;
    var t = Re !== null && Re.next !== null;
    if (gl = 0, We = Re = ge = null, Gu = !1, kn = 0, Ia = null, t) throw Error(f(300));
    e === null || Ie || (e = e.dependencies, e !== null && Ou(e) && (Ie = !0));
  }
  function Ao(e, t, l, a) {
    ge = e;
    var n = 0;
    do {
      if (Wa && (Ia = null), kn = 0, Wa = !1, 25 <= n) throw Error(f(301));
      if (n += 1, We = Re = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      b.H = of, u = t(l, a);
    } while (Wa);
    return u;
  }
  function kh() {
    var e = b.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Gn(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ge.flags |= 1024), t;
  }
  function Dc() {
    var e = Vu !== 0;
    return Vu = 0, e;
  }
  function Mc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Oc(e) {
    if (Gu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Gu = !1;
    }
    gl = 0, We = Re = ge = null, Wa = !1, kn = Vu = 0, Ia = null;
  }
  function pt() {
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
  function Xu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gn(e) {
    var t = kn;
    return kn += 1, Ia === null && (Ia = []), e = go(Ia, e, t), t = ge, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? rf : Qc), e;
  }
  function Qu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Gn(e);
      if (e.$$typeof === fe) return ft(e);
    }
    throw Error(f(438, String(e)));
  }
  function Uc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Xu(), ge.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = ze;
    return t.index++, l;
  }
  function pl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zu(e) {
    var t = Je();
    return Rc(t, Re, e);
  }
  function Rc(e, t, l) {
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
      var r = s = null, h = null, E = t, D = !1;
      do {
        var q = E.lane & -536870913;
        if (q !== E.lane ? (_e & q) === q : (gl & q) === q) {
          var T = E.revertLane;
          if (T === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), q === Za && (D = !0);
          else if ((gl & T) === T) {
            E = E.next, T === Za && (D = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, h === null ? (r = h = q, s = u) : h = h.next = q, ge.lanes |= T, Xl |= T;
          q = E.action, pa && l(u, q), u = E.hasEagerState ? E.eagerState : l(u, q);
        } else
          T = {
            lane: q,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, h === null ? (r = h = T, s = u) : h = h.next = T, ge.lanes |= q, Xl |= q;
        E = E.next;
      } while (E !== null && E !== t);
      if (h === null ? s = u : h.next = r, !Dt(u, e.memoizedState) && (Ie = !0, D && (l = Ka, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = s, e.baseQueue = h, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function qc(e) {
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
      Dt(u, t.memoizedState) || (Ie = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function zo(e, t, l) {
    var a = ge, n = Je(), u = Te;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var s = !Dt(
      (Re || n).memoizedState,
      l
    );
    if (s && (n.memoizedState = l, Ie = !0), n = n.queue, Lc(Do.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || s || We !== null && We.memoizedState.tag & 1) {
      if (a.flags |= 2048, Pa(
        9,
        { destroy: void 0 },
        Co.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), Le === null) throw Error(f(349));
      u || (gl & 127) !== 0 || wo(a, t, l);
    }
    return l;
  }
  function wo(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ge.updateQueue, t === null ? (t = Xu(), ge.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Co(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Mo(t) && Oo(e);
  }
  function Do(e, t, l) {
    return l(function() {
      Mo(t) && Oo(e);
    });
  }
  function Mo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Dt(e, l);
    } catch {
      return !0;
    }
  }
  function Oo(e) {
    var t = ra(e, 2);
    t !== null && At(t, e, 2);
  }
  function Bc(e) {
    var t = pt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), pa) {
        xt(!0);
        try {
          l();
        } finally {
          xt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pl,
      lastRenderedState: e
    }, t;
  }
  function Uo(e, t, l, a) {
    return e.baseState = l, Rc(
      e,
      Re,
      typeof a == "function" ? a : pl
    );
  }
  function Gh(e, t, l, a, n) {
    if ($u(e)) throw Error(f(485));
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
      b.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Ro(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Ro(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = b.T, s = {};
      b.T = s;
      try {
        var r = l(n, a), h = b.S;
        h !== null && h(s, r), qo(e, t, r);
      } catch (E) {
        Hc(e, t, E);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), b.T = u;
      }
    } else
      try {
        u = l(n, a), qo(e, t, u);
      } catch (E) {
        Hc(e, t, E);
      }
  }
  function qo(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Bo(e, t, a);
      },
      function(a) {
        return Hc(e, t, a);
      }
    ) : Bo(e, t, l);
  }
  function Bo(e, t, l) {
    t.status = "fulfilled", t.value = l, Ho(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Ro(e, l)));
  }
  function Hc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Ho(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Ho(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Lo(e, t) {
    return t;
  }
  function Yo(e, t) {
    if (Te) {
      var l = Le.formState;
      if (l !== null) {
        e: {
          var a = ge;
          if (Te) {
            if (Ye) {
              t: {
                for (var n = Ye, u = Qt; n.nodeType !== 8; ) {
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
                Ye = Kt(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            Rl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = pt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lo,
      lastRenderedState: t
    }, l.queue = a, l = uf.bind(
      null,
      ge,
      a
    ), a.dispatch = l, a = Bc(!1), u = Xc.bind(
      null,
      ge,
      !1,
      a.queue
    ), a = pt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = Gh.bind(
      null,
      ge,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function ko(e) {
    var t = Je();
    return Go(t, Re, e);
  }
  function Go(e, t, l) {
    if (t = Rc(
      e,
      t,
      Lo
    )[0], e = Zu(pl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Gn(t);
      } catch (s) {
        throw s === Ja ? qu : s;
      }
    else a = t;
    t = Je();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ge.flags |= 2048, Pa(
      9,
      { destroy: void 0 },
      Vh.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function Vh(e, t) {
    e.action = t;
  }
  function Vo(e) {
    var t = Je(), l = Re;
    if (l !== null)
      return Go(t, l, e);
    Je(), t = t.memoizedState, l = Je();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Pa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ge.updateQueue, t === null && (t = Xu(), ge.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Xo() {
    return Je().memoizedState;
  }
  function Ku(e, t, l, a) {
    var n = pt();
    ge.flags |= e, n.memoizedState = Pa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ju(e, t, l, a) {
    var n = Je();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Re !== null && a !== null && wc(a, Re.memoizedState.deps) ? n.memoizedState = Pa(t, u, l, a) : (ge.flags |= e, n.memoizedState = Pa(
      1 | t,
      u,
      l,
      a
    ));
  }
  function Qo(e, t) {
    Ku(8390656, 8, e, t);
  }
  function Lc(e, t) {
    Ju(2048, 8, e, t);
  }
  function Xh(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null)
      t = Xu(), ge.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Zo(e) {
    var t = Je().memoizedState;
    return Xh({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ko(e, t) {
    return Ju(4, 2, e, t);
  }
  function Jo(e, t) {
    return Ju(4, 4, e, t);
  }
  function $o(e, t) {
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
  function Fo(e, t, l) {
    l = l != null ? l.concat([e]) : null, Ju(4, 4, $o.bind(null, t, e), l);
  }
  function Yc() {
  }
  function Wo(e, t) {
    var l = Je();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && wc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Io(e, t) {
    var l = Je();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && wc(t, a[1]))
      return a[0];
    if (a = e(), pa) {
      xt(!0);
      try {
        e();
      } finally {
        xt(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function kc(e, t, l) {
    return l === void 0 || (gl & 1073741824) !== 0 && (_e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = ed(), ge.lanes |= e, Xl |= e, l);
  }
  function Po(e, t, l, a) {
    return Dt(l, t) ? l : Fa.current !== null ? (e = kc(e, l, a), Dt(e, t) || (Ie = !0), e) : (gl & 42) === 0 || (gl & 1073741824) !== 0 && (_e & 261930) === 0 ? (Ie = !0, e.memoizedState = l) : (e = ed(), ge.lanes |= e, Xl |= e, t);
  }
  function ef(e, t, l, a, n) {
    var u = d.p;
    d.p = u !== 0 && 8 > u ? u : 8;
    var s = b.T, r = {};
    b.T = r, Xc(e, !1, t, l);
    try {
      var h = n(), E = b.S;
      if (E !== null && E(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var D = Lh(
          h,
          a
        );
        Vn(
          e,
          t,
          D,
          Bt(e)
        );
      } else
        Vn(
          e,
          t,
          a,
          Bt(e)
        );
    } catch (q) {
      Vn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: q },
        Bt()
      );
    } finally {
      d.p = u, s !== null && r.types !== null && (s.types = r.types), b.T = s;
    }
  }
  function Qh() {
  }
  function Gc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = tf(e).queue;
    ef(
      e,
      n,
      t,
      G,
      l === null ? Qh : function() {
        return lf(e), l(a);
      }
    );
  }
  function tf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pl,
        lastRenderedState: G
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
        lastRenderedReducer: pl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function lf(e) {
    var t = tf(e);
    t.next === null && (t = e.alternate.memoizedState), Vn(
      e,
      t.next.queue,
      {},
      Bt()
    );
  }
  function Vc() {
    return ft(iu);
  }
  function af() {
    return Je().memoizedState;
  }
  function nf() {
    return Je().memoizedState;
  }
  function Zh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Bt();
          e = Hl(l);
          var a = Ll(t, e, l);
          a !== null && (At(a, t, l), Hn(a, t, l)), t = { cache: pc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Kh(e, t, l) {
    var a = Bt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e) ? cf(t, l) : (l = cc(e, t, l, a), l !== null && (At(l, e, a), sf(l, t, a)));
  }
  function uf(e, t, l) {
    var a = Bt();
    Vn(e, t, l, a);
  }
  function Vn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($u(e)) cf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, r = u(s, l);
          if (n.hasEagerState = !0, n.eagerState = r, Dt(r, s))
            return wu(e, t, n, 0), Le === null && zu(), !1;
        } catch {
        }
      if (l = cc(e, t, n, a), l !== null)
        return At(l, e, a), sf(l, t, a), !0;
    }
    return !1;
  }
  function Xc(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Ss(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e)) {
      if (t) throw Error(f(479));
    } else
      t = cc(
        e,
        l,
        a,
        2
      ), t !== null && At(t, e, 2);
  }
  function $u(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function cf(e, t) {
    Wa = Gu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function sf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, al(e, l);
    }
  }
  var Xn = {
    readContext: ft,
    use: Qu,
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
  Xn.useEffectEvent = Xe;
  var rf = {
    readContext: ft,
    use: Qu,
    useCallback: function(e, t) {
      return pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: Qo,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Ku(
        4194308,
        4,
        $o.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Ku(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ku(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = pt();
      t = t === void 0 ? null : t;
      var a = e();
      if (pa) {
        xt(!0);
        try {
          e();
        } finally {
          xt(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = pt();
      if (l !== void 0) {
        var n = l(t);
        if (pa) {
          xt(!0);
          try {
            l(t);
          } finally {
            xt(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = Kh.bind(
        null,
        ge,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = pt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Bc(e);
      var t = e.queue, l = uf.bind(null, ge, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = pt();
      return kc(l, e, t);
    },
    useTransition: function() {
      var e = Bc(!1);
      return e = ef.bind(
        null,
        ge,
        e.queue,
        !0,
        !1
      ), pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ge, n = pt();
      if (Te) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = t(), Le === null)
          throw Error(f(349));
        (_e & 127) !== 0 || wo(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, Qo(Do.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Pa(
        9,
        { destroy: void 0 },
        Co.bind(
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
      var e = pt(), t = Le.identifierPrefix;
      if (Te) {
        var l = ul, a = nl;
        l = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Vu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Yh++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Vc,
    useFormState: Yo,
    useActionState: Yo,
    useOptimistic: function(e) {
      var t = pt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Xc.bind(
        null,
        ge,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Uc,
    useCacheRefresh: function() {
      return pt().memoizedState = Zh.bind(
        null,
        ge
      );
    },
    useEffectEvent: function(e) {
      var t = pt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((De & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Qc = {
    readContext: ft,
    use: Qu,
    useCallback: Wo,
    useContext: ft,
    useEffect: Lc,
    useImperativeHandle: Fo,
    useInsertionEffect: Ko,
    useLayoutEffect: Jo,
    useMemo: Io,
    useReducer: Zu,
    useRef: Xo,
    useState: function() {
      return Zu(pl);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = Je();
      return Po(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Zu(pl)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Gn(e),
        t
      ];
    },
    useSyncExternalStore: zo,
    useId: af,
    useHostTransitionStatus: Vc,
    useFormState: ko,
    useActionState: ko,
    useOptimistic: function(e, t) {
      var l = Je();
      return Uo(l, Re, e, t);
    },
    useMemoCache: Uc,
    useCacheRefresh: nf
  };
  Qc.useEffectEvent = Zo;
  var of = {
    readContext: ft,
    use: Qu,
    useCallback: Wo,
    useContext: ft,
    useEffect: Lc,
    useImperativeHandle: Fo,
    useInsertionEffect: Ko,
    useLayoutEffect: Jo,
    useMemo: Io,
    useReducer: qc,
    useRef: Xo,
    useState: function() {
      return qc(pl);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = Je();
      return Re === null ? kc(l, e, t) : Po(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qc(pl)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Gn(e),
        t
      ];
    },
    useSyncExternalStore: zo,
    useId: af,
    useHostTransitionStatus: Vc,
    useFormState: Vo,
    useActionState: Vo,
    useOptimistic: function(e, t) {
      var l = Je();
      return Re !== null ? Uo(l, Re, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: nf
  };
  of.useEffectEvent = Zo;
  function Zc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : N({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Kc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Bt(), n = Hl(a);
      n.payload = t, l != null && (n.callback = l), t = Ll(e, n, a), t !== null && (At(t, e, a), Hn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Bt(), n = Hl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Ll(e, n, a), t !== null && (At(t, e, a), Hn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Bt(), a = Hl(l);
      a.tag = 2, t != null && (a.callback = t), t = Ll(e, a, l), t !== null && (At(t, e, l), Hn(t, e, l));
    }
  };
  function ff(e, t, l, a, n, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, s) : t.prototype && t.prototype.isPureReactComponent ? !Cn(l, a) || !Cn(n, u) : !0;
  }
  function df(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Kc.enqueueReplaceState(t, t.state, null);
  }
  function ba(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = N({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function mf(e) {
    Au(e);
  }
  function hf(e) {
    console.error(e);
  }
  function yf(e) {
    Au(e);
  }
  function Fu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function vf(e, t, l) {
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
  function Jc(e, t, l) {
    return l = Hl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Fu(e, t);
    }, l;
  }
  function gf(e) {
    return e = Hl(e), e.tag = 3, e;
  }
  function pf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        vf(t, l, a);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      vf(t, l, a), typeof n != "function" && (Ql === null ? Ql = /* @__PURE__ */ new Set([this]) : Ql.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function Jh(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Qa(
        t,
        l,
        n,
        !0
      ), l = Ot.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Zt === null ? si() : l.alternate === null && Qe === 0 && (Qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Bu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), bs(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Bu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), bs(e, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return bs(e, a, n), si(), !1;
    }
    if (Te)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== mc && (e = Error(f(422), { cause: a }), On(Gt(e, l)))) : (a !== mc && (t = Error(f(423), {
        cause: a
      }), On(
        Gt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Gt(a, l), n = Jc(
        e.stateNode,
        a,
        n
      ), _c(e, n), Qe !== 4 && (Qe = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = Gt(u, l), In === null ? In = [u] : In.push(u), Qe !== 4 && (Qe = 2), t === null) return !0;
    a = Gt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Jc(l.stateNode, a, e), _c(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ql === null || !Ql.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = gf(n), pf(
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
  var $c = Error(f(461)), Ie = !1;
  function dt(e, t, l, a) {
    t.child = e === null ? jo(t, null, l, a) : ga(
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
    return ma(t), a = Cc(
      e,
      t,
      l,
      s,
      u,
      n
    ), r = Dc(), e !== null && !Ie ? (Mc(e, t, n), bl(e, t, n)) : (Te && r && fc(t), t.flags |= 1, dt(e, t, a, n), t.child);
  }
  function xf(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !sc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, jf(
        e,
        t,
        u,
        a,
        n
      )) : (e = Du(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !as(e, n)) {
      var s = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Cn, l(s, a) && e.ref === t.ref)
        return bl(e, t, n);
    }
    return t.flags |= 1, e = ml(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function jf(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cn(u, a) && e.ref === t.ref)
        if (Ie = !1, t.pendingProps = a = u, as(e, n))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else
          return t.lanes = e.lanes, bl(e, t, n);
    }
    return Fc(
      e,
      t,
      l,
      a,
      n
    );
  }
  function Sf(e, t, l, a) {
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ru(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? _o(t, u) : Tc(), No(t);
      else
        return a = t.lanes = 536870912, Ef(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (Ru(t, u.cachePool), _o(t, u), kl(), t.memoizedState = null) : (e !== null && Ru(t, null), Tc(), kl());
    return dt(e, t, n, l), t.child;
  }
  function Qn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ef(e, t, l, a, n) {
    var u = xc();
    return u = u === null ? null : { parent: Fe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && Ru(t, null), Tc(), No(t), e !== null && Qa(e, t, a, !0), t.childLanes = n, null;
  }
  function Wu(e, t) {
    return t = Pu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _f(e, t, l) {
    return ga(t, e.child, null, l), e = Wu(t, t.pendingProps), e.flags |= 2, Ut(t), t.memoizedState = null, e;
  }
  function $h(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (a.mode === "hidden")
          return e = Wu(t, a), t.lanes = 536870912, Qn(null, e);
        if (zc(t), (e = Ye) ? (e = qd(
          e,
          Qt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ol !== null ? { id: nl, overflow: ul } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uo(e), l.return = t, t.child = l, ot = t, Ye = null)) : e = null, e === null) throw Rl(t);
        return t.lanes = 536870912, null;
      }
      return Wu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (zc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = _f(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Ie || Qa(e, t, l, !1), n = (l & e.childLanes) !== 0, Ie || n) {
        if (a = Le, a !== null && (s = dr(a, l), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, ra(e, s), At(a, e, s), $c;
        si(), t = _f(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Ye = Kt(s.nextSibling), ot = t, Te = !0, Ul = null, Qt = !1, e !== null && so(t, e), t = Wu(t, a), t.flags |= 4096;
      return t;
    }
    return e = ml(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Iu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Fc(e, t, l, a, n) {
    return ma(t), l = Cc(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Dc(), e !== null && !Ie ? (Mc(e, t, n), bl(e, t, n)) : (Te && a && fc(t), t.flags |= 1, dt(e, t, l, n), t.child);
  }
  function Nf(e, t, l, a, n, u) {
    return ma(t), t.updateQueue = null, l = Ao(
      t,
      a,
      l,
      n
    ), To(e), a = Dc(), e !== null && !Ie ? (Mc(e, t, u), bl(e, t, u)) : (Te && a && fc(t), t.flags |= 1, dt(e, t, l, u), t.child);
  }
  function Tf(e, t, l, a, n) {
    if (ma(t), t.stateNode === null) {
      var u = ka, s = l.contextType;
      typeof s == "object" && s !== null && (u = ft(s)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Kc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Sc(t), s = l.contextType, u.context = typeof s == "object" && s !== null ? ft(s) : ka, u.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Zc(
        t,
        l,
        s,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Kc.enqueueReplaceState(u, u.state, null), Yn(t, a, u, n), Ln(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, h = ba(l, r);
      u.props = h;
      var E = u.context, D = l.contextType;
      s = ka, typeof D == "object" && D !== null && (s = ft(D));
      var q = l.getDerivedStateFromProps;
      D = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || E !== s) && df(
        t,
        u,
        a,
        s
      ), Bl = !1;
      var T = t.memoizedState;
      u.state = T, Yn(t, a, u, n), Ln(), E = t.memoizedState, r || T !== E || Bl ? (typeof q == "function" && (Zc(
        t,
        l,
        q,
        a
      ), E = t.memoizedState), (h = Bl || ff(
        t,
        l,
        h,
        a,
        T,
        E,
        s
      )) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), u.props = a, u.state = E, u.context = s, a = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Ec(e, t), s = t.memoizedProps, D = ba(l, s), u.props = D, q = t.pendingProps, T = u.context, E = l.contextType, h = ka, typeof E == "object" && E !== null && (h = ft(E)), r = l.getDerivedStateFromProps, (E = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== q || T !== h) && df(
        t,
        u,
        a,
        h
      ), Bl = !1, T = t.memoizedState, u.state = T, Yn(t, a, u, n), Ln();
      var z = t.memoizedState;
      s !== q || T !== z || Bl || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof r == "function" && (Zc(
        t,
        l,
        r,
        a
      ), z = t.memoizedState), (D = Bl || ff(
        t,
        l,
        D,
        a,
        T,
        z,
        h
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (E || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        z,
        h
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = h, a = D) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Iu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ga(
      t,
      e.child,
      null,
      n
    ), t.child = ga(
      t,
      null,
      l,
      n
    )) : dt(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = bl(
      e,
      t,
      n
    ), e;
  }
  function Af(e, t, l, a) {
    return fa(), t.flags |= 256, dt(e, t, l, a), t.child;
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
  function Pc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= qt), e;
  }
  function zf(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (Ke.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (n ? Yl(t) : kl(), (e = Ye) ? (e = qd(
          e,
          Qt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ol !== null ? { id: nl, overflow: ul } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uo(e), l.return = t, t.child = l, ot = t, Ye = null)) : e = null, e === null) throw Rl(t);
        return Rs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, n ? (kl(), n = t.mode, r = Pu(
        { mode: "hidden", children: r },
        n
      ), a = oa(
        a,
        n,
        l,
        null
      ), r.return = t, a.return = t, r.sibling = a, t.child = r, a = t.child, a.memoizedState = Ic(l), a.childLanes = Pc(
        e,
        s,
        l
      ), t.memoizedState = Wc, Qn(null, a)) : (Yl(t), es(t, r));
    }
    var h = e.memoizedState;
    if (h !== null && (r = h.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Yl(t), t.flags &= -257, t = ts(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (kl(), t.child = e.child, t.flags |= 128, t = null) : (kl(), r = a.fallback, n = t.mode, a = Pu(
          { mode: "visible", children: a.children },
          n
        ), r = oa(
          r,
          n,
          l,
          null
        ), r.flags |= 2, a.return = t, r.return = t, a.sibling = r, t.child = a, ga(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Ic(l), a.childLanes = Pc(
          e,
          s,
          l
        ), t.memoizedState = Wc, t = Qn(null, a));
      else if (Yl(t), Rs(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var E = s.dgst;
        s = E, a = Error(f(419)), a.stack = "", a.digest = s, On({ value: a, source: null, stack: null }), t = ts(
          e,
          t,
          l
        );
      } else if (Ie || Qa(e, t, l, !1), s = (l & e.childLanes) !== 0, Ie || s) {
        if (s = Le, s !== null && (a = dr(s, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, ra(e, a), At(s, e, a), $c;
        Us(r) || si(), t = ts(
          e,
          t,
          l
        );
      } else
        Us(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Ye = Kt(
          r.nextSibling
        ), ot = t, Te = !0, Ul = null, Qt = !1, e !== null && so(t, e), t = es(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (kl(), r = a.fallback, n = t.mode, h = e.child, E = h.sibling, a = ml(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, E !== null ? r = ml(
      E,
      r
    ) : (r = oa(
      r,
      n,
      l,
      null
    ), r.flags |= 2), r.return = t, a.return = t, a.sibling = r, t.child = a, Qn(null, a), a = t.child, r = e.child.memoizedState, r === null ? r = Ic(l) : (n = r.cachePool, n !== null ? (h = Fe._currentValue, n = n.parent !== h ? { parent: h, pool: h } : n) : n = yo(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: n
    }), a.memoizedState = r, a.childLanes = Pc(
      e,
      s,
      l
    ), t.memoizedState = Wc, Qn(e.child, a)) : (Yl(t), l = e.child, e = l.sibling, l = ml(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function es(e, t) {
    return t = Pu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Pu(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e;
  }
  function ts(e, t, l) {
    return ga(t, e.child, null, l), e = es(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), vc(e.return, t, l);
  }
  function ls(e, t, l, a, n, u) {
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
  function Cf(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var s = Ke.current, r = (s & 2) !== 0;
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, X(Ke, s), dt(e, t, a, l), a = Te ? Mn : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && wf(e, l, t);
        else if (e.tag === 19)
          wf(e, l, t);
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
          e = l.alternate, e !== null && ku(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), ls(
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
          if (e = n.alternate, e !== null && ku(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        ls(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        ls(
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
  function bl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Xl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Qa(
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
      for (e = t.child, l = ml(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = ml(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function as(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function Fh(e, t, l) {
    switch (t.tag) {
      case 3:
        k(t, t.stateNode.containerInfo), ql(t, Fe, e.memoizedState.cache), fa();
        break;
      case 27:
      case 5:
        oe(t);
        break;
      case 4:
        k(t, t.stateNode.containerInfo);
        break;
      case 10:
        ql(
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
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Yl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? zf(e, t, l) : (Yl(t), e = bl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Yl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Qa(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return Cf(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), X(Ke, Ke.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Sf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        ql(t, Fe, e.memoizedState.cache);
    }
    return bl(e, t, l);
  }
  function Df(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ie = !0;
      else {
        if (!as(e, l) && (t.flags & 128) === 0)
          return Ie = !1, Fh(
            e,
            t,
            l
          );
        Ie = (e.flags & 131072) !== 0;
      }
    else
      Ie = !1, Te && (t.flags & 1048576) !== 0 && co(t, Mn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ya(t.elementType), t.type = e, typeof e == "function")
            sc(e) ? (a = ba(e, a), t.tag = 1, t = Tf(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Fc(
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
                t.tag = 14, t = xf(
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
        return Fc(
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
        ), Tf(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (k(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Ec(e, t), Yn(t, a, null, l);
          var s = t.memoizedState;
          if (a = s.cache, ql(t, Fe, a), a !== u.cache && gc(
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
              t = Af(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Gt(
                Error(f(424)),
                t
              ), On(n), t = Af(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ye = Kt(e.firstChild), ot = t, Te = !0, Ul = null, Qt = !0, l = jo(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (fa(), a === n) {
              t = bl(
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
        return Iu(e, t), e === null ? (l = Gd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : Te || (l = t.type, e = t.pendingProps, a = yi(
          re.current
        ).createElement(l), a[rt] = t, a[jt] = e, mt(a, l, e), it(a), t.stateNode = a) : t.memoizedState = Gd(
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
        ), ot = t, Qt = !0, n = Ye, $l(t.type) ? (qs = n, Ye = Kt(a.firstChild)) : Ye = n), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Iu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((n = a = Ye) && (a = Ty(
          a,
          t.type,
          t.pendingProps,
          Qt
        ), a !== null ? (t.stateNode = a, ot = t, Ye = Kt(a.firstChild), Qt = !1, n = !0) : n = !1), n || Rl(t)), oe(t), n = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = u.children, Ds(n, u) ? a = null : s !== null && Ds(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Cc(
          e,
          t,
          kh,
          null,
          null,
          l
        ), iu._currentValue = n), Iu(e, t), dt(e, t, a, l), t.child;
      case 6:
        return e === null && Te && ((e = l = Ye) && (l = Ay(
          l,
          t.pendingProps,
          Qt
        ), l !== null ? (t.stateNode = l, ot = t, Ye = null, e = !0) : e = !1), e || Rl(t)), null;
      case 13:
        return zf(e, t, l);
      case 4:
        return k(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ga(
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
        return a = t.pendingProps, ql(t, t.type, a.value), dt(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, ma(t), n = ft(n), a = a(n), t.flags |= 1, dt(e, t, a, l), t.child;
      case 14:
        return xf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return jf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Cf(e, t, l);
      case 31:
        return $h(e, t, l);
      case 22:
        return Sf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return ma(t), a = ft(Fe), e === null ? (n = xc(), n === null && (n = Le, u = pc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Sc(t), ql(t, Fe, n)) : ((e.lanes & l) !== 0 && (Ec(e, t), Yn(t, null, null, l), Ln()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ql(t, Fe, a)) : (a = u.cache, ql(t, Fe, a), a !== n.cache && gc(
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
  function xl(e) {
    e.flags |= 4;
  }
  function ns(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (nd()) e.flags |= 8192;
        else
          throw va = Bu, jc;
    } else e.flags &= -16777217;
  }
  function Mf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Kd(t))
      if (nd()) e.flags |= 8192;
      else
        throw va = Bu, jc;
  }
  function ei(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? He() : 536870912, e.lanes |= t, an |= t);
  }
  function Zn(e, t) {
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
  function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Wh(e, t, l) {
    var a = t.pendingProps;
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
        return ke(t), null;
      case 1:
        return ke(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vl(Fe), ue(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Xa(t) ? xl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hc())), ke(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (xl(t), u !== null ? (ke(t), Mf(t, u)) : (ke(t), ns(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (xl(t), ke(t), Mf(t, u)) : (ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && xl(t), ke(t), ns(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (K(t), l = re.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && xl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return ke(t), null;
          }
          e = Q.current, Xa(t) ? ro(t) : (e = Ld(n, a, l), t.stateNode = e, xl(t));
        }
        return ke(t), null;
      case 5:
        if (K(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && xl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return ke(t), null;
          }
          if (u = Q.current, Xa(t))
            ro(t);
          else {
            var s = yi(
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
            u[rt] = t, u[jt] = a;
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
            a && xl(t);
          }
        }
        return ke(t), ns(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && xl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = re.current, Xa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = ot, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[rt] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || zd(e.nodeValue, l)), e || Rl(t, !0);
          } else
            e = yi(e).createTextNode(
              a
            ), e[rt] = t, t.stateNode = e;
        }
        return ke(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Xa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[rt] = t;
            } else
              fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ke(t), e = !1;
          } else
            l = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return ke(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Xa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[rt] = t;
            } else
              fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ke(t), n = !1;
          } else
            n = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
        }
        return Ut(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), ei(t, t.updateQueue), ke(t), null);
      case 4:
        return ue(), e === null && Ts(t.stateNode.containerInfo), ke(t), null;
      case 10:
        return vl(t.type), ke(t), null;
      case 19:
        if (C(Ke), a = t.memoizedState, a === null) return ke(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Zn(a, !1);
          else {
            if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = ku(e), u !== null) {
                  for (t.flags |= 128, Zn(a, !1), e = u.updateQueue, t.updateQueue = e, ei(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    no(l, e), l = l.sibling;
                  return X(
                    Ke,
                    Ke.current & 1 | 2
                  ), Te && hl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ze() > ui && (t.flags |= 128, n = !0, Zn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = ku(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, ei(t, e), Zn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Te)
                return ke(t), null;
            } else
              2 * Ze() - a.renderingStartTime > ui && l !== 536870912 && (t.flags |= 128, n = !0, Zn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ze(), e.sibling = null, l = Ke.current, X(
          Ke,
          n ? l & 1 | 2 : l & 1
        ), Te && hl(t, a.treeForkCount), e) : (ke(t), null);
      case 22:
      case 23:
        return Ut(t), Ac(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), l = t.updateQueue, l !== null && ei(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && C(ha), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), vl(Fe), ke(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Ih(e, t) {
    switch (dc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return vl(Fe), ue(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return K(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ut(t), t.alternate === null)
            throw Error(f(340));
          fa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ut(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          fa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return C(Ke), null;
      case 4:
        return ue(), null;
      case 10:
        return vl(t.type), null;
      case 22:
      case 23:
        return Ut(t), Ac(), e !== null && C(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return vl(Fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Of(e, t) {
    switch (dc(t), t.tag) {
      case 3:
        vl(Fe), ue();
        break;
      case 26:
      case 27:
      case 5:
        K(t);
        break;
      case 4:
        ue();
        break;
      case 31:
        t.memoizedState !== null && Ut(t);
        break;
      case 13:
        Ut(t);
        break;
      case 19:
        C(Ke);
        break;
      case 10:
        vl(t.type);
        break;
      case 22:
      case 23:
        Ut(t), Ac(), e !== null && C(ha);
        break;
      case 24:
        vl(Fe);
    }
  }
  function Kn(e, t) {
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
  function Gl(e, t, l) {
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
              var h = l, E = r;
              try {
                E();
              } catch (D) {
                Oe(
                  n,
                  h,
                  D
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (D) {
      Oe(t, t.return, D);
    }
  }
  function Uf(e) {
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
  function Rf(e, t, l) {
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
  function Jn(e, t) {
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
  function il(e, t) {
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
  function qf(e) {
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
      xy(a, e.type, l, t), a[jt] = t;
    } catch (n) {
      Oe(e, e.return, n);
    }
  }
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && $l(e.type) || e.tag === 4;
  }
  function is(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && $l(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cs(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = fl));
    else if (a !== 4 && (a === 27 && $l(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (cs(e, t, l), e = e.sibling; e !== null; )
        cs(e, t, l), e = e.sibling;
  }
  function ti(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && $l(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (ti(e, t, l), e = e.sibling; e !== null; )
        ti(e, t, l), e = e.sibling;
  }
  function Hf(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      mt(t, a, l), t[rt] = e, t[jt] = l;
    } catch (u) {
      Oe(e, e.return, u);
    }
  }
  var jl = !1, Pe = !1, ss = !1, Lf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function Ph(e, t) {
    if (e = e.containerInfo, ws = Si, e = $r(e), tc(e)) {
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
            var s = 0, r = -1, h = -1, E = 0, D = 0, q = e, T = null;
            t: for (; ; ) {
              for (var z; q !== l || n !== 0 && q.nodeType !== 3 || (r = s + n), q !== u || a !== 0 && q.nodeType !== 3 || (h = s + a), q.nodeType === 3 && (s += q.nodeValue.length), (z = q.firstChild) !== null; )
                T = q, q = z;
              for (; ; ) {
                if (q === e) break t;
                if (T === l && ++E === n && (r = s), T === u && ++D === a && (h = s), (z = q.nextSibling) !== null) break;
                q = T, T = q.parentNode;
              }
              q = z;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Cs = { focusedElem: e, selectionRange: l }, Si = !1, ct = t; ct !== null; )
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
                } catch (ie) {
                  Oe(
                    l,
                    l.return,
                    ie
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Os(e);
                else if (l === 1)
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
        El(e, l), a & 4 && Kn(5, l);
        break;
      case 1:
        if (El(e, l), a & 4)
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
        a & 64 && Uf(l), a & 512 && Jn(l, l.return);
        break;
      case 3:
        if (El(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
        t === null && a & 4 && Hf(l);
      case 26:
      case 5:
        El(e, l), t === null && a & 4 && qf(l), a & 512 && Jn(l, l.return);
        break;
      case 12:
        El(e, l);
        break;
      case 31:
        El(e, l), a & 4 && Vf(e, l);
        break;
      case 13:
        El(e, l), a & 4 && Xf(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = sy.bind(
          null,
          l
        ), zy(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || jl, !a) {
          t = t !== null && t.memoizedState !== null || Pe, n = jl;
          var u = Pe;
          jl = a, (Pe = t) && !u ? _l(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : El(e, l), jl = n, Pe = u;
        }
        break;
      case 30:
        break;
      default:
        El(e, l);
    }
  }
  function kf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Hi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, Et = !1;
  function Sl(e, t, l) {
    for (l = l.child; l !== null; )
      Gf(e, t, l), l = l.sibling;
  }
  function Gf(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(na, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Pe || il(l, t), Sl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Pe || il(l, t);
        var a = Ge, n = Et;
        $l(l.type) && (Ge = l.stateNode, Et = !1), Sl(
          e,
          t,
          l
        ), au(l.stateNode), Ge = a, Et = n;
        break;
      case 5:
        Pe || il(l, t);
      case 6:
        if (a = Ge, n = Et, Ge = null, Sl(
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
        Ge !== null && (Et ? (e = Ge, Ud(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), dn(e)) : Ud(Ge, l.stateNode));
        break;
      case 4:
        a = Ge, n = Et, Ge = l.stateNode.containerInfo, Et = !0, Sl(
          e,
          t,
          l
        ), Ge = a, Et = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gl(2, l, t), Pe || Gl(4, l, t), Sl(
          e,
          t,
          l
        );
        break;
      case 1:
        Pe || (il(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Rf(
          l,
          t,
          a
        )), Sl(
          e,
          t,
          l
        );
        break;
      case 21:
        Sl(
          e,
          t,
          l
        );
        break;
      case 22:
        Pe = (a = Pe) || l.memoizedState !== null, Sl(
          e,
          t,
          l
        ), Pe = a;
        break;
      default:
        Sl(
          e,
          t,
          l
        );
    }
  }
  function Vf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        dn(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
    }
  }
  function Xf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        dn(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
  }
  function ey(e) {
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
  function li(e, t) {
    var l = ey(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = ry.bind(null, e, a);
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
              if ($l(r.type)) {
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
        Gf(u, s, n), Ge = null, Et = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Qf(t, e), t = t.sibling;
  }
  var It = null;
  function Qf(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _t(t, e), Nt(e), a & 4 && (Gl(3, e, e.return), Kn(3, e), Gl(5, e, e.return));
        break;
      case 1:
        _t(t, e), Nt(e), a & 512 && (Pe || l === null || il(l, l.return)), a & 64 && jl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = It;
        if (_t(t, e), Nt(e), a & 512 && (Pe || l === null || il(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[jn] || u[rt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), mt(u, a, l), u[rt] = e, it(u), a = u;
                      break e;
                    case "link":
                      var s = Qd(
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
                      if (s = Qd(
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
                  u[rt] = e, it(u), a = u;
                }
                e.stateNode = a;
              } else
                Zd(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Xd(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Zd(
              n,
              e.type,
              e.stateNode
            ) : Xd(
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
        _t(t, e), Nt(e), a & 512 && (Pe || l === null || il(l, l.return)), l !== null && a & 4 && us(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (_t(t, e), Nt(e), a & 512 && (Pe || l === null || il(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Ua(n, "");
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, us(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (ss = !0);
        break;
      case 6:
        if (_t(t, e), Nt(e), a & 4) {
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
        if (pi = null, n = It, It = vi(t.containerInfo), _t(t, e), It = n, Nt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            dn(t.containerInfo);
          } catch ($) {
            Oe(e, e.return, $);
          }
        ss && (ss = !1, Zf(e));
        break;
      case 4:
        a = It, It = vi(
          e.stateNode.containerInfo
        ), _t(t, e), Nt(e), It = a;
        break;
      case 12:
        _t(t, e), Nt(e);
        break;
      case 31:
        _t(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, li(e, a)));
        break;
      case 13:
        _t(t, e), Nt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ni = Ze()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, li(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, E = jl, D = Pe;
        if (jl = E || n, Pe = D || h, _t(t, e), Pe = D, jl = E, Nt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || h || jl || Pe || xa(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (u = h.stateNode, n)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    r = h.stateNode;
                    var q = h.memoizedProps.style, T = q != null && q.hasOwnProperty("display") ? q.display : null;
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
                  n ? Rd(z, !0) : Rd(h.stateNode, !1);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, li(e, l))));
        break;
      case 19:
        _t(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, li(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        _t(t, e), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Bf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = is(e);
            ti(e, u, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (Ua(s, ""), l.flags &= -33);
            var r = is(e);
            ti(e, r, s);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, E = is(e);
            cs(
              e,
              E,
              h
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        Oe(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Zf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function El(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Yf(e, t.alternate, t), t = t.sibling;
  }
  function xa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Gl(4, t, t.return), xa(t);
          break;
        case 1:
          il(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Rf(
            t,
            t.return,
            l
          ), xa(t);
          break;
        case 27:
          au(t.stateNode);
        case 26:
        case 5:
          il(t, t.return), xa(t);
          break;
        case 22:
          t.memoizedState === null && xa(t);
          break;
        case 30:
          xa(t);
          break;
        default:
          xa(t);
      }
      e = e.sibling;
    }
  }
  function _l(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          _l(
            n,
            u,
            l
          ), Kn(4, u);
          break;
        case 1:
          if (_l(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (E) {
              Oe(a, a.return, E);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var r = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  So(h[n], r);
            } catch (E) {
              Oe(a, a.return, E);
            }
          }
          l && s & 64 && Uf(u), Jn(u, u.return);
          break;
        case 27:
          Hf(u);
        case 26:
        case 5:
          _l(
            n,
            u,
            l
          ), l && a === null && s & 4 && qf(u), Jn(u, u.return);
          break;
        case 12:
          _l(
            n,
            u,
            l
          );
          break;
        case 31:
          _l(
            n,
            u,
            l
          ), l && s & 4 && Vf(n, u);
          break;
        case 13:
          _l(
            n,
            u,
            l
          ), l && s & 4 && Xf(n, u);
          break;
        case 22:
          u.memoizedState === null && _l(
            n,
            u,
            l
          ), Jn(u, u.return);
          break;
        case 30:
          break;
        default:
          _l(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function rs(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Un(l));
  }
  function os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Un(e));
  }
  function Pt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Kf(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Kf(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          e,
          t,
          l,
          a
        ), n & 2048 && Kn(9, t);
        break;
      case 1:
        Pt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Pt(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Un(e)));
        break;
      case 12:
        if (n & 2048) {
          Pt(
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
          Pt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Pt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Pt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Pt(
          e,
          t,
          l,
          a
        ) : $n(e, t) : u._visibility & 2 ? Pt(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, en(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && rs(s, t);
        break;
      case 24:
        Pt(
          e,
          t,
          l,
          a
        ), n & 2048 && os(t.alternate, t);
        break;
      default:
        Pt(
          e,
          t,
          l,
          a
        );
    }
  }
  function en(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, r = l, h = a, E = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          en(
            u,
            s,
            r,
            h,
            n
          ), Kn(8, s);
          break;
        case 23:
          break;
        case 22:
          var D = s.stateNode;
          s.memoizedState !== null ? D._visibility & 2 ? en(
            u,
            s,
            r,
            h,
            n
          ) : $n(
            u,
            s
          ) : (D._visibility |= 2, en(
            u,
            s,
            r,
            h,
            n
          )), n && E & 2048 && rs(
            s.alternate,
            s
          );
          break;
        case 24:
          en(
            u,
            s,
            r,
            h,
            n
          ), n && E & 2048 && os(s.alternate, s);
          break;
        default:
          en(
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
  function $n(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            $n(l, a), n & 2048 && rs(
              a.alternate,
              a
            );
            break;
          case 24:
            $n(l, a), n & 2048 && os(a.alternate, a);
            break;
          default:
            $n(l, a);
        }
        t = t.sibling;
      }
  }
  var Fn = 8192;
  function tn(e, t, l) {
    if (e.subtreeFlags & Fn)
      for (e = e.child; e !== null; )
        Jf(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Jf(e, t, l) {
    switch (e.tag) {
      case 26:
        tn(
          e,
          t,
          l
        ), e.flags & Fn && e.memoizedState !== null && Yy(
          l,
          It,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        tn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = It;
        It = vi(e.stateNode.containerInfo), tn(
          e,
          t,
          l
        ), It = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Fn, Fn = 16777216, tn(
          e,
          t,
          l
        ), Fn = a) : tn(
          e,
          t,
          l
        ));
        break;
      default:
        tn(
          e,
          t,
          l
        );
    }
  }
  function $f(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Wn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ct = a, Wf(
            a,
            e
          );
        }
      $f(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ff(e), e = e.sibling;
  }
  function Ff(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wn(e), e.flags & 2048 && Gl(9, e, e.return);
        break;
      case 3:
        Wn(e);
        break;
      case 12:
        Wn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ai(e)) : Wn(e);
        break;
      default:
        Wn(e);
    }
  }
  function ai(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ct = a, Wf(
            a,
            e
          );
        }
      $f(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Gl(8, t, t.return), ai(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ai(t));
          break;
        default:
          ai(t);
      }
      e = e.sibling;
    }
  }
  function Wf(e, t) {
    for (; ct !== null; ) {
      var l = ct;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Gl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Un(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, ct = a;
      else
        e: for (l = e; ct !== null; ) {
          a = ct;
          var n = a.sibling, u = a.return;
          if (kf(a), a === l) {
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
  var ty = {
    getCacheForType: function(e) {
      var t = ft(Fe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return ft(Fe).controller.signal;
    }
  }, ly = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Le = null, Se = null, _e = 0, Me = 0, Rt = null, Vl = !1, ln = !1, fs = !1, Nl = 0, Qe = 0, Xl = 0, ja = 0, ds = 0, qt = 0, an = 0, In = null, Tt = null, ms = !1, ni = 0, If = 0, ui = 1 / 0, ii = null, Ql = null, lt = 0, Zl = null, nn = null, Tl = 0, hs = 0, ys = null, Pf = null, Pn = 0, vs = null;
  function Bt() {
    return (De & 2) !== 0 && _e !== 0 ? _e & -_e : b.T !== null ? Ss() : mr();
  }
  function ed() {
    if (qt === 0)
      if ((_e & 536870912) === 0 || Te) {
        var e = Cl;
        Cl <<= 1, (Cl & 3932160) === 0 && (Cl = 262144), qt = e;
      } else qt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), qt;
  }
  function At(e, t, l) {
    (e === Le && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (un(e, 0), Kl(
      e,
      _e,
      qt,
      !1
    )), le(e, l), ((De & 2) === 0 || e !== Le) && (e === Le && ((De & 2) === 0 && (ja |= l), Qe === 4 && Kl(
      e,
      _e,
      qt,
      !1
    )), cl(e));
  }
  function td(e, t, l) {
    if ((De & 6) !== 0) throw Error(f(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ve(e, t), n = a ? uy(e, t) : ps(e, t, !0), u = a;
    do {
      if (n === 0) {
        ln && !a && Kl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !ay(l)) {
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
              n = In;
              var h = r.current.memoizedState.isDehydrated;
              if (h && (un(r, s).flags |= 256), s = ps(
                r,
                s,
                !1
              ), s !== 2) {
                if (fs && !h) {
                  r.errorRecoveryDisabledLanes |= u, ja |= u, n = 4;
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
          un(e, 0), Kl(e, t, 0, !0);
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
              Kl(
                a,
                t,
                qt,
                !Vl
              );
              break e;
            case 2:
              Tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (n = ni + 300 - Ze(), 10 < n)) {
            if (Kl(
              a,
              t,
              qt,
              !Vl
            ), Z(a, 0, !0) !== 0) break e;
            Tl = t, a.timeoutHandle = Md(
              ld.bind(
                null,
                a,
                l,
                Tt,
                ii,
                ms,
                t,
                qt,
                ja,
                an,
                Vl,
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
            a,
            l,
            Tt,
            ii,
            ms,
            t,
            qt,
            ja,
            an,
            Vl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    cl(e);
  }
  function ld(e, t, l, a, n, u, s, r, h, E, D, q, T, z) {
    if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fl
      }, Jf(
        t,
        u,
        q
      );
      var $ = (u & 62914560) === u ? ni - Ze() : (u & 4194048) === u ? If - Ze() : 0;
      if ($ = ky(
        q,
        $
      ), $ !== null) {
        Tl = u, e.cancelPendingCommit = $(
          od.bind(
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
            D,
            q,
            null,
            T,
            z
          )
        ), Kl(e, u, s, !E);
        return;
      }
    }
    od(
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
  function ay(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Dt(u(), n)) return !1;
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
  function Kl(e, t, l, a) {
    t &= ~ds, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - nt(n), s = 1 << u;
      a[u] = -1, n &= ~s;
    }
    l !== 0 && ll(e, l, t);
  }
  function ci() {
    return (De & 6) === 0 ? (eu(0), !1) : !0;
  }
  function gs() {
    if (Se !== null) {
      if (Me === 0)
        var e = Se.return;
      else
        e = Se, yl = da = null, Oc(e), $a = null, qn = 0, e = Se;
      for (; e !== null; )
        Of(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function un(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Ey(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tl = 0, gs(), Le = e, Se = l = ml(e.current, null), _e = t, Me = 0, Rt = null, Vl = !1, ln = ve(e, t), fs = !1, an = qt = ds = ja = Xl = Qe = 0, Tt = In = null, ms = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - nt(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return Nl = t, zu(), l;
  }
  function ad(e, t) {
    ge = null, b.H = Xn, t === Ja || t === qu ? (t = po(), Me = 3) : t === jc ? (t = po(), Me = 4) : Me = t === $c ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Rt = t, Se === null && (Qe = 1, Fu(
      e,
      Gt(t, e.current)
    ));
  }
  function nd() {
    var e = Ot.current;
    return e === null ? !0 : (_e & 4194048) === _e ? Zt === null : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === Zt : !1;
  }
  function ud() {
    var e = b.H;
    return b.H = Xn, e === null ? Xn : e;
  }
  function id() {
    var e = b.A;
    return b.A = ty, e;
  }
  function si() {
    Qe = 4, Vl || (_e & 4194048) !== _e && Ot.current !== null || (ln = !0), (Xl & 134217727) === 0 && (ja & 134217727) === 0 || Le === null || Kl(
      Le,
      _e,
      qt,
      !1
    );
  }
  function ps(e, t, l) {
    var a = De;
    De |= 2;
    var n = ud(), u = id();
    (Le !== e || _e !== t) && (ii = null, un(e, t)), t = !1;
    var s = Qe;
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          var r = Se, h = Rt;
          switch (Me) {
            case 8:
              gs(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var E = Me;
              if (Me = 0, Rt = null, cn(e, r, h, E), l && ln) {
                s = 0;
                break e;
              }
              break;
            default:
              E = Me, Me = 0, Rt = null, cn(e, r, h, E);
          }
        }
        ny(), s = Qe;
        break;
      } catch (D) {
        ad(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, yl = da = null, De = a, b.H = n, b.A = u, Se === null && (Le = null, _e = 0, zu()), s;
  }
  function ny() {
    for (; Se !== null; ) cd(Se);
  }
  function uy(e, t) {
    var l = De;
    De |= 2;
    var a = ud(), n = id();
    Le !== e || _e !== t ? (ii = null, ui = Ze() + 500, un(e, t)) : ln = ve(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          t = Se;
          var u = Rt;
          t: switch (Me) {
            case 1:
              Me = 0, Rt = null, cn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (vo(u)) {
                Me = 0, Rt = null, sd(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || Le !== e || (Me = 7), cl(e);
              }, u.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              vo(u) ? (Me = 0, Rt = null, sd(t)) : (Me = 0, Rt = null, cn(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (Se.tag) {
                case 26:
                  s = Se.memoizedState;
                case 5:
                case 27:
                  var r = Se;
                  if (s ? Kd(s) : r.stateNode.complete) {
                    Me = 0, Rt = null;
                    var h = r.sibling;
                    if (h !== null) Se = h;
                    else {
                      var E = r.return;
                      E !== null ? (Se = E, ri(E)) : Se = null;
                    }
                    break t;
                  }
              }
              Me = 0, Rt = null, cn(e, t, u, 5);
              break;
            case 6:
              Me = 0, Rt = null, cn(e, t, u, 6);
              break;
            case 8:
              gs(), Qe = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        iy();
        break;
      } catch (D) {
        ad(e, D);
      }
    while (!0);
    return yl = da = null, b.H = a, b.A = n, De = l, Se !== null ? 0 : (Le = null, _e = 0, zu(), Qe);
  }
  function iy() {
    for (; Se !== null && !vn(); )
      cd(Se);
  }
  function cd(e) {
    var t = Df(e.alternate, e, Nl);
    e.memoizedProps = e.pendingProps, t === null ? ri(e) : Se = t;
  }
  function sd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Nf(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          _e
        );
        break;
      case 11:
        t = Nf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          _e
        );
        break;
      case 5:
        Oc(t);
      default:
        Of(l, t), t = Se = no(t, Nl), t = Df(l, t, Nl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ri(e) : Se = t;
  }
  function cn(e, t, l, a) {
    yl = da = null, Oc(t), $a = null, qn = 0;
    var n = t.return;
    try {
      if (Jh(
        e,
        n,
        t,
        l,
        _e
      )) {
        Qe = 1, Fu(
          e,
          Gt(l, e.current)
        ), Se = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw Se = n, u;
      Qe = 1, Fu(
        e,
        Gt(l, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Te || a === 1 ? e = !0 : ln || (_e & 536870912) !== 0 ? e = !1 : (Vl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ot.current, a !== null && a.tag === 13 && (a.flags |= 16384))), rd(t, e)) : ri(t);
  }
  function ri(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rd(
          t,
          Vl
        );
        return;
      }
      e = t.return;
      var l = Wh(
        t.alternate,
        t,
        Nl
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
  function rd(e, t) {
    do {
      var l = Ih(e.alternate, e);
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
  function od(e, t, l, a, n, u, s, r, h) {
    e.cancelPendingCommit = null;
    do
      oi();
    while (lt !== 0);
    if ((De & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= ic, Ct(
        e,
        l,
        u,
        s,
        r,
        h
      ), e === Le && (Se = Le = null, _e = 0), nn = t, Zl = e, Tl = l, hs = u, ys = n, Pf = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, oy(_a, function() {
        return yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, n = d.p, d.p = 2, s = De, De |= 4;
        try {
          Ph(e, t, l);
        } finally {
          De = s, d.p = n, b.T = a;
        }
      }
      lt = 1, fd(), dd(), md();
    }
  }
  function fd() {
    if (lt === 1) {
      lt = 0;
      var e = Zl, t = nn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = b.T, b.T = null;
        var a = d.p;
        d.p = 2;
        var n = De;
        De |= 4;
        try {
          Qf(t, e);
          var u = Cs, s = $r(e.containerInfo), r = u.focusedElem, h = u.selectionRange;
          if (s !== r && r && r.ownerDocument && Jr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (h !== null && tc(r)) {
              var E = h.start, D = h.end;
              if (D === void 0 && (D = E), "selectionStart" in r)
                r.selectionStart = E, r.selectionEnd = Math.min(
                  D,
                  r.value.length
                );
              else {
                var q = r.ownerDocument || document, T = q && q.defaultView || window;
                if (T.getSelection) {
                  var z = T.getSelection(), $ = r.textContent.length, ie = Math.min(h.start, $), Be = h.end === void 0 ? ie : Math.min(h.end, $);
                  !z.extend && ie > Be && (s = Be, Be = ie, ie = s);
                  var j = Kr(
                    r,
                    ie
                  ), g = Kr(
                    r,
                    Be
                  );
                  if (j && g && (z.rangeCount !== 1 || z.anchorNode !== j.node || z.anchorOffset !== j.offset || z.focusNode !== g.node || z.focusOffset !== g.offset)) {
                    var S = q.createRange();
                    S.setStart(j.node, j.offset), z.removeAllRanges(), ie > Be ? (z.addRange(S), z.extend(g.node, g.offset)) : (S.setEnd(g.node, g.offset), z.addRange(S));
                  }
                }
              }
            }
            for (q = [], z = r; z = z.parentNode; )
              z.nodeType === 1 && q.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < q.length; r++) {
              var U = q[r];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          Si = !!ws, Cs = ws = null;
        } finally {
          De = n, d.p = a, b.T = l;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function dd() {
    if (lt === 2) {
      lt = 0;
      var e = Zl, t = nn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = b.T, b.T = null;
        var a = d.p;
        d.p = 2;
        var n = De;
        De |= 4;
        try {
          Yf(e, t.alternate, t);
        } finally {
          De = n, d.p = a, b.T = l;
        }
      }
      lt = 3;
    }
  }
  function md() {
    if (lt === 4 || lt === 3) {
      lt = 0, st();
      var e = Zl, t = nn, l = Tl, a = Pf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, nn = Zl = null, hd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ql = null), qi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            na,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, n = d.p, d.p = 2, b.T = null;
        try {
          for (var u = e.onRecoverableError, s = 0; s < a.length; s++) {
            var r = a[s];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          b.T = t, d.p = n;
        }
      }
      (Tl & 3) !== 0 && oi(), cl(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === vs ? Pn++ : (Pn = 0, vs = e) : Pn = 0, eu(0);
    }
  }
  function hd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Un(t)));
  }
  function oi() {
    return fd(), dd(), md(), yd();
  }
  function yd() {
    if (lt !== 5) return !1;
    var e = Zl, t = hs;
    hs = 0;
    var l = qi(Tl), a = b.T, n = d.p;
    try {
      d.p = 32 > l ? 32 : l, b.T = null, l = ys, ys = null;
      var u = Zl, s = Tl;
      if (lt = 0, nn = Zl = null, Tl = 0, (De & 6) !== 0) throw Error(f(331));
      var r = De;
      if (De |= 4, Ff(u.current), Kf(
        u,
        u.current,
        s,
        l
      ), De = r, eu(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(na, u);
        } catch {
        }
      return !0;
    } finally {
      d.p = n, b.T = a, hd(e, t);
    }
  }
  function vd(e, t, l) {
    t = Gt(l, t), t = Jc(e.stateNode, t, 2), e = Ll(e, t, 2), e !== null && (le(e, 2), cl(e));
  }
  function Oe(e, t, l) {
    if (e.tag === 3)
      vd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ql === null || !Ql.has(a))) {
            e = Gt(l, e), l = gf(2), a = Ll(t, l, 2), a !== null && (pf(
              l,
              a,
              t,
              e
            ), le(a, 2), cl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function bs(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new ly();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (fs = !0, n.add(l), e = cy.bind(null, e, t, l), t.then(e, e));
  }
  function cy(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Le === e && (_e & l) === l && (Qe === 4 || Qe === 3 && (_e & 62914560) === _e && 300 > Ze() - ni ? (De & 2) === 0 && un(e, 0) : ds |= l, an === _e && (an = 0)), cl(e);
  }
  function gd(e, t) {
    t === 0 && (t = He()), e = ra(e, t), e !== null && (le(e, t), cl(e));
  }
  function sy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), gd(e, l);
  }
  function ry(e, t) {
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
    a !== null && a.delete(t), gd(e, l);
  }
  function oy(e, t) {
    return wl(e, t);
  }
  var fi = null, sn = null, xs = !1, di = !1, js = !1, Jl = 0;
  function cl(e) {
    e !== sn && e.next === null && (sn === null ? fi = sn = e : sn = sn.next = e), di = !0, xs || (xs = !0, dy());
  }
  function eu(e, t) {
    if (!js && di) {
      js = !0;
      do
        for (var l = !1, a = fi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var s = a.suspendedLanes, r = a.pingedLanes;
              u = (1 << 31 - nt(42 | e) + 1) - 1, u &= n & ~(s & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, jd(a, u));
          } else
            u = _e, u = Z(
              a,
              a === Le ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ve(a, u) || (l = !0, jd(a, u));
          a = a.next;
        }
      while (l);
      js = !1;
    }
  }
  function fy() {
    pd();
  }
  function pd() {
    di = xs = !1;
    var e = 0;
    Jl !== 0 && Sy() && (e = Jl);
    for (var t = Ze(), l = null, a = fi; a !== null; ) {
      var n = a.next, u = bd(a, t);
      u === 0 ? (a.next = null, l === null ? fi = n : l.next = n, n === null && (sn = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (di = !0)), a = n;
    }
    lt !== 0 && lt !== 5 || eu(e), Jl !== 0 && (Jl = 0);
  }
  function bd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - nt(u), r = 1 << s, h = n[s];
      h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[s] = be(r, t)) : h <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Le, l = _e, l = Z(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && rl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ve(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && rl(a), qi(l)) {
        case 2:
        case 8:
          l = hu;
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
      return a = xd.bind(null, e), l = wl(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && rl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function xd(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (oi() && e.callbackNode !== l)
      return null;
    var a = _e;
    return a = Z(
      e,
      e === Le ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (td(e, a, t), bd(e, Ze()), e.callbackNode != null && e.callbackNode === l ? xd.bind(null, e) : null);
  }
  function jd(e, t) {
    if (oi()) return null;
    td(e, t, !0);
  }
  function dy() {
    _y(function() {
      (De & 6) !== 0 ? wl(
        pn,
        fy
      ) : pd();
    });
  }
  function Ss() {
    if (Jl === 0) {
      var e = Za;
      e === 0 && (e = Ta, Ta <<= 1, (Ta & 261888) === 0 && (Ta = 256)), Jl = e;
    }
    return Jl;
  }
  function Sd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xu("" + e);
  }
  function Ed(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function my(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Sd(
        (n[jt] || null).action
      ), s = a.submitter;
      s && (t = (t = s[jt] || null) ? Sd(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var r = new _u(
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
                if (Jl !== 0) {
                  var h = s ? Ed(n, s) : new FormData(n);
                  Gc(
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
                typeof u == "function" && (r.preventDefault(), h = s ? Ed(n, s) : new FormData(n), Gc(
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
    var _s = uc[Es], hy = _s.toLowerCase(), yy = _s[0].toUpperCase() + _s.slice(1);
    Wt(
      hy,
      "on" + yy
    );
  }
  Wt(Ir, "onAnimationEnd"), Wt(Pr, "onAnimationIteration"), Wt(eo, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(Dh, "onTransitionRun"), Wt(Mh, "onTransitionStart"), Wt(Oh, "onTransitionCancel"), Wt(to, "onTransitionEnd"), Ma("onMouseEnter", ["mouseout", "mouseover"]), Ma("onMouseLeave", ["mouseout", "mouseover"]), Ma("onPointerEnter", ["pointerout", "pointerover"]), Ma("onPointerLeave", ["pointerout", "pointerover"]), ua(
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
  var tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tu)
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
            var r = a[s], h = r.instance, E = r.currentTarget;
            if (r = r.listener, h !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = E;
            try {
              u(n);
            } catch (D) {
              Au(D);
            }
            n.currentTarget = null, u = h;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (r = a[s], h = r.instance, E = r.currentTarget, r = r.listener, h !== u && n.isPropagationStopped())
              break e;
            u = r, n.currentTarget = E;
            try {
              u(n);
            } catch (D) {
              Au(D);
            }
            n.currentTarget = null, u = h;
          }
      }
    }
  }
  function Ee(e, t) {
    var l = t[Bi];
    l === void 0 && (l = t[Bi] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Nd(t, e, 2, !1), l.add(a));
  }
  function Ns(e, t, l) {
    var a = 0;
    t && (a |= 4), Nd(
      l,
      e,
      a,
      t
    );
  }
  var mi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ts(e) {
    if (!e[mi]) {
      e[mi] = !0, vr.forEach(function(l) {
        l !== "selectionchange" && (vy.has(l) || Ns(l, !1, e), Ns(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mi] || (t[mi] = !0, Ns("selectionchange", !1, t));
    }
  }
  function Nd(e, t, l, a) {
    switch (em(t)) {
      case 2:
        var n = Xy;
        break;
      case 8:
        n = Qy;
        break;
      default:
        n = ks;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !Zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function As(e, t, l, a, n) {
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
            if (s = wa(r), s === null) return;
            if (h = s.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = u = s;
              continue e;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    zr(function() {
      var E = u, D = Xi(l), q = [];
      e: {
        var T = lo.get(e);
        if (T !== void 0) {
          var z = _u, $ = e;
          switch (e) {
            case "keypress":
              if (Su(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = rh;
              break;
            case "focusin":
              $ = "focus", z = Fi;
              break;
            case "focusout":
              $ = "blur", z = Fi;
              break;
            case "beforeblur":
            case "afterblur":
              z = Fi;
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
              z = Dr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = dh;
              break;
            case Ir:
            case Pr:
            case eo:
              z = eh;
              break;
            case to:
              z = hh;
              break;
            case "scroll":
            case "scrollend":
              z = $m;
              break;
            case "wheel":
              z = vh;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = lh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Or;
              break;
            case "toggle":
            case "beforetoggle":
              z = ph;
          }
          var ie = (t & 4) !== 0, Be = !ie && (e === "scroll" || e === "scrollend"), j = ie ? T !== null ? T + "Capture" : null : T;
          ie = [];
          for (var g = E, S; g !== null; ) {
            var U = g;
            if (S = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || S === null || j === null || (U = En(g, j), U != null && ie.push(
              lu(g, U, S)
            )), Be) break;
            g = g.return;
          }
          0 < ie.length && (T = new z(
            T,
            $,
            null,
            l,
            D
          ), q.push({ event: T, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", T && l !== Vi && ($ = l.relatedTarget || l.fromElement) && (wa($) || $[za]))
            break e;
          if ((z || T) && (T = D.window === D ? D : (T = D.ownerDocument) ? T.defaultView || T.parentWindow : window, z ? ($ = l.relatedTarget || l.toElement, z = E, $ = $ ? wa($) : null, $ !== null && (Be = p($), ie = $.tag, $ !== Be || ie !== 5 && ie !== 27 && ie !== 6) && ($ = null)) : (z = null, $ = E), z !== $)) {
            if (ie = Dr, U = "onMouseLeave", j = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (ie = Or, U = "onPointerLeave", j = "onPointerEnter", g = "pointer"), Be = z == null ? T : Sn(z), S = $ == null ? T : Sn($), T = new ie(
              U,
              g + "leave",
              z,
              l,
              D
            ), T.target = Be, T.relatedTarget = S, U = null, wa(D) === E && (ie = new ie(
              j,
              g + "enter",
              $,
              l,
              D
            ), ie.target = S, ie.relatedTarget = Be, U = ie), Be = U, z && $)
              t: {
                for (ie = gy, j = z, g = $, S = 0, U = j; U; U = ie(U))
                  S++;
                U = 0;
                for (var ae = g; ae; ae = ie(ae))
                  U++;
                for (; 0 < S - U; )
                  j = ie(j), S--;
                for (; 0 < U - S; )
                  g = ie(g), U--;
                for (; S--; ) {
                  if (j === g || g !== null && j === g.alternate) {
                    ie = j;
                    break t;
                  }
                  j = ie(j), g = ie(g);
                }
                ie = null;
              }
            else ie = null;
            z !== null && Td(
              q,
              T,
              z,
              ie,
              !1
            ), $ !== null && Be !== null && Td(
              q,
              Be,
              $,
              ie,
              !0
            );
          }
        }
        e: {
          if (T = E ? Sn(E) : window, z = T.nodeName && T.nodeName.toLowerCase(), z === "select" || z === "input" && T.type === "file")
            var we = kr;
          else if (Lr(T))
            if (Gr)
              we = zh;
            else {
              we = Th;
              var F = Nh;
            }
          else
            z = T.nodeName, !z || z.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? E && Gi(E.elementType) && (we = kr) : we = Ah;
          if (we && (we = we(e, E))) {
            Yr(
              q,
              we,
              l,
              D
            );
            break e;
          }
          F && F(e, T, E), e === "focusout" && E && T.type === "number" && E.memoizedProps.value != null && ki(T, "number", T.value);
        }
        switch (F = E ? Sn(E) : window, e) {
          case "focusin":
            (Lr(F) || F.contentEditable === "true") && (Ha = F, lc = E, Dn = null);
            break;
          case "focusout":
            Dn = lc = Ha = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, Fr(q, l, D);
            break;
          case "selectionchange":
            if (Ch) break;
          case "keydown":
          case "keyup":
            Fr(q, l, D);
        }
        var xe;
        if (Ii)
          e: {
            switch (e) {
              case "compositionstart":
                var Ne = "onCompositionStart";
                break e;
              case "compositionend":
                Ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ne = "onCompositionUpdate";
                break e;
            }
            Ne = void 0;
          }
        else
          Ba ? Br(e, l) && (Ne = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (Ur && l.locale !== "ko" && (Ba || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Ba && (xe = wr()) : (Ml = D, Ki = "value" in Ml ? Ml.value : Ml.textContent, Ba = !0)), F = hi(E, Ne), 0 < F.length && (Ne = new Mr(
          Ne,
          e,
          null,
          l,
          D
        ), q.push({ event: Ne, listeners: F }), xe ? Ne.data = xe : (xe = Hr(l), xe !== null && (Ne.data = xe)))), (xe = xh ? jh(e, l) : Sh(e, l)) && (Ne = hi(E, "onBeforeInput"), 0 < Ne.length && (F = new Mr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), q.push({
          event: F,
          listeners: Ne
        }), F.data = xe)), my(
          q,
          e,
          E,
          l,
          D
        );
      }
      _d(q, t);
    });
  }
  function lu(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function hi(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = En(e, l), n != null && a.unshift(
        lu(e, n, u)
      ), n = En(e, t), n != null && a.push(
        lu(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function gy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Td(e, t, l, a, n) {
    for (var u = t._reactName, s = []; l !== null && l !== a; ) {
      var r = l, h = r.alternate, E = r.stateNode;
      if (r = r.tag, h !== null && h === a) break;
      r !== 5 && r !== 26 && r !== 27 || E === null || (h = E, n ? (E = En(l, u), E != null && s.unshift(
        lu(l, E, h)
      )) : n || (E = En(l, u), E != null && s.push(
        lu(l, E, h)
      ))), l = l.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var py = /\r\n?/g, by = /\u0000|\uFFFD/g;
  function Ad(e) {
    return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(by, "");
  }
  function zd(e, t) {
    return t = Ad(t), Ad(e) === t;
  }
  function qe(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ua(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ua(e, "" + a);
        break;
      case "className":
        pu(e, "class", a);
        break;
      case "tabIndex":
        pu(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pu(e, l, a);
        break;
      case "style":
        Tr(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          pu(e, "data", a);
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
        a = xu("" + a), e.setAttribute(l, a);
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
        a = xu("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = fl);
        break;
      case "onScroll":
        a != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ee("scrollend", e);
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
        l = xu("" + a), e.setAttributeNS(
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
        Ee("beforetoggle", e), Ee("toggle", e), gu(e, "popover", a);
        break;
      case "xlinkActuate":
        ol(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        ol(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        ol(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        ol(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        ol(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        ol(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        ol(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        ol(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        ol(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        gu(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Km.get(l) || l, gu(e, l, a));
    }
  }
  function zs(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Tr(e, a, u);
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
        typeof a == "string" ? Ua(e, a) : (typeof a == "number" || typeof a == "bigint") && Ua(e, "" + a);
        break;
      case "onScroll":
        a != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ee("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = fl);
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
        if (!gr.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[jt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : gu(e, l, a);
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
        Ee("error", e), Ee("load", e);
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
        Ee("invalid", e);
        var r = u = s = n = null, h = null, E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  n = D;
                  break;
                case "type":
                  s = D;
                  break;
                case "checked":
                  h = D;
                  break;
                case "defaultChecked":
                  E = D;
                  break;
                case "value":
                  u = D;
                  break;
                case "defaultValue":
                  r = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(f(137, t));
                  break;
                default:
                  qe(e, t, a, D, l, null);
              }
          }
        Sr(
          e,
          u,
          r,
          h,
          E,
          s,
          n,
          !1
        );
        return;
      case "select":
        Ee("invalid", e), a = s = u = null;
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
        t = u, l = s, e.multiple = !!a, t != null ? Oa(e, !!a, t, !1) : l != null && Oa(e, !!a, l, !0);
        return;
      case "textarea":
        Ee("invalid", e), u = n = a = null;
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
        Ee("beforetoggle", e), Ee("toggle", e), Ee("cancel", e), Ee("close", e);
        break;
      case "iframe":
      case "object":
        Ee("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < tu.length; a++)
          Ee(tu[a], e);
        break;
      case "image":
        Ee("error", e), Ee("load", e);
        break;
      case "details":
        Ee("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ee("error", e), Ee("load", e);
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
        for (E in l)
          if (l.hasOwnProperty(E) && (a = l[E], a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                qe(e, t, E, a, l, null);
            }
        return;
      default:
        if (Gi(t)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && zs(
              e,
              t,
              D,
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
  function xy(e, t, l, a) {
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
        var n = null, u = null, s = null, r = null, h = null, E = null, D = null;
        for (z in l) {
          var q = l[z];
          if (l.hasOwnProperty(z) && q != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = q;
              default:
                a.hasOwnProperty(z) || qe(e, t, z, null, a, q);
            }
        }
        for (var T in a) {
          var z = a[T];
          if (q = l[T], a.hasOwnProperty(T) && (z != null || q != null))
            switch (T) {
              case "type":
                u = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                E = z;
                break;
              case "defaultChecked":
                D = z;
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
                z !== q && qe(
                  e,
                  t,
                  T,
                  z,
                  a,
                  q
                );
            }
        }
        Yi(
          e,
          s,
          r,
          h,
          E,
          D,
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
        t = r, l = s, a = z, T != null ? Oa(e, !!l, T, !1) : !!a != !!l && (t != null ? Oa(e, !!l, t, !0) : Oa(e, !!l, l ? [] : "", !1));
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
        for (var ie in l)
          T = l[ie], l.hasOwnProperty(ie) && T != null && !a.hasOwnProperty(ie) && qe(e, t, ie, null, a, T);
        for (E in a)
          if (T = a[E], z = l[E], a.hasOwnProperty(E) && T !== z && (T != null || z != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(f(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  E,
                  T,
                  a,
                  z
                );
            }
        return;
      default:
        if (Gi(t)) {
          for (var Be in l)
            T = l[Be], l.hasOwnProperty(Be) && T !== void 0 && !a.hasOwnProperty(Be) && zs(
              e,
              t,
              Be,
              void 0,
              a,
              T
            );
          for (D in a)
            T = a[D], z = l[D], !a.hasOwnProperty(D) || T === z || T === void 0 && z === void 0 || zs(
              e,
              t,
              D,
              T,
              a,
              z
            );
          return;
        }
    }
    for (var j in l)
      T = l[j], l.hasOwnProperty(j) && T != null && !a.hasOwnProperty(j) && qe(e, t, j, null, a, T);
    for (q in a)
      T = a[q], z = l[q], !a.hasOwnProperty(q) || T === z || T == null && z == null || qe(e, t, q, T, a, z);
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
  function jy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, s = n.initiatorType, r = n.duration;
        if (u && r && wd(s)) {
          for (s = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], E = h.startTime;
            if (E > r) break;
            var D = h.transferSize, q = h.initiatorType;
            D && wd(q) && (h = h.responseEnd, s += D * (h < r ? 1 : (r - E) / (h - E)));
          }
          if (--a, t += 8 * (u + s) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ws = null, Cs = null;
  function yi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Cd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dd(e, t) {
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
  function Sy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ms ? !1 : (Ms = e, !0) : (Ms = null, !1);
  }
  var Md = typeof setTimeout == "function" ? setTimeout : void 0, Ey = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, _y = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(e) {
    return Od.resolve(null).then(e).catch(Ny);
  } : Md;
  function Ny(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $l(e) {
    return e === "head";
  }
  function Ud(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), dn(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          au(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, au(l);
          for (var u = l.firstChild; u; ) {
            var s = u.nextSibling, r = u.nodeName;
            u[jn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = s;
          }
        } else
          l === "body" && au(e.ownerDocument.body);
      l = n;
    } while (l);
    dn(t);
  }
  function Rd(e, t) {
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
  function Os(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Os(l), Hi(l);
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
  function Ty(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[jn])
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
  function Ay(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Kt(e.nextSibling), e === null)) return null;
    return e;
  }
  function qd(e, t) {
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
  function zy(e, t) {
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
  function Bd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Kt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Hd(e) {
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
    switch (t = yi(l), e) {
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
  function au(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Hi(e);
  }
  var Jt = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Set();
  function vi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Al = d.d;
  d.d = {
    f: wy,
    r: Cy,
    D: Dy,
    C: My,
    L: Oy,
    m: Uy,
    X: qy,
    S: Ry,
    M: By
  };
  function wy() {
    var e = Al.f(), t = ci();
    return e || t;
  }
  function Cy(e) {
    var t = Ca(e);
    t !== null && t.tag === 5 && t.type === "form" ? lf(t) : Al.r(e);
  }
  var rn = typeof document > "u" ? null : document;
  function kd(e, t, l) {
    var a = rn;
    if (a && typeof t == "string" && t) {
      var n = Yt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Yd.has(n) || (Yd.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), mt(t, "link", e), it(t), a.head.appendChild(t)));
    }
  }
  function Dy(e) {
    Al.D(e), kd("dns-prefetch", e, null);
  }
  function My(e, t) {
    Al.C(e, t), kd("preconnect", e, t);
  }
  function Oy(e, t, l) {
    Al.L(e, t, l);
    var a = rn;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Yt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Yt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Yt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = on(e);
          break;
        case "script":
          u = fn(e);
      }
      Jt.has(u) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Jt.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(nu(u)) || t === "script" && a.querySelector(uu(u)) || (t = a.createElement("link"), mt(t, "link", e), it(t), a.head.appendChild(t)));
    }
  }
  function Uy(e, t) {
    Al.m(e, t);
    var l = rn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Yt(a) + '"][href="' + Yt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = fn(e);
      }
      if (!Jt.has(u) && (e = N({ rel: "modulepreload", href: e }, t), Jt.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(uu(u)))
              return;
        }
        a = l.createElement("link"), mt(a, "link", e), it(a), l.head.appendChild(a);
      }
    }
  }
  function Ry(e, t, l) {
    Al.S(e, t, l);
    var a = rn;
    if (a && e) {
      var n = Da(a).hoistableStyles, u = on(e);
      t = t || "default";
      var s = n.get(u);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = a.querySelector(
          nu(u)
        ))
          r.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Jt.get(u)) && Bs(e, l);
          var h = s = a.createElement("link");
          it(h), mt(h, "link", e), h._p = new Promise(function(E, D) {
            h.onload = E, h.onerror = D;
          }), h.addEventListener("load", function() {
            r.loading |= 1;
          }), h.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, gi(s, t, a);
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
  function qy(e, t) {
    Al.X(e, t);
    var l = rn;
    if (l && e) {
      var a = Da(l).hoistableScripts, n = fn(e), u = a.get(n);
      u || (u = l.querySelector(uu(n)), u || (e = N({ src: e, async: !0 }, t), (t = Jt.get(n)) && Hs(e, t), u = l.createElement("script"), it(u), mt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function By(e, t) {
    Al.M(e, t);
    var l = rn;
    if (l && e) {
      var a = Da(l).hoistableScripts, n = fn(e), u = a.get(n);
      u || (u = l.querySelector(uu(n)), u || (e = N({ src: e, async: !0, type: "module" }, t), (t = Jt.get(n)) && Hs(e, t), u = l.createElement("script"), it(u), mt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Gd(e, t, l, a) {
    var n = (n = re.current) ? vi(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = on(l.href), l = Da(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = on(l.href);
          var u = Da(
            n
          ).hoistableStyles, s = u.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = n.querySelector(
            nu(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Jt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Jt.set(e, l), u || Hy(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = fn(l), l = Da(
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
  function on(e) {
    return 'href="' + Yt(e) + '"';
  }
  function nu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vd(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Hy(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), mt(t, "link", l), it(t), e.head.appendChild(t));
  }
  function fn(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function uu(e) {
    return "script[async]" + e;
  }
  function Xd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Yt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, it(a), a;
          var n = N({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), it(a), mt(a, "style", n), gi(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = on(l.href);
          var u = e.querySelector(
            nu(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, it(u), u;
          a = Vd(l), (n = Jt.get(n)) && Bs(a, n), u = (e.ownerDocument || e).createElement("link"), it(u);
          var s = u;
          return s._p = new Promise(function(r, h) {
            s.onload = r, s.onerror = h;
          }), mt(u, "link", a), t.state.loading |= 4, gi(u, l.precedence, e), t.instance = u;
        case "script":
          return u = fn(l.src), (n = e.querySelector(
            uu(u)
          )) ? (t.instance = n, it(n), n) : (a = l, (n = Jt.get(u)) && (a = N({}, l), Hs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), it(n), mt(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, gi(a, l.precedence, e));
    return t.instance;
  }
  function gi(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, s = 0; s < a.length; s++) {
      var r = a[s];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Bs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var pi = null;
  function Qd(e, t, l) {
    if (pi === null) {
      var a = /* @__PURE__ */ new Map(), n = pi = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = pi, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[jn] || u[rt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var r = a.get(s);
        r ? r.push(u) : a.set(s, [u]);
      }
    }
    return a;
  }
  function Zd(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ly(e, t, l) {
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
  function Kd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Yy(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = on(a.href), u = t.querySelector(
          nu(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = bi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, it(u);
          return;
        }
        u = t.ownerDocument || t, a = Vd(a), (n = Jt.get(n)) && Bs(a, n), u = u.createElement("link"), it(u);
        var s = u;
        s._p = new Promise(function(r, h) {
          s.onload = r, s.onerror = h;
        }), mt(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = bi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Ls = 0;
  function ky(e, t) {
    return e.stylesheets && e.count === 0 && ji(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && ji(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ls === 0 && (Ls = 62500 * jy());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ji(e, e.stylesheets), e.unsuspend)) {
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
  function bi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ji(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var xi = null;
  function ji(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xi = /* @__PURE__ */ new Map(), t.forEach(Gy, e), xi = null, bi.call(e));
  }
  function Gy(e, t) {
    if (!(t.state.loading & 4)) {
      var l = xi.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), xi.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var s = n[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s);
        }
        a && l.set(null, a);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), u = l.get(s) || a, u === a && l.set(null, n), l.set(s, n), this.count++, a = bi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var iu = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Vy(e, t, l, a, n, u, s, r, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ut(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ut(0), this.hiddenUpdates = ut(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jd(e, t, l, a, n, u, s, r, h, E, D, q) {
    return e = new Vy(
      e,
      t,
      l,
      s,
      h,
      E,
      D,
      q,
      r
    ), t = 1, u === !0 && (t |= 24), u = Mt(3, null, null, t), e.current = u, u.stateNode = e, t = pc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Sc(u), e;
  }
  function $d(e) {
    return e ? (e = ka, e) : ka;
  }
  function Fd(e, t, l, a, n, u) {
    n = $d(n), a.context === null ? a.context = n : a.pendingContext = n, a = Hl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Ll(e, a, t), l !== null && (At(l, e, t), Hn(l, e, t));
  }
  function Wd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ys(e, t) {
    Wd(e, t), (e = e.alternate) && Wd(e, t);
  }
  function Id(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ra(e, 67108864);
      t !== null && At(t, e, 67108864), Ys(e, 67108864);
    }
  }
  function Pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bt();
      t = Ri(t);
      var l = ra(e, t);
      l !== null && At(l, e, t), Ys(e, t);
    }
  }
  var Si = !0;
  function Xy(e, t, l, a) {
    var n = b.T;
    b.T = null;
    var u = d.p;
    try {
      d.p = 2, ks(e, t, l, a);
    } finally {
      d.p = u, b.T = n;
    }
  }
  function Qy(e, t, l, a) {
    var n = b.T;
    b.T = null;
    var u = d.p;
    try {
      d.p = 8, ks(e, t, l, a);
    } finally {
      d.p = u, b.T = n;
    }
  }
  function ks(e, t, l, a) {
    if (Si) {
      var n = Gs(a);
      if (n === null)
        As(
          e,
          t,
          a,
          Ei,
          l
        ), tm(e, a);
      else if (Ky(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (tm(e, a), t & 4 && -1 < Zy.indexOf(e)) {
        for (; n !== null; ) {
          var u = Ca(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = H(u.pendingLanes);
                  if (s !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var h = 1 << 31 - nt(s);
                      r.entanglements[1] |= h, s &= ~h;
                    }
                    cl(u), (De & 6) === 0 && (ui = Ze() + 500, eu(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = ra(u, 2), r !== null && At(r, u, 2), ci(), Ys(u, 2);
            }
          if (u = Gs(a), u === null && As(
            e,
            t,
            a,
            Ei,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        As(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Gs(e) {
    return e = Xi(e), Vs(e);
  }
  var Ei = null;
  function Vs(e) {
    if (Ei = null, e = wa(e), e !== null) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = A(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = M(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ei = e, null;
  }
  function em(e) {
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
        switch (gn()) {
          case pn:
            return 2;
          case hu:
            return 8;
          case _a:
          case yu:
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
  var Xs = !1, Fl = null, Wl = null, Il = null, cu = /* @__PURE__ */ new Map(), su = /* @__PURE__ */ new Map(), Pl = [], Zy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Fl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Il = null;
        break;
      case "pointerover":
      case "pointerout":
        cu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        su.delete(t.pointerId);
    }
  }
  function ru(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ca(t), t !== null && Id(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Ky(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Fl = ru(
          Fl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Wl = ru(
          Wl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Il = ru(
          Il,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return cu.set(
          u,
          ru(
            cu.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, su.set(
          u,
          ru(
            su.get(u) || null,
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
  function lm(e) {
    var t = wa(e.target);
    if (t !== null) {
      var l = p(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = A(l), t !== null) {
            e.blockedOn = t, hr(e.priority, function() {
              Pd(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = M(l), t !== null) {
            e.blockedOn = t, hr(e.priority, function() {
              Pd(l);
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
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Gs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Vi = a, l.target.dispatchEvent(a), Vi = null;
      } else
        return t = Ca(l), t !== null && Id(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function am(e, t, l) {
    _i(e) && l.delete(t);
  }
  function Jy() {
    Xs = !1, Fl !== null && _i(Fl) && (Fl = null), Wl !== null && _i(Wl) && (Wl = null), Il !== null && _i(Il) && (Il = null), cu.forEach(am), su.forEach(am);
  }
  function Ni(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Jy
    )));
  }
  var Ti = null;
  function nm(e) {
    Ti !== e && (Ti = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Ti === e && (Ti = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (Vs(a || l) === null)
              continue;
            break;
          }
          var u = Ca(l);
          u !== null && (e.splice(t, 3), t -= 3, Gc(
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
  function dn(e) {
    function t(h) {
      return Ni(h, e);
    }
    Fl !== null && Ni(Fl, e), Wl !== null && Ni(Wl, e), Il !== null && Ni(Il, e), cu.forEach(t), su.forEach(t);
    for (var l = 0; l < Pl.length; l++) {
      var a = Pl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Pl.length && (l = Pl[0], l.blockedOn === null); )
      lm(l), l.blockedOn === null && Pl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], s = n[jt] || null;
        if (typeof u == "function")
          s || nm(l);
        else if (s) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, s = u[jt] || null)
              r = s.formAction;
            else if (Vs(n) !== null) continue;
          } else r = s.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), nm(l);
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
  function Qs(e) {
    this._internalRoot = e;
  }
  Ai.prototype.render = Qs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var l = t.current, a = Bt();
    Fd(l, a, e, t, null, null);
  }, Ai.prototype.unmount = Qs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fd(e.current, 2, null, e, null, null), ci(), t[za] = null;
    }
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  Ai.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mr();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Pl.length && t !== 0 && t < Pl[l].priority; l++) ;
      Pl.splice(l, 0, e), l === 0 && lm(e);
    }
  };
  var im = o.version;
  if (im !== "19.2.8")
    throw Error(
      f(
        527,
        im,
        "19.2.8"
      )
    );
  d.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = v(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var $y = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zi.isDisabled && zi.supportsFiber)
      try {
        na = zi.inject(
          $y
        ), gt = zi;
      } catch {
      }
  }
  return fu.createRoot = function(e, t) {
    if (!_(e)) throw Error(f(299));
    var l = !1, a = "", n = mf, u = hf, s = yf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Jd(
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
    ), e[za] = t.current, Ts(e), new Qs(t);
  }, fu.hydrateRoot = function(e, t, l) {
    if (!_(e)) throw Error(f(299));
    var a = !1, n = "", u = mf, s = hf, r = yf, h = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), t = Jd(
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
    ), t.context = $d(null), l = t.current, a = Bt(), a = Ri(a), n = Hl(a), n.callback = null, Ll(l, n, a), l = a, t.current.lanes = l, le(t, l), cl(t), e[za] = t.current, Ts(e), new Ai(t);
  }, fu.version = "19.2.8", fu;
}
var vm;
function uv() {
  if (vm) return Js.exports;
  vm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Js.exports = nv(), Js.exports;
}
var iv = uv();
const er = "hana.plugin.ui", tr = 1, cv = "X-Hana-Plugin-Surface-Session", sv = "pluginSurfaceSession", Tm = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Sa = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, rv = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function gm(c) {
  return typeof c == "object" && c !== null;
}
function ta(c) {
  return {
    ok: !1,
    error: {
      code: Tm.BAD_MESSAGE,
      message: c
    }
  };
}
function pm(c) {
  if (!gm(c))
    return ta("Plugin UI messages must be objects.");
  if (c.protocol !== er)
    return ta("Plugin UI message protocol is missing or invalid.");
  if (c.version !== tr)
    return {
      ok: !1,
      error: {
        code: Tm.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(c.version)}.`
      }
    };
  if (typeof c.kind != "string" || !rv.has(c.kind))
    return ta("Plugin UI message kind is missing or invalid.");
  if (typeof c.type != "string" || c.type.trim() === "")
    return ta("Plugin UI message type must be a non-empty string.");
  const o = c.kind;
  if (o !== "event" && (typeof c.id != "string" || c.id.trim() === ""))
    return ta(`Plugin UI ${o} messages must include a non-empty id.`);
  if (o === "error") {
    if (!gm(c.error))
      return ta("Plugin UI error messages must include an error object.");
    if (typeof c.error.code != "string" || c.error.code.trim() === "")
      return ta("Plugin UI error code must be a non-empty string.");
    if (typeof c.error.message != "string" || c.error.message.trim() === "")
      return ta("Plugin UI error message must be a non-empty string.");
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
let xm = 0;
function ov() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (xm += 1, `hana-plugin-${Date.now()}-${xm}`);
}
function fv() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function dv(c) {
  if (!c)
    return null;
  try {
    return new URL(c).origin;
  } catch {
    return null;
  }
}
function mv(c, o) {
  if (o)
    return o;
  const m = new URLSearchParams(c.location.search).get("hana-host-origin");
  return m || (dv(c.document.referrer) ?? "*");
}
function hv(c) {
  const o = new URLSearchParams(c.location.search);
  return {
    theme: o.get("hana-theme") ?? void 0,
    cssUrl: o.get("hana-css") ?? void 0
  };
}
function jm(c, o, m) {
  return !(c.source !== o || m !== "*" && c.origin !== m);
}
function yv(c) {
  return typeof c == "string" ? { url: c } : c;
}
function vv(c) {
  return typeof c == "string" ? { text: c } : c;
}
function Am(c) {
  const o = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(c.location.pathname || "");
  if (!o)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(o[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function gv(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (c.includes("\\") || c.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(c))
    throw new Error("Invalid plugin asset path.");
  const o = c.replace(/^\/+/, "");
  if (!o || o.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const m = o.split("/");
  if (m.some((f) => !f || f === "." || f === ".." || f.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return m.map((f) => encodeURIComponent(f)).join("/");
}
function pv(c, o) {
  const m = Am(c), f = gv(o);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(m)}/assets/${f}`;
}
function bv(c) {
  return new URLSearchParams(c.location.search).get(sv) || null;
}
function xv(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin API path.");
  const o = c.trim();
  if (!o || o.includes("\\") || o.includes("\0") || o.includes("#") || o.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(o))
    throw new Error("Invalid plugin API path.");
  const m = o.replace(/^\/+/, "");
  if (!m || m.startsWith("./") || m === "api/plugins" || m.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const f = m.indexOf("?"), _ = f >= 0 ? m.slice(0, f) : m;
  if (!_)
    throw new Error("Invalid plugin API path.");
  const p = _.split("/");
  for (const x of p) {
    if (!x)
      throw new Error("Invalid plugin API path.");
    let v;
    try {
      v = decodeURIComponent(x);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (v === "." || v === ".." || v.includes("/") || v.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const A = new URL(`http://hana.local/${m}`);
  return `${p.map((x) => encodeURIComponent(decodeURIComponent(x))).join("/")}${A.search}`;
}
function zm(c, o) {
  const m = Am(c), f = xv(o);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(m)}/${f}`;
}
function jv(c, o, m) {
  const f = bv(c);
  if (!f)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const _ = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!_)
    throw new Error("hana.api.fetch requires window.fetch.");
  const p = m ?? {}, A = new Headers(p.headers);
  return A.set(cv, f), _(zm(c, o), {
    ...p,
    headers: A
  });
}
function Sv(c = {}) {
  const o = c.targetWindow ?? fv(), m = c.parentWindow ?? o.parent, f = mv(o, c.targetOrigin), _ = c.requestTimeoutMs ?? 1e4, p = c.idFactory ?? ov;
  let A = hv(o);
  const M = /* @__PURE__ */ new Set();
  function x(Y) {
    m.postMessage(Y, f);
  }
  function v(Y, V) {
    const ee = {
      protocol: er,
      version: tr,
      kind: "event",
      type: Y
    };
    V !== void 0 && (ee.payload = V), x(ee);
  }
  function O(Y) {
    if (!jm(Y, m, f))
      return;
    const V = pm(Y.data);
    if (!V.ok)
      return;
    const ee = V.value;
    if (ee.kind !== "event" || ee.type !== "hana.theme.changed" || typeof ee.payload != "object" || ee.payload === null)
      return;
    const te = ee.payload;
    A = {
      theme: typeof te.theme == "string" ? te.theme : A.theme,
      cssUrl: typeof te.cssUrl == "string" ? te.cssUrl : A.cssUrl
    };
    for (const he of M)
      he(A);
  }
  function N(Y, V, ee = {}) {
    const te = p(), he = ee.timeoutMs ?? _;
    return new Promise((J, me) => {
      const fe = () => {
        o.removeEventListener("message", ne), o.clearTimeout(W);
      }, ne = (w) => {
        if (!jm(w, m, f))
          return;
        const P = pm(w.data);
        if (!P.ok)
          return;
        const B = P.value;
        B.id !== te || B.type !== Y || (B.kind === "response" && (fe(), J(B.payload)), B.kind === "error" && B.error && (fe(), me(new bm(B.error))));
      }, W = o.setTimeout(() => {
        fe(), me(new bm({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${Y}.`
        }));
      }, he);
      o.addEventListener("message", ne);
      const I = {
        protocol: er,
        version: tr,
        id: te,
        kind: "request",
        type: Y
      };
      V !== void 0 && (I.payload = V), x(I);
    });
  }
  return {
    ready(Y) {
      v("hana.ready", Y);
    },
    assets: {
      url(Y) {
        return pv(o, Y);
      }
    },
    api: {
      url(Y) {
        return zm(o, Y);
      },
      fetch(Y, V) {
        return jv(o, Y, V);
      }
    },
    ui: {
      resize(Y) {
        v(Sa.UI_RESIZE, Y);
      }
    },
    theme: {
      getSnapshot() {
        return { ...A };
      },
      subscribe(Y) {
        return M.size === 0 && o.addEventListener("message", O), M.add(Y), Y({ ...A }), () => {
          M.delete(Y), M.size === 0 && o.removeEventListener("message", O);
        };
      }
    },
    host: {
      request: N
    },
    toast: {
      show(Y, V) {
        return N(Sa.TOAST_SHOW, Y, V);
      }
    },
    external: {
      open(Y, V) {
        return N(Sa.EXTERNAL_OPEN, yv(Y), V);
      }
    },
    clipboard: {
      writeText(Y, V) {
        return N(Sa.CLIPBOARD_WRITE_TEXT, vv(Y), V);
      }
    },
    resources: {
      open(Y, V) {
        return N(Sa.RESOURCE_OPEN, Y, V);
      },
      pick(Y = {}, V) {
        return N(Sa.RESOURCE_PICK, Y, V);
      },
      requestAccess(Y, V) {
        return N(Sa.RESOURCE_REQUEST_ACCESS, Y, V);
      }
    }
  };
}
let Sm = null;
function zt() {
  return Sm ??= Sv(), Sm;
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
    fetch(c, o) {
      return zt().api.fetch(c, o);
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
    request(c, o, m) {
      return zt().host.request(c, o, m);
    }
  },
  toast: {
    show(c, o) {
      return zt().toast.show(c, o);
    }
  },
  external: {
    open(c, o) {
      return zt().external.open(c, o);
    }
  },
  clipboard: {
    writeText(c, o) {
      return zt().clipboard.writeText(c, o);
    }
  },
  resources: {
    open(c, o) {
      return zt().resources.open(c, o);
    },
    pick(c, o) {
      return zt().resources.pick(c, o);
    },
    requestAccess(c, o) {
      return zt().resources.requestAccess(c, o);
    }
  }
};
function aa(...c) {
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
}, Ev = {
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
function _v({ mode: c = "inherit", theme: o, className: m, style: f, children: _, "data-testid": p = "hana-plugin-theme", ...A }) {
  const M = typeof o == "string" ? o : void 0, x = Nv(c, o);
  return i.jsx("div", { ...A, "data-testid": p, className: aa("hana-plugin-theme", m), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? M : void 0, style: { ...x, ...f }, children: _ });
}
function Nv(c, o) {
  if (c === "inherit")
    return {};
  const m = Tv(c, o), f = {};
  for (const [_, p] of Object.entries(Ev)) {
    const A = m?.[_];
    A && (f[p] = A);
  }
  return f;
}
function Tv(c, o) {
  if (typeof o == "string")
    return Em[o];
  if (o)
    return o;
  if (c === "hana")
    return Em["warm-paper"];
}
R.forwardRef(function({ variant: o = "secondary", size: m = "md", loading: f = !1, iconLeft: _, iconRight: p, disabled: A, className: M, children: x, type: v = "button", ...O }, N) {
  return i.jsxs("button", { ...O, ref: N, type: v, disabled: A || f, className: aa("hana-plugin-button", `hana-plugin-button-${o}`, `hana-plugin-button-${m}`, f && "hana-plugin-button-loading", M), children: [f ? i.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : _, x && i.jsx("span", { className: "hana-plugin-button-label", children: x }), !f && p] });
});
R.forwardRef(function({ label: o, size: m = "md", variant: f = "ghost", className: _, children: p, type: A = "button", ...M }, x) {
  return i.jsx("button", { ...M, ref: x, type: A, "aria-label": o, title: M.title || o, className: aa("hana-plugin-icon-button", `hana-plugin-icon-button-${m}`, `hana-plugin-icon-button-${f}`, _), children: p });
});
R.forwardRef(function({ label: o, hint: m, error: f, id: _, className: p, inputClassName: A, ...M }, x) {
  const v = R.useId(), O = _ || v;
  return i.jsx(wm, { label: o, hint: m, error: f, htmlFor: O, className: p, children: i.jsx("input", { ...M, ref: x, id: O, "aria-invalid": !!f, className: aa("hana-plugin-input", A) }) });
});
R.forwardRef(function({ label: o, hint: m, error: f, id: _, className: p, textareaClassName: A, rows: M = 4, ...x }, v) {
  const O = R.useId(), N = _ || O;
  return i.jsx(wm, { label: o, hint: m, error: f, htmlFor: N, className: p, children: i.jsx("textarea", { ...x, ref: v, id: N, rows: M, "aria-invalid": !!f, className: aa("hana-plugin-textarea", A) }) });
});
R.forwardRef(function({ checked: o, onChange: m, label: f, disabled: _, className: p, onClick: A, type: M = "button", ...x }, v) {
  const O = typeof f == "string" ? f : x["aria-label"];
  return i.jsxs("span", { className: aa("hana-plugin-switch-wrap", p), children: [i.jsx("button", { ...x, ref: v, type: M, role: "switch", "aria-checked": o, "aria-label": O, disabled: _, className: aa("hana-plugin-switch", o && "hana-plugin-switch-on"), onClick: (N) => {
    A?.(N), !N.defaultPrevented && !_ && m?.(!o);
  }, children: i.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), f && i.jsx("span", { className: "hana-plugin-switch-label", children: f })] });
});
function wm({ label: c, hint: o, error: m, htmlFor: f, className: _, children: p }) {
  return i.jsxs("div", { className: aa("hana-plugin-field", _), children: [c && i.jsx("label", { className: "hana-plugin-field-label", htmlFor: f, children: c }), o && i.jsx("div", { className: "hana-plugin-field-hint", children: o }), p, m && i.jsx("div", { className: "hana-plugin-field-error", children: m })] });
}
const Cm = /^\d{4}-\d{2}-\d{2}$/;
function Ea(c, o) {
  if (!Cm.test(c)) return c;
  const m = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return m.setUTCDate(m.getUTCDate() + o), m.toISOString().slice(0, 10);
}
function sr(c) {
  const o = String(c || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: o[0] || "",
    end: o[1] || o[0] || ""
  };
}
function lr(c) {
  const o = (/* @__PURE__ */ new Date(`${c}T12:00:00Z`)).getUTCDay();
  return o === 0 ? 6 : o - 1;
}
function Dm(c, o) {
  return Array.from({ length: o }, (m, f) => Ea(c, f));
}
function ar(c, o) {
  const f = sr(c).start || o, _ = Ea(f, -lr(f));
  return Dm(_, 7);
}
function Mm(c, o, m = 3) {
  const f = Math.max(1, Math.floor(m)), _ = Math.max(0, Math.floor(o)), p = c.slice(_ * f, _ * f + f);
  return [...p, ...Array(Math.max(0, f - p.length)).fill(null)];
}
function Av(c, o) {
  const f = sr(c).start || o, _ = Cm.test(f) ? `${f.slice(0, 7)}-01` : o, p = /* @__PURE__ */ new Date(`${_}T12:00:00Z`);
  p.setUTCMonth(p.getUTCMonth() + 1, 1);
  const A = new Date(p);
  A.setUTCDate(A.getUTCDate() - 1);
  const M = A.toISOString().slice(0, 10), x = Ea(_, -lr(_)), v = 6 - lr(M), O = Ea(M, v), N = Math.round(((/* @__PURE__ */ new Date(`${O}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${x}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Dm(x, N);
}
function wi(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function mu(c) {
  if (!c || c.length < 16) return null;
  const o = Number(c.slice(11, 13)), m = Number(c.slice(14, 16));
  return !Number.isFinite(o) || !Number.isFinite(m) ? null : o * 60 + m;
}
function Om(c) {
  const o = c.map((p) => mu(p.start_at || p.deadline_at)).filter((p) => p !== null), m = c.map((p) => {
    const A = mu(p.end_at);
    if (A !== null) return A;
    const M = mu(p.start_at || p.deadline_at);
    return M === null ? null : M + Number(p.duration || p.estimated_minutes || 45);
  }).filter((p) => p !== null), f = o.length ? Math.floor(Math.min(...o) / 60) - 1 : 10, _ = m.length ? Math.ceil(Math.max(...m) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, f)),
    endHour: Math.min(24, Math.max(22, _))
  };
}
function Um(c, o, m, f = 56) {
  const _ = mu(c.start_at || c.deadline_at);
  if (_ === null) return null;
  const A = mu(c.end_at) ?? _ + Number(c.duration || c.estimated_minutes || 45), M = Math.max(o * 60, _), x = Math.min(m * 60, Math.max(A, M + 30));
  return {
    top: (M - o * 60) / 60 * f,
    height: Math.max(30, (x - M) / 60 * f)
  };
}
function rr(c) {
  const o = c.map((p) => {
    const A = p.start_at || p.deadline_at, M = A ? new Date(A).getTime() : Number.NaN, x = p.end_at ? new Date(p.end_at).getTime() : Number.NaN, v = Number.isFinite(x) ? x : M + Number(p.duration || p.estimated_minutes || 45) * 6e4;
    return { item: p, start: M, end: v };
  }).filter((p) => Number.isFinite(p.start)).sort((p, A) => p.start - A.start || p.end - A.end), m = [], f = o.map((p) => {
    let A = m.findIndex((M) => M <= p.start);
    return A < 0 && (A = m.length), m[A] = p.end, { ...p, lane: A };
  }), _ = Math.max(1, m.length);
  return f.map((p) => ({ ...p, laneCount: _ }));
}
function zv(c, o) {
  return c && typeof c == "object" && "error" in c && typeof c.error == "string" && c.error.trim() ? c.error.trim() : o;
}
async function wv(c) {
  const o = await c.text();
  let m = null;
  if (o.trim())
    try {
      m = JSON.parse(o);
    } catch {
      throw new Error(c.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${c.status}）`);
    }
  if (!c.ok)
    throw new Error(zv(m, `请求失败（HTTP ${c.status}）`));
  if (!m || typeof m != "object")
    throw new Error("插件接口没有返回有效数据");
  return m;
}
async function sl(c, o) {
  let m;
  try {
    m = await cr.api.fetch(c, o);
  } catch (f) {
    const _ = f instanceof Error ? f.message : String(f || "未知错误");
    throw new Error(`页面会话请求失败：${_}`);
  }
  return wv(m);
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
    isCurrent(o) {
      return o === c;
    }
  };
}
function or(c, o) {
  const m = R.useRef(null), f = R.useRef(o);
  return f.current = o, R.useEffect(() => {
    if (!c) return;
    const _ = (p) => {
      const A = p.target;
      m.current && A && !m.current.contains(A) && f.current();
    };
    return document.addEventListener("pointerdown", _), () => document.removeEventListener("pointerdown", _);
  }, [c]), m;
}
const _m = [
  { id: "overview", label: "总览" },
  { id: "planning", label: "筹备" },
  { id: "affairs", label: "事务" }
], ur = {
  today: "今天",
  week: "本周",
  month: "本月",
  horizon: "未来"
}, Cv = {
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
function Dv(c) {
  const o = c;
  if (!o || !Array.isArray(o.items) || !Array.isArray(o.pending) || !Array.isArray(o.courses) || !Array.isArray(o.affairs) || !Array.isArray(o.students) || !Array.isArray(o.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return o;
}
function Mv(c) {
  const o = c, m = o ? [
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
  if (!o || !o.summary || !o.audit || !o.commute || m.some((f) => !Array.isArray(f)))
    throw new Error("筹备接口返回的数据结构不完整");
  return o;
}
class Ov extends R.Component {
  state = { error: "" };
  static getDerivedStateFromError(o) {
    return { error: o instanceof Error ? o.message : "页面渲染异常" };
  }
  componentDidCatch(o, m) {
    console.error("[laosu-workbench] render failed", o, m.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ i.jsx("div", { className: "workbench-shell", children: /* @__PURE__ */ i.jsx("main", { className: "main-area", children: /* @__PURE__ */ i.jsxs("div", { className: "notice error", role: "alert", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "课务台页面异常" }),
      /* @__PURE__ */ i.jsx("span", { children: this.state.error }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => window.location.reload(), children: "重新载入" })
    ] }) }) }) : this.props.children;
  }
}
function el(c, o) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...o
  }).format(new Date(c)) : "未定";
}
function Ht(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Uv(c) {
  return c ? `更新于 ${Ht(c)}` : "尚未更新";
}
function Ci(c) {
  if (!c) return "当前范围";
  const [o, m] = c.split("..");
  if (!o || !m || !/^\d{4}-\d{2}-\d{2}$/.test(o) || !/^\d{4}-\d{2}-\d{2}$/.test(m)) return c;
  const f = (_) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${_}T12:00:00+08:00`));
  return o === m ? f(o) : `${f(o)}—${f(m)}`;
}
function $e(c) {
  return c.start_at || c.deadline_at || null;
}
function Rm(c) {
  return ["completed", "已完成"].includes(c) ? "done" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function yn(c) {
  const o = Rm(c.status);
  return o === "done" ? "state-confirmed" : o === "muted" ? "state-neutral" : o === "error" ? "state-error" : o === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function hn(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function Rv() {
  const c = new URLSearchParams(window.location.search), o = window.localStorage.getItem("laosu-workbench.tab"), m = window.localStorage.getItem("laosu-workbench.scope"), f = c.get("tab") || o || "overview", _ = c.get("scope") || m || "week", p = _m.map((H) => H.id).includes(f) ? f : "overview", A = ["today", "week", "month", "horizon"].includes(_) ? _ : "week", M = c.get("preview"), [x, v] = R.useState(p), [O, N] = R.useState(A), [Y, V] = R.useState(f === "actions" || !!M), [ee, te] = R.useState(null), he = ee !== null, [J, me] = R.useState(null), [fe, ne] = R.useState(!0), [W, I] = R.useState(""), [w, P] = R.useState(null), [B, ze] = R.useState(null), [Ae, je] = R.useState({ text: "", nonce: 0 }), [et, Ue] = R.useState(!1), [Ve, b] = R.useState(""), [d, G] = R.useState(null), [L, se] = R.useState({}), [y, C] = R.useState(!1), [X, Q] = R.useState(null), [de, re] = R.useState(0), [pe, k] = R.useState(null), ue = R.useRef(null), oe = R.useRef(null), K = R.useRef(nr()), tt = R.useRef(nr()), bt = R.useRef(/* @__PURE__ */ new Set()), yt = R.useRef(null), wt = R.useRef(!1), vt = R.useRef(!1), zl = R.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), at = R.useCallback(async (H = O, Z = {}) => {
    const ve = Z.silent === !0, be = K.current.begin();
    ve || (ne(!0), I(""));
    try {
      const He = new URLSearchParams({ scope: H });
      Z.fresh && He.set("fresh", "1");
      const ut = Dv(await sl(`api/dashboard?${He.toString()}`));
      return K.current.isCurrent(be) ? (me(ut), !0) : null;
    } catch (He) {
      return K.current.isCurrent(be) ? (ve || I(He.message || "读取失败"), !1) : null;
    } finally {
      K.current.isCurrent(be) && !ve && ne(!1);
    }
  }, [O]);
  R.useEffect(() => {
    at(A);
  }, []), R.useEffect(() => {
    const H = (Z) => {
      Z.target instanceof HTMLElement && !ue.current?.contains(Z.target) && (yt.current = Z.target);
    };
    return window.addEventListener("pointerdown", H, !0), () => window.removeEventListener("pointerdown", H, !0);
  }, []), R.useEffect(() => {
    M && (V(!0), sl(`api/preview/${encodeURIComponent(M)}`).then(P).catch((H) => {
      P({ ok: !1, error: H.message });
    }));
  }, [M]), R.useEffect(() => {
    if (!Y) return;
    const H = ue.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !wt.current) {
      const le = new URL(window.location.href);
      le.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", le), wt.current = !0;
    }
    const ve = window.setTimeout(() => {
      ((B ? H?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : H?.querySelector(".ai-composer textarea")) || H?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), B && H?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), be = () => Array.from(H?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((le) => le.getClientRects().length > 0 && !le.closest("[hidden]")), He = (le) => {
      if (le.key === "Escape") {
        le.preventDefault(), nt();
        return;
      }
      if (le.key !== "Tab") return;
      const Ct = be();
      if (!Ct.length) return;
      const ll = Ct[0], al = Ct[Ct.length - 1];
      H?.contains(document.activeElement) ? le.shiftKey && document.activeElement === ll ? (le.preventDefault(), al.focus()) : !le.shiftKey && document.activeElement === al && (le.preventDefault(), ll.focus()) : (le.preventDefault(), (le.shiftKey ? al : ll).focus());
    }, ut = () => {
      wt.current && (wt.current = !1, V(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", He), window.addEventListener("popstate", ut), () => {
      window.clearTimeout(ve), document.body.style.overflow = Z, window.removeEventListener("keydown", He), window.removeEventListener("popstate", ut), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [Y]), R.useEffect(() => {
    if (!he) return;
    const H = oe.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !vt.current) {
      const le = new URL(window.location.href);
      le.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", le), vt.current = !0;
    }
    const ve = window.setTimeout(() => H?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), be = () => Array.from(H?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((le) => le.getClientRects().length > 0 && !le.closest("[hidden]")), He = (le) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (le.key === "Escape") {
        le.preventDefault(), xn();
        return;
      }
      if (le.key !== "Tab") return;
      const Ct = be();
      if (!Ct.length) return;
      const ll = Ct[0], al = Ct[Ct.length - 1];
      H?.contains(document.activeElement) ? le.shiftKey && document.activeElement === ll ? (le.preventDefault(), al.focus()) : !le.shiftKey && document.activeElement === al && (le.preventDefault(), ll.focus()) : (le.preventDefault(), (le.shiftKey ? al : ll).focus());
    }, ut = () => {
      const le = new URL(window.location.href).searchParams.get("drawer");
      le === "context" || le === "actions" || !vt.current || (vt.current = !1, te(null));
    };
    return window.addEventListener("keydown", He), window.addEventListener("popstate", ut), () => {
      window.clearTimeout(ve), document.body.style.overflow = Z, window.removeEventListener("keydown", He), window.removeEventListener("popstate", ut), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [he]), R.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", x);
    const H = () => {
      zl.current[x] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${x}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", H), () => window.removeEventListener("pagehide", H);
  }, [x]), R.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", O);
  }, [O]), R.useEffect(() => {
    if (pe?.tab === x) return;
    const H = zl.current[x] || 0;
    let Z = 0, ve, be = !1;
    const He = () => {
      be = !0;
    }, ut = () => {
      be || (window.scrollTo({ top: H, behavior: "auto" }), Z += 1, Math.abs(window.scrollY - H) > 3 && Z < 15 && (ve = window.setTimeout(ut, 90)));
    }, le = window.requestAnimationFrame(ut);
    return window.addEventListener("wheel", He, { passive: !0 }), window.addEventListener("touchstart", He, { passive: !0 }), window.addEventListener("keydown", He), () => {
      be = !0, window.cancelAnimationFrame(le), ve && window.clearTimeout(ve), window.removeEventListener("wheel", He), window.removeEventListener("touchstart", He), window.removeEventListener("keydown", He);
    };
  }, [x]), R.useEffect(() => {
    if (!pe || pe.tab !== x) return;
    let H = 0, Z, ve, be;
    const He = () => {
      const le = Array.from(document.querySelectorAll("[data-item-id]")).find((Ct) => Ct.dataset.itemId === pe.id);
      if (!le && H < 20) {
        H += 1, Z = window.setTimeout(He, 60);
        return;
      }
      if (!le) {
        k(null);
        return;
      }
      be = le, le.classList.add("target-highlight"), le.setAttribute("tabindex", "-1"), le.scrollIntoView({ behavior: "smooth", block: "center" }), le.focus({ preventScroll: !0 }), ve = window.setTimeout(() => {
        le.classList.remove("target-highlight"), le.removeAttribute("tabindex"), k(null);
      }, 2400);
    }, ut = window.setTimeout(He, 50);
    return () => {
      window.clearTimeout(ut), Z && window.clearTimeout(Z), ve && window.clearTimeout(ve), be?.classList.remove("target-highlight"), be?.removeAttribute("tabindex");
    };
  }, [pe, x, J?.observedAt]), R.useEffect(() => {
    if (!Ve) return;
    const H = window.setTimeout(() => b(""), 4800);
    return () => window.clearTimeout(H);
  }, [Ve]);
  const Ft = R.useMemo(
    () => (J?.pending ?? []).filter((H) => !["completed", "cancelled"].includes(H.status)),
    [J]
  ), wl = R.useMemo(() => {
    const H = Date.now();
    return (J?.items ?? []).filter((Z) => $e(Z) && new Date($e(Z)).getTime() >= H && !["completed", "cancelled", "已完成", "已取消"].includes(Z.status)).sort((Z, ve) => new Date($e(Z)).getTime() - new Date($e(ve)).getTime())[0] ?? null;
  }, [J]);
  async function rl(H) {
    const Z = new URL(window.location.href);
    Z.searchParams.set("scope", H), window.history.replaceState(window.history.state, "", Z), N(H), await at(H);
  }
  function vn(H = x) {
    zl.current[H] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${H}`, String(window.scrollY));
  }
  function st(H, Z) {
    vn();
    const ve = new URL(window.location.href);
    ve.searchParams.set("tab", H), window.history.replaceState(window.history.state, "", ve), k(null), v(H);
  }
  function Ze(H) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const Z = document.activeElement;
    ((Z instanceof HTMLElement && Z !== document.body && !ue.current?.contains(Z) ? Z : null) || H || yt.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function gn(H) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const Z = document.activeElement, ve = Z instanceof HTMLElement && Z !== document.body && !oe.current?.contains(Z) ? Z : null;
    (H || ve || yt.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function pn(H, Z) {
    gn(Z), te({ kind: "item", item: H });
  }
  function hu(H, Z) {
    gn(Z), te({ kind: "day", date: H });
  }
  function _a(H) {
    gn(H), te({ kind: "system" });
  }
  function yu() {
    const H = /* @__PURE__ */ Symbol("workbench-operation");
    return bt.current.add(H), Ue(!0), H;
  }
  function bn(H) {
    bt.current.delete(H), Ue(bt.current.size > 0);
  }
  function Na() {
    tt.current.invalidate(), P(null);
  }
  function Oi(H) {
    tt.current.invalidate(), P(H);
  }
  function na() {
    Ze(document.querySelector(".ai-action-button")), ze(null), je({ text: "", nonce: Date.now() }), Na(), V(!0);
  }
  function gt(H) {
    Ze(), ze(null), je({ text: H, nonce: Date.now() }), Na(), V(!0);
  }
  function xt(H) {
    Ze(), ze(H), Na(), V(!0);
  }
  function nt() {
    if (wt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    wt.current = !1, V(!1);
  }
  function xn() {
    if (vt.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    vt.current = !1, te(null);
  }
  async function vu(H = {}) {
    const Z = H.silent === !0;
    Z || b("正在刷新数据…");
    const ve = await at(O, { ...H, fresh: !Z });
    ve === !0 ? (se({}), Q(null), re((be) => be + 1), Z || b("课表、筹备和事务数据已刷新")) : ve === !1 && !Z && b("刷新失败，请查看页面错误");
  }
  async function Ui(H) {
    const Z = tt.current.begin(), ve = yu();
    P(null);
    try {
      const be = await sl("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(H)
      });
      if (!tt.current.isCurrent(Z)) return;
      P({ ...be, operation: String(H.operation || ""), input: H });
    } catch (be) {
      tt.current.isCurrent(Z) && P({ ok: !1, error: be.message });
    } finally {
      bn(ve);
    }
  }
  async function Ta(H) {
    if (!y) {
      C(!0), Q({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const Z = await sl("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: H })
        });
        if (!Z.ok) throw new Error(Z.error || "全部上完的处理未完成");
        Q({ ok: !0, text: Z.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await at(O);
      } catch (Z) {
        const ve = Z.message || "全部上完的处理失败";
        Q({ ok: !1, text: `处理失败：${ve}`, buttonLabel: "重试全部上完" });
      } finally {
        C(!1);
      }
    }
  }
  async function Cl(H) {
    if (!d) {
      G(H.id), se((Z) => ({ ...Z, [H.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const Z = await sl("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: H.id, expectedVersion: H.version })
        });
        if (!Z.ok) throw new Error(Z.error || "没约上的处理未完成");
        const ve = Z.outcome?.candidateDate, be = ve ? `已安排 ${ve.slice(5)}` : "已处理";
        se((He) => ({ ...He, [H.id]: { ok: !0, text: Z.message || "已推进到下一次尝试", buttonLabel: be } })), await at(O);
      } catch (Z) {
        const ve = Z.message || "没约上的处理失败";
        se((be) => ({ ...be, [H.id]: { ok: !1, text: `处理失败：${ve}`, buttonLabel: "重试" } }));
      } finally {
        G(null);
      }
    }
  }
  async function Aa() {
    if (!w?.token || !w.canCommit) return;
    const H = tt.current.begin(), Z = yu(), ve = w.operation || B?.operation;
    try {
      const be = await sl("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: w.token })
      }), He = { ok: be.ok, summary: be.summary, message: `${be.message || ""}${be.exportMessage ? `
导出：${be.exportMessage}` : ""}${be.syncMessage ? `
日历：${be.syncMessage}` : ""}`, result: be, operation: ve, input: w.input, committed: !!be.ok };
      await at(O), re((ut) => ut + 1), tt.current.isCurrent(H) && P(He);
    } catch (be) {
      tt.current.isCurrent(H) && P({ ok: !1, error: be.message });
    } finally {
      bn(Z);
    }
  }
  return /* @__PURE__ */ i.jsx(_v, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ i.jsxs("div", { className: "workbench-shell", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "topbar", children: [
      /* @__PURE__ */ i.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", children: _m.map((H) => /* @__PURE__ */ i.jsx("button", { type: "button", className: x === H.id ? "tab active" : "tab", onClick: () => st(H.id), children: H.label }, H.id)) }),
      /* @__PURE__ */ i.jsxs("div", { className: "top-actions", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: Y ? "ai-action-button active" : "ai-action-button", onClick: na, "aria-expanded": Y, children: "✦ AI 操作" }),
        /* @__PURE__ */ i.jsx("span", { className: "updated-at", children: Uv(J?.observedAt) }),
        /* @__PURE__ */ i.jsxs("button", { type: "button", className: `${J?.health?.ok ? "health good" : "health bad"} health-button${ee?.kind === "system" ? " active" : ""}`, onClick: (H) => _a(H.currentTarget), "aria-expanded": ee?.kind === "system", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          J?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "icon-button", onClick: () => {
          vu();
        }, "aria-label": "刷新", disabled: fe, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("main", { className: "main-area", children: [
      Ve && /* @__PURE__ */ i.jsx("div", { className: "toast", role: "status", children: Ve }),
      W && /* @__PURE__ */ i.jsx(mn, { tone: "error", title: "读取失败", text: W }),
      J?.warnings?.length ? /* @__PURE__ */ i.jsx(mn, { tone: "warn", title: "有警告", text: J.warnings.join("；") }) : null,
      fe && !J ? /* @__PURE__ */ i.jsx(Lm, {}) : null,
      J && x !== "planning" && /* @__PURE__ */ i.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": fe, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ i.jsx("span", { children: fe ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ i.jsx("strong", { children: Ci(J.range) })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "scope-switch", children: Object.keys(ur).map((H) => /* @__PURE__ */ i.jsx("button", { type: "button", className: O === H ? "selected" : "", disabled: fe, onClick: () => {
          rl(H);
        }, children: ur[H] }, H)) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: fe && J ? "view-content scope-loading" : "view-content", "aria-busy": fe && !!J, inert: fe && !!J, children: [
        J && x === "overview" && /* @__PURE__ */ i.jsx(qv, { dashboard: J, pending: Ft, upcoming: wl, onInspect: pn, onOpenDay: hu, onPrepare: xt, onRetry: Cl, retryingId: d, affairFeedback: L, onDayComplete: Ta, dayBusy: y, dayFeedback: X }),
        x === "planning" && /* @__PURE__ */ i.jsx(Lv, { onAction: xt, onAskAi: gt, refreshKey: de, scheduleText: J?.scheduleText, onDataChanged: vu }),
        J && x === "affairs" && /* @__PURE__ */ i.jsx(Gv, { pending: Ft, affairs: J.affairs, onPrepare: xt, onInspect: pn, onRetry: Cl, retryingId: d, feedback: L })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "context-drawer-backdrop", hidden: !he, onMouseDown: (H) => {
      H.currentTarget === H.target && xn();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: oe, className: "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: xn, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: ee?.kind === "system" ? "运行状态" : ee?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ i.jsx("h2", { children: ee?.kind === "system" ? "系统状态" : ee?.kind === "day" ? el(`${ee.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : ee?.item.title }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "context-drawer-body", children: ee && J && /* @__PURE__ */ i.jsx(
        Jv,
        {
          view: ee,
          dashboard: J,
          onPrepare: xt,
          onRetry: Cl,
          retryingId: d,
          affairFeedback: L,
          onSync: () => xt({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ i.jsx("div", { className: "action-drawer-backdrop", hidden: !Y, onMouseDown: (H) => {
      H.currentTarget === H.target && nt();
    }, children: /* @__PURE__ */ i.jsxs("aside", { ref: ue, className: "action-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ i.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ i.jsx("button", { type: "button", className: "context-back", onClick: nt, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ i.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ i.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ i.jsx(
        Vv,
        {
          pending: Ft,
          students: J?.students ?? [],
          preset: B,
          aiDraft: Ae,
          preview: w,
          busy: et,
          onPreview: Ui,
          onAiPreview: Oi,
          onCommit: Aa,
          onClear: Na,
          onClose: nt
        }
      ) })
    ] }) })
  ] }) });
}
function qv({ dashboard: c, pending: o, upcoming: m, onInspect: f, onOpenDay: _, onPrepare: p, onRetry: A, retryingId: M, affairFeedback: x, onDayComplete: v, dayBusy: O, dayFeedback: N }) {
  const Y = R.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return c.items.forEach((I) => W.set(I.id, I)), c.affairs.forEach((I) => W.set(I.id, { ...I, domain: "affair" })), c.courses.forEach((I) => W.set(I.id, { ...I, domain: "course" })), Array.from(W.values()).sort((I, w) => String($e(I) || "").localeCompare(String($e(w) || "")));
  }, [c.items, c.affairs, c.courses]), V = R.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return Y.forEach((I) => {
      const w = $e(I)?.slice(0, 10) || "未定日期";
      W.set(w, [...W.get(w) || [], I]);
    }), Array.from(W.entries()).sort(([I], [w]) => I.localeCompare(w));
  }, [Y]), ee = c.courses.filter((W) => W.start_at?.slice(0, 10) === c.localDate && W.status !== "已取消"), te = ee.filter((W) => W.status === "待上课"), he = ee.map((W) => W.end_at).filter(Boolean).sort().at(-1) || null, J = !!(he && Date.now() >= new Date(he).getTime()), me = O ? "处理中…" : N?.buttonLabel || (te.length ? "全部上完" : "已全部记录"), fe = O || !!N?.ok || !te.length || !J, ne = {
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
        ur[c.scope]
      ] }),
      /* @__PURE__ */ i.jsx("h2", { children: ne }),
      /* @__PURE__ */ i.jsx("p", { className: "subtle", children: "数据来自排课与事务系统实时回读。" })
    ] }) }),
    /* @__PURE__ */ i.jsx(Wv, { course: c.nextCourse || null, advice: c.commuteAdvice || null, onOpen: (W) => c.nextCourse && f(c.nextCourse, W), onPrepare: p }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid", children: [
      /* @__PURE__ */ i.jsx(la, { label: "课程", value: c.courses.length, hint: Ci(c.range), tone: "sage" }),
      /* @__PURE__ */ i.jsx(la, { label: "待办", value: o.length, hint: o[0]?.title || "没有积压", tone: "amber" }),
      /* @__PURE__ */ i.jsx(la, { label: "下一项", value: m ? Ht($e(m)) || "待定" : "无", hint: m?.title || "当前范围内已清空", tone: "blue" }),
      /* @__PURE__ */ i.jsx(la, { label: "系统", value: c.health?.ok ? "正常" : "异常", hint: `活动事务 ${c.health?.database?.verification?.counts?.active ?? "—"}`, tone: "ink" })
    ] }),
    c.scope === "today" && ee.length > 0 && /* @__PURE__ */ i.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ i.jsx("strong", { children: te.length ? `还有 ${te.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ i.jsx("span", { children: te.length && !J ? `最后一节 ${Ht(he)} 结束后可操作` : "提交后会写入本地课表并同步日历" }),
        N && /* @__PURE__ */ i.jsx("small", { className: N.ok ? "day-action-inline ok" : "day-action-inline error", children: N.text })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: fe,
          onClick: () => {
            v(c.localDate);
          },
          children: me
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: c.scope === "week" || c.scope === "month" ? "panel wide calendar-panel" : "panel wide", children: [
        /* @__PURE__ */ i.jsx(
          tl,
          {
            title: c.scope === "week" ? "周视图" : c.scope === "month" ? "月视图" : "时间轴",
            meta: Ci(c.range)
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
        c.scope === "week" ? /* @__PURE__ */ i.jsx(Bv, { items: Y, range: c.range, localDate: c.localDate, onInspect: f, onOpenDay: _, onPrepare: p, onRetry: A, retryingId: M, affairFeedback: x }) : c.scope === "month" ? /* @__PURE__ */ i.jsx(Hv, { items: Y, range: c.range, localDate: c.localDate, onOpenDay: _ }) : V.length ? V.map(([W, I]) => /* @__PURE__ */ i.jsxs("div", { className: "day-group", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "day-label", children: [
            /* @__PURE__ */ i.jsx("strong", { children: W === "未定日期" ? W : el(`${W}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              I.length,
              " 项"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "timeline-list", children: I.map((w) => /* @__PURE__ */ i.jsx(Iv, { item: w, onInspect: f, onPrepare: p, onRetry: A, retryingId: M, feedback: x[w.id] }, w.id)) })
        ] }, W)) : /* @__PURE__ */ i.jsx($t, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
      ] }),
      /* @__PURE__ */ i.jsx("aside", { className: "side-stack overview-side", children: /* @__PURE__ */ i.jsxs("div", { className: "panel pending-action-panel", children: [
        /* @__PURE__ */ i.jsx(tl, { title: "待处理", meta: `${o.length} 项` }),
        o.length ? o.slice(0, 4).map((W) => /* @__PURE__ */ i.jsx(Pv, { item: W, onInspect: f, onPrepare: p, onRetry: A, retryingId: M, feedback: x[W.id] }, W.id)) : /* @__PURE__ */ i.jsx($t, { title: "没有待处理事务", text: "当前队列是干净的。", compact: !0 })
      ] }) })
    ] })
  ] });
}
function Di({ item: c, onPrepare: o, onRetry: m, retryingId: f, feedback: _, compact: p = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(c.status)) return null;
  const M = c.start_at?.slice(0, 10), x = c.start_at?.slice(11, 16);
  if (c.domain === "course")
    return !M || !x ? null : /* @__PURE__ */ i.jsxs("div", { className: `item-action-buttons${p ? " compact" : ""}`, onClick: (O) => O.stopPropagation(), children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", onClick: () => o({ operation: "course_move", student: c.title, fromDate: M, fromTime: x, toDate: M, toTime: x, duration: c.duration }), children: "调整时间" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => o({ operation: "course_cancel", student: c.title, date: M, time: x }), children: "本次不上" })
    ] });
  const v = f === c.id;
  return /* @__PURE__ */ i.jsxs("div", { className: `item-action-buttons${p ? " compact" : ""}`, onClick: (O) => O.stopPropagation(), children: [
    /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", onClick: () => o({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成" }),
    c.retry && m ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: !!f || !!_?.ok, "aria-busy": v, onClick: () => {
      m(c);
    }, children: v ? "处理中…" : _?.buttonLabel || "没约上" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => o({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
  ] });
}
function qm(c) {
  return rr(c)[0]?.laneCount || 1;
}
function Bm() {
  const c = R.useRef(null), o = R.useRef(null), m = R.useCallback((p) => {
    if (p.button !== 0 || p.target.closest("button, article, a, input, select, textarea")) return;
    const A = c.current;
    !A || A.scrollWidth <= A.clientWidth || (o.current = { pointerId: p.pointerId, startX: p.clientX, scrollLeft: A.scrollLeft }, A.setPointerCapture(p.pointerId), A.classList.add("dragging"));
  }, []), f = R.useCallback((p) => {
    const A = c.current, M = o.current;
    !A || !M || M.pointerId !== p.pointerId || (A.scrollLeft = M.scrollLeft - (p.clientX - M.startX));
  }, []), _ = R.useCallback((p) => {
    const A = c.current, M = o.current;
    !A || !M || M.pointerId !== p.pointerId || (A.hasPointerCapture(p.pointerId) && A.releasePointerCapture(p.pointerId), A.classList.remove("dragging"), o.current = null);
  }, []);
  return { ref: c, onPointerDown: m, onPointerMove: f, onPointerUp: _, onPointerCancel: _ };
}
function Bv({ items: c, range: o, localDate: m, onInspect: f, onOpenDay: _, onPrepare: p, onRetry: A, retryingId: M, affairFeedback: x }) {
  const v = R.useMemo(() => ar(o, m), [o, m]), O = Bm(), [N, Y] = R.useState(() => window.matchMedia("(max-width: 900px)").matches), [V, ee] = R.useState(0), [te, he] = R.useState(null), J = R.useMemo(() => N ? Mm(v, V, 3) : v, [N, v, V]);
  R.useEffect(() => {
    const b = window.matchMedia("(max-width: 900px)"), d = () => Y(b.matches);
    return b.addEventListener("change", d), () => b.removeEventListener("change", d);
  }, []), R.useEffect(() => {
    ee(0), he(null);
  }, [o]), R.useEffect(() => {
    if (!te) return;
    const b = (d) => {
      d.key === "Escape" && he(null);
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [te]);
  const me = R.useMemo(() => {
    const b = /* @__PURE__ */ new Map();
    return c.forEach((d) => {
      const G = wi(d);
      G && b.set(G, [...b.get(G) || [], d]);
    }), b.forEach((d, G) => b.set(G, [...d].sort((L, se) => String($e(L) || "").localeCompare(String($e(se) || ""))))), b;
  }, [c]), fe = R.useMemo(() => new Map(v.map((b) => [b, qm((me.get(b) || []).filter((d) => d.start_at || d.deadline_at))])), [me, v]), ne = R.useMemo(() => {
    const b = /* @__PURE__ */ new Map();
    for (const d of v) {
      const G = (me.get(d) || []).filter((L) => L.start_at || L.deadline_at);
      b.set(d, rr(G));
    }
    return b;
  }, [me, v]), W = J.map((b) => b && fe.get(b) || 1), I = W.reduce((b, d) => b + d, 0), w = `52px ${W.map((b) => `minmax(0, ${b}fr)`).join(" ")}`, P = N ? `calc(100% * ${I / J.length})` : `${Math.ceil(1080 * I / J.length)}px`, B = c.filter((b) => b.start_at || b.deadline_at), ze = N ? B.filter((b) => J.includes(wi(b))) : B, { startHour: Ae, endHour: je } = Om(ze), et = N ? 76 : 64, Ue = (je - Ae) * et, Ve = Array.from({ length: je - Ae + 1 }, (b, d) => Ae + d);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    N && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本周日期页", children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: V === 0, onClick: () => ee((b) => Math.max(0, b - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ i.jsxs("strong", { children: [
        "第 ",
        V + 1,
        "/3 页 · 每页 3 天"
      ] }),
      /* @__PURE__ */ i.jsx("button", { type: "button", disabled: V === 2, onClick: () => ee((b) => Math.min(2, b + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "一周时间视图，可使用方向键或触控横向浏览", ...O, children: /* @__PURE__ */ i.jsxs("div", { className: N ? "week-calendar-canvas compact-page" : "week-calendar-canvas", style: { minWidth: P }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: w }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-corner", children: "时间" }),
        J.map((b, d) => b ? /* @__PURE__ */ i.jsxs("button", { type: "button", className: b === m ? "week-day-header today" : "week-day-header", onClick: (G) => _(b, G.currentTarget), children: [
          /* @__PURE__ */ i.jsx("span", { children: el(`${b}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(b.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            me.get(b)?.length || 0,
            " 项"
          ] })
        ] }, b) : /* @__PURE__ */ i.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${d}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: w }, onPointerDown: (b) => {
        b.target.closest(".week-time-block") || he(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "week-time-axis", style: { height: Ue }, children: Ve.map((b) => /* @__PURE__ */ i.jsxs("span", { style: { top: (b - Ae) * et }, children: [
          String(b).padStart(2, "0"),
          ":00"
        ] }, b)) }),
        J.map((b, d) => {
          if (!b) return /* @__PURE__ */ i.jsx("div", { className: "week-day-track empty-slot", style: { height: Ue }, "aria-hidden": "true" }, `empty-${d}`);
          const G = ne.get(b) || [];
          return /* @__PURE__ */ i.jsx("div", { className: b === m ? "week-day-track today" : "week-day-track", style: { height: Ue }, children: G.map(({ item: L, lane: se, laneCount: y }) => {
            const C = Um(L, Ae, je, et);
            if (!C) return null;
            const X = 100 / y, Q = L.start_at || L.deadline_at, re = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(L.status) && (L.domain === "affair" || !!L.start_at), pe = re && te === L.id;
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${L.domain} ${yn(L)}${hn(L) ? " temporary" : ""}${re ? " actionable" : ""}${pe ? " action-open" : ""}`,
                style: { top: C.top, height: C.height, left: `calc(${se * X}% + 4px)`, width: `calc(${X}% - 8px)` },
                tabIndex: 0,
                role: "button",
                "aria-expanded": re ? pe : void 0,
                onClick: (k) => {
                  k.target.closest("button") || (re && window.matchMedia("(hover: none)").matches ? he((ue) => ue === L.id ? null : L.id) : f(L, k.currentTarget));
                },
                onKeyDown: (k) => {
                  k.key === "Enter" ? (k.preventDefault(), f(L, k.currentTarget)) : k.key === " " ? (k.preventDefault(), re && he((ue) => ue === L.id ? null : L.id)) : k.key === "Escape" && he(null);
                },
                "data-item-id": L.id,
                "aria-label": `${Ht(Q)} ${L.title}，${L.domain === "course" ? `${L.duration || "—"} 分钟课程` : "事务"}${re ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ i.jsxs("strong", { children: [
                    Ht(Q),
                    " · ",
                    L.title
                  ] }),
                  /* @__PURE__ */ i.jsx("span", { children: L.domain === "course" ? `${L.duration || "—"} 分钟` : L.estimated_minutes ? `${L.estimated_minutes} 分钟 · 事务` : "事务" }),
                  re && /* @__PURE__ */ i.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ i.jsx(Di, { item: L, onPrepare: (k) => {
                    he(null), p(k);
                  }, onRetry: A, retryingId: M, feedback: x[L.id], compact: !0 }) })
                ]
              },
              L.id
            );
          }) }, b);
        })
      ] })
    ] }) })
  ] });
}
function Hv({ items: c, range: o, localDate: m, onOpenDay: f }) {
  const _ = R.useMemo(() => Av(o, m), [o, m]), p = (o.match(/\d{4}-\d{2}-\d{2}/) || [m])[0].slice(0, 7), A = R.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    return c.forEach((v) => {
      const O = wi(v);
      O && x.set(O, [...x.get(O) || [], v]);
    }), x.forEach((v, O) => x.set(O, [...v].sort((N, Y) => String($e(N) || "").localeCompare(String($e(Y) || ""))))), x;
  }, [c]), M = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ i.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ i.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ i.jsx("div", { className: "month-weekdays", children: M.map((x) => /* @__PURE__ */ i.jsxs("span", { children: [
      "周",
      x
    ] }, x)) }),
    /* @__PURE__ */ i.jsx("div", { className: "month-grid", children: _.map((x) => {
      const v = A.get(x) || [], O = ["month-cell"];
      return x.startsWith(p) || O.push("outside"), x === m && O.push("today"), /* @__PURE__ */ i.jsxs("button", { type: "button", className: O.join(" "), onClick: (N) => f(x, N.currentTarget), children: [
        /* @__PURE__ */ i.jsxs("header", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: Number(x.slice(8, 10)) }),
          /* @__PURE__ */ i.jsx("span", { children: v.length ? `${v.length} 项` : "" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "month-item-list", children: [
          v.slice(0, 3).map((N) => /* @__PURE__ */ i.jsxs("span", { className: `month-item ${N.domain} ${yn(N)}${hn(N) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ i.jsx("i", {}),
            Ht($e(N)) || "待定",
            " · ",
            N.title
          ] }, N.id)),
          v.length > 3 && /* @__PURE__ */ i.jsxs("span", { className: "month-more", children: [
            "＋",
            v.length - 3,
            " 项"
          ] })
        ] })
      ] }, x);
    }) })
  ] }) });
}
function Lv({ onAction: c, onAskAi: o, refreshKey: m, scheduleText: f, onDataChanged: _ }) {
  const [p, A] = R.useState(null), [M, x] = R.useState(""), [v, O] = R.useState("calendar"), [N, Y] = R.useState("issues"), [V, ee] = R.useState(!1), [te, he] = R.useState(null), [J, me] = R.useState(!1), [fe, ne] = R.useState(null), [W, I] = R.useState({});
  R.useEffect(() => {
    let d = !1;
    return sl("api/planning").then((G) => {
      d || (A(Mv(G)), x(""), he(null));
    }).catch((G) => {
      d || x(G.message || "筹备数据读取失败");
    }), () => {
      d = !0;
    };
  }, [m]), R.useEffect(() => {
    const d = Object.entries(W).at(-1);
    if (!d || !d[1].ok || fe === d[0]) return;
    const G = window.setTimeout(() => {
      I((L) => {
        const se = { ...L };
        return delete se[d[0]], se;
      });
    }, 4500);
    return () => window.clearTimeout(G);
  }, [fe, W]);
  async function w() {
    if (!(!p || J)) {
      me(!0), he(null);
      try {
        he(await sl(`api/planning/template-check?monday=${encodeURIComponent(p.weekMonday)}`));
      } catch (d) {
        he({ ok: !1, passed: !1, monday: p.weekMonday, output: "", affectedDates: [], error: d.message });
      } finally {
        me(!1);
      }
    }
  }
  async function P(d) {
    if (!fe) {
      ne(d), I((G) => ({ ...G, [d]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const G = await sl("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: d })
        });
        if (!G.ok) throw new Error(G.error || "预留确认失败");
        A((L) => L && {
          ...L,
          summary: { ...L.summary, formalCourseCount: L.summary.formalCourseCount + 1 },
          reservations: L.reservations.map((se) => se.reservation_id === d ? { ...se, status: "已确认" } : se),
          audit: {
            ...L.audit,
            reservation_hard_blockers: L.audit.reservation_hard_blockers.filter((se) => se.reservation_id !== d)
          }
        }), I((L) => ({ ...L, [d]: { ok: !0, text: G.message || "已确认落课" } })), _({ silent: !0 });
      } catch (G) {
        I((L) => ({ ...L, [d]: { ok: !1, text: `确认失败：${G.message || "未知错误"}` } })), _({ silent: !0 });
      } finally {
        ne(null);
      }
    }
  }
  if (M) return /* @__PURE__ */ i.jsx(mn, { tone: "error", title: "筹备数据读取失败", text: M });
  if (!p) return /* @__PURE__ */ i.jsx(Lm, {});
  const B = p.summary, ze = p.students.filter((d) => d.confirmed && d.zone !== "未分区" && (d.availability.length > 0 || d.hasReservation)).length, Ae = B.activeStudentCount ? Math.round(ze / B.activeStudentCount * 100) : 100, je = p.commute.overlaps.length + p.commute.missingRoutes.length, et = new Map(p.audit.reservation_hard_blockers.map((d) => [d.reservation_id, d.reasons])), Ue = p.students.filter((d) => N === "all" ? !0 : N === "availability" ? !d.availability.length && !d.hasReservation : N === "zone" ? d.zone === "未分区" : N === "pending" ? !!d.pendingWeekday || !d.confirmed : d.issues.length > 0), Ve = V ? Ue : Ue.slice(0, 10), b = p.sources.filter((d) => !d.ok);
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ i.jsx(fr, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    b.length > 0 && /* @__PURE__ */ i.jsx(mn, { tone: "warn", title: `${b.length} 项筹备数据读取异常`, text: b.map((d) => `${d.label}：${d.message || "读取失败"}`).join("；") }),
    B.reservationHardBlockerCount > 0 && /* @__PURE__ */ i.jsx(mn, { tone: "warn", title: `${B.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: p.audit.reservation_hard_blockers.map((d) => `${d.student} ${d.date}：${d.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ i.jsx("nav", { className: "planning-subnav", "aria-label": "筹备页内部导航", children: [
      ["calendar", "周视图", p.reservations.length + p.templates.length],
      ["readiness", "准备度", B.unzonedCount + B.missingAvailabilityCount + B.unconfirmedActiveCount],
      ["students", "学生资料", p.students.filter((d) => d.issues.length).length],
      ["candidates", "候选与预留", je + B.reservationCount],
      ["review", "复核与证据", B.reviewCount + B.overdueCount + b.length]
    ].map(([d, G, L]) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: v === d ? "selected" : "", "aria-label": `${G}${L > 0 ? `，${L} 项` : ""}`, "aria-pressed": v === d, onClick: () => O(d), children: [
      /* @__PURE__ */ i.jsx("span", { children: G }),
      L > 0 && /* @__PURE__ */ i.jsx("strong", { children: L })
    ] }, d)) }),
    /* @__PURE__ */ i.jsx(Yv, { planning: p, hidden: v !== "calendar", onConfirmReservation: P, onAction: c, confirmingReservationId: fe, reservationFeedback: W }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: v !== "readiness", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ i.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ i.jsxs("strong", { children: [
          ze,
          "/",
          B.activeStudentCount
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
        /* @__PURE__ */ i.jsx("strong", { children: B.reservationCount }),
        /* @__PURE__ */ i.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ i.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ i.jsx("strong", { children: B.formalCourseCount }),
        /* @__PURE__ */ i.jsx("small", { children: B.reviewCount + B.overdueCount ? `${B.reviewCount + B.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-summary-strip", hidden: v !== "readiness", children: [
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot amber" }),
        "未分区 ",
        /* @__PURE__ */ i.jsx("strong", { children: B.unzonedCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot blue" }),
        "缺候选时间 ",
        /* @__PURE__ */ i.jsx("strong", { children: B.missingAvailabilityCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot ink" }),
        "未确认在读 ",
        /* @__PURE__ */ i.jsx("strong", { children: B.unconfirmedActiveCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot sage" }),
        "待定名单 ",
        /* @__PURE__ */ i.jsx("strong", { children: B.pendingCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { children: [
        /* @__PURE__ */ i.jsx("i", { className: "dot rose" }),
        "出游约束 ",
        /* @__PURE__ */ i.jsx("strong", { children: B.activeVacationCount })
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "planning-contract", children: [
        "contract ",
        p.contract.version ?? "—",
        " · schema ",
        p.contract.schemaVersion ?? "—",
        " · ",
        Ci(p.range)
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-overview-grid", hidden: v !== "readiness", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ i.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            B.activeStudentCount - ze,
            " 人仍有关键资料缺口。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            Y("availability"), O("students");
          }, children: [
            "缺候选时间 ",
            B.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            Y("zone"), O("students");
          }, children: [
            "未分区 ",
            B.unzonedCount
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", onClick: () => {
            Y("pending"), O("students");
          }, children: [
            "待确认 ",
            B.unconfirmedActiveCount + B.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ i.jsx("h3", { children: je ? "候选生成前还有硬约束" : "可以进入候选预演" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            je,
            " 项重叠或通勤缺口；",
            B.templateAvailabilityAdvisoryCount,
            " 项长期候选时间差异仅作提示。"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => O("candidates"), children: "查看候选与预留" }),
          B.reviewCount + B.overdueCount + b.length > 0 && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => O("review"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "panel planning-student-panel", hidden: v !== "students", children: [
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
        ].map(([d, G]) => /* @__PURE__ */ i.jsx("button", { type: "button", className: N === d ? "selected" : "", onClick: () => {
          Y(d), ee(!1);
        }, children: G }, d)) })
      ] }),
      Ue.length ? /* @__PURE__ */ i.jsxs("div", { className: "planning-student-list", children: [
        Ve.map((d) => {
          const G = d.availability.length ? d.availability.map((L) => `${L.weekday} ${L.start_time}-${L.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ i.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ i.jsx("strong", { children: d.name }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                d.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ i.jsx("span", { className: d.confirmed ? "state-good" : "state-warn", children: d.pendingWeekday ? `${d.pendingWeekday}待定` : d.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "片区" }),
              /* @__PURE__ */ i.jsx("span", { className: d.zone === "未分区" ? "state-warn" : "", children: d.zone })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ i.jsx("span", { className: !d.availability.length && !d.hasReservation ? "state-warn" : "", title: G, children: d.availability.length ? G : d.hasReservation ? "已有单日预留" : G })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ i.jsx("small", { children: "约束" }),
              /* @__PURE__ */ i.jsx("span", { children: d.vacations.length ? d.vacations.map((L) => `至 ${L.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "planning-row-actions", children: [
              d.zone === "未分区" && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "zone_set", student: d.name }), children: "设片区" }),
              !d.availability.length && !d.hasReservation && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "availability_set", student: d.name, weekday: d.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_add", student: d.name, duration: d.duration, zone: d.zone === "未分区" ? "" : d.zone }), children: "预留" })
            ] })
          ] }, d.sourceName);
        }),
        Ue.length > 10 && /* @__PURE__ */ i.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => ee((d) => !d), children: V ? "收起学生列表" : `再看 ${Ue.length - 10} 人` })
      ] }) : /* @__PURE__ */ i.jsx($t, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      p.inactiveConfirmed.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          p.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-student-context", hidden: v !== "students", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ i.jsx("span", { children: p.pending.map((d) => d.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ i.jsx("span", { children: p.vacations.map((d) => `${d.student} ${d.start_date.slice(5)}—${d.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ i.jsx("span", { children: p.zones.map((d) => `${d.zone} ${d.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-two-column", hidden: v !== "candidates", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ i.jsx(tl, { title: "课程预留", meta: `${p.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        p.reservations.length ? /* @__PURE__ */ i.jsx("div", { className: "reservation-card-list", children: p.reservations.map((d) => {
          const G = (d.conflicts?.formal_courses?.length || 0) + (d.conflicts?.soft_reservations?.length || 0), L = et.get(d.reservation_id) || [], se = `reservation-blocker-${d.reservation_id}`, y = d.status === "已确认" ? "已落课" : d.status === "预期" ? "待落课" : d.status, C = L.length ? "blocked" : d.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ i.jsxs("article", { className: `reservation-card ${C}`, children: [
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ i.jsx("strong", { children: d.reservation_date.slice(5) }),
              /* @__PURE__ */ i.jsx("span", { children: d.weekday })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ i.jsx("strong", { children: d.student }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                d.start_time,
                "-",
                d.end_time,
                " · ",
                d.duration,
                " 分钟",
                d.zone ? ` · ${d.zone}` : ""
              ] }),
              /* @__PURE__ */ i.jsxs("small", { id: se, children: [
                y,
                G ? ` · ${G} 项软冲突` : "",
                L.length ? ` · 硬约束：${L.join("、")}` : "",
                d.note ? ` · ${d.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "reservation-actions", children: d.status === "预期" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_update", reservationId: d.reservation_id, date: d.reservation_date, time: d.start_time, duration: d.duration, zone: d.zone || "", note: d.note || "" }), children: "调整时间" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: L.length > 0, "aria-describedby": L.length ? se : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: d.reservation_id }), children: L.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "quiet-danger", onClick: () => c({ operation: "reservation_cancel", reservationId: d.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ i.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              y
            ] }) })
          ] }, d.reservation_id);
        }) }) : /* @__PURE__ */ i.jsx($t, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时长期候选时间只作提示，硬冲突和通勤仍会校验。", compact: !0 })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ i.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              B.templateCount,
              " 条模板 · ",
              p.commute.requiredRouteCount,
              " 段相邻通勤"
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", disabled: J, onClick: () => {
            w();
          }, children: J ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ i.jsx(Is, { label: "时间重叠", count: p.commute.overlaps.length, tone: "danger", details: p.commute.overlaps.slice(0, 3).map((d) => `${d.weekday} ${d.first} ${d.firstRange} / ${d.second} ${d.secondRange}`) }),
          /* @__PURE__ */ i.jsx(Is, { label: "长期候选时间差异", count: p.commute.availabilityConflicts.length, tone: "neutral", details: p.commute.availabilityConflicts.slice(0, 3).map((d) => `${d.student} ${d.weekday} ${d.startTime}-${d.endTime}（仅提示）`) }),
          /* @__PURE__ */ i.jsx(Is, { label: "缺相邻通勤", count: p.commute.missingRoutes.length, tone: "neutral", details: p.commute.missingRoutes.slice(0, 3).map((d) => `${d.weekday} ${d.from} → ${d.to}`) })
        ] }),
        p.commute.missingRoutes.slice(0, 2).map((d) => /* @__PURE__ */ i.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: d.from, toStudent: d.to }), children: [
          "补录 ",
          d.from,
          " → ",
          d.to
        ] }, `${d.weekday}-${d.from}-${d.to}`)),
        te && /* @__PURE__ */ i.jsxs("div", { className: te.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ i.jsx("strong", { children: te.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ i.jsx("pre", { children: te.error || te.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    v === "review" && (p.reviews.length > 0 || B.overdueCount > 0) && /* @__PURE__ */ i.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ i.jsx(tl, { title: "历史课程复核", meta: `${p.reviews.length} 节待确认 · ${B.overdueCount} 节过期待转入`, action: B.overdueCount ? `处理 ${B.overdueCount} 节过期课` : void 0, onAction: B.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ i.jsx("div", { className: "review-card-list", children: p.reviews.map((d) => /* @__PURE__ */ i.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("strong", { children: d.student }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            d.date,
            " · ",
            d.start_time,
            "-",
            d.end_time
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: d.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: d.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, d.course_id)) })
    ] }),
    v === "review" && p.reviews.length === 0 && B.overdueCount === 0 && /* @__PURE__ */ i.jsx("section", { className: "panel", children: /* @__PURE__ */ i.jsx($t, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ i.jsxs("section", { className: "planning-detail-grid", hidden: v !== "review", children: [
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "过期待转入：" }),
            B.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "人工待复核：" }),
            B.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx("strong", { children: "读取异常：" }),
            b.length,
            " 项"
          ] }),
          /* @__PURE__ */ i.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ i.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ i.jsx("div", { className: "source-status-list", children: p.sources.map((d) => /* @__PURE__ */ i.jsxs("span", { className: d.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ i.jsx("i", {}),
          d.label
        ] }, d.label)) }),
        /* @__PURE__ */ i.jsxs("pre", { children: [
          Object.values(p.raw).filter(Boolean).join(`

`),
          f ? `

── 底层课表文本 ──
${f}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Yv({ planning: c, hidden: o, onConfirmReservation: m, onAction: f, confirmingReservationId: _, reservationFeedback: p }) {
  const [A, M] = R.useState("reservation"), [x, v] = R.useState(null), O = Bm(), [N, Y] = R.useState(c.weekMonday), [V, ee] = R.useState(() => window.matchMedia("(max-width: 900px)").matches), [te, he] = R.useState(0), J = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], me = R.useMemo(() => ar(`${N}..${N}`, N), [N]), fe = 3, ne = R.useMemo(() => V ? Mm(me, te, 3) : me, [V, me, te]);
  R.useEffect(() => {
    Y(c.weekMonday);
  }, [c.weekMonday]), R.useEffect(() => {
    const k = window.matchMedia("(max-width: 900px)"), ue = () => ee(k.matches);
    return k.addEventListener("change", ue), () => k.removeEventListener("change", ue);
  }, []), R.useEffect(() => {
    he(0), v(null);
  }, [N, A]);
  const W = R.useMemo(() => sr(c.range), [c.range]), I = R.useMemo(() => ar(c.range, c.localDate)[0], [c.range, c.localDate]), w = N > I, P = !!(W.end && Ea(N, 7) <= W.end), B = R.useMemo(() => new Map(c.students.map((k) => [k.name, k])), [c.students]), ze = R.useMemo(() => new Map(c.pending.map((k) => [k.student, k])), [c.pending]), Ae = R.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((k) => [k.reservation_id, k.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), je = R.useMemo(() => {
    const k = (oe, K = "在读") => K !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : ze.has(oe) ? { studentState: "待定", stateClass: "pending" } : B.get(oe)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, ue = (oe) => ({
      ...oe,
      start_at: `${oe.date}T${oe.start_time}:00+08:00`,
      end_at: `${oe.date}T${oe.end_time}:00+08:00`
    });
    return A === "reservation" ? c.reservations.filter((oe) => oe.reservation_date >= me[0] && oe.reservation_date <= me[6] && oe.status !== "已取消").map((oe) => {
      const K = Ae.get(oe.reservation_id), tt = (oe.student_status || "在读") !== "在读", bt = oe.status === "已确认";
      return ue({
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
        studentState: tt ? "已暂停" : bt ? "已落课" : K ? "有硬约束" : "待落课",
        stateClass: tt ? "paused" : bt ? "landed" : K ? "blocked" : "expected",
        zone: oe.zone,
        note: oe.note
      });
    }) : c.templates.flatMap((oe) => {
      const K = J.indexOf(oe.weekday);
      if (K < 0) return [];
      const tt = me[K], bt = k(oe.student, oe.student_status);
      return [ue({
        id: `template-${oe.template_id}`,
        kind: "template",
        student: oe.student,
        date: tt,
        weekday: oe.weekday,
        start_time: oe.start_time,
        end_time: oe.end_time,
        duration: oe.duration,
        studentState: bt.studentState,
        stateClass: bt.stateClass
      })];
    });
  }, [me, A, ze, c.reservations, c.templates, Ae, B]);
  R.useEffect(() => {
    x && !je.some((k) => k.id === x && k.kind === "reservation") && v(null);
  }, [je, x]), R.useEffect(() => {
    if (!x) return;
    const k = (ue) => {
      ue.key === "Escape" && v(null);
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [x]);
  const et = !!_, Ue = R.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    return je.forEach((ue) => k.set(ue.date, [...k.get(ue.date) || [], ue])), k;
  }, [je]), Ve = R.useMemo(() => new Map(me.map((k) => [k, qm(Ue.get(k) || [])])), [Ue, me]), b = R.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    for (const ue of me)
      k.set(ue, rr(Ue.get(ue) || []));
    return k;
  }, [Ue, me]), d = ne.map((k) => k && Ve.get(k) || 1), G = d.reduce((k, ue) => k + ue, 0), L = `52px ${d.map((k) => `minmax(0, ${k}fr)`).join(" ")}`, se = V ? `calc(100% * ${G / ne.length})` : `${Math.ceil(1080 * G / ne.length)}px`, y = V ? je.filter((k) => ne.includes(k.date)) : je, { startHour: C, endHour: X } = Om(y), Q = V ? 76 : 64, de = (X - C) * Q, re = Array.from({ length: X - C + 1 }, (k, ue) => C + ue), pe = `${el(`${me[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${el(`${me[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ i.jsxs("section", { className: `panel planning-week-panel ${A}-mode`, hidden: o, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ i.jsx("h3", { children: A === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ i.jsx("span", { children: A === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: A === "reservation" ? "selected" : "", "aria-pressed": A === "reservation", onClick: () => M("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.reservations.length })
          ] }),
          /* @__PURE__ */ i.jsxs("button", { type: "button", className: A === "template" ? "selected" : "", "aria-pressed": A === "template", onClick: () => M("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ i.jsx("strong", { children: c.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "上一周", disabled: !w, onClick: () => Y((k) => Ea(k, -7)), children: "‹" }),
          /* @__PURE__ */ i.jsx("strong", { children: pe }),
          /* @__PURE__ */ i.jsx("button", { type: "button", "aria-label": "下一周", disabled: !P, onClick: () => Y((k) => Ea(k, 7)), children: "›" })
        ] }),
        V && /* @__PURE__ */ i.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本周日期页", children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: te === 0, onClick: () => he((k) => Math.max(0, k - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "第 ",
            te + 1,
            "/",
            fe,
            " 页 · 每页 3 天"
          ] }),
          /* @__PURE__ */ i.jsx("button", { type: "button", disabled: te === fe - 1, onClick: () => he((k) => Math.min(fe - 1, k + 1)), children: "下一页 ›" })
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
    je.length ? /* @__PURE__ */ i.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，可使用方向键或触控横向浏览", ...O, children: /* @__PURE__ */ i.jsxs("div", { className: V ? "planning-week-canvas compact-page" : "planning-week-canvas", style: { minWidth: se }, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: L }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-corner", children: "时间" }),
        ne.map((k, ue) => k ? /* @__PURE__ */ i.jsxs("div", { className: k === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", children: [
          /* @__PURE__ */ i.jsx("span", { children: J[me.indexOf(k)] }),
          /* @__PURE__ */ i.jsx("strong", { children: Number(k.slice(8, 10)) }),
          /* @__PURE__ */ i.jsxs("small", { children: [
            Ue.get(k)?.length || 0,
            " 项"
          ] })
        ] }, k) : /* @__PURE__ */ i.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${ue}`))
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: L }, onPointerDown: (k) => {
        k.target.closest(".planning-week-block") || v(null);
      }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "planning-week-axis", style: { height: de }, children: re.map((k) => /* @__PURE__ */ i.jsxs("span", { style: { top: (k - C) * Q }, children: [
          String(k).padStart(2, "0"),
          ":00"
        ] }, k)) }),
        ne.map((k, ue) => {
          if (!k) return /* @__PURE__ */ i.jsx("div", { className: "planning-week-track empty-slot", style: { height: de }, "aria-hidden": "true" }, `empty-${ue}`);
          const oe = b.get(k) || [];
          return /* @__PURE__ */ i.jsx("div", { className: k === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: de }, children: oe.map(({ item: K, lane: tt, laneCount: bt }) => {
            const yt = Um(K, C, X, Q);
            if (!yt) return null;
            const wt = 100 / bt, vt = K.kind === "reservation" && K.reservationStatus === "预期", zl = K.kind === "reservation" && K.reservationStatus === "已确认", at = !!(K.reservationId && (vt || zl)), Ft = !!(vt && _ === K.reservationId), wl = !!(at && (x === K.id || Ft)), rl = K.reservationId ? p[K.reservationId] : void 0, vn = !!(et || K.blockerText || K.stateClass === "paused");
            return /* @__PURE__ */ i.jsxs(
              "article",
              {
                className: `planning-week-block ${K.kind} ${K.stateClass}${at ? " actionable" : ""}${wl ? " action-open" : ""}`,
                tabIndex: at ? 0 : void 0,
                role: at ? "button" : void 0,
                "aria-expanded": at ? wl : void 0,
                "aria-label": `${K.start_time}-${K.end_time} ${K.student}，${K.studentState}${K.zone ? `，${K.zone}` : ""}${vt ? "；移入或点击后可调整时间、确认落课" : zl ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (st) => {
                  at && !st.target.closest("button") && v((Ze) => Ze === K.id ? null : K.id);
                },
                onKeyDown: (st) => {
                  at && (st.key === "Enter" || st.key === " " ? (st.preventDefault(), v((Ze) => Ze === K.id ? null : K.id)) : st.key === "Escape" && (st.preventDefault(), v(null)));
                },
                style: { top: yt.top, height: yt.height, left: `calc(${tt * wt}% + 4px)`, width: `calc(${wt}% - 8px)` },
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
                    /* @__PURE__ */ i.jsx("div", { className: "planning-week-inline-buttons", children: vt ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", disabled: et, onClick: () => {
                        v(null), f({ operation: "reservation_update", reservationId: K.reservationId, date: K.date, time: K.start_time, duration: K.duration, zone: K.zone || "", note: K.note || "" });
                      }, children: "调整时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary", disabled: vn, "aria-busy": Ft, onClick: () => {
                        const st = m(K.reservationId);
                        st && typeof st.then == "function" && st.finally(() => v(null));
                      }, children: Ft ? "确认中…" : et ? "处理中…" : K.stateClass === "paused" ? "学生已暂停" : K.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "secondary", onClick: () => f({ operation: "course_move", student: K.student, fromDate: K.date, fromTime: K.start_time, toDate: K.date, toTime: K.start_time, duration: K.duration }), children: "调整时间" }),
                      /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger", onClick: () => f({ operation: "course_cancel", student: K.student, date: K.date, time: K.start_time }), children: "本次不上" })
                    ] }) }),
                    (K.blockerText || rl) && /* @__PURE__ */ i.jsx("small", { className: rl?.ok ? "ok" : "error", children: rl?.text || K.blockerText })
                  ] })
                ]
              },
              K.id
            );
          }) }, k);
        })
      ] })
    ] }) }) : /* @__PURE__ */ i.jsx($t, { title: A === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: A === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function Is({ label: c, count: o, tone: m, details: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `template-issue ${m}`, children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("span", { children: c }),
      /* @__PURE__ */ i.jsx("strong", { children: o })
    ] }),
    f.length > 0 && /* @__PURE__ */ i.jsx("ul", { children: f.map((_) => /* @__PURE__ */ i.jsx("li", { children: _ }, _)) })
  ] });
}
const kv = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function Ps({ item: c, onInspect: o, onPrepare: m, onRetry: f, retryingId: _, feedback: p }) {
  const A = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), M = _ === c.id, x = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", v = Date.now(), O = c.deadline_at ? new Date(c.deadline_at).getTime() : null, N = O != null ? Math.ceil((O - v) / 864e5) : null, Y = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ i.jsxs(
    "article",
    {
      className: `affair-card ${x}${A ? " closed" : ""}`,
      "data-item-id": c.id,
      tabIndex: 0,
      role: "button",
      onClick: (V) => {
        V.target.closest("button") || o(c, V.currentTarget);
      },
      onKeyDown: (V) => {
        V.key === "Enter" && (V.preventDefault(), o(c, V.currentTarget));
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-when", children: [
          x === "timed" && c.start_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: Ht(c.start_at) }),
            /* @__PURE__ */ i.jsx("span", { children: el(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          x === "deadline" && c.deadline_at && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { children: el(c.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "截止",
              N != null && !A ? ` · 剩 ${N} 天` : ""
            ] })
          ] }),
          x === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ i.jsx("span", { children: c.window_label || "窗口未定" })
          ] }),
          x === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ i.jsx("span", { children: Y ? `下次 ${Y.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ i.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ i.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ i.jsx(Mi, { value: c.status }),
            c.note ? /* @__PURE__ */ i.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ i.jsx("em", { children: `提醒 ${el(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${Ht(c.next_prompt_at)}` }) : null
          ] }),
          x === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ i.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((V) => /* @__PURE__ */ i.jsx("i", { children: kv[V] || V }, V)) }) : null,
          p ? /* @__PURE__ */ i.jsx("small", { className: p.ok ? "affair-feedback ok" : "affair-feedback error", children: p.text }) : null
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "affair-card-actions", children: !A && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do primary", onClick: () => m({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成" }),
          c.retry && f ? /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!_ || !!p?.ok, "aria-busy": M, onClick: () => {
            f(c);
          }, children: M ? "处理中…" : p?.buttonLabel || "没约上" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => m({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Gv({ pending: c, affairs: o, onPrepare: m, onInspect: f, onRetry: _, retryingId: p, feedback: A }) {
  const M = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), x = o.filter((O) => !M.has(O.status)).sort((O, N) => String($e(O) || "").localeCompare(String($e(N) || ""))), v = o.filter((O) => M.has(O.status)).sort((O, N) => String($e(N) || "").localeCompare(String($e(O) || "")));
  return /* @__PURE__ */ i.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ i.jsx(fr, { eyebrow: "事务", title: "办事队列", description: "待确认、重试和当前时间范围内的事务集中展示。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid affairs-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide", children: [
        /* @__PURE__ */ i.jsx(tl, { title: "待处理", meta: `${c.length} 项` }),
        c.length ? c.map((O) => /* @__PURE__ */ i.jsx(Ps, { item: O, onInspect: f, onPrepare: m, onRetry: _, retryingId: p, feedback: A[O.id] }, O.id)) : /* @__PURE__ */ i.jsx($t, { title: "没有待处理事务", text: "当前队列没有积压。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "panel affair-record-panel", children: [
        /* @__PURE__ */ i.jsxs("section", { className: "affair-record-group scheduled", children: [
          /* @__PURE__ */ i.jsx(tl, { title: "已安排", meta: `${x.length} 项` }),
          x.length ? x.map((O) => /* @__PURE__ */ i.jsx(Ps, { item: O, onInspect: f, onPrepare: m, onRetry: _, retryingId: p, feedback: A[O.id] }, O.id)) : /* @__PURE__ */ i.jsx($t, { title: "暂无已安排事务", text: "当前时间范围内没有进行中的事务。", compact: !0 })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { className: "affair-record-group completed", children: [
          /* @__PURE__ */ i.jsx(tl, { title: "已完成／已取消", meta: `${v.length} 项` }),
          v.length ? v.map((O) => /* @__PURE__ */ i.jsx(Ps, { item: O, onInspect: f, onPrepare: m, onRetry: _, retryingId: p, feedback: A[O.id] }, O.id)) : /* @__PURE__ */ i.jsx($t, { title: "暂无完成记录", text: "结束后的事务会归档到这里。", compact: !0 })
        ] })
      ] })
    ] })
  ] });
}
function Vv({ pending: c, students: o, preset: m, aiDraft: f, preview: _, busy: p, onPreview: A, onAiPreview: M, onCommit: x, onClear: v, onClose: O }) {
  const [N, Y] = R.useState(m?.operation || "course_move"), [V, ee] = R.useState(m?.affairKind || "timed"), [te, he] = R.useState(m?.student || ""), [J, me] = R.useState(m?.duration || ""), [fe, ne] = R.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  R.useEffect(() => {
    m?.operation && Y(m.operation), m?.affairKind && ee(m.affairKind), m?.student && he(m.student), m?.duration && me(m.duration);
  }, [m]);
  function W(w) {
    w.preventDefault();
    const P = new FormData(w.currentTarget), B = { operation: N };
    for (const [ze, Ae] of P.entries())
      ze !== "operation" && String(Ae).trim() && (B[ze] = Ae);
    B.duration && (B.duration = Number(B.duration)), B.minutes !== void 0 && (B.minutes = Number(B.minutes)), B.expectedVersion && (B.expectedVersion = Number(B.expectedVersion)), N === "course_plan" && (B.moves = fe.map((ze) => ({ ...ze, duration: ze.duration ? Number(ze.duration) : void 0 }))), A(B);
  }
  function I(w, P, B) {
    ne((ze) => ze.map((Ae, je) => je === w ? { ...Ae, [P]: B } : Ae));
  }
  return /* @__PURE__ */ i.jsxs("div", { className: m ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ i.jsx(Kv, { initialDraft: f, preview: _, busy: p, onPreview: M, onCommit: x, onClear: v, onClose: O }),
    /* @__PURE__ */ i.jsxs("details", { className: "manual-operations", open: !!m, children: [
      /* @__PURE__ */ i.jsxs("summary", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ i.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ i.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ i.jsxs("form", { className: "panel operation-form", onSubmit: W, children: [
          /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ i.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ i.jsxs("select", { name: "operation", value: N, onChange: (w) => {
              Y(w.target.value), v();
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
          N === "course_move" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: m?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: m?.duration }),
            /* @__PURE__ */ i.jsx(ce, { name: "fromDate", label: "原日期", type: "date", defaultValue: m?.fromDate, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "fromTime", label: "原时间", type: "time", defaultValue: m?.fromTime, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "toDate", label: "新日期", type: "date", defaultValue: m?.toDate, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "toTime", label: "新时间", type: "time", defaultValue: m?.toTime, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!m?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料，也不绕过通勤和冲突。" })
              ] })
            ] })
          ] }),
          N === "course_cancel" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: m?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "课程日期", type: "date", defaultValue: m?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "课程时间", type: "time", defaultValue: m?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "reason", label: "取消原因（可选）", defaultValue: m?.reason })
          ] }),
          N === "course_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (w) => {
                    const P = o.find((B) => B.name === w.target.value);
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
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "日期", type: "date", defaultValue: m?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "时间", type: "time", defaultValue: m?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: J, onChange: (w) => me(w.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: m?.note }),
            /* @__PURE__ */ i.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ i.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!m?.overrideAvailability }),
              /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ i.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料，也不绕过通勤和冲突。" })
              ] })
            ] })
          ] }),
          N === "reservation_add" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "学生" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (w) => {
                    const P = o.find((B) => B.name === w.target.value);
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
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "预留日期", type: "date", defaultValue: m?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "预留时间", type: "time", defaultValue: m?.time, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "时长" }),
              /* @__PURE__ */ i.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: J, onChange: (w) => me(w.target.value) })
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "zone", label: "片区（可选）", defaultValue: m?.zone }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: m?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          N === "reservation_update" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: m?.reservationId || m?.id, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "预留日期", type: "date", defaultValue: m?.date, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "time", label: "预留时间", type: "time", defaultValue: m?.time, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "duration", label: "时长", type: "number", defaultValue: m?.duration, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "zone", label: "片区（可选）", defaultValue: m?.zone }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: m?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(N) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: m?.reservationId || m?.id, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：长期候选时间只作提示；出游、重复课程、老师冲突和通勤仍会校验。" })
          ] }),
          N === "zone_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", defaultValue: m?.student, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: m?.zone === "未分区" ? "" : m?.zone, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: m?.boundaryZones }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          N === "availability_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", defaultValue: m?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: m?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((w) => /* @__PURE__ */ i.jsx("option", { value: w, children: w }, w))
              ] })
            ] }),
            /* @__PURE__ */ i.jsx(ce, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: m?.windows, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          N === "availability_clear" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "student", label: "学生", defaultValue: m?.student, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "星期" }),
              /* @__PURE__ */ i.jsxs("select", { name: "weekday", defaultValue: m?.weekday || "", required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((w) => /* @__PURE__ */ i.jsx("option", { value: w, children: w }, w))
              ] })
            ] })
          ] }),
          N === "commute_set" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "fromStudent", label: "出发学生", defaultValue: m?.fromStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "toStudent", label: "到达学生", defaultValue: m?.toStudent, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: m?.minutes, required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "transport", label: "交通方式", defaultValue: m?.transport || "driving", required: !0 }),
            /* @__PURE__ */ i.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: m?.note }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          N === "quarantine_overdue" && /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          N === "course_review_resolve" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "courseId", label: "课程ID", type: "number", defaultValue: m?.courseId || m?.id, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ i.jsxs("select", { name: "resolution", defaultValue: m?.resolution || "done", children: [
                /* @__PURE__ */ i.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ i.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          N === "course_day_complete" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "date", label: "完成日期", type: "date", defaultValue: m?.date, required: !0 }),
            /* @__PURE__ */ i.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          N === "course_plan" && /* @__PURE__ */ i.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ i.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button", onClick: () => ne((w) => [...w, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            fe.map((w, P) => /* @__PURE__ */ i.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ i.jsx("span", { className: "plan-index", children: P + 1 }),
              /* @__PURE__ */ i.jsxs("select", { value: w.student || "", onChange: (B) => {
                const ze = o.find((Ae) => Ae.name === B.target.value);
                I(P, "student", B.target.value), ze && I(P, "duration", ze.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "学生" }),
                o.filter((B) => B.status === "在读").map((B) => /* @__PURE__ */ i.jsx("option", { value: B.name, children: B.name }, B.name))
              ] }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: w.fromDate || "", onChange: (B) => I(P, "fromDate", B.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: w.fromTime || "", onChange: (B) => I(P, "fromTime", B.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ i.jsx("input", { type: "date", value: w.toDate || "", onChange: (B) => I(P, "toDate", B.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { type: "time", value: w.toTime || "", onChange: (B) => I(P, "toTime", B.target.value), required: !0 }),
              /* @__PURE__ */ i.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: w.duration || "", onChange: (B) => I(P, "duration", B.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "plan-remove", disabled: fe.length <= 2, onClick: () => ne((B) => B.filter((ze, Ae) => Ae !== P)), children: "×" })
            ] }, P))
          ] }),
          N === "affair_create" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(ce, { name: "title", label: "事务标题", defaultValue: m?.title, required: !0 }),
            /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ i.jsx("span", { children: "类型" }),
              /* @__PURE__ */ i.jsxs("select", { name: "affairKind", value: V, onChange: (w) => ee(w.target.value), children: [
                /* @__PURE__ */ i.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ i.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ i.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ i.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            V === "timed" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            V === "deadline" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            V === "fuzzy" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
              /* @__PURE__ */ i.jsx(ce, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ i.jsx(ce, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            V === "retry" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(N) && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ i.jsx("span", { children: "事务" }),
              /* @__PURE__ */ i.jsxs("select", { name: "id", required: !0, defaultValue: m?.id || "", children: [
                /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((w) => /* @__PURE__ */ i.jsxs("option", { value: w.id, children: [
                  w.title,
                  " · ",
                  w.id
                ] }, w.id))
              ] })
            ] }),
            N === "affair_retry_next" && /* @__PURE__ */ i.jsx(ce, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: m?.expectedVersion })
          ] }),
          N === "calendar_sync" && /* @__PURE__ */ i.jsx(ce, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: m?.week }),
          /* @__PURE__ */ i.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ i.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ i.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ i.jsx("button", { className: "primary-button full", type: "submit", disabled: p, children: p ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(m || { operation: N })),
        /* @__PURE__ */ i.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ i.jsx(tl, { title: "执行预览", meta: _?.token ? `令牌 ${_.token.slice(0, 8)}…` : "等待操作" }),
          !_ && /* @__PURE__ */ i.jsx($t, { title: "尚未预演", text: "填写左侧表单后，先检查冲突、通勤、可用时间和事务版本。" }),
          _ && /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
            /* @__PURE__ */ i.jsxs("div", { className: _.canCommit ? "preview-status pass" : _.ok ? "preview-status neutral" : "preview-status fail", children: [
              /* @__PURE__ */ i.jsx("i", {}),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("strong", { children: _.canCommit ? "预演通过" : _.ok ? "执行结果" : "预演未通过" }),
                /* @__PURE__ */ i.jsx("span", { children: _.summary || _.error || "无摘要" })
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("pre", { children: _.message || _.error || JSON.stringify(_.result, null, 2) }),
            _.result && /* @__PURE__ */ i.jsxs("details", { className: "evidence-details", children: [
              /* @__PURE__ */ i.jsx("summary", { children: "查看执行证据" }),
              /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(_.result, null, 2) })
            ] }),
            _.canCommit && /* @__PURE__ */ i.jsxs("div", { className: "commit-box", children: [
              /* @__PURE__ */ i.jsx("p", { children: "提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。" }),
              /* @__PURE__ */ i.jsx("button", { type: "button", className: "danger-button", onClick: () => {
                x();
              }, disabled: p, children: p ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ i.jsx(Hm, { preview: _, onClose: O })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Xv = {
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
}, Qv = {
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
function Zv({ preview: c, busy: o, onCommit: m, onClose: f }) {
  const _ = c.operation || "", p = c.input || {}, A = Object.entries(p).filter(([x, v]) => v != null && v !== "" && !x.startsWith("_")), M = c.result?.affected_dates;
  return /* @__PURE__ */ i.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ i.jsxs("div", { className: c.canCommit ? "preview-status pass" : c.ok ? "preview-status neutral" : "preview-status fail", children: [
      /* @__PURE__ */ i.jsx("i", {}),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("strong", { children: c.canCommit ? "方案预演通过" : c.ok ? "执行结果" : "方案未通过" }),
        /* @__PURE__ */ i.jsx("span", { children: c.summary || c.error })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "preview-summary", children: [
      _ && /* @__PURE__ */ i.jsx("span", { className: "preview-op-badge", children: Xv[_] || _ }),
      A.length > 0 && /* @__PURE__ */ i.jsx("dl", { className: "preview-fields", children: A.map(([x, v]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { children: Qv[x] || x }),
        /* @__PURE__ */ i.jsx("dd", { children: String(v) })
      ] }, x)) }),
      M && M.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        M.map((x) => /* @__PURE__ */ i.jsx("span", { children: x.slice(5) }, x))
      ] })
    ] }),
    c.message && c.message !== c.summary && /* @__PURE__ */ i.jsx("pre", { className: "preview-message", children: c.message }),
    c.result && /* @__PURE__ */ i.jsxs("details", { className: "evidence-details", children: [
      /* @__PURE__ */ i.jsx("summary", { children: "查看执行证据" }),
      /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(c.result, null, 2) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "action-outcome-actions", children: [
      c.canCommit && /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
        m();
      }, disabled: o, children: o ? "正在提交…" : "确认执行此方案" }),
      /* @__PURE__ */ i.jsx(Hm, { preview: c, onClose: f })
    ] })
  ] });
}
function Kv({ initialDraft: c, preview: o, busy: m, onPreview: f, onCommit: _, onClear: p, onClose: A }) {
  const M = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, x = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [v, O] = R.useState([M]), [N, Y] = R.useState(""), [V, ee] = R.useState(!1), [te, he] = R.useState(""), J = R.useRef(nr());
  R.useEffect(() => () => J.current.invalidate(), []), R.useEffect(() => {
    c.nonce && (J.current.invalidate(), ee(!1), Y(c.text));
  }, [c.nonce, c.text]);
  function me() {
    J.current.invalidate(), ee(!1), O([M]), Y(""), he(""), p();
  }
  async function fe() {
    const ne = N.trim();
    if (!ne || V) return;
    const W = J.current.begin(), I = v.slice(-10);
    O((w) => [...w, { role: "user", text: ne }]), Y(""), ee(!0), he(""), p();
    try {
      const w = await sl("api/ai/interpret", {
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
      he(P), O((B) => [...B, { role: "assistant", text: `这次没有生成预演：${P}` }]);
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
      /* @__PURE__ */ i.jsx("button", { className: "row-action-button", type: "button", onClick: me, disabled: V, children: "清空对话" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: x.map((ne) => /* @__PURE__ */ i.jsx("button", { type: "button", onClick: () => Y(ne), children: ne }, ne)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          v.map((ne, W) => /* @__PURE__ */ i.jsx("div", { className: `ai-bubble ${ne.role}`, children: ne.text }, W)),
          V && /* @__PURE__ */ i.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        te && /* @__PURE__ */ i.jsx(mn, { tone: "error", title: "没有生成方案", text: te }),
        /* @__PURE__ */ i.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ i.jsx(
            "textarea",
            {
              value: N,
              onChange: (ne) => Y(ne.target.value),
              onKeyDown: (ne) => {
                ne.key === "Enter" && !ne.shiftKey && (ne.preventDefault(), fe());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            fe();
          }, disabled: !N.trim() || V, children: V ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ i.jsx(tl, { title: "AI 预演", meta: o?.token ? `令牌 ${o.token.slice(0, 8)}…` : "等待指令" }),
        !o && /* @__PURE__ */ i.jsx($t, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        o && /* @__PURE__ */ i.jsx(Zv, { preview: o, busy: m, onCommit: _, onClose: A })
      ] })
    ] })
  ] });
}
function Jv({ view: c, dashboard: o, onPrepare: m, onRetry: f, retryingId: _, affairFeedback: p, onSync: A }) {
  if (c.kind === "system") return /* @__PURE__ */ i.jsx(Fv, { dashboard: o, onSync: A, embedded: !0 });
  const M = c.kind === "day" ? o.items.filter((x) => wi(x) === c.date).sort((x, v) => String($e(x) || "").localeCompare(String($e(v) || ""))) : [c.item];
  return M.length ? /* @__PURE__ */ i.jsx("div", { className: "context-item-list", children: M.map((x) => /* @__PURE__ */ i.jsx(
    $v,
    {
      item: x,
      onPrepare: m,
      onRetry: f,
      retryingId: _,
      feedback: x.domain === "affair" ? p[x.id] : void 0
    },
    x.id
  )) }) : /* @__PURE__ */ i.jsx($t, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function $v({ item: c, onPrepare: o, onRetry: m, retryingId: f, feedback: _ }) {
  const p = $e(c), A = ["completed", "cancelled", "已完成", "已取消"].includes(c.status);
  return /* @__PURE__ */ i.jsxs("section", { className: `context-item-card ${yn(c)}${hn(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ i.jsxs("header", { children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ i.jsx("time", { children: p ? `${el(p, { month: "long", day: "numeric", weekday: "short" })} ${Ht(p)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ i.jsx(Mi, { value: c.status })
    ] }),
    /* @__PURE__ */ i.jsx("h3", { children: c.title }),
    /* @__PURE__ */ i.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" }),
    _ && /* @__PURE__ */ i.jsx("small", { className: _.ok ? "context-feedback ok" : "context-feedback error", children: _.text }),
    !A && /* @__PURE__ */ i.jsx("div", { className: "context-item-actions", children: c.domain === "course" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "course_move", student: c.title, fromDate: c.start_at?.slice(0, 10), fromTime: c.start_at?.slice(11, 16), toDate: c.start_at?.slice(0, 10), toTime: c.start_at?.slice(11, 16), duration: c.duration }), children: "调整时间…" }),
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "course_cancel", student: c.title, date: c.start_at?.slice(0, 10), time: c.start_at?.slice(11, 16) }), children: "本次不上…" })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成…" }),
      c.retry ? /* @__PURE__ */ i.jsx("button", { type: "button", className: _?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!f || !!_?.ok, onClick: () => {
        m(c);
      }, children: f === c.id ? "处理中…" : _?.buttonLabel || "没约上" }) : /* @__PURE__ */ i.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消…" })
    ] }) })
  ] });
}
function Fv({ dashboard: c, onSync: o, embedded: m = !1 }) {
  const f = c.health?.database?.verification;
  return /* @__PURE__ */ i.jsxs("div", { className: m ? "view-stack system-embedded" : "view-stack", children: [
    !m && /* @__PURE__ */ i.jsx(fr, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ i.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ i.jsx(la, { label: "数据库完整性", value: f?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${f?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ i.jsx(la, { label: "活动事务", value: f?.counts?.active ?? "—", hint: `总数 ${f?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ i.jsx(la, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ i.jsx(la, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ i.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ i.jsx(tl, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ i.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((_) => /* @__PURE__ */ i.jsx(du, { label: _.label, ok: _.ok, detail: _.detail }, _.label)) }),
        /* @__PURE__ */ i.jsx(tl, { title: "契约检查" }),
        /* @__PURE__ */ i.jsx(du, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ i.jsx(du, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ i.jsx(du, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ i.jsx(du, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
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
    ] })
  ] });
}
function Wv({ course: c, advice: o, onOpen: m, onPrepare: f }) {
  const [_, p] = R.useState(!1), A = or(_, () => p(!1));
  return c ? /* @__PURE__ */ i.jsxs(
    "section",
    {
      ref: A,
      className: `next-course-banner next-course-open contextual-action-host ${yn(c)}${hn(c) ? " temporary" : ""} actionable${_ ? " action-open" : ""}`,
      role: "button",
      tabIndex: 0,
      "aria-expanded": _,
      onClick: (M) => {
        M.target.closest("button") || (window.matchMedia("(hover: none)").matches ? p((x) => !x) : m(M.currentTarget));
      },
      onKeyDown: (M) => {
        M.key === "Enter" ? (M.preventDefault(), m(M.currentTarget)) : M.key === " " ? (M.preventDefault(), p((x) => !x)) : M.key === "Escape" && p(!1);
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "next-course-time", children: [
          /* @__PURE__ */ i.jsx("span", { children: el(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ i.jsx("strong", { children: Ht(c.start_at) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "next-course-main", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "eyebrow", children: [
            "下一节课",
            hn(c) && /* @__PURE__ */ i.jsx("span", { className: "temporary-badge", children: "临时" })
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
          /* @__PURE__ */ i.jsx("span", { children: o.tight ? `间隔仅 ${o.gapMinutes} 分钟` : `最晚 ${Ht(o.leaveBy)} 出发` })
        ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("strong", { children: "出发时间待定" }),
          /* @__PURE__ */ i.jsx("span", { children: o?.reason || "暂无通勤信息" })
        ] }) }),
        /* @__PURE__ */ i.jsx("span", { className: "next-course-cue", children: "查看详情 →" }),
        /* @__PURE__ */ i.jsx("div", { className: "next-course-inline-action", children: /* @__PURE__ */ i.jsx(Di, { item: c, onPrepare: (M) => {
          p(!1), f(M);
        } }) })
      ]
    }
  ) : /* @__PURE__ */ i.jsx("section", { className: "next-course-banner empty-next", children: /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: "下一节课" }),
    /* @__PURE__ */ i.jsx("h3", { children: "未来范围内没有课程" })
  ] }) });
}
function Hm({ preview: c, onClose: o }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ i.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ i.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "完成并返回" }) });
}
function la({ label: c, value: o, hint: m, tone: f }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `metric-card ${f}`, children: [
    /* @__PURE__ */ i.jsx("span", { children: c }),
    /* @__PURE__ */ i.jsx("strong", { children: o }),
    /* @__PURE__ */ i.jsx("small", { children: m })
  ] });
}
function Iv({ item: c, onInspect: o, onPrepare: m, onRetry: f, retryingId: _, feedback: p }) {
  const [A, M] = R.useState(!1), x = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(c.status), v = or(A, () => M(!1)), O = !!m && !x;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: v,
      className: `${o ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${yn(c)}${hn(c) ? " temporary" : ""}${O ? " actionable" : ""}${A ? " action-open" : ""}`,
      "data-item-id": c.id,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      "aria-expanded": O ? A : void 0,
      onClick: (N) => {
        N.target.closest("button") || (O && window.matchMedia("(hover: none)").matches ? M((Y) => !Y) : o?.(c, N.currentTarget));
      },
      onKeyDown: (N) => {
        N.key === "Enter" && o ? (N.preventDefault(), o(c, N.currentTarget)) : N.key === " " && O ? (N.preventDefault(), M((Y) => !Y)) : N.key === "Escape" && M(!1);
      },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: `domain-dot ${c.domain}` }),
        /* @__PURE__ */ i.jsx("time", { children: Ht($e(c)) || "待定" }),
        /* @__PURE__ */ i.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: c.title }),
          /* @__PURE__ */ i.jsx("span", { children: c.domain === "course" ? `${c.duration || "—"} 分钟` : c.note || c.window_label || "事务" }),
          p && /* @__PURE__ */ i.jsx("small", { className: p.ok ? "course-feedback ok" : "course-feedback error", children: p.text })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ i.jsx(Mi, { value: c.status }) }),
        O && m && /* @__PURE__ */ i.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ i.jsx(Di, { item: c, onPrepare: (N) => {
          M(!1), m(N);
        }, onRetry: f, retryingId: _, feedback: p }) })
      ]
    }
  );
}
function Pv({ item: c, onInspect: o, onPrepare: m, onRetry: f, retryingId: _, feedback: p }) {
  const [A, M] = R.useState(!1), x = or(A, () => M(!1));
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: x,
      className: `quick-pending-item contextual-action-host ${yn(c)} actionable${A ? " action-open" : ""}`,
      "data-item-id": c.id,
      role: "button",
      tabIndex: 0,
      "aria-expanded": A,
      onClick: (v) => {
        v.target.closest("button") || (window.matchMedia("(hover: none)").matches ? M((O) => !O) : o(c, v.currentTarget));
      },
      onKeyDown: (v) => {
        v.key === "Enter" ? (v.preventDefault(), o(c, v.currentTarget)) : v.key === " " ? (v.preventDefault(), M((O) => !O)) : v.key === "Escape" && M(!1);
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ i.jsx("strong", { children: c.title }),
          /* @__PURE__ */ i.jsx("span", { children: c.window_label || (c.next_prompt_at ? `下次提醒 ${el(c.next_prompt_at)} ${Ht(c.next_prompt_at)}` : "待处理") }),
          p && /* @__PURE__ */ i.jsx("small", { className: p.ok ? "affair-feedback ok" : "affair-feedback error", children: p.text })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ i.jsx(Mi, { value: c.status }) }),
        /* @__PURE__ */ i.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ i.jsx(Di, { item: c, onPrepare: (v) => {
          M(!1), m(v);
        }, onRetry: f, retryingId: _, feedback: p }) })
      ]
    }
  );
}
function Mi({ value: c }) {
  return /* @__PURE__ */ i.jsx("span", { className: `status ${Rm(c)}`, children: Cv[c] || c });
}
function tl({ title: c, meta: o, action: m, onAction: f, actionDisabled: _ }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "panel-heading", children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h3", { children: c }),
      o && /* @__PURE__ */ i.jsx("span", { children: o })
    ] }),
    m && /* @__PURE__ */ i.jsx("button", { type: "button", onClick: f, disabled: _, children: m })
  ] });
}
function fr({ eyebrow: c, title: o, description: m }) {
  return /* @__PURE__ */ i.jsxs("header", { className: "page-title", children: [
    /* @__PURE__ */ i.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ i.jsx("h2", { children: o }),
    /* @__PURE__ */ i.jsx("p", { children: m })
  ] });
}
function ce({ name: c, label: o, type: m = "text", placeholder: f, defaultValue: _, required: p = !1 }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ i.jsx("span", { children: o }),
    /* @__PURE__ */ i.jsx("input", { name: c, type: m, placeholder: f, defaultValue: _, required: p })
  ] });
}
function du({ label: c, ok: o, detail: m }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ i.jsx("span", { className: o ? "check ok" : "check no", children: o ? "✓" : "!" }),
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("strong", { children: c }),
      /* @__PURE__ */ i.jsx("small", { children: m })
    ] })
  ] });
}
function $t({ title: c, text: o, compact: m = !1 }) {
  return /* @__PURE__ */ i.jsxs("div", { className: m ? "empty compact" : "empty", children: [
    /* @__PURE__ */ i.jsx("strong", { children: c }),
    /* @__PURE__ */ i.jsx("span", { children: o })
  ] });
}
function mn({ tone: c, title: o, text: m }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `notice ${c}`, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ i.jsx("strong", { children: o }),
    /* @__PURE__ */ i.jsx("span", { children: m })
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
cr.ready();
cr.ui.resize({ height: window.innerHeight || 900 });
const Nm = document.getElementById("root");
Nm && iv.createRoot(Nm).render(/* @__PURE__ */ i.jsx(Ov, { children: /* @__PURE__ */ i.jsx(Rv, {}) }));
