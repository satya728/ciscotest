import { Component, Inject } from '@angular/core'
import { NotesService } from './notes.service'
import { NewNote, Note } from './note'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    selected: NewNote = { title: '', body: '', color: '', favorite: false }
    note: Note
    list: any = []

    constructor(private readonly notesService: NotesService) {}

    selectNote(note: Note) {
        // TODO: prevent changing original object
        this.selected = note
    }

    newNote() {
        this.selected = createNewNote()
    }

    saveNote(note: Note | NewNote) {
        // TODO: save note
        this.list.push(note)
    }
    getListNotes() {
        return this.list
    }
}

function createNewNote(): NewNote {
    return { title: '', body: '', color: '', favorite: false }
}
