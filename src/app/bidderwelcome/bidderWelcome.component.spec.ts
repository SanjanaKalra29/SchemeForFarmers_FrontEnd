import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderwelcomeComponent } from './bidderWelcome.component';

describe('BidderwelcomeComponent', () => {
  let component: BidderwelcomeComponent;
  let fixture: ComponentFixture<BidderwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});