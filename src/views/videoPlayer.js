var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function(collection) {
    this.render();
  },
  

  render: function() {
  // var obj = {
  //   title: this.model.get('title'),
  //   id: this.model.get('id'),
  //   description: this.model.get('description')
  // };

  console.log('my model', this.model.attributes)

    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
