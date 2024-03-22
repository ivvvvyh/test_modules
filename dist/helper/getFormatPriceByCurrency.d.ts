export type CurrencyKey = 'TWD' | 'USD' | 'VND' | 'JPY' | 'KHR' | 'PHP' | 'THB' | 'MYR' | 'GBP' | 'SGD' | 'CAD' | 'HKD' | 'CNY' | 'AUD' | 'NZD';
export declare const getFormatPriceByCurrency: (currency: CurrencyKey, amount: number) => string;
