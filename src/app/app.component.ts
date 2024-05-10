import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularHomeworks';
  activeClass: boolean = false;
  activeStyle: boolean = false;

  toggleActiveClass() {
    this.activeClass = !this.activeClass;
  }

  toggleActiveStyle() {
    this.activeStyle = !this.activeStyle;
  }

}
