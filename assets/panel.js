var er = { exports: {} }, bi = {};
var dh;
function ng() {
  if (dh) return bi;
  dh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(f, E, p) {
    var b = null;
    if (p !== void 0 && (b = "" + p), E.key !== void 0 && (b = "" + E.key), "key" in E) {
      p = {};
      for (var z in E)
        z !== "key" && (p[z] = E[z]);
    } else p = E;
    return E = p.ref, {
      $$typeof: s,
      type: f,
      key: b,
      ref: E !== void 0 ? E : null,
      props: p
    };
  }
  return bi.Fragment = o, bi.jsx = d, bi.jsxs = d, bi;
}
var hh;
function ig() {
  return hh || (hh = 1, er.exports = ng()), er.exports;
}
var n = ig(), tr = { exports: {} }, je = {};
var mh;
function ug() {
  if (mh) return je;
  mh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), j = Symbol.iterator;
  function q(h) {
    return h === null || typeof h != "object" ? null : (h = j && h[j] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var K = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, de = {};
  function ae(h, O, $) {
    this.props = h, this.context = O, this.refs = de, this.updater = $ || K;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(h, O) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, O, "setState");
  }, ae.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function xe() {
  }
  xe.prototype = ae.prototype;
  function M(h, O, $) {
    this.props = h, this.context = O, this.refs = de, this.updater = $ || K;
  }
  var te = M.prototype = new xe();
  te.constructor = M, F(te, ae.prototype), te.isPureReactComponent = !0;
  var ne = Array.isArray;
  function ce() {
  }
  var G = { H: null, A: null, T: null, S: null }, L = Object.prototype.hasOwnProperty;
  function W(h, O, $) {
    var P = $.ref;
    return {
      $$typeof: s,
      type: h,
      key: O,
      ref: P !== void 0 ? P : null,
      props: $
    };
  }
  function I(h, O) {
    return W(h.type, O, h.props);
  }
  function V(h) {
    return typeof h == "object" && h !== null && h.$$typeof === s;
  }
  function ye(h) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function($) {
      return O[$];
    });
  }
  var Ve = /\/+/g;
  function Ge(h, O) {
    return typeof h == "object" && h !== null && h.key != null ? ye("" + h.key) : O.toString(36);
  }
  function Q(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(ce, ce) : (h.status = "pending", h.then(
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
  function S(h, O, $, P, he) {
    var pe = typeof h;
    (pe === "undefined" || pe === "boolean") && (h = null);
    var Se = !1;
    if (h === null) Se = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case s:
            case o:
              Se = !0;
              break;
            case _:
              return Se = h._init, S(
                Se(h._payload),
                O,
                $,
                P,
                he
              );
          }
      }
    if (Se)
      return he = he(h), Se = P === "" ? "." + Ge(h, 0) : P, ne(he) ? ($ = "", Se != null && ($ = Se.replace(Ve, "$&/") + "/"), S(he, O, $, "", function(ze) {
        return ze;
      })) : he != null && (V(he) && (he = I(
        he,
        $ + (he.key == null || h && h.key === he.key ? "" : ("" + he.key).replace(
          Ve,
          "$&/"
        ) + "/") + Se
      )), O.push(he)), 1;
    Se = 0;
    var it = P === "" ? "." : P + ":";
    if (ne(h))
      for (var J = 0; J < h.length; J++)
        P = h[J], pe = it + Ge(P, J), Se += S(
          P,
          O,
          $,
          pe,
          he
        );
    else if (J = q(h), typeof J == "function")
      for (h = J.call(h), J = 0; !(P = h.next()).done; )
        P = P.value, pe = it + Ge(P, J++), Se += S(
          P,
          O,
          $,
          pe,
          he
        );
    else if (pe === "object") {
      if (typeof h.then == "function")
        return S(
          Q(h),
          O,
          $,
          P,
          he
        );
      throw O = String(h), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Se;
  }
  function Y(h, O, $) {
    if (h == null) return h;
    var P = [], he = 0;
    return S(h, P, "", "", function(pe) {
      return O.call($, pe, he++);
    }), P;
  }
  function X(h) {
    if (h._status === -1) {
      var O = h._result;
      O = O(), O.then(
        function($) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = $);
        },
        function($) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = $);
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
  }, ee = {
    map: Y,
    forEach: function(h, O, $) {
      Y(
        h,
        function() {
          O.apply(this, arguments);
        },
        $
      );
    },
    count: function(h) {
      var O = 0;
      return Y(h, function() {
        O++;
      }), O;
    },
    toArray: function(h) {
      return Y(h, function(O) {
        return O;
      }) || [];
    },
    only: function(h) {
      if (!V(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return je.Activity = R, je.Children = ee, je.Component = ae, je.Fragment = d, je.Profiler = E, je.PureComponent = M, je.StrictMode = f, je.Suspense = N, je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, je.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return G.H.useMemoCache(h);
    }
  }, je.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, je.cacheSignal = function() {
    return null;
  }, je.cloneElement = function(h, O, $) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var P = F({}, h.props), he = h.key;
    if (O != null)
      for (pe in O.key !== void 0 && (he = "" + O.key), O)
        !L.call(O, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && O.ref === void 0 || (P[pe] = O[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) P.children = $;
    else if (1 < pe) {
      for (var Se = Array(pe), it = 0; it < pe; it++)
        Se[it] = arguments[it + 2];
      P.children = Se;
    }
    return W(h.type, he, P);
  }, je.createContext = function(h) {
    return h = {
      $$typeof: b,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: p,
      _context: h
    }, h;
  }, je.createElement = function(h, O, $) {
    var P, he = {}, pe = null;
    if (O != null)
      for (P in O.key !== void 0 && (pe = "" + O.key), O)
        L.call(O, P) && P !== "key" && P !== "__self" && P !== "__source" && (he[P] = O[P]);
    var Se = arguments.length - 2;
    if (Se === 1) he.children = $;
    else if (1 < Se) {
      for (var it = Array(Se), J = 0; J < Se; J++)
        it[J] = arguments[J + 2];
      he.children = it;
    }
    if (h && h.defaultProps)
      for (P in Se = h.defaultProps, Se)
        he[P] === void 0 && (he[P] = Se[P]);
    return W(h, pe, he);
  }, je.createRef = function() {
    return { current: null };
  }, je.forwardRef = function(h) {
    return { $$typeof: z, render: h };
  }, je.isValidElement = V, je.lazy = function(h) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: h },
      _init: X
    };
  }, je.memo = function(h, O) {
    return {
      $$typeof: v,
      type: h,
      compare: O === void 0 ? null : O
    };
  }, je.startTransition = function(h) {
    var O = G.T, $ = {};
    G.T = $;
    try {
      var P = h(), he = G.S;
      he !== null && he($, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(ce, g);
    } catch (pe) {
      g(pe);
    } finally {
      O !== null && $.types !== null && (O.types = $.types), G.T = O;
    }
  }, je.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, je.use = function(h) {
    return G.H.use(h);
  }, je.useActionState = function(h, O, $) {
    return G.H.useActionState(h, O, $);
  }, je.useCallback = function(h, O) {
    return G.H.useCallback(h, O);
  }, je.useContext = function(h) {
    return G.H.useContext(h);
  }, je.useDebugValue = function() {
  }, je.useDeferredValue = function(h, O) {
    return G.H.useDeferredValue(h, O);
  }, je.useEffect = function(h, O) {
    return G.H.useEffect(h, O);
  }, je.useEffectEvent = function(h) {
    return G.H.useEffectEvent(h);
  }, je.useId = function() {
    return G.H.useId();
  }, je.useImperativeHandle = function(h, O, $) {
    return G.H.useImperativeHandle(h, O, $);
  }, je.useInsertionEffect = function(h, O) {
    return G.H.useInsertionEffect(h, O);
  }, je.useLayoutEffect = function(h, O) {
    return G.H.useLayoutEffect(h, O);
  }, je.useMemo = function(h, O) {
    return G.H.useMemo(h, O);
  }, je.useOptimistic = function(h, O) {
    return G.H.useOptimistic(h, O);
  }, je.useReducer = function(h, O, $) {
    return G.H.useReducer(h, O, $);
  }, je.useRef = function(h) {
    return G.H.useRef(h);
  }, je.useState = function(h) {
    return G.H.useState(h);
  }, je.useSyncExternalStore = function(h, O, $) {
    return G.H.useSyncExternalStore(
      h,
      O,
      $
    );
  }, je.useTransition = function() {
    return G.H.useTransition();
  }, je.version = "19.2.8", je;
}
var yh;
function mr() {
  return yh || (yh = 1, tr.exports = ug()), tr.exports;
}
var w = mr(), ar = { exports: {} }, xi = {}, lr = { exports: {} }, nr = {};
var gh;
function sg() {
  return gh || (gh = 1, (function(s) {
    function o(S, Y) {
      var X = S.length;
      S.push(Y);
      e: for (; 0 < X; ) {
        var g = X - 1 >>> 1, ee = S[g];
        if (0 < E(ee, Y))
          S[g] = Y, S[X] = ee, X = g;
        else break e;
      }
    }
    function d(S) {
      return S.length === 0 ? null : S[0];
    }
    function f(S) {
      if (S.length === 0) return null;
      var Y = S[0], X = S.pop();
      if (X !== Y) {
        S[0] = X;
        e: for (var g = 0, ee = S.length, h = ee >>> 1; g < h; ) {
          var O = 2 * (g + 1) - 1, $ = S[O], P = O + 1, he = S[P];
          if (0 > E($, X))
            P < ee && 0 > E(he, $) ? (S[g] = he, S[P] = X, g = P) : (S[g] = $, S[O] = X, g = O);
          else if (P < ee && 0 > E(he, X))
            S[g] = he, S[P] = X, g = P;
          else break e;
        }
      }
      return Y;
    }
    function E(S, Y) {
      var X = S.sortIndex - Y.sortIndex;
      return X !== 0 ? X : S.id - Y.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      s.unstable_now = function() {
        return p.now();
      };
    } else {
      var b = Date, z = b.now();
      s.unstable_now = function() {
        return b.now() - z;
      };
    }
    var N = [], v = [], _ = 1, R = null, j = 3, q = !1, K = !1, F = !1, de = !1, ae = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function te(S) {
      for (var Y = d(v); Y !== null; ) {
        if (Y.callback === null) f(v);
        else if (Y.startTime <= S)
          f(v), Y.sortIndex = Y.expirationTime, o(N, Y);
        else break;
        Y = d(v);
      }
    }
    function ne(S) {
      if (F = !1, te(S), !K)
        if (d(N) !== null)
          K = !0, ce || (ce = !0, ye());
        else {
          var Y = d(v);
          Y !== null && Q(ne, Y.startTime - S);
        }
    }
    var ce = !1, G = -1, L = 5, W = -1;
    function I() {
      return de ? !0 : !(s.unstable_now() - W < L);
    }
    function V() {
      if (de = !1, ce) {
        var S = s.unstable_now();
        W = S;
        var Y = !0;
        try {
          e: {
            K = !1, F && (F = !1, xe(G), G = -1), q = !0;
            var X = j;
            try {
              t: {
                for (te(S), R = d(N); R !== null && !(R.expirationTime > S && I()); ) {
                  var g = R.callback;
                  if (typeof g == "function") {
                    R.callback = null, j = R.priorityLevel;
                    var ee = g(
                      R.expirationTime <= S
                    );
                    if (S = s.unstable_now(), typeof ee == "function") {
                      R.callback = ee, te(S), Y = !0;
                      break t;
                    }
                    R === d(N) && f(N), te(S);
                  } else f(N);
                  R = d(N);
                }
                if (R !== null) Y = !0;
                else {
                  var h = d(v);
                  h !== null && Q(
                    ne,
                    h.startTime - S
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              R = null, j = X, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? ye() : ce = !1;
        }
      }
    }
    var ye;
    if (typeof M == "function")
      ye = function() {
        M(V);
      };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), Ge = Ve.port2;
      Ve.port1.onmessage = V, ye = function() {
        Ge.postMessage(null);
      };
    } else
      ye = function() {
        ae(V, 0);
      };
    function Q(S, Y) {
      G = ae(function() {
        S(s.unstable_now());
      }, Y);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, s.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : L = 0 < S ? Math.floor(1e3 / S) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, s.unstable_next = function(S) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = j;
      }
      var X = j;
      j = Y;
      try {
        return S();
      } finally {
        j = X;
      }
    }, s.unstable_requestPaint = function() {
      de = !0;
    }, s.unstable_runWithPriority = function(S, Y) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var X = j;
      j = S;
      try {
        return Y();
      } finally {
        j = X;
      }
    }, s.unstable_scheduleCallback = function(S, Y, X) {
      var g = s.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? g + X : g) : X = g, S) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return ee = X + ee, S = {
        id: _++,
        callback: Y,
        priorityLevel: S,
        startTime: X,
        expirationTime: ee,
        sortIndex: -1
      }, X > g ? (S.sortIndex = X, o(v, S), d(N) === null && S === d(v) && (F ? (xe(G), G = -1) : F = !0, Q(ne, X - g))) : (S.sortIndex = ee, o(N, S), K || q || (K = !0, ce || (ce = !0, ye()))), S;
    }, s.unstable_shouldYield = I, s.unstable_wrapCallback = function(S) {
      var Y = j;
      return function() {
        var X = j;
        j = Y;
        try {
          return S.apply(this, arguments);
        } finally {
          j = X;
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
  function o(N) {
    var v = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        v += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + N + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, E = /* @__PURE__ */ Symbol.for("react.portal");
  function p(N, v, _) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: R == null ? null : "" + R,
      children: N,
      containerInfo: v,
      implementation: _
    };
  }
  var b = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(N, v) {
    if (N === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, pt.createPortal = function(N, v) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(o(299));
    return p(N, v, null, _);
  }, pt.flushSync = function(N) {
    var v = b.T, _ = f.p;
    try {
      if (b.T = null, f.p = 2, N) return N();
    } finally {
      b.T = v, f.p = _, f.d.f();
    }
  }, pt.preconnect = function(N, v) {
    typeof N == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(N, v));
  }, pt.prefetchDNS = function(N) {
    typeof N == "string" && f.d.D(N);
  }, pt.preinit = function(N, v) {
    if (typeof N == "string" && v && typeof v.as == "string") {
      var _ = v.as, R = z(_, v.crossOrigin), j = typeof v.integrity == "string" ? v.integrity : void 0, q = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      _ === "style" ? f.d.S(
        N,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: R,
          integrity: j,
          fetchPriority: q
        }
      ) : _ === "script" && f.d.X(N, {
        crossOrigin: R,
        integrity: j,
        fetchPriority: q,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, pt.preinitModule = function(N, v) {
    if (typeof N == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var _ = z(
            v.as,
            v.crossOrigin
          );
          f.d.M(N, {
            crossOrigin: _,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(N);
  }, pt.preload = function(N, v) {
    if (typeof N == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var _ = v.as, R = z(_, v.crossOrigin);
      f.d.L(N, _, {
        crossOrigin: R,
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
  }, pt.preloadModule = function(N, v) {
    if (typeof N == "string")
      if (v) {
        var _ = z(v.as, v.crossOrigin);
        f.d.m(N, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(N);
  }, pt.requestFormReset = function(N) {
    f.d.r(N);
  }, pt.unstable_batchedUpdates = function(N, v) {
    return N(v);
  }, pt.useFormState = function(N, v, _) {
    return b.H.useFormState(N, v, _);
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
  if (xh) return xi;
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
  function E(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function p(e) {
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
  function z(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(e) {
    if (p(e) !== e)
      throw Error(f(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = p(e), t === null) throw Error(f(188));
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
          if (u === a) return N(i), e;
          if (u === l) return N(i), t;
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
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = _(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, j = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), K = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), de = /* @__PURE__ */ Symbol.for("react.strict_mode"), ae = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), ne = /* @__PURE__ */ Symbol.for("react.suspense"), ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), I = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function ye(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ve = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ge(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ve ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case F:
        return "Fragment";
      case ae:
        return "Profiler";
      case de:
        return "StrictMode";
      case ne:
        return "Suspense";
      case ce:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case K:
          return "Portal";
        case M:
          return e.displayName || "Context";
        case xe:
          return (e._context.displayName || "Context") + ".Consumer";
        case te:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return t = e.displayName || null, t !== null ? t : Ge(e.type) || "Memo";
        case L:
          t = e._payload, e = e._init;
          try {
            return Ge(e(t));
          } catch {
          }
      }
    return null;
  }
  var Q = Array.isArray, S = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, g = [], ee = -1;
  function h(e) {
    return { current: e };
  }
  function O(e) {
    0 > ee || (e.current = g[ee], g[ee] = null, ee--);
  }
  function $(e, t) {
    ee++, g[ee] = e.current, e.current = t;
  }
  var P = h(null), he = h(null), pe = h(null), Se = h(null);
  function it(e, t) {
    switch ($(pe, t), $(he, e), $(P, null), t.nodeType) {
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
    O(P), $(P, e);
  }
  function J() {
    O(P), O(he), O(pe);
  }
  function ze(e) {
    e.memoizedState !== null && $(Se, e);
    var t = P.current, a = kd(t, e.type);
    t !== a && ($(he, e), $(P, a));
  }
  function ve(e) {
    he.current === e && (O(P), O(he)), Se.current === e && (O(Se), yi._currentValue = X);
  }
  var le, Dt;
  function et(e) {
    if (le === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        le = t && t[1] || "", Dt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + le + e + Dt;
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
                } catch (D) {
                  var C = D;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (D) {
                  C = D;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                C = D;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (D) {
            if (D && C && typeof D.stack == "string")
              return [D.stack, C.stack];
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
        var m = c.split(`
`), A = r.split(`
`);
        for (i = l = 0; l < m.length && !m[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < A.length && !A[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === m.length || i === A.length)
          for (l = m.length - 1, i = A.length - 1; 1 <= l && 0 <= i && m[l] !== A[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (m[l] !== A[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || m[l] !== A[i]) {
                  var k = `
` + m[l].replace(" at new ", " at ");
                  return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ct = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? et(a) : "";
  }
  function ua(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return et(e.type);
      case 16:
        return et("Lazy");
      case 13:
        return e.child !== t && t !== null ? et("Suspense Fallback") : et("Suspense");
      case 19:
        return et("SuspenseList");
      case 0:
      case 15:
        return ia(e.type, !1);
      case 11:
        return ia(e.type.render, !1);
      case 1:
        return ia(e.type, !0);
      case 31:
        return et("Activity");
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
  var ut = Object.prototype.hasOwnProperty, ea = s.unstable_scheduleCallback, ft = s.unstable_cancelCallback, sa = s.unstable_shouldYield, Ol = s.unstable_requestPaint, De = s.unstable_now, cl = s.unstable_getCurrentPriorityLevel, _i = s.unstable_ImmediatePriority, _n = s.unstable_UserBlockingPriority, Ua = s.unstable_NormalPriority, Tn = s.unstable_LowPriority, An = s.unstable_IdlePriority, Ti = s.log, Vu = s.unstable_setDisableYieldValue, ma = null, dt = null;
  function Mt(e) {
    if (typeof Ti == "function" && Vu(e), dt && typeof dt.setStrictMode == "function")
      try {
        dt.setStrictMode(ma, e);
      } catch {
      }
  }
  var bt = Math.clz32 ? Math.clz32 : rl, Gu = Math.log, Xu = Math.LN2;
  function rl(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Gu(e) / Xu | 0) | 0;
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
  function Ul(e, t, a) {
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
  function Rl() {
    var e = ka;
    return ka <<= 1, (ka & 62914560) === 0 && (ka = 4194304), e;
  }
  function wn(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function fl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function U(e, t, a, l, i, u) {
    var c = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, m = e.expirationTimes, A = e.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var k = 31 - bt(a), H = 1 << k;
      r[k] = 0, m[k] = -1;
      var C = A[k];
      if (C !== null)
        for (A[k] = null, k = 0; k < C.length; k++) {
          var D = C[k];
          D !== null && (D.lane &= -536870913);
        }
      a &= ~H;
    }
    l !== 0 && Z(e, l, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function Z(e, t, a) {
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
  function re(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : be(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function be(e) {
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
  function Me(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function me() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ih(e.type));
  }
  function St(e, t) {
    var a = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = a;
    }
  }
  var vt = Math.random().toString(36).slice(2), Qe = "__reactFiber$" + vt, Nt = "__reactProps$" + vt, kl = "__reactContainer$" + vt, Qu = "__reactEvents$" + vt, Kh = "__reactListeners$" + vt, Jh = "__reactHandles$" + vt, xr = "__reactResources$" + vt, zn = "__reactMarker$" + vt;
  function Zu(e) {
    delete e[Qe], delete e[Nt], delete e[Qu], delete e[Kh], delete e[Jh];
  }
  function ql(e) {
    var t = e[Qe];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[kl] || a[Qe]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Gd(e); e !== null; ) {
            if (a = e[Qe]) return a;
            e = Gd(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Bl(e) {
    if (e = e[Qe] || e[kl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Dn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Hl(e) {
    var t = e[xr];
    return t || (t = e[xr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rt(e) {
    e[zn] = !0;
  }
  var jr = /* @__PURE__ */ new Set(), Sr = {};
  function dl(e, t) {
    Ll(e, t), Ll(e + "Capture", t);
  }
  function Ll(e, t) {
    for (Sr[e] = t, e = 0; e < t.length; e++)
      jr.add(t[e]);
  }
  var $h = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nr = {}, Er = {};
  function Fh(e) {
    return ut.call(Er, e) ? !0 : ut.call(Nr, e) ? !1 : $h.test(e) ? Er[e] = !0 : (Nr[e] = !0, !1);
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
  function wi(e) {
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
  function Ju(e, t, a, l, i, u, c, r) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? $u(e, c, Xt(t)) : a != null ? $u(e, c, Xt(a)) : l != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Xt(r) : e.removeAttribute("name");
  }
  function Ar(e, t, a, l, i, u, c, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ku(e);
        return;
      }
      a = a != null ? "" + Xt(a) : "", t = t != null ? "" + Xt(t) : a, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = r ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Ku(e);
  }
  function $u(e, t, a) {
    t === "number" && wi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Yl(e, t, a, l) {
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
  function Cr(e, t, a) {
    if (t != null && (t = "" + Xt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Xt(a) : "";
  }
  function wr(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(f(92));
        if (Q(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Xt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Ku(e);
  }
  function Vl(e, t) {
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
  function zi(e) {
    return tm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function va() {
  }
  var Wu = null;
  function Iu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gl = null, Xl = null;
  function Mr(e) {
    var t = Bl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Nt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ju(
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
                Ju(
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
          Cr(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Yl(e, !!a.multiple, t, !1);
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
      if (Pu = !1, (Gl !== null || Xl !== null) && (vu(), Gl && (t = Gl, e = Xl, Xl = Gl = null, Mr(t), e)))
        for (t = 0; t < e.length; t++) Mr(e[t]);
    }
  }
  function Mn(e, t) {
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
      var On = {};
      Object.defineProperty(On, "passive", {
        get: function() {
          es = !0;
        }
      }), window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
    } catch {
      es = !1;
    }
  var qa = null, ts = null, Di = null;
  function Ur() {
    if (Di) return Di;
    var e, t = ts, a = t.length, l, i = "value" in qa ? qa.value : qa.textContent, u = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++) ;
    var c = a - e;
    for (l = 1; l <= c && t[a - l] === i[u - l]; l++) ;
    return Di = i.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Mi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Oi() {
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
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Oi : Rr, this.isPropagationStopped = Rr, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Oi);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Oi);
      },
      persist: function() {
      },
      isPersistent: Oi
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
  }, Ui = Et(hl), Un = R({}, hl, { view: 0, detail: 0 }), am = Et(Un), as, ls, Rn, Ri = R({}, Un, {
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
      return "movementX" in e ? e.movementX : (e !== Rn && (Rn && e.type === "mousemove" ? (as = e.screenX - Rn.screenX, ls = e.screenY - Rn.screenY) : ls = as = 0, Rn = e), as);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ls;
    }
  }), kr = Et(Ri), lm = R({}, Ri, { dataTransfer: 0 }), nm = Et(lm), im = R({}, Un, { relatedTarget: 0 }), ns = Et(im), um = R({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = Et(um), cm = R({}, hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rm = Et(cm), om = R({}, hl, { data: 0 }), qr = Et(om), fm = {
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
  var ym = R({}, Un, {
    key: function(e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dm[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Mi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), gm = Et(ym), vm = R({}, Ri, {
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
  }), Br = Et(vm), pm = R({}, Un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: is
  }), bm = Et(pm), xm = R({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jm = Et(xm), Sm = R({}, Ri, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nm = Et(Sm), Em = R({}, hl, {
    newState: 0,
    oldState: 0
  }), _m = Et(Em), Tm = [9, 13, 27, 32], us = pa && "CompositionEvent" in window, kn = null;
  pa && "documentMode" in document && (kn = document.documentMode);
  var Am = pa && "TextEvent" in window && !kn, Hr = pa && (!us || kn && 8 < kn && 11 >= kn), Lr = " ", Yr = !1;
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
  var Ql = !1;
  function Cm(e, t) {
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
  function wm(e, t) {
    if (Ql)
      return e === "compositionend" || !us && Vr(e, t) ? (e = Ur(), Di = ts = qa = null, Ql = !1, e) : null;
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
    Gl ? Xl ? Xl.push(l) : Xl = [l] : Gl = l, t = Eu(t, "onChange"), 0 < t.length && (a = new Ui(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var qn = null, Bn = null;
  function Dm(e) {
    wd(e, 0);
  }
  function ki(e) {
    var t = Dn(e);
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
        var Jr = document.createElement("div");
        Jr.setAttribute("oninput", "return;"), cs = typeof Jr.oninput == "function";
      }
      ss = cs;
    } else ss = !1;
    Kr = ss && (!document.documentMode || 9 < document.documentMode);
  }
  function $r() {
    qn && (qn.detachEvent("onpropertychange", Fr), Bn = qn = null);
  }
  function Fr(e) {
    if (e.propertyName === "value" && ki(Bn)) {
      var t = [];
      Qr(
        t,
        Bn,
        e,
        Iu(e)
      ), Or(Dm, t);
    }
  }
  function Mm(e, t, a) {
    e === "focusin" ? ($r(), qn = t, Bn = a, qn.attachEvent("onpropertychange", Fr)) : e === "focusout" && $r();
  }
  function Om(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ki(Bn);
  }
  function Um(e, t) {
    if (e === "click") return ki(t);
  }
  function Rm(e, t) {
    if (e === "input" || e === "change")
      return ki(t);
  }
  function km(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : km;
  function Hn(e, t) {
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
    for (var t = wi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = wi(e.document);
    }
    return t;
  }
  function rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qm = pa && "documentMode" in document && 11 >= document.documentMode, Zl = null, os = null, Ln = null, fs = !1;
  function to(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fs || Zl == null || Zl !== wi(l) || (l = Zl, "selectionStart" in l && rs(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ln && Hn(Ln, l) || (Ln = l, l = Eu(os, "onSelect"), 0 < l.length && (t = new Ui(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Zl)));
  }
  function ml(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Kl = {
    animationend: ml("Animation", "AnimationEnd"),
    animationiteration: ml("Animation", "AnimationIteration"),
    animationstart: ml("Animation", "AnimationStart"),
    transitionrun: ml("Transition", "TransitionRun"),
    transitionstart: ml("Transition", "TransitionStart"),
    transitioncancel: ml("Transition", "TransitionCancel"),
    transitionend: ml("Transition", "TransitionEnd")
  }, ds = {}, ao = {};
  pa && (ao = document.createElement("div").style, "AnimationEvent" in window || (delete Kl.animationend.animation, delete Kl.animationiteration.animation, delete Kl.animationstart.animation), "TransitionEvent" in window || delete Kl.transitionend.transition);
  function yl(e) {
    if (ds[e]) return ds[e];
    if (!Kl[e]) return e;
    var t = Kl[e], a;
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
  var qi = typeof reportError == "function" ? reportError : function(e) {
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
  function Bi() {
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
  function Hi(e, t, a, l) {
    Zt[Jl++] = e, Zt[Jl++] = t, Zt[Jl++] = a, Zt[Jl++] = l, ms |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ys(e, t, a, l) {
    return Hi(e, t, a, l), Li(e);
  }
  function gl(e, t) {
    return Hi(e, null, null, t), Li(e);
  }
  function co(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - bt(a), e = u.hiddenUpdates, l = e[i], l === null ? e[i] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Li(e) {
    if (50 < ci)
      throw ci = 0, Ec = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var $l = {};
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
  function Yi(e, t, a, l, i, u) {
    var c = 0;
    if (l = e, typeof e == "function") gs(e) && (c = 1);
    else if (typeof e == "string")
      c = Zy(
        e,
        a,
        P.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case W:
          return e = Ut(31, a, t, i), e.elementType = W, e.lanes = u, e;
        case F:
          return vl(a.children, i, u, t);
        case de:
          c = 8, i |= 24;
          break;
        case ae:
          return e = Ut(12, a, t, i | 2), e.elementType = ae, e.lanes = u, e;
        case ne:
          return e = Ut(13, a, t, i), e.elementType = ne, e.lanes = u, e;
        case ce:
          return e = Ut(19, a, t, i), e.elementType = ce, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
                c = 10;
                break e;
              case xe:
                c = 9;
                break e;
              case te:
                c = 11;
                break e;
              case G:
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
  var Fl = [], Wl = 0, Vi = null, Yn = 0, Jt = [], $t = 0, Ba = null, ca = 1, ra = "";
  function xa(e, t) {
    Fl[Wl++] = Yn, Fl[Wl++] = Vi, Vi = e, Yn = t;
  }
  function ho(e, t, a) {
    Jt[$t++] = ca, Jt[$t++] = ra, Jt[$t++] = Ba, Ba = e;
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
    for (; e === Vi; )
      Vi = Fl[--Wl], Fl[Wl] = null, Yn = Fl[--Wl], Fl[Wl] = null;
    for (; e === Ba; )
      Ba = Jt[--$t], Jt[$t] = null, ra = Jt[--$t], Jt[$t] = null, ca = Jt[--$t], Jt[$t] = null;
  }
  function mo(e, t) {
    Jt[$t++] = ca, Jt[$t++] = ra, Jt[$t++] = Ba, ca = t.id, ra = t.overflow, Ba = e;
  }
  var ht = null, Ze = null, we = !1, Ha = null, Ft = !1, js = Error(f(519));
  function La(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Vn(Kt(t, e)), js;
  }
  function yo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Qe] = e, t[Nt] = l, a) {
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
        for (a = 0; a < oi.length; a++)
          Te(oi[a], t);
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
        Te("invalid", t), Ar(
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
        Te("invalid", t), wr(t, l.value, l.defaultValue, l.children);
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
  function Il(e) {
    if (e !== ht) return !1;
    if (!we) return go(e), we = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Hc(e.type, e.memoizedProps)), a = !a), a && Ze && La(e), go(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ze = Vd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ze = Vd(e);
    } else
      t === 27 ? (t = Ze, el(e.type) ? (e = Xc, Xc = null, Ze = e) : Ze = t) : Ze = ht ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pl() {
    Ze = ht = null, we = !1;
  }
  function Ss() {
    var e = Ha;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), Ha = null), e;
  }
  function Vn(e) {
    Ha === null ? Ha = [e] : Ha.push(e);
  }
  var Ns = h(null), bl = null, ja = null;
  function Ya(e, t, a) {
    $(Ns, t._currentValue), t._currentValue = a;
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
          for (var m = 0; m < t.length; m++)
            if (r.context === t[m]) {
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
  function Pl(e, t, a, l) {
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
      } else if (i === Se.current) {
        if (c = i.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(yi) : e = [yi]);
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
  function Gi(e) {
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
  function Xi(e, t) {
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
  }, Gm = s.unstable_scheduleCallback, Xm = s.unstable_NormalPriority, tt = {
    $$typeof: M,
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
  function Gn(e) {
    e.refCount--, e.refCount === 0 && Gm(Xm, function() {
      e.controller.abort();
    });
  }
  var Xn = null, As = 0, en = 0, tn = null;
  function Qm(e, t) {
    if (Xn === null) {
      var a = Xn = [];
      As = 0, en = zc(), tn = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return As++, t.then(po, po), t;
  }
  function po() {
    if (--As === 0 && Xn !== null) {
      tn !== null && (tn.status = "fulfilled");
      var e = Xn;
      Xn = null, en = 0, tn = null;
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
  var bo = S.S;
  S.S = function(e, t) {
    ld = De(), typeof t == "object" && t !== null && typeof t.then == "function" && Qm(e, t), bo !== null && bo(e, t);
  };
  var jl = h(null);
  function Cs() {
    var e = jl.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Qi(e, t) {
    t === null ? $(jl, jl.current) : $(jl, t.pool);
  }
  function xo() {
    var e = Cs();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var an = Error(f(460)), ws = Error(f(474)), Zi = Error(f(542)), Ki = { then: function() {
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
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
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
        throw Nl = t, an;
    }
  }
  function Sl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Nl = a, an) : a;
    }
  }
  var Nl = null;
  function No() {
    if (Nl === null) throw Error(f(459));
    var e = Nl;
    return Nl = null, e;
  }
  function Eo(e) {
    if (e === an || e === Zi)
      throw Error(f(483));
  }
  var ln = null, Qn = 0;
  function Ji(e) {
    var t = Qn;
    return Qn += 1, ln === null && (ln = []), So(ln, e, t);
  }
  function Zn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function $i(e, t) {
    throw t.$$typeof === j ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function _o(e) {
    function t(x, y) {
      if (e) {
        var T = x.deletions;
        T === null ? (x.deletions = [y], x.flags |= 16) : T.push(y);
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
    function i(x, y) {
      return x = ba(x, y), x.index = 0, x.sibling = null, x;
    }
    function u(x, y, T) {
      return x.index = T, e ? (T = x.alternate, T !== null ? (T = T.index, T < y ? (x.flags |= 67108866, y) : T) : (x.flags |= 67108866, y)) : (x.flags |= 1048576, y);
    }
    function c(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function r(x, y, T, B) {
      return y === null || y.tag !== 6 ? (y = vs(T, x.mode, B), y.return = x, y) : (y = i(y, T), y.return = x, y);
    }
    function m(x, y, T, B) {
      var fe = T.type;
      return fe === F ? k(
        x,
        y,
        T.props.children,
        B,
        T.key
      ) : y !== null && (y.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === L && Sl(fe) === y.type) ? (y = i(y, T.props), Zn(y, T), y.return = x, y) : (y = Yi(
        T.type,
        T.key,
        T.props,
        null,
        x.mode,
        B
      ), Zn(y, T), y.return = x, y);
    }
    function A(x, y, T, B) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== T.containerInfo || y.stateNode.implementation !== T.implementation ? (y = ps(T, x.mode, B), y.return = x, y) : (y = i(y, T.children || []), y.return = x, y);
    }
    function k(x, y, T, B, fe) {
      return y === null || y.tag !== 7 ? (y = vl(
        T,
        x.mode,
        B,
        fe
      ), y.return = x, y) : (y = i(y, T), y.return = x, y);
    }
    function H(x, y, T) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = vs(
          "" + y,
          x.mode,
          T
        ), y.return = x, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case q:
            return T = Yi(
              y.type,
              y.key,
              y.props,
              null,
              x.mode,
              T
            ), Zn(T, y), T.return = x, T;
          case K:
            return y = ps(
              y,
              x.mode,
              T
            ), y.return = x, y;
          case L:
            return y = Sl(y), H(x, y, T);
        }
        if (Q(y) || ye(y))
          return y = vl(
            y,
            x.mode,
            T,
            null
          ), y.return = x, y;
        if (typeof y.then == "function")
          return H(x, Ji(y), T);
        if (y.$$typeof === M)
          return H(
            x,
            Xi(x, y),
            T
          );
        $i(x, y);
      }
      return null;
    }
    function C(x, y, T, B) {
      var fe = y !== null ? y.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return fe !== null ? null : r(x, y, "" + T, B);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case q:
            return T.key === fe ? m(x, y, T, B) : null;
          case K:
            return T.key === fe ? A(x, y, T, B) : null;
          case L:
            return T = Sl(T), C(x, y, T, B);
        }
        if (Q(T) || ye(T))
          return fe !== null ? null : k(x, y, T, B, null);
        if (typeof T.then == "function")
          return C(
            x,
            y,
            Ji(T),
            B
          );
        if (T.$$typeof === M)
          return C(
            x,
            y,
            Xi(x, T),
            B
          );
        $i(x, T);
      }
      return null;
    }
    function D(x, y, T, B, fe) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return x = x.get(T) || null, r(y, x, "" + B, fe);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case q:
            return x = x.get(
              B.key === null ? T : B.key
            ) || null, m(y, x, B, fe);
          case K:
            return x = x.get(
              B.key === null ? T : B.key
            ) || null, A(y, x, B, fe);
          case L:
            return B = Sl(B), D(
              x,
              y,
              T,
              B,
              fe
            );
        }
        if (Q(B) || ye(B))
          return x = x.get(T) || null, k(y, x, B, fe, null);
        if (typeof B.then == "function")
          return D(
            x,
            y,
            T,
            Ji(B),
            fe
          );
        if (B.$$typeof === M)
          return D(
            x,
            y,
            T,
            Xi(y, B),
            fe
          );
        $i(y, B);
      }
      return null;
    }
    function ue(x, y, T, B) {
      for (var fe = null, Oe = null, se = y, Ee = y = 0, Ce = null; se !== null && Ee < T.length; Ee++) {
        se.index > Ee ? (Ce = se, se = null) : Ce = se.sibling;
        var Ue = C(
          x,
          se,
          T[Ee],
          B
        );
        if (Ue === null) {
          se === null && (se = Ce);
          break;
        }
        e && se && Ue.alternate === null && t(x, se), y = u(Ue, y, Ee), Oe === null ? fe = Ue : Oe.sibling = Ue, Oe = Ue, se = Ce;
      }
      if (Ee === T.length)
        return a(x, se), we && xa(x, Ee), fe;
      if (se === null) {
        for (; Ee < T.length; Ee++)
          se = H(x, T[Ee], B), se !== null && (y = u(
            se,
            y,
            Ee
          ), Oe === null ? fe = se : Oe.sibling = se, Oe = se);
        return we && xa(x, Ee), fe;
      }
      for (se = l(se); Ee < T.length; Ee++)
        Ce = D(
          se,
          x,
          Ee,
          T[Ee],
          B
        ), Ce !== null && (e && Ce.alternate !== null && se.delete(
          Ce.key === null ? Ee : Ce.key
        ), y = u(
          Ce,
          y,
          Ee
        ), Oe === null ? fe = Ce : Oe.sibling = Ce, Oe = Ce);
      return e && se.forEach(function(il) {
        return t(x, il);
      }), we && xa(x, Ee), fe;
    }
    function ge(x, y, T, B) {
      if (T == null) throw Error(f(151));
      for (var fe = null, Oe = null, se = y, Ee = y = 0, Ce = null, Ue = T.next(); se !== null && !Ue.done; Ee++, Ue = T.next()) {
        se.index > Ee ? (Ce = se, se = null) : Ce = se.sibling;
        var il = C(x, se, Ue.value, B);
        if (il === null) {
          se === null && (se = Ce);
          break;
        }
        e && se && il.alternate === null && t(x, se), y = u(il, y, Ee), Oe === null ? fe = il : Oe.sibling = il, Oe = il, se = Ce;
      }
      if (Ue.done)
        return a(x, se), we && xa(x, Ee), fe;
      if (se === null) {
        for (; !Ue.done; Ee++, Ue = T.next())
          Ue = H(x, Ue.value, B), Ue !== null && (y = u(Ue, y, Ee), Oe === null ? fe = Ue : Oe.sibling = Ue, Oe = Ue);
        return we && xa(x, Ee), fe;
      }
      for (se = l(se); !Ue.done; Ee++, Ue = T.next())
        Ue = D(se, x, Ee, Ue.value, B), Ue !== null && (e && Ue.alternate !== null && se.delete(Ue.key === null ? Ee : Ue.key), y = u(Ue, y, Ee), Oe === null ? fe = Ue : Oe.sibling = Ue, Oe = Ue);
      return e && se.forEach(function(lg) {
        return t(x, lg);
      }), we && xa(x, Ee), fe;
    }
    function Le(x, y, T, B) {
      if (typeof T == "object" && T !== null && T.type === F && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case q:
            e: {
              for (var fe = T.key; y !== null; ) {
                if (y.key === fe) {
                  if (fe = T.type, fe === F) {
                    if (y.tag === 7) {
                      a(
                        x,
                        y.sibling
                      ), B = i(
                        y,
                        T.props.children
                      ), B.return = x, x = B;
                      break e;
                    }
                  } else if (y.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === L && Sl(fe) === y.type) {
                    a(
                      x,
                      y.sibling
                    ), B = i(y, T.props), Zn(B, T), B.return = x, x = B;
                    break e;
                  }
                  a(x, y);
                  break;
                } else t(x, y);
                y = y.sibling;
              }
              T.type === F ? (B = vl(
                T.props.children,
                x.mode,
                B,
                T.key
              ), B.return = x, x = B) : (B = Yi(
                T.type,
                T.key,
                T.props,
                null,
                x.mode,
                B
              ), Zn(B, T), B.return = x, x = B);
            }
            return c(x);
          case K:
            e: {
              for (fe = T.key; y !== null; ) {
                if (y.key === fe)
                  if (y.tag === 4 && y.stateNode.containerInfo === T.containerInfo && y.stateNode.implementation === T.implementation) {
                    a(
                      x,
                      y.sibling
                    ), B = i(y, T.children || []), B.return = x, x = B;
                    break e;
                  } else {
                    a(x, y);
                    break;
                  }
                else t(x, y);
                y = y.sibling;
              }
              B = ps(T, x.mode, B), B.return = x, x = B;
            }
            return c(x);
          case L:
            return T = Sl(T), Le(
              x,
              y,
              T,
              B
            );
        }
        if (Q(T))
          return ue(
            x,
            y,
            T,
            B
          );
        if (ye(T)) {
          if (fe = ye(T), typeof fe != "function") throw Error(f(150));
          return T = fe.call(T), ge(
            x,
            y,
            T,
            B
          );
        }
        if (typeof T.then == "function")
          return Le(
            x,
            y,
            Ji(T),
            B
          );
        if (T.$$typeof === M)
          return Le(
            x,
            y,
            Xi(x, T),
            B
          );
        $i(x, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, y !== null && y.tag === 6 ? (a(x, y.sibling), B = i(y, T), B.return = x, x = B) : (a(x, y), B = vs(T, x.mode, B), B.return = x, x = B), c(x)) : a(x, y);
    }
    return function(x, y, T, B) {
      try {
        Qn = 0;
        var fe = Le(
          x,
          y,
          T,
          B
        );
        return ln = null, fe;
      } catch (se) {
        if (se === an || se === Zi) throw se;
        var Oe = Ut(29, se, null, x.mode);
        return Oe.lanes = B, Oe.return = x, Oe;
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
    if (l = l.shared, (Re & 2) !== 0) {
      var i = l.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = Li(e), co(e, null, a), t;
    }
    return Hi(e, l, t, a), Li(e);
  }
  function Kn(e, t, a) {
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
      var e = tn;
      if (e !== null) throw e;
    }
  }
  function $n(e, t, a, l) {
    Os = !1;
    var i = e.updateQueue;
    Va = !1;
    var u = i.firstBaseUpdate, c = i.lastBaseUpdate, r = i.shared.pending;
    if (r !== null) {
      i.shared.pending = null;
      var m = r, A = m.next;
      m.next = null, c === null ? u = A : c.next = A, c = m;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, r = k.lastBaseUpdate, r !== c && (r === null ? k.firstBaseUpdate = A : r.next = A, k.lastBaseUpdate = m));
    }
    if (u !== null) {
      var H = i.baseState;
      c = 0, k = A = m = null, r = u;
      do {
        var C = r.lane & -536870913, D = C !== r.lane;
        if (D ? (Ae & C) === C : (l & C) === C) {
          C !== 0 && C === en && (Os = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var ue = e, ge = r;
            C = t;
            var Le = a;
            switch (ge.tag) {
              case 1:
                if (ue = ge.payload, typeof ue == "function") {
                  H = ue.call(Le, H, C);
                  break e;
                }
                H = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = ge.payload, C = typeof ue == "function" ? ue.call(Le, H, C) : ue, C == null) break e;
                H = R({}, H, C);
                break e;
              case 2:
                Va = !0;
            }
          }
          C = r.callback, C !== null && (e.flags |= 64, D && (e.flags |= 8192), D = i.callbacks, D === null ? i.callbacks = [C] : D.push(C));
        } else
          D = {
            lane: C,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, k === null ? (A = k = D, m = H) : k = k.next = D, c |= C;
        if (r = r.next, r === null) {
          if (r = i.shared.pending, r === null)
            break;
          D = r, r = D.next, D.next = null, i.lastBaseUpdate = D, i.shared.pending = null;
        }
      } while (!0);
      k === null && (m = H), i.baseState = m, i.firstBaseUpdate = A, i.lastBaseUpdate = k, u === null && (i.shared.lanes = 0), $a |= c, e.lanes = c, e.memoizedState = H;
    }
  }
  function Ao(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Co(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Ao(a[e], t);
  }
  var nn = h(null), Fi = h(0);
  function wo(e, t) {
    e = Da, $(Fi, e), $(nn, t), Da = e | t.baseLanes;
  }
  function Us() {
    $(Fi, Da), $(nn, nn.current);
  }
  function Rs() {
    Da = Fi.current, O(nn), O(Fi);
  }
  var Rt = h(null), Wt = null;
  function Qa(e) {
    var t = e.alternate;
    $(Ie, Ie.current & 1), $(Rt, e), Wt === null && (t === null || nn.current !== null || t.memoizedState !== null) && (Wt = e);
  }
  function ks(e) {
    $(Ie, Ie.current), $(Rt, e), Wt === null && (Wt = e);
  }
  function zo(e) {
    e.tag === 22 ? ($(Ie, Ie.current), $(Rt, e), Wt === null && (Wt = e)) : Za();
  }
  function Za() {
    $(Ie, Ie.current), $(Rt, Rt.current);
  }
  function kt(e) {
    O(Rt), Wt === e && (Wt = null), O(Ie);
  }
  var Ie = h(0);
  function Wi(e) {
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
  var Na = 0, Ne = null, Be = null, at = null, Ii = !1, un = !1, _l = !1, Pi = 0, Fn = 0, sn = null, Km = 0;
  function Fe() {
    throw Error(f(321));
  }
  function qs(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ot(e[a], t[a])) return !1;
    return !0;
  }
  function Bs(e, t, a, l, i, u) {
    return Na = u, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = e === null || e.memoizedState === null ? mf : Ps, _l = !1, u = a(l, i), _l = !1, un && (u = Mo(
      t,
      a,
      l,
      i
    )), Do(e), u;
  }
  function Do(e) {
    S.H = Pn;
    var t = Be !== null && Be.next !== null;
    if (Na = 0, at = Be = Ne = null, Ii = !1, Fn = 0, sn = null, t) throw Error(f(300));
    e === null || lt || (e = e.dependencies, e !== null && Gi(e) && (lt = !0));
  }
  function Mo(e, t, a, l) {
    Ne = e;
    var i = 0;
    do {
      if (un && (sn = null), Fn = 0, un = !1, 25 <= i) throw Error(f(301));
      if (i += 1, at = Be = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      S.H = yf, u = t(a, l);
    } while (un);
    return u;
  }
  function Jm() {
    var e = S.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Wn(t) : t, e = e.useState()[0], (Be !== null ? Be.memoizedState : null) !== e && (Ne.flags |= 1024), t;
  }
  function Hs() {
    var e = Pi !== 0;
    return Pi = 0, e;
  }
  function Ls(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Ys(e) {
    if (Ii) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ii = !1;
    }
    Na = 0, at = Be = Ne = null, un = !1, Fn = Pi = 0, sn = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? Ne.memoizedState = at = e : at = at.next = e, at;
  }
  function Pe() {
    if (Be === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = at === null ? Ne.memoizedState : at.next;
    if (t !== null)
      at = t, Be = e;
    else {
      if (e === null)
        throw Ne.alternate === null ? Error(f(467)) : Error(f(310));
      Be = e, e = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null
      }, at === null ? Ne.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function eu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wn(e) {
    var t = Fn;
    return Fn += 1, sn === null && (sn = []), e = So(sn, e, t), t = Ne, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? mf : Ps), e;
  }
  function tu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Wn(e);
      if (e.$$typeof === M) return mt(e);
    }
    throw Error(f(438, String(e)));
  }
  function Vs(e) {
    var t = null, a = Ne.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Ne.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = eu(), Ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = I;
    return t.index++, a;
  }
  function Ea(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function au(e) {
    var t = Pe();
    return Gs(t, Be, e);
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
      var r = c = null, m = null, A = t, k = !1;
      do {
        var H = A.lane & -536870913;
        if (H !== A.lane ? (Ae & H) === H : (Na & H) === H) {
          var C = A.revertLane;
          if (C === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), H === en && (k = !0);
          else if ((Na & C) === C) {
            A = A.next, C === en && (k = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, m === null ? (r = m = H, c = u) : m = m.next = H, Ne.lanes |= C, $a |= C;
          H = A.action, _l && a(u, H), u = A.hasEagerState ? A.eagerState : a(u, H);
        } else
          C = {
            lane: H,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, m === null ? (r = m = C, c = u) : m = m.next = C, Ne.lanes |= H, $a |= H;
        A = A.next;
      } while (A !== null && A !== t);
      if (m === null ? c = u : m.next = r, !Ot(u, e.memoizedState) && (lt = !0, k && (a = tn, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = c, e.baseQueue = m, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Xs(e) {
    var t = Pe(), a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, i = a.pending, u = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var c = i = i.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== i);
      Ot(u, t.memoizedState) || (lt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Oo(e, t, a) {
    var l = Ne, i = Pe(), u = we;
    if (u) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = t();
    var c = !Ot(
      (Be || i).memoizedState,
      a
    );
    if (c && (i.memoizedState = a, lt = !0), i = i.queue, Ks(ko.bind(null, l, i, e), [
      e
    ]), i.getSnapshot !== t || c || at !== null && at.memoizedState.tag & 1) {
      if (l.flags |= 2048, cn(
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
      ), Ye === null) throw Error(f(349));
      u || (Na & 127) !== 0 || Uo(l, t, a);
    }
    return a;
  }
  function Uo(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ne.updateQueue, t === null ? (t = eu(), Ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
    t !== null && wt(t, e, 2);
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
      Be,
      typeof l == "function" ? l : Ea
    );
  }
  function $m(e, t, a, l, i) {
    if (iu(e)) throw Error(f(485));
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
      S.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, Lo(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Lo(e, t) {
    var a = t.action, l = t.payload, i = e.state;
    if (t.isTransition) {
      var u = S.T, c = {};
      S.T = c;
      try {
        var r = a(i, l), m = S.S;
        m !== null && m(c, r), Yo(e, t, r);
      } catch (A) {
        Zs(e, t, A);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), S.T = u;
      }
    } else
      try {
        u = a(i, l), Yo(e, t, u);
      } catch (A) {
        Zs(e, t, A);
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
    if (we) {
      var a = Ye.formState;
      if (a !== null) {
        e: {
          var l = Ne;
          if (we) {
            if (Ze) {
              t: {
                for (var i = Ze, u = Ft; i.nodeType !== 8; ) {
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
                Ze = It(
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
      Ne,
      l
    ), l.dispatch = a, l = Qs(!1), u = Is.bind(
      null,
      Ne,
      !1,
      l.queue
    ), l = xt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = i, a = $m.bind(
      null,
      Ne,
      i,
      u,
      a
    ), i.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Zo(e) {
    var t = Pe();
    return Ko(t, Be, e);
  }
  function Ko(e, t, a) {
    if (t = Gs(
      e,
      t,
      Xo
    )[0], e = au(Ea)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Wn(t);
      } catch (c) {
        throw c === an ? Zi : c;
      }
    else l = t;
    t = Pe();
    var i = t.queue, u = i.dispatch;
    return a !== t.memoizedState && (Ne.flags |= 2048, cn(
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
    var t = Pe(), a = Be;
    if (a !== null)
      return Ko(t, a, e);
    Pe(), t = t.memoizedState, a = Pe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function cn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Ne.updateQueue, t === null && (t = eu(), Ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function $o() {
    return Pe().memoizedState;
  }
  function lu(e, t, a, l) {
    var i = xt();
    Ne.flags |= e, i.memoizedState = cn(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function nu(e, t, a, l) {
    var i = Pe();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    Be !== null && l !== null && qs(l, Be.memoizedState.deps) ? i.memoizedState = cn(t, u, a, l) : (Ne.flags |= e, i.memoizedState = cn(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Fo(e, t) {
    lu(8390656, 8, e, t);
  }
  function Ks(e, t) {
    nu(2048, 8, e, t);
  }
  function Wm(e) {
    Ne.flags |= 4;
    var t = Ne.updateQueue;
    if (t === null)
      t = eu(), Ne.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Wo(e) {
    var t = Pe().memoizedState;
    return Wm({ ref: t, nextImpl: e }), function() {
      if ((Re & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Io(e, t) {
    return nu(4, 2, e, t);
  }
  function Po(e, t) {
    return nu(4, 4, e, t);
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
    a = a != null ? a.concat([e]) : null, nu(4, 4, ef.bind(null, t, e), a);
  }
  function Js() {
  }
  function af(e, t) {
    var a = Pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && qs(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function lf(e, t) {
    var a = Pe();
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
  function $s(e, t, a) {
    return a === void 0 || (Na & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = id(), Ne.lanes |= e, $a |= e, a);
  }
  function nf(e, t, a, l) {
    return Ot(a, t) ? a : nn.current !== null ? (e = $s(e, a, l), Ot(e, t) || (lt = !0), e) : (Na & 42) === 0 || (Na & 1073741824) !== 0 && (Ae & 261930) === 0 ? (lt = !0, e.memoizedState = a) : (e = id(), Ne.lanes |= e, $a |= e, t);
  }
  function uf(e, t, a, l, i) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var c = S.T, r = {};
    S.T = r, Is(e, !1, t, a);
    try {
      var m = i(), A = S.S;
      if (A !== null && A(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var k = Zm(
          m,
          l
        );
        In(
          e,
          t,
          k,
          Ht(e)
        );
      } else
        In(
          e,
          t,
          l,
          Ht(e)
        );
    } catch (H) {
      In(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Ht()
      );
    } finally {
      Y.p = u, c !== null && r.types !== null && (c.types = r.types), S.T = c;
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
      X,
      a === null ? Im : function() {
        return cf(e), a(l);
      }
    );
  }
  function sf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: X
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
    t.next === null && (t = e.alternate.memoizedState), In(
      e,
      t.next.queue,
      {},
      Ht()
    );
  }
  function Ws() {
    return mt(yi);
  }
  function rf() {
    return Pe().memoizedState;
  }
  function of() {
    return Pe().memoizedState;
  }
  function Pm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ht();
          e = Ga(a);
          var l = Xa(t, e, a);
          l !== null && (wt(l, t, a), Kn(l, t, a)), t = { cache: Ts() }, e.payload = t;
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
    }, iu(e) ? df(t, a) : (a = ys(e, t, a, l), a !== null && (wt(a, e, l), hf(a, t, l)));
  }
  function ff(e, t, a) {
    var l = Ht();
    In(e, t, a, l);
  }
  function In(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iu(e)) df(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, r = u(c, a);
          if (i.hasEagerState = !0, i.eagerState = r, Ot(r, c))
            return Hi(e, t, i, 0), Ye === null && Bi(), !1;
        } catch {
        }
      if (a = ys(e, t, i, l), a !== null)
        return wt(a, e, l), hf(a, t, l), !0;
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
    }, iu(e)) {
      if (t) throw Error(f(479));
    } else
      t = ys(
        e,
        a,
        l,
        2
      ), t !== null && wt(t, e, 2);
  }
  function iu(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function df(e, t) {
    un = Ii = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function hf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ie(e, a);
    }
  }
  var Pn = {
    readContext: mt,
    use: tu,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useLayoutEffect: Fe,
    useInsertionEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    useHostTransitionStatus: Fe,
    useFormState: Fe,
    useActionState: Fe,
    useOptimistic: Fe,
    useMemoCache: Fe,
    useCacheRefresh: Fe
  };
  Pn.useEffectEvent = Fe;
  var mf = {
    readContext: mt,
    use: tu,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: Fo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, lu(
        4194308,
        4,
        ef.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return lu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      lu(4, 2, e, t);
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
        Ne,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Qs(e);
      var t = e.queue, a = ff.bind(null, Ne, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Js,
    useDeferredValue: function(e, t) {
      var a = xt();
      return $s(a, e, t);
    },
    useTransition: function() {
      var e = Qs(!1);
      return e = uf.bind(
        null,
        Ne,
        e.queue,
        !0,
        !1
      ), xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Ne, i = xt();
      if (we) {
        if (a === void 0)
          throw Error(f(407));
        a = a();
      } else {
        if (a = t(), Ye === null)
          throw Error(f(349));
        (Ae & 127) !== 0 || Uo(l, t, a);
      }
      i.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return i.queue = u, Fo(ko.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, cn(
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
      var e = xt(), t = Ye.identifierPrefix;
      if (we) {
        var a = ra, l = ca;
        a = (l & ~(1 << 32 - bt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pi++, 0 < a && (t += "H" + a.toString(32)), t += "_";
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
        Ne,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Vs,
    useCacheRefresh: function() {
      return xt().memoizedState = Pm.bind(
        null,
        Ne
      );
    },
    useEffectEvent: function(e) {
      var t = xt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Re & 2) !== 0)
          throw Error(f(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ps = {
    readContext: mt,
    use: tu,
    useCallback: af,
    useContext: mt,
    useEffect: Ks,
    useImperativeHandle: tf,
    useInsertionEffect: Io,
    useLayoutEffect: Po,
    useMemo: lf,
    useReducer: au,
    useRef: $o,
    useState: function() {
      return au(Ea);
    },
    useDebugValue: Js,
    useDeferredValue: function(e, t) {
      var a = Pe();
      return nf(
        a,
        Be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = au(Ea)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Wn(e),
        t
      ];
    },
    useSyncExternalStore: Oo,
    useId: rf,
    useHostTransitionStatus: Ws,
    useFormState: Zo,
    useActionState: Zo,
    useOptimistic: function(e, t) {
      var a = Pe();
      return Ho(a, Be, e, t);
    },
    useMemoCache: Vs,
    useCacheRefresh: of
  };
  Ps.useEffectEvent = Wo;
  var yf = {
    readContext: mt,
    use: tu,
    useCallback: af,
    useContext: mt,
    useEffect: Ks,
    useImperativeHandle: tf,
    useInsertionEffect: Io,
    useLayoutEffect: Po,
    useMemo: lf,
    useReducer: Xs,
    useRef: $o,
    useState: function() {
      return Xs(Ea);
    },
    useDebugValue: Js,
    useDeferredValue: function(e, t) {
      var a = Pe();
      return Be === null ? $s(a, e, t) : nf(
        a,
        Be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xs(Ea)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Wn(e),
        t
      ];
    },
    useSyncExternalStore: Oo,
    useId: rf,
    useHostTransitionStatus: Ws,
    useFormState: Jo,
    useActionState: Jo,
    useOptimistic: function(e, t) {
      var a = Pe();
      return Be !== null ? Ho(a, Be, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Vs,
    useCacheRefresh: of
  };
  yf.useEffectEvent = Wo;
  function ec(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : R({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var tc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), i = Ga(l);
      i.payload = t, a != null && (i.callback = a), t = Xa(e, i, l), t !== null && (wt(t, e, l), Kn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), i = Ga(l);
      i.tag = 1, i.payload = t, a != null && (i.callback = a), t = Xa(e, i, l), t !== null && (wt(t, e, l), Kn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ht(), l = Ga(a);
      l.tag = 2, t != null && (l.callback = t), t = Xa(e, l, a), t !== null && (wt(t, e, a), Kn(t, e, a));
    }
  };
  function gf(e, t, a, l, i, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Hn(a, l) || !Hn(i, u) : !0;
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
      a === t && (a = R({}, a));
      for (var i in e)
        a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function pf(e) {
    qi(e);
  }
  function bf(e) {
    console.error(e);
  }
  function xf(e) {
    qi(e);
  }
  function uu(e, t) {
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
      uu(e, t);
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
      if (t = a.alternate, t !== null && Pl(
        t,
        a,
        i,
        !0
      ), a = Rt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Wt === null ? pu() : a.alternate === null && We === 0 && (We = 3), a.flags &= -257, a.flags |= 65536, a.lanes = i, l === Ki ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Ac(e, l, i)), !1;
          case 22:
            return a.flags |= 65536, l === Ki ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Ac(e, l, i)), !1;
        }
        throw Error(f(435, a.tag));
      }
      return Ac(e, l, i), pu(), !1;
    }
    if (we)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, l !== js && (e = Error(f(422), { cause: l }), Vn(Kt(e, a)))) : (l !== js && (t = Error(f(423), {
        cause: l
      }), Vn(
        Kt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, l = Kt(l, a), i = ac(
        e.stateNode,
        l,
        i
      ), Ms(e, i), We !== 4 && (We = 2)), !1;
    var u = Error(f(520), { cause: l });
    if (u = Kt(u, a), si === null ? si = [u] : si.push(u), We !== 4 && (We = 2), t === null) return !0;
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
  var lc = Error(f(461)), lt = !1;
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
    ), r = Hs(), e !== null && !lt ? (Ls(e, t, i), _a(e, t, i)) : (we && r && bs(t), t.flags |= 1, yt(e, t, l, i), t.child);
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
      )) : (e = Yi(
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
      if (a = a.compare, a = a !== null ? a : Hn, a(c, l) && e.ref === t.ref)
        return _a(e, t, i);
    }
    return t.flags |= 1, e = ba(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Tf(e, t, a, l, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Hn(u, l) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = l = u, fc(e, i))
          (e.flags & 131072) !== 0 && (lt = !0);
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
  function Af(e, t, a, l) {
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
        return Cf(
          e,
          t,
          u,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Qi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? wo(t, u) : Us(), zo(t);
      else
        return l = t.lanes = 536870912, Cf(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Qi(t, u.cachePool), wo(t, u), Za(), t.memoizedState = null) : (e !== null && Qi(t, null), Us(), Za());
    return yt(e, t, i, a), t.child;
  }
  function ei(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Cf(e, t, a, l, i) {
    var u = Cs();
    return u = u === null ? null : { parent: tt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Qi(t, null), Us(), zo(t), e !== null && Pl(e, t, l, !0), t.childLanes = i, null;
  }
  function su(e, t) {
    return t = ru(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function wf(e, t, a) {
    return El(t, e.child, null, a), e = su(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
  }
  function ay(e, t, a) {
    var l = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (l.mode === "hidden")
          return e = su(t, l), t.lanes = 536870912, ei(null, e);
        if (ks(t), (e = Ze) ? (e = Yd(
          e,
          Ft
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ba !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = oo(e), a.return = t, t.child = a, ht = t, Ze = null)) : e = null, e === null) throw La(t);
        return t.lanes = 536870912, null;
      }
      return su(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (ks(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = wf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (lt || Pl(e, t, a, !1), i = (a & e.childLanes) !== 0, lt || i) {
        if (l = Ye, l !== null && (c = re(l, a), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, gl(e, c), wt(l, e, c), lc;
        pu(), t = wf(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Ze = It(c.nextSibling), ht = t, we = !0, Ha = null, Ft = !1, e !== null && mo(t, e), t = su(t, l), t.flags |= 4096;
      return t;
    }
    return e = ba(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function cu(e, t) {
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
    ), l = Hs(), e !== null && !lt ? (Ls(e, t, i), _a(e, t, i)) : (we && l && bs(t), t.flags |= 1, yt(e, t, a, i), t.child);
  }
  function zf(e, t, a, l, i, u) {
    return xl(t), t.updateQueue = null, a = Mo(
      t,
      l,
      a,
      i
    ), Do(e), l = Hs(), e !== null && !lt ? (Ls(e, t, u), _a(e, t, u)) : (we && l && bs(t), t.flags |= 1, yt(e, t, a, u), t.child);
  }
  function Df(e, t, a, l, i) {
    if (xl(t), t.stateNode === null) {
      var u = $l, c = a.contextType;
      typeof c == "object" && c !== null && (u = mt(c)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = tc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, zs(t), c = a.contextType, u.context = typeof c == "object" && c !== null ? mt(c) : $l, u.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (ec(
        t,
        a,
        c,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && tc.enqueueReplaceState(u, u.state, null), $n(t, l, u, i), Jn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, m = Tl(a, r);
      u.props = m;
      var A = u.context, k = a.contextType;
      c = $l, typeof k == "object" && k !== null && (c = mt(k));
      var H = a.getDerivedStateFromProps;
      k = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, k || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || A !== c) && vf(
        t,
        u,
        l,
        c
      ), Va = !1;
      var C = t.memoizedState;
      u.state = C, $n(t, l, u, i), Jn(), A = t.memoizedState, r || C !== A || Va ? (typeof H == "function" && (ec(
        t,
        a,
        H,
        l
      ), A = t.memoizedState), (m = Va || gf(
        t,
        a,
        m,
        l,
        C,
        A,
        c
      )) ? (k || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = A), u.props = l, u.state = A, u.context = c, l = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Ds(e, t), c = t.memoizedProps, k = Tl(a, c), u.props = k, H = t.pendingProps, C = u.context, A = a.contextType, m = $l, typeof A == "object" && A !== null && (m = mt(A)), r = a.getDerivedStateFromProps, (A = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== H || C !== m) && vf(
        t,
        u,
        l,
        m
      ), Va = !1, C = t.memoizedState, u.state = C, $n(t, l, u, i), Jn();
      var D = t.memoizedState;
      c !== H || C !== D || Va || e !== null && e.dependencies !== null && Gi(e.dependencies) ? (typeof r == "function" && (ec(
        t,
        a,
        r,
        l
      ), D = t.memoizedState), (k = Va || gf(
        t,
        a,
        k,
        l,
        C,
        D,
        m
      ) || e !== null && e.dependencies !== null && Gi(e.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, D, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        D,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = D), u.props = l, u.state = D, u.context = m, l = k) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, cu(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = El(
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
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0), c && (i = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (i ? Qa(t) : Za(), (e = Ze) ? (e = Yd(
          e,
          Ft
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ba !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = oo(e), a.return = t, t.child = a, ht = t, Ze = null)) : e = null, e === null) throw La(t);
        return Gc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = l.children;
      return l = l.fallback, i ? (Za(), i = t.mode, r = ru(
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
      ), t.memoizedState = ic, ei(null, l)) : (Qa(t), cc(t, r));
    }
    var m = e.memoizedState;
    if (m !== null && (r = m.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Qa(t), t.flags &= -257, t = rc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Za(), t.child = e.child, t.flags |= 128, t = null) : (Za(), r = l.fallback, i = t.mode, l = ru(
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
        ), t.memoizedState = ic, t = ei(null, l));
      else if (Qa(t), Gc(r)) {
        if (c = r.nextSibling && r.nextSibling.dataset, c) var A = c.dgst;
        c = A, l = Error(f(419)), l.stack = "", l.digest = c, Vn({ value: l, source: null, stack: null }), t = rc(
          e,
          t,
          a
        );
      } else if (lt || Pl(e, t, a, !1), c = (a & e.childLanes) !== 0, lt || c) {
        if (c = Ye, c !== null && (l = re(c, a), l !== 0 && l !== m.retryLane))
          throw m.retryLane = l, gl(e, l), wt(c, e, l), lc;
        Vc(r) || pu(), t = rc(
          e,
          t,
          a
        );
      } else
        Vc(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Ze = It(
          r.nextSibling
        ), ht = t, we = !0, Ha = null, Ft = !1, e !== null && mo(t, e), t = cc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Za(), r = l.fallback, i = t.mode, m = e.child, A = m.sibling, l = ba(m, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = m.subtreeFlags & 65011712, A !== null ? r = ba(
      A,
      r
    ) : (r = vl(
      r,
      i,
      a,
      null
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, ei(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = uc(a) : (i = r.cachePool, i !== null ? (m = tt._currentValue, i = i.parent !== m ? { parent: m, pool: m } : i) : i = xo(), r = {
      baseLanes: r.baseLanes | a,
      cachePool: i
    }), l.memoizedState = r, l.childLanes = sc(
      e,
      c,
      a
    ), t.memoizedState = ic, ei(e.child, l)) : (Qa(t), a = e.child, e = a.sibling, a = ba(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function cc(e, t) {
    return t = ru(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ru(e, t) {
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
    var c = Ie.current, r = (c & 2) !== 0;
    if (r ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, $(Ie, c), yt(e, t, l, a), l = we ? Yn : 0, !r && e !== null && (e.flags & 128) !== 0)
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
          e = a.alternate, e !== null && Wi(e) === null && (i = a), a = a.sibling;
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
          if (e = i.alternate, e !== null && Wi(e) === null) {
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
    if (e !== null && (t.dependencies = e.dependencies), $a |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Pl(
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
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Gi(e)));
  }
  function ly(e, t, a) {
    switch (t.tag) {
      case 3:
        it(t, t.stateNode.containerInfo), Ya(t, tt, e.memoizedState.cache), pl();
        break;
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        it(t, t.stateNode.containerInfo);
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
        if (l = (a & t.childLanes) !== 0, l || (Pl(
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
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(Ie, Ie.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Af(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Ya(t, tt, e.memoizedState.cache);
    }
    return _a(e, t, a);
  }
  function kf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!fc(e, a) && (t.flags & 128) === 0)
          return lt = !1, ly(
            e,
            t,
            a
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, we && (t.flags & 1048576) !== 0 && ho(t, Yn, t.index);
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
              if (i === te) {
                t.tag = 11, t = Ef(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (i === G) {
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
            throw t = Ge(e) || e, Error(f(306, t, ""));
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
          if (it(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, Ds(e, t), $n(t, l, null, a);
          var c = t.memoizedState;
          if (l = c.cache, Ya(t, tt, l), l !== u.cache && _s(
            t,
            [tt],
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
              ), Vn(i), t = Mf(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ze = It(e.firstChild), ht = t, we = !0, Ha = null, Ft = !0, a = To(
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
        return cu(e, t), e === null ? (a = Kd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : we || (a = t.type, e = t.pendingProps, l = _u(
          pe.current
        ).createElement(a), l[Qe] = t, l[Nt] = e, gt(l, a, e), rt(l), t.stateNode = l) : t.memoizedState = Kd(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ze(t), e === null && we && (l = t.stateNode = Xd(
          t.type,
          t.pendingProps,
          pe.current
        ), ht = t, Ft = !0, i = Ze, el(t.type) ? (Xc = i, Ze = It(l.firstChild)) : Ze = i), yt(
          e,
          t,
          t.pendingProps.children,
          a
        ), cu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((i = l = Ze) && (l = Oy(
          l,
          t.type,
          t.pendingProps,
          Ft
        ), l !== null ? (t.stateNode = l, ht = t, Ze = It(l.firstChild), Ft = !1, i = !0) : i = !1), i || La(t)), ze(t), i = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = u.children, Hc(i, u) ? l = null : c !== null && Hc(i, c) && (t.flags |= 32), t.memoizedState !== null && (i = Bs(
          e,
          t,
          Jm,
          null,
          null,
          a
        ), yi._currentValue = i), cu(e, t), yt(e, t, l, a), t.child;
      case 6:
        return e === null && we && ((e = a = Ze) && (a = Uy(
          a,
          t.pendingProps,
          Ft
        ), a !== null ? (t.stateNode = a, ht = t, Ze = null, e = !0) : e = !1), e || La(t)), null;
      case 13:
        return Of(e, t, a);
      case 4:
        return it(
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
        return Af(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return xl(t), l = mt(tt), e === null ? (i = Cs(), i === null && (i = Ye, u = Ts(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= a), i = u), t.memoizedState = { parent: l, cache: i }, zs(t), Ya(t, tt, i)) : ((e.lanes & a) !== 0 && (Ds(e, t), $n(t, null, null, a), Jn()), i = e.memoizedState, u = t.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Ya(t, tt, l)) : (l = u.cache, Ya(t, tt, l), l !== i.cache && _s(
          t,
          [tt],
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
          throw Nl = Ki, ws;
    } else e.flags &= -16777217;
  }
  function qf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Id(t))
      if (rd()) e.flags |= 8192;
      else
        throw Nl = Ki, ws;
  }
  function ou(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Rl() : 536870912, e.lanes |= t, dn |= t);
  }
  function ti(e, t) {
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
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sa(tt), J(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Il(t) ? Ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ss())), Ke(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (Ta(t), u !== null ? (Ke(t), qf(t, u)) : (Ke(t), dc(
          t,
          i,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (Ta(t), Ke(t), qf(t, u)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ta(t), Ke(t), dc(
          t,
          i,
          e,
          l,
          a
        )), null;
      case 27:
        if (ve(t), a = pe.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ke(t), null;
          }
          e = P.current, Il(t) ? yo(t) : (e = Xd(i, l, a), t.stateNode = e, Ta(t));
        }
        return Ke(t), null;
      case 5:
        if (ve(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ke(t), null;
          }
          if (u = P.current, Il(t))
            yo(t);
          else {
            var c = _u(
              pe.current
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
            u[Qe] = t, u[Nt] = l;
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
        return Ke(t), dc(
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
          if (e = pe.current, Il(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, i = ht, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            e[Qe] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Od(e.nodeValue, a)), e || La(t, !0);
          } else
            e = _u(e).createTextNode(
              l
            ), e[Qe] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Il(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[Qe] = t;
            } else
              pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), e = !1;
          } else
            a = Ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Ke(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Il(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(f(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(f(317));
              i[Qe] = t;
            } else
              pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else
            i = Ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
        }
        return kt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ou(t, t.updateQueue), Ke(t), null);
      case 4:
        return J(), e === null && Uc(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Sa(t.type), Ke(t), null;
      case 19:
        if (O(Ie), l = t.memoizedState, l === null) return Ke(t), null;
        if (i = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (i) ti(l, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Wi(e), u !== null) {
                  for (t.flags |= 128, ti(l, !1), e = u.updateQueue, t.updateQueue = e, ou(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    ro(a, e), a = a.sibling;
                  return $(
                    Ie,
                    Ie.current & 1 | 2
                  ), we && xa(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && De() > yu && (t.flags |= 128, i = !0, ti(l, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Wi(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, ou(t, e), ti(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !we)
                return Ke(t), null;
            } else
              2 * De() - l.renderingStartTime > yu && a !== 536870912 && (t.flags |= 128, i = !0, ti(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = De(), e.sibling = null, a = Ie.current, $(
          Ie,
          i ? a & 1 | 2 : a & 1
        ), we && xa(t, l.treeForkCount), e) : (Ke(t), null);
      case 22:
      case 23:
        return kt(t), Rs(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), a = t.updateQueue, a !== null && ou(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && O(jl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Sa(tt), Ke(t), null;
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
        return Sa(tt), J(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return O(Ie), null;
      case 4:
        return J(), null;
      case 10:
        return Sa(t.type), null;
      case 22:
      case 23:
        return kt(t), Rs(), e !== null && O(jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sa(tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bf(e, t) {
    switch (xs(t), t.tag) {
      case 3:
        Sa(tt), J();
        break;
      case 26:
      case 27:
      case 5:
        ve(t);
        break;
      case 4:
        J();
        break;
      case 31:
        t.memoizedState !== null && kt(t);
        break;
      case 13:
        kt(t);
        break;
      case 19:
        O(Ie);
        break;
      case 10:
        Sa(t.type);
        break;
      case 22:
      case 23:
        kt(t), Rs(), e !== null && O(jl);
        break;
      case 24:
        Sa(tt);
    }
  }
  function ai(e, t) {
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
      qe(t, t.return, r);
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
              var m = a, A = r;
              try {
                A();
              } catch (k) {
                qe(
                  i,
                  m,
                  k
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (k) {
      qe(t, t.return, k);
    }
  }
  function Hf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Co(t, a);
      } catch (l) {
        qe(e, e.return, l);
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
      qe(e, t, l);
    }
  }
  function li(e, t) {
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
      qe(e, t, i);
    }
  }
  function oa(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          qe(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          qe(e, t, i);
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
      qe(e, e.return, i);
    }
  }
  function hc(e, t, a) {
    try {
      var l = e.stateNode;
      Ay(l, e.type, a, t), l[Nt] = t;
    } catch (i) {
      qe(e, e.return, i);
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
  function fu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && el(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (fu(e, t, a), e = e.sibling; e !== null; )
        fu(e, t, a), e = e.sibling;
  }
  function Gf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      gt(t, l, a), t[Qe] = e, t[Nt] = a;
    } catch (u) {
      qe(e, e.return, u);
    }
  }
  var Aa = !1, nt = !1, gc = !1, Xf = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function uy(e, t) {
    if (e = e.containerInfo, qc = Mu, e = eo(e), rs(e)) {
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
            var c = 0, r = -1, m = -1, A = 0, k = 0, H = e, C = null;
            t: for (; ; ) {
              for (var D; H !== a || i !== 0 && H.nodeType !== 3 || (r = c + i), H !== u || l !== 0 && H.nodeType !== 3 || (m = c + l), H.nodeType === 3 && (c += H.nodeValue.length), (D = H.firstChild) !== null; )
                C = H, H = D;
              for (; ; ) {
                if (H === e) break t;
                if (C === a && ++A === i && (r = c), C === u && ++k === l && (m = c), (D = H.nextSibling) !== null) break;
                H = C, C = H.parentNode;
              }
              H = D;
            }
            a = r === -1 || m === -1 ? null : { start: r, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Bc = { focusedElem: e, selectionRange: a }, Mu = !1, ot = t; ot !== null; )
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
                } catch (ge) {
                  qe(
                    a,
                    a.return,
                    ge
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
        wa(e, a), l & 4 && ai(5, a);
        break;
      case 1:
        if (wa(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              qe(a, a.return, c);
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
              qe(
                a,
                a.return,
                c
              );
            }
          }
        l & 64 && Hf(a), l & 512 && li(a, a.return);
        break;
      case 3:
        if (wa(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            Co(e, t);
          } catch (c) {
            qe(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Gf(a);
      case 26:
      case 5:
        wa(e, a), t === null && l & 4 && Yf(a), l & 512 && li(a, a.return);
        break;
      case 12:
        wa(e, a);
        break;
      case 31:
        wa(e, a), l & 4 && Jf(e, a);
        break;
      case 13:
        wa(e, a), l & 4 && $f(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = yy.bind(
          null,
          a
        ), Ry(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Aa, !l) {
          t = t !== null && t.memoizedState !== null || nt, i = Aa;
          var u = nt;
          Aa = l, (nt = t) && !u ? za(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : wa(e, a), Aa = i, nt = u;
        }
        break;
      case 30:
        break;
      default:
        wa(e, a);
    }
  }
  function Zf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, _t = !1;
  function Ca(e, t, a) {
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
        nt || oa(a, t), Ca(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        nt || oa(a, t);
        var l = Je, i = _t;
        el(a.type) && (Je = a.stateNode, _t = !1), Ca(
          e,
          t,
          a
        ), di(a.stateNode), Je = l, _t = i;
        break;
      case 5:
        nt || oa(a, t);
      case 6:
        if (l = Je, i = _t, Je = null, Ca(
          e,
          t,
          a
        ), Je = l, _t = i, Je !== null)
          if (_t)
            try {
              (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(a.stateNode);
            } catch (u) {
              qe(
                a,
                t,
                u
              );
            }
          else
            try {
              Je.removeChild(a.stateNode);
            } catch (u) {
              qe(
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
        ), xn(e)) : Hd(Je, a.stateNode));
        break;
      case 4:
        l = Je, i = _t, Je = a.stateNode.containerInfo, _t = !0, Ca(
          e,
          t,
          a
        ), Je = l, _t = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ka(2, a, t), nt || Ka(4, a, t), Ca(
          e,
          t,
          a
        );
        break;
      case 1:
        nt || (oa(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Lf(
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
        nt = (l = nt) || a.memoizedState !== null, Ca(
          e,
          t,
          a
        ), nt = l;
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
        xn(e);
      } catch (a) {
        qe(t, t.return, a);
      }
    }
  }
  function $f(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        xn(e);
      } catch (a) {
        qe(t, t.return, a);
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
  function du(e, t) {
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
        Tt(t, e), At(e), l & 4 && (Ka(3, e, e.return), ai(3, e), Ka(5, e, e.return));
        break;
      case 1:
        Tt(t, e), At(e), l & 512 && (nt || a === null || oa(a, a.return)), l & 64 && Aa && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var i = aa;
        if (Tt(t, e), At(e), l & 512 && (nt || a === null || oa(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (l) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[zn] || u[Qe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), gt(u, l, a), u[Qe] = e, rt(u), l = u;
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
                  u[Qe] = e, rt(u), l = u;
                }
                e.stateNode = l;
              } else
                Wd(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = $d(
                i,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? Wd(
              i,
              e.type,
              e.stateNode
            ) : $d(
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
        Tt(t, e), At(e), l & 512 && (nt || a === null || oa(a, a.return)), a !== null && l & 4 && hc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), At(e), l & 512 && (nt || a === null || oa(a, a.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Vl(i, "");
          } catch (ue) {
            qe(e, e.return, ue);
          }
        }
        l & 4 && e.stateNode != null && (i = e.memoizedProps, hc(
          e,
          i,
          a !== null ? a.memoizedProps : i
        )), l & 1024 && (gc = !0);
        break;
      case 6:
        if (Tt(t, e), At(e), l & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (ue) {
            qe(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (Cu = null, i = aa, aa = Tu(t.containerInfo), Tt(t, e), aa = i, At(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            xn(t.containerInfo);
          } catch (ue) {
            qe(e, e.return, ue);
          }
        gc && (gc = !1, Wf(e));
        break;
      case 4:
        l = aa, aa = Tu(
          e.stateNode.containerInfo
        ), Tt(t, e), At(e), aa = l;
        break;
      case 12:
        Tt(t, e), At(e);
        break;
      case 31:
        Tt(t, e), At(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, du(e, l)));
        break;
      case 13:
        Tt(t, e), At(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (mu = De()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, du(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var m = a !== null && a.memoizedState !== null, A = Aa, k = nt;
        if (Aa = A || i, nt = k || m, Tt(t, e), nt = k, Aa = A, At(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (a === null || m || Aa || nt || Al(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                m = a = t;
                try {
                  if (u = m.stateNode, i)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    r = m.stateNode;
                    var H = m.memoizedProps.style, C = H != null && H.hasOwnProperty("display") ? H.display : null;
                    r.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (ue) {
                  qe(m, m.return, ue);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = i ? "" : m.memoizedProps;
                } catch (ue) {
                  qe(m, m.return, ue);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                m = t;
                try {
                  var D = m.stateNode;
                  i ? Ld(D, !0) : Ld(m.stateNode, !1);
                } catch (ue) {
                  qe(m, m.return, ue);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, du(e, a))));
        break;
      case 19:
        Tt(t, e), At(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, du(e, l)));
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
            fu(e, u, i);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Vl(c, ""), a.flags &= -33);
            var r = mc(e);
            fu(e, r, c);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, A = mc(e);
            yc(
              e,
              A,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (k) {
        qe(e, e.return, k);
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
  function wa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qf(e, t.alternate, t), t = t.sibling;
  }
  function Al(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ka(4, t, t.return), Al(t);
          break;
        case 1:
          oa(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Lf(
            t,
            t.return,
            a
          ), Al(t);
          break;
        case 27:
          di(t.stateNode);
        case 26:
        case 5:
          oa(t, t.return), Al(t);
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
          ), ai(4, u);
          break;
        case 1:
          if (za(
            i,
            u,
            a
          ), l = u, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (A) {
              qe(l, l.return, A);
            }
          if (l = u, i = l.updateQueue, i !== null) {
            var r = l.stateNode;
            try {
              var m = i.shared.hiddenCallbacks;
              if (m !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < m.length; i++)
                  Ao(m[i], r);
            } catch (A) {
              qe(l, l.return, A);
            }
          }
          a && c & 64 && Hf(u), li(u, u.return);
          break;
        case 27:
          Gf(u);
        case 26:
        case 5:
          za(
            i,
            u,
            a
          ), a && l === null && c & 4 && Yf(u), li(u, u.return);
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
          ), a && c & 4 && $f(i, u);
          break;
        case 22:
          u.memoizedState === null && za(
            i,
            u,
            a
          ), li(u, u.return);
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Gn(a));
  }
  function pc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Gn(e));
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
        ), i & 2048 && ai(9, t);
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
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Gn(e)));
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
          } catch (m) {
            qe(t, t.return, m);
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
        ) : ni(e, t) : u._visibility & 2 ? la(
          e,
          t,
          a,
          l
        ) : (u._visibility |= 2, rn(
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
  function rn(e, t, a, l, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, r = a, m = l, A = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          rn(
            u,
            c,
            r,
            m,
            i
          ), ai(8, c);
          break;
        case 23:
          break;
        case 22:
          var k = c.stateNode;
          c.memoizedState !== null ? k._visibility & 2 ? rn(
            u,
            c,
            r,
            m,
            i
          ) : ni(
            u,
            c
          ) : (k._visibility |= 2, rn(
            u,
            c,
            r,
            m,
            i
          )), i && A & 2048 && vc(
            c.alternate,
            c
          );
          break;
        case 24:
          rn(
            u,
            c,
            r,
            m,
            i
          ), i && A & 2048 && pc(c.alternate, c);
          break;
        default:
          rn(
            u,
            c,
            r,
            m,
            i
          );
      }
      t = t.sibling;
    }
  }
  function ni(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, i = l.flags;
        switch (l.tag) {
          case 22:
            ni(a, l), i & 2048 && vc(
              l.alternate,
              l
            );
            break;
          case 24:
            ni(a, l), i & 2048 && pc(l.alternate, l);
            break;
          default:
            ni(a, l);
        }
        t = t.sibling;
      }
  }
  var ii = 8192;
  function on(e, t, a) {
    if (e.subtreeFlags & ii)
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
        on(
          e,
          t,
          a
        ), e.flags & ii && e.memoizedState !== null && Ky(
          a,
          aa,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        on(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = aa;
        aa = Tu(e.stateNode.containerInfo), on(
          e,
          t,
          a
        ), aa = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ii, ii = 16777216, on(
          e,
          t,
          a
        ), ii = l) : on(
          e,
          t,
          a
        ));
        break;
      default:
        on(
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
  function ui(e) {
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
        ui(e), e.flags & 2048 && Ka(9, e, e.return);
        break;
      case 3:
        ui(e);
        break;
      case 12:
        ui(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, hu(e)) : ui(e);
        break;
      default:
        ui(e);
    }
  }
  function hu(e) {
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
          Ka(8, t, t.return), hu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, hu(t));
          break;
        default:
          hu(t);
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
          Gn(a.memoizedState.cache);
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
      var t = mt(tt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return mt(tt).controller.signal;
    }
  }, ry = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, Ye = null, _e = null, Ae = 0, ke = 0, qt = null, Ja = !1, fn = !1, bc = !1, Da = 0, We = 0, $a = 0, Cl = 0, xc = 0, Bt = 0, dn = 0, si = null, Ct = null, jc = !1, mu = 0, ld = 0, yu = 1 / 0, gu = null, Fa = null, st = 0, Wa = null, hn = null, Ma = 0, Sc = 0, Nc = null, nd = null, ci = 0, Ec = null;
  function Ht() {
    return (Re & 2) !== 0 && Ae !== 0 ? Ae & -Ae : S.T !== null ? zc() : me();
  }
  function id() {
    if (Bt === 0)
      if ((Ae & 536870912) === 0 || we) {
        var e = Ra;
        Ra <<= 1, (Ra & 3932160) === 0 && (Ra = 262144), Bt = e;
      } else Bt = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), Bt;
  }
  function wt(e, t, a) {
    (e === Ye && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null) && (mn(e, 0), Ia(
      e,
      Ae,
      Bt,
      !1
    )), fl(e, a), ((Re & 2) === 0 || e !== Ye) && (e === Ye && ((Re & 2) === 0 && (Cl |= a), We === 4 && Ia(
      e,
      Ae,
      Bt,
      !1
    )), fa(e));
  }
  function ud(e, t, a) {
    if ((Re & 6) !== 0) throw Error(f(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ol(e, t), i = l ? dy(e, t) : Tc(e, t, !0), u = l;
    do {
      if (i === 0) {
        fn && !l && Ia(e, t, 0, !1);
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
              i = si;
              var m = r.current.memoizedState.isDehydrated;
              if (m && (mn(r, c).flags |= 256), c = Tc(
                r,
                c,
                !1
              ), c !== 2) {
                if (bc && !m) {
                  r.errorRecoveryDisabledLanes |= u, Cl |= u, i = 4;
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
          mn(e, 0), Ia(e, t, 0, !0);
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
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (i = mu + 300 - De(), 10 < i)) {
            if (Ia(
              l,
              t,
              Bt,
              !Ja
            ), Ul(l, 0, !0) !== 0) break e;
            Ma = t, l.timeoutHandle = qd(
              sd.bind(
                null,
                l,
                a,
                Ct,
                gu,
                jc,
                t,
                Bt,
                Cl,
                dn,
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
          sd(
            l,
            a,
            Ct,
            gu,
            jc,
            t,
            Bt,
            Cl,
            dn,
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
  function sd(e, t, a, l, i, u, c, r, m, A, k, H, C, D) {
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
      var ue = (u & 62914560) === u ? mu - De() : (u & 4194048) === u ? ld - De() : 0;
      if (ue = Jy(
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
            m,
            k,
            H,
            null,
            C,
            D
          )
        ), Ia(e, u, c, !A);
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
      m
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
    t &= ~xc, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - bt(i), c = 1 << u;
      l[u] = -1, i &= ~c;
    }
    a !== 0 && Z(e, a, t);
  }
  function vu() {
    return (Re & 6) === 0 ? (ri(0), !1) : !0;
  }
  function _c() {
    if (_e !== null) {
      if (ke === 0)
        var e = _e.return;
      else
        e = _e, ja = bl = null, Ys(e), ln = null, Qn = 0, e = _e;
      for (; e !== null; )
        Bf(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function mn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, zy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ma = 0, _c(), Ye = e, _e = a = ba(e.current, null), Ae = t, ke = 0, qt = null, Ja = !1, fn = ol(e, t), bc = !1, dn = Bt = xc = Cl = $a = We = 0, Ct = si = null, jc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - bt(l), u = 1 << i;
        t |= e[i], l &= ~u;
      }
    return Da = t, Bi(), a;
  }
  function cd(e, t) {
    Ne = null, S.H = Pn, t === an || t === Zi ? (t = No(), ke = 3) : t === ws ? (t = No(), ke = 4) : ke = t === lc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, _e === null && (We = 1, uu(
      e,
      Kt(t, e.current)
    ));
  }
  function rd() {
    var e = Rt.current;
    return e === null ? !0 : (Ae & 4194048) === Ae ? Wt === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === Wt : !1;
  }
  function od() {
    var e = S.H;
    return S.H = Pn, e === null ? Pn : e;
  }
  function fd() {
    var e = S.A;
    return S.A = cy, e;
  }
  function pu() {
    We = 4, Ja || (Ae & 4194048) !== Ae && Rt.current !== null || (fn = !0), ($a & 134217727) === 0 && (Cl & 134217727) === 0 || Ye === null || Ia(
      Ye,
      Ae,
      Bt,
      !1
    );
  }
  function Tc(e, t, a) {
    var l = Re;
    Re |= 2;
    var i = od(), u = fd();
    (Ye !== e || Ae !== t) && (gu = null, mn(e, t)), t = !1;
    var c = We;
    e: do
      try {
        if (ke !== 0 && _e !== null) {
          var r = _e, m = qt;
          switch (ke) {
            case 8:
              _c(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var A = ke;
              if (ke = 0, qt = null, yn(e, r, m, A), a && fn) {
                c = 0;
                break e;
              }
              break;
            default:
              A = ke, ke = 0, qt = null, yn(e, r, m, A);
          }
        }
        fy(), c = We;
        break;
      } catch (k) {
        cd(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ja = bl = null, Re = l, S.H = i, S.A = u, _e === null && (Ye = null, Ae = 0, Bi()), c;
  }
  function fy() {
    for (; _e !== null; ) dd(_e);
  }
  function dy(e, t) {
    var a = Re;
    Re |= 2;
    var l = od(), i = fd();
    Ye !== e || Ae !== t ? (gu = null, yu = De() + 500, mn(e, t)) : fn = ol(
      e,
      t
    );
    e: do
      try {
        if (ke !== 0 && _e !== null) {
          t = _e;
          var u = qt;
          t: switch (ke) {
            case 1:
              ke = 0, qt = null, yn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (jo(u)) {
                ke = 0, qt = null, hd(t);
                break;
              }
              t = function() {
                ke !== 2 && ke !== 9 || Ye !== e || (ke = 7), fa(e);
              }, u.then(t, t);
              break e;
            case 3:
              ke = 7;
              break e;
            case 4:
              ke = 5;
              break e;
            case 7:
              jo(u) ? (ke = 0, qt = null, hd(t)) : (ke = 0, qt = null, yn(e, t, u, 7));
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
                    ke = 0, qt = null;
                    var m = r.sibling;
                    if (m !== null) _e = m;
                    else {
                      var A = r.return;
                      A !== null ? (_e = A, bu(A)) : _e = null;
                    }
                    break t;
                  }
              }
              ke = 0, qt = null, yn(e, t, u, 5);
              break;
            case 6:
              ke = 0, qt = null, yn(e, t, u, 6);
              break;
            case 8:
              _c(), We = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        hy();
        break;
      } catch (k) {
        cd(e, k);
      }
    while (!0);
    return ja = bl = null, S.H = l, S.A = i, Re = a, _e !== null ? 0 : (Ye = null, Ae = 0, Bi(), We);
  }
  function hy() {
    for (; _e !== null && !sa(); )
      dd(_e);
  }
  function dd(e) {
    var t = kf(e.alternate, e, Da);
    e.memoizedProps = e.pendingProps, t === null ? bu(e) : _e = t;
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
          Ae
        );
        break;
      case 11:
        t = zf(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ae
        );
        break;
      case 5:
        Ys(t);
      default:
        Bf(a, t), t = _e = ro(t, Da), t = kf(a, t, Da);
    }
    e.memoizedProps = e.pendingProps, t === null ? bu(e) : _e = t;
  }
  function yn(e, t, a, l) {
    ja = bl = null, Ys(t), ln = null, Qn = 0;
    var i = t.return;
    try {
      if (ty(
        e,
        i,
        t,
        a,
        Ae
      )) {
        We = 1, uu(
          e,
          Kt(a, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw _e = i, u;
      We = 1, uu(
        e,
        Kt(a, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (we || l === 1 ? e = !0 : fn || (Ae & 536870912) !== 0 ? e = !1 : (Ja = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Rt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), md(t, e)) : bu(t);
  }
  function bu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        md(
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
        _e = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
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
    We = 6, _e = null;
  }
  function yd(e, t, a, l, i, u, c, r, m) {
    e.cancelPendingCommit = null;
    do
      xu();
    while (st !== 0);
    if ((Re & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= ms, U(
        e,
        a,
        u,
        c,
        r,
        m
      ), e === Ye && (_e = Ye = null, Ae = 0), hn = t, Wa = e, Ma = a, Sc = u, Nc = i, nd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vy(Ua, function() {
        return xd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = S.T, S.T = null, i = Y.p, Y.p = 2, c = Re, Re |= 4;
        try {
          uy(e, t, a);
        } finally {
          Re = c, Y.p = i, S.T = l;
        }
      }
      st = 1, gd(), vd(), pd();
    }
  }
  function gd() {
    if (st === 1) {
      st = 0;
      var e = Wa, t = hn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var l = Y.p;
        Y.p = 2;
        var i = Re;
        Re |= 4;
        try {
          Ff(t, e);
          var u = Bc, c = eo(e.containerInfo), r = u.focusedElem, m = u.selectionRange;
          if (c !== r && r && r.ownerDocument && Pr(
            r.ownerDocument.documentElement,
            r
          )) {
            if (m !== null && rs(r)) {
              var A = m.start, k = m.end;
              if (k === void 0 && (k = A), "selectionStart" in r)
                r.selectionStart = A, r.selectionEnd = Math.min(
                  k,
                  r.value.length
                );
              else {
                var H = r.ownerDocument || document, C = H && H.defaultView || window;
                if (C.getSelection) {
                  var D = C.getSelection(), ue = r.textContent.length, ge = Math.min(m.start, ue), Le = m.end === void 0 ? ge : Math.min(m.end, ue);
                  !D.extend && ge > Le && (c = Le, Le = ge, ge = c);
                  var x = Ir(
                    r,
                    ge
                  ), y = Ir(
                    r,
                    Le
                  );
                  if (x && y && (D.rangeCount !== 1 || D.anchorNode !== x.node || D.anchorOffset !== x.offset || D.focusNode !== y.node || D.focusOffset !== y.offset)) {
                    var T = H.createRange();
                    T.setStart(x.node, x.offset), D.removeAllRanges(), ge > Le ? (D.addRange(T), D.extend(y.node, y.offset)) : (T.setEnd(y.node, y.offset), D.addRange(T));
                  }
                }
              }
            }
            for (H = [], D = r; D = D.parentNode; )
              D.nodeType === 1 && H.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < H.length; r++) {
              var B = H[r];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          Mu = !!qc, Bc = qc = null;
        } finally {
          Re = i, Y.p = l, S.T = a;
        }
      }
      e.current = t, st = 2;
    }
  }
  function vd() {
    if (st === 2) {
      st = 0;
      var e = Wa, t = hn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var l = Y.p;
        Y.p = 2;
        var i = Re;
        Re |= 4;
        try {
          Qf(e, t.alternate, t);
        } finally {
          Re = i, Y.p = l, S.T = a;
        }
      }
      st = 3;
    }
  }
  function pd() {
    if (st === 4 || st === 3) {
      st = 0, Ol();
      var e = Wa, t = hn, a = Ma, l = nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? st = 5 : (st = 0, hn = Wa = null, bd(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Fa = null), Me(a), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function")
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
        t = S.T, i = Y.p, Y.p = 2, S.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < l.length; c++) {
            var r = l[c];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          S.T = t, Y.p = i;
        }
      }
      (Ma & 3) !== 0 && xu(), fa(e), i = e.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? e === Ec ? ci++ : (ci = 0, Ec = e) : ci = 0, ri(0);
    }
  }
  function bd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Gn(t)));
  }
  function xu() {
    return gd(), vd(), pd(), xd();
  }
  function xd() {
    if (st !== 5) return !1;
    var e = Wa, t = Sc;
    Sc = 0;
    var a = Me(Ma), l = S.T, i = Y.p;
    try {
      Y.p = 32 > a ? 32 : a, S.T = null, a = Nc, Nc = null;
      var u = Wa, c = Ma;
      if (st = 0, hn = Wa = null, Ma = 0, (Re & 6) !== 0) throw Error(f(331));
      var r = Re;
      if (Re |= 4, td(u.current), If(
        u,
        u.current,
        c,
        a
      ), Re = r, ri(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function")
        try {
          dt.onPostCommitFiberRoot(ma, u);
        } catch {
        }
      return !0;
    } finally {
      Y.p = i, S.T = l, bd(e, t);
    }
  }
  function jd(e, t, a) {
    t = Kt(a, t), t = ac(e.stateNode, t, 2), e = Xa(e, t, 2), e !== null && (fl(e, 2), fa(e));
  }
  function qe(e, t, a) {
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
  function Ac(e, t, a) {
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
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ye === e && (Ae & a) === a && (We === 4 || We === 3 && (Ae & 62914560) === Ae && 300 > De() - mu ? (Re & 2) === 0 && mn(e, 0) : xc |= a, dn === Ae && (dn = 0)), fa(e);
  }
  function Sd(e, t) {
    t === 0 && (t = Rl()), e = gl(e, t), e !== null && (fl(e, t), fa(e));
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
  var ju = null, gn = null, Cc = !1, Su = !1, wc = !1, Pa = 0;
  function fa(e) {
    e !== gn && e.next === null && (gn === null ? ju = gn = e : gn = gn.next = e), Su = !0, Cc || (Cc = !0, by());
  }
  function ri(e, t) {
    if (!wc && Su) {
      wc = !0;
      do
        for (var a = !1, l = ju; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var c = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - bt(42 | e) + 1) - 1, u &= i & ~(c & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Td(l, u));
          } else
            u = Ae, u = Ul(
              l,
              l === Ye ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || ol(l, u) || (a = !0, Td(l, u));
          l = l.next;
        }
      while (a);
      wc = !1;
    }
  }
  function py() {
    Nd();
  }
  function Nd() {
    Su = Cc = !1;
    var e = 0;
    Pa !== 0 && wy() && (e = Pa);
    for (var t = De(), a = null, l = ju; l !== null; ) {
      var i = l.next, u = Ed(l, t);
      u === 0 ? (l.next = null, a === null ? ju = i : a.next = i, i === null && (gn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (Su = !0)), l = i;
    }
    st !== 0 && st !== 5 || ri(e), Pa !== 0 && (Pa = 0);
  }
  function Ed(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - bt(u), r = 1 << c, m = i[c];
      m === -1 ? ((r & a) === 0 || (r & l) !== 0) && (i[c] = Cn(r, t)) : m <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Ye, a = Ae, a = Ul(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ft(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ol(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && ft(l), Me(a)) {
        case 2:
        case 8:
          a = _n;
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
    if (xu() && e.callbackNode !== a)
      return null;
    var l = Ae;
    return l = Ul(
      e,
      e === Ye ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ud(e, l, t), Ed(e, De()), e.callbackNode != null && e.callbackNode === a ? _d.bind(null, e) : null);
  }
  function Td(e, t) {
    if (xu()) return null;
    ud(e, t, !0);
  }
  function by() {
    Dy(function() {
      (Re & 6) !== 0 ? ea(
        _i,
        py
      ) : Nd();
    });
  }
  function zc() {
    if (Pa === 0) {
      var e = en;
      e === 0 && (e = ya, ya <<= 1, (ya & 261888) === 0 && (ya = 256)), Pa = e;
    }
    return Pa;
  }
  function Ad(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zi("" + e);
  }
  function Cd(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function xy(e, t, a, l, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var u = Ad(
        (i[Nt] || null).action
      ), c = l.submitter;
      c && (t = (t = c[Nt] || null) ? Ad(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var r = new Ui(
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
                  var m = c ? Cd(i, c) : new FormData(i);
                  Fs(
                    a,
                    {
                      pending: !0,
                      data: m,
                      method: i.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (r.preventDefault(), m = c ? Cd(i, c) : new FormData(i), Fs(
                  a,
                  {
                    pending: !0,
                    data: m,
                    method: i.method,
                    action: u
                  },
                  u,
                  m
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
  ta(lo, "onAnimationEnd"), ta(no, "onAnimationIteration"), ta(io, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(Bm, "onTransitionRun"), ta(Hm, "onTransitionStart"), ta(Lm, "onTransitionCancel"), ta(uo, "onTransitionEnd"), Ll("onMouseEnter", ["mouseout", "mouseover"]), Ll("onMouseLeave", ["mouseout", "mouseover"]), Ll("onPointerEnter", ["pointerout", "pointerover"]), Ll("onPointerLeave", ["pointerout", "pointerover"]), dl(
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
  var oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ny = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi)
  );
  function wd(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], i = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = l.length - 1; 0 <= c; c--) {
            var r = l[c], m = r.instance, A = r.currentTarget;
            if (r = r.listener, m !== u && i.isPropagationStopped())
              break e;
            u = r, i.currentTarget = A;
            try {
              u(i);
            } catch (k) {
              qi(k);
            }
            i.currentTarget = null, u = m;
          }
        else
          for (c = 0; c < l.length; c++) {
            if (r = l[c], m = r.instance, A = r.currentTarget, r = r.listener, m !== u && i.isPropagationStopped())
              break e;
            u = r, i.currentTarget = A;
            try {
              u(i);
            } catch (k) {
              qi(k);
            }
            i.currentTarget = null, u = m;
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
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function Uc(e) {
    if (!e[Nu]) {
      e[Nu] = !0, jr.forEach(function(a) {
        a !== "selectionchange" && (Ny.has(a) || Oc(a, !1, e), Oc(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Nu] || (t[Nu] = !0, Oc("selectionchange", !1, t));
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
        i = $c;
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
              var m = c.tag;
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === i)
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (c = ql(r), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              l = u = c;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    Or(function() {
      var A = u, k = Iu(a), H = [];
      e: {
        var C = so.get(e);
        if (C !== void 0) {
          var D = Ui, ue = e;
          switch (e) {
            case "keypress":
              if (Mi(a) === 0) break e;
            case "keydown":
            case "keyup":
              D = gm;
              break;
            case "focusin":
              ue = "focus", D = ns;
              break;
            case "focusout":
              ue = "blur", D = ns;
              break;
            case "beforeblur":
            case "afterblur":
              D = ns;
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
              D = kr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = nm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = bm;
              break;
            case lo:
            case no:
            case io:
              D = sm;
              break;
            case uo:
              D = jm;
              break;
            case "scroll":
            case "scrollend":
              D = am;
              break;
            case "wheel":
              D = Nm;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = rm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Br;
              break;
            case "toggle":
            case "beforetoggle":
              D = _m;
          }
          var ge = (t & 4) !== 0, Le = !ge && (e === "scroll" || e === "scrollend"), x = ge ? C !== null ? C + "Capture" : null : C;
          ge = [];
          for (var y = A, T; y !== null; ) {
            var B = y;
            if (T = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || T === null || x === null || (B = Mn(y, x), B != null && ge.push(
              fi(y, B, T)
            )), Le) break;
            y = y.return;
          }
          0 < ge.length && (C = new D(
            C,
            ue,
            null,
            a,
            k
          ), H.push({ event: C, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", C && a !== Wu && (ue = a.relatedTarget || a.fromElement) && (ql(ue) || ue[kl]))
            break e;
          if ((D || C) && (C = k.window === k ? k : (C = k.ownerDocument) ? C.defaultView || C.parentWindow : window, D ? (ue = a.relatedTarget || a.toElement, D = A, ue = ue ? ql(ue) : null, ue !== null && (Le = p(ue), ge = ue.tag, ue !== Le || ge !== 5 && ge !== 27 && ge !== 6) && (ue = null)) : (D = null, ue = A), D !== ue)) {
            if (ge = kr, B = "onMouseLeave", x = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (ge = Br, B = "onPointerLeave", x = "onPointerEnter", y = "pointer"), Le = D == null ? C : Dn(D), T = ue == null ? C : Dn(ue), C = new ge(
              B,
              y + "leave",
              D,
              a,
              k
            ), C.target = Le, C.relatedTarget = T, B = null, ql(k) === A && (ge = new ge(
              x,
              y + "enter",
              ue,
              a,
              k
            ), ge.target = T, ge.relatedTarget = Le, B = ge), Le = B, D && ue)
              t: {
                for (ge = Ey, x = D, y = ue, T = 0, B = x; B; B = ge(B))
                  T++;
                B = 0;
                for (var fe = y; fe; fe = ge(fe))
                  B++;
                for (; 0 < T - B; )
                  x = ge(x), T--;
                for (; 0 < B - T; )
                  y = ge(y), B--;
                for (; T--; ) {
                  if (x === y || y !== null && x === y.alternate) {
                    ge = x;
                    break t;
                  }
                  x = ge(x), y = ge(y);
                }
                ge = null;
              }
            else ge = null;
            D !== null && Dd(
              H,
              C,
              D,
              ge,
              !1
            ), ue !== null && Le !== null && Dd(
              H,
              Le,
              ue,
              ge,
              !0
            );
          }
        }
        e: {
          if (C = A ? Dn(A) : window, D = C.nodeName && C.nodeName.toLowerCase(), D === "select" || D === "input" && C.type === "file")
            var Oe = Zr;
          else if (Xr(C))
            if (Kr)
              Oe = Rm;
            else {
              Oe = Om;
              var se = Mm;
            }
          else
            D = C.nodeName, !D || D.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? A && Fu(A.elementType) && (Oe = Zr) : Oe = Um;
          if (Oe && (Oe = Oe(e, A))) {
            Qr(
              H,
              Oe,
              a,
              k
            );
            break e;
          }
          se && se(e, C, A), e === "focusout" && A && C.type === "number" && A.memoizedProps.value != null && $u(C, "number", C.value);
        }
        switch (se = A ? Dn(A) : window, e) {
          case "focusin":
            (Xr(se) || se.contentEditable === "true") && (Zl = se, os = A, Ln = null);
            break;
          case "focusout":
            Ln = os = Zl = null;
            break;
          case "mousedown":
            fs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fs = !1, to(H, a, k);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            to(H, a, k);
        }
        var Ee;
        if (us)
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
          Ql ? Vr(e, a) && (Ce = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Hr && a.locale !== "ko" && (Ql || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Ql && (Ee = Ur()) : (qa = k, ts = "value" in qa ? qa.value : qa.textContent, Ql = !0)), se = Eu(A, Ce), 0 < se.length && (Ce = new qr(
          Ce,
          e,
          null,
          a,
          k
        ), H.push({ event: Ce, listeners: se }), Ee ? Ce.data = Ee : (Ee = Gr(a), Ee !== null && (Ce.data = Ee)))), (Ee = Am ? Cm(e, a) : wm(e, a)) && (Ce = Eu(A, "onBeforeInput"), 0 < Ce.length && (se = new qr(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          k
        ), H.push({
          event: se,
          listeners: Ce
        }), se.data = Ee)), xy(
          H,
          e,
          A,
          a,
          k
        );
      }
      wd(H, t);
    });
  }
  function fi(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Eu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Mn(e, a), i != null && l.unshift(
        fi(e, i, u)
      ), i = Mn(e, t), i != null && l.push(
        fi(e, i, u)
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
      var r = a, m = r.alternate, A = r.stateNode;
      if (r = r.tag, m !== null && m === l) break;
      r !== 5 && r !== 26 && r !== 27 || A === null || (m = A, i ? (A = Mn(a, u), A != null && c.unshift(
        fi(a, A, m)
      )) : i || (A = Mn(a, u), A != null && c.push(
        fi(a, A, m)
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
  function He(e, t, a, l, i, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Vl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Vl(e, "" + l);
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
        l = zi("" + l), e.setAttribute(a, l);
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
          typeof u == "function" && (a === "formAction" ? (t !== "input" && He(e, t, "name", i.name, i, null), He(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), He(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), He(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (He(e, t, "encType", i.encType, i, null), He(e, t, "method", i.method, i, null), He(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = zi("" + l), e.setAttribute(a, l);
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
        a = zi("" + l), e.setAttributeNS(
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
        typeof l == "string" ? Vl(e, l) : (typeof l == "number" || typeof l == "bigint") && Vl(e, "" + l);
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
                  He(e, t, u, c, a, null);
              }
          }
        i && He(e, t, "srcSet", a.srcSet, a, null), l && He(e, t, "src", a.src, a, null);
        return;
      case "input":
        Te("invalid", e);
        var r = u = c = i = null, m = null, A = null;
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
                  m = k;
                  break;
                case "defaultChecked":
                  A = k;
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
                    throw Error(f(137, t));
                  break;
                default:
                  He(e, t, l, k, a, null);
              }
          }
        Ar(
          e,
          u,
          r,
          m,
          A,
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
                He(e, t, i, r, a, null);
            }
        t = u, a = c, e.multiple = !!l, t != null ? Yl(e, !!l, t, !1) : a != null && Yl(e, !!l, a, !0);
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
                He(e, t, c, r, a, null);
            }
        wr(e, l, i, u);
        return;
      case "option":
        for (m in a)
          a.hasOwnProperty(m) && (l = a[m], l != null) && (m === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : He(e, t, m, l, a, null));
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
        for (l = 0; l < oi.length; l++)
          Te(oi[l], e);
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
        for (A in a)
          if (a.hasOwnProperty(A) && (l = a[A], l != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                He(e, t, A, l, a, null);
            }
        return;
      default:
        if (Fu(t)) {
          for (k in a)
            a.hasOwnProperty(k) && (l = a[k], l !== void 0 && kc(
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
      a.hasOwnProperty(r) && (l = a[r], l != null && He(e, t, r, l, a, null));
  }
  function Ay(e, t, a, l) {
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
        var i = null, u = null, c = null, r = null, m = null, A = null, k = null;
        for (D in a) {
          var H = a[D];
          if (a.hasOwnProperty(D) && H != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = H;
              default:
                l.hasOwnProperty(D) || He(e, t, D, null, l, H);
            }
        }
        for (var C in l) {
          var D = l[C];
          if (H = a[C], l.hasOwnProperty(C) && (D != null || H != null))
            switch (C) {
              case "type":
                u = D;
                break;
              case "name":
                i = D;
                break;
              case "checked":
                A = D;
                break;
              case "defaultChecked":
                k = D;
                break;
              case "value":
                c = D;
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
                D !== H && He(
                  e,
                  t,
                  C,
                  D,
                  l,
                  H
                );
            }
        }
        Ju(
          e,
          c,
          r,
          m,
          A,
          k,
          u,
          i
        );
        return;
      case "select":
        D = c = r = C = null;
        for (u in a)
          if (m = a[u], a.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                D = m;
              default:
                l.hasOwnProperty(u) || He(
                  e,
                  t,
                  u,
                  null,
                  l,
                  m
                );
            }
        for (i in l)
          if (u = l[i], m = a[i], l.hasOwnProperty(i) && (u != null || m != null))
            switch (i) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== m && He(
                  e,
                  t,
                  i,
                  u,
                  l,
                  m
                );
            }
        t = r, a = c, l = D, C != null ? Yl(e, !!a, C, !1) : !!l != !!a && (t != null ? Yl(e, !!a, t, !0) : Yl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        D = C = null;
        for (r in a)
          if (i = a[r], a.hasOwnProperty(r) && i != null && !l.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(e, t, r, null, l, i);
            }
        for (c in l)
          if (i = l[c], u = a[c], l.hasOwnProperty(c) && (i != null || u != null))
            switch (c) {
              case "value":
                C = i;
                break;
              case "defaultValue":
                D = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(f(91));
                break;
              default:
                i !== u && He(e, t, c, i, l, u);
            }
        Cr(e, C, D);
        return;
      case "option":
        for (var ue in a)
          C = a[ue], a.hasOwnProperty(ue) && C != null && !l.hasOwnProperty(ue) && (ue === "selected" ? e.selected = !1 : He(
            e,
            t,
            ue,
            null,
            l,
            C
          ));
        for (m in l)
          C = l[m], D = a[m], l.hasOwnProperty(m) && C !== D && (C != null || D != null) && (m === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : He(
            e,
            t,
            m,
            C,
            l,
            D
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
        for (var ge in a)
          C = a[ge], a.hasOwnProperty(ge) && C != null && !l.hasOwnProperty(ge) && He(e, t, ge, null, l, C);
        for (A in l)
          if (C = l[A], D = a[A], l.hasOwnProperty(A) && C !== D && (C != null || D != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(f(137, t));
                break;
              default:
                He(
                  e,
                  t,
                  A,
                  C,
                  l,
                  D
                );
            }
        return;
      default:
        if (Fu(t)) {
          for (var Le in a)
            C = a[Le], a.hasOwnProperty(Le) && C !== void 0 && !l.hasOwnProperty(Le) && kc(
              e,
              t,
              Le,
              void 0,
              l,
              C
            );
          for (k in l)
            C = l[k], D = a[k], !l.hasOwnProperty(k) || C === D || C === void 0 && D === void 0 || kc(
              e,
              t,
              k,
              C,
              l,
              D
            );
          return;
        }
    }
    for (var x in a)
      C = a[x], a.hasOwnProperty(x) && C != null && !l.hasOwnProperty(x) && He(e, t, x, null, l, C);
    for (H in l)
      C = l[H], D = a[H], !l.hasOwnProperty(H) || C === D || C == null && D == null || He(e, t, H, C, l, D);
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
  function Cy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var i = a[l], u = i.transferSize, c = i.initiatorType, r = i.duration;
        if (u && r && Ud(c)) {
          for (c = 0, r = i.responseEnd, l += 1; l < a.length; l++) {
            var m = a[l], A = m.startTime;
            if (A > r) break;
            var k = m.transferSize, H = m.initiatorType;
            k && Ud(H) && (m = m.responseEnd, c += k * (m < r ? 1 : (r - A) / (m - A)));
          }
          if (--l, t += 8 * (u + c) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qc = null, Bc = null;
  function _u(e) {
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
  function wy() {
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
            e.removeChild(i), xn(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          di(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, di(a);
          for (var u = a.firstChild; u; ) {
            var c = u.nextSibling, r = u.nodeName;
            u[zn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = c;
          }
        } else
          a === "body" && di(e.ownerDocument.body);
      a = i;
    } while (a);
    xn(t);
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
        if (!e[zn])
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
    switch (t = _u(a), e) {
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
  function di(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Zu(e);
  }
  var Pt = /* @__PURE__ */ new Map(), Qd = /* @__PURE__ */ new Set();
  function Tu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Oa = Y.d;
  Y.d = {
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
    var e = Oa.f(), t = vu();
    return e || t;
  }
  function qy(e) {
    var t = Bl(e);
    t !== null && t.tag === 5 && t.type === "form" ? cf(t) : Oa.r(e);
  }
  var vn = typeof document > "u" ? null : document;
  function Zd(e, t, a) {
    var l = vn;
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
    var l = vn;
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
          u = pn(e);
          break;
        case "script":
          u = bn(e);
      }
      Pt.has(u) || (e = R(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Pt.set(u, e), l.querySelector(i) !== null || t === "style" && l.querySelector(hi(u)) || t === "script" && l.querySelector(mi(u)) || (t = l.createElement("link"), gt(t, "link", e), rt(t), l.head.appendChild(t)));
    }
  }
  function Yy(e, t) {
    Oa.m(e, t);
    var a = vn;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Qt(l) + '"][href="' + Qt(e) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = bn(e);
      }
      if (!Pt.has(u) && (e = R({ rel: "modulepreload", href: e }, t), Pt.set(u, e), a.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(mi(u)))
              return;
        }
        l = a.createElement("link"), gt(l, "link", e), rt(l), a.head.appendChild(l);
      }
    }
  }
  function Vy(e, t, a) {
    Oa.S(e, t, a);
    var l = vn;
    if (l && e) {
      var i = Hl(l).hoistableStyles, u = pn(e);
      t = t || "default";
      var c = i.get(u);
      if (!c) {
        var r = { loading: 0, preload: null };
        if (c = l.querySelector(
          hi(u)
        ))
          r.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Pt.get(u)) && Qc(e, a);
          var m = c = l.createElement("link");
          rt(m), gt(m, "link", e), m._p = new Promise(function(A, k) {
            m.onload = A, m.onerror = k;
          }), m.addEventListener("load", function() {
            r.loading |= 1;
          }), m.addEventListener("error", function() {
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
    var a = vn;
    if (a && e) {
      var l = Hl(a).hoistableScripts, i = bn(e), u = l.get(i);
      u || (u = a.querySelector(mi(i)), u || (e = R({ src: e, async: !0 }, t), (t = Pt.get(i)) && Zc(e, t), u = a.createElement("script"), rt(u), gt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function Xy(e, t) {
    Oa.M(e, t);
    var a = vn;
    if (a && e) {
      var l = Hl(a).hoistableScripts, i = bn(e), u = l.get(i);
      u || (u = a.querySelector(mi(i)), u || (e = R({ src: e, async: !0, type: "module" }, t), (t = Pt.get(i)) && Zc(e, t), u = a.createElement("script"), rt(u), gt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function Kd(e, t, a, l) {
    var i = (i = pe.current) ? Tu(i) : null;
    if (!i) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = pn(a.href), a = Hl(
          i
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = pn(a.href);
          var u = Hl(
            i
          ).hoistableStyles, c = u.get(e);
          if (c || (i = i.ownerDocument || i, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = i.querySelector(
            hi(e)
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bn(a), a = Hl(
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
  function pn(e) {
    return 'href="' + Qt(e) + '"';
  }
  function hi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Jd(e) {
    return R({}, e, {
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
  function bn(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function mi(e) {
    return "script[async]" + e;
  }
  function $d(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Qt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, rt(l), l;
          var i = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), rt(l), gt(l, "style", i), Au(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          i = pn(a.href);
          var u = e.querySelector(
            hi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, rt(u), u;
          l = Jd(a), (i = Pt.get(i)) && Qc(l, i), u = (e.ownerDocument || e).createElement("link"), rt(u);
          var c = u;
          return c._p = new Promise(function(r, m) {
            c.onload = r, c.onerror = m;
          }), gt(u, "link", l), t.state.loading |= 4, Au(u, a.precedence, e), t.instance = u;
        case "script":
          return u = bn(a.src), (i = e.querySelector(
            mi(u)
          )) ? (t.instance = i, rt(i), i) : (l = a, (i = Pt.get(u)) && (l = R({}, a), Zc(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), rt(i), gt(i, "link", l), e.head.appendChild(i), t.instance = i);
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
      if (!(u[zn] || u[Qe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
        var i = pn(l.href), u = t.querySelector(
          hi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = wu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, rt(u);
          return;
        }
        u = t.ownerDocument || t, l = Jd(l), (i = Pt.get(i)) && Qc(l, i), u = u.createElement("link"), rt(u);
        var c = u;
        c._p = new Promise(function(r, m) {
          c.onload = r, c.onerror = m;
        }), gt(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = wu.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Kc = 0;
  function Jy(e, t) {
    return e.stylesheets && e.count === 0 && Du(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Du(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Kc === 0 && (Kc = 62500 * Cy());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Du(e, e.stylesheets), e.unsuspend)) {
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
  function wu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Du(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var zu = null;
  function Du(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, zu = /* @__PURE__ */ new Map(), t.forEach($y, e), zu = null, wu.call(e));
  }
  function $y(e, t) {
    if (!(t.state.loading & 4)) {
      var a = zu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), zu.set(e, a);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var c = i[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), l = c);
        }
        l && a.set(null, l);
      }
      i = t.instance, c = i.getAttribute("data-precedence"), u = a.get(c) || l, u === l && a.set(null, i), a.set(c, i), this.count++, l = wu.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var yi = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function Fy(e, t, a, l, i, u, c, r, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pd(e, t, a, l, i, u, c, r, m, A, k, H) {
    return e = new Fy(
      e,
      t,
      a,
      c,
      m,
      A,
      k,
      H,
      r
    ), t = 1, u === !0 && (t |= 24), u = Ut(3, null, null, t), e.current = u, u.stateNode = e, t = Ts(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, zs(u), e;
  }
  function eh(e) {
    return e ? (e = $l, e) : $l;
  }
  function th(e, t, a, l, i, u) {
    i = eh(i), l.context === null ? l.context = i : l.pendingContext = i, l = Ga(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Xa(e, l, t), a !== null && (wt(a, e, t), Kn(a, e, t));
  }
  function ah(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Jc(e, t) {
    ah(e, t), (e = e.alternate) && ah(e, t);
  }
  function lh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gl(e, 67108864);
      t !== null && wt(t, e, 67108864), Jc(e, 67108864);
    }
  }
  function nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = be(t);
      var a = gl(e, t);
      a !== null && wt(a, e, t), Jc(e, t);
    }
  }
  var Mu = !0;
  function Wy(e, t, a, l) {
    var i = S.T;
    S.T = null;
    var u = Y.p;
    try {
      Y.p = 2, $c(e, t, a, l);
    } finally {
      Y.p = u, S.T = i;
    }
  }
  function Iy(e, t, a, l) {
    var i = S.T;
    S.T = null;
    var u = Y.p;
    try {
      Y.p = 8, $c(e, t, a, l);
    } finally {
      Y.p = u, S.T = i;
    }
  }
  function $c(e, t, a, l) {
    if (Mu) {
      var i = Fc(l);
      if (i === null)
        Rc(
          e,
          t,
          l,
          Ou,
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
          var u = Bl(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Gt(u.pendingLanes);
                  if (c !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var m = 1 << 31 - bt(c);
                      r.entanglements[1] |= m, c &= ~m;
                    }
                    fa(u), (Re & 6) === 0 && (yu = De() + 500, ri(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = gl(u, 2), r !== null && wt(r, u, 2), vu(), Jc(u, 2);
            }
          if (u = Fc(l), u === null && Rc(
            e,
            t,
            l,
            Ou,
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
  var Ou = null;
  function Wc(e) {
    if (Ou = null, e = ql(e), e !== null) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = z(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ou = e, null;
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
          case _i:
            return 2;
          case _n:
            return 8;
          case Ua:
          case Tn:
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
  var Ic = !1, tl = null, al = null, ll = null, gi = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), nl = [], Py = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        gi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vi.delete(t.pointerId);
    }
  }
  function pi(e, t, a, l, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Bl(t), t !== null && lh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function eg(e, t, a, l, i) {
    switch (t) {
      case "focusin":
        return tl = pi(
          tl,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "dragenter":
        return al = pi(
          al,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "mouseover":
        return ll = pi(
          ll,
          e,
          t,
          a,
          l,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return gi.set(
          u,
          pi(
            gi.get(u) || null,
            e,
            t,
            a,
            l,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, vi.set(
          u,
          pi(
            vi.get(u) || null,
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
    var t = ql(e.target);
    if (t !== null) {
      var a = p(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = b(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              nh(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = z(a), t !== null) {
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
  function Uu(e) {
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
        return t = Bl(a), t !== null && lh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function ch(e, t, a) {
    Uu(e) && a.delete(t);
  }
  function tg() {
    Ic = !1, tl !== null && Uu(tl) && (tl = null), al !== null && Uu(al) && (al = null), ll !== null && Uu(ll) && (ll = null), gi.forEach(ch), vi.forEach(ch);
  }
  function Ru(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ic || (Ic = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      tg
    )));
  }
  var ku = null;
  function rh(e) {
    ku !== e && (ku = e, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        ku === e && (ku = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], i = e[t + 2];
          if (typeof l != "function") {
            if (Wc(l || a) === null)
              continue;
            break;
          }
          var u = Bl(a);
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
  function xn(e) {
    function t(m) {
      return Ru(m, e);
    }
    tl !== null && Ru(tl, e), al !== null && Ru(al, e), ll !== null && Ru(ll, e), gi.forEach(t), vi.forEach(t);
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
  qu.prototype.render = Pc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var a = t.current, l = Ht();
    th(a, l, e, t, null, null);
  }, qu.prototype.unmount = Pc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      th(e.current, 2, null, e, null, null), vu(), t[kl] = null;
    }
  };
  function qu(e) {
    this._internalRoot = e;
  }
  qu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = me();
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
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = v(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var ag = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bu.isDisabled && Bu.supportsFiber)
      try {
        ma = Bu.inject(
          ag
        ), dt = Bu;
      } catch {
      }
  }
  return xi.createRoot = function(e, t) {
    if (!E(e)) throw Error(f(299));
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
    ), e[kl] = t.current, Uc(e), new Pc(t);
  }, xi.hydrateRoot = function(e, t, a) {
    if (!E(e)) throw Error(f(299));
    var l = !1, i = "", u = pf, c = bf, r = xf, m = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (i = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (r = a.onRecoverableError), a.formState !== void 0 && (m = a.formState)), t = Pd(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      i,
      m,
      u,
      c,
      r,
      oh
    ), t.context = eh(null), a = t.current, l = Ht(), l = be(l), i = Ga(l), i.callback = null, Xa(a, i, l), a = l, t.current.lanes = a, fl(t, a), fa(t), e[kl] = t.current, Uc(e), new qu(t);
  }, xi.version = "19.2.8", xi;
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
}, wl = {
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
function Ag(s) {
  if (typeof s != "string" || s.length === 0)
    throw new Error("Invalid plugin API path.");
  const o = s.trim();
  if (!o || o.includes("\\") || o.includes("\0") || o.includes("#") || o.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(o))
    throw new Error("Invalid plugin API path.");
  const d = o.replace(/^\/+/, "");
  if (!d || d.startsWith("./") || d === "api/plugins" || d.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const f = d.indexOf("?"), E = f >= 0 ? d.slice(0, f) : d;
  if (!E)
    throw new Error("Invalid plugin API path.");
  const p = E.split("/");
  for (const N of p) {
    if (!N)
      throw new Error("Invalid plugin API path.");
    let v;
    try {
      v = decodeURIComponent(N);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (v === "." || v === ".." || v.includes("/") || v.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const b = new URL(`http://hana.local/${d}`);
  return `${p.map((N) => encodeURIComponent(decodeURIComponent(N))).join("/")}${b.search}`;
}
function Uh(s, o) {
  const d = Oh(s), f = Ag(o);
  return `${s.location.origin}/api/plugins/${encodeURIComponent(d)}/${f}`;
}
function Cg(s, o, d) {
  const f = Tg(s);
  if (!f)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const E = s.fetch?.bind(s) ?? globalThis.fetch?.bind(globalThis);
  if (!E)
    throw new Error("hana.api.fetch requires window.fetch.");
  const p = d ?? {}, b = new Headers(p.headers);
  return b.set(mg, f), E(Uh(s, o), {
    ...p,
    headers: b
  });
}
function wg(s = {}) {
  const o = s.targetWindow ?? pg(), d = s.parentWindow ?? o.parent, f = xg(o, s.targetOrigin), E = s.requestTimeoutMs ?? 1e4, p = s.idFactory ?? vg;
  let b = jg(o);
  const z = /* @__PURE__ */ new Set();
  function N(j) {
    d.postMessage(j, f);
  }
  function v(j, q) {
    const K = {
      protocol: cr,
      version: rr,
      kind: "event",
      type: j
    };
    q !== void 0 && (K.payload = q), N(K);
  }
  function _(j) {
    if (!Th(j, d, f))
      return;
    const q = Nh(j.data);
    if (!q.ok)
      return;
    const K = q.value;
    if (K.kind !== "event" || K.type !== "hana.theme.changed" || typeof K.payload != "object" || K.payload === null)
      return;
    const F = K.payload;
    b = {
      theme: typeof F.theme == "string" ? F.theme : b.theme,
      cssUrl: typeof F.cssUrl == "string" ? F.cssUrl : b.cssUrl
    };
    for (const de of z)
      de(b);
  }
  function R(j, q, K = {}) {
    const F = p(), de = K.timeoutMs ?? E;
    return new Promise((ae, xe) => {
      const M = () => {
        o.removeEventListener("message", te), o.clearTimeout(ne);
      }, te = (G) => {
        if (!Th(G, d, f))
          return;
        const L = Nh(G.data);
        if (!L.ok)
          return;
        const W = L.value;
        W.id !== F || W.type !== j || (W.kind === "response" && (M(), ae(W.payload)), W.kind === "error" && W.error && (M(), xe(new Eh(W.error))));
      }, ne = o.setTimeout(() => {
        M(), xe(new Eh({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${j}.`
        }));
      }, de);
      o.addEventListener("message", te);
      const ce = {
        protocol: cr,
        version: rr,
        id: F,
        kind: "request",
        type: j
      };
      q !== void 0 && (ce.payload = q), N(ce);
    });
  }
  return {
    ready(j) {
      v("hana.ready", j);
    },
    assets: {
      url(j) {
        return _g(o, j);
      }
    },
    api: {
      url(j) {
        return Uh(o, j);
      },
      fetch(j, q) {
        return Cg(o, j, q);
      }
    },
    ui: {
      resize(j) {
        v(wl.UI_RESIZE, j);
      }
    },
    theme: {
      getSnapshot() {
        return { ...b };
      },
      subscribe(j) {
        return z.size === 0 && o.addEventListener("message", _), z.add(j), j({ ...b }), () => {
          z.delete(j), z.size === 0 && o.removeEventListener("message", _);
        };
      }
    },
    host: {
      request: R
    },
    toast: {
      show(j, q) {
        return R(wl.TOAST_SHOW, j, q);
      }
    },
    external: {
      open(j, q) {
        return R(wl.EXTERNAL_OPEN, Sg(j), q);
      }
    },
    clipboard: {
      writeText(j, q) {
        return R(wl.CLIPBOARD_WRITE_TEXT, Ng(j), q);
      }
    },
    resources: {
      open(j, q) {
        return R(wl.RESOURCE_OPEN, j, q);
      },
      pick(j = {}, q) {
        return R(wl.RESOURCE_PICK, j, q);
      },
      requestAccess(j, q) {
        return R(wl.RESOURCE_REQUEST_ACCESS, j, q);
      }
    }
  };
}
let Ah = null;
function zt() {
  return Ah ??= wg(), Ah;
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
const Ch = {
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
function Dg({ mode: s = "inherit", theme: o, className: d, style: f, children: E, "data-testid": p = "hana-plugin-theme", ...b }) {
  const z = typeof o == "string" ? o : void 0, N = Mg(s, o);
  return n.jsx("div", { ...b, "data-testid": p, className: sl("hana-plugin-theme", d), "data-hana-theme-mode": s, "data-hana-theme": s === "hana" ? z : void 0, style: { ...N, ...f }, children: E });
}
function Mg(s, o) {
  if (s === "inherit")
    return {};
  const d = Og(s, o), f = {};
  for (const [E, p] of Object.entries(zg)) {
    const b = d?.[E];
    b && (f[p] = b);
  }
  return f;
}
function Og(s, o) {
  if (typeof o == "string")
    return Ch[o];
  if (o)
    return o;
  if (s === "hana")
    return Ch["warm-paper"];
}
w.forwardRef(function({ variant: o = "secondary", size: d = "md", loading: f = !1, iconLeft: E, iconRight: p, disabled: b, className: z, children: N, type: v = "button", ..._ }, R) {
  return n.jsxs("button", { ..._, ref: R, type: v, disabled: b || f, className: sl("hana-plugin-button", `hana-plugin-button-${o}`, `hana-plugin-button-${d}`, f && "hana-plugin-button-loading", z), children: [f ? n.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : E, N && n.jsx("span", { className: "hana-plugin-button-label", children: N }), !f && p] });
});
w.forwardRef(function({ label: o, size: d = "md", variant: f = "ghost", className: E, children: p, type: b = "button", ...z }, N) {
  return n.jsx("button", { ...z, ref: N, type: b, "aria-label": o, title: z.title || o, className: sl("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${f}`, E), children: p });
});
w.forwardRef(function({ label: o, hint: d, error: f, id: E, className: p, inputClassName: b, ...z }, N) {
  const v = w.useId(), _ = E || v;
  return n.jsx(Rh, { label: o, hint: d, error: f, htmlFor: _, className: p, children: n.jsx("input", { ...z, ref: N, id: _, "aria-invalid": !!f, className: sl("hana-plugin-input", b) }) });
});
w.forwardRef(function({ label: o, hint: d, error: f, id: E, className: p, textareaClassName: b, rows: z = 4, ...N }, v) {
  const _ = w.useId(), R = E || _;
  return n.jsx(Rh, { label: o, hint: d, error: f, htmlFor: R, className: p, children: n.jsx("textarea", { ...N, ref: v, id: R, rows: z, "aria-invalid": !!f, className: sl("hana-plugin-textarea", b) }) });
});
w.forwardRef(function({ checked: o, onChange: d, label: f, disabled: E, className: p, onClick: b, type: z = "button", ...N }, v) {
  const _ = typeof f == "string" ? f : N["aria-label"];
  return n.jsxs("span", { className: sl("hana-plugin-switch-wrap", p), children: [n.jsx("button", { ...N, ref: v, type: z, role: "switch", "aria-checked": o, "aria-label": _, disabled: E, className: sl("hana-plugin-switch", o && "hana-plugin-switch-on"), onClick: (R) => {
    b?.(R), !R.defaultPrevented && !E && d?.(!o);
  }, children: n.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), f && n.jsx("span", { className: "hana-plugin-switch-label", children: f })] });
});
function Rh({ label: s, hint: o, error: d, htmlFor: f, className: E, children: p }) {
  return n.jsxs("div", { className: sl("hana-plugin-field", E), children: [s && n.jsx("label", { className: "hana-plugin-field-label", htmlFor: f, children: s }), o && n.jsx("div", { className: "hana-plugin-field-hint", children: o }), p, d && n.jsx("div", { className: "hana-plugin-field-error", children: d })] });
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
  const f = gr(s).start || o, E = zl(f, -or(f));
  return qh(E, 7);
}
function Bh(s, o, d = 3) {
  const f = Math.max(1, Math.floor(d)), E = Math.max(0, Math.floor(o)), p = s.slice(E * f, E * f + f);
  return [...p, ...Array(Math.max(0, f - p.length)).fill(null)];
}
function Ug(s, o) {
  const f = gr(s).start || o, E = kh.test(f) ? `${f.slice(0, 7)}-01` : o, p = /* @__PURE__ */ new Date(`${E}T12:00:00Z`);
  p.setUTCMonth(p.getUTCMonth() + 1, 1);
  const b = new Date(p);
  b.setUTCDate(b.getUTCDate() - 1);
  const z = b.toISOString().slice(0, 10), N = zl(E, -or(E)), v = 6 - or(z), _ = zl(z, v), R = Math.round(((/* @__PURE__ */ new Date(`${_}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${N}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return qh(N, R);
}
function Si(s) {
  return (s.start_at || s.deadline_at || s.window_start || "").slice(0, 10);
}
function ji(s) {
  if (!s || s.length < 16) return null;
  const o = Number(s.slice(11, 13)), d = Number(s.slice(14, 16));
  return !Number.isFinite(o) || !Number.isFinite(d) ? null : o * 60 + d;
}
function Hh(s) {
  const o = s.map((p) => ji(p.start_at || p.deadline_at)).filter((p) => p !== null), d = s.map((p) => {
    const b = ji(p.end_at);
    if (b !== null) return b;
    const z = ji(p.start_at || p.deadline_at);
    return z === null ? null : z + Number(p.duration || p.estimated_minutes || 45);
  }).filter((p) => p !== null), f = o.length ? Math.floor(Math.min(...o) / 60) - 1 : 10, E = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, f)),
    endHour: Math.min(24, Math.max(22, E))
  };
}
function Lh(s, o, d, f = 56) {
  const E = ji(s.start_at || s.deadline_at);
  if (E === null) return null;
  const b = ji(s.end_at) ?? E + Number(s.duration || s.estimated_minutes || 45), z = Math.max(o * 60, E), N = Math.min(d * 60, Math.max(b, z + 30));
  return {
    top: (z - o * 60) / 60 * f,
    height: Math.max(30, (N - z) / 60 * f)
  };
}
function vr(s) {
  const o = s.map((p) => {
    const b = p.start_at || p.deadline_at, z = b ? new Date(b).getTime() : Number.NaN, N = p.end_at ? new Date(p.end_at).getTime() : Number.NaN, v = Number.isFinite(N) ? N : z + Number(p.duration || p.estimated_minutes || 45) * 6e4;
    return { item: p, start: z, end: v };
  }).filter((p) => Number.isFinite(p.start)).sort((p, b) => p.start - b.start || p.end - b.end), d = [], f = o.map((p) => {
    let b = d.findIndex((z) => z <= p.start);
    return b < 0 && (b = d.length), d[b] = p.end, { ...p, lane: b };
  }), E = Math.max(1, d.length);
  return f.map((p) => ({ ...p, laneCount: E }));
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
async function Xe(s, o) {
  let d;
  try {
    d = await yr.api.fetch(s, o);
  } catch (f) {
    const E = f instanceof Error ? f.message : String(f || "未知错误");
    throw new Error(`页面会话请求失败：${E}`);
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
const wh = [
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
class Lg extends w.Component {
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
function Hu(s) {
  if (!s) return "当前范围";
  const [o, d] = s.split("..");
  if (!o || !d || !/^\d{4}-\d{2}-\d{2}$/.test(o) || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return s;
  const f = (E) => new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric"
  }).format(/* @__PURE__ */ new Date(`${E}T12:00:00+08:00`));
  return o === d ? f(o) : `${f(o)}—${f(d)}`;
}
function $e(s) {
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
function En(s, o) {
  if (pr(s, o)) return "state-pending";
  const d = Yh(s.status);
  return d === "finished" ? "state-finished" : d === "muted" ? "state-neutral" : d === "error" ? "state-error" : d === "warn" ? "state-pending" : s.domain === "course" ? "state-confirmed" : "state-pending";
}
function jn(s) {
  return s.scope === "one_off" || ["reservation", "manual", "move"].includes(s.origin || "");
}
function Sn(s) {
  try {
    const o = window.sessionStorage.getItem(`laosu-workbench.cache.${s}`);
    return o ? JSON.parse(o) : null;
  } catch {
    return null;
  }
}
function Ni(s, o) {
  try {
    window.sessionStorage.setItem(`laosu-workbench.cache.${s}`, JSON.stringify(o));
  } catch {
  }
}
function Vg() {
  const s = new URLSearchParams(window.location.search), o = window.localStorage.getItem("laosu-workbench.tab"), d = window.localStorage.getItem("laosu-workbench.scope"), f = s.get("tab") || o || "overview", E = s.get("scope") || d || "week", p = wh.map((U) => U.id).includes(f) ? f : "overview", b = ["today", "week", "month", "horizon"].includes(E) ? E : "week", z = s.get("preview"), [N, v] = w.useState(p), [_, R] = w.useState(b), [j, q] = w.useState(f === "actions" || !!z), [K, F] = w.useState(null), de = K !== null, [ae, xe] = w.useState(null), [M, te] = w.useState(!0), [ne, ce] = w.useState(""), [G, L] = w.useState(null), [W, I] = w.useState(null), [V, ye] = w.useState({ text: "", nonce: 0 }), [Ve, Ge] = w.useState(!1), [Q, S] = w.useState(""), [Y, X] = w.useState(null), [g, ee] = w.useState({}), [h, O] = w.useState(!1), [$, P] = w.useState(null), [he, pe] = w.useState(0), [Se, it] = w.useState(null);
  function J(U, Z) {
    Z && it({ section: Z, nonce: Date.now() }), _n(U);
  }
  const [ze, ve] = w.useState(null), le = w.useRef(null), Dt = w.useRef(null), et = w.useRef(dr()), ct = w.useRef(dr()), ia = w.useRef(/* @__PURE__ */ new Set()), ua = w.useRef(null), Vt = w.useRef(!1), ut = w.useRef(!1), ea = w.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), ft = w.useCallback(async (U = _, Z = {}) => {
    const ie = Z.silent === !0, re = et.current.begin();
    ie || (te(!0), ce(""));
    try {
      const be = new URLSearchParams({ scope: U });
      Z.fresh && be.set("fresh", "1");
      const Me = Bg(await Xe(`api/dashboard?${be.toString()}`));
      return et.current.isCurrent(re) ? (xe(Me), Ni(`dashboard.${U}`, Me), !0) : null;
    } catch (be) {
      return et.current.isCurrent(re) ? (ie || ce(be.message || "读取失败"), !1) : null;
    } finally {
      et.current.isCurrent(re) && !ie && te(!1);
    }
  }, [_]);
  w.useEffect(() => {
    const U = Sn(`dashboard.${b}`);
    U && (xe(U), te(!1)), ft(b, { fresh: !0, silent: !!U });
  }, []), w.useEffect(() => {
    const U = (Z) => {
      Z.target instanceof HTMLElement && !le.current?.contains(Z.target) && (ua.current = Z.target);
    };
    return window.addEventListener("pointerdown", U, !0), () => window.removeEventListener("pointerdown", U, !0);
  }, []), w.useEffect(() => {
    z && (q(!0), Xe(`api/preview/${encodeURIComponent(z)}`).then(L).catch((U) => {
      L({ ok: !1, error: U.message });
    }));
  }, [z]), w.useEffect(() => {
    if (!j) return;
    const U = le.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Vt.current) {
      const me = new URL(window.location.href);
      me.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", me), Vt.current = !0;
    }
    const ie = window.setTimeout(() => {
      ((W ? U?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : U?.querySelector(".ai-composer textarea")) || U?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), W && U?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), re = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((me) => me.getClientRects().length > 0 && !me.closest("[hidden]")), be = (me) => {
      if (me.key === "Escape") {
        me.preventDefault(), ya();
        return;
      }
      if (me.key !== "Tab") return;
      const St = re();
      if (!St.length) return;
      const vt = St[0], Qe = St[St.length - 1];
      U?.contains(document.activeElement) ? me.shiftKey && document.activeElement === vt ? (me.preventDefault(), Qe.focus()) : !me.shiftKey && document.activeElement === Qe && (me.preventDefault(), vt.focus()) : (me.preventDefault(), (me.shiftKey ? Qe : vt).focus());
    }, Me = () => {
      Vt.current && (Vt.current = !1, q(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", be), window.addEventListener("popstate", Me), () => {
      window.clearTimeout(ie), document.body.style.overflow = Z, window.removeEventListener("keydown", be), window.removeEventListener("popstate", Me), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [j]), w.useEffect(() => {
    if (!de) return;
    const U = Dt.current, Z = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !ut.current) {
      const me = new URL(window.location.href);
      me.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", me), ut.current = !0;
    }
    const ie = window.setTimeout(() => U?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), re = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((me) => me.getClientRects().length > 0 && !me.closest("[hidden]")), be = (me) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (me.key === "Escape") {
        me.preventDefault(), Ra();
        return;
      }
      if (me.key !== "Tab") return;
      const St = re();
      if (!St.length) return;
      const vt = St[0], Qe = St[St.length - 1];
      U?.contains(document.activeElement) ? me.shiftKey && document.activeElement === vt ? (me.preventDefault(), Qe.focus()) : !me.shiftKey && document.activeElement === Qe && (me.preventDefault(), vt.focus()) : (me.preventDefault(), (me.shiftKey ? Qe : vt).focus());
    }, Me = () => {
      const me = new URL(window.location.href).searchParams.get("drawer");
      me === "context" || me === "actions" || !ut.current || (ut.current = !1, F(null));
    };
    return window.addEventListener("keydown", be), window.addEventListener("popstate", Me), () => {
      window.clearTimeout(ie), document.body.style.overflow = Z, window.removeEventListener("keydown", be), window.removeEventListener("popstate", Me), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [de]), w.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", N);
    const U = () => {
      ea.current[N] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${N}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", U), () => window.removeEventListener("pagehide", U);
  }, [N]), w.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", _);
  }, [_]), w.useEffect(() => {
    if (ze?.tab === N) return;
    const U = ea.current[N] || 0;
    let Z = 0, ie, re = !1;
    const be = () => {
      re = !0;
    }, Me = () => {
      re || (window.scrollTo({ top: U, behavior: "auto" }), Z += 1, Math.abs(window.scrollY - U) > 3 && Z < 15 && (ie = window.setTimeout(Me, 90)));
    }, me = window.requestAnimationFrame(Me);
    return window.addEventListener("wheel", be, { passive: !0 }), window.addEventListener("touchstart", be, { passive: !0 }), window.addEventListener("keydown", be), () => {
      re = !0, window.cancelAnimationFrame(me), ie && window.clearTimeout(ie), window.removeEventListener("wheel", be), window.removeEventListener("touchstart", be), window.removeEventListener("keydown", be);
    };
  }, [N]), w.useEffect(() => {
    if (!ze || ze.tab !== N) return;
    let U = 0, Z, ie, re;
    const be = () => {
      const me = Array.from(document.querySelectorAll("[data-item-id]")).find((St) => St.dataset.itemId === ze.id);
      if (!me && U < 20) {
        U += 1, Z = window.setTimeout(be, 60);
        return;
      }
      if (!me) {
        ve(null);
        return;
      }
      re = me, me.classList.add("target-highlight"), me.setAttribute("tabindex", "-1"), me.scrollIntoView({ behavior: "smooth", block: "center" }), me.focus({ preventScroll: !0 }), ie = window.setTimeout(() => {
        me.classList.remove("target-highlight"), me.removeAttribute("tabindex"), ve(null);
      }, 2400);
    }, Me = window.setTimeout(be, 50);
    return () => {
      window.clearTimeout(Me), Z && window.clearTimeout(Z), ie && window.clearTimeout(ie), re?.classList.remove("target-highlight"), re?.removeAttribute("tabindex");
    };
  }, [ze, N, ae?.observedAt]), w.useEffect(() => {
    if (!Q) return;
    const U = window.setTimeout(() => S(""), 4800);
    return () => window.clearTimeout(U);
  }, [Q]);
  const sa = w.useRef(null);
  w.useEffect(() => {
    const U = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const Z = await Xe("api/data-revision");
          if (!Z?.ok || typeof Z.revision != "number") return;
          if (sa.current === null) {
            sa.current = Z.revision;
            return;
          }
          Z.revision !== sa.current && (sa.current = Z.revision, Gt({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(U);
  }, [_]);
  const Ol = w.useMemo(
    () => (ae?.pending ?? []).filter((U) => !["completed", "cancelled"].includes(U.status)),
    [ae]
  ), De = w.useMemo(() => {
    const U = Date.now();
    return (ae?.items ?? []).filter((Z) => $e(Z) && new Date($e(Z)).getTime() >= U && !["completed", "cancelled", "已完成", "已取消"].includes(Z.status)).sort((Z, ie) => new Date($e(Z)).getTime() - new Date($e(ie)).getTime())[0] ?? null;
  }, [ae]);
  async function cl(U) {
    const Z = new URL(window.location.href);
    Z.searchParams.set("scope", U), window.history.replaceState(window.history.state, "", Z), R(U);
    const ie = Sn(`dashboard.${U}`);
    if (ie) {
      xe(ie), te(!1), ft(U, { fresh: !0, silent: !0 });
      return;
    }
    await ft(U);
  }
  function _i(U = N) {
    ea.current[U] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${U}`, String(window.scrollY));
  }
  function _n(U, Z) {
    _i();
    const ie = new URL(window.location.href);
    ie.searchParams.set("tab", U), window.history.replaceState(window.history.state, "", ie), ve(null), v(U);
  }
  function Ua(U) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const Z = document.activeElement;
    ((Z instanceof HTMLElement && Z !== document.body && !le.current?.contains(Z) ? Z : null) || U || ua.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function Tn(U) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const Z = document.activeElement, ie = Z instanceof HTMLElement && Z !== document.body && !Dt.current?.contains(Z) ? Z : null;
    (U || ie || ua.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function An(U, Z) {
    Tn(Z), F({ kind: "item", item: U });
  }
  function Ti(U, Z, ie) {
    Tn(Z), F({ kind: "day", date: U, items: ie });
  }
  function Vu(U) {
    Tn(U), F({ kind: "system" });
  }
  function ma() {
    const U = /* @__PURE__ */ Symbol("workbench-operation");
    return ia.current.add(U), Ge(!0), U;
  }
  function dt(U) {
    ia.current.delete(U), Ge(ia.current.size > 0);
  }
  function Mt() {
    ct.current.invalidate(), L(null);
  }
  function bt(U) {
    ct.current.invalidate(), L(U);
  }
  function Gu() {
    Ua(document.querySelector(".ai-action-button")), I(null), ye({ text: "", nonce: Date.now() }), Mt(), q(!0);
  }
  function Xu(U) {
    Ua(), I(null), ye({ text: U, nonce: Date.now() }), Mt(), q(!0);
  }
  function rl(U) {
    Ua(), I(U), Mt(), q(!0);
  }
  function ya() {
    if (Vt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    Vt.current = !1, q(!1);
  }
  function Ra() {
    if (ut.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    ut.current = !1, F(null);
  }
  async function ka(U, Z) {
    if (!Y) {
      X(Z.id);
      try {
        const ie = U === "courseCancel" ? await Xe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: Z.title, date: Z.start_at?.slice(0, 10), time: Z.start_at?.slice(11, 16), reason: "没上" })
        }) : await Xe("api/affairs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: Z.id, expectedVersion: Z.version })
        });
        if (!ie.ok) throw new Error(ie.error || "处理未完成");
        U === "affairComplete" ? (ee((re) => ({ ...re, [Z.id]: { ok: !0, text: ie.message || "已完成", buttonLabel: "已完成" } })), S(`${Z.title} 已完成`)) : S(`${Z.title} ${Z.start_at?.slice(5, 16) ?? ""} 已记录没上`), await ft(_);
      } catch (ie) {
        U === "affairComplete" && ee((re) => ({ ...re, [Z.id]: { ok: !1, text: `处理失败：${ie.message || "未知错误"}` } })), S(`处理失败：${ie.message || "未知错误"}`);
      } finally {
        X(null);
      }
    }
  }
  async function Gt(U = {}) {
    const Z = U.silent === !0;
    Z || S("正在刷新数据…");
    const ie = await ft(_, { ...U, fresh: !Z });
    ie === !0 ? (ee({}), P(null), pe((re) => re + 1), Z || S("课表、筹备、驾驶舱和事务数据已全部刷新")) : ie === !1 && !Z && S("刷新失败，请查看页面错误");
  }
  async function Ul(U) {
    const Z = ct.current.begin(), ie = ma();
    L(null);
    try {
      const re = await Xe("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(U)
      });
      if (!ct.current.isCurrent(Z)) return;
      L({ ...re, operation: String(U.operation || ""), input: U });
    } catch (re) {
      ct.current.isCurrent(Z) && L({ ok: !1, error: re.message });
    } finally {
      dt(ie);
    }
  }
  async function ol(U) {
    if (!h) {
      O(!0), P({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const Z = await Xe("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: U })
        });
        if (!Z.ok) throw new Error(Z.error || "全部上完的处理未完成");
        P({ ok: !0, text: Z.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await ft(_);
      } catch (Z) {
        const ie = Z.message || "全部上完的处理失败";
        P({ ok: !1, text: `处理失败：${ie}`, buttonLabel: "重试全部上完" });
      } finally {
        O(!1);
      }
    }
  }
  async function Cn(U) {
    if (!Y) {
      X(U.id), ee((Z) => ({ ...Z, [U.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const Z = await Xe("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: U.id, expectedVersion: U.version })
        });
        if (!Z.ok) throw new Error(Z.error || "没约上的处理未完成");
        const ie = Z.outcome?.candidateDate, re = ie ? `已安排 ${ie.slice(5)}` : "已处理";
        ee((be) => ({ ...be, [U.id]: {
          ok: !0,
          text: Z.message || "已推进到下一次尝试",
          buttonLabel: re,
          undo: Z.outcome ? { expectedVersion: Z.outcome.version } : void 0
        } })), await ft(_);
      } catch (Z) {
        const ie = Z.message || "没约上的处理失败";
        ee((re) => ({ ...re, [U.id]: { ok: !1, text: `处理失败：${ie}`, buttonLabel: "重试" } }));
      } finally {
        X(null);
      }
    }
  }
  async function Rl(U) {
    if (Y) return;
    const Z = g[U.id]?.undo;
    X(U.id), ee((ie) => ({ ...ie, [U.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const ie = await Xe("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: U.id, expectedVersion: Z?.expectedVersion ?? U.version })
      });
      if (!ie.ok) throw new Error(ie.error || "恢复上一候选日未完成");
      const re = ie.outcome?.candidateDate;
      ee((be) => ({ ...be, [U.id]: {
        ok: !0,
        text: ie.message || "已恢复到上一候选日",
        buttonLabel: re ? `回到 ${re.slice(5)}` : "已恢复"
      } })), await ft(_);
    } catch (ie) {
      const re = ie.message || "恢复上一候选日失败";
      ee((be) => ({ ...be, [U.id]: { ok: !1, text: `恢复失败：${re}`, buttonLabel: "重试" } }));
    } finally {
      X(null);
    }
  }
  async function wn() {
    if (!G?.token || !G.canCommit) return;
    const U = ct.current.begin(), Z = ma(), ie = G.operation || W?.operation;
    try {
      const re = await Xe("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: G.token })
      }), be = { ok: re.ok, summary: re.summary, message: `${re.message || ""}${re.exportMessage ? `
导出：${re.exportMessage}` : ""}${re.syncMessage ? `
日历：${re.syncMessage}` : ""}`, result: re, operation: ie, input: G.input, committed: !!re.ok };
      await ft(_), pe((Me) => Me + 1), ct.current.isCurrent(U) && L(be);
    } catch (re) {
      ct.current.isCurrent(U) && L({ ok: !1, error: re.message });
    } finally {
      dt(Z);
    }
  }
  async function fl() {
    const U = G?.batchItems ?? [];
    if (!U.length) return;
    const Z = ct.current.begin(), ie = ma(), re = /* @__PURE__ */ new Map();
    try {
      for (const be of U) {
        if (!be.canCommit) {
          re.set(be.token, { ok: !1, message: "预演未通过，已跳过" });
          continue;
        }
        try {
          const Me = await Xe("api/commit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: be.token })
          });
          if (re.set(be.token, { ok: !!Me.ok, message: Me.message || (Me.ok ? "已执行" : "执行失败") }), !Me.ok) break;
        } catch (Me) {
          re.set(be.token, { ok: !1, message: Me.message || "提交失败" });
          break;
        }
      }
      await ft(_), pe((be) => be + 1), ct.current.isCurrent(Z) && G && L({
        ...G,
        ok: U.every((be) => re.get(be.token)?.ok === !0),
        committed: !0,
        message: U.map((be) => {
          const Me = re.get(be.token);
          return `${Me?.ok ? "✓" : Me ? "✗" : "·"} ${be.summary}：${Me?.message || "未执行"}`;
        }).join(`
`),
        batchItems: U.map((be) => {
          const Me = re.get(be.token);
          return { ...be, canCommit: !1, resultOk: Me?.ok ?? !1, message: Me?.message || "未执行" };
        })
      });
    } finally {
      dt(ie);
    }
  }
  return /* @__PURE__ */ n.jsx(Dg, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ n.jsxs("div", { className: "workbench-shell", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "topbar", children: [
      /* @__PURE__ */ n.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", children: wh.map((U) => /* @__PURE__ */ n.jsx("button", { type: "button", className: N === U.id ? "tab active" : "tab", onClick: () => _n(U.id), children: U.label }, U.id)) }),
      /* @__PURE__ */ n.jsxs("div", { className: "top-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: j ? "ai-action-button active" : "ai-action-button", onClick: Gu, "aria-expanded": j, children: "✦ AI 操作" }),
        /* @__PURE__ */ n.jsx("span", { className: "updated-at", children: Yg(ae?.observedAt) }),
        /* @__PURE__ */ n.jsxs("button", { type: "button", className: `${ae?.health?.ok ? "health good" : "health bad"} health-button${K?.kind === "system" ? " active" : ""}`, onClick: (U) => Vu(U.currentTarget), "aria-expanded": K?.kind === "system", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          ae?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "icon-button", onClick: () => {
          Gt();
        }, "aria-label": "刷新", disabled: M, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("main", { className: "main-area", children: [
      Q && /* @__PURE__ */ n.jsx("div", { className: "toast", role: "status", children: Q }),
      ne && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "读取失败", text: ne }),
      ae?.warnings?.length ? /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: "有警告", text: ae.warnings.join("；") }) : null,
      M && !ae ? /* @__PURE__ */ n.jsx(br, {}) : null,
      ae && N !== "planning" && N !== "affairs" && /* @__PURE__ */ n.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": M, children: [
        /* @__PURE__ */ n.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ n.jsx("span", { children: M ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ n.jsx("strong", { children: Hu(ae.range) })
        ] }),
        /* @__PURE__ */ n.jsx(
          Lu,
          {
            label: "时间范围切换",
            busy: M,
            value: _,
            onChange: (U) => {
              cl(U);
            },
            items: Object.keys(hr).map((U) => ({ id: U, label: hr[U] }))
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: M && ae ? "view-content scope-loading" : "view-content", "aria-busy": M && !!ae, inert: M && !!ae, children: [
        ae && N === "overview" && /* @__PURE__ */ n.jsx(Gg, { dashboard: ae, pending: Ol, upcoming: De, onInspect: An, onOpenDay: Ti, onPrepare: rl, onRetry: Cn, onRetryPrev: Rl, retryingId: Y, affairFeedback: g, onDayComplete: ol, dayBusy: h, dayFeedback: $, onNavigate: J, onQuick: ka, onDataChanged: Gt }),
        N === "planning" && /* @__PURE__ */ n.jsx($g, { onAction: rl, onAskAi: Xu, refreshKey: he, sectionHint: Se, scheduleText: ae?.scheduleText, onDataChanged: Gt }),
        N === "affairs" && /* @__PURE__ */ n.jsx(Pg, { onQuick: ka, onPrepare: rl, onInspect: An, onRetry: Cn, onRetryPrev: Rl, retryingId: Y, feedback: g, refreshKey: he, observedAt: ae?.observedAt ?? "", onOpenDay: (U, Z, ie) => Ti(U, ie, Z), localDate: ae?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "context-drawer-backdrop", hidden: !de, onMouseDown: (U) => {
      U.currentTarget === U.target && Ra();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: Dt, className: "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ n.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "context-back", onClick: Ra, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: K?.kind === "system" ? "运行状态" : K?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ n.jsx("h2", { children: K?.kind === "system" ? "系统状态" : K?.kind === "day" ? jt(`${K.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : K?.item.title }),
          /* @__PURE__ */ n.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "context-drawer-body", children: K && ae && /* @__PURE__ */ n.jsx(
        nv,
        {
          view: K,
          dashboard: ae,
          onQuick: ka,
          onPrepare: rl,
          onRetry: Cn,
          onRetryPrev: Rl,
          retryingId: Y,
          affairFeedback: g,
          onSync: () => rl({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: "action-drawer-backdrop", hidden: !j, onMouseDown: (U) => {
      U.currentTarget === U.target && ya();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: le, className: "action-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
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
          students: ae?.students ?? [],
          preset: W,
          aiDraft: V,
          preview: G,
          busy: Ve,
          onPreview: Ul,
          onAiPreview: bt,
          onCommit: wn,
          onCommitBatch: fl,
          onClear: Mt,
          onClose: ya
        }
      ) })
    ] }) })
  ] }) });
}
function Gg({ dashboard: s, pending: o, upcoming: d, onInspect: f, onOpenDay: E, onPrepare: p, onQuick: b, onRetry: z, onRetryPrev: N, retryingId: v, affairFeedback: _, onDayComplete: R, dayBusy: j, dayFeedback: q, onNavigate: K, onDataChanged: F }) {
  const de = w.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return s.items.forEach((I) => W.set(I.id, I)), s.affairs.forEach((I) => W.set(I.id, { ...I, domain: "affair" })), s.courses.forEach((I) => W.set(I.id, { ...I, domain: "course" })), Array.from(W.values()).sort((I, V) => String($e(I) || "").localeCompare(String($e(V) || "")));
  }, [s.items, s.affairs, s.courses]), ae = w.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return de.forEach((I) => {
      const V = $e(I)?.slice(0, 10) || "未定日期";
      W.set(V, [...W.get(V) || [], I]);
    }), Array.from(W.entries()).sort(([I], [V]) => I.localeCompare(V));
  }, [de]), xe = s.courses.filter((W) => W.start_at?.slice(0, 10) === s.localDate && W.status !== "已取消"), M = xe.filter((W) => W.status === "待上课"), te = xe.map((W) => W.end_at).filter(Boolean).sort().at(-1) || null, ne = !!(te && Date.now() >= new Date(te).getTime()), ce = j ? "处理中…" : q?.buttonLabel || (M.length ? "全部上完" : "已全部记录"), G = j || !!q?.ok || !M.length || !ne, L = {
    today: "把今天安排清楚。",
    week: "把今天和这周，放在一张桌面上。",
    month: "把这个月的课程和事务放在一张桌面上。",
    horizon: "把未来安排放在一张桌面上。"
  }[s.scope];
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(
      Nn,
      {
        eyebrow: `${s.localDate} · ${hr[s.scope]}`,
        title: L,
        description: "数据来自排课与事务系统实时回读。"
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "overview-duo", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel pending-action-panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "待处理", meta: `${o.length} 项` }),
        o.length ? o.slice(0, 4).map((W) => /* @__PURE__ */ n.jsx(fv, { item: W, onInspect: f, onPrepare: p, onQuick: b, onRetry: z, onRetryPrev: N, retryingId: v, feedback: _[W.id] }, W.id)) : /* @__PURE__ */ n.jsx(ha, { title: "没有待处理事务", text: "当前队列是干净的。", compact: !0 })
      ] }),
      /* @__PURE__ */ n.jsx(Xg, { observedAt: s.observedAt, onPrepare: p, onOpenDay: E, onNavigate: K, onRetry: z, onDataChanged: F })
    ] }),
    /* @__PURE__ */ n.jsx(rv, { course: s.nextCourse || null, advice: s.commuteAdvice || null, onOpen: (W) => s.nextCourse && f(s.nextCourse, W), onPrepare: p, onQuick: b }),
    s.scope === "today" && xe.length > 0 && /* @__PURE__ */ n.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ n.jsx("strong", { children: M.length ? `还有 ${M.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ n.jsx("span", { children: M.length && !ne ? `最后一节 ${Lt(te)} 结束后可操作` : "提交后会写入本地课表并同步日历" }),
        q && /* @__PURE__ */ n.jsx(Ml, { ok: q.ok, text: q.text })
      ] }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: G,
          onClick: () => {
            R(s.localDate);
          },
          children: ce
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "metrics-grid", children: [
      /* @__PURE__ */ n.jsx(da, { label: "课程", value: s.courses.length, hint: Hu(s.range), tone: "sage" }),
      /* @__PURE__ */ n.jsx(da, { label: "待办", value: o.length, hint: o[0]?.title || "没有积压", tone: "amber" }),
      /* @__PURE__ */ n.jsx(da, { label: "下一项", value: d ? Lt($e(d)) || "待定" : "无", hint: d?.title || "当前范围内已清空", tone: "blue" }),
      /* @__PURE__ */ n.jsx(da, { label: "系统", value: s.health?.ok ? "正常" : "异常", hint: `活动事务 ${s.health?.database?.verification?.counts?.active ?? "—"}`, tone: "ink" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: s.scope === "week" || s.scope === "month" ? "panel wide calendar-panel" : "panel wide", children: [
      /* @__PURE__ */ n.jsx(
        Yt,
        {
          title: s.scope === "week" ? "周视图" : s.scope === "month" ? "月视图" : "时间轴",
          meta: Hu(s.range)
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
      s.scope === "week" ? /* @__PURE__ */ n.jsx(Kg, { items: de, range: s.range, localDate: s.localDate, onInspect: f, onPrepare: p, onQuick: b, onRetry: z, retryingId: v, affairFeedback: _ }) : s.scope === "month" ? /* @__PURE__ */ n.jsx(Qh, { items: de, range: s.range, localDate: s.localDate, onOpenDay: E }) : ae.length ? ae.map(([W, I]) => /* @__PURE__ */ n.jsxs("div", { className: "day-group", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "day-label", children: [
          /* @__PURE__ */ n.jsx("strong", { children: W === "未定日期" ? W : jt(`${W}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            I.length,
            " 项"
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-list", children: I.map((V) => /* @__PURE__ */ n.jsx(ov, { item: V, onInspect: f, onPrepare: p, onQuick: b, onRetry: z, retryingId: v, feedback: _[V.id] }, V.id)) })
      ] }, W)) : /* @__PURE__ */ n.jsx(ha, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
    ] })
  ] });
}
function Xg({ observedAt: s, onPrepare: o, onOpenDay: d, onNavigate: f, onRetry: E, onDataChanged: p }) {
  const [b, z] = w.useState(() => Sn("suggestions")), [N, v] = w.useState(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem("laosu-workbench.suggestions.dismissed") || "[]");
    } catch {
      return [];
    }
  }), _ = w.useCallback((M) => {
    Xe(`api/suggestions${M ? "?fresh=1" : ""}`).then((te) => {
      te?.cards && (z(te), Ni("suggestions", te));
    }).catch(() => {
    });
  }, []);
  w.useEffect(() => {
    _(!0);
  }, [_]), w.useEffect(() => {
    s && _(!1);
  }, [s, _]);
  function R(M) {
    v((te) => {
      const ne = te.includes(M) ? te : [...te, M];
      try {
        window.sessionStorage.setItem("laosu-workbench.suggestions.dismissed", JSON.stringify(ne));
      } catch {
      }
      return ne;
    });
  }
  const [j, q] = w.useState(null), [K, F] = w.useState({});
  async function de(M, te) {
    if (j) return;
    const ne = M.id;
    q(ne), F((ce) => ({ ...ce, [ne]: { ok: !0, text: "正在处理…" } }));
    try {
      let ce;
      if (M.action.kind === "overdue" && te === "done")
        ce = await Xe("api/courses/overdue-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: M.action.student, date: M.action.date })
        });
      else if (M.action.kind === "overdue")
        ce = await Xe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: M.action.student, date: M.action.date, time: M.action.time, reason: "没上" })
        });
      else if (M.action.operation === "calendar_sync")
        ce = await Xe("api/calendar/sync-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(M.action.input ?? {})
        });
      else if (M.action.operation === "quarantine_overdue")
        ce = await Xe("api/courses/quarantine-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      else
        throw new Error("该建议不支持一键执行");
      if (!ce.ok) throw new Error(ce.error || "处理未完成");
      F((G) => ({ ...G, [ne]: { ok: !0, text: ce.message || "已处理" } })), R(ne), _(!0), p?.({ silent: !0 });
    } catch (ce) {
      F((G) => ({ ...G, [ne]: { ok: !1, text: `处理失败：${ce.message || "未知错误"}` } }));
    } finally {
      q(null);
    }
  }
  async function ae(M) {
    if (j) return;
    const te = M.id;
    q(te), F((ne) => ({ ...ne, [te]: { ok: !0, text: "正在补齐…" } }));
    try {
      const ne = await Xe("api/affairs/backfill-end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: M.action.ids ?? [] })
      });
      if (!ne.ok) throw new Error(ne.error || "补齐未完成");
      F((ce) => ({ ...ce, [te]: { ok: !0, text: ne.message || "已补齐" } })), R(te), _(!0), p?.({ silent: !0 });
    } catch (ne) {
      F((ce) => ({ ...ce, [te]: { ok: !1, text: `补齐失败：${ne.message || "未知错误"}` } }));
    } finally {
      q(null);
    }
  }
  const xe = (b?.cards ?? []).filter((M) => !N.includes(M.id));
  return xe.length ? /* @__PURE__ */ n.jsxs("section", { className: "panel", "aria-label": "建议处理", children: [
    /* @__PURE__ */ n.jsx(Yt, { title: "建议处理", meta: `${xe.length} 项` }),
    /* @__PURE__ */ n.jsx("div", { children: xe.map((M) => {
      const te = M.tone === "urgent" ? "异常" : M.tone === "warn" ? "待确认" : "scheduled";
      return /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-item contextual-action-host actionable action-open", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: M.title }),
          /* @__PURE__ */ n.jsx("span", { children: M.detail }),
          K[M.id] && /* @__PURE__ */ n.jsx(Ml, { ok: K[M.id].ok, text: K[M.id].text })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(Ei, { value: te }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-inline-action", children: [
          M.action.kind === "overdue" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: j === M.id, onClick: () => {
              de(M, "done");
            }, children: j === M.id ? "处理中…" : M.action.label }),
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!j, onClick: () => {
              de(M, "cancelled");
            }, children: M.action.cancelLabel || "没上" })
          ] }),
          M.action.kind === "backfill" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!j, onClick: () => {
            ae(M);
          }, children: j === M.id ? "处理中…" : M.action.label }),
          M.action.kind === "preview" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!j, onClick: () => {
            const ne = M.action.operation;
            if (ne === "calendar_sync" || ne === "quarantine_overdue") {
              de(M);
              return;
            }
            o({ operation: ne ?? "", ...M.action.input ?? {} });
          }, children: j === M.id ? "处理中…" : M.action.label }),
          M.action.kind === "retryNext" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!j, onClick: () => {
            const ne = { id: M.action.id ?? "", version: M.action.version, retry: {}, domain: "affair", title: M.action.title ?? M.title, status: "pending_confirmation" };
            E(ne);
          }, children: M.action.label }),
          M.action.kind === "openDay" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!j, onClick: (ne) => d(M.action.date ?? "", ne.currentTarget), children: M.action.label }),
          M.action.kind === "navigate" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!j, onClick: () => f(M.action.tab ?? "planning", M.action.section), children: M.action.label }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => R(M.id), children: "收起" })
        ] })
      ] }, M.id);
    }) })
  ] }) : null;
}
function Yu({ item: s, onQuick: o, onRetry: d, retryingId: f, feedback: E, compact: p = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status)) return null;
  const z = s.start_at?.slice(0, 10), N = s.start_at?.slice(11, 16);
  if (s.domain === "course")
    return !z || !N || !o ? null : /* @__PURE__ */ n.jsx("div", { className: `item-action-buttons${p ? " compact" : ""}`, onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", onClick: () => o("courseCancel", s), children: "本次不上" }) });
  const v = f === s.id;
  return /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${p ? " compact" : ""}`, onClick: (_) => _.stopPropagation(), children: [
    /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!f || E?.ok, onClick: () => o?.("affairComplete", s), children: E?.ok ? "已完成" : "完成" }),
    s.retry && d ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!f || !!E?.ok, "aria-busy": v, onClick: () => {
      d(s);
    }, children: v ? "处理中…" : E?.buttonLabel || "没约上" }) : null
  ] });
}
function Vh(s) {
  return vr(s)[0]?.laneCount || 1;
}
const Qg = 52, Zg = 150;
function Gh(s, o) {
  const [d, f] = w.useState(0);
  if (w.useEffect(() => {
    const b = s.current;
    if (!b || typeof ResizeObserver > "u") return;
    const z = new ResizeObserver((N) => {
      const v = N[0]?.contentRect.width;
      v && Number.isFinite(v) && f(v);
    });
    return z.observe(b), () => z.disconnect();
  }, [s]), o) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const E = Math.floor((d - Qg) / Zg), p = Math.max(1, Math.min(7, E));
  return { visibleDays: p, paginated: p < 7 };
}
function Xh() {
  const s = w.useRef(null), o = w.useRef(null), d = w.useCallback((p) => {
    if (p.button !== 0 || p.target.closest("button, article, a, input, select, textarea")) return;
    const b = s.current;
    !b || b.scrollWidth <= b.clientWidth || (o.current = { pointerId: p.pointerId, startX: p.clientX, scrollLeft: b.scrollLeft }, b.setPointerCapture(p.pointerId), b.classList.add("dragging"));
  }, []), f = w.useCallback((p) => {
    const b = s.current, z = o.current;
    !b || !z || z.pointerId !== p.pointerId || (b.scrollLeft = z.scrollLeft - (p.clientX - z.startX));
  }, []), E = w.useCallback((p) => {
    const b = s.current, z = o.current;
    !b || !z || z.pointerId !== p.pointerId || (b.hasPointerCapture(p.pointerId) && b.releasePointerCapture(p.pointerId), b.classList.remove("dragging"), o.current = null);
  }, []);
  return { ref: s, onPointerDown: d, onPointerMove: f, onPointerUp: E, onPointerCancel: E };
}
function Kg({ items: s, range: o, localDate: d, onInspect: f, onPrepare: E, onQuick: p, onRetry: b, retryingId: z, affairFeedback: N }) {
  const v = w.useMemo(() => fr(o, d), [o, d]), _ = Xh(), [R, j] = w.useState(0), [q, K] = w.useState(null), { visibleDays: F, paginated: de } = Gh(_.ref, !!q), ae = Math.max(1, Math.ceil(7 / Math.max(1, F))), xe = w.useMemo(
    () => q ? [q] : de ? Bh(v, R, F) : v,
    [v, R, q, de, F]
  );
  w.useEffect(() => {
    j(0);
  }, [o, F]), w.useEffect(() => {
    if (!q) return;
    const Q = (S) => {
      S.key === "Escape" && K(null);
    };
    return window.addEventListener("keydown", Q), () => window.removeEventListener("keydown", Q);
  }, [q]);
  const M = w.useMemo(() => {
    const Q = /* @__PURE__ */ new Map();
    return s.forEach((S) => {
      const Y = Si(S);
      Y && (Y < d && ["已取消", "已调课", "cancelled"].includes(S.status) || Q.set(Y, [...Q.get(Y) || [], S]));
    }), Q.forEach((S, Y) => Q.set(Y, [...S].sort((X, g) => String($e(X) || "").localeCompare(String($e(g) || ""))))), Q;
  }, [s, d]), te = w.useMemo(() => new Map(v.map((Q) => [Q, Vh((M.get(Q) || []).filter((S) => S.start_at || S.deadline_at))])), [M, v]), ne = w.useMemo(() => {
    const Q = /* @__PURE__ */ new Map();
    for (const S of v) {
      const Y = (M.get(S) || []).filter((X) => X.start_at || X.deadline_at);
      Q.set(S, vr(Y));
    }
    return Q;
  }, [M, v]), ce = xe.map((Q) => Q && te.get(Q) || 1);
  ce.reduce((Q, S) => Q + S, 0);
  const G = `52px ${ce.map((Q) => `minmax(0, ${Q}fr)`).join(" ")}`, L = s.filter((Q) => Q.start_at || Q.deadline_at), W = xe.length >= 7 ? L : L.filter((Q) => xe.includes(Si(Q))), { startHour: I, endHour: V } = Hh(W), ye = q ? 92 : F >= 6 ? 64 : F >= 4 ? 72 : 84, Ve = (V - I) * ye, Ge = Array.from({ length: V - I + 1 }, (Q, S) => I + S);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    q ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => K(null), children: "‹ 返回整周" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        jt(`${q}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
        " · 单日视图"
      ] }),
      /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
    ] }) : de && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本页日期", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: R === 0, onClick: () => j((Q) => Math.max(0, Q - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        "第 ",
        R + 1,
        "/",
        ae,
        " 页 · 每页 ",
        F,
        " 天"
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: R >= ae - 1, onClick: () => j((Q) => Math.min(ae - 1, Q + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "时间视图，点击日期标题聚焦到单日", ..._, children: /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: G }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-corner", children: "时间" }),
        xe.map((Q, S) => Q ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: Q === d ? "week-day-header today" : "week-day-header", onClick: () => K(Q), "aria-label": `聚焦到 ${jt(`${Q}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(`${Q}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(Q.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            M.get(Q)?.length || 0,
            " 项"
          ] })
        ] }, Q) : /* @__PURE__ */ n.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${S}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: G }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-time-axis", style: { height: Ve }, children: Ge.map((Q) => /* @__PURE__ */ n.jsxs("span", { style: { top: (Q - I) * ye }, children: [
          String(Q).padStart(2, "0"),
          ":00"
        ] }, Q)) }),
        xe.map((Q, S) => {
          if (!Q) return /* @__PURE__ */ n.jsx("div", { className: "week-day-track empty-slot", style: { height: Ve }, "aria-hidden": "true" }, `empty-${S}`);
          const Y = ne.get(Q) || [];
          return /* @__PURE__ */ n.jsx("div", { className: Q === d ? "week-day-track today" : "week-day-track", style: { height: Ve }, children: Y.map(({ item: X, lane: g, laneCount: ee }) => {
            const h = Lh(X, I, V, ye);
            if (!h) return null;
            const O = 100 / ee, $ = X.start_at || X.deadline_at, he = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(X.status) && (X.domain === "affair" || !!X.start_at), pe = pr(X, d);
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${X.domain} ${En(X, d)}${jn(X) ? " temporary" : ""}${he ? " actionable" : ""}`,
                style: { top: h.top, height: h.height, left: `calc(${g * O}% + 4px)`, width: `calc(${O}% - 8px)` },
                tabIndex: 0,
                role: "button",
                onClick: (Se) => {
                  Se.target.closest("button") || f(X, Se.currentTarget);
                },
                onKeyDown: (Se) => {
                  (Se.key === "Enter" || Se.key === " ") && (Se.preventDefault(), f(X, Se.currentTarget));
                },
                "data-item-id": X.id,
                "aria-label": `${Lt($)} ${X.title}${pe ? "（已过期待标记）" : ""}，${X.domain === "course" ? `${X.duration || "—"} 分钟课程` : "事务"}${he ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    Lt($),
                    " · ",
                    X.title,
                    pe ? "（过期）" : ""
                  ] }),
                  /* @__PURE__ */ n.jsx("span", { children: X.domain === "course" ? `${X.duration || "—"} 分钟` : X.estimated_minutes ? `${X.estimated_minutes} 分钟 · 事务` : "事务" }),
                  he && /* @__PURE__ */ n.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ n.jsx(Yu, { item: X, onQuick: p, onRetry: b, retryingId: z, feedback: N[X.id], compact: !0 }) })
                ]
              },
              X.id
            );
          }) }, Q);
        })
      ] })
    ] }) })
  ] });
}
function Qh({ items: s, range: o, localDate: d, onOpenDay: f }) {
  const E = w.useMemo(() => Ug(o, d), [o, d]), p = (o.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), b = w.useMemo(() => {
    const N = /* @__PURE__ */ new Map();
    return s.forEach((v) => {
      const _ = Si(v);
      _ && (_ < d && ["已取消", "已调课", "cancelled"].includes(v.status) || N.set(_, [...N.get(_) || [], v]));
    }), N.forEach((v, _) => N.set(_, [...v].sort((R, j) => String($e(R) || "").localeCompare(String($e(j) || ""))))), N;
  }, [s, d]), z = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ n.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ n.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ n.jsx("div", { className: "month-weekdays", children: z.map((N) => /* @__PURE__ */ n.jsxs("span", { children: [
      "周",
      N
    ] }, N)) }),
    /* @__PURE__ */ n.jsx("div", { className: "month-grid", children: E.map((N) => {
      const v = b.get(N) || [], _ = ["month-cell"];
      return N.startsWith(p) || _.push("outside"), N === d && _.push("today"), /* @__PURE__ */ n.jsxs("button", { type: "button", className: _.join(" "), onClick: (R) => f(N, R.currentTarget), children: [
        /* @__PURE__ */ n.jsxs("header", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: Number(N.slice(8, 10)) }),
          /* @__PURE__ */ n.jsx("span", { children: v.length ? `${v.length} 项` : "" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "month-item-list", children: [
          v.slice(0, 3).map((R) => /* @__PURE__ */ n.jsxs("span", { className: `month-item ${R.domain} ${En(R, d)}${jn(R) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ n.jsx("i", {}),
            Lt($e(R)) || "待定",
            " · ",
            R.title,
            pr(R, d) ? "（过期）" : ""
          ] }, R.id)),
          v.length > 3 && /* @__PURE__ */ n.jsxs("span", { className: "month-more", children: [
            "＋",
            v.length - 3,
            " 项"
          ] })
        ] })
      ] }, N);
    }) })
  ] }) });
}
function ur(s) {
  const o = Math.floor(s / 60), d = s % 60;
  return String(o).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function Jg({ onAction: s, onAskAi: o, refreshKey: d = 0 }) {
  const [f, E] = w.useState(() => Sn("cockpit")), [p, b] = w.useState(!f), [z, N] = w.useState(""), v = w.useCallback(async (j = !1, q = !1) => {
    j || b(!0);
    try {
      const K = await Xe("api/cockpit" + (q ? "?fresh=1" : ""));
      return E(K), Ni("cockpit", K), N(""), !0;
    } catch (K) {
      return N(K?.message || "读取失败"), !1;
    } finally {
      b(!1);
    }
  }, []);
  w.useEffect(() => {
    v(!f);
  }, [v]), w.useEffect(() => {
    d > 0 && v(!0, !0);
  }, [d]);
  const _ = w.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    for (const K of f?.students ?? [])
      j.has(K.group) || j.set(K.group, []), j.get(K.group).push(K);
    return ["本周已排", "已预留", "未排"].map((K) => ({ label: K, items: j.get(K) ?? [] }));
  }, [f]);
  if (p && !f) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (z && !f) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx(na, { label: "驾驶舱读取", ok: !1, detail: z }) });
  const R = f?.localDate ?? "";
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ n.jsx(Nn, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "muted-note", children: [
        f?.monday,
        " 当周 · 今天 ",
        R
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        v(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => o(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "候选学生" }),
        _.map((j) => /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            j.label,
            " · ",
            j.items.length
          ] }),
          j.items.length === 0 ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "（无）" }) : j.items.map((q) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: q.name }),
            /* @__PURE__ */ n.jsx("span", { className: "cockpit-zone", children: q.zone })
          ] }, q.name))
        ] }, j.label))
      ] }),
      /* @__PURE__ */ n.jsx("section", { className: "cockpit-canvas", children: f?.days.map((j) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day" + (j.date === R ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ n.jsx("strong", { children: j.weekday }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: j.date.slice(5) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-body", children: [
          j.courses.map((q, K) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => s({ operation: "course_move", student: q.title, fromDate: j.date, fromTime: String(q.start).slice(11, 16) }), children: [
              /* @__PURE__ */ n.jsx("span", { children: q.title }),
              /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
                String(q.start).slice(11, 16),
                "–",
                String(q.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "cockpit-card-ai", title: "用一句话交给 AI 调时间", onClick: () => o("把" + q.title + " " + j.date + " " + String(q.start).slice(11, 16) + " 的这节课调一下时间"), children: "AI" })
          ] }, "c" + K)),
          j.reservations.map((q, K) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => s({ operation: "reservation_update", id: q.id, student: q.student, date: j.date, time: String(q.start).slice(11, 16) }), children: [
            /* @__PURE__ */ n.jsxs("span", { children: [
              q.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
              String(q.start).slice(11, 16),
              "–",
              String(q.end).slice(11, 16)
            ] })
          ] }, "r" + K)),
          j.gaps.map((q, K) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + q.minutes + " 分钟，点击预留", onClick: () => s({ operation: "reservation_add", date: j.date, time: ur(q.start) }), children: [
            ur(q.start),
            "–",
            ur(q.end),
            " 空档"
          ] }, "g" + K)),
          j.courses.length === 0 && j.reservations.length === 0 && /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, j.date)) }),
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "实时诊断" }),
        /* @__PURE__ */ n.jsx(da, { label: "本周课程", value: f?.diagnostics.courseCount ?? 0, hint: "共 " + (f?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ n.jsx(da, { label: "有效预留", value: f?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          f?.diagnostics.dayGaps.map((j) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: j.weekday }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-zone", children: [
              j.gapMinutes,
              " 分钟"
            ] })
          ] }, j.date))
        ] }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            f?.diagnostics.unassigned.length ?? 0
          ] }),
          f?.diagnostics.unassigned.length ? f?.diagnostics.unassigned.map((j) => /* @__PURE__ */ n.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ n.jsx("span", { children: j }) }, j)) : /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (f?.warnings ?? []).map((j, q) => /* @__PURE__ */ n.jsx(na, { label: "读取警告", ok: !1, detail: j }, q))
      ] })
    ] })
  ] });
}
function $g({ onAction: s, onAskAi: o, refreshKey: d, sectionHint: f, scheduleText: E, onDataChanged: p }) {
  const [b, z] = w.useState(() => Sn("planning")), [N, v] = w.useState(""), [_, R] = w.useState("calendar"), [j, q] = w.useState("issues"), [K, F] = w.useState(!1), [de, ae] = w.useState(null), [xe, M] = w.useState(!1), [te, ne] = w.useState(null), [ce, G] = w.useState({});
  w.useEffect(() => {
    f?.section && R(f.section);
  }, [f?.nonce]), w.useEffect(() => {
    let g = !1;
    return Xe(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((ee) => {
      if (g) return;
      const h = Hg(ee);
      z(h), Ni("planning", h), v(""), ae(null);
    }).catch((ee) => {
      g || v(ee.message || "筹备数据读取失败");
    }), () => {
      g = !0;
    };
  }, [d]), w.useEffect(() => {
    const g = Object.entries(ce).at(-1);
    if (!g || !g[1].ok || te === g[0]) return;
    const ee = window.setTimeout(() => {
      G((h) => {
        const O = { ...h };
        return delete O[g[0]], O;
      });
    }, 4500);
    return () => window.clearTimeout(ee);
  }, [te, ce]);
  async function L() {
    if (!(!b || xe)) {
      M(!0), ae(null);
      try {
        ae(await Xe(`api/planning/template-check?monday=${encodeURIComponent(b.weekMonday)}`));
      } catch (g) {
        ae({ ok: !1, passed: !1, monday: b.weekMonday, output: "", affectedDates: [], error: g.message });
      } finally {
        M(!1);
      }
    }
  }
  async function W(g) {
    if (!te) {
      ne(g), G((ee) => ({ ...ee, [g]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const ee = await Xe("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: g })
        });
        if (!ee.ok) throw new Error(ee.error || "取消预留未完成");
        z((h) => h && {
          ...h,
          reservations: h.reservations.map((O) => O.reservation_id === g ? { ...O, status: "已取消" } : O)
        }), G((h) => ({ ...h, [g]: { ok: !0, text: ee.message || "已取消预留" } })), p({ silent: !0 });
      } catch (ee) {
        G((h) => ({ ...h, [g]: { ok: !1, text: `取消失败：${ee.message || "未知错误"}` } }));
      } finally {
        ne(null);
      }
    }
  }
  async function I(g) {
    if (!te) {
      ne(g), G((ee) => ({ ...ee, [g]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const ee = await Xe("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: g })
        });
        if (!ee.ok) throw new Error(ee.error || "预留确认失败");
        z((h) => h && {
          ...h,
          summary: { ...h.summary, formalCourseCount: h.summary.formalCourseCount + 1 },
          reservations: h.reservations.map((O) => O.reservation_id === g ? { ...O, status: "已确认" } : O),
          audit: {
            ...h.audit,
            reservation_hard_blockers: h.audit.reservation_hard_blockers.filter((O) => O.reservation_id !== g)
          }
        }), G((h) => ({ ...h, [g]: { ok: !0, text: ee.message || "已确认落课" } })), p({ silent: !0 });
      } catch (ee) {
        G((h) => ({ ...h, [g]: { ok: !1, text: `确认失败：${ee.message || "未知错误"}` } })), p({ silent: !0 });
      } finally {
        ne(null);
      }
    }
  }
  if (N) return /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "筹备数据读取失败", text: N });
  if (!b) return /* @__PURE__ */ n.jsx(br, {});
  const V = b.summary, ye = b.students.filter((g) => g.confirmed && g.zone !== "未分区" && (g.availability.length > 0 || g.hasReservation)).length, Ve = V.activeStudentCount ? Math.round(ye / V.activeStudentCount * 100) : 100, Ge = b.commute.overlaps.length, Q = new Map(b.audit.reservation_hard_blockers.map((g) => [g.reservation_id, g.reasons])), S = b.students.filter((g) => j === "all" ? !0 : j === "availability" ? !g.availability.length && !g.hasReservation : j === "zone" ? g.zone === "未分区" : j === "pending" ? !!g.pendingWeekday || !g.confirmed : g.issues.length > 0), Y = K ? S : S.slice(0, 10), X = b.sources.filter((g) => !g.ok);
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ n.jsx(Nn, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    X.length > 0 && /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: `${X.length} 项筹备数据读取异常`, text: X.map((g) => `${g.label}：${g.message || "读取失败"}`).join("；") }),
    V.reservationHardBlockerCount > 0 && /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: `${V.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: b.audit.reservation_hard_blockers.map((g) => `${g.student} ${g.date}：${g.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ n.jsx(
      Lu,
      {
        label: "筹备页内部导航",
        value: _,
        onChange: (g) => R(g),
        items: [
          { id: "calendar", label: "周视图", count: b.reservations.length + b.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: V.unzonedCount + V.missingAvailabilityCount + V.unconfirmedActiveCount + b.students.filter((g) => g.issues.length).length },
          { id: "candidates", label: "预留与复核", count: Ge + V.reservationCount + V.reviewCount + V.overdueCount + X.length }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(Fg, { planning: b, hidden: _ !== "calendar", onConfirmReservation: I, onCancelReservation: W, onAction: s, confirmingReservationId: te, reservationFeedback: ce }),
    /* @__PURE__ */ n.jsxs("div", { hidden: _ !== "trial", children: [
      /* @__PURE__ */ n.jsx(Nn, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ n.jsx(Jg, { onAction: s, onAskAi: o, refreshKey: d })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: _ !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ n.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ n.jsxs("strong", { children: [
          ye,
          "/",
          V.activeStudentCount
        ] }),
        /* @__PURE__ */ n.jsxs("small", { children: [
          Ve,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ n.jsx("i", { style: { width: `${Ve}%` } }) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: Ge ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ n.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ n.jsx("strong", { children: Ge }),
        /* @__PURE__ */ n.jsx("small", { children: Ge ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ n.jsx("strong", { children: V.reservationCount }),
        /* @__PURE__ */ n.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ n.jsx("strong", { children: V.formalCourseCount }),
        /* @__PURE__ */ n.jsx("small", { children: V.reviewCount + V.overdueCount ? `${V.reviewCount + V.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-overview-grid", hidden: _ !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ n.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            V.activeStudentCount - ye,
            " 人仍有关键资料缺口。contract ",
            b.contract.version ?? "—",
            " · schema ",
            b.contract.schemaVersion ?? "—",
            " · ",
            Hu(b.range)
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            q("availability"), R("students");
          }, children: [
            "缺候选时间 ",
            V.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            q("zone"), R("students");
          }, children: [
            "未分区 ",
            V.unzonedCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            q("pending"), R("students");
          }, children: [
            "待确认 ",
            V.unconfirmedActiveCount + V.pendingCount
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "下一道关口" }),
          /* @__PURE__ */ n.jsx("h3", { children: Ge ? "候选生成前还有时间重叠" : "可以进入候选预演" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            Ge,
            " 项时间重叠；通勤缺口和长期候选时间差异都在排具体时间时提示。"
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => R("candidates"), children: "查看候选与预留" }),
          V.reviewCount + V.overdueCount + X.length > 0 && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => R("candidates"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "panel planning-student-panel", hidden: _ !== "students", children: [
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
        ].map(([g, ee]) => /* @__PURE__ */ n.jsx("button", { type: "button", className: j === g ? "selected" : "", onClick: () => {
          q(g), F(!1);
        }, children: ee }, g)) })
      ] }),
      S.length ? /* @__PURE__ */ n.jsxs("div", { className: "planning-student-list", children: [
        Y.map((g) => {
          const ee = g.availability.length ? g.availability.map((h) => `${h.weekday} ${h.start_time}-${h.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ n.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ n.jsx("strong", { children: g.name }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                g.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ n.jsx("span", { className: g.confirmed ? "state-good" : "state-warn", children: g.pendingWeekday ? `${g.pendingWeekday}待定` : g.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "片区" }),
              /* @__PURE__ */ n.jsx("span", { className: g.zone === "未分区" ? "state-warn" : "", children: g.zone })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ n.jsx("span", { className: !g.availability.length && !g.hasReservation ? "state-warn" : "", title: ee, children: g.availability.length ? ee : g.hasReservation ? "已有单日预留" : ee })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "约束" }),
              /* @__PURE__ */ n.jsx("span", { children: g.vacations.length ? g.vacations.map((h) => `至 ${h.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-row-actions", children: [
              g.zone === "未分区" && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "zone_set", student: g.name }), children: "设片区" }),
              !g.availability.length && !g.hasReservation && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "availability_set", student: g.name, weekday: g.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "reservation_add", student: g.name, duration: g.duration, zone: g.zone === "未分区" ? "" : g.zone }), children: "预留" })
            ] })
          ] }, g.sourceName);
        }),
        S.length > 10 && /* @__PURE__ */ n.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => F((g) => !g), children: K ? "收起学生列表" : `再看 ${S.length - 10} 人` })
      ] }) : /* @__PURE__ */ n.jsx(ha, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      b.inactiveConfirmed.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          b.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-student-context", hidden: _ !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ n.jsx("span", { children: b.pending.map((g) => g.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ n.jsx("span", { children: b.vacations.map((g) => `${g.student} ${g.start_date.slice(5)}—${g.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ n.jsx("span", { children: b.zones.map((g) => `${g.zone} ${g.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-two-column", hidden: _ !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "课程预留", meta: `${b.reservations.length} 条`, action: "新增预留…", onAction: () => s({ operation: "reservation_add" }) }),
        b.reservations.length ? /* @__PURE__ */ n.jsx("div", { className: "reservation-card-list", children: b.reservations.map((g) => {
          const ee = (g.conflicts?.formal_courses?.length || 0) + (g.conflicts?.soft_reservations?.length || 0), h = Q.get(g.reservation_id) || [], O = `reservation-blocker-${g.reservation_id}`, $ = g.status === "已确认" ? "已落课" : g.status === "预期" ? "待落课" : g.status, P = h.length ? "blocked" : g.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ n.jsxs("article", { className: `reservation-card ${P}`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ n.jsx("strong", { children: g.reservation_date.slice(5) }),
              /* @__PURE__ */ n.jsx("span", { children: g.weekday })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ n.jsx("strong", { children: g.student }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                g.start_time,
                "-",
                g.end_time,
                " · ",
                g.duration,
                " 分钟",
                g.zone ? ` · ${g.zone}` : ""
              ] }),
              /* @__PURE__ */ n.jsxs("small", { id: O, children: [
                $,
                ee ? ` · ${ee} 项软冲突` : "",
                h.length ? ` · 硬约束：${h.join("、")}` : "",
                g.note ? ` · ${g.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "reservation-actions", children: g.status === "预期" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "reservation_update", reservationId: g.reservation_id, date: g.reservation_date, time: g.start_time, duration: g.duration, zone: g.zone || "", note: g.note || "" }), children: "调整时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: h.length > 0, "aria-describedby": h.length ? O : void 0, onClick: () => s({ operation: "reservation_confirm", reservationId: g.reservation_id }), children: h.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => s({ operation: "reservation_cancel", reservationId: g.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ n.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              $
            ] }) })
          ] }, g.reservation_id);
        }) }) : /* @__PURE__ */ n.jsx(ha, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ n.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              V.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: xe, onClick: () => {
            L();
          }, children: xe ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ n.jsx(sr, { label: "时间重叠", count: b.commute.overlaps.length, tone: "danger", details: b.commute.overlaps.slice(0, 3).map((g) => `${g.weekday} ${g.first} ${g.firstRange} / ${g.second} ${g.secondRange}`) }),
          /* @__PURE__ */ n.jsx(sr, { label: "长期候选时间差异", count: b.commute.availabilityConflicts.length, tone: "neutral", details: b.commute.availabilityConflicts.slice(0, 3).map((g) => `${g.student} ${g.weekday} ${g.startTime}-${g.endTime}（仅提示）`) }),
          /* @__PURE__ */ n.jsx(sr, { label: "排时间时再问通勤", count: b.commute.missingRoutes.length, tone: "neutral", details: b.commute.missingRoutes.slice(0, 3).map((g) => `${g.weekday} ${g.from} → ${g.to}`) })
        ] }),
        b.commute.missingRoutes.slice(0, 2).map((g) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => s({ operation: "commute_set", fromStudent: g.from, toStudent: g.to }), children: [
          "补录 ",
          g.from,
          " → ",
          g.to
        ] }, `${g.weekday}-${g.from}-${g.to}`)),
        de && /* @__PURE__ */ n.jsxs("div", { className: de.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ n.jsx("strong", { children: de.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ n.jsx("pre", { children: de.error || de.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    _ === "candidates" && (b.reviews.length > 0 || V.overdueCount > 0) && /* @__PURE__ */ n.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ n.jsx(Yt, { title: "历史课程复核", meta: `${b.reviews.length} 节待确认 · ${V.overdueCount} 节过期待转入`, action: V.overdueCount ? `处理 ${V.overdueCount} 节过期课` : void 0, onAction: V.overdueCount ? () => s({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ n.jsx("div", { className: "review-card-list", children: b.reviews.map((g) => /* @__PURE__ */ n.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: g.student }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            g.date,
            " · ",
            g.start_time,
            "-",
            g.end_time
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: g.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: g.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, g.course_id)) })
    ] }),
    _ === "candidates" && b.reviews.length === 0 && V.overdueCount === 0 && /* @__PURE__ */ n.jsx("section", { className: "panel", children: /* @__PURE__ */ n.jsx(ha, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-detail-grid", hidden: _ !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "过期待转入：" }),
            V.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "人工待复核：" }),
            V.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "读取异常：" }),
            X.length,
            " 项"
          ] }),
          /* @__PURE__ */ n.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ n.jsx("div", { className: "source-status-list", children: b.sources.map((g) => /* @__PURE__ */ n.jsxs("span", { className: g.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          g.label
        ] }, g.label)) }),
        /* @__PURE__ */ n.jsxs("pre", { children: [
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
function Fg({ planning: s, hidden: o, onConfirmReservation: d, onCancelReservation: f, onAction: E, confirmingReservationId: p, reservationFeedback: b }) {
  const [z, N] = w.useState("reservation"), [v, _] = w.useState(null), R = Xh(), [j, q] = w.useState(s.weekMonday), [K, F] = w.useState(0), [de, ae] = w.useState(null), xe = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], M = w.useMemo(() => fr(`${j}..${j}`, j), [j]), { visibleDays: te, paginated: ne } = Gh(R.ref, !!de), ce = Math.max(1, Math.ceil(7 / Math.max(1, te))), G = w.useMemo(
    () => de ? [de] : ne ? Bh(M, K, te) : M,
    [M, K, de, ne, te]
  );
  w.useEffect(() => {
    q(s.weekMonday);
  }, [s.weekMonday]), w.useEffect(() => {
    F(0), ae(null), _(null);
  }, [j, z]);
  const L = w.useMemo(() => gr(s.range), [s.range]), W = w.useMemo(() => fr(s.range, s.localDate)[0], [s.range, s.localDate]), I = j > W, V = !!(L.end && zl(j, 7) <= L.end), ye = w.useMemo(() => new Map(s.students.map((J) => [J.name, J])), [s.students]), Ve = w.useMemo(() => new Map(s.pending.map((J) => [J.student, J])), [s.pending]), Ge = w.useMemo(() => new Map(
    s.audit.reservation_hard_blockers.map((J) => [J.reservation_id, J.reasons.join("、")])
  ), [s.audit.reservation_hard_blockers]), Q = w.useMemo(() => {
    const J = (ve, le = "在读") => le !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : Ve.has(ve) ? { studentState: "待定", stateClass: "pending" } : ye.get(ve)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, ze = (ve) => ({
      ...ve,
      start_at: `${ve.date}T${ve.start_time}:00+08:00`,
      end_at: `${ve.date}T${ve.end_time}:00+08:00`
    });
    return z === "reservation" ? s.reservations.filter((ve) => ve.reservation_date >= M[0] && ve.reservation_date <= M[6] && ve.status !== "已取消").map((ve) => {
      const le = Ge.get(ve.reservation_id), Dt = (ve.student_status || "在读") !== "在读", et = ve.status === "已确认";
      return ze({
        id: ve.reservation_id,
        kind: "reservation",
        reservationId: ve.reservation_id,
        reservationStatus: ve.status,
        confirmedCourseId: ve.confirmed_course_id,
        blockerText: le,
        student: ve.student,
        date: ve.reservation_date,
        weekday: ve.weekday,
        start_time: ve.start_time,
        end_time: ve.end_time,
        duration: ve.duration,
        studentState: Dt ? "已暂停" : et ? "已落课" : le ? "有硬约束" : "待落课",
        stateClass: Dt ? "paused" : et ? "landed" : le ? "blocked" : "expected",
        zone: ve.zone,
        note: ve.note
      });
    }) : s.templates.flatMap((ve) => {
      const le = xe.indexOf(ve.weekday);
      if (le < 0) return [];
      const Dt = M[le], et = J(ve.student, ve.student_status);
      return [ze({
        id: `template-${ve.template_id}`,
        kind: "template",
        student: ve.student,
        date: Dt,
        weekday: ve.weekday,
        start_time: ve.start_time,
        end_time: ve.end_time,
        duration: ve.duration,
        studentState: et.studentState,
        stateClass: et.stateClass
      })];
    });
  }, [M, z, Ve, s.reservations, s.templates, Ge, ye]);
  w.useEffect(() => {
    v && !Q.some((J) => J.id === v && J.kind === "reservation") && _(null);
  }, [Q, v]), w.useEffect(() => {
    if (!de) return;
    const J = (ze) => {
      ze.key === "Escape" && ae(null);
    };
    return window.addEventListener("keydown", J), () => window.removeEventListener("keydown", J);
  }, [de]), w.useEffect(() => {
    if (!v) return;
    const J = (ze) => {
      ze.key === "Escape" && _(null);
    };
    return window.addEventListener("keydown", J), () => window.removeEventListener("keydown", J);
  }, [v]);
  const S = !!p, Y = w.useMemo(() => {
    const J = /* @__PURE__ */ new Map();
    return Q.forEach((ze) => J.set(ze.date, [...J.get(ze.date) || [], ze])), J;
  }, [Q]), X = w.useMemo(() => new Map(M.map((J) => [J, Vh(Y.get(J) || [])])), [Y, M]), g = w.useMemo(() => {
    const J = /* @__PURE__ */ new Map();
    for (const ze of M)
      J.set(ze, vr(Y.get(ze) || []));
    return J;
  }, [Y, M]), ee = G.map((J) => J && X.get(J) || 1);
  ee.reduce((J, ze) => J + ze, 0);
  const h = `52px ${ee.map((J) => `minmax(0, ${J}fr)`).join(" ")}`, O = G.length >= 7 ? Q : Q.filter((J) => G.includes(J.date)), { startHour: $, endHour: P } = Hh(O), he = de ? 92 : te >= 6 ? 64 : te >= 4 ? 72 : 84, pe = (P - $) * he, Se = Array.from({ length: P - $ + 1 }, (J, ze) => $ + ze), it = `${jt(`${M[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${jt(`${M[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ n.jsxs("section", { className: `panel planning-week-panel ${z}-mode`, hidden: o, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ n.jsx("h3", { children: z === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ n.jsx("span", { children: z === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: z === "reservation" ? "selected" : "", "aria-pressed": z === "reservation", onClick: () => N("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.reservations.length })
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: z === "template" ? "selected" : "", "aria-pressed": z === "template", onClick: () => N("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "上一周", disabled: !I, onClick: () => q((J) => zl(J, -7)), children: "‹" }),
          /* @__PURE__ */ n.jsx("strong", { children: it }),
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "下一周", disabled: !V, onClick: () => q((J) => zl(J, 7)), children: "›" })
        ] }),
        de ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => ae(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            jt(`${de}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
        ] }) : ne && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: K === 0, onClick: () => F((J) => Math.max(0, J - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            "第 ",
            K + 1,
            "/",
            ce,
            " 页 · 每页 ",
            te,
            " 天"
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: K >= ce - 1, onClick: () => F((J) => Math.min(ce - 1, J + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "planning-week-legend", children: z === "reservation" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
    Q.length ? /* @__PURE__ */ n.jsx("div", { className: "planning-week-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "筹备周视图，点击日期标题聚焦到单日", ...R, children: /* @__PURE__ */ n.jsxs("div", { className: "planning-week-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-header", style: { gridTemplateColumns: h }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-corner", children: "时间" }),
        G.map((J, ze) => J ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: J === s.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => ae(J), "aria-label": `聚焦到 ${jt(`${J}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: xe[M.indexOf(J)] }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(J.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            Y.get(J)?.length || 0,
            " 项"
          ] })
        ] }, J) : /* @__PURE__ */ n.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${ze}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: h }, onPointerDown: (J) => {
        J.target.closest(".planning-week-block") || _(null);
      }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-axis", style: { height: pe }, children: Se.map((J) => /* @__PURE__ */ n.jsxs("span", { style: { top: (J - $) * he }, children: [
          String(J).padStart(2, "0"),
          ":00"
        ] }, J)) }),
        G.map((J, ze) => {
          if (!J) return /* @__PURE__ */ n.jsx("div", { className: "planning-week-track empty-slot", style: { height: pe }, "aria-hidden": "true" }, `empty-${ze}`);
          const ve = g.get(J) || [];
          return /* @__PURE__ */ n.jsx("div", { className: J === s.localDate ? "planning-week-track today" : "planning-week-track", style: { height: pe }, children: ve.map(({ item: le, lane: Dt, laneCount: et }) => {
            const ct = Lh(le, $, P, he);
            if (!ct) return null;
            const ia = 100 / et, ua = le.kind === "reservation" && le.reservationStatus === "预期", Vt = le.kind === "reservation" && le.reservationStatus === "已确认", ut = !!(le.reservationId && (ua || Vt)), ea = !!(ua && p === le.reservationId), ft = !!(ut && (v === le.id || ea)), sa = le.reservationId ? b[le.reservationId] : void 0, Ol = !!(S || le.blockerText || le.stateClass === "paused");
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `planning-week-block ${le.kind} ${le.stateClass}${ut ? " actionable" : ""}${ft ? " action-open" : ""}`,
                tabIndex: ut ? 0 : void 0,
                role: ut ? "button" : void 0,
                "aria-expanded": ut ? ft : void 0,
                "aria-label": `${le.start_time}-${le.end_time} ${le.student}，${le.studentState}${le.zone ? `，${le.zone}` : ""}${ua ? "；移入或点击后可调整时间、确认落课" : Vt ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (De) => {
                  ut && !De.target.closest("button") && _((cl) => cl === le.id ? null : le.id);
                },
                onKeyDown: (De) => {
                  ut && (De.key === "Enter" || De.key === " " ? (De.preventDefault(), _((cl) => cl === le.id ? null : le.id)) : De.key === "Escape" && (De.preventDefault(), _(null)));
                },
                style: { top: ct.top, height: ct.height, left: `calc(${Dt * ia}% + 4px)`, width: `calc(${ia}% - 8px)` },
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    le.start_time,
                    " · ",
                    le.student
                  ] }),
                  /* @__PURE__ */ n.jsxs("span", { children: [
                    le.duration,
                    " 分钟 · ",
                    le.studentState,
                    le.zone ? ` · ${le.zone}` : ""
                  ] }),
                  ut && /* @__PURE__ */ n.jsxs("div", { className: "planning-week-inline-action", onClick: (De) => De.stopPropagation(), children: [
                    /* @__PURE__ */ n.jsx("div", { className: "planning-week-inline-buttons", children: ua ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: S, onClick: () => {
                        _(null), E({ operation: "reservation_update", reservationId: le.reservationId, date: le.date, time: le.start_time, duration: le.duration, zone: le.zone || "", note: le.note || "" });
                      }, children: "调整时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: Ol, "aria-busy": ea, onClick: () => {
                        const De = d(le.reservationId);
                        De && typeof De.then == "function" && De.finally(() => _(null));
                      }, children: ea ? "确认中…" : S ? "处理中…" : le.stateClass === "paused" ? "学生已暂停" : le.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", onClick: () => E({ operation: "course_move", student: le.student, fromDate: le.date, fromTime: le.start_time, toDate: le.date, toTime: le.start_time, duration: le.duration }), children: "调整时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", onClick: () => E({ operation: "course_cancel", student: le.student, date: le.date, time: le.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", disabled: S, onClick: () => {
                        const De = f(le.reservationId);
                        De && typeof De.then == "function" && De.finally(() => _(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (le.blockerText || sa) && /* @__PURE__ */ n.jsx(Ml, { ok: !!sa?.ok, text: sa?.text || le.blockerText || "" })
                  ] })
                ]
              },
              le.id
            );
          }) }, J);
        })
      ] })
    ] }) }) : /* @__PURE__ */ n.jsx(ha, { title: z === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: z === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
  ] });
}
function sr({ label: s, count: o, tone: d, details: f }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `template-issue ${d}`, children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("span", { children: s }),
      /* @__PURE__ */ n.jsx("strong", { children: o })
    ] }),
    f.length > 0 && /* @__PURE__ */ n.jsx("ul", { children: f.map((E) => /* @__PURE__ */ n.jsx("li", { children: E }, E)) })
  ] });
}
const Wg = { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" };
function Ig({ item: s, onInspect: o, onPrepare: d, onQuick: f, onRetry: E, onRetryPrev: p, retryingId: b, feedback: z }) {
  const N = ["completed", "cancelled", "已完成", "已取消"].includes(s.status), v = b === s.id, _ = s.retry ? "retry" : s.start_at ? "timed" : s.deadline_at ? "deadline" : "fuzzy", R = Date.now(), j = s.deadline_at ? new Date(s.deadline_at).getTime() : null, q = j != null ? Math.ceil((j - R) / 864e5) : null, K = s.retry?.current_candidate_date || null;
  return /* @__PURE__ */ n.jsxs(
    "article",
    {
      className: `affair-card ${_}${N ? " closed" : ""}`,
      "data-item-id": s.id,
      tabIndex: 0,
      role: "button",
      onClick: (F) => {
        F.target.closest("button") || o(s, F.currentTarget);
      },
      onKeyDown: (F) => {
        F.key === "Enter" && (F.preventDefault(), o(s, F.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-when", children: [
          _ === "timed" && s.start_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: Lt(s.start_at) }),
            /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          _ === "deadline" && s.deadline_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: jt(s.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              "截止",
              q != null && !N ? ` · ${q >= 0 ? `剩 ${q} 天` : `已过 ${-q} 天`}` : ""
            ] })
          ] }),
          _ === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { className: "fuzzy-mark", children: "~" }),
            /* @__PURE__ */ n.jsx("span", { children: s.window_label || "窗口未定" })
          ] }),
          _ === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { className: "retry-mark", children: "约" }),
            /* @__PURE__ */ n.jsx("span", { children: K ? `下次 ${K.slice(5)}` : "等待候选" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-main", children: [
          /* @__PURE__ */ n.jsx("strong", { className: "affair-card-title", children: s.title }),
          /* @__PURE__ */ n.jsxs("span", { className: "affair-card-meta", children: [
            /* @__PURE__ */ n.jsx(Ei, { value: s.status }),
            s.note ? /* @__PURE__ */ n.jsx("em", { children: s.note }) : null,
            s.next_prompt_at ? /* @__PURE__ */ n.jsx("em", { children: `提醒 ${jt(s.next_prompt_at, { month: "numeric", day: "numeric" })} ${Lt(s.next_prompt_at)}` }) : null
          ] }),
          _ === "retry" && s.retry?.weekdays?.length ? /* @__PURE__ */ n.jsx("span", { className: "affair-candidates", children: s.retry.weekdays.map((F) => /* @__PURE__ */ n.jsx("i", { children: Wg[F] || F }, F)) }) : null,
          z ? /* @__PURE__ */ n.jsx(Ml, { ok: z.ok, text: z.text }) : null,
          z?.undo && p ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!b, onClick: () => {
            p(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "affair-card-actions", children: !N && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do primary", disabled: !!b || z?.ok, onClick: () => f?.("affairComplete", s), children: z?.ok ? "已完成" : "完成" }),
          s.retry && E ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!b || !!z?.ok, "aria-busy": v, onClick: () => {
            E(s);
          }, children: v ? "处理中…" : z?.buttonLabel || "没约上" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Pg({ onPrepare: s, onQuick: o, onInspect: d, onRetry: f, onRetryPrev: E, retryingId: p, feedback: b, refreshKey: z, observedAt: N, onOpenDay: v, localDate: _ }) {
  const [R, j] = w.useState("pending"), [q, K] = w.useState("list"), [F, de] = w.useState(() => Sn("affairs-month")), [ae, xe] = w.useState(""), M = w.useCallback((Q) => {
    Xe("api/affairs-month" + (Q ? "?fresh=1" : "")).then((S) => {
      if (!S || !Array.isArray(S.affairs) || !Array.isArray(S.pending)) return;
      const Y = {
        affairs: S.affairs.map((X) => ({ ...X, domain: "affair" })),
        pending: S.pending.map((X) => ({ ...X, domain: "affair" })),
        month: String(S.month || "")
      };
      de(Y), Ni("affairs-month", Y), xe("");
    }).catch(() => {
    });
  }, []);
  w.useEffect(() => {
    M(!F);
  }, [M]), w.useEffect(() => {
    z > 0 && M(!0);
  }, [z]), w.useEffect(() => {
    N && F && M(!1);
  }, [N, M]);
  const te = F?.pending ?? [], ne = F?.affairs ?? [], ce = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), G = ne.filter((Q) => !ce.has(Q.status)).sort((Q, S) => String($e(Q) || "").localeCompare(String($e(S) || ""))), L = ne.filter((Q) => ce.has(Q.status)).sort((Q, S) => String($e(S) || "").localeCompare(String($e(Q) || ""))), W = L.filter((Q) => !["cancelled", "已取消"].includes(Q.status)).length, I = F?.month ? `${F.month}-01..${F.month}-01` : "", ye = { pending: te, scheduled: G, closed: L }[R], Ve = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[R];
  function Ge(Q, S) {
    const Y = ne.filter((X) => Si(X) === Q);
    v(Q, Y, S);
  }
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(Nn, { eyebrow: `事务 · 本月 ${F?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${W} 件、取消 ${L.length - W} 件，进行中 ${G.length} 件。点日历上的任何一天，看那天的安排。` }),
    ae && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "事务数据读取失败", text: ae }),
    !F && /* @__PURE__ */ n.jsx(br, {}),
    F && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ n.jsx(
          Lu,
          {
            label: "事务状态",
            value: R,
            onChange: (Q) => j(Q),
            items: [
              { id: "pending", label: "待处理", count: te.length },
              { id: "scheduled", label: "已安排", count: G.length },
              { id: "closed", label: "已完成·已取消", count: L.length }
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          Lu,
          {
            label: "视图切换",
            value: q,
            onChange: (Q) => K(Q),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      q === "calendar" ? /* @__PURE__ */ n.jsx(Qh, { items: ne, range: I, localDate: _ ?? F.month + "-01", onOpenDay: Ge }) : /* @__PURE__ */ n.jsx("div", { children: ye.length ? ye.map((Q) => /* @__PURE__ */ n.jsx(Ig, { item: Q, onInspect: d, onPrepare: s, onQuick: o, onRetry: f, onRetryPrev: E, retryingId: p, feedback: b[Q.id] }, Q.id)) : /* @__PURE__ */ n.jsx(ha, { title: Ve.title, text: Ve.text }) })
    ] })
  ] });
}
function ev({ pending: s, students: o, preset: d, aiDraft: f, preview: E, busy: p, onPreview: b, onAiPreview: z, onCommit: N, onCommitBatch: v, onClear: _, onClose: R }) {
  const [j, q] = w.useState(d?.operation || "course_move"), [K, F] = w.useState(d?.affairKind || "timed"), [de, ae] = w.useState(d?.student || ""), [xe, M] = w.useState(d?.duration || ""), [te, ne] = w.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  w.useEffect(() => {
    d?.operation && q(d.operation), d?.affairKind && F(d.affairKind), d?.student && ae(d.student), d?.duration && M(d.duration);
  }, [d]);
  function ce(L) {
    L.preventDefault();
    const W = new FormData(L.currentTarget), I = { operation: j };
    for (const [V, ye] of W.entries())
      V !== "operation" && String(ye).trim() && (I[V] = ye);
    I.duration && (I.duration = Number(I.duration)), I.minutes !== void 0 && (I.minutes = Number(I.minutes)), I.expectedVersion && (I.expectedVersion = Number(I.expectedVersion)), j === "course_plan" && (I.moves = te.map((V) => ({ ...V, duration: V.duration ? Number(V.duration) : void 0 }))), b(I);
  }
  function G(L, W, I) {
    ne((V) => V.map((ye, Ve) => Ve === L ? { ...ye, [W]: I } : ye));
  }
  return /* @__PURE__ */ n.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ n.jsx(lv, { initialDraft: f, preview: E, busy: p, onPreview: z, onCommit: N, onCommitBatch: v, onClear: _, onClose: R }),
    /* @__PURE__ */ n.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ n.jsxs("summary", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ n.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ n.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ n.jsxs("form", { className: "panel operation-form", onSubmit: ce, children: [
          /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ n.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ n.jsxs("select", { name: "operation", value: j, onChange: (L) => {
              q(L.target.value), _();
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
          j === "course_move" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ n.jsx(oe, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          j === "course_cancel" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
          ] }),
          j === "course_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: de,
                  onChange: (L) => {
                    const W = o.find((I) => I.name === L.target.value);
                    ae(L.target.value), W && M(W.default_duration);
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
            /* @__PURE__ */ n.jsx(oe, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: xe, onChange: (L) => M(L.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ n.jsx(oe, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          j === "reservation_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: de,
                  onChange: (L) => {
                    const W = o.find((I) => I.name === L.target.value);
                    ae(L.target.value), W && M(W.default_duration);
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
            /* @__PURE__ */ n.jsx(oe, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: xe, onChange: (L) => M(L.target.value) })
            ] }),
            /* @__PURE__ */ n.jsx(oe, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ n.jsx(oe, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          j === "reservation_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ n.jsx(oe, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(j) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          j === "zone_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          j === "availability_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((L) => /* @__PURE__ */ n.jsx("option", { value: L, children: L }, L))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(oe, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          j === "availability_clear" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((L) => /* @__PURE__ */ n.jsx("option", { value: L, children: L }, L))
              ] })
            ] })
          ] }),
          j === "commute_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ n.jsx(oe, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          j === "quarantine_overdue" && /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          j === "course_review_resolve" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ n.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ n.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ n.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          j === "course_day_complete" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          j === "course_plan" && /* @__PURE__ */ n.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ n.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", onClick: () => ne((L) => [...L, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            te.map((L, W) => /* @__PURE__ */ n.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ n.jsx("span", { className: "plan-index", children: W + 1 }),
              /* @__PURE__ */ n.jsxs("select", { value: L.student || "", onChange: (I) => {
                const V = o.find((ye) => ye.name === I.target.value);
                G(W, "student", I.target.value), V && G(W, "duration", V.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "学生" }),
                o.filter((I) => I.status === "在读").map((I) => /* @__PURE__ */ n.jsx("option", { value: I.name, children: I.name }, I.name))
              ] }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: L.fromDate || "", onChange: (I) => G(W, "fromDate", I.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: L.fromTime || "", onChange: (I) => G(W, "fromTime", I.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: L.toDate || "", onChange: (I) => G(W, "toDate", I.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: L.toTime || "", onChange: (I) => G(W, "toTime", I.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: L.duration || "", onChange: (I) => G(W, "duration", I.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "plan-remove", disabled: te.length <= 2, onClick: () => ne((I) => I.filter((V, ye) => ye !== W)), children: "×" })
            ] }, W))
          ] }),
          j === "affair_create" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(oe, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "类型" }),
              /* @__PURE__ */ n.jsxs("select", { name: "affairKind", value: K, onChange: (L) => F(L.target.value), children: [
                /* @__PURE__ */ n.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ n.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ n.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ n.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            K === "timed" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(oe, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(oe, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ n.jsx(oe, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            K === "deadline" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(oe, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(oe, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            K === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(oe, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(oe, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            K === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(oe, { name: "candidateDates", label: "候选日期（逗号分隔）", placeholder: "2026-08-24,2026-08-26" }),
              /* @__PURE__ */ n.jsx(oe, { name: "weekdays", label: "或按星期", placeholder: "mon,wed" }),
              /* @__PURE__ */ n.jsx(oe, { name: "startWeek", label: "起始周日期", type: "date" }),
              /* @__PURE__ */ n.jsx(oe, { name: "remindAt", label: "提醒时间", type: "time", defaultValue: "19:30" })
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
          j === "affair_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
            /* @__PURE__ */ n.jsx(oe, { name: "title", label: "新标题（可选）", defaultValue: d?.title }),
            /* @__PURE__ */ n.jsx(oe, { name: "startDate", label: "新开始日期（可选）", type: "date" }),
            /* @__PURE__ */ n.jsx(oe, { name: "startTime", label: "新开始时间（可选）", type: "time" }),
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
            /* @__PURE__ */ n.jsx(oe, { name: "note", label: "新备注（可选）" }),
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
          j === "affair_retry_prev" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
            /* @__PURE__ */ n.jsx(oe, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。" })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(j) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
            j === "affair_retry_next" && /* @__PURE__ */ n.jsx(oe, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          j === "calendar_sync" && /* @__PURE__ */ n.jsx(oe, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ n.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ n.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ n.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ n.jsx("button", { className: "primary-button full", type: "submit", disabled: p, children: p ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: j })),
        /* @__PURE__ */ n.jsxs("div", { className: "panel preview-panel", children: [
          /* @__PURE__ */ n.jsx(Yt, { title: "执行预览", meta: E?.token ? `令牌 ${E.token.slice(0, 8)}…` : "等待操作" }),
          !E && /* @__PURE__ */ n.jsx(ha, { title: "尚未预演", text: "填写左侧表单后，先检查硬冲突和可用时间；通勤只在需要时询问。" }),
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
                N();
              }, disabled: p, children: p ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ n.jsx(Zh, { preview: E, onClose: R })
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
function av({ preview: s, busy: o, onCommit: d, onCommitBatch: f, onClose: E }) {
  const p = s.operation || "", b = s.input || {}, z = Object.entries(b).filter(([_, R]) => R != null && R !== "" && !_.startsWith("_")), N = s.result?.affected_dates, v = s.batchItems ?? [];
  return v.length ? /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ n.jsxs("div", { className: s.committed ? s.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ n.jsx("i", {}),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: s.committed ? s.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${v.length} 项` }),
        /* @__PURE__ */ n.jsx("span", { children: s.summary || s.message })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "batch-list", children: v.map((_, R) => {
      const j = s.committed ? { text: _.resultOk ? "已执行" : "失败", cls: _.resultOk ? "ok" : "error" } : { text: _.canCommit ? "可执行" : "未通过", cls: _.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ n.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ n.jsx("span", { className: "batch-index", children: R + 1 }),
        /* @__PURE__ */ n.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: zh[_.operation] || _.operation }),
          /* @__PURE__ */ n.jsx("span", { children: _.summary }),
          _.message && /* @__PURE__ */ n.jsx("small", { children: _.message })
        ] }),
        /* @__PURE__ */ n.jsx("span", { className: `batch-flag ${j.cls}`, children: j.text })
      ] }, _.token);
    }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "action-outcome-actions", children: [
      !s.committed && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: o || !v.some((_) => _.canCommit), onClick: () => {
        f?.() ?? Promise.resolve();
      }, children: o ? "正在提交…" : `全部执行（${v.filter((_) => _.canCommit).length} 项）` }),
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
      p && /* @__PURE__ */ n.jsx("span", { className: "preview-op-badge", children: zh[p] || p }),
      z.length > 0 && /* @__PURE__ */ n.jsx("dl", { className: "preview-fields", children: z.map(([_, R]) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("dt", { children: tv[_] || _ }),
        /* @__PURE__ */ n.jsx("dd", { children: String(R) })
      ] }, _)) }),
      N && N.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        N.map((_) => /* @__PURE__ */ n.jsx("span", { children: _.slice(5) }, _))
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
      /* @__PURE__ */ n.jsx(Zh, { preview: s, onClose: E })
    ] })
  ] });
}
function lv({ initialDraft: s, preview: o, busy: d, onPreview: f, onCommit: E, onCommitBatch: p, onClear: b, onClose: z }) {
  const N = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, v = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [_, R] = w.useState([N]), [j, q] = w.useState(""), [K, F] = w.useState(!1), [de, ae] = w.useState(""), [xe, M] = w.useState([]), te = w.useRef(dr());
  w.useEffect(() => () => te.current.invalidate(), []), w.useEffect(() => {
    s.nonce && (te.current.invalidate(), F(!1), q(s.text));
  }, [s.nonce, s.text]);
  function ne() {
    te.current.invalidate(), F(!1), R([N]), q(""), ae(""), M([]), b();
  }
  async function ce(G) {
    const L = (G ?? j).trim();
    if (!L || K) return;
    const W = te.current.begin(), I = _.slice(-10);
    R((V) => [...V, { role: "user", text: L }]), q(""), M([]), F(!0), ae(""), b();
    try {
      const V = await Xe("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: L, history: I })
      });
      if (!te.current.isCurrent(W)) return;
      if (!V.ok) throw new Error(V.error || "AI 没有生成方案");
      M(V.status === "need_clarification" ? V.options ?? [] : []), R((ye) => [...ye, { role: "assistant", text: V.reply || "方案已经生成，请检查右侧预演。" }]), V.status === "ready" && V.batch && V.previews?.length ? f({
        ok: !0,
        batch: !0,
        summary: V.reply,
        message: V.reply,
        batchItems: V.previews.map((ye) => ({ operation: ye.operation, token: ye.token, summary: ye.summary, canCommit: ye.canCommit, message: ye.message }))
      }) : V.status === "ready" && V.preview && f({
        ok: !0,
        token: V.preview.token,
        expiresAt: V.preview.expiresAt,
        summary: V.preview.summary,
        canCommit: V.preview.canCommit,
        message: V.preview.message,
        result: V.preview.result,
        operation: V.operation,
        input: V.input
      });
    } catch (V) {
      if (!te.current.isCurrent(W)) return;
      const ye = V.message || "AI 操作失败";
      ae(ye), R((Ve) => [...Ve, { role: "assistant", text: `这次没有生成预演：${ye}` }]);
    } finally {
      te.current.isCurrent(W) && F(!1);
    }
  }
  return /* @__PURE__ */ n.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ n.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ n.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ n.jsx("button", { className: "row-action-button", type: "button", onClick: ne, disabled: K, children: "清空对话" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: v.map((G) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => q(G), children: G }, G)) }),
    /* @__PURE__ */ n.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          _.map((G, L) => /* @__PURE__ */ n.jsx("div", { className: `ai-bubble ${G.role}`, children: G.text }, L)),
          K && /* @__PURE__ */ n.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        de && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "没有生成方案", text: de }),
        xe.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: xe.map((G) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => {
          ce(G);
        }, children: G }, G)) }),
        /* @__PURE__ */ n.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ n.jsx(
            "textarea",
            {
              value: j,
              onChange: (G) => q(G.target.value),
              onKeyDown: (G) => {
                G.key === "Enter" && !G.shiftKey && (G.preventDefault(), ce());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            ce();
          }, disabled: !j.trim() || K, children: K ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ n.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "AI 预演", meta: o?.token ? `令牌 ${o.token.slice(0, 8)}…` : "等待指令" }),
        !o && /* @__PURE__ */ n.jsx(ha, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        o && /* @__PURE__ */ n.jsx(av, { preview: o, busy: d, onCommit: E, onCommitBatch: p, onClose: z })
      ] })
    ] })
  ] });
}
function nv({ view: s, dashboard: o, onPrepare: d, onQuick: f, onRetry: E, onRetryPrev: p, retryingId: b, affairFeedback: z, onSync: N }) {
  if (s.kind === "system") return /* @__PURE__ */ n.jsx(cv, { dashboard: o, onSync: N, embedded: !0 });
  const v = s.kind === "day" ? s.items ? [...s.items].sort((_, R) => String($e(_) || "").localeCompare(String($e(R) || ""))) : o.items.filter((_) => Si(_) === s.date).sort((_, R) => String($e(_) || "").localeCompare(String($e(R) || ""))) : [s.item];
  return v.length ? /* @__PURE__ */ n.jsx("div", { className: "context-item-list", children: v.map((_) => /* @__PURE__ */ n.jsx(
    iv,
    {
      item: _,
      onPrepare: d,
      onQuick: f,
      onRetry: E,
      onRetryPrev: p,
      retryingId: b,
      feedback: _.domain === "affair" ? z[_.id] : void 0
    },
    _.id
  )) }) : /* @__PURE__ */ n.jsx(ha, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function iv({ item: s, onPrepare: o, onQuick: d, onRetry: f, onRetryPrev: E, retryingId: p, feedback: b }) {
  const z = $e(s), N = ["completed", "cancelled", "已完成", "已取消"].includes(s.status);
  return /* @__PURE__ */ n.jsxs("section", { className: `context-item-card ${En(s)}${jn(s) ? " temporary" : ""}`, "data-item-id": s.id, children: [
    /* @__PURE__ */ n.jsxs("header", { children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("span", { className: `context-domain ${s.domain}`, children: s.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ n.jsx("time", { children: z ? `${jt(z, { month: "long", day: "numeric", weekday: "short" })} ${Lt(z)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ n.jsx(Ei, { value: s.status })
    ] }),
    /* @__PURE__ */ n.jsx("h3", { children: s.title }),
    /* @__PURE__ */ n.jsx("p", { children: s.domain === "course" ? `${s.duration || "—"} 分钟 · ${s.note || "常规课程"}` : s.note || s.window_label || "暂无补充说明" }),
    b && /* @__PURE__ */ n.jsx(Ml, { ok: b.ok, text: b.text }),
    b?.undo && E ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!p, onClick: () => {
      E(s);
    }, children: "撤销推进" }) : null,
    !N && /* @__PURE__ */ n.jsx("div", { className: "context-item-actions", children: s.domain === "course" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => o({ operation: "course_move", student: s.title, fromDate: s.start_at?.slice(0, 10), fromTime: s.start_at?.slice(11, 16), toDate: s.start_at?.slice(0, 10), toTime: s.start_at?.slice(11, 16), duration: s.duration }), children: "调整时间…" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", disabled: !!p, onClick: () => d?.("courseCancel", s), children: "本次不上" })
    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: !!p || b?.ok, onClick: () => d?.("affairComplete", s), children: b?.ok ? "已完成" : "完成" }),
      s.retry ? /* @__PURE__ */ n.jsx("button", { type: "button", className: b?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!p || !!b?.ok, onClick: () => {
        f(s);
      }, children: p === s.id ? "处理中…" : b?.buttonLabel || "没约上" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消…" })
    ] }) })
  ] });
}
function uv() {
  const [s, o] = w.useState({ loading: !0 }), d = w.useCallback(() => {
    o({ loading: !0 }), Xe("/api/versions").then((E) => o({ loading: !1, data: E })).catch((E) => o({ loading: !1, error: E.message }));
  }, []);
  w.useEffect(() => {
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
  const [o, d] = w.useState({ loading: !0 }), f = w.useCallback(() => {
    d({ loading: !0 }), Xe("/api/calendar-health").then((z) => d({ loading: !1, data: z })).catch((z) => d({ loading: !1, error: z.message }));
  }, []);
  w.useEffect(() => {
    f();
  }, [f]);
  const E = o.data?.diff, p = E?.toDelete ?? [], b = o.data?.inSync === !0;
  return /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ n.jsx(Yt, { title: "飞书日历对账" }),
    o.loading ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : o.error ? /* @__PURE__ */ n.jsx(na, { label: "日历盘点", ok: !1, detail: o.error }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(na, { label: "对账结果", ok: b, detail: b ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
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
        /* @__PURE__ */ n.jsxs("span", { className: p.length ? "diff-badge-danger" : "", children: [
          "待删除 ",
          p.length
        ] })
      ] }),
      p.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-list", children: [
        p.slice(0, 8).map((z, N) => /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ n.jsx("span", { children: z.summary }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: String(z.start || "").slice(0, 16) })
        ] }, N)),
        p.length > 8 && /* @__PURE__ */ n.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          p.length - 8,
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
    !d && /* @__PURE__ */ n.jsx(Nn, { eyebrow: "系统", title: "运行状态", description: "检查事务数据库、排课入口和写入锁状态。" }),
    /* @__PURE__ */ n.jsxs("section", { className: "metrics-grid system-metrics", children: [
      /* @__PURE__ */ n.jsx(da, { label: "数据库完整性", value: f?.integrity === "ok" ? "正常" : "异常", hint: `Schema ${f?.schema_version ?? "—"}`, tone: "sage" }),
      /* @__PURE__ */ n.jsx(da, { label: "活动事务", value: f?.counts?.active ?? "—", hint: `总数 ${f?.counts?.affairs ?? "—"}`, tone: "amber" }),
      /* @__PURE__ */ n.jsx(da, { label: "排课 Agent", value: s.health?.schedule_agent?.exists ? "就绪" : "缺失", hint: "schedule.py agent", tone: "blue" }),
      /* @__PURE__ */ n.jsx(da, { label: "写入锁", value: s.health?.writer?.active ? "占用中" : "空闲", hint: s.health?.writer?.owner || "无", tone: "ink" })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "content-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "读取链路" }),
        s.health?.reads && /* @__PURE__ */ n.jsx("div", { className: "system-read-health", children: Object.values(s.health.reads).map((E) => /* @__PURE__ */ n.jsx(na, { label: E.label, ok: E.ok, detail: E.detail }, E.label)) }),
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
function rv({ course: s, advice: o, onOpen: d, onPrepare: f, onQuick: E }) {
  return s ? /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: `next-course-banner next-course-open contextual-action-host ${En(s)}${jn(s) ? " temporary" : ""} actionable`,
      role: "button",
      tabIndex: 0,
      onClick: (p) => {
        p.target.closest("button") || d(p.currentTarget);
      },
      onKeyDown: (p) => {
        (p.key === "Enter" || p.key === " ") && (p.preventDefault(), d(p.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "next-course-time", children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: Lt(s.start_at) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "next-course-main", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "eyebrow", children: [
            "下一节课",
            jn(s) && /* @__PURE__ */ n.jsx("span", { className: "temporary-badge", children: "临时" })
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
        /* @__PURE__ */ n.jsx("div", { className: "next-course-inline-action", children: /* @__PURE__ */ n.jsx(Yu, { item: s, onQuick: E }) })
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
function Lu({ label: s, items: o, value: d, onChange: f, busy: E }) {
  return /* @__PURE__ */ n.jsx("nav", { className: "workbench-nav", "aria-label": s, children: o.map((p) => /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: d === p.id ? "selected" : "",
      "aria-label": `${p.label}${p.count ? `，${p.count} 项` : ""}`,
      "aria-pressed": d === p.id,
      disabled: E,
      onClick: () => f(p.id),
      children: [
        /* @__PURE__ */ n.jsx("span", { children: p.label }),
        p.count ? /* @__PURE__ */ n.jsx("strong", { children: p.count }) : null
      ]
    },
    p.id
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
function ov({ item: s, onInspect: o, onPrepare: d, onQuick: f, onRetry: E, retryingId: p, feedback: b }) {
  const z = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status), N = !!d && !z;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${o ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${En(s)}${jn(s) ? " temporary" : ""}${N ? " actionable" : ""}`,
      "data-item-id": s.id,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      onClick: (v) => {
        v.target.closest("button") || o?.(s, v.currentTarget);
      },
      onKeyDown: (v) => {
        (v.key === "Enter" || v.key === " ") && o && (v.preventDefault(), o(s, v.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: `domain-dot ${s.domain}` }),
        /* @__PURE__ */ n.jsx("time", { children: Lt($e(s)) || "待定" }),
        /* @__PURE__ */ n.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.domain === "course" ? `${s.duration || "—"} 分钟` : s.note || s.window_label || "事务" }),
          b && /* @__PURE__ */ n.jsx(Ml, { ok: b.ok, text: b.text })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ n.jsx(Ei, { value: s.status }) }),
        N && (d || f) && /* @__PURE__ */ n.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ n.jsx(Yu, { item: s, onQuick: f, onRetry: E, retryingId: p, feedback: b }) })
      ]
    }
  );
}
function fv({ item: s, onInspect: o, onPrepare: d, onQuick: f, onRetry: E, onRetryPrev: p, retryingId: b, feedback: z }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `quick-pending-item contextual-action-host ${En(s)} actionable`,
      "data-item-id": s.id,
      role: "button",
      tabIndex: 0,
      onClick: (N) => {
        N.target.closest("button") || o(s, N.currentTarget);
      },
      onKeyDown: (N) => {
        (N.key === "Enter" || N.key === " ") && (N.preventDefault(), o(s, N.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.window_label || (s.next_prompt_at ? `下次提醒 ${jt(s.next_prompt_at)} ${Lt(s.next_prompt_at)}` : "待处理") }),
          z && /* @__PURE__ */ n.jsx(Ml, { ok: z.ok, text: z.text }),
          z?.undo && p ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!b, onClick: () => {
            p(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(Ei, { value: s.status }) }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ n.jsx(Yu, { item: s, onQuick: f, onRetry: E, retryingId: b, feedback: z }) })
      ]
    }
  );
}
function Ei({ value: s }) {
  return /* @__PURE__ */ n.jsx("span", { className: `status ${Yh(s)}`, children: qg[s] || s });
}
function Yt({ title: s, meta: o, action: d, onAction: f, actionDisabled: E }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "panel-heading", children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("h3", { children: s }),
      o && /* @__PURE__ */ n.jsx("span", { children: o })
    ] }),
    d && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: f, disabled: E, children: d })
  ] });
}
function Nn({ eyebrow: s, title: o, description: d }) {
  return /* @__PURE__ */ n.jsxs("header", { className: "page-title", children: [
    /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: s }),
    /* @__PURE__ */ n.jsx("h2", { children: o }),
    /* @__PURE__ */ n.jsx("p", { children: d })
  ] });
}
function oe({ name: s, label: o, type: d = "text", placeholder: f, defaultValue: E, required: p = !1 }) {
  return /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: o }),
    /* @__PURE__ */ n.jsx("input", { name: s, type: d, placeholder: f, defaultValue: E, required: p })
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
