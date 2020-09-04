import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from 'src/app/models/disease';

@Component({
  selector: 'app-disease-info',
  templateUrl: './disease-info.page.html',
  styleUrls: ['./disease-info.page.scss'],
})
export class DiseaseInfoPage implements OnInit {

  disease: Disease = {
    cattleid: '',
    //veterinarianId: '',
    userid: '',
    date: '',
    clinicalSigns: '',
    typeOfClinicalSigns: '',
    diagnosis: '',
    treatment: '',
    remarks: ''
  }

  constructor(public alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private diseaseService: DiseaseService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.diseaseService.getDisease(id).subscribe(diseaseData => {
        this.disease = diseaseData;
      });
    }
  }

  async deleteDisease() {
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
            this.diseaseService.deleteDisease(this.disease.id).then(() => {
              this.router.navigateByUrl('/tabs/view-disease/:disease.id');
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
