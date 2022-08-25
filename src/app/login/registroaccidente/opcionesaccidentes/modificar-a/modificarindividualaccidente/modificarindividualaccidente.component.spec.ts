import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarindividualaccidenteComponent } from './modificarindividualaccidente.component';

describe('ModificarindividualaccidenteComponent', () => {
  let component: ModificarindividualaccidenteComponent;
  let fixture: ComponentFixture<ModificarindividualaccidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarindividualaccidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarindividualaccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
