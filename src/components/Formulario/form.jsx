import React, { useState } from "react"
import "./style.css"

const Form = ({ createNote }) => {
    const [title, setTitle] = useState('')
    const [segment, setSegment] = useState('')
    const [color, setColor] = useState('')
    const [content, setContent] = useState('')
    const reciveNoteData = (data) => {
        createNote(
            {
                title: title,
                segment: segment,
                color: color,
                content: content
            }
        )
    }
    return (
        <>
            <form className="form_container"
                onSubmit={(event) => {
                    event.preventDefault()
                    reciveNoteData(event.currentTarget.elements)
                }}>
                <h1 className="form_title">Add here your notes</h1>
                <div className="container_field">
                    <label htmlFor="title" className="label">Title</label>
                    <input type="text" className="input" id="title" onChange={(event) => {
                        event.preventDefault()
                        setTitle(event.target.value)
                    }} />
                </div>
                <div className="container_field">
                    <label htmlFor="segment" className="label">Segment</label>
                    <input type="text" className="input" id="segment" onChange={(event) => {
                        event.preventDefault()
                        setSegment(event.target.value)
                    }} />
                </div>
                <div className="container_field">
                    <label htmlFor="color" className="label">Color</label>
                    <input type="text" className="input" id="color" onChange={(event) => {
                        event.preventDefault()
                        setColor(event.target.value)
                    }} />
                </div>
                <div className="container_field">
                    <label htmlFor="content" className="label">Content</label>
                    <input type="text" className="input" id="content" onChange={(event) => {
                        event.preventDefault()
                        setContent(event.target.value)
                    }} />
                </div>

                <input type="submit" value={"Create Note"} />
            </form>
        </>
    );
}

export default Form;