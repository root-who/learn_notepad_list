import React from "react";
import "./style.css"

const Note = ({data}) => {
    return (
        <>
            <div className="cardContainer">
                <header className="header">
                    <h2 className="title">
                        {data.title}
                        <span style={{backgroundColor: data.segment.color}} className="segment"/>
                    </h2>
                </header>
                <div className="contant_wrapper">
                    <p className="content">{data.content}</p>
                </div>
            </div>
        </>
    );
}
 
export default Note;