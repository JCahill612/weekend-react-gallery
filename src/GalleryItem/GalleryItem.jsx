import React from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem( props ) {
    const noLikes = `No "Likes"`;
    const oneLike = ` person "Likes" this!`;
    const manyLikes = ` people "Like" this!`;

    //when the item is rendered on the screen it should be created with it's properties from the server
    const [ item, setItem ] = useState ( {
        id: props.item.id,
        path: props.item.path,
        description: props.item.description,
        likes: props.item.likes
    });

    //set the 'show' state of the image or description
    const[show, setShow] = useState(  true );   

    //show or hide the image/desription depending on the value of show
    const toggleItem = () => {
        setShow( !show );
    }

    //increase the number of loves by 1 each time a user clicks on the loves button
    const increaseCount = ( )=>{
        setItem( {
            ...item, likes: ++item.likes 
        })
        //make a call to server via axios
        updatePhotoLikes();
    }

    //update (PUT) the likes value for this item on the server
    //use axios as middleware to the server
    const updatePhotoLikes = ( ) =>{
        axios.put( `/gallery/like/${item.id}`, item ).then( ( response )=>{
            console.log( response.data );
        }).catch( ( error ) =>{
            alert( 'error' );
            console.log( error );
        });
    }    

    //determine the text to show on the screen - depends on how many people love the image
    const getCountText = ()=>{
        let text = noLikes;
        if( item.likes !== 0 ) {
            if( item.likes === 1 ) {
                text = item.likes + oneLike;
            } else {
                text = item.likes + manyLikes;
            }
        }
        return text;
    }
  
    return (
        <div>
            <div className="container">
                { show ?
                    <img src={item.path} onClick={toggleItem} height="200" width="200"class="img-fluid img-thumbnail shadow"></img> :
                    <p id="description" onClick={toggleItem}>{item.description}</p>
                }
            </div>
            <div className="container">
                <button className="countButton" class="btn btn-outline-dark" onClick={() => increaseCount()}>&hearts; Like </button>
                <p className="countText">{getCountText()}</p>
            </div>
        </div>
        )    
}


export default GalleryItem;