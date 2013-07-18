/*global flash, $*/
'use strict';


window.flash = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

    	var pooCardModel = new flash.Models.CardModel();

        var pooCardView = new flash.Views.CardView({
        	el: $("#card1"),
        	model: pooCardModel
        });

        pooCardView.render();

    }
};

$(document).ready(function () {
    flash.init();
});
