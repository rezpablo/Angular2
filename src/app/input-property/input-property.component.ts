import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // ,inputs: ['nome', 'nomeDoCurso:nomeC']  // TODO INPUT PROPERTIES - É possivel utilizar este metadata ao inves de @Input() / @Input('nomeC')
})
export class InputPropertyComponent implements OnInit {

  constructor() { }

  // TODO INPUT PROPERTIES - Variavel exposta para o seletor atraves do @Input que recebe o valor
  @Input()
  nome: string = '';

  // TODO INPUT PROPERTIES - Variavel exposta para o seletor atraves do @Input que recebe o valor - utiliza tratamento do nome exposto
  @Input('nomeC')
  nomeDoCurso: string = '';

  ngOnInit() {
  }

}
