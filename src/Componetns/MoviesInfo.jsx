import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { select_movie } from '../Redux/actions/selection_movie'
const InfoContainer = styled.div`
display:flex;
width:100%;
background-color:pink;
box-shadow:5px 10px 30px black;
border-radius:10px;
font-size:25px;
justify-content:space-between;
background-image: linear-gradient(to right, red ,pink,green,tomato,orange,brown);
color:black;
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
align-items:start;
justify-content:center;
`

function MoviesInfo() {
    const details = useSelector((state) => state);
    const quit_info = useDispatch();
    console.log(details);
    return (
        <InfoContainer>

            {details.allDetails && <Poster src={details.poster_url} alt="image" />}
            {details.allDetails && <InfoContent>
                <span><b>Title:</b>{details.allDetails.payload.Title}</span>
                <span><b>Year:</b>{details.allDetails.payload.Year}</span>
                <span><b>Imdb Rating:</b>{details.allDetails.payload.ImdbRating}</span>
                <span><b>Released:</b>{details.allDetails.payload.Released}</span>
                <span><b>Runttime:</b>{details.allDetails.payload.Runtime}</span>
                <span><b>Language:</b>{details.allDetails.payload.Language}</span>
                <span><b>Genre:</b>{details.allDetails.payload.Genre}</span>
                <span><b>Director:</b>{details.allDetails.payload.Director}</span>
                <span><b>Writer:</b>{details.allDetails.payload.Writer}</span>
                <span><b>Actors:</b>{details.allDetails.payload.Actors}</span>
                <span><b>Plot:</b>{details.allDetails.payload.Plot}</span>

            </InfoContent>}

            <i className="far fa-window-close" style={{ cursor: "pointer" }}
                onClick={(e) => quit_info(select_movie(false))}
            ></i>

        </InfoContainer >
    )
}

export default MoviesInfo
