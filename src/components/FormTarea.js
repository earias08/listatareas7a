import React, {Fragment, useState}  from "react";
import ListaTareas from "./ListaTareas";

const FormTarea = () => {
  // aqui escribo la logica
//   aqui creo el state
const [tareas, setTareas] = useState([]);
const [tareaIndividual, setTareaIndividual] = useState('');

// const guardarTarea = (e)=> {
//     console.log(e.target.value);
//     // document.getElementById('id')
//     // actualizar el valor del state
//     setTareaIndividual(e.target.value);
// }

const handleSubmit = (e) =>{
        e.preventDefault();
        // guardar una tarea en el arreglo de tareas
        // ...tareas equivalente a [1,2,3,tareIndividual]
        setTareas([...tareas,tareaIndividual])
}

  return (
    // logica js
    <Fragment>
        <div className="container d-flex justify-content-center my-5">
          {/*aqui agregar el html*/}
          <form className="w-75" onSubmit={handleSubmit}>
            <div className="mb-3 d-flex">
              <input
                type="text"
                placeholder="Ingrese una tarea"
                className="form-control me-2"
                onChange={(e)=> setTareaIndividual(e.target.value)}
              />
              <button className="btn btn-outline-light" type='submit'>Agregar</button>
            </div>
          </form>
        </div>
        <section className='container w-50 my-4'>
        <ListaTareas arregloTareas={tareas}></ListaTareas>
        </section>
    </Fragment>
  );
};

export default FormTarea;
