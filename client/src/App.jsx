//import './App.css'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { Detail, Create, Home, Landing } from './Views/index';
import Navbar from './Componentes/Navbar/Navbar';
import SearchBar from './Componentes/SearchBar/SearchBar';
import { useEffect } from 'react';
import * as actions from './Redux/actions'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actions.getCountries())
    dispatch(actions.getActivities())
    
  },[])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/home" element={<Home />} />
           <Route path="/create" element={<Create />} />
           <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
