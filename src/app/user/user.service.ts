export class UserService{
  private user = {
    email:"undefined",
    fullname:"undefined"
  }
setUserEmail(email:string){
  this.user.email=email;
}

setUserFullname(fullname:string){
  this.user.fullname=fullname;
}

getUserEmail(){
  return this.user.email;
}

getUserFullname(){
  return this.user.fullname;
}
}
