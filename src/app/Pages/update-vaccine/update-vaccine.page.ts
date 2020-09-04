import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination } from '../../models/Vaccine';
import { VaccinationService} from '../../services/vaccination.service';

@Component({
  selector: 'app-update-vaccine',
  templateUrl: './update-vaccine.page.html',
  styleUrls: ['./update-vaccine.page.scss'],
})
export class UpdateVaccinePage implements OnInit {

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

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.vaccinationService.getVaccine(id).subscribe(vaccineData => {
        this.vaccine = vaccineData;
      });
    }
  }

  updateVaccine(){
    this.vaccinationService.updateVaccine(this.vaccine).then(() => {
      this.router.navigateByUrl('/tabs/view-vaccine/:id');
    }, err =>{
    });
  }

}
 