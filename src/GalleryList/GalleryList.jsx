import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

//loop through each individual item in galleryItems then pass to GalleryItems
function GalleryList( props ) {
    return (
        <div>
            {
                 props.galleryItems.map( ( thisItem ) =>(                 
                     <GalleryItem key={ thisItem.id } item={ thisItem } />
                 ) )
             }
           
        </div>
    )

}
export default GalleryList;