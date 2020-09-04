import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from '../../services/farm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.page.html',
  styleUrls: ['./add-farm.page.scss'],
})
export class AddFarmPage implements OnInit {

  farm: Farm = {
    farmName: '',
    farmRegNo: '',
    ownerName: '',
    veterinarianDivision: '',
    GSDivision: '',
    address: '',
    contactNo: '',
    cattleCount: '',
    dairyCattleCount: ''
  }

  fid;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private farmService: FarmService) { 
      this.fid = localStorage.setItem('farmid', this.farmService.farmId);
  }

  ngOnInit() {
  }

  addFarm(){
    this.farmService.addFarm(this.farm).then(() => {
      this.router.navigateByUrl('/tabs/farmhouse');
    }, err => {
    });
  }

}
