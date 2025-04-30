import axios from 'axios';
import { getEnvVar } from '../../utils/getEnvVar.js';

export const fetchMonobankCurrency = async () => {
  const response = await axios.get('https://api.monobank.ua/bank/currency', {
    headers: {
      'X-Token': getEnvVar('MONO_TOKEN'),
    },
  }); // 'https://api.monobank.ua/personal/exchange',

  const filteredRates = response.data.filter(
    (rate) =>
      (rate.currencyCodeA === 840 && rate.currencyCodeB === 980) ||
      (rate.currencyCodeA === 978 && rate.currencyCodeB === 980),
  );

  return filteredRates;
};
