import React from "react";
import styles from "./styles.module.scss";
import client from "../../../assets/client.png";

const FlowDiagram = ({ items, color, extraInfo }) => {
  return (
    <div className={`${styles.flowDiagram} ${styles[`flowDiagram--${color}`]}`}>
      <div className={styles.flowRow}>
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            <div className={styles.flowDiagramItem}>
              <div className={styles.flowDiagramIcon}>
                {/* <img src={item.icon} alt="" className={styles.flowicon} /> */}
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  width="100%"
                  height="100%"
                  className={styles.flowicon}
                >
                  <source type="video/mp4" src={item.video} />
                </video>
              </div>
              <div className={styles.flowDiagramLabel}>{item.name}</div>
              {item.name === "Broadcast" && (
                <div className={styles.flowDiagramSubLabel}>
                  (print, email etc.)
                </div>
              )}
            </div>
            {index < items.length - 1 && (
              <div className={styles.flowDiagramArrow}>→</div>
            )}
          </React.Fragment>
        ))}
        <div className={styles.flowDiagramArrow}>→</div>
        {/* <FaUsers className={styles.flowDiagramUsers} /> */}
        <div className={styles.flowDiagramUsers}>
          <img src={client} alt="" className={styles.flowDiagramUsersImage} />
        </div>
      </div>
      {extraInfo && (
        <div className={styles.flowDiagramExtraInfo}>{extraInfo}</div>
      )}
    </div>
  );
};

export default FlowDiagram;
