import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Logement.module.scss";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import listelogements from "../../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse.jsx";

function Logement() {
  const { id } = useParams();
  const logement = listelogements.find((l) => l.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <div>
      <div className={styles.slideshow}>
        <Slideshow imageList={logement.pictures} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleAndLocationTag}>
          <div className={styles.title}>{logement.title}</div>
          <div className={styles.location}>{logement.location}</div>
          <div className={styles.tags}>
            {logement.tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.hostAndRating}>
          <div className={styles.host}>
            <div className={styles.hostName}>{logement.host.name}</div>
            <img className={styles.hostPicture} src={logement.host.picture} alt="hostPicture" />
          </div>
          <div className={styles.rating}>
            {[...Array(5)].map((_, index) => {
              const isFilled = index < logement.rating;
              return <i key={index} className={`fa-solid fa-star ${isFilled ? styles.starFilled : styles.star}`}></i>;
            })}
          </div>
        </div>
      </div>
      <div className={styles.collapses}>
        <Collapse title={"Description"} content={logement.description} size={"medium"} />
        <Collapse title={"Equipements"} content={logement.equipments.join("\n")} size={"medium"} />
      </div>
    </div>
  );
}

export default Logement;
