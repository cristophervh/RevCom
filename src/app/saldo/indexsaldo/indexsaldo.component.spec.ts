import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexsaldoComponent } from './indexsaldo.component';

describe('IndexsaldoComponent', () => {
  let component: IndexsaldoComponent;
  let fixture: ComponentFixture<IndexsaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexsaldoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexsaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
