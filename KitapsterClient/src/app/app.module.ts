import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: "baseurl", useValue: "https://localhost:7243/api", multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        UiModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
        HttpClientModule

        
    ]
})
export class AppModule { }
