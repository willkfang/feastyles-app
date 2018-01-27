var React = require('react');
var NavLink = require('react-router-dom').NavLink;


function Nav (){
	return (
		<ul className='nav'>
			<li>
				<NavLink exact activeClassName='active' to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/flavor-generator'>
					Flavor Generator
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/find-out-more'>
					Find out more
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName='active' to='/about-us'>
					About Us
				</NavLink>
			</li>
		</ul>
	)

}

module.exports = Nav;