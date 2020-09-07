import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  scheduled = [];

  constructor(public navCtrl: NavController,
    private plt: Platform,
    private localNotifications: LocalNotifications,
    public alertCtrl: AlertController) { 
      this.plt.ready().then((rdy) => {
        this.localNotifications.on('click').subscribe(res => {
          console.log('click: ', res);
          let msg = res.data ? res.data.mydata : '';
          this.showAlert(res.title, res.text, msg);
        });

        this.localNotifications.on('trigger').subscribe(res => {
          console.log('click: ', res);
          let msg = res.data ? res.data.mydata : '';
          this.showAlert(res.title, res.text, msg);
        })
      });
  }

  ngOnInit() {
  }

  scheduleNotification(){
    this.localNotifications.schedule({
      id:1,
      title: 'Attention',
      text: 'First Notification',
      data: {mydata: 'This is my first notification'},
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
      // trigger: { at: new Date(new Date().getTime() + 5 * 1000) } can also use
      //foreground: true
    });
  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

}
