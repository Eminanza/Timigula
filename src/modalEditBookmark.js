var React = require('react');

var ModalEditBookmark = React.createClass({
  handleCategoriesListClick: function(category) {
    $('#ddBookmarkCategoryName').val(category.name);
    $('#hidBookmarkCategoryId').val(category.id);
  },

  render: function() {
    var categoriesList = [];
    for (var i = 0; i <= this.props.categories.length - 1; i++) {
      categoriesList.push(<li key={"categoriesList" + i} onClick={this.handleCategoriesListClick.bind(this,this.props.categories[i])}><a href="#">{this.props.categories[i].name}</a></li>);
    }

    return(
      <div className="modal fade" id="modalEditBookmark" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" id="btnCloseModalEditBookmarkX" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add a bookmark</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2">Name</span>
                <input className="form-control" type="text" id="txtBookmarkName" aria-describedby="sizing-addon2"/>
                <input type="hidden" id="hidBookmarkId"/>
              </div>
              <br/>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2">Url</span>
                <input className="form-control" type="text" id="txtBookmarkUrl" aria-describedby="sizing-addon2"/>
              </div>
              <br/>
              <div className="input-group"> 
                <span className="input-group-addon" id="sizing-addon2">Category</span>   
                <input className="form-control" type="text" id="ddBookmarkCategoryName" disabled></input>
                <input type="hidden" id="hidBookmarkCategoryId"></input>
                <div className="input-group-btn">
                    <button type="button" className="btn btn-default dropdown-toggle" id="btnCategoriesList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="caret"></span>
                    </button>
                    <ul id="categoriesList" className="dropdown-menu dropdown-menu-right">
                        {categoriesList}
                    </ul>
                </div>
              </div>        
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" id="btnCloseModalEditBookmark" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="btnSaveModalEditBookmark" onClick={this.props.onSave}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports.ModalEditBookmark = ModalEditBookmark;

