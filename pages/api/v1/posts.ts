import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Post } from '../../../types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const postData = JSON.parse(req.body);

    return res.json({
      status: 'Saving post to DB',
      ...postData,
    })
  } else {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    return res.json(response.data);
  }
}

