import React, { useContext, useState } from "react";
import BooksContext from "../../context/books";

function BookCreate() {
	const [title, setTitle] = useState("");
	const { createBook } = useContext(BooksContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle("");
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return (
		<div className="container ml-2">
			<form onSubmit={handleSubmit}>
				<div className="input-group mb-3">
					<label htmlFor="book-title" className="input-group-text">
						Book Title
					</label>
					<input
						type="text"
						className="form-control"
						id="book-title"
						value={title}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary" disabled={!title}>
					Create a book
				</button>
			</form>
		</div>
	);
}

export default BookCreate;
