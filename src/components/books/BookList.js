import React from "react";

import BookShow from "./BookShow";
import useBooksContext from "../../hooks/use-books-context";

function BookList() {
	const { books } = useBooksContext();
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
