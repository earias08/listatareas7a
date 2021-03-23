import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';

function App() {
  return (
    <Fragment>
        <Titulo></Titulo>
        <Subtitulo/>
    </Fragment>   
  );
}

export default App;
