import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: { title: string }[] = []; 

  constructor() { }

  saveNote(note: {title:string}){
    this.notes.push(note);
  }

  getAllNotes(){
    return [...this.notes];
    //return this.notes.slice();
  }
}
