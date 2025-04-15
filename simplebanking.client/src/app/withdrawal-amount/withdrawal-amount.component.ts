import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-withdrawal-amount',
  standalone: false,
  templateUrl: './withdrawal-amount.component.html',
  styleUrl: './withdrawal-amount.component.css'
})
export class WithdrawalAmountComponent {

  accountId = 1; // Hardcoded for now
  withdrawalAmount: number | null = null;
  message = '';
  errorMessage = '';

  constructor(private accountService: AccountService) { }

  withdraw(): void {
    if (this.withdrawalAmount !== null && this.withdrawalAmount > 0) {
      const amount = this.withdrawalAmount;
      this.accountService.withdraw(this.accountId, amount).subscribe({
        next: (account) => {
          this.message = `Successfully withdrew $${amount.toFixed(2)}. New balance: $${account.currentBalance.toFixed(2)}`;
          this.errorMessage = '';
          this.withdrawalAmount = null;
        },
        error: (error: any) => {
          this.errorMessage = 'Error processing withdrawal.';
          this.message = '';
          console.error('Withdrawal error:', error);
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid withdrawal amount.';
      this.message = '';
    }
  }

}
