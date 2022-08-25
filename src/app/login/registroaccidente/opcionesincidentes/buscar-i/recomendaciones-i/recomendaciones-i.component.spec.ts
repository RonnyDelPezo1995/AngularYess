import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesIComponent } from './recomendaciones-i.component';

describe('RecomendacionesIComponent', () => {
  let component: RecomendacionesIComponent;
  let fixture: ComponentFixture<RecomendacionesIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacionesIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionesIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
