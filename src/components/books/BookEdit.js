import React, { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
	const [title, setTitle] = useState(book.title);
	const { editBookById } = useBooksContext();
	const handleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit();
		editBookById(book.id, title);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<label htmlFor="book-title" className="input-group-text">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Edit book
				</button>
			</form>
		</div>
	);
}

export default BookEdit;
