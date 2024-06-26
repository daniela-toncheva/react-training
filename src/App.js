import { useEffect, useState } from "react";
import { searchImages } from "./api";
import "./App.css";
import ImageList from "./components/images/ImageList";
import SearchBar from "./components/images/SearchBar";
import BookCreate from "./components/books/BookCreate";
import BookList from "./components/books/BookList";
import useBooksContext from "./hooks/use-books-context";
import Modal from "./elements-exercise/Modal";
// import Table from "./elements-exercise/Table";
import { config, fruits, keyFn } from "./data";
import SortableTable from "./elements-exercise/SortableTable";

function App() {
	const [images, setImages] = useState([
		{
			id: "L4-BDd01wmM",
			width: 5056,
			height: 3371,
			color: "#405926",
			description:
				"It has been a dream of mine for a long time to see a lion in real african wildlife. So this picture is a very special memory for me. Thanks for posing perfectly, little lion family! ",
			alt_description: "pride of lion on field",
			urls: {
				small:
					"https://images.unsplash.com/photo-1554990772-0bea55d510d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHwzfHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1554990772-0bea55d510d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHwzfHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=200",
			},
			likes: 560,
		},
		{
			id: "hht33rAqHi8",
			width: 4898,
			height: 3265,
			color: "#c0a673",
			description: "Lions at the Zoo",
			alt_description: "shallow focus photography of lion and lioness",
			urls: {
				small:
					"https://images.unsplash.com/photo-1519066629447-267fffa62d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHw0fHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1519066629447-267fffa62d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHw0fHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=200",
			},
			likes: 386,
		},
		{
			id: "Uw0PjM7WKPQ",
			width: 1945,
			height: 2916,
			color: "#26260c",
			description: "African lion photography by Bisakha Datta",
			alt_description: "lion lying on green grass during daytime",

			urls: {
				small:
					"https://images.unsplash.com/photo-1607490703747-0519d2e398a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHw1fHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1607490703747-0519d2e398a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHw1fHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=200",
			},
			likes: 417,
		},
		{
			id: "8a7ZTFKax_I",
			width: 2770,
			height: 3309,
			color: "#260c0c",
			description: "Löwenporträt",
			alt_description: "lion in black background in grayscale photography",

			urls: {
				small:
					"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHw3fHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=400",
				thumb:
					"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM5NjR8MHwxfHNlYXJjaHw3fHxsaW9uc3xlbnwwfHx8fDE3MTM5NDc1OTZ8MA&ixlib=rb-4.0.3&q=80&w=200",
			},
			likes: 802,
		},
	]);
	const { fetchBooks } = useBooksContext();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		fetchBooks();
	}, []);

	const handleSubmit = async (term) => {
		const result = await searchImages(term);
		setImages(result);
	};

	const handleModalButtonClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className={showModal ? " bg-secondary bg-gradient" : ""}>
			<div className="container text-center">
				<SortableTable data={fruits} config={config} keyFn={keyFn}/>
			</div>
			<hr/>
			<div className="d-flex p-1 flex-row">
				<div className="container text-center">
					<h3>Images:</h3>
					<SearchBar onSubmit={handleSubmit} />
					<ImageList images={images} />
				</div>
				<div className="container text-center">
					<button
						className="btn btn-primary m-2"
						onClick={handleModalButtonClick}
					>
						Show Modal
					</button>
					{showModal && (
						<Modal onClose={handleCloseModal}>
							<p>Some modal text goes here. Click close to accept</p>
						</Modal>
					)}
					<hr />
					<BookCreate />
					<h3>Reading List</h3>
					<BookList />
					<hr />
				</div>
			</div>
		</div>
	);
}

export default App;
