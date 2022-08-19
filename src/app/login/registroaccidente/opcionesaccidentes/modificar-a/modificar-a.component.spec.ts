import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAComponent } from './modificar-a.component';

describe('ModificarAComponent', () => {
  let component: ModificarAComponent;
  let fixture: ComponentFixture<ModificarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
