import {CssElements} from './cssPropertiesChangeModule.js';

//sample code logics adapted from online sources and various materials

const c = new CssElements('modify','cssProperty');

let btnPressed = c.getElementId('set');
let divElementoChangeProp = c._setElementoChangeProp;
let divElementNames = c._divElementsName;

//function to change div properties
function setChanges(){
    for(let i=0;i <  divElementNames.length; i++){
        let cssProperty = divElementNames[i].getAttribute('id');
        let cssValue = divElementNames[i].value;

        divElementoChangeProp.style[cssProperty] = cssValue;
    }
} 

btnPressed.addEventListener('click',setChanges);