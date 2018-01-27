var React = require('react');
var Link = require('react-router-dom').Link;
var reactColumns = require('react-columns');


class Textcolumn extends React.Component{
	constructor(props) {
		super(props);		
	}

	render(){
		return (

			<li className='column'>
			<h2> {this.props.title} </h2>
				

			<p> {this.props.text}</p>

			</li>


		)
	}

}
var Columns = require('react-columns');


class Breakdown extends React.Component{
	constructor(props){
		super(props);
		this.state = {text: true}

	}


	render() {
		return(
			<div className='breakdown-container'>
				<h1> What we offer </h1>
				<div className='colcontainer'>
					<Textcolumn text="test" title="Food"/>
					<Textcolumn text="test" title="Yums"/>
					<Textcolumn text="test" title="Deliciousness"/>
					<Textcolumn text="test" title="Potatoes!"/>
				</div>
			</div>

		)

		
	}
}

module.exports = Breakdown;