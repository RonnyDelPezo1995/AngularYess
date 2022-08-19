import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIComponent } from './buscar-i.component';

describe('BuscarIComponent', () => {
  let component: BuscarIComponent;
  let fixture: ComponentFixture<BuscarIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
