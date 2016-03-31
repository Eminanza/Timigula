var React = require('react');


var NavBar = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" id="navbarBrand" name="applicationName" href="#"><span className="brand">Timigula</span></a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a>A playground for automated testing experimentations</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="">
              </li>
            </ul>
          </div>
        </nav>
    );
  }
});

module.exports.NavBar = NavBar;