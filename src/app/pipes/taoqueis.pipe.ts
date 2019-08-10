import { Pipe, PipeTransform } from '@angular/core';

var config = {
    'name' : 'taoquei'
};

@Pipe(config)
export class TaoqueisPipe implements PipeTransform {
    // {{ value | taoquei }}
    transform(value: any, ...args: any[]) {
        if (value > 1)
            return `${value} taoqueis`;
        else
            return `${value} taoquei`;
    }
}