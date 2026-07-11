module.exports=function(ema20,ema50){

    if(ema20>ema50)
        return "BUY";

    if(ema20<ema50)
        return "SELL";

    return "WAIT";

}
