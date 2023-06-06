import { Component } from '@angular/core';
import { UserService } from 'src/app/service/userServices/user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  wishlist: any = [];
  constructor(private wishlistService : UserService){}
  ngOnInit() {
    this.getAllBooksAddedInWishlist();
  }

  getAllBooksAddedInWishlist(){
    console.log("getting list of books which are added in wishlist => ");

    this.wishlistService.getAllWishlist().subscribe((result : any) => {
      //console.log('wishlist data-->',result);
      this.wishlist = result.data[0].books
      //console.log(this.wishlist);       
    }) 
  }

  removeFromList(productId : any){
    console.log("removing book from wishlist => ");
    this.wishlistService.removeBookFromWishlist(productId).subscribe((result : any) => {
      //console.log(result);  
      this.getAllBooksAddedInWishlist();  
    })
  }

}
