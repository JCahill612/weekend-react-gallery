import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../../GalleryList/GalleryList';

function App() {

  const [ galleryItems, setGalleryItems ] = useState( [] );

  useEffect( ()=>{
      console.log('Component loaded');
      getItems();
  }, []); 


  //get the items from the server 
  const getItems=()=>{
    axios.get( '/gallery' ).then( ( response )=>{
      setGalleryItems( response.data );

    }).catch( ( err ) =>{
      alert('error');
      console.log(err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryItems={galleryItems} />
      </div>

    );
}

export default App;