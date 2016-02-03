'use strict';

var McFly = require('../dispatcher/McFly');

var greet = [];

var addGreeting =  function (greete) {
    greet.push(greete);
};

var updateGreet = function (data) {
    greet[data.id] = data.value;
};



var ProductStore = McFly.createStore({
    getGreetings: function () {
        return greet;
    }

}, function (payload) {
    if (payload.actionType === 'GREET') {
        addGreeting(payload.data);
        ProductStore.emitChange();
    }

    if (payload.actionType === 'UPDATE_GREET') {
        updateGreet(payload.data);
        ProductStore.emitChange();
    }

});

module.exports = ProductStore;