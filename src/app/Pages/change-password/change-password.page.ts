import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  showOldPassword: boolean = false;
  oldpasswordToggleIcon = 'eye';

  showNewPassword: boolean = false;
  newpasswordToggleIcon = 'eye';

  showConfirmPassword: boolean = false;
  confirmpasswordToggleIcon = 'eye';

  constructor() { }

  ngOnInit() {
  }
  public toggleOldPassword(){
    this.showOldPassword = !this.showOldPassword;

    if(this.oldpasswordToggleIcon == 'eye'){
      this.oldpasswordToggleIcon = 'eye-off';
    }
    else{
      this.oldpasswordToggleIcon = 'eye';
    }
  }

  public toggleNewPassword(){
    this.showNewPassword = !this.showNewPassword;

    if(this.newpasswordToggleIcon == 'eye'){
      this.newpasswordToggleIcon = 'eye-off';
    }
    else{
      this.newpasswordToggleIcon = 'eye';
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
