import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCupcakesComponent } from './menu-cupcakes.component';

describe('MenuCupcakesComponent', () => {
  let component: MenuCupcakesComponent;
  let fixture: ComponentFixture<MenuCupcakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCupcakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
