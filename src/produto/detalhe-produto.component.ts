import { Component, Input } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    selector: 'detalhe-produto',
    templateUrl: './detalhe-produto.component.html',
    styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {

    constructor(private produtoService : ProdutoService) {
        
    }

    @Input()
    produto : Produto;
}

