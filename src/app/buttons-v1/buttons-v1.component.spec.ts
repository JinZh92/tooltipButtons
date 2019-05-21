import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsV1Component } from './buttons-v1.component';

describe('ButtonsV1Component', () => {
  let component: ButtonsV1Component;
  let fixture: ComponentFixture<ButtonsV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
