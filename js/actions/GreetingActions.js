'use strict';

var McFly = require('../dispatcher/McFly');

var ProductActions = McFly.createActions({
    addToCart: function (product) {
        return {
            actionType: 'ADD_TO_CART',
            product: product
        };
    },

    greet: function (greet) {
        return {
            actionType: 'GREET',
            data: greet
        };
    },

    updateGreet: function (data) {
        return {
            actionType: 'UPDATE_GREET',
            data: data
        }
    }
});

module.exports = ProductActions;
