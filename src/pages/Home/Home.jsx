import React from "react";
import "./style.css"
import NoteList from "../../components/NoteList/NoteList";
import Form from "../../components/Formulario/form";

const Home = () => {
    const createNote = (noteData) => {
        console.log(noteData)
    }

    return (
        <>
            <div className="home_container">
                <div className="sidebar">
                    <Form createNote={createNote} />
                </div>
                {/* <NoteList /> */}
            </div>
        </>
    );
}

export default Home;