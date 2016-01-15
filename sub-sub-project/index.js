var React = require('react');

import styles from './assets/Index.css';

// is actually a parrot, but we use the name giraffe
// to demonstrate that there is no global namespace issue
var url = require("./assets/giraffe.jpg");


module.exports = React.createClass({

  render: function() {
    return (
      <div>
        Parrot from sub-sub-project
        <div>
        <img src={url} style={{width: 500}} />
        </div>
        Crocodile from sub-project via css
        <div>
            <div className={styles.cheetah} style={{width: 500, height: 500/1.6, backgroundSize: "contain", backgroundRepeat: "no-repeat"}} />
        </div>
      </div>
    )

  }

});
