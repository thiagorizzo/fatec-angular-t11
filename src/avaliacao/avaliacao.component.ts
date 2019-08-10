import { Component, OnInit, Input } from '@angular/core';

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
  valor : number;

  getEstrelas() {
    let estrelas = new Array(parseInt("" + this.valor));
    return estrelas;
  }
}
