import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';

const routes: Routes = [
  // defining path for each component
  
  // RestaurantsListComponent
  {
    path: '',
    component: RestaurantsListComponent
  },
  
  // ViewRestaurantComponent
  {
    path: 'view-restaurant/:id',
    component: ViewRestaurantComponent
  },

  // AddRestaurantComponent
  {
    path: 'add-restaurant',
    component: AddRestaurantComponent
  },

  // UpdateRestaurantComponent
  {
    path: 'update-restaurant/:id',
    component: UpdateRestaurantComponent
  },

  // DeleteRestaurantComponent
  {
    path: 'delete-restaurant/:id',
    component: DeleteRestaurantComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
