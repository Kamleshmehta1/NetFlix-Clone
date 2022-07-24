import './App.css';
import Request from './Components/Request.js';
import React, { Suspense, lazy } from 'react';
import Banner from "./Components/Banner"
import Row from './Components/Row';
import Nav from './Components/Nav';
import Accordian from './Components/Accordian';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div className="app">
        <Suspense fallback={
          <div >please wait...</div>
        }>

          <Nav />
          <Banner />

          <Row title="NETFLIX ORIGINALS" fetchUrl={Request.fetchNetflixOriginals} isLargeRow={true} />
          <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
          <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
          <Row title="Documentaries" fetchUrl={Request.fetchDocumantaries} />
          <Accordian />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
