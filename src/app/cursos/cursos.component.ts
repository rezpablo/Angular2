import { Component, OnInit } from '@angular/core';
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  // TODO CLASS E STYLE BINDING opcao de declaracao de style

  /*
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
  */

})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  url: string = 'http://teste.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver:boolean = false;

  constructor(private cursosService: CursosService) { // TODO FRAMEWORK - injecao de dependencia pelo construtor publico ou privado
    this.nomePortal = 'http://training.com';
    this.cursos = this.cursosService.getCursos();
  }

  // TODO FRAMEWORK - function typescript, nao precisa declarar funcion
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botao clickado!');
  }

  onkeyup(evento: KeyboardEvent) { // TODO EVENT BINDING - Tipagem do evento
    this.valorAtual = (<HTMLInputElement>evento.target).value; // TODO EVENT BINDING - Tipagem o eventobter o para obter o valor
  }

  salvarValor(valor) { // TODO EVENT BINDING - tipagem do evento tratado no html
    this.valorSalvo = valor;
  }

  onmouseout() {
    this.isMouseOver = !this.isMouseOver;
  }


  ngOnInit() {
  }

}
