import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGolosinasComponent } from './menu-golosinas.component';

describe('MenuGolosinasComponent', () => {
  let component: MenuGolosinasComponent;
  let fixture: ComponentFixture<MenuGolosinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGolosinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGolosinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
