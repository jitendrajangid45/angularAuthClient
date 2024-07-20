import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactionData:any;
  data:any;

  constructor(public auth: AuthService, private route: ActivatedRoute, private api : DataService) {
    console.log("transactions compoennt auth", auth);
   }

   ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.data) {
        this.data = JSON.parse(params.data);
        this.api.getTransactionsOfAccount (this.data.account).subscribe((res:any)=>{
          this.transactionData = res['data'][0].transactions
        })
      }
    });
  }

}
