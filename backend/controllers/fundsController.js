const Fund = require("../models/Fund");

const getFunds = async (req , res) => {
    try{
        const funds = await Fund.findOne({
            userId: req.user.userId
        });
        res.status(200).json(funds);
    }
    catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateFunds = async (req , res) => {
    try{
        const {availableBalance , investAmount , withdrawableAmount} = req.body;
        let funds = await Fund.findOne({
            userId: req.user.userId
        });

        if(!funds){
            funds = await Fund.create({
                userId: req.user.userId,
                availableBalance,
                investedAmount,
                withdrawableAmount
            });
        }else{
            funds.availableBalance = availableBalance;
            funds.investedAmount = investAmount;
            funds.withdrawableAmount = withdrawableAmount;

            await funds.save();
        }
        res.status(200).json(funds);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {getFunds , updateFunds};