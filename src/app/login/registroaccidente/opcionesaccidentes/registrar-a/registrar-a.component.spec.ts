import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAComponent } from './registrar-a.component';

describe('RegistrarAComponent', () => {
  let component: RegistrarAComponent;
  let fixture: ComponentFixture<RegistrarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
