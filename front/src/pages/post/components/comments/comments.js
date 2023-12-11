import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { selectUserRole } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';
import { PROP_TYPE, ROLE } from '../../../../constants';
import { checkAccess } from '../../../../utils';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = checkAccess([ROLE.GUEST], userRole);

	return (
		<div className={className}>
			{!isGuest ? (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="18px"
						clickable={true}
						onClick={() => onNewCommentAdd(postId, newComment)}
					/>
				</div>
			) : (
				<div className="new-comment-not-access">
					Оставлять комментарии могут только{' '}
					<Link to="/login">авторизованные</Link> пользователи!
				</div>
			)}
			<div className="comments">
				{comments.length ? (
					comments.map(({ id, author, content, publishedAt }) => (
						<Comment
							key={id}
							postId={postId}
							id={id}
							author={author}
							content={content}
							publishedAt={publishedAt}
						/>
					))
				) : (
					<div className="empty-comments">
						Вы можете стать первым, кто оставит здесь комментарий...
					</div>
				)}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	.new-comment {
		display: flex;
		width: 100%;
		height: 120px;
		margin: 20px 0 0;

		textarea {
			width: 550px;
			resize: none;
			font-size: 18px;
		}
	}

	.new-comment-not-access {
		margin: 20px;
		color: red;
		text-align: center;

		a {
			color: #000;
			text-decoration: underline;
		}
	}

	.empty-comments {
		text-align: center;
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
