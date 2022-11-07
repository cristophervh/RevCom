import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidotiendaComponent } from './contenidotienda.component';

describe('ContenidotiendaComponent', () => {
  let component: ContenidotiendaComponent;
  let fixture: ComponentFixture<ContenidotiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidotiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


