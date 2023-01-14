import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitems from './Noteitems';


export default function Notes() {
    const notesContext = useContext(noteContext);
    const { notes } = notesContext;
    return (
        <>
            <AddNote />
            <h3 className='mt-5'>Your Note</h3>
            <div className="row">
                {notes.map((note) => {
                    return <Noteitems note={note} />
                })}
            </div>
        </>
    )
}
