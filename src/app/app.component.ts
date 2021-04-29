import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Component Interaction";
  imgUrl = "https://picsum.photos/200";
  count = 0;
  name: string;
  userName: string;

  incrementCount() {
    this.count += 1;
  }

  greet(updatedValue) {
    this.userName = updatedValue;
    if (updatedValue === "Shadab") {
      alert("Welcome back again Shadab");
    }
  }
}
