import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*navigateToLogin(){
    this.router.navigate(['login'])
  }
  Edit(){
    this.router.navigate(['/tabs/edit-profile'])
  }
  ChangePassword(){
    this.router.navigate(['/tabs/change-password'])
  }
  About(){
    this.router.navigate(['/tabs/about'])
  }*/

}
