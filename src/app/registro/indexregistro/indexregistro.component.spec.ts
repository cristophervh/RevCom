import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexregistroComponent } from './indexregistro.component';

describe('IndexregistroComponent', () => {
  let component: IndexregistroComponent;
  let fixture: ComponentFixture<IndexregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
