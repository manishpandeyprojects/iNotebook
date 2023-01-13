import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitems from './Noteitems';


export default function Notes() {
    const notesContext = useContext(noteContext);
    const { notes, setNotes } = notesContext;
    return (
        <>
            <h3>Your Note</h3>
            <div className="row">
                {notes.map((note) => {
                    return <Noteitems note={note} />
                })}
            </div>
        </>
    )
}
