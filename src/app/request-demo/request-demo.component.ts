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
  emailInputText="Please enter your email"
  @ViewChild("email") emailInput:NgModel;

  constructor(private router: Router,
              private user:UserService) { }

  ngOnInit() {
  }
  onInputClick(){
    this.emailInputText=" ";
  }
  onSubmitEmail(){
    //set email using service
    this.user.setUserEmail(this.emailInput.value);
    //set email using params
    this.router.navigate(['/form'],{queryParams:{email:this.emailInput.value}});
  }

}
