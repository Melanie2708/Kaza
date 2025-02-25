import styles from "./Card.module.scss";

function Card({title, cover, onClick}) {
    return (
        <div onClick={onClick} className={styles.cards} style={{ backgroundImage: `url(${cover})` }}>
        <p className={styles.title}>{title}</p>
  </div>
       
    )
}

export default Card