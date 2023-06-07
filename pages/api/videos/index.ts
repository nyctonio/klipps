import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.content.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}
