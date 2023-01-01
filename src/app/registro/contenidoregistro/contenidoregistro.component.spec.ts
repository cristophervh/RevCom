import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoregistroComponent } from './contenidoregistro.component';

describe('ContenidoregistroComponent', () => {
  let component: ContenidoregistroComponent;
  let fixture: ComponentFixture<ContenidoregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
