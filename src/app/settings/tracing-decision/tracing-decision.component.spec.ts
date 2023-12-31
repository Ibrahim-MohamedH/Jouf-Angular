import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracingDecisionComponent } from './tracing-decision.component';

describe('TracingDecisionComponent', () => {
  let component: TracingDecisionComponent;
  let fixture: ComponentFixture<TracingDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TracingDecisionComponent]
    });
    fixture = TestBed.createComponent(TracingDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
