import { Component } from '@angular/core';
import { DatashareService } from 'src/app/service/datashare/datashare.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private dataservice:DatashareService){}

  searchData(event:any){
    this.dataservice.sendingValue2(event.target.value)
  }

}
