import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextdcComponent } from './indextdc.component';

describe('IndextdcComponent', () => {
  let component: IndextdcComponent;
  let fixture: ComponentFixture<IndextdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndextdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndextdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
