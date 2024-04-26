import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../../context/books";

function BookShow({ book }) {
	const [showEdit, setShowEdit] = useState(false);
	const { deleteBookById } = useContext(BooksContext);
	const handleDeleteClick = () => {
		deleteBookById(book.id);
	};
	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};
	const handleSubmit = () => {
		setShowEdit(false);
	};

	let content = <h4 className="card-title p-2">{book.title}</h4>;
	if (showEdit) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />;
	}

	return (
		<li className="card m-2" style={{ width: "200px" }}>
			<img
				src={`https://picsum.photos/seed/${book.id}/200/200`}
				alt={book.title}
				className="img-thumbnail"
			/>
			{content}
			<div className="btn-group btn-group-sm">
				<button
					type="button"
					className="btn btn-outline-warning fw-semibold"
					style={{ width: "40px", color: "black" }}
					onClick={handleEditClick}
				>
					<span>&#9998; Edit</span>
				</button>
				<button
					type="button"
					className="btn btn-outline-danger fw-semibold"
					style={{ width: "40px", color: "black" }}
					onClick={handleDeleteClick}
				>
					<span>&otimes; Delete</span>
				</button>
			</div>
		</li>
	);
}

export default BookShow;
