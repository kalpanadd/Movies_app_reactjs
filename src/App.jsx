import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

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

const Movies = styled.div`
display:flex;
flex-wrap:wrap;
background-color:red;
width:100%;
height:100%;
align-items:center;
justify-content:center;

`

const Card = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:center;
justify-content:center;
border:none;
box-shadow:10px 10px 20px black;
width:28%;
height:50%;
background-color:pink;
margin:20px;
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
      <Movies>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>

        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>
        <Card>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>
          <h1>hey</h1>

        </Card>

      </Movies>

    </Container>
  );
}

export default App;
