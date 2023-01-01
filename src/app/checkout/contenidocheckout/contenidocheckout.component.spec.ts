import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidocheckoutComponent } from './contenidocheckout.component';

describe('ContenidocheckoutComponent', () => {
  let component: ContenidocheckoutComponent;
  let fixture: ComponentFixture<ContenidocheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidocheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidocheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
