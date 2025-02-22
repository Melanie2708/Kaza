import styles from "./Home.module.scss";
import Card from '../../components/Card/Card.jsx';
import Banner from "../../components/Banner/Banner.jsx";
import listelogements from "../../../data/logements.json";



function Home() {
  return (
    <div>
      <Banner/>
      <div className={styles.fondGris}>
      <ul>
        {listelogements.map((logement)=>(
        <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </ul>
      </div>
      
      
    </div>
  )
}

export default Home

