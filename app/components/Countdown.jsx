var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Page COUNTDOWN</h3>
                <Clock totalSeconds={129}/>
            </div>
        );
    }
});

module.exports = Countdown;