import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor(private snackBar: MatSnackBar) {}
  openSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 2000
    });
  }

}
