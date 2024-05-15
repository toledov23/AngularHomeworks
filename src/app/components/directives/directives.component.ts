import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  title = 'AngularHomeworks';
  activeClass: boolean = false;

  toggleActiveClass() {
    this.activeClass = !this.activeClass;
  }

}
