var VideoListView = Backbone.View.extend({

  el: '.list',  

  initialize: function() {
    this.render();
  },

  render: function() {
    /*this.$el.empty();*/
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView(); //{model: Video}
    this.$el.append(videoView.render());
  },  

  template: templateURL('src/templates/videoList.html')

});
