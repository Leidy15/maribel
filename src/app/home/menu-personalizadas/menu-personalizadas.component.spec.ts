import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonalizadasComponent } from './menu-personalizadas.component';

describe('MenuPersonalizadasComponent', () => {
  let component: MenuPersonalizadasComponent;
  let fixture: ComponentFixture<MenuPersonalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPersonalizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
