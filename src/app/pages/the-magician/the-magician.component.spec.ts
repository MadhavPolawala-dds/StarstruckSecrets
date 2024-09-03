import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMagicianComponent } from './the-magician.component';

describe('TheMagicianComponent', () => {
  let component: TheMagicianComponent;
  let fixture: ComponentFixture<TheMagicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMagicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMagicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
