import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuorguidExcursionsComponent } from './tuorguid-excursions.component';

describe('TuorguidExcursionsComponent', () => {
  let component: TuorguidExcursionsComponent;
  let fixture: ComponentFixture<TuorguidExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuorguidExcursionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuorguidExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
