import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Vaccination } from 'src/app/models/Vaccine';
import { VaccinationService } from '../../services/vaccination.service';

@Component({
  selector: 'app-add-vaccination',
  templateUrl: './add-vaccination.page.html',
  styleUrls: ['./add-vaccination.page.scss'],
})
export class AddVaccinationPage implements OnInit {

  ctid;
  vaccine: Vaccination = {
    cattleid: sessionStorage.getItem('cattleTagId'),
    //veterinarianId: '',
    userid: localStorage.getItem('userid'),
    date: '',
    nameOfVaccine: '',
    purposeOfVaccine: '',
    nextVaccineDate: '',
    reasonOfNextVaccine: '',
    remarks: '',
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vaccinationService: VaccinationService) {
      this.ctid =  sessionStorage.getItem('cattleTagId');
     }

  ngOnInit() {
  } 

  addVaccine(){
    this.vaccinationService.addVaccine(this.vaccine).then(() => {
      this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
    }, err => {
    });
  }


  goback(){
   
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
