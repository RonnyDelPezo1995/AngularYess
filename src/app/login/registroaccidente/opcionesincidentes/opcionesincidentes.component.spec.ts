import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesincidentesComponent } from './opcionesincidentes.component';

describe('OpcionesincidentesComponent', () => {
  let component: OpcionesincidentesComponent;
  let fixture: ComponentFixture<OpcionesincidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesincidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesincidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
