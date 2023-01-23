import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitems from './Noteitems';


export default function Notes() {
    const notesContext = useContext(noteContext);
    const { notes, getNotes } = notesContext;

    useEffect(()=>{
        getNotes();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <AddNote />
            <h3 className='mt-5'>Your Note</h3>
            <div className="row">
                {notes.map((note) => {
                    return <Noteitems key={note._id} note={note} />
                })}
            </div>
        </>
    )
}
