import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from '../../models/disease'; 

@Component({
  selector: 'app-sickcattle',
  templateUrl: './sickcattle.page.html',
  styleUrls: ['./sickcattle.page.scss'],
})
export class SickcattlePage implements OnInit {

  public diseases: Observable<Disease[]>;
  term: '';
  constructor(private  diseaseService: DiseaseService) { }

  ngOnInit() {
    this.diseases = this.diseaseService.getDiseases();
  }

}
