import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CattleService } from '../../services/cattle.service';
import { Cattle } from '../../models/Cattle';

@Component({
  selector: 'app-update-cattle',
  templateUrl: './update-cattle.page.html',
  styleUrls: ['./update-cattle.page.scss'],
})
export class UpdateCattlePage implements OnInit {

  ctid;
  cattle: Cattle = {
    id:sessionStorage.getItem('cattleTagId'),
    farmid: '', 
    cattleTagId: '',
    cattleBreed: '',
    cattleDOB: '',
    specialFeature: '',
    sex: '',
    noLactation: '',
    birthWeg: '',
    breedingWeg: '', 
    cattleWeaningWeg: '',
    avgPreWeg: '',
    avgPostWeg: '',
    lastCalvingDate: '',
    cattleImg: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private cattleService: CattleService) { 
      this.ctid =  sessionStorage.getItem('cattleTagId');
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.cattleService.getCattle(id).subscribe(cattleData => {
        this.cattle = cattleData;
      });
    }
  }

  updateCattle(){
    this.cattleService.updateCattle(this.cattle).then(() => {
      this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
    }, err =>{
    });
  }
  goback(){
    
    this.router.navigateByUrl('/tabs/view-cattle/' + this.ctid);
   }
}
