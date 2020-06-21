//Cria a classe pai View que irá conter metodos e variáveis a serem herdados
abstract class View<T> { //<T> para que a classe filha defina o tipo de cada metodo

    //Variavel protected para a classe filho poder utilizar
    protected _elemento:Element;

    //Logo que o metodo for chamado ele deve procurar o seletor HTML onde será feito a modificiação
    constructor(seletor:string) {
        this._elemento = document.querySelector(seletor);
    }

    //Metodo que irá realizar a modificação
    update(model:T){
        this._elemento.innerHTML = this.template(model);
    }

    //Metodo que define o que irá ser modificado
    abstract template(model: T): string;

}