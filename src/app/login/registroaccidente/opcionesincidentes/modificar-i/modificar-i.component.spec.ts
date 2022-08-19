import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarIComponent } from './modificar-i.component';

describe('ModificarIComponent', () => {
  let component: ModificarIComponent;
  let fixture: ComponentFixture<ModificarIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
