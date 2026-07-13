function calculateEMA(period, data) {

    if (data.length < period)
        return null;

    const k = 2 / (period + 1);

    let ema = data[0];

    for (let i = 1; i < data.length; i++) {

        ema = data[i] * k + ema * (1 - k);

    }

    return ema;

}

module.exports = {
    calculateEMA
};
