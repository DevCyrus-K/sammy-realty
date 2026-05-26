import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { propertyId } = req.query;

      const numericPropertyId = parseInt(propertyId as string, 10);

      if (!Number.isInteger(numericPropertyId)) {
        return res.status(400).json({ error: 'Property id is required' });
      }

      const photos = await prisma.propertyPhoto.findMany({
        where: { propertyId: numericPropertyId },
        orderBy: { order: 'asc' },
      });

      res.status(200).json(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
      res.status(500).json({ error: 'Failed to fetch photos' });
    }
  } else if (req.method === 'POST') {
    try {
      const { propertyId, url, order } = req.body;

      const numericPropertyId = parseInt(propertyId, 10);

      if (!Number.isInteger(numericPropertyId) || !url) {
        return res.status(400).json({ error: 'Property id and photo URL are required' });
      }

      const photo = await prisma.propertyPhoto.create({
        data: {
          propertyId: numericPropertyId,
          url,
          order: order || 0,
        },
      });

      res.status(201).json(photo);
    } catch (error) {
      console.error('Error creating photo:', error);
      res.status(500).json({ error: 'Failed to create photo' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { photoId } = req.query;

      const numericPhotoId = parseInt(photoId as string, 10);

      if (!Number.isInteger(numericPhotoId)) {
        return res.status(400).json({ error: 'Photo id is required' });
      }

      await prisma.propertyPhoto.delete({
        where: { id: numericPhotoId },
      });

      res.status(204).end();
    } catch (error) {
      console.error('Error deleting photo:', error);
      res.status(500).json({ error: 'Failed to delete photo' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
