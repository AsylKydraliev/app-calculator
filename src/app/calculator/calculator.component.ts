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
  result!: Observable<{result: string}>;

  symbols = [ '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.'];

  constructor(private store: Store<{calculator: {result: string}}>) {
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
}




