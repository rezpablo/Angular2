ANGULAR 2 - <http://loiane.training/course-status/> - proxima aula #24
---
## Ambiente 
### ver aula 2 
- Instalar NodeJS:
Baixar em: https://nodejs.org/en/download/
sudo ln -s /home/pablo/workspace/node-v6.10.3-linux-x64/bin/node /usr/local/bin/npm
sudo ln -s /home/pablo/workspace/node-v6.10.3-linux-x64/bin/npm /usr/local/bin/npm

- instalar tsc
- instalar ng cli
```
$ npm install -g angular cli
```

# Component @Component
  Controller
  
# Modules @NgModule
## modulo raiz ou feature modules (utilizados para organizar o projeto)
### Impots do raiz
- BrowserModule : prepara aplicacao para rodar em um browser
- FormsModule : usado para databinding
- HttpModule : usado para Requisicoes ajax 
- Imports das classes do projeto

### Metadatas
- declarations: listar components, diretivas e pipes
- imports : Outros modules que serao utilizados neste modulo
- providers: servicos que ficarao disponives para todos components declarados neste module
- bootstrap : somente no modulo raiz, diz qual Componente deve ser executado ao exetuar a aplicação (componente container do projeto ou view port, ou seja componente principal),

## feature module
 - Nao vai ter BrowserModule
 - Nao vai ter bootstrap
 - Tem CommonModule
 - tem providers (servicos)
 - tem imports, importar FormsModule e HttpModule se precisar utilizar forms e http

## DATA BINDING
Associar dados do componente ao template 
### INTERPOLATION BINDING
{{}}
### PROPERTY BINDING
[prop]="val"
### EVENT BINDING - click, change
(evento)="handler"
### TWO-WAY DATA BINDING - Componte e view alterados ao msm tempo, ex forms
[(ngModel)]="prop"
## CLASS E STYLE BINDING
- O arquivo `/styles.css` é o css de escopo global do projeto
- component/nome.component.css e privado ao html do component de acordo com @component styleUrls


## INPUT PROPERTIES - usados para reutilizar elementos
Um component pode associar variavel sua a uma variavel de outro passando para o seletor a informacao e declarando um @Input no component que ira receber a informacao
Os Input Properties tem objetivos diferentes de `diretivas` - utiliza-se varios componentes para organizar e o `inp prop` para passar o objeto para todos `componentes`, Ex: Utilizar em dumming components (componentes estaticos, que so exibem dados sem se comunicar com o service)
1) passar `[nome]="nomeCurso` para o seletor `<app-input-property [nome]="nomeCurso" ></app-input-property>`. onde [nome] é no que vai receber e "nomeCurso" é a var que ira passar 
2) Criar uma variavel no component que ira passar o valor `nomeCurso` `nomeCurso: string = 'teste1';`
3) Criar no component que recebera o valor uma var com `@Input` `@Input() nome: string = `
4) No template do component interpolar {{}} a variavel que recebeu o valor

## OUTPUT PROPERTIES - Eventos customizados

## LIFE CICLE (HOOKS)

Evento (Hooks)         | Quando                                                 | Obs                                                   |
---------------------- | ------------------------------------------------------ | ----------------------------------------------------- |
ngOnChanges            | Antes ngOnInit e quando property-binding é atualizado  | Muito usado com os input-properties que mudam o valor |
ngOnInit               | Quando @Component é iniciado                           |                                                       |
ngDoCheck              | A cada ciclo de verificacçãi de mudanças               |                                                       |
ngAfterContentInit     | Depois de inserir conteudo externo na view             |                                                       |           
ngAfterContentChecked  | A cadas verificacao de conteudo inserido               |                                                       |
ngAfterViewChecked     | A cada verificacao de conteudo / filtro                |                                                       |
onDestroy              | Antes da diretiva / component ser destruido            | Ativando por exemplo ao dar um nfIf false             |

> O Angular ira considerar em um componente o o metodo com o nome do ciclo de vida como uma implementacao, mas e uma boa pratica implementar as interfaces que foram ser utilizadas

> Se muda o input Property, somente o ngOnChanges é disparado na mudança

## VIEW CHIELD/ ACESSO DOM E TEMPLATE - Acesso ao dom e ao template com viewChield a partir do @Component


## Pre processadores de CSS:
> É possivel ao gerar o projeto definir qual será o pré processador de css utilizado: <br>
> `ng new meu-projeto --style=sass` <br>
> `ng new meu-projeto --style=less` <br>
> `ng new meu-projeto --style=stylus` <br>
OU 
Modificar a extensao de css padrao com: <br>
`ng set defaults.styleExt scss` | less | styl 

---

## Estrutura do projeto ng-cli
```
.
projeto/
|-- config - # configuracao apar deploy/buuld/testes
|-- dist # Gerado o build da aplicacao 
|-- e2e # testes end-to-end
|-- node_modules # contem os pacotes npm da app pachage.json
|-- public # diretorio genérico
|-- src # Código fonte da aplicacao
angular-cli.json # infos sobre o projeto e prod build, # TODO ao adicionar css, bootstrap - adicionar neste arqiov
tsslint.json $ configuracoes de lint
app


```




- e2e

---

## Comandos ng cli
--
Quando criado um elemento ele sera declado dentro do module do diretorio corrent, Ex: Se for criado na / do projeto, sera criado no app.module

### Criar novo projeto
```
$ ng new nomeProjeto
ou
ng init
```

### run do projeto
```
$ ng serve
$ ng serve --port 4201 --live-reload-port 49153

```
> Equivalente ao npm start

### Gerar Component
$ ng g component nome
> Quando gerar um componente dentro de um `feature module` o adicione em `exports` caso queira que seja utilizado em outros modules, se nao colocar em `exports` aquele component fica private dentro do modulo que foi declarado

>  Em versao mais antiga sera importado o component no app.module.ts, se utilizar outro module é necessario mover os imports do component  

### Gerar Module
$ ng g module nome
> Importe o novo module em `imports` do `app.module` isto permitira que todos `components` em `exports` do feature module sejam abertos para toda a aplicacao
  
### Gerar service
$ ng g service cursos/cursos
> 

* Para todos os casos de generate pode-se passar o caminho de onde deve criar os arquivos... ex 
`$ ng g service diretiva-ngif/diretiva-if`

## NG LINT scan em busca de erros e style guide
`$ ng ling`
## NG TEST executa testes jasmine 
## NG e2e testes e2e com protactor - testes de integracao

# package.json 
## Dependencies - Usandos para executar o projeto 
## DevDependencies  - Usadas somente para o desenvolvimento

## Build
### Build Desenvolvimento
 $ ng build | ng build --dev
 
 - Build gerado em dist, codigo fonte, codigo que da para debugar
 
### Build Prod
 $ ng build --prod
 Codigo de main e polifils ofuscado e minificado   

## Bibliotecas externas
npm install --save bootstrap@next
`-- save -> assim ele instala no package.json`

-  Imports Externos de javascript e css
Importar no angular-cli.json > "styles" e "scripts"

Importar no index somente fonts e icones

## Materialize
npm install angular2-materialize --save
npm install materialize-css --save
npm install jquery@^2.2. --save

adicionar o scripts para o angular-cli.json
adicionar no index.html os icons 

importar de forma global @import o css no style.css

importar no app.module o module MaterializeModule


## Lodash (Biblioteca global)
npm install --save lodash
npm install --save @types/lodash

Importar no @component que for utilizar
import * as _ from 'lodash';


Dicas
---
## ng2-bootstrap - bootstrap com abstracao do uso de jquery
> http://valor-software.com/ngx-bootstrap/#/

`$ npm install ng2-bootstrap bootstrap --save`

Adicionar em `.angular-cli.json`
```
  "styles": [
         "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css",
      ],
```
 
##  Boas praticas ....
* Usar ng-lint
* minhaVariavel : string # nao utilizar espaco=====> minhaVariavel : string


 
 

