import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from 'src/app/models/disease';

@Component({
  selector: 'app-update-disease',
  templateUrl: './update-disease.page.html',
  styleUrls: ['./update-disease.page.scss'],
})
export class UpdateDiseasePage implements OnInit {

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
    private diseaseService: DiseaseService,
    private router: Router) { }

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
}
 