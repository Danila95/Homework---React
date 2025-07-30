import { createElement } from "react";

function Greeting({ name }) {
	// императивный стиль кода
	const currentYear = new Date().getFullYear();
	return createElement(
		"h1",
		{ className: "container" },
		`Hello ${name}`,
		` world! ${currentYear}`
	);
}

export default function App() {
	// декларативный стиль кода
	return createElement(Greeting, { name: "React" });
}
