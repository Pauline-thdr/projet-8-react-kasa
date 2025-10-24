import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./home.css";

function Home() {
  const [properties, setProperties] = useState([]);

  // Récupération des données
  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

  return (
    <div className="home">
      <Banner
        image="src/assets/banner-home.jpg"
        text={
          <>
          Chez vous,<br className="mobile-break" /> partout et ailleurs
          </>
        } // balise br pour créer un retour à la ligne en mode mobile
      />

      <div className="cards-container">
        {properties.map((property) => (
          <Card
            key={property.id}
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;