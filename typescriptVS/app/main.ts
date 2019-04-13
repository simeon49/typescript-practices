import { Utils } from './common/utils';

function doProcess() {
    let inputDom = <HTMLInputElement>document.getElementById('hlc-input');
    let outputDom = <HTMLElement>document.getElementById('hlc-output');

    let newOutput: string = Utils.kebapStyle(inputDom.value);
    outputDom.innerText = new Date().toLocaleTimeString() + ':' + newOutput + '\n' + outputDom.innerText;
    inputDom.value = '';
} 

let btnDom = <HTMLButtonElement>document.getElementById('hlc-btn-process');
btnDom.onclick = doProcess;
