import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { NoteService } from 'src/app/services/note-service.service';
//import { Note } from 'src/models/note.model';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.page.html',
  styleUrls: ['./viewnotes.page.scss'],
})
export class ViewnotesPage implements OnInit {

  //note: Note;

  constructor(private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteService: NoteService) {
      //this.note = this.navParams.get('note');
  }

  ngOnInit() {
  }

  /*deleteNote(createDate: number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }*/

}
