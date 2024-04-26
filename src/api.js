import { queries } from "@testing-library/react";
import axios from "axios";
const urlUnsplash = "https://api.unsplash.com/search/photos";
const dbApi = "http://localhost:3001/";

export const searchImages = async (term) => {
	const response = await axios.get(urlUnsplash, {
		headers: {
			Authorization: "Client-ID 07TOmLigmODjQnf80iGGoXaW5YaSK9odcWmnBT5fWGw",
		},
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export const addBook = async (title) => {
	const url = dbApi + "books";
	const response = await axios.post(url, { title });
	console.log(response);
	// return response.json().data;
};
