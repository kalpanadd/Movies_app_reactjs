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
background-size:cover;
background-position: center;
background-repeat:no-repeat;
margin:10px;

`
const CardContent = styled.div`
display:flex;
width:100%;
height:30%;
align-items:center;
justify-content:space-between;
padding:10px;
`

function Movies() {
    return (
        <Card>
            <Poster src="https://m.media-amazon.com/images/M/MV5BMTQ3NTMxODg1Ml5BMl5BanBnXkFtZTcwMjEyMjczMQ@@._V1_SX300.jpg" />

            <CardContent>
                <span>movie name:xsds</span>
                <span>year:1995</span>
            </CardContent>
        </Card>

    )
}

export default Movies;