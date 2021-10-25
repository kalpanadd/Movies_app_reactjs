import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
display:flex;
width:100%;
background-color:red;
`

const Poster = styled.img`
margin:10px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const InfoContent = styled.div`
display:flex;
flex-direction:column;

`

function MoviesInfo() {
    return (
        <InfoContainer>
            <Poster />
            <InfoContent>
                <span>Title:</span>
                <span>Year:</span>
                <span>Imdb Rating:</span>
                <span>Released:</span>
                <span>Runttime:</span>
                <span>Genre:</span>
                <span>Director:</span>
                <span>Writer:</span>
                <span>Actors:</span>
                <span>Plot:</span>

            </InfoContent>


        </InfoContainer>

    )
}

export default MoviesInfo
