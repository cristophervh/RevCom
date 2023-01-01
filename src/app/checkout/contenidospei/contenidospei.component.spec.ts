import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidospeiComponent } from './contenidospei.component';

describe('ContenidospeiComponent', () => {
  let component: ContenidospeiComponent;
  let fixture: ComponentFixture<ContenidospeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidospeiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidospeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
