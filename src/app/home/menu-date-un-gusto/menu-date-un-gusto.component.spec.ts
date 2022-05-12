import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDateUnGustoComponent } from './menu-date-un-gusto.component';

describe('MenuDateUnGustoComponent', () => {
  let component: MenuDateUnGustoComponent;
  let fixture: ComponentFixture<MenuDateUnGustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDateUnGustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDateUnGustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
