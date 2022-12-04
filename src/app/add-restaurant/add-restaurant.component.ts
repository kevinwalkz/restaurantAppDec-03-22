import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  id:any;
  neighborhood:any;
  photograph:any;
  Monday:any;
  Tuesday:any;
  Wednesday:any;
  Thursday:any;
  Friday:any;
  Saturday:any;
  Sunday:any;
  rName:any;
  address:any;
  cuisine_type:any;
  rvname:any;
  date:any;
  rating:any;
  comments:any;
  lat:any;
  lng:any;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  
  addProduct(){
    let newRestaurant = {
      id: this.id,
      name: this.rName,
      neighborhood: this.neighborhood,
      photograph:this.photograph,
      address:this.address,
      latlng:{
        lat:this.lat,
        lng:this.lng
      },
      cuisine_type:this.cuisine_type,
      operating_hours:{
        Monday:this.Monday,
        Tuesday:this.Tuesday,
        Wednesday:this.Wednesday,
        Thursday:this.Thursday,
        Friday:this.Friday,
        Saturday:this.Saturday,
        Sunday:this.Sunday
      },
      reviews:[
        {
          name:this.rvname,
          date:this.date,
          rating:this.rating,
          comments:this.comments
        }
      ]
    }
    console.log(newRestaurant);
    this.api.addRestaurant(newRestaurant)
    .subscribe(()=>{
      alert('Restauurant Details Successfully added!')
      this.router.navigateByUrl('')
    })

  }


}
