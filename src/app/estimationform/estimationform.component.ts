import { Component, OnInit } from "@angular/core";
import { ProgressReport } from "../progress-monitor/progress-report";

@Component({
  selector: "app-estimationform",
  templateUrl: "./estimationform.component.html",
  styleUrls: ["./estimationform.component.css"]
})
export class EstimationFormComponent implements OnInit {
  private counter: number;
  constructor() {
    this.counter = 1;
  }

  ngOnInit() {}

  reportProgres() {
    var obj = this;
    var progressReport: ProgressReport;
    progressReport = new ProgressReport();
    progressReport.processStatus = 1;
    this.counter++;
    if (this.counter > 30) progressReport.processStatus = 0;
    progressReport.messages=[];
    progressReport.push(new Message())

    return progressReport;
  }
}
