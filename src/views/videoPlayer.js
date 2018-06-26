var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function(collection) {
    // this.listenTo(this.collection, 'all', function(){
    //   selected(this.collection);
    // });
    this.render();
    console.log('it loaded', this.collection.models[0].attributes);
  },
  

  render: function() {
    if (this.collection) {
      this.$el.html(this.template(this.collection.models[0].attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
