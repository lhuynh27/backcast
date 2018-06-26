var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.search = new SearchView();
    this.player = new VideoPlayerView();

  },

  render: function() {
    this.$el.html(this.template());
    return this;


    //videoList
    new VideoList({collection: this.videos
    }).render();
  },

  template: templateURL('src/templates/app.html')

});
