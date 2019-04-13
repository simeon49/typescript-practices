"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导出变量
exports.COMPANY_NAME = "Google";
// 导出类
var ErpIndentityValidate = (function () {
    function ErpIndentityValidate() {
    }
    ErpIndentityValidate.prototype.isStaff = function (name) {
        return true;
    };
    return ErpIndentityValidate;
}());
exports.ErpIndentityValidate = ErpIndentityValidate;
exports.GoogleIndentityValidate = ErpIndentityValidate;
