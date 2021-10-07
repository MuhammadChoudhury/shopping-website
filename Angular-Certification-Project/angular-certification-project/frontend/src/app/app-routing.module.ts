import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AddNewProductComponent } from './pages/add-new-product/add-new-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   // Public 
  //   path: "", component: HomePageComponent,
  // },
  // { // Logged In
  //   path: "/profile", canActivate: [AuthGuard], component: ProfilePageComponent,
  // },
  {
    // Admin
    path: "admin/add-new-product", canActivate: [AdminGuard], component: AddNewProductComponent
  },
  { path: "cart", component: CartComponent},
  { path: "checkout", component: CheckOutComponent},
  { path: "orders", component: UserOrdersComponent},
  { path: "admin/orders",   canActivate: [AdminGuard], component: AdminOrdersComponent},

  
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
