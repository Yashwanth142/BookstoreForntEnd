import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { SignupLoginComponent } from './component/signup-login/signup-login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { DisplaybooksComponent } from './component/displaybooks/displaybooks.component';
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';
import { ViewbookComponent } from './component/viewbook/viewbook.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './Pipe/searchPipe/search.pipe';
import { CartComponent } from './component/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { WishlistComponent } from './component/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    DashboardComponent,
    DisplaybooksComponent,
    GetallbooksComponent,
    ViewbookComponent,
    SearchPipe,
    CartComponent,
    WishlistComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ReactiveFormsModule,FormsModule,
    MatTabsModule,MatCardModule,MatExpansionModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatCheckboxModule,MatIconModule,MatToolbarModule,
    MatSnackBarModule,HttpClientModule,MatMenuModule,MatDividerModule,
    MatPaginatorModule,NgxPaginationModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
