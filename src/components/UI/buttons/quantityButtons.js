import classes from './quantityButtons.module.css';

const QuantityButtons = props => {
    return (
        <div className={classes.container}>
          <button>-</button>
          <input defaultValue='0'/>
          <button>+</button>
        </div>
    );
};

export default QuantityButtons;