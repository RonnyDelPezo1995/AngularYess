import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroaccidenteComponent } from './registroaccidente.component';

describe('RegistroaccidenteComponent', () => {
  let component: RegistroaccidenteComponent;
  let fixture: ComponentFixture<RegistroaccidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroaccidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroaccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
