import styles from "./Banner.module.scss";

function Banner({ text = "", image }) {
    return (
      <div className={styles.banner} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})` }}>
        <p className={styles.texte}>{text} </p>
    </div>
    )
  }
  
  export default Banner


  