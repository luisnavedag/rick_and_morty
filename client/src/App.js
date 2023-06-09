import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from 'axios';
import {Routes, Route, useNavigate} from "react-router-dom"
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import Error from './components/error/Error';



function App() {
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false);

const navigate = useNavigate()
const EMAIL = "rym@gmail.com"
const PASSWORD = "123456";

async function login(userData) {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {access} = (await axios(URL + `?email=${email}&password=${password}`)).data;
      setAccess(access);
      access && navigate('/home');
   } catch (error) {
      console.log(error.message)
   }

}



useEffect(() => {
   !access && navigate('/');
}, [access]);

async function onSearch(id) {
   try {
      if(id < 1 || id > 826) return alert('¡No hay personajes con este ID!');
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const characterExists = characters.some((character) => character.id === data.id)
      if (data.name) {
         //Evitando que se dupliquen
         
         if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡El personaje ya está en pantalla!');
         }
      }
      
   } catch (error) {
      console.log(error.message)
   }
}


const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== id))
}

   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} setAccess={setAccess} />
         <Routes>
            <Route  exact path='/' element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters}
          onClose={onClose}/>} />
          <Route path='/favorites' element={<Favorites/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail characters={characters} />} />
            <Route path='*' element={<Error/>} />
         </Routes>

      </div>
   );
}

export default App;
