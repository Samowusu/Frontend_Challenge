import classes from './addToCartButton.module.css';
import { extrasStore } from '../../../assets/store';

const AddToCartButton = props => {
    return (
        <button className={classes.btn}>
            <img src={extrasStore.extras.cartIcon} alt=''/>
            Add to cart 
        </button>
    );
};

export default AddToCartButton;