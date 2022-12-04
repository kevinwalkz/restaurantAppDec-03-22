import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {

  restId:any;
  restDetails:any;
  constructor(private activatedRoute:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result=>{
      console.log(result['id']);
      this.restId = result['id']
    })

    this.apiService.viewRestraurant(this.restId)
    .subscribe((result:any)=>{
      console.log(result);
      this.restDetails = result
      
    })
  }
  

}
