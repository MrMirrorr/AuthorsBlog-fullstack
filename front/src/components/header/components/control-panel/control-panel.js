import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';
import styled from 'styled-components';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	margin-right: 10px;
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAlined>
				{roleId === ROLE.GUEST ? (
					<Link to="/login">
						<Button>Войти</Button>
					</Link>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="fa-sign-out"
							margin="0"
							clickable={true}
							onClick={onLogout}
						/>
					</>
				)}
			</RightAlined>
			<RightAlined>
				<Icon
					id="fa-backward"
					margin="10px 0 0"
					clickable={true}
					onClick={() => navigate(-1)}
				/>
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon
								id="fa-file-text-o"
								margin="10px 0 0 16px"
								clickable={true}
							/>
						</Link>
						<Link to="/users">
							<Icon id="fa-users" margin="10px 0 0 16px" clickable={true} />
						</Link>
					</>
				)}
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	a {
		width: 100%;
	}
`;
