import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon id="fa-comment-o" margin="0 7px 0 0" size="18px" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 280px;
	margin: 20px;
	border: 1px solid #000;
	display: flex;
	flex-direction: column;

	a {
		display: flex;
		flex-direction: column;

		img {
			display: block;
		}

		.post-card-footer {
			flex: 1 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 5px;
			border-top: 1px solid #000;

			h4 {
				margin: 0;
				flex: 1 0 auto;
			}

			.post-card-info {
				padding-top: 5px;
				display: flex;
				justify-content: space-between;

				.published-at {
					display: flex;
				}

				.comments-count {
					display: flex;
				}
			}
		}
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
