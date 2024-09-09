import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneCookieAnswerComponent } from './fortune-cookie-answer.component';

describe('FortuneCookieAnswerComponent', () => {
  let component: FortuneCookieAnswerComponent;
  let fixture: ComponentFixture<FortuneCookieAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortuneCookieAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortuneCookieAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
