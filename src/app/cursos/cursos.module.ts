import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CursosComponent} from "./cursos.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CursoDetalheComponent} from "../curso-detalhe/curso-detalhe.component";
import {CursosService} from "./cursos.service";
import {CadastroModule} from "../cadastro/cadastro.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    CadastroModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
