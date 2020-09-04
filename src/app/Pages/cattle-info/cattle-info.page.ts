import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CattleService } from '../../services/cattle.service';
import { Cattle } from '../../models/Cattle';

@Component({
  selector: 'app-cattle-info',
  templateUrl: './cattle-info.page.html',
  styleUrls: ['./cattle-info.page.scss'],
})
export class CattleInfoPage implements OnInit {

  cattle: Cattle = {
    id: '',
    farmid: '',
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
    cattleImg: '',
  }

  constructor(private actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cattleService: CattleService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.cattleService.getCattle(id).subscribe(cattleData => {
        this.cattle = cattleData;
      });
    }
  }

  async deleteCattle() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: '<strong>Do you want to delete?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.cattleService.deleteCattle(this.cattle.id).then(() => {
              this.router.navigateByUrl('/tabs/view-farm/:farm.id');
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

  vaccine(){
    this.router.navigateByUrl('/tabs/view-vaccine/:vaccine.id');
  }

  disease(){
    this.router.navigateByUrl('/tabs/view-disease/:disease.id');
  }

  breeding(){
    this.router.navigateByUrl('/tabs/view-breeding/:breeding.id');
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
