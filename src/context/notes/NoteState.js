import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const intialNote = [];
    const [notes, setNotes] = useState(intialNote);

    // Get a Notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNmM5NjExMTFiYjRlMzNlYzA4YmEwIn0sImlhdCI6MTY3Mjk5ODQ2NX0.WNxhE3qhgGQvfLuHidH2BgmDkd-naDk6JstwhEtwD3I',

            }
        });

        const json = await response.json();
        console.log(json);
        setNotes(notes.concat(json))
    }

    // Add a Notes
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNmM5NjExMTFiYjRlMzNlYzA4YmEwIn0sImlhdCI6MTY3Mjk5ODQ2NX0.WNxhE3qhgGQvfLuHidH2BgmDkd-naDk6JstwhEtwD3I',

            },
            body: JSON.stringify({title, description, tag})
        });

        
        const json = await response.json();
        console.log(json);

        const note = {
            "_id": "63b7f49a90dee35c9ef7cf3b8c",
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
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNmM5NjExMTFiYjRlMzNlYzA4YmEwIn0sImlhdCI6MTY3Mjk5ODQ2NX0.WNxhE3qhgGQvfLuHidH2BgmDkd-naDk6JstwhEtwD3I',

            }
        });
        const json = await response.json();
        console.log(json);
        
        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
    }

    // Edit a Notes
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiNmM5NjExMTFiYjRlMzNlYzA4YmEwIn0sImlhdCI6MTY3Mjk5ODQ2NX0.WNxhE3qhgGQvfLuHidH2BgmDkd-naDk6JstwhEtwD3I',

            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        console.log(json);

        let newNote = JSON.parse(JSON.stringify(notes));

        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNotes(newNote);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;   