import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/service/datashare/datashare.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent implements OnInit{

  @Input() getBooksArray : any
  searchText:any
  page : any

  constructor(private dataService : DatashareService , private route : Router){}
  ngOnInit() {
    this.showSearchbook();
  }
  goToQuickView(book : any){
    this.dataService.sendingValue(book);
    this.route.navigateByUrl('/dashboard/viewbook');
  }

  showSearchbook(){
    this.dataService.currentSource2.subscribe((res:any)=>{
      //console.log('display',res)
      this.searchText=res;
    })
  }
}
