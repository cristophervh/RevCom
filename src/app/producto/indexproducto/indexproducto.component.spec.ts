import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexproductoComponent } from './indexproducto.component';

describe('IndexproductoComponent', () => {
  let component: IndexproductoComponent;
  let fixture: ComponentFixture<IndexproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
