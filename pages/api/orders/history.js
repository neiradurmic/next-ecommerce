import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth } from '../../components/utils/auth';
import db from '../../components/utils/db';
import { onError } from '../../components/utils/error';

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

export default handler;
