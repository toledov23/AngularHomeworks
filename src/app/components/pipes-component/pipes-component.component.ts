import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.scss']
})
export class PipesComponentComponent implements OnInit {
  numValue: number = 185.33;
  stringValue: string = 'Capitalized text'

  constructor() { }

  ngOnInit(): void {
  }

}
