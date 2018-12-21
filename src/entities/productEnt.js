export class Product{
    constructor(id=-1, name=""){
        this.id = id;
        this.name = name;
    }

    toString(){
        return `PROD:(${this.id} - ${this.name})`
    }
}
