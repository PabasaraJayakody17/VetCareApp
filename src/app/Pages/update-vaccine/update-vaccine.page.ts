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
  ctid;
  vaccine: Vaccination = {
    cattleid: sessionStorage.getItem('cattleTagId'),
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
    private vaccinationService: VaccinationService) {
      this.ctid =  sessionStorage.getItem('cattleTagId');
     }

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
      this.router.navigateByUrl('/tabs/view-vaccine/' + this.ctid);
    }, err =>{
    });
  }

  goback(){    
    this.router.navigateByUrl('/tabs/view-vaccine/' + this.ctid);
   }

}
 