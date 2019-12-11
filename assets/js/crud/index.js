'use strict';

const DOCUMENT_BG_COLOR = 'documentBGColor';

const inputs = document.querySelectorAll('.inputWrapper input[type="range"]');
const doc = document.querySelector(":root");

let documentBGColor = null;

function refreshDocumentBGColor() {
    let index = 0;
    for (const prop in documentBGColor){
        documentBGColor[prop] = inputs[index].value;
        index++
    }
    doc.style.backgroundColor = `rgba(${
        documentBGColor.red
    },${
        documentBGColor.green
    },${
        documentBGColor.blue
    },${
        documentBGColor.alpha
    })`

    localStorage.setItem(DOCUMENT_BG_COLOR, JSON.stringify(documentBGColor))

}

for (const input of inputs){
    input.addEventListener('input', refreshDocumentBGColor);

}

window.onload = loadSaveColor;

function loadSaveColor(){
    documentBGColor = localStorage.getItem(DOCUMENT_BG_COLOR);

    if(documentBGColor){
        documentBGColor = JSON.parse(documentBGColor);
        let index = 0;
        for (const prop in documentBGColor){
            inputs[index].valueOf = documentBGColor[prop];
            index++
        }
    }else{
        documentBGColor = {
            red:inputs[0],
            green:inputs[1],
            blue:inputs[2],
            alpha:inputs[3],
        }

    }

    refreshDocumentBGColor();
}















































