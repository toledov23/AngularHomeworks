import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from 'src/app/services/service-test.service';

@Component({
  selector: 'app-injectable-component',
  templateUrl: './injectable-component.component.html',
  styleUrls: ['./injectable-component.component.scss']
})
export class InjectableComponentComponent implements OnInit {

  constructor(public myService: ServiceTestService) { }

  ngOnInit(): void {
  }

}
