# World Clock
React App with worldclocks (based on Wes Bos javascript30, 2nd Project)

Tags: *reactJS*, *CSS*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)



## 1. Instructions
Make a world clock app with three independend clock components. The clocks should show the current time, with a given dynamic user input in hours. For seperation of concerns reasen, use the container component pattern.  

## 2. Lessons learned
### Refs and the DOM
The following assumption was wrong. See next subsection for more information:  
According to [this thread](https://stackoverflow.com/questions/39422310/how-to-target-classes-with-queryselector-when-using-react-css-modules) query selectors are replaced by refs.
[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)  
  
### Prop CSS styles
Example of "prop'ing" CSS style trough childrens:
```javascript
//ClockTile.js
const hourHandStyle = {transform: `rotate(${hoursDegrees}deg)`}; //CSS code
return(
		<Clock 	hourHand={hourHandStyle} />
		)

//Clock.js
const hourHand = props.hourHand;
return(
        <div className="hand hour-hand" style={hourHand} ></div> //CSS style
        )
```
ClockTile.js is a container component, Clock.js is a presentational component. This means that Clock.js gets all information to display from ClockTile.js. ClockTile.js on the other hand is responsible for the calculation and style of the children component (in this case Clock.js).

### Container Components
In this project, the ClockTile.js is the container component and Clock.js is the presentational component. Clock.js is now a reusable component and can be used at the same site or on other side. A potential drawdown is the calculation of the current time, this function is performed by ClockTile.js. 
[See this link for more information](https://medium.com/@learnreact/container-components-c0e67432e005)  

