import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilleditComponent } from './skilledit.component';

describe('SkilleditComponent', () => {
  let component: SkilleditComponent;
  let fixture: ComponentFixture<SkilleditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilleditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
