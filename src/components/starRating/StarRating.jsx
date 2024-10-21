import "./StarRating.scss";

export default function StarRating({ rating }) {
	const percentage = (rating / 5) * 100;

	return (
		<div className="star-rating">
			<div className="stars-outer">
				<div className="stars-inner" style={{ width: `${percentage}%` }}></div>
			</div>
		</div>
	);
}
