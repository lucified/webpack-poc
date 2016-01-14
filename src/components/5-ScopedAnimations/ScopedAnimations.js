import React, {Component} from 'react';
import styles from './ScopedAnimations.css';


export default class ScopedAnimations extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.ball} />
      </div>
    );
  }
};
