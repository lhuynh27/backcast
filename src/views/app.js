var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.search = new SearchView();
    this.player = new VideoPlayerView();
    $('.player h5').remove();
    this.videoList = new VideoListView({collection: this.videos}).render();

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
