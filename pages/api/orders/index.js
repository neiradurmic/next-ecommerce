import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth } from '../../components/utils/auth';
import db from '../../components/utils/db';
import { onError } from '../../components/utils/error';

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });
  const order = await newOrder.save();
  res.status(201).send(order);
});

export default handler;
