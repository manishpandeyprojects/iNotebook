import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const intialNote = [
        {
            "_id": "63b7f49290ee35c9ef7cf3b3",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": "My Title",
            "description": "My Description for this note",
            "tag": "General",
            "date": "2023-01-06T10:14:42.807Z",
            "__v": 0
        },
        {
            "_id": "63b7f49490ee35c9ef7cf3b5",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": "My Title",
            "description": "My Description for this note",
            "tag": "General",
            "date": "2023-01-06T10:14:44.047Z",
            "__v": 0
        },
        {
            "_id": "63b7f49a90ee35c9ef7cf3b8",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": "My Title",
            "description": "My Description for this note",
            "tag": "General",
            "date": "2023-01-06T10:14:50.992Z",
            "__v": 0
        },
        {
            "_id": "63b7f49a90ee35c9ef7cf3b8",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": "My Title",
            "description": "My Description for this note",
            "tag": "General",
            "date": "2023-01-06T10:14:50.992Z",
            "__v": 0
        },
        {
            "_id": "63b7f49a90ee35c9ef7cf3b8",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": "My Title",
            "description": "My Description for this note",
            "tag": "General",
            "date": "2023-01-06T10:14:50.992Z",
            "__v": 0
        },
        {
            "_id": "63b7f49a90ee35c9ef7cf3b8",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": "My Title",
            "description": "My Description for this note",
            "tag": "General",
            "date": "2023-01-06T10:14:50.992Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(intialNote);

    // Add a Notes
    const addNote = (title, description, tag)=>{
        const note = {
            "_id": "63b7f49a90ee35c9ef7cf3b8c",
            "user": "63b6c961111bb4e33ec08ba0",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-01-06T10:14:50.992Z",
            "__v": 0
        }

        setNotes(notes.concat(note))
    }

    // Delete a Notes
    const deleteNote = ()=>{

    }

    // Edit a Notes
    const editNote = ()=>{

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;   