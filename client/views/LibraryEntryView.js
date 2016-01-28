// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      //if no song is playing
      console.log(model.get('currentSong'));
      if(this.model.get('currentSong') === this) {
        this.model.enqueue();
        console.log('This is working');
      } else {
        this.model.play();
      }
      
      //or if another song is playing

        //enqueue instead
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
