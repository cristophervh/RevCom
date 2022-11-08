import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeprecioComponent } from './rangeprecio.component';

describe('RangeprecioComponent', () => {
  let component: RangeprecioComponent;
  let fixture: ComponentFixture<RangeprecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeprecioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeprecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
