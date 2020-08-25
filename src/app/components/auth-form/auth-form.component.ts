import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserCredential } from 'src/app/models/user';
import { LoadingController, AlertController } from '@ionic/angular';
import { auth } from 'firebase';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  public loading: HTMLIonLoadingElement;
  public authForm: FormGroup;
  @Input() actionButtonText: string;
  @Input() isPasswordResetPage = false;
  @Input() isLoginPage = false;
  @Input() isSignupPage = false;
  @Output() formSubmitted = new EventEmitter<any>();

  showPassword: boolean = false;
  passwordToggleIcon = 'eye';

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
      fullName: ['', Validators.minLength(6)],
      designation: ['', Validators.minLength(5)],
    });
  }

  ngOnInit() {}

  submitCredentials(authForm: FormGroup): void {
    if (!authForm.valid) {
      console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      this.showLoading();
      const credentials: UserCredential = {
        email: authForm.value.email,
        password: authForm.value.password,
        fullName: authForm.value.fullName,
        designation: authForm.value.designation,
      };
      this.formSubmitted.emit(credentials);
    }
  }

  async showLoading(): Promise<void> {
    try {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    } catch (error) {
      this.handleError(error);
    }
  }

  hideLoading(): Promise<boolean> {
    return this.loading.dismiss();
  }

  async handleError(error): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: error.message,
      buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    await alert.present();
  }
  public togglePassword(){
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
}
