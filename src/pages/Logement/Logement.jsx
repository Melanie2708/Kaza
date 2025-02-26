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
      <div>
        <div className={styles.slideshow}>
        <Slideshow imageList={logement.pictures}/>
        <p>{logement.title}</p>
        </div>
        </div>
    )}

export default Logement