import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterhomepageComponent } from './recruiterhomepage.component';

describe('RecruiterhomepageComponent', () => {
  let component: RecruiterhomepageComponent;
  let fixture: ComponentFixture<RecruiterhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
