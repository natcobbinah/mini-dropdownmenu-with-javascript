import {CssElements} from './cssPropertiesChangeModule.js';

const c = new CssElements('modify');

let divElementNames = c.getcssElementName('cssProperty');
let btnPressed = c.getElementId('set');

btnPressed.addEventListener('click',c.setChangestoElement(divElementNames));
