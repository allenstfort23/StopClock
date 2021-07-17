import React from "react"; //Main React.js library
import PropTypes from "prop-types";

// export const Counter = props => {
// 	let placeholder = "000000";
// 	// let output = placeholder + props.seconds;

// 	let seconds = props.seconds.toString();
// 	let icon = <i className="far fa-clock"></i>;
// 	let output =
// 		placeholder
// 			.split("")
// 			.slice(seconds.length)
// 			.join("") + seconds;

// 	console.log(output);

// 	let result = output.split("").map((element, index) => {
// 		return (
// 			<div className="box" key={index}>
// 				{element}
// 			</div>
// 		);
// 	});
// 	return <div>{result}</div>;
// };

// Counter.propTypes = {
// 	seconds: PropTypes.number
// };
export const Counter = props => {
	const digitSeparator = () => {
		if (props.seconds > 9) {
			return `${props.seconds.toString()[0]} ${
				props.seconds.toString()[1]
			}`;
		} else if (props.seconds > 99) {
			return `${props.seconds.toString()[0]} ${
				props.seconds.toString()[1]
			}${props.seconds.toString()[2]}`;
		} else {
			return props.seconds;
		}
	};
	return <h1>{digitSeparator()}</h1>;
};

Counter.propTypes = {
	seconds: PropTypes.number
};
