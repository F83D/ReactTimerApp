var React = require('react');

var Navigation = require('Navigation');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation/>
                <div>
                    <div>
                        <p>ReactTimer !</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;