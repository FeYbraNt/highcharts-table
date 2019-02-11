export const toCurrency = (value) => {
    if (typeof value !== "number") return value;
    let formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(value);
}
