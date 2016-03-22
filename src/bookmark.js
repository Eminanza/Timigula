var React = require('react');

var Bookmark = React.createClass({
  handleEdit: function() {
    event.preventDefault();

    this.props.onEditBookmark(this.props.bookmark);
  },

  handleDelete: function() {
    event.preventDefault();

    this.props.onDeleteBookmark(this.props.bookmark);
  },



  render: function() {
    return(
      <tr>
        <td className="nowrap">{this.props.bookmark.name}</td>
        <td><small><a href={this.props.bookmark.url}>{this.props.bookmark.url}</a></small></td>
        <td>
          <div className="btn-group group-fixed">
            <a className="btn btn-sm btn-primary" href="#" onClick={this.handleEdit}><i className="fa fa-pencil"></i></a>
            <a className="btn btn-sm btn-danger" href="#" onClick={ this.handleDelete }><i className="fa fa-trash"></i></a>
          </div>
        </td>
      </tr>
    );
  }
});

module.exports.Bookmark = Bookmark;