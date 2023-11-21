import * as actions from "../../Redux/actions";
import { useDispatch } from "react-redux";
import './filters.css';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterContinent = (event) => {
    dispatch(actions.filterCountryByContinent(event.target.value));
    
  };

  const handleFilterActivities = (event) => {
    dispatch(actions.filterActivities(event.target.value));
  };

  const handleFilterOrder = (event) => {
    console.log(event.target.value);
    dispatch(actions.filterOrder(event.target.value));
  };

  return (
    <div>
      <div className="f-contene">
        <select
          onChange={(event) => handleFilterContinent(event)}
          className='f-select'>
          <option value="All">Continentes</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          onChange={(event) => handleFilterActivities(event)}
          className='f-select'>
          <option value="All">Actividades</option>
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

        <select
          onChange={(event) => handleFilterOrder(event)}
          className='f-select'>
          <option value="" disabled selected>Sort By:</option>
          <option value="A">País ascendente</option>
          <option value="D">País descendente</option>
          <option value="P">Población ascendente</option>
          <option value="G">Población descendente</option>
        </select>
        
      </div>
    </div>
  );
};

export default Filters;