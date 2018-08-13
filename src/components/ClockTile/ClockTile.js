import React from 'react';
import PropTypes from 'prop-types';
import './ClockTile.css';
import Clock from '../Clock/Clock';

class ClockTile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return(
			<div className="clocktile">
				<Clock />
				<input />
			</div>
		);
	}
}

ClockTile.propTypes = {

};

export default ClockTile