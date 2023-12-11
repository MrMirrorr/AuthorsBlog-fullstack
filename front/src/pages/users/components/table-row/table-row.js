import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;

	& > div {
		padding: 0 10px;
		display: flex;
	}

	.login-column {
		width: 172px;
	}

	.registered-at-column {
		width: 197px;
	}

	.role-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
