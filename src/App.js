import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MovieDashBoard from './movie/movieDashBoard/pages/MovieDashBoard'
import Navbar from './shared/Navbar'
import Movies from './movie/movieList/pages/Movies'
import MovieDetail from './movie/movieDetail/pages/MovieDetail'
import Series from './movie/movieList/pages/Series'
import SeriesDetail from './movie/movieDetail/pages/SeriesDetail'
import MovieCart from './movie/movieCart/pages/MovieCart'
import Borbar from './shared/Botbar'
import Botbar from './shared/Botbar'
import UserInfo from './user/components/UserInfo'
import ProfileInfo from './user/pages/ProfileInfo'
import Signup from './auth/Signup'
import Login from './auth/Login'

const App = () => {
  return (
 
    <Router>
    
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<MovieDashBoard/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MovieDetail/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/series/:seriesId' element={<SeriesDetail/>}/>
        <Route path='/mylist' element={<MovieCart/>}/>
        <Route path='/profile' element={<ProfileInfo/>}/>
      </Routes>
      
</Router>
    
 
    
  )
}

export default App