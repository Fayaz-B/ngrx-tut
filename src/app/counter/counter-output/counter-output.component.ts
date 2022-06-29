import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) {}
  counter$!: Observable<CounterState>;
  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}