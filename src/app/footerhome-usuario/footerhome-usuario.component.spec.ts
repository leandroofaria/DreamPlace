import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhomeUsuarioComponent } from './footerhome-usuario.component';

describe('FooterhomeUsuarioComponent', () => {
  let component: FooterhomeUsuarioComponent;
  let fixture: ComponentFixture<FooterhomeUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterhomeUsuarioComponent]
    });
    fixture = TestBed.createComponent(FooterhomeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
