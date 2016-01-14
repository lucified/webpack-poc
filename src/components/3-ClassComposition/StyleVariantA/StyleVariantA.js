import React, {Component} from 'react';
import styles from './StyleVariantA.css';


export default class StyleVariantA extends Component {
  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Style Variant A</p>
      </div>
    );
  }
};
