//Criando modelo de negociacoes para entrar todas as negociacoes

class Negociacoes {

    private _negociacoes: Negociacao[] = []; //Variavel que armazenará todas negociacoes

    //Metodo que irá adicionar todas as negociacoes dentro da variavel
    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    //Metodo para iterar as negociacoes para serem mostradas
    paraArray(): Negociacao[] {

        return [].concat(this._negociacoes);
    }
}
