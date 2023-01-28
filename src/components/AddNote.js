import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export default function AddNote() {

    const notesContext = useContext(noteContext);
    const { addNote } = notesContext;

    const [note, setNote] = useState({title: "", description: "", tag: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="addNote">
            <h3>Add a Note</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={note.title} name="title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" value={note.description} id="description" onChange={onChange} name="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" value={note.tag} onChange={onChange} name="tag" />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" >Add</button>
            </form>
        </div>
    )
}
