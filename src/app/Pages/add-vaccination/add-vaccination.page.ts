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

  vaccine: Vaccination = {
    cattleid: localStorage.getItem('cattleid'),
    //veterinarianId: '',
    userid: '',
    date: '',
    nameOfVaccine: '',
    purposeOfVaccine: '',
    nextVaccineDate: '',
    reasonOfNextVaccine: '',
    remarks: '',
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vaccinationService: VaccinationService) { }

  ngOnInit() {
  } 

  addVaccine(){
    this.vaccinationService.addVaccine(this.vaccine).then(() => {
      this.router.navigateByUrl('/tabs/view-cattle/:cattle.id');
    }, err => {
    });
  }

}
