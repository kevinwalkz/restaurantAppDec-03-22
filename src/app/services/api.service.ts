import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //variables

  search = new BehaviorSubject("")
  

  // dependency injection
  constructor(private api:HttpClient) { }

  //userdefined function

  // 1. To get all restaurant list api - http://localhost:3000/restaurants
  getRestaurantsList(){
    //use http request get - make api call to http://localhost:3000/restaurants
    // get() - HttpClient class - HttpClientModule Libary
    return this.api.get('http://localhost:3000/restaurants')
  }

  // 2. get a single restaurant detail from api
  viewRestraurant(restId:any){
    return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

  // 3. To add new restaurant detail
  addRestaurant(newRestaurant:any){
    return this.api.post('http://localhost:3000/restaurants/',newRestaurant)
  }

  // 4. To update particular restaurant
  updateRestaurant(restId:any, updatedRestBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestBody)
  }

  // 5. To delete particular restaurant
  deleteRestaurant(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)
  }

}
