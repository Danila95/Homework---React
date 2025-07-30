function GreetingReact({ name }) {
	// императивный стиль кода
	const currentYear = new Date().getFullYear();

	return (
		<h1 className="container">
			Hello <i>{name}</i> world!
			{currentYear}
		</h1>
	);
}

// декларативный стиль кода
export default function App() {
	return <GreetingReact name="React" />;
}
