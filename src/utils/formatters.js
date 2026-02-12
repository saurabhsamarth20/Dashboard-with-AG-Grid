
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getRatingColor = (rating) => {
    if (rating >= 4.5) return '#4caf50'; // Green
    if (rating >= 4.0) return '#2196f3'; // Blue
    if (rating >= 3.0) return '#ff9800'; // Orange
    return '#f44336'; // Red
};
