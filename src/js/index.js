//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter() {
	// This is the useState used to control the start and stop button.
	let [pause, setPause] = useState(false);

	// This is the useState used to set the counter to 0.
	let [counter, setCounter] = useState(0);

	// this is the useEffect used to render when the counter and pause are changed.
	useEffect(() => {
		!pause &&
			counter < 10000 &&
			setTimeout(() => setCounter(counter + 1), 1000);
	}, [counter, pause]);

	// varaibles to random the numbers.
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);

	return (
		<div className="layout">
			<div className="bigCounter">
				<div className="calendar">
					<i className="fas fa-clock"></i>
				</div>
				<div className="four">{four % 10}</div>
				<div className="three">{three % 10}</div>
				<div className="two">{two % 10}</div>
				<div className="one">{one % 10}</div>
			</div>
			<div className="buttons">
				<div>
					<button
						className={"btn btn-primary"}
						onClick={() => setCounter((counter = 0))}>
						Reset
					</button>
				</div>
				<div>
					<button
						className={"btn btn-success"}
						onClick={() => setPause(false)}>
						Start
					</button>
				</div>

				<div>
					<button
						className={"btn btn-danger"}
						onClick={() => setPause(true)}>
						Stop
					</button>
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
