import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { DepositAmountComponent } from './deposit-amount/deposit-amount.component';
import { WithdrawalAmountComponent } from './withdrawal-amount/withdrawal-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBalanceComponent,
    DepositAmountComponent,
    WithdrawalAmountComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
