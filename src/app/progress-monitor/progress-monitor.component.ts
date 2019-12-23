import { Component,Input, OnInit } from "@angular/core";
import { ProgressMessage } from "./progress-message";
import { ProgressReport } from "./progress-report";

@Component({
  selector: "app-progress-monitor",
  templateUrl: "./progress-monitor.component.html",
  styleUrls: ["./progress-monitor.component.css"]
})
export class ProgressMonitorComponent implements OnInit {
  
  messages: ProgressMessage[];
  @Input()
  public timeoutInterval: number;
  @Input()
  public progressCallback: Function;
  constructor() {}

  ngOnInit() {
    this.messages = [];
    this.monitorProgress();
  }

  monitorProgress() {
    var obj = this;

    if (!obj.progressCallback) return;

    var progressReport: ProgressReport;
    progressReport = obj.progressCallback();
    if (progressReport) {
      //invoke progress report
      var jobStatus = progressReport.processStatus;

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
