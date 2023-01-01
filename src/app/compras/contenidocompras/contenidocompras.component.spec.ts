import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidocomprasComponent } from './contenidocompras.component';

describe('ContenidocomprasComponent', () => {
  let component: ContenidocomprasComponent;
  let fixture: ComponentFixture<ContenidocomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidocomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
