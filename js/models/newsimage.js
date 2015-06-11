var app = app || {};

app.ImageItem = Backbone.Model.extend({
    idAttribute: "fid",
    url: function(){
      return 'https://api.athenryac.com/file/' + this.get('id') + '.json'
    },
    urlRoot: 'https://api.athenryac.com/',

});
