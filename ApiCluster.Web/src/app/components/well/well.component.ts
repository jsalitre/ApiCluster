import { Component, OnInit, Input } from '@angular/core';
import { Well } from '../../Models/Well.model';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  showButton: boolean = false;
  
  @Input() well:Well;

  constructor() { 
    this.well = new Well();
  }

  ngOnInit(): void {
   
    //this.showButton = this.well.routeLink.length > 0;
  }

}
