import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcarritoComponent } from './indexcarrito.component';

describe('IndexcarritoComponent', () => {
  let component: IndexcarritoComponent;
  let fixture: ComponentFixture<IndexcarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexcarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
