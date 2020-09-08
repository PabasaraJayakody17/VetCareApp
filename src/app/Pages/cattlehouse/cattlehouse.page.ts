import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CattleService } from '../../services/cattle.service';
import { Cattle } from '../../models/Cattle';

@Component({
  selector: 'app-cattlehouse',
  templateUrl: './cattlehouse.page.html',
  styleUrls: ['./cattlehouse.page.scss'],
})
export class CattlehousePage implements OnInit {

  public cattles: Observable<Cattle[]>;
  fid: string;
  term: '';
  constructor(private cattleService: CattleService) { 
    //this.fid = localStorage.getItem('farmid');
  }

  ngOnInit() {
    this.cattles = this.cattleService.getCattles();
  }

}
