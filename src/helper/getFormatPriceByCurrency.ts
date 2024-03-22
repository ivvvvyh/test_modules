export type CurrencyKey = 'TWD' | 'USD' | 'VND' | 'JPY' | 'KHR' | 'PHP' | 'THB' | 'MYR' | 'GBP' | 'SGD' | 'CAD' | 'HKD' | 'CNY' | 'AUD' | 'NZD';

export const getFormatPriceByCurrency = (currency: CurrencyKey, amount: number): string => {
    const currenciesWithNoDecimals: CurrencyKey[] = ['TWD', 'JPY', 'THB'];
    if (currenciesWithNoDecimals.includes(currency)) return Math.round(amount).toString();
    return (Math.round(amount * 100) / 100).toFixed(2);
};
