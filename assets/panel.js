var er = { exports: {} }, xi = {};
var dh;
function ng() {
  if (dh) return xi;
  dh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(f, _, N) {
    var b = null;
    if (N !== void 0 && (b = "" + N), _.key !== void 0 && (b = "" + _.key), "key" in _) {
      N = {};
      for (var D in _)
        D !== "key" && (N[D] = _[D]);
    } else N = _;
    return _ = N.ref, {
      $$typeof: s,
      type: f,
      key: b,
      ref: _ !== void 0 ? _ : null,
      props: N
    };
  }
  return xi.Fragment = o, xi.jsx = d, xi.jsxs = d, xi;
}
var hh;
function ig() {
  return hh || (hh = 1, er.exports = ng()), er.exports;
}
var n = ig(), tr = { exports: {} }, be = {};
var mh;
function ug() {
  if (mh) return be;
  mh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function Y(m) {
    return m === null || typeof m != "object" ? null : (m = x && m[x] || m["@@iterator"], typeof m == "function" ? m : null);
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
  }, se = Object.assign, W = {};
  function te(m, O, K) {
    this.props = m, this.context = O, this.refs = W, this.updater = K || V;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(m, O) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, O, "setState");
  }, te.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function xe() {
  }
  xe.prototype = te.prototype;
  function k(m, O, K) {
    this.props = m, this.context = O, this.refs = W, this.updater = K || V;
  }
  var F = k.prototype = new xe();
  F.constructor = k, se(F, te.prototype), F.isPureReactComponent = !0;
  var le = Array.isArray;
  function re() {
  }
  var $ = { H: null, A: null, T: null, S: null }, L = Object.prototype.hasOwnProperty;
  function ne(m, O, K) {
    var I = K.ref;
    return {
      $$typeof: s,
      type: m,
      key: O,
      ref: I !== void 0 ? I : null,
      props: K
    };
  }
  function Z(m, O) {
    return ne(m.type, O, m.props);
  }
  function X(m) {
    return typeof m == "object" && m !== null && m.$$typeof === s;
  }
  function ee(m) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(K) {
      return O[K];
    });
  }
  var Ne = /\/+/g;
  function Ce(m, O) {
    return typeof m == "object" && m !== null && m.key != null ? ee("" + m.key) : O.toString(36);
  }
  function ze(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(re, re) : (m.status = "pending", m.then(
          function(O) {
            m.status === "pending" && (m.status = "fulfilled", m.value = O);
          },
          function(O) {
            m.status === "pending" && (m.status = "rejected", m.reason = O);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function h(m, O, K, I, ye) {
    var ge = typeof m;
    (ge === "undefined" || ge === "boolean") && (m = null);
    var Ee = !1;
    if (m === null) Ee = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case s:
            case o:
              Ee = !0;
              break;
            case E:
              return Ee = m._init, h(
                Ee(m._payload),
                O,
                K,
                I,
                ye
              );
          }
      }
    if (Ee)
      return ye = ye(m), Ee = I === "" ? "." + Ce(m, 0) : I, le(ye) ? (K = "", Ee != null && (K = Ee.replace(Ne, "$&/") + "/"), h(ye, O, K, "", function(Me) {
        return Me;
      })) : ye != null && (X(ye) && (ye = Z(
        ye,
        K + (ye.key == null || m && m.key === ye.key ? "" : ("" + ye.key).replace(
          Ne,
          "$&/"
        ) + "/") + Ee
      )), O.push(ye)), 1;
    Ee = 0;
    var Ge = I === "" ? "." : I + ":";
    if (le(m))
      for (var Q = 0; Q < m.length; Q++)
        I = m[Q], ge = Ge + Ce(I, Q), Ee += h(
          I,
          O,
          K,
          ge,
          ye
        );
    else if (Q = Y(m), typeof Q == "function")
      for (m = Q.call(m), Q = 0; !(I = m.next()).done; )
        I = I.value, ge = Ge + Ce(I, Q++), Ee += h(
          I,
          O,
          K,
          ge,
          ye
        );
    else if (ge === "object") {
      if (typeof m.then == "function")
        return h(
          ze(m),
          O,
          K,
          I,
          ye
        );
      throw O = String(m), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function U(m, O, K) {
    if (m == null) return m;
    var I = [], ye = 0;
    return h(m, I, "", "", function(ge) {
      return O.call(K, ge, ye++);
    }), I;
  }
  function J(m) {
    if (m._status === -1) {
      var O = m._result;
      O = O(), O.then(
        function(K) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = K);
        },
        function(K) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = K);
        }
      ), m._status === -1 && (m._status = 0, m._result = O);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var y = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, P = {
    map: U,
    forEach: function(m, O, K) {
      U(
        m,
        function() {
          O.apply(this, arguments);
        },
        K
      );
    },
    count: function(m) {
      var O = 0;
      return U(m, function() {
        O++;
      }), O;
    },
    toArray: function(m) {
      return U(m, function(O) {
        return O;
      }) || [];
    },
    only: function(m) {
      if (!X(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return be.Activity = z, be.Children = P, be.Component = te, be.Fragment = d, be.Profiler = _, be.PureComponent = k, be.StrictMode = f, be.Suspense = S, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return $.H.useMemoCache(m);
    }
  }, be.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, be.cacheSignal = function() {
    return null;
  }, be.cloneElement = function(m, O, K) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var I = se({}, m.props), ye = m.key;
    if (O != null)
      for (ge in O.key !== void 0 && (ye = "" + O.key), O)
        !L.call(O, ge) || ge === "key" || ge === "__self" || ge === "__source" || ge === "ref" && O.ref === void 0 || (I[ge] = O[ge]);
    var ge = arguments.length - 2;
    if (ge === 1) I.children = K;
    else if (1 < ge) {
      for (var Ee = Array(ge), Ge = 0; Ge < ge; Ge++)
        Ee[Ge] = arguments[Ge + 2];
      I.children = Ee;
    }
    return ne(m.type, ye, I);
  }, be.createContext = function(m) {
    return m = {
      $$typeof: b,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: N,
      _context: m
    }, m;
  }, be.createElement = function(m, O, K) {
    var I, ye = {}, ge = null;
    if (O != null)
      for (I in O.key !== void 0 && (ge = "" + O.key), O)
        L.call(O, I) && I !== "key" && I !== "__self" && I !== "__source" && (ye[I] = O[I]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ye.children = K;
    else if (1 < Ee) {
      for (var Ge = Array(Ee), Q = 0; Q < Ee; Q++)
        Ge[Q] = arguments[Q + 2];
      ye.children = Ge;
    }
    if (m && m.defaultProps)
      for (I in Ee = m.defaultProps, Ee)
        ye[I] === void 0 && (ye[I] = Ee[I]);
    return ne(m, ge, ye);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(m) {
    return { $$typeof: D, render: m };
  }, be.isValidElement = X, be.lazy = function(m) {
    return {
      $$typeof: E,
      _payload: { _status: -1, _result: m },
      _init: J
    };
  }, be.memo = function(m, O) {
    return {
      $$typeof: p,
      type: m,
      compare: O === void 0 ? null : O
    };
  }, be.startTransition = function(m) {
    var O = $.T, K = {};
    $.T = K;
    try {
      var I = m(), ye = $.S;
      ye !== null && ye(K, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(re, y);
    } catch (ge) {
      y(ge);
    } finally {
      O !== null && K.types !== null && (O.types = K.types), $.T = O;
    }
  }, be.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, be.use = function(m) {
    return $.H.use(m);
  }, be.useActionState = function(m, O, K) {
    return $.H.useActionState(m, O, K);
  }, be.useCallback = function(m, O) {
    return $.H.useCallback(m, O);
  }, be.useContext = function(m) {
    return $.H.useContext(m);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(m, O) {
    return $.H.useDeferredValue(m, O);
  }, be.useEffect = function(m, O) {
    return $.H.useEffect(m, O);
  }, be.useEffectEvent = function(m) {
    return $.H.useEffectEvent(m);
  }, be.useId = function() {
    return $.H.useId();
  }, be.useImperativeHandle = function(m, O, K) {
    return $.H.useImperativeHandle(m, O, K);
  }, be.useInsertionEffect = function(m, O) {
    return $.H.useInsertionEffect(m, O);
  }, be.useLayoutEffect = function(m, O) {
    return $.H.useLayoutEffect(m, O);
  }, be.useMemo = function(m, O) {
    return $.H.useMemo(m, O);
  }, be.useOptimistic = function(m, O) {
    return $.H.useOptimistic(m, O);
  }, be.useReducer = function(m, O, K) {
    return $.H.useReducer(m, O, K);
  }, be.useRef = function(m) {
    return $.H.useRef(m);
  }, be.useState = function(m) {
    return $.H.useState(m);
  }, be.useSyncExternalStore = function(m, O, K) {
    return $.H.useSyncExternalStore(
      m,
      O,
      K
    );
  }, be.useTransition = function() {
    return $.H.useTransition();
  }, be.version = "19.2.8", be;
}
var yh;
function mr() {
  return yh || (yh = 1, tr.exports = ug()), tr.exports;
}
var C = mr(), ar = { exports: {} }, ji = {}, lr = { exports: {} }, nr = {};
var gh;
function sg() {
  return gh || (gh = 1, (function(s) {
    function o(h, U) {
      var J = h.length;
      h.push(U);
      e: for (; 0 < J; ) {
        var y = J - 1 >>> 1, P = h[y];
        if (0 < _(P, U))
          h[y] = U, h[J] = P, J = y;
        else break e;
      }
    }
    function d(h) {
      return h.length === 0 ? null : h[0];
    }
    function f(h) {
      if (h.length === 0) return null;
      var U = h[0], J = h.pop();
      if (J !== U) {
        h[0] = J;
        e: for (var y = 0, P = h.length, m = P >>> 1; y < m; ) {
          var O = 2 * (y + 1) - 1, K = h[O], I = O + 1, ye = h[I];
          if (0 > _(K, J))
            I < P && 0 > _(ye, K) ? (h[y] = ye, h[I] = J, y = I) : (h[y] = K, h[O] = J, y = O);
          else if (I < P && 0 > _(ye, J))
            h[y] = ye, h[I] = J, y = I;
          else break e;
        }
      }
      return U;
    }
    function _(h, U) {
      var J = h.sortIndex - U.sortIndex;
      return J !== 0 ? J : h.id - U.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      s.unstable_now = function() {
        return N.now();
      };
    } else {
      var b = Date, D = b.now();
      s.unstable_now = function() {
        return b.now() - D;
      };
    }
    var S = [], p = [], E = 1, z = null, x = 3, Y = !1, V = !1, se = !1, W = !1, te = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function F(h) {
      for (var U = d(p); U !== null; ) {
        if (U.callback === null) f(p);
        else if (U.startTime <= h)
          f(p), U.sortIndex = U.expirationTime, o(S, U);
        else break;
        U = d(p);
      }
    }
    function le(h) {
      if (se = !1, F(h), !V)
        if (d(S) !== null)
          V = !0, re || (re = !0, ee());
        else {
          var U = d(p);
          U !== null && ze(le, U.startTime - h);
        }
    }
    var re = !1, $ = -1, L = 5, ne = -1;
    function Z() {
      return W ? !0 : !(s.unstable_now() - ne < L);
    }
    function X() {
      if (W = !1, re) {
        var h = s.unstable_now();
        ne = h;
        var U = !0;
        try {
          e: {
            V = !1, se && (se = !1, xe($), $ = -1), Y = !0;
            var J = x;
            try {
              t: {
                for (F(h), z = d(S); z !== null && !(z.expirationTime > h && Z()); ) {
                  var y = z.callback;
                  if (typeof y == "function") {
                    z.callback = null, x = z.priorityLevel;
                    var P = y(
                      z.expirationTime <= h
                    );
                    if (h = s.unstable_now(), typeof P == "function") {
                      z.callback = P, F(h), U = !0;
                      break t;
                    }
                    z === d(S) && f(S), F(h);
                  } else f(S);
                  z = d(S);
                }
                if (z !== null) U = !0;
                else {
                  var m = d(p);
                  m !== null && ze(
                    le,
                    m.startTime - h
                  ), U = !1;
                }
              }
              break e;
            } finally {
              z = null, x = J, Y = !1;
            }
            U = void 0;
          }
        } finally {
          U ? ee() : re = !1;
        }
      }
    }
    var ee;
    if (typeof k == "function")
      ee = function() {
        k(X);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), Ce = Ne.port2;
      Ne.port1.onmessage = X, ee = function() {
        Ce.postMessage(null);
      };
    } else
      ee = function() {
        te(X, 0);
      };
    function ze(h, U) {
      $ = te(function() {
        h(s.unstable_now());
      }, U);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(h) {
      h.callback = null;
    }, s.unstable_forceFrameRate = function(h) {
      0 > h || 125 < h ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : L = 0 < h ? Math.floor(1e3 / h) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, s.unstable_next = function(h) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = x;
      }
      var J = x;
      x = U;
      try {
        return h();
      } finally {
        x = J;
      }
    }, s.unstable_requestPaint = function() {
      W = !0;
    }, s.unstable_runWithPriority = function(h, U) {
      switch (h) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          h = 3;
      }
      var J = x;
      x = h;
      try {
        return U();
      } finally {
        x = J;
      }
    }, s.unstable_scheduleCallback = function(h, U, J) {
      var y = s.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? y + J : y) : J = y, h) {
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
      return P = J + P, h = {
        id: E++,
        callback: U,
        priorityLevel: h,
        startTime: J,
        expirationTime: P,
        sortIndex: -1
      }, J > y ? (h.sortIndex = J, o(p, h), d(S) === null && h === d(p) && (se ? (xe($), $ = -1) : se = !0, ze(le, J - y))) : (h.sortIndex = P, o(S, h), V || Y || (V = !0, re || (re = !0, ee()))), h;
    }, s.unstable_shouldYield = Z, s.unstable_wrapCallback = function(h) {
      var U = x;
      return function() {
        var J = x;
        x = U;
        try {
          return h.apply(this, arguments);
        } finally {
          x = J;
        }
      };
    };
  })(nr)), nr;
}
var vh;
function cg() {
  return vh || (vh = 1, lr.exports = sg()), lr.exports;
}
var ir = { exports: {} }, pt = {};
var ph;
function rg() {
  if (ph) return pt;
  ph = 1;
  var s = mr();
  function o(S) {
    var p = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        p += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + S + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, _ = /* @__PURE__ */ Symbol.for("react.portal");
  function N(S, p, E) {
    var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _,
      key: z == null ? null : "" + z,
      children: S,
      containerInfo: p,
      implementation: E
    };
  }
  var b = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(S, p) {
    if (S === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, pt.createPortal = function(S, p) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(o(299));
    return N(S, p, null, E);
  }, pt.flushSync = function(S) {
    var p = b.T, E = f.p;
    try {
      if (b.T = null, f.p = 2, S) return S();
    } finally {
      b.T = p, f.p = E, f.d.f();
    }
  }, pt.preconnect = function(S, p) {
    typeof S == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, f.d.C(S, p));
  }, pt.prefetchDNS = function(S) {
    typeof S == "string" && f.d.D(S);
  }, pt.preinit = function(S, p) {
    if (typeof S == "string" && p && typeof p.as == "string") {
      var E = p.as, z = D(E, p.crossOrigin), x = typeof p.integrity == "string" ? p.integrity : void 0, Y = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      E === "style" ? f.d.S(
        S,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: z,
          integrity: x,
          fetchPriority: Y
        }
      ) : E === "script" && f.d.X(S, {
        crossOrigin: z,
        integrity: x,
        fetchPriority: Y,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, pt.preinitModule = function(S, p) {
    if (typeof S == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var E = D(
            p.as,
            p.crossOrigin
          );
          f.d.M(S, {
            crossOrigin: E,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && f.d.M(S);
  }, pt.preload = function(S, p) {
    if (typeof S == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var E = p.as, z = D(E, p.crossOrigin);
      f.d.L(S, E, {
        crossOrigin: z,
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
  }, pt.preloadModule = function(S, p) {
    if (typeof S == "string")
      if (p) {
        var E = D(p.as, p.crossOrigin);
        f.d.m(S, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: E,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else f.d.m(S);
  }, pt.requestFormReset = function(S) {
    f.d.r(S);
  }, pt.unstable_batchedUpdates = function(S, p) {
    return S(p);
  }, pt.useFormState = function(S, p, E) {
    return b.H.useFormState(S, p, E);
  }, pt.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, pt.version = "19.2.8", pt;
}
var bh;
function og() {
  if (bh) return ir.exports;
  bh = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return s(), ir.exports = rg(), ir.exports;
}
var xh;
function fg() {
  if (xh) return ji;
  xh = 1;
  var s = cg(), o = mr(), d = og();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function N(e) {
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
  function D(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (N(e) !== e)
      throw Error(f(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = N(e), t === null) throw Error(f(188));
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
          if (u === a) return S(i), e;
          if (u === l) return S(i), t;
          u = u.sibling;
        }
        throw Error(f(188));
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
          if (!c) throw Error(f(189));
        }
      }
      if (a.alternate !== l) throw Error(f(190));
    }
    if (a.tag !== 3) throw Error(f(188));
    return a.stateNode.current === a ? e : t;
  }
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = E(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var z = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), se = /* @__PURE__ */ Symbol.for("react.fragment"), W = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), re = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), ne = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), X = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = X && e[X] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case se:
        return "Fragment";
      case te:
        return "Profiler";
      case W:
        return "StrictMode";
      case le:
        return "Suspense";
      case re:
        return "SuspenseList";
      case ne:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case k:
          return e.displayName || "Context";
        case xe:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Ce(e.type) || "Memo";
        case L:
          t = e._payload, e = e._init;
          try {
            return Ce(e(t));
          } catch {
          }
      }
    return null;
  }
  var ze = Array.isArray, h = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, y = [], P = -1;
  function m(e) {
    return { current: e };
  }
  function O(e) {
    0 > P || (e.current = y[P], y[P] = null, P--);
  }
  function K(e, t) {
    P++, y[P] = e.current, e.current = t;
  }
  var I = m(null), ye = m(null), ge = m(null), Ee = m(null);
  function Ge(e, t) {
    switch (K(ge, t), K(ye, e), K(I, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rd(t), e = kd(t, e);
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
    O(I), K(I, e);
  }
  function Q() {
    O(I), O(ye), O(ge);
  }
  function Me(e) {
    e.memoizedState !== null && K(Ee, e);
    var t = I.current, a = kd(t, e.type);
    t !== a && (K(ye, e), K(I, a));
  }
  function ve(e) {
    ye.current === e && (O(I), O(ye)), Ee.current === e && (O(Ee), gi._currentValue = J);
  }
  var ae, Dt;
  function tt(e) {
    if (ae === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ae = t && t[1] || "", Dt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ae + e + Dt;
  }
  var ct = !1;
  function ia(e, t) {
    if (!e || ct) return "";
    ct = !0;
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
                } catch (M) {
                  var A = M;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (M) {
                  A = M;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                A = M;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
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
`), w = r.split(`
`);
        for (i = l = 0; l < g.length && !g[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < w.length && !w[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === g.length || i === w.length)
          for (l = g.length - 1, i = w.length - 1; 1 <= l && 0 <= i && g[l] !== w[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (g[l] !== w[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || g[l] !== w[i]) {
                  var q = `
` + g[l].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ct = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? tt(a) : "";
  }
  function ua(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return tt(e.type);
      case 16:
        return tt("Lazy");
      case 13:
        return e.child !== t && t !== null ? tt("Suspense Fallback") : tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 15:
        return ia(e.type, !1);
      case 11:
        return ia(e.type.render, !1);
      case 1:
        return ia(e.type, !0);
      case 31:
        return tt("Activity");
      default:
        return "";
    }
  }
  function Vt(e) {
    try {
      var t = "", a = null;
      do
        t += ua(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ut = Object.prototype.hasOwnProperty, ea = s.unstable_scheduleCallback, ft = s.unstable_cancelCallback, sa = s.unstable_shouldYield, Ol = s.unstable_requestPaint, Oe = s.unstable_now, cl = s.unstable_getCurrentPriorityLevel, Ti = s.unstable_ImmediatePriority, Tn = s.unstable_UserBlockingPriority, Ua = s.unstable_NormalPriority, wn = s.unstable_LowPriority, An = s.unstable_IdlePriority, wi = s.log, Gu = s.unstable_setDisableYieldValue, ma = null, dt = null;
  function Mt(e) {
    if (typeof wi == "function" && Gu(e), dt && typeof dt.setStrictMode == "function")
      try {
        dt.setStrictMode(ma, e);
      } catch {
      }
  }
  var bt = Math.clz32 ? Math.clz32 : rl, Xu = Math.log, Ul = Math.LN2;
  function rl(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xu(e) / Ul | 0) | 0;
  }
  var ya = 256, Ra = 262144, ka = 4194304;
  function Gt(e) {
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
  function Rl(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return r !== 0 ? (l = r & ~u, l !== 0 ? i = Gt(l) : (c &= r, c !== 0 ? i = Gt(c) : a || (a = r & ~e, a !== 0 && (i = Gt(a))))) : (r = l & ~u, r !== 0 ? i = Gt(r) : c !== 0 ? i = Gt(c) : a || (a = l & ~e, a !== 0 && (i = Gt(a)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : i;
  }
  function ol(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Cn(e, t) {
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
  function kl() {
    var e = ka;
    return ka <<= 1, (ka & 62914560) === 0 && (ka = 4194304), e;
  }
  function zn(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function fl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function R(e, t, a, l, i, u) {
    var c = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, g = e.expirationTimes, w = e.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var q = 31 - bt(a), H = 1 << q;
      r[q] = 0, g[q] = -1;
      var A = w[q];
      if (A !== null)
        for (w[q] = null, q = 0; q < A.length; q++) {
          var M = A[q];
          M !== null && (M.lane &= -536870913);
        }
      a &= ~H;
    }
    l !== 0 && G(e, l, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function G(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - bt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function ie(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - bt(a), i = 1 << l;
      i & t | e[l] & t && (e[l] |= t), a &= ~i;
    }
  }
  function oe(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : pe(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function pe(e) {
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
  function Ue(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function he() {
    var e = U.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ih(e.type));
  }
  function St(e, t) {
    var a = U.p;
    try {
      return U.p = e, t();
    } finally {
      U.p = a;
    }
  }
  var vt = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + vt, Nt = "__reactProps$" + vt, ql = "__reactContainer$" + vt, Qu = "__reactEvents$" + vt, Kh = "__reactListeners$" + vt, $h = "__reactHandles$" + vt, xr = "__reactResources$" + vt, Dn = "__reactMarker$" + vt;
  function Zu(e) {
    delete e[Ze], delete e[Nt], delete e[Qu], delete e[Kh], delete e[$h];
  }
  function Bl(e) {
    var t = e[Ze];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[ql] || a[Ze]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Gd(e); e !== null; ) {
            if (a = e[Ze]) return a;
            e = Gd(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Hl(e) {
    if (e = e[Ze] || e[ql]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Mn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Ll(e) {
    var t = e[xr];
    return t || (t = e[xr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rt(e) {
    e[Dn] = !0;
  }
  var jr = /* @__PURE__ */ new Set(), Sr = {};
  function dl(e, t) {
    Yl(e, t), Yl(e + "Capture", t);
  }
  function Yl(e, t) {
    for (Sr[e] = t, e = 0; e < t.length; e++)
      jr.add(t[e]);
  }
  var Jh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nr = {}, Er = {};
  function Fh(e) {
    return ut.call(Er, e) ? !0 : ut.call(Nr, e) ? !1 : Jh.test(e) ? Er[e] = !0 : (Nr[e] = !0, !1);
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
  function Ci(e, t, a) {
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
  function Xt(e) {
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
  function _r(e) {
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
  function Ku(e) {
    if (!e._valueTracker) {
      var t = _r(e) ? "checked" : "value";
      e._valueTracker = Wh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Tr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = _r(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ih = /[\n"\\]/g;
  function Qt(e) {
    return e.replace(
      Ih,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $u(e, t, a, l, i, u, c, r) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Ju(e, c, Xt(t)) : a != null ? Ju(e, c, Xt(a)) : l != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Xt(r) : e.removeAttribute("name");
  }
  function wr(e, t, a, l, i, u, c, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ku(e);
        return;
      }
      a = a != null ? "" + Xt(a) : "", t = t != null ? "" + Xt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Ku(e);
  }
  function Ju(e, t, a) {
    t === "number" && zi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Vl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < a.length; i++)
        t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        i = t.hasOwnProperty("$" + e[a].value), e[a].selected !== i && (e[a].selected = i), i && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Xt(a), t = null, i = 0; i < e.length; i++) {
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
    if (t != null && (t = "" + Xt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Xt(a) : "";
  }
  function Cr(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(f(92));
        if (ze(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Xt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Ku(e);
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
  function zr(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ph.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Dr(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var i in t)
        l = t[i], t.hasOwnProperty(i) && a[i] !== l && zr(e, i, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && zr(e, u, t[u]);
  }
  function Fu(e) {
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
  function Di(e) {
    return tm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function va() {
  }
  var Wu = null;
  function Iu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xl = null, Ql = null;
  function Mr(e) {
    var t = Hl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Nt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if ($u(
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
              'input[name="' + Qt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var i = l[Nt] || null;
                if (!i) throw Error(f(90));
                $u(
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
              l = a[t], l.form === e.form && Tr(l);
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
  var Pu = !1;
  function Or(e, t, a) {
    if (Pu) return e(t, a);
    Pu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Pu = !1, (Xl !== null || Ql !== null) && (pu(), Xl && (t = Xl, e = Ql, Ql = Xl = null, Mr(t), e)))
        for (t = 0; t < e.length; t++) Mr(e[t]);
    }
  }
  function On(e, t) {
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
        f(231, t, typeof a)
      );
    return a;
  }
  var pa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = !1;
  if (pa)
    try {
      var Un = {};
      Object.defineProperty(Un, "passive", {
        get: function() {
          es = !0;
        }
      }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
    } catch {
      es = !1;
    }
  var qa = null, ts = null, Mi = null;
  function Ur() {
    if (Mi) return Mi;
    var e, t = ts, a = t.length, l, i = "value" in qa ? qa.value : qa.textContent, u = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++) ;
    var c = a - e;
    for (l = 1; l <= c && t[a - l] === i[u - l]; l++) ;
    return Mi = i.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ui() {
    return !0;
  }
  function Rr() {
    return !1;
  }
  function Et(e) {
    function t(a, l, i, u, c) {
      this._reactName = a, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ui : Rr, this.isPropagationStopped = Rr, this;
    }
    return z(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ui);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ui);
      },
      persist: function() {
      },
      isPersistent: Ui
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
  }, Ri = Et(hl), Rn = z({}, hl, { view: 0, detail: 0 }), am = Et(Rn), as, ls, kn, ki = z({}, Rn, {
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
    getModifierState: is,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== kn && (kn && e.type === "mousemove" ? (as = e.screenX - kn.screenX, ls = e.screenY - kn.screenY) : ls = as = 0, kn = e), as);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ls;
    }
  }), kr = Et(ki), lm = z({}, ki, { dataTransfer: 0 }), nm = Et(lm), im = z({}, Rn, { relatedTarget: 0 }), ns = Et(im), um = z({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = Et(um), cm = z({}, hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rm = Et(cm), om = z({}, hl, { data: 0 }), qr = Et(om), fm = {
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
  function is() {
    return mm;
  }
  var ym = z({}, Rn, {
    key: function(e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: is,
    charCode: function(e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), gm = Et(ym), vm = z({}, ki, {
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
  }), Br = Et(vm), pm = z({}, Rn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: is
  }), bm = Et(pm), xm = z({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jm = Et(xm), Sm = z({}, ki, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nm = Et(Sm), Em = z({}, hl, {
    newState: 0,
    oldState: 0
  }), _m = Et(Em), Tm = [9, 13, 27, 32], us = pa && "CompositionEvent" in window, qn = null;
  pa && "documentMode" in document && (qn = document.documentMode);
  var wm = pa && "TextEvent" in window && !qn, Hr = pa && (!us || qn && 8 < qn && 11 >= qn), Lr = " ", Yr = !1;
  function Vr(e, t) {
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
  function Gr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Zl = !1;
  function Am(e, t) {
    switch (e) {
      case "compositionend":
        return Gr(t);
      case "keypress":
        return t.which !== 32 ? null : (Yr = !0, Lr);
      case "textInput":
        return e = t.data, e === Lr && Yr ? null : e;
      default:
        return null;
    }
  }
  function Cm(e, t) {
    if (Zl)
      return e === "compositionend" || !us && Vr(e, t) ? (e = Ur(), Mi = ts = qa = null, Zl = !1, e) : null;
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
        return Hr && t.locale !== "ko" ? null : t.data;
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
  function Xr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zm[e.type] : t === "textarea";
  }
  function Qr(e, t, a, l) {
    Xl ? Ql ? Ql.push(l) : Ql = [l] : Xl = l, t = _u(t, "onChange"), 0 < t.length && (a = new Ri(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Bn = null, Hn = null;
  function Dm(e) {
    Cd(e, 0);
  }
  function qi(e) {
    var t = Mn(e);
    if (Tr(t)) return e;
  }
  function Zr(e, t) {
    if (e === "change") return t;
  }
  var Kr = !1;
  if (pa) {
    var ss;
    if (pa) {
      var cs = "oninput" in document;
      if (!cs) {
        var $r = document.createElement("div");
        $r.setAttribute("oninput", "return;"), cs = typeof $r.oninput == "function";
      }
      ss = cs;
    } else ss = !1;
    Kr = ss && (!document.documentMode || 9 < document.documentMode);
  }
  function Jr() {
    Bn && (Bn.detachEvent("onpropertychange", Fr), Hn = Bn = null);
  }
  function Fr(e) {
    if (e.propertyName === "value" && qi(Hn)) {
      var t = [];
      Qr(
        t,
        Hn,
        e,
        Iu(e)
      ), Or(Dm, t);
    }
  }
  function Mm(e, t, a) {
    e === "focusin" ? (Jr(), Bn = t, Hn = a, Bn.attachEvent("onpropertychange", Fr)) : e === "focusout" && Jr();
  }
  function Om(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qi(Hn);
  }
  function Um(e, t) {
    if (e === "click") return qi(t);
  }
  function Rm(e, t) {
    if (e === "input" || e === "change")
      return qi(t);
  }
  function km(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : km;
  function Ln(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var i = a[l];
      if (!ut.call(t, i) || !Ot(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Wr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ir(e, t) {
    var a = Wr(e);
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
      a = Wr(a);
    }
  }
  function Pr(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function eo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = zi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = zi(e.document);
    }
    return t;
  }
  function rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qm = pa && "documentMode" in document && 11 >= document.documentMode, Kl = null, os = null, Yn = null, fs = !1;
  function to(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fs || Kl == null || Kl !== zi(l) || (l = Kl, "selectionStart" in l && rs(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Yn && Ln(Yn, l) || (Yn = l, l = _u(os, "onSelect"), 0 < l.length && (t = new Ri(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Kl)));
  }
  function ml(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var $l = {
    animationend: ml("Animation", "AnimationEnd"),
    animationiteration: ml("Animation", "AnimationIteration"),
    animationstart: ml("Animation", "AnimationStart"),
    transitionrun: ml("Transition", "TransitionRun"),
    transitionstart: ml("Transition", "TransitionStart"),
    transitioncancel: ml("Transition", "TransitionCancel"),
    transitionend: ml("Transition", "TransitionEnd")
  }, ds = {}, ao = {};
  pa && (ao = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function yl(e) {
    if (ds[e]) return ds[e];
    if (!$l[e]) return e;
    var t = $l[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ao)
        return ds[e] = t[a];
    return e;
  }
  var lo = yl("animationend"), no = yl("animationiteration"), io = yl("animationstart"), Bm = yl("transitionrun"), Hm = yl("transitionstart"), Lm = yl("transitioncancel"), uo = yl("transitionend"), so = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function ta(e, t) {
    so.set(e, t), dl(t, [e]);
  }
  var Bi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Zt = [], Jl = 0, ms = 0;
  function Hi() {
    for (var e = Jl, t = ms = Jl = 0; t < e; ) {
      var a = Zt[t];
      Zt[t++] = null;
      var l = Zt[t];
      Zt[t++] = null;
      var i = Zt[t];
      Zt[t++] = null;
      var u = Zt[t];
      if (Zt[t++] = null, l !== null && i !== null) {
        var c = l.pending;
        c === null ? i.next = i : (i.next = c.next, c.next = i), l.pending = i;
      }
      u !== 0 && co(a, i, u);
    }
  }
  function Li(e, t, a, l) {
    Zt[Jl++] = e, Zt[Jl++] = t, Zt[Jl++] = a, Zt[Jl++] = l, ms |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ys(e, t, a, l) {
    return Li(e, t, a, l), Yi(e);
  }
  function gl(e, t) {
    return Li(e, null, null, t), Yi(e);
  }
  function co(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - bt(a), e = u.hiddenUpdates, l = e[i], l === null ? e[i] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Yi(e) {
    if (50 < ri)
      throw ri = 0, Ec = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fl = {};
  function Ym(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ut(e, t, a, l) {
    return new Ym(e, t, a, l);
  }
  function gs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ba(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ut(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function ro(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Vi(e, t, a, l, i, u) {
    var c = 0;
    if (l = e, typeof e == "function") gs(e) && (c = 1);
    else if (typeof e == "string")
      c = Zy(
        e,
        a,
        I.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ne:
          return e = Ut(31, a, t, i), e.elementType = ne, e.lanes = u, e;
        case se:
          return vl(a.children, i, u, t);
        case W:
          c = 8, i |= 24;
          break;
        case te:
          return e = Ut(12, a, t, i | 2), e.elementType = te, e.lanes = u, e;
        case le:
          return e = Ut(13, a, t, i), e.elementType = le, e.lanes = u, e;
        case re:
          return e = Ut(19, a, t, i), e.elementType = re, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case k:
                c = 10;
                break e;
              case xe:
                c = 9;
                break e;
              case F:
                c = 11;
                break e;
              case $:
                c = 14;
                break e;
              case L:
                c = 16, l = null;
                break e;
            }
          c = 29, a = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ut(c, a, t, i), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function vl(e, t, a, l) {
    return e = Ut(7, e, l, t), e.lanes = a, e;
  }
  function vs(e, t, a) {
    return e = Ut(6, e, null, t), e.lanes = a, e;
  }
  function oo(e) {
    var t = Ut(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ps(e, t, a) {
    return t = Ut(
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
  var fo = /* @__PURE__ */ new WeakMap();
  function Kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = fo.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Vt(t)
      }, fo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Vt(t)
    };
  }
  var Wl = [], Il = 0, Gi = null, Vn = 0, $t = [], Jt = 0, Ba = null, ca = 1, ra = "";
  function xa(e, t) {
    Wl[Il++] = Vn, Wl[Il++] = Gi, Gi = e, Vn = t;
  }
  function ho(e, t, a) {
    $t[Jt++] = ca, $t[Jt++] = ra, $t[Jt++] = Ba, Ba = e;
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
  function bs(e) {
    e.return !== null && (xa(e, 1), ho(e, 1, 0));
  }
  function xs(e) {
    for (; e === Gi; )
      Gi = Wl[--Il], Wl[Il] = null, Vn = Wl[--Il], Wl[Il] = null;
    for (; e === Ba; )
      Ba = $t[--Jt], $t[Jt] = null, ra = $t[--Jt], $t[Jt] = null, ca = $t[--Jt], $t[Jt] = null;
  }
  function mo(e, t) {
    $t[Jt++] = ca, $t[Jt++] = ra, $t[Jt++] = Ba, ca = t.id, ra = t.overflow, Ba = e;
  }
  var ht = null, Ke = null, De = !1, Ha = null, Ft = !1, js = Error(f(519));
  function La(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Gn(Kt(t, e)), js;
  }
  function yo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Ze] = e, t[Nt] = l, a) {
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
        for (a = 0; a < fi.length; a++)
          Te(fi[a], t);
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
        Te("invalid", t), wr(
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
        Te("invalid", t), Cr(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Od(t.textContent, a) ? (l.popover != null && (Te("beforetoggle", t), Te("toggle", t)), l.onScroll != null && Te("scroll", t), l.onScrollEnd != null && Te("scrollend", t), l.onClick != null && (t.onclick = va), t = !0) : t = !1, t || La(e, !0);
  }
  function go(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          Ft = !1;
          return;
        case 27:
        case 3:
          Ft = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function Pl(e) {
    if (e !== ht) return !1;
    if (!De) return go(e), De = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Hc(e.type, e.memoizedProps)), a = !a), a && Ke && La(e), go(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ke = Vd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ke = Vd(e);
    } else
      t === 27 ? (t = Ke, el(e.type) ? (e = Xc, Xc = null, Ke = e) : Ke = t) : Ke = ht ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pl() {
    Ke = ht = null, De = !1;
  }
  function Ss() {
    var e = Ha;
    return e !== null && (At === null ? At = e : At.push.apply(
      At,
      e
    ), Ha = null), e;
  }
  function Gn(e) {
    Ha === null ? Ha = [e] : Ha.push(e);
  }
  var Ns = m(null), bl = null, ja = null;
  function Ya(e, t, a) {
    K(Ns, t._currentValue), t._currentValue = a;
  }
  function Sa(e) {
    e._currentValue = Ns.current, O(Ns);
  }
  function Es(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function _s(e, t, a, l) {
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
              u.lanes |= a, r = u.alternate, r !== null && (r.lanes |= a), Es(
                u.return,
                a,
                e
              ), l || (c = null);
              break e;
            }
          u = r.next;
        }
      } else if (i.tag === 18) {
        if (c = i.return, c === null) throw Error(f(341));
        c.lanes |= a, u = c.alternate, u !== null && (u.lanes |= a), Es(c, a, e), c = null;
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
        if (c === null) throw Error(f(387));
        if (c = c.memoizedProps, c !== null) {
          var r = i.type;
          Ot(i.pendingProps.value, c.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (i === Ee.current) {
        if (c = i.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(gi) : e = [gi]);
      }
      i = i.return;
    }
    e !== null && _s(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Xi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function xl(e) {
    bl = e, ja = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return vo(bl, e);
  }
  function Qi(e, t) {
    return bl === null && xl(e), vo(e, t);
  }
  function vo(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ja === null) {
      if (e === null) throw Error(f(308));
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
  }, Gm = s.unstable_scheduleCallback, Xm = s.unstable_NormalPriority, at = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ts() {
    return {
      controller: new Vm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xn(e) {
    e.refCount--, e.refCount === 0 && Gm(Xm, function() {
      e.controller.abort();
    });
  }
  var Qn = null, ws = 0, tn = 0, an = null;
  function Qm(e, t) {
    if (Qn === null) {
      var a = Qn = [];
      ws = 0, tn = zc(), an = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return ws++, t.then(po, po), t;
  }
  function po() {
    if (--ws === 0 && Qn !== null) {
      an !== null && (an.status = "fulfilled");
      var e = Qn;
      Qn = null, tn = 0, an = null;
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
  var bo = h.S;
  h.S = function(e, t) {
    ld = Oe(), typeof t == "object" && t !== null && typeof t.then == "function" && Qm(e, t), bo !== null && bo(e, t);
  };
  var jl = m(null);
  function As() {
    var e = jl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Zi(e, t) {
    t === null ? K(jl, jl.current) : K(jl, t.pool);
  }
  function xo() {
    var e = As();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var ln = Error(f(460)), Cs = Error(f(474)), Ki = Error(f(542)), $i = { then: function() {
  } };
  function jo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function So(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(va, va), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Eo(e), e;
      default:
        if (typeof t.status == "string") t.then(va, va);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
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
            throw e = t.reason, Eo(e), e;
        }
        throw Nl = t, ln;
    }
  }
  function Sl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Nl = a, ln) : a;
    }
  }
  var Nl = null;
  function No() {
    if (Nl === null) throw Error(f(459));
    var e = Nl;
    return Nl = null, e;
  }
  function Eo(e) {
    if (e === ln || e === Ki)
      throw Error(f(483));
  }
  var nn = null, Zn = 0;
  function Ji(e) {
    var t = Zn;
    return Zn += 1, nn === null && (nn = []), So(nn, e, t);
  }
  function Kn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Fi(e, t) {
    throw t.$$typeof === x ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function _o(e) {
    function t(j, v) {
      if (e) {
        var T = j.deletions;
        T === null ? (j.deletions = [v], j.flags |= 16) : T.push(v);
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
    function i(j, v) {
      return j = ba(j, v), j.index = 0, j.sibling = null, j;
    }
    function u(j, v, T) {
      return j.index = T, e ? (T = j.alternate, T !== null ? (T = T.index, T < v ? (j.flags |= 67108866, v) : T) : (j.flags |= 67108866, v)) : (j.flags |= 1048576, v);
    }
    function c(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function r(j, v, T, B) {
      return v === null || v.tag !== 6 ? (v = vs(T, j.mode, B), v.return = j, v) : (v = i(v, T), v.return = j, v);
    }
    function g(j, v, T, B) {
      var de = T.type;
      return de === se ? q(
        j,
        v,
        T.props.children,
        B,
        T.key
      ) : v !== null && (v.elementType === de || typeof de == "object" && de !== null && de.$$typeof === L && Sl(de) === v.type) ? (v = i(v, T.props), Kn(v, T), v.return = j, v) : (v = Vi(
        T.type,
        T.key,
        T.props,
        null,
        j.mode,
        B
      ), Kn(v, T), v.return = j, v);
    }
    function w(j, v, T, B) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== T.containerInfo || v.stateNode.implementation !== T.implementation ? (v = ps(T, j.mode, B), v.return = j, v) : (v = i(v, T.children || []), v.return = j, v);
    }
    function q(j, v, T, B, de) {
      return v === null || v.tag !== 7 ? (v = vl(
        T,
        j.mode,
        B,
        de
      ), v.return = j, v) : (v = i(v, T), v.return = j, v);
    }
    function H(j, v, T) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = vs(
          "" + v,
          j.mode,
          T
        ), v.return = j, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Y:
            return T = Vi(
              v.type,
              v.key,
              v.props,
              null,
              j.mode,
              T
            ), Kn(T, v), T.return = j, T;
          case V:
            return v = ps(
              v,
              j.mode,
              T
            ), v.return = j, v;
          case L:
            return v = Sl(v), H(j, v, T);
        }
        if (ze(v) || ee(v))
          return v = vl(
            v,
            j.mode,
            T,
            null
          ), v.return = j, v;
        if (typeof v.then == "function")
          return H(j, Ji(v), T);
        if (v.$$typeof === k)
          return H(
            j,
            Qi(j, v),
            T
          );
        Fi(j, v);
      }
      return null;
    }
    function A(j, v, T, B) {
      var de = v !== null ? v.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return de !== null ? null : r(j, v, "" + T, B);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Y:
            return T.key === de ? g(j, v, T, B) : null;
          case V:
            return T.key === de ? w(j, v, T, B) : null;
          case L:
            return T = Sl(T), A(j, v, T, B);
        }
        if (ze(T) || ee(T))
          return de !== null ? null : q(j, v, T, B, null);
        if (typeof T.then == "function")
          return A(
            j,
            v,
            Ji(T),
            B
          );
        if (T.$$typeof === k)
          return A(
            j,
            v,
            Qi(j, T),
            B
          );
        Fi(j, T);
      }
      return null;
    }
    function M(j, v, T, B, de) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return j = j.get(T) || null, r(v, j, "" + B, de);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Y:
            return j = j.get(
              B.key === null ? T : B.key
            ) || null, g(v, j, B, de);
          case V:
            return j = j.get(
              B.key === null ? T : B.key
            ) || null, w(v, j, B, de);
          case L:
            return B = Sl(B), M(
              j,
              v,
              T,
              B,
              de
            );
        }
        if (ze(B) || ee(B))
          return j = j.get(T) || null, q(v, j, B, de, null);
        if (typeof B.then == "function")
          return M(
            j,
            v,
            T,
            Ji(B),
            de
          );
        if (B.$$typeof === k)
          return M(
            j,
            v,
            T,
            Qi(v, B),
            de
          );
        Fi(v, B);
      }
      return null;
    }
    function ue(j, v, T, B) {
      for (var de = null, Re = null, ce = v, Se = v = 0, Ae = null; ce !== null && Se < T.length; Se++) {
        ce.index > Se ? (Ae = ce, ce = null) : Ae = ce.sibling;
        var ke = A(
          j,
          ce,
          T[Se],
          B
        );
        if (ke === null) {
          ce === null && (ce = Ae);
          break;
        }
        e && ce && ke.alternate === null && t(j, ce), v = u(ke, v, Se), Re === null ? de = ke : Re.sibling = ke, Re = ke, ce = Ae;
      }
      if (Se === T.length)
        return a(j, ce), De && xa(j, Se), de;
      if (ce === null) {
        for (; Se < T.length; Se++)
          ce = H(j, T[Se], B), ce !== null && (v = u(
            ce,
            v,
            Se
          ), Re === null ? de = ce : Re.sibling = ce, Re = ce);
        return De && xa(j, Se), de;
      }
      for (ce = l(ce); Se < T.length; Se++)
        Ae = M(
          ce,
          j,
          Se,
          T[Se],
          B
        ), Ae !== null && (e && Ae.alternate !== null && ce.delete(
          Ae.key === null ? Se : Ae.key
        ), v = u(
          Ae,
          v,
          Se
        ), Re === null ? de = Ae : Re.sibling = Ae, Re = Ae);
      return e && ce.forEach(function(il) {
        return t(j, il);
      }), De && xa(j, Se), de;
    }
    function me(j, v, T, B) {
      if (T == null) throw Error(f(151));
      for (var de = null, Re = null, ce = v, Se = v = 0, Ae = null, ke = T.next(); ce !== null && !ke.done; Se++, ke = T.next()) {
        ce.index > Se ? (Ae = ce, ce = null) : Ae = ce.sibling;
        var il = A(j, ce, ke.value, B);
        if (il === null) {
          ce === null && (ce = Ae);
          break;
        }
        e && ce && il.alternate === null && t(j, ce), v = u(il, v, Se), Re === null ? de = il : Re.sibling = il, Re = il, ce = Ae;
      }
      if (ke.done)
        return a(j, ce), De && xa(j, Se), de;
      if (ce === null) {
        for (; !ke.done; Se++, ke = T.next())
          ke = H(j, ke.value, B), ke !== null && (v = u(ke, v, Se), Re === null ? de = ke : Re.sibling = ke, Re = ke);
        return De && xa(j, Se), de;
      }
      for (ce = l(ce); !ke.done; Se++, ke = T.next())
        ke = M(ce, j, Se, ke.value, B), ke !== null && (e && ke.alternate !== null && ce.delete(ke.key === null ? Se : ke.key), v = u(ke, v, Se), Re === null ? de = ke : Re.sibling = ke, Re = ke);
      return e && ce.forEach(function(lg) {
        return t(j, lg);
      }), De && xa(j, Se), de;
    }
    function Ve(j, v, T, B) {
      if (typeof T == "object" && T !== null && T.type === se && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Y:
            e: {
              for (var de = T.key; v !== null; ) {
                if (v.key === de) {
                  if (de = T.type, de === se) {
                    if (v.tag === 7) {
                      a(
                        j,
                        v.sibling
                      ), B = i(
                        v,
                        T.props.children
                      ), B.return = j, j = B;
                      break e;
                    }
                  } else if (v.elementType === de || typeof de == "object" && de !== null && de.$$typeof === L && Sl(de) === v.type) {
                    a(
                      j,
                      v.sibling
                    ), B = i(v, T.props), Kn(B, T), B.return = j, j = B;
                    break e;
                  }
                  a(j, v);
                  break;
                } else t(j, v);
                v = v.sibling;
              }
              T.type === se ? (B = vl(
                T.props.children,
                j.mode,
                B,
                T.key
              ), B.return = j, j = B) : (B = Vi(
                T.type,
                T.key,
                T.props,
                null,
                j.mode,
                B
              ), Kn(B, T), B.return = j, j = B);
            }
            return c(j);
          case V:
            e: {
              for (de = T.key; v !== null; ) {
                if (v.key === de)
                  if (v.tag === 4 && v.stateNode.containerInfo === T.containerInfo && v.stateNode.implementation === T.implementation) {
                    a(
                      j,
                      v.sibling
                    ), B = i(v, T.children || []), B.return = j, j = B;
                    break e;
                  } else {
                    a(j, v);
                    break;
                  }
                else t(j, v);
                v = v.sibling;
              }
              B = ps(T, j.mode, B), B.return = j, j = B;
            }
            return c(j);
          case L:
            return T = Sl(T), Ve(
              j,
              v,
              T,
              B
            );
        }
        if (ze(T))
          return ue(
            j,
            v,
            T,
            B
          );
        if (ee(T)) {
          if (de = ee(T), typeof de != "function") throw Error(f(150));
          return T = de.call(T), me(
            j,
            v,
            T,
            B
          );
        }
        if (typeof T.then == "function")
          return Ve(
            j,
            v,
            Ji(T),
            B
          );
        if (T.$$typeof === k)
          return Ve(
            j,
            v,
            Qi(j, T),
            B
          );
        Fi(j, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, v !== null && v.tag === 6 ? (a(j, v.sibling), B = i(v, T), B.return = j, j = B) : (a(j, v), B = vs(T, j.mode, B), B.return = j, j = B), c(j)) : a(j, v);
    }
    return function(j, v, T, B) {
      try {
        Zn = 0;
        var de = Ve(
          j,
          v,
          T,
          B
        );
        return nn = null, de;
      } catch (ce) {
        if (ce === ln || ce === Ki) throw ce;
        var Re = Ut(29, ce, null, j.mode);
        return Re.lanes = B, Re.return = j, Re;
      }
    };
  }
  var El = _o(!0), To = _o(!1), Va = !1;
  function zs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ds(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ga(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Xa(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (qe & 2) !== 0) {
      var i = l.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = Yi(e), co(e, null, a), t;
    }
    return Li(e, l, t, a), Yi(e);
  }
  function $n(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ie(e, a);
    }
  }
  function Ms(e, t) {
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
  var Os = !1;
  function Jn() {
    if (Os) {
      var e = an;
      if (e !== null) throw e;
    }
  }
  function Fn(e, t, a, l) {
    Os = !1;
    var i = e.updateQueue;
    Va = !1;
    var u = i.firstBaseUpdate, c = i.lastBaseUpdate, r = i.shared.pending;
    if (r !== null) {
      i.shared.pending = null;
      var g = r, w = g.next;
      g.next = null, c === null ? u = w : c.next = w, c = g;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, r = q.lastBaseUpdate, r !== c && (r === null ? q.firstBaseUpdate = w : r.next = w, q.lastBaseUpdate = g));
    }
    if (u !== null) {
      var H = i.baseState;
      c = 0, q = w = g = null, r = u;
      do {
        var A = r.lane & -536870913, M = A !== r.lane;
        if (M ? (we & A) === A : (l & A) === A) {
          A !== 0 && A === tn && (Os = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var ue = e, me = r;
            A = t;
            var Ve = a;
            switch (me.tag) {
              case 1:
                if (ue = me.payload, typeof ue == "function") {
                  H = ue.call(Ve, H, A);
                  break e;
                }
                H = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = me.payload, A = typeof ue == "function" ? ue.call(Ve, H, A) : ue, A == null) break e;
                H = z({}, H, A);
                break e;
              case 2:
                Va = !0;
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
          }, q === null ? (w = q = M, g = H) : q = q.next = M, c |= A;
        if (r = r.next, r === null) {
          if (r = i.shared.pending, r === null)
            break;
          M = r, r = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      q === null && (g = H), i.baseState = g, i.firstBaseUpdate = w, i.lastBaseUpdate = q, u === null && (i.shared.lanes = 0), Ja |= c, e.lanes = c, e.memoizedState = H;
    }
  }
  function wo(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Ao(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        wo(a[e], t);
  }
  var un = m(null), Wi = m(0);
  function Co(e, t) {
    e = Da, K(Wi, e), K(un, t), Da = e | t.baseLanes;
  }
  function Us() {
    K(Wi, Da), K(un, un.current);
  }
  function Rs() {
    Da = Wi.current, O(un), O(Wi);
  }
  var Rt = m(null), Wt = null;
  function Qa(e) {
    var t = e.alternate;
    K(Pe, Pe.current & 1), K(Rt, e), Wt === null && (t === null || un.current !== null || t.memoizedState !== null) && (Wt = e);
  }
  function ks(e) {
    K(Pe, Pe.current), K(Rt, e), Wt === null && (Wt = e);
  }
  function zo(e) {
    e.tag === 22 ? (K(Pe, Pe.current), K(Rt, e), Wt === null && (Wt = e)) : Za();
  }
  function Za() {
    K(Pe, Pe.current), K(Rt, Rt.current);
  }
  function kt(e) {
    O(Rt), Wt === e && (Wt = null), O(Pe);
  }
  var Pe = m(0);
  function Ii(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Vc(a) || Gc(a)))
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
  var Na = 0, je = null, Le = null, lt = null, Pi = !1, sn = !1, _l = !1, eu = 0, Wn = 0, cn = null, Km = 0;
  function We() {
    throw Error(f(321));
  }
  function qs(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ot(e[a], t[a])) return !1;
    return !0;
  }
  function Bs(e, t, a, l, i, u) {
    return Na = u, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, h.H = e === null || e.memoizedState === null ? mf : Ps, _l = !1, u = a(l, i), _l = !1, sn && (u = Mo(
      t,
      a,
      l,
      i
    )), Do(e), u;
  }
  function Do(e) {
    h.H = ei;
    var t = Le !== null && Le.next !== null;
    if (Na = 0, lt = Le = je = null, Pi = !1, Wn = 0, cn = null, t) throw Error(f(300));
    e === null || nt || (e = e.dependencies, e !== null && Xi(e) && (nt = !0));
  }
  function Mo(e, t, a, l) {
    je = e;
    var i = 0;
    do {
      if (sn && (cn = null), Wn = 0, sn = !1, 25 <= i) throw Error(f(301));
      if (i += 1, lt = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      h.H = yf, u = t(a, l);
    } while (sn);
    return u;
  }
  function $m() {
    var e = h.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? In(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (je.flags |= 1024), t;
  }
  function Hs() {
    var e = eu !== 0;
    return eu = 0, e;
  }
  function Ls(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Ys(e) {
    if (Pi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Pi = !1;
    }
    Na = 0, lt = Le = je = null, sn = !1, Wn = eu = 0, cn = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? je.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function et() {
    if (Le === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = lt === null ? je.memoizedState : lt.next;
    if (t !== null)
      lt = t, Le = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(f(467)) : Error(f(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, lt === null ? je.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function In(e) {
    var t = Wn;
    return Wn += 1, cn === null && (cn = []), e = So(cn, e, t), t = je, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, h.H = t === null || t.memoizedState === null ? mf : Ps), e;
  }
  function au(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return In(e);
      if (e.$$typeof === k) return mt(e);
    }
    throw Error(f(438, String(e)));
  }
  function Vs(e) {
    var t = null, a = je.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = je.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = tu(), je.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = Z;
    return t.index++, a;
  }
  function Ea(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function lu(e) {
    var t = et();
    return Gs(t, Le, e);
  }
  function Gs(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(f(311));
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
      var r = c = null, g = null, w = t, q = !1;
      do {
        var H = w.lane & -536870913;
        if (H !== w.lane ? (we & H) === H : (Na & H) === H) {
          var A = w.revertLane;
          if (A === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), H === tn && (q = !0);
          else if ((Na & A) === A) {
            w = w.next, A === tn && (q = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, g === null ? (r = g = H, c = u) : g = g.next = H, je.lanes |= A, Ja |= A;
          H = w.action, _l && a(u, H), u = w.hasEagerState ? w.eagerState : a(u, H);
        } else
          A = {
            lane: H,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, g === null ? (r = g = A, c = u) : g = g.next = A, je.lanes |= H, Ja |= H;
        w = w.next;
      } while (w !== null && w !== t);
      if (g === null ? c = u : g.next = r, !Ot(u, e.memoizedState) && (nt = !0, q && (a = an, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = c, e.baseQueue = g, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Xs(e) {
    var t = et(), a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, i = a.pending, u = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var c = i = i.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== i);
      Ot(u, t.memoizedState) || (nt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Oo(e, t, a) {
    var l = je, i = et(), u = De;
    if (u) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = t();
    var c = !Ot(
      (Le || i).memoizedState,
      a
    );
    if (c && (i.memoizedState = a, nt = !0), i = i.queue, Ks(ko.bind(null, l, i, e), [
      e
    ]), i.getSnapshot !== t || c || lt !== null && lt.memoizedState.tag & 1) {
      if (l.flags |= 2048, rn(
        9,
        { destroy: void 0 },
        Ro.bind(
          null,
          l,
          i,
          a,
          t
        ),
        null
      ), Xe === null) throw Error(f(349));
      u || (Na & 127) !== 0 || Uo(l, t, a);
    }
    return a;
  }
  function Uo(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = je.updateQueue, t === null ? (t = tu(), je.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Ro(e, t, a, l) {
    t.value = a, t.getSnapshot = l, qo(t) && Bo(e);
  }
  function ko(e, t, a) {
    return a(function() {
      qo(t) && Bo(e);
    });
  }
  function qo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ot(e, a);
    } catch {
      return !0;
    }
  }
  function Bo(e) {
    var t = gl(e, 2);
    t !== null && Ct(t, e, 2);
  }
  function Qs(e) {
    var t = xt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _l) {
        Mt(!0);
        try {
          a();
        } finally {
          Mt(!1);
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
  function Ho(e, t, a, l) {
    return e.baseState = a, Gs(
      e,
      Le,
      typeof l == "function" ? l : Ea
    );
  }
  function Jm(e, t, a, l, i) {
    if (uu(e)) throw Error(f(485));
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
      h.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, Lo(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Lo(e, t) {
    var a = t.action, l = t.payload, i = e.state;
    if (t.isTransition) {
      var u = h.T, c = {};
      h.T = c;
      try {
        var r = a(i, l), g = h.S;
        g !== null && g(c, r), Yo(e, t, r);
      } catch (w) {
        Zs(e, t, w);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), h.T = u;
      }
    } else
      try {
        u = a(i, l), Yo(e, t, u);
      } catch (w) {
        Zs(e, t, w);
      }
  }
  function Yo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Vo(e, t, l);
      },
      function(l) {
        return Zs(e, t, l);
      }
    ) : Vo(e, t, a);
  }
  function Vo(e, t, a) {
    t.status = "fulfilled", t.value = a, Go(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Lo(e, a)));
  }
  function Zs(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Go(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Go(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Xo(e, t) {
    return t;
  }
  function Qo(e, t) {
    if (De) {
      var a = Xe.formState;
      if (a !== null) {
        e: {
          var l = je;
          if (De) {
            if (Ke) {
              t: {
                for (var i = Ke, u = Ft; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = It(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                Ke = It(
                  i.nextSibling
                ), l = i.data === "F!";
                break e;
              }
            }
            La(l);
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
      lastRenderedReducer: Xo,
      lastRenderedState: t
    }, a.queue = l, a = ff.bind(
      null,
      je,
      l
    ), l.dispatch = a, l = Qs(!1), u = Is.bind(
      null,
      je,
      !1,
      l.queue
    ), l = xt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = i, a = Jm.bind(
      null,
      je,
      i,
      u,
      a
    ), i.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Zo(e) {
    var t = et();
    return Ko(t, Le, e);
  }
  function Ko(e, t, a) {
    if (t = Gs(
      e,
      t,
      Xo
    )[0], e = lu(Ea)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = In(t);
      } catch (c) {
        throw c === ln ? Ki : c;
      }
    else l = t;
    t = et();
    var i = t.queue, u = i.dispatch;
    return a !== t.memoizedState && (je.flags |= 2048, rn(
      9,
      { destroy: void 0 },
      Fm.bind(null, i, a),
      null
    )), [l, u, e];
  }
  function Fm(e, t) {
    e.action = t;
  }
  function $o(e) {
    var t = et(), a = Le;
    if (a !== null)
      return Ko(t, a, e);
    et(), t = t.memoizedState, a = et();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function rn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = je.updateQueue, t === null && (t = tu(), je.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Jo() {
    return et().memoizedState;
  }
  function nu(e, t, a, l) {
    var i = xt();
    je.flags |= e, i.memoizedState = rn(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function iu(e, t, a, l) {
    var i = et();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Le !== null && l !== null && qs(l, Le.memoizedState.deps) ? i.memoizedState = rn(t, u, a, l) : (je.flags |= e, i.memoizedState = rn(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Fo(e, t) {
    nu(8390656, 8, e, t);
  }
  function Ks(e, t) {
    iu(2048, 8, e, t);
  }
  function Wm(e) {
    je.flags |= 4;
    var t = je.updateQueue;
    if (t === null)
      t = tu(), je.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Wo(e) {
    var t = et().memoizedState;
    return Wm({ ref: t, nextImpl: e }), function() {
      if ((qe & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Io(e, t) {
    return iu(4, 2, e, t);
  }
  function Po(e, t) {
    return iu(4, 4, e, t);
  }
  function ef(e, t) {
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
  function tf(e, t, a) {
    a = a != null ? a.concat([e]) : null, iu(4, 4, ef.bind(null, t, e), a);
  }
  function $s() {
  }
  function af(e, t) {
    var a = et();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && qs(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function lf(e, t) {
    var a = et();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && qs(t, l[1]))
      return l[0];
    if (l = e(), _l) {
      Mt(!0);
      try {
        e();
      } finally {
        Mt(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Js(e, t, a) {
    return a === void 0 || (Na & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = id(), je.lanes |= e, Ja |= e, a);
  }
  function nf(e, t, a, l) {
    return Ot(a, t) ? a : un.current !== null ? (e = Js(e, a, l), Ot(e, t) || (nt = !0), e) : (Na & 42) === 0 || (Na & 1073741824) !== 0 && (we & 261930) === 0 ? (nt = !0, e.memoizedState = a) : (e = id(), je.lanes |= e, Ja |= e, t);
  }
  function uf(e, t, a, l, i) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var c = h.T, r = {};
    h.T = r, Is(e, !1, t, a);
    try {
      var g = i(), w = h.S;
      if (w !== null && w(r, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var q = Zm(
          g,
          l
        );
        Pn(
          e,
          t,
          q,
          Ht(e)
        );
      } else
        Pn(
          e,
          t,
          l,
          Ht(e)
        );
    } catch (H) {
      Pn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Ht()
      );
    } finally {
      U.p = u, c !== null && r.types !== null && (c.types = r.types), h.T = c;
    }
  }
  function Im() {
  }
  function Fs(e, t, a, l) {
    if (e.tag !== 5) throw Error(f(476));
    var i = sf(e).queue;
    uf(
      e,
      i,
      t,
      J,
      a === null ? Im : function() {
        return cf(e), a(l);
      }
    );
  }
  function sf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: J
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
  function cf(e) {
    var t = sf(e);
    t.next === null && (t = e.alternate.memoizedState), Pn(
      e,
      t.next.queue,
      {},
      Ht()
    );
  }
  function Ws() {
    return mt(gi);
  }
  function rf() {
    return et().memoizedState;
  }
  function of() {
    return et().memoizedState;
  }
  function Pm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ht();
          e = Ga(a);
          var l = Xa(t, e, a);
          l !== null && (Ct(l, t, a), $n(l, t, a)), t = { cache: Ts() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ey(e, t, a) {
    var l = Ht();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uu(e) ? df(t, a) : (a = ys(e, t, a, l), a !== null && (Ct(a, e, l), hf(a, t, l)));
  }
  function ff(e, t, a) {
    var l = Ht();
    Pn(e, t, a, l);
  }
  function Pn(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uu(e)) df(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, r = u(c, a);
          if (i.hasEagerState = !0, i.eagerState = r, Ot(r, c))
            return Li(e, t, i, 0), Xe === null && Hi(), !1;
        } catch {
        }
      if (a = ys(e, t, i, l), a !== null)
        return Ct(a, e, l), hf(a, t, l), !0;
    }
    return !1;
  }
  function Is(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: zc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uu(e)) {
      if (t) throw Error(f(479));
    } else
      t = ys(
        e,
        a,
        l,
        2
      ), t !== null && Ct(t, e, 2);
  }
  function uu(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je;
  }
  function df(e, t) {
    sn = Pi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function hf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ie(e, a);
    }
  }
  var ei = {
    readContext: mt,
    use: au,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We
  };
  ei.useEffectEvent = We;
  var mf = {
    readContext: mt,
    use: au,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: Fo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, nu(
        4194308,
        4,
        ef.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return nu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      nu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (_l) {
        Mt(!0);
        try {
          e();
        } finally {
          Mt(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = xt();
      if (a !== void 0) {
        var i = a(t);
        if (_l) {
          Mt(!0);
          try {
            a(t);
          } finally {
            Mt(!1);
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
        je,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Qs(e);
      var t = e.queue, a = ff.bind(null, je, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: $s,
    useDeferredValue: function(e, t) {
      var a = xt();
      return Js(a, e, t);
    },
    useTransition: function() {
      var e = Qs(!1);
      return e = uf.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = je, i = xt();
      if (De) {
        if (a === void 0)
          throw Error(f(407));
        a = a();
      } else {
        if (a = t(), Xe === null)
          throw Error(f(349));
        (we & 127) !== 0 || Uo(l, t, a);
      }
      i.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return i.queue = u, Fo(ko.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, rn(
        9,
        { destroy: void 0 },
        Ro.bind(
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
        a = (l & ~(1 << 32 - bt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = eu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Km++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ws,
    useFormState: Qo,
    useActionState: Qo,
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
      return t.queue = a, t = Is.bind(
        null,
        je,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Vs,
    useCacheRefresh: function() {
      return xt().memoizedState = Pm.bind(
        null,
        je
      );
    },
    useEffectEvent: function(e) {
      var t = xt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((qe & 2) !== 0)
          throw Error(f(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ps = {
    readContext: mt,
    use: au,
    useCallback: af,
    useContext: mt,
    useEffect: Ks,
    useImperativeHandle: tf,
    useInsertionEffect: Io,
    useLayoutEffect: Po,
    useMemo: lf,
    useReducer: lu,
    useRef: Jo,
    useState: function() {
      return lu(Ea);
    },
    useDebugValue: $s,
    useDeferredValue: function(e, t) {
      var a = et();
      return nf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = lu(Ea)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : In(e),
        t
      ];
    },
    useSyncExternalStore: Oo,
    useId: rf,
    useHostTransitionStatus: Ws,
    useFormState: Zo,
    useActionState: Zo,
    useOptimistic: function(e, t) {
      var a = et();
      return Ho(a, Le, e, t);
    },
    useMemoCache: Vs,
    useCacheRefresh: of
  };
  Ps.useEffectEvent = Wo;
  var yf = {
    readContext: mt,
    use: au,
    useCallback: af,
    useContext: mt,
    useEffect: Ks,
    useImperativeHandle: tf,
    useInsertionEffect: Io,
    useLayoutEffect: Po,
    useMemo: lf,
    useReducer: Xs,
    useRef: Jo,
    useState: function() {
      return Xs(Ea);
    },
    useDebugValue: $s,
    useDeferredValue: function(e, t) {
      var a = et();
      return Le === null ? Js(a, e, t) : nf(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xs(Ea)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : In(e),
        t
      ];
    },
    useSyncExternalStore: Oo,
    useId: rf,
    useHostTransitionStatus: Ws,
    useFormState: $o,
    useActionState: $o,
    useOptimistic: function(e, t) {
      var a = et();
      return Le !== null ? Ho(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Vs,
    useCacheRefresh: of
  };
  yf.useEffectEvent = Wo;
  function ec(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : z({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var tc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), i = Ga(l);
      i.payload = t, a != null && (i.callback = a), t = Xa(e, i, l), t !== null && (Ct(t, e, l), $n(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), i = Ga(l);
      i.tag = 1, i.payload = t, a != null && (i.callback = a), t = Xa(e, i, l), t !== null && (Ct(t, e, l), $n(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ht(), l = Ga(a);
      l.tag = 2, t != null && (l.callback = t), t = Xa(e, l, a), t !== null && (Ct(t, e, a), $n(t, e, a));
    }
  };
  function gf(e, t, a, l, i, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Ln(a, l) || !Ln(i, u) : !0;
  }
  function vf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && tc.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = z({}, a));
      for (var i in e)
        a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function pf(e) {
    Bi(e);
  }
  function bf(e) {
    console.error(e);
  }
  function xf(e) {
    Bi(e);
  }
  function su(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function jf(e, t, a) {
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
  function ac(e, t, a) {
    return a = Ga(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      su(e, t);
    }, a;
  }
  function Sf(e) {
    return e = Ga(e), e.tag = 3, e;
  }
  function Nf(e, t, a, l) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        jf(t, a, l);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      jf(t, a, l), typeof i != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
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
      ), a = Rt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Wt === null ? bu() : a.alternate === null && Ie === 0 && (Ie = 3), a.flags &= -257, a.flags |= 65536, a.lanes = i, l === $i ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), wc(e, l, i)), !1;
          case 22:
            return a.flags |= 65536, l === $i ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), wc(e, l, i)), !1;
        }
        throw Error(f(435, a.tag));
      }
      return wc(e, l, i), bu(), !1;
    }
    if (De)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, l !== js && (e = Error(f(422), { cause: l }), Gn(Kt(e, a)))) : (l !== js && (t = Error(f(423), {
        cause: l
      }), Gn(
        Kt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, l = Kt(l, a), i = ac(
        e.stateNode,
        l,
        i
      ), Ms(e, i), Ie !== 4 && (Ie = 2)), !1;
    var u = Error(f(520), { cause: l });
    if (u = Kt(u, a), ci === null ? ci = [u] : ci.push(u), Ie !== 4 && (Ie = 2), t === null) return !0;
    l = Kt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = i & -i, a.lanes |= e, e = ac(a.stateNode, l, e), Ms(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Fa === null || !Fa.has(u))))
            return a.flags |= 65536, i &= -i, a.lanes |= i, i = Sf(i), Nf(
              i,
              e,
              a,
              l
            ), Ms(a, i), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var lc = Error(f(461)), nt = !1;
  function yt(e, t, a, l) {
    t.child = e === null ? To(t, null, a, l) : El(
      t,
      e.child,
      a,
      l
    );
  }
  function Ef(e, t, a, l, i) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var c = {};
      for (var r in l)
        r !== "ref" && (c[r] = l[r]);
    } else c = l;
    return xl(t), l = Bs(
      e,
      t,
      a,
      c,
      u,
      i
    ), r = Hs(), e !== null && !nt ? (Ls(e, t, i), _a(e, t, i)) : (De && r && bs(t), t.flags |= 1, yt(e, t, l, i), t.child);
  }
  function _f(e, t, a, l, i) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !gs(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Tf(
        e,
        t,
        u,
        l,
        i
      )) : (e = Vi(
        a.type,
        null,
        l,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !fc(e, i)) {
      var c = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ln, a(c, l) && e.ref === t.ref)
        return _a(e, t, i);
    }
    return t.flags |= 1, e = ba(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Tf(e, t, a, l, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ln(u, l) && e.ref === t.ref)
        if (nt = !1, t.pendingProps = l = u, fc(e, i))
          (e.flags & 131072) !== 0 && (nt = !0);
        else
          return t.lanes = e.lanes, _a(e, t, i);
    }
    return nc(
      e,
      t,
      a,
      l,
      i
    );
  }
  function wf(e, t, a, l) {
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Zi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Co(t, u) : Us(), zo(t);
      else
        return l = t.lanes = 536870912, Af(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Zi(t, u.cachePool), Co(t, u), Za(), t.memoizedState = null) : (e !== null && Zi(t, null), Us(), Za());
    return yt(e, t, i, a), t.child;
  }
  function ti(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Af(e, t, a, l, i) {
    var u = As();
    return u = u === null ? null : { parent: at._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Zi(t, null), Us(), zo(t), e !== null && en(e, t, l, !0), t.childLanes = i, null;
  }
  function cu(e, t) {
    return t = ou(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Cf(e, t, a) {
    return El(t, e.child, null, a), e = cu(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
  }
  function ay(e, t, a) {
    var l = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (De) {
        if (l.mode === "hidden")
          return e = cu(t, l), t.lanes = 536870912, ti(null, e);
        if (ks(t), (e = Ke) ? (e = Yd(
          e,
          Ft
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ba !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = oo(e), a.return = t, t.child = a, ht = t, Ke = null)) : e = null, e === null) throw La(t);
        return t.lanes = 536870912, null;
      }
      return cu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (ks(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Cf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (nt || en(e, t, a, !1), i = (a & e.childLanes) !== 0, nt || i) {
        if (l = Xe, l !== null && (c = oe(l, a), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, gl(e, c), Ct(l, e, c), lc;
        bu(), t = Cf(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Ke = It(c.nextSibling), ht = t, De = !0, Ha = null, Ft = !1, e !== null && mo(t, e), t = cu(t, l), t.flags |= 4096;
      return t;
    }
    return e = ba(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ru(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(f(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function nc(e, t, a, l, i) {
    return xl(t), a = Bs(
      e,
      t,
      a,
      l,
      void 0,
      i
    ), l = Hs(), e !== null && !nt ? (Ls(e, t, i), _a(e, t, i)) : (De && l && bs(t), t.flags |= 1, yt(e, t, a, i), t.child);
  }
  function zf(e, t, a, l, i, u) {
    return xl(t), t.updateQueue = null, a = Mo(
      t,
      l,
      a,
      i
    ), Do(e), l = Hs(), e !== null && !nt ? (Ls(e, t, u), _a(e, t, u)) : (De && l && bs(t), t.flags |= 1, yt(e, t, a, u), t.child);
  }
  function Df(e, t, a, l, i) {
    if (xl(t), t.stateNode === null) {
      var u = Fl, c = a.contextType;
      typeof c == "object" && c !== null && (u = mt(c)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = tc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, zs(t), c = a.contextType, u.context = typeof c == "object" && c !== null ? mt(c) : Fl, u.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (ec(
        t,
        a,
        c,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && tc.enqueueReplaceState(u, u.state, null), Fn(t, l, u, i), Jn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, g = Tl(a, r);
      u.props = g;
      var w = u.context, q = a.contextType;
      c = Fl, typeof q == "object" && q !== null && (c = mt(q));
      var H = a.getDerivedStateFromProps;
      q = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || w !== c) && vf(
        t,
        u,
        l,
        c
      ), Va = !1;
      var A = t.memoizedState;
      u.state = A, Fn(t, l, u, i), Jn(), w = t.memoizedState, r || A !== w || Va ? (typeof H == "function" && (ec(
        t,
        a,
        H,
        l
      ), w = t.memoizedState), (g = Va || gf(
        t,
        a,
        g,
        l,
        A,
        w,
        c
      )) ? (q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), u.props = l, u.state = w, u.context = c, l = g) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Ds(e, t), c = t.memoizedProps, q = Tl(a, c), u.props = q, H = t.pendingProps, A = u.context, w = a.contextType, g = Fl, typeof w == "object" && w !== null && (g = mt(w)), r = a.getDerivedStateFromProps, (w = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== H || A !== g) && vf(
        t,
        u,
        l,
        g
      ), Va = !1, A = t.memoizedState, u.state = A, Fn(t, l, u, i), Jn();
      var M = t.memoizedState;
      c !== H || A !== M || Va || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof r == "function" && (ec(
        t,
        a,
        r,
        l
      ), M = t.memoizedState), (q = Va || gf(
        t,
        a,
        q,
        l,
        A,
        M,
        g
      ) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (w || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, M, g), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        M,
        g
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = M), u.props = l, u.state = M, u.context = g, l = q) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, ru(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = El(
      t,
      e.child,
      null,
      i
    ), t.child = El(
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
  function Mf(e, t, a, l) {
    return pl(), t.flags |= 256, yt(e, t, a, l), t.child;
  }
  var ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(e) {
    return { baseLanes: e, cachePool: xo() };
  }
  function sc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Bt), e;
  }
  function Of(e, t, a) {
    var l = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0), c && (i = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (De) {
        if (i ? Qa(t) : Za(), (e = Ke) ? (e = Yd(
          e,
          Ft
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ba !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = oo(e), a.return = t, t.child = a, ht = t, Ke = null)) : e = null, e === null) throw La(t);
        return Gc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, i ? (Za(), i = t.mode, r = ou(
        { mode: "hidden", children: r },
        i
      ), l = vl(
        l,
        i,
        a,
        null
      ), r.return = t, l.return = t, r.sibling = l, t.child = r, l = t.child, l.memoizedState = uc(a), l.childLanes = sc(
        e,
        c,
        a
      ), t.memoizedState = ic, ti(null, l)) : (Qa(t), cc(t, r));
    }
    var g = e.memoizedState;
    if (g !== null && (r = g.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Qa(t), t.flags &= -257, t = rc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Za(), t.child = e.child, t.flags |= 128, t = null) : (Za(), r = l.fallback, i = t.mode, l = ou(
          { mode: "visible", children: l.children },
          i
        ), r = vl(
          r,
          i,
          a,
          null
        ), r.flags |= 2, l.return = t, r.return = t, l.sibling = r, t.child = l, El(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = uc(a), l.childLanes = sc(
          e,
          c,
          a
        ), t.memoizedState = ic, t = ti(null, l));
      else if (Qa(t), Gc(r)) {
        if (c = r.nextSibling && r.nextSibling.dataset, c) var w = c.dgst;
        c = w, l = Error(f(419)), l.stack = "", l.digest = c, Gn({ value: l, source: null, stack: null }), t = rc(
          e,
          t,
          a
        );
      } else if (nt || en(e, t, a, !1), c = (a & e.childLanes) !== 0, nt || c) {
        if (c = Xe, c !== null && (l = oe(c, a), l !== 0 && l !== g.retryLane))
          throw g.retryLane = l, gl(e, l), Ct(c, e, l), lc;
        Vc(r) || bu(), t = rc(
          e,
          t,
          a
        );
      } else
        Vc(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Ke = It(
          r.nextSibling
        ), ht = t, De = !0, Ha = null, Ft = !1, e !== null && mo(t, e), t = cc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Za(), r = l.fallback, i = t.mode, g = e.child, w = g.sibling, l = ba(g, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = g.subtreeFlags & 65011712, w !== null ? r = ba(
      w,
      r
    ) : (r = vl(
      r,
      i,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, ti(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = uc(a) : (i = r.cachePool, i !== null ? (g = at._currentValue, i = i.parent !== g ? { parent: g, pool: g } : i) : i = xo(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: i
    }), l.memoizedState = r, l.childLanes = sc(
      e,
      c,
      a
    ), t.memoizedState = ic, ti(e.child, l)) : (Qa(t), a = e.child, e = a.sibling, a = ba(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function cc(e, t) {
    return t = ou(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ou(e, t) {
    return e = Ut(22, e, null, t), e.lanes = 0, e;
  }
  function rc(e, t, a) {
    return El(t, e.child, null, a), e = cc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Uf(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Es(e.return, t, a);
  }
  function oc(e, t, a, l, i, u) {
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
  function Rf(e, t, a) {
    var l = t.pendingProps, i = l.revealOrder, u = l.tail;
    l = l.children;
    var c = Pe.current, r = (c & 2) !== 0;
    if (r ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, K(Pe, c), yt(e, t, l, a), l = De ? Vn : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Uf(e, a, t);
        else if (e.tag === 19)
          Uf(e, a, t);
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
          e = a.alternate, e !== null && Ii(e) === null && (i = a), a = a.sibling;
        a = i, a === null ? (i = t.child, t.child = null) : (i = a.sibling, a.sibling = null), oc(
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
          if (e = i.alternate, e !== null && Ii(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = a, a = i, i = e;
        }
        oc(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        oc(
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
    if (e !== null && (t.dependencies = e.dependencies), Ja |= t.lanes, (a & t.childLanes) === 0)
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
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, a = ba(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ba(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function fc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xi(e)));
  }
  function ly(e, t, a) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), Ya(t, at, e.memoizedState.cache), pl();
        break;
      case 27:
      case 5:
        Me(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ya(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ks(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Qa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Of(e, t, a) : (Qa(t), e = _a(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Qa(t);
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
            return Rf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K(Pe, Pe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, wf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Ya(t, at, e.memoizedState.cache);
    }
    return _a(e, t, a);
  }
  function kf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        nt = !0;
      else {
        if (!fc(e, a) && (t.flags & 128) === 0)
          return nt = !1, ly(
            e,
            t,
            a
          );
        nt = (e.flags & 131072) !== 0;
      }
    else
      nt = !1, De && (t.flags & 1048576) !== 0 && ho(t, Vn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Sl(t.elementType), t.type = e, typeof e == "function")
            gs(e) ? (l = Tl(e, l), t.tag = 1, t = Df(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = nc(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === F) {
                t.tag = 11, t = Ef(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (i === $) {
                t.tag = 14, t = _f(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Ce(e) || e, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return nc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, i = Tl(
          l,
          t.pendingProps
        ), Df(
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
          ), e === null) throw Error(f(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, Ds(e, t), Fn(t, l, null, a);
          var c = t.memoizedState;
          if (l = c.cache, Ya(t, at, l), l !== u.cache && _s(
            t,
            [at],
            a,
            !0
          ), Jn(), l = c.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Mf(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== i) {
              i = Kt(
                Error(f(424)),
                t
              ), Gn(i), t = Mf(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ke = It(e.firstChild), ht = t, De = !0, Ha = null, Ft = !0, a = To(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (pl(), l === i) {
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
        return ru(e, t), e === null ? (a = Kd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : De || (a = t.type, e = t.pendingProps, l = Tu(
          ge.current
        ).createElement(a), l[Ze] = t, l[Nt] = e, gt(l, a, e), rt(l), t.stateNode = l) : t.memoizedState = Kd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Me(t), e === null && De && (l = t.stateNode = Xd(
          t.type,
          t.pendingProps,
          ge.current
        ), ht = t, Ft = !0, i = Ke, el(t.type) ? (Xc = i, Ke = It(l.firstChild)) : Ke = i), yt(
          e,
          t,
          t.pendingProps.children,
          a
        ), ru(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && De && ((i = l = Ke) && (l = Oy(
          l,
          t.type,
          t.pendingProps,
          Ft
        ), l !== null ? (t.stateNode = l, ht = t, Ke = It(l.firstChild), Ft = !1, i = !0) : i = !1), i || La(t)), Me(t), i = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = u.children, Hc(i, u) ? l = null : c !== null && Hc(i, c) && (t.flags |= 32), t.memoizedState !== null && (i = Bs(
          e,
          t,
          $m,
          null,
          null,
          a
        ), gi._currentValue = i), ru(e, t), yt(e, t, l, a), t.child;
      case 6:
        return e === null && De && ((e = a = Ke) && (a = Uy(
          a,
          t.pendingProps,
          Ft
        ), a !== null ? (t.stateNode = a, ht = t, Ke = null, e = !0) : e = !1), e || La(t)), null;
      case 13:
        return Of(e, t, a);
      case 4:
        return Ge(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = El(
          t,
          null,
          l,
          a
        ) : yt(e, t, l, a), t.child;
      case 11:
        return Ef(
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
        return l = t.pendingProps, Ya(t, t.type, l.value), yt(e, t, l.children, a), t.child;
      case 9:
        return i = t.type._context, l = t.pendingProps.children, xl(t), i = mt(i), l = l(i), t.flags |= 1, yt(e, t, l, a), t.child;
      case 14:
        return _f(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Tf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Rf(e, t, a);
      case 31:
        return ay(e, t, a);
      case 22:
        return wf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return xl(t), l = mt(at), e === null ? (i = As(), i === null && (i = Xe, u = Ts(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= a), i = u), t.memoizedState = { parent: l, cache: i }, zs(t), Ya(t, at, i)) : ((e.lanes & a) !== 0 && (Ds(e, t), Fn(t, null, null, a), Jn()), i = e.memoizedState, u = t.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Ya(t, at, l)) : (l = u.cache, Ya(t, at, l), l !== i.cache && _s(
          t,
          [at],
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
    throw Error(f(156, t.tag));
  }
  function Ta(e) {
    e.flags |= 4;
  }
  function dc(e, t, a, l, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rd()) e.flags |= 8192;
        else
          throw Nl = $i, Cs;
    } else e.flags &= -16777217;
  }
  function qf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Id(t))
      if (rd()) e.flags |= 8192;
      else
        throw Nl = $i, Cs;
  }
  function fu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kl() : 536870912, e.lanes |= t, hn |= t);
  }
  function ai(e, t) {
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
  function $e(e) {
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
    switch (xs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return $e(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sa(at), Q(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? Ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ss())), $e(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (Ta(t), u !== null ? ($e(t), qf(t, u)) : ($e(t), dc(
          t,
          i,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (Ta(t), $e(t), qf(t, u)) : ($e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ta(t), $e(t), dc(
          t,
          i,
          e,
          l,
          a
        )), null;
      case 27:
        if (ve(t), a = ge.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return $e(t), null;
          }
          e = I.current, Pl(t) ? yo(t) : (e = Xd(i, l, a), t.stateNode = e, Ta(t));
        }
        return $e(t), null;
      case 5:
        if (ve(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return $e(t), null;
          }
          if (u = I.current, Pl(t))
            yo(t);
          else {
            var c = Tu(
              ge.current
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
            u[Ze] = t, u[Nt] = l;
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
        return $e(t), dc(
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
            throw Error(f(166));
          if (e = ge.current, Pl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, i = ht, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            e[Ze] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Od(e.nodeValue, a)), e || La(t, !0);
          } else
            e = Tu(e).createTextNode(
              l
            ), e[Ze] = t, t.stateNode = e;
        }
        return $e(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Pl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[Ze] = t;
            } else
              pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), e = !1;
          } else
            a = Ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return $e(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Pl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(f(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(f(317));
              i[Ze] = t;
            } else
              pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), i = !1;
          } else
            i = Ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
        }
        return kt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), fu(t, t.updateQueue), $e(t), null);
      case 4:
        return Q(), e === null && Uc(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return Sa(t.type), $e(t), null;
      case 19:
        if (O(Pe), l = t.memoizedState, l === null) return $e(t), null;
        if (i = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (i) ai(l, !1);
          else {
            if (Ie !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Ii(e), u !== null) {
                  for (t.flags |= 128, ai(l, !1), e = u.updateQueue, t.updateQueue = e, fu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    ro(a, e), a = a.sibling;
                  return K(
                    Pe,
                    Pe.current & 1 | 2
                  ), De && xa(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Oe() > gu && (t.flags |= 128, i = !0, ai(l, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Ii(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, fu(t, e), ai(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !De)
                return $e(t), null;
            } else
              2 * Oe() - l.renderingStartTime > gu && a !== 536870912 && (t.flags |= 128, i = !0, ai(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Oe(), e.sibling = null, a = Pe.current, K(
          Pe,
          i ? a & 1 | 2 : a & 1
        ), De && xa(t, l.treeForkCount), e) : ($e(t), null);
      case 22:
      case 23:
        return kt(t), Rs(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), a = t.updateQueue, a !== null && fu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && O(jl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Sa(at), $e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function iy(e, t) {
    switch (xs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sa(at), Q(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ve(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (kt(t), t.alternate === null)
            throw Error(f(340));
          pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return O(Pe), null;
      case 4:
        return Q(), null;
      case 10:
        return Sa(t.type), null;
      case 22:
      case 23:
        return kt(t), Rs(), e !== null && O(jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sa(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bf(e, t) {
    switch (xs(t), t.tag) {
      case 3:
        Sa(at), Q();
        break;
      case 26:
      case 27:
      case 5:
        ve(t);
        break;
      case 4:
        Q();
        break;
      case 31:
        t.memoizedState !== null && kt(t);
        break;
      case 13:
        kt(t);
        break;
      case 19:
        O(Pe);
        break;
      case 10:
        Sa(t.type);
        break;
      case 22:
      case 23:
        kt(t), Rs(), e !== null && O(jl);
        break;
      case 24:
        Sa(at);
    }
  }
  function li(e, t) {
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
  function Ka(e, t, a) {
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
              var g = a, w = r;
              try {
                w();
              } catch (q) {
                He(
                  i,
                  g,
                  q
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (q) {
      He(t, t.return, q);
    }
  }
  function Hf(e) {
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
  function Lf(e, t, a) {
    a.props = Tl(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      He(e, t, l);
    }
  }
  function ni(e, t) {
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
  function Yf(e) {
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
  function hc(e, t, a) {
    try {
      var l = e.stateNode;
      wy(l, e.type, a, t), l[Nt] = t;
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function Vf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && el(e.type) || e.tag === 4;
  }
  function mc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && el(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = va));
    else if (l !== 4 && (l === 27 && el(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (yc(e, t, a), e = e.sibling; e !== null; )
        yc(e, t, a), e = e.sibling;
  }
  function du(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && el(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (du(e, t, a), e = e.sibling; e !== null; )
        du(e, t, a), e = e.sibling;
  }
  function Gf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      gt(t, l, a), t[Ze] = e, t[Nt] = a;
    } catch (u) {
      He(e, e.return, u);
    }
  }
  var wa = !1, it = !1, gc = !1, Xf = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function uy(e, t) {
    if (e = e.containerInfo, qc = Ou, e = eo(e), rs(e)) {
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
            var c = 0, r = -1, g = -1, w = 0, q = 0, H = e, A = null;
            t: for (; ; ) {
              for (var M; H !== a || i !== 0 && H.nodeType !== 3 || (r = c + i), H !== u || l !== 0 && H.nodeType !== 3 || (g = c + l), H.nodeType === 3 && (c += H.nodeValue.length), (M = H.firstChild) !== null; )
                A = H, H = M;
              for (; ; ) {
                if (H === e) break t;
                if (A === a && ++w === i && (r = c), A === u && ++q === l && (g = c), (M = H.nextSibling) !== null) break;
                H = A, A = H.parentNode;
              }
              H = M;
            }
            a = r === -1 || g === -1 ? null : { start: r, end: g };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Bc = { focusedElem: e, selectionRange: a }, Ou = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, u = t.alternate, e = t.flags, t.tag) {
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
                  var ue = Tl(
                    a.type,
                    i
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ue,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  He(
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
                  Yc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Yc(e);
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
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Qf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ca(e, a), l & 4 && li(5, a);
        break;
      case 1:
        if (Ca(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              He(a, a.return, c);
            }
          else {
            var i = Tl(
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
        l & 64 && Hf(a), l & 512 && ni(a, a.return);
        break;
      case 3:
        if (Ca(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
        t === null && l & 4 && Gf(a);
      case 26:
      case 5:
        Ca(e, a), t === null && l & 4 && Yf(a), l & 512 && ni(a, a.return);
        break;
      case 12:
        Ca(e, a);
        break;
      case 31:
        Ca(e, a), l & 4 && $f(e, a);
        break;
      case 13:
        Ca(e, a), l & 4 && Jf(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = yy.bind(
          null,
          a
        ), Ry(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || wa, !l) {
          t = t !== null && t.memoizedState !== null || it, i = wa;
          var u = it;
          wa = l, (it = t) && !u ? za(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ca(e, a), wa = i, it = u;
        }
        break;
      case 30:
        break;
      default:
        Ca(e, a);
    }
  }
  function Zf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, _t = !1;
  function Aa(e, t, a) {
    for (a = a.child; a !== null; )
      Kf(e, t, a), a = a.sibling;
  }
  function Kf(e, t, a) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(ma, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        it || oa(a, t), Aa(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        it || oa(a, t);
        var l = Je, i = _t;
        el(a.type) && (Je = a.stateNode, _t = !1), Aa(
          e,
          t,
          a
        ), hi(a.stateNode), Je = l, _t = i;
        break;
      case 5:
        it || oa(a, t);
      case 6:
        if (l = Je, i = _t, Je = null, Aa(
          e,
          t,
          a
        ), Je = l, _t = i, Je !== null)
          if (_t)
            try {
              (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(a.stateNode);
            } catch (u) {
              He(
                a,
                t,
                u
              );
            }
          else
            try {
              Je.removeChild(a.stateNode);
            } catch (u) {
              He(
                a,
                t,
                u
              );
            }
        break;
      case 18:
        Je !== null && (_t ? (e = Je, Hd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), jn(e)) : Hd(Je, a.stateNode));
        break;
      case 4:
        l = Je, i = _t, Je = a.stateNode.containerInfo, _t = !0, Aa(
          e,
          t,
          a
        ), Je = l, _t = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ka(2, a, t), it || Ka(4, a, t), Aa(
          e,
          t,
          a
        );
        break;
      case 1:
        it || (oa(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Lf(
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
        it = (l = it) || a.memoizedState !== null, Aa(
          e,
          t,
          a
        ), it = l;
        break;
      default:
        Aa(
          e,
          t,
          a
        );
    }
  }
  function $f(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        jn(e);
      } catch (a) {
        He(t, t.return, a);
      }
    }
  }
  function Jf(e, t) {
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
        return t === null && (t = e.stateNode = new Xf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Xf()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function hu(e, t) {
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
              if (el(r.type)) {
                Je = r.stateNode, _t = !1;
                break e;
              }
              break;
            case 5:
              Je = r.stateNode, _t = !1;
              break e;
            case 3:
            case 4:
              Je = r.stateNode.containerInfo, _t = !0;
              break e;
          }
          r = r.return;
        }
        if (Je === null) throw Error(f(160));
        Kf(u, c, i), Je = null, _t = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ff(t, e), t = t.sibling;
  }
  var aa = null;
  function Ff(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), wt(e), l & 4 && (Ka(3, e, e.return), li(3, e), Ka(5, e, e.return));
        break;
      case 1:
        Tt(t, e), wt(e), l & 512 && (it || a === null || oa(a, a.return)), l & 64 && wa && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var i = aa;
        if (Tt(t, e), wt(e), l & 512 && (it || a === null || oa(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (l) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Dn] || u[Ze] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), gt(u, l, a), u[Ze] = e, rt(u), l = u;
                      break e;
                    case "link":
                      var c = Fd(
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
                      if (c = Fd(
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
                      throw Error(f(468, l));
                  }
                  u[Ze] = e, rt(u), l = u;
                }
                e.stateNode = l;
              } else
                Wd(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Jd(
                i,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? Wd(
              i,
              e.type,
              e.stateNode
            ) : Jd(
              i,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && hc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), wt(e), l & 512 && (it || a === null || oa(a, a.return)), a !== null && l & 4 && hc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), wt(e), l & 512 && (it || a === null || oa(a, a.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Gl(i, "");
          } catch (ue) {
            He(e, e.return, ue);
          }
        }
        l & 4 && e.stateNode != null && (i = e.memoizedProps, hc(
          e,
          i,
          a !== null ? a.memoizedProps : i
        )), l & 1024 && (gc = !0);
        break;
      case 6:
        if (Tt(t, e), wt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (ue) {
            He(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (Cu = null, i = aa, aa = wu(t.containerInfo), Tt(t, e), aa = i, wt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            jn(t.containerInfo);
          } catch (ue) {
            He(e, e.return, ue);
          }
        gc && (gc = !1, Wf(e));
        break;
      case 4:
        l = aa, aa = wu(
          e.stateNode.containerInfo
        ), Tt(t, e), wt(e), aa = l;
        break;
      case 12:
        Tt(t, e), wt(e);
        break;
      case 31:
        Tt(t, e), wt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, hu(e, l)));
        break;
      case 13:
        Tt(t, e), wt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yu = Oe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, hu(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var g = a !== null && a.memoizedState !== null, w = wa, q = it;
        if (wa = w || i, it = q || g, Tt(t, e), it = q, wa = w, wt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (a === null || g || wa || it || wl(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                g = a = t;
                try {
                  if (u = g.stateNode, i)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    r = g.stateNode;
                    var H = g.memoizedProps.style, A = H != null && H.hasOwnProperty("display") ? H.display : null;
                    r.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (ue) {
                  He(g, g.return, ue);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = i ? "" : g.memoizedProps;
                } catch (ue) {
                  He(g, g.return, ue);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                g = t;
                try {
                  var M = g.stateNode;
                  i ? Ld(M, !0) : Ld(g.stateNode, !1);
                } catch (ue) {
                  He(g, g.return, ue);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, hu(e, a))));
        break;
      case 19:
        Tt(t, e), wt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, hu(e, l)));
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
          if (Vf(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(f(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode, u = mc(e);
            du(e, u, i);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Gl(c, ""), a.flags &= -33);
            var r = mc(e);
            du(e, r, c);
            break;
          case 3:
          case 4:
            var g = a.stateNode.containerInfo, w = mc(e);
            yc(
              e,
              w,
              g
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (q) {
        He(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Wf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qf(e, t.alternate, t), t = t.sibling;
  }
  function wl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ka(4, t, t.return), wl(t);
          break;
        case 1:
          oa(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Lf(
            t,
            t.return,
            a
          ), wl(t);
          break;
        case 27:
          hi(t.stateNode);
        case 26:
        case 5:
          oa(t, t.return), wl(t);
          break;
        case 22:
          t.memoizedState === null && wl(t);
          break;
        case 30:
          wl(t);
          break;
        default:
          wl(t);
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
          ), li(4, u);
          break;
        case 1:
          if (za(
            i,
            u,
            a
          ), l = u, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (w) {
              He(l, l.return, w);
            }
          if (l = u, i = l.updateQueue, i !== null) {
            var r = l.stateNode;
            try {
              var g = i.shared.hiddenCallbacks;
              if (g !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < g.length; i++)
                  wo(g[i], r);
            } catch (w) {
              He(l, l.return, w);
            }
          }
          a && c & 64 && Hf(u), ni(u, u.return);
          break;
        case 27:
          Gf(u);
        case 26:
        case 5:
          za(
            i,
            u,
            a
          ), a && l === null && c & 4 && Yf(u), ni(u, u.return);
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
          ), a && c & 4 && $f(i, u);
          break;
        case 13:
          za(
            i,
            u,
            a
          ), a && c & 4 && Jf(i, u);
          break;
        case 22:
          u.memoizedState === null && za(
            i,
            u,
            a
          ), ni(u, u.return);
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
  function vc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Xn(a));
  }
  function pc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Xn(e));
  }
  function la(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        If(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function If(e, t, a, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        la(
          e,
          t,
          a,
          l
        ), i & 2048 && li(9, t);
        break;
      case 1:
        la(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        la(
          e,
          t,
          a,
          l
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Xn(e)));
        break;
      case 12:
        if (i & 2048) {
          la(
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
          la(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        la(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        la(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? la(
          e,
          t,
          a,
          l
        ) : ii(e, t) : u._visibility & 2 ? la(
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
        )), i & 2048 && vc(c, t);
        break;
      case 24:
        la(
          e,
          t,
          a,
          l
        ), i & 2048 && pc(t.alternate, t);
        break;
      default:
        la(
          e,
          t,
          a,
          l
        );
    }
  }
  function on(e, t, a, l, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, r = a, g = l, w = c.flags;
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
          ), li(8, c);
          break;
        case 23:
          break;
        case 22:
          var q = c.stateNode;
          c.memoizedState !== null ? q._visibility & 2 ? on(
            u,
            c,
            r,
            g,
            i
          ) : ii(
            u,
            c
          ) : (q._visibility |= 2, on(
            u,
            c,
            r,
            g,
            i
          )), i && w & 2048 && vc(
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
          ), i && w & 2048 && pc(c.alternate, c);
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
  function ii(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, i = l.flags;
        switch (l.tag) {
          case 22:
            ii(a, l), i & 2048 && vc(
              l.alternate,
              l
            );
            break;
          case 24:
            ii(a, l), i & 2048 && pc(l.alternate, l);
            break;
          default:
            ii(a, l);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function fn(e, t, a) {
    if (e.subtreeFlags & ui)
      for (e = e.child; e !== null; )
        Pf(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Pf(e, t, a) {
    switch (e.tag) {
      case 26:
        fn(
          e,
          t,
          a
        ), e.flags & ui && e.memoizedState !== null && Ky(
          a,
          aa,
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
        var l = aa;
        aa = wu(e.stateNode.containerInfo), fn(
          e,
          t,
          a
        ), aa = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ui, ui = 16777216, fn(
          e,
          t,
          a
        ), ui = l) : fn(
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
  function ed(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ot = l, ad(
            l,
            e
          );
        }
      ed(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        td(e), e = e.sibling;
  }
  function td(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        si(e), e.flags & 2048 && Ka(9, e, e.return);
        break;
      case 3:
        si(e);
        break;
      case 12:
        si(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, mu(e)) : si(e);
        break;
      default:
        si(e);
    }
  }
  function mu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ot = l, ad(
            l,
            e
          );
        }
      ed(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ka(8, t, t.return), mu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, mu(t));
          break;
        default:
          mu(t);
      }
      e = e.sibling;
    }
  }
  function ad(e, t) {
    for (; ot !== null; ) {
      var a = ot;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ka(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Xn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ot = l;
      else
        e: for (a = e; ot !== null; ) {
          l = ot;
          var i = l.sibling, u = l.return;
          if (Zf(l), l === a) {
            ot = null;
            break e;
          }
          if (i !== null) {
            i.return = u, ot = i;
            break e;
          }
          ot = u;
        }
    }
  }
  var cy = {
    getCacheForType: function(e) {
      var t = mt(at), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return mt(at).controller.signal;
    }
  }, ry = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, Xe = null, _e = null, we = 0, Be = 0, qt = null, $a = !1, dn = !1, bc = !1, Da = 0, Ie = 0, Ja = 0, Al = 0, xc = 0, Bt = 0, hn = 0, ci = null, At = null, jc = !1, yu = 0, ld = 0, gu = 1 / 0, vu = null, Fa = null, st = 0, Wa = null, mn = null, Ma = 0, Sc = 0, Nc = null, nd = null, ri = 0, Ec = null;
  function Ht() {
    return (qe & 2) !== 0 && we !== 0 ? we & -we : h.T !== null ? zc() : he();
  }
  function id() {
    if (Bt === 0)
      if ((we & 536870912) === 0 || De) {
        var e = Ra;
        Ra <<= 1, (Ra & 3932160) === 0 && (Ra = 262144), Bt = e;
      } else Bt = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), Bt;
  }
  function Ct(e, t, a) {
    (e === Xe && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (yn(e, 0), Ia(
      e,
      we,
      Bt,
      !1
    )), fl(e, a), ((qe & 2) === 0 || e !== Xe) && (e === Xe && ((qe & 2) === 0 && (Al |= a), Ie === 4 && Ia(
      e,
      we,
      Bt,
      !1
    )), fa(e));
  }
  function ud(e, t, a) {
    if ((qe & 6) !== 0) throw Error(f(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ol(e, t), i = l ? dy(e, t) : Tc(e, t, !0), u = l;
    do {
      if (i === 0) {
        dn && !l && Ia(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !oy(a)) {
          i = Tc(e, t, !1), u = !1;
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
              i = ci;
              var g = r.current.memoizedState.isDehydrated;
              if (g && (yn(r, c).flags |= 256), c = Tc(
                r,
                c,
                !1
              ), c !== 2) {
                if (bc && !g) {
                  r.errorRecoveryDisabledLanes |= u, Al |= u, i = 4;
                  break e;
                }
                u = At, At = i, u !== null && (At === null ? At = u : At.push.apply(
                  At,
                  u
                ));
              }
              i = c;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          yn(e, 0), Ia(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = i, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ia(
                l,
                t,
                Bt,
                !$a
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
          if ((t & 62914560) === t && (i = yu + 300 - Oe(), 10 < i)) {
            if (Ia(
              l,
              t,
              Bt,
              !$a
            ), Rl(l, 0, !0) !== 0) break e;
            Ma = t, l.timeoutHandle = qd(
              sd.bind(
                null,
                l,
                a,
                At,
                vu,
                jc,
                t,
                Bt,
                Al,
                hn,
                $a,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          sd(
            l,
            a,
            At,
            vu,
            jc,
            t,
            Bt,
            Al,
            hn,
            $a,
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
  function sd(e, t, a, l, i, u, c, r, g, w, q, H, A, M) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: va
      }, Pf(
        t,
        u,
        H
      );
      var ue = (u & 62914560) === u ? yu - Oe() : (u & 4194048) === u ? ld - Oe() : 0;
      if (ue = $y(
        H,
        ue
      ), ue !== null) {
        Ma = u, e.cancelPendingCommit = ue(
          yd.bind(
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
            q,
            H,
            null,
            A,
            M
          )
        ), Ia(e, u, c, !w);
        return;
      }
    }
    yd(
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
            if (!Ot(u(), i)) return !1;
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
  function Ia(e, t, a, l) {
    t &= ~xc, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - bt(i), c = 1 << u;
      l[u] = -1, i &= ~c;
    }
    a !== 0 && G(e, a, t);
  }
  function pu() {
    return (qe & 6) === 0 ? (oi(0), !1) : !0;
  }
  function _c() {
    if (_e !== null) {
      if (Be === 0)
        var e = _e.return;
      else
        e = _e, ja = bl = null, Ys(e), nn = null, Zn = 0, e = _e;
      for (; e !== null; )
        Bf(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function yn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, zy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ma = 0, _c(), Xe = e, _e = a = ba(e.current, null), we = t, Be = 0, qt = null, $a = !1, dn = ol(e, t), bc = !1, hn = Bt = xc = Al = Ja = Ie = 0, At = ci = null, jc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - bt(l), u = 1 << i;
        t |= e[i], l &= ~u;
      }
    return Da = t, Hi(), a;
  }
  function cd(e, t) {
    je = null, h.H = ei, t === ln || t === Ki ? (t = No(), Be = 3) : t === Cs ? (t = No(), Be = 4) : Be = t === lc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, _e === null && (Ie = 1, su(
      e,
      Kt(t, e.current)
    ));
  }
  function rd() {
    var e = Rt.current;
    return e === null ? !0 : (we & 4194048) === we ? Wt === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === Wt : !1;
  }
  function od() {
    var e = h.H;
    return h.H = ei, e === null ? ei : e;
  }
  function fd() {
    var e = h.A;
    return h.A = cy, e;
  }
  function bu() {
    Ie = 4, $a || (we & 4194048) !== we && Rt.current !== null || (dn = !0), (Ja & 134217727) === 0 && (Al & 134217727) === 0 || Xe === null || Ia(
      Xe,
      we,
      Bt,
      !1
    );
  }
  function Tc(e, t, a) {
    var l = qe;
    qe |= 2;
    var i = od(), u = fd();
    (Xe !== e || we !== t) && (vu = null, yn(e, t)), t = !1;
    var c = Ie;
    e: do
      try {
        if (Be !== 0 && _e !== null) {
          var r = _e, g = qt;
          switch (Be) {
            case 8:
              _c(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var w = Be;
              if (Be = 0, qt = null, gn(e, r, g, w), a && dn) {
                c = 0;
                break e;
              }
              break;
            default:
              w = Be, Be = 0, qt = null, gn(e, r, g, w);
          }
        }
        fy(), c = Ie;
        break;
      } catch (q) {
        cd(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ja = bl = null, qe = l, h.H = i, h.A = u, _e === null && (Xe = null, we = 0, Hi()), c;
  }
  function fy() {
    for (; _e !== null; ) dd(_e);
  }
  function dy(e, t) {
    var a = qe;
    qe |= 2;
    var l = od(), i = fd();
    Xe !== e || we !== t ? (vu = null, gu = Oe() + 500, yn(e, t)) : dn = ol(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && _e !== null) {
          t = _e;
          var u = qt;
          t: switch (Be) {
            case 1:
              Be = 0, qt = null, gn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (jo(u)) {
                Be = 0, qt = null, hd(t);
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
              jo(u) ? (Be = 0, qt = null, hd(t)) : (Be = 0, qt = null, gn(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (_e.tag) {
                case 26:
                  c = _e.memoizedState;
                case 5:
                case 27:
                  var r = _e;
                  if (c ? Id(c) : r.stateNode.complete) {
                    Be = 0, qt = null;
                    var g = r.sibling;
                    if (g !== null) _e = g;
                    else {
                      var w = r.return;
                      w !== null ? (_e = w, xu(w)) : _e = null;
                    }
                    break t;
                  }
              }
              Be = 0, qt = null, gn(e, t, u, 5);
              break;
            case 6:
              Be = 0, qt = null, gn(e, t, u, 6);
              break;
            case 8:
              _c(), Ie = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        hy();
        break;
      } catch (q) {
        cd(e, q);
      }
    while (!0);
    return ja = bl = null, h.H = l, h.A = i, qe = a, _e !== null ? 0 : (Xe = null, we = 0, Hi(), Ie);
  }
  function hy() {
    for (; _e !== null && !sa(); )
      dd(_e);
  }
  function dd(e) {
    var t = kf(e.alternate, e, Da);
    e.memoizedProps = e.pendingProps, t === null ? xu(e) : _e = t;
  }
  function hd(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = zf(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          we
        );
        break;
      case 11:
        t = zf(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          we
        );
        break;
      case 5:
        Ys(t);
      default:
        Bf(a, t), t = _e = ro(t, Da), t = kf(a, t, Da);
    }
    e.memoizedProps = e.pendingProps, t === null ? xu(e) : _e = t;
  }
  function gn(e, t, a, l) {
    ja = bl = null, Ys(t), nn = null, Zn = 0;
    var i = t.return;
    try {
      if (ty(
        e,
        i,
        t,
        a,
        we
      )) {
        Ie = 1, su(
          e,
          Kt(a, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw _e = i, u;
      Ie = 1, su(
        e,
        Kt(a, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (De || l === 1 ? e = !0 : dn || (we & 536870912) !== 0 ? e = !1 : ($a = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Rt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), md(t, e)) : xu(t);
  }
  function xu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        md(
          t,
          $a
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
        _e = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
  }
  function md(e, t) {
    do {
      var a = iy(e.alternate, e);
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
    Ie = 6, _e = null;
  }
  function yd(e, t, a, l, i, u, c, r, g) {
    e.cancelPendingCommit = null;
    do
      ju();
    while (st !== 0);
    if ((qe & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= ms, R(
        e,
        a,
        u,
        c,
        r,
        g
      ), e === Xe && (_e = Xe = null, we = 0), mn = t, Wa = e, Ma = a, Sc = u, Nc = i, nd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vy(Ua, function() {
        return xd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = h.T, h.T = null, i = U.p, U.p = 2, c = qe, qe |= 4;
        try {
          uy(e, t, a);
        } finally {
          qe = c, U.p = i, h.T = l;
        }
      }
      st = 1, gd(), vd(), pd();
    }
  }
  function gd() {
    if (st === 1) {
      st = 0;
      var e = Wa, t = mn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = h.T, h.T = null;
        var l = U.p;
        U.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Ff(t, e);
          var u = Bc, c = eo(e.containerInfo), r = u.focusedElem, g = u.selectionRange;
          if (c !== r && r && r.ownerDocument && Pr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (g !== null && rs(r)) {
              var w = g.start, q = g.end;
              if (q === void 0 && (q = w), "selectionStart" in r)
                r.selectionStart = w, r.selectionEnd = Math.min(
                  q,
                  r.value.length
                );
              else {
                var H = r.ownerDocument || document, A = H && H.defaultView || window;
                if (A.getSelection) {
                  var M = A.getSelection(), ue = r.textContent.length, me = Math.min(g.start, ue), Ve = g.end === void 0 ? me : Math.min(g.end, ue);
                  !M.extend && me > Ve && (c = Ve, Ve = me, me = c);
                  var j = Ir(
                    r,
                    me
                  ), v = Ir(
                    r,
                    Ve
                  );
                  if (j && v && (M.rangeCount !== 1 || M.anchorNode !== j.node || M.anchorOffset !== j.offset || M.focusNode !== v.node || M.focusOffset !== v.offset)) {
                    var T = H.createRange();
                    T.setStart(j.node, j.offset), M.removeAllRanges(), me > Ve ? (M.addRange(T), M.extend(v.node, v.offset)) : (T.setEnd(v.node, v.offset), M.addRange(T));
                  }
                }
              }
            }
            for (H = [], M = r; M = M.parentNode; )
              M.nodeType === 1 && H.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < H.length; r++) {
              var B = H[r];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          Ou = !!qc, Bc = qc = null;
        } finally {
          qe = i, U.p = l, h.T = a;
        }
      }
      e.current = t, st = 2;
    }
  }
  function vd() {
    if (st === 2) {
      st = 0;
      var e = Wa, t = mn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = h.T, h.T = null;
        var l = U.p;
        U.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Qf(e, t.alternate, t);
        } finally {
          qe = i, U.p = l, h.T = a;
        }
      }
      st = 3;
    }
  }
  function pd() {
    if (st === 4 || st === 3) {
      st = 0, Ol();
      var e = Wa, t = mn, a = Ma, l = nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? st = 5 : (st = 0, mn = Wa = null, bd(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Fa = null), Ue(a), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function")
        try {
          dt.onCommitFiberRoot(
            ma,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = h.T, i = U.p, U.p = 2, h.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < l.length; c++) {
            var r = l[c];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          h.T = t, U.p = i;
        }
      }
      (Ma & 3) !== 0 && ju(), fa(e), i = e.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? e === Ec ? ri++ : (ri = 0, Ec = e) : ri = 0, oi(0);
    }
  }
  function bd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Xn(t)));
  }
  function ju() {
    return gd(), vd(), pd(), xd();
  }
  function xd() {
    if (st !== 5) return !1;
    var e = Wa, t = Sc;
    Sc = 0;
    var a = Ue(Ma), l = h.T, i = U.p;
    try {
      U.p = 32 > a ? 32 : a, h.T = null, a = Nc, Nc = null;
      var u = Wa, c = Ma;
      if (st = 0, mn = Wa = null, Ma = 0, (qe & 6) !== 0) throw Error(f(331));
      var r = qe;
      if (qe |= 4, td(u.current), If(
        u,
        u.current,
        c,
        a
      ), qe = r, oi(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function")
        try {
          dt.onPostCommitFiberRoot(ma, u);
        } catch {
        }
      return !0;
    } finally {
      U.p = i, h.T = l, bd(e, t);
    }
  }
  function jd(e, t, a) {
    t = Kt(a, t), t = ac(e.stateNode, t, 2), e = Xa(e, t, 2), e !== null && (fl(e, 2), fa(e));
  }
  function He(e, t, a) {
    if (e.tag === 3)
      jd(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          jd(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Fa === null || !Fa.has(l))) {
            e = Kt(a, e), a = Sf(2), l = Xa(t, a, 2), l !== null && (Nf(
              a,
              l,
              t,
              e
            ), fl(l, 2), fa(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function wc(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ry();
      var i = /* @__PURE__ */ new Set();
      l.set(t, i);
    } else
      i = l.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(t, i));
    i.has(a) || (bc = !0, i.add(a), e = my.bind(null, e, t, a), t.then(e, e));
  }
  function my(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Xe === e && (we & a) === a && (Ie === 4 || Ie === 3 && (we & 62914560) === we && 300 > Oe() - yu ? (qe & 2) === 0 && yn(e, 0) : xc |= a, hn === we && (hn = 0)), fa(e);
  }
  function Sd(e, t) {
    t === 0 && (t = kl()), e = gl(e, t), e !== null && (fl(e, t), fa(e));
  }
  function yy(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Sd(e, a);
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
        throw Error(f(314));
    }
    l !== null && l.delete(t), Sd(e, a);
  }
  function vy(e, t) {
    return ea(e, t);
  }
  var Su = null, vn = null, Ac = !1, Nu = !1, Cc = !1, Pa = 0;
  function fa(e) {
    e !== vn && e.next === null && (vn === null ? Su = vn = e : vn = vn.next = e), Nu = !0, Ac || (Ac = !0, by());
  }
  function oi(e, t) {
    if (!Cc && Nu) {
      Cc = !0;
      do
        for (var a = !1, l = Su; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var c = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - bt(42 | e) + 1) - 1, u &= i & ~(c & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Td(l, u));
          } else
            u = we, u = Rl(
              l,
              l === Xe ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || ol(l, u) || (a = !0, Td(l, u));
          l = l.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function py() {
    Nd();
  }
  function Nd() {
    Nu = Ac = !1;
    var e = 0;
    Pa !== 0 && Cy() && (e = Pa);
    for (var t = Oe(), a = null, l = Su; l !== null; ) {
      var i = l.next, u = Ed(l, t);
      u === 0 ? (l.next = null, a === null ? Su = i : a.next = i, i === null && (vn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (Nu = !0)), l = i;
    }
    st !== 0 && st !== 5 || oi(e), Pa !== 0 && (Pa = 0);
  }
  function Ed(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - bt(u), r = 1 << c, g = i[c];
      g === -1 ? ((r & a) === 0 || (r & l) !== 0) && (i[c] = Cn(r, t)) : g <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Xe, a = we, a = Rl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ft(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ol(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && ft(l), Ue(a)) {
        case 2:
        case 8:
          a = Tn;
          break;
        case 32:
          a = Ua;
          break;
        case 268435456:
          a = An;
          break;
        default:
          a = Ua;
      }
      return l = _d.bind(null, e), a = ea(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && ft(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function _d(e, t) {
    if (st !== 0 && st !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ju() && e.callbackNode !== a)
      return null;
    var l = we;
    return l = Rl(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ud(e, l, t), Ed(e, Oe()), e.callbackNode != null && e.callbackNode === a ? _d.bind(null, e) : null);
  }
  function Td(e, t) {
    if (ju()) return null;
    ud(e, t, !0);
  }
  function by() {
    Dy(function() {
      (qe & 6) !== 0 ? ea(
        Ti,
        py
      ) : Nd();
    });
  }
  function zc() {
    if (Pa === 0) {
      var e = tn;
      e === 0 && (e = ya, ya <<= 1, (ya & 261888) === 0 && (ya = 256)), Pa = e;
    }
    return Pa;
  }
  function wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Di("" + e);
  }
  function Ad(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function xy(e, t, a, l, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var u = wd(
        (i[Nt] || null).action
      ), c = l.submitter;
      c && (t = (t = c[Nt] || null) ? wd(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var r = new Ri(
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
                if (Pa !== 0) {
                  var g = c ? Ad(i, c) : new FormData(i);
                  Fs(
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
                typeof u == "function" && (r.preventDefault(), g = c ? Ad(i, c) : new FormData(i), Fs(
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
  for (var Dc = 0; Dc < hs.length; Dc++) {
    var Mc = hs[Dc], jy = Mc.toLowerCase(), Sy = Mc[0].toUpperCase() + Mc.slice(1);
    ta(
      jy,
      "on" + Sy
    );
  }
  ta(lo, "onAnimationEnd"), ta(no, "onAnimationIteration"), ta(io, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(Bm, "onTransitionRun"), ta(Hm, "onTransitionStart"), ta(Lm, "onTransitionCancel"), ta(uo, "onTransitionEnd"), Yl("onMouseEnter", ["mouseout", "mouseover"]), Yl("onMouseLeave", ["mouseout", "mouseover"]), Yl("onPointerEnter", ["pointerout", "pointerover"]), Yl("onPointerLeave", ["pointerout", "pointerover"]), dl(
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
  var fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ny = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi)
  );
  function Cd(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], i = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = l.length - 1; 0 <= c; c--) {
            var r = l[c], g = r.instance, w = r.currentTarget;
            if (r = r.listener, g !== u && i.isPropagationStopped())
              break e;
            u = r, i.currentTarget = w;
            try {
              u(i);
            } catch (q) {
              Bi(q);
            }
            i.currentTarget = null, u = g;
          }
        else
          for (c = 0; c < l.length; c++) {
            if (r = l[c], g = r.instance, w = r.currentTarget, r = r.listener, g !== u && i.isPropagationStopped())
              break e;
            u = r, i.currentTarget = w;
            try {
              u(i);
            } catch (q) {
              Bi(q);
            }
            i.currentTarget = null, u = g;
          }
      }
    }
  }
  function Te(e, t) {
    var a = t[Qu];
    a === void 0 && (a = t[Qu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (zd(t, e, 2, !1), a.add(l));
  }
  function Oc(e, t, a) {
    var l = 0;
    t && (l |= 4), zd(
      a,
      e,
      l,
      t
    );
  }
  var Eu = "_reactListening" + Math.random().toString(36).slice(2);
  function Uc(e) {
    if (!e[Eu]) {
      e[Eu] = !0, jr.forEach(function(a) {
        a !== "selectionchange" && (Ny.has(a) || Oc(a, !1, e), Oc(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Eu] || (t[Eu] = !0, Oc("selectionchange", !1, t));
    }
  }
  function zd(e, t, a, l) {
    switch (ih(t)) {
      case 2:
        var i = Wy;
        break;
      case 8:
        i = Iy;
        break;
      default:
        i = Jc;
    }
    a = i.bind(
      null,
      t,
      a,
      e
    ), i = void 0, !es || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), l ? i !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, a, !0) : i !== void 0 ? e.addEventListener(t, a, {
      passive: i
    }) : e.addEventListener(t, a, !1);
  }
  function Rc(e, t, a, l, i) {
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
    Or(function() {
      var w = u, q = Iu(a), H = [];
      e: {
        var A = so.get(e);
        if (A !== void 0) {
          var M = Ri, ue = e;
          switch (e) {
            case "keypress":
              if (Oi(a) === 0) break e;
            case "keydown":
            case "keyup":
              M = gm;
              break;
            case "focusin":
              ue = "focus", M = ns;
              break;
            case "focusout":
              ue = "blur", M = ns;
              break;
            case "beforeblur":
            case "afterblur":
              M = ns;
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
              M = kr;
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
            case lo:
            case no:
            case io:
              M = sm;
              break;
            case uo:
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
              M = Br;
              break;
            case "toggle":
            case "beforetoggle":
              M = _m;
          }
          var me = (t & 4) !== 0, Ve = !me && (e === "scroll" || e === "scrollend"), j = me ? A !== null ? A + "Capture" : null : A;
          me = [];
          for (var v = w, T; v !== null; ) {
            var B = v;
            if (T = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || T === null || j === null || (B = On(v, j), B != null && me.push(
              di(v, B, T)
            )), Ve) break;
            v = v.return;
          }
          0 < me.length && (A = new M(
            A,
            ue,
            null,
            a,
            q
          ), H.push({ event: A, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", A && a !== Wu && (ue = a.relatedTarget || a.fromElement) && (Bl(ue) || ue[ql]))
            break e;
          if ((M || A) && (A = q.window === q ? q : (A = q.ownerDocument) ? A.defaultView || A.parentWindow : window, M ? (ue = a.relatedTarget || a.toElement, M = w, ue = ue ? Bl(ue) : null, ue !== null && (Ve = N(ue), me = ue.tag, ue !== Ve || me !== 5 && me !== 27 && me !== 6) && (ue = null)) : (M = null, ue = w), M !== ue)) {
            if (me = kr, B = "onMouseLeave", j = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (me = Br, B = "onPointerLeave", j = "onPointerEnter", v = "pointer"), Ve = M == null ? A : Mn(M), T = ue == null ? A : Mn(ue), A = new me(
              B,
              v + "leave",
              M,
              a,
              q
            ), A.target = Ve, A.relatedTarget = T, B = null, Bl(q) === w && (me = new me(
              j,
              v + "enter",
              ue,
              a,
              q
            ), me.target = T, me.relatedTarget = Ve, B = me), Ve = B, M && ue)
              t: {
                for (me = Ey, j = M, v = ue, T = 0, B = j; B; B = me(B))
                  T++;
                B = 0;
                for (var de = v; de; de = me(de))
                  B++;
                for (; 0 < T - B; )
                  j = me(j), T--;
                for (; 0 < B - T; )
                  v = me(v), B--;
                for (; T--; ) {
                  if (j === v || v !== null && j === v.alternate) {
                    me = j;
                    break t;
                  }
                  j = me(j), v = me(v);
                }
                me = null;
              }
            else me = null;
            M !== null && Dd(
              H,
              A,
              M,
              me,
              !1
            ), ue !== null && Ve !== null && Dd(
              H,
              Ve,
              ue,
              me,
              !0
            );
          }
        }
        e: {
          if (A = w ? Mn(w) : window, M = A.nodeName && A.nodeName.toLowerCase(), M === "select" || M === "input" && A.type === "file")
            var Re = Zr;
          else if (Xr(A))
            if (Kr)
              Re = Rm;
            else {
              Re = Om;
              var ce = Mm;
            }
          else
            M = A.nodeName, !M || M.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? w && Fu(w.elementType) && (Re = Zr) : Re = Um;
          if (Re && (Re = Re(e, w))) {
            Qr(
              H,
              Re,
              a,
              q
            );
            break e;
          }
          ce && ce(e, A, w), e === "focusout" && w && A.type === "number" && w.memoizedProps.value != null && Ju(A, "number", A.value);
        }
        switch (ce = w ? Mn(w) : window, e) {
          case "focusin":
            (Xr(ce) || ce.contentEditable === "true") && (Kl = ce, os = w, Yn = null);
            break;
          case "focusout":
            Yn = os = Kl = null;
            break;
          case "mousedown":
            fs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fs = !1, to(H, a, q);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            to(H, a, q);
        }
        var Se;
        if (us)
          e: {
            switch (e) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          Zl ? Vr(e, a) && (Ae = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (Hr && a.locale !== "ko" && (Zl || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Zl && (Se = Ur()) : (qa = q, ts = "value" in qa ? qa.value : qa.textContent, Zl = !0)), ce = _u(w, Ae), 0 < ce.length && (Ae = new qr(
          Ae,
          e,
          null,
          a,
          q
        ), H.push({ event: Ae, listeners: ce }), Se ? Ae.data = Se : (Se = Gr(a), Se !== null && (Ae.data = Se)))), (Se = wm ? Am(e, a) : Cm(e, a)) && (Ae = _u(w, "onBeforeInput"), 0 < Ae.length && (ce = new qr(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), H.push({
          event: ce,
          listeners: Ae
        }), ce.data = Se)), xy(
          H,
          e,
          w,
          a,
          q
        );
      }
      Cd(H, t);
    });
  }
  function di(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function _u(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = On(e, a), i != null && l.unshift(
        di(e, i, u)
      ), i = On(e, t), i != null && l.push(
        di(e, i, u)
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
  function Dd(e, t, a, l, i) {
    for (var u = t._reactName, c = []; a !== null && a !== l; ) {
      var r = a, g = r.alternate, w = r.stateNode;
      if (r = r.tag, g !== null && g === l) break;
      r !== 5 && r !== 26 && r !== 27 || w === null || (g = w, i ? (w = On(a, u), w != null && c.unshift(
        di(a, w, g)
      )) : i || (w = On(a, u), w != null && c.push(
        di(a, w, g)
      ))), a = a.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var _y = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
  function Md(e) {
    return (typeof e == "string" ? e : "" + e).replace(_y, `
`).replace(Ty, "");
  }
  function Od(e, t) {
    return t = Md(t), Md(e) === t;
  }
  function Ye(e, t, a, l, i, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Gl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Gl(e, "" + l);
        break;
      case "className":
        Ci(e, "class", l);
        break;
      case "tabIndex":
        Ci(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ci(e, a, l);
        break;
      case "style":
        Dr(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Ci(e, "data", l);
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
        l = Di("" + l), e.setAttribute(a, l);
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
        l = Di("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = va);
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
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (i.children != null) throw Error(f(60));
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
        a = Di("" + l), e.setAttributeNS(
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
        Te("beforetoggle", e), Te("toggle", e), Ai(e, "popover", l);
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
  function kc(e, t, a, l, i, u) {
    switch (a) {
      case "style":
        Dr(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (i.children != null) throw Error(f(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Gl(e, l) : (typeof l == "number" || typeof l == "bigint") && Gl(e, "" + l);
        break;
      case "onScroll":
        l != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Te("scrollend", e);
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
        if (!Sr.hasOwnProperty(a))
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
        Te("error", e), Te("load", e);
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
                  throw Error(f(137, t));
                default:
                  Ye(e, t, u, c, a, null);
              }
          }
        i && Ye(e, t, "srcSet", a.srcSet, a, null), l && Ye(e, t, "src", a.src, a, null);
        return;
      case "input":
        Te("invalid", e);
        var r = u = c = i = null, g = null, w = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var q = a[l];
            if (q != null)
              switch (l) {
                case "name":
                  i = q;
                  break;
                case "type":
                  c = q;
                  break;
                case "checked":
                  g = q;
                  break;
                case "defaultChecked":
                  w = q;
                  break;
                case "value":
                  u = q;
                  break;
                case "defaultValue":
                  r = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(f(137, t));
                  break;
                default:
                  Ye(e, t, l, q, a, null);
              }
          }
        wr(
          e,
          u,
          r,
          g,
          w,
          c,
          i,
          !1
        );
        return;
      case "select":
        Te("invalid", e), l = c = u = null;
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
        Te("invalid", e), u = i = l = null;
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
                if (r != null) throw Error(f(91));
                break;
              default:
                Ye(e, t, c, r, a, null);
            }
        Cr(e, l, i, u);
        return;
      case "option":
        for (g in a)
          a.hasOwnProperty(g) && (l = a[g], l != null) && (g === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ye(e, t, g, l, a, null));
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
        for (l = 0; l < fi.length; l++)
          Te(fi[l], e);
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
        for (w in a)
          if (a.hasOwnProperty(w) && (l = a[w], l != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                Ye(e, t, w, l, a, null);
            }
        return;
      default:
        if (Fu(t)) {
          for (q in a)
            a.hasOwnProperty(q) && (l = a[q], l !== void 0 && kc(
              e,
              t,
              q,
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
        var i = null, u = null, c = null, r = null, g = null, w = null, q = null;
        for (M in a) {
          var H = a[M];
          if (a.hasOwnProperty(M) && H != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = H;
              default:
                l.hasOwnProperty(M) || Ye(e, t, M, null, l, H);
            }
        }
        for (var A in l) {
          var M = l[A];
          if (H = a[A], l.hasOwnProperty(A) && (M != null || H != null))
            switch (A) {
              case "type":
                u = M;
                break;
              case "name":
                i = M;
                break;
              case "checked":
                w = M;
                break;
              case "defaultChecked":
                q = M;
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
                  throw Error(f(137, t));
                break;
              default:
                M !== H && Ye(
                  e,
                  t,
                  A,
                  M,
                  l,
                  H
                );
            }
        }
        $u(
          e,
          c,
          r,
          g,
          w,
          q,
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
                if (i != null) throw Error(f(91));
                break;
              default:
                i !== u && Ye(e, t, c, i, l, u);
            }
        Ar(e, A, M);
        return;
      case "option":
        for (var ue in a)
          A = a[ue], a.hasOwnProperty(ue) && A != null && !l.hasOwnProperty(ue) && (ue === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            ue,
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
        for (var me in a)
          A = a[me], a.hasOwnProperty(me) && A != null && !l.hasOwnProperty(me) && Ye(e, t, me, null, l, A);
        for (w in l)
          if (A = l[w], M = a[w], l.hasOwnProperty(w) && A !== M && (A != null || M != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(f(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  w,
                  A,
                  l,
                  M
                );
            }
        return;
      default:
        if (Fu(t)) {
          for (var Ve in a)
            A = a[Ve], a.hasOwnProperty(Ve) && A !== void 0 && !l.hasOwnProperty(Ve) && kc(
              e,
              t,
              Ve,
              void 0,
              l,
              A
            );
          for (q in l)
            A = l[q], M = a[q], !l.hasOwnProperty(q) || A === M || A === void 0 && M === void 0 || kc(
              e,
              t,
              q,
              A,
              l,
              M
            );
          return;
        }
    }
    for (var j in a)
      A = a[j], a.hasOwnProperty(j) && A != null && !l.hasOwnProperty(j) && Ye(e, t, j, null, l, A);
    for (H in l)
      A = l[H], M = a[H], !l.hasOwnProperty(H) || A === M || A == null && M == null || Ye(e, t, H, A, l, M);
  }
  function Ud(e) {
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
  function Ay() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var i = a[l], u = i.transferSize, c = i.initiatorType, r = i.duration;
        if (u && r && Ud(c)) {
          for (c = 0, r = i.responseEnd, l += 1; l < a.length; l++) {
            var g = a[l], w = g.startTime;
            if (w > r) break;
            var q = g.transferSize, H = g.initiatorType;
            q && Ud(H) && (g = g.responseEnd, c += q * (g < r ? 1 : (r - w) / (g - w)));
          }
          if (--l, t += 8 * (u + c) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qc = null, Bc = null;
  function Tu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function kd(e, t) {
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
  function Hc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = null;
  function Cy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Lc ? !1 : (Lc = e, !0) : (Lc = null, !1);
  }
  var qd = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, Bd = typeof Promise == "function" ? Promise : void 0, Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bd < "u" ? function(e) {
    return Bd.resolve(null).then(e).catch(My);
  } : qd;
  function My(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function el(e) {
    return e === "head";
  }
  function Hd(e, t) {
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
          hi(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, hi(a);
          for (var u = a.firstChild; u; ) {
            var c = u.nextSibling, r = u.nodeName;
            u[Dn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = c;
          }
        } else
          a === "body" && hi(e.ownerDocument.body);
      a = i;
    } while (a);
    jn(t);
  }
  function Ld(e, t) {
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
  function Yc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Yc(a), Zu(a);
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
        if (!e[Dn])
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
      if (e = It(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Uy(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = It(e.nextSibling), e === null)) return null;
    return e;
  }
  function Yd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = It(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Gc(e) {
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
  function It(e) {
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
  var Xc = null;
  function Vd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return It(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Gd(e) {
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
  function Xd(e, t, a) {
    switch (t = Tu(a), e) {
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
  function hi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Zu(e);
  }
  var Pt = /* @__PURE__ */ new Map(), Qd = /* @__PURE__ */ new Set();
  function wu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Oa = U.d;
  U.d = {
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
    var e = Oa.f(), t = pu();
    return e || t;
  }
  function qy(e) {
    var t = Hl(e);
    t !== null && t.tag === 5 && t.type === "form" ? cf(t) : Oa.r(e);
  }
  var pn = typeof document > "u" ? null : document;
  function Zd(e, t, a) {
    var l = pn;
    if (l && typeof t == "string" && t) {
      var i = Qt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof a == "string" && (i += '[crossorigin="' + a + '"]'), Qd.has(i) || (Qd.add(i), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(i) === null && (t = l.createElement("link"), gt(t, "link", e), rt(t), l.head.appendChild(t)));
    }
  }
  function By(e) {
    Oa.D(e), Zd("dns-prefetch", e, null);
  }
  function Hy(e, t) {
    Oa.C(e, t), Zd("preconnect", e, t);
  }
  function Ly(e, t, a) {
    Oa.L(e, t, a);
    var l = pn;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + Qt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (i += '[imagesrcset="' + Qt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (i += '[imagesizes="' + Qt(
        a.imageSizes
      ) + '"]')) : i += '[href="' + Qt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = bn(e);
          break;
        case "script":
          u = xn(e);
      }
      Pt.has(u) || (e = z(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Pt.set(u, e), l.querySelector(i) !== null || t === "style" && l.querySelector(mi(u)) || t === "script" && l.querySelector(yi(u)) || (t = l.createElement("link"), gt(t, "link", e), rt(t), l.head.appendChild(t)));
    }
  }
  function Yy(e, t) {
    Oa.m(e, t);
    var a = pn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Qt(l) + '"][href="' + Qt(e) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = xn(e);
      }
      if (!Pt.has(u) && (e = z({ rel: "modulepreload", href: e }, t), Pt.set(u, e), a.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(yi(u)))
              return;
        }
        l = a.createElement("link"), gt(l, "link", e), rt(l), a.head.appendChild(l);
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
          mi(u)
        ))
          r.loading = 5;
        else {
          e = z(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Pt.get(u)) && Qc(e, a);
          var g = c = l.createElement("link");
          rt(g), gt(g, "link", e), g._p = new Promise(function(w, q) {
            g.onload = w, g.onerror = q;
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
      u || (u = a.querySelector(yi(i)), u || (e = z({ src: e, async: !0 }, t), (t = Pt.get(i)) && Zc(e, t), u = a.createElement("script"), rt(u), gt(u, "link", e), a.head.appendChild(u)), u = {
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
      u || (u = a.querySelector(yi(i)), u || (e = z({ src: e, async: !0, type: "module" }, t), (t = Pt.get(i)) && Zc(e, t), u = a.createElement("script"), rt(u), gt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function Kd(e, t, a, l) {
    var i = (i = ge.current) ? wu(i) : null;
    if (!i) throw Error(f(446));
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
            mi(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Pt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Pt.set(e, a), u || Qy(
            i,
            e,
            a,
            c.state
          ))), t && l === null)
            throw Error(f(528, ""));
          return c;
        }
        if (t && l !== null)
          throw Error(f(529, ""));
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
        throw Error(f(444, e));
    }
  }
  function bn(e) {
    return 'href="' + Qt(e) + '"';
  }
  function mi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $d(e) {
    return z({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Qy(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), gt(t, "link", a), rt(t), e.head.appendChild(t));
  }
  function xn(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function yi(e) {
    return "script[async]" + e;
  }
  function Jd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Qt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, rt(l), l;
          var i = z({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), rt(l), gt(l, "style", i), Au(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          i = bn(a.href);
          var u = e.querySelector(
            mi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, rt(u), u;
          l = $d(a), (i = Pt.get(i)) && Qc(l, i), u = (e.ownerDocument || e).createElement("link"), rt(u);
          var c = u;
          return c._p = new Promise(function(r, g) {
            c.onload = r, c.onerror = g;
          }), gt(u, "link", l), t.state.loading |= 4, Au(u, a.precedence, e), t.instance = u;
        case "script":
          return u = xn(a.src), (i = e.querySelector(
            yi(u)
          )) ? (t.instance = i, rt(i), i) : (l = a, (i = Pt.get(u)) && (l = z({}, a), Zc(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), rt(i), gt(i, "link", l), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
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
  function Qc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Zc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Cu = null;
  function Fd(e, t, a) {
    if (Cu === null) {
      var l = /* @__PURE__ */ new Map(), i = Cu = /* @__PURE__ */ new Map();
      i.set(a, l);
    } else
      i = Cu, l = i.get(a), l || (l = /* @__PURE__ */ new Map(), i.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), i = 0; i < a.length; i++) {
      var u = a[i];
      if (!(u[Dn] || u[Ze] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var r = l.get(c);
        r ? r.push(u) : l.set(c, [u]);
      }
    }
    return l;
  }
  function Wd(e, t, a) {
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
  function Id(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Ky(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var i = bn(l.href), u = t.querySelector(
          mi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, rt(u);
          return;
        }
        u = t.ownerDocument || t, l = $d(l), (i = Pt.get(i)) && Qc(l, i), u = u.createElement("link"), rt(u);
        var c = u;
        c._p = new Promise(function(r, g) {
          c.onload = r, c.onerror = g;
        }), gt(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = zu.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Kc = 0;
  function $y(e, t) {
    return e.stylesheets && e.count === 0 && Mu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Mu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Kc === 0 && (Kc = 62500 * Ay());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Mu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Kc ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(i);
      };
    } : null;
  }
  function zu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Mu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Du = null;
  function Mu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Du = /* @__PURE__ */ new Map(), t.forEach(Jy, e), Du = null, zu.call(e));
  }
  function Jy(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Du.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Du.set(e, a);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var c = i[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), l = c);
        }
        l && a.set(null, l);
      }
      i = t.instance, c = i.getAttribute("data-precedence"), u = a.get(c) || l, u === l && a.set(null, i), a.set(c, i), this.count++, l = zu.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var gi = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function Fy(e, t, a, l, i, u, c, r, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zn(0), this.hiddenUpdates = zn(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pd(e, t, a, l, i, u, c, r, g, w, q, H) {
    return e = new Fy(
      e,
      t,
      a,
      c,
      g,
      w,
      q,
      H,
      r
    ), t = 1, u === !0 && (t |= 24), u = Ut(3, null, null, t), e.current = u, u.stateNode = e, t = Ts(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, zs(u), e;
  }
  function eh(e) {
    return e ? (e = Fl, e) : Fl;
  }
  function th(e, t, a, l, i, u) {
    i = eh(i), l.context === null ? l.context = i : l.pendingContext = i, l = Ga(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Xa(e, l, t), a !== null && (Ct(a, e, t), $n(a, e, t));
  }
  function ah(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function $c(e, t) {
    ah(e, t), (e = e.alternate) && ah(e, t);
  }
  function lh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gl(e, 67108864);
      t !== null && Ct(t, e, 67108864), $c(e, 67108864);
    }
  }
  function nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = pe(t);
      var a = gl(e, t);
      a !== null && Ct(a, e, t), $c(e, t);
    }
  }
  var Ou = !0;
  function Wy(e, t, a, l) {
    var i = h.T;
    h.T = null;
    var u = U.p;
    try {
      U.p = 2, Jc(e, t, a, l);
    } finally {
      U.p = u, h.T = i;
    }
  }
  function Iy(e, t, a, l) {
    var i = h.T;
    h.T = null;
    var u = U.p;
    try {
      U.p = 8, Jc(e, t, a, l);
    } finally {
      U.p = u, h.T = i;
    }
  }
  function Jc(e, t, a, l) {
    if (Ou) {
      var i = Fc(l);
      if (i === null)
        Rc(
          e,
          t,
          l,
          Uu,
          a
        ), uh(e, l);
      else if (eg(
        i,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (uh(e, l), t & 4 && -1 < Py.indexOf(e)) {
        for (; i !== null; ) {
          var u = Hl(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Gt(u.pendingLanes);
                  if (c !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var g = 1 << 31 - bt(c);
                      r.entanglements[1] |= g, c &= ~g;
                    }
                    fa(u), (qe & 6) === 0 && (gu = Oe() + 500, oi(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = gl(u, 2), r !== null && Ct(r, u, 2), pu(), $c(u, 2);
            }
          if (u = Fc(l), u === null && Rc(
            e,
            t,
            l,
            Uu,
            a
          ), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else
        Rc(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Fc(e) {
    return e = Iu(e), Wc(e);
  }
  var Uu = null;
  function Wc(e) {
    if (Uu = null, e = Bl(e), e !== null) {
      var t = N(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = D(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Uu = e, null;
  }
  function ih(e) {
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
        switch (cl()) {
          case Ti:
            return 2;
          case Tn:
            return 8;
          case Ua:
          case wn:
            return 32;
          case An:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ic = !1, tl = null, al = null, ll = null, vi = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), nl = [], Py = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tl = null;
        break;
      case "dragenter":
      case "dragleave":
        al = null;
        break;
      case "mouseover":
      case "mouseout":
        ll = null;
        break;
      case "pointerover":
      case "pointerout":
        vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(t.pointerId);
    }
  }
  function bi(e, t, a, l, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Hl(t), t !== null && lh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function eg(e, t, a, l, i) {
    switch (t) {
      case "focusin":
        return tl = bi(
          tl,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "dragenter":
        return al = bi(
          al,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "mouseover":
        return ll = bi(
          ll,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return vi.set(
          u,
          bi(
            vi.get(u) || null,
            e,
            t,
            a,
            l,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, pi.set(
          u,
          bi(
            pi.get(u) || null,
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
  function sh(e) {
    var t = Bl(e.target);
    if (t !== null) {
      var a = N(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = b(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              nh(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = D(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              nh(a);
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
  function Ru(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Fc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Wu = l, a.target.dispatchEvent(l), Wu = null;
      } else
        return t = Hl(a), t !== null && lh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function ch(e, t, a) {
    Ru(e) && a.delete(t);
  }
  function tg() {
    Ic = !1, tl !== null && Ru(tl) && (tl = null), al !== null && Ru(al) && (al = null), ll !== null && Ru(ll) && (ll = null), vi.forEach(ch), pi.forEach(ch);
  }
  function ku(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ic || (Ic = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      tg
    )));
  }
  var qu = null;
  function rh(e) {
    qu !== e && (qu = e, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        qu === e && (qu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], i = e[t + 2];
          if (typeof l != "function") {
            if (Wc(l || a) === null)
              continue;
            break;
          }
          var u = Hl(a);
          u !== null && (e.splice(t, 3), t -= 3, Fs(
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
      return ku(g, e);
    }
    tl !== null && ku(tl, e), al !== null && ku(al, e), ll !== null && ku(ll, e), vi.forEach(t), pi.forEach(t);
    for (var a = 0; a < nl.length; a++) {
      var l = nl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < nl.length && (a = nl[0], a.blockedOn === null); )
      sh(a), a.blockedOn === null && nl.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var i = a[l], u = a[l + 1], c = i[Nt] || null;
        if (typeof u == "function")
          c || rh(a);
        else if (c) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, c = u[Nt] || null)
              r = c.formAction;
            else if (Wc(i) !== null) continue;
          } else r = c.action;
          typeof r == "function" ? a[l + 1] = r : (a.splice(l, 3), l -= 3), rh(a);
        }
      }
  }
  function oh() {
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
  function Pc(e) {
    this._internalRoot = e;
  }
  Bu.prototype.render = Pc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var a = t.current, l = Ht();
    th(a, l, e, t, null, null);
  }, Bu.prototype.unmount = Pc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      th(e.current, 2, null, e, null, null), pu(), t[ql] = null;
    }
  };
  function Bu(e) {
    this._internalRoot = e;
  }
  Bu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = he();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < nl.length && t !== 0 && t < nl[a].priority; a++) ;
      nl.splice(a, 0, e), a === 0 && sh(e);
    }
  };
  var fh = o.version;
  if (fh !== "19.2.8")
    throw Error(
      f(
        527,
        fh,
        "19.2.8"
      )
    );
  U.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = p(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var ag = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: h,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hu.isDisabled && Hu.supportsFiber)
      try {
        ma = Hu.inject(
          ag
        ), dt = Hu;
      } catch {
      }
  }
  return ji.createRoot = function(e, t) {
    if (!_(e)) throw Error(f(299));
    var a = !1, l = "", i = pf, u = bf, c = xf;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Pd(
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
      oh
    ), e[ql] = t.current, Uc(e), new Pc(t);
  }, ji.hydrateRoot = function(e, t, a) {
    if (!_(e)) throw Error(f(299));
    var l = !1, i = "", u = pf, c = bf, r = xf, g = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (i = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (r = a.onRecoverableError), a.formState !== void 0 && (g = a.formState)), t = Pd(
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
      oh
    ), t.context = eh(null), a = t.current, l = Ht(), l = pe(l), i = Ga(l), i.callback = null, Xa(a, i, l), a = l, t.current.lanes = a, fl(t, a), fa(t), e[ql] = t.current, Uc(e), new Bu(t);
  }, ji.version = "19.2.8", ji;
}
var jh;
function dg() {
  if (jh) return ar.exports;
  jh = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return s(), ar.exports = fg(), ar.exports;
}
var hg = dg();
const cr = "hana.plugin.ui", rr = 1, mg = "X-Hana-Plugin-Surface-Session", yg = "pluginSurfaceSession", Mh = {
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
function Sh(s) {
  return typeof s == "object" && s !== null;
}
function ul(s) {
  return {
    ok: !1,
    error: {
      code: Mh.BAD_MESSAGE,
      message: s
    }
  };
}
function Nh(s) {
  if (!Sh(s))
    return ul("Plugin UI messages must be objects.");
  if (s.protocol !== cr)
    return ul("Plugin UI message protocol is missing or invalid.");
  if (s.version !== rr)
    return {
      ok: !1,
      error: {
        code: Mh.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(s.version)}.`
      }
    };
  if (typeof s.kind != "string" || !gg.has(s.kind))
    return ul("Plugin UI message kind is missing or invalid.");
  if (typeof s.type != "string" || s.type.trim() === "")
    return ul("Plugin UI message type must be a non-empty string.");
  const o = s.kind;
  if (o !== "event" && (typeof s.id != "string" || s.id.trim() === ""))
    return ul(`Plugin UI ${o} messages must include a non-empty id.`);
  if (o === "error") {
    if (!Sh(s.error))
      return ul("Plugin UI error messages must include an error object.");
    if (typeof s.error.code != "string" || s.error.code.trim() === "")
      return ul("Plugin UI error code must be a non-empty string.");
    if (typeof s.error.message != "string" || s.error.message.trim() === "")
      return ul("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: s
  };
}
class Eh extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(o) {
    super(o.message), this.code = o.code, this.details = o.details;
  }
}
let _h = 0;
function vg() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (_h += 1, `hana-plugin-${Date.now()}-${_h}`);
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
function xg(s, o) {
  if (o)
    return o;
  const d = new URLSearchParams(s.location.search).get("hana-host-origin");
  return d || (bg(s.document.referrer) ?? "*");
}
function jg(s) {
  const o = new URLSearchParams(s.location.search);
  return {
    theme: o.get("hana-theme") ?? void 0,
    cssUrl: o.get("hana-css") ?? void 0
  };
}
function Th(s, o, d) {
  return !(s.source !== o || d !== "*" && s.origin !== d);
}
function Sg(s) {
  return typeof s == "string" ? { url: s } : s;
}
function Ng(s) {
  return typeof s == "string" ? { text: s } : s;
}
function Oh(s) {
  const o = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(s.location.pathname || "");
  if (!o)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(o[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function Eg(s) {
  if (typeof s != "string" || s.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (s.includes("\\") || s.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(s))
    throw new Error("Invalid plugin asset path.");
  const o = s.replace(/^\/+/, "");
  if (!o || o.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const d = o.split("/");
  if (d.some((f) => !f || f === "." || f === ".." || f.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return d.map((f) => encodeURIComponent(f)).join("/");
}
function _g(s, o) {
  const d = Oh(s), f = Eg(o);
  return `${s.location.origin}/api/plugins/${encodeURIComponent(d)}/assets/${f}`;
}
function Tg(s) {
  return new URLSearchParams(s.location.search).get(yg) || null;
}
function wg(s) {
  if (typeof s != "string" || s.length === 0)
    throw new Error("Invalid plugin API path.");
  const o = s.trim();
  if (!o || o.includes("\\") || o.includes("\0") || o.includes("#") || o.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(o))
    throw new Error("Invalid plugin API path.");
  const d = o.replace(/^\/+/, "");
  if (!d || d.startsWith("./") || d === "api/plugins" || d.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const f = d.indexOf("?"), _ = f >= 0 ? d.slice(0, f) : d;
  if (!_)
    throw new Error("Invalid plugin API path.");
  const N = _.split("/");
  for (const S of N) {
    if (!S)
      throw new Error("Invalid plugin API path.");
    let p;
    try {
      p = decodeURIComponent(S);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (p === "." || p === ".." || p.includes("/") || p.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const b = new URL(`http://hana.local/${d}`);
  return `${N.map((S) => encodeURIComponent(decodeURIComponent(S))).join("/")}${b.search}`;
}
function Uh(s, o) {
  const d = Oh(s), f = wg(o);
  return `${s.location.origin}/api/plugins/${encodeURIComponent(d)}/${f}`;
}
function Ag(s, o, d) {
  const f = Tg(s);
  if (!f)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const _ = s.fetch?.bind(s) ?? globalThis.fetch?.bind(globalThis);
  if (!_)
    throw new Error("hana.api.fetch requires window.fetch.");
  const N = d ?? {}, b = new Headers(N.headers);
  return b.set(mg, f), _(Uh(s, o), {
    ...N,
    headers: b
  });
}
function Cg(s = {}) {
  const o = s.targetWindow ?? pg(), d = s.parentWindow ?? o.parent, f = xg(o, s.targetOrigin), _ = s.requestTimeoutMs ?? 1e4, N = s.idFactory ?? vg;
  let b = jg(o);
  const D = /* @__PURE__ */ new Set();
  function S(x) {
    d.postMessage(x, f);
  }
  function p(x, Y) {
    const V = {
      protocol: cr,
      version: rr,
      kind: "event",
      type: x
    };
    Y !== void 0 && (V.payload = Y), S(V);
  }
  function E(x) {
    if (!Th(x, d, f))
      return;
    const Y = Nh(x.data);
    if (!Y.ok)
      return;
    const V = Y.value;
    if (V.kind !== "event" || V.type !== "hana.theme.changed" || typeof V.payload != "object" || V.payload === null)
      return;
    const se = V.payload;
    b = {
      theme: typeof se.theme == "string" ? se.theme : b.theme,
      cssUrl: typeof se.cssUrl == "string" ? se.cssUrl : b.cssUrl
    };
    for (const W of D)
      W(b);
  }
  function z(x, Y, V = {}) {
    const se = N(), W = V.timeoutMs ?? _;
    return new Promise((te, xe) => {
      const k = () => {
        o.removeEventListener("message", F), o.clearTimeout(le);
      }, F = ($) => {
        if (!Th($, d, f))
          return;
        const L = Nh($.data);
        if (!L.ok)
          return;
        const ne = L.value;
        ne.id !== se || ne.type !== x || (ne.kind === "response" && (k(), te(ne.payload)), ne.kind === "error" && ne.error && (k(), xe(new Eh(ne.error))));
      }, le = o.setTimeout(() => {
        k(), xe(new Eh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${x}.`
        }));
      }, W);
      o.addEventListener("message", F);
      const re = {
        protocol: cr,
        version: rr,
        id: se,
        kind: "request",
        type: x
      };
      Y !== void 0 && (re.payload = Y), S(re);
    });
  }
  return {
    ready(x) {
      p("hana.ready", x);
    },
    assets: {
      url(x) {
        return _g(o, x);
      }
    },
    api: {
      url(x) {
        return Uh(o, x);
      },
      fetch(x, Y) {
        return Ag(o, x, Y);
      }
    },
    ui: {
      resize(x) {
        p(Cl.UI_RESIZE, x);
      }
    },
    theme: {
      getSnapshot() {
        return { ...b };
      },
      subscribe(x) {
        return D.size === 0 && o.addEventListener("message", E), D.add(x), x({ ...b }), () => {
          D.delete(x), D.size === 0 && o.removeEventListener("message", E);
        };
      }
    },
    host: {
      request: z
    },
    toast: {
      show(x, Y) {
        return z(Cl.TOAST_SHOW, x, Y);
      }
    },
    external: {
      open(x, Y) {
        return z(Cl.EXTERNAL_OPEN, Sg(x), Y);
      }
    },
    clipboard: {
      writeText(x, Y) {
        return z(Cl.CLIPBOARD_WRITE_TEXT, Ng(x), Y);
      }
    },
    resources: {
      open(x, Y) {
        return z(Cl.RESOURCE_OPEN, x, Y);
      },
      pick(x = {}, Y) {
        return z(Cl.RESOURCE_PICK, x, Y);
      },
      requestAccess(x, Y) {
        return z(Cl.RESOURCE_REQUEST_ACCESS, x, Y);
      }
    }
  };
}
let wh = null;
function zt() {
  return wh ??= Cg(), wh;
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
    fetch(s, o) {
      return zt().api.fetch(s, o);
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
    request(s, o, d) {
      return zt().host.request(s, o, d);
    }
  },
  toast: {
    show(s, o) {
      return zt().toast.show(s, o);
    }
  },
  external: {
    open(s, o) {
      return zt().external.open(s, o);
    }
  },
  clipboard: {
    writeText(s, o) {
      return zt().clipboard.writeText(s, o);
    }
  },
  resources: {
    open(s, o) {
      return zt().resources.open(s, o);
    },
    pick(s, o) {
      return zt().resources.pick(s, o);
    },
    requestAccess(s, o) {
      return zt().resources.requestAccess(s, o);
    }
  }
};
function sl(...s) {
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
function Dg({ mode: s = "inherit", theme: o, className: d, style: f, children: _, "data-testid": N = "hana-plugin-theme", ...b }) {
  const D = typeof o == "string" ? o : void 0, S = Mg(s, o);
  return n.jsx("div", { ...b, "data-testid": N, className: sl("hana-plugin-theme", d), "data-hana-theme-mode": s, "data-hana-theme": s === "hana" ? D : void 0, style: { ...S, ...f }, children: _ });
}
function Mg(s, o) {
  if (s === "inherit")
    return {};
  const d = Og(s, o), f = {};
  for (const [_, N] of Object.entries(zg)) {
    const b = d?.[_];
    b && (f[N] = b);
  }
  return f;
}
function Og(s, o) {
  if (typeof o == "string")
    return Ah[o];
  if (o)
    return o;
  if (s === "hana")
    return Ah["warm-paper"];
}
C.forwardRef(function({ variant: o = "secondary", size: d = "md", loading: f = !1, iconLeft: _, iconRight: N, disabled: b, className: D, children: S, type: p = "button", ...E }, z) {
  return n.jsxs("button", { ...E, ref: z, type: p, disabled: b || f, className: sl("hana-plugin-button", `hana-plugin-button-${o}`, `hana-plugin-button-${d}`, f && "hana-plugin-button-loading", D), children: [f ? n.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : _, S && n.jsx("span", { className: "hana-plugin-button-label", children: S }), !f && N] });
});
C.forwardRef(function({ label: o, size: d = "md", variant: f = "ghost", className: _, children: N, type: b = "button", ...D }, S) {
  return n.jsx("button", { ...D, ref: S, type: b, "aria-label": o, title: D.title || o, className: sl("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${f}`, _), children: N });
});
C.forwardRef(function({ label: o, hint: d, error: f, id: _, className: N, inputClassName: b, ...D }, S) {
  const p = C.useId(), E = _ || p;
  return n.jsx(Rh, { label: o, hint: d, error: f, htmlFor: E, className: N, children: n.jsx("input", { ...D, ref: S, id: E, "aria-invalid": !!f, className: sl("hana-plugin-input", b) }) });
});
C.forwardRef(function({ label: o, hint: d, error: f, id: _, className: N, textareaClassName: b, rows: D = 4, ...S }, p) {
  const E = C.useId(), z = _ || E;
  return n.jsx(Rh, { label: o, hint: d, error: f, htmlFor: z, className: N, children: n.jsx("textarea", { ...S, ref: p, id: z, rows: D, "aria-invalid": !!f, className: sl("hana-plugin-textarea", b) }) });
});
C.forwardRef(function({ checked: o, onChange: d, label: f, disabled: _, className: N, onClick: b, type: D = "button", ...S }, p) {
  const E = typeof f == "string" ? f : S["aria-label"];
  return n.jsxs("span", { className: sl("hana-plugin-switch-wrap", N), children: [n.jsx("button", { ...S, ref: p, type: D, role: "switch", "aria-checked": o, "aria-label": E, disabled: _, className: sl("hana-plugin-switch", o && "hana-plugin-switch-on"), onClick: (z) => {
    b?.(z), !z.defaultPrevented && !_ && d?.(!o);
  }, children: n.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), f && n.jsx("span", { className: "hana-plugin-switch-label", children: f })] });
});
function Rh({ label: s, hint: o, error: d, htmlFor: f, className: _, children: N }) {
  return n.jsxs("div", { className: sl("hana-plugin-field", _), children: [s && n.jsx("label", { className: "hana-plugin-field-label", htmlFor: f, children: s }), o && n.jsx("div", { className: "hana-plugin-field-hint", children: o }), N, d && n.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const kh = /^\d{4}-\d{2}-\d{2}$/;
function zl(s, o) {
  if (!kh.test(s)) return s;
  const d = /* @__PURE__ */ new Date(`${s}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + o), d.toISOString().slice(0, 10);
}
function gr(s) {
  const o = String(s || "").match(/\d{4}-\d{2}-\d{2}/g) || [];
  return {
    start: o[0] || "",
    end: o[1] || o[0] || ""
  };
}
function or(s) {
  const o = (/* @__PURE__ */ new Date(`${s}T12:00:00Z`)).getUTCDay();
  return o === 0 ? 6 : o - 1;
}
function qh(s, o) {
  return Array.from({ length: o }, (d, f) => zl(s, f));
}
function fr(s, o) {
  const f = gr(s).start || o, _ = zl(f, -or(f));
  return qh(_, 7);
}
function Bh(s, o, d = 3) {
  const f = Math.max(1, Math.floor(d)), _ = Math.max(0, Math.floor(o)), N = s.slice(_ * f, _ * f + f);
  return [...N, ...Array(Math.max(0, f - N.length)).fill(null)];
}
function Ug(s, o) {
  const f = gr(s).start || o, _ = kh.test(f) ? `${f.slice(0, 7)}-01` : o, N = /* @__PURE__ */ new Date(`${_}T12:00:00Z`);
  N.setUTCMonth(N.getUTCMonth() + 1, 1);
  const b = new Date(N);
  b.setUTCDate(b.getUTCDate() - 1);
  const D = b.toISOString().slice(0, 10), S = zl(_, -or(_)), p = 6 - or(D), E = zl(D, p), z = Math.round(((/* @__PURE__ */ new Date(`${E}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${S}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return qh(S, z);
}
function Ni(s) {
  return (s.start_at || s.deadline_at || s.window_start || "").slice(0, 10);
}
function Si(s) {
  if (!s || s.length < 16) return null;
  const o = Number(s.slice(11, 13)), d = Number(s.slice(14, 16));
  return !Number.isFinite(o) || !Number.isFinite(d) ? null : o * 60 + d;
}
function Hh(s) {
  const o = s.map((N) => Si(N.start_at || N.deadline_at)).filter((N) => N !== null), d = s.map((N) => {
    const b = Si(N.end_at);
    if (b !== null) return b;
    const D = Si(N.start_at || N.deadline_at);
    return D === null ? null : D + Number(N.duration || N.estimated_minutes || 45);
  }).filter((N) => N !== null), f = o.length ? Math.floor(Math.min(...o) / 60) - 1 : 10, _ = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, f)),
    endHour: Math.min(24, Math.max(22, _))
  };
}
function Lh(s, o, d, f = 56) {
  const _ = Si(s.start_at || s.deadline_at);
  if (_ === null) return null;
  const b = Si(s.end_at) ?? _ + Number(s.duration || s.estimated_minutes || 45), D = Math.max(o * 60, _), S = Math.min(d * 60, Math.max(b, D + 30));
  return {
    top: (D - o * 60) / 60 * f,
    height: Math.max(30, (S - D) / 60 * f)
  };
}
function vr(s) {
  const o = s.map((N) => {
    const b = N.start_at || N.deadline_at, D = b ? new Date(b).getTime() : Number.NaN, S = N.end_at ? new Date(N.end_at).getTime() : Number.NaN, p = Number.isFinite(S) ? S : D + Number(N.duration || N.estimated_minutes || 45) * 6e4;
    return { item: N, start: D, end: p };
  }).filter((N) => Number.isFinite(N.start)).sort((N, b) => N.start - b.start || N.end - b.end), d = [], f = o.map((N) => {
    let b = d.findIndex((D) => D <= N.start);
    return b < 0 && (b = d.length), d[b] = N.end, { ...N, lane: b };
  }), _ = Math.max(1, d.length);
  return f.map((N) => ({ ...N, laneCount: _ }));
}
function Rg(s, o) {
  return s && typeof s == "object" && "error" in s && typeof s.error == "string" && s.error.trim() ? s.error.trim() : o;
}
async function kg(s) {
  const o = await s.text();
  let d = null;
  if (o.trim())
    try {
      d = JSON.parse(o);
    } catch {
      throw new Error(s.ok ? "插件接口返回了无法识别的数据" : `插件接口请求失败（HTTP ${s.status}）`);
    }
  if (!s.ok)
    throw new Error(Rg(d, `请求失败（HTTP ${s.status}）`));
  if (!d || typeof d != "object")
    throw new Error("插件接口没有返回有效数据");
  return d;
}
async function Qe(s, o) {
  let d;
  try {
    d = await yr.api.fetch(s, o);
  } catch (f) {
    const _ = f instanceof Error ? f.message : String(f || "未知错误");
    throw new Error(`页面会话请求失败：${_}`);
  }
  return kg(d);
}
function dr() {
  let s = 0;
  return {
    begin() {
      return s += 1, s;
    },
    invalidate() {
      s += 1;
    },
    isCurrent(o) {
      return o === s;
    }
  };
}
const Ch = [
  { id: "overview", label: "总览" },
  { id: "planning", label: "筹备" },
  { id: "affairs", label: "事务" }
], hr = {
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
  const o = s;
  if (!o || !Array.isArray(o.items) || !Array.isArray(o.pending) || !Array.isArray(o.courses) || !Array.isArray(o.affairs) || !Array.isArray(o.students) || !Array.isArray(o.warnings))
    throw new Error("总览接口返回的数据结构不完整");
  return o;
}
function Hg(s) {
  const o = s, d = o ? [
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
class Lg extends C.Component {
  state = { error: "" };
  static getDerivedStateFromError(o) {
    return { error: o instanceof Error ? o.message : "页面渲染异常" };
  }
  componentDidCatch(o, d) {
    console.error("[laosu-workbench] render failed", o, d.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ n.jsx("div", { className: "workbench-shell", children: /* @__PURE__ */ n.jsx("main", { className: "main-area", children: /* @__PURE__ */ n.jsxs("div", { className: "notice error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("strong", { children: "课务台页面异常" }),
      /* @__PURE__ */ n.jsx("span", { children: this.state.error }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => window.location.reload(), children: "重新载入" })
    ] }) }) }) : this.props.children;
  }
}
function jt(s, o) {
  return s ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    ...o
  }).format(new Date(s)) : "未定";
}
function Lt(s) {
  return s ? new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date(s)) : "";
}
function Yg(s) {
  return s ? `更新于 ${Lt(s)}` : "尚未更新";
}
function Lu(s) {
  if (!s) return "当前范围";
  const [o, d] = s.split("..");
  if (!o || !d || !/^\d{4}-\d{2}-\d{2}$/.test(o) || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return s;
  const f = (_) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${_}T12:00:00+08:00`));
  return o === d ? f(o) : `${f(o)}—${f(d)}`;
}
function Fe(s) {
  return s.start_at || s.deadline_at || null;
}
function Yh(s) {
  return ["completed", "已完成"].includes(s) ? "finished" : ["cancelled", "已取消", "已调课"].includes(s) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(s) ? "error" : ["pending_confirmation", "待确认", "needs_reschedule"].includes(s) ? "warn" : "active";
}
function pr(s, o) {
  if (!o || s.domain !== "course") return !1;
  const d = (s.start_at || "").slice(0, 10);
  return !!d && d < o && s.status === "待上课";
}
function _n(s, o) {
  if (pr(s, o)) return "state-pending";
  const d = Yh(s.status);
  return d === "finished" ? "state-finished" : d === "muted" ? "state-neutral" : d === "error" ? "state-error" : d === "warn" ? "state-pending" : s.domain === "course" ? "state-confirmed" : "state-pending";
}
function Sn(s) {
  return s.scope === "one_off" || ["reservation", "manual", "move"].includes(s.origin || "");
}
function Nn(s) {
  try {
    const o = window.sessionStorage.getItem(`laosu-workbench.cache.${s}`);
    return o ? JSON.parse(o) : null;
  } catch {
    return null;
  }
}
function Ei(s, o) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${s}`, JSON.stringify(o));
  } catch {
  }
}
function Vg() {
  const s = new URLSearchParams(window.location.search), o = window.localStorage.getItem("laosu-workbench.tab"), d = window.localStorage.getItem("laosu-workbench.scope"), f = s.get("tab") || o || "overview", _ = s.get("scope") || d || "week", N = Ch.map((R) => R.id).includes(f) ? f : "overview", b = ["today", "week", "month", "horizon"].includes(_) ? _ : "week", D = s.get("preview"), [S, p] = C.useState(N), [E, z] = C.useState(b), [x, Y] = C.useState(f === "actions" || !!D), [V, se] = C.useState(null), W = V !== null, [te, xe] = C.useState(null), [k, F] = C.useState(!0), [le, re] = C.useState(""), [$, L] = C.useState(null), [ne, Z] = C.useState(null), [X, ee] = C.useState({ text: "", nonce: 0 }), [Ne, Ce] = C.useState(!1), [ze, h] = C.useState(""), [U, J] = C.useState(null), [y, P] = C.useState({}), [m, O] = C.useState(!1), [K, I] = C.useState(null), [ye, ge] = C.useState(0), [Ee, Ge] = C.useState(null);
  function Q(R, G) {
    G && Ge({ section: G, nonce: Date.now() }), Tn(R);
  }
  const [Me, ve] = C.useState(null), ae = C.useRef(null), Dt = C.useRef(null), tt = C.useRef(dr()), ct = C.useRef(dr()), ia = C.useRef(/* @__PURE__ */ new Set()), ua = C.useRef(null), Vt = C.useRef(!1), ut = C.useRef(!1), ea = C.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), ft = C.useCallback(async (R = E, G = {}) => {
    const ie = G.silent === !0, oe = tt.current.begin();
    ie || (F(!0), re(""));
    try {
      const pe = new URLSearchParams({ scope: R });
      G.fresh && pe.set("fresh", "1");
      const Ue = Bg(await Qe(`api/dashboard?${pe.toString()}`));
      return tt.current.isCurrent(oe) ? (xe(Ue), Ei(`dashboard.${R}`, Ue), !0) : null;
    } catch (pe) {
      return tt.current.isCurrent(oe) ? (ie || re(pe.message || "读取失败"), !1) : null;
    } finally {
      tt.current.isCurrent(oe) && !ie && F(!1);
    }
  }, [E]);
  C.useEffect(() => {
    const R = Nn(`dashboard.${b}`);
    R && (xe(R), F(!1)), ft(b, { fresh: !0, silent: !!R });
  }, []), C.useEffect(() => {
    const R = (G) => {
      G.target instanceof HTMLElement && !ae.current?.contains(G.target) && (ua.current = G.target);
    };
    return window.addEventListener("pointerdown", R, !0), () => window.removeEventListener("pointerdown", R, !0);
  }, []), C.useEffect(() => {
    D && (Y(!0), Qe(`api/preview/${encodeURIComponent(D)}`).then(L).catch((R) => {
      L({ ok: !1, error: R.message });
    }));
  }, [D]), C.useEffect(() => {
    if (!x) return;
    const R = ae.current, G = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Vt.current) {
      const he = new URL(window.location.href);
      he.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", he), Vt.current = !0;
    }
    const ie = window.setTimeout(() => {
      ((ne ? R?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : R?.querySelector(".ai-composer textarea")) || R?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), ne && R?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), oe = () => Array.from(R?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((he) => he.getClientRects().length > 0 && !he.closest("[hidden]")), pe = (he) => {
      if (he.key === "Escape") {
        he.preventDefault(), ya();
        return;
      }
      if (he.key !== "Tab") return;
      const St = oe();
      if (!St.length) return;
      const vt = St[0], Ze = St[St.length - 1];
      R?.contains(document.activeElement) ? he.shiftKey && document.activeElement === vt ? (he.preventDefault(), Ze.focus()) : !he.shiftKey && document.activeElement === Ze && (he.preventDefault(), vt.focus()) : (he.preventDefault(), (he.shiftKey ? Ze : vt).focus());
    }, Ue = () => {
      Vt.current && (Vt.current = !1, Y(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", pe), window.addEventListener("popstate", Ue), () => {
      window.clearTimeout(ie), document.body.style.overflow = G, window.removeEventListener("keydown", pe), window.removeEventListener("popstate", Ue), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [x]), C.useEffect(() => {
    if (!W) return;
    const R = Dt.current, G = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !ut.current) {
      const he = new URL(window.location.href);
      he.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", he), ut.current = !0;
    }
    const ie = window.setTimeout(() => R?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), oe = () => Array.from(R?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((he) => he.getClientRects().length > 0 && !he.closest("[hidden]")), pe = (he) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (he.key === "Escape") {
        he.preventDefault(), Ra();
        return;
      }
      if (he.key !== "Tab") return;
      const St = oe();
      if (!St.length) return;
      const vt = St[0], Ze = St[St.length - 1];
      R?.contains(document.activeElement) ? he.shiftKey && document.activeElement === vt ? (he.preventDefault(), Ze.focus()) : !he.shiftKey && document.activeElement === Ze && (he.preventDefault(), vt.focus()) : (he.preventDefault(), (he.shiftKey ? Ze : vt).focus());
    }, Ue = () => {
      const he = new URL(window.location.href).searchParams.get("drawer");
      he === "context" || he === "actions" || !ut.current || (ut.current = !1, se(null));
    };
    return window.addEventListener("keydown", pe), window.addEventListener("popstate", Ue), () => {
      window.clearTimeout(ie), document.body.style.overflow = G, window.removeEventListener("keydown", pe), window.removeEventListener("popstate", Ue), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [W]), C.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", S);
    const R = () => {
      ea.current[S] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${S}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", R), () => window.removeEventListener("pagehide", R);
  }, [S]), C.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", E);
  }, [E]), C.useEffect(() => {
    if (Me?.tab === S) return;
    const R = ea.current[S] || 0;
    let G = 0, ie, oe = !1;
    const pe = () => {
      oe = !0;
    }, Ue = () => {
      oe || (window.scrollTo({ top: R, behavior: "auto" }), G += 1, Math.abs(window.scrollY - R) > 3 && G < 15 && (ie = window.setTimeout(Ue, 90)));
    }, he = window.requestAnimationFrame(Ue);
    return window.addEventListener("wheel", pe, { passive: !0 }), window.addEventListener("touchstart", pe, { passive: !0 }), window.addEventListener("keydown", pe), () => {
      oe = !0, window.cancelAnimationFrame(he), ie && window.clearTimeout(ie), window.removeEventListener("wheel", pe), window.removeEventListener("touchstart", pe), window.removeEventListener("keydown", pe);
    };
  }, [S]), C.useEffect(() => {
    if (!Me || Me.tab !== S) return;
    let R = 0, G, ie, oe;
    const pe = () => {
      const he = Array.from(document.querySelectorAll("[data-item-id]")).find((St) => St.dataset.itemId === Me.id);
      if (!he && R < 20) {
        R += 1, G = window.setTimeout(pe, 60);
        return;
      }
      if (!he) {
        ve(null);
        return;
      }
      oe = he, he.classList.add("target-highlight"), he.setAttribute("tabindex", "-1"), he.scrollIntoView({ behavior: "smooth", block: "center" }), he.focus({ preventScroll: !0 }), ie = window.setTimeout(() => {
        he.classList.remove("target-highlight"), he.removeAttribute("tabindex"), ve(null);
      }, 2400);
    }, Ue = window.setTimeout(pe, 50);
    return () => {
      window.clearTimeout(Ue), G && window.clearTimeout(G), ie && window.clearTimeout(ie), oe?.classList.remove("target-highlight"), oe?.removeAttribute("tabindex");
    };
  }, [Me, S, te?.observedAt]), C.useEffect(() => {
    if (!ze) return;
    const R = window.setTimeout(() => h(""), 4800);
    return () => window.clearTimeout(R);
  }, [ze]);
  const sa = C.useRef(null);
  C.useEffect(() => {
    const R = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const G = await Qe("api/data-revision");
          if (!G?.ok || typeof G.revision != "number") return;
          if (sa.current === null) {
            sa.current = G.revision;
            return;
          }
          G.revision !== sa.current && (sa.current = G.revision, Gt({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(R);
  }, [E]);
  const Ol = C.useMemo(
    () => (te?.pending ?? []).filter((R) => !["completed", "cancelled"].includes(R.status)),
    [te]
  ), Oe = C.useMemo(() => {
    const R = Date.now();
    return (te?.items ?? []).filter((G) => Fe(G) && new Date(Fe(G)).getTime() >= R && !["completed", "cancelled", "已完成", "已取消"].includes(G.status)).sort((G, ie) => new Date(Fe(G)).getTime() - new Date(Fe(ie)).getTime())[0] ?? null;
  }, [te]);
  async function cl(R) {
    const G = new URL(window.location.href);
    G.searchParams.set("scope", R), window.history.replaceState(window.history.state, "", G), z(R);
    const ie = Nn(`dashboard.${R}`);
    if (ie) {
      xe(ie), F(!1), ft(R, { fresh: !0, silent: !0 });
      return;
    }
    await ft(R);
  }
  function Ti(R = S) {
    ea.current[R] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${R}`, String(window.scrollY));
  }
  function Tn(R, G) {
    Ti();
    const ie = new URL(window.location.href);
    ie.searchParams.set("tab", R), window.history.replaceState(window.history.state, "", ie), ve(null), p(R);
  }
  function Ua(R) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const G = document.activeElement;
    ((G instanceof HTMLElement && G !== document.body && !ae.current?.contains(G) ? G : null) || R || ua.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function wn(R) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const G = document.activeElement, ie = G instanceof HTMLElement && G !== document.body && !Dt.current?.contains(G) ? G : null;
    (R || ie || ua.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function An(R, G) {
    wn(G), se({ kind: "item", item: R });
  }
  function wi(R, G, ie) {
    wn(G), se({ kind: "day", date: R, items: ie });
  }
  function Gu(R) {
    wn(R), se({ kind: "system" });
  }
  function ma() {
    const R = /* @__PURE__ */ Symbol("workbench-operation");
    return ia.current.add(R), Ce(!0), R;
  }
  function dt(R) {
    ia.current.delete(R), Ce(ia.current.size > 0);
  }
  function Mt() {
    ct.current.invalidate(), L(null);
  }
  function bt(R) {
    ct.current.invalidate(), L(R);
  }
  function Xu() {
    Ua(document.querySelector(".ai-action-button")), Z(null), ee({ text: "", nonce: Date.now() }), Mt(), Y(!0);
  }
  function Ul(R) {
    Ua(), Z(null), ee({ text: R, nonce: Date.now() }), Mt(), Y(!0);
  }
  function rl(R) {
    Ua(), Z(R), Mt(), Y(!0);
  }
  function ya() {
    if (Vt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    Vt.current = !1, Y(!1);
  }
  function Ra() {
    if (ut.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    ut.current = !1, se(null);
  }
  async function ka(R, G) {
    if (!U) {
      J(G.id);
      try {
        const ie = R === "courseCancel" ? await Qe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: G.title, date: G.start_at?.slice(0, 10), time: G.start_at?.slice(11, 16), reason: "没上" })
        }) : await Qe("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: G.id, expectedVersion: G.version })
        });
        if (!ie.ok) throw new Error(ie.error || "处理未完成");
        R === "affairComplete" ? (P((oe) => ({ ...oe, [G.id]: { ok: !0, text: ie.message || "已完成", buttonLabel: "已完成" } })), h(`${G.title} 已完成`)) : h(`${G.title} ${G.start_at?.slice(5, 16) ?? ""} 已记录没上`), await ft(E);
      } catch (ie) {
        R === "affairComplete" && P((oe) => ({ ...oe, [G.id]: { ok: !1, text: `处理失败：${ie.message || "未知错误"}` } })), h(`处理失败：${ie.message || "未知错误"}`);
      } finally {
        J(null);
      }
    }
  }
  async function Gt(R = {}) {
    const G = R.silent === !0;
    G || h("正在刷新数据…");
    const ie = await ft(E, { ...R, fresh: !G });
    ie === !0 ? (P({}), I(null), ge((oe) => oe + 1), G || h("课表、筹备、驾驶舱和事务数据已全部刷新")) : ie === !1 && !G && h("刷新失败，请查看页面错误");
  }
  async function Rl(R) {
    const G = ct.current.begin(), ie = ma();
    L(null);
    try {
      const oe = await Qe("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(R)
      });
      if (!ct.current.isCurrent(G)) return;
      L({ ...oe, operation: String(R.operation || ""), input: R });
    } catch (oe) {
      ct.current.isCurrent(G) && L({ ok: !1, error: oe.message });
    } finally {
      dt(ie);
    }
  }
  async function ol(R) {
    if (!m) {
      O(!0), I({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const G = await Qe("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: R })
        });
        if (!G.ok) throw new Error(G.error || "全部上完的处理未完成");
        I({ ok: !0, text: G.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await ft(E);
      } catch (G) {
        const ie = G.message || "全部上完的处理失败";
        I({ ok: !1, text: `处理失败：${ie}`, buttonLabel: "重试全部上完" });
      } finally {
        O(!1);
      }
    }
  }
  async function Cn(R) {
    if (!U) {
      J(R.id), P((G) => ({ ...G, [R.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const G = await Qe("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: R.id, expectedVersion: R.version })
        });
        if (!G.ok) throw new Error(G.error || "没约上的处理未完成");
        const ie = G.outcome?.candidateDate, oe = ie ? `已安排 ${ie.slice(5)}` : "已处理";
        P((pe) => ({ ...pe, [R.id]: {
          ok: !0,
          text: G.message || "已推进到下一次尝试",
          buttonLabel: oe,
          undo: G.outcome ? { expectedVersion: G.outcome.version } : void 0
        } })), await ft(E);
      } catch (G) {
        const ie = G.message || "没约上的处理失败";
        P((oe) => ({ ...oe, [R.id]: { ok: !1, text: `处理失败：${ie}`, buttonLabel: "重试" } }));
      } finally {
        J(null);
      }
    }
  }
  async function kl(R) {
    if (U) return;
    const G = y[R.id]?.undo;
    J(R.id), P((ie) => ({ ...ie, [R.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const ie = await Qe("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: R.id, expectedVersion: G?.expectedVersion ?? R.version })
      });
      if (!ie.ok) throw new Error(ie.error || "恢复上一候选日未完成");
      const oe = ie.outcome?.candidateDate;
      P((pe) => ({ ...pe, [R.id]: {
        ok: !0,
        text: ie.message || "已恢复到上一候选日",
        buttonLabel: oe ? `回到 ${oe.slice(5)}` : "已恢复"
      } })), await ft(E);
    } catch (ie) {
      const oe = ie.message || "恢复上一候选日失败";
      P((pe) => ({ ...pe, [R.id]: { ok: !1, text: `恢复失败：${oe}`, buttonLabel: "重试" } }));
    } finally {
      J(null);
    }
  }
  async function zn() {
    if (!$?.token || !$.canCommit) return;
    const R = ct.current.begin(), G = ma(), ie = $.operation || ne?.operation;
    try {
      const oe = await Qe("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: $.token })
      }), pe = { ok: oe.ok, summary: oe.summary, message: `${oe.message || ""}${oe.exportMessage ? `
导出：${oe.exportMessage}` : ""}${oe.syncMessage ? `
日历：${oe.syncMessage}` : ""}`, result: oe, operation: ie, input: $.input, committed: !!oe.ok };
      await ft(E), ge((Ue) => Ue + 1), ct.current.isCurrent(R) && L(pe);
    } catch (oe) {
      ct.current.isCurrent(R) && L({ ok: !1, error: oe.message });
    } finally {
      dt(G);
    }
  }
  async function fl() {
    const R = $?.batchItems ?? [];
    if (!R.length) return;
    const G = ct.current.begin(), ie = ma(), oe = /* @__PURE__ */ new Map();
    try {
      for (const pe of R) {
        if (!pe.canCommit) {
          oe.set(pe.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const Ue = await Qe("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: pe.token })
          });
          if (oe.set(pe.token, { ok: !!Ue.ok, message: Ue.message || (Ue.ok ? "已执行" : "执行失败") }), !Ue.ok) break;
        } catch (Ue) {
          oe.set(pe.token, { ok: !1, message: Ue.message || "提交失败" });
          break;
        }
      }
      await ft(E), ge((pe) => pe + 1), ct.current.isCurrent(G) && $ && L({
        ...$,
        ok: R.every((pe) => oe.get(pe.token)?.ok === !0),
        committed: !0,
        message: R.map((pe) => {
          const Ue = oe.get(pe.token);
          return `${Ue?.ok ? "✓" : Ue ? "✗" : "·"} ${pe.summary}：${Ue?.message || "未执行"}`;
        }).join(`
`),
        batchItems: R.map((pe) => {
          const Ue = oe.get(pe.token);
          return { ...pe, canCommit: !1, resultOk: Ue?.ok ?? !1, message: Ue?.message || "未执行" };
        })
      });
    } finally {
      dt(ie);
    }
  }
  return /* @__PURE__ */ n.jsx(Dg, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ n.jsxs("div", { className: "workbench-shell", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "topbar", children: [
      /* @__PURE__ */ n.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", children: Ch.map((R) => /* @__PURE__ */ n.jsx("button", { type: "button", className: S === R.id ? "tab active" : "tab", onClick: () => Tn(R.id), children: R.label }, R.id)) }),
      /* @__PURE__ */ n.jsxs("div", { className: "top-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: x ? "ai-action-button active" : "ai-action-button", onClick: Xu, "aria-expanded": x, children: "✦ AI 操作" }),
        /* @__PURE__ */ n.jsx("span", { className: "updated-at", children: Yg(te?.observedAt) }),
        /* @__PURE__ */ n.jsxs("button", { type: "button", className: `${te?.health?.ok ? "health good" : "health bad"} health-button${V?.kind === "system" ? " active" : ""}`, onClick: (R) => Gu(R.currentTarget), "aria-expanded": V?.kind === "system", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          te?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "icon-button", onClick: () => {
          Gt();
        }, "aria-label": "刷新", disabled: k, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("main", { className: "main-area", children: [
      ze && /* @__PURE__ */ n.jsx("div", { className: "toast", role: "status", children: ze }),
      le && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "读取失败", text: le }),
      te?.warnings?.length ? /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: "有警告", text: te.warnings.join("；") }) : null,
      k && !te ? /* @__PURE__ */ n.jsx(br, {}) : null,
      te && S !== "planning" && S !== "affairs" && /* @__PURE__ */ n.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": k, children: [
        /* @__PURE__ */ n.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ n.jsx("span", { children: k ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ n.jsx("strong", { children: Lu(te.range) })
        ] }),
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "时间范围切换",
            busy: k,
            value: E,
            onChange: (R) => {
              cl(R);
            },
            items: Object.keys(hr).map((R) => ({ id: R, label: hr[R] }))
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: k && te ? "view-content scope-loading" : "view-content", "aria-busy": k && !!te, inert: k && !!te, children: [
        te && S === "overview" && /* @__PURE__ */ n.jsx(Gg, { dashboard: te, pending: Ol, upcoming: Oe, onInspect: An, onOpenDay: wi, onPrepare: rl, onRetry: Cn, onRetryPrev: kl, retryingId: U, affairFeedback: y, onDayComplete: ol, dayBusy: m, dayFeedback: K, onNavigate: Q, onQuick: ka, onAskAi: Ul, onDataChanged: Gt }),
        S === "planning" && /* @__PURE__ */ n.jsx(Jg, { onAction: rl, onAskAi: Ul, refreshKey: ye, sectionHint: Ee, scheduleText: te?.scheduleText, onDataChanged: Gt }),
        S === "affairs" && /* @__PURE__ */ n.jsx(Pg, { onQuick: ka, onAskAi: Ul, onPrepare: rl, onInspect: An, onRetry: Cn, onRetryPrev: kl, retryingId: U, feedback: y, refreshKey: ye, observedAt: te?.observedAt ?? "", onOpenDay: (R, G, ie) => wi(R, ie, G), localDate: te?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "context-drawer-backdrop", hidden: !W, onMouseDown: (R) => {
      R.currentTarget === R.target && Ra();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: Dt, className: "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ n.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "context-back", onClick: Ra, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: V?.kind === "system" ? "运行状态" : V?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ n.jsx("h2", { children: V?.kind === "system" ? "系统状态" : V?.kind === "day" ? jt(`${V.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : V?.item.title }),
          /* @__PURE__ */ n.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "context-drawer-body", children: V && te && /* @__PURE__ */ n.jsx(
        nv,
        {
          view: V,
          dashboard: te,
          onQuick: ka,
          onAskAi: Ul,
          onPrepare: rl,
          onRetry: Cn,
          onRetryPrev: kl,
          retryingId: U,
          affairFeedback: y,
          onSync: () => rl({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: "action-drawer-backdrop", hidden: !x, onMouseDown: (R) => {
      R.currentTarget === R.target && ya();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: ae, className: "action-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
      /* @__PURE__ */ n.jsxs("header", { className: "action-drawer-head", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "context-back", onClick: ya, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "AI 操作" }),
          /* @__PURE__ */ n.jsx("h2", { children: "说一句，先预演再提交。" }),
          /* @__PURE__ */ n.jsx("span", { children: "返回后仍留在原页面，执行结果会即时回读。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "action-drawer-body", children: /* @__PURE__ */ n.jsx(
        ev,
        {
          pending: Ol,
          students: te?.students ?? [],
          preset: ne,
          aiDraft: X,
          preview: $,
          busy: Ne,
          onPreview: Rl,
          onAiPreview: bt,
          onCommit: zn,
          onCommitBatch: fl,
          onClear: Mt,
          onClose: ya
        }
      ) })
    ] }) })
  ] }) });
}
function Gg({ dashboard: s, pending: o, upcoming: d, onInspect: f, onOpenDay: _, onPrepare: N, onQuick: b, onAskAi: D, onRetry: S, onRetryPrev: p, retryingId: E, affairFeedback: z, onDayComplete: x, dayBusy: Y, dayFeedback: V, onNavigate: se, onDataChanged: W }) {
  const te = C.useMemo(() => {
    const Z = /* @__PURE__ */ new Map();
    return s.items.forEach((X) => Z.set(X.id, X)), s.affairs.forEach((X) => Z.set(X.id, { ...X, domain: "affair" })), s.courses.forEach((X) => Z.set(X.id, { ...X, domain: "course" })), Array.from(Z.values()).sort((X, ee) => String(Fe(X) || "").localeCompare(String(Fe(ee) || "")));
  }, [s.items, s.affairs, s.courses]), xe = C.useMemo(() => {
    const Z = /* @__PURE__ */ new Map();
    return te.forEach((X) => {
      const ee = Fe(X)?.slice(0, 10) || "未定日期";
      Z.set(ee, [...Z.get(ee) || [], X]);
    }), Array.from(Z.entries()).sort(([X], [ee]) => X.localeCompare(ee));
  }, [te]), k = s.courses.filter((Z) => Z.start_at?.slice(0, 10) === s.localDate && Z.status !== "已取消"), F = k.filter((Z) => Z.status === "待上课"), le = k.map((Z) => Z.end_at).filter(Boolean).sort().at(-1) || null, re = !!(le && Date.now() >= new Date(le).getTime()), $ = Y ? "处理中…" : V?.buttonLabel || (F.length ? "全部上完" : "已全部记录"), L = Y || !!V?.ok || !F.length || !re, ne = {
    today: "把今天安排清楚。",
    week: "把今天和这周，放在一张桌面上。",
    month: "把这个月的课程和事务放在一张桌面上。",
    horizon: "把未来安排放在一张桌面上。"
  }[s.scope];
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(
      En,
      {
        eyebrow: `${s.localDate} · ${hr[s.scope]}`,
        title: ne,
        description: "数据来自排课与事务系统实时回读。"
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: o.length ? "overview-duo" : "overview-duo pending-empty", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel pending-action-panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "待处理", meta: `${o.length} 项` }),
        o.length ? o.slice(0, 4).map((Z) => /* @__PURE__ */ n.jsx(fv, { item: Z, onInspect: f, onPrepare: N, onQuick: b, onAskAi: D, onRetry: S, onRetryPrev: p, retryingId: E, feedback: z[Z.id] }, Z.id)) : /* @__PURE__ */ n.jsx(ha, { title: "没有待处理事务", text: "当前队列是干净的。", compact: !0 })
      ] }),
      /* @__PURE__ */ n.jsx(Xg, { observedAt: s.observedAt, onPrepare: N, onOpenDay: _, onNavigate: se, onRetry: S, onDataChanged: W })
    ] }),
    /* @__PURE__ */ n.jsx(rv, { course: s.nextCourse || null, advice: s.commuteAdvice || null, onOpen: (Z) => s.nextCourse && f(s.nextCourse, Z), onPrepare: N, onQuick: b, onAskAi: D }),
    s.scope === "today" && k.length > 0 && /* @__PURE__ */ n.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ n.jsx("strong", { children: F.length ? `还有 ${F.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ n.jsx("span", { children: F.length && !re ? `最后一节 ${Lt(le)} 结束后可操作` : "提交后会写入本地课表并同步日历" }),
        V && /* @__PURE__ */ n.jsx(Ml, { ok: V.ok, text: V.text })
      ] }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: L,
          onClick: () => {
            x(s.localDate);
          },
          children: $
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "metrics-grid", children: [
      /* @__PURE__ */ n.jsx(da, { label: "课程", value: s.courses.length, hint: Lu(s.range), tone: "sage" }),
      /* @__PURE__ */ n.jsx(da, { label: "待办", value: o.length, hint: o[0]?.title || "没有积压", tone: "amber" }),
      /* @__PURE__ */ n.jsx(da, { label: "下一项", value: d ? Lt(Fe(d)) || "待定" : "无", hint: d?.title || "当前范围内已清空", tone: "blue" }),
      /* @__PURE__ */ n.jsx(da, { label: "系统", value: s.health?.ok ? "正常" : "异常", hint: `活动事务 ${s.health?.database?.verification?.counts?.active ?? "—"}`, tone: "ink" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: s.scope === "week" || s.scope === "month" ? "panel wide calendar-panel" : "panel wide", children: [
      /* @__PURE__ */ n.jsx(
        Yt,
        {
          title: s.scope === "week" ? "周视图" : s.scope === "month" ? "月视图" : "时间轴",
          meta: Lu(s.range)
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
      s.scope === "week" ? /* @__PURE__ */ n.jsx(Kg, { items: te, range: s.range, localDate: s.localDate, onInspect: f, onPrepare: N, onQuick: b, onAskAi: D, onRetry: S, retryingId: E, affairFeedback: z }) : s.scope === "month" ? /* @__PURE__ */ n.jsx(Qh, { items: te, range: s.range, localDate: s.localDate, onOpenDay: _ }) : xe.length ? xe.map(([Z, X]) => /* @__PURE__ */ n.jsxs("div", { className: "day-group", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "day-label", children: [
          /* @__PURE__ */ n.jsx("strong", { children: Z === "未定日期" ? Z : jt(`${Z}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            X.length,
            " 项"
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-list", children: X.map((ee) => /* @__PURE__ */ n.jsx(ov, { item: ee, onInspect: f, onPrepare: N, onQuick: b, onAskAi: D, onRetry: S, retryingId: E, feedback: z[ee.id] }, ee.id)) })
      ] }, Z)) : /* @__PURE__ */ n.jsx(ha, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
    ] })
  ] });
}
function Xg({ observedAt: s, onPrepare: o, onOpenDay: d, onNavigate: f, onRetry: _, onDataChanged: N }) {
  const [b, D] = C.useState(() => Nn("suggestions")), [S, p] = C.useState(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem("laosu-workbench.suggestions.dismissed") || "[]");
    } catch {
      return [];
    }
  }), E = C.useCallback((k) => {
    Qe(`api/suggestions${k ? "?fresh=1" : ""}`).then((F) => {
      F?.cards && (D(F), Ei("suggestions", F));
    }).catch(() => {
    });
  }, []);
  C.useEffect(() => {
    E(!0);
  }, [E]), C.useEffect(() => {
    s && E(!1);
  }, [s, E]);
  function z(k) {
    p((F) => {
      const le = F.includes(k) ? F : [...F, k];
      try {
        window.sessionStorage.setItem("laosu-workbench.suggestions.dismissed", JSON.stringify(le));
      } catch {
      }
      return le;
    });
  }
  const [x, Y] = C.useState(null), [V, se] = C.useState({});
  async function W(k, F) {
    if (x) return;
    const le = k.id;
    Y(le), se((re) => ({ ...re, [le]: { ok: !0, text: "正在处理…" } }));
    try {
      let re;
      if (k.action.kind === "overdue" && F === "done")
        re = await Qe("api/courses/overdue-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: k.action.student, date: k.action.date })
        });
      else if (k.action.kind === "overdue")
        re = await Qe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: k.action.student, date: k.action.date, time: k.action.time, reason: "没上" })
        });
      else if (k.action.operation === "calendar_sync")
        re = await Qe("api/calendar/sync-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(k.action.input ?? {})
        });
      else if (k.action.operation === "quarantine_overdue")
        re = await Qe("api/courses/quarantine-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      else
        throw new Error("该建议不支持一键执行");
      if (!re.ok) throw new Error(re.error || "处理未完成");
      se(($) => ({ ...$, [le]: { ok: !0, text: re.message || "已处理" } })), z(le), E(!0), N?.({ silent: !0 });
    } catch (re) {
      se(($) => ({ ...$, [le]: { ok: !1, text: `处理失败：${re.message || "未知错误"}` } }));
    } finally {
      Y(null);
    }
  }
  async function te(k) {
    if (x) return;
    const F = k.id;
    Y(F), se((le) => ({ ...le, [F]: { ok: !0, text: "正在补齐…" } }));
    try {
      const le = await Qe("api/affairs/backfill-end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: k.action.ids ?? [] })
      });
      if (!le.ok) throw new Error(le.error || "补齐未完成");
      se((re) => ({ ...re, [F]: { ok: !0, text: le.message || "已补齐" } })), z(F), E(!0), N?.({ silent: !0 });
    } catch (le) {
      se((re) => ({ ...re, [F]: { ok: !1, text: `补齐失败：${le.message || "未知错误"}` } }));
    } finally {
      Y(null);
    }
  }
  const xe = (b?.cards ?? []).filter((k) => !S.includes(k.id));
  return xe.length ? /* @__PURE__ */ n.jsxs("section", { className: "panel", "aria-label": "建议处理", children: [
    /* @__PURE__ */ n.jsx(Yt, { title: "建议处理", meta: `${xe.length} 项` }),
    /* @__PURE__ */ n.jsx("div", { children: xe.map((k) => {
      const F = k.tone === "urgent" ? "异常" : k.tone === "warn" ? "待确认" : "scheduled";
      return /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-item contextual-action-host actionable action-open", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: k.title }),
          /* @__PURE__ */ n.jsx("span", { children: k.detail }),
          V[k.id] && /* @__PURE__ */ n.jsx(Ml, { ok: V[k.id].ok, text: V[k.id].text })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(_i, { value: F }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-inline-action", children: [
          k.action.kind === "overdue" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: x === k.id, onClick: () => {
              W(k, "done");
            }, children: x === k.id ? "处理中…" : k.action.label }),
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!x, onClick: () => {
              W(k, "cancelled");
            }, children: k.action.cancelLabel || "没上" })
          ] }),
          k.action.kind === "backfill" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!x, onClick: () => {
            te(k);
          }, children: x === k.id ? "处理中…" : k.action.label }),
          k.action.kind === "preview" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!x, onClick: () => {
            const le = k.action.operation;
            if (le === "calendar_sync" || le === "quarantine_overdue") {
              W(k);
              return;
            }
            o({ operation: le ?? "", ...k.action.input ?? {} });
          }, children: x === k.id ? "处理中…" : k.action.label }),
          k.action.kind === "retryNext" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!x, onClick: () => {
            const le = { id: k.action.id ?? "", version: k.action.version, retry: {}, domain: "affair", title: k.action.title ?? k.title, status: "pending_confirmation" };
            _(le);
          }, children: k.action.label }),
          k.action.kind === "openDay" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!x, onClick: (le) => d(k.action.date ?? "", le.currentTarget), children: k.action.label }),
          k.action.kind === "navigate" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!x, onClick: () => f(k.action.tab ?? "planning", k.action.section), children: k.action.label }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => z(k.id), children: "收起" })
        ] })
      ] }, k.id);
    }) })
  ] }) : null;
}
function Vu({ item: s, onQuick: o, onAskAi: d, onRetry: f, retryingId: _, feedback: N, compact: b = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status)) return null;
  const S = s.start_at?.slice(0, 10), p = s.start_at?.slice(11, 16);
  if (s.domain === "course")
    return !S || !p ? null : /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${b ? " compact" : ""}`, onClick: (z) => z.stopPropagation(), children: [
      d && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", onClick: () => d(`把${s.title} ${S} ${p} 的这节课调一下时间`), children: "调时间" }),
      o && /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", onClick: () => o("courseCancel", s), children: "本次不上" })
    ] });
  const E = _ === s.id;
  return /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${b ? " compact" : ""}`, onClick: (z) => z.stopPropagation(), children: [
    /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!_ || N?.ok, onClick: () => o?.("affairComplete", s), children: N?.ok ? "已完成" : "完成" }),
    s.retry && f ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!_ || !!N?.ok, "aria-busy": E, onClick: () => {
      f(s);
    }, children: E ? "处理中…" : N?.buttonLabel || "没约上" }) : null
  ] });
}
function Vh(s) {
  return vr(s)[0]?.laneCount || 1;
}
const Qg = 52, Zg = 150;
function Gh(s, o) {
  const [d, f] = C.useState(0);
  if (C.useEffect(() => {
    const b = s.current;
    if (!b || typeof ResizeObserver > "u") return;
    const D = new ResizeObserver((S) => {
      const p = S[0]?.contentRect.width;
      p && Number.isFinite(p) && f(p);
    });
    return D.observe(b), () => D.disconnect();
  }, [s]), o) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const _ = Math.floor((d - Qg) / Zg), N = Math.max(1, Math.min(7, _));
  return { visibleDays: N, paginated: N < 7 };
}
function Xh() {
  const s = C.useRef(null), o = C.useRef(null), d = C.useCallback((N) => {
    if (N.button !== 0 || N.target.closest("button, article, a, input, select, textarea")) return;
    const b = s.current;
    !b || b.scrollWidth <= b.clientWidth || (o.current = { pointerId: N.pointerId, startX: N.clientX, scrollLeft: b.scrollLeft }, b.setPointerCapture(N.pointerId), b.classList.add("dragging"));
  }, []), f = C.useCallback((N) => {
    const b = s.current, D = o.current;
    !b || !D || D.pointerId !== N.pointerId || (b.scrollLeft = D.scrollLeft - (N.clientX - D.startX));
  }, []), _ = C.useCallback((N) => {
    const b = s.current, D = o.current;
    !b || !D || D.pointerId !== N.pointerId || (b.hasPointerCapture(N.pointerId) && b.releasePointerCapture(N.pointerId), b.classList.remove("dragging"), o.current = null);
  }, []);
  return { ref: s, onPointerDown: d, onPointerMove: f, onPointerUp: _, onPointerCancel: _ };
}
function Kg({ items: s, range: o, localDate: d, onInspect: f, onPrepare: _, onQuick: N, onAskAi: b, onRetry: D, retryingId: S, affairFeedback: p }) {
  const E = C.useMemo(() => fr(o, d), [o, d]), z = Xh(), [x, Y] = C.useState(0), [V, se] = C.useState(null), { visibleDays: W, paginated: te } = Gh(z.ref, !!V), xe = Math.max(1, Math.ceil(7 / Math.max(1, W))), k = C.useMemo(
    () => V ? [V] : te ? Bh(E, x, W) : E,
    [E, x, V, te, W]
  );
  C.useEffect(() => {
    Y(0);
  }, [o, W]), C.useEffect(() => {
    if (!V) return;
    const h = (U) => {
      U.key === "Escape" && se(null);
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [V]);
  const F = C.useMemo(() => {
    const h = /* @__PURE__ */ new Map();
    return s.forEach((U) => {
      const J = Ni(U);
      J && (J < d && ["已取消", "已调课", "cancelled"].includes(U.status) || h.set(J, [...h.get(J) || [], U]));
    }), h.forEach((U, J) => h.set(J, [...U].sort((y, P) => String(Fe(y) || "").localeCompare(String(Fe(P) || ""))))), h;
  }, [s, d]), le = C.useMemo(() => new Map(E.map((h) => [h, Vh((F.get(h) || []).filter((U) => U.start_at || U.deadline_at))])), [F, E]), re = C.useMemo(() => {
    const h = /* @__PURE__ */ new Map();
    for (const U of E) {
      const J = (F.get(U) || []).filter((y) => y.start_at || y.deadline_at);
      h.set(U, vr(J));
    }
    return h;
  }, [F, E]), $ = k.map((h) => h && le.get(h) || 1);
  $.reduce((h, U) => h + U, 0);
  const L = `52px ${$.map((h) => `minmax(0, ${h}fr)`).join(" ")}`, ne = s.filter((h) => h.start_at || h.deadline_at), Z = k.length >= 7 ? ne : ne.filter((h) => k.includes(Ni(h))), { startHour: X, endHour: ee } = Hh(Z), Ne = V ? 92 : W >= 6 ? 64 : W >= 4 ? 72 : 84, Ce = (ee - X) * Ne, ze = Array.from({ length: ee - X + 1 }, (h, U) => X + U);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    V ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => se(null), children: "‹ 返回整周" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        jt(`${V}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
        " · 单日视图"
      ] }),
      /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
    ] }) : te && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本页日期", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: x === 0, onClick: () => Y((h) => Math.max(0, h - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        "第 ",
        x + 1,
        "/",
        xe,
        " 页 · 每页 ",
        W,
        " 天"
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: x >= xe - 1, onClick: () => Y((h) => Math.min(xe - 1, h + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "时间视图，点击日期标题聚焦到单日", ...z, children: /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: L }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-corner", children: "时间" }),
        k.map((h, U) => h ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: h === d ? "week-day-header today" : "week-day-header", onClick: () => se(h), "aria-label": `聚焦到 ${jt(`${h}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(`${h}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(h.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            F.get(h)?.length || 0,
            " 项"
          ] })
        ] }, h) : /* @__PURE__ */ n.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${U}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: L }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-time-axis", style: { height: Ce }, children: ze.map((h) => /* @__PURE__ */ n.jsxs("span", { style: { top: (h - X) * Ne }, children: [
          String(h).padStart(2, "0"),
          ":00"
        ] }, h)) }),
        k.map((h, U) => {
          if (!h) return /* @__PURE__ */ n.jsx("div", { className: "week-day-track empty-slot", style: { height: Ce }, "aria-hidden": "true" }, `empty-${U}`);
          const J = re.get(h) || [];
          return /* @__PURE__ */ n.jsx("div", { className: h === d ? "week-day-track today" : "week-day-track", style: { height: Ce }, children: J.map(({ item: y, lane: P, laneCount: m }) => {
            const O = Lh(y, X, ee, Ne);
            if (!O) return null;
            const K = 100 / m, I = y.start_at || y.deadline_at, ge = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(y.status) && (y.domain === "affair" || !!y.start_at), Ee = pr(y, d);
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${y.domain} ${_n(y, d)}${Sn(y) ? " temporary" : ""}${ge ? " actionable" : ""}`,
                style: { top: O.top, height: O.height, left: `calc(${P * K}% + 4px)`, width: `calc(${K}% - 8px)` },
                tabIndex: 0,
                role: "button",
                onClick: (Ge) => {
                  Ge.target.closest("button") || f(y, Ge.currentTarget);
                },
                onKeyDown: (Ge) => {
                  (Ge.key === "Enter" || Ge.key === " ") && (Ge.preventDefault(), f(y, Ge.currentTarget));
                },
                "data-item-id": y.id,
                "aria-label": `${Lt(I)} ${y.title}${Ee ? "（已过期待标记）" : ""}，${y.domain === "course" ? `${y.duration || "—"} 分钟课程` : "事务"}${ge ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    Lt(I),
                    " · ",
                    y.title,
                    Ee ? "（过期）" : ""
                  ] }),
                  /* @__PURE__ */ n.jsx("span", { children: y.domain === "course" ? `${y.duration || "—"} 分钟` : y.estimated_minutes ? `${y.estimated_minutes} 分钟 · 事务` : "事务" }),
                  ge && /* @__PURE__ */ n.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: y, onQuick: N, onAskAi: b, onRetry: D, retryingId: S, feedback: p[y.id], compact: !0 }) })
                ]
              },
              y.id
            );
          }) }, h);
        })
      ] })
    ] }) })
  ] });
}
function Qh({ items: s, range: o, localDate: d, onOpenDay: f }) {
  const _ = C.useMemo(() => Ug(o, d), [o, d]), N = (o.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), b = C.useMemo(() => {
    const S = /* @__PURE__ */ new Map();
    return s.forEach((p) => {
      const E = Ni(p);
      E && (E < d && ["已取消", "已调课", "cancelled"].includes(p.status) || S.set(E, [...S.get(E) || [], p]));
    }), S.forEach((p, E) => S.set(E, [...p].sort((z, x) => String(Fe(z) || "").localeCompare(String(Fe(x) || ""))))), S;
  }, [s, d]), D = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ n.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ n.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ n.jsx("div", { className: "month-weekdays", children: D.map((S) => /* @__PURE__ */ n.jsxs("span", { children: [
      "周",
      S
    ] }, S)) }),
    /* @__PURE__ */ n.jsx("div", { className: "month-grid", children: _.map((S) => {
      const p = b.get(S) || [], E = ["month-cell"];
      return S.startsWith(N) || E.push("outside"), S === d && E.push("today"), /* @__PURE__ */ n.jsxs("button", { type: "button", className: E.join(" "), onClick: (z) => f(S, z.currentTarget), children: [
        /* @__PURE__ */ n.jsxs("header", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: Number(S.slice(8, 10)) }),
          /* @__PURE__ */ n.jsx("span", { children: p.length ? `${p.length} 项` : "" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "month-item-list", children: [
          p.slice(0, 3).map((z) => /* @__PURE__ */ n.jsxs("span", { className: `month-item ${z.domain} ${_n(z, d)}${Sn(z) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ n.jsx("i", {}),
            Lt(Fe(z)) || "待定",
            " · ",
            z.title,
            pr(z, d) ? "（过期）" : ""
          ] }, z.id)),
          p.length > 3 && /* @__PURE__ */ n.jsxs("span", { className: "month-more", children: [
            "＋",
            p.length - 3,
            " 项"
          ] })
        ] })
      ] }, S);
    }) })
  ] }) });
}
function ur(s) {
  const o = Math.floor(s / 60), d = s % 60;
  return String(o).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function $g({ onAction: s, onAskAi: o, refreshKey: d = 0 }) {
  const [f, _] = C.useState(() => Nn("cockpit")), [N, b] = C.useState(!f), [D, S] = C.useState(""), p = C.useCallback(async (x = !1, Y = !1) => {
    x || b(!0);
    try {
      const V = await Qe("api/cockpit" + (Y ? "?fresh=1" : ""));
      return _(V), Ei("cockpit", V), S(""), !0;
    } catch (V) {
      return S(V?.message || "读取失败"), !1;
    } finally {
      b(!1);
    }
  }, []);
  C.useEffect(() => {
    p(!f);
  }, [p]), C.useEffect(() => {
    d > 0 && p(!0, !0);
  }, [d]);
  const E = C.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const V of f?.students ?? [])
      x.has(V.group) || x.set(V.group, []), x.get(V.group).push(V);
    return ["本周已排", "已预留", "未排"].map((V) => ({ label: V, items: x.get(V) ?? [] }));
  }, [f]);
  if (N && !f) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (D && !f) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx(na, { label: "驾驶舱读取", ok: !1, detail: D }) });
  const z = f?.localDate ?? "";
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ n.jsx(En, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "muted-note", children: [
        f?.monday,
        " 当周 · 今天 ",
        z
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        p(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => o(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "候选学生" }),
        E.map((x) => /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            x.label,
            " · ",
            x.items.length
          ] }),
          x.items.length === 0 ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "（无）" }) : x.items.map((Y) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: Y.name }),
            /* @__PURE__ */ n.jsx("span", { className: "cockpit-zone", children: Y.zone })
          ] }, Y.name))
        ] }, x.label))
      ] }),
      /* @__PURE__ */ n.jsx("section", { className: "cockpit-canvas", children: f?.days.map((x) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day" + (x.date === z ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ n.jsx("strong", { children: x.weekday }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: x.date.slice(5) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-body", children: [
          x.courses.map((Y, V) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => s({ operation: "course_move", student: Y.title, fromDate: x.date, fromTime: String(Y.start).slice(11, 16) }), children: [
              /* @__PURE__ */ n.jsx("span", { children: Y.title }),
              /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
                String(Y.start).slice(11, 16),
                "–",
                String(Y.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "cockpit-card-ai", title: "用一句话交给 AI 调时间", onClick: () => o("把" + Y.title + " " + x.date + " " + String(Y.start).slice(11, 16) + " 的这节课调一下时间"), children: "AI" })
          ] }, "c" + V)),
          x.reservations.map((Y, V) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => s({ operation: "reservation_update", id: Y.id, student: Y.student, date: x.date, time: String(Y.start).slice(11, 16) }), children: [
            /* @__PURE__ */ n.jsxs("span", { children: [
              Y.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
              String(Y.start).slice(11, 16),
              "–",
              String(Y.end).slice(11, 16)
            ] })
          ] }, "r" + V)),
          x.gaps.map((Y, V) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + Y.minutes + " 分钟，点击预留", onClick: () => s({ operation: "reservation_add", date: x.date, time: ur(Y.start) }), children: [
            ur(Y.start),
            "–",
            ur(Y.end),
            " 空档"
          ] }, "g" + V)),
          x.courses.length === 0 && x.reservations.length === 0 && /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, x.date)) }),
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "实时诊断" }),
        /* @__PURE__ */ n.jsx(da, { label: "本周课程", value: f?.diagnostics.courseCount ?? 0, hint: "共 " + (f?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ n.jsx(da, { label: "有效预留", value: f?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          f?.diagnostics.dayGaps.map((x) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: x.weekday }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-zone", children: [
              x.gapMinutes,
              " 分钟"
            ] })
          ] }, x.date))
        ] }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            f?.diagnostics.unassigned.length ?? 0
          ] }),
          f?.diagnostics.unassigned.length ? f?.diagnostics.unassigned.map((x) => /* @__PURE__ */ n.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ n.jsx("span", { children: x }) }, x)) : /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (f?.warnings ?? []).map((x, Y) => /* @__PURE__ */ n.jsx(na, { label: "读取警告", ok: !1, detail: x }, Y))
      ] })
    ] })
  ] });
}
function Jg({ onAction: s, onAskAi: o, refreshKey: d, sectionHint: f, scheduleText: _, onDataChanged: N }) {
  const [b, D] = C.useState(() => Nn("planning")), [S, p] = C.useState(""), [E, z] = C.useState("calendar"), [x, Y] = C.useState("issues"), [V, se] = C.useState(!1), [W, te] = C.useState(null), [xe, k] = C.useState(!1), [F, le] = C.useState(null), [re, $] = C.useState({});
  C.useEffect(() => {
    f?.section && z(f.section);
  }, [f?.nonce]), C.useEffect(() => {
    let y = !1;
    return Qe(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((P) => {
      if (y) return;
      const m = Hg(P);
      D(m), Ei("planning", m), p(""), te(null);
    }).catch((P) => {
      y || p(P.message || "筹备数据读取失败");
    }), () => {
      y = !0;
    };
  }, [d]), C.useEffect(() => {
    const y = Object.entries(re).at(-1);
    if (!y || !y[1].ok || F === y[0]) return;
    const P = window.setTimeout(() => {
      $((m) => {
        const O = { ...m };
        return delete O[y[0]], O;
      });
    }, 4500);
    return () => window.clearTimeout(P);
  }, [F, re]);
  async function L() {
    if (!(!b || xe)) {
      k(!0), te(null);
      try {
        te(await Qe(`api/planning/template-check?monday=${encodeURIComponent(b.weekMonday)}`));
      } catch (y) {
        te({ ok: !1, passed: !1, monday: b.weekMonday, output: "", affectedDates: [], error: y.message });
      } finally {
        k(!1);
      }
    }
  }
  async function ne(y) {
    if (!F) {
      le(y), $((P) => ({ ...P, [y]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const P = await Qe("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: y })
        });
        if (!P.ok) throw new Error(P.error || "取消预留未完成");
        D((m) => m && {
          ...m,
          reservations: m.reservations.map((O) => O.reservation_id === y ? { ...O, status: "已取消" } : O)
        }), $((m) => ({ ...m, [y]: { ok: !0, text: P.message || "已取消预留" } })), N({ silent: !0 });
      } catch (P) {
        $((m) => ({ ...m, [y]: { ok: !1, text: `取消失败：${P.message || "未知错误"}` } }));
      } finally {
        le(null);
      }
    }
  }
  async function Z(y) {
    if (!F) {
      le(y), $((P) => ({ ...P, [y]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const P = await Qe("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: y })
        });
        if (!P.ok) throw new Error(P.error || "预留确认失败");
        D((m) => m && {
          ...m,
          summary: { ...m.summary, formalCourseCount: m.summary.formalCourseCount + 1 },
          reservations: m.reservations.map((O) => O.reservation_id === y ? { ...O, status: "已确认" } : O),
          audit: {
            ...m.audit,
            reservation_hard_blockers: m.audit.reservation_hard_blockers.filter((O) => O.reservation_id !== y)
          }
        }), $((m) => ({ ...m, [y]: { ok: !0, text: P.message || "已确认落课" } })), N({ silent: !0 });
      } catch (P) {
        $((m) => ({ ...m, [y]: { ok: !1, text: `确认失败：${P.message || "未知错误"}` } })), N({ silent: !0 });
      } finally {
        le(null);
      }
    }
  }
  if (S) return /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "筹备数据读取失败", text: S });
  if (!b) return /* @__PURE__ */ n.jsx(br, {});
  const X = b.summary, ee = b.students.filter((y) => y.confirmed && y.zone !== "未分区" && (y.availability.length > 0 || y.hasReservation)).length, Ne = X.activeStudentCount ? Math.round(ee / X.activeStudentCount * 100) : 100, Ce = b.commute.overlaps.length, ze = new Map(b.audit.reservation_hard_blockers.map((y) => [y.reservation_id, y.reasons])), h = b.students.filter((y) => x === "all" ? !0 : x === "availability" ? !y.availability.length && !y.hasReservation : x === "zone" ? y.zone === "未分区" : x === "pending" ? !!y.pendingWeekday || !y.confirmed : y.issues.length > 0), U = V ? h : h.slice(0, 10), J = b.sources.filter((y) => !y.ok);
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ n.jsx(En, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    J.length > 0 && /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: `${J.length} 项筹备数据读取异常`, text: J.map((y) => `${y.label}：${y.message || "读取失败"}`).join("；") }),
    X.reservationHardBlockerCount > 0 && /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: `${X.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: b.audit.reservation_hard_blockers.map((y) => `${y.student} ${y.date}：${y.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ n.jsx(
      Yu,
      {
        label: "筹备页内部导航",
        value: E,
        onChange: (y) => z(y),
        items: [
          { id: "calendar", label: "周视图", count: b.reservations.length + b.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: X.unzonedCount + X.missingAvailabilityCount + X.unconfirmedActiveCount + b.students.filter((y) => y.issues.length).length },
          { id: "candidates", label: "预留与复核", count: Ce + X.reservationCount + X.reviewCount + X.overdueCount + J.length }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(Fg, { planning: b, hidden: E !== "calendar", onConfirmReservation: Z, onCancelReservation: ne, onAction: s, confirmingReservationId: F, reservationFeedback: re }),
    /* @__PURE__ */ n.jsxs("div", { hidden: E !== "trial", children: [
      /* @__PURE__ */ n.jsx(En, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ n.jsx($g, { onAction: s, onAskAi: o, refreshKey: d })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: E !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ n.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ n.jsxs("strong", { children: [
          ee,
          "/",
          X.activeStudentCount
        ] }),
        /* @__PURE__ */ n.jsxs("small", { children: [
          Ne,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ n.jsx("i", { style: { width: `${Ne}%` } }) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: Ce ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ n.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ n.jsx("strong", { children: Ce }),
        /* @__PURE__ */ n.jsx("small", { children: Ce ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ n.jsx("strong", { children: X.reservationCount }),
        /* @__PURE__ */ n.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ n.jsx("strong", { children: X.formalCourseCount }),
        /* @__PURE__ */ n.jsx("small", { children: X.reviewCount + X.overdueCount ? `${X.reviewCount + X.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-overview-grid", hidden: E !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ n.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            X.activeStudentCount - ee,
            " 人仍有关键资料缺口。contract ",
            b.contract.version ?? "—",
            " · schema ",
            b.contract.schemaVersion ?? "—",
            " · ",
            Lu(b.range)
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            Y("availability"), z("students");
          }, children: [
            "缺候选时间 ",
            X.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            Y("zone"), z("students");
          }, children: [
            "未分区 ",
            X.unzonedCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            Y("pending"), z("students");
          }, children: [
            "待确认 ",
            X.unconfirmedActiveCount + X.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ n.jsx("h3", { children: Ce ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            Ce,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => z("candidates"), children: "查看候选与预留" }),
          X.reviewCount + X.overdueCount + J.length > 0 && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => z("candidates"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "panel planning-student-panel", hidden: E !== "students", children: [
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
        ].map(([y, P]) => /* @__PURE__ */ n.jsx("button", { type: "button", className: x === y ? "selected" : "", onClick: () => {
          Y(y), se(!1);
        }, children: P }, y)) })
      ] }),
      h.length ? /* @__PURE__ */ n.jsxs("div", { className: "planning-student-list", children: [
        U.map((y) => {
          const P = y.availability.length ? y.availability.map((m) => `${m.weekday} ${m.start_time}-${m.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ n.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ n.jsx("strong", { children: y.name }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                y.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ n.jsx("span", { className: y.confirmed ? "state-good" : "state-warn", children: y.pendingWeekday ? `${y.pendingWeekday}待定` : y.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "片区" }),
              /* @__PURE__ */ n.jsx("span", { className: y.zone === "未分区" ? "state-warn" : "", children: y.zone })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ n.jsx("span", { className: !y.availability.length && !y.hasReservation ? "state-warn" : "", title: P, children: y.availability.length ? P : y.hasReservation ? "已有单日预留" : P })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "约束" }),
              /* @__PURE__ */ n.jsx("span", { children: y.vacations.length ? y.vacations.map((m) => `至 ${m.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-row-actions", children: [
              y.zone === "未分区" && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "zone_set", student: y.name }), children: "设片区" }),
              !y.availability.length && !y.hasReservation && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "availability_set", student: y.name, weekday: y.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "reservation_add", student: y.name, duration: y.duration, zone: y.zone === "未分区" ? "" : y.zone }), children: "预留" })
            ] })
          ] }, y.sourceName);
        }),
        h.length > 10 && /* @__PURE__ */ n.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => se((y) => !y), children: V ? "收起学生列表" : `再看 ${h.length - 10} 人` })
      ] }) : /* @__PURE__ */ n.jsx(ha, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      b.inactiveConfirmed.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          b.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-student-context", hidden: E !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ n.jsx("span", { children: b.pending.map((y) => y.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ n.jsx("span", { children: b.vacations.map((y) => `${y.student} ${y.start_date.slice(5)}—${y.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ n.jsx("span", { children: b.zones.map((y) => `${y.zone} ${y.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-two-column", hidden: E !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "课程预留", meta: `${b.reservations.length} 条`, action: "新增预留…", onAction: () => s({ operation: "reservation_add" }) }),
        b.reservations.length ? /* @__PURE__ */ n.jsx("div", { className: "reservation-card-list", children: b.reservations.map((y) => {
          const P = (y.conflicts?.formal_courses?.length || 0) + (y.conflicts?.soft_reservations?.length || 0), m = ze.get(y.reservation_id) || [], O = `reservation-blocker-${y.reservation_id}`, K = y.status === "已确认" ? "已落课" : y.status === "预期" ? "待落课" : y.status, I = m.length ? "blocked" : y.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ n.jsxs("article", { className: `reservation-card ${I}`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ n.jsx("strong", { children: y.reservation_date.slice(5) }),
              /* @__PURE__ */ n.jsx("span", { children: y.weekday })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ n.jsx("strong", { children: y.student }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                y.start_time,
                "-",
                y.end_time,
                " · ",
                y.duration,
                " 分钟",
                y.zone ? ` · ${y.zone}` : ""
              ] }),
              /* @__PURE__ */ n.jsxs("small", { id: O, children: [
                K,
                P ? ` · ${P} 项软冲突` : "",
                m.length ? ` · 硬约束：${m.join("、")}` : "",
                y.note ? ` · ${y.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "reservation-actions", children: y.status === "预期" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "reservation_update", reservationId: y.reservation_id, date: y.reservation_date, time: y.start_time, duration: y.duration, zone: y.zone || "", note: y.note || "" }), children: "调整时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: m.length > 0, "aria-describedby": m.length ? O : void 0, onClick: () => s({ operation: "reservation_confirm", reservationId: y.reservation_id }), children: m.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => s({ operation: "reservation_cancel", reservationId: y.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ n.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              K
            ] }) })
          ] }, y.reservation_id);
        }) }) : /* @__PURE__ */ n.jsx(ha, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ n.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              X.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: xe, onClick: () => {
            L();
          }, children: xe ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ n.jsx(sr, { label: "时间重叠", count: b.commute.overlaps.length, tone: "danger", details: b.commute.overlaps.slice(0, 3).map((y) => `${y.weekday} ${y.first} ${y.firstRange} / ${y.second} ${y.secondRange}`) }),
          /* @__PURE__ */ n.jsx(sr, { label: "长期候选时间差异", count: b.commute.availabilityConflicts.length, tone: "neutral", details: b.commute.availabilityConflicts.slice(0, 3).map((y) => `${y.student} ${y.weekday} ${y.startTime}-${y.endTime}（仅提示）`) }),
          /* @__PURE__ */ n.jsx(sr, { label: "排时间时再问通勤", count: b.commute.missingRoutes.length, tone: "neutral", details: b.commute.missingRoutes.slice(0, 3).map((y) => `${y.weekday} ${y.from} → ${y.to}`) })
        ] }),
        b.commute.missingRoutes.slice(0, 2).map((y) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => s({ operation: "commute_set", fromStudent: y.from, toStudent: y.to }), children: [
          "补录 ",
          y.from,
          " → ",
          y.to
        ] }, `${y.weekday}-${y.from}-${y.to}`)),
        W && /* @__PURE__ */ n.jsxs("div", { className: W.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ n.jsx("strong", { children: W.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ n.jsx("pre", { children: W.error || W.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    E === "candidates" && (b.reviews.length > 0 || X.overdueCount > 0) && /* @__PURE__ */ n.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ n.jsx(Yt, { title: "历史课程复核", meta: `${b.reviews.length} 节待确认 · ${X.overdueCount} 节过期待转入`, action: X.overdueCount ? `处理 ${X.overdueCount} 节过期课` : void 0, onAction: X.overdueCount ? () => s({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ n.jsx("div", { className: "review-card-list", children: b.reviews.map((y) => /* @__PURE__ */ n.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: y.student }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            y.date,
            " · ",
            y.start_time,
            "-",
            y.end_time
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: y.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: y.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, y.course_id)) })
    ] }),
    E === "candidates" && b.reviews.length === 0 && X.overdueCount === 0 && /* @__PURE__ */ n.jsx("section", { className: "panel", children: /* @__PURE__ */ n.jsx(ha, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-detail-grid", hidden: E !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "过期待转入：" }),
            X.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "人工待复核：" }),
            X.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "读取异常：" }),
            J.length,
            " 项"
          ] }),
          /* @__PURE__ */ n.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ n.jsx("div", { className: "source-status-list", children: b.sources.map((y) => /* @__PURE__ */ n.jsxs("span", { className: y.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          y.label
        ] }, y.label)) }),
        /* @__PURE__ */ n.jsxs("pre", { children: [
          Object.values(b.raw).filter(Boolean).join(`

`),
          _ ? `

── 底层课表文本 ──
${_}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Fg({ planning: s, hidden: o, onConfirmReservation: d, onCancelReservation: f, onAction: _, confirmingReservationId: N, reservationFeedback: b }) {
  const [D, S] = C.useState("reservation"), [p, E] = C.useState(null), z = Xh(), [x, Y] = C.useState(s.weekMonday), [V, se] = C.useState(0), [W, te] = C.useState(null), xe = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], k = C.useMemo(() => fr(`${x}..${x}`, x), [x]), { visibleDays: F, paginated: le } = Gh(z.ref, !!W), re = Math.max(1, Math.ceil(7 / Math.max(1, F))), $ = C.useMemo(
    () => W ? [W] : le ? Bh(k, V, F) : k,
    [k, V, W, le, F]
  );
  C.useEffect(() => {
    Y(s.weekMonday);
  }, [s.weekMonday]), C.useEffect(() => {
    se(0), te(null), E(null);
  }, [x, D]);
  const L = C.useMemo(() => gr(s.range), [s.range]), ne = C.useMemo(() => fr(s.range, s.localDate)[0], [s.range, s.localDate]), Z = x > ne, X = !!(L.end && zl(x, 7) <= L.end), ee = C.useMemo(() => new Map(s.students.map((Q) => [Q.name, Q])), [s.students]), Ne = C.useMemo(() => new Map(s.pending.map((Q) => [Q.student, Q])), [s.pending]), Ce = C.useMemo(() => new Map(
    s.audit.reservation_hard_blockers.map((Q) => [Q.reservation_id, Q.reasons.join("、")])
  ), [s.audit.reservation_hard_blockers]), ze = C.useMemo(() => {
    const Q = (ve, ae = "在读") => ae !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : Ne.has(ve) ? { studentState: "待定", stateClass: "pending" } : ee.get(ve)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, Me = (ve) => ({
      ...ve,
      start_at: `${ve.date}T${ve.start_time}:00+08:00`,
      end_at: `${ve.date}T${ve.end_time}:00+08:00`
    });
    return D === "reservation" ? s.reservations.filter((ve) => ve.reservation_date >= k[0] && ve.reservation_date <= k[6] && ve.status !== "已取消").map((ve) => {
      const ae = Ce.get(ve.reservation_id), Dt = (ve.student_status || "在读") !== "在读", tt = ve.status === "已确认";
      return Me({
        id: ve.reservation_id,
        kind: "reservation",
        reservationId: ve.reservation_id,
        reservationStatus: ve.status,
        confirmedCourseId: ve.confirmed_course_id,
        blockerText: ae,
        student: ve.student,
        date: ve.reservation_date,
        weekday: ve.weekday,
        start_time: ve.start_time,
        end_time: ve.end_time,
        duration: ve.duration,
        studentState: Dt ? "已暂停" : tt ? "已落课" : ae ? "有硬约束" : "待落课",
        stateClass: Dt ? "paused" : tt ? "landed" : ae ? "blocked" : "expected",
        zone: ve.zone,
        note: ve.note
      });
    }) : s.templates.flatMap((ve) => {
      const ae = xe.indexOf(ve.weekday);
      if (ae < 0) return [];
      const Dt = k[ae], tt = Q(ve.student, ve.student_status);
      return [Me({
        id: `template-${ve.template_id}`,
        kind: "template",
        student: ve.student,
        date: Dt,
        weekday: ve.weekday,
        start_time: ve.start_time,
        end_time: ve.end_time,
        duration: ve.duration,
        studentState: tt.studentState,
        stateClass: tt.stateClass
      })];
    });
  }, [k, D, Ne, s.reservations, s.templates, Ce, ee]);
  C.useEffect(() => {
    p && !ze.some((Q) => Q.id === p && Q.kind === "reservation") && E(null);
  }, [ze, p]), C.useEffect(() => {
    if (!W) return;
    const Q = (Me) => {
      Me.key === "Escape" && te(null);
    };
    return window.addEventListener("keydown", Q), () => window.removeEventListener("keydown", Q);
  }, [W]), C.useEffect(() => {
    if (!p) return;
    const Q = (Me) => {
      Me.key === "Escape" && E(null);
    };
    return window.addEventListener("keydown", Q), () => window.removeEventListener("keydown", Q);
  }, [p]);
  const h = !!N, U = C.useMemo(() => {
    const Q = /* @__PURE__ */ new Map();
    return ze.forEach((Me) => Q.set(Me.date, [...Q.get(Me.date) || [], Me])), Q;
  }, [ze]), J = C.useMemo(() => new Map(k.map((Q) => [Q, Vh(U.get(Q) || [])])), [U, k]), y = C.useMemo(() => {
    const Q = /* @__PURE__ */ new Map();
    for (const Me of k)
      Q.set(Me, vr(U.get(Me) || []));
    return Q;
  }, [U, k]), P = $.map((Q) => Q && J.get(Q) || 1);
  P.reduce((Q, Me) => Q + Me, 0);
  const m = `52px ${P.map((Q) => `minmax(0, ${Q}fr)`).join(" ")}`, O = $.length >= 7 ? ze : ze.filter((Q) => $.includes(Q.date)), { startHour: K, endHour: I } = Hh(O), ye = W ? 92 : F >= 6 ? 64 : F >= 4 ? 72 : 84, ge = (I - K) * ye, Ee = Array.from({ length: I - K + 1 }, (Q, Me) => K + Me), Ge = `${jt(`${k[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${jt(`${k[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ n.jsxs("section", { className: `panel planning-week-panel ${D}-mode`, hidden: o, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ n.jsx("h3", { children: D === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ n.jsx("span", { children: D === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: D === "reservation" ? "selected" : "", "aria-pressed": D === "reservation", onClick: () => S("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.reservations.length })
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: D === "template" ? "selected" : "", "aria-pressed": D === "template", onClick: () => S("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "上一周", disabled: !Z, onClick: () => Y((Q) => zl(Q, -7)), children: "‹" }),
          /* @__PURE__ */ n.jsx("strong", { children: Ge }),
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "下一周", disabled: !X, onClick: () => Y((Q) => zl(Q, 7)), children: "›" })
        ] }),
        W ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => te(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            jt(`${W}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
        ] }) : le && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: V === 0, onClick: () => se((Q) => Math.max(0, Q - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            "第 ",
            V + 1,
            "/",
            re,
            " 页 · 每页 ",
            F,
            " 天"
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: V >= re - 1, onClick: () => se((Q) => Math.min(re - 1, Q + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "planning-week-legend", children: D === "reservation" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
    ze.length ? /* @__PURE__ */ n.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，点击日期标题聚焦到单日", ...z, children: /* @__PURE__ */ n.jsxs("div", { className: "planning-week-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: m }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-corner", children: "时间" }),
        $.map((Q, Me) => Q ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: Q === s.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => te(Q), "aria-label": `聚焦到 ${jt(`${Q}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: xe[k.indexOf(Q)] }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(Q.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            U.get(Q)?.length || 0,
            " 项"
          ] })
        ] }, Q) : /* @__PURE__ */ n.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${Me}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: m }, onPointerDown: (Q) => {
        Q.target.closest(".planning-week-block") || E(null);
      }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-axis", style: { height: ge }, children: Ee.map((Q) => /* @__PURE__ */ n.jsxs("span", { style: { top: (Q - K) * ye }, children: [
          String(Q).padStart(2, "0"),
          ":00"
        ] }, Q)) }),
        $.map((Q, Me) => {
          if (!Q) return /* @__PURE__ */ n.jsx("div", { className: "planning-week-track empty-slot", style: { height: ge }, "aria-hidden": "true" }, `empty-${Me}`);
          const ve = y.get(Q) || [];
          return /* @__PURE__ */ n.jsx("div", { className: Q === s.localDate ? "planning-week-track today" : "planning-week-track", style: { height: ge }, children: ve.map(({ item: ae, lane: Dt, laneCount: tt }) => {
            const ct = Lh(ae, K, I, ye);
            if (!ct) return null;
            const ia = 100 / tt, ua = ae.kind === "reservation" && ae.reservationStatus === "预期", Vt = ae.kind === "reservation" && ae.reservationStatus === "已确认", ut = !!(ae.reservationId && (ua || Vt)), ea = !!(ua && N === ae.reservationId), ft = !!(ut && (p === ae.id || ea)), sa = ae.reservationId ? b[ae.reservationId] : void 0, Ol = !!(h || ae.blockerText || ae.stateClass === "paused");
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `planning-week-block ${ae.kind} ${ae.stateClass}${ut ? " actionable" : ""}${ft ? " action-open" : ""}`,
                tabIndex: ut ? 0 : void 0,
                role: ut ? "button" : void 0,
                "aria-expanded": ut ? ft : void 0,
                "aria-label": `${ae.start_time}-${ae.end_time} ${ae.student}，${ae.studentState}${ae.zone ? `，${ae.zone}` : ""}${ua ? "；移入或点击后可调整时间、确认落课" : Vt ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (Oe) => {
                  ut && !Oe.target.closest("button") && E((cl) => cl === ae.id ? null : ae.id);
                },
                onKeyDown: (Oe) => {
                  ut && (Oe.key === "Enter" || Oe.key === " " ? (Oe.preventDefault(), E((cl) => cl === ae.id ? null : ae.id)) : Oe.key === "Escape" && (Oe.preventDefault(), E(null)));
                },
                style: { top: ct.top, height: ct.height, left: `calc(${Dt * ia}% + 4px)`, width: `calc(${ia}% - 8px)` },
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    ae.start_time,
                    " · ",
                    ae.student
                  ] }),
                  /* @__PURE__ */ n.jsxs("span", { children: [
                    ae.duration,
                    " 分钟 · ",
                    ae.studentState,
                    ae.zone ? ` · ${ae.zone}` : ""
                  ] }),
                  ut && /* @__PURE__ */ n.jsxs("div", { className: "planning-week-inline-action", onClick: (Oe) => Oe.stopPropagation(), children: [
                    /* @__PURE__ */ n.jsx("div", { className: "planning-week-inline-buttons", children: ua ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: h, onClick: () => {
                        E(null), _({ operation: "reservation_update", reservationId: ae.reservationId, date: ae.date, time: ae.start_time, duration: ae.duration, zone: ae.zone || "", note: ae.note || "" });
                      }, children: "调整时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: Ol, "aria-busy": ea, onClick: () => {
                        const Oe = d(ae.reservationId);
                        Oe && typeof Oe.then == "function" && Oe.finally(() => E(null));
                      }, children: ea ? "确认中…" : h ? "处理中…" : ae.stateClass === "paused" ? "学生已暂停" : ae.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", onClick: () => _({ operation: "course_move", student: ae.student, fromDate: ae.date, fromTime: ae.start_time, toDate: ae.date, toTime: ae.start_time, duration: ae.duration }), children: "调整时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", onClick: () => _({ operation: "course_cancel", student: ae.student, date: ae.date, time: ae.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", disabled: h, onClick: () => {
                        const Oe = f(ae.reservationId);
                        Oe && typeof Oe.then == "function" && Oe.finally(() => E(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (ae.blockerText || sa) && /* @__PURE__ */ n.jsx(Ml, { ok: !!sa?.ok, text: sa?.text || ae.blockerText || "" })
                  ] })
                ]
              },
              ae.id
            );
          }) }, Q);
        })
      ] })
    ] }) }) : /* @__PURE__ */ n.jsx(ha, { title: D === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: D === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function sr({ label: s, count: o, tone: d, details: f }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("span", { children: s }),
      /* @__PURE__ */ n.jsx("strong", { children: o })
    ] }),
    f.length > 0 && /* @__PURE__ */ n.jsx("ul", { children: f.map((_) => /* @__PURE__ */ n.jsx("li", { children: _ }, _)) })
  ] });
}
const Wg = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function Ig({ item: s, onInspect: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, onRetryPrev: b, retryingId: D, feedback: S }) {
  const p = ["completed", "cancelled", "已完成", "已取消"].includes(s.status), E = D === s.id, z = s.retry ? "retry" : s.start_at ? "timed" : s.deadline_at ? "deadline" : "fuzzy", x = Date.now(), Y = s.deadline_at ? new Date(s.deadline_at).getTime() : null, V = Y != null ? Math.ceil((Y - x) / 864e5) : null, se = s.retry?.current_candidate_date || null;
  return /* @__PURE__ */ n.jsxs(
    "article",
    {
      className: `affair-card ${z}${p ? " closed" : ""}`,
      "data-item-id": s.id,
      tabIndex: 0,
      role: "button",
      onClick: (W) => {
        W.target.closest("button") || o(s, W.currentTarget);
      },
      onKeyDown: (W) => {
        W.key === "Enter" && (W.preventDefault(), o(s, W.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-when", children: [
          z === "timed" && s.start_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: Lt(s.start_at) }),
            /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          z === "deadline" && s.deadline_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: jt(s.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              "截止",
              V != null && !p ? ` · ${V >= 0 ? `剩 ${V} 天` : `已过 ${-V} 天`}` : ""
            ] })
          ] }),
          z === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ n.jsx("span", { children: s.window_label || "窗口未定" })
          ] }),
          z === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ n.jsx("span", { children: se ? `下次 ${se.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ n.jsx("strong", { className: "affair-card-title", children: s.title }),
          /* @__PURE__ */ n.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ n.jsx(_i, { value: s.status }),
            s.note ? /* @__PURE__ */ n.jsx("em", { children: s.note }) : null,
            s.next_prompt_at ? /* @__PURE__ */ n.jsx("em", { children: `提醒 ${jt(s.next_prompt_at, { month: "numeric", day: "numeric" })} ${Lt(s.next_prompt_at)}` }) : null
          ] }),
          z === "retry" && s.retry?.weekdays?.length ? /* @__PURE__ */ n.jsx("span", { className: "affair-candidates", children: s.retry.weekdays.map((W) => /* @__PURE__ */ n.jsx("i", { children: Wg[W] || W }, W)) }) : null,
          S ? /* @__PURE__ */ n.jsx(Ml, { ok: S.ok, text: S.text }) : null,
          S?.undo && b ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!D, onClick: () => {
            b(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "affair-card-actions", children: !p && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do primary", disabled: !!D || S?.ok, onClick: () => f?.("affairComplete", s), children: S?.ok ? "已完成" : "完成" }),
          s.retry && N ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!D || !!S?.ok, "aria-busy": E, onClick: () => {
            N(s);
          }, children: E ? "处理中…" : S?.buttonLabel || "没约上" }) : _ ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", onClick: () => _(`把「${s.title}」（${s.id}）调整一下`), children: "调" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Pg({ onPrepare: s, onQuick: o, onAskAi: d, onInspect: f, onRetry: _, onRetryPrev: N, retryingId: b, feedback: D, refreshKey: S, observedAt: p, onOpenDay: E, localDate: z }) {
  const [x, Y] = C.useState("pending"), [V, se] = C.useState("list"), [W, te] = C.useState(() => Nn("affairs-month")), [xe, k] = C.useState(""), F = C.useCallback((h) => {
    Qe("api/affairs-month" + (h ? "?fresh=1" : "")).then((U) => {
      if (!U || !Array.isArray(U.affairs) || !Array.isArray(U.pending)) return;
      const J = {
        affairs: U.affairs.map((y) => ({ ...y, domain: "affair" })),
        pending: U.pending.map((y) => ({ ...y, domain: "affair" })),
        month: String(U.month || "")
      };
      te(J), Ei("affairs-month", J), k("");
    }).catch(() => {
    });
  }, []);
  C.useEffect(() => {
    F(!W);
  }, [F]), C.useEffect(() => {
    S > 0 && F(!0);
  }, [S]), C.useEffect(() => {
    p && W && F(!1);
  }, [p, F]);
  const le = W?.pending ?? [], re = W?.affairs ?? [], $ = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), L = re.filter((h) => !$.has(h.status)).sort((h, U) => String(Fe(h) || "").localeCompare(String(Fe(U) || ""))), ne = re.filter((h) => $.has(h.status)).sort((h, U) => String(Fe(U) || "").localeCompare(String(Fe(h) || ""))), Z = ne.filter((h) => !["cancelled", "已取消"].includes(h.status)).length, X = W?.month ? `${W.month}-01..${W.month}-01` : "", Ne = { pending: le, scheduled: L, closed: ne }[x], Ce = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[x];
  function ze(h, U) {
    const J = re.filter((y) => Ni(y) === h);
    E(h, J, U);
  }
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(En, { eyebrow: `事务 · 本月 ${W?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${Z} 件、取消 ${ne.length - Z} 件，进行中 ${L.length} 件。点日历上的任何一天，看那天的安排。` }),
    xe && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "事务数据读取失败", text: xe }),
    !W && /* @__PURE__ */ n.jsx(br, {}),
    W && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "事务状态",
            value: x,
            onChange: (h) => Y(h),
            items: [
              { id: "pending", label: "待处理", count: le.length },
              { id: "scheduled", label: "已安排", count: L.length },
              { id: "closed", label: "已完成·已取消", count: ne.length }
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "视图切换",
            value: V,
            onChange: (h) => se(h),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      V === "calendar" ? /* @__PURE__ */ n.jsx(Qh, { items: re, range: X, localDate: z ?? W.month + "-01", onOpenDay: ze }) : /* @__PURE__ */ n.jsx("div", { children: Ne.length ? Ne.map((h) => /* @__PURE__ */ n.jsx(Ig, { item: h, onInspect: f, onPrepare: s, onQuick: o, onAskAi: d, onRetry: _, onRetryPrev: N, retryingId: b, feedback: D[h.id] }, h.id)) : /* @__PURE__ */ n.jsx(ha, { title: Ce.title, text: Ce.text }) })
    ] })
  ] });
}
function ev({ pending: s, students: o, preset: d, aiDraft: f, preview: _, busy: N, onPreview: b, onAiPreview: D, onCommit: S, onCommitBatch: p, onClear: E, onClose: z }) {
  const [x, Y] = C.useState(d?.operation || "course_move"), [V, se] = C.useState(d?.affairKind || "timed"), [W, te] = C.useState(d?.student || ""), [xe, k] = C.useState(d?.duration || ""), [F, le] = C.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  C.useEffect(() => {
    d?.operation && Y(d.operation), d?.affairKind && se(d.affairKind), d?.student && te(d.student), d?.duration && k(d.duration);
  }, [d]);
  function re(L) {
    L.preventDefault();
    const ne = new FormData(L.currentTarget), Z = { operation: x };
    for (const [X, ee] of ne.entries())
      X !== "operation" && String(ee).trim() && (Z[X] = ee);
    Z.duration && (Z.duration = Number(Z.duration)), Z.minutes !== void 0 && (Z.minutes = Number(Z.minutes)), Z.expectedVersion && (Z.expectedVersion = Number(Z.expectedVersion)), x === "course_plan" && (Z.moves = F.map((X) => ({ ...X, duration: X.duration ? Number(X.duration) : void 0 }))), b(Z);
  }
  function $(L, ne, Z) {
    le((X) => X.map((ee, Ne) => Ne === L ? { ...ee, [ne]: Z } : ee));
  }
  return /* @__PURE__ */ n.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ n.jsx(lv, { initialDraft: f, preview: _, busy: N, onPreview: D, onCommit: S, onCommitBatch: p, onClear: E, onClose: z }),
    /* @__PURE__ */ n.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ n.jsxs("summary", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ n.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ n.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ n.jsxs("form", { className: "panel operation-form", onSubmit: re, children: [
          /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ n.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ n.jsxs("select", { name: "operation", value: x, onChange: (L) => {
              Y(L.target.value), E();
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
          x === "course_move" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ n.jsx(fe, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          x === "course_cancel" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
          ] }),
          x === "course_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: W,
                  onChange: (L) => {
                    const ne = o.find((Z) => Z.name === L.target.value);
                    te(L.target.value), ne && k(ne.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((L) => L.status === "在读").map((L) => /* @__PURE__ */ n.jsxs("option", { value: L.name, children: [
                      L.name,
                      " · ",
                      L.default_duration,
                      " 分钟"
                    ] }, L.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: xe, onChange: (L) => k(L.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          x === "reservation_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: W,
                  onChange: (L) => {
                    const ne = o.find((Z) => Z.name === L.target.value);
                    te(L.target.value), ne && k(ne.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((L) => L.status === "在读").map((L) => /* @__PURE__ */ n.jsxs("option", { value: L.name, children: [
                      L.name,
                      " · ",
                      L.default_duration,
                      " 分钟"
                    ] }, L.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: xe, onChange: (L) => k(L.target.value) })
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ n.jsx(fe, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          x === "reservation_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ n.jsx(fe, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(x) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          x === "zone_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          x === "availability_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((L) => /* @__PURE__ */ n.jsx("option", { value: L, children: L }, L))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          x === "availability_clear" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((L) => /* @__PURE__ */ n.jsx("option", { value: L, children: L }, L))
              ] })
            ] })
          ] }),
          x === "commute_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ n.jsx(fe, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          x === "quarantine_overdue" && /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          x === "course_review_resolve" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ n.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ n.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ n.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          x === "course_day_complete" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          x === "course_plan" && /* @__PURE__ */ n.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ n.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", onClick: () => le((L) => [...L, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            F.map((L, ne) => /* @__PURE__ */ n.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ n.jsx("span", { className: "plan-index", children: ne + 1 }),
              /* @__PURE__ */ n.jsxs("select", { value: L.student || "", onChange: (Z) => {
                const X = o.find((ee) => ee.name === Z.target.value);
                $(ne, "student", Z.target.value), X && $(ne, "duration", X.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "学生" }),
                o.filter((Z) => Z.status === "在读").map((Z) => /* @__PURE__ */ n.jsx("option", { value: Z.name, children: Z.name }, Z.name))
              ] }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: L.fromDate || "", onChange: (Z) => $(ne, "fromDate", Z.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: L.fromTime || "", onChange: (Z) => $(ne, "fromTime", Z.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: L.toDate || "", onChange: (Z) => $(ne, "toDate", Z.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: L.toTime || "", onChange: (Z) => $(ne, "toTime", Z.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: L.duration || "", onChange: (Z) => $(ne, "duration", Z.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "plan-remove", disabled: F.length <= 2, onClick: () => le((Z) => Z.filter((X, ee) => ee !== ne)), children: "×" })
            ] }, ne))
          ] }),
          x === "affair_create" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(fe, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "类型" }),
              /* @__PURE__ */ n.jsxs("select", { name: "affairKind", value: V, onChange: (L) => se(L.target.value), children: [
                /* @__PURE__ */ n.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ n.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ n.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ n.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            V === "timed" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(fe, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(fe, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ n.jsx(fe, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            V === "deadline" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(fe, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(fe, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            V === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(fe, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(fe, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            V === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(fe, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ n.jsx(fe, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ n.jsx(fe, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ n.jsx(fe, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
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
          x === "affair_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((L) => /* @__PURE__ */ n.jsxs("option", { value: L.id, children: [
                  L.title,
                  " · ",
                  L.id
                ] }, L.id))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "title", label: "新标题（可选）", defaultValue: d?.title }),
            /* @__PURE__ */ n.jsx(fe, { name: "startDate", label: "新开始日期（可选）", type: "date" }),
            /* @__PURE__ */ n.jsx(fe, { name: "startTime", label: "新开始时间（可选）", type: "time" }),
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
            /* @__PURE__ */ n.jsx(fe, { name: "note", label: "新备注（可选）" }),
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
          x === "affair_retry_prev" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((L) => /* @__PURE__ */ n.jsxs("option", { value: L.id, children: [
                  L.title,
                  " · ",
                  L.id
                ] }, L.id))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(fe, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。" })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(x) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((L) => /* @__PURE__ */ n.jsxs("option", { value: L.id, children: [
                  L.title,
                  " · ",
                  L.id
                ] }, L.id))
              ] })
            ] }),
            x === "affair_retry_next" && /* @__PURE__ */ n.jsx(fe, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          x === "calendar_sync" && /* @__PURE__ */ n.jsx(fe, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ n.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ n.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ n.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ n.jsx("button", { className: "primary-button full", type: "submit", disabled: N, children: N ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: x })),
        /* @__PURE__ */ n.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ n.jsx(Yt, { title: "执行预览", meta: _?.token ? `令牌 ${_.token.slice(0, 8)}…` : "等待操作" }),
          !_ && /* @__PURE__ */ n.jsx(ha, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
          _ && /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
            /* @__PURE__ */ n.jsxs("div", { className: _.canCommit ? "preview-status pass" : _.ok ? "preview-status neutral" : "preview-status fail", children: [
              /* @__PURE__ */ n.jsx("i", {}),
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: _.canCommit ? "预演通过" : _.ok ? "执行结果" : "预演未通过" }),
                /* @__PURE__ */ n.jsx("span", { children: _.summary || _.error || "无摘要" })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("pre", { children: _.message || _.error || JSON.stringify(_.result, null, 2) }),
            _.result && /* @__PURE__ */ n.jsxs("details", { className: "evidence-details", children: [
              /* @__PURE__ */ n.jsx("summary", { children: "查看执行证据" }),
              /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(_.result, null, 2) })
            ] }),
            _.canCommit && /* @__PURE__ */ n.jsxs("div", { className: "commit-box", children: [
              /* @__PURE__ */ n.jsx("p", { children: "提交会真实修改排课或事务数据，并按操作需要导出工作簿或同步日历。" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger-button", onClick: () => {
                S();
              }, disabled: N, children: N ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ n.jsx(Zh, { preview: _, onClose: z })
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
function av({ preview: s, busy: o, onCommit: d, onCommitBatch: f, onClose: _ }) {
  const N = s.operation || "", b = s.input || {}, D = Object.entries(b).filter(([E, z]) => z != null && z !== "" && !E.startsWith("_")), S = s.result?.affected_dates, p = s.batchItems ?? [];
  return p.length ? /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ n.jsxs("div", { className: s.committed ? s.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ n.jsx("i", {}),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: s.committed ? s.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${p.length} 项` }),
        /* @__PURE__ */ n.jsx("span", { children: s.summary || s.message })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "batch-list", children: p.map((E, z) => {
      const x = s.committed ? { text: E.resultOk ? "已执行" : "失败", cls: E.resultOk ? "ok" : "error" } : { text: E.canCommit ? "可执行" : "未通过", cls: E.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ n.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ n.jsx("span", { className: "batch-index", children: z + 1 }),
        /* @__PURE__ */ n.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: zh[E.operation] || E.operation }),
          /* @__PURE__ */ n.jsx("span", { children: E.summary }),
          E.message && /* @__PURE__ */ n.jsx("small", { children: E.message })
        ] }),
        /* @__PURE__ */ n.jsx("span", { className: `batch-flag ${x.cls}`, children: x.text })
      ] }, E.token);
    }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "action-outcome-actions", children: [
      !s.committed && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: o || !p.some((E) => E.canCommit), onClick: () => {
        f?.() ?? Promise.resolve();
      }, children: o ? "正在提交…" : `全部执行（${p.filter((E) => E.canCommit).length} 项）` }),
      s.committed && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: _, children: "完成并返回" })
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
      N && /* @__PURE__ */ n.jsx("span", { className: "preview-op-badge", children: zh[N] || N }),
      D.length > 0 && /* @__PURE__ */ n.jsx("dl", { className: "preview-fields", children: D.map(([E, z]) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("dt", { children: tv[E] || E }),
        /* @__PURE__ */ n.jsx("dd", { children: String(z) })
      ] }, E)) }),
      S && S.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        S.map((E) => /* @__PURE__ */ n.jsx("span", { children: E.slice(5) }, E))
      ] })
    ] }),
    s.message && s.message !== s.summary && /* @__PURE__ */ n.jsx("pre", { className: "preview-message", children: s.message }),
    s.result && /* @__PURE__ */ n.jsxs("details", { className: "evidence-details", children: [
      /* @__PURE__ */ n.jsx("summary", { children: "查看执行证据" }),
      /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(s.result, null, 2) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "action-outcome-actions", children: [
      s.canCommit && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => {
        d();
      }, disabled: o, children: o ? "正在提交…" : "确认执行此方案" }),
      /* @__PURE__ */ n.jsx(Zh, { preview: s, onClose: _ })
    ] })
  ] });
}
function lv({ initialDraft: s, preview: o, busy: d, onPreview: f, onCommit: _, onCommitBatch: N, onClear: b, onClose: D }) {
  const S = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, p = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [E, z] = C.useState([S]), [x, Y] = C.useState(""), [V, se] = C.useState(!1), [W, te] = C.useState(""), [xe, k] = C.useState([]), [F, le] = C.useState(!1), re = C.useRef(null), $ = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function L() {
    const ee = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!ee) return;
    if (F) {
      re.current?.stop();
      return;
    }
    const Ne = new ee();
    Ne.lang = "zh-CN", Ne.interimResults = !1, Ne.continuous = !1, Ne.onresult = (Ce) => {
      const ze = Array.from(Ce.results).map((h) => h[0].transcript).join("").trim();
      ze && Y((h) => (h ? `${h} ` : "") + ze);
    }, Ne.onend = () => le(!1), Ne.onerror = () => le(!1), re.current = Ne, le(!0), Ne.start();
  }
  const ne = C.useRef(dr());
  C.useEffect(() => () => ne.current.invalidate(), []), C.useEffect(() => {
    s.nonce && (ne.current.invalidate(), se(!1), Y(s.text));
  }, [s.nonce, s.text]);
  function Z() {
    ne.current.invalidate(), se(!1), z([S]), Y(""), te(""), k([]), b();
  }
  async function X(ee) {
    const Ne = (ee ?? x).trim();
    if (!Ne || V) return;
    const Ce = ne.current.begin(), ze = E.slice(-10);
    z((h) => [...h, { role: "user", text: Ne }]), Y(""), k([]), se(!0), te(""), b();
    try {
      const h = await Qe("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: Ne, history: ze })
      });
      if (!ne.current.isCurrent(Ce)) return;
      if (!h.ok) throw new Error(h.error || "AI 没有生成方案");
      k(h.status === "need_clarification" ? h.options ?? [] : []), z((U) => [...U, { role: "assistant", text: h.reply || "方案已经生成，请检查右侧预演。" }]), h.status === "ready" && h.batch && h.previews?.length ? f({
        ok: !0,
        batch: !0,
        summary: h.reply,
        message: h.reply,
        batchItems: h.previews.map((U) => ({ operation: U.operation, token: U.token, summary: U.summary, canCommit: U.canCommit, message: U.message }))
      }) : h.status === "ready" && h.preview && f({
        ok: !0,
        token: h.preview.token,
        expiresAt: h.preview.expiresAt,
        summary: h.preview.summary,
        canCommit: h.preview.canCommit,
        message: h.preview.message,
        result: h.preview.result,
        operation: h.operation,
        input: h.input
      });
    } catch (h) {
      if (!ne.current.isCurrent(Ce)) return;
      const U = h.message || "AI 操作失败";
      te(U), z((J) => [...J, { role: "assistant", text: `这次没有生成预演：${U}` }]);
    } finally {
      ne.current.isCurrent(Ce) && se(!1);
    }
  }
  return /* @__PURE__ */ n.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ n.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ n.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ n.jsx("button", { className: "row-action-button", type: "button", onClick: Z, disabled: V, children: "清空对话" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: p.map((ee) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => Y(ee), children: ee }, ee)) }),
    /* @__PURE__ */ n.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          E.map((ee, Ne) => /* @__PURE__ */ n.jsx("div", { className: `ai-bubble ${ee.role}`, children: ee.text }, Ne)),
          V && /* @__PURE__ */ n.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        W && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "没有生成方案", text: W }),
        xe.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: xe.map((ee) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => {
          X(ee);
        }, children: ee }, ee)) }),
        /* @__PURE__ */ n.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ n.jsx(
            "textarea",
            {
              value: x,
              onChange: (ee) => Y(ee.target.value),
              onKeyDown: (ee) => {
                ee.key === "Enter" && !ee.shiftKey && (ee.preventDefault(), X());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          $ && /* @__PURE__ */ n.jsx("button", { type: "button", className: F ? "ai-mic listening" : "ai-mic", onClick: L, "aria-label": F ? "停止语音输入" : "语音输入", title: "语音输入", children: F ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            X();
          }, disabled: !x.trim() || V, children: V ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ n.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "AI 预演", meta: o?.token ? `令牌 ${o.token.slice(0, 8)}…` : "等待指令" }),
        !o && /* @__PURE__ */ n.jsx(ha, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        o && /* @__PURE__ */ n.jsx(av, { preview: o, busy: d, onCommit: _, onCommitBatch: N, onClose: D })
      ] })
    ] })
  ] });
}
function nv({ view: s, dashboard: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, onRetryPrev: b, retryingId: D, affairFeedback: S, onSync: p }) {
  if (s.kind === "system") return /* @__PURE__ */ n.jsx(cv, { dashboard: o, onSync: p, embedded: !0 });
  const E = s.kind === "day" ? s.items ? [...s.items].sort((z, x) => String(Fe(z) || "").localeCompare(String(Fe(x) || ""))) : o.items.filter((z) => Ni(z) === s.date).sort((z, x) => String(Fe(z) || "").localeCompare(String(Fe(x) || ""))) : [s.item];
  return E.length ? /* @__PURE__ */ n.jsx("div", { className: "context-item-list", children: E.map((z) => /* @__PURE__ */ n.jsx(
    iv,
    {
      item: z,
      onPrepare: d,
      onQuick: f,
      onAskAi: _,
      onRetry: N,
      onRetryPrev: b,
      retryingId: D,
      feedback: z.domain === "affair" ? S[z.id] : void 0
    },
    z.id
  )) }) : /* @__PURE__ */ n.jsx(ha, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function iv({ item: s, onPrepare: o, onQuick: d, onAskAi: f, onRetry: _, onRetryPrev: N, retryingId: b, feedback: D }) {
  const S = Fe(s), p = ["completed", "cancelled", "已完成", "已取消"].includes(s.status);
  return /* @__PURE__ */ n.jsxs("section", { className: `context-item-card ${_n(s)}${Sn(s) ? " temporary" : ""}`, "data-item-id": s.id, children: [
    /* @__PURE__ */ n.jsxs("header", { children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("span", { className: `context-domain ${s.domain}`, children: s.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ n.jsx("time", { children: S ? `${jt(S, { month: "long", day: "numeric", weekday: "short" })} ${Lt(S)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ n.jsx(_i, { value: s.status })
    ] }),
    /* @__PURE__ */ n.jsx("h3", { children: s.title }),
    /* @__PURE__ */ n.jsx("p", { children: s.domain === "course" ? `${s.duration || "—"} 分钟 · ${s.note || "常规课程"}` : s.note || s.window_label || "暂无补充说明" }),
    D && /* @__PURE__ */ n.jsx(Ml, { ok: D.ok, text: D.text }),
    D?.undo && N ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!b, onClick: () => {
      N(s);
    }, children: "撤销推进" }) : null,
    !p && /* @__PURE__ */ n.jsx("div", { className: "context-item-actions", children: s.domain === "course" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => f?.(`把${s.title} ${s.start_at?.slice(5, 10)} ${s.start_at?.slice(11, 16)} 的这节课调一下时间`), children: "AI 调时间" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", disabled: !!b, onClick: () => d?.("courseCancel", s), children: "本次不上" })
    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: !!b || D?.ok, onClick: () => d?.("affairComplete", s), children: D?.ok ? "已完成" : "完成" }),
      s.retry ? /* @__PURE__ */ n.jsx("button", { type: "button", className: D?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!b || !!D?.ok, onClick: () => {
        _(s);
      }, children: b === s.id ? "处理中…" : D?.buttonLabel || "没约上" }) : f ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", onClick: () => f(`把「${s.title}」（${s.id}）调整一下`), children: "调" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消…" })
    ] }) })
  ] });
}
function uv() {
  const [s, o] = C.useState({ loading: !0 }), d = C.useCallback(() => {
    o({ loading: !0 }), Qe("/api/versions").then((_) => o({ loading: !1, data: _ })).catch((_) => o({ loading: !1, error: _.message }));
  }, []);
  C.useEffect(() => {
    d();
  }, [d]);
  const f = s.data?.versions;
  return /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ n.jsx(Yt, { title: "版本与运行态" }),
    s.loading ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在读取版本…" }) : s.error ? /* @__PURE__ */ n.jsx(na, { label: "版本读取", ok: !1, detail: s.error }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "源码版本" }),
        /* @__PURE__ */ n.jsx("code", { children: f?.source ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "正式安装版" }),
        /* @__PURE__ */ n.jsx("code", { children: f?.installed ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "安装记录" }),
        /* @__PURE__ */ n.jsx("code", { children: f?.installsRecord ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "version-row", children: [
        /* @__PURE__ */ n.jsx("span", { children: "开发槽" }),
        /* @__PURE__ */ n.jsx("code", { children: f?.dev ?? "—" })
      ] }),
      /* @__PURE__ */ n.jsx(na, { label: "运行态", ok: !s.data?.devShadowing, detail: s.data?.note || "" })
    ] })
  ] });
}
function sv({ onSync: s }) {
  const [o, d] = C.useState({ loading: !0 }), f = C.useCallback(() => {
    d({ loading: !0 }), Qe("/api/calendar-health").then((D) => d({ loading: !1, data: D })).catch((D) => d({ loading: !1, error: D.message }));
  }, []);
  C.useEffect(() => {
    f();
  }, [f]);
  const _ = o.data?.diff, N = _?.toDelete ?? [], b = o.data?.inSync === !0;
  return /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ n.jsx(Yt, { title: "飞书日历对账" }),
    o.loading ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : o.error ? /* @__PURE__ */ n.jsx(na, { label: "日历盘点", ok: !1, detail: o.error }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(na, { label: "对账结果", ok: b, detail: b ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
      /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-summary", children: [
        /* @__PURE__ */ n.jsxs("span", { children: [
          "日历事件 ",
          _?.calendarEvents ?? "—"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "托管 ",
          _?.managedEvents ?? "—"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "期望 ",
          _?.desiredEvents ?? "—"
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "待建 ",
          _?.toCreate?.length ?? 0
        ] }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "待更新 ",
          _?.toUpdate?.length ?? 0
        ] }),
        /* @__PURE__ */ n.jsxs("span", { className: N.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          N.length
        ] })
      ] }),
      N.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-list", children: [
        N.slice(0, 8).map((D, S) => /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ n.jsx("span", { children: D.summary }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: String(D.start || "").slice(0, 16) })
        ] }, S)),
        N.length > 8 && /* @__PURE__ */ n.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          N.length - 8,
          " 条待删除…"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "row-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: f, children: "重新盘点" }),
        !b && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: s, children: "打开同步操作" })
      ] })
    ] })
  ] });
}
function cv({ dashboard: s, onSync: o, embedded: d = !1 }) {
  const f = s.health?.database?.verification;
  return /* @__PURE__ */ n.jsxs("div", { className: d ? "view-stack system-embedded" : "view-stack", children: [
    !d && /* @__PURE__ */ n.jsx(En, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ n.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ n.jsx(da, { label: "数据库完整性", value: f?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${f?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ n.jsx(da, { label: "活动事务", value: f?.counts?.active ?? "—", hint: `总数 ${f?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ n.jsx(da, { label: "排课 Agent", value: s.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ n.jsx(da, { label: "写入锁", value: s.health?.writer?.active ? "占用中" : "空闲", hint: s.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "读取链路" }),
        s.health?.reads && /* @__PURE__ */ n.jsx("div", { className: "system-read-health", children: Object.values(s.health.reads).map((_) => /* @__PURE__ */ n.jsx(na, { label: _.label, ok: _.ok, detail: _.detail }, _.label)) }),
        /* @__PURE__ */ n.jsx(Yt, { title: "契约检查" }),
        /* @__PURE__ */ n.jsx(na, { label: "事务数据库", ok: s.health?.database?.verification?.ok, detail: s.health?.database?.path }),
        /* @__PURE__ */ n.jsx(na, { label: "排课入口", ok: s.health?.schedule_agent?.exists, detail: s.health?.schedule_agent?.path }),
        /* @__PURE__ */ n.jsx(na, { label: "维护模式", ok: !s.health?.maintenance, detail: s.health?.maintenance ? "已开启" : "未开启" }),
        /* @__PURE__ */ n.jsx(na, { label: "写入锁", ok: !s.health?.writer?.active, detail: s.health?.writer?.active ? `由 ${s.health.writer.owner} 占用` : "当前空闲" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel action-panel", children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "飞书看板" }),
        /* @__PURE__ */ n.jsx("h3", { children: "同步前会先预演。" }),
        /* @__PURE__ */ n.jsxs("p", { children: [
          "正式同步固定使用 ",
          /* @__PURE__ */ n.jsx("code", { children: "--prune" }),
          "，清理已不存在的受管事件。"
        ] }),
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "打开同步操作" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(sv, { onSync: o }),
    /* @__PURE__ */ n.jsx(uv, {})
  ] });
}
function rv({ course: s, advice: o, onOpen: d, onPrepare: f, onQuick: _, onAskAi: N }) {
  return s ? /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: `next-course-banner next-course-open contextual-action-host ${_n(s)}${Sn(s) ? " temporary" : ""} actionable`,
      role: "button",
      tabIndex: 0,
      onClick: (b) => {
        b.target.closest("button") || d(b.currentTarget);
      },
      onKeyDown: (b) => {
        (b.key === "Enter" || b.key === " ") && (b.preventDefault(), d(b.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "next-course-time", children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: Lt(s.start_at) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "next-course-main", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "eyebrow", children: [
            "下一节课",
            Sn(s) && /* @__PURE__ */ n.jsx("span", { className: "temporary-badge", children: "临时" })
          ] }),
          /* @__PURE__ */ n.jsx("h3", { children: s.title }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            s.duration || "—",
            " 分钟 · ",
            s.note || "常规课程"
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: o?.tight ? "commute-chip tight" : "commute-chip", children: o?.available ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsxs("strong", { children: [
            o.minutes,
            " 分钟通勤"
          ] }),
          /* @__PURE__ */ n.jsx("span", { children: o.tight ? `间隔仅 ${o.gapMinutes} 分钟` : `最晚 ${Lt(o.leaveBy)} 出发` })
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "出发时间待定" }),
          /* @__PURE__ */ n.jsx("span", { children: o?.reason || "暂无通勤信息" })
        ] }) }),
        /* @__PURE__ */ n.jsx("span", { className: "next-course-cue", children: "查看详情 →" }),
        /* @__PURE__ */ n.jsx("div", { className: "next-course-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: _, onAskAi: N }) })
      ]
    }
  ) : /* @__PURE__ */ n.jsx("section", { className: "next-course-banner empty-next", children: /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "下一节课" }),
    /* @__PURE__ */ n.jsx("h3", { children: "未来范围内没有课程" })
  ] }) });
}
function Zh({ preview: s, onClose: o }) {
  return !s.committed || !s.ok ? null : /* @__PURE__ */ n.jsx("div", { className: "action-outcome-actions", children: /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: o, children: "完成并返回" }) });
}
function Yu({ label: s, items: o, value: d, onChange: f, busy: _ }) {
  return /* @__PURE__ */ n.jsx("nav", { className: "workbench-nav", "aria-label": s, children: o.map((N) => /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: d === N.id ? "selected" : "",
      "aria-label": `${N.label}${N.count ? `，${N.count} 项` : ""}`,
      "aria-pressed": d === N.id,
      disabled: _,
      onClick: () => f(N.id),
      children: [
        /* @__PURE__ */ n.jsx("span", { children: N.label }),
        N.count ? /* @__PURE__ */ n.jsx("strong", { children: N.count }) : null
      ]
    },
    N.id
  )) });
}
function Ml({ ok: s, text: o }) {
  return /* @__PURE__ */ n.jsx("small", { className: `inline-result ${s ? "ok" : "error"}`, children: o });
}
function da({ label: s, value: o, hint: d, tone: f }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `metric-card ${f}`, children: [
    /* @__PURE__ */ n.jsx("span", { children: s }),
    /* @__PURE__ */ n.jsx("strong", { children: o }),
    /* @__PURE__ */ n.jsx("small", { children: d })
  ] });
}
function ov({ item: s, onInspect: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, retryingId: b, feedback: D }) {
  const S = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status), p = !!d && !S;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${o ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${_n(s)}${Sn(s) ? " temporary" : ""}${p ? " actionable" : ""}`,
      "data-item-id": s.id,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      onClick: (E) => {
        E.target.closest("button") || o?.(s, E.currentTarget);
      },
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && o && (E.preventDefault(), o(s, E.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: `domain-dot ${s.domain}` }),
        /* @__PURE__ */ n.jsx("time", { children: Lt(Fe(s)) || "待定" }),
        /* @__PURE__ */ n.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.domain === "course" ? `${s.duration || "—"} 分钟` : s.note || s.window_label || "事务" }),
          D && /* @__PURE__ */ n.jsx(Ml, { ok: D.ok, text: D.text })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ n.jsx(_i, { value: s.status }) }),
        p && (d || f || _) && /* @__PURE__ */ n.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: f, onAskAi: _, onRetry: N, retryingId: b, feedback: D }) })
      ]
    }
  );
}
function fv({ item: s, onInspect: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, onRetryPrev: b, retryingId: D, feedback: S }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `quick-pending-item contextual-action-host ${_n(s)} actionable`,
      "data-item-id": s.id,
      role: "button",
      tabIndex: 0,
      onClick: (p) => {
        p.target.closest("button") || o(s, p.currentTarget);
      },
      onKeyDown: (p) => {
        (p.key === "Enter" || p.key === " ") && (p.preventDefault(), o(s, p.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.window_label || (s.next_prompt_at ? `下次提醒 ${jt(s.next_prompt_at)} ${Lt(s.next_prompt_at)}` : "待处理") }),
          S && /* @__PURE__ */ n.jsx(Ml, { ok: S.ok, text: S.text }),
          S?.undo && b ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!D, onClick: () => {
            b(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(_i, { value: s.status }) }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: f, onAskAi: _, onRetry: N, retryingId: D, feedback: S }) })
      ]
    }
  );
}
function _i({ value: s }) {
  return /* @__PURE__ */ n.jsx("span", { className: `status ${Yh(s)}`, children: qg[s] || s });
}
function Yt({ title: s, meta: o, action: d, onAction: f, actionDisabled: _ }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "panel-heading", children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("h3", { children: s }),
      o && /* @__PURE__ */ n.jsx("span", { children: o })
    ] }),
    d && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: f, disabled: _, children: d })
  ] });
}
function En({ eyebrow: s, title: o, description: d }) {
  return /* @__PURE__ */ n.jsxs("header", { className: "page-title", children: [
    /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: s }),
    /* @__PURE__ */ n.jsx("h2", { children: o }),
    /* @__PURE__ */ n.jsx("p", { children: d })
  ] });
}
function fe({ name: s, label: o, type: d = "text", placeholder: f, defaultValue: _, required: N = !1 }) {
  return /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: o }),
    /* @__PURE__ */ n.jsx("input", { name: s, type: d, placeholder: f, defaultValue: _, required: N })
  ] });
}
function na({ label: s, ok: o, detail: d }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "check-row", children: [
    /* @__PURE__ */ n.jsx("span", { className: o ? "check ok" : "check no", children: o ? "✓" : "!" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("strong", { children: s }),
      /* @__PURE__ */ n.jsx("small", { children: d })
    ] })
  ] });
}
function ha({ title: s, text: o, compact: d = !1 }) {
  return /* @__PURE__ */ n.jsxs("div", { className: d ? "empty compact" : "empty", children: [
    /* @__PURE__ */ n.jsx("strong", { children: s }),
    /* @__PURE__ */ n.jsx("span", { children: o })
  ] });
}
function Dl({ tone: s, title: o, text: d }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `notice ${s}`, role: s === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ n.jsx("strong", { children: o }),
    /* @__PURE__ */ n.jsx("span", { children: d })
  ] });
}
function br() {
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
const Dh = document.getElementById("root");
Dh && hg.createRoot(Dh).render(/* @__PURE__ */ n.jsx(Lg, { children: /* @__PURE__ */ n.jsx(Vg, {}) }));
