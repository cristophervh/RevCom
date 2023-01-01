import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoperfilComponent } from './contenidoperfil.component';

describe('ContenidoperfilComponent', () => {
  let component: ContenidoperfilComponent;
  let fixture: ComponentFixture<ContenidoperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
