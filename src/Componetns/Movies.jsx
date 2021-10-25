import React from "react";
import styled from "styled-components";

const Card = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:center;
justify-content:center;
border:none;
box-shadow:10px 10px 20px black;
height:50%;
background-color:pink;
margin:20px;
`
const Poster = styled.img`
margin:10px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`
const CardContent = styled.div`
display:flex;
width:100%;
height:30%;
align-items:center;
justify-content:space-between;
padding:10px;
`

function Movies({ title, poster, type, year }) {

    return (
        <Card>
            <Poster src={poster} alt="image not found" />
            <h2>{title}</h2>

            <CardContent>
                <span>Type:{type}</span>
                <span>year:{year}</span>
            </CardContent>
        </Card>

    )
}

export default Movies;