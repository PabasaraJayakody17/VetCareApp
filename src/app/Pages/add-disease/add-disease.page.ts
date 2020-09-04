import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from 'src/app/models/disease';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.page.html',
  styleUrls: ['./add-disease.page.scss'],
})
export class AddDiseasePage implements OnInit {

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

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private diseaseService: DiseaseService) { }

  ngOnInit() {
  }

  addDisease(){
    this.diseaseService.addDisease(this.disease).then(() => {
      this.router.navigateByUrl('/tabs/view-disease/:disease.id');
    }, err => {
    });
  }


}
