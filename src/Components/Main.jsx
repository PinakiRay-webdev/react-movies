import React from 'react'
import Banner from './Banner'
import LatestMovies from './LatestMovies'
import TopRated from './TopRated'
import PopularCast from './PopularCast'
import WatchProviders from './WatchProviders'
import PopularMovies from './PopularMovies'
import Genres from './Genres'
import PopularShows from './PopularShows'
import TopRatedShows from './TopRatedShows'
import AiringToday from './AiringToday'
import Footer from './Footer'
const Main = () => {

    const BASE_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = '376a7b56bf7b28c1457c230c2ebbd63a'

  return (
    <div className='pl-[10vw] overflow-x-hidden bg-[#0d1b2a]' >
      <Banner BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <PopularMovies BASE_URL={BASE_URL} API_KEY = {API_KEY}  />
      <LatestMovies BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <TopRated BASE_URL={BASE_URL} API_KEY = {API_KEY}  />
      <PopularCast BASE_URL={BASE_URL} API_KEY = {API_KEY}/>
      {/* <WatchProviders BASE_URL={BASE_URL} API_KEY = {API_KEY} /> */}
      <Genres starting={0} ending={9}/>
      <PopularShows BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <Genres starting={9} ending={19}/>
      <TopRatedShows BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <AiringToday BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <Footer/>
    </div>
  )
}

export default Main
