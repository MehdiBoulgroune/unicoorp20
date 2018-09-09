import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanyComponent } from './accompany.component';

describe('AccompanyComponent', () => {
  let component: AccompanyComponent;
  let fixture: ComponentFixture<AccompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
