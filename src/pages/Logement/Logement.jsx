import styles from "./Logement.module.scss";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import listelogements from "../../../data/logements.json";
import { useLocation } from "react-router-dom";

function Logement() {
    const location = useLocation();
  const { logement } = location.state || {};

    return (
      <div>
        <Slideshow imageList={logement.pictures}/>
        <p>{logement.title}</p>
        </div>
    )}

export default Logement