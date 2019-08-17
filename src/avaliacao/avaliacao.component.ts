import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.sass']
})
export class AvaliacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  editavel : boolean = false;

  @Input()
  valor : number;

  @Output()
  clicada : EventEmitter<number> = new EventEmitter<number>();

  getEstrelas() {
    let estrelas = new Array(5);

    for(let i = 0; i < 5; i++) {
      if (i < this.valor)
        estrelas[i] = true;
      else
        estrelas[i] = false;
    }

    return estrelas;
  }

  selecionou(indice : number) {
    console.log(this.editavel);
    if (!this.editavel)
      return;

    this.valor = indice + 1;
    this.clicada.emit(this.valor);
  }
}
