import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexseguimientoComponent } from './indexseguimiento.component';

describe('IndexseguimientoComponent', () => {
  let component: IndexseguimientoComponent;
  let fixture: ComponentFixture<IndexseguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexseguimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexseguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
