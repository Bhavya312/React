import {
  get,
  useFormContext
} from "./chunk-OEZTJOQW.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@hookform/error-message/dist/index.esm.js
var e = __toESM(require_react());
var s = function(s2) {
  var t = s2.as, a = s2.errors, m = s2.name, o = s2.message, i = s2.render, l = function(e2, r) {
    if (null == e2) return {};
    var n, s3, t2 = {}, a2 = Object.keys(e2);
    for (s3 = 0; s3 < a2.length; s3++) r.indexOf(n = a2[s3]) >= 0 || (t2[n] = e2[n]);
    return t2;
  }(s2, ["as", "errors", "name", "message", "render"]), f = useFormContext(), c = get(a || f.formState.errors, m);
  if (!c) return null;
  var g = c.message, u = c.types, d = Object.assign({}, l, { children: g || o });
  return e.isValidElement(t) ? e.cloneElement(t, d) : i ? i({ message: g || o, messages: u }) : e.createElement(t || e.Fragment, d);
};
export {
  s as ErrorMessage
};
//# sourceMappingURL=@hookform_error-message.js.map
