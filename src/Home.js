var React = require('react');
var Link = require('react-router-dom').Link;
var logo = require('./logo.svg')

class Home extends React.Component{
	render() {
		return(
			<div className='home-container'>
				<img src={logo} 
					height={350}
					width={350}
				/>
				<h1> Feastyles </h1>

				<Link className='button' to='/get-started'>
					Get Started
				</Link>
			</div>
		)

		
	}
}

module.exports = Home;