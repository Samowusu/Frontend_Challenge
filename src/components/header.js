import classes from './header.module.css';
// import cart from '../assets/images/icon-cart.svg';
import { Store } from '../assets/store';


const Header = (props) => {
    return (
        <header className={classes.header}>
          <nav className={classes.nav}>  
          <ul>
            <li>Collections</li>
            <li>Men</li>   
            <li>Women</li>   
            <li>About</li>   
            <li>Contact</li>   
          </ul>
          </nav>
          <img src={Store.images.cartIcon} alt='a cart'/>
        </header>
    )
};

export default Header;