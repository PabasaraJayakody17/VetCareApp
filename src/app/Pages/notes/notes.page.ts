import { Component, OnInit } from '@angular/core';
import { AlertController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note-service.service';
import { AddnotePage } from '../addnote/addnote.page';
import { ViewnotesPage} from '../viewnotes/viewnotes.page';
//import { Note } from 'src/models/note.model';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  //private notes: Promise<Note[]>;
  //public note: Note

  constructor(public router: Router,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private noteService: NoteService) { }

  ngOnInit() { }

  /*ionViewWillEnter(){
    this.notes = this.getAllNotes();
  }

  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.router.navigateByUrl('/viewnotes');
      //this.navCtrl.push(ViewnotesPage, { note: this.note})
    });
  }

  getAllNotes(){
    return this.noteService.getAllNotes();
  }*/
}
