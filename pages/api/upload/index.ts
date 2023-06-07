import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('req', req.body);
  try {
    const { videoTitle, videoDescription, videoUrl } = req.body;
    const result = await prisma.user.update({
      where: {
        id: '645a3edebc9df2fbde6835ff',
      },
      data: {
        Content: {
          create: {
            title: videoTitle,
            description: videoDescription,
            url: videoUrl,
          },
        },
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}
