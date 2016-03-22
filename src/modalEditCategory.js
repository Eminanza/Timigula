var React = require('react');

var ModalEditCategory = React.createClass({
  render: function() {
    return(
      <div className="modal fade" id="modalEditCategory" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" id="btnCloseModalEditCategoryX" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add a category</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2">Name</span>
                <input className="form-control" type="text" id="txtCategoryName" aria-describedby="sizing-addon2"/>
                <input type="hidden" id="hidCategoryId"></input>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" id="btnCloseModalEditCategory" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="btnSaveModalEditCategory" onClick={this.props.onSave}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports.ModalEditCategory = ModalEditCategory;

