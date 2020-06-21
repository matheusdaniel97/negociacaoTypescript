//Cria a classe pai View que irá conter metodos e variáveis a serem herdados
class View {
    //Logo que o metodo for chamado ele deve procurar o seletor HTML onde será feito a modificiação
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    //Metodo que irá realizar a modificação
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
