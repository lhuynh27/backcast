var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function() {
    this.render();
  },

  render: function() {
    // console.log(this.$el);
    this.$el.append(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
