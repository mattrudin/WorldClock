import React from 'react';
import './Clock.css';

class Clock extends React.Component{
	render() {
		return(
			<div class="clock">
		      <div class="clock-face">
		        <div class="hand hour-hand"></div>
		        <div class="hand min-hand"></div>
		        <div class="hand second-hand"></div>
		      </div>
		    </div>
		)
	}
}

export default Clock;