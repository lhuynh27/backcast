var VideoListEntryView = Backbone.View.extend({

  //el NOT REQUIRED
  //only if you want to put it somewhere specific
  //VideoListView already creating it in render

  initialize: function() {
    //this.listenTo(this.$('.video-list-entry-title'), 'all', this.model.select);
  },

  render: function() {
    //<div> without a class
    //console.log(this.$el);
    this.$el.html(this.template(this.model.attributes));
    // console.log('attributes', this.model.attributes)
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
