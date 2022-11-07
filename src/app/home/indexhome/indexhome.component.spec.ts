import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexhomeComponent } from './indexhome.component';

describe('IndexhomeComponent', () => {
  let component: IndexhomeComponent;
  let fixture: ComponentFixture<IndexhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
