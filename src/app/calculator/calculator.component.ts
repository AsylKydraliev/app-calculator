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
  result!: Observable<{result: string }>;
  symbol!: {};

  constructor(private store: Store<{calculator: {result: string}}>) {
    this.result = store.select('calculator');
    this.result.subscribe(symbol => {
      this.symbol = symbol.result;
    })
  };

  addSymbol(symbol: string){
    this.store.dispatch(addSymbol({symbol: symbol}));
  }

  getResult(symbol: string){
    this.store.dispatch(result({symbol: symbol}));
  }

  reset(symbol: string){
    this.store.dispatch(reset({symbol: symbol}));
  }
}




