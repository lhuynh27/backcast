var VideoListEntryView = Backbone.View.extend({

  //el NOT REQUIRED
  //only if you want to put it somewhere specific
  //VideoListView already creating it in render

  initialize: function() {

  },

  render: function() {
    //<div> without a class
    //console.log(this.$el);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
