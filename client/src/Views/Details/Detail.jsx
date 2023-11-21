import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from '../../Redux/actions'
import './detail.css'

const Detail = () => {
  
  const {id} = useParams();

  const dispatch = useDispatch();

  const countryDetail = useSelector((state)=>state.countryDetail)

  useEffect(()=>{
    dispatch(actions.getCountryDetail(id)) //despacha cuando se monta
    return () =>{
     dispatch(actions.cleanDetail()) // despacha cuando se desmonta
    }
  },[])

  return(
   <div className='d-container'>
    <div className='d-box'>
     <img src={countryDetail[0]?.image} alt={countryDetail[0]?.name} className='d-img' />
    </div>
    <div className='d-box2'>
     <h2 className='d-text'>ID: {countryDetail[0]?.id}</h2>
     <h2 className='d-text'>País: {countryDetail[0]?.name}</h2>
     <h3 className='d-text'>Continente: {countryDetail[0]?.continent}</h3>
     <h3 className='d-text'>Capital: {countryDetail[0]?.capital}</h3>
     <h3 className='d-text'>Subregion: {countryDetail[0]?.subregion}</h3>
     <h3 className='d-text'>Area: {countryDetail[0]?.area} m3</h3>
     <h3 className='d-text'>Población: {countryDetail[0]?.population} habitantes </h3>
     <h2>Actividad creada en el país: </h2>

     {(countryDetail[0]?.Activities.length > 0) ? 
      <h3 className='d-text'>
        {countryDetail[0]?.Activities?.map(e =>(
         <p className='d-text'>{[`Actividad: ${e.name}`,<br />, `Dificultad: ${e.difficulty}`,<br />, `Duración: ${e.duration} hs`, <br />, `Temporada: ${e.season}`]}</p>
        ))}
     </h3> :
     <h3 className='d-text'>{`El país ${countryDetail[0]?.name} no tiene asociada actividades`}</h3>
     }    
    </div>
   </div>
  )
}

export default Detail;