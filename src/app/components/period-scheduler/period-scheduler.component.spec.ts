import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodSchedulerComponent } from './period-scheduler.component';

describe('PeriodSchedulerComponent', () => {
  let component: PeriodSchedulerComponent;
  let fixture: ComponentFixture<PeriodSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
