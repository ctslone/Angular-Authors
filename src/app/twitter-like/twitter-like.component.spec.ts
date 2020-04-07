import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterLikeComponent } from './twitter-like.component';

describe('TwitterLikeComponent', () => {
  let component: TwitterLikeComponent;
  let fixture: ComponentFixture<TwitterLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
