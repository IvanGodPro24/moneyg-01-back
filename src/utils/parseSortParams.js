const parseSortOrder = (sortOrder) => {
  const isKnownOrder = ['asc', 'desc'].includes(sortOrder);

  return isKnownOrder ? sortOrder : null;
};

const parseSortBy = (sortBy) => {
  const keys = ['type', 'date', 'sum', 'comment', 'categoryTitle'];

  return keys.includes(sortBy) ? sortBy : 'type';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
