import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAComponent } from './eliminar-a.component';

describe('EliminarAComponent', () => {
  let component: EliminarAComponent;
  let fixture: ComponentFixture<EliminarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
