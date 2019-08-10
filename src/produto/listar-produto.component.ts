import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

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

    constructor() {
    }

    ngOnInit(): void {
        this.produtos = [
            {
              'codigo': 1,
              'nome': 'World Of Warcraft',
              'preco': 159.9,
              'urlImagem': 'https://images-na.ssl-images-amazon.com/images/I/51pQFrAXwCL.jpg'
            },
            { 
                'codigo': 2,
                'nome': 'League Of Legends',
                'preco': 0.0,
                'urlImagem': 'http://i.imgur.com/UzQQvFS.jpg'
            },
            {
                'codigo': 3,
                'nome': 'Counter Strike',
                'preco': 45.5,
                'urlImagem': null
            },
            { 
                'codigo': 2,
                'nome': 'Mario Kart',
                'preco': 0.0,
                'urlImagem': 'http://i.imgur.com/UzQQvFS.jpg'
            },
            {
                'codigo': 3,
                'nome': 'Apex Legends',
                'preco': 45.5,
                'urlImagem': null
            }        
        ];
    }    
    
    mostrarProduto() {
        return this.produtos && this.produtos.length > 0;
    }

    selecionarProduto(produto : Produto) {
        this.produtoSelecionado = produto;
    }

    getImagem(produto : Produto) {
        return produto.urlImagem != null ? produto.urlImagem : 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png';
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
}