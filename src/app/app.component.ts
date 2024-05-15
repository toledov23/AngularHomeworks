import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  array: string[] = ['A', 'B', 'C']
  text: string = "Hello World";
  textTwo: string = "Hello World";

  showAlert(): void {
    alert("Event Binding working");
  }

}
