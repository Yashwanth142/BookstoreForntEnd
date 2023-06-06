import { Injectable } from '@angular/core';
import { HttpService } from '../httpsServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  bUrl:string="http://localhost:5000/api/v1/"
  token:any;

  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem("LoginId");
  }

  signup(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.postMethod(this.bUrl+'users/',data,false,header)
  }
  login(data:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'  
      })
    }
    return this.httpservice.postMethod(this.bUrl+'users/login', data, false, header);
  }

  getAllBookData(){
    this.token= localStorage.getItem("LoginId")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.getMethod(this.bUrl+'books', true, httpOptions);
  }

  getAllCartBooks(){
    this.token= localStorage.getItem("LoginId")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.getMethod(this.bUrl+'cart', true, httpOptions);
  }

  addtocart(data:any)
  {
    this.token= localStorage.getItem("LoginId")
    //console.log('token:',this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.postMethod(this.bUrl+'cart/addbook/'+data,{}, true, httpOptions);
  }
  decquantity(data:any)
  {
    this.token= localStorage.getItem("LoginId")
    //console.log('token:',this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.postMethod(this.bUrl+'cart/decquantity/'+data,{}, true, httpOptions);
  }
  removebookformcart(data:any)
  {
    this.token= localStorage.getItem("LoginId")
    //console.log('token:',this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.postMethod(this.bUrl+'cart/removebook/'+data,{}, true, httpOptions);
  }
  addtowishlist(data:any)
  {
    this.token= localStorage.getItem("LoginId")
    //console.log('token:',this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.postMethod(this.bUrl+'wishlist/addbook/'+data,{}, true, httpOptions);
  }
  getAllWishlist(){
    this.token= localStorage.getItem("LoginId")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.getMethod(this.bUrl+'wishlist', true, httpOptions);
  }
  removeBookFromWishlist(data:any)
  {
    this.token= localStorage.getItem("LoginId")
    //console.log('token:',this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' +this.token
      })
    };
    return this.httpservice.postMethod(this.bUrl+'wishlist/removebook/'+data,{}, true, httpOptions);
  }
  
}
