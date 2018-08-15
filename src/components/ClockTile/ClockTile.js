import React from 'react';
import './ClockTile.css';
import Clock from '../Clock/Clock';

class ClockTile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			time: new Date(),
			value: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.timerID = setInterval(
		() => this.tick(),
		1000
		);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	tick() {
		this.setState({
		  time: new Date()
		});
	}

	render() {
		const now = this.state.time;
		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds/60)*360) + 90;
		const secondHandStyle = {transform: `rotate(${secondsDegrees}deg)`};
		const minutes = now.getMinutes();
		const minutesDegrees = ((minutes/60)*360) + 90;
		const minuteHandStyle = {transform: `rotate(${minutesDegrees}deg)`};  
		const hours = now.getHours() + this.state.value;
		const hoursDegrees = ((hours/12)*360) + 90;
		const hourHandStyle = {transform: `rotate(${hoursDegrees}deg)`};
		return(
			<div className="clocktile">
				<Clock 	secondHand={secondHandStyle}
						minuteHand={minuteHandStyle}
						hourHand={hourHandStyle} />
				<input 	placeholder="Standard is UTC"
						onChange={this.handleChange} />
			</div>
		);
	}
}

export default ClockTile