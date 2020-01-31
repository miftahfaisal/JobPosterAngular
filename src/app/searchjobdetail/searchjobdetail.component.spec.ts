import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobdetailComponent } from './searchjobdetail.component';

describe('SearchjobdetailComponent', () => {
  let component: SearchjobdetailComponent;
  let fixture: ComponentFixture<SearchjobdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchjobdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
