var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//On charge notre template CSS foundation :
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//On charge notre CSS perso :
require('style!css!sass!applicationStyles');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
