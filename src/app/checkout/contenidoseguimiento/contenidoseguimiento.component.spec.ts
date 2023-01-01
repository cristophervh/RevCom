import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoseguimientoComponent } from './contenidoseguimiento.component';

describe('ContenidoseguimientoComponent', () => {
  let component: ContenidoseguimientoComponent;
  let fixture: ComponentFixture<ContenidoseguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoseguimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoseguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
