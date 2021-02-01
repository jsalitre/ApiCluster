import { Component, Input, OnInit } from '@angular/core';
import { Well } from 'src/app/Models/Well.model';

@Component({
  selector: 'app-intro-search',
  templateUrl: './intro-search.component.html',
  styleUrls: ['./intro-search.component.css']
})
export class IntroSearchComponent implements OnInit {

  @Input() well: Well;
  constructor() { 


    
    this.well = new Well().createNew("Api Cluster", "", false, "../assets/location_search.svg");

  }

  ngOnInit(): void {
  }

}
