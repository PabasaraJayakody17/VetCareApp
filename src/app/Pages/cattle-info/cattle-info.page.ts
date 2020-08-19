import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cattle-info',
  templateUrl: './cattle-info.page.html',
  styleUrls: ['./cattle-info.page.scss'],
})
export class CattleInfoPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController,
    private router: Router) { }

  ngOnInit() {
  }

  async showActionSheet(){
    await this.actionSheetCtrl.create({
      cssClass: 'add',
      //header: 'Add New Informations',
      buttons:[
        {
          text: "Add New Vaccination Information",
          //cssClass: 'add',
          handler: () => {
            console.log("Add Vaccination info clicked")
            this.navigateToAddVaccination();
          }
        },
        {
          text: "Add New Disease Information",
          //cssClass: 'add',
          handler: () => {
            console.log("Add Disease info clicked")
            this.navigateToAddDisease();
          }
        },
        {
          text: "Add New Breeding Information",
          //cssClass: 'add',
          handler: () => {
            console.log("Add Breeding info clicked")
            this.navigateToAddBreeding();
          } 
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    }).then(res => res.present());  
  }

  navigateToAddVaccination(){
    this.router.navigate(['tabs/add-vaccination'])
  }
  navigateToAddDisease(){
    this.router.navigate(['tabs/add-disease'])
  }
  navigateToAddBreeding(){
    this.router.navigate(['tabs/add-breeding'])
  }
}
