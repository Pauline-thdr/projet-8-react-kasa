import { useState } from "react";
import "./collapse.css";
import ArrowDown from "../../assets/arrow_down.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  /* Props title et children */
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}><img src={ArrowDown} alt="arrowDown"/></span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
