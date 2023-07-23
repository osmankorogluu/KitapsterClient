import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Book } from 'src/app/contracts/create_book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClientService: HttpClientService) { }

  create(book:Create_Book, successCallBack?: any){
    this.httpClientService.post({
      controller: "books"
    }, book)
    .subscribe(result => {
      successCallBack();
      alert("başarılı");
    });

  }
}
