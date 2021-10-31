import React from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem( props ) {
    const noLikes = `No "Likes"`;
    const oneLike = ` person "Likes" this!`;
    const manyLikes = ` people "Like" this!`;

    const [ item, setItem ] = useState ( {
        id: props.item.id,
        path: props.item.path,
        description: props.item.description,
        likes: props.item.likes
    });

    //set the 'show' state of the image or description
    const[show, setShow] = useState(  true );   

    //set the 'toggle' function
    const toggleItem = () => {
        setShow( !show );
    }

    //increase the number of likes by 1
    const increaseCount = ( )=>{
        setItem( {
            ...item, likes: ++item.likes 
        })
        updatePhotoLikes();
    }

    //update (PUT) 
    const updatePhotoLikes = ( ) =>{
        axios.put( `/gallery/like/${item.id}`, item ).then( ( response )=>{
            console.log( response.data );
        }).catch( ( error ) =>{
            alert( 'error' );
            console.log( error );
        });
    }    

    //for the text on the dom the user sees
    const getLikes = ()=>{
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
            <div class="container">
                { show ?
                    <img src={item.path} onClick={toggleItem} height="200" width="200" ></img> :
                    <p id="description" onClick={toggleItem}>{item.description}</p>
                }
            </div>
                <button className="countButton" class="btn btn-outline-dark" onClick={() => increaseCount()}>&#128077; Like </button>
                <p className="countLikes">{getLikes()}</p>
                </div>
        )    
}


export default GalleryItem;