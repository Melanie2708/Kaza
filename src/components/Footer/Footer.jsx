import styles from "./Footer.module.scss";
import logofooter from "../../assets/logofooter.png";


function Footer() {
    return (
        <div className={styles.main}>
            <img  src={logofooter} alt="logoFooter"/>
            <div className={styles.copyright}>&copy; 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer
