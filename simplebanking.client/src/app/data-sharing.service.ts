import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private balanceUpdatedSource = new Subject<void>();
  balanceUpdated$ = this.balanceUpdatedSource.asObservable();

  notifyBalanceUpdated(): void {
    this.balanceUpdatedSource.next();
  }
  constructor() { }
}
