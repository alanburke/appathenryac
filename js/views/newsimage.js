var app = app || {}; 

app.NewsImageView = Backbone.View.extend({
    tagName: 'div',
    className: 'newsimage',
    template: _.template( $( '#newsImageTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        console.log(this.model);
        console.log(this.model.attributes);
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    },  

});
