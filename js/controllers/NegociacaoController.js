//Criando a controller da negociacao
class NegociacaoController {
    //Definindo construtor do controller (O que irá executar assim que o controller for chamado)
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    //Metodo para adicionar a negociacao as negociacoes
    adiciona(event) {
        event.preventDefault();
        //Criando a nova negociacao
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        //Adicionando nova negociacao nas negociacoes
        this._negociacoes.adiciona(negociacao);
        //Atualizando a view das negociacoes
        this._negociacoesView.update(this._negociacoes);
        //Mostrando a mensagem de atualizacao da View
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
