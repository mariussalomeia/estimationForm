import { Component, OnInit } from '@angular/core';
import {ProgressMessage} from 'progress-message';

@Component({
  selector: 'app-progress-monitor',
  templateUrl: './progress-monitor.component.html',
  styleUrls: ['./progress-monitor.component.css']
})
export class ProgressMonitorComponent implements OnInit {
  
  messages :ProgressMessage[];

  constructor(sourceURL:string) { }

  ngOnInit() {
    this.messages =[];
  }

  monitorProgress(){
    
  }

  

}