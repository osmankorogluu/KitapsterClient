import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent,children:[

      {path: "",component:DashboardComponent},

      {path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then
      (module => module.CustomerModule)},

      {path: "books", loadChildren: () => import("./admin/components/book/book.module").then
      (module => module.BookModule)},

      {path: "orders", loadChildren: () => import("./admin/components/order/order.module").then
      (module => module.OrderModule)},

    ]
  },
  {path:"",component: HomeComponent},
  {path:"basket",loadChildren:() => import("./ui/components/basket/basket.module").then(module=>module.BasketModule)},

  {path:"books",loadChildren:() => import("./ui/components/books/books.module").then(module=>module.BooksModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
