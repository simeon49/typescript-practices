"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.kebapStyle = function (input) {
        console.log("kebapStyple(" + input + ")");
        return _.kebabCase(input);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map