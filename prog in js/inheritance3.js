
class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    
    constructor() { //inheritance
        super(2);   // this.layer= 2
    }

    getLayers()   //override 
    {
        return this.layers * 5;
    }
    
}

var result = new WeddingCake();
console.log(result.getLayers());   //2*5 =10
