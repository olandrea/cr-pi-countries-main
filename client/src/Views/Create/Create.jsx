import React, { useState, useEffect } from 'react';
import validate from "../Validate/Validate";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions";
//import style from "./Form.module.css";
import './create.css';

const Create = () => {
  const allCountries = useSelector((state) => state.allCountries);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    pais: [],
  });
  
  const [errors, setErrors] = useState({
    name: "",
  });


  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "pais") {
      setForm({
        ...form,
        pais: [...form.pais, value],
      });
      setErrors(
        validate({
          ...form,
          [property]: value,
        })
      );
    } else {
      setForm({
        ...form,
        [property]: value,
      });
      setErrors(
        validate({
          ...form,
          [property]: value,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(Object.keys(errors).length === 0){
        
    dispatch(actions.addActivity(form));
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      pais: [],
    });
    alert("La actividad fue creada correctamente");
    } else{
        alert('Por favor, complete todos los datos')
    }
  };

  

  const handleDelete = (element) => {
    setForm({
      ...form,
      pais: form.pais.filter((ele) => ele !== element),
    });
  };



  return (
    <div className='c-container'>
      <form className='c-form' onSubmit={handleSubmit}>
        <div className='c-line'>
          <label htmlFor="">Nombre: </label>
          <select
            className='c-select'
            name="name"
            value={form.name}
            onChange={handleChange}
          >
            <option value="" disabled selected>
            Seleccione una actividad
            </option>
            <option value="Buceo">Buceo</option>
            <option value="Circuito Gastronomico">Circuito Gastronomico</option>
            <option value="Circuito de Museos">Circuito de Museos</option>
            <option value="Excursiones">Excursiones</option>
            <option value="Escalada">Escalada</option>
            <option value="Libre Elección">Libre Elección</option>
            <option value="Parapente">Parapente</option>
            <option value="Paseo en Bicicleta">Paseo en Bicicleta</option>
            <option value="Senderismo">Senderismo</option>
          </select>
          {errors.name && <p className='c-error'>{errors.name}</p>}
        </div>

        <div className='c-line'>
          <label>Dificultad: </label>
          <select
            className='c-select'
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            id=""
          >
            <option value="" disabled selected>
            Seleccione un valor
            </option>
            <option value="1 (Sin Dificultad)">1 (Sin Dificultad)</option>
            <option value="2 (Dificultad Baja)">2 (Dificultad Baja)</option>
            <option value="3 (Dificultad Media)">3 (Dificultad Media)</option>
            <option value="4 (Dificultad Alta)">4 (Dificultad Alta)</option>
            <option value="5 (Dificultad Extrema)">5 (Dificultad Extrema)</option>
          </select>
          {errors.difficulty && (<p className='c-error'>{errors.difficulty}</p>)}
        </div>
        <div className='c-line'>
          <label htmlFor="duration">Duración (en Horas): </label>
          <input className='c-select' type="number" value={form.duration} onChange={handleChange} name="duration"
            min={1}
            max={5}
          />
          {errors.duration && <p className='c-error'>{errors.duration}</p>}
        </div>

        <div className='c-line'>
          <label htmlFor="">Estación: </label>
          <select className='c-select' name="season" value={form.season} onChange={handleChange} id="" >
            <option value="" disabled selected>Seleccione un valor</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {errors.season && <p className='c-error'>{errors.season}</p>}
        </div>
        <div className='c-line'>
          <label htmlFor="">País / Países: </label>
          <select
            name="pais"
            value={form.pais}
            className='c-select'
            onChange={(event) => {
              handleChange(event);
            }}
          >
            <option value="" disabled selected>
            Seleccione país(es)
            </option>
            {allCountries?.map((e) => {
              
              return (
                <option value={e.name} key={e.name} >
                  {e.name}
                </option>
              );
            })}
          </select>
          {errors.pais && <p className='c-error'>{errors.pais}</p>}

          <div className='c-line'>
            {
            form.pais?.map((element) => (
              <div className='c-countries' key={element}>
                
                <button onClick={() => {
                    handleDelete(element);
                  }}
                >
                  {`${element}`}
                </button>
              </div>
            ))
          }
          </div>
        </div>

        <div className='c-line'>
          <button type="submit">
          Crear Actividad
          </button>
        </div>
      </form>
    </div>
  );
};
export default Create;