var app = app || {};

app.NewsItemView = Backbone.View.extend({
    tagName: 'article',
    className: 'newsitem',
    template: _.template( $( '#newsItemTemplate' ).html() ),

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
      }

});
