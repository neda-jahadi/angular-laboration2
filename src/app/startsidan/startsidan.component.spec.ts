import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsidanComponent } from './startsidan.component';

describe('StartsidanComponent', () => {
  let component: StartsidanComponent;
  let fixture: ComponentFixture<StartsidanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsidanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsidanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
