var React = require('react');
var Link = require('react-router-dom').Link;


class Flavorgen extends React.Component{
	constructor(props){
		super(props);
		this.state = {Flavor: "Potatoes"}

	}
	render() {
		return(
			<div className='about-container'>

				<h1> Flavor Generator </h1>
				<h2> Choose a Flavor: </h2>
				<p> {this.state.Flavor} </p>

			</div>
			
		)

		
	}
}

module.exports = Flavorgen;