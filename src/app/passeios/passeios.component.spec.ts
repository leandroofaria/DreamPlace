import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseiosComponent } from './passeios.component';

describe('PasseiosComponent', () => {
  let component: PasseiosComponent;
  let fixture: ComponentFixture<PasseiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasseiosComponent]
    });
    fixture = TestBed.createComponent(PasseiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
