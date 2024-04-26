import ImageShow from "./ImageShow";

function ImageList({ images }) {
	// console.log(images);
	const renderedImages = images.map((image) => {
		return <ImageShow image={image} key={image.id} />;
	});

	return (
		<div>
			<h3>
				Images fetched: <span>{images.length}</span>
			</h3>
			<ul className="d-flex flex-row mb-3 justify-content-center flex-wrap">
				{renderedImages}
			</ul>
		</div>
	);
}

export default ImageList;
