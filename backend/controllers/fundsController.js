const Fund = require("../models/Fund");

const getFunds = async (req , res) => {
    try{
        const funds = await Fund.findOne({
            userId: req.user.userId
        });

        if(!funds){
            return res.status(404).json({
                success: false,
                message: "Fund account not found.",
            });
        }
        res.status(200).json({
            success: true,
            funds,
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Unable to fetch funds.",
        });
    }
};

const updateFunds = async (req , res) => {
    try{
        const {availableBalance , investedAmount ,  withdrawableAmount} = req.body;
        if(availableBalance < 0 || investedAmount < 0 || withdrawableAmount < 0){
            return res.status(400).json({
                success: false,
                message: "Amounts cannot be negative.",
            });
        }

        let funds = await Fund.findOne({
            userId: req.user.userId
        });

        if(!funds){
            funds = await Fund.create({
                userId: req.user.userId,
                availableBalance,
                investedAmount,
                withdrawableAmount,
            });
        }else{
            funds.availableBalance = availableBalance;
            funds.investedAmount = investedAmount;
            funds.withdrawableAmount = withdrawableAmount;

            await funds.save();
        }
        res.status(200).json({
            success: true,
            message: "Funds updated successfully.",
            funds,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Unable to update funds.",
        });
    }
};

module.exports = {getFunds , updateFunds};