import classes from './productImages.module.css';
import { imagesStore, thumbnailsStore } from '../assets/store';


const ProductImages = props => {
    return (
        <div className={classes.container} >
          <div className={classes.slider}>
             <button>&#8249;</button>
             <button>&#8250;</button>
          </div>
          <img src={imagesStore.images.imageProductOne} alt='sneaker' />
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