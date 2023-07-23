import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/admin/base/base.component';
import { Create_Book } from 'src/app/contracts/create_book';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { BookService } from 'src/app/services/common/models/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService,  private bookService: BookService, private alertify: AlertifyService){
    super(spinner)
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  create(name: HTMLInputElement, code: HTMLInputElement, stock: HTMLInputElement){
  
    this.showSpinner(SpinnerType.BallAtom);
    const create_book: Create_Book = new Create_Book();
    create_book.bookname = name.value;
    create_book.productcode = parseInt(stock.value);
    create_book.stock= parseInt(stock.value);

    this.bookService.create(create_book, () => {
      this.hideSpinner(SpinnerType.BallAtom);
   
      });

    };
  }


