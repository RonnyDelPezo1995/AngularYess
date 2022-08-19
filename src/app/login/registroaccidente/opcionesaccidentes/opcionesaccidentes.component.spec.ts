import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesaccidentesComponent } from './opcionesaccidentes.component';

describe('OpcionesaccidentesComponent', () => {
  let component: OpcionesaccidentesComponent;
  let fixture: ComponentFixture<OpcionesaccidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesaccidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesaccidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
