import {useState} from 'react';
import classes from './productImages.module.css';
import {  thumbnailsStore, pictures } from '../assets/store';


const ProductImages = props => {
    const [displayImage , setDisplayImage] = useState(`${pictures[0]}`);

    const changeDisplayImageHandler = () => {
        let i=0;

        if( i < pictures.length - 1){
            i++;
        } else {
            i = 0;
        }
        setDisplayImage(`${pictures[i]}`);
    };


    return (
        <div className={classes.container} >
          <div className={classes.slider}>
             <button>&#8249;</button>
             <button onClick={changeDisplayImageHandler}>&#8250;</button>
          </div>
          <img src={displayImage} alt='sneaker' />
          <div className={classes.thumbnails}>
              <img src={thumbnailsStore.thumbnails.thumbnailOne} alt=''/>
              <img src={thumbnailsStore.thumbnails.thumbnailTwo} alt=''/>
              <img src={thumbnailsStore.thumbnails.thumbnailThree} alt=''/>
              <img src={thumbnailsStore.thumbnails.thumbnailFour} alt=''/>
          </div>
        </div>
    );
};

export default ProductImages;