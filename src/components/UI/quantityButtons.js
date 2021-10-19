import classes from './quantityButtons.module.css';

const QuantityButtons =(props) => {

    const submitHandler = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler} className={`${classes.form} ${props.className}`}> 
          <button>-</button>
          <input defaultValue='0'/>
          <button>+</button>
        </form>
    );
};

export default QuantityButtons;