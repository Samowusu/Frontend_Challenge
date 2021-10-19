import AddToCartButton from '../UI/addToCartButton';
import classes from './description.module.css';
import QuantityButtons from '../UI/quantityButtons';

const Description = () => {
    return (
        <div className={classes.container}>
         <div className={classes.contents}>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything
                the weather can offer. 
            </p>
            <div className={classes.price}>
                 <span className={classes.discount}>
                     <h2>$125.00</h2>
                     <p>50%</p>
                 </span>
                 <span className={classes.oldPrice}>
                    <p>$250.00</p>
                 </span>
            </div>
            <div className={classes.buttons}>
            <QuantityButtons className={classes.btns}/>
            <AddToCartButton className={classes.btns}/>
            </div>
         </div>
        </div>
    );
};

export default Description;
