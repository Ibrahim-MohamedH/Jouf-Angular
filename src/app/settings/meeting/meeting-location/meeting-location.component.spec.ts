import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingLocationComponent } from './meeting-location.component';

describe('MeetingLocationComponent', () => {
  let component: MeetingLocationComponent;
  let fixture: ComponentFixture<MeetingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingLocationComponent]
    });
    fixture = TestBed.createComponent(MeetingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
