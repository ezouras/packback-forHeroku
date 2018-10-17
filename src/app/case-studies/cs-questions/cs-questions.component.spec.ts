import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsQuestionsComponent } from './cs-questions.component';

describe('CsQuestionsComponent', () => {
  let component: CsQuestionsComponent;
  let fixture: ComponentFixture<CsQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
