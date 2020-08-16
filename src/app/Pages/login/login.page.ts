import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword: boolean = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToFarm(){
    this.router.navigate(['tabs/farm'])
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

}
