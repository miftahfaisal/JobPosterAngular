import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperienceeditComponent } from './workexperienceedit.component';

describe('WorkexperienceeditComponent', () => {
  let component: WorkexperienceeditComponent;
  let fixture: ComponentFixture<WorkexperienceeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkexperienceeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperienceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
