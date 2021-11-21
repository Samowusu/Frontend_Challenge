import {useState} from 'react';
import classes from './productImages.module.css';
import {  thumbnails, pictures } from '../assets/store';


const ProductImages = props => {
    const [current , setCurrent] = useState(0);
    const length = pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };

    
    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };
   


    return (
        <div className={classes.container} >
          <div className={classes.slider}>
             <button onClick={prevSlide}>&#8249;</button>
             <button onClick={nextSlide}>&#8250;</button>
          </div>
          {pictures.map((picture, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={picture} alt='' className={classes.img}/>
            )}
          </div>
        );
      })}
          <div className={classes.thumbnails}>
              {thumbnails.map((thumbnail, index) => {
                  return (
                      <img src={thumbnail} alt='' key={index}/>
                  )
              })}
          </div>
        </div>
    );
};

export default ProductImages;