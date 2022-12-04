import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  restId:any;
  constructor(private activateRoute:ActivatedRoute, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe((result)=>{
      this.restId = result['id'];
      console.log(this.restId);
    })
    this.api.deleteRestaurant(this.restId)
    .subscribe(()=>{
      alert("Requested restaurant has been removed")
      this.router.navigateByUrl('')
    })
  }

}
