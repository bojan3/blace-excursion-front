import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguidesComponent } from './tourguides.component';

describe('TourguidesComponent', () => {
  let component: TourguidesComponent;
  let fixture: ComponentFixture<TourguidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourguidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourguidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
