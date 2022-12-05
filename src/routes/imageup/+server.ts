import { writeFileSync } from 'fs';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = JSON.parse(await new Response(request.body).text());
	const file = data['image'];
	writeFileSync(`static/avatar.jpg`, file, 'base64');
	return new Response();
};
