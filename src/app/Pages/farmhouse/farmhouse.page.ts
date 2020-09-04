import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/Farm';

@Component({
  selector: 'app-farmhouse',
  templateUrl: './farmhouse.page.html',
  styleUrls: ['./farmhouse.page.scss'],
})
export class FarmhousePage implements OnInit {

  private farms: Observable<Farm[]>
  fid: string;
  term: '';

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.farms = this.farmService.getFarms();
  }

}
