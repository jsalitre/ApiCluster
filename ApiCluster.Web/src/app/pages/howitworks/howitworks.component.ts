import { Component, OnInit } from '@angular/core';
import { Well } from '../../Models/Well.model';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {

  wells: Array<Well> = [];


  constructor() { }

  ngOnInit(): void {

      this.wells.push(new Well("ake your self usefull..", "", false, "../assets/faq.svg"));

  }

}
