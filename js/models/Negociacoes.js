//Criando modelo de negociacoes para entrar todas as negociacoes
class Negociacoes {
    constructor() {
        this._negociacoes = []; //Variavel que armazenará todas negociacoes
    }
    //Metodo que irá adicionar todas as negociacoes dentro da variavel
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //Metodo para iterar as negociacoes para serem mostradas
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
