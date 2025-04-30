import { fetchMonobankCurrency } from '../../services/currency/monoCurrencyService.js';

export const monoCurrencyController = async (req, res) => {
  const currency = await fetchMonobankCurrency();

  res.json(currency);
};
