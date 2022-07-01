import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeAppName, customIncrement } from '../state/counter.actions';
import { getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  name: string = '';
  storeName$!: Observable<string>
  
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.storeName$ = this.store.select(getName)
  }


  onAdd() {
    this.store.dispatch(customIncrement({value: +this.value}))
  }

  onChangeName() {
    this.store.dispatch(changeAppName({name: this.name}))
  }

} 
