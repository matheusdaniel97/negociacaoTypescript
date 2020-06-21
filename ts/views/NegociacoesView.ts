class NegociacoesView extends View<Negociacoes>{ //<Negociacao> porque foi herdado da classe negociacoes

    template(model: Negociacoes): string { //Tem o que será adicionado

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => 
                     `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() +1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        <tr>
                     `   
                ).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}