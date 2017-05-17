import {Component} from "@angular/core";

@Component({ // metadatas
  selector: 'dashboard-component', // tag html para usar o componente
  template: ` <p> Component dashboard </p>`
})
export class DashboardComponent { } // export e necessario para o component ser visto fora desta classe,  alem disto, declare em app.module
