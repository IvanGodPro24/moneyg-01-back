import { createTransaction } from '../../services/transactions/add.js';

export const createTransactionController = async (req, res) => {
  const result = await createTransaction({
    ...req.body,
    userId: req.user._id,
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a transaction!',
    data: result,
  });
};
