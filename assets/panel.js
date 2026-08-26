var Zs = { exports: {} }, fu = {};
var ch;
function Wy() {
  if (ch) return fu;
  ch = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(f, S, y) {
    var A = null;
    if (y !== void 0 && (A = "" + y), S.key !== void 0 && (A = "" + S.key), "key" in S) {
      y = {};
      for (var C in S)
        C !== "key" && (y[C] = S[C]);
    } else y = S;
    return S = y.ref, {
      $$typeof: c,
      type: f,
      key: A,
      ref: S !== void 0 ? S : null,
      props: y
    };
  }
  return fu.Fragment = o, fu.jsx = h, fu.jsxs = h, fu;
}
var sh;
function Iy() {
  return sh || (sh = 1, Zs.exports = Wy()), Zs.exports;
}
var u = Iy(), Ks = { exports: {} }, ye = {};
var rh;
function Py() {
  if (rh) return ye;
  rh = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), S = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), L = Symbol.iterator;
  function V(v) {
    return v === null || typeof v != "object" ? null : (v = L && v[L] || v["@@iterator"], typeof v == "function" ? v : null);
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
  }, te = Object.assign, me = {};
  function J(v, D, X) {
    this.props = v, this.context = D, this.refs = me, this.updater = X || ee;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(v, D) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, D, "setState");
  }, J.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function he() {
  }
  he.prototype = J.prototype;
  function fe(v, D, X) {
    this.props = v, this.context = D, this.refs = me, this.updater = X || ee;
  }
  var ne = fe.prototype = new he();
  ne.constructor = fe, te(ne, J.prototype), ne.isPureReactComponent = !0;
  var W = Array.isArray;
  function I() {
  }
  var w = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function B(v, D, X) {
    var Q = X.ref;
    return {
      $$typeof: c,
      type: v,
      key: D,
      ref: Q !== void 0 ? Q : null,
      props: X
    };
  }
  function ze(v, D) {
    return B(v.type, D, v.props);
  }
  function Ae(v) {
    return typeof v == "object" && v !== null && v.$$typeof === c;
  }
  function je(v) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(X) {
      return D[X];
    });
  }
  var et = /\/+/g;
  function Ue(v, D) {
    return typeof v == "object" && v !== null && v.key != null ? je("" + v.key) : D.toString(36);
  }
  function Ve(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(I, I) : (v.status = "pending", v.then(
          function(D) {
            v.status === "pending" && (v.status = "fulfilled", v.value = D);
          },
          function(D) {
            v.status === "pending" && (v.status = "rejected", v.reason = D);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function x(v, D, X, Q, de) {
    var re = typeof v;
    (re === "undefined" || re === "boolean") && (v = null);
    var pe = !1;
    if (v === null) pe = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case c:
            case o:
              pe = !0;
              break;
            case U:
              return pe = v._init, x(
                pe(v._payload),
                D,
                X,
                Q,
                de
              );
          }
      }
    if (pe)
      return de = de(v), pe = Q === "" ? "." + Ue(v, 0) : Q, W(de) ? (X = "", pe != null && (X = pe.replace(et, "$&/") + "/"), x(de, D, X, "", function(oe) {
        return oe;
      })) : de != null && (Ae(de) && (de = ze(
        de,
        X + (de.key == null || v && v.key === de.key ? "" : ("" + de.key).replace(
          et,
          "$&/"
        ) + "/") + pe
      )), D.push(de)), 1;
    pe = 0;
    var Y = Q === "" ? "." : Q + ":";
    if (W(v))
      for (var ue = 0; ue < v.length; ue++)
        Q = v[ue], re = Y + Ue(Q, ue), pe += x(
          Q,
          D,
          X,
          re,
          de
        );
    else if (ue = V(v), typeof ue == "function")
      for (v = ue.call(v), ue = 0; !(Q = v.next()).done; )
        Q = Q.value, re = Y + Ue(Q, ue++), pe += x(
          Q,
          D,
          X,
          re,
          de
        );
    else if (re === "object") {
      if (typeof v.then == "function")
        return x(
          Ve(v),
          D,
          X,
          Q,
          de
        );
      throw D = String(v), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function d(v, D, X) {
    if (v == null) return v;
    var Q = [], de = 0;
    return x(v, Q, "", "", function(re) {
      return D.call(X, re, de++);
    }), Q;
  }
  function G(v) {
    if (v._status === -1) {
      var D = v._result;
      D = D(), D.then(
        function(X) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = X);
        },
        function(X) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = X);
        }
      ), v._status === -1 && (v._status = 0, v._result = D);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var k = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, se = {
    map: d,
    forEach: function(v, D, X) {
      d(
        v,
        function() {
          D.apply(this, arguments);
        },
        X
      );
    },
    count: function(v) {
      var D = 0;
      return d(v, function() {
        D++;
      }), D;
    },
    toArray: function(v) {
      return d(v, function(D) {
        return D;
      }) || [];
    },
    only: function(v) {
      if (!Ae(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return ye.Activity = N, ye.Children = se, ye.Component = J, ye.Fragment = h, ye.Profiler = S, ye.PureComponent = fe, ye.StrictMode = f, ye.Suspense = b, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ye.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return w.H.useMemoCache(v);
    }
  }, ye.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, ye.cacheSignal = function() {
    return null;
  }, ye.cloneElement = function(v, D, X) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var Q = te({}, v.props), de = v.key;
    if (D != null)
      for (re in D.key !== void 0 && (de = "" + D.key), D)
        !P.call(D, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && D.ref === void 0 || (Q[re] = D[re]);
    var re = arguments.length - 2;
    if (re === 1) Q.children = X;
    else if (1 < re) {
      for (var pe = Array(re), Y = 0; Y < re; Y++)
        pe[Y] = arguments[Y + 2];
      Q.children = pe;
    }
    return B(v.type, de, Q);
  }, ye.createContext = function(v) {
    return v = {
      $$typeof: A,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: y,
      _context: v
    }, v;
  }, ye.createElement = function(v, D, X) {
    var Q, de = {}, re = null;
    if (D != null)
      for (Q in D.key !== void 0 && (re = "" + D.key), D)
        P.call(D, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (de[Q] = D[Q]);
    var pe = arguments.length - 2;
    if (pe === 1) de.children = X;
    else if (1 < pe) {
      for (var Y = Array(pe), ue = 0; ue < pe; ue++)
        Y[ue] = arguments[ue + 2];
      de.children = Y;
    }
    if (v && v.defaultProps)
      for (Q in pe = v.defaultProps, pe)
        de[Q] === void 0 && (de[Q] = pe[Q]);
    return B(v, re, de);
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(v) {
    return { $$typeof: C, render: v };
  }, ye.isValidElement = Ae, ye.lazy = function(v) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: v },
      _init: G
    };
  }, ye.memo = function(v, D) {
    return {
      $$typeof: g,
      type: v,
      compare: D === void 0 ? null : D
    };
  }, ye.startTransition = function(v) {
    var D = w.T, X = {};
    w.T = X;
    try {
      var Q = v(), de = w.S;
      de !== null && de(X, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(I, k);
    } catch (re) {
      k(re);
    } finally {
      D !== null && X.types !== null && (D.types = X.types), w.T = D;
    }
  }, ye.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, ye.use = function(v) {
    return w.H.use(v);
  }, ye.useActionState = function(v, D, X) {
    return w.H.useActionState(v, D, X);
  }, ye.useCallback = function(v, D) {
    return w.H.useCallback(v, D);
  }, ye.useContext = function(v) {
    return w.H.useContext(v);
  }, ye.useDebugValue = function() {
  }, ye.useDeferredValue = function(v, D) {
    return w.H.useDeferredValue(v, D);
  }, ye.useEffect = function(v, D) {
    return w.H.useEffect(v, D);
  }, ye.useEffectEvent = function(v) {
    return w.H.useEffectEvent(v);
  }, ye.useId = function() {
    return w.H.useId();
  }, ye.useImperativeHandle = function(v, D, X) {
    return w.H.useImperativeHandle(v, D, X);
  }, ye.useInsertionEffect = function(v, D) {
    return w.H.useInsertionEffect(v, D);
  }, ye.useLayoutEffect = function(v, D) {
    return w.H.useLayoutEffect(v, D);
  }, ye.useMemo = function(v, D) {
    return w.H.useMemo(v, D);
  }, ye.useOptimistic = function(v, D) {
    return w.H.useOptimistic(v, D);
  }, ye.useReducer = function(v, D, X) {
    return w.H.useReducer(v, D, X);
  }, ye.useRef = function(v) {
    return w.H.useRef(v);
  }, ye.useState = function(v) {
    return w.H.useState(v);
  }, ye.useSyncExternalStore = function(v, D, X) {
    return w.H.useSyncExternalStore(
      v,
      D,
      X
    );
  }, ye.useTransition = function() {
    return w.H.useTransition();
  }, ye.version = "19.2.8", ye;
}
var oh;
function ir() {
  return oh || (oh = 1, Ks.exports = Py()), Ks.exports;
}
var O = ir(), Js = { exports: {} }, du = {}, $s = { exports: {} }, Fs = {};
var fh;
function ev() {
  return fh || (fh = 1, (function(c) {
    function o(x, d) {
      var G = x.length;
      x.push(d);
      e: for (; 0 < G; ) {
        var k = G - 1 >>> 1, se = x[k];
        if (0 < S(se, d))
          x[k] = d, x[G] = se, G = k;
        else break e;
      }
    }
    function h(x) {
      return x.length === 0 ? null : x[0];
    }
    function f(x) {
      if (x.length === 0) return null;
      var d = x[0], G = x.pop();
      if (G !== d) {
        x[0] = G;
        e: for (var k = 0, se = x.length, v = se >>> 1; k < v; ) {
          var D = 2 * (k + 1) - 1, X = x[D], Q = D + 1, de = x[Q];
          if (0 > S(X, G))
            Q < se && 0 > S(de, X) ? (x[k] = de, x[Q] = G, k = Q) : (x[k] = X, x[D] = G, k = D);
          else if (Q < se && 0 > S(de, G))
            x[k] = de, x[Q] = G, k = Q;
          else break e;
        }
      }
      return d;
    }
    function S(x, d) {
      var G = x.sortIndex - d.sortIndex;
      return G !== 0 ? G : x.id - d.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      c.unstable_now = function() {
        return y.now();
      };
    } else {
      var A = Date, C = A.now();
      c.unstable_now = function() {
        return A.now() - C;
      };
    }
    var b = [], g = [], U = 1, N = null, L = 3, V = !1, ee = !1, te = !1, me = !1, J = typeof setTimeout == "function" ? setTimeout : null, he = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    function ne(x) {
      for (var d = h(g); d !== null; ) {
        if (d.callback === null) f(g);
        else if (d.startTime <= x)
          f(g), d.sortIndex = d.expirationTime, o(b, d);
        else break;
        d = h(g);
      }
    }
    function W(x) {
      if (te = !1, ne(x), !ee)
        if (h(b) !== null)
          ee = !0, I || (I = !0, je());
        else {
          var d = h(g);
          d !== null && Ve(W, d.startTime - x);
        }
    }
    var I = !1, w = -1, P = 5, B = -1;
    function ze() {
      return me ? !0 : !(c.unstable_now() - B < P);
    }
    function Ae() {
      if (me = !1, I) {
        var x = c.unstable_now();
        B = x;
        var d = !0;
        try {
          e: {
            ee = !1, te && (te = !1, he(w), w = -1), V = !0;
            var G = L;
            try {
              t: {
                for (ne(x), N = h(b); N !== null && !(N.expirationTime > x && ze()); ) {
                  var k = N.callback;
                  if (typeof k == "function") {
                    N.callback = null, L = N.priorityLevel;
                    var se = k(
                      N.expirationTime <= x
                    );
                    if (x = c.unstable_now(), typeof se == "function") {
                      N.callback = se, ne(x), d = !0;
                      break t;
                    }
                    N === h(b) && f(b), ne(x);
                  } else f(b);
                  N = h(b);
                }
                if (N !== null) d = !0;
                else {
                  var v = h(g);
                  v !== null && Ve(
                    W,
                    v.startTime - x
                  ), d = !1;
                }
              }
              break e;
            } finally {
              N = null, L = G, V = !1;
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
    function Ve(x, d) {
      w = J(function() {
        x(c.unstable_now());
      }, d);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, c.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < x ? Math.floor(1e3 / x) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, c.unstable_next = function(x) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var d = 3;
          break;
        default:
          d = L;
      }
      var G = L;
      L = d;
      try {
        return x();
      } finally {
        L = G;
      }
    }, c.unstable_requestPaint = function() {
      me = !0;
    }, c.unstable_runWithPriority = function(x, d) {
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
      var G = L;
      L = x;
      try {
        return d();
      } finally {
        L = G;
      }
    }, c.unstable_scheduleCallback = function(x, d, G) {
      var k = c.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? k + G : k) : G = k, x) {
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
      return se = G + se, x = {
        id: U++,
        callback: d,
        priorityLevel: x,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > k ? (x.sortIndex = G, o(g, x), h(b) === null && x === h(g) && (te ? (he(w), w = -1) : te = !0, Ve(W, G - k))) : (x.sortIndex = se, o(b, x), ee || V || (ee = !0, I || (I = !0, je()))), x;
    }, c.unstable_shouldYield = ze, c.unstable_wrapCallback = function(x) {
      var d = L;
      return function() {
        var G = L;
        L = d;
        try {
          return x.apply(this, arguments);
        } finally {
          L = G;
        }
      };
    };
  })(Fs)), Fs;
}
var dh;
function tv() {
  return dh || (dh = 1, $s.exports = ev()), $s.exports;
}
var Ws = { exports: {} }, mt = {};
var hh;
function lv() {
  if (hh) return mt;
  hh = 1;
  var c = ir();
  function o(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        g += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var f = {
    d: {
      f: h,
      r: function() {
        throw Error(o(522));
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
  }, S = /* @__PURE__ */ Symbol.for("react.portal");
  function y(b, g, U) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: N == null ? null : "" + N,
      children: b,
      containerInfo: g,
      implementation: U
    };
  }
  var A = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, mt.createPortal = function(b, g) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(o(299));
    return y(b, g, null, U);
  }, mt.flushSync = function(b) {
    var g = A.T, U = f.p;
    try {
      if (A.T = null, f.p = 2, b) return b();
    } finally {
      A.T = g, f.p = U, f.d.f();
    }
  }, mt.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, f.d.C(b, g));
  }, mt.prefetchDNS = function(b) {
    typeof b == "string" && f.d.D(b);
  }, mt.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var U = g.as, N = C(U, g.crossOrigin), L = typeof g.integrity == "string" ? g.integrity : void 0, V = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      U === "style" ? f.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: N,
          integrity: L,
          fetchPriority: V
        }
      ) : U === "script" && f.d.X(b, {
        crossOrigin: N,
        integrity: L,
        fetchPriority: V,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, mt.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var U = C(
            g.as,
            g.crossOrigin
          );
          f.d.M(b, {
            crossOrigin: U,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && f.d.M(b);
  }, mt.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var U = g.as, N = C(U, g.crossOrigin);
      f.d.L(b, U, {
        crossOrigin: N,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, mt.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var U = C(g.as, g.crossOrigin);
        f.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: U,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else f.d.m(b);
  }, mt.requestFormReset = function(b) {
    f.d.r(b);
  }, mt.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, mt.useFormState = function(b, g, U) {
    return A.H.useFormState(b, g, U);
  }, mt.useFormStatus = function() {
    return A.H.useHostTransitionStatus();
  }, mt.version = "19.2.8", mt;
}
var mh;
function av() {
  if (mh) return Ws.exports;
  mh = 1;
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
var yh;
function nv() {
  if (yh) return du;
  yh = 1;
  var c = tv(), o = ir(), h = av();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function y(e) {
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
  function b(e) {
    if (y(e) !== e)
      throw Error(f(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = y(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return b(n), e;
          if (i === a) return b(n), t;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var s = !1, r = n.child; r; ) {
          if (r === l) {
            s = !0, l = n, a = i;
            break;
          }
          if (r === a) {
            s = !0, a = n, l = i;
            break;
          }
          r = r.sibling;
        }
        if (!s) {
          for (r = i.child; r; ) {
            if (r === l) {
              s = !0, l = i, a = n;
              break;
            }
            if (r === a) {
              s = !0, a = i, l = n;
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
  function U(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = U(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign, L = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.transitional.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), me = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), he = /* @__PURE__ */ Symbol.for("react.consumer"), fe = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), ze = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ae = Symbol.iterator;
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
      case me:
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
        case he:
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
  var Ve = Array.isArray, x = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, d = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, k = [], se = -1;
  function v(e) {
    return { current: e };
  }
  function D(e) {
    0 > se || (e.current = k[se], k[se] = null, se--);
  }
  function X(e, t) {
    se++, k[se] = e.current, e.current = t;
  }
  var Q = v(null), de = v(null), re = v(null), pe = v(null);
  function Y(e, t) {
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
    D(Q), X(Q, e);
  }
  function ue() {
    D(Q), D(de), D(re);
  }
  function oe(e) {
    e.memoizedState !== null && X(pe, e);
    var t = Q.current, l = Dd(t, e.type);
    t !== l && (X(de, e), X(Q, l));
  }
  function K(e) {
    de.current === e && (D(Q), D(de)), pe.current === e && (D(pe), cu._currentValue = G);
  }
  var tt, xt;
  function yt(e) {
    if (tt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        tt = t && t[1] || "", xt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + tt + e + xt;
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
      var i = a.DetermineComponentFrameRoot(), s = i[0], r = i[1];
      if (s && r) {
        var m = s.split(`
`), _ = r.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === _.length)
          for (a = m.length - 1, n = _.length - 1; 1 <= a && 0 <= n && m[a] !== _[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== _[n]) {
                  var M = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), M;
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
  function wl(e, t) {
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
        t += wl(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var It = Object.prototype.hasOwnProperty, Cl = c.unstable_scheduleCallback, rl = c.unstable_cancelCallback, gn = c.unstable_shouldYield, st = c.unstable_requestPaint, Ze = c.unstable_now, pn = c.unstable_getCurrentPriorityLevel, xn = c.unstable_ImmediatePriority, mu = c.unstable_UserBlockingPriority, Na = c.unstable_NormalPriority, yu = c.unstable_LowPriority, bn = c.unstable_IdlePriority, Ta = c.log, Oi = c.unstable_setDisableYieldValue, ua = null, gt = null;
  function bt(e) {
    if (typeof Ta == "function" && Oi(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ua, e);
      } catch {
      }
  }
  var nt = Math.clz32 ? Math.clz32 : Ui, jn = Math.log, vu = Math.LN2;
  function Ui(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jn(e) / vu | 0) | 0;
  }
  var Aa = 256, Dl = 262144, za = 4194304;
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
    var n = 0, i = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var r = a & 134217727;
    return r !== 0 ? (a = r & ~i, a !== 0 ? n = H(a) : (s &= r, s !== 0 ? n = H(s) : l || (l = r & ~e, l !== 0 && (n = H(l))))) : (r = a & ~i, r !== 0 ? n = H(r) : s !== 0 ? n = H(s) : l || (l = a & ~e, l !== 0 && (n = H(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function ve(e, t) {
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
  function ut(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function le(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ct(e, t, l, a, n, i) {
    var s = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var r = e.entanglements, m = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var M = 31 - nt(l), q = 1 << M;
      r[M] = 0, m[M] = -1;
      var T = _[M];
      if (T !== null)
        for (_[M] = null, M = 0; M < T.length; M++) {
          var z = T[M];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~q;
    }
    a !== 0 && al(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function al(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - nt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function nl(e, t) {
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
  function hr() {
    var e = d.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : eh(e.type));
  }
  function mr(e, t) {
    var l = d.p;
    try {
      return d.p = e, t();
    } finally {
      d.p = l;
    }
  }
  var Ml = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Ml, jt = "__reactProps$" + Ml, wa = "__reactContainer$" + Ml, Bi = "__reactEvents$" + Ml, Lh = "__reactListeners$" + Ml, Yh = "__reactHandles$" + Ml, yr = "__reactResources$" + Ml, Sn = "__reactMarker$" + Ml;
  function Hi(e) {
    delete e[rt], delete e[jt], delete e[Bi], delete e[Lh], delete e[Yh];
  }
  function Ca(e) {
    var t = e[rt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[wa] || l[rt]) {
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
  function Da(e) {
    if (e = e[rt] || e[wa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function En(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Ma(e) {
    var t = e[yr];
    return t || (t = e[yr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function it(e) {
    e[Sn] = !0;
  }
  var vr = /* @__PURE__ */ new Set(), gr = {};
  function ia(e, t) {
    Oa(e, t), Oa(e + "Capture", t);
  }
  function Oa(e, t) {
    for (gr[e] = t, e = 0; e < t.length; e++)
      vr.add(t[e]);
  }
  var Gh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), pr = {}, xr = {};
  function Vh(e) {
    return It.call(xr, e) ? !0 : It.call(pr, e) ? !1 : Gh.test(e) ? xr[e] = !0 : (pr[e] = !0, !1);
  }
  function gu(e, t, l) {
    if (Vh(t))
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
  function br(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xh(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          l = "" + s, i.call(this, s);
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
  function ki(e) {
    if (!e._valueTracker) {
      var t = br(e) ? "checked" : "value";
      e._valueTracker = Xh(
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
    return e && (a = br(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function xu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Qh = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      Qh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Li(e, t, l, a, n, i, s, r) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Lt(t)) : e.value !== "" + Lt(t) && (e.value = "" + Lt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Yi(e, s, Lt(t)) : l != null ? Yi(e, s, Lt(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Lt(r) : e.removeAttribute("name");
  }
  function Sr(e, t, l, a, n, i, s, r) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        ki(e);
        return;
      }
      l = l != null ? "" + Lt(l) : "", t = t != null ? "" + Lt(t) : l, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = r ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), ki(e);
  }
  function Yi(e, t, l) {
    t === "number" && xu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Ua(e, t, l, a) {
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
    l = Lt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), ki(e);
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
  var Zh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Zh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
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
      for (var i in t)
        t.hasOwnProperty(i) && Nr(e, i, t[i]);
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
  var Kh = /* @__PURE__ */ new Map([
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
  ]), Jh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bu(e) {
    return Jh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function fl() {
  }
  var Vi = null;
  function Xi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var qa = null, Ba = null;
  function Ar(e) {
    var t = Da(e);
    if (t && (e = t.stateNode)) {
      var l = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Li(
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
                Li(
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
          t = l.value, t != null && Ua(e, !!l.multiple, t, !1);
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
      if (Qi = !1, (qa !== null || Ba !== null) && (ci(), qa && (t = qa, e = Ba, Ba = qa = null, Ar(t), e)))
        for (t = 0; t < e.length; t++) Ar(e[t]);
    }
  }
  function _n(e, t) {
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
      var Nn = {};
      Object.defineProperty(Nn, "passive", {
        get: function() {
          Zi = !0;
        }
      }), window.addEventListener("test", Nn, Nn), window.removeEventListener("test", Nn, Nn);
    } catch {
      Zi = !1;
    }
  var Ol = null, Ki = null, ju = null;
  function wr() {
    if (ju) return ju;
    var e, t = Ki, l = t.length, a, n = "value" in Ol ? Ol.value : Ol.textContent, i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var s = l - e;
    for (a = 1; a <= s && t[l - a] === n[i - a]; a++) ;
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
    function t(l, a, n, i, s) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (l = e[r], this[r] = l ? l(i) : i[r]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Eu : Cr, this.isPropagationStopped = Cr, this;
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
  var ca = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _u = St(ca), Tn = N({}, ca, { view: 0, detail: 0 }), $h = St(Tn), Ji, $i, An, Nu = N({}, Tn, {
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
      return "movementX" in e ? e.movementX : (e !== An && (An && e.type === "mousemove" ? (Ji = e.screenX - An.screenX, $i = e.screenY - An.screenY) : $i = Ji = 0, An = e), Ji);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $i;
    }
  }), Dr = St(Nu), Fh = N({}, Nu, { dataTransfer: 0 }), Wh = St(Fh), Ih = N({}, Tn, { relatedTarget: 0 }), Fi = St(Ih), Ph = N({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), em = St(Ph), tm = N({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), lm = St(tm), am = N({}, ca, { data: 0 }), Mr = St(am), nm = {
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
  }, um = {
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
  }, im = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function cm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = im[e]) ? !!t[e] : !1;
  }
  function Wi() {
    return cm;
  }
  var sm = N({}, Tn, {
    key: function(e) {
      if (e.key) {
        var t = nm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Su(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? um[e.keyCode] || "Unidentified" : "";
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
  }), rm = St(sm), om = N({}, Nu, {
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
  }), Or = St(om), fm = N({}, Tn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wi
  }), dm = St(fm), hm = N({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mm = St(hm), ym = N({}, Nu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vm = St(ym), gm = N({}, ca, {
    newState: 0,
    oldState: 0
  }), pm = St(gm), xm = [9, 13, 27, 32], Ii = dl && "CompositionEvent" in window, zn = null;
  dl && "documentMode" in document && (zn = document.documentMode);
  var bm = dl && "TextEvent" in window && !zn, Ur = dl && (!Ii || zn && 8 < zn && 11 >= zn), Rr = " ", qr = !1;
  function Br(e, t) {
    switch (e) {
      case "keyup":
        return xm.indexOf(t.keyCode) !== -1;
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
  var Ha = !1;
  function jm(e, t) {
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
  function Sm(e, t) {
    if (Ha)
      return e === "compositionend" || !Ii && Br(e, t) ? (e = wr(), ju = Ki = Ol = null, Ha = !1, e) : null;
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
  var Em = {
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
  function kr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Em[e.type] : t === "textarea";
  }
  function Lr(e, t, l, a) {
    qa ? Ba ? Ba.push(a) : Ba = [a] : qa = a, t = mi(t, "onChange"), 0 < t.length && (l = new _u(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var wn = null, Cn = null;
  function _m(e) {
    _d(e, 0);
  }
  function Tu(e) {
    var t = En(e);
    if (jr(t)) return e;
  }
  function Yr(e, t) {
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
    wn && (wn.detachEvent("onpropertychange", Qr), Cn = wn = null);
  }
  function Qr(e) {
    if (e.propertyName === "value" && Tu(Cn)) {
      var t = [];
      Lr(
        t,
        Cn,
        e,
        Xi(e)
      ), zr(_m, t);
    }
  }
  function Nm(e, t, l) {
    e === "focusin" ? (Xr(), wn = t, Cn = l, wn.attachEvent("onpropertychange", Qr)) : e === "focusout" && Xr();
  }
  function Tm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(Cn);
  }
  function Am(e, t) {
    if (e === "click") return Tu(t);
  }
  function zm(e, t) {
    if (e === "input" || e === "change")
      return Tu(t);
  }
  function wm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : wm;
  function Dn(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!It.call(t, n) || !Dt(e[n], t[n]))
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
    for (var t = xu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = xu(e.document);
    }
    return t;
  }
  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Cm = dl && "documentMode" in document && 11 >= document.documentMode, ka = null, lc = null, Mn = null, ac = !1;
  function Fr(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ac || ka == null || ka !== xu(a) || (a = ka, "selectionStart" in a && tc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Mn && Dn(Mn, a) || (Mn = a, a = mi(lc, "onSelect"), 0 < a.length && (t = new _u(
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
  }, nc = {}, Wr = {};
  dl && (Wr = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function ra(e) {
    if (nc[e]) return nc[e];
    if (!La[e]) return e;
    var t = La[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Wr)
        return nc[e] = t[l];
    return e;
  }
  var Ir = ra("animationend"), Pr = ra("animationiteration"), eo = ra("animationstart"), Dm = ra("transitionrun"), Mm = ra("transitionstart"), Om = ra("transitioncancel"), to = ra("transitionend"), lo = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function Pt(e, t) {
    lo.set(e, t), ia(t, [e]);
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
  }, Gt = [], Ya = 0, ic = 0;
  function zu() {
    for (var e = Ya, t = ic = Ya = 0; t < e; ) {
      var l = Gt[t];
      Gt[t++] = null;
      var a = Gt[t];
      Gt[t++] = null;
      var n = Gt[t];
      Gt[t++] = null;
      var i = Gt[t];
      if (Gt[t++] = null, a !== null && n !== null) {
        var s = a.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n;
      }
      i !== 0 && ao(l, n, i);
    }
  }
  function wu(e, t, l, a) {
    Gt[Ya++] = e, Gt[Ya++] = t, Gt[Ya++] = l, Gt[Ya++] = a, ic |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function cc(e, t, l, a) {
    return wu(e, t, l, a), Cu(e);
  }
  function oa(e, t) {
    return wu(e, null, null, t), Cu(e);
  }
  function ao(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - nt(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null;
  }
  function Cu(e) {
    if (50 < eu)
      throw eu = 0, vs = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ga = {};
  function Um(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, l, a) {
    return new Um(e, t, l, a);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function hl(e, t) {
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
  function Du(e, t, l, a, n, i) {
    var s = 0;
    if (a = e, typeof e == "function") sc(e) && (s = 1);
    else if (typeof e == "string")
      s = ky(
        e,
        l,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return e = Mt(31, l, t, n), e.elementType = B, e.lanes = i, e;
        case te:
          return fa(l.children, n, i, t);
        case me:
          s = 8, n |= 24;
          break;
        case J:
          return e = Mt(12, l, t, n | 2), e.elementType = J, e.lanes = i, e;
        case W:
          return e = Mt(13, l, t, n), e.elementType = W, e.lanes = i, e;
        case I:
          return e = Mt(19, l, t, n), e.elementType = I, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case fe:
                s = 10;
                break e;
              case he:
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
    return t = Mt(s, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function fa(e, t, l, a) {
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
  function Vt(e, t) {
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
  var Va = [], Xa = 0, Mu = null, On = 0, Xt = [], Qt = 0, Ul = null, ul = 1, il = "";
  function ml(e, t) {
    Va[Xa++] = On, Va[Xa++] = Mu, Mu = e, On = t;
  }
  function co(e, t, l) {
    Xt[Qt++] = ul, Xt[Qt++] = il, Xt[Qt++] = Ul, Ul = e;
    var a = ul;
    e = il;
    var n = 32 - nt(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - nt(t) + n;
    if (30 < i) {
      var s = n - n % 5;
      i = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, ul = 1 << 32 - nt(t) + n | l << n | a, il = i + e;
    } else
      ul = 1 << i | l << n | a, il = e;
  }
  function fc(e) {
    e.return !== null && (ml(e, 1), co(e, 1, 0));
  }
  function dc(e) {
    for (; e === Mu; )
      Mu = Va[--Xa], Va[Xa] = null, On = Va[--Xa], Va[Xa] = null;
    for (; e === Ul; )
      Ul = Xt[--Qt], Xt[Qt] = null, il = Xt[--Qt], Xt[Qt] = null, ul = Xt[--Qt], Xt[Qt] = null;
  }
  function so(e, t) {
    Xt[Qt++] = ul, Xt[Qt++] = il, Xt[Qt++] = Ul, ul = t.id, il = t.overflow, Ul = e;
  }
  var ot = null, Le = null, Te = !1, Rl = null, Zt = !1, hc = Error(f(519));
  function ql(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Un(Vt(t, e)), hc;
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
        for (l = 0; l < lu.length; l++)
          Ee(lu[l], t);
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
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || zd(t.textContent, l) ? (a.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)), a.onScroll != null && Ee("scroll", t), a.onScrollEnd != null && Ee("scrollend", t), a.onClick != null && (t.onclick = fl), t = !0) : t = !1, t || ql(e, !0);
  }
  function oo(e) {
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
  function Qa(e) {
    if (e !== ot) return !1;
    if (!Te) return oo(e), Te = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ds(e.type, e.memoizedProps)), l = !l), l && Le && ql(e), oo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Le = Bd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Le = Bd(e);
    } else
      t === 27 ? (t = Le, Fl(e.type) ? (e = qs, qs = null, Le = e) : Le = t) : Le = ot ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function da() {
    Le = ot = null, Te = !1;
  }
  function mc() {
    var e = Rl;
    return e !== null && (Tt === null ? Tt = e : Tt.push.apply(
      Tt,
      e
    ), Rl = null), e;
  }
  function Un(e) {
    Rl === null ? Rl = [e] : Rl.push(e);
  }
  var yc = v(null), ha = null, yl = null;
  function Bl(e, t, l) {
    X(yc, t._currentValue), t._currentValue = l;
  }
  function vl(e) {
    e._currentValue = yc.current, D(yc);
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
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var r = i;
          i = n;
          for (var m = 0; m < t.length; m++)
            if (r.context === t[m]) {
              i.lanes |= l, r = i.alternate, r !== null && (r.lanes |= l), vc(
                i.return,
                l,
                e
              ), a || (s = null);
              break e;
            }
          i = r.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(f(341));
        s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), vc(s, l, e), s = null;
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
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
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
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(cu) : e = [cu]);
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
    ha = e, yl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return fo(ha, e);
  }
  function Uu(e, t) {
    return ha === null && ma(e), fo(e, t);
  }
  function fo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, yl === null) {
      if (e === null) throw Error(f(308));
      yl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else yl = yl.next = t;
    return l;
  }
  var Rm = typeof AbortController < "u" ? AbortController : function() {
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
  }, qm = c.unstable_scheduleCallback, Bm = c.unstable_NormalPriority, Fe = {
    $$typeof: fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pc() {
    return {
      controller: new Rm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rn(e) {
    e.refCount--, e.refCount === 0 && qm(Bm, function() {
      e.controller.abort();
    });
  }
  var qn = null, xc = 0, Ka = 0, Ja = null;
  function Hm(e, t) {
    if (qn === null) {
      var l = qn = [];
      xc = 0, Ka = Ss(), Ja = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return xc++, t.then(ho, ho), t;
  }
  function ho() {
    if (--xc === 0 && qn !== null) {
      Ja !== null && (Ja.status = "fulfilled");
      var e = qn;
      qn = null, Ka = 0, Ja = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function km(e, t) {
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
  var mo = x.S;
  x.S = function(e, t) {
    If = Ze(), typeof t == "object" && t !== null && typeof t.then == "function" && Hm(e, t), mo !== null && mo(e, t);
  };
  var ya = v(null);
  function bc() {
    var e = ya.current;
    return e !== null ? e : ke.pooledCache;
  }
  function Ru(e, t) {
    t === null ? X(ya, ya.current) : X(ya, t.pool);
  }
  function yo() {
    var e = bc();
    return e === null ? null : { parent: Fe._currentValue, pool: e };
  }
  var $a = Error(f(460)), jc = Error(f(474)), qu = Error(f(542)), Bu = { then: function() {
  } };
  function vo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function go(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(fl, fl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, xo(e), e;
      default:
        if (typeof t.status == "string") t.then(fl, fl);
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
            throw e = t.reason, xo(e), e;
        }
        throw ga = t, $a;
    }
  }
  function va(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ga = l, $a) : l;
    }
  }
  var ga = null;
  function po() {
    if (ga === null) throw Error(f(459));
    var e = ga;
    return ga = null, e;
  }
  function xo(e) {
    if (e === $a || e === qu)
      throw Error(f(483));
  }
  var Fa = null, Bn = 0;
  function Hu(e) {
    var t = Bn;
    return Bn += 1, Fa === null && (Fa = []), go(Fa, e, t);
  }
  function Hn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ku(e, t) {
    throw t.$$typeof === L ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function bo(e) {
    function t(j, p) {
      if (e) {
        var E = j.deletions;
        E === null ? (j.deletions = [p], j.flags |= 16) : E.push(p);
      }
    }
    function l(j, p) {
      if (!e) return null;
      for (; p !== null; )
        t(j, p), p = p.sibling;
      return null;
    }
    function a(j) {
      for (var p = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? p.set(j.key, j) : p.set(j.index, j), j = j.sibling;
      return p;
    }
    function n(j, p) {
      return j = hl(j, p), j.index = 0, j.sibling = null, j;
    }
    function i(j, p, E) {
      return j.index = E, e ? (E = j.alternate, E !== null ? (E = E.index, E < p ? (j.flags |= 67108866, p) : E) : (j.flags |= 67108866, p)) : (j.flags |= 1048576, p);
    }
    function s(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function r(j, p, E, R) {
      return p === null || p.tag !== 6 ? (p = rc(E, j.mode, R), p.return = j, p) : (p = n(p, E), p.return = j, p);
    }
    function m(j, p, E, R) {
      var ae = E.type;
      return ae === te ? M(
        j,
        p,
        E.props.children,
        R,
        E.key
      ) : p !== null && (p.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === P && va(ae) === p.type) ? (p = n(p, E.props), Hn(p, E), p.return = j, p) : (p = Du(
        E.type,
        E.key,
        E.props,
        null,
        j.mode,
        R
      ), Hn(p, E), p.return = j, p);
    }
    function _(j, p, E, R) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== E.containerInfo || p.stateNode.implementation !== E.implementation ? (p = oc(E, j.mode, R), p.return = j, p) : (p = n(p, E.children || []), p.return = j, p);
    }
    function M(j, p, E, R, ae) {
      return p === null || p.tag !== 7 ? (p = fa(
        E,
        j.mode,
        R,
        ae
      ), p.return = j, p) : (p = n(p, E), p.return = j, p);
    }
    function q(j, p, E) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = rc(
          "" + p,
          j.mode,
          E
        ), p.return = j, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case V:
            return E = Du(
              p.type,
              p.key,
              p.props,
              null,
              j.mode,
              E
            ), Hn(E, p), E.return = j, E;
          case ee:
            return p = oc(
              p,
              j.mode,
              E
            ), p.return = j, p;
          case P:
            return p = va(p), q(j, p, E);
        }
        if (Ve(p) || je(p))
          return p = fa(
            p,
            j.mode,
            E,
            null
          ), p.return = j, p;
        if (typeof p.then == "function")
          return q(j, Hu(p), E);
        if (p.$$typeof === fe)
          return q(
            j,
            Uu(j, p),
            E
          );
        ku(j, p);
      }
      return null;
    }
    function T(j, p, E, R) {
      var ae = p !== null ? p.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return ae !== null ? null : r(j, p, "" + E, R);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case V:
            return E.key === ae ? m(j, p, E, R) : null;
          case ee:
            return E.key === ae ? _(j, p, E, R) : null;
          case P:
            return E = va(E), T(j, p, E, R);
        }
        if (Ve(E) || je(E))
          return ae !== null ? null : M(j, p, E, R, null);
        if (typeof E.then == "function")
          return T(
            j,
            p,
            Hu(E),
            R
          );
        if (E.$$typeof === fe)
          return T(
            j,
            p,
            Uu(j, E),
            R
          );
        ku(j, E);
      }
      return null;
    }
    function z(j, p, E, R, ae) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return j = j.get(E) || null, r(p, j, "" + R, ae);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case V:
            return j = j.get(
              R.key === null ? E : R.key
            ) || null, m(p, j, R, ae);
          case ee:
            return j = j.get(
              R.key === null ? E : R.key
            ) || null, _(p, j, R, ae);
          case P:
            return R = va(R), z(
              j,
              p,
              E,
              R,
              ae
            );
        }
        if (Ve(R) || je(R))
          return j = j.get(E) || null, M(p, j, R, ae, null);
        if (typeof R.then == "function")
          return z(
            j,
            p,
            E,
            Hu(R),
            ae
          );
        if (R.$$typeof === fe)
          return z(
            j,
            p,
            E,
            Uu(p, R),
            ae
          );
        ku(p, R);
      }
      return null;
    }
    function $(j, p, E, R) {
      for (var ae = null, we = null, F = p, be = p = 0, Ne = null; F !== null && be < E.length; be++) {
        F.index > be ? (Ne = F, F = null) : Ne = F.sibling;
        var Ce = T(
          j,
          F,
          E[be],
          R
        );
        if (Ce === null) {
          F === null && (F = Ne);
          break;
        }
        e && F && Ce.alternate === null && t(j, F), p = i(Ce, p, be), we === null ? ae = Ce : we.sibling = Ce, we = Ce, F = Ne;
      }
      if (be === E.length)
        return l(j, F), Te && ml(j, be), ae;
      if (F === null) {
        for (; be < E.length; be++)
          F = q(j, E[be], R), F !== null && (p = i(
            F,
            p,
            be
          ), we === null ? ae = F : we.sibling = F, we = F);
        return Te && ml(j, be), ae;
      }
      for (F = a(F); be < E.length; be++)
        Ne = z(
          F,
          j,
          be,
          E[be],
          R
        ), Ne !== null && (e && Ne.alternate !== null && F.delete(
          Ne.key === null ? be : Ne.key
        ), p = i(
          Ne,
          p,
          be
        ), we === null ? ae = Ne : we.sibling = Ne, we = Ne);
      return e && F.forEach(function(ta) {
        return t(j, ta);
      }), Te && ml(j, be), ae;
    }
    function ie(j, p, E, R) {
      if (E == null) throw Error(f(151));
      for (var ae = null, we = null, F = p, be = p = 0, Ne = null, Ce = E.next(); F !== null && !Ce.done; be++, Ce = E.next()) {
        F.index > be ? (Ne = F, F = null) : Ne = F.sibling;
        var ta = T(j, F, Ce.value, R);
        if (ta === null) {
          F === null && (F = Ne);
          break;
        }
        e && F && ta.alternate === null && t(j, F), p = i(ta, p, be), we === null ? ae = ta : we.sibling = ta, we = ta, F = Ne;
      }
      if (Ce.done)
        return l(j, F), Te && ml(j, be), ae;
      if (F === null) {
        for (; !Ce.done; be++, Ce = E.next())
          Ce = q(j, Ce.value, R), Ce !== null && (p = i(Ce, p, be), we === null ? ae = Ce : we.sibling = Ce, we = Ce);
        return Te && ml(j, be), ae;
      }
      for (F = a(F); !Ce.done; be++, Ce = E.next())
        Ce = z(F, j, be, Ce.value, R), Ce !== null && (e && Ce.alternate !== null && F.delete(Ce.key === null ? be : Ce.key), p = i(Ce, p, be), we === null ? ae = Ce : we.sibling = Ce, we = Ce);
      return e && F.forEach(function(Fy) {
        return t(j, Fy);
      }), Te && ml(j, be), ae;
    }
    function Be(j, p, E, R) {
      if (typeof E == "object" && E !== null && E.type === te && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case V:
            e: {
              for (var ae = E.key; p !== null; ) {
                if (p.key === ae) {
                  if (ae = E.type, ae === te) {
                    if (p.tag === 7) {
                      l(
                        j,
                        p.sibling
                      ), R = n(
                        p,
                        E.props.children
                      ), R.return = j, j = R;
                      break e;
                    }
                  } else if (p.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === P && va(ae) === p.type) {
                    l(
                      j,
                      p.sibling
                    ), R = n(p, E.props), Hn(R, E), R.return = j, j = R;
                    break e;
                  }
                  l(j, p);
                  break;
                } else t(j, p);
                p = p.sibling;
              }
              E.type === te ? (R = fa(
                E.props.children,
                j.mode,
                R,
                E.key
              ), R.return = j, j = R) : (R = Du(
                E.type,
                E.key,
                E.props,
                null,
                j.mode,
                R
              ), Hn(R, E), R.return = j, j = R);
            }
            return s(j);
          case ee:
            e: {
              for (ae = E.key; p !== null; ) {
                if (p.key === ae)
                  if (p.tag === 4 && p.stateNode.containerInfo === E.containerInfo && p.stateNode.implementation === E.implementation) {
                    l(
                      j,
                      p.sibling
                    ), R = n(p, E.children || []), R.return = j, j = R;
                    break e;
                  } else {
                    l(j, p);
                    break;
                  }
                else t(j, p);
                p = p.sibling;
              }
              R = oc(E, j.mode, R), R.return = j, j = R;
            }
            return s(j);
          case P:
            return E = va(E), Be(
              j,
              p,
              E,
              R
            );
        }
        if (Ve(E))
          return $(
            j,
            p,
            E,
            R
          );
        if (je(E)) {
          if (ae = je(E), typeof ae != "function") throw Error(f(150));
          return E = ae.call(E), ie(
            j,
            p,
            E,
            R
          );
        }
        if (typeof E.then == "function")
          return Be(
            j,
            p,
            Hu(E),
            R
          );
        if (E.$$typeof === fe)
          return Be(
            j,
            p,
            Uu(j, E),
            R
          );
        ku(j, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, p !== null && p.tag === 6 ? (l(j, p.sibling), R = n(p, E), R.return = j, j = R) : (l(j, p), R = rc(E, j.mode, R), R.return = j, j = R), s(j)) : l(j, p);
    }
    return function(j, p, E, R) {
      try {
        Bn = 0;
        var ae = Be(
          j,
          p,
          E,
          R
        );
        return Fa = null, ae;
      } catch (F) {
        if (F === $a || F === qu) throw F;
        var we = Mt(29, F, null, j.mode);
        return we.lanes = R, we.return = j, we;
      }
    };
  }
  var pa = bo(!0), jo = bo(!1), Hl = !1;
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
  function kl(e) {
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
  function kn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, nl(e, l);
    }
  }
  function _c(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = s : i = i.next = s, l = l.next;
        } while (l !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
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
      var e = Ja;
      if (e !== null) throw e;
    }
  }
  function Yn(e, t, l, a) {
    Nc = !1;
    var n = e.updateQueue;
    Hl = !1;
    var i = n.firstBaseUpdate, s = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var m = r, _ = m.next;
      m.next = null, s === null ? i = _ : s.next = _, s = m;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, r = M.lastBaseUpdate, r !== s && (r === null ? M.firstBaseUpdate = _ : r.next = _, M.lastBaseUpdate = m));
    }
    if (i !== null) {
      var q = n.baseState;
      s = 0, M = _ = m = null, r = i;
      do {
        var T = r.lane & -536870913, z = T !== r.lane;
        if (z ? (_e & T) === T : (a & T) === T) {
          T !== 0 && T === Ka && (Nc = !0), M !== null && (M = M.next = {
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
                Hl = !0;
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
          }, M === null ? (_ = M = z, m = q) : M = M.next = z, s |= T;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          z = r, r = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
        }
      } while (!0);
      M === null && (m = q), n.baseState = m, n.firstBaseUpdate = _, n.lastBaseUpdate = M, i === null && (n.shared.lanes = 0), Ql |= s, e.lanes = s, e.memoizedState = q;
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
  var Wa = v(null), Lu = v(0);
  function _o(e, t) {
    e = Nl, X(Lu, e), X(Wa, t), Nl = e | t.baseLanes;
  }
  function Tc() {
    X(Lu, Nl), X(Wa, Wa.current);
  }
  function Ac() {
    Nl = Lu.current, D(Wa), D(Lu);
  }
  var Ot = v(null), Kt = null;
  function Yl(e) {
    var t = e.alternate;
    X(Ke, Ke.current & 1), X(Ot, e), Kt === null && (t === null || Wa.current !== null || t.memoizedState !== null) && (Kt = e);
  }
  function zc(e) {
    X(Ke, Ke.current), X(Ot, e), Kt === null && (Kt = e);
  }
  function No(e) {
    e.tag === 22 ? (X(Ke, Ke.current), X(Ot, e), Kt === null && (Kt = e)) : Gl();
  }
  function Gl() {
    X(Ke, Ke.current), X(Ot, Ot.current);
  }
  function Ut(e) {
    D(Ot), Kt === e && (Kt = null), D(Ke);
  }
  var Ke = v(0);
  function Yu(e) {
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
  var gl = 0, ge = null, Re = null, We = null, Gu = !1, Ia = !1, xa = !1, Vu = 0, Gn = 0, Pa = null, Lm = 0;
  function Xe() {
    throw Error(f(321));
  }
  function wc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Dt(e[l], t[l])) return !1;
    return !0;
  }
  function Cc(e, t, l, a, n, i) {
    return gl = i, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? rf : Qc, xa = !1, i = l(a, n), xa = !1, Ia && (i = Ao(
      t,
      l,
      a,
      n
    )), To(e), i;
  }
  function To(e) {
    x.H = Qn;
    var t = Re !== null && Re.next !== null;
    if (gl = 0, We = Re = ge = null, Gu = !1, Gn = 0, Pa = null, t) throw Error(f(300));
    e === null || Ie || (e = e.dependencies, e !== null && Ou(e) && (Ie = !0));
  }
  function Ao(e, t, l, a) {
    ge = e;
    var n = 0;
    do {
      if (Ia && (Pa = null), Gn = 0, Ia = !1, 25 <= n) throw Error(f(301));
      if (n += 1, We = Re = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      x.H = of, i = t(l, a);
    } while (Ia);
    return i;
  }
  function Ym() {
    var e = x.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Vn(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ge.flags |= 1024), t;
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
    gl = 0, We = Re = ge = null, Ia = !1, Gn = Vu = 0, Pa = null;
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
  function Vn(e) {
    var t = Gn;
    return Gn += 1, Pa === null && (Pa = []), e = go(Pa, e, t), t = ge, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? rf : Qc), e;
  }
  function Qu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vn(e);
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
    var n = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = i.next, i.next = s;
      }
      t.baseQueue = n = i, a.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var r = s = null, m = null, _ = t, M = !1;
      do {
        var q = _.lane & -536870913;
        if (q !== _.lane ? (_e & q) === q : (gl & q) === q) {
          var T = _.revertLane;
          if (T === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), q === Ka && (M = !0);
          else if ((gl & T) === T) {
            _ = _.next, T === Ka && (M = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (r = m = q, s = i) : m = m.next = q, ge.lanes |= T, Ql |= T;
          q = _.action, xa && l(i, q), i = _.hasEagerState ? _.eagerState : l(i, q);
        } else
          T = {
            lane: q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (r = m = T, s = i) : m = m.next = T, ge.lanes |= q, Ql |= q;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (m === null ? s = i : m.next = r, !Dt(i, e.memoizedState) && (Ie = !0, M && (l = Ja, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = s, e.baseQueue = m, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function qc(e) {
    var t = Je(), l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var s = n = n.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== n);
      Dt(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function zo(e, t, l) {
    var a = ge, n = Je(), i = Te;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var s = !Dt(
      (Re || n).memoizedState,
      l
    );
    if (s && (n.memoizedState = l, Ie = !0), n = n.queue, kc(Do.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || s || We !== null && We.memoizedState.tag & 1) {
      if (a.flags |= 2048, en(
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
      ), ke === null) throw Error(f(349));
      i || (gl & 127) !== 0 || wo(a, t, l);
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
    var t = oa(e, 2);
    t !== null && At(t, e, 2);
  }
  function Bc(e) {
    var t = pt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), xa) {
        bt(!0);
        try {
          l();
        } finally {
          bt(!1);
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
  function Gm(e, t, l, a, n) {
    if ($u(e)) throw Error(f(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      x.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, Ro(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function Ro(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var i = x.T, s = {};
      x.T = s;
      try {
        var r = l(n, a), m = x.S;
        m !== null && m(s, r), qo(e, t, r);
      } catch (_) {
        Hc(e, t, _);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), x.T = i;
      }
    } else
      try {
        i = l(n, a), qo(e, t, i);
      } catch (_) {
        Hc(e, t, _);
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
  function ko(e, t) {
    return t;
  }
  function Lo(e, t) {
    if (Te) {
      var l = ke.formState;
      if (l !== null) {
        e: {
          var a = ge;
          if (Te) {
            if (Le) {
              t: {
                for (var n = Le, i = Zt; n.nodeType !== 8; ) {
                  if (!i) {
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
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Le = Jt(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            ql(a);
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
      lastRenderedReducer: ko,
      lastRenderedState: t
    }, l.queue = a, l = uf.bind(
      null,
      ge,
      a
    ), a.dispatch = l, a = Bc(!1), i = Xc.bind(
      null,
      ge,
      !1,
      a.queue
    ), a = pt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = Gm.bind(
      null,
      ge,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Yo(e) {
    var t = Je();
    return Go(t, Re, e);
  }
  function Go(e, t, l) {
    if (t = Rc(
      e,
      t,
      ko
    )[0], e = Zu(pl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Vn(t);
      } catch (s) {
        throw s === $a ? qu : s;
      }
    else a = t;
    t = Je();
    var n = t.queue, i = n.dispatch;
    return l !== t.memoizedState && (ge.flags |= 2048, en(
      9,
      { destroy: void 0 },
      Vm.bind(null, n, l),
      null
    )), [a, i, e];
  }
  function Vm(e, t) {
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
  function en(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ge.updateQueue, t === null && (t = Xu(), ge.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Xo() {
    return Je().memoizedState;
  }
  function Ku(e, t, l, a) {
    var n = pt();
    ge.flags |= e, n.memoizedState = en(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ju(e, t, l, a) {
    var n = Je();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Re !== null && a !== null && wc(a, Re.memoizedState.deps) ? n.memoizedState = en(t, i, l, a) : (ge.flags |= e, n.memoizedState = en(
      1 | t,
      i,
      l,
      a
    ));
  }
  function Qo(e, t) {
    Ku(8390656, 8, e, t);
  }
  function kc(e, t) {
    Ju(2048, 8, e, t);
  }
  function Xm(e) {
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
    return Xm({ ref: t, nextImpl: e }), function() {
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
  function Lc() {
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
    if (a = e(), xa) {
      bt(!0);
      try {
        e();
      } finally {
        bt(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Yc(e, t, l) {
    return l === void 0 || (gl & 1073741824) !== 0 && (_e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = ed(), ge.lanes |= e, Ql |= e, l);
  }
  function Po(e, t, l, a) {
    return Dt(l, t) ? l : Wa.current !== null ? (e = Yc(e, l, a), Dt(e, t) || (Ie = !0), e) : (gl & 42) === 0 || (gl & 1073741824) !== 0 && (_e & 261930) === 0 ? (Ie = !0, e.memoizedState = l) : (e = ed(), ge.lanes |= e, Ql |= e, t);
  }
  function ef(e, t, l, a, n) {
    var i = d.p;
    d.p = i !== 0 && 8 > i ? i : 8;
    var s = x.T, r = {};
    x.T = r, Xc(e, !1, t, l);
    try {
      var m = n(), _ = x.S;
      if (_ !== null && _(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var M = km(
          m,
          a
        );
        Xn(
          e,
          t,
          M,
          Bt(e)
        );
      } else
        Xn(
          e,
          t,
          a,
          Bt(e)
        );
    } catch (q) {
      Xn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: q },
        Bt()
      );
    } finally {
      d.p = i, s !== null && r.types !== null && (s.types = r.types), x.T = s;
    }
  }
  function Qm() {
  }
  function Gc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = tf(e).queue;
    ef(
      e,
      n,
      t,
      G,
      l === null ? Qm : function() {
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
    t.next === null && (t = e.alternate.memoizedState), Xn(
      e,
      t.next.queue,
      {},
      Bt()
    );
  }
  function Vc() {
    return ft(cu);
  }
  function af() {
    return Je().memoizedState;
  }
  function nf() {
    return Je().memoizedState;
  }
  function Zm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Bt();
          e = kl(l);
          var a = Ll(t, e, l);
          a !== null && (At(a, t, l), kn(a, t, l)), t = { cache: pc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Km(e, t, l) {
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
    if ($u(e)) cf(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var s = t.lastRenderedState, r = i(s, l);
          if (n.hasEagerState = !0, n.eagerState = r, Dt(r, s))
            return wu(e, t, n, 0), ke === null && zu(), !1;
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
    Ia = Gu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function sf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, nl(e, l);
    }
  }
  var Qn = {
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
  Qn.useEffectEvent = Xe;
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
      if (xa) {
        bt(!0);
        try {
          e();
        } finally {
          bt(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = pt();
      if (l !== void 0) {
        var n = l(t);
        if (xa) {
          bt(!0);
          try {
            l(t);
          } finally {
            bt(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = Km.bind(
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
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var l = pt();
      return Yc(l, e, t);
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
        if (l = t(), ke === null)
          throw Error(f(349));
        (_e & 127) !== 0 || wo(a, t, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return n.queue = i, Qo(Do.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, en(
        9,
        { destroy: void 0 },
        Co.bind(
          null,
          a,
          i,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = pt(), t = ke.identifierPrefix;
      if (Te) {
        var l = il, a = ul;
        l = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Vu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Lm++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Vc,
    useFormState: Lo,
    useActionState: Lo,
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
      return pt().memoizedState = Zm.bind(
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
    useEffect: kc,
    useImperativeHandle: Fo,
    useInsertionEffect: Ko,
    useLayoutEffect: Jo,
    useMemo: Io,
    useReducer: Zu,
    useRef: Xo,
    useState: function() {
      return Zu(pl);
    },
    useDebugValue: Lc,
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
        typeof e == "boolean" ? e : Vn(e),
        t
      ];
    },
    useSyncExternalStore: zo,
    useId: af,
    useHostTransitionStatus: Vc,
    useFormState: Yo,
    useActionState: Yo,
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
    useEffect: kc,
    useImperativeHandle: Fo,
    useInsertionEffect: Ko,
    useLayoutEffect: Jo,
    useMemo: Io,
    useReducer: qc,
    useRef: Xo,
    useState: function() {
      return qc(pl);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var l = Je();
      return Re === null ? Yc(l, e, t) : Po(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qc(pl)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Vn(e),
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
      var a = Bt(), n = kl(a);
      n.payload = t, l != null && (n.callback = l), t = Ll(e, n, a), t !== null && (At(t, e, a), kn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Bt(), n = kl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Ll(e, n, a), t !== null && (At(t, e, a), kn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Bt(), a = kl(l);
      a.tag = 2, t != null && (a.callback = t), t = Ll(e, a, l), t !== null && (At(t, e, l), kn(t, e, l));
    }
  };
  function ff(e, t, l, a, n, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Dn(l, a) || !Dn(n, i) : !0;
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
  function hf(e) {
    Au(e);
  }
  function mf(e) {
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
    return l = kl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Fu(e, t);
    }, l;
  }
  function gf(e) {
    return e = kl(e), e.tag = 3, e;
  }
  function pf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        vf(t, l, a);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      vf(t, l, a), typeof n != "function" && (Zl === null ? Zl = /* @__PURE__ */ new Set([this]) : Zl.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function Jm(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Za(
        t,
        l,
        n,
        !0
      ), l = Ot.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Kt === null ? si() : l.alternate === null && Qe === 0 && (Qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Bu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), xs(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Bu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), xs(e, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return xs(e, a, n), si(), !1;
    }
    if (Te)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== hc && (e = Error(f(422), { cause: a }), Un(Vt(e, l)))) : (a !== hc && (t = Error(f(423), {
        cause: a
      }), Un(
        Vt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Vt(a, l), n = Jc(
        e.stateNode,
        a,
        n
      ), _c(e, n), Qe !== 4 && (Qe = 2)), !1;
    var i = Error(f(520), { cause: a });
    if (i = Vt(i, l), Pn === null ? Pn = [i] : Pn.push(i), Qe !== 4 && (Qe = 2), t === null) return !0;
    a = Vt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Jc(l.stateNode, a, e), _c(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Zl === null || !Zl.has(i))))
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
    t.child = e === null ? jo(t, null, l, a) : pa(
      t,
      e.child,
      l,
      a
    );
  }
  function xf(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
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
      i,
      n
    ), r = Dc(), e !== null && !Ie ? (Mc(e, t, n), xl(e, t, n)) : (Te && r && fc(t), t.flags |= 1, dt(e, t, a, n), t.child);
  }
  function bf(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !sc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, jf(
        e,
        t,
        i,
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
    if (i = e.child, !as(e, n)) {
      var s = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Dn, l(s, a) && e.ref === t.ref)
        return xl(e, t, n);
    }
    return t.flags |= 1, e = hl(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function jf(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Dn(i, a) && e.ref === t.ref)
        if (Ie = !1, t.pendingProps = a = i, as(e, n))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else
          return t.lanes = e.lanes, xl(e, t, n);
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
    var n = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, t.child = null;
        return Ef(
          e,
          t,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ru(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? _o(t, i) : Tc(), No(t);
      else
        return a = t.lanes = 536870912, Ef(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (Ru(t, i.cachePool), _o(t, i), Gl(), t.memoizedState = null) : (e !== null && Ru(t, null), Tc(), Gl());
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
    var i = bc();
    return i = i === null ? null : { parent: Fe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ru(t, null), Tc(), No(t), e !== null && Za(e, t, a, !0), t.childLanes = n, null;
  }
  function Wu(e, t) {
    return t = Pu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _f(e, t, l) {
    return pa(t, e.child, null, l), e = Wu(t, t.pendingProps), e.flags |= 2, Ut(t), t.memoizedState = null, e;
  }
  function $m(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (a.mode === "hidden")
          return e = Wu(t, a), t.lanes = 536870912, Zn(null, e);
        if (zc(t), (e = Le) ? (e = qd(
          e,
          Zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ul !== null ? { id: ul, overflow: il } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uo(e), l.return = t, t.child = l, ot = t, Le = null)) : e = null, e === null) throw ql(t);
        return t.lanes = 536870912, null;
      }
      return Wu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
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
      else if (Ie || Za(e, t, l, !1), n = (l & e.childLanes) !== 0, Ie || n) {
        if (a = ke, a !== null && (s = dr(a, l), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, oa(e, s), At(a, e, s), $c;
        si(), t = _f(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Le = Jt(s.nextSibling), ot = t, Te = !0, Rl = null, Zt = !1, e !== null && so(t, e), t = Wu(t, a), t.flags |= 4096;
      return t;
    }
    return e = hl(e.child, {
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
    ), a = Dc(), e !== null && !Ie ? (Mc(e, t, n), xl(e, t, n)) : (Te && a && fc(t), t.flags |= 1, dt(e, t, l, n), t.child);
  }
  function Nf(e, t, l, a, n, i) {
    return ma(t), t.updateQueue = null, l = Ao(
      t,
      a,
      l,
      n
    ), To(e), a = Dc(), e !== null && !Ie ? (Mc(e, t, i), xl(e, t, i)) : (Te && a && fc(t), t.flags |= 1, dt(e, t, l, i), t.child);
  }
  function Tf(e, t, l, a, n) {
    if (ma(t), t.stateNode === null) {
      var i = Ga, s = l.contextType;
      typeof s == "object" && s !== null && (i = ft(s)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Kc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Sc(t), s = l.contextType, i.context = typeof s == "object" && s !== null ? ft(s) : Ga, i.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Zc(
        t,
        l,
        s,
        a
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Kc.enqueueReplaceState(i, i.state, null), Yn(t, a, i, n), Ln(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var r = t.memoizedProps, m = ba(l, r);
      i.props = m;
      var _ = i.context, M = l.contextType;
      s = Ga, typeof M == "object" && M !== null && (s = ft(M));
      var q = l.getDerivedStateFromProps;
      M = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r || _ !== s) && df(
        t,
        i,
        a,
        s
      ), Hl = !1;
      var T = t.memoizedState;
      i.state = T, Yn(t, a, i, n), Ln(), _ = t.memoizedState, r || T !== _ || Hl ? (typeof q == "function" && (Zc(
        t,
        l,
        q,
        a
      ), _ = t.memoizedState), (m = Hl || ff(
        t,
        l,
        m,
        a,
        T,
        _,
        s
      )) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), i.props = a, i.state = _, i.context = s, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Ec(e, t), s = t.memoizedProps, M = ba(l, s), i.props = M, q = t.pendingProps, T = i.context, _ = l.contextType, m = Ga, typeof _ == "object" && _ !== null && (m = ft(_)), r = l.getDerivedStateFromProps, (_ = typeof r == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== q || T !== m) && df(
        t,
        i,
        a,
        m
      ), Hl = !1, T = t.memoizedState, i.state = T, Yn(t, a, i, n), Ln();
      var z = t.memoizedState;
      s !== q || T !== z || Hl || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof r == "function" && (Zc(
        t,
        l,
        r,
        a
      ), z = t.memoizedState), (M = Hl || ff(
        t,
        l,
        M,
        a,
        T,
        z,
        m
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (_ || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, z, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        z,
        m
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), i.props = a, i.state = z, i.context = m, a = M) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Iu(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = pa(
      t,
      e.child,
      null,
      n
    ), t.child = pa(
      t,
      null,
      l,
      n
    )) : dt(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = xl(
      e,
      t,
      n
    ), e;
  }
  function Af(e, t, l, a) {
    return da(), t.flags |= 256, dt(e, t, l, a), t.child;
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
    var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (Ke.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (n ? Yl(t) : Gl(), (e = Le) ? (e = qd(
          e,
          Zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ul !== null ? { id: ul, overflow: il } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uo(e), l.return = t, t.child = l, ot = t, Le = null)) : e = null, e === null) throw ql(t);
        return Rs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, n ? (Gl(), n = t.mode, r = Pu(
        { mode: "hidden", children: r },
        n
      ), a = fa(
        a,
        n,
        l,
        null
      ), r.return = t, a.return = t, r.sibling = a, t.child = r, a = t.child, a.memoizedState = Ic(l), a.childLanes = Pc(
        e,
        s,
        l
      ), t.memoizedState = Wc, Zn(null, a)) : (Yl(t), es(t, r));
    }
    var m = e.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (i)
        t.flags & 256 ? (Yl(t), t.flags &= -257, t = ts(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Gl(), t.child = e.child, t.flags |= 128, t = null) : (Gl(), r = a.fallback, n = t.mode, a = Pu(
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
        ), a = t.child, a.memoizedState = Ic(l), a.childLanes = Pc(
          e,
          s,
          l
        ), t.memoizedState = Wc, t = Zn(null, a));
      else if (Yl(t), Rs(r)) {
        if (s = r.nextSibling && r.nextSibling.dataset, s) var _ = s.dgst;
        s = _, a = Error(f(419)), a.stack = "", a.digest = s, Un({ value: a, source: null, stack: null }), t = ts(
          e,
          t,
          l
        );
      } else if (Ie || Za(e, t, l, !1), s = (l & e.childLanes) !== 0, Ie || s) {
        if (s = ke, s !== null && (a = dr(s, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, oa(e, a), At(s, e, a), $c;
        Us(r) || si(), t = ts(
          e,
          t,
          l
        );
      } else
        Us(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Le = Jt(
          r.nextSibling
        ), ot = t, Te = !0, Rl = null, Zt = !1, e !== null && so(t, e), t = es(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Gl(), r = a.fallback, n = t.mode, m = e.child, _ = m.sibling, a = hl(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, _ !== null ? r = hl(
      _,
      r
    ) : (r = fa(
      r,
      n,
      l,
      null
    ), r.flags |= 2), r.return = t, a.return = t, a.sibling = r, t.child = a, Zn(null, a), a = t.child, r = e.child.memoizedState, r === null ? r = Ic(l) : (n = r.cachePool, n !== null ? (m = Fe._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = yo(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: n
    }), a.memoizedState = r, a.childLanes = Pc(
      e,
      s,
      l
    ), t.memoizedState = Wc, Zn(e.child, a)) : (Yl(t), l = e.child, e = l.sibling, l = hl(l, {
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
    return pa(t, e.child, null, l), e = es(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), vc(e.return, t, l);
  }
  function ls(e, t, l, a, n, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = l, s.tailMode = n, s.treeForkCount = i);
  }
  function Cf(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var s = Ke.current, r = (s & 2) !== 0;
    if (r ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, X(Ke, s), dt(e, t, a, l), a = Te ? On : 0, !r && e !== null && (e.flags & 128) !== 0)
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
          e = l.alternate, e !== null && Yu(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), ls(
          t,
          !1,
          n,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Yu(e) === null) {
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
          i,
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
  function xl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Ql |= t.lanes, (l & t.childLanes) === 0)
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
      for (e = t.child, l = hl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = hl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function as(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function Fm(e, t, l) {
    switch (t.tag) {
      case 3:
        Y(t, t.stateNode.containerInfo), Bl(t, Fe, e.memoizedState.cache), da();
        break;
      case 27:
      case 5:
        oe(t);
        break;
      case 4:
        Y(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bl(
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
          return a.dehydrated !== null ? (Yl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? zf(e, t, l) : (Yl(t), e = xl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Yl(t);
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
        Bl(t, Fe, e.memoizedState.cache);
    }
    return xl(e, t, l);
  }
  function Df(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ie = !0;
      else {
        if (!as(e, l) && (t.flags & 128) === 0)
          return Ie = !1, Fm(
            e,
            t,
            l
          );
        Ie = (e.flags & 131072) !== 0;
      }
    else
      Ie = !1, Te && (t.flags & 1048576) !== 0 && co(t, On, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = va(t.elementType), t.type = e, typeof e == "function")
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
                t.tag = 11, t = xf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === w) {
                t.tag = 14, t = bf(
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
          if (Y(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          n = i.element, Ec(e, t), Yn(t, a, null, l);
          var s = t.memoizedState;
          if (a = s.cache, Bl(t, Fe, a), a !== i.cache && gc(
            t,
            [Fe],
            l,
            !0
          ), Ln(), a = s.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Af(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Vt(
                Error(f(424)),
                t
              ), Un(n), t = Af(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = Jt(e.firstChild), ot = t, Te = !0, Rl = null, Zt = !0, l = jo(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (da(), a === n) {
              t = xl(
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
        ).createElement(l), a[rt] = t, a[jt] = e, ht(a, l, e), it(a), t.stateNode = a) : t.memoizedState = Gd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return oe(t), e === null && Te && (a = t.stateNode = kd(
          t.type,
          t.pendingProps,
          re.current
        ), ot = t, Zt = !0, n = Le, Fl(t.type) ? (qs = n, Le = Jt(a.firstChild)) : Le = n), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Iu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((n = a = Le) && (a = Ty(
          a,
          t.type,
          t.pendingProps,
          Zt
        ), a !== null ? (t.stateNode = a, ot = t, Le = Jt(a.firstChild), Zt = !1, n = !0) : n = !1), n || ql(t)), oe(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, Ds(n, i) ? a = null : s !== null && Ds(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Cc(
          e,
          t,
          Ym,
          null,
          null,
          l
        ), cu._currentValue = n), Iu(e, t), dt(e, t, a, l), t.child;
      case 6:
        return e === null && Te && ((e = l = Le) && (l = Ay(
          l,
          t.pendingProps,
          Zt
        ), l !== null ? (t.stateNode = l, ot = t, Le = null, e = !0) : e = !1), e || ql(t)), null;
      case 13:
        return zf(e, t, l);
      case 4:
        return Y(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = pa(
          t,
          null,
          a,
          l
        ) : dt(e, t, a, l), t.child;
      case 11:
        return xf(
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
        return a = t.pendingProps, Bl(t, t.type, a.value), dt(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, ma(t), n = ft(n), a = a(n), t.flags |= 1, dt(e, t, a, l), t.child;
      case 14:
        return bf(
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
        return $m(e, t, l);
      case 22:
        return Sf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return ma(t), a = ft(Fe), e === null ? (n = bc(), n === null && (n = ke, i = pc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = { parent: a, cache: n }, Sc(t), Bl(t, Fe, n)) : ((e.lanes & l) !== 0 && (Ec(e, t), Yn(t, null, null, l), Ln()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Bl(t, Fe, a)) : (a = i.cache, Bl(t, Fe, a), a !== n.cache && gc(
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
  function bl(e) {
    e.flags |= 4;
  }
  function ns(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (nd()) e.flags |= 8192;
        else
          throw ga = Bu, jc;
    } else e.flags &= -16777217;
  }
  function Mf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Kd(t))
      if (nd()) e.flags |= 8192;
      else
        throw ga = Bu, jc;
  }
  function ei(e, t) {
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
  function Wm(e, t, l) {
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
        return Ye(t), null;
      case 1:
        return Ye(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vl(Fe), ue(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Qa(t) ? bl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mc())), Ye(t), null;
      case 26:
        var n = t.type, i = t.memoizedState;
        return e === null ? (bl(t), i !== null ? (Ye(t), Mf(t, i)) : (Ye(t), ns(
          t,
          n,
          null,
          a,
          l
        ))) : i ? i !== e.memoizedState ? (bl(t), Ye(t), Mf(t, i)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && bl(t), Ye(t), ns(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (K(t), l = re.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && bl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ye(t), null;
          }
          e = Q.current, Qa(t) ? ro(t) : (e = kd(n, a, l), t.stateNode = e, bl(t));
        }
        return Ye(t), null;
      case 5:
        if (K(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && bl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ye(t), null;
          }
          if (i = Q.current, Qa(t))
            ro(t);
          else {
            var s = yi(
              re.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? s.createElement("select", {
                      is: a.is
                    }) : s.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? s.createElement(n, { is: a.is }) : s.createElement(n);
                }
            }
            i[rt] = t, i[jt] = a;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
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
            t.stateNode = i;
            e: switch (ht(i, n, a), n) {
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
            a && bl(t);
          }
        }
        return Ye(t), ns(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && bl(t);
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
            e[rt] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || zd(e.nodeValue, l)), e || ql(t, !0);
          } else
            e = yi(e).createTextNode(
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
            l = mc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
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
            n = mc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
        }
        return Ut(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), ei(t, t.updateQueue), Ye(t), null);
      case 4:
        return ue(), e === null && Ts(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return vl(t.type), Ye(t), null;
      case 19:
        if (D(Ke), a = t.memoizedState, a === null) return Ye(t), null;
        if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) Kn(a, !1);
          else {
            if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Yu(e), i !== null) {
                  for (t.flags |= 128, Kn(a, !1), e = i.updateQueue, t.updateQueue = e, ei(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    no(l, e), l = l.sibling;
                  return X(
                    Ke,
                    Ke.current & 1 | 2
                  ), Te && ml(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ze() > ui && (t.flags |= 128, n = !0, Kn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Yu(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, ei(t, e), Kn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Te)
                return Ye(t), null;
            } else
              2 * Ze() - a.renderingStartTime > ui && l !== 536870912 && (t.flags |= 128, n = !0, Kn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ze(), e.sibling = null, l = Ke.current, X(
          Ke,
          n ? l & 1 | 2 : l & 1
        ), Te && ml(t, a.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return Ut(t), Ac(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), l = t.updateQueue, l !== null && ei(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && D(ya), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), vl(Fe), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Im(e, t) {
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
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ut(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(Ke), null;
      case 4:
        return ue(), null;
      case 10:
        return vl(t.type), null;
      case 22:
      case 23:
        return Ut(t), Ac(), e !== null && D(ya), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
        D(Ke);
        break;
      case 10:
        vl(t.type);
        break;
      case 22:
      case 23:
        Ut(t), Ac(), e !== null && D(ya);
        break;
      case 24:
        vl(Fe);
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
            var i = l.create, s = l.inst;
            a = i(), s.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      Oe(t, t.return, r);
    }
  }
  function Vl(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst, r = s.destroy;
            if (r !== void 0) {
              s.destroy = void 0, n = t;
              var m = l, _ = r;
              try {
                _();
              } catch (M) {
                Oe(
                  n,
                  m,
                  M
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (M) {
      Oe(t, t.return, M);
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
  function cl(e, t) {
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
      by(a, e.type, l, t), a[jt] = t;
    } catch (n) {
      Oe(e, e.return, n);
    }
  }
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fl(e.type) || e.tag === 4;
  }
  function is(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cs(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = fl));
    else if (a !== 4 && (a === 27 && Fl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (cs(e, t, l), e = e.sibling; e !== null; )
        cs(e, t, l), e = e.sibling;
  }
  function ti(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Fl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (ti(e, t, l), e = e.sibling; e !== null; )
        ti(e, t, l), e = e.sibling;
  }
  function Hf(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      ht(t, a, l), t[rt] = e, t[jt] = l;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  var jl = !1, Pe = !1, ss = !1, kf = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function Pm(e, t) {
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
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var s = 0, r = -1, m = -1, _ = 0, M = 0, q = e, T = null;
            t: for (; ; ) {
              for (var z; q !== l || n !== 0 && q.nodeType !== 3 || (r = s + n), q !== i || a !== 0 && q.nodeType !== 3 || (m = s + a), q.nodeType === 3 && (s += q.nodeValue.length), (z = q.firstChild) !== null; )
                T = q, q = z;
              for (; ; ) {
                if (q === e) break t;
                if (T === l && ++_ === n && (r = s), T === i && ++M === a && (m = s), (z = q.nextSibling) !== null) break;
                q = T, T = q.parentNode;
              }
              q = z;
            }
            l = r === -1 || m === -1 ? null : { start: r, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Cs = { focusedElem: e, selectionRange: l }, Si = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var $ = ba(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    $,
                    i
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
  function Lf(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        El(e, l), a & 4 && Jn(5, l);
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
        a & 64 && Uf(l), a & 512 && $n(l, l.return);
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
        El(e, l), t === null && a & 4 && qf(l), a & 512 && $n(l, l.return);
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
          var i = Pe;
          jl = a, (Pe = t) && !i ? _l(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : El(e, l), jl = n, Pe = i;
        }
        break;
      case 30:
        break;
      default:
        El(e, l);
    }
  }
  function Yf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Hi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, Et = !1;
  function Sl(e, t, l) {
    for (l = l.child; l !== null; )
      Gf(e, t, l), l = l.sibling;
  }
  function Gf(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(ua, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Pe || cl(l, t), Sl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Pe || cl(l, t);
        var a = Ge, n = Et;
        Fl(l.type) && (Ge = l.stateNode, Et = !1), Sl(
          e,
          t,
          l
        ), nu(l.stateNode), Ge = a, Et = n;
        break;
      case 5:
        Pe || cl(l, t);
      case 6:
        if (a = Ge, n = Et, Ge = null, Sl(
          e,
          t,
          l
        ), Ge = a, Et = n, Ge !== null)
          if (Et)
            try {
              (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(l.stateNode);
            } catch (i) {
              Oe(
                l,
                t,
                i
              );
            }
          else
            try {
              Ge.removeChild(l.stateNode);
            } catch (i) {
              Oe(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Ge !== null && (Et ? (e = Ge, Ud(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), hn(e)) : Ud(Ge, l.stateNode));
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
        Vl(2, l, t), Pe || Vl(4, l, t), Sl(
          e,
          t,
          l
        );
        break;
      case 1:
        Pe || (cl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Rf(
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
        hn(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
    }
  }
  function Xf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        hn(e);
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
        return t === null && (t = e.stateNode = new kf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new kf()), t;
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
        var n = l[a], i = e, s = t, r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Fl(r.type)) {
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
        Gf(i, s, n), Ge = null, Et = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Qf(t, e), t = t.sibling;
  }
  var el = null;
  function Qf(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _t(t, e), Nt(e), a & 4 && (Vl(3, e, e.return), Jn(3, e), Vl(5, e, e.return));
        break;
      case 1:
        _t(t, e), Nt(e), a & 512 && (Pe || l === null || cl(l, l.return)), a & 64 && jl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = el;
        if (_t(t, e), Nt(e), a & 512 && (Pe || l === null || cl(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Sn] || i[rt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), ht(i, a, l), i[rt] = e, it(i), a = i;
                      break e;
                    case "link":
                      var s = Qd(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (s) {
                        for (var r = 0; r < s.length; r++)
                          if (i = s[r], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(r, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), ht(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = Qd(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (r = 0; r < s.length; r++)
                          if (i = s[r], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(r, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), ht(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  i[rt] = e, it(i), a = i;
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
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Zd(
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
        _t(t, e), Nt(e), a & 512 && (Pe || l === null || cl(l, l.return)), l !== null && a & 4 && us(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (_t(t, e), Nt(e), a & 512 && (Pe || l === null || cl(l, l.return)), e.flags & 32) {
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
        if (pi = null, n = el, el = vi(t.containerInfo), _t(t, e), el = n, Nt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            hn(t.containerInfo);
          } catch ($) {
            Oe(e, e.return, $);
          }
        ss && (ss = !1, Zf(e));
        break;
      case 4:
        a = el, el = vi(
          e.stateNode.containerInfo
        ), _t(t, e), Nt(e), el = a;
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
        var m = l !== null && l.memoizedState !== null, _ = jl, M = Pe;
        if (jl = _ || n, Pe = M || m, _t(t, e), Pe = M, jl = _, Nt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || m || jl || Pe || ja(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (i = m.stateNode, n)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    r = m.stateNode;
                    var q = m.memoizedProps.style, T = q != null && q.hasOwnProperty("display") ? q.display : null;
                    r.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch ($) {
                  Oe(m, m.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch ($) {
                  Oe(m, m.return, $);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                m = t;
                try {
                  var z = m.stateNode;
                  n ? Rd(z, !0) : Rd(m.stateNode, !1);
                } catch ($) {
                  Oe(m, m.return, $);
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
            var n = l.stateNode, i = is(e);
            ti(e, i, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (Ra(s, ""), l.flags &= -33);
            var r = is(e);
            ti(e, r, s);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, _ = is(e);
            cs(
              e,
              _,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (M) {
        Oe(e, e.return, M);
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
        Lf(e, t.alternate, t), t = t.sibling;
  }
  function ja(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vl(4, t, t.return), ja(t);
          break;
        case 1:
          cl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Rf(
            t,
            t.return,
            l
          ), ja(t);
          break;
        case 27:
          nu(t.stateNode);
        case 26:
        case 5:
          cl(t, t.return), ja(t);
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
  function _l(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, i = t, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          _l(
            n,
            i,
            l
          ), Jn(4, i);
          break;
        case 1:
          if (_l(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (_) {
              Oe(a, a.return, _);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var r = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  So(m[n], r);
            } catch (_) {
              Oe(a, a.return, _);
            }
          }
          l && s & 64 && Uf(i), $n(i, i.return);
          break;
        case 27:
          Hf(i);
        case 26:
        case 5:
          _l(
            n,
            i,
            l
          ), l && a === null && s & 4 && qf(i), $n(i, i.return);
          break;
        case 12:
          _l(
            n,
            i,
            l
          );
          break;
        case 31:
          _l(
            n,
            i,
            l
          ), l && s & 4 && Vf(n, i);
          break;
        case 13:
          _l(
            n,
            i,
            l
          ), l && s & 4 && Xf(n, i);
          break;
        case 22:
          i.memoizedState === null && _l(
            n,
            i,
            l
          ), $n(i, i.return);
          break;
        case 30:
          break;
        default:
          _l(
            n,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function rs(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Rn(l));
  }
  function os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Rn(e));
  }
  function tl(e, t, l, a) {
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
            var i = t.memoizedProps, s = i.id, r = i.onPostCommit;
            typeof r == "function" && r(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (m) {
            Oe(t, t.return, m);
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
        i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? tl(
          e,
          t,
          l,
          a
        ) : Fn(e, t) : i._visibility & 2 ? tl(
          e,
          t,
          l,
          a
        ) : (i._visibility |= 2, tn(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && rs(s, t);
        break;
      case 24:
        tl(
          e,
          t,
          l,
          a
        ), n & 2048 && os(t.alternate, t);
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
      var i = e, s = t, r = l, m = a, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          tn(
            i,
            s,
            r,
            m,
            n
          ), Jn(8, s);
          break;
        case 23:
          break;
        case 22:
          var M = s.stateNode;
          s.memoizedState !== null ? M._visibility & 2 ? tn(
            i,
            s,
            r,
            m,
            n
          ) : Fn(
            i,
            s
          ) : (M._visibility |= 2, tn(
            i,
            s,
            r,
            m,
            n
          )), n && _ & 2048 && rs(
            s.alternate,
            s
          );
          break;
        case 24:
          tn(
            i,
            s,
            r,
            m,
            n
          ), n && _ & 2048 && os(s.alternate, s);
          break;
        default:
          tn(
            i,
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
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            Fn(l, a), n & 2048 && rs(
              a.alternate,
              a
            );
            break;
          case 24:
            Fn(l, a), n & 2048 && os(a.alternate, a);
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
        Jf(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Jf(e, t, l) {
    switch (e.tag) {
      case 26:
        ln(
          e,
          t,
          l
        ), e.flags & Wn && e.memoizedState !== null && Ly(
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
        el = vi(e.stateNode.containerInfo), ln(
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
  function $f(e) {
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
        In(e), e.flags & 2048 && Vl(9, e, e.return);
        break;
      case 3:
        In(e);
        break;
      case 12:
        In(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ai(e)) : In(e);
        break;
      default:
        In(e);
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
          Vl(8, t, t.return), ai(t);
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
          Vl(8, l, t);
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
          var n = a.sibling, i = a.return;
          if (Yf(a), a === l) {
            ct = null;
            break e;
          }
          if (n !== null) {
            n.return = i, ct = n;
            break e;
          }
          ct = i;
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
  }, ly = typeof WeakMap == "function" ? WeakMap : Map, De = 0, ke = null, Se = null, _e = 0, Me = 0, Rt = null, Xl = !1, an = !1, fs = !1, Nl = 0, Qe = 0, Ql = 0, Sa = 0, ds = 0, qt = 0, nn = 0, Pn = null, Tt = null, hs = !1, ni = 0, If = 0, ui = 1 / 0, ii = null, Zl = null, lt = 0, Kl = null, un = null, Tl = 0, ms = 0, ys = null, Pf = null, eu = 0, vs = null;
  function Bt() {
    return (De & 2) !== 0 && _e !== 0 ? _e & -_e : x.T !== null ? Ss() : hr();
  }
  function ed() {
    if (qt === 0)
      if ((_e & 536870912) === 0 || Te) {
        var e = Dl;
        Dl <<= 1, (Dl & 3932160) === 0 && (Dl = 262144), qt = e;
      } else qt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), qt;
  }
  function At(e, t, l) {
    (e === ke && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (cn(e, 0), Jl(
      e,
      _e,
      qt,
      !1
    )), le(e, l), ((De & 2) === 0 || e !== ke) && (e === ke && ((De & 2) === 0 && (Sa |= l), Qe === 4 && Jl(
      e,
      _e,
      qt,
      !1
    )), sl(e));
  }
  function td(e, t, l) {
    if ((De & 6) !== 0) throw Error(f(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ve(e, t), n = a ? uy(e, t) : ps(e, t, !0), i = a;
    do {
      if (n === 0) {
        an && !a && Jl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !ay(l)) {
          n = ps(e, t, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var r = e;
              n = Pn;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (cn(r, s).flags |= 256), s = ps(
                r,
                s,
                !1
              ), s !== 2) {
                if (fs && !m) {
                  r.errorRecoveryDisabledLanes |= i, Sa |= i, n = 4;
                  break e;
                }
                i = Tt, Tt = n, i !== null && (Tt === null ? Tt = i : Tt.push.apply(
                  Tt,
                  i
                ));
              }
              n = s;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          cn(e, 0), Jl(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Jl(
                a,
                t,
                qt,
                !Xl
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
            if (Jl(
              a,
              t,
              qt,
              !Xl
            ), Z(a, 0, !0) !== 0) break e;
            Tl = t, a.timeoutHandle = Md(
              ld.bind(
                null,
                a,
                l,
                Tt,
                ii,
                hs,
                t,
                qt,
                Sa,
                nn,
                Xl,
                i,
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
            hs,
            t,
            qt,
            Sa,
            nn,
            Xl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    sl(e);
  }
  function ld(e, t, l, a, n, i, s, r, m, _, M, q, T, z) {
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
        i,
        q
      );
      var $ = (i & 62914560) === i ? ni - Ze() : (i & 4194048) === i ? If - Ze() : 0;
      if ($ = Yy(
        q,
        $
      ), $ !== null) {
        Tl = i, e.cancelPendingCommit = $(
          od.bind(
            null,
            e,
            t,
            i,
            l,
            a,
            n,
            s,
            r,
            m,
            M,
            q,
            null,
            T,
            z
          )
        ), Jl(e, i, s, !_);
        return;
      }
    }
    od(
      e,
      t,
      i,
      l,
      a,
      n,
      s,
      r,
      m
    );
  }
  function ay(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!Dt(i(), n)) return !1;
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
  function Jl(e, t, l, a) {
    t &= ~ds, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - nt(n), s = 1 << i;
      a[i] = -1, n &= ~s;
    }
    l !== 0 && al(e, l, t);
  }
  function ci() {
    return (De & 6) === 0 ? (tu(0), !1) : !0;
  }
  function gs() {
    if (Se !== null) {
      if (Me === 0)
        var e = Se.return;
      else
        e = Se, yl = ha = null, Oc(e), Fa = null, Bn = 0, e = Se;
      for (; e !== null; )
        Of(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function cn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Ey(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tl = 0, gs(), ke = e, Se = l = hl(e.current, null), _e = t, Me = 0, Rt = null, Xl = !1, an = ve(e, t), fs = !1, nn = qt = ds = Sa = Ql = Qe = 0, Tt = Pn = null, hs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - nt(a), i = 1 << n;
        t |= e[n], a &= ~i;
      }
    return Nl = t, zu(), l;
  }
  function ad(e, t) {
    ge = null, x.H = Qn, t === $a || t === qu ? (t = po(), Me = 3) : t === jc ? (t = po(), Me = 4) : Me = t === $c ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Rt = t, Se === null && (Qe = 1, Fu(
      e,
      Vt(t, e.current)
    ));
  }
  function nd() {
    var e = Ot.current;
    return e === null ? !0 : (_e & 4194048) === _e ? Kt === null : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === Kt : !1;
  }
  function ud() {
    var e = x.H;
    return x.H = Qn, e === null ? Qn : e;
  }
  function id() {
    var e = x.A;
    return x.A = ty, e;
  }
  function si() {
    Qe = 4, Xl || (_e & 4194048) !== _e && Ot.current !== null || (an = !0), (Ql & 134217727) === 0 && (Sa & 134217727) === 0 || ke === null || Jl(
      ke,
      _e,
      qt,
      !1
    );
  }
  function ps(e, t, l) {
    var a = De;
    De |= 2;
    var n = ud(), i = id();
    (ke !== e || _e !== t) && (ii = null, cn(e, t)), t = !1;
    var s = Qe;
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          var r = Se, m = Rt;
          switch (Me) {
            case 8:
              gs(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var _ = Me;
              if (Me = 0, Rt = null, sn(e, r, m, _), l && an) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Me, Me = 0, Rt = null, sn(e, r, m, _);
          }
        }
        ny(), s = Qe;
        break;
      } catch (M) {
        ad(e, M);
      }
    while (!0);
    return t && e.shellSuspendCounter++, yl = ha = null, De = a, x.H = n, x.A = i, Se === null && (ke = null, _e = 0, zu()), s;
  }
  function ny() {
    for (; Se !== null; ) cd(Se);
  }
  function uy(e, t) {
    var l = De;
    De |= 2;
    var a = ud(), n = id();
    ke !== e || _e !== t ? (ii = null, ui = Ze() + 500, cn(e, t)) : an = ve(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          t = Se;
          var i = Rt;
          t: switch (Me) {
            case 1:
              Me = 0, Rt = null, sn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (vo(i)) {
                Me = 0, Rt = null, sd(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || ke !== e || (Me = 7), sl(e);
              }, i.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              vo(i) ? (Me = 0, Rt = null, sd(t)) : (Me = 0, Rt = null, sn(e, t, i, 7));
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
                    var m = r.sibling;
                    if (m !== null) Se = m;
                    else {
                      var _ = r.return;
                      _ !== null ? (Se = _, ri(_)) : Se = null;
                    }
                    break t;
                  }
              }
              Me = 0, Rt = null, sn(e, t, i, 5);
              break;
            case 6:
              Me = 0, Rt = null, sn(e, t, i, 6);
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
      } catch (M) {
        ad(e, M);
      }
    while (!0);
    return yl = ha = null, x.H = a, x.A = n, De = l, Se !== null ? 0 : (ke = null, _e = 0, zu(), Qe);
  }
  function iy() {
    for (; Se !== null && !gn(); )
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
  function sn(e, t, l, a) {
    yl = ha = null, Oc(t), Fa = null, Bn = 0;
    var n = t.return;
    try {
      if (Jm(
        e,
        n,
        t,
        l,
        _e
      )) {
        Qe = 1, Fu(
          e,
          Vt(l, e.current)
        ), Se = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw Se = n, i;
      Qe = 1, Fu(
        e,
        Vt(l, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Te || a === 1 ? e = !0 : an || (_e & 536870912) !== 0 ? e = !1 : (Xl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ot.current, a !== null && a.tag === 13 && (a.flags |= 16384))), rd(t, e)) : ri(t);
  }
  function ri(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rd(
          t,
          Xl
        );
        return;
      }
      e = t.return;
      var l = Wm(
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
      var l = Im(e.alternate, e);
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
  function od(e, t, l, a, n, i, s, r, m) {
    e.cancelPendingCommit = null;
    do
      oi();
    while (lt !== 0);
    if ((De & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (i = t.lanes | t.childLanes, i |= ic, Ct(
        e,
        l,
        i,
        s,
        r,
        m
      ), e === ke && (Se = ke = null, _e = 0), un = t, Kl = e, Tl = l, ms = i, ys = n, Pf = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, oy(Na, function() {
        return yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = x.T, x.T = null, n = d.p, d.p = 2, s = De, De |= 4;
        try {
          Pm(e, t, l);
        } finally {
          De = s, d.p = n, x.T = a;
        }
      }
      lt = 1, fd(), dd(), hd();
    }
  }
  function fd() {
    if (lt === 1) {
      lt = 0;
      var e = Kl, t = un, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = x.T, x.T = null;
        var a = d.p;
        d.p = 2;
        var n = De;
        De |= 4;
        try {
          Qf(t, e);
          var i = Cs, s = $r(e.containerInfo), r = i.focusedElem, m = i.selectionRange;
          if (s !== r && r && r.ownerDocument && Jr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && tc(r)) {
              var _ = m.start, M = m.end;
              if (M === void 0 && (M = _), "selectionStart" in r)
                r.selectionStart = _, r.selectionEnd = Math.min(
                  M,
                  r.value.length
                );
              else {
                var q = r.ownerDocument || document, T = q && q.defaultView || window;
                if (T.getSelection) {
                  var z = T.getSelection(), $ = r.textContent.length, ie = Math.min(m.start, $), Be = m.end === void 0 ? ie : Math.min(m.end, $);
                  !z.extend && ie > Be && (s = Be, Be = ie, ie = s);
                  var j = Kr(
                    r,
                    ie
                  ), p = Kr(
                    r,
                    Be
                  );
                  if (j && p && (z.rangeCount !== 1 || z.anchorNode !== j.node || z.anchorOffset !== j.offset || z.focusNode !== p.node || z.focusOffset !== p.offset)) {
                    var E = q.createRange();
                    E.setStart(j.node, j.offset), z.removeAllRanges(), ie > Be ? (z.addRange(E), z.extend(p.node, p.offset)) : (E.setEnd(p.node, p.offset), z.addRange(E));
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
              var R = q[r];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          Si = !!ws, Cs = ws = null;
        } finally {
          De = n, d.p = a, x.T = l;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function dd() {
    if (lt === 2) {
      lt = 0;
      var e = Kl, t = un, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = x.T, x.T = null;
        var a = d.p;
        d.p = 2;
        var n = De;
        De |= 4;
        try {
          Lf(e, t.alternate, t);
        } finally {
          De = n, d.p = a, x.T = l;
        }
      }
      lt = 3;
    }
  }
  function hd() {
    if (lt === 4 || lt === 3) {
      lt = 0, st();
      var e = Kl, t = un, l = Tl, a = Pf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, un = Kl = null, md(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Zl = null), qi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            ua,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = x.T, n = d.p, d.p = 2, x.T = null;
        try {
          for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
            var r = a[s];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          x.T = t, d.p = n;
        }
      }
      (Tl & 3) !== 0 && oi(), sl(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === vs ? eu++ : (eu = 0, vs = e) : eu = 0, tu(0);
    }
  }
  function md(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Rn(t)));
  }
  function oi() {
    return fd(), dd(), hd(), yd();
  }
  function yd() {
    if (lt !== 5) return !1;
    var e = Kl, t = ms;
    ms = 0;
    var l = qi(Tl), a = x.T, n = d.p;
    try {
      d.p = 32 > l ? 32 : l, x.T = null, l = ys, ys = null;
      var i = Kl, s = Tl;
      if (lt = 0, un = Kl = null, Tl = 0, (De & 6) !== 0) throw Error(f(331));
      var r = De;
      if (De |= 4, Ff(i.current), Kf(
        i,
        i.current,
        s,
        l
      ), De = r, tu(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(ua, i);
        } catch {
        }
      return !0;
    } finally {
      d.p = n, x.T = a, md(e, t);
    }
  }
  function vd(e, t, l) {
    t = Vt(l, t), t = Jc(e.stateNode, t, 2), e = Ll(e, t, 2), e !== null && (le(e, 2), sl(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Zl === null || !Zl.has(a))) {
            e = Vt(l, e), l = gf(2), a = Ll(t, l, 2), a !== null && (pf(
              l,
              a,
              t,
              e
            ), le(a, 2), sl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function xs(e, t, l) {
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
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ke === e && (_e & l) === l && (Qe === 4 || Qe === 3 && (_e & 62914560) === _e && 300 > Ze() - ni ? (De & 2) === 0 && cn(e, 0) : ds |= l, nn === _e && (nn = 0)), sl(e);
  }
  function gd(e, t) {
    t === 0 && (t = He()), e = oa(e, t), e !== null && (le(e, t), sl(e));
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
    return Cl(e, t);
  }
  var fi = null, rn = null, bs = !1, di = !1, js = !1, $l = 0;
  function sl(e) {
    e !== rn && e.next === null && (rn === null ? fi = rn = e : rn = rn.next = e), di = !0, bs || (bs = !0, dy());
  }
  function tu(e, t) {
    if (!js && di) {
      js = !0;
      do
        for (var l = !1, a = fi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = a.suspendedLanes, r = a.pingedLanes;
              i = (1 << 31 - nt(42 | e) + 1) - 1, i &= n & ~(s & ~r), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, jd(a, i));
          } else
            i = _e, i = Z(
              a,
              a === ke ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ve(a, i) || (l = !0, jd(a, i));
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
    di = bs = !1;
    var e = 0;
    $l !== 0 && Sy() && (e = $l);
    for (var t = Ze(), l = null, a = fi; a !== null; ) {
      var n = a.next, i = xd(a, t);
      i === 0 ? (a.next = null, l === null ? fi = n : l.next = n, n === null && (rn = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (di = !0)), a = n;
    }
    lt !== 0 && lt !== 5 || tu(e), $l !== 0 && ($l = 0);
  }
  function xd(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - nt(i), r = 1 << s, m = n[s];
      m === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[s] = xe(r, t)) : m <= t && (e.expiredLanes |= r), i &= ~r;
    }
    if (t = ke, l = _e, l = Z(
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
          l = mu;
          break;
        case 32:
          l = Na;
          break;
        case 268435456:
          l = bn;
          break;
        default:
          l = Na;
      }
      return a = bd.bind(null, e), l = Cl(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && rl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function bd(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (oi() && e.callbackNode !== l)
      return null;
    var a = _e;
    return a = Z(
      e,
      e === ke ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (td(e, a, t), xd(e, Ze()), e.callbackNode != null && e.callbackNode === l ? bd.bind(null, e) : null);
  }
  function jd(e, t) {
    if (oi()) return null;
    td(e, t, !0);
  }
  function dy() {
    _y(function() {
      (De & 6) !== 0 ? Cl(
        xn,
        fy
      ) : pd();
    });
  }
  function Ss() {
    if ($l === 0) {
      var e = Ka;
      e === 0 && (e = Aa, Aa <<= 1, (Aa & 261888) === 0 && (Aa = 256)), $l = e;
    }
    return $l;
  }
  function Sd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : bu("" + e);
  }
  function Ed(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function hy(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Sd(
        (n[jt] || null).action
      ), s = a.submitter;
      s && (t = (t = s[jt] || null) ? Sd(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
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
                if ($l !== 0) {
                  var m = s ? Ed(n, s) : new FormData(n);
                  Gc(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (r.preventDefault(), m = s ? Ed(n, s) : new FormData(n), Gc(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Es = 0; Es < uc.length; Es++) {
    var _s = uc[Es], my = _s.toLowerCase(), yy = _s[0].toUpperCase() + _s.slice(1);
    Pt(
      my,
      "on" + yy
    );
  }
  Pt(Ir, "onAnimationEnd"), Pt(Pr, "onAnimationIteration"), Pt(eo, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(Dm, "onTransitionRun"), Pt(Mm, "onTransitionStart"), Pt(Om, "onTransitionCancel"), Pt(to, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ia(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ia(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ia("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ia(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var lu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lu)
  );
  function _d(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var r = a[s], m = r.instance, _ = r.currentTarget;
            if (r = r.listener, m !== i && n.isPropagationStopped())
              break e;
            i = r, n.currentTarget = _;
            try {
              i(n);
            } catch (M) {
              Au(M);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (r = a[s], m = r.instance, _ = r.currentTarget, r = r.listener, m !== i && n.isPropagationStopped())
              break e;
            i = r, n.currentTarget = _;
            try {
              i(n);
            } catch (M) {
              Au(M);
            }
            n.currentTarget = null, i = m;
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
  var hi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ts(e) {
    if (!e[hi]) {
      e[hi] = !0, vr.forEach(function(l) {
        l !== "selectionchange" && (vy.has(l) || Ns(l, !1, e), Ns(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hi] || (t[hi] = !0, Ns("selectionchange", !1, t));
    }
  }
  function Nd(e, t, l, a) {
    switch (eh(t)) {
      case 2:
        var n = Xy;
        break;
      case 8:
        n = Qy;
        break;
      default:
        n = Ys;
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
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var m = s.tag;
              if ((m === 3 || m === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; r !== null; ) {
            if (s = Ca(r), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = s;
              continue e;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    zr(function() {
      var _ = i, M = Xi(l), q = [];
      e: {
        var T = lo.get(e);
        if (T !== void 0) {
          var z = _u, $ = e;
          switch (e) {
            case "keypress":
              if (Su(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = rm;
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
              z = Wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = dm;
              break;
            case Ir:
            case Pr:
            case eo:
              z = em;
              break;
            case to:
              z = mm;
              break;
            case "scroll":
            case "scrollend":
              z = $h;
              break;
            case "wheel":
              z = vm;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = lm;
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
              z = pm;
          }
          var ie = (t & 4) !== 0, Be = !ie && (e === "scroll" || e === "scrollend"), j = ie ? T !== null ? T + "Capture" : null : T;
          ie = [];
          for (var p = _, E; p !== null; ) {
            var R = p;
            if (E = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || E === null || j === null || (R = _n(p, j), R != null && ie.push(
              au(p, R, E)
            )), Be) break;
            p = p.return;
          }
          0 < ie.length && (T = new z(
            T,
            $,
            null,
            l,
            M
          ), q.push({ event: T, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", T && l !== Vi && ($ = l.relatedTarget || l.fromElement) && (Ca($) || $[wa]))
            break e;
          if ((z || T) && (T = M.window === M ? M : (T = M.ownerDocument) ? T.defaultView || T.parentWindow : window, z ? ($ = l.relatedTarget || l.toElement, z = _, $ = $ ? Ca($) : null, $ !== null && (Be = y($), ie = $.tag, $ !== Be || ie !== 5 && ie !== 27 && ie !== 6) && ($ = null)) : (z = null, $ = _), z !== $)) {
            if (ie = Dr, R = "onMouseLeave", j = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (ie = Or, R = "onPointerLeave", j = "onPointerEnter", p = "pointer"), Be = z == null ? T : En(z), E = $ == null ? T : En($), T = new ie(
              R,
              p + "leave",
              z,
              l,
              M
            ), T.target = Be, T.relatedTarget = E, R = null, Ca(M) === _ && (ie = new ie(
              j,
              p + "enter",
              $,
              l,
              M
            ), ie.target = E, ie.relatedTarget = Be, R = ie), Be = R, z && $)
              t: {
                for (ie = gy, j = z, p = $, E = 0, R = j; R; R = ie(R))
                  E++;
                R = 0;
                for (var ae = p; ae; ae = ie(ae))
                  R++;
                for (; 0 < E - R; )
                  j = ie(j), E--;
                for (; 0 < R - E; )
                  p = ie(p), R--;
                for (; E--; ) {
                  if (j === p || p !== null && j === p.alternate) {
                    ie = j;
                    break t;
                  }
                  j = ie(j), p = ie(p);
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
          if (T = _ ? En(_) : window, z = T.nodeName && T.nodeName.toLowerCase(), z === "select" || z === "input" && T.type === "file")
            var we = Yr;
          else if (kr(T))
            if (Gr)
              we = zm;
            else {
              we = Tm;
              var F = Nm;
            }
          else
            z = T.nodeName, !z || z.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? _ && Gi(_.elementType) && (we = Yr) : we = Am;
          if (we && (we = we(e, _))) {
            Lr(
              q,
              we,
              l,
              M
            );
            break e;
          }
          F && F(e, T, _), e === "focusout" && _ && T.type === "number" && _.memoizedProps.value != null && Yi(T, "number", T.value);
        }
        switch (F = _ ? En(_) : window, e) {
          case "focusin":
            (kr(F) || F.contentEditable === "true") && (ka = F, lc = _, Mn = null);
            break;
          case "focusout":
            Mn = lc = ka = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, Fr(q, l, M);
            break;
          case "selectionchange":
            if (Cm) break;
          case "keydown":
          case "keyup":
            Fr(q, l, M);
        }
        var be;
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
          Ha ? Br(e, l) && (Ne = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (Ur && l.locale !== "ko" && (Ha || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Ha && (be = wr()) : (Ol = M, Ki = "value" in Ol ? Ol.value : Ol.textContent, Ha = !0)), F = mi(_, Ne), 0 < F.length && (Ne = new Mr(
          Ne,
          e,
          null,
          l,
          M
        ), q.push({ event: Ne, listeners: F }), be ? Ne.data = be : (be = Hr(l), be !== null && (Ne.data = be)))), (be = bm ? jm(e, l) : Sm(e, l)) && (Ne = mi(_, "onBeforeInput"), 0 < Ne.length && (F = new Mr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          M
        ), q.push({
          event: F,
          listeners: Ne
        }), F.data = be)), hy(
          q,
          e,
          _,
          l,
          M
        );
      }
      _d(q, t);
    });
  }
  function au(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function mi(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = _n(e, l), n != null && a.unshift(
        au(e, n, i)
      ), n = _n(e, t), n != null && a.push(
        au(e, n, i)
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
    for (var i = t._reactName, s = []; l !== null && l !== a; ) {
      var r = l, m = r.alternate, _ = r.stateNode;
      if (r = r.tag, m !== null && m === a) break;
      r !== 5 && r !== 26 && r !== 27 || _ === null || (m = _, n ? (_ = _n(l, i), _ != null && s.unshift(
        au(l, _, m)
      )) : n || (_ = _n(l, i), _ != null && s.push(
        au(l, _, m)
      ))), l = l.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var py = /\r\n?/g, xy = /\u0000|\uFFFD/g;
  function Ad(e) {
    return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(xy, "");
  }
  function zd(e, t) {
    return t = Ad(t), Ad(e) === t;
  }
  function qe(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ra(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ra(e, "" + a);
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
        Tr(e, a, i);
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
        a = bu("" + a), e.setAttribute(l, a);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && qe(e, t, "name", n.name, n, null), qe(
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
        a = bu("" + a), e.setAttribute(l, a);
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
        l = bu("" + a), e.setAttributeNS(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Kh.get(l) || l, gu(e, l, a));
    }
  }
  function zs(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        Tr(e, a, i);
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
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[jt] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : gu(e, l, a);
          }
    }
  }
  function ht(e, t, l) {
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
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
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
                  qe(e, t, i, s, l, null);
              }
          }
        n && qe(e, t, "srcSet", l.srcSet, l, null), a && qe(e, t, "src", l.src, l, null);
        return;
      case "input":
        Ee("invalid", e);
        var r = i = s = n = null, m = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case "name":
                  n = M;
                  break;
                case "type":
                  s = M;
                  break;
                case "checked":
                  m = M;
                  break;
                case "defaultChecked":
                  _ = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  r = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(f(137, t));
                  break;
                default:
                  qe(e, t, a, M, l, null);
              }
          }
        Sr(
          e,
          i,
          r,
          m,
          _,
          s,
          n,
          !1
        );
        return;
      case "select":
        Ee("invalid", e), a = s = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (r = l[n], r != null))
            switch (n) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                s = r;
                break;
              case "multiple":
                a = r;
              default:
                qe(e, t, n, r, l, null);
            }
        t = i, l = s, e.multiple = !!a, t != null ? Ua(e, !!a, t, !1) : l != null && Ua(e, !!a, l, !0);
        return;
      case "textarea":
        Ee("invalid", e), i = n = a = null;
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
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                qe(e, t, s, r, l, null);
            }
        _r(e, a, n, i);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : qe(e, t, m, a, l, null));
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
        for (a = 0; a < lu.length; a++)
          Ee(lu[a], e);
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
        if (Gi(t)) {
          for (M in l)
            l.hasOwnProperty(M) && (a = l[M], a !== void 0 && zs(
              e,
              t,
              M,
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
  function by(e, t, l, a) {
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
        var n = null, i = null, s = null, r = null, m = null, _ = null, M = null;
        for (z in l) {
          var q = l[z];
          if (l.hasOwnProperty(z) && q != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = q;
              default:
                a.hasOwnProperty(z) || qe(e, t, z, null, a, q);
            }
        }
        for (var T in a) {
          var z = a[T];
          if (q = l[T], a.hasOwnProperty(T) && (z != null || q != null))
            switch (T) {
              case "type":
                i = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                _ = z;
                break;
              case "defaultChecked":
                M = z;
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
        Li(
          e,
          s,
          r,
          m,
          _,
          M,
          i,
          n
        );
        return;
      case "select":
        z = s = r = T = null;
        for (i in l)
          if (m = l[i], l.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                z = m;
              default:
                a.hasOwnProperty(i) || qe(
                  e,
                  t,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (i = a[n], m = l[n], a.hasOwnProperty(n) && (i != null || m != null))
            switch (n) {
              case "value":
                T = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== m && qe(
                  e,
                  t,
                  n,
                  i,
                  a,
                  m
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
          if (n = a[s], i = l[s], a.hasOwnProperty(s) && (n != null || i != null))
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
                n !== i && qe(e, t, s, n, a, i);
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
        for (m in a)
          T = a[m], z = l[m], a.hasOwnProperty(m) && T !== z && (T != null || z != null) && (m === "selected" ? e.selected = T && typeof T != "function" && typeof T != "symbol" : qe(
            e,
            t,
            m,
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
          for (M in a)
            T = a[M], z = l[M], !a.hasOwnProperty(M) || T === z || T === void 0 && z === void 0 || zs(
              e,
              t,
              M,
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
        var n = l[a], i = n.transferSize, s = n.initiatorType, r = n.duration;
        if (i && r && wd(s)) {
          for (s = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], _ = m.startTime;
            if (_ > r) break;
            var M = m.transferSize, q = m.initiatorType;
            M && wd(q) && (m = m.responseEnd, s += M * (m < r ? 1 : (r - _) / (m - _)));
          }
          if (--a, t += 8 * (i + s) / (n.duration / 1e3), e++, 10 < e) break;
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
  function Fl(e) {
    return e === "head";
  }
  function Ud(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), hn(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          nu(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, nu(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling, r = i.nodeName;
            i[Sn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
          }
        } else
          l === "body" && nu(e.ownerDocument.body);
      l = n;
    } while (l);
    hn(t);
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
        if (!e[Sn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ay(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function qd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
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
  var qs = null;
  function Bd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Jt(e.nextSibling);
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
  function kd(e, t, l) {
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
  function nu(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Hi(e);
  }
  var $t = /* @__PURE__ */ new Map(), Ld = /* @__PURE__ */ new Set();
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
    var t = Da(e);
    t !== null && t.tag === 5 && t.type === "form" ? lf(t) : Al.r(e);
  }
  var on = typeof document > "u" ? null : document;
  function Yd(e, t, l) {
    var a = on;
    if (a && typeof t == "string" && t) {
      var n = Yt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Ld.has(n) || (Ld.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), ht(t, "link", e), it(t), a.head.appendChild(t)));
    }
  }
  function Dy(e) {
    Al.D(e), Yd("dns-prefetch", e, null);
  }
  function My(e, t) {
    Al.C(e, t), Yd("preconnect", e, t);
  }
  function Oy(e, t, l) {
    Al.L(e, t, l);
    var a = on;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Yt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Yt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Yt(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = fn(e);
          break;
        case "script":
          i = dn(e);
      }
      $t.has(i) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), $t.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(uu(i)) || t === "script" && a.querySelector(iu(i)) || (t = a.createElement("link"), ht(t, "link", e), it(t), a.head.appendChild(t)));
    }
  }
  function Uy(e, t) {
    Al.m(e, t);
    var l = on;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Yt(a) + '"][href="' + Yt(e) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = dn(e);
      }
      if (!$t.has(i) && (e = N({ rel: "modulepreload", href: e }, t), $t.set(i, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(iu(i)))
              return;
        }
        a = l.createElement("link"), ht(a, "link", e), it(a), l.head.appendChild(a);
      }
    }
  }
  function Ry(e, t, l) {
    Al.S(e, t, l);
    var a = on;
    if (a && e) {
      var n = Ma(a).hoistableStyles, i = fn(e);
      t = t || "default";
      var s = n.get(i);
      if (!s) {
        var r = { loading: 0, preload: null };
        if (s = a.querySelector(
          uu(i)
        ))
          r.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = $t.get(i)) && Bs(e, l);
          var m = s = a.createElement("link");
          it(m), ht(m, "link", e), m._p = new Promise(function(_, M) {
            m.onload = _, m.onerror = M;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, gi(s, t, a);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: r
        }, n.set(i, s);
      }
    }
  }
  function qy(e, t) {
    Al.X(e, t);
    var l = on;
    if (l && e) {
      var a = Ma(l).hoistableScripts, n = dn(e), i = a.get(n);
      i || (i = l.querySelector(iu(n)), i || (e = N({ src: e, async: !0 }, t), (t = $t.get(n)) && Hs(e, t), i = l.createElement("script"), it(i), ht(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function By(e, t) {
    Al.M(e, t);
    var l = on;
    if (l && e) {
      var a = Ma(l).hoistableScripts, n = dn(e), i = a.get(n);
      i || (i = l.querySelector(iu(n)), i || (e = N({ src: e, async: !0, type: "module" }, t), (t = $t.get(n)) && Hs(e, t), i = l.createElement("script"), it(i), ht(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
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
          var i = Ma(
            n
          ).hoistableStyles, s = i.get(e);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, s), (i = n.querySelector(
            uu(e)
          )) && !i._p && (s.instance = i, s.state.loading = 5), $t.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, $t.set(e, l), i || Hy(
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
    return 'href="' + Yt(e) + '"';
  }
  function uu(e) {
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
    }), ht(t, "link", l), it(t), e.head.appendChild(t));
  }
  function dn(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function iu(e) {
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
          ), it(a), ht(a, "style", n), gi(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = fn(l.href);
          var i = e.querySelector(
            uu(n)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, it(i), i;
          a = Vd(l), (n = $t.get(n)) && Bs(a, n), i = (e.ownerDocument || e).createElement("link"), it(i);
          var s = i;
          return s._p = new Promise(function(r, m) {
            s.onload = r, s.onerror = m;
          }), ht(i, "link", a), t.state.loading |= 4, gi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = dn(l.src), (n = e.querySelector(
            iu(i)
          )) ? (t.instance = n, it(n), n) : (a = l, (n = $t.get(i)) && (a = N({}, l), Hs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), it(n), ht(n, "link", a), e.head.appendChild(n), t.instance = n);
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
    ), n = a.length ? a[a.length - 1] : null, i = n, s = 0; s < a.length; s++) {
      var r = a[s];
      if (r.dataset.precedence === t) i = r;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
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
      var i = l[n];
      if (!(i[Sn] || i[rt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var r = a.get(s);
        r ? r.push(i) : a.set(s, [i]);
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
  function ky(e, t, l) {
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
  function Ly(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = fn(a.href), i = t.querySelector(
          uu(n)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = xi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, it(i);
          return;
        }
        i = t.ownerDocument || t, a = Vd(a), (n = $t.get(n)) && Bs(a, n), i = i.createElement("link"), it(i);
        var s = i;
        s._p = new Promise(function(r, m) {
          s.onload = r, s.onerror = m;
        }), ht(i, "link", a), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = xi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var ks = 0;
  function Yy(e, t) {
    return e.stylesheets && e.count === 0 && ji(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && ji(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ks === 0 && (ks = 62500 * jy());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ji(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > ks ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function xi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ji(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var bi = null;
  function ji(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bi = /* @__PURE__ */ new Map(), t.forEach(Gy, e), bi = null, xi.call(e));
  }
  function Gy(e, t) {
    if (!(t.state.loading & 4)) {
      var l = bi.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), bi.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s);
        }
        a && l.set(null, a);
      }
      n = t.instance, s = n.getAttribute("data-precedence"), i = l.get(s) || a, i === a && l.set(null, n), l.set(s, n), this.count++, a = xi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var cu = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Vy(e, t, l, a, n, i, s, r, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ut(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ut(0), this.hiddenUpdates = ut(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jd(e, t, l, a, n, i, s, r, m, _, M, q) {
    return e = new Vy(
      e,
      t,
      l,
      s,
      m,
      _,
      M,
      q,
      r
    ), t = 1, i === !0 && (t |= 24), i = Mt(3, null, null, t), e.current = i, i.stateNode = e, t = pc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Sc(i), e;
  }
  function $d(e) {
    return e ? (e = Ga, e) : Ga;
  }
  function Fd(e, t, l, a, n, i) {
    n = $d(n), a.context === null ? a.context = n : a.pendingContext = n, a = kl(t), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = Ll(e, a, t), l !== null && (At(l, e, t), kn(l, e, t));
  }
  function Wd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ls(e, t) {
    Wd(e, t), (e = e.alternate) && Wd(e, t);
  }
  function Id(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = oa(e, 67108864);
      t !== null && At(t, e, 67108864), Ls(e, 67108864);
    }
  }
  function Pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Bt();
      t = Ri(t);
      var l = oa(e, t);
      l !== null && At(l, e, t), Ls(e, t);
    }
  }
  var Si = !0;
  function Xy(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var i = d.p;
    try {
      d.p = 2, Ys(e, t, l, a);
    } finally {
      d.p = i, x.T = n;
    }
  }
  function Qy(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var i = d.p;
    try {
      d.p = 8, Ys(e, t, l, a);
    } finally {
      d.p = i, x.T = n;
    }
  }
  function Ys(e, t, l, a) {
    if (Si) {
      var n = Gs(a);
      if (n === null)
        As(
          e,
          t,
          a,
          Ei,
          l
        ), th(e, a);
      else if (Ky(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (th(e, a), t & 4 && -1 < Zy.indexOf(e)) {
        for (; n !== null; ) {
          var i = Da(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = H(i.pendingLanes);
                  if (s !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - nt(s);
                      r.entanglements[1] |= m, s &= ~m;
                    }
                    sl(i), (De & 6) === 0 && (ui = Ze() + 500, tu(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = oa(i, 2), r !== null && At(r, i, 2), ci(), Ls(i, 2);
            }
          if (i = Gs(a), i === null && As(
            e,
            t,
            a,
            Ei,
            l
          ), i === n) break;
          n = i;
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
    if (Ei = null, e = Ca(e), e !== null) {
      var t = y(e);
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
    return Ei = e, null;
  }
  function eh(e) {
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
          case mu:
            return 8;
          case Na:
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
  var Xs = !1, Wl = null, Il = null, Pl = null, su = /* @__PURE__ */ new Map(), ru = /* @__PURE__ */ new Map(), ea = [], Zy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function th(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wl = null;
        break;
      case "dragenter":
      case "dragleave":
        Il = null;
        break;
      case "mouseover":
      case "mouseout":
        Pl = null;
        break;
      case "pointerover":
      case "pointerout":
        su.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ru.delete(t.pointerId);
    }
  }
  function ou(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = Da(t), t !== null && Id(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Ky(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Wl = ou(
          Wl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Il = ou(
          Il,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Pl = ou(
          Pl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return su.set(
          i,
          ou(
            su.get(i) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, ru.set(
          i,
          ou(
            ru.get(i) || null,
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
  function lh(e) {
    var t = Ca(e.target);
    if (t !== null) {
      var l = y(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = A(l), t !== null) {
            e.blockedOn = t, mr(e.priority, function() {
              Pd(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = C(l), t !== null) {
            e.blockedOn = t, mr(e.priority, function() {
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
        return t = Da(l), t !== null && Id(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function ah(e, t, l) {
    _i(e) && l.delete(t);
  }
  function Jy() {
    Xs = !1, Wl !== null && _i(Wl) && (Wl = null), Il !== null && _i(Il) && (Il = null), Pl !== null && _i(Pl) && (Pl = null), su.forEach(ah), ru.forEach(ah);
  }
  function Ni(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Jy
    )));
  }
  var Ti = null;
  function nh(e) {
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
          var i = Da(l);
          i !== null && (e.splice(t, 3), t -= 3, Gc(
            i,
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
  function hn(e) {
    function t(m) {
      return Ni(m, e);
    }
    Wl !== null && Ni(Wl, e), Il !== null && Ni(Il, e), Pl !== null && Ni(Pl, e), su.forEach(t), ru.forEach(t);
    for (var l = 0; l < ea.length; l++) {
      var a = ea[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ea.length && (l = ea[0], l.blockedOn === null); )
      lh(l), l.blockedOn === null && ea.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], s = n[jt] || null;
        if (typeof i == "function")
          s || nh(l);
        else if (s) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, s = i[jt] || null)
              r = s.formAction;
            else if (Vs(n) !== null) continue;
          } else r = s.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), nh(l);
        }
      }
  }
  function uh() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
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
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
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
      Fd(e.current, 2, null, e, null, null), ci(), t[wa] = null;
    }
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  Ai.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = hr();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ea.length && t !== 0 && t < ea[l].priority; l++) ;
      ea.splice(l, 0, e), l === 0 && lh(e);
    }
  };
  var ih = o.version;
  if (ih !== "19.2.8")
    throw Error(
      f(
        527,
        ih,
        "19.2.8"
      )
    );
  d.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = g(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var $y = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zi.isDisabled && zi.supportsFiber)
      try {
        ua = zi.inject(
          $y
        ), gt = zi;
      } catch {
      }
  }
  return du.createRoot = function(e, t) {
    if (!S(e)) throw Error(f(299));
    var l = !1, a = "", n = hf, i = mf, s = yf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Jd(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      i,
      s,
      uh
    ), e[wa] = t.current, Ts(e), new Qs(t);
  }, du.hydrateRoot = function(e, t, l) {
    if (!S(e)) throw Error(f(299));
    var a = !1, n = "", i = hf, s = mf, r = yf, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = Jd(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      m,
      i,
      s,
      r,
      uh
    ), t.context = $d(null), l = t.current, a = Bt(), a = Ri(a), n = kl(a), n.callback = null, Ll(l, n, a), l = a, t.current.lanes = l, le(t, l), sl(t), e[wa] = t.current, Ts(e), new Ai(t);
  }, du.version = "19.2.8", du;
}
var vh;
function uv() {
  if (vh) return Js.exports;
  vh = 1;
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
const er = "hana.plugin.ui", tr = 1, cv = "X-Hana-Plugin-Surface-Session", sv = "pluginSurfaceSession", Th = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Ea = {
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
function gh(c) {
  return typeof c == "object" && c !== null;
}
function la(c) {
  return {
    ok: !1,
    error: {
      code: Th.BAD_MESSAGE,
      message: c
    }
  };
}
function ph(c) {
  if (!gh(c))
    return la("Plugin UI messages must be objects.");
  if (c.protocol !== er)
    return la("Plugin UI message protocol is missing or invalid.");
  if (c.version !== tr)
    return {
      ok: !1,
      error: {
        code: Th.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(c.version)}.`
      }
    };
  if (typeof c.kind != "string" || !rv.has(c.kind))
    return la("Plugin UI message kind is missing or invalid.");
  if (typeof c.type != "string" || c.type.trim() === "")
    return la("Plugin UI message type must be a non-empty string.");
  const o = c.kind;
  if (o !== "event" && (typeof c.id != "string" || c.id.trim() === ""))
    return la(`Plugin UI ${o} messages must include a non-empty id.`);
  if (o === "error") {
    if (!gh(c.error))
      return la("Plugin UI error messages must include an error object.");
    if (typeof c.error.code != "string" || c.error.code.trim() === "")
      return la("Plugin UI error code must be a non-empty string.");
    if (typeof c.error.message != "string" || c.error.message.trim() === "")
      return la("Plugin UI error message must be a non-empty string.");
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
  constructor(o) {
    super(o.message), this.code = o.code, this.details = o.details;
  }
}
let bh = 0;
function ov() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (bh += 1, `hana-plugin-${Date.now()}-${bh}`);
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
function hv(c, o) {
  if (o)
    return o;
  const h = new URLSearchParams(c.location.search).get("hana-host-origin");
  return h || (dv(c.document.referrer) ?? "*");
}
function mv(c) {
  const o = new URLSearchParams(c.location.search);
  return {
    theme: o.get("hana-theme") ?? void 0,
    cssUrl: o.get("hana-css") ?? void 0
  };
}
function jh(c, o, h) {
  return !(c.source !== o || h !== "*" && c.origin !== h);
}
function yv(c) {
  return typeof c == "string" ? { url: c } : c;
}
function vv(c) {
  return typeof c == "string" ? { text: c } : c;
}
function Ah(c) {
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
  const h = o.split("/");
  if (h.some((f) => !f || f === "." || f === ".." || f.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return h.map((f) => encodeURIComponent(f)).join("/");
}
function pv(c, o) {
  const h = Ah(c), f = gv(o);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(h)}/assets/${f}`;
}
function xv(c) {
  return new URLSearchParams(c.location.search).get(sv) || null;
}
function bv(c) {
  if (typeof c != "string" || c.length === 0)
    throw new Error("Invalid plugin API path.");
  const o = c.trim();
  if (!o || o.includes("\\") || o.includes("\0") || o.includes("#") || o.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(o))
    throw new Error("Invalid plugin API path.");
  const h = o.replace(/^\/+/, "");
  if (!h || h.startsWith("./") || h === "api/plugins" || h.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const f = h.indexOf("?"), S = f >= 0 ? h.slice(0, f) : h;
  if (!S)
    throw new Error("Invalid plugin API path.");
  const y = S.split("/");
  for (const b of y) {
    if (!b)
      throw new Error("Invalid plugin API path.");
    let g;
    try {
      g = decodeURIComponent(b);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (g === "." || g === ".." || g.includes("/") || g.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const A = new URL(`http://hana.local/${h}`);
  return `${y.map((b) => encodeURIComponent(decodeURIComponent(b))).join("/")}${A.search}`;
}
function zh(c, o) {
  const h = Ah(c), f = bv(o);
  return `${c.location.origin}/api/plugins/${encodeURIComponent(h)}/${f}`;
}
function jv(c, o, h) {
  const f = xv(c);
  if (!f)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const S = c.fetch?.bind(c) ?? globalThis.fetch?.bind(globalThis);
  if (!S)
    throw new Error("hana.api.fetch requires window.fetch.");
  const y = h ?? {}, A = new Headers(y.headers);
  return A.set(cv, f), S(zh(c, o), {
    ...y,
    headers: A
  });
}
function Sv(c = {}) {
  const o = c.targetWindow ?? fv(), h = c.parentWindow ?? o.parent, f = hv(o, c.targetOrigin), S = c.requestTimeoutMs ?? 1e4, y = c.idFactory ?? ov;
  let A = mv(o);
  const C = /* @__PURE__ */ new Set();
  function b(L) {
    h.postMessage(L, f);
  }
  function g(L, V) {
    const ee = {
      protocol: er,
      version: tr,
      kind: "event",
      type: L
    };
    V !== void 0 && (ee.payload = V), b(ee);
  }
  function U(L) {
    if (!jh(L, h, f))
      return;
    const V = ph(L.data);
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
    for (const me of C)
      me(A);
  }
  function N(L, V, ee = {}) {
    const te = y(), me = ee.timeoutMs ?? S;
    return new Promise((J, he) => {
      const fe = () => {
        o.removeEventListener("message", ne), o.clearTimeout(W);
      }, ne = (w) => {
        if (!jh(w, h, f))
          return;
        const P = ph(w.data);
        if (!P.ok)
          return;
        const B = P.value;
        B.id !== te || B.type !== L || (B.kind === "response" && (fe(), J(B.payload)), B.kind === "error" && B.error && (fe(), he(new xh(B.error))));
      }, W = o.setTimeout(() => {
        fe(), he(new xh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${L}.`
        }));
      }, me);
      o.addEventListener("message", ne);
      const I = {
        protocol: er,
        version: tr,
        id: te,
        kind: "request",
        type: L
      };
      V !== void 0 && (I.payload = V), b(I);
    });
  }
  return {
    ready(L) {
      g("hana.ready", L);
    },
    assets: {
      url(L) {
        return pv(o, L);
      }
    },
    api: {
      url(L) {
        return zh(o, L);
      },
      fetch(L, V) {
        return jv(o, L, V);
      }
    },
    ui: {
      resize(L) {
        g(Ea.UI_RESIZE, L);
      }
    },
    theme: {
      getSnapshot() {
        return { ...A };
      },
      subscribe(L) {
        return C.size === 0 && o.addEventListener("message", U), C.add(L), L({ ...A }), () => {
          C.delete(L), C.size === 0 && o.removeEventListener("message", U);
        };
      }
    },
    host: {
      request: N
    },
    toast: {
      show(L, V) {
        return N(Ea.TOAST_SHOW, L, V);
      }
    },
    external: {
      open(L, V) {
        return N(Ea.EXTERNAL_OPEN, yv(L), V);
      }
    },
    clipboard: {
      writeText(L, V) {
        return N(Ea.CLIPBOARD_WRITE_TEXT, vv(L), V);
      }
    },
    resources: {
      open(L, V) {
        return N(Ea.RESOURCE_OPEN, L, V);
      },
      pick(L = {}, V) {
        return N(Ea.RESOURCE_PICK, L, V);
      },
      requestAccess(L, V) {
        return N(Ea.RESOURCE_REQUEST_ACCESS, L, V);
      }
    }
  };
}
let Sh = null;
function zt() {
  return Sh ??= Sv(), Sh;
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
    request(c, o, h) {
      return zt().host.request(c, o, h);
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
function na(...c) {
  return c.filter(Boolean).join(" ");
}
const Eh = {
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
function _v({ mode: c = "inherit", theme: o, className: h, style: f, children: S, "data-testid": y = "hana-plugin-theme", ...A }) {
  const C = typeof o == "string" ? o : void 0, b = Nv(c, o);
  return u.jsx("div", { ...A, "data-testid": y, className: na("hana-plugin-theme", h), "data-hana-theme-mode": c, "data-hana-theme": c === "hana" ? C : void 0, style: { ...b, ...f }, children: S });
}
function Nv(c, o) {
  if (c === "inherit")
    return {};
  const h = Tv(c, o), f = {};
  for (const [S, y] of Object.entries(Ev)) {
    const A = h?.[S];
    A && (f[y] = A);
  }
  return f;
}
function Tv(c, o) {
  if (typeof o == "string")
    return Eh[o];
  if (o)
    return o;
  if (c === "hana")
    return Eh["warm-paper"];
}
O.forwardRef(function({ variant: o = "secondary", size: h = "md", loading: f = !1, iconLeft: S, iconRight: y, disabled: A, className: C, children: b, type: g = "button", ...U }, N) {
  return u.jsxs("button", { ...U, ref: N, type: g, disabled: A || f, className: na("hana-plugin-button", `hana-plugin-button-${o}`, `hana-plugin-button-${h}`, f && "hana-plugin-button-loading", C), children: [f ? u.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : S, b && u.jsx("span", { className: "hana-plugin-button-label", children: b }), !f && y] });
});
O.forwardRef(function({ label: o, size: h = "md", variant: f = "ghost", className: S, children: y, type: A = "button", ...C }, b) {
  return u.jsx("button", { ...C, ref: b, type: A, "aria-label": o, title: C.title || o, className: na("hana-plugin-icon-button", `hana-plugin-icon-button-${h}`, `hana-plugin-icon-button-${f}`, S), children: y });
});
O.forwardRef(function({ label: o, hint: h, error: f, id: S, className: y, inputClassName: A, ...C }, b) {
  const g = O.useId(), U = S || g;
  return u.jsx(wh, { label: o, hint: h, error: f, htmlFor: U, className: y, children: u.jsx("input", { ...C, ref: b, id: U, "aria-invalid": !!f, className: na("hana-plugin-input", A) }) });
});
O.forwardRef(function({ label: o, hint: h, error: f, id: S, className: y, textareaClassName: A, rows: C = 4, ...b }, g) {
  const U = O.useId(), N = S || U;
  return u.jsx(wh, { label: o, hint: h, error: f, htmlFor: N, className: y, children: u.jsx("textarea", { ...b, ref: g, id: N, rows: C, "aria-invalid": !!f, className: na("hana-plugin-textarea", A) }) });
});
O.forwardRef(function({ checked: o, onChange: h, label: f, disabled: S, className: y, onClick: A, type: C = "button", ...b }, g) {
  const U = typeof f == "string" ? f : b["aria-label"];
  return u.jsxs("span", { className: na("hana-plugin-switch-wrap", y), children: [u.jsx("button", { ...b, ref: g, type: C, role: "switch", "aria-checked": o, "aria-label": U, disabled: S, className: na("hana-plugin-switch", o && "hana-plugin-switch-on"), onClick: (N) => {
    A?.(N), !N.defaultPrevented && !S && h?.(!o);
  }, children: u.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), f && u.jsx("span", { className: "hana-plugin-switch-label", children: f })] });
});
function wh({ label: c, hint: o, error: h, htmlFor: f, className: S, children: y }) {
  return u.jsxs("div", { className: na("hana-plugin-field", S), children: [c && u.jsx("label", { className: "hana-plugin-field-label", htmlFor: f, children: c }), o && u.jsx("div", { className: "hana-plugin-field-hint", children: o }), y, h && u.jsx("div", { className: "hana-plugin-field-error", children: h })] });
}
const Ch = /^\d{4}-\d{2}-\d{2}$/;
function _a(c, o) {
  if (!Ch.test(c)) return c;
  const h = /* @__PURE__ */ new Date(`${c}T12:00:00Z`);
  return h.setUTCDate(h.getUTCDate() + o), h.toISOString().slice(0, 10);
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
function Dh(c, o) {
  return Array.from({ length: o }, (h, f) => _a(c, f));
}
function ar(c, o) {
  const f = sr(c).start || o, S = _a(f, -lr(f));
  return Dh(S, 7);
}
function Mh(c, o, h = 3) {
  const f = Math.max(1, Math.floor(h)), S = Math.max(0, Math.floor(o)), y = c.slice(S * f, S * f + f);
  return [...y, ...Array(Math.max(0, f - y.length)).fill(null)];
}
function Av(c, o) {
  const f = sr(c).start || o, S = Ch.test(f) ? `${f.slice(0, 7)}-01` : o, y = /* @__PURE__ */ new Date(`${S}T12:00:00Z`);
  y.setUTCMonth(y.getUTCMonth() + 1, 1);
  const A = new Date(y);
  A.setUTCDate(A.getUTCDate() - 1);
  const C = A.toISOString().slice(0, 10), b = _a(S, -lr(S)), g = 6 - lr(C), U = _a(C, g), N = Math.round(((/* @__PURE__ */ new Date(`${U}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${b}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Dh(b, N);
}
function wi(c) {
  return (c.start_at || c.deadline_at || c.window_start || "").slice(0, 10);
}
function hu(c) {
  if (!c || c.length < 16) return null;
  const o = Number(c.slice(11, 13)), h = Number(c.slice(14, 16));
  return !Number.isFinite(o) || !Number.isFinite(h) ? null : o * 60 + h;
}
function Oh(c) {
  const o = c.map((y) => hu(y.start_at || y.deadline_at)).filter((y) => y !== null), h = c.map((y) => {
    const A = hu(y.end_at);
    if (A !== null) return A;
    const C = hu(y.start_at || y.deadline_at);
    return C === null ? null : C + Number(y.duration || y.estimated_minutes || 45);
  }).filter((y) => y !== null), f = o.length ? Math.floor(Math.min(...o) / 60) - 1 : 10, S = h.length ? Math.ceil(Math.max(...h) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, f)),
    endHour: Math.min(24, Math.max(22, S))
  };
}
function Uh(c, o, h, f = 56) {
  const S = hu(c.start_at || c.deadline_at);
  if (S === null) return null;
  const A = hu(c.end_at) ?? S + Number(c.duration || c.estimated_minutes || 45), C = Math.max(o * 60, S), b = Math.min(h * 60, Math.max(A, C + 30));
  return {
    top: (C - o * 60) / 60 * f,
    height: Math.max(30, (b - C) / 60 * f)
  };
}
function rr(c) {
  const o = c.map((y) => {
    const A = y.start_at || y.deadline_at, C = A ? new Date(A).getTime() : Number.NaN, b = y.end_at ? new Date(y.end_at).getTime() : Number.NaN, g = Number.isFinite(b) ? b : C + Number(y.duration || y.estimated_minutes || 45) * 6e4;
    return { item: y, start: C, end: g };
  }).filter((y) => Number.isFinite(y.start)).sort((y, A) => y.start - A.start || y.end - A.end), h = [], f = o.map((y) => {
    let A = h.findIndex((C) => C <= y.start);
    return A < 0 && (A = h.length), h[A] = y.end, { ...y, lane: A };
  }), S = Math.max(1, h.length);
  return f.map((y) => ({ ...y, laneCount: S }));
}
function zv(c, o) {
  return c && typeof c == "object" && "error" in c && typeof c.error == "string" && c.error.trim() ? c.error.trim() : o;
}
async function wv(c) {
  const o = await c.text();
  let h = null;
  if (o.trim())
    try {
      h = JSON.parse(o);
    } catch {
      throw new Error(c.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${c.status}）`);
    }
  if (!c.ok)
    throw new Error(zv(h, `请求失败（HTTP ${c.status}）`));
  if (!h || typeof h != "object")
    throw new Error("插件接口没有返回有效数据");
  return h;
}
async function Ft(c, o) {
  let h;
  try {
    h = await cr.api.fetch(c, o);
  } catch (f) {
    const S = f instanceof Error ? f.message : String(f || "未知错误");
    throw new Error(`页面会话请求失败：${S}`);
  }
  return wv(h);
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
  const h = O.useRef(null), f = O.useRef(o);
  return f.current = o, O.useEffect(() => {
    if (!c) return;
    const S = (y) => {
      const A = y.target;
      h.current && A && !h.current.contains(A) && f.current();
    };
    return document.addEventListener("pointerdown", S), () => document.removeEventListener("pointerdown", S);
  }, [c]), h;
}
const _h = [
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
  const o = c, h = o ? [
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
  if (!o || !o.summary || !o.audit || !o.commute || h.some((f) => !Array.isArray(f)))
    throw new Error("筹备接口返回的数据结构不完整");
  return o;
}
class Ov extends O.Component {
  state = { error: "" };
  static getDerivedStateFromError(o) {
    return { error: o instanceof Error ? o.message : "页面渲染异常" };
  }
  componentDidCatch(o, h) {
    console.error("[laosu-workbench] render failed", o, h.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ u.jsx("div", { className: "workbench-shell", children: /* @__PURE__ */ u.jsx("main", { className: "main-area", children: /* @__PURE__ */ u.jsxs("div", { className: "notice error", role: "alert", children: [
      /* @__PURE__ */ u.jsx("strong", { children: "课务台页面异常" }),
      /* @__PURE__ */ u.jsx("span", { children: this.state.error }),
      /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: () => window.location.reload(), children: "重新载入" })
    ] }) }) }) : this.props.children;
  }
}
function ll(c, o) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...o
  }).format(new Date(c)) : "未定";
}
function kt(c) {
  return c ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(c)) : "";
}
function Uv(c) {
  return c ? `更新于 ${kt(c)}` : "尚未更新";
}
function Ci(c) {
  if (!c) return "当前范围";
  const [o, h] = c.split("..");
  if (!o || !h || !/^\d{4}-\d{2}-\d{2}$/.test(o) || !/^\d{4}-\d{2}-\d{2}$/.test(h)) return c;
  const f = (S) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${S}T12:00:00+08:00`));
  return o === h ? f(o) : `${f(o)}—${f(h)}`;
}
function $e(c) {
  return c.start_at || c.deadline_at || null;
}
function Rh(c) {
  return ["completed", "已完成"].includes(c) ? "done" : ["cancelled", "已取消", "已调课"].includes(c) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(c) ? "error" : ["pending_confirmation", "待确认", "needs_reschedule"].includes(c) ? "warn" : "active";
}
function vn(c) {
  const o = Rh(c.status);
  return o === "done" ? "state-confirmed" : o === "muted" ? "state-neutral" : o === "error" ? "state-error" : o === "warn" ? "state-pending" : c.domain === "course" ? "state-confirmed" : "state-pending";
}
function yn(c) {
  return c.scope === "one_off" || ["reservation", "manual", "move"].includes(c.origin || "");
}
function Rv() {
  const c = new URLSearchParams(window.location.search), o = window.localStorage.getItem("laosu-workbench.tab"), h = window.localStorage.getItem("laosu-workbench.scope"), f = c.get("tab") || o || "overview", S = c.get("scope") || h || "week", y = _h.map((H) => H.id).includes(f) ? f : "overview", A = ["today", "week", "month", "horizon"].includes(S) ? S : "week", C = c.get("preview"), [b, g] = O.useState(y), [U, N] = O.useState(A), [L, V] = O.useState(f === "actions" || !!C), [ee, te] = O.useState(null), me = ee !== null, [J, he] = O.useState(null), [fe, ne] = O.useState(!0), [W, I] = O.useState(""), [w, P] = O.useState(null), [B, ze] = O.useState(null), [Ae, je] = O.useState({ text: "", nonce: 0 }), [et, Ue] = O.useState(!1), [Ve, x] = O.useState(""), [d, G] = O.useState(null), [k, se] = O.useState({}), [v, D] = O.useState(!1), [X, Q] = O.useState(null), [de, re] = O.useState(0), [pe, Y] = O.useState(null), ue = O.useRef(null), oe = O.useRef(null), K = O.useRef(nr()), tt = O.useRef(nr()), xt = O.useRef(/* @__PURE__ */ new Set()), yt = O.useRef(null), wt = O.useRef(!1), vt = O.useRef(!1), wl = O.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), at = O.useCallback(async (H = U, Z = {}) => {
    const ve = Z.silent === !0, xe = K.current.begin();
    ve || (ne(!0), I(""));
    try {
      const He = new URLSearchParams({ scope: H });
      Z.fresh && He.set("fresh", "1");
      const ut = Dv(await Ft(`api/dashboard?${He.toString()}`));
      return K.current.isCurrent(xe) ? (he(ut), !0) : null;
    } catch (He) {
      return K.current.isCurrent(xe) ? (ve || I(He.message || "读取失败"), !1) : null;
    } finally {
      K.current.isCurrent(xe) && !ve && ne(!1);
    }
  }, [U]);
  O.useEffect(() => {
    at(A);
  }, []), O.useEffect(() => {
    const H = (Z) => {
      Z.target instanceof HTMLElement && !ue.current?.contains(Z.target) && (yt.current = Z.target);
    };
    return window.addEventListener("pointerdown", H, !0), () => window.removeEventListener("pointerdown", H, !0);
  }, []), O.useEffect(() => {
    C && (V(!0), Ft(`api/preview/${encodeURIComponent(C)}`).then(P).catch((H) => {
      P({ ok: !1, error: H.message });
    }));
  }, [C]), O.useEffect(() => {
    if (!L) return;
    const H = ue.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !wt.current) {
      const le = new URL(window.location.href);
      le.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", le), wt.current = !0;
    }
    const ve = window.setTimeout(() => {
      ((B ? H?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : H?.querySelector(".ai-composer textarea")) || H?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), B && H?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), xe = () => Array.from(H?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((le) => le.getClientRects().length > 0 && !le.closest("[hidden]")), He = (le) => {
      if (le.key === "Escape") {
        le.preventDefault(), nt();
        return;
      }
      if (le.key !== "Tab") return;
      const Ct = xe();
      if (!Ct.length) return;
      const al = Ct[0], nl = Ct[Ct.length - 1];
      H?.contains(document.activeElement) ? le.shiftKey && document.activeElement === al ? (le.preventDefault(), nl.focus()) : !le.shiftKey && document.activeElement === nl && (le.preventDefault(), al.focus()) : (le.preventDefault(), (le.shiftKey ? nl : al).focus());
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
  }, [L]), O.useEffect(() => {
    if (!me) return;
    const H = oe.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !vt.current) {
      const le = new URL(window.location.href);
      le.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", le), vt.current = !0;
    }
    const ve = window.setTimeout(() => H?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), xe = () => Array.from(H?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((le) => le.getClientRects().length > 0 && !le.closest("[hidden]")), He = (le) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (le.key === "Escape") {
        le.preventDefault(), jn();
        return;
      }
      if (le.key !== "Tab") return;
      const Ct = xe();
      if (!Ct.length) return;
      const al = Ct[0], nl = Ct[Ct.length - 1];
      H?.contains(document.activeElement) ? le.shiftKey && document.activeElement === al ? (le.preventDefault(), nl.focus()) : !le.shiftKey && document.activeElement === nl && (le.preventDefault(), al.focus()) : (le.preventDefault(), (le.shiftKey ? nl : al).focus());
    }, ut = () => {
      const le = new URL(window.location.href).searchParams.get("drawer");
      le === "context" || le === "actions" || !vt.current || (vt.current = !1, te(null));
    };
    return window.addEventListener("keydown", He), window.addEventListener("popstate", ut), () => {
      window.clearTimeout(ve), document.body.style.overflow = Z, window.removeEventListener("keydown", He), window.removeEventListener("popstate", ut), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [me]), O.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", b);
    const H = () => {
      wl.current[b] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${b}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", H), () => window.removeEventListener("pagehide", H);
  }, [b]), O.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", U);
  }, [U]), O.useEffect(() => {
    if (pe?.tab === b) return;
    const H = wl.current[b] || 0;
    let Z = 0, ve, xe = !1;
    const He = () => {
      xe = !0;
    }, ut = () => {
      xe || (window.scrollTo({ top: H, behavior: "auto" }), Z += 1, Math.abs(window.scrollY - H) > 3 && Z < 15 && (ve = window.setTimeout(ut, 90)));
    }, le = window.requestAnimationFrame(ut);
    return window.addEventListener("wheel", He, { passive: !0 }), window.addEventListener("touchstart", He, { passive: !0 }), window.addEventListener("keydown", He), () => {
      xe = !0, window.cancelAnimationFrame(le), ve && window.clearTimeout(ve), window.removeEventListener("wheel", He), window.removeEventListener("touchstart", He), window.removeEventListener("keydown", He);
    };
  }, [b]), O.useEffect(() => {
    if (!pe || pe.tab !== b) return;
    let H = 0, Z, ve, xe;
    const He = () => {
      const le = Array.from(document.querySelectorAll("[data-item-id]")).find((Ct) => Ct.dataset.itemId === pe.id);
      if (!le && H < 20) {
        H += 1, Z = window.setTimeout(He, 60);
        return;
      }
      if (!le) {
        Y(null);
        return;
      }
      xe = le, le.classList.add("target-highlight"), le.setAttribute("tabindex", "-1"), le.scrollIntoView({ behavior: "smooth", block: "center" }), le.focus({ preventScroll: !0 }), ve = window.setTimeout(() => {
        le.classList.remove("target-highlight"), le.removeAttribute("tabindex"), Y(null);
      }, 2400);
    }, ut = window.setTimeout(He, 50);
    return () => {
      window.clearTimeout(ut), Z && window.clearTimeout(Z), ve && window.clearTimeout(ve), xe?.classList.remove("target-highlight"), xe?.removeAttribute("tabindex");
    };
  }, [pe, b, J?.observedAt]), O.useEffect(() => {
    if (!Ve) return;
    const H = window.setTimeout(() => x(""), 4800);
    return () => window.clearTimeout(H);
  }, [Ve]);
  const It = O.useMemo(
    () => (J?.pending ?? []).filter((H) => !["completed", "cancelled"].includes(H.status)),
    [J]
  ), Cl = O.useMemo(() => {
    const H = Date.now();
    return (J?.items ?? []).filter((Z) => $e(Z) && new Date($e(Z)).getTime() >= H && !["completed", "cancelled", "已完成", "已取消"].includes(Z.status)).sort((Z, ve) => new Date($e(Z)).getTime() - new Date($e(ve)).getTime())[0] ?? null;
  }, [J]);
  async function rl(H) {
    const Z = new URL(window.location.href);
    Z.searchParams.set("scope", H), window.history.replaceState(window.history.state, "", Z), N(H), await at(H);
  }
  function gn(H = b) {
    wl.current[H] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${H}`, String(window.scrollY));
  }
  function st(H, Z) {
    gn();
    const ve = new URL(window.location.href);
    ve.searchParams.set("tab", H), window.history.replaceState(window.history.state, "", ve), Y(null), g(H);
  }
  function Ze(H) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const Z = document.activeElement;
    ((Z instanceof HTMLElement && Z !== document.body && !ue.current?.contains(Z) ? Z : null) || H || yt.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function pn(H) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const Z = document.activeElement, ve = Z instanceof HTMLElement && Z !== document.body && !oe.current?.contains(Z) ? Z : null;
    (H || ve || yt.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function xn(H, Z) {
    pn(Z), te({ kind: "item", item: H });
  }
  function mu(H, Z) {
    pn(Z), te({ kind: "day", date: H });
  }
  function Na(H) {
    pn(H), te({ kind: "system" });
  }
  function yu() {
    const H = /* @__PURE__ */ Symbol("workbench-operation");
    return xt.current.add(H), Ue(!0), H;
  }
  function bn(H) {
    xt.current.delete(H), Ue(xt.current.size > 0);
  }
  function Ta() {
    tt.current.invalidate(), P(null);
  }
  function Oi(H) {
    tt.current.invalidate(), P(H);
  }
  function ua() {
    Ze(document.querySelector(".ai-action-button")), ze(null), je({ text: "", nonce: Date.now() }), Ta(), V(!0);
  }
  function gt(H) {
    Ze(), ze(null), je({ text: H, nonce: Date.now() }), Ta(), V(!0);
  }
  function bt(H) {
    Ze(), ze(H), Ta(), V(!0);
  }
  function nt() {
    if (wt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    wt.current = !1, V(!1);
  }
  function jn() {
    if (vt.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    vt.current = !1, te(null);
  }
  async function vu(H = {}) {
    const Z = H.silent === !0;
    Z || x("正在刷新数据…");
    const ve = await at(U, { ...H, fresh: !Z });
    ve === !0 ? (se({}), Q(null), re((xe) => xe + 1), Z || x("课表、筹备和事务数据已刷新")) : ve === !1 && !Z && x("刷新失败，请查看页面错误");
  }
  async function Ui(H) {
    const Z = tt.current.begin(), ve = yu();
    P(null);
    try {
      const xe = await Ft("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(H)
      });
      if (!tt.current.isCurrent(Z)) return;
      P({ ...xe, operation: String(H.operation || ""), input: H });
    } catch (xe) {
      tt.current.isCurrent(Z) && P({ ok: !1, error: xe.message });
    } finally {
      bn(ve);
    }
  }
  async function Aa(H) {
    if (!v) {
      D(!0), Q({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const Z = await Ft("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: H })
        });
        if (!Z.ok) throw new Error(Z.error || "全部上完的处理未完成");
        Q({ ok: !0, text: Z.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await at(U);
      } catch (Z) {
        const ve = Z.message || "全部上完的处理失败";
        Q({ ok: !1, text: `处理失败：${ve}`, buttonLabel: "重试全部上完" });
      } finally {
        D(!1);
      }
    }
  }
  async function Dl(H) {
    if (!d) {
      G(H.id), se((Z) => ({ ...Z, [H.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const Z = await Ft("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: H.id, expectedVersion: H.version })
        });
        if (!Z.ok) throw new Error(Z.error || "没约上的处理未完成");
        const ve = Z.outcome?.candidateDate, xe = ve ? `已安排 ${ve.slice(5)}` : "已处理";
        se((He) => ({ ...He, [H.id]: { ok: !0, text: Z.message || "已推进到下一次尝试", buttonLabel: xe } })), await at(U);
      } catch (Z) {
        const ve = Z.message || "没约上的处理失败";
        se((xe) => ({ ...xe, [H.id]: { ok: !1, text: `处理失败：${ve}`, buttonLabel: "重试" } }));
      } finally {
        G(null);
      }
    }
  }
  async function za() {
    if (!w?.token || !w.canCommit) return;
    const H = tt.current.begin(), Z = yu(), ve = w.operation || B?.operation;
    try {
      const xe = await Ft("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: w.token })
      }), He = { ok: xe.ok, summary: xe.summary, message: `${xe.message || ""}${xe.exportMessage ? `
导出：${xe.exportMessage}` : ""}${xe.syncMessage ? `
日历：${xe.syncMessage}` : ""}`, result: xe, operation: ve, input: w.input, committed: !!xe.ok };
      await at(U), re((ut) => ut + 1), tt.current.isCurrent(H) && P(He);
    } catch (xe) {
      tt.current.isCurrent(H) && P({ ok: !1, error: xe.message });
    } finally {
      bn(Z);
    }
  }
  return /* @__PURE__ */ u.jsx(_v, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ u.jsxs("div", { className: "workbench-shell", children: [
    /* @__PURE__ */ u.jsxs("header", { className: "topbar", children: [
      /* @__PURE__ */ u.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", children: _h.map((H) => /* @__PURE__ */ u.jsx("button", { type: "button", className: b === H.id ? "tab active" : "tab", onClick: () => st(H.id), children: H.label }, H.id)) }),
      /* @__PURE__ */ u.jsxs("div", { className: "top-actions", children: [
        /* @__PURE__ */ u.jsx("button", { type: "button", className: L ? "ai-action-button active" : "ai-action-button", onClick: ua, "aria-expanded": L, children: "✦ AI 操作" }),
        /* @__PURE__ */ u.jsx("span", { className: "updated-at", children: Uv(J?.observedAt) }),
        /* @__PURE__ */ u.jsxs("button", { type: "button", className: `${J?.health?.ok ? "health good" : "health bad"} health-button${ee?.kind === "system" ? " active" : ""}`, onClick: (H) => Na(H.currentTarget), "aria-expanded": ee?.kind === "system", children: [
          /* @__PURE__ */ u.jsx("i", {}),
          J?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "icon-button", onClick: () => {
          vu();
        }, "aria-label": "刷新", disabled: fe, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("main", { className: "main-area", children: [
      Ve && /* @__PURE__ */ u.jsx("div", { className: "toast", role: "status", children: Ve }),
      W && /* @__PURE__ */ u.jsx(mn, { tone: "error", title: "读取失败", text: W }),
      J?.warnings?.length ? /* @__PURE__ */ u.jsx(mn, { tone: "warn", title: "有警告", text: J.warnings.join("；") }) : null,
      fe && !J ? /* @__PURE__ */ u.jsx(kh, {}) : null,
      J && b !== "planning" && /* @__PURE__ */ u.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": fe, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ u.jsx("span", { children: fe ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ u.jsx("strong", { children: Ci(J.range) })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "scope-switch", children: Object.keys(ur).map((H) => /* @__PURE__ */ u.jsx("button", { type: "button", className: U === H ? "selected" : "", disabled: fe, onClick: () => {
          rl(H);
        }, children: ur[H] }, H)) })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: fe && J ? "view-content scope-loading" : "view-content", "aria-busy": fe && !!J, inert: fe && !!J, children: [
        J && b === "overview" && /* @__PURE__ */ u.jsx(qv, { dashboard: J, pending: It, upcoming: Cl, onInspect: xn, onOpenDay: mu, onPrepare: bt, onRetry: Dl, retryingId: d, affairFeedback: k, onDayComplete: Aa, dayBusy: v, dayFeedback: X }),
        b === "planning" && /* @__PURE__ */ u.jsx(kv, { onAction: bt, onAskAi: gt, refreshKey: de, scheduleText: J?.scheduleText, onDataChanged: vu }),
        J && b === "affairs" && /* @__PURE__ */ u.jsx(Gv, { pending: It, affairs: J.affairs, onPrepare: bt, onInspect: xn, onRetry: Dl, retryingId: d, feedback: k })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "context-drawer-backdrop", hidden: !me, onMouseDown: (H) => {
      H.currentTarget === H.target && jn();
    }, children: /* @__PURE__ */ u.jsxs("aside", { ref: oe, className: "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "context-back", onClick: jn, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: ee?.kind === "system" ? "运行状态" : ee?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ u.jsx("h2", { children: ee?.kind === "system" ? "系统状态" : ee?.kind === "day" ? ll(`${ee.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : ee?.item.title }),
          /* @__PURE__ */ u.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "context-drawer-body", children: ee && J && /* @__PURE__ */ u.jsx(
        Jv,
        {
          view: ee,
          dashboard: J,
          onPrepare: bt,
          onRetry: Dl,
          retryingId: d,
          affairFeedback: k,
          onSync: () => bt({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ u.jsx("div", { className: "action-drawer-backdrop", hidden: !L, onMouseDown: (H) => {
      H.currentTarget === H.target && nt();
    }, children: /* @__PURE__ */ u.jsxs("aside", { ref: ue, className: "action-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "context-back", onClick: nt, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ u.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ u.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ u.jsx(
        Vv,
        {
          pending: It,
          students: J?.students ?? [],
          preset: B,
          aiDraft: Ae,
          preview: w,
          busy: et,
          onPreview: Ui,
          onAiPreview: Oi,
          onCommit: za,
          onClear: Ta,
          onClose: nt
        }
      ) })
    ] }) })
  ] }) });
}
function qv({ dashboard: c, pending: o, upcoming: h, onInspect: f, onOpenDay: S, onPrepare: y, onRetry: A, retryingId: C, affairFeedback: b, onDayComplete: g, dayBusy: U, dayFeedback: N }) {
  const L = O.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return c.items.forEach((I) => W.set(I.id, I)), c.affairs.forEach((I) => W.set(I.id, { ...I, domain: "affair" })), c.courses.forEach((I) => W.set(I.id, { ...I, domain: "course" })), Array.from(W.values()).sort((I, w) => String($e(I) || "").localeCompare(String($e(w) || "")));
  }, [c.items, c.affairs, c.courses]), V = O.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return L.forEach((I) => {
      const w = $e(I)?.slice(0, 10) || "未定日期";
      W.set(w, [...W.get(w) || [], I]);
    }), Array.from(W.entries()).sort(([I], [w]) => I.localeCompare(w));
  }, [L]), ee = c.courses.filter((W) => W.start_at?.slice(0, 10) === c.localDate && W.status !== "已取消"), te = ee.filter((W) => W.status === "待上课"), me = ee.map((W) => W.end_at).filter(Boolean).sort().at(-1) || null, J = !!(me && Date.now() >= new Date(me).getTime()), he = U ? "处理中…" : N?.buttonLabel || (te.length ? "全部上完" : "已全部记录"), fe = U || !!N?.ok || !te.length || !J, ne = {
    today: "把今天安排清楚。",
    week: "把今天和这周，放在一张桌面上。",
    month: "把这个月的课程和事务放在一张桌面上。",
    horizon: "把未来安排放在一张桌面上。"
  }[c.scope];
  return /* @__PURE__ */ u.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ u.jsx("section", { className: "hero-row", children: /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsxs("p", { className: "eyebrow", children: [
        c.localDate,
        " · ",
        ur[c.scope]
      ] }),
      /* @__PURE__ */ u.jsx("h2", { children: ne }),
      /* @__PURE__ */ u.jsx("p", { className: "subtle", children: "数据来自排课与事务系统实时回读。" })
    ] }) }),
    /* @__PURE__ */ u.jsx(Pv, { course: c.nextCourse || null, advice: c.commuteAdvice || null, onOpen: (W) => c.nextCourse && f(c.nextCourse, W), onPrepare: y }),
    /* @__PURE__ */ u.jsxs("section", { className: "metrics-grid", children: [
      /* @__PURE__ */ u.jsx(aa, { label: "课程", value: c.courses.length, hint: Ci(c.range), tone: "sage" }),
      /* @__PURE__ */ u.jsx(aa, { label: "待办", value: o.length, hint: o[0]?.title || "没有积压", tone: "amber" }),
      /* @__PURE__ */ u.jsx(aa, { label: "下一项", value: h ? kt($e(h)) || "待定" : "无", hint: h?.title || "当前范围内已清空", tone: "blue" }),
      /* @__PURE__ */ u.jsx(aa, { label: "系统", value: c.health?.ok ? "正常" : "异常", hint: `活动事务 ${c.health?.database?.verification?.counts?.active ?? "—"}`, tone: "ink" })
    ] }),
    c.scope === "today" && ee.length > 0 && /* @__PURE__ */ u.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ u.jsx("strong", { children: te.length ? `还有 ${te.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ u.jsx("span", { children: te.length && !J ? `最后一节 ${kt(me)} 结束后可操作` : "提交后会写入本地课表并同步日历" }),
        N && /* @__PURE__ */ u.jsx("small", { className: N.ok ? "day-action-inline ok" : "day-action-inline error", children: N.text })
      ] }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: fe,
          onClick: () => {
            g(c.localDate);
          },
          children: he
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ u.jsxs("div", { className: c.scope === "week" || c.scope === "month" ? "panel wide calendar-panel" : "panel wide", children: [
        /* @__PURE__ */ u.jsx(
          Ht,
          {
            title: c.scope === "week" ? "周视图" : c.scope === "month" ? "月视图" : "时间轴",
            meta: Ci(c.range)
          }
        ),
        (c.scope === "week" || c.scope === "month") && /* @__PURE__ */ u.jsxs("div", { className: "calendar-legend", "aria-label": "状态颜色图例", children: [
          /* @__PURE__ */ u.jsxs("span", { className: "confirmed", children: [
            /* @__PURE__ */ u.jsx("i", {}),
            "已确认／已完成"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { className: "pending", children: [
            /* @__PURE__ */ u.jsx("i", {}),
            "待确认／待处理"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { className: "error", children: [
            /* @__PURE__ */ u.jsx("i", {}),
            "错误／硬阻塞"
          ] }),
          /* @__PURE__ */ u.jsxs("span", { className: "temporary", children: [
            /* @__PURE__ */ u.jsx("i", {}),
            "临时身份"
          ] }),
          /* @__PURE__ */ u.jsx("small", { children: "状态用绿黄红；蓝色只标记临时来源" })
        ] }),
        c.scope === "week" ? /* @__PURE__ */ u.jsx(Bv, { items: L, range: c.range, localDate: c.localDate, onInspect: f, onOpenDay: S, onPrepare: y, onRetry: A, retryingId: C, affairFeedback: b }) : c.scope === "month" ? /* @__PURE__ */ u.jsx(Hv, { items: L, range: c.range, localDate: c.localDate, onOpenDay: S }) : V.length ? V.map(([W, I]) => /* @__PURE__ */ u.jsxs("div", { className: "day-group", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "day-label", children: [
            /* @__PURE__ */ u.jsx("strong", { children: W === "未定日期" ? W : ll(`${W}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              I.length,
              " 项"
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "timeline-list", children: I.map((w) => /* @__PURE__ */ u.jsx(eg, { item: w, onInspect: f, onPrepare: y, onRetry: A, retryingId: C, feedback: b[w.id] }, w.id)) })
        ] }, W)) : /* @__PURE__ */ u.jsx(Wt, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
      ] }),
      /* @__PURE__ */ u.jsx("aside", { className: "side-stack overview-side", children: /* @__PURE__ */ u.jsxs("div", { className: "panel pending-action-panel", children: [
        /* @__PURE__ */ u.jsx(Ht, { title: "待处理", meta: `${o.length} 项` }),
        o.length ? o.slice(0, 4).map((W) => /* @__PURE__ */ u.jsx(tg, { item: W, onInspect: f, onPrepare: y, onRetry: A, retryingId: C, feedback: b[W.id] }, W.id)) : /* @__PURE__ */ u.jsx(Wt, { title: "没有待处理事务", text: "当前队列是干净的。", compact: !0 })
      ] }) })
    ] })
  ] });
}
function Di({ item: c, onPrepare: o, onRetry: h, retryingId: f, feedback: S, compact: y = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(c.status)) return null;
  const C = c.start_at?.slice(0, 10), b = c.start_at?.slice(11, 16);
  if (c.domain === "course")
    return !C || !b ? null : /* @__PURE__ */ u.jsxs("div", { className: `item-action-buttons${y ? " compact" : ""}`, onClick: (U) => U.stopPropagation(), children: [
      /* @__PURE__ */ u.jsx("button", { type: "button", className: "secondary", onClick: () => o({ operation: "course_move", student: c.title, fromDate: C, fromTime: b, toDate: C, toTime: b, duration: c.duration }), children: "调整时间" }),
      /* @__PURE__ */ u.jsx("button", { type: "button", className: "danger", onClick: () => o({ operation: "course_cancel", student: c.title, date: C, time: b }), children: "本次不上" })
    ] });
  const g = f === c.id;
  return /* @__PURE__ */ u.jsxs("div", { className: `item-action-buttons${y ? " compact" : ""}`, onClick: (U) => U.stopPropagation(), children: [
    /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary", onClick: () => o({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成" }),
    c.retry && h ? /* @__PURE__ */ u.jsx("button", { type: "button", className: "secondary", disabled: !!f || !!S?.ok, "aria-busy": g, onClick: () => {
      h(c);
    }, children: g ? "处理中…" : S?.buttonLabel || "没约上" }) : /* @__PURE__ */ u.jsx("button", { type: "button", className: "danger", onClick: () => o({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
  ] });
}
function qh(c) {
  return rr(c)[0]?.laneCount || 1;
}
function Bh() {
  const c = O.useRef(null), o = O.useRef(null), h = O.useCallback((y) => {
    if (y.button !== 0 || y.target.closest("button, article, a, input, select, textarea")) return;
    const A = c.current;
    !A || A.scrollWidth <= A.clientWidth || (o.current = { pointerId: y.pointerId, startX: y.clientX, scrollLeft: A.scrollLeft }, A.setPointerCapture(y.pointerId), A.classList.add("dragging"));
  }, []), f = O.useCallback((y) => {
    const A = c.current, C = o.current;
    !A || !C || C.pointerId !== y.pointerId || (A.scrollLeft = C.scrollLeft - (y.clientX - C.startX));
  }, []), S = O.useCallback((y) => {
    const A = c.current, C = o.current;
    !A || !C || C.pointerId !== y.pointerId || (A.hasPointerCapture(y.pointerId) && A.releasePointerCapture(y.pointerId), A.classList.remove("dragging"), o.current = null);
  }, []);
  return { ref: c, onPointerDown: h, onPointerMove: f, onPointerUp: S, onPointerCancel: S };
}
function Bv({ items: c, range: o, localDate: h, onInspect: f, onOpenDay: S, onPrepare: y, onRetry: A, retryingId: C, affairFeedback: b }) {
  const g = O.useMemo(() => ar(o, h), [o, h]), U = Bh(), [N, L] = O.useState(() => window.matchMedia("(max-width: 900px)").matches), [V, ee] = O.useState(0), [te, me] = O.useState(null), J = O.useMemo(() => N ? Mh(g, V, 3) : g, [N, g, V]);
  O.useEffect(() => {
    const x = window.matchMedia("(max-width: 900px)"), d = () => L(x.matches);
    return x.addEventListener("change", d), () => x.removeEventListener("change", d);
  }, []), O.useEffect(() => {
    ee(0), me(null);
  }, [o]), O.useEffect(() => {
    if (!te) return;
    const x = (d) => {
      d.key === "Escape" && me(null);
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [te]);
  const he = O.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    return c.forEach((d) => {
      const G = wi(d);
      G && x.set(G, [...x.get(G) || [], d]);
    }), x.forEach((d, G) => x.set(G, [...d].sort((k, se) => String($e(k) || "").localeCompare(String($e(se) || ""))))), x;
  }, [c]), fe = O.useMemo(() => new Map(g.map((x) => [x, qh((he.get(x) || []).filter((d) => d.start_at || d.deadline_at))])), [he, g]), ne = O.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const d of g) {
      const G = (he.get(d) || []).filter((k) => k.start_at || k.deadline_at);
      x.set(d, rr(G));
    }
    return x;
  }, [he, g]), W = J.map((x) => x && fe.get(x) || 1), I = W.reduce((x, d) => x + d, 0), w = `52px ${W.map((x) => `minmax(0, ${x}fr)`).join(" ")}`, P = N ? `calc(100% * ${I / J.length})` : `${Math.ceil(1080 * I / J.length)}px`, B = c.filter((x) => x.start_at || x.deadline_at), ze = N ? B.filter((x) => J.includes(wi(x))) : B, { startHour: Ae, endHour: je } = Oh(ze), et = N ? 76 : 64, Ue = (je - Ae) * et, Ve = Array.from({ length: je - Ae + 1 }, (x, d) => Ae + d);
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    N && /* @__PURE__ */ u.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本周日期页", children: [
      /* @__PURE__ */ u.jsx("button", { type: "button", disabled: V === 0, onClick: () => ee((x) => Math.max(0, x - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ u.jsxs("strong", { children: [
        "第 ",
        V + 1,
        "/3 页 · 每页 3 天"
      ] }),
      /* @__PURE__ */ u.jsx("button", { type: "button", disabled: V === 2, onClick: () => ee((x) => Math.min(2, x + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "一周时间视图，可使用方向键或触控横向浏览", ...U, children: /* @__PURE__ */ u.jsxs("div", { className: N ? "week-calendar-canvas compact-page" : "week-calendar-canvas", style: { minWidth: P }, children: [
      /* @__PURE__ */ u.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: w }, children: [
        /* @__PURE__ */ u.jsx("div", { className: "week-corner", children: "时间" }),
        J.map((x, d) => x ? /* @__PURE__ */ u.jsxs("button", { type: "button", className: x === h ? "week-day-header today" : "week-day-header", onClick: (G) => S(x, G.currentTarget), children: [
          /* @__PURE__ */ u.jsx("span", { children: ll(`${x}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ u.jsx("strong", { children: Number(x.slice(8, 10)) }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            he.get(x)?.length || 0,
            " 项"
          ] })
        ] }, x) : /* @__PURE__ */ u.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${d}`))
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: w }, onPointerDown: (x) => {
        x.target.closest(".week-time-block") || me(null);
      }, children: [
        /* @__PURE__ */ u.jsx("div", { className: "week-time-axis", style: { height: Ue }, children: Ve.map((x) => /* @__PURE__ */ u.jsxs("span", { style: { top: (x - Ae) * et }, children: [
          String(x).padStart(2, "0"),
          ":00"
        ] }, x)) }),
        J.map((x, d) => {
          if (!x) return /* @__PURE__ */ u.jsx("div", { className: "week-day-track empty-slot", style: { height: Ue }, "aria-hidden": "true" }, `empty-${d}`);
          const G = ne.get(x) || [];
          return /* @__PURE__ */ u.jsx("div", { className: x === h ? "week-day-track today" : "week-day-track", style: { height: Ue }, children: G.map(({ item: k, lane: se, laneCount: v }) => {
            const D = Uh(k, Ae, je, et);
            if (!D) return null;
            const X = 100 / v, Q = k.start_at || k.deadline_at, re = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(k.status) && (k.domain === "affair" || !!k.start_at), pe = re && te === k.id;
            return /* @__PURE__ */ u.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${k.domain} ${vn(k)}${yn(k) ? " temporary" : ""}${re ? " actionable" : ""}${pe ? " action-open" : ""}`,
                style: { top: D.top, height: D.height, left: `calc(${se * X}% + 4px)`, width: `calc(${X}% - 8px)` },
                tabIndex: 0,
                role: "button",
                "aria-expanded": re ? pe : void 0,
                onClick: (Y) => {
                  Y.target.closest("button") || (re && window.matchMedia("(hover: none)").matches ? me((ue) => ue === k.id ? null : k.id) : f(k, Y.currentTarget));
                },
                onKeyDown: (Y) => {
                  Y.key === "Enter" ? (Y.preventDefault(), f(k, Y.currentTarget)) : Y.key === " " ? (Y.preventDefault(), re && me((ue) => ue === k.id ? null : k.id)) : Y.key === "Escape" && me(null);
                },
                "data-item-id": k.id,
                "aria-label": `${kt(Q)} ${k.title}，${k.domain === "course" ? `${k.duration || "—"} 分钟课程` : "事务"}${re ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ u.jsxs("strong", { children: [
                    kt(Q),
                    " · ",
                    k.title
                  ] }),
                  /* @__PURE__ */ u.jsx("span", { children: k.domain === "course" ? `${k.duration || "—"} 分钟` : k.estimated_minutes ? `${k.estimated_minutes} 分钟 · 事务` : "事务" }),
                  re && /* @__PURE__ */ u.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ u.jsx(Di, { item: k, onPrepare: (Y) => {
                    me(null), y(Y);
                  }, onRetry: A, retryingId: C, feedback: b[k.id], compact: !0 }) })
                ]
              },
              k.id
            );
          }) }, x);
        })
      ] })
    ] }) })
  ] });
}
function Hv({ items: c, range: o, localDate: h, onOpenDay: f }) {
  const S = O.useMemo(() => Av(o, h), [o, h]), y = (o.match(/\d{4}-\d{2}-\d{2}/) || [h])[0].slice(0, 7), A = O.useMemo(() => {
    const b = /* @__PURE__ */ new Map();
    return c.forEach((g) => {
      const U = wi(g);
      U && b.set(U, [...b.get(U) || [], g]);
    }), b.forEach((g, U) => b.set(U, [...g].sort((N, L) => String($e(N) || "").localeCompare(String($e(L) || ""))))), b;
  }, [c]), C = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ u.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ u.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ u.jsx("div", { className: "month-weekdays", children: C.map((b) => /* @__PURE__ */ u.jsxs("span", { children: [
      "周",
      b
    ] }, b)) }),
    /* @__PURE__ */ u.jsx("div", { className: "month-grid", children: S.map((b) => {
      const g = A.get(b) || [], U = ["month-cell"];
      return b.startsWith(y) || U.push("outside"), b === h && U.push("today"), /* @__PURE__ */ u.jsxs("button", { type: "button", className: U.join(" "), onClick: (N) => f(b, N.currentTarget), children: [
        /* @__PURE__ */ u.jsxs("header", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: Number(b.slice(8, 10)) }),
          /* @__PURE__ */ u.jsx("span", { children: g.length ? `${g.length} 项` : "" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "month-item-list", children: [
          g.slice(0, 3).map((N) => /* @__PURE__ */ u.jsxs("span", { className: `month-item ${N.domain} ${vn(N)}${yn(N) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ u.jsx("i", {}),
            kt($e(N)) || "待定",
            " · ",
            N.title
          ] }, N.id)),
          g.length > 3 && /* @__PURE__ */ u.jsxs("span", { className: "month-more", children: [
            "＋",
            g.length - 3,
            " 项"
          ] })
        ] })
      ] }, b);
    }) })
  ] }) });
}
function kv({ onAction: c, onAskAi: o, refreshKey: h, scheduleText: f, onDataChanged: S }) {
  const [y, A] = O.useState(null), [C, b] = O.useState(""), [g, U] = O.useState("calendar"), [N, L] = O.useState("issues"), [V, ee] = O.useState(!1), [te, me] = O.useState(null), [J, he] = O.useState(!1), [fe, ne] = O.useState(null), [W, I] = O.useState({});
  O.useEffect(() => {
    let d = !1;
    return Ft("api/planning").then((G) => {
      d || (A(Mv(G)), b(""), me(null));
    }).catch((G) => {
      d || b(G.message || "筹备数据读取失败");
    }), () => {
      d = !0;
    };
  }, [h]), O.useEffect(() => {
    const d = Object.entries(W).at(-1);
    if (!d || !d[1].ok || fe === d[0]) return;
    const G = window.setTimeout(() => {
      I((k) => {
        const se = { ...k };
        return delete se[d[0]], se;
      });
    }, 4500);
    return () => window.clearTimeout(G);
  }, [fe, W]);
  async function w() {
    if (!(!y || J)) {
      he(!0), me(null);
      try {
        me(await Ft(`api/planning/template-check?monday=${encodeURIComponent(y.weekMonday)}`));
      } catch (d) {
        me({ ok: !1, passed: !1, monday: y.weekMonday, output: "", affectedDates: [], error: d.message });
      } finally {
        he(!1);
      }
    }
  }
  async function P(d) {
    if (!fe) {
      ne(d), I((G) => ({ ...G, [d]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const G = await Ft("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: d })
        });
        if (!G.ok) throw new Error(G.error || "预留确认失败");
        A((k) => k && {
          ...k,
          summary: { ...k.summary, formalCourseCount: k.summary.formalCourseCount + 1 },
          reservations: k.reservations.map((se) => se.reservation_id === d ? { ...se, status: "已确认" } : se),
          audit: {
            ...k.audit,
            reservation_hard_blockers: k.audit.reservation_hard_blockers.filter((se) => se.reservation_id !== d)
          }
        }), I((k) => ({ ...k, [d]: { ok: !0, text: G.message || "已确认落课" } })), S({ silent: !0 });
      } catch (G) {
        I((k) => ({ ...k, [d]: { ok: !1, text: `确认失败：${G.message || "未知错误"}` } })), S({ silent: !0 });
      } finally {
        ne(null);
      }
    }
  }
  if (C) return /* @__PURE__ */ u.jsx(mn, { tone: "error", title: "筹备数据读取失败", text: C });
  if (!y) return /* @__PURE__ */ u.jsx(kh, {});
  const B = y.summary, ze = y.students.filter((d) => d.confirmed && d.zone !== "未分区" && (d.availability.length > 0 || d.hasReservation)).length, Ae = B.activeStudentCount ? Math.round(ze / B.activeStudentCount * 100) : 100, je = y.commute.overlaps.length, et = new Map(y.audit.reservation_hard_blockers.map((d) => [d.reservation_id, d.reasons])), Ue = y.students.filter((d) => N === "all" ? !0 : N === "availability" ? !d.availability.length && !d.hasReservation : N === "zone" ? d.zone === "未分区" : N === "pending" ? !!d.pendingWeekday || !d.confirmed : d.issues.length > 0), Ve = V ? Ue : Ue.slice(0, 10), x = y.sources.filter((d) => !d.ok);
  return /* @__PURE__ */ u.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ u.jsx(fr, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    x.length > 0 && /* @__PURE__ */ u.jsx(mn, { tone: "warn", title: `${x.length} 项筹备数据读取异常`, text: x.map((d) => `${d.label}：${d.message || "读取失败"}`).join("；") }),
    B.reservationHardBlockerCount > 0 && /* @__PURE__ */ u.jsx(mn, { tone: "warn", title: `${B.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: y.audit.reservation_hard_blockers.map((d) => `${d.student} ${d.date}：${d.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ u.jsx("nav", { className: "planning-subnav", "aria-label": "筹备页内部导航", children: [
      ["calendar", "周视图", y.reservations.length + y.templates.length],
      ["readiness", "准备度", B.unzonedCount + B.missingAvailabilityCount + B.unconfirmedActiveCount],
      ["students", "学生资料", y.students.filter((d) => d.issues.length).length],
      ["candidates", "候选与预留", je + B.reservationCount],
      ["review", "复核与证据", B.reviewCount + B.overdueCount + x.length]
    ].map(([d, G, k]) => /* @__PURE__ */ u.jsxs("button", { type: "button", className: g === d ? "selected" : "", "aria-label": `${G}${k > 0 ? `，${k} 项` : ""}`, "aria-pressed": g === d, onClick: () => U(d), children: [
      /* @__PURE__ */ u.jsx("span", { children: G }),
      k > 0 && /* @__PURE__ */ u.jsx("strong", { children: k })
    ] }, d)) }),
    /* @__PURE__ */ u.jsx(Lv, { planning: y, hidden: g !== "calendar", onConfirmReservation: P, onAction: c, confirmingReservationId: fe, reservationFeedback: W }),
    /* @__PURE__ */ u.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: g !== "readiness", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ u.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ u.jsxs("strong", { children: [
          ze,
          "/",
          B.activeStudentCount
        ] }),
        /* @__PURE__ */ u.jsxs("small", { children: [
          Ae,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ u.jsx("i", { style: { width: `${Ae}%` } }) })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: je ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ u.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ u.jsx("strong", { children: je }),
        /* @__PURE__ */ u.jsx("small", { children: je ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ u.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ u.jsx("strong", { children: B.reservationCount }),
        /* @__PURE__ */ u.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ u.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ u.jsx("strong", { children: B.formalCourseCount }),
        /* @__PURE__ */ u.jsx("small", { children: B.reviewCount + B.overdueCount ? `${B.reviewCount + B.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "planning-summary-strip", hidden: g !== "readiness", children: [
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "dot amber" }),
        "未分区 ",
        /* @__PURE__ */ u.jsx("strong", { children: B.unzonedCount })
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "dot blue" }),
        "缺候选时间 ",
        /* @__PURE__ */ u.jsx("strong", { children: B.missingAvailabilityCount })
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "dot ink" }),
        "未确认在读 ",
        /* @__PURE__ */ u.jsx("strong", { children: B.unconfirmedActiveCount })
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "dot sage" }),
        "待定名单 ",
        /* @__PURE__ */ u.jsx("strong", { children: B.pendingCount })
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "dot rose" }),
        "出游约束 ",
        /* @__PURE__ */ u.jsx("strong", { children: B.activeVacationCount })
      ] }),
      /* @__PURE__ */ u.jsxs("span", { className: "planning-contract", children: [
        "contract ",
        y.contract.version ?? "—",
        " · schema ",
        y.contract.schemaVersion ?? "—",
        " · ",
        Ci(y.range)
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "planning-overview-grid", hidden: g !== "readiness", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ u.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            B.activeStudentCount - ze,
            " 人仍有关键资料缺口。"
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => {
            L("availability"), U("students");
          }, children: [
            "缺候选时间 ",
            B.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => {
            L("zone"), U("students");
          }, children: [
            "未分区 ",
            B.unzonedCount
          ] }),
          /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => {
            L("pending"), U("students");
          }, children: [
            "待确认 ",
            B.unconfirmedActiveCount + B.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ u.jsx("h3", { children: je ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            je,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => U("candidates"), children: "查看候选与预留" }),
          B.reviewCount + B.overdueCount + x.length > 0 && /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => U("review"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "panel planning-student-panel", hidden: g !== "students", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "planning-panel-head", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "先处理这些" }),
          /* @__PURE__ */ u.jsx("h3", { children: "学生筹备队列" }),
          /* @__PURE__ */ u.jsx("span", { children: "默认只展示存在缺口或约束的学生。" })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "planning-filter", role: "group", "aria-label": "筛选学生", children: [
          ["issues", "待处理"],
          ["availability", "缺候选时间"],
          ["zone", "未分区"],
          ["pending", "待确认"],
          ["all", "全部"]
        ].map(([d, G]) => /* @__PURE__ */ u.jsx("button", { type: "button", className: N === d ? "selected" : "", onClick: () => {
          L(d), ee(!1);
        }, children: G }, d)) })
      ] }),
      Ue.length ? /* @__PURE__ */ u.jsxs("div", { className: "planning-student-list", children: [
        Ve.map((d) => {
          const G = d.availability.length ? d.availability.map((k) => `${k.weekday} ${k.start_time}-${k.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ u.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ u.jsx("strong", { children: d.name }),
              /* @__PURE__ */ u.jsxs("span", { children: [
                d.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ u.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ u.jsx("span", { className: d.confirmed ? "state-good" : "state-warn", children: d.pendingWeekday ? `${d.pendingWeekday}待定` : d.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ u.jsx("small", { children: "片区" }),
              /* @__PURE__ */ u.jsx("span", { className: d.zone === "未分区" ? "state-warn" : "", children: d.zone })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ u.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ u.jsx("span", { className: !d.availability.length && !d.hasReservation ? "state-warn" : "", title: G, children: d.availability.length ? G : d.hasReservation ? "已有单日预留" : G })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ u.jsx("small", { children: "约束" }),
              /* @__PURE__ */ u.jsx("span", { children: d.vacations.length ? d.vacations.map((k) => `至 ${k.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "planning-row-actions", children: [
              d.zone === "未分区" && /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => c({ operation: "zone_set", student: d.name }), children: "设片区" }),
              !d.availability.length && !d.hasReservation && /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => c({ operation: "availability_set", student: d.name, weekday: d.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_add", student: d.name, duration: d.duration, zone: d.zone === "未分区" ? "" : d.zone }), children: "预留" })
            ] })
          ] }, d.sourceName);
        }),
        Ue.length > 10 && /* @__PURE__ */ u.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => ee((d) => !d), children: V ? "收起学生列表" : `再看 ${Ue.length - 10} 人` })
      ] }) : /* @__PURE__ */ u.jsx(Wt, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      y.inactiveConfirmed.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ u.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          y.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "planning-student-context", hidden: g !== "students", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ u.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ u.jsx("span", { children: y.pending.map((d) => d.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ u.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ u.jsx("span", { children: y.vacations.map((d) => `${d.student} ${d.start_date.slice(5)}—${d.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ u.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ u.jsx("span", { children: y.zones.map((d) => `${d.zone} ${d.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "planning-two-column", hidden: g !== "candidates", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ u.jsx(Ht, { title: "课程预留", meta: `${y.reservations.length} 条`, action: "新增预留…", onAction: () => c({ operation: "reservation_add" }) }),
        y.reservations.length ? /* @__PURE__ */ u.jsx("div", { className: "reservation-card-list", children: y.reservations.map((d) => {
          const G = (d.conflicts?.formal_courses?.length || 0) + (d.conflicts?.soft_reservations?.length || 0), k = et.get(d.reservation_id) || [], se = `reservation-blocker-${d.reservation_id}`, v = d.status === "已确认" ? "已落课" : d.status === "预期" ? "待落课" : d.status, D = k.length ? "blocked" : d.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ u.jsxs("article", { className: `reservation-card ${D}`, children: [
            /* @__PURE__ */ u.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ u.jsx("strong", { children: d.reservation_date.slice(5) }),
              /* @__PURE__ */ u.jsx("span", { children: d.weekday })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ u.jsx("strong", { children: d.student }),
              /* @__PURE__ */ u.jsxs("span", { children: [
                d.start_time,
                "-",
                d.end_time,
                " · ",
                d.duration,
                " 分钟",
                d.zone ? ` · ${d.zone}` : ""
              ] }),
              /* @__PURE__ */ u.jsxs("small", { id: se, children: [
                v,
                G ? ` · ${G} 项软冲突` : "",
                k.length ? ` · 硬约束：${k.join("、")}` : "",
                d.note ? ` · ${d.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "reservation-actions", children: d.status === "预期" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => c({ operation: "reservation_update", reservationId: d.reservation_id, date: d.reservation_date, time: d.start_time, duration: d.duration, zone: d.zone || "", note: d.note || "" }), children: "调整时间" }),
              /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary", disabled: k.length > 0, "aria-describedby": k.length ? se : void 0, onClick: () => c({ operation: "reservation_confirm", reservationId: d.reservation_id }), children: k.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ u.jsx("button", { type: "button", className: "quiet-danger", onClick: () => c({ operation: "reservation_cancel", reservationId: d.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ u.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              v
            ] }) })
          ] }, d.reservation_id);
        }) }) : /* @__PURE__ */ u.jsx(Wt, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ u.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              B.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("button", { type: "button", className: "row-action-button", disabled: J, onClick: () => {
            w();
          }, children: J ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ u.jsx(Is, { label: "时间重叠", count: y.commute.overlaps.length, tone: "danger", details: y.commute.overlaps.slice(0, 3).map((d) => `${d.weekday} ${d.first} ${d.firstRange} / ${d.second} ${d.secondRange}`) }),
          /* @__PURE__ */ u.jsx(Is, { label: "长期候选时间差异", count: y.commute.availabilityConflicts.length, tone: "neutral", details: y.commute.availabilityConflicts.slice(0, 3).map((d) => `${d.student} ${d.weekday} ${d.startTime}-${d.endTime}（仅提示）`) }),
          /* @__PURE__ */ u.jsx(Is, { label: "排时间时再问通勤", count: y.commute.missingRoutes.length, tone: "neutral", details: y.commute.missingRoutes.slice(0, 3).map((d) => `${d.weekday} ${d.from} → ${d.to}`) })
        ] }),
        y.commute.missingRoutes.slice(0, 2).map((d) => /* @__PURE__ */ u.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => c({ operation: "commute_set", fromStudent: d.from, toStudent: d.to }), children: [
          "补录 ",
          d.from,
          " → ",
          d.to
        ] }, `${d.weekday}-${d.from}-${d.to}`)),
        te && /* @__PURE__ */ u.jsxs("div", { className: te.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ u.jsx("strong", { children: te.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ u.jsx("pre", { children: te.error || te.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    g === "review" && (y.reviews.length > 0 || B.overdueCount > 0) && /* @__PURE__ */ u.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ u.jsx(Ht, { title: "历史课程复核", meta: `${y.reviews.length} 节待确认 · ${B.overdueCount} 节过期待转入`, action: B.overdueCount ? `处理 ${B.overdueCount} 节过期课` : void 0, onAction: B.overdueCount ? () => c({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ u.jsx("div", { className: "review-card-list", children: y.reviews.map((d) => /* @__PURE__ */ u.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("strong", { children: d.student }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            d.date,
            " · ",
            d.start_time,
            "-",
            d.end_time
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: d.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => c({ operation: "course_review_resolve", courseId: d.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, d.course_id)) })
    ] }),
    g === "review" && y.reviews.length === 0 && B.overdueCount === 0 && /* @__PURE__ */ u.jsx("section", { className: "panel", children: /* @__PURE__ */ u.jsx(Wt, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ u.jsxs("section", { className: "planning-detail-grid", hidden: g !== "review", children: [
      /* @__PURE__ */ u.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ u.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ u.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "过期待转入：" }),
            B.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "人工待复核：" }),
            B.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            /* @__PURE__ */ u.jsx("strong", { children: "读取异常：" }),
            x.length,
            " 项"
          ] }),
          /* @__PURE__ */ u.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ u.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ u.jsx("div", { className: "source-status-list", children: y.sources.map((d) => /* @__PURE__ */ u.jsxs("span", { className: d.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ u.jsx("i", {}),
          d.label
        ] }, d.label)) }),
        /* @__PURE__ */ u.jsxs("pre", { children: [
          Object.values(y.raw).filter(Boolean).join(`

`),
          f ? `

── 底层课表文本 ──
${f}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Lv({ planning: c, hidden: o, onConfirmReservation: h, onAction: f, confirmingReservationId: S, reservationFeedback: y }) {
  const [A, C] = O.useState("reservation"), [b, g] = O.useState(null), U = Bh(), [N, L] = O.useState(c.weekMonday), [V, ee] = O.useState(() => window.matchMedia("(max-width: 900px)").matches), [te, me] = O.useState(0), J = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], he = O.useMemo(() => ar(`${N}..${N}`, N), [N]), fe = 3, ne = O.useMemo(() => V ? Mh(he, te, 3) : he, [V, he, te]);
  O.useEffect(() => {
    L(c.weekMonday);
  }, [c.weekMonday]), O.useEffect(() => {
    const Y = window.matchMedia("(max-width: 900px)"), ue = () => ee(Y.matches);
    return Y.addEventListener("change", ue), () => Y.removeEventListener("change", ue);
  }, []), O.useEffect(() => {
    me(0), g(null);
  }, [N, A]);
  const W = O.useMemo(() => sr(c.range), [c.range]), I = O.useMemo(() => ar(c.range, c.localDate)[0], [c.range, c.localDate]), w = N > I, P = !!(W.end && _a(N, 7) <= W.end), B = O.useMemo(() => new Map(c.students.map((Y) => [Y.name, Y])), [c.students]), ze = O.useMemo(() => new Map(c.pending.map((Y) => [Y.student, Y])), [c.pending]), Ae = O.useMemo(() => new Map(
    c.audit.reservation_hard_blockers.map((Y) => [Y.reservation_id, Y.reasons.join("、")])
  ), [c.audit.reservation_hard_blockers]), je = O.useMemo(() => {
    const Y = (oe, K = "在读") => K !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : ze.has(oe) ? { studentState: "待定", stateClass: "pending" } : B.get(oe)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, ue = (oe) => ({
      ...oe,
      start_at: `${oe.date}T${oe.start_time}:00+08:00`,
      end_at: `${oe.date}T${oe.end_time}:00+08:00`
    });
    return A === "reservation" ? c.reservations.filter((oe) => oe.reservation_date >= he[0] && oe.reservation_date <= he[6] && oe.status !== "已取消").map((oe) => {
      const K = Ae.get(oe.reservation_id), tt = (oe.student_status || "在读") !== "在读", xt = oe.status === "已确认";
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
        studentState: tt ? "已暂停" : xt ? "已落课" : K ? "有硬约束" : "待落课",
        stateClass: tt ? "paused" : xt ? "landed" : K ? "blocked" : "expected",
        zone: oe.zone,
        note: oe.note
      });
    }) : c.templates.flatMap((oe) => {
      const K = J.indexOf(oe.weekday);
      if (K < 0) return [];
      const tt = he[K], xt = Y(oe.student, oe.student_status);
      return [ue({
        id: `template-${oe.template_id}`,
        kind: "template",
        student: oe.student,
        date: tt,
        weekday: oe.weekday,
        start_time: oe.start_time,
        end_time: oe.end_time,
        duration: oe.duration,
        studentState: xt.studentState,
        stateClass: xt.stateClass
      })];
    });
  }, [he, A, ze, c.reservations, c.templates, Ae, B]);
  O.useEffect(() => {
    b && !je.some((Y) => Y.id === b && Y.kind === "reservation") && g(null);
  }, [je, b]), O.useEffect(() => {
    if (!b) return;
    const Y = (ue) => {
      ue.key === "Escape" && g(null);
    };
    return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
  }, [b]);
  const et = !!S, Ue = O.useMemo(() => {
    const Y = /* @__PURE__ */ new Map();
    return je.forEach((ue) => Y.set(ue.date, [...Y.get(ue.date) || [], ue])), Y;
  }, [je]), Ve = O.useMemo(() => new Map(he.map((Y) => [Y, qh(Ue.get(Y) || [])])), [Ue, he]), x = O.useMemo(() => {
    const Y = /* @__PURE__ */ new Map();
    for (const ue of he)
      Y.set(ue, rr(Ue.get(ue) || []));
    return Y;
  }, [Ue, he]), d = ne.map((Y) => Y && Ve.get(Y) || 1), G = d.reduce((Y, ue) => Y + ue, 0), k = `52px ${d.map((Y) => `minmax(0, ${Y}fr)`).join(" ")}`, se = V ? `calc(100% * ${G / ne.length})` : `${Math.ceil(1080 * G / ne.length)}px`, v = V ? je.filter((Y) => ne.includes(Y.date)) : je, { startHour: D, endHour: X } = Oh(v), Q = V ? 76 : 64, de = (X - D) * Q, re = Array.from({ length: X - D + 1 }, (Y, ue) => D + ue), pe = `${ll(`${he[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${ll(`${he[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ u.jsxs("section", { className: `panel planning-week-panel ${A}-mode`, hidden: o, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ u.jsx("h3", { children: A === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ u.jsx("span", { children: A === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ u.jsxs("button", { type: "button", className: A === "reservation" ? "selected" : "", "aria-pressed": A === "reservation", onClick: () => C("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ u.jsx("strong", { children: c.reservations.length })
          ] }),
          /* @__PURE__ */ u.jsxs("button", { type: "button", className: A === "template" ? "selected" : "", "aria-pressed": A === "template", onClick: () => C("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ u.jsx("strong", { children: c.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ u.jsx("button", { type: "button", "aria-label": "上一周", disabled: !w, onClick: () => L((Y) => _a(Y, -7)), children: "‹" }),
          /* @__PURE__ */ u.jsx("strong", { children: pe }),
          /* @__PURE__ */ u.jsx("button", { type: "button", "aria-label": "下一周", disabled: !P, onClick: () => L((Y) => _a(Y, 7)), children: "›" })
        ] }),
        V && /* @__PURE__ */ u.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本周日期页", children: [
          /* @__PURE__ */ u.jsx("button", { type: "button", disabled: te === 0, onClick: () => me((Y) => Math.max(0, Y - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ u.jsxs("strong", { children: [
            "第 ",
            te + 1,
            "/",
            fe,
            " 页 · 每页 3 天"
          ] }),
          /* @__PURE__ */ u.jsx("button", { type: "button", disabled: te === fe - 1, onClick: () => me((Y) => Math.min(fe - 1, Y + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "planning-week-legend", children: A === "reservation" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "reservation" }),
        "临时预留"
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "expected" }),
        "待落课"
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "landed" }),
        "已落课"
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "blocked" }),
        "有硬约束"
      ] }),
      /* @__PURE__ */ u.jsx("small", { children: "移入哪张卡，就原地处理哪张卡；触屏轻点，Esc 关闭" })
    ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "template" }),
        "正式固定"
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "confirmed" }),
        "已确认"
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "pending" }),
        "待定"
      ] }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        /* @__PURE__ */ u.jsx("i", { className: "unconfirmed" }),
        "未确认"
      ] })
    ] }) }),
    je.length ? /* @__PURE__ */ u.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，可使用方向键或触控横向浏览", ...U, children: /* @__PURE__ */ u.jsxs("div", { className: V ? "planning-week-canvas compact-page" : "planning-week-canvas", style: { minWidth: se }, children: [
      /* @__PURE__ */ u.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: k }, children: [
        /* @__PURE__ */ u.jsx("div", { className: "planning-week-corner", children: "时间" }),
        ne.map((Y, ue) => Y ? /* @__PURE__ */ u.jsxs("div", { className: Y === c.localDate ? "planning-week-day-header today" : "planning-week-day-header", children: [
          /* @__PURE__ */ u.jsx("span", { children: J[he.indexOf(Y)] }),
          /* @__PURE__ */ u.jsx("strong", { children: Number(Y.slice(8, 10)) }),
          /* @__PURE__ */ u.jsxs("small", { children: [
            Ue.get(Y)?.length || 0,
            " 项"
          ] })
        ] }, Y) : /* @__PURE__ */ u.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${ue}`))
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: k }, onPointerDown: (Y) => {
        Y.target.closest(".planning-week-block") || g(null);
      }, children: [
        /* @__PURE__ */ u.jsx("div", { className: "planning-week-axis", style: { height: de }, children: re.map((Y) => /* @__PURE__ */ u.jsxs("span", { style: { top: (Y - D) * Q }, children: [
          String(Y).padStart(2, "0"),
          ":00"
        ] }, Y)) }),
        ne.map((Y, ue) => {
          if (!Y) return /* @__PURE__ */ u.jsx("div", { className: "planning-week-track empty-slot", style: { height: de }, "aria-hidden": "true" }, `empty-${ue}`);
          const oe = x.get(Y) || [];
          return /* @__PURE__ */ u.jsx("div", { className: Y === c.localDate ? "planning-week-track today" : "planning-week-track", style: { height: de }, children: oe.map(({ item: K, lane: tt, laneCount: xt }) => {
            const yt = Uh(K, D, X, Q);
            if (!yt) return null;
            const wt = 100 / xt, vt = K.kind === "reservation" && K.reservationStatus === "预期", wl = K.kind === "reservation" && K.reservationStatus === "已确认", at = !!(K.reservationId && (vt || wl)), It = !!(vt && S === K.reservationId), Cl = !!(at && (b === K.id || It)), rl = K.reservationId ? y[K.reservationId] : void 0, gn = !!(et || K.blockerText || K.stateClass === "paused");
            return /* @__PURE__ */ u.jsxs(
              "article",
              {
                className: `planning-week-block ${K.kind} ${K.stateClass}${at ? " actionable" : ""}${Cl ? " action-open" : ""}`,
                tabIndex: at ? 0 : void 0,
                role: at ? "button" : void 0,
                "aria-expanded": at ? Cl : void 0,
                "aria-label": `${K.start_time}-${K.end_time} ${K.student}，${K.studentState}${K.zone ? `，${K.zone}` : ""}${vt ? "；移入或点击后可调整时间、确认落课" : wl ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (st) => {
                  at && !st.target.closest("button") && g((Ze) => Ze === K.id ? null : K.id);
                },
                onKeyDown: (st) => {
                  at && (st.key === "Enter" || st.key === " " ? (st.preventDefault(), g((Ze) => Ze === K.id ? null : K.id)) : st.key === "Escape" && (st.preventDefault(), g(null)));
                },
                style: { top: yt.top, height: yt.height, left: `calc(${tt * wt}% + 4px)`, width: `calc(${wt}% - 8px)` },
                children: [
                  /* @__PURE__ */ u.jsxs("strong", { children: [
                    K.start_time,
                    " · ",
                    K.student
                  ] }),
                  /* @__PURE__ */ u.jsxs("span", { children: [
                    K.duration,
                    " 分钟 · ",
                    K.studentState,
                    K.zone ? ` · ${K.zone}` : ""
                  ] }),
                  at && /* @__PURE__ */ u.jsxs("div", { className: "planning-week-inline-action", onClick: (st) => st.stopPropagation(), children: [
                    /* @__PURE__ */ u.jsx("div", { className: "planning-week-inline-buttons", children: vt ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                      /* @__PURE__ */ u.jsx("button", { type: "button", className: "secondary", disabled: et, onClick: () => {
                        g(null), f({ operation: "reservation_update", reservationId: K.reservationId, date: K.date, time: K.start_time, duration: K.duration, zone: K.zone || "", note: K.note || "" });
                      }, children: "调整时间" }),
                      /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary", disabled: gn, "aria-busy": It, onClick: () => {
                        const st = h(K.reservationId);
                        st && typeof st.then == "function" && st.finally(() => g(null));
                      }, children: It ? "确认中…" : et ? "处理中…" : K.stateClass === "paused" ? "学生已暂停" : K.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                      /* @__PURE__ */ u.jsx("button", { type: "button", className: "secondary", onClick: () => f({ operation: "course_move", student: K.student, fromDate: K.date, fromTime: K.start_time, toDate: K.date, toTime: K.start_time, duration: K.duration }), children: "调整时间" }),
                      /* @__PURE__ */ u.jsx("button", { type: "button", className: "danger", onClick: () => f({ operation: "course_cancel", student: K.student, date: K.date, time: K.start_time }), children: "本次不上" })
                    ] }) }),
                    (K.blockerText || rl) && /* @__PURE__ */ u.jsx("small", { className: rl?.ok ? "ok" : "error", children: rl?.text || K.blockerText })
                  ] })
                ]
              },
              K.id
            );
          }) }, Y);
        })
      ] })
    ] }) }) : /* @__PURE__ */ u.jsx(Wt, { title: A === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: A === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function Is({ label: c, count: o, tone: h, details: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: `template-issue ${h}`, children: [
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("span", { children: c }),
      /* @__PURE__ */ u.jsx("strong", { children: o })
    ] }),
    f.length > 0 && /* @__PURE__ */ u.jsx("ul", { children: f.map((S) => /* @__PURE__ */ u.jsx("li", { children: S }, S)) })
  ] });
}
const Yv = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function Ps({ item: c, onInspect: o, onPrepare: h, onRetry: f, retryingId: S, feedback: y }) {
  const A = ["completed", "cancelled", "已完成", "已取消"].includes(c.status), C = S === c.id, b = c.retry ? "retry" : c.start_at ? "timed" : c.deadline_at ? "deadline" : "fuzzy", g = Date.now(), U = c.deadline_at ? new Date(c.deadline_at).getTime() : null, N = U != null ? Math.ceil((U - g) / 864e5) : null, L = c.retry?.current_candidate_date || null;
  return /* @__PURE__ */ u.jsxs(
    "article",
    {
      className: `affair-card ${b}${A ? " closed" : ""}`,
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
        /* @__PURE__ */ u.jsxs("div", { className: "affair-card-when", children: [
          b === "timed" && c.start_at && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("strong", { children: kt(c.start_at) }),
            /* @__PURE__ */ u.jsx("span", { children: ll(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          b === "deadline" && c.deadline_at && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("strong", { children: ll(c.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              "截止",
              N != null && !A ? ` · 剩 ${N} 天` : ""
            ] })
          ] }),
          b === "fuzzy" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ u.jsx("span", { children: c.window_label || "窗口未定" })
          ] }),
          b === "retry" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ u.jsx("span", { children: L ? `下次 ${L.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ u.jsx("strong", { className: "affair-card-title", children: c.title }),
          /* @__PURE__ */ u.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ u.jsx(Mi, { value: c.status }),
            c.note ? /* @__PURE__ */ u.jsx("em", { children: c.note }) : null,
            c.next_prompt_at ? /* @__PURE__ */ u.jsx("em", { children: `提醒 ${ll(c.next_prompt_at, { month: "numeric", day: "numeric" })} ${kt(c.next_prompt_at)}` }) : null
          ] }),
          b === "retry" && c.retry?.weekdays?.length ? /* @__PURE__ */ u.jsx("span", { className: "affair-candidates", children: c.retry.weekdays.map((V) => /* @__PURE__ */ u.jsx("i", { children: Yv[V] || V }, V)) }) : null,
          y ? /* @__PURE__ */ u.jsx("small", { className: y.ok ? "affair-feedback ok" : "affair-feedback error", children: y.text }) : null
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "affair-card-actions", children: !A && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx("button", { type: "button", className: "affair-do primary", onClick: () => h({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成" }),
          c.retry && f ? /* @__PURE__ */ u.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!S || !!y?.ok, "aria-busy": C, onClick: () => {
            f(c);
          }, children: C ? "处理中…" : y?.buttonLabel || "没约上" }) : /* @__PURE__ */ u.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => h({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Gv({ pending: c, affairs: o, onPrepare: h, onInspect: f, onRetry: S, retryingId: y, feedback: A }) {
  const C = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), b = o.filter((U) => !C.has(U.status)).sort((U, N) => String($e(U) || "").localeCompare(String($e(N) || ""))), g = o.filter((U) => C.has(U.status)).sort((U, N) => String($e(N) || "").localeCompare(String($e(U) || "")));
  return /* @__PURE__ */ u.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ u.jsx(fr, { eyebrow: "事务", title: "办事队列", description: "待确认、重试和当前时间范围内的事务集中展示。" }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-grid affairs-grid", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "panel wide", children: [
        /* @__PURE__ */ u.jsx(Ht, { title: "待处理", meta: `${c.length} 项` }),
        c.length ? c.map((U) => /* @__PURE__ */ u.jsx(Ps, { item: U, onInspect: f, onPrepare: h, onRetry: S, retryingId: y, feedback: A[U.id] }, U.id)) : /* @__PURE__ */ u.jsx(Wt, { title: "没有待处理事务", text: "当前队列没有积压。" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "panel affair-record-panel", children: [
        /* @__PURE__ */ u.jsxs("section", { className: "affair-record-group scheduled", children: [
          /* @__PURE__ */ u.jsx(Ht, { title: "已安排", meta: `${b.length} 项` }),
          b.length ? b.map((U) => /* @__PURE__ */ u.jsx(Ps, { item: U, onInspect: f, onPrepare: h, onRetry: S, retryingId: y, feedback: A[U.id] }, U.id)) : /* @__PURE__ */ u.jsx(Wt, { title: "暂无已安排事务", text: "当前时间范围内没有进行中的事务。", compact: !0 })
        ] }),
        /* @__PURE__ */ u.jsxs("section", { className: "affair-record-group completed", children: [
          /* @__PURE__ */ u.jsx(Ht, { title: "已完成／已取消", meta: `${g.length} 项` }),
          g.length ? g.map((U) => /* @__PURE__ */ u.jsx(Ps, { item: U, onInspect: f, onPrepare: h, onRetry: S, retryingId: y, feedback: A[U.id] }, U.id)) : /* @__PURE__ */ u.jsx(Wt, { title: "暂无完成记录", text: "结束后的事务会归档到这里。", compact: !0 })
        ] })
      ] })
    ] })
  ] });
}
function Vv({ pending: c, students: o, preset: h, aiDraft: f, preview: S, busy: y, onPreview: A, onAiPreview: C, onCommit: b, onClear: g, onClose: U }) {
  const [N, L] = O.useState(h?.operation || "course_move"), [V, ee] = O.useState(h?.affairKind || "timed"), [te, me] = O.useState(h?.student || ""), [J, he] = O.useState(h?.duration || ""), [fe, ne] = O.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  O.useEffect(() => {
    h?.operation && L(h.operation), h?.affairKind && ee(h.affairKind), h?.student && me(h.student), h?.duration && he(h.duration);
  }, [h]);
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
  return /* @__PURE__ */ u.jsxs("div", { className: h ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ u.jsx(Kv, { initialDraft: f, preview: S, busy: y, onPreview: C, onCommit: b, onClear: g, onClose: U }),
    /* @__PURE__ */ u.jsxs("details", { className: "manual-operations", open: !!h, children: [
      /* @__PURE__ */ u.jsxs("summary", { children: [
        /* @__PURE__ */ u.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ u.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ u.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ u.jsxs("form", { className: "panel operation-form", onSubmit: W, children: [
          /* @__PURE__ */ u.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ u.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ u.jsxs("select", { name: "operation", value: N, onChange: (w) => {
              L(w.target.value), g();
            }, children: [
              /* @__PURE__ */ u.jsx("option", { value: "course_move", children: "调课" }),
              /* @__PURE__ */ u.jsx("option", { value: "course_add", children: "新建课程" }),
              /* @__PURE__ */ u.jsx("option", { value: "course_cancel", children: "取消课程" }),
              /* @__PURE__ */ u.jsx("option", { value: "reservation_add", children: "预留课程（未确认）" }),
              /* @__PURE__ */ u.jsx("option", { value: "reservation_update", children: "修改课程预留" }),
              /* @__PURE__ */ u.jsx("option", { value: "reservation_confirm", children: "确认预留为正式课" }),
              /* @__PURE__ */ u.jsx("option", { value: "reservation_cancel", children: "取消课程预留" }),
              /* @__PURE__ */ u.jsx("option", { value: "zone_set", children: "设置学生片区" }),
              /* @__PURE__ */ u.jsx("option", { value: "availability_set", children: "设置可用时间" }),
              /* @__PURE__ */ u.jsx("option", { value: "availability_clear", children: "清空某日可用时间" }),
              /* @__PURE__ */ u.jsx("option", { value: "commute_set", children: "记录学生间通勤" }),
              /* @__PURE__ */ u.jsx("option", { value: "quarantine_overdue", children: "过期课程转人工复核" }),
              /* @__PURE__ */ u.jsx("option", { value: "course_review_resolve", children: "复核历史课程" }),
              /* @__PURE__ */ u.jsx("option", { value: "course_day_complete", children: "完成当日课程" }),
              /* @__PURE__ */ u.jsx("option", { value: "course_plan", children: "多项调课计划" }),
              /* @__PURE__ */ u.jsx("option", { value: "affair_create", children: "新建事务" }),
              /* @__PURE__ */ u.jsx("option", { value: "affair_complete", children: "完成事务" }),
              /* @__PURE__ */ u.jsx("option", { value: "affair_retry_next", children: "推进重试日期" }),
              /* @__PURE__ */ u.jsx("option", { value: "affair_cancel", children: "取消事务" }),
              /* @__PURE__ */ u.jsx("option", { value: "calendar_sync", children: "同步飞书日历" })
            ] })
          ] }),
          N === "course_move" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: h?.duration }),
            /* @__PURE__ */ u.jsx(ce, { name: "fromDate", label: "原日期", type: "date", defaultValue: h?.fromDate, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "fromTime", label: "原时间", type: "time", defaultValue: h?.fromTime, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "toDate", label: "新日期", type: "date", defaultValue: h?.toDate, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "toTime", label: "新时间", type: "time", defaultValue: h?.toTime, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ u.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!h?.overrideAvailability }),
              /* @__PURE__ */ u.jsxs("span", { children: [
                /* @__PURE__ */ u.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ u.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          N === "course_cancel" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "date", label: "课程日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "time", label: "课程时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "reason", label: "取消原因（可选）", defaultValue: h?.reason })
          ] }),
          N === "course_add" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ u.jsx("span", { children: "学生" }),
              /* @__PURE__ */ u.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (w) => {
                    const P = o.find((B) => B.name === w.target.value);
                    me(w.target.value), P && he(P.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((w) => w.status === "在读").map((w) => /* @__PURE__ */ u.jsxs("option", { value: w.name, children: [
                      w.name,
                      " · ",
                      w.default_duration,
                      " 分钟"
                    ] }, w.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(ce, { name: "date", label: "日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "time", label: "时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "时长" }),
              /* @__PURE__ */ u.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: J, onChange: (w) => he(w.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ u.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: h?.note }),
            /* @__PURE__ */ u.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ u.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!h?.overrideAvailability }),
              /* @__PURE__ */ u.jsxs("span", { children: [
                /* @__PURE__ */ u.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ u.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          N === "reservation_add" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ u.jsx("span", { children: "学生" }),
              /* @__PURE__ */ u.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: te,
                  onChange: (w) => {
                    const P = o.find((B) => B.name === w.target.value);
                    me(w.target.value), P && he(P.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((w) => w.status === "在读").map((w) => /* @__PURE__ */ u.jsxs("option", { value: w.name, children: [
                      w.name,
                      " · ",
                      w.default_duration,
                      " 分钟"
                    ] }, w.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(ce, { name: "date", label: "预留日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "time", label: "预留时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "时长" }),
              /* @__PURE__ */ u.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: J, onChange: (w) => he(w.target.value) })
            ] }),
            /* @__PURE__ */ u.jsx(ce, { name: "zone", label: "片区（可选）", defaultValue: h?.zone }),
            /* @__PURE__ */ u.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: h?.note }),
            /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          N === "reservation_update" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: h?.reservationId || h?.id, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "date", label: "预留日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "time", label: "预留时间", type: "time", defaultValue: h?.time, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "duration", label: "时长", type: "number", defaultValue: h?.duration, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "zone", label: "片区（可选）", defaultValue: h?.zone }),
            /* @__PURE__ */ u.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: h?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(N) && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: h?.reservationId || h?.id, required: !0 }),
            /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          N === "zone_set" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "student", label: "学生", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: h?.zone === "未分区" ? "" : h?.zone, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: h?.boundaryZones }),
            /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          N === "availability_set" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "student", label: "学生", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "星期" }),
              /* @__PURE__ */ u.jsxs("select", { name: "weekday", defaultValue: h?.weekday || "", required: !0, children: [
                /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((w) => /* @__PURE__ */ u.jsx("option", { value: w, children: w }, w))
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(ce, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: h?.windows, required: !0 }),
            /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          N === "availability_clear" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "student", label: "学生", defaultValue: h?.student, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "星期" }),
              /* @__PURE__ */ u.jsxs("select", { name: "weekday", defaultValue: h?.weekday || "", required: !0, children: [
                /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((w) => /* @__PURE__ */ u.jsx("option", { value: w, children: w }, w))
              ] })
            ] })
          ] }),
          N === "commute_set" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "fromStudent", label: "出发学生", defaultValue: h?.fromStudent, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "toStudent", label: "到达学生", defaultValue: h?.toStudent, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: h?.minutes, required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "transport", label: "交通方式", defaultValue: h?.transport || "driving", required: !0 }),
            /* @__PURE__ */ u.jsx(ce, { name: "note", label: "备注（可选）", defaultValue: h?.note }),
            /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          N === "quarantine_overdue" && /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          N === "course_review_resolve" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "courseId", label: "课程ID", type: "number", defaultValue: h?.courseId || h?.id, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ u.jsxs("select", { name: "resolution", defaultValue: h?.resolution || "done", children: [
                /* @__PURE__ */ u.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ u.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          N === "course_day_complete" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "date", label: "完成日期", type: "date", defaultValue: h?.date, required: !0 }),
            /* @__PURE__ */ u.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          N === "course_plan" && /* @__PURE__ */ u.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ u.jsxs("div", { children: [
                /* @__PURE__ */ u.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ u.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ u.jsx("button", { type: "button", className: "row-action-button", onClick: () => ne((w) => [...w, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            fe.map((w, P) => /* @__PURE__ */ u.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ u.jsx("span", { className: "plan-index", children: P + 1 }),
              /* @__PURE__ */ u.jsxs("select", { value: w.student || "", onChange: (B) => {
                const ze = o.find((Ae) => Ae.name === B.target.value);
                I(P, "student", B.target.value), ze && I(P, "duration", ze.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: "学生" }),
                o.filter((B) => B.status === "在读").map((B) => /* @__PURE__ */ u.jsx("option", { value: B.name, children: B.name }, B.name))
              ] }),
              /* @__PURE__ */ u.jsx("input", { type: "date", value: w.fromDate || "", onChange: (B) => I(P, "fromDate", B.target.value), required: !0 }),
              /* @__PURE__ */ u.jsx("input", { type: "time", value: w.fromTime || "", onChange: (B) => I(P, "fromTime", B.target.value), required: !0 }),
              /* @__PURE__ */ u.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ u.jsx("input", { type: "date", value: w.toDate || "", onChange: (B) => I(P, "toDate", B.target.value), required: !0 }),
              /* @__PURE__ */ u.jsx("input", { type: "time", value: w.toTime || "", onChange: (B) => I(P, "toTime", B.target.value), required: !0 }),
              /* @__PURE__ */ u.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: w.duration || "", onChange: (B) => I(P, "duration", B.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ u.jsx("button", { type: "button", className: "plan-remove", disabled: fe.length <= 2, onClick: () => ne((B) => B.filter((ze, Ae) => Ae !== P)), children: "×" })
            ] }, P))
          ] }),
          N === "affair_create" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx(ce, { name: "title", label: "事务标题", defaultValue: h?.title, required: !0 }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "类型" }),
              /* @__PURE__ */ u.jsxs("select", { name: "affairKind", value: V, onChange: (w) => ee(w.target.value), children: [
                /* @__PURE__ */ u.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ u.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ u.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ u.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            V === "timed" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(ce, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ u.jsx(ce, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ u.jsx(ce, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            V === "deadline" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(ce, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ u.jsx(ce, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            V === "fuzzy" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(ce, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ u.jsx(ce, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            V === "retry" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(ce, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ u.jsx(ce, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ u.jsx(ce, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ u.jsx(ce, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
            ] }),
            /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ u.jsx("span", { children: "优先级" }),
              /* @__PURE__ */ u.jsxs("select", { name: "priority", defaultValue: "normal", children: [
                /* @__PURE__ */ u.jsx("option", { value: "low", children: "低" }),
                /* @__PURE__ */ u.jsx("option", { value: "normal", children: "普通" }),
                /* @__PURE__ */ u.jsx("option", { value: "high", children: "高" }),
                /* @__PURE__ */ u.jsx("option", { value: "urgent", children: "紧急" })
              ] })
            ] })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(N) && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ u.jsx("span", { children: "事务" }),
              /* @__PURE__ */ u.jsxs("select", { name: "id", required: !0, defaultValue: h?.id || "", children: [
                /* @__PURE__ */ u.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                c.map((w) => /* @__PURE__ */ u.jsxs("option", { value: w.id, children: [
                  w.title,
                  " · ",
                  w.id
                ] }, w.id))
              ] })
            ] }),
            N === "affair_retry_next" && /* @__PURE__ */ u.jsx(ce, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: h?.expectedVersion })
          ] }),
          N === "calendar_sync" && /* @__PURE__ */ u.jsx(ce, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: h?.week }),
          /* @__PURE__ */ u.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ u.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ u.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ u.jsx("button", { className: "primary-button full", type: "submit", disabled: y, children: y ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(h || { operation: N })),
        /* @__PURE__ */ u.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ u.jsx(Ht, { title: "执行预览", meta: S?.token ? `令牌 ${S.token.slice(0, 8)}…` : "等待操作" }),
          !S && /* @__PURE__ */ u.jsx(Wt, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
          S && /* @__PURE__ */ u.jsxs("div", { className: "preview-body", children: [
            /* @__PURE__ */ u.jsxs("div", { className: S.canCommit ? "preview-status pass" : S.ok ? "preview-status neutral" : "preview-status fail", children: [
              /* @__PURE__ */ u.jsx("i", {}),
              /* @__PURE__ */ u.jsxs("div", { children: [
                /* @__PURE__ */ u.jsx("strong", { children: S.canCommit ? "预演通过" : S.ok ? "执行结果" : "预演未通过" }),
                /* @__PURE__ */ u.jsx("span", { children: S.summary || S.error || "无摘要" })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("pre", { children: S.message || S.error || JSON.stringify(S.result, null, 2) }),
            S.result && /* @__PURE__ */ u.jsxs("details", { className: "evidence-details", children: [
              /* @__PURE__ */ u.jsx("summary", { children: "查看执行证据" }),
              /* @__PURE__ */ u.jsx("pre", { children: JSON.stringify(S.result, null, 2) })
            ] }),
            S.canCommit && /* @__PURE__ */ u.jsxs("div", { className: "commit-box", children: [
              /* @__PURE__ */ u.jsx("p", { children: "提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。" }),
              /* @__PURE__ */ u.jsx("button", { type: "button", className: "danger-button", onClick: () => {
                b();
              }, disabled: y, children: y ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ u.jsx(Hh, { preview: S, onClose: U })
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
function Zv({ preview: c, busy: o, onCommit: h, onClose: f }) {
  const S = c.operation || "", y = c.input || {}, A = Object.entries(y).filter(([b, g]) => g != null && g !== "" && !b.startsWith("_")), C = c.result?.affected_dates;
  return /* @__PURE__ */ u.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ u.jsxs("div", { className: c.canCommit ? "preview-status pass" : c.ok ? "preview-status neutral" : "preview-status fail", children: [
      /* @__PURE__ */ u.jsx("i", {}),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("strong", { children: c.canCommit ? "方案预演通过" : c.ok ? "执行结果" : "方案未通过" }),
        /* @__PURE__ */ u.jsx("span", { children: c.summary || c.error })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "preview-summary", children: [
      S && /* @__PURE__ */ u.jsx("span", { className: "preview-op-badge", children: Xv[S] || S }),
      A.length > 0 && /* @__PURE__ */ u.jsx("dl", { className: "preview-fields", children: A.map(([b, g]) => /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("dt", { children: Qv[b] || b }),
        /* @__PURE__ */ u.jsx("dd", { children: String(g) })
      ] }, b)) }),
      C && C.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        C.map((b) => /* @__PURE__ */ u.jsx("span", { children: b.slice(5) }, b))
      ] })
    ] }),
    c.message && c.message !== c.summary && /* @__PURE__ */ u.jsx("pre", { className: "preview-message", children: c.message }),
    c.result && /* @__PURE__ */ u.jsxs("details", { className: "evidence-details", children: [
      /* @__PURE__ */ u.jsx("summary", { children: "查看执行证据" }),
      /* @__PURE__ */ u.jsx("pre", { children: JSON.stringify(c.result, null, 2) })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "action-outcome-actions", children: [
      c.canCommit && /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: () => {
        h();
      }, disabled: o, children: o ? "正在提交…" : "确认执行此方案" }),
      /* @__PURE__ */ u.jsx(Hh, { preview: c, onClose: f })
    ] })
  ] });
}
function Kv({ initialDraft: c, preview: o, busy: h, onPreview: f, onCommit: S, onClear: y, onClose: A }) {
  const C = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, b = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [g, U] = O.useState([C]), [N, L] = O.useState(""), [V, ee] = O.useState(!1), [te, me] = O.useState(""), J = O.useRef(nr());
  O.useEffect(() => () => J.current.invalidate(), []), O.useEffect(() => {
    c.nonce && (J.current.invalidate(), ee(!1), L(c.text));
  }, [c.nonce, c.text]);
  function he() {
    J.current.invalidate(), ee(!1), U([C]), L(""), me(""), y();
  }
  async function fe() {
    const ne = N.trim();
    if (!ne || V) return;
    const W = J.current.begin(), I = g.slice(-10);
    U((w) => [...w, { role: "user", text: ne }]), L(""), ee(!0), me(""), y();
    try {
      const w = await Ft("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: ne, history: I })
      });
      if (!J.current.isCurrent(W)) return;
      if (!w.ok) throw new Error(w.error || "AI 没有生成方案");
      U((P) => [...P, { role: "assistant", text: w.reply || "方案已经生成，请检查右侧预演。" }]), w.status === "ready" && w.preview && f({
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
      me(P), U((B) => [...B, { role: "assistant", text: `这次没有生成预演：${P}` }]);
    } finally {
      J.current.isCurrent(W) && ee(!1);
    }
  }
  return /* @__PURE__ */ u.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ u.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ u.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ u.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ u.jsx("button", { className: "row-action-button", type: "button", onClick: he, disabled: V, children: "清空对话" })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: b.map((ne) => /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => L(ne), children: ne }, ne)) }),
    /* @__PURE__ */ u.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          g.map((ne, W) => /* @__PURE__ */ u.jsx("div", { className: `ai-bubble ${ne.role}`, children: ne.text }, W)),
          V && /* @__PURE__ */ u.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        te && /* @__PURE__ */ u.jsx(mn, { tone: "error", title: "没有生成方案", text: te }),
        /* @__PURE__ */ u.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ u.jsx(
            "textarea",
            {
              value: N,
              onChange: (ne) => L(ne.target.value),
              onKeyDown: (ne) => {
                ne.key === "Enter" && !ne.shiftKey && (ne.preventDefault(), fe());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            fe();
          }, disabled: !N.trim() || V, children: V ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ u.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ u.jsx(Ht, { title: "AI 预演", meta: o?.token ? `令牌 ${o.token.slice(0, 8)}…` : "等待指令" }),
        !o && /* @__PURE__ */ u.jsx(Wt, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        o && /* @__PURE__ */ u.jsx(Zv, { preview: o, busy: h, onCommit: S, onClose: A })
      ] })
    ] })
  ] });
}
function Jv({ view: c, dashboard: o, onPrepare: h, onRetry: f, retryingId: S, affairFeedback: y, onSync: A }) {
  if (c.kind === "system") return /* @__PURE__ */ u.jsx(Iv, { dashboard: o, onSync: A, embedded: !0 });
  const C = c.kind === "day" ? o.items.filter((b) => wi(b) === c.date).sort((b, g) => String($e(b) || "").localeCompare(String($e(g) || ""))) : [c.item];
  return C.length ? /* @__PURE__ */ u.jsx("div", { className: "context-item-list", children: C.map((b) => /* @__PURE__ */ u.jsx(
    $v,
    {
      item: b,
      onPrepare: h,
      onRetry: f,
      retryingId: S,
      feedback: b.domain === "affair" ? y[b.id] : void 0
    },
    b.id
  )) }) : /* @__PURE__ */ u.jsx(Wt, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function $v({ item: c, onPrepare: o, onRetry: h, retryingId: f, feedback: S }) {
  const y = $e(c), A = ["completed", "cancelled", "已完成", "已取消"].includes(c.status);
  return /* @__PURE__ */ u.jsxs("section", { className: `context-item-card ${vn(c)}${yn(c) ? " temporary" : ""}`, "data-item-id": c.id, children: [
    /* @__PURE__ */ u.jsxs("header", { children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("span", { className: `context-domain ${c.domain}`, children: c.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ u.jsx("time", { children: y ? `${ll(y, { month: "long", day: "numeric", weekday: "short" })} ${kt(y)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ u.jsx(Mi, { value: c.status })
    ] }),
    /* @__PURE__ */ u.jsx("h3", { children: c.title }),
    /* @__PURE__ */ u.jsx("p", { children: c.domain === "course" ? `${c.duration || "—"} 分钟 · ${c.note || "常规课程"}` : c.note || c.window_label || "暂无补充说明" }),
    S && /* @__PURE__ */ u.jsx("small", { className: S.ok ? "context-feedback ok" : "context-feedback error", children: S.text }),
    !A && /* @__PURE__ */ u.jsx("div", { className: "context-item-actions", children: c.domain === "course" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "course_move", student: c.title, fromDate: c.start_at?.slice(0, 10), fromTime: c.start_at?.slice(11, 16), toDate: c.start_at?.slice(0, 10), toTime: c.start_at?.slice(11, 16), duration: c.duration }), children: "调整时间…" }),
      /* @__PURE__ */ u.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "course_cancel", student: c.title, date: c.start_at?.slice(0, 10), time: c.start_at?.slice(11, 16) }), children: "本次不上…" })
    ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "affair_complete", id: c.id, expectedVersion: c.version }), children: "完成…" }),
      c.retry ? /* @__PURE__ */ u.jsx("button", { type: "button", className: S?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!f || !!S?.ok, onClick: () => {
        h(c);
      }, children: f === c.id ? "处理中…" : S?.buttonLabel || "没约上" }) : /* @__PURE__ */ u.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "affair_cancel", id: c.id, expectedVersion: c.version }), children: "取消…" })
    ] }) })
  ] });
}
function Fv() {
  const [c, o] = O.useState({ loading: !0 }), h = O.useCallback(() => {
    o({ loading: !0 }), Ft("/api/versions").then((S) => o({ loading: !1, data: S })).catch((S) => o({ loading: !1, error: S.message }));
  }, []);
  O.useEffect(() => {
    h();
  }, [h]);
  const f = c.data?.versions;
  return /* @__PURE__ */ u.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ u.jsx(Ht, { title: "版本与运行态" }),
    c.loading ? /* @__PURE__ */ u.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : c.error ? /* @__PURE__ */ u.jsx(zl, { label: "版本读取", ok: !1, detail: c.error }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ u.jsx("span", { children: "源码版本" }),
        /* @__PURE__ */ u.jsx("code", { children: f?.source ?? "—" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ u.jsx("span", { children: "正式安装版" }),
        /* @__PURE__ */ u.jsx("code", { children: f?.installed ?? "—" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ u.jsx("span", { children: "安装记录" }),
        /* @__PURE__ */ u.jsx("code", { children: f?.installsRecord ?? "—" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ u.jsx("span", { children: "开发槽" }),
        /* @__PURE__ */ u.jsx("code", { children: f?.dev ?? "—" })
      ] }),
      /* @__PURE__ */ u.jsx(zl, { label: "运行态", ok: !c.data?.devShadowing, detail: c.data?.note || "" })
    ] })
  ] });
}
function Wv({ onSync: c }) {
  const [o, h] = O.useState({ loading: !0 }), f = O.useCallback(() => {
    h({ loading: !0 }), Ft("/api/calendar-health").then((C) => h({ loading: !1, data: C })).catch((C) => h({ loading: !1, error: C.message }));
  }, []);
  O.useEffect(() => {
    f();
  }, [f]);
  const S = o.data?.diff, y = S?.toDelete ?? [], A = o.data?.inSync === !0;
  return /* @__PURE__ */ u.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ u.jsx(Ht, { title: "飞书日历对账" }),
    o.loading ? /* @__PURE__ */ u.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : o.error ? /* @__PURE__ */ u.jsx(zl, { label: "日历盘点", ok: !1, detail: o.error }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(zl, { label: "对账结果", ok: A, detail: A ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
      /* @__PURE__ */ u.jsxs("div", { className: "calendar-diff-summary", children: [
        /* @__PURE__ */ u.jsxs("span", { children: [
          "日历事件 ",
          S?.calendarEvents ?? "—"
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "托管 ",
          S?.managedEvents ?? "—"
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "期望 ",
          S?.desiredEvents ?? "—"
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "待建 ",
          S?.toCreate?.length ?? 0
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          "待更新 ",
          S?.toUpdate?.length ?? 0
        ] }),
        /* @__PURE__ */ u.jsxs("span", { className: y.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          y.length
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "calendar-diff-list", children: [
        y.slice(0, 8).map((C, b) => /* @__PURE__ */ u.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ u.jsx("span", { children: C.summary }),
          /* @__PURE__ */ u.jsx("span", { className: "muted-note", children: String(C.start || "").slice(0, 16) })
        ] }, b)),
        y.length > 8 && /* @__PURE__ */ u.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          y.length - 8,
          " 条待删除…"
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "row-actions", children: [
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "ghost-button", onClick: f, children: "重新盘点" }),
        !A && /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: c, children: "打开同步操作" })
      ] })
    ] })
  ] });
}
function Iv({ dashboard: c, onSync: o, embedded: h = !1 }) {
  const f = c.health?.database?.verification;
  return /* @__PURE__ */ u.jsxs("div", { className: h ? "view-stack system-embedded" : "view-stack", children: [
    !h && /* @__PURE__ */ u.jsx(fr, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ u.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ u.jsx(aa, { label: "数据库完整性", value: f?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${f?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ u.jsx(aa, { label: "活动事务", value: f?.counts?.active ?? "—", hint: `总数 ${f?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ u.jsx(aa, { label: "排课 Agent", value: c.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ u.jsx(aa, { label: "写入锁", value: c.health?.writer?.active ? "占用中" : "空闲", hint: c.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ u.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ u.jsx(Ht, { title: "读取链路" }),
        c.health?.reads && /* @__PURE__ */ u.jsx("div", { className: "system-read-health", children: Object.values(c.health.reads).map((S) => /* @__PURE__ */ u.jsx(zl, { label: S.label, ok: S.ok, detail: S.detail }, S.label)) }),
        /* @__PURE__ */ u.jsx(Ht, { title: "契约检查" }),
        /* @__PURE__ */ u.jsx(zl, { label: "事务数据库", ok: c.health?.database?.verification?.ok, detail: c.health?.database?.path }),
        /* @__PURE__ */ u.jsx(zl, { label: "排课入口", ok: c.health?.schedule_agent?.exists, detail: c.health?.schedule_agent?.path }),
        /* @__PURE__ */ u.jsx(zl, { label: "维护模式", ok: !c.health?.maintenance, detail: c.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ u.jsx(zl, { label: "写入锁", ok: !c.health?.writer?.active, detail: c.health?.writer?.active ? `由 ${c.health.writer.owner} 占用` : "当前空闲" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "panel action-panel", children: [
        /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "飞书看板" }),
        /* @__PURE__ */ u.jsx("h3", { children: "同步前会先预演。" }),
        /* @__PURE__ */ u.jsxs("p", { children: [
          "正式同步固定使用 ",
          /* @__PURE__ */ u.jsx("code", { children: "--prune" }),
          "，清理已不存在的受管事件。"
        ] }),
        /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "打开同步操作" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(Wv, { onSync: o }),
    /* @__PURE__ */ u.jsx(Fv, {})
  ] });
}
function Pv({ course: c, advice: o, onOpen: h, onPrepare: f }) {
  const [S, y] = O.useState(!1), A = or(S, () => y(!1));
  return c ? /* @__PURE__ */ u.jsxs(
    "section",
    {
      ref: A,
      className: `next-course-banner next-course-open contextual-action-host ${vn(c)}${yn(c) ? " temporary" : ""} actionable${S ? " action-open" : ""}`,
      role: "button",
      tabIndex: 0,
      "aria-expanded": S,
      onClick: (C) => {
        C.target.closest("button") || (window.matchMedia("(hover: none)").matches ? y((b) => !b) : h(C.currentTarget));
      },
      onKeyDown: (C) => {
        C.key === "Enter" ? (C.preventDefault(), h(C.currentTarget)) : C.key === " " ? (C.preventDefault(), y((b) => !b)) : C.key === "Escape" && y(!1);
      },
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "next-course-time", children: [
          /* @__PURE__ */ u.jsx("span", { children: ll(c.start_at, { month: "numeric", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ u.jsx("strong", { children: kt(c.start_at) })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "next-course-main", children: [
          /* @__PURE__ */ u.jsxs("p", { className: "eyebrow", children: [
            "下一节课",
            yn(c) && /* @__PURE__ */ u.jsx("span", { className: "temporary-badge", children: "临时" })
          ] }),
          /* @__PURE__ */ u.jsx("h3", { children: c.title }),
          /* @__PURE__ */ u.jsxs("span", { children: [
            c.duration || "—",
            " 分钟 · ",
            c.note || "常规课程"
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: o?.tight ? "commute-chip tight" : "commute-chip", children: o?.available ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsxs("strong", { children: [
            o.minutes,
            " 分钟通勤"
          ] }),
          /* @__PURE__ */ u.jsx("span", { children: o.tight ? `间隔仅 ${o.gapMinutes} 分钟` : `最晚 ${kt(o.leaveBy)} 出发` })
        ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx("strong", { children: "出发时间待定" }),
          /* @__PURE__ */ u.jsx("span", { children: o?.reason || "暂无通勤信息" })
        ] }) }),
        /* @__PURE__ */ u.jsx("span", { className: "next-course-cue", children: "查看详情 →" }),
        /* @__PURE__ */ u.jsx("div", { className: "next-course-inline-action", children: /* @__PURE__ */ u.jsx(Di, { item: c, onPrepare: (C) => {
          y(!1), f(C);
        } }) })
      ]
    }
  ) : /* @__PURE__ */ u.jsx("section", { className: "next-course-banner empty-next", children: /* @__PURE__ */ u.jsxs("div", { children: [
    /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: "下一节课" }),
    /* @__PURE__ */ u.jsx("h3", { children: "未来范围内没有课程" })
  ] }) });
}
function Hh({ preview: c, onClose: o }) {
  return !c.committed || !c.ok ? null : /* @__PURE__ */ u.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ u.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "完成并返回" }) });
}
function aa({ label: c, value: o, hint: h, tone: f }) {
  return /* @__PURE__ */ u.jsxs("div", { className: `metric-card ${f}`, children: [
    /* @__PURE__ */ u.jsx("span", { children: c }),
    /* @__PURE__ */ u.jsx("strong", { children: o }),
    /* @__PURE__ */ u.jsx("small", { children: h })
  ] });
}
function eg({ item: c, onInspect: o, onPrepare: h, onRetry: f, retryingId: S, feedback: y }) {
  const [A, C] = O.useState(!1), b = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(c.status), g = or(A, () => C(!1)), U = !!h && !b;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: g,
      className: `${o ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${vn(c)}${yn(c) ? " temporary" : ""}${U ? " actionable" : ""}${A ? " action-open" : ""}`,
      "data-item-id": c.id,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      "aria-expanded": U ? A : void 0,
      onClick: (N) => {
        N.target.closest("button") || (U && window.matchMedia("(hover: none)").matches ? C((L) => !L) : o?.(c, N.currentTarget));
      },
      onKeyDown: (N) => {
        N.key === "Enter" && o ? (N.preventDefault(), o(c, N.currentTarget)) : N.key === " " && U ? (N.preventDefault(), C((L) => !L)) : N.key === "Escape" && C(!1);
      },
      children: [
        /* @__PURE__ */ u.jsx("div", { className: `domain-dot ${c.domain}` }),
        /* @__PURE__ */ u.jsx("time", { children: kt($e(c)) || "待定" }),
        /* @__PURE__ */ u.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ u.jsx("strong", { children: c.title }),
          /* @__PURE__ */ u.jsx("span", { children: c.domain === "course" ? `${c.duration || "—"} 分钟` : c.note || c.window_label || "事务" }),
          y && /* @__PURE__ */ u.jsx("small", { className: y.ok ? "course-feedback ok" : "course-feedback error", children: y.text })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ u.jsx(Mi, { value: c.status }) }),
        U && h && /* @__PURE__ */ u.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ u.jsx(Di, { item: c, onPrepare: (N) => {
          C(!1), h(N);
        }, onRetry: f, retryingId: S, feedback: y }) })
      ]
    }
  );
}
function tg({ item: c, onInspect: o, onPrepare: h, onRetry: f, retryingId: S, feedback: y }) {
  const [A, C] = O.useState(!1), b = or(A, () => C(!1));
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: b,
      className: `quick-pending-item contextual-action-host ${vn(c)} actionable${A ? " action-open" : ""}`,
      "data-item-id": c.id,
      role: "button",
      tabIndex: 0,
      "aria-expanded": A,
      onClick: (g) => {
        g.target.closest("button") || (window.matchMedia("(hover: none)").matches ? C((U) => !U) : o(c, g.currentTarget));
      },
      onKeyDown: (g) => {
        g.key === "Enter" ? (g.preventDefault(), o(c, g.currentTarget)) : g.key === " " ? (g.preventDefault(), C((U) => !U)) : g.key === "Escape" && C(!1);
      },
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ u.jsx("strong", { children: c.title }),
          /* @__PURE__ */ u.jsx("span", { children: c.window_label || (c.next_prompt_at ? `下次提醒 ${ll(c.next_prompt_at)} ${kt(c.next_prompt_at)}` : "待处理") }),
          y && /* @__PURE__ */ u.jsx("small", { className: y.ok ? "affair-feedback ok" : "affair-feedback error", children: y.text })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ u.jsx(Mi, { value: c.status }) }),
        /* @__PURE__ */ u.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ u.jsx(Di, { item: c, onPrepare: (g) => {
          C(!1), h(g);
        }, onRetry: f, retryingId: S, feedback: y }) })
      ]
    }
  );
}
function Mi({ value: c }) {
  return /* @__PURE__ */ u.jsx("span", { className: `status ${Rh(c)}`, children: Cv[c] || c });
}
function Ht({ title: c, meta: o, action: h, onAction: f, actionDisabled: S }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "panel-heading", children: [
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("h3", { children: c }),
      o && /* @__PURE__ */ u.jsx("span", { children: o })
    ] }),
    h && /* @__PURE__ */ u.jsx("button", { type: "button", onClick: f, disabled: S, children: h })
  ] });
}
function fr({ eyebrow: c, title: o, description: h }) {
  return /* @__PURE__ */ u.jsxs("header", { className: "page-title", children: [
    /* @__PURE__ */ u.jsx("p", { className: "eyebrow", children: c }),
    /* @__PURE__ */ u.jsx("h2", { children: o }),
    /* @__PURE__ */ u.jsx("p", { children: h })
  ] });
}
function ce({ name: c, label: o, type: h = "text", placeholder: f, defaultValue: S, required: y = !1 }) {
  return /* @__PURE__ */ u.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ u.jsx("span", { children: o }),
    /* @__PURE__ */ u.jsx("input", { name: c, type: h, placeholder: f, defaultValue: S, required: y })
  ] });
}
function zl({ label: c, ok: o, detail: h }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ u.jsx("span", { className: o ? "check ok" : "check no", children: o ? "✓" : "!" }),
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("strong", { children: c }),
      /* @__PURE__ */ u.jsx("small", { children: h })
    ] })
  ] });
}
function Wt({ title: c, text: o, compact: h = !1 }) {
  return /* @__PURE__ */ u.jsxs("div", { className: h ? "empty compact" : "empty", children: [
    /* @__PURE__ */ u.jsx("strong", { children: c }),
    /* @__PURE__ */ u.jsx("span", { children: o })
  ] });
}
function mn({ tone: c, title: o, text: h }) {
  return /* @__PURE__ */ u.jsxs("div", { className: `notice ${c}`, role: c === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ u.jsx("strong", { children: o }),
    /* @__PURE__ */ u.jsx("span", { children: h })
  ] });
}
function kh() {
  return /* @__PURE__ */ u.jsxs("div", { className: "skeleton-layout", role: "status", "aria-label": "正在加载排课与事务数据…", children: [
    /* @__PURE__ */ u.jsx("div", { className: "skeleton-card skeleton-banner" }),
    /* @__PURE__ */ u.jsxs("div", { className: "skeleton-metrics", children: [
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card" }),
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "skeleton-lines", children: [
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card skeleton-row" }),
      /* @__PURE__ */ u.jsx("div", { className: "skeleton-card skeleton-row" })
    ] })
  ] });
}
cr.ready();
cr.ui.resize({ height: window.innerHeight || 900 });
const Nh = document.getElementById("root");
Nh && iv.createRoot(Nh).render(/* @__PURE__ */ u.jsx(Ov, { children: /* @__PURE__ */ u.jsx(Rv, {}) }));
