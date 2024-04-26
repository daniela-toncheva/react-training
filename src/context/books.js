import { createContext, useState } from "react";
import axios from "axios";

const dbApi = "http://localhost:3001/";
const booksUrl = dbApi + "books/";

const BooksContext = createContext();

function Provider({ children }) {
	const [books, setBooks] = useState([]);
	const fetchBooks = async () => {
		const resp = await axios.get(booksUrl);
		setBooks(resp.data);
	};

	const createBook = async (title) => {
		const response = await axios.post(booksUrl, { title });
		const updatedBooks = [...books, response.data];

		setBooks(updatedBooks);
	};

	const editBookById = async (id, newTitle) => {
		const url = booksUrl + id;
		const response = await axios.put(url, {
			title: newTitle,
		});
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data };
			}
			return book;
		});
		setBooks(updatedBooks);
	};

	const deleteBookById = async (id) => {
		const url = booksUrl + id;
		await axios.delete(url);
		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	const valueToShare = {
		books,
		fetchBooks,
		createBook,
		editBookById,
		deleteBookById,
	};

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}
export { Provider };
export default BooksContext;
