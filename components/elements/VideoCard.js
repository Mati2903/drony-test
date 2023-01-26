const VideoCard = ({ embedID, title }) => {
	return (
		<div className="video-card__container">
			<iframe
				width="100%"
				height="100%"
				className="video-card__iframe"
				src={`https://www.youtube.com/embed/${embedID}`}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				controls={2}
			></iframe>
		</div>
	);
};

export default VideoCard;
