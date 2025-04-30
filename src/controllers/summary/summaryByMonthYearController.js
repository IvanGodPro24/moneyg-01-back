import { getSummaryByMonthYear } from '../../services/summary/summaryByMonthYearService.js';
import createHttpError from 'http-errors';
import { summaryByMonthYearSchema } from '../../validation/summary/summaryByMonthYearSchema.js';

export const getSummaryByMonthYearController = async (req, res) => {
  const { month, year } = req.query;
  const userId = req.user._id;

  const { error } = summaryByMonthYearSchema.validate({
    month: Number(month),
    year: Number(year),
  });

  if (error) {
    throw createHttpError(
      400,
      error.details.map((detail) => detail.message),
    );
  }

  const report = await getSummaryByMonthYear(
    userId,
    parseInt(month),
    parseInt(year),
  );

  res.json(report);
};
