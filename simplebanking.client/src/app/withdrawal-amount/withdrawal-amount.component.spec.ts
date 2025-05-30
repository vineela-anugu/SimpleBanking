import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalAmountComponent } from './withdrawal-amount.component';

describe('WithdrawalAmountComponent', () => {
  let component: WithdrawalAmountComponent;
  let fixture: ComponentFixture<WithdrawalAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawalAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
