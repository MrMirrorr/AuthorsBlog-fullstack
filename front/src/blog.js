import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Error, Footer, Header, Modal } from './components';
import { Authorization, Main, Post, Registration, Users } from './pages';
import styled from 'styled-components';
import { ERROR } from './constants';

const AppColumn = styled.div`
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #fff;
`;

const Page = styled.div`
	padding: 120px 0 20px;
	position: relative;
	flex-grow: 1;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
