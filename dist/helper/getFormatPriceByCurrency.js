"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatPriceByCurrency = void 0;
const getFormatPriceByCurrency = (currency, amount) => {
    const currenciesWithNoDecimals = ['TWD', 'JPY', 'THB'];
    if (currenciesWithNoDecimals.includes(currency))
        return Math.round(amount).toString();
    return (Math.round(amount * 100) / 100).toFixed(2);
};
exports.getFormatPriceByCurrency = getFormatPriceByCurrency;
