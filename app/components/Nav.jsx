var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var search = this.refs.search.value;
    var encoded = encodeURIComponent(search);
    if (encoded) {
      this.refs.search.value = "";
      window.location.hash = '#/?location=' + encoded;
    }
  },

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather App</li>
          <li>
            <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
        </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Enter Search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Search"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  } 
});

module.exports = Nav;   
