import React from "react";
import "./style.css"
import NoteList from "../../components/NoteList/NoteList";

const Home = () => {
    

    return (
        <>
            <div className="home_container">
                <div className="sidebar">
                    {/* Aqui entra o formulario */}
                </div>
                <NoteList/>
            </div>
        </>
    );
}
 
export default Home;