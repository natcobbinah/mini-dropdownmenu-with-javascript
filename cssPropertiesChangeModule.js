const _setElementoChangeProp = new WeakMap();
const _divElementsName =new WeakMap();

export class CssElements{

    constructor(divElement,csselementNames){
        _setElementoChangeProp.set(this,document.getElementById(divElement));
        _divElementsName.set(this,document.getElementsByName(csselementNames));
    }
 
    getElementId(value){
        let retrievedId = document.getElementById(value);
        return retrievedId;
    }

    getcssElementName(value){
        let retrievedName = document.getElementsByName(value);
        return retrievedName;
    }
    
    get _setElementoChangeProp(){
        return _setElementoChangeProp.get(this);
    }

    get _divElementsName(){
        return _divElementsName.get(this);
    }
}


