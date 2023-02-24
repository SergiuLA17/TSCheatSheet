"use strict";
//
// const renderDiv = document.createElement('div');
// renderDiv.id = 'rendered-js';
//
// const createElement = document.createElement('a');
// createElement.classList.add('btn-flip');
// createElement.setAttribute('data-back', 'Back');
// createElement.setAttribute('data-front', 'Back');
// createElement.setAttribute('data-href', '../index.html');
// renderDiv.appendChild(createElement);
//
// const accordionWrapper = document.createElement('div');
// accordionWrapper.classList.add('accordionWrapper');
// createElement.appendChild(accordionWrapper);
//
// const accordionItemClose = document.createElement('div');
// accordionItemClose.classList.add('accordionItem');
// accordionItemClose.classList.add('close');
// accordionWrapper.appendChild(accordionItemClose);
//
// const accordionItemHeading = document.createElement('h2');
// accordionItemHeading.classList.add('accordionItemHeading');
// accordionItemHeading.innerHTML = 'String';
// accordionItemClose.appendChild(accordionItemHeading);
//
// const accordionItemContent = document.createElement('div');
// accordionItemContent.classList.add('accordionItemContent');
// accordionItemContent.innerHTML = 'Stringdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd';
// accordionItemHeading.appendChild(accordionItemContent);
//
//
//
// document.body.appendChild(renderDiv)
//
// document.getElementsByClassName('accordionItem');
// const accHD = document.getElementsByClassName('accordionItemHeading');
// for (let i = 0; i < accHD.length; i++) {
//     accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//     const itemClass = this.parentNode.className;
//
//     if (itemClass == 'accordionItem close') {
//         this.parentNode.className = 'accordionItem open';
//     } else this.parentNode.className = 'accordionItem close';
// }
Object.defineProperty(exports, "__esModule", { value: true });
const CustomMap_1 = require("./CustomMap");
new CustomMap_1.CustomMap('map');
