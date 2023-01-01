import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitybuttonComponent } from './quantitybutton.component';

describe('QuantitybuttonComponent', () => {
  let component: QuantitybuttonComponent;
  let fixture: ComponentFixture<QuantitybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitybuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantitybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
