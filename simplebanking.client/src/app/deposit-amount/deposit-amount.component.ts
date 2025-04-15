import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-deposit-amount',
  standalone: false,
  templateUrl: './deposit-amount.component.html',
  styleUrl: './deposit-amount.component.css'
})
export class DepositAmountComponent {

  accountId = 1; // Hardcoded for now
  depositAmount: number | null = null;
  message = '';
  errorMessage = '';

  constructor(private accountService: AccountService) { }

  deposit(): void {
    if (this.depositAmount !== null && this.depositAmount > 0) {
      const amount = this.depositAmount; // Store in a temporary variable
      this.accountService.deposit(this.accountId, amount).subscribe({
        next: (account) => {
          this.message = `Successfully deposited $${amount.toFixed(2)}. New balance: $${account.currentBalance.toFixed(2)}`;
          this.errorMessage = '';
          this.depositAmount = null; // Clear the input field
        },
        error: (error: any) => { // Explicitly type the error parameter
          this.errorMessage = 'Error processing deposit.';
          this.message = '';
          console.error('Deposit error:', error);
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid deposit amount.';
      this.message = '';
    }
  }

}
