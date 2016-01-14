import React, {Component} from 'react';
import styles from './StyleVariantB.css';


export default class StyleVariantB extends Component {
  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Style Variant B</p>
      </div>
    );
  }
};
