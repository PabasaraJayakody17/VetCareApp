import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

  uid;
fullName;
dp;
name;
users = [];
  constructor(public nav: NavController, public fs: AngularFirestore, private router: Router) {
    this.uid = localStorage.getItem('userid');

    firebase.firestore().collection('userProfile').doc(this.uid).get().then(userData => {
       this.name = userData.data()['fullName'];
      // this.dp = userData.data().['dp'];
      });
    firebase.firestore().collection('userProfile').get().then(userData => {
      userData.forEach(childData => {
        if (childData.data()['uid'] !== this.uid){
          this.users.push(childData.data());
        }
      });
    });

  }

  ngOnInit() {
  }

  gotoChat(othrUid, fullName){
    sessionStorage.setItem('othrUid', othrUid);
    sessionStorage.setItem('fullName', fullName);
   // this.nav.navigateForward('tabs/chat');
    this.router.navigateByUrl('/chat');
  }


}
