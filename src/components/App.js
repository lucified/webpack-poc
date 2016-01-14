import React, {Component} from 'react';
import styles from './App.css';

var url = require("./camel.jpg");
var Testi = require('sub-project');
var jsonUrl = require('file-loader!./data-example.json');

import styles2 from './App.scss';


export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>

        <div className={styles2.test}>
            Red text via mixin from subproject
        </div>

        <div>
            Camel from root project via javascript
            <div>
                <img src={url} style={{width: 500}} />
            </div>
            <div>
                Turtle from root project via css
                <div className={styles.turtle} style={{width: 500, height: 500, backgroundSize: "contain", backgroundRepeat: "no-repeat"}} />
            </div>
        </div>

        <Testi />

        <code>
            Find json at {jsonUrl}
        </code>

      </div>
    );
  }
};
