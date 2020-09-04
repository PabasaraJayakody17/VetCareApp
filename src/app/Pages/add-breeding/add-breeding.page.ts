import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedingService } from '../../services/breeding.service';
import { Breeding } from 'src/app/models/breeding';

@Component({
  selector: 'app-add-breeding',
  templateUrl: './add-breeding.page.html',
  styleUrls: ['./add-breeding.page.scss'],
})
export class AddBreedingPage implements OnInit {

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

  constructor(private breedingService: BreedingService,
    private router: Router) { }

  ngOnInit() {
  }

  addBreeding(){
    this.breedingService.addBreeding(this.breeding).then(() => {
      this.router.navigateByUrl('/tabs/view-breeding/:breeding.id');
    }, err => {
    });
  }
}
 