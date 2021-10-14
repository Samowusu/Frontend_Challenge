import classes from './sneakerImages.module.css';



const SneakerImages = () => {
    return (
    <div className={classes.container}>
        <div className={classes.images}>
          <div className={classes.bigImage} />
          <div className={classes.smallImages}>
             <div className={classes.firstImage}/>
             <div className={classes.secondImage}/>
             <div className={classes.thirdImage}/>
             <div className={classes.fourthImage}/>
         </div>
        </div>
    </div>
    );
};

export default SneakerImages;