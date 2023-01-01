import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidologinComponent } from './contenidologin.component';

describe('ContenidologinComponent', () => {
  let component: ContenidologinComponent;
  let fixture: ComponentFixture<ContenidologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidologinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
