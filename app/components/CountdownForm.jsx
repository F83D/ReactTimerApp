var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if (strSeconds.match(/^[0-9]*$/))
            {
                //On est bien sur un nombre donc strSeconds est bon, on peut effacer le champ :
                this.refs.seconds.value = '';
                this.props.onSetCountdown(parseInt(strSeconds,10));
            }
    },
    render: function () {
        return (
            <div>
                <form ref="form" className="countdown-form" onSubmit={this.onSubmit}>
                    <input type="text" ref="seconds" placeholder="Entrez le temps en secondes..." />
                    <button className="hollow button expanded">C'est parti !</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;