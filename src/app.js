var React = require('react');
var update = require('react-addons-update');

var NavBar = require('./navbar.js').NavBar;
var Footer = require('./footer.js').Footer;
var Bookmarks = require('./bookmarks.js').Bookmarks;
var Categories = require('./categories.js').Categories;
var ModalEditBookmark = require('./modalEditBookmark.js').ModalEditBookmark;
var ModalEditCategory = require('./modalEditCategory.js').ModalEditCategory;


var App = React.createClass({
  getInitialState: function() {
    return { bookmarks: [], categories: [], currentBookmark: {} };
  },

  loadBookmarks : function() {
    $.get({
      url: "http://localhost:5000/bookmarks",
      success: function(data) {
        this.setState({bookmarks: data});
      }.bind(this) //bind(this) because this.setState must use the Stocks object (so it recontextes the function(data) that would otherwise run with the jquery context, not Stocks)
    });
  },

  loadCategories : function() {
    $.get({
      url: "http://localhost:5000/categories",
      success: function(data) {
        this.setState({categories: data});
      }.bind(this) //bind(this) because this.setState must use the Stocks object (so it recontextes the function(data) that would otherwise run with the jquery context, not Stocks)
    });
  },

  componentDidMount: function() {
    this.loadBookmarks();
    this.loadCategories();
    // setInterval(this.loadBookmarks, 2000);
  },

  handleEditBookmark: function(bookmark) {
    this.setState({currentBookmark: bookmark});
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.find('.modal-title').text('Edit a bookmark');
    $('#hidBookmarkId').val(bookmark.id);
    $('#txtBookmarkName').val(bookmark.name);
    $('#txtBookmarkUrl').val(bookmark.url);

    $('#hidBookmarkCategoryId').val(bookmark.category);
    //continue!!! for categories
    // get the cat name from the list -> field
     var category = this.state.categories.filter(function( category ) {
       return category.id == bookmark.category;
     });

     $('#ddBookmarkCategoryName').val(category[0].name);

    modalEditBookmark.modal();
  },

  handleDeleteBookmark: function(bookmark) {
     $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/bookmarks/" + bookmark.id,

        success: function(data) {
          this.loadBookmarks();
        }.bind(this)
      });
  },

  handleAddBookmark: function() {
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.find('.modal-title').text('Add a bookmark');
    // Empty all fields for save check
    $('#hidBookmarkId').val("");
    $('#txtBookmarkName').val("");
    $('#txtBookmarkUrl').val("");
    $('#hidBookmarkCategoryId').val("");
    $('#ddBookmarkCategoryName').val("");
    modalEditBookmark.modal("show");
  },

  handleSaveBookmark: function() {
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.modal("hide");

    var id = $('#hidBookmarkId').val();
    var name = $('#txtBookmarkName').val();
    var url = $('#txtBookmarkUrl').val();
    var category = $('#hidBookmarkCategoryId').val();

    var bookmark = {
      id: id,
      name: name,
      url: url,
      category : category
    };

    // Checks if new bookmark or not
    if (bookmark.id)
    {
      // Modify an existing one
      $.ajax({
        type: "PUT",
        url: "http://localhost:5000/bookmarks/" + bookmark.id,
        data: bookmark,
        success: function(data) {
           this.loadBookmarks();
        }.bind(this)
      });
    }else
    {
      // Add a new one
      $.post({
        url: "http://localhost:5000/bookmarks",
        data: bookmark,
        success: function(data) {
           this.loadBookmarks();
        }.bind(this)
      });
    }
  },

  handleSaveCategory: function() {
    var modalEditCategory = $("#modalEditCategory");
    modalEditCategory.modal("hide");

    var id = $('#hidCategoryId').val();
    var name = $('#txtCategoryName').val();

    var category = {
      id: id,
      name: name
    };

    // Checks if new category or not
    if (category.id) 
    {
      // Modify an existing one
      $.ajax({
        type: "PUT",
        url: "http://localhost:5000/categories/" + category.id,
        data: category,
        success: function(data) {
           this.loadCategories();
        }.bind(this)
      });
    }else
    {
      // Add a new one
      $.post({
        url: "http://localhost:5000/categories",
        data: category,
        success: function(data) {
           this.loadCategories();
        }.bind(this)
      });    
    }
  },

  handleAddCategory: function() {
    var modalEditCategory = $("#modalEditCategory");
    modalEditCategory.find('.modal-title').text('Add a category');
    // Empty all fields for save check
    $('#hidCategoryId').val("");
    $('#txtCategoryName').val("");
    modalEditCategory.modal("show");
  },

  render: function() {
    return (
      <div>
        <NavBar />
        <div className="under-navbar">
        <Categories key="cats" categories={this.state.categories} bookmarks={this.state.bookmarks} onEditBookmark={this.handleEditBookmark} onDeleteBookmark={this.handleDeleteBookmark}/>
        </div>
        <Footer onAddBookmark={this.handleAddBookmark} onAddCategory={this.handleAddCategory}/>
        <ModalEditBookmark categories={this.state.categories} onSave={this.handleSaveBookmark}/>
        <ModalEditCategory  onSave={this.handleSaveCategory}/>
      </div>
    );
  }
});

module.exports.App = App;