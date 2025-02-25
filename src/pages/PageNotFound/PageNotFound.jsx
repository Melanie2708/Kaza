import styles from "./PageNotFound.module.scss";
import { NavLink } from "react-router-dom";

function PageNotFound() {
    return (
      <div className={styles.page}>
        <div className ={styles.erreur}> 404 </div>
        <p className={styles.message}>Oups, la page demandée n'existe pas</p>
        <NavLink to="/" className={styles.retour}>Retourner sur la page d'accueil</NavLink>
      </div>
    )
  }
  
  export default PageNotFound
  