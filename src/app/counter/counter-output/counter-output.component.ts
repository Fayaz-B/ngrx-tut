import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}
  counter$!: Observable<number>;

  ngOnInit(): void {
    
    this.counter$ = this.store.select(getCounter);
    
  }
}