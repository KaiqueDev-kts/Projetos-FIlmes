import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import Home from './pages/Home';
import Filme from './pages/filmes/index';
import Error from './pages/error/index'
import Header from './components/header/index';


export default function RouterApp(){
    return(
        <BrowserRouter>
          <Header/>
           <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/filmes/id' element={ <Filme/> }/>

              <Route path='*' element={ <Error/> }/>
           </Routes>
        </BrowserRouter>
    )

}