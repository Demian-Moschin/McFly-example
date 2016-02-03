var React = require('react');
var Congrats = require('./congrats');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Congrats />
            </div>
        );
    }
});

module.exports = App;
