import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeAppName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  name: string = '';
  storeName: string = '';
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      console.log('The name state is called');
      this.storeName = data.name
    })
  }


  onAdd() {
    this.store.dispatch(customIncrement({value: +this.value}))
  }

  onChangeName() {
    this.store.dispatch(changeAppName({name: this.name}))
  }

} 
