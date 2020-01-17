import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationeditComponent } from './educationedit.component';

describe('EducationeditComponent', () => {
  let component: EducationeditComponent;
  let fixture: ComponentFixture<EducationeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
