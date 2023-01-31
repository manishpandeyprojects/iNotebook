import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitems from './Noteitems';


export default function Notes(props) {
    const notesContext = useContext(noteContext);
    const { notes, getNotes, editNote } = notesContext;

    const [note, setNote] = useState({eid:"", etitle: "", edescription: "", etag: "" });

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const modelButton = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
        modelButton.current.click();
        setNote({eid:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(note);
        editNote(note.eid, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated the notes successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />

            <button type="button" ref={modelButton} className="btn btn-primary my-3" style={{ "display": "none" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.edescription} id="edescription" onChange={onChange} name="edescription" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" value={note.etag} onChange={onChange} name="etag" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleSubmit} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='mt-5'>Your Note</h3>
            <div className="row">
                <p>{notes.length === 0 && "No notes to display."}</p>
                {notes.map((note) => {
                    return <Noteitems showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
