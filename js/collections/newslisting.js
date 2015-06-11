var app = app || {};

app.newsListing = Backbone.Collection.extend({
    model: app.newsItem,
//    url: 'https://api.athenryac.com/node.json',
    url: 'https://api.athenryac.com/node.json?limit=3&type=news_item&direction=desc&sort=created',

    // The Drupal API returns nodes under "list".
    parse: function(response) {
      return response.list;
    }
});
