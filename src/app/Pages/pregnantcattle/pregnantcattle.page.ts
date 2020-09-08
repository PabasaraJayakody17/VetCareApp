import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreedingService } from '../../services/breeding.service';
import { Breeding } from '../../models/breeding';

@Component({
  selector: 'app-pregnantcattle',
  templateUrl: './pregnantcattle.page.html',
  styleUrls: ['./pregnantcattle.page.scss'],
})
export class PregnantcattlePage implements OnInit {

  public breedings: Observable<Breeding[]>;
  term: '';
  constructor(private breedingService: BreedingService) { }

  ngOnInit() {
    this.breedings = this.breedingService.getBreedings();
  }

}
 