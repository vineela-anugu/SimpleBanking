import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { DataSharingService } from '../data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-balance',
  standalone: false,
  templateUrl: './view-balance.component.html',
  styleUrl: './view-balance.component.css'
})
export class ViewBalanceComponent implements OnInit, OnDestroy {

  account: Account | undefined;
  errorMessage = '';
  accountIdInput: number | null = null; // Property to hold the input value
  private balanceUpdateSubscription: Subscription | undefined;

  constructor(private accountService: AccountService, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.balanceUpdateSubscription = this.dataSharingService.balanceUpdated$.subscribe(() => {
      if (this.accountIdInput !== null) {
        this.getAccountDetails(); // Reload account details when notified
      }
    });
  }

  ngOnDestroy(): void {
    if (this.balanceUpdateSubscription) {
      this.balanceUpdateSubscription.unsubscribe();
    }
  }

  getAccountDetails(): void {
    if (this.accountIdInput !== null) {
      this.accountService.getAccount(this.accountIdInput)
        .subscribe({
          next: (account) => {
            this.account = account;
            this.errorMessage = '';
          },
          error: (error) => {
            this.errorMessage = 'Error fetching account details.';
            console.error('Error fetching account:', error);
            this.account = undefined;
          }
        });
    } else {
      this.errorMessage = 'Please enter an Account ID.';
      this.account = undefined;
    }
  }
}
