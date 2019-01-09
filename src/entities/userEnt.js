export class User{
    constructor(code="", desc="", pass=""){
        this.code = code;
        this.desc = desc;
        this.pass = pass;
    }

    toString(){
        return `User:(${this.code} - ${this.desc})`
    }
}
