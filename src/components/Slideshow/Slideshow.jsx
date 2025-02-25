import styles from "./Slideshow.module.scss";

function Slideshow({title, cover}) {
    return (
        <div className={styles.cards} style={{ backgroundImage: `url(${cover})` }}>
        <p className={styles.title}>{title}</p>
  </div>
       
    )
}

export default Slideshow