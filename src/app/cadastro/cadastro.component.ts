import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: string = 'abs';

  pessoa: any = {
    nome: 'teste',
    idade: 20
  }

  valorInicial: number = 15;

  valor: number = 5;

  deletarCiclo: boolean = false;

  //TODO INPUT PROPERTIES - Variavel que ira passar o valor atraves de Input/Output Properties
  nomeCurso: string = 'teste1';

  // TODO OUTPUT PROPERTY - Obtem o evento do output
  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  mudarValor() {
    this.valor++;
  }

  constructor() { }

  ngOnInit() {
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

}
