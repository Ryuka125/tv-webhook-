function detectBOS(closes){

    if(closes.length<10)
        return false;

    const last=closes[closes.length-1];

    const high=Math.max(...closes.slice(-6,-1));

    return last>high;

}

module.exports=detectBOS;
