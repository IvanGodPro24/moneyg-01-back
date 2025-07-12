import Transaction from '../../db/model/transactions.js';
import { calculatePaginationData } from '../../utils/calculatePaginationData.js';

export async function getTransactions(
  userId,
  page,
  perPage,
  sortOrder,
  sortBy = 'type',
  filter = {},
) {
  const skip = (page - 1) * perPage;

  const matchStage = { userId };

  if (filter.type) matchStage.type = filter.type;
  if (filter.minSum || filter.maxSum) {
    matchStage.sum = {};
    if (filter.minSum) matchStage.sum.$gte = filter.minSum;
    if (filter.maxSum) matchStage.sum.$lte = filter.maxSum;
  }
  if (filter.dateFrom || filter.dateTo) {
    matchStage.date = {};
    if (filter.dateFrom) matchStage.date.$gte = new Date(filter.dateFrom);
    if (filter.dateTo) matchStage.date.$lte = new Date(filter.dateTo);
  }
  if (filter.comment) {
    matchStage.comment = { $regex: filter.comment, $options: 'i' };
  }

  const pipeline = [
    { $match: matchStage },
    {
      $lookup: {
        from: 'categories',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'categoryId',
      },
    },
    { $unwind: '$categoryId' },
  ];

  if (filter.categoryTitle) {
    pipeline.push({
      $match: {
        'categoryId.title': {
          $regex: filter.categoryTitle,
          $options: 'i',
        },
      },
    });
  }

  const totalCountPipeline = [...pipeline, { $count: 'count' }];

  if (sortOrder && sortBy) {
    const sortField =
      sortBy === 'categoryTitle' ? 'categoryId.title' : sortBy;

    pipeline.push({ $sort: { [sortField]: sortOrder === 'asc' ? 1 : -1 } });
  }

  pipeline.push({ $skip: skip });
  pipeline.push({ $limit: perPage });

  const [results, countResult] = await Promise.all([
    Transaction.aggregate(pipeline),
    Transaction.aggregate(totalCountPipeline),
  ]);

  const totalItems = countResult[0]?.count || 0;

  const paginationData = calculatePaginationData(totalItems, perPage, page);

  return {
    data: results,
    ...paginationData,
  };
}

export async function getTransaction(transactionId, userId) {
  return await Transaction.findOne({
    _id: transactionId,
    userId,
  }).populate('categoryId', 'title');
}

export async function getTransactionsByCategory(userId, categoryId) {
  return await Transaction.find({ userId, categoryId }).populate(
    'categoryId',
    'title',
  );
}
