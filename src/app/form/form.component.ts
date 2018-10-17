import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{NgForm} from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild("requestDemoForm") requestDemo: NgForm;
  /* this is the name of the ngModel for the user email*/
  userEmail="julie@logo.com";
  userData={
    emailAddress:"",
    fullName:"",
    phoneNumber:"",
    courseSubject:"",
    courseSize:""
  };

  constructor(private router:Router,
              private currentRoute:ActivatedRoute,
              private user:UserService) { }

  ngOnInit() {
   //this.userEmail=this.currentRoute.snapshot.queryParams["email"];
   this.userEmail=this.user.getUserEmail();
   //console.log(this.requestDemo.form);
   /*this.requestDemo.form.patchValue({
   //set value instead of patchValue allows you to chnge
   //all values of the form.
      userData:{//not sure where userData is coming from .
        emailAddress: this.user.getUserEmail()
      }
    });
    */

  }

  onRequestDemoForm(requestDemoForm:NgForm){
    //use the "name=" for this.
    /*this.userData.emailAddress=requestDemoForm.value.emailAddress;
    this.userData.fullName=requestDemoForm.value.fullName;
    this.userData.phoneNumber=requestDemoForm.value.phone;
    this.userData.courseSubject=requestDemoForm.value.courseSubject;
    this.userData.courseSize=requestDemoForm.value.enrollmentSize;
    console.log(this.userData);
    */
    this.user.setUserEmail(requestDemoForm.value.emailAddress);
    this.user.setUserFullname(requestDemoForm.value.fullName);
    console.log(this.user.getUserEmail());
    console.log(this.user.getUserFullname());
    this.router.navigate(['/']);
  }

}
