import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcheckoutComponent } from './indexcheckout.component';

describe('IndexcheckoutComponent', () => {
  let component: IndexcheckoutComponent;
  let fixture: ComponentFixture<IndexcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
