import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInteractionComponent } from './cs-interaction.component';

describe('CsInteractionComponent', () => {
  let component: CsInteractionComponent;
  let fixture: ComponentFixture<CsInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
