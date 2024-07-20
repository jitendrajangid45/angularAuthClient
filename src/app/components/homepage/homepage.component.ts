import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  activeCustomers:any;
  dataSource:any = [];
  dataSourceCount:number = 0;
  distinctProducts:any = [];
  amount:any;
  pageSize:number = 5;
  pageNumber:number = 1;
  loader:boolean = false;

  constructor(public auth: AuthService,private api: DataService,private router: Router) {
    console.log("auth data-->>", auth);
  }

  ngOnInit(): void {
    this.getActiveCustomers();
  }

  previousFunc(){
    this.pageNumber < 2 ? this.pageNumber = 1 : this.pageNumber --;
    this.transactions();
  }

  nextFunc(){
    this.pageNumber>Math.floor(this.dataSourceCount/this.pageSize) ? this.pageNumber = this.pageNumber -- :this.pageNumber ++;
    this.transactions();
  }

  onTabChanged(event: MatTabChangeEvent) {
    if(event.index === 0){
      this.getActiveCustomers()
    }else if(event.index === 2) {
      this.getDistinctProducts()
    }
  }

  onSelectAccount(event:any,name:string) {
    let data = { 'account': event.target.value, 'name':name }
    this.router.navigate(['transactions'],{queryParams:{data:JSON.stringify(data)}});

  }

  getActiveCustomers(){
    this.api.getActiveCustomers().subscribe((data: any) => {
      this.activeCustomers = data.data;
    });
  }

  getDistinctProducts(){
    this.api.getDistinctProducts().subscribe((data:any)=>{
      this.distinctProducts = data.data;
    })
  }

  transactionCount(){
    this.loader = true;
    let inputValue = this.amount;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    this.api.getTransactionCount(inputValue).subscribe((data:any) => {
      this.dataSourceCount = data.data
      this.loader = false;
    })
  }

  transactions(){
    let inputValue = this.amount;
    inputValue = inputValue.replace(/[^0-9]/g, '');
      this.api.getBelowTransactions(inputValue,this.pageNumber, this.pageSize).subscribe((data:any) => {
        this.dataSource = data.data;
      })
    
  } 

}
