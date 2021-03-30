import React from 'react';

const ListaItem = (props) => {
    return (
        <li className="list-group-item">{props.nombre}</li>
    );
};

export default ListaItem;