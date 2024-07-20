import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getActiveCustomers () {
    return this.http.get(`${environment.serverUrl}/active-customers`);
  }

  getBelowTransactions (amount:any,pageNumber:number,pageSize:number) {
    return this.http.get(`${environment.serverUrl}/transaction-amount?amount=${amount}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getTransactionCount(amount:any){
    return this.http.get(`${environment.serverUrl}/transaction-amount-counts?amount=${amount}`);
  }

  getTransactionsOfAccount(accountId:any){
    return this.http.get(`${environment.serverUrl}/transaction-of-account?accountId=${accountId}`);
  }

  getDistinctProducts () {
    return this.http.get(`${environment.serverUrl}/distinct-products`);
  }
}
