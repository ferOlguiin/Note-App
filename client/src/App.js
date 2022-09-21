import './App.css';
import { TareaContainer } from './context/tareaContext';
import { Homepage, NotFoundPage, TareaForm, VerTareas, Tarea, Ayuda } from './pages';
import {Routes, Route} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Toaster } from 'react-hot-toast';

function App() {

  const {user} = useAuth0();

  return (
    <div className='colorFondo'>
      <TareaContainer>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/nuevatarea" element={user ? <TareaForm/> : <NotFoundPage/>}/>
        <Route path="/ayuda" element={user ? <Ayuda/> : <NotFoundPage/>}/>
        <Route path="/editar/:id" element={user ? <TareaForm/> : <NotFoundPage/>}/>
        <Route path="/vertareas" element={user ? <VerTareas/> : <NotFoundPage/>}/>
        <Route path="/vertarea/:id" element={user ? <Tarea/> : <NotFoundPage/>}/>
      </Routes>
      <Toaster/>
    </TareaContainer>
    </div>
  );
}

export default App;
