import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User.model';
import { AuthenticationService } from 'src/app/Services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
