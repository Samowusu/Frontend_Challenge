import cart from './images/icon-cart.svg';
import logo from './images/logo.svg';
import avt from './images/image-avatar.png';
import prod1 from './images/image-product-1.jpg';
import prod2 from './images/image-product-2.jpg';
import prod3 from './images/image-product-3.jpg';
import prod4 from './images/image-product-4.jpg';
import tn1 from './images/image-product-1-thumbnail.jpg';
import tn2 from './images/image-product-2-thumbnail.jpg';
import tn3 from './images/image-product-3-thumbnail.jpg';
import tn4 from './images/image-product-4-thumbnail.jpg';
import plus from './images/icon-plus.svg';
import minus from './images/icon-minus.svg';
import menu from './images/icon-menu.svg';


export const pictures = [prod1, prod2, prod3, prod4];

export const imagesStore = { images : {
   
    imageProductOne : prod1,
    imageProductTwo : prod2,
    imageProductThree : prod3,
    imageProductFour : prod4
}};

export const thumbnailsStore = { thumbnails : {
    thumbnailOne : tn1,
    thumbnailTwo : tn2,
    thumbnailThree : tn3,
    thumbnailFour : tn4,
}}

export const extrasStore = { extras : {
    cartIcon : cart,
    avatar : avt,
    sneakerLogo : logo,
    addButton : plus,
    subtractButton : minus,
    toggleMenu : menu
}}