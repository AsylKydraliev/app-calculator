import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { addition, division, multiplication, reset, result, subtraction } from '../calc.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result!: Observable<number>;

  constructor(private store: Store<{calculator: number}>) {
    this.result = store.select('calculator');
  };

  addition(){
    this.store.dispatch(addition());
  }

  subtraction(){
    this.store.dispatch(subtraction());
  }

  multiplication(){
    this.store.dispatch(multiplication());
  }

  division(){
    this.store.dispatch(division());
  }

  getResult(){
    this.store.dispatch(result());
  }

  reset(){
    this.store.dispatch(reset());
  }
}




