import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/counter.selector';


const route = [{
  path: '',
  component: CounterComponent 
}]
@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent
  ],
  imports: [CommonModule, RouterModule.forChild(route), FormsModule, StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)]
})

export class CounterModule{

}