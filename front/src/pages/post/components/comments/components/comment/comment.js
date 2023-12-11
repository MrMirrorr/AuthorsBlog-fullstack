import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../../actions';
import { Icon } from '../../../../../../components';
import { checkAccess } from '../../../../../../utils';
import { ROLE } from '../../../../../../constants';
import { selectUserRole } from '../../../../../../selectors';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="info-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" margin="0 10px 0 0" size="18px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
						{publishedAt}
					</div>
				</div>
				<div className="text-content">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
					size="18px"
					clickable={true}
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	.comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
	}

	.info-panel {
		display: flex;
		justify-content: space-between;
	}

	.author {
		display: flex;
	}

	.published-at {
		display: flex;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
