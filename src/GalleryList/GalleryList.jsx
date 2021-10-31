import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    return (
        <div>
            <div class= "container">
            {
                 props.galleryItems.map( ( thisItem ) =>(                 
                     <GalleryItem key={ thisItem.id } item={ thisItem } />
                 ) )
             }
           </div>
        </div>
    )

}
export default GalleryList;