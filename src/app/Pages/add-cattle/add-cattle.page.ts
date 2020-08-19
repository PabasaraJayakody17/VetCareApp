import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
@Component({
  selector: 'app-add-cattle',
  templateUrl: './add-cattle.page.html',
  styleUrls: ['./add-cattle.page.scss'],
})
export class AddCattlePage implements OnInit {

  myphoto: any;

  constructor(private actionSheetCtrl: ActionSheetController,
    private camera: Camera) { }

  ngOnInit() {
  }

  async showActionSheet(){
    await this.actionSheetCtrl.create({
      //header: 'Add New Informations',
      buttons:[
        {
          text: "Take from Gallery",
          handler: () => {
            console.log("Gallery clicked")
            this.getImage();
          }
        },
        {
          text: "Take Photo on Camera",
          icon: "camera",
          handler: () => {
            console.log("Camera clikced ")
            this.takePhoto();
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
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
      //Handle error
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
      //Handle error
    });
  }
}
