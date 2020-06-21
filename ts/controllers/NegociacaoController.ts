//Criando a controller da negociacao
class NegociacaoController {

    //Definindo variáveis do controller
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView')

    //Definindo construtor do controller (O que irá executar assim que o controller for chamado)
    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    //Metodo para adicionar a negociacao as negociacoes
    adiciona(event: Event) {

        event.preventDefault();

        //Criando a nova negociacao
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        //Adicionando nova negociacao nas negociacoes
        this._negociacoes.adiciona(negociacao);

        //Atualizando a view das negociacoes
        this._negociacoesView.update(this._negociacoes);

        //Mostrando a mensagem de atualizacao da View
        this._mensagemView.update('Negociação adicionada com sucesso')
    }
}