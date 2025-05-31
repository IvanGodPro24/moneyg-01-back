import { getSummaryByMonthYear } from '../../services/summary/summaryByMonthYearService.js';

export const getSummaryByMonthYearController = async (req, res) => {
  const { month, year } = req.query;
  const userId = req.user._id;

  const parsedMonth = month ? parseInt(month) : null;
  const parsedYear = parseInt(year);

  const report = await getSummaryByMonthYear(userId, parsedMonth, parsedYear);

  res.json(report);
};
