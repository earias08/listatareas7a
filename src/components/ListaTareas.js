import React from "react";
import ListaItem from "./ListaItem";

const ListaTareas = (props) => {
  return (
    <ul className="list-group">
    {
        props.arregloTareas.map((dato,indice)=><ListaItem nombre={dato}></ListaItem>)
    }   
    </ul>
  );
};

export default ListaTareas;
