import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccinationService } from '../../services/vaccination.service';
import { Vaccination } from '../../models/Vaccine';

@Component({ 
  selector: 'app-vaccinecattle',
  templateUrl: './vaccinecattle.page.html',
  styleUrls: ['./vaccinecattle.page.scss'],
})
export class VaccinecattlePage implements OnInit {

  public vaccines: Observable<Vaccination[]>;

  constructor(private vaccinationService: VaccinationService) { }

  ngOnInit() {
    this.vaccines = this.vaccinationService.getVaccines();
  }

}
