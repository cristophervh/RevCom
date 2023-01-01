import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidotdcComponent } from './contenidotdc.component';

describe('ContenidotdcComponent', () => {
  let component: ContenidotdcComponent;
  let fixture: ComponentFixture<ContenidotdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidotdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidotdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
