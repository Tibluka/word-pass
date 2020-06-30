import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Output() teste = new EventEmitter()


  constructor(public timerService:TimerService) { }

  ngOnInit(): void {
  }

  henrique(){
    this.teste.emit('string')
  }

}
