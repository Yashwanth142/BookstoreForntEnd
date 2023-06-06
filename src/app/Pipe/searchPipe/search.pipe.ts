import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any[],args: any){
    if(!args){
    return value;
    }
    return value.filter((result:any)=>{
      return result.bookName.toLowerCase().includes(args) || result.author.toLowerCase().includes(args)
    })
  }

}
