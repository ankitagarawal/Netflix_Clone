import React from 'react'
import Navbar from './Components/Navbar'
import Row from './Components/Row'
import requests from './requests';
import './App.css';
import Banner from './Components/Banner';

function App() {
  return (
    <div className='app'>
      <Navbar />

      <Banner />

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantries" fetchUrl={requests.fetchDocumentaries} />


    </div>
  )
}

export default App