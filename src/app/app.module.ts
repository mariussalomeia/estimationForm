import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EstimationFormComponent } from "./estimationform/estimationform.component";
import { ProgressMonitorComponent } from "./progress-monitor/progress-monitor.component";
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EstimationFormComponent,
    ProgressMonitorComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProgressMonitorComponent]
})
export class AppModule {}
