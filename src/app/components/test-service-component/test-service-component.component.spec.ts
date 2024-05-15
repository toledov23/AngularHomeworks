import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServiceComponentComponent } from './test-service-component.component';

describe('TestServiceComponentComponent', () => {
  let component: TestServiceComponentComponent;
  let fixture: ComponentFixture<TestServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestServiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
