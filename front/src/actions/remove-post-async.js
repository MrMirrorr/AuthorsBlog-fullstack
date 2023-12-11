import { request } from '../utils';

export const removePostAsync = (id) => () => request(`/posts/${id}`, 'DELETE');
