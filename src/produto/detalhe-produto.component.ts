import { Component, Input } from '@angular/core';
import { IProduto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    selector: 'detalhe-produto',
    templateUrl: './detalhe-produto.component.html',
    styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {

    constructor(private _produtoService : ProdutoService) {
        
    }

    @Input()
    produto : IProduto = { codigo: 1, nome: 'Fifa 2019', preco: 250.00, urlImagem: 'https://http2.mlstatic.com/fifa-19-fifa-2019-portugus-ps4-1-lancamento-D_NQ_NP_727394-MLB27874088213_072018-F.jpg', descricao: 'FIFA 19 proporciona uma experiência de calibre de campeão, tanto dentro como fora de campo.', avaliacao: 5 };

    getImagem(produto) {
        return this._produtoService.getImagem(produto);
    }
}

