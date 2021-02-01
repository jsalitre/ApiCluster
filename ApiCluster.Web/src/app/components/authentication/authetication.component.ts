import { Component, Input, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Models/User.model';
import { AuthenticationService } from 'src/app/Services/authentication/authentication.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
  })


  

  export class AuthenticationComponent implements OnInit {


    public get IsAuth() {
        return this.authService?.IsAuth;
    }

    public get DisplayName() {
        return this.authService.User?.name;
    }

    constructor(private modalService: NgbModal, 
        private authService:AuthenticationService ) {


    }

    ngOnInit() {
        
    }

      open(content: any) {
          this.modalService.open(content).result.then((result)=> {
              
          }, (cancel) => {
              
          })
      }

      onLogin(f: NgForm) {
          debugger;
        if(f.valid) {
            this.authService.login(f.value.email, f.value.password).subscribe(resp => {
                this.authService.User = new User(resp.email);
                
                this.modalService.dismissAll();
            f.resetForm();
            })
            
        }
      }

      logout() {
          this.authService.logout();
      }
  }