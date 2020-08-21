import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note-service.service';
//import { Note } from 'src/models/note.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {

  //public note: Note;

  /*formGroup: FormGroup;
  notes: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';*/

  constructor(private route: ActivatedRoute,
    public navCtrl: NavController,
    private noteService: NoteService) { 
    /*this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    });*/
  }

  ngOnInit() { }

  /*saveNote(note: Note){
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }*/
  

}
