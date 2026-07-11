function calculateEMA(period, prices){

    if(prices.length < period) return null;

    const k = 2 / (period + 1);

    let ema = prices[0];

    for(let i = 1; i < prices.length; i++){

        ema = prices[i] * k + ema * (1-k);

    }

    return ema;

}

module.exports = calculateEMA;
