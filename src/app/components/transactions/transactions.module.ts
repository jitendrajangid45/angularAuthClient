import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
