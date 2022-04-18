import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [lightState, setState] = useState({
		activeLight: null,
		lights: [{ id: "red" }, { id: "yellow" }, { id: "green" }],
	});

	function toggleSelected(index) {
		setState({ ...lightState, activeLight: lightState.lights[index] });
	}
	function toggleSelectedStyle(index) {
		if (lightState.lights[index] === lightState.activeLight) {
			return "light selected";
		} else return "light";
	}

	return (
		<div className="trafficLight justify-content-center mx-auto">
			{lightState.lights.map((element, index) => (
				<div
					key={index}
					className={`${toggleSelectedStyle(index)} ${element.id}`}
					onClick={() => {
						toggleSelected(index);
					}}></div>
			))}
		</div>
	);
};

export default Traffic;
