import styles from "./About.module.scss";
import Banner from "../../components/Banner/Banner.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";

function About() {
  return (
    <div>
      <Banner image={"src/assets/imageBannerApropos.png"} />
      <div className={styles.collapseContainer}>
        <Collapse
          title={"Fiabilité"}
          content={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
          size={"large"}
        />
        <Collapse
          title={"Respect"}
          content={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
          size={"large"}
        />
        <Collapse
          title={"Service"}
          content={
            "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          }
          size={"large"}
        />
        <Collapse
          title={"Sécurité"}
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
          size={"large"}
        />
      </div>
    </div>
  );
}

export default About;
