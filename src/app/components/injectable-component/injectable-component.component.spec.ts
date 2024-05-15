import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableComponentComponent } from './injectable-component.component';

describe('InjectableComponentComponent', () => {
  let component: InjectableComponentComponent;
  let fixture: ComponentFixture<InjectableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
