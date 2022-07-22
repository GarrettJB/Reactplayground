import styled from "styled-components";
import ReactModal from 'react-modal'
import { useState, useEffect } from "react";
const ModalCSS = styled.div`

fontize: 20px
border: 2px solid black;



`;

export default function MovieSearch(props){
   
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const [isModalOpen, setIsModalOpen] = useState (false);
    const [modalInfo, setModalInfo] = useState ("")

    useEffect( () => {
        async function getMovieDetail(){ 

            if(isModalOpen === true){
            const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${props.id}`;
            const response = await fetch(url); 
            const data = await response.json(); 
            console.log(data);
            setModalInfo(data);
        }
        }
          getMovieDetail();
        }, [isModalOpen]);





    return (
        <div>
        <button className="movieCardTitle" onClick={() => setIsModalOpen (true)}>
            <div><img src={props.poster}/></div>
            <div className="">{props.header} {props.year}</div>
            <div>{props.rating}</div> 
        </button>

        <ReactModal isOpen={isModalOpen}>
        <button onClick={() => setIsModalOpen (false)}> Close Modal!!</button>
        <div className="modalCSS">
        
        <div> <img src={modalInfo.Poster}/></div>
        <div><h1> {modalInfo.Title} {modalInfo.Rated}</h1></div>
        <div> {modalInfo.Plot}</div>
        <div> </div>
        <div> {modalInfo.Actors}</div>
        {console.log('modal info: ', modalInfo)}
        </div>
        </ReactModal>
        
          
        </div>
    );
    
}