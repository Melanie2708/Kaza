import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import Card from '../../components/Card/Card.jsx';
import Banner from "../../components/Banner/Banner.jsx";
import listelogements from "../../../data/logements.json";



function Home() {
  const navigate = useNavigate();

  const navigateToLogement = (selectedLogement) => {
    navigate("/logement", { state: { logement: selectedLogement } });
  };

  return (
    <div>
      <Banner text={"Chez vous, partout et ailleurs"} image={"src/assets/imageBanner.png"}/>
      <div className={styles.fondGris}>
      <ul>
        {listelogements.map((logement)=>(
        <Card onClick={() => navigateToLogement(logement)} key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </ul>
      </div>
      
      
    </div>
  )
}

export default Home

