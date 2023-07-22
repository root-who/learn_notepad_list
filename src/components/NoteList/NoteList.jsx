import { useEffect, useState } from "react";
import Note from "../Note/Note";
import "./style.css"

const NoteList = () => {
    
    const list= [
        {
            title:"Teste",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Teste",
                color : "red",
            }
        },
        {
            title:"Apache Kafka",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Estudos",
                color : "green",
            }
        },
        {
            title:"Bryan",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Consultas",
                color : "blue",
            }
        },
        {
            title:"Quinta-feira",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Treinos",
                color : "black",
            }
        },
        {
            title:"Quinta-feira",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Treinos",
                color : "black",
            }
        },
        {
            title:"Gastro",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Consultas",
                color : "blue",
            }
        },
        {
            title:"Terça-feira",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            segment : {
                title: "Treinos",
                color : "black",
            }
        },
        
    ]
    const [segmentFilter, setSegmentFilter] = useState()

    const getSegments = () => {
        const segmentGroups = {};
        list.forEach((value) => {
            const segment = value.segment.title;
            if (!segmentGroups[segment]) {
                segmentGroups[segment] = [];
            }
            segmentGroups[segment].push(value);
        });
        setSegmentFilter(Object.entries(segmentGroups))
    }

    useEffect(()=>{
        getSegments()
    }, [])

    return (
        <>
            {
                segmentFilter &&
                <div className="notes">
                    {
                        segmentFilter.map(([segment, note])=>(
                            <div className="segment_container">
                                <h2 className="segment_title">{segment}</h2>
                                {
                                    note.map((value)=>(
                                        <Note data={value}/>
                                    ))
                                }
                            </div>
                        ))
                    }  
                </div>
            }
        </>
    );
}
 
export default NoteList;