import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurantList: any[], filterString:String, propName:any): any[] {
    const result:any=[]
    if(!restaurantList || filterString=='' || propName==''){
      return restaurantList
    }

    restaurantList.forEach((restaurant:any)=>{
      if(restaurant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(restaurant)
        console.log(result);
        
      }
    })
    return result
  }

}
