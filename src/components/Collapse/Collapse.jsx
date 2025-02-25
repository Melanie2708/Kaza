import styles from "./Collapse.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function Collapse({ title, content, size }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={styles[size]}>
        <div className={styles.topBar}>
          <p className={styles.title}>{title}</p>
          <i className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"} ${styles.icone}`} onClick={() => setIsOpen(!isOpen)}></i>
        </div>
        <div className={`${styles.content} ${isOpen ? styles.opened : ""}`}>{content}</div>
      </div>
    );
  }
  
  export default Collapse;
  
  Collapse.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
  };
  