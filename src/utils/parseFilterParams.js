import { endOfDay } from 'date-fns';

const parseType = (type) => {
  if (typeof type !== 'string') return;

  const isValidType = ['income', 'expense'].includes(type);
  if (isValidType) return type;
};

const parseFloatSum = (number) => {
  if (typeof number !== 'string') return;

  const parsedNumber = parseFloat(number);
  if (Number.isNaN(parsedNumber)) return;

  return parsedNumber;
};

const parseDate = (date, isEnd = false) => {
  if (typeof date !== 'string') return;

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return;

  return isEnd ? endOfDay(parsedDate) : parsedDate;
};

const parseString = (str) => {
  if (typeof str !== 'string') return;

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
  const parsedDateTo = parseDate(dateTo, true);
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
