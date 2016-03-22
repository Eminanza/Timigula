var React = require('react');
var CategoryPanel = require('./categoryPanel.js').CategoryPanel;

var Categories = React.createClass({
  render: function() {
    //Construct an arraw of rows based on the state of the component
    var panelPos = -1;
    var categoryPanels = this.props.categories.map(function(category) {
      panelPos++;
      return (
        <CategoryPanel key={"cat" + category.id} categoryId={category.id} categoryName={category.name} pos={panelPos} bookmarks={this.props.bookmarks} onEditBookmark={this.props.onEditBookmark} onDeleteBookmark={this.props.onDeleteBookmark}/>
      ); 
    }.bind(this)
    );

    var categoryTabs = [];
    for (var i = 0; i <= this.props.categories.length-1; i++) {
      var tabClassName = (i === 0) ? "active" : "";
      categoryTabs.push(<li key={"tab" + this.props.categories[i].id } role="presentation" className={tabClassName}><a href={ "#panel" + this.props.categories[i].id } aria-controls={ this.props.categories[i].id } role="tab" data-toggle="tab">{ this.props.categories[i].name }</a></li>);
    }
    return(
      <div>
        <ul className="nav nav-tabs" role="tablist"> 
          {categoryTabs}
        </ul>
        <div className="tab-content">
          {categoryPanels}
        </div>
      </div>
    );
  }
});

module.exports.Categories = Categories;


