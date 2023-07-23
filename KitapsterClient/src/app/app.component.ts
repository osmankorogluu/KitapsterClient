import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KitapsterClient';
  constructor(private toastrService: CustomToastrService){
    toastrService.message("Merhaba", "Osman", ToastrMessageType.Info, ToastrPosition.BottomFulWidth);
    
  }
}

$.get("https://localhost:7243/api/books", (datas: any) => {
  console.log(datas)
})