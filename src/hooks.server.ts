// import type { Handle } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// export const handle: Handle = async ({ event, resolve }) => {
// 	const response = await resolve(event);
// 	return response;
// };
