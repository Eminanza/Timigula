var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">(c) 2016 Timigula - Test</a>
            </li>
          </ul>

          <div className="navbar-text navbar-right navbar-right-marged">
            <a className="btn-sm btn-primary" id="btnAddCategory" href="#" onClick={this.props.onAddCategory}>Add a category</a>&nbsp;
            <a className="btn-sm btn-primary" id="btnAddBookmark" href="#" onClick={this.props.onAddBookmark}>Add a bookmark</a>
          </div>
          
        </div>
      </footer>
    );
  }
});

module.exports.Footer = Footer;