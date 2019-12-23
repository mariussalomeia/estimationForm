import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ProgressMessage } from "./progress-message";
import { ProgressReport } from "./progress-report";
import {
  MatSnackBarModule,
  MatCard,
  MatCardContent,
  MatCardTitle
} from "@angular/material";

@Component({
  selector: "app-progress-monitor",
  templateUrl: "./progress-monitor.component.html",
  styleUrls: ["./progress-monitor.component.css"]
})
export class ProgressMonitorComponent implements OnInit {
  @ViewChild("progressBody") private myScrollContainer: ElementRef;

  messages: ProgressMessage[];
  status: number;

  @Input()
  public processTitle: string;

  @Input()
  public timeoutInterval: number;

  @Input()
  public progressCallback: Function;

  constructor() {}

  ngOnInit() {
    this.messages = [];
    this.monitorProgress();
  }

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  monitorProgress() {
    var obj = this;

    if (!obj.progressCallback) return;

    var progressReport: ProgressReport;
    progressReport = obj.progressCallback();
    if (progressReport) {
      //invoke progress report
      var jobStatus = progressReport.processStatus;
      obj.status = jobStatus;
      //append messages
      if (progressReport.messages) {
        progressReport.messages.forEach(function(value) {
          obj.messages.push(value);
        });
       
       }

      if (jobStatus != 0) {
        //job not completed yet so scheduled another fetch
        setTimeout(function() {
          obj.monitorProgress();
        }, obj.timeoutInterval);
      }
    }
  }
}
