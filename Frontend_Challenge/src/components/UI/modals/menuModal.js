import React from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';

const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}> 
    <p className={classes.btn} onClick={props.onClose}>x</p>
    <ul className={classes.menu}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
  )};


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}/>
    )
};

const portalElement = document.getElementById('overlays');
const MenuModal = props => {
    return (
        <>
        {ReactDOM.createPortal(<ModalOverlay onClose={props.onHideMenu}/>,portalElement)}
        {ReactDOM.createPortal(<Backdrop onClose={props.onHideMenu}/>,portalElement)}
        </>
    );
};

export default MenuModal;