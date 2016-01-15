
import styles from './assets/Index.css';
import styles2 from './assets/Index.scss';


var React = require('react');
var Sub = require('sub-sub-project');


var url = require("./assets/giraffe.jpg");

//var url = require("./giraffe.jpg");

module.exports = React.createClass({

  render: function() {
    return (

      <div>
        <div className={styles2.test2}>
          Blue text via mixin from sub-sub-project
        </div>

        Giraffe from sub-project via javascript
        <div>
          <img src={url} style={{width: 500}} />
        </div>
        Cheetah from sub-project via css
        <div>
            <div className={styles.cheetah} style={{width: 500, height: 500/1.6, backgroundSize: "contain", backgroundRepeat: "no-repeat"}} />
        </div>
        <Sub />
      </div>
    )

  }

});
