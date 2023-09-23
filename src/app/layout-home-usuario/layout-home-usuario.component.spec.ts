import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomeUsuarioComponent } from './layout-home-usuario.component';

describe('LayoutHomeUsuarioComponent', () => {
  let component: LayoutHomeUsuarioComponent;
  let fixture: ComponentFixture<LayoutHomeUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHomeUsuarioComponent]
    });
    fixture = TestBed.createComponent(LayoutHomeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
