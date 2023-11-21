import React from 'react'
import "./cards.css"
import {deleteActivities} from '../../Redux/actions'
import { useDispatch } from "react-redux";

const Cards = ({ name, difficulty, duration, season, Countries,id }) => {
       
    const dispatch = useDispatch();


    const onClose = () =>{
        dispatch(deleteActivities(id))
        alert("La actividad fue borrada");
    }

  return (
      
    <div className='container-c'>
      {( name?.length < 0) ? 
        <div className='card-c'>
          <h2 className='title-c'>{`La actividad: ${name} no tiene asociada actividades`}</h2>
        </div> 
        :    
        <div className='card-c'>
            <h2 className='title-c'>{`Activity: ${name}`}</h2>
            <h3 className='title-c'>{`Difficulty: ${difficulty}`}</h3>
            <h3 className='title-c'>{`Duration: ${duration} Hs`}</h3>
            <h3 className='title-c'>{`Season: ${season}`}</h3>
            <h3>Country / Countries: {Countries?.map(e =>{
                return <p className='title1-c'>{`- ${e.name}`}</p>
            })}</h3>
           <button onClick={()=> onClose({id})}>Delete</button>
        </div>        
      }        
    </div>
  );
};

export default Cards;

