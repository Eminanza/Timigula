var React = require('react');


var NavBar = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="brand">DevPortal</span></a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="http://b2e.group.echonet">Home</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
});

module.exports.NavBar = NavBar;