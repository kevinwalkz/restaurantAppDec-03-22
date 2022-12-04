import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  //property
  restName = "List Of Restaurants"
  restaurantList:any = []

  lDate:any

  //To hold searchterm
  searchTerm=""

  //dependency injection
  constructor(private apiService:ApiService) {
    this.lDate = new Date()
   }

  ngOnInit(): void {

    //apiservice call - to get all restaurant list - Async call - subscribe()
    this.apiService.getRestaurantsList()
    .subscribe((result)=>{
      this.restaurantList = result
      console.log(this.restaurantList);
    })

    // To get search term from api service
    this.apiService.search.subscribe((data)=>{
      console.log(data);
      this.searchTerm = data
            
    })
  }

}
