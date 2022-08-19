import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIComponent } from './registrar-i.component';

describe('RegistrarIComponent', () => {
  let component: RegistrarIComponent;
  let fixture: ComponentFixture<RegistrarIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
