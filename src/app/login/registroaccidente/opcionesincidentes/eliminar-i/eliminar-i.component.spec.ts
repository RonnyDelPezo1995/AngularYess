import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarIComponent } from './eliminar-i.component';

describe('EliminarIComponent', () => {
  let component: EliminarIComponent;
  let fixture: ComponentFixture<EliminarIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
