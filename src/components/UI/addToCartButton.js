import classes from './addToCartButton.module.css';
import CartIcon from './cartIcon';

const AddToCartButton = () => {
    return (
        <button className={classes.button}>
          <CartIcon />
          <span>Add to cart</span>
        </button>
    );
};

export default AddToCartButton;