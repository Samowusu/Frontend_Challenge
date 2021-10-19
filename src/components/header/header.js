import CartIcon from '../UI/cartIcon';
import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
         <nav className={classes.nav}>
         <div className={classes.toggleButton}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
         </div>
         <p className={classes.sneakers}>
             sneakers
          </p>
          <ul>        
            <li>
             Collections
            </li>
            <li>
             Men
            </li>
            <li>
             Women
            </li>
            <li>
             About
            </li>
            <li>
             Contact
            </li>
          </ul>
         </nav>
         <div className={classes.profile}>
         <CartIcon className={classes.icon}/>
          <div className={classes.avatar}/>
         </div>
        </header>
    );
};

export default Header;