var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">(c) 2016 DevPortal</a>
            </li>
          </ul>

          <div className="navbar-text navbar-right navbar-right-marged">
            <div class="btn-group">
              <a className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Category <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
              </ul>
            </div>
            &nbsp;
            <a className="btn-sm btn-primary" href="#" onClick={this.props.onAddCategory}>Add a category</a>&nbsp;
            <a className="btn-sm btn-primary" href="#" onClick={this.props.onAddBookmark}>Add a bookmark</a>
          </div>
          
        </div>
      </footer>
    );
  }
});

module.exports.Footer = Footer;