import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  valor: number = 0;

  // TODO OUTPUT PROPERTY - Emissor de eventos
  @Output() // TODO OUTPUT PROPERTY - Expoe o valor pelo event emitter
  mudouValor = new EventEmitter();   // TODO OUTPUT PROPERTY - EventEmitter substui o broadcast do ang1

  @ViewChild('campoInput') //TODO VIEW CHIELD - associa essa variavel a variavel #campoInput declarada no html
  campoValorInput: ElementRef; /*TODO Generico HTMLElement*/

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    /*this.valor++;*/
    this.mudouValor.emit({novoValor: this.valor}); // TODO OUTPUT PROPERTY - Propaga o objeto  atraves do emit
  }

  decrementa() {
    /*this.valor--;*/
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});

  }

}
