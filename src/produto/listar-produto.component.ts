import { Component, OnInit } from '@angular/core';
import { IProduto } from './produto';
import { ProdutoService } from './produto.service';
import { TouchSequence } from 'selenium-webdriver';

// metadados/decorator
@Component({
    selector: "listar-produto", // <listar-produto></listar-produto>
    templateUrl: "listar-produto.component.html",
    styleUrls: [ "listar-produto.component.css"]
})
export class ListarProdutoComponent implements OnInit {

    private titulo : string = "Lista de Produtos";
    private paginaAtual : number = 0;
    private quantidadePorPagina : number = 3;
    private produtoSelecionado : IProduto = null;
    private produtos : IProduto[];
    private erroHttp;

    constructor(private _produtoService : ProdutoService) {

    }

    ngOnInit(): void {
        this._produtoService.getProdutos()
                            .subscribe(
                                dado => this.produtos = dado,
                                erro => this.erroHttp = erro
                            );
    }    
    
    mostrarProduto() {
        return this.produtos && this.produtos.length > 0;
    }

    selecionarProduto(produto : IProduto) {
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

    getImagem(produto) {
        return this._produtoService.getImagem(produto);
    }
}