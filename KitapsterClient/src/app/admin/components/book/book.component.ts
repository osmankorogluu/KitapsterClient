import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
 constructor(private httpClientService : HttpClientService){

 }
 ngOnInit(): void{
  this.httpClientService.get({
    controller: "books"
  }).subscribe(data => console.log(data));

  // this.httpClientService.post({
  //   controller: "books"
  // },{
  //   bookname: "suç",
  //   productcode: 4,
  //   stock:5,


  // }).subscribe();

  //  this.httpClientService.put({
  //    controller: "books",
  //  }, {
  //   id:"1fa8182a-e832-4356-71b0-08db8ba2917a",
  //   bookname: "Karamazov kardeşler sexiy body",
  //   productcode: 4,
  //   stock:5,
  // }).subscribe();

  // this.httpClientService.delete({
  //   controller: "books"
  // }, "1fa8182a-e832-4356-71b0-08db8ba2917a")
  // .subscribe();
 }
}

  