import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Book } from 'src/app/contracts/create_book';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClientService: HttpClientService) { }

  create(book: Create_Book, successCallBack?: any, errorCallBack?: any) {
    this.httpClientService.post({
      controller: "books"
    }, book)
      .subscribe(result => {
        successCallBack();
      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
      });
  }
}
