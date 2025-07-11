const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isValidType = ['income', 'expense'].includes(type);
  if (isValidType) return type;
};

const parseFloatSum = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseFloat(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};

const parseDate = (date) => {
  const isString = typeof date === 'string';
  if (!isString) return;

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    return;
  }

  return parsedDate;
};

const parseString = (str) => {
  const isString = typeof str === 'string';
  if (!isString) return;

  const trimmedStr = str.trim();
  if (trimmedStr.length === 0) return;

  return trimmedStr;
};

export const parseFilterParams = (query) => {
  const { type, categoryTitle, minSum, maxSum, dateFrom, dateTo, comment } =
    query;

  const parsedType = parseType(type);
  const parsedCategoryTitle = parseString(categoryTitle);
  const parsedMinSum = parseFloatSum(minSum);
  const parsedMaxSum = parseFloatSum(maxSum);
  const parsedDateFrom = parseDate(dateFrom);
  const parsedDateTo = parseDate(dateTo);
  const parsedComment = parseString(comment);

  return {
    type: parsedType,
    categoryTitle: parsedCategoryTitle,
    minSum: parsedMinSum,
    maxSum: parsedMaxSum,
    dateFrom: parsedDateFrom,
    dateTo: parsedDateTo,
    comment: parsedComment,
  };
};
