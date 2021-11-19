import {useState} from 'react';
import classes from './productImages.module.css';
import {  thumbnailsStore, pictures } from '../assets/store';


const ProductImages = props => {
    const [displayImage , setDisplayImage] = useState(`${pictures[0]}`);

    let image_tracker = 'first_pic';
    const changeDisplayImageHandler = () => {

        switch (image_tracker) {
            case 'first_pic': 
             image_tracker = 'second_pic';
             setDisplayImage(`${pictures[1]}`);

             break;

            case 'second_pic' :
                image_tracker = 'third_pic';
                setDisplayImage(`${pictures[2]}`);

                break;

            case 'third_pic':
                image_tracker = 'fourth_pic';
                setDisplayImage(`${pictures[3]}`);

                break;

            default:
            setDisplayImage(`${pictures[0]}`);
                
             
        }
        // if (image_tracker === 'first pic'){
        //     image_tracker = 'second pic';
        //     setDisplayImage(`${pictures[1]}`);

        // } else if (image_tracker === 'second pic') {
        //     image_tracker = 'third pic';
        //     setDisplayImage(`${pictures[2]}`);

        // } else if (image_tracker === 'third pic') {
        //     image_tracker = 'fourth pic';
        //     setDisplayImage(`${pictures[3]}`);

        // }  else {
        //     setDisplayImage(`${pictures[0]}`)
        // }
       
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