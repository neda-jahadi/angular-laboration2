import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtikelComponent } from './add-artikel.component';

describe('AddArtikelComponent', () => {
  let component: AddArtikelComponent;
  let fixture: ComponentFixture<AddArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
