var VideoListView = Backbone.View.extend({

  el: '.list',  

  initialize: function() {
  //console.log('my collection', this);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.html(this.template());
    this.$('.video-list').children().remove(); //whatever is under video-list class, remove them
    this.collection.forEach(function(video) {
      var videoView = new VideoListEntryView({model: video});

      this.$('.video-list').append(videoView.render().$el);

    }, this);
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
