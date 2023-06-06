import { Component } from '@angular/core';
import { DatashareService } from 'src/app/service/datashare/datashare.service';
import { UserService } from 'src/app/service/userServices/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartBooks: any = [];
  constructor(private userService : UserService,private dataService : DatashareService){}
 ngOnInit(){
  this.getAllCartItems();
 }
 totalcartPrice = 0;

 expand1 : boolean = true
  showContent : boolean = false;
  expandPanel2 : boolean = false;
  expandPanel3 : boolean = false;

  firstPanelExpanded = true;
  secondPanelExpanded = false;
  thirdPanelExpanded = false;

  displayPlaceOrder : boolean = true
  displayContinueButton : boolean = true;
  onFirstPanelButtonClick(): void {
    this.showContent = !this.showContent;
    this.secondPanelExpanded = !this.secondPanelExpanded;
    this.displayPlaceOrder = false;
  }

  onSecondPanelButtonClick(): void {
    this.thirdPanelExpanded = !this.thirdPanelExpanded;
    this.displayContinueButton = false;
  }

 getAllCartItems(){
 // console.log('getting all cart items =>');
  this.userService.getAllCartBooks().subscribe((result : any) => {
   // console.log(result.data);
    this.cartBooks = result.data.books;
    this.totalcartPrice  = result.data.cartTotal;

    //console.log(this.cartBooks);
    //console.log("Total price of cart => Rs. ",this.totalcartPrice);
  })
  }

  removeBookFormCart(id:any){
    console.log('productid-->',id);
    this.userService.removebookformcart(id).subscribe((result : any) => {
      //console.log(result); 
      this.getAllCartItems();   
    })
    }

    decquantity(id:any){
      //console.log('productid-->',id);
      this.userService.decquantity(id).subscribe((result : any) => {
       // console.log(result);    
        this.getAllCartItems(); 
      })
    }

    incquantity(productId:any){
      //console.log('bookid--->',productId)
      this.userService.addtocart(productId).subscribe(
        (res)=>{
          //console.log(res)
          this.getAllCartItems(); 
        }
      )
    }
  
}
