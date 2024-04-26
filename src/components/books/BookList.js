import React, { useContext } from "react";
import BooksContext from "../../context/books";

import BookShow from "./BookShow";

function BookList() {
	const { books } = useContext(BooksContext);
	const renderedBooks = books.map((book) => {
		return <BookShow book={book} key={book?.id} />;
	});
	return (
		<ul className="d-flex flex-row mb-3 justify-content-center flex-wrap">
			{renderedBooks}
		</ul>
	);
}

export default BookList;
