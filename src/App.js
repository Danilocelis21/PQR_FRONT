import './App.css';
import Inicio from './inicio/inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pqrs from './pqrs/pqrs';
import Formulario from './formulario/formulario';


const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/pqrs' element={<Pqrs/>}></Route>
        <Route path='/formulario' element={<Formulario/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
