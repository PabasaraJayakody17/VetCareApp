import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  public errorMessages= {
    oldPassword: [
      { type: 'required', message: 'Not match with your password' },
    ],
    newPassword: [
      { type: 'required', message: 'New Password is required' },
      { type: 'minlength', message: 'New Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'New Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'New Password must contain numbers, uppercase and lowercase characters'}
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm Password is required' },
      { type: 'minlength', message: 'Confirm Password length must be longer than 6 characters'},
      { type: 'maxlength', message: 'Confirm Password length must be longer than 30 characters'},
      { type: 'pattern', message: 'Confirm Password must contain numbers, uppercase and lowercase characters'}
    ],
  }

  changePasswordForm = this.formBuilder.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', 
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")
      ]
    ],
    confirmPassword: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")
      ]
    ]
  });

  showOldPassword: boolean = false;
  oldpasswordToggleIcon = 'eye';

  showNewPassword: boolean = false;
  newpasswordToggleIcon = 'eye';

  showConfirmPassword: boolean = false;
  confirmpasswordToggleIcon = 'eye';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public submit(){
    console.log(this.changePasswordForm.value);
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
