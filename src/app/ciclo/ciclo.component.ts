import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from "@angular/core";

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, AfterContentInit,
  AfterViewInit, AfterViewChecked, AfterContentChecked, DoCheck, OnDestroy { // TODO LIFE CICLE - Os componentes implementar OnInit para ter  ngOnInit

  @Input()
  valorInicial: number = 10;

  constructor() {
    this.log("constructor");
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
