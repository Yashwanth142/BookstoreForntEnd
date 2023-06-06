import { Component ,OnInit} from '@angular/core';
import { DatashareService } from 'src/app/service/datashare/datashare.service';
import { UserService } from 'src/app/service/userServices/user.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  bookArray = [];
  constructor(private bookService : UserService){}

  ngOnInit(){
    this.gettingAllBooks();  
  }

  gettingAllBooks(){
    console.log("Getting all book ");
    this.bookService.getAllBookData().subscribe(
      (response : any) => {
      //console.log(response);
      
      this.bookArray = response.data;
      //console.log(this.bookArray); 
    })
  }

}
