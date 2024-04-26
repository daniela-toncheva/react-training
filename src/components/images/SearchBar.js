import { useState } from "react";

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");
	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input
					className="shadow p-3 mb-5 mt-5 rounded"
					type="search"
					value={term}
					placeholder="Search images"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default SearchBar;
