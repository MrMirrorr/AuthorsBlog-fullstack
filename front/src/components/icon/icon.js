import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = ({ className, id, clickable, margin, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	margin: ${({ margin = 'initial' }) => margin};
	font-size: ${({ size = '24px' }) => size};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	transition: transform 0.2s linear;

	&:hover {
		${({ disabled = false, clickable = false }) =>
			!disabled && clickable
				? 'animation: jump;	animation-duration: 0.7s; cursor: pointer;'
				: ''}
	}

	@keyframes jump {
		0% {
			transform: initial;
		}
		25% {
			transform: translateY(-2px);
		}
	}
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
	clickable: PropTypes.bool,
	margin: PropTypes.string,
};
