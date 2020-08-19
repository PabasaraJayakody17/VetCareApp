import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note-service.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  saveNote(value: { title: string }){
    this.noteService.saveNote(value);
  }
  

}
