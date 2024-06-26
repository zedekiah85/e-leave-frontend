import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceReviewComponent } from './finance-review.component';

describe('FinanceReviewComponent', () => {
  let component: FinanceReviewComponent;
  let fixture: ComponentFixture<FinanceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
