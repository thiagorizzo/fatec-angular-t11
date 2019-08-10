import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProdutoService {

    getImagem(produto : Produto) {
        return produto.urlImagem != null ? produto.urlImagem : 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png';
    } 
    
    getProdutos() {
        return [
            {
              'codigo': 1,
              'nome': 'World Of Warcraft',
              'preco': 159.9,
              'urlImagem': 'https://images-na.ssl-images-amazon.com/images/I/51pQFrAXwCL.jpg',
              'avaliacao': 5
            },
            { 
                'codigo': 2,
                'nome': 'League Of Legends',
                'preco': 0.0,
                'urlImagem': 'http://i.imgur.com/UzQQvFS.jpg',
                'avaliacao': 3
            },
            {
                'codigo': 3,
                'nome': 'Counter Strike',
                'preco': 45.5,
                'urlImagem': null,
                'avaliacao': 4
            },
            { 
                'codigo': 2,
                'nome': 'Mario Kart',
                'preco': 0.0,
                'urlImagem': 'http://i.imgur.com/UzQQvFS.jpg',
                'avaliacao': 5

            },
            {
                'codigo': 3,
                'nome': 'Apex Legends',
                'preco': 45.5,
                'urlImagem': null,
                'avaliacao': 1
            }        
        ];        
    }
}