import { Component, OnInit } from '@angular/core';
import { ServiceModuleTestService } from 'src/app/services/service-module-test.service';

@Component({
  selector: 'app-test-service-component',
  templateUrl: './test-service-component.component.html',
  styleUrls: ['./test-service-component.component.scss']
})
export class TestServiceComponentComponent implements OnInit {

  constructor(public service: ServiceModuleTestService) { }

  ngOnInit(): void {
  }

}
