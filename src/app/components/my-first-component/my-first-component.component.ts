import { Component, OnInit } from '@angular/core';
import { ServiceModuleTestService } from 'src/app/services/service-module-test.service';
import { ServiceTestService } from 'src/app/services/service-test.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {

  constructor(
    public myService: ServiceTestService,
    public service: ServiceModuleTestService
  ) { }

  ngOnInit(): void {
  }

}
