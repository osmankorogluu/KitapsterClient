import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksModule } from './books/books.module';
import { BasketModule } from './basket/basket.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BooksModule,
    BasketModule,
    HomeModule
  ]
})
export class ComponentsModule { }
