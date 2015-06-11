var app = app || {};

app.newsRiver  = Backbone.View.extend({
    el: '#news',

    initialize: function() {
        this.collection = new app.newsListing();
        this.collection.fetch({reset: true}); // NEW
        this.render();
        this.listenTo( this.collection, 'reset', this.render ); // NEW

    },

    // render listing by rendering each newsitem in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderNewsItem( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderNewsItem: function( item ) {
        var newsItemView = new app.NewsItemView({
            model: item
        });
        this.$el.append( newsItemView.render().el );
    }
});
