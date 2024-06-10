import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePoliciesComponent } from './leave-policies.component';

describe('LeavePoliciesComponent', () => {
  let component: LeavePoliciesComponent;
  let fixture: ComponentFixture<LeavePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavePoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
