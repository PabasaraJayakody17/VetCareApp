import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  /*darkval: boolean = false;
  showtheme: boolean = false;*/
  myphoto: any;
  public userProfile: UserProfile;

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    public themeService: ThemeService,
    private actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    private camera: Camera) { }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  /*toggleDarkMode(){
    this.themeService.toggleAppTheme();
  }

  toggletheme(){
    this.showtheme = !this.showtheme;
  }*/

  async showActionSheet(){
    await this.actionSheetCtrl.create({
      // cssClass: "add-propic",
      // header: 'Upload profile picture',
      buttons: [
        {
          // text: "Take from Gallery",
          icon: 'image',
          cssClass: 'add-propic',
          handler: () => {
            console.log('Gallery clicked');
            this.getImage();
          }
        },
        {
          // text: "Take Photo on Camera",
          icon: 'camera',
          cssClass: 'add-propic',
          handler: () => {
            console.log('Camera clikced ');
            this.takePhoto();
          }
        },
        {
          // text: "Take Photo on Camera",
          icon: 'trash',
          cssClass: 'add-propic',
          handler: () => {
            console.log('Camera clikced ');
            this.presentAlertConfirm();
          }
        },
        /*{
          text: "Cancel",
          role: "cancel"
        }*/
      ]
    }).then(res => res.present());
  }

  getImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Delete',
      message: '<strong>Remove profile photo</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Remove',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async logOut(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('login');
  }
  /*navigateToLogin(){
    this.router.navigate(['login'])
  }
  Edit(){
    this.router.navigate(['/tabs/edit-profile'])
  }
  ChangePassword(){
    this.router.navigate(['/tabs/change-password'])
  }
  About(){
    this.router.navigate(['/tabs/about'])
  }*/

}
