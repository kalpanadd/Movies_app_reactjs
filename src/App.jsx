import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Movies from './Componetns/Movies';
import MoviesInfo from './Componetns/MoviesInfo';


const Container = styled.div`
display:flex;
flex-direction:column;
`
const Header = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-around;
background-color:black;
color:white;
padding:12px;
`

const InputBox = styled.input`
border:none;
outline:none;
cursor:pointer;
padding:10px;
width:25rem;
border-radius:4px;
font-size:large;
`
const MoviesContainer = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`

function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");
  const [result, setResult] = useState();
  const details = useSelector((state) => state);


  async function searchMovie(e) {
    e.preventDefault();
    setMovie(search);
    const res = await axios.get(`${process.env.REACT_APP_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${movie}`)
    if (res !== "") {
      setResult(res.data.Search);
      console.log(res);
      setSearch("")
    }
  }


  return (
    <Container>
      <Header>
        <h1>Movies app</h1>
        <form onSubmit={(e) => searchMovie(e)}>
          <InputBox type="text" placeholder="enter your movie"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </Header>



      <MoviesContainer>

        <MoviesInfo />
        {result && details ?
          result.map((each) => {
            <MoviesInfo poster={each.Poster} />

          })
          : ""}
        {result ?
          result.map((each, index) =>
            <Movies key={index}
              poster={each.Poster}
              title={each.Title}
              year={each.Year}
              type={each.Type}
              imdbID={each.imdbID}
            />
          )
          :
          "PLEASE SEARCH THE MOVIE TO GET THE DETAILS"}

      </MoviesContainer>


    </Container>
  );
}

export default App;
