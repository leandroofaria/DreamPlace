import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeUsuarioComponent } from './menu-home-usuario.component';

describe('MenuHomeUsuarioComponent', () => {
  let component: MenuHomeUsuarioComponent;
  let fixture: ComponentFixture<MenuHomeUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHomeUsuarioComponent]
    });
    fixture = TestBed.createComponent(MenuHomeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
