import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public qualifyingTimer = 30
  public gameTimer = 90
  public timer
  constructor() { }

  ngOnInit(): void {
  }

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
