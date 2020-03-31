import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizationPipeComponent } from './capitalization-pipe.component';

describe('CapitalizationPipeComponent', () => {
  let component: CapitalizationPipeComponent;
  let fixture: ComponentFixture<CapitalizationPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalizationPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalizationPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
