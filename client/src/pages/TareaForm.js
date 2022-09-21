import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useTarea } from '../context/tareaContext';


export const TareaForm = () => {

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString(undefined, options);
  const time = new Date().toLocaleTimeString();
  const horaYfecha = date + ' a las ' + time;

  const navigate = useNavigate();
  const params = useParams();
  const {crearTareas, idUser, obtenerTarea, editarTarea} = useTarea();
  const [form, setForm] = useState({
    title: '',
    description: '',
    user: `${idUser}`,
    fav: '',
    date: `${horaYfecha}`
  })

  useEffect(() => {
    (async () => {
        if(params.id){
        const tarea = await obtenerTarea(params.id);
        setForm(tarea);
        }
    })();
}, [params.id]);

  return (
    <div className='d-flex justify-content-center align-items-center py-5 flex-column'>
      <Formik initialValues={form}
              validationSchema={Yup.object({
                title: Yup.string().required("Titulo requerido"),
                description: Yup.string().required("Descripción requerida"),
              })}
              onSubmit={async (values, actions) => {
                if(params.id){
                  await editarTarea(params.id, values)
                } else {
                  await crearTareas(values);
                }
                actions.setSubmitting(true);
                navigate("/vertareas");
              }}
              enableReinitialize

      >

        {({handleSubmit, isSubmitting}) => (
        
        <Form className="glaseado-form text-white form-control-sm p-5 rounded border-top border-bottom border-2 border-warning" onSubmit={handleSubmit}>
          
          <div className='d-flex justify-content-between align-items-center mb-4'>
              <h2 className="text-center m-0">{params.id ? "Editando tarea" : "Agregando tarea"}</h2>
              <button className='btn btn-dark btn-sm px-1 py-0 ms-4 mt-1' onClick={() => navigate("/vertareas")}>Volver</button>
          </div>
          <label className='form-label mb-0 mt-3 fw-bold fst-italic' htmlFor="t">Agregue un titulo</label>
          <Field className='form-control mt-1 mb-3' placeholder='Titulo' id="t" name='title'/>
            <ErrorMessage component="p" className='text-danger fw-bold' name='title'/>

          <label className='form-label mt-3 mb-0 fw-bold fst-italic' htmlFor="d">Agregue una descripcion</label>
          <Field as="textarea" className='form-control mt-1 mb-3' placeholder='Descripcion' id="d" name='description'/>
            <ErrorMessage component="p" className='text-danger fw-bold' name='description'/>

          <label className='form-label mb-0 mt-3 fw-bold fst-italic' htmlFor="f">¿Quieres la nota marcada como favorita?</label>
          <Field as="select" name="fav" className="form-control m-1" placeholder='Favorito' id="f">
              <option className='text-danger' >Selecciona una opción</option>
              <option value="1">Si</option>
              <option value="0">No</option>
              
          </Field>
            <ErrorMessage name='fav' component="p" className="text-danger"/>  
          
          <label className='form-label mt-1 fw-bold fst-italic' htmlFor="u">Id del usuario</label>
          <Field className='form-control mt-1 mb-3' disabled={true} placeholder='Id del usuario' id="u" value={idUser} name='user'/>
            <ErrorMessage component="p" className='text-danger fw-bold' name='user'/>

          <label className='form-label mt-1 fw-bold fst-italic' htmlFor="d">Fecha de creación</label>
          <Field className='form-control mt-1 mb-3' disabled={true} placeholder='Fecha' id="d" value={horaYfecha} name='date'/>
            <ErrorMessage component="p" className='text-danger fw-bold' name='date'/>

          <button className='btn btn-primary' type='submit' disabled={isSubmitting}>{params.id ? "Editar" : "Agregar"}</button>

        </Form>

        )}

      </Formik>
    </div>
  )
}

