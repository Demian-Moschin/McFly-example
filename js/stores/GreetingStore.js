'use strict';

var McFly = require('../dispatcher/McFly');

var greet = [];

var addGreeting =  function (greete) {
    greet.push(greete);
};

var updateGreet = function (data) {
    greet[data.id] = data.value;
};



var GreetingStore = McFly.createStore({
    getGreetings: function () {
        return greet;
    }

}, function (payload) {
    if (payload.actionType === 'GREET') {
        addGreeting(payload.data);
        GreetingStore.emitChange();
    }

    if (payload.actionType === 'UPDATE_GREET') {
        updateGreet(payload.data);
        GreetingStore.emitChange();
    }

});

module.exports = GreetingStore;