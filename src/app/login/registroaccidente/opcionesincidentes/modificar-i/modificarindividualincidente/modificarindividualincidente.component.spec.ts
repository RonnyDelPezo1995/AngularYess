import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarindividualincidenteComponent } from './modificarindividualincidente.component';

describe('ModificarindividualincidenteComponent', () => {
  let component: ModificarindividualincidenteComponent;
  let fixture: ComponentFixture<ModificarindividualincidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarindividualincidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarindividualincidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
