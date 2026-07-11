function detectCHOCH(closes){

    if(closes.length<10)
        return false;

    const last=closes[closes.length-1];

    const low=Math.min(...closes.slice(-6,-1));

    return last<low;

}

module.exports=detectCHOCH;
