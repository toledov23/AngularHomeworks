import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootLazyComponent } from './root-lazy.component';

describe('RootLazyComponent', () => {
  let component: RootLazyComponent;
  let fixture: ComponentFixture<RootLazyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootLazyComponent]
    });
    fixture = TestBed.createComponent(RootLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
