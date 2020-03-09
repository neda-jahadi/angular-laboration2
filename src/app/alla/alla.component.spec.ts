import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaComponent } from './alla.component';

describe('AllaComponent', () => {
  let component: AllaComponent;
  let fixture: ComponentFixture<AllaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
