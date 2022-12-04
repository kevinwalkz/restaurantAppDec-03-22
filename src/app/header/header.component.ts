import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restNote = "Search Restaurant Here"

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  searchTerm(event:any){
    // console.log(event.target.value);
    let searchKey = event.target.value
    console.log(searchKey);
    this.api.search.next(searchKey)
  }

}
