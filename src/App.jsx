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
padding:5px;
`
const InputDiv = styled.div`
displa:flex;
background-color:white;
color:black;
border-radius:4px;
width:25rem;
padding:8px;
`
const InputBox = styled.input`
border:none;
outline:none;
cursor:pointer;
padding:2px;
font-size:large;
width:95%;
`
const MoviesContainer = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
background-image:linear-gradient(to bottom red,pink,yellow);
`
const UserNotice = styled.div`
display:flex;
align-items:center;
jusify-content:center;
`

function App() {
  const details = useSelector((state) => state);

  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const [timeoutId, setTimeOutId] = useState();


  function CallApi(e) {
    setSearch(e.target.value);
    clearTimeout(timeoutId);
    const timeout = setTimeout(async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${e.target.value}`)
      if (res) {
        setResult(res.data.Search);
        console.log(result);
        setSearch("")
      }
    }, 1000)
    setTimeOutId(timeout);
  }

  return (
    <Container>
      <Header>
        <span style={{ fontSize: "38px" }}>
          <i className="fas fa-film"></i>

        </span>

        <h1 style={{ cursor: "pointer" }}>Movies app</h1>
        <InputDiv>
          <i class="fas fa-search"></i>
          <InputBox type="search" placeholder="enter your movie"
            onChange={(e) => CallApi(e)}
            value={search}
          />

        </InputDiv>
      </Header>
      <MoviesContainer>

        {details.allDetails.payload ? <MoviesInfo /> : ""}

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
          <UserNotice>
            <h1>PLEASE SEARCH THE MOVIE TO GET THE DETAILS</h1>
          </UserNotice>}
      </MoviesContainer>
    </Container>
  );
}

export default App;
