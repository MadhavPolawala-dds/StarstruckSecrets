import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCupDetailsComponent } from './coffee-cup-details.component';

describe('CoffeeCupDetailsComponent', () => {
  let component: CoffeeCupDetailsComponent;
  let fixture: ComponentFixture<CoffeeCupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeCupDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeCupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
