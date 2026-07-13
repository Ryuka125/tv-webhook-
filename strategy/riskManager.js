function calculateLot(balance, riskPercent) {

    return (balance * riskPercent) / 100;

}

module.exports = {
    calculateLot
};
