"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./common/utils");
function doProcess() {
    var inputDom = document.getElementById('hlc-input');
    var outputDom = document.getElementById('hlc-output');
    var newOutput = utils_1.Utils.kebapStyle(inputDom.value);
    outputDom.innerText = new Date().toLocaleTimeString() + ':' + newOutput + '\n' + outputDom.innerText;
    inputDom.value = '';
}
var btnDom = document.getElementById('hlc-btn-process');
btnDom.onclick = doProcess;
//# sourceMappingURL=main.js.map