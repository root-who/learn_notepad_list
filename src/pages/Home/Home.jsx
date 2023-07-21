import React from "react";
import Card from "../../components/Card/Card";
import "./style.css"

const Home = () => {
    const data = {
        title:"Teste",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        segment : {
          title: "Teste",
          color : "red",
        }
      }

    return (
        <>
            <div className="homeContainer">
                <div className="sidebar">
                    {/* Aqui entra o formulario */}
                </div>
                <div className="notes">
                    <Card data={data}/>
                    <Card data={data}/>
                    <Card data={data}/>
                    <Card data={data}/>
                    <Card data={data}/>
                    <Card data={data}/>
                </div>
            </div>
        </>
    );
}
 
export default Home;