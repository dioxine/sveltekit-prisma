import { getPostSummaries } from './api/db';

export const load = () => {
	return {
		post:  getPostSummaries()
	};
};
