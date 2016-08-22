var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');

// Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App css (sccs/sass)
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
