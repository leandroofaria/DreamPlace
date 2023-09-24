import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiarComponent } from './valiar.component';

describe('ValiarComponent', () => {
  let component: ValiarComponent;
  let fixture: ComponentFixture<ValiarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValiarComponent]
    });
    fixture = TestBed.createComponent(ValiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
