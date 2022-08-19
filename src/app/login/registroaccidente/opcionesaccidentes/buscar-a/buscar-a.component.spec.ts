import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAComponent } from './buscar-a.component';

describe('BuscarAComponent', () => {
  let component: BuscarAComponent;
  let fixture: ComponentFixture<BuscarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
