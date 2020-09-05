import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../../services/vaccination.service';
import { Vaccination } from 'src/app/models/Vaccine';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaccination-info',
  templateUrl: './vaccination-info.page.html',
  styleUrls: ['./vaccination-info.page.scss'],
})
export class VaccinationInfoPage implements OnInit {
  ctid;
  vaccine: Vaccination = {
    id: '',
    cattleid: '',
    // veterinarianid: '',
    userid:'',
    date: '',
    nameOfVaccine: '',
    purposeOfVaccine: '',
    nextVaccineDate: '',
    reasonOfNextVaccine: '',
    remarks: ''
  }

   private vaccines: Observable<Vaccination[]>;

  constructor(public alertController: AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private vaccinationService: VaccinationService) { }

  ngOnInit() {
    this.vaccines = this.vaccinationService.getVaccines();
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.vaccinationService.getVaccine(id).subscribe(vaccineData => {
        this.vaccine = vaccineData;
      });
    }
  }

  async deleteVaccine() {
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
            this.vaccinationService.deleteVaccine(this.vaccine.id).then(() => {
              this.router.navigateByUrl('/tabs/view-vaccine/:vaccine.id');
            }, err => {
            });
          }
        }
      ]
    });

    await alert.present();
  }

  goback(){
    this.ctid =  sessionStorage.getItem('cattleTagId');
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
