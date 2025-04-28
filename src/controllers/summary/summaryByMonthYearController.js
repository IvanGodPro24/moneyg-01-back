import { getSummaryByMonthYear } from '../../services/summary/summaryByMonthYearService.js';

export const getSummaryByMonthYearController = async (req, res) => {
  const { month, year } = req.body;
  const userId = req.user._id;

  const report = await getSummaryByMonthYear(
    userId,
    parseInt(month),
    parseInt(year),
  );

  res.json(report);
};
