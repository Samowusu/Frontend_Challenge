import classes from './productDescription.module.css';
import AddToCartButton from './UI/buttons/addToCartButton';
import QuantityButtons from './UI/buttons/quantityButtons';

const ProductDescription = props => {
    return (
        <div className={classes.container}>
          <div className={classes.contents}>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect
                casual wear companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer. 
            </p>
            <div className={classes.prices}>
            <section>
            <h2>$125.00</h2>
            <h5>50%</h5>
            </section>
            <h5 className={classes.actualPrice}>$250.00</h5>
            </div>
            <div className={classes.btns}>
            <QuantityButtons />
            <AddToCartButton/>
            </div>
          </div>
        </div>
    );
};

export default ProductDescription;