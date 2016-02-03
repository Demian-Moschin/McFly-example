/**
 * Created by demi on 02/02/16.
 */
'use strict';

var React = require('react');
var ProductStore = require('../stores/ProdStore');
var actions = require('../actions/ProductActions');


var Congrats = React.createClass({
    mixins: [ProductStore.mixin],

    getInitialState: function () {
        return {
         greet: []
        };
    },

    componentDidMount: function () {
        actions.greet('Hola companeroooouuuu!!');
    },



    render: function () {
        var nodes = this.state.greet.map(function (greet, index) {
           return(
               <div key={index}>
                   {greet}
                   {index}
                   <input type="text" onChange={this.handleChange.bind(this, index)} />
               </div>
            );
        }.bind(this));

        return (
            <div>
                {nodes}
                <button onClick={this.addGreet}>Push and add greet</button>
            </div>
        );
    },

    storeDidChange: function () {
        console.log('didChange the store');
        this.setState({
                greet: ProductStore.getGreetings()
            }
        );
    },

    addGreet: function () {
        actions.greet('Nuevo eventouuu');
    },

    handleChange: function (index, e) {
        var data = {
          id: index,
          value: e.target.value
        };

        actions.updateGreet(data);
    }



});

module.exports = Congrats;