
var app = app || {};

app.newsItem = Backbone.Model.extend({
    defaults: {
        image: 'assets/images/placeholder.jpg',
        title: 'No title',
        teaser: '',
        category: ''
    },
    idAttribute: "nid",
    initialize: function(){
      return this.set('pubDate', this.get('created'));
    },
    parse: function(response) {
      return response;
    }

});
