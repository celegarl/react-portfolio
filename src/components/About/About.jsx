import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Science Major</h3>
              <p>
                I'm currently a 3rd year Computer Science Major at California State University Fullerton
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Interests</h3>
              <p>
              My interests include Software Design and Development, 
              Artificial Intelligence, Game Design, and Cybersecurity 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Goals</h3>
              <p>
              My future aspirations in computer science involve further education, career advancement, 
              and ultimately spearheading impactful projects that advance technology and benefit society.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};