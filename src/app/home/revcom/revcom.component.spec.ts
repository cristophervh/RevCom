import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevcomComponent } from './revcom.component';

describe('RevcomComponent', () => {
  let component: RevcomComponent;
  let fixture: ComponentFixture<RevcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
