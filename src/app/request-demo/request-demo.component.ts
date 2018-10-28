import { Component, OnInit,ViewChild  } from '@angular/core';
import {Router} from '@angular/router';
import{NgModel}from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent implements OnInit {
  //emailInputText="Please enter your email"
  //@ViewChild("email") emailInput:NgModel;
  emailInput="";

  constructor(private router: Router,
              private user:UserService) { }

  ngOnInit() {
  }
  getInput(e){
    this.emailInput=e.target.value;
  }
  submitEmail(){
    //set email using service
    this.user.setUserEmail(this.emailInput);
    console.log(this.user.getUserEmail());
    //set email using params
    this.router.navigate(['/form'],{queryParams:{email:this.emailInput}});
  }

}
