import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState,useEffect} from 'react';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import Erro404 from './components/Error 404/Error_404.jsx'
import Form from './components/Form/Form';
import ButtonTm from './components/ButtonTm/ButtonTm';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';


//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
//const API_KEY = '6aea350df2d6.dbc1c1f2c52426402b94'

function App() {

   const [characters, setCharacters]= useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   //const Email = 'ejemplo@gmail.com';
   //const Password = 'password1';

   const login = async (userData) => {
      
      const URL = 'http://localhost:3001/rickandmorty/login';
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }

useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);

   
const onSearch = async (id) => {
   try {
       const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
       const data = response.data;
       if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
       } else {
           window.alert('¡No hay personajes con este ID!');
       }
   } catch (error) {
       console.log(error.message);
   }
}

const onClose = (id) =>{
   setCharacters(characters.filter((character) => character.id !== id));
}


let location = useLocation()
console.log(location)

   return (
      <div className='App'>
          {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
      <div className='content'>
      <Routes>
      <Route path='/'>
      <Route path='' element={<Form login ={login}/>}/>
      <Route path= 'home' element = {<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='Abaut' element = {<About/>}/>
      <Route path='Detail/:id' element= {<Detail/>}/>
      <Route path='Favorites' element={<Favorites/>}/>
      </Route>
      <Route path="*" element={<Erro404 />} />
      </Routes>
      </div>
      <ButtonTm/>
      </div>
   );
}

export default App;
