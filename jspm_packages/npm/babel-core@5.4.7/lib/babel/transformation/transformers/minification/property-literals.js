/* */ 
"format cjs";
"use strict";

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var metadata = {
  optional: true,
  group: "builtin-trailing"
};

exports.metadata = metadata;
var Property = {
  exit: function exit(node) {
    var key = node.key;
    if (t.isLiteral(key) && t.isValidIdentifier(key.value)) {
      // "foo": "bar" -> foo: "bar"
      node.key = t.identifier(key.value);
      node.computed = false;
    }
  }
};
exports.Property = Property;