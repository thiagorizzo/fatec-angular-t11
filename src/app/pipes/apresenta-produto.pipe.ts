import { PipeTransform, Pipe } from '@angular/core';

var config = {
    'name' : 'apresentaProduto'
};

@Pipe(config)
export class ApresentaProdutoPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value) {
            console.log(args[0]);
            if (args[0] == 'resumido')
                return `Nome: ${value.nome}`;
            else
                return `Nome: ${value.nome}, Preço: ${value.preco}`;
        } 

        return '';
    }

}
