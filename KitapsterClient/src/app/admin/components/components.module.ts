import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModule } from './book/book.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderModule } from './order/order.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookModule,
    CustomerModule,
    DashboardModule,
    OrderModule
  ]
})
export class ComponentsModule { }
