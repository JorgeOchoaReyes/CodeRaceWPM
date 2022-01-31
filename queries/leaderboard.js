const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Leaderboard = mongoose.model('LEADERBOARD', new mongoose.Schema({
    name: {type: String}, 
    Lang: {type: String}, 
    score: {type: Number}
}), 'LEADERBOARD');

const getTopScores = async () => {
    try {
        return await Leaderboard.find({}).sort({score: -1}).exec();
    }
    catch (err) {
        return console.error('Unable to retrieve data from leaderboard'); 
    }
}

const insertScore = async (user) => {
    try {
        return await Leaderboard.insertMany({name: user.name, score: user.score, Lang: user.Lang});
    } catch (err) {
        return console.error("Uanble to register new score.");
    }
}

const rebalance = async (bound) => {
    let board = [];
    try{
        board = await getTopScores();
    } catch (err) {return console.error("Unable to update score board.")};

    if (board.length <= 10) return; 

    try {
        await Leaderboard.deleteMany({score: {$lte: bound}})
    } catch (err) {
        return console.error("Unable to update leaderboard.")
    }

    console.log("Board Updated");
    return; 

}

router.get('', async (req, res) => {
    const boardList = await getTopScores(); 
    let results = []; 
    if(boardList.length <= 10) {
        results = boardList; 
    }
    if(boardList.length > 10) {
        for(let i = 0; i <= 10; i++) {
            results.push(boardList[i]);
        }
    }

    res.status(200).json(
        results
    );
})

router.post('/newHighScore', async (req, res) => {
    const user = req.body.user;
    const bound = req.body.bound; 

    console.log(req.body);  
    await insertScore(user); 
    await rebalance(bound); 
    res.status(200); 
})

module.exports = router; 