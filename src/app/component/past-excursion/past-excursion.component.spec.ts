import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastExcursionComponent } from './past-excursion.component';

describe('PastExcursionComponent', () => {
  let component: PastExcursionComponent;
  let fixture: ComponentFixture<PastExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
