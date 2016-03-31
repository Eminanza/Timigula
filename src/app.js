var React = require('react');
var update = require('react-addons-update');

var NavBar = require('./navbar.js').NavBar;
var Footer = require('./footer.js').Footer;
var Bookmarks = require('./bookmarks.js').Bookmarks;
var Categories = require('./categories.js').Categories;
var ModalEditBookmark = require('./modalEditBookmark.js').ModalEditBookmark;
var ModalEditCategory = require('./modalEditCategory.js').ModalEditCategory;

var data = require('./data.json');


var App = React.createClass({
  getInitialState: function() {
    return { bookmarks: [], categories: [], currentBookmark: {} };
  },

  loadBookmarks : function() {
    this.setState({bookmarks: data.bookmarks});
  },

  loadCategories : function() {
    this.setState({categories: data.categories});
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
     // Delete the bookmark in memory
     for (var i = data.bookmarks.length - 1; i >= 0; i--) {
       if (data.bookmarks[i].id === bookmark.id)
       {
          data.bookmarks.splice(i,1);
       }
     }
     this.loadBookmarks();
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

    var id = Number($('#hidBookmarkId').val());
    var name = $('#txtBookmarkName').val();
    var url = $('#txtBookmarkUrl').val();
    var category = Number($('#hidBookmarkCategoryId').val());

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
     for (var i = data.bookmarks.length - 1; i >= 0; i--) {
       if (data.bookmarks[i].id === bookmark.id)
       {
          data.bookmarks[i].name = bookmark.name;
          data.bookmarks[i].url = bookmark.url;
          data.bookmarks[i].category = bookmark.category;
       }
     }
     this.loadBookmarks();
    }else
    {
      // Add a new one

      //Get a new id based on the max id in bookmarks
      var maxId = 0;
      for (var i = data.bookmarks.length - 1; i >= 0; i--) {
        if (data.bookmarks[i].id > maxId) {
          maxId = data.bookmarks[i].id;
        }
      }
      maxId += 1;

      // Set the id of the new bookmark to our new computed id
      bookmark.id = maxId;

      // Add the bookmark to the list
      data.bookmarks.push(bookmark);

      this.loadBookmarks();
    }
  },

  handleSaveCategory: function() {
    var modalEditCategory = $("#modalEditCategory");
    modalEditCategory.modal("hide");

    var id = Number($('#hidCategoryId').val());
    var name = $('#txtCategoryName').val();

    var category = {
      id: id,
      name: name
    };

    // Checks if new category or not
    if (category.id) 
    {
      // Modify an existing one
     for (var i = data.categories.length - 1; i >= 0; i--) {
       if (data.categories[i].id === category.id)
       {
          data.categories[i].name = category.name;
       }
     }
     this.loadCategories();

    }else
    {
      // Add a new one

      //Get a new id based on the max id in bookmarks
      var maxId = 0;
      for (var i = data.categories.length - 1; i >= 0; i--) {
        if (data.categories[i].id > maxId) {
          maxId = data.categories[i].id;
        }
      }
      maxId += 1;

      // Set the id of the new bookmark to our new computed id
      category.id = maxId;

      // Add the bookmark to the list
      data.categories.push(category);

      this.loadCategories(); 
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