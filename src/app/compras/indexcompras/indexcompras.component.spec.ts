import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcomprasComponent } from './indexcompras.component';

describe('IndexcomprasComponent', () => {
  let component: IndexcomprasComponent;
  let fixture: ComponentFixture<IndexcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
