import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLoginComponent } from './component/signup-login/signup-login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';
import { ViewbookComponent } from './component/viewbook/viewbook.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component : SignupLoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children : [
    {path:'',component:GetallbooksComponent},
    {path:'viewbook',component:ViewbookComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
