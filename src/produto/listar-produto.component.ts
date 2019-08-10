import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

// metadados/decorator
@Component({
    selector: "listar-produto", // <listar-produto></listar-produto>
    templateUrl: "listar-produto.component.html",
    styleUrls: [ "listar-produto.component.css"]
})
export class ListarProdutoComponent implements OnInit {

    titulo : string = "Lista de Produtos";
    paginaAtual : number = 0;
    quantidadePorPagina : number = 3;
    produtoSelecionado : Produto = null;
    produtos : Produto[];

    constructor(private produtoService : ProdutoService) {

    }

    ngOnInit(): void {
        this.produtos = this.produtoService.getProdutos();
    }    
    
    mostrarProduto() {
        return this.produtos && this.produtos.length > 0;
    }

    selecionarProduto(produto : Produto) {
        this.produtoSelecionado = produto;
    }

    anterior() {
        if (this.paginaAtual > 0)
            this.paginaAtual--;
    }

    proxima() {
        if (this.paginaAtual+1 < Math.round(this.produtos.length / this.quantidadePorPagina))
            this.paginaAtual++;
    }

    getIndiceInicial() {
        return this.paginaAtual * this.quantidadePorPagina;
    }

    getIndiceFinal() {
        return this.paginaAtual * this.quantidadePorPagina + this.quantidadePorPagina;
    }

    isProdutoSelecionado(produto) {
        return produto == this.produtoSelecionado;
    }

    onEstrelaModificada(i, valor) {
        this.produtos[i].avaliacao = valor;
    }
}