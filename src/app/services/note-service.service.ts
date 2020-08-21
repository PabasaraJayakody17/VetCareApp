import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  //private notes: Note[] = []; 
  //private note: Note;
  //public loaded: boolean = false;

  constructor(public storage: Storage) { }


  /*saveNote(note: Note){
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getAllNotes(){
    return this.storage.get('notes').then((notes) => {
      this.notes = notes == null ? [] : notes;
      return [...this.notes];
    });
    //return [...this.notes];
    //return this.notes.slice();
  }

  getNote(createDate: number){
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(r => r.createDate === createDate);
      return this.note;
    });
  }

  deleteNote(createDate: number){
    this.notes = this.notes.filter((notes) =>{
      return this.note.createDate !== createDate
    });
    this.storage.set('notes', this.notes);
  }*/
}
