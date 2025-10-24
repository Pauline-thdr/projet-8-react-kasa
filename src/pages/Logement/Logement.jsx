import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import StarFilled from "../../assets/star-active.svg";
import StarEmpty from "../../assets/star-inactive.svg";
import "./logement.css";

function Logement() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((error) =>
        console.error("Erreur lors du fetch du logement :", error)
      );
  }, [id]);

  if (!property) {
    return (
      <p>Chargement...</p>
    ); /* si les données ne sosnt pas chargées, on affiche un message de chargement */
  }

  return (
    <div className="logement-content">
      {/* Carrousel */}
      <Slideshow pictures={property.pictures} />

      {/* Informations principales */}
      <div className="logement-header">
        <div className="logement-info">
          <h1>{property.title}</h1>
          <p>{property.location}</p>

          <div className="tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hôte + note */}
        <div className="host-rating">
          <div className="host">
            <p>{property.host.name.replace(" ","\n")}</p>
            <img
              src={property.host.picture}
              alt={`Hôte : ${property.host.name}`}
              className="host-picture"
            />
          </div>

          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={i < property.rating ? StarFilled : StarEmpty}
                alt={i < property.rating ? "Étoile remplie" : "Étoile vide"}
                className="star-icon"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Collapses */}
      <div className="collapses">
        <Collapse title="Description">{property.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
