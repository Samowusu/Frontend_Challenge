import classes from './quantityButtons.module.css';

const QuantityButtons =() => {

    const submitHandler = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}> 
          <button>-</button>
          <input value='0'/>
          <button>+</button>
        </form>
    );
};

export default QuantityButtons;