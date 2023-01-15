const TextAndImage = ({ title, paragraph, imgUrl, imgAlt, direction }) => {
	return (
		<div className="text-image-container" style={{ flexDirection: direction }}>
			<div className="text-container">
				<h2 className="text-container__title">{title}</h2>
				<p className="text-container__paragraph">{paragraph}</p>
			</div>
			<div className="img-container">
				<img src={imgUrl} alt={imgAlt} />
			</div>
		</div>
	);
};

export default TextAndImage;
