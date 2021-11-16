import classes from './header.module.css';
import { extrasStore } from '../assets/store';


const Header = (props) => {
    return (
      <div className={classes.headerContainer}>
        <header className={classes.header}>
          <nav className={classes.nav}>
          <img 
            src={extrasStore.extras.toggleMenu} 
            alt=''
            className={classes.menu}
            onClick={props.onShowMenu}
          />
          <img src={extrasStore.extras.sneakerLogo} alt='sneaker logo'/>  
          <ul>
            <li>Collections</li>
            <li>Men</li>   
            <li>Women</li>   
            <li>About</li>   
            <li>Contact</li>   
          </ul>
          </nav>
          <section className={classes.profile}>
          <img src={extrasStore.extras.cartIcon} alt='a cart'/>
          <img className={classes.avatar} src={extrasStore.extras.avatar} alt='profile'/>
          </section>
        </header>
        </div>
    )
};

export default Header;