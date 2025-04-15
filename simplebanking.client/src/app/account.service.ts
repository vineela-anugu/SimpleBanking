import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { DataSharingService } from './data-sharing.service'; // Import the shared service
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'https://localhost:7243/api/accounts';

  constructor(private http: HttpClient, private dataSharingService: DataSharingService) { }

  getAccount(accountId: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${accountId}`);
  }

  deposit(accountId: number, amount: number): Observable<Account> {
    const url = `${this.apiUrl}/${accountId}/deposit`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { amount };
    return this.http.post<Account>(url, body, { headers }).pipe(
      tap(() => this.dataSharingService.notifyBalanceUpdated()) // Notify after successful deposit
    );
  }


  withdraw(accountId: number, amount: number): Observable<Account> {
    const url = `${this.apiUrl}/${accountId}/withdraw`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { amount };
    return this.http.post<Account>(url, body, { headers }).pipe(
      tap(() => this.dataSharingService.notifyBalanceUpdated()) // Notify after successful withdrawal
    );
  }
}
