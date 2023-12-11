import { useState } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../../../constants';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { request } from '../../../../utils';
import styled from 'styled-components';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={(e) => onRoleChange(e)}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId} key={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						onClick={() => onRoleSave(id, selectedRoleId)}
						disabled={isSaveButtonDisabled}
						clickable={true}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				clickable={true}
				onClick={onUserRemove}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	margin-top: 10px;
	display: flex;
	border: 1px solid #000;

	select {
		padding: 0 5px;
		font-size: 16px;
	}
`;

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
