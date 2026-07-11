function calculateEMA(period, prices){

    if(prices.length < period)
        return null;

    const multiplier = 2/(period+1);

    let ema =
        prices.slice(0,period)
        .reduce((a,b)=>a+b,0)/period;

    for(let i=period;i<prices.length;i++){

        ema=((prices[i]-ema)*multiplier)+ema;

    }

    return Number(ema.toFixed(2));

}

module.exports = calculateEMA;
