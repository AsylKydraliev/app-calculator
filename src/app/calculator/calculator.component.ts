import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { addSymbol, reset, result } from '../calc.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  result!: Observable<string>;

  symbols = [ '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.'];

  constructor(private store: Store<{calculator: string}>) {
    this.result = store.select('calculator');
  };

  addSymbol(symbol: string){
    this.store.dispatch(addSymbol({symbol: symbol}));
  }

  getResult(){
    this.store.dispatch(result());
  }

  reset(){
    this.store.dispatch(reset());
  }

  getClassName(item: string){
    let className = 'btn';
    if(item === '/' || item == '+' || item === '-' || item == '*'){
      className = 'btn bg_orange';
    }else if(item === '+/-' || item == '%'){
      className = 'btn bg_grey';
    }
    return className;
  }
}




