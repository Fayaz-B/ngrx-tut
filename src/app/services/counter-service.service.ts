import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  constructor() { }


  onIncrement(count:number) {
    return count+=1;
  }

  onDecrement(count:number) {
    return count-=1;
  }

  onReset() {
    return 0;
  }
}
