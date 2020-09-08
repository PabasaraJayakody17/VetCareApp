import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Cattle } from 'src/app/models/Cattle';
import { CattleService } from '../../services/cattle.service';
import { FarmService } from '../../services/farm.service';
import { Farm } from 'src/app/models/Farm';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-cattle',
  templateUrl: './add-cattle.page.html',
  styleUrls: ['./add-cattle.page.scss'],
})
export class AddCattlePage implements OnInit {
  fid;
  // this.lastCalvingDate.toLocaleFormat('%Y-%m-%d');
  cattle: Cattle = {
    farmid: sessionStorage.getItem('farmId'),
    cattleTagId: '',
    cattleBreed: '',
    cattleDOB: '',
    specialFeature: '',
    sex: '',
    noLactation: '',
    birthWeg: '',
    breedingWeg: '', 
    cattleWeaningWeg: '',
    avgPreWeg: '',
    avgPostWeg: '',
    lastCalvingDate: '',
    cattleImg: ''
  }

  public farm: Farm;

  constructor(private actionSheetCtrl: ActionSheetController,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private camera: Camera,
    private cattleService: CattleService,
    private farmService: FarmService) { 
      this.fid =  sessionStorage.getItem('farmId');
      this.cattle.lastCalvingDate =  this.cattle.lastCalvingDate.split('T')[0]; 
     // console.log(dateFormat);
     // this.cattle.lastCalvingDate.toLocaleFormat('%Y-%m-%d');
    }

  ngOnInit() {
    /*this.farmService.getFarms().then(farm$ => {
      farm$.subscribe(farm => {
        this.farm = farm;
      });
    });*/
  }

  updateMyDate($event) {
   // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
    this.cattle.lastCalvingDate =  this.cattle.lastCalvingDate.split('T')[0]; 
    this.cattle.cattleDOB =  this.cattle.cattleDOB.split('T')[0];   
  }
  
  addCattle(){
    this.cattleService.addCattle(this.cattle).then(() => {
      this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
    }, err => {

    });
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
      var base64Str = 'data:image/jpeg;base64,'+imageData;
      var storageRef = firebase.storage().ref();
      var childRef = storageRef.child('firebasestorage.jpg');
      childRef.putString(base64Str, 'data_url').then(function(snapshot){
        alert("Successfully uploaded...");
      });
    }, (Err) => {
      alert(JSON.stringify(Err));
    })
  }

  takePhoto(){
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      var base64Str = 'data:image/jpeg;base64,'+imageData;
      var storageRef = firebase.storage().ref();
      var childRef = storageRef.child('firebasestorage.jpg');
      childRef.putString(base64Str, 'data_url').then(function(snapshot){
        alert("Successfully uploaded...");
      });
    }, (Err) => {
      alert(JSON.stringify(Err));
    })
  }


  goback(){
    
    this.router.navigateByUrl('/tabs/view-farm/' + this.fid);
   }
}
