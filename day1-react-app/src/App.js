import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import MovieList from './components/movieList';
import CardForm from './components/CardForm';
import ReactModal from 'react-modal'
import { useState, useEffect } from "react";


function App() {

const [isModalOpen, setIsModalOpen] = useState (false);

  return (
    <div className="App">
       {/* <Home /> <-- must be capitalized in order to make it a react command */}
        <button onClick={() => setIsModalOpen (true)}> Open Modal!!</button>
        <MovieList />
        <ReactModal isOpen={isModalOpen}>
        <button onClick={() => setIsModalOpen (false)}> Close Modal!!</button>
        
        </ReactModal>

    </div>
  );
}
export default App;
