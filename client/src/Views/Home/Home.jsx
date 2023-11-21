import React  from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../Componentes/Cards/Cards';
import Card from '../../Componentes/Card/Card';
import '../../Styles/styles.css' ;
import Paginado from '../../Componentes/Paginado/Paginado';
import Filters from '../../Componentes/Filters/Filters';

const Home = () => {
    
  const allCountries = useSelector((state) => state.allCountriesFilter)
  const allActivities = useSelector((state)=> state.allActivitiesFilter)


  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage, setCountryPerPage] = useState(10)
  const indexOfLastCountry = currentPage * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage
  const currentCountry = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
  const currentActivities = allActivities.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
  }

  useEffect(()=>{
      setCurrentPage(1)

  },[allCountries])

  return (
    <div>
      <div>
        <Filters />
      </div>
      <div>
        <Paginado countryPerPage={countryPerPage}  allCountries={allCountries.length} paginado={paginado} currentPage={currentPage} allActivities={allActivities.length}  />
      </div>
      <div className='h-card'> {
        currentCountry?.map( coun =>{
          return ( 
           <div className='h-tarjet'>
            <Card name={coun.name} image={coun.image} continent={coun.continent} id={coun.id} />
           </div>
          )
        })
       }
      </div>
      <div className='h-cards'> {
       currentActivities?.map( coun =>{
        return ( 
         <div className='h-tarjet'>
          <Cards name={coun.name}  difficulty={coun.difficulty} duration={coun.duration} season={coun.season} Countries={coun.Countries} id={coun.id}/>
         </div>
        )
       })
       }
      </div>
    </div>
  )
}

export default Home