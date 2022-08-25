import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesAComponent } from './recomendaciones-a.component';

describe('RecomendacionesAComponent', () => {
  let component: RecomendacionesAComponent;
  let fixture: ComponentFixture<RecomendacionesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacionesAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
