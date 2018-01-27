var React = require('react');
var Link = require('react-router-dom').Link;
var Breakdown = require('./Breakdown')

class About extends React.Component{
	render() {
		return(
			<div className='about-container'>

				<h1> Ditch Recipes and reinvent Cooking </h1>
				<h2> Following recipes can be time consuming, tedious, and slow. Taking a new approach, we work from the ingredients and teach you the techniques.</h2>
				<p> </p>
				<Breakdown />
			</div>
			
		)

		
	}
}

module.exports = About;