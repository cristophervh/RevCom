import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexspeiComponent } from './indexspei.component';

describe('IndexspeiComponent', () => {
  let component: IndexspeiComponent;
  let fixture: ComponentFixture<IndexspeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexspeiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexspeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
