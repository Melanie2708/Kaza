import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Logement.module.scss";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import listelogements from "../../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse.jsx";


function Logement() {
    const location = useLocation();
    const { logement } = location.state || {};

    const navigate = useNavigate ();

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement)
    return null;

    return (
      <div className={styles.contenu}>
        <div className={styles.slideshow}>
        <Slideshow imageList={logement.pictures}/>
        <div className={styles.info}>
          <div className={styles.title}>{logement.title}</div>
          <div className={styles.location}>{logement.location}</div>
          <div className={styles.tags}>
            {logement.tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
<div className={styles.hostAndRating}>
  <div className={styles.host}>
    <div className={styles.hostName}>{logement.host.name}</div>
    <img className={styles.hostPicture} src={logement.host.picture} alt="hostPicture"/>
  </div>
  <div className={styles.rating}>{logement.rating}</div>
</div>
        </div>
        </div>
        </div>
        
    )}

export default Logement