import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restId:any;
  restDetails:any={}
  constructor(private activatedRoute:ActivatedRoute, private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    //1. Get restaurant id that is to be updated
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId=result['id']
      console.log(this.restId);
    })
    //2. Fetch restaurant details based on the id
    this.apiService.viewRestraurant(this.restId)
    .subscribe((result)=>{
      this.restDetails = result
      console.log(this.restDetails);
      
    })
  }

  //updateRestaurant
  updateRestaurant(form:any){
    console.log(form.value);
    let updateRest = {
      id: form.value.id,
      name: form.value.rName,
      neighborhood: form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews:[
        {
          name:form.value.rvname,
          date:form.value.date,
          rating:form.value.rating,
          comments:form.value.comments
        }
      ]
    }
    this.apiService.updateRestaurant(this.restId,updateRest)
    .subscribe((data)=>{
      alert('Restaurant details are updated successfully')
      this.router.navigateByUrl('')
    })
  }

}
