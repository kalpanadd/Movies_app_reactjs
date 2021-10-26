import React from 'react';
import { useSelector } from 'react-redux';
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

function MoviesInfo({ poster }) {
    const details = useSelector((state) => state);
    console.log(details);

    return (


        <InfoContainer>
            {details.allDetails ? <Poster src={details.poster_url} alt="image" /> : ""}

            {details.allDetails ?

                <InfoContent>
                    <span>Title:{details.allDetails.payload.Title}</span>
                    <span>Year:{details.allDetails.payload.Year}</span>
                    <span>Imdb Rating:{details.allDetails.payload.ImdbRating}</span>
                    <span>Released:{details.allDetails.payload.Released}</span>
                    <span>Runttime:{details.allDetails.payload.Runtime}</span>
                    <span>Language:{details.allDetails.payload.Language}</span>
                    <span>Genre:{details.allDetails.payload.Genre}</span>
                    <span>Director:{details.allDetails.payload.Director}</span>
                    <span>Writer:{details.allDetails.payload.Writer}</span>
                    <span>Actors:{details.allDetails.payload.Actors}</span>
                    <span>Plot:{details.allDetails.payload.Plot}</span>

                </InfoContent>
                : ""}


        </InfoContainer>





    )
}

export default MoviesInfo
