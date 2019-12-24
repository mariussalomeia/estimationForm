import { Component, OnInit } from "@angular/core";
import { ProgressReport } from "../progress-monitor/progress-report";
import { ProgressMessage } from "../progress-monitor/progress-message";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { ProgressMonitorComponent } from "../progress-monitor/progress-monitor.component";
//import {ProgressMonitorComponent} from "../progress-monitor/progress-monitor";

@Component({
  selector: "app-estimationform",
  templateUrl: "./estimationform.component.html",
  styleUrls: ["./estimationform.component.css"]
})
export class EstimationFormComponent implements OnInit {
  private counter: number;
  constructor(private snackBar: MatSnackBar) {
    this.counter = 1;
  }

  ngOnInit() {}

  monitorProgress() {
    var myData = {
      processTitle: "Process Monitor",
      timeoutInterval: 1000,
      progressCallback: this.reportProgres.bind(this)
    };
    this.snackBar.openFromComponent(ProgressMonitorComponent, {
      duration: 0,
      data: myData
    });
  }

  reportProgres() {
    var obj = this;
    var progressReport: ProgressReport;
    progressReport = new ProgressReport();
    progressReport.processStatus = 1;
    this.counter++;
    if (obj.counter > 30) {
      progressReport.processStatus = 0;
    }
    progressReport.messages = [];
    progressReport.messages.push(
      new ProgressMessage(((obj.counter % 5) % 4) % 2, "Message " + obj.counter)
    );

    return progressReport;
  }
}
