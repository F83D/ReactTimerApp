var React = require('react');

var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    render: function() {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>
                            Timer by Acoustat
                        </li>
                        <li>
                            <IndexLink to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>
                                Chronomètre
                            </IndexLink>
                        </li>
                        <li>
                            <Link to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>
                                Compte à rebours
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                    <ul className='menu'>
                        <li className='menu-text'>
                            Créée par <a href='http://www.acoustat.fr' target='_blank'>F83D</a>
                        </li>
                    </ul>
                    {/*<p className='menu-text'>
                        Créée par <a href='http://www.acoustat.fr' target='_blank'>F83D</a>
                    </p>*/}
                </div>
            </div>
        );
    }
});

module.exports = Navigation;