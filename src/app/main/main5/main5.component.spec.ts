import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main5Component } from './main5.component';

describe('Main5Component', () => {
  let component: Main5Component;
  let fixture: ComponentFixture<Main5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
