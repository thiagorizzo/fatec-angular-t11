import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from './produto';
import { ProdutoService } from './produto.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'detalhe-produto',
    templateUrl: './detalhe-produto.component.html',
    styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit{
    ngOnInit(): void {
        this.produto = {
            codigo: 0,
            descricao: '',
            avaliacao: 0,
            preco: 0,
            nome: '',
            urlImagem: ''
        };
    }

    constructor(private _produtoService : ProdutoService,
                private _activatedRoute : ActivatedRoute) {
        
        var produtoId = _activatedRoute.snapshot.paramMap.get('id');
        if (produtoId != null)
            _produtoService.getProdutoId(parseInt(produtoId))
                        .subscribe(
                                dado => this.produto = dado
                        );
    }

    @Input()
    isEdit : boolean = false;

    @Input()
    produto : IProduto;

    public formulario;

    getImagem() {
        return this._produtoService.getImagem(this.produto);
    }

    cadastrar() {
        this._produtoService.createProduto(this.produto)
                            .subscribe();
    }

    onEstrelaModificada(i, valor) {
        this.produto.avaliacao = valor;
    }
}

