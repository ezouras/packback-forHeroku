import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{NgForm, NgModel} from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild("userDataForm") userDataForm: NgForm;

  defaultSelection="selectSize";
//in html [ngModel]="userEmail"
  userEmail=this.user.getUserEmail();

  constructor(private router:Router,
              private currentRoute:ActivatedRoute,
              private user:UserService) { }

  ngOnInit() {
   //this.userEmail=this.currentRoute.snapshot.queryParams["email"];
   //[ngModel]="firstAndLast" in form. 
   //this.firstAndLast="Evie Nicole Zouras"

  }

  onRequestDemoForm(){
    //console.dir(this.userDataForm);
    this.user.setUserEmail(this.userDataForm.controls.emailAddress.value);
    console.log(this.user.getUserEmail());
    //get all values from using ablve and do something with the data

    this.router.navigate(['/']);
  }

}
