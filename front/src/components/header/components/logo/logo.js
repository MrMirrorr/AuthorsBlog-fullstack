import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 1;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link to="/" className={className}>
		<Icon id="fa-code" margin="-14px 10px 0 0" size="70px" clickable={true} />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
`;
