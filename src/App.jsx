import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

import Movies from './Componetns/Movies';

const Container = styled.div`
display:flex;
flex-direction:column;
`
const Header = styled.div`
display:flex;
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
width:30%;
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
  const [movie, setMovie] = useState("hey");
  return (
    <Container>
      <Header>
        <h1>Movies app</h1>
        <InputBox type="search" placeholder="enter your movie"
          onChange={(e) => setMovie(e.target.value)}
        />
      </Header>
      <MoviesContainer>

        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
      </MoviesContainer>

    </Container>
  );
}

export default App;
