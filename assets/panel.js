var er = { exports: {} }, xi = {};
var hh;
function ng() {
  if (hh) return xi;
  hh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(f, _, N) {
    var x = null;
    if (N !== void 0 && (x = "" + N), _.key !== void 0 && (x = "" + _.key), "key" in _) {
      N = {};
      for (var M in _)
        M !== "key" && (N[M] = _[M]);
    } else N = _;
    return _ = N.ref, {
      $$typeof: s,
      type: f,
      key: x,
      ref: _ !== void 0 ? _ : null,
      props: N
    };
  }
  return xi.Fragment = o, xi.jsx = d, xi.jsxs = d, xi;
}
var mh;
function ig() {
  return mh || (mh = 1, er.exports = ng()), er.exports;
}
var n = ig(), tr = { exports: {} }, xe = {};
var yh;
function ug() {
  if (yh) return xe;
  yh = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), E = Symbol.iterator;
  function L(y) {
    return y === null || typeof y != "object" ? null : (y = E && y[E] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ce = Object.assign, ee = {};
  function W(y, R, $) {
    this.props = y, this.context = R, this.refs = ee, this.updater = $ || Y;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(y, R) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, R, "setState");
  }, W.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function je() {
  }
  je.prototype = W.prototype;
  function F(y, R, $) {
    this.props = y, this.context = R, this.refs = ee, this.updater = $ || Y;
  }
  var le = F.prototype = new je();
  le.constructor = F, ce(le, W.prototype), le.isPureReactComponent = !0;
  var pe = Array.isArray;
  function he() {
  }
  var J = { H: null, A: null, T: null, S: null }, H = Object.prototype.hasOwnProperty;
  function ae(y, R, $) {
    var I = $.ref;
    return {
      $$typeof: s,
      type: y,
      key: R,
      ref: I !== void 0 ? I : null,
      props: $
    };
  }
  function K(y, R) {
    return ae(y.type, R, y.props);
  }
  function Q(y) {
    return typeof y == "object" && y !== null && y.$$typeof === s;
  }
  function P(y) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function($) {
      return R[$];
    });
  }
  var be = /\/+/g;
  function Ee(y, R) {
    return typeof y == "object" && y !== null && y.key != null ? P("" + y.key) : R.toString(36);
  }
  function _e(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(he, he) : (y.status = "pending", y.then(
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
  function m(y, R, $, I, me) {
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
            case o:
              Te = !0;
              break;
            case C:
              return Te = y._init, m(
                Te(y._payload),
                R,
                $,
                I,
                me
              );
          }
      }
    if (Te)
      return me = me(y), Te = I === "" ? "." + Ee(y, 0) : I, pe(me) ? ($ = "", Te != null && ($ = Te.replace(be, "$&/") + "/"), m(me, R, $, "", function(Me) {
        return Me;
      })) : me != null && (Q(me) && (me = K(
        me,
        $ + (me.key == null || y && y.key === me.key ? "" : ("" + me.key).replace(
          be,
          "$&/"
        ) + "/") + Te
      )), R.push(me)), 1;
    Te = 0;
    var Ge = I === "" ? "." : I + ":";
    if (pe(y))
      for (var Z = 0; Z < y.length; Z++)
        I = y[Z], ye = Ge + Ee(I, Z), Te += m(
          I,
          R,
          $,
          ye,
          me
        );
    else if (Z = L(y), typeof Z == "function")
      for (y = Z.call(y), Z = 0; !(I = y.next()).done; )
        I = I.value, ye = Ge + Ee(I, Z++), Te += m(
          I,
          R,
          $,
          ye,
          me
        );
    else if (ye === "object") {
      if (typeof y.then == "function")
        return m(
          _e(y),
          R,
          $,
          I,
          me
        );
      throw R = String(y), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function v(y, R, $) {
    if (y == null) return y;
    var I = [], me = 0;
    return m(y, I, "", "", function(ye) {
      return R.call($, ye, me++);
    }), I;
  }
  function V(y) {
    if (y._status === -1) {
      var R = y._result;
      R = R(), R.then(
        function($) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = $);
        },
        function($) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = $);
        }
      ), y._status === -1 && (y._status = 0, y._result = R);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var h = typeof reportError == "function" ? reportError : function(y) {
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
  }, G = {
    map: v,
    forEach: function(y, R, $) {
      v(
        y,
        function() {
          R.apply(this, arguments);
        },
        $
      );
    },
    count: function(y) {
      var R = 0;
      return v(y, function() {
        R++;
      }), R;
    },
    toArray: function(y) {
      return v(y, function(R) {
        return R;
      }) || [];
    },
    only: function(y) {
      if (!Q(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return xe.Activity = D, xe.Children = G, xe.Component = W, xe.Fragment = d, xe.Profiler = _, xe.PureComponent = F, xe.StrictMode = f, xe.Suspense = j, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, xe.__COMPILER_RUNTIME = {
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
  }, xe.cloneElement = function(y, R, $) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var I = ce({}, y.props), me = y.key;
    if (R != null)
      for (ye in R.key !== void 0 && (me = "" + R.key), R)
        !H.call(R, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && R.ref === void 0 || (I[ye] = R[ye]);
    var ye = arguments.length - 2;
    if (ye === 1) I.children = $;
    else if (1 < ye) {
      for (var Te = Array(ye), Ge = 0; Ge < ye; Ge++)
        Te[Ge] = arguments[Ge + 2];
      I.children = Te;
    }
    return ae(y.type, me, I);
  }, xe.createContext = function(y) {
    return y = {
      $$typeof: x,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: N,
      _context: y
    }, y;
  }, xe.createElement = function(y, R, $) {
    var I, me = {}, ye = null;
    if (R != null)
      for (I in R.key !== void 0 && (ye = "" + R.key), R)
        H.call(R, I) && I !== "key" && I !== "__self" && I !== "__source" && (me[I] = R[I]);
    var Te = arguments.length - 2;
    if (Te === 1) me.children = $;
    else if (1 < Te) {
      for (var Ge = Array(Te), Z = 0; Z < Te; Z++)
        Ge[Z] = arguments[Z + 2];
      me.children = Ge;
    }
    if (y && y.defaultProps)
      for (I in Te = y.defaultProps, Te)
        me[I] === void 0 && (me[I] = Te[I]);
    return ae(y, ye, me);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(y) {
    return { $$typeof: M, render: y };
  }, xe.isValidElement = Q, xe.lazy = function(y) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: y },
      _init: V
    };
  }, xe.memo = function(y, R) {
    return {
      $$typeof: b,
      type: y,
      compare: R === void 0 ? null : R
    };
  }, xe.startTransition = function(y) {
    var R = J.T, $ = {};
    J.T = $;
    try {
      var I = y(), me = J.S;
      me !== null && me($, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(he, h);
    } catch (ye) {
      h(ye);
    } finally {
      R !== null && $.types !== null && (R.types = $.types), J.T = R;
    }
  }, xe.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, xe.use = function(y) {
    return J.H.use(y);
  }, xe.useActionState = function(y, R, $) {
    return J.H.useActionState(y, R, $);
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
  }, xe.useImperativeHandle = function(y, R, $) {
    return J.H.useImperativeHandle(y, R, $);
  }, xe.useInsertionEffect = function(y, R) {
    return J.H.useInsertionEffect(y, R);
  }, xe.useLayoutEffect = function(y, R) {
    return J.H.useLayoutEffect(y, R);
  }, xe.useMemo = function(y, R) {
    return J.H.useMemo(y, R);
  }, xe.useOptimistic = function(y, R) {
    return J.H.useOptimistic(y, R);
  }, xe.useReducer = function(y, R, $) {
    return J.H.useReducer(y, R, $);
  }, xe.useRef = function(y) {
    return J.H.useRef(y);
  }, xe.useState = function(y) {
    return J.H.useState(y);
  }, xe.useSyncExternalStore = function(y, R, $) {
    return J.H.useSyncExternalStore(
      y,
      R,
      $
    );
  }, xe.useTransition = function() {
    return J.H.useTransition();
  }, xe.version = "19.2.8", xe;
}
var gh;
function yr() {
  return gh || (gh = 1, tr.exports = ug()), tr.exports;
}
var z = yr(), ar = { exports: {} }, ji = {}, lr = { exports: {} }, nr = {};
var vh;
function sg() {
  return vh || (vh = 1, (function(s) {
    function o(m, v) {
      var V = m.length;
      m.push(v);
      e: for (; 0 < V; ) {
        var h = V - 1 >>> 1, G = m[h];
        if (0 < _(G, v))
          m[h] = v, m[V] = G, V = h;
        else break e;
      }
    }
    function d(m) {
      return m.length === 0 ? null : m[0];
    }
    function f(m) {
      if (m.length === 0) return null;
      var v = m[0], V = m.pop();
      if (V !== v) {
        m[0] = V;
        e: for (var h = 0, G = m.length, y = G >>> 1; h < y; ) {
          var R = 2 * (h + 1) - 1, $ = m[R], I = R + 1, me = m[I];
          if (0 > _($, V))
            I < G && 0 > _(me, $) ? (m[h] = me, m[I] = V, h = I) : (m[h] = $, m[R] = V, h = R);
          else if (I < G && 0 > _(me, V))
            m[h] = me, m[I] = V, h = I;
          else break e;
        }
      }
      return v;
    }
    function _(m, v) {
      var V = m.sortIndex - v.sortIndex;
      return V !== 0 ? V : m.id - v.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      s.unstable_now = function() {
        return N.now();
      };
    } else {
      var x = Date, M = x.now();
      s.unstable_now = function() {
        return x.now() - M;
      };
    }
    var j = [], b = [], C = 1, D = null, E = 3, L = !1, Y = !1, ce = !1, ee = !1, W = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function le(m) {
      for (var v = d(b); v !== null; ) {
        if (v.callback === null) f(b);
        else if (v.startTime <= m)
          f(b), v.sortIndex = v.expirationTime, o(j, v);
        else break;
        v = d(b);
      }
    }
    function pe(m) {
      if (ce = !1, le(m), !Y)
        if (d(j) !== null)
          Y = !0, he || (he = !0, P());
        else {
          var v = d(b);
          v !== null && _e(pe, v.startTime - m);
        }
    }
    var he = !1, J = -1, H = 5, ae = -1;
    function K() {
      return ee ? !0 : !(s.unstable_now() - ae < H);
    }
    function Q() {
      if (ee = !1, he) {
        var m = s.unstable_now();
        ae = m;
        var v = !0;
        try {
          e: {
            Y = !1, ce && (ce = !1, je(J), J = -1), L = !0;
            var V = E;
            try {
              t: {
                for (le(m), D = d(j); D !== null && !(D.expirationTime > m && K()); ) {
                  var h = D.callback;
                  if (typeof h == "function") {
                    D.callback = null, E = D.priorityLevel;
                    var G = h(
                      D.expirationTime <= m
                    );
                    if (m = s.unstable_now(), typeof G == "function") {
                      D.callback = G, le(m), v = !0;
                      break t;
                    }
                    D === d(j) && f(j), le(m);
                  } else f(j);
                  D = d(j);
                }
                if (D !== null) v = !0;
                else {
                  var y = d(b);
                  y !== null && _e(
                    pe,
                    y.startTime - m
                  ), v = !1;
                }
              }
              break e;
            } finally {
              D = null, E = V, L = !1;
            }
            v = void 0;
          }
        } finally {
          v ? P() : he = !1;
        }
      }
    }
    var P;
    if (typeof F == "function")
      P = function() {
        F(Q);
      };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), Ee = be.port2;
      be.port1.onmessage = Q, P = function() {
        Ee.postMessage(null);
      };
    } else
      P = function() {
        W(Q, 0);
      };
    function _e(m, v) {
      J = W(function() {
        m(s.unstable_now());
      }, v);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(m) {
      m.callback = null;
    }, s.unstable_forceFrameRate = function(m) {
      0 > m || 125 < m ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < m ? Math.floor(1e3 / m) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, s.unstable_next = function(m) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var v = 3;
          break;
        default:
          v = E;
      }
      var V = E;
      E = v;
      try {
        return m();
      } finally {
        E = V;
      }
    }, s.unstable_requestPaint = function() {
      ee = !0;
    }, s.unstable_runWithPriority = function(m, v) {
      switch (m) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          m = 3;
      }
      var V = E;
      E = m;
      try {
        return v();
      } finally {
        E = V;
      }
    }, s.unstable_scheduleCallback = function(m, v, V) {
      var h = s.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? h + V : h) : V = h, m) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = V + G, m = {
        id: C++,
        callback: v,
        priorityLevel: m,
        startTime: V,
        expirationTime: G,
        sortIndex: -1
      }, V > h ? (m.sortIndex = V, o(b, m), d(j) === null && m === d(b) && (ce ? (je(J), J = -1) : ce = !0, _e(pe, V - h))) : (m.sortIndex = G, o(j, m), Y || L || (Y = !0, he || (he = !0, P()))), m;
    }, s.unstable_shouldYield = K, s.unstable_wrapCallback = function(m) {
      var v = E;
      return function() {
        var V = E;
        E = v;
        try {
          return m.apply(this, arguments);
        } finally {
          E = V;
        }
      };
    };
  })(nr)), nr;
}
var ph;
function cg() {
  return ph || (ph = 1, lr.exports = sg()), lr.exports;
}
var ir = { exports: {} }, pt = {};
var bh;
function rg() {
  if (bh) return pt;
  bh = 1;
  var s = yr();
  function o(j) {
    var b = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        b += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + j + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function N(j, b, C) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _,
      key: D == null ? null : "" + D,
      children: j,
      containerInfo: b,
      implementation: C
    };
  }
  var x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function M(j, b) {
    if (j === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, pt.createPortal = function(j, b) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(o(299));
    return N(j, b, null, C);
  }, pt.flushSync = function(j) {
    var b = x.T, C = f.p;
    try {
      if (x.T = null, f.p = 2, j) return j();
    } finally {
      x.T = b, f.p = C, f.d.f();
    }
  }, pt.preconnect = function(j, b) {
    typeof j == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, f.d.C(j, b));
  }, pt.prefetchDNS = function(j) {
    typeof j == "string" && f.d.D(j);
  }, pt.preinit = function(j, b) {
    if (typeof j == "string" && b && typeof b.as == "string") {
      var C = b.as, D = M(C, b.crossOrigin), E = typeof b.integrity == "string" ? b.integrity : void 0, L = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      C === "style" ? f.d.S(
        j,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: D,
          integrity: E,
          fetchPriority: L
        }
      ) : C === "script" && f.d.X(j, {
        crossOrigin: D,
        integrity: E,
        fetchPriority: L,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, pt.preinitModule = function(j, b) {
    if (typeof j == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var C = M(
            b.as,
            b.crossOrigin
          );
          f.d.M(j, {
            crossOrigin: C,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && f.d.M(j);
  }, pt.preload = function(j, b) {
    if (typeof j == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var C = b.as, D = M(C, b.crossOrigin);
      f.d.L(j, C, {
        crossOrigin: D,
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
  }, pt.preloadModule = function(j, b) {
    if (typeof j == "string")
      if (b) {
        var C = M(b.as, b.crossOrigin);
        f.d.m(j, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: C,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else f.d.m(j);
  }, pt.requestFormReset = function(j) {
    f.d.r(j);
  }, pt.unstable_batchedUpdates = function(j, b) {
    return j(b);
  }, pt.useFormState = function(j, b, C) {
    return x.H.useFormState(j, b, C);
  }, pt.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, pt.version = "19.2.8", pt;
}
var xh;
function og() {
  if (xh) return ir.exports;
  xh = 1;
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
var jh;
function fg() {
  if (jh) return ji;
  jh = 1;
  var s = cg(), o = yr(), d = og();
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
  function x(e) {
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
  function j(e) {
    if (N(e) !== e)
      throw Error(f(188));
  }
  function b(e) {
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
          if (u === a) return j(i), e;
          if (u === l) return j(i), t;
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
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = C(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), ce = /* @__PURE__ */ Symbol.for("react.fragment"), ee = /* @__PURE__ */ Symbol.for("react.strict_mode"), W = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), pe = /* @__PURE__ */ Symbol.for("react.suspense"), he = /* @__PURE__ */ Symbol.for("react.suspense_list"), J = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.activity"), K = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var be = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === be ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case W:
        return "Profiler";
      case ee:
        return "StrictMode";
      case pe:
        return "Suspense";
      case he:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Y:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case je:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
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
  var _e = Array.isArray, m = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, h = [], G = -1;
  function y(e) {
    return { current: e };
  }
  function R(e) {
    0 > G || (e.current = h[G], h[G] = null, G--);
  }
  function $(e, t) {
    G++, h[G] = e.current, e.current = t;
  }
  var I = y(null), me = y(null), ye = y(null), Te = y(null);
  function Ge(e, t) {
    switch ($(ye, t), $(me, e), $(I, null), t.nodeType) {
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
    R(I), $(I, e);
  }
  function Z() {
    R(I), R(me), R(ye);
  }
  function Me(e) {
    e.memoizedState !== null && $(Te, e);
    var t = I.current, a = qd(t, e.type);
    t !== a && ($(me, e), $(I, a));
  }
  function ge(e) {
    me.current === e && (R(I), R(me)), Te.current === e && (R(Te), gi._currentValue = V);
  }
  var te, Dt;
  function tt(e) {
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
                } catch (O) {
                  var A = O;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  A = O;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                A = O;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (O) {
            if (O && A && typeof O.stack == "string")
              return [O.stack, A.stack];
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
                  var k = `
` + g[l].replace(" at new ", " at ");
                  return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
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
  var ut = Object.prototype.hasOwnProperty, ea = s.unstable_scheduleCallback, ft = s.unstable_cancelCallback, sa = s.unstable_shouldYield, Ol = s.unstable_requestPaint, Oe = s.unstable_now, cl = s.unstable_getCurrentPriorityLevel, Ti = s.unstable_ImmediatePriority, Tn = s.unstable_UserBlockingPriority, Ua = s.unstable_NormalPriority, wn = s.unstable_LowPriority, Cn = s.unstable_IdlePriority, wi = s.log, Gu = s.unstable_setDisableYieldValue, ma = null, dt = null;
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
  function An(e, t) {
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
  function U(e, t, a, l, i, u) {
    var c = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var r = e.entanglements, g = e.expirationTimes, w = e.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var k = 31 - bt(a), B = 1 << k;
      r[k] = 0, g[k] = -1;
      var A = w[k];
      if (A !== null)
        for (w[k] = null, k = 0; k < A.length; k++) {
          var O = A[k];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~B;
    }
    l !== 0 && X(e, l, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function X(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - bt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function ne(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - bt(a), i = 1 << l;
      i & t | e[l] & t && (e[l] |= t), a &= ~i;
    }
  }
  function se(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : ve(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function ve(e) {
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
  function fe() {
    var e = v.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : uh(e.type));
  }
  function St(e, t) {
    var a = v.p;
    try {
      return v.p = e, t();
    } finally {
      v.p = a;
    }
  }
  var vt = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + vt, Nt = "__reactProps$" + vt, ql = "__reactContainer$" + vt, Qu = "__reactEvents$" + vt, Kh = "__reactListeners$" + vt, $h = "__reactHandles$" + vt, jr = "__reactResources$" + vt, Dn = "__reactMarker$" + vt;
  function Zu(e) {
    delete e[Ze], delete e[Nt], delete e[Qu], delete e[Kh], delete e[$h];
  }
  function Bl(e) {
    var t = e[Ze];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[ql] || a[Ze]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Xd(e); e !== null; ) {
            if (a = e[Ze]) return a;
            e = Xd(e);
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
    var t = e[jr];
    return t || (t = e[jr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rt(e) {
    e[Dn] = !0;
  }
  var Sr = /* @__PURE__ */ new Set(), Nr = {};
  function dl(e, t) {
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
    return ut.call(_r, e) ? !0 : ut.call(Er, e) ? !1 : Jh.test(e) ? _r[e] = !0 : (Er[e] = !0, !1);
  }
  function Ci(e, t, a) {
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
  function Ai(e, t, a) {
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
  function Ku(e) {
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
  function Cr(e, t, a, l, i, u, c, r) {
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
  function zr(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(f(92));
        if (_e(l)) {
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
  function Dr(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ph.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Mr(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var i in t)
        l = t[i], t.hasOwnProperty(i) && a[i] !== l && Dr(e, i, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Dr(e, u, t[u]);
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
  function Or(e) {
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
  var Pu = !1;
  function Ur(e, t, a) {
    if (Pu) return e(t, a);
    Pu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Pu = !1, (Xl !== null || Ql !== null) && (pu(), Xl && (t = Xl, e = Ql, Ql = Xl = null, Or(t), e)))
        for (t = 0; t < e.length; t++) Or(e[t]);
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
  function Rr() {
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
  function kr() {
    return !1;
  }
  function Et(e) {
    function t(a, l, i, u, c) {
      this._reactName = a, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ui : kr, this.isPropagationStopped = kr, this;
    }
    return D(t.prototype, {
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
  }, Ri = Et(hl), Rn = D({}, hl, { view: 0, detail: 0 }), am = Et(Rn), as, ls, kn, ki = D({}, Rn, {
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
  }), qr = Et(ki), lm = D({}, ki, { dataTransfer: 0 }), nm = Et(lm), im = D({}, Rn, { relatedTarget: 0 }), ns = Et(im), um = D({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = Et(um), cm = D({}, hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rm = Et(cm), om = D({}, hl, { data: 0 }), Br = Et(om), fm = {
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
  var ym = D({}, Rn, {
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
  }), gm = Et(ym), vm = D({}, ki, {
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
  }), Hr = Et(vm), pm = D({}, Rn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: is
  }), bm = Et(pm), xm = D({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jm = Et(xm), Sm = D({}, ki, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nm = Et(Sm), Em = D({}, hl, {
    newState: 0,
    oldState: 0
  }), _m = Et(Em), Tm = [9, 13, 27, 32], us = pa && "CompositionEvent" in window, qn = null;
  pa && "documentMode" in document && (qn = document.documentMode);
  var wm = pa && "TextEvent" in window && !qn, Lr = pa && (!us || qn && 8 < qn && 11 >= qn), Yr = " ", Vr = !1;
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
      return e === "compositionend" || !us && Gr(e, t) ? (e = Rr(), Mi = ts = qa = null, Zl = !1, e) : null;
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
    zd(e, 0);
  }
  function qi(e) {
    var t = Mn(e);
    if (wr(t)) return e;
  }
  function Kr(e, t) {
    if (e === "change") return t;
  }
  var $r = !1;
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
    $r = ss && (!document.documentMode || 9 < document.documentMode);
  }
  function Fr() {
    Bn && (Bn.detachEvent("onpropertychange", Wr), Hn = Bn = null);
  }
  function Wr(e) {
    if (e.propertyName === "value" && qi(Hn)) {
      var t = [];
      Zr(
        t,
        Hn,
        e,
        Iu(e)
      ), Ur(Dm, t);
    }
  }
  function Mm(e, t, a) {
    e === "focusin" ? (Fr(), Bn = t, Hn = a, Bn.attachEvent("onpropertychange", Wr)) : e === "focusout" && Fr();
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
  function ao(e, t, a) {
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
  }, ds = {}, lo = {};
  pa && (lo = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function yl(e) {
    if (ds[e]) return ds[e];
    if (!$l[e]) return e;
    var t = $l[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in lo)
        return ds[e] = t[a];
    return e;
  }
  var no = yl("animationend"), io = yl("animationiteration"), uo = yl("animationstart"), Bm = yl("transitionrun"), Hm = yl("transitionstart"), Lm = yl("transitioncancel"), so = yl("transitionend"), co = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function ta(e, t) {
    co.set(e, t), dl(t, [e]);
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
      u !== 0 && ro(a, i, u);
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
  function ro(e, t, a) {
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
  function oo(e, t) {
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
        case ae:
          return e = Ut(31, a, t, i), e.elementType = ae, e.lanes = u, e;
        case ce:
          return vl(a.children, i, u, t);
        case ee:
          c = 8, i |= 24;
          break;
        case W:
          return e = Ut(12, a, t, i | 2), e.elementType = W, e.lanes = u, e;
        case pe:
          return e = Ut(13, a, t, i), e.elementType = pe, e.lanes = u, e;
        case he:
          return e = Ut(19, a, t, i), e.elementType = he, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case F:
                c = 10;
                break e;
              case je:
                c = 9;
                break e;
              case le:
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
  function fo(e) {
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
  var ho = /* @__PURE__ */ new WeakMap();
  function Kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = ho.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Vt(t)
      }, ho.set(e, t), t);
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
  function mo(e, t, a) {
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
    e.return !== null && (xa(e, 1), mo(e, 1, 0));
  }
  function xs(e) {
    for (; e === Gi; )
      Gi = Wl[--Il], Wl[Il] = null, Vn = Wl[--Il], Wl[Il] = null;
    for (; e === Ba; )
      Ba = $t[--Jt], $t[Jt] = null, ra = $t[--Jt], $t[Jt] = null, ca = $t[--Jt], $t[Jt] = null;
  }
  function yo(e, t) {
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
  function go(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Ze] = e, t[Nt] = l, a) {
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
        for (a = 0; a < fi.length; a++)
          Ce(fi[a], t);
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
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Ud(t.textContent, a) ? (l.popover != null && (Ce("beforetoggle", t), Ce("toggle", t)), l.onScroll != null && Ce("scroll", t), l.onScrollEnd != null && Ce("scrollend", t), l.onClick != null && (t.onclick = va), t = !0) : t = !1, t || La(e, !0);
  }
  function vo(e) {
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
    if (!De) return vo(e), De = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Hc(e.type, e.memoizedProps)), a = !a), a && Ke && La(e), vo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ke = Gd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ke = Gd(e);
    } else
      t === 27 ? (t = Ke, el(e.type) ? (e = Xc, Xc = null, Ke = e) : Ke = t) : Ke = ht ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pl() {
    Ke = ht = null, De = !1;
  }
  function Ss() {
    var e = Ha;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), Ha = null), e;
  }
  function Gn(e) {
    Ha === null ? Ha = [e] : Ha.push(e);
  }
  var Ns = y(null), bl = null, ja = null;
  function Ya(e, t, a) {
    $(Ns, t._currentValue), t._currentValue = a;
  }
  function Sa(e) {
    e._currentValue = Ns.current, R(Ns);
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
      } else if (i === Te.current) {
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
    return po(bl, e);
  }
  function Qi(e, t) {
    return bl === null && xl(e), po(e, t);
  }
  function po(e, t) {
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
    $$typeof: F,
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
    return ws++, t.then(bo, bo), t;
  }
  function bo() {
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
  var xo = m.S;
  m.S = function(e, t) {
    nd = Oe(), typeof t == "object" && t !== null && typeof t.then == "function" && Qm(e, t), xo !== null && xo(e, t);
  };
  var jl = y(null);
  function Cs() {
    var e = jl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Zi(e, t) {
    t === null ? $(jl, jl.current) : $(jl, t.pool);
  }
  function jo() {
    var e = Cs();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var ln = Error(f(460)), As = Error(f(474)), Ki = Error(f(542)), $i = { then: function() {
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
            throw e = t.reason, _o(e), e;
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
  function Eo() {
    if (Nl === null) throw Error(f(459));
    var e = Nl;
    return Nl = null, e;
  }
  function _o(e) {
    if (e === ln || e === Ki)
      throw Error(f(483));
  }
  var nn = null, Zn = 0;
  function Ji(e) {
    var t = Zn;
    return Zn += 1, nn === null && (nn = []), No(nn, e, t);
  }
  function Kn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Fi(e, t) {
    throw t.$$typeof === E ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function To(e) {
    function t(S, p) {
      if (e) {
        var T = S.deletions;
        T === null ? (S.deletions = [p], S.flags |= 16) : T.push(p);
      }
    }
    function a(S, p) {
      if (!e) return null;
      for (; p !== null; )
        t(S, p), p = p.sibling;
      return null;
    }
    function l(S) {
      for (var p = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? p.set(S.key, S) : p.set(S.index, S), S = S.sibling;
      return p;
    }
    function i(S, p) {
      return S = ba(S, p), S.index = 0, S.sibling = null, S;
    }
    function u(S, p, T) {
      return S.index = T, e ? (T = S.alternate, T !== null ? (T = T.index, T < p ? (S.flags |= 67108866, p) : T) : (S.flags |= 67108866, p)) : (S.flags |= 1048576, p);
    }
    function c(S) {
      return e && S.alternate === null && (S.flags |= 67108866), S;
    }
    function r(S, p, T, q) {
      return p === null || p.tag !== 6 ? (p = vs(T, S.mode, q), p.return = S, p) : (p = i(p, T), p.return = S, p);
    }
    function g(S, p, T, q) {
      var oe = T.type;
      return oe === ce ? k(
        S,
        p,
        T.props.children,
        q,
        T.key
      ) : p !== null && (p.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === H && Sl(oe) === p.type) ? (p = i(p, T.props), Kn(p, T), p.return = S, p) : (p = Vi(
        T.type,
        T.key,
        T.props,
        null,
        S.mode,
        q
      ), Kn(p, T), p.return = S, p);
    }
    function w(S, p, T, q) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== T.containerInfo || p.stateNode.implementation !== T.implementation ? (p = ps(T, S.mode, q), p.return = S, p) : (p = i(p, T.children || []), p.return = S, p);
    }
    function k(S, p, T, q, oe) {
      return p === null || p.tag !== 7 ? (p = vl(
        T,
        S.mode,
        q,
        oe
      ), p.return = S, p) : (p = i(p, T), p.return = S, p);
    }
    function B(S, p, T) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = vs(
          "" + p,
          S.mode,
          T
        ), p.return = S, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case L:
            return T = Vi(
              p.type,
              p.key,
              p.props,
              null,
              S.mode,
              T
            ), Kn(T, p), T.return = S, T;
          case Y:
            return p = ps(
              p,
              S.mode,
              T
            ), p.return = S, p;
          case H:
            return p = Sl(p), B(S, p, T);
        }
        if (_e(p) || P(p))
          return p = vl(
            p,
            S.mode,
            T,
            null
          ), p.return = S, p;
        if (typeof p.then == "function")
          return B(S, Ji(p), T);
        if (p.$$typeof === F)
          return B(
            S,
            Qi(S, p),
            T
          );
        Fi(S, p);
      }
      return null;
    }
    function A(S, p, T, q) {
      var oe = p !== null ? p.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return oe !== null ? null : r(S, p, "" + T, q);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case L:
            return T.key === oe ? g(S, p, T, q) : null;
          case Y:
            return T.key === oe ? w(S, p, T, q) : null;
          case H:
            return T = Sl(T), A(S, p, T, q);
        }
        if (_e(T) || P(T))
          return oe !== null ? null : k(S, p, T, q, null);
        if (typeof T.then == "function")
          return A(
            S,
            p,
            Ji(T),
            q
          );
        if (T.$$typeof === F)
          return A(
            S,
            p,
            Qi(S, T),
            q
          );
        Fi(S, T);
      }
      return null;
    }
    function O(S, p, T, q, oe) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return S = S.get(T) || null, r(p, S, "" + q, oe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case L:
            return S = S.get(
              q.key === null ? T : q.key
            ) || null, g(p, S, q, oe);
          case Y:
            return S = S.get(
              q.key === null ? T : q.key
            ) || null, w(p, S, q, oe);
          case H:
            return q = Sl(q), O(
              S,
              p,
              T,
              q,
              oe
            );
        }
        if (_e(q) || P(q))
          return S = S.get(T) || null, k(p, S, q, oe, null);
        if (typeof q.then == "function")
          return O(
            S,
            p,
            T,
            Ji(q),
            oe
          );
        if (q.$$typeof === F)
          return O(
            S,
            p,
            T,
            Qi(p, q),
            oe
          );
        Fi(p, q);
      }
      return null;
    }
    function ie(S, p, T, q) {
      for (var oe = null, Re = null, ue = p, Ne = p = 0, ze = null; ue !== null && Ne < T.length; Ne++) {
        ue.index > Ne ? (ze = ue, ue = null) : ze = ue.sibling;
        var ke = A(
          S,
          ue,
          T[Ne],
          q
        );
        if (ke === null) {
          ue === null && (ue = ze);
          break;
        }
        e && ue && ke.alternate === null && t(S, ue), p = u(ke, p, Ne), Re === null ? oe = ke : Re.sibling = ke, Re = ke, ue = ze;
      }
      if (Ne === T.length)
        return a(S, ue), De && xa(S, Ne), oe;
      if (ue === null) {
        for (; Ne < T.length; Ne++)
          ue = B(S, T[Ne], q), ue !== null && (p = u(
            ue,
            p,
            Ne
          ), Re === null ? oe = ue : Re.sibling = ue, Re = ue);
        return De && xa(S, Ne), oe;
      }
      for (ue = l(ue); Ne < T.length; Ne++)
        ze = O(
          ue,
          S,
          Ne,
          T[Ne],
          q
        ), ze !== null && (e && ze.alternate !== null && ue.delete(
          ze.key === null ? Ne : ze.key
        ), p = u(
          ze,
          p,
          Ne
        ), Re === null ? oe = ze : Re.sibling = ze, Re = ze);
      return e && ue.forEach(function(il) {
        return t(S, il);
      }), De && xa(S, Ne), oe;
    }
    function de(S, p, T, q) {
      if (T == null) throw Error(f(151));
      for (var oe = null, Re = null, ue = p, Ne = p = 0, ze = null, ke = T.next(); ue !== null && !ke.done; Ne++, ke = T.next()) {
        ue.index > Ne ? (ze = ue, ue = null) : ze = ue.sibling;
        var il = A(S, ue, ke.value, q);
        if (il === null) {
          ue === null && (ue = ze);
          break;
        }
        e && ue && il.alternate === null && t(S, ue), p = u(il, p, Ne), Re === null ? oe = il : Re.sibling = il, Re = il, ue = ze;
      }
      if (ke.done)
        return a(S, ue), De && xa(S, Ne), oe;
      if (ue === null) {
        for (; !ke.done; Ne++, ke = T.next())
          ke = B(S, ke.value, q), ke !== null && (p = u(ke, p, Ne), Re === null ? oe = ke : Re.sibling = ke, Re = ke);
        return De && xa(S, Ne), oe;
      }
      for (ue = l(ue); !ke.done; Ne++, ke = T.next())
        ke = O(ue, S, Ne, ke.value, q), ke !== null && (e && ke.alternate !== null && ue.delete(ke.key === null ? Ne : ke.key), p = u(ke, p, Ne), Re === null ? oe = ke : Re.sibling = ke, Re = ke);
      return e && ue.forEach(function(lg) {
        return t(S, lg);
      }), De && xa(S, Ne), oe;
    }
    function Ve(S, p, T, q) {
      if (typeof T == "object" && T !== null && T.type === ce && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case L:
            e: {
              for (var oe = T.key; p !== null; ) {
                if (p.key === oe) {
                  if (oe = T.type, oe === ce) {
                    if (p.tag === 7) {
                      a(
                        S,
                        p.sibling
                      ), q = i(
                        p,
                        T.props.children
                      ), q.return = S, S = q;
                      break e;
                    }
                  } else if (p.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === H && Sl(oe) === p.type) {
                    a(
                      S,
                      p.sibling
                    ), q = i(p, T.props), Kn(q, T), q.return = S, S = q;
                    break e;
                  }
                  a(S, p);
                  break;
                } else t(S, p);
                p = p.sibling;
              }
              T.type === ce ? (q = vl(
                T.props.children,
                S.mode,
                q,
                T.key
              ), q.return = S, S = q) : (q = Vi(
                T.type,
                T.key,
                T.props,
                null,
                S.mode,
                q
              ), Kn(q, T), q.return = S, S = q);
            }
            return c(S);
          case Y:
            e: {
              for (oe = T.key; p !== null; ) {
                if (p.key === oe)
                  if (p.tag === 4 && p.stateNode.containerInfo === T.containerInfo && p.stateNode.implementation === T.implementation) {
                    a(
                      S,
                      p.sibling
                    ), q = i(p, T.children || []), q.return = S, S = q;
                    break e;
                  } else {
                    a(S, p);
                    break;
                  }
                else t(S, p);
                p = p.sibling;
              }
              q = ps(T, S.mode, q), q.return = S, S = q;
            }
            return c(S);
          case H:
            return T = Sl(T), Ve(
              S,
              p,
              T,
              q
            );
        }
        if (_e(T))
          return ie(
            S,
            p,
            T,
            q
          );
        if (P(T)) {
          if (oe = P(T), typeof oe != "function") throw Error(f(150));
          return T = oe.call(T), de(
            S,
            p,
            T,
            q
          );
        }
        if (typeof T.then == "function")
          return Ve(
            S,
            p,
            Ji(T),
            q
          );
        if (T.$$typeof === F)
          return Ve(
            S,
            p,
            Qi(S, T),
            q
          );
        Fi(S, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, p !== null && p.tag === 6 ? (a(S, p.sibling), q = i(p, T), q.return = S, S = q) : (a(S, p), q = vs(T, S.mode, q), q.return = S, S = q), c(S)) : a(S, p);
    }
    return function(S, p, T, q) {
      try {
        Zn = 0;
        var oe = Ve(
          S,
          p,
          T,
          q
        );
        return nn = null, oe;
      } catch (ue) {
        if (ue === ln || ue === Ki) throw ue;
        var Re = Ut(29, ue, null, S.mode);
        return Re.lanes = q, Re.return = S, Re;
      }
    };
  }
  var El = To(!0), wo = To(!1), Va = !1;
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
      return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = Yi(e), ro(e, null, a), t;
    }
    return Li(e, l, t, a), Yi(e);
  }
  function $n(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ne(e, a);
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
      var k = e.alternate;
      k !== null && (k = k.updateQueue, r = k.lastBaseUpdate, r !== c && (r === null ? k.firstBaseUpdate = w : r.next = w, k.lastBaseUpdate = g));
    }
    if (u !== null) {
      var B = i.baseState;
      c = 0, k = w = g = null, r = u;
      do {
        var A = r.lane & -536870913, O = A !== r.lane;
        if (O ? (Ae & A) === A : (l & A) === A) {
          A !== 0 && A === tn && (Os = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var ie = e, de = r;
            A = t;
            var Ve = a;
            switch (de.tag) {
              case 1:
                if (ie = de.payload, typeof ie == "function") {
                  B = ie.call(Ve, B, A);
                  break e;
                }
                B = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = de.payload, A = typeof ie == "function" ? ie.call(Ve, B, A) : ie, A == null) break e;
                B = D({}, B, A);
                break e;
              case 2:
                Va = !0;
            }
          }
          A = r.callback, A !== null && (e.flags |= 64, O && (e.flags |= 8192), O = i.callbacks, O === null ? i.callbacks = [A] : O.push(A));
        } else
          O = {
            lane: A,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, k === null ? (w = k = O, g = B) : k = k.next = O, c |= A;
        if (r = r.next, r === null) {
          if (r = i.shared.pending, r === null)
            break;
          O = r, r = O.next, O.next = null, i.lastBaseUpdate = O, i.shared.pending = null;
        }
      } while (!0);
      k === null && (g = B), i.baseState = g, i.firstBaseUpdate = w, i.lastBaseUpdate = k, u === null && (i.shared.lanes = 0), Ja |= c, e.lanes = c, e.memoizedState = B;
    }
  }
  function Co(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Ao(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Co(a[e], t);
  }
  var un = y(null), Wi = y(0);
  function zo(e, t) {
    e = Da, $(Wi, e), $(un, t), Da = e | t.baseLanes;
  }
  function Us() {
    $(Wi, Da), $(un, un.current);
  }
  function Rs() {
    Da = Wi.current, R(un), R(Wi);
  }
  var Rt = y(null), Wt = null;
  function Qa(e) {
    var t = e.alternate;
    $(Pe, Pe.current & 1), $(Rt, e), Wt === null && (t === null || un.current !== null || t.memoizedState !== null) && (Wt = e);
  }
  function ks(e) {
    $(Pe, Pe.current), $(Rt, e), Wt === null && (Wt = e);
  }
  function Do(e) {
    e.tag === 22 ? ($(Pe, Pe.current), $(Rt, e), Wt === null && (Wt = e)) : Za();
  }
  function Za() {
    $(Pe, Pe.current), $(Rt, Rt.current);
  }
  function kt(e) {
    R(Rt), Wt === e && (Wt = null), R(Pe);
  }
  var Pe = y(0);
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
  var Na = 0, Se = null, Le = null, lt = null, Pi = !1, sn = !1, _l = !1, eu = 0, Wn = 0, cn = null, Km = 0;
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
    return Na = u, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, m.H = e === null || e.memoizedState === null ? yf : Ps, _l = !1, u = a(l, i), _l = !1, sn && (u = Oo(
      t,
      a,
      l,
      i
    )), Mo(e), u;
  }
  function Mo(e) {
    m.H = ei;
    var t = Le !== null && Le.next !== null;
    if (Na = 0, lt = Le = Se = null, Pi = !1, Wn = 0, cn = null, t) throw Error(f(300));
    e === null || nt || (e = e.dependencies, e !== null && Xi(e) && (nt = !0));
  }
  function Oo(e, t, a, l) {
    Se = e;
    var i = 0;
    do {
      if (sn && (cn = null), Wn = 0, sn = !1, 25 <= i) throw Error(f(301));
      if (i += 1, lt = Le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      m.H = gf, u = t(a, l);
    } while (sn);
    return u;
  }
  function $m() {
    var e = m.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? In(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (Se.flags |= 1024), t;
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
    Na = 0, lt = Le = Se = null, sn = !1, Wn = eu = 0, cn = null;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? Se.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function et() {
    if (Le === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = lt === null ? Se.memoizedState : lt.next;
    if (t !== null)
      lt = t, Le = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(f(467)) : Error(f(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, lt === null ? Se.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function In(e) {
    var t = Wn;
    return Wn += 1, cn === null && (cn = []), e = No(cn, e, t), t = Se, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, m.H = t === null || t.memoizedState === null ? yf : Ps), e;
  }
  function au(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return In(e);
      if (e.$$typeof === F) return mt(e);
    }
    throw Error(f(438, String(e)));
  }
  function Vs(e) {
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
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = tu(), Se.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = K;
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
      var r = c = null, g = null, w = t, k = !1;
      do {
        var B = w.lane & -536870913;
        if (B !== w.lane ? (Ae & B) === B : (Na & B) === B) {
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
            }), B === tn && (k = !0);
          else if ((Na & A) === A) {
            w = w.next, A === tn && (k = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, g === null ? (r = g = B, c = u) : g = g.next = B, Se.lanes |= A, Ja |= A;
          B = w.action, _l && a(u, B), u = w.hasEagerState ? w.eagerState : a(u, B);
        } else
          A = {
            lane: B,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, g === null ? (r = g = A, c = u) : g = g.next = A, Se.lanes |= B, Ja |= B;
        w = w.next;
      } while (w !== null && w !== t);
      if (g === null ? c = u : g.next = r, !Ot(u, e.memoizedState) && (nt = !0, k && (a = an, a !== null)))
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
  function Uo(e, t, a) {
    var l = Se, i = et(), u = De;
    if (u) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = t();
    var c = !Ot(
      (Le || i).memoizedState,
      a
    );
    if (c && (i.memoizedState = a, nt = !0), i = i.queue, Ks(qo.bind(null, l, i, e), [
      e
    ]), i.getSnapshot !== t || c || lt !== null && lt.memoizedState.tag & 1) {
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
      ), Xe === null) throw Error(f(349));
      u || (Na & 127) !== 0 || Ro(l, t, a);
    }
    return a;
  }
  function Ro(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Se.updateQueue, t === null ? (t = tu(), Se.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
      return !Ot(e, a);
    } catch {
      return !0;
    }
  }
  function Ho(e) {
    var t = gl(e, 2);
    t !== null && At(t, e, 2);
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
  function Lo(e, t, a, l) {
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
      m.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, Yo(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Yo(e, t) {
    var a = t.action, l = t.payload, i = e.state;
    if (t.isTransition) {
      var u = m.T, c = {};
      m.T = c;
      try {
        var r = a(i, l), g = m.S;
        g !== null && g(c, r), Vo(e, t, r);
      } catch (w) {
        Zs(e, t, w);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), m.T = u;
      }
    } else
      try {
        u = a(i, l), Vo(e, t, u);
      } catch (w) {
        Zs(e, t, w);
      }
  }
  function Vo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Go(e, t, l);
      },
      function(l) {
        return Zs(e, t, l);
      }
    ) : Go(e, t, a);
  }
  function Go(e, t, a) {
    t.status = "fulfilled", t.value = a, Xo(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Yo(e, a)));
  }
  function Zs(e, t, a) {
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
      lastRenderedReducer: Qo,
      lastRenderedState: t
    }, a.queue = l, a = df.bind(
      null,
      Se,
      l
    ), l.dispatch = a, l = Qs(!1), u = Is.bind(
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
    var t = et();
    return $o(t, Le, e);
  }
  function $o(e, t, a) {
    if (t = Gs(
      e,
      t,
      Qo
    )[0], e = lu(Ea)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = In(t);
      } catch (c) {
        throw c === ln ? Ki : c;
      }
    else l = t;
    t = et();
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
    var t = et(), a = Le;
    if (a !== null)
      return $o(t, a, e);
    et(), t = t.memoizedState, a = et();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function rn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Se.updateQueue, t === null && (t = tu(), Se.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Fo() {
    return et().memoizedState;
  }
  function nu(e, t, a, l) {
    var i = xt();
    Se.flags |= e, i.memoizedState = rn(
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
    Le !== null && l !== null && qs(l, Le.memoizedState.deps) ? i.memoizedState = rn(t, u, a, l) : (Se.flags |= e, i.memoizedState = rn(
      1 | t,
      u,
      a,
      l
    ));
  }
  function Wo(e, t) {
    nu(8390656, 8, e, t);
  }
  function Ks(e, t) {
    iu(2048, 8, e, t);
  }
  function Wm(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null)
      t = tu(), Se.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Io(e) {
    var t = et().memoizedState;
    return Wm({ ref: t, nextImpl: e }), function() {
      if ((qe & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Po(e, t) {
    return iu(4, 2, e, t);
  }
  function ef(e, t) {
    return iu(4, 4, e, t);
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
    a = a != null ? a.concat([e]) : null, iu(4, 4, tf.bind(null, t, e), a);
  }
  function $s() {
  }
  function lf(e, t) {
    var a = et();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && qs(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function nf(e, t) {
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
    return a === void 0 || (Na & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = ud(), Se.lanes |= e, Ja |= e, a);
  }
  function uf(e, t, a, l) {
    return Ot(a, t) ? a : un.current !== null ? (e = Js(e, a, l), Ot(e, t) || (nt = !0), e) : (Na & 42) === 0 || (Na & 1073741824) !== 0 && (Ae & 261930) === 0 ? (nt = !0, e.memoizedState = a) : (e = ud(), Se.lanes |= e, Ja |= e, t);
  }
  function sf(e, t, a, l, i) {
    var u = v.p;
    v.p = u !== 0 && 8 > u ? u : 8;
    var c = m.T, r = {};
    m.T = r, Is(e, !1, t, a);
    try {
      var g = i(), w = m.S;
      if (w !== null && w(r, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var k = Zm(
          g,
          l
        );
        Pn(
          e,
          t,
          k,
          Ht(e)
        );
      } else
        Pn(
          e,
          t,
          l,
          Ht(e)
        );
    } catch (B) {
      Pn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Ht()
      );
    } finally {
      v.p = u, c !== null && r.types !== null && (c.types = r.types), m.T = c;
    }
  }
  function Im() {
  }
  function Fs(e, t, a, l) {
    if (e.tag !== 5) throw Error(f(476));
    var i = cf(e).queue;
    sf(
      e,
      i,
      t,
      V,
      a === null ? Im : function() {
        return rf(e), a(l);
      }
    );
  }
  function cf(e) {
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
        lastRenderedReducer: Ea,
        lastRenderedState: V
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
  function of() {
    return et().memoizedState;
  }
  function ff() {
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
          l !== null && (At(l, t, a), $n(l, t, a)), t = { cache: Ts() }, e.payload = t;
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
    }, uu(e) ? hf(t, a) : (a = ys(e, t, a, l), a !== null && (At(a, e, l), mf(a, t, l)));
  }
  function df(e, t, a) {
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
    if (uu(e)) hf(t, i);
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
        return At(a, e, l), mf(a, t, l), !0;
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
      ), t !== null && At(t, e, 2);
  }
  function uu(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function hf(e, t) {
    sn = Pi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function mf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, ne(e, a);
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
  var yf = {
    readContext: mt,
    use: au,
    useCallback: function(e, t) {
      return xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: Wo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, nu(
        4194308,
        4,
        tf.bind(null, t, e),
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
        Se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Qs(e);
      var t = e.queue, a = df.bind(null, Se, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: $s,
    useDeferredValue: function(e, t) {
      var a = xt();
      return Js(a, e, t);
    },
    useTransition: function() {
      var e = Qs(!1);
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
          throw Error(f(407));
        a = a();
      } else {
        if (a = t(), Xe === null)
          throw Error(f(349));
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
        a = (l & ~(1 << 32 - bt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = eu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Km++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ws,
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
      return t.queue = a, t = Is.bind(
        null,
        Se,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Vs,
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
          throw Error(f(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ps = {
    readContext: mt,
    use: au,
    useCallback: lf,
    useContext: mt,
    useEffect: Ks,
    useImperativeHandle: af,
    useInsertionEffect: Po,
    useLayoutEffect: ef,
    useMemo: nf,
    useReducer: lu,
    useRef: Fo,
    useState: function() {
      return lu(Ea);
    },
    useDebugValue: $s,
    useDeferredValue: function(e, t) {
      var a = et();
      return uf(
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
    useSyncExternalStore: Uo,
    useId: of,
    useHostTransitionStatus: Ws,
    useFormState: Ko,
    useActionState: Ko,
    useOptimistic: function(e, t) {
      var a = et();
      return Lo(a, Le, e, t);
    },
    useMemoCache: Vs,
    useCacheRefresh: ff
  };
  Ps.useEffectEvent = Io;
  var gf = {
    readContext: mt,
    use: au,
    useCallback: lf,
    useContext: mt,
    useEffect: Ks,
    useImperativeHandle: af,
    useInsertionEffect: Po,
    useLayoutEffect: ef,
    useMemo: nf,
    useReducer: Xs,
    useRef: Fo,
    useState: function() {
      return Xs(Ea);
    },
    useDebugValue: $s,
    useDeferredValue: function(e, t) {
      var a = et();
      return Le === null ? Js(a, e, t) : uf(
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
    useSyncExternalStore: Uo,
    useId: of,
    useHostTransitionStatus: Ws,
    useFormState: Jo,
    useActionState: Jo,
    useOptimistic: function(e, t) {
      var a = et();
      return Le !== null ? Lo(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Vs,
    useCacheRefresh: ff
  };
  gf.useEffectEvent = Io;
  function ec(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : D({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var tc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), i = Ga(l);
      i.payload = t, a != null && (i.callback = a), t = Xa(e, i, l), t !== null && (At(t, e, l), $n(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ht(), i = Ga(l);
      i.tag = 1, i.payload = t, a != null && (i.callback = a), t = Xa(e, i, l), t !== null && (At(t, e, l), $n(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ht(), l = Ga(a);
      l.tag = 2, t != null && (l.callback = t), t = Xa(e, l, a), t !== null && (At(t, e, a), $n(t, e, a));
    }
  };
  function vf(e, t, a, l, i, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Ln(a, l) || !Ln(i, u) : !0;
  }
  function pf(e, t, a, l) {
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
      a === t && (a = D({}, a));
      for (var i in e)
        a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function bf(e) {
    Bi(e);
  }
  function xf(e) {
    console.error(e);
  }
  function jf(e) {
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
  function ac(e, t, a) {
    return a = Ga(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      su(e, t);
    }, a;
  }
  function Nf(e) {
    return e = Ga(e), e.tag = 3, e;
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
      Sf(t, a, l), typeof i != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
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
            return a.flags |= 65536, i &= -i, a.lanes |= i, i = Nf(i), Ef(
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
    t.child = e === null ? wo(t, null, a, l) : El(
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
    return xl(t), l = Bs(
      e,
      t,
      a,
      c,
      u,
      i
    ), r = Hs(), e !== null && !nt ? (Ls(e, t, i), _a(e, t, i)) : (De && r && bs(t), t.flags |= 1, yt(e, t, l, i), t.child);
  }
  function Tf(e, t, a, l, i) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !gs(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, wf(
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
  function wf(e, t, a, l, i) {
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Zi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? zo(t, u) : Us(), Do(t);
      else
        return l = t.lanes = 536870912, Af(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Zi(t, u.cachePool), zo(t, u), Za(), t.memoizedState = null) : (e !== null && Zi(t, null), Us(), Za());
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
    var u = Cs();
    return u = u === null ? null : { parent: at._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Zi(t, null), Us(), Do(t), e !== null && en(e, t, l, !0), t.childLanes = i, null;
  }
  function cu(e, t) {
    return t = ou(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zf(e, t, a) {
    return El(t, e.child, null, a), e = cu(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
  }
  function ay(e, t, a) {
    var l = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (De) {
        if (l.mode === "hidden")
          return e = cu(t, l), t.lanes = 536870912, ti(null, e);
        if (ks(t), (e = Ke) ? (e = Vd(
          e,
          Ft
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ba !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = fo(e), a.return = t, t.child = a, ht = t, Ke = null)) : e = null, e === null) throw La(t);
        return t.lanes = 536870912, null;
      }
      return cu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (ks(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = zf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (nt || en(e, t, a, !1), i = (a & e.childLanes) !== 0, nt || i) {
        if (l = Xe, l !== null && (c = se(l, a), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, gl(e, c), At(l, e, c), lc;
        bu(), t = zf(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Ke = It(c.nextSibling), ht = t, De = !0, Ha = null, Ft = !1, e !== null && yo(t, e), t = cu(t, l), t.flags |= 4096;
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
  function Df(e, t, a, l, i, u) {
    return xl(t), t.updateQueue = null, a = Oo(
      t,
      l,
      a,
      i
    ), Mo(e), l = Hs(), e !== null && !nt ? (Ls(e, t, u), _a(e, t, u)) : (De && l && bs(t), t.flags |= 1, yt(e, t, a, u), t.child);
  }
  function Mf(e, t, a, l, i) {
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
      var w = u.context, k = a.contextType;
      c = Fl, typeof k == "object" && k !== null && (c = mt(k));
      var B = a.getDerivedStateFromProps;
      k = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, k || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || w !== c) && pf(
        t,
        u,
        l,
        c
      ), Va = !1;
      var A = t.memoizedState;
      u.state = A, Fn(t, l, u, i), Jn(), w = t.memoizedState, r || A !== w || Va ? (typeof B == "function" && (ec(
        t,
        a,
        B,
        l
      ), w = t.memoizedState), (g = Va || vf(
        t,
        a,
        g,
        l,
        A,
        w,
        c
      )) ? (k || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), u.props = l, u.state = w, u.context = c, l = g) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Ds(e, t), c = t.memoizedProps, k = Tl(a, c), u.props = k, B = t.pendingProps, A = u.context, w = a.contextType, g = Fl, typeof w == "object" && w !== null && (g = mt(w)), r = a.getDerivedStateFromProps, (w = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== B || A !== g) && pf(
        t,
        u,
        l,
        g
      ), Va = !1, A = t.memoizedState, u.state = A, Fn(t, l, u, i), Jn();
      var O = t.memoizedState;
      c !== B || A !== O || Va || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof r == "function" && (ec(
        t,
        a,
        r,
        l
      ), O = t.memoizedState), (k = Va || vf(
        t,
        a,
        k,
        l,
        A,
        O,
        g
      ) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (w || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, O, g), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        O,
        g
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = O), u.props = l, u.state = O, u.context = g, l = k) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), l = !1);
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
  function Of(e, t, a, l) {
    return pl(), t.flags |= 256, yt(e, t, a, l), t.child;
  }
  var ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(e) {
    return { baseLanes: e, cachePool: jo() };
  }
  function sc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Bt), e;
  }
  function Uf(e, t, a) {
    var l = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0), c && (i = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (De) {
        if (i ? Qa(t) : Za(), (e = Ke) ? (e = Vd(
          e,
          Ft
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ba !== null ? { id: ca, overflow: ra } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = fo(e), a.return = t, t.child = a, ht = t, Ke = null)) : e = null, e === null) throw La(t);
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
        if (c = Xe, c !== null && (l = se(c, a), l !== 0 && l !== g.retryLane))
          throw g.retryLane = l, gl(e, l), At(c, e, l), lc;
        Vc(r) || bu(), t = rc(
          e,
          t,
          a
        );
      } else
        Vc(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Ke = It(
          r.nextSibling
        ), ht = t, De = !0, Ha = null, Ft = !1, e !== null && yo(t, e), t = cc(
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
    ), r.flags |= 2), r.return = t, l.return = t, l.sibling = r, t.child = l, ti(null, l), l = t.child, r = e.child.memoizedState, r === null ? r = uc(a) : (i = r.cachePool, i !== null ? (g = at._currentValue, i = i.parent !== g ? { parent: g, pool: g } : i) : i = jo(), r = {
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
  function Rf(e, t, a) {
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
  function kf(e, t, a) {
    var l = t.pendingProps, i = l.revealOrder, u = l.tail;
    l = l.children;
    var c = Pe.current, r = (c & 2) !== 0;
    if (r ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, $(Pe, c), yt(e, t, l, a), l = De ? Vn : 0, !r && e !== null && (e.flags & 128) !== 0)
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
          return l.dehydrated !== null ? (Qa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Uf(e, t, a) : (Qa(t), e = _a(
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
            return kf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(Pe, Pe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Cf(
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
  function qf(e, t, a) {
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
      nt = !1, De && (t.flags & 1048576) !== 0 && mo(t, Vn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Sl(t.elementType), t.type = e, typeof e == "function")
            gs(e) ? (l = Tl(e, l), t.tag = 1, t = Mf(
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
              if (i === le) {
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
            throw t = Ee(e) || e, Error(f(306, t, ""));
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
              t = Of(
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
              ), Gn(i), t = Of(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ke = It(e.firstChild), ht = t, De = !0, Ha = null, Ft = !0, a = wo(
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
        return ru(e, t), e === null ? (a = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : De || (a = t.type, e = t.pendingProps, l = Tu(
          ye.current
        ).createElement(a), l[Ze] = t, l[Nt] = e, gt(l, a, e), rt(l), t.stateNode = l) : t.memoizedState = $d(
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
        return Uf(e, t, a);
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
        return l = t.pendingProps, Ya(t, t.type, l.value), yt(e, t, l.children, a), t.child;
      case 9:
        return i = t.type._context, l = t.pendingProps.children, xl(t), i = mt(i), l = l(i), t.flags |= 1, yt(e, t, l, a), t.child;
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
        return xl(t), l = mt(at), e === null ? (i = Cs(), i === null && (i = Xe, u = Ts(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= a), i = u), t.memoizedState = { parent: l, cache: i }, zs(t), Ya(t, at, i)) : ((e.lanes & a) !== 0 && (Ds(e, t), Fn(t, null, null, a), Jn()), i = e.memoizedState, u = t.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Ya(t, at, l)) : (l = u.cache, Ya(t, at, l), l !== i.cache && _s(
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
        else if (od()) e.flags |= 8192;
        else
          throw Nl = $i, As;
    } else e.flags &= -16777217;
  }
  function Bf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Pd(t))
      if (od()) e.flags |= 8192;
      else
        throw Nl = $i, As;
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sa(at), Z(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? Ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ss())), $e(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (Ta(t), u !== null ? ($e(t), Bf(t, u)) : ($e(t), dc(
          t,
          i,
          null,
          l,
          a
        ))) : u ? u !== e.memoizedState ? (Ta(t), $e(t), Bf(t, u)) : ($e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ta(t), $e(t), dc(
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
              throw Error(f(166));
            return $e(t), null;
          }
          e = I.current, Pl(t) ? go(t) : (e = Qd(i, l, a), t.stateNode = e, Ta(t));
        }
        return $e(t), null;
      case 5:
        if (ge(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return $e(t), null;
          }
          if (u = I.current, Pl(t))
            go(t);
          else {
            var c = Tu(
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
          if (e = ye.current, Pl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, i = ht, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            e[Ze] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Ud(e.nodeValue, a)), e || La(t, !0);
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
        return Z(), e === null && Uc(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return Sa(t.type), $e(t), null;
      case 19:
        if (R(Pe), l = t.memoizedState, l === null) return $e(t), null;
        if (i = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (i) ai(l, !1);
          else {
            if (Ie !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Ii(e), u !== null) {
                  for (t.flags |= 128, ai(l, !1), e = u.updateQueue, t.updateQueue = e, fu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    oo(a, e), a = a.sibling;
                  return $(
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
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Oe(), e.sibling = null, a = Pe.current, $(
          Pe,
          i ? a & 1 | 2 : a & 1
        ), De && xa(t, l.treeForkCount), e) : ($e(t), null);
      case 22:
      case 23:
        return kt(t), Rs(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), a = t.updateQueue, a !== null && fu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && R(jl), null;
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
        return Sa(at), Z(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ge(t), null;
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
        return R(Pe), null;
      case 4:
        return Z(), null;
      case 10:
        return Sa(t.type), null;
      case 22:
      case 23:
        return kt(t), Rs(), e !== null && R(jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sa(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hf(e, t) {
    switch (xs(t), t.tag) {
      case 3:
        Sa(at), Z();
        break;
      case 26:
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        Z();
        break;
      case 31:
        t.memoizedState !== null && kt(t);
        break;
      case 13:
        kt(t);
        break;
      case 19:
        R(Pe);
        break;
      case 10:
        Sa(t.type);
        break;
      case 22:
      case 23:
        kt(t), Rs(), e !== null && R(jl);
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
  function hc(e, t, a) {
    try {
      var l = e.stateNode;
      wy(l, e.type, a, t), l[Nt] = t;
    } catch (i) {
      He(e, e.return, i);
    }
  }
  function Gf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && el(e.type) || e.tag === 4;
  }
  function mc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gf(e.return)) return null;
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
  function Xf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      gt(t, l, a), t[Ze] = e, t[Nt] = a;
    } catch (u) {
      He(e, e.return, u);
    }
  }
  var wa = !1, it = !1, gc = !1, Qf = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function uy(e, t) {
    if (e = e.containerInfo, qc = Ou, e = to(e), rs(e)) {
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
            var c = 0, r = -1, g = -1, w = 0, k = 0, B = e, A = null;
            t: for (; ; ) {
              for (var O; B !== a || i !== 0 && B.nodeType !== 3 || (r = c + i), B !== u || l !== 0 && B.nodeType !== 3 || (g = c + l), B.nodeType === 3 && (c += B.nodeValue.length), (O = B.firstChild) !== null; )
                A = B, B = O;
              for (; ; ) {
                if (B === e) break t;
                if (A === a && ++w === i && (r = c), A === u && ++k === l && (g = c), (O = B.nextSibling) !== null) break;
                B = A, A = B.parentNode;
              }
              B = O;
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
                  var ie = Tl(
                    a.type,
                    i
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ie,
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
  function Zf(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Aa(e, a), l & 4 && li(5, a);
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
        l & 64 && Lf(a), l & 512 && ni(a, a.return);
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
        Aa(e, a), t === null && l & 4 && Vf(a), l & 512 && ni(a, a.return);
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
          t = t !== null && t.memoizedState !== null || it, i = wa;
          var u = it;
          wa = l, (it = t) && !u ? za(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Aa(e, a), wa = i, it = u;
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
    t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, _t = !1;
  function Ca(e, t, a) {
    for (a = a.child; a !== null; )
      $f(e, t, a), a = a.sibling;
  }
  function $f(e, t, a) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(ma, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        it || oa(a, t), Ca(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        it || oa(a, t);
        var l = Je, i = _t;
        el(a.type) && (Je = a.stateNode, _t = !1), Ca(
          e,
          t,
          a
        ), hi(a.stateNode), Je = l, _t = i;
        break;
      case 5:
        it || oa(a, t);
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
        Je !== null && (_t ? (e = Je, Ld(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), jn(e)) : Ld(Je, a.stateNode));
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
        Ka(2, a, t), it || Ka(4, a, t), Ca(
          e,
          t,
          a
        );
        break;
      case 1:
        it || (oa(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Yf(
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
        it = (l = it) || a.memoizedState !== null, Ca(
          e,
          t,
          a
        ), it = l;
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
        $f(u, c, i), Je = null, _t = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Wf(t, e), t = t.sibling;
  }
  var aa = null;
  function Wf(e, t) {
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
                      throw Error(f(468, l));
                  }
                  u[Ze] = e, rt(u), l = u;
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
          } catch (ie) {
            He(e, e.return, ie);
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
          } catch (ie) {
            He(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (Au = null, i = aa, aa = wu(t.containerInfo), Tt(t, e), aa = i, wt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            jn(t.containerInfo);
          } catch (ie) {
            He(e, e.return, ie);
          }
        gc && (gc = !1, If(e));
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
        var g = a !== null && a.memoizedState !== null, w = wa, k = it;
        if (wa = w || i, it = k || g, Tt(t, e), it = k, wa = w, wt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (a === null || g || wa || it || wl(e)), a = null, t = e; ; ) {
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
                } catch (ie) {
                  He(g, g.return, ie);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = i ? "" : g.memoizedProps;
                } catch (ie) {
                  He(g, g.return, ie);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                g = t;
                try {
                  var O = g.stateNode;
                  i ? Yd(O, !0) : Yd(g.stateNode, !1);
                } catch (ie) {
                  He(g, g.return, ie);
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
          if (Gf(l)) {
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
          typeof a.componentWillUnmount == "function" && Yf(
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
                  Co(g[i], r);
            } catch (w) {
              He(l, l.return, w);
            }
          }
          a && c & 64 && Lf(u), ni(u, u.return);
          break;
        case 27:
          Xf(u);
        case 26:
        case 5:
          za(
            i,
            u,
            a
          ), a && l === null && c & 4 && Vf(u), ni(u, u.return);
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
          var k = c.stateNode;
          c.memoizedState !== null ? k._visibility & 2 ? on(
            u,
            c,
            r,
            g,
            i
          ) : ii(
            u,
            c
          ) : (k._visibility |= 2, on(
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
  function td(e) {
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
          ot = l, ld(
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
          ot = l, ld(
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
  function ld(e, t) {
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
          if (Kf(l), l === a) {
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
  }, ry = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, Xe = null, we = null, Ae = 0, Be = 0, qt = null, $a = !1, dn = !1, bc = !1, Da = 0, Ie = 0, Ja = 0, Cl = 0, xc = 0, Bt = 0, hn = 0, ci = null, Ct = null, jc = !1, yu = 0, nd = 0, gu = 1 / 0, vu = null, Fa = null, st = 0, Wa = null, mn = null, Ma = 0, Sc = 0, Nc = null, id = null, ri = 0, Ec = null;
  function Ht() {
    return (qe & 2) !== 0 && Ae !== 0 ? Ae & -Ae : m.T !== null ? zc() : fe();
  }
  function ud() {
    if (Bt === 0)
      if ((Ae & 536870912) === 0 || De) {
        var e = Ra;
        Ra <<= 1, (Ra & 3932160) === 0 && (Ra = 262144), Bt = e;
      } else Bt = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), Bt;
  }
  function At(e, t, a) {
    (e === Xe && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (yn(e, 0), Ia(
      e,
      Ae,
      Bt,
      !1
    )), fl(e, a), ((qe & 2) === 0 || e !== Xe) && (e === Xe && ((qe & 2) === 0 && (Cl |= a), Ie === 4 && Ia(
      e,
      Ae,
      Bt,
      !1
    )), fa(e));
  }
  function sd(e, t, a) {
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
              Ct = null;
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
            Ma = t, l.timeoutHandle = Bd(
              cd.bind(
                null,
                l,
                a,
                Ct,
                vu,
                jc,
                t,
                Bt,
                Cl,
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
          cd(
            l,
            a,
            Ct,
            vu,
            jc,
            t,
            Bt,
            Cl,
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
  function cd(e, t, a, l, i, u, c, r, g, w, k, B, A, O) {
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
      var ie = (u & 62914560) === u ? yu - Oe() : (u & 4194048) === u ? nd - Oe() : 0;
      if (ie = $y(
        B,
        ie
      ), ie !== null) {
        Ma = u, e.cancelPendingCommit = ie(
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
            O
          )
        ), Ia(e, u, c, !w);
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
    a !== 0 && X(e, a, t);
  }
  function pu() {
    return (qe & 6) === 0 ? (oi(0), !1) : !0;
  }
  function _c() {
    if (we !== null) {
      if (Be === 0)
        var e = we.return;
      else
        e = we, ja = bl = null, Ys(e), nn = null, Zn = 0, e = we;
      for (; e !== null; )
        Hf(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function yn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, zy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ma = 0, _c(), Xe = e, we = a = ba(e.current, null), Ae = t, Be = 0, qt = null, $a = !1, dn = ol(e, t), bc = !1, hn = Bt = xc = Cl = Ja = Ie = 0, Ct = ci = null, jc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - bt(l), u = 1 << i;
        t |= e[i], l &= ~u;
      }
    return Da = t, Hi(), a;
  }
  function rd(e, t) {
    Se = null, m.H = ei, t === ln || t === Ki ? (t = Eo(), Be = 3) : t === As ? (t = Eo(), Be = 4) : Be = t === lc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, we === null && (Ie = 1, su(
      e,
      Kt(t, e.current)
    ));
  }
  function od() {
    var e = Rt.current;
    return e === null ? !0 : (Ae & 4194048) === Ae ? Wt === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === Wt : !1;
  }
  function fd() {
    var e = m.H;
    return m.H = ei, e === null ? ei : e;
  }
  function dd() {
    var e = m.A;
    return m.A = cy, e;
  }
  function bu() {
    Ie = 4, $a || (Ae & 4194048) !== Ae && Rt.current !== null || (dn = !0), (Ja & 134217727) === 0 && (Cl & 134217727) === 0 || Xe === null || Ia(
      Xe,
      Ae,
      Bt,
      !1
    );
  }
  function Tc(e, t, a) {
    var l = qe;
    qe |= 2;
    var i = fd(), u = dd();
    (Xe !== e || Ae !== t) && (vu = null, yn(e, t)), t = !1;
    var c = Ie;
    e: do
      try {
        if (Be !== 0 && we !== null) {
          var r = we, g = qt;
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
      } catch (k) {
        rd(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ja = bl = null, qe = l, m.H = i, m.A = u, we === null && (Xe = null, Ae = 0, Hi()), c;
  }
  function fy() {
    for (; we !== null; ) hd(we);
  }
  function dy(e, t) {
    var a = qe;
    qe |= 2;
    var l = fd(), i = dd();
    Xe !== e || Ae !== t ? (vu = null, gu = Oe() + 500, yn(e, t)) : dn = ol(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && we !== null) {
          t = we;
          var u = qt;
          t: switch (Be) {
            case 1:
              Be = 0, qt = null, gn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (So(u)) {
                Be = 0, qt = null, md(t);
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
              So(u) ? (Be = 0, qt = null, md(t)) : (Be = 0, qt = null, gn(e, t, u, 7));
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
                    Be = 0, qt = null;
                    var g = r.sibling;
                    if (g !== null) we = g;
                    else {
                      var w = r.return;
                      w !== null ? (we = w, xu(w)) : we = null;
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
      } catch (k) {
        rd(e, k);
      }
    while (!0);
    return ja = bl = null, m.H = l, m.A = i, qe = a, we !== null ? 0 : (Xe = null, Ae = 0, Hi(), Ie);
  }
  function hy() {
    for (; we !== null && !sa(); )
      hd(we);
  }
  function hd(e) {
    var t = qf(e.alternate, e, Da);
    e.memoizedProps = e.pendingProps, t === null ? xu(e) : we = t;
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
        Ys(t);
      default:
        Hf(a, t), t = we = oo(t, Da), t = qf(a, t, Da);
    }
    e.memoizedProps = e.pendingProps, t === null ? xu(e) : we = t;
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
        Ae
      )) {
        Ie = 1, su(
          e,
          Kt(a, e.current)
        ), we = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw we = i, u;
      Ie = 1, su(
        e,
        Kt(a, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (De || l === 1 ? e = !0 : dn || (Ae & 536870912) !== 0 ? e = !1 : ($a = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Rt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), yd(t, e)) : xu(t);
  }
  function xu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yd(
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
        we = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
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
    Ie = 6, we = null;
  }
  function gd(e, t, a, l, i, u, c, r, g) {
    e.cancelPendingCommit = null;
    do
      ju();
    while (st !== 0);
    if ((qe & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= ms, U(
        e,
        a,
        u,
        c,
        r,
        g
      ), e === Xe && (we = Xe = null, Ae = 0), mn = t, Wa = e, Ma = a, Sc = u, Nc = i, id = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vy(Ua, function() {
        return jd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = m.T, m.T = null, i = v.p, v.p = 2, c = qe, qe |= 4;
        try {
          uy(e, t, a);
        } finally {
          qe = c, v.p = i, m.T = l;
        }
      }
      st = 1, vd(), pd(), bd();
    }
  }
  function vd() {
    if (st === 1) {
      st = 0;
      var e = Wa, t = mn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = m.T, m.T = null;
        var l = v.p;
        v.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Wf(t, e);
          var u = Bc, c = to(e.containerInfo), r = u.focusedElem, g = u.selectionRange;
          if (c !== r && r && r.ownerDocument && eo(
            r.ownerDocument.documentElement,
            r
          )) {
            if (g !== null && rs(r)) {
              var w = g.start, k = g.end;
              if (k === void 0 && (k = w), "selectionStart" in r)
                r.selectionStart = w, r.selectionEnd = Math.min(
                  k,
                  r.value.length
                );
              else {
                var B = r.ownerDocument || document, A = B && B.defaultView || window;
                if (A.getSelection) {
                  var O = A.getSelection(), ie = r.textContent.length, de = Math.min(g.start, ie), Ve = g.end === void 0 ? de : Math.min(g.end, ie);
                  !O.extend && de > Ve && (c = Ve, Ve = de, de = c);
                  var S = Pr(
                    r,
                    de
                  ), p = Pr(
                    r,
                    Ve
                  );
                  if (S && p && (O.rangeCount !== 1 || O.anchorNode !== S.node || O.anchorOffset !== S.offset || O.focusNode !== p.node || O.focusOffset !== p.offset)) {
                    var T = B.createRange();
                    T.setStart(S.node, S.offset), O.removeAllRanges(), de > Ve ? (O.addRange(T), O.extend(p.node, p.offset)) : (T.setEnd(p.node, p.offset), O.addRange(T));
                  }
                }
              }
            }
            for (B = [], O = r; O = O.parentNode; )
              O.nodeType === 1 && B.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < B.length; r++) {
              var q = B[r];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Ou = !!qc, Bc = qc = null;
        } finally {
          qe = i, v.p = l, m.T = a;
        }
      }
      e.current = t, st = 2;
    }
  }
  function pd() {
    if (st === 2) {
      st = 0;
      var e = Wa, t = mn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = m.T, m.T = null;
        var l = v.p;
        v.p = 2;
        var i = qe;
        qe |= 4;
        try {
          Zf(e, t.alternate, t);
        } finally {
          qe = i, v.p = l, m.T = a;
        }
      }
      st = 3;
    }
  }
  function bd() {
    if (st === 4 || st === 3) {
      st = 0, Ol();
      var e = Wa, t = mn, a = Ma, l = id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? st = 5 : (st = 0, mn = Wa = null, xd(e, e.pendingLanes));
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
        t = m.T, i = v.p, v.p = 2, m.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < l.length; c++) {
            var r = l[c];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          m.T = t, v.p = i;
        }
      }
      (Ma & 3) !== 0 && ju(), fa(e), i = e.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? e === Ec ? ri++ : (ri = 0, Ec = e) : ri = 0, oi(0);
    }
  }
  function xd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Xn(t)));
  }
  function ju() {
    return vd(), pd(), bd(), jd();
  }
  function jd() {
    if (st !== 5) return !1;
    var e = Wa, t = Sc;
    Sc = 0;
    var a = Ue(Ma), l = m.T, i = v.p;
    try {
      v.p = 32 > a ? 32 : a, m.T = null, a = Nc, Nc = null;
      var u = Wa, c = Ma;
      if (st = 0, mn = Wa = null, Ma = 0, (qe & 6) !== 0) throw Error(f(331));
      var r = qe;
      if (qe |= 4, ad(u.current), Pf(
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
      v.p = i, m.T = l, xd(e, t);
    }
  }
  function Sd(e, t, a) {
    t = Kt(a, t), t = ac(e.stateNode, t, 2), e = Xa(e, t, 2), e !== null && (fl(e, 2), fa(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Fa === null || !Fa.has(l))) {
            e = Kt(a, e), a = Nf(2), l = Xa(t, a, 2), l !== null && (Ef(
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
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Xe === e && (Ae & a) === a && (Ie === 4 || Ie === 3 && (Ae & 62914560) === Ae && 300 > Oe() - yu ? (qe & 2) === 0 && yn(e, 0) : xc |= a, hn === Ae && (hn = 0)), fa(e);
  }
  function Nd(e, t) {
    t === 0 && (t = kl()), e = gl(e, t), e !== null && (fl(e, t), fa(e));
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
        throw Error(f(314));
    }
    l !== null && l.delete(t), Nd(e, a);
  }
  function vy(e, t) {
    return ea(e, t);
  }
  var Su = null, vn = null, Cc = !1, Nu = !1, Ac = !1, Pa = 0;
  function fa(e) {
    e !== vn && e.next === null && (vn === null ? Su = vn = e : vn = vn.next = e), Nu = !0, Cc || (Cc = !0, by());
  }
  function oi(e, t) {
    if (!Ac && Nu) {
      Ac = !0;
      do
        for (var a = !1, l = Su; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var c = l.suspendedLanes, r = l.pingedLanes;
              u = (1 << 31 - bt(42 | e) + 1) - 1, u &= i & ~(c & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, wd(l, u));
          } else
            u = Ae, u = Rl(
              l,
              l === Xe ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || ol(l, u) || (a = !0, wd(l, u));
          l = l.next;
        }
      while (a);
      Ac = !1;
    }
  }
  function py() {
    Ed();
  }
  function Ed() {
    Nu = Cc = !1;
    var e = 0;
    Pa !== 0 && Ay() && (e = Pa);
    for (var t = Oe(), a = null, l = Su; l !== null; ) {
      var i = l.next, u = _d(l, t);
      u === 0 ? (l.next = null, a === null ? Su = i : a.next = i, i === null && (vn = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (Nu = !0)), l = i;
    }
    st !== 0 && st !== 5 || oi(e), Pa !== 0 && (Pa = 0);
  }
  function _d(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - bt(u), r = 1 << c, g = i[c];
      g === -1 ? ((r & a) === 0 || (r & l) !== 0) && (i[c] = An(r, t)) : g <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Xe, a = Ae, a = Rl(
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
          a = Cn;
          break;
        default:
          a = Ua;
      }
      return l = Td.bind(null, e), a = ea(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && ft(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Td(e, t) {
    if (st !== 0 && st !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ju() && e.callbackNode !== a)
      return null;
    var l = Ae;
    return l = Rl(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (sd(e, l, t), _d(e, Oe()), e.callbackNode != null && e.callbackNode === a ? Td.bind(null, e) : null);
  }
  function wd(e, t) {
    if (ju()) return null;
    sd(e, t, !0);
  }
  function by() {
    Dy(function() {
      (qe & 6) !== 0 ? ea(
        Ti,
        py
      ) : Ed();
    });
  }
  function zc() {
    if (Pa === 0) {
      var e = tn;
      e === 0 && (e = ya, ya <<= 1, (ya & 261888) === 0 && (ya = 256)), Pa = e;
    }
    return Pa;
  }
  function Cd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Di("" + e);
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
  ta(no, "onAnimationEnd"), ta(io, "onAnimationIteration"), ta(uo, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(Bm, "onTransitionRun"), ta(Hm, "onTransitionStart"), ta(Lm, "onTransitionCancel"), ta(so, "onTransitionEnd"), Yl("onMouseEnter", ["mouseout", "mouseover"]), Yl("onMouseLeave", ["mouseout", "mouseover"]), Yl("onPointerEnter", ["pointerout", "pointerover"]), Yl("onPointerLeave", ["pointerout", "pointerover"]), dl(
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
  function zd(e, t) {
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
            } catch (k) {
              Bi(k);
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
            } catch (k) {
              Bi(k);
            }
            i.currentTarget = null, u = g;
          }
      }
    }
  }
  function Ce(e, t) {
    var a = t[Qu];
    a === void 0 && (a = t[Qu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Dd(t, e, 2, !1), a.add(l));
  }
  function Oc(e, t, a) {
    var l = 0;
    t && (l |= 4), Dd(
      a,
      e,
      l,
      t
    );
  }
  var Eu = "_reactListening" + Math.random().toString(36).slice(2);
  function Uc(e) {
    if (!e[Eu]) {
      e[Eu] = !0, Sr.forEach(function(a) {
        a !== "selectionchange" && (Ny.has(a) || Oc(a, !1, e), Oc(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Eu] || (t[Eu] = !0, Oc("selectionchange", !1, t));
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
    Ur(function() {
      var w = u, k = Iu(a), B = [];
      e: {
        var A = co.get(e);
        if (A !== void 0) {
          var O = Ri, ie = e;
          switch (e) {
            case "keypress":
              if (Oi(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = gm;
              break;
            case "focusin":
              ie = "focus", O = ns;
              break;
            case "focusout":
              ie = "blur", O = ns;
              break;
            case "beforeblur":
            case "afterblur":
              O = ns;
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
              O = qr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = nm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = bm;
              break;
            case no:
            case io:
            case uo:
              O = sm;
              break;
            case so:
              O = jm;
              break;
            case "scroll":
            case "scrollend":
              O = am;
              break;
            case "wheel":
              O = Nm;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = rm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Hr;
              break;
            case "toggle":
            case "beforetoggle":
              O = _m;
          }
          var de = (t & 4) !== 0, Ve = !de && (e === "scroll" || e === "scrollend"), S = de ? A !== null ? A + "Capture" : null : A;
          de = [];
          for (var p = w, T; p !== null; ) {
            var q = p;
            if (T = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || T === null || S === null || (q = On(p, S), q != null && de.push(
              di(p, q, T)
            )), Ve) break;
            p = p.return;
          }
          0 < de.length && (A = new O(
            A,
            ie,
            null,
            a,
            k
          ), B.push({ event: A, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", A && a !== Wu && (ie = a.relatedTarget || a.fromElement) && (Bl(ie) || ie[ql]))
            break e;
          if ((O || A) && (A = k.window === k ? k : (A = k.ownerDocument) ? A.defaultView || A.parentWindow : window, O ? (ie = a.relatedTarget || a.toElement, O = w, ie = ie ? Bl(ie) : null, ie !== null && (Ve = N(ie), de = ie.tag, ie !== Ve || de !== 5 && de !== 27 && de !== 6) && (ie = null)) : (O = null, ie = w), O !== ie)) {
            if (de = qr, q = "onMouseLeave", S = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (de = Hr, q = "onPointerLeave", S = "onPointerEnter", p = "pointer"), Ve = O == null ? A : Mn(O), T = ie == null ? A : Mn(ie), A = new de(
              q,
              p + "leave",
              O,
              a,
              k
            ), A.target = Ve, A.relatedTarget = T, q = null, Bl(k) === w && (de = new de(
              S,
              p + "enter",
              ie,
              a,
              k
            ), de.target = T, de.relatedTarget = Ve, q = de), Ve = q, O && ie)
              t: {
                for (de = Ey, S = O, p = ie, T = 0, q = S; q; q = de(q))
                  T++;
                q = 0;
                for (var oe = p; oe; oe = de(oe))
                  q++;
                for (; 0 < T - q; )
                  S = de(S), T--;
                for (; 0 < q - T; )
                  p = de(p), q--;
                for (; T--; ) {
                  if (S === p || p !== null && S === p.alternate) {
                    de = S;
                    break t;
                  }
                  S = de(S), p = de(p);
                }
                de = null;
              }
            else de = null;
            O !== null && Md(
              B,
              A,
              O,
              de,
              !1
            ), ie !== null && Ve !== null && Md(
              B,
              Ve,
              ie,
              de,
              !0
            );
          }
        }
        e: {
          if (A = w ? Mn(w) : window, O = A.nodeName && A.nodeName.toLowerCase(), O === "select" || O === "input" && A.type === "file")
            var Re = Kr;
          else if (Qr(A))
            if ($r)
              Re = Rm;
            else {
              Re = Om;
              var ue = Mm;
            }
          else
            O = A.nodeName, !O || O.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? w && Fu(w.elementType) && (Re = Kr) : Re = Um;
          if (Re && (Re = Re(e, w))) {
            Zr(
              B,
              Re,
              a,
              k
            );
            break e;
          }
          ue && ue(e, A, w), e === "focusout" && w && A.type === "number" && w.memoizedProps.value != null && Ju(A, "number", A.value);
        }
        switch (ue = w ? Mn(w) : window, e) {
          case "focusin":
            (Qr(ue) || ue.contentEditable === "true") && (Kl = ue, os = w, Yn = null);
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
            fs = !1, ao(B, a, k);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            ao(B, a, k);
        }
        var Ne;
        if (us)
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
        ze && (Lr && a.locale !== "ko" && (Zl || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Zl && (Ne = Rr()) : (qa = k, ts = "value" in qa ? qa.value : qa.textContent, Zl = !0)), ue = _u(w, ze), 0 < ue.length && (ze = new Br(
          ze,
          e,
          null,
          a,
          k
        ), B.push({ event: ze, listeners: ue }), Ne ? ze.data = Ne : (Ne = Xr(a), Ne !== null && (ze.data = Ne)))), (Ne = wm ? Cm(e, a) : Am(e, a)) && (ze = _u(w, "onBeforeInput"), 0 < ze.length && (ue = new Br(
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
          w,
          a,
          k
        );
      }
      zd(B, t);
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
  function Md(e, t, a, l, i) {
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
        Ai(e, "class", l);
        break;
      case "tabIndex":
        Ai(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ai(e, a, l);
        break;
      case "style":
        Mr(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Ai(e, "data", l);
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
        l != null && Ce("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ce("scrollend", e);
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
        Ce("beforetoggle", e), Ce("toggle", e), Ci(e, "popover", l);
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
        Ci(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = em.get(a) || a, Ci(e, a, l));
    }
  }
  function kc(e, t, a, l, i, u) {
    switch (a) {
      case "style":
        Mr(e, l, u);
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
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Ci(e, a, l);
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
                  throw Error(f(137, t));
                default:
                  Ye(e, t, u, c, a, null);
              }
          }
        i && Ye(e, t, "srcSet", a.srcSet, a, null), l && Ye(e, t, "src", a.src, a, null);
        return;
      case "input":
        Ce("invalid", e);
        var r = u = c = i = null, g = null, w = null;
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
                  w = k;
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
                  Ye(e, t, l, k, a, null);
              }
          }
        Cr(
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
                if (r != null) throw Error(f(91));
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
        for (l = 0; l < fi.length; l++)
          Ce(fi[l], e);
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
        var i = null, u = null, c = null, r = null, g = null, w = null, k = null;
        for (O in a) {
          var B = a[O];
          if (a.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = B;
              default:
                l.hasOwnProperty(O) || Ye(e, t, O, null, l, B);
            }
        }
        for (var A in l) {
          var O = l[A];
          if (B = a[A], l.hasOwnProperty(A) && (O != null || B != null))
            switch (A) {
              case "type":
                u = O;
                break;
              case "name":
                i = O;
                break;
              case "checked":
                w = O;
                break;
              case "defaultChecked":
                k = O;
                break;
              case "value":
                c = O;
                break;
              case "defaultValue":
                r = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(f(137, t));
                break;
              default:
                O !== B && Ye(
                  e,
                  t,
                  A,
                  O,
                  l,
                  B
                );
            }
        }
        $u(
          e,
          c,
          r,
          g,
          w,
          k,
          u,
          i
        );
        return;
      case "select":
        O = c = r = A = null;
        for (u in a)
          if (g = a[u], a.hasOwnProperty(u) && g != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = g;
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
        t = r, a = c, l = O, A != null ? Vl(e, !!a, A, !1) : !!l != !!a && (t != null ? Vl(e, !!a, t, !0) : Vl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        O = A = null;
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
                O = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(f(91));
                break;
              default:
                i !== u && Ye(e, t, c, i, l, u);
            }
        Ar(e, A, O);
        return;
      case "option":
        for (var ie in a)
          A = a[ie], a.hasOwnProperty(ie) && A != null && !l.hasOwnProperty(ie) && (ie === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            ie,
            null,
            l,
            A
          ));
        for (g in l)
          A = l[g], O = a[g], l.hasOwnProperty(g) && A !== O && (A != null || O != null) && (g === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Ye(
            e,
            t,
            g,
            A,
            l,
            O
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
        for (w in l)
          if (A = l[w], O = a[w], l.hasOwnProperty(w) && A !== O && (A != null || O != null))
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
                  O
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
          for (k in l)
            A = l[k], O = a[k], !l.hasOwnProperty(k) || A === O || A === void 0 && O === void 0 || kc(
              e,
              t,
              k,
              A,
              l,
              O
            );
          return;
        }
    }
    for (var S in a)
      A = a[S], a.hasOwnProperty(S) && A != null && !l.hasOwnProperty(S) && Ye(e, t, S, null, l, A);
    for (B in l)
      A = l[B], O = a[B], !l.hasOwnProperty(B) || A === O || A == null && O == null || Ye(e, t, B, A, l, O);
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
            var g = a[l], w = g.startTime;
            if (w > r) break;
            var k = g.transferSize, B = g.initiatorType;
            k && Rd(B) && (g = g.responseEnd, c += k * (g < r ? 1 : (r - w) / (g - w)));
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
  function Hc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = null;
  function Ay() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Lc ? !1 : (Lc = e, !0) : (Lc = null, !1);
  }
  var Bd = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, Hd = typeof Promise == "function" ? Promise : void 0, Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(e) {
    return Hd.resolve(null).then(e).catch(My);
  } : Bd;
  function My(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function el(e) {
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
  function Vd(e, t) {
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
  function Gd(e) {
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
  var Pt = /* @__PURE__ */ new Map(), Zd = /* @__PURE__ */ new Set();
  function wu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Oa = v.d;
  v.d = {
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
    t !== null && t.tag === 5 && t.type === "form" ? rf(t) : Oa.r(e);
  }
  var pn = typeof document > "u" ? null : document;
  function Kd(e, t, a) {
    var l = pn;
    if (l && typeof t == "string" && t) {
      var i = Qt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof a == "string" && (i += '[crossorigin="' + a + '"]'), Zd.has(i) || (Zd.add(i), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(i) === null && (t = l.createElement("link"), gt(t, "link", e), rt(t), l.head.appendChild(t)));
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
      Pt.has(u) || (e = D(
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
      if (!Pt.has(u) && (e = D({ rel: "modulepreload", href: e }, t), Pt.set(u, e), a.querySelector(i) === null)) {
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
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Pt.get(u)) && Qc(e, a);
          var g = c = l.createElement("link");
          rt(g), gt(g, "link", e), g._p = new Promise(function(w, k) {
            g.onload = w, g.onerror = k;
          }), g.addEventListener("load", function() {
            r.loading |= 1;
          }), g.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Cu(c, t, l);
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
      u || (u = a.querySelector(yi(i)), u || (e = D({ src: e, async: !0 }, t), (t = Pt.get(i)) && Zc(e, t), u = a.createElement("script"), rt(u), gt(u, "link", e), a.head.appendChild(u)), u = {
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
      u || (u = a.querySelector(yi(i)), u || (e = D({ src: e, async: !0, type: "module" }, t), (t = Pt.get(i)) && Zc(e, t), u = a.createElement("script"), rt(u), gt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function $d(e, t, a, l) {
    var i = (i = ye.current) ? wu(i) : null;
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
    }), gt(t, "link", a), rt(t), e.head.appendChild(t));
  }
  function xn(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function yi(e) {
    return "script[async]" + e;
  }
  function Fd(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Qt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, rt(l), l;
          var i = D({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), rt(l), gt(l, "style", i), Cu(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          i = bn(a.href);
          var u = e.querySelector(
            mi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, rt(u), u;
          l = Jd(a), (i = Pt.get(i)) && Qc(l, i), u = (e.ownerDocument || e).createElement("link"), rt(u);
          var c = u;
          return c._p = new Promise(function(r, g) {
            c.onload = r, c.onerror = g;
          }), gt(u, "link", l), t.state.loading |= 4, Cu(u, a.precedence, e), t.instance = u;
        case "script":
          return u = xn(a.src), (i = e.querySelector(
            yi(u)
          )) ? (t.instance = i, rt(i), i) : (l = a, (i = Pt.get(u)) && (l = D({}, a), Zc(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), rt(i), gt(i, "link", l), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Cu(l, a.precedence, e));
    return t.instance;
  }
  function Cu(e, t, a) {
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
  var Au = null;
  function Wd(e, t, a) {
    if (Au === null) {
      var l = /* @__PURE__ */ new Map(), i = Au = /* @__PURE__ */ new Map();
      i.set(a, l);
    } else
      i = Au, l = i.get(a), l || (l = /* @__PURE__ */ new Map(), i.set(a, l));
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
          mi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, rt(u);
          return;
        }
        u = t.ownerDocument || t, l = Jd(l), (i = Pt.get(i)) && Qc(l, i), u = u.createElement("link"), rt(u);
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
      0 < e.imgBytes && Kc === 0 && (Kc = 62500 * Cy());
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
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function Fy(e, t, a, l, i, u, c, r, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zn(0), this.hiddenUpdates = zn(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function eh(e, t, a, l, i, u, c, r, g, w, k, B) {
    return e = new Fy(
      e,
      t,
      a,
      c,
      g,
      w,
      k,
      B,
      r
    ), t = 1, u === !0 && (t |= 24), u = Ut(3, null, null, t), e.current = u, u.stateNode = e, t = Ts(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, zs(u), e;
  }
  function th(e) {
    return e ? (e = Fl, e) : Fl;
  }
  function ah(e, t, a, l, i, u) {
    i = th(i), l.context === null ? l.context = i : l.pendingContext = i, l = Ga(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Xa(e, l, t), a !== null && (At(a, e, t), $n(a, e, t));
  }
  function lh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function $c(e, t) {
    lh(e, t), (e = e.alternate) && lh(e, t);
  }
  function nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gl(e, 67108864);
      t !== null && At(t, e, 67108864), $c(e, 67108864);
    }
  }
  function ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = ve(t);
      var a = gl(e, t);
      a !== null && At(a, e, t), $c(e, t);
    }
  }
  var Ou = !0;
  function Wy(e, t, a, l) {
    var i = m.T;
    m.T = null;
    var u = v.p;
    try {
      v.p = 2, Jc(e, t, a, l);
    } finally {
      v.p = u, m.T = i;
    }
  }
  function Iy(e, t, a, l) {
    var i = m.T;
    m.T = null;
    var u = v.p;
    try {
      v.p = 8, Jc(e, t, a, l);
    } finally {
      v.p = u, m.T = i;
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
                r = gl(u, 2), r !== null && At(r, u, 2), pu(), $c(u, 2);
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
          if (e = x(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = M(t), e !== null) return e;
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
        switch (cl()) {
          case Ti:
            return 2;
          case Tn:
            return 8;
          case Ua:
          case wn:
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
  var Ic = !1, tl = null, al = null, ll = null, vi = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), nl = [], Py = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sh(e, t) {
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
    }, t !== null && (t = Hl(t), t !== null && nh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
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
  function ch(e) {
    var t = Bl(e.target);
    if (t !== null) {
      var a = N(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = x(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              ih(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = M(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
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
        return t = Hl(a), t !== null && nh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function rh(e, t, a) {
    Ru(e) && a.delete(t);
  }
  function tg() {
    Ic = !1, tl !== null && Ru(tl) && (tl = null), al !== null && Ru(al) && (al = null), ll !== null && Ru(ll) && (ll = null), vi.forEach(rh), pi.forEach(rh);
  }
  function ku(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ic || (Ic = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      tg
    )));
  }
  var qu = null;
  function oh(e) {
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
      ch(a), a.blockedOn === null && nl.shift();
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
            else if (Wc(i) !== null) continue;
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
  function Pc(e) {
    this._internalRoot = e;
  }
  Bu.prototype.render = Pc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var a = t.current, l = Ht();
    ah(a, l, e, t, null, null);
  }, Bu.prototype.unmount = Pc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ah(e.current, 2, null, e, null, null), pu(), t[ql] = null;
    }
  };
  function Bu(e) {
    this._internalRoot = e;
  }
  Bu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fe();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < nl.length && t !== 0 && t < nl[a].priority; a++) ;
      nl.splice(a, 0, e), a === 0 && ch(e);
    }
  };
  var dh = o.version;
  if (dh !== "19.2.8")
    throw Error(
      f(
        527,
        dh,
        "19.2.8"
      )
    );
  v.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = b(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var ag = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: m,
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
    ), e[ql] = t.current, Uc(e), new Pc(t);
  }, ji.hydrateRoot = function(e, t, a) {
    if (!_(e)) throw Error(f(299));
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
    ), t.context = th(null), a = t.current, l = Ht(), l = ve(l), i = Ga(l), i.callback = null, Xa(a, i, l), a = l, t.current.lanes = a, fl(t, a), fa(t), e[ql] = t.current, Uc(e), new Bu(t);
  }, ji.version = "19.2.8", ji;
}
var Sh;
function dg() {
  if (Sh) return ar.exports;
  Sh = 1;
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
const cr = "hana.plugin.ui", rr = 1, mg = "X-Hana-Plugin-Surface-Session", yg = "pluginSurfaceSession", Oh = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Al = {
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
function ul(s) {
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
    return ul("Plugin UI messages must be objects.");
  if (s.protocol !== cr)
    return ul("Plugin UI message protocol is missing or invalid.");
  if (s.version !== rr)
    return {
      ok: !1,
      error: {
        code: Oh.UNSUPPORTED_VERSION,
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
    if (!Nh(s.error))
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
class _h extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(o) {
    super(o.message), this.code = o.code, this.details = o.details;
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
function wh(s, o, d) {
  return !(s.source !== o || d !== "*" && s.origin !== d);
}
function Sg(s) {
  return typeof s == "string" ? { url: s } : s;
}
function Ng(s) {
  return typeof s == "string" ? { text: s } : s;
}
function Uh(s) {
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
  const d = Uh(s), f = Eg(o);
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
  for (const j of N) {
    if (!j)
      throw new Error("Invalid plugin API path.");
    let b;
    try {
      b = decodeURIComponent(j);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (b === "." || b === ".." || b.includes("/") || b.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const x = new URL(`http://hana.local/${d}`);
  return `${N.map((j) => encodeURIComponent(decodeURIComponent(j))).join("/")}${x.search}`;
}
function Rh(s, o) {
  const d = Uh(s), f = wg(o);
  return `${s.location.origin}/api/plugins/${encodeURIComponent(d)}/${f}`;
}
function Cg(s, o, d) {
  const f = Tg(s);
  if (!f)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const _ = s.fetch?.bind(s) ?? globalThis.fetch?.bind(globalThis);
  if (!_)
    throw new Error("hana.api.fetch requires window.fetch.");
  const N = d ?? {}, x = new Headers(N.headers);
  return x.set(mg, f), _(Rh(s, o), {
    ...N,
    headers: x
  });
}
function Ag(s = {}) {
  const o = s.targetWindow ?? pg(), d = s.parentWindow ?? o.parent, f = xg(o, s.targetOrigin), _ = s.requestTimeoutMs ?? 1e4, N = s.idFactory ?? vg;
  let x = jg(o);
  const M = /* @__PURE__ */ new Set();
  function j(E) {
    d.postMessage(E, f);
  }
  function b(E, L) {
    const Y = {
      protocol: cr,
      version: rr,
      kind: "event",
      type: E
    };
    L !== void 0 && (Y.payload = L), j(Y);
  }
  function C(E) {
    if (!wh(E, d, f))
      return;
    const L = Eh(E.data);
    if (!L.ok)
      return;
    const Y = L.value;
    if (Y.kind !== "event" || Y.type !== "hana.theme.changed" || typeof Y.payload != "object" || Y.payload === null)
      return;
    const ce = Y.payload;
    x = {
      theme: typeof ce.theme == "string" ? ce.theme : x.theme,
      cssUrl: typeof ce.cssUrl == "string" ? ce.cssUrl : x.cssUrl
    };
    for (const ee of M)
      ee(x);
  }
  function D(E, L, Y = {}) {
    const ce = N(), ee = Y.timeoutMs ?? _;
    return new Promise((W, je) => {
      const F = () => {
        o.removeEventListener("message", le), o.clearTimeout(pe);
      }, le = (J) => {
        if (!wh(J, d, f))
          return;
        const H = Eh(J.data);
        if (!H.ok)
          return;
        const ae = H.value;
        ae.id !== ce || ae.type !== E || (ae.kind === "response" && (F(), W(ae.payload)), ae.kind === "error" && ae.error && (F(), je(new _h(ae.error))));
      }, pe = o.setTimeout(() => {
        F(), je(new _h({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${E}.`
        }));
      }, ee);
      o.addEventListener("message", le);
      const he = {
        protocol: cr,
        version: rr,
        id: ce,
        kind: "request",
        type: E
      };
      L !== void 0 && (he.payload = L), j(he);
    });
  }
  return {
    ready(E) {
      b("hana.ready", E);
    },
    assets: {
      url(E) {
        return _g(o, E);
      }
    },
    api: {
      url(E) {
        return Rh(o, E);
      },
      fetch(E, L) {
        return Cg(o, E, L);
      }
    },
    ui: {
      resize(E) {
        b(Al.UI_RESIZE, E);
      }
    },
    theme: {
      getSnapshot() {
        return { ...x };
      },
      subscribe(E) {
        return M.size === 0 && o.addEventListener("message", C), M.add(E), E({ ...x }), () => {
          M.delete(E), M.size === 0 && o.removeEventListener("message", C);
        };
      }
    },
    host: {
      request: D
    },
    toast: {
      show(E, L) {
        return D(Al.TOAST_SHOW, E, L);
      }
    },
    external: {
      open(E, L) {
        return D(Al.EXTERNAL_OPEN, Sg(E), L);
      }
    },
    clipboard: {
      writeText(E, L) {
        return D(Al.CLIPBOARD_WRITE_TEXT, Ng(E), L);
      }
    },
    resources: {
      open(E, L) {
        return D(Al.RESOURCE_OPEN, E, L);
      },
      pick(E = {}, L) {
        return D(Al.RESOURCE_PICK, E, L);
      },
      requestAccess(E, L) {
        return D(Al.RESOURCE_REQUEST_ACCESS, E, L);
      }
    }
  };
}
let Ch = null;
function zt() {
  return Ch ??= Ag(), Ch;
}
const gr = {
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
function Dg({ mode: s = "inherit", theme: o, className: d, style: f, children: _, "data-testid": N = "hana-plugin-theme", ...x }) {
  const M = typeof o == "string" ? o : void 0, j = Mg(s, o);
  return n.jsx("div", { ...x, "data-testid": N, className: sl("hana-plugin-theme", d), "data-hana-theme-mode": s, "data-hana-theme": s === "hana" ? M : void 0, style: { ...j, ...f }, children: _ });
}
function Mg(s, o) {
  if (s === "inherit")
    return {};
  const d = Og(s, o), f = {};
  for (const [_, N] of Object.entries(zg)) {
    const x = d?.[_];
    x && (f[N] = x);
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
z.forwardRef(function({ variant: o = "secondary", size: d = "md", loading: f = !1, iconLeft: _, iconRight: N, disabled: x, className: M, children: j, type: b = "button", ...C }, D) {
  return n.jsxs("button", { ...C, ref: D, type: b, disabled: x || f, className: sl("hana-plugin-button", `hana-plugin-button-${o}`, `hana-plugin-button-${d}`, f && "hana-plugin-button-loading", M), children: [f ? n.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : _, j && n.jsx("span", { className: "hana-plugin-button-label", children: j }), !f && N] });
});
z.forwardRef(function({ label: o, size: d = "md", variant: f = "ghost", className: _, children: N, type: x = "button", ...M }, j) {
  return n.jsx("button", { ...M, ref: j, type: x, "aria-label": o, title: M.title || o, className: sl("hana-plugin-icon-button", `hana-plugin-icon-button-${d}`, `hana-plugin-icon-button-${f}`, _), children: N });
});
z.forwardRef(function({ label: o, hint: d, error: f, id: _, className: N, inputClassName: x, ...M }, j) {
  const b = z.useId(), C = _ || b;
  return n.jsx(kh, { label: o, hint: d, error: f, htmlFor: C, className: N, children: n.jsx("input", { ...M, ref: j, id: C, "aria-invalid": !!f, className: sl("hana-plugin-input", x) }) });
});
z.forwardRef(function({ label: o, hint: d, error: f, id: _, className: N, textareaClassName: x, rows: M = 4, ...j }, b) {
  const C = z.useId(), D = _ || C;
  return n.jsx(kh, { label: o, hint: d, error: f, htmlFor: D, className: N, children: n.jsx("textarea", { ...j, ref: b, id: D, rows: M, "aria-invalid": !!f, className: sl("hana-plugin-textarea", x) }) });
});
z.forwardRef(function({ checked: o, onChange: d, label: f, disabled: _, className: N, onClick: x, type: M = "button", ...j }, b) {
  const C = typeof f == "string" ? f : j["aria-label"];
  return n.jsxs("span", { className: sl("hana-plugin-switch-wrap", N), children: [n.jsx("button", { ...j, ref: b, type: M, role: "switch", "aria-checked": o, "aria-label": C, disabled: _, className: sl("hana-plugin-switch", o && "hana-plugin-switch-on"), onClick: (D) => {
    x?.(D), !D.defaultPrevented && !_ && d?.(!o);
  }, children: n.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), f && n.jsx("span", { className: "hana-plugin-switch-label", children: f })] });
});
function kh({ label: s, hint: o, error: d, htmlFor: f, className: _, children: N }) {
  return n.jsxs("div", { className: sl("hana-plugin-field", _), children: [s && n.jsx("label", { className: "hana-plugin-field-label", htmlFor: f, children: s }), o && n.jsx("div", { className: "hana-plugin-field-hint", children: o }), N, d && n.jsx("div", { className: "hana-plugin-field-error", children: d })] });
}
const qh = /^\d{4}-\d{2}-\d{2}$/;
function zl(s, o) {
  if (!qh.test(s)) return s;
  const d = /* @__PURE__ */ new Date(`${s}T12:00:00Z`);
  return d.setUTCDate(d.getUTCDate() + o), d.toISOString().slice(0, 10);
}
function vr(s) {
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
function Bh(s, o) {
  return Array.from({ length: o }, (d, f) => zl(s, f));
}
function fr(s, o) {
  const f = vr(s).start || o, _ = zl(f, -or(f));
  return Bh(_, 7);
}
function Hh(s, o, d = 3) {
  const f = Math.max(1, Math.floor(d)), _ = Math.max(0, Math.floor(o)), N = s.slice(_ * f, _ * f + f);
  return [...N, ...Array(Math.max(0, f - N.length)).fill(null)];
}
function Ug(s, o) {
  const f = vr(s).start || o, _ = qh.test(f) ? `${f.slice(0, 7)}-01` : o, N = /* @__PURE__ */ new Date(`${_}T12:00:00Z`);
  N.setUTCMonth(N.getUTCMonth() + 1, 1);
  const x = new Date(N);
  x.setUTCDate(x.getUTCDate() - 1);
  const M = x.toISOString().slice(0, 10), j = zl(_, -or(_)), b = 6 - or(M), C = zl(M, b), D = Math.round(((/* @__PURE__ */ new Date(`${C}T12:00:00Z`)).getTime() - (/* @__PURE__ */ new Date(`${j}T12:00:00Z`)).getTime()) / 864e5) + 1;
  return Bh(j, D);
}
function Ni(s) {
  return (s.start_at || s.deadline_at || s.window_start || "").slice(0, 10);
}
function Si(s) {
  if (!s || s.length < 16) return null;
  const o = Number(s.slice(11, 13)), d = Number(s.slice(14, 16));
  return !Number.isFinite(o) || !Number.isFinite(d) ? null : o * 60 + d;
}
function Lh(s) {
  const o = s.map((N) => Si(N.start_at || N.deadline_at)).filter((N) => N !== null), d = s.map((N) => {
    const x = Si(N.end_at);
    if (x !== null) return x;
    const M = Si(N.start_at || N.deadline_at);
    return M === null ? null : M + Number(N.duration || N.estimated_minutes || 45);
  }).filter((N) => N !== null), f = o.length ? Math.floor(Math.min(...o) / 60) - 1 : 10, _ = d.length ? Math.ceil(Math.max(...d) / 60) + 1 : 22;
  return {
    startHour: Math.max(6, Math.min(10, f)),
    endHour: Math.min(24, Math.max(22, _))
  };
}
function Yh(s, o, d, f = 56) {
  const _ = Si(s.start_at || s.deadline_at);
  if (_ === null) return null;
  const x = Si(s.end_at) ?? _ + Number(s.duration || s.estimated_minutes || 45), M = Math.max(o * 60, _), j = Math.min(d * 60, Math.max(x, M + 30));
  return {
    top: (M - o * 60) / 60 * f,
    height: Math.max(30, (j - M) / 60 * f)
  };
}
function pr(s) {
  const o = s.map((N) => {
    const x = N.start_at || N.deadline_at, M = x ? new Date(x).getTime() : Number.NaN, j = N.end_at ? new Date(N.end_at).getTime() : Number.NaN, b = Number.isFinite(j) ? j : M + Number(N.duration || N.estimated_minutes || 45) * 6e4;
    return { item: N, start: M, end: b };
  }).filter((N) => Number.isFinite(N.start)).sort((N, x) => N.start - x.start || N.end - x.end), d = [], f = o.map((N) => {
    let x = d.findIndex((M) => M <= N.start);
    return x < 0 && (x = d.length), d[x] = N.end, { ...N, lane: x };
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
    d = await gr.api.fetch(s, o);
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
const zh = [
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
class Lg extends z.Component {
  state = { error: "" };
  static getDerivedStateFromError(o) {
    return { error: o instanceof Error ? o.message : "页面渲染异常" };
  }
  componentDidCatch(o, d) {
    console.error("[laosu-workbench] render failed", o, d.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ n.jsx("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-error", children: /* @__PURE__ */ n.jsx("main", { className: "main-area", children: /* @__PURE__ */ n.jsxs("div", { className: "notice error", role: "alert", children: [
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
function mr(s) {
  return ["completed", "已完成"].includes(s) ? "finished" : ["cancelled", "已取消", "已调课"].includes(s) ? "muted" : ["failed", "error", "blocked", "异常", "失败"].includes(s) ? "error" : ["pending_confirmation", "待确认", "待处理", "needs_reschedule"].includes(s) ? "warn" : "active";
}
function br(s, o) {
  if (!o || s.domain !== "course") return !1;
  const d = (s.start_at || "").slice(0, 10);
  return !!d && d < o && s.status === "待上课";
}
function _n(s, o) {
  if (br(s, o)) return "state-pending";
  const d = mr(s.status);
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
  const s = new URLSearchParams(window.location.search), o = window.localStorage.getItem("laosu-workbench.tab"), d = window.localStorage.getItem("laosu-workbench.scope"), f = s.get("tab") || o || "overview", _ = s.get("scope") || d || "week", N = zh.map((U) => U.id).includes(f) ? f : "overview", x = ["today", "week", "month", "horizon"].includes(_) ? _ : "week", M = s.get("preview"), [j, b] = z.useState(N), [C, D] = z.useState(x), [E, L] = z.useState(f === "actions" || !!M), [Y, ce] = z.useState(null), ee = Y !== null, [W, je] = z.useState(null), [F, le] = z.useState(!0), [pe, he] = z.useState(""), [J, H] = z.useState(null), [ae, K] = z.useState(null), [Q, P] = z.useState({ text: "", nonce: 0 }), [be, Ee] = z.useState(!1), [_e, m] = z.useState(""), [v, V] = z.useState(null), [h, G] = z.useState({}), [y, R] = z.useState(!1), [$, I] = z.useState(null), [me, ye] = z.useState(0), [Te, Ge] = z.useState(null);
  function Z(U, X) {
    X && Ge({ section: X, nonce: Date.now() }), Tn(U);
  }
  const [Me, ge] = z.useState(null), te = z.useRef(null), Dt = z.useRef(null), tt = z.useRef(dr()), ct = z.useRef(dr()), ia = z.useRef(/* @__PURE__ */ new Set()), ua = z.useRef(null), Vt = z.useRef(!1), ut = z.useRef(!1), ea = z.useRef({
    overview: Number(window.sessionStorage.getItem("laosu-workbench.scroll.overview") || 0),
    planning: Number(window.sessionStorage.getItem("laosu-workbench.scroll.planning") || 0),
    affairs: Number(window.sessionStorage.getItem("laosu-workbench.scroll.affairs") || 0)
  }), ft = z.useCallback(async (U = C, X = {}) => {
    const ne = X.silent === !0, se = tt.current.begin();
    ne || (le(!0), he(""));
    try {
      const ve = new URLSearchParams({ scope: U });
      X.fresh && ve.set("fresh", "1");
      const Ue = Bg(await Qe(`api/dashboard?${ve.toString()}`));
      return tt.current.isCurrent(se) ? (je(Ue), Ei(`dashboard.${U}`, Ue), !0) : null;
    } catch (ve) {
      return tt.current.isCurrent(se) ? (ne || he(ve.message || "读取失败"), !1) : null;
    } finally {
      tt.current.isCurrent(se) && !ne && le(!1);
    }
  }, [C]);
  z.useEffect(() => {
    const U = Nn(`dashboard.${x}`);
    U && (je(U), le(!1)), ft(x, { fresh: !0, silent: !!U });
  }, []), z.useEffect(() => {
    const U = (X) => {
      X.target instanceof HTMLElement && !te.current?.contains(X.target) && (ua.current = X.target);
    };
    return window.addEventListener("pointerdown", U, !0), () => window.removeEventListener("pointerdown", U, !0);
  }, []), z.useEffect(() => {
    M && (L(!0), Qe(`api/preview/${encodeURIComponent(M)}`).then(H).catch((U) => {
      H({ ok: !1, error: U.message });
    }));
  }, [M]), z.useEffect(() => {
    if (!E) return;
    const U = te.current, X = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !Vt.current) {
      const fe = new URL(window.location.href);
      fe.searchParams.set("drawer", "actions"), window.history.pushState({ ...window.history.state || {}, laosuActionDrawer: !0 }, "", fe), Vt.current = !0;
    }
    const ne = window.setTimeout(() => {
      ((ae ? U?.querySelector('.manual-operations input:not([type="hidden"]), .manual-operations select:not([name="operation"]), .manual-operations button:not([disabled])') : U?.querySelector(".ai-composer textarea")) || U?.querySelector(".context-back"))?.focus({ preventScroll: !0 }), ae && U?.querySelector(".action-drawer-body")?.scrollTo({ top: 0 });
    }, 80), se = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((fe) => fe.getClientRects().length > 0 && !fe.closest("[hidden]")), ve = (fe) => {
      if (fe.key === "Escape") {
        fe.preventDefault(), ya();
        return;
      }
      if (fe.key !== "Tab") return;
      const St = se();
      if (!St.length) return;
      const vt = St[0], Ze = St[St.length - 1];
      U?.contains(document.activeElement) ? fe.shiftKey && document.activeElement === vt ? (fe.preventDefault(), Ze.focus()) : !fe.shiftKey && document.activeElement === Ze && (fe.preventDefault(), vt.focus()) : (fe.preventDefault(), (fe.shiftKey ? Ze : vt).focus());
    }, Ue = () => {
      Vt.current && (Vt.current = !1, L(!1), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 180));
    };
    return window.addEventListener("keydown", ve), window.addEventListener("popstate", Ue), () => {
      window.clearTimeout(ne), document.body.style.overflow = X, window.removeEventListener("keydown", ve), window.removeEventListener("popstate", Ue), window.setTimeout(() => {
        (document.querySelector('[data-drawer-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [E]), z.useEffect(() => {
    if (!ee) return;
    const U = Dt.current, X = document.body.style.overflow;
    if (document.body.style.overflow = "hidden", !ut.current) {
      const fe = new URL(window.location.href);
      fe.searchParams.set("drawer", "context"), window.history.pushState({ ...window.history.state || {}, laosuContextDrawer: !0 }, "", fe), ut.current = !0;
    }
    const ne = window.setTimeout(() => U?.querySelector(".context-back")?.focus({ preventScroll: !0 }), 70), se = () => Array.from(U?.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    ) || []).filter((fe) => fe.getClientRects().length > 0 && !fe.closest("[hidden]")), ve = (fe) => {
      if (new URL(window.location.href).searchParams.get("drawer") === "actions") return;
      if (fe.key === "Escape") {
        fe.preventDefault(), Ra();
        return;
      }
      if (fe.key !== "Tab") return;
      const St = se();
      if (!St.length) return;
      const vt = St[0], Ze = St[St.length - 1];
      U?.contains(document.activeElement) ? fe.shiftKey && document.activeElement === vt ? (fe.preventDefault(), Ze.focus()) : !fe.shiftKey && document.activeElement === Ze && (fe.preventDefault(), vt.focus()) : (fe.preventDefault(), (fe.shiftKey ? Ze : vt).focus());
    }, Ue = () => {
      const fe = new URL(window.location.href).searchParams.get("drawer");
      fe === "context" || fe === "actions" || !ut.current || (ut.current = !1, ce(null));
    };
    return window.addEventListener("keydown", ve), window.addEventListener("popstate", Ue), () => {
      window.clearTimeout(ne), document.body.style.overflow = X, window.removeEventListener("keydown", ve), window.removeEventListener("popstate", Ue), window.setTimeout(() => {
        (document.querySelector('[data-context-return="true"]') || document.querySelector(".tab.active"))?.focus({ preventScroll: !0 });
      }, 80);
    };
  }, [ee]), z.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.tab", j);
    const U = () => {
      ea.current[j] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${j}`, String(window.scrollY));
    };
    return window.addEventListener("pagehide", U), () => window.removeEventListener("pagehide", U);
  }, [j]), z.useEffect(() => {
    window.localStorage.setItem("laosu-workbench.scope", C);
  }, [C]), z.useEffect(() => {
    if (Me?.tab === j) return;
    const U = ea.current[j] || 0;
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
  }, [Me, j, W?.observedAt]), z.useEffect(() => {
    if (!_e) return;
    const U = window.setTimeout(() => m(""), 4800);
    return () => window.clearTimeout(U);
  }, [_e]);
  const sa = z.useRef(null);
  z.useEffect(() => {
    const U = window.setInterval(async () => {
      if (!document.hidden)
        try {
          const X = await Qe("api/data-revision");
          if (!X?.ok || typeof X.revision != "number") return;
          if (sa.current === null) {
            sa.current = X.revision;
            return;
          }
          X.revision !== sa.current && (sa.current = X.revision, Gt({ silent: !0 }));
        } catch {
        }
    }, 15e3);
    return () => window.clearInterval(U);
  }, [C]);
  const Ol = z.useMemo(
    () => (W?.pending ?? []).filter((U) => !["completed", "cancelled"].includes(U.status)),
    [W]
  ), Oe = z.useMemo(() => {
    const U = Date.now();
    return (W?.items ?? []).filter((X) => Fe(X) && new Date(Fe(X)).getTime() >= U && !["completed", "cancelled", "已完成", "已取消"].includes(X.status)).sort((X, ne) => new Date(Fe(X)).getTime() - new Date(Fe(ne)).getTime())[0] ?? null;
  }, [W]);
  async function cl(U) {
    const X = new URL(window.location.href);
    X.searchParams.set("scope", U), window.history.replaceState(window.history.state, "", X), D(U);
    const ne = Nn(`dashboard.${U}`);
    if (ne) {
      je(ne), le(!1), ft(U, { fresh: !0, silent: !0 });
      return;
    }
    await ft(U);
  }
  function Ti(U = j) {
    ea.current[U] = window.scrollY, window.sessionStorage.setItem(`laosu-workbench.scroll.${U}`, String(window.scrollY));
  }
  function Tn(U, X) {
    Ti();
    const ne = new URL(window.location.href);
    ne.searchParams.set("tab", U), window.history.replaceState(window.history.state, "", ne), ge(null), b(U);
  }
  function Ua(U) {
    document.querySelector('[data-drawer-return="true"]')?.removeAttribute("data-drawer-return");
    const X = document.activeElement;
    ((X instanceof HTMLElement && X !== document.body && !te.current?.contains(X) ? X : null) || U || ua.current || document.querySelector(".tab.active"))?.setAttribute("data-drawer-return", "true");
  }
  function wn(U) {
    document.querySelector('[data-context-return="true"]')?.removeAttribute("data-context-return");
    const X = document.activeElement, ne = X instanceof HTMLElement && X !== document.body && !Dt.current?.contains(X) ? X : null;
    (U || ne || ua.current || document.querySelector(".tab.active"))?.setAttribute("data-context-return", "true");
  }
  function Cn(U, X) {
    wn(X), ce({ kind: "item", item: U });
  }
  function wi(U, X, ne) {
    wn(X), ce({ kind: "day", date: U, items: ne });
  }
  function Gu(U) {
    wn(U), ce({ kind: "system" });
  }
  function ma() {
    const U = /* @__PURE__ */ Symbol("workbench-operation");
    return ia.current.add(U), Ee(!0), U;
  }
  function dt(U) {
    ia.current.delete(U), Ee(ia.current.size > 0);
  }
  function Mt() {
    ct.current.invalidate(), H(null);
  }
  function bt(U) {
    ct.current.invalidate(), H(U);
  }
  function Xu() {
    Ua(document.querySelector(".ai-action-button")), K(null), P({ text: "", nonce: Date.now() }), Mt(), L(!0);
  }
  function Ul(U) {
    Ua(), K(null), P({ text: U, nonce: Date.now() }), Mt(), L(!0);
  }
  function rl(U) {
    Ua(), K(U), Mt(), L(!0);
  }
  function ya() {
    if (Vt.current && window.history.state?.laosuActionDrawer) {
      window.history.back();
      return;
    }
    Vt.current = !1, L(!1);
  }
  function Ra() {
    if (ut.current && window.history.state?.laosuContextDrawer) {
      window.history.back();
      return;
    }
    ut.current = !1, ce(null);
  }
  async function ka(U, X) {
    if (!v) {
      V(X.id);
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
        U === "affairComplete" ? (G((se) => ({ ...se, [X.id]: { ok: !0, text: ne.message || "已完成", buttonLabel: "已完成" } })), m(`${X.title} 已完成`)) : m(`${X.title} ${X.start_at?.slice(5, 16) ?? ""} 已记录没上`), await ft(C);
      } catch (ne) {
        U === "affairComplete" && G((se) => ({ ...se, [X.id]: { ok: !1, text: `处理失败：${ne.message || "未知错误"}` } })), m(`处理失败：${ne.message || "未知错误"}`);
      } finally {
        V(null);
      }
    }
  }
  async function Gt(U = {}) {
    const X = U.silent === !0;
    X || m("正在刷新数据…");
    const ne = await ft(C, { ...U, fresh: !X });
    ne === !0 ? (G({}), I(null), ye((se) => se + 1), X || m("课表、筹备、驾驶舱和事务数据已全部刷新")) : ne === !1 && !X && m("刷新失败，请查看页面错误");
  }
  async function Rl(U) {
    const X = ct.current.begin(), ne = ma();
    H(null);
    try {
      const se = await Qe("api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(U)
      });
      if (!ct.current.isCurrent(X)) return;
      H({ ...se, operation: String(U.operation || ""), input: U });
    } catch (se) {
      ct.current.isCurrent(X) && H({ ok: !1, error: se.message });
    } finally {
      dt(ne);
    }
  }
  async function ol(U) {
    if (!y) {
      R(!0), I({ ok: !0, text: "已收到“全部上完”，正在后台预演并汇总今日课程…", buttonLabel: "处理中…" });
      try {
        const X = await Qe("api/courses/day-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: U })
        });
        if (!X.ok) throw new Error(X.error || "全部上完的处理未完成");
        I({ ok: !0, text: X.message || "今日课程已全部记录", buttonLabel: "已全部记录" }), await ft(C);
      } catch (X) {
        const ne = X.message || "全部上完的处理失败";
        I({ ok: !1, text: `处理失败：${ne}`, buttonLabel: "重试全部上完" });
      } finally {
        R(!1);
      }
    }
  }
  async function An(U) {
    if (!v) {
      V(U.id), G((X) => ({ ...X, [U.id]: { ok: !0, text: "已收到“没约上”，正在后台预演并安排下一次…", buttonLabel: "处理中…" } }));
      try {
        const X = await Qe("api/affairs/retry-next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: U.id, expectedVersion: U.version })
        });
        if (!X.ok) throw new Error(X.error || "没约上的处理未完成");
        const ne = X.outcome?.candidateDate, se = ne ? `已安排 ${ne.slice(5)}` : "已处理";
        G((ve) => ({ ...ve, [U.id]: {
          ok: !0,
          text: X.message || "已推进到下一次尝试",
          buttonLabel: se,
          undo: X.outcome ? { expectedVersion: X.outcome.version } : void 0
        } })), await ft(C);
      } catch (X) {
        const ne = X.message || "没约上的处理失败";
        G((se) => ({ ...se, [U.id]: { ok: !1, text: `处理失败：${ne}`, buttonLabel: "重试" } }));
      } finally {
        V(null);
      }
    }
  }
  async function kl(U) {
    if (v) return;
    const X = h[U.id]?.undo;
    V(U.id), G((ne) => ({ ...ne, [U.id]: { ok: !0, text: "正在恢复上一候选日…", buttonLabel: "处理中…" } }));
    try {
      const ne = await Qe("api/affairs/retry-prev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: U.id, expectedVersion: X?.expectedVersion ?? U.version })
      });
      if (!ne.ok) throw new Error(ne.error || "恢复上一候选日未完成");
      const se = ne.outcome?.candidateDate;
      G((ve) => ({ ...ve, [U.id]: {
        ok: !0,
        text: ne.message || "已恢复到上一候选日",
        buttonLabel: se ? `回到 ${se.slice(5)}` : "已恢复"
      } })), await ft(C);
    } catch (ne) {
      const se = ne.message || "恢复上一候选日失败";
      G((ve) => ({ ...ve, [U.id]: { ok: !1, text: `恢复失败：${se}`, buttonLabel: "重试" } }));
    } finally {
      V(null);
    }
  }
  async function zn() {
    if (!J?.token || !J.canCommit) return;
    const U = ct.current.begin(), X = ma(), ne = J.operation || ae?.operation;
    try {
      const se = await Qe("api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: J.token })
      }), ve = { ok: se.ok, summary: se.summary, message: `${se.message || ""}${se.exportMessage ? `
导出：${se.exportMessage}` : ""}${se.syncMessage ? `
日历：${se.syncMessage}` : ""}`, result: se, operation: ne, input: J.input, committed: !!se.ok };
      await ft(C), ye((Ue) => Ue + 1), ct.current.isCurrent(U) && H(ve);
    } catch (se) {
      ct.current.isCurrent(U) && H({ ok: !1, error: se.message });
    } finally {
      dt(X);
    }
  }
  async function fl() {
    const U = J?.batchItems ?? [];
    if (!U.length) return;
    const X = ct.current.begin(), ne = ma(), se = /* @__PURE__ */ new Map();
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
      await ft(C), ye((ve) => ve + 1), ct.current.isCurrent(X) && J && H({
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
      dt(ne);
    }
  }
  return /* @__PURE__ */ n.jsx(Dg, { mode: "inherit", className: "workbench-theme", children: /* @__PURE__ */ n.jsxs("div", { className: "workbench-shell", "data-ui": "workbench-shell", "data-ui-id": "workbench-main", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "topbar", "data-ui": "topbar", children: [
      /* @__PURE__ */ n.jsx("nav", { className: "tabbar", "aria-label": "工作台导航", "data-ui": "primary-navigation", children: zh.map((U) => /* @__PURE__ */ n.jsx("button", { type: "button", className: j === U.id ? "tab active" : "tab", "data-ui-role": "nav-item", "data-ui-id": `nav-${U.id}`, "aria-current": j === U.id ? "page" : void 0, onClick: () => Tn(U.id), children: U.label }, U.id)) }),
      /* @__PURE__ */ n.jsxs("div", { className: "top-actions", "data-ui": "top-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: E ? "ai-action-button active" : "ai-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-ai", onClick: Xu, "aria-expanded": E, children: "✦ AI 操作" }),
        /* @__PURE__ */ n.jsx("span", { className: "updated-at", children: Yg(W?.observedAt) }),
        /* @__PURE__ */ n.jsxs("button", { type: "button", className: `${W?.health?.ok ? "health good" : "health bad"} health-button${Y?.kind === "system" ? " active" : ""}`, "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-id": "open-system-status", onClick: (U) => Gu(U.currentTarget), "aria-expanded": Y?.kind === "system", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          W?.health?.ok ? "系统正常" : "需要检查"
        ] }),
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "icon-button", "data-ui-role": "button", "data-ui-variant": "icon", "data-ui-id": "refresh-workbench", onClick: () => {
          Gt();
        }, "aria-label": "刷新", disabled: F, children: "↻" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("main", { className: "main-area", children: [
      _e && /* @__PURE__ */ n.jsx("div", { className: "toast", role: "status", children: _e }),
      pe && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "读取失败", text: pe }),
      W?.warnings?.length ? /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: "有警告", text: W.warnings.join("；") }) : null,
      F && !W ? /* @__PURE__ */ n.jsx(xr, {}) : null,
      W && j !== "planning" && j !== "affairs" && /* @__PURE__ */ n.jsxs("section", { className: "global-scope-bar", "aria-label": "时间范围", "aria-busy": F, children: [
        /* @__PURE__ */ n.jsxs("div", { className: "scope-context", children: [
          /* @__PURE__ */ n.jsx("span", { children: F ? "正在更新时间" : "时间范围" }),
          /* @__PURE__ */ n.jsx("strong", { children: Lu(W.range) })
        ] }),
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "时间范围切换",
            busy: F,
            value: C,
            onChange: (U) => {
              cl(U);
            },
            items: Object.keys(hr).map((U) => ({ id: U, label: hr[U] }))
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: F && W ? "view-content scope-loading" : "view-content", "aria-busy": F && !!W, inert: F && !!W, children: [
        W && j === "overview" && /* @__PURE__ */ n.jsx(Gg, { dashboard: W, pending: Ol, upcoming: Oe, onInspect: Cn, onOpenDay: wi, onPrepare: rl, onRetry: An, onRetryPrev: kl, retryingId: v, affairFeedback: h, onDayComplete: ol, dayBusy: y, dayFeedback: $, onNavigate: Z, onQuick: ka, onAskAi: Ul, onDataChanged: Gt }),
        j === "planning" && /* @__PURE__ */ n.jsx(Jg, { onAction: rl, onAskAi: Ul, refreshKey: me, sectionHint: Te, scheduleText: W?.scheduleText, onDataChanged: Gt }),
        j === "affairs" && /* @__PURE__ */ n.jsx(Pg, { onQuick: ka, onAskAi: Ul, onPrepare: rl, onInspect: Cn, onRetry: An, onRetryPrev: kl, retryingId: v, feedback: h, refreshKey: me, observedAt: W?.observedAt ?? "", onOpenDay: (U, X, ne) => wi(U, ne, X), localDate: W?.localDate })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "context-drawer-backdrop", hidden: !ee, onMouseDown: (U) => {
      U.currentTarget === U.target && Ra();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: Dt, className: "context-drawer", "data-ui": "drawer", "data-ui-id": "context-drawer", role: "dialog", "aria-modal": "true", "aria-label": "详情", children: [
      /* @__PURE__ */ n.jsxs("header", { className: "context-drawer-head", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "context-back", onClick: Ra, "aria-label": "返回原位置", children: "←" }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: Y?.kind === "system" ? "运行状态" : Y?.kind === "day" ? "当日安排" : "条目详情" }),
          /* @__PURE__ */ n.jsx("h2", { children: Y?.kind === "system" ? "系统状态" : Y?.kind === "day" ? jt(`${Y.date}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }) : Y?.item.title }),
          /* @__PURE__ */ n.jsx("span", { children: "返回后会停在原来的页面和位置。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "context-drawer-body", children: Y && W && /* @__PURE__ */ n.jsx(
        nv,
        {
          view: Y,
          dashboard: W,
          onQuick: ka,
          onAskAi: Ul,
          onPrepare: rl,
          onRetry: An,
          onRetryPrev: kl,
          retryingId: v,
          affairFeedback: h,
          onSync: () => rl({ operation: "calendar_sync" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: "action-drawer-backdrop", hidden: !E, onMouseDown: (U) => {
      U.currentTarget === U.target && ya();
    }, children: /* @__PURE__ */ n.jsxs("aside", { ref: te, className: "action-drawer", "data-ui": "drawer", "data-ui-id": "ai-drawer", role: "dialog", "aria-modal": "true", "aria-label": "AI 操作", children: [
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
          students: W?.students ?? [],
          preset: ae,
          aiDraft: Q,
          preview: J,
          busy: be,
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
function Gg({ dashboard: s, pending: o, upcoming: d, onInspect: f, onOpenDay: _, onPrepare: N, onQuick: x, onAskAi: M, onRetry: j, onRetryPrev: b, retryingId: C, affairFeedback: D, onDayComplete: E, dayBusy: L, dayFeedback: Y, onNavigate: ce, onDataChanged: ee }) {
  const W = z.useMemo(() => {
    const K = /* @__PURE__ */ new Map();
    return s.items.forEach((Q) => K.set(Q.id, Q)), s.affairs.forEach((Q) => K.set(Q.id, { ...Q, domain: "affair" })), s.courses.forEach((Q) => K.set(Q.id, { ...Q, domain: "course" })), Array.from(K.values()).sort((Q, P) => String(Fe(Q) || "").localeCompare(String(Fe(P) || "")));
  }, [s.items, s.affairs, s.courses]), je = z.useMemo(() => {
    const K = /* @__PURE__ */ new Map();
    return W.forEach((Q) => {
      const P = Fe(Q)?.slice(0, 10) || "未定日期";
      K.set(P, [...K.get(P) || [], Q]);
    }), Array.from(K.entries()).sort(([Q], [P]) => Q.localeCompare(P));
  }, [W]), F = s.courses.filter((K) => K.start_at?.slice(0, 10) === s.localDate && K.status !== "已取消"), le = F.filter((K) => K.status === "待上课"), pe = F.map((K) => K.end_at).filter(Boolean).sort().at(-1) || null, he = !!(pe && Date.now() >= new Date(pe).getTime()), J = L ? "处理中…" : Y?.buttonLabel || (le.length ? "全部上完" : "已全部记录"), H = L || !!Y?.ok || !le.length || !he, ae = {
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
        title: ae,
        description: "数据来自排课与事务系统实时回读。"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Xg,
      {
        observedAt: s.observedAt,
        pending: o,
        onInspect: f,
        onPrepare: N,
        onOpenDay: _,
        onNavigate: ce,
        onQuick: x,
        onAskAi: M,
        onRetry: j,
        onRetryPrev: b,
        retryingId: C,
        affairFeedback: D,
        onDataChanged: ee
      }
    ),
    /* @__PURE__ */ n.jsx(rv, { course: s.nextCourse || null, advice: s.commuteAdvice || null, onOpen: (K) => s.nextCourse && f(s.nextCourse, K), onPrepare: N, onQuick: x, onAskAi: M }),
    s.scope === "today" && F.length > 0 && /* @__PURE__ */ n.jsxs("section", { className: "day-complete-bar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "今日收课" }),
        /* @__PURE__ */ n.jsx("strong", { children: le.length ? `还有 ${le.length} 节待记录` : "今日课程已全部记录" }),
        /* @__PURE__ */ n.jsx("span", { children: le.length && !he ? `最后一节 ${Lt(pe)} 结束后可操作` : "提交后会写入本地课表并同步日历" }),
        Y && /* @__PURE__ */ n.jsx(Ml, { ok: Y.ok, text: Y.text })
      ] }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          type: "button",
          className: "primary-button",
          disabled: H,
          onClick: () => {
            E(s.localDate);
          },
          children: J
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
      s.scope === "week" ? /* @__PURE__ */ n.jsx(Kg, { items: W, range: s.range, localDate: s.localDate, onInspect: f, onPrepare: N, onQuick: x, onAskAi: M, onRetry: j, retryingId: C, affairFeedback: D }) : s.scope === "month" ? /* @__PURE__ */ n.jsx(Qh, { items: W, range: s.range, localDate: s.localDate, onOpenDay: _ }) : je.length ? je.map(([K, Q]) => /* @__PURE__ */ n.jsxs("div", { className: "day-group", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "day-label", children: [
          /* @__PURE__ */ n.jsx("strong", { children: K === "未定日期" ? K : jt(`${K}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "short" }) }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            Q.length,
            " 项"
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-list", children: Q.map((P) => /* @__PURE__ */ n.jsx(ov, { item: P, onInspect: f, onPrepare: N, onQuick: x, onAskAi: M, onRetry: j, retryingId: C, feedback: D[P.id] }, P.id)) })
      ] }, K)) : /* @__PURE__ */ n.jsx(ha, { title: "这个范围没有安排", text: "可以切换时间范围，或用 AI 操作创建和调整。" })
    ] })
  ] });
}
function Xg({ observedAt: s, pending: o, onInspect: d, onPrepare: f, onOpenDay: _, onNavigate: N, onQuick: x, onAskAi: M, onRetry: j, onRetryPrev: b, retryingId: C, affairFeedback: D, onDataChanged: E }) {
  const [L, Y] = z.useState(() => Nn("suggestions")), [ce, ee] = z.useState(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem("laosu-workbench.suggestions.dismissed") || "[]");
    } catch {
      return [];
    }
  }), W = z.useCallback((v) => {
    Qe(`api/suggestions${v ? "?fresh=1" : ""}`).then((V) => {
      V?.cards && (Y(V), Ei("suggestions", V));
    }).catch(() => {
    });
  }, []);
  z.useEffect(() => {
    W(!0);
  }, [W]), z.useEffect(() => {
    s && W(!1);
  }, [s, W]);
  function je(v) {
    ee((V) => {
      const h = V.includes(v) ? V : [...V, v];
      try {
        window.sessionStorage.setItem("laosu-workbench.suggestions.dismissed", JSON.stringify(h));
      } catch {
      }
      return h;
    });
  }
  const [F, le] = z.useState(null), [pe, he] = z.useState({});
  async function J(v, V) {
    if (F) return;
    const h = v.id;
    le(h), he((G) => ({ ...G, [h]: { ok: !0, text: "正在处理…" } }));
    try {
      let G;
      if (v.action.kind === "overdue" && V === "done")
        G = await Qe("api/courses/overdue-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: v.action.student, date: v.action.date })
        });
      else if (v.action.kind === "overdue")
        G = await Qe("api/courses/cancel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ student: v.action.student, date: v.action.date, time: v.action.time, reason: "没上" })
        });
      else if (v.action.operation === "calendar_sync")
        G = await Qe("api/calendar/sync-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(v.action.input ?? {})
        });
      else if (v.action.operation === "quarantine_overdue")
        G = await Qe("api/courses/quarantine-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      else
        throw new Error("该建议不支持一键执行");
      if (!G.ok) throw new Error(G.error || "处理未完成");
      he((y) => ({ ...y, [h]: { ok: !0, text: G.message || "已处理" } })), je(h), W(!0), E?.({ silent: !0 });
    } catch (G) {
      he((y) => ({ ...y, [h]: { ok: !1, text: `处理失败：${G.message || "未知错误"}` } }));
    } finally {
      le(null);
    }
  }
  async function H(v) {
    if (F) return;
    const V = v.id;
    le(V), he((h) => ({ ...h, [V]: { ok: !0, text: "正在补齐…" } }));
    try {
      const h = await Qe("api/affairs/backfill-end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: v.action.ids ?? [] })
      });
      if (!h.ok) throw new Error(h.error || "补齐未完成");
      he((G) => ({ ...G, [V]: { ok: !0, text: h.message || "已补齐" } })), je(V), W(!0), E?.({ silent: !0 });
    } catch (h) {
      he((G) => ({ ...G, [V]: { ok: !1, text: `补齐失败：${h.message || "未知错误"}` } }));
    } finally {
      le(null);
    }
  }
  const ae = L?.cards ?? [], K = ae.filter((v) => v.bucket === "required"), Q = new Set(K.map((v) => v.entityId).filter(Boolean)), P = o.filter((v) => !Q.has(v.id)), be = ae.filter((v) => v.bucket === "suggestion" && !ce.includes(v.id)), Ee = P.length + K.length, _e = `overview-duo${Ee ? "" : " pending-empty"}${be.length ? "" : " suggestions-empty"}`;
  function m(v, V) {
    const h = v.bucket === "required" ? v.tone === "urgent" ? "待处理" : "待确认" : "建议";
    return /* @__PURE__ */ n.jsxs("div", { className: `quick-pending-item contextual-action-host actionable action-open ${v.bucket}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
        /* @__PURE__ */ n.jsx("strong", { children: v.title }),
        /* @__PURE__ */ n.jsx("span", { children: v.detail }),
        pe[v.id] && /* @__PURE__ */ n.jsx(Ml, { ok: pe[v.id].ok, text: pe[v.id].text })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(_i, { value: h }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-inline-action", children: [
        v.action.kind === "overdue" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: F === v.id, onClick: () => {
            J(v, "done");
          }, children: F === v.id ? "处理中…" : v.action.label }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!F, onClick: () => {
            J(v, "cancelled");
          }, children: v.action.cancelLabel || "没上" })
        ] }),
        v.action.kind === "backfill" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!F, onClick: () => {
          H(v);
        }, children: F === v.id ? "处理中…" : v.action.label }),
        v.action.kind === "preview" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: !!F, onClick: () => {
          const G = v.action.operation;
          if (G === "calendar_sync" || G === "quarantine_overdue") {
            J(v);
            return;
          }
          f({ operation: G ?? "", ...v.action.input ?? {} });
        }, children: F === v.id ? "处理中…" : v.action.label }),
        v.action.kind === "retryNext" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!F, onClick: () => {
          const G = { id: v.action.id ?? "", version: v.action.version, retry: {}, domain: "affair", title: v.action.title ?? v.title, status: "pending_confirmation" };
          j(G);
        }, children: v.action.label }),
        v.action.kind === "openDay" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!F, onClick: (G) => _(v.action.date ?? "", G.currentTarget), children: v.action.label }),
        v.action.kind === "navigate" && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: !!F, onClick: () => N(v.action.tab ?? "planning", v.action.section), children: v.action.label }),
        V && /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => je(v.id), children: "收起" })
      ] })
    ] }, v.id);
  }
  return /* @__PURE__ */ n.jsxs("div", { className: _e, children: [
    /* @__PURE__ */ n.jsxs("section", { className: "panel pending-action-panel", "aria-label": "待处理", children: [
      /* @__PURE__ */ n.jsx(Yt, { title: "待处理", meta: `${Ee} 项` }),
      Ee ? /* @__PURE__ */ n.jsxs("div", { children: [
        K.map((v) => m(v, !1)),
        P.map((v) => /* @__PURE__ */ n.jsx(fv, { item: v, onInspect: d, onPrepare: f, onQuick: x, onAskAi: M, onRetry: j, onRetryPrev: b, retryingId: C, feedback: D[v.id] }, v.id))
      ] }) : /* @__PURE__ */ n.jsx(ha, { title: "没有待处理事项", text: "当前没有欠你决定或补记的事情。", compact: !0 })
    ] }),
    be.length > 0 && /* @__PURE__ */ n.jsxs("section", { className: "panel suggestion-action-panel", "aria-label": "建议处理", children: [
      /* @__PURE__ */ n.jsx(Yt, { title: "建议处理", meta: `${be.length} 项` }),
      /* @__PURE__ */ n.jsx("div", { children: be.map((v) => m(v, !0)) })
    ] })
  ] });
}
function Vu({ item: s, onQuick: o, onAskAi: d, onRetry: f, retryingId: _, feedback: N, compact: x = !1 }) {
  if (["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status)) return null;
  const j = s.start_at?.slice(0, 10), b = s.start_at?.slice(11, 16);
  if (s.domain === "course")
    return !j || !b ? null : /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${x ? " compact" : ""}`, "data-ui": "item-actions", onClick: (D) => D.stopPropagation(), children: [
      d && /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => d(`把${s.title} ${j} ${b} 的这节课调一下时间`), children: "调时间" }),
      o && /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", "data-ui-role": "button", "data-ui-variant": "danger", "data-ui-action": "course-cancel", onClick: () => o("courseCancel", s), children: "本次不上" })
    ] });
  const C = _ === s.id;
  return /* @__PURE__ */ n.jsxs("div", { className: `item-action-buttons${x ? " compact" : ""}`, "data-ui": "item-actions", onClick: (D) => D.stopPropagation(), children: [
    /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", "data-ui-role": "button", "data-ui-variant": "primary", "data-ui-action": "affair-complete", disabled: !!_ || N?.ok, onClick: () => o?.("affairComplete", s), children: N?.ok ? "已完成" : "完成" }),
    s.retry && f ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-retry", disabled: !!_ || !!N?.ok, "aria-busy": C, onClick: () => {
      f(s);
    }, children: C ? "处理中…" : N?.buttonLabel || "没约上" }) : null
  ] });
}
function Vh(s) {
  return pr(s)[0]?.laneCount || 1;
}
const Qg = 52, Zg = 150;
function Gh(s, o) {
  const [d, f] = z.useState(0);
  if (z.useEffect(() => {
    const x = s.current;
    if (!x || typeof ResizeObserver > "u") return;
    const M = new ResizeObserver((j) => {
      const b = j[0]?.contentRect.width;
      b && Number.isFinite(b) && f(b);
    });
    return M.observe(x), () => M.disconnect();
  }, [s]), o) return { visibleDays: 1, paginated: !1 };
  if (!d) return { visibleDays: 7, paginated: !1 };
  const _ = Math.floor((d - Qg) / Zg), N = Math.max(1, Math.min(7, _));
  return { visibleDays: N, paginated: N < 7 };
}
function Xh() {
  const s = z.useRef(null), o = z.useRef(null), d = z.useCallback((N) => {
    if (N.button !== 0 || N.target.closest("button, article, a, input, select, textarea")) return;
    const x = s.current;
    !x || x.scrollWidth <= x.clientWidth || (o.current = { pointerId: N.pointerId, startX: N.clientX, scrollLeft: x.scrollLeft }, x.setPointerCapture(N.pointerId), x.classList.add("dragging"));
  }, []), f = z.useCallback((N) => {
    const x = s.current, M = o.current;
    !x || !M || M.pointerId !== N.pointerId || (x.scrollLeft = M.scrollLeft - (N.clientX - M.startX));
  }, []), _ = z.useCallback((N) => {
    const x = s.current, M = o.current;
    !x || !M || M.pointerId !== N.pointerId || (x.hasPointerCapture(N.pointerId) && x.releasePointerCapture(N.pointerId), x.classList.remove("dragging"), o.current = null);
  }, []);
  return { ref: s, onPointerDown: d, onPointerMove: f, onPointerUp: _, onPointerCancel: _ };
}
function Kg({ items: s, range: o, localDate: d, onInspect: f, onPrepare: _, onQuick: N, onAskAi: x, onRetry: M, retryingId: j, affairFeedback: b }) {
  const C = z.useMemo(() => fr(o, d), [o, d]), D = Xh(), [E, L] = z.useState(0), [Y, ce] = z.useState(null), { visibleDays: ee, paginated: W } = Gh(D.ref, !!Y), je = Math.max(1, Math.ceil(7 / Math.max(1, ee))), F = z.useMemo(
    () => Y ? [Y] : W ? Hh(C, E, ee) : C,
    [C, E, Y, W, ee]
  );
  z.useEffect(() => {
    L(0);
  }, [o, ee]), z.useEffect(() => {
    if (!Y) return;
    const m = (v) => {
      v.key === "Escape" && ce(null);
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [Y]);
  const le = z.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    return s.forEach((v) => {
      const V = Ni(v);
      V && (V < d && ["已取消", "已调课", "cancelled"].includes(v.status) || m.set(V, [...m.get(V) || [], v]));
    }), m.forEach((v, V) => m.set(V, [...v].sort((h, G) => String(Fe(h) || "").localeCompare(String(Fe(G) || ""))))), m;
  }, [s, d]), pe = z.useMemo(() => new Map(C.map((m) => [m, Vh((le.get(m) || []).filter((v) => v.start_at || v.deadline_at))])), [le, C]), he = z.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const v of C) {
      const V = (le.get(v) || []).filter((h) => h.start_at || h.deadline_at);
      m.set(v, pr(V));
    }
    return m;
  }, [le, C]), J = F.map((m) => m && pe.get(m) || 1);
  J.reduce((m, v) => m + v, 0);
  const H = `52px ${J.map((m) => `minmax(0, ${m}fr)`).join(" ")}`, ae = s.filter((m) => m.start_at || m.deadline_at), K = F.length >= 7 ? ae : ae.filter((m) => F.includes(Ni(m))), { startHour: Q, endHour: P } = Lh(K), be = Y ? 92 : ee >= 6 ? 64 : ee >= 4 ? 72 : 84, Ee = (P - Q) * be, _e = Array.from({ length: P - Q + 1 }, (m, v) => Q + v);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    Y ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => ce(null), children: "‹ 返回整周" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        jt(`${Y}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
        " · 单日视图"
      ] }),
      /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
    ] }) : W && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav overview-week-page-nav", role: "group", "aria-label": "切换本页日期", children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: E === 0, onClick: () => L((m) => Math.max(0, m - 1)), children: "‹ 上一页" }),
      /* @__PURE__ */ n.jsxs("strong", { children: [
        "第 ",
        E + 1,
        "/",
        je,
        " 页 · 每页 ",
        ee,
        " 天"
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", disabled: E >= je - 1, onClick: () => L((m) => Math.min(je - 1, m + 1)), children: "下一页 ›" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "week-calendar-scroll draggable-week-scroll", role: "region", tabIndex: 0, "aria-label": "时间视图，点击日期标题聚焦到单日", ...D, children: /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-canvas", style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-header", style: { gridTemplateColumns: H }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-corner", children: "时间" }),
        F.map((m, v) => m ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: m === d ? "week-day-header today" : "week-day-header", onClick: () => ce(m), "aria-label": `聚焦到 ${jt(`${m}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: jt(`${m}T12:00:00+08:00`, { weekday: "short" }) }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(m.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            le.get(m)?.length || 0,
            " 项"
          ] })
        ] }, m) : /* @__PURE__ */ n.jsx("div", { className: "week-day-header empty-slot", "aria-hidden": "true" }, `empty-${v}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "week-calendar-body", style: { gridTemplateColumns: H }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "week-time-axis", style: { height: Ee }, children: _e.map((m) => /* @__PURE__ */ n.jsxs("span", { style: { top: (m - Q) * be }, children: [
          String(m).padStart(2, "0"),
          ":00"
        ] }, m)) }),
        F.map((m, v) => {
          if (!m) return /* @__PURE__ */ n.jsx("div", { className: "week-day-track empty-slot", style: { height: Ee }, "aria-hidden": "true" }, `empty-${v}`);
          const V = he.get(m) || [];
          return /* @__PURE__ */ n.jsx("div", { className: m === d ? "week-day-track today" : "week-day-track", style: { height: Ee }, children: V.map(({ item: h, lane: G, laneCount: y }) => {
            const R = Yh(h, Q, P, be);
            if (!R) return null;
            const $ = 100 / y, I = h.start_at || h.deadline_at, ye = !["completed", "cancelled", "已完成", "已取消", "已调课"].includes(h.status) && (h.domain === "affair" || !!h.start_at), Te = br(h, d);
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `week-time-block contextual-action-host ${h.domain} ${_n(h, d)}${Sn(h) ? " temporary" : ""}${ye ? " actionable" : ""}`,
                style: { top: R.top, height: R.height, left: `calc(${G * $}% + 4px)`, width: `calc(${$}% - 8px)` },
                tabIndex: 0,
                role: "button",
                onClick: (Ge) => {
                  Ge.target.closest("button") || f(h, Ge.currentTarget);
                },
                onKeyDown: (Ge) => {
                  (Ge.key === "Enter" || Ge.key === " ") && (Ge.preventDefault(), f(h, Ge.currentTarget));
                },
                "data-item-id": h.id,
                "aria-label": `${Lt(I)} ${h.title}${Te ? "（已过期待标记）" : ""}，${h.domain === "course" ? `${h.duration || "—"} 分钟课程` : "事务"}${ye ? "；移入后可直接操作，Enter 打开详情" : "，打开详情"}`,
                children: [
                  /* @__PURE__ */ n.jsxs("strong", { children: [
                    Lt(I),
                    " · ",
                    h.title,
                    Te ? "（过期）" : ""
                  ] }),
                  /* @__PURE__ */ n.jsx("span", { children: h.domain === "course" ? `${h.duration || "—"} 分钟` : h.estimated_minutes ? `${h.estimated_minutes} 分钟 · 事务` : "事务" }),
                  ye && /* @__PURE__ */ n.jsx("div", { className: "week-card-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: h, onQuick: N, onAskAi: x, onRetry: M, retryingId: j, feedback: b[h.id], compact: !0 }) })
                ]
              },
              h.id
            );
          }) }, m);
        })
      ] })
    ] }) })
  ] });
}
function Qh({ items: s, range: o, localDate: d, onOpenDay: f }) {
  const _ = z.useMemo(() => Ug(o, d), [o, d]), N = (o.match(/\d{4}-\d{2}-\d{2}/) || [d])[0].slice(0, 7), x = z.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    return s.forEach((b) => {
      const C = Ni(b);
      C && (C < d && ["已取消", "已调课", "cancelled"].includes(b.status) || j.set(C, [...j.get(C) || [], b]));
    }), j.forEach((b, C) => j.set(C, [...b].sort((D, E) => String(Fe(D) || "").localeCompare(String(Fe(E) || ""))))), j;
  }, [s, d]), M = ["一", "二", "三", "四", "五", "六", "日"];
  return /* @__PURE__ */ n.jsx("div", { className: "month-calendar-scroll", role: "region", tabIndex: 0, "aria-label": "月历视图", children: /* @__PURE__ */ n.jsxs("div", { className: "month-calendar", children: [
    /* @__PURE__ */ n.jsx("div", { className: "month-weekdays", children: M.map((j) => /* @__PURE__ */ n.jsxs("span", { children: [
      "周",
      j
    ] }, j)) }),
    /* @__PURE__ */ n.jsx("div", { className: "month-grid", children: _.map((j) => {
      const b = x.get(j) || [], C = ["month-cell"];
      return j.startsWith(N) || C.push("outside"), j === d && C.push("today"), /* @__PURE__ */ n.jsxs("button", { type: "button", className: C.join(" "), onClick: (D) => f(j, D.currentTarget), children: [
        /* @__PURE__ */ n.jsxs("header", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: Number(j.slice(8, 10)) }),
          /* @__PURE__ */ n.jsx("span", { children: b.length ? `${b.length} 项` : "" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "month-item-list", children: [
          b.slice(0, 3).map((D) => /* @__PURE__ */ n.jsxs("span", { className: `month-item ${D.domain} ${_n(D, d)}${Sn(D) ? " temporary" : ""}`, children: [
            /* @__PURE__ */ n.jsx("i", {}),
            Lt(Fe(D)) || "待定",
            " · ",
            D.title,
            br(D, d) ? "（过期）" : ""
          ] }, D.id)),
          b.length > 3 && /* @__PURE__ */ n.jsxs("span", { className: "month-more", children: [
            "＋",
            b.length - 3,
            " 项"
          ] })
        ] })
      ] }, j);
    }) })
  ] }) });
}
function ur(s) {
  const o = Math.floor(s / 60), d = s % 60;
  return String(o).padStart(2, "0") + ":" + String(d).padStart(2, "0");
}
function $g({ onAction: s, onAskAi: o, refreshKey: d = 0 }) {
  const [f, _] = z.useState(() => Nn("cockpit")), [N, x] = z.useState(!f), [M, j] = z.useState(""), b = z.useCallback(async (E = !1, L = !1) => {
    E || x(!0);
    try {
      const Y = await Qe("api/cockpit" + (L ? "?fresh=1" : ""));
      return _(Y), Ei("cockpit", Y), j(""), !0;
    } catch (Y) {
      return j(Y?.message || "读取失败"), !1;
    } finally {
      x(!1);
    }
  }, []);
  z.useEffect(() => {
    b(!f);
  }, [b]), z.useEffect(() => {
    d > 0 && b(!0, !0);
  }, [d]);
  const C = z.useMemo(() => {
    const E = /* @__PURE__ */ new Map();
    for (const Y of f?.students ?? [])
      E.has(Y.group) || E.set(Y.group, []), E.get(Y.group).push(Y);
    return ["本周已排", "已预留", "未排"].map((Y) => ({ label: Y, items: E.get(Y) ?? [] }));
  }, [f]);
  if (N && !f) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在装载驾驶舱…" }) });
  if (M && !f) return /* @__PURE__ */ n.jsx("div", { className: "view-stack", children: /* @__PURE__ */ n.jsx(na, { label: "驾驶舱读取", ok: !1, detail: M }) });
  const D = f?.localDate ?? "";
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack cockpit-view", children: [
    /* @__PURE__ */ n.jsx(En, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左选学生，中看空档与课程，右看诊断。点空档直接开预留。" }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-toolbar", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "muted-note", children: [
        f?.monday,
        " 当周 · 今天 ",
        D
      ] }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => {
        b(!0);
      }, children: "刷新" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: () => o(""), children: "AI 排课" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "cockpit-layout", children: [
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-left panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "候选学生" }),
        C.map((E) => /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            E.label,
            " · ",
            E.items.length
          ] }),
          E.items.length === 0 ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "（无）" }) : E.items.map((L) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: L.name }),
            /* @__PURE__ */ n.jsx("span", { className: "cockpit-zone", children: L.zone })
          ] }, L.name))
        ] }, E.label))
      ] }),
      /* @__PURE__ */ n.jsx("section", { className: "cockpit-canvas", children: f?.days.map((E) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day" + (E.date === D ? " cockpit-day-today" : ""), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-head", children: [
          /* @__PURE__ */ n.jsx("strong", { children: E.weekday }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: E.date.slice(5) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "cockpit-day-body", children: [
          E.courses.map((L, Y) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-card cockpit-card-course", role: "group", children: [
            /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card-main", title: "点击调整这节课", onClick: () => s({ operation: "course_move", student: L.title, fromDate: E.date, fromTime: String(L.start).slice(11, 16) }), children: [
              /* @__PURE__ */ n.jsx("span", { children: L.title }),
              /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
                String(L.start).slice(11, 16),
                "–",
                String(L.end).slice(11, 16)
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("button", { type: "button", className: "cockpit-card-ai", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", title: "用一句话交给 AI 调时间", onClick: () => o("把" + L.title + " " + E.date + " " + String(L.start).slice(11, 16) + " 的这节课调一下时间"), children: "调时间" })
          ] }, "c" + Y)),
          E.reservations.map((L, Y) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-card cockpit-card-reservation", onClick: () => s({ operation: "reservation_update", id: L.id, student: L.student, date: E.date, time: String(L.start).slice(11, 16) }), children: [
            /* @__PURE__ */ n.jsxs("span", { children: [
              L.student,
              " · 预留"
            ] }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-card-time", children: [
              String(L.start).slice(11, 16),
              "–",
              String(L.end).slice(11, 16)
            ] })
          ] }, "r" + Y)),
          E.gaps.map((L, Y) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "cockpit-gap", title: "空档 " + L.minutes + " 分钟，点击预留", onClick: () => s({ operation: "reservation_add", date: E.date, time: ur(L.start) }), children: [
            ur(L.start),
            "–",
            ur(L.end),
            " 空档"
          ] }, "g" + Y)),
          E.courses.length === 0 && E.reservations.length === 0 && /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "无课" })
        ] })
      ] }, E.date)) }),
      /* @__PURE__ */ n.jsxs("aside", { className: "cockpit-right panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "实时诊断" }),
        /* @__PURE__ */ n.jsx(da, { label: "本周课程", value: f?.diagnostics.courseCount ?? 0, hint: "共 " + (f?.diagnostics.totalMinutes ?? 0) + " 分钟", tone: "sage" }),
        /* @__PURE__ */ n.jsx(da, { label: "有效预留", value: f?.diagnostics.reservationCount ?? 0, hint: "待确认/已确认", tone: "amber" }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsx("p", { className: "cockpit-group-label", children: "每日空档" }),
          f?.diagnostics.dayGaps.map((E) => /* @__PURE__ */ n.jsxs("div", { className: "cockpit-student", children: [
            /* @__PURE__ */ n.jsx("span", { children: E.weekday }),
            /* @__PURE__ */ n.jsxs("span", { className: "cockpit-zone", children: [
              E.gapMinutes,
              " 分钟"
            ] })
          ] }, E.date))
        ] }),
        /* @__PURE__ */ n.jsxs("section", { className: "cockpit-group", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "cockpit-group-label", children: [
            "尚未排入 · ",
            f?.diagnostics.unassigned.length ?? 0
          ] }),
          f?.diagnostics.unassigned.length ? f?.diagnostics.unassigned.map((E) => /* @__PURE__ */ n.jsx("div", { className: "cockpit-student cockpit-unassigned", children: /* @__PURE__ */ n.jsx("span", { children: E }) }, E)) : /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "本周在读学生都已排或已预留" })
        ] }),
        (f?.warnings ?? []).map((E, L) => /* @__PURE__ */ n.jsx(na, { label: "读取警告", ok: !1, detail: E }, L))
      ] })
    ] })
  ] });
}
function Jg({ onAction: s, onAskAi: o, refreshKey: d, sectionHint: f, scheduleText: _, onDataChanged: N }) {
  const [x, M] = z.useState(() => Nn("planning")), [j, b] = z.useState(""), [C, D] = z.useState("calendar"), [E, L] = z.useState("issues"), [Y, ce] = z.useState(!1), [ee, W] = z.useState(null), [je, F] = z.useState(!1), [le, pe] = z.useState(null), [he, J] = z.useState({});
  z.useEffect(() => {
    f?.section && D(f.section);
  }, [f?.nonce]), z.useEffect(() => {
    let h = !1;
    return Qe(`api/planning${d > 0 ? "?fresh=1" : ""}`).then((G) => {
      if (h) return;
      const y = Hg(G);
      M(y), Ei("planning", y), b(""), W(null);
    }).catch((G) => {
      h || b(G.message || "筹备数据读取失败");
    }), () => {
      h = !0;
    };
  }, [d]), z.useEffect(() => {
    const h = Object.entries(he).at(-1);
    if (!h || !h[1].ok || le === h[0]) return;
    const G = window.setTimeout(() => {
      J((y) => {
        const R = { ...y };
        return delete R[h[0]], R;
      });
    }, 4500);
    return () => window.clearTimeout(G);
  }, [le, he]);
  async function H() {
    if (!(!x || je)) {
      F(!0), W(null);
      try {
        W(await Qe(`api/planning/template-check?monday=${encodeURIComponent(x.weekMonday)}`));
      } catch (h) {
        W({ ok: !1, passed: !1, monday: x.weekMonday, output: "", affectedDates: [], error: h.message });
      } finally {
        F(!1);
      }
    }
  }
  async function ae(h) {
    if (!le) {
      pe(h), J((G) => ({ ...G, [h]: { ok: !0, text: "正在取消预留…" } }));
      try {
        const G = await Qe("api/reservations/cancel-quick", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: h })
        });
        if (!G.ok) throw new Error(G.error || "取消预留未完成");
        M((y) => y && {
          ...y,
          reservations: y.reservations.map((R) => R.reservation_id === h ? { ...R, status: "已取消" } : R)
        }), J((y) => ({ ...y, [h]: { ok: !0, text: G.message || "已取消预留" } })), N({ silent: !0 });
      } catch (G) {
        J((y) => ({ ...y, [h]: { ok: !1, text: `取消失败：${G.message || "未知错误"}` } }));
      } finally {
        pe(null);
      }
    }
  }
  async function K(h) {
    if (!le) {
      pe(h), J((G) => ({ ...G, [h]: { ok: !0, text: "正在复核冲突并确认落课…" } }));
      try {
        const G = await Qe("api/reservations/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId: h })
        });
        if (!G.ok) throw new Error(G.error || "预留确认失败");
        M((y) => y && {
          ...y,
          summary: { ...y.summary, formalCourseCount: y.summary.formalCourseCount + 1 },
          reservations: y.reservations.map((R) => R.reservation_id === h ? { ...R, status: "已确认" } : R),
          audit: {
            ...y.audit,
            reservation_hard_blockers: y.audit.reservation_hard_blockers.filter((R) => R.reservation_id !== h)
          }
        }), J((y) => ({ ...y, [h]: { ok: !0, text: G.message || "已确认落课" } })), N({ silent: !0 });
      } catch (G) {
        J((y) => ({ ...y, [h]: { ok: !1, text: `确认失败：${G.message || "未知错误"}` } })), N({ silent: !0 });
      } finally {
        pe(null);
      }
    }
  }
  if (j) return /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "筹备数据读取失败", text: j });
  if (!x) return /* @__PURE__ */ n.jsx(xr, {});
  const Q = x.summary, P = x.students.filter((h) => h.confirmed && h.zone !== "未分区" && (h.availability.length > 0 || h.hasReservation)).length, be = Q.activeStudentCount ? Math.round(P / Q.activeStudentCount * 100) : 100, Ee = x.commute.overlaps.length, _e = new Map(x.audit.reservation_hard_blockers.map((h) => [h.reservation_id, h.reasons])), m = x.students.filter((h) => E === "all" ? !0 : E === "availability" ? !h.availability.length && !h.hasReservation : E === "zone" ? h.zone === "未分区" : E === "pending" ? !!h.pendingWeekday || !h.confirmed : h.issues.length > 0), v = Y ? m : m.slice(0, 10), V = x.sources.filter((h) => !h.ok);
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack planning-workspace", children: [
    /* @__PURE__ */ n.jsx(En, { eyebrow: "规划层", title: "开学筹备与课程预留", description: "从资料缺口开始，经过预演和预留，再确认进入正式课表。" }),
    V.length > 0 && /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: `${V.length} 项筹备数据读取异常`, text: V.map((h) => `${h.label}：${h.message || "读取失败"}`).join("；") }),
    Q.reservationHardBlockerCount > 0 && /* @__PURE__ */ n.jsx(Dl, { tone: "warn", title: `${Q.reservationHardBlockerCount} 条预留存在确认硬阻塞`, text: x.audit.reservation_hard_blockers.map((h) => `${h.student} ${h.date}：${h.reasons.join("、")}`).join("；") }),
    /* @__PURE__ */ n.jsx(
      Yu,
      {
        label: "筹备页内部导航",
        value: C,
        onChange: (h) => D(h),
        items: [
          { id: "calendar", label: "周视图", count: x.reservations.length + x.templates.length },
          { id: "trial", label: "试排" },
          { id: "students", label: "学生与准备度", count: Q.unzonedCount + Q.missingAvailabilityCount + Q.unconfirmedActiveCount + x.students.filter((h) => h.issues.length).length },
          { id: "candidates", label: "预留与复核", count: Ee + Q.reservationCount + Q.reviewCount + Q.overdueCount + V.length }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx(Fg, { planning: x, hidden: C !== "calendar", onConfirmReservation: K, onCancelReservation: ae, onAction: s, confirmingReservationId: le, reservationFeedback: he }),
    /* @__PURE__ */ n.jsxs("div", { hidden: C !== "trial", children: [
      /* @__PURE__ */ n.jsx(En, { eyebrow: "排课驾驶舱", title: "一周试排", description: "左看诊断，中看空档；点空档直接开预留，卡片一键交 AI。" }),
      /* @__PURE__ */ n.jsx($g, { onAction: s, onAskAi: o, refreshKey: d })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-stage-grid", "aria-label": "筹备进度", hidden: C !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage primary", children: [
        /* @__PURE__ */ n.jsx("span", { children: "01 · 资料准备" }),
        /* @__PURE__ */ n.jsxs("strong", { children: [
          P,
          "/",
          Q.activeStudentCount
        ] }),
        /* @__PURE__ */ n.jsxs("small", { children: [
          be,
          "% 学生资料可用于排课"
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "readiness-bar", children: /* @__PURE__ */ n.jsx("i", { style: { width: `${be}%` } }) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: Ee ? "planning-stage warn" : "planning-stage ready", children: [
        /* @__PURE__ */ n.jsx("span", { children: "02 · 模板体检" }),
        /* @__PURE__ */ n.jsx("strong", { children: Ee }),
        /* @__PURE__ */ n.jsx("small", { children: Ee ? "项静态风险待处理" : "静态检查通过" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "03 · 课程预留" }),
        /* @__PURE__ */ n.jsx("strong", { children: Q.reservationCount }),
        /* @__PURE__ */ n.jsx("small", { children: "确认后才进入正式课程" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-stage", children: [
        /* @__PURE__ */ n.jsx("span", { children: "04 · 正式落课" }),
        /* @__PURE__ */ n.jsx("strong", { children: Q.formalCourseCount }),
        /* @__PURE__ */ n.jsx("small", { children: Q.reviewCount + Q.overdueCount ? `${Q.reviewCount + Q.overdueCount} 项待复核` : "当前无复核积压" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-overview-grid", hidden: C !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-overview-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "当前优先级" }),
          /* @__PURE__ */ n.jsx("h3", { children: "先把学生资料补到可排" }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            Q.activeStudentCount - P,
            " 人仍有关键资料缺口。contract ",
            x.contract.version ?? "—",
            " · schema ",
            x.contract.schemaVersion ?? "—",
            " · ",
            Lu(x.range)
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-overview-actions", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            L("availability"), D("students");
          }, children: [
            "缺候选时间 ",
            Q.missingAvailabilityCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            L("zone"), D("students");
          }, children: [
            "未分区 ",
            Q.unzonedCount
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => {
            L("pending"), D("students");
          }, children: [
            "待确认 ",
            Q.unconfirmedActiveCount + Q.pendingCount
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
          Q.reviewCount + Q.overdueCount + V.length > 0 && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => D("candidates"), children: "处理复核与异常" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "panel planning-student-panel", hidden: C !== "students", children: [
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
        ].map(([h, G]) => /* @__PURE__ */ n.jsx("button", { type: "button", className: E === h ? "selected" : "", onClick: () => {
          L(h), ce(!1);
        }, children: G }, h)) })
      ] }),
      m.length ? /* @__PURE__ */ n.jsxs("div", { className: "planning-student-list", children: [
        v.map((h) => {
          const G = h.availability.length ? h.availability.map((y) => `${y.weekday} ${y.start_time}-${y.end_time}`).join("；") : "尚未记录";
          return /* @__PURE__ */ n.jsxs("article", { className: "planning-student-row", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-name", children: [
              /* @__PURE__ */ n.jsx("strong", { children: h.name }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                h.duration,
                " 分钟"
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "沟通" }),
              /* @__PURE__ */ n.jsx("span", { className: h.confirmed ? "state-good" : "state-warn", children: h.pendingWeekday ? `${h.pendingWeekday}待定` : h.confirmed ? "已确认" : "未确认" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "片区" }),
              /* @__PURE__ */ n.jsx("span", { className: h.zone === "未分区" ? "state-warn" : "", children: h.zone })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell availability-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "长期候选时间" }),
              /* @__PURE__ */ n.jsx("span", { className: !h.availability.length && !h.hasReservation ? "state-warn" : "", title: G, children: h.availability.length ? G : h.hasReservation ? "已有单日预留" : G })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-student-cell", children: [
              /* @__PURE__ */ n.jsx("small", { children: "约束" }),
              /* @__PURE__ */ n.jsx("span", { children: h.vacations.length ? h.vacations.map((y) => `至 ${y.end_date.slice(5)}`).join("、") : "—" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "planning-row-actions", children: [
              h.zone === "未分区" && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "zone_set", student: h.name }), children: "设片区" }),
              !h.availability.length && !h.hasReservation && /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "availability_set", student: h.name, weekday: h.pendingWeekday || void 0 }), children: "补候选时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "reservation_add", student: h.name, duration: h.duration, zone: h.zone === "未分区" ? "" : h.zone }), children: "预留" })
            ] })
          ] }, h.sourceName);
        }),
        m.length > 10 && /* @__PURE__ */ n.jsx("button", { type: "button", className: "planning-expand-button", onClick: () => ce((h) => !h), children: Y ? "收起学生列表" : `再看 ${m.length - 10} 人` })
      ] }) : /* @__PURE__ */ n.jsx(ha, { title: "这个筛选下没有缺口", text: "学生资料已经满足当前筛选条件。", compact: !0 }),
      x.inactiveConfirmed.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "planning-inline-warning", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "确认名单异常" }),
        /* @__PURE__ */ n.jsxs("span", { children: [
          "非在读学生仍在确认名单：",
          x.inactiveConfirmed.join("、")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-student-context", hidden: C !== "students", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "待定名单" }),
        /* @__PURE__ */ n.jsx("span", { children: x.pending.map((h) => h.label).join("、") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "范围内出游" }),
        /* @__PURE__ */ n.jsx("span", { children: x.vacations.map((h) => `${h.student} ${h.start_date.slice(5)}—${h.end_date.slice(5)}`).join("；") || "无" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-context-card", children: [
        /* @__PURE__ */ n.jsx("strong", { children: "片区覆盖" }),
        /* @__PURE__ */ n.jsx("span", { children: x.zones.map((h) => `${h.zone} ${h.count}人`).join("；") || "无" })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-two-column", hidden: C !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "panel planning-reservations-panel", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "课程预留", meta: `${x.reservations.length} 条`, action: "新增预留…", onAction: () => s({ operation: "reservation_add" }) }),
        x.reservations.length ? /* @__PURE__ */ n.jsx("div", { className: "reservation-card-list", children: x.reservations.map((h) => {
          const G = (h.conflicts?.formal_courses?.length || 0) + (h.conflicts?.soft_reservations?.length || 0), y = _e.get(h.reservation_id) || [], R = `reservation-blocker-${h.reservation_id}`, $ = h.status === "已确认" ? "已落课" : h.status === "预期" ? "待落课" : h.status, I = y.length ? "blocked" : h.status === "已确认" ? "landed" : "expected";
          return /* @__PURE__ */ n.jsxs("article", { className: `reservation-card ${I}`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-date", children: [
              /* @__PURE__ */ n.jsx("strong", { children: h.reservation_date.slice(5) }),
              /* @__PURE__ */ n.jsx("span", { children: h.weekday })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "reservation-main", children: [
              /* @__PURE__ */ n.jsx("strong", { children: h.student }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                h.start_time,
                "-",
                h.end_time,
                " · ",
                h.duration,
                " 分钟",
                h.zone ? ` · ${h.zone}` : ""
              ] }),
              /* @__PURE__ */ n.jsxs("small", { id: R, children: [
                $,
                G ? ` · ${G} 项软冲突` : "",
                y.length ? ` · 硬约束：${y.join("、")}` : "",
                h.note ? ` · ${h.note}` : ""
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "reservation-actions", children: h.status === "预期" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "reservation-update", onClick: () => s({ operation: "reservation_update", reservationId: h.reservation_id, date: h.reservation_date, time: h.start_time, duration: h.duration, zone: h.zone || "", note: h.note || "" }), children: "调时间" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: y.length > 0, "aria-describedby": y.length ? R : void 0, onClick: () => s({ operation: "reservation_confirm", reservationId: h.reservation_id }), children: y.length ? "暂不可落课" : "确认落课" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", onClick: () => s({ operation: "reservation_cancel", reservationId: h.reservation_id }), children: "取消预留" })
            ] }) : /* @__PURE__ */ n.jsxs("span", { className: "reservation-state-chip confirmed", children: [
              "✓ ",
              $
            ] }) })
          ] }, h.reservation_id);
        }) }) : /* @__PURE__ */ n.jsx(ha, { title: "当前没有预留", text: "未确认的安排先放在这里；确认时课程重叠、出游和老师冲突仍会拦截，通勤只提示询问。", compact: !0 })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "panel template-health-panel", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-panel-head compact", children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "候选前检查" }),
            /* @__PURE__ */ n.jsx("h3", { children: "固定模板体检" }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              Q.templateCount,
              " 条模板 · 通勤只作排时间提示"
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: je, onClick: () => {
            H();
          }, children: je ? "正在预演…" : "预演本周模板" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "template-issue-list", children: [
          /* @__PURE__ */ n.jsx(sr, { label: "时间重叠", count: x.commute.overlaps.length, tone: "danger", details: x.commute.overlaps.slice(0, 3).map((h) => `${h.weekday} ${h.first} ${h.firstRange} / ${h.second} ${h.secondRange}`) }),
          /* @__PURE__ */ n.jsx(sr, { label: "长期候选时间差异", count: x.commute.availabilityConflicts.length, tone: "neutral", details: x.commute.availabilityConflicts.slice(0, 3).map((h) => `${h.student} ${h.weekday} ${h.startTime}-${h.endTime}（仅提示）`) }),
          /* @__PURE__ */ n.jsx(sr, { label: "排时间时再问通勤", count: x.commute.missingRoutes.length, tone: "neutral", details: x.commute.missingRoutes.slice(0, 3).map((h) => `${h.weekday} ${h.from} → ${h.to}`) })
        ] }),
        x.commute.missingRoutes.slice(0, 2).map((h) => /* @__PURE__ */ n.jsxs("button", { type: "button", className: "route-fix-button", onClick: () => s({ operation: "commute_set", fromStudent: h.from, toStudent: h.to }), children: [
          "补录 ",
          h.from,
          " → ",
          h.to
        ] }, `${h.weekday}-${h.from}-${h.to}`)),
        ee && /* @__PURE__ */ n.jsxs("div", { className: ee.passed ? "template-check-result pass" : "template-check-result fail", children: [
          /* @__PURE__ */ n.jsx("strong", { children: ee.passed ? "模板预演通过" : "模板预演未通过" }),
          /* @__PURE__ */ n.jsx("pre", { children: ee.error || ee.output || "没有返回详情" })
        ] })
      ] })
    ] }),
    C === "candidates" && (x.reviews.length > 0 || Q.overdueCount > 0) && /* @__PURE__ */ n.jsxs("section", { className: "panel review-queue-panel", children: [
      /* @__PURE__ */ n.jsx(Yt, { title: "历史课程复核", meta: `${x.reviews.length} 节待确认 · ${Q.overdueCount} 节过期待转入`, action: Q.overdueCount ? `处理 ${Q.overdueCount} 节过期课` : void 0, onAction: Q.overdueCount ? () => s({ operation: "quarantine_overdue" }) : void 0 }),
      /* @__PURE__ */ n.jsx("div", { className: "review-card-list", children: x.reviews.map((h) => /* @__PURE__ */ n.jsxs("article", { className: "review-card", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: h.student }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            h.date,
            " · ",
            h.start_time,
            "-",
            h.end_time
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: h.course_id, resolution: "done" }), children: "确认已完成" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => s({ operation: "course_review_resolve", courseId: h.course_id, resolution: "cancelled" }), children: "确认没上" })
        ] })
      ] }, h.course_id)) })
    ] }),
    C === "candidates" && x.reviews.length === 0 && Q.overdueCount === 0 && /* @__PURE__ */ n.jsx("section", { className: "panel", children: /* @__PURE__ */ n.jsx(ha, { title: "当前没有待复核课程", text: "过期课程和人工复核队列均已清空。", compact: !0 }) }),
    /* @__PURE__ */ n.jsxs("section", { className: "planning-detail-grid", hidden: C !== "candidates", children: [
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "复核口径与运行状态" }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-detail-content", children: [
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "过期待转入：" }),
            Q.overdueCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "人工待复核：" }),
            Q.reviewCount,
            " 节"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "读取异常：" }),
            V.length,
            " 项"
          ] }),
          /* @__PURE__ */ n.jsx("p", { children: "过期课只会先转入“待确认”，必须再由人工判断已完成或没上。" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("details", { className: "raw-details panel", children: [
        /* @__PURE__ */ n.jsx("summary", { children: "数据来源与底层证据" }),
        /* @__PURE__ */ n.jsx("div", { className: "source-status-list", children: x.sources.map((h) => /* @__PURE__ */ n.jsxs("span", { className: h.ok ? "ok" : "bad", children: [
          /* @__PURE__ */ n.jsx("i", {}),
          h.label
        ] }, h.label)) }),
        /* @__PURE__ */ n.jsxs("pre", { children: [
          Object.values(x.raw).filter(Boolean).join(`

`),
          _ ? `

── 底层课表文本 ──
${_}` : ""
        ] })
      ] })
    ] })
  ] });
}
function Fg({ planning: s, hidden: o, onConfirmReservation: d, onCancelReservation: f, onAction: _, confirmingReservationId: N, reservationFeedback: x }) {
  const [M, j] = z.useState("reservation"), [b, C] = z.useState(null), D = Xh(), [E, L] = z.useState(s.weekMonday), [Y, ce] = z.useState(0), [ee, W] = z.useState(null), je = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], F = z.useMemo(() => fr(`${E}..${E}`, E), [E]), { visibleDays: le, paginated: pe } = Gh(D.ref, !!ee), he = Math.max(1, Math.ceil(7 / Math.max(1, le))), J = z.useMemo(
    () => ee ? [ee] : pe ? Hh(F, Y, le) : F,
    [F, Y, ee, pe, le]
  );
  z.useEffect(() => {
    L(s.weekMonday);
  }, [s.weekMonday]), z.useEffect(() => {
    ce(0), W(null), C(null);
  }, [E, M]);
  const H = z.useMemo(() => vr(s.range), [s.range]), ae = z.useMemo(() => fr(s.range, s.localDate)[0], [s.range, s.localDate]), K = E > ae, Q = !!(H.end && zl(E, 7) <= H.end), P = z.useMemo(() => new Map(s.students.map((Z) => [Z.name, Z])), [s.students]), be = z.useMemo(() => new Map(s.pending.map((Z) => [Z.student, Z])), [s.pending]), Ee = z.useMemo(() => new Map(
    s.audit.reservation_hard_blockers.map((Z) => [Z.reservation_id, Z.reasons.join("、")])
  ), [s.audit.reservation_hard_blockers]), _e = z.useMemo(() => {
    const Z = (ge, te = "在读") => te !== "在读" ? { studentState: "已暂停", stateClass: "paused" } : be.has(ge) ? { studentState: "待定", stateClass: "pending" } : P.get(ge)?.confirmed ? { studentState: "已确认", stateClass: "confirmed" } : { studentState: "未确认", stateClass: "unconfirmed" }, Me = (ge) => ({
      ...ge,
      start_at: `${ge.date}T${ge.start_time}:00+08:00`,
      end_at: `${ge.date}T${ge.end_time}:00+08:00`
    });
    return M === "reservation" ? s.reservations.filter((ge) => ge.reservation_date >= F[0] && ge.reservation_date <= F[6] && ge.status !== "已取消").map((ge) => {
      const te = Ee.get(ge.reservation_id), Dt = (ge.student_status || "在读") !== "在读", tt = ge.status === "已确认";
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
        studentState: Dt ? "已暂停" : tt ? "已落课" : te ? "有硬约束" : "待落课",
        stateClass: Dt ? "paused" : tt ? "landed" : te ? "blocked" : "expected",
        zone: ge.zone,
        note: ge.note
      });
    }) : s.templates.flatMap((ge) => {
      const te = je.indexOf(ge.weekday);
      if (te < 0) return [];
      const Dt = F[te], tt = Z(ge.student, ge.student_status);
      return [Me({
        id: `template-${ge.template_id}`,
        kind: "template",
        student: ge.student,
        date: Dt,
        weekday: ge.weekday,
        start_time: ge.start_time,
        end_time: ge.end_time,
        duration: ge.duration,
        studentState: tt.studentState,
        stateClass: tt.stateClass
      })];
    });
  }, [F, M, be, s.reservations, s.templates, Ee, P]);
  z.useEffect(() => {
    b && !_e.some((Z) => Z.id === b && Z.kind === "reservation") && C(null);
  }, [_e, b]), z.useEffect(() => {
    if (!ee) return;
    const Z = (Me) => {
      Me.key === "Escape" && W(null);
    };
    return window.addEventListener("keydown", Z), () => window.removeEventListener("keydown", Z);
  }, [ee]), z.useEffect(() => {
    if (!b) return;
    const Z = (Me) => {
      Me.key === "Escape" && C(null);
    };
    return window.addEventListener("keydown", Z), () => window.removeEventListener("keydown", Z);
  }, [b]);
  const m = !!N, v = z.useMemo(() => {
    const Z = /* @__PURE__ */ new Map();
    return _e.forEach((Me) => Z.set(Me.date, [...Z.get(Me.date) || [], Me])), Z;
  }, [_e]), V = z.useMemo(() => new Map(F.map((Z) => [Z, Vh(v.get(Z) || [])])), [v, F]), h = z.useMemo(() => {
    const Z = /* @__PURE__ */ new Map();
    for (const Me of F)
      Z.set(Me, pr(v.get(Me) || []));
    return Z;
  }, [v, F]), G = J.map((Z) => Z && V.get(Z) || 1);
  G.reduce((Z, Me) => Z + Me, 0);
  const y = `52px ${G.map((Z) => `minmax(0, ${Z}fr)`).join(" ")}`, R = J.length >= 7 ? _e : _e.filter((Z) => J.includes(Z.date)), { startHour: $, endHour: I } = Lh(R), me = ee ? 92 : le >= 6 ? 64 : le >= 4 ? 72 : 84, ye = (I - $) * me, Te = Array.from({ length: I - $ + 1 }, (Z, Me) => $ + Me), Ge = `${jt(`${F[0]}T12:00:00+08:00`, { month: "long", day: "numeric" })}—${jt(`${F[6]}T12:00:00+08:00`, { month: "long", day: "numeric" })}`;
  return /* @__PURE__ */ n.jsxs("section", { className: `panel planning-week-panel ${M}-mode`, hidden: o, "aria-label": "筹备周视图", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "planning-week-toolbar", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "排课周期" }),
        /* @__PURE__ */ n.jsx("h3", { children: M === "reservation" ? "临时预留周视图" : "正式固定周视图" }),
        /* @__PURE__ */ n.jsx("span", { children: M === "reservation" ? "鼠标移入卡片原地操作：待落课可确认，已落课可调课或处理本次不上；触屏轻点。" : "按固定模板展开本周基线，同时标出学生沟通状态。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-controls", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-mode", role: "group", "aria-label": "周视图层级", children: [
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: M === "reservation" ? "selected" : "", "aria-pressed": M === "reservation", onClick: () => j("reservation"), children: [
            "临时预留 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.reservations.length })
          ] }),
          /* @__PURE__ */ n.jsxs("button", { type: "button", className: M === "template" ? "selected" : "", "aria-pressed": M === "template", onClick: () => j("template"), children: [
            "正式固定 ",
            /* @__PURE__ */ n.jsx("strong", { children: s.templates.length })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "planning-week-nav", role: "group", "aria-label": "切换周", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "上一周", disabled: !K, onClick: () => L((Z) => zl(Z, -7)), children: "‹" }),
          /* @__PURE__ */ n.jsx("strong", { children: Ge }),
          /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": "下一周", disabled: !Q, onClick: () => L((Z) => zl(Z, 7)), children: "›" })
        ] }),
        ee ? /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "单日聚焦视图", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => W(null), children: "‹ 返回整周" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            jt(`${ee}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" }),
            " · 单日视图"
          ] }),
          /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true" })
        ] }) : pe && /* @__PURE__ */ n.jsxs("div", { className: "planning-day-page-nav", role: "group", "aria-label": "切换本页日期", children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: Y === 0, onClick: () => ce((Z) => Math.max(0, Z - 1)), children: "‹ 上一页" }),
          /* @__PURE__ */ n.jsxs("strong", { children: [
            "第 ",
            Y + 1,
            "/",
            he,
            " 页 · 每页 ",
            le,
            " 天"
          ] }),
          /* @__PURE__ */ n.jsx("button", { type: "button", disabled: Y >= he - 1, onClick: () => ce((Z) => Math.min(he - 1, Z + 1)), children: "下一页 ›" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "planning-week-legend", children: M === "reservation" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
        J.map((Z, Me) => Z ? /* @__PURE__ */ n.jsxs("button", { type: "button", className: Z === s.localDate ? "planning-week-day-header today" : "planning-week-day-header", onClick: () => W(Z), "aria-label": `聚焦到 ${jt(`${Z}T12:00:00+08:00`, { month: "long", day: "numeric", weekday: "long" })} 的单日视图`, children: [
          /* @__PURE__ */ n.jsx("span", { children: je[F.indexOf(Z)] }),
          /* @__PURE__ */ n.jsx("strong", { children: Number(Z.slice(8, 10)) }),
          /* @__PURE__ */ n.jsxs("small", { children: [
            v.get(Z)?.length || 0,
            " 项"
          ] })
        ] }, Z) : /* @__PURE__ */ n.jsx("div", { className: "planning-week-day-header empty-slot", "aria-hidden": "true" }, `empty-${Me}`))
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "planning-week-body", style: { gridTemplateColumns: y }, onPointerDown: (Z) => {
        Z.target.closest(".planning-week-block") || C(null);
      }, children: [
        /* @__PURE__ */ n.jsx("div", { className: "planning-week-axis", style: { height: ye }, children: Te.map((Z) => /* @__PURE__ */ n.jsxs("span", { style: { top: (Z - $) * me }, children: [
          String(Z).padStart(2, "0"),
          ":00"
        ] }, Z)) }),
        J.map((Z, Me) => {
          if (!Z) return /* @__PURE__ */ n.jsx("div", { className: "planning-week-track empty-slot", style: { height: ye }, "aria-hidden": "true" }, `empty-${Me}`);
          const ge = h.get(Z) || [];
          return /* @__PURE__ */ n.jsx("div", { className: Z === s.localDate ? "planning-week-track today" : "planning-week-track", style: { height: ye }, children: ge.map(({ item: te, lane: Dt, laneCount: tt }) => {
            const ct = Yh(te, $, I, me);
            if (!ct) return null;
            const ia = 100 / tt, ua = te.kind === "reservation" && te.reservationStatus === "预期", Vt = te.kind === "reservation" && te.reservationStatus === "已确认", ut = !!(te.reservationId && (ua || Vt)), ea = !!(ua && N === te.reservationId), ft = !!(ut && (b === te.id || ea)), sa = te.reservationId ? x[te.reservationId] : void 0, Ol = !!(m || te.blockerText || te.stateClass === "paused");
            return /* @__PURE__ */ n.jsxs(
              "article",
              {
                className: `planning-week-block ${te.kind} ${te.stateClass}${ut ? " actionable" : ""}${ft ? " action-open" : ""}`,
                tabIndex: ut ? 0 : void 0,
                role: ut ? "button" : void 0,
                "aria-expanded": ut ? ft : void 0,
                "aria-label": `${te.start_time}-${te.end_time} ${te.student}，${te.studentState}${te.zone ? `，${te.zone}` : ""}${ua ? "；移入或点击后可调整时间、确认落课" : Vt ? "；移入或点击后可调整时间、处理本次不上" : ""}`,
                onClick: (Oe) => {
                  ut && !Oe.target.closest("button") && C((cl) => cl === te.id ? null : te.id);
                },
                onKeyDown: (Oe) => {
                  ut && (Oe.key === "Enter" || Oe.key === " " ? (Oe.preventDefault(), C((cl) => cl === te.id ? null : te.id)) : Oe.key === "Escape" && (Oe.preventDefault(), C(null)));
                },
                style: { top: ct.top, height: ct.height, left: `calc(${Dt * ia}% + 4px)`, width: `calc(${ia}% - 8px)` },
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
                  ut && /* @__PURE__ */ n.jsxs("div", { className: "planning-week-inline-action", onClick: (Oe) => Oe.stopPropagation(), children: [
                    /* @__PURE__ */ n.jsx("div", { className: "planning-week-inline-buttons", children: ua ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", disabled: m, onClick: () => {
                        C(null), _({ operation: "reservation_update", reservationId: te.reservationId, date: te.date, time: te.start_time, duration: te.duration, zone: te.zone || "", note: te.note || "" });
                      }, children: "调时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary", disabled: Ol, "aria-busy": ea, onClick: () => {
                        const Oe = d(te.reservationId);
                        Oe && typeof Oe.then == "function" && Oe.finally(() => C(null));
                      }, children: ea ? "确认中…" : m ? "处理中…" : te.stateClass === "paused" ? "学生已暂停" : te.blockerText ? "暂不能确认" : "确认落课" })
                    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "course-move", onClick: () => _({ operation: "course_move", student: te.student, fromDate: te.date, fromTime: te.start_time, toDate: te.date, toTime: te.start_time, duration: te.duration }), children: "调时间" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "danger", onClick: () => _({ operation: "course_cancel", student: te.student, date: te.date, time: te.start_time }), children: "本次不上" }),
                      /* @__PURE__ */ n.jsx("button", { type: "button", className: "quiet-danger", disabled: m, onClick: () => {
                        const Oe = f(te.reservationId);
                        Oe && typeof Oe.then == "function" && Oe.finally(() => C(null));
                      }, children: "取消预留" })
                    ] }) }),
                    (te.blockerText || sa) && /* @__PURE__ */ n.jsx(Ml, { ok: !!sa?.ok, text: sa?.text || te.blockerText || "" })
                  ] })
                ]
              },
              te.id
            );
          }) }, Z);
        })
      ] })
    ] }) }) : /* @__PURE__ */ n.jsx(ha, { title: M === "reservation" ? "这一周没有临时预留" : "这一周没有正式固定课", text: M === "reservation" ? "可以从学生资料或 AI 操作中新增预留。" : "正式固定课来自固定模板，确认后再生成正式课程。", compact: !0 })
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
function Ig({ item: s, onInspect: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, onRetryPrev: x, retryingId: M, feedback: j }) {
  const b = ["completed", "cancelled", "已完成", "已取消"].includes(s.status), C = M === s.id, D = s.retry ? "retry" : s.start_at ? "timed" : s.deadline_at ? "deadline" : "fuzzy", E = Date.now(), L = s.deadline_at ? new Date(s.deadline_at).getTime() : null, Y = L != null ? Math.ceil((L - E) / 864e5) : null, ce = s.retry?.current_candidate_date || null;
  return /* @__PURE__ */ n.jsxs(
    "article",
    {
      className: `affair-card ${D}${b ? " closed" : ""}`,
      "data-item-id": s.id,
      tabIndex: 0,
      role: "button",
      onClick: (ee) => {
        ee.target.closest("button") || o(s, ee.currentTarget);
      },
      onKeyDown: (ee) => {
        ee.key === "Enter" && (ee.preventDefault(), o(s, ee.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "affair-card-when", children: [
          D === "timed" && s.start_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: Lt(s.start_at) }),
            /* @__PURE__ */ n.jsx("span", { children: jt(s.start_at, { month: "numeric", day: "numeric", weekday: "short" }) })
          ] }),
          D === "deadline" && s.deadline_at && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx("strong", { children: jt(s.deadline_at, { month: "numeric", day: "numeric" }) }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              "截止",
              Y != null && !b ? ` · ${Y >= 0 ? `剩 ${Y} 天` : `已过 ${-Y} 天`}` : ""
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
            /* @__PURE__ */ n.jsx(_i, { value: s.status }),
            s.note ? /* @__PURE__ */ n.jsx("em", { children: s.note }) : null,
            s.next_prompt_at ? /* @__PURE__ */ n.jsx("em", { children: `提醒 ${jt(s.next_prompt_at, { month: "numeric", day: "numeric" })} ${Lt(s.next_prompt_at)}` }) : null
          ] }),
          D === "retry" && s.retry?.weekdays?.length ? /* @__PURE__ */ n.jsx("span", { className: "affair-candidates", children: s.retry.weekdays.map((ee) => /* @__PURE__ */ n.jsx("i", { children: Wg[ee] || ee }, ee)) }) : null,
          j ? /* @__PURE__ */ n.jsx(Ml, { ok: j.ok, text: j.text }) : null,
          j?.undo && x ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!M, onClick: () => {
            x(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "affair-card-actions", children: !b && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do primary", disabled: !!M || j?.ok, onClick: () => f?.("affairComplete", s), children: j?.ok ? "已完成" : "完成" }),
          s.retry && N ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", disabled: !!M || !!j?.ok, "aria-busy": C, onClick: () => {
            N(s);
          }, children: C ? "处理中…" : j?.buttonLabel || "没约上" }) : _ ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do secondary", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => _(`把「${s.title}」（${s.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "affair-do quiet", onClick: () => d({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消" })
        ] }) })
      ]
    }
  );
}
function Pg({ onPrepare: s, onQuick: o, onAskAi: d, onInspect: f, onRetry: _, onRetryPrev: N, retryingId: x, feedback: M, refreshKey: j, observedAt: b, onOpenDay: C, localDate: D }) {
  const [E, L] = z.useState("pending"), [Y, ce] = z.useState("list"), [ee, W] = z.useState(() => Nn("affairs-month")), [je, F] = z.useState(""), le = z.useCallback((m) => {
    Qe("api/affairs-month" + (m ? "?fresh=1" : "")).then((v) => {
      if (!v || !Array.isArray(v.affairs) || !Array.isArray(v.pending)) return;
      const V = {
        affairs: v.affairs.map((h) => ({ ...h, domain: "affair" })),
        pending: v.pending.map((h) => ({ ...h, domain: "affair" })),
        month: String(v.month || "")
      };
      W(V), Ei("affairs-month", V), F("");
    }).catch(() => {
    });
  }, []);
  z.useEffect(() => {
    le(!ee);
  }, [le]), z.useEffect(() => {
    j > 0 && le(!0);
  }, [j]), z.useEffect(() => {
    b && ee && le(!1);
  }, [b, le]);
  const pe = ee?.pending ?? [], he = ee?.affairs ?? [], J = /* @__PURE__ */ new Set(["completed", "cancelled", "已完成", "已取消"]), H = he.filter((m) => !J.has(m.status)).sort((m, v) => String(Fe(m) || "").localeCompare(String(Fe(v) || ""))), ae = he.filter((m) => J.has(m.status)).sort((m, v) => String(Fe(v) || "").localeCompare(String(Fe(m) || ""))), K = ae.filter((m) => !["cancelled", "已取消"].includes(m.status)).length, Q = ee?.month ? `${ee.month}-01..${ee.month}-01` : "", be = { pending: pe, scheduled: H, closed: ae }[E], Ee = {
    pending: { title: "没有待处理事务", text: "当前队列没有积压。" },
    scheduled: { title: "暂无已安排事务", text: "本月没有进行中的事务。" },
    closed: { title: "暂无完成记录", text: "结束后的事务会归档到这里。" }
  }[E];
  function _e(m, v) {
    const V = he.filter((h) => Ni(h) === m);
    C(m, V, v);
  }
  return /* @__PURE__ */ n.jsxs("div", { className: "view-stack", children: [
    /* @__PURE__ */ n.jsx(En, { eyebrow: `事务 · 本月 ${ee?.month?.slice(5) || ""}`, title: "办事队列", description: `这个月办了 ${K} 件、取消 ${ae.length - K} 件，进行中 ${H.length} 件。点日历上的任何一天，看那天的安排。` }),
    je && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "事务数据读取失败", text: je }),
    !ee && /* @__PURE__ */ n.jsx(xr, {}),
    ee && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "affairs-toolbar", children: [
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "事务状态",
            value: E,
            onChange: (m) => L(m),
            items: [
              { id: "pending", label: "待处理", count: pe.length },
              { id: "scheduled", label: "已安排", count: H.length },
              { id: "closed", label: "已完成·已取消", count: ae.length }
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          Yu,
          {
            label: "视图切换",
            value: Y,
            onChange: (m) => ce(m),
            items: [{ id: "list", label: "列表" }, { id: "calendar", label: "日历" }]
          }
        )
      ] }),
      Y === "calendar" ? /* @__PURE__ */ n.jsx(Qh, { items: he, range: Q, localDate: D ?? ee.month + "-01", onOpenDay: _e }) : /* @__PURE__ */ n.jsx("div", { children: be.length ? be.map((m) => /* @__PURE__ */ n.jsx(Ig, { item: m, onInspect: f, onPrepare: s, onQuick: o, onAskAi: d, onRetry: _, onRetryPrev: N, retryingId: x, feedback: M[m.id] }, m.id)) : /* @__PURE__ */ n.jsx(ha, { title: Ee.title, text: Ee.text }) })
    ] })
  ] });
}
function ev({ pending: s, students: o, preset: d, aiDraft: f, preview: _, busy: N, onPreview: x, onAiPreview: M, onCommit: j, onCommitBatch: b, onClear: C, onClose: D }) {
  const [E, L] = z.useState(d?.operation || "course_move"), [Y, ce] = z.useState(d?.affairKind || "timed"), [ee, W] = z.useState(d?.student || ""), [je, F] = z.useState(d?.duration || ""), [le, pe] = z.useState([
    { operation: "course_move" },
    { operation: "course_move" }
  ]);
  z.useEffect(() => {
    d?.operation && L(d.operation), d?.affairKind && ce(d.affairKind), d?.student && W(d.student), d?.duration && F(d.duration);
  }, [d]);
  function he(H) {
    H.preventDefault();
    const ae = new FormData(H.currentTarget), K = { operation: E };
    for (const [Q, P] of ae.entries())
      Q !== "operation" && String(P).trim() && (K[Q] = P);
    K.duration && (K.duration = Number(K.duration)), K.minutes !== void 0 && (K.minutes = Number(K.minutes)), K.expectedVersion && (K.expectedVersion = Number(K.expectedVersion)), E === "course_plan" && (K.moves = le.map((Q) => ({ ...Q, duration: Q.duration ? Number(Q.duration) : void 0 }))), x(K);
  }
  function J(H, ae, K) {
    pe((Q) => Q.map((P, be) => be === H ? { ...P, [ae]: K } : P));
  }
  return /* @__PURE__ */ n.jsxs("div", { className: d ? "view-stack action-stack preset-open" : "view-stack action-stack", children: [
    /* @__PURE__ */ n.jsx(lv, { initialDraft: f, preview: _, busy: N, onPreview: M, onCommit: j, onCommitBatch: b, onClear: C, onClose: D }),
    /* @__PURE__ */ n.jsxs("details", { className: "manual-operations", open: !!d, children: [
      /* @__PURE__ */ n.jsxs("summary", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: "精确表单" }),
        /* @__PURE__ */ n.jsx("span", { children: "需要手动指定字段时再打开" })
      ] }),
      /* @__PURE__ */ n.jsxs("section", { className: "action-layout", children: [
        /* @__PURE__ */ n.jsxs("form", { className: "panel operation-form", onSubmit: he, children: [
          /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
            /* @__PURE__ */ n.jsx("span", { children: "操作类型" }),
            /* @__PURE__ */ n.jsxs("select", { name: "operation", value: E, onChange: (H) => {
              L(H.target.value), C();
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
          E === "course_move" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", placeholder: "例如：叶梓程", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "duration", label: "新时长（可选）", type: "number", placeholder: "分钟", defaultValue: d?.duration }),
            /* @__PURE__ */ n.jsx(re, { name: "fromDate", label: "原日期", type: "date", defaultValue: d?.fromDate, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "fromTime", label: "原时间", type: "time", defaultValue: d?.fromTime, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "toDate", label: "新日期", type: "date", defaultValue: d?.toDate, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "toTime", label: "新时间", type: "time", defaultValue: d?.toTime, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          E === "course_cancel" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", placeholder: "例如：董同学", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "课程日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "课程时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "reason", label: "取消原因（可选）", defaultValue: d?.reason })
          ] }),
          E === "course_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: ee,
                  onChange: (H) => {
                    const ae = o.find((K) => K.name === H.target.value);
                    W(H.target.value), ae && F(ae.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((H) => H.status === "在读").map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.name, children: [
                      H.name,
                      " · ",
                      H.default_duration,
                      " 分钟"
                    ] }, H.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: je, onChange: (H) => F(H.target.value), required: !0 })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsxs("label", { className: "exception-toggle full", children: [
              /* @__PURE__ */ n.jsx("input", { name: "overrideAvailability", type: "checkbox", value: "true", defaultChecked: !!d?.overrideAvailability }),
              /* @__PURE__ */ n.jsxs("span", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "这是已明确的单次时间" }),
                /* @__PURE__ */ n.jsx("small", { children: "只覆盖长期候选时间，不修改长期资料；通勤会提示询问，不锁定落课。" })
              ] })
            ] })
          ] }),
          E === "reservation_add" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "学生" }),
              /* @__PURE__ */ n.jsxs(
                "select",
                {
                  name: "student",
                  required: !0,
                  value: ee,
                  onChange: (H) => {
                    const ae = o.find((K) => K.name === H.target.value);
                    W(H.target.value), ae && F(ae.default_duration);
                  },
                  children: [
                    /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择在读学生" }),
                    o.filter((H) => H.status === "在读").map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.name, children: [
                      H.name,
                      " · ",
                      H.default_duration,
                      " 分钟"
                    ] }, H.name))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "时长" }),
              /* @__PURE__ */ n.jsx("input", { name: "duration", type: "number", min: "1", max: "480", value: je, onChange: (H) => F(H.target.value) })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预留不会进入正式课程事件；确认后才转成正式课。" })
          ] }),
          E === "reservation_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "预留日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "time", label: "预留时间", type: "time", defaultValue: d?.time, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "duration", label: "时长", type: "number", defaultValue: d?.duration, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "zone", label: "片区（可选）", defaultValue: d?.zone }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note })
          ] }),
          ["reservation_confirm", "reservation_cancel"].includes(E) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "reservationId", label: "预留ID", placeholder: "res_…", defaultValue: d?.reservationId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "确认预留即确认这个具体日期与时间：出游、重复课程和老师冲突仍会校验；通勤只提示询问。" })
          ] }),
          E === "zone_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "zone", label: "片区", placeholder: "例如：城西", defaultValue: d?.zone === "未分区" ? "" : d?.zone, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "boundaryZones", label: "相邻片区（可选）", placeholder: "多个片区用顿号分隔", defaultValue: d?.boundaryZones }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "先预演，确认后写入学生片区；不会自动改动课程。" })
          ] }),
          E === "availability_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((H) => /* @__PURE__ */ n.jsx("option", { value: H, children: H }, H))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "windows", label: "可用时间", placeholder: "14:00-16:00、19:00-21:00", defaultValue: d?.windows, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "同一星期的原有窗口会被这次设置整体替换。" })
          ] }),
          E === "availability_clear" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "student", label: "学生", defaultValue: d?.student, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "星期" }),
              /* @__PURE__ */ n.jsxs("select", { name: "weekday", defaultValue: d?.weekday || "", required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择星期" }),
                ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((H) => /* @__PURE__ */ n.jsx("option", { value: H, children: H }, H))
              ] })
            ] })
          ] }),
          E === "commute_set" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "fromStudent", label: "出发学生", defaultValue: d?.fromStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "toStudent", label: "到达学生", defaultValue: d?.toStudent, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "minutes", label: "通勤分钟", type: "number", defaultValue: d?.minutes, required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "transport", label: "交通方式", defaultValue: d?.transport || "driving", required: !0 }),
            /* @__PURE__ */ n.jsx(re, { name: "note", label: "备注（可选）", defaultValue: d?.note }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "通勤是有方向的；反向路线需要单独记录。" })
          ] }),
          E === "quarantine_overdue" && /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "只把过期“待上课”转成“待确认”，不会擅自判断课程已完成或已取消。" }),
          E === "course_review_resolve" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "courseId", label: "课程ID", type: "number", defaultValue: d?.courseId || d?.id, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "复核结果" }),
              /* @__PURE__ */ n.jsxs("select", { name: "resolution", defaultValue: d?.resolution || "done", children: [
                /* @__PURE__ */ n.jsx("option", { value: "done", children: "已完成" }),
                /* @__PURE__ */ n.jsx("option", { value: "cancelled", children: "未上课 / 取消" })
              ] })
            ] })
          ] }),
          E === "course_day_complete" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "date", label: "完成日期", type: "date", defaultValue: d?.date, required: !0 }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "预演会列出当日待上课程；确认提交后写入本地课表、导出工作簿并同步飞书日历。" })
          ] }),
          E === "course_plan" && /* @__PURE__ */ n.jsxs("div", { className: "plan-builder full", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "plan-builder-head", children: [
              /* @__PURE__ */ n.jsxs("div", { children: [
                /* @__PURE__ */ n.jsx("strong", { children: "批量调课" }),
                /* @__PURE__ */ n.jsx("span", { children: "所有操作会顺序预演并原子提交" })
              ] }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", onClick: () => pe((H) => [...H, { operation: "course_move" }]), children: "添加一项" })
            ] }),
            le.map((H, ae) => /* @__PURE__ */ n.jsxs("div", { className: "plan-move-row", children: [
              /* @__PURE__ */ n.jsx("span", { className: "plan-index", children: ae + 1 }),
              /* @__PURE__ */ n.jsxs("select", { value: H.student || "", onChange: (K) => {
                const Q = o.find((P) => P.name === K.target.value);
                J(ae, "student", K.target.value), Q && J(ae, "duration", Q.default_duration);
              }, required: !0, children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "学生" }),
                o.filter((K) => K.status === "在读").map((K) => /* @__PURE__ */ n.jsx("option", { value: K.name, children: K.name }, K.name))
              ] }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: H.fromDate || "", onChange: (K) => J(ae, "fromDate", K.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: H.fromTime || "", onChange: (K) => J(ae, "fromTime", K.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("span", { className: "plan-arrow", children: "→" }),
              /* @__PURE__ */ n.jsx("input", { type: "date", value: H.toDate || "", onChange: (K) => J(ae, "toDate", K.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { type: "time", value: H.toTime || "", onChange: (K) => J(ae, "toTime", K.target.value), required: !0 }),
              /* @__PURE__ */ n.jsx("input", { className: "duration-input", type: "number", min: "1", max: "480", value: H.duration || "", onChange: (K) => J(ae, "duration", K.target.value), placeholder: "分钟" }),
              /* @__PURE__ */ n.jsx("button", { type: "button", className: "plan-remove", disabled: le.length <= 2, onClick: () => pe((K) => K.filter((Q, P) => P !== ae)), children: "×" })
            ] }, ae))
          ] }),
          E === "affair_create" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(re, { name: "title", label: "事务标题", defaultValue: d?.title, required: !0 }),
            /* @__PURE__ */ n.jsxs("label", { className: "field", children: [
              /* @__PURE__ */ n.jsx("span", { children: "类型" }),
              /* @__PURE__ */ n.jsxs("select", { name: "affairKind", value: Y, onChange: (H) => ce(H.target.value), children: [
                /* @__PURE__ */ n.jsx("option", { value: "timed", children: "定时活动" }),
                /* @__PURE__ */ n.jsx("option", { value: "deadline", children: "限期任务" }),
                /* @__PURE__ */ n.jsx("option", { value: "fuzzy", children: "时间窗口" }),
                /* @__PURE__ */ n.jsx("option", { value: "retry", children: "预约重试" })
              ] })
            ] }),
            Y === "timed" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "startDate", label: "开始日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "startTime", label: "开始时间", type: "time", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "duration", label: "预计时长（可选）", type: "number", placeholder: "分钟" })
            ] }),
            Y === "deadline" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "deadlineDate", label: "截止日期", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "deadlineTime", label: "截止时间", type: "time", required: !0 })
            ] }),
            Y === "fuzzy" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(re, { name: "windowStart", label: "窗口开始", type: "date", required: !0 }),
              /* @__PURE__ */ n.jsx(re, { name: "windowEnd", label: "窗口结束（可选）", type: "date" })
            ] }),
            Y === "retry" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
          E === "affair_update" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.id, children: [
                  H.title,
                  " · ",
                  H.id
                ] }, H.id))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "title", label: "新标题（可选）", defaultValue: d?.title }),
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
          E === "affair_retry_prev" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.id, children: [
                  H.title,
                  " · ",
                  H.id
                ] }, H.id))
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion }),
            /* @__PURE__ */ n.jsx("div", { className: "field-note full", children: "撤销一次“没约上”推进，恢复上一个候选日；只对预约重试型事务有效。" })
          ] }),
          ["affair_complete", "affair_retry_next", "affair_cancel"].includes(E) && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "field full", children: [
              /* @__PURE__ */ n.jsx("span", { children: "事务" }),
              /* @__PURE__ */ n.jsxs("select", { name: "id", required: !0, defaultValue: d?.id || "", children: [
                /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: "选择待处理事务" }),
                s.map((H) => /* @__PURE__ */ n.jsxs("option", { value: H.id, children: [
                  H.title,
                  " · ",
                  H.id
                ] }, H.id))
              ] })
            ] }),
            E === "affair_retry_next" && /* @__PURE__ */ n.jsx(re, { name: "expectedVersion", label: "当前版本（可选）", type: "number", placeholder: "用于并发保护", defaultValue: d?.expectedVersion })
          ] }),
          E === "calendar_sync" && /* @__PURE__ */ n.jsx(re, { name: "week", label: "所在周日期（可选）", type: "date", defaultValue: d?.week }),
          /* @__PURE__ */ n.jsxs("div", { className: "form-note full", children: [
            /* @__PURE__ */ n.jsx("strong", { children: "安全边界" }),
            /* @__PURE__ */ n.jsx("span", { children: "调课只调用 move；写操作先 dry-run；正式提交后自动回读并以 --prune 同步日历。" })
          ] }),
          /* @__PURE__ */ n.jsx("button", { className: "primary-button full", type: "submit", disabled: N, children: N ? "正在处理…" : "生成预演" })
        ] }, JSON.stringify(d || { operation: E })),
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
                j();
              }, disabled: N, children: N ? "正在提交…" : "确认执行此预演" })
            ] }),
            /* @__PURE__ */ n.jsx(Zh, { preview: _, onClose: D })
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
function av({ preview: s, busy: o, onCommit: d, onCommitBatch: f, onClose: _ }) {
  const N = s.operation || "", x = s.input || {}, M = Object.entries(x).filter(([C, D]) => D != null && D !== "" && !C.startsWith("_")), j = s.result?.affected_dates, b = s.batchItems ?? [];
  return b.length ? /* @__PURE__ */ n.jsxs("div", { className: "preview-body", children: [
    /* @__PURE__ */ n.jsxs("div", { className: s.committed ? s.ok ? "preview-status pass" : "preview-status fail" : "preview-status pass", children: [
      /* @__PURE__ */ n.jsx("i", {}),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("strong", { children: s.committed ? s.ok ? "批量执行完成" : "批量执行有失败" : `批量方案 · ${b.length} 项` }),
        /* @__PURE__ */ n.jsx("span", { children: s.summary || s.message })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "batch-list", children: b.map((C, D) => {
      const E = s.committed ? { text: C.resultOk ? "已执行" : "失败", cls: C.resultOk ? "ok" : "error" } : { text: C.canCommit ? "可执行" : "未通过", cls: C.canCommit ? "ok" : "muted" };
      return /* @__PURE__ */ n.jsxs("div", { className: "batch-item", children: [
        /* @__PURE__ */ n.jsx("span", { className: "batch-index", children: D + 1 }),
        /* @__PURE__ */ n.jsxs("div", { className: "batch-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: Dh[C.operation] || C.operation }),
          /* @__PURE__ */ n.jsx("span", { children: C.summary }),
          C.message && /* @__PURE__ */ n.jsx("small", { children: C.message })
        ] }),
        /* @__PURE__ */ n.jsx("span", { className: `batch-flag ${E.cls}`, children: E.text })
      ] }, C.token);
    }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "action-outcome-actions", children: [
      !s.committed && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: o || !b.some((C) => C.canCommit), onClick: () => {
        f?.() ?? Promise.resolve();
      }, children: o ? "正在提交…" : `全部执行（${b.filter((C) => C.canCommit).length} 项）` }),
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
      N && /* @__PURE__ */ n.jsx("span", { className: "preview-op-badge", children: Dh[N] || N }),
      M.length > 0 && /* @__PURE__ */ n.jsx("dl", { className: "preview-fields", children: M.map(([C, D]) => /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("dt", { children: tv[C] || C }),
        /* @__PURE__ */ n.jsx("dd", { children: String(D) })
      ] }, C)) }),
      j && j.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "preview-affected", children: [
        "受影响日期：",
        j.map((C) => /* @__PURE__ */ n.jsx("span", { children: C.slice(5) }, C))
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
function lv({ initialDraft: s, preview: o, busy: d, onPreview: f, onCommit: _, onCommitBatch: N, onClear: x, onClose: M }) {
  const j = { role: "assistant", text: "直接告诉我哪个同学要做什么。信息不够我会追问，信息齐了就生成预演，不会直接写入。" }, b = [
    "把董同学周日的课调到下周四晚上七点",
    "给叶梓程下周三下午预留一节 45 分钟的课",
    "取消董同学周日 13:40 的课，家长请假",
    "周三晚上八点提醒我抢补牙复查号"
  ], [C, D] = z.useState([j]), [E, L] = z.useState(""), [Y, ce] = z.useState(!1), [ee, W] = z.useState(""), [je, F] = z.useState([]), [le, pe] = z.useState(!1), he = z.useRef(null), J = typeof window < "u" && !!(window.webkitSpeechRecognition || window.SpeechRecognition);
  function H() {
    const P = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!P) return;
    if (le) {
      he.current?.stop();
      return;
    }
    const be = new P();
    be.lang = "zh-CN", be.interimResults = !1, be.continuous = !1, be.onresult = (Ee) => {
      const _e = Array.from(Ee.results).map((m) => m[0].transcript).join("").trim();
      _e && L((m) => (m ? `${m} ` : "") + _e);
    }, be.onend = () => pe(!1), be.onerror = () => pe(!1), he.current = be, pe(!0), be.start();
  }
  const ae = z.useRef(dr());
  z.useEffect(() => () => ae.current.invalidate(), []), z.useEffect(() => {
    s.nonce && (ae.current.invalidate(), ce(!1), L(s.text));
  }, [s.nonce, s.text]);
  function K() {
    ae.current.invalidate(), ce(!1), D([j]), L(""), W(""), F([]), x();
  }
  async function Q(P) {
    const be = (P ?? E).trim();
    if (!be || Y) return;
    const Ee = ae.current.begin(), _e = C.slice(-10);
    D((m) => [...m, { role: "user", text: be }]), L(""), F([]), ce(!0), W(""), x();
    try {
      const m = await Qe("api/ai/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: be, history: _e })
      });
      if (!ae.current.isCurrent(Ee)) return;
      if (!m.ok) throw new Error(m.error || "AI 没有生成方案");
      F(m.status === "need_clarification" ? m.options ?? [] : []), D((v) => [...v, { role: "assistant", text: m.reply || "方案已经生成，请检查右侧预演。" }]), m.status === "ready" && m.batch && m.previews?.length ? f({
        ok: !0,
        batch: !0,
        summary: m.reply,
        message: m.reply,
        batchItems: m.previews.map((v) => ({ operation: v.operation, token: v.token, summary: v.summary, canCommit: v.canCommit, message: v.message }))
      }) : m.status === "ready" && m.preview && f({
        ok: !0,
        token: m.preview.token,
        expiresAt: m.preview.expiresAt,
        summary: m.preview.summary,
        canCommit: m.preview.canCommit,
        message: m.preview.message,
        result: m.preview.result,
        operation: m.operation,
        input: m.input
      });
    } catch (m) {
      if (!ae.current.isCurrent(Ee)) return;
      const v = m.message || "AI 操作失败";
      W(v), D((V) => [...V, { role: "assistant", text: `这次没有生成预演：${v}` }]);
    } finally {
      ae.current.isCurrent(Ee) && ce(!1);
    }
  }
  return /* @__PURE__ */ n.jsxs("section", { className: "panel ai-workspace", "aria-label": "AI 操作台", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "ai-workspace-head", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: "自然语言操作台" }),
        /* @__PURE__ */ n.jsx("h2", { children: "说一句就行。" }),
        /* @__PURE__ */ n.jsx("span", { children: "排课、调课、取消、预留和事务都可以直接说。" })
      ] }),
      /* @__PURE__ */ n.jsx("button", { className: "row-action-button", type: "button", onClick: K, disabled: Y, children: "清空对话" })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "ai-example-row", "aria-label": "操作示例", children: b.map((P) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => L(P), children: P }, P)) }),
    /* @__PURE__ */ n.jsxs("div", { className: "ai-workspace-grid", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "ai-conversation-column", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "ai-thread embedded", "aria-live": "polite", children: [
          C.map((P, be) => /* @__PURE__ */ n.jsx("div", { className: `ai-bubble ${P.role}`, children: P.text }, be)),
          Y && /* @__PURE__ */ n.jsx("div", { className: "ai-bubble assistant thinking", children: "正在读取课表、预留、可用时间和通勤信息…" })
        ] }),
        ee && /* @__PURE__ */ n.jsx(Dl, { tone: "error", title: "没有生成方案", text: ee }),
        je.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "ai-option-row", role: "group", "aria-label": "快捷回答", children: je.map((P) => /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => {
          Q(P);
        }, children: P }, P)) }),
        /* @__PURE__ */ n.jsxs("div", { className: "ai-composer workspace-composer", children: [
          /* @__PURE__ */ n.jsx(
            "textarea",
            {
              value: E,
              onChange: (P) => L(P.target.value),
              onKeyDown: (P) => {
                P.key === "Enter" && !P.shiftKey && (P.preventDefault(), Q());
              },
              placeholder: "例如：把董同学这周日的课调到下周四晚上七点",
              rows: 3
            }
          ),
          J && /* @__PURE__ */ n.jsx("button", { type: "button", className: le ? "ai-mic listening" : "ai-mic", onClick: H, "aria-label": le ? "停止语音输入" : "语音输入", title: "语音输入", children: le ? "● 录音中" : "🎙" }),
          /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: () => {
            Q();
          }, disabled: !E.trim() || Y, children: Y ? "正在规划…" : "让 AI 处理" })
        ] }),
        /* @__PURE__ */ n.jsx("p", { className: "ai-footnote", children: "Enter 发送，Shift + Enter 换行。AI 只生成预演，真实写入仍需你确认。" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "ai-result-column", children: [
        /* @__PURE__ */ n.jsx(Yt, { title: "AI 预演", meta: o?.token ? `令牌 ${o.token.slice(0, 8)}…` : "等待指令" }),
        !o && /* @__PURE__ */ n.jsx(ha, { title: "等你说一句", text: "我会自动补齐默认时长、换算相对日期，并把缺失信息一次问清。" }),
        o && /* @__PURE__ */ n.jsx(av, { preview: o, busy: d, onCommit: _, onCommitBatch: N, onClose: M })
      ] })
    ] })
  ] });
}
function nv({ view: s, dashboard: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, onRetryPrev: x, retryingId: M, affairFeedback: j, onSync: b }) {
  if (s.kind === "system") return /* @__PURE__ */ n.jsx(cv, { dashboard: o, onSync: b, embedded: !0 });
  const C = s.kind === "day" ? s.items ? [...s.items].sort((D, E) => String(Fe(D) || "").localeCompare(String(Fe(E) || ""))) : o.items.filter((D) => Ni(D) === s.date).sort((D, E) => String(Fe(D) || "").localeCompare(String(Fe(E) || ""))) : [s.item];
  return C.length ? /* @__PURE__ */ n.jsx("div", { className: "context-item-list", children: C.map((D) => /* @__PURE__ */ n.jsx(
    iv,
    {
      item: D,
      onPrepare: d,
      onQuick: f,
      onAskAi: _,
      onRetry: N,
      onRetryPrev: x,
      retryingId: M,
      feedback: D.domain === "affair" ? j[D.id] : void 0
    },
    D.id
  )) }) : /* @__PURE__ */ n.jsx(ha, { title: "当天没有安排", text: "当前时间范围内没有课程或事务。" });
}
function iv({ item: s, onPrepare: o, onQuick: d, onAskAi: f, onRetry: _, onRetryPrev: N, retryingId: x, feedback: M }) {
  const j = Fe(s), b = ["completed", "cancelled", "已完成", "已取消"].includes(s.status);
  return /* @__PURE__ */ n.jsxs("section", { className: `context-item-card ${_n(s)}${Sn(s) ? " temporary" : ""}`, "data-item-id": s.id, children: [
    /* @__PURE__ */ n.jsxs("header", { children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("span", { className: `context-domain ${s.domain}`, children: s.domain === "course" ? "课程" : "事务" }),
        /* @__PURE__ */ n.jsx("time", { children: j ? `${jt(j, { month: "long", day: "numeric", weekday: "short" })} ${Lt(j)}` : "时间待定" })
      ] }),
      /* @__PURE__ */ n.jsx(_i, { value: s.status })
    ] }),
    /* @__PURE__ */ n.jsx("h3", { children: s.title }),
    /* @__PURE__ */ n.jsx("p", { children: s.domain === "course" ? `${s.duration || "—"} 分钟 · ${s.note || "常规课程"}` : s.note || s.window_label || "暂无补充说明" }),
    M && /* @__PURE__ */ n.jsx(Ml, { ok: M.ok, text: M.text }),
    M?.undo && N ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!x, onClick: () => {
      N(s);
    }, children: "撤销推进" }) : null,
    !b && /* @__PURE__ */ n.jsx("div", { className: "context-item-actions", children: s.domain === "course" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", "data-ui-role": "button", "data-ui-variant": "primary", "data-ui-action": "course-move", onClick: () => f?.(`把${s.title} ${s.start_at?.slice(5, 10)} ${s.start_at?.slice(11, 16)} 的这节课调一下时间`), children: "调时间" }),
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", disabled: !!x, onClick: () => d?.("courseCancel", s), children: "本次不上" })
    ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", disabled: !!x || M?.ok, onClick: () => d?.("affairComplete", s), children: M?.ok ? "已完成" : "完成" }),
      s.retry ? /* @__PURE__ */ n.jsx("button", { type: "button", className: M?.ok ? "row-action-button quick-success" : "row-action-button", disabled: !!x || !!M?.ok, onClick: () => {
        _(s);
      }, children: x === s.id ? "处理中…" : M?.buttonLabel || "没约上" }) : f ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", "data-ui-role": "button", "data-ui-variant": "secondary", "data-ui-action": "affair-adjust", onClick: () => f(`把「${s.title}」（${s.id}）调整一下`), children: "调时间" }) : /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button quiet-danger", onClick: () => o({ operation: "affair_cancel", id: s.id, expectedVersion: s.version }), children: "取消…" })
    ] }) })
  ] });
}
function uv() {
  const [s, o] = z.useState({ loading: !0 }), d = z.useCallback(() => {
    o({ loading: !0 }), Qe("/api/versions").then((_) => o({ loading: !1, data: _ })).catch((_) => o({ loading: !1, error: _.message }));
  }, []);
  z.useEffect(() => {
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
  const [o, d] = z.useState({ loading: !0 }), f = z.useCallback(() => {
    d({ loading: !0 }), Qe("/api/calendar-health").then((M) => d({ loading: !1, data: M })).catch((M) => d({ loading: !1, error: M.message }));
  }, []);
  z.useEffect(() => {
    f();
  }, [f]);
  const _ = o.data?.diff, N = _?.toDelete ?? [], x = o.data?.inSync === !0;
  return /* @__PURE__ */ n.jsxs("div", { className: "panel wide system-list", children: [
    /* @__PURE__ */ n.jsx(Yt, { title: "飞书日历对账" }),
    o.loading ? /* @__PURE__ */ n.jsx("p", { className: "muted-note", children: "正在盘点日历差异…" }) : o.error ? /* @__PURE__ */ n.jsx(na, { label: "日历盘点", ok: !1, detail: o.error }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(na, { label: "对账结果", ok: x, detail: x ? "日历与数据库一致，无残留" : "存在差异，见下方清单" }),
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
        N.slice(0, 8).map((M, j) => /* @__PURE__ */ n.jsxs("div", { className: "calendar-diff-row", children: [
          /* @__PURE__ */ n.jsx("span", { children: M.summary }),
          /* @__PURE__ */ n.jsx("span", { className: "muted-note", children: String(M.start || "").slice(0, 16) })
        ] }, j)),
        N.length > 8 && /* @__PURE__ */ n.jsxs("p", { className: "muted-note", children: [
          "另有 ",
          N.length - 8,
          " 条待删除…"
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "row-actions", children: [
        /* @__PURE__ */ n.jsx("button", { type: "button", className: "ghost-button", onClick: f, children: "重新盘点" }),
        !x && /* @__PURE__ */ n.jsx("button", { type: "button", className: "primary-button", onClick: s, children: "打开同步操作" })
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
      onClick: (x) => {
        x.target.closest("button") || d(x.currentTarget);
      },
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), d(x.currentTarget));
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
  return /* @__PURE__ */ n.jsx("nav", { className: "workbench-nav", "aria-label": s, "data-ui": "segmented-navigation", children: o.map((N) => /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: d === N.id ? "selected" : "",
      "data-ui-role": "nav-item",
      "data-ui-id": `secondary-nav-${N.id}`,
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
function ov({ item: s, onInspect: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, retryingId: x, feedback: M }) {
  const j = ["completed", "cancelled", "已完成", "已取消", "已调课"].includes(s.status), b = !!d && !j;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${o ? "timeline-row inspectable" : "timeline-row"} contextual-action-host ${_n(s)}${Sn(s) ? " temporary" : ""}${b ? " actionable" : ""}`,
      "data-item-id": s.id,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      onClick: (C) => {
        C.target.closest("button") || o?.(s, C.currentTarget);
      },
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && o && (C.preventDefault(), o(s, C.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: `domain-dot ${s.domain}` }),
        /* @__PURE__ */ n.jsx("time", { children: Lt(Fe(s)) || "待定" }),
        /* @__PURE__ */ n.jsxs("div", { className: "row-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.domain === "course" ? `${s.duration || "—"} 分钟` : s.note || s.window_label || "事务" }),
          M && /* @__PURE__ */ n.jsx(Ml, { ok: M.ok, text: M.text })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "timeline-actions", children: /* @__PURE__ */ n.jsx(_i, { value: s.status }) }),
        b && (d || f || _) && /* @__PURE__ */ n.jsx("div", { className: "row-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: f, onAskAi: _, onRetry: N, retryingId: x, feedback: M }) })
      ]
    }
  );
}
function fv({ item: s, onInspect: o, onPrepare: d, onQuick: f, onAskAi: _, onRetry: N, onRetryPrev: x, retryingId: M, feedback: j }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `quick-pending-item contextual-action-host ${_n(s)} actionable`,
      "data-item-id": s.id,
      role: "button",
      tabIndex: 0,
      onClick: (b) => {
        b.target.closest("button") || o(s, b.currentTarget);
      },
      onKeyDown: (b) => {
        (b.key === "Enter" || b.key === " ") && (b.preventDefault(), o(s, b.currentTarget));
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "quick-pending-main", children: [
          /* @__PURE__ */ n.jsx("strong", { children: s.title }),
          /* @__PURE__ */ n.jsx("span", { children: s.window_label || (s.next_prompt_at ? `下次提醒 ${jt(s.next_prompt_at)} ${Lt(s.next_prompt_at)}` : "待处理") }),
          j && /* @__PURE__ */ n.jsx(Ml, { ok: j.ok, text: j.text }),
          j?.undo && x ? /* @__PURE__ */ n.jsx("button", { type: "button", className: "row-action-button", disabled: !!M, onClick: () => {
            x(s);
          }, children: "撤销推进" }) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-actions", children: /* @__PURE__ */ n.jsx(_i, { value: s.status }) }),
        /* @__PURE__ */ n.jsx("div", { className: "quick-pending-inline-action", children: /* @__PURE__ */ n.jsx(Vu, { item: s, onQuick: f, onAskAi: _, onRetry: N, retryingId: M, feedback: j }) })
      ]
    }
  );
}
function _i({ value: s }) {
  return /* @__PURE__ */ n.jsx("span", { className: `status ${mr(s)}`, "data-ui": "status-badge", "data-ui-state": mr(s), children: qg[s] || s });
}
function Yt({ title: s, meta: o, action: d, onAction: f, actionDisabled: _ }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "panel-heading", "data-ui": "section-heading", children: [
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("h3", { children: s }),
      o && /* @__PURE__ */ n.jsx("span", { children: o })
    ] }),
    d && /* @__PURE__ */ n.jsx("button", { type: "button", "data-ui-role": "button", "data-ui-variant": "secondary", onClick: f, disabled: _, children: d })
  ] });
}
function En({ eyebrow: s, title: o, description: d }) {
  return /* @__PURE__ */ n.jsxs("header", { className: "page-title", "data-ui": "page-title", children: [
    /* @__PURE__ */ n.jsx("p", { className: "eyebrow", children: s }),
    /* @__PURE__ */ n.jsx("h2", { children: o }),
    /* @__PURE__ */ n.jsx("p", { children: d })
  ] });
}
function re({ name: s, label: o, type: d = "text", placeholder: f, defaultValue: _, required: N = !1 }) {
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
  return /* @__PURE__ */ n.jsxs("div", { className: d ? "empty compact" : "empty", "data-ui": "empty-state", children: [
    /* @__PURE__ */ n.jsx("strong", { children: s }),
    /* @__PURE__ */ n.jsx("span", { children: o })
  ] });
}
function Dl({ tone: s, title: o, text: d }) {
  return /* @__PURE__ */ n.jsxs("div", { className: `notice ${s}`, "data-ui": "notice", "data-ui-state": s, role: s === "error" ? "alert" : "status", children: [
    /* @__PURE__ */ n.jsx("strong", { children: o }),
    /* @__PURE__ */ n.jsx("span", { children: d })
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
gr.ready();
gr.ui.resize({ height: window.innerHeight || 900 });
const Mh = document.getElementById("root");
Mh && hg.createRoot(Mh).render(/* @__PURE__ */ n.jsx(Lg, { children: /* @__PURE__ */ n.jsx(Vg, {}) }));
