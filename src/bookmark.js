var React = require('react');

var Bookmark = React.createClass({
  handleEdit: function(event) {
    event.preventDefault();

    this.props.onEditBookmark(this.props.bookmark);
  },

  handleDelete: function(event) {
    event.preventDefault();

    this.props.onDeleteBookmark(this.props.bookmark);
  },



  render: function() {
    return(
      <tr>
        <td className="nowrap"><span id={"bookmarkName" + this.props.bookmark.id}>{this.props.bookmark.name}</span></td>
        <td><small><a id={"bookmark" + this.props.bookmark.id} href={this.props.bookmark.url}>{this.props.bookmark.url}</a></small></td>
        <td>
          <div className="btn-group group-fixed">
            <a className="btn btn-sm btn-primary" id={"btnEditBookmark" + this.props.bookmark.id} href="#" onClick={this.handleEdit}><i className="fa fa-pencil"></i></a>
            <a className="btn btn-sm btn-danger" id={"btnDeleteBookmark" + this.props.bookmark.id} href="#" onClick={ this.handleDelete }><i className="fa fa-trash"></i></a>
          </div>
        </td>
      </tr>
    );
  }
});

module.exports.Bookmark = Bookmark;