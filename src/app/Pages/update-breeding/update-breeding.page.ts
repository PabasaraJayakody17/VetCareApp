import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedingService } from '../../services/breeding.service';
import { Breeding } from 'src/app/models/breeding';

@Component({
  selector: 'app-update-breeding',
  templateUrl: './update-breeding.page.html',
  styleUrls: ['./update-breeding.page.scss'],
})
export class UpdateBreedingPage implements OnInit {

  breeding: Breeding = {
    cattleid: '',
    dateOfHeatObserved: '',
    dateOfFirstAI: '',
    dateOfSecondAI: '',
    semanId: '',
    dateOfPD: '',
    dateOfLastCalving: '',
    noOfCalving: '',
    AIReceiptNo: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private breedingService: BreedingService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.breedingService.getBreeding(id).subscribe(breedingData => {
        this.breeding = breedingData;
      });
    }
  }

}
