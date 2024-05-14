export const fruits = [
	{ name: "Orange", color: "orange", score: 5 },
	{ name: "Apple", color: "red", score: 3 },
	{ name: "Banana", color: "yellow", score: 1 },
	{ name: "Lime", color: "green", score: 4 },
	{ name: "Blueberry", color: "blue", score: 2 },
];

export const config = [
	{ label: "Fruits", render: (fruit) => fruit.name },
	{
		label: "Color",
		render: (fruit) => (
			<div
				className={`rounded-3 p-3 m-1`}
				style={{ backgroundColor: fruit.color, width: "40px" }}
			></div>
		),
	},
	{ label: "Score", render: (fruit) => fruit.score },
];

export const keyFn = (fruit) => fruit.name;
