import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCupReadingComponent } from './coffee-cup-reading.component';

describe('CoffeeCupReadingComponent', () => {
  let component: CoffeeCupReadingComponent;
  let fixture: ComponentFixture<CoffeeCupReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeCupReadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeCupReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
