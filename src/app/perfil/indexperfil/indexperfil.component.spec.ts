import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexperfilComponent } from './indexperfil.component';

describe('IndexperfilComponent', () => {
  let component: IndexperfilComponent;
  let fixture: ComponentFixture<IndexperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
