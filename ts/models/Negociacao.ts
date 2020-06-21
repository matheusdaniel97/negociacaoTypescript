//Criando modelo de negociacao
class Negociacao {
    
    //Construtor do modelo
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    //Metodos do modelo
    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }
}
