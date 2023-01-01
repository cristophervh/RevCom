import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosaldoComponent } from './contenidosaldo.component';

describe('ContenidosaldoComponent', () => {
  let component: ContenidosaldoComponent;
  let fixture: ComponentFixture<ContenidosaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidosaldoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidosaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
