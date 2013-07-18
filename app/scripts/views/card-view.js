/*global flash, Backbone, JST*/

flash.Views.CardView = Backbone.View.extend({

	initialize: function(){

	},

	// template: 

	render: function(){
		this.$el.html(this.template(this.model.attributes));
    	return this;
	},

    template: JST['app/scripts/templates/card.ejs']

});
