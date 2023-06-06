import { Component } from '@angular/core';
import { DatashareService } from 'src/app/service/datashare/datashare.service';
import { UserService } from 'src/app/service/userServices/user.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent {

  getBookData : any;
  outofstock:boolean=false;
  constructor(private dataService : DatashareService,private user:UserService){}
  ngOnInit(){
    this.gettingDataOfBook();
    
    if(this.getBookData.quantity<=0){
      this.outofstock=false;
    }else{
      this.outofstock=true;
    }
  }

  gettingDataOfBook(){
    this.dataService.currentSource.subscribe((result : any) => {
      this.getBookData = result;
      //console.log('data--->',result);
    })
  }

  addTocart(productId:any){
    console.log('bookid--->',productId)
    this.user.addtocart(productId).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }

  

  addTowishlist(productId:any){
    console.log('bookid--->',productId)
    this.user.addtowishlist(productId).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
 

}
