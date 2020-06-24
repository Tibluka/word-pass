import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TimerService {

  public qualifyingTimer = 30
  public gameTimer = 90
  public timer

  constructor() { }

  // Timer = é o tempo q ele tem
  setTimer(timer) {
    this.qualifyingTimer = timer
    this.timer = setInterval(() => {
      if(this.qualifyingTimer === 0) {
        this.stopTimer()
      } else {
        this.qualifyingTimer--
      }
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
