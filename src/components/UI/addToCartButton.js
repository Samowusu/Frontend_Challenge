import classes from './addToCartButton.module.css';
import CartIcon from './cartIcon';

const AddToCartButton = (props) => {
    return (
        <button className={`${classes.button} ${props.className}`}>
          <CartIcon />
          <span>Add to cart</span>
        </button>
    );
};

export default AddToCartButton;