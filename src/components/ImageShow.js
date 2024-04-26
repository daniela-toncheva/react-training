function ImageShow({ image }) {
	return (
		<li className="card m-1 mb-2" style={{ width: "400px" }}>
			<div
				className="card-header"
				style={{ backgroundColor: image.color, color: "white" }}
			>
				Unsplash images
			</div>
			<img
				src={image.urls.small}
				alt="random"
				className="card-img-top"
				style={{ height: "300px" }}
			/>
			<div className="card-body">
				<p className="card-text">
					{image.description ? image.description : image.alt_description}
				</p>
			</div>
			<div className="card-footer text-muted">Liked: {image.likes} times</div>
		</li>
	);
}

export default ImageShow;
