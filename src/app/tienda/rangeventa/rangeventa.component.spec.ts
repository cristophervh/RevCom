import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeventaComponent } from './rangeventa.component';

describe('RangeventaComponent', () => {
  let component: RangeventaComponent;
  let fixture: ComponentFixture<RangeventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
