import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  console.log('footer');
  return (
    <div className={styles.container}>
      <div>©2023 NextSite. All rights reserved.</div>
      <div></div>
    </div>
  );
};

export default Footer;
