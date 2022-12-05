import { prisma } from '../../hooks.server';

export const getPostSummaries = async () => {
	const res = await prisma.autoparts.findMany();
	return res;
};
