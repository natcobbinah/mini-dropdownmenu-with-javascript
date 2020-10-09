const _setElementoChangeProp = new WeakMap();

export class CssElements{

    constructor(value){
        _setElementoChangeProp.set(this,document.getElementById(value));
    }

    getElementId(value){
        let retrievedId = document.getElementById(value);
        return retrievedId;
    }

    getcssElementName(value){
        let retrievedName = document.getElementsByName(value);
        return retrievedName;
    }

    setChangestoElement(cssElementsNameArray){
        for(let i=0; i < cssElementsNameArray.length; i++){
            let cssProperty = cssElementsNameArray[i].getAttribute('id');
            let cssValue = cssElementsNameArray[i].value;

            _setElementoChangeProp.style[cssProperty] = cssValue;
        }
    }
}
