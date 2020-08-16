import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  showPassword: boolean = false;
  passwordToggleIcon = 'eye';
  
  showConfirmPassword: boolean = false;
  confirmpasswordToggleIcon = 'eye';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }
  navigateToHome(){
    this.router.navigate(['home'])
  }

  public togglePassword(){
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }

  public toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;

    if(this.confirmpasswordToggleIcon == 'eye'){
      this.confirmpasswordToggleIcon = 'eye-off';
    }
    else{
      this.confirmpasswordToggleIcon = 'eye';
    }
  }
}
