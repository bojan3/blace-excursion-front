import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastExcursionsComponent } from './past-excursions.component';

describe('PastExcursionsComponent', () => {
  let component: PastExcursionsComponent;
  let fixture: ComponentFixture<PastExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastExcursionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
