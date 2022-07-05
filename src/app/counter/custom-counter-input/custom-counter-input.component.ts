import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { changeAppName, customIncrement } from '../state/counter.actions';
import { getName } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  name: string = '';
  storeName$!: Observable<string>
  
  constructor(private store: Store<AppState>) { }

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
