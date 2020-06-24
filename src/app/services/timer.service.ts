import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public qualifyingTimer = 30
  public gameTimer = 90
  public timer
  constructor() { }

  setTimer() {
    this.timer = setTimeout(() => {
      console.log('Test');
      this.setTimer();
      this.qualifyingTimer--
    }, 1000);
  }
  stopTimer() {
    clearTimeout(this.timer);
  }

  stopAndReset() {
    clearTimeout(this.timer);
    this.qualifyingTimer = 30
  }

}
