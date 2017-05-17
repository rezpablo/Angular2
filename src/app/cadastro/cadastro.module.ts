import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CadastroComponent} from "./cadastro.component";
import {FormsModule} from "@angular/forms";
import {InputPropertyComponent} from "../input-property/input-property.component";
import {OutputPropertyComponent} from "../output-property/output-property.component";
import {CicloComponent} from "../ciclo/ciclo.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CadastroComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent
  ],
  exports: [CadastroComponent]
})
export class CadastroModule { }
