import { useState } from "react";
import "./collapse.css";
import ArrowDown from "../../assets/arrow_down.svg";

function Collapse({ title, children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className ? className : ""}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <img src={ArrowDown} alt="arrowDown" />
        </span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
