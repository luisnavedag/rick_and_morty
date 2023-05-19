import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from 'axios';
import {Routes, Route, useNavigate} from "react-router-dom"
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form';



function App() {
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false);

const navigate = useNavigate()
const EMAIL = "luisnaveda10@gmail.com"
const PASSWORD = "25848737";

const login = (userData) =>{
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         //Evitando que se dupliquen
         const characterExists = characters.some((character) => character.id === data.id)
         if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡El personaje ya está en pantalla!');
         }
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}


const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== id))
}

   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} />
         <Routes>
            <Route  exact path='/' element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters}
          onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail characters={characters} />} />
         </Routes>

      </div>
   );
}

export default App;
