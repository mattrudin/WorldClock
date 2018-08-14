import React from 'react';
import './Clock.css';

const Clock = (props) => {
	const secondHand = props.secondHand;
	const minuteHand = props.minuteHand;
	const hourHand = props.hourHand;
	return(
		<div className="clock">
	      <div className="clock-face">
	        <div className="hand hour-hand" style={hourHand} ></div>
	        <div className="hand min-hand" style={minuteHand} ></div>
	        <div className="hand second-hand" style={secondHand} ></div>
	      </div>
	    </div>
	);
};

export default Clock;