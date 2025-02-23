import styles from "./PageNotFound.module.scss";

function PageNotFound() {
    return (
      <div className={styles.page}>
        <div className ={styles.erreur}> 404 </div>
        <p>Oups, la page demandée n'existe pas</p>
        <div className={styles.retour}>Retourner sur la page d'accueil</div>
      </div>
    )
  }
  
  export default PageNotFound
  