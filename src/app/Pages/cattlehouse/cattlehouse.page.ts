import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CattleService } from '../../services/cattle.service';
import { Cattle } from '../../models/Cattle';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/Farm';

@Component({
  selector: 'app-cattlehouse',
  templateUrl: './cattlehouse.page.html',
  styleUrls: ['./cattlehouse.page.scss'],
})
export class CattlehousePage implements OnInit {

  public cattles: Observable<Cattle[]>;
  public farms: Observable<Farm[]>
  fid: string;
  term: '';
  constructor(private cattleService: CattleService,private farmService: FarmService,) { 
    //this.fid = localStorage.getItem('farmid');
  }

  ngOnInit() {
    this.cattles = this.cattleService.getCattles();
    this.farms = this.farmService.getFarms();
  }

}
