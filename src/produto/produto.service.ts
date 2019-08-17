import { IProduto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProdutoService {
    private _urlProdutos = 'http://localhost:8888/Produtos';
    private _urlProduto = 'http://localhost:8888/Produto';

    constructor(private _http : HttpClient) {

    }

    getImagem(produto : IProduto) {
        return produto.urlImagem != null ? produto.urlImagem : 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png';
    } 
    
    getProdutos() : Observable<IProduto[]> {
       return this._http.get<IProduto[]>(this._urlProdutos);
    }

    getProdutoId(id : number) : Observable<IProduto> {
        return this._http.get<IProduto>(`${this._urlProduto}/${id}`);
    }

    createProduto(produto : IProduto) : Observable<IProduto> {
        return this._http.post<IProduto>(this._urlProduto, produto);
    }
}