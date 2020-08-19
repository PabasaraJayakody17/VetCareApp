import { Component, OnInit } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { NoteService } from '../../services/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: { title: string }[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.notes = this.getAllNotes();
  }

  /*addNote(){
    this.navCtrl.push(AddNotePage);
  }*/

  getAllNotes(){
    return this.noteService.getAllNotes();
  }

}
