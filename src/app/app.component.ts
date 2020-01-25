import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "toggleTheme";
  darkTheme: boolean = false;

  changeTheme() {
    this.darkTheme = !this.darkTheme;
  }
}
