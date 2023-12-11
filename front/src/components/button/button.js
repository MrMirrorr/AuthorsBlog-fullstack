import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	border: 1px solid #000;
	border-radius: 2px;
	background-color: #eee;
	cursor: pointer;
	transition: transform 0.2s linear;

	&:not(:disabled):hover {
		transform: scale(1.03);
	}

	&:disabled {
		cursor: default;
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
